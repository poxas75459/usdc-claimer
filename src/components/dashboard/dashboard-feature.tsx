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
    "8Eq2SKnCs7pgA3P9xUhmLHYh12LiKivaXezFZhGNbHLVwbfZ68cjTuKzX7GQifecRvmPVMekk9rLYkCziM4opkE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4whm4HhdsBrw6QHXWsN7AV8nAotJfbyteijfsaLNZm1oJVrv2XX7TnT4ighTJ1wRbq4iGTMT4S1tD1kDSWwoRKiE",
  "key1": "2YtApvFM1R15C4WzCCMUosiXA9kBewpepiPmhc7M6xPLSbrS2SppJVstS1KgujnHXNe51bpYGLPawWYnsbiDqY6Z",
  "key2": "fRUhMWDnNscPEBwihgzwTdicfCcnv7Pn2R2hLLDpPknsZ8CPi2ktAknnvaE3PpbNk6io1XFC59GhJpv8crQ5XvA",
  "key3": "4utWUAjk5TLFJX4h33bhVXbjNRoGDseFoxuMNxpgYGXuKHgYGQ7JT9HGAW7ewh3AHyjH8WJ2L55tYHtg8HRy26Rg",
  "key4": "2jYrAkstrRjhp3eUEHQ5jjxZBcKCU6V3ofF2e3fDqhfmpQmqywtmYeXUPgWBPA5wqRnpZAZC9cMynm8mtfzUaw1k",
  "key5": "AKyyiNE3zdDE5dhZn6x5Z2VmxiF5ANoAJsp2d6aF5ttZf3UzfUB6aMihqi3nYoDbdX1y1YodCR9QP2zVocRCCs2",
  "key6": "5DjA48js7HZhYLwseXYCHJGZ7F1oJY2AmeqaSALoqorWPQnMWNaU9JKzKeCpUY8bRjxubmmw8m3UAVPerVEzm2AP",
  "key7": "3b1UXanqyJocky6CUDDQ1kFdVYXNFFkLv29vMMRtDT9PfcQJ8Qogds5XfRb5QmkKRCQrSNaPyDEpsbCG5VzdTSyw",
  "key8": "yW9JyNUY3dwH4CvELUymENhoCM9h2SZdUridFoyK5gxKcmMCorGTJyZgL4gcL9GWcB9pSdLdmudiqTcutsSM361",
  "key9": "2Uo2Pv31Cv9DxVsoAsC69j4zmBqxGXtXRjLFb7zUCPX2fk54JnqTJr97Kz2Fg1GFqjzqMU6n3Afp9emu1zqzqo5L",
  "key10": "2bs3yrMKkeFWJx2R3YHPtBntBQEsRWc5vEt4RZ9zQMnDaKXLnRMjRHBnjWsTk1znquCE4qy65u1G9trqVUWZZdhc",
  "key11": "4XDbV3BNXkNSSVRkZr3drTXxE4ksqHG6sp8JyQKM9RsMTexAmeLVfPskTwmXZ5CYZwaaVEYbqfVATeALGGn9gXUc",
  "key12": "Gz4qBZ8oDShNk2R6CirRgvEZpdL7G8fHSSLM7vWUf7bNpPgyFTMaGdpZuPZxBt3oHiJAh2nDpZFMydj4Vc5jtYF",
  "key13": "24mBc6Wg6r1NcaNB84726NRBd9HWNdXPVSmEwuaozrRRnfWzvDyqche9VMQyV8zNuAPTJVEqDeu2VqFfWauJjRnW",
  "key14": "4Pq1iyaWEnVWc9dV1RwVfZBeKAsAW26QX7aS3NKwXCeib6631ePiPbcpAWhzBDLzhdNPKWvucEqnwdXFyWrboRuf",
  "key15": "J9oFMPQE6QbpeCJmL7tStAM3seKueWE9SGbazoc7fDpfju7PNBFfoCYB7v6szFfbj29pdExhkvD38RHVMC4Cfdp",
  "key16": "5nQsWT1nbDJsivxSu9yQab9EAvVrEVAo12sSmkG6JQ8jsQHUYzH1kRZm2yFJVXu6U22LTEszWujxfCggrjMpfeAE",
  "key17": "55kW7dHZERBdYu3AtHqYBrDbXPVZcjGHaeJRyQbTeF18LcZuXQ3sUrV69vR9ToE76ffXXKKwsz8acjBs4yEYaCG6",
  "key18": "5YuawHSfyeApFsxjTSAnZ3M8P1eaCBTkQY7AdFssA3281afU8Vh7V3uwBFfmvuYUYQ9GTnPCfzgLeqBEeXhWxDPB",
  "key19": "5tq9LCYnSBbX6zTEQ2XLidKWa6MvqPVdbBYyZYR4aE3cDyzH6jta4u5XzPqXWHrhdpMBjaz5mmT6dhRCwj8NFvcD",
  "key20": "2QFAuxAQANh13nxtmimR52qoRTda7dx4xuLwSvuWeiCTKa9mC1apXwgosDhpEYMvBasSBkeHgc64pP7XDzjZjequ",
  "key21": "31CfGLet4jCEdhd2tMiMSRF6wLbLQFHx7yPBtAJM7f3S6GpUgEn29AvL4uyE2gG6qeEPAjQqAkRJmFvKFhv7BQ16",
  "key22": "2eKgEmRYnGDEqr7BZoeYx4pPmg2xdA78a5tQZCNNXWrp3EcnYcmyobHARzf2n3XomGucNwkgaGWzAD9mUhCLBr1u",
  "key23": "3iPd14EmBLBJ58VFY2fXj7bCz9vVPjrDt1SJgV5wQzB2iouG7mWBPNFDK5Br5emyAt9UmpvYoUtXBBPwTXBbTP5V",
  "key24": "581dcZrzsrraU3o3jTeX4GkzKimTmcttKcbnmQ2BpdFppDFumn4ggSMZQttFFutkDtfWveCbytTQka1LWuQXJE5Y",
  "key25": "2Mmm6N3EQKaGLt281xz44cYDrYi2EsQU5UVDUTxU75e536L4vnrGHTmZi9tFih21LVf4vjv4EkaFMV7QVSP1B3Kd",
  "key26": "63X7STY6JLZ8XVZgh6edmUUZg4T5hnATCzGQiadzwibxYeEkK8pMKYn1tKLdds2tAyhHMoEsq5GoEmxa5aRqAeXw",
  "key27": "4juNQ9Ehv8YjvZKV65QdBLz89M4p3nmTs6rwymdFe5KjMTVUeBpAhU4HqwSab3XXeXWNzW91FA4sW8rr6dWMz5Fp",
  "key28": "4Ub3RyzGGEWU47syTbM4UuXEsMFiLbk44zb5dtCDzZtXdGKuXR8Q1muBJjUtbK96kos1jicEo8JfCrzcbdH94ekS",
  "key29": "3JGQ3b5jWKx2Q8k4JFsHPPnJyBBWE2twGgqcW5gE9wJkAjV69erxmRA1saG8KD6dbZtbt91cXQ9fFjs2LJfMfL1y",
  "key30": "D8obmp6kiv4MKzC4U9ZJ45aoeQ7ePMCwvRRovDgm95kQVMhY5qziJZVLGXVfpPzncd5gnqDnwQHp13APjSw5j3s",
  "key31": "4efQH4vYgUJSAJxtNJPVXjec6FYzSpSApsub9y6cp6rsZwgGyoVDfghZa8tujkBGCcp1SHF1HGHi7NNrB7KisWwg",
  "key32": "3UQWiLbDfHA2yhedGkqAL3efpFb9CztCZdBop69en8iBV8NxXciXrJkCyzWw2gCEpQ7QhQnHHoqDio33EKzT9vNq"
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
