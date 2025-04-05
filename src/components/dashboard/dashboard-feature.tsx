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
    "4nbC4DFAHFsPTbFNqqJZoY7bmNZSX6XQrHfHrwPbxBib3GeHVuWcq6xUrR4aaq4KWdGeRjEBcLDe4i3GDEThUv8s"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RjFi7JXfXVGSuS47GnV8fe5T6FLM2oRENYapjqSUHEaMwkFPFzsK8HMtLhtCh7wHNwK1eyEwcXLGkSbKUHvDv17",
  "key1": "31HYo17KYJJ35zigGeNaMWxGxXHPyXNHXMCgXJAxX8fhFs3UZWgiE7GbW4mDUdXxbQjWtvTZgZUsied4yKXugUMm",
  "key2": "3EguSR4yUkqYyGT6Aw1jDym4U4gZg53MyCyecN5ZLH11UTQpVWNAU87Kpes7xFxjz8GcEkB9RLMBXsM8LinNfTEi",
  "key3": "5NTQ2xv338SfoyDLadLsPizqZDbkSWYdB9bBrpQrdefqFA1xk2EKisfaszibB6mFB7FA2xTW1Q4x78Cxy89oq8kN",
  "key4": "1p36Ge9dcykZwQ9zPmRuWf4gHjvWmbmEDwAzUaZPoREv8Ctc1GPHHjfNEVNbz47gB9UGSm1ta9X2XeYyAZYY2Aw",
  "key5": "3SKjoGg6bsVJbJ9Km6uV2TGtByRzExHZwNqFGp7TXENoky4Xzr7i9ishnLNZTYSGDciLUCnJvCD8J4hUXBjPLgxM",
  "key6": "2ACdubhYoSebYSfWARJsfPVZhuF3a5JNFxaC7bwkh2MohckjoHJLTitEnzS2oLDdK2yTsEhkUPZMf8qWsG38Hi7U",
  "key7": "3kCoApXrETf3mts4m39ctixtQYAk24x3EnQJs7Pyt2c4Mcz2DDRxn35bWnbCwy2fQ4bZV3vXaBpmAsZ2UehPUVtF",
  "key8": "4HWVrM4msxtw1QatmNeTidHyk3hx1NU8XUk4izdkVcx2JvVE61Jze3uwfekdN4odAAysLMrp14XyUMuvLudPWhb3",
  "key9": "GcBFprpfnY9YgUjgq89QG7w3rzEaX7zsxHncxpERgjGeYQqqCQXoR4AiHAH8zexBC9XFF67ostoscHPVutk9mfB",
  "key10": "e2fJP66TqSJDoP98cqAXKHk6uLSpkdXvNMdZdVDw3rNJNzaPo1pit8KsDYqTvEJLx4kx75N43iC2EajS3j9z5JB",
  "key11": "2iLGc9WXqu71GLyMekR5Lo9xsXXkuSMvNovpr6YjzQmRowGSTBqhmPrpZBqLyAgnp5cM4D6YPRy2biVuGezdWQ1j",
  "key12": "2zYhLx7y4SafDCZcajR2Tdw4yvbEdzfdvsHsaw9hUJhP6h4mRy2MTpeSLNYCsYh2YKumYjfPPdruS6LiV3XV1FRF",
  "key13": "3VbLjykM9BdLTr7W1NscsRqzrdSWrj5PDH2kdMm8cstktRrj4rnUqU5D6HnrB2eo5PhPmcbeufZTikXigHmFjxKT",
  "key14": "3YrDH8UtGP4X58Z1xw6Kjh7Z2VfmuCMQBmzahDydLLHivsRnkfY88Y1j8CDo18edUGekwRUW3eNhBYuE8syV7nC7",
  "key15": "3U8RwrQMNihpJbjTpDo1NYFha5PigKsVRjHtDAkwudxraQ2hSYkLCVwW2gzdZHmWCMUc1SDeN5mKbGsNohGuLqpC",
  "key16": "2DABXMZq6Jbszsk1U4B6jQDdFgMEtygmiRH3SNoVuUYksubcC1h42HRzypv3shDjkFqH3PJ8F5gYJvUFCqCAtMbY",
  "key17": "5tAErR19mkKEW9i2w7n5S4gcyaAUd7asEGuADgEe5RbLZLqt3NWTwPxaRrZ3an4L8JUGLsjR2s4aJGe16vQ4Ge3V",
  "key18": "c4oJmuL8EcMn65BWhK525GBhtjk7ksv3ZWzYoUiBQNHfGpRCHhsbajYk6D7bFJkP46ABAYMLeTgjiVxM9APRDed",
  "key19": "3QPicXigtz5qMthsXxb1UF2ThdsqrrvtXaAcYDp7b7rRkuSYWBE1ErfmksMEy1VaqtQDLQmQFSA2avN45v1iBsEL",
  "key20": "DB7vtXFHWvCF8mzKTiqjxGfbt8kmdC3SHuHovwz91dpu94C3xfQEvvLXPgrz1yeAXRbCRa3K7Ae5N8rWZJXjhv2",
  "key21": "3uEUwY32MG43e4LRDatmC6DDTd4Te62PcK7pKwQw6Gz3eqwiacbR8pSK85KLuy3wP498y6dXKQsstm56PHBNv1A7",
  "key22": "3nBFZ4Tm32b4cgwAHerjAaNY2mEkUwfQx3adNo5a7x82EnpZ8yjAEEwkcmGPcR9MW2YaHuQqNe3cGPLetSpFFM8U",
  "key23": "2rcux3AXTCuLrGxbSBg1dc68iyKMdWcMrSmuDjK8R4G7sx9Bv56MSQuZHby47ka4keZeybhcFd3zipQ1EcqYWUMd",
  "key24": "34gNWm8f5hGNETVLoeSnDosRQjDCA6VHPWw14wTxjtdcr765ijX7L16uPp6wd2pm1ujymbwqChJJ8y5dpS5ugL5n",
  "key25": "5KYLvjxYnywzb4ewwPEAgae5RxzAsSaG3VkzgDLixP43L3f8wWPuexn1kQe6qdh73tS5HoBbwiKPD8BwbHYMwK6A",
  "key26": "3AEx78NTww7upEdgUJqfctPxsW4joeFAhtJqWdrzmQkxp394rGrhBFNMGBv7KHx4mNbPPUWqpMqU78sVky1PjDk9",
  "key27": "5zmD5YT5ojoSaowvw7YtmMP4uZAnBNeCY8QmHxR555nNLMG96tv9ACSDRLxJXHhCbABDWTVZK38T3WPu39AHMsv3",
  "key28": "4NvfqnS7FgDL7CQq68QU3Q3utShcoRZbZKiB8dmTnxRC6HzmZtJPuYfkv245w9VhyyqWtUbooT7gyRLiiygPadE",
  "key29": "2zE1cS4jEkjYGgvWmiSCZBMJoDvvMHShMtruj5u6PsCP39dPryxY4ZbJoQTjiL8sCN4Ggg7GTokGbVL4MRPs4s2W",
  "key30": "2EfWUaSJkbKCjCJj62kW1mNhjh7pFC4FCUzeVGjiGVNf13kcGa1KG1fVzMbHPvcottWHcrPK95YYBXte82Ztwdk6",
  "key31": "66VAWNtTVeCoNGb6EL1JkoVMbLXe6nXmtHdnkGLARnSc8CvooYRa2oxuDhcFJFWtrFiZR3bCveYy13NcegBUf4sM",
  "key32": "2t1jM6XbN2127bzodkideUyHP7Q5enorhCsDB5kJK5Bq8nMjSAodtJ9JZiq4rKF3cvGgDMguW9kH2MGowxiKQ3A7",
  "key33": "3tHvkt8mGwRZu2nyYrkqebVhD96wRfG2bx894pPtfdTMmaUMXvBtiy9yhCuz5DgHfRLqyWQqLpJoPs7izLCkVjXr",
  "key34": "2BkmJM9eBQuortP5QqULYu3SHFJ1DnLiDFYUd3MmLfAdLdvwEfQuAuRz2oCSDgN9x8vsX2jCmtBFQCyNTQiGj2J9",
  "key35": "4PdJS7xKXwLPUAm1gbksWoKX9fzJydfwuNqfDee1VMewqfNmPnPeb4Vy6QHFThXMDqLMKDcAGc7NGPayc8zKz2Bt",
  "key36": "2ycsTWAiz8aWiJfUp5XWQaNnbC37bs3RK4CSHMD4kqFVX2dxcCVJytunwMDkzXG41HXuKzPPq67qN5bQXrXxAQKk",
  "key37": "62Pk8nr2uEnMpG1fhZVszLvJuy5ZrtXqxRFh5J7k3E7rXJFMgtt8rMverQ4ho9n1tSgYpeRSYpPMXYcXbpie1quW",
  "key38": "3eg9EwoukWsHNpRAw5D5Syif3WYBs2rV3Jf8JcmNYDPYSVfe7nEPAMtxyxaeQUyXFf3sgRCUPzGqqa1gir22MqfL",
  "key39": "2YNfXpxsFfoY8YaGjiBvDCWnt2xAUSfzoDnDe8nwxZboJtqZSPNcM8idCkpE5NnAVt2EBNGXoAssraKXTSEzFfXX",
  "key40": "3DF4Xrx51x3wCTnJmhi6dGhGZ93FjbfiZqXxD1YwRTcKr5xuWGY7FdygrxkxxgWzihSwv8aTkabgPVozCySgUovn",
  "key41": "127nTEWLiNf9DTKiF2HgquoiFgtYegHrX4W2jS8jVTwZHebNcKqtPth5sq3CLPRHkDdsQP9t3aA1FHUCwbQmpAN1",
  "key42": "5R2UyQ2C1j2UEZNJrKL1MeBGfrU1GEotqmwBdLzRSui8BJwNc2joZ76rpiaJxQGJjzHXkrsZNm5HfCo5LpVdci4Q",
  "key43": "5uDNcNNWAPtULWDDm2kDhFZWCHSqjt3kMZARhXuvSSwiwwQpQUiasHeHSoU4tySQcwYPGcpjG6m6WRzNNkaDAxxt",
  "key44": "2v2mbwAxjZZVteUh483ihWRCqmDPPujbjkvdqnZSuHgz3Go62TW76QqGeFR3HEyKXFWG5cY4cZAePKJFVP436Fvr",
  "key45": "2ZQqG2GhQx4HuoLbD5gk39cCXpUMyQoheNEcGVjgHxgYrpSF3i7gcnb5GggXqXDvdjdQNyjkwqzLKV6iVJjycnt",
  "key46": "38AZ9QHVxK7nH1vutimfzZPUJAqpLzXKtvnZios82wiELWhVgHyuNiJYtxdmh3iwyveMHF7ZExSSFXLQLqiopzTa",
  "key47": "Wf13PaSwbA2CXcP2PeaKB4Z1huWoqqEE6nD9NPFqfZV2GnQt6pgvZCrsFT2RCpcVgxtdxwhMMQyiYcKadUNmU7p",
  "key48": "28i2duRYevhmqwjCHawy22PGczPw7BuF3VCRDE2F5rL11mhEEkicNd5XnCbeAFhaF46Jxuif3L8pMBwU9kC5VvMW",
  "key49": "2LCMyXkuidc5T9rfCDSJeV1cgq9iLWM7r4BFQhrGoSbS2tB64MriVPk8qVt9Y74KxDUtRDTXaJB3KBzkbeYRAUdg"
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
