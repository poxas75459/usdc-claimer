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
    "5GJeDEXsmE6Cbq7Sy7TYB9LXNpA5iGQwt8xa4j45jFxKDTrjoW3NtAfizAK2LCNs4h2QiE9Bs5wHAQ1ZKj9ph4FR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4VfoxqVuyq58UJSCLyD5iWousAvQBySP5QufciUmorUdYhH2zWftR7uBz8bcyWCV3YekKKkzXUAnzVjRT4vGYaVw",
  "key1": "4GLz1gJeDcQ99uXn4S8JJ42cXmRe7vW4nJF9n8HuGxPKK8JiABdAFrXJHK5iCdUnxGqfJnbVqPV14oZF4Y9ub2np",
  "key2": "2JiTDnAvXtCa44xRiZygNWmEAwAKg4bZPR3hKXAjmnAidcrkiCYAFPpDavqcviiUkkVKYdoWPTM4MBq64GfrMFDB",
  "key3": "2YTp1ujKjkxPWA4gd1RG3qcPjszTSQEBDf2Sek46xVFNKY4EpbxF6hNDuJuFFC2K1h3Yp41KDhSE93z3fWUgHmHF",
  "key4": "5iGmVUhiTpEwTfrxYG3zDHZdL3WDapJXm5NMhjHTEKs1iiRA4qrHdj8ZSDzmUG8QuLggRbAHfxkxe2mSK1pdJfBX",
  "key5": "4fFGnbvw6NC5ssVVi6nokWvpuVQMVXSdMXqGhAp7sdxha4xwZ83BzXFo7Xqoe5wPs3aV8YibceWWygnRWbjKfGiG",
  "key6": "2vgd6xnNP94gBTbZLVypCSDrNZxqfJcB6avYDgtahwehWEYDP497X5puS1z6eGZQZ7vz3e6jv4fd6zBYQEELFCCM",
  "key7": "4gSbHdHMveXUq3AUQowqCWmgge7fuqUSifsvzqaGYbUCJEDXftdDtk6asf5Yijk7XuwW4Ufs8oBfxBkFzAdCVjZ1",
  "key8": "4NwbQGUevM9tfm1P1unRJFxdX3e9rGTEZckfYUZs1HxhX98b4ecpnWPqGw6E9s5iSBdeNTGqYGpV3y9qeDsCTMoH",
  "key9": "3n6YWRaTjZJMC3jGEcfp2d3HvQ8hjPn57MrFM5nQ1YD4L4ouJuYvaV1xvUxCFtbfpecQiDo7w3hab3LbVwDP29Fp",
  "key10": "5MKJHMn7o3JTGdaxkJsTZvD3keNnabpTp89x6kD31ff2hJBigBU2CdatWjV56Jvnuy1ge6ke7c6PcesQqNY1csa9",
  "key11": "4S8HMqWBTMmtVgNwPQayLxqR9cB4dzhg2wt9bSwqxV7WiFPpFkt9DLHiTF7b7SLydMxmYwtfVKr37pc5EKcRJpg6",
  "key12": "1953gchexZBbgUDz8y4JtHxY7TnCHLR1hETX6aSErCwSTsLXVB1ScwGnquxosZQoBkcVnX26GbgmE7EZC8muSMv",
  "key13": "2Sb6ULvFmWe8q7mk1QMwbw9xj83tuAcEyuwMc6SoYC5WjJSUakV5XiVj81QsHK5mm69tkaFkGfAcAKLPekeK4Lb1",
  "key14": "VrqkxGFqtpkJwaEArfEUkwgqfPgST8YqFz1zndLsdvGgHjpUZpF633V4BkDVqGr9Tc6WBZzBByfdB9nwYAYoxPw",
  "key15": "47f4aUe2saXUpe3UEQDtGu7kRuPbX8tPbLB4WWtRk8vfUdwKnrXihZDQfCLPTpDfiRyG6ChfJn6bBoTYSr9CwTUf",
  "key16": "2ZZ8saLZLWdPq2r92eaxStY15XvtyrHqeEnPqcDsgDxt4SAm16jiN7H5xKXvYFUkvVTMh3siqYDqFZjeekmGUxaz",
  "key17": "VUYwN2AiHKGou9Uo627cZKdJGxyYYDonV96EuQh1t3mE8XtrWjM32u4FVVr4QurML5CqvrpdW6st8SVEEFM6paD",
  "key18": "3Ajky6wBvbNHAX21TGkawfdMX2zgo18vRFsKBkv4w2optiSnfscGcaXR7BdzxVoQskYPhiw56Jpm3PsoJScduZUv",
  "key19": "4EeaT64j5hzj6stXHZw2BHvRE164aBfdLEBNDddcEopw4mcuacFo2kqr64pCdsfAZuKcKrWN6ZJAZ7rgJFosjwZU",
  "key20": "2nRDC126RjpDPcJKAcFGZC5k8nzQ6C76KYaE5aoQUi5wma2cLiP7kPtGF8kfQzN1bed1krhTwfDihLZrMbopeTV1",
  "key21": "3Lo1Sa6JfKfcmyioTgjqsUgYpiYcosbs7g3oYaCjJ4GdvieUmVY2SaDUWAJ8kfwPibU6UA66eoLSHGNFswg2qM5U",
  "key22": "67NySV635wQZqe7urvMpJfcqA2kifTmTPThRjADgMVLj3f9dApz2Sbjj9D7cRh9LBebvmVkmDfVUiEVVgtU8jFgy",
  "key23": "4u6pbfZdcKLAnQpUCRbewdW58aiV6nqtCfQJW4wYTWBEbtK2JLdiP4cWX1f6ZHagLHeBFaghqWbgb8HJJ7JueY7o",
  "key24": "iaHpPgyWbpu1yqb1pRhu15Bwrz1TFrWHaoytdRT4EzcboKW5GGatQChNGCZGdRrXKCCR1Ushy1tfAyJYc2cGKcy",
  "key25": "4iTaijy2fR46UJpW8QVocpMf3i4UxXmBte97NEk6eNCdGz8CTDq5DJPZNEujoM3kDpFF1xHZFrCrLosZuspx3CTw"
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
