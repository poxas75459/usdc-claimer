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
    "vsNTyMj55ipSVy8TNWQJGZzMb1b74LWGbQfDNouFNuLSGWs3HnYGNU8j2CCcnE25jfMSmFV9WV5niF4pqNNh1bp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3QcK7gsX6487m8ucaLLQRsDMUJ5cMBFFQnuyKkbza2FgJFnfEE84fHdaYKnQaMbP2FFy2ovB24kb4YVLUNeG4SN7",
  "key1": "3yvYjzpGj1XRAKnn5JxpEtcPRQSkgWe1VsmrZMKcvauY5DPxqmttSCPdmXAmXEGrMKmzB2Cas3jUF1KcfWSrLWnV",
  "key2": "EbREBoBQnKapRoxd7WfkqJ7fKH56rXKQeHXVEnRMjwBEgHUc6Z6xsemT73GpzZeRQRsNqMdNRZEC752Fq7gGY8B",
  "key3": "3M4TCjdGMJ1guM2Xkm9Am89GoLRatRMQY7bsiKh997XKVZnENSBGQHga2aaFaYBkJVtoFgVMgbdfzv2oLhH6xbPz",
  "key4": "2DCLTJ7pVp3enJtWPCmwcAK1i6N4JgoZ1sV3ZZyTtuEg5HeUkgszNTeqz9zoEKxHvp5QWrqEQDaKrMTAMeTxbx4N",
  "key5": "2RSDe8aQC8jUTRpjXpeVBT2sz8aSzHUVky8TKVFFFQgYGijma8uDAixV8ViYWNxAWPV8Evk3nuCn6QijpQgh1Lvo",
  "key6": "YeQkQDcULPNXpKra2ShujZZ9qmvX4QcastBVYFhYrNtShgCmzU9cKjFcSbxjz9bZg4EfMNRp4U7ysm5pZTvE4Tc",
  "key7": "4bRxzZq74uxqWN5tdz3SCAzCoVtS8yzMFBLvFDNbUbu8i2Tr6yeMFMKroZXs5JY7156cagX4WEt1XA5xxP28gXL9",
  "key8": "29t6XgyupVwQX7hwmGcxbtqcumahBJPFK88e497s4ZNktpBGaPARAaQf76KtTDXXCnWPoDrKTHPj4acmVJfHZnz1",
  "key9": "5MnKc3QgiMh5MNvzEmJqXGXvfUDL3kv4G9SshiVtGUn3b2G4gPwzdsDVXz5PjhW4eXRcQFj2AcwXBVPe6c6oYVeZ",
  "key10": "4WbknLpS6AEwVPW9Y8QuShdgzjj6SSgnrHSz1tk9ZJdKMgQjUZ56XPM6puRfbsas5LBLiFh4Z4t5YZ652vGtXSEb",
  "key11": "3QJGr1Z1GNSAprZpcacUs4BHNuBMvE8HMAbCG3zR6SGgBuaNy4Ls2KafzSfWXVgFYGi138t2Kv8Dukr7N5dujHcC",
  "key12": "3DQZxX3pfMefs1F5SNcMrmfSL1r9RkS6yg5vFZPwJjXRVzVLiDYn35jhreatR7obTT5aFPpX4hWFMnHieKXbqnig",
  "key13": "3qEKapYgdBEzt464oeez9AWs16eUPYoBhCdEsEj4Zm44ggCGajtLxQWKK4CqxfxmqWgdnjhARZwtr7nP8U4W9VGW",
  "key14": "4SW9sBNXtbSub7HG79HVh3VVoFFspz3BdePssWe9DUkBktzGAfri2ui8uCsc6T12Pu88vQLLbRU1CVC8GUVhL5Dm",
  "key15": "2dPC35AqbCAy4RoJxr9MvfLJaRhBFnP7xh8LUb6k8ZkoFUdaD5YpiYmJfK8b4HGvRNWeuh7G3LCGh9m4VGeD8kMX",
  "key16": "2Nogvjgx63GpaqCErZfsTECFVydKznJEhBb1j1kL8pdcAbiTWGELQbnW8eT2U4rSs4QSc3sw4gZiaR4Si9Tx3t6N",
  "key17": "47TwyKjqNTcpzdUk8Q6EqjgXrXQHHMd8pNuX5jqNRhy29prYNLmEseR3ZN41cp7GWZu5BhkVr91wSWDneaHCfX1t",
  "key18": "43cTceQB1A8sJj2UYgKPF3XTDPU3itFsTZpDyDrRLPBMSoH6YTT1co2ZHzwSxxBF4EEqLFffotyRN54v2gqhKEj",
  "key19": "5HewYNGtKUwcNSNH8t5C6nvaLXKGsHRrtfryEhxKVk651EN5MUjwFDgw3HskoWwqiMoDQVhtGbJ9F7Ut3KSBTh3N",
  "key20": "4dQyMfrWRVrMEPDbmNkDXxp1ggH3Nk6F9DzcX6L3KnJjGTGeCGmQfsxPfCnBdA578J2AgHdETRhmCoNteqqi7zBB",
  "key21": "5t52xtVVeuykSwKbhFrkx3qzk5owJx1xoXoZCMUAgdiT92QwmD69hN2yLij36eoqcnceEumyntNqKrrvfo1xU4Qx",
  "key22": "3hYA6G8xHzzVrBYus4KKppfrJ1PjvGZqvkdDSxa3fvQPpNapj1nmwiW2J77Wmht5CwekJu4R42cYQj6EqiY3WezU",
  "key23": "2ux2eVN5ndGhVcSMBawJxFUKxDB8XVDrb7fRWEaL1B5bxcuoGdHZMifUzkSSQhWyuZWrzCStUbteCkWc2YmwAgkH",
  "key24": "4RnPSkVaZnG71hwnbeeSJvGs6PGhGJtpyQujWg1L68DnvNQasFwh2L1gTvWike7XL6uZyXf4zaMm3CuRAxCd5FG",
  "key25": "27YUAiijyE9369qmjp6Q3HSD9M8X2UWUuiUGRFgbooQXo7b7khSM8Y2XPMHoJPSvKPFtQLeHFUyL4MiYMqZYGWcd",
  "key26": "4geAFcEMbdUFMqUu3sARataWJ9chkgMYE4pPAmdyK9WE1Syv9WWtt5n2vqhRr6W7HcgwVBLyGKv9sCTtfLJTRXiw",
  "key27": "BDbqh3NrVcpH8HRCiE7XW23EpssacYqhBsBHwbn7xvQ7Ems2sLvdkXksKVLzp2M5RzLzu4HepPMFZucBDZP7hZD",
  "key28": "4DuyD1ecd6C8NbqtBzuB6CkhfCWGqXXbFnWeA7GerXiQTHy868Nd1gKP6WziyCnzBq5dk8SBtLCCjjXGvK6S8UkU",
  "key29": "h1HAVWDNvgTQEgfbXs4Nxnd8ZLqLLDLRDkMyR4ZfCqehG2VYSTjZXSzZSHGYBFA9rKAtThqL7hjRqhsSGaTFidq",
  "key30": "4Yg87SQLrjYMvNpuZWQZGdbCqkFqjmbMvktw64ZqUHFaLWpXdMRYboHuSzvK5qzMhbp4ieEBXFZnSJWgM1Uo9ydL",
  "key31": "3tTQJFt7EczkPhBTwYbmTJNRdZdTeg16aLfZCZbX2CvUXnUm8v2tV4iz1f6qNr2ii4YhxFgzNMj1EtYCJgTAPVE9",
  "key32": "4EEE4R1rJRAcr3nw4DXxUqFsxN6ssF4wYNf8SzJqh1hBS3v42ntohc6oN4t7XyJNJaaWHsSxhfLGp3AdnASvysNU",
  "key33": "34M631v3t1ueHudFvJoWfyqRYx9CsCkhh4ceLrRQwW8wNeuCRpvACvzznYVYeUG16Yx2STm6hdvi5wmcFHGiRKxR",
  "key34": "4k2SYoi8obFDMm6xu5FUjbLvDQfLLGA5xhejJdTmFncb3bwC5siSi59xFZzkuJ7FJoZCVh9743YT3j7jx3Ftrfxx",
  "key35": "4s2L9LXamgERr1nXuNvc8vt9p5TwW9Y31deF86MH3x5fNTQGEADYjjgYvuEgNaxooETLcXvxWJXfYtXHya5wAnxa",
  "key36": "Zjsjnwh6xoZQZFXBy6gpuvDoeYxAmQ66eDQ9KqdSv1MPDGmSC2eSzGqwdENwbAzK5WWKpYjNfxrRoUWADcizLiH",
  "key37": "41MgLUBBzFx4V1cD6hfa7Xu2YmwPwxdmAhGm3r9hNByJyBRQNnwoF5CCTzMXU73YfVmN7mMDZscQYPxrMVeUghKu",
  "key38": "325Xz64CaAF4AmKZrgqZ48W5USfg3bGvxemfMPJkTh6ddxEx9gND7Hkgw1Fhz24xB39np54iyXzPPJwbWitGHcN4",
  "key39": "5cGEh1BaGhMBmNM8T1WCRXpxwmrUZLW1KQ9aL3WWDWUTYqP8UGVc473YAfMFEUwqMkxTJbf4bsAG6wUDAk8CNmxB",
  "key40": "3oWo8HLdTV44TbQqKNtWhFnsGKUXUmu7EPTxwV78NG6R6JAQPSZNQUwtTftHYbYQ27gkHbggMeXha5ykQY21fxP5",
  "key41": "4MsDDZvXcwjZUZcymbaCDjbfgs3ET7c5CR487bRPuKZ38G1tkSCgu6RvPNFitsVpNvRkQDRmt6zzxc8K75w6D23H",
  "key42": "47mv7KZuzwuRdmVZEcmy2kbGufikp9NZ2M6hX6HkfFFJtpHUJcFmXUxbwtRhYQTsDSJ3xW5dnye7gufCuK33aPJk",
  "key43": "5PybZ25c1oq41N29fnTmgZHRdP2XTGaDKanmoYX14dfUqri2xMWsspnBdCz7vHbzMwVoV3yx5n7FgcLztPaMsKpA",
  "key44": "3CUUSDBqpBjSLtHqbHNoKXZStnhVb45NG2mZ6fEwdddHc9NNkGGoKD7yk5S6vAFM5JqQ2vTcXXdF1Ye3n6tGkf9w",
  "key45": "32mRX39tqcpnZVF4e6WZLUw8sLHHpFSr4Jmy8nY4utmaoBf8SgibyuZ4a7QSojwQXZqqUWE2WfBtfGLTtDCs1wBE",
  "key46": "5FXc8EohEDhha66i4oXBMNV7JW8G1HUiynnk9oJCtzHZrVNdPSQU62U5qH6w98ypzPQyrStMheNzDAahy8468Vy",
  "key47": "5bW5upfZVfL2Ft6dW47FXVxAr7eRL1rqBfNQUk3XscxnqZsPd7WNxu1MBsGQXuRedQSJpARkGZmrN1SGtpHepKWB"
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
