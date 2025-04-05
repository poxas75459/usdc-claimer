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
    "2jkqXi1fo1sLPSt2WJF7cHa4omARZzRH9JRUy5WtZVhpWCNaFYrqNtwffdzG6Qhix9th23qW7bBTyzML5aZiQ8h2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "z2LkZg5GDpdsZecirbngAFtn1fe9WDsxyq2WEk2hNKweENhAo6iNC52RX6ZCrNjHfkz5hkVa5jHHNsTJZja2pbt",
  "key1": "ZMYMDZgsjouZ7Hqpmo2eCsBvMNaZdXgpcdykHkyP2kiMQjLdXyZ1dgnQzgjGZMZ3rwjFiTtZCQ3bdzMouzLvCdv",
  "key2": "4Doj6vFFgdmbPNBgCobikVtpECTYARurirYH55yduA1shivEpPGG1aJaGVgMvWopAHWj9FuP3wvx9DKUzicTUJVY",
  "key3": "2fKfsHsScyi9UU8R3CfeY6hMvQudAfVC66Zt6uP3banA4zr3qsXxMynFNhegE2FfpTnfN2Rnx45EPRBhvvYYHNaM",
  "key4": "5n9tF3rdFEmLvQyyH4jQZn2iwZrUetJsLLTmjajXYvn8QcyZnKwPLbKWF6chNYq4xHCwoHgjYzGdWxjFd6bCScPe",
  "key5": "BheZqCQRyRSWhSq1V3Yx4wsMMbqJnkbbcEJZPLZrmqQ5jpHySEvJarfyncXrG1CbtrXQxQsC9v67Hy2gEiD7aya",
  "key6": "ttLgCF3oUgXTE9GouyCNSWFjKZbv7DFkEF8zysRZgBWZhWjYrZu1baH3mX54N9bJXWZQ7vkCSkq9NqXuBhiPzto",
  "key7": "3GncPBszq5D8uX15UeSo61pVcnyKodGKMkvZEhXC5GHDVyEVGME38GVweu2jDkBwXj5ihNoeiFHwjpZUD8bPC4sr",
  "key8": "ouipaAwcXJifGTe4wb6CwnbV88yRYBFMvoBsU3BoFugjzmFVnGxyBu56RSxWDBtSoh8xAn5oR3dxdF3WDsueJAH",
  "key9": "h5NkTyNWfx21y5vUxy7U6PhPbZZNvLRMxBYVMSBF2uVVXEHiqAVggKNRQZXbdivkrkCP53B2uAoGBeVmy8brLRa",
  "key10": "5d2zmVtjnZaoyNfpKfJE85oGNHjUR1DSk32vqZVFBipriGMpHsRv5o26Xh9B6Qr3wt74NY3HFyAzMutqik2JBWZi",
  "key11": "3xE14MycMXgCC6LGhdnF1WXpzP3rwq2eD2rNzbBFYccDXViLa6AbjPPgWCTT4KPqtwqReFEmr7Tj7ZW6W6Bx3H6m",
  "key12": "5dGTarmscFV3YWHxAEUFuER5vVpF8QyGZu8yunjZCnWHu2nb7u5VPzoBuEnJsSxUVqb7uKAz8tnH5QTNy19SoTaQ",
  "key13": "4Tpt3vD1N5bqDmWy3RjB4ZpgJe6TTRDTV26qRkrwf6Hss31NE5XkjnLfqbHZw8AiQNaYUY5LqFozgUdFVj6PCzdE",
  "key14": "3nsztHtHAaskQJKJCFQhoqKU4jiN19svjEYwEGuZhzpTNPSiVHEZh7UjQiA3zBgbyqbPySZ8U2rJXpsPvnYZei1E",
  "key15": "23xBqp1vBnSTmeGfAnNBQFFTWRbMjGtBLrTMP1GdwahHosDoBV4d6ou3B62f4E2XQKAMCB5gHUSLbCTM9KsPZMLD",
  "key16": "342MQZ5UjyJbRRGdZ9obj79QKFiHxsyjxHwYjGrXsEkVsxKsFcBdannF8YmuwnzRhzydYuJ6DEBmqGhsjgwpx57P",
  "key17": "4nm5DSueiCQWShH56ef5vsyZmjgXpcWU7us9gzGe98yX8rv1grCeKyDJzJw94NGrx9ekNpNSU2exFkjcm2wpz6S",
  "key18": "2CgDwPrG9PYCoFNfQdkS8kmftdE3N1uGGDSKpwKyDzVCHnqesFwvy6MyYmEiKLoS67jZGueGaXPJgXU3rzJXkvDe",
  "key19": "4pcuXyYmD3KenP16JC9hwPgRFMn9r3Whgm7Qo1nr6YQ8jMSwfj5ajRDo7o5qHFvgVJybX153GfBHE68raWXRBSrc",
  "key20": "2s7Sc9C6QveevAeVeSBBYKEoUq9e1ttmGLS2sxFxCo1AJ6daXQBzXPRW8Vgt39dNAm2uGj1r4FW6mPqcmNLBkJyk",
  "key21": "3SJAUQTK6GRTm6AKS2id38ArrqrLR7XuuLkByHEDWqMPzSx2SAE2b5HUiF35EbmidnuMcp4h3xwj6CzHtj1xmg7a",
  "key22": "64EA7YBnLVPoSqkomKJqjetKPjxb1U65a2pfYpehVGeoAez1c4vkCg86CBsYr7T6XRT8p3JSJGA4EVJqNfzhnykK",
  "key23": "4Q8b9QEe3spVuE3wURPMHDfQbWHEKZgtb5ToCAbpBAGTwYvi7QbQpTXKbVvzU2jHQYPKXdASV4c9BqUf1jas7TrB",
  "key24": "33518P6N84npw4HY3gddBMc9xKz9fcStCCjN9kHEAGYPiTDfTaCGzuSsNP7JUkqn6DvHgAbggJX28Yivp4s2GUqh",
  "key25": "8R8VJUWFQVFRq5vUmmNLyhmwB7YyjqmsanQBVSx4YyiosaZ1EAdwMGTaQNYao35HbPR8o7usqtue9ShrQ8ytMQH",
  "key26": "2LnroYTqEJNoRhQyDuFmWGDD3YyF9EHYLr5hEDMomPAz88bpLvkmKYMNpjKDGD52tVWRtdPpHGBWcPuePMhd8vLt",
  "key27": "4sym1ajfdjsB9XkduH6nhuU1H5aP9n3g4gXHEJEspgYn5uZLzCM6E57qYw77Mkbhf3P3S8X9vfkmLnzs1Fi3Gzvr"
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
