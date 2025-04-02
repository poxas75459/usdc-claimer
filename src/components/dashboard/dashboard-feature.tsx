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
    "4NqYDDtXQjUS4Bx7uTwupVWh98m43Apr9G8fD4kDHkSZVj7iBCA68bUAk7g9WinmH6nMnM9vPxyveSwS7cvxkhEu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5MCQXKLHGJaYyaTtRNs3KCt9Cy6yqrNvbiePYqX7prvKPkZrcAgEtTjsLtAQgfE3Vr78KLafghYsK2Veee2oKuw9",
  "key1": "4LyjVZdxKibCpXGGo9pVkCh7y4kkFAMYWR42vEop2Yh1Qi6RsFEgx9zSsePZ3k7NEaxgmnh3qsqSqvi9Qhbp5cVn",
  "key2": "2AdMProPUsnDhNNgWDav5D7YMRUX9L9yw51Sz17pCe5vnaG87zaT1C86tA7L17jS13vW3PC1JMhjfw7hbovP9Lft",
  "key3": "6b1qSgkfcinSMVf4iERJ1pDB5SVqicucctpGyXr2vgAibRcmtjRMkmHrHWfZZjzcLtxureTdrkTyhYmVuRcpTb3",
  "key4": "3jUpdiub8DAdsAXgieMhdm3zeCast4gMfe8G72G5XdFEGmStAHuMCw5TqGCznTHHAzRYtYhKMd5RKsPfBAPgyMqg",
  "key5": "4fYTBkRwN7BQbVJAo2oAbnU8trgcthGaLW6jbdRUqcpwhNpeAaN367gcTQR1F5PGBaNXr1YsyeT1c5dgVSQSC7oP",
  "key6": "66N6M4jV7weukvpJH815qP5FgPfUxqH1hRMFCi8Kb3s6Kt3VP9Cgc5cty8weiKjF5mVCv7ZfYXhKU4uPuBqfinML",
  "key7": "2d1Bm5jjU6UpiuGG4R7RrisRz5AyPrCAuZgWpm7zw31k9fs4QvoWYXj91XH7MXYiGhgXxJQeeRAWV5XrYX1ewfk9",
  "key8": "3EX7Yz6EfwunDrtgqKbfs4XFXpWU1fd1wKb3aB9oRhEsNPt7ygDpSJEsGmsqPfcok2FZN428YvknmeMXmqqa9ygc",
  "key9": "2kS7AJzDdSAJ9K5chEZPe5zXMdYiGpzH3sU3KkNSkFWNhdXqvNHDmLBvg6Ftyg1Ny8HRMnRu3MoikdCjBjftAa1e",
  "key10": "4VWMcLv1toayKRuKceyvudUmLeF1p2GzADWcbiPtSj1hLThbfBSw4b6VKQYNLzd8JXBXd6gbEbJMvCBmfKiL6HNC",
  "key11": "5AoX2opyZZdbA1fdt8ogTwrHiXoYDsBT9HM6YNmxgfQvr9FijhUNzE6VDZhhXCELrfrKGwneKgw2LfSg7kPBQqCK",
  "key12": "2CkHf99A9JhRD8fXqLhtp4ygvDvetPCLZMbSCWfWiJQzAAyTFvs1qhNNUg7sYzwWxdL4e5KG7rBWguMd13XbGgEf",
  "key13": "3CSU6uwECvqgwCqYqkY6z56uZmoA1FAKiCo4u4dVitervaHrNQWXmPqyFwHXy8h3NJEXLmyMkoGphHAA9QUzZGM6",
  "key14": "22TePRdZva88vAiVy6SkFDcp7nw8ZRWBXKgeHP4aTeni4RCCf7UwzcnViqyypMbys6FkCVZxKD6S2x7futBMcRda",
  "key15": "43LT45v2Y16cTFewdhrnhhsS86r3XFwwFNc5sUHXzmxZLwvne94fp4uuJ1PLFo8DZhpZasSFDmvXdNwE5ievzpfW",
  "key16": "tZqaA9sitEdkjTb2Jn8Vd4gpcJEp7Kb6g7YDpmvPMZMxiZNodaDrAgtPpHPaMSAwn2Gwj662CHAhbHtPTdMhVdN",
  "key17": "48QWTFcaPoVFJ2UBxvbK6w2pCR2HeBwVmZrupseEMVestvuhPYjitK564vDqjrQvnUDqirRgT1QGBJbPCuqzHJEq",
  "key18": "57Tkb8uQSJKFB742NPyDr24FtAr63bzvVQ2czYZCrNz89SQi7hzoyVLVPGXgYn4wWKou7NDRgmNbi31c2KWfAL7f",
  "key19": "2sPsgZeKQuTNCGsuUamzJuCLDwseJSSQCgcayW1NiDwjYr3h5uqB6i9etWZpuB2yXCQ95Cwm9QJcQPWUUm75XYs9",
  "key20": "33Dm8jrnN2Hv2RxaWE83kpjzkFGroJoPvw6pSLqmeEWM9U2nLaGsGv37kvJ5xbz9WVhqDkQ4PyTDJHHB6J2znFfc",
  "key21": "3fSZMyHCSfxdzcivtqdq2KSoyKYYdyctuTxeFrNebS9mbpwjFDTpvHAjA9MzyX1gXKvrzKevn3mfM6x3BMRjoG8Q",
  "key22": "XiAhDcw9zNbF4jtPZ329GrZGzC9pDaPTBLWMDY1Jf8Z3XA5tAiWZmWCeQrGM82FpaVTmrVRuDE1wSFebekCwwfV",
  "key23": "5XcWNsurAb8Z9ZfgqwmfjFnPygUCG66NXXcC6CdZAeq5iPF1Pgs1at6gbaYW9SdyaykE8442wutbY3QtjhF92CJL",
  "key24": "24XLT3naJaeke1qW9K92yNc6XPfKJfP9AMWpZY69Za7C1F3wyqjZBYFUiYdSiiB5Y4e2x5a5ycAgPZc2XUZJVwob",
  "key25": "3xFhsxEFaTXG79M7NHGP5AxFqe2EKYBeG9SxQpPkSzGQjq7Eo3q9AyHYqmG38odn8BTFhLN6Uc9a2zpSXkGs5Sed",
  "key26": "57PKHTBy55ACUk4kRvntevCFAQ3Nq8t5EwrZBUM3NNTaQ5M9X8PRKqyPzoZZyWJFqNbqry4GPrvDDSHpmvsFSMuX",
  "key27": "5QqsBaDXuSxYEjZ4Kr2ups2mjK8q5589mUy8qRnXWGD29j3P4VRydoeCp2fULcyGDkfhmdYYTiNAGG4Br6tjN4PJ"
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
