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
    "61KeAYBE67nXGazaHaodC2PvABE4bfAxNGbsrCwQEedLGKDjHP5C5Tn26oGhzUDUikVEkriNCHrQU7K6HAfWqSu7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "63tvndTuTgQ5hQ6FRgazAAhYqkzufC5iLHcJHPUhKeNAJ4zkiTfrP8bM2xVLiNyvmz7Qc1LZACbm14e8jMEcrDcP",
  "key1": "UPSNcyJkp9azetMpM7LxrN5HTT7csZJe9MDdhCmLcZXv2HcbgGdQ1JyWvFaeSqCma5LPQ5RmMgytin7tVaw8e1W",
  "key2": "4obQNBJAQwHDJpBCSEs8w1EW8i92gQGLgwkeNnwNsweXUQGSnVYCZWJq2q8WddJbco1uin6nypUkR1xa9tGqeETf",
  "key3": "26USuhV7sYqm8Asvzy5xNTSyrtn8RYCV3kJg7Eru9gmvndkCP8j7krgRhrYSKFai1GVwQGpWRQNGENRpPND387bm",
  "key4": "JPMgX4bNi2QWEWYgFwKHTgxPGk6CeivUFTqx8CzZY69PkpfnfFS3DjtyhCoqt5J6YdmXSSRk8eRFphsRyYPkdjJ",
  "key5": "5JL1xMHKNhgDWeXaEFv1MvwdDEhYrenvzkEhR1AA2CGU6hF2RF2wZxF8yCLZhDQAu9uS6Ay5mU78NN8ZKrbk7Abg",
  "key6": "27VHNXZc4gRyypWj1CYFY93NTksKWRXmsp7QWEpQGQas8duhCRxT9ChboHMaa3gM6SGHPnBxB5TDLie3brFREEQc",
  "key7": "5a5kJAu6YKiEwjfMjMSnCC5iek3QHDaNhyyHmnbfbVx9pTZqZ7x4aj6a6s4BR5B2TENwf5wQ14JFq2TqnDsbfSo5",
  "key8": "4mTy1bdpU9JVLMXVkfoNgxfGasBCjvV43uJ4r7W2JNofAGowPyhYudMC9gAEBjfjEoRdfALP5PTjnkpZPRfy5z87",
  "key9": "4iY3XmdxHFVwpxcnAqTv5MF2YQr6HUNaGuqGqL8PJtW3nnAbGvNWqUDEmjhd43GRMeBqnGyCokCHy7sgttuwFTT1",
  "key10": "GnTn98LXPdazbDfD7J5h1ebjmZLRLQdy6L114yqcaELkER4vBL4B2GxvHbZbDRZoxA4noxRXrBHdZtZb8Q9FPkL",
  "key11": "5ZfpveTq5iJGaD7ZXXG5rXKbZtij9iB8fJpVW2u5TAXRz1DYB1pjgisFMXc8K1qqDvCUDER3A6kF3TAiz2yyBZ3P",
  "key12": "2U7FDwZKWacN8rpC5Htj16QB5FL1MermbvQtfLVGwzYzbMSXFDma22cAaRYAvb1Zh2oZNrpBSACcueK6njDa5ys9",
  "key13": "3YYQUwjTJbcKNqhDZh2meyZqHcXHXDpTbwA4nbiueAuhntNxmCgAphD1UtWXiFA5daaTWUjtNVpcHN7iyS2DKaFm",
  "key14": "4MoCCFMDwHeNDHK2CuF126mzcEF3rH8v8pKTNy6HeJYRGEHVuVqSGPigYke1eocLUoPPqhLVRBH3wqS9Sn2Uft6t",
  "key15": "dDEcWWfHC5y4NrjBDt7ZfAvcGLrkE16cLoGFzDSHUFbe3QMR6WFKvvVNLPExjEdDU3jGn93y3P7cWSvhim3WfNB",
  "key16": "mrSHkqVQRchE897PW5hBiUjG5QREXfo1Bfp27sQiETnMZu94hzzWozaYCv3B2WpcskXAES27wpHKPHydqWdAF7o",
  "key17": "2yfKdpBm2LadwaScBtvGVp47YQd1K4kXhC42tbZMRqxApMHgwgbUiDqEUbc4wNWk6VN94YkLCHMAHS1PnubcgPtw",
  "key18": "5h8TpYLu8JBeXCXSJfKpNQkg88Lun9JVWedEUPgE51agYWz8j3UiZofTSdjEnJT3V5fpj6n8oQerj9Le8PbnLeRH",
  "key19": "4u2A2HofrYUHjQXy2MT3k4h2asQusyAKdHBPaJT8TydxDKDzrZfnzSpp9qWNc9mDqqMLvEuRQ9iAh6tuqoVZf6og",
  "key20": "5V8LgbuvC5pnELZhd1AgoGCuWo1et7eyMgw75ySySMsDyfszmfjknPgMDbA7PQNkTvLS8NQwdStM3vqAekrTUJ9w",
  "key21": "4Pia5fZJpfqoD7MsD7Ux1PJCmpiZCDpfRe1KFtecChGYqKPyHKUHcaGhER5X6vh8iC72N9EPvLsTUrm13hmZpsNy",
  "key22": "D8wyzbk3ccv419j6N7bm4Uz9uyzbtzhjn4FoLbpbDiw5mVTWYZUpb5syoZiU6cYwYSd4nM9tu5cxxnxUpNQZ7hU",
  "key23": "4uGvacrwdaBkFPbBiMYK9QgNd4HHiNHCi6aA1yfYZoPpbunJVASz46seS9Jdhs94TLYrtYkwrLT6unE7SZW43NDR",
  "key24": "zY4X4SJYkdXpYrHQ243N1CmNmJaSw9wMFSriRc68xtACPgHaTDcG9ja99pFrYEqff1qoEj6x9NZ9P2XCR82dRcC",
  "key25": "4ef8onnnwceWeDq4TSX2ksByNd8SLTQ2mc4xU6mUwcXss1vK7veAjjpKtFcgFuxbDXrQmSraChTE1QAzRzRPDL6J",
  "key26": "3KDZ7gKWSKUmg9s4ybJkQBRZzakhuYcBrbG61aWVPqU9y6fRSThsyP5fC9U2YG2z77QULfgBv9TwfXG8sVc6FQfi",
  "key27": "2XJDKDhdaYgbGiMa8qUNQSZme5VY82o2WMRELwTci2rGAbyNmeZsDGNkDUCXz1Ww9i44dRJwstSW6ZuagSaNTuyH",
  "key28": "3nQv5SRsfEKiEn78fMpBSwwTa591X1Sh4h2m8fiCCc9i4tAqWKE3NU2XLRW7oN431ZkwxRBPmQC5fSDjwpS4Fix",
  "key29": "mCeqpfCoFH7Uv3pW8NzSRJJTuYyZdjBzuWqYecdj2vjXRzLfDrQgycxQ3oUf2BYVBEgyzuQPKQVGPz6gWjv1cjd",
  "key30": "3rpXHh1sJLZJ2HKHrCkMSyjmqoctWt8aGhEZv2ZMaEBQBLqbGdFz6iUpEisZkMRTTgu734CuSuDJCMthjqMJQR2s",
  "key31": "2c2cW4GTkqymBBf4TNo4MQ9CkMPZfSRbWE1Laciobw4EEEfMfds4tPFrVunyxBiMY8ZJdsdeupAdFdKK4whK1qtE",
  "key32": "3rAAMdMY8stXDspV3J4CdaipMmmkZVgNs7B7CZ9rt1LF9QHPRt8GwtPQskSf4GFNmjm3NWECby43fsLi8BZPjMDC",
  "key33": "5phnkMQ9eb6mpjydhBMS27L3drVPYVH9PFkUrbhRvEFmNM2nsrn6mAmtWeJXokaQRwRdaiMJYuPapkvn2d37DS9q",
  "key34": "SKJqSFAeVLJ1ENdWdWCgbRg7wnKotUJ1LEeukg4Zi1BaPYin7i9hkFkrcFSMr5W6wTYEZfJtK94kwXc7b61Exgy"
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
