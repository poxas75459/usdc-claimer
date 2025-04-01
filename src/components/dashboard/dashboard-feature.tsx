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
    "GXcbeEdGYgbjuxvN92MiL64jHHEzy1VaX3BgvDJx5gEoe9UbFEx3hVpY8vxAXgCzxC5f9cuJEMcmpVTAroNr8DE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55Tmyzq1Frg3LCBvdjyLW99dV4P67ubgsy8p75nK6BLhwH6WEBjdKwAAuynyUY1Abx6WBCZjzuKiXjFHbkgC7xFH",
  "key1": "3eZACLmKYrrH42QEKEhyDGJJ2yBCpuRiUHGqbDMCQnzGQcBZ6dYuT8PhR3qjJWH24nnMWBg8WWAVgQwwgEruv8Kr",
  "key2": "5xStggYZa8baDD3hF2DZYYu3R4x7nr7NByyAA6zHxvbo3Q5MRhQe6J1WMT45mQcxdo35t59edNLht2cDa6QzVsVQ",
  "key3": "3uAwWhkVEGxot2j5byxwB3Z8QdLanXfUcSmhZsCRjE1UxAy6oDk3pzjDd1ne5x9bq28ahCUeLJzN6jQjidU5vypN",
  "key4": "5CLXqhvCKg7qRQTYM5oSzpedyZ6EH1ET6hpeJgUfJa7qFgE6tpno3TKoQb1Pq99k1s9xPmTCMK58Kq653uLANdwU",
  "key5": "2v85gcY5cXN2n2Pj8dKKeaU2ZBgoyQduZaRWczCzed7tEUrixKPpHgSeDMY7N4P34yx1ejRk2cKxtA5D6GqGEddd",
  "key6": "fRE6Sup1LF4gfuQuybXfZu6DDMrXyPzAmgn7bdYSx1jtiMMapkB7YP1N7Dgnev1couP6Yvsr3FG2mG8mr7ai2Qc",
  "key7": "5fJYmAAcCf9nDJCKyGsSdKweTrEe9pzfBBzwbe2m2Ag72fQuM7MMmEBLazhDK6PBnJiSkYNR9kPsX84b23UgzsHk",
  "key8": "5M2mCQ2yUsnKmSeKiidH8uuWdzS3psMYDrdp6tVezMTYyN51Jy5p1Wo7KKrv2T4te5aTe4XyrgXyGRQ3DT6DxTWX",
  "key9": "eXFuN1Gw8j6gPPT4oL9CH9SB3LMrmRkjegDCrzZzQs1r8TtY21aMngC49t6CQ7PMhGwXHNRRDzqyorA9E6wZ3U9",
  "key10": "3rDKFAtZVkyo5UbwN1dYR6fURRhbP1HLKzgU2of8BPnqLJDiNH9t3YVTNuPNBwzFKx9VCyKRu7jbx1ihaNUNk8CR",
  "key11": "34NKZkRhy8yUJBfymSuqrZydL1TJ5RQEpVnoHHBb37Sov6LLPD4GFHJEdEpDTkBp8BzQtrSsyGt2AUyYSF8DaWRn",
  "key12": "5BsCRpWaihf6SHgUMCdTv3r4NmvB643Xqv9GiCuNxoqTeco59udmgDVCB6x7ksTXAHSVtvfr455cvieRZcQDxqaq",
  "key13": "62EWLaPPHF99JzewtPfMKrMGzhSb26dkUQK5MJTobfCVTxTDA7LNXmpuvWgVfGJR7FFEndxW4pf4mxAaRKJyb7pC",
  "key14": "2o83BLhbEfM3nDNqzwRnN1E3FWyLkx9eVWajKaxPvhpE6vQpiJyMnRjbo5VfAjfC8dGGbdaasERGxP17xziN7kbF",
  "key15": "N188WjbY1ua4sPfJgKLwMwF22Sd31fkgBhGUYJWqxvxggDU3ZDLJhKHU54Dj2zpBFGM1RuHj7CeDhLEGu1Xg9Rs",
  "key16": "3RqYCigtopzukLDoLQid4Rro2esuoZDzS8rYf3ZVPnup6tRnBk2dJxm7sfTtNqK4eawVTrfx1HeFAH5KbR8BnDv9",
  "key17": "3iQKXjDo1XHqmahbKJaEwbtgBnuSeo4zcvnYfoNUmqmsye2mGJxxQotYVYiUJEh1MsuxGs5esgZBYuJnKPxxwnYk",
  "key18": "ZfvpWyVYovpFzfJ5sKHPExJZxMZqLx5kGEZQ4W5FT9F5DJVH8A2mBFNb3u12BNCtJ5Hy4bs6Knht7NX4WFqXhGG",
  "key19": "3a4cxb9fvQH9ey7eDUQfP8kuWgfY6ToeqCZVsiqGLYkpd1nzACpT7gasToFiumNpSjFjTgpt89o3kxCzi4tFbvKc",
  "key20": "5QMz54emr5bJDdRyGJyi9pKhUWyYXmttu5Pem9rXSbLSw75GCu3tAXkb6qMBt2WByiMYcEcjCtUbCRcLd3brGmzP",
  "key21": "eGNwnZDGTMnhFYte6MS6Vd2pAuwb8qsUdL5VKcHVe9s1cDhEvCnJSk8VdjL1NjCqmt5RQFoe3vNN7eZpfMDotQj",
  "key22": "4N9arRYEG7KhfHEpm88ZgDd73ZfQwatJAjgu7WxPzbbypS9z4n4bvLTQbLNAfSuxoDwivEBHcgQwQJVVY8R4yAgG",
  "key23": "dEdN3yA31cYB9BJcCdBm6bCND8cq1HNPfMfLfXQakpAaCm57LoGYME3C2vf1EAvR3YgLCcXoSpo5so69sSMCGNE",
  "key24": "5RAQpQg7Saz8B6SJ5xtaWshzKR9yuTjk5G3GQygeqLqryTSib1HFWadxS8ZbXdJEwTRjaj5nhc6c5kT8nzHnYxAN",
  "key25": "3o3LPAvZSuE89b21KS77JNZHw8Qo8EG75b4PNJYTkAYWB8qMEe39D8bZ8SVKqYrH1x3phdXu4HAks9rfbLmNLJWk",
  "key26": "5dofUD2Y7B4L1jCjrmgPRvHYQRdfAE9XGu5dvzyWTSZ75zhNfe9TPymP1LnXceFvP4GmP8M6HAN3nmVwcKs4fnyd",
  "key27": "3wWGci2mzzEYZ5CtStSKyjQKLBvfuEaf4RYpHoSNTh67tRJJJ6YykZR5Xms5Uiu98ShdrSkxWGoq681yD6ySyxwC",
  "key28": "37eorhQghPgsej3dHi284URyQVkwfeSHBKR5q1oKk5weVG3mXEHTqGtsCij96kK1Fc8C8qvfHJxP8rTZB1r7iqku",
  "key29": "2Ny6Vp4S7Xr3aELrP1CjY3K7nviA1BUEDcuQiVveY6x5gjecFJ6wGterhHxzQca2qrRNf2CpW6W1aBPpGBaEtKSB",
  "key30": "247C4fRj1tjQ6hWfcTLxL28RVXtssbF2Td7CQeY9Gy5zhSeLtJdS7d9B2DhA7tgNxzQcwX62P9coFB62RsPhx6s4",
  "key31": "2WvFNSmgYRfPbvfxK6fytxiRfR3y3oipCypL3jXHw9M6e57VS6m7sLBZyou4fJW2mpsLCrcAsoti3Ma3UzybR3tz",
  "key32": "4ZP82aVAHi9pXP9kB5ipvgQyPkgtcqqyYCd655hhHWm2ywiezB7LXGNbC1EyuhUTNs1qVqH8rrtNDcM1h81XxVPf",
  "key33": "2TwB3cewpiiHFtWCuX3Nh7tSTpVSoGzrYMTn4qtTKGLEXUCGP1sGVsT2qJ7Ev8YYw6M5zcCH5H8w4ydkaPBvTGhj",
  "key34": "3NtLEKD6owWN3mHSgHT4vymNdoGn4FxdLcwrmt9aHtYg792T9BAk8SekTsQ6hADRnPy4KHRjGQxpDu9ZBvkS3Dhi",
  "key35": "59yEuBwYMw3CeieAAnHxpJLeTvJ1ytHN2JemkQCYuxpvoKCAnG2hC8RwLFJkmQH7ry3njp1P1Uq2jw9eqtU5rqxH"
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
