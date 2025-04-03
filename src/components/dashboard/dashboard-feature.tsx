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
    "5ndY4bvV7bUekVp8xGHxNk3PUL5odXtBa8qrNUMo5u1rSQebQN7haee1zsUpYsRVjYsfhHnM6uwUakq248NYnEtX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "k1NwZvnhwcrX1xr1VM8Bq5SK4KsRTZQr3Ma9V7e6HEib8jY8rMyHhxd3EpPK233wuAFdHyQm4ec3EFmV5edyq4W",
  "key1": "4yZe2HPgM2hDQGfN84LPR7fonpuAi1h2SUNeMq33eNb43W3VPwfbysrvjMo92dsiQ56JKY9Bmjpggd2no1boWgxp",
  "key2": "VvLNXaitjwqke982N1jsS9VPcdWLCS9yh2rcfjNX7Go6ZxnFFeRKXsyYytLYeYmCuQd3eTNA4zHPq5qCQTQKsW8",
  "key3": "S5ErzcjVXyddEXnfYXyBdBSwAYb1RSY3BUPFttSceqpo9cvsvFuuUDnVbuvHNCt9vGjG5GdgBNbxbibd4X66AAn",
  "key4": "5ZdgtJe5i9byapp1tZUZirUJBRQKQPrsC4JDsSvBsS2qYXftgLgC1gCbriM9qXd5uj1hDWuZUCY6HGfDrHozHTfo",
  "key5": "BNpFQFFENqwRpfgRDMxhpNBesYqwUXJ2rCDss56t9tKALkvuq6vHX6S7RYBwm1vBXSqtjZaecQxg4DaNR8R4TQH",
  "key6": "3U8TJuSaitTjr5e6WjHXTzEse3oJtL8gS8NsVNWnbJFKNRXnbFwwtgmC8z6j5HpW7paqWhwTy1igzBuRMuSo3UbJ",
  "key7": "2epYkXWQVJbSS3HvuSqSpcLedtKAUnBv4SgjUQ4yTu5emiuuPHsm5iRMnzd2LUXYZrygu8FKJukWJBQ3dSqnPeDy",
  "key8": "hq8un8TUkqAM6aa8wKbL4GZgHZ32Q5CGFs3aRqFQNii9B7gobt1yTHgteQCbqng3dT5aEttc3CDC7VLQwrHJsTB",
  "key9": "hBZT9juJTPtCeBokjRgP9mYQwUhojAiASrqJSV2oUhv9bQgQZHAZ1nGZaz8reWPdQBuwSBMAgwumkeh3p6Rjo7D",
  "key10": "4ynccnqgDsSAEZFeD2Jfdp7W2QDzeMMpkAPemPDkBs7w6CmZoPKRY6cT93ZBdXjrtQNuEGk8QMLDwsBdzYb5PePy",
  "key11": "f3jDiu9r9kJZnvxJjYFjvdALjpUnh3ZNbjKJvpLq8xQVAyjegd7HJMQB5joY4vXB1JAZo27DsXbvEwiswA9Com9",
  "key12": "635P1Lty2TGA2AxLn6pzQHpYXRzzSmaaw3e8uwiMVt7pCD3m1eXeFmd7ueZ13Quas54kswm4bGrVYSd4nHCLgf9e",
  "key13": "3k4rdCcPf7wLUR6aZUp3KMJmHw7F1RLGz3HC2T9mUtE5zUm2eEb3dDoPvrxZvEs8CCLbekZx8fPuptGBXGWsUXPC",
  "key14": "4rmke657KDgVPQSiqvLfZ2LLZLYS1BwcsnwX8RkG9rE4Q9XQ687XANSzfuDu5vvwtJB5Fb4yEgMCkSJjhxGfPEGM",
  "key15": "HtDUqxsckJCQzLJvGtrmsgRp175ehk9KrF1EMYKWHVWnGaoUpvJ6YzNJFBGM59Fmiw3EdxBQ1TgYLt6ywrUCgKg",
  "key16": "F2GsAR4NeXTRMrYsAHBt2BLSYV1jcA62pdX4REC9GzbmDBEEJNjCABevijoyAnYd1FHCTW78sBPo1iMYsHRUWLT",
  "key17": "323pENPqvyvwwL4E7jURAwU9H2rqZK6UPkXUWLTmrd4PQKQKbEedfX8BRwuNeQafA6bq95kbX9DsQWDYhyBPh18w",
  "key18": "5nozaZJ4c79ykhHMCHNUYq4EXG8mu5tHk9WWirZXBiQT9b4bt6i3KycxKwLsQXS8K3b11GKbtAdKJpmv2ibdQRAb",
  "key19": "43etw3DzYC8SEV1Y9yfdsEMLULvr3GtBxrJ5ZVqtRAzGTHxYbRLzkA95DJn6JXdKi9WwppGgaasg7PNf8NNxFQ7V",
  "key20": "2SYVmAs5w7Gnrj6QBN9TU4qciTgfAiRbovrGh2s6ZUsYMig83HvSy6gBiQos4uPoifDqVTkVPY4gJQJ3kxUWgDZH",
  "key21": "ZYkjM1WqbgcS6seGwxd7LKRpca7SQzmPAAuwZcAZE18EwLutFSaf2fSjHa3rD9dqM5dcEXX34gv7hFEXEPg3S86",
  "key22": "KStWKxMiEWiNpviQAEpwUorabJ7DhpBq3dQL7eGcyUvBrQRo62PicCWU63S6N5RNrbLoYPAPE6fccDddbyZoSfd",
  "key23": "3yeTCiqyvEKp1mGd4ebt4EUHZUnBmye7HVrkzvuhx9WcBPfwBnbrAwgmqU17dMJaa6KkjM77yQe6SwdmkmvsvBx2",
  "key24": "3aedsrxPSMRBQXhMAMiR1nb8jYwU27NFF9sJqc5XkKBf2KMG4nb53w8Yp8errYwakj6hB7bkKxZAmMuQEGpwgSow",
  "key25": "5bf6bkY7DXBBdXTtTLz2p36huwXXFBiYNGNyQ8HgBz6c7PN2YVugmwRNn3wdCgx3kBvjFNyWqoVgdb4qyLjbh1zZ",
  "key26": "nfEbvt2Q3Vjmg2epn46dxehrvghWxkJuurUAXjWVstfko3B1s1GNfDF7C7EyLPnyiTPN61EV64N45NLSsk9zujL",
  "key27": "5sgWvJ6P9pnpkgcnVFYDrSSBToVDfL7tR4BsCByxJn54UdZDkprhDZbrBuJjwffHbt97QWsnqkoSSogrYrF4NQSk",
  "key28": "4bGHeh927EiRe4wiEB7qTZBXZfEeJx2q3ATXGj7D4oyyZE4FshYtwqU8gDoWius34Sjn5wiansVZHrqRBSUFBFSP",
  "key29": "3Ln1oERCq74q4WHWhYciw6hdQWCV4v3A82SHfhae5d5BB18dADwrfAoxQptRHy4hHebU8kTVukxmZLsWAKcFyXa2",
  "key30": "5kVmDkfkY8TLNpZqCmeaEC6hGoHxdpSttRDoqyEHjUFokHCjhGFKwrXNJSNsyQfedChAiHwCoU2yrXshbVnD66Lq",
  "key31": "3GyurS81tWRAWH5XftfLrZ3itHNsoKHi1WtQmZSqxyR8nnoAG41i9ZDzR94MNvgvhMinF1BvttoEB32dUC8KiyX4",
  "key32": "2f7njEtF3rvTScg5M8uTxUtHLFDbEuoYG4kuba64TBFFNbXHb8FHVjSvuAfCK67gfCaAeR2LcaWasKp72E3K26SZ",
  "key33": "4qk1UH758ajRb1S7C9Mmt1sUcZ8zCHX4AJiJEiMeybwT7nQTEuP8vAq1pPa1aMyfnmJTQ7cDspkipVXY6h3sj7fV",
  "key34": "r1cCTr28yzDH4cvK3XdT2FAwVrQSpBMN83LANkPPvtzkvUAp1Bdk9GrLV1wgAWZWP6gjHMtsBcejpE8Q54S8wrx",
  "key35": "35aQtJe7qm4QiTXUfh77mtBHrJ2o9Bb4uUBmUATr2KwSfNncMfTwvH5JtNjPa4yGsNwscMGACWDBfFWYL4F61Hqr",
  "key36": "4arQ8hWKFMqyX4QVWCi4ezBjwbmHDV5qr617mumFFQUNkUKMu1FtyXMiWeRxeLuYc5WHSTkd7tVp1mMX3sr5XgLp",
  "key37": "43tJ3LgFzT7MMVttVGap18JynVNWpDsxYDAozftWKUqyuE4qb9a5g9qK1jLhRQd3i4ZRUzexVRSCxKiV6qHoxBdW",
  "key38": "2tcGLNw9z4mpJzzGnRdHy7AdgmQvrDF1k58bS1sGyMYLH6hErU522iQTyJR732tYzUZiV44kC1Y7QP1P4yksDps6",
  "key39": "Zg4TE7RCffvDEoMaVY42KV1byYtgJyytk155cqytURjc2vsrxa5pb8bwLnWX3vFy9hHnfCtGsR2TVFs7WmDs8nv",
  "key40": "4Go4GQNAygznvi8vhTSyQSFvHAAB2WJhMaDj3hsbpg71NNpvQTKsJFH1AsVuH1uZNYGkHozjwRyXFfcxch5kZH4f",
  "key41": "2JEJSzCNWbfvw9mN8JCdECtYMSytJDgwkeDKYw9rXFXQeC6EBVYhCXkcsZrMZJoW92QgcxYecgJ3WEWSPFarWuRL"
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
