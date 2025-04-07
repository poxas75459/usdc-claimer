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
    "4vjnY97VtcTnPpGoUZUvPrCM6kgiGmfvD7ekkofuKGNCP1zamo9crzumq6aWbbVvQDj1bkSiuCfPFpV7XCgj4gar"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4R1fdNApav6Wi78834bm582TzuP1N9SYkhBmRd4wUyof1orvcG1yBDFunDMyqppVLsdMACzRWzB8J7yY8FeBX7pS",
  "key1": "5A4VvTfrqjHoGY9iALELiiq5wqyfVQ4HtTthqpSR4AtuhhCBruuQ3piC2YENsfiXtKzhEssRS9Wtfah2bTyF4pHA",
  "key2": "5bw7cYjfLxduZDL9KE6P2GFSXDJ8cWx7SAQ1sAEW6uai991z5ZsyKEF1jvQf8TcUnrnjfv41tPcVGAyStTBiVARz",
  "key3": "2Bjsd7L4gs3U7SWsYZn3m6EHJQGSnjj5F1Foew48nN9hBZArQYnMaiwW9WK4Q4hWZVCr592UUR9uwATEhFFCsyiG",
  "key4": "22hGzk31FDjQHycYB8TePQFt4cnDGQVakfVgEZnXzVoiw7K4PmdQywcmuEmcW9yg9AYDWXjJBawnFf7wtaNd4TNa",
  "key5": "5fGBn1WAJK5m54fwnuksdpzMcGeJRyzovjurXXuDbXfNTbsTHs3BK5UX1BBZB57GcVoprhXFdmi28kHAtGdXDiZP",
  "key6": "2eH4dgRxVHUNEDCwGwhekmF6g4DfCjxAU711oeT4AgQDoXoGfVYEYmF2orG4kC3hGUTnC5pxY6PgEEQ7vTMAWeZv",
  "key7": "5L4topqdXeTjcbbB5YyCAavQMEPp8uVU9ad18CfyhxGSvZU7z9NeTmpMMGUBPVcxUuU2E7xFjkFC2wciCeJmEN6h",
  "key8": "37b58k65cJAs9A39BMrYTdhyAwiHLmDNyJVoYRiVpakw12moKpgo7qo8Bd35AiwNxvMwhrTFsk2C2cTmnbNT6rCR",
  "key9": "5S2J1trYnbyC4WVcApmiBCWTEr3ibUDeuyx3XZJ2FJBDscTEKAkP25QB4k6L55S2WYDCRLKRNhgSuGbQuKVVyWKQ",
  "key10": "ikTb6fP35LoNPis63a4wedPTvMJyAngT8NW3dvVtENbfn8sYprVTbhD8U5SV8hi8kXVQkQSRhWFpH2ya3wGJDK1",
  "key11": "27DvUnXM4eJrxRHfcB3Jg7ou4rzJ5sE9ugW162S8XaCH1edd8BEhz8b3W4sVCmN5LPGmNuV52b4vfRtpT6gaKjih",
  "key12": "4AN8jXeYYFADS7i8UuZouYzNtosQ7vtVPBJp1FFSRDohw5bY9A2AuVqpsY9kn71xaUiVxPxw4yAaxNKhuJHzLsWw",
  "key13": "YSSXxUVeUsTmGWbR7hbH53Kf2pk6agTzDqbJdGDNpriubvvfrE25d5HT7uUh27hVEvS86KV9SNMyWdYKw3SXQ6a",
  "key14": "28rfMkE6W7bE5Z4NB5y7HyrAdrjBpbY1QK8GtNLFm5CL2JjMw5geUMp7LE4THgQExCdDEJAqTGvQf2swr8WuBP1e",
  "key15": "2xndeab1Ka5ncJDvMkmM9CrEQDTpXAgi5FS9Zvgvh235bQFmc52n9MReK483TSm9xyRiyVBhUy7Kfacwad3j2Yjs",
  "key16": "2BQBGqdVXBc14gXmZf76XT2aShDcqLV6we2oxJ3gCZDw6asFDL22iMQoEQKAeUVT2bhkhjK27uGjFEo8Jmiuaujw",
  "key17": "3GyUhV19sfomY1g26cdKnacuEVeqJjayda1YPbMk9pNFaPiTdVyDiJyehmQ98EWWzrnESMeRSMh4xadicnZmJk3F",
  "key18": "PaMYaTKWyYcfsGAgcqN4viUYbxPGVvUPd53dkzJ6rPhsFb2j7JkCv3esCmt75L4ajvraiJBW9s7VJKcfL361oNs",
  "key19": "qCrUw6AhgFSRkQA1r5MWGKzGcxuz6Z73PHJiu7mVQUHN7S389MQDGsckuVF3sJVxwXTAQ1i7kR4j2NUgP5Sh9jE",
  "key20": "2ucfgn6pNyf5wqCKuzpmJ27WsadKHypwLt3HT9sCYMAyJ6QvShDA2cSMewwYe1hFGJBmxSn5B6p6HSqE4oDkL4Vf",
  "key21": "4Jd3LZcMcEHUKgEVmiyxoehgcRtHRcMa1pQJLpNbvNpSefWQRoDjqVkeqpUp9bhV8cPpmDkCg4BbxDSfBVAMpKtY",
  "key22": "5WRceBbPhttfmdd8NG16JWUqphgWR4VvNLqn3pGGZ7WJ3QCydvYRgpPcLbYRPXQjhWFL7Ytem9YELaPeyWm2o3r6",
  "key23": "3CTBuhXQ7EhLJ4mCur5GXyouSuCbx7ZYKUUc4LLJvHgDjDe4KARDzwJosxXho7UrB5idfaSmmjvfQqMCkjkfcvuz",
  "key24": "43wknDqU3hCik9EthHhvPKNxt8H6Angyhmca8L13bywuT6Lo28vKsZVJ9WuRMpebxAQF984hfiUkcDUVMnafU2DL",
  "key25": "2jVqFG7EkWNgKBQufXLDF8HzzVVuEHngSuhXewmJdwT9Ln3P9hms9yp6WU4gLrSrmKT3xei5SMz4hFNaV1QjsdCj",
  "key26": "28xonstc8nsuiuGoqAR8DXbf1GooHPNx6ZAPaF217sMjQwB1KTeo7Dv2Du7dKH4YdWemBPGrhkesMgds8yY4dVRh",
  "key27": "3TkiEG1BSFAmcygNxpuTJ1zZQe3HRPsU6PJMZyz57dpv77CsDqgWjUQ1mPHfGtcnDrs9zDcvLK1LBKQSrfYRPGbQ",
  "key28": "3RywLzBiCrHkbbAJj5UbzfzhCwy2RYTzMtjyQi8hkfE7tqALexbeuxPUhZxeqaBaCij1S6WumEG2NEs7CWGt6ebS"
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
