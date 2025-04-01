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
    "3yxsEB8wGWHAPMLBPsKG7sKxx7VzwScWTezEDP5BDqjWeyxmYX9MhtdfCeMDCRkqCuuMvR3QJdvaxCHMGDLLVvFd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "SYraejHVhgaEkdhejKQUK9UFk4Y73Se89Rbab5hy1W7oWqZ9Tmk4Ep8tedp7bBo5o9oMnMT8tzefQ22Nkpe7RW6",
  "key1": "hfcARuCNcjUqaHhUQDe1LujpQArgQGgBnuT85U86SSK8gQdNhk41xYW8jnj65pDFegPuvcH2RvANE75AE5t9pbx",
  "key2": "3Jgkr1uVQAKiSkdMBHjnjcf8dcdY2UybwbidEdF7E3s9zDftgBwdVStXFtmAmR1xvr28Z2pEw7QB2UAPh2Cgrwk5",
  "key3": "4hkrc9EPAJkY3DRkvmCH29xYUGeDYAMwgVuTVPpTSG7Bdm6crncSi2drjqYJy6UHqCWx8GA3jHAqR6rQcdCcozgY",
  "key4": "Yf3PkTEV5gNuYjkRAcMsXfKhffcfC12iKzRY2iPkFoyZSyJBzzkCeokt6zQbpaZ6bmGve9ZK5cUXGB5PpipXVuY",
  "key5": "5SeHLRuu8o87QGA6khrSXD4WEdtzUrCvkuVPsMaY1sTtYBhkR2pGPZ9hg6noWZCyWX6MmrwdfcBki4ihPhnVNZM",
  "key6": "7eAXKPz8WiGrgwmGRseepGgvjzxXYtiXk5Uix9i4QNZKXdaAHGU1jTzMsGsRs3c2HZ7LQuwrwUzs7PfXZkYY8Bw",
  "key7": "4A6Z1857Ve2HP1VC2wzbisUcFnKkV9ZHSJZ5eY3jWArYjvJrpkEKEReaQts2522arSyKFjZjraGTDrVYAqXYM7oT",
  "key8": "3TtsHBFXybS8GZWTNxjSfqswqcUFaZ4Wy3gZ7aTae8iY3XmikPDdVHrFouabc2ftNDjfpxVLA8hCyZw31DuRseGw",
  "key9": "2FnWL2msFXTAmMLkptCHrrzK1VwvSvgm65VmPeargL6C7tcohSqY99Z6pzPCs4HW4ReMbryBe8UbjpZwTsBV2gsB",
  "key10": "62mQxEw8KmxLFSmtaDywMCwkjNQEQ6Uf2Li4fRPRdkrHp1fhZ2HgbHs5LAMwijrXdBgzxGSzHUhtSHCa3VZJV4f6",
  "key11": "rz8P9yuPy6ekj43dWGDxE5shU5c421d1dXK7eo3ARPeRhbgDgbF9z8ZGLR45N3m34K3krPMWMrXV5cFp5zRSA5B",
  "key12": "5Fh9FeYJ8QnUs8NMYZvAdm9CtnFbQypR5ZyFk69yWYTBFrxXdRiSZH6zTzXQhgJhXTuDDnRZmfgo3yNxjjkzsC3v",
  "key13": "5v3iWMNGuE8XXsf9N9FeH2JgyXL4yiCyF1ZRCQHkQ4CNx3ZriDqAnLxkGqaLj4ZKBPuSDakX1Q6ZmonJjmyAKmC6",
  "key14": "3rDAD7CfpBLqDmkTf1HqJV6heUuY2XFZLzXWcN7zYo5CQghztUsTYzoMFJCEh4WgMuVxhaSQRoXCds2T8LFX1qDY",
  "key15": "2rYtixpEbDjnJUgSkxTCNQCU9Ew64nskTeESr7UdnsraMzspKm61BAs4X74j9D7k8kSanJoW9JSJXYANx6twzP4Z",
  "key16": "5Xv1HCJhJXYw7Ypr7VEKtCGSBba4A1UsgbRNsYG427mf6YtroMxAe7eatvPdWqSv31YLpuJjiwfkm26dXKKaDrcC",
  "key17": "4oLEqLyEJpm6UCPzbcCaPNVMfCCxB5jZtC4wag8BzEh6541AQNgFXebgzrWjBX2BvvmJuzPkd8n9RikqxGxXruJP",
  "key18": "4fCJBtsYMBULRVbbDpgqb6YtKRoFuk3rAM2rdZuc7dcj3YEnsMA6bd7R3q8u2CVWcaZCoc1ApEsUiEfxesajYbAH",
  "key19": "VazvofbFuoXxnbaNwbNTuvsWVMgUP4s4sMtJxBa7sCYp4gGujY1ZQhmbQmadswXyTr5KQJxqpCgHaJNGcXR3EDP",
  "key20": "3kwmARgv3R5cFpND3ZM9cyMQ7Tnca5QkdxBVeLTn4nDFRa5sH9wrECM2o1yjmgjHemvxv5paeVaBNPuZWny31N6H",
  "key21": "5Wg9y4noBePWZGHBaS3y9PRvFik4ZLTunYaJD2SiseATGooshBF6PpSMZRreknS5iGZwf8JsRrMqdmrj26WEEQFF",
  "key22": "4e6kEbsYrsSByfCyeNJM7jWVVQGwNF2BFbtVZ2WDN2PGbMA5s94wgHbEpEc55nuZdPRkzYxSPQFPYJVaQY1riRcb",
  "key23": "5ZeFNwc62KoRzx75xf2JFKQRe7nAJ3fQTzzxPkwGZ7V9AWQUfzkMxVDodCZW4XWCf9peCZFKkgfz76V8bwsjDRbc",
  "key24": "5ggseZijyZhCUmzUcVLq1NN6hcL3JpkdrVnyUXeD7oTHpzBRcDHcvWeVAbrp1WCwLX51oCMW6gqmF2xCc5wUvFJk",
  "key25": "45KLe2no8XmX5RQXRLiw1b7qc4wZUqo6DFaubSGWkjEqEdz26G52V2gbvY2A7dAYqtMPgyAm8gr38foUxg1rbiXQ",
  "key26": "342wQjSh8uUgDrtycgvu4q6M1wYZzACJ3NZrK9iyeMWwGAafMruutQadeEWFSoT4EA5zswnc5MTTkVF6SNRboCTW",
  "key27": "tM9NFdentgbbStY9jgYi4XBkR4AuxbCVRtGbAyWTjF8npgNhNR43nT4VkMKoqi9qCxnCsX56Ev1DNV5k62kfq6G",
  "key28": "4VazCUHBfzFoEzUVSmeDQd4crbWPREKzJUuWhRKEveSXmioDiZsC8yrK9mxae3XjVNkUzVe6jrKy3tFvtaAZCRG4",
  "key29": "45af9VzRFcdmTqUhWnXHf5TiaV3aYakF5vkXbfqNAmwciVaMJViwyqQrL25yPWg7e4vwp3stz4TvFXscnWC8xC7p",
  "key30": "GHiRNjH4GEk9YkeZjsXJ7PEQjPDVYKXmUa2847AkuZpQqiRHmJy8YZFnPZRPjir6q5rmB1BouNiGyueyqUBKJmz",
  "key31": "2ih34ifgsrhCqvWSFcn4rokVRDuWs2u39yU64XbEESHGBgA17dqSWPFhLnibnPVzLvMvs9Try8er6qfz7mB4Vz4j",
  "key32": "5qud1xTXCDeFT1Q7atirXddQazYF91J6RAAykzZ3RsTM1XoHNRd2i5uho4Biv56EckXmLqBWp6ownGGbqP2rWXwv"
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
