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
    "4EsTe4CSy4523tiqR8Hc7P5EupvNvEEEMxqcoDykc91EK62UDf2KATjTJse6KXvoGKWLMGWqPNSyZ84Cgne9wt9C"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5EFpn6SK1gUYT1JsjdqxrcQYDYuL736uz6oVEPkAAyyqMeFTGhnGAjF6JA9CN9giPXqKnrpQCrK3f8E2gmHkTcLA",
  "key1": "539k4g6WiDWMHeEEJjc1JAbRWVcfWYu3Ru6w97GTUpFDyjuVPc6ZqVsgCmNat8xiLBHjRcj9k767WzoF8hdckMuc",
  "key2": "3xpqyvBMb8ab3tY4h63eKiWTAeorq85YkdjiwxMCuMZvrLbGXKyy3UKFuBuMgWzVFr2AWMM6J2imNzWMxqx8SsUL",
  "key3": "2PrMZgjh451QxqAN1pi2suWnYjzfxhxGTJTpkK8NXCEyhaAkJ1B8HeVrJB6rxJRoeHieWhHUMczHNUBjc3PKCEoP",
  "key4": "3ipobbWAgDU154yMSAv75z9YKN8KMDgxJKxszoRhnmpampsPuMaTBsbu8eGwZhJCkM7EctaCRYm7TpGzsCfb7jDc",
  "key5": "3q5cNfmLojngCq1WSyPbKGZULNiY58EdVy3hf1aCuMxzkxbVnVqugxsf9t3MLQYoTKtuK3PAAj731TL4hBEmvCqf",
  "key6": "3PPiksztVFS5wBMEXefB5NQ1Jeu2x728nrbzys17GmhyS344yhiZU6h6EHsdRnooxugh7m1jWYFDxYUTJ6ibF7TH",
  "key7": "3qbXKxh7cNdaCNkEzCroMtQw1w2Wp1ZLiYMb48SSxqB7LQR965z5xBzfvdunyh9yUMnV4RHAAZS2uoT2HcKLLKp1",
  "key8": "DeEsPboa5EK7vt18GgpX3rbGiA3hCLKVzdAeB7xUuqYnAREnd6DKtfSjYWuiUocPiyZcMvfisoYhgoJuszZyDo7",
  "key9": "2NKerstwULWqPDv4owHwSUas3NJotJKT9HkeRhDKmJKAMyXMbLnw6hm1LromSWUCrd6cBjQFo6oDzQScfRBXXyHa",
  "key10": "4mqDimBhe6KPShKPGSS1kSk8ABbVr9YJJWZZfMDiuBsmNzDheF4YaTNkCFRsDde7VcqqW5zMF2KoCXYDnKLnhiSi",
  "key11": "ajgr6QGcDYoX2gkt1qEEuPHDZMed5tHKVk43UVQGCzdW4VsFdmrdBHQQy9cheMwWUDCtBs7R663ScouxZghLwWS",
  "key12": "38mVRdyw7pitjJ5whPkcJAJK4qxHQTuMeDxLiSn8gmVT3qtuJMyR8WdZr4pYhsXf5nrw8A8fnmHDFrDVa8H7w4Ex",
  "key13": "qeD2deY6inyFc5Wcj1fsMXGwYPuAJ1S9RNPLScevF7H9A4kAnG9tL3ih24A52Bp21H3eScHkR6t4mBvRqqFvK5o",
  "key14": "3gXtXm8PcxtLj4Fz67DGTe87qqTRrW4WCALa3H4HyxCzoZ8GZKVPBScuyTVxvZvcwy6as8ruKL98Xa4Fqkgo1BbG",
  "key15": "2nrQHGQ4Ck7hvuX4kddByAeRSXXqhqzB7C4snB8hjKnJ63JFf83rymzpEnFbYpfaP6R4HsUv8sEzcmCviM2J3ncn",
  "key16": "4q91T7XGoN4t9hcqDb7j9z8TCzMY9aiskLZihRXNPum4kap5WMuLL329ZTma3VhJ7r5wpE8kg2wyaUpzxEiHxyAo",
  "key17": "3HGKsLKebev25SL6vkfW41RKVR6rx96pxH3pd5gHDfTW9PT2KNbQZZhrf4aaJadyXJB9pDPQ4S43DpaZfD9Z6NwH",
  "key18": "5wzn5PAgBjXeDNv73wjYnDqaA6sTtkCJNkP1yrzyvq3JPYD2iBpTVNVHP9fwR2rWCk9cKK7Y1upDkXSvhXqpkTSc",
  "key19": "55moxegQ6kfkiR5A6eynqJuV8aeFHbTNXm1dWs41Pg2JksobQSuHf6vA3rMo4rn79fnCWRCMp44HDg6GwH9bngiX",
  "key20": "iW3FpjgjMgfCpiLKjUPqEgZyNZvvYWpYeLLhYKWaKH2btoUqfna6DB3U7ZDWCENHszfgwmWXNzw97NWUXxTnDBL",
  "key21": "21xFd177nq9BCzuXBc9cHAaMGyvMbmfv9H8LG831y998D3QJFMEZqV47baKxBCSH8A6M9knZXRSWZLxnBFQ1fd1q",
  "key22": "5tMoM7Cyq1ypgVsAxKC8861uSmy22Skf2PhYyxekmvoHPEWwXnsYdwZiv6Hh5cz5ptvosCP9WuxZznKTJXtV3R27",
  "key23": "4YmRypFGH1EftntcrMCfwtEMmmbhktMvwj4Xh6exCqVpqjatRzBbQE4nQcnU1dKHrBZ47X6i1xG87FKXZn1Mmw1y",
  "key24": "4ymBiUxdpoNyCnWyBArCDyfpvz165xmqMPH82mF7bDjwRjhf6a7ULWBh5ig4WJgde8xx3PBmTdRfRDmedgkqtUvw",
  "key25": "5zqJ9FRhoRqXT8zhh6C7gWatbygn3vwQv4YQ9KuoQtbRoNqfWmFbJMNLSdhCFkyHpnnjniv6maADP3pHkZCVSxVG",
  "key26": "eFHfAKtz9eLYz8N55W5inVaAxcdnAwiN1XSaNMDJqgmgq9VrxsPvrENxmGdu2YRNEEeQxV6vdsLF8ThuR5xeiKz",
  "key27": "61xAcJjzDCxjHRuszbTKXChoB9eyApL9tty5ZE7FnKL3XmYotPEmnMmKoJ7v9AArcLiTb8AHrvwvNf2vJ2y8zbnu",
  "key28": "2pkfKKQXd5U9XpxjJs3SSQpaZzR7ycLiPHJGCM918kHKtHtyGRXnDndYBS6EVz6BMbpKxgz7mReQHft831Sn5pCG",
  "key29": "4cFayaEzVtDTAzGf7jYVCdQkq7D7Lc3AAiohQnMu37ByhjBAAhnKCuW3d672zrAvyp3MSfpucXCGzx9mSe9gL3oo",
  "key30": "3Syn5oc67qH2rfC5pBNB3mJZb48g6wu11tc9h5oMa8cNbtRqtZEvg1HPTZo8J9qtCntY9AX5XutMcJDXcgFJpbmG",
  "key31": "3MoBZwzX5VUjVvfL6gfkDSoxGCcDXoJnC15qMCbFbwsRFHh6VGsA2tFQ68jqD8CWtKnzjAddHnT24DSEHFBUYeAt",
  "key32": "3dFNYPRHY815xqPact3YH6o94bR7QPEVRAeVzJdzgwJNKGWfQdR58WcA3mXjbSzrrb7dHkGpmbCDCkrnbMB654YD"
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
