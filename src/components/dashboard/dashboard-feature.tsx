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
    "2pLBoF7zxhVLyRsPFmmQ3zC6A84Do2Y2inPvPrjR9YBALxDv9TMkVCXryRiwyEzfy3SkcM6kWWWdMfzoCqQ5BU1U"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jh15CfFmUJz6RBhTM6wfRUeHNVMVAYzUGqXT17GXCJaP8FMrcNqFcrpArHFqwQsrNDDgTbAHFwsHRBpjsr5xVmw",
  "key1": "2agR4J9J4ZCnPsAKoJtxcda9zx9xZcr4p95Z5dxoEh7U8Y7pbtZXp8KCVq2MKDidA1Bq52Wwec68Tr6upgCnX5Tz",
  "key2": "4K6L2CRvApbGp5URrMmAAuh7eUBwd9y5nd4oQ4joDaYKC2CzZaJJm2egwAFxpQBg8Av3wntfbUfeydYor62HMwBA",
  "key3": "3amnQ8JsptEah39P17M4eNpxdbchChw4UAARXKNZjv1KjkXb1B4MtUdeypF1XQ75QzvZmra6XZwkubE22Zj1LrFT",
  "key4": "5s19Cwva68A2zgwkRj2ffQHM17yenTyaenqFybRD3gwYdtfoC13hm1VUJU1BhWnQqLSwwxMSRAfPz1bsiowzxTqK",
  "key5": "2t77VsweUNP6zfFY88wtLe1vRYLtwtaxq9gouYqK4kvDng5sVknY5RxPddQwTmZiJaQQhuqdc7oWxWoa3n7u7Jxj",
  "key6": "62tJeD8EMNHu8SeUPDq5DECEc7SC8uAXr33RE9acKkGjpCoRshkwMyuKPp6xvJ2jEpvfpMq4PeF1bnR1pVQuQGSz",
  "key7": "4GtA2qovaEwwxmQfXkXKyXY3eJqAStgzTkHFuoexRaNoFm6PkPzNPg1dwmRLrJHhGEu6N2x4fGwGP3SGAknscFPj",
  "key8": "2gt3KibaJsKzfiVPtXoiQgawye27LrmBhy76X9mWyAvPtTuduC24pXhjCFpTwFkeeguRJCKoYMbeJyE3oR1SLZKP",
  "key9": "2Mms158hfVNGGAuPWZqfYgvy2mQFgccAiWVQ7r3pRcvKaQcwwr7VuLxjSTVs38MAGT5QwoEexQSSWqDFSGVxUjsC",
  "key10": "hjEbM3d2wx91pXnSfAE4rL4MnEzMBSQg59BaQEPhaYHcF8wySwnYit616yVaSTRF4TqWrfdRjAA2S8MEev4w1VK",
  "key11": "3uPwjr7TL5m81trc2dmYHxXGfFriKbcXCLdSFX2hTKKN5opJuaHHN4CudXvBeUUZmkvLgRQJw4YTFDYt7EeYT3dK",
  "key12": "2D8GSCuzpYWAbDX89keEiMGwkvegGuEvVaubRgxJm8AM58c72kJBQXzkmxspRmdD3EVgm77yjfNsnsyW18uNLp4k",
  "key13": "54EZhhRHfupTwN2qSTuHRKqfwEJvFmqmt1SpWPH1NhRRoR6Ut52Re23RK8y3zHGftpgELkrutURJvs3HbtaUp83p",
  "key14": "3i1XcSPassrvEe89AM4cbrDJRikvfqu2oqYz25PRrbYGdHg7uuQG8NyRiEoAWNH1kUQrVCEVpGkCTw7p5n79KpAd",
  "key15": "32BbAoPwfBZpAQTQwbr1oxyanBwiRPhjCr4s8UtNWvUBaL3c1UT22mn5J1RoEAKDJBA7dt5GdesHYK4LDWe2afqq",
  "key16": "J9FUFnox3QmoYvjoAokNR5Cef6Fcx6AysNCmjCyLH8dQyvHWUDMJMcR75Rkzbfk8Y5BkdosEpzbdh4TnYcemYnz",
  "key17": "3g4LfN5EKKZ85gPfeUwyg9CCDe3tuLhjN9wiWw3QGXqB74enJsgcVBKt2xBSKwXSS83CJHvW98cqm7vJyGqZSAS2",
  "key18": "2LioHvGDTrBJwfcfFcn4aiNRXtF9Tr3RaxAMwT2AEmL4ntLPeq7tHrBTX3VKFkYWB5sDayYHqd3zBxTVbp8gxdxv",
  "key19": "217hh6sbdgH1EEt9iNN1EK3ETnYgiDiP9CrdopjD2osG9SNRhEzd6n1zDyJH1ZNMLhegZ13SkE4vLmZxhJx52cmw",
  "key20": "5An73bzZLRtcy4FbjPYxuRncZucUeqKTCn46WFRfhX95dHwQQx3mfLWsUVZDCTH9cUd89BXnhqYteLc3yMHSPxgV",
  "key21": "4pcuzYoJUELBxUppbLDSRoLKGpT9bN2f8f8yCGnqa1nvpv3GNknGduCHNs2XyjX6x1GaahycUvZciyT2JQ44eubV",
  "key22": "RYqUcKW24jcaq7PUg5r6RYzpZyLJxkwo4ZToEhTo5uYvxsosQVGtCRpBx6x4fzx6L7hgXAvUqxgA1Q44bZtr62q",
  "key23": "QHzo3xz5hrBhSjg75PEmBsL8BYc7yGCRf816pqqcAuu16HRzHyzJrDBbtffKZw1Jdu4RGe7ZbqUhquQZniDSCPE",
  "key24": "23ARUQb2DN4VKeTUDNozGN8GyRFyp15HpTeyhbEi2PZ7DsXtsLT4vw2nxtA5u3LY8VN2ve4cE5r3HkBipF2ZBtce",
  "key25": "55nkhSyJL5s1V2QQmG6C7PNx3qvD9FZVFS1zjHwyeuBQh4kgMAke2SU7x7vSgEGLFzgRA4Luk4e2UWCvmP1xWmjh",
  "key26": "2evSuQw4npMMoEsTrx6UBmqmtSE7JG7VbruciNaQx99CVsv8H6G27gXg2xaye7xwq5Wb59w9y3xnWyLHt6ffGoKb",
  "key27": "kmD2HdiYqd1A4vRjGAchdLCnJYMfHSTLjX9eJv4Ajb1ZagBD3XsUCWcNiTBYvnE2t5fBmeBvQswmccaAZW2dKLa",
  "key28": "3rfAH5uciDK9Rq8SJKKjfxQbX8yXFAxow4pFEHJevaCkZP7wKtb7tAzcFhSHzFYbvSxiF5xg1CPuuyQtfALyHWMK",
  "key29": "3PRZxkQixb14eCQCPWt8mqiWn5paME6s5RUFX7TMwVjcva5zfVeGJppu6ScWuC7jd68tFKTPFfCWbd1bLtj1hkFB",
  "key30": "4MCRpGeScgCbwwoDun1nz4Xfu1CYyR5KZvnabDaK2qbPfWWZpoP4hZUbaEpsbCfVWKbFE9UBxyBbbKn5KvznfXSf",
  "key31": "NMTbfcBbwzjgoE8ByLPEKqB7evvwsp26U3ZqdCtizRH6PG3djZeeSthguwb4QejwKfEffx9NCGGySVEpMMx6JYH",
  "key32": "2pCa6gijwUpc8MioUB5V3MvW4pGySdiZFuX53e9mEGXywYrv8GdcogyDt4iQ8YyQKNiS3bPhdqHZPKYvxjm5Bq3q",
  "key33": "2zPUy89K48yiS9MsquYB8TqQwQMFpdLqV2QcCWKNJ5THhfNZW8uWFHsWFcrScVzw3qc98QC5h1cVfn8CjJW6VPRS",
  "key34": "2FH9Rvyb1FyMH8fAUAsN3yNT4XmmynHvCXsbMPDCpb5hALBmaDAtd5Zye9VEbsXrbTgz2mznLeMkDb6FD12LmF91",
  "key35": "3D3QuUXYPUk6vCQiYtsExpxDn2DuZAAtdT4d4BqUDSyMBkRHW1ZcpuhsNTEVbqSaTwXjxC8RJhP4khM35DD4h1UP",
  "key36": "4pQtUrwHm2CshdqqJkaKJHM9rSpA6vFBESdjfj7Z8M6uJJdMCxWsPTecPaMUPB2FT58dCmxiBSHPmN8mvQP3FQnY"
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
