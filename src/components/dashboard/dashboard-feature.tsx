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
    "34VGMppRCfk5rkjrmfKPMo584N2cxk9Bd9CWhR8zEw6EppyGRndMcWDuw5GfHuqWhSNmE5eiemvmymcZXS6uqBuq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57cBHYDzfviK8kSvSfdK4t2wFrmAL5qfbNLT9E1nY76B4bcFR8Tgp4ntz7H77JZfGFXz7ve2j7J4uYjLDUEXtnPa",
  "key1": "5kmoV7YJ1y6STD4KGFakP6qsZ3LKvZWp338BuSLGkYiE25RVCynXuwVqvXf2sTcnDiYuNqieJ1Vn4N4Yk7stKni8",
  "key2": "8mf3ix7AGtTyV9M8mt655VBn6fDgC8jmi1nQojLTx3ipvDisfvJjCpAdfTgJVHABwHmyRcEXWtsHBf6KbWpRAws",
  "key3": "c8RQSirRWtcK299A7ppRCR1Kw5Ukk93unEYS1hgfGc87aaSbqrkJEqAHcMxLSfZPxozYSK6UCAGC1uwZuQUsnou",
  "key4": "2U54iaWr1vTaTT9VHx4nq8Cfbb7K5gPmRD3CzZni6JrXcDA4VKucLLjqvCHc2E2YBFCb3ckx2cTeq2iaakCxtrJE",
  "key5": "EqFLrATz7wqpgXo696uhbBdP63jSiF6rNCdgXX7QUhsnYYvzBWDvsJhnDfm1D395htozNZroi1wgsVztA5AaUyt",
  "key6": "27BRJvtXPANyPTz7uBPEFkqZTZvNZLzXEhWbFaKiSkmVtwv55AxUkCKA1KV5qBi2WXADTARybKBCS7Cqkq6ijkBh",
  "key7": "y9yqxbkftDBVJCcVbJCBUodhCnj4mw9tszX55traLsFeBCSh3xAoYM6aHRDSFX44nhcrEPyywcYQVfkfxEx4mWt",
  "key8": "4t4UTRL6oUCif5kCM4MtgoHHPMXYfUvbj3euJZ1JJCdkrdveM9HbMugyWYV7xJJY5RauXEidW2WSxk77z8U15kqg",
  "key9": "35PySdzwVSheTipaKVfNLsaKgfMuKMGrhbJgvZjsT2rZ2b2Sc3pbb7o9RngQoBydqgVJ5MmqyC1PP4pXnz3Y9Pfn",
  "key10": "21rinNnbPJkuErFHGmo5GNwnicTTtQMbFBBZVYG79vq8Ej9pXaYmyiEj1o4HidjFp9YNL1AL4X6hXcn9cXd6frYw",
  "key11": "vbu9tBq9eHTowUr3PBoAz8VAVMtkZHhFJPavUtNBvrCtvMfFbD1Az4iXJoiwNAK2pFdjuE6EU9Dr6TXQ99MMqer",
  "key12": "54EHUPt7beTPZWdBuvDRzvCNrERgpd4TXGcrgCJh24jvPRnXGGRUuNqM8r2kVj6Yqf2uhvAYdY11hqqCnD5SCf8K",
  "key13": "2DSMaBPsvf5FKdDxHi65QjgFgEuGb4wPbB8r6ERb7iQRjAvSjHvpErxC3UssXwxSVqBPqE15B72uizTua2raPg8Q",
  "key14": "eoxY5tpDCDiLZAFk7SA9mKa5BRxsCeBy8tmdjM9b8nD7tRnUdPYfNNzhH893qJXSqcNiS4R2b9kdNaZvjMo3N6Q",
  "key15": "3jRU5NmtpazoJ8pZMM16iLfLujPPr6RozHD53LqcQ4wovKFAWLAuUGsB9HYrK61sgAdBqqPRHLJvR5xdyAJk7Lvt",
  "key16": "2MtsR5a7nPfKC6K9RuHSxVh6hyTLiAfHtTLvKUfrN7ZPY93yqvxD8bEH4ZfJx1PaXASYAY1CxmugMLMk1BRdSJNR",
  "key17": "D1xSv1gmnG3PvBHUMMiSFcc56smPxnY43R9drgfdcHBAnmVujouMX5JJcWgUWsLk7QUfERqph4ofyuwatccZbEw",
  "key18": "9Eb48acQypEDGU2uYuYA7Md7ZCEDUbudfbNzxV1sgkP2tPodmxC4Voi7U7Ntq3emYJLbiVe5XnCymk3nv1exzNM",
  "key19": "2g629r6rxqSMHGRKijYFM3quyVzzxZ5QB87wCG5qeJsFgyQ27QL16ug9bw1MMYxnRDjbCbnCs2B5sNUo4t1jaEkN",
  "key20": "3mfFp85YuDQctHErdnE2LpBWwajnRM1i469uKKXquEqXZNA8GsNXwhjjepp2QbNxVHLmXcU8VPkrzBFjR3KxeDrP",
  "key21": "Xze4xe4CVqwfjRkpWxmX8JbRJmiyYBB3KVkgqMLVuYXaPe3aVKsR5cDaN9gXw948XR9iL3JKkxiwLZGATHURccQ",
  "key22": "5EZwd7jfJhfA7VePWK35EvzWqdy8cheNW5NvHvCq3DF2ssJCJFSch3JpijaoAPpimYSghF53i16q3QVCK1DH6Cyh",
  "key23": "4wwg6D6nz9okoNm6kx5zj9nxC5A3nqKQVjURA35nNRPMbV987xFo1Hz7RkTRv2T3sbsqXXeMWPn69xNovtLHi8oQ",
  "key24": "5kLC5oXSSNhTKj1J7p2JG4DKwQ3WV6Hci29o5faMut2onfWctCeJxBhWCUUTA7aoWNALDiKVDieX2XVRFGjdzVgP",
  "key25": "5TPMrGENi4yjGgwYMVgdezYibgj28m5F3kGZR9VeS7ERqQmzPCAD999jQp9HEKz9Sy2Gn8YVt6d2oiD9MMyPFR3r",
  "key26": "51Rdooc47AtaH6j6J7WY6JRfo15JWjUD92UR5NGeu2vKUh5FjPGwt255xXdqnXWDZwdnpwWztdHHNg4cL8rq3XcS",
  "key27": "5SifAzqx35W5oq3qFXWfxGTL6PdKpPqtTqpkaozqM8EGuNcc6uvcYwnzgwBsjjjZiNbWppt1UjqH8hhAt5Ncf4H7",
  "key28": "2ZXGkkFaDuZf211PWs6wqEW127GwrQx8kJTu8p1QLikzm9HsnvtTNJ7oNw2MVuhE6xDxjADp4gBtv8HPJCkemdnw",
  "key29": "5WLEGTufkusCBd8WgevVPfoaMFNQ65JNadNPDVApB317biahSgzR8CXpBHyThDZBhLutkXaR7WUbN2avkyrg2Q6a",
  "key30": "2VxgbvYGpWWh3U2rDjfWnY9bpjiQsiR9qj9gzaQhA6hBgkqkMtnf4d4qDFZPiEj2ek5YXmJgwAK8vkngAm3mYhp2",
  "key31": "4AYP3e12eodTZdmZzL7yYox78QCAShqpoUx7ofhinySJe3ozANSeHPfQ8eTQ5LxbFqPUeVGn1SKQYWo9a9dySPCt",
  "key32": "3n462ntMx9GScb8C4YXqDYE6rqdJHVqEZJ7WSKxhLhuXP2axRmkncFmwusomwuZkY8kTTe9NRgjYQQbVhqRtvBjW",
  "key33": "3oGY9p6eG1x4m78XKBwtH1Ya8Lfq4go9uqPMZisCNVLui5HwZXbJmZNsDt4Gw7Wa4XD6wABTTjZKgwxpUJcswHkb"
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
