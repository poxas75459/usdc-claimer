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
    "3jUiZGGB8qbZtui7pMBhKWA4UdaCnoLNAy1baJpiVsQduRDmhw658xK2BMr5ysUismbPCtuCfKhBriaJRKsW9hfx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wenKzXuCsNq2yD3wNqVkJNDouYDCvFgNPpY2NeCghAhVturBT4yXp79BeVEMaoULcv9d3sLEAnN9ag1sMAk8q1R",
  "key1": "24BbXKf5UE6YNx5vFdEar2k7YrW9E5rHJonNrtoFX6DzHCjhJ1K3KihoRMSEc8YoGRv3G8RRtJCbsnDkdnsc36Z9",
  "key2": "5yDEmZ6LWUGLZFBjT9PCJn7y6MT8Gg8YqCxarUby5zjWPPMG1K8W9suoHbEDK83sKehUpKD2LhuK1jt4rVSLcSuv",
  "key3": "3JZF2vosMvseLVK57Nd2gRaGeasYMfp3QF36LvF7rwXpFHTjiNhngtjQgFajSxc4JpJxPp6JqWfWg1SUYvHxMbx9",
  "key4": "2PpHmPY8in9w2AZwXuxi8wFoB9WvUm6G2UxZieADVAgME7hWDNTAiJzTfEfRwnfjjM5SfcdhsKrU5vahRijJPze4",
  "key5": "5hnN36NCRmTkaPoYyp6kuAQkd3kmVtp13W4hXZouEQEnM6k7yKZprUknGHw5RhPh6amScJHrtUkrssPsqEgAoq9n",
  "key6": "2NYkpAoJY8y88PerL7xQ26JGhNTRY1wDPoLv6wCySKuACzD3LVekyvoVCfJobHMKX9nKf7yjp8D4tJKwvn114R1",
  "key7": "48PmpW6gNWHdnZZX9ZzP86E2iyb2tkTFPPjnGfpXPSdNox3wJLyyKkxE4XeWmyWqAKrg5qVCQkkRLTPGhi3qurVx",
  "key8": "46fBbtutvPW74VbPoGZxwXJsBKC5nNmkNeNwx5o2xZqXTvU6wrdAd82sV6D5nudXsGb9bvP23bstfTJqst165QVP",
  "key9": "5wDi4aSBeNqeoHXsm8ABJGFv1ysaph4XyEAGHzk46opAP3g2mGnCM7ECSAdFks55xyHoZ7B6KyjW5wXZUwZ94Mh9",
  "key10": "4Y1CqXmawtLut4Xjtd5neWLJYpKf6A3xtFneQnefoLtwoJ6BNyNkaT2Bo8EjtXkCR67xQb3H9eTH1s3Demzi5bzx",
  "key11": "3Y4zmiKrbXad62xzdR6TDQTdkT4LQPkAhQ4dc96aGt7bLaArBxP93wWE2rYFnVjB7CoQC4xSoLvv8cXjWYHGV3uS",
  "key12": "4iGi4XgugnM7gctdLK3Dhhs58vPRZHAM84JTNKJmYLgn1QVMtHzkBRStkcaDyAFxxojKnmHZ4F54X2q9oRVpeTZF",
  "key13": "31idKxxb2AmrP8zKLRqHVaAAzjHfxtDCtZVvMxc57H7ghjxGsioVD8ngzxsV332Wgy5iBSpzEpMRfiKgFbw59Loo",
  "key14": "3XofEAx1ZDfwdVaZFtCeqbbqfhhweGrwKz4mPt3amyZSLVj6VHVG1zcUPDKuZhzxJfv7dLwdzxc9WhSS4Fwk3Wxr",
  "key15": "5qdgKbLdaYPvRmtqd8evTj9Jx9Dp9CTk5e77Ap35zic8ZgpgzQPCsN7jiJpgDjeSaPw7amvRhMRiBKZ19WBeDhNp",
  "key16": "2QtuECiXJZuCSkErumkUhSRsbAMfjw3QBiLquDTpTUGrGvHD69uXQb7gEiTkqbszqoTrTYGULUPM3gofsebJfbgZ",
  "key17": "24sBYdD5S6pYt4yA5DYiYy3Jef1Rtg6tkPzVB3YQBb6rQf2pzPuS3thummGW4po7grC1WemNAU6SgF1vieqNm5k7",
  "key18": "2zjUrhaUdQrytbN6Wv5rRsjmWGWugca9xxvqdVzaCVde9vVhe45LpFzqCGW2bHtC51fgAixZwxeVoF8hUYzd4xu2",
  "key19": "YdgEKZJeBXYhKsNTVPh2a4XqkHoYF78PeydFx4UNbcUrFWdSUw8AubJjyuFvZMaQG9HS21nMSF3a2yU2wnr9ZzS",
  "key20": "3EvBx2kaw64Ejp7ZXLeeSmkBmvYZ21e8rfaPf7oemdsSkvidZCuzy2PJj63uevtpebkvPfK6fX332wdrNmR78npu",
  "key21": "4pB92esC7geWTcJa4urRStoXdnAmMiY5oBNLrpuGPd6HViZQuHMT74PdJtX5RDeEuVS8kkFuuUpq4768fiT1kMLT",
  "key22": "5PgEQZ7dmdQexXzLyVtnr7rgNDBWiFRRMZTcN7U9QwCLvxrg3A5TS2p8nhx4zTBwZr3y2cdnikhV3yyhZqZQLKK3",
  "key23": "CtdtctfiS8D8Bjji7B9bRQDm43sdAzbqoT14u7chaozSJBkPYzCvyomKJsug1qErBdN619484MJTaAjosY5R84w",
  "key24": "3nTR1SbCaqYoBpPQRzHwo99CigkU54vncZTyDSxNtcuuwbA3uxCHjysdVowNKcUwy7CzNiyRrmUuJfF4VCFsbwsx",
  "key25": "3uosLTT8egg4zwJeYp6gjGrxFSCEEYfvMczJE5PHaM6Z3UgztqUBpVD9EGAt6CV4g4BMUscCWepzZzQ8RkawyVGf"
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
