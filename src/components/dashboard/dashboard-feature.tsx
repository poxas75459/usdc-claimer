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
    "2Aqwz3ToG7codu4oEfP1yewbLFfvvbyXipkGacE4xpfcyUTFbAqHGnu5QQWch6e1Yxq5RBGe7JwD6WQZ7kUTvNB4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6f2BeM3L9gYKjQ3YGJgydjUdXyH25RWC9sGyLty45RKrH8SwrCkyXXHmrjtXNmhNfUPxCHezVDzM4oasfKS9QGF",
  "key1": "2t71YaMiLUyo5kRcEHBoG4SWd889TYYGCduEEqVgehNrzbngzB6cyixskKbF7ka71GMN7sgsEonqAdnbzNpmgAKY",
  "key2": "5NntPme9PpkkaenDNzTwWrv3RmS4ZmY6VVCHbRXALYsckgpZUPLjsf5E7Rs9YwYn9Tqy8kqmoNjnWK8xY1PSANyS",
  "key3": "9dvFiA7S9WgP9nwzgZ49hiKAnRSxqf3V7zLmHbq4A9horhd3tBNNaWq2cd51TpqPyDCr7h6vT299vGB3Dh1VdX5",
  "key4": "58EULTaSAjaKxoTUpti4XQCnXZRokaNtugFG7ZTY6TFxhH7fk1Lzrs354X1rA8rdxqr1madbCP4pSA3kTDgRPL6R",
  "key5": "2hCfEM4zVSXBs6KXbvqvubv1KcGTww3nDSi7UwNwXFjNpYULsRjeh5uSjNgYEEc6p3xGnxmweUdpW67R4aNvzHiv",
  "key6": "4nM5DZU1yuWwHUx1rZDPSCYghEyVPeGwi8jdWTLh9KQNm6H7bUHdffHLN9XH5fJQGzefHQtuSeWCt8KMLmei2Piv",
  "key7": "mS8iwSBboHwZKaASkazQWnKx2bcSciSwMRWdBDdiqobkRr36zjqR1qTivE3m8cKJeXsWUnHcPf9ysuTc6WcfjUp",
  "key8": "2LScLFAJDFiMsZBNjSfD6gjURa5GEo9jfwFMow8HL3PAuedFFw1efUKQ8B6bpNb1xKZr2gHeTPnAWdZ25BFE8oRj",
  "key9": "47unaGEb6HkgsskwjWPT6AGxLThTfyYRJRZe36mNTqkiCUYUuwTWJBcJJgEaNPtvZPvSkFhCXkpuFfHcGYsNUm9M",
  "key10": "4qLLutJSG44PAHVn6nNBv9MNwZAtE38hboG8XNPD73Qjshz8zwRxaQGzr7ETgNmwjm5uo4VoUAgkzpUbthVQ8vSQ",
  "key11": "5P6vPmf7ce5THfSqPWNDqpksfrASrMw7mEqY24t3ZiEqo37ztf9Y9FmJiDNEuXbxKfpGo38jG9uZdpPKScckavbz",
  "key12": "4vTf4iUYnsxwmmVcdVX7LMygKtX4ESPeudtFaH31Q5AyAubGw8HeKmPpLroCU4A1bXPbVkLSQHR5oWDcD4y9fP9T",
  "key13": "66NxkqA5Twrz5v3xa64sDiqkL3z6osnjTRvm7GR27j7NCyRn85XJGqFTErw91cXPMDS5DQSkL8i3iH2LasXbgqfA",
  "key14": "4wCFawcFcHLC1hoMP9aepLkTneW1iNtDsSkh49KuHvXrF8XSebYsDf3fmhuAftLx9w7zg7aFdXeC9StV1Bicf37f",
  "key15": "4hWoYFASDA3XqifVScp4NdeHXVi65oWZnp7ev2vdhQ76RVvaRm5PEyjpDwRaYTNLUJs4sT4WUPm4DG5RdC5r5GXH",
  "key16": "UuKvDZM3YfFkDvZh7hxv4eQhFxexPCHDsS7edESoPFPuGRJxuej5Dezj2cz5gKMNKhSLF3vgMWRKMi1f8F68Cu7",
  "key17": "3KC6GfnETMQ9mWFaakxCbYkEubk6fFfq5YCK32TbMnLrnygC3bb7vJ63z5Pg53eAiteAq4xiRfBTBTbgZHrZwAR6",
  "key18": "479kXrxmPWv33eZKmTUtVmmHkS1AhzwLN7bKBGshqCAYuvCtvzRDQHDJbgBHAZddXu65XRVXca1NFJgBLurB16Zh",
  "key19": "2WbL5yWS9sNTugr3HXkghhb6PpXeytA3ZMEuc7kdjwYqa1tCQMVyDPUcGLmGAb43oQapFAVicwkKGJBmJXzQoSSS",
  "key20": "31X4PDyP88KVjzko35NVpd1DFHLWHn6H5bQjD7eWSTMS1NVod5DrAoDEJjuMywur1bd9Q5dwmbZiNcawYXtZzFyY",
  "key21": "48p623SRdhvzmFvZuNBUiwjqf726QGmTTu85vtc1S9U7yVBsNrGrWKgMmQturkVsKkywcf3kCkpTnfsmXE7g2DQ",
  "key22": "3TittCXoxpwcbaTyg3ipNRzdrsYyGy2evYap8iCTt9xPZTVgXQhYQBvwwwSy1Ych3CkaRpyW2mwr7SqfjU3goF9v",
  "key23": "5YVFAcyUHRjSnXDoXSiWkWbs7VggQfSXQyvnMBN9zVzZ1BRTAkVaky2QdVW9oE8tbAZ8HxLMb8w2SDrzA8HMK97T",
  "key24": "4ofWmht3w4fVf9F1P1Jn36v58nHJAcKda1DHBHjapZN67SMKSrnfHowgk5skKNvLymVcPw7QVnqUrHfrcm5crpQi",
  "key25": "dZPDWVzR6BwLP9pjDncfyj6AfZJETMzzQZqMEZ8Rc2p2YRcriUgHozErYXMx7oaHBmeX5yikFGDgpF75opmauUL",
  "key26": "5swjEeJcfpDhpVcckYUK6BRXcG4rGY2TJYAYonL12AsHrVhPKWcjhxhxoGcUhQcCDsc12emfCLVr8WhNB4ducW7u",
  "key27": "2PFBvRgQ475RG7Lv4puUCtRzK5wBi6i7NrjkoonjgnErnMxq5YMGTidibQjugCVzBWicvJj8ioCSU9sb1nvh5oPE",
  "key28": "2WssvUzJxTM6Cn7DMt6h2sMJQbX7Fv8ea6ihuzCU5QGCM3rFeyChUWPbFcPUuoAf8ZPUkjjYWAMUYN1QgisnD2aQ",
  "key29": "kiJ3KGB9Zh2sWCFu4dVmg8M41uMdKroFR6nuNxcefhTKf3Vca88kvidyd6Z4Cjk4PwNHu592e5B3edyyjtyK3Cz",
  "key30": "5EJDSjQ61j7aP48oRUPqqTqifrHSrUpBRtdvz8kh7xbr8AdKTh9o51eZxVHdYyEHt3Mw2s33zT7kNfb5goTomwcs",
  "key31": "2hU27M4eDN2A4uR2DpWAGxD4LrhzYyDqaiSD8TuFjqpKjCasPL94tg81Dy5JXy9tVVFLqtin2DCtuBos44JDr3RP",
  "key32": "2cnQwx6xaKrV5AKSRZVCH5eKnBqZckPzTK3YtVwT7vzLymX4hYqr9K21ZWCyAZ6SK12B8NxTJHiT6sGqAn91TzXN",
  "key33": "4KMVQhP4huWnmLJGsQVym6r9F4MB9emUnZ4htgdtDNAu33suG2w9Jg9kekFr9GECcnkCAHmKC3PmPKNC6iNg4VhH",
  "key34": "3n7fCfR9AgDbuk9FwxDM7x3qrti6aiaeU8xkoDiNEoVt5AXeAJK7PHs6A1cpBmP47MhDFCRsdqyAcFXFCZ3Mv2S",
  "key35": "5j4stpTkRYtLqXVwRZnha4ZZtttc7x9G8EXmrY5Zgs82DCJR2U9MpWZaVVLjS8wqLGyRDbEzrppQKQq7o5mdbDCB",
  "key36": "5y8kCSbjMJ5yM41j4aJ3wkykTmair4FJWHCy6gNXNTVHN9a34GQ62zkPU5RsVZ4ftpajA7PvKX8UCvkkM8g7LphZ",
  "key37": "48qWsqL53FG7vrReH6s8hNBmcwvQEZUiJuNESQC1PcPaseqeT6CNMNTN6EKK2abDj6UGdT8vUjouUnpH3rWKgZnh",
  "key38": "Y6R8efBqeFB1DmscckHLyqEHthFrNg8qHjvS5GVzq1rYS51H8hxUZuqK82o35R6ti2HKDs8DwPjLp9P84Q29Mrw",
  "key39": "65zBfbbbuYGMYxVVuWf8caNAJ6h6o3ZuvbW4UoXZ7xcyooU8oyXxKewAKb2yFsqP81NdsMVz3hkWe6TXi8sJ5zNd",
  "key40": "4DzzLtafqGWJ1ottwJSUfP3v5D33STaoFiNcDCggSnvqsGQpVWg3j45uB9AqTFZ8GxKc6eqbCnADjt96ZnsLYGyg",
  "key41": "4ocCDko9tg7kX9HcjQqQ6LbwaKcbK5KdyYJBzpXjU4kB2kcC8KQqzv6jVBHRVfNqpAhXRTUK6ydpK7xcRwHTXwmA",
  "key42": "3sGCfoAjGFevAv8s2znURtWEL2vzis4qFnMNieZn5ng5RbktcPQYn6mvMhrr9e7Vvzz8uX1LCnMiVNETp7WtpSsc",
  "key43": "2WG735itkuB1DascEAqXSagTW1JavDtyRZopFQd8csLvs6mwdqpX1BZmZruUmwkXgkz8jiDdKpydpzA74GvDyDDK",
  "key44": "nvK8fTnAhHPxS6ZfnYjTQr4FeCc2CzkRcggW8GUT7L39ErLK1HpcC8QcyttFmBkcQ56p9UvKzuxW8pmCqEZ3CMV",
  "key45": "3eBLLHRLvQVH1DZ4MaX8LN6DS1hHPmTkee3EyhqdvWNkotytshfHcjiaGmNUkKwPFsU79vk7o224mnE9X7cC8FvV",
  "key46": "3m63c6b9k87BDMKkdWuUT8W4cmJQaPiorEJfU2QRbfTMHi3n2d2VngvwXgkfJAdwpoXaXk7pBGizBfb8Hbcauk4V",
  "key47": "4ZfXPEzFfpN5spZbMVKWkqE9nsb2xRPVfDJNht6Q32TsT9wwZ9yrcM8w5v2wbbPCYkqhgQiwQmp2A1cUbV1uG4FA",
  "key48": "2hnq9mohWzz6pPU9Z6eAyDYaZniB36C5sKsnN8rWEEfYEVYotNZLUQhQctDLmSbM9SEaexAUGdrXXCYtVUXVXwfS"
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
