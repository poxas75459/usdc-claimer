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
    "5FjW9RyEzp3iw1WtYQ2x8WjzroVeUgHHcbb56cViSzsisoT2eGzPP5qBAMgoa1yymrUScRt39aaDok6fGuGbP2dX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Wx2Y3rm32fNReXsEY6PwsYsoQqMFJurgtBdc8DdKJLd6uWE1kpkpAAx1k2AZmVbzaxcgCe58AApKWNR78FTE5zt",
  "key1": "5fLchprKmJVNvgEU44RugHVZoMAXkzMtBCb8UVyFNF3Uy7Cwxf5vJbYUS1XGRPB7XB46En8xzDdQc1qBpADi9Sba",
  "key2": "3Baev9DgXNVScdJoBx37gHtvNdXTuj3UYq8fvXjuGtuTywmWcEKy7tF2fhAwY5u9kNwWhAVAVJgJiX2gN8tkDzEN",
  "key3": "65nYVyxZHyUEtjEKMKofFykUiwLcaBw7VB2wYZQkFX5dik167jUR5rdVZkXNG9hhfWGeYbTejLeVfkSHZMuYSw1o",
  "key4": "4NtiuyZDbqiYx6ECJdaUBgB9jLvQMHUSgZ617hZduU8a9pd11mjv7ypnXKvEaJcWLEWnaitSbiPgqmEKivx8B4dr",
  "key5": "4bDN2s78wKykHSGjwitb8QcnKzb32oWDmKBZX5G3qR71DMVHVG52eB5CUJrhEdFn7fLcSRQ5ARL3f46QHdDtVfbo",
  "key6": "2w6U1Qr7HJc8XKZzut1MfSZWDiAQ2hamGhnMUrbeZq6aR2xJiCRPUY8E4rLM4yvz3kksQGyveFNvHdhvquevHa9n",
  "key7": "4pvKtjFwJDwdRkS8idhG7kL8Ya3bcKG34yaXSphVTVVXGCWHQywSHZm8qrtKPee6yhsfYVqpuV3LDfQfDMqjR8LD",
  "key8": "4taqReAk6bPZMsE6NoktarRmcTDQAHwGbSqJDnQrjo4Y3tWjRZwUKNvDZ8m1vB46RMwZUEAEDtE75rRuJoU3KzGG",
  "key9": "ujfuJ7pox6CRJc35Gku2b2AK4Y6kfxNaN6xgwSwV4b6DMnghoPVMMFuhMVrwcSXKMZx4HUdpgCmj5SBsN1cN4ER",
  "key10": "5vQZ6ohVz4Lq4HiiqWXo7SJT9ZXpK1zBydm7fVNKE6rtsHYXsN6YV1DcESRfqgyQq71jepNTBh14qNNedbzAj2Z3",
  "key11": "45i51VRkLMLmYXc8fEvmoABA9cC5akfs8wNjir13yAom2E9CQdVboqMnEttH1BL7rfaiXmQZQgWsUFY5ZDdGydfg",
  "key12": "X3EkFeCTkgyCZAw4R1vkBLh1sbotAdiu3h9Sd6CabwAoWxSFsE4TSXy1VakBvh2FmjVE5cPgcYoaQF8vXg5mZML",
  "key13": "MCNnpTNtidbUgFesGvqyy52udguqizkthKq8hBRmTEuBTnzqqLwJ22gQoke2bnL2vitCW2hzeTkE6onoj3ncgai",
  "key14": "2sCLJ1BPNEgpKxxr6wkiTq8Ndr9Mdfv8km285S1Y2Z5WXemTCGxx9FLCC4sJGNCymnw4haSfJmQ42sLcoBrTjNye",
  "key15": "3JktxNFBbijBTXi2Bu2gaMzeEhxsspPeJYaDdRQz6AXCFHqrVqD14cmoaJAZbkx3XLiyPXBKLFpWgn4xPQdhPkLV",
  "key16": "2kJem33L5CJytGz27rhopVtNKJaLQ2ervrL4pYx48W5TrTNmiqwhBJmpnmT6wb6XPwNSY3an3zVqqjFet3esYZZE",
  "key17": "32VR4Xd43qq7gkjJ3aw989mDDdZVw52Xu8gMwyKdVaiHyURQBgs1inL2JtSvxewXL7UHbWoPhQEciunDpXFokByb",
  "key18": "48YY9GJbUJjqCDpXgkLUXvQJa2jzxQgAGH9P38pvviwtievbDd2aEUESr9qm2RSoRpbWjDMkCkUN981Hrk8Hd21J",
  "key19": "64knRjNCHp74GzBwfFnJeFwmsHoADiYKY8vs1uLLm5Q1iiAUGxoGodbCYnf2tENthyWvQEhuTbejWZLKKMCvGNHF",
  "key20": "3SVsja9eT23G9xKPdmUjfyfDvVXUdySZtJZT6a8g1AYZN1MgLt6axTy64epExMuiCEFPCEEGwgvGTKaZUUfAqYAw",
  "key21": "49ozoCr2RmFxY32eJs3LaptdUTHhd9u87QqV5hh2LBrk3rnhtbGuL2r7kbGHMGPCoJpfP19FFEuz9gWdy2f7VnFy",
  "key22": "3xdEDQA7HA3yv8yuEP1g5XhsksR21kngTPMmaKyNoVmnbmqYJrVkDToJbb4NBmb9K3RYKRvTYAA7aCCXUoRLJJbJ",
  "key23": "3Vv39tpdq7yQDPdL23cXzgutQ64W9ThHzdGJhBWo4BJZtE7tBgvKoqmKx44CpGW73RTqStsbDbGD26MQBLPdnV5v",
  "key24": "42uet7SQLA8jzUTQGqjmWZ46g587hy3xnU8P7rZfc7UEfQCidaWwbrg745DoyPT6URJZZQ1iPmEXX11CFcqRvfYi",
  "key25": "5QLhG1M8gt3BXMXGfy4zNvYb75CNRPDFmw3pkKnGtcv17DoQP26LS9D2v1Ns69Z7Gu4eK49UmzZzNGTFNjP7wcp3",
  "key26": "2qxqRr8daa5j7P3ekHBmEgo5beqoNfvUpGgJUK8rqVc37xZVw8TZYReptsf2QpmEfi1WYRL2Dt6jcWkJYAhEUBd2",
  "key27": "37FbsWpiybhQYXRXRRSLhRiqjftFK2MPNfoNe4MMDZd7w9aT7UFPDWSdBXF61DtNT3vNiWmbxiMg2aCWBTwLQcLm",
  "key28": "5vz5NrSghuq1Tc1mHNdJfykRs3fZ49MQzbUGqhUX6RoTav6uU1imSPJNgwdhjFtEaKY5boEEKPRUrbhZ7EHjQxat",
  "key29": "5E6eYQF8a2kwJYKCDSKff5Vq3JUs8Tjp6tXvH5waLtdQ3d3MEVyXnZ2QcvwpSWBWKB1kSP6aCy8Qqok8UX2UdvXH",
  "key30": "52fbgc19SDCwC2j35ww2MiqgYeZCshrEjry1VfB7f1wiq83FKKU1oNHdCcYLsdTs7XJj7PL2z1bwk87PVGr4s27f",
  "key31": "2yfc7LQYJ5H2nuAQ319x5Z4ZxygnrFe5WBadxNQqknfegvUr7eAgAnwnJzUCrcrNhq3R7Y1oEiU2W6irX9WHhR5f",
  "key32": "4hbeRLaPH3ydVQqLtQ4EyNqp4nJVAcQpLit8jvGM465EL77fEfmC9Sj5UvacVeN9ueRDRLQqXAt1Zz16Hu5dHDaJ",
  "key33": "43S7Bfjn5jk7RfRCF6qBvfrNx6aGyBoYT8rUCsQJvGuucVEd2aH6MsyjB8pTR5ZVqXDbxatvYbHbG8YbqWbt49jk",
  "key34": "aob4vTk8KsvSgAQB5Xt6thdrQ4onUpypET5EiaMQcaTx3ZHSLWtQA8XvfkBycQSTp2M8LsDHhdWzpovPrJ8smd3",
  "key35": "3sjvBybSGyAHbaBfWRcyf1TAfJTtng3nJLzr3CH1HhgEuC73Lx396UC7DPTxMbsPjBNg48u4hguC7DQyGFyuFVdS",
  "key36": "QGhrpU4RNuU4RjcgkNdRyde9UuFULjBuLZTfqk6ZXYFeowLNX6ddmVXQU4r4JyR6HbV8trts7aD8uiAvUYYRjXa",
  "key37": "KbXkTapbUZPTm9efCndiiw83QMeoryeKkRsjLkZ2nkw8wBr4USbB8i6Td3kdFagZHcHBEw4QfrCYpoX3LPfTwr4"
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
