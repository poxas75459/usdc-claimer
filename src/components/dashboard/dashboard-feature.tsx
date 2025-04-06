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
    "48YAnLMZtXL335GRr899QxXU5TfCg1eaPSDVa8awQkEoxGGUqv148Uv6HTmpbjLRcDmNTB9bAAN5FAcLThd2Exd3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5dBySRnsybALvTRZCNFZvhKcm7K6ZDJKri4uCf62PfBaoUXTgqSXYDA3tVEnTXgjD74FkPpV3bZ22ZLoSaQMK1",
  "key1": "LyxCKs1TaSfTLcWZam7pPrCSy1cFRaq7gHhcoVXvxthPo831eAGtYS5XQubrWPAr9Bscm5VhKy9VgGsmE9Lm8ED",
  "key2": "3KhraBtivpTTytSEyynnE6RT5EurBBRCAtqFFXWgceVycjTVid1tWrnkswkjpDvmp5pjQPTTLpTZRr3L8xWQ7WMy",
  "key3": "3ob5NKrJLDhGopEeqz3fzYnBcW5EojWneuf92YjaEsT1Crhhaf9oFXd7Lt6S7TL7HfemopKsrQgGzQFgvh5R8jmS",
  "key4": "2q4ukj1VuLerv7DfqBzUEJFqrZkLzxDfeE9PwyH8UbhFdkrdMp4nJnURqM7qJQ7P8UGFejVEE4yd7FnoKbtrbhdV",
  "key5": "5qF3JEadLV2HRVUFuX1FWXWAoomibhMSxN3dJ2agKtYU8dW1EXkFyneiKUmxeQ3fiwqcBMAHyr884pecX2FQYQnL",
  "key6": "2uW1AByaTNTV7vJyoyFHPfE5FrJBf7YEotNBWSxoZBgAwD5gARP4jvoQwxXe5RoQpWvaj1wsJVScpCWL1CW1m6Fd",
  "key7": "x8ZhizQx2prgvrtykQCtqmLyXccLfzsow77zXoMFP43nBZHaMZX2Yr6wm6ctRbZHr2Rt22f7SZN69boTZTi1RXh",
  "key8": "4M9zM2fdueTRgGyKJzViBkVHD3MEgbjsZ6ULjBZL8h4tGRjAfr4rYZ8fAHcNuhTmf4VzVVPbauPbysyDHrvMa38i",
  "key9": "3Lz6c3ZpxVTwYuMgFUG2u1BsGvuEkoxSNdnnUyqu6vLpwvUZU5sFu2tJobGqV1ZtSop1ztbSFNkvCXAzQ9PCKJL5",
  "key10": "4U7bbnGrZvpng76cqPiuQ7Z2VCieAXniXuYADtdQdyRGLUkYbzF3bgT96egCtcAhFkXjiLxCKhcKi4pqhxScfsNL",
  "key11": "5BEaheLY3e43ZgrjidhMqtAXxUtQVDar49B4eEhKgGba1deqYqNwpuxig5imN7Rnq5zmBpBdssRq8JEWEYfkqtpk",
  "key12": "5jr7Bx9anMwLnVdnxLttgLQCCLs16fYA73sd8ZzVcFMKHG9qBa23tLPCQsYj5GzZvtB6bXP5wose82vg7hEUERnh",
  "key13": "3Eb8rXFZrz4Ngi8MT7VerDBLEUie3ysVr2wPXPCaW4sknH57WxHzL8HQtReZ31U8dqcyTz9kUMkXiqvkuvAYfyJ1",
  "key14": "2V55kdAncJL929NfXz4Wg3czA9WTirTxzFW7nX2J1TVE3kpfHvWAbXSAKzGtAV68vrfZyJeQSdVzAvz3ZqQtcoFu",
  "key15": "navvFw1Xh9g1JEefa6u7KNmH6eJmgDtuKze7KLW3PU1DNK3mZ8jTjWtxoMQf8zFRA4hm5YURaTjTfjcajqBcCV6",
  "key16": "5FCkfwUgmn9iLv7HW5vPXp5goZB154Tzz6WLV5XaLLV8qciLhVzH43nooBk7QecwvPciZHCTBP6EEPjWDoLDZbmd",
  "key17": "5mKiqw9ctSGFUpsBWNT31KKdTdMxYjd2tEL8SbpEDtLBtC9xuX21w5zAFat62uE2Zr2xsjCczs7QxQWZp4peiBBM",
  "key18": "5fe7Bj6knmJ8qWKr758FVR6xJc9dwYpmjqw9SS5rLGPyoyV7egU5cDdMHKPNfVqCxSDWQxFhbmMFgDRQuDLV1yEB",
  "key19": "3agypEysbVdGJLxomWSihbUysxJSoMumsVYvn6eYoDqco1vsEuL6WQHwDYE8HjPgRxBx9PxNCg52yEzdZ7pC9La5",
  "key20": "5FUwSVLDxTN5uV8AR43mJKoaD8ymhNWCW6Nzjd5sc4YzLUtkMGMcjpeTzvDchX7x1o6sMnqC2nTDsKAm4J4oe7GP",
  "key21": "663bzzNYSx159ySaxwEqqfmDsWyfB1TBXMKWpNuxuwrcS9qYL763L9fEC8f75Zn9fCspTStrzhxSSGqutgShstwo",
  "key22": "5YVAynb3Pg33zia8gLSqbcUr4mbYRSDfhoByqpyUNx9cLFrPu6gakwjSq3SrnXWAU5CudWhwWsdZwzfdJpvri3FD",
  "key23": "kvoG9TQC1vTCMtiZeejQPTMyMRoM1rrLjyeGBTPKSjyrC13ebKquxFQchM7YY33EAhy5tzMey6KK4gS5X5ozX8w",
  "key24": "5SGkZJinzjhqKvCW4WNMeqxBGkRsii33fyDHS6dDohUaYERVEhrfcMEB2cmcyXULA8dxPGM6gEy2ZAo3r5XeUAYC",
  "key25": "5FEqB8NrrrNjNiAM4vw5LM7mSkWWHhv75XCx72dMo1JMNmY8jVJwMb1Aach2fSPVj2draXiZkmqpEk55kC5rrcwu",
  "key26": "5sm3ebFpTSy1a1Jq6B27h4Kme3erwrBL28rXU2zYuAQ2vAkuKBCPW3naiZRkj7nnotXcfdxeFnrJ7ZrsyH72fRzn",
  "key27": "PJtiS5qs9oMgVs3xyUnq1aStxs6ejorktA8VYgURFtdQ4P29mQp6jheA9tiu9TC5Lm83p2Wf7QW7H1ELVNPsbLH",
  "key28": "3ekBMttGK3zfCV3xj2LjCU1oRVnpivQCYB4jC1aHsT1jQ5hQXGMVdXhfufCdguiihQHNhqhqFUEPZBY3EsaLbF9r",
  "key29": "TBCXWQ8FXvAPEkP9Rehk6jJEsjSB4YTrUP4hRd2wBHppCwQiebTEXAQvAsGpdS3zpSbYd9T3X8FhXFVvMqSSXrA",
  "key30": "gZURqpnJg837brgjWXU1jBo9N7dpsn3cyDpFDpwfNAcFMvEN8xbe3PCzq97iDd2R11DBh2UEtSnNTTjzkksitHt",
  "key31": "3S9UXKbzRhNT6TCWMaiN4e1KEPW1HHm9Vc39GnRisVnAEYxy1oS88AnCkKeH3LGZVupQQ9djbKWs7ipF2BVnCMLc",
  "key32": "3BJSGazbq2WRHbSg1Pct1UHxp5pG1kJAYG7TRR6NqhKdPSMKHhJGGHwduHmpDvdnDEyUb9RscaQwoppi4EbKHCUB",
  "key33": "VWpH8Zru3MHnGA7UnF2PPQrcWr91kx5n98Z4Ac4qAYSvRDk2Qb7qmmgXwum74F3QCeSthVSXjpR8LP6vwJH4pr6"
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
