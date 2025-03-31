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
    "5HnYow8b5Zp6sBeNKXTA4z2Ndqo2YAYaxXWyWBPq2C1FFrs8rFQi2VpStQ2gQh7roFhYMMuMinx7B1zaKVbCyQC9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3iEvepmk8Txgt8HSKYaWf73jhvJKUNjTxbxH4abd2yHX5rJNTcck5G9J6tXqqRsavMMELyHeHShX5DdyatKGsTLV",
  "key1": "A4EtnTt5iMnhgWp2wHV36CqaNpbmw3VvkHyXSszx4ev3mwVYRXxkEYBvwZM3b9Gs2dGipWi8CCZgFeMHMDzYVc7",
  "key2": "5aYyE7kcmMMCirtt5BSCXEno3yWYci1BPdze1s2qknbwgTh7Jsv8MwrWcEGCZaKPYzKpsiS4Ph4F3rf57tNDajHW",
  "key3": "4YKiCxpuKeKb4uLSP4egPbn7M4Cb4fobTYKXSDVzU8TYtKwMPF7eRW6YRptdnidwdeeRTzXbwNzGHcMKU5N3ErgY",
  "key4": "9emPxqXB9mBS9cFGve5U8PcFFnquA8BBhwSneENoaEnJ34hqVzN3WnHsWRMdHxZcpfWYXucirs4tfxHiZfMbPXT",
  "key5": "5ikY4Aey67ScMDXJxqr4AaEqXPYFxJSGd3ioLuqUACWcobcndyVphLDAGDUvoMAvBRnZvpbxifUgnUYb9qQ2bpgd",
  "key6": "4C5aXZyEWmcq3aaWoX9PJXymmocA9ZUAi9RQmmEJ4o4Bd9wcxrTfquHYe2prYXKWXAiEKFpeiSUeVtUHzBTe6KXR",
  "key7": "2BiSfJBo4tiboLEB39YiVFbfkpeM6po4ERBfVi4JbBDjuTXFKKFzFHQRbjoa5y7rueRFr7CCh45sYoqwkdU9Fcgm",
  "key8": "43YfNdziDC6Nuide1sHbxVEWKe8pn9N4xVJrGi6mQ15Kkjr9C4cRXiZWVEk6CQyVf7P4nHBa773P8cYQSsTrD2aX",
  "key9": "5E9YdD5vbfLmgZqbM6k31fygSUKBTsGRgMVaa7fQTpLbvNoSss6pkeSwhcxUJ29YhRPCMeSjdmonks2bfk2NU2BP",
  "key10": "66ytJ7E35NJes8Ldq9VoX8Mxd4xsUyCnAVwyTSPrXLkQ6SHRXCXMGanKg7YyqMT5ExweD85TZomsL1WDXGf825cQ",
  "key11": "5kWs2imfRz9Q9WkJYfdnjEAB5sLzWj2h2s2J7jBJXvVKyY7FPKSd65ratbguLpvJif5Uchf2zSXYrX7ykXbWEJVR",
  "key12": "3rVQgTSDReeunra6ju8ahX9DHGmF1C6pL22v4xx3MMtdJizC9XvoG44W6ecmi6K15EFCnamfrd8Y4dDPSfvxqcme",
  "key13": "3mpwQfjQxLGD3mBZHFwzwtSoSSKD8CM2dLyZH5BefaArLWbvojEYQi8aQvNfQQ1WKiVEijSQBQ1H1E4vKwFtY1J3",
  "key14": "5mRWnYwZ5ct8htHtUUL6HuqgaE88JSQWzUFNsGMRuUc9JWm8oTarW2VtvdqevVErWoJ7ecEt9TEhyf9A1GjKMH4f",
  "key15": "2Hf8euV5ZxXo6WDGM4LQNiMZyztQNEiPVfcbcZWmkrVTUjXss1dPxxQjrEaYwFoYyByStHr9doHrQkdaVbnyxe62",
  "key16": "4tGs1nEz564MBavQgBr7Nya9m54FiZnHMPEyp2PSdXqVznEDLj9cHZsce69UjqHp3bMPm1cAEoqDpN8NyGxhFYpW",
  "key17": "31ZPCdbM1TCx1tX4wqaXGasWhrDPENPPQVMvqkcQUP4KXQ5tvFqvz4w59QbAe2JvPmt4MBZUnvjhae5CaBqEkRyn",
  "key18": "5315tSF3aFEGonD4VccREq8VsmdtERav1x2iL15W12XvaebqgSEmHVmG1eMr9GgMscZjCq8Eidx978PrgH2jZJuN",
  "key19": "8vMejD7fAGAoawxHh7MLunabJWyjh5s8zgGVNPoPPXpwzXAxLDwpXrrFj8uD6GRUpG4zpvbSZdzaYg67gYQ75Vj",
  "key20": "4gGGQVPFYAthj36pQyBiXHDPZb4QNwty47VJLZoPbc1XvKzvf6sqsM41arJPmE8koofA7sa9gHoobPNaEAtGojeo",
  "key21": "61vKua6EwhPZkvQE4igugu287KJUjzZTJwMB8QLraaqRkhdcgznY8JHPQkQMR26ehzF9wv7wPgELfLiNzYaUjcdf",
  "key22": "4afgYQFRSaNFhBAvJLT5GunoH1EhnstRtpfYmpctcioSntGhEqpVhYKHJPBFYgsYRvswRgCAAguWzkLpvBmsRNJS",
  "key23": "4eY69199aWExc4ps2kuoTxKimZWeoJtxK2AZDQBqkYVpY95jvWSyimfTH35RmsoQZgNLnNezZrEBzCGr93mnyLyN",
  "key24": "58AWGer6MrRB7WvV6TavzccrDBjZoBtPqHkUKRfrzHEtzjf65dAiWCxtNohek8NENJv3jBDgYnizexsQ6hzNLGUD"
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
