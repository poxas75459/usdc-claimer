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
    "45UZakMZSnVDGhrY9ehS3b4P5LyMu9huENSKPKXXrkRt6cjRkG5CosB5s1waghhF7BQYrycjdoPx3YbPKadCMS5h"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MASBJAnGX3UGXq7R3ximnAN5kPd6xyctCgRCd6fwhAuNwTCW7DojpkyMHVAckWfKc6E4R4rYoRVjBqbgZjbC3wT",
  "key1": "2h2f6cv5LcSMPZxa7N8BaaHCbmRJ9VtZourKTXM9Zqq9PadaKLcoDuUthv7LTLm7MEWLNFpoHdQggdrCtdQ4ymDF",
  "key2": "3JVPCed62MrETQ9DMuGSnGWsWc4TQ6YgU9JiXntVC1UtxeQmWwwULBapCgbQT7d4EEbm4s2AjK59LQKz1A2ekD83",
  "key3": "pyJtFB8mzo8vVQrCJbs6zi8iejZQXycymGW2uXWWYdntUbrUkKrF4HM7NBsWKgNBhYr3VeJhDvGMXDVnaxK1Bof",
  "key4": "2XjCWygEob3qtWTFD8h3Sc1kTCSxGfyyUiSZMCD3CS1AHPYYBCLF1ChRS84Ey6mXurADwhbPNbmS3B2gP7mrdHhj",
  "key5": "4948Dg5jVDy3Ges8RXmuboJSCiDZDKYtu5tbZeta74S28FRxUjJJhBNicxpLp6zraQDr82DF3NtHQuKDsBp5aJnW",
  "key6": "yPfXXR1YTn7o6sFzRiJBJVsHvqjfZHbNvVKhGinsGzPy3UbCjyNtfN6LtacL8mPe9Ch5hnKgi5Y2GCuCLaJXJuC",
  "key7": "Pv9dwczLboBpPRNoBWxKgTPkRmJzdnzfHVA6zzEPVMWA95Bxcaz7wQ6xQpMtAbkxc1qPz22HcGsWkk3E8q9UP5y",
  "key8": "3QT715oKTLPN7r5KdyyQ6dUVCsQajc8CUT4PNWrELknS2WoLhaMZekW1K7j3JNfSWytsADLD4xVPyYzatwXBbi2d",
  "key9": "5a56Lh7cxaDTetioPmTBd9wmVQRRgsgq99LSXSFGubeCWM45Edz9ieKkQiU4qCWfKq8tQc9wz3QMn4dEaH7WMd4V",
  "key10": "3xDp9bnqWEJ4TEQFdZ8MbsRsowRthg4dEMkQcnotCzewt9gTrpqVCr2YR5nP9zNNiPdAgW8NY4EzsooceMU63Nqu",
  "key11": "2D8pMgdXbSxwvwFT7wx4iuR5BZLEZE4gT13KeEvfXPVNYqpqYvVeRRZZLLfU6nyCsn7AU3nQSd9NVnccB1sBAiu5",
  "key12": "5ekiJaPUajrYWfGVs79QNEG1X9mmkutZPWeH3jfVDThtuaUiPpQFqRoYF7a3fovHw4m916XdutWUd1DrG1AuQ7cC",
  "key13": "2eZH1PxeLdgLXcmDwdt99TM1KdC3cxpuXJXeV1qfkKt6FEyagkkgjkh8fnjdDCm6hEphNcPnTRAF6hVaWC7n3ufN",
  "key14": "47EfdkiuFWPFuB4SURrUKcuo3QUtd4cmADSTYCKQZvEBwn1uxTNsVnDjeoz3QHarrQ896nQjgrZ3bb5tzSWpaMM1",
  "key15": "znQS88trKF6RWDfsEaLQ5qFQp7epMDpy3zXjebCNS73CwjuRBabHMaVLw2fdaDjfm2gP5UyjTvnXWBHBmRhk5a8",
  "key16": "4QwKK77mtdU9ewWw6WZD7hKHc3ERkQMbFyzgsxGjyeUPnEQsQH2cW1CR96MDuU5x5Y4UWfusqShnXBEoBjrkmdmW",
  "key17": "5e4a3x9wNPhxcvLMH4ac2uvE6qVshw2skUbNPZfw6RbEoUQfUyzBYJJ33odfP1ghgT5ucJhqM5LXxfeQi6wmRQZd",
  "key18": "TJUjvBSghm6bwaqxJk9bvXNLU6LDfqpdA767M34PaLsTAhkeTjbv6xeSbfnTzSWcidgPT1MA5N1Qxrro8WuRsda",
  "key19": "4ob5hTtzudPHCUW8fsYdZoWzLVBfzza2bJSJiweGofN6YiRFEmXrZ78kLRnnY663KiWTr454hjDqX6nkY1sceiaR",
  "key20": "4VjA5SGHBA4MosJbakScnAYtuXLyhcrygBfJWGJixvyg529AgutG6beW4SPfyCb5NVTtQtxZ8NDS3PDeZUu6294J",
  "key21": "3mEg5RZTnAXHhK7YhokuYKTbBTFnMBAY84rTg6o2iUf7AmQRpdCZFhhaYUtTvGompc4Bc3zATQBbbifDCwzMbNoB",
  "key22": "PiVdmKxL5PFvRwwzpWmcL9xowdx8iALnrh5aehzc1RDTsbsT5b4v587W1mgkTco9vBFLBWKFmzsFYCvvApdRqy9",
  "key23": "3hzGENWGdcTVKuoJwt4E9B36GLeUimJixNRwCuoeGhQiSwHb4QtWytnVuSdkKAVSbezsj74b9peFB2HzdnDJ7Lgt",
  "key24": "5dyBfjx6hFDQSTHxCAPwyQAFhrY3imRJhb3DQA7UuP9Wxt8nLMZMqAj75zkdbH7cSiddkyVg69keiiHpNxZTLSAc",
  "key25": "3KG7s1ev7UyrYs39C4dkDNPZsxcTwzVjdibEiC4F683E5vwRRx4vvhJZDEb65Y47XgCwrpPqMXiEbA51UBWsupTh",
  "key26": "2RPGRsjvBCPVHKUTU6azJTgybA3pEQUd6XcF5yA7xx4vqcGZeQBN7RZBWFt5ShkxyhEPjyUsJMET6naYxwK9JFLG",
  "key27": "4aj2PKXzTw9VgM26xQ6y3Ne9B7EeVuw4npoZhk67SmBKtZUdj6j8qp7gUafria6sSsgjsDMPKoUyt7SG5FmMjCHF",
  "key28": "3rHAViiKgGpBKVMGnJPUj4gBD5sMqcVYyZ3wbLBCT79Lx1AGTpetniEwmyS8wfPmndKyF2oWemhE4W7BZBisBVPw",
  "key29": "4aVT5RFmpj4PyDEKv4PPFVwu1VXr1VJxkSikfxZJtStphfmisN8yh5LFKZHAu33K4iAjJstSCVUPsdfrp8pajf6T",
  "key30": "2HAwr7HACs58UYtN96o42odAgRt4e7pQ186k8VUDbTxo8SSkhjEZFwzjVXc7K8LxvCgGWd7hdNutRzyPuUqTVnyL",
  "key31": "7fJxDSA63aFvbGntmGW6WsJxpELeu3fc2tMJmdBwVJssKARza7QRLnyhASX8zJYeFeAym8c1pGGyxLHxsb9tdpg",
  "key32": "BJagATxGUUJY4jEMy3uAu32FjyrRYY2Ep9Ci2AYMzfffC4W8ACbvpedWovqdNXTHcAR17XTL9vmEiQFskRu3SV9",
  "key33": "4sz7ebQ5sGH1bBw3RkxU5YrNoCVwzyXXsASGTmcPSde9cGBWKQKZgFUuBLxraRfmrUuprsrWcpRZ7csPR9FhJ4Gg",
  "key34": "rpQqXxPdnSFs1W9dmeiCa291ds7hvrV8JJwxKwfW2gcLnrZYa7BreRhrBekTMd5nG9wwJWv5HfsvyKhCG1Ni2PT",
  "key35": "4dWmvmnQwQKhaLXAjAh7AKFyGsjqXTb9HKakP571QUwag3CZADKtNiK4GG6NiYxxeMU88DLNmMYN4oVTVwu3yEtD",
  "key36": "2PD2NXFWsBCJcUpxStLD7P38nNkGTwK3RbHhhXpUqzu2NcJ4GvGmukaMBDpvN96TWShHkyRvhjsVHRyNMGRotmYN",
  "key37": "2HHoWdMt2NmMnoA2bnC37YdmmLSQd97qnQ3BZFkkS4XPkKrrtrN2ZJJGrYdpE4sb4u9XGoF2RUrrDsKA8iwTnJKg",
  "key38": "5fqaLMgAP4Ujg6nNbSEccgzin6Fk4Q6ua8Vsi7CKQWj6RsxhSRgoPtEybuX6nS7VKMvLDSyvrUAtuHdsTkSq3zcU",
  "key39": "2Dvfcp8vVCA71bGA6rLPQPnFR9KgiMgayMiXx1RZM6arXjtZKuQpeH9pJc56P88EnXjbQv51LEucEXtBEZfDCsMh",
  "key40": "JBRHPhQaWWtsZyBiBiSJ7wnL3ETYuM49BUqmX2AXRfy3ZE18z7VGWiiC3uCKSnqZa5ejGgmEzYT8tQ4nU1TNhDX",
  "key41": "5QuGYP2VKvwr1AFjYhYFPCrAZf5kUKfimsDEkUmMVWqtNbePnhy2w35W5JqAExnkWGcmD6RAqgf92XJusdrXTbBs",
  "key42": "2v72N4mPmZd2QjbXXB64Zapaq2Ci59KzuojJVHeFitKPj9NW6QZ2rVSP9cQUaiHdLpopu1DdXeSAknQ8otjAWeBp",
  "key43": "58xQxj8ujqZPcFBzBENKViYsdWL9JgXzrhSkZvp99r65rzLyPi1i5k7NjywsEDZ79QHr6CSBDLYyDnZ4p6L9ooLS",
  "key44": "3LNMBEwTQq6JKtbENtvefD36dLuQNjaCp22qwQ3dbUkbUwWAced57bMHtCqm7ZE5gNiNjcsuTUeJYkEfZcrTTFsV",
  "key45": "3hip7xrXABTnU1WNy9e2XYyZVDMtMJukpnXrWwGdDdw2CLGWyzHtnm7hjyjf9RGtuoFg8hKTCPqGyv155hAPkCcY"
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
