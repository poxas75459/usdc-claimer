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
    "GJ23ShZ9fLjU4M9ip8RVoY7DGhi68jKqzDDEfjXz4JGeunVmGztFiCsNfq7ffwkd8c7B3kSFmwj7CQEQDBoN3B9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3t12K5H4C1h6Ccaym2dJBWNzisT8kqFpKfhRJmzF9QsiAVCC317MWiXcbzhbf6aQCCmMTebQRY1KPeEauimb79dR",
  "key1": "4Jf1uvAcd5EwQHtBLkDEVTyM6aiNGTAWHWXdKbuEEuFfhuknPvyx4LwTpKx9HE6jB8oNZ73Yt4Jxc8abQyHgWfnm",
  "key2": "3aPXu1qubv2bdAZpK2xvUUbAN1drNTRh3EYzDC6temxeVKfCWCumeGrtPZid4XBYsNikEF5Mrf3mqFEa6LSLPgKw",
  "key3": "3GYJCg3QkN8EHVNdcpqhDg62qmTX3CzsVBT3U4ihVh3YoiuxKrruS7LdT1FyuX3PsfEiCiiAMsxxaiJN9kkabppA",
  "key4": "Gq4EFr4epnPuq63ZNeXbtjWBsTDC1MJmXGLG7xHZaC4qhc7Z7HYRnhW3YupA1D6K8M7USjM8onQdANa2UcBEikA",
  "key5": "5uuUrHE38TSVRYn9gHzzaysTvi5bq4e7b98fcDYSutCDbEarghdE8RsSqpFvUtWp6GRszobUWxPKZisVzjPHTwiR",
  "key6": "3prYLxU5du1SNLKtn3FaQw1AA6WBqr7jTKCkaFq6cHWDXS81BkwQHBt6p8nALxjJD3gHREiz5NrqACjHuYHoJPsS",
  "key7": "asBTtU4XQCxSQGidT4PrGwy4Mvc8L8ymYZ5K36JKFWZaUQeJaxAv1MPM1s4sr9g2c1JS6GivpBwr65pMB1hXRRh",
  "key8": "54KVy2aWNTCXXJEpPUHWoMkn5MTQQQTAyFaUXQMGRAgg4aSz4Au7gr3nD7woTN9GRb57hypNj6nFzzYtR4eswsKs",
  "key9": "5DfFYdHs3cXuGZThoL4SQNM7FnXepnUz3iBTe6PwSkxsnfUcCc3Qdh8UUsxfPLruD8Y1G1ajmeZVBWxWWSEqnVuz",
  "key10": "Uomk4H6ngm8zFPVEtgfzNjax4wnHq19KNMpcsQTdpi12cjW7mzfKH6oFWv5VebX8fJAW15WckgQ1QqE6V4WeM9d",
  "key11": "57dQFWrkBiTXGiSmUHHnEvwm4CRAqc8WRLcUQub13e1GcGY5HMLWDf6DpkuZCyii2mDdvtkHJMLSs9o2npXfzpJm",
  "key12": "5ictZxrAUg1W4FVRZK8HsWZvXc8AP8JNeWL8nspzoB7jqh51BchFTmKXyKeYJ49uc9gSxR2njd3AKx3P7Rh9MHYM",
  "key13": "ESNNm1aJZiRVg4yE1W5gXzY3stSjL3fEBZbFUapVrFDNbUPTQJsfuiFC3DmkQGQfQzeCkVirvMiGsjieyavPUS5",
  "key14": "4VsQbNoPNnSEZgTydyMazkN2rPb3kP9J82e2JBBJJh14ZmBBGNTYRz3Jh3dedhiDj2s5rfMuvweV8vuNYJn9fh3B",
  "key15": "53juHy1ftCYyErjEWFS4e1Bp2dVnnTu3qeF2XCSGd2G4BNEfiPp2P89mvut1zyUSZNi2qtASM1sPFDagCyaidzFC",
  "key16": "3qXuzNDtC12fgmGYBq6FtZZaLjR5UWLs9Y5EtLfQuddknvW8js4bScGJok35DGrusmuoGXTXgZRcXRqW1KKXLuNi",
  "key17": "3abR6tx2aPSgNyZzk9yQ3cJVJ4kh6TiW4FSB9Ujw1x7Qy8nsgAohN2sggwnfSPRddZbwfBZMfUee6vR6LXk7FPyd",
  "key18": "5Pzu7iLQfYbzQMjDe3RMFJiBjuScCd53ef6VDxatMKrgihHExtAT6FLTFs3o86J8STUFtF9HbvF53rxLvzQopMi6",
  "key19": "64NB47jn6E7xJfM34z1fM4nx6ktwzxYG7BmUdJSYXxByJEyDi4XB6v2rhcW7J5vb24gm2pPhB8pA288ZKsKkB9Fn",
  "key20": "3PHxZKuPm2FVFUmmtdb44GBuyjW7WhyxFJRkEd1vtJMSyWnPzbfa82SBBLT4WiheTF4mxZptwUR7bUvbvXWS3rST",
  "key21": "xWQJLHg5yddkfaYwkBhTa1q6qrjRHVh68uGgdH8etZa62YUVDRRrf6pDKXBoWDJdEYQBdkQU8pJ773DEc1CKM4v",
  "key22": "5RJNjUWMdx97cY93yG18scUZxvGMaX5LfUX7dy6kAFk4S3877v1qVTLXxruw8jAb3rhevMmSc4PSh1LQuCR75NxB",
  "key23": "7P1SMb55f9isYtrHvr7pnRQjQAYUCCLH4R39joyrUCpX6jAJC62WtUs9JPmJa2VRSRH7eWYK5vW2g6B3umD4cVw",
  "key24": "5PM8tRR1oyf5rsUcwUuSacqKukqL6PRcs6SHBJD5SxPWYvBcoD3g5woaRcaxrBrcqVDjDWp4xpJrhwMQqhAxk3LM",
  "key25": "61zZgGZHcFpRMr8drPQbkfwTWHV1ZnnF9pE4B4ZE2k4WmofFftBuW1WnZJ4zjGQwp7judhc3iavktDYiLdZePFxY",
  "key26": "51BaVGLnTwtUSDERyzr16iiLEFJyceLEurpejMnKjgq5tc65CEAQygjFwZ9CRMVLwrLX1G4rP1ja1ptW2axiD6LG"
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
