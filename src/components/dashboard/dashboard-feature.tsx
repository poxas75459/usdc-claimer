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
    "3v1AVvV1Ux732kGxKLjtZ4ov36t2x3uE5c7tMvxB6xBWiriGEaHg9f71fuWw57YK5thAcZ5RGyLYQCoyDWttp1qx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2AsYk3FiL65hfFkRepqBCUhvJHYbmGsuhsS46weRjMFWpxWtuqp4ww6ryEi1GjXXwxeG6LwVC2E6yRsarLoJmF7D",
  "key1": "4CitKg2csi7YshMc3Jt16RMBe6U1Lg7H6aFK9D1jHdv5RWtqECbazt35bDJohRXmLrcFezNaqvNmnR17FTEnB81N",
  "key2": "3JkFegdRWC7Z8t8FDhBBzDrhKK9TQC26XBGjXrGuWP59c29GHm6pDWadwWbRGD2jDf92vTzAwbqSHVyhLFC8P5GL",
  "key3": "2PLx1wvkhpCxPq3ZFyfPrpPyrXDMRy3oHXRwfGDDSzTtadWCeVxFoHaMB8tE1VBt65ctEtH5Y9U7AC6iRp9fPYBx",
  "key4": "4C1MRkup6v1395V2zNtPK68ZCKXkbDkUyFLmpofKC19YZNp95xyKn5ypxNAJykgSp7DFzxcJX1FcsZekLLgvsTtF",
  "key5": "25gcPCHmNRppv1hr4yWpBjG2Fo1MchaRmv3mUWD5oEXFprGP817hEtEMtujgpXGbGWKxhxnXCmXPixNdSxLYikFj",
  "key6": "ZPX7J4oh5gREPQhaPF6HcugEBFBZYmi8yVGhFqnw3mowJ9o9F4eA1gPoJ4MCxMuSgsHsts1S8KDhTGHr6E8Cpae",
  "key7": "2ruUVTr8f4YcYjLBZthSfNc2ezzKgRVbkKEVi84pT1BzStrYxVfRfBaTFRXYLPXnXLnT9ntmmVqVfppg5VAqoTyf",
  "key8": "4UHBEhAmoRZSGW1zfqtaAqum2nBkpaWFUpsGnpBF2Ht7WieHQupJoL7zXthWbfbHqMgwJMd7tMJzPRGHYH1WnSb3",
  "key9": "3eUWy1n55rMsUrtCsudqBXYCTXHx2MpAiiJuGJPTTLCrVXbtVRh9yrssLizR1v7uEZUwkyevXQUZikExRiYrx2c5",
  "key10": "2xYCHpur5i7NPh3bxesjTcpsu1dktoDepjbVg8dDgPjswf3L5oFDm71M9v247PsxVuDFHsFbL7sfy1H4FNbBGABt",
  "key11": "44WQJF92sxZSJUVGVHzGzixj1tc6MXGAhexz178GyuDZwjw9aumo6goSZS7kncshw1P1jFGALuCGgRFupgcqMwz6",
  "key12": "26AeV9N9c5EVwsCiSWdsX8JgJC2e1y15gCeqwSWhwyQBAko1RaDv1J5sCq2meDtu9REjETmgEZ9upUsVfiLh3GEo",
  "key13": "5W6iWJYCDP4YdGuQpBEs4TfdvL8cVtUhnttq9ohm1ADSVoRWnBMD77KnYqf8zjEwx2cYk39DTasnCcp2p7YCQUFa",
  "key14": "LDL7AaU9T9jX581RmGsC6LDSF3EtadQnGve6jKS6FXkCZZZu5e8xtsV6ijcALkH4mQaZFQ85BkSpf8qEemBsJQ2",
  "key15": "2WBWafLUeXk2VnJ3qmcHJK8TRBU5Ufb6jhFNvsH5NDaqvAMuGPB96NvyzW4WJvVrzp3jtscij2Xas7eEVWbwFzKb",
  "key16": "2MsmKmMvZBgUUPDGgqHtduWR8vuSemyt6dFs2JaP4o3N4vWRTHRYxLSyJLWHMBE6g3cBLZMV6mTXLpgd9AnUP8qK",
  "key17": "2xjkAV7zQgLMNQCFvBfebLXXzL1EJG9kPyDzLNXq5sbPdEk9MzL6V6V2AiNxquY2fVgM3Lafe87e2u2ZBdwCseno",
  "key18": "2vVvvkGtdeCFJd736EYYKcBjr48oyjskxYXqLoSCHuw9iaKeZv1EnCKeTe8abJ4YNz7vwDJaupz5L97xYVpnNaCp",
  "key19": "hupYparz1aVaifjiTGJnw3HbQEY96iLRWRBFtyU1s4QHuynQHVyWmzSVBW7GtcHmQMuRc4H9FRisyLUeXJqByYV",
  "key20": "YvS3QGMGhpEP6WffciK5XQd8Par5QYatt2co4Pjb1kDYwbe9W7898UezVhc2qvvrXberVSFhgxP17NonHGGb6c3",
  "key21": "4zGeqho5TX537qyLgLWyn7JFRQPVR2UCUj3Skyio1twZvZBmv51eUetnvTToyxVuXx2ZTLUQDQ3c5ig1kNX8ubMh",
  "key22": "5U4BAfmQEYqcEj2ha5rqxegXghb83erLe6wPnoMqsHoaayNsBDtqAu3oZEFWXeTNgS3xf6U61h9ptAVas7KqgSZu",
  "key23": "2ForjDdsqYjUyfHJH3xyG6mLSoHG4LPCp5egxwmj9cFvcYLE2nT669yvgti9S1NKCcq59iDPzSXM2shGbNtNxhDm",
  "key24": "e4Q3qScFqPNfh9VA8SLyuWSgbdbC2n4ZVagZf7YoVmu2CoSuEK39vmWaZgdAeZ6iTcP355wkgVTwHfEi57AKB5t",
  "key25": "2FTbJCr1Wck29bggbit1p9iFQUmACW8gSNFQX9qngCpBhzPS7VaUZZLjqaDhRhfTBXxAZojUj29eqBUeBzzWK98f",
  "key26": "yjYXhC1jPf1AEkkcFcUSrTi1kVZpc2ZzwE6PCB8YypvWRbUsbE9qZLxm4daaHBJJAHiN2Ahrhh4LzsxnVZqbfkp",
  "key27": "62ynFQsjz3dkPmjyzruYAtnAZinfJi3ktYm8db18dEgCwkuABabJgKxG44abC52HLfzzGzZfatvfDMVMU8rxHtkr",
  "key28": "5iB24W6XxyMTHZWGNq9J2u8UHjtfXs4kiVwVQb4JU3CtarcfKEWqwxQQCjpebK8DbzkPFEVdfK8pvuxRziBbBgQE",
  "key29": "34ryRvasSe1MYJdVF967hvQtGh5LanELeJbVuKbuqLg3eSXS7GCEyhL3mRnG3NpBvSJmrJ3QbMeDiCibkaEQ3Qp6",
  "key30": "4PBaUYuJUUArbtKg8G4LKtQ286dc8T4m2paeZyYGTciXpsxQdSJPPjVsx7N46R1yVF16Bi7EtLCJjrrzfTGYaURH",
  "key31": "2qM3gSVPgidcF7Gcosk4QaJdHAx6WSSU7xWx9j2waNuUKaEhUUSWga4AU9hrmvXuQXJ4owGKfzyLQx9Kg4uFo4ik",
  "key32": "4H35DtiirBL2TAJZZLD8LKscSkqPNNLVE2SH121MwcTivqjAnsak7Gab7M3ZoRdHGbqALk9vkXGoXJzMtmJRNYN",
  "key33": "4HyzjmNTcuQEQiXcrTZTft61TPwFgaT1idjkpg9gyfK37q6fXY27ReRkvU5NNnWQLTNAgSrBLx1svuf6e8Wmdh2F",
  "key34": "5meiUsaJGDpzS8ndL3HTU1pjeJFcogZuZ6VVfXdjNMGdmbkHbUZWYzLjw8ZCCrzo2uvJtFaMzd3EfQ2ZmQyb8AFz",
  "key35": "5khsBnFXSB4TWWxNdHoH858rcWQA2tRJjjCNBgeMJb2qQ6vtqZHhCNfAZ8Bh3RSChBg3jyeNcXazEqt7B6NTt5tu",
  "key36": "2ZC2GJnu8VyR3uzqqNyrVKYgyWSmnCCiMypyP9NhgXUCfzyMjrCcpY7ugEkabHMrVXHDfwavBWsqRK7dM7oe95rg",
  "key37": "2JJkM9U2dqgfACGbXmXmjCmt9bLY1YYhEzAuH9b7J77wa1kEWiWuHKi3GmBPZwCZGhR8XYtRVqKULgM941YMaGpa",
  "key38": "3SCL2zHpS1Ddntmhoq2SLLdRNJZF4kNEy7hGYuXVJgCgQmFtss4xeMVZngsUPT637eFRywLebHQC5RekRohFnBAq",
  "key39": "5JQjDcUMcR4KK1CAVe7piaVSc8GtkhPFWkFa1jbfAT63ESEdAZBeFKJp9iLYrKYHVJQW1ncgyknTDm4CxTvD1AzS",
  "key40": "5fhjvQ35beQFr4CRYoX76TVkTg18BDSm93oojYtdKeKFWYUemLogPRQ1c82wxJZyUp2cUyK9rd2HG6gVmS3pi2Ee",
  "key41": "2kQ7D6xkr1M2kkGhfC4TQsuXDg37j7N5SMgZpPCsMwcw1w65D2zHhGiab8vx3QpC39nPcR7JyE5k4YQqvNjtdup5",
  "key42": "4wpnBCetSh4kdABU8tFcYNL57genBqcmGQAgBaEAZvbVAq7m32hffTT6bbGGYKLvCicWht3u3cyofm1F1tUsvz4t",
  "key43": "3L6pFXYnV7NS6x9xWwdbgAYZjZ4SoUYLauRCXr8vd2JTARX6FEmtV7AcZk2fpgq4GWWn7VLfhQcg1pDUn9bD1XoF",
  "key44": "4WBDbwzSjLY6bU7sLkiui92odRxpUazEnCtNca1mEV1XDzXGh9XwLxJJbTCwxWvQsRPuS6pp1afpvsm9FGqvYuqq",
  "key45": "iN3m3bCxmA5rPtJ6UxV41Bh5ZfncDDo42T6VTR6VkQ5WidReWWwd92FdAomr3vFdB6ijMeuBrCyBAzb5UcSiawq"
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
