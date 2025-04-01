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
    "3cZNarHyR5jJeEeSA75qpdcYrGtPTdEHg9fJqixRwWRUmwsX3XzSyjv4X7Qm8KeCHpBaeV2Wu2Yo2YLc4UyPBeYj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RgxGZYdLbJVm85q1mcShyy3ZBNqnaTQDUkWpdcqJgQBuoZhwR23LRJwrpp5QxYhXE5egsVPqbFZAYcg3iMzE15M",
  "key1": "TxMM7LJ1qjeQTEjyD9FEfRVon3DTVJoU88FaS382xs5b3TfDmt9Cg2R2z7rVz9EcUsyRUnG726Ak5pHXhK5MUkn",
  "key2": "5MT4CLPWvmEtjmGh5APQ7ZqwTcX75ANffUag1tva13tgjNaromwado5yoDtJLRefXWNds3LfZMBbAUyQwGAtXXpV",
  "key3": "31qj1VTvvnR4w4CHb7CcAh4G8ezoDNRGj1e5LJbcT9tJbgE6DAMkLp31PT9ZzdQHAdwzyEsuCcACF1jSBgTdVYrs",
  "key4": "3RHM4dHSKFtvfSR23a3gvvwJyvsc2ZusaAoWtfGxCiKzUtPT8mvHskCRJJh4YVXBbwkHUpnQmdgVfhgJGPhpYBBx",
  "key5": "2VXvWnC7BuhCozZ3bxNrBPDXKACVsTp6eRDXZdDD3ACVR4DWaRi61vMF6MFBLjzZoJuTHAdot7CsbqEPMRpDYp3",
  "key6": "5nFwGhkStFn6yCVX4iB63nPHF98xbbuRdF3qjD2K8JEtn9CiVdAQWxZAKjAKaMEuntcihBSf8FYjnrhG5cm2mSep",
  "key7": "2jEy4FvZisSDrgS4ZPY2PV5HNEiJAPWtU2w6o45BRQCJkjnFhY9Rmdk1RVkDLS9cTEfhrcJVGgQ5quZYkMekGUVz",
  "key8": "5cF3LGfE1aXXVr2xBMc3VHbRHZJaaG65r4nKMW9fTjKcn3xNq9v8gdnsZyrwtGWSZuJYNnqUC54H6iqZkxpu317i",
  "key9": "4JcC197P8umWDBd6QHidsUaSiprFqtGnZg3oq33BNWteCum5di9ZPoqVUhwxmGjqHe1eGK7ofz3Dd7evSDrEmCSa",
  "key10": "3vMTk7EN4of1DQeT4CNkp5p2jr1EBbyThgNYVRXYtEoKaxtWiaXcsCjdg8dEDtZ7ZAymoxiDG4JcB77ED6VrMgGr",
  "key11": "3f77tkmxXFNQCvrUfRLbdrGwTCVgucAkjjcVBC3zRDNZF62ojZCjzwwBPZ93AgyWMnUzrw8kxzM5ELaAnUmYZvbe",
  "key12": "4pE8XGv8dqDchJYDes1YcpMGMgpkp6d8cDgJQx2BMrdGa86BUn3mreeRVp624hmYEBpcHGLPNcwvwk4jiH7FxLEW",
  "key13": "5YvZ4htQMBzQWkkzcXVHE54DJwz5J5j6g1eTygefwzCcX9QH6YhHVpXefWKd2TXNWeNkuuXyDk9oWYqMdC2kkwsr",
  "key14": "3RWbMZ7YjdHEAK8jnjdRmtzNxbJb7iJy926GSSBp1y1HcXia9E2WmBHvaL1tLaxqNTdFhmPUxD7UqP4RL3s4xb4E",
  "key15": "3Su6KN9MmzkkcDnHy4dpEz11xZxMQgE8XiGVAfVWbBSrFTKBWeDkqfcRaTsmCiFp2KQMa2tScKRr2SisJvLkcomf",
  "key16": "CU1RUcckhKpMQ659MqabAUrpWenriTuoBrtcUWxYFkt3PVG8jzEnNDwpqaMjk6ZS9uX5wQE3NoGrHpawYv7e7Me",
  "key17": "5aGDVkeWa622BKACR2X84sd3AdG4MmtaPxHACqA4r5D6wcpj3xnfHXmPdSLj5frzfNaSyy3rd4DuXDfYTvUxQre3",
  "key18": "4mBnK3gT3Y5yMZKGHyzg229jN2NzNQ5wKsPrLCMiaEzM9tu6f6nLjvtAXBPQBcACtYCBuzgsvgH4RHGkTf6dsdbp",
  "key19": "2KaLUq4xvDdEe6XkhxRHHfmKC9RrLZ83z22NxYzkqyq1pzkSovKZwt4od6y5oAngmYE4f6CkGEDt1mGitkE43PPk",
  "key20": "5yzAtSZbF7d1BsEJJAhYvFn23VXANQXx2Tcwop8PhFrc7j2VChbHA17juoH5x88nDv6qzfdUSFPTesSoHpGmLmZ8",
  "key21": "2Veidrgg2P6EtU1rzYxPF7y2giPr7czi6hcPUxSd9bmCxcsDbfgz5p2BGXsH7kSfkjNg1GgBSMKBxRtJkUij7Qjr",
  "key22": "5zBxsJTzXP5EvdTW7H6bkwr9Wsjw5SmJM4NHZnmC6WBymhh2277Typyk3GPuuHfAbRqivDw5RNchRWkv5Czfygf3",
  "key23": "4eLkyy74JgvUD8F9YPzDTCAsRY8RfhzH6hjdc2cPo9CSCymcVYEGEgkLvmLTibQ9HF55dbj9Lu7oinnmH8FP6Dkp",
  "key24": "2RBd81Yfmw1zVU2JoqgTv2XESgvH5Vc3y33rBtwqZSEDvCfxkrETYQB9UCueewPY4SRPXJyAhqojtwqyyMXDEiSv",
  "key25": "2AF4SAe1Je8xNwyeVKC15crkQ1SkNrLARf1RGcw8rpSgEbW3Cziv9Xv9b9YBycgTZHHtFbvApxU9mqpktr96GtbL",
  "key26": "5sR2CX14HKTLVrUSQ38wdeaT9DhjqUemMqc66DnfbYJ1WmqVTFtrxDM8gY1kH7vcCusk3jVo1HPhGgdtuj3qVZe9",
  "key27": "2WGuQkyegn9pC91S3Vut9Xo6Rv7PHq4o5932vQe5vBWTiSiWeBADt4z3nP9twwjQW3MAcCAuUkhAV1VFRzpUkt62",
  "key28": "AFHUkcFgF9XAaewMQfptTuAL6qPQJ9wCa7MhCPSjeeuEGfg5eJ8Vu7wgnEbmjG4S4Y575DonVknqnJsdQHYrMmN",
  "key29": "42Afzxs31LUR852pTLAE3W4zAu2phT4jxModc3Lm6FwCgPfaA1pbCvi7T7bvv1tShRX9bhX64vcF3hqB1WwfdGyh",
  "key30": "2KHMNDfJW4PyxMHkA6htUKAzMEyLBLMPtDJpmiAxN5KEFf5cDnVXeGRhnjc8Vrf8QS1n6WiS8c7DZLqXT1kkzCqg",
  "key31": "2iChVZFqwQMgwvwkBP1u3XDcunFA7GQcCfo1Hzi8kLJrxhe6b2QwSvc1bCT8Dh6kUziSrnBiQD6vjQNhsJBqz1Yg",
  "key32": "3yXmbJSJL8jEvaZQZZwQ6WSNzRJv8BPHACVvedbbbVHQofhw3ExZHSFnwWJkaDD2e7CxKSkXr94nDaVp8J6Vrb8L",
  "key33": "5BSRdoMxQF9s9amaCQBzpPkSmvw7yoSGphU7RwbLRb7QDaADCWeq75bFtzg6GTuV8MPH2Jf5xi1x6CHz3Ed2i7X7",
  "key34": "4mNFU4ZxgsKEpYBZLfSuwPsfMvQ2LTKimZEujZHc446cKSTdNaSmPr143977cKMAzC6mkWunBDHDLMRote1S1TE7",
  "key35": "5qKGZYNtVj4aZNNGCgDaZKRU3otQCp73PCcnzVxg6wTHTJzxBKVhbPtf4By38WZ7o6HRE6LxBNJYuSwpinbJ59YH",
  "key36": "3ug1VNE2tJcyv3QTP4jR66fMAtVczB3WsD6Lf3TMEG5eaYEF9C1ini9B6VR96JyHvxTXDATVpTh7NDXxfyoU8mN6",
  "key37": "41jWtfAEq2ywYN8D8S4wydjhMWGeNTuavFZ1L8M4QcoVc8mfmXYnJB5GhuN1pJaaRnGqsk8NKCbQL17LtwQaJGEp",
  "key38": "5u7Pj4WYjnQyA4icmpFfKB6VkQEisGHwDD5obiE3HT5szhZbRh4BrwGDMkyKMttYgwR71BAzr39MRXYsAQSAqYkh",
  "key39": "3nDaKUjchYc2ki3dMQ8gfhqZio2i4pkWWb53hk5C1GyBi8PwokvLSRourNq2599gXsXQWPos1tmuqmcxQA3zwipg",
  "key40": "4r8VsC9QSYSwXvtPW5QQKwX1D7AxbvEza86L2LbHsdBFDJYbmturqBVYhkYshWTdn3obEm8ArRhximLzJUDxZLyR",
  "key41": "3M3C8oHA98NBKiVPs1pDNDhgdTNtiJGQXua2GBGx6fDkypXB5avz3FStVg5UsxaAoDFRxrQuY6YNKD7WcXCY9gLb",
  "key42": "4hfqLDUXrRS3UoiKhXJ6qi82oM8JVxoZrJb3pCKmrXKfRQ1bUh6nLV6HRJDU3gunxY3CdX6epPktUkReRemJqm9m"
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
