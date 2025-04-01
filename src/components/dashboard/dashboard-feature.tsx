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
    "4X8mLQGhtSJ63BFJfXwb2ixbqcV8ayVgYsov2ZYNzxvZ3nYxmUALkB3CvX1GYQdYtnVPLHdHrpxQK34EzKE6PG7d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pnQJpvTCEa1vys37djTFoVK2Ws9HJWtAjgcTccHSjCnrQEdaHJkWmX8KeGVqRm2qmBxPVQsePGFPzqgcrakJPi6",
  "key1": "3kUJYhhxk3muHWezLEsSjHSFDzjXm4uZba5NQviHvTawFPJzU8X5NpQfaF5dQvKJUBdeUjSTmpGKmRx6x7pu8Gs1",
  "key2": "4SgcdvEzF3rBi55SSEnGNJKAqST2F58hQfXKMDJKBSRoR1pmMKszmkHj4XgHHTrvSF258u2BLTiGv32ci4u5BhtK",
  "key3": "4jKzRFbwwDYp7ouqYu5q3KmzCrgjsqU9AXjRyfHH6MEhtec9XkxW2KPDXCprfsq96sjBpjiQzwv5KeF1oZTP21iz",
  "key4": "66HmWRxzxvUfEDhyS9sPQcbgfupCTMKsjGdCQrTEFUA6aiSAH2YjNKtyM9YT4nJnWsgQ56krAg147yPUhyckMe3c",
  "key5": "4BZxXGLciKRsMfex2h5Uss1Tj2cZFNgj4CjA6nZziqJPXqkM2cjHJwDW5DTgueNMqG1gkLSn2FMKXw7UniVErqm5",
  "key6": "3Xuzitch8mbK5EogvcuL7UQUJ19dc2jRBiVdZLc9KBVDSuhVtwrpyPpjRVRwXMQAhwappikkc3TEu764eVtHrBbV",
  "key7": "4A7uwBujkaJz4EeB2iiHzrgbYE3r5pZx4AE1Du1pLVCWnoe1J1EDzHPG9AVxcQMboDUwUrbfpmYpxC73bgnjKKqn",
  "key8": "29KYjzz1fh9x2BQ5wnoowV7h7EtTsgAmsim6CnGWvDYK6Mwmxgma2WG66zwG7wjomtYSuxUHcJsqe4y6KDvFBm3k",
  "key9": "2BcT1WyPS9LmcMJLMVScLfm33dzRxfWcEmZfYTca8g5ho8vtXxmz86MfuSPyRZcGvkySKNxCqqcaFu8wcnzkJiX2",
  "key10": "2Be5b1hMoT81djeQcjiapMuudiJJU4YfpYr9bG8Mvv2wkoPXDuuYkfNhZs2E3ihQgBW9XYtNem4s13xL3j5NC7UZ",
  "key11": "2EovGKhNMz3W2XafqjDF8qeKY7PT2ZjUAn9kJZCia6tcSkSnE4FtaDaiJU2fDYotDyAguR4MavmaQcDgXsmajcut",
  "key12": "31aRDiSzgEc625JJJDU5N6mCx2a5gHeujaCVV796ZUJKx3eyCSV5o7yeFvAzBmhVFFryb6AhQJdSJQ33h3G4vsLj",
  "key13": "3oC5fu5GiT9W3NcLCvQCei3MqUbAzv4ybmRuEBZXK6kCYJk9bhuM9vcpCXDHxoQZ7yAM7DpVLMYjAjvwmD7okq9X",
  "key14": "2sFqVsDkFxizKN7ki7hoXcf7z4ixPJy91LYnHBQ2w5gPbvyxvBp7MsHJUNvizMj1ecQDc6t5XVcMMfSroTTCAX6k",
  "key15": "65BLtBS6WJUEsXsw2eG8wp5hPLZ5CdiX4exHnHG11JmzxxxSQsZnQdppyxA52zajSMCWsnfv9my4Sh4SEECogjW3",
  "key16": "41ZmEuZKVonVqtjn8kKdHYmhLSWdFxxxqUZyAp2L6SaAd9jvxtSMr8F4XMi1LqfSwkTLVLMns5ykx4cStDQCnS9g",
  "key17": "hbwieDMmEGY2mugGxHMZjvumfovWeCW2VDeCVPtx14N5Nwze5VH8iMVrkaMcMBJw7ZujqN6Qyn5tPzuCizTEeSq",
  "key18": "5DbYawzp7yMZKtsbwDM1YfECUgsWTkZG24kYNq4fdQXquPCRb5REpwVxZninAzujiSVmZZKmtUjCyCLz3wNLxw2e",
  "key19": "3eRMByzvRTpC6fU9G7Br3vt5QNo1zFEEbbD2ox4LncqR7by1twRwjMBbpcsL8JEXtMK65pa1WT1mw4ENCvKdbdVg",
  "key20": "4SNtm4AjWgUTE6kD5GzUhjqStzjxKW9d3Sx7PqMM18PHvoYrgb1YPoun4C6XZooARR9MKAM6FqsyQSJTcQymE8mW",
  "key21": "3azqLjBMbgBczzcDWpDEtiBeRYSTD4jckBaQkVc7b1W163AwoDoUKBvUGYFswQpPbi6cj2Eyekmy3t5uzoZ3DZUR",
  "key22": "6ey6zamH8jNGdxbrmeDGgzCRUimdgSuzis4ekpx3C38xXWCDXKXDpDPdC42CU6VvVE5dentmcGPRMACiVtU9eQT",
  "key23": "3jtMYf29BPWcEPxbfKcPuHco9KDGFLN9thsg9KbxJbg8eBS3AkG4Ah3eTH1WbLFrFQgQy5UjRF8jSH3evK2goGY7",
  "key24": "661bYmoros1VgtHhqD9T3bmViQetZ7aJCcUEtpLbh61R91ANTPP5rqBdZA4n7C6PybUhuSioJCfpEy9Fg8j9PhwE",
  "key25": "3kTcxKpsUj9w6f29itBYqXg2134VNdKSqH6Nj3wGHUQqzwWHaBFiKMr9xDy57D2nbeSFAGkk5bdRTyyReZ5RHP4K",
  "key26": "5vkxboFsSKeaAEUfxnLAiZYVn3akidxWf2oYn3USpTbBCvPHP9753fGqks9SMDrjgrDuumKjTrp4dpqwhSrA19yx",
  "key27": "29Bvvrdc3ucLJFE65voEw2Uq16ka5Vj3CMDwTQMAUh8QFGHbeEv9vhkz6uLpZC7P36neGPNAjrVWAn65MMV42Pdw",
  "key28": "56VnyJD6ztUkaVreDKZudrvH49pNix644i5Vg4qWGNtndqKNaDrGWVQepqXGwVgVNEoUn1ctfPV6LoFyF7j7TE7L",
  "key29": "3dqH2d2ZqKc7GB1Z8nHZiZP6KGqSzvQSDNCS2w89xLJbzybVSsHvQNbW7yrCd6wWjRoGnVZ32jVx7hGnw6BX6N1T",
  "key30": "53qKzEvM5x7QcktEZyFKD5qaugDejrf3BMacUaB2GuzYkbvyh5wHTr8S5FRHhWKNcqEDfFZU7sH6mhcZ4arzjDHz",
  "key31": "2GaDGrvVywLhtLb7Xc4SjLdPafgyKXtiQkYAUVPACpW2R4uHnGxwPoSTGEBePXinFZGG1HiHXFxWdcjtKxmAMDFL",
  "key32": "6Zgrw4DYTh1qH5ymxUvY6rN6vMfX416wPii4QUiomohtCMUXTNsu27ZjZLrctQkin9fE68XGnUi3vEeSkf7fNxH",
  "key33": "uX5N6k6uuzTALx87Cj1gWqM8Ccv2npJD2zotyr48Af3uprxxubphqpevtXGaFcUaeQsVCXAMJCnwBF8mvnCdgSf",
  "key34": "3Ubt8TPSxFmWtiz4sxPxQP7Bnt8TYcPHxn5TM59HwJwHii4gqfsdVYPTG1w1V3Ag4kjUU4oM87xzHLYwxnMNM56n",
  "key35": "2f324syf6JscgcVcdHKdQxUCw16sdx6npvSRpWYYZT6pnG512SPw7PEV7NYLgZ5cgPK6ZZCabwYmk1Anim1rCe1w",
  "key36": "2FeyzG8vvXDfPqweuEMPuta8UA4a2Tn4ae7Nwq41KU5JbfmqHHBazVUCV6XTFb3A3nw2QYtEHksd8wn26ZKbWwc4",
  "key37": "5ePiGHKKTLVYWGacMFQrHBw3nnCW3yXgTCdookdehDBAY4pZUzjbuoKUQeoEpjkjr3SKmFwchLpcf3TJJU1ta4Ue",
  "key38": "44EdYwCBGGABnFAvx7jau5PQafdSahTepSYZSYBc5HHyjW3JmTqj7Ys4BTSm95tbfPMGvGB21r8HBtvhtfc88drB",
  "key39": "35zmofp59xNPzkB9VByoGECKXsZKbaEdZxbWqd99xG7CuDBWhbjZCWtNU3JxDsgDuY5EMLM7SryAShfNYPehRTTq",
  "key40": "4KrLV9Y2vudRBeXWCU7saxT4BiPFC6L4f6LGvnRKoFaxapbeShsv9N28cpm4PDaE3tqxXKQP9XNaPrjBX9y9ACd3",
  "key41": "2YuaHVcWEx2e9Nehcw8gkpK4zK8YygULFYu1yLH2JENY4pHdG7tLPTGvhq7rMtbVc7Bbz3ny4ic5ARbzcHktgetZ",
  "key42": "5DFUCDbAyUJGr5MLTRXin1MMBB1dXAcrg28Gi4Xg258ZCD8LxXnwpb4asdfBgKs1EUKN7jE9PsDdiSsut4JPuKHp",
  "key43": "3cj1EdWN1D4TtCbwCpCyUkM5BU1qnJwpyfjJRwWdjrixjpDUKRx126YsVxVNuUdanu9Z7Fx4y9pKFLMFPQYmCrqw",
  "key44": "sBJPcqVj9U7Q58FC4dt8ac4P4cHXkn1iFF8YGm6YyEY4rYtdCvvnExVhR9Z3MRavE2wGZ1GhhKvwoSBwYXxAP4w",
  "key45": "3g7oX7iCZ1VdycU2yuKEHb4bWK3Hf4LnSB8qBHi23rz4aQGixhNXcS3FRyz3S1u26fbfAgcPDn6TSBBtDWjPiZnk",
  "key46": "S3fZB91txb4qaHzDSQnMi4rHNKNbkXzxMrmHrtDVCcUA4ejS48BGemd78eQEQrFwKE8qX6gyiG8EQ9dotnZCX5u"
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
