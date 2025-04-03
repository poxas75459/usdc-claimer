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
    "5Qarpm1JHw484R7MwF3JkhGGtZo18XNVWtmpgvqSgzW676i5AA6YmHGcAfxXXr54VusEkJdk445dZ7YUWnsy9G3P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SeUeZWuyMHqXsgDQb1FKRNpejcGmbR8Fdx5vjWUvsAXLnmz1bj3Hfz1SSE5wv7JqY8ScGhf4JivRpePR7kmgsYN",
  "key1": "5ELd6vxxkpSLZMop3KZWKjTDuTMP6Csp4JHxE4XRLdzjkukVUVRBRCHwm8mc273mXbo2kEyjMVRZctmp8CG5goJ7",
  "key2": "2eM3ha1Cf8gxgKfmknA7LbU9coaDkuwJWL6x1UaEQj7z8Q2Vq8fs15BoEhK5RvfVHVKnerJUL3moCDgy6JRNb7kY",
  "key3": "2n2JW8iAjy1usJaTK49G1xxeCFyshEJC7enSX1jANUZq36VF7HKXXSKL22PcdaJTSXAzVqLBa4A1ibjMpxfKnFZo",
  "key4": "5oKiKXcfzDMT1yCLurqNe5EXEva6TbyYQbkes77kBxwNDSh1c6MAqyR1JgjjnYHc1U8awhrehHYgamUB48fJ5Dro",
  "key5": "38FWuCuodjEawbeBZDKqpLSuJP4MSkbiiR4zNVH2yLLH15Bg5zUN6KdnDApHebvHhS1UhKEAajXQC3cs65iKEc38",
  "key6": "4LWJyNq3EZkwvbZmmAB54K38vvGhjkpRE298aVU3rHhznkVPssG27qhbZad2d1hi8BSxo2h9emGQrj7XBSnebQHM",
  "key7": "pe74gLubNi4j1VrcbeuCeY3ot9jx4XAjx9QxYShJzvxkkKZj2G8K5DvkTC7Z4Vm1rn65XWm6KxapvCjTHMC4j2s",
  "key8": "aQh54dxLJsPqshKDcStJUdixvntKiTfmq89xXUECqcvHBtErcwrgZsNbcqH9kRuUZZv6z4N9pPbCejs9UoF7Q4X",
  "key9": "63ihCgjNpsAaW6X4g3EAQGyBZLEtBTUcGLdUb7cLgB8gzfA7iexTxYriELYrpu2piVWN7gB25CSrsxwCdxkezTVx",
  "key10": "5ws8MKgNZB3usQvxmBint4oEJnL4RfW3NRYEeWGLyzgAARSFZVpm64gyUkVKsGXwbGhFgppac1Ucm2BL9zdRxTjF",
  "key11": "NgE4TsAuBaZaFsQYw9HxMAp4KCvSq1tooRH6YDHjd9PbJQkj1FWTXY8YMM21NGJkcxtTztUPEueSLfYL66nRxik",
  "key12": "2LVgn1vHNu5iHHbvSXKaQ5nUDeA3uyQh62Y42uUFhakjmRWJVtuDDuXq6BPbWyuHYtK212EcxKANM5GMY65znopn",
  "key13": "2TGewroNHopQQahuB9MBbeXUmW3nJTs1zRP42d5HdKmWJ2kSSmZEBiAsmD7kT9DJsdx9B5oynP33TAVPjkWGqSc5",
  "key14": "3nj3m94oMGECKNMqcmXVcHFURjMsokeFKHom54eNGekw9espB9FKXrRH1R4ysugHqeGewBRtg2qFihLogXDPnVo4",
  "key15": "43JkuMqCMEuunksMEKhpyzqeq1G43sVQZkKYrVSkRTBSudeyy1kw5SAMy3Yqc4FSq7izxkoghmZq9mCtboUTYFNs",
  "key16": "2b4EVphQUxUzswB89SC1fMzgr4rhNeS71f4NDbNvG1rEYjNB7bdoin7QRYjhLKRH6kvMsQL3tJDt1ndueWpQWDsZ",
  "key17": "3gYpL6uN63EAfSMuey2W8kaQNCMMpeeKSohdftPhYvEVncUTr8nJg2nBoF8hGpic5XyAxoBnsmWoXsC9Xqd8qWQo",
  "key18": "LJuxRqjoJMdpsi3dhVot5vkAi8pY7J5ST33KoGPLGi6BPSh1Pnp3UHHJjpbvK6VRwqr45jKZwRYJmx3VaZgnmnB",
  "key19": "35Nyn2DhUSSHMeyF918hgNuzV6rGDNk1BzbagWhtcnsm8QKutCeQbjd9RTDquPXLxNQREQT39pqBdQaWrZ1zuwFu",
  "key20": "3iZ8Ft5KUWvAkmLzwi7grKyFdvGjppo8T1StFU1dKdStsi2CFueCzKAYU8ku5ZsTaZJg3HmQcsUJNdc1qi7k84Zs",
  "key21": "4PF5mZXYdvEJmNaFP1XyqypRRcqF2sDyM58XYKguVcRodDmHJR1jfwM2RjJoLyN3KMaM34UAXicxhKuShgM4zmqo",
  "key22": "5eJKLZ72a7h4JrHGFMbUpb45FVKPHoAjENxcxWRNxBZ24KRHhr5pvKG31o7k9t4DHPe4GKBYiFGfju1ufTnismSE",
  "key23": "39DrnJXar1ZWGWsBu21rkjFU1fUb2XojmaiLJaBpsEJRv2T5bTD2pncavevMBUwNC2zJfSBtr8FfgYU6PohKZNU9",
  "key24": "4fS3EvpYjuGNhsvNTDxBDV5z3svxg8jvDug1hy4djcYomv9V8LSn3H9jWkGZNmU3vGq38CdP3Ax6Kna7txZ5Yr15",
  "key25": "2eR7QgpY7agPVSR1bAWGHJuwj2mYZKbUwktz6NvX2bb6Je29rkh6YiHYsfXenhEmMvVuDvWpApR2z6QKVWkGFr2C",
  "key26": "NJTio1AUhhFABedDVxk9taQfTkec5kreARyjk7M6PMexQZHyW1uG4t7kJSjZJJjqdj8HE8mwnAriz8y8CSXKD15",
  "key27": "4jjPqR4wjwL2C3BqA7vdMdSTw68cpWUSKBoriFRZaMq8adACy2y8bjvgdKfrYiHyvZYucwCZo3v5m7ruMadSppDp",
  "key28": "5zom4t1bDcKhAi3N82Q6rYJuH9PUuUnSjuMe2W4MAdPKnEEKWVEnyEpsEUs9k6M9b16gYBKZzAXdohPdKHfbvxgq",
  "key29": "5uoZs4CQF6nRkLVv9GtZ4XJAvHLbFzRUv4AMMcQE3r6RDtiFtWXzCe2G8ddz49id3DTZgsWYiMXNXxq1PQ3LrMWR",
  "key30": "22mgoppdDuLRcPA9L9yEG9bE48gJU7faUReJrjbQXTr5MjUpvNdSpxuvhkkRkPQPcakK2RTb97CHTSfaYhh4GMmc",
  "key31": "3iCnVcoTQCeHT151XnKQHB3JB1UYMi6Cuh47mEGD2WyxiHnjHieUkatz1GA4bjrGdAxuy1T9fJYHsncsT6F39h8F",
  "key32": "4tHzpgs6dbFnbo7UW6Xcbpn13tm63xAwpx4ysAFyWx2HN61rqCY1dtnz7C7NXmknM7zcEiGv9KyNfeLujYqqnnfG",
  "key33": "53U7kShKQT8ehpXjS6gXXgqJ3xoDJ3iXnnysp72sWjErSphi78Pup6tJbASh1bv2na4ZzeKxfK82NFGyrQcyXU78"
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
