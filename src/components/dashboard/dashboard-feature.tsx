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
    "3EtdjZb6tpF8BMT35xdcHMSnx2vm8e2huq8ke63bBpZYjGkPkNHZsQxpKeoe9su22nGKJGEVWNovemhr8gssUEK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mT7vPeFsa9H7XDfo64uKmroVZX2mw4W4R49UvG8UFq1LDg2MKPtjuY1wcuibvLRnA6fYWSp7oy8YNu8bZzq5xSB",
  "key1": "3Y4F6EvxUfzzBfkwGJe2bCTyvipVeo7kf7a2B3ra4jjpdjQKVHdxukBAASTwvWLFp4aADnLnXm2ySVzTeYPvS4GB",
  "key2": "3MHxdxZJpTNo8RnVN2phs2Wtb41Uj3hnWwVrRSesbgeVDJftyBh8AnimWj4wtkgnDJMe7zamtTdNPAPUREHRN4qo",
  "key3": "2unPA1e5Bz6hCbyWyAspcUiiGeNpEnMYUd38ZcJRrYST4eeFieyRwvQGmfbpxdJoWrh2zXwkt21ntAGoAdBJsy5h",
  "key4": "CymPF1rrTLGbvy54jtWdX3DWXw8sKQkvYKcNnex7PucTJbixDC8eMVEW9qUSKASuZL56jAHuGhBGbvC9fCrP2b6",
  "key5": "5EDWkuAtL2tpMAtxQ2PXqYBAMTvHAxgqH6dXudw3L6SVHHgLpkShTsie99MM7Kq4jH4iy7y37dnc2JTTwnb5BE4t",
  "key6": "2PA4bG3bVEgrUxDodc9mYAXXG9WtdzJ34axy8PJDeb12LsN3Pn7R8DZUy4K5K6ErMXcCFqfXAMgbS959mHUgks4N",
  "key7": "5ab6vbfKB3iaTdFoTkKB5Mm6QC8g33iADL9r4GS1xwKobEThTxm55yts1RLJYxayDJHb1Z4NZunEFn33BLwWJcoc",
  "key8": "57P7dJksAGnJYiz5nYu8rDQ4KaFYrxLjTvot83TwKrv4aAjvS2dVyL9iZWgfjsJTsiHNSE54ygsdi26HpA82SN6L",
  "key9": "YmSVXvnV2rsu9Z7FvmGbAWwtVodqCk5SYQYQNrTdoxfab4SYuqmt2wn9ftDM41Cs8Qeo61cDn9mnaNgpFsu3r6n",
  "key10": "2jgr3j755q8J6FB5nNJVsNnN1qwoULerXGBEY1J82NTFiHznCU5oMAxtgq3eQjCynGH2gyuvJY2VeNxGiCyBkGRD",
  "key11": "3uWuaiNvH9V8j8V8tYaF7J9dFUh8gSHhdq7udUhTmutyka9qknYSm8gU6rT7MCYgMYrdMk3os9MXFtNvuZWrqxay",
  "key12": "X3iw2AFUKTNVwhxNN13vXknYsEx7jkCiv5qaUSHBzckcApmViYxKyS9Wg8wK7t6WCSMtPNi7fjqqLPM5mqxzGVE",
  "key13": "5fUFPaycy7L3j1z42Dwkpn1AePNRt9WAPCq1PfngLCh5KjfCj74SNMi9NqBjbaL7wmZV2b2yRaXPSyJDG6nAZ7XQ",
  "key14": "4ayQP8qLabBD5XQd6BNBUSiRYJVh6U3n5qXQhjVibnrC6ZxdgDU6KN2ShUxDYEDVEeukDxW9k3CgRzSc8EAhRnHP",
  "key15": "5WjZi4WFgZQEcmnpetJJGmoUxiCF8yS5tY8eDpPdcQLZeNxaxJtxd2473qHJw6A33HQRWPBEiEahUDAGjQcUSeRQ",
  "key16": "2x2E22TuUWrMN2aiXoohtyEcnAzkifYo1XyDmkh7KzSPXG5TL5RY6kKcfoMYzvtw2ywLvSbRsEuXuatFcTrmtpmu",
  "key17": "LAZgfujJFFyYmuWGZ4vhWiNtdGAMXg2Wi4TyeKgDtWrVerKGWwRhnCx8Bt2rC5JzPswMGQY3gXke5GqB9T3r71o",
  "key18": "29nWF7DF5ScbHa5YG7Phcf6rCuF7GxYBqMNNR5cy1nZLhEMoq9wZpnBesu6s8uWZhtw7Wy6kTjmhv4fRHzJTiE6U",
  "key19": "q2kHGZow43UrHCJfzyaPTJwtASzV16Hau9PFhFGEGWacM8HLSojyR3wFhiN4Ba6ULo69Gs23A2TWo8DtzaDbJ4D",
  "key20": "3cEdNH7kFzvEf3Cnkwnz4dbPmG1NKiUGpQiKXEP2P3kgA8Mc4f2oxJ1X4q1GYp8ivtWsZ32mxuTKK1WMBamUVZS4",
  "key21": "dJ4kqy8e3PyUWqfjvtFr9XNFR1g3pJMejaCEVuvwYRXLL8hsYj7v9uKUXdKV3ugfC1UUev7T12snCNDmrUXaTp1",
  "key22": "4vbdfKxCFeA5BG37MqXo2utcNPFN2x7ctVrsSAKVzRffYM5aXoNbW4vGZsfGz4JVM8yBtt8ikr913zZSECmXbvEu",
  "key23": "2E2U8HL8mYNbJQwLimvuQMVPcibNVgjEwmrzvHAx3a8cavW3xzFPBcEd5F2zqU1973mQgik8VAXsebxMQx1dNNzU",
  "key24": "2m9kF9pQ3MKToiEQLfnt3vgqFcbtAuvzvsaDtiY4tahsfayAkjNds7qZekmWCmQT5uV2QdzTg3QKyjJRLYTVANRN",
  "key25": "4yKk2nCoA38pGCsH3gCjv7pE9VvksTAPJFtXGnNpnyXebE6qn6ciYMTSR9TfoYWHH4RXrWfQZREZzkrrLBF8iHTz",
  "key26": "2kJnV28j7wiq7ZNLhFjAqEUsWKLCH5yB5fWETXnEVjpsz8f2TZN1t2axpbvMEsiENQ6RKWYUirKEwDbdHQy2xCVd",
  "key27": "29VLUNxQGTQkbeuYkoiREUteFVQmRDjLBwNVqJTL3Zq3cCpYMMc6KrMDYtN3tm5kfxkV24mM2kE9aN2fWwBEpcq5",
  "key28": "4pHbk2sTRiJn55qthATWC8GkTaxzZ7JVJJqYTNkpPkwxidQb8ox44HAZyETFAWeY4cSqBjDXXKn1uFEjbDmuiaZa"
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
