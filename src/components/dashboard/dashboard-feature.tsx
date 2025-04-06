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
    "3sSgQDLDsjogXQsudfPso78spqrH4gPktNKNTtFdTtLyaW18oZRNNjGSH15xEoexFdytv5LU2eHumKvgTUVT7hjc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4175yT8DT7YfE8rqqdhpiGAZwhzVjBsfLWerriTGyzqawHNRE4ARNa9zbUaQF8JB5fbyfUmw8X7T16k4UyAM3fRV",
  "key1": "vYMp7gpmdSrQJjzPndrza2CbhEuWDLyzxWt5QQuAscuSCjfcB8EQTS9BnRaeCS4zVPTFqU9sAZsLBVZRyox1csA",
  "key2": "3jDgazsLUmjW6WTNEa4Uo3foECqChUnXMvF2CMQooJnhHmtHhBXycUuNJMY1JH5iJvcF5hTwqiLSdmGN2qrdjJs6",
  "key3": "oRyQjUE4wWRo7kN7m7PWY9GV1HARm1c9kSbW9THkHgBiKJY2pHRXRPPgKPUtSCz3JdRpFNwH2VkDTr4A5S7DQwg",
  "key4": "5Kw4izurncjvFYRhoLqS3RZDEpoQhPUM89ivaW18fk31bfzQLpiw3Hkxw9q26y9i7GYZX8kQbRpRPmfLTUKaqRUN",
  "key5": "JoTL1j9mqsmGMSYuEyM7PGWHR4zefgzvzjz6tgjDfvxbRJBc7AoY92UE9p12WnWhKANxBiRs7a26V6A77FDFHj1",
  "key6": "2dDiD45m9ooqjmvVo9UWFjYXUsNBjugPCVEcR6aEpK7R1nQbqur3ivqrr6wjcu83Z6tjBYebdKaibxwxRznQtCjT",
  "key7": "58soXHmipvZGy4Jg43dn1iXrRfxYhsZhVwoM3vrxJsn89TpmWQqvzZu2L62s6qjywXQNaKV7MuRJ68QgQXdjXoAN",
  "key8": "5tZoLMS5ovVJ6CJxuCEZQvXjuHKW6LVUzBRaGJjDiYUTZgsctPTScde81688Ki86EyDrNJjuPMXbznL6q5coUCTn",
  "key9": "5WMyCUW8xWmkGBNqKtDzkhQ3JPhdfCup6f6Erpj3ge8dHzHJ95EhgB7XPFEjRviKHsMZnoaQBw4hrbPpSPe6DpJE",
  "key10": "2VBMbVDvPVmtS8pKJAEkMR1nRtc1C7hbnC8Y5aTcYqvDPCiSvKdHHEKg8yLeieZrV4q29jrzaVXrqtupkKhfWcAr",
  "key11": "5rmj2EGEVxXm3JF31qKV229Bs6vfcsTV2GPdcntrsySdfcx71kBvBaYeFrY6s9cRhjYLkYbYjREy7CqTStcSrcFS",
  "key12": "4jfaiK51ooE1Yy3ai5TgQegrh5eTuLqMrBpva6irjiTjQLBR8UtVVHVRvqyXBwEbwdmHNhYZhMSu4pr6cc3kmboM",
  "key13": "5XjiiCcSLQ2bBNFjzjqqb7mN3sJ9g9Gp2mJ2rEyqKrwDyo6eQapfWcQeA7b8yJQ172J4kts3iMUbLeXxmseyrjy6",
  "key14": "4svdtAmjTyMNX1YdSYkjMcWAknrYndx8nMz4swyCSdxmUsuvJuGBjKTkARTHU6epycjjVUBrcZNWTevMDwWSVsVM",
  "key15": "2soKLd4DcWNeB5UEaiUBcLHT7WwGDdsq3zSjYEdm44PFEeRNRXE2Vhd492pdP8VpdskPP2jAEbLjJPCk5iVQXUev",
  "key16": "tRvvUUUSBraGANwrMw4U2hps87iHZNeTdQJyrn3FaEZ9XSjaKEPKzseagXqeMFeem3CvjCHzZT3rabynoAtSXdp",
  "key17": "2oAydT1V5iRhyMwUYa8mh2mVSz6CJmNuiQ8jmLnjVWQ5oEggunvuqFYgu81QTkg71rQVssVP2ygXT5CrnSmdaMTa",
  "key18": "2bJ18EQY8LFWbWaUmmXeNScfpRR4SWKsd7nHcCFRefiby6mFeaCZxVMxjnaJcLYc9dkhWyrwDw7EVHGSf4RzVbAm",
  "key19": "5AULbHNqQM7MFXTRN1rut2TTcxFcCSoJXC6uJtwTyy5LhcFnNsW2GKZwKPPrSSd46XJUBUWGBdTFgR262XCsb6vy",
  "key20": "66VFWkkcpDg8sBeB79rJ4HUyyzKDsuMjaMDV7o65D6WKcD6hT6LUnnUQYn5hj3qwVVANFTK2RgC7WpaiBZTtEBby",
  "key21": "2paToVrq2G893d3CidhYaKaBAdrZKEMZFhHbA7ShQ1bJVrBj9f2dE4NXqXE8By5q9DmQimNiaHStuWEhEdg65RXt",
  "key22": "3C8183xKbcWokbT6ri39TixG4JhHuVffSVbsMCaxrGwv7uUwTSsjTCe7eSeCEaWACTt2eiHijaQnGtvMaCuXzQf1",
  "key23": "2eQa8C4xuRcmWkfJisWqVWri4uZhxGywcQvVcTbC7gk5vz3vHfKRrXX33BrHksCmwThZqi7ZYHqp9V2yxrp4Cq48",
  "key24": "5n5zTrByuNVS3PAxSC9F1Do6ZHav34pbDBoS7rhdJNCnh9b3owcSwJARhnV1qyYL8pXXoJfsShiEbsPeZhmwTjbP",
  "key25": "4DJUEtFTnifQrVdz8tS6jvr75rYXG3EKAPK9wuJqHQaioyPEV9rb25RRCGd29GTzQyqgZw6wggHBsJ3qUc6FFrjH",
  "key26": "2pzyBTfp5EJZQFSVtPwHtWLuPS39EiNuM1DRcmiukmz3kH6t7u9pdiSgqKgTKatgTBcATJ26WyfvkckEZiuSAo4T",
  "key27": "5KCZrW712UNreKWy3sF69LyWSgQbpKvwTu7gJ9WkJ3nR8LnB1n7pSCnazz1fDfGzPNs6geEZ3FUkAgG3vW6yiAA8",
  "key28": "3M6eUsHcDzaFsZpkphLdzbhj9W1qKZSLy7WscSiogi2Th9D27q7tXBq5rn9YDp2rvKUofAYtE3k5FFjY7gjrVk5t",
  "key29": "4PnEx1MS8SmUULr3MxW6zXvDwY6xEBt9aXxdZBQeBtZrG7adoqTwq4s9P1pw4Gz7rtaqQW9JqUnyKDVPoSZn3cq8",
  "key30": "66fBJWWgvryoCwv42VnTKUWj7SwCgGL7C8uSfJpXzyXwtLkf4E1N3iyi2CbKfsZh2DBnTTMuVi6NhDPkMMpEvELG",
  "key31": "2gCKvzEfukGdB15PUmbvXLXLfmbfaBt3wSUYs5KDhN4BDuJ1VySPv81rYSfVNQ58ZL7WjV3CfEDDvX8yA8QU4pn6",
  "key32": "4GZhwrbEXfiWYBs2FAVw3Z39Dj9ri7rjkYFhZehmzFX8RerZ8xh44NffaSDoGLYBS1YnDJaQqLV4VmTSJgtddhcV",
  "key33": "3gnLCwqchVvfUd1Sz6n3Y1rBB5nXykDXBTYs3iWJCjFeG7iL7LGNhXCwykVtohJdFBvTzv4ajqFQaDppYdC3zMzs",
  "key34": "22DovYB93VDmmo6ZT2V9YdTG27SPhcBXYGMdLU1KN7yxJ8jbhNDKSczD5UeEEeyo2kRV2dxziSL9byHxX8zhVM6y",
  "key35": "ocse9pAsa6M2j2jwBqVS9fVtbyRv2Nh44gwx4r7yFwbrL9Pc6Rxhtajmoa3iJrnvK39PJJS5n1aBy9iAWq4Wm7L",
  "key36": "2XAKrmyEnR7XqksgaEabHroGYAW1hh416NNYdy7CVHsFDoC8hidNY84uq534AaBMZYduPPJVWAGBdGPLavsXS2eN",
  "key37": "5Q8qSaTdaHTHjBJaTJDSepQZxYruxrm8LzsjGyX82dxXdJBXFkbHmLQePxJnYibZH56ENhS4vdY45zbZ75H1goig",
  "key38": "5s1wXuxF2M5ze9FqJwrTh614Ymnbf5TJBXEJ4UYQHnSjjuqQvvguGVW5RYHLXnFrGuUswvUVgKuiiovVXpcDGczz",
  "key39": "5fneCrja8ZAFQxhF1GQv32jccVq6n1x2NWDCDPkwpReezJSmpvEcq4NgJRUovrDrpKnfMMoEEPM5xD4Dmo8VhdY2",
  "key40": "3ydpYrjyjCYstMHinUUAebyavLwB1wyT17jZeZixamtsNu6XspXSemKFPbANArsBJoxTz4FuXdsAsBRpMTpMZQKC",
  "key41": "PQujUtjh97H4W8xTcQNMLNAqiUBhUCfFKEypjqib7pihQJYsiRkxbeBJp4cYxRxr5VsicZMer9Cx18gPbdrqqYB",
  "key42": "4qBHUUXfYLQyWgyE2u2783JNzCLuk2EPSH9CRh3i5rnZ8PGh7GfCbE517cxw3FhsmzktmxzVNPKdRwDwMvmkcRih",
  "key43": "65JnpGpQvrV2p4Bs11T5c1DirHtw5TevwUKse8Mfp9rrhFbdfAU7m9FmkGA7LaJymHs9NQmHuEXyXMDZvA2AW4h8"
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
