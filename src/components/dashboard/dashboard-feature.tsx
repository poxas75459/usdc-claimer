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
    "4Z1aREgyDj7CHhPfjVne9c8gk2guEs2BgWPBL9hWXqgQcuBzMJLi52riiUu5gNM2Zmtryhmrk9HP55Fn7S8JUsaw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MqNrcDofbXxDVVCFpH95QSx8NNNjD3wuzBsCcHjxWs4rooMNKBdU1oE5MfYcb3LMiy9tFdRNWdzn5g8q2piaLXb",
  "key1": "5YmfVnpuA8D4guqNWAkDZuVyKxZXaEAsMaUUdYPY3G4raWZSE8iwJ3nizHc8XeqRyZxq1qn2HxkK9CvZrBtHu45c",
  "key2": "4A54xx6srLtLxFxZtYn6ww7HrrzBCJbTp24vsZ3DEHax4T6TAr851vSU2LSeMddAwvj1FKZ6mw1BBxKZj2DMHqet",
  "key3": "4eGFwfGc8nJKpnhEpYX16AqkSsqV2AQEdW6EQwLMDE2hxmtj7m5p6xM9oTF8SiTXmQSSvAqXxUsSMdiB84ucnksZ",
  "key4": "5WtxmkkPN13UvFtz7BS4ZZz6A48tufSL1KsP4LNC3oD8M24Tn7FU9Ps4MG2fBx95FYxepSbztSE31QZ8xygFFS5P",
  "key5": "5gUy3fLKYcgwPZcnHrK7PzjUQL5w436ghDTu7HfxXmwysj8rDPXBfhECmFFiXMmP9Zw3kCTSRGTpg8hboP3PKFxa",
  "key6": "2fG781ibvyHHk7Ni39CzTgPHKTm58MY5HHsZrvEX7iYbX8Nr4irGExZTjAqaaXoZ8KgBEZtNJnr6Mgp3NQFBDkw1",
  "key7": "WuUnie1zFyvfmcbqLz5WUZzTdZEjdyMmh8eQ5i5x85aYJ2b5ewXWR3KbLvK3epU6a17czPExsRxkB9me8ror8Ef",
  "key8": "3NSNAoCS5mDfxLfP5tVNbH57mngQdNKLuhcVrGRJAt2VAzeqfx8k8ESewbUkjfjBgUPNYQ7ojTgeRqwvY4Kji5Bp",
  "key9": "4kHA48qUeYan8M2gbL3GZTPRLGtfanPmmQP9DSyi1m1vtZ7uuYWKQQPS7r5QAFGFmeWs5xB6HiWzqzAkNyUFXJsb",
  "key10": "2PraoA7DyyWa9qmUisPuvcAdkrRvn2d1XBE3vmjQ4n1PTVVGymuFxXM1D32ggskM8wytQdoMt5NFVgbhgj6mpPqw",
  "key11": "oyyx3gJS82oCkbhdQeQASY522LrNSrMz35yJWhbBfD7mygthf8ESz1JDbXHnXEpz5S8KcLUCEgv9Chk9tBd9LgN",
  "key12": "4p47DMrpUkGpgyNoegyYFjkridNj5saTWitU21j7fTxSyXTQwxLWhEYQb3qaYRbT1jfJgAGDqfGs5taj4v13tDGr",
  "key13": "4cuMwj5NkLRA388TFa6WdXa5FV72KT2UHEkCF3stKZHRfr7r8zYBx8BMfJk7k5wWS39nw9g6sp2PSDedKiLXnvj6",
  "key14": "2cbbPUYJu3P4Sg8zKxQ7hVWN8Wh3KKw5B8BV6g9S4yRMey2X7aLtUMxCASxK69MSFbJedAyL6muFCBYwPZUnny68",
  "key15": "S9y71VwaQr8SWvZXXWRNhzSGVxhhe7ZSdok7gtQkAcFgSDFapgsLCNXrTUGRNfGaaDbLKeEYvYNrtp3UwSYajX4",
  "key16": "zjSbgnRAApWriXPj3aKeHARGWCT3RYJVZFKxBwfkykvnquf7jbrPy5xwUbfF2LNHM763jVQqbyq7cvhfXfaMw66",
  "key17": "kcJ3CsYvyy4kVw8LzyZhN2w3BHPPofcSn7qS8kiBfcLHrFRW1kZJ9XjXivYapixJoAgVhi1TkmtRhALskJJg51i",
  "key18": "52PzG8c5t8RttHiZJCE89ANiThrLEd5HSmHsiXvWsa4jEpKS2hXF6i9CFhfFgGxXQMHiMemdYKa5YXbBN2D8E9SA",
  "key19": "b15o5So4ZgBzCD1aiGSEHzL6Y7ggCMnw5PBVRitkBu6VVFzhPjHjYfpELZWqMiWYdPXgTeRTQgaDpEWHc7dYDwx",
  "key20": "2U71cwZTUh4CWQZ2QpERpVtLzaBrG7RweizdSxFiKBn1kCTHJ7BGQnE4K593zwBxc8xxcYE87muW2MZcVMRNbfTs",
  "key21": "BMsr44iFfiES3Gna8GtXep1nMHEth85qyixq6qPZpcfe27pnyWKCzmXfEKYTBFJhbcbumtvb2Rrdiz5qavphub2",
  "key22": "zsyWj1EmFQmtXMeZGr1cQjr6MpNwt6RrJHpZEyAjRznPaGTBLXZJxUZePeM7tsikVE8hAaG77ajwwd2VbtMWdtj",
  "key23": "4t52pBcAXZQ93D7oqLTJ9ULyTEZYL1W3Tb3S4286rXPmT3EJkHFVoATHqiY8GmALK2cTC2Pj9JuspBiehim3ZeLY",
  "key24": "3XdrpSC2Yta79JhwzgYMFfwpuJdFkKM1o6uoe3YL3jvxJBekb1G3TgV8ZgQDo7aoLuuCBJ7ToAnxGuZaf1Nbe1YB",
  "key25": "3bs4GihmRrZAz52xkxy5dQF6ayGBYJe4gvNCCXG7z5pSxwwkHqknSxHbSVKYnuM5TfgyZBiaakcD9xRoUXYsUrE9",
  "key26": "5trMm8A8cfCEN6zPngjkkmX7nx59wBtewj2xcERuUonMJziGsnB4W3N2DzxNx6LpPBbZuuVwdQeTu1yiLYMrxqSP",
  "key27": "7GLLEM6PJjdiCF8vVCVDxQhLn31cP4KadjWKSS9wci7mhd61uhekB1KEKZCDYFy1L51yZf4KxPFRxyTyTvdruy3",
  "key28": "4gfoyAkCHdyUsK324vj9dS9GPPeGuyUnCh8X4GEpgjEESMsvPvs44UQqGWBfprAW3Yd2VL148mLMdpPhT76GXDfd",
  "key29": "3bwAqFkhgoC67KWRiaA6VBZzBpAvsji6XXUJW9hWAgcjYAy69n6i2qmwjN5Ud9PeuooRtL49TekND8nvxBAFanBq",
  "key30": "4egdGBMmqmtXKWMLYQLLaUmKDPEKdxF9cwbNjX2LuFMkshQstFpY9qa11CwXv4R3dtZvu9Zcto4DQJ2Y8kfHwUTx",
  "key31": "2v6GWzVRre9VmJ8o3dut4yg1zx5Vu1Z2vsQ1V2RMpiUWAJVwYYUK5ZdVknQdufxdwgQFDxyWR6RqjBHAxzc5jm3C",
  "key32": "87Dw8NrwGgimjF8ZrCAmpn3SU79UnL6g3sFqcrB1TieGNrvFksLcwU8HTetbBoT1aHJg9rDKzZjjVGTrgDb3T6X",
  "key33": "4apffy1Ep7wwDeYx62jDJGGwchfMaMRFsJDsa83wt1tYAAe2jPmwJJG1vZuLZSAXjf31uSAkbQQbRgJgJTzcDY27",
  "key34": "4dWkHZhR1YzTz5iTFioW7uyzpsrpD5wCencix2JhXq1TC4tXG4oD6rLiy38fh1TcF3Mie4KNAo2HZUpjAhDQUtjr"
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
