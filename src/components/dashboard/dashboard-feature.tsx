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
    "nxByjywt8o6vp5PLhGsTtnfnSYPtPb2KjNFkyBLFhS4nESZKCB79TiXPeHFcpXMQZbMrysvjjZpusPkfGqz8jxq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3MAm2heSt9AZgp5gLJQiig7Ax5mVXVi8xGPKPDDyJ7hDoPfHKz12Jsphq2quApB2U51LzmJPbHo5j8SH5BU5haRP",
  "key1": "53YNQLGZbnaRA35iaTJLe8W1CskfZUZmR4HDmLNRk8vZTrfhTkTrqgsHZk1YQ4KJBEruPZreea38uafciGP4sz6w",
  "key2": "5sEAf9yHbbd2iEngytmFDcaSiY6LsoG8CgsNWNyNdedvk93owMLceHoMHScqWRQpV7JzdtdrXTzWU2HNSUhkWY26",
  "key3": "4SATrTqqa9My2FHvzEEjY6A1EXXwFMwzNzuwftMdgyCqAn3aUiEhsBn4WcPXscpkmHwsMaiBL12LZj5SJV8TkAcE",
  "key4": "tcu9amND5vHNgi9H33t8i5CVkto6TyBMR1VVesuTjncyeJ61CtGv8XT9qPVa6LHLTUwsE7YZj33TfNKozfnzSMN",
  "key5": "5Chi9WULi43XHWoux5ee5jxmZK17uhsSk9ivLmD4ksE7V8dxvx4i1pvTEtDv4xx9hdHJioTRtYdJM89L2AvzGaGA",
  "key6": "63qDFn7o18EBNAqQywbLMKrZsg5mx9cheBQjHDup5CTjUPU7JGez3nafZyUYwqaueEuVyQvxS5jEMCArtxr8ThEq",
  "key7": "4HC2smp3Rsukjy35TxZqaugRHCua92ikExgzqkXeQL2bGHM3asr2A4UiEU4AWLuFUxPATdX99BfdigG8hxCpv8cS",
  "key8": "4KqRKBK4U6URfnMXY7XptXfRtR2WKVxtVjH6QsXYqtEo7gbg4CQT8eU5Q1ox6vp7k3srfZjg84gWNf5Fh1HuKcQz",
  "key9": "5oEJLDLQSQCCBCptDBvBtqVAG9bG8sbU4iys38jAi69t3j75bW9xjNptPd9Hz5JLF5AdocNd9MwGNcywQ5LkhS3C",
  "key10": "2A7Yk4fkDDkmMJMER9NWqv1efTfaQa4mVWt3fL81ceXaXoScZWRQBEtNJnDZHd613p9X4uxnJC4bGeo91zsJ365q",
  "key11": "5dQavb1ry39e5xnJf4oDLMPhmNhKWgu9SDSXX7F6Lq8HRo5RMBTEGF5f916JhcHJUREfsyk1kJzxQaknVp1xmAz4",
  "key12": "4cyi9Kkug8ugM9QCrbMTqwr17pP17kAixzuz8Mbs2FKcyPNUSrcEywNuLnHCTx51tEpsLiMAtTHXPN6rvHZqSXBH",
  "key13": "NE5oVbb7Y4JgPdVTV8jgo3NwqRWaeTYxQHzWg7tud7T1rQWhRo6XA68iaXyk3WxkdYYWawAexiPxmgSbYqLcosU",
  "key14": "3qk3hXEYYgfQ2ex69BR9oDHDs9wtnahrnjprBD1LkwihqT7AAefwnFYpN7ohQyiVZghH765dn2HLf9uKA5g7Yt4L",
  "key15": "3JhD7ahQyLTYW2tN3yxiRYCsxpfxtAnitor5m9DeimYVyPBduZyMQdSwbnPNk5sZpHk1pZ8V4bgmAZWiTh5cmnRB",
  "key16": "d1eDKP54jxi33jBKWb7x7WnzwvxMC4hxFDCbFJtQhSSA7PqikN7qjYp6ucUWmVC98gWRSkLtgWhss4wp2z8PCPp",
  "key17": "4FJJUduBDeH3sFfLaUDcMPpk8aypmQsxymY9e8BwkS7ZUm8T7LxN4YkaangQpnEpZw8o5mVDUjH3mbdYHJnS5b8Z",
  "key18": "4BG7TCcHAUxHPWJcmFdJBEJeeu2RihwarsxoX5Dj2Ud6R1jFuwhHeaX53cENDhJefP23WTsPhKea2hAEdrC4Y6G9",
  "key19": "2yjcn8GA4iNChutz19gFPFEcmkDqLmTcXLJL1r3Pmvgq4fD8eVjrbj5qPaw5svnJKbGYHaRvnUFhkySWaA6mkNB5",
  "key20": "4QAQM25CTKD4LfsC9S1raF414iU2QW7ujCunZJm4nc7sYZnMfF7jDUYhhGeKL2qXDbBtGB87QsLcZRhJuK2mEwcJ",
  "key21": "2kunSeqniqTxYPmZtpSxkr6jcbNGUXJyNtektQGbuzfiNA3nSrNqGPmKUreuXUsMzco1SSkpJAreGuBc3SaiNX6K",
  "key22": "1vrYhjU1sHLEKFaoUa6sFTnxCSEGQd9bsyYwqEe9up96vrzGrmjwpP4RpKr8x3XtDSeKNEiSst5q4RNgjtA5hs7",
  "key23": "5A7yx2bsrvnL2C41s1tiXTiUwF4UucGwbd2JqPHdYdn6MszbU9AMqVdg8UdxwMRdAPeYYTWvphhXiJdwsBMwhQGy",
  "key24": "iuwQFnqxiUB5DmfX5rPAYLnAY91qCGgtJzRUGTG9NbJJ8AAr7icXrLiH81CMstNLMQ733ErjQpXWCztC4qZdGJN",
  "key25": "3Npo28xZGhZbGWSJNUPwxKR77tqyCDmMZShoLtbkbj4BXUVkDWZk6cW1kPV5JQtD79H7fkWKADZ8g57TWp5uy3Lq",
  "key26": "YNq58nqyw5ozVtuhNj7HShkK3h8piqkWdcfniJF4qa1wK5kKgB1YxJAhnB3gmt2dFrWrMCfpnZdi54wPtRFftGB",
  "key27": "2hKHt2ozv9Rpmjs3fxPWtwyxTdwUZ6FLU89Y1S2QVx5p6iJatqd8sAKU5LiWz83JNGDX8DeD7rKNbe7dL8SsEXkW"
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
