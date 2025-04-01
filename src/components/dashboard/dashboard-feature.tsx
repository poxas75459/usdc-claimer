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
    "2K2JtBnJHhfVXuSMoY1tvcf156Z5sjEi86VcWfhRUkG1C7wM6TM5D2qgUdEPjkPcRubQdMkiZHhpEq6hUWG1Gweg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5wK8CJPXHAARt9iqXRLTKkq2CkgnAt1qx7XPJH7hjRCWF4KX1n2fkanUqww5eAPWkXR7fEtgjvNtooA6RrdQxuY1",
  "key1": "3A9RxqFEAgrJ5SxRnXdq4kwBWNeEmddsCbs2EpTvupxvxhdE9egDd3nTurZXRVnyRh9uz2YY2C5azf7cMarLUAzP",
  "key2": "3GcaC42aSi1QrK9w5dK19R1xguNFqMKimhdf9NNS3aY8mXy85GkDQEHa3oCK3JeJ2B3qvRTWCB3cQKb1w28dRqfM",
  "key3": "5D2W5MXjbCT2TGxzRK4S68xw7Cf789axfN7akZH1xHR2LNpc9h1RNgoKnDxTPVjDCrtrBSvHu4CnFSm9oZh3Qwm7",
  "key4": "8yvzP8AcCzLDKWCgTGj51cjYooidTuEuQ7J1itKTbJTVrUHjnpBLnC6RLHKEo1UmhjCasWaZL2HRLLJh7sg69ZV",
  "key5": "Unw9STJ4sjW5LEvP3SkTxqZDSvYG5VWsxbeu2G73n9B6rKyTcgtWFNFDvZfQaZytrBHAXBAcCcTHP7zdT1rBXiC",
  "key6": "5aCr51bH55ru5wFBzGAVkrvvDffftxi9YYSp2i4tSXajmQDGF1aJs8YtUCuLGWrhAHi2fq4YrsiRvuNycMt73DYt",
  "key7": "VroricfRycHms2715LwJxckRFfkVDX7QistTRAhy3FrkV4w4Ezrn4GrDgDVHfEREoPatyZrVB838ZYBBYWyVzcR",
  "key8": "2ptPUqn6duVmTr5Wbk9P58Mb2MFAEJmr4CvsGFmafWf2G8h1gVqLCa9nC8FSatP2o3rA8mVT4eLS9uamaN6odE3J",
  "key9": "2Fg5SWyoiVpNfDgPz5byPwUcZHk8MSNGoX6qNQAMkFo2tj6zWPksi3CC8m1LsLiJNoUqWNkFPrFMEctzezd41wj3",
  "key10": "46eVrv9m48gtxFp8ecE7gniMgn78hBoiPDd3L8WMkUKzexwVdeMDkDkbeEaBvQkVHAsYDuf5v41jqjy1YTx4Eis5",
  "key11": "ssUMyoevzpSiWNAy1i7m3d9C1oMdvxNN6YyiYipXyHi8U5TewtqNF34JmCkudab8nEEsHZfeNtDyMb9PjTVJ3Hi",
  "key12": "8nd2Vqk4gmUSm2xgU5ZwgZHzdngYZCtwKfvy2P7d6PWBEZ3dXbUXjEVPuPwJw3jpQ7U8AwE9qnuq5yfWM91c7Sm",
  "key13": "54N7E7tdD3821BqjYMf4Rz36fukQbQPja9BR12iajDFa9dAf3zBRpBq3ZzeUSygMU3mBTaBmwWTy2XtVgGhxidua",
  "key14": "4ZvTEvzmsLEWkTiUiGfcr8mNTqH7wVytfr3GDfUNq3rw3tgS3TyvuQ1QDiB76fLuuZQG5iZRNwwBQCiboCE82GNW",
  "key15": "4uUgPhGAXGABReSsXRXRd53mvzfb3YaQ2NsPXKqHz9ZuDcnTyUwdYqWi2mA2gz1NSWJg17KN2hYyQFE4CHvKSzJJ",
  "key16": "4ZCwLgBGEREs3dcFmQoyTs4hsAfziCdtifqydD4sXConKiUQLwqyo7onbuCKBtGSgP63syoFA1McG1NtQXUntLzw",
  "key17": "4pDn1m4WLnbaus9J1TD45TczqKBRyEheBfabS1t843D6yyPGsZ3Bk4dCjJR5TRyG39hNszrBgsDqptmGDP7N8zsi",
  "key18": "4As1vooT6u4J5oCBNJiJLz7C2nqh6QrBna9GnzbX2Svuszf5hurmRrzcoGXS2KDpsaS5kFNWpomnN3ocpYfbXC43",
  "key19": "h3EYeb8x82iAFDaNFdpLF8cWoVsEbjFtPLqRtRrFVdVmAWr321wyvLVvsG9HaL18xwhofxXuwxoHJ7CnHSqXgqp",
  "key20": "isbqzWb93rj98wc4g2VwVakPt1YHBvYT6HzEHSwABnSSTCAXoBDWExPEUjG5tEjTWdFkR1vCE1qxkCyKcn76ujB",
  "key21": "2uMmKWgNdGhhiVheCGYojXiwHwbwGw8G1uZCxmcPG7Cjr5xHDVkJXHLzLViscCMLo55u2kYhVhuhMRRQCLT6itA3",
  "key22": "3ypoTaZoTx7HbHttSuQU57txvBN2F1onB2Bcev42XUxT1mvrnLo6TcChhZxGUzQvRxprsbF1dXKHqL9K9v1Y1Npo",
  "key23": "3J75o2tg7Fzayy3Ys4m4WP6LqeVYPBDUqUNDRPQBM4QQp8TkiQyUsS2HL23tiEhRsRUmgNkdb3hPQAtgNvzgAWng",
  "key24": "4Kv6djknrfiXJDXhMBaWtdHiGSts3ZYUQwhE4RiDAwCA3sYMa1UxKsq5yca2KrF3KsJxojbLHEajsye5NmL1mrwA",
  "key25": "3GCJ6LmTn95iCbd1XFRqqVftFMo8bch7vWAhKkMDQbYhYiZVTar5rhK1Ug6z2JFRhTv7D7MSEukDdLkcgCEJ1k71",
  "key26": "51gtL2q8GkXoiuPtmEDEcSEzzoDiMC8Z7KYznkE6GWcjJA1vbuBcNFxoyqVzr519pXVbsrDdLwrZ4FqxohSLfUBw",
  "key27": "4mNK8NRb73BANMQkixqMaRkpkBYoXgzdcZiYXTFysu4FshJK9TUZ3jTq4SBDvdaY3Gs78hgxA1hu3cWfEnT2A5oz",
  "key28": "zRnMAToANiTsUWtkcscZazgjb6HV5ARBUddNdqHtXrHHFz24MQAtMNKzourS8iTgG1ZqGcsKvRo2MMirPEiyD22"
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
