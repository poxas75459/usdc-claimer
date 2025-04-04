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
    "5jsa5ZU4s5msyEdcbdJ1mEoQvAHyk5SiZq88Cey5ukWnHrCtkWbMzjzJNfCKB294jZ2BcJ7F4AfRFLszA7E36qDS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6SACoM43kV8yXzNNxvFGdnhJeRF9m7Dc82ZqBTZFzfXhYhn5QcfJBf6Hy8wLCw98RCH8bps4iC3JUc5ngi1DgiD",
  "key1": "5J8YdpKKqfmXsiVsiBkwAFinP4CWDzTfrg2zLtYGds8gPAXNbdde3izsuHQ2jhcbuBPAVthPmDF19PqHG3u3aWi9",
  "key2": "48mFsRYnyaboZvN5dDoNuaH2qUCGRYfxGZnxjauiQsGP9C1QCmFbdFVyCmZjt8Cg6fCmMhK4ivWrJMUMg2LbyYob",
  "key3": "4gEu7a224TT776wXvq9zTJceDAs3vy36CS8sdnjkQWrZ9vKS3HLopKVwDeRRtqG3xPxVpFNV2NWWFSQxckyc9Lxh",
  "key4": "mewKwxM4kDyJRq92kU3jfrn6dtARhovTCrssnMfHvkPW8hvZcz28mAkqSNyJYEmSVHWdgUXQUvw7sFB3AnhrRVv",
  "key5": "3L632Z1W5E9w6TAC6rjHq4iKgirwd8zjhvLX5y7CyCohuJcP8XNBCpricw4LXsEEmDY3kRToLXpfxtwmZLJMMYPn",
  "key6": "3yMfa2y4zYCxo6bWE1Hng2mBTPQswW19mgrYvptmqKSSEjr28VDRyE64PcbJ7UH3MyVkMVSj81iXj8rN5iiFGcij",
  "key7": "4nXDEXa78JnDpRnsQ2xBWu1dqsJDTmnbyMk31XXdoR5fHonsR7wPj5ve8Ysyh3LubQGspMmw9CKVXyutbb2o6M13",
  "key8": "3dYYoVPrFTnoL6raSPNpsB2PAatfxaLSHqBxXocnkrjXRopYXzdXRD9mUZ3buQGRDMcxFoxpYH7W1GtpR58iWUrN",
  "key9": "rKRjDbQZwFNEnjABezGrC29Qn43kBYaC4VaN2M9fsbyyj2tFVFhYe8BMM9gTyetBCnfQrgTnR4puCVc5n6ExUFk",
  "key10": "3iXT7s6G4Dz5Jit33x5sRxdASFB4J5VmzGogcEvZZ44Rv1DX35YvNAhBTn4Rwp4eSFm3KHZhdHTQ5f9B3sDjS3Ta",
  "key11": "4aHyVVyughSjfY1sNEYgRrgFCjFchc5KYG9KTcaDm5ncgTnrpopnT8XXisxyyCy8izWomnYffTzw1ccaGrQpA2Wd",
  "key12": "4Dtoc8pCfRS4jHQjQNbPd9AAb7dqW7iQiv9J6KR6EAuyNwX3abmJSZn3Fr7hBDEFBGQAsQxtWue3hgVdv5gVdraF",
  "key13": "2KfDboQawsejayqAufD8BtpvYUdG1S34SuZAqHqZD4sYjHs7Q8PyE73ogvofMhmTteWJV7jNdswPiUun2zwFWLPz",
  "key14": "3Ebb5iVYHNRZPAtibWyCJEbyAtKHD7DUSmC9ry7Mq9Ma7BHUswfLTu3bbtGEShJ8bXJfzKTG84vx3KgqsQkdXSz8",
  "key15": "3zSGCP5RsgsxQSYDeYGMciQHwVNa9xKGUqbrQqU5nMSkCDAfGah7vwA2w8K3VSF1uwN1K9dE4ddVsjirfJLUHfX3",
  "key16": "5JNpfRfXg4X9sRmKoxqHaivqYbf4LGSWeWWhLGk2A1QMTijonTzYd2PRMuKkeK9DivG6EpUn6kMwS2sTdWg1nh6u",
  "key17": "4EnNb2x3TesH7ocLDHCPcyLUgY9Nx6dbtxP9t4Jm871WmS3UfYFZvrVN2bJuWBj73VxTnytzDtFky9wAQB6TwyWZ",
  "key18": "2Lr11PQDhDCXx7ZzJZy4mLtJBLirw9198MrZNNKNW4cNaVJWZEHDUk5ozJPYSWTKDDEjrxqWRDm3sfv13mAJpWoU",
  "key19": "5tUvvz3rVpZ9W73Sjfu2oj1Cq2MYrAC5rzh1HriApy9m7dfh1bNbn3tziMzQVyX9C5hLQJAcmxWUjQ8g3uK3gsqW",
  "key20": "5K3yLUeGVH6YrLfPzGmYTn9s3L99M6EMHuR3eyFWtzhkPrR3umWtTHcKaZRBxh2QNH6Gic4H4Bmu7sCDat7Pdfhg",
  "key21": "41VN6VrP5Snw1dhurvekffmi9ebSFX9h1hrgTHyjihDZw7TgHr4PSgK2gaUBCtKQ2vMm964kSrvUf6aq2gMojvyB",
  "key22": "3HyvkE6kmbMcGGwnfVgvERjRGSBzLnQ4MVLwDqwS1y6yw3PkX2G65XmmbSVqDXtvkWNSS3RgRJ4e1yAeHW2cvcks",
  "key23": "4hNpejCVHND9da4JBjy5JtRap7K3DPmgD2PMbGd7Hw5h3FpkV6hnhn2pMQHgFnooSUKDPUBNGCD84A2qkVfq43aN",
  "key24": "4gtp6htgbCB6raShBg8HvdWtjuyqkwRLSTDfkVF7tCURZceX3NazmXyaJAS29scDfE1kiA7du7nR2JzAZPXAq6KE",
  "key25": "2NK7a3cnuKCshTepWsa4wEKDVGM7yJzf9jTm672gS5YefRcCEJSvMyN2JnHszEvF1kJ5LMv7k8UXti3W5rb8wc7"
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
