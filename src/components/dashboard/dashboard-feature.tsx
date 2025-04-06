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
    "3beJDci8gMsuvbmjNzK19LiBgWQJgLfATW7QvDy7hnK2vURMjRweQTN4HTPLDbTC3JtDYGDGShfEn8Z1qMvtM2b8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3N6SVH8ZB9NLNmupeVLukEDmGN4FCyucwPE4mYqXtPfyzqfyrcR2yUUgRs9a2Zw7a9fMgqAZ7QG8dNC6PjnvnHLb",
  "key1": "sSMeKFpd5As2eThWKQeZ2a9J6DtsFDhosw8zHtqA5gXpXVgUPQcrjVscnDskKmDs97nmQmQ2aTaTuH2mPhFw9JX",
  "key2": "5nDkAGJHeHNeG8LhcP9PKrkJfbJG1dsn2FYcK3GHy1UsqJSQpRK3Ds14TJHTYvEDaP23JTdQzKqazcnLAneWBwbP",
  "key3": "3rEXCuXMvQdQTv1f6vYt3z1uu8mKhrJGRnhkNqCNA6U8cEnckBrAaNq6whjfVWvDPT2eBWR9v2RDPaiKoFD7XvW7",
  "key4": "2u8C8fyEYAeCprQJ6Dnt7SgxPHkMna31jQWR7mqozrxjz2vHHCN6uwivjkc5UgMHG59NNoBKoJ15VwQcfeMXME1m",
  "key5": "6xHs7ofkU488yUasmNj8NE6h2gSVYjuGRmgdf4KTaTmduhXUaGBzcgaD6Qeh96kctYbJjtx7z5aWoRQWUAEgMmc",
  "key6": "2k7ZAxGmrviNN5w7SLp3iA29sHDsjSeCowjaFvrCWDP6SDLjLAecP1U13Coy2B7HFP91V5bAbRSjU8RtM9q2WxQ9",
  "key7": "4azoocefWSA4vCKfg6wWqjsjqtTyTuuxS9xFST6aFHZGCLFMfZJrFt4UsruxZiSrfJsiBCZCmf3JYMmVrT1eaHdV",
  "key8": "4quhTMmdTH8Ks1EMkL4ifupUmmtM4HpCCPSSevnrUqDqwxBYmMCJRDMuHA48Dt8KJF83TpkTnfeUjPDw19MNdvag",
  "key9": "4yBKNBrmKX8h1XcVg8Ku9b3r1Tzxi7v2m7sua6Ao3t347XMrEmRSxSCe46eRpLMtZ9uUBNQGs3eGSP1xPBoQz216",
  "key10": "2CAjZA6WHN3i1odMRiEeM4VdRwY8Kcb7PggdYFdEo6WvyHWCb6UQsTMuL175doiep3KgAcLHqBWMFdEB5gXSwZfU",
  "key11": "36koGfVvHWtNiqb35qyGg7xFBB2ZJ32S4NZuMGkLN9GiU8dCWtS1hikTuyHLPXWP8jrciUxffSxdpaGBE3LvULGv",
  "key12": "4k4LW7Zet4pcEZxQ2LRwVA8gJY5vmX7sTnT4s4gT448LrbqZNzdcDQ11c6yoqD2dZetM2YNsRgNE1rbbHsy44UvA",
  "key13": "4uHiCrnPMYBD2rpWzFVUWFiznP61mGRJCCP8CGsTrrxfYbke15tMvR3qn29HTw7bvoqMmcbWNJFFRp2Tzc9vpbW6",
  "key14": "3QvWegFko5QzhpmtMRjdhmpnuJ1169LdssTjcn2HSVtuiNwfBWBuwRWBKnMkxut6M8p6wDzRxbi8wZBWcyNcGjha",
  "key15": "3JWQVuixDSjQ1RdD9jkoVg6UFzz8egsaXUM4KWsbyAcoQvXemytvmG1eY5ALfBVSdhAiGAgBek2536mS791JTN3y",
  "key16": "5Kz42ekJvj2AQNHfwqjKuFJqU4fimV9QcwjxHqvctRnDypdyQoPnri3DD3gBnu7QtmLzihogdm4in5Anrm598NBk",
  "key17": "2cCj1JX4TrWJ1z1S7Nohi84nTYZvtcJPXzLvmaEPhqZ9vPd2EVkXZKS3q6j9yCWvXLTkggjRhLJZTvsGvv1Q9SSH",
  "key18": "4rTPsp7YSg3YpzCvWu8GhCTbjjgCkbH3gBopmBoAtPe8uWxMRuGWiKYY11TozWSVY3pDZ22UM513cACdGVBzmi2i",
  "key19": "5QiGz3QBHAkVu3G6nMxNfP7i9ip4QGrxndxZk1wY9fky1TSwtLk6F76pfygJBnzeSQuTeyLVsUuFvsJW1LFrdgfi",
  "key20": "4sddCCrb9AjS3S9N8QMTuey3MzddbP1npWzz9wusM5PTmvEhiMievBGe21ALVyL8B5j914AdKeWbwG1w71QD5vMP",
  "key21": "4ZWynr5e4toSzW5xWBvxEQUdkTkUhotYA8FWZysSdwbYHwbXSW4YGasoSnQZA6pWbJv63mRiYctdZZz3uNg9EizE",
  "key22": "4gM5hBKe9EmPL7L6J9UwBMAprHxXCdGx3su2T7KEQ9tqwgqKezeqo7C8ZxoyK4hJ8kYRFSDxAitJV6hf2qGmccDC",
  "key23": "3X5NKQDms3BpFP1oe3gUT2Fe6G2zd2hWeyGhwkjv8Th3kcpGVRmjFH1EEtPJXYT8sQEsGGfyPsC9QtNge4ziVLxJ",
  "key24": "2Frs1JrGSAuUnQ5XdJD7ZDysrujdPtMVrSQtiFUPXXFbf9jnze1eKt5fWEZYAQNJMdWuQ9Moc1HKtyD4R1XT1Lcv",
  "key25": "3mjyYtB86wM4BHeQsHQ8PgRHJbKDcxFz9cmbMxSKDdd5mMT3mnJSTZ77DGwYYnVMRPomP5BM1SNXnWJgHcKc4zpf",
  "key26": "2joG8EYZRavrqkbCyruKb4aX6VyLDWKPxby31EbfRaLsjzrVsSCvFersCF6nauDnz34UV6SU98tRrMmhG27irjUu",
  "key27": "5yYLYRcuU53TzYqYUwR9ohqm1Mr5xuJnAYmMquEFDrpRAhQ37X4GZ41Yf16K68Lca3Pfd83WgCTmap1JwyFEvmZG",
  "key28": "rux15q9vtc2HaAZZpbzFyconRz8D4hpDHrwsxXhTuK5K74R3oyF5NdFQeHkf6hYiDYrq1UAEpb9TXEHmULAzjr3",
  "key29": "4puHBAyWXnoVSScUQC2LkAd7knaR8yxdVEbkLbYviLXTcVr9DS9K8TucPyKvCLGZtEqjsnpbRmFFdgKNVeZKVbKR",
  "key30": "4XaB74RYyG3W7mBouJgJJ9gsNcd1YcobXKbbhiFzT8yo5JWiFosoQfUR3JMryPXoCi5ETjejrQb9kQzyyjubNbQ7",
  "key31": "4cKgYvGAHHsTtp8DL36FNudmLG9LtkEto33hq5pUQvRERskXgPDDsLspaEtsmjiWFpofZWfRT2DKSgagk2kWNAiA",
  "key32": "4iLkTKbuWbXsqD5Ts1Yrvb1wfQG75E2PcU7WsJu2gtnVU92gFtiyDZqMw21vPyWmoJzawHPVMREML6CSbZehkoDw",
  "key33": "82i7MU2o5RCuBjpdxi1Jz83T1jU1NCAfdWF7MbXdLjnfL423AsKYmseXp8V7PaG121L7E642iNH2f1wrvEWgjSC",
  "key34": "sGKhNLJpfW4YRPMzcef4TkzSTuw9XGQqGkzgNx8fwcoVs6xYk4fQ3Knxwe8ZUiTPeriBDaveChDBb2HbLQV8EP7",
  "key35": "Avq2PtxjCFRszTVWWxu1pmBgLkxk4WAt62HvaCSDN6S7D1mzU6Eq45eLRtp8qv3mKXsFgpXpsJnkJLV9Qz92Kaj",
  "key36": "4rhzHVQMCguTUvLGibo56YycJKD3b1w9JZMF7De9nXSknE2Ym6nPXqLGwQjDBTtFKuCrEPMWm5SZg8Ah94CemcEb",
  "key37": "3BAQV92KE5KNjVGdsmzcbT2y2fyt5CzJx3eb2gh8yqMPXvS1ZnWrL2X7Sbyfj45jKCC27hzBmSwNvg1NWANGC1gB",
  "key38": "2LMPBpKHKw6ci3qK9HmfuvStCPUA2b9ms94WkdVbtddnfVHd74QktvkWLBbnUFHW9APmdBuTUaozU3yozbyZDzN8",
  "key39": "3AKsY8w3mQXf9RbDhp8goKtyeL5k4bu1bsyxX4U7mhSgeahfn1v4qNwqLz4afAGepNAgHhh919abfu6q6cTxMq4S",
  "key40": "4Jch1V8LAH9CXErYY18cf6uDVHaBqhVpEHyXBVdNfMW1BbXAVmZDRJG8dunS5GB8ZHpwnRbEtdzGnUaDLycisPp3",
  "key41": "4H8QpmkMuEDg6HqwqdhmQTASfR6L6KKgYKJh4Cyt114yprWNRjJBaTWKYtareYSks4ZGyySrG1BNSG1X1UvbGUEh",
  "key42": "4u5ARA2mEGgRkgK9iTiNCUad6hMB4PAvfiTR1iC6syJSiGzjyFNF7KqqQWW2USt2uqdQqrVLxaYXXdK61M1wj7Bn",
  "key43": "4NHgxisReCqGSzBf8JFBJvy1A83DmM2LzpzeGT3aMQz7QgvMQSkH39STRatR3WnHUGtBFmyiUmS4C1uYc3gwZktu",
  "key44": "4pG8WY7Gy58g57mTUu455twYvS9F7T8KoB3wY8FtkN7TfnKLPxsJf2NaiUPM58C8841B9iCAxPKSFRqYoWNq9HqQ"
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
