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
    "4T7vy59qcFdYEpqJoqZ5JpKuf5Fjetrv9erg3BYpnC3TUStB4iPtVKQ298KW4F24vWSRMxgGpL796ry5Z1PJNagD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2PYKSN9JqYKKiHhukwjwAo9giuLB2az3bVey8mb2wP7Res7hX3rRFpwhcvAvWtnbesSYaTiY6X2LY6EmHSnwm78U",
  "key1": "4nCET3bXZufnU9dKNLnJ6STAo2HXsDmbgYQMXnuk3GC9mMXVLrwouxYb5Ff5t8uXuMQoWJ4RsuAve9uVuoSuTdJg",
  "key2": "2SmU5MWKMYn3tUZmFJm2YVR2S6ZPDeq2zMJgkWq9eqHjuyNBph7ddZvZg9cTgBRrjpb3pEGkSmR77iymJRZdgRdL",
  "key3": "5MXc269oSoVA5drsCa6PzVrXp5ko4NWuvWUhLsnMP2YZYeQ6evbZcpRnHMbBDoepPWTRtCWx6YKz23gsv8JPvMDX",
  "key4": "6B5cgVRfcTA6ASSCire8MdgLYHMtWpv25AAiMRktys7cpF11P2HAxu6bt7kQ7WUdL97QbFCDBdHngHWRhPX1xzY",
  "key5": "4FyuAM9h2T2VwWyf9t5jZWSffHDK3PL4Qc32VdMKcpHEw6bFvjMew8QQBcWpBoaShuPPHGEUh7SzifAyb2dq5oRx",
  "key6": "5SciKHofR6vTTaxHnga9oSve3u4SGSrzxxYSBBvhukqmx7BJQZw48wLP5c6VoCCc1BYPFnG6zhjZBVFAbwHZ58tx",
  "key7": "5cd6YtjLRHZUaCEbDsD9GXKRG1C75h9P436TEuBPuUctreMfXxt8F6nkWD4saJ1o52wez9iMyzncx77kKpPrqUGi",
  "key8": "V4oexze2ofyYBtepF9rrVyM9X9AsJvk1t2yA7erhBfaw8BxQX4Gr31WYryPE71yzcJZj7QT6NX3V1A6tTgnBc34",
  "key9": "5mNwntYqSkHpfGaiUgvGt6WX7g4zLb1z1vN2kboCzkRCk5QhuSYkDCo4Zy8rTPJdfTySFax6TPtFkySs5GEkn4jC",
  "key10": "3XdrEc8qbPaDEfPX8op3CApQxGZYLuR2kAKPV5eKfxu9KU6U6pisxgeT1iVcwsj1DpReEZG4cCSfFm2Kfq7Y4DV7",
  "key11": "43ypGUrtqFPU5rHU9RnSXUGxwTPMJxpAYnAjovoqWcTdyeQe8fYczCU6KcmYNX9a6xPGwGBsZ9KhyjD5uSDDs7gH",
  "key12": "3x4y6uS9Vi6Vf4QsDHY3qZLorjrmZcHeFwQ9dFSEde2P5E59Yae6C9op4qKE782pUTDnD7hQHa2T7hLXXRRmjegt",
  "key13": "36xv7raS8d8X9m2Gm1sjrkfo3tqpzVXWJLvViqGEL16gb6nHahek88gUVFq2pyshEj8hWXbgmA7adEhgLnKxsmaT",
  "key14": "4dbFmSwdw4sNFUCbpCjEKWAD6KAVkKdhtYznQye5vP6cQC7BaxouFPSF3pLCPD5Q14kzSsqG9DEWAps8aitxEdi3",
  "key15": "5T5WvvHCwDhZp5UQfzZYaALeWg3FrkrFHp19ZAVaJJWiGhz71Uu7BSLAtRTMnHv4eSELhTJ47ZSKn281LCUyqXwG",
  "key16": "3qzGMuyydL8qfPecALYKo9adFyHdpvQ9aCMwQtrB6p1a8DLjHuDxnWtLyTXHG3ywEE5xb6gxHAWzx5rHLvWRcAmE",
  "key17": "2ui5YZt7VYDbrkrPeQf85dveKpWZWTiFHC46wQzHUHXqEhmB2R25U3Z2HBbg8Mq7PDkUFpvF87FUTuZ7SiTKmBgp",
  "key18": "4eC3uqAdq2dp2PEvf2BY6Y1HadhQqGuk34G5xbjKVxdrDqcNmt2Bt8dqVV2mtv2rfncgzgonyHofTpT7RepPAupF",
  "key19": "3Y8QBrTFsWTmkPM3kPf4DpT3PkJPTeMao4Jd2fARQagGKdNvkqy9H8PAX43hbHv1QSXRfNm77jiAnYUmrCk586YP",
  "key20": "5PzyxUbLzSzXeoJLRn2a2H9yiFX9J4q9CTx67krgcYkccdQeZUqz84u5QPfVVX8EW5inyasjH6ggyHoyeL3Tek6p",
  "key21": "5QdTSAKw1vNPLAciKsjSCw75oVGvw9QNaVY2MSL2e2UE7Md2uymTGptadQGyfrH93MfHwTFMxe4E6WCFCnjSv5tt",
  "key22": "xH3HSjNDCCiKm3yewP2bydd3q6X56vExtho1uGB49Gn95tCNEaJ2wXToytg6dRWATe1TLU9ok4eoDRHauyAuLak",
  "key23": "41rrjbMgiwKQc3zc2rQWQE4tCj9NWwTNxmc9iKa3KFDToaa5iLrTx3M8nooUxzmnPaZA3EXZ8HS6JqMPu1gy7bSF",
  "key24": "4dnvwJSNgEoU8GA9w39e5TqdR9MBcixC5TqsCFLaUiCp4R8eF4195nM8kzVWhryfdfQmSwM3v8UHfFERzmkeDhX5",
  "key25": "2AHzet5TmfXHiC9vgXy2gdAY9R3b4eSfx3yxTZZwkPHDPt4u7nyxNErF9Fn9eq8dbBGVEK54UMWUvPbnx58duHve",
  "key26": "5DcL29E5u9E8vVuhieinQCT9r653ijYjgG1mrTv3x8ZTHNCSxa6dLYg8TrTGiAfjF9DdwBuSb4j6a3n662pFZ7We",
  "key27": "3gZMVfWb8Aew2aawfJXYcFiosiscGx825Ppp4qWm21Q92rhipNCE832nmSAPkVjeLfBqbKVNj3qwo1fJBGkKdf18",
  "key28": "28WF8gZD42Lvu7bTWmJJ1fGb7JtsH4Ep8kD9VcsCygoE84eTGxAdv4WUVs3VmnGcEZBn5SWdANDvrfDGyeBvU786",
  "key29": "5tHhgWzCYwqmaif4a87KuiwV8PGVbVFSNesY4QVXjFoyrxbByrxyEFAoTGDYBaDq4xnH7Q8aX9KBh6SFWFjchMFy"
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
