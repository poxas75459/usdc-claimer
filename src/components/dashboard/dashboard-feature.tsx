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
    "2JGafy1VfYGcAXidgQ9g4UUsT59wuJAbR9NejAdvDGD1TSJEFPz6D1FxQFopf8TWijsGTC7H8tgRqu2gBEyyFoCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2K8r8xVQdNdZ6v3gomRTAgaTKgYFpKJs3hxYRizuwtYzZKhWDrcsCtYGUpW6rgFxUVeEFEYvouQr8d92BLcraoqi",
  "key1": "3K7wpZhwesV3eYi7d3ESeNrsGgQ1hwNB8ZeTy9pGTdykq35DmACd3Lpe6mKXaXbszDYFcafdWHG6VW6ZSY1yX1Eo",
  "key2": "5oa3kq5LWqhv5fYayMN6WLAeXHv6338evva9vNjWQWdqTCaKy7j7YA1iyBsCS7r6giWfSWniZXZcUNjGo111LyhW",
  "key3": "24DPkUzjnmx89wrWdxEfc9rGS7pBwevYoM8wsLDYizopbPEYwsk1Z1mrozdYwrEttqUN6c1bFukM17cPQvE2iBdj",
  "key4": "voWx8uWKyfNjJYh2z2fkc67wW5ix4zyJrbnFUX8r5KRMpJQBohUtXtRRPs3FUpf7KSGPZBFoPs5jXfN9Pf6e1X5",
  "key5": "4J23g2PhAtVQ1JiE91c12qADSQJEDP4kj849Sw3QWaYpbwXzYk4zh3c5Z7v9BMQusbqNbSZtsrAAAJuWJKMbsphp",
  "key6": "4SAq2BgxhwxJX8L3NnyQZx2icYpfi35KrbodxXsMxJnxFt3r6LXymE9EMDKvuH6tjpjvrzxa6HGBgKQvuBu1u1jf",
  "key7": "s4yFZ7UHXGsnunLak2BPE7x7PAdqR2HVMGx1KbYCV4QBKaU6s46VNm2LULY2L6n338yFT9uh7GM3mqY38oBx2Qv",
  "key8": "2gUP5tmJocsJ1hH3EBxM1xExbhmWc3W5fXYZ9LdhCEUDg7HVAfCMPaBvRFEogtEoCAPDdDLTGcqKTfZMgiVf1das",
  "key9": "2jagcL1g9zKiZ4SfHi8E7uK5yuo6GSbo2LjYQkCdak7cxDigaN6vnhiYaT9p2pFTmhWQcJLkGcnD6wq4jF6mL4tg",
  "key10": "3rnWBbTKLLe25iruaqFPUFXQns9vpvA9FbKE4pcvEz5bzHtWPnu2sRZfg9fzCLCV7h5y3g9XQgVLEFDQ9gYyBfMJ",
  "key11": "5x1UPxX79bmw2YJZz4PXZ2x7GuHp7eyKh7gJXeiRE96UG8d12FcTRjG3V49jZw2p7svi6Tx7KnfLCG9sCbFX75Jy",
  "key12": "2BNLxxprEkzE54TAtwHuCZaCZ1NKDdre3Q4UVH9VtC5JUVe8fxkoXcTEsEXCCHPUSPTmtkuhME9aMzTuGwBvEDvG",
  "key13": "3wRPgk2e32PyvmhALMYSGsXmUp1m4FotHJ9dbdertzk9bT9a4uJr4nUf7M9oVvYegWApzyFEKRQcz9AY3S2gfoo8",
  "key14": "5DjWyzdMbaRGjTFaEYGeYAsX5fC2JZUxwquvqGdye7ZvaaF7gEV1gBcK97XVeLzHHVZ9rugenNT7gGJeY7SnA1gb",
  "key15": "5R5gJjTH86TmgDYXZopzHXrJhjtd59EjapvwkKobPubqT6WGvUoEQgfNQUFDUVB1ZydxJvjQaERtKjpJdAbHDwDv",
  "key16": "2Ux9pfUgNevEMv6HfKDAM6bUarzWYkSpDwBME59r7fPwnTFufC5eLoSrJBoKoHPKn7tEtwUZ5egVEz5YhqfEc9zR",
  "key17": "3gKCxLMJe5KPochwC6jWMk97X3iiFjHDBWBwrnWoAmnWiwyGGWoQxG12ZNE2VfyMXULmLBaB7viHxZJkHU5SZyjs",
  "key18": "4jWAQQe88d6WkDvb6FniHTnE8grGfNLez9EaHUCGi3FhhfgVfWAkmH1A3DNLctUvqi88pXgTfwzMhoTW7iNwxNDu",
  "key19": "4fVr2eKtCDeU5t9ZkN2V6FVfEZ17G83AP2CBNMYz6p31WgXX16femfYxNpGiaWiuvWsyTZWBDgrfUE3MihLXnSXz",
  "key20": "5AwDNbZ2YMSQ6muB8TvjtGm92D56XZBAGdYUc9VSfoobxhv95Vc6tsrKMpgeQWo5S3ZMGk1yxC5e9HKQRgrJ9gWj",
  "key21": "5fpd7nWbecesqCdCmu2iTBywvdbuvNS4bAeX6VXvRfdrAcNBEKEhCwkLiypx7fkT6mx4aRMNvUBKJfm5FeJrEtvF",
  "key22": "4jTCKDpoTp6zLi2x6Ys3V8Aye17BpPUFZJopiJK5ZS7DmSuC3hHFpdHNbE4hhKQkvneCTM6PwBmHTx8XvYpH1rP6",
  "key23": "3m4FxcNq64U9S4cA5xrVvyxACJYdrnMReeDC8z7zHuiwMrpCiB91sfzxgV6kYLXNyZiWdvMCK266BS6p4JLi65Vk",
  "key24": "3mPvWY1ohLAEMKqETyo5ADqGANzuAuzB5HF73sajEerfz9HqVdV7nEzMe1zxA8fjfBE5PkFghZJgrMuEsWRRyRyu",
  "key25": "38sFfri5CjJHriMaXZ4UHFQsRQBvbBtLNFDRbZXjcpb97evYqrvohNYork5yNSetXfguRRGPdCEJnpC9i7iJ8ihp"
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
