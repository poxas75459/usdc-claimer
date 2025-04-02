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
    "2L2mwcST4uyLW7T7yo7BsgVvheRp3CX3E68xfAHTYKF1AZvRcZNhAnkA5CyZ8CEKTYgk5ZJhJSwVtVvZag37gNmm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N8wwokX9XJDxCv3fGVasHzqBmYyyy9gkHzLy2uK87UEGDh5kJEAAYGSfcGsnXDaRncjsW9C4wqMkRjjuPCjhnZN",
  "key1": "5Ey95vt4unFh1vVsAexAc2ahddZFuy4pmVRiaDUVaNwKvR8gMZY9VUxWyYNzQWo3N8KRW3LVNyp7JbqHTssm2BtP",
  "key2": "4fob74pL9ZJP7zCPaPjphDhEdiaXmRCwncYVeySAD89WcCUTAoY3xJrdrAjNqN11Q77d9vmeFSvex7Z98booNefj",
  "key3": "vbW45oWArp6CgLkTEQVoz3JC3mx78owi3JDDyyC28iLZBLwZkPrtnreUM7bA6gY3DHedhADM2piNUMTYRiqaenu",
  "key4": "2sUkhe2k4DXtpRNZTf5RUD2TjgG7V4FpmdhsQV3AGjr3rJXckfoQ2nHmAgDwbYuSXLP25B5F8fGvizi5zpz2Nfzj",
  "key5": "5NChsek9hBtGBg38JNyc2ajLNM6s9rmA1u9qMUSqFDEXGbGE2PtSK1zRrN4wvY13nq2NnkZJunp2CWhKFW9XaSw7",
  "key6": "h787wJKSpzGZmEtaFPNtRUXMiCbZmXfHjAyrm4getiSoPvqVoz6KrNC6EidEgs14NNcFxmQ3xc9BFiCL39jwLPm",
  "key7": "3EYa3b17kycvCxGW7b91813ZW6ZzpG8G8kw8tTJKtArLT4ktKYo98rHgshRr33kcLtYPyuKnrzJpY9S9Mrj7BgGv",
  "key8": "4SPxwcCpoiLen5nGfL3CGpSr9hpWzn31iB9Xj4VevRaXXDQ4prMGbwMGcYuwME3LC672dqAVirpu2e3dmTyx92kb",
  "key9": "jsohdPPMNyeHWGYvRJr7T7dZDnhpjejDmSZf4RvyAz1HpYdWZM4Lh9sZ12mmacZbe69LcmncFub1Ya2pguhEvgv",
  "key10": "2gFX9UGiQYKRm3HhdWWCsJgob19PiYQd2CxthXSCkUs6dvhiJxePmmNpcG9t7C6CTyYBKTddto9dbYmTTjzMo8W2",
  "key11": "46Pek75fgtz458Ye5Bbnd74UhYUZNcXcuRY2H1uG6kpZTBFxpyHqosvajdbPdpncrXroHA2czJHh7Tr4HMpkyAxH",
  "key12": "5sb2jg3wfmwDQu6zHxHHvfXXsGyxx8itDNtKcBjNGmXQ9kPcgoHujBt9jzva3e9Hyfr7wrygJkm8EGDqTqgo5wHT",
  "key13": "4aDGshKbJWCzX2JbCZ9gHeSi1XdrqtzQWjs5eq25hnJBRYCVxv8e8LR9KE7b6PsPXQdU2g2AFDk6KBt3Yc2j3ZkM",
  "key14": "5so4ZUFns85q4wXPYGSLe7QWJ1tAFencwSor9jxEgL6eDYAEeoN1rbDzhhum5QaJwjAMjcSuGfmsJEPh2jbGSkbt",
  "key15": "5L8hHnro6KyMGZFsZB799sKjif4x1A6ZhdGjd2BXjC1huCErU8NNXew7hBMudbdgEFVvMHu1ozMxD4tQoyBgTLyY",
  "key16": "eQgVRaVscEBox1bTkQwFsZWTiQ5fJDAcEWKsTs8fXzvpm7TgmFdBs24hx86RCxTJMPRUxkLcQ6QwwT2wBqoeJoV",
  "key17": "4HtsQpSv4GF3SXSZMgh1EMmi1bftb1B3DfURQHfy8rPeXSswy7WwbicJVMrGfKdLXqAye11vsh73shAuKvozd1tX",
  "key18": "4FFwPUWEB1FmC58d8uzqmkubr56odv1bR1WCpMwMREFC9hJBi37awC4dAZ24AKxfNeiWjqShBZ7CwAvYRyrpiZpf",
  "key19": "cRTeYTK6YHmoLNjQfyraDorSrVLXaJuFVoTSvDEEF7sqEZRA34TLfhDtKsfUVYPswgMr5eCj7mjJ8gjjPveQPsS",
  "key20": "PJsJNNTR1CTV3D4iQJFgxp87ywbQtZ23BJMSb1iUq3mgvmotFfYdmYWFr614HmJcYBqbtSYPDZS8PkqhjzvVioG",
  "key21": "57UgPGcztj6foBYdjTCJT9mgZe9LN9sz8D46XUV1T9h8g4krZFkVeakqqCqyWiuqb8KQ3CL4gUSC8fGVvVee3crb",
  "key22": "4DmKRd1XEPPVoz4pNaGbmbCta3Myz7Hk18n73ihi3nc64a8oMUY2zke2pYzgSXV8Y6ATyVHYNwsifnTnzgo9tYK9",
  "key23": "2JPF14cJR9AjEJsespPfcqZBWRNZTNynXgTBnpAvM7dkva6uaaEmaSaE1faN7GGde5wj8Ft8EpLSRvExSLfzhS9",
  "key24": "3ox8m1yUKftJEdvtYN9edvGT4uY6xN416y7ZSPvwS2tVwTQmdtVwqgaJiBWxEcU5yiw3eUQfrgmLs8NgdN8DuXKx",
  "key25": "3hZTXYcMhsyZ4YnyGAsjst52M7UjQDaLEA5cZP4NDg2nXYtiFmmGbpwtBDr7s282zthrpgeKNxbxzrqsb4j455hy",
  "key26": "5w464dWDFyXeDLZDWBs4tqSPeJQZCf6VN3Qdhdgbc6y1adoigR4eWf28HaqPqaqistWSP7wi5Y5aWm9tMMDi5VjV",
  "key27": "3Tk8kfq5x3UWLQNEug7u3tnH2LX12vCTT5iULUFqVnzqTDMVZvTcWJgdpt8dgd6Wsj66zRbLQsroxKoG7unifFw9",
  "key28": "5quahE1sJhbrkmbTs1U4KakzHdCUDcS6Syy6gq25rjMwo5a6Rv3aLU9sqhzjczFrJ5oX51JfpyYTmZjzZJxNAR3E",
  "key29": "4eh7Gm3ao44jfYHRDduoj9sRVJBfoAhf9RD9M3XS2nRSTGS8kQ4qwWEpaZaxM4QxjHexELga8bzQfMjHvCMsEbq8",
  "key30": "39UkFUuuVhhDmYmzeXv3mgBgWMtmCmuVfEESyapLT6xvAqWrcKuh9owYGiHA1rDa22NiuHeaxQK2gKzJ3ep59M72",
  "key31": "55RQoPKziLRZdQsbJffMsCFeezRmsyeJh3mezQv2GjAZgY2kCRf44RjNVJWDvKwpqWEQaeqCz5BQqvEp3RcUTPZH",
  "key32": "2iGkuL4ZEoruUN9yepgmfVs95ZF3nnWVpdCpsT3cZhDhiPQ64x8g86BWPUtviKNpc3ykxHVCYNv2rGuvF5WEucoR",
  "key33": "5ybYL5VsTKxeCwjZ37pJdBeSWDRp3hKMaF7KwKRCo6oVoRL5Horg4cFmJGN4yDhoNXwsqmM8Pug7KWYyYauRcLNP",
  "key34": "3T9i96nkMyKS8a3t7rFfaHYidXux7x8NuygNcZeK8xXR1WAwyMhQDhqD62fhW8x5t2EUtZirWQiimF2BwzQaEc7C",
  "key35": "41ym1hXVgUAb2pPgnVPpk6CyGrtaReoawk8axDwNKp92oCLKByqE2cxps969Wwc1hedBAgwRGvwk36m6M9tjHUHq",
  "key36": "5wu3pwQuz2d95PSc5A22Z2W97oHmJxwBhTfDvXcGtAqDMZL1QTHBdTaFt8vg7kKNrHnUWRZnchygQC5k1yW1jyib",
  "key37": "5zaVE6vgpLDhdEkw6QuwELF6VccL9kNyxN5q3ZXd78gpWh4XPDbjSuMsKakuCxUTPqwBsmvKpuTf5rB9KSGKLfAD",
  "key38": "PKt5yx5RzyG6UKigefsPTMQGeMVcE2s3Rg2vsQfgTcevtoBYbPEq48FxQ5ifc39sXmLs95ooBa1dwF95MoRTyy5",
  "key39": "5dY8ohsQMZUmvjEKgG84yuk6WZubtNnFPabqpMNJjtLBZ3KcQCANsAqqquYMwBta62Xbwu5jH5ytRxvoRL6qfJFP",
  "key40": "48ACaKgWqar1zPcgCZko9RHdyNAXPMYwsk2Je7G76CiKaK3hjX5U9SxyKuGEnqvgaDxThnoNZwLodHRThJRqcoBK",
  "key41": "2YAPbQPZK3U9u7U7JyH5XFx27K4L737Pm9GqJa9mKtEM294eFDe4uMKFwmW5x5j1fZBwapuSzxDhBQM9PnXtTpvm",
  "key42": "3Ao2rrs62uizgNc2PWyK2eQHxphRsCkNEH5G74g2T8p1BBLj6mMYpYGkYJncgcLKYrzwcCvps5yd1XUPy4ALSg2C",
  "key43": "k7Ghhv5f9GBLa8mC91RZLM4Gv5aoHE9rGLR7xQqvi6VZR4Gnftb7EdkDYSpabKEWPt5LeUoAW5b2yxL9WcB2sXV"
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
