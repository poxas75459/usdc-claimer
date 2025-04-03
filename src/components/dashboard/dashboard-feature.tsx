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
    "64oVaRuCEMPTYc3JT4bVMkxC1oMdrbNUMr3i5t3eyF3DhMR7qFPb7yrVyZWUYaNDfTQxc1LVWbfVLiKNE4i9bSwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cReMszsyb11GqPKXqpzMnWKBNV786AionEY9Wpr9AmRtJRNzyPCsHS1VEyhTzcM8zNejrfsc2uFUmwsK3mcotyq",
  "key1": "2tXJjNYihb9UTUGKVBpKvMeGcVGJkf3fKLXSGAAnJEgxYL9BPwmpCtFkP1kxfty52yYp7kgowd3jDaTmiwdcfc4g",
  "key2": "24HfFTjUCeJQ9ki8njEK7hLV6iCDYTcu4yx5BsiQ8QY2QY5C8tzY88LWZw7ZSLwqP3nD9XjDNsSJyBVtQnwXnKDB",
  "key3": "o7SSnTSXWJYLJAR6aE2q3bzK76n4ppR3Fx7EMiiKbVBdXZTq9L4xy5jyHahKTwE84CRdQsJExp2z2CsT4MPDEkN",
  "key4": "2HcwVXyeaWZimCzWe4iksCGZHuDPA3RurzSXniisw4upCFHcQzuLKf7YbwU4iCj3M8zeCJdCLcYtwdz4LXFPfMZu",
  "key5": "4yNnegCjrM1ksc8W6z4R7XAiMtpzTD7CLK8MdMxek1aFXrghJDcqKS1iN3VBYehNGQ5zCcvCEMwczFtZzTYo6AgP",
  "key6": "4GFo71zgPvCHUuNALcnBBnAsN3GDezpCQMpecnsJrkpb6WauSYnvYECLp8KfF3TvuJYfAfyaDNqt6ktjbeE6grsb",
  "key7": "2yMuSjiSLi9wMMgXbtic6ZqhAD3YBbMrAqpZst7jDENnE5Un5hmupF1Pk7vPktecYzMwgxUT49F2m72ZyyoZvPgK",
  "key8": "2sNcKHb6qFYPS3ReMrvxXSvaufs9EX1uXQxy8wvHqErRJXRhc4o1mKLXJC1YE4gdjNsGwDhVvY52RSsksxk1Mjy6",
  "key9": "4XGe5UpPaoNFEaVaQZ9mHLSp2AAaqwWD4DGwRPhMSwgaiiDWgWPBD5Bca61y51BiRvJeuiy8AXeU8QzUGBS5oKJH",
  "key10": "AxpXmubGybjYGs5pp6McNnN4arvYzutDtHb7Q9K1AQHv4zcSuMrdsFdMYb7tLJra3HTimcjHrdyMAuDaCRQK1AJ",
  "key11": "5jskyyBPbfS17RDREQJiarRzFiDi4nyyozuM11hkYM3ri3o1tXcjyD1SDyuiSAxDUeWHj9jGLf1CpuD3p4ufPk5T",
  "key12": "ZP2yBdEQqbtyY8EHoQdojYAXcD1rtDxuuQqLhBixwQPJNifHG8heV4DS1VCFQ3xhNQ4ZyYKTXnineGcwiP4hoUt",
  "key13": "XLJ4X1W5J2JZnQowEg1tKnvULyVz7Y1rYuKo1ngarU9c1Nj19oCXweHAdBFPUSA4AHNwqouuxTAS6W1C1TKgrL4",
  "key14": "4vECntgJn7RQfkL8Rj23v69qervZshwNZNfix4cqjn9KNeTar6ozPefVcXCyofDN9eQcF1FARHGm5gAdK4juV3Fe",
  "key15": "2DMAjkDGuEspMvKChCK8CZd83SnL9be37CE1wTWKHMbCGcahkJ6Lr8mA8bdSLTYwHJPfcxbq9q1Kzpk92XoMMivH",
  "key16": "D1keYhsZp78ZhrkXG4PfCV88o3oLdVadbpvPWwujU5x7tHZ6yU2m7YbtcUbrwifcUNEW7tEzbtS6WvUa2aNjmce",
  "key17": "4a2vPyHbw7VK9toxan9BPzbKWX7jEVF2GFgSeuNzKvPTtdsYbHwpLT83U4ArHLpTL6TEsoonS8KyAm5xJXWUsrDx",
  "key18": "5taDvdbhwubPjcHd6zysShP1tWv2RxEiLU5k7oxtSNtrEJJiWEjgKr8BocbY1cJfkXypv19tdJWuFBpshzG8QmcM",
  "key19": "RDvrUaejimAvx5qi1NJxHoCaavbtS8fReMUs7eZrJbTxAgrc5Kr3aa3A6mBtVPxKLpyzBDUT5hpafBCPeAu5yfq",
  "key20": "tiwxq5PJxARLxbyWNrinYxJVczGjw2Hje6axsE2HmNaofo1PUpz4zbjm1t4LXPw1py3wahWbkDiwnN5BFry6f2s",
  "key21": "QoxQmFsspaj1j3qe36yvZvr7mAQTXucGzQifrUGHp3yZt8DF7iH4hfbogFXPEg8RWmduFBDSaLtyZ5ZAhPN5B5v",
  "key22": "cmcNzEY9ewzkoPMzHBRaVeK8bnJkiVXaesZyZEEhduM9caAFPM2mzRLPeJTbxGQeNnADVPWqShC7wWQcvDcihJw",
  "key23": "2hqHWP1q83JgeDE6KWHA24HYhv5PsmMrk9zPAtmqaugZNNs8gfoxMdTAqBArjbwdftySRobp6mEZyUtqkhBe9WmH",
  "key24": "4iuvsn6o9Uoydi42h8ue1F2W2GBsesLAjPfrkZ1y5pSw7AtdbKJX4n6qxWzz2MinEE2DAKxLCTjLzcXYm7JMExD7",
  "key25": "5udJezgHfssEw7MwAxQuNGM9QrUoqJxHXWYgKoBHsuxoVaUg53izRpn1TCQ55fTyNvHBtXy86oKRdquUcSk6CVai",
  "key26": "612N4wT9nHQJa6yebWTm7YNVN4AMErPa2osQPJpCCQ8q1poBFq7Ni2Zj4vfcL5jMymPNtc42ymWQF2xn8sS1ch6z",
  "key27": "4wBYvkYTh7sVRwj4CRhi5983QwvdcWcDDNkUfFSWpTtBc2VCNkgxTg9P7SnWm7Pe2nBJ6N8mcqo8dQipJp39ujZE",
  "key28": "3R5JAdJ4nWA4xnr2iWSRx5cMkXQDZCzaZW2krU9YbBqbjAouwWvvHVTeLBc3ejV2uoAhXNNFbDwpxpJhSMn8dffP",
  "key29": "2oncodeH9u2kmQjqAr15BG9JyHrHEWXEEkPrjFZgFuaty5idtdyDLpFV9v2dKToAV32zmJ8nxMs9QZ2gCGA7AadG",
  "key30": "5FCFXNBb2o5QoTLhjGq1qwphMhZfrCYRAENxVxd6ehuCVHocRnKDAqW2CbGKEPHgfP6zFkCivhb9eJD8qNnnuMxE",
  "key31": "5ck3Tacy771J9q93szTz1QvFrLvkUNXNKcfYu8jSU8AfyZb4T4hvmSbSFb9KrqXNPkQ1rGbyDzPYgQBH4fTJpcYL",
  "key32": "3ct26ZvCzkALsX6B7pLP89BwAzvaevCRsD7R7onwuj9My1RrwhJe7ard3RD6tchT9q1Hcga3ubdxbG5pqzPhsLPR",
  "key33": "5YAUyUR4Fc1ZKLqXkErCf8uKJtFj5PG3KW8fAqjXfs5t4QB86uREPDmBduB84mqDpHLHRG4wW7QxLkASz6LFaLRC",
  "key34": "2jUELqC6oEeoEMzrR5ookzdUiHKLCK6psxXiNaAuCMupW1fDwKbRwCPDv2y9G8TkxhN1VYKMwTF9fEaup4edrzsU",
  "key35": "Lica8bY7NzzsbAbtrpEraoSFd5Gug7Cb3ZmCPEJiCvm5quwU4wtUFLDy8govw5N3jjaLqLWrhJQTa8dgv4h1WJY",
  "key36": "4JPmt5EuRkWKohEADCYoEE5TbfUUvDyL7YGUr8gXv3DWyY5nTZykRHr1m3LBXTXkZk7JgvGHoR1SKxhd38Y7kFps",
  "key37": "4yZX544cB8ZvF6G6gHjQtu4F6nb4opgCy3BSDYEUiVRXmSQmfACyGPjvBB6RseRNGFoCHfHXUpoGE6DmLGPTdavh",
  "key38": "5A4xoi6vUoierFJw6bCfwrRbk83fqpQ638GDqY84ueDPMqHjtUqE1roFzCBboXVSEWQCKXFe4PpsE4YSjj9738N2",
  "key39": "6RXD8eLJxD1k8VkNsaWRStsV9jk6W9BLpdUPUqaRdGWumfvvVxzntoWRybW35PZ7hhY8ZVCyWBVZrPQG72dAPdM",
  "key40": "3VB5K6RUG72kJ1nkRvGY5WnSY7SVXkceTPgDtQrn8Urz1W72cC5SeqR2VS7i2TQSLcLtmMnANcHf4qdQzg5oNxNh"
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
