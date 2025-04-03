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
    "5rHBkGaXSQu7JZPhwQjgvCHb7qmPQXkMyzPQSmYyroTRfiEjcYedR2SAF9KFSYPbKc3LKrBQZ9X91j9wEiJdpQsq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dBHxRfGxWEiMdDvwSkXG3phhCQYsKGYTC3V1mkARxaqj9ZVbopanAvo76VV1JGhfEteTPeYvzZFZZetg15TMjy3",
  "key1": "juFZCLn5NtfgbKNUBynGiLM6d1esXCMZgaf5nt4VY6jbLrDoYJgRrGsQrXHYM7hNaY7Qy9pUEgHDgEjP6egDgCC",
  "key2": "2EJ2XpLxQxQDYLo1kC26N2BKeqJGERvijj7LFSehFmdAWvFVVYYn6cPMbaU4bQKeEZx6w2PA1nJsD21a9iYNHr2j",
  "key3": "3VPx8T7Cm5SKEbJ9SxiXrrB5g61aEgTNAzDmitEhux2wLSb9DTeNU7zbQoku3Rrb7WiHHdBJApkNtNHbYq5Qmaoc",
  "key4": "4BMAaSGi3NLW1z6Mma6L6NnCWCL2E5uWdau3JNaySedKjdhrsvp2dvToMJEB7LnFWzs1s2Ech22pKRudAWcSLUMk",
  "key5": "kzVyzDYcEBsonaEcABndiUatTXGs5MoJBvmAuWreVZuDrvhkWExFrpJTshS9FtyVyyE1CnMqbuyGJzpuz6BCotE",
  "key6": "3o7u9r6inNnPfRzZc9MxqbPV4Q9L5n3HKUY3HxiVth7BzdPtm8zezPcwqmoa35e9XmeSkB2qQ35X5mTqkswkAFUz",
  "key7": "4bhXPgvJyQjzAwF2mqxvgZVcNSDQBebH1oS4pARAtmQFhMeJX4Ftn52FNbxFgeoTQ2jYdWzj3K3sRycU6tShve9S",
  "key8": "JCGhCMXb9YqxixkMyXfz64mvRn1gzrzcg9Sxu1u7jH29tkf5nf2CBTZrPaMXuD47pTGo1Hu7oZ15CPuteCUW55Y",
  "key9": "2sbGXvnD89nHZVbwSn2z4iqWevm7wwefm6SnKeVDWxHKWWBUeymJZucq93WuQdcu1vuYiohHDd3mS8hpKqR7TVva",
  "key10": "4T6TcskwdsyXMDqHoQsguXJ7W8GhHTzVGHq7qicVpFWbD8hQVoH1JJJ5faEseZGfakPbvRZGRemK9QDN7qBiXn7t",
  "key11": "2oZxXfcdPjhcApfNUUGM5CajgcUwQDLjrRQUcEdie3HTHNVKFMg97WLB4kDDEvEhDuLwd8MdbmJBK9m1tTzEMJLx",
  "key12": "2p9mGY7UTADWPdhy48osJ5cUb8w6pPVUVtCYh17wogVcExC5LCCDrYhPCx49qxwyiVKXN8L3pcKYxRSd1aoEYz9z",
  "key13": "3barhum6aMYPZQEQsRMuECUxU1d1s8uRRETf3RVzgH5HVr7GJRswYpH3gxC712aG8DyXcdTMPjSQDdHFrhk47UDC",
  "key14": "3yGVEB57w5ikNjjXfyAe2F2qnuom6imKWUrUfxrYshUFCe452CjxBc78NGiDuMetWjpvZRk7vRVmFNe3UVA98615",
  "key15": "45NwPFenX2i7MjtR3ZYXGzvFW4ep5tWnwHKWQiNWxD1ALpsbmrHqDPpg5oxM55isETyFLuaJsTEiHtxCfcRxLm4F",
  "key16": "2yXJqGt7qTrHQgRjyU6sHbecVWVqncqayfstmuajeRgRiEH2JaR3R2zd6Q35zF9CLUimDFF5ow1QzQP12bZ3ekow",
  "key17": "3qLidYbY7FEginXKxCUBdfDQ3H9YU28GSdacDpxYgL48ELfB3NgnojkG8Tc2ucp6aCfiiXcL8GirdvSSV98hmG5n",
  "key18": "4Co17kMNjpQqNGWzcRMmkdyUqo4C5jrBkmFarurpGdVy8h8Hj3tGCMXRd9EasGeiFWcSkYGqB3z9t8kCdAb4DQhJ",
  "key19": "2fEcxAvdD3y4WZE37eUzYwhnLZ9hbRi1jeV3pNoEzoAui2qL3eY5SxrQb9wctvjzPKjYLtSMRHyP3eZ2LjC7XYTf",
  "key20": "4N2Q776V2nMtqnN2uwDYYwC8LHJvqfW8asv8LpsbEthn4PqoGFVAxHMDjisZHQ3yEpzFoPcxKrkkZDLDFcLvidBz",
  "key21": "5yGHQtHNPXQfKkssdjzpQJsCvikxiXLEypDbNic7j7x3PiH1kZqxfNE5jwxoEXJexPsqzchfzx2rvB2RB7erRxq",
  "key22": "2jozrXXyaxev1ynXkiS3VR6JpcvFSWMZmDs4z2SLKcr9diNGrgG3o9dxmJkfYb79Z8Kibm7XGMcQmvmNX9ana2Kc",
  "key23": "669cG6kdXEURkekuWRdPJcJjDSxBQLuFuRPvmGpgTukFGiqMvABPPYtWmAW4WwanYW4AohLyKuuNrhPAQRGmJYAv",
  "key24": "4mG3LyiX4mS6gLK3tF9EDC3b1rq5fU4rXxRqqPfKG4ABbhigxzcQBUYrBE33KZDFgFj7J76xbWsGcXhAVLmrZeqp",
  "key25": "5zwwc98tVUeyx8nwz3DtVtUFjT1yf2g1Ex8e8hhzuiAM8nxRkjji4FWYwgMvZczjgwt2YzbTKyvgsvJRyKfCL8s6",
  "key26": "5PELGLbkRCA7vQNFYH4TBH1n79cnYZ5DTEwDxvQUGUTydXpQ6pF84oM51MNqPiwV3gTTF8sXu2TRAcdkW6UFDGnN",
  "key27": "2VzGvQmT2SRGK2tS4ev8UkeEsFzCgYrzafwM6p1LoQ4aH4XhnBRGyGwoQXa3k3NjmPpeEW93yr6JJJKRZCUBePSs",
  "key28": "35MVfws1sQrthF95qdzdjUvFKhoZaK3byLQoZP4S1ZfVFjKx5TkSpZ9KqbP2GQTPR6cCsQkPkD4LmAtE7RuVicB3",
  "key29": "5En1JBaE74fdQawM36noBZnN3uuCX7vfsC9VqpzjHJDrjhXxjYVBv9q3LUvMDHmVkT546xhviNsB5bfPdVWiYcMu",
  "key30": "29HAHyZgMUsV28CCGXRZ3ffVFvHevg4KxoZsJ2JXLmaPWkoX8v2bKfseJG7FU45d1zTYUVHAGezYo4VnJx2tAfeV",
  "key31": "2MA2oY94uS5dse4Ub9mCENwwzunxbK2pS54ckPJ8eA8rsFZFLYkyEA6n1s5YDoAcMNqrCEaGjR1YaT9oPwHLmqGV",
  "key32": "2MkBeh5VkXnekVGHDwdFZ9RT9EumCsHJDZbmU1E9NKdcwqXyy6D3EfCpEETTfnphKM3K7gW32dmLgA8UyPjB2iiU",
  "key33": "5HdH4ZjgfTashxGEHWMEWpvv2ZhuVLjgUeWX4ZPrrSH4d5KQUuZu91Mrmu3ms2iJdHNZ1aEguWSeKymMavzJiaXY",
  "key34": "56YUzWTqDvzbosHxQwceA8YcnfanzFedpm9x5RAvkcsmhbzqisE7hqLsoX1dw4AnPwLCZbTyubTu8eGDUg5EVXc",
  "key35": "3623rJnF2a2TEuWj9QqQ8zLBAje8rcWjfMFEx636b9nrBCWSFPZqafYLsYd6TERpbNa96Q2R9XtNaDBaPNEv1HEy",
  "key36": "2T6fs4PXk265sTfeBHFzBoxWDvQGXJnMjitDigdFNRYMnKMXMVqyoaVS3m6oEdX1VAu9pUj8dFEQZHhum2C7ti5N",
  "key37": "2MVXmBnXKC1EdrKzZxT8sati6hV6YjYJ34L3jYp7HkfQWz6rPX8UBAduwWR31umrgPSu31h5sHQWvdzUkHZZRYE",
  "key38": "2knToFrYrD4fvG3L2LwrJXQU5YNVFUPTtcNvPjaPS9pRjXDAnqFuaVQxt2u42R6MUHvdCowM42SUpqADGDXj9oYc",
  "key39": "r5J92s7SgN5S5HqCkcNg1GU7Jc5aA9nGDuALDSjsVcpiG6BQkwaUdXvqPMkAwAhvQLPJKHqGwvwJZbNKf419HU4",
  "key40": "29aiAMT5RGgmpyMkzmSbZ16zKPpuSBrP6ygtN1v4JwHkzHFgYqXriPNTNgNSBuCFJZcjEzXQG82MhgTeR53zWDZf"
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
