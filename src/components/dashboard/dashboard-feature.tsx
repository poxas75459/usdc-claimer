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
    "4M51C3XQ14gQ7ygZm3mXB7tH1RE2rg3S7NnrePyMAxwCTDAWimb1tjap3wUmQuNfSqgNnTXgwHEoCWNzvLFeiaM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3gS4mL9xfBLz5eK1eCGwmRnT2EDid348yf2T5KKA6AsA2TWKUkpagy93LcC4dbwr16ZBTqS8jfiuNwso7bukSP9J",
  "key1": "3Cbr9BuCZnVg7jjdLGheHH5PoQzm2dCUNvgzS7zp7oEWhJBNGr2bJVqQYV1zCYvjdKJyAJXufCL1axrmR4b3Lobk",
  "key2": "5tczYfnjJfochp6yGxZ6q4yUbHUiwySdKxo6Gspi4dEdV74dxn2kZipvQuuraU6DtpukzU25SV2ouJNgMH3fhJHf",
  "key3": "55dnxptkj24zhfgUaZN3Pd2wdhvnBbUjBs3p7r7hAwQeZeEo3Np5KfU4xbT1S7Myt8RZ7c6kGa5v1NB62mBNQRb9",
  "key4": "iCRPTS14hP7W3h8ExkBuTJyyaKZFkNAJNMrwhLGe98KYqBFJ3SXm6paHULbeidDQ6b2me9RCSJcZSLkVo1rQzyi",
  "key5": "4jz8qnxZt3sF2zAZ27JKSXZYCp1wRvhKvezsrauqQRy9CevHvXQUHeu5yzRxUUpUACWTr43MRyLbqg5A9wYqYsVh",
  "key6": "2xmusWfm1JomHppXNWxhjvgVMVMzYw1EyMBdm1kqmqBYaf22GEvu7eo1qSm5Fgjt7KUeS9h9CHJd4jK7ZiMJeJiC",
  "key7": "475WUHcMqAZENuoaQxtV6PZqo1aE7QxtXBK9UmdbEfkP2EewTMBTFPLbu5QMyBKkBTnVZrC9JA64wBDqZXsiqtwx",
  "key8": "4w36duwuu3n69FXNZw43fdxtNShH44mXeRRhtHmYSmSHKTvAeZPoB8cUKoAU8gmcFeiLCM7ct5m5rATG5AKwuSi6",
  "key9": "3J9xnw2YbB7Da56v5Z6vTNbyHBqezB8EsiKKcU29rCZJt4m9gZWaZeguLAXVRRmhXSYtE8EDxRVNsKPPCTSX7GMj",
  "key10": "3vxpxpPUJ2S5GyaffL6WX7t7AMw3ygZrGB1YwKfXT9mGjxkRrizSSYHPv3k3F1JJQaEBU9oxWaKKrm4CszwxfXFi",
  "key11": "3uib4n8csRVL8je5fUeNTSAKghx1t99npXSTUuXXf2q297U8uwYiuYWVA6ksqmHErRMukaAuvquEnAudpNqFCdu",
  "key12": "y8kGTmcsbRe6UNVSCrmqxwiFoKiuqf91NoUdobdQjAEnWiqD6W9yZh6m21BUdGaywDKZLkDt781bwmmszygPCnv",
  "key13": "2nrLVsmCWV8fsVU9pkx1cnpgAim4BJNT1oUQrhKqmmJFk32xqjgxEy8SJrvgJEJkoTPqXAD2cGdVJ5CZapVtNf49",
  "key14": "2YhEMFjzy8rrmCtN61kCYxafNBfVsDxwFbSUvUAmBz9eJHmZyH2thM4BvpoDtbbaxDkDJR4kBwaL3MFVpikracWz",
  "key15": "2c29mRdofeS4iL2a19wwr6Bfgpta1qXHvAzk2DC4mm6JccnJjkKvro4MMnMX2WEvhfKVih5oKakP3jRBE4kwTUbp",
  "key16": "5422uqmctBXzFp4q5A3xfeXw85R8VT3munKV3vUG5A3fEQP9wTKmt3YwusA27bc8HfUUZUQV4QpdqNM24w6L5JQV",
  "key17": "4z9v3Nri4tgAeZkiV8N483Tz9poWwmSfsUtgni4KP4LNjLz62fMwZb3dXfPTmEXtU8Wd4q6Cm8UyDbrvMri8iMEc",
  "key18": "3ZBpyxUvACmTcXoCFdwb67ubtBErgWJfuzEocg2mBKCQ2MGf2C7h7KzWaFZ3oXd6F9sBfv6vNCipWSypyfM7CzAr",
  "key19": "LsMLWRmTALEi1VkRp1VLBBHL3R2Lj8ma6SGWdkipUGVWdBGeE79zVoEdmGAgbHrQxqATf4AdYB7gqnWaAjfmLdi",
  "key20": "2KJQ5C4zX6y3xYRfCyXFkDkAc8gbPcPrQaESbjHnNcMTUgcBNo9d9xxc5bEmnB2Bx8xYGzec3ZVFX7fjyEmP1vVw",
  "key21": "r71V9bfemkYuKFyEJjD2xX3H7G8xrg9Vcf1VXfie4njCtV6Dkz2BA5dP7rAQz8nQPKB7Nndg4HddnEAKfYkEAJq",
  "key22": "4eG3veghC9JrqJuvruiNc2TRLZVR9Rt5EBQAtZ4D9dxvFZmQSFnEyoTGF2aGrDsf2N5EqXqRJuPnMS1LCK3BNLzz",
  "key23": "2VpuPn1RsM6wMnuoPubUXnJnmBaksX1stYksm85DbBDecDTGwQG5QWCQRScDA3WcqCB3mjXhNSsSkVJUk5mZEv3t",
  "key24": "5yGXJbCNwUF5eK8Jm4PLuudMzbXTzdLMiueoX3RYTgk8Ncx1Y1fzSgE6cw1Fp7hpkcZwCmUXZ1c4a1ut5hQsot2e"
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
