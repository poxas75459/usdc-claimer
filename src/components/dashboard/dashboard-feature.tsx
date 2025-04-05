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
    "HWerFVtvcqhfjxrKtdj5m3wAt5o6Dn3DHmR3pmRjaM67FNLyKJ5hSh9UzjCZK1gQBdu1nU5B2WwDULhKSLuMZNQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "45QuwHCJDAzmTY2VV7US6Z33jiKtvuMcmYVqDjK26pP8P9BiMWo9sTqmABxzkF88RQpbjshbrdqu2E8DjehUY8Mc",
  "key1": "H58WB2g7GSpVYFWkGA13oFtPCzk6odFRme7yV7iUQQZRCjP9jcvDDAH4okqmSZKd7bmvgRsPcvNoGg8KHMnxSLV",
  "key2": "SyxaF4vwP1SB3GX5NQUVRJ1oQ3dRjqRBAYbX3evpXVmrCC6UP5b2d9HiT4ZRf9Te4m5fLVK95ZY5n7xQSghjzZB",
  "key3": "5wC5WdoFoMZQKortmEkDqPJx8igNZVH9gmMWZrxuwVWg61EbVS2LuBkPva5A3SCcDdhjbhMBpdrPbotXXYSyP95U",
  "key4": "4YiXaJwVuDUkeAtA8LzpwRWPJ5Uz8Yyak5vH7YyGxs2okTq5oEgmUtSZcvfaHjsHR5QHjztV6cwBy5pSXmDpMUPd",
  "key5": "3ohAdAcDpTFQbV9medKTjYrLZktZjW4NBN6F3DndNLRz7iAgHQiqdVZS3bSB6G7fYHHccxuFF7S4dXgJXaocAaB5",
  "key6": "2XWi5LR8AzJQL9P83gp4tA8TAWGLf9uePXzjnG92ccp5utcwRMZi1qAisebsxFyHpsSZtL33jsQiEBWm3MwXgrHa",
  "key7": "2xGvB6RaWfZJfzTQJUSzjgYFdco56q6Gaih3B444WenNnucdriiMJjftyniTAZHPhkBWGL219iMbJsdkFtiupLYX",
  "key8": "56kQzX9e3GnwHsCYyhKDKu2NYHfRxdkGL39xrLjz6Gp4CiBDqMjBT9KwKmSkoxi9VGPcjQZF2H1hrYjKBLS3JiVS",
  "key9": "3GyAH5Q9PA618gXTkf34gQA2KijX3FmonyXLMNZB9grcoM4Q5QBpznVZpFybZpiAYpUcADyV6PVmq5ozxcfFEVne",
  "key10": "3j9bHwU3RetCgMGqMXHjBsCCL9wjj94HmrqZbcCWvSFrUQe2mxbeQt9Sq13Px9nC7b8ZWBNhUoCNpiuTw9NtyYKw",
  "key11": "5KV5qVhDNDXHZsUYqb47XFNZGJo4JfxoNeCEpQT7Ze3PQN29AgvNPmV92KD8g7TyoLTDZyUhasdyhhESwsaukk8g",
  "key12": "2Rj5tNQe8GFYchsehb5rxznn4hTR9ehzyw7h6sBM3NS1EZy2irizuCCX7z1UTwtDKgNNWriuxmD5YQP6zo9mi3JU",
  "key13": "45q1F2AwNKthCoBhbc2iSPcLeMmXL4TjtdqGHquNovKkddr8cAtwYuzR4hTGX1aBQSE8zJ7pQiXi4U3bsEzb1o3u",
  "key14": "2eMCdywhEWhZEc1ChvR69FM7L34xuttvJdbW9J3EZPHfNNMDQwLcKY5oFYQxp3cyjCiGZp2tPy3NfV6xQtV4mNJs",
  "key15": "3qsfi9vMLZYCdGASiDKC4KNbHPYYzegc94GHC9LNxaRXtqT38tJgNUW3tazczWMQa6gmQccjL48V3DgDzcCsCjZ2",
  "key16": "5tJBNJQDd2FWA1CvmRX6T5H9vHaaVLBoKvRNsyLnGbB9vz7u54fihZTUAeKPvAbK6SqZop6TzVkLYVLa2YBKhGza",
  "key17": "cBDHEjZ5de1tfCoEwVryfBtmVTjtLmq53k41xqBLzf69vs47esXV3yk1NicUE392cYnQs2sPZS7syBH6gGaDkkc",
  "key18": "6592n1XHMhTN7ofa64p5BCdu3Usb6ky85H8Vb4GFv1dC2ao2tdqdN3vE5Z1roEqm93CGAoWvn5dvp4VUrgigy5qw",
  "key19": "38ZbvSTy1ofHJgehTdCyGQa4yZnx8JshJPz32Qat4iosHLoLnuSriB973ECxTwqAdFfm3aeg1WTkxUohUy9iuBpF",
  "key20": "BN9tozRME8NeLCdSXbvNaX8V6niz2kyzLH9aU2XXiy5GqHmwGmUnTafXbKoA9qhTrhDGXdHerktmYrwiurKBFM5",
  "key21": "4eEfcCSj3XV2c4DXC7q8kqBtdBdcTN76w9TNcu1dwHbuh5CpakSuz13CTrTgEg6HQas5kukBbBLxupUztQf6AT6J",
  "key22": "3iCwbH26ahfZZagdm6uRo9b5R3i5Gydhhmcsmph2MhdEDzkW4Pvdq1iRftKQA5e1QVwujLyYPotZGARHD2keS1XA",
  "key23": "gr6HGR51q8HrUvhCHFZ5XatfWsotwza2ALtRiFGsh85BDZgB3MUbmDG2wnYukQur6v5ksUszvxL2p7yCnkRJBYv",
  "key24": "49XEEthVD8qpgpkrMfY927ucRxWeX1wm2H6MoJt9xwf1wpkV5y2cvgMBiMLCRx2MTXjK3mYS4KFDtXDtN5Viu3i6",
  "key25": "5y9Gz92h2YwgHBms1kDfxPGEgDNKVs2o7YK8GUHFUjDzNKXF6r2ZtVSgKWPceGEkswkn5w4E21nXrGffHYBexwHt"
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
