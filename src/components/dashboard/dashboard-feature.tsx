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
    "4gciREPsijbv4fDKcdDJk5vAcC6jStwoUTd4rSsQHN7WAZLbj13o2G2asB2mMAnijnAVuBxUHuj64uToyFVPmToT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4eLbiEJk1Vdn6SHEan8RxS3S4mKqv8KVHRDyTqH21Fs9gZPaP8F7L3pxdguPXJM3Dfu9GTK22Y9iAMLccy2PiTF5",
  "key1": "f1hmKtP8RTGYaDaY9feuhYx75dpjtUzECGGBtGPKBfVCAmJhnrMK4L4B1nT18DXTuqav9T7ksZ8FbAp5B2RSkf3",
  "key2": "BMtp8uKrXZBDM4fd6vWmTB925eUksCCSmYq9ydEgyaS8S5z7B6eSEyf26TFv2HdUH7dyTW6652AdPuqxBzkRw95",
  "key3": "TPxmzvEBxkNNSxf2Gdrt5NHVNDSJ3RapqEbjALq26D64kHp6gLJZUZJ8M3h2gBD8CTZb5zDGh9Fg5psP8mtwRrm",
  "key4": "4edZKYhW6wJpHjFcj8LCWP6i2SFgGb8ugyPK67ChXzgiE3vqgTw3DUHEbAfWRD2hhuWkL7pQ3FiPPKLTPcLVtBAb",
  "key5": "kqU7gKztTxexQhXazFF6JVn73EY6rUbnvfHqvBAwd5yYrE4DooiRk6VLHeCFDQyEScLYEpfhz4fmA2Ah6w13Php",
  "key6": "58Ks1NAmhpeJeAvy8bRZzevf3d6uN2ocMcyRmvfbhjM4H9YNkWyPkw7BHus5GBLGCarCDC7ozSLYKZ8upoQBqYfn",
  "key7": "4VZcRPsbbDjsMavE6deJ4jsYFLgjrwBpLiKhVCAgo8gBMdnMSaYvSpZ1H6V6VdukLCs5HmW627SmRU86yegH1mJS",
  "key8": "hSGi5KVLLsTmCmvjyaQq97XAGV7kDzrrpdiFpcFULRg1WQYeZ5ht1XRrskFxVPjVS8h3yYcJELRp8fMnrJEo59h",
  "key9": "5fqzE4qnH446EyvWHkrwUcXuJ3cM3p3o1xVh5dasDjvi9cdztcUNtAPu6syq5JHaqxcWE8J3gkdsoP6yPkANrM6m",
  "key10": "3dTzLxyVvmcL4j6nhMgsvmD9mjtXCWqBRsP8Ay5vg5FBBZsB9PwcsugTqm2b88Tkvww7LfJRdPnXiHmbQzYx3dPF",
  "key11": "4HwnonVUtsMnvah9cwSvmtHJd9BqYjkMdh6qBrkwXxm6dSgpCFsFKaB9jkFBVE6Xk5jH74XRGrruvmaKJFs9wRMd",
  "key12": "5RHRZPEjXoZ3p7SiWxXx6Tagt2t6Hd434CvK36iy7MJFGb41wX7juGi7Czh2HcAS4mLxFrWuh8rRasq8tjE1kAHZ",
  "key13": "3h9PqVefJBqtZ9pRQK5NYXCtYYEz431Wt2mtFcujh2eywgDttXHXyR8t9oFLFdED31awD3bfowoZjFkCwEbiF2E2",
  "key14": "5J7EE4X2x8XAz3XaaD6CEbYzbdTkyG4MtEaFtxwAgttb6kNVpfdhXjKbF6HzSHve1xkKNnsLRFmjCN7gy5zdk6An",
  "key15": "5kRCu7n13hPmt7CsW3AEvNJJC6PGaS6DJbudKTF2mc1iC6KicxdSDY3rXemPLLRBh3heixSHSxEXgfD9DSbFXFNd",
  "key16": "4aoycXXHg1EQxDdyEBpQKxCLjFBhMJeq3SvoApb6S2i876c6RXs4MLzNts8no2bad8vqgxquhZJWHFsoCGShu1t7",
  "key17": "hLMm41UmEVraK7vv9xozxF4LBTMagPioF9jYtReLfsDEhxBT5AGgkTU611dVGJ3Cr8JY8mLKSgY5hAZisMN8WGb",
  "key18": "3TyBMgV4RKQhvS7G2Y2jXyZ4XysGyGy2vpSuxGmY2jie72uCnnqATuaNKDfA83xZAhU7gyKmkiFhyTpUb4JEjrm9",
  "key19": "5XsJFST9CBxM8kAn37z7XUTggHQ73FogTxXHsM59XSvr6hr1tsP7DqV9uhXckQdCSGQLgLX3ChrJDwLT139meDup",
  "key20": "4ev5WCcJmvMHra5zwfi3f35YoFCnmd1c7icD33iof3AhoANbfkhDmSyAc9ZD85obvA3gwHp4ZAZcy6rwigr46YEY",
  "key21": "57u7zaDjuxpH9dYnBcXUmUMZBJ8Lr6cyqai9YBGE5P2z69u1UxQ2FLfqFM7ALvKGrXpswZmR7SRtNoyf8yfF3Lis",
  "key22": "3rzwZQnm5YAxBh9kh5mhHFLEmXiKo4DTG2ivP4UNpfpadoWs3gPxRWD4LKpfgU1TYgN2wjA4NMaEH3YuhvzoR9PX",
  "key23": "utksTxRw72AnyjgBwt8DQUZb2A4uwppQsgqkTSqyUPsH5UE4iemxYKSdQLAzTV9Fzh9wKmS18e8h9ju6VhmbPgD",
  "key24": "2N49t4tLiRrN7nFFnivjzoHzctXqKEzewdsf4NLkR8gpvkmGoPDutXVECJcMRtjZHV7BF1bnK9UnHf4Gpq68ggo",
  "key25": "57Bn7dsXJnnKG3JzF3wdj6eVUoT2PDu92dbWQZF387bsAu9xZH46VNsDb8xmHpZKXSYQdm7FmZKcuUBebtvkQz4x",
  "key26": "4bQT3o9npnqwZm91zzs5FaYk2iLR8aymbVNei4L2qVj6NeRmwd1jhQesXLzx3dZC8VYw8DwP2w2cqWnuRTApMRm",
  "key27": "jnvvfBLMKg1QsVu2ArvD3NCZQrQvNz2gmZXu28WAtutnQi3hBVxqQ3dTfBNpoFceZ9mBfsct8BnULfXi4U6bpQW",
  "key28": "4w8BgmYEKbiubtvgi8CTi5ed2o2kmKBFkRy28rgjFR8mSo4XXSSPvPV7c2syDA3dCBeUhk5tnQHnywB9Tx7yrs4S",
  "key29": "2tKkdqw3s2xkXqr3bc53zGgtz19XR6VgVkdW7DVWtrdHC13xDCH6mFkG4MYofUu1reGmQaEUF1G9WX9stNVFXZ3W",
  "key30": "3jBR8oEtESCXdrgGy491hagUNqttRfJSNyQZbUqxTcevZBXUgYDD6UPrE3cERrdg5vxghGzV6xQBQfRCMCFxAW9D",
  "key31": "2rNcBAfeBsZzvHSr1idmmR4Y9K1Y6w4wZpUQtspqBN5say4XjTt6GqYrLRD6cz2zS8eCPe23Js5H1bywc38fWnBz",
  "key32": "3fSDgMrNr8qQGfst1BzuRkURg7td5x1UCBiXHWtQdjLsjrZiHdm79WpkQT55XktADeaju3YLxT5ZZmMZuvDUjq5X",
  "key33": "2gheUFNb4bNSWmdJFLFviwYRoKXqfKcmnH4Ej7Dj5t5E2HfgsYNHraTvEKiUWFW9a3kn6roQpcUfmfBM2LjRCQEf",
  "key34": "1teumKJ9YdyyepQtzQp1dPp1VHFmUJqSCXBsJnPimFec49MQZhaCgz6hVR1fn8r59EeCpdejwmCuHvFKrkJLHcS",
  "key35": "3nYSMafVcLivSPFan3RJS3zBj8sL8DRDjxJAQWnqST2jdPntay7LGbSoxvBBn2xYeDFV7wKvrHBpxMH523KTLX1v",
  "key36": "3MHvXtj63PeZjM7g96H8W4RMHTa9hxTAtDZTacBJGPCeCZWRUSy9qAh9qzMuS4CUY1h7ZPAQJrJqGpiTHL154AFu",
  "key37": "3YmLipL7SzkYjTW8mhDp9UYqPdythFkHxURmwtMhxAa9SDGrG4ubcnWep8QJPhEGHHD8dWTAEEyzjNAQth8hr1Gr"
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
