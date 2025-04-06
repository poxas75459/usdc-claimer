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
    "5ARiXQkgZYw38EVu6VSULLeeQrE5fnBgFMySviz1pmE4AfrSNGZMZsPAv27fkZBA9kg2TpqQUmSpJtCEAtJ49BrV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4zj5X8GGyFVvDUxrahZGQAKaoGPELNth4h5Wj3PK1hYvGhFJbsjxhn37a5C4fw2x8ePc9ot6PGP2cmZQCJpRnZKn",
  "key1": "LJjSfDxnmxUT8eueqqGswY1stBotc68mBbHA3AvhLeTrm8kNGDgUXYUPwAbZJJ9KV9Qc2QfzmbGDbGR8f2YzQhH",
  "key2": "2fr58TiMXb5Qku6jzSv9MMvKj6LTMtRtwVUkxyG9ZMnEiPcVQivmp9FumbhvVpH2HeHYRk8cQX66LyEGcA5BxKR",
  "key3": "612z6PQqtoVPG5Di7ViEKJqrwhnRkkFvCYwbZnMXi2RrCn9J8DSwgJ6de1zrNrx3RVvWo13Wca5E6CVeRQtC4RQT",
  "key4": "z7GfZLfDUzuL7tSMchesXPko5WvTPNxvY2Qtnrccy6XPgMEEydoxdBxdyACyrvjsNSVLCTCuiCTaMSEyfM1gfhT",
  "key5": "2gXsrBUqFE8nLzZtTkBbZKk3XcWn5RUMJzBd4SjBfLt1gVoRQaFpj518DwUDGHDU8pF8gtmoMbrBVAWNhWbCFAg1",
  "key6": "26U9ftF5qvTqvVCQzAjj8GTdr72WhgBaZjAdwt8xMetUCkfvxC5HEt9ZwcDwbvxrcVvy2otVSKqo8rrKcQmdFS2d",
  "key7": "2XYrS7V2WEa1HtWGtmbpJLA9wSDw5XXMLdr7yJgSWgVvtb3wyWanpwQVarmz87p4SgFps2F9np3veTAxU7mEbQLL",
  "key8": "dbZKLyw2QGeGigWPHVpesKvj5nCb61YAVope4oZHyrJD2B81nCCkSxkqYCF4s1RxQb25B94RYEHjSyEngV5bA24",
  "key9": "4Unc1LUD1ykqzXrWNU1HcjQvG3p8dGLengpwa3JNzZCqRD1g4E9z1mzULf6xhYDxnruzeWZHbTupMLpc6qsWqqdN",
  "key10": "24PhyhZCNJ2hVqFvTfGLUR66sq2P55pNtKWUTuKu8Rz5poZMUi2o4v6F7HhCbgV36KVCtK6vWcABUJU5sz41NTmf",
  "key11": "3sQpNzMXxT1qziRo5xqMRPvjwAHp6uMvMFCtBftSUzzA8oQL5s8uWWMs3ggwvr3HYomWStErBqJ2QQGWD2mqHjMC",
  "key12": "5NV3KSKGakv7TM5KUMQScrht7G9mbhzrTUgsP68DcZw4HjMgbY6C6zF3eR2R3duBQmKztcY87ozuT8VD2J3r1XYY",
  "key13": "54RofmTZy95VkrV91MbEhyemm1q96K9en6A4gNgKb6mNX3nqMyGMJWqhTa4Zxb7B3bCXW1sRaNhhQfpbsgGB2wJp",
  "key14": "3DUiusx8See4bHFMwctu5MC9XQJUXwx86XN3QPRPkPjcFiL4eWmV3ToY3FrjASzjHQAmSq7gUEDrydqdX6uFWDVR",
  "key15": "5iYHoqCKAAet3utuVWBhb5WQuRev27jndEQBnZ99nzMgex3RUPgUscUXQw4iuD1WRHejzAaNEiQMiojZJkWa4aPh",
  "key16": "EuvrJomb5pqvRPdXMYNHCbriSECzGjgJuv6A8oJRhZmHksAxGVpbRNmS6pJN3jnj33Po3Dvrcs3AB4NRAb4t84y",
  "key17": "draWJ3Zx1t2jRnr26a971GnKc1GLn2eom8eXRWvkfUxWYnhbvJUqzbTdXTFggyMSfVyLPMW3G5rrbcrvWz5JeCJ",
  "key18": "286xb29hkzeoTCqEZ8ST4eAKSwN4gvJ95RaTcx52DWdvrkAkftXbbEDXfFkZvbi4B294kS3cRtb8kFnvK8dYUEvd",
  "key19": "5xh69QqQAKeQVRGAYfYrPyhrEu3ASP1pn2q58sECeCHwPJvgEV2sLTuHTdFyYjArKZdibUUAg6zHedGpbhKC4S3K",
  "key20": "4KZdDLf7HLMYtJPJ7M7VwfbgWiL5BrmfEBdDWN6J13YeYYVH1mbcB4xzEe6URBiQtYcFTjDPbApjkUiVX2hQBzP5",
  "key21": "64t6hAUHvt4Mt7AJmZcVmJxMKjrxsQBdUKHGPUvSuoJsFSdcogjZhCkPSUhX88poPLFY1JwNSQBR179y3zchGNkZ",
  "key22": "4zeDgS5ovNhzs7JV4BeuZtcowo8xDj1bYwNaJ27RkF9fpK7oUodjyAw2f9V4pa3xmm9DJWpM7FrqRK8nJR9Ecvug",
  "key23": "4HcYFw72rnidM4vXjnJoAfQaqTRRWNiPk4DnzBU6V7MoB6eNB1YMU93Sq4vyCaJEHcXmfknykFEdBwNVxTNEn4dA",
  "key24": "pXeyn9pSjoBHsrKU3CERvk1f6Up5m5sY8eQquZC4FABSo2LBUhnLJHRf6JJSAEzxLW8Ejfsn9hXfGCWbusayix6",
  "key25": "3MfwprGEfr1WAezU9ajVV81MisXBJbZxAkNjsZA9ze3DkKPxinG8gQeeU8E65c84V82phwPEPxF52kjifvr7pLD7",
  "key26": "CH4Z5dxzeCSJMejumdxmsZDqT3E4rm2ez12vob8a8Mu8e99dK7vGUTn6tkvWGV57iJngPbHwurvMmVfD5y9UR4J",
  "key27": "56s81QkJB6CBj33V4MWWc9ESaNHyEYUACUJcgaSTeY8qXGEMSaB11ziBc6LcUjV29hf3N77a9SpYAPjKGqcxcWbk",
  "key28": "4bd7zkUNSMJYm5qCZovYNE8GipD1najwsAj1VL8MA7cB4xgmvGnX3xSF3kdyhAX2E6jThEpgpRfAedxGrKvB3yq5",
  "key29": "Bp52xAPddLpqkjUKFGns6Jrvqv1wLwDZfM8HDamX4y8abgKaBDN39iQvjyUzdC11cCSTe14eEMapwRBBYjDMpap"
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
