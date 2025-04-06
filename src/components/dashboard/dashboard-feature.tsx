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
    "33Rg3KRSGpRYYsnjFwDJCRsxZZi4ckYzb3HD5d5LdtbfLc5mNwJpiTntGELwLmdsm8VLScSXcgghgJNpPfPJsnZf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2G3kwvCoH4bX2Z9XKr41WuCTDzkdRgeCQjqdyjtdqp73GdU7vQpPqHtx16GkAEZQZ9ZL8zAWxHni1rqVTBTjw2N1",
  "key1": "4ky1rrxGMsVcb1aKNNCPiXJ1qcLQq6TyS8qYHnYj4R5WyKewzSAKgukJ8xLRwUbHSKRAcf4HtZQm3FiNALPyR9ZF",
  "key2": "62j1s65HcJawbBfwggBBNKuyb6Z4EYnQAB4UVeViRt2NC1iGVxD6NzkSNtzPZ2uaiNEt4kg7XK3LyhAuvbPBwnTb",
  "key3": "61KyyE9nnxXdYvS5PJxf8ugR9BouZZvhpffuzsi3axamoCdt8xgHVuGM2Tepnkh1A1js6ZviNoEgs81S3vwbrRHr",
  "key4": "5srdY66G1c1Lwph2yZNdMxPcspEuD5MRjstZmxuSgD5mVpZmBRbrWAMipNAtcJgWYnAerUjktt6dVnDGq9XbKmux",
  "key5": "J2j7183Cxh7mXDJhNNg8DvhfJ2isdhHxKYJcYkWrqGhVZjpuGiWe6wqhWZ6gKnWntmmm9j1HXL2QrWRKPCQzPQM",
  "key6": "2bDf9ku8b5wedi48RTo6VQmiQLN89SEAYykBqmicbDo6sJ8ZhH7RAFXTb9sp354WgPKUcpoqtHZR3z5urvoQhdFH",
  "key7": "5w8BktKAzasW3sDQ9CGPYDbSMvFFzE4GZ8SitpqtaXwmhdBHcwu3HPEgWR7yFadCXKRWoce11AoUroxgGqg12dyJ",
  "key8": "1232HSLWeJ3SDJEXJ2jbFzbLowcN1Lx1Bvxapfik4pyRNsYNsfWwURdd3ijhHrVQqc1c74eAqAuC1GsQwFaE1pRp",
  "key9": "3z2VvgCxv67SFWn173sCK4xFprJbpPg6sFdo88QVL1eV6dEVGAF2cTwHAhBC8azr1shrhCXNjVP1riFTUmwLGd2M",
  "key10": "wqU4WjbkbELtTh1E8hUSE5FvC3f7Ec3k3wBcrcWjUWyUWQjjsqBSGedA8kBWjbi38V5rdBS4bKdgkvnAhaWvkmv",
  "key11": "5Jr3TuywBFC3uGiUKWzZ3PpuqopikP65ZzKEyoMaspxeE1EEwRMo4N5cQWZFqDBcTvCxX2dLjYQ76y2D25uyZ4se",
  "key12": "B4eKsNbjZDn2TGioMrhfhcMiEbkaySagcNLrWoxGWYj1u8uQEvbw3ozSjqhaqkqTvAzDmpA7DvqRRdRY9Z9JgGY",
  "key13": "61152S8ttsSr1oXpjM5sbRq1uSYb2YwQ6saGMeLyQMEe43n4NUGts4WwgEt91eBWTiAe8KdH2BWsgRx1BcmrAvLP",
  "key14": "4BGo57SxJP3PMP71qoJDm3KM4Qo3E6Fjhst629GEKFXAQWBzGFjYytGpCuRFTHTefH7Yu5aqSRqFQM9QtkbopEB7",
  "key15": "3u2RKHhHMDQt2V2ihXkzzV2YSjmkezqovcgk6xGN29d54Eb7fj1bVNJK2U2gv9F6Ne69JxMJQWSLcoGnCzUcEBEz",
  "key16": "7cLPo5QhGRivvA3vhh1M15F3EvAm9AGF921NwYEQWoiEHLkvYH54qeHaCAHe9qUPZ3XyS5dKTYseeG793ViUb24",
  "key17": "BxtdY2y4YRbB5CjsMD3M4QaBUSoQhTbz2qXEkHyiF7x5Fu6xyV2dU63YhQMCGnc9pawgqXtATb2rp46DzXtHVfw",
  "key18": "KSuavPp5QFv8W365UrDZHCqKdxg4TEkX2r8FAZf5mS2ek8MFeg2kqHsx6xi5JE7dgYBe9F7U18KAveA25c8mXQ4",
  "key19": "2VLn2b6MCwd5sjhevSkD8Du8AgNKkJFt9VGyUwccr7MM8K3Z4SQF2wtLpXQLe6WVB71dYGB1vqNpJEMtr3mZdz4M",
  "key20": "2iL9nx84Ac8C8FphwpTwbxfqDMPzEWpiCB2MZ2nL12bWaYZDbc2MNjWJTnXcnkfARrBFwYif3R25Hbtr5ZZddvaa",
  "key21": "5DG22qi3JeP6SaRMnesVKjbe8SYBhpMjsf4KyZ3UXYMEtSKz4SnzKv9QmREza7rDAiCFxsbgX5Rjj4VUHnSqZrsK",
  "key22": "qccvZeSYCb17EhFYZymqVUsGhimiabQtVSwxtMB9ngG5tWeb3Ek67t78waZC9svMLEHppJKnfXnfM8JTteVEGgi",
  "key23": "25sUCCLiYkH2t6b9stPBZ7w7Lru9VDQpfYgaKEXgWowXX4E16ojeG8Vpdhmen9qfLxWzggDPSrdJX5VL6wuWQjfT",
  "key24": "5fAgGkHW3Pq58juByhrBSMqJ4yXBfhBfK1GGzyFeGpYx6mib8JApcdWzvYD1iD8ypx6NSkJ2ti7z2vR19aw2FV7G",
  "key25": "53rQkRZ1LEBXNiDvdv8sgDrRuThZMdj97bz4eQX3XErycaZpib7PRbWxVztsGfzqwopXfNWRHX5bSwb7H8KZ3Zgx",
  "key26": "3dE1otwrdZtNRC75MgYwq9G1AAvYXz2kgh6r5exYRoQokCghPXsdRUCbhfFGEfmR1PDzpSy6byL6R7TcHHPiRMFR",
  "key27": "3HWwzpM5YKgF72VcyGAqU7AmQ5EUNmctQWU9ffdfzwsw8Fa7QSjLjEdrdQDrfu2331583iXK4p26wSEfaAaxCKDe",
  "key28": "2XVLKBgfYTr9tqkqX1HNGobYJssHTxuMFTnMG46RURTCERcYZzDqbyEeMx8ssF3g3uwCNwYSR3FWRGeyFq4iESNp",
  "key29": "63ovRztHtUB6VeYBaBy9v8jdtFRpnKjEh3hbhkAZ1bRyNvLbpKy2dYpSKCAie1zajv84JyNApjGwCZwitNjnhs3",
  "key30": "2WUW2tQ4fhwCXnTbYE4yJJw9Nib8yPTKKjV8CZpqdgveJkZ4cYv3eoJqeGebSBr7gAzrk49UCi1cjGFEMJtkNcqF",
  "key31": "AoASJMuJkYXrVDGrnCcGg7yNbtxvLqckgmhNyRc1usY1oPSd4DTeVRuvM8gVtSxoH4DgLcgiAqBdVZXFbFjTFqh",
  "key32": "7ZUfaKqmeqDgUVesSzBSKi5m5NQKumBEPMWb8UMPYR2Sd4C2F8z8RRXH9v2SRJENXeizgCNHXCntZSGKdQBqf4u",
  "key33": "3tftQQhu2W3AUUW7zvvd3b2cxDKF9QnVK6emyZH42UdXaqMG8MwUJqgNQ75UPnmYnPkaq3JUA87Ejo6Fce8BgxTn",
  "key34": "59TEkia1wDWvNh9DPuh3y5RWUJCzctgK7Kytfr7ZgTqpXm1G483MsjbZGWcMkNiN7uD1EyhYeAagiEhKWjngw1Eo",
  "key35": "392dLf5CaQh4w8o9wgsjjrKSRymEWogebCNdBZuV9Y9W4oczom6p61zEgUgQomi6MKVspJ99DkyZYWswWA4VUFhc",
  "key36": "hb3ovrgGKmPRMqPRjLspk8x7JxuUfWGhTKDLKgNjDexUv2ugpFyU92VeZTzSjVmkKQEWMP5nFJaJ2t8eqc9MyY7",
  "key37": "ERxj3Rj9D6ctv5fDsYLAAtjiRuBef9uzs5iUTtUdpvNkdPCCwYnbAgis6hhrDsfnvLMwcLq6mUW8w4TMEBh9iEh",
  "key38": "27SnRgMW87DnGzEXXdngXTV8aTJJaU9bg5qbvHtXbq9D7KtzjH61NUVvmz2pZmDMRNhwgT8JTaGGUPGcLRz9zuJe",
  "key39": "2Xwwm895YkfP9ZzoUx6bA99bsPKMMzq9P16WNTETBju1xdR8XJqX5F6UigEtPZjXYuGt1mtNrt14HxukmjLLbcNA",
  "key40": "7XiScGHKox2rXYqK5BoA3VDPvbLqtU6wYHA9mZXyQXj3anZQPx7dfR3tZ5i5EpYdAE1qmHupyZYc3pBfTyaphgx",
  "key41": "5rBQ8Aahr1ybqbzGB1rd86fqg4EEqHtGBSLqeBM4rztYE9McFQXUQhWSDxC6mXdj8nE8qRjLRQc3esgjrEQJuipn"
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
