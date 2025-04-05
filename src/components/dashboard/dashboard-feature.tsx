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
    "2Dnzf2Pt77kk74gvPnXVGU3ts2zanSsj3H6kVJwVTHm7bcFpQLSYcXSHD115WprkY45EuSM2sgiHz6vs1fRuguj1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33tuZsjzeyrq4ChnUfMoSvAALFd6fDWo9Ptjs2eBsMfwZBZQMU7YHMcYk5BXE36qQ7g9CmR3emQZGiDBJ7pAP3Td",
  "key1": "5z7LRDUg3X1HyYFiqC4f2HcBxUoac2LxAnWtCvDfHTgPXAx4voQWWs4zhD1vBz6UBm8e5AovN1hwu61YgwAwBRfH",
  "key2": "3S4Uj8NchFa8yT4SnpXdmWWj5fm592RtjdN1uT5TwYp62QSjySy9zjS3okb7W8BsSBbQoDn63mKEi1DureApnGcc",
  "key3": "5BPyoTW5pEFWr6EjZWkscNqWLKtGBmN5GBLPWfJxVL9DFbXRvKtcKo9SBwxk75P34tof8Sn7fCVsbkEnANdatyYB",
  "key4": "2B837Keq59NRXGjpzqdzhGbmoPg8suTrUvpq7BkkgZX7FaWq6kDkzwPNqbKire931umS6wkJEWUGatkEhxvj1Yfe",
  "key5": "52NcxYFJSi8bZbyNx8dDAjTkrzRWDkMBX54L8Y8FL7cXHTdd1qmPPREQA95HYHi2uUBKDByz27pGcaCmLxkG6MBX",
  "key6": "3bFQS7xTiELoZKt8jL7Gp63qYgH3gH6WCqP4nKsCaQMZYEeR4zFKcY7tP5yV6TMbUN9UYdxJYmQUxNcrk2VBAA6c",
  "key7": "D1QethaMiWTu48jCkCFAXTHkvnLSY9v1nPURtTNzuMWT4gDNnkTuWsv3NnkTw9pbn5Qj8ezP99fxzwPwdA4AqSK",
  "key8": "2NZmb4D3poHS6aN42nkq7TDFULnRzUXXyjDtaaEDz7ffr4AbiCXKTh896AHPpM728vV1yaQdxkDczxCxm75r8Jk",
  "key9": "2TJiWM2qpkz4UTektfpgd1ipyRKL3a79dGeR2J6WnuqRDD3RiFrbeMhqopUHuzhQXbmK6x36drgEZzGFKgTfumYF",
  "key10": "21sejBzEyPVPTnm8oxUxdTpQf5gCyWcWE4AJr1htSKdyWtKJN8cFa8SksrS1cfEfxN8bA4jKbnbR7T3YxEoG5YZF",
  "key11": "32dEtGq5yMXVsotUZUJckEV7p2bGAnxheXouUPQp1hfb7Wycxmyz7NkT1DCu57m2suYSwJm26zUapmA861Tq4XSW",
  "key12": "4Y21Gt1aQ2FnBpAxQhoRmt39fxE5ATo4jSHQt5sjwHs31wB3m7Sacrs6k3GqoN1BGvXYjpnuxVAwXsd6n6PfcqHi",
  "key13": "2FFU6GKG1uNPjnfHtQGsRw5A7VZqRBCQG5D1p9rbcwMdMiZQYyEx2zQB3Ucp96DwqoU5scFzkXqNrRogfrTQ37vh",
  "key14": "25Lcxgrpb9bk4ru54NcZ3dHrC1wT6U8rhkJfguSAcnByQpDAz9x6mWFxxmSomcPEWhyZJT97urN1UV1nh2mXVNwJ",
  "key15": "67id7Rne1WuyFBHxrcvoK9TuLt9ihMgM1KrmeZUouuTuCwDf8qCvfDzHdZbLPRHJVeGbuwmzMMuJVSqYgz1XS12E",
  "key16": "4vWBY7dDghQ92zRJ65EoSPJHvhej5xnb4fCXUNCEVpBCYBkB5EXkUA3jUU87gwQ9VE3gLivDn1wqKVRWXVKpEwh3",
  "key17": "3iwmEAMhGoBQFnPX29pffLPqEN1qE8zfUibsJaDXKNgjmKrhp9aWVsJSM6kUd6Jv3UMTTGi2d3FwJQSQZftQ8bAp",
  "key18": "KswuyASTpvNAQmqZMgYEouezB1PjQTmUv2BnYSMovrs1bUsEMyDQTtAXGnVWQBHzFsGUyHaFn77twucuoDKJKV4",
  "key19": "49bQMuR3n8y5Z2zBsz7jv1Uh9VbBDiJV5tyQ2sny1mQvV1AkkEevCErYkDRCwxW4pjRU9SC4gGq6DungEufprru3",
  "key20": "3ZCz5GRDvMieYCPbymSekTkzsX9N7pFMZW4ZSbMVLCsp6XE8FaaD2Pkx3yJydwqzGdJhLt5pWNhqsraHjE5y1mrA",
  "key21": "5hcTbEATBZ76pfq7Yn9eoFghWfzCdtiti51wwpmgFLtt7u6ps2UyjP4cAuFvLrqjfebCg6vycaXvHh5wuBAHJrDz",
  "key22": "5HJbjZ4uzvTDA4Ak5krbGWLDiKnTQ7hnidjQoajDWuPyqiMBUPth7dRvg87qSaFNg81ukgsUaKCgiwcMqfjPenva",
  "key23": "2Gye75GL7jYHCYr1AbhzJ7DDotv3sxiXZLVYXoqhAoEbKKB7ihgna3gNz3gWeYMMPgysLj1Y5xVxT6gAdPW56moj",
  "key24": "4mvozSDSGJdsfr8UZfRWinvd6nkxahC98XX67we53PvXHWiAZMsBkZ8MUe8f4uMD2g5UEZXYde5eHXAJGtcXTixu",
  "key25": "5BDHgkPAxmmLTFFJVALSW5zvwgsY45jFyUxCNrDA16FYywPrSggJW1GFX6VsFGcQCNnGgazXjajevPFb4CmVzoxY",
  "key26": "3he8jfc7Jzqbhdm3CLzBVTqotc1etiWd5PARAkd9mjvmgAetokDJEn9HsSto71ekojkw7Fn8SWTpjxSDSmbQZpoZ",
  "key27": "2X5xy3HmhuwYJXMMPSk1YgXgKSGQcx6ABbqwDUEmuyYoX3xLYrPMzkfjgH2oTePFCLmQLmoqEYD1Ks1V9AZbPS6m",
  "key28": "5JSE7tcNxzitUvpUCEYdcK3K9ebHZT54XLqA97VFAFzVeKdjW7CApjNWxoMdkfbNcYkm8PzFh2Grm7ZuWGFTdmw8",
  "key29": "2Kw8cvThj6p4kjccA5kXpJccXnw7i6WPCpJbvKR2JLLPyHGBps8Cui6pXp2SJk8ehZZTyXVXYeaCZNny6DVd6qn9",
  "key30": "3YRRc9xtjKKirD1NQ4HrDDf6351Xe68Qx4jKrz9fJRLbUfDfaaBjZ5k68b7MGaChUwLU35LVcGjXZWM5151daRPD",
  "key31": "4WKL5eCHVXY72a5sbUs4hxd2edvMd1CxdBCKSZX4NRV2BVa1hPyQ8YTx82mLcaBoF9xg8dJxQ1VBf7F8Ecb3a8oK",
  "key32": "3z1YVu6osxjq7qtiGzLz6JenwSfCv3HSLocDSmsTidhdkGzsvEJChyChRtaJJHHtqE6DErHBDNK4ynDSo62cC3NF",
  "key33": "phvmn2eSu9nnRXZP1AGiRJcMXj1NXT6EnnuW4JpSGZoVtXQxWBCgBSvag9FYKfPWzPZHi3tuLTbEf2vXenhbyQh",
  "key34": "5ukEpLbt7axqmp9ysLtwBpziRuPdLQvzs1Pz1A4gFKNgm8TX9KZb9xPGJ4AXB3YcmCuin6Bj4QDx6s7MVUKJEGPB",
  "key35": "3kvjGWUF2eJDHuTZZnbUiige73a1kxS43ewkDopvuUrdLcHmXK7rJaaXQW2nbXjgYiTUuP5UN4yvzkE9gVoJvYyU",
  "key36": "4HH4EH87pwZXMK6ncja3HFkCRLqgL7UyXmo9atGokVrTncgRqdrya7oVLPtVCwZ89LB2UFGAW4mdeYY6qFARTwfn",
  "key37": "2WzG5Huvb5zc9AjYz5ya6FCh7CvK84fRFhmtyFRnMmF67vu96r6cKWFwJTfevCJm6yQwjY3pK6QRXAtLxr1R4sNU"
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
