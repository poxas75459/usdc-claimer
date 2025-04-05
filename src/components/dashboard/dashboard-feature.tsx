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
    "5dPtKDbzrJeWNZ2533b7zJ7vJaJ62z2bhiDZRbSYcBuyhH85qnNuTQNQfhK6Dba5g8dfzhBLfrkFPG1fB86aDAqe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YqZ7HgoxLwtSqYG44ome8LFxTXXRWvT4HjkLhNFAQUbqqtMNBAFGWhksvseEoez6X8adjqGRWUrrYh5i9XQMr4E",
  "key1": "38aydWFaEAsk5BBsjSVMj7axvmZW7PiJR72KotR5mnVwsCKEDFYLjRitJPb3pKV2YDF7pdWJtKjvDX62ckbyKQg9",
  "key2": "5JBidHYGE5158e2N8cTGDiSwdaK8TWQ7i7rcXcBqL2tpkZRLDf9n16q7cWZy886HrCEDXfTpyQdRPVh4Bvu2o3zP",
  "key3": "4VNF9QoxjcaKtqXLwtcrqQjq1tpoQpmwLXqcrK2yVweUxgBksShPNmr4B9KyDRrfRGTvrRbqBh8bUQUBfr7fFSnC",
  "key4": "288DzzaNWCr33rYWwzD9vGcnvRNGcWf9rctS6aKaPtWVp8GAinWCryCkp4GXZ5ReUxGhfujWgGid36T1mzvBQDDE",
  "key5": "4sdbThKHcgbvm2kUkVp1bwbpJZ9z9ScdqMrMjVqxAryeytLhasbu9snZJHMWETCHZ7ffHPmDyUANC5Uy5sdypzR3",
  "key6": "5kiGv4pAWqcVWE9dovtn1Sikhc2sAa1fxSrXLro3rYbGZxPBRpGuLu3SYG5M333Sm1GA37DXk4b1zikfYtdf8Jbd",
  "key7": "4QPdTcs5XB4fHGb4pG2Af1pGECgdNTTpdQRPXrUdGN5VRv17sk7RRqcy7sJKtA92t3SyFHGHAJrFoaeWk7XUVyMx",
  "key8": "2D1pJsPgo6V4rgixVbduGndv6xPWQuRB1LCMDjEdngU8mVXqisxR9cMQMKABD99GzEh5JAD3xCkcbR49EpQYW7Ys",
  "key9": "tFnHDaCMCqUU3on75bEEyN2JTcf8uWg28d2GiL8VSbENRxndZvqdkH25adLXREpSgCsRtpJjvnXqzshKMEgDGJp",
  "key10": "2xtBCK688yQ8hLvAXF7ww6W5svthULkwH2wouwfC3mXPgHnN4TN896Ax8oQ3MeoHXjfS8zi9DXfEazBmcwKSW7hU",
  "key11": "4ooBjvMYFozhyPkTDJigyXPWjyAjPSU9Y5UbzufuDz72xw3t2RZcdrKhyWDEyBFgGGmT2sKZnx3gM8GRuL1V5Zdp",
  "key12": "5Niq6V418TrdeFLkgVtVYMgeAURHwE9nbzUgiFJ1RWidPf9N2Ywh5vFWMeuXAMVvrEnzoD4itUXbMVPhUxHKvQ4b",
  "key13": "4Kec1QgkyntUfB5qo8yaZ5AFecmkBsVXDKnMDiegzkQzKiXoKjN66DeErGYUeB36gj2JEPrqDSL5sTPynyDHBLbL",
  "key14": "4M4h94FwRAJrdaP1Yb82oEufbvasaNVvewKX3eer37y67ut7q8Q3j2SuWuE8hQH2FobmvJHW5nkdHJCEbMcZGXFV",
  "key15": "5g8PXAZVxupQuvuerXuNJfduwruHgw73cAgqbpnMZzSyhRSkW5Gk5o5pabaaLdSy83ev6senaRB5yrW7ojWkHiAW",
  "key16": "5T4Hq43xa5JjfC9Fd7Mb7uXoMvBdvFYp567G9QHGsfsUXmYuy7kzvwo7Kf23TMa26Nnj2C4ne1s2cGWWDfUnmsdq",
  "key17": "56jmrEb1xVtsmf2Sty3eQGbnknKSbYvmMC1TDVzK1t6g9kk1pyfyyYgaBPTPgJXWJ4dsuxSYzPMsqYmextqSn8vi",
  "key18": "63MDVMo3UBhJ2zH1P7LmzvctieGaKDGGyNYmDFXjCsPzNTT8uRBvYLKE5MZp4bid4t47jpNEQ1UPht78XM6H6iUY",
  "key19": "26ibpT1r3Wm3QnaC5j9FEZZ4RdoAqQAAk9vvWZgUD7PqqCPVL6Eyo2qnvnnLDTg7cJYvAhTNaYgXyVyZ43dd9rv8",
  "key20": "5FQWV4456obw94WJ5h72CvdbbEZ6xNCys4oPWavcu8A5gJiDygLoMUHhKcs7N4hJbgg9diAujVpcrnY8BNjmYjzb",
  "key21": "KLPGeiiDaRNCDuBDdYsWwzMmJ2QFyLFuWAgN5HpbGm7BWKohJx1ZqCRZ4Hi4may5p4RnkFGBRmAuckCz1nwY4Vv",
  "key22": "2vLH5JSopebitwfCmVnYaBWj3MtWX7SN3cHt77Ue7N7zx6BokWYnAPhfD669Wv93GymkcNsGCXkXPXoJzyHmogBF",
  "key23": "3aN8beAzNAFU1xwFAznoG6HoP9Fex5fbppqE3Yxsfm1dtDjYbsW5MvCwyshdeR2uNRTT98qUtpEN6BsFRzeieZYL",
  "key24": "3TPkdAH8vESgZPpoRDaBjkEM1iQ3gcFA6gDzyq5itqf71DAW6WXqCFQ77qqZYQb4n7Ex6fnNTf9rQF3yiqZpHgii",
  "key25": "5a2KAvRWyBXEUZXfTdGeSAF2y66dwCg6bRmN8nDBw3HSzibc1yMpSya58ejLryvJyV31TRnxuaCYKCznmC3Tgknh",
  "key26": "3weZjEytqMBr8aM7QEUsXA6eFMgYaHouXa8JWyrkh8rxVwF8KT7mQUttc2ZbZy1Mcn5HFLTMisNvgvbFRm478js9",
  "key27": "32xq8FWg4ahDg2pYEa4TPKx9G71W2XXKSvdQTRf34UPFMDzXah9VhzYgjyRx1EyZNwbLMtm8TymaCU1E1omhdYRe",
  "key28": "4abkAmuz9FEXsxLnZJwkcierTA8ReZPoGhABDyM56biWQqxbQmz93Rci5o3zUTRaBhwKfnLmZRWG1Rpv5pCyiyCe",
  "key29": "5S1oNx7rf2EFYauxx798dMMz5buZymwREFxPWg8LXAwmLN3BRT9UsDPk97XHMfFmEBUTUYdeDLrZvLCY51hYz8x4",
  "key30": "4BGT6L1qRn5pKBzWu3pW5tnK48Zgg91EqGyJ7XdhbTkiFTUL7ciWReU8FnVpj6YKV3DRaZ8rnFKJRvzrXBu1S85M",
  "key31": "61Lwudwqxp2VUcGDYdenpUWzbdKkMrCtP42s3HVhBsxB6qLHRTM5CuT6WVtNiJzDwqBpyNTM8JiNBkEXjJnff2th",
  "key32": "PBpzeibvv8nUZN54eE9eTMj59xBfVCPme5YnoEx8NVuCvaUNWrG1MEzenPCZY9g6LoinXLBnX2siDeLfvse1gLD"
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
