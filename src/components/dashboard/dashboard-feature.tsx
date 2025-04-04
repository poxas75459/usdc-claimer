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
    "41WSnRrFtbFHzA1nSKw8XXKUNRuoTcJAG5u21m8DAYciXi4JoSzeQdCMY5hgvJfDAjRgutZY2pDr1jmzQe5hqMr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4RvQ2WW1VdG3FtLi1ohcsgYChXwxLYgk9QmEg4fL8DQdMhkFe95iHSg4Ej5enTqfnCjTSajyamdUxzqqzrH7Getu",
  "key1": "3UeqX76MPdSXMajcy8cJ9JUnm1QAKLwrKWDuRW4JRJ9S6KFHmfBgqJhobHqsaQ9KCcuwVUsHXgfCFKad5G9WF135",
  "key2": "3U3vayTVuS5hzjpdQJNCEPG6DzBQgPdwfEoeBaTZv7JWFKfGXrJzerRLmqWjzFNhRqB4yTqiz8nA9qLpuDya4P9R",
  "key3": "2pEo4cevMTMm9nq7LwsSH8WcPEF8sPq7KE8zTB6VUDdx8sNJY8uB86h4a4vJYFeZGtRM59ZgQdh4w8qjjw2GXvZL",
  "key4": "VmNCHbpk6fyYzU965VMLf9PQiedHAaKaVb6jNLWNbJyQoe8Q4uea15nvYVhjfcAHtAdH2UUR7g8LRS2XsxFyPXr",
  "key5": "2MHXhFJd4spHLbJYZpwREdc9cLHHjKNTAZo8w9UqFdma2vbUEJPoy7Y46PE2oSKFGbvS6eZJ1s5gUESjwqiAPFvz",
  "key6": "2bmWCar3YcjNX3Uf9NiJneFtWWAHFxPwkUZ2HRDLYrXvPBvwgfi1FM4btVu8BHLfbN3Mb1xFh6K1yyuzFzYNuCmC",
  "key7": "5e1SfRqwhdWntbsyazt6VgYfuoU4WG4sYUzLspCbkPsb61CJvzBeUTeUjbvD3Udq2WAHji4LN8K5BQMvpPBa7D75",
  "key8": "5uU67HU93uSiPWB4dZBuDr5p3rGGHpeWv43rKW5UcF9s6JgtMNst6T1NdnJZW7iyQqpAhhg1vDSgosmwdvaY3AtP",
  "key9": "4Ed3DWfa8pZ2TonRSrxPes1RiQCrzkm6YSFJSRod4L3WdxpYFkruHR47M7a8rsNnZy4qh2sdztrU9nB7btfVqv92",
  "key10": "3Qd6q8dCChBSrNQgX1vyNYNwggc5gActhMGKZWuWVoBEpye44k5rYxAgXxJ7pHSvVNFsi4aB5JrhhjBgUi5GNMyH",
  "key11": "3gBEQKXizhW1j75oAyMD6vCTC8b1cEnG3A51gvq1a8ELnZbo7tzHJJ57kLrFyYRG1ZXMwtCV5MSEgs7SaK9GZu8a",
  "key12": "3DfvFZMi5RfVFicxyK2ZbDzr2cfGfcuND8z5KRBPCNzMNjtureZUyhW9MgqMWRnoayHvhNZS86zQGAnqYqPbh6G9",
  "key13": "3M1Xrcwk4zEbgqSyiin69zTcTHtSRmkxcyJC9x2ZiKaxq83es1Rrs8i7ts1soHZUuQUToCy33ZLgB2H311fN1nWf",
  "key14": "2AQxPDVuLgvpsCu2dGVso2ZCzhHd6Tt9WS89UWoiArURuPXub48Sj3JrQLr1ysDkfMaj6eeC2k2Cu5KfuvXohSAa",
  "key15": "UniRZgeDX5gHrscUMhvd24E41dgnmmavzJzUo7tyZqRHt1QHGgj2xzoxhvbhCzTSVoDraV7cCtRDNogwTSYUf2N",
  "key16": "4bPjvHPGx2EDzYsBtUiWBe3mX5bmPfEjXDzYdM5d12QnY28KLVhEzp157yNcEsA3K6iv4Qpemmqv1w6ucBrGsuc2",
  "key17": "5g8v7BU1HdWayEwUysJVNqauJ9GzKeBvoR1TC5Rq6YGuBJCQt3VVgHPz1giZXonEMmAABn4RbRwRovEBQXpjx2iu",
  "key18": "49bKdhAAaKSqwXLtGUyUF7nCJabxRSUYq3G3vhHVuehbH8iKtgy3EJ9mz8UkxTCioZDyiMcP7kjdGs8QRBmX7XTa",
  "key19": "5UhcfVTDRBJwHdrK3k71YQb1gtKjfBUEyy6exMvD1hJT5LWfBhnRiCbH8X49qxL2FAPLK5WQebks6mNpYfPReK3U",
  "key20": "2Rf97M8Qgqo19i95RXa8ZQDEGnQ9uhp4Ftc3wipKDPynYbYQHNG5NWgutbRSqv3PL8muirpFVDYUBygsVGQvikjp",
  "key21": "2PCkt4mUSsAe6wEqEJq54m2L1qq53FXYm1eZonquVm8H82kqRJqP4oM7uNr3s75v7pUKaNCUVRthgwz1kf3DzU5g",
  "key22": "3nuu3dwa5mVHqaTWvMrYdmnCmQAT73RJAqsnE7SSpKcuGmcgVPqCzhL6ynkvesfCAEKZcPa2FwhbL7HydSy8udnV",
  "key23": "3FBs6xHPeqZW7LtVCSb4pwwpfW5XL1Jy85udSpvjgDCdjjdMxHRDgbPhKGVik2yMdX34gzVc5emVuR1LYVAQbrSE",
  "key24": "2mfqvg8CWRqE77ESt88ptM1eKXYDqWXQ2P3LYt1zdPuo9p2VhcEHwNL1y6qC4ZfYd4dRgcFMofitp5F6YkJmFVBb",
  "key25": "2fouAoxDWgSFEoPyVYe2VfdKJ2dB6AeD2pAkzy3aPrMyrBsbd1jnrv2WhWi1ZyAjvDyjqYKMng8JM7Fg3Qf4Rzb8",
  "key26": "5VyvCaiK4rPFS1ghdKypw9oq9cdkLvtQpk1LWAGrEWJKavraYvS3gkDNp9dBEa53gxrXtTnqgqpVcUoWm9oH5Qor",
  "key27": "4cx6hhPw3dYvtopdGTygqeFKPbWDHNfG1X3ku6H4sKs1xkt9QP8bkg9a5yXEtQttT2a2xMG54sNL48sQHbiDgfGk",
  "key28": "3Dcmu3btVCDkMihUbYirWfPtMJztTBdEhVeidQB7x5Q4d8SzRTaEVxynnm4F1qzcbW7UQudAU9VPu9j5AmrKFqe2",
  "key29": "4sax7tEz81W3bqWzSf6Dq2nJi8LHnMLhdTYwSitsk2qemXUMauQSL42NqjYL23uSqag36GCwt16dh7MwFXVnhUU3",
  "key30": "57hUkzk4CiTNzSsK1eKSHExRj8pTtd3oUd1xcSBbKRjU93ouKg8qm51pTiGsgLF42XNdB4ZuBk11o1ctTWiawRa",
  "key31": "AbeNPzY4Zz5s4sUYjkHCocwd6z6uLNa94LGn9HFjJwXqcTiTcDKGYnEnbRDysBLZaoo1cVWYFwKfq81gES7oNbn",
  "key32": "bFX5y2vAdQNvz71HFtmLk4wsfgc9UqZbeFA7qDqUhNrdC5xMbEaz9r5iyHtZAPBpD8xtsAysqGjbPiRuCiWVCe2"
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
