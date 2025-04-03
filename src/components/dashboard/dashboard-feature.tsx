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
    "3wsitM3LmEazr4CukMvhyVALeJBRJAbNQobgZfzKcKNcGCM7knxMHjvBamwUN63XE2KnxEHJEqa5V72Z3J9yQG2A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "EpRVxy5aLJP9cH2JphxFmBpPVbbbXL4nCGKgE34xQKQtHvq8hZ2CjyaqQGVzb9FaKBAH1LiMWMHN2j1VXMo2kLM",
  "key1": "3ubRNe4ArqrWvjLGjQmCmCFUgHU7Aw5bfSmCMaiqffoSTZ5Ao77dT2dKJzdXbMR5V8FbMZ7WxzCXUYceEr26x5HX",
  "key2": "5B4yD7jmVgiD3tAX4YMH55jhxde8vLEJvghojL9HpwtNF4zzCR3CK5gdyCbKfgFWSV9rhGiCR7Gq5mKHHcKHWJ4P",
  "key3": "4XiqsD8TUrSJCJ6ipopJQvEmgaviAvvxDQDB71wzY9Mt1QLfX12e97z4fwM2zXE148pFYW15gn9gnXzsef3KDfhx",
  "key4": "msQu5vmJKtkBk3uLvf6B1reHfvhNWEzS7uYE2xTLY4V4cXYbWEcCTRjdth53F9oTZ5Dsg2fdgXHL7pYAt9P4wbS",
  "key5": "4fNXwKhxaVkAwYP7wjm21GPzeWRgUxjY1zFSyNMs9HB86KANcz8eHmW1pK6jBiHzTMuYeczeYYwdkyQznZ9uWbyp",
  "key6": "5L3YxNQrKD2cHgVafjfnhTm2zrbo21mvTCcZfDdz2KosHVnjvwuk4DUgr2AQJGUwDvqyXV2T5CnRv7qL3NkS21fo",
  "key7": "Cejcx2u4RhQYRdskZjStt6fWESPFQDJ1CF3hezqhWRjWtDEYybmAcs4tJBedXe5zYurbuapRNHEWYVNvExCzNWY",
  "key8": "5zyGmwMe6Ga9HfKwrLwChWTh5aStixH4YJPzgEmcQZ8dfeQESHvuzWUzq7X6kpCerFyNP1Tk33xmTog1QJqvgRms",
  "key9": "2Mvhg5D9ax9F7PLZFZndNprzDjc5u5bi57sF933TzV6bKXEAzm2QgKuPGGyTMn8mghLr7DTWzwN7K2cNGfXKNP9b",
  "key10": "2QEErVweJhrRytjWYCupGFHuNnRyKsgX4M2iD3xiKy1bpr31MRKrXCJ932hkz5uigpxP3UoTyY9Gk7MTN9Gk3XyA",
  "key11": "5apzQGZwVEKikBK9KSn7Gu3rwsvGG9RvZxSRwZctbL7GSmyoBcmCdS48BKy3ETPa5E5X61eDdaB5nutw2xnh4wEm",
  "key12": "33T2P8A1WuTay1QVa7P6s81S85aVYQmAYkEMXXrbzsCjFkAsy3yPr9WuATczkAsMwg2xxmJPoQXviY22DyqeNYB4",
  "key13": "26QL5YwooqxUQLYgKiw4Q8cDoMNigzi95yc9v7w3N1XwpbsdVbWkFeRCCuEDhvVp6YDWxT9eG8TLfy7EG2VQgSTL",
  "key14": "2Ppf4DtjdC1JspnreCVkkTtByA5dYtXEv8h1a8zeaEEzDa8MES1Q7FmUmKjJwdAxnMxHG4NR8iSYbxwXr87e9ZuK",
  "key15": "41btefvhUiMMP6ENVmYP7ErZ9MVtwpTyGKehFNGR821Uj9ELqEC7qus2HkyB3BKcAKdZuTyyn7jrYWrYGWsCBHWx",
  "key16": "3xAS9KNxpydQsanrj2tjbjiZXp3nH9FHNMDPu72U2NwWhywSxe3HZ9772taTvVndA5Gvdqv8jX8NumTqqqABs3Dq",
  "key17": "T2UgHLaN5YoeCgKPkgMyfM9cAfyswSauAYqJ2N4XPK8UM44PvnbJXVGaezoVfn9NToK4bw4LeWeWeCHTeRwoWv5",
  "key18": "45VUhjcUxEnMJyxkZ7YLRDXyKnFp4btFDM3GmBQH8yJgxHGW2XH3gaeYGtjaYowKknpadh4unLGz58zFSFeJGtgE",
  "key19": "2ZjLXCfMnZnVX54gqodeght6owzM81QXvvAoYkAFrSZwcg7PewfzFRCNq7pAKTEnV3fp6PrWuK9sXVeHEQ9hozqX",
  "key20": "7tZuTHBSqEp7tqsruG9hbZPkgWGzg9DVSjCdKiJGtd7ZR5rAEnd1MxmNb4Akp553Srmhr94NEjvQFdDheHWX5dr",
  "key21": "HhTE9TjNsri7dCEJpoqtWX9Qnn3Z8bSS6AP76pc7GvEttNKMEbcFbPRwAuVbvKAUJZPc9vMatSYTPdMzPWfDPUB",
  "key22": "4qPDArFU6oz2bZA213rJnRR6vP5Tq6b2fCnY5BJ8nTtS82sGmRb1DL863ry9jyW6ymZjdxaRYWTvUaZTuRBEnhzs",
  "key23": "2EA1yRzxrx6LLKxWwX9xrEacQkYiqFxXNXMmxFFkVCRj52KAN46Xq3wwH4rWr1kNirwidZt1fCqHVVgK1oW36efE",
  "key24": "2HMdBqFVCgRHJLRi2bSpfmqbq351kPpwRyuyLpCFgN4u59YT5HbuWXdbBBDewpMhWJjycaGNFtTQv7JSm3rNiFe2",
  "key25": "663xWDxQeQqfWhSp9RrXdEC7xP365Yfb2gxtYrmtCLJgr72GVukvssMzLYkQeq4Zv19ke814qqBcqoY6Z4Z9TgwG",
  "key26": "2jYHPKDoAVcdfiTKcpqFrLUzt3MuefmcCbGsmdSrJJRMuLaPLjmoHUVzryqEKS4abVBSbZcTH5dNFfbBJzpnBWqX",
  "key27": "vQyzWmDReiHvJsAx9p5AwZ8AiyFQEUkUB2JDME7dXKQLbq8W9bhEdk6P1kDqmj6LX4UiUw3tcB1ag7yhJMFQNgL",
  "key28": "4FqJ7HRdpt3DfwCpPnynVAYT1QEUWn3e8deHFbzmu2ov3ZiSQ7YRZ5npGRy5qMhmg6Z4ngDRxJ7pZen7KzrUEmmU",
  "key29": "3xotVv4q5y5JxwT8cCVfgc6DUXbwp2PkbEoKnhbLufC2T19AuyjEemztKT2oeqSfgBHEzixmLSrbBdmso4bx91SM",
  "key30": "4yNbtujfKGDs6yfEvDc7BBLKHg3SSwMWodCNmumCwFWAkBHjJTYyWvpzJUWe8L3HyiUmD7sUHo1uBRp5saZsrzbH",
  "key31": "2xYoMReV9njGmmWQRqu2PK11cRMTZWey7SjARqZLebcJ6g6WwjbqpqhRgeBaXcA6ppJwEShy8nNdNxDrbmH3uw8W",
  "key32": "4vDGiKN17tsLGkZwq5J8kQ25UUaJrS1w5HZaCKbBGPrKDFvdDcrzx4JuSjisgG1inuvkLAybMpQBhuLFPheBPFSF",
  "key33": "3ED8DGzAbSKF92eUsnQsmLwdAeqSb9eYHeRpmoGatTzrCg8sw3PGMvJk5tLQM6bHEoa5HyeCy9z9kHw5VeSY68Yz",
  "key34": "4TkmvzKbmbEStjnsa51GJwmnBcqtTWB43FdhwHMeGaWkqVr1xbXDEPGECcfHhqzjra3GPLCo7r5Tb3vgdL6qUTD3",
  "key35": "4GQxoijuNsFB2mUpA3MQ3CyP3FDdDJD5ssxcbAMdp1N3UyYmSbYeky5j4vdDQwtA3AvFQ86T2sVtKeCAWH8KZuz9"
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
