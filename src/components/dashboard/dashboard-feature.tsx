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
    "4TCFDWQqHZGV19BHY4YHPwsBW36zEMkaj7omWDJvAE3mwA4cC8oseShYhtWmww3xw484NebguRveamFFHUcRtofH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4apPB5nfGYhSvceBNqhzU5kwXMh5Hzcn7APwJfBTJsv44D5ErGUwT3e8Gkyeh1ngXZT3yMapQWFg6c612Ujhrzve",
  "key1": "3E3ybRft9kkhEzYFjmFzTaV37N56FHUHUDMoXC2XSecCb8Zwk8chZ7774AyncsgjofpM9i5rj5dXb6SPNgNrKctF",
  "key2": "4BBgd97f5LExaZB8zgWiRPUVafhEsF2gXqjwksNPKSgHTEqwDiahbZz6wn4xuFh9XpwEffkM6sbVxUu3Dr3bB3m2",
  "key3": "zjsFTMGnpvv6XSaSqiecgnANmxJkvsn8mRjFmhW77ReqXH6QgVAa3Xdv2fjkprQ1NHq9hTpSCRMCvivDt6CZAqX",
  "key4": "uXEpf2Z9h3HLkDemx3UiWj8YvrmmdeW3THswd953bjX5ibyng2uk13NLPCYiZAwxgAJMJKdHvgTKVDCpxj23XqX",
  "key5": "4158anKHZW5rktLqjwhmbTLGVSzUHGAh2vYabEtH1JPCGwePMJJgxm5E8Vt4KPwaTWtk88uFXoWcUFESUSe1XRFi",
  "key6": "5XhSVy5FMmLsedasVfkgQi3h45DrZDSmxpSd4ypcYAR3BApWFSQjTtAWNYBHjWzy7969o5Lvo8Z7h6KuXzvAsF41",
  "key7": "3YsjXBDGLma1oxYVJwy4zu88VHT3ZzwLKRzU5ragGXAqECztGBLS3rUgc5NMjxixNzJARkNU9K2YegXehx6Rjqfq",
  "key8": "41wD1Vibp65ujF8gcdUSyquqkWaTQkwNCFi9sXpRrfxFRUPWoPpbVEQGy49u7XuLp32pbmQEZRkMpHoDs2AP33hR",
  "key9": "4kmmcsmZfZAUrwEYGnySXEAoXHdrGciWkyjrKAAaSwBLxk32NcUARkiQWhv7tbn7afD8t3XBPvo1rx9ofSR6sPa6",
  "key10": "5YLEcPBj8q8EQofaug7fN9gcwYZRNHoRHfzTDrtawULw8xQqrHKYG63ywEHupckk9cwmaqruU2FunPg5ExKaKziv",
  "key11": "3n2KACbh7Mb6wjeCcANY925RFZjkVfqY7TqjQ5cjXxkC199z1cyQDVEMBFmYftsEHapjgf9qaveKH2cqpDTPHwma",
  "key12": "2ZW5HUty8pYJA8rjPgVNXgPxsjKjGxzKEEJpfdBKnucP3c9d1JqAKgry1f2seHA65JTvkceqsUSHNF7CSMhS1ys9",
  "key13": "386wiDccqFVk7WVz9sYXrAct4tPNNaukz8vcma2ExUP4FUv6Ru76q7PWnXKXZ6pbF3B4HwkPUkwQvD9EB4XsqTNJ",
  "key14": "3h8QtvZdhNNurzwxwFAWSw6jMoP9qEBgAhs4bn4Fegqf4BYtQ44tqhvwtw8euMZZ7qAH1VCCpzjxJKPVxddMg23r",
  "key15": "VfbcUps4NwqihZX4QA4orRjNBLhUne4NZFsRrauBn1SM4nyJRfGoHg4UevxvuKaLanDXLhN14bac7eEhSZJ4rPu",
  "key16": "xbiqH9AjU1ryvLYkf6rz8Fb51u6DaykA2wGZyn3pbQSDkLoXrxBud13TCAqSVGRBMGhBMxkqiQuLixpzEFCzHef",
  "key17": "5mS11wNXGb841432AFW7z96zM4wQxsAygtYrLojhPn8A8Sih9DpRoQzuoAer6LoMa2taPq1Nc3MNSrVyFQY7kmfK",
  "key18": "2kQ9xpSNCvuDU4jivWyxw2qiuLCEt79HW8RiDKMbrtqtvGxk2wWifkXEUoBcfRaw5tntfJDVpkYHrFeCkfkLtL6i",
  "key19": "47foV6yiMNDPu6HD6XwXgdTH1hXjcgXH1mAExoRjgRtb6LstkKrtfFYYKT6pSpdV56MSeLiN5PCE22cWjnaQwwX1",
  "key20": "55zoiAtsrD8ADK7KL5of4w7dJp8X9FKw24h8Cq9rnFVpT8jmtzKAVLVYE7nDaGQHRv5rtSREzBygRHT6n6s7Y9Sd",
  "key21": "nhjVc7mQLHjpqY3jZ1p1XAypCpiEohNYg6EMrw8tUv1dW9KynHatgqoedouRc3axUa2XzfzWAd8bc2QxBphsZQE",
  "key22": "5wzoo7jwKsnBdBQP1BesV1nUkBmANDYMXzXxdSkHuzxhQduNJSG1Mmq2yA46eLTUVXvD7YM4imYwwq7XkUPs4D28",
  "key23": "346LzjjoFKgz6cEvNzTvkhSsjq8XRWX71Le8224ZW5jJo7qAjKorrTtXtMh2vke1NyR4UXwd1moAnieb6bTzKTcv",
  "key24": "5euFfn5j6DkmkJvDEnZPbysJVTyn5Ba5MABg4SPTQADCtRAiqQkWgyH2J4G3VbVoxAAqU9G93RsAVo11g8PeMbtW",
  "key25": "23tcx4RrNs8SufT8DTW3JLfSkRqVf77sdr2E81ZLzDnNHT1SeJXrEauh9kFSSfye5fQ9mfw9RAB4EtrbsiiCvNBP"
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
