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
    "5xnzf8vzZKUEaZLL4S6AAdhvsFii86oS24s4swaSLF6TP9QvSZyum7gxycaF8XSseP1mPHq4y4gTG1DpVzBJWKbw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wUN3FDgWEmWjyXK8rrZTRfmc2nqMjeDtmkyDwpSzfcVJ2EXPELvq8SJqzRvrqBnVVuwm9GvsTBYEthfnzvu5PR8",
  "key1": "32Fgy4xsuePw9L4bvQ33Di3XwQgZJUTCorXGR9xczzkVAw6gR2fHoEpgd4mmRdweTNNPs828ks57FGvfKfchHL9S",
  "key2": "5y2Qa6BQfb4Z8nKctoNgmqd59oszkPh4Nn8NPfWNxiKdGrxy2vqWAx5jrXLJTdCkYVowP655QNMhebnugxaiMfx9",
  "key3": "5svjjtFesSapvgLkmnUFPLYBRT5w2mYWsW4dWiutB4RgrEpGEBee5P4NnPJBVB9sDWLrUc39jvDHKjLKadPSjsF6",
  "key4": "58D11e7kEKsVGwg9nVnE3mETVYCthxnouM5CUHzhe1tA8MoUQqsq79fBsGVs2fNCk7LYM3EZ4AvWU8QzcLxA45d6",
  "key5": "5U1m4L9uaDn5q5dWebP4HPseZ2asxm1s5CwgFNGjh1hyXB4HQugjhtuE2MqMo3EHqfanxyRJ8x5wVtZWt6tqFJ2s",
  "key6": "4FPiandcbQS8K8vxHeGfK9qBURuUcb76MZYvUswWygCVmC2ohNatdJYbsC4NJ7qx92wTxXapZoonNXFKWHtWNn4B",
  "key7": "2C8pkykNe5rSUxqJxLkk3bpWyVFq7cCvXUv1D6XiAzpRunyuiBTqMqQcNXY4YCt99uYcdAsNvhgj87vEjVDPQDp8",
  "key8": "3mRzxNFosjgQ3AXLwyz8EDCzw8iTkEYCGHgXNgUtHAM9KMDJtXn2T98jcKNpsMGi5vFg9DDjkDBCvaG2g95Yr6dJ",
  "key9": "5Vs4KjVE42APHe1iEwEhVVVVYwyb8xShRpF3pyJF8vL9AhDFsrE9xjzw5gc6smRi4RMgVTy7KmJ3q7X1zGC7oNKW",
  "key10": "2xGfejREfwAg5SJFhZ1CNj2zi3dXfV7SvpeuBoYofDNESjz7nPF2oDYg2ji6aW49LcteEb8Eie9a7B7edkkWCBqM",
  "key11": "xu3eTCk3yTN9jBTXmUgfdTq4kkDZdM6mtJ4SQ3K5kSm6ssgQ6GRpvSDNk78t7b8Ax99mDh2vki9dzPc9qwcTMDv",
  "key12": "5CzXRu5W1qMTnXMrHWbhEEBvXcAGj8shnMGxyssV9xjAF1s6JtbFZM2MCWY94rFGJvo8Y1MasKH3rbu8aJLrViU7",
  "key13": "4vntiLKgb6Shrcxt4soQVpdrJtxQ2r3zS2b2jCxH1UuQHo65HKagaweDwiJuXZzo2ZJVf369NfajBB7Z6sJmDuRQ",
  "key14": "3Y76QTfxeJdUgbv9NjKqjwMsBGXUsyQM8TZsNpujRZJ5YhTGynEFzc1aP8Vrkz67Hi3owcjC2mncKvybQ2VdHmUi",
  "key15": "jrSRnBUcattNdiuC5UAQ9f1VzThYxqsk5YP5PRxKkkHbwVpSzxGghP2BkiG6BavUMALGziNuPGft99qEA3F333Z",
  "key16": "4rNv611H5njxqyLfq4K2s9Bt7qRqY6Cpgi8J2caDf55yUVjm9F3LRcyKuybKzXSrAyfX4mXSGrrGG8B923RbZZ3F",
  "key17": "JgwAcgNXWH8TitymZemNsuvk7m95jRAR3GMbHsDA79jqBgv7MEwgq9W4nYPZhCqV9jWvWvLoRjPkxegJLwS5MAw",
  "key18": "3xRkbDWZTAQtaGQyDXiGniUASLFi93p2eoMFLWk88vQdXWrEX91TdhddcdWycMb634XvWn6vdDaCoL1Fc5mpwwze",
  "key19": "44iWUumqFLnB1t3Lv57HgixsbsdYxwwiRNz2F9SPCwonJ8byQQsKGgSdpueM6eu5GfYKosd2HESGQMGLJP8PuyT7",
  "key20": "2rtDV1TpKzME62C5U1MEhZ57Ho6CUttRcvJYe7AAuJvnxxwNF1smYnpWEBC78yay1JyiMuHyHNokiCErtof5ZaPn",
  "key21": "2tWEU2NWESa7qnBGvJPMqhJVZCSNMpG1q11XHTL4HqwnT9FjuyVhXEiREZsPy21fShvAp3DVUHZZ5KVcQkYwSLWm",
  "key22": "3rQmVg7GvJhNmStB9H4Ay4CirTg6yRhSMMAsGLLKjRh1E1jRYfgBo7pQ9amtiMhUvTSBP9PG1KjGEz4ZWz74UrVt",
  "key23": "3jsgQ2oa2QKP2C4Gk7U4Cxghs3kU6cuv2udrqXwA63AZqtRWc8Nwrr9Ft43ZCz5nYhnvA7XyWqT4Be8ucLacZCMs",
  "key24": "5YKym5ju27JuL9ppTTPhpy5cVpuVcCyk8rmSNNxF8bZZ4pzZPvDqyKtJDcLdUdQEzXoG7NftopuyMQ6JMsBt7hSb",
  "key25": "3bcufjgGqyvJkik7zN23dQ11jDc8Kkt1cdrRwGCsKR8UeSUQ1wxbWwjzL9gZtR7gtCXmhkn86cbD9MkjtuiDpcFD",
  "key26": "2V9Lnd5mLyYWAiRke8TsoGSzT6AYX2bLUzN5NfM3uzAtcdxcYLvFdqX7MeytViTyk1Ab49DucjkmV27UscMxF88z",
  "key27": "5eP7sBqmrGpyZodCTSMNKs4G5iTrkFZ8UqtPX56XMFM5R5k1dZ3B9qYBbESJgkMdp596yzwKjYZ7VcYniQNSx1NR",
  "key28": "4BNSg1CfECukvZVbwycfdCBahX1KHHdv5qNSxUJhtC68z3UQKnH8g2VU4ZFTcAYM69q2dyXJGiNLbhzqhSRNsi2A",
  "key29": "Sm9MvZ8LVU8hoKu8a1gTJz9GQQf6ug1f4dSJxoGqDePXweTCj227yTCM6dS5sCq2wWFRSUHWeBo3xEbD7GiPtP2",
  "key30": "4KXYuZR1zwhM26no2AkKtxwQ4b6zM1m8cTi4oEZ3rwdocbf1aWbXzTsxzpaFHFa8m6VnMy2JHN28APruuBo76B3f",
  "key31": "5i5jh2Hfmkn57d7kyqCxLTZJZPXktRYzHajLoT7sN8zMw5gjoHNVCbfYc5iDnZseqUtRjfnDp8jUPoBgnV1iY6EP",
  "key32": "5szvkhxTPtAjnDHSAN78sMohKQn3jj3qnTMJH5aMYFoPh3qjTe7V4iT4DK9mdW3NfmG4pKi4X4U5PsWB8Dy6oA3Y",
  "key33": "5QPctrkxQtoTxQR2XnJTnDnvDRZyRnFTRX4yaB4qfDNVn9WE9yUd4MzgQ8wxxEbiDprwBLFUUh2MLkunnGF8sGXb",
  "key34": "3Viefv1TzggEStv7W3ssy4hrtYHpfVDWZf6aYzYzPBUqiauHfDcekrw7ZpXUdtFiMxHKnyYjPM9ur1vZscAqWg6u"
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
