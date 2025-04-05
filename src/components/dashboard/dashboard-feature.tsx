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
    "4gph5y49bE2o5TvPUv6qaUtE45LvNwvLjz1WtM2sLYbVaj7DgrNENkJ3NB7py3c5T6asi1JWUGQua7tLNF7YXEXv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3F5XZXTNr6RoucFf1d4roCMaRNugsKJYksmfkGYv4yVGKU72qC1cXU15XL2p8cLRnzrCQJG34uZojYQ4pwixmHNj",
  "key1": "5uiggt1LbtcVqqyu6DA3wFxmsLjLiuVq8uc5qZPsjsDZ5v8pZSkaLH2JFAEu6DuCWitZm155vZJq2XnHJHzTGnka",
  "key2": "56yzxKaKSwQpKegEQeoUqRqJnyPvyaoDUkaHtR7uEEviHk7u9bnyw3Sb26qa5gMdtMSrdAU8Fic34f1AmTNfzZRy",
  "key3": "4UC2Mt99B5gRwoHTFrPJ5PK2hX7PNh3ZGouk2k7xmLcKvNC2YgYkagNb5G7LpMKtoHYW4zsKvryKJfDMK6VLMPJ2",
  "key4": "26BQtjrxa5ETE9h6cREhSU6miFggG3A7uAL8H27tq2rqSsyxVgMYy6ExrzUzWJex7mJqXZTgNgtMjSXaVboiukPu",
  "key5": "5efVrvwToLvpRkQhAFrM52S4tjSH3J4YMQZsc12WRFBJ3BB6KNZ1oftg9DehyykprMpEFgzPo89SYpUwHLWoM1a5",
  "key6": "4QdmenXQ5eEPS8ot1PqA5po45B2uXp79P4Q8kuhYiEp3gJ46SS6TnKYHBK5iDBgtm88t88tMBLcNs4XL4FEP3fUn",
  "key7": "5KX31krSgdmw6CtRJek8e3Q9hyUkg5wd8BpAuWqkQmFdSyadkdfSxGmDPsD7fH1oWaqWqTKinngYRnBPfnt78p1t",
  "key8": "5CbSwqkG7QwzaGUQk9en3JM6Bq9VqsHFHEzvjPYAfMTGTd3WZKvWNYfBEityhRjTxwxexUtfaRo76bWHBLXXaNDp",
  "key9": "MLR8Zg7qXXeUJLpf3QScVsKB7vWnbPKBTzwap6Ps6FqVLr5SG7BgYSHYNNsZcjvjcGsJLX9CZjE1SvDi8AEJDQp",
  "key10": "39ijwzakrHKEtatroHbXXTEfqLQte97KVTSrogXkB7gvdfy6AuC1WEY3qjuTdJdwGsv3buvTA6fcdUzM67wBQyT2",
  "key11": "5DGU3xUtMXu1i3Rn8visWJsx8JGxDQGBS8WSsT7dhiWT1x47j6xGYdpdbqLwHU6ELjEkycpertesYqezxY59Ucoe",
  "key12": "TNwfdhSwRHDFyPffnsN4idjAERARGSajpn6hofBskDpMRNJURXaWcL44LG6HdEN7HUhMP3WZhGcb87a9CB7BGBZ",
  "key13": "2ZyYQ9btjuE7PNBsvusXa5j1T7e7KqYic6LB7SqC9rwxEA99prJbkD2X1ww4NskBFMu5VB2SbuounVDie5dovQFa",
  "key14": "361MRiCv5dCrsH8vW8r9oke2z9SDGheWjyvG17LRUrhEaPoaQBDj48fZMcSNPjZbzgKrfhic5snFLJAinnCwrzer",
  "key15": "67b3xpunidUd52pVvQruoJbEp9dGWWVFs4E5CjMQvdskbkDns9KByjdP6gsPdZTnVUMVBvvQgQcqETyWjac9WZpu",
  "key16": "2YoGB1rqRjdbSWTSjeues7mwL6z1F2wPdLT5QNcpAezuaX61n4suxx7to4QM4zYWdFAef8ZUx4pwZsToxu5CJdge",
  "key17": "5Ff2taVg99jtQjxJ7HFJ7cvnwZeCPDbtDfEtobnrpqd3Y39zoq51KXx9ZVKbBDuAqtu1ekwF55SMprVcvP7wnrXj",
  "key18": "5NR2k8J8eAdNJhodHeHq3aWxBBWKvf9aA6v4zidxa5FwhL6FUG911KXFGYtMtgZGxNYkDu3CUCvSjgYj95TocPm",
  "key19": "3XeVS6XszB1m8SWwhk4MYM6WEHuZrxsgZddbWhqqQbA8SDPqVq23xmL9UXfy6MRAfToGZCUnNPJ3EyUjeJX2jvhu",
  "key20": "Vj7RWNNyfuipUWSaVkXf4XPVskVH675wNiFF3UgWsxti7tdY8Jx3oW67cPBcmhQsDaSgFkyoPWwwLARqXmEjHvR",
  "key21": "2bCCHYzF9cge4uYosiakMXkCoD91JCnsfXoLT3sJzhd1s8KES5reYg5qTMugiGZHmzS4RMeCQWif6xKWj2nsQkHf",
  "key22": "3qcfvJFrvNCDSF92m72sdM3qtMJwJPkxWEWhZUKr756GFGRPnacakyW4VdPxKsmR2tt8urUy75mT9Zbktw6iEHJo",
  "key23": "4E3G1pi1o29DfQS7b8f2w94taHsrHuCMKowQM6G626m614Jn5mmGXAj5X6nvYtGEB1iDeNgmVZSzvY3CwGGr6VbB",
  "key24": "2eUpRJ1xxvJyYddTiTmw2QgMPxhZt4VGHu86PCPmhXKhJY56M9dtiP9DRbcLK88u9QXBYbFJmajh3mkVSWzRZ9sC",
  "key25": "5N5fqiFhJmjQWRN2X8osvzNpiG2PuKYo1d2wboRR8A9qWDgDcRxUdEAj6EG8ZeRSo19zLg8sLsjaFhygWux98EnC",
  "key26": "2m3XNAxwiPYxWLu19vvbM6ARgMLDpvyYMvA5HbuA5edBtJBUuzTAQMby3D4j965zN3mG5qh1NC8KoKZXBgbVkic3",
  "key27": "2AG9gLXcYCake2ma1xGCW3foXC3xsMvDLh8hqHobiYBsFM8nP7yT75YSSK8RMM5pDttqcqmFAKhcmBgTm4uFfjsK",
  "key28": "3rXx2iW1W8E2WYHeiQ616Wh3gkpJctXWC5LxmQ6YKSKfQgT3WhRr4DW31TbvrMtSYunJu87necjv78fssTTGNzWB",
  "key29": "5o3Si4exZHeSA8DyDb2cCRukkem4apdZUMQG4WTR8ez5kdAiprBe37w6v1DvudnSmzuxuwbJhrY1AgeCRP8BzwDa",
  "key30": "4ei8vmQT2L8Zu5cb1X1BWwAUMsXiEDt2XScuCZ4kk2mFjHmwe3XqKwRbubgL4dDFbjiaxDoZjgSBwerkrutAqvzX",
  "key31": "5A3PNKRm4xs8zhxeQYmrZBa1VN3b9pcq4wVJHKmfWR3TDhx8NNc7nRBw3my537oDCsey82boRt72We6iSFRzVj6",
  "key32": "5JYpFJE2Ht1X4nnBUHBhaiQYNHtmwhTGtHYn7rp65FWNgWQ26vHmb2dV3PqL4xKjT1tyXenFAbsL2SfikDeeS9fJ",
  "key33": "4RLg73x9FoF3BPaEiappvLjBMtKfYhq7nTQKs8ruVibatSJtSQVFTj24qjTrJ6Uea5aCPjumxbGrZCux6xrjP6zh",
  "key34": "4xkWBN8YXAm2Ho7WBuH7DqxBscPE8QucwwXoUy3D9ZhUQMmTcPMartZTkLAtyww5FxdwRPyEVWhAE7p8giAsewzw",
  "key35": "32NgD3psF9HWpQ519zsNV3R3rJBcLkRv9jxu9VrHYkn2uky9akBxPkgQ5CErPbnNoAzjCTkMbKudL1DpyuwXA7NP",
  "key36": "3XgPVb9BED741N22tudUotgTfS9Dqd8HSg4SWvSgWYBB1EVT6NQJnkmLvGVp1ky6DTxv8gPkZm6LDWPYiiPm5wx5",
  "key37": "2YoxnaqZPJqHCbw4dHP5dt2LTVkGZWfVdAXeppTmRWQsb4VpsqUpuscueLa9AGV79gtcyQbK83b5cXkfBvBiSQyX",
  "key38": "2vK6SPrxMRqffRfT7kPCf8ezJd6QRteC4DEU2HDWYRKTb4dcTFt5afYdQsFGrrvuDu6GYwB2861fc6VntURjrAei",
  "key39": "2dWJt7K63tNJGeMJq6jgMeg6BpM7cLwfguK9xPZwHDS6kBACXk6U4k2DUXxwd8rEhDBRCTs9PDWMfqpyzwk1sCDZ",
  "key40": "5hALHjqXJTbPoSDT7ohtToAUrQc5T2srvgXeS6eGmGQunTiuUpYZFrJisvPXCdGrcKC2MTF3YqG6y16KKkCHWaPe",
  "key41": "ieaZJwfNPTc4UApnYHgkEsqudTFPnYRDBsVNYH7V75eaJXXJRbCm76LQ5puRQMsi4pNFPu3FMKR2PzqNJ8w8MGF",
  "key42": "4A2ci4328vH3aEjxtGYbo5MtYUfJbz9WJzBsohbdaNVrD8CHKvAfTVA1mpcRTrD6FXYeMEGjLLHdVi7By4N74Qw"
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
