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
    "2yzPSjmFXdokhkWsLWtNUsaYiyS8giGnyz1EdMcJ4waeekDzNkwTuLwtVCHxLYYEnmFrh8J75Egt7Xi3YYauaSj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PQkBStzhj8sLDY9a6Sr4efF8kfQyk9ctphdRZeS1PuniqRx25zXQWr4y3MHrc1ni67YVsKtrscffkhkWXe22aZM",
  "key1": "2jprf68Diqu2MoxxGKFsS8cbfM1WbiPX19HiWNLSng79RhKaE1cSBePK8zP8dNjZWWfjRQXzVuaUScyqyPzByow8",
  "key2": "YxvKnt7Qh3coDwoyREJHu3vUszGnaaQgw2wtr6EPYZS1CESX8EPA4fkq3m1bWLJ5JVuh3j8ftZELAsw62KoqiGs",
  "key3": "4zhWbMFPhe3CUdf8dS4BZcDB6zjsbTeLNcEBzNS5TqEU34bCYRxs6K7ip6fECeJECK1PcJUcMkjeLhkDLZRBTBJa",
  "key4": "mHMXzQmrYxGwgtQXBpAWn853AQL5U3muNt7jMV6wN1eiwsHp6x61PEQFagT93WpATrwTZgZN99cEBGH6Z9uB8B6",
  "key5": "5fRZVgXPoDJ7VnQjZptoT27NdLp6YkKhF2HHdSZMFYWeTCy3YxhM4Z2Z35vVR2Z29EvDBHncbM4bKJx1ufFFtL1Z",
  "key6": "4JkwgfjSa9vuBoGjrqoBMjP75LwdAWHLiSr1MBhiRoezzKqz1TrvtipTke6Nu855M3A9oDH3AKTEJfNgjGsU46yn",
  "key7": "3aVi9r9NzgUpp7ATnTt67KWe4fVHgjhZDWbz7qsvnbRjyHYXdCXyNB4bey1BnqDm4sC7Gbrc4AvyMWsBSsYE6y73",
  "key8": "3yuSNf4WBuUiwbAMSwS3oavEWFbxreG2SjvP2mjsQy6zKWUgQQ2tbFFyvDeFbeUy7WDso8MMdyAXF8RraCTweqaX",
  "key9": "2EHat4czU8Pe1TgxnnpwqQVwqGGQzrhr562FcG5Ec2g5xAPc9qagiJAbKpWqsyUyyCyojvwKCPauDqnPFDbDjRSv",
  "key10": "4mTV74BRPg6gjAkcBZ1rCQebAq6SSyCk7434w2MCBBJnJufY3VHMXjL95gp5pNt3X2D6XggAaCX1qMfn7yr6uu9J",
  "key11": "27P7g6WwFN1U538vczL3THehRGXTK7jeSbQz1V86SFTBhpnxYZENVaaHrpihFoeCMAZF1aUahtLDqBjhSucrjTQ6",
  "key12": "63MtqpxN7dE3sMyeokSyg1uZd1TJv3rkCB1zs99rm27NPp3BEb4r8zpcQ1FdgxrLnJjPDt7kwFQwkNoybUD1cUYm",
  "key13": "2H5rJG9WcaLMDYdrPdWd3vcFyuf7FYdX5nVEtg5qtGuMWVineWwesHzEsEt8cbhcWa32rggtT8adxtLs6WckWfkG",
  "key14": "2xYdrpEQdtBnyzupvLLLvKBLSRAK14JaPmbmsMLat2ZK8FdetU1WeAH7ZLzoDn97iwPTzDWBXrAMrM3ZSTqV6yYD",
  "key15": "mjyPH4jWPXqYFxnC59XG3ksSgWTZwnPt1DJFYyMchGuG48KJpoduNTMBonTeVaC76pq2kMhpK1QugNuNxgoMXvu",
  "key16": "8n4w8mT6wv1aM6jxMNJuxJsMwBG2ACE8K3nTzWBMzauFG69DioNzawGGtqAbuhpPKhZwX9dYYyi4dfjbgHXmqpo",
  "key17": "2q8n6EvfeYcAPpeqdQG2o85GyAhMiVtTexoVbExToiYWvPQWXv8Np2wehw5iT9u246grq1Q38xm3tf2YNptazPqr",
  "key18": "29zVZFBr3Mxzch9tGBFUtqmuX5kiViHiLXt1vfwYqpdFbrWQCgHAJUobt38xzKkdTrQQit7UxVarQM3Dr7eCq9RW",
  "key19": "iNswZeEPGLop5ZfcezpS6pmkwH7n2vZ1d5exbsk8ni1B7e9f8fpjJvAY17ZtqFrT7MWXUWnuzX9jm4n1vUdD4jR",
  "key20": "UG8t2B9ycV4f97q7N9MNguwMJU3uGftLND2mmpDNhFK4f7F83X1Ep9rT7eRjFkx1LGKE6pr2d68WNeNuKpESkRm",
  "key21": "398chmdQFSfkusvXp5REBuJawXeV5pUVrNTvMfUGDxNWw3GVz2ZR9228QNQicYzkMLHpJ2TA98K6Si4AUwKvqejS",
  "key22": "5k1Hq4GMiY5DBQvvQpNUg9ojCxhaWtHgvUHF8gWHF1vY5LbxCRsNntPm8x4F6vJrN8yKy3ai4eoZc5GKMmaDFB3M",
  "key23": "1joHvNZpfcjRhg5W2sb5bZhFuqPLu242GpHeEJyWPMduSd3BmkcmNyDJmdaXqwcdZo36vda3cUqN3aVj5mC6Y75",
  "key24": "sCguZMqcTGMxy7c3gohcB1xfZA2y6MS4vBLTTpXsnqg7LVA4xU5aoFEK37VkditjV8mfHh5CCN38w6gyWCvMGYB",
  "key25": "FMzzw7P8XNX1HuAj8t9TjWdZ4f4eE5WCXTsVBgH8maLYkd5x8b2ow5HbRuNzWctih2fkuVKZ23d9W99Zpa7J5GE",
  "key26": "4YUnkoLJ51oE46gCJCXAettPD3dXwLbKaNwz1TFCEARpquZtZM4u6X4kijjYywY2Cu64u9FUym3Roy7xU3J9W3jY",
  "key27": "2jB3q5Jj3v6syEWqZmxcT6xvoyVmLFfR8Mg6qXKkSz3VaoVGBSxFs9nM8TWZKQJ9PixrtoAgjUMWEP14MpMukfyq",
  "key28": "5N2gbs8wmFG97KZTGwN29Rbpm3iFPim1DzH4u8J2LJXFdcxLvYmcXaJs4Ky1PdH6U1y7ybbmBbAK5aueb7ntB2tv",
  "key29": "3yK57bnrsr9PuXnncuYGVta95CAqLQLHTifEw7Khg4TBRu5x3YgzowXcrRKZtu3NusVHAA4pagdQDYo65dASMN8U",
  "key30": "2mEsBT5m7LraK5HHLz9SH1XTn6no6ac9VH8SvKWviEVcAuwjuhvxgekpj99WP8PhMrTYZb3KH295Z1qyrPCMqX5D",
  "key31": "38ZaSV8c9SDn1Foaw1Pwy2u89Rm2kAEByMMyixfoxx7oesijz6Be2MPy9K15MtjiiKa6zxeRAbcXtVLzRRFSjoip",
  "key32": "xgNKLkHCXPRUSWL2KjsgL5ghhKHnppf41TYEmA8MpLdE9Yr6n7JRyBUEAhQCVXxCaWSUoo41TKCYXUPt2NUQDPr",
  "key33": "5xjmwNbWFAWMqUZbyXuLHoHqVvGppZ5k4Zoputi6sGPTo8rdw33bMXoL5H7JPMFT5dkwTbQKSwyAc9QghT1JgtsF",
  "key34": "4EzvgbmP7ETkDqRZsT1792z9mnKpTVKUYPHpUw8HwzzjPwxS3jsezs2sWrCdmyJJtwXwm8pu4Qc3gSeatEaCtsmt"
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
