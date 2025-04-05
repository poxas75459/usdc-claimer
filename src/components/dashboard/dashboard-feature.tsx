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
    "4HuoamzKU6etdL7agiAnGmNydPWgWQZ8cDBgX2pmi41SoQ9DqY2DBjLpoEo895sxc88D4gbpGgcDXrhZQUWhcHxL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CJfDkiH9iUFCEnDzG2BAjLisSVu2EVGDVcumoGZEycGBoRDK2iqnd3T8gjtwx5xZg4diMgDoEg8T46AeTTF5pYM",
  "key1": "4BnX4G3ARVU8aqSo4ydxHCWNA5XpHXM2gMfdxc12KrwsUDCjLdx4KSxRWxzbe1tmy9cHoT8GJRm19H4dEMktiaBA",
  "key2": "3Y6VYrs8aY56Qs6zWSqDzNewyFgNAVvKq4ndhXqiZaX3T6N1emK9kZ7U3TtaZeogKAEEJCkA7ju88SF7F8EqWmaT",
  "key3": "5DMVn9RsF2Yfneq17A4kK6jJ2d8KmmgSiqby75kvoT6Tf3TrMcFujUnz12CavRZ3f7WcH1zLSbGsvfNpQhJE4hPu",
  "key4": "4aUUAz1NdmS87k3oweUmxqeab4ciEG3eiZiPPvXp5gtxMJyxtXJCfxXP4SkMBuYVHaRG1smSzC5PtTtazm55gKXd",
  "key5": "3rapndnBZwxPYGv24ZjMNi1DbP8idxbLq4YgHJjDpuZeBvDZ1gV1rSzf6jy5A69TKXobNnBct1c2Ee7zbB7SBqRb",
  "key6": "5pZpeMAj6tkvouFuMo1ZJ5ipTciu9QkPnAZgvEjJrden2hW5wJRre1uC562TkS5qbHsMdk5ia8vVrSbhLC4Bgdpo",
  "key7": "3Yp13hjoMb2D9s8jvfA6eJxcNF6ZPRsSKVmf2MihDk9bgmpVyMjwEDQcHJaZJAjhQEEL5XZRDGi468PHcLPNuS6b",
  "key8": "3vmdxyoeyiw72No1pEQGifynQt4NptMANa2g7p2o6vrq9DSiEeSe13fr6HjFpjAVk3Lb1ZpRX6wYqz6Nm1Pju4GP",
  "key9": "2W3StZt1nTdsyZF1FnJsXGFE4XxSnS8iGpHzQSrYDTmgUMk4Qn4YuYNESPCoiyEfWbp5kMCUobMpU6aYkGrvBM3C",
  "key10": "jqcfSHmggHppDRoGA5BhJdK8k317XsdGcEmF7Jc43FewUtBwJ7nsM6B7ZyyyjKFhMHDJey1H95EXxFBxnr6aFcA",
  "key11": "3PxRPTbP7zxa3MMNHrwr5R2WXK8QXfMQEG8iWuZ7kZT1db5qLfXdDUFvvVD6QPLjripKG5UBxHJBkMBVcHZEfEB3",
  "key12": "3e2LVLPU1A3cYN5n3BuVZn8wXpYaVwHkirCSSyUiumisUmFnfakRC3Hxiu6Qk6cViDfFoRQk8V4MJt2MWPTKhZwj",
  "key13": "44Yf4p8H7hCsNMA7HsBuB9htxRrRzNJCuhVGXQnWEL2xgN6NPncjDo5vXcApePv21Mx3gR2sSnyj6x3fRjSADi69",
  "key14": "NCwL9TTfqK9LjSow3EiAxuTFySCw72gpJDAz813rB4WkFKnit1qVrauoYsxQAV3bJQ85wZHTfvRWmL4mpk6Q3C2",
  "key15": "BTqwfotqpH5ersYKf4hHDPJcGcWPcfni9GNRHDFSpBo2J8kstv5NrbrvNCFcSF8Dpw2Ezqc651zScUtJnJgRJ5i",
  "key16": "E8SNVQQaPWbCNJ7oZbM38LUwG7LbuZmGjBwhdtus27wZM1pc4C5kRp7PVZoAjAxSnUBu3WoEFjmk5CkEjrtrQZ1",
  "key17": "bquD2MEnTkUn396NTWCKgSjkoLoduB4HfiEUhHicma4mMgoorqHRYCeTu6qaopjk92GkJ1kyjcuLakFVqPmmwdC",
  "key18": "26FJGeNbUMWuMcMqMn7hw566WgQUrMNXTRDRQupYmbNpnv4wNkf1KgYkapLAP7r8WegkZX2s8GMEUGSqd7iyVywU",
  "key19": "2sfysSJRuo1ci5rXwsb9rSYndqiomcnCp1RCzqEvWTeiyPnc19Vs7F9Xd5gSdb7Hxh8aofWT8zodtidqDVdRt9SQ",
  "key20": "5b1KMeniM19bQRmcpMmTYet6wsmvht7kmKGDuQvg3i5iSjzt9HRGVAdf5FfWjxcMhKsJv8yakrMEPGy1kKRFGuWu",
  "key21": "49Ccz542yGTpCJDue5P64MnpDTeXcM1BTChPCNgEwYN33kq5ZonWGCWs1fX4d2iyRjBmYt63hw35PaqUWRDYxqNJ",
  "key22": "5kEmAuzdTdi2yi5xz24dzWB85W4uu2MCJn6qEw8KPXtbAXJDpwqSifkPEXZojVMPsS3h2MA7ooNbWxD2SeY58y4n",
  "key23": "5CTZSkdGuEEZCGgbq7KFPzZHzhMPFD7ysr3fAbMMVFcumVYVb3i4NHRzPfQYXNTRNHa6U4a3tnFGh3k9apD3CEwM",
  "key24": "3a6GbDr1mA2VtAFU7NgVt67FFPi4qxN8wU8y8w3nWyRe6oTCV4cctFsFfRkRqPb6jTk7yo3oNoRmu2Xqyuvc1beW",
  "key25": "3KXVJ5hh5eK2HnBhg7HkrYx5MYgScb7C9xfkGfdPw6r9HwYxGnbyBVVT31wVYgY5vuhjNBXHWXCznJfnry3DVxiZ",
  "key26": "3nJdGJJbvAM9ZunSBdWsvDJySvQFt5hiYWSqVnuRQuCScnZojKcbQcQ13M32TjMmL7GjyEFKZ6Hxo71MMG7fKFmM",
  "key27": "28HheMkqkomQSXBdgvGgPwYWg7QLZQfTUgkbYNa2PaoheiQmucn62y4x3VExYZGBCGvw9JVxThXD8yVPMUVBgpVx",
  "key28": "2DmCWnfxchV3kPr2LGjQNE3CZKL5ttyR91KdtETmGjzBKqsE7Ha5qk2HHHHKrx73iY8RuHsNuKUYUQhRHEpv5RLT",
  "key29": "2Xqthk61Myv8MWuFcK9hzHReGmxobTJj8DGmvD6awT2uiG9NS2QhqwagrgvLLrUDKo5PqfrYrz21NjShHykng6zd",
  "key30": "664t5oLE1Pog9tmxwYq8UxwzHzAjY6Kk6HW57vhV8hEu1JigaUpTVXpzUHKFdqJdVAgzFqw5YhFB6VjFauqoZUrU"
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
