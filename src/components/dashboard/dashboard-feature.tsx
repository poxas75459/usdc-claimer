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
    "3Y6kdYcUS3UGBMRzE7PbYJ8a9MT5ASBYwMfRFRn9rGNNcSyvY2ydtGbRdGZCL8Lo6TskFuYVTWuyCtBaNoXyFjfi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UgQ8KuVECFrZTyBjxAc8PT9Hkwv1bhAnDWP4MWbm6FAZUN7tsS2i55Bm3Gruj3zFgBroDzUDHTbUsZnEbrbzByB",
  "key1": "SHRY3pDjEEeXa7ooah66ekGm4taDcLn7oCgT54mWCG6hh3w4zfaNLU3ZLtxuZRbkrBMHuBcVHxszkpCyxQTLkuk",
  "key2": "2hn5NtLLJwdM4TpwmfBBpA4JCrJdf6uS72q9c3T88Kw6Gy4hcq3z4ex3HjTbNMCaM5kkEvQvuaGuBejn6JtEEqK4",
  "key3": "3mGQCq9278V3rjMSWnzBZx8nETiDhfnP22sQB5D2DW8dqWrAbkWGXCJMNLTMTBHEwuinYUCs47ALPPeZxVw7rFLw",
  "key4": "3Rzn8diRFxWBaCJLdPDn1K9G2NM4mYeUqZEc9fqa4F7hVXJKV2FY6xoKe3ZyCpxW4uj6wsZEe9wP8nUDrDbcwp4Y",
  "key5": "NRES2Xq6RfFbj1dZsEVcofqrikroxh4SJ7B3qYnVeq5NVgXvQVRToGEG4qGqHBHYGgMZamHRZzrw4c6ZcPb7iGM",
  "key6": "2AcmrC6uRSEGQTYekLbXD17ZrJRQmwHK4YeqzPjsUtnsx3txsqbPm9assAek7GA6VAiJ3ZUBRa9rBFxtBWQDPZLV",
  "key7": "43UrePkuFUYCp5ztgVGrJmMUZwUg4WsCzUVncmo6htQLjdvowv6xu6ctVeVjeg6wiWjHr3pNbRoKLao48S1g3bh2",
  "key8": "etiAQohiyGYRzvjfe3mjoMJpQsym2htJSDHCusPrsjN8aaDcfKuXZ8UFwHKuw99R2pG7WCBC7aV3VSFETBaBsL2",
  "key9": "ZkkCpKSKoLBqedCV2aMB5M5k2wpmv55tUjfrqq6WZNhRWfr5hpSBQEnSFjWzGUhw5Kimpb5B7D8CABvReXTWwsG",
  "key10": "2Kxh7Hmi1ygPZKWLSxmWcC3R8U67vBB5QJUnKJTyMmgBCNSnVFKhBgFdYV1kV1nrbdw89Pp63qnG6JheCKKrpztE",
  "key11": "4TaG2ET6Uk1S6SzJMs1GGcKqSLVUsComRHtbPpaqfhozGJUddrgh7ghEoUQVu9QJxU17oUwXCeAkiXJYdgexzXUo",
  "key12": "29F8eRhxpgLJuPZHWjuqErmiD26sqyk3kxThde7pGBW7HVyGaPCgCHprCjFH3yqfuKtaUruCzTw9ggpmefrKwRUx",
  "key13": "3imYzgWQ9hXf2iAK9qrjcEcgfF2EhcPkS7zUrTkkMgXfByDa6R6JMiuieg14B3VECA89sk8yNYGZpSB6zRQMcFZS",
  "key14": "YxDC7vzGdaEqJ4RcCf1bqGzzucLo8psmtzXRPQQJ9jbjn75FVmZGrqcJguAC6TUvAdi9Kog6yQdhNqPuXy7iZ1q",
  "key15": "4HeZdnjKmvLmhUHo1XTHJzo2JC2kqKxrz79PSy67MTqiPvQv8Z4WAjQFq3EgaPtbT6mfw6XN8LgYgMG3EYwKXhBt",
  "key16": "5trpjakmdqAMif1oJpYCoX3fggnngWsoxPN921PpznvzizACRGr1eQJG8X1eBXqrdqZiGUWy23D3FJf9bGZgPNrG",
  "key17": "2nSz2Bn4UF6AP7Ba4v28EJ8HNmk17QZ6esZPyVyzgcCHhi6ittXxZa5ydT5QgProfSNoXyYJhBqadsBHFBv4CSgd",
  "key18": "3tZwdkkCPi8vUZixoJy4VQsYFQHgr1iodqE2heoivEQfkYFhcPM4Z6xjkJAttJoinjLiQn8fKdrerwJpTLs2Z5U6",
  "key19": "Dn1AunYopyD8vzxNQ5XmyQ3AbHxHkMNd5Vn93mpBa9txh26ka8xT3ucEJC9Q1o6wPjejEeqkiK1zhwgYZUWkM6V",
  "key20": "3Zi124RTbCRTDkUA7p58yfwk5QSAWj49ssHUDD4YoWZEGhi8hgixKRogGhnYgddD18qsFJfMfCak8sn7UVgj3wfn",
  "key21": "4sU8RqMP4mK6gbaaMNC3GsqftECS4LjBaqhwN4pe5Ru46Ezx4Rk8G8oMbU9JRiXL745zu12YjrVXaC3Bv3SntEqe",
  "key22": "sGheorMHhPjtowEmx15omz2f1fJdeGYesP4x9wpmqFXxWjg9ciqKRBgipRdNxDypRddTygCuLa4dQqrQSKXSkeU",
  "key23": "2LHEwQVaoCyAMRbNPWLwEPP79LXXqumesFo8vqa5cKthZwkgyztaL9h2Xpyq9XWtF32Lh9qHf2J5ALnkgTNBkd2x",
  "key24": "2j3MC8uehQXJFd3VJJuU4gwwjAXdAM64htrwRQttggNRHGoF9ixvPZptMFFpqxGctHoRasE2tdmJGzBCiVb5hYbw",
  "key25": "3Um1oEqZ8XysLTLPhkzYYThCjYaiggidgwvQ2RSx5WtgYGdL6EZiXTNz8kWjuzM7W73Do2KeTaF6mS7ejys1TmU5"
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
