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
    "55T5WYNTq6MWo9RnX84o869po17okkgfrX9TYdUBrZDYcEg3UcWJUJDc3CCwSCvDDYeTfmUqeyXAkNpN8rbKKRaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AexonvgtrUvYipZML6Rfx9b7ei33mgZxSc63rHxYDGij5uq6q9nxC2djvRw1ppJBF8cdP53y7JXnU9tGXW2GEf3",
  "key1": "3uFq67F4YSWoWkCmn1dGTTTbuhZpxWBV3yBATbVAF4DveosYAmZKcvbrgGp3BpXpkkNpa2PPP9Crkg4rFTSrVg5d",
  "key2": "3ZQ7Xt1u33PbZC7SyXbgq4zhyR5s8UEjBLf5do85AMhvxhXPbQvYygetNfeHHckUjyg3B9eVbJ6qxKmSVADmzQmR",
  "key3": "4DQNAEng9e4TJBVm3Nttg4n9oCHXtTywLD3bsCn2rETVRkGRtrD5hQ78eMLp41bP5ZBnzpzqAMJDkGFGhZxGYdQF",
  "key4": "4dzhh1V8APzvBH2xUKX4ZHrTaktXZ7ciavg7jMAiAyJXmYkvAfv8CsJDy7g564awi5yALrgLi6dCcAsFD2RfG9US",
  "key5": "dCa93n8gs4HifrquMRWAKT2Htd1HgK775KnVKD11JWTDCek8LStWAokmseUHJFp9WSprYzViMVgUZoXUCEn1iM2",
  "key6": "4wUgjyUAsEp5q8TCTzZ94CEN2LnjUX61AGEMVWuuFjUQ3f6X9a5o6R3t6Wh7fuomUGNYTGTdZSn8aoGDozaa1gDe",
  "key7": "5F8ugFbsVNGiMDfiqjKZUPhFVYmDFBXtQh3Z6EvDGzqBYwv9WFNGa9UkoxLuR5ihEpmeuQEWF5Ho4Dek4WqUaFTa",
  "key8": "5v8iG395hzGUaZqCSzUGtNFtwkEAmjF7shNQEqLKnMg3cAi2vdziHDfyhHL18erxjtoCnyYywsainRorMPjz7kov",
  "key9": "4ygWFZEFuUNV7GuZJgLqQWJExi8STjJdy77zWe4787gcbSXNdREie4T4HkMbzXyqBN4iRwmNo6VHtTqQXF6eegob",
  "key10": "2fxsLjwkEmFcLsLPmPA2B3gi83sF75KN3THRmHPhaBFmdxvpktCQNZF5QQjUBDpCYaZjuEPLk8htJnVBWA8cEpHd",
  "key11": "JqARt2c8Pzj2zwKa71r1KiQPvH4Zxi9PN4TJg4GaMXc4Qvpmj42VGx9toG6SyM6kDpu5U58NMGhQUm5C4PKsPcq",
  "key12": "3RxRMTPScCVFXcqb7G2dHCqeh7VgNFUs4wXkcNyxkiVFAQ3rDiW3zrHsvEkARjrK9yidExELkhBcVUKRnJTmnuEr",
  "key13": "4sHbQxvopeXeNoa9jFbSgjitpQe7ASBjtdarcBqCvf75CZauDb3bUD4D3heAEqMp22aKGebcdywcB4M8hKsTg7aZ",
  "key14": "5FLmBj5GB38JD2kPoTtduWJHbwKbGosgax2fhnvcSntStxJJUD7S7k8jMLke8PaU5nZJxcjj4FqbsHXL36C8sPLj",
  "key15": "5FzXnrRgbyitkrUq3cXmq7uqNBrQwif4gZYy8fBjwXc5caZo3SSkBhfZ4CPUpe5SUmyr1gHPhPwHuCbvBqwBNqvZ",
  "key16": "4PpEYEc2idvxv4XayvdDndSZszX6fdRqWvVjrKYDVRztjgta6XHXCrAuiAqraRdQqmnEDfjeEptzHzdE95GMtCVH",
  "key17": "5GsVLjxPDbvDcEQfnBaReBP8eggBv7i9hUn6jTFD8q16uedp7Vf1ss6nGH1XYvxnowC7Rc3bQ3ViDvKeP8m6LVxh",
  "key18": "5WGCZbB8b4inv8q73UsPnEdu1Y3GwzA9WBweWN76Kqqb8Accd9BbLvRW51Znmq5LgR1WPCjPPBdxvHF1dL6NwFDq",
  "key19": "24HrJqeAXDS31kbFHQLEaCk6hyedZfYxTpsjEFwBZapWDsEPUNFAw4oi4jCT4ypehSzaMsfoqdGLGyMdr9m7VLNH",
  "key20": "3wR8zyoTDD2fQYbQ8P3UmbsJndnZiu7HsMUknPmwdAGMkuNLcL6uj9V2Nuw2vyoAwjxt7XfbaFwGSRdD9DfcCvcS",
  "key21": "2CcoGfL5kenkPw3BU57z2xymHrXY2SRCEf3sBRRS5GECY4biEiDZuzAdSnLa7Ji8nZNZhYNdz547pJGTqpohPg3w",
  "key22": "43wQ1K868iiiLwJWEqtNDwtQ4Fwn1JKnrKjWKHisrGZxhE1Db2i9W623YZT2jtvVomJGX9nGkxe3CLPuS8VJkP14",
  "key23": "4smJ1z5QSMuNvo1bUtgr3N4HHoXentsUZpdDSWSQn53WyA1dBJfc6JELg4HbPuZCAPCbfF4FHE46a1u7yxsEAo7",
  "key24": "5nttzmkjGhw5DtLQaZCfKjCTGaqXb5u3L1WrSj7Q2sqchMR7z6TSTs9MLFrp9jqu1NxxzKgmAYKotQRhGxHjRJk8",
  "key25": "676uguCXRoVWbMJdJg1CKHaPM945L8q8zVSnkPC1pyH9Wpiua4cQDrzjepc2tqc4ArYnsdVrN7jKPDydRiUVPNRY",
  "key26": "5zKJjBsREaVa1ZrjHeSWXyVQa54TqZugpTagrmckeVQaxWWCQFrNmD7jj8RFfnUf9N12xjQmZDuB1feRW1PJgpRj",
  "key27": "a9cMcTuSTEmHaMkehFW3bQvoWKJ5hkD2rX8UBXHrgedgFrqjcKZx9VetGh7q421qzmJjBUyi9FgBsTtSkmhDrMR",
  "key28": "tLdyjM3Yz9g1Em2pm2M75Vh5SJ3u9pwiXBuLuF52GXeXJefs7k3CEYn9QcYYmc4dMPs6mLDuqXrRZs3jR2SVriE",
  "key29": "5aBi6jP6tsoJndFaWT6jBs61MuDvcfwxFqXFQooB9FsHwopkY89L9Qm82JK7yzkmvZSJDHgVRQuGqGviPp5nscXH",
  "key30": "cHTNyt9DvHvjUEn1i2cdpjsiPptHQy2K8DycmA9KRvsN9wtE79vknQTwofdGtNH3fz7KEYUjbyzCSGYQmqFmZ44",
  "key31": "CHgFoXfcEN1kupuvChcKEPSgQvVLLnwAr5S2ypbEyTUohFQwro5rb7Fx6yb2dfUu8qsAErJPnDD3oJVp9513HDJ",
  "key32": "3GJ1VAT4JeRwSMJ5sHgtgJnqUDgjhVATJ35kP5Yt3fCrKGrJrp7gk1i9ttGiEczksA12P7TCQrAe9PbW5nvZYCyS",
  "key33": "L7aFqte1UdpGaCLs2xUy89pNGoDxq64j7UGZkRuii4xsyjSTgVQJxQyouwE6UCc8xFx6nAYwY5ELhppvVpV6UWR",
  "key34": "3sBurLGj3SVc3Vf77awu7ebkP6m2AAWMpDpRh3i5SzgwKCSCMYAZ5JW6DVKftEdEXChAfz9x5LPk4fhsy4wnhs4e",
  "key35": "48sDHgoAFPDp23xr2GchExDvdFagocPq65HkydhGEDNS2Gm77143pnfsiNkvqUECvENctiXqE7ewTUA5gxWKD26o",
  "key36": "gFSQicFH2EWhrGXEhm1S9eS1c6Xz36kbf5nypX4N8k8LgHkqiNu9vzK7Khd4CUJitVSu7ZXw8HihrB37oXHxXmn",
  "key37": "2TYhBEjcurjFEqish3Lr6FSevCSHTp5ougEf7aSB6yPn7GCG8iRUVKd88YmWgKvRsQK1ryg7sAEPgqTb61iAgbJJ",
  "key38": "3P8PZSmxymSEhzoMMYCePcCBGVdZuKkoiYwXC3EQpmMjKk6Jb1ANDJ3E6PhcZLn7M7dbQHRF2FfaCgwm679LyJYt",
  "key39": "2wjfudY8AnpzxBX3x7YhejAwGe2fxeJzaXtepf7bDjWtydMPSe9uQqYpmetWAsZMWp96Y6hRMbdogaB1RzxYKbAt",
  "key40": "4dPV3BK9uHWmESycZKf6iu2Ni6SnCSjTooUBGWif7xM3MDtfeZBdjXHNaaC83azuGGp18rCnZ4AvKn9cQY32D5SF",
  "key41": "AJSEbP9boPDnPKvBEqrivDy9XBtbgr8Y7JvJDuEFVtbgv7AFxNhWbzvrzAnaaCF23XK8gvN7QVEwN3jj1eYcMpp",
  "key42": "5kBXdoECwcoJoDHmAe9dUKGHqvGAYQjBntcsC6iGEjadgmy6s1S68iLHYKnk6oHLXmqvMxErpouUdA44w9Z5w69Z",
  "key43": "4GavWGnvbPsvE5smDJuCRXnxkwzFkRfTR929kDjd4ZLjYa1uGaSKxrVWEfkFPuPBGyBbGcitEBqugZdbHKoLassW"
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
