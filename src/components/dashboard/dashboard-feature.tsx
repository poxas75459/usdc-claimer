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
    "29q6ma3w4ZR6GaNnGmpr3hqsKwst1EhE2wuYFR1urZBq8PpX7JLtaDeLWt9weMvLCo8oaUTyDLMFNnE9QfiVdqWq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61LueQTNMK4suMhpfFQyCuBce57F26V4jWbUbjY76uV2rhsQGcoDAWGxpKCb5fxAqjnCoqoa8DZyunpBrY7BVD13",
  "key1": "3BnzvxQuacHSTmeMf3n5MGmwND4JrjhcRHT79DPpuFh4KYZT7MafUDuJC9UA8fq1TmFscATJi2GE4g1TGZQfPAzY",
  "key2": "5f8tFbCRF6UShThnU14xYA4BWNBokBXZxscoQ1EiMfG8q9fKY8jsvtYYwVFtrtqfWewMJYRa2cAitkVYJpW2otMc",
  "key3": "59LQczxrNLYpHsWP6yEXTS3G73WunzbasMNY9rmT7CaPMWCvf52aezRLJNYUKp2vTUMi3MohqGkX9psE1QdPbUhq",
  "key4": "4YyG4KbtWoMHpBEFVenDm8h16PKBQu4suXa2Pr9d5YVZeqwKh9uXRry1EEvYEpwcKFKAVcjksoWj2FCa66KTTMt2",
  "key5": "4ydaUgyU8YEahvX2DLDTM266U9m67ns8JTc5VULDS5Ku1PaBDU5Zbxn8omEwxViv61HFuvCUV1yyJhot4kpRDXrJ",
  "key6": "3DUrh7iFqDXjRbf37jYTKuMqDQppsJbnpg7mtJtP1F7Zmp1EGTioZN1xWa4bEnxXEUGc6aseVGdTu6akUGGVMQAQ",
  "key7": "uvYcRE2FYHKzJFyz47r5rMXD1uLC72kTw87ACbLQ45sXMexj1aDGAGUueD1XW6Rq23qk3BKoAqfm4cMf7TSAqnT",
  "key8": "pKYTofHmmvEwHT4BZ1AFwMxuCCeKALBwbqa7U1KF9dNvPx9CVqxKRos64v2U1rhfvYKJss8EZ79bU8vKQ1DRkGw",
  "key9": "4pKFnQUZ1sAg4qSrSGmrsT8abazWToyqVZaQnpD5Zz4CYo7CP5MQcFhdtSA5DpHJtjkHybU2o7ectt12wiEUvSjp",
  "key10": "4TNy6zkVTL1BNuZLLAL6T9Y5AKMXxeEUv7gN44p3BMzeqCtdswqv4JCgq2ALZPXWBN2VKaJXdhUXVxtgGUqjAvfs",
  "key11": "2fugQg67X3XoXh314xZLaykfvhQUT7hi4kVhDynfYoFbJ8xcMDW65wKUy6GdjJfEufFe2Ar8x1Gtf8eY2gGPBR69",
  "key12": "2ZKiHjxnWJji36CeJ1pE73GEeHbxFRdHve2F5mWEhJQDuuEdvpzzjM317mJszat8kXnEo2n5GuSWS6owCjFGGZyF",
  "key13": "vAqHR5Ym9MwzkXF7Tj8KYC6njJcQPVRAsjuE3T79gC3F6oKGQc5LsdStZ5XAajAMVQkLCZ2KPoyk8pJJvhviUAR",
  "key14": "ZS1TfhRR8d3GQrZCGVTMs2VfYcP1qVCTpgVTsCFiCw4LtfPzQqmsiNQYQUdZsEg3xpzGrPdyHXBR9guoUjL2Ao3",
  "key15": "4ZjnoB48uyURRTgYGLvJmMaBWr9xcejfTjziEhF3zM29K25q4FbZ77YoKraCzp8n79C24to12F8pRaHmdkuMepyi",
  "key16": "5kiThM8J17kcr9AuM5w8gNy1Kg1fUgZ4TgaZZM7iM353vcCqV5NpdLM9W11d4ap8jZv9H5QnnnuhK5FBkKW62jgJ",
  "key17": "5Fk2NZ3oCQ2EC7CshFHUWLnhADHvJp96YjSWwxpnhBcvPKH8R7sW2NfCgAjNExEnMu26QYT8s9D6xj1WJRjM3G18",
  "key18": "JNZ8yK3ddLNLVFfaQaT1Q1bV8kw7jTTpqBLPhvQF2KsL6Lzs6kCw9EWKHuUeM6jKqT7tzbRYEJGoEwwMjiNFsrL",
  "key19": "5MsWbFqRz8W5ddiTWJhQrn1mC7TfxvrzSZ3xFyLL712WgCTCXPsP6gG4NqpGkur6zPjFQozMRvx4SaPjkYqzziWt",
  "key20": "43Cx7QmKuDbFcraT1L39P8QY8QgR4vkah3k3AoG55GBFUA1XdjgTDv5wSwq4ZpKB32jw656DmM468TdDDFn1PZSL",
  "key21": "3dsN3kxFCr96gNsjB8xiih1tkE5TaUqcA8KKLAkybWGXK13F1kgBrBT79ULn1Ujn4fjXBS1f8aQVu5atMw1UzAok",
  "key22": "5b3QpkwSi8WBjQCBZf6jJs4yLo3oQ5JsZxv8StuNQhcaVjm5BmSawanAetRtag2dbSGuXVJUpygrXrPmWX9rEzui",
  "key23": "5N2dpmXvbVyxNQbaYgXKx1RntsytTSdBVXymS475QwGyuccSgkH79fw1oSwkkXbXboWxtqCwj4Noe4fTQ3HnnASF",
  "key24": "44LzJ3AFS1MrBZ7EWwzPnTLSvehTowUHntkqZL4aZzhyvKNVkkSBR8zK8DWVzzTzCi3uEg82Adw1z9WVXmsXeLXY",
  "key25": "5N9RcDKZuCNVNPNyfEv7ninxHwU5qdatgzcvwEXf7VpSkFHPAbtADL3dTVvbm1AbhYMPW1hpdgbZkguJ3uFnGTUi",
  "key26": "3qvCdEbinKdFxdECgcZuzxDu1RbiYynQnQuXv3qYcqGAjjrsRCW6cBLqbf2XutXdJHTgKqDydk1EDARgA6Hr5jbz",
  "key27": "UQoqYnDATCDtLT4x7EzaoBvW4iap1abcoLjAFYx2UFNrSsWbTTdkGz6BBjLAp7V3DsRRhvNs6BLRMbGA7WaMhtd",
  "key28": "4FfP97444mZcqtQ766ktoCeRDdi3Lgrtwom7T21QjeMQ5XhLFHyVMFNQi2hVEJswYN5BXb8rtudFgsnob4zQUbD8",
  "key29": "VJuUEndCJoZrwRPzHafcYFZn8L2c4P5ECHdqPiizh4DgEJcDBfSMPcKD5hsM1CuY9du7DLVaKk4Er7jrTFDw53n",
  "key30": "21ThvoJcpHkNdod2sj2nbPSvrfLynrjDeYEMbennifSsaZouBifkqTGSAR1RdYMA3ZvCGE3G8MChvatTFHyD7s7K"
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
