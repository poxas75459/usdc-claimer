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
    "5H5Gf59qY3zU8BnunuQvNn8sjmnWKbF5D7upKy1oiLQnss78abCRgy98X887Vh1vfTLCR8WtfAXjV94kv2McT4TW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51tc45kgi9KsmqnfCNkNgVcyjVU3s9kdkBwphDmBMf97FFkd9oy84oej2TqbbXVfUHN1K7K6RuNaPcBYJzJmwW6e",
  "key1": "667KQ9Sts47P3Ui7vvRV5bQTMmo617fSdo3ee6wuTwg1xfiVVJGiMzJmck7wKtpaH8AvNzBebck9cEUZ9NikemCz",
  "key2": "4xDqnCMxwkU2NZq75V43GDfwnEas1GVPr3VBEnsrVr5xTHE4jJtjRFPzrwuhPFX8JxEgyCBR9sKYjgc4htpBZ6FW",
  "key3": "65ayQSFVRak9jApJJu1MHbN4Qitht9uKLLBcKn5iwpL5cMmWhtcgN5oPnyde29P8oPP7qQCLvGMaSTPwm1J4uabx",
  "key4": "5a7M1u6qmg1EDm8qiYXqxAXiaXD5rRtxHXb1RSWiZUhu6B45Kn9kHLyLjB4ufXQXjz3woCeXF3PnPzNJzHUxQ6e6",
  "key5": "26VmPYRsRmcuJKeUmJ2Jh6MU9bnjzyyKvJ29i8PX9yZiWs5K83EWzYEDt8YjAiroGtBQ2Rq42ZVSh8SfWJnoiawh",
  "key6": "32QyhaJVPdK4o6nvfHryBbisU8L3TfuJUTBRu3yXfi99SWwvU4orgfmj1iho2HThTEFHehBrn5RGF2n5m9hfqbtb",
  "key7": "rY8YtQiByMzZz4NEdCanUq5RMTn8S14AqeTEU9cCWzUEdysZfwbhVA81XQ1mWETocLS7g8pNbmxXcHSGX2qnPan",
  "key8": "3SPS6pHq1C7WWM3NRPMwEtWzV8bPUk6cwvmBaTpGP6UBHpPg3sLhKbPxzLBDiMUtpvTybvKgFRya8UT8PkSTVp72",
  "key9": "5wNCHrWV9Bt2Es9YKgbYqzkHEKqfAdip9Po9ueffSogj8FzuKTQyVyfsoSvs4k1J6sCMSiaDUSJrhot1kiwK5QhR",
  "key10": "36bKLN8Z1hwUrKqqUAzAb89FMRU72mFKBqSHWShWAk1gcjsMTit5DHtBrJYrwZgwubymXChNQHXp58DLpEZeoMAg",
  "key11": "iYCzs2XZ9r8PLFEExxJbCcuVZdLb3v9iMKSNYRQgT3hvGMU4fdTx3zYFa6Cudo6ipLuJRDpi38zFTVUztzSquqV",
  "key12": "4LuAbMPJC2qkQwsKT7ZEeZdKBxeAoJsSb7Thr9ii6bgSW6496SNT7hK1YwC7mer57jQHadf33uEcFaYKxVMrvgoP",
  "key13": "CCh72aQ9AVkDhuAhnTj2P26sUq2pFhjoMehuf7vJRDBXx7XEGVdAbEABGxZVANesytayiDFMiRH4nRRCnaiuTkV",
  "key14": "2DM4SGpVt1bC13x4wkMRs2qY8tVtWeZxsME6imha1Jd58YG43k5pvX2HLadhdXHW52BWVJ9BkJQ8Baz8sSfWA9Rc",
  "key15": "5itubak8Skzyjy9fwEX5EMi77cRkMaLumgDbSwST9vRBVtpA1X8DXpGXWYbwccRUu2iEqMR9CHoZ3hBiSRFaTxsd",
  "key16": "3Rq63gZ9hkBcfsdY81FbzzrkcfWpe7bj3vsJQ9SgzmM5STcZQxR272BaVCTK1y2DVeAgzHXsfP3JenASENysi7Hy",
  "key17": "2mZ4XtpD2T57ADbANNPpvnC199gqaWB7smgodjnfJAyz7Wnz3Eh3aM9GdH3PpDhSCZoyskmjM9rjxirpYhdwyikD",
  "key18": "2MKeusTxtEft8JJNXWC7MM1uasGrPwhaWCxJX4vJbzG6HMGy1aEk2ndXYHerGjP1K5MEoyue7CTTUc2o534B7os6",
  "key19": "8zp5a84w8UQeJR6ScSPsNk6rRLJgaKCeYm6VK5e56eXyf36ebXUqovCx4sXEEMrsPqwEPYRwxFJF6p2Gw7M5pee",
  "key20": "5ohvRAzoQ8P2at9T427eEFJSr9NdZcdcPsiq8CWjJTtdhKAKH65EhyURMuGrTVU1WNEHScrfxrcjktuV4hv6q8wk",
  "key21": "531WmFzhtsWc2utoTrhff7DAjF3QaKt1L8vTWZd6Eq4U1nGk4gGrQdPQW9Qbv284sJyKLoPG8JXzRQWUkL8BPUou",
  "key22": "3oVq7husoQM8UVn8num38Jm1KZLZSRhJPAxT1E7s15ZiLLGrUD6puvLNBSVfprD3GVgtj7B3eC7KqVtXCrwtqGzg",
  "key23": "3dbMAG1dJ51gWjTbiA51RExvqJXvmTkvAqbCBPBFCUN7Yjpgh6C4MH1YX8ZhLuR4o7UA2pcBNF5PBbxmVY2beYkW",
  "key24": "GAh7wgbd2kuqz7iCpEJWAArHDsuiLncFwBGMaoekQQDtiHxorXj93Wtzmb4gzUNPokejhe8hWxjZ3efuwNURoCC",
  "key25": "5NeQ6UCYczQGEAr9NrckUqYAmFbu8PMXaTxvkdwYjxqX9u5kxeYYp4b2CvjhL8eAb8e8wLk1NSbtSgN2Xis4tUzx"
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
