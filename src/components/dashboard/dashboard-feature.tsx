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
    "58nQB5MGSyQNfkToJot4awV2TMSntLNchmjU3kZCUQxGLufC9h6aYJqqEgoHbSb8nBhwEjbU2oNCNW3ue2dxEe1Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "mgfRgFiGzotKMLNsEmiKdZM2mFm46LSELAhc2ULgCkeaYKCCRC4fdGceGX3sc4HYrQWFySg4WFo4JRCkqPkk2S3",
  "key1": "LYoU7S3HE3CNHbDHbbPRqk7w17drG9g6Y8Q4Mvg7tcSaLkkHcacJyLobnoL6PUPPrPrAxRDtFaKEenDZpY7Qm84",
  "key2": "5zJnBVwY6Kiy5uv6HjNaH34aYTXGfYe6XJyCkYQokMsry6Wheg2Wm1FbycKTdJEsrp17GxjqASuxggxRQZJdLdA9",
  "key3": "gGP9hYmVuBGSGGcrgcSm82okxMsuPPLcsEiSmQdWTzmynRhGAy6JrhRNiXdpsV66HNAv3mUTnPzWc1VxbLzEiHV",
  "key4": "oCgCJgkqGG1qAJ96rJodV6HcxFZt7aSioSqBeXG1vRe3KXAUjM2bRsJupvMGvrPWjd4RBgoLpk238Jc5RDc1ZV3",
  "key5": "55qhYMT72KiXpvHtwzgeDnknJyQrwnCmuwuhPLqG61gWjEtTEmNNYRqYstibdBCXUBKf593CkhUa2u2StprofDHW",
  "key6": "DxwbppUanCR7fgMqtWxLwz9MupBjaK6QYG7dUypcDjgGJAoDzbwi36FajSZVhTySNjUi89H8TUNSFfQA61rGtFR",
  "key7": "2DXG4ZjP35uPsJFN8vHcAEN5iJSURV5rD3fPhNrg3E6qLiZ44vGxGvivfwmCEfPSEf9Y93C4BhdF411D7TQYV9yF",
  "key8": "47t3VmHNRsdmzfmpzEvVtnyRT1CUyioD8hF54CSwiWbQWvKvLoqGefM8zz3PNVSbQRSgpkKEZXix7a7S9qd2LPM4",
  "key9": "FEkjt6gCMSerePSuhmeED9LQqgudpJgta3AWP3feD1bYVpjVvWL2zkXFPmXzDzoYmop6epTGZ56Q2KK9AbGp8SE",
  "key10": "2GLRuH7jcumqkuq5F7ih4NT7K4psocU7oK9Poe9AUSAqXSrsnCjnDzjEBdQ84EgyiCd14hntPJDCbzDDg7KLcT44",
  "key11": "4TgF7H5EchfM5JZ2vdfjuRxALWrTphezCM1763k3BpKQ4xw9KQC13UXKNmXgojASeQiV7DX1Nz8fHgFKhaQZEtVK",
  "key12": "5sY27dW6Fto7ugErGLq4sqcshpGBaKXnrAy4K1e3QvcbNLADTybUA4VV8bQQjR3u4fT9XYPjm3vtEXcuHQaur99c",
  "key13": "3S8GpcZbDJWzFmDTpF4HybSYKLU4hwNmQxGr5QYex74TmemJB1cSdgEUPdB54TXtZMEPFw4jxak3K16aiyHmjsF1",
  "key14": "41d6Cfe6inezXxsC1oEmeiA9rXGRyh65V9UEL6Gh2QYzdpRXgnH7nH1VohKw4YcVhKkCvXkrDsXjmVXGEJghzCY2",
  "key15": "2TvFQM2jyBado9b4kmdfNW9mYHQfHxFy2y74aUbJN23Hy9ACFmkxWU9SNNapsYpn3pxNxDv7onjHgg32piYshD68",
  "key16": "4i5e88WwWia2LiWepP43px3YMa45pXd9EQVMdoFoVQV18YU5mRZvDGGiS9Yvb5R35pP1giAg1DkvwafAdS6SjdLR",
  "key17": "2dAUHnnTeskCuyq43YseqzwjuJkQiDK6UBpAPo5bcknTNMedcx4btZsYLEqZuczJqZaTN6D6uhThZTZNe9LyYbrj",
  "key18": "BvkWt6WZqdwJhrbPZun4Tw7kMHWmeMt632oVdmnMoxvnadKfzb1Lf5cpPp9wqvtxvpnGwAULKvuMdatnKWxxkJ5",
  "key19": "26wMicgXkSYsVMj6nz5AkzKUwxdBZMqyu1ZdMU3NKn4w6SJ4YP6tMprrse4BCNiM7gjc1xdX8GMaFmcxuWiDGh4J",
  "key20": "3cKBs5u6HVqN2976wYkqQhVcjMDaiAU66Cqyo4Zt96d4amrDpPRc87nZcELkFi6fqAy6Hhy6HXfvEPdgxf34XwrQ",
  "key21": "4YsZiM4Gm82Ds94TF26i4RTyjfLXkz9eix2jmX6sAFaJefQp9UWeAo7u3FD7m86oFhnxwXBJNhTG1wTXTpmizMg4",
  "key22": "33jiy2j1KN87n4zWK9QtqmX1LHNE8U58PJt1BHpuEgvQ8z3m7aF8YNRcQAY6iqRrQLAZizCPbTr5B5FDXSwhH4cJ",
  "key23": "3fprPWRP4UcvhyL9AXi8DNxGAE4eYzwK1ShPV5J7WDGAiKH9e3G5FDESuisjcHcP4t9fNZeMUBAwh5ohoQJqJZuJ",
  "key24": "2T35sy8TgLN4tQFPQHLRbMMFaMAdCfBN4eRBnzUWS5V8DupoUwbThhJgKymc1MNWp4rjRjvg5YCfGCbwjN63QGHV",
  "key25": "5gQpA3y2g6p64sX4EHFhksTLngj9MAFuetz71UQWASuAyWnXzZzKWkgbJDV67f3nEucZGUTNMvCQGbMRYLU5Bach",
  "key26": "5Gv2QG4e8V4etgtSmqZUTEJqHgkhbvjqzma68bYBhYhz3AeVv4SrZztXtKU6iZCWkeM9wYrRpXrVovoAbHuPJPTC",
  "key27": "3j1Ym8eGbXTHGoRTVRz47pybNqRjM2RqxDUMyHRkZGkfGJ9vdSEqgoELbHKcNMvctMPr2CuxbgDQbXg9JHeFFh7u",
  "key28": "2XCZ1wGdqRnQ2Xt9UFevPPhbBa7PuqiCaoqHaTxB2LtsGtJaBx6EbEkTSKjPTqswvo2iADuDDVJfJ1ACEtD7M1G",
  "key29": "M73kY451v6FcB7pZHC9X2mPfkEuKCdAiqwMui4TpQjv59GhwRpjXUF9Ysns2nw8PHhF8x8hdAh4Pi8XqL5VAsJS",
  "key30": "2BfL3f4Y2CauS8RycWHY8QnLvhfzXYGWGYnpeEen8oqRetvzgQXqjAgMmFmg5njf71cNeAtRGbgnpV5Bj7YF6FAm",
  "key31": "Yra3DLSiJzwxH3ByWiVrFxr41uoL1fF4Q5WVzsGeAPVXVfToXDs193mcn72YM88tEU7QJUJ9ZwGbUdfs57CcsHC"
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
