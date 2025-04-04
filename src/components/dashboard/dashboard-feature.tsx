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
    "ryfTDv9TAY61CbzGnLzGMLofyv9jx7dRgvTCYMsJXQRCSCKGdEDKZq5W6mzqpdYnTJCfevHKVgi2rvoUy3MW99Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Z7phDz6xZF8XzuXpaye6TJ1pF9eVrnad7Tdm5MJEsK6mRgXqsXrPVach92SWSAUvScE8ymWLLkMJShHVRueQJwD",
  "key1": "k1Cvg9Vk6PDs3Hng97iYB9A99L5rvhmB3LwyqdmoxXio7366RfJYNMsW6KBpP365jrahoqtE2agFA6H6Mwi4MUk",
  "key2": "BVVKX2JZ86kXyniSFU7WpHrwGrCC2ZRepGR3EmZLcU8LTPhAK2Ku5wScpbW5EbnAc8zWMskKC8SiNqBcZjTc4xj",
  "key3": "4LgyfimSwnHifTAD3ZabkChCW3Ube5fNXFM3TyP5sU1zsJ7GpiAGQRBe9gHyWdA7P38BHvdq4T63fGh8FjDS85cW",
  "key4": "3PppAnrUTmfpoi6ripgRwJWMNEu6TbP1gy4RpUQqRSGiyAAyEjwgjSR42mWhxDgmiomz67jz1LxiNoT79GmUVMov",
  "key5": "3HDCLmzmwka5E7FEyjsx6vkEBPWtnLABngrHseQ1p1seWGRdzEGqstxv5fhmYK3A3QAaYuEwVxwQ1ttGf79cngof",
  "key6": "2sVSRWkD3dbFGZVM3ps7DHYqXSdC494Sm7QrLk3SEDnJ4gd4TQjcLn1sngfc61hshLzG5nPNbKp21r9hKh2dmCu6",
  "key7": "5BbZRrK4RiRHARA4kbY9N72z1DxZNnnV4xhKqk6yPV1BXRDTLz6As7AmuNsLQsksB6qXkJTYaWsfhmeUuUV3sNkP",
  "key8": "2GM1kMhFeisaKmZXz5LxMaxhaLsBRsMvvnW2aLra5aEJhcB4TvEgTyQmtCoL5WK2SXPQzpEEbrCYjHtL4oMGAUbp",
  "key9": "L4i1e5UsCa5LJwf3SJfeJykrWsDN6LKXg1sGw6zYRT9uwo4n7jHgM3B7ek4a9SxQz1mukXxcRXdXYZwZfiu7RpA",
  "key10": "5QieA42XVLBt43kpKQWPK7bqTMMA2ko4dfiKVQA6MKodhDNc1EjcBXQa157iNHhtGWNZunU1vpmoqTYoJdxX5btW",
  "key11": "2V9a2yVGnHpEWsyZoH5SjugeLp86xcKPvAjneQahvJF1VNmBonV4VkesKcaRdXbZmd7E4BAxDndMPLgM3zZ3RKXh",
  "key12": "653JwqbewrdhSPiSQVSR6DzsFo9mCunkQyoPxpAQn37j1i4fqN4sgfPrabM55qdH7VxtkduJyovFAAVS6CcBfeVn",
  "key13": "5Y4pwSnxZ4zdiCJa8d6SKyEDoRYGtgkptDqPbRw3ciHF3UXxYoWP5vwBQUbUqQMvejTRhBGZpL4ybTmRp1baWMVP",
  "key14": "4oASQSsDsShGUzm7YFCAAEc5bEGS5A7MaFiUDC9PGCpHWVd69L94zWEjURzR1tvGkxMgGrWAg8uZrdofwKqe2Hff",
  "key15": "5T7CWGibkqH3CVr7xvPVbjreUDNR7PaAuGUjsUSE7iQCLCWSHipYdz5N59xiSk86L6LYqB1HjncfVVv6C68H3QKU",
  "key16": "3nGfg9pCtsjBtmyBaksLaVeeMtpxZK6SNsuvXqKppnorYktJMGNeMZP5DXdNEiTWVNtvyk85DZZ3Fz2LJNZDChcq",
  "key17": "22FAWfcPowDNhMhQGizYouoY9QbFEyv68RQdWmRjEXoTGt8ggMiorvNYCnhMbZbDvSwKAJvbpcwWKCzpWGufKSz4",
  "key18": "q9PQNx6VHn2NhJg5oT9otU7Yd5tWT5aTYHTcf8LfBdQ3zdP6xFHYwZ92AW4n4Ze37PzhApcB5mBHE2Rms4drq9x",
  "key19": "4hJ5bsbiYqLwqTV2DWqze14W3tNQRiXUHJpa6cJrTw2sEE3Thmv7gPAHarmzb4jXMyQNhXB7fkkDcYTCyYSKvuUu",
  "key20": "41fwsv8k7XuVDPo7hWfcyTHN3ZEXrmVQNsuWkYpjm1ZHRT66XCrPAA5mjMvSmCVV6oDZeKzWH7yinRSVMv5w3fJu",
  "key21": "3D7qyVrRiWRYc8D7kZccprpVqh8x6RpPTWth8sAk9MisZ3NVmeGA3MdK1BuFGNC3anTsVECcgBJ1YohXqLSrSP95",
  "key22": "41pVE4LcsrR72uXwPeig1yrX2cRxSTUrnPCQeuanWF1BL6G2ZR84jd5pg7uPKXZnkzbda3TQkrM4pWJmR7dJwyJY",
  "key23": "Egxif27ieeL9Xqie7Lx77rqnzBqwCptdTQxWse2iBqbGnUeZT44q5rbUJ1wvgtB7sdqXBvj3ufhdujYwBL3pdeV",
  "key24": "yr3RzBn6foDYSwFXS77PFrLM2wKKxht1Vs6fncFDnXTs9am1TnQymNqVUZhjZhUUNf2rshiN2sdxqpV8aLrFLKx",
  "key25": "3MbEyHfuZRT5FEQi5cFc42QiRejz41VP8AhA9xxjaaMYgQsmKGhKMTeGXSf1XbA1njKnge8QYSVY9Wwf5iEbEwQ8",
  "key26": "3XSTCSAHVE2qKWPWcqM79PzLTnqd3cHNgSGSWSqbGMtFo1yQUdRVZZar8WnCgvQQQB3tVFSTyDsFWvxiudYyby9r",
  "key27": "32FUMpNqdbmsdiLZHwYnDZfZXeYCA4CUkfPt4TFB1H2d4T1TVTuPZM2H9xBB1ivFWARXczdJYpv2LLikR1CrZYov",
  "key28": "3vRksyJsqpMrNXba37dNjZigCt5JmQ6UL97tgmHrmVb4G58qhVSNYbGiLNdHSAPX9q2RewHZs5oFFiiZgyqR2w7m"
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
