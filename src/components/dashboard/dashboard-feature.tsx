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
    "5qbyy5jmDQhru9Ybm44JMpGVGAL3TMr2yNMkK3GCevv3qgDAatJG7XbyWE76o5v5FcaJHzkMvDeFqArvLv951h7i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XaX3f5D6piJgjJfQigDD8oYvsAz1FdNCvY5pR9CbVrUnxEYWahPA4j4pjbu188hQdYGgrwHVP4Cy9wxp16ZSPiq",
  "key1": "5hnpD8rLgEUGHcA8QRyR9VK2FmbCM36a21QgF1BWqC4z8FxaQ97tqSJ3Juh1hngDXWFbQwQXBuArFQoG2TXuN4vf",
  "key2": "32aTk43iSXmsmWTDPHAPjSV829ZnT6kohzV5n2PQpwk4WeFzo7LWuuazb6NtkDWUo75ACkkQneE5P2M3r8B5SEyq",
  "key3": "4EivZKX6nqxYj9fSZtHeNi2YrXtjfESNDm3sRx2BdNdrv95TwGxcEQFrFtVogppvAUqcJBXmAVcbihsqQF1FLqxk",
  "key4": "2Dtz9LJ5Y4NJ9nTVbMC9Fv6TdY7DWa3wzqaFPY7FBfYb63BEJHmYDGzRXDJK7s6pUR8pQ7ey9ZZRt1xNgmzt2PXW",
  "key5": "4WCHCk3hjWHZsuyP7QZjNbfuCpmEs29pEefcpQ1HEDZ4RXLcYHni9oX9iciPvNMm8Lij8GGKT7YZBraJAAT2nYjS",
  "key6": "5CWzPpVhuq87twgdjDj3nvN5ZFu3cjyfCdHrY19MNEiA1v8AFWQfQcYfRbjxTHv3yJMzPCo3KVcRdrgm5Bz3bTk9",
  "key7": "3pof1FJiz8JbF31ygpm5WBFS5nnK837uqMFqwrJ2shySMhmoE7qTTDzm4idnarFW5ddBpsogndfUgGWxtvQwiKoK",
  "key8": "3xQvqqtSL1PJsXfbKziVMXRRrJ2BMEVCP8SGtiE2n3vYhkJMPACNsTFhriUzArXovP3QEQPnXaFjv6tSfDhb6PMp",
  "key9": "4ZA9KDsuaXMDXMRbT5NssyaLps1yHAXcSSCCVwetSuAKHcXzF85tJNrFo5aQfgdn3CfAQkuWPcAy8feC2f9PKdY3",
  "key10": "3iQhDKWfJrg3iAE7xcbdFo86iG97SEv2HZWMey7iLPcRgkN6nPi1RvPn91WTs3srxwxzuFbwQzjEPGFLTAvjFUHe",
  "key11": "5mNC1z6NkkqwJj6MGZfDWkwZfgp6fxP9kPe5v4heUVUYc4cYcA4ozcqeEajAovBqAojEnGaKF1JA1KeUMtFWTWwp",
  "key12": "3p4ZW5AKgKdswiFUHgXTVz3A2BhNeRQD5U1np6meDadpdQVVaiqC7zzjs7GJQuKGi9d6iioFQjCvKyTb4b4tqhMF",
  "key13": "5sdK6b91AGeoh2kgEFeEK5kSjzQYDQrPMn3j9DCwbC5CJoFALuTZLAM3RbsvGCgF6To4emicGUM4mawxWN2bEMZ9",
  "key14": "2TRCtJQns4KAZFPnS5TYaD47MHzcKxyv68iqTRa2q4yVXP4P6FYQrDeehaLhv59V7sRMFzSvJUi8YBUE6Ew3iAh3",
  "key15": "3hvkTsxUrZmqG6EnVvewh8zBLFzyT6Sd3AzMNcSz2hdCR9X3ayUqUYHzcw7P81ULiHQ4FqSudfHWTbzFD6AxLza8",
  "key16": "56rQUW9fZGij2dsG46TV9NuQr6preT67Vzb9x4K9NRP3tB1H1SQkLm1s4jKs3WoPeeo57CXr7zDqRucmu3nDMD5Y",
  "key17": "323PXR1sFpZ3havcp69Vf4eGiro2AiAX6agN2cBRrAj7dW9rk87t3v2YFwt6tkWN4iEFb6SMJugnC91rHa165eC6",
  "key18": "4mmfQD28Ujx7TBovBChAZPWbJw1kNoUGPDteof7KaBgNpf21tCQDHRPvxBbCwsyF8iwHRMQTm4PeennHRtLzamV4",
  "key19": "fsXt5GLp8kkE6wfeSQob2iyUFPinpciNMriSdaaiJYoe4dHyaYiniNVsinNWebqcJytKhnfA6sJyzUuptiJZUje",
  "key20": "5qvfSaJHby51scUr7y43tvSB1vmHxQWdD2rm7AMzAVUJbZgapeguTGoxj9okNxorXS2ys31L1Kpjgg8qYAg1izKb",
  "key21": "5oW1v5B81QkpthsZ9RLdmrp28dLr7QNwkYv2XHYef9mgEADPQSutBz8vcKiSUrJmyQ7ZfzFNn6rMH6DFLNV68N1e",
  "key22": "2rVe1Ms9WJ1UzepX2c971uDYyYsc4wMN3p8ukPFfnfnVLJqTsajNugCR55KcikVKKBDeUwrA9dgo39FxqQJ8SHe2",
  "key23": "4T3sAeGfL5oB8BYrFU75GXrjjwdXYC3QyVaaX1Gj7ptP89ziWwY64og5oU8CPjwNU3Tmb95ebAKsUhFKkwjarKga",
  "key24": "3AoNYAvHVaoUuyj2gkBTnmgScWyrjxWh9nY6uJDaQEbgNeUyMgnrtsbNeX3LZMoQ3mHDQNWKxywGw1RuYLFJJgXn",
  "key25": "rT26CpVAR9xEoipUw2EiJioZeXL6WXjZaJg3a7wst6kmJeyESBiqBJTNwRZdBzPwoVHSEWzatYFD7AczzKuMo6a",
  "key26": "5S3v2emqUirSGkeSGP3aJEC7P3Hpcy3NLsK4wvTghafeJgffRSRW2fSTBcVwmQ3KvtKuDtPvahTbPG5mLhYTzt42",
  "key27": "2ZcauyvWvDGnnEGhq2pa7cwR94V4xwyxzkDzvnRMAK5aGnapC3pQPeQqn3YqvqLAuYeDdWJ9dKCxT8RTrorrdQii",
  "key28": "44YUiHFmso3cv4Fdco4w4V3xPJqmh13GtdXVQH1F1FaYQdsrATa2T9NhTvf36vK3BZchhSXLqneYa4tT3BV97D1g",
  "key29": "3hFfcJsTxLiE59GQPAissDK6p58FZPJ9zWPPhSzQTNMKn1dS2EBWWZpnfnLDX2vvnMbdMvA6V6b7w2p6isoAdGYf"
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
