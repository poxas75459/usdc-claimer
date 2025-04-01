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
    "2a7PBCauGPr6FRQumjnPRFPRmxXb527hRcStB1uk1SDHhDvubaGnyTcVeYLj1x6Xp1uc423V9ypShdhDyFRAZgMs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "366iWUQ1udgmGuGUr596R9B332RfpCmgShQNL1gJ3sWiqHH4AHXpx69EDfezYTcXGgDNc4zaqmnT5EJGidgyTGtQ",
  "key1": "BnvCSY9fGV2BzzU5CUtzJA1KjFzdeqmK54bsnU8TDrMJQXfAktcDHd1MBxtoJyc8divQNxknKT7rkgqgicwJFCH",
  "key2": "63q2D2T75P2s4dBUrahGK8oBgEtiQ9w5XvK4VAFvMnN6f1B39fe8Vigd3QNRMJJwCJnkzDsunpTofherYqrPMnoc",
  "key3": "nzxfUARQu6GcaaipLoMGjaPNyEt4VkBjFjspQvpkvMrEyNFE4KWHQmqPH5883uzWSe2HXC7knaQqSReTgiVL6MD",
  "key4": "5KhDx7EkmTY2vWHEo1hjiqk7xLFbdaXrsP9rofgcfusezbuunXQTMjuJiJg1VMSwYEECwNZoMQJUPYs43K6GW63Z",
  "key5": "3VA9KJuW96DAGWvNsGMzYfYCDjDkqumXiG7eiBWYutPRuw3GRu4hn8sApbyXgdvHbp98FnqT7M9uVpj2bveyM5vp",
  "key6": "2JHii5YNW2rbc1ZHU9wFwVdgKYxbCkijicUiP6vJ7vK4PrXNLhjtbvH8qVBjxyN9AkPjDXiMDXrrkqRZ1eeLv8Mh",
  "key7": "438cUbqwNhGY8uPXdLptoTKt7dP9jXt7pgECTj6ocP4yqSLUk8g1QdieQ5NtfPSf8tA7dakAzZj2N4HeajhHwd9m",
  "key8": "YX8J33R8mWQcAwBuo3nNnLsJucMcCkYuYo7XXc5XPMcPE2mfKzvScizZEnKmhBbL78WwgUHu2BgQoLMTXVHXrDR",
  "key9": "57MhvtZmehwFrsg9GzA5J1WVpiBZzVyopSnXHpTDzYESiEZSDnH2HAZU4pGJ9p71SzLbtu2pZxGewKezVM8tJiZw",
  "key10": "4ERt8HpwHtcN7dMs6TUZKw6y28b7ZRgq72i7RbPHFq8WpWk7gsTHx4xQ5damWoP38yJNMKSCFtyULZ4pm2zQAnE2",
  "key11": "2kigTqNtYSofPKyU42AeeAEFpdm7T4G2mt3cxvvLpXdeK29iae8KDrHGfGxpxHSZqMZ75dJbbjDJEB3tPfYG14uk",
  "key12": "2jCdLGjdkEdvDU3tUCiSeuXMCHGBzsubMtnm9DS1CaghR4GxttMcN6YewFK3bKeWdnvCgA8LvwqCu4BLkBeiG88r",
  "key13": "4E9NsNLE3KGcpVgUhiFeEpq3xchtV5fovm9hBxQbSGLQtJ3aEb3Zv3TnEfFRUjdeQPzRNGGGf3e5DN4XQn2ykdG7",
  "key14": "2SQp28LyWJeeupjuYrGA1aWCp2NYyRHApLFhzmgbshC9LVfgtJof78n9QtRCj1zE8FUc9SrEkKuFspZMZZmNRPSw",
  "key15": "5dYpPH84Mph75F6uhmbnkavvgG43iWAGn5GhXykrGBFnvs6mQakbmBZpsVnqMELsFsXuEwQbbb3PUtRfcE6DsP3a",
  "key16": "4SmNkYFuo6sDi2LpNBWuwbXUTd19zEAjwvRRDKAVGqCYvGhedR88tdiP8Hp9iMXwHfAMbVJqjUmLcde7y4WuGZiL",
  "key17": "32QfHWN6dm1na82fqqQZQMS77mc1X4i8GBRQcVtFiR8kRkf1YWVGcx6Qb86q9FRfexLmQdTnNFTRjxCvfxV5h4Zs",
  "key18": "52zNjFUHtSe4u6F7RW9aaG6BCBBcPdqYcxovWxzRG4chKqKxNaMqzCf45V9WVLgg48eQQgZEKhahd2XQqt9S6sTS",
  "key19": "5Hqne2M3Fw98jFPXRYrEyEprXYgqrgMWWxc2fE1oko6EWVX5cFejUgnykVaohtajMKCaoZdWQUieYCbqrhdrYAq",
  "key20": "5wtPjUtQrba1gEC4YkUxoD1UQZQ646DUBTTiwaMKaiuQcUf3KQ632AcGg3QcVb1cPJL28J8BeqLGKssYpQbNonCJ",
  "key21": "5uG6hunP1AaGAtMrd3UW24x95DR6SzPf2LkHmiebimyvmtFn4pAbgUGoHtrA14zk3pK2bxNLZbhoXsECDAVE4rAd",
  "key22": "4ENq7PviK1Q69KjRiRJBAqggQEkW3gywVjL8CJcZwweB6RVZqNeMEhw69paGhwiorfZLugKGtmhmpCyxvi3JqqQ1",
  "key23": "4cMgeeJ6cs6JaUJFbGmTinCTNGMZ6FF4eZbeE9ECEb6Emu6XSPtVwEW6nHZjeoN9iA1o9scAYvG5cYNTG9jbR5aZ",
  "key24": "4niyRG6L1E2NjDTWFEJRhacFy1qJcp7avxgmS15wYD1eqADXU3GTwiCStpzmRghuJkfc7YPk7QycqEpAh2iBRiSh"
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
