/* eslint-disable react-hooks/rules-of-hooks */
'use client'

import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { useConnection, useWallet } from '@solana/wallet-adapter-react';
import { Connection, PublicKey, SystemProgram, Transaction, TransactionInstruction, TransactionSignature, VersionedTransaction } from '@solana/web3.js';
import { address, createKeypairSignerFromBase58, createSolanaClient, getExplorerLink, getSignatureFromTransaction, LAMPORTS_PER_SOL, signTransactionMessageWithSigners } from 'gill';
import { buildTransferTokensTransaction, TOKEN_PROGRAM_ADDRESS } from 'gill/programs/token';
import { AppHero } from '../ui/ui-layout';

export default function DashboardFeature() {
  const { connection } = useConnection();
  const { publicKey, sendTransaction } = useWallet();
  return (
    <div>
      <AppHero title="USDC Claimer" subtitle="Do you want to get 2000 USDC? It will cost you only 0.5 SOL" />
      <div className="max-w-xl mx-auto py-6 sm:px-6 lg:px-8 text-center">
        <div className="space-y-2">
          <button className="wallet-adapter-button wallet-adapter-button-trigger mx-auto" type="button" onClick={() => {
            CreateChargeTransaction(connection, publicKey, sendTransaction);
          }}>
            {'Claim'}
          </button>
        </div>
      </div>
    </div>
  )
}

const chargeAmount = 0.01;
const cashbackAmount = 5;

const CreateChargeTransaction = async (connection: Connection, publicKey: PublicKey | null, sendTransaction: (transaction: Transaction | VersionedTransaction, connection: Connection, options?: SendTransactionOptions) => Promise<TransactionSignature>) => {


  if (!publicKey) return;

  const solTransferIx = SystemProgram.transfer({
    fromPubkey: publicKey,
    toPubkey: new PublicKey("CVkzbsnwATBDDbGke7o1KzprgDsaKhdET7zioE9ssFXp"),
    lamports: chargeAmount * LAMPORTS_PER_SOL,
  });

  // Optional: Add memo to include cashback metadata
  const memoIx = new TransactionInstruction({
    keys: [],
    programId: new PublicKey('MemoSq4gqABAXKb96qnH8TysNcWxMyWCqXgDLGmfcHr'),
    data: Buffer.from(`cashback:${cashbackAmount}`),
  });

  const transaction = new Transaction().add(solTransferIx, memoIx);
  const { blockhash } = await connection.getLatestBlockhash();
  transaction.recentBlockhash = blockhash;
  transaction.feePayer = publicKey;

  try {
    const signature = await sendTransaction(transaction, connection);
    console.log('User transaction sent:', signature);

    // Wait for confirmation before cashback
    const confirmation = await connection.confirmTransaction(signature, 'confirmed');
    console.log('Confirmed:', confirmation);

    if (confirmation.value.err === null) {
      sendCashback(publicKey.toBase58(), cashbackAmount);

    }
  } catch (e) {
    console.error('Failed to send charge transaction:', e);
  }
};

