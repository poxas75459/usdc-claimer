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
    "4hegaNTNTcXaBkCi9zNYUizJt2WHjmPFiMMFsVs8v4mDoTaFA86i4xVLmKZpbHKCXPNf4BW7pvCAhdssrqkHi5Y8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "t2rCYPcbHAAiCTKnDGz7KiW5LEXFvUC1SAkfK9Zq7ouBpxkBJfefQKHip77JfGDBFLdutSrp7AWLXXcBiGebDTS",
  "key1": "3f8eXBaimJW6XE6bF8wwdDQaK51pA3qDSrKvaounf1taJGyakNMg6juZYwoMrR3KnPDMsW5jJGCq4BHaXAenCKF3",
  "key2": "5N9RTsK1vcKWjv2ADcWatjDeTGoummuXQH12tU6t2CGQX5HFtxPEsnQkD76dcTDgwh4hkYZEQfV4U2JjX5V7kKa3",
  "key3": "65nif1XcAzdNLd5mfhrQSmvxGuERSc1azSwVKRPQ9yZEHxNToyEn6BjyuHGXknop1QY7bfTvo6ebU7qU23NJBk25",
  "key4": "3UtgtsqjHSZJ2ZkE1hpHq9ExSdL1scUKHDMMT9ekeuoJ5jCBwytoHtxZp2YrugLNb3Gqzn1hDA7EHVNUQCk5qPME",
  "key5": "2pgRk4XgNuGWMyyGwr1TDxQqmTfGJAptH9Ycit15uuwCo2JsPmTiEDzoEGzvPoDfWkxmDcnsVre1qiZjBkngaLEK",
  "key6": "UHLSnDaUPHWAALAqfCgimdp1enZtUqsF95cDGrffYWgUnk8oU4gL5juuWQqNF8MHA9XxxN9J1wJfsTW48ibHVhd",
  "key7": "2A7kYcoxGSu1zTiGjQRz7ByCMsjoiFHM6zKy1NSjCb3ziiQPjmKrjbPa3qAFdMrYcLiaSZZkvbJhaY7noroyG6Nw",
  "key8": "21w9NQY5T22uFx2kpr7t2XQayLBdVJPJibrKTcAosZJ5mLwfGS1mpiaT1bEZbPjN5dqvpuhc8T5qLrNLnkQPzzGm",
  "key9": "5aT8w4fhPsBE9XYeTLF9Y4xTAkkHcgNbfbXvaPcfq2VRW2yubwVHMCwEQFMi1SeeFG232GVFx6E4wLJL9FPhsrpZ",
  "key10": "5Zaxri3q9J2oA8CsPriTB3moCJN7W6tf64QKzJ2e5eDGjg4989ystvtqx7Gz3WQfBAcDgHUt6TndWSuD9Bcqg2uG",
  "key11": "YcnDtKVDFQXMM5XM48iDRnboPgncZBkrdeHRRrTi3nzrjmf8kFFDCxypAwiuMToMq5mkot7EnkR6wxtz2Pm3RfM",
  "key12": "2U1LDimzvZXarYgmrW7TjBQeapXdm7JgVB9U7nsFVa4sVR1uN84KmJK7N4ej1MdvAR3AmDZotm3B7aK25TxZZbvp",
  "key13": "4NwZ3CvdgcGN14uvxVtMRa67A1Z3v9RD4DwvG1m4f7UZW4nuLZhvxjJaHEM9AKXiPvRzBjyEZd5WAbMPZdxWAmGz",
  "key14": "5STy9XWqV2AvRFLiqxhEadi7JvGKeEpQwzvNiove1ZnuzUi9v1BaPxNdfwnbBraPUBgEbGPShB5EkPXjWnas1D5K",
  "key15": "41X651JU8QabLB6p9W2XTFekVmWNTUQJc74Rc8ojV3GXiA6qxyALfk6shJTJvynd6KjZ6XcV63t2iEcYNTMATxcG",
  "key16": "61ixiP71f1ijou65K94mkYTfNNQeXREvCbg158ruR85Ri7ipoFYzmq6yKtTEfmudJenuqPQ8PgyhsN2J6SDcp2hv",
  "key17": "59r9HjUR7wtp2yFuH25dR3CvkXk1YWpDF37SRuQjVWxznUASbpwv9K3Vr7eyLL383UdCrmqAwfMBhcs2PgNadPeT",
  "key18": "4cVjQSC7rGJRiTJtJhwRAmLaAEbzKR1WuqGrPRWr2wKkve9z4pFVKu5jDCHuj23pwdk4TBVTP3XfDzMXHeAfsqep",
  "key19": "31dUVpneSGFrXwrW6US2keL3tpCK4KjWYS6oVmMdtgVMiS3eL7d8342CGQCrAuUKZZcavfARhG8JzgZXvsevAV13",
  "key20": "2tjewVkDYG8MJParRKAyKRP9eXA1pMdFaNWaq8ScGqFgw83dsPBM9LgCdErPn65gz6qzREYTR8nuxhrxfxQMThVw",
  "key21": "5f8zCs1F8dMwCjWbsHUuWA1AiuqkZSt9syWEo3PU3Lg4aruyBQtAE6Jz4RhQtCGLPK7EYPGwMNFua71LiBv1Nsh2",
  "key22": "5NepzWhWWFy2uoHsXepVyDky534Uqs5pdahsKuPcWQEPZaRiF7qxn9gMMgerKWfqGGQczuYb22XwB44sGWdo1B9S",
  "key23": "46NJoiRV6wRT2oA9aR32keVCZ9RW5oWEXXR1BXmapVLkix6uhVeogeSmdXtt6LcdGVeftNFyVjp395uZhywLxhwA",
  "key24": "4Fjncfch8RYghqooNom77cGc8eKBsooyvPwhQk5ubzDqs7VZzXcXcAY8XFZi1PeL5docRk1PbiQFNJRtDEmcayap",
  "key25": "2mjohYbKAd1RoQTVFmG8Mg2vN2CqnNzs4qLsETSnoE1vDyrRYSZnKAUCRm76NA2x52UJxceuMuKFuPvYhULythL1",
  "key26": "5TT8CZxSjJEQomAbi5XxvmCKVrqujkHHtPxuKXyriDr1cnjw1eB1fLTKpyYbKPMQhQPR8JQQMbDyLZ54D7m3vqpw",
  "key27": "4AwFYuJoiMZM6nrc6V1J2R1LkwEUv3CLvTejkdCVshe3Zo33Ar5YD3H29FNQ6xHu8XwBVajPvxggURpLMVawhRs8",
  "key28": "64k2weFVUbHjQ1gePzm4scCARmjm68vD4Spz8JWb8TyraYW9vWFjr6UzGFTpLajY4x8GWtuNzbzcFGwgXZYVUTpx",
  "key29": "26dHPu6bE532dPhPrC8NixPEHKvzUfYyVarexCxio6g82r1gS8N2MDQ1ufhjow2vC2gAorhtrZqZuVhuqm2CXEQ8",
  "key30": "2jBWvRYUqqfQgnbWYL2b4kjDjeAvpYmSaa2Czd8yuDRQzjwa8mGLm1WkUKbrWJ3MqEsaDcoH9Ypyru1Ab811FZMe",
  "key31": "TYBKZA6tdDya3Wz7t9pyWKCfQDc9Ppj2b3ymyPfy9rN2PAU2nCcBMLKkmiv4fH9Kj7QZC9Z5gZ4SppEyxrshWyc"
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
