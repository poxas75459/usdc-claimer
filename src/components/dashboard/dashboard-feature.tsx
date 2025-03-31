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
    "LTMMeiW1hkNwsK1d3EvVMqmNwD5VxKruzY4krewc88V8aFgZT2L5yPaKiSofh1qTTE9iVL2McMFikD77seRmA9d"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5z6mxUkH1xWgihvJKXKSqCE67atdvXKkLDcvjS42C7CuwKCJifVz4reDcZitYh15tzLWFrye2jXjbVXN1AYtCoR3",
  "key1": "3fvQeRK2DHKakytat6D4TPKdhM81DtYEn1tRR7VstgTv26i4pXZNFyPhDUHKGvGrWDioJTkzmF9R4EtVwNU8UJQn",
  "key2": "31GwGNekqoULT3Bdu7USE2uPwT64jUTC6kCxPiyKUx8BeTc1rfygRBYsqVCoQLjghBnzKvAuTznvuB4C3Fmny9ge",
  "key3": "3CJ3PDa6s3Csuzw973MEcwZvgNh6Jh76yKG9JJNtFACCgpwscnWsJ9hx2YLMnqZy1XoSgBM4wVMtwtPDoM9x7q2U",
  "key4": "33egu5XD1mRiJzEh8B4HGrUxrNVkNAea2TwtDVnr2wsTw9H2fakd9jLw7RhpqZ8A4nmaadvChbDHD84dNZTqXZxr",
  "key5": "3XL8j3AD5TGtouK8kp3Adj61pWyageNkMeDsh21tQCatipovrKDfGPYmGQRvCBQwUxKPRAPmawXSnaDv4PC6wfGW",
  "key6": "bKTV2avhGKCzNchNdyh8mgThcDtKaxEXrFaC1STMx7tFixGDr1decAeTF4uE42Jc69kbJxXSsXssQsFA7e78YEy",
  "key7": "nu1xDu5VgPC2RTVzhCAZeQrMy4NzxfiJMpWGyTnp6ZfsEvRbcGjQtYEqkidikcEzew9EN8aFWhU467YV5NeRqLa",
  "key8": "5ZmHKx6VSbUckzBjv8NvaC86jeD129br1Nx2K84B7m41WPJAGvBSA9wN9hM83Kn9zbt2v5sFAeJEyVycK4M8Axzm",
  "key9": "3uYK32kCTzrWA4PvfHZwJtC8Qm68kwLKZvhRTwNaTHr12Py8iZkGhgQwnwBjGimSE8XKbN5Ez1DXCZ5ajmtR9ph1",
  "key10": "iGm2Jiistdsy5Waok5bjujSuZsbUf977DfYWWAP3krzSPrRaEQmmHVkAye4nuQNX6ZPodwKEam4f3KHDUaeNMPG",
  "key11": "UxKMA3aUct5r7AEDhcpAXoMVtiSgbw29KecX492oXNvPH4252Y6JVvvh4jgLgo2mDmkAKXaULenB9CxzuQc4iXW",
  "key12": "nia9ibUuBhFSDJdW95zf9k1Y1Qrdnstid7v84c5MgubaHko8kW9Vq9C9GXWy9t3FPQsnqMbrduqrHmYxEdCAFmz",
  "key13": "3yskRcPXMswZTChMoHY2twMreSmSAFae1teHmtuFNbPtBvjtfUavUimWrt7KnYTKQMYX85gL7bzvQm9VQiq4APr6",
  "key14": "5SN3Hz49GBdATj6jeZ6bK4MoRPM4RV5a5LkRxdZHWVkBk44wrocjr7FWztN5HQtkeUwRb72t4NNw1YMvANJEDYkx",
  "key15": "HwW3XicuDZ6eeKb8SrZ2ahqzcY8pjh2VFoKigDjxwMbY7hnaDMU2Nbd3PYbd8jmvEUc3WqGNsmnihU3uGuVvppQ",
  "key16": "3qTmhWzMmodV1yXAm1V5bX8oXVh9Yt956X3Q1c4HcsH1v1aahLzpzZFc2TJSxhY1zHGHJykRjhmUxYbyeWFMuiTH",
  "key17": "4k9rkXcdrnT1QSMPTNYH6c1fW5gjMtbmSYdtkGkNg7pqxDnHr6JkdCEVunZyjCpGiP9rDxtLGTRmq7tR6RaQ1zJp",
  "key18": "G1ykP63SywTVXJWoUxTBq42A14mWeXKoTeVbnJdoJGHNJV2rTbkCS5SXkwRxuYgZZZdrJgCrEFkM7JCkfqpiw1W",
  "key19": "2PtWkTEuQvLoKyViPNAWqkSJ9DycvsU6otRhXhhs2rpSdVs2fWLBUfNXpd82MXxZBG83Wne1ddHvsUURdYW9Dsqy",
  "key20": "3UQRAC1aw4cHgNUmyFxNpyuai3xpPVrPBb6jbJqpnbNSQycnbfnAKrFAgF1fdA9nt6PPg983dmGu1JtRCCrstLxG",
  "key21": "2MRiYfussNa13LsDoGqY8hoQPD5JZJApHYpFUoSRNFkqAv2fVR7Pzx3f2yKKpwxtdnjrqHCxD6XsvmjYCA8bGxdL",
  "key22": "nSXRb13a5fmsgau9RqwdKxKhvWGD5mESksfguDR2HW86N6x7u1P931pwxsYWqQsgueHaor6h27ykXhgJinVhWYG",
  "key23": "xE9VPEc6jNZPXHmetRaitpPAdmgqKLgTdiaTKpfhFqAUkXyAEj5aL5nnPXc2pB51MzKWK9sQJQBB3ivRcT6GTQk",
  "key24": "KVNJAk35xRCyvfAjRjopadcEmNrznY5L7KL6TZP6NFigytMngDzNy5N1YQrHztUvRFMHyHYW9Q5dDD7uooA2aN4",
  "key25": "5pPLd5SGiqvhEhznqJoJPLRUURpBtXTx4RSyPR1fgjvpNx8PTpz7cW4HyVxEXeEv1zY2FtXHCZwoNZyJqYPSyi8r",
  "key26": "3wcMWyu2sfF8faBB4QFvUENAD28ThbE41T8LPeSEkimzWadcYctf6F8f379uGh9BWKG1rSJhKird2vNVeymfwZzb"
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
