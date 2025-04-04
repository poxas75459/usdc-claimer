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
    "jSRcabNgbnyNsbKLNrUznjo69LPEJsuD2Dx8zsR249kMaWJU3KhPLSVvBQBcLEVKz9nsvR7KBAibgjX8VqdcNcd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "31m22mmaGEvnxMPXFAvUgQtWekA1MSLcTHFudN2FsVvvAz1Eg3zz2q6pv9bZEhRxGCBnat4jforwUuh5Sy6xVEXM",
  "key1": "2HDv6XYkebSB1xPYnEz3tTbwpZNtpAuasNV6bAJ1wDi7g2qzBWh47v5wtSLzxeBjyKXBCRqyXf8LiNJcg4XPzZB7",
  "key2": "VDPm3WqVHEXr5wLgxyK68JqCibArWqHpSUw18D54tEPfxd5hFzptbhHapS3GkyHNX1b5nrD518U1P4HTNa2mm7L",
  "key3": "2X5uXHLeHLmYY8WNo3Qy2kLc69f6nkTFFLofiyZDGPUnx9aK7MUwq61pwiQu4eqmMV63BEJcqvkpiwvmuHgD7wyk",
  "key4": "5j2apCkp1zdYv4K4AjWczzLsnWRVjUCJLaaYDP9QYyrwF4H7HSYs1TDJf25eBtYXyjgxd3SXffWJ9KdeGkJ34Gq4",
  "key5": "3rUT16jETc6WbHXeEpEmnYhUWMV6gKcgRVMHDuVT51KQimKfMkYfh7GpwFv6LcKTSGbRZmVan521hRdhbEaQVhne",
  "key6": "5K5G2wMhtXdqMYj92NPDetAQkjxy7SiZWGng2gDzWqEhvRtRGG2jDqjZdxnNSX3MjBRrtXAn6LN1DSZAaDoyyGpH",
  "key7": "4bLgMh855eQ8nUqJACS1tWW4TeESTJ4dZfaQkdojdPMSgS2Hf76C7Ev7hCbgQDp4iwpCtZVC8gXC4dFts2LgaMiP",
  "key8": "43m9G837okTt2ertvZ7Qby9hVLRBvAS8LePnGCAnCSGuPHkCPDe14wBaYYPsHh8y6oqZwqGrmqGVBVXz8syDwvNy",
  "key9": "4S4TnxGcVRkUxMewWEAP59pZqVTkAARkuKhY5nNBMr1JZJzDJNtER42LwCingBAwK6DiZdXBxhjmx1PmRjt3nutw",
  "key10": "4bQbG2CnvVPRBgpSDSVxTKHMmPg2Ejg3iUSa318HRmKibwbwUf2h7XaQsg79NGc8wYPNyPYychSrCRtuemgZkUwf",
  "key11": "67dtTTzjN1gjNiyXv5TKtaipNCBoAbHf9iJae5XSCR545Vcyfjb5YoWWb4dUpVKSiJFjVPgujuedEwtHbW5n4H1v",
  "key12": "4QtVM3MhLWnhgp5qaZLwBgH7ym7YVycqtAyFZNrSrVX4ceuzkGPe3Mzk4ydnyMtWNPuXPgoSKExJMtHMEvWiRjGt",
  "key13": "4JQ4igPARCy2fm4Nq1FTmALMctmsKLxpCafxrqDchmEfadJZyr7VCLj1JAri6Gtv3aKcbkJDWPjX5UWheEcDC3SG",
  "key14": "4tLRygbrurQYdiqwh7iM73dXgfcXjwuyiE7W5w2aHNyKBgskkGAVo9oMVWdn67ThGRHqNe8cRDCUa1mazUK9pb3S",
  "key15": "3YjcRe4yVHQ4pgS8dmTrEMmgbecyoVQv9hZdR15aHAiCdsWWqLMas2fPks8ngpchSKa2Lefop1TJunrjcZqAi4pZ",
  "key16": "3SS54chGzkk2jVDWX4fu2kiRieLreFaN1xxSniuigxZfRtmcBS8z6oneXVNabTtPkvDSkTf2qdeex3Tf1Yn5wwwR",
  "key17": "3wYQre7komJsqt5jdtkA3vFT9FWHijazWrs8kzFEt5wtX5vaSKzmY1C3DTdXTtKbmPHammPVNHdhrkRKsUznQfJk",
  "key18": "5GptMHB8ctLuivLJuUxPjXLvkMp7TB9u5KrGD3sVzmqLC9AGbzrpgjLPFsvhREYGi7gHEeztT5w9fMCqRYFNmuso",
  "key19": "44baogFpjQbNTYXat8AuLMwiJV4RxTgync9uyi9mkp4eiKuuP1q6CGuFbcapVi811RVGtwjofsEr4VZ37NGhxLpg",
  "key20": "4r48a4eyQrFtm4rGXcG969zMvnbhSxCkVk9hdLwSAhSuH5ev81tS6XU9KKASpSGH1sE9zTNmQtcEew873kSejxnB",
  "key21": "TXnBG67FQyX42UXR1zqGS3doRfYHQXCMtMX6cJ78b3mNWyox2VvFbbaswi2BJJ7jrrZhvU1gLsNiDF66aKo6PCY",
  "key22": "3tb7aVDZdjnW8Bi2uPYr9QEkoiWxAAy12Me51zjzc5d35iENbvSnqHwXivbT4V2KwJAfc7wWdiGpiggXMrSLNDYQ",
  "key23": "BTkGYcKpnfDLsMCvXnCeQsD87CCqFUGPMUjJerEjQYt9d2tXHAJ3MqUpWrV6RrYniLQB6VFDFA5fTCKYLFKzCE5",
  "key24": "5beduLmA5W5NPTRC8jBstyeboioAAkwuu7eMk2TwHwVEk2xp8azzkT228gGN62YHx9zektJmyXdMC1BFFurtdLGa",
  "key25": "2xa583S1b9EXZ8MAqN7hVSVw12drgntQ1mb2CEEWPdKb9cvtrih68G4RV4CUwiY1gRAXfmVj7aGRc499GZ3eCeWL",
  "key26": "2b1ojYFCidq1fbK87nVpSBHP7CHgow9izwn4hmWWj5MoQacb8LxW1JdE6MSWQ8ZYt7zhfPy78BnLxYGfkHnxEsCW",
  "key27": "5NiX62Fu2iVRb6QEajq6BCRhgPZW25fXo3tVmF1TgU7BwqkiHuNuha8v941D1icNmskjTaonLv2TLtw3vyAoXupC",
  "key28": "nrhdp6ixhx3wQwoDGpbw8c6jNsQx9YxkNCekVvuHCm9cuNP3D9VtLHJdhCR7uKnzY2TYdp6HnViyijScZreM1a7"
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
