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
    "3HSWmUPvrJnjoBHmyvrLnesLtj4ShpwsM5cSN5cxCrZVoATRgr2QtYxN3xj5Ykp9UfFzHH3pPoYiD89pj9dZnkUE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fqdxTaMZj4chcSuMqEFcXyxQVyE7d1YBh4oX6WzeZSF6mNzjnevL8EW5hZ26zpSfEF6yGJsVrZjFxQELtzoRBrv",
  "key1": "BNwAe7f2EGkbDR9hy1YPjMwP55eYrZkAkVVaiivvBX8BLeH97FNzQDnvYhSzhfTDosPECDZ2Q3run8dmZ9V5i7m",
  "key2": "3pwwChW8rVWC49BJTY68V9SHZYWghM6UAuYwE8MFRN6i3Fp6C77feaBuN6J6gtc7FTbYMcnEMMyKUbhJFSYGqmFc",
  "key3": "4KDGpdEqDYVMZENHdaVP33yW34FUhjjNixjQiGRHFvFQmnJLJTskDUUcsSuyzQtTCM4orc5mSbithg3PqT75umUr",
  "key4": "37AFLbTkVj3QWXnkX6krLd7LL5jYnv3V21F2S4kjZde29i14BfLwU59UZiWTbmWfLWJ9bqNFUXVD9T95gu6dnghE",
  "key5": "2Ak2nYeeKJY2CjFWznErGRKz3Spo5fesDvfedh9oyMK4Gs62wUEi3XDd9ddVxJ6esC8yC7g51NSaHoecWqvBKbmU",
  "key6": "R43ENW6uEHu2DA1r3h4tvTeZRfszR95Cvcpdht253XkstgBBrKfKY2dYJSFCVRHhvYgqmGT3PWMRnqTF7z4M6Hk",
  "key7": "BEHSdUXipm89h6u3NWwmAvaiwwHZ7CQymM1p1cnNt1aHttqhjvoFfrJpzKjRyiczxDZREzqo68HY4kiSE1w89Rx",
  "key8": "574V1QHeWJEUKSJGK48g2kpThaeXCwoCJZHTtvVGEmANnYKi53g986UqqVV9MgXzu3mcWDxTvcN5xxrq4TstGM7U",
  "key9": "4fqgxuFuam7sYNUGegSc631P4oxbTvhbaDadSRLWFnUUvJcX9AUtJ5nQ2ZWu8VTxxBq6V2uaZAm9ugJ3i7mFTCRR",
  "key10": "2dC2jdt8UBkFakioBXaFxAUVD9Qn9aLnvK69dGi3YBD6hQgo7kd7NyCgPu828YPRFi8M577VMMKK9UqZzfQ1RFa",
  "key11": "UDdf2rKZeDwberzmfEBb45UzL771synoXCSEeBEjHRbeSBsgap6fJX4fHJMWeyiy9fq61a1hdvFpTiVn4d3zTvj",
  "key12": "SPFRkXFD4RmXfk5Yn4Bv7PxKycLzP8BCpPiB4vmj6bHgEcLXvYYkEx5VCACwWGuPKr2AN4ihyHfLdgHzKRfm2bN",
  "key13": "2BkGxxRJvArZzpwm7Qu97UUpgfjrKxYcNJo85DPswX6HyHCaXQNxa7tMz1VLSkkajdmx2G84wfvEQF4bSywHoQ78",
  "key14": "21b7Tt2fECm6Y7dL8UNthGLtCjaNr7C7mLfm7ud8gpv18Nqc4JGQJokNwQWmXVeq4NxHrLFYNDcRzWWBzAfwP3iW",
  "key15": "2S9mrX5aaYbicKUGztAFNuRuXbRkRrbpskrkYSQ5YX42wRU4wTeJ6XKVEur17eC4GBuzjSZbKJA2AjyimTjUJk86",
  "key16": "629HtHAevS9xtSr6J8aKCrjX2qwRPcuDfdeXpoSPQhCqax6pXpg6hWHAdLEcQyonXpWznYBQCH1ANQq13nttKriM",
  "key17": "3vYB7W4myGym4L26KJz4NEuyezJUQWRoDyjoVW6LaiyqDCwoojAVj9h9D6kBJQx4spQ9R6ipHBen32RgiEi2HAR5",
  "key18": "5bdQ77yDwtncWDTmvAjfkbUGvuXR8NA3M1TMkPaYgqdniMEA3hGpEYusaiL2FJFjcnXqzNkXTsbDH42VyZ7M7CdW",
  "key19": "5DnXGsuvcMc4MwD7Z3ApPiL5FNfpN4PTT9pXtA3N7PiKYbxq9M6nfggbRL7LNfor9GKSa3ems99k2TFGdwNVrgWC",
  "key20": "4ideT91vi9pTwMMrMHNAvhyhmChj2iGZe9DaTwnC64vUar6cduMGJ6xD3nygne3BMyfxQToTdt155ooqJd5J4WoM",
  "key21": "4iv9W3fqf8z7qnUehh5njkKEbtB6Gg6tK7uxCHGf5RqWm5oVTwBN897hrAhQsMwF5wXMqgMLedDYWDwSTsYiLj1T",
  "key22": "EXBhvN4jDZHLm2bwXEo8e1LUu1yB5AUcy48n7DF2tMHqoiGiz4SpcUBZErFdG24x7iCcR7sE5JNxAXCMa2Xfu9k",
  "key23": "3bGn2Smcia3ajTzrx9mxiVa8BiHEx9pzDLKFMiZDoyMUHGPvQBF8WtpGqX5CiGRP8nU4KB97Ym858muSyubPaAZV",
  "key24": "3sj8h6mGWyy8X2gYZiDx3PAtJ81xy2hFoREchLRiR7RgARfWPfUXWq11TzeADL8TrCe9tjGErB8JSQp34MC8Mdfz",
  "key25": "3vDuvxBWjj5w89T6ybNRk1zRt6xMMbpNt7DNDqqyYT474BaugpkXzVtCiQ89P2YtYSve9CHZzqxUAn1A6HwbTtbi",
  "key26": "3Gq8E1LYTMo2X8PG6bGwmxiKtBV9tBPA28zH39ie9L1tqT9syuB3sCFiy8BM2tjHAtjotp55Rfrme8BqJV3YHUYt",
  "key27": "5FNWJkgvkkXcGN4jPLziQb8SNPyXV7YR8CWZ6kgK6zraRC6zow9NjoNeJzsUiQ2WiVMPaxfxui1VGbRPMrQdUhAK",
  "key28": "45FG3g7SwmuBzDssHnXF7kwdUaiqV3Jb17rubmHYxUYWp7TBeysy55EBeR5w6rjGSyrdU6n162d24qysRgqd6LMZ",
  "key29": "BnvHd6M3hv1nn5c3vAR7ikAcLycibnsz9kP5tftLfV9jaS6Doy75B85KPKHb2qrkvzWCyHGHecAfaw7Rxq5uKei"
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
