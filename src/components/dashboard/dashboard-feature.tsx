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
    "2LhXfXSHEJL7rZQ6DkiABLqQw9PPaLwJdZzEixt8Z17uEWdY8yxfKNBahayobBdCi9FLRnHYT82vGsUkSUV6apQU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "g94rXco3DDYNgnNHpBNxQcoWiGj5ru4AuDdkGpRK5fVMJjvMLoCU9xG6M12dofGuz1u12KCRYsY5swsFicNus45",
  "key1": "3nagfFdY4sw6MJMjJNtWyu5cbDFUJE5WvpEHpdMHnzmYoUsB9dMbpYEeDfE1pFH7ZowJksPn7zGjNEYZadZpE2YL",
  "key2": "2UmBKteThhAeW2b1TNdPs7GxsCQn2JmFgn9oxHUqz1Si1sezUBKfbvsUdUVLiBBeqxQrHHdWqsW51kAhJFn14x51",
  "key3": "294cM9NH5X41kgRG2eDySyaugcJbupcjZGSru4XXipPe1CSoSczWcxvyzptN5yVDkkvRZomfVSMBnTJbgYWSgEHq",
  "key4": "DFb72p9qJBEc46MB2xtnevp6auCaFJ1FXFuvEUqPXp256NZNXmUf4R6K3zoAuKcKdqqwJSUfzWFAbmqhhZ5g4HQ",
  "key5": "2JNmf9kWsLPXrmjQLdEfRMeKn36hw1WghedBBDNMeut1nYcPnqhr4tWhB6zFC8MVc6WZUGH8qSqFSHZA7AknM1h7",
  "key6": "4qhqXFXLu6SFUrfvQEAvNTq6t7RXx2fj1YjFLy7dB4FfC7znRhKFiABuYbRJQWTekbkMDq9KZAH5xND56cERHN3J",
  "key7": "gATuAMh67W2F9P8y2FV2hnNkB815M5KGXouJrQ7Fp6nmUewfhbpbL4iyE3Lr2r7s59MxhjANZXSJaNrCDmEWFuo",
  "key8": "4TcW6qf6wotJgdfW9TR9UehzYudRsF5EGcApyenA8128SYxjMvxaKyFnSty5vJDFMnbxgbMofNiZiAF8f7Qq8uz1",
  "key9": "3NX2tY5hPyASEsKxPkhhTkKSPLd2ExyYuSPc1zn7nV8Gv9CxrazMcqqQCbmm2BVU3KzPBSpqvPy3Dckr6RdqwvWB",
  "key10": "4pzycAK326rgSDrUSzyLbdxb5fMkjVVVg1xWfwFMuTPhNDTAcKeCdsk4JZM7o4j2sVDUZz7ymnBGc6HAxnLit3cT",
  "key11": "21v8r96G1YWcBENionESTtVdkwQduBRC7chuQzzWRnzJdHJpYK7fAMFxuVoaqYak3wFrFvvfF7EHWVdogrdGPAp2",
  "key12": "5Q6hVjpjPzUKMsupLEVQks3Km6K3wFFKnt1QU2nUYqzgXEi7799aWqRK94p88RssGUDPSzCcWcj4EjgvwXe59kEW",
  "key13": "2FZQx6T18qhdJFyBoxyKGECurxt7LsFRVfWF1U2M5jXjHsZkrTeyf7SWsPVVXdH1SarhPPLoYd5Y56J9KXBBzya7",
  "key14": "3ta2RQ6pv8pRro2fseV4yVTyqJsEkdjG8usFRvM6ZE1qhthRDVQo2qPvr4LMUSrxz5ybXnuYm4C6QKFceNCJcDGS",
  "key15": "d4A1m1v9hoogvviJc1rancddkjqRNaduZ4MmNrwDcwfgcGee5b7oZEqNBmrGdD63qWEM6R4vCrpAwF7vGhfDs4P",
  "key16": "5dfq3XR1jkVy4NJ3a7dzp9HMvXrzxEb1hSCQdrBhHZvaSDdbeyVxsaEUCwNwbH81dQCYfDoePDjdUt9KFjdQEk81",
  "key17": "4uCkFgBMMVYZu2wqdp5LbciFM8JmdaFjSauDGTVAmNwC3NqkmHGXkN2XoQbrAdbjVdfNBeFeDsJV5YNjyvZAykDu",
  "key18": "2wgMo9DSCLhqtWFdS2d25JAvrpNGTBatPfiRNN2ppyEEsnrNNsRbJJhvng8dXD8Yx3jHNkc2SEfGNWAAALmB8dhs",
  "key19": "4KmCbfg9fPRdT9VqGyDPBuo6jt3aTE7SRpbTwWARgCq2JM8s2ATHt7mbbiczoKbbTu5rd12F3XmrKsCRw4huRHuK",
  "key20": "YHcAuNbjJ7cvADBuL6jT9DPiwvTEE4LGCmeAeziAqbaoYKbijHbSX4F6YcXG5xrPbhixehYM6Di98F8VNRDDUqT",
  "key21": "4317uQvJ8JkmtYy1aRTRzfH4Wn9HxahLPiFMe186FAejqD2fSqLD32LkaNR8ScrXNkqa3bJxT86uGq6iNdzDA1eg",
  "key22": "4YD5HKALGgbH4mJADAD28Z3ePgf1LxRftjTWCTCbDh4T4bE2ZMfg5HPZDZ4tkg3zSEpqGS8sTbhrqwapaqbrHbDs",
  "key23": "4MEgZ1s6hGcHgDpbPW3bSuJtxiAvLV5hHX2sDi1Xk3VoVL5p54KJAfPCZv7prJX3n9K8K4LtgzZuGzTb5X3eUGei",
  "key24": "3pu5i4YGpDFwzyTKHAGN4EBgR8LKLHFp7xNN726exQteRTftZJt7PUBDqzHTjzRN8ezLPkKfi752KgLATB6AD3QL",
  "key25": "2ZKAqe9jZ3ncSWrS6uKj13geGv4fHj8B9P82wUwmfsnd6oBRm8QnWi68bEyvUbcr8k8xRd7QnBQsiYcWi59si4CD",
  "key26": "4mGjLyYeif6PUMjtmaSGX3ZELPVtq8kBmxWzJSqygaDJZb2Tn6uhVB1AQNeG77ygPERhy2FX1CnAmufvAYW8FNWz",
  "key27": "4qCPdnppFu5cNmRxms7YSnhjHnxLZhL4F93EYWTLVXk3U6z7Svqett26u8WkufcgnAPov8ndHJpgZbUbTDEqwS8e",
  "key28": "KeYpMpjLGVj2J3D48Gu5uFr6Vs19A924ZJTN5yUYt1GqFzAinYc539KvY8VkRoQ9drWxbBksvxLSs58KoMzMnE8",
  "key29": "imQg1krv3yNT9DbXajZ7nujAw49shiwqEgHKdt4HjyBw9PNDgtcvzqxrdUh5Xr52vFxChLkkMxkmcwe2ECBg5mq",
  "key30": "PuBKJsc7MGSnAsFjZzNU1UweEBrMCGP9EeuZ7fV1g2CzqXVQkGaCtYewA5bfTThTZqyw7zMJqCAhbbo2A9QH6ti",
  "key31": "3Uh7z8wyfGZgLrf6Tqxkfggrbw8msTDKEnXowpaT3sKF2e6LWcLbue3T6t2r6g4iXfMAkmr5jFsw7NY3788AUWS9",
  "key32": "2evppfXcMbPf3xCyv9ZdSuTFrmoSGGguro54vfGSyHtoKFyWYnzmXEtGrx1T6nh4HXhLeGjk5c2agntiFpUfA88w",
  "key33": "SSjYMdUawWVStCZ7d2yyA2xMYjpCRXFYPYXTYkrcS2QayYPKGEepRBE5PjVUFpTk5VQjL3CsgCw2jmqGsUmmxre",
  "key34": "65iBzhUS7ohQYsjNY5csgX2vkgEbKPzNoQYx11muUsUrD8HrmbDpL7eQLa1ZQA5f1wm4i3YQ2u89GcJffR1LtRkx",
  "key35": "3Hn65X1wsogskufMYb1UJJ9sUxA5bcTQbwNjQ16igTkLce4gdVg5re2WGrRsdcGpKABF5sd2SGV7CH9gnoCGGzrj",
  "key36": "46CGPVMGmoxeajte9WhrevJKjaH1mRDL81rrZmDB28GoBUcSHU4WfiiqEbMGXtz6eKaHakQcDMsqqBXVLgyKkDRH",
  "key37": "5aBujYUTUMDwycBDvGNHxsgFHZApfRubmxM9Fuu16B9hNzbu9FWgQbEkDZoc2eKDJfWF69zzQj5V6N1MxfyHnroj",
  "key38": "4tMirgn7QqVqJg5SWBs5HmyN1mUXbxTkjhiM5J7CuxmVJY9QTEHDvAhpPPX2u4iCdCNvGeWcFriUn9YBPuYfBWP2"
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
