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
    "2aebdVn8EZTdxWfYsnsZqnHXiJy7j2WnZj6QJY6Y453XpHPpffrGDMu81RMrABxvdvArbxhUdEYH46A2ogSJJr7k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4S8RZhXHp9VMwUongUB6tPwu7XvWzenzUnJBe18PRZHY9HVTWiet7R5SSaq3CLYSBqMFPWHN2GYShta5ud4WAf8T",
  "key1": "5eModYvKpKg1T2pCbXqzxLS8S5b4yzbyTpbsQD6cyY1JdWvZoLapRYJ3YrPaJMJ7RH74W3rPikU7TSU2qEUPDLWx",
  "key2": "3za8LqtXn6LrjYjwdfredCJDKKkTsQyTRsnx4gTr7yb5YxCD6NgZsa5PbWEJuaqWSqQrfG8acfek2Dbckkirao3a",
  "key3": "DymMm1LpVbfoiMfSEJHgDVHPWs2xWKKRK8eQwHy8gKeDZf2dbaSFDLsk8ZresYEEVKaEsEa457eGxZsWc8k6wTA",
  "key4": "2Xm68s7DHWQY8RNKZHpM2YN91P6BKCkPkckwsnXnjRqSHxVf1BeumjVhSwFxVYS3H8AEai1u1EN2WL8fy2H9iskL",
  "key5": "4MeSRkQPnES2ZqYhhXP3zsvf1HaunUD7QTprfC4iyNECtyjUehZoPe3dJFP6f6kjCWW9CuSy51QeaXZzcXQazR44",
  "key6": "4Dan1pDCdovK4jSMUJ6eUy4FbpopAiFaCUhC89x6oa31UP97BLM7y8G5VWRbAw4NqcXUoQYxGPXuzc8191kuqxjv",
  "key7": "CCSzUpLbaMwtA1QpgRUmjYf8oU3eEsGcjfa3m7cTk7JbgdCvGUPv95V9k9axbJeTWvUXvJkD5dugqMnkEBsAEr9",
  "key8": "4jXxnfbBqPWC4yX77eMDCGCjj93BPtC8Hn1ENCypuwQ2gQVyFxaza4waSakiRVXoCa4rUozDs86KWi8qCkkozTiA",
  "key9": "3QDKdnck253QAG9MEWqoRw2PRBk2oCoK1mRYNseXGCY3WFGKaKdt9NcVCqpSDf7b814KfKzY4dcCxRZJSCvBHbwh",
  "key10": "4XFTrqWd9JPpBk8XwtYkw9YXZDFiDTy3586AZoy9KpspeejDj2ApP38MPLLkhVQrfBAgGGQGbuodguC1cJxfkWpR",
  "key11": "49FBn8p4Qvr4euXQknwHpZp1qXmNkteczGNQ5vgrRy9FZ1AK3hszrGaSuPscby8afpbpf9FAL21jAjQCrd1VKepC",
  "key12": "2iMFEhK3igekB6vuHR72wmbMnkFt2UfddA4ZUYUVLEJ9CWDaa9EaCEotTa9KxyDndEueMYyLxycRseBQvGyFZcfk",
  "key13": "31wdUyHf6QVRFyi4AHdC2ghCD4NF9bmPVdGbPsHiqNXzSB3LHxArk6aYVmC2od1wao7zfJNfzRgxQNWyBZM7a2uy",
  "key14": "38aU4KtD29RcZWmAohY5RoxDt7oF6aiNZKLV51SthVrGaJPGWGr22cxrTfe7pKSwGmFMjoiKH2q37fhiXEzW53xf",
  "key15": "46jaQznTMcRXjhvqDyxq7VSmmukKYUQLzcrK2zgEvR6Mj6JtsgJLHpBtzWVphRwS9j7UcrgiFeCMksden8No95X1",
  "key16": "Dy3DwSiVSao71DvuzevrX9maET4oRDaSPL44pYAMf3NCjufM6CqzbFUh8Ksip17hgkyPe1otwwAUhExVkgfkZ72",
  "key17": "2BwP9MFzCSnd8H9kHNF49dm5MWFaanAGCgECfwaxPxxMMY2sJz4DUMho7FR74mTiLnnULoC3csaGNZaTC1unMGQc",
  "key18": "5AQhdTt7NqBdpsej13P2Ru6DJUDWBPtjyRyySBbx6EkgVZPgDim4usnG8qqwJahNF9tH3aQLrNtNhECGuomPHxSJ",
  "key19": "25j9cAMCv6RPgWGcjJ8z5XZq6YtWfwU5kk9F3BSDLQXbpsjPg4FLixqadvStjDKrLBUopCxYwEhu7AcZdrKGv8DE",
  "key20": "3xkuVfnrBtcT5Jo5yDtjo7kaoU2ancZiZifCwuNFeo2ZzZAQvfkRLbiogNUbGPpkTmqyJMJ5h7CxKqfkHtkiG8s4",
  "key21": "sQrWsGmXjih74pAtNQVpszeRLHwdGAgQbs3FskPyUDezHDs4v3B4aGAYhxvT7f6g9nTA8JCBtDbVHw7gSynaTgV",
  "key22": "2CvgmaizGzGSLJbLTKtcfVrLedUvXLQ3Eb7UBWeEEXq1Q6xa1MmKBHLHh1yz9qQ69TCo3vP9CzbB47aX1LBEMD9",
  "key23": "4Bopm5GBTh9qqDWWFxgmr4m1yjzatPkYDg7q1E5MgRWKag5q2m2SEkdwm3icLzeTkAGr462MQcJyHdByyeMeJYbb",
  "key24": "kMuvFjF4bThxTW82e47FMeMG1z69hA2NFTkj7NTPffe1WaN1c6WEQAKKsAWX6PgrsQqMb1JzTs2VnjCcXneUbQj",
  "key25": "3PN876ojE6MpMB7VUiw2u94YvXL7ZD6wwg1wnszQ3ADwRho2XRajxUpJJAx9iQKJBVLC9yfrnBdUB4k1KYe7vqJZ",
  "key26": "2JTd4Ffr68waChgdS63iszrS8QihyHVLApbEruNakEeNnKwrNPCd9FVSejEPZhnVh6c5ac8JovtTZ8CYvNge9SqZ"
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
