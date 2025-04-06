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
    "21ZPy89xyq1ojsnbf7bgKZpd1pgZCexb6urJC5EyT41gcxYohSn7i9gjELofQuowYiDwk7sHscBVrKptqnyRBV3N"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51rNscNvJRKhcjNXowHbed7vqtb7PcyKkMg9V52kTeEte7qS7FdzRQan1UkVRhnEBKVXEFGSS8UTexdXuYNVN6jB",
  "key1": "2h237jKPNP6RHXzWDfQ43oM56DzbPoSdrWfV5dvJrHusUVPng7AHz2548yDYTcVceyeJNJknmRpYfDhQGq2WU88C",
  "key2": "34A7m81AvZFu7DGjY58UcNUtFC3vZFLbzrZYGH2fBxi6eGA9fZh9ygjQ3HrCxYaQhBcXCA6cvUPFyt1XySiHF3SS",
  "key3": "AM5GjkSu2KSLvSuNeu3mc52cxFFSWQoTF3QNnCbCsp9hYYVrYDAoSLs3YqxZeuveVNC3SoXB3759DmEDZXse68z",
  "key4": "2qjTxidXfhNrUy7cdd1Q3Zy7i6dony5vVrczMRf5r4FtNFcDfakD3StAR3cz8JUJXeTZnfGNtJdzt86nJNEY5TW6",
  "key5": "3EXCKuGdAENtzhco9HhxENqjoG2hsJddoGK6Ssz6y36kffkifioxw5Q4fhdmAgQKGdzFmXVX3ZS661scKPR42PkH",
  "key6": "4stfLHemYpDUp6UZ3BXRh3yVpDW1ZMmGsQYa7xmG4U4MbHgmQH4a6uLuugxwhaNTtsjPhxq4kAunqWWnsVFV9SaK",
  "key7": "22bWZxKtwkiK53HZtnZv3LbicdaHmPD2cosjS11BGttifaNTtnxPPwJQFdLknTCLf1QyS9SNErTpYcn5BzLYDwCX",
  "key8": "PzApiSjTWPHjEwjGxWfs4toHPiQJuHBYHwjKdLgR7AnGCG8GwktSV1PgMuXc3zp4PNTGyxxKToyj8f2fhhXmUAF",
  "key9": "4cLoPLC3S25dmPMhLccRLwp41FSG4rZqwou6Hv5Y1W2h3yB87uXzoCVk5uCQbNe7vV142DFiSSCFy5nZmXyJqRpk",
  "key10": "2kKMgQ6DpNywKviJAgqtsYUBHzzwVUwWBWX7mjL36VVLudisqb8snGmw5GpcpPPgiH2r5bfKaNSiJ536BhdTovNR",
  "key11": "Znztku5WMb3B1EX3pEuLzU8izAoZzf75B2hCV4Wpxsdg8U5Q6ZmSiqx9z4qc3hPgX39RwdYzJYwmY1pyyyfGb67",
  "key12": "3qPPgToU2N1KnmTqZCcevQ1oEnj2vVRvYHELq5ocx2D5H1rYg6fcKqAF24ZfxJunMoDj8M7tB9B4fohdJBoo39eE",
  "key13": "43T9Cm8FkXAA9PLbCFgaMmMvNN4CXYjVBhSuAoDYHEpExGvivB5QjwS3jd9SUHXMPvwmxwt9AxQTWKNGJR5d6YVJ",
  "key14": "kjvEHm1xim2v8d4heW1T8ekoqRz4yFg1qyFWaejcCKeskN3AhFUesFpWsKGHeoVAPyPr4sK4VdFJrWGY47rRjav",
  "key15": "5NEiMNteoPXXZgXF4Yfu8XySULj21bQRAw415FKjjspRSdP7dRFAXE23Zm2P7KgFcQ5GtZJ5BrpmDtWYE925oS4T",
  "key16": "3eoi7dRHKgS5JumoJUapY1uUhVjg3DzTdxqTHBr1udCSdT6v1jMKsDsv7vaYdF5L47JpH5pom9bM7amk7YaRZ5rd",
  "key17": "1jhmq2ywXmmJhTnhWsw6GvNjNvpaW6K7kTKF3q2Sbdh1S8CRpeU3ppf9Nr6oAv5YVxZUN5HLS1XgmRYPqptbMo4",
  "key18": "2ChHYQDf8toA1THpBnCe2nZZcyQFHpQk6wsqhNKZ9na6NUMDaBeKrMvw8K2fhneKNBTEHpxSMdSf2goKr54YkVAx",
  "key19": "4TuBeRuyktxN9jGCCTpszNvHxpcDNQTMESGsqdxmwrctFrNHHPzArYxUk65gJwGpAdBq9sYMeo54GepRfGHJXRnM",
  "key20": "3tPQei12N768mvkuwUcNrtNrgZsFoZCM2BvGT56ouDa6hpMh4BpxXS3bVyvZCnVc7DduZA82m7N2v7hE1vjNsXmC",
  "key21": "CmZ16UmCcY5ADxcvLhUJqMq9CcNZPEfkQnUJ7neXeRR75cqL1k4zYr2DZdp92uSFGTfuxxuRecErKgmSgRkp4CL",
  "key22": "3hRi9pCWu1VbpnHmeHP9tjsQht2nY3PbpHWoLVuKuSpwKCxFbpSfNtE3zKtFepNcR8NGoyMCe3zKPUkXskYiRN7Y",
  "key23": "5Dd9kQrT7RUwiJnm8DnFV1HSxezcQhA1djVgyqANYK8bvLMEcm2p97wDc1anReU3u6HuPtMjdMryTD4Y7Pw1L9f4",
  "key24": "5TxnEPhZSen4KMczGSsHfPJFo61Y6Qkc6aZQMuPcwfuSM6UiERnqpqauGWCchdVECKodcVfEiKCKoCvEHVujSspe",
  "key25": "3o3cf6DwggvTHRCSRCccZ8AKw6RGJHdekGzb1mxnDMMohDURGEjAGw1zYXsQzutQvP2NmckqLBdR36JWRsNrjQJh",
  "key26": "5ACwk8SWhXp8yEBykeBz7oxDcbDzFiwWhBLefh9cUJpCQxDUNvy29q6TTJsoN5kUa5vxymwjJDVbAx5DMJkNgSmv",
  "key27": "633gMSfmtmmh52VQMdsHfrXvdJDkXdkqh2XWBrv8wnaoNMiwhxmeeHEoadDAQ5GHjku1vGRB4h3iFhWJTns4gu9f",
  "key28": "5cY3KGB2twX7Ty3Teed41KFUdc7QVNE7G17sJLog6BjVMutdebvgFmqJVXzqgmXuXV3ohtS1gfaDe9GhbnTANYc3"
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
