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
    "43NEuUhmd64zfbqAtvRcbsm2hHAU5tZxiey58rd8RCaRrwf4geYc4AekRfQuAs6UTQTjX4zYpnLUL8mhN2X1wW9S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yx5nc47qriY947fbqBxudQremPb3ZuyY28mq3s6kZNMkNDbPtwKfLNVDNLL23ZLSjAZ6yVt4rf39hYufdXtg45z",
  "key1": "2BDZLyTyTrEUpX2Zeb9j4pQRTnha9Hu2QMGjXsefec599VTnSfUFHNYU7arHeoJKZLi1JCkSi84dkpVH2u4Vorce",
  "key2": "42Gh6kL3aH29FuQHYiUjvTrd6JV6Bio9NYRf9ouYLDG2DCd2PZetJc36TdTn6wasvCkUgmQbLancHuf8jz6ZGu5A",
  "key3": "55mJhcZBNtCtNG7upUQikQMQ2rFrhbKNFAewUMNADZKgwCdZCZTqMMZZePYsXVzg6CsFvysHrnkDSPgiR6VTfSWU",
  "key4": "4d3LkjQsXdpbGGtkbKMvwesaFk5qHcifNdEUsnK8GXgjgV97Q9XcdMEy2Qdx3uW47Y2UYc3zjEgViahxxypK8Xir",
  "key5": "4qPpUfEXkFLTw1oecU3dJQ46sEbbceQqwLkpK3eVrpghQjQXukukdUHK8TfPzwViA4iCjYf4jJmdKA4hYZBkM2a6",
  "key6": "2MaX8aLYwqVy4QuA9a5juj8yJQdE6QpYhuYptF1UEhW8xmHEJK9sHcDX3VHknfsNXJfJTqe4ZvVQDpsiKjpTuriR",
  "key7": "5Pv4PsQ8dkvnLaSxLPJwFmga287wNvH9jZhxZ8p8rUxmK5Z9NiBZaJAtGFGkDjV8jhmpV9WXaf7qbtXBJJCocCtN",
  "key8": "4gpS89Euh5k8xKtJ4o83dsJVugoEYgxnnvSh9f6C9Jke1MN1BatrPthVdbX961NfAG7Tn3bcbjw7tvGHMefYucpd",
  "key9": "5hjmPN3WEKhjdkNqx89S1UT5AupCCjSbXTL5HWQ2bNQ8uPieR67p9tUxrdqtBvApFhX8QAnMmf38fBJfT5yb8ecv",
  "key10": "4hX3PYyHLRYr7LUZbsEEqJA9CkF1up8NMZ4kmjCTRRQQCrGr7XDyzDCWxyKcD7RcLffy32gB3pxV9Kz4tLiYAKo1",
  "key11": "3pp9oPdzYyfVK49Z9rVuG1z4eA4WTJWwMAkdv3g6DVjB6BmwPYLTWXLFSVAEpGY5fT7ig3NWwWpfcewbmNfij1SP",
  "key12": "4H5twQTtjW4xxdnur3njHAowFBcWWUENjJrGyJQAXnZgKjcaJ4XnWxUSYeKa83jHYaw2zJ8gtsSNdyDbstxGxbuz",
  "key13": "7sC9aL33uDWexVWtdkwH6AjGtLXJ9UC4B5qLXJXFbt8gGH9EL3em13x9SvEPmgRDuqH91TJaxLv8ifxYm7FBWTm",
  "key14": "4MHzJM2sntLJueV1ywqkuhZD5uBVCDuSiweEP6oZLihiwbS2QrnzCrnNPu1pX7xf5uZr63JCQPxhztdzJB7EvU3B",
  "key15": "5yzjfbfS8CWsYRFT6eL9gK1H2NXQybqnrW4RNr3hjm4ik5YZF5wpEF7Cjy9ckPikPnnPKrR7mF7nDvyddwh4rwV8",
  "key16": "5Sq7VXJNkcX7qZ6TofcxfWS2s1SbXZc56ACM1gKxn8xpK8obzqv9pWQkmyMmqrGwYyT8T6JH35QJBGepNTM79qFv",
  "key17": "57okX79i1jJgyKHitbhBqyL5EPu82RgDvp74BPGq6BG7jf3iN2W4m2oddMGZ8ox7HnnkP6H9ajWuK2cm7iPcdgW9",
  "key18": "672T3o9jLkpwrsT3WFQMmjKoh9CzZ5uhTU6rd8HLfoMdoSaxdZqcBu1pr21FYtcnz1fMS3f2wSzMHs46RJVTRkD5",
  "key19": "4Mty9pVkTRic6FaZAdnyFC86cAcMsAj8chksTcJcHyZLZUxUeCiKjesh9B92oMKRbCb6wUFt7HBDs38bwauvM6q8",
  "key20": "29YphtPXSBeBLU6TTdzGjUgZ626npGFbFLZWwKVEwJQ4U3ramrbBbE8rJXL7dBsQXsqtMwW3JG15WMi4wwtxYeqr",
  "key21": "4kfFjxScPbu2wogcVjDQ85MzEtyAQxtLj3HpDRLpTo926eARh7d7ctrwDZFFGSUqCKWyW2aNgC8Nx4Z9xDHq9pgf",
  "key22": "3N2tbFwyCoBSDNrX5bimJ6Ldc1jVWvmhgJEyux7MoADiLuqXcLHvv917USgsnCGUtWe5LfsotMcp4vNEWoq3DGJf",
  "key23": "256tWXSh8NdXPup5PSAYw6A76roa83FyW7Cb2G8wA3o8F7VEiaSamR8zSd9xCdDZBtukkMZWrD97GMss4DKmcb1z",
  "key24": "2m7Lhzv8AYsxm9LC3wcfDPHdDFZFF7yb2492hcvLpr1kaazmJtEj4GpmphTrqQb2XXuToD3TrC8AZzA5FE9Uofhd",
  "key25": "4N3ynSn7Z98kz1j14RYFAiP9MuGNT28a9h9wJ5ajTbMoJAQSXiaGDgRpZWVgbYWUbUcmcAqn5hYmtZgaNncCH5Sm"
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
