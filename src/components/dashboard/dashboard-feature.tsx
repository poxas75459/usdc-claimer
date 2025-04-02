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
    "5iuKxBfHdPNMWcLw2tTBsY6kZ2gaDcpaks6wWqBfVBmCoKi3obstCKZS8nrn6JMFEdAiyq18pGd1dDNQBDaKt4Vw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39DCD5pv2mGBQmJcVoSgN2tzabkkwhJbjPH9So1ZVpVmqYFhdDRnYkPh51C9u65QpQD4ottQpaAAaCRRFtNmZnUc",
  "key1": "4J2cQ3LVL4pzakK1RTzXes9MZ9AotAyiz8wuqhSUJkEynCmP1n62JVY2hs3o38H47EaSoQzao4MZzYKJnJr9rBxk",
  "key2": "5WWAmYm682NuYVA3PRyPhuGdmkw7cPk4dk3Wj1zm7knyeMsfQF3WTffjWw4V8sPh1oBC4asfzP4ZU76aK4bn7MAn",
  "key3": "3dUh552escVr72ntyB19TUSvL3GrkxCSYwpsrboJjcdtRRACcpzur3YF8WKya3KT16A4v9KccWvBtcUjq85gMttC",
  "key4": "4ohyD5z2dxe3S5MS4ME3Yg67AhG24moJWbYV7nyUhVFzucERkBPvxCpGKvPw7Z1aYjLQQ6zbbYPSGL7dbmmnkSx2",
  "key5": "5ncFC1GMLiacNncfZ48uNpJXTFvrC3dXoApv8PtosMSeDRc2dV964854nMjTTtSXVik5mWkzEPtuZgsTAix2EsZP",
  "key6": "2CcD2v3QoxdFKEzWUiQS6pxNXqVyZKKJ98vrTsb6LX56Rm9MdxzRcSy4Fp55SPdBG3vf8ibAt8k4CGzDhD6KL7Vf",
  "key7": "5WVL2h9nZKkvXgKMwWCwdCNsj57ccCfYZxf14hRrNaKReF7k5FcpzV84WMbyB6L16dNBD9xpmBkv7VvqcM8cWZia",
  "key8": "kRFHXCEwpASsQrGxYprXjvidq5PKpZ4A6TGDatCDKtyA977i8cHHZRYNkqNmwu4TrzhNwKSP23G2133S1YvnGMJ",
  "key9": "3F3oSpZufj1gbN3K97CYKXzYEu1bnAAo5mziRwWT3f19yWEtSDbRQ6q1eSVMLTRnzpyqD9dbHbVtfPx4c4Lt2LPR",
  "key10": "2RSoBaW1wuQfY3edGa9YenyyugBN28QuqvqpfHMvpgGhigiz4Uvd3HXt9gpoo9ZGKR6tKtfKek2oB5JUkEY5RpMj",
  "key11": "2gJt1DJHdbezLiEqjXEJiv3y6nb6WeqKXpFTy4KQyNvBgSSe1nfSq1SU7ufP4bddC5AZhpQGVYWNkeHRyS5q8V8o",
  "key12": "4XvwzDDYsaBFTrPgG6ZsgG4VJTXPQhHjpVPgmpXc87fQ6CixPgMawFu1ux7fbkvegyHf37PoVQaj1z3LKc6HGa2n",
  "key13": "uA6yWRNfHPDGLCwVd9fwsV7RSTRTCj7U2c4rofqAo1zmM9as285ubejGidqrPgX2go1Mr2sD31Sy367Zs5RacXL",
  "key14": "2xLHfguL7nYB5z5HjTAYAVbnci4T3yvqCXj7yABzMeLJfg5wCPCojaGySei3W1jt8h813Ez74YNhdpcXNc7ERidm",
  "key15": "ujDUM7Myb89xEhZiBNPc7Bwgh7hfa9myfkXczCLRuQuBGoL84uPaQPALz3Dhqj9AxkwsYEQD6nQHamYboBGEdDe",
  "key16": "55M4uKeDhNErG87gzpB6VAnegNHofNR3f6tgGTzUK51FqvpMSshmQEc1uiruWuweiBuyo8f7q49rZFR6N8ywrieZ",
  "key17": "3aiG7u4XZV8daC1a4na1DiWMhuGNdbFf1VTsZ51h5NZt9cLaejtni2Jzjgzk7Fo4e1YvV1aMvz1y4owJHyVSSZWQ",
  "key18": "53Pb3dVWc8mtxGfLrH7qXNsgnUZXqMHiC73qGig5cHZAa6hr8k6CDjJipgofx9tyBfdTFakvYPMuApvmvkqQiZUo",
  "key19": "3tcE8moZxkRGGXnRRjt9Vio45MQtSVB8pHorK3QGiy4nJGtcQmHjX9Q9Ci9H2zdhrY6adyZtcMW43ArCdewRZGXo",
  "key20": "4nkfnMjKJNR6VX3yUq5FGbydaNTWmYAnhevcbqkXxYWWmzk4yvpq9dr51ufAQdzhW8rCiyFHQYnr7gfHfufNjCS",
  "key21": "4gPD4pXgfdBpBLkbNnbUn2mZtd6Yv73DhFbZiTsgva3KxjzCCWwXkcnMVxceZTnRqQgRgu7sHz75pjC3Xnig4p1m",
  "key22": "4fBjjjBDVnQRQX92JoeY8bD7dQ61RfgeLMotzDWgp75hiJDqGBzQii2UTwKF1YyYxk3mWDrYTdC8PVcsmdtwbHCM",
  "key23": "5Wc9T1w64LzcRw2LqUS2x9ZugomwWzcDsyasARciuCbwwWDyogQaDfReVxjD3vi4GGTViSiduji3EqVXjLgjpZ7d",
  "key24": "3JvLtMXmpQKnGNBD84hdmJoeiDxRJi1CnV8FYdqfAxuXad4ikZZN3mqBTiqzVxvDr2FTFFGgyszSoQnGnR7uGkv6",
  "key25": "66bnwNaHhtB6atzfswZ2qHiKyUtR3dJ2spze3dDL9QLjTNGDrpfbkrvJSCb9cYc3JirrTtmU3rkwSEmSqif3K4yG",
  "key26": "5iQdMuNvoZ5cotYjwZZGHLuLKhDwop9woyxGxmWcaXgpPG1n9zGE5GWsG6dMb9N3iSz12u1kgdG7uFcXgr8a1wvd"
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
