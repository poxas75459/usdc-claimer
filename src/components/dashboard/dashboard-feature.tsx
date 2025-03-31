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
    "45ZHymFf2FARSs4o5y3QYhcdR2HQrzE4CMQZbiZgEjsYnXwS8Bk8KYgS17r6QyBc9ig4D5kZcufS9WmMQ7Ubb7Lk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "DjJjLM2TjxBys32KVATMnoatuZP36jkg16UtFZkaAsDiGXFBNbybuMYcrJRWNi9f1w8dRjmbMpwLG5DUFXP8K5a",
  "key1": "KzNgQLEui5qJkWMAwXx4Agv3bLS9w3g6ax56hgJjw3yX52gP7hqR7onk5VMonAsr4WExNAqyHZUVeGD3CtPqtCy",
  "key2": "3Ji8rk7RGWEQYgbNYCN3iiYyTCreUmtpeBhWA4J1FWjGkMxmXDiVtsxT9xbM5QMWtMJ28R6ciESvAVtWUaDB5Cfc",
  "key3": "4sa16hSnHNyFK4edSPstnQpczcKRSQYsN97SBUvt48tWHCS2awxJ4AzpfryXJtWQxPFuzbhK3n9CYCntLiWDMFUT",
  "key4": "2DNMeH4oh5qur2oLsb2h2cUz5ajEUTbeYSYjfZVtsYAVfVWh6fwaD8e2McjTJpN2ztNozBz4dY8rZcrfwYsr72a",
  "key5": "2tpzqWDHeW9Lj1DU4grA9MGorfRMKruU75r3aF9aC2qkp2gjPzGiMptojNRGd2XBeLCjKqP7m7mn9SrAU1r31RHw",
  "key6": "2zEyyKKHzqRBTeMdWTaTaoUKupxuMMCpNv5M5AxZa2FJRFaBBsNSn18JowUf7XVupg7D453K5sxzYfyPzk2PKg3D",
  "key7": "24su37h56f2TKPjSPW4D34qMj3JqScFZXkHreoRRAPmMXuvjnhasWpHvUkpczDwpCyPZCwxDhobnr7GoCwEx9je3",
  "key8": "2Lu6majjKgkVPZd3kDvohGT4Dg13nyGNtKEgtEC17MPxBDAR3iuvzNHr473tEw4vweiZtzT8isM34oJYZ9iVRE2",
  "key9": "BP67APANGTQVx5tub3wtjTgVzjmBsprHs8BE5dSoD6Zf8u2sY5hn56za74Nz172iwNF6Hjh1Mg64AjMNiZtMJsy",
  "key10": "3RK65yTjaEqd4tAchaGnYXPtvRht23xBoW26Pj8rKyAJs3z4gy1vwa7siXtvp8zHZUtGHSEHxmmB1KXCQRK3yKCN",
  "key11": "5A6Gf5bUj5oTHTRwKzbvdXNkAhmEEnmz5LiJwzqFLdiSRZsbuwWBAEFXhqcHvUdnHdJq425GaaXq52oXF96zYzB6",
  "key12": "5spM2bst8LbyozV7EpL5iPJwmPB8i6a1mcwFoj1QfumozmVZrGAZAL6188bvkvoj9eD6VcUkYJKhqru7qPLDCh7q",
  "key13": "5DHgyK2MVfUNTnP4e631bhfnFRM29DX9TpYVyMWknFhMgoxGZ4jyeMJVGGH9uxGvABiKWCHZiGazxovfL2Q67JGN",
  "key14": "2Q3rX47nDvgYGTWr5bfkDtyqucnPYRVjrT6NpKqgZrGjZTy1xzANLe4sSaTG8Q1xHpDNZGZNBPVccUx6ut7WwPiR",
  "key15": "2XiFenRmhS3zu5ctPmG78wzjjihYDaj9TJwpGDnPVkL5Dq8tKoSeaSMroLHi9FAVpxP7iRKLDH87XXGCDZbAKQy7",
  "key16": "446drDewm5gGG2cSdV9tNLHdf8fxxv4AodsP8TKhwK5NJp8tqT1gnrjmgamQ9zDfubjAuPSmgN85Lc9mjKqrjf3X",
  "key17": "3amXTP4PGGsq6cz4CAk6avQ71xGQREjR1T9jXpD3adtr79THas3fbYo3FQdyej5MSMhLMRmQgzPhGsCs98eyFVq6",
  "key18": "4JKnKBE6QjtZCqteJKiu6H182VukAgo3xbP9vJ9uwvox1iBjC9ZaRLk1fZhpe2mPFTvQowT6MRnp9HnNMCkfBjfg",
  "key19": "BDR9X6dynxefWH9M8BLy1AZooLpo4K4nAwreT2doauWf1x8sjVkoqPWgoQsmdsELUZ7VBGzfNjJL5mK3463yrdF",
  "key20": "5xcbB5qQ8d8TXguupVi6BnuQwhbGnWc24nTajPnwgn9orsHTH5aubgLvjvWQjojQnQPAaJjRgTGkgHP39dejhPTh",
  "key21": "4bMamyUA1SYX4GgADqXApfFTvjvyfLqnrJrXAwc4T8RxpCKmBrvv1HboHtExKPtZ48HtSbCa6TF8JSk8TVdyw3FN",
  "key22": "yJk2UkGpg5YgUN26ALvPTULF7Adf36z58DE3VaKJCmZHZFTgnHvuDEZqcyWDw2ib8jVHSW6tmaYsn7hmNy5eFtu",
  "key23": "DtHJZsCzrQ5b25JCT2TBi9FRLTsfSo1x9iQ7Mwrx2fkZ3S8nxqNjfRa3724fWVfePZvBXQn7gWmEQDgMDvorozf",
  "key24": "uyquffbLJZ8zyTf4y6dM8KyjufeEWPbCLuMLezkT5xt5P4zaiESFKAaBxcoXeR72x4v772Bx6rHKm5mTgafxwm4",
  "key25": "4FDc1NjAvSu3ozABXWs4mduDvXHQDBKcMRgABroe638sHjG4c81Szw22MZFBnv2qQ9jPaRN8WpfVQEHHKPhdz3Ke",
  "key26": "4E437P5afZv9ZyZch8C7dqUsk37QEVWCYceaUtmTtH4fvbXM9g4KLL2xMvHJ8naQvVKRYG5umW5naNbSgvoe8JQG",
  "key27": "3zPLsnaAncLa14iXQvCYTuYgxeoqy3awqhNyoiUhGycSgq5g1kByq3meNZbnRKL2643xvJuArXZbz8FhDkfUgqdG",
  "key28": "43gyfLtMkinRAUdXJrR1kahNbRhuNRtAXrX15z7nCU3MeZ1hWYtykQ7CeNixQfVBb7MVDmw3ZSbp93Eqf5aCPFeR",
  "key29": "XbM4aFzGSfh8B54PSVWWuVTSyDM3aWTCD6zVAd2kqEFexVUQM8nH8cYEaddt2AR99ghoHWuDpBpBtxpgzUeXFnH"
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
