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
    "2DhZBbG7B4pscMa8vMqawJB46g4MidR1GignfYY1tw6iWyT2vSxAJvwzALG3BDNyYXASVe7JHrgevEDb4HDnJuet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qNTcg2vMWhwN3QFh83aMEBouGEndbfg2szbBedpkyKXiWhHb4sfvr8rGzsjc4mVvhgEYHdXsc7LDeW4WAo7iLAN",
  "key1": "5BbsDqb8KHV1aXp9czTCkMP2dsq1YXXYk1Xkqj4RaP3V1FCPNaTC4P7hgVn6yJ8dAwncMsyNKTVKREsifxxTkkPf",
  "key2": "CtepE4qc5nncJJdXPjjnU4rxeTuZx3wcyjdvzWgKHEj7GjUi6Wi2N1m1DGRNVuXDpVyNKaGgyJ6FWKn1uk9o8bw",
  "key3": "i5VTPes5eLA87k6WMQBLCwpyx1FfhS9cd2swJXmw6AbyicpDamTYZM2C9D6eJv233n4t5r94rRkRgsy9RBmhQEJ",
  "key4": "2A4mgN1u27FcZaKQztNjS7LAxdXGuM7xaWepsdmUi3VJrJ1wB2VkHfbqDirhCnfnEnB7LvG7pNcpZUyGiRTamYMH",
  "key5": "4yVBQf1n63Nqcd4QmyE27e5TNa525bqJGpBcZbFbb6hbh2R1pA6jjxdPA1J5jZNfZq9Qibe4zraNAE518zKeQ3z5",
  "key6": "3qjV5E6kfHFaAp6ywbFzeFioRkmj1bHtgZSzvLSevMj3JX6Hrv4LRAkBPsz9pMdunV1PwkXuu9mwi6QGnZP7hHJ5",
  "key7": "249thpBuFfLwLjEzyyRh2XSRn4QR9utMBkXXaDM2ZiTiV8fmM1aCeA4Yw2Cf4EbaapKSDwjfNLrjwmymXKS2GgEa",
  "key8": "8jpCxEyuxKAyEhU7UGNyyXfKkPyeBSaLM37KavzrgatuRHZzCqWCL6afjqtGTv6aSk4a3A9XQkf21faayN5ioVH",
  "key9": "2PvfAjCUuC3KkQv943J3rRrstg9mXZYJDSGiz4FtvMnapsgF6LENCsgYrbyqAFR2E7Zvmozp3YRpdJSpNyYRdXDt",
  "key10": "2fcaRqP2Hc2G6QhwCy3cVvvacVGE1meszoADvEN2F6pAgsT71MV1L1YZyA1xwnhNcvfafK45Wi1euDD6BuXTvqqq",
  "key11": "3gTgH4GJrgZ1pEW7MoL2LMBgdb1fNRcEX2dcHeAb1cjthZ7BscZRwochoWb4Tcq64bchU4aVTU1CnAw6D3TrRwdg",
  "key12": "22nVzpgBtzDSr3o5u58h8LqQWrxowL8nTQSsCr4GaFGmFy38tyt93s8D2mJMq7QT4ysE6fKpQPKDCanSYEajT1s3",
  "key13": "4S5kSpEaZibnwQLcGTmpefWjVxm4oRd42zw6mAi89TckM3aiB4g1bwc8NUiXkTj2tutJTrPEJWXDCVqrSJn8F5rj",
  "key14": "2Fygas8E3UKbNbSu9FFLup1rtAojg3UmTkW2YynUEyq8xKnm4tMc8DigWHak2mP2LbjPEqRLG3zGyNx5aDPeYYgZ",
  "key15": "5VVpuTLpbbTYm36mXT9pMDDi9ZpCUfubqHfinFz2chQwZuQFqhDFjau2Jw9prSqRbqucNJgsm5X7N2eZaMS3yN84",
  "key16": "2UHiHtqrkNTerm3vMt3DRPyRwHjpkYGC5UNLBcJhngENsK7WXK2kAvpnLqQhjxaLfRRkJcM2ubD1zKbVNo63VatY",
  "key17": "3KihgWefoX9ZgPG2DjTgW3Z1ntEJcumE1Tbj4MGMRUmV3fSTaLX6cjTzUpeP3MSrz1CgAPp35SKFdBjEhZjFtx6K",
  "key18": "DHZ9rmnvQSaU4NeCHzTQavy8EPeQeqzRTkMbaKLGuLx2TFge6Ftm3Se6r3c872bSoUDB8DVkQDS1wBBZTju7dcd",
  "key19": "2cbk5QJrd421VMdVVJPkbDZfQ5QAASXwjWubmrLpvYAC7S5TC91zESN8Nvpe3VYPpHAiitgFC9GkhbgZFTMGzVwB",
  "key20": "4G3rjBJ1rkxpq2SX3sGvGPdnxwvqXKEj478LVwgcNSLoVrLSRaLcZrv3VzqdYJVD5isgxv4uKhYwtp2mcncutDhu",
  "key21": "B4yZynwym4EKoddwg6XkxQgNUkEg1Up2bJu8ePwCNxoyZ6mzqZw9NB59gVQ8YrLWj6Y912qUSwDVejpXJGmqAd1",
  "key22": "27YVNqF7MEQVURDHL8vR1KRN9vSYYA2kvnMM8ij83EywPtHzNTfJN7RtGxWuasy3zFpj7USXffb8vYMDbyA3zdTe",
  "key23": "2dmw6c4fda9fsBUKVjDEjcqzSqzF5LJimDUjtn2trrDm999Wue7XRyeDEUz5qaNGsuLZa6dWogcRCH2etYobtHmC",
  "key24": "3D6oWW24YyYZxgnCq6bjoRyrSLNjrrBwnwqcdss7W2VecoEx2WWmoRgymAaFGEo6jYTy5wCZpMv5qSqsDYAkTVKz",
  "key25": "4jgfedACGaHc5cmo5UnsL1ezXNsWFNiriAs3zMEgAk7oXHdCGoZ8eR4cj3QRZ9f6f8rsxyHE4hQRfN3BMUwU4kDh",
  "key26": "2gWHW9hwN7wD58WeMimZu6K1cm3Sn1yVCmNakPmr7CMupVLpPESC67wNfa14iS1TNWnrXFqcYNg1mGKpaNodswYQ",
  "key27": "2xkRCjtATeCes4tGZVxNxWUr7QBMYC8ttxyJExQWCAcFDJvUAHd5oipkHevJ1SUd7TbSLmr9EPjPvniuDeVbqehP",
  "key28": "3kaFbSKkwerrCnm965EQ9ev2vc3WURwptoZbyKkuSzj4TQkpHcpFNty3tWJA1vz97tqPiDMEiZRCg9AbvRfgcXzS",
  "key29": "38f8XimNMAitGhwBomju4QXXWoHQ5TDacS5BAkwWUvvXzNy79L7kEHoNud2asviqbsjHBhyr4LnfZaWzoDvirKfF",
  "key30": "4g7i8mxE9gp9R3rJi92UUvQcUM8PWpH6mbLakAdmhEe1fjbwQnthCqqrsm2x2wXArpo8eezcEBVHtUwKjR6giKuQ",
  "key31": "4TU1rUnJmsR6odUcqnY6cCCibJNb2Qgfp2UX1aNuinUiJLsJQAJzGDDmPkXTkbyVUSFVBd8bHFRAeV3sBZhfhkvH",
  "key32": "XDZRSfnX37LMVEDQsvJSodvfk2Mprrq6qKt4hHw9C5rt1d8BK7AE48oTR9Rtmz4cMQvmgkX987Zji2TvFgcY1SX",
  "key33": "2Ltybd8cqKzHy7fXyzodJfuQgeU8XZpMytFPUCKJr9V3vh2kWaLa4bSHK7Y63mSmCPFvthzyk6JZH3Df1dMKKncb",
  "key34": "2Loys4qRQ3DEz9neY7T45HtrgSQLbSwKk4DDrkjYqBUaMnPXbs4tDaWdKJj3rFf1ZL6pMfvpFpizvHTYHTEG9mun",
  "key35": "4MFLzV48zgaNxUc6uQ5erS5GkowFyMSXqmWK69ntLc9xHm9vaFuYFR9AoRQCEkY6KBmnp27Z4NpBG1u1RXRCori3",
  "key36": "2TuyurtSajn4ufyN6g7KtP2515yK2PE9jydEuwdKDGTkJuAwZc7qiyUdik6JKPS2NToAm1QN7GcYW6wkxEY9hYW2",
  "key37": "VuGgpWkLASzyMDSExMNZrAZPDvgt59pxNforEjte7cVyKrtSU8Fb1t4JYN2dZGG4NDnpsiZxMKTVZJmwFJLafoK",
  "key38": "3tHifu43asw2syyRfP7kKYENh3DwMBy6zCK1ggnSbxg3c2gQbAqUX6oaBAeqzWQGeUH8MJsz8SQFx23uEkMKNkFt",
  "key39": "4TV2NHBDeNiCpDgGQisDoECviLvussjHLY3SgVVmw97XNAWFmSiFWbNi8BF9BAwX34NozuEqn9XuvZ26aYTNYtvL",
  "key40": "3awkUkm3MTSKnKjPiABe3cvuZJseqx6tw9jEdms9u83Xqu2BsVXnDC7nfwkNg2DFCuFwVVYq15bJTrASnD4D2DPR",
  "key41": "Ed8TpzE472vzojq92ouWUPssF3DwF8WjLteChykHuHfwYbP4PEg3mYQhFrVGgKzi878cNgFNe4HdQksSJuFLDZg",
  "key42": "4YqPptDxCk8kKQoYt6MWC6nzBWGQUNCpyy7vRamYuAm2ycdeG1TnrHe9zZKS1RdFMvZEWyAC5SA5LHcvuKcyYUG4"
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
