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
    "3UDfYppWMqDwP81NvvVFTg4QxRd2N73seJJkZ4Ctm5hGpUsaEV4vr9w3hKKiaBydtE7VKZBCNsdXBK9dZJSn6uJN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51vqTve2CbXVGwC7G3npsvFbyMrLBsMKaE8R3hmDx5Vn8VEfndrM1et7rbhvkqnEjfp4fXNRbVKmLXArjmE7KPik",
  "key1": "4bXbV2JZRfQrxKXBtJEHdWTAVCadwA8A8n5Wu6VnUGHTXTYWidhKDgtxeiXWxmCgvTPBuMLybchfSEycF4sZbpga",
  "key2": "2VxGXauw787wPSSBbR5KEVKgCf4Wm84yyv4cndNGTjfrK2Exkpe9M7dFgjP1vxHqPnxVkxiihTvZpekD6yUJpBz8",
  "key3": "2PHgDwM4WTxTiJ99WfLyCUPcjjHhkFs3qGXYqVmpiZGf7CbTawXZNWQEeqyUmeNmgPvp61sHisgHLMdfAH9nxiMM",
  "key4": "48ARGRXNr41EySUjFGCK8VeKHy3tNu7bo2m5B6MgspUn7DSpkSCiqU5sk46Jd6eU4XVEsUjyqxCcvK62PhXSxKje",
  "key5": "7iEHXs3ggorNKvcF429sxhBHLAJ5GUS77R8tEoUyfCGsDQsmo4ScT1uXkyeQDkyWoe5qsGtmJBMGGHXu3X7vNmx",
  "key6": "3X5ZMQ8rCd4YJn8wuLaBdF9KhSmnhmDt83x1CBCh1PrgE15t3cDg7n3RRwTtbUmAg74E794FgTE97hvjPVWjYcYB",
  "key7": "4SWYXKFFsv9cCWJLsSM3vXSABkVinuxUAzJaCqLAVA3At2FDC1abKRdX3DPpHrbZr9PfxLrgDgrroS7cRDUxNGhg",
  "key8": "3CGUe8RA9m6Lp172tEHRFeiRH5CezV15cVoHCBFZZga5nnhjXn45zrXojppEMLDMGwWRn6TPkJfe465nGgqc3C8i",
  "key9": "2rfjuhhiePpBa9F632y64p1KTkE7aLEVJcECaGVwmFMVBeCoKjRwtBapyzzS9vRRfCqSrpWMeGcuwdwuoKtNZt4y",
  "key10": "3HaAPDYhaUdKDdmvHKzqdU5apUAcpQ5PUice2qouiFXKx2nAH8fEkftRmo8akAPw5ZdpcX9gYWdRLz9T8hyonnPz",
  "key11": "2C5eLA7Mwmg43AL3H7Vaqx6KWQquwRsm6HxLM7oqiCxXFcR3diY5WZfhrcVSN9Fs3BHW6yEeer6nZTb7e5ij2uXB",
  "key12": "3CgAPLuXSnxfueqE4t3aYbHKuX1ND2UqJHMiXx5fVVAf8q6aVG2Y6KjjXhQjxzRGBwLSCayL9dsZcL4ucPLAAYrU",
  "key13": "5JSEWpLXUFmjk5qUiDqkoYFYGRey39c8qW3G5BCY2qij7D1RXt7sPsigNcU9SgzuezZkL8ZgNKqEcdxXbArvR4zY",
  "key14": "3bgrFFgKHcnrmDApy79F5y7v4oyvH33uTPJVY1jp8A9XQN5Y94G8tbeF8zsp17Cdkzp4qMUyftiWmZCMXpN8WU9F",
  "key15": "bu3taDr5XsYUNVCv69EStd6E2QStFLPW2nPNi3y7ErTEptFBBrVRXz4vaqcnEbp4FEr4SNs6953pGkM4DcbHM3P",
  "key16": "3bAfKGYMrmZ1vJqe3sSPiURHzRMS1kvMiZrHDn6vx1VtACaTr3jJdHuvTAF9qT6TbPaTG3WGGo22Wma7yBzL2mK7",
  "key17": "4HX4VkkU42LBVuLMRUcyVBrXpPmdn6NYJ1dWYdViESMo4JetnbUBPtWpzacmR9T4ZoykGtZzrPSowz1Cw8f2uo9M",
  "key18": "4CFJy2zGws7qDUuaS4jXTCaSDZQ9Pg5MsSnrCf8xCyLvhzmd1taNdX4ebx7L6tMWQnHzE2yhDc6gNK6V7LRnZtSg",
  "key19": "2d2f1omnQEgR48cSzdEGg84b1cHMThdjc1kG8usLiLp9DYg4fdz3XakgYzG8gpT9ESsmNrQTvRBzFm9u6965YSFG",
  "key20": "5B2UcM9gKPBpFzYfMJKkZEmgohqErYiBnuZPyxQ8cdvRMgxsCUwWuFKn5tAwZryFGe8WevGfbioR7qhWJM5UKnQn",
  "key21": "2usgQWui4T8MwDsbtzQRjWrzr7byz5LHpaUaEyerf49xhRCGrWCV8nTS8FGjdQFDgJqVQUZeWfgtPtdW8X3tzqcN",
  "key22": "4kke531nCXLxiGETdYQPYZRC6gbUenAFsQVMBtq5ye4mZLobKJGtQfb6ujHChxikdveiN3amc8W7eZRfATg3LX5z",
  "key23": "2hffNG2RkRdRzaSZ6ukjMT1Nj9KDEMJpwu4oyxxgMcU4Dqm9qmxdeT1a6B8AfeHr8BKYjbYFY5Gv3uqK161RK2t2",
  "key24": "puYpvg9h22CrhrdDJcSbSXQaA3AQ2QEAungMutMLyV8LWW3fmApSyY1KXLdPcVz4AkNEQvkjBFV4XewpBze6ZnD",
  "key25": "56pajZcN3kdwnr2Pe7JFLAntk88p8SU3djo2k8NcpNea9zZgh7FAMJqGUWFFzRhHngVWuHb5TxMFz4QSDpqiGvk",
  "key26": "5ssW4iHfXCigwxtWZgWcSLSorNm9USQP9nF7xK9HpMsY3mb2hey1BaJy5e5c14ZK2Ya9DKc4Dd6KnYZre2LipVvW",
  "key27": "3MAKqLtSQUygwWaNrxBSZ52iuhbFR6fGwkC97hNasy8cFQw2bAepFiunajDZkQR2DCKTMsB6t2VgeKFvbYcGzxdp",
  "key28": "5nAsfFVrR5tpVG2eB43Cg4wT9kEEYy8Ldnyz5g8Wg4WYUM31Z1xVv3S35CtyieRx4VrdMFL4EX7koPdREJ7VJD4B",
  "key29": "37EcyoLS7gEAjraFS2CeuVfHC7NzkfKuMtATA8f4rm4T6jFAi3vpLJMGTkzumk8MS7jStycSzi1zLdQS1XPdK2ck",
  "key30": "3YWR3ceHwfJMgxypDj4aj7wDoRe7LVdvGxPEuiVXEh7dScjXwjzis6EeWeWfuKB6YjFH2V9QnGAFb8rYVPwtuNAV",
  "key31": "64GJMFNSrk2XegvbipefwFdJxtYPY9WaV43hgjgWrh5Fk4cfnoo6EWXSVek6ouf3Yvzx2TNUW8Vy4TMtekA3HLsE",
  "key32": "4X8ju5PLNxSp6KbtxfFzdYxN8UriprWYBrtQ9BoSjZ5LUJV5YbhLFxDgcztBE9ZYDm2WyWKL9RqqEr4zrNgd6ovy",
  "key33": "m6Z55uTA1YspZyyueySeRkZuTVyyRMJkbhxoAednWWH2nAcmz5yaJ4kmUkEunHJmWwfRXfds33RHGCuGzPMb6kg",
  "key34": "4N5jKM7ngzgm2bzXW5et158wRk8NJ9JrkvegfHtCsVbLvEscnVy2d28WzFYniMUycQ8vRw4bnonmcwRqCz5jX2d9",
  "key35": "4wrwFv157vc9FP21JWv2gMpeLNJvrZ4im4gptEGDFkngGJEqiczKFq6YGdgDPqi1ZPHuy4eXPMxnBzhyKFiQttDk",
  "key36": "4okRi4eXTEzBGRdo2XbYbjdBfyS4qetRkUVEB7obAKEWrzhzSNYs2ePo36xKjHfZTWe9phuwu77EmoUkSUM4tV9C",
  "key37": "2yGDGTo66JgzDt1kxNwsfzMMvzq2uxqaQt5noWt4vZpm38S2Uj9fSFRgshcF3gFNo9br93tDXXfJZ4DibdGop979",
  "key38": "4JMAnM2tyrf4CEMXsCr7o2GsQPMmib5r2FHYvzTNV8Pmps2vwgxMFhBJJe2GMnSdysqviwEmJuyMt84kFqf5kwbd",
  "key39": "3jfsuD2pZSstBCeqgX18cohrLpPm3q8aAneRCG5Gg8M2V1Ws7hHyRBAMByLsaF7brzRRApsybjfZdfdwnfDJvFtT",
  "key40": "3L41a35vjxbwgJQFFL6oZibtBGd7VZLmUKYkMLaWxxLyajErtwunmsJ4VLtZCUXuwGGkSCNxBUbiym4KJhgkp2xt",
  "key41": "4GcCdcSBsWwzk5oCFQMNQ2RXfympiNsgR8tmbwQ32jeXZDh3F6XiWLUmPnvUnBq6eGhdqnbqs4TBP62cSUYW1f3P",
  "key42": "nsqUzWpnGGGUAJwvkqu6xvLtWh9MxaqKGDAAzphgKMXUAsCeGFa3zCFj9RrfACiqZrHuXPfUA73cyLrqxsgmvfZ"
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
