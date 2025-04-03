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
    "3F6suT7tDUVeCwsyRPHohNWvTtUtEXFPnkjCY9u7MBX2ftYYwxvWmJE4QU3Vv9L2ZJqHhPrhHcEQzEHpbnZkakJw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5WUzBHwSfo6qfcanxLpgCFxZFBAns4thc7EmgMzSsrQoMNYfX6qGJGTzLk1cJsdptzMva2kE4R8JoNvPT3khcQ9F",
  "key1": "4fGuozE1dqRUodimk9W92WjBA8KP4YvSCx2SmQKHEvzkYZ1fNWnFB7JrvEz2avxUS5pnVXptfzzXehidQLi97BTk",
  "key2": "CUHkz3uq6RahLMzxyQFL1crFR5UiQTgZpePDNZL1KCGjtpFWH2dnwUtspwiVBzWa5DcC4dBcJm73pqwHG2DDwg2",
  "key3": "bjNqfcELRKaEq7q2JBiZobhkzyF93tU5AEKjKe4ShPvP6mFvPH2m1D2LKiBVn9HedLDJvD16zYgrsUpfLgioewr",
  "key4": "4P3CfjAbBeFTDaLoB5FFiQ3s1Tex2Z76mingVnoFyF15vimKyRmS9gNuNTAgXLh6pDQGqK8TvVXJDqSuuNPsVpkP",
  "key5": "2BzdAMQ6WydmRChxKBDj8HxRCF2raEtPdDKDcsfsGGLzwKheqNPGUVcQxRYkd97tebTnJZGzNjdQacoqC3tDU7Cx",
  "key6": "2b5fTwxECQ1epzdqcRzCLUv7PPMHZ8jbFkvDUnr984Q7BMQsvN6nBDFfmN1BRxCzPjGBKvrhdfqaty8ZY28xXy8z",
  "key7": "4vvxaktnpSqV47iG1CSghkUMQ1qRCgr992h2HMYGAjbxLhB9qgHBeUbcJFvzT8SDiF81D4w5GSgQncF3ApRj7zkj",
  "key8": "3fyxQV7NtUJkmCpgeEW4b1fPhmVRa56oQrZN9krgXheXybj7KWc4g66LN99fkxbMe6dac4X6MYxwLKQ4yuBLjw1Y",
  "key9": "5mW5Z91vtgskhBk2oN6MQuMxWxRip4DdRn5reAx3WELLqhy4uWQNrsw9TJHtfsKnDtTisbL8sv8uJmbKUDKo4MAq",
  "key10": "2cjLvN95XupHyLwLKG2LoTmKxZpbaDidYrRvFVdZ7KHsyL9cs8BLkELwHXPGxu2yCZLygeDWGdDtP5mcjXG6gEfe",
  "key11": "5Hu9KJeznbjE5EgcLYQaWbz5vmfUYA73oYMPS2UMbfSpSXoEoPMzNeAMUjAiMzezNQekutaVajn2vzfwVLek85sC",
  "key12": "3xGYHZJWJYohHvnnRFAHS35XjmN5G1FHF4a7LK9Q95nwmBEAjPuk6QcYNtot9bRgeNgBCipj6thawy6oDjQxyezr",
  "key13": "4is29jniEK4koZ5J8X3fs5zctraMwukRV47DdeaxDCzw9JNd6rXoRKvSUiFczeXJRWTebZsFggF1bVbEfhJLZfuP",
  "key14": "67pXm5yFKp11QNybBSFo1WKg5rdoc6UkBE6fGyJUKr4TEYucfeKP4cSUsDNFMkTj1Lwi1vUV2Zr5ug5jbcjvE8HN",
  "key15": "4pVn9TLtzsPgvWqusZ1T2kHp3vf3cwAd786d7cbNajnFyqbDp4u5PyQuLy8YW21eyg1icEnFUN5qJQCGhcXgjYD4",
  "key16": "4Wue8oon2HFkvh9Wfa5v5HFe7Sb3EoWRiaeb2U8584kxrTDudbkojVKgB8xP5WpfCLhwcszbptE3wyi6269nx33w",
  "key17": "3iNk6UBrRZAy5YsSmuvXKrFEJfQsP3QkYQhefABVp41AuJAiPwwiQP8zjZc4NET3ajvtPLAq6SDvRuh9A1YK77Mi",
  "key18": "fuTJY9oB9D6X4LQuc8HW3rzo6NtVyZiaLAnxz293dTRqNXszCwokyYvg4ghoCKb7Qhd5Eu2LYX3qx8kw1Amvjqi",
  "key19": "4FrR5GEtFS9F7TF1KkiRn1gHB4xJVGsW9ErNNgjVZbYQBM5uQV1f8TjNsdndM2qQA1mD6aGwFb3En95dxoB8B4PF",
  "key20": "5GenuE5RWSFq5F9G1Q9KmuS6HVA3zxoGU44YTg7JJAZphzoeW7SC3UK4eFmAqV4LCc6Hq54BBaLKvnL5dUzE2EPP",
  "key21": "3Xg2D3AccvtwxPNouUTT7LDq5ZUQEC4U9cXAuSETx6mi1Jo17tJujo4oGWECVDc88jUeB66YgPJzkN2jN5quJGKw",
  "key22": "2Tw5b1egMgQ6pWZFTFhA8fgrHpa7VHjER7E39vf4Ck5BNvKtePpz52TQKqW37NtbwFG2GoSKtRNJMZyVkBkra3WS",
  "key23": "3HqZWd1nRyJKZtq3u7hwbvHuEmzScry2sqzNymvqoA58M2j2ysuCg1q5HknK4pevNZ7mWoM93ePtQYe8R88ARUmz",
  "key24": "62xH85KCtEPtjYtsDB53oyQqGZNVcaecdqq7e9DrfUMvZajqRTFkxe4WHEEMaJH8vqhUgLkU3rFeBVHg5UFi4otU",
  "key25": "4d3akjABk2j73pD1yqJW7428qN2drWzpFzaLRf8eaFqaLMYFjwJ1fvXP5MXdhVDsk61KuuPXsxATJhofbmqCH5wB",
  "key26": "5A4ZjvQUoMQvQLiCFRW27f8HyeVbp8D11q6ao88sC9rdDB7w8c8Urhbj8SR5MAf4wQKuQNYs7Q7GJDCBXq29beta",
  "key27": "5FDKu4JkHmtURvKDAtu5VM4scQRNqgSaTp8fv5XB7FtaoDDQLTj4snur6M1a96WSqU4SajUrTnf27qixLHn8i4S4",
  "key28": "2cRxj9AqPuyfyixkSpy8RiUotFYtcrmxMBxH6Mywt6BWCwMTMsQQovaJmx3iFVH74WG6i5Ex6vgaxCh37HuPV86E",
  "key29": "49nMaiEMha17RZ2XbabCun2Z9dQ1dXvfF6B8PwCW1u8Q9qEngaTiGMviwS5EPURfMW3CGkNZSJb5knRYoBGiuhyX",
  "key30": "Nuv73NXRxHpozxAtzY4SETcURsPXT7zvBbBAJkxdPoiwzNnq1vnQVbhLTdFFiJdUoBZnHw22AUzEKFnunGie4d5",
  "key31": "57YbtwvtpRZWaMALq13mNsWTRZ3mDJQNUvuXKo9RT2T5Tv5Md2MLi7gysXMAQ5GqJXUpUcUxcmPHLqFrPPMfeFKg",
  "key32": "8Fb18RdvBUHy5HkpsEoTsnwWdcrUD46ws13YjMbLD94ahieKXQ8kFUmD6BdvyGdG2SDCpkknL65FfUHUaTgoJqB",
  "key33": "66CgUspmZm8qGsgQyMYFrFL5SX1mLvhHmr6pXaZgtiEmdcmTcTCBt5LHxQL3VU9J9NvmzkRe1f4BiXeZvoNzT6Ea",
  "key34": "2UTZqZ4VTvv3W7fV5ATMD6rCA6otPgU9i7SotvuyrH7bPXrRfiNMyqG1HfHJ8ygqjLj97RRBshoEij3zEqQwB44o",
  "key35": "4e2kYJPGFFYvi73MAEzUppyTbHdFeb3pfrwLkJfSuBr35NCH8hBCmpZ1wKvS21TGvCr7K78GzdGzbMshaWxFLbcp",
  "key36": "3sReHiMiQzBGHs59kqpvQjGNLV1rpBgYJn5wuV79rc59D9YXmKkGWJwTuER7wDqT5gvD18fxGpDmp1ZSmsQodnsL",
  "key37": "24NqFMG8Nciu8ohrer7dVNnkCGrPss9uznBakgJzRaYuWbEsERUjbCLTEDXNKBKL3cDxsJQaBjWdJQuAVUHhirPx",
  "key38": "2tuCfQVfWUo4AurFrtiuoMU4khBa8BV12bYcAAquXzkgXikLcJwXDL2HyayXf888iSv8DL8Jb4Y3mqwaza8Zd8Ro",
  "key39": "n8BMYi9ZTPsR5iJDSEwbRU91RpRT8e4L752PBPq4DzmBfHs2VW2aspbHo8jiuUSnRtuB9iuhhRJvTa2aMiZQbrY",
  "key40": "3vQZWQtz1pz35xghznDCM5KP8WbUFLUpJbuM4faV2fWDZ2g4inrJiegDSUXiVnbUknaWSambi3objsNjGxsr4Pz8",
  "key41": "4XmFz1oEAamf396bWtTNhqVEQhNnrn6pBRSq9WyYkGEa9zktavCGSWmvyMupAPmQakWQd6L1rrKNNh4eKXt3op9",
  "key42": "4BqrFJky3LbxrEEwVcx5757RSHvjn8wDJnd5VUJv2eV82CgpKHMGn4HxqyiGz4ukRFz6LzxEQGNEcy14JSu24c8r",
  "key43": "CYjFFnrGn9sVvWwLFxgU748nKy42qUWXgbc4o1KePhDpc1Rj6PFqVj8TQrHayY4fuamrLP2DUmXPHrsrHKsSvbq",
  "key44": "4Z8716eApqFGR8HMDQKS1mn2XxquUDuTstS1r84VLDQ8CsucHoH541wGkxgVdd3dCFBXeWB5S6rmaMzVAFKcR3NM",
  "key45": "3LKtFQ8mBDvf1DxTq4RQJkR2SmKCD68d37SdzPjnbtHKUREFNq8faQLjsgZWViW8tG3N8HfCB2dfPgTkGdkfqS4g",
  "key46": "4WzzKneM1FnztZ5iUSBBxuF7KmESfjV8SANsgex6w76ysL6hpXquBivHvr3Mjaq1WsSQZxC69WqpQ29Zu1Sr1zwm"
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
