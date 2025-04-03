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
    "4hiq7RBbQ8Xf6Xmj2SEtjY2mu8jMS64ebkdkNoHEZ5gvGpmLy59CDrcjEXqS9URhxNeBjam91mtd4UtD7gKL38y2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uzWcNwy37WwjeuwgSYQr7w9zooC4svsYqjHxVTKSRbMKtEtg9xSDrjakD6PGZTwR5aN3f5NxRtFChTRSm3JNN5J",
  "key1": "4vZ6QGETUiZ45fjWv6g6SMyDCy6FgBPMD3PR5Pm5Y63y9w2xzN72f2oFeHbxkrdwCQQMfeSt6hq22wG2NEnXC7Di",
  "key2": "3URJABnq8ZqXo9y8xMscbZQPfFXFmQna8dwGdeLpfTAUKQVakYeQsFZu1FJeiNmmLEwB9EsujYytveYykyoZXkdG",
  "key3": "eYzRzynPFpredoQsJuasZqMBcn2SVrxADWeCpAfsLrRE5kWv33JoAQcXEFPag7Hy5m3C3DghCttm9hLq53ac6p8",
  "key4": "2JW9qPERWpndPct6TQgkTkmVGnoBqdTKB2cqBZgGHiALLu94dcpxyntEkaLie34xYu8nfPebtJ31okJUAfjXQeG8",
  "key5": "5tR4FqRJ45mzp1cxwe2ZXCrxUTcuX5rKge6ZoKnEvMwb3zJQZTiyDYkh5u5TTjtGtvtMJmX1CJFWWqjxCbZkSPUc",
  "key6": "5QWmvWZhcCNvuavSCbBBifumcsfuAESxcBYyw2c49xsmPEmCwJmp6xcFJ57Xfv39exwN55r3XRqW9Pgd3f6ENi3x",
  "key7": "5HvoYRsWgvbqoh5kWJ1qkw4SNVnqgQc6evDKGBnDGig8mp2vwBjxG8s1zyED122eZRnzGPr6dUraSotvsY6kPcN6",
  "key8": "39Y4QjU3W2NZxGAXXzcq5P8YxVUXCFL7tLTRt6BjVShAXgiHUFToN2sZHgUfcnZxET4NhMJTYUqJ2P8eGRbXNV5V",
  "key9": "5QmFLks2rZerTut9b1KKtWejBDtF6oVdNRPzLGZshiKdcx7csrdFA1MDNkkg8owPowi6h7vXqwDpDB61tGmyk2A",
  "key10": "4q14JHdt8Sq2VfcErwcczB8NiYBDAq8ZzNvGEuDaGsPssoVPsushpJmdf3xfyiE3Y5TY8JRQ95uGhduTyGznCudX",
  "key11": "3n8WRJidHN1LrgrqEdfm8nMDgegk9ABzyJDDNiZfaog8WqGTdbCtaXX3y9dtXa8VtJHdn66hF5MvDaKiTSnnRB4P",
  "key12": "5Lax1fQNACFYiHceukot9bGEu4tbWdEaq1u7o4VfrsVQoHNa8v3yPjXMdjq4boURnBv2tw58RUuqREbxiH4W5gAH",
  "key13": "434EBQbP2Y4i43sLeRwdzx19PzYMK1btwuygC1ogG1yTN5cLP2buQ4HFwk2Sj3n3C1VbyXarE51VNrUogzXBEs3Y",
  "key14": "4yKW9EvgXNf1MHUtMTYu9tiQJkR7G7u1RNKmdXa7FGcWJZPt7s74Lo62Q8vd1kTBoa16JhB6ALN7tnJc1i7nSJFG",
  "key15": "5MhDJtBxEKbH6Y3fmDHatPBRhBjXUtH4jwoEGrak8vVd2bxhqoVtHQjsczpjthDX8iFH4vu7gYpJkzcyJeowUwDN",
  "key16": "bSsxrTTq2BhP6JWP55TNamZWbBJn1rZ2BYqrn5ibuqWtJPtBqtHk4RGzweHSFrNi7JUJLs3A7T59NMJz4EkuyKa",
  "key17": "2MovhdKMJGZYyrx2g8oGKQPdSEAhnNniGx4WDDVFivyigLkG78tcXwmiENNDZ3kkUc7Nt9nfnnbViL6QyPg4RYPk",
  "key18": "2ahLLtYzLoVSvPDbMWbE3d8YzoewwW6npE2U27iBuJDe1JHoJ3NX85aLXg5dMAF1otRtiWy1s1GAXAYrQQbzXU33",
  "key19": "2sXL5cz1wxWvFXuydjuuKJfeHsG93ZUFusfdRctHvUNE8mkgKxAP4NVXU8htdDkuazuRZ6BeShpjsxJX1D3VcfeZ",
  "key20": "4Yv3gs83bLqFoiAoLRUtR4xDZA6AAtxjA3DpZCPepKFRD4QFTHNSDdxur2uHFGvhDURVybYQMjg1qjn4Ueg9cdth",
  "key21": "V1Wxe8NcaNuxboxNVtEZ5H3qeEhCPqKP1AU1aDXKN26J7GqGNvZ7oC9TgfVsUYcvRdb2JehiqwULMB1kiNZr3M6",
  "key22": "UP4Dudhzm4CTwasjpruMUFLuYrt5NNERTkEBVthBB4YymN1ptkt9zGUSJs6eXyVRMBNNmLvvsrxnZRSnCJtDKas",
  "key23": "4bk7wcieJy2MLC1J2a3LePPiTRXtjdJkUcyBL1RCAc3BbaZxmXNAgCNv5U2152TwS6xpENm4JPTi7igHiVgrVri8",
  "key24": "3F8fWBtRaupjT5cyD2bm8xCcjnPrsqUkyRbFhm9GwyqAQJSZbjQU5u25PDd4DKaMangzmpbavUPEg17ToA2mcdfV",
  "key25": "n12WAvKJnvT8QHqPMge15Z4LQ7VVEqNgiGJZVaCkNUNpR5j6zUJuVt4E2bGGjrqwXN5V9osMtmcRcVCkd35J6uZ",
  "key26": "KXu1tGVfYesnAyxcuU6PfTXreqtxtn3J6na9sRbUscUHdGPwKM7eWL2CJ3kuVc8U6YG8qGhGAyotJJXqGbKv7s4",
  "key27": "8HvQd8xX4G2i3CrRMwNXnHAXveUEUUiZNHor1GeHo9iW8ZgJgWpUdoAWvMWYcYD9XDWjvG3VLh2HPMpV72GWMWn",
  "key28": "2ecTBLrQML3XaxoFqgGUkvtHnnzkMxpLM7oTwNPGcV8Yad6BqtZiNmhanQBkdXeij9fJ4ntfKD6hZw4dkhMN4F2E",
  "key29": "3kaSjuQTmbDTebtsgBk3yM8YakFE1tGzvBYfnx1MLKkDh2C49YFe2B72Ec6GS8DVyXBx4xUuRkgVct2nQ9MDxhe1",
  "key30": "3w2iFVnzCmuTrN9gNvNfN33aSTd1W5U4hjPtWfTVErYosJx7JpkXYnodgtxXdoTLasnd142w69V4wutRKuxkWL3g",
  "key31": "4utWa92k1q3m27NrJ6tYbPDssbTqVCNqBBYfXvq2UL92A9f7aNEitrHAS9MkP2WnZFtLsgMA4tEMiNxY2QUfLGYW",
  "key32": "2FKYa3WT4SX4t2QLHwjY6Fjq7TktboCkw86hXEVikfBbhTV1ajrysLVoC8cGkNS6qixDmm1v3NgryEL8PrcwmBhm",
  "key33": "4Yp4U8JEyPpfv9SLTtQk5Yq8ku7FePQmK6qDuw2i7ZgV4VzVC5DeZ55UqXLoRK4uiLbQaCVv6SL7n24vBHEFUxad",
  "key34": "KbLEEhsChQHYu1sAJ7ndoK9XKvFCpi49MgzB5CPALuT8Ad7raZLsRVoEizB1Zb8cvKRdGt4VYBx8DM12WSvBYGa",
  "key35": "4ww345pGggkyw3SeEaMorrFDLxcw27QTuHcUndcacTVessf1BY7jz53sCCA8CnauCE4SwJeo6nJk6zxr2wGnZQSr",
  "key36": "3T5mRkSRJ3h78BXwbBSQsBrAHgkgVHZnEeWf3c5rb32S6gFpN7UsXvVfH3QBdh2Zfwf5bsTCcyHSe1djD1AiYL6p",
  "key37": "23TLoUUiqSfh9kUEoiswKxgHJZUwW5b1gwFTbJcirFN6QcPHQp2jhnoEvCGHTLFek9g2vpjvHRgwFqGbVGWBQCiT",
  "key38": "2USAQkx9hQbNeKAbmLa2vdoNbQ2HcEio1ZZHLKeDAK72iQXyWbtd9eoMoebZ2iC4GvkdGJ1DcwYoXTTVmeXKrKN4",
  "key39": "63H3NKEnhYBjRkU6MsMXCPyC6PNuyq4xznPovdKACD1u1DHnTMFdhjxrtK9yw17WmLNG2MyvwZmbsfad3gbWSPSj"
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
