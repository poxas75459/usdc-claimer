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
    "3WAtS5MUKyfGCbXQFyCeHju1Gfbdb9cCMHqufUWQTK7uLR1ZJAKQwMXBFtBpMLbDKaX88jawjqXSdNyx88n6NyJ4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3KF9kesEmGt9eKkxWKcr1mvpHDvDtuwNPNc4kDTrrFJyJFFxwjrfSafBbL5p8k8Tm9bVAEWrV94NEB5TzXKEAnyN",
  "key1": "5QCTZHez788Hcdyte7Jf7Ze2MG3dhtbePBB6uuSzeZzBR3uY4FCjov8nbFVjoKxw86CXcp1mhUc9BGFYzq7YG9o",
  "key2": "5RQKSqFqXhi9L3ZB3xnBH4KmxtLL5CtwBv6PYirnohaoWz33R83KabE2cJBjX3Yk9RcCaiD6jbyQ88beQxPy8dgy",
  "key3": "2gLcS1oKFt7yRmC7iWvh7BHjaQEdJrVfhsz6vcPNVbRz8EDSvaS29ZJXsu9VYoh7ShVzucamk2UStV4pWEpERj44",
  "key4": "2iHb2BVbViYpJDA5wukdyedaF6iuqFJHMUDkmCeMQseaGBGBfLHVQv9fm1XzAc6dHrywoHXAYpoCgSwXsfXedQpq",
  "key5": "593juNmKa3upqtg9FNiAzjBemBPPKpXcpXhaiBJDkPas7RPCm57FsVDDGfwYRu4j5byNarM6EL7xBPdZ393ezWc7",
  "key6": "V3HT6hD2H8Uge2gEuXPSaDCeqwz7sgaGLLEL16vpyXEJQdanmKJPK8r83zB4M7N1S2xMGxgqLtUAH6V8ExP3QkC",
  "key7": "3CbSqus85ycVoQ1rbkKge3WvYBLtNSyQaco93Mhy1NuS45E1AvRFkwpmgFKzNtxBnnGD7jKsaLTGi6bzqHFXvLWH",
  "key8": "2Ha3yfbLCT8hbJTPhwpzSrqtriCDxLN5FC2n4QgmJG9VKSmDUgPvwZdecXAvcNVGJr57PEZJRsCn6tLX1HMUcCVu",
  "key9": "2zL73haL4YY7Qv2snGYCxdSiAjAW7xzb6eLct13NPRnoBTiEHgp2DXB8A9LGyqCMqAoAUqUBGSJqxGzc2QiCndJH",
  "key10": "2UdCyEpPjZsjDjZZTYAR8r8yRf7UzgWvBQNq3WqXJhbsUwTZK98igjvHgkjTUvxHYsFLh7C6eo3BjveABZtK7puX",
  "key11": "3cEKYnW9ZvWUK69hYZbspsHwRmE7zgPV82EgtKAZqWebDjco1HdXf2bQbzoXPpG7sxt31Hf3VZvt9pNFZtaNy7b",
  "key12": "2jwmzgNNGtQDikD2D2vJ4HJzch7xStPYXmzecE8mY4VWFBtj2uTAqCqov88LPEUnkiTwDjTWJQXpwK2aWJuZTKTT",
  "key13": "4S42tULqKLY6crksn6beRbBzX9UDfdkbD8bLNELuXtSmMZx2sFXa56LigMUGKFh7Fuh2ZeuEKGVTUyvpyZ4m7YRG",
  "key14": "2akBBSbcH1GqxWb2AmsBBYrsL9TphQMLN5ByQrVVZDH73W6qiVVVEae2mSFJqex4EtvCYtwVnkpgeT9k8srmMBdB",
  "key15": "39GCFPYm4hqu7tDatTKP5tfXEidTEUiXytvGrJxNnBk8pZ2N5JgL4pxpfzR8jxz1Y4LXs3JHRuVkzdLQZJetomWR",
  "key16": "9Fpa2cYGa13YvkuWsfkr3CSseAj3vnukB29FKd4xgkTMPdjipJJ1QFxJhCr6Su9xrpnzq3s4R2UJGFkPUSBa8LS",
  "key17": "41tcDj5spd762DD5aBQ5dtapu7Rwa72pcnVXUmqGZcHYgcAxNKm7bxewG2i3656jAZKZjtpcWp5LM79zRcZ1e2py",
  "key18": "2ndaZyvCaAU7HXaBXXkERaXRKUCC3hQ72P8RueD93TysidCSVDB25CUMZLEreCgJdUXmNDsEC8we5ueJWr1NuM1c",
  "key19": "R2Zcsnh9HzvnY86S3Txvws8MQtiEcyeenMD2XsPN2ABA7zDvpo9VrYfijqK9FeU4hsAxVjcAcvZ6QPwpDCaSe9U",
  "key20": "2Paj7FCbhWoAhkhbTewmJGrnQtsa7gGTyVckrWigeVFayqDm4Bm5EyQwJLj9HiPzEAD7zsewcoFdW8GBymbPhDYY",
  "key21": "xXcUbzCwjqrk82JiqC5EQGgU9aSLHoUiBxWZYgUH67AeM9vT1kHyhhthPajvVqP8hDpttFmWShbuHWR46yVdmUf",
  "key22": "2rJmPMGdtaYqu9Z61QeqfRNgidmyYQMDqnVhz3K9mHVpHLMqgN9hTa46JYmFdC7mRUSzJET7PGympHLCSqWM5ojW",
  "key23": "2K7eKhRYTJzwgb9oEhQDYGxpqFo3iPszcmGZjFmRCxeC3qWFhqj9cMxnPx87Tp4wjGBifw5JCkFZDxPjc9QuMf2n",
  "key24": "27YNor39DRawC48SQ62NwR2n6qp3TcePCyuc3mwsnMjTiKpd5QmoFStNknE6kbVpQP444gVs8u9davo57TsMzXoe",
  "key25": "2r1ScHf5qyGsXvvnQnZWerQXz2QbzAVAWZLmGTeYRyVNnQLpDgzQPwDgs5CFmVP18sUPMwUAH2xDPjKVEC2X9Kef",
  "key26": "5sZx5c1hdVyXR7EdCA1Xk2r1xPHdF38Xqjkg1HMEuEpybc8vkGUMUpUJ11AktGyTh52PmLpHNkNmVRZzN4GnRHpY",
  "key27": "2CQVdLQJnQpb6zqoJHgYQv1UdtkAt5SG4ZuRFkxJ26PnADzuRbS64tsTFCQCxaDcg1KcgdLpfQAVaMbqeYSMr4Zc",
  "key28": "DK8XpLU255zJGAAy33D8KH7X7W1263Z7gook1dKwzgc6jU7HWb26AoXFcd4DJ8A8HDP61g7FisuS1LqdNiCq7zc",
  "key29": "2rkvUF6nQzpcLDRvhqYEw7oSVasFxNXK6XmEGX5mdrSH73LNrncDYPrdf2LNmhtumqdSg5fNrgeLqx6dzFq6F2xf",
  "key30": "45DsxrLcPvGyYXg3rLCF5m6dQUEcp9o8yNmD7G6BS7VUzp3rXMeS2vonELXeA3zgeGBniL1GdXFWRuhsZiHwHc97",
  "key31": "5pRPTT16N9YWBspx8Bvx8f1ZoeW9TXmxZHgh7iQEhRX9jgbBuVF5SkAP22orPbAq1vHC6mpxwA2E5TD6nrz97dBa",
  "key32": "jGEfmWQVS3F6cF1454gKqasGZqR4VcLPA4wiVXxPwGiFMvu38UhyQGo53qvC1DkgT3pDFq7B3tksYPXJNa7PmNY",
  "key33": "3GKTNVTga6Nyg9yGq8Gca5FfVueaQke2c8bv7vU2nBPdkCmtvGLbYXMKkZFfLsiQ2Z7fie9siRGdmEigTk6uvtp3",
  "key34": "2p1Bi5154UPZ8nMxFrYKa6bjw4rTomvMyhinwauVPbtGvkPHgd8vJorahH9y3yafcdqVxc6VaVTpPgbDyreEkYKg",
  "key35": "4jTSFjRkdoJs8skEH9z8X3dCLUVdvrSshcR1Sx4f1hTNfSpm6gACxu7uuXDLtt6cYBEUM7vCfdwRu2CM9s1iK7kQ"
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
