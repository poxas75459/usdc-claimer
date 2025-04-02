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
    "tcmGqCgiTcUg3uhbq2YmPw7aJh8hZnrSY2F4CwncxMRSKBsHDn7LbcJVWTuHQY9iWZzoKh97NefnpvR9qpyg1kZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LLx6usVGeqkCUzYHrXMkg6ED5vs5TqoDBTV2eTpBrSv68B34LJJgQne5t4acVwrJmft7CP1xp9ASX2ag92zKeEq",
  "key1": "5YNxBUViZWMPz9KyAfvYTBRZ8cSd1nRMVcD3QAt4HY4gjKRYDu4aDabjg4WXQPPHezPofcaVE1LoGfZNXqn8kQrM",
  "key2": "3mdTRWbYEynVQoD1komwM37NNNjDEr2GhzNYzjxwDqZsDq9oJAyYMaj6TuohtMWNxCjMqjngbiGeh3yHRKaUM7iU",
  "key3": "5fbR81vNcEPHVzeVxhq2cxYqy9DvjdpjnJ2wUiTWk7jpTKezNVjzb83n4zUjLXKU9z3GnEeNQuj4bVYkYsLFFsor",
  "key4": "1W7o6KQAK83DRS7wsdEUaX8h9CtpRDiNH1DQuwQXiYnu13TzY4EipMsBSXu8RwGhLv6p2bAPzVT474DsigVDSbB",
  "key5": "3XPWK7n5cexC4jzgrk6FEJNqJ3QvupPTPaSfQ65EVke3MwfbYibCgxoLQec83ZBxZTnkcS12JEihMvmdvrVUAkJ5",
  "key6": "5rWWFG15GY2HvSBofUDqejGiXSi1p5DEP52r6CnVhwAkYyzTSqP2pDHPUf9WYj7FjoBPzFZBknRPE8Hp8xe8WNE1",
  "key7": "51N1AwozMmrqQ8NQVJfFvuWaxgxLcMVq5sqFU8sZm1CfJyNXMDTtUJYbP4kCJJc5jhM8Vm8RkrcJJuMY4kY5UcMg",
  "key8": "2HgnApxk5hfDYrAqnFdE79MS7FMdgMWprVsXTycf2dXMehJJk9VBwEuUBqoY88vVUefcehnQnPJk3GF3NpBoPdfh",
  "key9": "HQyHLDUmY4aiQzxvTEHt51Um3YhHCcZuDinRBZRNEtv1P8xGdKtA6KXW5cYwuNtjzytPsPdknF8QsZWgv7hxgyx",
  "key10": "3aR2GFecdf8yU4xrtgomJ7dWmABtMPbTNnWeBBcimscTK31AnzcGMiSp6GR9rQsY1czCTm8eyXDhNY6bkyeNQjrd",
  "key11": "4z9YDkNTismAwyCumZopEeuh9vCQ9QBta3SEhzVpscK6dYDkFcpNTpKx7L528SfMQA2NjCPeuAbRTFaFM5z8Neoe",
  "key12": "5R2msS8a2XtMWX2Nug5hx8GzBdRcU5A4z4t1fxm6g4r2FiymNprNAeuvqSJygA6o2TJuZQgbGKVjVsNzX9ZCxBCC",
  "key13": "5HBBtHKspDPvEeATpgozUBY5PuEmQinBSj4KHm3HEK3mjFrtW4HJiDWTe77ccNiShBN5ezsVgi7zwTvF1EBQcvSB",
  "key14": "3f7xRyinpbseyVhvZRSW22K71cxnYw7L7VELqTX7ggqYg7Qdbd5nJ9mBQXnA7YqtzcUFie9K4Drz4y2aeGzitRxY",
  "key15": "58P9dxj8h88zKgcSvnP7MuKYnwwRAGLvxruLujRau83bwCTBwvfXp31yumwzXCurFcTb1xK47atZtfC94VtyD9or",
  "key16": "4ZnY3gd3WpSFFw6RLk6q2XJVBEoRnvYogvirGUbsQQfiSpDz489DWPHVx8hkDM1WRw1RFstHqx6sJy8bCEdZpkRX",
  "key17": "2aFbp77Zc2aAuZkC7mtpE4strMcC9KJdmkPjrSD9LfzJvjtG1wXQbsko5i1SZMr56AQev5WdnEjYTiR8yxSjaeTG",
  "key18": "4vNQYBzU7bd1gaieoxfPqqvwcrceYhqfCv5QN5fHkASD3p1W5VGV6bqMCUtyiAqZMjSaKbsQXDzhqpyM9iV2zodp",
  "key19": "5G2DPFtJhb6kK6H5b9ASX87f5L71qiZ6mZxszEeys4BCvEFCfRu1RFTs47GPo2vtAx7vvTyoUhewhfvDLa4efWFd",
  "key20": "21k7up7HoPEDWqJ7D95Kyc9YmSUF5fa75zME7qu6m1eDhwFA3mjcrKn1X6uFfzRDYeUATiuEg5F3Gg8a7iTCPGAY",
  "key21": "3La8sWgHokR2GKxt4wcRfX4dfjo8x9EbMNPyjM3t1dqbP8rDAVscfDzW4jL8tB7bsrQekRrLS6uGz3xknoahvy3x",
  "key22": "28PnULPB3WXze4p2AEEsw332rYHfqonHS6UwjqC8r8zghU7T9Dft78UzfuMDhqb7W2dWMMn8oJbxYAXzSdpSepdp",
  "key23": "21emWiSF7zuUiaYPWRw8VJuZsUCsJ9kqUqSyPfwTkppXE6uTa9xQaAKi4xgsC6RhctWPqwkhPhho4B9Ywas92GTA",
  "key24": "2n87UFQXooJMm5y6yB4ZcomW8eDbTDJ7psSHU4GfRB3AdbWfqwhsw1YCXET6i7UZe6sC2AiJvtYRi2qHtuDV2VLC",
  "key25": "2WNBPQRbMsL3avUbkqqoYQCX3WhYMHjcdNGCKT8tz8u6rf7zSc3dy2JHkBt1jm2wrLC37RdpcEHgokivuYCJKgS9",
  "key26": "3tcgEgrAxJM7GnsaQa8JV9rh8nL5vGNcAUdotGSP7pWDPu4cHcj19fmdpHVTzEBGXut9Ar1sUSxRmY4o36n754pe",
  "key27": "viynMNqFhWkuqviQ7KZfZ6JjJtKye5NGuQ5U5TXHbi2DrLtoG1pCi2qqEacr11ZzHck53bbMMH9GpvLN2VsyHw8",
  "key28": "2t3REntSVBFfpK6DFXvEpNNA4TZEg5xFHxKwWPG55dhMyt31fsbhpTQm4HAEbvqYRbkwAFS3ytFqCk7fNsi23MKt",
  "key29": "3EceezzDXxZfe4tASmSQFLa1W53DLdPB8zJRzFZ7Gr4Dhw7SpjxmMw2aXyFjiQ1TFgvq1pApSov8WMbpmr9U343z",
  "key30": "42sc9eToH3HJw58bSLcqHzo3JyA16mSyCxXX1NMWPfx4avkTcWGYzcqrZWNjFQSPmUiC3TnS9UWayMcCBvwJZor5",
  "key31": "5uoKJjZ6kLFrn76m63BnPoUFwZutRdU73c2rJp3N3wt3FvjtamyApELQQ5oBYdYz6SMeVNZ38sNQPAEkXgW3nSs2",
  "key32": "GAoA7gq9UdkmgjKcrXTp4N38XQkAYYurxYhNU3UPcrrcDZVqxfDmePDnh1Ki7MpHhRsYYoL5FStD2wNaHCukK3c",
  "key33": "2wwXi9izYNHykqceuMpD9GwTvnVN2gZ4BcXYfzNHNmimrJ9483FF2SWnEogz6AQvtUvPdV9Z6eph2T8TkaUGhuww",
  "key34": "W4LjPEpiYDU7VoqbHoGpoNPSHj24VF4wtjjfg8cnsN6RNa3uqPUB1weM5BpDWs8MPZLxGKMpgjubUf3Yfg6HUkp",
  "key35": "24Uus12zLQhyFCW2EjHP8gq324TTPbX7TKpYk5C5fdquQvQYrAn6iGjADjcyiRdEGorS5B4c4z8qZiPSZd8g6ger",
  "key36": "4AKuZJPo43mBFLHj59vajAYRiVgaKgdbaNBisMXtc1Fib9S87ssoSZztUCXL6fFVvBAsaLAQx51KRAmKXEC8pafE",
  "key37": "5vmmQcrzVkqrSrJb9fwLmEARpGHkkF27qNQRJphQqDdftSsAuWbkm5fJkdNSDnFe1Vria3NTMjaaQk2uN5iALmrC",
  "key38": "5naU5eL3G7Mrk6JavtqXszFQU55EgJmkPbjFQKDT5uxoMWGuooidiFnxJx5TqT3NgJ8CDhr4vwKaf3EytrhHjvmd",
  "key39": "2N7XrjeuguDCEjU2CBDeRn75oAEiEPVGMfk62DSkY7LzjFYMhDacdn6CxBuQaUcbvXWhYhSLoqkdjfgA7YR4rBA7",
  "key40": "4QsphwGnDUbtrTrKRVBNg66pGsQWh3r75zsohnkQMN8ZkfhE7ycZ9KvH42x7JRrDm7RLDmsHQUDjNuJDapPysNYx",
  "key41": "CxtxcyrvpxFfaDcMJawDi5e7oSpaJfUs9kzWbK6XCCPGSmqdwHdFnwmpK4JnLqbKURNbuCQvFnKTGdfXDUVP4BJ",
  "key42": "351JbTuy5FGSrF1eXmKrS9X2N7tsedZ3fZyi4DnB4qLv6eDH6QVYTzt1H9r3DbMEfih4NVHZgLEVEuyf5zwZv8es",
  "key43": "2XkFEcS8EaFyDWUJbRyJjFcwTKYixL4MxuwxGX45f6anU4MsaShdKTAjMmtqaSwBSswpPihDEnshiPhoCtQTMU5j",
  "key44": "52pQwFm5LYis6GLAZug15fsL4PX9avucHhy9UoSt7UUb5qteV31QMaLnmkToinGs5ErYQDuKnP5876kFADViYYkK",
  "key45": "5eQi6yY2NRJekdd8ZfevvWXV5PQTqBsgLdBMnH5Z7ntM9XgYUHvukV7k2aHrUmxM72ahXobPrJfnPFj6pvZgfZGL"
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
