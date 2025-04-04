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
    "3JMEGdCD7Cg6RRFzXabt4jX4XUv5YnSWNngW2dfLtwWj5iaJeMdXW53yXAT3WZvPFVYbPMxjCLdXDdFytqpEqK55"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uqRJfSkB9KxuEcbX1ELj2YQhzEMouDVAKB8Ab87C1f2hFQMipR8HzW3EJTkyoHUE1YjKNFuteK8bDWBzDEhkfM1",
  "key1": "3XwyXbgS1UsUjgyYLvuQSi2bTsuk7qk4eP7wS2o9a5Uun5if6zU1Sn9j8Z7XdNXi5PS5gqMVVv7kXdgsVbQgTgoU",
  "key2": "76KqYbqDSz3DjeJGF68DduG5Yurmiurm7C9RkAQP3ozmAJUEwrBj5a99uY4mGhYVdayg8EXDajJV3CbdAPG6ZMq",
  "key3": "3cnDygyVhQMPPK5hNEDyTj7A7xnXqjwstqchpaFTfqdgqwcA3faUy2qJvG56Rw3zxnAA6okcpYKGkGEemroUC3Gk",
  "key4": "5o3ef52YQuKBKCgbDDeYtP83Jm129J1D7swDwLZcfQdon1hBbWPxnBxV54gv6uJqthrASzeGcYX86uQZFFEhcDvb",
  "key5": "2MCfAkxX1vJwUtW1xfro7jwYN5314JNBsR4ssjNrYKvkk1WYN2e86ZTfNyK8yTDq9HnchoJakexfEhyYzGubckCc",
  "key6": "2mhKiCv1iGRpKzGdixMHB9HJr2cz1St4bxPFUBdeYLWfQzhkH5819Wd8b2dS1PyJbdivYVmxQD6Det6z4wVgy2nP",
  "key7": "fvRniRryuE1Srve8n6EB6eLhJTJ9SvGNmRi68kXeP5QS4m7v2yFwQvLB1dAQgQBejzAXh4FuuJHUAE3ZfV2RY2y",
  "key8": "2wW4tNpe6GfSWjFARR7Y9SckT2HA44PxaYGBuBxsRtv5DY3F3Gi9cGuQoyzHWJDxkijMGjy42fRrJx3BrqD4xg6M",
  "key9": "3jZ9M9JhLzmQv5MNxLtbAP5YHK6P5z9MxYiFTtyt3yJwFVKcHKg6o9Z5z7YgB2KQZKeaouvimyTqhSS8LEKDicC9",
  "key10": "25hU2JS1KaXXAt11zZWUschV5eFFm3QCmmAK9T9wzrQXJMkH2AE6ZAthjzWyHzzZuGDCPRmwCbuxrYnZkcarpa2A",
  "key11": "3MN6uaKf5WxSRnEpJd654dxMMmkNe9h2qYcGM9YjesdWHiTqcSozPCPycLi8Vrfpg159ipdTuX3DUvCpnj1owAPN",
  "key12": "4mH3S5pxwu1poUfV1QmrcvZpvWRRY822aLMoperGq17zdjSVXqYG3jCgiZDBq3J6sz7d3JsknmGnQTKdbta9FGU1",
  "key13": "czrzXNkGCnfBgWDm2N8WDpVeC1GB98UiHW8AiA24C6P1J29onCvJe1bccAHccA7QznGPnx4R6RzBaf1KeDgCJLP",
  "key14": "2bE1c4YqXe1maerSggJBN9SZKxFXdX1KQuocJXR9CtunkJopHhtqEfFWHNuPpnaYgjCk19WZj2piQ1uXk6dAZYpA",
  "key15": "5rDgGX7AcnurtnkMcr7AEhV8RDEj2C5dq6QJg5C6VwxsL9rRV4j89wd7wFGe6KaUfXziS9kkw21wBVy1SS58U7Zc",
  "key16": "5RcxUXvH7w7ZUVN4bKAwa2G6RXWzYzKhWGeZGR2WgReaVYnEFf9qeiwZ4yYte8gwT4KxG8QNG7PserC7Xkjo74Pj",
  "key17": "27EHKr6QNqhHk7z3iQ5iFaxpiYLAgyBnPfyhKhb6E1YAAWLZbLeAByo3D7CKTGY9LYdMKTQE7MvqtPSKVP4G9Sap",
  "key18": "5wgay8SJv1TvZzKMFdkTADZWNJT9P1RCSxgetz9XAJx2zumm53K8Dg8VijWuT9WQgAU1vyKycLLsMSuV8eX5rC9Z",
  "key19": "4y6uAbawWNbY7N44J1dhLuyyDKnMEzaPW6zp71BUVTcqCYSvACUP2viX2ABpHpGMjS14NgfgbkwJp2McawsZFtgY",
  "key20": "4Jk7rPJWWhjBt3fKQb3tDoz6zuo1JEyeuaCoCstqtARqV5QAci6RuCaTcDRJ4x4fF9dS3pU5bshGsEvJ6bucbaFY",
  "key21": "3wpgUzZrfs9AkoWsphRmU4KidGa8E8PaAHjT1yEZB2SHLSdYJaDfkXyCppjuUn2e53dNP97R93b1ke1uL1SRGdBt",
  "key22": "2CVfKQJkxYc1WVw3r5xnkvMz7WbGaq7MX4nq1SwQucTsA2VQQYXByRqs7R5awqH913ePTFwotDbkJhQtaKkKteMi",
  "key23": "3dMUwWZpE4LU8HTzfxj1KW5NxpxhVY5dBHW5prExA9QHNYS2HTrMhNescC1sYG4vNoU22VfabVHXwmoEuJ7QwTFE",
  "key24": "4QZgg5jkpqyM4g8E4FJknEoVaHZsBh55BBHZ1Jq12LKUDsXaG3xhDvgf4jZcv3uzkFht49M1QDvNTnD8uYt4xheo",
  "key25": "5s1u48D64uuc9CuZYPnVaCDZjmCwKqHGuynJN7fK5CRK928jnvZx6i1g8j7QhdaTteV6W8N8MVzkRnK7idngsvoL",
  "key26": "4E3L5b7L2GXLmupTcyD4wZQHCG8i7MBcdeDcGuvYynSR9KPadPEzdV1UFVN8z7f1UUC8kxBJZuhc1EpHVqTpeK2Q",
  "key27": "2DSm7HPnJ9eMpAkYNYVamFLCqbkkUTFCibZyXVpn3u2DE9y7Ahitc5SG2qBwm1rA5oeFKAGSsRJPDpcERiGto4Y2",
  "key28": "5oSbrGBR8yxW9kcMbhgoetiwoxi4Q3m9vCV9us94Jm7g5zk4TzpnJdL7DBd6yfcwfM5UtaAKUMQRAjfYXKEFV3MY",
  "key29": "241qJBwmhxHtWBfLCvs4qcs9C6hxVaWLLFFcCoBw99DyWCoNaMqDcPztLtG6VnWLDEGBNoWy211SQD3tpjYgukqz",
  "key30": "2CRjdV4B9r7VRS7BSJfJv3Mfmr5KdGmDnoU6sM6mmRGrhAEzGRCwJMZfPsXAqjUJhJ4HrEjEYiQKcHV1vtjBVh5v",
  "key31": "2pHvKcV6QvkK6n3DELs1QevsanU52VUPGbfy5yg3Pr13a8L5jjVEhjmSMcHbNm6GDRziWemermDasWPSwpHov1Re",
  "key32": "3YFTtV1KNKhYACmqobVR3zdKJu5B5DnyNWgKZnAJnvjsC24BttD1kguYEMtzaLfqnhvyHJnZbJ5E2D147F1uUBhp",
  "key33": "4jd5G1siz4fAyiWbb4VoShcwNhQH2fhneHLWNr2xSubGHK6ncEgknznSprTpDEpe45eSubmxaQZaUh941BhfPP3Z",
  "key34": "kuDdpHyxiNXY9U8rgRZPt6sr2BYnSaDw1HV7Mu2Hq5V18556M59xG41i57uxnZ8NULvnuuuLisVuzmphkg9oTdG",
  "key35": "3zTfJAypM1xkn8EwX2Rw5KXJjF3fYPvMGZShEBaJARr8HofR4oo78MohP4GhRYyVLRWpkwXSd23x1tTQzeE3KDSF",
  "key36": "5CK3HBnEiHJug62NvyNDb1EpMmvwPyZ2qCfbmEumhoZtqQLfQ2NMvbJbMvvmoFWm7nkqfYWJH5wAoAZetghjioSt",
  "key37": "22NGqTqakZxA9sreTcZ343wQinTZbSWPpmDhzk2feazYDGzLW6npxgUi1PjxudN33MFeid4WMQiVk5SeoYNR7GDh",
  "key38": "31u1ccHipVy3LrkDevqf7ixNhyncPQ8N1ysS6MhgNi1DhWrzNVbP1ahgGq4x7dhBdyrWWfFJbqveeyBxJugL6FoT"
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
