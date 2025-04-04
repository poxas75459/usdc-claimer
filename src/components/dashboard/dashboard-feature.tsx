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
    "2AVpsQHccAvYUBhu7gEGA6q16Boc4Xm2LL9spUTXcd8xQg39NbcS25yYXDSZ99jHWYi6teEANp6kRms3oXVborzz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3XmE7jtwNJvKCH9vn2mxPNMa7f3Eri1NcPzFiWPJk6aiTmwA9rqH2sUau2TkZMtEYkZVvXRZssbTkRzbAN3xD7pe",
  "key1": "2kWh3MFgtRXjFViBZdh39JUyFRMHFyhFWM3Eu6UEH3F9GHLJVqoDBMDC9VdHdgyYmdJGiJ4HdBfsgKLW8pFbHhhJ",
  "key2": "riZjpxS34cnh5p8KT4q9M6zcCZNM6YRJbv39KR1Z3KRXaC6yjGSkZWj3PHCakwthDsVeh1NXiNERmRnMNTnTyQv",
  "key3": "2SykQZ7W83ruSP6aoS31BLaTBNPvSCzCYXDvPgh1j9bMjTyjun1HtipgMpiJcdHCfLbERrNB5NGRHcLB8ZL3j7si",
  "key4": "3uQUXshgC19TpbyUfQ7RSrvcC5nfGAa7uGYhLTaJB3s15V1VCf6B6d14Upp4xKTqcDk1tfqV2SQfNNcqP5aJHpwB",
  "key5": "M7bonzatusY2PeQ7EffY4AetJ6yDA97DWiSA78Ux54MqypbYnoQPpfCVFzeCuaYeJsH9xXY6sMxQXnML6R4Y4dr",
  "key6": "4KUbnXy4xpHRWbYXBCfzxzmF2UD6VvYyAP3horBGiVcZL1f76ZtEhbYDXiBddNGhYf95RrCUfWQPDQ6Wg2kRazXw",
  "key7": "4f1G825fvi5YdJZ7mtzdgXz2DV64nega7SJAsHx8NNBRa5u85YVUb7U4tUr9KLoJSH3ePLK9Wsr3QDM4uoRPniGz",
  "key8": "5kCmmmPZikXP1qWf4StE1sGYfem9MPnhMfHp2Ms7dPh2EzGJQjr7pbcv8F9krH83FLsdird5WczCupMfC9mGgFVw",
  "key9": "4XXsmrbj58cP8nRJ4fLjhS22rRp6Z8iPrg4AVhxj9yanLa7EuJ2rNNrxBMm7JxXasrozDZ8SsDhC5mQYdjvEwhSf",
  "key10": "o1Whz6ZNVAiMYAakAqXRko4WVjXBx422LGjtC5TBC4rW4PrRP72cxv39Z8DRmcnbuRzJwxw3T3mrUMxtkycYScF",
  "key11": "4wyGHuEUgRK5rnNeRANL3GswuJgpUDbSZy2ENWthUMMoSJNRy8BAWrkSbwbT5eGHVjRPapkx7fFSMgLpHLpMZKks",
  "key12": "LaPA8m4fnMRjKHfDWKmHPDiX4QR2EMhPtDoGNAz5UbgBb6AvBYPZkQVYH1e7s813nyTBrVCC5W9d25VcJ3H39n1",
  "key13": "4hnACqeGaRkiUR9Z5h8yArg3kBEm62oaVxm2FQJFTZbFtHPGoyCMBwc1nUtoWdddB9g3sQYrKXJZYotfPnqSdoc6",
  "key14": "3VpPMgAgmJrDcUb49LnXtZSGWPLKD5Duye73zBaBdS2Fbvpxp71vaFfAN3vf2e7z5QKcAV6qEBLB15YffkdkTwqB",
  "key15": "ehs9jEVq5o1UgbXVpoKsX356YTpaKPqpseubXwy9K6WK4RVNbGby3enXTSeuLKKK5vBMrSmJHgvmhx51DY4LvFd",
  "key16": "5ZRKeXVY8MxdrbKfcPPehqyLvA6QLjNVPkWwWuEvzRgDByNyzBdtF4Dq5a179rik8h6KofTZAeKg6gQu6LYXgaea",
  "key17": "RwuPXCKMKJXaiKRdrAWwhtMRj9aJ8w4zBmk2mdZaFT5Z8hn1B6m7YXJRAiDFUkm5Cc5jqbby8gJLqr8BdMdu2sx",
  "key18": "3aYAUnDnPsZUqScmvsMWjmSkgzmx3MPn8g96aoKWTwz7xX6MQ3qUQKBMjNi3Pi2QkNaCVk6E4LRyvQadLBmdkBTs",
  "key19": "2r7Z9meCkgVo978CoatikDTM8K5kVoJk5BqU1uS6LEmh4X1u5kFGE6ChfwnYWF1kTs71Adij2JV4YYNCUEtDSMLF",
  "key20": "5qRwNiEdyTbCzvr2wfEUCABAEdikdySuihfJvXYnUkG4YfxsSYnbSicZriPNTu4nvt9pDexh3Ja6ZmEP4LLNUjZh",
  "key21": "wAa9gzGNDsAAv8i7rAaa1js9szFFBjFLvtd2uW6inJu5V6ezQHXYP3iovbjChkYcbTMob7Pu3QhZp1F8tdKjos9",
  "key22": "55YFp184oiJcvnLzgjP4e7Dv1MxK1sSShtzjJfTdrWuZscxXfFptbSvX2V333jrGpNLN8QtRSqS6eXb4BSpvNd1F",
  "key23": "66qd4yF5rAZY8Td3BvyH7xTpog5bUt7md2ThbcMb7FFHMQ2aFqPxmQFezaLqK5c3UYokFuoPuLkpTJFiSgf4TWpi",
  "key24": "4b2EJBJSHy7AuRa5Tre29ue8L2guRYg4ouk2dypXpPiU3xCBseqEc7o6i37w7MGHarwqv9USiydXiAG6bjeT568K",
  "key25": "2hzsGLdnREf5edtUC8voRKZN9MpvKCvBpsETegeu18XBkiTx2pkbMnw8etu13QkYPJ1sbYSqVs8o14kRZ6ADeVUM",
  "key26": "3cFrvDX36fT3vJJdbuDpwfkbX1kYKU2DCgvsomNo6RvhtsJaEpvbg2LdEofBBNVVGwQvT8QoopZEckQ8MnQuSPCy",
  "key27": "3HTiJWRzaq5uyd37xLgCpwwrPVdbd4uUeSLsKGQrXeFtnCLqn8QajbKjz7uBUreE5xuFxGasroGSQUraY2n6GBBh",
  "key28": "3wi6MzHGBtXKshcZ6YrZ5a73NeY12PkFrYjurKvPG9nAugtz2ZKPooteuto4Mn8G8SPvUisa9QWoHtPJ1JzeKCk5",
  "key29": "26Y154FRRTzQS28sFeu8UUyesryDN8FiR8aMWrd1Q96vizgRgJpQhYwXU59wCaCL8F9EhVXJbUKXat5Br3eJnfMV",
  "key30": "2MKRMnWHKZFJ54awJzJZaX17TkLwccwJsfMJKfaZ3H9hEeHGcC41k688sDU3dnGYqgxeJp8mHDU3kYz9ojfw694d",
  "key31": "54W9Ltp1wyobzKRSKWfZj7kWEQFSw8NTxoyWLQygGTftuWe1jF2dAAPZ2tpys4PBic8BTiUtQ7SiMHweivZBSUzm",
  "key32": "3iTttrBzwcp2Pojj1iRiUhvaiGJCzgHvsJYzew8zDA6aKCGWnka2KpACsMYt3MAHQfWT5wafAsMcdvDr6ZhvMs3x",
  "key33": "5LfD3iEFeD1mpXvGXoycytJvyt3rL46ZAbiaAJqGJfTTAEndJnqaWZeq6ZfruME1ZVvMoV1xje3YJpy5nupAgErM",
  "key34": "3WHFv2GfPqK2QH8oHdo8qXeb4p2CL5uXkkujsec7ZUVY3U2mHHaewgsyR6HfSCL1uHHdF31tL746Pe9xTSq1TdAp",
  "key35": "5G3jftEcJhq4WqRtiJCxwCPtpTvqFb9cYcAPLCmC5jSamzuNyDWX6bYv3B7jGbPBbGjjELdbNmb2bNcx8MjJ6Tg",
  "key36": "3SWAUELjtALiED7HUoXkw74VYZJZGLEzP9Y3v2qmLLePec1DnjTMZkZeFB3TTdbGMPaYoku86YgcmYyT77Dk4g4c",
  "key37": "5gXCbV47qvyAsjqZEZVj499fPWfextjtpuaBr7DPmjotsqm3yXzXKRPN5fNACFqPaXrn7itGyBxwUWf5LQbhu3xa",
  "key38": "4qpkQh7UtA55GrxVEhs34FQo1a5GKKZeymMx2nJyUu6sRBU6c58pzvhQQzmk7cZweSoFRb94y7dtdsjnDnrW7ykQ",
  "key39": "3WCdQUF3x2Eoy6PK89DQUmghmuShccECxsHjzS1R3otUiASnygPYkg6UDPPKvwuufSYG7SzbRSBZUUgyJ7kGAyDT"
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
