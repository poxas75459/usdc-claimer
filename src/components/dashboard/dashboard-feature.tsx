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
    "sFBD3iZYqa5PWt1FGrbYNKVPRKe8oyxG7tXBgLJWE1moQPM19RWPQCS15Z9opdnhMsTg51HDtDCSj2FGN1vX9xG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "FPAd9ERQnD3GK4J6YRiiXtry27FvCw3US2i5j386PhkA9wgEVynV1dVPXQUQJcEEC2pz1KtVdUiXq7wBjmcATL9",
  "key1": "4HfpPMvewTm6gmK7TXfkTCefERqb8wEuL4ttfviaP9RRSUp38UL5NZyjrJM3amXVFWa1C4Lx6aaSEaA8ETfqo4EF",
  "key2": "2Zt4ZNK9GqFKMX6kH9e2mbamnZfJoPM4MfDfNu52vCNd9fGeBAFRKxrHTfPtuVp6g13RaFh7QrPr75PjbAUCKDxi",
  "key3": "5ja4LbEK8T3L8nZYXJReQrL5tvWmbbU9yaQkpeZ8SahJgVnD5mG3hsPMPxYcXjy9pT35Zg2MkamGV4Kqu7SiHh4E",
  "key4": "5dnwvcQmwjYVme1kPyH4dc8CKHXFsEkuPd7ruHERyRmENSEgE3ZRSwF5cSCbnZu4AgBif2ZvA2E7aEaVq1p4p4HT",
  "key5": "3pSr53shqwa3poqniSXBGAowETNYeHJi2S47pHbUhErB9hj6W6d3tpnBVuuhGMfQFPsRRf7rBt44iELScSTPT8Jp",
  "key6": "4p2XSnNLGURUSGYRWPrEgUk749mhrUJCxd2XxarZVvpxx5fCaSJtrgqw9ahifofjYqaXmUzP8gh2LLV4u3dFStPV",
  "key7": "5AjFh81rHhYkqNzwsHMkhZ4XUsiJDqHp5YPCsRaiHcpvqcr4DoVonBkQ4SnJrUJXcEJyBDLtBujNZkCKjRoDoBsR",
  "key8": "BS8yscz7WwcLxnKN6RoYWpQrVJk5ZZT3euL4ZkrrBspku8MPnXYmZpcAMDkiqWGYJhjcFVgVsBRFF6ddGhJtjxe",
  "key9": "4ehu4sjEwPb9LYdcsY3FigkEsDvJCkcySCC2G2TstTTCffbTifrd5eAcWH6q9Dbn63gomcKHotHDbDWPxeuGcpYW",
  "key10": "5xyRVv4jf3Vdzu4iuq4kgyz2wGXouuZegVdmJcYXQKeZtUQgrAF69jBKicvmbMwu4er6kvac2DZJ6vraJMxZ8VK9",
  "key11": "32oGNrPHFfTGNaZu5Kt7D6Fva9ppjMhssz5rgKMoz48K3gC8FqLK4VNL3c1xVoq39j7prPQau2b7upxUYpLznRt2",
  "key12": "4XsTtriKg4BPHewVq787YKq6BqMtq4xn2S69KEPSeKtYES1wDX7xfsurHQy1QAePXp5FNBcAmbTZhQRVyB5tRgQZ",
  "key13": "4ctnzUam4vRD48jTRTAiZh7qp7ioXF3i1XRKoHvjyx6TFSca4M1fhZi98jCnoobH4CGgP45mUZS6i8KvMTo6A9yE",
  "key14": "5EhcwsYSvD7vY5C3P8g3FPGeKQ883M69MYgjhwzNTQFKqC5KiRG2GMTUaRAh6xyE6VDE6nPJZLMavABUMp2Xc5Sz",
  "key15": "3HVVjYtsbZ3ce3254oxD3Qb1hvm9hLdC6YkX1iqfnD6Ta8j7N5Vo5iL9NQXtTNkVsost63k3XAHZ7Hhw8cu59Q4e",
  "key16": "2EMqVWMArRx7tBvQdd8r4DTyDnxjWZ3riM67huANeazcebnvXbBVpDtAR11FaqWwFDyZ1a5FNReHQePW1B4ei7vM",
  "key17": "47EStU6p9y5qhx9wdCjFqDv2jMMS43oquyQU9s1nytkdY1Eatht9F18CQG9TrR5PgpUasqQkifbb62psV9xyT6bF",
  "key18": "2oiBUCd1xuDMEKPmsUAy8RBEmxsBsi7LRKpZ6bL4LHm1HJJe1Bs9TFenf5GzKnDYS3aBPjZDqYAczxk8SPQymYYT",
  "key19": "qaSYgYpZKts9QNTkZXefkNDyyc17mvvSr5CWBwAsJbinWkbm95rwwyn6SjPdE8ZaJ2oriEXmN5eFARsmSsdCuYq",
  "key20": "2ZDDbEt3uXf8mKiHSgnC2wopoS1JMwuD7mU5jbTv1udmMVPFH9v9L6HMZxPsYKwSHXKe8DbLWvy7ZvfYy3CNMbMF",
  "key21": "3DWvcyVKfoUWoiSaP87dc3FLgbzJTZ6QdQsXDKBWAudkhqUmc7HKVUAcwTN4ffaQBpoYJYsdiTAFYyzTThN7kSPt",
  "key22": "42tLku3px68D5ttUh5914RN5wF3R9Upb3cVR7HY4m9maenCYVqk7fkCfDqzWiBGjEHmWWHkagvze3ZxctK1mMj86",
  "key23": "3WuXey7F4mf9wp5zwAtqgga5tpWzQ5T5VwqfWaQpBzFzvKY6PTaKEnTHVof6D6wwgfNQpKecaZAckbd2jnhAq9oh",
  "key24": "4VKN3W6YR64PdARUGfouq6MqY9DwffaJChzAUS5mpZcZXvCp1cTD4wP8sAjNs2TmkFb8ELN7UHghP5gt6yr3cv1w",
  "key25": "outg4hsegXM1hNDTq9YmNNnnowBeyAta5BhMuhnThk2RTWfxHoFowVcs8ueWJ4j4uB24ivmmEun2EPGkGGWf6m3",
  "key26": "25yMgymgkAuJeXqbVQxE9y5sYwv3hGFow5cBRFjY4C925eQpHaoviUhQACqHgNhJqBZoB6ZkCvb4xyv5UmMqcvJH",
  "key27": "5VsyPEVURmKZ5GB7CnPsW756skXTzUiu3PrbAVpUxbkHsKVBjLRkBRHMqhu9WMuLZv5XxjAzHzkFtESQKXqWeezd"
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
