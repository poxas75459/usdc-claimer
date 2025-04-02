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
    "3S53McXSRnUP3gcFDfk3avwZe7TXGPogVQtY3dMHc111czTppsQBbAMioUktR29tK6q8LvE8qipuaokxyHwwL6aD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SmsogSVNPWmSaRTdmUgiqJEMTTtP92uDMFw7UDRrzrYBCxfbsNea5U9EhZkardZfiRzjPCXyGZZuWLMdCpYuFbM",
  "key1": "26zQRbcy9SCGmnzKmYD5gPBSMNPULAW8UYradtubpLA2Wpwf6UY7jVZzP6e9jjVhwvShhvyWbyGRsikdVQQrk7xK",
  "key2": "2UfzNbLU41db3BaZfyt38tc17yGRZSPwyVJDnZtTnZcsvrzv8v4uF7U3seK68d24bdLrZHJ3jhQwL7f9J5BaTM3H",
  "key3": "63au9XpUTyq1kTgBHMyhQZ4pbgyjxDw8txifLMXLBvn7EwGwjgCUdXUUM16beT4eUY9aATw6pQJFgstpJPE12H28",
  "key4": "48S4uukvoXbbuKo5fGM68cerkHqBZoCYwLe2UVAP3wzhqNRFTjMivtafeQEdxdg8g7yuTSQB46Y44AjRFMprVyHF",
  "key5": "3R5Fbn6j4K6YhExE2DAaRCLurR8fyBkyEybPywjtajLjkA7eUQyHb1BpzsmfrvnqDJvrRVVDTEGBsB1bfDWPBC9r",
  "key6": "65s2e3KDHt314REJ97jrQo4K4C12KaNE4ZfsPJWG2E6LSbCgQ8dCTDj6DJqpm6x29nahpUq3C57QjWjqnhd72auc",
  "key7": "5d1a46K13tDwekMhErZYRNjyhXfiA6HKNKSNUSwfiZkizXgTN8DpcSysztPCNbrWKYcGdwmFzQBW5gNDy27YqgPm",
  "key8": "5bjjUQMdSc5LyxhVjq4uVWPQskXcMWvggcggwkpspqire3yivsJxPNNK3mgvFD1zvYKuin3pzMXcMyRg1FyHXFi8",
  "key9": "5BgYPy14f9HwZwq8TfqGn79KrnAJUbbcn9cWoZ3LfL6gYjty9Vuchzocpt9CdtY9BNJtHyrVNsNxdbGM9BDbpr43",
  "key10": "4eUwFekNQBWNUUQZEDbL6We6WSKFS4KmxCUR6XH495rBeaSpdR7VmscQrGmvecQsyyTLwidbncAtVPgT96TGV1yh",
  "key11": "qKkQzer8r7XizSJiFmSpetoLSR9HxwBqC7QNonjH4MQkJyK9BcKGErJoB8gm4r1prLkDCra7ecToorCHMmU5Yaa",
  "key12": "63CmMzxf3km79M6rxHGJRvmfH9SrPVQX9SLrz5th1Vn7P715heYyBbMyLXnHyT29WwbWvoa3iiLQi4JoS8vNRVkJ",
  "key13": "43GodxuB71rkVLhHoB1fjYvcRhk1nupMyN8vs5KTryqMyLhLWuPufwDP57xmFRqhVAcVU97kYtLWsSgZfbLqfda3",
  "key14": "5EoCWurX2bPbnAtjxfSDHYHoRoULDa2XuxFWR8Aq3VbB6BMv9szAszPXs486tDxtUYR2NuSaSH3XJBsXQkVC7CGA",
  "key15": "4SBfNvxKMeeYMZswa2HoWNSufrPr6WXxcNA3cEWqyipw79U9nPwFAWNfrA448dDBqw3HLtQtn6qwmuVcE7PBitGs",
  "key16": "5i67UK4EhZ6FfYAntRuJ5XpoQ4A6LHFPREC7iGMR7ueRPak6jCPJbGjg7kmrhGur9Uoso28VhcgVLz3rrFQsnzzE",
  "key17": "4J87MrzjigPGRnkPj7VtmSCJev9XfJinBthQFNMtrbwk3eaxvdV4AJ7CXNpUQ99bfxMj9r7QYGipsiYWz4rnRguu",
  "key18": "2286xAWtr5hvGWdN1BYr2vthBxeFV41SkkiWYKPEq1xr3o4ufrepi4qaNjBcenY8QgPLzZMCdCG439nm14VWTtDF",
  "key19": "5yDbbNKXzyikqFLn1iHm7Y1ScuAvwyNeEDsYqJSxXorvi6cZVgVfJHX987bQk1i5wLqM4K63jx6miAodJvhWeBNE",
  "key20": "5z5pptfgXid1BaN1GpMdhj39DvL6EULD3kgrvDUHUvfr8rcHj6WGfkBAoRZDJxD35E8BL6fn8xATBQzEP8cvsorM",
  "key21": "5uSLgmifYVDoHFYwj93DFGHcpLNiSAkFTqhfzhgiH9ELdSXeFN2SqYQ1PXKh4xGyBGGpcKgNho3zf8TR7rXnzkJc",
  "key22": "4Gd4pYSoKSTYWXne9ETArAsDKoCGaprbNKCBLVSsZ4hXMj37dFtrz7oLGk2KweFKh3nwoVxVLbFnNJAeEH4qoaXk",
  "key23": "3iwXB6yMs7YgJZbXyysC33DJ1sdzRZ4uvXmfqGwkcEr6bLRDXaapWMMYJntM8dSeGEptZaJUUytcV1tM7UKB4kZr",
  "key24": "58tbmyQphf8nRoCL44kt146X3EF1KEnKdtCPnVNpmoWpPAzuxXAveQ91H36mEp1hAQ7RufypubYFcte4kmq1Nq2n",
  "key25": "4mCnjXFKU73wfWwLvWJJbJQrXreTxrYcQjApvJVWySo752WRneLZGwsgrCuw1i9KCrJ3kXDqMgDa44SN5KJYkvUM",
  "key26": "5TzN9pZR636GRbBetb97satvaWWvRPVVHVJWRpQ3CPdfmS5TjR81Bcf17ehRiAGc7v57kR5EvkfJy6LjzDtA64Sp",
  "key27": "2fTa7xCXXL9VzGDWKYQi6eDEzFScwfFRnykrXVEMFAEHj8mtVEjT59ZJ3YwpnD3Hi912ZCpcikiBBKvEtNCwCJs6"
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
