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
    "5w67ZZ3ZQMDL3b2PKPFbWa5TX5GGJEtimNzYRzNf4CieJwLYZDjbHKGGK7SJDFETrnX2hNscKaW98MsoUANuoJzy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Bgx62zo6tdJnJKEkBPQdfmXoVGUnVA21cWudotJ3TMYA4LtZYETPYj6wAciyvz4NfcoJ1uj2wLNFHLn4WJj3EAW",
  "key1": "284VpVnq5tNiSxea19SLNJC97gw6aTKMNevWHDZfhVD6V17es69Vy47QYv7sm1cLL7bSPurpZe8f8ERkj6Jtvy1b",
  "key2": "3Rr2N2ZRJ9s1EwqFmhFSiuPL1nLyHK1brQgfvQQihUEviCttAQJ7WyitYCkEvimfA8nJQ7aga3fsDv6156J9xvcN",
  "key3": "4f8CZHoSAaszooRe2vLUxTRsC8JxsjzuKiTTFjShjnyi5YfGKer5Y95uxA8SrjDYo5j2WMXXZAA9FfNTiwC5FtAB",
  "key4": "4sjK9QB12GRunP1pNCY9vRL67buKhe6kyWG3gNt2UCVcjsK9kbfpcJiuqbyynN8mzUhLgTpRLWuZ5rLZ9ekccJwJ",
  "key5": "2fuvn7eWNmQbd3TSVk72ynQ2cMr3PuXXCFTLUro5yvCmZ8xRdwySZ9SnMrscY7vNaXNZMMPJE28JK1csbrj7CQXp",
  "key6": "2MusvYY8yoXv7gFma8aKcLB4fsiGzqaNWvruJmG4ALbxogC93WmZYoLgsJxUNiS5tPeJT4iaHd7sYd7cmUxgsQAu",
  "key7": "2J2HHEJnvUHwtyt6o4FditH63jhMTi711VvSzyh3fCKpdxFSG1HZdHuKDXXbejRBkZheJBpj9DkPYd7SioTJDsAS",
  "key8": "4W1xHjq1obMgacRXGyRvi8xdsRhBsGBJP4hVvXkmp43V2qEuMJeKD5xSMQFtnk9WDZbS2d3Mz1n6sKAp5cVVMFmW",
  "key9": "2Q2jMFUJWWAW3QtaVAqPJsThd5XhjreDwrXJwc89cvioeXKczzcNtmJqvTUTzYZbQENFCXPK59k2Sf2caJHqdZRF",
  "key10": "4JigoUJ3DyFukwEarTwXtBFrmWgyHdmRL1Ay37MEJ4AgndVXomWQHpepzp3vF9NVGnqkQWLZp9Rr93oRHHvttjaj",
  "key11": "4oKgCLPjctqQesBQ3v3ZBB82RiHRhoHgxdxwRMxpxrPxN128xVpdA6v9VpRDrNeLZa1BcbAoPQr4L7cSVH6YhDWq",
  "key12": "kLKsDF9QFWTmCvxsTVk55N8eKoyASF7S9iFjxRBkbtVv19CKswib9tCvkmS5GSvFQHRvwEA5ZCMQHBEXKS4abqq",
  "key13": "2UHmDmeetK2tXwJjT86RzH69CXaq2v8ZJS5AHYbAer5QpPitRVFKeTusnaPYuneU6ZaB6zjWE36qbBAxFZPHSCPg",
  "key14": "3RRXZKs1zHvDvuAbLkHmTBxA8yeTGHhgE6wMf2cTsRt6rQ9Aak2n8UT7kEsMiT2vw4gCiLLpZFEAxpGStCsYU952",
  "key15": "54S3udR62mHUHgZoGj1P65Xd2ruSyvCtZfvGcUB2y86CE3v2Lu2z9gR4M7Ncuh3eQkTcPrxMxJmMfE4bBjD7bknU",
  "key16": "BxVR7Di6fKc9K8NFPsbBEM2jYF2Cf26vh9gQNL3JQWUrNuetn2zRRHDxyF2vCv9AkuBgmza8oqWdABjMvgkKaf3",
  "key17": "4kfzr6RWg6wcokswWPoof3dsHqP5eMrqWp58qs4vKwdwgYoQn89oWLfK3TrVeYeZ223pfrn2H2yLgRSesFGewh9M",
  "key18": "3f1hKrjXnUG9LrL6dtuVhLcqMsoK8USgMSnq41N4LfPtmHpeeTgrHZ6CFv96Kq7G1Gcfig93PjSi4shmNKGEyA4E",
  "key19": "4TKRqkzVWVCg8kYU8smU5qcofJumbWi4NtL8MHceyJsmdGL1d8B2TZYu5gnJuN7r4LegikyoAjpkiV16PHQVXfsq",
  "key20": "4ox3WqN6CZGD7NRxYY6adm9mvU9ugq3JG7FjykkpyHRxXBZutUWQb11YGQPunyL57TAEPb7uwLvrVGquT26BFK1H",
  "key21": "5LQnp7nfT7padxqekJ6BHAMmQ1P6MJ1iCMenkyCtnFaavjdqZkyqWWgT6FS1tRcCHTXyqiiyC5ZQyqTxoeTEf76K",
  "key22": "4YFfBHrmTcwUs6GA2vpYttjwFSLTf1KFnsZehAUv5ihuEVexCcqupBY1ZZvGMLbhUwdD1qpYTP5stkyV6U3bhVHK",
  "key23": "4YEqL8Lta2VoU1uA2NdkvYEH7vnjG38nzc7iYWGhYLmb7hGZ5VnEdVgbAYEUqXRPmNPuSdhVcjsfM5aYPZ13BjHT",
  "key24": "4KHtfWyRtS3SGpqnXdcpKdEvQ8Boa1N3BUBK22uGTt2fJmvt7qJGFDffsiBXBUpznxnVViqvzZoyEiHgRQYGohxx",
  "key25": "3RXeytMuJkgjdg9D8RDYcJ9fDL7UJ2GgkrS7DucQ1u8EwMPesmkSBu8QWBdPvsn3QMPYvwe2h5RgYwo83bMuiYDF",
  "key26": "PwonASxoonMLgzHGwwJkZyAC6VmwVw8d3Vch7E1EvC6bxwcmpJC3ZUhUYmajxqao7oDNeHDuxocwyuEroJ1CDWJ"
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
