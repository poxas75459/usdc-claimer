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
    "57b7nCgkt685WqxKyHBGEwaHQBzCxsEgHNkNPwmdfoC8PjyGznbXqJKVzhjucaXbrc8xuyoVxzFeJHHiWtAmCWb1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "26rEHSpneSFEVxeKj9CcUtigRPYCouvhcr5BoBTkfD9j3aY2xq6GUszsBYN6zGASMhD9T534PLinBezyUCRopcX6",
  "key1": "4Y7vNwytTmWihBcnWFwtmgiutRspenvfQyHFQw2WvHdPYcH7k1eSXSLmPoCk5VhXGyKY1Ac5YvMDPQSGPV8nz7fP",
  "key2": "5Ta4ratggDDra3DJYpXk6fkjfQoADhb8DUuLiP9uYgMNuvb9eC6tuubzegguUqpE2Ls1Z85pwCuoa72NPc8cbSZ1",
  "key3": "5WThy5VBmVESRf1smwzNm7GVLj1AnxZf4nVsUEuKWFkBr53BN2KXHTqS3dCvcafsF8FirZf4drthzDJBQkdm44xW",
  "key4": "4gwh12VA6P1tLpnLg5mQbXReugC3eABfrNs2TtW1xAU9gLPEZ4zJtZW1om6JSb2qDw4sZxjSS3PaNS5dzK6WFz6c",
  "key5": "58WqCeobRBBuodJQtacJXLFjc7s6Ebs4FSiCc3koQCeEJxCTi5dpkhgCjK3imWqgNThtV8MVxUBe7Ap6Ri7WH3c6",
  "key6": "5zPLNBJH3J6m7WmutXGxQTFRWWXXLmxYpH5WRSqEZqam1zmDx5rfFjUeTwno8uFcmLdAb7jXfancxJtqTpdsHt28",
  "key7": "4Lg7yJHTBuNMMn4yf3ryX3pbwDsB1FUsUDrUiupLUF5NJymR9gmWS3rx1QJXp7hZePybTTKSgJ9DEYwSLp7HFZDu",
  "key8": "2j8oJqErk3KBvKWKG3MANSqg8KmMKwMaLXCj6PwuuqNiUa32jC7vxtadxaG5jD8avthzHqTT8tFc5TG5qXTsJxtf",
  "key9": "w1j3xRPx9VcuZ2PkBdpwUBWmH5KQYnrQXRnfQhtGL6onsuVJzeqcaah4NV178R1Vm8AWGAQAMgSuNPKokUaVfQw",
  "key10": "SoM1teAnk4xP6o8tf3hxPiGWieE23myxwBDnWzQgB4TEs5BJpwPmCWXUZ7AiLu47tsxzEEkJkMxapfZdmV28Dpz",
  "key11": "21YTAE6PangG4TQ4pZo7mzS6GTYdPQH9Lkzx7fPJujZtH9u5ResJTxrcrwRubuH21aV8qataUZCSK9fJfGQtqVQX",
  "key12": "6QK8NcF3uZ9CbkY56GwwXviph5YKCVDErYMa48sQtMgKky8pMQJFv9nxwjjBpcHknDTP8cXsgzBNBtRYeVPcCV6",
  "key13": "2Tk7QYaDAfhDPu2udLopHb8UAqHfdPtgicUPqb5kSJ9hTBvYn7773kGyiEzAjcAyPz5x6giFfJbibNSZ58htZnqA",
  "key14": "2UewGyiwH1m3swxqj7bCXmq2ApRQosS59AZ2rJUyRSV9UqfnGN2vfuXgoHvnFKXgPbmcYUzVF4ycEmrahWSdbN7Q",
  "key15": "3oDqok363AJupBWnKUKjVvT5nNPWAiNHDz6CSAnzFXztjzB6NedqNRc6Eed23chr6aH3fVXXvuRfprebbn8CBcrz",
  "key16": "5TawSkER1hBRpq238ZmN4KdNpLppzsDi2GrtXga6pF4CSS6kjZYwBVKMwAe2MvdGtD31oiMiEDNbeHMYWWgPjEBs",
  "key17": "3TyTeLBxpCtAe9F3CXNprMr6oERYULBhqaWD6ruQcc6KpuH4grQoJKwLtdYqsNQcSfkxUqPkYvHHenVn4bB8mA6m",
  "key18": "57qUmhuDonivYaPbgk7xdvoTrjys1ijSuQXPKupor8XpdXugngNCjwavQsoBzGJGdopMe4SbsoWU1juww4LB2cYB",
  "key19": "3iSSB18tpZ72furutp4YDwztLZYG3XkWaZUmXJYyohfgGa4pPrRVP3czy7k3iiLLeHSUGvrxPSqfcTXwk3DwZJvL",
  "key20": "12z93JnZtfM4MV7RzTjE1nq3xKLMB4SntdmCBMqvG4CFQqdDd45K1haSwsECteoHHhvM44A812eHGQqHysFbrpe",
  "key21": "5XRyFwVoHZHcW5CXbkzLLfDJvd6PNU4mZVTbC4xFZzHNSyXMND1ngdDPRx7f52jJs8Q2QM14kvGLkXGqAknnYrjR",
  "key22": "4iB4MdJS74PHTL1DtxS7GbQksgAs7tuHmAqNaKisVsEwuSrQBMAGXj5H2icAdmsuDQ3J15Cnx5tdrtyUsVutVrBA",
  "key23": "5MN12wnHXo9cAXY8AZCsMrMpTkLAtb3weJsLh4vZw2QCd6y8drgg2hkju1ohuemrLLWA8ZHjYWVdF7yQGQ7Gicx8",
  "key24": "5NRm44LJCPHsZ2vn59nR5UMbaJbnChxY7Z9a2F4wkWhT1rFKfiaeKJwVxtXPJY1CiwdCzBN8qPtVenypACG95tde",
  "key25": "2wCVu8uhKvmGPXxDMBs4XaPnSDDRfM7fGBQvTwkHYyqn7EQE286vJNhJfek5q2Uosox4vZNe3edkq6niSQXmc4Z6"
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
