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
    "4VEdVz5jYnuT8v2wiLyVpNAPu4c9ke14SHabzXDKxDJHhavXo52GxondPiSpvVnq9QtDsf7AChL4f2YR1FoyX3JQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uexC1XXnqUy7dU8pHq2CXeSC4jmaUFonbfcKtNoM3ACzkpDJzHFZ7zLyDfXpywdyH7ZCSt2YfxZJMdsnYGEopNc",
  "key1": "4tXfQAS2ehFn3NkfjQeGG2qHvzBR2s1JWvw754URZP9XRRK6JAQyDQiGpFgtLi6BFPE6qQNJogbnwn8AdU5Ljywc",
  "key2": "2sYDxyci5MAou5sbLuepF5HWGHw3k25n4nyXhpqzrSKsSohn4VaDW13EnCnbkd6tNQsFowTqUsFGHwiwDuj26yiP",
  "key3": "2c4J4KLbT2nAHZQf3i2mihVUFXRvyajjSktfNxcn6uy5h8xBBabDkNMheReSaxHfdFPyLpXfuEeGJSJYYLPbHBiq",
  "key4": "43KgAHDHzHnPJaMVAhLA4otBtfmRSVdS6po6aUGLjsEpVSjzzJtuUGvWaJJM7mXjP13ksmicQscNZtMyiKMY3QqL",
  "key5": "nWH1RgKiaMGEkDjkJKd7i8Vb4ddzFiNciMaRooS7NpqoQDww3wSCRGdvpxPmJrn3ivPL6amC1Eyg7rXz7PUdKfM",
  "key6": "YaafFmhk5dfEWZ1bjmgApsfMSY93DYsUSYWkaw5HYDuDRQpqubqieZDfBVNEqRr2f7rL5D8MhSv2PL6ZWiDZ61u",
  "key7": "2mD6tnFWCcEDAeJrVUyigCmsjjWr8ykMz7CedYoLWexpcDEcLYadmhfD883iPrS6eQhbme3cMbRJHFfzWwHUnDdR",
  "key8": "598tnmu4dQpcPC87rxkj2GtWRB7SBPEHPVhh7uVeM9LeH98XRHTKk93QAA28y3HY8Stk6qLozEn4Lwy7v2bajj8G",
  "key9": "4DNywEHQ8WfXxmznLJZym6TcQ5XarTDizMg3QGkP9jpagJ6KVsB2JXVBv24nEgWf2Hyy58CspdFmP2cwbVnx96Tt",
  "key10": "5qtsJno5vu26Fw9q7simKD9jzfGwTvw6M8hLf5m2nnFENPyJiGMaKWodEfMpGJCwZmbZQzSmMWv9qpu38VkjUA16",
  "key11": "38aXMYW6Y9BDM4rcfEohgBamKFvr7KWPyUoe5vaC8F4PeaNeweBYVzqWajhPJ3UrzErhQyguMdsWr5aM3d39yqNM",
  "key12": "3mASHxZQtGKxkxXUBe9cg8YaMXPeXBHCvEt3LuPq93j3Q1VuaU7ELpePJAdhMvqYXHUYzbcVHdTffhJsfsXuPwpT",
  "key13": "4pRC1KPnPPhPSmVUvbmd6zDyRU1HFxnYgdYQ2zHDVtv8tAR9BeADwoBDrVjteyvc8asctTE2grwSkLMF23ihtiBp",
  "key14": "2GYGYYJaFEGFrqW6dtFZeXbmHgF7cptWVx2CezD7bgbweFtGmVtTK6XxRLNKji4hGmBH1hfjyfDyrPHKnmmWtzfG",
  "key15": "2cajzA1nfUxz7LoVFdtYcTTXJbrTZtt99ShzngeLHgXVgByLBv97e98dkWgqX9L7F6C19oLt68wbY8T4wKaDJ4iQ",
  "key16": "cRPsGTaQXoM1T8tQ1PQa8UMmSc1sbmrdfxT5EAUkGYWrrkaCo9pekHUTphgMGQMgNEnssULvDLTkxQYj95aQNgu",
  "key17": "u1zfVAbfamRE5zy9wy17MEADV99DA3pCT5WpSRR8gTY4TZot6ZNs6ZFHmA9Pf5uMVVm1ZRsanW5pLKhywReDn2y",
  "key18": "3mvZXcmfhfKU8SWa4bLgdvtqDZezSnR2Vxpv7g88DZ8yf2nFixeh5HfFsnUSXYVFWUcNMDk4r5gZktMS4hpnk3qj",
  "key19": "2VMWpsDqcUQtUPHLsvPr6LvYF75xHm76YF26sGxKPnP9FjLFYXAQku9pweS6TPZ782zwjs5hrVi3tr9qqVQkAzHY",
  "key20": "24z5JpSJ9Rm9BszkD4C77EnysSRYyXMy6dewH1gxmbuVXipH6kMxm8tSR9c3z7ms9rKiF6fmrRMsDX7ikDCr1d6i",
  "key21": "3N1JptZ1WzVmfsTMoyKTnFzj8W27j34V515a2xBxbRNGEHx3s5P5VzhvpZpCUUGtiHzZsgm7RbFMoUjQQypSvgg5",
  "key22": "4vF7YoZAG4sQeDhCxGBKZxDaT4XVY3SWVoq1hTQM45TKVnh9s4ZGqHWQzCAqHDwUcw5ZshPK5MNf4Nqx7hhYujCL",
  "key23": "YmU66Dv1YWKAUDJjFmLaPouAApinH7HtGfq3B8FZq5W5W2d5k1gb5W7BtFjuZ3dQGRGa2UoT9PfMGPtEaXEY8vk",
  "key24": "5d6w2tFu49UUFrDTZqGvVSisjUSDBV1KQrgx7kTMAihovpAZ6wZAKq3ogCMy3g3vTrLZxLxKs1J33m8Azdy2WgsU",
  "key25": "3Wdn8aixp3QatRFJXbp8okszHaTkvmkvWookeyxSbp2bd2Gmmby7vJoSBPodQbPxMorVewaDHKRbv6VG1jJtrBcY",
  "key26": "558vdaccKDjdLt22AoKE4JfWywFbJ5ejc1eLjqMuo6UTn5PgT9JYzw3Th8xWPBabsWEUV8zrRxivzHZAoTEqyyTF",
  "key27": "2dqX5YZ1LoTZhTNqBrnS7mnticTe7pEAXZd9KEcBfboJG3i3pCesRLYsSAb23ECisucTctV1tz6NUZBoTbm9Ta2a",
  "key28": "QdCagkbhKPrVANW2GVE68ZUQhJ7nre7gSL7SFdbYS7ohRYaz5uYsPSvyumjN1QZL8zqgnugh88parkDcXjUGnE9"
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
