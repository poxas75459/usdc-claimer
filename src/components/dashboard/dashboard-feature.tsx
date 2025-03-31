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
    "WBNJNYvCJJmW14uo2xGRvWpm2aMPXHc2B7PDJKdAs4HYveid9CGv2vCunprpMFk9JtgHLX1MZXUxLaM5rLTfg7j"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DCYbajDJEQB343WawKNhpVYLZsdm3qXHwW1BRSvyh9UzZkHffVPsytfEphBdMBRayDFWm6mLSi2LMWnyDxpHgKk",
  "key1": "2FzFcFco7tFnUYvea5ND3fFNDXYynEfC7yLkBzUGGMhNSGK6zTu2SUokgW3eTU8Fi3hExijWjYWWHufGKjabnmoJ",
  "key2": "6hu2GsbQmRFT79gKHSaYrD2D4HUZMNdzFgEr5qL37mocgHivzifYyfTdmCenDkjd9x9yywdKqHXRHb419oV786n",
  "key3": "46A6BHnAeZ4tz6t6UXHnL82SQMzWDbEC1uxZ2gaVZsc7d2iSXFWYU6VZsgquj45aiFh9ifaQGFrDtbctARKxQZUG",
  "key4": "439qTxskXrd8PxqJzeFfcBQ87d5WbHPHgxNeHj96danWSMxUa8Bcabq8L4Zsuti8hMhsN6csTAEp5JMjMPuw8f3q",
  "key5": "2ZpJ49HdkKKTAxQjQiBgp95QXigAX1ayPMeNWppuXfYjzCZqihapUoqYBbPMYicr5aqs6Bx4yd88wDxUsJp39Caj",
  "key6": "gRdz51ofZ3yBpsrvYkEx769wGd1189N7QsTVdwhaL8ZGfwvm6QW7T9H5rfxSjRHdCibgsnkGCCJ5EX6vzzcC8zo",
  "key7": "5U9zo5UUeLugzwrsqQ8GvxnB42CaF2hUCR62bo6csd6QspsKPBL8MMTrheg7jy3DndSmyJaBrXFgTffeWpjq68AB",
  "key8": "GMv7ovmejmWJpzFjYyR2dUpgnayoAwEotsxa8pMDspot1MjzKBnMcW1vy8t73EaxN97QpntsnrUSirkBYj5jr4y",
  "key9": "3s5gJtYX59bGvfDPAWaVWnNJpqbEu9hRcAfdJ7JTXCTaJuRMW49YBXhjwZdpZDMLFFdiXuMtAWVYFw61uBM3Grn5",
  "key10": "3kusknAXP1n1oLXdUoP2Rqj5bTLgWWMKpGAGqZaXYWeVCquZaQFsop5LGegkAUz7y7PhyN4z577z198nSNWvC5iQ",
  "key11": "5KqLUz2LhgTffhQxKWYX97C9nMZvRCDiszKrffcPE66rbboxjPjQHptX8ExtGYAA7Fc2rsSFSBVzx5uMw6BsABnU",
  "key12": "5utEwoyzgHhpQBgQsUzPQAjB44N5vQyUDaq9x4xLqvyNgq5kYfaNmhWBY4dLvbhuPn1HD4GTSkKBFbj4CEQYa9QX",
  "key13": "4ab1JTBPjrn6vbpKBvGTGZJvMwP9AnEe9HxWgoGHbJPWm9zcESuNs8vmPKV8w7h85g91WzbdAYnNJu2QpzofviQC",
  "key14": "53J2HWNNMgh4vyJF7XB2ntnTo7sXPvp4kisHXCEHvydb2ShzEV6DEM9CohTkVhAXZxDaQ9HrjKkzK1oVwg3kWz4v",
  "key15": "5167eCeiP5EXczdKRn7oPxd5ExC4JCufLT2fV6GftkF49Z3w6Fp7K4KMghXM7c1VSBvCbiU7xAc9UJzjG86Eb696",
  "key16": "3RRPVoUZzx8si3JCezHAuJ2Uhej4h5kYREs9gn9As6MUbQHnuo7EHTBhWuz7Fje6h1V4aaMg3ErVuBP7UbpzwPnA",
  "key17": "BtJYnffsoJpFXXSasgdZQ6LN2VS6uaDa1iJtMKiQ9VCb6yaUywpdSZtZKm9ekejSqJTyGgeh8W2cgLExKEcKPx7",
  "key18": "5hevwpdzSFjD4N7U45EyWGCr62M3kDRVZgq5TGi54LZYfniYHzZXHEgb2EJFCxvFMx1hJzRh85XJRNkB4kn8wDvb",
  "key19": "5NAoaf1XeEDsxYqRssz25D4oVzoC3QkG3y9draWakAiYMF6gwupeDzBE6hYVKQNU3EUCduzoFRYyhA1EMzDdX4LG",
  "key20": "tvskPbn2ZrwqruupUotBGoKxHdmfjBdDsfLqQr3GjErK3roexSHyb3hBzXdmCnJoS6wtaFCHzb7ukaeEvV89snL",
  "key21": "KJfmETLN7HWAu76Sm5iyYeArD9sEgisxPw558JKnrSQ2i4bSv2L5XazGzQqePBvpnHbXJtuGoDT2LWmMshCyMgw",
  "key22": "pJ63g2kDpAzbk2hrVPXzczd7fiUyDHG2SBwBski2v1RtDmukG4WokVCwBNyLTVCrHZ6SRc7ou2Nv2trjKgYt4zZ",
  "key23": "4yWsxvWpGKicKPquUWVKCvb4ZTW7PH2N5MmGy7ZNGdYHeV8GiSi9bipYsSknahaSQpJL53JfXUtz4RQ3t6UBMfdw",
  "key24": "33wWqxufw2ik4UeTUBM14iWwUmiqaY2Hx9iwtJiLXxexkjUkHap7bixhkrdZB1TZkDUrDryQMwLfcueHRgvTFnf9",
  "key25": "3Q3Y8S9ruND9ERHb2vN1wsbZcBUxrG9cJCwDo6ThCJZsNEFkp1SNhY2ocTuviK8KEyUFfeUcofKYRhm5hgPpNUjg",
  "key26": "2qAYnofjV5ze9p4dAKjsVSLHhWTvsodqdyEsQstkozWEXKKtA3iwDS6ov42apRdRp7EK5NRnDym6z5tZL6oLouML",
  "key27": "3LYqpisAMJNsTfahHzFPxbBofKJGUULEjuv7ZWJpfT9zTiWpU2ZmZoTvHtPRc84KBVFDSqnSpE8RTpGwVUWHRCVq",
  "key28": "2xNLkAU95QjcuTBGsWAbfV939y6Lcj4mwAfCgejAnhpCwtP55jQFKb6iGzGsgembYbfFxQamB3eJBTU2Jh5KpYpn",
  "key29": "SbLzpSr7qaKhSQchWiY3YkDwdprCc9MfkAJNw54wZKrRpppMuzbtE8DWnEZC1cgyezkjvEeic4Kh9hGobCZgVkg",
  "key30": "4Xf9gqCGLgnTUmB8h6kDwZHXMjhYGpdmQo85hYbGjfefGVyrA1x9TshyiSm9dK4NKK4D4ZHbEEE9D6TFmQrqefVF",
  "key31": "2e619DhiDZttoJfPh3oRZwgxyfT9xNuehnQiguQdm326bgPukZMvN8aWjHP8PDwngkb4j9RhyAUFpPpdFTaDNe36",
  "key32": "3DGepKTxohVPEgTARpH2586SW2zkBqcDDmsTJ5ddtYf8uF3qT1texrYqEnfWa4F9dK6oihmHK3qwjxisS873AX4c",
  "key33": "27avzEy1f2MhatbPyH4eMNim9JE7KZzoKagyoZanT3rsCy5M5qYBXq9o6GcE4cFzjnFAb3HCuKG6HsqM8eMMtquV",
  "key34": "cUvoUqFEDFSjMagWe6KazxWmumPeZWzpigoYJj4d8LxZomBoRryZTZh3B3Y74r54AhyQswzixbQuH1kAfa35Exc",
  "key35": "2HEfAw3C4rKvUUTThHMfa3St5fXgbBt3PHU7dMP921XwkFncYk9ZRxLcLgwY1DoqLx32KoeHvjt139KVSxjU3yTa",
  "key36": "2zZXpCSC7fRbmL3pvJpCAhTEzkJdBD7Pb8TrLiXFXqt3rwLmeab7z6NCa81zGjvNbM766sgi4aMfGBJQGNJbj5S4",
  "key37": "2r5Y4f6XBSJZxq8tesKtHKHz1GTTMAE2XEXToywnxN2bzzMPXQ63bynrW2AZm2hfQR8mZWzB24kdef7493hjVCqW",
  "key38": "5EmxGA8KW9MPdAo8jyeert49Y1gAJkbv6WsmuTGu3C3YGNKK5zJZmv13kRXn45Fcv76fgpzGiJK4dEXjAkrYXGDc",
  "key39": "JtWqsrRxiLxqse9imsss3barNeTbHXGA6cGEF7vfxhxWSwamKkMLuLjqb3t9WRLYtSj2TtNmXifCFTP8zfb6uSU",
  "key40": "2jH9DBZ6jwpbQwNkbsmhYAmG3u4TeqDq2TsBE62ZBMQrcKmXQEEbRHcShLXV1keXC53gpMCxXjTwYCAZqjdhyPGe",
  "key41": "vxxzv2vCdgiT5accSR6XgvRiqeNsM77pi6QfzSdCSnUkyhzZ2Q2b4QsrGEk1wNaeXGp6zwYcQDnGm4rEro2gQbi",
  "key42": "2aEke9LfQ5zWiHxmREejgcE5CNsZ18nbxvUZocJ7yJ8TCKgQvCRnqyhc71ZXG2UNmrn6rSrmtbKeijc99yfnJr37",
  "key43": "3vJYTNqZuqnMFRMHj7Wd6XQJj6NhsMfeqEFAepY8qvBPpYNmocgZpGLCXnJrQJHEeUtt5F59UPouzC47Bhgt5dqj",
  "key44": "3AUMU4VFQw1CZ1VTcn4TwgAVCzSozvYKJYXELwTgxAbiSBPR21sR4vNScKXGFSzq3GaKZJKipvFtNA5ybvxJLS1X",
  "key45": "2BtieVkxbKugxhtxJsQntfn1bb7c7VFo1HXH6kM5iiyykwvfZynbiUpg2sJuU6CG27KmD9L9WwsAnjKjLrot2PH3"
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
