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
    "5JEBFGm5ANvALC4VQ9LeK25ucZXz4Rubxj3ktVsME5cqPUZgs9ihGiLRGKe794xPkuRgoW2MZik7EqXQT9Jyqk8Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67mEdeFJ8kgR5FQaobJMvsR7ZfFx2ujRvhpbgQ7ooai5Aqp1xWSAMxPQBomR43wV8k2JySruM6XE2XMu8vu3Bn9n",
  "key1": "XAN6K9KaLUYrbenx8zPCMWYorSqiv9YZMhScWQUr7LAwaCxece8KqSGhC3gj8Q7y38NpetNJ3kWqk8r2JLj9o9E",
  "key2": "piciPf4Zwq75ZyF5fsR92HXgU4DyEpCnsfwyrYcfszP5BjjtcYnfJNVTgHdrrioodJda2VahQ7qxnWnC62cECUa",
  "key3": "fYg8qZDd38kQn9rPVen5HTyXLNFMsP6bnAJhoRyh4Cg5Ua4z3eGFQyoAHzEYvRkgt7RTTsLtSE5LuZ4beAatsmp",
  "key4": "5aGP8f9jwDmC68GQqkkMSv5uzQ87ZGS7yB6LcJnKJnVbdqhFH57zp5Y4RKnovyaZmp5fufja7iCZSiuEuHogqDij",
  "key5": "94zXuauektoMu3rkgs9zfXbdHNw7DoBhzbWRhtRpn9Y2h5MCwkPQxhigV4Jb7B55wAD8nKK31fgeT3DHF5ZMFb5",
  "key6": "2vM7jDn5xuVWq4mu85atV5SUyjLzgZLG7BDLDbjg5R8wwdmtWemE68TpJPYf6kv8YyFx8PWE7ihhtm5TPoRUcYxC",
  "key7": "MQKsZsFuCseBjBYnWXxdSqHtVAwbneBLPZbK1YhPBTU1dhr2DNSxJx2uYb155SfXJ5sV2ke1nqcSkbTPGuDnQuw",
  "key8": "TgLRXis2mm9kbfHy41aF9TguV2K4VgsGeWcrUJ48pgpiHp9PByEoWdy8WaYGd4vXPFxY3mT4n7BZsdPm35nxoRE",
  "key9": "5gpnNu7zpHExHoixGWMU3nSeqam5AkwKkGifghxBC6zSuhtMM4DgzpadVCNFZnHUdGycpUp3jnSEyqrDTJHGJQBm",
  "key10": "4P6pHSJi5WPJygRzHWchhr9fzSadbKzDxryRKQ4xrxChUe1zqzHjUCATYj4tj6iu14ux7QxzsGPcUyyiEdDDmKxa",
  "key11": "5yYXJqBvW6QGfBqNgcG7UgBpVwwNmsn4SgADidc5CSH53ptqPA55ffMcrS9k1PgFFrm87xKqHQ3XyUSaZmVJyCHE",
  "key12": "E91LWagzJiMrphjoNTCaZ3MGfi6NMXSti28esACJqx9gtxiqwBCzfT9o42D32LVoLdbVvSUCrk7A8cDyZXnyGJ8",
  "key13": "3XzfQufMp4whMYNnNakK6Q11u5uKwDti4eoh5d5tv1828DE3KpUaSS8RuwYzTo5ZebZYHsaAwWcqJ7RibH13Td7n",
  "key14": "4jRpdzCgWt4JSs7hAnz5oRU2VM5V8JG72FsVhR4b5dbmvRMPGT76THxhBb8LqvBdLtpWck11pqB2iZVuJYCWczDE",
  "key15": "4T6tCozU81Qnd4B8es3HEXUAU2Zcz5SJvPZcwPM87pdT89yxhXN2y6Dmp7janQJKAhhbZ7niB51C1XLViaXYa6y5",
  "key16": "RKkqoa3TxLnkCNG1jVMSsFmmQZzmsmP4Kve1W8edgvzeeH92djNHmSeePMrRekGmk3sG87gCxsw9uzUNwmGzoNc",
  "key17": "2tybDzSJ4DaGtEiMusqJ4Djpz1La5CYmfenzRVYLNjd4WD3hNRhDkDnugrRBPU9Y7wHkMbCrAbZ3z1cZa1NWKvdV",
  "key18": "4AgJe1oEQrV8WGmazhwc6RYjuQXLGruvHZwnUY4JrFfeLnM2izXw9uh6vVWcTBxN3m1QAa9p7GNhBXCG6KK1nbYe",
  "key19": "4BjtuYMPKVsCu2sVuYthDnUERDUBMKywSfxBRmEsTi2BT9PnufxmjNBN4yyiN2S1n8sFDiusQcosHFNBJDQ1EGNC",
  "key20": "5oHXAfg6ZHBCf93semPUUH481UiREZXaHXvCNZD6Muj545Wq5tb1fkmnrEspwxnbtWxzjej9T4XMwasA6HmQ8ooN",
  "key21": "2DsUVcptA11xUyUiCEY4X2oYsGTkhD6HQjwRx3f3rShW9WZqJSwVNZSUznn5CzpwJyup5aLAiEBso6Su1Jx2UJGt",
  "key22": "34DMpaewFhDEgBp7QNXS3dTPVzhiLgtJRwYcJEPskvDPrX9amDXicFgUsLB4MAaiDrtwpKQGBid6eD7RH4VWqxBQ",
  "key23": "4uqdg9XskeCRPqyyf99S8cbt4fNb67v4K4c8Fa92R59oEdqCApezZSxNauxQBCPpj8YPvzvwfmJt85989LZg4CeF",
  "key24": "3AJ4xVpbK4v1rzfncpGE2RLHCSppJVKX4wzA11dQKeovfk4QviF18X2MUjo3uCgTdsNXqA3dcQ2ApiYky4jBLLof",
  "key25": "5ej3fyy4qNQSQNvE31NYffL7z9sMDjq5s9ArUdxw5DETVnoQbvwRdnq4kNfxPrTDDTP1aYkriDTB62ksEtuhzs8B",
  "key26": "2sJCmZcCeXJ6oRagxK3D92fyHAkmqtoPmX9KdrGDXN6rHuwu1kkg3Lz2RhAnXoLeASYmN25fPmPufaAQF5ECURuv",
  "key27": "2idCzxAqbLLAa7rBocPLRPvBg3LcfHWTv7Z1yCV4NN5wx6zitYXhMNXGUV7ergdpLx8dJ4X1BWFKJ7QSuCQFk3Q7",
  "key28": "PCwd9URvxcCaZzDUZfZ8t1eU5V853wiGhSzLfi5vS8tiqPCza4URPiDGU7qQALhC8AT6ueAa1DVJqBAYx7XyicP",
  "key29": "4us6vvqXLP5PLQmGGXkTwaNGMgvkNyRgYgydsVcZoSZx25D13ECXK1ZBbPtitbSySTLfEza6aJHYhCYAtDu2HSYe",
  "key30": "4cGX5Fv7Cac8puW1R9LUSSu1vysU4Ktb223kkAkBUSVDCYwtqzhg2WFACGxC86RxXk69mAHARSGmTGhEzeh5HE4z",
  "key31": "4byBwFHc7GZhEqFZKsaYLVB2hT7wUKBy9mWgvXc4i6gfii8LQYKTUerTATbNmCF4hUy3GtYaerivXH71khPwt1yD",
  "key32": "22V68e3QzEwSRfEXAB6rEPgooU2xGMgRvF9LLCD1yccwJWtyCwTQEVvaerQ7nBPWcHzYX1sCwZyUUcMWDY17UTB5",
  "key33": "5zt1djxMTcMGZc43m7BX8qa6Aa5vL2AHHFRwgAkZ618YJeryziFNUDGmNQi6ZcugowgjZbbGMuKSZof7LwvVqDAY",
  "key34": "242QEtwLe9TB9KZeMiM2UspSnhVEoueGZpT4N7EmhbbGLWUz6uNp83PomPkcXkoihAguopL3taBnmzUaBhPV13nH",
  "key35": "4zsFeQbWDRuNc4HvxfebfMGX4KSmp9ntBPeoT7eZ2feBdZRtB7ZQ1H43n6yWMNv9TEtZDHe1c4RTzfutfUdU4pBf",
  "key36": "5G8waaeJybbYWtFfz7Hn5ja1FNqkUtv5Hyxt36Pw8Nyq1bezHD1qfAikwuscXryUS95oftAxRiAu4Cz1SBnK5V4a",
  "key37": "3zmABypQAaTam146es4eNXQ3nYUDQhw5xRQ2dxoyhnbiryn1Ehn8zubxpsDGKtMDpJrefJ98zxUokzfoyrqRmQz2",
  "key38": "3Zfw8Awu3kAGAU2Buck7QtiFpcBVSbJiX4Brt7K2BNWGFeMWcMsVmhE2j4AxHy1r9HcFBo3sGL1yEtm3M1usqDGH",
  "key39": "3E8PEMpC2YsBB27geCGr57ieT8mPvg5d6NenJAWPX4RXeF9vvPgAAtsoNMYoq8CJtfbrFzAwZHgfyxpEBEqy6WLM",
  "key40": "5D6GN2oDyRf2hmkXSrNrbgmQR72bLqmb6dyoxQ7a7DurW1HrF3byRMADkL9CjbMSJPMVokSzRcbn9mTPLpYjZMsL",
  "key41": "2pw5LyjijrtM9oidrSGmnZUfKW5wtjPiV94WGZJMsdGk8RvpeMNwLuJNWGfsnvE2EqGCNgM1vo6TCFWkhZY2wCSC"
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
