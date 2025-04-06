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
    "5jTLusJVhsENy4FBGGSE31hgU7akU9aR18opBLPD4WW5ztj57bNbjWiw3mmEqifBaKcHQXf1oHKLmC9rxmbvKyd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39dtJRaWKmV6c5GxiFNw3tVZm2535Tu3aUVNeaUyPn68fNaRwUZs1x2RmQ8A1RJUCVmktt1TbFfefsgyErGNbs1s",
  "key1": "4RMxPjefo1crv5CHWkWVZd8n2hJeWiLcuqJK3PmskxkBe6szXgWfbgGSVoctKfMEkqK4SCWgy6nYe5Yiia9G8q4R",
  "key2": "5yHELsDc1EEWFotfqhMzQ4s2RYD3ssgpjcX9WTgmCN9Us5uGuxfsjMGKLYEDYJEuUo4dij4svhRXwEy4vou9eJwA",
  "key3": "v9ETFxKNUdDHSXC97itLkLjSgC4nyf7WPKnfdTSWmGCUbQEkM8NSTR9FYS6aVYEaJr9oJ9fva5DSftmyTZFt42e",
  "key4": "2i2XJKQT54rB5LSxXbF5fW3yzeQRmUiebnriY4ppmTvj6QBvykvzMFoWmxpqq1foAauNdSaej9wHKdG1Gzyq5jUn",
  "key5": "5iXF9G4M7EMp6qVL6a49NJ6sbba8Q8zbi4RVwiYaNmPaKyoCzfhRhhGcXjjSspYqE37zUgjwbFLytrCZsPcRcRX8",
  "key6": "3mrd34o9SNicxWjfBFrcCob7iapcuKcvDSzPT63wRSzXvadL4NE24eA1y9FkJHzcQihNbSPk3DX6WXkVBGmPsFTK",
  "key7": "Lnc3riPK7PsmKHts9hW2gxBAhXox92pcyPiuN9Qd8NM7o4w9fkTdgXxKurqFF8kLY7W9E9B1HBJwgCqEiAoCswv",
  "key8": "22TQGhYpnPiBgd186UAt7EtdeJsw4sRKZ1V8pg6dCGFXfChBhod5J5YL6ekCGpzqmtkXGmLhqFTZkEbv7y1fLGUc",
  "key9": "32sJveHm7W3mrhxn6MzewwTLyP9quZQfD13dywe7XBRiGs1u9a77ZM5hPxbSVhBxNavW8xiZi7TjuxPs3kSvgGxx",
  "key10": "3WFK9RepLW5wAGYLgyYnKGYU4tJNFNroHZhTquxkRBoUixp8HmQh4gSU1QCpnkHJTqFGJMbEefGUGSWnD9aSBEtC",
  "key11": "5ntqWbYLz8HLYs27rAGDT9urTYwg4nW1g6rSNZMe4CvMX4h9ArDhDsKMWS6wvL9fBnYUHd9TBBF8QSrrCQdoiFrn",
  "key12": "5ffz8MuSSFP5A6qPMKpg7A9CdDy7vcLdJmw87oNGQTjt9U4SuD44FqbHaA4YsZbfEGBv9LUziYRRma2xqg2WozK9",
  "key13": "4Szwfd4gDSgTqjzwJ7d6w14wkkBS5DT5ZceM9TYA3BpGzYzp8bp3n6CZs2B95JBNDTGzodoTvBwdWtEbmTJ2ReTP",
  "key14": "51uuQojukqL3qhQxCigJt5fYviaW6REWXTjz12BLp7kuKBo5yq8psJyHUedzp5KiXzjRppKzFukQAg8vv77LM3gP",
  "key15": "2Pzz1YNH5sRiGcnAQHqGCvhxt7sYrTUMQtC2sDX3qXoEnMRYb5ZTaXrAasMWV9WJQ6E8pPhcKV5HBEd2M7CNGm3v",
  "key16": "4r82DdLb7YeQmhLNZfegaToo47bYNbAxKgTwp5ipybbYqEP4CgRHJ7DSsRP9RxFWwaFdEPsJD9g8LKgo24qiaDqJ",
  "key17": "3J9mTeAT6XPUZiNCehWMp9DPHuGp2PyLdryAFKkAzGnZWJH4n2rbaS4YQGv9rwRXgMq69iiqseSnfkb64gkzxdbU",
  "key18": "2r7A9waYgN5sCUaz4Z6Rbg4RESkwWjyLrszNKon6XA8MTzv4Cx7m1vAGMAiW76k54RGbrvamWLa6jp3EEs9rTJfc",
  "key19": "a7KAn1FzjLkshvB8rh5zVM3ngEuPgaSPhvUhtx6S3Fp4xa42q8xeLHdZpRxmRe29Riu762jWJnSdUoz9FajTXqc",
  "key20": "5SopFiLAyXT4AzTsBvJCJfMEXtnCouMS9Q9YMsYznxJ7SiZEtwjzmFT9EAkXFG5WjgM6Wczf7sVGRBBZQkNTqF7A",
  "key21": "42K2drRsXt6Z1ZdhfrFQejDVeahRDZo3mEkMqogCKhi2LCa4jZrKisQYPQhjeVo555ZjestSs5NFNx1JqSBizb5Q",
  "key22": "2P6dkZHmko71G2yLSpAJQqHTkK8Gg3sXrgXrPuCqkAnnWVidhynpBAaqjT3RJQjygZgTBDMPxebmrMFaKC1ubrYV",
  "key23": "5tYZCaQASzS7dr6cJHMoicrSri2Mw1pXhskQKaKBpp85FZgxTCLVBw7x2GfMYuMyCG7V8sAgaP8ffv2ZWCKe9t5p",
  "key24": "2gvPxPsHdAswGvXt9eQuAYvy3YC9trg2tZ1AeMGoEbuu1ZE3JHQzjbfAR3gKYnPDJB1eAky4CnmAKbp9D6kiQmtZ",
  "key25": "94TYfEx4Ni8h8fZ5YrRQgysuArteLR6ELz4yK63moogPfDiKLhB8qeQJKAxmqhfKoW8E9cfoK6ZPuw97rTYrwuc",
  "key26": "3PUKhgAsANwM99NqXfMG5we6SCXujg313QtWNL5sZuSoKmR2Rrm6SVw2bKTdrVJggJDYZtxnKGxtXPzQ8A44MFHX",
  "key27": "Aq3bR7kh1Whm94NTc5cNViRepwfNFnAGqcyN2UqyXxzsPUaCoRq1qsAkQ95yuTrvytYmPQs3J13nvSS4Jds9pae",
  "key28": "carDGDgkgPv3gMU2uVh6Sq9oJddtWxS8YZf23Qek9s7zkFGdtS6E8L3cjKsjRZQFTyBzWxKE9ErPXPvBJi5T1Q2",
  "key29": "29d6rBXr4ggXJGG7fJ827vjjmsKVnDsH435EN1TfSJLaVoqEssWRnLa5MrALsAMjNHVjpgEpVjsUSHbnB6x7Ndxt",
  "key30": "5KJHG7LBksFSWgKGAZfZGoJk3yBj2sQwepmWmWUcZ8dyt98JsXQNnbvFCajmyxyLPQSQgSmBb8AmSWfxzwnnG7L8",
  "key31": "RLFatsT2iVhLJiCxAU6T6hkTVi9YevsGqcGyraidjvQ56ZSpZNjw8WL9bfqLu6M8n6QnNZjUTbhauWTzVxJfJFE",
  "key32": "3b6wKcD8b1ZWhKnW7EuUuPfeSr78VR4tMYJ6xHRkBjfUMRiK4uFaiY3zMY63xMLzsbYYkr7onpbEYmjiW4P4Supp",
  "key33": "42da35TQNCarLVVQEGLTLtyRk3WkNXPM9dbXhtoSTSYZLvunVTCUQhYQTbFYZGPCSEsjKsjBEczDQf4eDYvy99C4",
  "key34": "4HLt2sjGpUNLdAYvfStMxZksvmbVkRF791Ra2QR4fbLebNnvU8r72Xidz8XdZGPDCUFEJjCqwEZmkvmh1ZczV6ni",
  "key35": "5J2Se8bQHJSPg18wk5pv6UnMoJ6kxRZJrgTdw8Qcq69r1PdDjhGTECuFKGuVectm7vjF97Ug9qZFjcwEp2ix69Mu"
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
