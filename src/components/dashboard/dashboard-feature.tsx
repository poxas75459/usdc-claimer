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
    "3hc19fBNDK9BaEy1vt8b9TphLNVBW6J9J1SxiLuUJHYa9miM6nXzeZRb9uQARJquuzZf1Thd7LfXngCwgMqPjWz5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "43QNP6VCZfUPxQpYmLTQwkCrMz3DsEYd75HyKNy8GnVY8NsfRiZ8LLJg4A6tUipJgbPAfsP1pCQXRMeXbdsMdA2V",
  "key1": "5ZKHUxsc5SGYBLy9iRjwcQ1Ho7u8xniL13PQt7QuEL7deogoJexzaE24cNTCJv2SvvmmrvhTWmDQt8YtPC6U1LZA",
  "key2": "2vGV8jfYgiFVW8GLjZKcJiyNawYLpDxwkeKCiFx2X2S1ShtAcqm6mXh1bAAhVNebK7BLDqVNEVYwcFdriPMSstxe",
  "key3": "5qDgsS99asJTo7WaV61EDhquyygVrN9R2RNTS3CqMU1aKzvTLahagyqsYLe1idrEotsEYzLqLWBrZdmahc2WB9ej",
  "key4": "5fQiamEhkULmBsjRvL98hzXvkueCC9FYAhKHjq8iJYGFQ9aFVZcNTdjQCFiXqqvFZR1LzM13FZRY3KHu6t1yji2y",
  "key5": "5d14BsLqHjzYgaynQ8A5Rx5dkMyq8Ru5BQYjSzLFEnwtmmz8fHLaJ5JrgRE5A7qDf8R7UW7HWrEMx9ZBYx2MpHoj",
  "key6": "TUuxkiwsyXQufKjYyxAQqzp3PANASLaEA6F3BruiAQpSQaqesvX9AXbAzBmk46iHz2PLSRuAbk8XFvicFrBwqcF",
  "key7": "5dT7ie7vzHGYfpdkPSwHM92TjkiP7X3PmrinbqJCa4y1gccmEynAw1S7j8niP7Z4hGqC6avizqdJFVNdQc21NhMH",
  "key8": "M5eoECFnLE2YMzcwGp5NVzS4n3MuAQ9LFs45USU7c1pZV8NUwXP5bUVKgU1ip3v87shEKYqz4Rwi8UVUhHSz28R",
  "key9": "5BtZqPoraH7E31qH3TcgqfoZBh4gKMNjphHZmwr3JA9843RN1x1MMcaUzzRdtzHLRaoxpaG5xsn3bvvS5HgdFgKz",
  "key10": "DN2j7H2r9Gkgpf7SNL6bAWJviSM6T59JQRaNH14Ren5Jj19cJYEGs4m573LiYPDfpqovXKNabNvc4wsr7mZhwx6",
  "key11": "pCyjCvfHHyeNfXYNUuN2doe7qaDh4JKNyspCZo7JB76Dsp93aJBQd4X1arjUzxfsiHxDjVvrSVdnnuuAYerp9ds",
  "key12": "31EJiALeR2mqpcwjbVboPWf8QACnmPwdQz9sNqPWm6eJbwmtLvJSzk8pnNuQbUhwnDruJBBfxWHSSobj3SMhHynF",
  "key13": "4JakR3cbJHbqLiV1kepDKsQLYyXqr2z1Fz2XVh8HeYWutYuY5GwzVmX9LSnRLweSSvq4emDwxGyou2tAcTzT4nPa",
  "key14": "2jUGSpdk7GGqD6vwkpxqZWHbuBhmFoxqsEa3HJ2kwSTWPr6xLUy2tkYC2gtJJBhQDrF3rYYnucAKheARPs5b76Bc",
  "key15": "4oGE3JMcicR4hdEG4iNc6KZSpcvp6D1fejc63z69FsyXKToreHj5getqmweN9S94bzMCbsUWXa4eGEZ5vDjSbTT7",
  "key16": "FeWLSsiUXV1ybU7PZvPjQn5qH8R9omXCvmj7ktn3jBS3BrcVH7uhGKKYe1bweWrgDRgpKYdzxFrBU93cXoQ6GSJ",
  "key17": "3PvwRipGuxFvWiKmeTSR3GMq8F5NSNmkTiZ7SjXzaWvXgAvcykbupTjNZhg9AUyyM9Nv1TH7qtdz4T3JQ9XyRcZd",
  "key18": "49keujweXmHH4PFzuTV2mGE8jaHUSXMj2LpK55jA19djYR8iBJXMK46hHoXuF9AhB7fLT5zy7BX3Dv5e2XgH5xpH",
  "key19": "Ty3i3FZfiwphkT4BW6evdK6JEENrazKgLB9jCvKrbMDDWp6p7yJ9xnB341R1jrwYvZW7SuDJ58QJ5zunikSMLJS",
  "key20": "2fgK8c2tGmRjJskSbBnxMbxGeZavhLfbvCT5ookAggBeQvCycyEWzHfBCZK1c8JSQ6m5srx7zUNhwBAhAypaSUJh",
  "key21": "5qyKQ85ZTurwsDQ5oZSV8A2PqGHH9WFn7V8oaKGRz2fgedAsGmqLqeG5XEX9AwJmNzdDe4f1FZcYNxseAqXqbAWa",
  "key22": "mPMknsAGsA7LoYS2hxYzU6cyUaYQeHtBucsEYqHK8UmELKXgLd7HaktKBhzzVciYHBhWn6CEj7BgfZ4wf2GS8m1",
  "key23": "2MVe34gGN1At4EJ3ZXLBsxvgopSUJoe4YKtMWg7GHofSPN5An85Y3QmryiYKStjUeacKXocAbpzL72zHJBuygZu4",
  "key24": "4MzJpfPuynQVtUEDHTAZodhdQB4UtSBGRgSfgasmg7S3STD7RwGH5kKyMCWVprCFDvXMU8BtedpuDmQyz956bECn",
  "key25": "ZWCbnPBzxfzq9hEb57UfNjTYT2SoWWwYVDRHxfkXVRcxjFtVgKRq3Uh1ZNbsAJ7W17FASeSrG7ggDzV9fDpyedX",
  "key26": "3R8sj9c2vuNzQ89pZesAHnV9Pwj28xMX2caYZ3Cj5Z4TzR18Wr9LzfCGN3NuEXdtQQ9gT497SaNzJfddkW89uEf1",
  "key27": "5wJrQHqb1zQFxTEqeC7ibqaiaubaV2cfhRSXqnJkPedH8QkY2QKuX6xMVGR3sByzK3i1gwbZs25LiFL86K2WZfwh",
  "key28": "NTbXPn5SSnkHss3MnTQZ6PMwTfiP6GnxDDzwjgwpY3pk8zS4ru82dnfMu3s4UecLd1VCGmpBwwejUAZ31Eo8wr2"
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
