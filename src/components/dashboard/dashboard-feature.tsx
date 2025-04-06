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
    "9yYmDXXvDYE11mPLmVdPWbGTb7S3ohSZkaNFdXXTw4iRx4nrBfDotLVHMyvK9h8P7vmQFGZdQtYxT8fK7ZRtn3Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gPG6ErfsZcPCFvSBdjMDkwGKDVjSadVhZtAhXjW3JHBiFUyTuekkLxMhHNnfnrMdPWkpvgzwmgJgbqdFYyVmHau",
  "key1": "2DFF5Y5wWauhUB6KprqVjSQHrjEqmyWH6PKfHoctvBdenJhcvz7rB9dVsCtFx72a3Dm595NPDr7GWz18cQ3AmNxX",
  "key2": "4sxWJjWs3gRVBJf9epXHHfCYEWd3Zxo65LaXVch2hZkhfjxthDTFwXL79Widy9QoKsy6V1WYtrLPnebM4ECt1pfy",
  "key3": "YmiMun9tnNf34KshHozrxHp9iSUDS8VPLm3et11fz1ZsmyXRzNRP9kqCZRDFRh4acXGY6i5axSVr6jrLtT3Cjny",
  "key4": "knKmK29H7R5vd5qYRwkW8zt9RKxeRwyYYAjcyJ2omJCSzHtiy7Y8SsK7ubSWd1GK4sUVAxHTdk5eBnRERUzTT3a",
  "key5": "5MXmZ7cgmoAN8r7ReY9kWSp31VsiqukG98MHjiJCaNtgsu9n3pq9Bb3R99cEW3eiSkg7htGAmVJCQSffwi94vHLC",
  "key6": "63oCJH79YFhp9fXvg2WXTgG7QUcbNrg8dBjFdysHGwoGPaqTbyBqmXjPRDG9Y2HPF6a73hWkCsNh1skyNFU7dziU",
  "key7": "2bh6zQ5zYSMZFMYwTySponF4Ewt1Gfmh5RHNVetihAu5jv8dbpBqg8ARUn98U2MLBEHWcoo4fAFoEEzfft1jdNp9",
  "key8": "2vVSgWfb2NcKZchT56LBEE4YRyvkWa2cw2FGRmbeaap54KzkZpqYe97dmrLvJ2o292NPwTwmTSS5bAKbomY4NPh1",
  "key9": "3vtL6BnJPbXwfwbDUqr5kpmRfr3Ngf2NMYwHPjpqyYMaBNNfAWo2ooB1RWmiWit7iyjcavcDhvszTwCZJnsPuzi6",
  "key10": "4FgLMAMRRFKrorVwUaoPBiUzpjKfLuVYAFJM3g1Br3P5K7HUXofjzwPhbqvnMuS76aNPd1JRgDecaQfSULzBQLyV",
  "key11": "48BEpTHimUXubU64NuUvkfKvSUbMqvacenvuzUKswYJzRU4UmUF82ckBCz89hoaiwrc2Eo2diC2KRHbpw3LKhQLR",
  "key12": "5dDNaK4jb6N4VxH3H1GqHmPh7ZVZmkLfpPgkEpCKnuqSYd48cUzLXMTFs2KC1DofzSNsJCyUinGp3cZPovztiYJh",
  "key13": "4HcfsK9fD1PcvQEpxcLyUVZkjXVsQCRtJV8z3HPCQ5zXqHcGHnSPffMRRpRo9Ep6My86tjcnkUgygYLAEhoDjoew",
  "key14": "2kuh64Eh1PfneXNfK83Sn2P99R6SEqWCm85gqcwmsFdoVb62MjtaBbhCrRvfEDxW1ADWQodfrLf4ATRsm4TLHSGJ",
  "key15": "623ixabxNRfwRRRzdd24rAStyhEavgFWiLUW7eBcWqvPbzu9ng1gQ2TFZM59vTxVLQJPWadYvxHVhWdNDhH7TCKS",
  "key16": "5u6UfJyBzpN4LY5cCqFZm7iwsViFgLWKyzog2ctdDsmttC5VMtJvx9xMKg8zkryFfYM7EQn3Cj7fZYUjUqswiKfe",
  "key17": "2VtGzBMkmaEZ57HABTBfNecXvhm3veYfuekbPdnE6az1VNysPC7skEmQd4BaZGKo2uDfyYrTLG7Tyuugrp1Ezs7L",
  "key18": "5sd2j7jFysQhTmkDPH814z5Q3RS6J1EXLBG88pfV6xcBz82Pz5Jtw6JXBWt527D6Gi1PFNtvWiEA7hUeqTqriLMW",
  "key19": "5zddUauUzv5vF87o5d6sWL4gc5MLN8KcEWABcqH89DpomyMSYexK3swgLvg6eD3iXeKdQDF1AgpWh6emTifYUf9D",
  "key20": "4xK1x53d4F5egzSXqMpgJnCdRd1AG1dmLAHUtzoBfWWvPFJ8iWx7chypZ1htaXoEiGCB89q8a8Gh3EswrF7YvHgy",
  "key21": "sCTzk19DmgARzUECSV4qMnPAf6bWu828a5i2TthvWxDKHLck3XLxnZoRDbDMYYsbHVCNRdms7mYvjqktUdgJ9Fk",
  "key22": "5zQStP7qxDfAtTm13y2Kdt7mfND9E3EoCyTfeKuWm3fKfptBCEeXy3iNy3p4au17TW4A2QCGs5Abe9E2yzXwqWiJ",
  "key23": "4vHBgsz9jVGYd2CXopLdET3UPxGKZPTjj2vGw2f7qpmkVCgRrXAExgcbXBHdcXLyC2CM8KmSLF5QbgWfNsw8ouh8",
  "key24": "4WSLSkrUuyscHNurLGfy7WqsNGUTYdBGLp4QrUGjaCr66WLgcShRuuVoh474Kmfx6bdgsV8SVxdRbNndyXQKiz73",
  "key25": "2XVY9J4hRfid5QboGxedCHjdV8K1hHJLGp71RJgcsTByor89EFPuCeyZtEK6kY2Fv7SWKULBFboQXLUp9qGjsueP",
  "key26": "29iecpvBA3BfLAycD4rDXYR4KH5ebTosdTaQJQkkxNm2EZchuJpwyV7kGuYHSvPrJtrqwGvDhuFnXq2FYokoShPN",
  "key27": "5YgVuDnidc4Kj6g5gP3ZrEyoy2QCk5Lj1VLU7w4ot9bEaD8SFFrpfQs5PZ4dWUw9SaB91W1PNxKfX6RgZJu5FfGM",
  "key28": "4QtifoArP9vbMea8h8pwfAAK2ACJ5t4Qxu4D77ZvijziapRNbst7Fa5y3aLFzHEtBcTCxvhBhfjxRibh8uTR1G7i",
  "key29": "3HeapvFRxMjAGerjyenQULErMknNovNFfc3ZbNsq2fbs2qD7NrCTRwNzsCD6mm7U6Ls7UFsx3FzHK7zeQ46ERop4",
  "key30": "5CCeigHgTHXRvAeWsYWNhgQrzhGT74DBPEvrf1LawDtkKocAgivc3syWMdoxypwddZYfSor4fQRAQqAf8uiEM3xQ",
  "key31": "3dvZrbHF9jk3GznhjAdMJzfjVLpB5PjWJ6AQdFidK3h8fwsrk7CxYkqtAPmVYhVZ9TK5pbqMtxmQJZWh1CZdRQHC",
  "key32": "5eFaEkuF6P8A3KF7cTk1yPeYAxGYCBL7dxAjFQXwNw4KSkTceNxaJqxMf5YA2B9MKSRCxpwgmXve8jTHMBoxcFBz",
  "key33": "529GwbvEVFn6VCFfbkwrKLMeam2PLa9XE5kH9zGEGnzNLPVK1Ed3HsRHZn2Mjc41pmaPZHKzyA9yg6PipmeMy1hc",
  "key34": "3LR8Knp29WpUqbpaE2F2X7FAiEvJJ6NrTEgzM3SQVrM12BqYKVZtZuR4xNyqNu1LShYpL4kus9h1hg7H36XPT3hZ"
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
