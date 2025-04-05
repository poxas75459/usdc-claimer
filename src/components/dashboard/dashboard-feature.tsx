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
    "2SApxyTBV432kHwKhhYASRDrFPXXT8bagTg62PegvroYTBux9JvKW4rWKU5bAgik8L8dh2WiLyb3VZ5uKzG5hHzS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4kmMfohjy18CAHS7nxiv51Tt4KKpWBBZL86GwT1r8h5CtgfKkUcjcFrBSj1ey6CPMdtqK2cz57TphmCYn4xwhx5C",
  "key1": "5fKyzNFGLpR4xUmLEjkv53HnKEmeS8X66ZWjYRFSyJJ7CbiqJFr6wu4umGYkxyFdnMgx1wmtLZXm986vfq6hzigj",
  "key2": "4uD7ZahEfZRQy1wdsYX48KtpC3jhdrcVPq6U3v1iiZirp54mzyUKEDSpMSE1PFsJU3fqcAhDUJKbTc3Ygi4FHEoy",
  "key3": "3M3vhwkaM1MTiSDHWtLt5W1nWZNx1qirQMYsi5x6YVaipcezK7nEHt6rJiLb86Z71cqkh564zxr9KGKAN6t15Xb3",
  "key4": "2Qg46QPAWzoTjBmKKK5Q1BEipqeJ2oR5sboX1NkN9h4dUQnWGjpvHpeeGmqAgexKZ2g5NXZzA4EAcnVYbL4L8FGi",
  "key5": "4dUtjSXjUDymutbSkw3Vrd5pjofAKb1fA4YMJh9Yc3kzdTaxVDh6YCGwwzDRB9j9ZGa27WwAuSbRvrvtJEWp8B7P",
  "key6": "3ZY4np6DWxXAerj9B3S2p5r5CQnuYeaP9HMaBdHHgjZKHHT1T2K7ZnMxtFR3yBDmf6BdmVUr2ZUuPEXzuk5Nf4B5",
  "key7": "4EVpKKVCGKH7JYdpw7P5G7X2torwYxjjNWhiWBfqnTeVesLZrqptNteYMwCCoYKZAMDJscYF341qgWAPh1eenQGC",
  "key8": "2d9YTBW5xoVotpMn74hpMMpB11rMBwiEVNc3FEidFouW32YJydhP68mczq1w5L7A5gXDzheW8PvSYbsTws7UuKGQ",
  "key9": "5FAGmyFfecEFXES3epFzQGfSk56w7rnE9DPjQBW9g9m8DUpTCcbng3EYRFDPZgRvf49zF3Ws382tEVExveJeJtaK",
  "key10": "5zPnFPSuT6EBsVtRGXaML8N2Q69LbCta71T7WiPxUxP2CtDLimnUmGqTmr1xEt8T7hcaTJiFWcWiVaBWHJ8kBjjQ",
  "key11": "5iABBWQ9gTyqNqvapruGqxHjizQ44rp7A72YbSUCfWoxTgs11dFNuEH2hFzi8edC8YJg7CCt52fUktsNQSo3pGXZ",
  "key12": "5N71DvMkk2Fwd5aLLVYZmkZjZh48xBHXFw2H5jgnnVTJoCzXH8V3Ld1Uj9j1Gjfm3ZpvX6SjNxfZXW9zKDLH7Rzp",
  "key13": "3gn4xnSKHg8ny9UG4DHRum9rkt33qyHS7AwrpBVApqdw2hc8nkZdZcwYsaE4rrDQyoVaNVZ7wjuHqtXgHYSreKPr",
  "key14": "aRjSbgq8J2YK44UP488vJYxk5JY7PksRHu5RhYR2gTQ7LwrvorprTj73kyv8XfbGPy2zVqkiWJmAHzoqBatTaDg",
  "key15": "5xWW5pV9LQZRTCT4Kkmhhs8VLZQuKfq9NpTS2dCFHz4X1z7pQjv7fG8igN7vfWSM6MEsaG6WTEf3DP69ohdtBJYt",
  "key16": "2CYTKwRNd2mQwUe6JkktbTJx81hNfKJy1HE2EWdMpKPXYrVdduPgVpVnk2Xk3S5YmqJYkTiDkDaJyiKMnd16yw2z",
  "key17": "3P9krxK5fgvbksRkZEFFfeVQS3XLu5v6Mc1s2SkUe1Fga1wkfVJun3hFYrsE1ZmLHn56Hfg6xLyM1wFBH2VdXAf2",
  "key18": "65feUP4g4oYZEDUnomE1hwhKbrQjCEWCuB7hzUHdP7B99E3PkqZVjGJmguEdogZJjptzhF8GqZDXS7LVR3Y9WJof",
  "key19": "3VbLFMteh2n9VDKozGcCVzNh8fJW3dqEBMv1n46VunQ3XHD5CFJtbQ1Qvc8yWBWeSwWbh4xSq2TB7WfbbMwTqHuz",
  "key20": "NbUkqMmRHosukDeFpXQXPaw8upa2xRMXNxqtJd3nyNC8dRkfKXmGBGAFiX3iFDUqsRJsZHbr4nvq1f8XSAKzmDw",
  "key21": "3odXYvfLakUYCE6H4uuN6McZGSHWRCUEj89vtc2TWyhpfvpxscpmbfYPsYuPpKs4zSHUM8wzAaNYQCd8PRyjDfxQ",
  "key22": "47YBuDmKZ9YBmjCpwc96Ftp6nTjdniSwr6ERtwXRb2k3zNLq3BqGZPyfCRnRA7QN2uC6CqvvgQhxSnjzHdiy9DES",
  "key23": "RkJA6a2VnGfYhVhyR1tyVTz11rYwkJ7iuwk4ypfA2NYoNDwuo1rtTqesnJQnkx6CQfJD3Afh3zRZw4i3N9L4gtc",
  "key24": "3akt9LgM6DeodWYGZCf6FbJ3EWeHQ9nDnEtCtHYRQ8GUQ85eJY8jG1djbXUoC7rH7kFjMRLoi14fDQh14vSnr1Xx",
  "key25": "Dk5XSSZM5CXpmBYhDVJh5BvfV3XCsPQJj6B4PMQ8r6byiZ1AP9nf3R5jSu9ueerpQVR48pq9fAyRpBjeHVFZYU6",
  "key26": "3cvjDnvMtk4hoDBXfmuTkSR9GqgXWCff8EQzziXFHiksVDvuwPaLxmzyaSzhipadMBZV1uKDui32YeXNP5KdLuEG",
  "key27": "3yWEzsXuKCwiBc9SwLXdHL9ke52CPapVvjG3tqAekjMo9KenfRJqk5WperYLnRZe7dLvMkFECxevMHPhaGfucrRJ",
  "key28": "4VDZa874YibTA12L9fQkwDSm6wzaydoEAcb1pFP3q63W4wFq19XUMW89tF4ArLc87cwv6rnGXfwHtGbEDGyNk6du",
  "key29": "5VwGA536b6wHhcgR21Xb1XR9ZhCF31WtDWWw1KzZhuvwLLyitaYv2Cd4WBaBCVAqpknDa5WoxfFg9hzKzBRr5jMj",
  "key30": "3vMdLzXxAH2QKAuxywB8YKM4Fz9KwRVKxqRYmSrGWoPLN7J62KYmbdWCQS1Kk8s5YzvX1v5BGLeaQnPtkVa6ptrW",
  "key31": "nLDsZSXy1DtQWgD2A7mgGcQL9o7kAu1sk9ZoK8zAVvrK3G5YcUAG9RHQ8Q3Hu2cduqx3i8eESyFiZGJwhqAgkcj"
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
