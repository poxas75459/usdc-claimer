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
    "3QuWgFG8AQME1rumMqp6bTqPmUHP4AoKrryM39RXvgW7dupwwE6mpi7xVK6RBgnvAaUBQYfjP8SLjdtoZYBDWemN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2LyH3gPUvrRPUCzFaVFtFZH4YsyBpf6FhBNhQJpo5nA3tvMPu3Fdp9e97iAo1Zq8vJkBZUCVVNMb7RhWSPbpCo95",
  "key1": "WygagKQcy8YZi9HrrvhUGyL2r261ffyhR3r4ubYiFJR4XgF5m98AH5MyRF3ig3dfBkyfFpKGG1r29vSSLVn2oJc",
  "key2": "52SeXqomkFWhnztbTMsYgzMzfpFcXUV4hecoVBsWWQfcZVuSGFCMqBHC9fgpJ4HDsZ8zsDdzcnKMn1Nufb5UY5cg",
  "key3": "2ECprpz6RetERj7CvCEBSQ69VpW1JPRThmyp1cNZUi9T7UnQ5Ez6Pw8qui9eh6PNnLrMDxbwunRZv72GwDU16TKw",
  "key4": "2xU8n5RsNYaqJSKDvnTRGnptDDfvrtMPs6CMEarBsc4fohW3LWx2rfsHMrXS6ofJfjBDCroBVqg64GimAtXDnUUi",
  "key5": "cDBmSaD1GD9WUDmw8F2h9C8rbphubF16StWyfKnEbaT37x6QBzA2KsJeo3RoJNZ46meYC895XPDcb7Yd3M64TYU",
  "key6": "2YRs83BFHKemp4yojVeZCsdhccZaSYmAijhMnKt6aFjMAn1KjzQvaSi9yzfcgB7jxu2CHxU1QEhm8LoXm4L6RTvA",
  "key7": "2saa9BLfSTwd1J4ozDsDrtAAr8x94PZ977LiRzRxtemPJtQYiHhd5St8zNatsnuWHgPtx8WbDMoKKubmDUoTeF1e",
  "key8": "39d4w35rRAHrME9wVUB9HPvmRPvDXC9AzqATAKwsTzEgWVNkm5v2mQS3T942MSPLoSMmaaPB5SCt3JADaww68Mc8",
  "key9": "2xBxAtb5cjQxkMn2Li9NkioQYMZirDd3SZfHrTyzAgvWJk6Fk6nxSHcgMuFZu841XUXopU2hnLTyMk5eTBCMZxbe",
  "key10": "2t9pLC73fTcF6TeGvytGWb4u8JQc1Yf6K8uXtDKJ2dhbasdMRNDG9E8VxQoLXXMuctgnDQftXYDK5Q35ceegQFxq",
  "key11": "3qMLq6wMHsfsrbn2hmeUsNsFHPWaGjU49epmjzPzHBCx5dYq6fUVK3QWLQBk9Mr3X9cJAAcCdRi2p6GZnAxfM5Qc",
  "key12": "4Jyxa2occJx7ptAHXHJXjf1M8D3U2H3JEWtK8gCFN1GBB52KpGqe8TeuZ5D1nA4RdojAaPCiUwq1yoaR6Fqe891M",
  "key13": "3jzUW7LAAdaVdjvzXX8eCEGwenZJg2oftVTJAgEMK4ta5pESfeC9HGGZMLp5pAawJNAG39UoUta6eU24vC7GCCAj",
  "key14": "5xX8fGZcGS6vRVJ43ThFKMK13bA43hDGXR53HyjaDNHrNRoLkpQXRktAyuot5HtFK8QQCc64drTXryWVjqiddsyt",
  "key15": "pGmjwBC4UJGqKDshuGSk96s6feqN2zCjmw4s37BSo6SE8sTAk8U47USXe5H17hRRzBqsps9KyA6GWGA7m7Q5QYE",
  "key16": "4hEgsagLsuQ3QB3ziqYKTr4kqT5KVtiJFo89QpPUesh96JHjtmZJNdR7tt9K8CUniVETCaVZ7o9cMqhKhZK3Dmo8",
  "key17": "21sbhSTmBS36LYJPuJYSKyMjN1Qi1orD1Wkq6Pgi7bgtYJKM5KYp6CX95TZMxGf8MzGCPMj9NK348dmFdC9wrULy",
  "key18": "5mVutCT5drGTBwim9XnALZESLeSJCQopeh7FdC7FAdukVMgNqHWE2v7UsnGVdLDi99UQfibck5wpUnPQDgeYZPSM",
  "key19": "4E5jxXDYFYdn3Jr471kd5S3gaKexd6i6DLeZWZXzmNn31snaLYYTG5j1VBpTftrk3YMtMPYsfoJQehUuz12QSf6J",
  "key20": "2DivhbVSPLhPQkCVDdRMdgq9vLeqVnybZoTPorHyukJGESxNotmM398vGRqBtAeAkuR4hDnsXbK2PKws6NtgnYP7",
  "key21": "5mGsUnez8Q169S2MqULKv7f18HCrWv9JQrTPoKupx3g2QMPZKbzfh6sABUaZeM3dBus3ZzPKJVVCtXWifUUkMPwG",
  "key22": "4QcidweUiAuD6z36zKS5ErPV4baFMqTnrDCcLg7SaL6cgbRZVycUysmbnzWUTfd9o5KFC1pC1Nb5u5VyLdBpeu1W",
  "key23": "xuCLy4TBcNiFeyYqWre9TkWnh8FtRKesnrdFSPLnd4TMfoeWzVbKVeUTffNRQzkniq58mCHhyrWsiFu2Rn5Nvye",
  "key24": "34zzFCwpfJE8PYyAeKYLFTJhkuwfmeygNXD4Jshs2TTxaZdmSUNfsq1augK5AbAUFVttHwjLxrCskR788E6116zK",
  "key25": "3uNErzuUX93kfDaR2KbWfbeHbRE4YZ2JiUKTd1tsUVptGPPAfJRjWf3p8rPcehS1Nk4w4Dy3vWiiN1C9ZQPZ6N9t",
  "key26": "33vqGWDhrXWjVtVUEFqYe9BbGBG8igAxwuyT7J5H5FCNCUTFAzgAKuj99pSThLRYaTmnmQatd788BG1VEnVLbN5n",
  "key27": "WNT6nVQXthzjtVB5LAHFdti3F7gMkEvfsFHmkA2Ak2WY4MPE4kMVbdKDPczb92WSVb8Z2sFYSWKjH2jA95SMAxG",
  "key28": "53kzabEftvPLZXzENni5tUXWtNQPG83eEX8cEdwYB7ttfPYL7Wh4oqueMntAgm1vMY3SauPCUfpkNk5dE2umyZxC",
  "key29": "22v1MXa8xdC3ftoMCFeCjHHJQ53y8yyHhCvZPfp3FQq9TDb26zW2VzHK1RAgLSi9Y7LuANs4dWUYcUCm3Yjy98jq",
  "key30": "AgHY7Af5CVShLqfwK6Rt6nW3FwXNYqzPHfYD1gj4HCGDsY3qNQKyaqzXeVtPZw3bbak4VPjBgnKqUoHezLkc1Df",
  "key31": "5XzrDC6E3CtxQwX3zSDosNN3zZdcmdwtwEbzZLnikmQXt3eU2pRiSALw6QBNfQJ23ERc35yEx6MwqSicunyPKxFa",
  "key32": "3aaKmreBfYDMHsqv1kxMmkDebiLCqnNCSYVcjH8Kov2jEkApr8nJfDTyrjfESq3YXCF4byr72GqE6jBD93BqdFCY"
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
