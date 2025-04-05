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
    "5aQnofokci6sQGhRJZtQKCfGJ3ohQ6MHD8t7PxMaxrZvi7s5prVrK3Z3i1jnQHkGxKf5Hcj81qdQEkiLw9N2emXM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ofXVHySgXa4RRdEzYqkty3AEKrpivNBLm64kqYsfcxREAonSbDgTDcX4D6fbPM9HcT12RN3iXDN4uLhxRMAxVcL",
  "key1": "4dtQ3A1UXLKd23i6kPbAnqFCH5MYoYR6HNxfCqMTRT9aLshEECGx2XQrDQcN4MHApjvt3UTHH9EzMuMDaMX1P2fr",
  "key2": "3YsNY2N6oq8maRXXupii8txBXTy4M4xNoBXaY9Pzr7NhBSz9FTdGbo9ALJbUG1ofyV47DfnMrgWuePazPTRLftz7",
  "key3": "4dKbiRecSNBGWN7K4vpnbKnqS211et2ZmU4wLiq1ei3KsujNS6DAUmrRB1tbu8vwszkwjz9Gd4ajs8rnFGbUnsAs",
  "key4": "3fgnVxJdKahfpAkX8fRHMdmEoEuD4vgwmA7uEbZDBvKptERk51dMAYzED7B3y51uo7pcJzqqhD3bcqG5k7jLW9RL",
  "key5": "4Rs6Vhbx6AMyyycFn6L98qx4HhLCh3vcBCA15wyYE9Q3RxVT6QLsgLGGJqU2f6NkNaq3KtAs8h2wvKpL8ETPezsn",
  "key6": "61FxeVWDxrJVXAVeQnYwH5KCuzh1EqiVWnF4QQwWsZuT6orD1B2kSWf6xmYqNV8jYiorhRptDD1rRyeHstyGuJ1B",
  "key7": "2bXkGfPNcGZ1ec2MPuE5gqWtcBXb7BG3rhPKpW9MFtYco58ArwG23ZKEpZAQaJB8ZekTZC75rgPnVz6mavgZSWt4",
  "key8": "26MsZDpAKMvnANGzHL2cz1pzccFsXH6kPQeKAYAsJobLfMokby7C8iHdRhcWJGaZ89Jix4SNcTQKchmNBawwwk9j",
  "key9": "44NhRUTqFGLSYQnA1ketaDwkYpg1dJEmrxhKa8cNZXpP7iWA8mVk7qFRz7EgdbbcT7YiG3EUCi9fGSWVwugEPsy7",
  "key10": "5Ckd3JVdaRH45fA66tuAXknqpzyPGRNDgSHsaHwPe11PrFmkKcCFsusqce2bYmc871SBf8xPRorSU3iBu4t9MZ4F",
  "key11": "4ggm19JVXfoY6Wn1HNGmJnzRvAT5B8kYjqxbk1gVkKQ6CGFND9ANGg3SuCufAzo46rxDc6MHc7Y3o5UYfLMBFpZ6",
  "key12": "3guEux3wRvCPXVrMz4i19FDPNtdqfZtYZoqsWUfW1C3LnSq7JMef9cVU7LQ1Zg33fyPcnpBimjQCwHKRKd9kyrnA",
  "key13": "2HV4ReVrd4Sagw3u8DbSeevzvfkoJcKzNMS7XFpuJx1QkGDb2JZAfaU4c1JiL3CVL1QXwdxux96nCyityJZRXg6t",
  "key14": "45C4uofN3cn8t7wwdCWVy1GiGZuao7YoXdEaJVfyKPsvywmezyQdwG9PFE7tcBJ2bu3w3nZGPRTjHq7B8UXmyLx2",
  "key15": "fzhUbE6AHS7EwGs69ScGqVjofPKrXas6v1bjqm3edMutSHspCba984pnNnKcnz81vawC47c96tthJqbE8gtwSyD",
  "key16": "5csKPVX4E6qkmTquv6yVEcAjznCzZPqxmJkAuFJy6oVvNhpMVJWGt1539bmFtLuR2duxAqN1ZZizJnoxTrC6obDx",
  "key17": "99MJHWuPBUFwznUFwZzzejnASwq1SDRZPFnj4S43APSWVAG9dkR2bvLhpL4tKB78gqyymccfVS1vJuaGBA2wG8d",
  "key18": "2Xfi9FVkhyyJUfwkqT9dtuBYWMYxaZ95aQZGqA3RVcxHnrPGuh3ZcKc9GzhNN6MSeck7oHQTHppe1QWm65pjEEEG",
  "key19": "5RNRWEKDBJss5CKg3X4MQ1miq8DxSbsrdy9NaE4dPtiKaQzgyWoJkrw6H56a3RDWJm7Cb2nJ13YLoetZ16teFhNL",
  "key20": "3AzJckXmrzDjtVu6d9HXgbHFV2Nz18RZTbptP2sLwEhuxZkG2x3VfYmPJzhxqTsejdEoG9CfwVWNq1eq4eEfb97w",
  "key21": "cUWbsJzDcWregZWh2skAJmZeEETwE5nyCaxeJhokSxqMaLGprcQrhseDaF4nkD5wpQ3RjgJYkikpSqfSsPPFURQ",
  "key22": "4gnncQaoEwey7wqfQYqD9MKjoaNs8jRctZ4S4miMnRKZBhLfMyVCAiKzLPxTtrwsF8j6VR7uVHokowLbjf1XCnr9",
  "key23": "5SxqNM34oB7bDNyySi91JYbvMemgFeLuTQnoyL5Jzv9KBumWc96W8P766NCPhFms7bBFWxhjY4ojWoDLi65BmD7J",
  "key24": "5Zrug34ghoeUHmhvuELvLynGYdKv5J8RknEERKTF8VSTQ7NJzPBSYGGQVLryNqg4YUWTzrDMUxYzYZu52K4vkrB7",
  "key25": "2ixcqHmsgpScFhiMKvYyMjSJmsns6b9MXMogQfCDDpnPFjA8tUmizXN3KmRF25B6sATsUQf2XJZGkrzSmewV2yg2",
  "key26": "2KU1MSAbnNx3VczWUbguaxVYaJb4oZTyHt6iPEkynadRX2WWgta1sVoFFcRWu8JxKQmmrGFRbqmB7dFv1JcTekyN",
  "key27": "2CQrKVVTGL4PcyqJT4CBnTxL26W13DdWXu1WYmazqDKH8rE9oQKxsvRfg3dteENkueyQaGoqzt6gDoKKdg4VsQcn",
  "key28": "3KsSMxtznUEZYr1pfdaaQAxNWi5u5n2QK7uHq5dhHDk8BnCh74A6PZA3hSaUV1ojZnP9JjihxzAcV4qwT9w7qNTZ",
  "key29": "7nURepascAdYn8YEwW3vWuJskUTV7Y1FUAoC5AdpCXgU1EjbTPK4odrTCWMD3dge5ma1WcuhEHrzdTyjSi8n8JP",
  "key30": "As99zDbLr4DxfbKbvSsP2mxr8tKUoj4s97kpfhpMTAsLCvjMJuD8jPcomCoFVLiy9TmRtnbjUFpG1zZkBCh4xuR",
  "key31": "evDKLWboHsztLeDgWcv4Pv9fVzorNeoP83c6FmAntb1DUqKEhreSKx3C7wiJJmfVcX4XLpozh3qjKcyqN1NuPqz",
  "key32": "4CVeLnwQ3sxT23zxFL2aV8EL5aHBgkhzMbGazwUoQRwj8VkkxghC8JtyQAHahM68yBfvRg3SoK9Q5mNwpudnFf5z",
  "key33": "4RzYieX7pETVJ473uG8i4jWukByL9nBW5FxzTbHmD4S2449p1PifTFdfdFw5cmAUP6Pa2WXjbPnHhCh8RUZH4iuD"
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
