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
    "5dqvRaZhaT1WJ7xyepne56ihyuFMDMm3ZgEKymoi4xavBAFJ6CTur7RNB2Kg4HXUBJK9FJcx9WjKYCtmBwZYenEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4TApJamPLaBqetngssQq2dwr9EVt2tT6D9hExSYeZWohpXKGWRNHXmGp2sLFGhe5mJmwz1Xy58xxyp5UR2yDfnBP",
  "key1": "3PVhr7db6ne1L8CiRMBrWdV4MXxZBo38Goqnd5xL5vr3w7E4vLMF1VNSp4YACHv2UddzSqhVeXLSz2J4g5Rejp3U",
  "key2": "JzvAKCKnoGgSt4n1BJav8onyYZeH95yPoje8E1rR6op18T4Cc6dFdBZS1PWLgSjouUaSkrvXzjPg2LXmmxGH4zc",
  "key3": "3v9KGGw2gEaqxHtEeGQQopqGSxVsgSAwzvox4vLPFFAF8otJ5DicWnfgVuSGUgiUn7pc6ZKwnHh7sv2aSVis9o4F",
  "key4": "5sX2aDmk1ZYVomoe93RWhdiykQt2deSafY744T5BEsryKc2cxNVU3z75F97jaNH1aUSuVwJma4pjhpDQdozkkU3j",
  "key5": "34WEkZiDFR7LyXXg5M2tHivD1Lqyx9qNTZVP4a2bLoAdSnzUy8KJuKxBfcwpNMN2JwonLSxcCAyvoNrNE9jr6dRu",
  "key6": "Pj6tH3bTA3ygt5vCC5cjFMpiGuQ8T7b3tfknmxyi6qPnaL4REEyiMymGnqzVvhFh4YP2EkdaU7SpnjybFnXLV8b",
  "key7": "NTaPkJ43JfZ4hnCgv4Btgj1EHbC9pw8TUMLoQ5e1tkc6YLiVw9w4t2SVA3W4ShqHtEEvo8pfNS88DD5toUHMxRF",
  "key8": "3ayPf94saGQZQo3MJeBpXvanhfDdybEbGd9ZExLrbwLLfxaUdtbaEFu8BLjoWV3QVNJmywrt7N3TmQBCUYyuAST1",
  "key9": "5vHcQjN2kS5jf93mYaAXZgF5X2Urjbxz1KtBodBfKbdo8P3gSsGtkESy8uEsb4DbHqXjCdEAGzFKoHFi5KKPqEzH",
  "key10": "3zcduckmwRHLJz79nzBHrP6dW4TwvWccoSZ4H4EjM2R6jSBxAJXKcXmdnk4BJwaDnu38GDva6jJLpvMhQ8pq6FN",
  "key11": "67boV8iDHPfeJLBVRquwkLkt4ZP2YDkKHu8gqeH3XUszPCLYfjWAtinVFeMM55REVzH85YfMGY9q6xCrR9NZ6xwF",
  "key12": "3AqzmauMUxq4EHdWarqgXKoSnBQ6oHprjXnFLAWUPCrxvQMbsCivyEG4qaG7u1c82cx2J7f9qpqNuv9dbPFfYQMX",
  "key13": "591gE8RL4cSrAQNmEZ9nTAaeXA42GtHiawxgRzSTyBEtxgcnkzCaoqs87vAiSfHxdwiE2F5YxeBGY1MngD25f7tv",
  "key14": "3ibNvyXVyZxKhv76czhRRpe1MGdJ8d1iqERwYih6ZBn6qTkqGjNGhkTLAWWJ6w48E9U6K8u8wD5tpXmohd3dAKm8",
  "key15": "57pfd3zedqTC9tPeRG8efYb24nJMLx7sPTQdwuxwChd6VD7MbNQqrz7ouRtyjPL3h96L8Xvk2ug7W7BtY58cSQU8",
  "key16": "2PEcYkF7ps8HxGZKH8rwrvZphX2p5K2KGtrpZsMeVtJoyyXx7zqMTMDpphTMvawCZPVqPAxLamNVmHwE8wXePugt",
  "key17": "5HzPLdsgGbgCDeCnzsP5zvjygLLM6bd658RAbGrj3bxMBNstkwYR97eDdCcfwozm79RqYNharmXwzqnSa3H4PXFr",
  "key18": "2FQGgQd8Q5sKk2WUBLdEAEHg1MfnEz1QRYyq14gsSDGj722GwHc9tLSdD8qSYBLXHmMczeVaToRhfxBhjG2afpj9",
  "key19": "3kHdmMwAyEAi5aY214sofQCoG2H7bXt789ZLzGwWvx4aAPH6hhRucefm8XWpJnpNrkBxPhZEnkV5rv8XFebEx76g",
  "key20": "DEV8BRheCmJs7PT389TtWkgGSGGHL7pj9c18das6KJYyRNFQYvVedkzMdAYhbDJdQBeKSBBNhK1iN5QwpuJooyn",
  "key21": "5TkGqAdr8xxTLqCJ1EE9GGDohFk3fpYRkeQCTEDUwqhnTJtViJFaX8vwshyaUgLG1dEyha12qcFyb7wbauACfsYZ",
  "key22": "274wBgQTajEosmb9yu2WqHcNvqMBeHiYeUGfP6syGCtzKmPie6pFK5ntaYjCVs7WbscU1pYdKs4D1z4fSow9VXqf",
  "key23": "3iyTT5XsjsQLSZghtC3kxmxWsDiGLyB9vqW1qMuKkQkJLvw3YcvWSQBEdUNqQQnoqfq2nRGgS3fHSi6GsSJow6oX",
  "key24": "5tQ8VNtTg2hFKWkbRZQVFafnaJRq1c5JA8QCDMMjDLyGGzVLvStsYnFLSEC4tHKqB3SXngdenHbnghVGFNFfEJeH",
  "key25": "a5QNQK7gU4ySHvy1kfo2oA5fVgafMm3HVs4CmF4JDub1W1WynyfoxTzu1siPRt4nY1in7tdKZ7GTsPMnAsK87eb",
  "key26": "3s4NvaYVboBf6KxBdXKr86AYoWV6pcByMfp9KwksysahwSYNYW1kqmy1ZrneJ2BEZJiVGb4zYH3x8PPon9S3RWfE",
  "key27": "3BTvMCxZRKU4Ea64FBNEUiPKoh2dJ6mkdntwnd2Mrdm4WBFW3t5oveaWNG7z2fLXDfQoKkqbSzL2ggd1JduJrAjS",
  "key28": "5LDKFvVQZhzUwC9rPWzUZiKNKJUeAH2bHnu3Z21THsRNpowrMoY7AmqAYdqyCMBByeQUS9L2tweGcMQZJDMnxKZm",
  "key29": "5PbVuuFdq4DWBx5po62t4BQUor5qEr94eZpGN9mzHXQueyueQveWeDS2eneiTcLiVKVsQtrumfz8tUonNSPiAetF",
  "key30": "3CVqnnmvUkU2Ytwq1byEoEZXwXC3cnyL6ZTveTzeg2qdjJYwGbezGPQs9n337xxkwsUJ6KSvyd4Nv1W68sUPsDgL",
  "key31": "5WHtTUr8ZcsomcroguWPdSWw3ovdEPUsRoFrUBH1h5eWViMTvdqWZePZ7ZvdVVVvqtDfHrjq3uQxwhGWyr59EjVL",
  "key32": "odUM9PLMfGUrZZQCpYKXVjwvwTFqAe9t7GmkFR8AdiCvoW4bjTKSHrAeuWeqyHknsdpHzhGKpNhH6kALMx3tZ4U",
  "key33": "47zDSTaN2HuXR45WMoTSKUFRr3eHurH338X12cZi5E6jcHTvmjwv2PkYxjXDw3d6VEiyG7yKrm7oAAU7Dh6c48ux"
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
