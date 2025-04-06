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
    "5CfxptVTxH4BYKsXMLUxovjBgXymg2FpegyoKrKKpnjD9GmB6RRJeuG6DzGM62jmYv18zjuTnh7J7VGQrkk5RypK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ULTnvrgmHFVbEKBZkMaZE18dLeuBiZuN8C8rYZ12uM8oCrr7u4o9V37kF5oaJ5hjneaNT8HuA9oBr1rx54G4aCc",
  "key1": "2hVXuquvWciSThwhGLM3rFE87nC5QdwUhoSmrFYGJ5VtZNiBwUh8AByLHKbKHLQhDmvjx58FAvRiHw3hdQFv7du5",
  "key2": "2b9AiZo2y1UQhVRCrm9gmHGYpLFB2krMDEnJYDkDHF8H6rtzZjcmAmu8i2M36Rx7wXUqA16mKET5FtstdGJsDcdm",
  "key3": "mXSBqVYWQ88oNgMPMykjq5rGSFhtv7uoK2ADBxy9sLNBYkdPyEW7DzqgUNv1n5KDvjVctoR3nNMyxcieRjhuhqw",
  "key4": "3cWsn6AXYWpfzR2n2K5cChexUCYStmsCM4xxGBWtSxDNa5LtYgvMRutYxWYGhs3CNYkPMegRxBy582UuSUrS2QWG",
  "key5": "5GzP6qVNHSyGA3HvJYnQNdw3oiVTbqogbAfQgHrUX7pBYnoFeSrPGFG5bnd6qWo2PvkQndPSV5G3pg2KsRGnPPeJ",
  "key6": "2XfdGVgivykr3X3J6zeAWTBFB2XcxEg4S27G88cMgzxwY2exXzMZkgadWipbu5QDo3R1t5dtWMXK733h3Mpxpqi7",
  "key7": "41YU83Lxzv6JxkbskFx33wDqhF4AauP26evMwZDCyuscy6R1Mws42wNRZHgQbR7WWo9BaLmFm4wkSU8QMynoJpq9",
  "key8": "55iSiVo2UQE2z31B5wyV2KSJAQmTivTZQArpMFtGyJtYK6jaX5B8x3hLt3KDXLr89eas2J2ChjjcPSwB5JmJf7E5",
  "key9": "5d8MzHqnBcUHd2mbtFRxUidJiCchchwUrAerSkEmgcoAHPeSxrgVYZxR5QnHJciz8adbU8dCr7VV6Z1YVe1XAWzz",
  "key10": "DdBj5euzZ4LuegNa7386Eqk6MCJAzxLqikKqKwaShzWBiEPwi5rbQR1FeyGvmfkmb989xWcBqaPTAoRfs9BHzJj",
  "key11": "nTTzgZ2efQq5dmnxFMSDB1LKTwFnYfLTt2uRdoyKG8ejpGQtwJy4fzvsSneyWEyqwD3wqXceoLtzFzuhrvaKkN1",
  "key12": "2Wv2Vu4pVjQVgwsULSwvBMnj15LNzTZXeCuDhsRMtGUvhDAv19pqW2UsYn7X9L6jUupT5wXvhxGLPo1iUkZEV91b",
  "key13": "4DsQVbdpzpKT7WZ9KRj8kwHJP2MPhSsxXD3RrCy3RreeoW3DMdtBkyeh5kd3X8eD3UBF9RcHL5thMw9S8Dxwde9n",
  "key14": "2RXxPD8Yu7vJKG5o6f2keGUJdu8QtKiW9zoscfWcUZcXgR7qou4ST5mpBBr7N4jwAGTj8g8XF8o7yxzXrAL62d2H",
  "key15": "3XNZMyNm92kABPdbkqKBxyA6CcnHVLvuwYnPDbtZ81fTABk3uNKYavyWtFYXC4pd4gDZTvJfHEb91trCDSGiJMnw",
  "key16": "3SY8cJKVMhBZoMPBnRaHug3rKHQ7BRGzioycWFPkqRvVKFa9BTEzHvaJQ3gynQkiKiRUzY3ZMFi9zBkt3AjtmSyX",
  "key17": "52PYGs66SorFERFPUGEF7k4ad1jK3dRHshsVyKcwJ6k91FJcezwTyT9tmoR2VUa4N8zQzQQzaFhoB6fpgnv2RnrD",
  "key18": "4k3XsSHdjLgUvW9tWTUnQwy1zBZ5mnKciB6cb2mMQQyv3ReYLjs3s6CrYQCDGjUBLumupsk2oAht3dnsytrffthF",
  "key19": "mhEjW4EESoS9nqrm8MQbvo8DFisJ3pzUwBpxcghukVq2EkhCAiiczeku9K8kzBadWHfHBkyxTo2ngqht3VKzGwd",
  "key20": "4beyCMxi1xFWe5jWYSdLqw44pitcP1kdXxD9yaomVUYdajjaLh9jhsmUen2hgyzNq1VAQ1npXjVhyPiJrHGL2gVj",
  "key21": "38cat8nhXNQaMcEZAkwgUo99V9rWGB915ShJzmmTmjqECmAPpKnVYJeekmvUnRXSMjUM1rUuDfFKbmT74djiPGCn",
  "key22": "d78xHqD7HsNr37Fa5RyU8eVgCAZm9HtRCNd4Le8fKjbywhNYENzRSUgHhUWav2u53mh1MrA5yjjLQUAA3mGh95d",
  "key23": "2Ei6Vp7JHuHvyzwBsYEMNVAakAzebBSNyV3hAgZTvfdAWNXLRWsn9HfwACAjuppKS5rZbnXCgqxLa2iSj2SfsKAh",
  "key24": "5fR8b8VnpsvwJSwdEzgxtv6DExxuRgKbgyEUp4Y9XkmZBR5s2mrha1K6osQDgpDxL4niZFH9Qb3FLKaRzgd8Zhzh",
  "key25": "5FJBrYrWP36VVj6kt2HwqK76Q1BVEoJu8Dhqao4vdEPW4FqdpzTihHkTnY34rbzwSti6Feb8Rvv7K1RMq9YnPuFi",
  "key26": "52TactKtZefkHXtwwDe4viSAQi3ubbnLh8MAubyt1VP5RNhVWZXvk7VVTEzSPamRBAgxjfcDrj1gj1o4AfqdL1SH",
  "key27": "2YrYakSef8KyPmueiwPKY6pmGVvVETcFtfDHV3WXMqMz56QM4JQ8ZmwDhZ9aokmeRX9qgnCkXV3GHycfAr3SCToG",
  "key28": "2JaRiqEEtYWUeTyFqQufZUwtZL4ZJPYz3A5QGAZEojFoLj4XRB3bfEUfchbuwCDw5zPxaE29GVs86wZYAj69Wipm",
  "key29": "5SVQNishajrgSMSfhjDLAuZECCPbjywpk66smTEDbxAdyRSSCSXyBfNtSWHkLdH67bzuK7yFuxXqrZdXfoheovhY",
  "key30": "2fCbDgW5DAVbdZyj9Wriz7S7D4C3Xakzab4yAhTiXbGCJxEXHeUwuR5crtBbncpJMUX1o5ycMBSHZM3AWHGH9Z75",
  "key31": "3Z9wJwtiFThHph4g5LVBuNzyyFAHduKQRJZxxdKk2boQDvzfzsQJ1jG63Un8TEeeTXHthU8dWTN9Z67YEZ86c9Mx",
  "key32": "4pQEr2MrrSPkP5RLshcfgLQAZGExQcmwrHaAtahHJ6aJtt1pBUMawHFCkJEqWGZJPaPcmtmqgeN61Juudx1Yx1KL",
  "key33": "49KaSq2u3sEQcGX95NgE7Gi5zr4rEek5ptx4rdTSQkTV2i9Hjtvr5uXN4UixKgnKGk2u25sYpdaftpMiGj4sFp8E",
  "key34": "5DLAHjW58hFEp2eqCGJb79JWymGH1PDPLFokdB7jLiy3kJ78op8P5GSYdfpYTHthqk3m6U79Dr1rYgmzJ1JNR18d",
  "key35": "sHbTLkgq3ijA94wjJ1ZxWbLtH6ARr1gaZaAuvkGaR9hfHshGasZyMVMTxXDMmbTmMEhGkPNbyzsJ3sqmEKky34o"
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
