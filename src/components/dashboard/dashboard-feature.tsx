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
    "46LHJbAd4yeXqkNPobae8qiJs4kqvPSuXBdjp7bCFCnMSzqzLmFCcLbveVSLzoSEBfvvJojStka6uUm1LSYqJVci"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LdoPsSetEbTuaCBfV2rjbTKM3Dba4m8vPuJR4McCtx8VokSHrATmkeHvyuXRFzFK3DapgmcEaMuSQASHq3u8NBw",
  "key1": "5vc3aNCVBaDeDRwzFATThcfQWyswGq8Tn8qGFcDN295ZdLEoC49QBcoSXQnkXRjKAFGudyhfvDqAJB9ChbrQjNVP",
  "key2": "3MhVdr4VuwFrNw67aCLPBqcUszKq7BowD4csdDagp1sRtNcUz6uSaHAyTVfvUWmSF1bMJTQnsHe8dkceVKFjh2Tf",
  "key3": "3mz3FZYFi5skCrTGRReHnTXcicXzsJaJZDigicX3gAd5ySKd7FBxLgHRXovxHSBMbFJhSWXVuis9jhN4MfzkKdEd",
  "key4": "Rbix8zKAJ8eLw7EZg8sABWqMLZp8xoF4oS4YA8U2TnhSHCNSs9fefTtpDQf718qvGmboMAnzSdjiPRcN5mDPijR",
  "key5": "5gyrioiY2jYegE1nivVhzwgnefV89cX3a5FtoxawTwZLwCq5NkZFXJ2wYfTgWVeieqc1FS7b1BXuV7GTKKuq97k3",
  "key6": "5TNZNQrNQDWppYjUCBAXfMdpexQPgFkoaM4tRyom64v3aHXpK8EwNpSSmAkTa1vWgJoJ5SPBsV32VzijyAdPYbZt",
  "key7": "4jdyk7vJvb9uTMG9R9JhmgWnmJTv4oQnegN6rR56k7DKDJr2c6vWRf26Fi589xHCihGLtBGGhWFD4Eb1MYb5oCCV",
  "key8": "zQvhW6QGwfyKEnMUGe6sPN8tqqMrR6Ye2Xjz6BdT1GCJNhNFUdh8ukcxuYfDAaMtABDf9fs88iv4mM7GEpQWkqA",
  "key9": "BbMgkXcyJEnpybdL2Hn3vLvNj4V3qCtF6Lzji5Lu4V1N92JLzQNSNnKCfJ1S9qr2roQT9ddmbiMtPjM9uob5175",
  "key10": "pMBFG1eo8PaBUNLiPDNHzieEJeqDv4egVMoJZgDUYUWyunkkmKZJdn3Y4bfKVrMoJS8Fu5KgbehbXzampRJNmWi",
  "key11": "2qNmhhXDEPtUHvx62FoPEULtegtKGbLnWeob8yzESdEJ55wg5oUnyc4qjFknZJH5RZSxQxxcwQ7CewCk3HXuXh3d",
  "key12": "122Uup9mJQWPC1SEirNTnWzkecBY3DzZBzwrHXT18fLugxCEu6ksZSQsVJm4m3QHALXUAWhtBAzp5LCLegiWGxNd",
  "key13": "3fEnx1VjEx7nm3YdpcVTMESDqDrBqrToheF7DMTqL3evfRxViWFHA7URCy9iZ2QyvapXAbL6CyzfarctHmPLx3DC",
  "key14": "5fHRkAzr5S86VJVEVQtTUBw3SQzayaMMCeaPvfGjCBtYLGSos9omNgh5tCKHhUV1JdhFdft2NJUMJ3TJ2oUjoueC",
  "key15": "So42oqCktEoDHJogvQ75bu7VUywoDbXrwrVQuDEcP9K1vHFWrwntRsqutS2vbLKKto6ucPtVDQXKGVhVaPuBoFw",
  "key16": "3P3JSQ8FyVyMTrBEJn4fKF8qPGhUf591zZG7whTZ82Dxp2WRJZWZs5mAfRXxbBizoMjztW1aBxCDm4XvQJRfgrJP",
  "key17": "3QJAL3qZkpMU8kx1wLNJcNYqguJ75BZi7YnkPEuUHjJ26yCwzvWsa29xm53YFdtE5nfFtWdBPKFBwxp43nKWpHg7",
  "key18": "5T8hLAMkFrfZLP4M1KN1vtZ8oAKyZQFQ3YsT7qDjgRVRyhrDAXHBVZrqjH22zj1Wsdzc16asgxUU8TtyyH3hvVHY",
  "key19": "5Tf9vFULUJnRisT622o53khbr15Z1Wdupgy8eMAuk2T8dEqDpvSqgZGoigS74cHUBy3B2XLscbgX6JRTdejknx9P",
  "key20": "5VY1WBzEEvAGbJWSrMtvdJRUUwP5hF3mG1cP92zhosS3weDo5BFfzGM1Az1MBNbycdZW3ZLMDTRzF87Rn9Gc7tiz",
  "key21": "4juoMy3RragogCtuGazBNGnkoFwVhkhdyLFrSg7pVPxC9PM5bLwiZWZM6ryYZKVUk59aNVNQRkUEwYGJwoUJh7J2",
  "key22": "2xhgvvfbTeWBFEM2dp9wFe7vuXRtLL2pFLgHGCtBGVCemb7uf4qVEggbKNALUAnmMVy21HbuTYKCyS2K8mT6P2id",
  "key23": "3vs39unMtG5qP5Wyku4K5PzJHKwqDxgamcHXcwWWSNEHjSuM5YiTHui2LEoFP8R7XAquwC9RTq63jagXK8WXiNCW",
  "key24": "45TNbtAdj9SrVi4crbvz4cUi1DQzT3H9cC3urQYRhq9i2QNKmhDAyiLp99eNak4Pmkfh4w1J3BcD6ZAJS99FGs55",
  "key25": "49qTDiMkVby48X9BffwdPphDheF98Peqaue3Q8KYCQrUncUbWGWRXnnYPXt4GS7qadax3WwiwzjtK2WYseRWdbFr",
  "key26": "2JLGrTWT61H7wgBoierAeiRrCF9rzAQCbeRxMbg7383Tx9T5QzZPjv5y5EThbTxC3zG4GDaBbhR3DmYoZxzkdvKe",
  "key27": "2sP2DvPUk5sGv98vWJXJmL7Q3zzDa8nDG3BbrvPGMFrgzNJGM3fRoPEGMwgVQtCTfNC3H3vH2yfqq1F29F6Zcizo",
  "key28": "AB5NqRVJ4MW2rrLSfFaHK5S7BYZ2ENAoicwE3uG7UhSV4U8ss83tiSmQi3CFBoqJ1BN158weFRKMg65mr5YSqJt",
  "key29": "3KV6TSefMRwKRxBz8Si6XrAh4N2igRxQdkhYeapVwPJjfeU2d4PB2q4KvNVamUaxcbZJX6p75x2UVV22qLcNAWiw",
  "key30": "55WJ58k7hn7wG9uP9yLfTwM6iBPX8NetZue5aEbLtS2bWAipLXYaWgxnJcGubuArNLmgQQNHCwqnL8KPvca6D4wx"
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
