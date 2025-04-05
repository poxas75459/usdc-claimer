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
    "3dRDY4wuonakHV8MAiuV6A4pjJzwWAfidE7JD3Dsr65YmaCaDGUW4MKqrEiao7tyguHkLB5o6rJUQ7vdqFsU81Ki"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3LqRrKoES6ib7d4frR7aNzF9DAtU8QGeoWi8tZc7cQZVCNAfWM5NYRoKABxjYSnMmvDLHqduTfd6ekPg8unvhrqp",
  "key1": "3jdsUjztZU95CUqki95pN7bAGzXJCBdVfFfNKGCtUd2XztWUuLZGD4nc37o3NFgCVRvYG6LQrnLm7zpMyBjtTWmo",
  "key2": "5HANDQZTWqeZtFQLNKWKNAAe2CtkgCu5RXpTUaecDSYWLqzHc1TZeESuALRXKtZFiCJKt6FacnBTVsBkrscbq6qP",
  "key3": "4JnNAvBDQX9hY1hNVZS7mawpW3mzaxhhVh7UNKrxognX8C5FhuWYGZ4T2N4KZGV5rKbrpHVmqMHLNTmToXn15HaP",
  "key4": "4XN2UtRFaE1CAhWWaFgibLoVPeGyqU6xBgVXDx4b8tVESFAabxXCNaTDQbiLznH9dWjcHLJU91bqdjJQSQDrJTvZ",
  "key5": "azFbJQqVFSrQq9ccjnZ2zVHpftw3W3mpSoheYFVAyk5NhdR2yBNiYvRbs2LZPUtbvKMJkCRxQozN5FXz4yzFZqP",
  "key6": "fABfSwXSiLDP4WG2gaZCcXCQ8FTLhLHw5xke14TzhMCbvDbWEiFm79AurktZX3VoW5EC4CRmARQzxJdSYgmwuv5",
  "key7": "FT5ZGsRPz1b2XmdByNoUdXCkc9Fk7jTzWWNJMxJ7UYsZH7LCmRCWpC7yTovkRfoQ2RexshYGfEGT9UW5cHarDS4",
  "key8": "62GLELQ8BTFX2MCQMRw6k7hsC4nKPQthRRw5DmTqf8amDtpT6ZE6WgZhRoZgzqkdS7Y82yXV9rqci7a1BPbCSR4r",
  "key9": "4m2PKeBCbrpfD3VhtEjYxVevqx3HrfrGuakXjFpeGv5bhkXbx7BSv1ytGEWNBgnw3gxvJhLBe3Ld8e67VrC3JHyD",
  "key10": "2iYaR7YzRCojv7CGmzYvT6nTQXFbbNW3JPpbZ9setajKYvSLPWbYXbscxP42N4WFiQd2CeydtC6wznkPEdiZ7VGp",
  "key11": "2J4EHKVvUNtf945AND7EfWLAyLb7HgoufcDzVQkgLaFhe6dgjx1yVJBkVQGKN2P92rF2Wd3oddViBZ69T2Jw9qKb",
  "key12": "2S5UcFmYMCXydNXici5ZJ4vHaUNUUmHj1KuCxYCMok779pbBTGi4BDomzGSLWD6w6MpevZkfoyDTHcpcoFfuHKxb",
  "key13": "64azgjaS4UTpJ6ok2SBW8WR7wGzu6ye2y13ejGdtboVU3ZJeCPNYQs7W1VUXxGYW8X5h7jxynYa81LD1mGJjzvQU",
  "key14": "3ZoS6VLY1G35rX7jTYRvNbM6VCV7EXjg97eqZ1kJD6oBFMudnWWCST2GvJLQpFvtuYYQZwrGkzspgQBfr3ZTQHYd",
  "key15": "3TxTzpc7Rr53feyvaCKxkU3QsQysqSAyXV5MnGcegU9CEH8y96LXbDqasPLa3r66rfy2tkmdVAtVpnE5QsLM8ZPs",
  "key16": "cknPbPwJ5H46JyfwmLCTjeDBKjjTdugo2LEZZPkwHUGAmgzqGmB8dgpyCJDQRZQMnTG4BqjNx2LGSq8FZqKT6f4",
  "key17": "4P7gVDeXPr2L9tmiZvCywV2BkZq8WqcVAjNyQ3y1HQej4CAGjQf5k2LsNNBd2Ejm4NArZbfQmXyWJYMxGDHuFFTw",
  "key18": "4z1NT7Dcw5wtGXFwqDL6wm4uYeUcfq1WoJEP6ruwjvMGt1NoLetrsbnuu7pjCHY5gG6Vd4SFDnRiXdj6HspbfZQC",
  "key19": "2isyLb671P11E2AUTah9CZm7oy4RSAq157V8bUcNEi3rNV9D9fjW2mfbGDXRzpjPohRS2fT9TPnWRYiRJdZY4x2r",
  "key20": "3hCg5Cnj2MM3ZvJzkjuFziXBFBBnQq9uSrGfmZZsHGGhU3NScsuegRuxGkdYF4dd1TDwG5nsScLMDt7XXcEVijcV",
  "key21": "49KY9HB1mPEQoagMr1K4Uwu3TqvsDXG78Nj37knK7KTqLnRwMDFmtGS2GGnTf3tkWcoPd8c7PUHorMwVX2b1JsZ4",
  "key22": "4bz41Cb6scevWnogySmg9XttwZ997yjwhdiKc92LDNF2vQbUWGXvbrQxwZ7vkVVPdY6xvFoDRK1UPA66BFvWaFam",
  "key23": "4PuJfL1N895FXGVBrBu4TWoCxMJNxLn9L4133w3JoPn7EfctSUw3BxhDZfMD3bGCZeUdBBR82WgNuVMBvry7Lyym",
  "key24": "VRUAhijgiLU8uUDaowi4GHxEruXqiWsw85cpfubsRMTW3Jv9zYM3SVM3HpzTNsmNS57q72PVxKosKpweW465JoC",
  "key25": "3M3fHMXenemcSdfXsaCrjF9k2qPMGeqfmDZAES6fR1axQzKkpw7ByEm4jruQfBYMkZ4MovvjFsZKkRkj9E5GMPX7",
  "key26": "3tGBcp3vBAT15kaTvb2ZdxUBRFr7PkuNgr42v1s7nc1ES42GUpvvm1Ujz8jEhg6qFgMFFMy3PCmFcuw1Jh4FVBx3",
  "key27": "3Mpxb6TXZoneCuZCM1BGa4qkScWktvwuyD1sXvy1zSjnG8T4JLiMpojt9CqoJLDnpBEHmGfPG1Z9MSS8EvYBbGdg",
  "key28": "33WTwRDdrgsNYQa4bcbLKcb8s9qBc8Spdc6Nb5WTwSeceCPnpvqUtr5mkLY2oA4ks6gqbiTWtQj1dybYTi4a98HG",
  "key29": "5dyGD5BWu8o1LyBCTt6iHNNqh3FREGe8PbpCn1peiG13zXRTe1X39Pozgy9rVzC3Div42YYy5wVrVtkt5cnDbHbC",
  "key30": "5HFWpEYKyRrfHtUFe6J8rRGyLLk1CForeCKeZagVoAUwPAqeUyFmTf7hUyGVeo1A29LFWsPA9RJsva6Wv1xKJ71e",
  "key31": "5joYAWvRC8ztoRF4XSbv7k74kExMynqCCo6nWDX4FMRB83C7gHj7Mds7pP3bSsD7ejpGE2WExAHGgSo3AmyQtHPe",
  "key32": "34H4XKNdZqFPwkaW27idKcZbwy6W3uV6gDrtnxjWkTJVjKYicDJRJgsi4uU5nuUM9DEYVvGivqFZW2HoPTpjPAqc",
  "key33": "4cbxS8ewqroM3cYZfapFuox75jWQKBy7bAc8ZqwTPt2P33wtU6zcQHKdecisfVnVzJJgkvDdNG2sc4uYdap8HWhJ",
  "key34": "5yR8maMJ57uMFtfMUrS9ouCLYPNow43dXJeYtMMvJUgo7vPvd9YALfDdLpn7GnTfPvGnQoFhQCyDUJuryHka7NqS",
  "key35": "29DAGnrmkFAJu2HXvpbwSXq7iihSiVrqFh8r4t6sqxmeNhLJuVpstQWVNPLiNb6yEtGJUN4YErGo6tj143X8GuFB",
  "key36": "3wcyULM951tqj4gkk3NG8fankWW68BkJAe3m7HN7u3RRv8oWds8asT3PckZ2F1drCQomRHDkFQFBK21zj1tiXmUg",
  "key37": "36WgGWeWvetmuQVzWuFoDVfYXb6jSRjziwafzzSbFr6EEmTf6t6bDe83s3CT1XynqDqKw5zpWVQr6Ljse52tP6qu",
  "key38": "wGWPDP2t6FgRuE4bAJo2kWzS7GBkCgd77qZ4fLwsE9CASCrkcSfzxYHcUk7bVq9tcQqpKh2RpFjG5BuxAtmnbwq",
  "key39": "3B8ChfG7yVQxGqerjGp2rrdgNmQjMrpYbwPEWFwJzEeCtqK6dUto9W3rd2EeGDcVrQ5VQTL2N2nFQxZKVdVZ49hW",
  "key40": "Z9LDQXcLyzY76aMaVBDhLANWUWStLYmTfGcjRRDw6bhuqqkNAaT3hLbJa8XFAjx2E9uxFM3z5dSz9KTaLfv4VVa",
  "key41": "3DdJP3wuZReeeB4qatDz83RQTQnTJaBCnmYTRNoVxHYzXSuBnENqoEumpxoLpwyseApm4RcTee1WWBoX1iv5HpPj",
  "key42": "3FQZmHTSJyXVZ2E4XYSReTbTa1RVC5NbRPkA9T5L8aaCJ3kzftnexHKB54fikKks8BqteLcDxaAzWwC9a4F6FzxJ",
  "key43": "34zemc6zpLxumT8DzjBW1KQqc3tQF8v8R17nhrKPwoRtK3TPmuevuZQyvRE2yyoJn752iNmSD8A458D6hDPkaJ5F",
  "key44": "Boc3WF47o2EZPPbwXMAPZJUuJZ9FRhcwppku9J2YQj2MsJuL11gJ6sL78Xo1JRTEXughq1hZ7YfmoiHhUkDFpTD"
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
