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
    "WbVnCN9FC68GiF3UQM3wvv48vpmRTAajwwYyhkEFq3zUJADVNsoFRkiFcq7djnabFXWkKPtESS4eGXRuTHtmgxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "GuKwafra8Z2r5XYGJ9NjA2YbznVRoZ5154QmZffmASoCegzwQ5we3mqh5tZsP4BYaQWSxmYovNQNnDpo8YbgyfZ",
  "key1": "3SAw1E7mD5eYF4Aqdo5WzoZcywD8Nf53aVW6dcL6VjPdi4QWxrqawhELsxpYMWBdj8S93BmFcm8KcQdV1UUNYUFC",
  "key2": "fbdQeCyqCSouwF2KDvCJYdNm9CWwRmcwugwMyiwHbZSDDqVx6NwkSrtefzv7jSQXMA6PpUNTXyGXHm69XCWQiku",
  "key3": "cRmekcoz911vQbAewQ8A1S5THDCtvQ85CkpUjkwwSaSwFiwZJsY5bRWD8heQLSstyD2voCXHgmXdhczrDVPkQQ1",
  "key4": "4mN1UWxmrzFU5YysePzGQcC7DgzismevqA6JVfj52m5cP4NW79Bffyrbivv2ArALqoVXC5bcjJWMSgL7bLCN4qkq",
  "key5": "3EsLVxXyvtkgFKAhjEzksmVNCZgns1dey4LWWu6gPnJRMDpjFP42cCy5gbH7VMCqatZkaQnXivgFvkoKkSdB7h5W",
  "key6": "3fqdFxARzTGGVwAbtu382LmcJnd4CqR7dYKuGbwG67sjivN1Z5Wp7qVnpRPMgeQMjPhhrH5TWzqjYxc5q2bmgvR",
  "key7": "CCwVrDmwfRoGifGkFZg5BgmUYFLcNBu67NJoWyhqrApofVCzuoCoR3o6r4iZmiDFhQfy9LngmMeNKiE2hzBq1ao",
  "key8": "rdXCXEwWwA9a56HgCxoAeXaed4VpT9LUBpTYXk7oRzZuPcW7HxE1mCosxpvoJ3g1AhqPu8GbyFVYdBssSPTeiSB",
  "key9": "3fQr2GMQkaE7jVf4Umw7nDJjiBBwjBMqEaHtT8gFw1LnKNY5Z3T6CUdv73Za3Q7g21kRzE6etqBSeGEQRBHFzDG4",
  "key10": "5uoGvXvA9KbUM7nQ7TM7HRazzQy1pT5awLBhPkbCgj9tWYP6CkefeTg7fFc92r5C71XS9WDX2V95outLbeaTatQA",
  "key11": "5nR8hWbDHcefD5PBvtWeycoHA1kAvZJvscxGPp2Ek5X6yDqFrCdAC5JcKmXz55kpQWgshL8nQ8po5kvYnCw1F5DF",
  "key12": "25cx3EktXssso5n3mTqXgqTea3wupzTf7Q21HtvMjBA2cSRrDXXnUccRtUTm4hKPerBVmPf26pan1QTCRvXdCeXy",
  "key13": "kRomPxDTPSvHHVHM8wYWMe44rN4zn5KRpLbRohfANzyLUTmnNPqKLZJj2xj21iaWD2NAEmPDhG1LtCXkfnMTnNC",
  "key14": "4qmqQ1Ma2irNPJEWr8NUm2RTu2dqxNjTo2WMkbT8wnjWDSpnTZ3HtmxRNpUxbR21oRfzUwrc2WfZvyWaUYBYHx5p",
  "key15": "YL72qh8bpLnN11hQgDXsj39Ve1Hy2fuHjqtNaP62m1QzbzfsWD1CbQWGUs5HLChTkGKv2tVn6AQ2EsECKtPocEM",
  "key16": "3MfwWCnNWYdvfsSSQQ5mPMzEjVMiAq5MYBW3XakAJDCdRhg5ZyiYjxLiuBGaymvsX1QkjLtcumNizx2Hkdin5uJ4",
  "key17": "xLcNNf2QinFC6SWCUe65iwHtCg73Vc1PcjqQRGx8nNKfaULhPmCayZgcKp55YuFzf7t855t4EeExMgV2yuE3ptu",
  "key18": "44PBrYiTC2KK4EZKCziiQqMKLxkiq4UVu4g1i1Qk9SbBHKr2HLg6FvbegiHnrfaPMEgtrcrfPgrQooAY6NTiNTfQ",
  "key19": "F5n19h6xcoXQeFFwWC3z3fLpdJXe15zeQfnsRDHnn1L5X971becrkDXFo9xKAoGVisp5rkDunKc43yPnCerw8WV",
  "key20": "4US52grvS8kpMgdaZPGpc9jJ1gAjyvFHKLrS3y5Jg1Zg7KfdhTqEWD3cv2Rt4kJE3p2SMBae2K6RruxjhoTgE3sD",
  "key21": "ibeiukqRTtf8JcaiPAZ46fv5H8d7k5kibqUhdrVWKtKkho9e8iQ1ZtCwG27iMBZjAup8AJeu7VnGNUjGV51Ac27",
  "key22": "2Lrs4mhCbrv7qeKtJvK9VrBpADQbVC3GKFQKYME196LrRJFxuFQQxbfjzPbhzCQptXgR3TxHszMe75rHRxWEywMX",
  "key23": "66fsgQbc8DL7B29QSmLZYWCy5UcM45no6hrwXpJA2vd3iyDxeiUAA4nJXAnzxa6FNHJHf7deFtSgfVEk3dAyzJcA",
  "key24": "2WzfhLLG2U9psXs86HKkeYztC5ufjmr1xsMvZ4LAHDRjqEfXMBEGrYso5byFGTVEb49UqKYJhpkGouP4rSnVEK8d",
  "key25": "FvTCEb4w33S2Qb3bSeLe3BZUuxVQMPcU6sLAAHHzFdafQH4MbYMvcVHjwbS6rdWRLPfaLtMzcUwQwNENWnqy1vc",
  "key26": "3biSbPrbpviGEAeCbJ4KgDxFtL5A9U1mYR97xGuKz5Y1SLKdaFCY68WmkWPThudZk96QNux2kP2z1aYJKzrnNDP3",
  "key27": "XYRbjM6dbuxBuemJ4sGQxgqQLSzfSvXS5ZnJpebjA7aN7bWJV2ATBCC2YEQCH9YGmz2UVnwXEJJpFH6Y5mnzL3p",
  "key28": "4pA5x4yLBcTd1nqVHJbW6d4GZR1aNHjDLhJoJqG3GCMTFAVLn14QWGAJkRLSR4oS8Z5MoBs49wErzLTwzmXefEeH",
  "key29": "4n28j2G7rX729M7xAotMsysUsFkPLFekuRQ8uLtYmcgnceFQC8kBzw1hbhTnKw2CBBXaqPruNp2jfkK9TDrNNHVf"
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
