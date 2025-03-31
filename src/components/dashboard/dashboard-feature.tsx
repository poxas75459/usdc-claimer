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
    "4nU996vdjfg2aVfEQGtgmrhPrANWCbnv9WWe2V5Z68VyWDVTm3DvK25WUqykJ7mLNsv83kQXjXM5MKpxaFdBw3si"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Lk1yaPL7pZingnCzKGvW6jUesDwj2232R8C3FhZHTpsfm77PLH8NDtqBLEg4i7W6tGGFMe5L9cDghsDBdJLPgUc",
  "key1": "2GceaoBTBQXSdMB5ydVCorY6m2MnqpqFTJFJPXEgYvvGJHFDWtVHvoRxHfxjduY3d25XFpMZfCKiRV2xtvCnC7gr",
  "key2": "2goyQb8WoixLzxM3vhK5ySdnJxZ4aiwhZ29FfjQf6zFamDEMQfm3XmL17M2w65hugq8Ctvn8Wyv84nvV759y9yM6",
  "key3": "25ypV6rkVj9jgHcrwEpJEcRxNSjGN4NJymrZ9F97XgYSuZ46Hv8cQiJfffHPJXTWsFANdrCtbW9kvSqdBib2Eba5",
  "key4": "2DPi5QfrKykGnmwNz72TivQ9MkdPV4rQeyttaTYiS2b2nw1GJEXfXjdTyLof552Ux8Ysi4bxszhkEFgxXpzYyEEQ",
  "key5": "25k8UkZZVtHhy35fBVfB7RXH6qQRYwi232SiTA1H42qNZ3W5iaGxgLNeamjPqMebbqT1Mxv5eoV6FotYMpfJLoAT",
  "key6": "3B1QHmpjSLx4wvnvosTSPmwRW73UaCYrNhvTesi3sr3HoaJMZpfgF595wC4mN5toirjsYrKrDqUS7pywKipTuL9d",
  "key7": "z39G883NG6onjfvyLDwuuomEvwpQxmeMCk1yktyTjNjE5H4HLBdTKjU2tzwsDGCNAH6HnuJPBMQpK4Epv3yzoRq",
  "key8": "2AJsyeg3oBJY6PGmycLoApiZgc4EaRdv1bkiznXvqCo7ewAvZkTFgsaeJwDBStmc5jcWw4iQuEDBoM9crVBPxdVD",
  "key9": "47pwZTuzkpesv7whXtTarnnyTiugBGAZNiVs1S3CqZq7V73sHBYaCyDWAwSQaPgRJGWbRN48Q3fHoGizRsxnwbuW",
  "key10": "54rg6nwb5yEMS2dxjfMYSwQTM8jCx5f513Voig2E2uw2RFoFACQ3oRoWa4Xyb897js6kcefp2BKAb2ysyueWJwMi",
  "key11": "5Zp72972FBbppe4xKEnoEXzdHohMZN1fMgszvvnAoNXsfUn3AEx8aV8Bm6cGTGPmdQAuVvLZy6pngwMUYnzBTgAA",
  "key12": "3injqY3dUYDEwYCeS6Dj5WhE5kkiNzBG87sTDdRZ8hKXzUAq52bfX6XGsSasgnphEdoDF9XJJXN7CsfdTQqfyFJa",
  "key13": "4Yb8xrSfspGQjKzTw2FmxN86R2Pj2sU9LhDQ1UvKbCymNz3B1ZXgLsfSSZ25oy5oGw4sPUKev1pTgfM213Phbkcw",
  "key14": "3QPQuHitATvBXSgWATupXci7pt7ThyohDXroBgQntkkpanGGVvBWqB5WK8Wgg4gSriNKAN65sU7xaLxFVmMt8aQb",
  "key15": "4teeywoV2KYZ5xgfuwS6SYgwmNhGGoE78XTGqqvN8PmEgkGtWmuScDueBojruq7Ca87bXS8p1nM3YhTah9Ba1MC9",
  "key16": "5UMDSZmPtx6Wg6SardYzpMmqrdUZw1tc3q3nMuR46XjoBpwhwyaAKfg84ov4GEhZLfXbYfYErZxUNqnUxQt9DT45",
  "key17": "3HkZvwvjWZxvWr4doXawnR6gLhVenfjNyg4AGCP9GicK1eYmM98Wb1zygVFrgNGapai7yEEXitAN1aFpKUkA5K7w",
  "key18": "516GfbQBrZxXUxtgtt3yUoK2efX6Gj9mX6VPCpMkCLNtfYRxajjAeFCSxFyQxTZ9z4XsCDpyHSXd1HBmy7E1A9d9",
  "key19": "8B3j5R6rQRArHGc55oQ9MFnkyLRwmSJYZbeUAQfCczJrvDBhXNDfDtN27ZEuqpQ5eYWb7Y8KbbU2gtnh57QWW9W",
  "key20": "5PxiH2XcVL6DH45XHeNCScEAKX9NqpuLWfuRNyFcJbgE89KgM4ipYcjzGJT4pvVtz3tHnPtEXyapmzn3a7G2wMMR",
  "key21": "5Cnvr54DBtrpWybp6pttvBP9MaC1CfDY7KSmB9ALYAn8x65HRuQSus7Bw8SMQ7QWiMQcQMT8dYzNggZ7AetCFb9w",
  "key22": "2TKF7hnKbWTPcLR4K2tXmFhLS7XkrxcaA9zJJv2qqAaDBDoC8nfCmj5dj3Yg9bXt8YwMhnq4KUYcrZ9QJuCaBnYd",
  "key23": "2ak7Amqc24yvA8yJhTxttmTkgoUsbTCgJ5fzw3wNQjR8feQM2Gkt8MuCqqDgLcNhNSJ3qekrQ6biESgeYFNxXgSE",
  "key24": "4frAtBZrQhi1MyRvPo42ab13E7qxULQcp3Dm5pvXx3n3QAmAjWJj3TkYHRqdR26QURmSbV6SvWk4igskH9JBVkuc",
  "key25": "53rp2SBMTvuWBBA5txKLUR2Xwjbd68ivkPeue1xQBENXVKFTagBpEaw74qCLKSLu7VwNo4j9gk74n7MjkKcP4Umq",
  "key26": "2GuztrJ8pqZeSegAZzYK1UWsvsW4U341TXgmAhvbhAXEJoXZ54v6D94iTFwPAfkkEmdKzzEf7FL5QSAYbBskJAne",
  "key27": "2SesZ7qqnahTXFL2a886MnWCHn2dBWCNSppfmMv56EA1RhrYMmVwhokKPv7DKZ7ND5BDLcbiYtmdvCHEtt8nYMJm",
  "key28": "51iA3TMug4DSHYLUVHoZpPLeu4prJMyn3hPGFqcMP6vZpW549U6pfafFFjyxjdMCVNcdaH7FrFenBcnqqga9GSkm",
  "key29": "rT4UZrFfWBXbs3LeMRBPD4keSXDpyexpE91o3P3P6WUasjP21oT8kDh8L2xj6b3k4niv3WfxAKZaMcfhEYcDxoz",
  "key30": "QcKnEVQLpzzqSuohutR1LH34dn6Pggfn8SA15bSKGcStVBYabpp27LTuRwRMd5MHNQegFd1crTyMkkQUtZY7EC5",
  "key31": "5PLfuha1Hp3vZ542juRX3a3PLg3fwyepKLTVUbZDqtwPUoHb8fAcRrQgv87My3BCaPZUVX7xQ7sSFoe8pY6uL66N",
  "key32": "3BYdPPNBt6iJEpvrtZjFFe3QTUwBFi2KWAkkYPdkMChxqsaUXfVC8VhHde1iw6vUHcWk6r4SiBpLue9Cabr5oKKe",
  "key33": "3ifDMRyEZ8vH73HSXMxBxoa85FXTGrPACFBc5KCRwkR3nszBbKeZTE3t6S9VQabnKN3zRaZJUuMaxcG7BAp5dDrN",
  "key34": "5h7odrcYUY9RuR4LmLg77uASkyHfLHxsNd4BbiQxb3qMEwgsGxbmR45eSCJBde4LAzK8h1dcx6yhZi94h6KVcU8e",
  "key35": "3FJvt69UmVKFUHySP2NsA3A6GhznyYSUg4xUHsTkFBVdmTDT1HK3dgAP724XRHhKmZCvwiVtNmmbkAmZY9BBoNSF",
  "key36": "23Y8cMK1ZCPGNFYFxgb47s5asqYw2W6VNJMNTPiqmR5qRQmk7auZRj2fzicKeMikscoafcttNb2TQaVhFG7R4uD1",
  "key37": "M7gfrWa2go3bGzpbdE9ev4z6sNAAzVRmgT8pmxPX2SqRNPXLzzcEBU8RSYhm6fsxizzcxfSqXTDWT6Zy9hned2o"
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
