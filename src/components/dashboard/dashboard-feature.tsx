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
    "3GC8pkUAdRLhDgCnUdb27qZzvCqECgoDnycTEG3jkpBi65ZJ91sJKm65QsEpJDhgzwpkCaskG8Urtmyp9y3R82hY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "JHwPaTkxLeukddkdYvAsA9Rv1Krei3rKi5qKisKrRXPxMAFPaMBFuQXdAwHhV7tsBjcX4cUbrsqrhQmqLytRiC9",
  "key1": "TroJuxESQHD2KzVUDWNNi6TgZTfxnQ2TscQXTm5nyQs8EPWLi6PqDDumQpxHw4DVPKkveJzmoC1BobDmszzz4jt",
  "key2": "2cJjXFsDjM6wEm4YCDFSxdxnpukmUWutQYJafs8WCR4GpJEn9EvzzEjrPeMWNLrVJ7wAHMEcszJeZ67Fk6WKpXsx",
  "key3": "2e8vok3qhEAsz2bxhY8ttSVimr2j1ydsKgmaZUQTzkUBKBy7VCtYT2CFyCkCq8QeHhBfzho2DWneUsXrCXjC8kmV",
  "key4": "5u2hibtpNtXmjK7KbK7vf9AjNVCx12SBWuxN5RDgh8VgwNd6ixFjzNVDccRHRcAA4vhqS5wxf75TrbjNu3NyuSuh",
  "key5": "562kvRmHD1sReHiFmsksZWBFqmZCS8ocg8VyS6ZAKB6sApeWoKtzU3bxtPRjkJjxucgnwwY97dWeELfQWr9q7yhg",
  "key6": "yCb3XXzDcxvqtULE4CXrHxat2H4tE8EbmVt7xQy3cXsZE47FnmSK7Fn9be89DwFh4xdRVhqjrwN9cTyJBX192GG",
  "key7": "3f8bDM5crJtSfsBrtbZHQwW81PbP478si1CVvRbfxsR4Ms1Swi1frn6dbB76gqAThWRw267Z9bC9C4eFHfB2ssDT",
  "key8": "2gmEdaNZLojb44mbN4M6suZugwuP4cCxzxfb6euh8d3NWzqJHFRqeaBsfM8Sz5GWUfPfmKZ5FrwctsZWqdNVtaSX",
  "key9": "2nXE2yV9wP4o5S6gJvxQKXCHwJGnw5eeAN6HQKogSLArEeB84JGA818H7pFwYAVn3pdJVpUEp37Zh4XvCFq1qmsM",
  "key10": "5QrdeN2xQjPHizAu496fkpi3XBW4QTNFRhTM6rtDPdjVYwSR48QHTr3xid2xUNAoNPz5VUVYbTejfn216Qyi9b6k",
  "key11": "mtCQBm7Kjp8scbGuEdKbaPKeXQxHY4eDkhPE3vAEh5uYZjx5FEd77K1fWQ2LUkAFWKXaQkzAmKAoP4x1EjVsnoA",
  "key12": "k1M5J4L5w69GkYdBDEyTFbgheLh62GSTzYjLadMo9r7Jmjju7zaJgCW2MwiWaD5ecTEdxSL4MUK2LGXoEDo1Szd",
  "key13": "21U2pYyBQAnoZjkv9U7iUrV84mGxTJvAYaypo8FJNJo3rZ6SVb8peU1S6w1oW9QKcDexnpha2zdoBzsAxDCUD9BW",
  "key14": "5MurGgGa1jxcdZcMb9fGxACgZYTQ5N5XCge6HdLXWiWboLRKwCNdv1qFDQxSPtboiMDv9N9keRmWmPT6ASgDc5pa",
  "key15": "3ocm71EuQnZWqm88TgPRJ43NLf8xsgwrkdkGMyqhjKBAdb4SauJisz3dKjasR8DXGWQ6HdFP3LWqEGoKFGnho541",
  "key16": "5aei6nvygEKSQhEJBW86pZfMNmJY9Q7yZaCgwUVfoC4MFQc7FWoDMACEiXfUCSVQffeJZ6g77ENGpds9unqEmUwN",
  "key17": "2DBmQSok8UhGxZeBP3Y7FtB5d2jQANBY3wmiXxGuCdWdcxG185ybASTG5T1dYD1yvQSQvdL2op7qgGBXwQASSgix",
  "key18": "RoGEsxjxfTLtdmrkaHC4mkJQYpJvqVp27pTMn4rwz5eEmdA8U8VJW7sJUWUpiEZRmfXQoLrmmP9M4VWju6EUfc9",
  "key19": "4g84Ui1Ak2GWNQWMmaHT6jbQjqHGRTKGrd1xvagyoMGWanysYsg3UPoWBELqiwHL7KjNwcBAiK5R94Lzz9r4AiLP",
  "key20": "2Vc3DMG9AT2ZBrUaquTmcovKkt5PW2k6w7gy4Wp56hthwD7NfgnNcmsWPjq3RyDdxBDkfb9VhEiTN4JDmas1K8Wz",
  "key21": "2UzWqzDLMukRtjQwdwFgD2hvotQWsE5Y9c4adaM1b2ZZV6CY7FDoVzt4zVjuq9fVQNZxeqeK1g2jzGKSyJEF3A9a",
  "key22": "2hwBFtMtvZiqTZrd1VPBaVUYoe56Le1y16tASyCPi6L2RBPxZt5ZGAGJm4Wm2nBna2EuNdYGFYBFhJ7CoDn3R311",
  "key23": "43dXXH91hjz1z6iMg8b3CSPyyoD4kVDueAqGmidHaokKyT5uDGcFf2Uw7EY5DX6xs7eJ29oXQtbVN34DapEaYvLZ",
  "key24": "4yxyW76UHA1yDFFcFWNV6zjH73UGguQHCFtGjmu58rN3V412U1TPX23jrRarmbTMbW2GwsUH26uSW12ZsuQRdes2",
  "key25": "4BRiNEBrBC8VGSz6ShZGiy1Z2vZxud1r6TCmFewseYDgnaXHpTwMyS3Sthk4WEo1p5gt4fybuYS9vbtbREu6yej6",
  "key26": "4STrTkWyEBn3EQf6VtuJtrCzY4hCf4M3mthi7JCxocveAbhNCGoDBvzXVEBvwb3xyUfqbapL48FrFK2ygrESDGPW",
  "key27": "3AbA2maRKkexwW22FD9jKrV7r7XGS2qcBQhFs4bLSoNsWu5Bt6MaFWRa2jCquzqdovTwZSzCq1LQYVEmHDadH45F",
  "key28": "4FaGf5mSi6VeJWLdgX86VDWn4LnMTar4qvYHQiwXZRAy4CS9uDi6WnExFV4HCnTU3pNcYDXkFxaB5Sbcg9GphPdc",
  "key29": "2XSQCc2an53VBQNJxw3zgKd9DubQZXEnAv1vsYrCzow8LpAJcw83ckVfuR5FHQKFdGE4XnNZN92DbZBc2fxe5Pw9",
  "key30": "3cY8Py69TuwXgKMHKFPQd5RkGLQeShMVpJJgJ5xBsd35a7pGLHksfETFPgpKmTXVyaDckjAF1ebbPPDiR18Gksnw",
  "key31": "3zCrPPBsUdv7he6uy6Ve7tiTPwnCg8u4G2PBrRAgdAnQhqeqDbwTg8c3GGfAusneXGvZ3rBhJuskrigUyCb6swUf",
  "key32": "AtK2SqpXZUDARtbGvJeNpAF71iXvzq9NFeZ4PgszwNCu9KkWn2LxM19ZuiKfvp2g533kezuT4qcD3BKoTTMU48R",
  "key33": "5s1nw9JL8wvAhHWsnugkJKqPrsKiM4DSvWpe8qSoGyKMSaoWwRH6dAS8JtmRrvwbYN8E8ZETg7PW1rbWHggXo4yi",
  "key34": "oDu5GYbRu7sgffiJxH2pcyLiG2HQ4nufd9ajZLSeubLpS1T3wB7JagmR4iYVkaCJAvfkDdM3axfCcxoPutSYnob",
  "key35": "52VLEHv9BShbN7sgm5vLqgYW66fJpDMZVJy2ys5eS5jEKbZ6hhJZadpqGLKS9JWnWcdC1iAqQQr1zAvCZ981eSFr",
  "key36": "56D2nMXYnqfgPuz6PBzWv9oWXJMNr3dhooBA6qH1ZPu65K8JzjsL5rTJHYC6BYzXDZLCjpRNNAEJX1PMCMWCWrpK",
  "key37": "4PVUohwCTxjo9umsTuKqDJp2CAvXTPe8NsAnKorKU22QP5BG8gXMYWzmyaM2qhnrNeGMULMxXLjsGnX6aYxjECKb",
  "key38": "5HbCrY1hC68E3cddNj4a64SeXCQ2YcWeESQCsNJPan1mpAxhJEpmwaUPNYJhnAMm963R8AvyL6FJaJ8QWocHvvNh",
  "key39": "59STXgdM4GVt76gWyQiyciSA5sGdvknoWAJtFDbdpuHmqpE9AfH8scASmw5RZPzSAyTc9Pqo8Ckh7A2Zm8rUzTxB",
  "key40": "4rcnGBcQw1VLTXmRK5m2QWibZuHRaUapfU7m2Y8sHrJKDqwGTP3sDwoqzdWm3YBjzuzeF7Pcjq729ubuFmV947Qy",
  "key41": "2XEk72nG86SLuGhvwwNBLp3Vg4C1TNQbaxFu9TbeCrm9huPLbs1jTjfpTxCcbtEZwiJo9huAGQ1Lm4Ag7kGMuKPv",
  "key42": "JH8hyz2dwtmspP8JxgLR2isL2VoBNLswg37iJtWQ2L7Edp5aWM2Es52P65MPDU7J94i6HWuGsrGrXSAfshZ8pbU",
  "key43": "PNb1iDU9rbLuS5B4RtHJm53RXUuLa6XPtVZoWCZDnNqBxWCNH9hRDxHHMS9oGq5BPqbc3HDvQDQEC5EZLmyXacg",
  "key44": "UhAYRXpsonjcMRR54zVsAzmFTGo7ncWP6xw4BUBX53QKTAYp4A25iHbyfrjLJsRvTmtjknv482fmD9mKVxPt2Go"
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
