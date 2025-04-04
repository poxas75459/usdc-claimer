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
    "5TrjAmFhvt3QQQavg26r659zBiYGQLzmNF6bNHQqf2LJ9vJMrUD8JodxiDGCNPjdNi7wXkTejL8i7LnzMSqwoKw1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rJfcWXHLYCircbX6nAzv7hPACR8NHnhJmcDPaJqG1BMFVmTkf6fU3pdmpMWujRs6KxNNuAtvUYXyRr3Ny1ZuxiJ",
  "key1": "idEcQnSbCLdfXWdF4RHfSxUf3WVKTCTuCHLgcahj8u1DBzsgjESGpBoAyTrWQMaRVjX2yCdoyrqr6VSxf5GJ6ag",
  "key2": "5apwAQk47s1hRcni5dSJaYWtKWECJfzJmhKf9J7YfDmFSEiANqKNcVd4Wtikcntfx1RaRVKVKFbngkxrDZnFJCcd",
  "key3": "5Hg1A6NAWtgvLTMThLcaiQnB6iu3W2y4CUP58iYhhyXwu3UbWqTkTXZtFUQ73BpXY8pPwWkiZtW5DoMZHBhQFNL5",
  "key4": "5dewxj5FajbCmJvYy8zM7N87rhnyzfjspaDvHoJWWcAK85QUWVY9PeTyRyuxMERrwZdCytSxmvvuf4LzeGvK7Yxx",
  "key5": "5YbHFHovLmo3hLErTvkgHDtasY4tkzGKD74ar5e3zgyQSkt8TY7u7PZWVqGitvYXS2VGm3VFtmcUW1q4nsSqAo42",
  "key6": "2hKFeCqn1BXJCJJZPRgHKmvfK3soxW7A9scPrAXcHYPeZDwpCv8imGPbaGMi9KGiGd1jRUVgUxTiCH9JLmeKzYsr",
  "key7": "2DL6eiNXYmfeuPGftthhRAssmW6LQmwYaTkVovNBRxVyLyEiTxu8tbrwSB5GXb3AsxDTYGX6tmYTHuhJmLhKej56",
  "key8": "5up42cY3f727MQDx9ihvkec2HjX1j3LLXaP6LqC5xb8wiPbjN7f57ng3FSxHUdGJJX2F6PLKzUQUYY9BmzZ4DCgr",
  "key9": "ArsYtYdt4qoSX5jvU5qvnrSeN2uaLARcEn2dCZhEwzkXziCbpbBVCxihUA8v2dcbotiygRqscnUUA4Q1ytPHiUx",
  "key10": "5RML6vAN8bPbkVyjAMdSNDrZh6TYQUnZJnFMosKfVKkZggEzGw4TUeDXLUzyCaK4MHrVweJscGpVHR69mzDsJ19V",
  "key11": "38v5CcGUXYmdVe53B7HNUyu6XpTnWC69NhqjMZ5s1RZK5reCbr3xK5A2fXbzVDoYPL46RndFB7yRqVULihMNxqQe",
  "key12": "4rxddUc7GGz1uMhPcxYXn1hMpETHhwsfPiZEmvH5MA9w5i6vy2d6qXSMkrLYLWYF5WfHwYS3tdNYuTAJmpvSmSiK",
  "key13": "2GNKPPNBWFTRTtsYfLeWQKz8342c1kJdWRrooztKm7JiXEc7BQxKBdQSXK6BgfEdtCjMjKeeE5oFWQ33K1G6Ckp3",
  "key14": "2wfREc53wqt8gRmCbE32tGBNMvA2z8Q2zPZevXeBX92P8GAViMm6NkMSeY5heCQAdGQXZStEDF4cXbVpUoSC8hRs",
  "key15": "2oLDP2obSrDNNajP5XxMhF9AxcwoU4JruADyXUCiUMhqUdyaxpD63zBJjdRdpbPMWq2TXaWqrBArE2M1x8KApUoT",
  "key16": "4twzy7Xqyxa44nV4bf5FtAbFZMt2ziFrjY79q89bxxspgq9HC9K6BjGmqpUMZJmfb6CWtyuvWtEpz3p3RfjMBMVb",
  "key17": "4iBj1KQwJHsG4tJQDUQFEp4S3cKSmhMAQnvcfh7CdAwqxRh7hZGrcHATp4TYjEPALadJk2FtgSAzuA8gSBAQLN74",
  "key18": "2NfGWniazDPZrT1NZoPKQLeL9fsmixr6DxhV2LTZ839f4GJqY7vG97oJfc5i9eU1nukjRDgYFDDeZWBjPq57GL2r",
  "key19": "YKQVN5fB8r1Y99Uj7PLrr2LnC8Z7r63bn6dUxFimeEHwQVcfryUgMo5CSL6BHVYiteCquBZzXo2JVyUMmDFUgk4",
  "key20": "5hM2L65UCFLGQn1T2t3g7bgrKEqHwt68oGqqhbofyDeSLTcCAAbuoTQrMKZhWRNwRB7XcAYXr8eP2eKB857HUZnr",
  "key21": "2yLR4NZHxyXDNow3PxPZ5eAzAmH61Zo975bbM6Q4HoXZL65n8itC4MtCFWDjvaWR5gUsoiWQQ9D8iMxXHCeCz1nb",
  "key22": "2ue2dti3CxsrESZias4iDmRYa9xooRbhz7ngbGz7JvKMnzhAH3WGwfzy6vLjCnYyuhEkeyXAmsF13QCKN91BHU6z",
  "key23": "3hSqN2sR4EDxHyMR4zbYDE6fY9aES4xRto1QzpWgaWucgvrWVyWHGAzSvMM8M8HFqDftT9yv53mcbiUG855dFABS",
  "key24": "4Kdos115BT3DBmWQASNcadcti5a4CbfhVcpT3R711UcBVHvLiHthK8ovoT21x5VzJvDgBE9QoaasHMKffU7oLKJG",
  "key25": "4NXc4rctrV1cWy8YTsrb16sW69ki3uUsef8h9bRwLotMCJ8et7U8jt6avG88CAMdSU7MPYq9QrqzuA4SwFYdrq1X"
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
