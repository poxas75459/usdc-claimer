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
    "2Wn7pfboCy4hP5ytEymXNspdqaiPFk9ziy3N2FwZQt2HKmzRa27g3zeAqotkiCrtHZhrFywREnryMdJJEt8td9y9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "D23ejjDV4BxaDNGMwYK7JVww839gN1fKAHCTEdzB1HHmuZNTr8QJig9EUhZPGf1BxApxtFdNJ3iByFUx2eVxSFR",
  "key1": "X5DwzSwtDTcDU8r8sbBaK9Rz3e8DhjSKQsrWFV3HJNkztnLjeUimT1gENeMPQZD7F91a5DkCs8Uazx1AakiMveS",
  "key2": "5KWUtQZ54oi55WkYdkmnxWxxDYq4cgYBUA7Gg9RGviz7Mq2ddULyotP8uP2jsTP12gBwm2MauExUwdyMbdo4pDbJ",
  "key3": "jaun8VJHTAfi3N2psxrsnE8jNqUSfQ2vWs67cRhwD1vkCx1CEXEaKTkmbFc2ePH4PBQfbWNci7USiJSf1gVZdWe",
  "key4": "2f3RZdF4p9GJNavtrsGDVkNmPU2nyCzQaF1cHf54VNDvZRp7JzNJRJyEkRaRcgSEKqS8eKpZSPSQ3ckgA83rexz5",
  "key5": "2F1SxXn5wruLoLUnGgN2JS5uuBZ8PQA1zQi7WTWpWw8bFYxCeSEpSkDr5CKMxVGDCq3WPYrhPDfRbFhh2diCYEM6",
  "key6": "3oJ1Mm159F3C3dqbLvzr6Rvwaf1BvUhNnMjkPR3zoxbH7yHo1Dpwvh7p4UtwNB5NAMCaeaf3vUiesf4uqxCEKYnk",
  "key7": "rpRBAXbaou3WGfzoKWC6hwBpCuF9adzw7bzgfYCAAB58zcfuSUuk5vj8P3btCSv1Ui49SmkBLev779SFqzVfPsv",
  "key8": "3okjZPPNRPfQoNRSSnfza5x1DMVdFaAWAdRYVaCQR5M3o4qs3L6vE2ZKxXdNi1bC5PF4wP3e5bCCC4SvmuRvLP81",
  "key9": "5KDaeTDb3GAymE7eK4hFHHdAhFU7LkZm1SLeHhMXjqs8UmSko5pxRnjYTWBYKmfhhiRh8uy7L8a2yYjXDojscmwe",
  "key10": "4voZtUS2kyM5uZnsbJxZ4qsAdPWnWWPHVV4Lxb8LKKj2CKAizq8mgLXmVSUVdyZWfQ5sCEwENHDw6Xd7q5tjSPXU",
  "key11": "5LWWVwxbTYDaX4BdeeGvnJf8ZTeUYWzfZxNj4k9KurpbaD8Lj2T5VzqHqrmw74zGJgfB7MGsbdNWS4VhPxNLBQ6Z",
  "key12": "CeXwm2BkhCX2tcYZuZPuDqZWWazJRnfBXWV8Pj29PerfpycDhtKNUvSJ5QFzMhNd6kYQr9rHBAqLxKu42KQBYhc",
  "key13": "3u1odStWQWuEA67bhEkdVzuUKsKzKHee5sAsgVdjuzfwdQUPVTAK7DQmRpTzXyAp6nJ3KVq27gerCpqVgeXuZDRx",
  "key14": "5k35CFPfDAZdHRjY8VR8DEdsfs4vGdJhpVzmztqn2ZZJbDJvEH5LQQYECTzpcPcZaBHbwTt9QyuHFZhFFgJ1Py2H",
  "key15": "3Dy7vji7YicXNPepyVuujhFGhjGgYXgRHdxqpKZJ8j56Tfkg9hTHMgoVAvL7m9FxNVts5S3C5FdaviZ5oB4vJWVH",
  "key16": "gQgvL6gc6gnjswNgGihfYk2oHiHSi1HWzdRciNFgu9Urcj4wyeJZC6tAc7Gp7xECubxueUwAgAHAW5FrHzihZzS",
  "key17": "59dintoY1ShJzyCTe2QrzzLcG24dwu3iy1mQqA3qt9JAvgy8U9VfDV8Hbtc9SyLR8dzETWZgBwHQPPnjaG4AvnVg",
  "key18": "37KshM6UkqUVXT5kEas3p3SzvEdpGZh13xiVDcu8wx9AoJrwHovep8vBnt7W8SoHvUNzY31TkCWpGquBYkYFaq1W",
  "key19": "dEix8W8CnGtvNwxUJKygdeSHLyrwCzo5ZBquVveBAcZk4XiADsPGqZnWVBLaj4CcSosPPFyq5Da5jY1rUiLfhDZ",
  "key20": "4xHBWJoyX4HH56ZHNW2dcfC1Svshqqgxw8rzmBJCyH1rH5kQA19y1MmLXmRLfNt6G544RWCsw9KJbopJjMWbWiWT",
  "key21": "p1fYwuYmfYRo68dsTMSfAYZbWUyJsLeCt8rnUKj8VPn8dmnJFeRbX6BJ3LgBPxVbtwaNkbgf6b1JhB1ScQ45hjw",
  "key22": "1289eqPUar31RJrjK6DV2JHpPPvJNgqJhyz4BByEgVS3eniaoZvG72GhybVyZkCvmawiJStSbZFgAqexzG14WnnC",
  "key23": "2mP6uJDNZuqquk4UUFzwMUcHBgD7kNqE4Sej54NXQtxAa3mXnt9hX4HWzW1Q24hticSPP6Y9Cer1YTeufThmvL1t",
  "key24": "27CmLCmLBd82stENbFv6crdNmwVhvNGEXdqbWiXViA3dnNfCT9vd9Jbu2dcnP9ZyYv8LHAqHMzXhAHaAiuwD7cX1",
  "key25": "64x7UwPS8LxEaFWg22Vaa3t1unUx1BBeZA3xsvSdGGXuhtVzV3B66tyDyrxataQHJPEcXyacwhdWuQ1RH4xtgST8",
  "key26": "3JYA2zeJQ9MWQx1jWxss8Hb9YYaMPQmPVQDN6CLqyx45i9eSHcvgAi4W68GEhXnJMn5bHCYF8oJcBAUXmVeuM64E",
  "key27": "4RcRzfkx5boi4W7M9e4WbfiSowLspuhYTWT9S1U9QXSwNgJJ9Pycx1Bj3qWZVywMo8AvBQEE8nymiePAGGp7XGrW",
  "key28": "1vFnAa2wp6NJNVLrJ4vv3vWKHesgCoFYDtDJA3PFxG1Hevi14qp2Hb6bPpb7j8hRqZs4LfJaRdB2zKyUByw1A2f",
  "key29": "5mQgnKMPzeNrDX6cvMPD8rCd5dkY7UHRxLCAjzrr8ahVukRdtk2AqcfDSrCLxy5vYBTB9G32VFDKvgeJh22dAbaW",
  "key30": "4ePWMPDPHYXQjJEu5hfotSHevZtfoibm6XS4eYXeqUxvY1fzZvpz7DX3TKx8qZttMyNzp2xsMiLTTwL36HMQzVc6",
  "key31": "4sVn7PwT69bLWzC3pmLqveuwwAtGqkXU61AnekRgnFCMQigVhUn6SxJAEeBdbZMdWcaf9MF2FLHa3oydJcrXSPvq",
  "key32": "2BP59cfftjRTy8Er1ySkkvBLNPzYpWQsqk5YaPpzzYVF2XG7wBHXkpUzcMrcdMfEAqPQUZSZ6XxU6CTDPU4NRu3z",
  "key33": "37gDdHTqu2iAHaRrJtXmBqGgHhVeY7h4L6cuUGoZ82vERsYQjouR348SUR1iSQnKGc1e8tgGUX7wUhigKbPHQRbs",
  "key34": "3rPijXidScRtdccJCUHrsTEdzKLk4iVohoThrYcbqfuBnYKfyQfQGLLduxKevV1h3tFToxgJmwCM7pvM6rm9H4Pn",
  "key35": "jAgFosVx2J5hXcsYGGHNikHaoNDc2g9ZRigD6c11kdX6Ai8iMFrPRU3mPhrr57nGu3CqLrP4HMbhsQr8yqXZiNf",
  "key36": "4kB4AjgHKYX3ACtQSdP9cG9JkQuAJXD9VN7PEzdTJMeR2i7Y5MEPH2SjVoZuok1by3h7FcXoAedqyLeRhmoSRpmn",
  "key37": "3aWnMEvx1nXREtr7o8ckvRNbTDmXK7kUMYDadLRckEAdNntju6r7PV7N8UJQWctRmzTnGhVJwC8DjtVo4tH6tASv",
  "key38": "D8V68Z7sTUhvivfdvJnNeXTT8tCfQJe17XBpRHmBPzMqJKr4jZWKez4BgJYikfe6YyGU4nfcrafaJ9L8LvscyiT",
  "key39": "589BSGw6ebzYhH8CtaJYKDWa2YWyiqPZ2Dk5yiAPMh7omsuaN8Jjys2g2bpqcitGgvaQrCX5edJC9nYgHy9rTKdH",
  "key40": "3S5Q1kQW2tPEriQJ7Wmh6gac8VwgnNwT6LCbwsg1eKSa8pbveEB96V9SmJ4kKuECuEYWsJnGy1MqQ4mXEczchFn",
  "key41": "3bf4A3tvEgUjjFWgPoh5gTkaaUAgUEfCE8o9oayeAcgBSx9zW9u2w3eep8LyLywex1f2RPR4gP1FzcSYQfMhyFcz",
  "key42": "29qjV6DvTBubt7MBjSDjvEHWqc2LYfVzmtKCs1ft8psfowc4PVeeEg1MAYzGJcmeWR8fTs7VDRYW6QCkSEmSoEs9",
  "key43": "4uSAFC42MHCtSMxPD7nvo7cpEH9RWhTRzEwmAP8UrCHUK4UrQZHjgUKkM1UVz8jadMwuWgwLmf7gMMkp2pj2mJqg",
  "key44": "4FT8yyEqbqNKcfsqvhjduzQTHQHFTexmyYfZZs9MDfdXJsgX7RNwCgeYp4D8k48jStAZBU2wANUTixpKHxRVqvV4",
  "key45": "2PQzTJbM8ZBTtQcRx8Je6agoYznTjbuVE6WeVD2Ly9EsmneZfpNNh843M5XqUMrdw7JFy1HhCStAUNPZCm93REux",
  "key46": "4zpPv29swoM27UE8i3y96AGTzNzXgFUHQDMRRkNoZnJBGgh9dsZNN7uBDcMX76CG84xmY5tU7Avo6e9ZfKQEmMFj",
  "key47": "4UEhhqL8v4EUzpa1XYwLwFcCKsxPZtXj3nkP6DB5c6ifdoygBL5dsYQAWRn82kGWyUom8W1B5QgpXHGR4P5MPpju",
  "key48": "2QjYATJGuvJYH5QefcSo2eTgQqWXoTyUGivLGULrs9NxEnwWs5k781omZPQYSHmA4dRRKy59FHnnvvBoQr1bNzWE",
  "key49": "64Uso4FA9ogs3ifgLKyoKk5tcwVDgt2oNu3E1gwrr2HeKZvn85YayepaTAZE3FoMMNZX7XricP2tVsAHHrkBfXak"
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
