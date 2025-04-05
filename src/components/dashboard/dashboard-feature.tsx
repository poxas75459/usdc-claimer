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
    "24vozT4GMtzYfRkW4agMsozAKhsyWZU9VWtcPte2JmhDn8LcTQ1xQe2VKWRh7YMnkYb3xQjiE3mJ6mgbLci6b4Lr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U8MXQmKVF5bnzpC3n4GspBMMob5JxAvQQLYFftuDfwysimBQLSqXG5xQcBpucytVB6wJBNVYLYmK3eiJcdCRV7h",
  "key1": "4vk6ezh2uwNF9G2FgSW8siFfBqyH25DiF9Yr5KqCumwfMT9zgLYXaeDFM4QahMCuepz1qjRSyVawbd45iWGb5LEU",
  "key2": "5FBGgfGG6XhrAfJQihfoLk5GgEcDXuFdzfG3X9nZNTwrezQWYpoApHSHJ84LDMv43byJf9ig9vuTfCJpyUxhvsPx",
  "key3": "E7rYJbytwU35AqewTduCr5ECBS9T2GD4VNzxwLxkL4yhETMd1QSLNueKo9DXgTf4Wqhpxn3BYX5GRzo2DcGYicU",
  "key4": "438q2P5ay49HbQth1sTfBghB3JACkLH8g6JLpXV615oByJvQgqQuQdsBLajxszKFc2faZwzo3tYNdbzpTy9RmVNZ",
  "key5": "3WMCps5dtDyo9D4gn3BMVTYKAs85Yh3cMTDYYwEm4CEqyTueM9TMhAgjSG4HQp8NLjRQmDYCwHvRRQzXdssxaD27",
  "key6": "5JFHv9XMjBRVhh9skJtGgrXfRZKyUg4VWvzDi36HQQHq2ANTX5Mj25JMuvjnUmCK78B6Wr6E5RKHQoghcXdpXxJD",
  "key7": "1gw29dNzucpiBWxXeizyK9ymTVoq95H2E653oseDX5rDEGwJbRvwPtvrWqiuokAR5TTHE5QjgKfvnWpk6yQYygF",
  "key8": "5tyzS9qK1JCwcARahZZhGv9xXmS2GFbV67oow7bkvmfQrfroUvMs1X2ZLSZwHW71SgxyMwgfnhdoHmvwgCErF2Uw",
  "key9": "2KBdcgf6LZkZuQ3X8Y1gh6eYKG9ADHjKpUBobVdTDFw53vLtTMXEVkYMMvXZWhiPiKg7ZbJ2wKsrecE6UZPYYRqK",
  "key10": "W7a9E2NW3suLrKa3AjeNR5S2rtgQvqk35MQc7mro4r97AMK2Wbq5PQfUyzYshGBR2MjcqVMEK1DdzSCiuvjyUfn",
  "key11": "4cuMhbeXmVLPxe93fRiWCKZVkGBaTcpoXCcc9tVSNj2rj4rSwQzUE2fDn2hfpJzGtoQuD6RmiDGP3KvFBvZAAFjQ",
  "key12": "g3METr1GmiajzNhvuAmWT78pEVWDwmZZohzBAQrMNZqR6QmApmZ5XY5SvpU4ccSmXHS4ayq7fNb7FB1nzcJdbUU",
  "key13": "uWMdXtoEXUfyam7r99qGm5ZuEZwZ4WWgjynYQ14kyYCYhuuGVQR3zSDbcXgkd7UMzVtiiRcLwJdLHrytFFqb3s3",
  "key14": "37fTXswh7eTUfbePJrWjwg19P947BdMz9atqHfkHWczvFBJygvoZ2rT5sXyNbKEF6SmsugS9S2vGvfs3RhyLTX5Y",
  "key15": "63NUTZbnYcyDaafxPuWoUjUz81S2Qifmtw2CX6E6N5cFzVXZh2KDSoJM4Yi5HhUwCyU3VG4mzrMKy9cfMrt2axnr",
  "key16": "48hPjpJRp8FGjjN3LYTahyAbVQB3CaMkqRzUcCdVhy582fr7GMLfCPLz8CuyYWkwk3cwwPnvhkk1Mztr212MjXk1",
  "key17": "2FBXfbsrfkgmPj1gAAnT4yz3nSBX6CZB4haf3DzAGsZ1vVvMeQHWSZwFX3zgv423rbFFWRA64CpeCWkdN1CSGhCP",
  "key18": "58ytw7Vv5y7SF7NeztHcsuCDx7GfGhMFwXr6Jjo3S2nMKp7756jUdgJDdRRu1sKX99mtKcykN5eJp8Z61BvCyHPD",
  "key19": "6CCNMGNXw7mziKU8HajxbgzRzscffz2CcDTFouJdBdNY5fhEjo2qpxjnEyayBtxBfmzKFyeHy1pxwsT975DiNrd",
  "key20": "rW7N1C6ifwVy24Xs5e1osNwGVqiACUkzzQxcHL9WzUrbLVZojonQwiWLEfp2byCweb3c9Xb4kSAuCwYuRxikuvs",
  "key21": "2einEC9c28pkraieoBWYJV6nJemSM2R7BG94LNWeV27fwxGsGjEQP1tZsVmY4uNXjCqnkgvBrBFTCy4GcHPeEien",
  "key22": "HnFgHoqdSUva7aYMnMShSEQhwtpU2sd3bjPi5butRXDQ5f9otC7akBFVG5YCgxfRqABWtY9kWGDRUhMeSJjnx57",
  "key23": "5rNudxWNe2o4CYQSnQmqC4BTsAUK9h8cGauQVsga4HhuBmp4BRZ6LYddBotaViSt44bxyfjiHZtQdsGggft31Jmd",
  "key24": "5LHNqKwGu4YnCUFM7fHkEEYcwBnGa2VaRiRJub7B5WecbmwEQb2FyJD4tDk8mfSMn4KNFrk2GNFWqNLd7VdQU8RN",
  "key25": "4U1rSYw4DcHzJdF7PgoWH3r9QM2oHfajnZabGE5jhaU9qQySR5BZYQAjaTajDwMLNucZ1MrhH7XgK8uKPM9xkrDF",
  "key26": "5HxzHTMnUwAjrVVeUDQDrrf7UNvfZCzBvsfG1M73BpV3UsYi5MTWMANBDijx9ZxF5hBLUgZitU8VNLMn9uhMBRtG"
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
