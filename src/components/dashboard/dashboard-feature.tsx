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
    "2suhLmsE6qHvrEUbVGrRrWhfP7PFPawxqafiE7wmvk1W5mpcvg8PnPkfuTv7NoVNEpavnRKjxNQuq2LaT9E9JFL7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4861L469XAq3g8xJBWWEbtE7v5b9mc9NrqW1UjFNR9tV7kxm3m77dpsQyfAbT7a2aqyDXRFySYfYeQEdHN4B234T",
  "key1": "4QDL7ZtjaQSoaAn7Zr3DGTCY4YQJp8RJsK1yfxLvHMeohiHLhxTQvXQGYjEeDtYGHtBHVBFCkes6aKnuWGvx8Asz",
  "key2": "28Jeiot8AgF9V6QsXJGRMbNBdPcfKqAZKmV8pemnew5dEGPeXXecXMudAQ3xoxFFNKAZ4K9rihk7ufJdmJKFxiem",
  "key3": "PzBGrcEZF9XU95xRhTYq7E5st53btbC3i5sA9tscdGEqjPcvxBvqVgNkwgHSWtkso7t3V5MtGtcqr9SXG5UxriP",
  "key4": "55eorEMEx9rAn77QFm4NK5kYnK7PJHG9kH7VQsyUMcd6zd3CSDxneq2eMPLdaH7U9cFX4rdDTvKBaqQ5XdEuRqjs",
  "key5": "3bLfjcfaGJRxnQbgzpfSEg4Cs7KzSQd3HLzpykiHMGmH8U4GSGRXfjXPKHmJi4eKxsopTSkh4Y3SDnEkoYBgpfaY",
  "key6": "xGcppMm7cZbGwEZ1DBXz1FAnbsoxxs6U2H6zUFcBbJSwdQsKSZFXN1CNwLy74uxBiLQVheZ2Vb77BBbGGe9vy5K",
  "key7": "3z7v6CY57NCh7tnKE8Ptyrd1BWdoDNMJZHe95x2yEHucYFTnGKbC37cwHyHSswpQ2HqUSx4UnqVmu3PwfKbGaNCY",
  "key8": "3xfFCo6h845NrGYzpwKkfrmum5Yu8oLUSLC5QzLbpvhe4i9X3UmWCi9wFaz1Xb71CNfQnA4FRSCyeHsTxLZcjfuh",
  "key9": "5tkHcHJbZk6ykmdVQi874ZP4cui5PbAFYCL6R6QhwJRfaFV5QwADcuzfA9NQSteesTM1PXM7xQjMZcrgoFU1L5Ym",
  "key10": "3uMni8ZwwkdvUGBzK14Ya32FgrX7jYXenXtJmP5nv7AzoN5fQUqKZ7fVwh9R9494PSHVGd2SjHQDoL2XAVmDCgps",
  "key11": "3DeWiCtqmNwBEdVz9sN4FoeGve4agqLrWnrUeLdGY5CdnJag5gYjekfsqQ16jUctmeg1MDj4PSMRswitMc3cJLk6",
  "key12": "212a2uFr317A6NwKTdLkEjDZBN8cu7cUDkQiPLgeZ9rWnoRTSc6rFdnDq8PvSGNASKuK2CMhyGKvBxNbhzDcZ7rc",
  "key13": "4r1ShMMhPM92ftSZBBhRddPkphbwncPEtuqrVyhK6AViMo3WKtmemnH2LwGVucLnL23GE9jWatPdozhU82HEoGRS",
  "key14": "zSSwNKqperLDa276yxbEyX8xnuzH4nzA3ukKDvCJ4bdLWKVwiC5urvzWrFUXx7adjsJRvxP2EsqjeFoJbvYMJsA",
  "key15": "CXvc2haWCctWzLE433aqus5PD2Lycm6cp5GCJNMsNQTxudSfz4BeBZAMBYPCQmVgu6XqukYFL5zzpz98SRaNs7P",
  "key16": "5YWuEdcdJ7YCKUaWv8L4EhLTruagWU8DQpYYd3PG3gTM64hAoqvSscqoB3rwAyT7fSSDFpsmkCjBGKQrfb27BMp6",
  "key17": "DzTvDcUHpEvLYsGRg21d3gcPkM8B6ip9a716M12Pp3E33rQYEnEN6rQnAyoi648TPpQPKeRh2xrJdNvxBYgubyf",
  "key18": "5qWoGQe2RFqVpLttMrnVPRRdm94EY6bqMPBsf8nWjcAELVSQxJbDQFeZfBH4rGUKmk95NznAmnGcqz4Yjfkngstr",
  "key19": "5Me3eEYoRUn5LnAAsfVuKRNDiD3MXVhJdNCELvnD6hShxnZPRYdZ83L1yLkqSyqq6JK5UA8Ld3z1oRzNWL5Qkq8n",
  "key20": "5hbnEhjkKAsVKRRzCgxUvnjUAkUSQfvYbt95jJnCEdTNNNpzYwkQm3wsbrMJeJ2aMDTii59iZ5oRvFRnKpGG6riE",
  "key21": "5ynEmiogGBnNsjEyPgFsQf7LB49tF5mF2PQpFpH5Bz4KTJUhBWjcZJ2L7Gn5W77sP4cD2GhhKjyQiveJQjuPG2Q4",
  "key22": "2MQ9rJ4t33Yjb1J8JtQ5nVmeQuBWgU9Q4jwdSRmQSEcD6fRh8ty62b5DhBBSbNyt7eHRFSs2Wp1xEykkEx3jP7v4",
  "key23": "4JUfduwmL2K3yu4Qc5msq537ekH7jztpAsHYPuKF88GWTUmb5QNEKS5phk95cYYrLrdjJM1b9h6t5ffksARbVxde",
  "key24": "ZJM4BNcDdRBdycS4b8P3fsvJMzZg7cELK5Wg6JKLHUMPcWrm1KgHt6tVoRNGU4BmxXeUJsKMa3dYmHuLCNzcGHq",
  "key25": "5kXoAgdkXvyj6Hw7T6PaJH5jEUDr46qnFmgSQwc7psfC3A9r784U1TmkX1ddhvy5GjJ3m2NG9GcungyFYZLLLFB4",
  "key26": "dvadsWB795o6MNnwRNkXMX2GzC2At7iwDJMwpTjJxdMUCbtYeG5Ds9Hh2tijgAiBzF8tn4tsWSuVKSJNTa97eNm"
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
