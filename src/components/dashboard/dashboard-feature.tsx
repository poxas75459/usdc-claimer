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
    "3QVLrb6bT61RQ2Lk8znRsbZkNDgFgzrMTtafxfoUDm4J1GAHWMDvKEaudivRVSPvacBPssQC1pfTDdVzmvmQHrcs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QEfXY1r5z13nZpepd5voHFuQu8gMKwWouTUtWh1RYkgEvWiwyFtVPiLduQc4QeyojHvmzSUEPoE6Ha9SCNPYh2R",
  "key1": "3ZYR1Lh5iVqFeL2TrwXEz9QQntL1Fr2yuCAZ5Zty5dWMmQ3L2qzWTgbJPvXYQH5hA5TVNdV8D9L915d2hMHYEygq",
  "key2": "2FhPCZQNLzqM6Wx7MbKchw6ZgJJBGS3Lu81jk5RKq2kytAWBkVsxWC4sB399wktpsDWKFUxugUKYoKvxSfUkso4X",
  "key3": "429BgEqgcoSsP8rVCSDFNsi43VR77uAU3faHMvmhjkpWDNQsYisdBF983QjToFMYTJwvgNfZRur7jgCnf7tHxhb7",
  "key4": "meVDrtd8kFS76bLNthRUNTMBp2dmyZeb5HN5SZj3hgnGCzYhVv62Y5kyUVpzkFxXxPoJmek6hB4PRMiRwoXWxyG",
  "key5": "66tBgixtM4RGLFbnozpftgGKNpGV7vnL9fofwGrLVVzFMGXY44jiN7t6ArgNvJdWqo5PuLdoqHmcFoMDMThAeUew",
  "key6": "4k6A8tdQa9PLZvKADxRZXwt3zDGLeZ35VDA84FvMBLshHKXAeHr1JYf76tYHaXNTNFpHUHVLhUcpTgNyuYSjzaQy",
  "key7": "2xWkDviZtDwj6b2KveVfooyDt4ZNyDqem41ei4HwCdaW4hzEK9BUQBADqSEMCqX4N927Fuw9fQ8CGXGG3HCGoZiB",
  "key8": "5ARUjGkPtLk4BwmKpFFPWXAMzY186CL3X4Ee8jK9WGLrH2FgaRNkZNBAYJYJxDeRws8d8xcJK8kUCCjqELvg3mAR",
  "key9": "4cMuvvQNN7bf45JG8doqKFppuQKybX8DSkKPPhQXGkU1Tpie7GFpzneCgYvKuLJUVocGJEK1paPkNp2sGEem6a1Y",
  "key10": "5YKUXFDhVwEczSPnNbtabMJ8KTbwr5ondySbCAZ1r3Rk9N3Wv9GZhsCnWj7zK122Y2iKZk8GjTqHWoejp5QKUgfM",
  "key11": "4D7usqkuvuNfc6oaQKigJBtJQu9XPZNEHwP8Cmsa8fMPAwFURRdAob9nT3nUdMFSbzDaNSBApYDdbyoViZAYMHo5",
  "key12": "3BZhKaM5BeKWZuttDa4UpCwPSoSudJDkGDsuFCKnoUEJVWqEkkU2FFw1y7qXBbcgVKk1Z1wsaUNYMnXUyZKefmSC",
  "key13": "4ssJMmNtiFGFrL1uYy5UshUK243QZ8ehcc6bs2XtssyzAfnWHhqa6Qda7cCvVn2aiKRFZWrErx6d9XazmcqdjoTo",
  "key14": "46TFehAzQQ1MhdAW3MuNKAJLExw85ttH5RtBpWu9aVpQNMwUYj9SmeAW4gy1FJQ9yAWH74wr5FGmkASXfoEueP9F",
  "key15": "5VGUNr86hTfrx8JZNRvooq82SAhVU8Sw66m8PtfH8iBQwMXb2wx5SqCyzgmQFFRDKLprQSAXXKJtur277as8bfPz",
  "key16": "3kzTGuXVmxTYVqzmHnUaz5KGouxMCpVPHMwBRWVeSXP37TYqt5BK3dTFZYUL3dmUkGapWQid2RgCJ7t1Rc8BUK2H",
  "key17": "61U5K4tW4vRU8rRBpHiEsriJn9GNa5nGSoraqEjCHxBQsDFGNDkgBBctt2pYAXSSn1gmqjhPgZLhS3WyPv9SXkzv",
  "key18": "2ZU2GJCsnkznuwnZ3fJ2fnBR13XGrbEKhQ3o6833oksArmdcakMJzaJbKvBgGtW9yTXmTzxc3CpCNMSXgyhPZEF3",
  "key19": "3U4SKd8LisrmjEue5k8if83E19JjL6XU93x6BCxqMSYCtFKU62yr55zXytoZyhigTQNf1Nh61C7Sj4Zx2j2LHdJq",
  "key20": "5Undwdd6uzkEsU6tJ4LRoKSzSmRWgLDJ38H4XuwdfnEG12AyhaRvt1D6QasiYxMNHRtow9QP6RWq4zKQrxo2E3CX",
  "key21": "3bh2EDNoemTSWYJuvadPXGh6udb4jimbWreoXz1rv9dUu4Y87K1jy6X7xyYsVSLh6u5kvaYg1wA68EWU2kygREGa",
  "key22": "3xPTC7UhXY1Q9KnmEssJU6xxty9HLqpH4siEAptu6abgE2UuLbe3qZqkmLoAtpUPKRiNVeJGNvUyURXeD15rTC8A",
  "key23": "kjYqShr3Q8f3o7uEDjYaKUV4daTcP632CHDP3gqbNojb69jyyiU6d2uRHvonjYVzJzkAWzYDmGp8wqvSk4BukMe",
  "key24": "516fdsYo7A2QAAdNDYALRK3DeQAu6BGU5qjguoyDjjJr1zeX9wwpkseg5xcLW966mfZWWcK2CtpWvdEqAEWXajTb"
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
