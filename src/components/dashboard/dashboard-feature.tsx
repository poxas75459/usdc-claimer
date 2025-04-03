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
    "3CSUtUduSJxyBKmHqeg9NG5RxLUXZU69x5tTPQ6rwvR7VJ5QYXMsbWePGwiF9cpW21MUfVHwcDHZPe779ghvDAJW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CHBWwru6JmU9dHXEyKS1wa4Qy3kVfrLB85aDUGUW9YdZKSF2WJpeyCoVvsGicMgQjYyjGJ5ocofwFmk8j2Xt85K",
  "key1": "hRhVVBVoLa44zAj2WiCXQRXeEJf7tT1ukTLMZ3DK7y4fwHDs2xwxoCucnCShR4xX7xpqvXMB8UntPGDYpCDvYxA",
  "key2": "y9qdtXX4XgidK6xAmzteYQ4RohSvNeUq4Se5rYB42i7wtMu9LtgSLBQ2npniRzzKVahnCGLZyLDRZpGbKcHxcyq",
  "key3": "2gGakT8tSMh3zoVGrFp7BxFtNKhhZRrBLgPPqrd8yTLqpcbnz3358fyRwLmCHM3bT8zpCSFitJ32p1AW3HqRfxae",
  "key4": "4nxCsQnXatTUVucSHQGkm4ZjcXAj4zhUe4rZ1miDtPm82vsNe7Rf3WREJFT86jtEgWdNBfEtDZhBhdri1CN4MYmj",
  "key5": "2q3SwqmKF3QRijrmdcgWNHCvL3iaHLZmSJKKRcK2hMoW2Z5AemNUDVW4xWVkyJB7Yo7JC5GWFKKwBcr4aHNNYiBQ",
  "key6": "4g9VijWZsCu37sdT2jFrSYG7hMnJEDWvjScHH4ezGqcd4LiEqa874ssHDG7UWQ5Cm9YU1BLudZPQk1HYgFB8BXuv",
  "key7": "4U8WXSL3tsxY7KownXersj3QypYdraUFnUp2bgNis7WYACwMMeaCQXbk286Q1kjTToBK7CbVtBoEGabc84ZT91gg",
  "key8": "2KcgX3e5SutUFoWkjQ8kTMGJxavDHRfmA79tw31g8861AEktn9rBvwsgMPf7MVnHFXtcHPukfwvwuPUj8pJvP1a1",
  "key9": "5xQeiHSFg2wD2ciz6MqRyAUwzCEkTE9kphESe8wRjLhx3SBxaW2mhYAgYgsUFwf4DDzsQ1Augeq25GqAPmovunxL",
  "key10": "5G2zU4Tm3sYFqvYRa3bbSGdJJJQN5wXcscitR4B1VfJpfdDgKwsLpiv4D3Z95dzkgejwae9ttFy4h3J8VFPGo2i3",
  "key11": "2BRcxrcSY8P6qK2xfTweViBf9mU4h4P5Hz8KfQJr6Soec6rDxSy17RedFn3tWNEsbDStzLzBHpLJPgf3GRwiqrss",
  "key12": "2ceRxgrhQKt97P239NuYhm9H6jC2vZ9GHK1MXnGRmPTt7bnnSjENbzDQZTUZyuJGQuwPde4axHLgKwfZAscxCNPj",
  "key13": "4bXSEk2HXUxjgTeqLHyyDR2AjWCVsVAaMAwdQmLAT68eNFyNKbNQ6tVQPje8HwtRVmZPx5sEedA6tmGH9cdunhW5",
  "key14": "34r1TDaN6Mwjp4Fio9kHSgx5RbBPYXpJ4rKPZsmgTcNcmsNhY42P4GuHxYyAbhjfrasfm4Kf6Fh8NFE6mJWowabj",
  "key15": "vsMgNzN4kePNvNMUcZksC5wm1crvwiEtcFqjBihtJd3v89xF1ZyDyPrsoaftdhMY9SGqgDarr8rhsiE847B884a",
  "key16": "2kfjpNT4HYXmnx3S6FvWYzDcbwZpYLFTguP5CuHjmeiw1a9ffXiFkH2NP7ACWwNJygwqbJN7cz3p6oFRWnpGjq3m",
  "key17": "5bzt7GytXYJAzTqvcJqUuqAvHZYXkEq9PGRX2Taqa82zboTGGu22oDYj1zier787NwbYA8FB2keg89cQ4VA4b5Fh",
  "key18": "3r3KLG53TWsDkiR3VUNpJ4chnkyEGnRiHMz4QJm9qmM9Zj3SaE3YT7j4oVThMGnxwZxxfGbWwEDapMzFWexmQaEN",
  "key19": "4cFfaRnQo4fL4Cm2yAu9DVYQ4m6sJRwDUj8G49m1TfHknGfEv7qGaY1u6cg7bY3P7aREe7TBYeh7AWwdyJqgBYmx",
  "key20": "3EcjnqnHgRDykX7pZ8nEH1a4zfj6TeLtSibJc8bem4XPr38XLH2Ntb8YoWebVMVbrjFeCUxyXH9C5ioMTnMZL8Jz",
  "key21": "FG7HUExRRmWG5oaqLLDX2gcTEoxUKYfKMVphouiafDbryuDwRPbSRwXNSgFf194zBUQmrpzjxreJqWRDij2RL2p",
  "key22": "2jgWKQGXZsufioWUEDxcWWAEEM3BWAN4S3vYQSLjG2VCxU7keU8hkFRj1PA2E4RVpnZCL4pZdC38gPcr3KZRvU3v",
  "key23": "3cmKggv9wc7hesPTmJkh24ep52zL5xwwKqFEqm8obTJbj5vqsfn4nixJetb4t13pQBgDZZ7ffWsYMz6v3KDpNW7C",
  "key24": "2Bhrzw3HaV74Uc5geM4NnCZFm4uaKiKmExWRQ9AoTqTzPZ5uehhRJhKFzgRKcJSnKCVwQeEYyceXVZ8SnVAdV3g8",
  "key25": "455wLRUZCvmYdJDjVyTkm53ta83PjeYMNCQYXK52gLq1Lg3jGv4aut8nV6kWYrNQ47VoWhYCUqrtsPQmAVikM7XD",
  "key26": "4XouoNmbDhefWj2tf5qVqTYckahsnJbvqMgctfH3WyEdWSU3VAB5KZBhcZ4mH5MDBvBYE9wnNBFStpoRN2gnpPBN",
  "key27": "3dwBBE3LfxWmLEj5MtcXySsKVyRjd6vj1uRsZ5qBRco2nPeDFG55tFeD8i15yULinkzbM93UhchD7ns8RYjk3S6Z",
  "key28": "2xHUEnzNAETgTnhw8aTJaZbxP8mbcu2sBrFN4vKY1TZWe1SQXc2Fyv9jnzLfGfX3AsLFjBVsPFGy4sdCPeFnawrX",
  "key29": "31vSuLrKUyQwqvT55MRDDd3UVyZsq7uQrQ3qJ1NcjBcDovJXXDCwgqy284VLFtcc1MFaceuWNjFJeGLktH7UwMxv",
  "key30": "3Ay5HdCmG2LWDuA9fXPHvMqPw3QdWGHN3CQcHqTWZfEnm64mNbasQ4feyrSeTY8f5J6P41xJ87SgEeJSCHXVqj3D",
  "key31": "3g8gJm5Bsgh27zi3jAe8vmDn8SKUMZGrxSYRss3gqQmkdpxPX6rfZTFdkCNfP2pFyK63rsXjnk1WCwd1yEKRnQSi",
  "key32": "jk3eRSmRm3z4i2yJ8TDNVdFzDnBvL9aACmTMu84eB6ZAh5rKFuhPZqPMrVcxA7SYYhR6aU12E8TgJWKBRCMA11H",
  "key33": "5i7dsuJHguzq6LRxffiTj4M4UVySXVU47qMf1Agp2deHzUBEXKLAKKuQRBmzoV9Pb8MR47g9VEifowXqdvyUZYmy",
  "key34": "4Mjm3SNDgrgyPp5oEtQXHnCVSWBWK2iNqpXuUfENQdWbVy1fy83ihPSrYAdhWWRhd8YXuikcFDnVTRGDMQj2zsxu",
  "key35": "4YvCqjDvXB3JpChjVzx6oBTgZb4MTMFc9hvGcmkBbwykybsF8BcRYoarhfHbhjgHmnqNstr24M8MXyhRjk5Y5Hkm"
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
