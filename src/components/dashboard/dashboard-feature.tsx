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
    "5aBPcLcXG3e4LUt7kWFTSqeDacfPNGji5FBMALWEkmrwNggLH9MsjZWsXBaQkHqACXXzzaQLSXmCNhdys5GPFh2t"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55VbT2b2vUNnQveAJNZzmto3StXKCH36hyYPxkkLzXWynYXnwq1F1pg6qFk4tH37HszweytiahWQQdiijFdv3rQV",
  "key1": "2MCsGSP53cXYk8CYoFF8J24pUAZfhe2TxptchgWRoMqAv3WM6zXAxVyRCDdWGBbnjhCa5cWXwk9KBkQNiju9VvcW",
  "key2": "65KGMNvJp9pqdfWXtyXdx1RJXXvBgZLbZQXaJHjtEbjqH9ACDFpXRcUDJRAiHeZzn7SmQg8TrQNS9ojAzSbt5VPP",
  "key3": "4mFrepYkFyfcoU9dtocavVic2XbGxW54QJ9njPkmHHtujNj4bst2Wx75uFV7iEpwovFTnMnB6Ysxg7tXjHAEd163",
  "key4": "rzbpdtKNt3xgFYRWfm7g9k5ASHA1AEU86gs7D6YALGt4XD7Y3z5jSp4Hj9HYZSmnzD5GotoySPuLQkEwonYsui8",
  "key5": "2jhEBbPUN8vHUjiz2upBPninG63gK6YWJb5JfFkt2VLvnmazk22yyzNSVuAg3Ms2zMkPko9MgPSrmYioAtqfZtfK",
  "key6": "3W6qc5NZgxdB5HEK8FX8xRFXADjEhwvU9F3GZf7RS2pbHPkK727c4yjNxCgqw1UTqRQuY2PQCbQ96TBZPATrWfv8",
  "key7": "ph9P9CXCj5Di5ksgYGtRv6RXqZ5tP74b4vP4nRgHvdikE83UTCv5uLQWFhXZh7LqiEysoGD2nZYTG3ziqNt3kAV",
  "key8": "4vHgT5APPfULTEiyo4KaEXCqQPiHVd8pNFCsGToL6BPtNQwqqLeEKc3JhUPzJjBfuMM1sz2JCWjbdAzzoBDLkdsJ",
  "key9": "qm9DhQWxHxwFbDsFdkbU8MVQ2kVpxnngBR8jeSfryXMZLVs8zt2g5c2LWWVNCkjrHgurEpAKCMxvQDJt7gKCHC7",
  "key10": "3HaHGsJALG1jKcEjTNSfqU5pD4wsDQp9veYTUTB9pLEaP31mFz3uHDxiKrbLcRtz3aJWjq3Sep9DQi7LUF9SDPXP",
  "key11": "4FrvFomGdtTsAEdVK4i9HU1ZH28ZT98mvQsaQ7puNUWyvjGxT4dUxXEgr1TCGcAc9kWttDixUQDJ3G7JAkuB24sH",
  "key12": "2EGH38WteCpt17Z7jLME58zmVhx3VkJd8yX5dzMKE5acUXWzs7fUcLzeftdby42qFz7wrWy5sdKZiuEJvzojyMYM",
  "key13": "4dRGtiWYDqNCuxA95wcTuPpSm2qURp42WQ7aKtG8wRVz5xsSYPajfumKG3Herhr9YbN2pwivPZZtQvWW2UA1yu6Q",
  "key14": "BBz1qx1wvyswqLLBFGGyRBweJTaTWa9WhUxubPBTaph2AyizsPzLjHZ5xCfnvtLRqtmoiJYXLcRPLhoPodEvV1p",
  "key15": "3seqW243nkihRdneurjzA7GPY9qk7odFRJ43sT8wEMQNquvVzm2ZomUUuyuHyjChuw3w6pG3yGxCz22VhQXjWDKU",
  "key16": "3EffQdtLeMVBJzSPjpxFDXoikUGAkQ6j7oDijovpfN5KrPaPCq2QMGqm7f2djDSi5X4Nvrheze3w3TFR2onX3YT7",
  "key17": "1h2CdAqGFjLkTF2hzLYrYJgcYFUnUtVHQvJHTry2nveAegQs2wuterRscpTzF1XfcaFoNzW6PdGcXszMqbFbgHC",
  "key18": "5QbTR7ztWBRa7RHDX3N5R3jWk7QpQnURP2CNMZ7Nw2ix14J75XVumidHr3BJE23N3xVX3tPrVZiHdyoCZPKpLUYF",
  "key19": "3ECBa6Bz3LU3ToRanZMyDB9CF7CpcVkwqwm1WMHWnXKnVRKYHHuTxafZS5iHDsjPhkkMG8TQqXBfMZdbD2RFTjyf",
  "key20": "4bejcmvoo6mALdAKLzUkMBmHFkviqCmo2CNzcTUng6JwWjzUsofEZ5CcuXqttavgQZpdY9GU6Y2h7BNiryqmpyYU",
  "key21": "4nqRc9mvvAxnxmbNkLFx684JrEUYYQTTMKGbHVF9MDvC4zpiU3xVuZTsJg3Drtva3WygiGtsvWzHTgPZf2gmAYUP",
  "key22": "21rKdUDtqgqvnodRpKKLtHhZKsAdrKkGPPMPqcHSCyar5dpuggZQns6uqHPiApxiE1czisv5s5xR4VpWu1CPuBUv",
  "key23": "WYuqLc3ZrTF9rAAaze9fxPqxsMYFvL5R61Rmk5gJEwjCzyLfVyzCvZGX2rgzW9jtEweD9APcsxNkaSuvnVLrUgH",
  "key24": "35NkXq6u6aggAjCdXqNV2udAs3WCRfzEmgvRs4eDYxdJhWudV5ntQVKP9Uw7T4xMevVzUADtkSdEJaoesNyLHGxe",
  "key25": "36wiZvPpCQVVvTieyczFdfyDJbBgNHZajHb566pakC3h4xLifoQpxwKu9RKhpkSAwi7NtCykXP1DYiApgmbLCVux",
  "key26": "2v63hNzXKvaTkVxaFH9gNHXUhC3CNCSmZgCqp3GqE1e4caVLbSYjGUAVqqryVQnaLgs2cd3iB4pd61wDwouALDuL"
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
