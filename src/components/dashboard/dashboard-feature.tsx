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
    "61Qiks4meVDXENwPqvxx5iU5GV3QJK5sfT68X6Sda3mqa2fw8dMdE3YMyFY2r3izkmtHvjwzhMBGHc9Mr4k9L8di"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38m3eBGbjSJZet53tMeFTjhZ5C6KnvLCt8Krncc65GuoDKTR6DNFhkwveZjR5aYBgE4en6gFuEzS8ecet3st6wsf",
  "key1": "pzweMLLhsWja71U9Qspv9GvYYMai65TtbwzePwVozuBrGJdGrLMdyiD7oVXwbmdMxaQL5fwVDgJSSVzBSPGw48W",
  "key2": "2rBZWHttGfzocA5cn6G915n8AvoC3EwRcSitQZYii79cLXo2yGZAbvRsQJUT1ntvnhNt3VMiypf7QFCPSzHSjdiU",
  "key3": "4yv5YdRYjohyBignrwBUxLVDDF4J8p8C3m2extbpTsbkfTASUKewsJkv8ZThuUzZS56wGqXifoB1ZQXohumGnVv4",
  "key4": "2ks9cL2Rq4pLNsuE67pb7mNdMvynUYgsCT2MpFUyBKg2gVnPbocCq3boozXgknZ8RXSLpYbhckEUE9Goifz3bou1",
  "key5": "4cTV7f1nU7MxUegpUPvqB5MRw1BtfAxdKKJWAaVQH8ySwcfN4qZKDQGeMQBtRUJMTm6R5aa8Hr2TVAKCom4wiMck",
  "key6": "5JtPbqeJw2cNn1B6BteH9RmHpw4eVZEEuUZxWFFiqHj1wjMAWA4u38EaKFrLAa9qDkZGn9YseKC7ZokdpizuKEXY",
  "key7": "Hgf6MQbH93mV5gX8C6yCFpr1CGvDfuufVyEwPZK7XCpjXnNNv2N3cuCSeAyYy31JRst4iqq4VC5B9ggQkcaP7aP",
  "key8": "heq11pCfmVXt7k4zNN2fAvpJy9xfi3d3oJN8nB8FwcRR9Acsos2DQWGTCZ7kPMmPC7eSTVv9Vm6BM5opZxqw7Mu",
  "key9": "2SYHFy7rs1yUsHD925yfkU27AaTZ98gVEx7Tm2tnzfJigrzUypofKKR8fKC7ojUamgKkJY5LTuBg5yjeHy2drsq1",
  "key10": "3iDyhAAjwvH8jp4hqpBEqu1yP7gAgWtFNSrg6HdFX1FGcKhjSqav3et6QoNn4ypVuLZ1QSX5RBJ4HJApThpE8egi",
  "key11": "3QwWruofnoLXbqqbeWjEA4m4bHibwou9rhVYCH2pwAo9MMT86S6wQrNu9c4DHaVZaybsV1X9KfRBzQns4bt4aYoc",
  "key12": "DT7KZuPdJQJGPeqkB2XvsyRXf1dqyT17qmDg2RwHgXhmrivEDeyTi3G2iThKpYWvFYzTKryQ2WYexVBNMTdbncy",
  "key13": "3Mor7skTMxrLMd2j4sRxJeKYNGhcf9jdWYxxfwDGx23gLM2ycRdD3aLyxAHSyzYNV7UHtQVaBR7TxitYi3YiE3PL",
  "key14": "5jx2fyFMVAe9mAeuHaWU5uPVw7rHunt8ZGCR48h5rZCZnA1qAG1gxXRFVPLtDVL54weaZTfLtRUY3T1YjNynDREX",
  "key15": "39BFJyEY8GvG4AQtG62LMFccFdQt4jEK4gpogaZmYUGMiEZiqd8BzrJRzWRzWdxMyvzjzWgs6ouvjtM1WKuh2qbA",
  "key16": "25Kc2QrxbxuFAyBudUFFuo5MVzZQ82eWCxvr8bPkwzXuHkxLn2sRoeVqLcVwEpg6Caitz5DmPGHRxRLQvEhjwmjE",
  "key17": "KWo7QjcNafvDCwNdxuXp4U52W7UcbmY151gq5XrwGyhzyiNahsEeaPXsNtXgqygoazvVb1rCkqD9ZC7SsFgryuA",
  "key18": "5ioUnP1jKHnZmmegnGU1nEMgeFMFUxiqFP69Q7DdmMD7MMMQAorghdiMyEByKoH4e6MAFApjwa4LqPA4w5uo77jm",
  "key19": "5L5ZoEJqt7fybku3AnQfKVPNNLaeZWnrCm9Z2WpAZhKW5qWKMRzWmQhuGk5XnLPM3Lvp7uyTEoWfH57vd8Y2nhxB",
  "key20": "27ScJ5rDSsmyoDTZiMVJjVSp77AUXf2ChUgqMCstmHpMq6eZ3RwP7f5WmtFmPdEormANbTPX5Jxm2s8F3HgitG41",
  "key21": "21piwbLjox1pT2FeX2sgRkmYfgZGLesPSrSY9AqQAfNTNhBjyqvs1xcg6Yz1hLTCp81HQ8tFpCPC93Zjbq22e89B",
  "key22": "4nbSDHHXcnPYcHXe6rG82sq2fuBtkpd94ioxtwdZi5k868PSj2k36gbuUkgRx1qYZu4GCDTGiePDzq85j1x8JcGa",
  "key23": "3azSvW9AqV4WGuRvPy5tUkqZhLN69enZhmmNLaR1CtWYNBDQ6xsPCmJMaU3P4FN9EqPPKLfJ2E3txPTzNG5VvRoS",
  "key24": "x73LsPqP53RHdsSgC8GU8BrZaVmNv9nzbvSw5p6SMn4oE7RzsBWyYPozetBPSbzVonV9AhpEuRnmX69EuyRpz4h",
  "key25": "4iYbTPqPrUUETvkm2QsWqLpmzEPSgd5LQ7ge3gfQRo4boaPKbTRwSCeAWEJp52TJeJNeBEzxjiXcW9BheJyLRAYL",
  "key26": "46FKRTMhAsnKmWNbTV3bGDfrMNNNNARMjadAXN6xNWMN4WcRy2JJsiNGUSWHjyRer86BcToBw2rR2oX8RMyVN7kg",
  "key27": "51Szv5Gw6xJVW8ereNRKksV9d6CWbBLoT6L6ZWU5BT6exqWTSjQp3S2Ux8q9LT2jigd3jsy2Bid2FCDYygCAXWeT",
  "key28": "2yjCALZ7MRXg3q8gq4a4BSZPgtEXuoucF79MFf4XK1UWBbPur9smtCogxoEqBgSginj5pHuYXHAENB3uZneJZHCB",
  "key29": "4sntkzMBxAnxqnss9DQXRs4n8tKLiLPyzrLS7FWvTfNCrfDJbbTTbwB7zabZLXzisRVmDM89TdiuQVXE5LuF6gnb",
  "key30": "49zqJjLT1SWNySwxJYnDRvC28pNxqAvq8hqDmCw99qdB66xpcwsZHvAppD8zrZpYTkhZyoHFZCtgePVnxqdMywLR",
  "key31": "3Zuse2HuS7kBFx2QbHoZnuJovXDWrEmUzwK75G7SUTFT3QSXezTdGigE83ow86DKneCKNGfykwS5GGoG7HKTDDLb",
  "key32": "4FdL24YRKXhxtGEt3LASha5r8JbajKLJgmzWcnhvTjupviE55CdpyexSjEC6Y4395zV2ZNrR8bHfSxGB5mkYQdW1",
  "key33": "4toZ6QTTKXEq4H4EFr68Tg9n2osgeBNFYD3dbaHejFDskc2zQ4tV2C2n9SygaAeBttv1zNKm3hvBp1EEeTiSzhE9",
  "key34": "4d75PzoMcFbFfCusR6xtuA4aGkTiSENTktwoQRzzGmyv261mFPJ36dy6M1832amt4oxi4TXWruC2Cn2c8Ubfo1Qq",
  "key35": "5S1XVjqe4aySwEqMSb2WgJA716n5o1AQgy3SA9Qn8FojZwNS372tFfNbmvneP9BGCXT8Pm1qncF3GeE55GSjUaX",
  "key36": "5Pw5KsGTD7VbWjf7DAUFgodfgag6TSg9WYvwU61NN5MXMVrKBZKCQUnwpoq5niD6UK6Ji1k9pFJHHtHmepa96jz",
  "key37": "5M3dd6R5h54yFS5muPGpKAYkuJyKYaB6VtUFwb5AMvKXTi9aWMHbfwyKiFSL6qS7rxRiStFgfrzbsqnYVwfnUDzQ",
  "key38": "xWRBV1XEqPHMyZpcn4uNQ9huTqqDjU1Q1MkKQJhWfPBHddPKGfTCPEgePYxvNCt6mmnpHspLbxEvaP11K4ay4FB",
  "key39": "2vQ4CQR4mN3Wdzh7Yd9epYWRwDrm9nxiHucdVPWnAtX6NLHfazaoUHRYDdkiee5XmoBXDBKQMyEV6y5N2KBpu2Ec",
  "key40": "3hcV89fqR9TsynFsWK4qBFL9Cd7oNueJs6YzxmkZGqTpiXRiDxA2fv1VvLu1BVqKfJFzX8ttsdpQFNyinCYeku8y",
  "key41": "34RHwK4pQSMg9CUtGhuz6yDjV9WHPhQvWYZJB9LChz49NGd5nC3WB5GgoFPHBa17jG6FZLjr2aDmrPUPdEsmLpTf",
  "key42": "3KDAtsWwVsc7TDPt8ECG2owX18pp1Pan7j98nm3rGqjP18dmsWpAaXNXdzkErQce2KxQari893pqj5M6vnABEEBN",
  "key43": "55GC9s7TnfRhRxcBZFD9ykWXtZ1woBDUqKYnkn1ARRZaeowzEtGDeNhMBhMh7riNXhKxUBDhST6qmqo3d1ZxNN65",
  "key44": "3s45ZixkDzZT6v2hqSjJfsrCxHFdVU79Th3XQTr4D4NpjCowSYnyHLbtfaJYMk73NZTzG9jNw6hDKzEoP46MEhUG",
  "key45": "5a9kxfohHdYv2Fi9cHvya56QM6xPcqAeab6Mm3reMhuemjXkTMJW72YYJC7PVbskLT99CDhLVtgPH2bpJnWWe7xo"
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
