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
    "3DNAGu6czn43BVA5MzmnWn1u7FPTxMz9BqHHeoqzcZZYdjBdcAxQQjY6vJHk1r3pKdPzkZrC3a2F7xiw3a3ddy6Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2UiPcsWHEzPa8ydbyNHmmrr2ELtJnxyGPUYFGXSDQk26TLmmUqfXiR7htMCHmNN4MJR6J6TMcDx82RnvR2JspkUu",
  "key1": "NhSJqoyAy7qPZrrKC7UvFoK7nSBCW6CNPy6UiXhidUrw5xr5VqsJxvdGoLB6oqXEw5Y59eb2xWzhMRHMhcZxyKp",
  "key2": "2ey9jCLPvaxn7tB4EAPAQ3UY2P3eUahMCFeFdD6TcmQFuoRo5PDTz97Bmjq3uSWQTZN4uW9GwYZ8ijhGJg3oP5P8",
  "key3": "uqgTzbdkUX7PnWWQDcwwReMRZbqCA69kQinL8miS3kFpDx9gUuQHnaUeMtmQbzjmud1DPV4iwEY17m4LNxhg2Bk",
  "key4": "3wWzvAkq2iVC3E5RXMpLtkGdTK34MZS9wBKVpHEd98nrXF31g9nUJPaHvoTfC1HKq43iJ6tCLMcQDYFSSTkwSHru",
  "key5": "3cpM4XqoFFP4wgLk3FvXYfAhankPb5NRe3qjAZgr1UCjAfEftxUgFEHEfKi6BDzXPACh3sd1NR2A9pPY1HUabh2",
  "key6": "3vXmokpb3bTud3ksjvWYEzFALYdGo4ANCLTq2KQCqCzbahyZG9fVtsL5JNsd99y8A5X6xDn2CqFEJjd9HtGvMxkv",
  "key7": "2jaWYuZW2ivxa662A4orVxFsjQcZCqPbC13Py27V8uvBhW6xATyVDJybpPZ9EgW475QnAHXnZubT9jZjqdWotFnR",
  "key8": "iufDAsTDwqSSeahFa5C3xDGcWLmzyPB1rETRx1FZPseaw2rrpbKjih9D6aZTbJfTYWjh3zSoL8pYjAmACrHkqH7",
  "key9": "42EqFHh1mA2cJCEZ2rXXSR4LTTVXdGM9BCpJq6qH4BxaGheGAZ9k4hgRSfSfefa8BHTiGEa9vYtZ1b46ByaDD3zp",
  "key10": "3B6vBW7Gks7T8zjMgykzPaB8drWbvpZcdSQ8gg1PfYakLp66DhgphcsC54cHW2YST4MUPyy5Fz3LMNyUVyJUenyN",
  "key11": "42DxVAdXuHE93PiwUz9pbFhisAyM2gHqC6CY2ndRWtdjDdajJzUgwvTXr7Wpu7rsQziCK1UWJChYoEkFPaT7uugh",
  "key12": "b1v4mwgEwoaP8cd1C6jLEM7arByqgsME35RX2nn8sEHGngFEdEzMTt7vk8HK4v7n28wt6sYG6BmBcgnDjkZywys",
  "key13": "WXCayYnZLNjfNsKcm5tsqNDKxdUXVGJXkACHZjGbV2AwTm8eZ7x32rptx3Kiu2bSPemjdBGTz5JT16bUYtDRxxb",
  "key14": "4PJVARAjtsB7m6a2Y96qjPHB2FuBrtqAyRy9USdxD4G2cyzVMbZwHP7jtRKjTftZ6ankeXwcP5EMgVZFqskbR8VR",
  "key15": "43NanrcHT13iE2Ezb2oLM9gPA6qLH1BSmuqBNDpBc2p7bj4PdamLyA8jR6vFiQSCoE1AoZBmadyba3Up6KqqdmEt",
  "key16": "SXQ9UrbhENJEMZa1P4z2x2wms9QEHZCf4TmCXB8XiqVbFHQpsnpdzXTRW6cdMKxvpkbGR44LuAqJy1Ks1oSGV3H",
  "key17": "5Dhjo1J3gArTJcvyYcHuLWdLS9HJCPtaTSaKC9emG6D34hfGtbB5vfgxy8QQ12Qg153QYmNvSVGjVNXcHUkooVec",
  "key18": "JQ7d3gyjJK6snpT3k2zQAn5YNbjnXTbGd4fNHGC6Mi76s6msb41rK9R1DgCo4QrF1tSojuzstx6jKDDvou4SycQ",
  "key19": "458dHWjd3bu45efsA3gEdutiCZXGsPsYff3kBPQGJejfZGQGsBMwQBLPHsf8HeHTA15fYjZJzb8kDvEP3BKJapg9",
  "key20": "4GhDKq1MwpPcZxgPgX6TRBG1DXVisqff7Wj8GTj15ZMUBEwgcW3Ec2RwJvye8PH1XbGKGAgaHJ6ejM7JYigYwSaB",
  "key21": "56PqsRSCn2jh2QTekq5RP9xpsRREvzyWrzVAqUeDzih8HFADUbithJzVs8gBg2GNqwKELeSySTspMbNoL5H2wTp3",
  "key22": "4Fwz3eBMgtdYaTUJ54w663UUMmnwzeApYKvmDoVvhD63cNMJLvg6v9vTCBrWFDkj1Xn9sQKfgR3MxdtSx4MThVAc",
  "key23": "51gGnk4UNWDSgeNwhAvDxuYNZv2NB1JquVfUeZtjzC7PcBWrStwMkfYHtiq2WghKZUJsTLH5jKGeYYj5fMX5EyXT",
  "key24": "2wtHdwdVXzdeZEey3x7sDb11vUfbPbTBpfpgoZgr6iMRCi7j7k4s1vjYSspcesPVYTmbVU1EQRTToJ5vxDiBz6oY",
  "key25": "2k8istRPsVPggj3XMbP5vQm8vCZAuvE41iB5Qor629jJtWBmAD4PNF4SQNXnXg3frPo99Yt6okGkgKoyCJTmxmef",
  "key26": "nyUhggSdiT12uoWFHwoinJLqphsLstks6A4iDgvxncTMP6LSn8fnoEzD9RmtqTTg5KjvG4MfA4T6aEj1NnU3JJX",
  "key27": "63aHGjMxGUvftixU7N8dUY9n2XiQYWVueRDsCANHdh9cioYZEfAfxgAAnVsF3vki9WodFt4UC6Csi6VRKY3Kbpoe",
  "key28": "4xQikn2c47uDccvDVW7s6w8n3AqXYC16nLATwkgi9AoFc7nJqqe6yrb8s369DyZNGPpxxhaNSygMoKuLBWRArmE8",
  "key29": "4SguaLzQ8pJmKdCoiCByyFw4CANG7wsA1DqVMKP1cnUNS5Z7nWieypvon5ebYKqHPe2bGDFutcXgUaGfsD7UQGtf",
  "key30": "5hraBhN9z1vNTwKEVzTS2MtHpXUkQYg4TLsypUuesobCcbKd2Ro4mmStqyK254JNibWa3wRHN1aJdYdwqXcmBwYm",
  "key31": "3mtMKWuqqFxUGv3TLHTb2BW1fXRZca5oqrptMabdDp27LF4bxNbbVT7z8VDUnLDiBymj3ncg7tGG1v3VsBPLn1BW",
  "key32": "2cWjtM2DioLYx6QNobVofqDscno3kFhqpBXDeVKzWrw6PVa8Z8NwuFg5YV6FChSxFkF13YidE69kjJn3tCj6DHzA",
  "key33": "2d52Cf4CSfJDdsW6AzCr6Sqe7iYEFVmLzkgFY9mRKv8XEnvfbz6SvubpTN6S27TiPjALsTsRX9fDQnq3eKDGkoDR",
  "key34": "4tUDgwTqZzoamXLww8vEeUJAEuK6wSGjVEySzTkij1WZjyipaTUgb5MHqdssAMq1QQVX7Zbjs6iDB533akBaz9oP",
  "key35": "5dadCeiAFSfQTLKAGzX7Yj9hdUTenWBRTbiouHXujko4gpLTpsY2WU8VJ5Ym8rbbnyfcinN71wW8o9ViGGRTKjPC",
  "key36": "Md264ehALk8w4CkqzVpfYoLkrmKMEd4YuyuUyvxi3yoQzs67FyHTPRBzsePpxM2cLQdGmfnQXSaV6zgC3cswzgr",
  "key37": "3JkjW2tSJbAoSAK6iPBuXoXvRCrhdGDFffwkPBEM1H6CD2dE2isW37upGTJnS5soTD7nYbCuh471MxcJwZPEvq11"
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
