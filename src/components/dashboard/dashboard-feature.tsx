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
    "H8hSZnYAnwXQaKYCF8Efq9ex1dMLBY2RJE5pYjRB7FZ5eVTuUzDqZZWoeB4mB8m8Z4quQH7qEKL9zNTTLP1ktDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Hxso7TWtedXenbbid2QPkAB2do35vdKkFztwQURZhCeow2vRjPnVZYnMCQnSBuV2iRYRQHtwXDNyYteUCStK635",
  "key1": "28J2tWA1Q2KSBGbxMajH2bJprorAodEPk2bDWf7JfnhJ2W7RpBFffeMhB5U7A8e3vfaCcE2BUixCvgQKGhKp81Qm",
  "key2": "4CS2Tp61ZmkDXT9q9KCpgLcmWeQQL7XxU8QDP55MAeTsbwUPuf6JmccEuvM3KKZ19j1C6Yb7WgAyLJLFr6yYFLFi",
  "key3": "5FrQgQd6GFwC9QwCkJj9UL6bYNEG7asvFdBHoX8A89dgJ4GKU3UVcMPB45uGQinS3WsgYDmqYXXp7FQv7qd97CCA",
  "key4": "5rqtq1T4tL3Yt4zxY9KmYARGvYr3cSZQ7foLMrmEHxHP6DvsTGuaTbtzRxyBTGcyMMJ6V7SQFUdr5V58cnPccH3b",
  "key5": "4imcaNNV9UBTpfVFPpTeXeJPa3A1EzCz1CqLxCnGuUEbfq9FsN4GnEeSWnmbfgrsnPAsdTeoEBStihCNmDkJzieq",
  "key6": "2zYEghXZT1vXBj42MTLvDUykCnGr32tK6LzoQmfgBRJTkRnr8J2Lf5GqPuvtafKtXsGw7htjWLSBbuRdpuJNuWyY",
  "key7": "EVNsPvyy7YwuuBr8RYeYv9c78XhRasULLc1XEf6KwcJfk4evEuTj5RvXoowb6opCXGKF3zwDBDxFEsbeTS27GkB",
  "key8": "iYYt7Dkd2ZGh78SFsuGNW7xZN9Q2di6E7dhCerzWJYKYJqjDTTNxQKUhXmNTnevhSXGCAk5w5Awr5ZFRLyWihht",
  "key9": "5hd8kS6phUhE97wAaKQQSMdR7Jqcomuv2EeC1a9M1Bd5oTNuiLjBm12YDEZtwNk2qTrMB4GCXiD8bReKQH3Mdiws",
  "key10": "5Whq2kNsVoL77JRyk3ThAc7kD7VgrY3Uy7wNPFRCyDVhxEaygSzZaxwwHv2wP7P9ANmwWDibdg1JrZe14Kbk2uTJ",
  "key11": "RuqohffzBxrGwvgovXcuby4echYAMqkjuXwBVskjghPcLfHCGaeyFpsMno4DNnCaynFWgDjjjLaPwdNZqjwy6VR",
  "key12": "2coenx5zL61QjxSQ2V6CmhooBZ4qyYYJ1xwEvL8wiFP1WbvTnTRHkyC2kD9bawzmMfc8sfxUrQ7KfQiF8KTARomQ",
  "key13": "3oxRgVJ9XgHRuDMWwuvUh6QUufSMN3hGYd27U9Gg2NFr1oAQ2JG5fV11M8mzTtErnfJoEERYSBgtDo24PrnLRWsh",
  "key14": "5XqSsaraKjPJHtjJLzDjXSP9ZgDU67UrQC8es5Hhvb9J2V3CNwENySozrSq7em6xGTMKvzrDDUFZideUZTaQupcP",
  "key15": "31RZNHxHsJAKKLDX7zRsPA989enkMVCQ7EcFaBGpJzJRqvVE6r6yTRiMovV9cK3wuE4vNF1VUMPpFxWQGtPMRqN",
  "key16": "4VXFoGv53udnv41o2dqe1X4wwULxndsYK8RmDfwHmjs33nHxCfDcwdJeU2FTs374GJA5FUPx12odY7WQiaeZyBFb",
  "key17": "3Jvqsv2ngr5DV8LAJS7KAVZNbwRXVBhye28xNiTRPkAT8Z9So2C55dXQu4KGf6iaUpbsv53V2i1XMM5we1rvzwLj",
  "key18": "4RVAAV63Gm5oZtsG5VmsgHghAKPP9TjEoRAaPzCqeR6JheRNyMuTAsWDtoG3R1xkHJYz7UUJYCWQoYjau9gqf4NG",
  "key19": "3gddQKECMSfgrunUondZjHERNniwhgWqNgPL27MJ9XUTfJ7FCBK8R5Rjnv19XWd1dJqp7ztexQfSTAXvhhEzB8a6",
  "key20": "2qxpZBocwfNHHrGcTa9X3Qc5bZGcD5rHM9EoYGotZKFx2iABCTd525eN2rCmvmX9fWTFWvhk6fYWbL6ZUWQTq17e",
  "key21": "5TTPP3pEtxDa4AsQsVTwfdY2mf1PHS6qUnaY3Gr3KzgTymWH7ZD32uepJS6boeXfBBus8GudoK7K6egAeofJvsAJ",
  "key22": "3EeqntRFTfavAkbCQCUzbe8rtzLoQ5DbFwKXUVwbZRQHpxmY3uFE8XdiBNUzL6zwMiE1DMJASjSy4ragBDrUJzeS",
  "key23": "2AEy6YtRWCaTvpbvaw9wuGunqiQWv7CxzBF2erg77f4cUtLADqnJmF7HTYecgGx1Xgn18gMRKsQXaSeoFkToPo3M",
  "key24": "5AWWAhEMp1isdx6HL5JVE8Qg4c1g3fagsJYXrWjWvHpVvt196bUXFcqgaBHzH2Cq5s3u2cLSRmanFaxn74oMmSWw",
  "key25": "4P4QPqvKd8oUR5oo2VXxTt4FKBjeJqG94R7K7uWq2hLYf4gp1HxZRxdxekmhTjtaBHgBmsiTeRv6quVY3VtMRxUJ",
  "key26": "3CfE6Zr4u1biFkhraJXHkCN7YVyhvyKiCKEn25E2bosEsaH14agBrMHhqWvBiXfiN7dWNwsAbCMWien5hfRsJ2NG",
  "key27": "58GTQXyJ81RpDxSpUCRxsszRr4A7iiKoktPrPhzekDVvDcdN5U1X6zFrF5U2gGMbi2iWQQyJ537MLdzXtssTFG3A",
  "key28": "4TBUQVX4zebKqJ23tmaBsxz46W9N6aEg9htbkfVjNUF81BSJCdJgc5TmkNwgxVuS1jA1kruxRJPjfxmL9HwdZKA7",
  "key29": "fdN2Szr7AGs5BzjUyhYEX4Lt1kwz39YwSPceribXAtaFGhucWMfXohwsupy1v96vsEArptmUDWd4j8BCFPDA7Mh",
  "key30": "2Eo7RrQdnuRjx7cyLo3BFxfLg2r7xgJD1UrkaFD7aWsu3QLY1dNNABA1fh7VVT5dZTY8P6oowbsKFbP8Epiq9qwB",
  "key31": "49RELXQWk1kYjbzYKMRUkdScPATkMGJppWye9uGXxdGAiN5z1L6UtY7QDU7ae1XXxdbEE1bTQNM9qGaQrwuXmb1S",
  "key32": "66LhdH2UGpbVtbg8cLEG4SsWyFSbgKaNT2GG5rZZoppmMr4Rk36s8jEcHyfeyjVvBe1Ya4g5UivqRL3q6cC7AK6H",
  "key33": "5L1hhfRskPbYx686NYXBZeBGd6Mdj5UTL73KpQuhugGknv9dQzCSfzsZdW3k4pqUycVANJ6vnUWmoAnkSF1jjQdc",
  "key34": "5pHLSsfTfQRvNq1Wiqx7rSsyMyDUw2wP6GtEq9i2D5QX6MVnNvnHByHTjDdBeSkGHDavxYiMPcaoSUXuc5qTV8hV",
  "key35": "3axwsiwBf7N7p1Yx5Wzgvrj9rCuiLkCQQmTffsNWZoZzHMn2eySEsfJdMGj9UkAJddKXSvhMRPwHnfBmcSYdt86B"
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
