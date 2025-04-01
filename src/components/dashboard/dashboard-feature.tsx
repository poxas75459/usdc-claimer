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
    "51bqQnQKrbQfiqazpKB2Zrss22SYdEe8UH7WL5ewsurqq6K4TUaqLn4bU1WP7vJWbtsXjZdUUSZ89jEmJPhw7cwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4DfPFpazai58pRrrmVgpjGx8wH9X9HVee1KcEXGTerWjPpdfPr7vsBGs9MveWYs2ddwamHzJ1zwnptjpkVKdQfUV",
  "key1": "bfAgz76P2E7df249WeAzVBf6tcKrRzLPwgsVW1bH67bjk64wEWcNJga9R7hNCasExr4Wijutxzyax5cUPURkgHn",
  "key2": "4eiYHqpAHAtmRgzWgdE4QjHriLvTxXwo7JwG7vKLPZCdZoohEr5iG7J4kUxQUZtfTA12WkEbnH9iz1iXWckVSEng",
  "key3": "3c7giGVNeU15u2NxJa3ZTrVUxxBYEdCcPZ6tiQoQfuwMehqG4GGmw1MZ6f23omcRPdvh3t73hxxjyxN45NN5rypS",
  "key4": "3tXS6CJ7dcQYfvhRhGgmpXKrrqfdsu23nqcorvF4ewcH17BG6DPv6RPmGecS8VScrmZBnQckKENVnvxPPnVoqED5",
  "key5": "bGSdb4RrGBcxGpfGir6EMX2yZ5G8i2j3u2j4aT8Ug3c8StRRAf5fjgRmvMvqT3aG5vbwPHwcf69jsN7HTzcUAU3",
  "key6": "56qJGBxz3qf1Z9C1QExKeMNAydYnox5hmWoyhdPp9UJDWXPXvsS63PiPuHucKthHvfgjEpumCGJkoTtfRdD7YMVy",
  "key7": "5aTk2cJqUo5qfcVXx32TBGGm46yhQKwZbbRQd9ywwwRPgSDkEo8VqVBiq2nvCf8Gx3Q4WM8DrWKkUXLFKkuPLU4G",
  "key8": "56xkc5LTsNvLEyPi8pQ874x17yYjHKQigTV1BLwxkPPbaH7gHzvdv6EXmG1T299XXvdRgWbH8d49gbdVTGhionz1",
  "key9": "28PXrV9k4MrzCnVh8EFmpJrGKrRb6Pn9YqK1iT1aC4CpSZHbrRxZW8jdgqDkNDqqoJbxaEjqqA3rbGK9DZG72CXq",
  "key10": "4PpKC47Diabc7sRUZFDHW78hPcNH2SVmcF5VXfyDoMnWtHyMGHBpDyjxBpJXCMgfSrPpNZ2DTJb2BprgvmGT8zfG",
  "key11": "4WUx6NC592bumHW7MGuCyktbDCeFAqfaqU4YQqtxEmZMUbHcxHefnfAVEgcyHJUhiGFw6QgHXWJX5HKr6Tq2QBxU",
  "key12": "4Siv57oKD2uqQvm7gcPZSkWtVyAywhcR6NjGwQ2Kop5kDGHVrQ82HnNqujmw47E3xoQsFmcFUhjtAXsskifswWL6",
  "key13": "5ywKV9Fu2Nz5QkS5cgRFwHhLETFwpnZfrATbuZZTyZSNwmGFk3FHjmj5eJrNc9V89NnNFycfgL6nQ7xGsYrfCCvU",
  "key14": "2rQohx1tdt5i819KVWAZ4ZAbpykfLLectPMatimRGdqRFoDar5EpSLChJikLuAJsdpePa2MAbwz3YqMyDcBhmkG6",
  "key15": "H5sFjVnBgAKkRFoT7jkkZ8ECS5T8WDjvLUyrUDyT8Fc8D15i91ZGR1Cpxw7VAevJuu8k3BiKBTLXGJSyCLNBQc6",
  "key16": "2SsjeoXLk5Sjx8KFxwAGS4iD8Zww7x1pXgjdbBb4D1mgibkVYEhhQ2sNdJpyD3t8GwRNtu5WmYbHeE5jVuKNZbUS",
  "key17": "4HpS1hSKZEtYZZRSY9nfx7QYPHDMk3NkCwVWuLuFqwkTgHMeYAuS52gacifrPt9Yqae5TxN1mjZoEngiaZKEvxGP",
  "key18": "27zMDKPBiF4PJ8brSESoGCft4ZFVMYxnhmKZkQvAAVRaDZAAx3KmksytWYVHdRCXP8zRs7UwEtNZ5b1zGyMLGzAJ",
  "key19": "2ewSw63PaUvUyPr232NDwj9vkDbJXBBWy6qcS2vQhdxjRGkDfmVFmGcZLboCaF3dHMBA1ZRgCDEmmD4c9JZMaKpJ",
  "key20": "4s9piF9NX3cLe9k82WPS2jcW7AssHqLcMDLAiE2shWPXGCznoVUGksR8mJCzWzqg9PyxUk48nfcFZAi9uiRDMvBc",
  "key21": "3wu3WzUHjAGbSDUzgcbe83FFt1pci5trbQE6stR89tzjXhoNaaoDguWv1xfZtd4uEBFrrmCNVAuboga4GLsEijs3",
  "key22": "2VB7bCj7QZTZ1TBftYrRmvSQiYcvRCo5RphBogze3RrvR97RBVAkyTsQ7DboQoT52fTa7Thy4RodWQpHmjVqM5k7",
  "key23": "65esjRgFnXpEiUExkhDpQgRnU4fB2mEoPeXDx7oCf3UEAEMEY9WGpNJjLjivu3THbhxDM5bbsX2gpn5skHsD9ZiT",
  "key24": "2rj7MJQejEL6FdhTEfuoK9KfFPG8KWy8HS1H7bMKrTS9FcMYMj9mU6SetX2hHJX7ATqX5Z1YfUFt4dStKukE1f38",
  "key25": "3Hyin65R11mQnMCuSJcz968nqgiNoJhVGvkWopyPF1rrBnRunMCEX56ZFzsTRTSaD9GZLNs7dkVXeV2bhy33optW",
  "key26": "yGi4nHr8KgkM4bUb4785X9QZvW3Xx9hbap9FbVA5XRTQyAMgaQMg3fcob3pJ6zac1WgS7TJNMT18CGYD9ts2mNX",
  "key27": "T1rop4jpe8B1cC2oFo5F6KLq8EX6yddwnZatfoWTD9bs29GrzRCq1x3nsZR2n6oZa5c22zaigMZ6WJ3jK2BzZM6",
  "key28": "5Cv8AqYSMhpXM61D4JRMhiePt6tUsVLCKTEqbKYhXXeKBSxTruL5HcViaChkwrcADJm8E2WX8SFi1VbquAadzTZJ",
  "key29": "55zF4QpVGgHpBk2srkd8mDX67jSPDWm3FwgSaHTUsG6Ec8sRqgGkuZG7e1mStr3MrhRL2DwnrFfquenuVFs6HzXW",
  "key30": "349M1WuArMFpPpZrRFezwq2kZpmqXo1LLDDivy3TCosYpUJGj36pH3LP9ymx3wUtpivMJVcPngiCX4J5iP58BVvJ",
  "key31": "4tZKJ8hr74ika1TzLibQfQPer7jnXozAbMmxG4eQyExLXGzXj4DeMfBf44qZKg8wjUGNdkbVEumVEyMrnRTfqQ4j",
  "key32": "3H1f4euFQM5BZdZMZf4tDgSTtyt3ha2QXf1C4Hr3QUNQeo3kWMJFkQ1rQDRPDPXtQ4Rh2LdsWt7jSB2yumLDhBwu",
  "key33": "mxo5GsTKVUn1kwQ54b2WdSc6t3jsiD8XXP4gD19ep3nTKeKzjviMiJnn5GCb2xRn4u4Gr8Yq3xdm1exNLiCY8BA",
  "key34": "2kmBMsnnpW19M1bwFtoYbuWLFZpgjM5q33ZTFYYq8VnWVTJCfHyL3D5Ba6DnYCqzv3Kcbgy9hmwGmHVj5y9XCdhq",
  "key35": "4R9AaXLexbMyQ9YrYgTKpMLrRUF7xe6jErbcR1M6NsGhQuQcEUJ8J9NzueHyd6JFehkwZ8y2LwYzLwrUKwBBNU6x",
  "key36": "4fgWRcyMgn8MSfKxLYHFZAMEjcGTidVLj7krm4Zet9sJ2ALJBgsMbzDuqMSDho4xA7ooXrtV2rn8vvUmgT7grASJ",
  "key37": "3AgKcdU51oenTUeq23hveD4K8wLPSPViHCtLm3JhKtMyCiLMoecYCSuAmye5gAD3BjjzSEm7bq3qdBtJuV1Hd4hh",
  "key38": "5XVeKY6rXAkbZZjasnYP4bY9mYd6hFVD6oRgria6Z9UtmBHGsvsYcoWSyUXpXG7R5PW57MJfUtthBo1i3yKpj3Ue",
  "key39": "4y9dyPeof5wxqjXg9LfouNAhKWcdeW1fBVRVLuuCRAUGBAfC633ZALfQLNtnkp6ZAtd3aHF5modurshqTgxBoPec"
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
