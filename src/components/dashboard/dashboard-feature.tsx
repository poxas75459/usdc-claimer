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
    "4jMhuVZarVKRfinowLg4sEjUSiVLws5gQLxxFo7HixPU5S1KzUoPhVK6NvZoahPoSESQk6as5m2trto9pgocG2cr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2gCLk4v2U1x1w2WboywGa4WatGvK4npxArdD8XpdFhJkqtG7DpuoWC9jikEUXSAK876rrAf8NyQV5JAXHWm9uvcR",
  "key1": "24KaTvWfaxjHitXhqPiavWFgN9X4r9YK35fBeD9spBp9e8BMaWk9gpppctkcWJi5WhkTvFAuBJpmJgAhBh6CyavR",
  "key2": "2f6MUdpJpi8jSCoq7WwaMRThP6nRf9TWNvL6HXBZ7ndFF7v63cpVA61Hun4D5HzqQhy2xjqiXAupyASo1QTrTdfa",
  "key3": "3xNb3WJf1kMkEdXd1aAT8nUXgHdH22ZKpzCpY7fKm6VPfAKoq1ecUDHbh5wV2woGZNMq1Rq6jjg2gSbzg9h8LF8b",
  "key4": "2SsEMpE9eLB9gYdmmebcaD5dQPQWEzrQQpeZZWi1AFCPiNSjQU9BtNpsjNdBmb3Ei3gPPhxzpUU6WSeNV4V4HC6G",
  "key5": "3FsGwRqPr1EUtAekz3fzDo6VjiSJ2phePYBmRNrEWXm5sPWh7fL6GFzdF28b3Dt49tumDAvBpTMq5YsK26pG7Rz9",
  "key6": "5N2hJq4m1DQ3KRE3sLi39Y92qJWz3SYh3fZHY2CeanvrfMgUSHY3zQHJnQ4ZU8t56JdDjg8JN7PfitTWEc23EdzR",
  "key7": "3fMgL3VG2CqW1eFMVEMGgrrEPZZjDL27kCcxBXu6fnUNqFmUm9B9vBzw3ewSMF9xAxyXC4cw3HjWd7kbRwNi6JH5",
  "key8": "21i3bkeoRsAxDrD7yxuZMN9JL5Jox3C7SHXZvm7jxT3nfj26yx17NwskjWFQnV3yQgX15NQmG1CKJyiu4hpy3Xro",
  "key9": "QgvsBNK8vqn3scEUbDnNr9JriqyNbgFagArwNScdLytQTyzkgLPjDPz74DkDhsV2j7QWzuoW1YyXRaRCnLRNunv",
  "key10": "5TczcyPPCVyMri9mJrL3VNwUxfjNVC3aNSTVBWkJULJTte3Evebk3sN7FQgbEJQTQUk7FucmWnfyvyHfydpWie6T",
  "key11": "4RzYoq75rqdp2AKLL5o1u1UQKWuZcDcvgHyA6BjcxgkCBQsgxYacmSJRYQbgd3uFNfFgVTHTeTh1RR5XBx7gY3R5",
  "key12": "51NaT89PTkyTTXpfHTigEHodmyCHnqgWrxVPVVnoXwMzeA4TEuNMvjj2q3dvzuch7V6Ho9498kXECPuXxjGZAQWy",
  "key13": "2iMEJQqXaej4LwCcUFjKKyJVrbngntEU712Wivg2RhoJ9rt9dKUb33t7HT9WUTdZ1Mv11KJCnQXoV4hrcsRF7VrB",
  "key14": "5Ayiv1irSoF8iJkoj4JUiPA8HJpLhMvwxcRU1LWc4AQHZTCyMFFSsraW25pebw2PoXqAieU2cot3xWB6ZDWi6wuZ",
  "key15": "5tYHKxjii5z2ey7JKwsyjW6fB2Jbggz1kTFNX18DmrsRcBh4vjZZxroG7h5q9cM5wTP1fMqyr3CamoSifHMbVLsR",
  "key16": "5XpEsKuRm49LeEjXhZs7Tfqqvm1516URzUtbucnrrwGZycqcSScm4qxAVvyDZ1e6Nit2vb12Sj1ZwXgzipcNsDdm",
  "key17": "4LEGfyrbHs2nehFKFH4SZMKWjkfd1YicikrcPTq9KfBz7k62oQD3SmB1EwypTtucYnuN99s5tcNHN2SRm2J8etuU",
  "key18": "4n7512oRopRETNMph3UBuGbNZLhVQx5gmrLNgpXqwAzucx5BpUoe8rTY5Jwce4WXb6fcWjaQvpyog5aKQzdTGhie",
  "key19": "N8Skr961RJ75xqnriD7DNKdJYTEsy5naSmjZnjDqfmecpgCTZ3p5EgeqdiDBawSyjXvV7PZW88afB74H1JsH2Sk",
  "key20": "57zPutGt7XC6beQvXAk4uWRLjXGHUwbEWEFAYkgJF6NLRwqDyGWJGALp7Ra4cHRbYusU2bCUNu2LTBpKuxR7gCBS",
  "key21": "F1T3vem4insC8HmspTiKaGDNmb8aaYkwVotFBiJ21ubHTujzTBddSVnDHhK6G6Y2PFDd9MQhqfHXSuDdhW9cFoN",
  "key22": "5cekAQLyb8Ce4HWSMGnoBaramvS5Hks3ya9LQeq1YpfxXibD26nDSc8jMe825PfBXP7QRaSXWXCMCQ1wf7abbqBJ",
  "key23": "iQMzzLq57TpjJvvq9LRCnXB6y1amEotk8DS1uGXGwmZEpKuC7zEKreMoJP2dLABjezFUqzr2FuEncon8cciqTqc",
  "key24": "YegieucQBKSCzLVuiofpeHt3A1eeT9ei8NbxLPGrqSpxjDjekyUVYrBLPAnyqqFmSXCTkHJoFdZVWS7hdB6TY8a",
  "key25": "X2Jxm7TqppzEBEEygc9Q1JcMyVcuR1FXZP6PiaaRZRK7Ku6Mwe2Nj65Md4vLQX9W2rpfpeC3rmoXZqpeAhNJnuZ",
  "key26": "4mgKzRmiQVjeBzrsPL7aj5FR8HY44pfyQQPLyPVaAkrpyWJUhLAevPXzwxVLyETZmmftKAJ8n7eP3NuqpiEk3sh7",
  "key27": "35F8vCQQ16pc43FXGTkqcgAPG1KxniBPWMHwqowX3m7Ygn6Ms4XMmkQgxaByNpzUdFmSpSuau9rGX96fi8kSdkqg",
  "key28": "2MHDVjLv9gbY8WyuLK44ySvwtiaduEsSsrg29sLu1n3pvKDZ1jzXr9SEWayqoan6HJ62JMHWhHCdPd8jvJSvVpz3",
  "key29": "54sohZJzuTCdHSscxoha1AYkZgoQfVjzrUN52YUVbpp4EubYGeoZzHqmB5UVxFWkJnDRaZ7Q2DoUSEzMzN7gHo3c",
  "key30": "67qKLdkrzM5XzRNHpQL8PzoZpYmTqVuwVvGUrLD6AaQGotBBiSdCfJcCHgFQdccRnPuPSvvzvdy4y35WxZNF9ucx"
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
