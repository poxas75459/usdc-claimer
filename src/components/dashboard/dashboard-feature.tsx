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
    "2kaqBvvnVq83P9Pgnf8U14WLz49BZsiFamEuchh7cD1YvfezxXTFMUonyVYhWfU2VgL8T6H5eZLzDFvtuRceC83k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49WPFRUuryjKitGbwZFxA32B1c3Z6oo2QXX42vAuc9so3jT3p62xcjTfgRtoBu6qHjDvQ4tTorwS2YB5Ro4ho8B7",
  "key1": "3etHnHmKpmSEwRipSeZVa5LLxDg8rsjwuTHDT2VykkDBmmR5K1ThNyw7BLsMnEcBmx58hFMh4avLsXMkPuobHg7",
  "key2": "3oLmwYYg2fBwaJ1cP8yubSFyq8aDenJuBRrWrbL6NSNq7o8F1Y4pis8Hx99MVoJyzkH1MgGfJ9cWJXMZU927jYtL",
  "key3": "3UUHseXJCacbivDXTKLvsYirGfvipkNy1h6N38nZkAmeQSiyKu59YfVyvXRdr4mveVT1TPWmRVRwSZTwk6xGqoPT",
  "key4": "479hzqSYjDpBVadXA1XWifB1YutQrUjhTgj2FFTjFZEZceRzgUsTKUcb6qo6b2y6qMhzrsQQgHWCvfG5BmxcuX3o",
  "key5": "47qKn7e8ASjv39ePhRvsx4Wo5RKywy7nK7XFbUZUwugmm2GA8T6tMn2qsfM7mEhuoVfJZAp3NPxtXwUK5dRA4S7c",
  "key6": "2fedQLADMvdfVDzwTNHn3nT1JLEDHNcukgZkg6i6QTA6WV32tKq1vd4avi6bb5JhbB2epNCGS7ydCm91TRCyd8as",
  "key7": "2Z1k7qN9ygKTD3xymFRB6jYenatVYQtSN3QyXkDWVCszgyjBNHvSfed8oDT8mecwWbAUM7yf8gJcbpVJDjtdXiHJ",
  "key8": "2Mj6iDiR5VE3xM8AvLZiqkMvDFL8UGruQv5NbekspPspQW8HzXNdM8UAsjYzGrhAtLUjX5W85SVhRYu5HaosAdLb",
  "key9": "2uxn5EwXyNEUFhLtwL343V4DMi3mypXx1QQ9KW1WmZ8xTqr85Q9s29rHSiAHQbgQK98LCQ8cffFCVmqenZFwkx3v",
  "key10": "5vnnPVaHBA9mQhwtWEoNr95tag4ZNQftMP2hLbCG6qq2sCSDJA5Z4Qg4Qpv7aRYNhn683FpSCFXh42mEJTRCSM2q",
  "key11": "33rRzZFV6e5SJEeZnkDgKJuBWRZmZ9MhiWhyE4TYAUzFEJcQKoRYBbkME1kg4rNteuJUy4fYgXXVozayiuJTDSSc",
  "key12": "4T3VVXekzvDRcnbS4WZrtAPgyZJS3zGUa1D1Q3kqE1bAHK3XDK5WWrJHxKonQSXK68rs26z6EXPMuZwFbVhJLvcQ",
  "key13": "365CSfLjmm3dQGsi1d51h6pxDtqjenJVA8XPnHVFsMw3HqoYpMPxWvAUWQDBGZswwboxAmRYntLBLbHkh95EUgMM",
  "key14": "4u57FJ1MUHtKgYVeRBuZaEDVM8J7KsR3Fj3ms8w2Bu38zAn5pd8tXvHSMsWowRP6Q7D1s5U6yr7HiMh8A5Ga832X",
  "key15": "46CegWeo77A3LJxu1dmgVQVddvqAhKjwc6P31sev7qW8oAedaUgGN8VPZwKnEqA4gQWhpdgZxuLPx1bMsfs4PthS",
  "key16": "a5YAyENXQ8bR6PzRa6FYcsfwQpnJrGdvdTa1WFcRH4xCVtYsuXpV7eVXnVs5JGevmGW2r5w33VfmJD9x9ZDth3r",
  "key17": "4XC6CVPSui4cwoNPzau5Bq3bwCwEAoHcuLdS3s1skvWKqKvgyNjwb6MbUDK6nrowNF6EFqYRWD3WcwVDVXhGsw1e",
  "key18": "5FzAjkQxyLon6U18WtdHzvAroFER64tsMLJqRnLAncRDkQ457eASiQANTVPzmkSdsVM7UCUhXBNHd2pMi5cJLq5t",
  "key19": "2BwLU6uvLpBZHeYt8ua4nh7qVCKEfYcN7S1UPTifvWYYxwzMYWEeCBHUxBmqfy6JVXaAhm7Zy6txLgR6dUdJ83PT",
  "key20": "3so4cDTSZatfa3bdHGKtkq1PwPK2W4EvF5VkPNA22adMwuqTjB49fPnCTVKFzhrjQogvLRehRjzXpxzGrpvWirSB",
  "key21": "i6CbtMXgZPUi6PPapL3shsc5AybeaBnwKQgJxH1EaEpAHjz7FegLjtwoE7maEDuBc6rQYHjSWm5mhzxwYHd3d51",
  "key22": "4qGg4nRYTB8gZYxyBLf3qfG9bK8wfnCsMxKi8qSEHWVtM2Fbo6pumP5TVZ3XeQV4WXLqiNLXYFqupxCEToxcxCBC",
  "key23": "35CqnSA7mpxPjAL9KH5MT4m7TvLpZQnbfvXcMe3oLLmBSTLxDHAuoDpBZf4arNvPpishjAcZEGVL5VGdF782HEUJ",
  "key24": "2x7uwomzQypsy3RkM7Ct9gjrqSy78qfFZQhkwGBTeLofboakz2ANSkRStgt4qrGRgbunwfQaDVVD3Bi8k7nYCpg"
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
