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
    "5kpAyZwXh868iXn1UWoybFUTT9upn7tf5g4mnVRVLLYEVA7otvCiNgdd9jcznYATfV6oqKsGihD4Q4mz5XqTCaPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4393z7Cx9FkEV6F1Q6BDVzqd2jATVrD9QEcPjMJkVwx11irEVDo9A3SqJJ6EFp8TngbaX7vBGDmtU78N1SLshYr7",
  "key1": "5xPEk8esizMAUCvRMJMNWETu5N6zmM8aVpg8y83RNLUKr14GqPEitBzZRjACh9Bd3kdTZgSYG6LyWpWvcpVh9xVy",
  "key2": "2SmUQmS2rCsP2U4QXowZguK94qhszZHvmKHbzxDREPM1p48XRQ5ivTEUMdGxLTG5V9qGJTduVU3VDZKNuuDQqfyN",
  "key3": "3QfkGLtia9N6rfzKAYkn8rcgqY9a5i3t4w3dAGH5YmAPaoMkW89f83CwqhPm3bhfJw19Gd7woAS6LtpEcmi943MF",
  "key4": "4m2i33J1dM4wUS5yodGxpfmHrSbMLiMouNCTbebDDH2yfALSfXGtFXwQsERMc96H5ci1ooj4DXp77uC6WTFqZW5h",
  "key5": "4du5UfGTDCLzuFAHmUbEadjTAZW7gXhb8718UT9yAYNn6Q2A4oBWmrfT6aEjVnGfC7UkJQ77bwF7yGEqVMkEnpzK",
  "key6": "66L5UQ8rTM2bJs3AQHv5GMH8Zi5PaQqPTMUtPF5SM9AnfqFqYkJoDhF6pUUXMcJ3t9JMKmeN32NgvdP5iTKR2CwP",
  "key7": "3xCBL8irLVGe3cSi9YVZJ7E1d8hDw2zKRGMk54kpFhzrwxdbmDRtAtPcwRoJLjwWrkLfMefk3WjtB3NaviPZBWEu",
  "key8": "4BdiQSdz6eusYdQ1atj7Vaw3gyPVAV8y49gAg9pJniG934TWNjYcjmhuoVVNc2GvcnemPsbq96QEJjtkT1RGJfHF",
  "key9": "sGtceWrWmviJ9dJx4k15tE4Rh4ooi6VvU9tJ1qcUDPJjvfuWNiZ91TPQZuXaK1KBWSmjwbMkW9H536VmYhEAN7n",
  "key10": "4EXMaD8r4YegeCjwE2S9UwoXPWG5tpeo2YLiGFoFDA5TUKYCk7Du6FiX1cSmtKJjbpDxwYiVi5TbcWStaVUbFs6y",
  "key11": "5XaNvaFGeJNv4kTrShnJv4RWcGJzGN71ZHyb29yAPiK4sK1Q8fWcm1mYb2GpT8dQXyfVyQN4p6okYaiGpagfne2i",
  "key12": "2WYoXpaMauvG5cYLa2wiMSTLJXnew7seGQ39oUFpPBpimPyikPqqHQs68zH7xoFoY5Sr24sy8DN4qXdfUTAJtUd7",
  "key13": "26qrXUbZmPDhvui3oFYkpeC7S9wtjnkpz54nEdyXjbo1MjAHXLbjth7S9Fd2oSx5t529RjYK9SxmmmGppNiRZQLk",
  "key14": "864CMLxEzZ4ogc2gG37kYos2xY5rhmwgz9NuwfUvVc4cwMPNPEWnFDBArQ3KFBpksREpiEiEYjhv1YwMYxa8qnq",
  "key15": "poKcYzhWHjDxsiwARzVRpgQ54NxMBeWCjRCNnfqgXtMb6MognqdrTDpmYSQQ9vFjXW6zZPjzZc9mva8aY26s6by",
  "key16": "2Xm6FNsjA5guGQkbApaMK1M8xmzNU7PbQyp5W8BeCKBkMeobuQ5LS5YU9TDRZvUyoE1vBBftYAmFGypar8xKFZCB",
  "key17": "NaNHFzA5rUg7u1LKUL95qYReqdBa5wm3umkya39mft8GkourJaCK8d2qvWJFjbhPrTGctPSm2hqarUm5kCJLmzX",
  "key18": "53cN73peikZfyG5jUpZdFMoRhkfuBFFxGFK14CRXQ9PhwL2M1rTAZvhmC3gvaqEPLFStHE9QiFVPbrqnUfxkUYTR",
  "key19": "4MTwEtam7xfyY3Q87b6dxDCWJrwMBkzvS2DYp53dVi73GBmgsf7ne83yr7QtXymVQzNd5hDPBcvhFCQcffNjw47i",
  "key20": "5L7TXYKW48Zt8yCUCZXYT6iwcSz8MECh5fZWrV8wbufZBkoi1gNmpqjjNNXCWVzEnJGvCVFrXFzibEk1YEaZGQpg",
  "key21": "3TRG2gYZNhSyMfFWc7wN9vycu6WwWZE5matozS7sG2QvACcnZExrw6HDxm4qX1rXeq55Be811dSZmU2GoWwqs1JG",
  "key22": "WAXbveNATxUF3t8bgmA8DqqaFetC3dthWRcmhF3YTk9jCENM3Q4XqRJ4Jmum3uhifpqp3oE3X9EWYPHeRSRmCUK",
  "key23": "27igmBxsQPuhp7NKTTSMAb6JHpmARFCQPGtrqFjNUDdxsB4fKryUyi5n2XuvcE9W6ZHzG76i68xAucYEuWT86oWN",
  "key24": "42BS6mScMZuo3v7LCHFpQBtPVcHvkL2mAn8ErYus8vb9f6nrww6z8tGNDZcFhE7xn87ExDbQcgk2Guv5maxJ32Ni"
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
