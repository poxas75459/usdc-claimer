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
    "2dajso3nH66TdbnDoTHeA1a45zCCb4qQHJA4Gv9Ddyxdam559UUVCiPJHPhLKNrRNAHzCPz3p4p4xX3AT7p8UP7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4w2JkRwHsthZLk4Es9AQXfMH3A2Ag6RKwvHkB6Kh944P2uHfZimMwBtoTna1At8SjoPDdQVseQPBWdrmZ2nRgHvo",
  "key1": "3T9RFyAVYFSZzPtJEXqBexrL7fDXpUEykikRdHHWc7fMZm17iQV8JRegsa78FXf44XisJn9QSUT6Bk8e3QC3JnrF",
  "key2": "4mJVxciqvctpwSxbmUJKnsujc2WkWi2ot1C9met7Corx17D6KaeUJdmZSQuD1GQWZu8D4uxsGXXw7HUwBqezsjci",
  "key3": "4gQdwbciM6XDNvmGr4yWKqFHFeRXdWc1wdh38LiEGGXbrzVaXKdkUpjK6cbV6LLvm66T2kK7LaujkPQBaiEvTEZ9",
  "key4": "2GyT6FzdWLXTfCwKQZt5ert6bU6DN3P9EJHhKen4h3TqkY3CUKMPgRQBjRPba8uaWwDz3EXcxz99NLCHvYNs7CG3",
  "key5": "SxU2MQihfv2cuC57tvfKL1uHmBkQyZWntYeg2Da42CadQPBEgxim8XD9X2QjETbe6jqPL8yLsL8dRe7kBV5fyJK",
  "key6": "4Ed7QPGnh9wPjjExYqok4GSk5xvnMDWm8FNKM843uceoNM8KPtGFQcXTA9BAzs2zjwZYSTakbm7fqCETVCJV1jXM",
  "key7": "38xo1DpJZkUqwpxNMgQuwcWpJBykbikuHefx2SbtoDLbpP8nGi56ENFZpBWLnu4UqStqhBWnBe4tKNUqyNWhaTY1",
  "key8": "3rMqweNkyFck336pcgD8K6h2pGiK2SumRzqa1n9VumMDq2EoSLWz8LvNiuwzSZmbKrBNPDxcG8zT8ndd7Mw1kgXA",
  "key9": "22ZdXXDb4XqhcLuhPwYvgZWFLPrgiRgY5ChEVw2x6BsJk325j1yRTA6ZkiR5bdKrrrSNHuMFCyaATiB6xEUJfr57",
  "key10": "55PYh5aBRbTAn4Q1gVuHbANA82aHrA49Rn2xxJDarJhLXygZsggctUaxnYNVeScEBNJHQ3QR6FDMr97qRsEc9KZ5",
  "key11": "52tHdxZboUBnCPcmDJ4ad3Lgc7Qdg52PZvpanERZPimRMg7VYRgYQ8odttU34Si3Q9Pf8A8DChMQmihMQgpZZYvy",
  "key12": "4eSRB7u9KQhZeRNN4XZbkruvoDxCus7HsRWbU2vvTuKCYhVTe3PWzMMQSMDJJ1XGW5mzMDaNMsmT3YGUnZmXP2c6",
  "key13": "4NPeminZvoUShU8eD5ePZQGN6QnXxs3Uqir9qTa3UmZ6E4tZNEo8m2SSvGwAxxmB9vsC1krTemcfURqSysZzmvan",
  "key14": "2mkjyMX6MsGX5SWUkYA6JvsG2UqADwTUZA5w7XRaTAC8kq8ipN1KiSaEhf67n1dbZ42xj9nC3bnMLz4ncBt6d4s1",
  "key15": "3seA3o2y8KUQgw9BwPgwakW45TePWfVPw953pUAP6dhkfVL7EGjaUKSXnj7SH9CJbC8zUC2jLbskBSXjmAKq4Kpk",
  "key16": "2atGfmYi1LTcAiMff2KvM6XAyjuU3CcqSZH58tVHr4DvSwtySm5VPKS2XBsGvfE2oxvZQ5s2Umu7HbuzgyC6XTyy",
  "key17": "2eFcUJdvYa19nsPnjrnJ15PT4hcrbnsWiLqMAQV8fijJczpMyQgQBMNfEJvPZu29vm7Mu8CM4SJgU3ib2MYdcnMp",
  "key18": "4JPwtarwuZNpqK42q1FBzjciZ1abQDnBDa5spDUFvLQc7aURGQ2iUZ5cYsveijj9PzduYhuDsA9ywgyaQpbWDP1K",
  "key19": "5HLA1E3eUnyPVbijaqVYwqzpqJj37PG6tWzAPP1W4XzqkR483US9WmzjXFcsPJwGewwbCbSqxf2vwnwb4rU1YRAa",
  "key20": "5155UVxAE8hfd1PFHWotSf1jJLzuf6MhCZj6hc5tJbb2ZbPFgpc5jVyzfpAjwTeDmzvb7ex72kag7KtDdV4TkF1P",
  "key21": "2v8f8DaANiXnacayGL34fSjxvGrjjuvR2GdDi9KiY7Xmxsu8niR9nbx9zZUSFrLPf4DEfSkDF1T5hZrqUsY6KAbj",
  "key22": "4R86whqC1mqhQVn8eMRstDpPuvi9Qtzwsug1p4FvMmJ6AuUm6qHeqarsmpdaaNWeuNBD357EziN9ZpGPrRgiamfs",
  "key23": "2q3drcxqhpfCmDaoarP2xTYfafQZqqp3FFiRziPCcPv4gre7FpaG7HWY42Nc9VMDtMs32iMJmMcmvGhLTXDyofLr",
  "key24": "3Y8ai4nU8mcbYk2LfPGrRYRMZ5PD1kYEYM4FAR44UknUXXhPQCV9fdqBzsqJizBDAPeYzgK8kvmvaSyJkqMqkwjS",
  "key25": "2gb6cCPQmaKE53KAAsk5RUg1VTny3eXrfc7GTMzFnZyvM8Rv9sPD7SBVreQz9HAsVxd6VUdkded9tD6bHF9GtfmE",
  "key26": "NoMUkBCHmQGjrzR3Vajeb4YQG9hk99iTRAq49qxNwjt9frN5GrxjeQMcyVo5t1aBXMZARvu7Yxe1HvwGXhJgtTj",
  "key27": "55gPwMdMjP1ALzA7MEgE9gLXXu95ER2etXP8GSnrigEba2EdWH4mMn6nhZ7cEsmaGK1YFgVhbSDvAn4gxE7aj4R2",
  "key28": "2M3HQ9wKT6c46X9ZUaCCoH7UXaR7eTKX54GKWKB8Wqw8RmVDpS8tGdUqMwumkQPgECF1uxMCa9f1JUdBoHL3k8eZ",
  "key29": "TkkQaJ11GL3LdmgA3iLBytVbzBZ85xx8VGogDGiQJ3iDJ9Ca8rUiiP92YBXSEBWQBYr5a22ASBFq9L2SwWA63eu",
  "key30": "AggiJcgAahXwpPDgW67pW3x3THcjkkRXYpU6uXMkTYzd7funSRh4SNgQqLqY9uWDyx5T9mk7eqxgEyMQUMxyV2H",
  "key31": "gaKUc4jKFJQ84MJswRCNKGzwFf8J5nwpZaNT1bXxMJKVUnvvs18p8nBrTfmo2cnm8b7irbXvHrHwVkmzLxQk3Nm",
  "key32": "HAog7wtXeqZ5P25KA4jmx2CjWQb9zo6GoCX13bsS4fFjrjF7NKGe5R16UhtaXQVySAaTd1C1JBbTa4vQ8mt2vNR",
  "key33": "GtqCyAr7WVuXN31tTts8NJ96ThtXraZApgZKEFwnLnfjpRBTnv4cCPD1AUsmPgqeyDvLYKVeocCeCcDhfrxYdWh",
  "key34": "2JdWu3Eygan5nR4uovBqN3ChFMDKnDKTCEcVuXHbk1u3ddNCFosXuMokQEv3FyrnGpi8KMpSgHLdTrzH6cqVbtyY",
  "key35": "62Vk4wV1QbHcjuoEt7j7dS6fqNLdUdTj4Bi4PeTMBPYJcjRGvgBQFmZyb1kpcnxe9LUKdzde8p8FPhApgee6GP5F"
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
