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
    "2uUzucgrn7ywDuJpdRoAuREn5a4fACMxBAsZsyusiu9VcG19Dm1fNSK7fPGhW8Mz65DCoP8FqohZZc9rUUkY7b66"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66FVVTZhMKq53eA19MfJGXHhntdtNCwiEMwaWhKcfDLVqL9LaWa4anpg3nv8wUEhWDRwQpm2f82CqsVCxZPAymg2",
  "key1": "4ruGxUY1dNPZWniR9yAPpL7EMdrpiedmnQ7f7zy9vQdvN2Hu2pE17QXq6wLgE2rRvJtoQRJizgpdyRwyPutSrwmw",
  "key2": "3VFbipyzmTim78yvKNHe7apXwm8ya8UAbhWnC8A4cy62QksEGcjvhTazUvcsAKErKbKm8T8QNSn9od8LAHyJreUu",
  "key3": "5Kk75eejttkQ7QvHhpdrhdLx1Na7hJDrMaRWKRfNVicL5DDH55V839b2s7wXmH2sE8MNxFa77UQR2rG5PhWc87WZ",
  "key4": "3mA1DFsiCeLDAQVyJ3SXfpZL8MJv1QBeWg1pju62Ej2Kbx5jetmSDNi5ipKTUjG6UdAwPCZSBSvUfky6PRTSQCCa",
  "key5": "4dZvRjqYJXHG6yibKJCkRpTp3RX14s2nwssWiMEvPxqRNZ4UWHPzTC7LYb96eGw8gW5Qo8zLHGXxtWpYkbd41gM6",
  "key6": "2NU92CrDdsBrxiPWEKPGAabcz4mTADy5kLdZrTjkJZqudVKUxob4BrPdeHvW36bYZJS3QrDFTwZZZG3JHoBL1cW9",
  "key7": "29kHCK72QfNR9cgNFytgEBvZyTUN79eVzWwReTGfRR7RedPci1JiXQmzK4M4LNiqwAo43jAkD798KLjmm1p4WKTg",
  "key8": "5cWqMwUFwtHbmAE1mUNKzCBBnnBqTo4PU6e4CsVfNDfdwot5RZQMP8EvraAPG95GLL3pqVaH219NQULtkF1vHuRX",
  "key9": "3gjqnX1Vbemzzpcv5eYddEkqhPhfFTe9MZ6xGU78WmErAeK9EyPPTiWXM25k5AZoB1NNyfzN5GJ9Bau6JUNJWpDC",
  "key10": "5TNDGJfGo6bTWeQfrtnDWyTHzfRsgK9PWDPTkBWzg9P1RN12RMoLEhXcGx8FBDLrUWq42DFHxHvR9CcKcq2Q6B9B",
  "key11": "4nzATNxSEa1VM7wd66ZGiNWxN9jvcZQ7T5XY55E4QdLE6t9tfoAx6QY3GkvqvUdmwCAU4n3wuHv75oqciEd96Fim",
  "key12": "2GVXa4F6oib6RjbRJzygqbuZtbfQ9c8d3ec2gXhMPntVTZFFtL1QpcqyVTbzaeUdZusBHZduQhvqupLcbuhd9as",
  "key13": "5jkvfBjym1zBJceaKWBcrz2CvqzuczUukRnWR69VHFXHcLXpi4RUNsUbdkUoZWH2dRjKG8tCk9MKesEEoeqEMPJJ",
  "key14": "7ABbDA8kuEP2yUrDPrw58ZaJSt2fSLE2tysRzKD2diQMUszfrovvbSLYaT7JLSc1ruR2WNd38iQXxFYfswsQJsC",
  "key15": "EXMUAb8s6UuZcfF8EcJ7LdDdbNzyz83JzyYcmrmxgMq6MFwbBZ4286L3NuMk3BtL7kW54PWB7sh1AdgiiTV9xwU",
  "key16": "FMCNnNst6JzKRabMu7rsqGH7fj6eCRgvyjqRQWiu9irx4X8n8sGNtBHmAmPLSL94kB4J4Ad6U6WjLDBMZqGsNej",
  "key17": "5tK8VgNVRBKKMnrzhgFiWaMdAi9nVDo3wxZpW3b9HsxCsP12Y1yhaZ6AnKdtueWf3CHj8XxcWmJXNzuxn1JBoi3R",
  "key18": "3ZvtKm8Z1n5Pr78VJpvcgt5D1UCyeyrXCKjgqNw23pBy7mvxjJgG11eXNvCNNpd585JGD3K63T5RHxXaF4u89qqi",
  "key19": "5HyzryAtPJ2HLiX7hEmLvSUgqVN5tyb6MWoDGahCqtgwxb3nfiaDyW7CrvTWrAreaLi2Q992DtP53rd7UKYtSGm2",
  "key20": "44Zc42VrJbzTb2fZXgjL1c8ENu6tVTvr9Fk4rDv578vNN9hJooqhhkE3KDDZEkGgzzCy4Jr9SkNBrn2KrNspM2Md",
  "key21": "2QnDSuz6oimVahdzvGpEgmSfRu4VE4H4h5U3kZce7YMU4aPg3EkEeQvsyfmTADQ8EmHtzauiEy45Q1ECkMAwvbkT",
  "key22": "2mxX8ZFB4xnE644oGpSSMWDHctUMArYr8JtWyqVgAq8ekaquGTd6bLR5FJoRwweu37W3AYahGZseChgEYCZ3ZaNe",
  "key23": "4uFpvC3xdH7FzkZgRAQ3QMegqRZq3oSMzRH26PwLPwfcoiYKW28UbMZHh3ZwGMQJEbSNvByyr4tg6B7fi84tPFjd",
  "key24": "3HDuGZo77fVGQ2AwvZ9PD1KjM24BAKnXcBjGgjLNccSQsHBo7BXuGaGPz9eMkvmtVrEKXtkrptNoBiCs5dwEfVHY",
  "key25": "2wVt2duxtbSwzfcWVE4ZFvTpSweQQkJvmSxNFJXBKYzJgZj4rN6zWCbCmMNJbfdpVgr5kifXSZtcvN9cx56JxMcZ",
  "key26": "3EnmVu5Vmn5aXBzfB7Z7NAZKTNLXTiNXD2DzKzmh8GWw7KEFkRKToxS7uUv9CbwbdFbqApwz56MUkEKBYGTVFrSq",
  "key27": "HU6PPDG8J1CpJqieMNAzJCCmLNA2EEUwDBdgvhvcPhVxNz7v6V8ToD6Lnmd2B62xTC3ZkyuyzWao66pQSh4pnzU",
  "key28": "3SCwjeemnfxJkURVzBGNmfFuF3q3qZ72Yv5wePcmSVSQ1o1ygJvbdd4aYGzKPBq1ZWbCvS1UQ5x5wiwMMxDrjJEB",
  "key29": "5PEwaXm1DqkfyJKqhB8HyoRsYsYb8f5xt5LJ1fxQ4WoFa6PfXnhXcTsEqakSqF8Aay8XJpSyayNA3Hn7YjbxAsrf",
  "key30": "4BRZ81Lu6qJYSwkTkYEhUqR2hJkT7B5mVNGKWJrfXiZ4uVShgnd3qHLpXihjAqA9Wf2qyHQLDoWcJ1oL2XqHnxvc",
  "key31": "4SgBtUosaMTUuvsFVok969kwuoxyvVkzQhQ8628exBZ89YtuWddWHkYdEeQzc83HTAZsB4iBqQYyR95EJBfyJ6YU",
  "key32": "4YXYF6ejvCgywif6uzTR6g6frqizb2RtcK684itYzdvCP75ToqFEf69qnquffH3StNhReqMxmKnd1HrqX4vCFkhf",
  "key33": "2qpd9vAy9BZntiG448iaKPUksxU2Nd4wbGEgpwjcPrQLUhwpV72gnDRrMB2ZMdpdo2sKdsVoq2gtqxgyUGCcwciH",
  "key34": "387udFmasywgJfss1pVrwgBBJGCfbeV4hzzWcMGBJ6cvDysFynTitByXg1JtgfWqqwdByfgB8zvAPcK5Fd9b7bgc",
  "key35": "3aKx6q9Bu6c9BCAGEbnW8Wms3acqbzeo1pueC7AFFFL782kggi3hFXsvFCj4uLBoNVUy9o6HBZYTSupeNMXGatTg",
  "key36": "csm2Zx7Gsz8mcLbL2APVSaw1WYCt9d3Kwr6fEDpEag6N1K3dVREL8L3qYBjcB9QB9t3ioEHbtyusfvV4uyNnphr",
  "key37": "5G2VpSeiRaYjwit2vTXRqJVJ1m93p4hrT8FeqMGt1vFNHP2WJ4PsfUXrNRiJKAXBZzNshPgo2ZYy3exTnZDqRSmS",
  "key38": "1MvAo3Gp2VbCX4R2c4eGGEErEDjjRD4ucJ4EoZD1ZZHdxNqfSXXVF7xYMZz3TeZb17H1QWV1dJYLK8y4SszFodc",
  "key39": "3ra6ggUPxgdwvusvGqWkZj7iGrCcRvmkvAiZAwP9hGPmM6GWaYiRZx7tEeu2BXvYhdnPaFxBv5ggGPSU334HCSzS",
  "key40": "5tULYV6wSTN9cNa9PS3WmCwp5QumKdiFYFYV71h3xtgbiQWa9mhw6BTnwiSgtEws12arvH6dU5evU1J9QsPJLPpA",
  "key41": "2vWwLouPXdSBgYtYmav1mDeu4WWCC1KYdL2BBzQgzrUAigA7mM7fMxmLB9dxowKnQeM6DC3QSaCCukgoS5WreSs1",
  "key42": "YJuoFofvBKoF1Qkxdr3Uo9rtDKnrX5TdJ2F2GiZofARbQd47S6N4Q434y44YgAAyBSCfKVnCZuP8vzBhM5DVhZU",
  "key43": "2hhyFVLdXg63c9DSyTYxxGxcdJgCL6R2Mi4qDH6ECVFzm2yjgMpCMfHYznXN3Uiwu6h8jwUqaXmmMorsmGnY8BmK",
  "key44": "2HHqhgJAUARXdQzukVSY1XngoqbavZLE49sZ7KVFgzdX8RFjJ4h1gtug2eBZ1JPWxJRfyt58qPNLiaqhbB56H5jo",
  "key45": "2yscAKVpZzD8CM8dkVCU5KNPr7QhrhWhwgyu16drJnhsew4kJtCiWEgmcKs14bMrmiPJxsfMTwnhJBmkUXF1YJNx"
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
