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
    "ECDnnPSSHhUc4upmh42wEWnjKCXJXeQMwXXJX75PQnnC5JiKdZ7LG4nHFhfEnUvoktvBb7h3CwkAnYUU1mi3GVs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "39mxSKBTCVRpzp58xzucjpSCDDGs5EjsqJWvWo9U5R8osK1ovTtZjE661xYc1eGvNAzm7CX1cZKmJ1aJg5KBdX6j",
  "key1": "59H99QCSQkpgpLCxeMgFkZsdhXqjeLh39XM6UZva4GQXSBWJWp4fDZAdNC2CATEmXDn6EgYaF3BXeuF8SXGAmcVE",
  "key2": "8kC85g7xSUDZhXpxUwqmBFCsDEofqDmgL6GyM88MYkYiFquwMJyKYX9ueZNSNGn574CJCG9c7z2kigkvsibyDAs",
  "key3": "2dK7ug6rBLMrrxT8VHKNuDh8Zc3rWvoB4SzXrS69vzf3St8qzfE44PCu6kwcZKTxJm7q5iBLHXfme2tVzBMZmpn2",
  "key4": "39RKLjfjkkAoC9VdaspbY5Rz1azoVwnr158qZYNsJ2isEG9GiHfgTbGaVMvs63jFWDhShhDtkcnpdFTrs1nXoooz",
  "key5": "3dACE4sC1qAieeH2Sf6cNPNzQYvwFAifVyKxsUhL4XbZLrLVw3uqu3CX1orgHEpTB2FchkWKUyxpareM8BshCj9T",
  "key6": "2xFwEKuC2YUteMCUqZ3AmvKYBXHaLy2mgFEKB1vwGyQ6b2dFvBD7KeSmM2yd36nrAuiy97H3StBTtKka9HjVmj89",
  "key7": "5QdDQ4JtqqX7tDDYVg2RhTJYRGfmqMDGg1u9hQhUrkfiSKvBVJb4mJ9wPjwHkDYzawE1Ft6BTLou86U1xxBGycTb",
  "key8": "4xSnJahJHVvoZDjr3SBQTJbkksNvAXQTPBs3VkmABFeSCLzPvR22sTMFdUzANfwiC8T4qJeEoSCS1qLLG2mXqgfy",
  "key9": "3ut8wdAGZ9dbJpUGEuACgcrY54xTaGSDc1HEMzY1VdiUDrrJJmA4XPEBaFdH23bvSwSpWyEFt3ZW8k5Vfv8peizG",
  "key10": "4eSrivzDWpfsBC8qYvhYg8dxECiKaGcFiEPFkZGW9cxooevnf9RCU2CH48kkiYvqyEUuk2i57JkUrE6XFEPHhuex",
  "key11": "Re1B6PU4jyY8uXSQu612c7mPgxgn99KBZaL9M7ZH3m3RSVPPQi77kLDTBVpkVZvQ6iiTZj6dDhRXPFpjT24QhZy",
  "key12": "Dy9HHowRzkMRu8ZZh5TSRrFkQyVk67MzSZDxbrd8iiyhxA7iP3W1W6zvCjBZ1ydxQb1anUEjC31qGXfN4tRo4en",
  "key13": "32akq44of7n8mfKY2NUD6nvPa7k1WtrjxePavmRCaXtKxnLMYZ9yQJEgB91hk3jhoJxB7UomPrgHJfcUPsYdHpX7",
  "key14": "4TyrLujRUgR1Mch8L5o7XHrDJaMt1e5VwiZ73u5PZ16YAXAhJrbbvWhNaz4JSSDCtcEVRMknbFbFAJecqTCotkuM",
  "key15": "4aL7FKkfSoRTAerfaeA1ey4eu8uiTR3dy2AwnsyzXLfTBsdASyShRtkhqtoWBcWdXFJEnyMrb5BvEPVeyx12XEHN",
  "key16": "2ctm43n3xa8CLptTBGonW2Qv3ESrxQsMbrjWYtv1EZMqKQPGceKNahfpEyzwUvumhLGCkzMiEfkhDcsfdcnbAYCD",
  "key17": "5gxKQJC8x6Y2zpXbTmiGTg3ehYGTCjFkDDHdnDZMcxzPct7kcZzDB535UuwcqpAUKCsDXUV5gSgnwVWd4uzGkxJC",
  "key18": "zz7D6BXfUjQ14vEAa1JsKknHTv9bSS64tfPL4dLYmpeLi5jb5gDQHGDuU5EEZazS7vmFJQ55KtCphAvCPi12zUT",
  "key19": "43hJ6oMkh9bxUqWFC5V7RqBV64mUBcaFea5ca1ndjTUkDyBV7uZmwFR2fAFEGnbmfFL6NnNrWU6QskUnovDNoqC9",
  "key20": "2NsJkjbvGxbgNEHsMHR9g62jgfAYaaxgLBUAVEr8UDFfatbn8ku1YRaHrEF1wCrfc7FRHLwU238AYUqSV2CnZFEB",
  "key21": "39rSAXBS9gmaKZPbGh7BD1nqzUswUDRC8qwuREBbpbX1ZycuzsKGSeTqsz7fGYEB84rq1Gjageh9XRreAfLWMaYy",
  "key22": "5wbhF2CxLDSjUFdvVuB2wgMgfU18twMVc95Z7zouW8XWrnQbKsHjvQAMxggZmbAceRhvVA4xLVvP98G1HXf5QkMC",
  "key23": "3h3rZdnFWrcLa6SJQ9WjFStVfmMaY4cpatYr918dP1UMigpectZvRUirwh3o7nCoRSPgX9R3oxGgdttpkprrCjhw",
  "key24": "3gxargtqcehzGbDQSbuDX4v2jmFKmkJbi94WXJov86LFFzNu5zJdVV6Pgo6wGM5wJAg7u7SrHps4KHnTbswaxaUT",
  "key25": "5QQwLde5MiXZLJ5awpdKFP3mXF5P65VnFPRRwVwR94bwef3Bj9sv5bGnNbU7jxuSywHrSJmbsG96CGzuEqvp8hJW",
  "key26": "2wop12hof6idnLUjJNhCffBgmWBLwnxoePjcekEzYxKppehf1YohgFYsVcw41jrhfsSZFcfCJKKXsGou6Phie7f4",
  "key27": "39LfTxBDm5zGXhCcSRBFWacWY3ju5CTX1cAuUntq1yNtNFSFJKibU54c1wbxhKA9jSn3ZxJarDbPYc9Qttsej2HG",
  "key28": "3VrzQ8vKvADcmi8FCYaVX9uooEKS9MgtEFwq4QzQWTD7zcyE2ZmErPBGWD19YufLwprMNQhHCuwTE88YubCMF4Bm",
  "key29": "2G2qTNGdQHcF8thPS8E2dj1qjLRJjnEHQVw7KnufS4o8ZRVBzzKrqi4cUcEYnaQK332k9ZgAMQhisToX3uwGAvgo",
  "key30": "2GW6ARgAj155uPMh1bpeWKw8kzjcLBjd7KhGzEy57sdVfGCWzQKeQDYfP3DmPfG693e6vzGEELKF78cgrChU8x24",
  "key31": "2bXHihQe8VR4DsRhBWbBVRTtS7Bcrw2udrUJKtxuzxwi53Ybafkmh96GNbdh5EoG4e9oB1yLy9FBWh6nQkn9mcPB",
  "key32": "3S1XBLXYz5KpWGmWELtj7dbWB1a2DB55NgMh3uqF8bbeaA1T35EngrAZDLM9LAy5gsomz2ndYYXJWZSmyeDtbEoD",
  "key33": "3ZSAT5pgMGvxEh8zbjYURnQWXzr2DuK6FNedd6Y1YtMVeWehWdvLwwKygCAnHtPwRwnLhcRb9VGTLot1uHVaZCUw",
  "key34": "5yzZwaA2fiSd2ZzpCZrY4vLZixxC1nPKQdxnikVKHZHsUHZgLsGwRXw7ZJ1MzMYXTH7kHrc3XBDTdW747cuAr5gB"
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
