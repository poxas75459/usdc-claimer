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
    "56FQMiiVv31vnHxiS8pu72HpBvvmnkbbDSP9pNKfk4hQ9JPtVpExAUqThnmyREFGtBXoZrmHzvvY8ii333NQcVpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CYV3cuajq2QajyEZModeH7QkAWXZTG2LAVviyjHrpxkzYt34bpqpcsd6qkdJEEirEVEV1H4Yk1sC1j99VX7x2cm",
  "key1": "3RYcRgWk8d3i74SLq66mcHuvF6aoZazy4zfRPi6QMQM5tExYjMXj3epD8niNq8XPrGj3wFSNZMqZkMFPanFQNG4o",
  "key2": "2ZsXL8jjHakY5qX1XqF8V57nTfkdzjpTKGUA9yQV9kX3YyTkC5VrrBQu8zvZnmsNh4xCf94JfUW8K89yCmXDw3hS",
  "key3": "21CgCdDccYy5pBdieQ7uoLpkdq7LuNyTVzF6Gj9BQgSxUfd8Wzv1nNNRE7fX5shbquN8C5kYhkShyJ1oa4jcqPXy",
  "key4": "4cuHf2Kpp1GsEhT4txhQiQd61vm5aYiY8F8FQgz2WamiWYEdKS7hYyBZ2n38HNzDLJpebMyZxF9pJNauwSXgAyGL",
  "key5": "3KGuSFiKftRfun96xQ1YbGwwkWzfUjfzeCpEQ8yBnCZxzpHmxNyCo57HUYfc76xAXtrNQKhUyYAPGRmWvZDCR9ro",
  "key6": "4xpZqD1ucNrmqiiJ7cFd6ZfafkXbJMiGjaUtmRHR9xBLjG9oZU2L9YbYzwkvMxEyNAXAh5Xt3D6QbTahvzxtEB44",
  "key7": "fEReJST2NJWnducUsJyXx1LcyeBvyxhRGSXHef5W27N6AsXA6nDFSJgnM9SEUyPGuAyWNmtvkxYrHjoHXVdKfYh",
  "key8": "dtBApjDYTo7z13iWz6TZwafioXxeiCLDe3TvaSbpZ68giC29QEkVtv2fb99GxkD7E4iaHamSFrJk7gMbYNmpYuu",
  "key9": "MbxEaoSi1mWhnXdyZkjRzoBBnbbduhff54Ee1WPaKxcaQCoB3evReuJKPxVqsBQv8FW84d4zkmn2YXAnoxL9trY",
  "key10": "5uq4kfXG9x9ikMjbxKzMso61vuRkZQrtoo2v2wF8znVHxjHpPgfNY4ykwSsQUcHXSPVdaWoW6cpM5MTKh9GgxZQQ",
  "key11": "28VGxYPtaZGsPoW2rkqLpozhusFf7JaWRE6XXhppveXGLYsyHAn93kcdDdPFgD7EkzQEfRHi3zXzRQEkPVjbj1au",
  "key12": "2iBZPA4FWS2pdKUsN1RKtdZtCBD8d2ihTYABaAuw2DAUexzLWam8VkLGVZAqfRmC9fuN6r4RCPLmZg2FTnYTJoaA",
  "key13": "57EjDeyJypbpUQb8gCmyknbxPsvwXsuUuXraQc7FLDB77emU5tGRcaLk33kPS3RoajXVmw3aATG1QMfndtE7s39t",
  "key14": "2itF46vpG2qX1CM9oiHxekvXxM2DPCCeXBDUXccsJCLjuQ61PYx9WeWz6XdKhLAREJMdcFbRWjmaeqQpDMP9hGKa",
  "key15": "2E1yFfvE656RPYHc3KHNgHYvmfyspg8WwKv4SPKjgBAT7oA2q7yfn2LKKUsXmmQKguBXKDKLn387asvnaQ1DC3XH",
  "key16": "3zjvddn5tKDQwahnaDqpHj3ViDVsfewJuPdahLQoioZtN9CDcY8HvyJG96JDUcNzy5AzVFaSz3Q69kdY65X7G2EB",
  "key17": "2EFAYJPpH6rkv1h8gtVUiGCyhC7Uj3SQTJ99ivTvRKNEdVTEnEcvavhLm4YiP7ttyACDmtL8BZWAuPUQ15MteC94",
  "key18": "42SD8suk2uWpHpZx4R6G4ccTpcMjL5dKubBdjize1Bu2RDHAUT26caHaq7ZKMmCUudyRQTyMxWcoKhtv59e2pEnY",
  "key19": "3X7FvrzfWNtiNwjr7ke24D2FMNYc1obFPMM2zJPxod6B4Fm39j9JAmxaKm32aNvZPAikD2ZoYZg3KHj3u71qNLbk",
  "key20": "56MeXBmYd1nYaZimJXUQom2L1r6DhZ3jF1h2PJLAbHoRnn2U6z87v517wAr3sY5FWUR18NzjeWmAMXHkvWvx6cv1",
  "key21": "3RLu6Du2DoBsqoTn7gTDa1iRybntGXDtTaPkWKLdV7noTSSZacShiRB7NCH7RhDYUwDVHJe3sXwEBNT8sYQ6USDA",
  "key22": "41qZgS66VmubFoiQ5PSuEyZ57bYmyJ9vVmwdFrMe6HaHK3s5rmFii7NKWJmUgfHEnhGQVUcYNDWkS5q5PEWCxmNL",
  "key23": "3zN2Xs89KY74Rq4CB9wg9bsq4XVJ93hfByCTLXrLDm9UFjH4ev9JAxvwZ89pvkbgaYWMfn7p4TXvmHLJfqohdZhj",
  "key24": "2BRSHeXkbEGwKy5QTSAVfDR1HfvvgXhxuUftnRnMEwrymVC5Lc8gn8yKCoeKZRyi5HCXpfLXS6wVbUBuScKidMgk",
  "key25": "2TKVZEHS4LXGCn7LdEwwGGk1pvmp3xdm4YBkpcjSAq9BnmEL6WKFDxBwzfvt6Un8RqxBwoffMy5AAgfzpX2kKgX6",
  "key26": "5QULf6D9PCwTa5fvziHaz57JmvMp9sYtgPQ9vrSEV47jWDtb1a1WonejmNqEnRHW4RaeEomrwTRv1cTwDRpnah1h",
  "key27": "sCTYEYpmkfQjfTJPuggLKfWBvEFktBbKqa1TMYAuW7Xvz2cjcbVE4cYwo44gcuBkN5ZbvohdRjRjGZVbhpW79dB"
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
