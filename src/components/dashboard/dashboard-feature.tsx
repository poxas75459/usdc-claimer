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
    "5DPa6oD2R3vyTkvByACkphDScmEXMHhoAjzyMwVUSBcaH5H1CMiYUnpXy2Lr2S7svPhf6EWL5qP4o91HKFdG7AC8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CkHYWLAeqDBkz8sjt8Div9MW2TJERSG6Zgu3J8d6pFyc6LTaWtg2B6sWZ6Crtn59ABgGEwBgfbYNd7Af4ZEsji7",
  "key1": "4YGyroSigSvV4KBSdA6zxoeJ4eHCHAx5R4ZHKCA3an2TmVRuSLuRX52f5tiiUmUAvFHwnUZJJTtNhSoxU8aBHB8m",
  "key2": "9K5hJS1gowJZWKjCKbcH6NZvvEkw7cyoRrjXjJUQyb3gejDDV8ZCTx1D5spUtVtNZubFWDKYMz7YRVGj1dFkhSr",
  "key3": "2iYisb8RTxtpJLFCud69s9vLoRFDEYviCBXcMvRQaiuNMUzhTnRVVHSizjmyqjRqKPbDAwkSY25ZUYkAGhePg43S",
  "key4": "57JBatVPxtvhcEEB71o6dWzuVd4jUM2a8dfnHios3bM1ZhGLoJahD2BYZqN6ip4iPpiThR6SGKqJUnErdBt74Cdf",
  "key5": "DKN9qNHzMC3zDwuiCiz3rDpMHbdXuW91eWKqiCSfb4pPy3Jdpgv4GfBrzCokwjnKizwyyfkRjjmiN9f2pqasFdu",
  "key6": "Q1JJ5xYmyzVjKKD5hcwoPc25mJzpbYSXrhMagdzJkY78Za3WUUSmw8k8EHjbELhzLX9GZnYKY5wi92ddtLKkyvn",
  "key7": "2pfrFzor6c1dK5AL8jKd7U3xEEQF1r34eDLTpzLmF3GDb5oT11aFyrqVRBQmj8vqX7Tn6HRXV1A6K119h3RKX3Bg",
  "key8": "3MGw8jieMSbJX9D91KHzag8nEtfNX6rGe2KCmWKV8rTxHcrDWyeTQG6kL3ZfqcfTPZEreyeCQzjH9Kway3XRQ6gR",
  "key9": "4ttCQ99ABPFZfpk6t3qB8q4gqG9Tc24qNtBbeHw9by9qZEkTyivYW1j2kvXx4jePTvjYeBpJ1BpkP5Hvqk1hn6Ao",
  "key10": "58as1RvyRa4rxDmaoydJcnxuRRaCHYry163GkRkNSSHdDDPeMX4Wd9VYWFRBdHuu571NmVPwNsMpB2c6WfGKPpfq",
  "key11": "jHPzoDV6621yG8mADgHUtvnvuTtAt2DU7q8odMiaxN2GxUyPfdBnRTLUVAYLM6pNF2S8Hiqog96XiRDzTX8PCww",
  "key12": "5n2TQUofp39tCwgT32N8aQuxqLkbTXYibet3nbM5bLCiyv9RHEFRRMY7GmvebyTWo93c9QfGu14mZFaQY9HJS6qu",
  "key13": "4Q1oPxSHjRDGS35B6gEeWvFP68C8pVrxHWDmDUVu8Ne8ECwarC9dS1NV4uJquKLfuoRYfjAjdaY68bRUm5mDHvpX",
  "key14": "2yMYBGKree4WxLmarfj3N6BSoN42AjxNTCkJcqxi6FdtSiRgwGm3RP94GM2uUvjoWk99GB9EQTPMSnti9hgn3ZF5",
  "key15": "kGEQa9egLRtvpvtV9m2cFZqNpVVzF3HvdFaZAJraY9ZZ787KKxSXsoyVtaqSgawDUUJ6BaKaH6CBDgvNPVFCyK2",
  "key16": "5hQLEZQh7g9wqYbzoSUwMe4PKwhnkFAJ22T9qjJDG6eNX8spL7ErjY4PgGTg7wsqdSg5K3KkuBVFqzjQp8RVzZBM",
  "key17": "nSE3XrGNAYUQyPwF2Vt17bZsgrA3jFm3TUXgUQSkQLhvmK5isJaiZuu8UevSLfBSxRwdNs3TnG74ULtXWNvLLmN",
  "key18": "2i8pCQfPWBrcrDQf4tKeGM5JLnqJkSkcRj658Rk3Yxr59QwyJ5bLAHUs7oMNyygQdrmitCZiarB8hb2fiibWrHSj",
  "key19": "38bK1tZ5XhrqEX9VjL2BqJkkawWfor9jizUJWJXJBQhvCyQXsKZMddoKxBdFieXGodKGFgW6GkuAqEfqTHsqeRVk",
  "key20": "21u4k11NZ44iWncwGVEgb3mgZxhFQcxzGxdHjQ9nCiSusNXaHh2KSC21JtvTg1Ju2hdFbdCw4QfWpMekfHXhwzcF",
  "key21": "3Y18kii1DPFMyKy5n8vZVrzmrWHhwk3SuqKudFUsfaR2vyKYc32bVWkb8hJQehMKvemkjMf1gKfARTfS33wwraNE",
  "key22": "KwpDGtxDx3TXmhQoEZQmMZ1wgZepTZdWE2xKFHijmkA6cALTKofRybHbmwbUkpubJj2mrEzwbNh5BLXtuxGVbr1",
  "key23": "27bxsRmZxJAYyAL22iGg7DiFeEqRLrkkoKRbXys7hqwWUAefqxnG2UmS3vgQ7YoiQMxyesPQFcPcZVueunpZGRQG",
  "key24": "2zmNgdwXZcyAzvN95KCHWFvz51PykcJd3oJvUXVQiNACK23SRDPLM87sKjbsyAaMkixmj2UnXLZ3ec4pic5Ykoxx",
  "key25": "2KJDx55vuCFygccBZg9nMeQ4K9oK2UsHKAPfjb16t7UphjvCaFzsbEVPWPX1vaVs12grKB93PpCng9r79m5D1KfB",
  "key26": "5YYkMLQuP5K4Q6dcCnFKAgacin7oBUWfVSUjuNkng4yYZduWkK5U8unVocgHkaPU1Vei6kSPCywE3NMqYo6cEMrb",
  "key27": "212psvv45uTmPp6kbpQE7YSriyCoBZPSrnPync7V2guQ9SMMpT44N5dDuQGKBsJaMQBaQ3PgmMavUZ23TfkEo73R",
  "key28": "4aEAAiJJ3ZquyC1biedNRDFoSPHCdMbHxjgpE9LefAxSvcMDZfsis5igo2KkrWoQLtFCumqfH7KeMNMeHKqJKS4Z",
  "key29": "3s7hDK3o48bLwvtSpLZ1LDvqLY54DEhGNXVASTTGhzqcLBbXRmaPUacEJApNHLHyLV1cvzism646rJQD5gstbYuQ",
  "key30": "3sYUj5RbedpQzL5Yf855JfQ4ngBRpy7FDrQ3Ct12qFJq8dr3ZhQagpVR8MCB9HPyXqnnu7dSXqUZ4H4gE5LhkhSw",
  "key31": "ohPAfcZUSfrbNo9Fvt2FQoEcyHT3gX8kso3vT8svXfaCqvPqWa2j4RDMMhrCYPa1tQDuXuSUEaqZf1Tk9Pm435o",
  "key32": "5jLXVsF423Fvji3Dx8QScmtZ7LuihRxrC9sT7iZiWxoSZV1Umbo1v9MDKAZ6C5NkyzvvnQTE15XsvMs2yu79s8J2",
  "key33": "4xgkAxt6tURthETb1cMgkWyCJGXaaAL1Td1nfYFSMdGDRcS73GEKJ8DKpT86Mv26pqMZvGrrTCPSPA9xrAWG6SLk"
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
