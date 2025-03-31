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
    "5ABJMaR3wGPnmNVi8vtrHAFb4nk1RQ7DDMsh2oVq2nYWB9JR9xnnRMgyZZhTqMT5dhGVFy4bCBCn3vAXbGQYu1rU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3sSPJbGjr1NxiPXoxkDY9UdjgiDW5RY8bXSv8kAfVURxfbynT5YHRg2hnfXHST1fT6ktdBjQUJPZL43Rfn4QD3nn",
  "key1": "2xTWC6rEM2Lbgt26sfDJW4dPqJSJ1dcp7k8czqmrBJL9dukuYXPFFYX7aEm2cRBUECFd7XnqUcmqJrMgZdvAJA8u",
  "key2": "5xUbB4tvmYh1mu4CbqQqMf3S3LQni6xZ1FWJu1MC6zx35PM3vhxN7bwte75KKj9LdX8TxqoTq1ZkN9jyV37raAfo",
  "key3": "4g41ZBPV5jqByfqL5Ub1VbJQKYyE6aimkJz5sj2agJVZyhAc9eBXrzzGnUEBBqFMLyXftcC45DhF8AwSQstXD4ZT",
  "key4": "4cBDrG7cFNCoFoWRYenYnsTwwqUxfEJjfuuL4kMA9EJti9NNSeqcBDwYaGwzumUAXMe8mrAYBwYtf6vMuR756n43",
  "key5": "4xmEh5vxWqo3Q5M1Jyk23cU9AAMQzNhnv3TxL7DHJ99uFxDRciuUeLVd3u4Sf6s1UU3LnLTqnpg9GS2fAQC1VzEc",
  "key6": "eYnbyV27G8t9ixFSwYTwbpk35Xd9XGwaohBmYB814gpJDFuWoNmVLcTw5SegKPGJP4PimBsmJFvosryA8KuXiAY",
  "key7": "5nQYrJRaoRpSAtff4hqBAvZHVDRkP2TAZuhP1aaYheCcG7CW8HbMQDb3xsHm7aaytAsoz5jsckR9RQiWCyRgc97K",
  "key8": "3rsdaHAyjeyfz8vLVjUFvrkAySFgQbUFjFBWrzvRm5CdbDmX4D1mFcoFofstbMi7Qmx6e2sMfyE9Sq5m9neGJmee",
  "key9": "4YdFdtNwbdPXJtVZd6pdBCCTKN3sD5jrpeoEAF1g29WGr13TYadEoRd8xyD5g8bdCFtvcbo2WiE7f4ukwEuwM9iv",
  "key10": "4JUn9actw2sPaja7pP4ZNxWPQ2SQX7s955M9c12WqYGuyByQqHfBhp7BNg5zpSQt5gHU8Lwt1d9Fg7uYX7q1venS",
  "key11": "5jyw44srE8BjLuTjSBKZEE7k21fEw4eV92PDu5JqYG1ayf2HMwEHLjNqeVqFMuWkay2SapMr7fcrdKaqJxsoEv6x",
  "key12": "3TgeLzSTar8tCuZfwGMoPzYrwQBxEhWKmDNphjDBeoia8T6mto4a9YPdfFSdSCiAxU4gPf2ZQ1HFN49AkMsRQYEC",
  "key13": "2SZnLaMwD1K15S2QbJYzkTHaaqEG1xFtjFCvgcCE9ohz5iHBu72Pcgo1GJRVtczqDbDYeoZvCxsd6ECkpW5vmcXZ",
  "key14": "5JPxQyzyHyKEFSwxg6yEpShPCxvuDvQXCf3BQx7Pnpb4yrbArMJNdEuLzsggg2dGdEmGyN7Ta8XiasPyhi2pNkyt",
  "key15": "311VxPKrH1zvCDF1Vg91d3THg7yD7t6rzdLM3JSdY4NXJSNSdx8uoNYpgrCdPrQMwJ1iUR3ZcNhubWvFoxxE39qQ",
  "key16": "35J9CW2KosG71vwZNkE1X8x6dTEHHssHe4YhPDdSMQNFT4Vuk6NsZ75bbJkV7819U1C5rcWmPSnsNwy63qrotSm",
  "key17": "4xDY37SMRqCYRzvXQktar3Nbb5LfQ9ExvgnAx6QacnAnFn63BC7eCXJgAr3FvCQY3V7sXTcZPaorz3yLowTxNj44",
  "key18": "5bsdEsbaAiHjSp5ZAZYkCD3ymccv8WUAQexf9LyYNbhAPqQLuYLQhY5ep5i5vmwTVPVkWW69BPtRo6pE2r2m18u",
  "key19": "5486UqidmsosYc1fkKykbw7G9F6g5ZNkin1DhCxyniQ4jNvcVY2kTBxRpyXxZeihTyDas9o45ZzUyaMJ1eXvK2Pp",
  "key20": "3dCW9WJrrnhLkHHgoGaFdBxR9d6WGFfzX5kUATiKNvMbGxsWnS3B5woZZGDhN2DeTdBkao7d8Z5xZRcohZ2ebTR",
  "key21": "4JcazX82Uvp54AhDtcQE86qHPyC2ikzv4PoTrLzWLvBx5Qff6A7abZ7YTNGRjRmSUx6pjXRBNC3vuiW7YdgAQoWA",
  "key22": "4jsUUK2vF3LtthjUrdowFeGiSHN9LjqXXBhXX82Q4bnmcr7E3qmiMHzLsV3QAgvJqfZuZjtBVmGdCNGUAiWFv23q",
  "key23": "2gsWPY4p1KRmDfHEX3g5Z4TR5qehLoQZxAhroJmF857KWpjCYYvmbRJs8nUr5upzv68E9qgty5cj1RDWBJDr2A6p",
  "key24": "4ZhuRZ4VdNaJyuVrWn2AuRfEwiTFbXL2saMTGnHgo1RbTQV4LGkxHW2JqGhbQQfTbvSc2HNRKWbtyJXuJyVCUaYv",
  "key25": "2hkbj9ZjekTSAXPkmfHfPp4rC4p9owYTeVX3Zzjsn42wd6t5RgCbD7pJTCZQXJiiXccZ6eKmeakN5TmqiPbaRYAe",
  "key26": "4mqshgam6AqFCSCcFpCjSkhypT2Sfu3iTTBpz1zJruYsnzY8qqgn8uzUw6guonUybtBWDuREtmiTEGDr3H5t997P"
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
