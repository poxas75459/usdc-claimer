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
    "4wSLKU69B5YmnNfPKBngPz13SriDiikLhjN7AkSsK3UcTKbmy1TGohx5qgAhPwTBBioEuaFPhX6r69MVxeJWf4Te"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Hasi29CRdyn2Wjh9gVCt1SSahe7zTscpW9McRUwtcdtL2eUgnscSQ7D8rXXCqWqazvH3YZwJQgGoTMWrMkiqv8q",
  "key1": "5irGwgJDJmkB53g83G5tKm77svA8FGHujKLabwzb7RYj8RzgmUa4SccT95mEMDCtuontmnKGiGGmsem7U2DNxK2K",
  "key2": "4zgeFWck19oMMXXPbC2fPcpewoH5fYsV6i2dhzvybYWvvQBPG4t1sPSF4sV44UqfEnx8ruBJtj7N3ZtPop84tAiD",
  "key3": "25eowpTFLzvD2BGoZeDq3dsmBrmi8dkzoVv5YBepCD7Xq7LxUeiiTKGvSNPsS524D7CVxBBM4LxoJgvvoJan8Zzz",
  "key4": "2dWYpTRs8SgzeSABo5Utdc8JcMqcxqMcjGeUPV6qgEZ1uzU5srfpNuNRDnwzuRDG1cSgqwqZV77d8ddgfMhE8EsT",
  "key5": "4jiEEGZ9eoQoU3MYUBaNzxiqeS7GbeCvQJz5FoYE4MAR8KPNBLVxxg6xit74iBYZs6kX9CJdA9YVKYSqeD31YKsU",
  "key6": "2VQYsaAwAHTHeDwxVWp2aTQtJGCnasBe4Pi6ZxwfFsfpJVjzDtP8nWNpu8pC77oLCrqueVQBUEn8hKnNn6dNXsHo",
  "key7": "jqbJgPJ6ufhF71LkRvGR9ZuEfrLKiUjkV6u1z7CeAvWsusKX9Xk22GNqMYHXjvf3Zk4kzWXEgjdtT8SRANBrh9u",
  "key8": "5KQFsMhSgXLJcHEfwaGbxhNv7ChtMe6zpfAA41RqnCRpuE7VaXkVmE6KrmUHbFX31FBEsQ4YdsdQAnBJdAifTvH3",
  "key9": "2pL9BLsi7oZuqf8SgHEpZjwezYao2iZcJjbhEef9Yb142APo3gGKiSJVcVpcUxFrnDUMbukvXyQmYaULzQX6ZQ8F",
  "key10": "2pZ1fPKRdHug8tLQwzfSwhEiMs99GrABNnctotBfT2D4KKnGzPd3ToqskaKkBYBHxgYZZmbhEVgHo7WREZVB9yqg",
  "key11": "E453EoUnoXyL6HdeT1T25bk9rKTSD5VNezao5Rg86LpDMSqBFmru3jAa4PDnc3YCvKRBhNZ4sN3B1Gy1NU1CpzF",
  "key12": "2s8dAMQE5hTWLPXmwABGhzT1EKh9it69eYm3mJ4zXDorMekHxnomwuJe471rucQ1Vs5Ev37unySJYQ8AiUnTLQmD",
  "key13": "4WuLULmsCQQ7tCuVTcW7yXapdZdn6NmoGCAz9p7r9qcuwjJF38ACJsYpz5iBbdqhwTT9RGhzRWeHNLfa6gwXRrCr",
  "key14": "59QPu35FWU2Dp9ZZbgd4p7u3yVKoGmg7W9pwWSMpkYevB3i5YP3nDMhrDQBxYJDzKYSm1DmViEq4ngnpjvxZ8My1",
  "key15": "2N2xBCgzVcinWLhf2rro5WGUvaVZGrwrjzJosb5JBaUfew8oarPZH1dxac2ZXXPo96d7omMsFPCFLEW98KGVvkLn",
  "key16": "5EWUhHge79S1PJSkanKc9HWtoJZhYwz3iCPpD3demHTobAqq34aEkmsbxRTS8ff2GEAF8oNHvwtbVukPkCJsFzE6",
  "key17": "5ZeP8U5S6sxHWhdiCu2E5sfehUazgoSeP63TAYhKE2hUjfrFVeEwRUSnuZZsswLerS8z6waptfuzUX3zE1ANZvkV",
  "key18": "4LDEQuzr7zWndWeCxjnyrEXaaDZbec4EkiHkZjRfuXK5LTxevu4bRAc7w2EyejnZi8ZRfHkX3NBxYns9HHZPKtK8",
  "key19": "8CJx25f9P8WXDR2StKoa6WPLzWR44oXWvaG7Jn3U9cqjwuyhfZXWDArwFBdKB3TK4vmS2EqsE8C2ggS2xMqu3Wq",
  "key20": "5yVLVRHrNi4ieX4TrMp3QMwHsm3LY4hcQQDPwVCCTi7M3Ar71yfC7GUe7W8GPkvLHrs2R2NPcydvDVaB6Cw4ebHZ",
  "key21": "27F98hYmDeC3o41aBNoDVuaoyaMTG4LWGaPnoqELDPA7YW6HJE5EYdieyDScvmmJSSttH53eiPeH8t1ztQJDPn1F",
  "key22": "5cMi7RSymj7csG7pCDbzP6RMJ3gPekM5R4GZeZoMDXk94Ae6GVMmLWGkc3FTcbPxSVQLPLtGFCjH9dNWLXyjzGZU",
  "key23": "dwtfeZPeuR2whf2DkNzE6xgo8fwDMpSNtjcww6hhqCcoNDVx31G2r8b3vwUxsNkLYGoh9pPe8sP5ZE7bYniFeFY",
  "key24": "2F1gtwvPUUkieyVdLRnJUhtYXWjcP7vUjrL2kptvY7sYKptnu2D8gJ78TKhW56X4HwKFq9eiYgJFLPN1egvdRHX",
  "key25": "5ZZRTjf1919SoycXdDH18EPEXpCJotTr5an9cjez7kXgPCjqc2bCkctsxVHB1Z13LsXHUW7ydJoFn5T5yCUGwHo8",
  "key26": "36dZfaFWFb9gUYtQEm2FX3u73yZ4vw6GjtFeUULf7bjPchL1G56rAebCbR3gNAAzBsMWd4rLT4RxeVKP5D1VhWBY",
  "key27": "2qf6ANYKh58poKGnYxWY66BE9WXK7L4iPv7YX5hcMHQxnrdpcB8hrTGbJx23JvJhh2QemPKCWMXs1jfcGbjUBuNJ",
  "key28": "2A1xqFLpEg1KwiV1jySM1ESf5dfCAwVCLDUjLfjs19Vf4R973PZmzETz3bXF5yXfnZXNGofgvpTJyViHdgEJy7Ao",
  "key29": "5poSVNh4asVRYSn8ezDrbAczmQ7RYguQPngXdhcYxUTJzzezMnonyg6Jndha7PAhLm1SSxX2ty1XqN2hgF5YyB34",
  "key30": "PUAMsFdYUES2oi4JCpZWgTfJm3oxPmaWKZ1eP8G8C2BEkVPnXettvnG2iSC6f6Uxk2hgz5pVpyvDxpGGk2RsRC7",
  "key31": "3itpxs67iq5eWp5t66k5wVY7nDPgA1MCiHJZC1wZiMyTUXSBAaAhUha2ooe8vbzomZzZXJJ17Hi9rxvryw9a1JUL",
  "key32": "2LdyHqJi6nFrsS9K91syGqdb2UiXgMtyH9VMKFMrbRKD1W9nTMNqZwzwCxiQ7mCaMG777vhBpvSpphs7rSppaBuA",
  "key33": "5jF5kpgdyw4s8JL3Vb3RscVJQuPR1qJ5NPLfvQJDVZexymF8mLuG22GfLhkbH21Wi6qg748ixqpSDH9LA21A6GXK",
  "key34": "29AyQhhznGTs9XPVidirRbRiUKyK7pS3Any3eFPC18vGdYuHcFJzdru1DP8wVoSoAHAw6Coea29t9MP8GUW4L9Zt",
  "key35": "46gd9DpEUMHnDJvZEPBiPToAiMz2uQqzD4Ck6T9i4uXuqDaB1HE4nEHxfXpx5v2B13Jo7kLkikgvFr12v38AMW5Y"
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
