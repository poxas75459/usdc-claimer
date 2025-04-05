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
    "5LZhDP2tqyLUuFzf6dtaP9X5PkeYfXtbakgAarKQVXgQd82JfueqoN1cxtDgQioQP8ooTapcuPdsETPbnKJ8dTDM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LdEU13UYKBGvGgG2aacSwymTmihzmgWbEMQiaAeTqUqgjvt9z2HdADagiBuB66RMjeuhCRmrGzCZZ9obEcpauRT",
  "key1": "5ojvcD2rE4MnLaPV1X3sKe7nCsZzvbX2N3Nh2gmgKC4MDdJGJofx7mknixSM2tbAFHGt81xoVXsT5Es8trSs6jeU",
  "key2": "4Ev7n1gBgWWBrdrZwZGqwpEi3fZh6A2R4e2Tfe62CFFkwpgMT6dE45Dn5SZ7cBx1xYkjhXiPeVJAZvhUXtfiV3Yt",
  "key3": "3h2DJKokDhfdy8og1iTm84FbW1Uj1r9F9jBQkEd5QmuGhcdtm8JW25R4WSZYi94DtDM9maFKUhKTtbDa14L52Gi5",
  "key4": "2iPoa3RiRfJfQ2ixDEehYiZ5ZvsGcPU7wBfrXLkfVD8pzJ7QC3hgcfJyV8W4DF7NUP2NsKobmddPf69o6door9qE",
  "key5": "3DE1kHvbujXe2ypANbWfXwQTpAmCFLVVb8cxWLhRM3p7t1takFNV2UmBPr8ZYrZYuYmGtNbCa6CBZ19nxYsSGRtT",
  "key6": "5e5EhkwgpYpPYxXXgJ5DA6Mq8Xdp5APWqwZZwoCaXFjazaPEzafjaqfZ5dhg1QccXJgMqqkbNm5EBsXSjQmKamX6",
  "key7": "3TpriihRyXCThGYzfkxrijWWkuJyh78CcqXNvnmyqxUgCUg6nfdXDtMiqCn7adEo3oX7FkQKRNjzw9HKQaos3uAN",
  "key8": "Hn8uG4vQkpZhYEfGPMqH2mqjKDCLMWMmxcccdumTCr1y4QcVZj9aibuzR1PvQkyyP26SoMs6JVHxC8fxM5nZi65",
  "key9": "5vbFPyxf36bLNtFaanYe1P8BFkbXNf1T2FeZV5i254hAQ8iUB758hupr2kNyLFp18huYsUmvSn4Bp4eT5cQ94nDZ",
  "key10": "5YhxDmL6dYzKkvyCjLGqLuXa586qFD7QvnF7kEZkmaHYNCJR7EK8P8T1Bn9iFZg6DWBUQBZ7ky4y6MphszAiQ1AU",
  "key11": "5xeZsXRuevfE9WcSxc2eyYsWgo9NcY6nr2cpV44hvefa1BLuy8nyPqadbVCaFz3uiNc6kp6pMLK2wqyuG4VRVLAG",
  "key12": "3sxGHEbqhH5h9rv3fGmBaKB1AgVxFEewAUe7g8DpQpkKtFWA7vwA2a7haRswT4GkH5V9q1ygz2qvzo8aESti7eJq",
  "key13": "5Tidz5Z6uCoV8NFUA66b628eVZS6WbBYTqafXk8jE24cUncpPbuG8yvNH3KosZ33vRmfsHkq36kriXf5nEwyhCMA",
  "key14": "3q3Kc4VsCRjNNfh8mgtvZ71wogLVBtWTHeRnbPvjQ2rF1ghznyzUYW52ZRUDCQmcXKBg4MaWBHukwbk7o1Hx8bfj",
  "key15": "o65cMhH2e8RUn97JE2Yt8c6PgtmA4aBgQ7Ck2CT3Xiw8cRX9oajycqutzVh5JVBKZQYMjqYq76UuabrZ9y9KmKS",
  "key16": "3fpDZqo6QdQn32AgqzVizWhALMW2mwQefTnft1tFEEQR5yBCLDdCsPW3gPKLVrAC35onXysesYF3fFhABZZHP3hB",
  "key17": "4Cuhr8kMK5L9jH78Pdd4FiaMesB4KrFDJKUdtY3W7Vok7t5VigPPYipauAVyDb8wLktUBhfRVDDYRMZS1dXQ3ESQ",
  "key18": "4cdwu77o6EJaU6ffuojaj8qffNH865G8EnELmdpo2sjMR8KYcSMcQpnNYxSv4kohcKeQkNNL3tckjVEK95qoTbjJ",
  "key19": "2P5gU9URxy9s8nhPCbT53nCtEsizZxrGzmn7BEH7QQD5PXwkR1Nvft3TBYvextMYYhhmvnCni78xzP1b8fymoC1q",
  "key20": "pqULuhamZMz3q29uTAMX21LEaRio9LEZym2PvD7JZUycwgUYKVC7rwsZZQs8qAmL9f8fkqgc5NeVYbBW81G6Md4",
  "key21": "HMo2UCeyWerD2jKMcijjNm9tFxoo6EHX712MeuSiCmz1sMNyBnqtg2zbhY3WQu2u2D8rLTdFjjzKZEL1EnbSLz1",
  "key22": "2zLH4Zq8vR3k97VocMbz8y9y8uzrHTVCRCm7tEGAjkyY8MUS1kmzBSqmtUzE4CezfKs7vvbN9GBCC3taK7W9jfJ6",
  "key23": "5dFnht4MS1pny9HDqBY7QHECkvb3XsvA5KFNCk6nW39s8ECSV2hDWjWyDxfFa2QqCseRXfrBvLCgxvaFUTqNREFn",
  "key24": "5gCcRX8ZGuo5Qr2YrxHLeYgvcqSwt9Ui7yMs49t8NpNavDtyzgPsQGV6XavBXD3YX8WnXwfF4CmPewqxN6wejoAq",
  "key25": "5mFTvaeE6NyNj75HBJCejg7J48CHmYqsRiZQp8sPYx4GAotH1Rg6ZBYSywLfmHWi7trRtYyUMizvcjMCHjhrwVo5",
  "key26": "4Y7TgTFM3zWde2k3ATCvGnhQmAtVAM5JYmncXaCyNkLsK2WMAWvAMo9ZryF5Eyb9c72jAYDMoGjfyEG9oiSSggC3",
  "key27": "2bvoDgsrkz2PGb5Nj48qkegXhZgJHK9snwgkzSgJLtTrftq8ts23teFxEAFUxUPU1gwZBvUrdznpdJPncgojb8CV",
  "key28": "3dpD9YcapHt7Jbj4cScxn3Ypm7yi874HxCKbCiW6SF4tWtLEGKP9pehWYpoJeFpwroRExZQTakFC9czLsukbtRPa",
  "key29": "jsZb9gagCXNpjZFt813dbbHBacVBeb3AE5bG1ueRJNnTHCUkuSDSpGnMcHripGXo8WMAWVCpBubvsbDXsQq2Gba",
  "key30": "5D9MkbH5TsrxHJ6dzMUxabSK8PVt3LQbuexnyEtas71gkpX1MwFpVRLxy5bhp1rztLnpAXRkQbXEuix8tc3xwEJr",
  "key31": "kxdHdyePsY8fTS1M4eLbMDG4tqU6MFMeiFASPGp9VzbT9QQDSjaY2ytFRpAU8u2BFydQmU5WuzmHAFWMYEUEzwJ",
  "key32": "2njZp7P2VfSRWkBvSKpEJKKijbSDkwVN9zD2CW2CZiYCmJzEc2MqDQQ9wTmrS2A6nAqoFxb4uEbMvswaqVUQDUgR",
  "key33": "5t9mZCufLV9Zs3cJ6svf7oW34WjeFqUKcNiLDY2ny3Ny6k5hpoRx5CicVnRbqZQX9FSGmq6wneurhap2CiuZjL2",
  "key34": "4QtHq9zcz65arYxTu9Yaxr51dBJ5hpjbJEFretqcijMv5GhzEgjEZmZRQDgviHERbsw9qg4qodg8xNzW7yFjYues",
  "key35": "5WwLCZPkCYAsHjdJipRkmpSScbXKKJvmrFS6jKtV3KPrLw6E7E48pLsxaQQyWqwMWUSGUDk6L4xtyYfricfyL8U8",
  "key36": "4bss3EWbhq9QnAnKtshtnNWhuRQ3okLaJpH6zL4WfUmkoAJ4nAJbqNTkdSijE2uVozgUuesEaxKc8yRKVMgm6KAG",
  "key37": "3TeBdUV6jnD9t9u5EcCzY2EwSLqmANdH5QXuVf4aFEKZMKNEHjhYzBZZsrxyMda3UMNaGoQVsxNuKHaVaqFFvgB3",
  "key38": "5AqpABzYsjrpWoyAcquoqJTj2DxPJNubwrbRXUzWfFus3KfMXuVSjYTMww1ACFT4yijxbAQJNqQpkzBuAkNHXXmg",
  "key39": "2sNZBmtfAv5RKVUbm2gEqpzTn14xdeacSn3ox3avWw6N5qjBzjH12GD3jG4kzzR6QUbs6s1wdBX83qhp8na4SkxK",
  "key40": "5XZ7cBPZ2KNMsnHBcGEJpfhYdwVwv7W4kNS1b6xpFUCxM9Hsp7cpa39JPPfsY9yAAG48iNppAfwqPRig9UuSX5Kj",
  "key41": "4ccquh3WjhyyfLWxmA5azUd88HwaV1chdv6QghTYT3jKRBE8PPU6haUbdGLkNm2AdHmf2XEcVCj2vdVNucpDXg4b",
  "key42": "4Kwp7H8762VFto1NJhGwUhHMCy87NZ3WGyvnvUegD9xhKRMaKWpf6M1bfozXmtTK4kNDWi933N8wb17UpHz61Pr3"
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
