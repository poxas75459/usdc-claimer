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
    "2Tg72zRo5U1waPB8cGZu7N968QRjgyRAEnVjdMBYy8Lg5szEoSYu2bhPY1sVTV2F3nnBTbeay9ySNT1DosFX2z94"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LuL71Au5zmj2KLk7WzQnNiFpVT4fppxxD9RrXgKMoBdAShw43m3CqgNoi1txxhepnLYGFc7bst5ZvbvDpFFxjvS",
  "key1": "4gNqR5LwDP4YrpqMMLdBj7xuDAQeMXU53GR1oVQKutPnVaKcfE3MvcvbVgSqiPHV4ARZH19bpb8fDeYnUeucx7Mp",
  "key2": "46BpEpq8UTRRyS7KnW2MTRo782J8LVbn1cKRTVdYuhKfH8ePptMz7csjMcuuJWHjP5iSjGmRFHpRLPC5yUv8gyB1",
  "key3": "ySAEimofMDSHeRUzwGYkvMXqsLz6h9vFL86NPJRsNie5RRFDNwc5159KH652BoiLyXxwuDPzWJWcM3NanV1AQBH",
  "key4": "2mkpHeXNHbWikuwdpwXS422CSf2KN2qN5ucVnTGR73dijB2WCm7zQnEKt6UZF15oxAUX91xp2EriBn6y1RUSNmu",
  "key5": "Ut5wJbjRvR5fEiXV9P14GzLcFbTdKyv8uzPaDKpT3Kon9fcFVbhS6EYX2cqR63wDX3iF3SbeWWQBjRSjtqFjWtG",
  "key6": "26vE37qTS93JBop3WNtNhy2vyTvhm5MoZz5psC8x3JMzgmh735sfC5zKoiV8cYR5mMnR4yJeCB2SiqouXBMvcHjm",
  "key7": "5LovaSg6XcxypbTBSJKkaYi83X2syzvG3umZESaucLjPoyvqp75n6QJpQWABevRVh39WsXwuSZntdjqX7ziC8n4x",
  "key8": "33aVjdTtVUbAX3kqgP7HjHcSt7DGK9P3syozEc2P1LxLNTe8UiogtMDta7DLhVBdGXuVLMK2A9EBGNmjqJzsDDit",
  "key9": "3gGhxxKpkntTKq5tNPNQQLjtmc3eBdk7mvm89GWg8qCqYPSZzM3kunZ7wN5y9YPYfy9gsTVmFmYizVEVW92K7QzA",
  "key10": "385j1pMD56dHypwzJR1cdzFfeEeXigqUnAm1g3ijRB9Qcgt7CavaDrwDdM5XiMoYqgUfYzp1HY4CH43VrwgGz2pY",
  "key11": "4ppjibwhVynoX6JWyDxEVH7V6f1xa8MR8kFndGBVZMDbJnYjE7TyjiWbN2ZfHpBCuoXhV7pm2aFd8eEAxqxut3uQ",
  "key12": "3sW9CCtjAtPD6QBY2yRG2hsD9TTZQwx2zF4ca4vgZyoBqCKvYNsxvJLEMtNp7nTohwevRCSS9MdkR6H28sGkUtPE",
  "key13": "6591FhUsnGwiw8hFhxSFisMQmxFBKvxK5p3i4nhAfAhZDZJszqLjaefKWNnpa7b3BroJLqqHUk9uXXT98FXCAdTv",
  "key14": "2dZ1nhmGf5vBLSYWGTprHMMpBAaUyTRzYmXg8uywWnCz3hnuWjBRwVNQUXcExoEsT18HkbeY1x4zwfpzqZ2puA4X",
  "key15": "2rXiPVmvbvjAyf9ApZYChgHUcyetq983HJFcAcwtottprpRygze8ki54pBSi5dCtUCabi95sBBMPJwtkMWHdURHR",
  "key16": "3DhtMoY4BFBKqPR7HovH7Tj94jVRvesFNWxiB3o8jFnMe4ByLpmG1k6nkFp89Xgs7zk6sVq1CYn4MNVmMTiSb88j",
  "key17": "5WiLJrPk7ic5nizE52AtJ3R74NDr9pWggcAdgKuDXHxHu8xyYF4DyHacZhSvX6kmbkzDx29m1h8LQ1ztVJnGnMpW",
  "key18": "2zuw6WQrNhdSptD72d7fqaimjU5WFStGZjWAs1gYp2J2WSMh68px7hAWEWkttqdQiSoQhDaTdhQe8qpFrqKn9GZK",
  "key19": "4RV2NhPNeqpKxFvnP5nYN9dYzM6eqe34JsYkCTrUgBarJQeNNg7dcpBZRP5k3etJ1fX8vVoeVN3YTYiH5CoyqPvA",
  "key20": "3pVZGP2UZsuUHkRum3x4k25bZQKFdSo1LCYNXiKwEEcs8cRb4orqXz1ScYPXzPvpzFy1qhBZi59xf7Y7GacWQsBN",
  "key21": "2ibSqvZMPFYVoPCFriQptodmTXD3B4EMnzbRk1YKTzhuo6eDEHcNPhTrD9GaH2EjtkbWb9vwngMzC4L6fCUPo2DK",
  "key22": "64NSh4FEsxXvSMYhfcGRGEo1Ksn9f2oEZHqNisSNy5GFt9BtJ3sfQHJ4WaGfEqVdMxWBaF32Vm5EHAjDo2oawhr6",
  "key23": "39GBMAtkasxz8Gn6rH1qZVBwPZdQr6b3EFC5Ng29V144qjp19rBggrfE244fHU9aUCGdgWXRNnkVPeqh6ruhuPe5",
  "key24": "56hv9yhrsUp9mhmcnZgCecaGZGupCovq7FjUwKDGLRz95jbqSgTgEJ6Qp6G4taHgTVSh4iJrWtfR1kYgd4QJ9mGh",
  "key25": "5JdUaAMAvaMChbcnmm4WrG1UKNVUCSV9PgLFDG7knbSKXFk8ZhrbxjAjjGQDD3xnwpYx73gSrpzKpupfQJc7H9Fv",
  "key26": "3JmiAGzZyDT5SMJn4dKYzrnPB3zSfJRtMPkw38F8p3gT2jS3an3eCRMy1wP1wUKRM7qtkANKZ4CwtAxG4k9CmkYY",
  "key27": "Qtf4ms7KHUTDdo2MyQwwDuiUUAf4T7vU4tE1ZYu42Uwa84VXGGPcncMUvEUUQ924mVxYv9ShgKQqJkoYwbMKTE9",
  "key28": "FPrP5UXEnFWCsxKa835e1A7wDFyHA9vfm1PUrMLUKTs6z6qtoLgnGgR857nvdRsfRtfsAMQkdGz1voZpLdNSY2p",
  "key29": "5xwwju3P48jCr332tTEVAegxjbHB69i22e9PZib7zp8wWrYKcdghcvr7Zrn2Timf8CjLDnavnFiBs54Eu9ubijV9",
  "key30": "59hKnkTu8YuFzAsHbmqnhqJ3BcGUhsns3yoZnSMT2kCSb4Ko1NthETsifH7Hw9sXjqg6cjuNBDddAkvpc2armEKd",
  "key31": "5ZT4bBJYfy8W4FNrdaUF2w4NbfQAYxLZqzmbcgGxMvTCKfTDiqBgTinofG3YtMHLQfpAsBBrCtLryy99LDThaB5f",
  "key32": "Gcc1SeJZpQYn7284QoSMyrfeDqc2L5cA8UjdH4RSMoF5apkQeT8x8bcLuy4k5Ghphhh31kLyq73n1czzqpZML4L",
  "key33": "hatgtd64PyL7sp6YCAcwTp7Mhc2C8HDmNFaXDigVMG5q6Jq5pL9GbLJwRzMZKE7Vf6J8554zNhGea6RrY96CpYu",
  "key34": "41qsSNLunQKeBCDNsN7LkcLNayFspCF4mGeodPhmT5LGWbkoJgJiWyyo36mTo26KxHXvaxeG8LZsaQVETKkRFjyW",
  "key35": "3fsMPrjH75Emrg5nevfwNT4jHC1Jt2Rv6nAkSNUYminiTrFuixxD7pQTwuWmsLSrmcRxqc2aLA7XsFEwYS6XSP1u",
  "key36": "46V3C8cRM7mgbbCZWpPxxvpFhsUo45y5m6aE86NRxQRsHMrFVFk8o5xwR6w1NbpvcnVxQcy8wTQFz3ctjbxid5Ab"
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
