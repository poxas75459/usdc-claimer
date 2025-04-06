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
    "WieGxqjt6Nydy4mfrsuNzHQgSoMoGfVjtkzThLZ3cJwM3o84gycZj69oJyThTaL5HMA5u3dwcrUhDEBMasiHBhy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "494hYQnAvFsc8LzoFkPj7e7YbanvyShTVXqGmT7SueBHpvtPtwP12sD5DxUjMGzLPybtghuLQVbEyZME8eGcpUX6",
  "key1": "2wSCN2oMJnH4wXjDuwNmSBD8mM2pLKnvns1MNxqaibJmvfxQaPwBayhXMic5YeSiG1ULEqiswDCRZ5Xfdv5Vxjv3",
  "key2": "3oeNCzWZvXwCBZDsc2cP3ZRiFRkvqYQ5UA58boQqS5ggnJGdKL1bDM9tKE9cnBmCJuftW3Git6xKGP1GwEey9NGt",
  "key3": "5jxgtqkcC2J8Qq97iYg8KmzMfokjpbdvFRXws5ZfJniUAhqiiXTLFwmqiqTYam1F64tSi9G7xkFJba2Cm3979oa1",
  "key4": "2LA7YEWni7LiY1G3LSdg8isbBmZBFN6RdkWPF37552UHgPjtcY2KwNsgXoBfhx1vdzW6jqV1D3Bah8g32eugFHXd",
  "key5": "4oKBcBQYdPpiS2XnxTeXUTvA1L6qcch83RH5xQ64Q6Verq9nKQ9tW5QrUT4muc7yduUaEkKngHrUky2wQNuF3Wvh",
  "key6": "VhEng3AkU4yxkAf6TVTMuxeEQA2H3UeAuupcNEjKpcLFTsnv2vjDAb79uyN7AkeEnchMTzgEXu6mFKD3g9nSH96",
  "key7": "4uBAWeVbd49jBcnGXMethWn88KP3zSSQvHJzqPXf1rct3tpCnH6TAo4uaEZLs8n1pHR7GPWPU5xF3ZJgcWsvSogN",
  "key8": "4ZB1TLmekQuVLfro6mKwhLxydZw2Za4hoDQjNEzB7JMqK4dZtsk2zDDycRFhWBgghTrZ91N6UJ6zJtdpNVgs6hcg",
  "key9": "gi5xSpWzFn6qNFxExqpHXzAc7goGVDru91pRExQaDX7sV2C3kWefF4xyhMRcm4JLSFVrgrJQ3bghsA3MjygXNYK",
  "key10": "5TeTtdrQDtSs5LwTXiTkT7LyC8w1XcLXAnvubsGTmmMuvDYnBgRpAx8qjnBjWirvkZ3d5rkFBns3aH88R1exRgsP",
  "key11": "4HvGgDpSR3n8wev5px8BUbj7McYErm9hy1sotN6EQLN5AmshXHDy7zwHMMnsFg22yWPD5YaPkyMLYCUu6x3Q5CFM",
  "key12": "29Fqm3FrXMdjmAfao3JrpvnfGcjyZqSMiXxjT7ihCok5nhPGtC3QDWSxWJpzZq2Uh694XTm6sA8eF8iaH3KV3xbm",
  "key13": "3sSwXGMEJHgpuUjKNEZpZCvSkTiqAuQVX7UombMcdn44WG8wGXQA9mfmAYpfnY3BLf7Ekz8F7JwHABYP8moDFUAi",
  "key14": "3ubfCHcribYf7GFnntzhJoPJ81wGjjCaWaCRsayz4TL8m4T1JCBQVwKWWgjFgg7iD4znUoEu4qH8xrQEhkCmtUCV",
  "key15": "4qRrVrP8dokq1R35SCgGZpE85GhtwiiGQXgsavbqQWnFYzTCiDrehn8cYYqZPx8MftGDmzai4obkTMZh598mbpp4",
  "key16": "29ozLEwq8eq5xEKCkD71cLWZEm2Vtz4xK5oLLJoANewmMmiC9VUsZ12koJwrLFVJx87M25bCmBVqJ5PdvmLFbwce",
  "key17": "61unUGg2ntYSQdsGYNDous5ynA65YFDgR9FTbbFkNSWaQ2VEevtaNggQ3itkJn6H7v42Er9uGtKKjeGvz4XrGXYL",
  "key18": "4gFZmiCt87FeF6cXAN5XJVMiAbbJyni4SrioKaCdAbV7EAjByoEQgrMrgwxaG3K8P5wSjM7mZjHcUpN6Kw7RAtNC",
  "key19": "372DZPv1b6agwPKh7TU7pGDQcMCs8732RhtEAPXknBuJxhTJtaXsX1WPZE1CbUdu369dpKVYdx3F6WVYWzb1GvT4",
  "key20": "2Vazd9bMPxbZ3TAGLxwA54QYQX1MFpFvgt92PndBR6mwwJbZJGNcQ78cDS6kph1rqXV2o5ujdscNWAhf7QiwEiQU",
  "key21": "sW6kpab8FJQWUfLyeK2Hcw9P2Mzo4Kt1iT7oyfPsUN39xqYB2HXSrGmkiPX8y5LW2zhzScuNbNU1uBGh6inw9qc",
  "key22": "2NgUC7BYpRKsnYbSeEdrHynmHMtGcmqRfdjd1goRUNVbK63ExL5gqM4HzMyFBqwKDWjqXgHFYcJ7pNVLEdvCzYZu",
  "key23": "2GABeNduC8EyxGsKT7R5FcAEUMn964N9yxGCNzPqV4cK3KvNq9b7qxRZb3EKx2UxZvvVQ3RHm2Hr3YQU238ZKEMy",
  "key24": "5LsQGe9jDNPiWytbrCjqW3PnrgQYqCFehg39WFe6osKEiWYRHK1mVfvymp8AtTiJft9tHXgMbbEJ3ELYoCY7WrXd",
  "key25": "4E7fFDHd5fsRXpgTBdCdym3Vx4B6fRYqbQpv9CtsNmeW6S5MpzAF6cfQ7iq6TuMzzVWLULV5CFzXp5i8KP9bXiSR",
  "key26": "5yU8ggncXqD2X47bJXMhDCHt2QoTjYAeDmUcCxqFBbn9LgF45B5pzWsevVLzS77mbuRoqU4cdKrWUTFZgMyvkhJ3",
  "key27": "3hgmWaqEp4aZ1R7Hm4pSyx9LPTFWbYQXEdj3xyh5phQT15cJNshHbRHhYgzRvTW7kk4AvnfEHJXmtHRvoBsAnPz4",
  "key28": "211p6eQsRiBq1bVQkuB1icyTkAWcWKRQTzBf56u4oUFxjRZ6hYn5nPtTjm5tmYm2b9ac8DvPJbuBXkgyXQKJENp1",
  "key29": "GgDoz9Z1XtSnW8mgqXMVrXyE4apyUkDbUAs39XAZ8DDynfqLLfPuhfZFaLMv3FPUfe1en4nD25LjTbbTspTtXpK",
  "key30": "5ze9YnMubocAuMg6ehjmUfsimpxrbojwFMpGtdPESo3c1x1ozw3MjXQtJehUtfXbmLQr41z7wUbrjm68PfMPXyz3",
  "key31": "L9GKj7WQrpELuWu3zcFqXYDKadthBKQgigeiC8bdLWkFcog1hypUYW1L8sPN2ThbVtAMbSxcjqTXgo9rJPrx4CN",
  "key32": "c8kqZkPeyvja8KFDfYjo2itih4ReVU8iqfto9cewG3WPfr5exh7HzxSU6X1FFi73iPQS1jtYqRCEEfwPCpBcqNe",
  "key33": "N5hokPyFJhfiXf3SAannNNr9WngBWXmvU1N6CJn8aT6eTYkR7caAkxP3G6iQYAxnEp2JQooPcKgivdH6LrnY2Rr",
  "key34": "txxQKXLiyTQACqdbr6cLKNbHpuEFJ45cYkhxTnMrGCe6RBhwhUMR8KhL4AXtDbYoZ18NokRrid1B2dXdjvQqQhy",
  "key35": "4GMz8VzzBpda21AkXSFZCa5oMvvSEuVjTjQ2WXu8ePy8pG9WqgHXL2ad5aNMVh9mNoXsKZkYxgekR6yzqEgYgkHN",
  "key36": "27CAPW3MSKxZ37WyrMJTqdhgkhmZ5bf1HQSq8dP7BZ9ctavDSbusAijLNTKoDWNJ96BYiejgCFWaZahfepB78sNr",
  "key37": "45oBQ66fcDf76GBsC1NZSPeY32AxiC7PrsfJL3d1co99Hgt8FSJLkih47qB5Er83C5p5HpjnDiN4htK3YWNFGZ5H",
  "key38": "2ZYGE5fJ8n6LfwbxJMfFKdnLH8DbN1kS7z6Tgzan4Xwud3ritxWE8FkrN2LqSMXjvLoqZuMYAYS5AkZtxp8QDRxS",
  "key39": "u6sswBLr2Ppm5UEpLm8T17KySjPXjrsLmJpQix9cZvNSBNewqTuxysw6T8JUuQDaXLND9wp3BbmhJzNFKaMETqt",
  "key40": "34Zpyw7dES7GUg4vXKhbFXzt1RrFvXsDvnpWiGDxnGVycJSAyvc93UgQm7qafa36a2Zr8DWPAeSbGFpn9XpzXVp2",
  "key41": "2XcuQ61yvaWHNyBE1LGwgp1fadPRiwYohiL3pHDLmmbj4k8Tu3niFL4KSveb79uTJck6YWH4S29xTbnxCJQBh4fX",
  "key42": "MnU4K5Fodxov8VZG3bbNhYaVTqPoooKMwzaGmBHgfTnUtSGYFYZigivKZHFqWCxAVM2CZ76KoKUWJbJRsKot9uR"
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
