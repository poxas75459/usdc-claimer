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
    "MDsWvC3PAd8MkgVr9vY1Cg6KHFoNyLVF1VPht2RqBW1TBJiQs8cxTfNzPxkyhhdwYsEh1L91BYFsXJtCMVeVSsh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ghR2vQmbiMAdiJkPjDM2yawH3v4rSaRKkJ8eZEx7f1fbVcL3NZGPVELWYPhq29nFcuPW2DtSKQH5DusX7wGz1Ln",
  "key1": "5KgK3ZD4wB6SE6SzsMNvJJPy3EjrSRq7qhALRt2tHZx8yPM9TfvKEYeAH483gdfvG94a9bd3hZJLGXqTWM4mRYJF",
  "key2": "2gSps9BpDdn724a7PiHrrxThxdMfMbtroSH1pNUFJNyvqpvaSaYmQY9f5PG6i2nuKKHfvCaDXZmgF6e3SDxJGChE",
  "key3": "28y7erZ7fnTBunEYwDvdNwhcDyvrj3gnBv1Z9mDxQrQozGMQq8U9Xm7BYcv92eW99Cw7oY4vkYSTvX8GNyyzSGsn",
  "key4": "4Ec94gGuSQ7nsmVRznXEyaVF1AzRScD7QzTxfgxjyCFfMUqtcsCCVXR8KE4eQYEERpHBVWBP9Zyo8pgg1SJjXdFq",
  "key5": "5EQY1txzjSAGbT2bAHTGFiqAVTUPwVnZDHv62KSyyNqXETdkhTYJyyZnmu3BUBahUBozi7sdMKR8qMtyRHYMJaJj",
  "key6": "641zAEzf3WY7EWw2YwBLtqu5UoGzSKMgGecpturdQEhy5kDq5FU1wYsFjzVwsPLJa3mJHdg4DurCayMFKMPmKPch",
  "key7": "56Uf2GwfeNihGdoXViGqEwdDQAAVKoPLFVZb5PCpF3cKNddPRbE6NnYgqVXZmk1fncVWzUUyLqV9uECQzTonetqq",
  "key8": "66mQfc2pYjeiG7Qkd2gckFR2PYSH9bhFMysnDSkPU6px1NxfHhPgDKm7RC8sR7zMn8y3rD4seux63DC3aPaWg1Me",
  "key9": "35J6LB1ux6xLAUEidq7EU3TE11FQqGf1kGNM5p1w7BAsmvrsZKE51bDE5KhexXXxZibpSxp6gLxPidVVy5tD5ck5",
  "key10": "4qVJiNjtbtrAVi7td8TujZvgp4dmWovvvSzV8dpNWeNmyxRExVwbmgmkTpoeRkquK75iGCNNYaFC7z4ufxy8gorN",
  "key11": "2UTet53yCgvjZ37LcRoDEhZCh6kMfUExfx51uCftJWXiL2sMMLv2U2zxJeabZsQHZB2b2pQVayauXXtvwWa5aec4",
  "key12": "Pst6AWd54v6x2yLbrJfMrXdNtEHg4Wa2ctTEa2fbJks8EAcaah9k2j5dSeEvrf43kgiMvCAKQeEQwGXNT5ReCco",
  "key13": "4eHtKttTEqCNM1jA71zrrfo2kxXMHUbfFoupWj4VeDSqEs5YcMRaRqk4geivRar5LcHWc8rTio6628hUaLQXovST",
  "key14": "3nusvxU8EP4xVZaD8LYANdvfjrAKzumNJ2FiyFVMZp1EbwZGNztaad5dWXEeAQUrViSJcGzucZL2HAssEfhZxqTk",
  "key15": "5z2EoeXUyF5t2tw6Q6qVD4hKy9cvPTzLMnnipusrkVgsMhehhYZGMV8Eb68QBX5qJjmRh5T1vb3Bz3HDxo59V995",
  "key16": "3S798f5WrigVX2jEvQsUmMsc3Dd3h4P5o1HLhyUw3ehbvekKucTUgDcRUz73PXJBdQcKVJ3uqMJNtgV2oepaNTdC",
  "key17": "uoBg9mMtXvi9bCRhPysU8qUo7gwuNxqosDUNc5HDfy2s9zrRV2oxACUPRNpVB9zcJReQMYg1JMQF7eYfmfLPRNh",
  "key18": "2NzmY2dVfoWfw3pk7LRMsct6BP7zTTXJts52qCMBWkuQL3qiK7zDuaikyxiNsCM5ZV9AmobwB8KUTf6haWtFB1d",
  "key19": "2rnhixmJ5ttK8EFv3VrDCp2eJWSR3ECyrcuuAvTcJja2exogd8YuR4pcE1bJfyFUwpHeU1ZEd7BvECLCnCEeEp6c",
  "key20": "2EBsR5vCd61UyUpwEpUixtyPnuMWYRWgiDHDJHMpQzTvV9M5iwsjTXCaHsu58LytChY4iwoPUrGsK7FJhqubbcPD",
  "key21": "2eiTb5S4arwQWNQBwXd9TT1w6CHSXPSnSnyJG6bF74sFKMX9qRcSQHKzw98HfYzYmPwqh3aeqksGzLhieQK6Mpa1",
  "key22": "eGBqbx2z27axCQzNdVUkPB78CwBLiW4BZ1RY3AJnKwMd9jJ62bs1sX2rmswMjp8fWDexnfGcrdMs5cXT44KYMof",
  "key23": "2iH1XHHvzryMy8qYCndPSZqBUBzMp6aVJqTk92Q7T853XV17vdGtC6MEt28i4d6sF94CsYxZ7xo8b1GKmkD3jv3x",
  "key24": "21p2WmppvahmpGyqS2i2BxH1aWFiauqPyjR2P4Qke76pmw9qZq9EX6x3r7dp7T6JgB6w5vjGDoNWKmL88VzzVaLx",
  "key25": "5ZPJDeYMSnfLNFyNKkRYgoo3x1PHiQMEC8SEHhAXy3reHeiQZ4s8NiYM3uEVYCk7qZo2o7T7fUB3ctTT3WBUT6ez",
  "key26": "2BH7XQTwpYKNX3JoUXQAY79CpSGzxDkeCe49azBGxQGGu9gk8uKedSRhyzDK438ngwki4mayqZEidTHovX4w15oZ",
  "key27": "5SimRG9fFG1m4w3zfgNCeeLhXqZd2cSe6Z7wS2tMUB4AqVMR6n2obHwSfemwWffnCymaVVBq1sBSooVybiSekcUy",
  "key28": "4uSssN71Ekz8ast9iJ4HW3scTximYxfJHnNxJ5kCxF1Wx3gEMDPAdCsuSHz5GQxcFfjF4MV4k2V6d52VWnoVHpEx",
  "key29": "eaiGkAvdKHiC352UpmcvHvzYg6kACwmQyUChdbmym93hAnanb37Sa7pdMapFxB53qnHpGfMkNQk4h9AyDwbYKJF",
  "key30": "WpsX1RcVUfJ8U3naTUfmTSCEAPdN1bEGJGQE39EZh3DCqXQsXvMdHvakZGLGtuD8HA2ebpdrTeejwFY6FzGquet",
  "key31": "5Q2d7hMFSJjq2UeztEpMzZEnznomaDgUrvQGbYZKhLaxJcTxQhedxMvERceqfi5yPsysL1VgAWxLPJCmgLzS2VNE",
  "key32": "5PdfWDBqUzDhBxJCuvg8K4qMWGnU2DAvVBzXwJTgEVNzPZk5XnG8uvWZVaZQpu6Rk5WVw9HQYfRwaGWZuBzSGF7L",
  "key33": "K7nFimDmesot34Z8nzdFPx4Nd76XBtjcP5G5TwpCwvD77C19s9STqLTWLqqRRH2WxQBrZpBbhGNaHJQVFQXAp1L",
  "key34": "37Ca7ZPWUBPJbri7itEsc48VkVvetT9T4auVAHZPQLBtcHkE4jLn7ptdWbrd96yty1ib9APqouHDNN6ZH5t32xWL"
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
