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
    "32mpWcRDH6isJzk3ak6iihpGWiQsUB95xKbdbp7JEvW2898znwBGY8bG1pvweXFM2iMNXNMtwoUgRsf9Qubg7qAh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dbco9TmZoHT5M7tWimoAbEKAtZYjJ29AhXhJWwwuvwt9jjjYGbJdb9m283ZSpSFqQBaYjaJEb1wKqe2QCjy7xJR",
  "key1": "39A4Wu18eSwHHwTJSGkhvKSgV5M3W7s9C8DoqctppoSzoiCWi6DA4NdcXSXZAP5a3c7Q3rary2meubZb3KZjb2rj",
  "key2": "32PdGTjXSeJAbP1UMKQCC7z7CmseKTfqgqFuW6TSm6XGDKyj1hd3bjiCuKjKRHecXgGTvpY2bLurb6EPv5ZrCp5y",
  "key3": "3ucFYDBhE27SLCNVPncegMfPTexAcHhMUkRQcv5xxgtzV8PkjTFxPqaAgJxqyTQST8eDJVv9LwqM1mKPozTANDeZ",
  "key4": "4KGj4BaMLn9Fpm4jegz1iSfeRkDfsqfZfH8v9HqspgDTdNKwk9aHYLrERGuXCBd59KgJSBXEdbM7NFRVPMnBzi44",
  "key5": "3pfAhjEBCDrnbjd73R3GpqAG7e8zLPLwXUmB89czXyKAoGnRDnwDxDmBDQG4jkmQnP7F6PiBTenmhpr8NdPar27k",
  "key6": "2FfA71fp2cSUzEKmQANKpi7QYeMWyhWY3FnszG995yzER9pKyf7qdBhSBjBaMsSEz8Bho5wJacWwYBhrBFP55kmX",
  "key7": "kxkGTCsMHSeqDiyNVkYjfHuhebadewtjC42ceDh1NBK2YK3dZXqhmeMgYiq5BUejQ4YqCtH6up3znSGzkV6NC4H",
  "key8": "ZdwoTMCKyFNPZmYy8bN1geGUxg3mLWCmkCrh4vFwkd9rgYRcsWQAHEz7UpCxiaVSx4Xd1C4JhsZworLPBKzVduv",
  "key9": "3k81DFofV6Xc6B9xnXm2tbsF4qeu3WyskoSYwP6AH155by5oApet3fssA7UwpVphs5X2ynpMMQeUnkv8dcsTNXyg",
  "key10": "4GtvC7Dsg2oa1renMcFE8oY7Wxa5gR64kFpwxWUKEBkgcv6qSkKUZeNudbqLNk6S45AoYV7CubRAjMZTira94kj1",
  "key11": "5kuGVmcTZ8DFM2ZFStgs94Rkt8WreWnZHAWFWHytbVUQTJf8UCbMmqLU8QQZnZNPoCoGkG2enoJYwdxw7v2d51Q1",
  "key12": "2cDTMKnAFRFEnr8M7CTigPcqfyz6ftfc7h64a5NFZppYdEEBsDDCGGZ3XxrBxMTMRsQk2vFvZBmG3s1frsywFK55",
  "key13": "31CLFRWQYqKyK9DApasazo8ipF371X4rXsvZjXu7G4BE879w4mc4PRaKXJDmrCgNug1aLx5dbAT7PJuKgCiZGLTu",
  "key14": "5sQxnZS493E8ZsyeNn8o7xtoh7ZLEJ5gECnbnRKUeKztbKYzFmHhQPJwDiHo9fYbYTazhqmfQuWMr6uqYPjup9GP",
  "key15": "3G2B6H1WTeVUeNoh5m82KiMfLN7xZdxrw5XH385PeF3ocTpouWp9QPpNctxbi8omnsNmtKskGeuXNJjtGfvoMqyU",
  "key16": "62heamPiPUk6KSpHjXkLGSKiLrbVwbFK1VwngUrScf2VANowgXxUn5inKMponz1LV5w3VqTHzN8D9UQGJrHNBdFz",
  "key17": "53zaqupLKZKrXHCVPATXZscY5ariazshFWBsd5arSMRwpev5ihaRjfzNnpY4BSH2mJDKxRRqgUwcdrkPeTorhJCM",
  "key18": "2jwJtvGQvZ83QexaNaGpyFXjXrCjg2EvnehJWZUtjFSdfc4GWp4H7pzrBoj77WgsF2A99zYcLWsg1oLKyVR8ZtNN",
  "key19": "2bZBWof3B2oZYTLTFX8aCX78w4NKodU9cpmKZq2mk3Xr86o7RDpkrFhfxX5xMmZpB1d6dVzRNy7VwZiZkDorizFb",
  "key20": "5YakmqThwtVfPtPM2Jp8XCzmiFKgXXnKLEWaHPnYUQN4qTyJvfczvtFgWtcxH53gX7CqTqaHekcqXGYGrRWDAa6h",
  "key21": "uvaJaYGdjbGhzqjsi1QLpAfu3feHqvWJyhBUvQMpLhV7B18aqw7RwnNUDccPSc8udHdZFCQZCNjPvRx8Yb8MfCk",
  "key22": "22i1FNdLWYCEmaQpbFBeuXLRUvykm9NA4Vha9eyZoszD6djDnE8wWEUcUt5o2L4R5uQ9oB5NBM8bpLqNKkGkaF5A",
  "key23": "3LpBzr1SmcLqjqVg3eYjFgf1XUuAAke4D9QfcBNXS1bUwbkxo3eCvjmdXou8jdmrKxKRDSanBNW2ajwwBxXyK4SU",
  "key24": "aRnLVN7p73uSfuBtYrmaTPTpcCrGAVUXmJmDshDyUcDeeJdf6gXu5WFkoLJuVKoyVs8ndfG3RCxoHtkWLvhZ6Jx",
  "key25": "5x14oLphpaEBwododDVe5RL73yZSqEk35cHZdFMvuUJqxTnectpEHm6ocUvszeJDpVDWVmoax5oHR7Dgmr7FJFav",
  "key26": "4AXxuwZzTvGs6riMr6Qx1cj5xnUfrAKTz35gq2eSy56AeaDVumHWoZyGrq5VvXLNLjUnLNxWeuZxT3YFLUmpSTuM",
  "key27": "uNb3VrPbaemrcWpufhhfUyJcP6io76YXTsSMgSPBGGhfvWgPDxr6Vx9LXTPtUJ5qoPTFHtqAKKxfbD64JWtjjHW"
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
