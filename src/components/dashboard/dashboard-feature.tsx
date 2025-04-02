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
    "4DvLyG4BWZFzCYUNfBRyf66RmJ9vyf2VwZSiz5pu7BWuSWg3dLKwx1ZWEPNeabCsrpZbuUyNBJXKVwZqed89jkbV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WcsufAXebVqcJyrVaFMVsPvFFTYPvAWSGE1H1VzJfKcHZ6XXqy9hWLum1NwHVzCd3qzvh1uMufK1HH7f2cTTQtB",
  "key1": "5xZ55PAqfYJRZ696LwWDARKNnoJWReqzfzTj3PaoKZx8RpLzMAM3MCugYphmRLAvj3tk1aMY9bgmaK4NaMccoEGR",
  "key2": "5f8Zq3oAKbXqCEUS3m6ErG2Phb7kds785k6Mb2Kb7X7vZ9A7nGHNAu8q1NKLJm1KcGuXWEF79DquSwkUwRC7fruj",
  "key3": "3KnwwsSrT91qceYJc1qcY2KPxH9JuyFNgczAzsgn3ZzWcnAvjHTZGUyqFvJqBHZ5BaAtuJnh58LziaFkM8NAu5HH",
  "key4": "3W8skCUK5nFQyxpg5YUyC1MXaoatWMdUYEqyG3mNMgJRYodQYFpQSGQ3RRBru1pJ6CmUnFz6u5WgDHy12DLseco",
  "key5": "4gWEXdpAJCMSRTJkk6Jpew2WWKQKJuJuDcoeG4bLdz5udcnTNFF7tceAraQznrRUZZFhoVJMWqTvb1Zm1pc1TrgY",
  "key6": "qGRGE5wLRq1MAqDVdXXHEEBxSo7qdxQ9kaR2imhX6SWiTojZNzmRTAspGpjfYCCaj7t2uwbic9GZ1YNTxos3SCk",
  "key7": "45Ft8UYMS3zShAnjVuxe6gcZNqmRb8hAn462knv3E6bd3SsFKBUy9KUuqHGt8nNu5BmthkTTaWuu7nSc2RRLULCH",
  "key8": "5Akzdsa7ezvgvtcuyb5HPf37Xu5dPPuxRCEvH4ESgEBVPYE492CxekZ6A4XaCjutaKqXWF7w1x75iBLZ1z4Znb9L",
  "key9": "2Nk1TsRZ6yjKVNbszSu6QwZv2F9k4MsLUzzaJEqfxQ5Mxd1vAcwL5BCRcFftcSRAY8bHLvF31P3Lp7Nm5QopKkWp",
  "key10": "7nkFuFkrkmVN5v99uF6MHTqsuc9CCsLJqQAgjvmic5LdzqYasGM3vnzqPVL5Lkm6eyuHZq1TYFuwPHiwgmY2gQp",
  "key11": "4BJrwyu58DrZkDaRHsGRB52hBNiB6owCPcdehFdrMuzCRNwuESFGfAzaBnAjqDdaaHBhVEz5mFigf3tFzCmkSs42",
  "key12": "2yPZMXU5JXoH6JVGMjpFRE8cQETeCJL8YDJKCJQaj7vtfz7y4hXsfeXFczNFfrmfS9KNapDvYhJC9d8UHy6kd7qm",
  "key13": "5m1Ab3t2UdPw5LWndQ65EkomDEExFpZtUt4TeiQG2csTcJwNgTNBuEfUWrXoD8L1x7jfGr8aU5cBkoiHckn2akVy",
  "key14": "TL9uCSUaBZqu1bC5j1VXu2ePWHM3mqoYevoKWLGbRRLKdAhswrSzAvbd4RWvdVAoiu8Z97LTLqExHHhiEssLr7V",
  "key15": "2aZvo2QRQ5TDxwgyYBp1DbWscxyT2S5t8NrBeam2ZqBK3Gcz6VuFjXsHEgAG8gNs4G6Am925r1vndrZik5LYRDrZ",
  "key16": "2xmCZSrR2Jpj2SQr63NMgSYQKnem5VLpDfqdMnQjmWVaNLjp9U1hAi9Vfk2NRY4N1w5ai9H2gTj9XVige7wfcePm",
  "key17": "yeaJzvjvfnVhVdV8NPpcKRP3o17eMYU5PcLYgomEoMTmvdtSYxarzSoRty6mXJswXY3C68QYzL6rJ7E2MiJCXCZ",
  "key18": "4NpRDwMeSYDUoJUVxM77CF58tRQnDeJQiUR574XwTqpAEBuwuAEUuJN9Z4tDNixJ49ta5XeL9XCGtRSbEHn2iN9T",
  "key19": "3SGyBaosnk6KPDevJeJz6YYJx8zUWDuLG6rhkpbEANUr44X7b2sWCdeh75RhBtA2yMzL86bPxqvYrXYXMsukacUC",
  "key20": "58PgsgYsMGXyKak2UPYzkMDxMg1bgWJCqccRg5U5QBaxBzYfBk9rpGT3HjmZNtiPs7jFVoKBBYjMFNQP4kn6DSMa",
  "key21": "4wijoaYMmb4cagv9Um96ok32KY17HpEqH3kKp2JQUyuidnvATa7GmNwnm7sF7AfzH5bECs8d5v1ajtkrA2nxkaVq",
  "key22": "3RhX8Sp62V8tGpD1CxCU463oX2FWbbKvu7gMxk5iF6M6KByDnzzzSbgLxwhKm8BBcyWRqmPV2auVTts9ZGB5ajg3",
  "key23": "2bprtk7QUcgQNSoryvsCCoP4JTXKbZXcRvC4VaaNyzuPoSsgty6pHgKUakNgb5oxKDNQkKr7ffcK61TGsvTgq2s6",
  "key24": "3DtDQtn5FtwM69qnZj4UJVPcn7tn9TmWVivG6BxRzg99gDrbjMpAnJtiPK9HocFmYeuR2xnPYopwjToJBgipcm4Q",
  "key25": "gcReoG6fcEqjkASstpRB5rQNRTnMmUgpgrYMwdvLF23hmss5Ku6WxMXkLUHNEehKKz9Uxz4YsFJpQZHkEpTutHe",
  "key26": "2kBeJAvbDDLHn5jd2MRgnc2ucpTiwfbvApgZcUxsTq2EWoVpjPDFFUqFGCEJwrYQMrw6yfbKgbvbwBzYnuNwDtsG",
  "key27": "v18oQfZKnbjXVeT7NmEahgRDjquHoefEH63cshd51Cunsg8x1YanDRc6sqtWyDMQpY2oWdAT16aDPim3o1EchC2",
  "key28": "3XzvwCFsc9BrGTJeRyUNSS6G3v3tirkV2JXWitQE6Db5EtW5q31HkdKFyXvC3qKrig9RsDJ7MF5hP3ceJhYfpJEN"
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
