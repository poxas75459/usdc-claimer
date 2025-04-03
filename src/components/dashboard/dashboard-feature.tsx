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
    "tcVCBTjZ5Swk8hR5NC4Mo9Q1Gr1skSHLpCxWM7UBcfUBTZ69Ff9Sy3HomoNa6erdACR87eUzzqWURu6gVdGvMNe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kQj2cXQQFCrrMvsBGMD4osgJewofWSfqbVTT1fPkAxxH1ErVy1kNNdRN2kqzMW2DEkvFXCGHFsm8jioR4RsmKZh",
  "key1": "3nMN6NwCydQ94DVP6PgmrHtFa4pgZ3ydpMLonadQaxsRpTxgqPtbQb5TJeL4TBT4GT3fRRD7yruw1ey26z57C11C",
  "key2": "4hxaCAomSa39yKmsRQPHKZRho7pQmay5EUBJngM9gotg3XD14hCQDsnQvGchghewFk5WRjmao22h36fZ3Z9ux1Bn",
  "key3": "2GtxQYJYPfVgQGcqK3kQucaX9kDbf2nnrX3xzrau4HXCL2h6c8uodmG4zDjdVVRqZ7sUcJ47bTLeurJvZJe8hPwg",
  "key4": "3V21GegqZkHFwEujxAsvqehTnDESHAw4Y8VyAPKmm561JMaKyArJWY2pcpASwX9do3hWe2R2j4L4kwG6adWeomvB",
  "key5": "23XyGnjemgLACUHQTwv3keitLGyu1NJ6q4ynUym5dXG9z9zj9RzVpCdr6jq6gQEa5jhuvXsKsNem1oRSAWaN8mCx",
  "key6": "3QEtiWef5A5kiGGYMTUKn5kxBQuij1s1wDg1gSexve647QCzGsVf7m5DX79kjBfDjF8ecKiYT3gBJy6wQBsfxnKb",
  "key7": "4iv1rFu2LYSFF1K1a3vn16KGGJnQQHBiLGDxojrbJnKTWWYBAWtcY45D7175bKv8zNyXuijTE2ch1FMhyUpqkkre",
  "key8": "4viRZFPAg6wt6tMnMycsxLnPxdBixjtGA7bNK9wfFySstREzDCjEqm4iNb1bXDLeuHeE4ncGJ3TsgUwHZFuyWabj",
  "key9": "4KGNDNjzsrTsXYMDu7BWyggLCDczBZ95j7fQAqyL7UpEJpEJAyVsuABYbT8vSkjReKjYxDent4adWrnwyF2WUJrB",
  "key10": "518g3aDa1TdxJ94PXd9Ci34KNAHKE6XG7mcdpwc1e4fwW7Rw6ekLUj6kWg7wH6z8oHESE5BmEtf6VFzEb5KSN52m",
  "key11": "m18DvNrdUfiYPCmC15TCgQBLgXXtwf9ogjsAeP3JSpKtWuDMQqCD4yczdjr8ws3mmTMpVp2r7ps6UcumAbaPXjp",
  "key12": "3NiciuwD6cySKe3TnC9prYgCERTVqN4CMnFySaG5jUkQqyaXeT3NMSSDofzvpeJXvkArr9SA7Sa9LDfx9vPehZMU",
  "key13": "3BkkmtNH3imorjKeuMqhZdFbmgffjDcMMrFLQUuGNzWtdKjtRG8XZUucQ49PyS1FbLoNoGcimSHB6T52zDMFeguh",
  "key14": "4kvfiWmhmAnE5A6h1hAWZcFbnMYRmkFh437qjzDq1bpin7SAS564d6hmTedHqDUjmo8X8zi9veHnYwKTsU2yGtfG",
  "key15": "mizR2Ktsh9Zx5UTmhu6MEfUuqLFpi5CqeW1S1N1KEKpdZUSU9ExMK1ppmJHez5snWjrcTKuU98HvY2hjFDXqd4W",
  "key16": "5oaa4rWQscsqVaN63eYDDXyuPeV9QSgLtDJsqwSbTc6Vk5SJYeKAM3AbNXZCcyHKZ17dHrghuZEZR4J3YCwLHANS",
  "key17": "4Z9WNGX7n4sYutTrUAeEzsZfgvkQdkwd3AfEUYwsBESo2uUrCddyXYZrqtydnGdMtzGfZPQ1yviuMy6zZPgepD1u",
  "key18": "42iUcJHQzULVCkrLn3oj6h5TQMZLNCbgojV6HRBeqwob41P5uhSAuLjxTGxdhYowWihdfRvXmwJfcwG4nqNjdW6F",
  "key19": "3kZsFHjt8N1TyQKTLV7a59TeYpd6HAv6x2L5ChR9MFA6EJCE88H6UJqtcFXE1iGZHAJWRJ1EoBwDb49KzPrngmWM",
  "key20": "2CWjY8jV6iLPcQRUBrpctx25CENJMA3qZZ2ByAoU74EUBujvnT3NdSgXJ8MJiR4mC7diWFxRWqWi4vMaxzx2by4E",
  "key21": "3EGxqq3qcJhTUtb657EWPo5sBHKAfMFrYcQZy9ShjYR2DveKAJ34NKy81158EnF6NdHjVZpck7EDX35yzc44him7",
  "key22": "2qvNJiaC477LKzD8fChGLS45msdFYtVtpzKtk58AQDa1ZwGQ2aoCW4PtVALmejhtL8Z6thuWiAHadvwwXR1aaJEm",
  "key23": "2Xg2MHhb2azmXZc3GAz8NWjbgXd45B4nmhpp5JZe98z7gXoQpDcVYpSvUvfKw2GMnVwwY5fVALs1PX1poVgx2SqC",
  "key24": "5BYMuHkxoP6GBcy4puE2wYpY3Haf48VPMgrBzeH6cdRPqknVLSYiXBpMzwoPxXiskkwGjaaqx5r41Jpq4Y2HMrUe",
  "key25": "36M2BLjuKSmYB85bxxF3kmvYb22ygu1nyPNszUA5zFsvpVhKVzoo8g4yHiCyeUvJFoMUAkp3wwF59jUHAEHD1aVo",
  "key26": "8Et5GKRkiaN94ivtb33aRVhFYsroArY1ziATrnWPkqWkoeFzfahfLidGjxGoALGXc2aCuL5brx3oi9SYZkaiHkH",
  "key27": "4PW2vtVoeUxyMGrwtbraY8EBHcwaPoJ8dPQs9izrbXpq5WPe7EtXdD5jD9hBabXUV5cMt78iFXK81S5y6hkXddbm",
  "key28": "5iZGJGdG5Z1MNYd1jKSn5aFVZd3UfbCEgdwL8hwe2fy6XoKJxeC7E4CarzauSMb5FSQgbQoinhw3vPkRoq7nFxz9"
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
