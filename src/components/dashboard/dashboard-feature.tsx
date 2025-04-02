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
    "25k8UxVEie2jpqd2UCYMCoXnw5vVG7vFQe7Nd6sJi6KwsPWcTyqS2wznMAjfNrNzHvPQjCcgttioz2CKCfYXUp1J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5pFehf9KRmSEjpmg9DyeDFAYTMFEWBGebSiwC1c2ZT8NS1oPsW661ZqNhukbfJ6PWFUGgq8nzrQoPF5H6VdRcWPd",
  "key1": "4TShRoocjFVQzq7tvAN5TxapEZfce3X8aeXe1oKn9GtryztDLLmRqgnRDPyxyrsWZXcWppEHSMnNqNuPJk2iVbMf",
  "key2": "2WmGch6mgzmrX4WhZLH3hhELDKBvKhm3M3bdxbLuyYUwNvJNWFLA1HxXsu5wKSDfGmkV4z5XSDMhaEbq5Dc4syVr",
  "key3": "4Gc1PkdEXssgaaBm1n57C7vWoifjUJnpSdjEPRLJZwQcjXuaqqqd8RuadMFtXEkaoAzv7ifi1L6jmU7U3mvwQL2Y",
  "key4": "22weynQ6wsAPtEEpRNWNUBPxHjPw455f24VCaYJtzxXAKtT93Gb7Pmv6nP82G38MNTaiSYGHbU2RLqNm2w8UTxCs",
  "key5": "3uJeH91QAXEvqeXGsVDy988k9vU3RZGGwWJEULBcg4wozvNSUaYUUEWLfU2PTnuM2Hpv4jtRQVarrXFtBTwMLkeP",
  "key6": "ZC4MPDYmX83rDuQfzfbxxGLgxRNTHG8tF1oBCGNRwwAYjJ7oxX9HU7enkCLgNhE7R5mT1UdtxqhufaRCqs3xfue",
  "key7": "5ktcuGk6GmGt7SX9ZjptsAA3aMpAr9pSHqnMBhKVb6WTEK5EZdEaMzgEXwSAVxUDRvShXEWR8t2iSXP4BQoDjNQB",
  "key8": "42Wk4EQTpaKTVWuEQWqUG3nRSVWH9wd4xdKFraomcswzrxvkjt4aftd9EETqKMN1J9vcus25agRXg8iAN5gxy2Ca",
  "key9": "5QpGbCcKgx9ark4LV2kdcqL3LqJsKSqpixPYXMLRnmW1RJbnjJAM2uf93qEUURhFSDv8V9yHhwK6NMR4KSqdtyDc",
  "key10": "64pHBNJhLAY9NCiYpgVF1vRKvFfW7WsWvd9wWdH53NXrJreNF8w9gYeKLT4FJ6TfJr9Tz2cuYQjdjvg6q4EJZNtY",
  "key11": "3oF9VA6mwnYcF4WUbjMWBz4s3ExvFPcibVfYiojfGKRNkwv3RTGSm9JahFG1noKneo5uwFNr6mJwtLnd6SpgPFyB",
  "key12": "ZfFRdRcfz3wwtYefgTftCfGCSMEtro9mEAvgS8SdbtTvYudvHpFgBFkerveAACi85qxvT8G2Uj29PMEqewJJjit",
  "key13": "qzmXbgs7EtW7nJuRszt6UVSGP77RnvzhqJow89bkRTjSSp8638UmVEADa2xKR98kebZ4sCSakgAt7Hy78oK19PE",
  "key14": "j36tnuVCuh7BmqnQpsouzbgy7C6kLozN2xEEKUbTEyUvy5ttuBQmfgkDFsfbGPngfExKdoDv4qUaqbNNuTTbZro",
  "key15": "2kCfTVCnjFChd4Gj1hzkcPnTvT3bXtanU1gdpi9hDqjzNpPq4RQsU7d4XFjHr9Hu8gC8s1kB9nQzUZBonSWT8jy5",
  "key16": "4F4jjr5KyRZKSE3KuazwuQso16CCA17bk1fxkWJm7x61K1ABxZ8wHy5cgehfQ5cH4ekQCBc5nRqkjby5oTjLNzeb",
  "key17": "31F74n3RpsiquJGGipjWPZ4HQX3BhVvh7gcvo8B3YJHE2L387BEKR68PzMd19uYERNkRtdJ3TdergXLV7fp9s3Ep",
  "key18": "5L43eRuPUZJSA5H2AZC8MTaYPgTcVYuZouvcR5cYEwJLi1nUqhQL1sNjDsNnhZq4H7k2GsbgEjaA2b9beCUP4DuZ",
  "key19": "4dWE1yokWEnJazTnDo1ktejMW5goXuGdvPmwkMMa6STbNBigoAt4BCqD4iCLf1SaJ1DzRNWBMpNPmCcQLkhERKmf",
  "key20": "5hytK24CTLi2PY1QpnToYw9KifqvfLgeeSu8g5DFVU8akACKv4v1Y7RLBQiYF8aNKpA926RqZqNhC4cAHLQ46DK9",
  "key21": "2J6jYrsjpa32bgyb92uKMCrqSWDnsXt5Y4QMtXZLbNaiaQQNvkWhCZH8qa9aLt95nAZa7UM5oYBmSL1ZvZY8DES1",
  "key22": "3LS89WcEZNjGYZ2LAS8Y49cMVc3UgjVjuiT6zUeoDuvdZSs5mJMvA8G5PLNv9SHr3bFWQGTf65qFXZxuVdTSZuQn",
  "key23": "37xHgSkVv6KH9EK9TAxkLM1vrxRp9K8DrFZcGovJWTdMX7coLMn1CgGWTUjMADfZbcF34u8G1KoiBqNGhnfegq82",
  "key24": "57uggkGYKXJNRz2LXWykwU8X1LChKMtXnzEsJCiHNEJmCUS4J8Z2qYh2QvGgWtyCXMvkHrU5koApMoHSzw6u3U5k",
  "key25": "5MNsR6TP7PdguWxNQ5SimrTPz4Cfu3YgcPWJvJxYZb5987aKW1HwfrBvF3jUUkwMxkh1ZNz8sHUrSVsYnc7i9DMg",
  "key26": "4aktakNPjM57uxd1wHqmZvopDvuBNcB3d2KmbsQGoiFfPfEhJoUNNVxosVXxCJSkpvXqmhxMxbjfqCMSZ1zAeMBQ",
  "key27": "r36uUZ6U66v3g433UejMQguwAQta8pw9VpLnbGvMMR3fnnf2be411QAKD14JMxBj44Mrjq4oUvNdZtjWN9rFAaZ",
  "key28": "3YviZpVhVBtxWutWdw5p7ffKqqcev3c5Xbz1kE3opPcfwr9zxae13ZBm3YUiDg9dkCJT4kdbNMnymbiXgSoBojMv",
  "key29": "2AJjS6CYQj1xHkPNiFzKvySr7jMXbqNTULZQ7NTJovk2naQv7TNaGti6HpQkis3KCnsVag7x6x2srgSX1QbjZVwe",
  "key30": "3o8CdpnS8DXJELTp1Vgu82fR6bmgjjD16wGBs5zapr3WTU1vhhz4M4iTyWeWZyg37yyrtJeLYJj1oMvETqDBRmdV",
  "key31": "4AKAU9VaLQXYWnM9E67LC65x1v5beRrdG3sViPCKWFddtf6AcNiQFEMgncLSmGy5pYEtfHzy7qK4RMkNkmARzzAn",
  "key32": "2RhsvmvezfSC1jk8Y4CGEZMrSSeVTPmWxZJYsd7gyM6XEYdp7zXi67ZLrzmWtWGxxY7Q4jCHCeRV9xan9xQXL25P",
  "key33": "eWL3CPi3wrz8SbbLCxnfjKCeAzXcrT5tWhCwYtUxRz4tbUZy1PawXRs5CXTHsFkjorY2N6Tyi5NuXiMEieZnwLo",
  "key34": "5oQqQpYGcMAWWThK5xgPFr17DPwkTFSZwM1fXXQbj558EN6epmztxne2RUmzm56Bk52tabWG6ARTZnyQQQPk5TWC",
  "key35": "4XZbDrbXYmNEm2vyaAEvSjDZ6asdEyeAxm35q2PDZkyUQzQRjpcBJdSQFHPkCLhP8dXZHf98AiNCjVJPwxArHHmw"
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
