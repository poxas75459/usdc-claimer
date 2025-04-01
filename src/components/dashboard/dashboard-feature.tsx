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
    "45BSKzGy9ho9ppgN23tMh2yBg2HDHfVv1xW9HAiVD41ozn2cCkMsWR3gQisNy97hV2KozjHcFxUfUnctjuZ9a2MS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4t7vn7uPvtbMxuVUt7xR2QpvDwdcK8JEDSKWKRMmWrsk4VsvK1eZHqd3xEzfpGPDwDZ8ExKoQohXmKpUUh5nLbVj",
  "key1": "55jKPeTkNeLSMvPZaseSkyEAFkFdUMj9VWheW4jEtMMt1a84PkqW7KzJ264yg9hYoUVPEVsj9KeDVsfhXc1BnHba",
  "key2": "4CAaU5dCS3CX9XaanxwwwRCXSSFob4Mt2JwbAedMH6MuXBWnnNyiCwXVHiMb7KuzoBCToj3xEg6MypkeNJ9Q8pKu",
  "key3": "5toejgSWdkuRxBeEtV9rp1vdSX6uNCnhSraHPHyp87HTdqP6duytnQhn3EU6PfjG5dNADkeEbi34HhD5UPvBdQQH",
  "key4": "2Y8yFhuHmCUiJ2PPJpt2tTHsiv4yx2WMHtXBvyUu8uZupQpUU29xwXvZS9B6LWbroXLfm6kWjrnagjr6Dwb3nuhd",
  "key5": "3c13vRr7BURBAfxHWuAXbb74EawRLc9LJwKjmMgaPvVPjwwP9jSUYRRbvkmWBMhSDKxxkzFGbxpk1W5hNRiasyZy",
  "key6": "3qS1EcqrhobcWViY1fYYSooR7yVBPvsLmA4MmStLh2yyFD3LdsRNXmSTGFu9W8tyGA8NK9kbe7XwwyA4A2mMdpEC",
  "key7": "GeSTdzwHxMVh2BMqydQmzvbDiSxXT744RMeCRh79CxCqK7HCnELSS8UFPqy66Bgoxk8iZNU7HcF8x9zQ6YdEh53",
  "key8": "57nFbkxN57TmgkstnsxGVW1hEnQ5XB9roCQkXaxyp1Ln7yeKtZxs2vKt7bAudgYJamkrVk6WqgZTt3jKjXfTrAkt",
  "key9": "GAh72u74nCxJttUcPUU2XFCxJdUm7AisfXvDE6ji5pEXyyYumEAdVz9pnHV1XZE1Bh98vQGbGTh37dQ2QxXsr58",
  "key10": "596YSrqCtMYES87WPeW9hEJA3UrLKcLKkYCh42P6MSskAHJHNSWMK8Fp9yn7auQH4gRM6DLJuFS9Q9yUp435zChX",
  "key11": "Te9ZVYPjiKvxkaWZb3om6U2vo6ZfkxnihMKVHdfkeioacVNnyG8FkuqCggnPEVEkfDs7s9dtAFpewdxRJhZK44y",
  "key12": "4XKCM2Uf2HJ8rSvghqNAUB1YVEkesj4DU3tbXFbMC4CsLdgeZDTQqzYNmYMSu4U1Kt29vERrqq5zDRU9wMPJHkwB",
  "key13": "4uZdKUnesE4jLLNZaqYnSMuHU3hmAogj6ntzY2oiDu8dPBVphaKhzoyjQik43s8FxxgTEhyh3pwXKbNp737X2pGD",
  "key14": "3aR5hfSgrHvQWvyxNC6zNnZkzCYaM2TVoLybuRQAVF3GAGpN76JcQPFBV5WpFUU9rWP64K9G3c1AENChQmKYh7cU",
  "key15": "3Wo3TPKtCsiEHSMSTELAoSk2r5UZsJZRjzo7jVHXzPz4HH16MU91KCfWUhPqLiKp89qTu5ifvHbWVyP9Kt2nPw3c",
  "key16": "yviVsvUMYZNyfNFT9xDt1kMoRXfqWe4eqooKNbTJPiYw5qxegJMqWi5fsdkAk8JUH8SohNcqkE8LQxCXhBMacNz",
  "key17": "4A16yBgUuGkjyYvNziQfp59SPMJEbqBjEvn6AxTZGBRs6A7srhcPtVS2m7no4NXFGfQAtHQAvt9prQWr77cipe7b",
  "key18": "5G2StBu1k9yCiwCqDc99jTqjyn3zseH2vunZieBE8oPBNMUjnJmV7qBQVhop61gYjFR41WiEfznjeGCZF9TuwBFU",
  "key19": "uv95CuNuUcMoGGVZaZRPFBVJn66QndmAdUsnR8JGwKmTyoKXo62LqpPgZj1e1SnPs6LozBp68F3yqLxEt4Cq2QX",
  "key20": "iVXFDnuJzPnBFk2LyYKgWa3VqiZ6V2ufwPTC9kwhELH2BQjp1mVWeea44B3EC1sMzFmaxuFwz1qQyV5tAMuWJQd",
  "key21": "4PuytgeRyrnFXCymQ9xPZVZbj3kPcaMUk88yfB9zxtKVDHGxK4ADY6m1h5GJH6sGigXixUGFcnP9NaWADifdYyaF",
  "key22": "bxoWZau5R2aANKi93BuN8y9ZUyf1kVjsx2Faos5DrMfm87R1WZuPyGN4CxTjX5R265rp1UjXequvKvRAR46KJnZ",
  "key23": "3YESsnCyaBukKoLb9HEFJApNPRQLahTndQpsqCYZ3ZyP5nEthWRrm2gaMGZG7U7DeknU6mv7zABfV38H9SdmnFph",
  "key24": "HvGSWCk7mA5qVHZZQvjdGroBrYPdQA8eEEJahoLx3GmpFa8JvjDgpTtpHiG3Jx4ycdAodh98FwSYCSkpEyQSUhq",
  "key25": "4CMWpqQ1aHDpwXWVr14F3mykoVR1v3GVoeH7se8xp9MYK9oYoRQaqVQC1Pu1YpY4N36XbePbZF8rEFnJaWAT97Fy",
  "key26": "3zg1Gbj8eWrvL3fB1iJxCdFCNvee9vozSmve9eutmyYJ81UUcevK3R5JWXyLjGCTDynxMgih1vsivBWjjxoQac6d",
  "key27": "4EFdZKkjTdk7QcNTxbQVxeqRchU9sN9UW2AmixVkmiLi5PNsXtdhkSuF4UwbN98is2MTwg9kBnF3YxFEnDmvKXGB",
  "key28": "42Ky2VFx7BwHinciCAzVhW84C3wdgqCRCNEUYzrQBirgshg4JHPHEnoDobLaQ7dzc9BQciYzXbZ8yGL5MDM6N7xv"
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
