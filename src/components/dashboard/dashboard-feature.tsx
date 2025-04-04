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
    "u9VCWDqoCdUrHt7NwB6TS2gdRDm2wHgFHuhpHys3q4ftya3DJV49r1Po9gtV4QPqqYW86mnaJLiB1NMJQZs2184"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28SnRV5qUrwtXs2aDLUnU8wP5aCngZURhB5p6uT4bhYtjVYv7E2akoS5MDRpaqZgjH7VznVQK61q7q1sptvDgymS",
  "key1": "61b4mAu3FuyAvdp5XXtXPXa3Vqc3VES6ZFjPstvDYsWnxgTiczGg6J231MTu2VvRViieMbps3pshBL7QozWHCJgM",
  "key2": "3qaFxMktvts1XSGE6j7ZoXdRnxHSyDkqoNHDqVKvf1GDtczu6TyXJVDJt2kbzS2btYf8NtNxhkh84uXEzMd7toZZ",
  "key3": "3MQM74sfENSUumL7mCDP7p34AFNvPnUM4Nk3hWCFUQmNzE8oFsuSuNZZZyqri7VXq1BEChiAehuepwtqPug3RsDC",
  "key4": "3A1QYgmXPQY6ok84YD26LrYQ5Uug6EtHs7gp7JyB2ZonSbtEdrcojo2wdtvgw9EgWHQH6oiHarhSJPbjMKVu4msm",
  "key5": "3SJk4G8CDcPCFiUR1UTcXBt1apdk8wqxJKWgsMLSHBBz1qbWixMEB6ULZ6rejyUkfES37bfkgAPdTxJjAyCfqFXd",
  "key6": "4RiC2BLeTqECjZkf64DsEDGMbr4VXtcx6Z9gCQCJ7QMNbGbA2j2ZMYxXMWsMA2poYTr4HTckvAA4LG8TMVe54mbk",
  "key7": "5iZwRZKo1QJk1ntxeDaSembDYJNtNRqApHYro1xPEhpS1M4Y1AFoum7zY8cv6i85B6BxtQUnrc1gDAtR49im4S71",
  "key8": "59djVSXAYLfKSdmV2dTWxkV3Ekv6oAyX8Tx6J46WPS5WVNoJBThHzyn9pGfTmM4UGEqWx9Q2n7jizpCtmpkZMN6P",
  "key9": "4k9LLgHwbcC8sVDqg1Cd91oG8Jc5rAs7eK2mAveUy4mYVuMDa1q8L6YxNpoz5QQ4DfvaYWLuQCVu2sVEcJNfwzE8",
  "key10": "2XrRcfn3315umiTQDCYAsPb2TLLFezxkFhamjNNEQVisHsMErgAtFBaM9J7DuYsAdcxQjyj5fto4gJKBMH6d6uCV",
  "key11": "4RdDEmTZYdCcMErp665RiGbAmiLEf8sWWTE7SA88p7JEwxurnUeaBaHzhv3sb7DPB9XfqDwTARq2WrYe9KqXFAvS",
  "key12": "TxPUAkysFoY1cxNWtJXtaeZjkoWL5FTtjTDiLjEmm2cx2ce4rUK5Hr9kDuqyBynkmXWzvkEPLCFk1muJQQ8rj79",
  "key13": "22BMDSLLLQyXZ5epmKABjCh8cwGuw65RRBKLzBS1jeR4Ed3mbETQkwym9uPV4UugnW4WBmJ398Ao4R7LakAhtyzv",
  "key14": "2pKt2au6dRmd5mbWqZAT5ZseRvfc7edu18v38QzEawmaPMR1iyUAhrJrKfDqXgeZEWmmz4Afp627AMNgmv1pqq77",
  "key15": "4ZAsQ7v9qaic4rJtU5BuTAhjSB5kj6Ye4U4qTAfW4imraYxLQKzhAmG9jew5ddtFpTgjE6ZDFMkepYMHv5dqHiGg",
  "key16": "28TWGgVEU5cfNTAygRwyseSZDRAADcXt4h55Y4w4qj8QJCUs8aJJHSSyhBJQf9YW1bazy5RXNSRoxMWhrDkux1K8",
  "key17": "3CCenU8SeM64DnLZTpZGDjVXNMQNG3go92UXgcsjt2jtgYVsRzXhfy1E9waPDezcqgPny6bT32RsNdaUTBTCoFiC",
  "key18": "3XvGDaTiDtTG7oCtwLVEUVWCPyC9E1NM6PhbcfnEcxHdfHPtY58GPSYFrjPBptQV9VGLKnzixTYC43GEdZ9Yye77",
  "key19": "47KDqXhnXF2cmbTodJeDYt3xfsnjweAtopLok6yLf9Mi2nY3KqEuhXPGUxQ1QYKBm1XnDyinZkZ7HxF1fkauehXr",
  "key20": "4wKE2keVgVFviMXTEbatWQC48ajYBRV3AdQECXwWR4pvGEsJbLZCWsKxjnLVscfW4rpiEmdkznmxvLvedxns1FiY",
  "key21": "3NpJJxC6ACqun91XNXyfcs44z3VcFUZ4BvtHjy4HkJJ6nfrk2mXngt41zHN6dk19AW5YFMRZgZmXxJKQAS1fJgx2",
  "key22": "49uvqvkGPyRq7cNjZFHhYkmfzoEh7fgNhvpLZMFnfS9RgZVk9X94qhiLfDS5C8fuXAeTwRDco539uvbxmR3URyJR",
  "key23": "35qv2k3xWLrMHbo1XLht1oT3MMsjmQ49VyTziL18JWBuH9vnznJCBE3imutoMopdtrRCutvpU3rUAXbGRXekH6vK",
  "key24": "4FzLPcn1pHE4siAUyZN9jGU4uUH6gXedyLQMJQQshjahc29y8WkK84vQueprnwLTn72wjUWty9LW76AThaWoGRVa",
  "key25": "25D2LBwCWSs2LSsTDu4janLCuhTkBVHNRvUx5s5qeZ6mngADZsa6EZVy9xdzqL7GXXao2UUTiH5WgfpaiXnHhPEH",
  "key26": "4FmTJtLubxBGoaSfWbtXu5PjgsYNWBvLcyCd1ptmovmNyoC59am9mGbLzUNw7Vefvs2AM5zMQLdFfjyuQq4MsFRu",
  "key27": "uggwA4fAKL1BYPMm3PiLctERgCys6aRxV8nb2aHx22t6KjnEUSrium5N5NdugLuH6uqUvpyjomGwR6rHdREJihw",
  "key28": "55GZUnVXjRDKTZ98J2KosE3ZV1ABHjm9zs9RPnMx49yZbCwuD7A8fkxNdC7tWjRFXL7qCM2Amb6DSwXs5Uf7X62n",
  "key29": "3TNqHG8TdVtxdVAfzJJu9ASG9CFfQaRdnspCzYeYCoMceJbhMSsoBEXHSeBkRv5Etjbh9h3CthKGm4cRez6PCM9J",
  "key30": "45wyPJKSmbNrKsJdAUSS95XKi1PnRVW7Kt82HAi9DdmRsauobFrfx2d3fgAHL25agcWkoBAbkbUYTDjC7FBruk34",
  "key31": "HykwZkpqEzubVCmb7wcpVbL4dbj2jr6uht5Vb3wDj7GdRWViZetufj1tHJgtB61DWTeJGV1HQvy76ib4RHcRdLA",
  "key32": "2hgz9iUsBHAnBUV624UdPiR4sN2qvpQenoRPooBwALtq8BBWdNXMRRjZfhQ4eCEM7gfT2pqBNXoBcWVRVdZezpQj"
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
