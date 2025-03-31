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
    "2vYMeXu8Ez1Q8wVMn3VRusKW2pSuB9aNu1fgVCqhuvn7wG3rohPzVN8qfX7upq12uoZ8FtKguV79SvhgZPStsR4A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VUXpk8HVMcdHvBws2BBveuVwH1VHRMGhyLKCsWU3utc2Kiwy6em33ThZwy8co9JCjqN1A5Vko41TM1bzhHBrCn4",
  "key1": "5omVVGY4snAGXTCrQEZnjoudpwuwRPZNzkUBGiUcXZ5cvUwHmv5pXRfafNngk9kBNZUqXdMYGLoSq7UJoW7X94kf",
  "key2": "4p8eA4wNZ5tzcc5uiWQ9qzQTETzE5wt3c56tdK71gsJKteyMevXKgF5oLfKbPsH54vciuG1ujswYuxXGSjUx1bhB",
  "key3": "2HXgZ9kneC2o3nSRkVf2P64EUXDrBpvAaYeJLRNtMduhKkuvTAoLdAwSzfSNkz8xpeujEMmwokJDyhu9BymgVbAd",
  "key4": "5J1KZiSVjCqEhVy9ARNaoX8kpNjgBp8azEFo9Z7CJsuDrZ9GvsUciiSzUAHHfykk1pbAVGDRydGLsaiAsqBuddCG",
  "key5": "399F9jDe3uNKBFT2ShTqTCB7deeFtpZ3GDMWzqmpWyS25JaPycy9LfLUpaBY52spgqTpnEYYuc1RtaAdTCGk4sKW",
  "key6": "uQVpeti7v1xTQAPG32jM7omzv6cBhonM2eJKZzk6YCEGbgxGYAX4S5kq9RnATPNXn8BhR3pgrBdDaSpeEfbCerY",
  "key7": "2hLEUo8MeJq1o2jno6vNoUZVm8ERqAK3hmo3XmGzwcdZpTnKq2AMn4FvyS9HBgdL5QnhL9PSjT8X5PfFrWdk5a8v",
  "key8": "5h4aMkacpURuZNcFPUssrrbQAJXk9dnnouoHcsT1PDNYSCCwk7QvvcS3CNuP3HjJKPBFUL7FrUXExR2CAVqjBTV9",
  "key9": "4kDDK4hhnwhVxtVJx6MgXLXWkgbxnEmicQxP8g7ab6WFYNoq7yeckFAgVC34qLixz4DVyLpqthMWTBxkTq47MdyH",
  "key10": "4h6nPZcVPPSjzDdi4n3a3pj5RKgUj1vBKUBW9EijzgFctmYCc8W98U8amKBYQEBfNWM1jshsNJnWQ1HMjEDeBShc",
  "key11": "4fSgN5iji3TZT7SBfkgFhdLRHEYb6ALP67kpivSPBnKZyWd48XSLE2r5xvbYuPmikJSPa1nbQxEBfXvvemF7F2qy",
  "key12": "61G6XfbsBTjjFFcMzhQPTMWpcVTaznd5Q1d3oji6eS9MptFb9oXNUoZGMYqWBh5Auu6F8dTqttdcK7X5jANLUhpr",
  "key13": "2FTteKa75EVeMrf8erwrHhpAxsjPhPbpwWhU84U74J4DUJ2YujeBKGCf4GE2x8gMoqXH169fFNJyCdPARhjBrSuW",
  "key14": "3tHv4z6H3XEx3eP9TCBtoW8QjevrjE4wVi3vZVwwsSwBm4uRqk5dgLTPsWiRFAdRnK59EXsAvi9Z8yLZrUPS87yR",
  "key15": "qqSpPkT8REpUTKkvnNGPgpqDmV1g9DN7NHAVQv37Z1XS9etz467qYqTKovRbz38EYmtqzdtHna6UczLen3b9E7X",
  "key16": "4xCVxTBGdsdvTEHzHtRvRobGBiCi5pE7Kjizkr8ASLZKoQamedLKxaRdWkYicQxvAZUV4FU4gebPHHvzzbgU8p1m",
  "key17": "3PtupvsYrabvAqQFP9vExQxXCVVorVWZWtA33f189TqE3GMUhij9PFvcg3BqqhRkrkNQ2K1ECyam3Hz4xSthPNMT",
  "key18": "4w4JhNhgA82dtZaUQq7xChHSkGR7SmKtwh7C5MtkTtsYRxLzpNX4jv9ALkGbMCVafNxRnLhRKFD1pF9BPoepZZ25",
  "key19": "3oNWLjCUDbVJ2vp6CrU3W98Wjv6MaznFStNdAGsXc55CXYkvZxQfPqwErTvVSj85DYh8niF2bA5bKoKPgb6o4M5C",
  "key20": "2E1KasdjbVaWX2ZMR2QrQNTMZvbNzJmLxkjCFGWc7UshLSXG3x7Q8wvRVsCCkUH1EQETCNEHimTf4WUuMCqyRAES",
  "key21": "2bT9N1AWZfG3BeCHq4mdrPY3nTfKQJa3zwGsQXT5GBjNWd3DLqvx4fnzXe4bHP8GDNeoBPtX2pZx9NcFdYZazycA",
  "key22": "3azUP2pg2YhYpRWJU42xWnif2qgzj7qzVnnDKzKrWq34SzWU8WDW5MeoCGBAbNVPwwkJpjvhoNBgq6RJSk8Wyf8k",
  "key23": "22TEwM1nXmYNDT3PnPZ7Yi71XuA1aYQTDLw8BdxPvNVQkmWLGw74fjkDHV6wDrD4nG7ThxH5C7CAiChHQgcA9i8e",
  "key24": "5o9FFFP7cQW2iBovvfQG8xnMqJsy6gzvUZYWQjStiwR9EunpA98kV7Hm2o92nc3jdPoXjajgmWhFdYPsNWYiwWQs",
  "key25": "4tJTHB1RRtE8YFUUxHAH2ETttvQQG2cXuMMJSfbdLJqLwAh5YEKKRK7mrxw1jgRTN4niCkyqyfTCZN5Wai5dptEb",
  "key26": "5xJxfmWRzUFAJ5WRDzdXQU4CJY45BKiFw1WVhBdidWvfW3v7S6jB2YWLBTFPHVsDLgp6bhrKesDHVLhLUj4jVv9e",
  "key27": "2s4Li8jcnPTEbCH3S7uE9P5FhPPLgG4SfNMRTEG6eYkPZN7ySaLguw6oK3F4pM6Q7Dnt8L2bxaV7ZR4FCdVpfVoE",
  "key28": "5am9WGJNqEumHEqXMDAbvJY1u9iLrm3CVHtpEwLSpJ3MBhjtGp45q8evuR7on12o8FsLZXhHbQhULbLoFbNathiU",
  "key29": "61WSrhdCTriNRnVuP89aSooyVwwF3mNYehiiw8KDpFgVoukTFDzGHVuh7BzSNXJetDSGo67AoLe2NoRstmMKobaV"
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
