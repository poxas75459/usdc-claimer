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
    "3dFijEkKUM2NxdANRdRzdzDf8X9x4ro1teuPTm4Z7XbRwHHWhxFrxQ8GzPyW6DdwvjVwyUFtRE2WUfVFQ5gqeGRV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZLXcp72VCuX1fHx6sqeA8cCdLfjWcVr5WNkUhbjQyFFVakATFTry2UFyT1gdsBUMY5MmbKsfJpZu15Grd8ygMeF",
  "key1": "5P8UmvT1dRVMzxP3gbCcNNFf9XSfNFvAFNH4iF1fnrbKVf2UNQvnXKiGdCEP2HEpLVgMtRrdNiQbDnBucVuHC9fe",
  "key2": "UJn4r9BHNN2EjQc6jSeRokz8YcpFgpLPwJjorAJ77fKjkHSbyPS4NUW3es66oqMQPo8k6m48zuqvNgK4AEE8hpH",
  "key3": "VtU7L8Bv7S6n6Wm1j5jTkLJFPHJiVTYpB69Z88Jwf6Z9rmqs4KdK57AhpHAsXPGADmyhdDXXomv68FMxu8PNaMq",
  "key4": "5KdBfomr7PdKbcTFc2rExanhwg3M5inAptH7bXZUXFXLzQ8SsdhArVavBpHJKS6wAgSSkoadzkxoNFEQ8eF7D3Vg",
  "key5": "4899sm2jN5NU9Wh4KAtxhVAq6TnkiDVA6e3dzq2zyvGyS9K4B5tgcnemM4nF156easSMnbLUJoJ897LyoRZrCrmK",
  "key6": "3MgkZcEkNAWoB8kZK7sucW9khhe2gCVhLv6HCvw8QH8YDX3avPP4EDidXp8XYXRzbUGZxVDYiCFw9Zv3hUSBJMnJ",
  "key7": "618CG8wHpvUStZnV8Wuax83Xf3Ab66NDzWi8ZCR81sYHBDZiJiLpBuazyhYhpGpBop8UJqR1W5AqbSN3Az3qKp1",
  "key8": "5VvQsptMgCn3SGxmfzg6NGbSxgMjWRMkmGwT3zwinMQq5zCEQdTnaM6mEi5EqQNhbbLWkqMxm1f95drxCxCV8Gnq",
  "key9": "61mxHdHKKcrUJuoqR1gdWy75ckXes7ShFkpHKsddc7ZQbVNmr4krfzDGAtZsYo5CaNm3VTGrFR9GNdMw5sLjnw5m",
  "key10": "7tKLsXzFdKA4vBc2UgiYJ4xZB8twKX9MxiJ29TEZNgbDTSnonKzouKPJG5cbCNpuQ99u7y79R4SKqWoaqSu9CjR",
  "key11": "5iY6SZTVPhmmLpB6kQm9Pn5HfLTbZZj3RqmN8oqWh1rRBhp4Eav6x5kZiusQtA7J15abvdjuZ48jjbGS8Nz36du9",
  "key12": "5mx7r66BJbYv4Niw8whiUoT4EfUm1nGG1xqzPZjPBuY3NxZZYA1i41C54WKSi3yMkZNGfGBcAfuFseTxiCXsqpjF",
  "key13": "3fCC8Kg7Ef6Kw1ZdqLgi6EiXdS6FEDwJ1HKYonssZEnwfkv8WrQL3vVSNBJDm477bR18UGo2SV7a8Yh5wdBkjrbj",
  "key14": "2etcvKrjJCkmE6t68qWC8A3M3k4aGf5XDRuw7wHwaz3mGMThLjRrpQkJDcRSkDtciGAE1RfFRfXwwwvFQ4qp6aWL",
  "key15": "2s2wK99CELnrn7PszwYuWwXUwL8PwB8gRQay5WHCyryj3qrro1UUTwgCnRSzMUxczau264fjiAhH48x97yiF4xAr",
  "key16": "2F6Cgz5xykXogPVShZqPu31yDH7RcvjDaPQ6KvBSMktDfMeVyr6fkodLUhE7wv9fTTyApsX4L8hoJnNNUkkjX7xe",
  "key17": "km8y4SnQkZWFWGjC3WgbgY5XQP3j6DmRaxMdYxbwtYaozKjauFPsyhUf26Ao1CSag5mHjic6151V4DVM2Txrm4a",
  "key18": "46Z9rjgikZ8FTp7dWyB16xJemyD1cnRL99zADJzPFVfHZBSJN7ikotVkEg4RE41jpGLuDUNwpWeQG7A1q7y76Hwk",
  "key19": "yCxAH8rTLZQavg5dzGJGbwBipxswEHvsq23CGaXi9QGMFyKsXJZraJ4xJQswkwmoCWXizbfh2BKKANrxkRJ3wzV",
  "key20": "9eUkKKFenogWc9LB6EpCR8vsvxGQPhn85V3j8VP2tycpY97SMLCA29AtynKPh2FGUcaqAANAK7SgFpBed63H7SD",
  "key21": "37SFLFKWe1dtEZ4mw5o4T4ocwfzNxqEDyVKaog6iCVgQ5Lw2BSNMzrfmzN1KPsnepdd9XCaE3vEEXSY72X9kS9Y2",
  "key22": "4qsPpee451VP2eAALsmMfXZgif73LNGXNsPytAiHTNaCiyaaTASL8tQ9QdbGzyUnQWfzwEkakk8nFWBHankpYVat",
  "key23": "3uZtkXsekmdCnNFXrukf8xNfSF7V9qTZKxYh1GgW7yex15CFpn8co3YezAMQrEX5Qvtp2mdu6VZyAHNr3g1cBUD2",
  "key24": "3rtnEhtLcbm1vas76mzS3UHteLZsSTrpQzR5VyxyUtbyLx79qxfeBaiHaBtPD3L37MWEAZyiPPMjqawgMVp46zWW",
  "key25": "41yYAFtwhdAC1wwEYN3gpP911m72V2wQ75gNDiLaMJr3macbMGiNYcwRwQwVcyK8DXBiwVtSkQPib6kPM9FZzFWu",
  "key26": "5ughGHwNSBTiNGUPoPfVtEvjQR2ykR4ya71UG8hvPLdXvmg81CBcU8naqtCckBgBv5mPQ2BpNEkqt9Rz8RBwrRyd",
  "key27": "3H1sir9JgYoMyzTpNojxxVyjBs9nzJbEM4jrashmTZhNrMVtaHMpPZmGEZqwbcbk8zBjiwWg7MVv7nSKxXC4MRcT",
  "key28": "5Nfx3eXPg1Zk1VQHSHzxePg3JV85ma124EuuZpC4N4LpdwPRm6wZMezsoqnkYCp2re8o1kQ1adFVz4QauHYukJph",
  "key29": "5XADFvF1wjGJRpPz97dE1oHSLXavybEA7URxuuPSFviLTNhPUufV1nVNsAZZEw9HPnjyAJ3gsMbxokrHQE1uYH5R",
  "key30": "YG8jAkasfaq5sFc1pBBMwj7RkthpPfSH1SV5D5DtwgUmTTSwdngZo7LLPr8wMPnJe1LUrqSV6tYuQ88YVgWiK5N",
  "key31": "3VHZHKmEX74nY8tEuX32YaYBhBRuKdGZ6jUXhr9usNs4cDFB6tQXaHyodvYDLYBX4N8nvrBnBC9PuN6cxduUFTWx",
  "key32": "sBXWQwJvix3L1ZH3nKiUeynbxrsvKREswpvUjM62hins6yyM33hrjD48hv7wzc7QoqnC1sYZF47hzRfKzyMFMpd",
  "key33": "29ra4yTT514cf9pSrTR8gippGJEUqeBxbwXzwuEqaUdYazdEwUQWQ7TNDtH78CSWhxKPZsBV8vfHiyrYWYY7PYtd",
  "key34": "4TTupfMjMemMjA6q8XfNPwYqovBYDWfWuvDM1eG7jnzkVarji2kkANATx5zqEViTYRAbT3svBoVJEeQHbeTdpF19",
  "key35": "5a7WAEHBcQ15551M7sMj8C1Svhy63i2gM2ZFjuWReDFCkUAeJUWNZZGZbiU7K7zMMFqCiNvTSZzRHuuvoteQZjGE",
  "key36": "3N4Zs1F1HZiSBskMrGsAJ4yZ6AJA435y4L4PWpff6EuJf7d9z1k5ubDraK45LZfDVjCACFn5VGDZmUJrMUvF6bhu",
  "key37": "5qGR6BSKJg92qmcjazCCYmtCGVaA6N9y2pkCgp3B6hHmBHtx7nHELRE5RbRhYq2dFsGRpRvnxodLHoBP3PG4Vsgo",
  "key38": "3P8XvFkHqNBQ4i9DMfdGBWej2zHcoPQF45LErk7H3i8gJrFP6MCxDogd9bg2ELgbEWtg2ZzAku1QGC8GeYStvm5D"
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
