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
    "5xTJERE6iHnHsoaEhFoJ9JuXUQczF5LiLcf37h3cfMmcrXRtNmupChdHPec9eNdNE3L17F3YpFDmDjtAB16doCqk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3SofkVFChauQB9mUFdYaJJkbkuViNYx6LY6GyZXeRbTzunuyJkv1QnV4ftAYWEzaZT5hATShdgUAtJenzpH7MY9R",
  "key1": "2eeQSBQ1PP5rURMzYXD5vpwMy6zMUo5L3M71jnyXNoNtV1qpEMKQoTo8a5LqR4RkkcuCP66tnctTV67uSM5oRExg",
  "key2": "3b6uvPe6iNs7MerXaAEBGYZRfwwBSNEns4LL2Ytvir43LNmCqm73N5P6e7mMocMobNUSPLzLTXm6FhqZB29jCnQ6",
  "key3": "5n8saK9MSQYDEoCypcZfpUYBfAR87HFnarQayPx3ZPxMaeESfiuBay3DmaH4ZTJUcg1Y5qnrsyb22UVDVEerNNE8",
  "key4": "LebU7UrekNjC5UYHwPVD7Q5u46yZinCt5i8X8onAf29MR3bHcV5Lak4npVxwcuDRbeenqKmrh2G69iBubJuiLsm",
  "key5": "4FLHHnAiumBqBLQN18Vw9sbApZxLqtkziFTK5ai4W7BaD5vryBWwnxjpCiU24by9w8mGWZnHduZTVpQwkAE54umw",
  "key6": "4oDmGzjKPxRQ8zjwBxivHK6RbtiyemTMvEGMJurvE51m9PQieKRdnmpPiesJeMDd6UmRMGuTNPLJSrdQkFieFxjg",
  "key7": "2Rp9riWwhoxSMiQTFkybBhDxkPjPN4ynGN2SQkk3a8iyQZhVCPfNrj88k7tYrtvXUV6Vj9wsp1xFkeXRBwVao9ET",
  "key8": "5ZD6me2fRAgw5QRcYCGbt8MSWpd5iC4VngMqKP28TDjiYs9CwvBe2Hng3UpjpL2vB5M8Cj7YknM7JEMPbWVSuYus",
  "key9": "iJbMsTKC56nZ51449hP9XgeBzpdqjm1Rnw19k2cmJLvRdPBGdCuB5izKQ7ztMswuw43b7qD438PBDS7jwvBjRPq",
  "key10": "4BjtxdMLLoBvyHT3BBGDYPXTdto9ym9xWVbBXR3CPmMVpXr89TqzrU74mA3o61GHryySoHdKq8565eU6qrhuLBkT",
  "key11": "36V1fKapZdfAsCCJYiKztcsmEM48Exoy9hYMrHYc8gTUX4cwWmtYKm1bPPYxeVCHzrYi1wZmHLjemkb9C6xV56pt",
  "key12": "Tmc4mxWwiHEDU7odw18V2ThQDRFtwUvD6jWpgaK3YCFGVnH9uiVGjFjPDDXWryQeDjnWAwf1qEnXZAnvo2ygBny",
  "key13": "2YytUsv4eWhWfn2ZmJWqxe6pMyJqK4tg63FNkBeo6Xh2jjawC8MAbY3epsZAYqwzJqaTYcJMfeM9BqWqvThTgpyf",
  "key14": "4kN43ZGuZ6iqtrbUdECbbffQpB9Y4xP2cce5kwYw2xfwCrYcPfuNLXUM2LeMP6tfTMWNhWV89PJPM1FPDhGLKovb",
  "key15": "3J7vUnBzrexU2Nbvz5NzfYnWXmp27My21kZ5ptk7vePqvmvqPD5jhNn1qUMErf4jnLLYRMji4cAFFcT4nkJwbHaa",
  "key16": "4Z8VxHEeK752iZjzudH5op8K52tnCBiDoZwLbPfPpgAKf8uBwfhTYqYHhKaHP8UMcsiBAyfU3xY5siDZEYG2zeen",
  "key17": "55jMn1gKgmBFEh1SorDbBZM1LpK3gTnzXLKr5MTDX4hc5vNYH8A52KGKmQZxvwJ2xDqHEVYuEUQF2rSD44zzAxS8",
  "key18": "4dVuzHFz574iaZmS84dSCkFeKUVgxmaJyAv5KJfzE86eicapPeBXVDPbjLeLzNeJHTT7XpzacS7kH6ZXxaZviDTU",
  "key19": "2NtAomouVFSL5kxvMufwhDmZxfDTsnNUr8G9vH3p3CdLq4FsApu9kmYDxVgvKzFpcbj7kBfmPSWNzVy8uCRgLxFh",
  "key20": "yfzZbwQnaUm2XH2Ytou9rTC3CDcof7WGieNJ3W6DMygZUNMbRNznkdcxB7PzCR2SjAh5b2dgRCWj84gGKwbfZPE",
  "key21": "4yCsi1LG3sLeJG9qCzhK3SAHanVx2BinP9CneNRkXtX9iwmwZA5MhErL3RbNAdVWY7e5dEnLY6pZT856boVStFEA",
  "key22": "4Vz4S8YgqTbqDyFz8sv7icCYVsMffd77XeANiDzpzxx2n34iqBZF66sS665jBPhELKD8iuVS9QfTjEGSPpSM9HJM",
  "key23": "5N99Vf2Ka53AsvFKRiVwtxzw9gf1E7EqVmzJUfUNUDGzUSPGUh4Z6AiLmdviGqrjrLV5dSNrfcUDSbDG5oqbosee",
  "key24": "3NPxbiuKsL8pLWkPuTyu2uX9cMGQtb7Lneh2TjfK49dHaGEH41bT2d6xUatnje3hyToG7WbnVs3gWLKStBw51Q6g",
  "key25": "48vThicurwSEVqVY6E8N1sziie8ygDoYsjVPSpnWyZn346hj3bbNVDN5PPQEaxn1SCQuVvbud1HgUamQXhWgnrHS",
  "key26": "4HqfuxMqCz9CBiDskg5i1d2SkjcCzCtx6HSGXUfPAjk5h5HMSgf535Nq4VUSy3sg5qBXs6zHxhYsyqP5jT3HKi2C",
  "key27": "nJoRnfX82dfcYauuXKNCWPeW57tdBvGXFZKGwWFTkedUxtiyYQbPJ5fyfB7eSqt1tnbZbHJVuk42PQR4XrvtUs5",
  "key28": "5qHqT41dHqRznBsmVZvwU5X4kZNefL5VbTo23znUWANfdzdkS6gfxLWG5jkEuZLTWsXCYjyMhGkXY1kbAsZf79Ep",
  "key29": "5ok1N47rEMGrm3fm1cDG8wtxcgfwEkgySefXEBTKNaE6SEzXXvbLBzeRzoeC2EMPryQbt2XANYa7BeV5HUs3Zid9",
  "key30": "2GfH1p5dc3mXpnqFNzHGMojz2ZbFBBgunVXucGAQWEHcN1m6xW8vp7ghAZrVkWRGScmLNyotU9kKyWHxKtVyPR48",
  "key31": "3NRZEK1HH5o9fpzhGS1Xnr25S4iBte3mrArhkPKrSgsXjtTtjowp1dAx4J2zshavqqHkg48KQ4mRNxAcLFfjS1Qc",
  "key32": "3kp2kRK9T8MPg6Sfk68oxLS1L4gs9Nug68nvzs2BJyYsJkUHG3bE7BpHQ9tFaPtfsk1qrP4SzHMonsF9wn7BE6H8",
  "key33": "63mm9cYRDgez8G2MrTUGE9s3ocejQPX9uz8VTHJQUh845NCLieq2Z5vwYMoLCxov3KkNTUnJRepduVjojggZhTRz"
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
