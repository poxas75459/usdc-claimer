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
    "62ZLG37AqCr3LNFEdJp5GST8fQeZssxB8vpXCTZVz4E5yvVVZKbtQypsLa336XB7jsZm1AQ8FurFN5B8BNWdFXcr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "buQLiZZVm12yyksRrUkiN1Jffxbn7pEMfxY58zuGHt9v1h3PJZ7gYCPPkK37Q8epAVNJBnBSUtu2MqfEph7gRXf",
  "key1": "2hceUSNJdrRgQPyXGMvwkkNn1gtkMknePrmRJKZrYnirkbQqUcBwpEhLKmJWFW9JpFobjpmiXQgwJ5Y6wbSZWXg4",
  "key2": "59zAD6Sh9Uf89gecnQuuD1f6Ht43Ar1CXTGHV4vsU98PNAm33TMWPb5H8WjzpcWeTGHLoVCfDYKW4d98kyRuXeuF",
  "key3": "4RZXjtfenekbEVES9YWWSbtHdcRtgAt2VK46BVnuG8PwFUXTUgSdaQNkyyy1bwjrvMg6vRoN3my4WGkcgBDq7F8U",
  "key4": "3ucBUM3RfgFvsotXkc5SrU3rstErKuT6MZegKTuK4qoKUNktDYbMaJGwEqhAj11GfoKuVnWWtjGSDaCfaoTR8MJ5",
  "key5": "VfR2unyT9an4qfSWc54D5JNa1W9XwNoMmmDR897ZBApDoaGgrsYVyk8rQD54cU3RGGpnVToMkcBJw88ALLMjLoj",
  "key6": "hD4XRLrh5n5gLXMJXpJTJVbHstSSgw7bSiXty5cpu32uZbveyrjfN2hJnY1sfXhWc2GjH67SVshfRRoX6syLQcT",
  "key7": "3SjC9x1Y5vZH7xYLQHivZ7nVmmucvt54qT5goBzPr2i4ZcRr3LcbUzDRjxWAF6LBuUZAqLEBxiUeXd9ug4mKBHgJ",
  "key8": "23zLMLoBsuBNMPkQhzm26GKYix8iKLwgky7JfYMFm7SFhutztJvp7sXtdT4pGrwUW1DXNhhTHWQf88mgy32H6Z7T",
  "key9": "KF437ELwc54woYBFz9Pz3gqgNuUD3JVtnCHMTYktcAKaBZb65TDeoKASRvKfTC2uwrWqzXHwnNMqkR6ivYZzAE7",
  "key10": "2B8UU4vidReRHGZmb2pb3iecc7jyXZUaQ1ubmfQQgei1qASLwh5w6E6Ecin5xurNdADXu4YMxxtNDyhw5vvEKMUS",
  "key11": "28v5RH46wnFv36DAAKqx2pjTAMeigHW2vomHYrf81bC8qDwwVGqK4XX5aRGHx7MT5ZsLUhGzbeLUZMaP4MmwEjsq",
  "key12": "3ao13cPfAxgYt1oLv5fFRRW9veFLwuPpUcDg7RK737KnDhPBFFx4Svc1pPi2yC3qpSNray2M9AgtVV5t379dkJe1",
  "key13": "35ow1tAtTVnjug9DpbfNRmXfms527u2sCfMCKSmu5GSdyQ2qZ1dbQU7f92dqM1tjrfzjSCBovGjJPKPxznST1YrF",
  "key14": "3KhtKw38QGB7e7foAFTK5HuJpCC67pz79zDvS6v7qixKun1fkjswrLAXsMcWtpx7ujMpPfnHDigLA31VQJ8DQg4b",
  "key15": "66WwSW2n6Y2rrpCQD4A8XPvCGVWZQPMT6pvhbQqNA9P9sMGeREVsAtVzipZP7SsEah7rrKHBWkvPHGV4LiTdd2pc",
  "key16": "5B9MwGMRf8AwxNiJTzJ79u7o38TN3WAt3i1XqjH7MLG2dKmSnNcQT6Ndryohjku9tAoSiiL8bfRUHA4v7MLjrr1o",
  "key17": "4NWoXMXpcuZnRCVywuscLvL5bwgnZDiexPEykFXDpZsZNR9BZtAw248weCLnL3XEbmUZTdinCK8gYamdKbmGiD7u",
  "key18": "43Lvdk68TLdQYvTLVptjQrDBGM5CnKrSzHgx6hAQJN2gjZ9xnMroKjSTbGzaAaCGsXmg1295ZGmDARiT6zskprLn",
  "key19": "38dE35wnPd6Q8LtxBkXX75EhHAotiKSpCvPpK4thML69sncRMZZ4pTphyTQfzKdMKhf8uwBH3X9ZNfzY9EniRgJx",
  "key20": "3UsRznVDs2J5uAreKUULx1MhEKoC5fbT2VA1sAUUrCtNPp4Uxq5BhGQW7dmfhmXss4sg6Y2qUEQ9Adn8T9uJY9L3",
  "key21": "2bwnrEKRZtpacB5KJQCRhQ91BHFyPhz6y4AVMeNPnzg2jsne1aYkfLVPdBx7hCykL1Vw2KJvL9PDAgGbwopLaMiE",
  "key22": "iqsUYVFwKEt5JykgvQ97foM4ZZGyWcmMvuMXSfcGp2W2JtmTnJkqLTWDoJBJQFnn3PUnnyzcXgwxFtoE4UUBLNC",
  "key23": "5PnV2SuVVhf4SZsaWt2mBGzVQc5bbraR9irvn995oY5UaeTTmZhfVX8UGT2Y13ZFLnE2MHSCz98nwtVyBKGbg4wo",
  "key24": "4MA9mcWMhuN2WGNcWYizpbSp64YKA8MZj3hBbBqZVNN9zV67bsKa1odqYmKARXM5JF2WZbCcE9ds5U5nmAryPADH",
  "key25": "3Zk31ExL1u7FJmeQZioMoueT8VJcQsD4zCgA6kbhGjjs86nwJMx54n8Xe9D6nraxJfGF8VtJbLDH8GZJQadW2yey",
  "key26": "u468xZ36Etoy8Qs4eEDism7Gm6JJcQZJSWQfpvsMmhTzYJVg5x1vGL62AruJQCEQvPFbEbpyWDfE8y5FrptAF7i",
  "key27": "43FgBWu9vsDddTjMnN6zHBTJv21TARx96GkDESsmrx6e5fhHLNQzT51j4RDzggmrdwCqK7mLEaEPscvmur3KwGcz",
  "key28": "xiC44bK6i9bYAzjbkNvKeTcpELCae142uxLa6VMRGRARdR5C9fbTWHV8QR8J9NoNgTq5XMV7928VrTUg2WzRq27",
  "key29": "3ZjuWyZcNsyfY6QFR7QkwmdJfUZteuydHRgZjCoELKL468ZQAbsQsqn7SHFet8fmqTEWBU1aJ4XfDmmmpYNzbvP9",
  "key30": "2qAgqDqsh9YYBiwdz9tHQeauSTZ4sy6NRhXQZUN6y61gXWohbqspiU9fFEur4qbGSooqjUYPns7NdvJqow1Qi7hT",
  "key31": "CKw89vmyoDV1mo4cQQtRFHi1Wwa33eSRnYfp8GoTn1coG7KLs7nMEqUKNVWBGois8dwPp7Kn9tzZg9KptSYUhWd",
  "key32": "4MJEw5UBWtna6rJrmYRoPMzw8VphS21hfcj3D1nHLGAKw32X5W4WEp8QwG7uCQf1VfQWZJPntkv2hRsm7PfhUYCq",
  "key33": "3jwVKoBXqxXGHKsn7DmetcB2kRgENhy158h6QL7eG5cxJ1p2hwQgNfjSY8Kypm9SgkE6age6qhpQ2PaHmwHcPqnH",
  "key34": "2pSNdLhWUaV4CytgefsR6BqACVoSNCXrAa9majGfJYrt7sfXfC6YyvZF1rjrnZmsybB6HUeWSTaXF6wXh12yJ5fP"
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
