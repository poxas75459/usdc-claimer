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
    "5MozzfV1az4s1na4N7J3icXJEkx6zqNmGeY8tiGVpXrN4mtYArurxy8vMxSXn3NnrU1oQ4NwAZwTTmHY1CaNMzEH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ztn9JHwdyEDXi7mfrU3kNRHNZkrnv6ySdjKae7sHR1U2ogLZR9zhfnhu64waoNtsYpA7DS6j2B2wznD3rK5eMT",
  "key1": "5tk2ZaCdycZB4ouMh3ruWZSG5rhMch5sVtMitXSg3BkS1B7MRv6hE5UJfG7Bu6NGpHZqniPp6Fv4Zun85roMBfbY",
  "key2": "5CucvQybUrABv7Kp1TE4pMrNaqw1HLJafgZLxoiSgVQsGHNu5XTCr6e3VyTLwUi1gHUx63D4KFyrKEYPBgPpbQ2K",
  "key3": "2wNRCN31bHWoMerATCFB9K45WpD1Q9yRcz43q3L357nFcYrhRR5Z1cCF9bVeLLeJ3zYZc6z66MwPmdbrDxiu1Vv",
  "key4": "4N5bGXepKXAVix35U4aATEnUu93SZqr8Fd3b4PDeXF9DPbNFnxktSVVzyvLqWJCt6i4YLKqytPt7kF2BjRTrmZgv",
  "key5": "56jr3dFz4WSi2nLJBpDWKr9FuHpnKDX4p4T9cf1Gu8o4s6k8ZG9PdWhDkWnmCDduk5XrUBrVJqEKLQNd6PRUQvYx",
  "key6": "2dGPJ4Y3NEVAnG464QvzP7RVVRf5Q6v3EXNqi7ebcBGEEKAuyJBeNWuKk1x32P7QiM6CrS5Pgy4TJZxqz5TZQScZ",
  "key7": "2QdBRnG1tWWktj6XxPjDyEWEx8y2zv5Fkhxh2qH6DhhyTrbFTy6ehmS1TsqEtaovme13UDK6oaMeK8jN2YzBnhjo",
  "key8": "4mEVaT7u23PuYQ18hJEh74yksTqZsuWwNGjuVi88a8niLcG95haeLs26jwmTK4DgzZhvwErCMK6n23FPMrPGGTq7",
  "key9": "2wGFyBZmb392vpXSxNqQiTWgsSnWHabbktWnkdYSbR12rcLNNGvn4wL4s9xvd8sSmiXAM27TGVB2pfvssX968yNR",
  "key10": "35s6oxJd6HxHAcVGYJewJh1Kmudmws3jydDVeT7FBvTeHdPL2LVi3A2U7fBWrV58jCKQyniYWk4jZmWACbggL56o",
  "key11": "Ufj4dVtdw5ipto8UihAsp2ECYE83SFaxzp1N2QKXiaJ9zXUoG7uMrJoDMfoBNe3svkJhAAVSPoMBBMfbNCYvsp7",
  "key12": "3ZJA4wduCGGoNh98muVvaPPNy7NamnufuTEZhJrFoDU8z9YN6hU1cinRjsrVsGgjNc3jngZixjffR9CuPYZeMruN",
  "key13": "5gNvVMF2y1hsdZkwDA1Fsemb6FbXia6KLR2fm3MKPXLaNWZvJNaYCvKwAHatpWGgVp7zyeSzBVWsTbxAFzxoNx7g",
  "key14": "LTKB7YEwekn4yyhcnkGG2R3PiPnAkfRddWm9sUN3WQsrYqNhRSPvBMiYku5DGgPkcGVHHv9vktDdTH1yp1vSjqV",
  "key15": "3vYRo46AKGqMa9TmpZ9x4pSzxDXej4Q2BBhoRnKE2tKW4nDyyrM8HuCiezWUsWGtQFwCW1sqsBA5pW3TBUYCbgbt",
  "key16": "64ZXY4Zg9LWbqAuakweQWkvCTCyFsCPqxgsGrJZ9124KYaKdiwzcpSVEVK79nzcKMbwcZNyUuY58U9vqQEp5C1Wy",
  "key17": "xEUFYc8C1CHP1LwziA6kfjJ4EfGf4XmumEyZ7RWQFbAdkgnbjP7iMbaZUfeJ4WpbyCwZZtf3EegTygqzqMdHx9R",
  "key18": "5e4QnWkuJPRAoQdNEKYEVDoRgU1hEQi8BHqi1MPvLgWvzsfkWVCbU4pLeLxigcHJvp1Ac16qZquKH4V2yZD1HNGn",
  "key19": "2FwJtrEhW1n572p2tkA6nrzmPfeyyFYSRxuV6CVwSVqkGGexwtsrUHQ4SCAaWXYj4tLkrKiJwgAF6mrgYYzLptKc",
  "key20": "2E1FyN8ZY4kEy5dUytSJa5SrU93bj6gQSyEbEDuXC4tuhoemtVaZ3wgJfeFjVCs5oAtjjfxLN9SUkVLns64v4zZF",
  "key21": "5S77XrbWR1CWtpD3NVnhbsVvEpDjW7U6uNXkaa2dbqFoCZco3kbS1H2BXa3Meg5moYKPVy1pw32JNv6zcndYq3pV",
  "key22": "ktEmVVNy1Yho8AnmW1fiPwuNGSuL6ZypHUoFPhbcQkYdxGEuxVepfjxCSEkHx84f32mH5nn9kPwrV4sd8BBx1rr",
  "key23": "5aGhqkfzv2sKmGfrpMxT5zfN44z5N9qyZNvX6qWTuoVV9PpaxLmjFjv9vWwBNy884S2WvxMwyk8o3JYcjYhaockt",
  "key24": "3rxgGp7XpJ4tpPbwbJxSpL3fHXnqh7k5ukeV8gwDJev6JAsDXGrtgemsHTXXStg2hE1Rm9aMGzbggLstqKnBwV6v",
  "key25": "49f6XubDqfWPhLXSuNYDWTrWSJgetESTxaWt8RwcNKdhShBSuANVpstUy1SbDGKogznuGeC4H2V3PtC1VeHX2oSr",
  "key26": "9bXDA2D3FYzXDH9Htiyrqy9ifcYHCinbP7ydqcmGFF6dJHCdx3hi4hdzw2mvnjhDchw2ai7uaeiYzmfm4Jn1WyE",
  "key27": "2omPDWhormbmPJff2ijPd6YB2RR4SPETSJ5dEsfXwhCqaifRWm9uF6V5mwsTe3oVTtj8E7etCiWLgx1bFDjtB13n"
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
