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
    "2H3ez5L8mr44ptoGXQUyAcMEVK4G7VnGQETWyuXXurNfoUyiREMythNoF8qByVLFD9N9n81kkUzQkFpLGdBQTC2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "48kBmXbCh5VVNvVdzBbea1xZmY8n12KERTJFDia66UqnwwTcBKsgFSxwU7r67BChWzreTynWCaYjh2FwLCg1KW4z",
  "key1": "48NPsHF1AkKnnu7LCz7gZSoee6c1JWNSS6Tv8R4wi84M8aCyFA2UpaPuaFLobuETfLAZWBew4TwBxdDo6HFdYXQP",
  "key2": "3s4aq9Zdvc87joqSM22TCEKZ7rwe4YbU1FdoAsHow8Fahex4WBWyiF84Pav5ocqGDLms2dgVyixoSL27ZLbpJ6wa",
  "key3": "3syvYR6qSt3pgBYUPaTDxSyDifs3hggfUz3gADZCviYdRV2c9VBDJXp9Xc5iXbrfjYbBeJcik13dz4snziGHxp7P",
  "key4": "23q1AxS38rfDFmiGR8hxss2QXwAhZWDfZwabyhELAPVn1JzTpiMLPoyWc5ZWY4xYeiqeGDtKpxF6zdJ9MDvVGizC",
  "key5": "2KBAPoX2cNHTkrzWdV7k8PH2PzeFb4ohKhAauQaQxhSP9jb4rLLbFEeFsREtMmrTdzQmaVKTx5bND6UoV7TRmZ7C",
  "key6": "5MDJYLbr8Bdveu1ZkCWvWjrjtdFcXCEsF7nefF9fmuEcwELL4vMfdR5gaGuSCUMsrvQ7v1uKaL2LbwHQ8p3GpGhf",
  "key7": "2vrL8cghPEjMGGVUhBiiBNhRj9kzaHFEV9NFV9rj1vW8Zwe6AoSdv9XkXBQ8VxZaiEgitiNhHvfVmvj8widqe4zZ",
  "key8": "YsKzmVLZMJ7rdJ9a1e8fKMhzNsBh4Fm4rnHiMjvzTa1VMdYijpCqPoLsKVAmQ9rKwjJBEmTFrwWZDYxQKQ1wBJs",
  "key9": "CFar8aBf2V9y9Urdo4BpwmmuM3bSXGJpx2rMcTzpWucs8BCncgks1SgWGHYjg5beaPZBNxUVPEB8KN8EYB4Cf9X",
  "key10": "3BEWtXJQRY1y3LBdvwNizxjC32wQrCviKoo8yV4nVGXfmWTGNW7Aqcw1H2aHkvt17tm5Vepwy4Z4gGS1JQn2ebMQ",
  "key11": "5K19ay4PZDmbiJkyzXCPxHiFhFpQkmJK2aH93LSY1KsD93tpzm24LPyd161fiVmmoKFAUYadhoJxnajqFAsJVAux",
  "key12": "3K5nMvVVUspn7ss76Ty3HxHwHHvqewWXVkY1QYwBzf6S7uPVrnGSuLpwp4DkJ8yCQNqxQJjVHu1pQi8jd7CuruDD",
  "key13": "23AxgryqeAPYUq94G5qqXSS3Atj4rmzHRxG9AwBFweF9GXHJkqzf5Dfad91EtPeK4qHNS1sazpgwWWL7jvF55eNE",
  "key14": "3umczvh5cC1UPPpgxeB5Eqhee2D6UabdWzQhSU6AptZRRvjJe9SBHxShz4kmjVyzrpVdhVLJBxh6u2Hxrrsh7BRX",
  "key15": "2LjSnKvYutRq2kJehr979tbncyZigbFMo3SS3r7Yzy6fdUviiB67Rmfk8hSrhra3TgTAuKNqi2a6jTQ2EXC3fzgN",
  "key16": "np2JEEe86Wr7y3u4qB25Rp1Ym1J5TpGRVpLPUFRmscsvFFXfydEcephgbyUHj2ZpDZ5Ruacm5C54auBeTVnAiUg",
  "key17": "bWojnUTQ9cNZLQKuevG91V7a4QWYPhWzjMA3s8pBvoL8X427NRYNNDGLMesapFDUZCg2YTyzMMdtp2S3ykC4CGE",
  "key18": "TKuyVee54TA2jxLXYcbvwYcE7wzUMY5ENyHCLdeMYPewRqkwZfkT9voC1acoS39wWfXPjsF4wrGjyqAcubj9s2H",
  "key19": "3n38JT1vQHR7f6ctM1efYTFQKDi9b7jAANwt7UxmLrnUXEC3Ckd7PSNo4JXwW9W3c7fyEkrHAQE59jg4hzNe8tb7",
  "key20": "24ekrQiLKe9o2FSzuyp7qneJ5dCAUjq1wXhXjjwRuk25nFMwUTQJoAsYoNsQR49hbRujqqPczQDTFQWtZcVjxc7Q",
  "key21": "3Awvx6UNhqB7UbuNXUkNoQWbniUNdHzqtydYAk3TrwG1Vf6Vmx8DbYQts15bSfkp4M41PA57fAvuG7AkiLbJACAV",
  "key22": "wgbhfYvtQaun4oThwqhQrTABpz63QzoTL9nzouwVjB4i2bsurDZAZogGGTTJzna9fMwVG5oKfe9Z5bQcgK14oE7",
  "key23": "4UfaCFSYmXdyRrxdcTJw2ZoXSue6Tr4nS3BtSKoBgWu44kYkRWT4u2eynRYXQZ4sFjPFL4CmC2KaUtpU4AhfUvP7",
  "key24": "4vZf4YryEySH4BTQWHB6gPxMtTr7xpTPQZcKeYBJZTJs3EHfx7WVgtxWoQ49DuJM26YQoZ3FrwHLgqG9gnKJKrXW",
  "key25": "gB6XZf371Jkq8kWSunimKEeyvEygM2qfd4cNPem4sfiPyZLMQBH9sCML7gaRaLPsiXZkhuaPLzbrSciXjrHj2mN",
  "key26": "2FtBNzRshi3QBehJ5wW9cTAuUGesqmJr7PoiY8RJNGoKhS9dAZu265vLpsao4X9WHdgXfjtjtaGAkCYvfSSdc9VK",
  "key27": "2NmBYaxJZZGx9Qbba7wuHQQ723SApz8eZgdpuC7uRY8YG4j8sxV8iNi8LLD6EWgWUyCaJ6aG1mWyVcWWifSAGQff",
  "key28": "2bkoQMSuWJ8Q1cRTU2AYhfQvPJZMqCSFL3yLzK63Ev8aFazmhXwmxeUFFPCFyw8AX3jJ1yv6u4j78pmaz24VHzWs",
  "key29": "4GrcFywMDXV1ft9GhHC3jaCTTbNihU1JVpvrrBz4121hwXYdSmub9uE2rGejbw1UdwCdYtTepde45PxpACA1nhXh",
  "key30": "2nhrzyHaukA5n4122CYVz4d1ZadygKtqxxBS4syozhUr7L8kdz3YAAYTrEGsoNCurg7NrxVyKVr1jFsHBmcNiSAF",
  "key31": "4tXiZFXu8Jk74zLRq5CavSjaUaJaowafx7VzfdkMqykBRvvgWpmadW4Hf2ktdKwkeUw2Pf2NFDppNmr6ZpwQXUZ6",
  "key32": "3HbHy9JuD4PGnoLRC2VLVUp9StBC9vL6A6ANdY84w7yihd75NfySkuoCS5jmjFkH66HCc1vKozB71jR3ziKUSdfS",
  "key33": "45ofy9VZVN5EpW8SEucUc1JtBpUnG6wECVKN1j6xJF3rfxJ1VS1dDP6QmaD4hdvfifWK9Ebj5BDkRPjZJQpTKPbW",
  "key34": "5CKLzWfK6rNwuXNeEHP6HmPvEbYcqz8PujJmr9jEBEfaBXo4sw3f1DDNPe8jZnxvJzCUkuCpNprbaX4YNdpi3m6o",
  "key35": "3uwLXtb5Nt6YAVo1G2EoWTSF8VoeMp9X8NG6dipEPo9BgPkW59mfG15phZnkxUQLnmupeFnjTit4ubwSZ6WzC3Q2",
  "key36": "5hd7Dgoutj83RcKuz1Cv7sRNH3KhHQsHivzbE7iqkSBRJV2zgEnhfvSkrc5ztPGi1jwWtjb1Aiqj476YDoD9TGwP",
  "key37": "mUzrRyZLycC1DsftQ88aY49nUZZnpF7fv1G7t1TMxbp1wqzBxn6NiWZTJXsu6NdUysS5xGepta4TmiisbAmBLmy",
  "key38": "CrFzywYEeJkwAKNukVihj4dU67FzrW7V9ASt8ZsHx7z5TTx1dusdC8Nmyby1Art1QvYpL4pAstjDNW3mm25Thin",
  "key39": "4jb8Rewcw7HzreiBtg7DohpScNJqLebMFHDB9YcTzugpauaekbbrCVvYU8tknKuEr3q3pvgknyXVH67iPUdR7E3e",
  "key40": "5D4pH5uaumdMWUdQEQxc6g3rGLn7c6UJtotztZu2h9YGBZjmJbieAGZhDjrwCgkpsPShV51XuxY8fZd2734rPRRg"
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
