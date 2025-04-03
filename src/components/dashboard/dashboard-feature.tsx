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
    "5i3rdGaBSULVuifvjRz4RZoozyVNZhABRbe1TSxoLTywcuZrqyEu2ZeGJfC5oix2AgCvqC7JfLUBdUR6NzSM8Tq4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bzke3foaEVrBJZ7RJKhKmgpUnFV3ABDs328C3Bs6ChTBbEWeVewF53N1vAmSrLqaac2Fto7caK3foZ5gHSKknQR",
  "key1": "2eYcGmph2AkB9wEDD6XFQNRJnzcEWJ7MZrddRTxicoRr65tgaP3WBc5HRC67Abj7YzvikJ88t15Fi9nw5ko8sBGw",
  "key2": "6GixWbJUAQwJBpF4Hu6VqT7ADvdkfo9XAvKDbavRTEnk5DFfJVKHdWgSZ1JWc7fcLAMmfsbxCYfjHFb6LWUN5XQ",
  "key3": "5rSZnK3j6GihMX2LAzTgdu7fFxeGSfoMzdj4aaDd4PXwWZd2koiXvs92xJdbbZSxi5X3RhmTxAUoppeEf17xwE3u",
  "key4": "2z1rZKbFtcfJ29weeL9vPYE9fWqvrrAs96a68pvby4yT7AwhYbVZQqVh9WBXDD3zKQvtU8Qiq26YYp8VHEzPFiTY",
  "key5": "3CTUcMBcw4oYtn4e6Q9hHRX26RWweaTRTESmE6RYAoRxtBKEdT9kpTCySZjiHqhhix1RDVph4JVm5ZX6s6m6RACh",
  "key6": "4H2P7FZ5xoQeymAVMatK8MJwtHSQhDpzDnnTyTcJNbjEVJMm6MyHL6jCjs21y4EoCMzazRKqoPXbAsNeHiXHbg3f",
  "key7": "ddHJz9vNFWtyCxwPKvjobwA2bCaMokZ3rZN5WnD62ETDhnpnfkudqnmCMpFUwX5HAHkWPq4RrRPgKRnqfEN4bVn",
  "key8": "jQgexm46w8EgW4AZ6kGEMaJAf1z855NCiFsiAaqFkfWqMvS6X8BF8WFJLYuzrk4igszkpB2Sf956TqYdPkjFrT2",
  "key9": "49oWeRJeZfjCaiprWkCwkMSHCr8EmaMtm5qCPhp4VmBUftbDv2PMMg4igURqPSnwMqhaJfhgT7Tk8qWAUmMEAKrK",
  "key10": "CvPbVLwdqrE3JgzQz3RRPBFPhr8XY86RWHz82ffTiaTsm1CvgbZkfkdNxaD8nU11DYf72WZGpVeDL5kzSedKjPT",
  "key11": "3tDLeK6NJF6VncRC7prvN6w3a7euAjR8u4oJ3YfxSDuBMoTczPJrYgswnRBW5qgNCQ725BjeKiDB9xNhVDKreBq7",
  "key12": "wip3uDWdQzh4xGYpvL24QXXP6kvYkoHUgtmcsu3GKhcdcdhRZwsiLWK6GycJZyb8chwRaYTGHXzW9RXp6xVxRcm",
  "key13": "vJvke9xWxn3LRRzhk1SXEfHH9JcYUuizYMW6WktmzSX3tPEiexETqFQW6evcyf1oxtL81WSb6nLNmAmuajEaxVi",
  "key14": "3TJoDQ8n5KMuhuXXjuG5Cbzjk6tLsLR1k1ExBJsnrhhViuvnsAqfzFTUvkbccpmKRr6MvchibbCdsM7c8w3M2zGn",
  "key15": "24Sd2bQFufdci2Ajmz7o6pW2wN67mMs7RVpqnGoZ4voFdTvp47pGVAccAtiyyC5pFj7xWwSB456iMaEb5siTz6Ux",
  "key16": "2cjZC3qGRRdC4MXzzBWAJjWFQauGBu33cF1mLKtHyKfG2KBABP46AM1zc8UpKRmxTA7jyKtakRiaHpxWQVnSX2Vh",
  "key17": "2CQp4acUpJp57y9LoGkA7ov6Jjq4Mn3sN6ZCm6vm49WmBm9FMjW1Qz1tVjjjqSZ5DnFnE2JAUtwoxKik4baYNkyd",
  "key18": "47oHfvJjxnZrqZgwUXhwHmX8tPSVHjw1cuXYVCMHuQc4iNVBnJdbSE5ycvWMqiewWBt6BmajxuWyXXA2mQGSfR7i",
  "key19": "67bSrCxmvjkW9pmm7TYFSP8dk6oy3ikSW2n8q341UP6RvtnREHdMQbrsin3UQSgU6YVaHvw9Rg7jEyWXSR5ViqLq",
  "key20": "LygidmobBTh8fjB31ejfCweJtfvhvDJDz8CkT1D9XgjsxAFasJaCzbNix9pvYPWhEKoTdtPrfNaDx4gK1hxb4kz",
  "key21": "4vnQ1h1xdSwkbQHSKEsmGnoCEgzBBchCaf98V6QiA6boYatqLerBPy5zoEPUHtmA8s7PnX6JX4zfH8ei1JWnrhjp",
  "key22": "3Uu8SWDfsEnpzCBbXKCmYBfCeAUwic4KU27Ctd2b8wDK7uVY7T7VDmNftXY3k94vdkWiz6eyddqCoAJbxnB1hoLk",
  "key23": "2GJa7vP78QJecvab6pr9SvDtYCy6HAwGsV6rirsXxaRggFBTbLbMqXEB26NkaRGW2TKs5FdAp5CY2V7BGUem3RtF",
  "key24": "4hhAeKY5i2KYLF1y9gHBtbvMCJEVw1tateC6aeU8rMq8K1vJc6xXvkZhdDbXnFbHpj8L3m71yZMDrHB64HaBXP3z",
  "key25": "4Ufn6uEuJTR3gxVhATJjVFuMnLJZpMgGCTJrr8CEWMEjLm7UqqV46iw1ieDje5mewyu88v55JXdgaES4pDNL8pZW",
  "key26": "4LjXdivL2nXrvvuv4SZxquqFHLzLfhqEmQCLQWqx6v7w9gQNZHaHURE5gohab4eTaQdA8XkUiDR9k6Mx38gBDo3J",
  "key27": "472H9aBAP6jk3ZEvt9mBzBneeqw4EjkpXbGvY4mJdbR7f63sMDU9cwnmEBec2rtY9kT629EoFn9jpw1XgXYy1mBx",
  "key28": "39vSbcftwoV5XsHVG7QCAjBUT6FaJJLfC4TrsohAQRnz6Za1nwCBCBR6ngGqyVHUHPkCQ49wrne9ZZP1h6ExQaMP",
  "key29": "4ZmWgS1tu71XhSrMKkmb3r6xtV38qDm6vf94RvTVyPL5CS7xJRZmFQu1LXFz9LCCQoHGYd8rgbLs78PmwsTJjUvu",
  "key30": "vJy7Yqu82AUun3SBdHcg1GP7fZESbBbrTuM8GreM3Y9kqK2seDrJmVwSg1C1DwPSEk2no63nNPhAwQZwtRLraCm",
  "key31": "2Z7qmtzZYXQFCrhACUBYoWj379ywJMeeo4F9vvXrSFhLHhZRhedEBCc7A2xdSiiAmkffAa13MbAAmfFqKPDpuxr7",
  "key32": "3g3sNsLH26w5KG3SDW8tvNgZyAg3yEVKWZLMyYSxK2xHTshewBKJ7Jjj9tZkro5zCKtynFxJwe4xSBp2G3xEACAB",
  "key33": "5SA641tJLXakQK7G3TeP1UHUXA8Sn76eQHWt99di7MassKiXfSeWG2ZWzgzoc66Vrigy3wXQ8igZCYajdy4RadXW",
  "key34": "4kbKYuTuq27FNLYXuZGThhUtGQhzFahdrWttDQvZSw3w8zfZRs5UvvX7s6FdZjigvqN2uGrH36g96VQwYc4HJhjX",
  "key35": "22YxV81onQ99e8GZptgJaydwb3vUGcRpQUFwVJoQYCf4MFEDGK1YU722EDqJWpoWi6T169F2Za38yHg24KgTQxVe",
  "key36": "5zGAhnszqdED5EUaKgfoa1d4GG7EV3p4wT6VqeJWWqvmVp8EFMKxDYyXr797jhtLt1Rnjv9yWWu7LNHYLJskKX7s",
  "key37": "5zxpJRXN7xk5N449zArxXe5HVRXzP896MYmUeYZQioF3aiknTvxvWnP3LtBZQQqnHnKGobsd4xdh2rPYcyf24fYS",
  "key38": "2jZGj6s1GoJvCtdTQcwe283jAmuw5Qvy1x29WZ2iatK3CXiCuJ1ZnBruWHX1TmYjnDw4nd7WahdGLaMMJvrgYBdG",
  "key39": "4ajFrXa59LAQUUTYbb2FJxKjPXiQAZifDizMvud567FijVZe7FqzDFhchcYMjHnMUuJ7wzHRRLTJ55BLdofzBJ8E",
  "key40": "WABrDhF111yLGqgMeMbqgDMDHBWGVn7WHy8VNZ1TmxjS92yFPFE9qihsC2ivAxWMjaBm3HvmWo5LYqZceMmtBhp",
  "key41": "3pqrjp1YWS73iUEKEoVLem81zAb1QFCRGNn47pk5gMYo8Kjo6wj4NpVmhKYzYYogDdLtya38xGfs5nW3dj1J4ZpK",
  "key42": "3jZnTEUeTNGMK8rByDtAP5VQUBo7s2td9CXaSwVMvyQTCgj39DMfFKvuJQcaNyCMcm9fB5THmrmJrLbpPiA7kzoi",
  "key43": "64Uxo2tVzpDNqGMGcKRdwg7ZQPPX23aoBrbF8oHMEANcrkZJ29TG3DqAbhJQSzVHmXfWCeB8XUGgfe4whK2eNYd3",
  "key44": "391yz6ZLoW1QRX9G7WpVUDwcUgdz13u1w7xKFHzhXRvLfPWDykxrrbyx88p1G1KxAe1SX91CcfAKpFVE1xeBH8BA",
  "key45": "2CfL4ZNdG1XJH8H77TKU8RDyf7KvMVokfcxQTxakUW8waayBkWjGALifYbmBMv5NJJGTqHpwkCzFkephKF9dYeJS",
  "key46": "2sWvWUhDjhtZfMU19n4XKx4g9Uqbsy9saXx6RKWPumVjAETLJ1tZuyCekStt8yqrvqS6RGD6KBZvXGNcUx5fVfjF",
  "key47": "5JdCLbW83bgh35q62dVYeE6ysKKHvcwVP872x1Tz8XTYv8yyYZB7PZXXY89Ktprm2LghHNybEW8jiixWhoZ9Jc3H",
  "key48": "2MSiqEiis9qh2wdpZ1Ymucx93pZDtxGt71D4EYc6grD9bGxhjnzFtkjf1yciyKgMosKSs51ykyacPvTboE7o2RLb"
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
