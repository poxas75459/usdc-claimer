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
    "22LmxprX3tRNHEMEVWDwzczrLbSt7Ee52KZ3wUs63qo9bJbsDD29RLZanQsfqcW7rih3gAJsXbzYbDeaRaB87o77"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5qwNZN62TiXqUzHoatwtdzqNbJVWrqHxHz9so9e32hPtyuCdfoE82PLHAzeu9LsbisvHvFAswHMTKnGJU2VPh3hf",
  "key1": "2XzGPCExHVQdKTmLR8xxRmK6Vy4zASEkVg32qoaM5hLFrKX6oK8q3iLKpVcWVDhFWqGcxvSUYd9h1axVJ7Ym3ATQ",
  "key2": "3TFTFXE3z4V5AtjC5FC2CfeRuJiP6xBk72DeHtW9dFeEZ55agKXBPDcvhMMxw1gD8fsRG6D5bgSHDwQnf4qcLc8m",
  "key3": "2AGXwHKaGDGQ1xrAoqAcPSCXeSZminsXuHzazk56td82vvYg4HZMFWk2Hu751pynBTknMTSPqaCzoLTyiR5Kygng",
  "key4": "4sKBWTKjkNyBWfw9hHHgQUz9yiDHzqWNsgNLqj1gWFCJw3YwHhe8CxzVkgPBvdHaRcxpRw9Cfb4ujfpNpL4twbRv",
  "key5": "JeDtbHF9tDFAS82UdHuDZzJBZwqzY18KwSy4owpFiaJEmNmC4kcqtK14v6HfBic8zFedwhoeQJUXSNzPH3KCQtd",
  "key6": "4mGuvRtNJZNScBHWF1di3sAAzqQanaBfitu1uKCGv7oEmXSphUWL2N7uLN8qAJ6p2aGuUZ17tw1vwcap9WKinA3B",
  "key7": "oSg5zA6H5EofcHmZTqVTVGR1Rd3FUJDuLBUDrPqoLyRCfYNtBkBDxpUFxba2edafZB3FCbc3YT6STBwnxUZmUwa",
  "key8": "33uJ35D5WjnQUrieDeJnFNKqRj6Bz9Cr82hKLJyRfpnu2J3vcyMFxnLbLbTEqYyLwLFhAWYP3kgA1aaSdctTYJRg",
  "key9": "4jiKyXqjTbyTLXnnKW9yzcS17dHJfvtCH143bmduTMaYX63h6mPhspDMkeEhpa1SRgEX5jyVNY7rZN7cEd9xACDu",
  "key10": "2JtxwUKZDCVUEC4h5WJpz5PM6AxPEsxDCEo1Kq5recfCzYU4EgfbJt5mdE64x1TbzYFF9Ewua2CYYxNDxg3tjz9t",
  "key11": "5xXA3oM6dxmYRcshB8AHtD1o7KEWYF1xcUhHWNFSdy1mVyVfxULAQdbm4fHQR7yLLFBEy3ApakoFdYKbtZ1JLUTN",
  "key12": "4TPcmftGKPbmyfxT19d4waTV3nLA9NZi5RqjNKUhXZKovXNQ7wZHqPXQ9kSAuPeVZ43V48iPdJRBtPExFptLmno9",
  "key13": "26i3cNfopzrP2PLNVGCB6FCgKbc7ZHfnWhVKM7641MTKcPPGBgVZw3mmW2GTy7rk7qs11Dz7JCqUxQ2PvaPVUxU4",
  "key14": "2vBGVc5UBHLoZzybA6K5kbCP9Funh1uCCSZP2aXaN2h9LAGGQmqPaarvWARnYV4FMqcCcAE1uFAGBmkivdTc4c84",
  "key15": "571aaN3JQDqQyWMkoa2CaTFkoVnVxpoFQQuNUbBm2srGtkmKE4yNKuR5W3JHq6rE1dN5k3ggg1qh2jsBYYsEJDgQ",
  "key16": "nPUVP2SVxRp9hcj26m7iA6EMaJX1cwff7qBG1wK93PxLfY51Jb3tR5etgdV6jJm44WzDRuMt3pjEfYMSiBNFrTc",
  "key17": "66QUeMcPJaFCEPQLWXWrqyfXSuH8PLVyhExJZT5XzWsZeBghnTbqa1iA8LLLSgQAeGhBKFtRbmf5KeXyA7mD4GAS",
  "key18": "3wvAwFRzogJFBwkLNBUANAiQWEcmszphmeHwJGGsWD7azEJKBgiWnmfezeWWLeMrA7xxVviyjrs9VcF28BZuCmNs",
  "key19": "3Gx4Hn9U29VgaM2u4k3SXGxYbr4WPJ3W2rCvkmKvGmaV5VS3yhyyWzxu38goL8zgTYEVuSJTUQqQXBf9u6WxK6Lh",
  "key20": "4iFNFk8nsAY36o4qAGHgZ7EFEftEFfQpKqMWBsFK3SfP2ZYxXVVpx6nzpaokWWRCSmZh3oCuHSSVryLsZ4G2xuJ7",
  "key21": "22PMvgDML1s6LLYuUpc5vsz6msp1UVfvjx9tQdZDaYpbDomaFm9AHeEFGEtUs569sRJPHp4km6GvVyagnUWM15PY",
  "key22": "4oP7oqHw1grzxmhGHKMjrMF3chLGdkFB4Xzm7x6nMLJM5RCbYhEbEB1JJs2NeZ75D3qQkH8VnxmfwEQAZMxE2nn",
  "key23": "41SpRWZ3CKaco4bvhDfvH7YKZXkJNJoRcJ7J4dcMGQMMRoqHyNegydhQUQGnFCk6KK7uD9ySuZivmRR7gn4kavo3",
  "key24": "3SavPhR3c8FvcghSpmcBrQ9GqxuUZnt8TTQQSNZvX7X9PTWupT1qrsEWQMi6CChQm8htpGMyYhGB9LP1zPKwrAk",
  "key25": "3Bq7hGs3wKJwwEffksmvfsTYz6a1x5gejk4iFwCMaubipf6ppZHcNeb7tBNAWin1AnwucqiRrCQV9XixJo1bZJJB",
  "key26": "5u3yocPrVkaFcAS3AKMxNiWr2uYBpJpDgK6nVuL5M2s6h8Va5y6AmtgdTSihNLQH3SgeHdqY1UaAzGV5AdztftGg",
  "key27": "2aQVWELPD8cd9UH5jRqzFbbmRnuDyhaPYPhfrjbSe1neky3SEzPYerjKLNmiJinmV34hFwFM4KcvLjWj9ATemVxC",
  "key28": "dwLBpchdQejdFwUHg1DUCCmSb19FVTcGoyVfEwmYE5MccJ1yyqjaQSMBQqQmE1WrM1aarJZov3d1u9AJNLXvNwB",
  "key29": "2kppzgLhajGhuXDi8VsM9Ckm1xWBt36o3gCHQJKyWvZ5s2EDVBNJkrh5benWArS9ahXQ4XYqJr8J9qxXaHyFC4bA",
  "key30": "41h7rZU7BjgJNVnS3qRbvHGFWxpXvZUHUjnJvPSKaJw8iBm6PhErBqMDLcWzp4SdAeGf82fwf8erghBajeEjS5nj",
  "key31": "erC83Tdh3HQ3ong5odwsW8Hb2ywmMKt8UiNRtXWnwDRit1XPyJ3VGoydV11fL5MXvVPvZovap25NYr21XyGSV8E",
  "key32": "2aX13T3FtLawUM7HWhXqv7UYwCWwQSngxP4dCcsV6sskuZDKGkcxeqtApeX9JBGLLgSy6LRC8UmdP9johUPDX3vW",
  "key33": "5mzwY6ys49kqcrvbAxHw5m5uLa1SvSmbbq6DkXH1HtfwtTGhfxqnwNdtrNTu4DvnUdFPGoKAY6v7V5uPVVnu235q",
  "key34": "3TQP8uRS3MkpVnoLZ1C4LJQEqQjkCWuGdRP5FuYchEhNrV9nAU9F2KphLkmetQbe7MWJ6FGwuaBbP5nphk9xbjeW",
  "key35": "3VCthV82yUHmUNDrVKM8KqR6UVWNZhR3Afr6wJXGNiGgQCJCNkECjGY3xDWUzrSUXW6d8p2MPh73w6xeUp2eVrdj",
  "key36": "2ND7XDtYZ72FYwqPc7fKRUdHhCN8bRxU4YdGRgX1Cs4JQVXuQTVJ57EYv3dYhzCkkUDdeXL95oBSDMrNnjybivMW",
  "key37": "3VWsTdZuJAndTwWTWGxnPpJF4xfggj4X9ujcDuL5jQrTsc1L6NJv968BFU15EsRTe5u2MdpNsZNMw7oPmHTaAb8g"
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
