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
    "2xMMCuxmAevrYmXkj6XrQDmuKMjwLz5v7vtLG3EhQbtRrbSiiQWeYiozDgpBzQQWqjMMC8g1S22Fu2w1F7M54zBX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CY85R45vA7tZXNCUhJXiu8xFLoAEbmvcCieRx86XnyN8WV1fdNkYEXcZZquKQrhHNDLQJnM8NCk5adD3mq725Ce",
  "key1": "4sP7PgqKaRyZgFCCYqvJxJGxZSbKqK1P33wgmqavEidaiAV3GqFM7gPeLqZ11XqVmsLP32Z76DKZaMgTVzXX3exm",
  "key2": "zxj98n1GKrrDAdX9CuAhSS6qUjgj3QzFtQBw8sTdPpYTeFkbaPgwxs1L1i8GerpqJDanJPUBY1caHNmspXiEzRK",
  "key3": "3Vj7jqxQKRWwAsV6A1mx1iJmJpcVnjWz3w7R4oKNTqB95fA86UgMr4Wd4xHtohJocASyLiQa7ruRg9FLec6ehKbt",
  "key4": "brPerXXZupFnTumxSTqAbdS5W1AoA1szmDtWE35G932VqKXfpYDkrV7ETNGtWi593qLSzY9v2xE9a5Kc3wKbXJC",
  "key5": "219XvkEgs9NGKGCy1AbWJ7siYBCaCsuHySk6xwhqKYCiasuciRqJKxgaA1WLqUGVvcFxZYHrQkrtpxwKfYN3c4HP",
  "key6": "5V1KehQPyeLstj2gPZwqyT1bEch6KzXcmzq4B6XDgGo8ESASHJCJ55dEHATGpKoJhuYyPfRSjy1mvs1Vijcad95u",
  "key7": "3G7FhxcAy1jpabiY1j945duMpZvnUeYqMtLpARYa7vfKm5fBYGpSDaXhRyycgLV4wx4xB3oPt9d6MGYMayEqnwg6",
  "key8": "3vFJgUfzhFUA8EHZE3B8Ba6YA3V4fWnAAZpnqWAfZjjbqTqhQcJnAEwqB69LqEkhNmwohMsY9qkCNypfBvhU9PgG",
  "key9": "3xHnGEo6MAyyDFCkq6nNfJV9PeEncaaD7DD4swt75BajjP3NYC1TE39ipNaWh2Dq6J6X7msgRAdL5iQcKK3LQNxT",
  "key10": "3B2xhyxpdTa8cBCU6V7jtbZZxLfE3mhnDPY1yW1Gw1r2iS89pmGPZCtAUCSwiZwBrfGnKdDQfRFLSoYj6ATrFFdA",
  "key11": "4k3tLAPfAStqr1H52d648gjGDshXYv5HcVSAYJqViZjDgLEzShjZH7fMd84YT3XPEjVcVjy4sd8uBD6S4isEngte",
  "key12": "jh6CDaNx7fsWK79vz3kE2MiDQ8gVGF2q2XTAPw85gYmJ16Gf3X1nH3osKCVFSMTtumPoNgySJ9pgkmZo2kVNAbW",
  "key13": "2oC8iy4TbFLLeyfzZYiNhww8egbmqUedYwToFNcBf8mK1gGkeJAuhy2WEbP6wgQWw9knt8Xjs3tcijTFHSvMFqNa",
  "key14": "3MEMan9YC3oN7iHTVuN5WF8EST24mBLPh5Rqv49PK3S6Vh2V34Kypu4pBghiEtUZPPECGnF2SqhNLf5A5WvmrFs2",
  "key15": "4C9WvMSpQvj6nwKWYmzpXpcQFAjNn8F4NfcQGnmempRvpdqiCpfLiHJoTPdfYmEtsZhHeLdaXwhtqT26NGXNtrMY",
  "key16": "2FGPdSosNdsSDW3JqQYyKPjHA2T7RVVmQeMfSvEjYAG7erMRWLvVKd4kxZBrVSKxfiUnhhW6dfGtp9avwmCR2uiU",
  "key17": "3ocqnkyZ5KzvchzFYpqR7UV9yZnHQgEMauP3EBkFTQb7S6JgcUxrPNchbYy3geDgM5pz8jXcmzVMgpHZiVGUFjUT",
  "key18": "5cqrZRsti4F1WSmryaqNt7kwvCbxAu895vKoRtP8kHvbyj9jZx1MQtWQbTSYgxJVsSsZMWrbcE29HHhQP4SLDm2Y",
  "key19": "4x8USDZwMM8Ra5FbpFvxEbUYZDyzL2nHm88V3gyqTb8m3Z6AncXE3DGGu4Q2LXthwhtFXpVnYfU9Qon4WLKXkzhf",
  "key20": "5kiyU7skPHrP2PEXVjTqYhYpoBLUVgBgnUozDSW5aoh8U7TWPjtzJGUvW6sknN3Vd7kWP6HjERJHML2SYJh2iuvG",
  "key21": "4DnjGEqm1kyezgySgWFEGV1mbyybVdX5ecuowYZhsuD6G23Fn3siRBP7FsbiHJc6TjqGnydkDoeiLuSwg3uxcP11",
  "key22": "5kE8DBN1wTrtxUP2b75pHyHKAyNdLfKPzuBU4pRtE6L7exbAnyt4LaFrjCmrXxu6ErkKahb7aqdLcAyUdEG3Cyzm",
  "key23": "39N14X6TkPWAZeGZQgrw9pX3Q7btybNyGQoiLDcMcbd82Es2232nJPmrjo4ggBmXsC1ppE1wj6WHfwWTnoitsf2s",
  "key24": "31nrgwAL3TvRsAsfuT1JZGnhxHzfobPvrPSHWxD2w8awUA2vpvGk1Rm3ATKXr2ss3RMNPAP2K3jUydKWqFLv6ZWq"
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
