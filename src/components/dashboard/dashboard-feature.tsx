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
    "39JnuAVgm7Si1ARke1eCPKmCDqc4bLJTKoRwJNX9gcTTLJG2cDfkYzBqxiRj6xq7zHqNbdXk9JVYe1MHoACghXWa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2vHoLdzNquuUnPMWhvRGKTbj8qBxJMLptJbJ551gDj7qiV4nNoS5cVvrLFt7NZf7iHLNV4diHacC2G8VYrn4iehQ",
  "key1": "2UMM8pVtSVZicHNL9EhQQ5gNi7r4rjgPdaWk1mcHFfzDeaKVPWro1cRkxWsebYm7A65upbEvvDZikE2G6GcnxdMg",
  "key2": "3GrnhV5QipRijvrZkoX9UfFd5i5Dg97QkNtksR7Qtvd9CLuqVqEeuv4V64GG4UYcof2prUb9Hexs1BfnKXen2N9f",
  "key3": "5XrDdZKC4pURExkMf5AmCzK6LHLyQqCXz28sEFMaYYAkntPdMNtsuBeat9AsdoU1K6ABd2x4xaGHS93oxio1drpY",
  "key4": "27H31ugDP4zmtTaGx4r1LRKQXqK4xuGKK1FHR7AW5A8VLgGwF6WGWCkWmGLUUdXraiJCEqriaEoJMvWc6rHypcfQ",
  "key5": "kXpLcj3QfyxRbrKdE3U9dr9Pa9VLcYjk2Es8kLZBRE2bviAs4ZBsYhaSGJBbvAkiy6TXw3Ec3aFXEKsQYv29pfb",
  "key6": "a2SgWSTvQXSsyadqqgzL8c6yRuYN2P8iCLmfegDKRZEWwGquB2FnpE94h4hqvqMCbune1SRKwBec95voiw8L2n7",
  "key7": "2aktaHot2fdSbFNACygLkhj1xrtwRLzFcWnQa1TXiQPmWoKNHgjMQJLtRRJVeENUxKyWErTvQFbeUA12n1Hii5GL",
  "key8": "3W3PdudFqz6Q6LhvzDVBTqavtDYBekav7JToc2LcH5pfvnY9gMJtJVDHjjJXBqEELyBDSMqBji6YgQBPpisjTu62",
  "key9": "4Y45GkeQK6poW3eDXerWkbGMxKmDhygTnp6gUZqM3pjwHEem352JETY2FUoXNex8K9nhCRQ92B8zvxry3pdaY26K",
  "key10": "59JMKRDLYutSn1QYNEoaREREwFARqFRP2u38XoDMkNWDUbW3tu7Myrv5N7aaEKZxmtwiHKwMNvfJWgGQY2uUiKLA",
  "key11": "37ZixfmDU181pgvvLxu7y4xJDbxehG3Szyui5tUdvX75fWv43hP1QnQu1VwRntecgFLWNhCg8s27GVBNN6Kq7N8e",
  "key12": "3LmrbgD3XsbccZY7QUVrKZkns749LRnxq67MbKvXSKsptpAC68Kv6bYPHuKphu4p4rQe1rH4i7RwivKabWkhAded",
  "key13": "3hMXN1Vw9wn125kNAV9fQMV6c12fWhJAhYYZMkmWKXboH5eMnZrJEfxYuiE3reyKVu5zv3H9hDiDcXS4LF9o3ZTR",
  "key14": "3cUYyMHeAz8xbXZKTjVr5sEsu9jLDrztqLzYGtr3oUZ189bBafzCq5BBgK8BbaasgjZLWFKama1tyJN5pQaq3pkt",
  "key15": "2x6uMerkfkiZfQJrfMbxduDeSCwAnz7e36S7Ns1krnKSC8joz4oFnCNodDXoSUD87Ccfzhy9FFBg9CGkDjUytDhY",
  "key16": "5x6Y3DkUf5sDCjdZNLRtrmVZR1onZHE5YjRqjnYZ7TDr8MhtbKkcPtJxTRqaRqnHthSdRTGwZzEkEWDnTg14rB9G",
  "key17": "4edAmgq7LX2VSuZ8cwdGYTX4kmAUARsV3DkY58rSw9BvDM9byS9qLw6CEih8vxtMAWHhf1XgpkxqLZc7RPrNGbg8",
  "key18": "2eNs4ieXuNJ7FkY7yNBVfQff1UDDRcNQJvk3erhZx8xxBgLsEeNC7PnPfEukzbck5KJwYPv6G6T1bzeXHpcokTKi",
  "key19": "tm9NpxUYxM664bJfp2eKYX1GXHiA3o74SCqgMB6czvhG1T4NFwjNdjnXkfwdHVHGQbZpb6aVThnhD5yzTPkDR18",
  "key20": "2QpTUKFvNJGevqWAnoWTmhmuMGeg51PXrNoqdwD9AwYVzdazLYkRPF9GFvwHHbUiKE5dZb9D64eJQ4XTNyhnAXdF",
  "key21": "38Rmqx35qEpyozzdMfEJsp85MGtbFabk8RYgVYJ2g2vnRFiT3hWVvTknp8g7kLj8n5KEzN6UzEgMpSuzUrVUWAYG",
  "key22": "zeMB81er8F6LopBpkiVAiirXXwBVYseAQZtUmaW4sR3Djrt273FiPXrQwgzuW2JdrVAjtjjSs92w5t8zj61PFbb",
  "key23": "4Qcv1MwnV7CtEcUC8W63E62cs2jwzpZF42U2ZZazqzBJuEXQUyojofKsHwiuVyufFiFLzt11bLfF2wzL7bwiFPA5",
  "key24": "4uDvUicPi9qBWYeCgWkYo2J36hXNe5xzkQV4Svanja7SV9iBTQMQnRfd55tpNgCEXDfWs9NhGpkNj7pewQPcgNaV",
  "key25": "254ZZM8mLzBLDeJbu4akTqN6i3naGRXNG8ssVUno47vD12CcGkNdTnSYsy5kyHrTaJjNa5mesQgQth2qZwmBsM9z",
  "key26": "2Yy1wZZ44DBBaguyypTaoRQM7XZpgS66UqNdKdYJ5xoYeAoBCvwNJvtVtYXbiqmRJwBCvM3iSNAemjnwoupZuT3X",
  "key27": "2vgAevxgRRAoQYkW5unFXwvVsL9kBPxP1mmyukA4P2kJ8zWdB2f5LoJKuxtjcLGyguP6kxcvd9dQsgMSTUb3z5r4",
  "key28": "3zKcFR2MGiVx6jQWUTy176tkvUPSVXBzVrBfq32VDPkVDxbkkfWdH76LARhCy7JG1K12MGLwzhtU2XAs3c1tjpWY",
  "key29": "4oJNwQUv1JTmLchThTFCRkPGQc3teQBssvZRsmpsM7BvT7KAHPvLyht47VbyWSKjKDJFNAtcyhE1oxkqwGJ361BE",
  "key30": "2t1ySDLfTpDWxWyTd7qnRr9WGmX17GMPxA9NqyfRjGBaNyNCZtSZHrp9ycsuXMFQnd9S1toGEwYbrWTJmk6TY797",
  "key31": "5ceTmYfikp2EntJEdk1Dcasppff2555CreZf11k3kErc3NGUV9eFnS9syr9zdXHiv53YxJVqJYGABfnboppZXZ5p",
  "key32": "4BoSP8KaT6saBdEz5KpxyhM6FWwQgaRXFcE9L259Sk66vnGQm5EVYCGjQ6QsEG1dTbwY1vEADiNodfSSmg8DfTia",
  "key33": "i1Q6iK8gRd13Affx9dwmPRxRjBjFWQ1wrwsHHptmdeJAS4joWodAAiaaqq2cZcavwTAKq15WgpWcNFt3mj6N4Cp",
  "key34": "3zArYpa86hJ9RssmLeXbn6q4bwnfe5vrz997cswNnQ9SqfY8wvtTxMrxZZVJWakKFNfnMa6CM4D5N5ziRXrHUwvC",
  "key35": "2WPMn1gQLzzSwkcWsqM4NFqv2mBCsW41zY17c4SydcV2wGxaCqJbthE4wyo3M5S6EtPZ8a5AFaDPXymkypF84igs",
  "key36": "2LLGucDKcYri9RtDjSt6fQ655SbvQkZHtd2fpjoCeHrEhStarrGeDuLuUfX3Cm4kE7oeh1LHYwndWaRwrDhwa8Qd",
  "key37": "391JtHWP1Ba7EnL61yY6my1rMuVVmAzHUUppmTwGSwsZ8JgFRDMEbVxwRRfDgrPum6KXs3GJ6jVRKaAtHirsHfKN",
  "key38": "5xpa1Z4UHHRZZSNeKDMdAnZVUhH5ZKnbq85KtxQTs48KN8dKwFgSnMrMKLAQWRWf6AZYLpgvwU5TL7Ao5gcWmFX7",
  "key39": "25Xfm4PL5jrfbym2ahYVcpKxk3N8NE18r8Kso3kwvnpzhnmFXH8ES3gnnad4n5jtbCM6f3vVHWjffjTtYAmgMnmi",
  "key40": "43a2UmGG6Bhxz7zNjXqRcPZadZMDddc3QYfXbQf7rWYBc5V833prAgdvjpfDUX2Jp8ohAPEWKF1dToPWEmWBeH5j",
  "key41": "5BLdDAG9yvLCNeAd8Bcg5P67CaiHBgm6wEA2QG2NfahSxgiK7aYxwW4Kkui9tzdji64ETZdWigA4fDMhwtzbx89B",
  "key42": "2uJPLr946YP8HJtqNeDupYtFpv7h6EWjRW3XsLtuwcjNpRNXGXPNmigAx9ENDgHUmvdeoDfHQXEgDEJxC2PeJnDY",
  "key43": "3qq4Cj4bf16pXRAdB12LTbnqi9SBv5BFRk8ViWPzZjYgDCGAtiGzfp9psLvwGAUdRGQATnJiNzwDyE2xtxXsTkhH"
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
