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
    "4tscDNkmz7A3Thg8PyFkigm9Q213eP3pvQ6oEHkLvyLqQmPwcGWmXVGjrLHyXfg4DTk9VAxa3g7941n17XofoaMt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bDdH9TPuvbubpbJtfdK5XqCicfwWkZe9YD7khCw6g8w3Emp31AaMggJmZsJnQ5SCV3Ugf31ifQyKdVofZFCxmRM",
  "key1": "45zFiXRddBdo1ojwRpg2VGqZUytjGiicxHi3DN5JK9yh8aN51iMjzqQ8AuMiCKVkp2DLCd9KejBNe8fnD7WiCyVN",
  "key2": "5wyShwqipewk5hKqFX2m5rpJrfSBkXrcM49EF477kagQE6hMg2DXnEkmmuSS8MsgvQnZhDT7FrXKaSg7t1yXL3bw",
  "key3": "2dE8SiLHEJkbqnFu5Qoyqpp75mLU7rnELNxXjxJZGcYpCBCJbxDBfUDm2N6phzL1TcrYfCDW4n6Rwexa6tKsjFG2",
  "key4": "5nisT2dH4TLygd9DWmcg6sxcWeibJ5YGwdcKYHPdQT9ePF2BCj9FpVRk8PYARwue6hLeMimNDz674PgU4Ps4Vjy1",
  "key5": "3aUCoFrt6q3mwVCxdQhen2gsprjqoK1wksTaMhcp8BYAAZrihzNHpqKwVGeVdkMnFCWFeM7gZ221oYshyyz7VtZy",
  "key6": "2mP24m7uLUxNPbZz3JZzviSB6SUYQq3qvoWMBhoQwdKJEnMfZf6eqZGrM9PTwpRnnq9x3ejCTsYJaMRY8WfdaNE1",
  "key7": "55cYBjyy9zWKPTuQfgGsCAoLHUMCMWReweZ65qshksW8rXVgQCnTDo3UXUAT3Syh3uLuZ2ruk3pmhAAcGUbthvRk",
  "key8": "2Pr6shfvK7yckJnnBANKefa6wNCXhbx3UjPfdEFzqBzmPyxwZX79byrBpvZzUEQbxMS1NJG46FJfo7wA8zjcuhoY",
  "key9": "5WsY8JYnB9784ABhEdR9KcbR6jBDQcgj2zDUkZMxYQKVNRiwYNELP9GtBiMg3q94nFGLnDJsLHNRAqh2T4GTXtrB",
  "key10": "5vvhz43iFTwWWTVw6RUdYDiecM1eTUq9pJx8RbriC6tVhk7HTTLACvPGPTaJ4VYM4x2An7sYyAGoQ21kbywTrNmS",
  "key11": "4sgAqqo6cJZTzMbvAwUsd8xpnh26BmPPsgEmHhB1fFYbuQaPjAenHcYPTvbf6c8AoKAitrgZT1Qk7KHdqn1xnvfj",
  "key12": "5rZkQPrKNrJQUP5Cg9J6xcm4Vwqwf7i6Y5C13r3SbCqGNp3XakYKu2aij3acsyaptg58nsaNh69rGagAvVW1NH1M",
  "key13": "4mE7VB25zmFhsERDKnMLRyKbsoD5fBaijRDaKVTkJj7hDDZttyPFgW8CGhgAiY3RPP9FZhUyt5hSVxMDm91NDa3x",
  "key14": "5m2pzhmZTBZKd63iUUGjFE9ygoZhSPKypikPvsjt8yZSkwaCqBVb3U1vLj5uxdGZbvS4UcUXrzuVYcZFFhdaLzA7",
  "key15": "ggptfVHjmeaeBquFciPTGvBDGkWQCxzvdXuaf4akPeTKgW1a9RfrWW5YwaA33DE1hrne5GsgGFd3tFkt2Mt4EGb",
  "key16": "5v5grfM4rPWoFftyFgniWyK91FghQm6pYfPAPkxeEiBTz2ffZAzmmurkXYJi7gPFFh3dJVxBqCfPUgBKnGRm24Ee",
  "key17": "3pnxcgufcx9VtivSKPrLKGgzdXWRQwskwZXZyKwM8oKrBeEnBafGr7PCZBVNYuUBwx6x4is6KJcYYkSmBPFqPaiu",
  "key18": "3EbstvgQbs5ipkzficEdrW8UiqjGN7PBzJ4CCxAxqargQvByikxeRZ4Ek2RGwBnkJHcrboaHLZi6EhYB9C7MimJW",
  "key19": "sZQWJBrzFGEMd82bvYh4pD8sVz7QZu32mGS7XEHAFaYa9fM2e1uHnaKmu7hh9sZvHEByJVAPmhG4nAiJNJSpC8D",
  "key20": "4eh4BqHkMk2o8yoar8Do2C2CQrLDEHj5ZZVcZdGT7hDY5BhxiQbFM9nEKGDrLRqMpxM3PAmdBa44mfa4WeMnLhNK",
  "key21": "2ihsevp34CgJU25uScp2pmgqyj4kehh6fhzjWFNBdkPtv9BtBvCDysFtknpS9mYRvAo64bypaWSB8NMYjjgRkhP6",
  "key22": "4ukX9NuCH7FfdfRMmU1SxMMyZ5qnHWkacEv49i5KQYAXjmjxezcntFkE4zx7kDsJQ4Vwgh75n46BNMwUiVVyToMT",
  "key23": "66nNxxeZpADzqoQTUyiGoCJcDLJbdFvKPkSeejdJzEWUqPyQwoRvU4sMH3tUDqZ9R4vaMKgm9QF2H3mSNaoF4JmK",
  "key24": "2NryBMy3MHHNBwBWYNNVbvT9M8BHNEcbANFmSZbTmMvbvUpnRaPzEhKFjKQndy22J215xGbmBtwLGPHY62Pgv27y",
  "key25": "2V53Cr1AiLf6fgGqbTSDP33CSSiXx7RUqjzoddHEaN9NTukVTvMbj8pKdZwBcqtrZ8sqKbPDmTTRNUDqzpY8spsc",
  "key26": "2GCiBNbCvkHA6eUvFDdR1Mk8JexQcjgMRd59WGjM65s26X4DJviyhGHwbLFjbnpTtsMLWGp3JbghntUvTyVqmyVV",
  "key27": "2jNYFWvjQLiGhJoXVzbj3p8NyNJwenCFEWfgioVhngGBVZzyuBTwaEbWNb14RmCLyeybSEo9N3tNWGK7iUVvc1D2",
  "key28": "5bX9Kc95SaJ1kBDVs8EyHT3kFQigvqn9ajzYAYvcSkGNWVgV2LxTkbpCrJRsBjgih5kfVU1Eo1RvmamEwMrVX2dL",
  "key29": "2zXqch1X6RL1pKE6iHUBhsW2t255FNckWhaqUmNcaYUA3M4sfrSpB2f5MFEVXDVvdhU1QdnMcC1UZycUXN7RZ4iH",
  "key30": "2Rqp7G7eA7wBFvat4xF3vskoSvkD4mdaerBAKZaXNutDnhKacwFFE7TrdUjv8YcqgJRRbvoofyXvWKHtqp1sEfox",
  "key31": "tMpJ5Vr6A2TGjKLkA8xPPhQAHPBSpD52Q3FsiVqcBGWVywmLBPSEVnEvtcyKkZgTacEKPkd31fiyAyLtv1RfoKd",
  "key32": "5ssRatRVGVbnt6CC9Ff1fyCbVZgPJnXptT1V6xfJeTaN6b9NxiLynyUuHfekJZFHJsJZ1VrfpBvCuSe35JTSoqTA",
  "key33": "3T3vLrphiZhAcQYo2LCopKuL9TYStnid4vXArcR93g41WPcd8TxgAc4Lwdt41SRvu757G9a4kCAfLzLwwDLPJ1gy",
  "key34": "e9QybECm1haBYbxfzrU3MpqTERZSUdSBxxMxTzLiiKhoBtEbrindrh3JHDseche6PSQYpcJ1qRXS2gBjH56HqSU",
  "key35": "2tNCqqnzjjnhtUFPCFsNgzY7PNrZ1xMaCyiriiV2dz8VNd3gu8LVJV77JUvKDH1pgxwvcAnnFKGenszY7f1KxrXP",
  "key36": "rG1DK94cVNVkVJYrCjsxSm9RC9DpEFCZFtDJQA3omeAhQWRqCx4rkv3XcgoZFg3LouwkTccd1v4avAHbqt7PHtX",
  "key37": "At9PKD2iC3Lc5s2pxpwWwtR7hWGKr1xyfiCuSs9HEbs2gh1iYt3HsU8xGxZsCrFmVywBNHmERHzZ12F2sN4rHpo",
  "key38": "3j59SJ3FN2NgnTWqaUnXkrRtS4YCCBjC1LJvP64d4a6CDN24N9RYJrHotiL9iKzCYpgDLvZiJhJhPbeuWixHrm8o",
  "key39": "JviHAcNQgE4PHymyjt6ydto5gLHNrKNN783y4zDcdLh1MqHR7NyJ2gwCY2wymnyxPMgzGexGNNUFT9gNuhQ9sCh"
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