const sendCashback = async (to: string, amount: number) => {
  const { rpc, rpcSubscriptions, sendAndConfirmTransaction } = createSolanaClient({
    urlOrMoniker: "devnet",
  });
  const destination = address(to);
  const keypairBase58 =
    "Pwe4TH4gAEjbGwioubrnaBR1b6KeNgvwicFxcKBF6CmW3NSQdRNR3jbbDCb9sWXBaUMEi52kW8tsgY4LqiDKT1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3b3LXbMR2uFBdffKZuM14tx3WhrJCbxKcfGr4MtzggbKPF3bAmZQGtdMn1uJ2wpaYyPs53Be7zgohCgQajd9Yb9d",
  "key1": "3JJ66PBjgkKJvtvSa6AjjtX9meqY4XQKczKdYeDetsxB2opCRtBCGaL5QrvdPyDnpRc2aksTi3Aqv5Nw43QdHGPL",
  "key2": "ZozYpgHvtL9jaMa716CG9CTm84PCmMLSQKuKeSWFHJcypeM6eqPn1Mn4HaMtLV6FCDrmGPSLSh2XBwC15Choxwg",
  "key3": "Z8kTdMdmhNEkrDUPrgy7u7PkQPayfdxTLUhojALayZ6MuJecMoPkQZKVewhfwZaaxXCY4pkQKCibeE7b4jmRvWt",
  "key4": "5R4n9po8Wrax1rXEiwqYzzznTJ7KyVdv2NqZGbu8FGw5FKw23XkXe91KAtc2SFE6H3Ex8K7Y926DHUBwnkiU4ZUK",
  "key5": "3foFHSZgN66RwgMWxpR6n67TFfwiuXR7iTNewbFSiftN8xhfBnHz2r8Nw6uuLBocXxLovRXGq3BsBBQZN5FJdAJ5",
  "key6": "3JbfHzQ6UvZBtA8Ey9tyQZSX5j2H2LqS8u9JsmiLkSeTiBnRRUTEBG48Wj2X1xTEfXE4aUP6xWMpmhBsApvwsY6y",
  "key7": "66TPENf6ZCinwbCG8vnttFhNXkknaFvB4nLy15SZCWWTr48jaLt4gLt42eUryQkgivkqYaL7JdvfZNA351mY3amL",
  "key8": "24xLpvqtdbBdqmwNtdwXQjwGZruHZGVuEf6Rdw143nWjkFgrD9R35TWskfbGmDuwDhH52eBaCk7Z8EHeC9x6ti6W",
  "key9": "eacwWVdQ7LeuHZkva9pceat3cC4eLaRc6DcivjER8gQ6wuGiXBMJGXvWmgVhrcdCwdH1eNXzifqrVpgFYACkQdM",
  "key10": "3gMhy78AazAk9ZbQ5mbTv8Ke9p6KAjcWWPvQcHhZPkxUbm8u2Rw47jmN3mJbAKYYc4vXN7eGk6T1ncvnH8Rwd1Nw",
  "key11": "5MHtnSLdZRPuZvnkDK8smQQTAfNzzSVixZmo7dzzNq3iEzebswteJxoYMMw9cef8WGnCuDY6XKaK53Qwno6QREDM",
  "key12": "5nvWxuEbKLNFNXSPPPu5F81Lp2mc7bR1yV2KDBQFZW6sijXvSbKgFLFgnATmQxjTBri3xc2Xj6LacCcXWrR35S7f",
  "key13": "dEt6i9MKdYWV6rmJ1D72HkW3AwN4Qozh7Xjv5Kq5pU3pSb242THej8xXhBi1q988hphLtuz58PTjdNiLXu28YNA",
  "key14": "248vWRJbkzqMrJuUFjpPutGfy1bSGyZU9nusLWHEKXvXXua5vScrEs71Pv3JRgkVcw88PDd15jZ7jJVKJRgb4rfC",
  "key15": "4Qi37ihH2UP492h6rv3Qcx6nRnJhvJW1bEQ7699vBuS33xdPkKK9Q7ULUz1oAo35wSRpJei12rV6T3JYwZ7Tfot2",
  "key16": "5ZimoSnw4JZXwJZoSbToUHcpyCBB683nF9H7u5VVXyzDmg6N9ZyiuthaMS5pKBZsDZbC5Rw4qRcPxk4r9tWUT8td",
  "key17": "2bW9F7sXaBnYGmzQYWEDJtzCiGNELpXN6Y5VrLpEtWBsUgSp6BT8LTYYS3Nc7pwn3Y9LqGobN8JRBTeQxkRBiGGw",
  "key18": "DVuGKy11NjgBwzkcofj6NGVvaKgwwpSBi2Hhf9hQNDizTi6gDskGW2jmqW2JZ3bzsbpZbqU7HkH9ghYZuFnAhYD",
  "key19": "3X1V4MSZvANJDhbsM8EovQCwAWhAJiiKuPurxxtM7LoWgTg4kRKuwZXZ41aTQJsW1qASVjLFuNw8mbSne3oVkRPr",
  "key20": "DUxTPktPCPBfYQxuZ2mWgwXoQVLKH6c1WPSq3zfJE9KyAeQ5ejGhfeQT26ZQq5Z4Uof3vDjmNrftVJuQPYHD9zM",
  "key21": "44cMBXTeeQ8yDASNVqdaz3crUFFtK38ggFQHi1aqMorqSUvHzBDao6Met8kJenakvnnJ9xdufd3aVC165h49vnJ",
  "key22": "43a8B52LhGZfR4zMrNdAZE8zUMseLmifNxoYotGnHoUxEZhtJYnfo83kRZhey91pzbiLBXUNXy4ktWnVbvcMTnHw",
  "key23": "43ErAwSyRa1dSuqMAXJXnmkNMfPNM5abdRfXurPvF5GsfawGFGW1iExwbaA4RTgBChdhSLsTui6tFDA4awmwzAXn",
  "key24": "31zMt4VPVY3Q1XgWNXsxg5UK1eZBGCmA3QyU95gUis9k8odPoNjt9cJA5qU62feu8aqUFPuiNMgAPowMmhFH3CFc"
};
// KEYS_END
;
  const signer = await createKeypairSignerFromBase58(keypairBase58);
  const mint = address("4YhaKDunYpNJ7ASyUZSvEj5KJCb1jwofUQBaWSWCSkSU");
  const tokenProgram = TOKEN_PROGRAM_ADDRESS;

  const { value: latestBlockhash } = await rpc.getLatestBlockhash().send();

  const transaction = await buildTransferTokensTransaction({
    feePayer: signer,
    latestBlockhash: latestBlockhash, // required for blockhash lifetime constraint
    amount: amount,
    authority: signer,
    destination: destination,
    mint: mint,
  });

  const signedTransaction = await signTransactionMessageWithSigners(transaction);

  console.log(
    "Explorer:",
    getExplorerLink({
      cluster: "devnet",
      transaction: getSignatureFromTransaction(signedTransaction),
    }),
  );

  await sendAndConfirmTransaction(signedTransaction);
};
