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
    "LzoDRauLBas6RmZzuRT7LtcLA5r2R6neL7ef2hX1pKntgnqsGY8ZNnwoEqRy79dp6h1pAKZ3dV61dHTXB3GNq2k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wFgJxiXt7qHYqGGNrNLGynHS3EixuEejJrX5zEGtAgcqTLTK5TBinkbTuAF8GD9EGuj4JpsvS43s8fWfKJaWfT3",
  "key1": "PRZuaEE8kHNwW9Q1YLmXQPdsRiRvLVG49M3bHQKMivM7smjsowD2CSNG1wdjXX9iW5XsBpPccCCcfFH1tSw7bgi",
  "key2": "2Ex8Phd5jN6v95vqWGbFPxmx8RNmgjdvQq5x3EG5rwm3HUPhxWMn868vjXD6bMDd1X1kQNx1o1MiAjGd1bzFa9rD",
  "key3": "3TvVWffckXpBwkBgjKM1KX1oCRN1LLH7n2VumwisAL2ybJga5p55tWUy7KZFWomdDoTZrVMDUPYJutdXWC39GSPE",
  "key4": "3jWLzztStuPCPckQdZ9gvt2RrJYGryGNPrq5dhw9NS9nZioGEfHrAqKFH8vKxdHc9DFmVomNW3Tz27jVoKrbPnb",
  "key5": "4mXtBvUKahn88j6M3kNpuCeBDAj2Gp5qNhCL3HA5SHzS5ddbKHfTd2gn4qun5k2Jwswkio9rZNwh3MkNcXd7CsRX",
  "key6": "2sJM4u7Dbs1CbP1JARZ7wDxeks3hMLp9sE9rheHW6Z35dMszm4Gt5ZpSE9eThFP1417Gdh3LafCVZGx4udrpyxum",
  "key7": "5osHGKdmqJBJRhRbZo5B3eAkD1sqVkaPhDf8ZWmxLLoAFYntQ1iDozB2EW77MRarYLwwRmpju536cWbTGXMYqJtD",
  "key8": "uzD7KHaRLXBrEtEP6hQoRBD9VaiquCkLBPrgF19WKTKgjoaGGvtprjRRytobGTtY4nKJ8Mk54QVzJaXqkVkEn5E",
  "key9": "4kD8TuEd6JNM2FyCARh1J8AUVLKnNxL1MVfnZNra84XsEiG7DhuCWN76Mn4uskx94jVczmHukPXynzdEFrZivxiU",
  "key10": "46tYtp6g6ezjB23duJ6nY3BaSpGpYJ9iBYKFArYDFHyAmqpeiBMAxg8a16fBQf2ihVFKE57Kq7bYLngDGMnKvXgb",
  "key11": "3EqtCqmsjxV2jMFu18VQr9ZkW6yCkaVuQ2ruLLBu2HuGW35nU5tBAHVpivKrUiH4RKrfhJNZpf4TTMro4nAQTrv6",
  "key12": "2oaPSZ4oXMeinb2XeYHXzfbWcHgi4b2FNqyCCnb28PHDwvLeWpewFiyDSgUPtHqzTmuJnEJezHvqoTXV2TbSvMKZ",
  "key13": "4wZukvrNfKRbWTFfEuZSM7kbTJsePWtwvoAPVoACZqShss8rJ1SWeLJb7ztLJmG2djnVnAEtbFfGawUBdPgtbjPf",
  "key14": "2wTfa2mEDPCxXXoiFXjDT4nNgkZRATaSgHLodvKmXFpk5eKkbdgZ51uvDX6hCRE6jRmXQ8irAw3Wm1VkS5u5nthc",
  "key15": "XgxrAjYbhX3Cmdtx1XaQeY9S5YwCztRsmw5UBmxVEenErotAECJg4Vp3zgtv5gfmLuxUKb55iAKP9NaajY93Cdz",
  "key16": "5HKynbwTFeV4nab889Ubvnf3kJbU6nVtoCRZjjXrTabFDj6RN5KFr8SNPrvNdJdTaigggjQYPH6nsByAJuAFrCcg",
  "key17": "3DzVEwpNaj6EiUCCcsEtTwUaqqkYZKDVTtit6YzePdBa5tPa6Jdha8kdzaefz2hykN2Q2rQo2GGsuXoQiVZTsMiQ",
  "key18": "5fVu2ausdXVai8cWm5XPf5p9dfoptrWza33fm9tCEJWnRWr8PCWbHnocH5Vp4HsSFhFmutpkDHRvzAvjLq9wRJL2",
  "key19": "5ks5gkPdCXiB8tZVpTEQusQ2vpeR6yhgF2knYKq48eSEtbtq1Gt3tXLgSFGAkdWjdGAstzSmfAFE4VoANxaqtyJ4",
  "key20": "3XmdJA4wKyntghK3xH5NHz1SGwZzWkXBkr189UfgUCuUDvB5ooBv2o7AduBLK2srwBbrQy7yn8jL7NcToRKxusPH",
  "key21": "3pXHPRCma1RtWPHQyUuT7jPEnNsihcibNGcwMyrnnzwi2hAqfMtjj8kLu3LkJwwozGkPmRZZ7okYY9927rrQk7oj",
  "key22": "3Gd69SDzLKdVPnQdZnWAeVXeM2KXDhZx2SpjRXRjU1LUHynTiBe34oiE4v2Y2pZAChuy19QA3eXuxdhTdDcdfzzz",
  "key23": "3JEQTRhB6VhCLrZrNA2wgBa57giGyfE7mMxR8kJdqBjhKmc7kVwo58qA1sZsBTDgZv3kyWJdBdYv26cj1rBPwMHF",
  "key24": "jZGHAeP69UAmGjgqQBY13e1daVabjoJHn9rpGaYq7tnzXiixQLmTFqN73j2gZQ4yw4EjtfHbsDUekLFXC5jLFfT",
  "key25": "4X7bhRq8rigAAR71kcBhQhAHZSfyNmXVU863QdWVi7UssEUYTdu4r2sb31L7XGXCchFMxrmyKVaKUHmLDoSjGxx",
  "key26": "66DArkAg4KMdfZyk4iKexnfarm3sgF9BiXzj5cqcyABMbaXSsuQBa1h25F8rgQPFgYHEx2FgY9CdSQWikRcnrqWF",
  "key27": "67ra3DDpvhAJ1dZtkkVuh3igQBS7xGuTeSjmxVD4PaRDpoqm4t2zee1yrouvKAnZ44iSYpwFubQoqmyaYyKNvKxm"
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
