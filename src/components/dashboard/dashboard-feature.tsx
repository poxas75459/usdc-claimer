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
    "4nMJLw9usV8yXByWqSbnZbr7dV2tfbnoWiuX4M3JK7YCQSfEUvYZx8nMbqZEcNCiXjdytf75Ln6zgJk6ZfnV7HEm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GeVxaiLfiN7FszL2z3v66fb13cSPAMw14BQcMRFhRhNRGFoYNs8e6XRBTBda6omMGExaLw3PyQxzQ3Xnvy9wFke",
  "key1": "7fjsLsLa9SPPrGTzWnPG1spSyn7zFZUn4iP9x4YN82kuvrFFohkVusYwxCX8BdyuDd7DJnTtP6WpAWuWfTmG89G",
  "key2": "6BKpzq7xpmkTkZEwVt5H6oUXMDhcX7NcK1odzStKsvofsqNC32j5GBsHRrfQKtLxXVFqRMDCLTPQLvGsbtRqm1u",
  "key3": "45RkCSSzRhtctXZQ7krwf8P3pPca4iNm6aCk7vXxTNP5jA55YN4z8XivrE7QcRJwRDQB7HANfJv7nkGg1pGpwUws",
  "key4": "3RFK5KA2cqtKNDqPuhn7ftJw1z8oc6G5Y2VWBz8oygW5qTB7zHi644d3eSd7FavmnPS2HLyvLYwf1UkhWhEaDvBj",
  "key5": "TTDXTTu8hgqYPb8eg8QmbF1MbBTfFGKRanTt8NUgmpJYun8TPvRASnyfRBhLyjYhFKkJUPaSVxMjpCAtchF7Nfb",
  "key6": "5i55eGi5pbfauYrTMXyi3TihugYkBBkMR4hnhV4dAN5LeULjVTh3fy5SGkyB8MXyQAdLrrjqsvnr59PcrRABZ82X",
  "key7": "2FpcP1BuyChX5myhicsyxHWaChJpw2k5bU53BQC14bYFci6DdnZbPu9iHF7mZufDFCZrX8fPX6vfLmDnxU5cBYVq",
  "key8": "3MjWdQf5CrYU48vPpngSvb3c2XtcTmhdUvjBtdRqDvndAbG5KoCxXw3Qy9DLxXG6nXo5qDjbDdpW7CxaTpiG65GF",
  "key9": "2mr2NowQ6dvX7EdEPUXFUs79R8XyzukXm6U2jQRBTuaFVTToF8ZScU8gfcYBSLS4uPTSUPLbUg7rodcTQa9SXC7R",
  "key10": "5ZL5mJAfdxvYgiQkTsRGoGfcePMc2XSr4Z7rRWbv3N5f57CYWJ9ptAU2HXL9j7tkN6BrzfcujBUZARNjLz5UahTm",
  "key11": "4CxSbweiKmj8sb7Lsj9GDGLJgrSfSbstKy7wgsH5jAct6bzzxuCujCcYVDmJa5Mwgsn8F8vSkgtApaUCmmgN63F2",
  "key12": "2wZYtbdng3V1zsCmzo1fTaLcNgfNEiBWVi9bkBfyMLqbGzGtREe6Gpz64YtM7axDCERToWRvPCuDC9YAJM54SPzT",
  "key13": "4jREyBfsnS3mNmRPP8rneTU7XL9ZSpmgVV1mo3cs8MeApmSr3BMzoeb4DUneJ3ZGgAuq8fDgN93uhFATfLKuyZZD",
  "key14": "4sk23UuZFk33rTgeVBxu4ECStdax9tAHSCQ7mtkTC3erp5Jcz4N9RCP4ETvUPPKCNpfhkrFBU5L9uxR8R1sviygZ",
  "key15": "2PRsFc47RH7QyWFNpdSTkxucoxTfJ7fDpd98K2cgiHbfNudnJ3Xa2bbja9xQpdrkWiUTBkr5tqzR3UzRELRrSJkM",
  "key16": "3LkoV1nhsFWXJBj6a9Va8TWedARRVTpfaAPQReLz2ff1qJGU6bRjGq47PUHr4y3QLkWE3eMcqYb5wGEeMqHJUUGZ",
  "key17": "25mmT1Sh7ZAFLsrHxDBvFtew4YVr1DJ9YUjrBHcH65u7A4q25L1aRFL2VJTLd6voWpdKyYCNE1hsUYxrXSJc6hAP",
  "key18": "vQ9DA6zKhEEpMH8SThPUCUi47CX328xXeGkVraXK2fjjAAB3xvfyAt3tDTmCayF9puCNrUS4td8tzRyYKptj8rY",
  "key19": "5PARKv9E1AqZ8zz1j2Q8dkdPLCFGFxC8ZskoWZWt9dWBtRFJNiMKnc9Nqk3nkdwxA7B1vpJufUC2VSbP57Y4ECQZ",
  "key20": "4Cx2k8smJ7EkxFFy4STbpX1XY4efVsYJRVfGTcn1eELnWcVq5LHiL9DTgEFHqazAsCeXDpaTduTbNQjGFcdrCGBi",
  "key21": "4F4jiDiDqkGjoeaaCjZz5tauzzNFKaqGiRgfV54W76sxGqmdBne91LHJatL6BNXwGkz65uUmXZ7L26yt68gf63WK",
  "key22": "3QfjSoZhdC4FA4uVMNJDBs7pTP8j88TfWzo9m3rCZyNxANsHbgxpAK1FqsHFvfxE9yy8rJCHfwaQpiS4r3QM81ef",
  "key23": "5DagY8KwWsk3h2tj8a3YQJGsqfMLYRD4H3awek8zHNzhFgow9gXV89GCeaycxEYh7snc8zE64T1Swz245LbFGqWB",
  "key24": "3fNr9dx3LuzL21a5U34N5uRdLQm49YBtV1zeGu46MEkojDHWYewAfncFoeKYFBTaCmeS6htBRyRvzR6WfxQ35PNd",
  "key25": "66859KiT4F94CdAr53MbHS4oRpXDLv5qjHCTAucFgNKGYuJJFEP1khHnrKYBwPzfGqaFA6GdNHA6TgDTmaosvoEW",
  "key26": "4yevVa7gAmU2yrHoPe2j7xjSjrAXfcT6SiGhw2zZogg6Gi1wLZhzT2hns8sRn8XCHZdZ8tqR4nCGhiEHmhwRz2KK",
  "key27": "jyJZeehaqLrv2jQPHKETBmtKDmqKLP9369gGDdTBqLNXzeihyMohnCZi91MKsd1DjrVQcfYaatHjoQ8fWurzdtY",
  "key28": "2fXFTjY1Se7Z68n1v5Bb1eaSb3kEhMdjYYLrX8aBA9z4rjgA4wxW2PCt7RgH7Dj1fNLT14x8oncyi4R2KcgNz99G",
  "key29": "5sWb6ddj4ZBK2b7TwivZn1ZwZ7Rtjzw76st6yLGqrYXvdXBVcQS5TJxutySBaW5v8fcxcbBiaQDbtWorFN5g6bhH",
  "key30": "4y9xBeCUtHbijnshznyQH3S7kintxhpch9LF1R9DuJnERTEgh8FYA6MSMx8uiR546PR9JsQdjJXTPPqCsoTAEpvG",
  "key31": "2TQHRZCvqtC2LFx2gFBQ9216m3fFDsnHPGpJzDhTkuqTsh98CzqFiPdS6Kajar4Dgf3MFUn2hibLkYLynco3Mv23",
  "key32": "2a7WHptgHC3qcgcduadUAo1w1z8wpVJPr8e1WAutCwhtq9Pt8qgtQz2cxA9eZayY98tkMAovYnozpp1pXnFjAkpL",
  "key33": "54v98ZrFAdndEYY86RsHSr96KNvuqiRwGSfKgMt89V9EUV7UpjY9oTezmFHmfB1KjdGkXgXXi28M5pxhdiqo95XT",
  "key34": "3Ad5Nnk3gNPja8Ldac4yWyED4qfHfqxP97wypksgUz6bWt36h67hMYt2YEyD7qwgzxF9b2kbwTCJq9Z8JYZLa63J",
  "key35": "4eKLPk6Q44zjDrPo82HZsZz3gsai3qKWS4VB3pV16eagPNxfz4K2TJhxwHjdtUyf8MKrPoqXTCR6C89QVzn82JJ3",
  "key36": "3sRyF6jUymVSEA2pyCJ74CaPQGrcgAvjwQ7DV51Ys2LP8sTPswgF3Zm2sT8J6D1GKZBscgDrn1divMCHYJQh6iCF",
  "key37": "4MiM6BcHEW14QNXZf1ZpTQJ9EZf7UBSjBkCrnYK9GpktAK48kyp8pqpze2CLknDwNxybJ2VChLu7buBMEfD7RfC",
  "key38": "YLYfps6obBiU92rg7cxVoBGJMYvxZnyYnfEm6inULALZ7jdniBkbyQ9UWzF33EDtWHPVNPNas4Rdwdz4817Sxdv",
  "key39": "2tqz3J7xtuYUGJfnxD66DtNKNs26MwpHtmzEhqub25MKJgWSsM9wLCzSybQSCyo9mXAF4cnwu6MJAeWegQXob5sf",
  "key40": "2sU6LQqSM4Ru7VwobZ41Df4Mwmd4BonGwVq8ge7wYVheMWvwV5uNoQXbvfhP6iTtLGPPL5LYQo6Jcmpm5cWDguBB",
  "key41": "5TeSB87iL5Z7JMTDmwFEdjBZso1j7RCc3YkQ1iysgHwJ4oWhNFvr3M6azZzvaznEC94zpQxG4tsjBZt2cp2kVQ5N",
  "key42": "kh6A4f9MAcfyWBzDoTc7Kc4gRGqqojf2h4JcMtnoCmry2fvg99zSj5sN5vsWRQiJ1GGYA4CBU4Z44LKYTTCTShv",
  "key43": "pLs8ccGbujU2w6NizzCDxshkGi6dBdcPdj5fdXfUwVrcD2yGjWrWf5CyviXTv7v3RBWTDNN1JqUD9exq8puS68U"
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
