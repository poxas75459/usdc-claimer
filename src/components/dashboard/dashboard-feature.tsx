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
    "HNucxP2DPhreCx7owd64L32dTvbS6NXz8MNXatF9DdcEjnseX5R4f8P2fnQ7RyKv9KgNNrUnjRgreGBioYgL3f5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qtEg38Umks4j6FRc7CqzRBV8g8kftthmLGrN5uc5bBjMUtXsiA6WXwWU4YF7CPsxsUJtQEToSB6rvzfgF84aMpm",
  "key1": "4zdaJD7tpGhGJwqbRq8hJGf5gz1Mikk9mdbVvdocNVG8doNkM64Z4rtdSL1zBa9XW2mh8xSnwEPUK9maC7Z4bsvk",
  "key2": "4MRDgr1xPvEt6Nt1WbAMC3pnbY4GgkrNFtpCPyQPEK92m4LSM2LDWReiwMNMMD2z9NRwsTsQWWrwoFXZBfG4XQDW",
  "key3": "64nzjTSmBvaBdapYW64Fd3gRCy4AehQYmjBBHsTQ1ZBxMswb1VaVZUpUWU34rNMkLBnS9ct4scXrex9sZmPJcqTk",
  "key4": "2vAAyCvvk8GEMPxNBJo64jFvne3es2DnuDhTEwVowWqiGaGYBqUkppFSL4cn98mLfVze75zVkkK9smgNAbt2iiPa",
  "key5": "49oN7FnAXheEfyDvfpMtJy8iEbGv4x9gbHWyGvvtHDqmvBfYLRZj7mVJ1UqzrtG5ra7LdP1VBjUy7brZVC9iXXy9",
  "key6": "rzBYQfpk4k3iyFUyS2NmqcPsNTjG4y789JtfxNncm3bM59CjCPq3RTbn7CJ7RtDMC883wxhmbdM1dDjwi47Vn8H",
  "key7": "4fUQwVjc6W2jEZAkWDzPEwjm34A3T1F8CKUFfFGum3i93hccM8wksjSeuTXXXYXY6SiaDpwMUxwTmoFd7tY2ZX7z",
  "key8": "4z733DZpo3aDZPDuF46m6z8ryJyys7FAcugX7RxHRPHyKu3z7tVEJm636BJzfKSSLpPkvcV99Zga68pToyLkz14T",
  "key9": "242HyWMYNrHbYRcizsaAWrTiLFxD6hfSmCgGcQvxa4ErTLmU5KST1DuoKdNZyEsRpAXYpW4T6YtGuSDgBKWp32eu",
  "key10": "5XWLEQndNwR9itZRuY79wz6jcamTvcJ1uMPQZjgHorR4Fh5gozmoAYBztmgeDB8oa5EJ7FT8jzLLSF1JUpfxND59",
  "key11": "5vPhhoRsrHQDi5H1vyBgjKiLeBQuyZYCmZcGw9Zx8fPcp5JowUVZffw5zqSoisxZWjJzCKYGcX6FKaB8g7u3nqas",
  "key12": "4jxMerwBqsg8Hi2yiEZpbLBDTgsdDxMHLY76Za4iPtNeC2geRushxawLGnHGJmBNp52q9XFyWbx1WyiKmH7rTuSh",
  "key13": "CXopALWBqTynLuiuC3siD8XZgbDew5kVDiZGz2NNvwQnKqqBHQcLWN1SBq1DKUgqaAEyKfbLXZkqaxmzbobQsRr",
  "key14": "5MKXF7Sg9MFrdg91TXFsq6CJeqQHBxM9XJjnptjtHHphLVwj5cmdnjdhJjHmTicw84igDsWFgvGtS3DQ8FPXrg2G",
  "key15": "2j41z1Quz6T53fyTyP4xAZQ89EfL4mpfKM4iptQkveSFRgm7bvHCqrmAixassVYRP67tnTxW8tGts2VaiXVWBbiL",
  "key16": "5SDpbARaAgUW52CCsm2F9z8mrHVJKvfbNs6NutJSec22rVtwZsEMHM5zoXebieY9xQ9N7734m3w6b6dyRbXW34bm",
  "key17": "2jep7ps8TgddS3HiaN4XV3UmUDTQHk4uvKerJiT39QP3G6a2fK9SgirBr4zYtZAEinMgAQcX82n84YC9488z9dsd",
  "key18": "2m71obHin62uvymqQGQB6u23L6L7wstnPjZ7Wpgfjg79wGLNqbAqYSg9M21SdD3PYz1ZLmi4eNh4WTnw4xL5UzDU",
  "key19": "57U58bTQdy948T89U6bgfbR2cv6xRk8bXdLa5EDU9PFmHQz5oZu4yQmF5LAUwre5rUc5d8p9PK821L6GLU4debsQ",
  "key20": "5t8t2jV9eyp26HJt9sg3uFhdqCA1BfQ3QrG8qoE3pP4ydgozPddi8gpfN2hsb5X4rpLHYp9xq4zJDfUADsQshbsk",
  "key21": "2AhXZ5jiop2TVxhQ5psSiugvcEsS7KSufiwEc8icPZ1dPDTqefsBwMxzxXYpn6DbwYM3CxDKxgWP9j16xgMCzffY",
  "key22": "3naSTphZG4Nvt1wdF2YVbQsnA1UHQjs52Pc3uwBCvJ7eZKYVnDzRYUhUir4DwggyR2EupHjr4YUZLZau4ybKRrTf",
  "key23": "67ECPUkEuaBNZfSbA97dxD9Y1aaMx3GNFT6KL2XpE6QzxQs8FE3pfvyY2JE3NQiCqo5GCiMhphYwbDGisnuUkYLX",
  "key24": "4F88ooZRoagGeN3gGfHXyKNmZiyucqW6m9VqVxBv93FAjQa2meFfop6kWKF6CEn2zmJSpMn31k1YPvw5KwQk6uzE",
  "key25": "UzgYTf7AH92kTZbiDWNLTdaP6bRJbWSn7kgNhyQJnuohjXDCsHcrb7KcPiZWKnjFkM3te3sXEgJG5r89A25NqE1",
  "key26": "yY3ZQVjkR27rzbN18xz4KtobbDXp7bnYXGQMdHqHtYusDn4xH4pVK6rpTntACN2bpECPWeYxFrLCv8eEQ2CZvwP"
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
