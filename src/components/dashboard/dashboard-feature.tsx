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
    "4AJpamVnZzAQAhPFBCRYp87QnX5WXYQ3eKkaCBZPjJmDVzJTiH4LwxW58MS8BTqqQ1ZeZk9ZBZLFQgEvyF3eAz2F"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3fxWEkMtq1oXt4PgPr2yDAtU9wY848VTYYJjBXdZSS6sHHzzgCnmxyCTxAtGJ551zbKV9tvejuJPdjmSmueMFFtd",
  "key1": "2ky6v6jcurY1rSF92ePmFN2mFR8YuiLZPh8Lwy5SMt8zWK2B7wPqBohmi4ECJoQWNmkrHEHFWBH2SNffmKSHbi7i",
  "key2": "4NNSnexLXvBN8w5a855m1UUj9jmu4Nt92h83SgcmojeivoqrHZJ3sTGNCNBX8ahgyKaVDQsZZ7EDf4D82mbbeydQ",
  "key3": "Yse9wLmi4gFyttdsSqz2QfHeSJx5DCoFsr3JTYYhvDMahFoeRwE4JwYgmVW7ATbQ6EY4bPN23DTbLp4URgkN1Qi",
  "key4": "5XkvK1kR9Qjx8utZuKKRQ4b5ByiRmsGHcoR4e4yk7pGNCUvkEyuubmPEWjrQ9vhtzR8AuyXrK1SB8csf4PcxXLem",
  "key5": "4tzL7vuPym9NyWDncDvXha36UWtPAjhpjntvP1PPX9V9XxFUFDiGEJpdJksE7ceunuUkWnid6kYUSEobt6JF8BqL",
  "key6": "46QZeyZznJMhGmXvxrjvv2r4bGrAZuWmQm7DxPfqYfUAKfXsdnGB5NujS4v8w7f3PtFv5ByPKDTvRe7DRrfY9dex",
  "key7": "kfCa82DBMG2rwuy8hywaqCyEAcFDtu2cEJ4GZqZaXMuTpw1G34j8bhQswV3p5iKAnCmpsu4ZDYorudiaQ1CHt64",
  "key8": "wzrPprp6dzAURzqwoxTLkE8EZnWg4vr3CwqmVye9D2YitcXaxPsos41DVQkBWZNgtXRHobv8sw9FJT3rYv5whQr",
  "key9": "3SwXWuuMZorL1mT4t26LyehwRY2QetQyQN2AbJYrQGYdSd4QE8S1NEYbDdX5SyGyM58dp6MEJNnCUByYhpXUS2ZT",
  "key10": "4mvKYbXxK62pmigmUstW5qq1XXegvLUtSREVXtyfPzHhqhUXR4t9jo28wZbD2754JffgcUf4f8SRuYzajkgqmsk2",
  "key11": "5Q6C7CXwPUWvjyzQtD56dqGSexXRcZvu3YaoAbLCfLWiB46eynm3JKo1genaDq1Ncw3Ys77Wc3r2UaYELxcpjZWW",
  "key12": "5T4iu13cjEFfJH6f9d6iBanqvULSzjRc3co1UQdC7ByQEGasFuze2QNj8JbCCSfsUVZw1jyjqvB7aX5WXVhN4msu",
  "key13": "2ChQNyAsyVMo9ihvRdDKjHAaF6Kja6bmcv4oHSpzHbBLNKWUXYLMVdPZXYRPhAFA4AKx89552w1JV3hfTzkQGQ1Q",
  "key14": "4egFYKbNhivtGkYPNWnnwFiU39GEs35qmsgLggYSoCU5Gn8KZnH2Xu4XmmtVn6jD17Wxnimma6FEH47bSj8hjXCp",
  "key15": "5ni7PBSwS7GtatW3wwFSaTsenPNwQ1TJi4AEDHMLkFchbvSHYwsTgRtVZ7KcqwJoDyhniaBKnG3vvQ5tQCmsPmd7",
  "key16": "4rQFyxDc1Qsw3som8LNp2viRVnPzMEtac5STL8V8pFCKajgNzpAjcBhdkjcWw7NTDR12KisLnbukk1H1Awgm8pNU",
  "key17": "2DpiYoAJaqXGMqagrrhp5tkG13tgUsafD36LHk1j5iCfvLaDdHnYgnuFvDTNhcDkwntnsTXkauigt3hq79oQLde5",
  "key18": "TiP49NKrzFjebg8vCmckxDc2zp8cQi35nWkP5cu9GWJKBG7eFLh1372UuvzmMHzMnLNyNGtU92Xtd4vDhuAJHEH",
  "key19": "5dp1b8unsoKbspQfdPBsoMtvwmC7PGjER39yVRZNqeW8EFnQAnFURjsjaEGwFvaP5nEYKe23LKT9cAqdxsTRh6kB",
  "key20": "543So7BB56K5ySCBKWvGBRYSVmQmYxKCkN7nYrGjNTzaZahJhktK5a4WJVnUbxVYDqAWzAFHochgWvYEoDR8BDBX",
  "key21": "5cmN1kTSVpA9tAREmbb6f6r8quvPSsyhGKEakGWtPeSZyB9Uzq2XeijKC7YdpuqovzsQqyHkiRfveYBjupDepJud",
  "key22": "5mg5SKsNCiBwhDDiCAmTFEp8jeXqJr3UGbUevioqyAA1X4XTEw3kShm8K9ieLspasWih13Vo4yrjAgBN3nMwAybK",
  "key23": "5wHWC3VeuRmh6BoRhf22XTH6qag5Pp7xdcWTWeH1SFoWFmGdMqyhdc9CEqGse4FWuLo6w9Vogyqq52xtLL2GddQ2",
  "key24": "2jhXLRqyLtHsbXQrj2xVW7Ztko3MXs4n5Lhc5GfqpNoEb1DQsTme7UEVKJZcEqejEXF45VMAgfVvtRAY4ZHQSNjw",
  "key25": "qWfunvsjGXURKFAMUb3uw5DbSCb4ZZ15ytp42fEDyoNha7AESFJcPwBFfWh7A896eeRLBA6ALVJeWqdkkTEGkbR",
  "key26": "3BKe7BLimsYgH1y9mqshSzfCRY9hfdzTRMgJXYsj8pHvcaPgrvACKxycAMynh2jwq7sebXmBqdZpLqaTW5EAqRue",
  "key27": "4pyY6Smt9LRoG1TxwpvbceiBcm8d8Gdu6Vi9Nk4id8z1D8RUuNLXSj2udgBMxJDuDuBqyrk94qtJRVC8gYSGe3ez",
  "key28": "4hu7QknkR1JiHew7zL62f8Uat4C396UhBPRL7zjr7enC15PypRZFwFUpcHW812Jjmpi3oukwvqp6TmC4GmSnnA1b",
  "key29": "49pxUfwPjhAhzAR5Sybb8Y4HTD7azGPCKq3oUpSX7rLJiWqd7SQCv6rt6E5swKeAh1eokYxYhBtx3NnkATKKgEWf",
  "key30": "39eEYUB5iDTKsNV9fhFnrPeooWBq6kBatb3dG1PJzwbf91aG3aTUAjZNHWC4mCL54t6zbgDqDw8JiWofbiwWcQ1T",
  "key31": "DYhVoJrGtWuNupeaThz1knyketf76aqyxa1H8esjrMF1R6aGim5rkuYq1iwci9LYJe6ALcf9mJwp6He4v7qRDrb",
  "key32": "3d6u9uh2zqd1bznobKEhcpoHKQukMzCSW6Nr9azF5KYnbwMwTaf8CcxVg9PdAfUZFyhhDpHDX8zX1aJyLj1rufHV"
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
