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
    "4n5iz2tUPyUETQDECMrJwkWfMWzgVPZYBwBnJ8fiGTGPriEHKnXRogzSHUcRsqdWGM37qhZDSxEVFgmBDB79J8Nh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5czTgxpC3fi57v6tapufArmazPPsW4Dj872hKN1RbACWs9Lf6AJThrsUFxXXf7SNRg5PqPfBhnev4LtruK91YxyY",
  "key1": "4gJyvHE8q5YPnruS5Z8rM1zJ7oGd3MequW4Ld2qHnoKoHCnj8CzJtjh7KsBBjHhH399HJAXFMc7DeFSjT3dichRQ",
  "key2": "3LeSnU4yDUFow6SQgw6b1vZn2mEXxocwc25etMQS1aRi81C8i1xBJTvStDU3rrrL8DdEpFCAkJZPBaVZZwL5BXM9",
  "key3": "3WFWWK9bkhsGrESeq3w1dGJhSJys4peNS8vbk1MjeTqAQmw3M5VwnaQww7hoZVRdMaKLpCGXpQfNHMsKx59pEFsA",
  "key4": "3EiDA1tpPAVYkJzAGzK3nzoerd6G1H67RUBpxZUaCtC9cdC3FC7gN4qDM5uZcTWx6MUHRk5TrVqzo2Vxd7CarVuV",
  "key5": "3EEwaJzguXWmcUuMB87SQEc5DcApU48xnu7qfxo1rRLkX7sPq5AMm7qfW2SwBJ7UykH2jeuh9d3Gph5CyDARH3qj",
  "key6": "5zZ1QpdffA7odP6uypvfT5L2REqAdgyYxyLsCPRSw2jwnKH6LT7fqYtxr9J8KEvaq84brBJoLCiFkabzmAW1Wcr8",
  "key7": "3dTU3S7xVzvgDPPvwCrXs3N4n3kNwCoKkPsk9c1c24z5AXqrMf5Mjufc6dXtheuZH7recEB42Jj7kAJU9JDJfRJL",
  "key8": "2jSaEJ9CbxjFXSGCjHPr5qtkWW8p1haHhhHpS6htAPJ4tuvxUPHiEFiiu4cBb4pcBnQwmJUi4CZWE4mmWUZpVmL2",
  "key9": "47nyU9QP8jVMLf5ayvPs7AvR6X4PbsRdVhpG63VS15R5ZaXt8a9a674YYwWUd6ferTEPic2myWPhgWwnBE3Zw81g",
  "key10": "3hxZnZAKYVVnWc2WHNWmkTdKQFwReJ2RKjeXTM3oc5vPg46T6R22i1TQYPv6JUb8vNNt4iU7c19z4GrwyBt5R8vH",
  "key11": "675wjvd7d8cyzSisFDRMw23KRpHcFaTkXDr9xKecpjUdP1ckuUe4jVSuWJebvP4QzhcgJkWPWGTch34La4WTF6Vv",
  "key12": "3HuAbhynTf7MmWbqsPTRHr5h1HXvsmmrvbxo1snvb7keihGF1o4qTKgbSBSLe18vRusdxKdc2S96XAqvxVcu1fSp",
  "key13": "3hn4pBYk53rd2LxF7x2bGUvEwhTyxagYit6yzXwrnFnv4v3mdZ8x7AxwvWEvKum9rGZFS3QfDKZpv7a35bZPrBPw",
  "key14": "2Nr455g5rCUhzUpVLPnFTFzsm7PrBDe8Pg8zrdcCUE9cuxvd3Nbao36JqYGeeg5E9ibKr3cFteU2rDBdFQQ8YSLK",
  "key15": "28q6xPUQVmtaUfjb3c87zPmbohN3qH2rtMMQbbUqmcsnuapBKYPnnVgWW51kDnqSo7CjqQ8itgnqRonmh2zeYQKY",
  "key16": "4Ar3QKFauFjHRQz9Tn4ppZbYFgrPr7d4k6mZLv4yyX8xagnF2mAWrDMHNoDgBKewfjWg1xCNaJqMQWbKiLNtpidP",
  "key17": "Qy7BzboD8A6ZPwWtyNKFySzUwxUGMvu2QCrHxytf8u5FvXm8kzRtY4M5abnMyZv8Bem9XETqdaHxv1MzGAmfAGT",
  "key18": "5CAV1A7hS6TiZiD9jGjJ2AC2Bp2XWnh29ezmV4zgYE8mGieBTW1T2hZUmo3B1k1r4U7aZ4PvKwqaSkmkF67pM5ka",
  "key19": "Nb5tDUvo2U6NgTi7pjhZctPjZDtWFJ7UTLdrwK7bsjsjJMabwd8mfHcdfywK4MjGJ1G9g3VonChHuPdbWpBrnxa",
  "key20": "4tcn2SeUqq4tt9Ffh9gMjVjbuJeXncyRpFdjAdb1f9u2xSwxhkSnCBL27J7QgiiVufWWPEJkmZ6kenpUS6uWT1Jf",
  "key21": "4mj9xHtLcQ5NvwtcSCLgTC6uDmQSSdHmYH8rh1yhCEtH2rr4gG6uspeZKMinExy55YxdcLMvae6V4sRzgGNQUztW",
  "key22": "4QAFdo7ewhGgNS6C6zGr3zcocFfHXj33MtoksVcyGkFZsJsduUgqiLGcCG8iYcHvWp5TEz7V2HaohLrMYLH8Kq1p",
  "key23": "4R49ZAzFdBuwmFYG7vbkM9fxQcCp6y6KVowAZ9cLWmfwavzwaWTM84yyb5RDvCHiGGaw9vN5pPHth8MWCcjPKtno",
  "key24": "24qgFP2MSscB4T9WxE6VrTXMF1Ud6aJ2oCGXcXgzfsMxLBUWD8VNMgkRJBEDTUT3uWuExgQkyW3ijhFMBcpmqoSZ",
  "key25": "TxTCsRTWVdTZd7XoVHFRfqB8pU8J4FD4PnYrdubQMBbhJaoFKkBFn1N7GpdoE9awRfT5AEVu4WLRYAY6iUZPCy2"
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
