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
    "VhNbm88XVy4aegcA5dqHfZo7DeRtw1eELvRzFemdf5rhXad5NoM1WV3AzZpR1RR7iA3tkwkGbpr5wc75vdeB8h6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UmZaTC9n1G7yAWLMpT7XGbzAu3djXXuNDUmdSiYFTpyyhXQ5bLeNz8CKr4aAcR2hiidnAV7NRueamHWdYhgg79u",
  "key1": "DkWYhqnCFi4CM6isDghpbWNHN9Un6idghqNZSjVJxMmH4ioWHN8hfV19qpzpXwSFd3btPcXhzDVhXXySJVpvCmB",
  "key2": "4aoEXFM7tZTLC9CfC4JiD75RhQKBhNnKUVTGT3ng3eJKf7FkZFtjiDoCEA4GsuuAPzui4Vu9VMwjNpSyQuotDaBq",
  "key3": "2oYwuaPUy3RGaNEqbTYWwVsGpQX9rTJBgoGfBvLuHTXm9XozrRRhd1PAkBHhhaiECixCWPAWedjo1pWg7D1kpvbT",
  "key4": "4eu5EuQCuocmQk3s9VY7xcouvLr6LF9nfkYYBMv4hib3y12jdRbtPYwYFzAACA5zdsZkJ17R8npQfSCCCTiJTVoJ",
  "key5": "2KZBvrApBAehu8V5KpTXiksVmy2NofchNDaefjGLLw6awYcNiji3pdKHohUsHmhL3urpqoMiBi5mYzny2SYvh2ZR",
  "key6": "2wpyTRBC6fVo9b73zRUhaj2rsicmnoyyvW2cm8MDiiK2geKrvrffYd9FNmgzryTBPsTiNmkYVPMYBozV1nqkAHrt",
  "key7": "rsAxdYLgSsm3nMUvVtydZe98eSSr8Us8iQegZ74A2cFukQdoeKX8jTVZwrtVE6YoXVe4Ls1wh5m21edLJcRfzHk",
  "key8": "dp9EUw8eTEzi39HYCsWFPQChkiHgd6ADhyQ5DvwxedTTEXgyH57kmhCdEAtsUZmjUZs5Mmxne5uyogg19aGVQqY",
  "key9": "2eD71DDKU8rdyCk4j42wQzCweDMwmq84DJtAtoH4pHVNhNerBUKYZG5FbBKvzPVZyBdCDW5dkjTw9zbcyGtz3P9T",
  "key10": "4ZK451JRrWvwmXxVEE2esVWm7wU1E7YMcC6QS193PBRcdKeDQjvJCtPK9XPH3drT3PkF6uhZumvadBWC4oJ2hXsy",
  "key11": "5774ommZDbM7VcriarWCtSvbFkg9T9ErZoduaSvhvyV7eLrSeXLswMgAJqMCQ5aWFkNxwMxpusHq7HjgJLGuyczc",
  "key12": "5zoWu922kGbFv7XuJVyYzAskJ51Fwq6NTqLyGaA3Wiw4EL8UQaHaykhQUtNoojBDZaymk8RFN7J9s8i3eXVap3eq",
  "key13": "6635hnSyYVG6Pb6sW5s2Qv4bs3q2cwUKQ5i4FBGDJqsXJAtkRNv1z1Wbh4dmeWr33eV45crE5h8vQQaiLJhQspbz",
  "key14": "4wCY9wsRsvE5nNUGw7gvSTsqN8CStqgFYPzt9diSehhWoKesM6CSZsULS21XeJWkHr5Q6UnXDnXvfpjPPEdAWund",
  "key15": "3VJZLfDmHPbR82V9QGk2UXLiFtx7sVhd9vmx3G6FESm9eUuD9c5u1g4WjKFGeWZWcbxHxVEuD4X3nc5xVdLuaA2r",
  "key16": "5jDzk8maxaCbhwL1WzT7cfrC7C44S9vJ1iPBsiDeZHLN5gjfvWgFzGL6JYYD4LFk8TMkhrRGYZ4ENuztX1Hmwp5",
  "key17": "5sWXdPyQFFWqmTFkGDK85U8buEZefiWbnVi3bZwjNUZZ7R5yhcLqQsGsER3tfNb98eShfUHfbF6PjU3j6JbyRzhm",
  "key18": "AWfX2wL14RUyPoRxcHayGtVSiCZxTva2feR4zHvcbAdHgzZAytg8nyatHPBSqFtgmGpmHNh5jDM7UQf2jc4AA9i",
  "key19": "43gtfQXG5q3h7qRxpLJukVvFLmPsZeGi8vrrkYeB8KXhz49vFEEETvjVLPZy6PxxPycmjQxMkGqzPnphXvDxsyoH",
  "key20": "3vMfV6pZAjBNByj3rLuguRAkg6pVaKu5BEdwJp18mtcX3pvSaLbREo2sidrMNnRhMx9uAPf8xPARKwQPAwZUVesJ",
  "key21": "3q4hYMpmScg7BJF3cbphHL4SeJDBwE7vB91tHnoCLPgCKtZipU2wKeBju5G2kypi54GxmQX1A8QJmAUeGWnptjob",
  "key22": "5KmxRDET9bbewv5f3nYNiC3sSVRjRCjvw3nKi6JxEQkTPr7Mf9HB1VJnG5uJypWLXCqX2ZeMUjxW6NXKxhf6Njc3",
  "key23": "4rJYEj3CH7EkJ1G21HzHGYmGY7sb3o1tqerQKZ7LKdmmdrJ4f3Megv9JA3MaByCEc722QUr1gdFdtYNyHqzN4MgT",
  "key24": "4zJxNcrzG11BW9wPhfRyu2kXQK4JyNx64oUmYfuFh1BB5AgVozpJkLSrtfrR4VXNpCzSmpEiY5TtB9Z9zcHkHpKu",
  "key25": "3fyc3UGjwpjB98349cM7Mh39GwMr2i2nVyp47rQh3gva8w62nKMTrMwWriPSFUox8qiXQTVXDBiY7eiYk9fDUs5L",
  "key26": "5RuHhgCxBsb9ShNPgjhskr8qWiAXyFq4E9MhkymhCmsXKKYvDajRbpgKUfRWD2MDvdpsMADgW3AeoN5f2EVJGU5C",
  "key27": "5MxxSCJPLbZVpys8F6vicDeRUrYynQtrpqjvqyFHDUM4d9fpYy5KEV7k4hAWciN5TDUskdBjT2hmF8T8GbvAJvVZ",
  "key28": "PNereWeDtfWC9YJTtX1SYZHwAj7ShAeqJMV44reRh6XwXYu2UCA9CpzyfQiVQ3hTS9Zpxg6jSGYHS5jFdb9jiQp",
  "key29": "597VANnjdDqKBHXum2dYXRB2ci7xfiMNv1rPEmb1Sb4FzmdwbR7SvdrrkxxBjr6xymCEKUZYg1znueoRkGwovBY2",
  "key30": "4waed4vJAFh3BcokmGYgSeuMWksE3iQ7KRCmn71z8nAhs54hKrJPDxS34V1Rvrq52xskBnBSZckWDQ8HqCDdSbvD",
  "key31": "58SZAVJLxcBFAtNbfuuDH1XnSd9ouDCtiEsPoHq8xQZE8TWQyjNWFvLWTvwBuaGRdKu1PUKof8yy9qay6otLdWYF",
  "key32": "29VVgfywSnvjG7eB16thRrumYzub13fhuUnrgzbVnQqhjX37vAVGZfHcr6ZkNjBaPKfhrH4ECjFPt3NqNY93ih3n",
  "key33": "UiG52oNfe8AshsupSGoLzgfXUjwJSsWtCuf8JZ2C1vG1QWx2Jh2TLT4NRB864evKaCLatTZdiSYQD6PV5e4mA7J",
  "key34": "5ZE3PzoJkeExba6JEUpPBLzCYiF5umwDyaEuFAxFqMk1yD41m5gwKuyEizGQe4L2sSS9xWWgDuY1sVkpyMqws4bt",
  "key35": "3PXPJRQaEqdHi5cw1pyAoD9xLA4Reim21rMQ9ofMxeBxNZNqEDr9Nu71K6UvwUEmGdXCmEPfffUdERmjLUtXDTaM",
  "key36": "25qGs8WQysgs2qKCxvpT8wKuKVLKj6KvfyrSuxL2Y8gXFYuAExEyCMcXEL29eGZYoUNmLfxW3KRsEnAorf8JkYM1",
  "key37": "2TLbJYjpxbA5esvF9Fjq55eEqECht9KUaYd82p11q1AzcVHGEEgzfFiXdeiQ6aGJ8m1ZmzVKey6AvF95nPQeoudT",
  "key38": "3TkJZ7bSfVHrjWsqAtWQfpyHFfZsKPpKmNxBymNw1efwTDbTyJGaPWGxygJhVh8P3P4sVtaVG8Rb9jU6HcDTM8cR",
  "key39": "56HsFkTP1MCFoN2HWa1BoD8yEwLQggiXFxTkszUT6heX63E8M4CpgedhbCtcSk9Dg5cVNrNKS6kLmf2JeyzJvrdS",
  "key40": "GRVBJvycQp9UhHF2PtvA3rbVn7H25U2ePuZgFHbtAVQdKrL5yTWVJeqqQFZip7H2ErfhpKw6dze9C22eoL3mjAH",
  "key41": "4wnvWgDVc3VdjjUShagNPCgoTsBJahPo5XYwTGSP1X2D1niXsPs8fMU1gDtqPsBiJr98AjtEGsBXtQW5qvEiDXtt",
  "key42": "Jtjrg4n5JagVkPFUKxcaCsrRkZsMgsKH3muAkREPctW3oZekkxrdzdZBnNMfZ2YEmHMLmznvQC7cvJ3BisbPVVY",
  "key43": "3VUTLTsiTreR2TBxRA3RkQJBjccLLeo1JRtfW1N76uEi5s6oma78wopzKXMNSjxUWFJhHCgs3g7kazkRpmE6Bn5V",
  "key44": "2fmbFiYsQ37pMsyjnD59kuWT9jkiPTbCScQmLtzxrRxKZ358P3GG8gWrNndmxu5ik5egjjBW8ZySMw7tbqFQpkH3",
  "key45": "3guzaQJQ8VbSumVpruPN89DawDtyB7WULBtNyJyHTBrnS9TTQcHe95jWs4Tfvjbpb8TKPAz5GomL22S7V9F2CQ71"
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
