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
    "N6RQq6t4cdbdDbdotxEZBuBr9KjaWCR5Cqvc6ZFsTgHArFrjUVjN2koXfBLKUD6rufCzWvtkPfzcFtPRinVucye"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ahQFs6ciCxadscs6yaa9zpD347Pu2nU1bHHyamkCoBGyvdkG5479AWxf5DPmyK2aoQMjCnWbyAwfpuAPrWpx7zT",
  "key1": "AKrtDVot5KPe9UH81i3iyke3iPzWr2jv4GSmf4FB6WJmFJhJrGuHP5vsucgHkc9Mk6wS63MQW1PBpB9QSW7jXc4",
  "key2": "31jMyiqqdy1DGbAxEswWAKrMdWS7XReJ9kHUhHUm5nGmWBykvgeWc6hSyo7RF9oufnCvUSySnQe6fHx3XNs6xKsp",
  "key3": "yif1kQyqJKRYRzcaNqfXk9oeGgSVufiTC2U8b1yidh4wYVN22mU2h6Ts1XYmvmVpSAmQDR42VT6TcRGBhhHWZyV",
  "key4": "5Xkxor8vAEuSDTLMCiWvGdS3bVnrv5ETnTBW4zXAKcMdVndxo2LwCuZipSk9P6iHWHjc63MvF97ounJR8B9DB92b",
  "key5": "4FNScPeej7RwupsabQyixnhsgetRyQLWs63ukb1Vf3uutx9yUwNnnaGuPmRTSp6xuTt92u1yaucWmQ29XsHWqVES",
  "key6": "3m2PhRAUksvRdsPwS2bEb269P1iaYkfEEFHgQgHjnyTBQNkMKjUUwai5S8LGqMPEHMadNBs7fZvGQqpQCQpP4mz6",
  "key7": "5e9EL7dNDmNgizWCU6whJiznyztC5Y7LaDUY93GXUaKQaeWgtvv9KJtwk2mWMLJ89ZDyRLC5fBhGwFeguf9c4PEQ",
  "key8": "2ixDTZLzgihe48WiNaLyiukqjrvV2NaRi3Kb4tNtYgcvo4ReSt4VEdFx6LSgGwVWgQugKn6Pt7pGdVeattDaD13E",
  "key9": "2z1qGQTtmbmg77NBfkAcaVGEWRCW6wUZ4iWi57gZu2cyyMdLNXbfxh75u8riezc4HTC6WcKnPwLkG5FDwriXkoXc",
  "key10": "5GgNwNZejnNhcCFZRSn87fpnimoLQ6JrvCwhvHvKJduxXiNBtuq4rvc36sDAWsDTKNDYL6SpYXoDEKwwhCZWvYwG",
  "key11": "3sptHbU7SAQmK4YyxA9qdeyygMG3Co7MQJwefZ9whENBVb86gbMM63c7sKt2SQcJasrzBo5KFpxLp7B8UPC4jSDv",
  "key12": "3ELPgsu8xwG4ocMZ2kXvtEodgoZBvKFdkAtZrpPGEnSH3KnWXr4pSjBpgNt1BnGKWAKSSQVvb8aZhL1pLt1T9KAG",
  "key13": "42mLyZE46cDaP93ww37ncSQeh5Lvdv15oDtEPZDm6LwWagdyxCsqjW2KAeY8wYBdHcqB5xyGn6CkE2LUZowtJtk",
  "key14": "5fetCFQTGdZLH3KyCTA2mLNNTbujTv56V6sA3XPEJ38Zbae7dTZBSvJw3LxsqzYaJMx3ouwMLwZJRLtyGz7xmNyE",
  "key15": "bqp6Wh2PCLhr6AJgWAFV1vSR96RxUxyod2GMSzuFwqKsryMjDjqDMYHh6YJ1erLWjwaqs3fWeHJg2pxv7mJGqq6",
  "key16": "4BXGgnZGccrJC1fnRzjtzgiLYvcHY4LTVnnWytEhR3YtKJXjBvM8ZvbSPUgCmopDrVmNrewjXCC2VuxPQN7cPtei",
  "key17": "5jaVjaH3VvNmh7fyv79qZEya7fh3q8hkvuPKPZByEtToKaGTpYDHAmMYEdHS77VWNmyN2k8TXQYVPa31JS6YD6dC",
  "key18": "25oAqhNq42cFjfcvgKVUniHBSVJxURBqwwHus7ffakVCBrbPVQkqWx5BBNaQ3XUU9h63K2EpEtjmxuNzxNBU2NCq",
  "key19": "kHcsnjZQFZeaBkt8kcoErpsSK5R2Fm9hPPJqhSYWJhZHkDGi5LUXre9jcuxevmb28YqBixEjv751h1UV4V6fQse",
  "key20": "4rhwLYrQdq4fJv8SHCSfYcu6DAYbphitt1mYJcMXM3MV6UYKeefVLMhWF3jEY8fPgU7kgLjgiDzEHoAzeU5rR57W",
  "key21": "2Qwzi27d7De2VRWuV8hEfGNUEYeHkpe9igNam2xBLEB5F1Zdrp1ZjBJDqJ5B9uFrTpJWU3uRt7Anh2gw7qmiwLez",
  "key22": "3mhorQC2Qr8mPkm6wB6vYS3LB6KEEubssYRpSwNpeeXJLwZ5UmynyGCjYsr5dD4ryrfqfCgRP8ufMMwdJp44YDEA",
  "key23": "5xtiwkgUZn8KHcxnBHX3Suogq7GWHVaePf4c3JQF5vKXvZdW7ozngY38ZoDR2fhQRS7osQXzTsTKuV2drD3G2svR",
  "key24": "Snw92PcAGVfqj6RQ7xbaDxfVFMQU2SeWtzm5Aauja2dMHpXffkDdiMTH7eXDbmwRgxPsSDXGt7m7Z1BtcLfTWZT",
  "key25": "4cDZPykpFuVm13XWZowasfY5Xq8gY2YWCYiwq5L5i7vNevk5iqcdaSvmJ68esdp3CWoWsjvKt8wpyKcZoaULtsCU",
  "key26": "4J5Dkc5CrZMicwvMMyJTRPUq3Q2EMgVvkiJzTDN5Z5SfF1JVVQg8Z6yAxcNpCRkde4UdXzf1XyaPBzKVoQGUVQcp",
  "key27": "2M6smrCtos4k8qUTYuJBW7AeZSiXkQezgR6feR8P3Jh4o232fULoB1SVhG7ACWeYSkkR9Lb7Yb71iok8q8eji24Z",
  "key28": "4WjoLT4qdW3gD3cSK5d4aha8YTpPwjU8NFjLdysm5h6UtHkwVf9yThxX675UQuzzBhZTWMx7iR2sYoBt2kwmhWcz",
  "key29": "4pKPxi4k9KHLyYUsDxLysB25TCh4BVoARcj4AnqMcX86WXwTqzCQJiGdYRFwnMn51QwuYs2wYJN7mLU5YEVW1zjL",
  "key30": "3MRxFwpWaZgGf9sjnAykXNRxQF7Pwx4HGppVbQvVV7N5BifWGiwr5sNv1tMaqmTiX962yg3bLThKRorL3XVSQrd7",
  "key31": "4vJqry7dpjqgqPdnn6hKRDnn5NJhdW9BCMKzqKHLhHD8bMaQEDYsmMNDg1WhNViQNuyWFDuZdPZdbtNa1sQsa3pN",
  "key32": "2r5TabwKF1sSyWqX3UyiFMNd7gM3ESw4GGG3mWZj5BGWBss6oGxKX4JYcaUYVj49iVcesyGrwQg5iy4RgqjJMGwc",
  "key33": "4MS28HECjNLW32BUEp5LusxBsy8opbW7AbGwZAPSNSAd38HdztAyRYrxJBGNK2EVbtdi1wQj6AZjwg5LHBZYGjGy",
  "key34": "KWKZjnoNcRuNwjoqLetCTwiBrpj7nMtz6Ku8JZrRchRKveL9aady7JC9DGrq1jPhQhTjGyPk7KpBF23yii1LAKa",
  "key35": "43M9q4mpraSMP1uWjEtzZsWCtDRiuyqp7eaMMGY76CDCqJgK3h9in2w1XW37nUWeuuJ7EkqAmcUxaxJdKtSAHtYm",
  "key36": "3PrGJ4C7s88VUukW12egtqEFPzXzn585o3GRXWTofPAeeCtZSNVvCwsUtnzHzGNXJw3QF7jvEa5QQJTxsQv3QMTw",
  "key37": "s8oBi64AEYFqykFsALx2b2NENaeDpEv38DPDnS9zxJiy8mezncEcoHt4SWbBqGU8yE7zYrv19R7nVX1sV3DJxSt",
  "key38": "2Hry5u1ShrqkS9kSMQT4kpW83vjqTf3Lj2sR6Kb9EWwMqgugXhCnVyYqTFNpwziRJrhg5DGSgKY6wAAHYyWGsDuA"
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
