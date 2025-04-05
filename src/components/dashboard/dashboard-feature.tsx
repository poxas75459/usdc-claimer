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
    "4B7fFbqsnCG1nDiYAjJLfrFawaujg5KWBdtv8WxatXqDHNhMGKZubhggA16McNwJ3iq2Mp6AavFKVWrBTVMMfSi8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NAmspwxeProKqVTx22hRk6Jxo6pVnYeHgUxYp6FFU5sMULD9mR5MmeFmZYUEuCZuCebAozBNshyJzYHNGbqCNKW",
  "key1": "3CE3uw3KuSUobTTBy86y5Mv2TsUdg1L2c61MidLdWifyvhTNjXDc5hSUwBJFx28LDMAsrp9JmHzvmd9vuxaVPTNo",
  "key2": "4JC6eaq4ZXz2k8vm9BErPxGvToCTRYh7vaCgpRNNagNDhGDUaPt2eduyEetvP1jDto3ZRscBDne1u6KCywBRZHR7",
  "key3": "4QsmhvEGm1xF8Nv4P9ijZRmioRP8tzAMSCVqATF4nUt9td9zuXrRdrfrjyrzuqVs5zp675HGPeqaSPAGu8Ztn21Q",
  "key4": "567FMjH42yGV8A4ewwG6VZu4uLJqcSZqYPthQyToiSXKvzPDg9BerZWVgNYtzf23BMY9XLcCzKnsUtf8eDCHKzgc",
  "key5": "4GGQuqsHqCGd81VMBLwiGC1VqiDQTCvAmPAFa9x55QfA9UDVe9NEmEszJGGGV7otshv9uWQ9bvDTGBCXCd9Q3bDV",
  "key6": "3F4n7uM3amjQRudgZiy5kvCDokaDMVwAWzZCzvGym25ebpxvyy6b1SServ6JDkUGG3gH2f25oUTcg244FjAZv3ob",
  "key7": "mNGfTrezJmT8nkU53NfPLoTiTAQwkTUFoPSWBPvhYdtCKDeSBqvyrH8CFw7N5DRA87DA5Wr3Ts9X1ypjcv9NrnT",
  "key8": "2jyAWKHHMDhvexu52tTiEaNL3Y7RrvVbPiFewjsLqABKkdSos2ogNrkR4yCzRz3dDLmbDDcD6RYKAhzVJaeADMF7",
  "key9": "4VknE16jU5QHQDKCyboBSZL2MXu566mM1neHLJ6H7VXh8sXvRFboDXS4SDHUoUMZtC4EPp8DxNbeHEyrJ8yEAHpd",
  "key10": "Pw2p3CZTwQRnSqKcFGnw2ihVdsgBDouwuvqh51FeFzhNi3Z83JUDMsZosmWHr96Q7c71AwdyFLsfVrRRtAFJNF4",
  "key11": "54cQ8UZKuv3CWkfzUV6VuUCriR8m55iukV1cSpbHgbgSMy4CDNWQNRgGhLarsEUMskpnEn7R84V7ss3mhzt1Aqdm",
  "key12": "2Qk9ibfRcfvcQBsZYmCk28aq4tn3iWuiNfKqPC4vqKDPv51agULR3hkPxnMBVuBbjXJgTribNfqXWQtESiQ8CfzT",
  "key13": "2EMpECdrJ98mKzZ3EAphjxCGYxUsM4mLxCfDC9YvNkJPH8zC8pGYChx8Ys6VHkmC6ZRQq8x5QKJTdRQ2aYauYXKa",
  "key14": "4pGB6RuKNGTkH539CggogYxFYQ9MQFWbFjKvKmFd4hY835YmXr622HzsyzQLAJWLsuVo2gPFPGcZNDLj3ZDCZjSy",
  "key15": "2m684bcJhGfUr1sm55F5mt5aVPxzBCcLbtgiJkBMvf2Fd3vttoPVqANwmWhhzaYYk1KJ6zcujTtkivigLiyrXNnW",
  "key16": "2QQaY8otf2SMT29qu9ekPLy6X7DAT2Hq2i6aRG4LZ38zsG2q8HncvzSH2Xgz1PufHbjkHjdKN5D4mEYGrVzFDzg9",
  "key17": "24zB6KbMxY1cTA9BbvSWULVzUuU9EpRVY9cUtbQ8hMey48KNRwFHob2KwELL5NHXDnTfQdKfyPunQk9jLYGzWRq2",
  "key18": "4XZUwiKcNqiXxhvz8HsdjeFVFjAQbtK5TvxpwmLezFLyzdB8G44S7U8X9axCBXFMd6E4bgB8ZC8b9JogJYbpkc3J",
  "key19": "4ndKVYqgwv4Xqwao3ATkodJBkUoLTymMvfMYy9GWSkcCLXLrJQJJf4bH7W97wPXwZ7XrcG9YD1Sua1s7JE6TbLvc",
  "key20": "5fpcgXm3Y9Hj9FSkTPyk4HArFiLJm7GeBrppuEwsNZSUbrrNQe9Qws72r6XNMWPiHBK5qV2hcbGQciXiR9bspjVd",
  "key21": "3uqafLhUikAhmFbn8MigadvB9RM9YDnkZ3HNP4gtHG415Q9QLQcN3UJn2kouFguZ6eaPyMgMvPeaspi62485SSHa",
  "key22": "JLzWnt7AfEQq7Upe4K8zmpssHKNznuCFq7Ns4sC4GX5PccaQ3aMkJxSxCbNFVWsbGv7DTnLvxj9xxYU2baYaxHD",
  "key23": "3wwYnDtkVS9ZKzczmBCihuuJwEocUC1wp7uttscMY6KmwS4vguu2gQW2CDuQnC8PHTCX3rWztj4ctJRNSGhQXdBd",
  "key24": "3ctUcYfktyD94Q2f3xnieeownZNnPY8czXENxddrugjC6ncqzAnctbewUkPxC4gS4JNpd5hhkkfkfNWNG1HdXJxB",
  "key25": "3WBy19FLGNL7KG3h3HeA4MQpsRYeXBdT6e2JStHkfHvVKrxMesWeB83z1SGJWxZDiPeBkc6td237UATEztjawo7G",
  "key26": "kVyn3GY6EwYBHh4c3AQ48HrHa3Wd8JHXLgBxT5ncnb6DtSjGdeBK1MgcArMxG3QJvNwM1dbTMzsSDtwezQeQkrn",
  "key27": "3CUJYReCy9EuaAiVamwT9NShC5Zz9oSjAWtExKN4VYMdfhjkaWyZ9NZZSLLqzxmQLpw2QqzJEZcMqmet29pRFzEK",
  "key28": "3pqqEzfsmG8B116SdMNNwmPAB3AcfKToX4sRGr2dJNNVA9wzmG7WFzsYoq3PDLLW141tSGBgVbZUHz3kZtkUJeXa",
  "key29": "4cbYWCjkK7shjVArxDTp5Mg8Fknb1g5ugnFziqPKhJ9dcGDNoxaDXqhdGR7haATWv9X5Z7YwexRH4CTtM3Vt1RRg",
  "key30": "aAnrZrZg1cvgvFirLVCDK9vifYgVRkt9UeDnQqUBuZALJbASvKZXdqnsAv3cfdZqGLKySKLFZVj5xQkWeEUpTfp",
  "key31": "dzebPyQCmgfCrPp4EfXj59SFjHipzpNu3MqbqhRnwR5K2f4tuAoLZDDgXgaVFiTvgPuFwqcWCdXSGi41VCx7UYY",
  "key32": "4jNYBzLgRPQrdVL2smwbFsY4Bn5q2Sn2DeAuGwLNLTCP2qLgBeqgLfATud8oxtPHUtZr2TkFppVhVf9bNWbndj8d",
  "key33": "2HKnxWdogqsEBrzH9tTDVxj5t8QGomkEybeWSKZBkabpj1JVauQge8bqT1GdF7d5jY3PcxtiqnKUp3uUaD9fr7Tp",
  "key34": "2XGo9JTnf2uNHrfWF7o1jPr89JLbDwwobKL9wSLb3imKfMjKKYgAVgoGZJrjegcDVKZ1Gxdj2CimjP5DipQT78Pv",
  "key35": "4An48ygYAFdMT2HyvkyEZGv4WRRGrrAhxfBU5bsd9zA3AN5a8BQZMWGaTWeAKzf9KcSZmHaHdcKd8ijhbnRhqS1m",
  "key36": "2WUELRna18tvAymvBm38c6XXAhdwVtntC4g7bWBo6xDGh1sgWvWsN9dKpKZY1jEfynKgqbBwbnwLJ9R2ndcUGYLK",
  "key37": "45Xye8ik3TNSRxQ2YGpeqpdYGXu4VnzzcrrCzm5QKVkvRmgwfpz5VuywX2cpnWVBmQfyJZbi1xSm8ToAFRGyyYSc",
  "key38": "Xmoq5T5Ab2CiQVAkgYPwMViFDobCUS329mbipPqu4zvi6kpNmeM7GtuaowTLFupvgzge5DiJxTasjLXy1Ts2byF",
  "key39": "4QvHCSQUhbYQ7BXC6UwGSjneDCmvnWvfr74tUzr6rrtMjqoMJvWc39HYPek69qMb57QBbDzi2mmPgzSAMcedDfa6",
  "key40": "5HNTejXmZun9Ztsut9PWKdkpay9wvhAon1SWXqfUXrfQSxgo7qThN9JBG7gQnF6WzyQ3T8pAGZZsEacX9uzdDXBv",
  "key41": "2LFfSLkxJhE2LVuPSvDxXR7B1LV4GuucKHTfhwJGBs4kYvkcLLfhcuSFdUC1cjd882gwi7UMfxZy8DTZQcJcwBNc",
  "key42": "ci9fGpHJQXtCSTXwgxGTXMwJPwd7oAfs5bsjNzXJ9PaGVKoFaMS73Nn972JEQwX51ErYCoHDMyZzygyn46RaYCR"
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
