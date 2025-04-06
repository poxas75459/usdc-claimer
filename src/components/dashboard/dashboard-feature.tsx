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
    "3pnhgweGwAtm7yBdvbsXkoDa4iSwBcpve8qQP1tKRVhcHz2uLZf6svhyr2Us9tdrhFwhTGSsvuSizRYCLFSjSEaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3dGhBoCEAF5TiP9jn54VjbFGVcNad7ECT3KjbKH6A3FBbqqiLRKuZDVNp38JuaFRQJBkAnFjWCCuucnsbvFfxbam",
  "key1": "5hBRc7t9yGSsg1fJ33NsKhcVeFHWXJiac9ZuTwvKGfpuB1KWWoMDjJRrvaahhPDSB4qWtzxqYZfMqPoREQJ2GxNt",
  "key2": "4igmZqGrUMT1fqmaDjXs6Dbp6Lsgp1YMjCsSEfq3mWHG4YUjBjf2YzhHvrsQZDFPeBtxS1gq5jU49gTSeqrZLEZP",
  "key3": "3ZMKHzhY2MJNuvjVnV9f2SY6erCDscEyhLb7zRFTxwjpMj9jk5uNZTBqGEsaxGDdVSZd9icZXUfrXF1RG3DrPiiE",
  "key4": "2p7YPQnVTitsG3UP5aB7qbhk9Myn5qssafRQnEKngKxMPbt32M1ABbrAtQcXXXYciswgttrPq1jwfX4jQpPa5J5i",
  "key5": "437PFyEgxSixaTamGbBFCogun8wzaqE5V8gD83WUnfchwTicktLswFn6z17HECCbr9hesZ7HZJxiCSteCAXt43Bj",
  "key6": "3MomJKgJonNsTuFQQt7WC1xKDjKTJEoEyahB7iT2Rjibr5xdHXioiobHDRMcj4NhXGz3JfQYZcNN3BHGHxV3oh5h",
  "key7": "4Gc3G11xR4WnaFPAyRDHMXUmwdAj6ka9kmTacL6pLudoY3HSsKzBMMo9gJivpR5Hfp1dsNgYu9JUmk2CTUw5AkvP",
  "key8": "3HssHWtejKEcvYNTg6ndi3JoXEfqjq5Q2x6mSEDNHZpwUcXzwrVonrzerKZ3FUcsmu462BFT27Jdw4AkoBRFx1sK",
  "key9": "2h3q5N4vydnf2DjoLbsXwaX8iVt12Mrkm5x3fZfRcUhJ2LhCyjmxwZiFxAmo6DtXLUjgt6sKeVsfkgzcyNMjsVJC",
  "key10": "2BgungW7rgkmstJNGaWh7HXXAM5DBtCgUjLRr4Y1b9RyRJYbUEQNmGy5AiX1UUywbuqNjEPhNLSzxfcXmCnfRGvu",
  "key11": "9nCcVnJQ8g75eLpRQ9u5cJLGVTjmdqvnWe33z6FtJUa91u4FYqpGfZoLDQegvWQBkvDSGRndEipJE4yqKdqQSwY",
  "key12": "31GUWyRaZcZ5vs8JiRKJXGTi8nbaV7dCTg7CMKfpsgCLoBH6rzgPQA5MYqpmEirYHW6Ah51AhnCuYFKe7EAboBGd",
  "key13": "5cE3TNzbJh7t41qzrySz9XABr1osCvKcr469u1H2rqd66kK7eYhMkLsnotvVpCW5ghiWHCWRdvaeQzetKEoWjuZc",
  "key14": "2LP5RZA3FbrgrdHh1nZAzhLvfyS2Vvf4MFDpFpcAkT11ucNzZVna3byz5EnidhkXh2Ec1Xop5V6vCEVWcwUbMywv",
  "key15": "4Rnq59bQZALYggpzKs2xA9yAGQmw5yjb2hKhovfiKZD1s1hNHseD3YcahQyJPergi4zWubTxarMLMp32qv3nssuv",
  "key16": "2YkRDjMpqnUyCsZ75tsFhWBJCYyue5UytHZbkXaQUr4HJ7xuxikEANpFMgwTsKEFKQVyJE98xWVBqY7HwaS3UVc8",
  "key17": "4xf2i618xySxnY44HwD4BfCUaqibS42AVxWiUxpEYhCjmZrBkghbMqwjmbY8JbMBSBQDeXMeuTLwKALWofvhm9qu",
  "key18": "2djmLm8hVi4vy6z4wYnmQufr8rQoEqGxEd6AwYWmirfCum6qz3hngAozSs9b2n1hDoS9sL4dgkPWsqqrQY8JDFzQ",
  "key19": "4WW4yKG652MQxVbKop5sfg3xgkTNwYuedaiYyrmARZMQuGoArtc2PLYp9N3DRDnXqPARGsHAUSFdLKxzAhqUqTVP",
  "key20": "QGHSxX3cFaVaaRq2wacqmU5LHiFAV7ZWYHkeBabC3jiv2KrTYiMFfZVcFNNUW9Y4LKr3rUfjftroHYxYi817a6R",
  "key21": "4S2tPHhaZoyCMDTVp7g9ND4K9zJaWWm5bzAoLAJQ69jEfKVVQ2DKTBsWEivTfD5hdGFqzjai8SYXsH67cagaUZaQ",
  "key22": "5mPAGwjcRSHE9VGrHfPCb1SkJTPHcZgk93XSGGqZRjS82aeabKCCrsaFJtdF68XjCabaRgJLHP3PSJD8YZ61bjoU",
  "key23": "4X3AMqoB8WT2jexz7oDW1CAmwGQaQmbzY7VvaxXFDCZVnyYGrTcTDmezLxpVwZWbMvBucnXvEXUB4pFbXx5N63Y7",
  "key24": "8GAQQdCaTAt9kyj7pokhvarL9zTJadA9dx6jFgij2PzpPW2iXP52Xoo3sNweUbejMhj58tyjvvyyC3B31yAdw9Q",
  "key25": "5iPnrhXYZSvMJT35M7gQWJqkZE43xfU1Y5v9WAkyVhWGsekobUv2BCynnNkgbX7571vwk5CNNdK9WDYmvU55dv5s",
  "key26": "5DSiBYB3qpRyp2kvKCAkvcUgtVrCBKJ1zoFWWTT4fnMvk3Cn2vK3CgKRhtCfmRUcqhm8D7JeLwmiVLwEdtXWE4HT",
  "key27": "2mttWudi719LuH94LBYJmSbTJ1qKMoJeThfap2uRXC6QYiLehTyT9gmxC3poWECSbBuKcxdVcUY1VWHdMYNScaTA",
  "key28": "3S4kQYDwgb32E8hKJziRUPgPqpgUFEamy98ooZVJwdfcgrFjmJ5xcAYab5P8MxYeuzp2X4JGQYBruv54127hzJg6",
  "key29": "2kX83umwm7J7UkECPcxugGSEgrzF4LSJayToJSL6PBs5PYPqYE364VThYp6cg783KTmY96U6SMYka7t9mrWTd1tw",
  "key30": "5JNg1ocYXhewGj9gm8gD5iHuvPtgZCSqVV4hVD99YoFzbCbsrD7ZYv7PDS4BKRhQiqx6V6Lbrqd1FYZNoUCVUf82",
  "key31": "4Qjuy3xWHR3hXhTsiuXQhuT59RjkocWTyc5TnPHWex98pfvcd1rB9dANHBWNgeUUmyKnVZMr1TAZCpkQcwD31N3s",
  "key32": "3hF4smSrbpeWunGhF9J8im6Z6FmoeSnJ6HEwsUunyYM5JvEzKfD4s9MSjaDuDGZRtWGvkkioDdf387scLU12Azqj",
  "key33": "wiXYqVEQZ3UPLM23WpJLprRiozh5HqLJXrpRJGKLV6ujxsYYQeB4wvJ8MxchHuAkh4R5drgSFFPKpN6PskQcQj1",
  "key34": "3KtrRifYnueB6ALCSSyZFAbNrHFksqFj4mcMypoKwBk4ACVd7DNtG9ebQ13VDmd7LAYjLmw69Ao1vQ3cmHU9BDCu",
  "key35": "4wPUDHWgwrVLrrx1ci2tv4ZAqeq1PEttyrdRtabZ4DuqwVRFXFAtT8ivPNYwBrteoxRUSoCTsy6SjuebD2E4nrad",
  "key36": "3e7Uj78oxUtRDivkA6SaNn1pPQSPTHPizCiEmj5CDUaPcMyPKyYqkUAjVuTvkGvwovTEjPiJLFZEqKYzeT4kU2H4",
  "key37": "5ZDfRANBENtr4qUFAryHGMeHxnrcnfWNYzm2z9x9dKqWcAJ25xnv1yK2TFb2d31JeHxwpqub2dgbEPqwgkshsH9x",
  "key38": "3WkHy3ALWCoDZpWvc8CEJAb4wzHmoMjszRbKrHrhawXadhGGJpQzX9Zn7v48EHBV7UtmkH41yiAAvJRiqojmcKY2",
  "key39": "5htnvsqDnpcdUWMKNAQMUgL42K8s9Guv5NhAhzQYS2qeYUCCUQhrWhyLY2uMNNa2VhkVNzcy5E7PaLNpFqUSpdaE",
  "key40": "iMzzL9dBPjdNtpCmTL9LeMEkoDuQWP4a7Bz98PvCk8sUtmnmMySCBxH1Zr73tTysoHtodteZGcBX89DsmbZPFKx",
  "key41": "2o8fodfjy1cPKoG18hxaUJuJDwD4LLg8C3K8VDo8J2JFyZrTDjxez8b5rqTbYnpxdCYCuT3J4uvLpzuoTowVYeaL",
  "key42": "5nxdzFVTq7BUJeNTyT4Sdm8uhRZNBdqfcy2vkx3iFVEvoLP5DrrcpcorwoDUgAbP8a7Hzhyvpt5bFm8MiPRheSTP"
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
