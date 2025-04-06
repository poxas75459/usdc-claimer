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
    "27dcmfYusqiWZqycnhAm3kSjPve6Jwny4yDRryR4eKdhNzP8PQb33kpQuPAzwH5KHQBhohM9wVfzM3NXVFfU9ECA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56Vj95uAe1742tnEK5uJE7jEAjBXCvoM8aJyiYKVQzCKaodta6R84dUX29MPMiUj2Jza8pskMvS55kgTfBubN2Me",
  "key1": "TwW6W3WJXniMS1Wasny9Hshkq28V5YTjxa2kEeJPDRFRK37z5RE7voxCP1SDRzuf2GYZyJSqCCc3foj7YPYGyk8",
  "key2": "5R62gVDfsuneKBPjK7CexwbUqd118Vn46TyyxFHPB2jGrSUbJG8uXRpr6F75gsXz3NugGKfL2pW92NfyEpFNFme2",
  "key3": "3uNVsb1kf8qpa5iX1YR8MoWXRSMQ1uR1C5bxFTTAuyrnZgUxQXAZF1vmNtdHDB2JU4YFFE3wLnkr1fWzz5bYhCgT",
  "key4": "2AQsu1rXJbhSCwgGBt6qCiAqnuPKB8FMXdHFMpt9tDWwzHj2VHgrFuWpUpDj8buC3xoBTva974ifAavqUhYcCzVD",
  "key5": "39sdDophStqQJK6HFB3xkwZVAoXhwpRi7iuyFu3jqGnL7B5MD6e16RW3N6ftpWCu6J9JdpZgJ4kTnfxxwE85QmTN",
  "key6": "feACp6y9gcR1r8ghFWuyceU9uz6qg4m4Lxv9Pg1S5BaHdVeiRKaxbF5SrwQVv1RNm88BwKpkadKrLSLmyFwCS9v",
  "key7": "5DJ3LBtz8Jq7E4cXsXN8fBg54nHcgLJ1HDgFUTGxSGUU9HR8zMrT6bqzM8LRwN1ZYn9RLrBUZHm2AajQKuofxsMn",
  "key8": "2ZjqM3radE23KKKzaFSJVHJeX8GX1ksCdRciN8AiKTc3fRodprfwNcrhLMA8whEr5aCoDeQ37e3YF9BKA9vo51UL",
  "key9": "VeTxsbAdFivQiL7xFqay1KNqta3d7nQEJUnf9veHJYnaYMjucrrtfLpwQiJnUqz3JhCquFZtvq1CJLhssdYLmf1",
  "key10": "3YtwmeqMVmBeVRAL38c1VCS7LSo5GHDu3jzcXVhyEcmevnx3vLqdF2GWwtcZzHMXjFpRDNqB5Phuji24vyh4Hh4Q",
  "key11": "59415FQwVLc6ckyw8GdsdtMJu4Mk14XoUwFzdF3ecAKM6NndVufVDgkEDcHvNyqfFWu24NqETxaLcooo6jrzPJXJ",
  "key12": "2ug2cNPq3XTMGCh7QQjgimAj5ZSX5jaHcQjgGSQZbbT2K48dYjY8ZYsMbsbmVbi5CfczQbz1Ywoa2mP2sLuttm9G",
  "key13": "3FS46ZCKeAoxUgVFGp1pz4jbhNNc3EezejA4Y74KFscEsiFK69XLfsRc8b8qKV7Zmz7zuUMqZVUpCpQ4yNdDuomp",
  "key14": "5ddtis8u68QEGHnwpFjVGzsHipigkTwn9BQ3W1gn3QFB7mUjYAXWNnR8q4AnNzdEuvc5rdmWBy6gyiV5U94Ly2LJ",
  "key15": "343iJtve6YUAdZ4AdmQZNVS4mpdHcwqtNJFDbdYDUzM9KTog8t1hDNX3exPWwWAZF9t1SaEkQNoKecyuELL8EAwN",
  "key16": "oTWaF9cuKTHzfAxdjw572GwGkhfcCsjUWuzoE17goKdhDh1aA878GabEXUVfcfb9DbL2PaogUvt1seg8zdKjCoP",
  "key17": "28yFVF6wYLtqaWG63AWTZndZvcHQD6b4zNLFsJwwjJtCtoZCCvJrFEXf1uiejrMwgkFVkRhAptE2mg8GK7wwgrdJ",
  "key18": "4XWMnpFTYkXhaG6HkqzWMz7EpZjQbrVS3QuTdnV6Ximq3vYDv3MnAF1oHzcLMH444g9RQVD6fUmfmLgPBoDaBouC",
  "key19": "5wrqb3kmCr9SJKb5BPKF8eGsAav3UZrL8g8faqUKLA8n46PshYf32YxEtrFxqD3Bv3DaUE4HfzGHrjUjJJUj3iX3",
  "key20": "3kBEN4fjoaH8G6RRASWbrEKQpqTMjgLgyKaLSNga8iq8onT76j71MobNgBNGbCbiQdFGAbn79YnA58n2g9DvWdgi",
  "key21": "3JmpFFD9FAUtkvt8NvkmVpyN23r7o6fPNfLsmDfnEGpmSEAtsuTSFtLsKYj9L4yxNaE9GXUEbNyNH5RDuUgE6UvJ",
  "key22": "5WZR1G6ehSf7fCv7DzYRyLuCgVJWMtzoUx8f43esiYeKAUHZAcfLUMKTwFfYKxwhuuSguLysoYYGLWq9dHmfoX26",
  "key23": "3PeCDfNmsmk1HLiBPmUoibiJRPfZCjPBVAbenZ2agBtVrzcQntRcZSTFg4Yk3WtzWvnq6S7H9yLL7vySy6hDc7YX",
  "key24": "D4UvHiy5maF82HNNsHvwUXqUktrTEymhzkGS1hJy2o6Rq7Lmy7tMiMF8gb5cFGj54KcB3KXZc3bYCZ38Ff1br8T"
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
