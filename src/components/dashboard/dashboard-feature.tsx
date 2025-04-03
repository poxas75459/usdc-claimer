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
    "3LnXPpsuk3tk9bydbk2uEQLQUcosvBLNjDXbYNCjZQRG7f3vacY6hTzbuiM4E5nJRy5UhezTMWXsLNm5ATfAjztb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xU2PfhCLPhjaBY7TdKTonG9Eme1vGgpKyos6pktfkViskcum3t4fHXwAciPTVBZYWLP93GDbdZnnQxzuqRhcVk8",
  "key1": "3XR278Cas6Ah3TvCNtULpt2s7DfgKP2b6gC6H5smSu9FaxYoGVyF3XyccoNwCJfFxyCky4nqQpAB4WvnTKy5SKHY",
  "key2": "Gb97Meqn9yj3JVuP2Qhjg88xy7731UavWim7c2TxCQYQdyuVfD5y22LEwsfcEwpXx1mkU1C25zG8Z58BtbArQXx",
  "key3": "ZWk3AizTSfuSUvv3LE6rmsJhz2x47baj87WpTgjihZCyqz22esaVqoBtr9HmpPmVAent5dBRDkFJGDico5uKpDn",
  "key4": "qzB1N7Vk6hiWUUf8foPYpJyEFPEgr62aujdqR8k5Jugwu6gj35mXzqw61SpxJCcdHGhEENP84c7Dqnre1pC6Ez9",
  "key5": "5FXBQ1xcbsGYKnnLS2K6up3rT7TtZbkUTTzG3PAoWxwpMFt9PtMjYGk44AfxzpvBtD8BCjKKkTufj8qeNjpoHDpq",
  "key6": "51DmQNLm4v1HhESyNyvg8Qx2S7s26wgwFrqaPLbZ6QduUx2XaJ1AWnBRZW7U6Tqt9VJj2ZRdV2HuMAfHzYECwwTQ",
  "key7": "5CxbtYcqFjEscaT6AcFnXCQnJD85GmdAp3Mrm52QChFocB7VruNr5jZjYfCT9bufn7gHecTsVUQMX6LECzcLYrxL",
  "key8": "wRVfSefUKZFXZoXj84mQzPEUBAY4KM9t4qUSc8QMia7Z4DipfV8rBX76EjABEvRW7PfPePzqVa7RnBJNorgM1D4",
  "key9": "3HXkKGDMe2F9hJ6JSjjJUjdiQwebFBLjToJ28UgHDLDP8CaaLrmAMEK4ibusvNLqNGv6GgSkdtv9qS5DDgm2dMWp",
  "key10": "5pf8FWcQjsDQ5731zDaCGh2T2r5T47PHtgY7TEWf6U7o1jqhNucE9gkqzfhbZicH4KwxWZuUddQHTzYPT5UKgquM",
  "key11": "3XiU6VK3zGTgHkVJj2rqCGACZQkkUAei13oVUyEcT3geT8vW8wRduYSmXik9taLnPRfRLfRV48dgheKCKcBbHyzT",
  "key12": "4iwjWHSaH27upd8KJYHuCTPmjYVsZSQXicKhg5bLsMMkG5PkDVXwnaMDCXq76NofuRkyX6FcPXoWU9QZkkWbwNpT",
  "key13": "3dmmcLjLa9h45u8LWagknq5srYoxxBt5WGdaCYQAbW8E7C6q3FcrPrsygB1Dk9wGdLKLWZpShFygwUq9hExQWvnS",
  "key14": "2m7CFgX9TYkLVbbjDg9mNKjTrbu9j48S3fU3XpaKK8X8ttVTVsMZB49ihMhKZVxSegTy4m8ZEmd2XYK39m5GmY1h",
  "key15": "3KAoTTNCMjZmr584wfgTccRMzFqueUTPPpdacc4MXahYKkycgS3V7G7RUzUeW8812oHeCX2ddzeDZN82Rw9Cr5vy",
  "key16": "5hxY4CtFHwMfegM5YrMTyMSZBBjU6B84N5tZkkPifamuMkU1QYXBHC3688aBQ8cq4PRLJJNi7U4Ft38ni6Mtd1T8",
  "key17": "2PuUwFt2d4Z5oiHSizYvjDQ5MynNJHqUBY36k7nQxbv1g6MocfwSuJiCFFyizEJdbAn56rb1uNjm7UEec11gvNk8",
  "key18": "4VBDZSgPCkaoUQs5XnQmRjC97UJQjndEpwZxVXKCCTKPE8Zaj4DKGmuPJkWAB2UWs92E7jqDaExkr4wNgMkj64HR",
  "key19": "2vcxef4jihT7gcALUsyAY6MJ7EmN8DseVvqMjwv47usi4AQ5aGXttytwqWXyCDHWepYyAYe6RZpNYk9dq4PMjPBm",
  "key20": "2UW3ZQFhZjWRupZgGAmwMTejrHNWe5EmKKQCoUCQhpmBB268FxYmDR5CabUjyNgSkyDNVFP1P8u7cWv7iD1iywNL",
  "key21": "62acyEwTuHrx1gJRCxxgQawAzqi2mdYMZRfoyojM9CJdVfcUf8MiXkY7pcC2dY1NzVr7AJxp6j59TydrBPLyRumC",
  "key22": "4rBiFFFyDbMtBNU7U6aTu3vWn7vRb4VwyrF2GS36P6N8wLciLs264CH1wAVBhpXeSk147Vt6sNKPUkCcr3nxGAwm",
  "key23": "3g7yZkugk5N9nSvMFLt8ZrGskF7sz81LNwVRqh1UgRYgTrLzb2S2BQoQjcQwcKftf4G9CfTj9Xw1b6ojMKy4DzU8",
  "key24": "5o8dBNYtTnFTp1rpr2cRLX5E3im2giUgXKGm6R9Wvgf7idU9LC6PgSchTQrSfBiBjHHJZjHD5VnFhaAsTm27maGy",
  "key25": "KChN4249WA6hyWEhAcWu7fCAX5LD2soV7KhyW5SL3zLFXDEQUi9TXbra7HArXsXYAH6YkjztKoGxTFh1fqVC9q8"
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
