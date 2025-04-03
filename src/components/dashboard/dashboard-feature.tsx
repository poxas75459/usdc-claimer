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
    "2d7XfFgiWX77M79ixepJEUbwjUfxYfLZ3KRU4Wg34ABjHhDGSyZhpANop7MJtYydCtZw488fdeGsHSacCEsULycD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AXN8TBYuiQmjCK2GWbsy5uDxe8T5Lot37RBrovAsC2GGJaPHUvffQg1Pn4V8mQRwYLiL5qivKtRr1UybDu4cuc8",
  "key1": "5SR9U1mFzkKTq2zB3hC1gnrCAJdiKRrhYBAPA5StrqxqvVkM2bCoxZbPSvU9RbKVjNrvRQg2P7ZUEYEaJDAWGBDP",
  "key2": "4H5hPogtUt6eNveAWE2FCzEN1c1B5AarJTDBghK2iEqbLCNCPbBQSaNCAU7W1cNTGdE8D6GDXu2QYVM3d1x6pCz2",
  "key3": "47ovfo2MWStEnVB1YQmu2Y2MseGaCWNRSDobG2wCRxYXEfPDhYqgAnmRPmmaHKU8R1xZwdxKZSNGVMGijjD5Bffs",
  "key4": "2wiFKH4jemRktTmaeeLASonYCJu8wecQuMET4R12qjh1yXozqqMiDPeaQv7tACTWYDePbYZMFFrjGmq9cBmLWUCz",
  "key5": "3jNbVSpD1oPQR6bDYQVGYS6WtCE15YnnCDsjuhLW2uLAqeyPfvpoJSL5A4Ze19KMa8UWm8Qm24BCpTZ8C8zVPAbF",
  "key6": "sbxeLEeBy98pt6iephfM89LkJfyYCKyikNmYqG6nRRDY7p4wcKjJNDQk948aWdYfZzFRupCTHmPrW4NtTPiqLJs",
  "key7": "5VruxjauXTZ7DKo17x7h6W6ReeSzFAGLsXw9CSQWCiiuy5ZPtEHTgiSWQEZFCFW6PTBwjcizF3KgacitAKCVRgcq",
  "key8": "tcyBhKkwWuJZgqz96juP3uiobqQmDUaHSjMEpcwX4dEpWgfCmby7mQuXTLQ8PUDueYYEhpS5q4vVogmii9NVvHj",
  "key9": "2UuMwm5MDiQn3zQ13y1kUJv3SK7Kw9fhe2hoq5JKVbPTxG96ESzPfiFdBUQv18W8BFDtXBE4j6uxrj1o4VCkQph7",
  "key10": "4eCZdS7aFXQiokP8AQuhxp13Bywz7MmTz8BvYRDo5yeEDZdrtinbN5zcVTpCHYAuNpFADNszdhNrh5b6Je6JtS1V",
  "key11": "3TCGr8hsMXtDDoWXrvn5YoMUwueUUMyT1nXXMoXQStZZV4Gnuey5WDYycVJ43YCHkiqYgEpxfhRZtiAgs6LgRo2m",
  "key12": "2or8EcNryJQ1rKKbrHuwsfFYaiQzWUmXE9yWbQcZAG8iyQ6NSjTxrZmpBuT4Xq1jQNvQjrfAaUYgrkRg6tcrPyyk",
  "key13": "2Nt3bTuusKgBrv45wNMAkpzBEffYp3JmTCdJU1bHTG4PUEAo6CJpPQphFSiwvgNkqoF678r1vfmvHk4tUTAZ1TYs",
  "key14": "CZczK2edV8kFiGtRjsu8EVgvKXUztsDHHDytmGAdHiFUah3u9mLra2JxJt8VyfaBdCyQTNMoDL8H7aFdAo9oXeX",
  "key15": "5mmaiKCFeTjZuScwhoQZtgUhNpKSND2rcivs2JNR3hrSQN1VPATLCJCSJhQLSnn1dtA7unqiFx9SfRYU47Z9jAVW",
  "key16": "3zRL9iLqriP8SSJgxG6qg7VxczQLAjbJfkNccUpa6opinSooLuCS91WWvDQoZuTddBJeAYFPwfEXYtB4FHbokcJu",
  "key17": "4rrBL12kwNNN9KSNGdWdVtL7LY7Vo2PKtihrmeqLeYBWDDVZJCQ3XSPH9ZXHnrwEwXJv51deg8CHtvD94Xys3aLt",
  "key18": "3RgAFQpWW2Y6wx8hRgcGptkWnzgtzsKj6F3vATLgyv2ESpM4fQHjiyYwzFbnCbEQeSYZQUyD6TJdEihPDDEmPKrV",
  "key19": "32Vgx2uFkS95y7TkSj8pLPnX4WB4DqTG4LNz73LNnSex1CKXdcsRQcetNk8EcCCXFSvFmTGutHTMw5zQqvktgC9R",
  "key20": "5LYiC6tTwV1zWq9kqCG4A8cHV4oyMb63R6aa133HzmxkCJ5NxsazGsZbUx16gtcvnM252YsCf8KKtsdbpMeXXc4L",
  "key21": "2Sxa49jVPoKTMh7XohV6QFhdshxGKJeqmcjPMysVdeaudEjLFq3Hz3yVhAMdtuL6HtShc4bcipTDocg1npsVhYJh",
  "key22": "3Dd6ubRTpGvHXodXFNaKMSscPYU37JXv2pKeca36gSJXyxBqQbyaHa9siZuCARL52eYDdjkiS8u9JJTZ68sEaAzN",
  "key23": "4nMBbg1Zxt6GmdWygvS4cQFxLRjBztgmENHjidy581BhBJFkbRqtUXt7tAp3xSEzqJfy3pEhXPiSQSBZ2EseDxJt",
  "key24": "22PHTsUt8Zz6gHMuUKPag6HmWcsxDz9N9892nRynpt44n4H4GgiSTfLPuYFePqm8CmSAmkeBTQ3CfGnrLMZAdyxk",
  "key25": "3WFWPEsVtX6SNwKvPzgvwiTw7xDNy1YfwQMyxUWULSWTzXZraqkaB59BrZKhpiKkUb745yhBPWenvGFqDkNJUm4E",
  "key26": "3TfYKD61hxDGxTKABmn5aT3a3KiijnbM7sy2vQCLa42LxyBZrLD871UEMakz4E1rXutjEfCQm1ewRJckybphRvNK",
  "key27": "2awo8ejDb9tv68r7Ecp7S1S9NMBh6soHkwmkV81XJXRfiuKqrnkEtKWbkmbnEv8xX7AdNmedBuMJkSVG4xJQJwzk",
  "key28": "4BKbjsnfgyr5q4hQeZFQLXK36bdxtsA2NfAGatqNoUvbbDE53YsENTUUZetyy1Y91CV9eiCQvdSLyEBA9mo9oNWa",
  "key29": "3JJs1hd7v8iEHgcJENGT34H9yhaGKMuqJQDBD2KLDcZwDDAmGe3AaR2SjfSn3Neq7ZZCMaBjWT72Z54iAd9betY9",
  "key30": "4wVR9rjzgxmnLpCiA5nyMLizCCT7Q2ntxY5aZMH6UGnktcJh87pPMij3HwnZrH8rh3mq9fN7VztUYJwoRyixdQyd",
  "key31": "2N5J11AMgrR7euTapv3uqiJ4iKf5W7by4mi2boDBqgkCjMyQZrn59cRdMCM4gsacrrh8NDTDsKyQm66jWCvKPZD6"
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
