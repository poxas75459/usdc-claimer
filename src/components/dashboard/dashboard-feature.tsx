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
    "2CTRCQdFSBqv4XH65ZWGYtkzY6uYPJbE5Ag5DEx6jCsi1p2nmL38uNQBPF9DKi4V6p8AgPzv9Y6dRucVYWvBDaRF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3134UDPCzfsu4EL4mj7cL9gLcFug1pyTW18RD7T6c4Lgrvfy45wGzfMg1ssT9FywxYgSTqDmd6VUA4dekVfBb8j1",
  "key1": "4JbUB4udgA6k7f1UQtm3wici8WFbzJiEbje2zVsEG14Yc1pzTTt1hQhNpE9a7f6wtCAkvve1AiuecdA7aZe8A6EN",
  "key2": "eoHiQVKLxCsfABv9uVjQcn6s6G2tXjv3TT8JS1jFC2UZgauPRuApS2kSpvfArD4qSvmzi49f78b6qiAtZLMu1BX",
  "key3": "2WHZcLWzdxahfHuheJL18yTbZYw7v4Em4SruZZP9WbnFyhuhrXusMTxe9UtpHaSWaCRG8hjQVZATugW9kn1UgN64",
  "key4": "C8EwZwp2K4fAGMQZscG8XQUMvtmjyYwqbEij6wa7BmsRn89QffAryXseopmrTFKgKrWRAE5vDrXcMKXipX2K5SS",
  "key5": "2iuYaCrcDor55iABHCobeYETzZ7x2Hs4kk8jaZ5uxxbAEZoYA1gYgiknKYkKEf9GCA4BEEWN9tDXEqtS58BbHs2r",
  "key6": "3hQZ8vRr4ToDbPyo2xt5eNfvKKoduJPeW82rS5cSkoHQre8o5HpXG1AJL9eKa11nMGfuW3bmrRX3roP8B8piXLfa",
  "key7": "zSp1UxyoUDi4NiJVnNYegvV2wUz7NLNjvXbnsdvBhSr9V7amTtX5VWYW2NNmHDrymkcisdmvuQxXUQ2D3wK9yNU",
  "key8": "FJWbeoyCaynGZ61MPBtzGoziV4ZEJHRz5dCZhLJKKn6dnJRcVhR42TmuivVdYB7PM6wE5E6uDCS27stacMQfE4D",
  "key9": "Pa1Qgei21WSt5deVMSkTizeTGE21JRnXjJ78BPEmrvbUNKhPYi4672fqtpbfUYPizgckfX91fZskybNAdxXK4Wf",
  "key10": "2ikvjE1DosEHerRjbEMzkV8zZfm8se7d9yYt6hAXEbRgFZWX6no8x9DdswkbActFyiK3866cT1Rnx4oEaCE1DLdM",
  "key11": "4DXonr36Pd84pnusEkvM3REQLhET7YN5JQEtMbvxz4qzbpamVPz2n6P9zY5TrNY2MqvaEiyC5k35CW4j5RT6oo1N",
  "key12": "65nXGkRS9aDFczuGdR5QUKYaWtCqx1jEUm3dU4JyEByyX9AtvuCeqXSd81ZdSvMsFvqbgGrdH72RCWvrifswG68V",
  "key13": "4YugP3QREJV693Sbs7v5rgBx7yBM16WoG9neXjFwTKAYFz3uGNobf9QTV1EA2ihAnFg968DDZCR3vYUjmZTb4FtE",
  "key14": "2LW3Dgf4tLTinpycSCbPvaZHCxz74pRVJvnQsvLWusnPiZ82RoiCV3giGc6Ppnm181ijn1Vbr21dyFUnTJ2WjaAs",
  "key15": "27WzWEe56qpmji5Bh4dd1CEEzXFCVwNPT6qp4gzpkDQM5GX2QaaUeD72FswGRTk5TJzEgtadz3EmfvqaZHKazxnz",
  "key16": "3whQarJrKmLFrjPpFGnE7Z5pnK67RUk7dXjKjT7TVSwuS7sscUQ6D2U3GmA9knJbKGe9kVcHKbc6svBRhoQaS4Wg",
  "key17": "55gegpbnK5WsTRzuyiepewcG2n1rpQ1TvFvNNVEvwQBju677rJpyeseTLsVW5huSZGmbbL4ssEfp2zQeF9fQ6NoJ",
  "key18": "qfKZd6TGc1Gp2oammLo8pQX5wLyrbyR4DvHBnTMZZEJMYazXXEutYYrmhauDqr7djkerHMZLMULkadEubfg1MZL",
  "key19": "63SoAMGGYYfnXLzPPMkevqNZZaPpPagfSf3KujEskueiMi6nX6bWidE9j1s8VPv1VKfZRAkFQzATwZZ5yCeMZEgX",
  "key20": "3wvEU4qHBtHpVGF3g4KsX6P47Sh73qTexA5CCqjbrYFb1QBSer1z7FT7rJJX3i3aGv7AB6mroQmc9J8BvM1C5Que",
  "key21": "5vbKUTcEfvVoX7kahYmnLyGc6LH92FAuLz2TY9M7soZdfkLYFT7NTSXHngYsoTRFVk1Qm3NCmkjHuiGWbRbuYXnp",
  "key22": "E1vHCTVG4AJN35mZG1e5pHUXo45KDM2FHRBei99ouuEap2kJZgTSsyoLDWpoh8ZCHeGAxyphHszxLHGA1pG2G2t",
  "key23": "5fAv7T28SYnWwcWDu594XZXAkWJS3NpPYjPtHzSt1vMBQidXBrqVuMcsVk7CKcihm1JzksfA2FfKkzGCCnKf29ud",
  "key24": "4EPiegpnpZajMtLUkbLNE4SBbC5ScZAGbe8ARww6afMC2yidxVURqLDs9vmXwqaYwcwVCVpwAZLBPqEwMDuGaqwE",
  "key25": "1TLMGZsNmYZpDY5G6MhEg2bRVyW6rEZLHVqLogAE892JjzLdJLVJMxpYmrTfPnkvoZcirsDw51usZVHHKo9wJ57",
  "key26": "44JcCsiNY8GTShvUbP9gWS95nRoPUPEJm2FrseMH4FCZRbaPVPdwZ1VbJ5K4n5y5C3gA2Y4CL9A4mB4B8E35st52",
  "key27": "65VHCZca9VkXCifCx4MTsJajVa9Jjy6Zr5DtAVcDfbhVEwqLiykLZxBKYAPq8xnA6HZYUf5VPpaD8Xb23xRXqgJD",
  "key28": "nq1bQ7JppXU9c4rMaBSzKnxNExcE6K9wbzRbtcTBzTfWEnxpN9XhLLooS4a6V51g2EVLDQcDgBt6mhg5D6Z6vzs",
  "key29": "2EWcL1xCL8z7JUSg3yqjzRNvz17jqQ3g2LtBaxLRc6t2Q3vGcsQUURMKehQAtywhdd9gGrzvqLFRiZCw3CwrrdjN",
  "key30": "5m2Em9pW5LczZ3rpFz1EZAxLi4YV2aMSbz62zS1qxyaQRcGXUAk66yjY3x6Fn67p6GasrSFbFnWXdjGhZWWMUKSb",
  "key31": "3PCrFknh8tDtNV9cCTPoM2DLbV7Dj1xb6VbJ4TsxLHfNBWCTwcveLxWyVv9CpikRLeWLWzrQCfMSD2FMZqYpyWU4",
  "key32": "5Z3EGmmuFDY3ywHyB4dBsoR6RvVtrSbJM4LVTKynk5yoc5hPfxk12vJ3ox6H3XHhKm5FiXoR3AZ6DhQWaNeTnvju",
  "key33": "3RLj8ttwpUpWChNaYLajTU7Bfv7ntGh4H3sUgVfe5GPz2hhjb733VXmVgDJnzJycNbt3YG1RFvsaTHNSnmqhqxAa",
  "key34": "b1jgzNR28V22Uzn9frLAuXQT1jTM1nBNyhN8Spo4CPWfyFqmcPtjf32yDncf3dhDX3dSwybj1STAN4QDCwFrnmb",
  "key35": "5TVebYPxBgr3UcxzDgdRhZwVhxKQ326sCFyhR2hhPP98GPt386wY7sYHEqqknmHgGBY2789Qrd5HG4PuH7zDxMhj",
  "key36": "2KWhpUBq8HxSJFFdTcStC1Gd1ZMV9yfeLzVmEJUjnMWHZo68hUPYSuNvPKPaSUc3ygmzxjvwRBzaieFQcevBuawQ",
  "key37": "3xaMnLE3KLWD6R4mANQKxqXLpnX37Bx41TrRkj6ecxAkrJdt1Y5tLo1LamyBrSvaFuAuD9xGWTScAwA5nRmYkNRH",
  "key38": "4oAi3whoK2nc6XsGU4wLNyp4uL2AKTcQ6GM9jAAAoVFWXBc271yukB2peq1AXnDBqVX41SCRc39DWnFNr2Z7AdB4",
  "key39": "3NmjWP58BBKKd2R6CX4KpF9n37UmcizQhD5qUtmiKGAJNyBWjA9nnxBKzwzX9jihraZNH1rzJ7JAJdqn4P1amgE4",
  "key40": "2YeoiGKoHpEBmXWPXSDryH3mVNZBas9rkuWbAXA574YNQYFJf987WKKUqKKMWfrSPfkXMmQysHiyXVx8Boqh4tdw",
  "key41": "23CD7W6hMDsnWYSC52D2t5npmJ6vHn8VRaBmAuT6JYypjgQQLjpCNVUuyY1XovPqxCbr9fHcq6uoh8dMwDqo74Bb",
  "key42": "3tAAKJoDNMdtZ8HyCREuoCcmTS2ftEtFrxtg3yXdwAeeckTo5WQgzx7bWECQgmkYpMHtdPCgnXsTr2aRWj72dMZ1",
  "key43": "E9WrxHbtTTVZc7QLE9oi5jZPGbeU68MKMt6J2z6Zy7tcEKXxSGQkTzAGuLBerEYHdsM3woYM9AyyfYkgc5uGxXH",
  "key44": "3ZMKW4TFkMMDscTj2CfnQ5b3rKVSYgCEYz9Sqd52KDLAe1ThyPrfMddmF5fhiiJ7h2PezEktE79SELAMAWMJKXRR",
  "key45": "4NJc8KnBDA794gbZ5moZFPQAoz6ao5Kdmmra4CReSeEpu6WygV3wZ88ySHKHQPKiimTM1LUDwNoYfxEu39e2pthT"
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
