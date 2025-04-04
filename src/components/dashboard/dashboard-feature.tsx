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
    "3JCXX91zX3MFBJwH6nvNMqHbMFiQNmpZTKWZiXz3vpFuhPSfuzpqt1ebcvpHP5L3CTcKiFJCRUV3WvMegFrrucUg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aTgPSJvBVtz5wrJuDxqH5JdFicSP2YhTEcn4hjJJ4Vvjhr55SFALaSRRg51TgVsKQDrm8ZhMobXecUK8iDYez7t",
  "key1": "5NFiASEzvUdL1DZeyX2faJMthAPFV3EqWXF2zp4nrkkfeqWCHiUQU9zjZwMF9VbMELimy49dKUQTLU9sP28z6h9p",
  "key2": "3gf2u3jvsnLPeFXfExU1zo8ahUft6xnxYVk9bnLYVgw7hvLwHC3XA5QSYgp2JgPKnttcV9pL9PrvKnD2hkX73sXg",
  "key3": "46FGJ83VoWdF5ZqiFEjSvMzXmyocfUhjZcvfK2RFgjHTVbbLXrtDkjUWGeCFfpQWG1kokhfPSuu13GQgAuBt9oJB",
  "key4": "27NewrdS5BvgHewrKxH1ZfK3TFfQcLHy4zXbDSsNwwn7pHNdSeM6obtU5c12411WmVEsahuBVUDi2ojdNyEC1Vgm",
  "key5": "2QUR7EauWLU1TPgPJvX8m4HEGkJaMVnjZ8g7HdjG9e3K3THRtrEmgszoCdsvLGWFFvpjdKwDJQ6kErxiJ9rZEkSz",
  "key6": "nYA8Wr6r8eJYK1iPbhgwcbM3nzesvNRaJnXBjCEYU1DPDkM6t7RPH3qH1KHVjb9hFj24FwARQZFtk82oPHApaGc",
  "key7": "66qQprhdmvSsELWuv1XJSkuHxhFpU2jWMqMsjVJH2QyfXerpwx6H1Mu9TaaBR2JKxJY2ZUGG7cuy7LJRM6QUsMeL",
  "key8": "5Njr1KWNV76P5i1Svg4qGuJqUnXjFfpHYUPBjgnd7ZX7VrVJPg2MNNnXvbTirfbNZhz5gBkVZnEfoMqfNRy1ZBRe",
  "key9": "A5zqznStb7oQsfkUk6DVq7jPgtAByVJFejYEbvrpE1zaKkBeaqvCYLA5YB6HPc818LCs8vxS7dr5b8mW4wJFzBs",
  "key10": "51SHdHJ3fiijrhjoyRnMCYwYzFm6j9zUBEZ9jniG8DgmT5KxA31h3yMDv4rN9ih9r1DQ9eyTWVcgJJMRhov77cdL",
  "key11": "DqXS5YqiGjBhLoxSEWt6FhNG4YBnJoFdN9bStHE7ifRYTCFLEzZqc1GrwEgVwYZVQbVEQy6XWSZTtA7WpgnTam8",
  "key12": "2buDrvy747CGeqkbrymqsDFQ2pqsBXrBqpxXNE69MiT71PywSGWtCt4oj9UtmmLQgWaLv6DAgknYFnsiyFtycTQw",
  "key13": "5tpzT6vovCBi1R9kCnaLX2jMZLELvhz9evMmZetJKJzTaDCDRMngDBjXrHt4JjvUzMYG6neBmUPfZiDy9XHCqb1K",
  "key14": "63HkAE17817fHitfvq5CDpErxZNHdkM4Qc18QiiuynWExhSVrCayjMvBz9AN6vWmnyxu37Tcmpr3BJH13ZgeNGrg",
  "key15": "wWRcJKe8YZAE56jsBoE486xHw4gzCLXxEYYMGp6sErYsF7VU2V2pGwzwHehPaghpP22Lggn8j87HA4mJzyGRGkF",
  "key16": "4nxPaP8VEzh1myGcbLS22voBNZxyRwXJf6TEQ7B8gbE9U57p67jxfNdfrwsYDUAuNdaiiwZ1tdRWZwVYiNwLQe8x",
  "key17": "2EHJqJxdrpu6nJ27oZnULnJpvXYcgUtp5npJ4EZthj8n1o9BvXL3aJoYVPWKyZHE1VbUrP4c9eDBszuJkDoggWf3",
  "key18": "5ozi5SfDD4e8TFG4PABhSGgFxLK5JKscHU1PP5CZCC6WuLaEZ86KfkkF8Yto1rKLSvfD1qGFEtZjVp2wSkMxD1ar",
  "key19": "4hESLNEwYV61zY7EiM3x9NwL2bbZrm26G11Ak3NGGSuKQCXRrsaSngFvnfeaFmTYBRh6bkxs1He8iEJYoVu3dFnd",
  "key20": "3dzdzESYfUVUTXeZA248QJctjR4CtRz8PAzPN2YZXbbomwz5h5UE1kDQDE3UR2MUfrS43cxXyz3JdkEBiRr5AaBd",
  "key21": "vR5SCRJwm1DS6UDK2Hx53GkQ4kBjMo3pcje9paHAvYHGsoebxHR3ZTJpgFC2DHdWpcDuftPeA3KpiHmmoGuxfn9",
  "key22": "2E7e7E8b4Z3XfLBwJETVQGRJuaV9ueiShb7SJPAnKXgUZ6fkmFZLnVwjsHgq9jC13QLzMd1R5G5n8YuJ4KLNQ5ML",
  "key23": "aa18zeEyE8zrr2UjrD6fGVCuvviBDVB9DFC8mvBttwfwCRopa4cdQYK1oPC979RteA12sYkiKEiFws1gdvbgvbL",
  "key24": "ozXyLqeziUFJ1Bhwaf39URt6d8YaeJWiYdyjfLWWywUfzHDn39xrk2mySp6jCsA56yHMiQQ6U9c2cNdmSNxaD3o",
  "key25": "9rpjQ8d61wG98i1sspuuvvTMcyBHgb64T4K5VhNU459Uo8iEvX6dP8B2fVWybC5u5mRSvA998j2pn5MYpqsCL5R",
  "key26": "7skFPZj6VC8NvzWBwqnhE16ki5PnRqUHKGVhBF4PuLLGsmFojb9S4gSkXqguGrPpzCYC6oPE54jiCK4GvtQWSHQ",
  "key27": "23RLYDMNJtPfHeTDwoDyXrUkhWDn5VNE3bhqwJJ9xhap8QkKQ2PFGUnHTgiDwStnGG9FSxwxjQaMxiHqw3d21DQ8",
  "key28": "2pjCNUtsvtapH7NH3fp4C3WbXZjEhgo4QH2bWWankXK6BWfZTMggD3AoZXXWwd7XkBjgrn2E1ss9AAG8kEbtwawT",
  "key29": "5PT5DCgaqY7kkoS6G7gnWjBCnuUA1DCS5a9pHa2QjKRFF77swofSJFD8ERkboaDcGs2TGuVaSWEkcBy5Fwoxz9kW",
  "key30": "5sehZufJkoLPaJ3zHHMnA4pLnSvGxjidKTV7QhrpbCRCZR5j1JFV2ZEpsjw6PV61sGTY69TWw8eM6vvRHSCkWJq2",
  "key31": "421Y7Rxi591XmiXq6EkGXH5uRzg1G696NEwiaFqs7eCiwb7H1Ks8J9VsRyA8zgc4thkSHknYckcpqeuvrRH3Xrgr",
  "key32": "5KAB82KD8rUta8kpQfr25ApdprBmLURgNpP3qEZditzEjBE8KqovynGZSiaLJjq9ZwucFomdYDkAvpobE6zXP7Hy",
  "key33": "2UdBqjhhn16VxUDp5TceMg1E5DkxUovxRiuDX4Bfztwfb9vJu3YLeyTgKHCNF69yuVQ9ACLthwPVR9Vb7NKeFPWj",
  "key34": "3k7pnTjmb7GRZQdsysAUWpcW5od9CSf4ewWxjqZ5orkjN8EG6wco5c4UsC66GXo46J6tjFYzKnysY2hxHqJq17DG",
  "key35": "2J19Tzzpkm5spMUgc1tQHvN2aJgnk1XoostcVwZom5okKNhruPSUx2g47Py1c7joDtgGkMCYeLVV3G2uabt5Jga3",
  "key36": "hHRf8Wmvmw2xu48GZUXHu67wedSbEFyYsB9Mzk3xdE1sSShJBPo7Nf6JQfueNKX4EiHFbtdKnpPC3iPhYdu2Cuc",
  "key37": "3eiYn7T16cvn3Xw2Y9JGvopUQWdLMLGh8W6YR7y29UDxADNV8VzT9W9ErGukwKzs4QS8JjEVzxZdFVAhpEcrHMXu",
  "key38": "x18JELxiepTvRpyaBZULA5H472wnBAzhb73MgyMTgv1MvT4MMYopZjKWTRiGDwHT7yuwCcdnqstiw85MCB45N9u",
  "key39": "3EpTryw5FEj6KpCyDBFSLVzjKvvQaiarG3FbYKfszvDPSHQQrJbBx4pfL2eKHWVdgyuG711oXvw6Yvf4TJW3cFEG",
  "key40": "3oMKMCL9N3jSirRePRKS6d7E5j88F1qndZ35huxidwvEh11CKQYBSu2kwrc9643x4jdbL1kFdSxUU3qcDk8M1oio",
  "key41": "4pW2j1VSZqyyF5DkXgGjUr1t1Lj6c66zBuz3DnFTzxxG2nbByY9qvRkRDuEdb3X6TvG4gwdtsN5QQtLKXTqScK7E"
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
