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
    "N3GuYiXQ5c3rc4pPT1iCN9d2frTEYPHxYjmuwezZfhLFkNxbo3GMeV8UwrG14FnZGN8hF4VadrUdp84fxwszs6v"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3i8VqhGwUPrCbPPxXRL6xfseADc9VcAA9WCbHxU35VNZtJirEcmm1PhLjsJ53EJfWPBfJGL2pSRWxJy8CzkryQUj",
  "key1": "2BiD1wZ2hQerEu3be31M3TT1XJuf1fnj56JD1aRTJ3hv3uxEZh9zUFJNY7pb8FwMuLFsLcHkqJB7AyBhmY3qCTFS",
  "key2": "5KFiZZSQt8oQmjxKcFt8zBwDw6ou5Fu2sredfpENXymL6h6wWxzPNofkk5enD2jjrAMMemENDGuKs6L5GhW81HY3",
  "key3": "2vg5KTWCL584B1eFFqqefkWZVf8nnX9mrEQYE6Tc9E35mRKmWVy3a4TzNB6JgQrDLZbRWybiwGrrKy7uKEYjbEqA",
  "key4": "4YHM2dwFBWCX4gqJQMbLyNE5r1LRCWcN793HNwyBFWWUye8u8y5b5iEme1HTUpxJWNDtUhv8Pe13gK8krvhjbyQX",
  "key5": "BPWewPgyJaLzJLcJB76YETjN2onummEhoEbkK6igaop9vdfEdaDaVdciudgqFu12fHP7aBEMiNFkRDs5PYZ4w4Z",
  "key6": "32c4oU3HuV9wvFve72WaFTVLDGnoW9KJtvMyey9cdYfKJFedLKKF6zEjEu7dJqWNurrLqkj8bZJU1Nokts1STgdq",
  "key7": "54UT6AiH3NEnsqVUQo5TT9uos3C6pfL2Rqw7N2PRR4bPVBeRQMeyYBduLQqQ2pCbX1VAS5HZTAibf7ofPYiCtV1B",
  "key8": "So5RcvJkpqoHnMorzutptSFhHec3hvAQ5puZv12vpPt81gr5cTeEfUJ48LPQoJgMYEYh2PdNENGVUfajp1pGoGE",
  "key9": "54nUFBEjgbeU8USrJSgnCa7QruQKsYYFAGXxETBCDuz8bXoAZ9CovA3zSACfismtD5qA6gqzUFdKqo2qgqP5tBj9",
  "key10": "2mxubi7abyQouyRKqJ9fqea4xSGJU8EQmn4VNdkjWu5sN3Wgy9aYzHXnsoM4hjbm4Lze5MAqnxMVUC8VcnE1MV2k",
  "key11": "26NhHVqe4MN9nBueSVSHda7xy9q4iSgsrDf1RkZCkcAmCx52fZ6mmrwjEP4xzt91rQoeaqZoKjUN5iurkcpkQ7nf",
  "key12": "2jJF2tykpaDReSsrE7XV6eXCN9wPt5ME4FBBGdhhcAayqW2yFDxYMjtRbFsgbxvyu5VxwrhpdTDyjv6iRW6gfCAR",
  "key13": "5VE3YxdjNUzQhgEFAS2qaBPNtQC4T8wG5XFgQQwCfFSLHFexMBgPsCRsJaTfNGZkbPTRhLKKadfij7XFs3RyocGA",
  "key14": "3AbbppubSQq8vsRpvRVrrjZ6BjC2DCp1ev9jLF8E2BxCP6nT4mgZVqzcpj61wdK8W8vBbonVXj3JQfNZoTwK3DLJ",
  "key15": "y251K2nATmgHBGy1ZsgQb4Nuah7pBcxwQxXJnr5pKvYXww6qrRcKDXvvdbBa6BWFqTTbMU7RDqqDWKwPCPiVLuv",
  "key16": "cdzmGJuLiWc9pTUpUSFvdvYaRxsT2EwT2hpp14asvj7JowaWcJqzXotewjZ5e91bM27DMo58o7S9M7BkX4SzgYH",
  "key17": "2c8vFfqiqFmLSNiCLB4EPgY1k1GbwQg1hq8FJsWtvuSUM4AKFYfwpWErKitFHejChvQoSmbpWyf53xD9GinLdg7i",
  "key18": "39Z7MjopbJhV2pAcT6SZgB9aUR1g9m3drxgJ9RmiKrt9hUiTMuSWtXDmimtkLbveMLbWkrZNTcm3MwQbRNJJRWbL",
  "key19": "2b1EnDVdfZWQNkPRfE43SHTfhodzExzwGh1d6q8ig82eev3nQS6QgbesBWi9EHdZbaKFmLmFgGifsvxmEt4HzqFS",
  "key20": "kWQK27LZT4jG8FxttQjEtRkd62Rw3cDKEyAMUi17GYsjKfrBHgEZxwtJHzpbcumvRUXDEUGwUbYWGoo4f7oSUsu",
  "key21": "4eqH4PxKQtB2whd2wJKPjRWupwtN4iiczZozB7GjkgraZzrcSG91KE2d7rHr6G2RdhrWY51SFHxTgR2b5A5ePvbx",
  "key22": "MMCRjqVjJxVHqr2kvJcNMDT58wbY1ddoSKANoofjLYqs3ZYccRuZ1Ti7oLn3XN681ESG6Doj6MWm2rFX5US6gyc",
  "key23": "3gRwrTVUeShkgPn8NPEgjeZRZDCNvPDbiNzrr96QZwLLz3Vy7AUDuivZkaLjyp4BTseQL7zcQJcyy7SkXPAT1H28",
  "key24": "4whhkBze6d15xpSNFjLsqhnbpdaa4EUDgGVwgKQQNxBVy8DhQqKF4aS2PeUb3V8ASEU3abHTfR8Pq2nSmWyBV5M6",
  "key25": "67PdQC6n4k8MD5wAqzMhp1MYRGs1BVJXpnC2FcRh7XE6f4JmSTGWHZzLrkQK2CdZFc9HyA7SLfwn4e7YdvtfvAHL",
  "key26": "4SLkfjNHYEnUhapTjgfALVvotMak9S7YKRHKDa85wAve2ZwNNpqmq5av4P7h74RoErDXRhBv1C3F4gB4LgTjRbE",
  "key27": "jSd1fqTd8K6W7ANHMba1rKHyShNrc2oTsySADPz6jbZNNnsfrzr5ymohWhpSe358EDpDfX4CYumTtb5rSvMf31N",
  "key28": "4us2EL5uYpmDRFQoGH3nBWpGpHtBxYR2SJBa91AcZtC8DtuhR1j1NuMNYCfJgfPNMpXyPbeV6wA8VkQJL2oayA2w",
  "key29": "4T2jrqSe5EnnWH94nQLhTd3MdpzW4y6imvbmi3yH7D7Jy5v6B1y5o7x9cUNVc6jTAnv8hyVu2KRTZw7NCa3ok1ZC"
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
