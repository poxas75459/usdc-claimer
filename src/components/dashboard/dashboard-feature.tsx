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
    "piLrgyJVq2eGhFXYnjMfSo7yP5aCqvTf7E9Lsmos4i67QtoFVvaqe6yXSwhczkJQk4cTUSrb4hLni1ci7GpUeTo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "57yhBXZ8ejE4q81T5pVqxfGj8Rw9CBJNG6TpUuwrmGtg5kS2uvT7e3eG2S2sHPp1t84MZCN3Sdsycyujw5BggZ49",
  "key1": "5xvtdUCwgkxM3jyEK32QLUSrM7RK8FMWeaM4xF2ZXB4Vz4AKBvoyao5sLnUsUmB7iAWMtSfEtNB8bHXvBhoomWD8",
  "key2": "3YcRjsUAn1m54zjJ2g88NAxNG8Bmd22LZczBdSyf7FesPcsWBrf1vy1TcthHkyjdyLRdHfdvL2FwmJK2XzZUQ3qX",
  "key3": "1JA1fQ2dSpdhF6nafSm77TvQMgvmRyGPERYBDFciCFQQ8uKMcrwd1WtdEhyEnmSmbpJUmnrz14YaGqkPLzP462a",
  "key4": "2Cs4zhdwSfLZ3bexGn5BhRpSk9iKT4gH15krFEgGC8ZGd3qbd3sFCURk9Tzab7qVcXUd9wV1biiSi7znnsJ8mNZx",
  "key5": "2UpPX3fo7AZqFfDTETp7FB5BkNop5vUz93ZMamXr4snMc17hGTfXGSb2kExeADffJHRh6CZBgna7ZDnftPvEWRxW",
  "key6": "27Fi3F9Hk1cBPjhs4fkPGg1R11qKSmrEdK1xfRm2U1Y2CcwxZTF5YHN89ZDx7oA6DE63cxsM8SvNzCtPkf7W2aam",
  "key7": "zag7vYBcsAALaQaLa8zjScZvfK5EtzSqsvwQynbfdUVMLFHtHDJzEJo4PGLaBGoUkSqLBfmsbvLPEJRNzKiX8x8",
  "key8": "2faLEtZyCnE67mJHi4mebLXfoUwj9ir23njDFQYvBeQjjFSYmuTHELDxfAm3Fcxb2dYVVVCzRjiy68iahTABrPLY",
  "key9": "42cn7DMpQxrA1bczxs2ikQ7fZaDsa9JK7fj27dkmdyZiBTfGUxywbMKBR7dcpU6z3ZGn7s9hPAv6NBy3JW7SfP8K",
  "key10": "2qCTmub5yQqV8BrkqzYy4cGzF6XphLT6LDsyTttntEtxpbFYCG6gm61GRwi6Tng11SQXuw3V7E3eqFnJZe8KC9rj",
  "key11": "3dP6mUnAf6nkXdJnev2nj5xNK9CTGxvdA5CeSXLD7t3NRYsFW2FA6Kj8xESipf2PRod4dxMVd6qqJzHWW2ieTqZz",
  "key12": "43St6s1r5WtS7TNewDvDG6wYfwHfq4yuYUNDJkTAbmW7Q3zt6kdRgzmgwdwtkPxxLZ7YFDQcNHk6LNRHp4qGCX1u",
  "key13": "2eAG54yPyCUy364vGoegXW2oTfrREBPNAgvytJeziqEEVNpVKYYMaT2af2P6nyxvVRnfvPjXizNmLCqRfVz58WGA",
  "key14": "41TqaqHvxCdA7mGr7Th8PGTyqYLKjj2AxQ4TFvaGX5jy6TH9ARk4c8iZ2GBmDoBDiPfvHQRGaShNauezcjMh2nkh",
  "key15": "idczdhjvpG3GrT7NpxhmbdS1979TGHFakMe5H1BAdf9VNQ2aGMx1DRNrkBEqh6LSiG3KGqZiDVv44iMVEEi9cQk",
  "key16": "4ScY38nTFHbNPxsCoVREJLJoiagmDmRwVskxwWVkox6iwSepCyikPJtfhVuA71HjhTU3rb6sitQQPRWocxKki2SK",
  "key17": "3iDbF41M56fZS4jbhnP73C7REsHCge6QfrEn9A9rgRLNJG1zXCGAGP6Lfad1Mdi3rES1u8tsqptRv9qKoFqy9Zix",
  "key18": "5KiyP9Rezy1Xc9is3NShCpMtwnxuqhWKPdscaXZ39NuU1gj3Ku9srZm1oNFLtobPyjZtBNB3hs1fPafpJwXBKpy5",
  "key19": "NmKVGQFkFHr6y2jp2v7Exag3Tzgt9n1HLrLfc4M6sYKSUqogXUKyvKA37P4K8BDFCkSXMpoFzd4kCNgshkXCALu",
  "key20": "5x4LvCMvy8JVH1m1LvnDpQv8NXx17U7oWJyPY7bcM42f8nnV6su5jifqZdLfC6Q1sF7YJGMrBwBccpLnedSfpK7S",
  "key21": "tWberE2DUzBqpb1N3aqpprKdrvCfNigehoGzxiLNtLLhDmzD89HYBkqqDjuxNxtgQ4j6ueLTRjWgdFdnTzPXKyB",
  "key22": "5XJph3gcgFbZDuW8uvaE72PrpKAPKGv2FoWYezWB5zv6uxGdGWzqRPbv2Kbsegpuum3PiAwptkw2cpqJpcnt4aV3",
  "key23": "Hzf6Tk8A4UHA3RcJpHP6kQ6iMyu65Q7vReUYCcJVRoLFeiwsuZ91d12yjvNSjwW1BEavng8qV5Ci8MdREvxAjGp",
  "key24": "9e21CH7XqbrqmweFf7Jt2M9PbGyaAV8UDfgKc3TzhUTXZx575EaWmpp1SM4AoawciPURYPKqMDGJcQL2ph6wjg2",
  "key25": "4rZrh26BKL43VqAYJVq6gnt6fZdP7KUXaw6xudGjZoqbbrDB6Qu8Bms11ufM4PJoyZ5rYQUrc2t5teeetP17CXot",
  "key26": "48WfT75NHCVwregxQmAfb8ZHV4jXHxNeoZ5xP9BTpexD7pR9GJW5r4fUNZxoZQNb2UK9X5GomMiHWX6gcVYtbWj9",
  "key27": "56kmB4gTXGSZRrEhSGQyb4Q3dYqz4uY7HLUP9nHJehbUc12P7JAURmSLBQs3bStChJUWULdvrx2JQsaREnwmMMHA",
  "key28": "r9RmqgKdvgoQsa88XVbMnmxdNrYEeAjD2nTjAYMgaymmuQToaNL28edQ7GTmJzGZHqG9gF8tovXCjzKDpeLVhaH",
  "key29": "4RjHcco9P6nPazLeF9f7QnXDFgysiWvvjrdothMzCtYC97dWnoT9omvQhmFkiW8XjHBsmJ82iULzWtLPiBH1JS9b",
  "key30": "4steRwSBsGfVxc2gPmnSQfSczvmiVrTVKA8hCzvGKVomkKDgjZUjKzDJynyrXq5xSiKYcFaTnucphGiiwkVioAyG",
  "key31": "3eZHEbuzQ53HQT7gtqtnRR9rJYyY2KmYWHdDxqbwC4knfcP7T72e7ShaWMLtjzcEUehvH9th5cxFc4ezBTihemKD",
  "key32": "2HAsGVsCrDiqneFz7BYjpDLS2pzyho3ECpSRj2hdUqE5g2UfRkBNb3P5kxi83gLJDL4bSZZbscHcvbxLiS5JGJxg",
  "key33": "3TY8nPMUWHfxtwhaQoPCZjT5XCK3sFvkZbkxHh6dRFBgxck9c5EzLGp1fGVDw8YAwQTBNbfaZxroucFrdF6FJaQs",
  "key34": "3XHHV7M5dWMiYVwbwzsZfBRM9B8AmCj9Jy14h5fRpQqAmP9mADiP7f5YcTtyoSjyiCFKDemE9V6whDeaM8g3e8sP",
  "key35": "3g16176gV8rrCtCzP4FZuw8aD6zsu4B71yqHwBGTD4LyAQsydanHE6jDz7s3u9XwPu51VGnSGNQLUzjZeraDkzWW"
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
