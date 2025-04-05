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
    "42pkPxfU8Bc18xMkDeeu4ParC59zY4kTSyBQDPqDCnNL6NXwAGbTV12m1pQ1T4Y7N6AKrTFENKiAF2gJUAR1PVXJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qcxRW4m59yZCKHC6yvDwQdzpZaFw6L7JWj1YZCzEYzkSZWT4Um7QKwatH7nRgpQHKmWBXyyE8AE52YrAEnbMzgb",
  "key1": "RuNQbk5X78sBKkkAqfn7HYEsebMBhRoUQHWQq2p7ksCd1BEDbM5hcGbWdHgdtXtnEFLvmM1GvxnJi2qZ7WCZae4",
  "key2": "5Qevhu2pfxua2bgoB6bTUVQVZ2CYHQG9NvexfsTKvPJXEbnk2AioxSH5mcMiVi8XH4bZptBBq9rkRVn41mNvf7vY",
  "key3": "pr6kbVoycsoJurVoAsK6rE1S2LdDoMjsbkNdEK6ZCGptpDcESwiFeipz3xfA28QFJDdSMjqu5YxcPuPFVB5c2iL",
  "key4": "4D8M2EnLNNTKj8axKg3S7hbQAEVM99fc9kvECbJVMzAW8p3AHKKNNWGypkAwybtPYrcPEweKB9hgvsoJyocE7nMA",
  "key5": "NmiHzqfTYHnpioDwhQNRqukfaeSgyJczFMzkb712RpfYXRDzD9enHMBw1HSofgsSh5rtYJifKBzfn7nLAz6DFnn",
  "key6": "Jy4tD9YNQJs9C8a5Cc5ttFuqhUuo4dXvMC3jYrLfRgqXDCs4aVWMoydTYCyASDK26CvkE3AaL1rp64MeDZo8VVV",
  "key7": "3Wwv8v8aDUAxoFnfm2hBFKebyrkiRNtZ7B1SKLHKhmj9mH1CiFmzkKp8HfT885HL2TpFZQgDXmpFTFAhUDzv1n4e",
  "key8": "4TySuBmUc4zRTzQrFN5T8tsdZYvWYV63BQpTfSYmcQcXyrMhoc1WJA4TZrbQEgK8FwdQEKEXvexKaJZN4R62jm9i",
  "key9": "5koVm27cHsN1YQfJyFKbm9SfqLe8TR83DWyoq7teGwMnCMZvSAQAQXwmN99DkbPPsaEeVyiADTcyrs86FZvCLbuz",
  "key10": "5YdmZpEV6NEKh4LNYFWCPpU16TwWTh7dnqcyArogUb5z6d2TEmqejNgmYPfXbxMEy3QD7jYb8jeCTJ2ovRjtcMvp",
  "key11": "4D2vJt5mUvUiwewXM9SP99Sp4aziT1SjGaEvvJeTwELPSE2zE5Vb34RdRonf1xes8EJ7Mw82CbBK9Hdpu3GmZzwi",
  "key12": "QZCDwPiEgJDbJaFY8vi7Srh1fYhKP3yZ31tnXgBYgr82266um46HKLdtYYfkhrCPEj7bjXy378gxc5YAKZW1XeZ",
  "key13": "5YfEYVYvqdRgZmTbvQtCusKcpmwBADKD5v7ixNwaaYzHc1i9iZM2K19Wv4dFBZ8pEGp4M2g5tb6nefhEKXBvTE2b",
  "key14": "5w6LmFZDMphHSxCJDoHWcbSKc1HA1UP9H3Vjxs5bAbrQxpia7RPaCJiTAcDc7KLZYputrdb4ucNZ3shymwnktU3a",
  "key15": "2kY2Wcxg5TqDfx9UrpbbmGUFLYfSsZShgNdFxMKauTteoC6if8X28xK5qhYpRgwndY7KvGV8fWYAoKpUSMTZQ859",
  "key16": "32EYQ55gG9U6Z4iBV3amKiCNsmi4tgYTy9eVXKPTzuZn6ngk2GcbDs244V47TngT6CkjjSjxmhQfe7Wn7Mpq1hEH",
  "key17": "5YxzrSdWX3aYtCbmYN7EbnEDBRVHdjhVNdzHgPnqtKeA2yHCNUcVfNj7wjtYSvNXjh5RSDcdJiDScnM6kprZE1R9",
  "key18": "4wSN5ZiJp7GREmjuuH1nrvKzrgAUkns4cjtNAXtPHaoXQuWERREKj7KsVMxMjSxYRaixoDUA1ReTXFdaCbXHTodm",
  "key19": "4rEs8PmmqK3qfx88z9wZmf4yha64zqXXrSuaNJRnnXow36JoxyVcKDZNFTHM8QNC1gRua5PxiBmjwVYCFKsteb9c",
  "key20": "VGADZwSkMN5KK19TUk4MvvZNSE8YPSmWCkSSrBushCiHZ9wssEGFzeruopPuuCAPEa9pMv6XewZ1inyRkLSzhRx",
  "key21": "3vddsuLquGGZ9p6gHHyAZqwKAyYR6cUQrsrC9YciENjqvTHjL1imLjSgXmPeKEXUGb8SBKNmb3qpeK8HzCWvjaNY",
  "key22": "45mvVDh4sUbcUhX9CZRogiSH6366Gm9A3N98xmjti1yzT8jdTYsbToKrrVkfUK3MYt3PZ6e1pkurtaD1TXfwQTFf",
  "key23": "28jx9KbkPxqfnJzpmXqJfkBdhqvmMhBQQdENvzQr2xccjQLioQy29tHDAiRY1GPACvzZEvGf1V3KuzNN2x1a4hf3",
  "key24": "4mN7PU75HsHP5YqtC6BvE5ywMoApSpw8yGoPPsHAHbGfpT4sm7tbp5pYvr57829qA79Bk8YW1shm53S7TXd8dZHV",
  "key25": "5xVNrEF5WGn5CyHX8c2xiHG2coB23J1Q8B82YPcThQuVtXJFc3shWpNe53VJ8LeyE12t1EqsEoJ1dnK54EwnrT1N",
  "key26": "2yuELxAw6S3kk7hTA3cD6FZ2uAyAAhpt41sdFLxcFeiP8xZV8r9CKAooCcKW52g3A7mvuo3gR1A2mhQbKFrfbUMZ",
  "key27": "5y2JR6nfzYqqDXhk7fHyxS15eCeATdq3aPGc6sbnSfdhUhTbzzLb5Hd72LBdDd1WJdo3oBqFL5YUS99UxP6VaPtA",
  "key28": "opGk1xfseZ97GV2r5m8sGoEJipYUHorzEc5fWX7C4LuNmV4CZkRrNZzrJBjG3i4k7TcMHGBDc8D8cHHf95NqjZN",
  "key29": "2umrphCh9ws6xkGXHteyrysvFHZJKDdR5FThDHQwQ6dFktboxCMRZTnUTjJ3zjFfjGyTvufMKcncjuaszV2LX5LY",
  "key30": "WuCgVLg1PT6fj3hiqiYspqz5bYL2iGm7ZaDdPiWXQxJVoqWrKMYUoamc8TzzGXzL5xiACaPSij57ZCvjwoAwBFx",
  "key31": "52QYUD7JBSJAhhUUbQwqTNruu7wPT3MKmdbeCxFNZm7HFQkRHSLcqPusU8Bbwvt6EAYJMxkLvkEB8bEc3mtFaxbK",
  "key32": "5MxCiWr7Q5nncRiZbodRJN9CNYRF9Bm7XddAW3WypYQEFsPC9R919wkbVGU7DnL1cNxfqvu6YfUpfxK25MhjtoBj",
  "key33": "Nt4wJnnF9RB97P68gaGtsRC1GugN5ujDbraQ8TvbuttnR9DqhCWDEX2FaFvCUWo7uzHmmef4BFRZFmaatZj41Yu",
  "key34": "25aLwcMJac23UajE8uTkeesXLZxzDsVjqJxFh59widED6WoJtqA9sMDdYB2rDC5y1gcuLR26C98KvN72ufwGvE2Z",
  "key35": "26MDAendSVMe4nRWGx3fi9BRguAAWqUWNPy4twpGrWzRAU7hLNx5LeUuBrzBaHA9erpX1t6TdwLoWJ27GoeJi9NF",
  "key36": "5vgERrPHp7WmbNrD7saPzsuSTrVPtXRgJLs1ctvX8Wa36qU36RiRbDeryCvLgJusDZu5DYE1hgtGg12CcB5bUnfS",
  "key37": "2EUSLno9FTU5kofebZbDZsfetB7Jud81QAB1FyZWdSXUewVP1B32sGeSUQRcatd9Pvyg7hqnV69YG8nxiNY7ovg",
  "key38": "51L1UQ6xkWpGRhrkv1bJogkWz1dz1oLDRS9TgGKeTP8UVZAivFuxYqc58nRpwbfMUSqNX6r7KjFJT6pXKv78wvP2",
  "key39": "4qoHpVpymDgdDwA4UnFU9FtvJUJ1NwXsGr8HpJqheHMDTqdA9qKQbm613Y2yKHAF3TLVguf7GMJoNKoxVxrssoXX",
  "key40": "2HDtrk79vw2qg5ciKFymPvF4w68jPCvQhdUB3jbCVhbkbnzYYhSzq3tyFD8BtUYYG5wousjVRuCJDg7LwnJuaFtJ",
  "key41": "5NysXevRG9VDVi5zX58CHFm8YcAQM46n5bE8CM2nEehVCqzQge3vshwNj3a7DqttMprdNKg4BUiiX3tTr6LRxL3i",
  "key42": "5e2ppWoHxXYxNqpKd9YdsiaRX2eUpTn1PUMB9V4B7L1uPbSQoRStmXq9mxzqU6kUuy3B3f72SBZ36NNFwoNnYWZV",
  "key43": "2scm4BdgVGJzx3tRki8bY5Lp7c47wZU5QgEFpQaThX7D2U2f3txPeGbmbd8qfTHcdLnrUs2g11TCjjGkvKMELmwp",
  "key44": "22bzMN1GJ6KxWt2Qmmcydn2zYMU1EqpzCmAgz3p2FW2YTLwpPrWQsCfjyNmTFgUtxk6PTEmSyNu8RLbtXNxMrKty",
  "key45": "3ViMotDhV3L3hJgFKsgmxaiDdiadEKJQYKr5K1V53DxGp7gmCwVsaMz7CnLDcVSWNhup31KS9V6UCBZ475qmNR2S",
  "key46": "3Psaqir13tNRZy2ZMApwXPZo4YEYd86x6C8EtowaTg4UCYj4WLLF23VvLdfAfbyNxJwjhkMW29JEAqENn2PjnMgz",
  "key47": "5cWo9tmvuBFgqaHWcwgQ8Tt7fjnVABhDTJxtZ276tJqo7hr9KRXeHLfpSA3LQoZMqSPW6AzfjphVPTjs2578onLp"
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
