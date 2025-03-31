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
    "5VHumpfVqvKNCySgMEKXnG5qaCZHHZJRwavP6hrgouNWdENiQwpBoa9S3JEsdQLfj33fWPMU918KVNsNYFpy3p4z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28RLeqGBw6XZbnRzgd7Xh3gDvoCzSuxjW1SVMdA6soA29v4gEtzzZ6yN6A4GbhZoMGw7ueGCVVwF234o8eoeRcnT",
  "key1": "2CzhTt5gNydUYnTbogLu9kAEbNbi1CbBvVArC1y6NveR9KvEMDSEFLA6Ry7d6CuT2ssXBWJ4Z4a3k4gKKBC3yQfx",
  "key2": "4bPZtcTBbn6sAALuJAu3Rx3QrzB7XRRwNWTJuYEyMRNstzi27tZoHXGDNiWkD1FxfP5u7TjTcw76mpnE7GKvUAmn",
  "key3": "3n8g2doGBaWLr4bRqbHrbsAb9MRtgVGgdikZ9wD4HgLT6cfioh2aZrwkTMi6rXcZDDYLK85fV7ueSwVh7wTV7KWi",
  "key4": "49zxSEbWBmXjt1AWwS1jbQHhacbPPK7fB6uWSSp6GFQE2BcjrryVajXVBbj1KS1doYHFF9M6imsEyqfnh91cnbzE",
  "key5": "BGdsmRUEFPDL1BNDpHoZQNXcLfPaZcXNPL5YM5xDo922KhDnVajvDHkCYUShBRiu6dUqihA3NtDmPAVyXzZgBg8",
  "key6": "4g73a6jLvafJLMNaE2TjpnAW3SB7yK8j4hC348WNJ4B64LaYzzhf94pHbmYoiHv8UrVBmWSczMpGdaP2ZXnAoxbv",
  "key7": "5FePpkr7Y2dUF9ncY6W9YvHffDz7A1muuJd9vSWrYrg4WsAd9g5TuP2FGvtwD7E6BMR1TPedSBQe3o6d8KUs97rt",
  "key8": "3X3PxDx8jB8n3Q5QqTgJscQHtnSrZp9VhrtVQzs1MzEvKCVxBvYMgEfEZiEzM6nHNDhXXH7j3NPPfvfMywdijwux",
  "key9": "2pnqJiYf68d4CRbfScmtX55K7Jj1PDT6HRZ6mSbMkuxtzWzj25mR7ucBLvGG8Jp4vracZbgC6Jxpzv19NBTFacNS",
  "key10": "VA5WHHm52ZM7iqPf12egUEwTZL2RLpg7umFAVr6gQMhVcepAG1ynHTZizwSbMUKhY7gSzfagVnVkkEVT11pWsv4",
  "key11": "5AiKErmPGBFb88kVcWREP9RZELs5riz5mdfg6TCeeC5MhgrWDYkSzPBiAfBrtaPjZypFXpT3GygEzbojvrG4NrqK",
  "key12": "51PJh5qNg4L6mwTVzswWH4WjsSkAAAa1TwsVGv1VsWgKYMSQQWdwrL2b911u9czDZs6NUSMhw8C49xv6zRm7VRtB",
  "key13": "23iLHVe6rzCP3v27BDbHyfzptepkqkP8qYE9W8dJzuJx2nMhnZ4wER2ntYes6SVDvzXLgFq7t1qgJmifEz53ZcVT",
  "key14": "5PKBiEue549MWHf1z9X8fyc1riw2GkuSYnP2dnRDBWjumkR28us1aYsMEfjXhkcgJNXDjG2sy1MSJ7w3pyg8oQvX",
  "key15": "4Q9jemxhNqLAPxStTbKspr81Yqz6pCWMSG8os53ZQtxPFRYAUHgZ25VTFkJUT3bX5rnKYt9EX5VrZhPoDdwFEXn3",
  "key16": "4ueEzyPWrY6PNq6nBGGDqDS4MWmjwkAWak5kKCPnFVj2vPkaHiBxMH2DuHPa94pqe9aCzUriEZg8vcwG1oJGyD6D",
  "key17": "4VSEPEyLgJLWGk5nnPXRm8EJttfo51XquAK1dH54ja22GPfACvohgFiXbmeM11cWWbkn8aQsNZDqnD2pN3FJZzrY",
  "key18": "4pJ6BfdGttefELXHtputV9w8MAbw5sb1mpZEbfT6TQ2bnFhio56A6FaFH6gXkaFt1NqRmf346ConDwJcAchwgah3",
  "key19": "24snMCk7XrZeFd1gYvEDzijCYmuu23y5j7VdkifRJ9ZoMpeFCAiHwVLMZGH3uLXCz2gCw1BKcQECix5Q7YshqjEF",
  "key20": "5VK3zosvTtEuEB3vkUjcBHFHvmJrQuL9iwDPXECgEaRfrMpZucXtEcF3H1QahCVABpNgA6AiY7vPKqZKTbp9NvZQ",
  "key21": "48Ti5AkGkWMKGjoJsp1v43AWsYKtXxrMiL3UyJThpBzLW6AshQEssuweFB96HEpKadBe8W4wHWqCUkYnh7GYipmm",
  "key22": "2L2rQeq1Ccki1hPHXdJcWvA42s2nGHSvwp6WNoYdazhXwcH8rwYThAu4jub2CWYQyT6nzBcrqMuT8mjjKbhqYrv7",
  "key23": "5ttxSzN9hcuoyNJygXScyBmx5gf4mrkwhpnMjp81BK1YEj87wfTTEnXU6bxo5rYQNkzcv44UbszNo6sZydD1Cfhk",
  "key24": "ijqLsksa5NzG4VyQr1t3yPL4mVRdjcdPA3bLAZKJaR7F4fngwkHvD9QLHxq5xR17SKJnPDwAgrCnTL2BxQD2BMj",
  "key25": "4rpSihxKtrjAyNFcqGVH4mMEetWr38PEEcdqxLrY2M5ynq2LmL9J5hfexbx7RwbwpRxJ9xh5w4uEDEr3uHpuvWc5",
  "key26": "2DSSXANRPAqoNxta2SoJA5NkgGbMfMH9B9Q2nSDj2AXdM6MhDwr9a4jrRxfTXriLtEqBWUb2GyypocqJCp55e36Y",
  "key27": "4To1E7Uo2HtTHQX7KTVvdVpNzoUAHFKct19zVTZ87DETbNhT1msKr6HReVaspZwTNbquFAgXvPBswXB8eKzk1fr3",
  "key28": "vmEvgjuRC8MtWTzkAn4P7s15d6haZ4JftXxSYG4VdBjXFunfj6DeSkJ26dzeDmtjyiNt42fhhwfQzKm3sSuzfW1",
  "key29": "qpWDLsA3M3rnXvD5YpFQXju9dRDUBnN185Cxqq5QNw2j9xLMgKhRtyDpHPftgL8ghsBuFMFjsdfTxFUu8U6FQBx"
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
