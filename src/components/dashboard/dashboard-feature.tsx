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
    "5cXqFo4dDRp4bM4gji8PRm7t6hrzLXXgepbTiiGtTivn87g9Q2feERavTubrFKFMASsSAQsCPwKqbN2fpLMt9EYf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61iqVznCxN7dVvg59pCTaxJd2ay1K34J4sAduAmz3mFbaLyyKuZVN16QX8iraoUGzprHVTTrYfVU7yWcViZXZMxs",
  "key1": "35Q9qygJB24qc5J1tvXxwx3w8byZEJwk8wVJTrx9cRf8WSwKNJRei86rkwqAPGTsaSyDNQP3SVTRUMPPKxKrdQjx",
  "key2": "41BB3gdCYYU33opDtR6aAYvp5rAB51xn3YJz3Ld8k9k3jfwN6angEV4WYKCKMa8ypDHM3iS7dhH5fvmgk9R4w6iy",
  "key3": "GjDMcgU4dQja7SgeM38QDGL5z9nuwe8doys3isA4RYYWQqXJ5MspgAC5baC6A2TxezW9U2cLD7FdwNywTuGez3v",
  "key4": "5H9XuxXhzYjshcjtsqPKEbJgQJYnp4CyQLfKdowNhuUS1Y1axAMypVxa2XdkamEfoYEXyt67NLgq6dd5cmZrmURZ",
  "key5": "3cgUpTcsnkWvyDJfKJ7BdMnksALDfiAsZJQv58qGuT5BwCh1qJjt6GsmV3F54Y2YooxPaA1aNCWMka1DEdk7TZMN",
  "key6": "282o7n7wreDRH81QFYwxMnpvmHkpv1NDtYvNxPpMBMwDHvpFcWFDASDB21MrbGB6uCpbPL6baN21bvFcJUPt6FxZ",
  "key7": "3wR5wsR8EB6fahgGbdrc1iSxnfZLz9bZ71QWUp3btjMRZdQDCSS9zgk9t47xP5n4GFrc5wQ9hyGFLXWqNPCynrnj",
  "key8": "2kKYuSLWuEUVikRoDHAHP6WoVjdFq7Vy6jh849jAeuestsUJuMjNiVJV6Fuiy2MwHdfQM3EKMkmc9Bbg5Df7AHcz",
  "key9": "2KFWJEyKnACL3itn9FxxJb7iR7RtLBmR99SHgnWZZ3y7nDK6fLUgWQPjLdsqCXD4Y4khfDH21JuRbpyn649an8Da",
  "key10": "g7oQRiJfjNP8rUqnwpDLgqBNLHCuw8neGJQtp4DGKgqdk1GK2HzBcniNbH7HkLboQJGjNkA9nwemmjMsmDMHsS5",
  "key11": "3datzwhXYY3tJz844Yxi2hf7JqgsYSLXdDSqWmC94Khk12SqSfAdu6zb3KTQxW2KNWdbCDAXjcgFTAsdExNMnoby",
  "key12": "2CCTyTGrt7GmjqazvTfBrivQ4uyhXiQ8DrNUqmTdxmSrkLqLPHkBe8GiaQkng2wDuDvGgYv5oaucnAQnBM7cEpeH",
  "key13": "5zHXjCBps3NPxfQ3urkramESYcmAyovfPWQtAQyRtDSiwZUrcAdSrfncAin8Apiy5wobbkJszYYoEwuYkFJHV6if",
  "key14": "fcYWyUTtA1jqybvmPVoS8atjc25z7CEp16v58VHwcBaVMTRiKjgvHDaWDQkgWX1E4at7qg99spBUQcKiDhwoA4n",
  "key15": "2neBW6Yv1LZsCGFmBAz5Uwo7PoatYstLD5yNpzphcXaupEk6G4ZWfsprbqbrdzu3WSWRm8hdhgYGfTqNVhD38BGT",
  "key16": "2eX13G6s7ov1DsHvwz1vtxVqBmWAKjQHGmdE9UWgqRKGDjwjHxfyCXDFgQ913UErzcc88cAhcMCp39rBexvkZRVn",
  "key17": "5CVUEw25eweuyrK5zYukWoVfQUNF7CSD5SQQqNTNkHNycJzBxwMB9JSxZKeUCeypXGiLCHh9LQUyw6Q5zEdxUmPv",
  "key18": "2CbjVXm4EuSLXGauvo6tugBz2QXAQHLp2GKcDSs1iogETmEGPHZXbRehpz44LEK1hoQgn4K1PpwsmpSRiteijWYb",
  "key19": "63MxBg3hRAubT89BiVmQwCeNifXCKxRvBPdZUwebh8Tdv3nQJrLaKjZ9NGXLwCe8xcraArWJARmGt6v2dcaG7pAA",
  "key20": "4R86F3vJmZV6pm14sDkj4C91s2MTymQgmUJWUMqN3FwSDr74pYrjLYQ8CuShBsZxAS4pLehSiGxcxvzHg9ChVJom",
  "key21": "5h9Cd2AxHPPXBHZAfiRgjRa4ePKYKjsSvSeXqstVdmCShtVuH9WjMC4kwAfv8BEjybD1tectzEvqttthnwPwFhV1",
  "key22": "4857DyggT9SAoN7Xfst6TgK1gGnk9dsJWexiEgy6J2XRW6q3fDuJpeHPerfisWJC9yhxpPk3c6SJkBteF3KMsC8p",
  "key23": "2jkjkeXA3uw2hJ1X1r9itT5HfrpCLr5EDdxYKMrMF4EnKepvvm8HmzLB3HV5oHrSHmfWxpeXGWPJa6GqaUZMAcyP",
  "key24": "27y1cJaq7iT5LGiVvLm647PzoZcBvM6t5a3uaFaadvGxRUN94ALGHD7w4iUya9Qu3Yp5tmvBGCX5jBfW71PLppqf",
  "key25": "3LWLx9UVYGag4oJGnU8NGa9NjesK257U4tSB1z4yuCNNzyJoevWWegaqFEfY71WTw7UjzqzDUW1EePxqZyQyjegZ",
  "key26": "65MwQyZGu59UejT6Ctd7LXRHUA8nk5xuGN8HnMZLjnH6aztBwsm82sCAc5DcNRvoUKer84Xf7VvL8GTH9BG1YUzg",
  "key27": "26ibrcapZ3zoyQEyaFPNjGdFK5dHDm7Tibaj6AKFqgD2HPFX8uWqyAxvAaqkqdz7RZS3MLWqF9NQDq1trfyWkZcY",
  "key28": "2RTySQ1nsM2a2QXhfmn266HSQ59qtrSDQK5jbMt61WFtNSQ8HtVKNxGdFyMiEnsMDmfTCa1QjDq4vSAkXZHYFspV",
  "key29": "5amLTvDuSgEvSdXPZcuiGBzTHsqQeywuBR3iTukFvjKddGinxZwbumwTuqKsuiSUS97YjEcy4uxqcHAabuhTiqSK",
  "key30": "3Zjd2pKJz66FjeyKPMYcPFFTmriAdj9vVNh8ZyEXP9GT9f8MZit1geQ9M2xdn7diqDMJpEfT9dDqrM9yKLixispt",
  "key31": "e92STqcS5PATdtTfHpsTXMw8Z7po75yo7WSKeExRxcZU7VALYNLoPijvB4LUiFFWZDdMqhTAEECA664qtd8pEeZ",
  "key32": "4qfRaykDfseGHGLab45MrR65XtKTQWp6mchtCKQFqZ3rVuQi8JEwSh8C2ErqQzqAaUEt7B7eeX6F6JFxeoTGSke5",
  "key33": "425kpwQuNzu8d5UWhR7g2DkFEyvryF6j2QGvqZCi2jww7iTb3vphspAmFcwkpW5YxUPRi8FsmHJzFRS421cEsVR3",
  "key34": "3T1Z3pf6JBRhvA8MqQTKpE2ucpK2XQuwRs9mNsnktttFfMP56iEtc1uJMdtKUh8fSFHUxvwesfHAYzqPCs5Lskcw",
  "key35": "32t6y3SnJ2myFU8mwx4DoxSghvRZYVhEmHqDt7WKHnHqnhsc1BCLqQiTUW22ba4LToHkVH4HtiCKKw64JEsCd7yB",
  "key36": "4d4bQQrYcDtSx7T1LJ6uZRPAGAzpsiB53Legjin6CiRW3WHoDVNKT1kEUQMyb5cQuqW5F6ZYxTYMLCFgUa1krcU6",
  "key37": "3PiPurRcVY9BXZLyRSFD3PSrxNkx6LSibKbQsBy47G6xLdkkvyPVyZzDrxFWUyaNsij3YmXuEZgrDdnogcMBScvf",
  "key38": "4Y7UySjSJhjpCzPSQm3UixCbqtaiYU6V7RV9W9JmcQCckM98MgXsyvhevpunes2AuUinFAkY6Zp6DtTJtg8LymbX",
  "key39": "2y4tJrFZJ11pX6ZVmoGBsQ3Q1Ld1b9jqGtkLe2b4pa29KKe6fkGR446paL8bt4Rq6s7KRVpnEdiqHW8cLFka2Meb",
  "key40": "5pwDgmWGLowA4QgYjEtizTnRuipgu3sfvv8T2pnmDzYyPF4eYTrGMiGjvRyzKULyMzv2NgpGMrrt2PjXBjeNuoo8",
  "key41": "2GvnCEwfRS9q5fZhEwqgVGWbRsfB2wNRx9bsNkYbZNi1uiFQ5qbdnyysyVGBhaQthgHBTPX7YEcnukpJ18XesRuw",
  "key42": "5zwG8vxaV44ybsjvneqHNuPUmcJhUm2sbW5iE7CrwLekGNcqt2Zesp654RvNp9cfdEWchBjyzMV9soJ6y5E9eRCA",
  "key43": "5en9Y7hiFVVGLq49Tix6GGkLBDW4zt7uvZyXvopyyH9Qqcy9rPG9TZXj9xCYFNUQ8pEwj9YDjCKHUsAJGFrfXNGL"
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
