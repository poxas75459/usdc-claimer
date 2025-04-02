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
    "ACYP9upv3NbtnyxWXAa16c9TuVEZ2tqmZrXq8FqczHanKRaHGAbVnidERJYBxxPnar8LnSAxS6UWau4AqbfbUKo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2bXax5xmkD1n3zKFF9DgeKWZ15wKQP7k2VTB8XdpwKcuuJ9kYLYUcTBp9rqNCypz8P9WYwiY5o4oNE2bwtXWk3sL",
  "key1": "45y29nayohrGCeHRmef9knDGVdqvZavZN7srgbiznMra97aU4PnhsvtEyvKF3xLAvWHRAfVAESyCxgwKBWxfpV3V",
  "key2": "4Zc8zyxaNH1cSjN94SYNfA4mhrjYz7UPCnH4roS663Y6ZMtmjcS5T3E1RgE4D9qGDXMgYUUrk2eFwqHZYoLR5xEm",
  "key3": "34kWXFyLP6Nhmu9MFnARVbMK9ZpniBHmwR9D9LReMjWWrAhdjFABa2fWKaYg3sgKyiXs93hzVN6CHMi4MKzpekGx",
  "key4": "Dbr96sXNo9oyEQcWiFevh4MD7MC1C3z4N258jj6oKTNwnYQ4KgJ2oFWfxzLmf7KE2D9UsK5c8SyynjVfK4Qkdq6",
  "key5": "1nxGcB9dE7FMx1r4Ddn65uSfNZpu82rJdoW5qYQtoZAfxWBsRmzNg4AQeT8x3gdmfrxvLAy7NoB93utWGRhnct1",
  "key6": "7Lo5guGzPy2TZVsuDHFmQe74KWbZMyzSZ3eYgw8UxS4NPhjKWSeQYqGEnZKNYtEYDf84RiarcfLL7gArzbwqaS3",
  "key7": "2FjmkBiDhBzKyeavsZk969nZ6UZmkWrg95Gyv34Dc6v6GynSdv8Rbcx9mYdLcPCsBpTcvMcBVk2cy9gh2X3yZQpb",
  "key8": "44CpNScaaX1xTa52eZjg2HjaBxLzFswtykRYG3xQoVxzXvrv3diDZukD2ZbCf4tjSQ7x8mPp9QVCrMAzhYYm8Bz1",
  "key9": "346SyXmpfy7SdmyDpzvoNZKkYnorEhZznEoeMmg7wjXNJaD2456mQVeQLNriJhSzjBfcBhrGogPZhZen7jjtZ8vj",
  "key10": "5xameRoRjG3NWo1KsKyGAFEub2iHhTuQhz75athTb6RjnhkJmQ2gae9WAt8LQoaoZPWKJbbXCGaWEWem7Xzkuwua",
  "key11": "38GmvbkUQZEs99asBGjzG3BGrDX8XwkhYRTN8d3TjDZALTJfvY5P2nySKTrwfPxJFpR5x5z6EuC3DD9MmABDKYbb",
  "key12": "5UtRijoU6HSggwGV9fB2Su1PQhaMnR8ZeRQkKQE4wmx7TR7AckeivteJpQdpdm53UBUzMgKRBYoYo4cVF2Ed2cGW",
  "key13": "4pzDUmcKyCvnZfooQKcG29XFiXSFxSyax9VeNnq2oENmrtPsMzXgSUBHb1Qj8Dr5azZdNvW6BKBndvnJGEgKYBiL",
  "key14": "3TZNNHEidnZkHnFPFqCYEWkuGPGqoA7TRLGhxBMNvZ5vTYSNtTq4D9aRtiW454531p2Cyt1oQYg3AHF1j3uQAWmW",
  "key15": "2geZgUH4J2iCC6esrdP4SKFdzYs9RMwiGAe5ZYubc9xtdU3fqF4RbzHC2kNBxW5KwdFnAkgqoLmXAkTcqJJWM1XL",
  "key16": "4T9PQnCXmHMzaw9ULNs4DaK47dwcRJ9nGsm4xtd4nfghd4tErvmYZsZg8g3dGs3BCE8NaRdnXLsqRbgh2Zikh6v5",
  "key17": "VsPfennLtye5WWatahZKyagCunqQ1URH4esremLBpFTeNRtfkcBQC93NjV1HHuk1tPXh6eqzgQcdNK13sZ6JVqJ",
  "key18": "2Y8PTfGZRasVKUa5332ziJ5dXBzeodMuJ2JLdhZM9A9zG6TBPUZr2jnSEESfXh8Mccp986CJGEGc3cN2WYyFhsvj",
  "key19": "3zDNSiyE2bkugjpHEeJJrvXv9i1fFRZSxEp2K3H7YhfnzQDmQGfFbYEM4x8SiyPqhXWdFeD5aL76kZ2mKoXnA4F6",
  "key20": "4ckkLszyhmY6untsbXwyLgr7SSyofpRhhLzS6pupqHPpQZTGBs2qf1fwRuVvbAEVD3F1Bz6BUfcU4Agg5C3t8XZM",
  "key21": "3J1T1J5uSfjzQ7C85k6jDH5jEdAE9qBDva3u4sQviaGtpBRG811T44byVZ3CJ3JPF9yNA68K2qhAygXXPPD8haPx",
  "key22": "66LJpyoeQcpwyDgF8BQLfKwdenM1nz7rYVYqNqQhqg21mL5teQVn8LesyWcFQEVBkx25oosdUm7kUXBhRwaEP2Ne",
  "key23": "4X5WQ7G7NyWSFHXX9KwPekGnsqCpmbhyFLTQze3Kycq9gZCUmSk174Kk5VGtAqMKSeocjFNhqhZD7v8gQSrDrj46",
  "key24": "RpU93WvXgtaN2kD9kkzpyJEk3PKtZziD7Fc6fL9MG5pQrczB5hdh6XRtF9BPSvpL25z12K9rLjUuurS6ikyaavm",
  "key25": "4BEjLDwXKbAyFW7QsCrxc18eiykyEgh4P9ibC41stErBXqH88gkTZ5i4Y1abULjED7nvJcGQYhCUHYkwzpbxCnNt",
  "key26": "5uKe6iWh6zQrepvNkGUfbswR79zkJgnZM2Tx5S6sNsMVRRswvDYnaS5fb8jaWJth7pshVmLHtTaJT5Bc296hLaHj",
  "key27": "2bm5Ua59gZu4hdB7pNoGTKu74oNGjdnbbQrELXa7wKjnoRS5fsLc8pk48cx8wnUZ8uyhbrHGMH13AWxvceMzfD5N",
  "key28": "5F3hQRFPvmAJ7JvVYJsZC1UZRLkU3B2as8JPQGupMRHTYGtjXpbUX7QRa6W6HXmb6mo79bSTMmXL951h6kdNdYs6",
  "key29": "5Q4SXAU2a5aB72sBX9KKhsPhNae7DFgj8t3L6zUuVenAC7DiTZcoHL5xaJeVZyw7JwM1KD4WxzetWfep96xPxXpi",
  "key30": "ygNHtH7ojbfArNfEiLM7VSLPRQH75qYGjL4T5odwiHUnrYcuHVxLYN79ebdg3K8n1UddBRyoiLgHuhwdGJwpViE",
  "key31": "bSBfFm1Uri2mEFneHqVWoPkNMDZ2mqnENJNHjaqtTNQ378zp5PHVhQMHb9pJhLtikaFZ6ohteCKUny7pgQnbsgq",
  "key32": "39Yd4BN7GbnpPDuKihG4oMmaFFa5yeMSXwwhe9YEDfNDnR11XqwvXe3cSZvRMpAPFwEbgn5k3SSqjyCHVzU5jgQv"
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
