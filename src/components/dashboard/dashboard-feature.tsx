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
    "vt8dqRy2XkGfzarnqbcTWNtz6uNcrb1nD8QGw2AGU7C4c2ycnTSkAHFEcPobPGih4aBB53aZ1fY7WmgK55C7g9u"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zyt6KBBXt16X3Db6QbVbyrDx2pDi8WH7PAgf4ZbgWfQcZ8bd2XCv9artzPiFeZKWD3cgR9TarQkspPf9Rxtz6iW",
  "key1": "dKETEair3YCfbNUkTPpvTMKsgLydCFxyXj2gpEbuKvaNeXfevLWeL9SdB9ZoMzmbz75BoLFGeKdyDKacivhWCVd",
  "key2": "f4QAEZbXmRbjYEVFmjWCXUdkz3dUVjkC4bM7MdqmYYX3K8jgECUWZGDVh2awbW1AyCBfPpGV5dpdsa5mTFHaUM9",
  "key3": "5L7Td9sn93p9TDak5ZKQpH8dsJMSY6PkyLoYUXJsvpVk3qQF4MUkf6J9qrzgCAStKSFSG3gtq5qXqfCqdfa7hGDc",
  "key4": "2B3X6aztHZCXAPiUTaf7vD3iD74tFsiFPaf7Stto4zdZFkqJRMHZNLtGgyRLipVbserwNYFSTPMLD9XD2cDvqrSD",
  "key5": "5HwRA8GMCMesvGagKZw6jYnhPhv7zGVutjW9N1Bz6AnjVKWeKopHkrdigvsCDESSFuAPLQYQRUGTBJNbRbNGyxJR",
  "key6": "5v2NLbdrP3XeTYYNaoy7m8VvkyUDYANMoQsq7om8pgSkTMyFHpwmN8CKn56TjbybJbQGkntQKjG5SDNN2wcVnCCM",
  "key7": "4dUBvDm8QKTnJcTiCoCb1mLaxvdFfVVVpogEfJWaynuASEjn4N4jhFKN3BAVzZbjRKw8M8znm3zWdv8zKdUvtZ71",
  "key8": "37uatbi1mf3JzQ4dXipTm8cjgWxQWv3Kt1tVVcAZj1qjsBgh8UBydGpQRfUy2bYWTP3jpWvcJ1A2j7sHeWtByKA4",
  "key9": "t82G3ZtPgDRrM7eaZhFAxd3bguC1H7a3F7VjR5TxHiCLfrBe7haSXf6k6RYzSiqunTQpqBTQxUPXigrwKWSwT3t",
  "key10": "43tCy1WXr1jub8Sg7xvAZXJawnawoBAmhddd28XGWhmB83anFCS5NcuAYKafENZvwiUS3oYE3tvc3Xdec6Hgm1aw",
  "key11": "66qp5yfbCoeMs92R99FbZNYQsvJnc56dUjPKQGFhorvuuXJUKM7Pom9q4yXnJj1TBPV5iT3PqNvc9ofEXvxkcZ2U",
  "key12": "23mUd22B7BuG2W52krRvgw8Zds3nJPzLsQjC68DFrd3sahTPpsmGo1yuSR9sBbRZfZd5L4DcczamdhL95pAcx5n7",
  "key13": "5jzf9tG9DoiuAqsADyLgd3pJktKiN1mX2jfyb6vfWYFpjmHDsEfDUKCScHpxHtLjkmCjq8RRHqyiQZSbVPfD5Kwy",
  "key14": "MBkY6vrZEhusBb93GMUnwwsfFwaQGAcAR1m1KDdyx6fuvbJEBsmfjwT5vR3zrKovH7D3AJdTPYHbwNchHS9gSAp",
  "key15": "3Bd5aqnWhKf4e1rzA1Lzz8t1MLCYsaMgU25g2N913FtgmthaVj4UB2ktcZePCGBYuMmRRDrCZCcCYm1yvAssRLfz",
  "key16": "5tjFYgRBUgnpiKRMm853kKSQgozhBAuGqvtg1J9ygPKHBwTj2FUh3whtyhA7jrZJfNFiFB78FR89NgAjhfFNXYZe",
  "key17": "35eJYAQeAyDcmmcAFzf1hWAnBdjjgNMUkyFd5qvFi59K21rahoYGeo5gaNzvf8WiUhgriZ4uxmp1XtSwCSMNx67P",
  "key18": "5J8zHns6oDfjPwwW3odkaPA5ZmUj9s9mJDdnuUGRYsKAZc57Pt57eANYXF6BwXbV4LMXuRmtLTytZPZGQ3zGCJzb",
  "key19": "4VMYNo4dZJ9LPNYMtdXvpMq27U8DQ8AXHiKdCGzcML77bWGd8YvV66PkjzJbDdP8tn4QokUgiNU7riNbZ8QxcbLN",
  "key20": "cpaY9FQXKJcwKKSdUcPTxxVmdK9TxLLeaqQpAbun6k6wHziekaJ4Pea72HojXv79STpUbq9pzUnJcjpsqr8qjc6",
  "key21": "c5MMevQJf63ugnBYZM2w1RQZRD8NwWBQgfddgBi8wwb1F3Zg3SDwCdiQZsizoKycCAHVs4HCGFk2e8vqa3Yburo",
  "key22": "2m2jqijpNhSsufLHqfzojKtH1xfzQoDcGGz6fUctqz2U86GPRVG8nLGU8vwzcZCY8yRzvXRkwyCPtEGyxCmpe9N1",
  "key23": "54hBgvedFis2nwGW8nUeRuku3r2YWH5rRXtaUWMGhxB6BUEgDk8B8n9Nq41BoH894sknF55tHpDJi2ZyuXgjEqgb",
  "key24": "3GuBF9ccoAGUkYucKBmchbyPSCRd6LRtUfWwKb9hEgFUmMvqC9o9MtLtZKtCuJBoZ4UzzYL3XhAsjb6FnZE2ReDs",
  "key25": "5TbK2oqosDRH4Aoe4L2Rn4WuAMZ1bpQnWGZ4V5jU7HxP3t6vnuqwftE3NxGU6s5S9cneaQAE8S2pLi4Ynor85jft",
  "key26": "3T8eEg22fX5JGgaaWW6bqy5kWoDqdGdGUipqn2HeTCdsr4RnG1bVBYAWKJjBBUfBScQ6NSiGvqT1hfkZaPbw8CSX",
  "key27": "CcjtaxGKjzRausuV8MkJDAXpkmJ5t3qVmuRVTf736dHbNgt2gh1QNk9Ts7cgivV69m7YSdKsYe31vAW2xP7c9bJ",
  "key28": "oVCk7o1HbhaX2vRXY8KnahBxWCA1GuBX5LCCdGEJwwE3bVNWaEYWLssG3jj7U2SjRHcmL5UroEgkCmLyc158Ljw",
  "key29": "5VteaKEwtc6MzqdYFGBucJmgAmnoZnj9MLqusFquhLeoSJgbYXpHLPoUreFYsyGSQ8bbVNwGzWh1v2tSQwB7Q6RW",
  "key30": "4YXKm4KFf6EZCXEEh5E1R6Qckussq9DwBWKUg5xMxH4SWWz5CHkfyXf8ft2QNQhag9EFqncZigBF6zmvFCKYjWPn",
  "key31": "4k8ygveVYcgE1WE64JqUHubfJtqxSRtPSEN2nStBU3PhnBYeTQEDx7NH4fTX7oZodaTZ9QSccBuBLt9SHjmfkpxZ"
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
