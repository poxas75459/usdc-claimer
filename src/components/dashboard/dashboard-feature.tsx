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
    "54AMEuwAo1YgoXB6uTsfmmz3ubk5wrEzym4MJSCY1GaFQgAemnJwEzzCUgfqsKzKMe4aX7R2AtJSWC3FQd8hwGsG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AYrrp9fooZ5dvW29MQdhQEkCTQwLgVc4sGFQTUCgrfrAgudBLXu6ewGQ4DTpYjbyEqu2ytwzAptmCC9ikWjeVcY",
  "key1": "5SH9jm3Fh2sdfWQMHv1tnioPu9qzZgggDKbxsoLPJSFWdi74WSaZj8ehVSJapZFD6Xnng4GsUdPT6ZTCPbWRus4L",
  "key2": "33VRBzjG5quCoq6quKbYUxVECJTFgHXz8VqBu2yPzvzY6n5s2S1FiMaQtGt4XG2thKJpvXVs8F3ovbd8YQGJpRa",
  "key3": "4hEFr9i7zEPxFWCkvdu5jwfbboP6GGJ6KpDkjYz29n5zHAGwCKFguiJz82Ys8E3LtxTyoUBPwy46pysPRqsnAfkP",
  "key4": "4QhFhzds8jniBVcSALYPjKGsqDTHnhE6qZDpqgXvb5CGHnSWomUYNc2fUmRaaRMgyQ3JK94ya82LrX9tYoaDtVSM",
  "key5": "5Nz9uMPr9PvV42mKJ6WFCY6hf4iLC52W5NdZA1ATMszfKH5wJ1PnJ1fmGDKekVhQPMfLeLYiuHSMMKMs3yvT6t1B",
  "key6": "3A44eRG5bTzZW6BXUi9z519p2xpzVQdXGsEY6LyW2AXqyK3CNTJmdrYCUHC7eTrnTuRdAkzxhoiZgxfRXfneZsHv",
  "key7": "YMUJgybXxn1UeC6KnjdkamDURaXwrynLuHR1Gnc6Ayg8NTqqGeWC4NHPNXoZq3teo9WvG7G3mRQEdKvLxHyzqv5",
  "key8": "38jATkwtFRnkRwBxQNZ16dT5unPu96oYW5uoXmKc6kLZUwRWtdMcGJsEU48zwAekaBjWXR2b8CqXrgBNmcS4sbhB",
  "key9": "RsvFxJqv7Tx6UGFBiNrBGAHVtt6C5sKuBbs1cCERbCtPS9aCkkS6CYC8PJ1p1XSm7v2XxMYZEd2sMt7soyzuN2U",
  "key10": "qHNU1beaFKvroH9KgmxQZ6U4S5UysrYXnxztiNBtwJ2YF7V4nB5UDHCqXCtMCE9KMBMsC1r4dpoCAi8aDwjjMoi",
  "key11": "3KfjabicM2akwmuLUZBNktQWGEfY8pwdsqk18p1rrm7A8Bn4JhQpunHcn7fvF15udDH5aiHdgx6NVjshbDyzsXCb",
  "key12": "4Mg7ay95rMqNbkS5h9tk9BnEFdaX5ciR93eBoGwrLWLGUjdSuGuBLAKrZjrsa7vYdFoNfk38W1pULZFnV5NPeM4i",
  "key13": "35ocs14C2UqXLDp8bQ2etQoH5AHQrcagiba9CEDsascXSxrPDX8KaJ8wQfCWD4X35YfJ9LYNhrdedLdPt3RkLRjd",
  "key14": "2emQEkt9dkC4VutiyyQuLEQNxo1Eg2a6YYn8dfCEQDrzhP15rLw6dmQBKH2mNeN46HrHUFJ8LZunHy59d2Q14Fy1",
  "key15": "5uzBFkT5mbYnhe2VhBr5ZKEXM31K4fkXEm5znkrfwwu6Zu6W8QTvAV666eR7SnqAAjD5Fgmdbq8JrU918BcYLdK9",
  "key16": "2LW2n2eJtF5oMNsygFrZ4L5QZ78Eh8J3d5Y8tA352qXGwwxusyTo3gagRGtskrjAGU6TtVpnfVa3ocxmkMEQMVSM",
  "key17": "2KKLiFHAv61ZWkmeevBjsLTzbRzSjX7axYZAiD5v186nbTGmPMzb1N6Qtxrj8LPHi3kv3gZS2uumh9f6dNkmnRPv",
  "key18": "4wwGd2QMaqwpeSx6biN9jktoin3SUJtS2zY8sVUfiDybWx4bjt7z1U4b5ZNvH9NiH4Jq36nhY9HTiLJiP48itwNC",
  "key19": "2Zp2wftbDTvoaeLbfgScCrAeS8p1mofrWpvBcgSn2S3ba848FMzvkGFmYNesM2sz2qaCnncfCf434kCAcGP1ZSxn",
  "key20": "5JFRNj7mGEMnc8kDikV2UhBDjgoXVW2NfgWf9crwd3aoR7CiaE1oKnDbycpKdLMQhPvfJjnau63L8sx6b7rmMtX5",
  "key21": "21ki5SA2QiPPMYScB6Ex3fQM3kfA4mDcQYh5a5xhZREDQy7VPiamuoEuTGYXZ4F9hRxyXbgKvfCQvEG7WtoEkCEz",
  "key22": "2amsMop8oqaUKEq4Wg4L4VxNUQNBqiCjqTJG4aRTbvbrsdCoCTpbkTTmYyTaRkcpC11TRqaFjAGzQP7KyzTotHkD",
  "key23": "67nx2dmhqWpoavQnMMASULcdRqJimDo9LeYjKjLvqqrd93BArjjXjjTAfW5jfTHSnYizu3jmErkfDc8xsbexVuc4",
  "key24": "56hzpiuyWwKdp8rzG4xvRGDsygNAYqYmFHvXc9xzCCrCAyvi6YgW3LR4zmAfjnhbJSTLcY4nHKbvhVpqRvxxL4RU",
  "key25": "N7wXpS2Ftb5KLmL33CWdisYfKLeTQ9DZVkhmM6mneD4MKvCyJ9fQytRFGtQxoJ2vzC3XgTuq5nHhbGt7RihthEV",
  "key26": "4cfBnjBr6j4aPXYrtYrU4yEv1QCnVSYcgfGimV3YaHeHW2cmG8QGqjNjAKz6FbWv3q2TkhGnMCpKmr7QwdVxENYz",
  "key27": "5jnFSEpoMptBMmXYaW2az6yad3k4Nx8DLRpCSms9ZuS7b8xkGwfXutMDMBvhmo7myBwzMHn9oxLgpUdB1P28RBMy",
  "key28": "5uV4MW2gX6mN8Kz5DCnK8K598scxrFpZco7jME3w1W85kxAEYiiMYU2a753dQV2WGTLCfZ9nbTBjCYBjvZxbks2",
  "key29": "iHD3EAw3Cq9iw5sxRH15bhEGZFRL2jmsgindaCnLaynLrVgxK73EeZDUXYjgpYNqQEDpvawZjB6t57GtTtQLTTA",
  "key30": "5d8zVSphykmipAB3SbSifJMa4sSeiAPhqe2rRPNTXSzEBixYVcnimFfdRzDkVBDZ9pTg5pGBuskBLjjtpe99gF7g",
  "key31": "T4U6XSR6S2sp8UGRjTZhhJ8mA99utSFKP7mRNyaLpzin6bV9aw8Mvvi12KWgmQY9bi9uFF5UVtm5vmi5EciTgym",
  "key32": "5SogQjJrj33XR3Hw2LLGwA1Ed3MVyiKcN7gYZCDXYNo4DxKCq92MUuGCGNReLyjQMDv9uVGtWRtokmbae3vC4Xvy",
  "key33": "4vSDqhCcr6MM7E7c2zSFN4gNV3Gi4RfPHVXFhqSBy5jBxNivxtB8jiHzP1dQ5Xw1kmDEjgv5MRtqmC5KB5XvXn1K",
  "key34": "27rZjDFca6CqPcd1NCFT1QXJMm9t5AhzL3iFFhG1EHSkW9zxgakQS8epuhRvyJhg1MRQ423FcWvTMUCgXPjocotL",
  "key35": "4DMQMWmGCCq9L5DMRjbcxqaRENotU3u1Pv8XA1dKe8JtwbLDDsHKsVPZTb36KKe4iftAYNxfQaBrRm9ZdBu8AG5T",
  "key36": "2K7ksjh4n6XEzmGPAcvr6hntDnDJTGPEqA4bj4Ahi2V2QFX1xnGbmTBgKLDz5fBoMJw29gHhAgVaJmYAdwZFGVoD",
  "key37": "4feCD9JLpaN1f4QjZBKMrg1RCdc46gFk2FVhtRwoDJVBT4vG7b6R2LR2iA6ew8fk9CQyPPm8beVX925W6sk3HzZZ",
  "key38": "5F4W7Jo3Vy3YtGG7VCS5ADsHoKxEB3V291zgZmVPrAUGnBszri4Rg6WGZXiA9DMaBuqC7p1MiSGEukjDhefPhKPC",
  "key39": "wfMUwe2gjBqMPacerN1CUoyzgD3Tygqz9Z6x9YmDeyJNFgMkjDCvn8ju8XXjvMX27wkEgLufP8pC6QN7o64gQ9v",
  "key40": "RrziV7V2n1FEzcCE2cCUMa9Wu49YC9rdJpgguqGhRzCZpxwHHg6tDcDZTh4WwyTPuVDQa4w8AfPy6nWsuHMUGWs",
  "key41": "5ZUpijv7orJCxNFPnxqivf7TnTSktBFtmKFSDT7PyYeLn2evzj9HHh97X42x8dPH8oHYCpCYUhP9EwESFwrhCfov",
  "key42": "37UYJ6djBbvbYbzzBQn2eGJemG9Amgfmmw29Qd2ZzRMhiGC4SU9Rf5j2EYGPLLKuxHEXknJ6UujeexkwQqghMu64",
  "key43": "2sJNojV8eQye2ghGNW9LRWB2ruFUK8d3cuvvEFUdqWB2T5RnmStniGJLxjA1JTkm9TfhoL1Nk4gRNMXFzLaj34w3",
  "key44": "38r1D461LZ8LVqUbbndWX7dZ8G3JkBWbrYfJSMPWmMeFcWVzSV7zZBxCWapkyyG6ZHocsEX8tSqFF12teWt1QeEQ",
  "key45": "252xFJRdNCbthqRraDj4d4QrtePqcm32WsPWFGvGR1cxTd1zkG3RYApvt6yHMWqMX5QkMZBZBZ7G5xrnRt8ibkka",
  "key46": "2SFMd996SGrxALFqWpn7KbNtT3nRuqXuHYF6PtWfhKvnHrqGgVPasT37wj6BVfovZiSD2Ywn5ZEdYsn2zDgQXyUE"
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
