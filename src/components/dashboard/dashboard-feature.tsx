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
    "2LQMnzyTHzx37Yn6vwWHTapvtwmNrdU8CoQ9EDGBV4QEAJ4LJU8DFKsUtaUePU1r77fdVAC68MFCVbbBNbrQyKtc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2MSmHNfKB5DRjt4ueX1NV8iCuThZjebdUVewtCHrWHc8p1jJbfRSyR6JttQsbPbtbNAr1uoWszLsQjddaaUmx6Ph",
  "key1": "2uiUsEKyLr3B2DwjTf3HqaoNbHp8TqFPCbK5bhhc5Ei8wyXXNbNv3giHze2LGm6xbjN3iCdLgsBWwaiQ8ebznSSB",
  "key2": "45uA1C39D7cbaJUnWYEhDFf2XtX6QoMefzGxfqdyW2WrhY3jiZXbvmvqRFYtUgSWe7vvtCv8hdSBd5xWU6RY8kSv",
  "key3": "42gDNV924CCa6G4599SVD4gKfRsKNb4NLkUejGpJDYVRsnvAtKkWe2WnqEYGKifb7VDnWJKYue3GvSWL8bkuojuY",
  "key4": "us6RqEFXT3JPyuqHGnDHKGQYCCEcLf5ciP1QQeb6KezbfcXB89bFTVjs5HmzeiTpXSDs74MjwDz42rDo5P9tZwp",
  "key5": "4PHWyKVWxB4dbzoG5QEnZYdchHV2KccjgE9NbgE3s3ymEb938PWQxTpdGFoawpZ2Kmxei7t6bGYPavnabiEZxUWT",
  "key6": "37GF13t7Ndfr5MK6Cw1BMGhyh6pC53CDdifbGuMoxu9TAd5M43bZGB1CfYNbye3hjeqfUHJWJcrLtrUBqpimR8wU",
  "key7": "3G1d7R6uwkeKTqF9a8CJdb9LW2vuLLHeQQ4z997gitGYNidS3hLJ94eaLuv9qQzRBdgV8P4HuWVCAJsBoun1AAJu",
  "key8": "5qNS3yw2WWu4DmjuQS5CVj7RpgTKSTR7sanv8UF3J4ZcYoE6RK5RgTJx5HPiBk7DYPAwEwJUrptAjqBQbhNu7BtS",
  "key9": "5KjPfCs17eqkCEPT9ZLWrJm4e8iJ2PHhV9atR4Z7kQtmnUKxocX8RSRKnbi5f7YAM9f3LQY7X6BubN2NBHmAPN4s",
  "key10": "3dtfxdnN4jUp2AJwXdLU4Kx3pQ124h1RjaAxL9dPLsZXj4Z7FHNMPocNHxWAasRzCePGMcQuFJaYT4VHi7YMF7wy",
  "key11": "56SuMibwwkA44d3TECRHLRzheoMH7AAZ6Nfjtvj1avVjYCbFTqcTVAa2AXm3zD9VdcYRTxJwiXveyQJ5Uez6jW4B",
  "key12": "4i71tPkjQXNMTwtPLWizZTUdBKMZuodpLxVqqHcteM1QPGjKkrwttboHuGBkfVDHvMdFXQLXnQwft5V8mH8FewnN",
  "key13": "2wbc1eRComw4GosPEjUwfhdCQ7ikwGA3PwxYLzBH45QjjpJAzHSSMyMWqXygxfQwv1rah8hhxr3nHiTGSguUqxfm",
  "key14": "Z3FeUg1St3e3g7eXeKzB5fGFxqYFHcNmyUBm4xAdvuYa62miPQDMcQWnLXfJJyWAaaQc4a2o9rk4rev8Qm2MkSn",
  "key15": "3Gco7fSVi9CLdXphVe19NxU2wqCepHVfmrt433EnvYo6dNsiVZVto1dGiKCve7j2ZwUfeqUXgibe3YCqssQeez7L",
  "key16": "5KzdrSbT8dR3tfbzsuK31p7iRK6zgEoVxwJyeZfy64TPEhwtCi34K44uK99afD85CzJsBSwZeXMGfKzkWVQDCUQf",
  "key17": "3kYFaL3Nd6eFMEeELvsiaiVotANsGftJ677a84tfa1wpRGMfTs29XcLLHKe9u8EygeqCwWVcpMpBshQQQ7VcAucN",
  "key18": "2tH2rAAUtysT6PpPUvSzEnQFxEwySj3FCDnJmhg7NHRGyFLkWupw44J13h2ZSpSab4CRhySTPR432CvBv4Z5tiZc",
  "key19": "4cSon6ySSNmeXdp4FAbuoJFZUrh8Kk1NPFQBPsLuqJ77tuogvdjLQQXzjq2w4WGvXkJmPx6AE3cRvEpkTAPzhZ6j",
  "key20": "pwwh7zboaqJA9Z4K2D8DoHvBp1pL8DTP2h6nim7EdquL6WGK1m5nJbn4qsq1xHwA95yeZqjFkz6pGrHSQRL119a",
  "key21": "3k7FEsJF2fXHj3ojBF71CaC48gFEtM8dtj2HMxcNNF6kLZfzFyMLSM6Dd7NhALWvYnvtzodrV1ruMqPzj9BJs3Wv",
  "key22": "4NhhhpkR4BB7y6LBTroRekgsqTR381rhP6eKUbRFYTJg3UG7nns6rJ4mHY8LwpMx64UUmx2diteN53oueRmR77zU",
  "key23": "4VYpjtGTUok15uZxkk5P9GsMiorQETEPS7mFW2zcLdMj5dcx5AQV1qo2HhXW1tPMgxNv65v4L6LZWmCd4HArDroX",
  "key24": "5ybtxrzGpuM4im2tvbszj2jFmqDszCFbDBS98Dmp7TpmTj677t6gQa8tQUfrjiiGwiywJHnrr2bVRNij77uWAxTv",
  "key25": "47EEyjcd9eYoKBZGyXhxNAohMmd8J9KeviXBaCKyWczaQ8wtQ7xosuvt4J4UxDZk5jot1ys4ZLvr4HG8MKMfDc2d",
  "key26": "4QeFCMfWoAiHZxPGPa9u2DeWd6sAHhvAagBNDgo9iZDCRWry3nKYAnnYW5jUcoBk8soBrNiMy191dpW3Bx3oyv8c",
  "key27": "2gTkSRo2K5fxMpmUagYBWHCXEDSVDoYujNheNixjvtN7L5AYT4npw2ZookZV37Hvxes5DuMTY57rHWHB2e8Jhrsd",
  "key28": "5iFMhPc6hXEXNY4mmu5g3pcpvo6qPTrLXHsrLew1QHxHXYE9SnssSZW5rKDKzGy1McWobAowTfHoj1Ujt5Lujr2G",
  "key29": "w1xkHJvcDHkR9nWXg4wQ9pHiBnDUF2TQ2XYzxfwcCtCTfgzZ5EDiFXxc7vbAexvPfxkQdPWaJZfjXDvUbSuDPbj",
  "key30": "3Bj1C6QyFfmX9LauoVscYQmXxp9a8BgphoBghomrLaGYjpF4VPpbKpiKXkcGJ1cLDcsT59nHesoB1KbkZ6AzFdzZ"
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
