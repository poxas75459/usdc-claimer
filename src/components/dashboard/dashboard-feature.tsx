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
    "5SBHDmkmxk6ykwAWXbE7X12UYcpZEFiaDeoZMpA8sDVfhKWpasMEobTPFCtqfNbAaK3DgBU4Pj65kECczgjAoaoV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qf2po5JrCacpXmg3WnifPyF1fC7pTaZByLyeuZjVWsYr6LdtG773ij4vp1RkFVNSSQHndWBnEFVe871Mrru8veN",
  "key1": "679EeXSyurB7z4mJBZct5EZh7pHPX7EVh5Spy2q2isyJkHySAULT1cW98dD7A1R8gwMfQUqJy2EARajisPXCftBY",
  "key2": "5gNNVEa9H48LAwtqyTFfZZUZqvatLMXPz6PustP7xj6dLURh5XzzTHNNrdwtXZGk28KKQRA8H8TTMdKvC6XgqbUW",
  "key3": "L2ZmL9YARVzWRwvLwrZN9kZkoU873VkmnzuyuHvJpvFxu5gGxiPreg9wRNR1UiUQJRveWRXy3ywPJA557w4Td4N",
  "key4": "67rGHQWwYSh3BHhyUCSFXgzi9AsPQB4SoLSLXCuAETanrfUAeBVCksfhmXD434ussSQcihQMnKU5t7pzuy9w6Dh3",
  "key5": "5jWXRTzZSUUik5xr4XnGeqhuyCs636CSzXLNEf7wn6csqwvUZyFQcW8Lx8xfegXKvDqVS8yaKx5qwTDcEuLyVLWU",
  "key6": "5UdLSEL1xRyAuSmDmtPewKeimLFiwVZkU9SQ6WVYdokZoncRWwjSUiNjVkX6uFsQbGD5hkJFNu5VmFNMLdLbWBnX",
  "key7": "5synEvSEgWmJGkembCNCGmpteCWqTpWr58ZVYJnWiiRmGpBBwQvDTHFno8iJP39YKJxLPFeZgX2meEtVbApGmV17",
  "key8": "yxbS2nsGiM3r3EQdr5SSH5LXexKTiM6eL5mUYrukzU2PCDmcmQoH6CQQs4zDhtuwG8xrSu61fggdYM1T3i3fwmG",
  "key9": "2BUNoReNweiBEzVG8EQxnFJF8REGYrrSocfS1CvxaT2SwHjG2W2DNW9d9Wjf5idJ2EY8nQyGZjqJbxAfW6JghUR",
  "key10": "5BoYaHyhNheSpjm17Kq1Ph3ndQ1AQnHGv6WhFq6Kr7RB4RMKYAA591bSvu1GfYuKXbqLUG5Nm9B11Zk5vFHUXNxX",
  "key11": "2xsnz3cPXmiQJwz7P7cbYufkmKMUqHnPnExFADXbzEhUscYo2tWUVWNXKE3K8uChMVSj6TrYeRAwV1d629oiKxDg",
  "key12": "3KnJSuGDbZY1AK25qk8gTWkjHo6qHWKjeaCTPSSwJKZQjDHdLjcVU4Vt1YrfZ3aymfkbmAMv1KdzbL6shJbZFq3E",
  "key13": "7nRKStQpqvAboohk2azwjNCLMEgKiwpApmthmmyEJSPwUaoJ8AcQhd2TgaXhRnyqTKm6BqbhpYxtEQhLdY9YMj7",
  "key14": "4NyuLvqtRJPJ3AwhaRM85a3d4cJ3XkoG8iWfnitFBiBRECCj1Z9yX2UuVTCn1ofzLeQ8rUWzWNSNSoayAXHUPaBY",
  "key15": "3peE6G2ntwJyJ2yZDpWf2ZhXW4uNanEuGEAYy2L1CP5g7SDRczDRWhSpFi6mTaxZdaUg1aho1dcyw45rA9jebmGK",
  "key16": "3fcpSoPYfgGrPW8cXcNH1RpnMMy32ykin7NGWj4eiW8qcyZZrLNggiL54XU1NHPLAgQuwvDfpr9wjUpEXvrdGk2i",
  "key17": "runWQr9Kpdt6wWwiM8KXxvPLLJSVLJh1YV6NYKMYD6RV8f4nX3YaucjbCzGndGvtEoN4bghMNurjRCsdkj33FA1",
  "key18": "2JsoJ9PzU6QEr74UR8nJQz6LLKkseTVHHvp6H3k8WtgR8wM9Fnso3sxRAw1W1VUbncDk9xw3QeL8GPDCTsCKyicD",
  "key19": "2ak8Uv4keyeBfuxkU5Q2HZdoQTiJyBoFuv6xsNVQNhoVccqcCYxdJAegLV4Rum1fzg6v5Xe1wBrK31PXS7qVh4rD",
  "key20": "5kAupY3mmXSLjC44oaCvBrmmvmsKuXzbFUiZbUXKpvw9L8PXzjPZj1EV9Lv64aDW8ML6LrUeJKWm4BJqjqQY82fg",
  "key21": "2GpCb1C3XNAKRwr11hrz1SEymHjbFx3xx7pTBzhmhNu3SHFe4PMasPUNCxXZuqtTDSpZWT3ccJoL6wGBWdkmvLKe",
  "key22": "2XqPi8epGpVSWgeiF2Lfo7oktAp1LoHdJS741af2jsfTpHvyZt7SggdPz8HWgKajyCbeKEPSTgXP3zhQ66ZHVBk",
  "key23": "YCDLkKPd3n3SDUqYjgUFXRHhBj2e1rhhXke1UihEdHfAcaqGR34dfYqPjyA5a7CfqRhiVcTsHYFhk7t8KoddXTD",
  "key24": "1MwxFeHT86dvVMwvvnYX1zTXe93MXMi69fhnf5a9Grq9d23UNhhm9egbEgPFZUPcZcTgN5Cv4nJWqmB3MfvdGr6",
  "key25": "3b7rXoRmVKSAG9KfWJZSorAKbji5idF9YYUTbw3qHTpFj5bE7XUEfJuiCF8gje5P4dHYTQTx4y8oRDPXqacoccDw",
  "key26": "5FH42S2oaq5682MrsLfUDQ4Es5ArDurY9mKbeiQQyZTNfdgrNaeCoxd8VVfpce2C5SnjndxYYdhMMUPJfcVF9FPu"
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
