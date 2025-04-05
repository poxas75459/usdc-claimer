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
    "3wF6jf1Ugj8kfzWzBqkdkXEwRHy2SqNa9NFvXEwt6sZQ5tviCHHxWDd3j28d9tmPqxDNLFNDJQYNprdvk1jW7cFE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uY5CXr7jUNp79yCThardus7NFD2UvMSCCiB4J8Vr71JifEmF5NcByzNKGXKjvPKNxaGyhmsvHE4ejQMgKEMKUnn",
  "key1": "vquNfHdAiFcKPTTdMcbNtgDe8HcbHGGTotLFqWtP8vYw9AQvfcAkxbgWH4bPsHzvwyxyj9YqLHTGToRat1j7mBo",
  "key2": "2jNhUH4g6b39sExt93N54ApDXBEaJ9cPsfnsJLTTcDsKVwkxNSy9kJkXsuXd9BYyuEJQgQuASD2vuYuSXVVJCLy",
  "key3": "2PjbKhrHRLVEnriSr8oLtpJnMh3NyndcTdz2rRk7kRf5QyQ4vEc4dwbU1WwX4DU8wvXMRGY33iqWN89hKHffiKZ7",
  "key4": "5gzKjpdz47AZT6GUz6BeHnyRz3KvL2RejUuGJZvaaWr14VBUjSeEJQg7NK4B2nuTPBNNn8NJ9ArFBgNaC494oAjM",
  "key5": "31CAWNS5P4ySCH6os86DKo9NNs1kJaSfcVgj8aEiyjd4t2NghFmw8y6sPa7biGW43U2tcaHG3zNJYvzpgyq2kLew",
  "key6": "2v5LaBF1oHwnRG8eYWJAK3ctr7fMhPnyagqqRbk676SEHLouB5yVYykGG3uMwPice2GAbu5bma7wyzFeq2Qvq1E8",
  "key7": "28T1hZgCDFhLM1yNyFn7LGNmS4wSUBnxbRQXoXGErMYFATzvyUnGzZqNM4G6x3UpECfFoqHJnpGhcxaGXrxCqWzQ",
  "key8": "grwXgz3g6iyTt2eRVccfiHUuYpA2vFxoG8kJAXApUGTVDRtKqVvNnEZYiei9wFjgd3KJR4Xy2FaGK2Yx3LsiG5H",
  "key9": "5pWW7EVVzwFdad3a69sx2km7zsoFPANtws8Yen7G8KdYLjbtQwtY8pYPxJtk92dRpFGsk3Uc2A8Cs5eExvdYuLd9",
  "key10": "4gFxaMRBxqpmT7mW4LkWVygKu3NX7Au5aMPfP66jyikmHHBYkdin6xNtAwHXwzCGeWevJ3V2TNPit8KcrXCow9S9",
  "key11": "2CF1rrXaXDSKs8sdJDyoW6YHMrzahcR7NPKscniZUi1vnnqTohSbPg1x11MHNDw2RxgahMrSNnpggHZ9eaFRhLPH",
  "key12": "2fsbFFGMJFJtXA6RMprw8xd1euscNw7LA3a1Hm7AxSatai468aq3zFGhaJMWD5kGH73v1AzLt5J6c2Kq1RByzT8u",
  "key13": "5qGqWd9kpvag9fnr656osWhbJMKMTVymXb7sDErx3zBeh481Z9amBhKB73TAYJJoycgyFP9kboL7rw3X8PMq6mw9",
  "key14": "45ZnC7jxVbfpeZCyBDe22L8N8CYuadYetbB9GScppy7rrJufT4AExuLo2xGuTCYboAwxinhmfED6JMayKhWEuB7W",
  "key15": "4t82YnhFVMz9x2wGGBpfYgkbeyXbXsx2xmudgDr6CrFeQENaRPJyGrB1WzSPGxQacdvEDR1ahCUfKxgu4H62tN74",
  "key16": "1T2iQjBE9fbMRs5e8yxhDNnLdr6DRS5eDhqKKN1i2HK8z4yXBB9yXgtvdBBbV4uYvZmScES3wev6B3uGqmJJKQw",
  "key17": "xZUKFhENwnzFwXtqyonyY8ndQSHz7SNSqCEgiztwMvizGAFU9kPR2JdKwzo7BHkZwYAiqWtN3DAkiEGer3FrJMa",
  "key18": "3XQR7CXbjDzvoDhNwUW9w7gSXAwo5nDdhnM65qB7gXax2qcR3sFdiLrH7aBNyzo3t9NSnDuGk3Pcmk5gpYkJjtHZ",
  "key19": "5EwkrgyHRtrbWcqZcFHt45LUaL9jE6XuzBmPDyVSrQiPXnCvZsAin4MqtMd48AbjS1mo9L48jy2VVAwZw8yQyzNQ",
  "key20": "422UW79gwk5oBLX8dRG5t9MsUMe9dYbx2pJrYNXQQgXD1fKRmCXJC1fuxNrYghNYWzU9mF7HjE6V3iLwBQMXpcnw",
  "key21": "4gkEbPRAzufZZGPrpcBUMfbF55FNT6E4UdFfgydkakBMYS4w48ERc5KGXhffEweiDx5GtfwPcSLvySKFvkdq1sWD",
  "key22": "481KEC7vpWGqdaSS5Rt73d3oihyFLqc2WrFijgPL6oVeiGmshrofZyvd4usN8Xew1TaEgbVkcsTRRnPacXQQyu3F",
  "key23": "3hHhp5d67QS8uwBeDp5EZtHAzpyvppLeBcx2DMPfjT94nfwiHTt1ARbUqAzL5TtniZxj2PjLeWxWntD94XxxvmQm",
  "key24": "53avLHnSTyfDdWF6dV5qxmDXZvgf56MkJADPnkqvzVi44f9BDiV1pEMEQCM5SqUVAuvvDD85yU3kxv2LzKHtQ1YR",
  "key25": "3B8F4dUWeMGXDzbFq3CxxztQ6kuAxFGYZS446QrkBbohBkE4eEw9BLxB8MZZW83ER31eGccPZz3dcP8WFw9zwX8V",
  "key26": "62F6Ss4rmC25so4JEKhCFPAZEbYc3gv2x2D3SaGgbKwuq6WNKy7HQzgqgVnMxnD5ve5ozCJsFmJtGrkmHD4HkXxB",
  "key27": "psyoZxRoS8AFfzJiyTCA6HcXnP7JjU6VJs7F9r7A8aQMmFMh3mEQULaMfatB9PXp9Cp26FB1dmP9HQT1tcvUbVF",
  "key28": "5G8X181zZSNJy95ocjcx1qV4JAyMRgt59hVNzkvstLBhfPwWzMQQEA8hFYNe5LTRzjUSTg48ZA9TzSdGgtPoXhkz",
  "key29": "2j1Lwrx5HsjC2SbxkNrCNU7LFriqHeAn6Ru7EDbrobcB37gLx51A7oTFJYiuMVFRxkUuSsTQTYVwjGsXZ9MgNKhr",
  "key30": "4ZgvEn6XCgNu6ez4r3AWpWRP1RnVDd6KXLqLkT47rnKiqtaVK7kgHqpaJBnEp6XjbiZPboXnGJVuVXcm2Fk35MWn",
  "key31": "24SmepfUL5vTg6gG6gX23S9gyTjKLMNJKBYZQKcfGcDMnDG6GCNB6aUQxCZC8HdbmHzrmtCDpBs48ZxgtQUq2Qe7",
  "key32": "48WefWE1U2tB1cBtMhCsHjU9Tg93BfZak3eCoGFCDh1sMs5GjjBrz2bjSTDJoFtLkjso7CTSL8NBG9zMXuZdvy2v",
  "key33": "2yRQNCuH5TQjW3RG29ZkGacgppGLZbSTfkzbzgfjC88js1nd7endiMb8jcNiAgAGuguSarQCBtz4QS5jpsqQrX17",
  "key34": "5qTjpGSGS7D7hgtg5KX6NBkWS7meDjZTSTvbo324zjW9QLxnsjnUtGe3HL8aFmhxzAtiWNp6DPBZVoAHN3KwMj31",
  "key35": "3SZHNEtD6oYT4qhQA4jtvdLgCac8aF9Xf6Z5BMS2VEay7tvhjA833BGH8b18X8A2r3cMjjHTBKadWFPBdrLWP5zR"
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
