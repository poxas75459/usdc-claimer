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
    "4NqQsaQnvCzaHmiJEW9sneuSUkrx6ANBVmnoMZHQQyjMZgEr7F3uhkW8rumhkcsrFVvRRiiXQyQD4GQdVhgVVwb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FhbP1EkxHErgK89GuTAWCaduZdaboQ4ktuyfh4YmE6fiMzFyMQDPGVYhyKK4UWkP8kRShSf1t3MQm5XsGu168Lv",
  "key1": "5Wyg2Vc53ehAc9bHaQ9zrYkKkJG7tqCUQX1KyWQCazAciwrJSzrjG7zbHtPUHjNtiB6hCzB2CpgNG6iUn4si3njp",
  "key2": "4rsumSxURcKurriGkP1VwCf6jNK7SRLGebVSEaCp68DjtmcQaHZK6TAWUb3cHeUmZajDpspvJByGAH7eGYdYgigp",
  "key3": "34yoxXZ8o1ZWGqxyf5wypFs9CjCfYwRTtpxfSijP1iiJgAxfqM2hXbCkBUbmvaaYFxUmY4aWzCawMWkPn61Yjvet",
  "key4": "4XEuPkNAFeAVjqbzJGgpTvkpt6yTpqbrLrmNDDpF8KhU1xaiqc86T3Qug9yJJkF5oUAJcZTCAM1UBbCs92SL3su5",
  "key5": "4pB1tmqXnbGoatAvEjNzqJBc2PQVqQmBWo8UBTDxBZHpUQqrkJXG5jvkfc1weFesxG6m3GSS7abMSncCpMZNcEbt",
  "key6": "5JSbdGEPK6yPfHY959r5yyi9zdyqxV5pvLkt9ahQxJxAUEuvTqv1RujRE9dNFKtr9o2Ye5ngWgwBPyvg3q1z46ek",
  "key7": "5TSaMGrQtqu3Zx6K3rLeivuPWsCNCvmQE6eXoNw1G8StDTukPhXaoKNeo2CZJ9XZuawbm9Pr5SZgZxjjnCJEEYP8",
  "key8": "3phWNzv8EPZK75mFD6GXGwwDtQrTQMMzcEzJRTwkK8ARum3Z1HCqM5tJPvKTxPUVXpDfdVyeJMcwZRy2Lc1suyz7",
  "key9": "2JrmCq5yfyjCf9K9BNx7StB7yyaLi69PWn8JUAAP1fMHurTwM2dVxVPeRT1Xqcc1he1mjPwANLxA1DRWR5MXi1dS",
  "key10": "x9KpQPX6gBdCMd6N77VWbG1HArVQtep1U6KHEJut63jgKVoYnyqWaBLo4yG7ifRytHHo4os8rmnz28SLn3F4hwH",
  "key11": "4YEMsp8enXoLKtP44qEEuNoZz4LLsHQYPSHJznzTeXq8hJjt5zjPp3BVAmAFmEXgYf9yibGv9EsvJp5nAnPKrkvk",
  "key12": "XBPwZU7d9z7SSN7mPZ9cxsJ7iiH9PZ4oKGmpzJYKuQW2QsbjrvLoUh51BrfYwEBVRcFuNr2ixUE1kVQ9JEKw3MW",
  "key13": "r8eBGkA9vfi5KkoV4gsXMzD2QyZxJXXXxLzMRmHH8rzspLqWeXrahwtT7RLdzLLwvvXsjGPRmZWff7WMJzfiaay",
  "key14": "3uz5PZDN8NBD1bHaYxAcvy6CeacDwsPeBHAQejoKgmxYxXgCBkTisudoDUWCgoJrBt36qd9kyMVBGd6RBeguV8XC",
  "key15": "4K6yoxyhJPXFH1C6PWqSC4LdfMfU37PSQDAoAe7UdVcg4r7ZvbKD593PHe3BGWPtE1dPjCEXKSbXnwP9b9EafrK2",
  "key16": "3G2VG1YszeuqGtDyEAFJvu2sDAfsubYwXZybLqsUxXFF7nBm7Sc7eiNkZTUv94JGTe9pRgyTj6jBRvdK8U4u54bN",
  "key17": "B6NaaByyt2uHQu1damRQxvbZVxoBVqK8DJQNUX6g3wAi7WKqN8cjNYwGTVW23NTFyXhGjosAb3CZvjjRh5fKjuu",
  "key18": "61f6iBtciem66zrPUrEQSACRRCZGf9unkrQVkTbsxbd2NWb6tAoZq75CsFTWHepfd7nBLDTVcGSpt7nkj18P6Woa",
  "key19": "2oeBddKc2iCfZMQJqm8o2nheY8oVqbRUZUvX3ZCa6CrojxAvi9XCMdWg4AqjAcZUr3KFJjtSnyEufbYa4DmVfrsG",
  "key20": "5MUDPWE7J9ncfBdMzymt2jNhQ34K7o9mjLU3RZFiGZRRh8ShGUja1XBtwJEPa75Kn2mWjKKBt9jKVoPhzJyah1rG",
  "key21": "38hXmxRqxc2yAk6pta8vENpAhx54wZEez2LLgGAtLeCT2ZBmeBhJUguBLir9vPCTbBmaiGrhEXVcx5xuzbMRJT6v",
  "key22": "55FHR6V7QyhVMwJgvUsbaL1WJjWqNHE2Q9QVCmayZdcw9DAcbDpqH2UNkCKbS1oJioeMc1h9KP1i4cXDqPpXu4Zy",
  "key23": "mXUDWiCdN9LAHsbPPWjcfsr9CRcUoNg3YsgjoW9cyutzdL3GsLZ2JRmYSVCSQrJ9HoTFHFFV3zoKtu3JEtrCBu9",
  "key24": "2qShmtuquVFjnUUxBq4c5icE7FeufxHXiWHbDTmECAmZ6berW2T2hhVhFyirBS9EZKUUzuFPA1rCUVRgEQo226yA",
  "key25": "25oheZhKWJyjaNvcUdgwh64jkSriFHqFwfEfANJJZ3jYdDpcjUtXS3oewSvXrgDA7bNjHCnrybrnECkLSGVX6dy3",
  "key26": "4y3whfwLhKqpSiBJEw3Wca6HkA78NudveJPHnwzzXN9W9FxQaZRGpM16BemjGvQcZBVYxMRTrpzbWQRYN3yfYH5B",
  "key27": "2cNk9xbYQPeUG28tPieBvAdLQTxDjZYusAvCHzbAFGuSUcTyyUkSknpDjzTdaMzLSVtpUDxvzUMhKkvWHCWT63Ee",
  "key28": "51rovHQqEQTXKpCYn5sAf63Lnm3EfDonqSQgXQ1PL1ZNerBT8BX6bYH5Nc2J5bi7gUVM8QD4trVjHgBDDXg6kD16",
  "key29": "35ipb2szpnTfksbaFQek767gLg498Utd4PZSUAqGET6BvZXkgygWCtGWueWGbK75bcdJtswFKwhayqpCPU9R36Kx",
  "key30": "5HMED8D5tFCmPxGcCQa7WsvnHHehK9efkFTdEBAtojeaXHBArYUZ6CBvkv5fi6RJcvBXh3oS5tna1nvEGxk5sCEp",
  "key31": "5ahNbt5Rf2GVykhLxMhihEDHcD3J8RT1jVW82E8WPgJJ5z2Vt9GpgxGAUbDZzsPmGBsyKopJkLW8bFZzXhRSeRrB",
  "key32": "4WdYoNihcfymEqL8dJxBHZaxYahXAoxNpbdqoajwR7GscpMPKx6svCpghCgDceeae3Bp6jVYPToyg3gx8sBz23aF",
  "key33": "2VC1HAB5XJWtcYtDviEKCsMjSahtTgKR6Q6BqMu4LWrwAgwfesgwu7E4o3FRUK6ZHoSnLJHueorggj1EmR2F2nxc",
  "key34": "2YVafRr4XzJ7GKtmHU6BnsdJmEdjLqZd3g8rsU6rv7smCfVmYKk8vir1WTxhKtreP1pokMDPNtx5soGCZWvViNjU",
  "key35": "3RVEvcPqd7fM6xuruZvxo2NHxwNv5xK89YJBN8jrFCfxo9F7P7qL4jKbDztgEnc2CPWA3D8BsVcjFcmKc94LRC6y",
  "key36": "2fXZpng2VDxbGxEpcGffh3X1i5BX6gHwZ4Wa3PBSW7jH3eXV41YatFBZkjRKmG4irQqkJ9dCR6UkzQF9Yuge94AR",
  "key37": "2SuBjT26qVCFV2QHCLzagADduiyDF8jJoLSaavLc1MLsgXC5dCnpbwfgASz1o6VQjS93W96YBjNq43xPub8tMY6k",
  "key38": "5hSPMGu3FheuGTCZSUGFKEf3Q9chUQ72g6L8JZq9VkzyvAzPfZVQSeByEaFPVmtBnTALwgUpSfSfTSfmxs74CR6s",
  "key39": "4YaCfn1CKLBn19hiPkXEdnFoRT2s5m7Ycgzdp9AsZ4xzuGypX61wy8K5H11NpXG8wia58hPQg7kFdv1ZNqzjWw1g",
  "key40": "669p618ACj2KxdbSkaei9RHeMW6TwigznvcEzkKyLjVBWrkE7yKFxkcgAHhL7MV6cMVeoAnfuKdXz7c2rPNqg9hW",
  "key41": "4JXPE35NmzkzoHKJHJPg2sSq5qDorRUdzELwsoQtexDoG1a4Z2QGHiuxNDK1de7tEjkMwfxkbaNa3gkk1dydvYCq",
  "key42": "2Ur51gQ9LiYmN7M5CqBVxEWPDDyMpphzzHfnrsLftfrp1Gxo6XDLgqHBu8e7FhA3poeNz3D4YgQPDoNtgU9Ra1Pm",
  "key43": "5KXFf68TrQnUsaeR7NB5okJ5aoEZVA43ZvyLjJ9yJF8yDoWrvn3oKoebAXV9iFBQdGTN2yEo3k8VhJYUCorhgrry",
  "key44": "8gNJTzJXh2eWiy6jN4bYZ5bnR3yNhfv4AcgQgdPdQNjH9us8skB6s7UNsHN98Z6QxiBaqBVV7rXG9SPTye4fK3j",
  "key45": "2Ha12wANcDadhArZbgHBguCq5UPNsSLqaz46ws37JuJcEktSobjYpQcSgepUFjnUtQBU9KiiLrRwTjjmsgy52SdD",
  "key46": "dc64hW8VQQnJ9qX5RBVzSniUokwUGgBwJWDkuLryLU4ah74rEoSctekXQ1SnAXkbJDBEyu5JdTSLkyX5Jp1giwC",
  "key47": "281XuBUwbWsZPoHAf2bdpxVKynLSPagK2KQuJXMYykhf1f7KZ2DGCpH9kNSf4N122XxgcmbDZNdJz7QggUKiYq7d",
  "key48": "VLKuHoatMQrPnD5BmKjtiK43dF1QwAdTWSG3EFBCETK7HudEZkxqvTHf5EdzGU642xXanYkajL5ZJnxN1zbtASu",
  "key49": "3Ps4CgfH8tM9xR1bzfLuWDRRWag4ioUwjKhWVUFwSTbsHWuW9TGFwkLqMdN5nNL9kdKGrpFWNVa8C5CGqmmjvcmx"
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
