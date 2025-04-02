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
    "5KWA6dJMjkqyNWLiiE1T7mCNErBXFMxEm9Po7XXMW9EdcUatUyTzbFYo19GXStNpYGKdL6qzd9tUTTj8ZosHG72Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ijLVrB6MgtQsP2brw9SBCiMKbrKfFkmbLe7UwJxCq8qBBGHRNM1sfBuH4ipB148Fxsz2QFLBQkAuoqrgEZApcPG",
  "key1": "26rmNpWGPamXFX8DExDg2HHH8phNbUBCHXBqUurgFk56HqHckUGBEaLWmxJ3RMGNobJppudKDpPMPtHtdZuUTx8h",
  "key2": "2bDKyB9YgsKxZQJaupT3qW1kEtbc6a2fFCKRKLmGmHbjsaDT8NHGoJgK1H7PPMVAnobptLBbrNxkHpHoffeKHxt3",
  "key3": "5ryk31MQXvaHqPhdKytEn2yGWpXCRQuDnuGvJzxjK6Wee7xza29iHFrARhsAApMbBtRNKngSHqB8SG9RLptUGMW5",
  "key4": "5fyiKmP4f3U3Gw1F8efJatyTx6sqn8skkzsrMibMTZwqAGZVei8fC5x6ZzmBPtP3G3TtsoVKHA3uY5bV2cxCRfZT",
  "key5": "2hzB3ugnrNRaKj7W9kVm95KvpuJpkdgbwVEMMBmpwaS7FAdcrAgJvMKyDGMKPEHwY4VosaUgKNjoQyhDpnFbCqjq",
  "key6": "fmXTTYEMpE5AQAnXVvcy7pqpqcUoR1Hjh3nXGAXH8j9dBdb1PazrwtXupxn9KLNbVVq4p2JTWVeQh3ALzmMjfrs",
  "key7": "NhchvCrV1FM7BkAoxBcRBW39mGvyc1LnaTrFvsaN4BbZSg4RtcWohTz7H12cp8CzQKK6S3sA5m7AFc6FCMoLD6X",
  "key8": "3ExYRCA9hw1WdJndHX8yLY8hq8CFLV3ckMdxVXSoTpLgr6JE3ZhBeE6soXsUMDp8Q6X6MeVYPmN57yn22tkg9iYC",
  "key9": "3XyKyS9wZK83sfUiNZKj9HMWCdAjnxAaj5tC6Dsv97gC9HaPMGGk9scqeJpi6hsSB3Gfr7FCv7AEkxLG27FqL429",
  "key10": "2wc9cDKu1S7d5HguYXjM6Hizr1xz8SgGJqx9pQbPAP4sxfZMCDeBZkQR2SKrFxJJLn1NoKAas3cXdEK3rxUqgiMX",
  "key11": "3GwAJc2sM1YPMEftCaW6CiT24YFb7Kg2ZRh4rLFJjtwavCTz3CVmDTARon5ULPduzMdxXYVpewNknZFsvtuQMTvj",
  "key12": "3v8AjZdhXfbr8t3bfZVeL7d6z1Sfqwbsd5xhPtmthAT4yTZ5HhdzciUZNTsEQ97sazcc1pDafrT4AktV9hAnMntj",
  "key13": "3u332ewn4J1mFmvQ2d1afCa7vDX2XRn32ToU5GH4RtbMrdd9kBx6UpEhNeBPVaXiL4eWEGuY5LYRYUPnW47w96kd",
  "key14": "3Qp38Psu7SvKtjysCBiGPKHMQC3dz9tEEaWumqAZL1ZEkMyK3Ev6Kx6CKWqz9GnqUSZf7PoqFYJ1jj2qg8RWTJxP",
  "key15": "58TaikzVQQeN8no1N5urNYDKMxrtnjGc38idCPq8MjRZUyzcCPNzuNeekenfH7pCSu8ykUDta6HtgABedwA4WiR8",
  "key16": "4EuaZd1WNZ7JJoqP9d9syY76je7dHwV8m7oukDFL9UsTLwFScQdSvBNfnoNHuG2yA5hXhnz9xMBwWycC2THV6TaY",
  "key17": "GsLE1PCqevAFnfYTwRGcc3BzmjwQub2wh6ekCvuLDLabaXiVNvbDtZUihxXGNjC89MjgLmHfYT7KSnDBuzrDnJv",
  "key18": "2jBcBgjDmRyG8cD64deVrNT1Pzen84LsMzPc9Ya1VWxET31Sj6hNJNMKv7Gf2Wch5kfW4pviiZ36912tKSPrdyfB",
  "key19": "3hTVqVRDLWzeMSP3uExVNzV9dNBZDd85RtpkskrjNcRCEgMhMijJx2MtiQuqEsmDGAyJsy9Dv3ZBDTHfe71Lspw1",
  "key20": "Ps1hwysUMoyRFDsrRZH9tUUV6Qcj47FTqJ4tBLsDbUvBn7mQschrAn9RHt2EBDMBEwh8biwsXbhzyd67t23rEve",
  "key21": "d7pNY3Xr6Qzw6tpqGu5n8Vv7EoPTK4TStdHgPTjz5vp6nAWDfRGqEHwTV1UU6VLHpDkce92kZmh7AqaFRk2ezaA",
  "key22": "kEgMq29Sd1hGFDtmLxNRoTviwUjygtQ71YoYVfZWYxWBYyo6wnYJLzCsmZb9F5oY5mLW39vRaBLwnC1BSbr4f37",
  "key23": "nx3qjTRbGDdBr9cb6nHTz8PigmwFsjo67c2emuk8LYZhMTYZ8kfmFVMAuGfvRkRFqYKeRVQ9DXE8uPhV3tr4Sbv",
  "key24": "3sZ2mx9LZpUt5nJ1aLmCX1YFrH5UKV44uZLH5gCD1odpkzrRN2HU6iRxXDSi7fU55VMkCJhnKJLfWVJdnihxRUQG",
  "key25": "5raD55mQP6F13zDryzZHS3hsoj55TL4MQt4rpEtfbTpMxmmewZg9dSGnasZLSL1dcU32wPnhAvcgdPWxQ8GJS18o",
  "key26": "8p4DyWvHvhKqs2CQoAqRcBkgih4Bo2zHagGUoxDfmEThuPoUrUCFMeWQ7QRt9MLk4bBzwAoWuew7fQJnvudxXc2",
  "key27": "2DsjR3ZSazEjAhG13bmmxzrFrYmerhRwT7w6vZA2CX6z1KvyAF1DaTmUp5Fti8cJZ1N8xFipiGiKDzCAGwnQBST",
  "key28": "3xM1XvbvBSEYdw8ZoiAcXsEfqaHqjgtwAMbBcipHY1eLV4QJ5PJHeUWYbY6pwZXWPC9cawwGpMNM7ThZ9kGQPW9S",
  "key29": "2aNm54Yk2YB9X5uCX1RPiZph4XLRMisjRc8caDBkCGssi3hR4KHosF3QT3nHWvje1ojbnL3Dy7NqYX6H4QtNQdb9",
  "key30": "3ija4yHXRpULNAQUGRCqPEkB5VvA18h29Y9S8cFfTSH3hrTyhJHdwGJ5rPFxoTCmwVAJXBdBZJyczgsHcvLcRRsa",
  "key31": "KZFQbTzGApqMFuUm7jNMi9tcgyhYsUhjLowuWA3QxvAbS6u5JAiH62iea3PHV1enJPKh2AZyFGrB6EBzwcNNDEQ",
  "key32": "F6msHM9wvjiGLpvsim71nM9ZnD8QLa3MaY9p3rvdAKb5Q4zsYMm1wvhzN1pDJBSyksRqYcGyiDDZ14G8PccoxfS",
  "key33": "2zM1eM8xj24F8NBCUtKT7NG92TFY8jcnp2DnqkGGbzRTjkvTxcnrG61s5TfnaGHXibLSjYWTRfBWGP6iwKUXLg27",
  "key34": "4jPyQ3VJdf4stD87cSNHEDEAD7y2CGkVQhdxN4JScTrUpUePRT1xhbjWSCfdZ2q94bJgsNAMrNpsy26qMeBTkAzp"
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
