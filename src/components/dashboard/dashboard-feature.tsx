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
    "31jZzAe5m2AoqLMZgGue95J5ra7znjHJY5znizt1ieiWg484pVFAgeFvw16rGa773ysu7tkJSSG3PHSoiEh5mAjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gBvhSatXQnUysmnM1h6QnxMmCEouPRf7Lf4SK4LtHqeviPPK3aizBPz1huRmjPVCacRpZhCATnqY2pV9iDmrZNW",
  "key1": "54GNonkDM2ELDzYhqn7mHB1f6G1JuUYiE6n1npa2sFh85wKrXRbajMA64vPgsniQvysCr6fyy8vqmwJMJ45PHSdq",
  "key2": "5dhaFmwR4KuNvMCGyvN6evkPyeGN4jZfgqnbhoJm2oBB45w4TVLNKj2f8KXNwiVNifubXiCCsX9xC7YEFttGRohk",
  "key3": "yBo5ofztduXVGGfHq6xcu5vb7ma65Fqd2dywQUAbEpyPTQykZ4CtcKVxpLRP7kVHzBzLwZTg5YfMnDDymqdmMeD",
  "key4": "2JGfwgTZ2qeouMNCnb4noYGEK4e5XVgKRLZaoT2ixAeM3urGED3cVwVpR8SvzimFR8bLyy2m17xQvUCSE8VvnjNY",
  "key5": "46iv9wKwQ3i9LNTfa3THx1szx7mgxqDyD1MPx5prnedn92bw1GpqaYS9Vdm7jYxgLofF8j2gcCt86q5E8tTV7Gq1",
  "key6": "DHx9Zg5y3RBzoVhwY6hQtQ4dsvWeaK8myoyFmozKcqk3t5QH7PcTCqbQ4saRyvLLMf3MXbd29SBFtNwJkBBAC86",
  "key7": "56MJijeDc5j7BeoSBgY3tJFa78LanXmsVsmHbV87uTwBwV8yDR5Nt18gozxznTnKwKgUkA8dufq6bzSaX9HB834P",
  "key8": "55oscQtGhPUHGYVZfeoBfoa8QMV8TvSAuEjfSgjDjjxmRvMoCVA3FiWdab2ADwCoCCkK3mfmM8E3a3a5nnyzuJJ4",
  "key9": "4k7qp6fHUANMQ5bcMW3TjgDmxBZt9atkBXSQNDNEa7RpJaEa6PTy5mejQb4Ftg6p1UTeTtJFUGMKMEoRE2FMtKzc",
  "key10": "4PXXLyHcnu1kWkMzTGNZbUTQsDPH7ByxYWzJTYoahsJJjPr978Ln55E8NMt9eAEHmaCMB9s1tHA2B6Jw6Y7AjkQc",
  "key11": "4x9BoxGnVJLvC6rESXm8pX95t6aXacbx6yXt9oe6a68cNrjQMFdkXmByxpp5BxD9acY58LJiuo6UNf17G3MHZjc1",
  "key12": "4fZs9TAhAvAB3FgmZqLpmuZ8G4iVMgAdY5F1KNjgdp5d4h5qy4argGwkm2Cc1JxqSbZLdzPhrDh6cSmxBpPDZP3c",
  "key13": "2sJDatEpHv9fap2NF1Y6CMjr4pHy6WPTBNw3JsgR7Ww53JX3M1HnjgfHSNr15QoqMGUeEofE7rkHjRMANhbbr44h",
  "key14": "2Ci3kJ4hMrRktFPou8m6qDosnQcDtCLiKnaiJsPioceWWYwBd1pXTQgyLZABAq7GnZTKQSvFHJrSaSMPEDXWYTPa",
  "key15": "tgr6DD5LKmpiyjcnLmtY9ENRJyxiLE9nQVFF2JxK2aGzFUddxB2HESEcpVibTMTJioSq8jWL8evmZb6FH8XxpfM",
  "key16": "2eaeAFzgQJ1QTKCNkkiumAkis2yKjPXjgXhwh5UnRP34MgpH6FCjpUB8h6CCp9Ez8HEPZhXoCCcAYtVidhyxui8x",
  "key17": "4zXeaE8JCkaTqktZSvSWDCkdnkDAzxfGwTn7ip3btmRe7q9uxq4c17HriFmKPUPnGSx1f3iBkweaLKiGh5qBKkNV",
  "key18": "4LTnd3ddisDMbQAPrfnM3arGQ4RwNLvvhofcypVF2nBB95S8CPqmeJEQo4dUdswwufP3Ms4emLG7Mwv2GiuDgQU3",
  "key19": "374F5Pouu6Ffw2v7G3pYiCjdgfcYnz8KSFF4DMYr8MK1SNbZvsC57eM8hLQQJfUryQxAo5r69ytu5bCNMTuweYPb",
  "key20": "vouiwnCT3UA9g2ggMivWEaskaVsrEDpEPKobEouTSaMsFxvy7uxLnG5r1JQR5aYpe8QRhyCdhvi1YNi3LNomHFZ",
  "key21": "5pTpm9nV9bqfaCJmDLTTDQJS4TG9g3Wq4umqSaJYfDF6rkVkWe6jBaKuJbRUPqUJxNgtmzrqnT9QHXDjnCSJzSmp",
  "key22": "5rffL1w2rW1ZdfooAQoTNNBLKrceMMfFf7JfeVSRcXzqN3sdxrW4e39w4eXwfr5fhQ7sP9T62HdALnhuRzdwjPFP",
  "key23": "hMNxdUejdKbfs2aU3aEYPFrNXGdAzcBCkz3G2VBdLEZTXfTrJfpaynQWXuhCtXastj132Z4QCCTs3tuc64zQp3H",
  "key24": "45isXGVGRR8Kz12abv7Wqa3DTZbgsYneb3PtBrk3bHbQr83Ywom7a6FZCMzK49ocrxNnD9i1JjWkztJQRxKc5E6t",
  "key25": "3WYVhqaAqJWqTbst1kdxT11pNHy9BdCygxpUXYRnSXeXjENGvwqkX7P3Xvr9pESf35Jm1djrbE6M2KabJ9hGkt83"
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
