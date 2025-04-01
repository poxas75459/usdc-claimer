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
    "g1jwAQaCYX7t5JtDPuHoQF3FPYLjLbXSyA3X8XBTE7SHNV5sL2poCpfYqLeoLqKALz3fzpyJtakY7YT5zjm8bX6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QXWkXaX9uAcUMZ3ZD69ny2rVGU2xBywP2N3nTyPjRjw2okwfs6ehgjZrYU6JqTQiQX5XLiyniUB8r7jaoHE7GK4",
  "key1": "2UUbJUPKVvxXWDh9bBoCnaaA4YXFJqXSuqFnWtMSC9vyWq1TGcnbeqpgNjMpXCACNTzjLx2uhm2CDmpbKX5EK3BM",
  "key2": "5U8NB8mweUrsauq9DQhoT2BuFrngX1WkaRvS1od4J19ggSYKc2Yv9ZLzKc9PFcqC9qUeSbANaXtwJQ8uCJKjZysN",
  "key3": "4NB5aCWWxPqGPqmi8urMs19VMp4Wg6JRVnPXhV3y4rh1Hz3zVF8rb7vGxsBrgxdFeqnx1FW959Rhg82HWeG7xwi3",
  "key4": "5kmwRWf4iRZ6BPF33UfbWuyxnNAzXx2SeKXNpZM9U3xzS4gWBFjh9v3ZKk8MB23Edig6oeRDz7ToaEeqvBwsZ2o4",
  "key5": "3Md6HQJGmhjERfXYCVQ7o4GMoPBgiGBUkoCQWVfpWpk2nr3zg7PWfX5FvytVWQjFVB74nv11tgkFVoFrYNJJL2pm",
  "key6": "334JfiEvJhHAL6Pbpp2iRfLdq6PWEmHEyrVBRsM8jXmBa4tZ9gVJfXRG8fXqXuwGXPw11dnszVqZj2BJYB2hWi7g",
  "key7": "4Ca5HoLKVrrdtA47GjigRxWJFaZ2E7LGWqQ8XfDYbdJzaDvn7s6Rdi9xvGzysdfw9YNNutWPdJeVNnhyb522ZtzQ",
  "key8": "4g1atfVwqC9muLUpGKHC6FAhjL393jJ99m5GHjQAckmveqjeAY3BQ565CXZ5BSSh8oueHdGn1ZbYvJTwHy8BBF2G",
  "key9": "5QSnhaXgjU9JRZfsjKosbQEHvzsRbaNaWZCNchuSSykxMsSpXemFq84V17YcWoqChh5BdHP4kK9ytjWz2Crfg255",
  "key10": "3wRLroNfSF2jXVFYfZbsz5NuqH1a3A8dGVViE5b5GJjAHjb5oVi9NvGN1NCw9r5diVv3LXDDAjxVKUTFgmxZnqju",
  "key11": "58ewstWEGDtxweHnK3WYKQN5W9r6KztQKQr2rKVNcQMcQ4UoDRzzb4cASUfkXKtM4WMNrPnbtcSUnJXwE7WPXc6y",
  "key12": "5RtC6B4MQp8pSfg62PQTukYCFhvynvVZUUskcyW7YGQ7KEbMdL4emzo5BD9NkYiAfo3it6hmdiisWBkpyD34J3Z",
  "key13": "2DgaNQKbzcjtQ1PPPymAeoGvzXUnGrbrnEELpeDDMpP41nD7ksZ5gqU9thj2Tf5jCZVjvWWehNSsU6DMhdyRG7SP",
  "key14": "4Bt7ZUqdst6fYgiaW7246k6YRdwknnBAh1xK4QczGcFz2t7ZCwvChU5cGggNJs3MXTdhi3q4429ngYC774KRNMD1",
  "key15": "tPaBuiaMHXJZFsEsQTz6B1rcxz7K9K2Kj1B8i9uiDMpqEESu2bNk3SLy52AzR6Cyhd9W4VE2JEpNo5H6diAEBmw",
  "key16": "PR8iyEbaAq1zHmAkrPQTrLea7st1J273WgYaZdFtnoXJaoNan5YJzVeatXJbowuMQNejWyXmxxoqvTLdRAyuEPa",
  "key17": "2cVdk2eCAE8PadnFFZ7b7byou81vUDo26325nN7JREnbN3WfTWiiJtdmF5k975FauzM63aQVxPVqmCygFoAELu9R",
  "key18": "67P2JvRJL8LzubCazKF6vTuz2cnPHeNeb9qTSyz2rujepmzVkb3QTJy2kVk2fer8wNMdzWCHwtf2BfK2LkMY5hRy",
  "key19": "4EbU5TpYbpSebBEcongFKFiG6SKVV9ELnFd8TERBaRiGqNuh42pP5oBRpDf7QYx8wDz6xYGkXRr2ajq8ygQykyEB",
  "key20": "PaBhg9ccg97riY6b1L4uTPP3Xe7nrajxk7PE7rsU2oSehCz3nMPRELMnm9UZspXKgfJqehnF2bH2MdJF1h4PNEj",
  "key21": "2JqtNaHiy6jHdpvGdgAdG8fPAGHE5Lm8iFJLQbhG9ChpAkc9XdnVQrL2WqLuhDo7Zr26feGPmxbCZvToe26a1hAk",
  "key22": "4fCAGL2n2iPacBMCNrdCSTRd6SFoPN7USVLAwWkBsRCqwg8rdVcT8oViGGtjJmNoUqpxJkkaBoouXGEqL7fyCZYS",
  "key23": "59nmBEs3L1LC4epqcFCVGNR2N2db9MSFV5DBqtqiWYsfbV7dcA78eQLygE9RaLU3dFUwz4SdTjid6f8jWBTTB24R",
  "key24": "PKYoQ7z8Dn5JkcT5W6jEMZQaqv5NPvqdUBhtHScVYFkH9T24MRZyq951wvsdSQTH63rQmudpoTZ6Hb2DUd3joRg",
  "key25": "3fw24QMifXp1qd7JknZKmTMwdYfhWUWhB9k5Qzwt7u4WsBx3S5nRM7v7Bcf94UWZAPjcLPamR7QzVm1AtpAMPkSf",
  "key26": "2eav2hExozT32aEabnvjBM3NqCxKu8fY41mnBisb2W4gnccjp1HeBw7Lufa7YBBtGT5ZemViXWMEb8pb8XYVYdzq",
  "key27": "3wRnjFMTZtVpxZbyGkae5RibNNZ6trnKt1fbnwvxk9u8sPZgzmRfzGZYQcpz8VRhp1HHTxY466n1CFWi3DhydTEh"
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
