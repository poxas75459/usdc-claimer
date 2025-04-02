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
    "3tm1x2tyWFrvLR9TBStWZhbVzdZAvfMMJbzQtgbpqMKveA7DPKwT4DQ3FyFdnjjy56NiLZiq337YVtrAaBw3iuXC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TtW39BhqPiANMykDN89XPQEYcWSgx4RzzP1uFB7EdmtWGDiQzo9CnNyQSGQajrPy5J2rTJHaSKD5sPGw3CcL7T6",
  "key1": "5B4gXt6PQXqCkh19HFSksWJKXDo4i5bW2sJjCPWCfUDwpQngWa5Ad55awLUZTnyDVP8UGuVmAwspKpusqGKovBHM",
  "key2": "2UUHuYH8WgiAoKiEjaZZspetQG7aoJ4w29nqQ2vTVL7GYJpphaVppGCqAxbk6ZbkdMAnvSivA3XNmC3pPThEkd1Z",
  "key3": "29oEGFXbRgYC42DFGmjHqRWZLhFom7KjRLUAi4gLTDV6coRFEFtUsUvsmtYErGJoaqPBxEnNAFrEQsnXTW3XMctw",
  "key4": "4xp4hPJ4P7LKBqiqvsweBFpLVmkmiA65DGKp2rghpdPAsUW3MGzj6HEj5toFa68c9wvKcxZXSPifYAU2FDtdjsMF",
  "key5": "2axqkfDvtx4aFaE7Y9Wu67BFxmDDaYuDAW58b5fSWzf9PgM6EssQ1qHs1jCcWykbTrEf8rysQHvnQVu1RdPhMdXM",
  "key6": "3JYmRsXE8CmABn3TLCK3MxSW6mNDkaEeAYweSNjcA7N3KirJiutcn2D1QXvivLDfYBGgNhGHqgkMUr5VwWpMX6j1",
  "key7": "24E3MWrZyTHk8kDHa1nLSkMjD5KJeb2guPSQuhq3YBvML5wtbqJ2EJc5Dao8jGmW89huPyhmsENyK8QZjQCqzYXo",
  "key8": "36k5ph6bwRzxJPNLwCaeKWif9NUyQ2ir1nDkbwdSnipz5opRpfWfEgJvEgY7Y4PpumfSDb4Sw25fXdZmdxwVBpJe",
  "key9": "5BdXBcAhoSJvuBS4cBtpkEmZj2h3RcCdxX9EC5m2nzVHGMY2WWSxBiZRtKazS4AxR8MnY9nimAT6LQ3jz1GJiFq8",
  "key10": "FCU5V7hkj3Afh6sRBefR3sLZepNrcoUreRNuV2GscrBJk2esZK73prwdjpbHJ32kNwGc8yqtA13Zz5xt1y4f7wK",
  "key11": "2GsdTusePZpkKUc8oks1oQZg4MBRyv6cZbTKjJxVL9GXqDgEG9RX1Qwq1QfPsVrQpwtr8WSVk2XDoiD8qucegzPs",
  "key12": "fkPamnw3f5Wa5taVvmPcToguuJGeQrKHxVncTgJrho6hEDXzPFvqmhq65B7KxEMrY3u8hHqqNN2ew7HLMYyEWdq",
  "key13": "4z5o78d9WisXU5PH8oBVq1rgReZUELEhML6DXenVarQA2X8zpXwHu5amTnZU1Z8q78VTWCqWQmiERsmc2q8E4usA",
  "key14": "3Uj6avsTYHfuhCeL8Yj96tHsSktLwpdcYko8j2GM2V9o3JeBGJxXT44DaXQdLVMs4vFXR17niW8Ls9AwiFYiT1SD",
  "key15": "4TkmFuS1CohC6xQRHbwXjrWLv7xsSWCyyp4QysSrTzmPq4iCJ1nQhtmJr3fGKBfbMBebvFMvZ9kBSXqG2Wq7nRbQ",
  "key16": "3KryT5bxeZp4kTF9vUVH4LXQBdTFH17jKwtNt8dznemN9betiPJohNzFhhfHrSoL8LvVFqLdSyeJYwmDpS8BKoP6",
  "key17": "22U32qGp9H3ytUScne2Y66xur83ARSp3G6atsokzRbVTNNMmeTiA6kjxP538aWbanqjTi4zFJB9Qh2Z1ohadxNje",
  "key18": "2AvrufGVVqh92rmtpQ69uW477YY61eEHE8vUyaxqqP1siNHN2K2BvL6Z8usX2aH5652kYqp6d3XRpFAAvU7oDFxv",
  "key19": "4SZzgJoVQ33VBMLescTBpiMo8RDQDTHdYDtkQJku932cHkxPS6bhkJyFkzJDgq4LodrR8WEUfjymjChGKVJ8ctKQ",
  "key20": "4agkAfr2tn23ayxYEAUFKM4v8Fs2fctGYPrWoFi5ibsqArQkMeQNd1suwA7GjPC48yhXDHLgpkxwyGFMZCTx3LDS",
  "key21": "3ywom8C2GH7NQ5avenP8LRdoa72QbuqiHLGLd1TfkpxVmBxkRxXEKLPcPTc64Tiy3urk3bmD8QS4DsawXoPdZmwv",
  "key22": "id6GqtqyKEucpVh339nuquEqkMQNvQAy3qCdZRCSqbcwynEe9a9HR3eK5AzM8nDfFfbvRMjkJhvcUJxV4Vpf56V",
  "key23": "4esh3wCYPAjU7BJZMznk3czPPz4jSLJ4t9636QCorsHD51g8WmRRWcaaaVCZMtmCkMMX4JdVz5UyRaAJGvPgN6nK",
  "key24": "3FvFdrED1VjAv4m8YHodPoWeaNitNU2kBwzGr2VmCZZiamAsNWKDVCwqbRGTZFdJumFdbkCiMW3EU6soaUgRR2Ni",
  "key25": "55Vm2SjsctPTm3nrhxqPPYqnvngUeGFUJTaon3wjrJnTgFbtxWxUHA8odBSPL5gMCVRCzZ3VKGHzA4827FHNgj9C",
  "key26": "52astJ43erQMeTRBaBfGx8kjCtXMUXUsjMN6GPPzyA5fGahFtBaLcsqZGGri83fpq6ai5T6QNTTpjKDQ3iBoxsvg",
  "key27": "2pVydoMszkcKqcg4L2ewoM4Diz5oUa8BP8PcaQWNqJpCZhGycK7hqmtxiso4KZNxH7EVU8gMBPZmgMrhVYEXxXVK",
  "key28": "5hPNndpEDP8GQMexj3TvtWmVaSfJUZxb48ukSPnzNyFAdi45gykqoCV7Lh449jh8LjC7JWZ4x3HNpttrqTkcfvoS",
  "key29": "3Cigkpez8dPE3aFPFmMw1kdFB9Ljxq91RPVWeB8HERX8fu8rLnHu1FCz4oNvYSa6CgABbtgy5CYxmJhM8ozaiWoC",
  "key30": "3dg7PvjpY7htLwssqTzAAaW5hubNBYcgC8GGcGssENHWLKng1QTbeH6pWyNVa5TJtYGz2nNKr72CnipTSxnmkxzM",
  "key31": "5giqgu2skaCYrVzKXx1EpXVKhgQzNxRV3jkRqQr8DHpzfJEV8Nm67L8m33u6oaMDbTWrRdRDQXmDnompvn4er8Yn",
  "key32": "2NhBuTxbb4Fa5M3M7vfnJZMYRpXM7PJASoECCGi7PU4pmvP8bDd12oQN9yUbW6hKgb4BX6MG1AxFM7uubSRpHCWH",
  "key33": "46fqcjHEQ1Y6stH5Miubg3qnWMuPeWMJWR8oA4qkggcNDeT6kttZpDUvSkML6fk8kbNma8VQkP1y88aBLTzvhX1w"
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
