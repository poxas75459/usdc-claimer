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
    "4sD1LsxySKB5nZbgRT7dMCdvTdyuMWafi5tdYhMs3DyVW4ijXK23KTRLhA4Y691oUJKmoPBvTZjzxa5twjHWvsio"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4tzzp844RCjzixg9RZbymGWfSfHPoPPcVRjRxKzVWG5tib6bcmLBLqKc7kFwjtx7MYd6E7YisRZyL1V1yXyMLAav",
  "key1": "2L9zMpBheYVZtR6qKX14gauX2ZzgmqBruJ8QgueudCuRTzrBSDjvGgGaB3moKUGdyGmCrBTEzRUdsAyVSLh7jK3U",
  "key2": "5LrMqUYGCNxNdYjYjyv8UUJAmhJuchxNoEtikdasBd3mN58uSVmpfMi8oYFpuA48PaKyQ8RbMwbxRfQmanCpRB3X",
  "key3": "3fbLm3JE76374gFMnZVzrw5Dczv8T7nyC46gc5dAUdhXC4FdP3mSLi3R8rN9U4JfKt7Pjm5wih53VXhqU5JEVDDx",
  "key4": "3P5iHvp6dzC2nxvGrX2E2aYcB6xrJ15WZUPZ64MCi1U7gMRBFqtYqoGbcGbM8Dj4iG29GRr4Xp6n3nFkiGd5d5yZ",
  "key5": "2L66c7jk3rfi7ise8b23riw62fenaVcD58fEzRbQdi5pBbs7qgGweVdui5VRvAYabFkwQCRX4B6o8Z6x54ati9qP",
  "key6": "65tHAEwngRPxhwjqpoTqLG5efaQXjPSYi9YCKLZRToqqS2nsSgyatSbeTzagJtpfWmNjmERxLhcPodpPzUQTzQuQ",
  "key7": "2JqdHQUabQsJwKD58ERv1FL3EUvEVZ88pRLr8p8KX8CEEjqXjwR8RURe3Ngj44cBq8rHmWthBDxvhUuWNKyCPMFK",
  "key8": "2NZLdc48eJRuoFc3Kjc1XmmEuF8At2dbocHNHWwZWvwBwj6DQGDTESLDfNzXgHW8CT5NqW313yyCX7nEYERTrskW",
  "key9": "a9v6uUpwcWMzrAAfuV3wKX9dpZif5A1r8t5XmK4xmyY2WaURjDzzuvaufNqADSVFVi2A5aWRkcCYKbA4FZBWgqD",
  "key10": "2eHfxTjLp9YZf5hDtf7dD8keVE9NGButpFEMyCHucEXt16j6eedGrYGQCrzcVJyPfj1wUhmffDPTQoKpsDZ12Waa",
  "key11": "Ftoxk3pYwGz3cFh7Biw4k4AjRZTnoJkH7HX1jS7iZBLcEFMbZ2BHhesUCm33ZQXEU1KVKiXrdPd3QBtjsL3aLJf",
  "key12": "4QX6EHQLD1qnUHXaK9xZ7G1NQ7zG2NhZLX4LsdJHN8JWqkdk265FYxZadkwNQPJ84WBjtyZo7zxC5G4EGnGyNmr5",
  "key13": "53nnwEw2vmtXKqjTFdP4bepYYLeHSu9iKU1HU3BeoQxTp3iFdZGDM8VCCxGhhzckZRNfapBd6NaPuURTzbiN4rb1",
  "key14": "vKj4VnNoXd4Av7zJvLtXrWeoZAKXZxbJdFyu3x45xvspCTL9LGA8jUAQQrAkzZ7HquBeUffFutG7123ytHyQYqX",
  "key15": "2fB5HEo758Nih3hPhwszy4SRYkKaaBrvjh1yzWbiVJVGVaCVLUnT1LYj22VphXdawoKTZCYPMCnwk1bswBeJaowo",
  "key16": "474NhwXvausyARZjvBZM3ReGCXjzEuZpnrNM7djosSBU71gW2ggULh8ErbnM8NKsDTsvRfkjYLNuAfPAzit98Fxd",
  "key17": "3fCEBFXneR7YBfCgoLhdN5nyP3gBvmS5wezNCv9oUqLAQ64rPu9mJyy8UyaHfZuKuDVGzoWbJr4oJVytZ4MnVtz",
  "key18": "3oJ6NnGSriLQbRor93oTJ4o3wEmphyUjuL2ptLLA3hE9skVK94Y5fPKDcs5sfeVjx9tSKPSuShxqrz1fzbXh3jSA",
  "key19": "rWU2CPyRshyjtmx2R3xK23eMAurmE5bx3EpvCnztUPYvMDbscPShSSNbDxYScme5nrvPgKzn9LhAAYFE1roA6sg",
  "key20": "5c2Wg3fveEWbTkfyPN2HhWBwMygxWieFSujD7diQEzfUWGYXpa9EZyaNiun3fjvWiE7jdC7mbBw5JnEJU5LbCt64",
  "key21": "EyG57iYjtjVPwg4ZQa5K3f5Kzx9fUcmu85Y3arRHqt6ToRydRbRCZ2ttn4G1Lci9qRVYpDsouBKL5DVv8bePRVY",
  "key22": "3p5wvfqt77i6e6aVaU63QYvwiqSZj9AT5btmcwEBbWbPZA2Tb8SinAKPgThd3kRmJJmJTgYjXRWvvZJLYc3FRuuT",
  "key23": "59u8XgcwCqXBryv8gA12SYr79viwWn4xfYzM6Lk8PmfyoWzc86gEBF9Qqw6Vo7e9USDcKr3MGeC73T38akV4zNns",
  "key24": "63A7wMtw2kycRRsA4dbe6vcWjy6qTGWidZWZREdaGvBWBewQNvmXobLj6qtQcKE8SFkQukyjCPM4YnNDHdWuaZWW",
  "key25": "4FTMwR5Mgh9cHKToYws8VqWo21gkPneLvHu7bzBZEnPQ1nBWbHwL6qZzw4uhN3uhArrkycNWuFSWSF31VuuqRXfv",
  "key26": "2QGm7yvjjE7uUft8Tpdh2JT3YKEJ573NfMQFsdAFD2mQt9bi6x5XqRxwFbgkrcGU4YypQas4PFHGbPCzd6UkvPeW"
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
