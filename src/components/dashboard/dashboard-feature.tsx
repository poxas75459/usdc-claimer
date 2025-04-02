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
    "22KgQx8FUxuqPpBmiXmPf9xmGoWkyyKqFfGdkbCZ6v9QH3v1gTJoGF2zDGesF7YpPQenL1etULMr5SJibdY7r65H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AErEubGeW2C7Z8UagHmEQ4PUzMLofK2nrvxTPnMxDQxoFVUhKUYA7FkEEgKX7MBQYHf2CtGngaSDuBQHESioA6q",
  "key1": "3NMLCnXNu3tvdtJYeHuN6BpmgmDiAC7kBK1im9E3zSArh3wwdC1XheLyF8iEzsjyfPURyRtAXPUJZg87pxQZGY3y",
  "key2": "3zoWZoThmtGtuJWv2kNxvucEBKDXJ399sNR3MJzwEwz74AwAE6GsSvvmmdejVmaghaqqKumEztSX7sd2wmPQ9mnx",
  "key3": "4ed4gdGaXSo8LVodPzrJMaTG4XdSSDvUd7GvrUUc3QwajPcSD945QdF9UjdCs6yjPTuEBfN3dGbJeFvNKT5qhifz",
  "key4": "L9XreEQKqEh7b21nQzbgrvBGVYnXJc8G9PeNM27WHR9QcnCaQ3jY35QPKAmkAMRi5hrDspmtJykhRUncH1sK5pk",
  "key5": "3QE6iQe9fXYnx4ySDXLeUv9Rms5BuuK31TeZ73U2zWmQRUrG5TvxhHXW7rT532njynHDTXNxMJXbyaNBAEJTF6BU",
  "key6": "3PCpHWXJU6X8aoquXrFsfYWFi48hhFD1VNoreVaa2EFjdkpWag6TCcoP1CKxAqu6f3VnE9girqaXz1DadM6dqsW",
  "key7": "QAT9Q9bLtekBtwarBKp5F63rpYa7sDYTSwSu8ctr1aerHyFnvWPaNVF4VH8HD23iJK1xZmCdEKntAuCsjeavNnv",
  "key8": "4X9gqWFrV6po6ytXQuDeyiEigM1airFmgQtToiJCgmFDujhTEECzXU39UFc5nxvssV96KxwBSVjce32zGeMeFN2r",
  "key9": "3gRM1wavdskVPcJzyoN3PisUH7x3p9QSzScYgs9vyTFZb3daxjiWHpunPq8VLzXcf4v16TvVD8M3ydfWHnihkhJe",
  "key10": "3CpUL8zRzkCitPVLJ1eFiW7e2e2FnyokZdcRcDJFrcQnEwQkGRH2vW14kHj8GPw9mJkH4DXfBt4i28azNcTo2Ut3",
  "key11": "7ovViRXjGjQkbFGurvY3jvfrwB2WrXfzgcUVxdCL7BgsRUTd5zvoecTznCd3DNitKR7QpMw5qi5tRQ3iWPFCdaK",
  "key12": "445WXuHc7x5wx2XszStttC6odqJzu2nL62D2BdKeoxQswNBhy5sS8UA8KbD4p7136GHvszvob2UreE8MWfLWtnWs",
  "key13": "4Kxu3TzxeUJsbqVNE1sSQhAXhp2duHgSHVYd4aFQLPQScQX5KydDqVPb1XqxECnydqQuQj7RyeKEQvg33xNpRhwK",
  "key14": "5WTSKrn2NBCvWMaodefdXfMGs6mZLMFqUd9dNnwvUuRmDX1Gv6x5YAR45nYvJZ8AvoZH5uEzb73DfE3djUDSpNP3",
  "key15": "5SGQx7TAvDQEPSuMiKDpEX1UiRs3LQ7MpsbRL9RyzBJx47ZkCcgfbz7k3sLPPDeDuHK7q7iFJJbqQn15zXBMscqT",
  "key16": "4JSbbihvErG1fSuGNNzG2tddZe9MciiBCRrqkpjsC2c1Rz7yjk1gjNxEXAadp5usd8imzrD4yYM265rNJrsNVKZs",
  "key17": "3YJZTjKpCzkgg8Uar5T7fHEYvibhrhEMFrpatWB539hf3JPNzhSm9DAysAA5eeXrLkWE1nmyA8bEnh6LpBdVCPtf",
  "key18": "3npeSc6GfpM5VaPNr5wkLLVP9WA3yishAWvmmey3gQJKsrePfGVsjf9PSPtiiQoyKAKBZUhhr2cgirNgR2sc59jy",
  "key19": "5zFog8Wng24MPQw9qb4CgVmMwCww33eVMWYSGke7xLJhJ8v2siB1EcnxemL4hWaC5KDwLK7ykEaiM6mdZyiqRKCP",
  "key20": "4HBwdNzuz7fP1bGCcx4RFfA6NAVZoTE9HQ39vDDQczmf6VxcBspoFAiptHAqAgcqLnxdcYz9mfoYuU3J9m58YFWn",
  "key21": "2NMZhe8SeMNJ73jGbZzKbMeemZ8GQr2JRGDtCeAspBg4yKuNZRJiA4Qcfi2CUKAq6Vu9RoV2DsP9s4Av7UuwRSGn",
  "key22": "Scj22Hkg6KfpoZPjMDjbZ3cMV1YnbVGwf3hAHwiZFRwZt4gmn9KFgTisdRXbZRyLT8zf6NeDD7pTcGcpGph1ini",
  "key23": "3vq7LVF5g8fvdNdgi6Bo9Luh4uQHeC5smaFFYu8WoK8YsrfBQqDPT8WPgwtJbYrn3G9TNHKu2o4PQPDi3z87swVM",
  "key24": "DnrB8ZBvXpdp15TAeQ1eCbcnY8HTqdBjcwC7FqNxzN4HPu7gwQyAgrnYz3WybskkfjmwxSXUzb6TzhoHpPiYg2Q",
  "key25": "4KjCR4kz8jYoH9BgZdJqP5A8SMzVDVBwWCgffx3THPtcFromot4kSYC7yewRCtqt2maoULKgcLa9wfFsPPSx6VhP"
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
