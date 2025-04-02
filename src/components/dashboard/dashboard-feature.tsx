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
    "2y6FwNvfxYRqMe1WguzuXeoxCGvB4pRhNYsmnS2LTJHxQJNc2Uv9JbNrrbxsXLjdx9US9oUfBpMGk3BbHeavkCRs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wHgeo9RskNS8FMBbG1N8pevihj86R3dCgLHSjn6rg8Rj3JS6wJfWEQFbF3C4FYhuPh1HviBeJrvC1TgqR1HN7oW",
  "key1": "w3zG6ze9MDA7LeQUdoA3jDF4jKyse7eNcZ4dY7n14gDWPbYEFTNQNtaJ9WGtbUAuK8K6jcU2gSRRpMELMNaH35p",
  "key2": "5fdEBzWu8j7kAnGz2z5mtwmXV8s5bcC6J7HgRV2Bsn9NZ1T6haMtrkdZortPyFCfywJjFBPggh1uKUFcgHLWv4z3",
  "key3": "5YmzxX5Kmym9WNYL1tZjXQBaXZgJxbMotifPD4tEvhoPdueKZphPJkQhGyNCd7BRoAsz13g3bao77FFdixVToSY6",
  "key4": "362TpNDN8cNWGWC9k1bxhRJGktcMid7xytUX9E2WtGvzAyN8vMSuXWwZrenUUXgPhbLfdrz911i9y15ho8n4SxbX",
  "key5": "3vB56D8mG89LFu6QWArYCh3ei6PhBX5RnvxqP3toUcyrZq1otXQSLA5fv3gtptNTFaQcwyLUWnD4UAWcwufRZd79",
  "key6": "2xXzcKarxydYuHTajKsnTuhe3Y1ESKxSd89epKikDneQaRSZmjsEd3UMNLatDTLSPmDr3vgNAt9RLQvoAR8dSM8p",
  "key7": "4npSnG9boamAgtjEhFxn3xdRe5tzqy38P6JhHhPMigjVyvWdahjhYAVaq5qq6fxX8xzH43VwseDL7W8qGnrAuayu",
  "key8": "TZieQEXag6Rgrknrg5S5MMqCFNzxbPDXuEQZBh7zkv2z62kLrDFhYotUuGb3NphM9hfj3SjJsa7D8p8SEmb3wdd",
  "key9": "3ZFdQREVnmzKWLPxGRJx3ECSezM1n3PrmV8iLi4uaa1HV9zNrUhBuj8Rg8KLCyic6w4A3f6gwgtThVnLPzg6zNjP",
  "key10": "4aRwFhr9n6xQEcod5UnXA7Edc8rmqxf1F8dpisGWKxJ1Ewyo6qhvvrzAjpQXwRNnc3SZ2te3H9JVy3fZkko9qatP",
  "key11": "5ZynyLAkVZTSaZHArx6Bi71skyJ2SLAQPuUFdvwXoaZ3Ccr4Y9M12CaNjC5X6J2wZJVkLeoww5ebZcjv6xk4wbyA",
  "key12": "3L5LdRToYt87Uh28BkhvaZnUmXCx1JSSVaMgHYsmBNKhS7sWqJ2xThkacou5XsQjZWD2fhK3BtpebBagzMvSC3Tq",
  "key13": "5y4Mky3GSqVBW2HqkZeyaWRXpLvrcesvJvPL4yiX2JiZHNt1pkajbzhjWxGhPcXah699kabRdoHXSQADGkxv8VQq",
  "key14": "36ita82XPuZcAA3DN3f8cxvfi9sLhoG4XBmW1r1rFSBVfJdqmdA3vPxitwAmZtq4HJ6J6sH7EXH5oo2NPa6vnU8o",
  "key15": "63ZGYV5z5PB6crHEvUAHDvhft3A6V4Pcw8kQk18nfcF5pp6j4w3ov9Cs281dausRBtJ8hsb6EzofU6S2G28sHa7r",
  "key16": "5KMfx8gmXHaKapcZV6QVvFmtbhAJak6eY1DtAvjDNiVxoeXJ5GFSFW6YkGuXiN5XUL2bbsDZTDnqzUDxKkuQ4KHL",
  "key17": "5zvrkZrH4swFJZVVJypcV6zkneY26z7MV1C8GvZCHDSdTvo8hWGTBBbb5PzhcLy3z9oVr8TmhH9mityc5d6fvkCw",
  "key18": "38RtXX4vDJviqmQih2yUgf5uRWqTCVXeYDvdKjovZs7t8E28cq6EeEb8wZqATNg1KSzemiuyNccYkyAAEpTkmFpT",
  "key19": "3xYVHf9t3DMAQikp5G4kYch1kfiPgq5JESmf7TYKxzHFbNNGYv4Bbutdf3s8rK3V8d8hdJsbUxhcg6ZmrFNWviuH",
  "key20": "3N3CufQcZNfVZQNrg2ozcVPFRsKvptJzd7mHu3BBAVnAnf1xkeWG3aYuQ33c4wFU1xXLRc4M3A7smmczSLPpVmw8",
  "key21": "4osm1EeYP6gsXo7KAdfKSs34DT2qHyHxPUF5j5eqCUnhkW4rP11QF5t9LmrcrMQEbvZ7kW3Y2NSj3jYRqM7VcveL",
  "key22": "2Ek782vu6QAB82vzEvGVERw9D8yuQgg3nkwcbuuSGB9d4yNMxe44T8CP4i2x1kdqHBrsF9nZuGXT9NK5gV73Dkzr",
  "key23": "4eTnR7ajbTSSNaTGaeBUG5CBvfPvUwmeeM4pc5RavHtzC5h2ZVCBLJ7XUDs75v3Z5WG7gVAv64KAFnMTHwxwyswc",
  "key24": "2VA6qfti4gG2xf7WUrNdsPQ84kTFKoDwTMadjZL5UHegdVKbqmj1miREQ45vq6Q3NvRwmPEaZc1VZFAMob7V1B8o",
  "key25": "5skvYSwLL4AuKjAVsXrtQWgpaBfAnGnCeVcUpPw5WomfJfatAN3mT2pZ7beTx5weghRquirRMNzfZXP8XGBWmkyX",
  "key26": "5JBjpkV43DKt8mVZd7msbQUEUs54QWTmh96zGe5Bsc5nhrqUpe928M8irZRPjYhSJVN2FcgyfhEHoytcUGUXGEW1",
  "key27": "4TkeFdoRtNrVtcKXSpvrZZaSxdEXar8FdqcEAdgwsB1NRgb4QcXyVJ3P4QPqiqfJ6oJJd6vz3TssVxdHJ1hnRTuS",
  "key28": "3Lojo7fomAQrxtXYPBYKEZrx42FknmZkEMu2kYLRv3CqkeE9RajQ6McArS7Rj61WaxmUyaYYELCuNKQW5FBoUQQ8",
  "key29": "5Yt8qQ7Xh67uiP4ceFimutvv4ktmCRs6FXBMBDm7CAMjXd8MSQQ3ubqfoLv83L8rA5Lw8rviecUXABycWFnFEdM5",
  "key30": "2p4Y9VeXk8Rwr6Jqcvkx5VfzqZBq62oHGduBGxwu7P8fFRkNVruG4YeGGyj9gztBGS5sKLrVAJqCRdt9E688REd1"
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
