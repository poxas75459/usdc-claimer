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
    "4dQKRqV5Ekz2UYBNWcKwcoVRQJutm54PCze4thiDDbHPs6LoKQn9H1qdx5wgXGRENoc7FCEawCGzDmzJWHnoaEXF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qHe2h6iRmsKZLeGdizKb3NBzVEPbe3W1j1rbS129C9NzzD18xQD6s15XskFVMDtK7T5vs5tLX3Upm9dYk2GW8bh",
  "key1": "2try1ZZDE7f1KkQNeAcW1xnKaCt5aWLTL4LFueotCn6S9U1vqysS77hBs84VPYLmoq8fwm6yXEkQNKkuMmdBvbuY",
  "key2": "2jA21eJKyGWc5J9nDeu6Yoensk2z1fdYeEcUqU9iTJfdHUQpp4rQpNLsvyHLxAhfjNEPRGhxX4Lehk2J4KurLNGR",
  "key3": "zsKbVhTPHvojNswsG5bgSozdEJdouVvNFYnsDFCAH5zQWTWdB2w69aq6SrTAbHVyh3MabjZ9jpnen26NC5g2Qd8",
  "key4": "ZJiffsUxZcpm33cdJJMFEHryEMfDvToi29W3TKbQGkFu4cwgtTQGvPsYSx9Ld2pPXuM5LQfCjXap3c7pdvKv9xC",
  "key5": "4Z7keKmqfUmfRYeAhQK6CCxsLnynAnxcfRxtJ6UbhQKHVDHasYFUVaCRhYvLiDz3Wr35VvvqvHsGQRkea3JiXgrM",
  "key6": "5tRWCyqgPNnmiKyqTZtqHFHMfFnRck5mCtU4TWWuaTeWXKKmJaY1f42Yd6aWu5Pw7yzp8ruJNm3RPAAfvzwVTtfX",
  "key7": "mkMcuDwnqxzHtuvhxTU1S63QPmic39MF5TmUKYGTpK4r9gJ6wSRhFRj4yuYsABQ2X3yRwnsmcAaZ2xXKDoaP4ro",
  "key8": "5BWxUmg1aQWnTs2HhxaP8XzoHNatUQFZRvgNvGmjMXaFfNmoGVkdJc4Sqtm78fmM5qKSkPCCDfbD8SN7gou1Zn5G",
  "key9": "5fQMM8tnaB27ZutzrT7J4GyDY5UBrU7F6sbM3FWwzjpK3fkRHiMcesHcw6yPsTdzpjYa5QyFRFHXR3phLbnDgpbF",
  "key10": "25i2bw8tdWWH7KST953DT1qVJ6rGQrjBYy6egvKpkNsiKDZhUX9whYeeS22orohLFzLXAQG2c47gDMztnRyBRgke",
  "key11": "5V8gnexnw5CN6uiqxQGaWMC7mX8qdMoVjTYp2kpDxvLQ3xWXpP3UAUN5DiaWKRvwq4qaQpecL4Cn6JKv2Fv6WdmH",
  "key12": "5FSdgGJT8mq43GeMsRiJa5vTL3Jeus8SHYkRy1PoP1g15YAqo4Eh446ZdfCbRAZN3dY7Sw3j1raVH3KWN4pARf1x",
  "key13": "3qQmCLWLbiuXewLvaXbZw9kE5bFz9MSUwqWfn1VR8VcdNnd5hvWJxMbhKX85K1731YGFM27s6oyXeEABJbJXTqJD",
  "key14": "yUZKf8PrPgp48D29DUmhGPbrDvE7VNbzAfCaijWsh4XG6969WjSHtFtHUViYQRsybWiPzijnjEmZBjxXKNUQz3b",
  "key15": "5c4Y4PTcNNM6zzbAM8HXHPZVH2ezcSj3YC3J4gt45RBusV6EW9h44M9qNMPg62u6TrCBuxhpizdQ7TVBsR4EErkJ",
  "key16": "4vvxpruNYRvaM3xMXT6nWLCSdnWh32WyMSsUEEYKSTTZreAD6VD7QVmAbrzWAqiMmFoPhhK8MLQAwxoRWqZKkuoG",
  "key17": "4RDHwiTZDUEcHJWnNwqM2yWSMsyVYAKPjQp1L6gCKJRE761jdm5wa7u6PnHPbMJU9vEdYiAvHQvSf1GhkGjX2JZ7",
  "key18": "45szMssG6ctsWxq38Qkk9jykVvpnU4bPYF575PXUV8uoVEeNwfRHUgghuF9rJqzYNFeECJeTshXGA6xbkyCcnufd",
  "key19": "4HBLLUEpWLyPxfDBzxVHRN59CypALHaeFmAucke4urBGR3mQD3oHv2ppMUB2M1zNLgzfz2JgtqbEmyN8MerVJ7RF",
  "key20": "4Gk4vyhRCMEjVoyZGNxdLBPaJgEywVpvfK2JUVjJJT55kWztpVFSsUUU3WxAMB7xEWHKnRfJVpofB882YRf1pBdJ",
  "key21": "3C6nH429VECH7oL11yrutzBFXQPAcfxzcnucXhqQ7AVGvTdgpF2SYw7GGc48A3chCbLNPhnZWG2DSgg2LLQbDga1",
  "key22": "5bxtohyeomQCUXvxpd6mjwfG65RiV1YRyA5qDHcTwMrxzXCPpT8crk3ifdBbZdHt9goHFGuDTGSEZR5vzC47NDod",
  "key23": "2wgbAN7pW3r5ZkQWjCUDpKX5Hmuj4BXKWBu2UfUhi2vDK8hfnXJNdbNES83nTu56K5PweKfdPyYFwEgfr7p8nWmq",
  "key24": "pJQTYqgByoBhBRZhXbeo8WMRedVNV3FCpxBNXhWwPvBGUiZW8mhsuPFNiKDFV5EvGykXqSo9heTSTfNBGuF68s6",
  "key25": "27RLEK1QfYJAkET5P7Cf9A1pd9mFRdf4gRkiuqxTGQ3ey3xnPf1u6upTRycZ5UhpKVWJyc7mcqPhh1PXXC2QykDY",
  "key26": "2LyS3GowZQ9N1xesqKqPmB7e52Hg8CgN8eJDCecyuLBFLUraAhAnGqCS1SZ1f8NeNda8GbbY42JNwHes8BwmGwXU",
  "key27": "3S7QLAzwqCibiqPqqp1ut2gYHL4QChbx9LsjxoFbouAsKLZUe4KoQP1ePJH4YZRf3UYVQgnnmHs8mQbF9GtbnS26",
  "key28": "jCmjYABkAM2pRoegqAxiZhSDc2RiB1qrYoiVoqqZh8CmmfpGoeEpuZFe8SDGdjQBsVh1YyeCZj6HT8fLvbFmZKx",
  "key29": "2jE91BZ7G8Jp1xi3XwMA9xobkYAVtvyoB3ia3ZCkfDkELMuooK5zVYCk7Q814gTqxophdsvf1hk9556F4ZPPAJbB",
  "key30": "2pe97SPrfzZf8m8q11XFZgxjxHuScBN2bsPoVUANBAtFbzZma2xwBg48fbjUnLZp8eKHKoq8NEKRQJjuHmeXxEf7",
  "key31": "4hnTyzhsLAbNq7x7ACpWn4T5oZQu343sXBoNR1sUZPRbKxxa3g2fGAv8T7JWLZA6cE82Xg6kTYr3SZWGm4RujPAB",
  "key32": "4gySckDroigfjJiEjd4fU7RX83onTZ7rnu3UzE45FLMpM3tXcpGXgPsfHCkkVsSKJ9QRkDUqpnqmkFMnCrBEc471",
  "key33": "39UWMErJggfSc6rxTMm6hQ5f66LUYPFRBet9rEdHHusXoBNgUk9AavVTGzWKLBfhdFwiGXjDSsL7RvwYhuqhKHjf",
  "key34": "5PKdxKPyr2wqwu8bPjPNBkmWKfYMXxgQGfE1Uu5etc2LzN8X5aDeqb4jFZ3KGnBk5StpDpMQoyawys6WYA9KcFNe",
  "key35": "2CZkCkj7GQYHWLxDWzW9AXXQgqc4Jaxmj4drX8SZM8cuxas4zF6MtWsheCnzTk19RgZHKaYJi2VtS6J8hinFg2fk",
  "key36": "wKefiRMAfuWjWzWreTBAMQR8UDW89c9CNwVcvii4cjPb91MQ5mds6iNLb7mbtfp4LikCS4jyBvns6gCA6Diccjm",
  "key37": "fkDJjUgEDjzCX5R9X46SMLJSgMRjjzen5bGTegDSdSPcWUgd2sbLkbWZFSwV6KvomMb1sxudWbqLkqSH4ofoH6E",
  "key38": "3JRYVAMwXTW7vhyajf1kshz9LwqmmJTtBCf1y4t61MQrg7bkeJMLju3YRbDnGvipsJhoYYtwpMGP4C9Y7SaLDXW5",
  "key39": "5gNtAn2j2CtDT4SogaSEKsbyXpXgAQVpNugEhi5F6TqSvUq97bn9cJdbtjh4sYSt2qMGvpDdn5B45EENc54kif4m",
  "key40": "3trgDakWfEgtwPisqNQzJtKiMoNFMJSSsKjbAnuSB4zUw9FkaWkeFGcvESDv6Fi3AU2xaGLN49ercMgApt7BfFdE",
  "key41": "2qi8tKcC8tpfT2uQjJPFejSG6tB6RMD6C6ipriiA1tyCGbc3MtM42fvRZEfr3xychHxMkUiQpiKMVfmDCkHm6g2v",
  "key42": "4cnBS4VPj5FGnp7wVPbUUN1Rs1LSCHxuViEyr1j6BRgobZLxMiry4Kdfrhhga7LvpyW7vDWdVCqNimTzvbMrDS2j",
  "key43": "4fZ9CaUkCanzjZURjWRmenZVdV6kAPjRJy94bJ4xS28rw1fM9ndNpNYJHffgM9SpfuWWcHprBr45cfnXMx7FC8uk",
  "key44": "63Tfh3VHbbTGnYFoynfjHmVjbgonEBq7mNZKpCTf6ueo2gSNEEvveemNtB3GPWQc2dJp6MpjQ57hxHbKtGBfBqik",
  "key45": "5fPfF6e68iizbB9wifY3kYan2aRhTA3A6xzCk7jbHTubCn6AUR9e7pWtXvZD6t7ymLY1TM3y3yR3LRx9NnsgYY2m",
  "key46": "52tXTta1nm5xcjaPQr6ab4QbzbtWrDsx8MZtqcJquSRS23CskYk7p8RwZiMVtiCWi3YWuh33UKT7SXamjz31Ltzm"
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
