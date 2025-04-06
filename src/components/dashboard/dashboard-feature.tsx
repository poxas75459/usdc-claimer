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
    "2Ls6KVsqErS5TCEx7Ju5myzbexwoTFfC1qX5BKa6tr3svRfm23JgJM9fMPdAXUur6XinxWx2zDZebfcs7V2PsbkV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j8XwXn7A6huegjmMYDB3QdbmZB962MskueJEDgSkpFzasXkYXn1ZFVfWyPdiPqFmvybHJd46XvD3NMvVmcLDddY",
  "key1": "4MNRf1788wqe8BDyvHvoMBYqaUNXz1k8DyLAmraGy3hVttgZJW18ve2S3GDDJfqbXxdFrAMpnAsserAHrxv4cz9N",
  "key2": "26Q832EPs3HayZr6yi4xKifR7r25p3qSCmnjZt4eZTfRCC6Rnzi1R3E5xkNVcvx844rGZTkEzamSomSYgf1RxQ8t",
  "key3": "2CHduNB8suTts12ehVnjXcfouDDNKDJ4B6nZWGnyvYkjWZBtv3PfQdq9T7iLTMmcZw9AjQoZ4t6h4ZXFRAp77zMB",
  "key4": "2KJppezgWHNsaQtpFqk48RoejkHJvXSTx7XrCaUCexLKe6d2WwA3ZmwCutv2E7HWNaSwpAzuEPmEceCoARAoigyY",
  "key5": "qCRnsKTRevy8E9U3KeBtX3pahtQxFMT217qiRQzUrbzCHCPGMQrdrk1Pq3rYE2mtJU7qcvyBQQR6GmFdERRUoDo",
  "key6": "67U1zH1WtXeobkZVK9zaEXPrguWvH6s7kKsosLfQCgYYZLeSV38hop2MNbrbqa6siGYjsfJXUUyQ6Z6YNQrJQAdD",
  "key7": "4APJjzZuNaxmNiX1zLJZk9DwqETyy3hVsdQTchMK5EsZbcu22d9NM2o98USXbx4wbKsE48K9t6nKMXa7GYbkZzpU",
  "key8": "3rMHdCzzeH5yD8YRsVGyZTmbwCvANQDaKmpd9UZuAGwGBRS9rAdwmjZWQQPZC9M6Md14gReaCAE7dcdzoStHdm9i",
  "key9": "5Kes6KmNciL8mLW9euBiyosPe91ePN18V1C86rVmnbYQBord4WmYwvhswcDv1Z3VfY4ZeuWvTxszpsvEa4UztmSy",
  "key10": "5dTpHT2Z82v1XpVexLcrELeu7bnURThLGpWayvmNrBwZp9EpMPAWfneqRvMpC6bT1TEvrDWjnw6C63eBjm4HNfHp",
  "key11": "5zvpTXFHgQP8M51Un6FE6nhbjCnHcwEUTtZN72P1tnb22byx3aZbLXo76Vz3y5Bc5VGYV8CDeNX2jWdi2j5WpBUT",
  "key12": "2vSZSyUiATmUsepyuXzWP1eF5jCfAiHxAngy42vyjq1ZS8ryDQWCZGdsBmmowHA6iYS2JGarCkbzhjmpfVAhhqe5",
  "key13": "4zkzjAEju5RUuvWASopBzUb5sxgJAqXzUihCCWNDmNgKC9co9PhPk7Ey5CLBmLZvK3yzGnURJQ86JK9AmkeQ8i2e",
  "key14": "5vjCCoHHGPBhK9V1yuTeCubKrHo1Xzuu5ZBo6T5jqkYyjdXPNSKaGw15dcZuUerwnuqNfyZnHkEQfhA6tYxn3ZsZ",
  "key15": "3MiguptG4eWbZkZBfjLrH4LomURc41R9q3ofJgUtQmuF5kPb5d422LX4CDDs6BQBN1w5FajqVQ9oZ93KBC9RXNRG",
  "key16": "3xWFQGSGcNTxqfnWt3X2vGWqNpJJojBTfSYoJjeAmdMPSNcpVQGK3gs5peuSyUMMAd91PnMhvGWivHrf5SQHzf42",
  "key17": "55b9mwxrDEUpThW5Bb171jr5EbkB4wo3uMfricDeprYPZFNdJKGzQMEftjnDjtsq2qiscu6DdXPDDw9rLhvCnuwh",
  "key18": "3Evc5Vs1j1giaGx35t4scgoWhqfRqgo6R9K8H3f9PaQxidceL7zfP9rAGptkp6yWQbawtVzqNVpC7NG6ZRhEKBqn",
  "key19": "62ApBDJw2j74y9tcX7tpZ7kvkcbTRbZLUHiaysDfHLmtkJpyNRD3CsqjcjZRtnFeNKiGXvZ8X28YpgZnZwN4Fy2F",
  "key20": "5dWtpXCUjXxzNNXPYcZQnPt4T8EJcgjbf9et7MNndg2QHrZMf9HLBvhPp7ef4vmaqXQpJ4d8zivCF1Hp7BPGKi8y",
  "key21": "5ayPjBHBqVeUPUoKEdwey3fJGZnEiBeiTWASMRMy2L1rsPX1n1jjps88Kguhekk6Efi1Fm1KPqeEJS3Ap4awbAUh",
  "key22": "3ZzdEfzpg5yPGHHqxr5WLsYfWHESy4RJn2gm7mZnqs6M2QNCVqvaxDgRYad3Z16NMXsKv2D1MCg1ry3rHweFWo7j",
  "key23": "5B17Q1kfh66ALkBjQFEVnfQVPZ72ZXB9BRBHawgSazuUmEKbb5VWyCKkR7uXbmk5LL3prDSZ3WA9haxMS9DoXFqD",
  "key24": "4fp5q6uChPDyhKVm4rpjdsD9skN3c5zhCEJf4HyyUMZhcbuQxMU5PSrR2MwoPHciNnX7FAWLg7CLNKrVg95xXM32",
  "key25": "2BHUEavX4Wk5tBkcgJNhzoh6hBmNJ2s5MtSHa5arkVoVWTGU6h913MBTbtpUJXx5oV6RmJpytSzkPhN2D1f42YXV",
  "key26": "5yoL1iA7B26TwgnXT28w22P17SggRpDUSSZCdbVgzrErXAbyCELYEBPFvnxvR9a1gbJ2npNAWSRP4eM2eaNwAyaT",
  "key27": "3uFGs9vWXhbE4uq4xh52N1WB1uHYwXftSvvWmPtZyMZ5XPkTRJXqPb8QZwgAoi58gc6pNGD6K4mP559A5QPkWppP",
  "key28": "zWoDHnRxnaZUMGq5mUUbNWcejMvVKDDSur1Home6h5kgkJJznaN7Nd4e1KiobcADKYE8cskSZrLddLhG6QWAxqu",
  "key29": "4hhtPyfEE41kSfUcr9EuerkW5w4iZMmUi3kJMTgo5kmatdEHstkYfVPfiTLxuUgN3MbXDw1iGtr1Q85FM9QtgjAe",
  "key30": "5oP29jAKzDh4qWKGDjWrGWBerDy9F4viPuF1KEYbk1qFoQmvZDAWSAE6ek9utGHrnpyP7xsUvui79d9j4kHE6n4B",
  "key31": "4g7F1beraztHXTE5p8inHhGVCmpov56AP69WjTWuQQ7M535EHXUwMANczkYdACvMwtFWfMtre1gUcCWkJS5Md1be",
  "key32": "2rdCXcwuU5ssABHVenmqztPRTrbgmy6Dxs6iV536Yx7AxUoWQxwc6qovaVsEvnHx8kwYPn4MhVxp958YWRJkJDS1",
  "key33": "gXj2BRbgS23Va2oAyvC1sgoaztgx9UduMMyftZetnsCn5a1uYkLvEqHjJdfy3JAGq3QHytxQVuDrqwaHyFdp4tA",
  "key34": "woSPndLVxRcJYNM3X8EMwfNVRV7eiAzANFuH17FhzJDdCUXTq2wxa3RxBTapkLZ4M9emvfPiBZyNfQqve8mXomJ",
  "key35": "JvkqpSVgxncX2XG7paLfeGQf17L6g9yh7ZVgk2HnkCUHNs1SyL8qAP3dt8LigMt7YQ2Mtz3AVMB1t6ufbbp515V",
  "key36": "51Ym8rTg1iUVaERurViwYSWesuS74cwoHM4ChT743mPa7g5PwqsJGPJGgX9rTbL4xJGXUnDMZhkkJPVVzGxFgfyE",
  "key37": "26Bp9JC4ZQUhZqPRGMpqJLsQURimbQuLuJwyMFwspFAnMvsXFoDSzPbezTyhYLKT7JJML2VfNaxmEQhxbscwyZnB",
  "key38": "4amgZd9dy76ncVGJiXZUXvEb2AUY63Wj2zJHiPkJL65JfaW4sKDrBndntAx5D4iSKYde6pHMbCtS7qu2D4oQvupu",
  "key39": "483gmjdJMNWwfeySTb9BcG6ftpgGbrxJuSc5pihw6hM5rUz1Z8DXmqpNuL7oP36fMrtLucxoV7CPUJRYvP7zujk3",
  "key40": "36JphnipWTzTZKCcKyuWsiAqDjD8TkxhvMsgHiHmZ73sy9c54Jq2cQnfUvWeBVwm5eWWf7ffkaebLKwCYy6gCATC",
  "key41": "28V3gm6pG2pb68UuzmUaftUa5h99qf5KYntLRkY6rHwxgfk1TgriwExuXYtBZpNk2PyLFxVx2JoxzkBwGRmbNbVH"
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
