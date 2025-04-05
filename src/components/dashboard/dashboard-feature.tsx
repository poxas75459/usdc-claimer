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
    "fUt5m3XF9du4SRjbDAWhftoHrdqxa7zvW2qgbn5BfGLsgDnPnFUDjrw3fPeSJ7qbeGsPFGwkeXSwLNGb8etkfr9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LENuADnrh2RxrUV8cZxcXbk5qcYYJFm3NPx2vQZEsfgNRmQfMBxURkWW5fnbJvyFkxgH5TuMfz4k1M8pLdg3NmU",
  "key1": "2EuQQQHzRGW1UKCat3HmKEcXETnFbvKRGTMBTQPMH3rBFzStbPirMFEV4GxRp9mjAbWYcrhdoAmmHWxbP7hxf1s9",
  "key2": "fBSuCUeBhLKLJE3sWmvKnTfNWGanKLQ7EybzqEnmbHmbvCvE27o3ch1C4ruqbTdSLUSxTK8KywL1bPrTmJahtwy",
  "key3": "35L7V5WCY2KZHZ6dLpsryVsfKn6BvMHUt1Frjbovu66t3Fcz3bNu75Vwdr8KA1SWWvW17CA1SmpV1kgUYptmkbPu",
  "key4": "3Z92dJukQLLQKR2CHB5vARCM7VWriLFvRh4jxC9RmKQtZFsnSm9jTBk72nw6gyPp62dvryjbwVXufwDHN9BztGxq",
  "key5": "51XmXvq6AtrJizWTFYTDYGJ6eGcwtjVxZx163rL1z9jNegTu22GM795fzJFYRFSdZ3MWDv3waSa1C9DaqeszUju",
  "key6": "5ZxPTv35XU2Lre6grgFr47hGLHmF7sadf8zafbM5V6L9CL5H6XyqSrhZ5euDG44ZepmKtuQqLDxrwxvNUMjQpZm6",
  "key7": "2ZoJgsoki72m1JLyhCiJg7TdGdEr4hBw1rAagVM3QNsQHKJYabWiUL6jPzCt8122EyBoiczYht1vrB5iS8RFfW5g",
  "key8": "MHMu5Z2hDQrmnSDYYn33aNtE4E8VmikysnKkqurLkQfKNZTVPcRBMn7KjGKx4r9N3fdPpZtSaXrNbLLVWAniP13",
  "key9": "4KoSyD1NUd2dGC626nYpDifRhC6Xsw1qs6qeH3tX2kBeiNzpxzB65tSxoePk4dqFqN6a9kyRW2pTBXBsXasDizAP",
  "key10": "2pbJynb9oBH9LqMDremBMDJB8W7w3DaVgiws6Wc6o7reHV3Bf8oB44SsdoahUCJCtJNJZQdYAVPkgF7S45MWz8iV",
  "key11": "5UhrjkuPxxNSBH7863M4phsytQWqhzDrTf7nZQLHbo5QHXMZWgsLp7b3H9cDXP62WBNf8EECGqH9Q65Y7y8vxPew",
  "key12": "iptvgEwUaMTK4YPqEaZ9jiB7UTBXGZCLgmFX9asuvgcs2aLVqoVRmgKfdb6ZVgBjmgteubjWrCvSXg6x2P2v9Vu",
  "key13": "5ngZD4B2UmXHK1MYcHfwij7UEiG6CD34kvs1vfS62dEbU9FthXgQrc87s6bYxpyuYuq2NYBqX68W3kY8NEhAGDcm",
  "key14": "8patNd4JgAqYE4h8b9pEfE78WX2xvcfwjc6KLV7z2LGAo6RVZu3RWfgRpSW57mkhVSNdgyQMhy6BUYVHQBirS93",
  "key15": "52kbbrZmNZbQvdjMB5R8WkJvLi2cKWrSpuPsFSqyGo2anQd8Uc5cRE8nhtTu5zTzwG43mRzw99878vNUHkkCMdaP",
  "key16": "2KwZdLTC4Ex3CoNsieLm3CYeayyCjqJyLGqLYYw5wkDgbW9mrh4ZANu9ScxBfLvoF2QXboQUwgDuvacH1XxC4ot4",
  "key17": "4GVSEX8fSMieasdsPdHrRooov2aywTAmBGvD1zDZCYWHE2HTwCnPbgwTLxWYTLjTdxVzySSc8bHervM6sqQXa9N2",
  "key18": "2uFrTHnvo4WaE7ZnHHoV1PC6s2BVgmok8gQx7vnXBMnf6sC4vYZK65WHhfzXJg348zFZfoHYGoptpQNKkSyTcu8q",
  "key19": "3S1RwbMzAUtmqw4snXPMN6mAJTi4fPyDxbQRFB87mMHBBEUXUwrovuwhCQbV9V2aeUidFxaguYma1nVSu9XsFcNU",
  "key20": "3KYWi1ESZ7J273PaTVkcxzYtb3QdpJWX7y8MDCuVEWsEyrVWAmghraTha1SBTYLM8sgJGwuNBpeLYRN4KfkP4wav",
  "key21": "5mWxxcVPxX4aKnx49fTUEWScjYt5bjG2wK7B6wbAdkLfAsyy6fVAT5JHsJB48WNLVSsmS6FWeKEGBAy6DaRbXVty",
  "key22": "sy87vSSMMtTdWpH6FB7vSxw4nXVMwY4tmxsSwMvt8A7EXX34ZnGxCC4w6X6puQRBhyPw8sd8ECj3SEnFj4gyXxR",
  "key23": "5jwVhMN8PhNzrrHoR9bnPUSFkY6ZUgeqKDF3gSgFXb7Td84sR1tYbLA65DnZt3Bi9uR1KZYgyGNwaRuvLZaF95gk",
  "key24": "2da3fgBtmnddVWPMXKDMht549nL8kX3vRwKfZxShugv6oVRnGUnv7yTGDyAnBnygUhhAGnb2fiAM8aEpHaDePgWY",
  "key25": "2AzgYAnmeo4YmU1PpHDWUgXpHqRDfv9pEmYauQXNohNmwouHo8YhQzZkBnYsaU9FSMx888EphudmBTMQxUJawBFV",
  "key26": "55s1XUuWXU1V3PbGAL7icJtPncA5nh3uA5wcrB2PKWGCVEwmDXsGoSiBVGqXCJUPQHBzyFLRAXJS6RW2tRX4qRub",
  "key27": "3U723C5tBFN1YxJUVBdDhvXT7aAYbTN44yery9RRSnoruTWESbaZLVE7D4KCmLN4YK2dk3uo3y6jjUH6SVkSvurb",
  "key28": "5QnMgPvuh8ALPPmqRHCKUydShFWvHj5C5y9BasV3xunydoWG5mPMHaR7qNobwAnV3FXogD51ieaCAnfK4MXWFE4J",
  "key29": "3WFBGmcGce4bLTmwfjU88jECnFCiRS6toTxhHv8artkgjhTfEoeo4oo2DoTfj1AwUVzCbuCtjVrymguHxEt6hciW",
  "key30": "SMZvTQtmK2TMwKaTy67UrqL2bk6mVRtcV5vKpWKhfEVV7hF1d4gsfSjkeA5Yk6u32FeT54qC3zKkk65jj9rdZ4Y",
  "key31": "5UU3UzfhFSE3v9KooJNmqWTEPDUJxZP3VcvTNLy6Qg2FhyoSAb1GxqrN28HLpjC97Mt8AYCbYaTXoEpyqXaZNPdt",
  "key32": "3aXAJAJuZw8YUKtdAPR7u7WNgAPkRBPwEbnbFNRXMN5AcjVrHtSXUZoTxojihcQVh1NVQhzYZQ2QwS8WUMox21yB",
  "key33": "2rc3AfYaNvpWbYtZGmFNMEJjWZjpKpSHJ4efBi2dDpZk8GbDzBxiKqghree35UZyjT2qqXhkfMFFxEjKvPs1ttRE",
  "key34": "5oLYfKFYr4KtZWP2WBKcxyXCyxFFemJvYtXQW6QzBiFpEJXneC7SJqUipKEaNCujbQ5CCvXdu1XNodgiX75sTFiY",
  "key35": "3QvVfZpAx5H7nWWJebaymcff7tDnyo1hVZhDfU3x7kJqa3qUZVZBZ88A2W9FnzAQ1Vwi1pLekKpy8U36UR9Ydkv9",
  "key36": "tdy6CisAnksM2Bdng4xaN9heK9Wq8PHLrhrFq4pPEkiBen3QCFp5sfM19tyv9h8UXyLdzTY3jnKFCwewwU3UEvG",
  "key37": "2KbQR7zoVJunZGEhDwXez6DrhMcJBF1jhJVh6M4AchErCAycXGHyeS7oZf9mKaoNsrNYM5LuuHTuVKYoHZAdhWx9",
  "key38": "61wuwU1AF9EVaw53JGWxkKV4PADBmhhZJ7ZtnsqvVGZFPN5grSmLmYFPgMk174JAcD9EwzFKGzA6gV29esqnMPoU",
  "key39": "3opK5rZK9i7mpP5fAWf4YFXzdo2XAFtEH5CpA3BPiAHctTGSRxtpamkTGGnqaHftQGfKUSuixMjbg482aC8bq4uc",
  "key40": "4Lvdq9Jk13rWULaevBLzu7NZKEZAf9wubFnEnTmbxyJpgxEZTohNVMpGF6JdsJQDfsxT3BcG4jcUEB2o3acL9TKT",
  "key41": "5A2ooXc3LKtuTzFPH4VMzYhVx6aA61yKVZW781LBQbJ3w3c2VgkQ5SDMV8X2afnsDFrv94LnjfEVDMhrch9nzquP",
  "key42": "aNK3ChwtDUY2yWzHwBhdaWeXakXycGesU3oSw5tVL7w6c3o8Mt97hF4nT4Q1Zo9Z5veXXVuCooAKXd34RNPTZGS",
  "key43": "5Zk8QfM87s28ioaS6eU4HihZ5o6gLjbn78gCo2fXHnwg6GAa491164S3iV6ZMYp7SA4H4v7cE59Asdu5GkhacEfZ",
  "key44": "Mgmifq6fqGyjvPFUtui3sxyn9bB8MpndXqKcakTXaCr7tpmFBeZxzufZgm9KKRHooL6MykUh5tn7nYiwHfu7SvB",
  "key45": "317FL3dkmAtAMeg4p13pEAAguCLuFsKzXngxvpxGoXKKfzorZQEiETm4v1FzSs6NJLHJcLveBCPdJPgbsjN9hfgp",
  "key46": "47Ntz3tBPPJvqj93NLhyq2fF1QCWrLP9WEX2xoBm8upryucfam64h8dHAFQArxuhsBhEo4qFPWWeKgNbZ4XAxrMx",
  "key47": "4yGQq1TChKkcVCasNihSgMeQmQFWhFuyRApbpMQQzxdWk87XmQTZV426fPG3LSzA7Bqs3igBPYAnHN9hwfCUr6pR",
  "key48": "5Fkg98ZQFKxMat6PcmqadVSJHgdFnEFi7CrCJV7zy5K8j9dftyhQPsMGgcd43VznFPxm1T2e5KPQYqZSXkofgDpk",
  "key49": "4nenec3aHSTzKzpxRfjSVygXzhPeN57qMwy1vcBkBbJbeuwnkyiA1wfd7HvyhFWDZLEGqvpwyuF7p5JfkWXnMCYH"
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
