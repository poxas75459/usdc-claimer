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
    "4zajj7voxF7PfcDqE92CqxXnw3gza74ghXiWBNSxmX6gY2SKA9aeVaHeY8aJhRfbnL8skBFXQVAbsfqPanYbeCZS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sNwFoGPx9bYXrKRjFZb6NuPnx2BGk4Uf5ZPdfUwmxgG3eVuX8UmiaMdPnnZuiioeJtRrE5kCaGEc8WyjqGGQ47F",
  "key1": "2HM3S5aBRHYgYQgTL9TFuAw9ZUiByymKvqMTDHTDhrr9ziTxn8KdfGP271PBY3C6M63dFNKNr8VYLcv1onq1c1FP",
  "key2": "2VqRhYS7T1tyM5S7CD7U1Zb3fHZABXN5uBMrRohjSLB5pPJGhEEU9WffMRzQCsLnsvYbPxzJ1RaZQEs4fTXJsq1M",
  "key3": "3zaFPsdAT6YgPnoUzJc6LqpGr2hsyHkBcrN4BB76qFxPVcPe4Bb2Ecx1iiH13opEVHCWHNJm6deQ8GxjUxkhbSqu",
  "key4": "2PdF62k1ageKCsuymJpCiwizf6cjcLX9b9HPvwidZUyQXGhrrs2Unfb83x98vMkyfABnzt26nSFzSseuJbr1Q38x",
  "key5": "4KScxowWgcHDCu3FQzBjWn9mPFBqdUX6nv2HJy1X9AyetafStdunYxfTSEeXEyQDzWHeisLgzbH3uMF8LnCzdu3N",
  "key6": "55E124ta642fxCE2GMvUjHMfPhN6yLyj5fhAtLAwvzBWF2fVTHtj4FhVKoy7csFbcMQC8oH4PZNnVkvUyeDmW3Hr",
  "key7": "47jECV5fU3h39uaeGc2SzVpsMdMh7RToJwVT81Sx3d3Y2njnMA3XmMVDFzVoaXzttbkwvwqaCifjPDeaP39Rod2n",
  "key8": "3i2Laoy58jixQ17Q423gy4pasbK1o82GGSnjDqXTzYjt1KcrdLR1ueys1QBvWKo9hsBzE25NrEmyZz9ZTcXjAeAr",
  "key9": "4TWRFuTFtw76xCUhczjVJRCcktZF8QDKvgNj5wvMLZ4aXQyZvavmtrJ9b56YBGNYoXSeRp5uARSksxzEcwTH7Vzg",
  "key10": "4nCNJUnjtdtBkrqs5jGqemhcLRXxXQ1rLY8UqM2MzxRafVsTyT9bTCWZytGf6QEh62YxBZAU3VEmMfUuRpFF2Nkt",
  "key11": "4XtUsr688z155idA4Yg3vx3CFGPURV8q4uyRuRLMTk3ukt826Mv9ecifDaeM8indGtLRxV8xVSnWFLa962eXJs23",
  "key12": "2JbchFPhLm1BWSnPK6DSXDcAi8XHFExb3z2GptRdPSvzvFUtBYNGghcK38kYLPKHRZztWpTPVPdG58yVzzvk5Z9c",
  "key13": "5F9NsvpHekyaZds6qzexi1Xp2Rt9kd2hnfkdeV9fEN4mvzqyt1ksWXiBUS4SwLjTdCfWBJPsy47xpqwGsNGmuybY",
  "key14": "HEcnyJp3DYz8Aq6BiPSW6kX4kW3XgFZ5aapBPPzj89Z2v44pTKjx3no6jfeQP4bnt9NBLAhzNbPjVTswmSn6sqG",
  "key15": "4N96JfkHAGC3GwwkeqStTojmNQjXdXaa32Y2sdiKwLY96rYVS6nz6nxzfbMv9AkjPQ7GtyHosMdVbEAjapAzABJK",
  "key16": "5H4hh6861q9h512R8V3X7sgsgSDMKPB4JBcfV3w4g3xmHYSRGpE5xDvjFyTLDgRxjKvvKHVME6jdNE7bTgcaff8M",
  "key17": "4Zbx96ywT5CHjF3uRqyB6g7cvKh3A7CT4bmGo7Z55CDT8gkASWjHruWpyCtJgfmJpRVGLeN6jUZs9pCYMQejDo8H",
  "key18": "3rUu44jwQnb2fYRsP41dRNAmkV4sPxWwjM1MJzwKbwvep92q8qkxum6ps9heimKDu52QsNucgTJVtGUNtAeYcSrG",
  "key19": "4vn1h5NqPKSnX5NgrrXPeGzikRfMta3EZgzKrJQ4P1W5BoBKPfrT7LLLDfU7pxUuFE1oosXfq5taPxiC5DxPcgLo",
  "key20": "51ZEH6KXSn4yDKnnjBxrQYuuSbxPWtNmDW7QzM1asKpBEntiQsjXFRSFTDAnL5r5PYpkJREhmrqf28AQAH3E5osZ",
  "key21": "Qp4ySTFoCPMtwvTfkSg7FdrsGFVHUdT4SHkyNNTFhe1eY8etZpajbWJKzqTZ8sBivpc3Gs5iTK35HvDYnWKRn7W",
  "key22": "3b69WvCWfiraC7udJwdNttCgbGEPrZRUMrG6ddxxiJ28qrjGLUyhJvxe1FYeuY6EZZirmH6b1wDohBimVB1UjwGz",
  "key23": "5F73x4gX2Ef7JZRj7NVxukbSSsRvmkW5gVb49xP2a1Rn5vJT3GpoeYcgDS81dmwMg252CC3XfXWtpAp8aZ7zs2H9",
  "key24": "5cachBKzkZcK3Z24bxpbN9e8ThVSGZV1WcazSefZwsCPCi2CiHkcR2ATyskqJA7Pdti9RegqAbxfbLW5usPniKZh",
  "key25": "389UxcspDXmQsKxkuhUsHbhsgNkyHYXU3TrQAcoxf8FNhbWyXDWpCASXRkoiqCjPDjdpSxM67utEr3QsQVGs4cx1",
  "key26": "3pzF2RUKwi52L61Z5KX6tJFXwUrkSk3CPBLecdtXM4YMSCv365StCUw5BHyLMiUDpXmr2AfQGao2DLRAi7z1xidj",
  "key27": "Nx2xn9bmBoyTnZXMUGskgczM6yUcgtXwHNdp5WnpeU7RMvaHxz9prqjZ7HXeMstPdVWRoA2smoeJPXA9bw9hTz2",
  "key28": "47TJU8FFXSFGZ3n8opV5kWuG1eQ7YK8kE4NYPwc47N3MZfUGT4gmpYf3pqsg7e2L2euLKfBX8ugN7BADhk69E3G8",
  "key29": "2jdQaqoqHYMFF3TAsdMaL8SUFkY5cyxGaVqtR99nkGgc2VZZScA2F8NA1nMWGjRXHT1uMQ53awZ3hug7Qyw7VuYg",
  "key30": "2zSenMpERwPJMtNeULE9HLgKHZcXugoCix44GXGf3GNn1fXjMG2zMHifvqVdBwamTSUoiwmpJx2PQg2qmnafaSz6",
  "key31": "3Kj9nSYycepjYoD2ap3ZjobFKtGFzNCsVrwz9mb8ftgU73jHxGrdNSByibvbcXncSkvoh29zMsgFUzvnmCByxV5D",
  "key32": "4rvBysfrNpGnHH5SX15QwT1VoaDgaeJ3PCCXQfZthSfkY45CyPViqYc7Z7KbZVpfsRN2RM6p8yhtf85skWdp3m1j",
  "key33": "q4aGMzyf4hRkmaaWmgnnnVnjw9tXf3bsMPeDTEPaJTJky4FDMPtkAyXhPTUSFyLnP6h1FNmNhANCmFyhdtkRjWm"
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
