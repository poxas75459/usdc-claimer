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
    "2a3Nqq9diUjp3EagNzf8kimwxVE4eEy7ScNvZYKXSV6Mtzfx3ooDYRQjuEThkrQWATwgGBjqxeSqnygQ9DLnyV37"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rRa6DMa8UGWs9jLY3dEdNRDuVf54R4FsDojTZ9ufUDY4dwJ51E6qmiEi6evytekTEHPtVqjgouhEEKjyV5H5vVy",
  "key1": "4TTHJ1AM8s24rArUBYGyMBtDy3UjG11dH3sscchGjj4P4q67HJ1mywTVY3Z1mBcDpSBBtfCq7emGZtq4o8Q9e94Z",
  "key2": "2yziPtHi2SQ4CSmvgqXSTwoeVMhZdF2w5exJ3jsvG3M9kLpZY8cx5XsgixTuTuMtjumy8Jvd644Jjc52jSm5NHs6",
  "key3": "52qZK8ngHeLqkkiST99aUUjek6QyuCnrL3LyDSTZaBpW78YjkLW382kBpBLK6uhhx2i1hGA6TMPTruQitWk8BU7S",
  "key4": "4D3pVpU3z3VpDZ8qKnzdhJZrScgC5H36NhYt95vi128xLfRw16LDJ8sL72f2schwcjagkifFaHCQ6H9C1RLJ3jCP",
  "key5": "2zMVuRdcRP6gUECgCtEULPnaLW2jRqcmJUh2gNA4nCaRH27QNzbos1LttvCTPT3xuCbvf6Fhhqt1oUUVq2o7zAVC",
  "key6": "t3TYa9jR1xwjtjEYxvLQJwwVnsSXDf6xQBbAG9ks4P8ZyfLjgW1nMtKJb6VP1HXjb9yoTWeGkKexnixJNsvvsST",
  "key7": "28dG4xt8aap8JQ2KtCpsoRHvzEACDErcxE6xBAxFpDiU858w68CEkmYvvkNoAT8TPA1uaMmFPgiTDuGcoiHGuc7A",
  "key8": "56rynB577FFHW33So7y5cWQgWWENbu5BpR4Thdya49wesbnkHMyKHEayfBckhqDZXH2q3aMWtxpzYjUmNbTui7aw",
  "key9": "FJYHQZEU6EU8mvzYJ3fTMjK87yGxNPPuQyNMsENwGspDwqeLkuBVti5Gg78NxvhS9z4xpSKJWzUdFwUhimjrGQz",
  "key10": "2hdCJ2L3hLLWQb9knRct8K2fZWMWRN61pqyAVMnXy8euTBpCPSmcDyw7tXDteCQ3VTMWaD3F4teNzjjBZuQniL3u",
  "key11": "oz1ANuxeZRbKnRaBory2z1W9awPbgpEcLWJD5JNa6Gx1ob1zot9bf88ZzK8EE6WDTrZPdSWpP7yjTwKhLh6eRYF",
  "key12": "fSes64m8JJXx2bLyZNWxBsMtwyY3Rxh9s1bgF4w19qa9ys9dYQiqk3RyLgeQpt7XmMDEwdhG4otFEgSNzH69YLh",
  "key13": "LMzJW23eixrqC5QLMFzdei18xaWDKFtSDdaFJ2aSimZ7vWhGSqEsgKJAVy82GeogLKaPiLDZj6EWwkCTmQnz6XG",
  "key14": "2favBpwtkjoro18XPeeJW7KX8RgVXTYQbBiozMSLEWjAyZYx9yGNdUk7cK3bvBKdNhLx85t1f2Ytt4Q3m6ByX87t",
  "key15": "3ZtNyYQkwbMHWvgR6ErJH2wp4pauF8FkMi9NFLppaWd9vE7Eb45RNDswrntwRfr3RXsMQvsPrRxkm739mxd3YcD5",
  "key16": "2NAGPp8abXvKzXwRmzAaddyw2nAHGvaV1sFYCY77iBqS69oKtz1hgT4nQ5Unu8zou2qP4sPvJdwD5u51Ke4k767g",
  "key17": "5Zj9D8y97wbxK5iJNjF6wWio1bJnJbAxr5KwXzaQ1c3QqxFeoXUHvPg49MZyt8wiwT6KNmB87AZYQq7XhJ8T7Jhy",
  "key18": "33ufTvsdyzeemPU4KtHrCx4XzzziKYST3wX7PUQEM9yNdcscuGKMTPVfHrSEkMHN6VrY6EQhS1QDNgN86RYtqvqR",
  "key19": "39cfvmwFA9ejkFbY3zbT45xjndJwnToCuSZS2bSQ88Ahh8N4TpLNyAcamw38d6UzxyUWqXYnLx2mayiADCrgdjZ4",
  "key20": "3bzrT1y73ZX3WqG79rBevbzUXRAjmWSd88Jg6NGosLQYAZZCtnNQFFEUNPLkqWQ34drTQF9Uq5jZwohbj9zjVbGn",
  "key21": "gnRigXPf2V13jwvLS2oXKpGEqU3ZLBvbFeB4U7kPcG8sLkynEsjN7mVGDvzjsErSCQUE1W1QBgkqCRYyitwumfP",
  "key22": "5Wj536Kk3NF7BsTPzpQUN25YEscvwXLNrWjTvVwZLDzaZjTRFnV8qy4dYeYyv6fm9YGfEV5tTJVWAknXcgTgnfF4",
  "key23": "gHEar6mxRJscYToV2ZirJkr1gwXxcaDoRNrv7eQS84iN731c5JuAja5D75X1P8SYwhxb5bekmcPue4EJtqWkREt",
  "key24": "4ZUZ1hAf5UePtRqQSwGB41Roi5LtsjCCwC3ovgMwYGdGniWU1VScah28ajM4WQmjNbn4wLPE3rfuUmzhzzDR1Dkp",
  "key25": "3CB5XoZMwxsy7MZdTNx81Zxfe2ybT5NdPEe5xUNFdGz2G9C51agYZ1GeKfQ3y8mp3pkFjmAH7AQyimJ7SYxYsrVt"
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
