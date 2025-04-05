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
    "4Bwcj2ffUgrdHmY4FqmT7gpWhz73ZL21Fyzv2kVT6rxp8tHheV4soBvQXK5udeawvn92NoVYyhkfd9quxaGVJ2dc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LhV2XaZwam4NHtj1CJSbwjavmHEENccnRU3orNi7eDF8mLDHEnfWJW3xrM1PFoX3q5QuGvHcWw1GvkB7yAkEUY9",
  "key1": "384oZaJi5tWtv4TwxDoBX5N5ZapHjeXPAiyisKbSwviHghtePuPRQUxnzjRemMsVG3ZYZKQ5NtWy2XGFUSEXAEUx",
  "key2": "pr9uKeLEbgEu7busD55EgnzuoWAr2dzWNnVY1bTiGyWDeJpkfW3xhREpshsDUGGhyKxhuqCajhJU6oxCNovqtHr",
  "key3": "4uBgMoXbxTdcbHTfm9wpw68Y7HdJSTj53DroUjUdX2L72Ftmys2kE5ZKx9KfoP36b1rkrYuUhnmBQozD9Aw6Esci",
  "key4": "2fJajDcbAkzpP9yUCBAxVGdHRsyXeDNnEHEN131vSBoycewSEPhgqXmiTZmqzk8jFdtL33wGFHNmyTaucLZ74K1H",
  "key5": "3tYmeuefaJfWJSEMw37ouVNK2nunLgXRD4GiJgEfGgpemK1cx7CzSpaxnM37hqSu6RjyudrRYY8J7SZbTaHZFGkC",
  "key6": "3SmVm4YsVzej8QsKr5GvDnisxWtKwq99m7SCUoigUd5ndZ5eYYS6mmFGYnx8NBk3U9mPcBdxwWmojWB1Kn1rFN79",
  "key7": "3Grmu9YG61SF8KWuDqZ95eESoyn2AvfvDneGTjsWk6Wwppv3rrNHHL9wW1BRyBiymbbbD89Eca3ExzTcRmGAbz1K",
  "key8": "2FjfZGJvNbgKtkiggYhwtweR3EGtej2L1PZVm68vLmvMyXaa8BGVb6uZ7RuoaBnVeLbVE4pb712niqs8wTtXkaSL",
  "key9": "35FnHbRZVtuWz9oBKHK5UpgafSVoJwDfLMZCujdgyEMXM8XcxB3xMGD9J2NKgJ92QvdJDp1beLthaV3uLmu1mMih",
  "key10": "Kvx5LCArDbbNm5sdEtjf5Bjt45MEMhC715PX24iHZwKg3W3krhZ2ddqyPjWdFcP3tWwbP9y1yDnf4wgXq9iQV6u",
  "key11": "5WfoWKngaFmS6bL2zNBt7wmZBRah9LN1NC7BsaSMUn52pSMwXcER1NzY3cVjLrCH8ah3Xa4WZ9CYWbyLxRQBiucX",
  "key12": "4Jyh4XyuN6kGMr7sHfkem1zg7vhfmTt788KhfZKvPi9hYfniXSvvp7ASwNBQR8vjevZTa5Rd6A5RRHco6Jj9kMB8",
  "key13": "2rqBL2K77w7AzJL2aC3bh7Zm3GtN9TC78pULRmQrDjTWgjjLs818ZVuZREVmJS8J6g92tMd73n7TTJ4uYeF3moxW",
  "key14": "4or7Hvxqxf5vUbDwnooSALYR3KKiv9toVHgVCe8xemCvXqxPgQKdp5uTQFRunER9L9bpXc5eCqcNSydHy5GHJ83X",
  "key15": "2m4rZjRYpTDMaLt9sXRUgt6gk7xaaKryjGcFT8HCVFhkSwSgNnDWKQ5pUrPygDZKCLPw9TEHTdZVSUDWYPYqaxcs",
  "key16": "5ucqZHmmY6xLwWesaxLPoR8a2VVAbfKCdWM5nJePUGQ1N3re1Uput4USfG6Lh5ce47s7vgKrLfNZKU4RF4i5iH2B",
  "key17": "vXagouix77VSgJT9dX4Lx1tbr6mEe72cSrb3faeSemMGkENJo2kreDkiCV1uy2YGFi1WzW5Y5QYMUJaLe98pxLB",
  "key18": "2noghNpTht1hvZGVR9C8zquUwm3iCdH9V3W4aK42JHsFwreqoFRzzTMJJKfJQ2mmhaEsNdNzgCVN53TU5Qvncq6j",
  "key19": "2aDPNHo2pAqFnrMXLWFajhnzVFKay9CN8j7hh3D6hBeBA1wZB5oduEfrxN5hrdoJbtUkccSCkX6vYUZsE6YTrxmw",
  "key20": "2QPAcKs5WBNdmjh2zuatdvejuSJjWYAWP6uW5tBBKaUttv1dPCQvuQEKg2AZBUjAbX8of4nYjkYdxKPmwvvym9Lf",
  "key21": "4gqRDpnPLQFhteno6DqAEDDnWqM9rX2NGKLzzFTFkaEdb1f97yNRCopfo2xrThUtzxaLHaPsvzZvH5Yt1oYzpjD6",
  "key22": "2hZh7RtkgmbU8ghUaSRyhdTzZ6UnHb1Edis25xzw5NeVaDMivf4PR2D4Wkasjw6rvvJQ5Y8sTV7DTAPJFDsaawVQ",
  "key23": "2UVpiHXqVsZ3yn8WR6vGQRGiW2bkUHcc1Z1zhBLiRfJ1ExTfEcs3h1wJFyYEns9amVhJ2MdCPQijsTSbw2oGzjcU",
  "key24": "3k6KFF5rgQL9LbB9fDxQzdAHBCiNV3FkjXxdi8aB7acmuusUFLpxMF6uiRqpAqpMKcrwvihhfKENUSyQSg3pndzm",
  "key25": "4CLGxwZfyztzcWJbRqbWARxLwMqPW9nWE5C2CaPYMfNRYmzbtNJxbGQcZRSLid7ACUa8q5WbYBVLh8FdKZexeLxJ",
  "key26": "28NtzXpwMCUqgJJxhYg1YMuqyQ4oyWtsy34VmayNvz19a8oBt1kjpnjvCJ1625vfLnnnbW8q2XbZTu3sPYXLdA8i"
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
