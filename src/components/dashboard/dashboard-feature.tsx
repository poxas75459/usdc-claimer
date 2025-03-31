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
    "3AYC4ABwrC1LXt8ifAUXVv7Nk2g57BQA7NfKduT4yjAixvMfvpc8an9JC3DGGztCVg57sooCaTs8r9PCpfT3DSC7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yreHGyvXTAifiZkdj5hRLzkceGJ536Dkdybwge53JCPaURczKS4Zx9siyu5zhAMxgZii7QBVdwyUJqRjmdA5sNT",
  "key1": "2yUWEwv3FvDpA5AtWMWuuFW7LP8CQmRRkMEg9giREZ7W3nzRLKyXrNWMNHoUXkiBvJKsajHJv9czL5BCoHeiaN96",
  "key2": "5GUrUBLNVkHQns9F2YB4tketQztVn9BmRJXf2AMCcDFNFVm2MTwe9KH6BGcZuMVvoN1YHe3bSyarmq7bkcgNhzpH",
  "key3": "39CrqEob4BHmQ2RiQ8NFYN8sCbANNNBKpRSeWVzjXQhgCVrFzAMrFidv5FP2UtjNmNz8VSPvQJ6D244TAGCAEUQJ",
  "key4": "2xgLwNxsg24VTnADEhJwqHHsEJ6MrqfcLtBHxP8RmSwVPuP68yxrutpUjnS7B5bqh1mh9gMWJ6HRkayA4iA9rAmN",
  "key5": "3DDPdVCSjVLWtftKyZ5VT6wS7mthj9m1uJngA5mqzzWhEBtjKpG48Sk7Bn4uWUgrBLX4G4EFyD5YnPRTYrExxinc",
  "key6": "4V1mH6MGaHhNiLT42UyaHVUYZEN7TZVhWoqQbZ2VEVhg5ybjPySMPP9FXm8WobF7Cw7ZYCgULWyiBEjAVwPRGFKc",
  "key7": "4JN2gZtMexFE9KzfGxN6u4976iLo68tPyuSPw8fjbPvk5HN2GE4RrbEEpyCiyWBWDBKPCyxEYLM1wTRX9Ms4Y4HP",
  "key8": "31mNBNg4BRQnkJ7gxtEbLsg8wPkQYKiieD5RpZ9nWLtTanigd8wKWTS46q898FGpv6WRF4wxiLz9CsDdFffavRGq",
  "key9": "5Syyv26Wjo9336ScCkAF1iUZAZsCFEc5B2LCUSvsVVh91HRKeQbEoQNQ4hEZn2uZUHvBcDjq9TjS3KfUaK43VkJR",
  "key10": "4MjSRdaehVXbiufuSNPzrin9oFkQgK8tbofao9TzcUY6Mmvutpp39cBXak3aA98WhBzRuwY87WCyRFxGjYgWx4nG",
  "key11": "4mUyhXnBk1MPsbQpSoggzeRBcc8DXobGbEJQztFxeDqSmkzUWVtyJMCxEGqrDpnsaEGPLEKPFUyveRAp5n56Q5gP",
  "key12": "5zy5iLbyykRxz1DRtEVcKq7ExH95WriCAUs51YTTDP8jZbXECz1QeWeJtRKLTkdXEo7WD1QFyEUt48Knv2jHxaGh",
  "key13": "fkPnqdAfFJfnU1Y1Fskddigm45Ji11v6WC954md8gzzrL1bhWY3hT89HZonN6ryKLHNhmE3njGX1ey3HWskrj7k",
  "key14": "5mknMDTJGAU551QzmAcsidpae4cG871B1ApxvxBzTsHyqdMqFRz4jCKzbdUUU96iUxxfPjVg6hb2Zj8UB1eovo6T",
  "key15": "3uJd6K1FAWW9yyZuHRGRBAJQk6YHyZXQG7ehVXgPWcGh3FGY9PNgEseUnqLahz5Qaazdy6FnHtAtMxNYyquWRQvt",
  "key16": "qLq9rSEyLTMUP2Kt42cmvKYwodeVAd2ewvTL6wjaBDWGhzDpiosEWsvqKq3heQqLFqsyPLAVnMjyBryXUreHfh7",
  "key17": "5CzXGsGe4wrRDF6TyDadyxpfwyvFREDuMRuac6gAaGQFx4NpXkTTtFbVAaWaKfTXxpf2QnhJJWsx53NYxs8VDBjW",
  "key18": "4LNWep1TuyuJSkUXp6fCgPfGS4mGwXRW8xRzqjm8zbWWvZM6DSJZEAeqpg9cQW8G2bzGvWNifpzURzzmSNMx7TtQ",
  "key19": "4HLUzv1CysJbFCgJ8FM8aijE4gKKWcrh2DrMLsc2MLk8vw2EGCjyXyHLxr3sxB8zUvdNjTNVefmtUs7EHNXzui6S",
  "key20": "3BoE126TLBQicbDPZ8c3YyFNUp6zcmjXQV8HvZ8pdUGRWzBwFvPzy8TCeMuSHo8CUJvNFUShdAt1CnX9FD5Cq3Up",
  "key21": "419vHqXNfihEzPFwWTpLhNTLe9rQPpnQbwc51paRCkExn3THvDAnVy21Z7D8EwzBqAQjgvPhPBEMNc41M9AUGZsM",
  "key22": "23QgdnFJRvixrGyKd5Ki9hudBgsRS3KgS6F7T2JWDNQQ3BMEGXScEBc3KWXF2xh25mwxhD83eSseu3Yb7tXEy4q1",
  "key23": "4gfV98BG8UEzWLLDSK2RbTwbB5ZaPcvB54Jgwks2ETH3nYiqQV5tyuxmqHMN4N2GjhbcWzfbeBid4GxC6MDKZiqH",
  "key24": "xDDeD96uHydEGM6oyWrWpwXcCDSw8RQJo2NddMGZ9fwvq3okfPAE3vchUWJm1h6yJ7mg8p5YbRxhj1Bp3qgc7Yd",
  "key25": "2SupzmV22EWjrr41zzjrVGHkYGYCK31r9ELosPgb9Z3XXAaHYtnL8jaPL6NGcujpx7M8uJAkGw8ZNxRw59djReUZ",
  "key26": "5ZrYHM5U13nJuLXadgfxCXZR8bbWcZyRKEHN7dD4WLqpp7wK7EV3FnE4M8FGUqDB3Nkh2MtQCMEDbcYr4w6HwzPW",
  "key27": "3i8yziTNpHXiR9XhRaG2mwEkroYcgqgmeZ91M462nRWQkguvUBqAqtn1YE51GzCzv8T8Y3naxdzuHD2N6qYsLjrB",
  "key28": "23zwmZ4PCKQRc97fmedZMBcrGa61ZPyxKG6eo1buLxmhwW2Rjo316NRpEXk82DgeKCH6hnJtL9QDRiHTpufdnFfM",
  "key29": "4TjgSZBEggyrec23CkMLRib3NXKnEjA1iGztTRcVmehen6bny7rybuB5TmJMEzTnWVhp35Ddck4BwJe182siVqEj",
  "key30": "5o9zi24TVUEMD76etErxJnBEFwmVeCVkbHT99U69ripscUPDq6GpjNbZwn5ELTpFzPx2F8exWLwBtgjPeovwtAWT",
  "key31": "2NsHmfurc43eu98WjxZbL97MJpuw7fCD4mGbGHph71oDESRVZEReg7S5btt9pyfA8cJtB64ojig5K28vqPznMNHv",
  "key32": "4TedrLpYLCpjnwSA7rdm3FC8jYX6NB4zuNxZFaN9YaqyJat2HthyMxEwttG8o4cB2g4saamMDwKLFx3gBJgaF9JQ",
  "key33": "T1YV4KNeMuJmQAUpdzqMNyT3K26EiGW2FuvATsx9QdbSDMqdBChhnYYbufjQJAZ2rk9NonhbEuVeDYy28dqYWBj",
  "key34": "nUCv4UqDWr41dB7MywML74HR9AZ7UYnjgqDKGtEPLWv5muoLsXao1mtY4yTdLKZNoWAC4Ax6fMJTp1Vf8Lew1XM"
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
