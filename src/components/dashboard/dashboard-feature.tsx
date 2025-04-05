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
    "3MjezQhuLjxHx5GcV5hRyx9tgWkZyzKb2kwWZDLh9L3X7wvAi8uZY4vWpSMYypJAufPZ2BrDkDFtDvQdwAGGNKzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LZRpGfE31hq3rASpyX3QqSzKRDuFdMjhhGoUHLFEc4RNaWcUxhjgUQ2yCV5d1Zcj4JPzWKhtq9X6gojdW4xJDhq",
  "key1": "gVJ5cnKswnfDdgj41mMbLYxeyrf3XEa37ALDrStaEjpeDkMZgfuFaHnS6dLg52Qb37vdwqt5tfhdUiAGYpPpN7y",
  "key2": "2HbWpbjiu2uytp4LbpktqwGskqyVSs956jAsrTD9hrpiX4rX6HWYVgyno51k9RDGK2wBevYWhRh9BH591XMSSsmb",
  "key3": "qTzHniQL7q97XgMirfoa36HYYpua2JuuPmd9aRZhTJjUpoGFvVemtuYkPB3kuiniUYoNwsPWJsgx8R8TunHokTR",
  "key4": "w9t7FSrzvoRcp95NSfF82W14VKp458YsJxK7GqKaskeCnXkY9YXQa3FKdSBvp2sbLLmsEvjMBaqkmwsGGwzwsBc",
  "key5": "QSeQZEK4AVT4oR9MpHxz6Bp39gSre42vb9A7QEtvTy8AdAwkSnCKUTpAtbfkL2JoNEnC5K1vxQiQz6eUeqnYccd",
  "key6": "2q8dKzvigwZEFb8RKYhPCptuQGvR2MDaxyvqRuaGa4fXBimMWDnChCGYByckeS4m1ZmQpf9MWXUR6sLqvf4HrqTa",
  "key7": "5dquwT8q5EbJDxncoSkvLMBut3Wp9FNX9gjpt8Rknq9pAf3zk2b1z6NSxjivf97dCMQhhp133HqGAL2cJFXMiaXz",
  "key8": "qqopgQuAC5jW1csCGiwcj5s6E9uMCkCmqpj62VBrpPjPMPKi3ayiD9LATyigWCUXm9XapAvHYt2TmTEttYqdyBk",
  "key9": "4EBPzo6b1hpD16EWfCyUetYT32qBpo98XUgtMhU9Aqx1vNgyKtPKnbUAhKCpb4hotbEMFEu4Jsk6LUh97ajLvgNf",
  "key10": "3kWryfHUNuXiDtKbB99dYraMo2ZQbvSoRhjHd9GRUz37aXfYJfLkdtcN2jgewFyvQQgXh2UFryknzjTFvbS9Khn",
  "key11": "SmD1hUJ2CESuLrUWfG5eujtEDhVxGu4aSQD5B7ALZ8aBTAJTD1baEZx3ZgjGwydJfaF4XF4pgDPp5jGvWukNfZb",
  "key12": "2oVn2n8zWd4nZAqqr9sBvetNxA5qCFm6whcLcKKLo2d5zqaYi1uXFWyj9AN6ehY6gARNcC3U5bcode3UQvzgMHSp",
  "key13": "KPBoP7LBg9GhA676CR4nYHmQqtNCv5jaVKJqnkQTb3FieRogF9d7mCuH7fritYRTe67W82aiQN6bJwr3rYCStWY",
  "key14": "2b6sMjahhRjRWnHrAzCxbi6j1nTyNBbKrfffsw3FPe2i1MvNimm4BhfJ4rrxRaSWXqpWpomJrzVrbTss5wSSKyNG",
  "key15": "5rsNNq2juHUkxBduy7qbgbvhgAN8GDhWuhmZxGQJb9xtc1YsdoYX91GCrdEQM9hS8TdsdeV3Y4CeKMSUMGfqJaLD",
  "key16": "5XXpTNANMEzDhPWwwCdQosYdPURgzdmxzBuprtvapBRKdVzHkx1zwfBxcDxeBdmy1bnBv2Uicu3PATkAvKE27rcT",
  "key17": "2fTYYohg6zRxNoEkdvvbDGv17a1XSQw9XBA7wGM9HeCMvGaPaGtgvJ9BdHKqeLW64gA5wJ8hDBhKxqomZ2rVDKCT",
  "key18": "2jfZYvA6fhrdThpdMDhWqrJSYGyvoGR5K8o3mkkwrwmd2Fk3wrqbAKPWrAVuYaYgfreWR9Vo8QoB8TD8aYqcEpiM",
  "key19": "3YNrLzguCJpfzYhyzxFrti86KLuJhXqqgewKWooEJEN4Ws7nh1R8SXruUtV34pvvKckBG7PxeNYAtvhtxa5Y9MuU",
  "key20": "3tyuDDpDp55QGDsn4kRwXhQZKDGVx9JqpwBSpiLXkTz4i9SQp3B4a3Kf3uULEgF7m7aGgfnAnHoBJDawUgTZSeR2",
  "key21": "rXPbryQgfPyJuEeaQGJudTDFHfNR7vZQd13ScrbnHHEAd6moDbh5FExyCuvAGbewQtz5eoknJCcr2YXeKdZ6eFs",
  "key22": "27QwVPbXYYRHkMCJHKaVzuz5CmK162qHFKabiVvtYFs2ooUrpe1hxzd8k95krKkmtAsLZ6EUzmUsE6GMNsMTnprs",
  "key23": "ERuezaosuH6N25eQEbkkfowhoc7EdfDGb9nveMoRYonWecEgMdSzyXkxk2sz9Pc5K8F5xcpT21CsTowbj1hrttf",
  "key24": "2UeipnNzjmNqEUFWksV6VQTR1y4T9QvAKtgLzKWBMYFAJFjPTd6j642uyKdgae8raPTjQg2K7D1B5j1M2gqrom5i",
  "key25": "5JK1DsXLjf7udHkcs7CxkNFMJHa2fDaGvV72BLThVcwgBhFDMAxXt7N9UxZqUoGWA3f16yj5S774qohRdTZCNdPy",
  "key26": "5HLSa8XbDHZuCxLTeRD1q7nFsLqEQ4bfw1MB2fsvB1mw5MeYx1iRYc7uFHHcuPWp1mWLiK5LwBmjxmLHJbTwHASZ",
  "key27": "2qRVrV6RYtTfAURYs2AmBtke3xaZkdNdA8nARAbDzq6hwHKerL3DTtUS3dtS2anuEYruq5HBmzpv4FuorH5U7CF6",
  "key28": "35UUrsGqtANzAk6MN9rqnyXtopJ6ZeUnnfG8wFdrymcSLnwtV8tGQRFH4Y3wGWwpCoBFcPVHzHJETivJLBYhSiqK",
  "key29": "ZHAm52w5wUw36RWp6BLgWJyky7SyvNNKTYcnMWJMh6GQ7U18GTS8C3RbCBR1EAbgSRzzRM5EFfxCDFAxHUwAPsb",
  "key30": "4ZjZQEPZUkQRkRFR2XoobeAY2tGcpjBgdAqbRJqNrRYZNiajUb76QQSsPebm7E35hpey3PT5ihCjHHYqNgUoaPo7",
  "key31": "5w7UzWrUGeKSUBRoQ1j6K7oXiRimHBpNHMfurURA38NK7zez4PH1JsKXRRMwVjYoffj6fwmtpf6uxWGhvQ5nFCyK",
  "key32": "5aoXq3zb2i31QpfJqEZWdzVsTbMuzH8mUJW1sAGNor4LSSS5n9LAT7aTfMskogFBWs9E2KMJ6UkQkGeovE8JdL4W",
  "key33": "37S7pMxc8w3WTmiKw9XSxYCJKZKrAxDssKRVhj6Ye3HiqhpyB7WpPr9gTEaukznvKRoC4kxjn7zu1Q84oFM61ChH",
  "key34": "4121JSavbhn51NyNYtpMaWQJLdLXibC72GGMWCrS5BaNeeoWwBgWPW2Nt8UXs2Ln92nfZct92fPFx7VKyEhZSm8n",
  "key35": "3MnT1xckEU89dJ6FvLUhv7oDPEMrNQa2T38cNWBFR1YuYy5stQgjLzBWvQx7tRd7ZcFQNiJ9DWW6P4Ejk42ThtX1",
  "key36": "PBqfkuUk23afYQwm4o5BoSCGgm7Fi3Pdqmh28qAJeWSyZm3AZ4NFvmnA7q9AStstCpDL74w45tFno57bchGpm5C",
  "key37": "5VYziLRADbk2jMJJ9366tf5txxN3DxmJtRd6CitQ46978BUbPW2RU9NRxAwHJ5uQ89FxF4d5qcSXuCH5DsiVRd5w",
  "key38": "2RAkLFzfWQtBioktrnG3W4Z6pkta9XJrkb6Ba6G8DZgaEd3ZtfwzCAhDQGqtjb8fxF9Uq2YNR9CPJrrPzgx6y1BD",
  "key39": "gHZFLd5fJYNjWE7fNgh61WtjpA3FvVwaWzTqsXctKwBDGMfqFqvdvZKrJDNvpaSRcB6EcNq8UZxwmKLAXCDyvqb",
  "key40": "3m9rFXCS2URZ4fvByXh1H5dYDvb1PcpKnK7ViJBAqppNnaw5oJj9bD1zijQsodisQXo8TpRpMcHNy1BTY39L5Jzg",
  "key41": "3jMr5dPgUWLFtzB4wTn3b2szkwSHXhZKvmbAUZurCw8JYNoR5ixFYBhUf3Sjkn9dVsFvmpUz6ancsWnBNnR7unyf",
  "key42": "LwDcG6PFpYrsQ2C74VkQeUnmwdKF8GpFaVJS7NsjWCU7rgubCxNmW3njTAycik4DLHEidbEnZCHgWtTzw3ohPWP",
  "key43": "2okwP4HuisUv7pmnYGSHgWdi66H4XUnNM9S9HMCyuBWsoUuEhxsSbp4tQ4bk8t7hx16nSEYgigH8vcKuQt5fvrYW",
  "key44": "3nTirmGTY2FnXgAQJBLBmJdQu52vpgrkX46byXbAfRoZ9xEKWFB3f94RHvwYRJWTotvP1PYu22cqpApyqiAbDx9e",
  "key45": "62ZrUdKbxAZRpfgkmWrHKaZ24GDrqGftEmKQ1rY7dLaA5q25SYGw8LK3RYDvoAptRL6qYWNhnXdj1kHv96sD4CYb",
  "key46": "2MfV2WxFrV5CU8QEXbHAMxGt26WFMKJFATXccmdSjiYzX74aPuNRogUS2RCt2dy77BvvDn4woXRLc6kJYX6xzKai",
  "key47": "wfjr258HXfRZDzGfT8eqST8DjSVE5Jbwbye1zykiEVmkCDMr4pGen9sM76FvjjzpAhd5dbDYifkYQBD34NWQV5q"
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
