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
    "38v5MEDC9TaEe51Doht99SugrV8V6Bvziz714EvGQ5gVNfts67Po8xapPXosCiwWPEuqoDixTNxqSkiueqSpWFP1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26GSJdBCb1V4cmJkvLWnN5hiobiNn9qHPxep47U74vjozSffXrht7HABNzAnc4fDBtSJRWhgZK2RVRLQHGXd51Gw",
  "key1": "3h4FecA24emXtRyte2GodaxXbMQStTpzdNrgkFeeKLaRsHW1fMH6SWswWi7AMdD9A5gBCN7BcG9NPxgyQXuRYKhF",
  "key2": "M1ewnbni9TF39xhPrWYfYWdikTW3mE8zb19JeD6usofafp31RzKbR1frLo9kqcs65FusuVJkfjLzM9ndHfxRsr9",
  "key3": "5ndDEonkMZXVuk8JVhHHTAigiqfvz6RZcVKHQF7TXLWYrH5AQDzS452ospi5G8esZYUwEqm6zPttqV7nhSeJCzQ2",
  "key4": "2t3Eq7SqKdWt6tWJ42kgQE6PYUkvNx6ay9xQFTr7wMR2kcXy6M9BJmCKRm9V7wJfiDNtCGj7DRQPu4haMkBCsstc",
  "key5": "3pQiQJuVmosy5V98GoZDZNLwJcKynauAuXaZg3rHX85TjnYoWwxok4oPCRAW6ayHNKbP5rQAVT9wnEoWn1rPUm32",
  "key6": "25JeaanNc7jmJaHmYPvv8hcSncfja4EaacSydWfCS6p9dDDdTqyFH2MSLbbjGaKjYF5s9JjPmqXbfAjF9u4jsDBA",
  "key7": "KzLECWojMAHwY4aQpXxsEuo9PiqdkATLzUPurWcf3KwrwUaj522CDtbjkk7wQTe2KUbHQWbxpDVcNNBfBCCEnBt",
  "key8": "4JrfYcAnqQXVgcCEDCrDTyks5PRQ8ATuZYQHswytetJw2JqQo1Z2Uue6s76dhHWToJMgwfmkPAPqrmgpZk5LxEKK",
  "key9": "3gC3RjcGX7FJoAnQeU9m8FY27GMsUfg5bfajaYhr9YBBMmrMcycwiFgyNGUFAXw5HgEVfgw3XZvkPeoWSFTYqzYx",
  "key10": "5dXJyBUH3scpKLX2CL4j2NkaL18n3EqXVLPgMTUvxaiRohGJhjLhRq19xbkJnrDTkuroQ5GWUh5gvDM91aSEBYGE",
  "key11": "5T6dAP9SkmAkPp5KrU6C2vXLnAJ3xZ5UhKXgxxkjjmR8sSLtj5HyN8eCVpX4wM3D3hySosHDCznRWfMmQkkj9tbp",
  "key12": "5nzEkavgUGtMFgf8VR5Ek5dEuWXjKLSdTDEpcd62NMUcePudifYMwfp4SXNsCyNTw45zFyP2NAyyWdacJTcmaXM3",
  "key13": "516wA4NKot2fbfkHVqRtkRiY14PzCvPVGym3dnqzewHiZYZtNkUiishKwSUxDew9j3QDqKu6HcKd3foBuEHFLAcu",
  "key14": "i1EMsMbA59HarQ1iJRLiCDKG8PzM3U6voPWedD8GrPncZXeiUJQbpXSfeYGL9HoSqdWKNuy1pbcuAAAWSeFaFJ3",
  "key15": "PnnR8HSbW4vweshr6ZNrozESw9LtKR5yZzFJoy6FxM963X69zarHSvdkSVfUaGKL621xPzHEYA4yEAi2GhWg81h",
  "key16": "4djvw8vAa1dVb1K7EZqX3zdByr3bNCdZsUKu2LZPCnemMfoWSUX5rQjbUNLkZii5TSRp6zTSkYFPWmfpmfTzfat3",
  "key17": "C3jcG4sR5okBi2J5VLonHBZGgMYhmG5EwA4bR4h1ynG99UGD8oSfwT78kLAw7QCcFCnk6hoji1EV4ebbe8MTQSk",
  "key18": "3eEMDyL33SvQJtchKMDnjUETdoCnjfvqFtXVNeNN32BNWntwQfShVCggkWr3YaXzMyCuPM6jJdv9ctJ1XVNtatUc",
  "key19": "CjJRoTpdTLL3vynhffycjmX6TNXBEyxZitN9zSsX2fFwWWVbKRZULqSKCXBa9CDwZARapQVMiZXmU7PfNnpbbYm",
  "key20": "51KnHSjfSCkL9XvfFfD1mPoycFNFKMVQFaCeYhHjCTaYCGpqmSER9YXT3fhkdE36uXKo5X1W4zvwGqSM6xu4v4Ss",
  "key21": "4EsHs3k9Pq7beDQYTKMRuAAZLeCdqAoetG9bruqiG4HufLj2Gx8t3znAK1FAh4Mh8E6Z4f2cifTPhqARACdPPUpo",
  "key22": "3qQXeYjzFBCao5FXzmNKcWPwjQu9GujVJxoyXAasgtcD8FSu8BmZuqTzmZrNKTbFkvjKuntVZv1W525E11p4L4pS",
  "key23": "2LpyS4Uk1ST19QHXwX8NbFMoNAmVU4sSpUTxGtsrqN4F91otezE8PiKMaR6AYVbgWTnsAyAgcAwb5YyHecehCCSP",
  "key24": "2sgk8x6FBpkmQvKYZSuExE8TJN2swxaZ5cnwrpGsFRQLUSbujNM9voguv1qcmnVFV1dVXU1NiaRse4ckfs5nEJTq",
  "key25": "2rnqYagnSeZLpzV6qWXcXX42aS6i3YcPpnqwBvBMQ98J8cBtZutQ5L41Sqbjup9BddEasp7z9ZwzjKngMDMCCuAj"
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
