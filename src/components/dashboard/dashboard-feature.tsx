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
    "5yH7iyYeXT3uHmo1NxUsQ9d93Lp7vLFYwKLC64yj9MyeW7JCj7s2jxZKjq3mftDCxDkE6Dkw8wcnEmGRTuvjNS6K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "CSM3Waz8Akdh4fG49cs7CSsfkY7VTcKEgLWjZLU8fZdDzVx35Rh1bWNUV1VkVeirJHMsHxfsXEtREBarCM11Lxu",
  "key1": "5zUn6Fq9Vk1aeDErpZJ5Yw2GyGrYXzWFSxmqnf6QjEAdCm3HC8LWTZsSMVwiqkDqVah9361EFM8VqHgTM1fGNFfd",
  "key2": "5vkvDNFujfkEUhsW8T6uUJ8zD4ajz4TvRNEPC7XXuxA8LFUVijhn2HE9NecPx9Pi7B85XCTk8KVok94o1RJKirAz",
  "key3": "46rN36csg4xaiaDwuAo8zZsaLYVRQ391qTo9Dr3FvUXtHP4xXxW7NJPtZfE2rHM8NfhNkTuCndZVHbcCnT2WSRwR",
  "key4": "47zAkWrLc2DENAkPimo5MytkHhyK2EcpDqRc5XYs6eoYaVJdPoMnhgCbEWSEPxC6jb7tewE3C4m2BsVa38wXyfUo",
  "key5": "5EE5D3LT4kE3zBqwmb1gsxj3Ew5AsrY1RJpZE7dFGCZMTi7cE3xG7VwgC5n2nb228AUZVmUtHZPmmAVaq5iBxK4r",
  "key6": "kQVBKWGjg2PAjCHLWKGDtcbXXuVbY4mdzU4KUxgR6syvzTuenu2VKojJNcNVVi8aw3C9JcJnjGz82g2ubZgy9Ko",
  "key7": "4kHWjKXSFQPukxVqM3PW5CgP7wRw61VFBPwqUqnTi7tcmrEcY3FeHyADg8D8Jt44k5TwDRCLrvxT2KpkR2FcQ3NY",
  "key8": "47BanxGJ2bPP6pdbvqe4MvdPiNNHVSsG5vSzop92VC95kpSu7Zs1bwe2b3hMHGtmjZY7AZvqhtYbPnQQ5YXsNcbu",
  "key9": "5kHRLJ89eqt6iNpgTmUHiMaLdHdTFhtqLC1EdYjJieGGaway7YQdscii142CYZCD49hUi3xp4mbUwmfiCysLzpmy",
  "key10": "2DiRFpCRySZYZm5VQmp3Yz4om4EHkaYAe6gRRSWMYQEsuwDPptEq1Zphbte2bcpd2d3KUmmiEJAg2gzNx8F4nt8y",
  "key11": "5yV9SekN9j2nQhaxgKBaNQoF7oBYza6xTPcmRqzFLUmSVTJTxt2iqRNBEcM3yvJ7KjZ8wzAR6fwHSgXb5MXmVRyS",
  "key12": "2n9LMHSF7JYvqXJaVipEjpDbGvupasMJc9YNVf7UkPApe5MPJJeg3bBDNuVkf6ADR1TZ28wSBxdxPpB8bQD2MboP",
  "key13": "2BdvViZwx1btVH9AcDac8MrPUXZWTCVsmjvJN29nwxr7hQvEj6sbNPcZu6xg5XQr2r4cpZVM4un48ii91csoeEbv",
  "key14": "4ewZQHAX4Ht41uqhdCTV5dB1SaYLsWzU5SGUwKBMuGkyv4fDdh24zcMDfad7C2ha4cAxAvCgVCWrEJFheKeJD9Dz",
  "key15": "4wuyRq7AjGiNiQnX1fD8kwykupCzb8DP7oCcidWYJFaJrsUjyx9E7Co5dVRrw3XfnorEwiDtkVPiSj88AYunPmi7",
  "key16": "4zLEvkGvcWsp8fDcSFUHv4aLUXoRmKSpqdFKiEwdKCMS2D2mgdUZJAfayrDTBaL3Gi17vNxNEF6GBfA22sH5ASKF",
  "key17": "4BRTrc4F7NcQ69RbNBhdfupaFxXWm415PR1wmYYADBxtmqpkgkNbqJEzqFPdSmjepLsSwnpGwQxys2v7oQD717XU",
  "key18": "2Aktje8Hk3otXip1jtiNFgxMXPnQWnJgAhRKUBHTYSoNKEyU8g8uxkCbzqohVTBkzvd1VK4oNuhXqE6x1offmLAu",
  "key19": "DJZgRWyV3LXGMrodMMurc4WuMmnJzT56ECrWX5sHTjUvzKGeFs8GxT6Ea95DPb9qbvQvmY2pUvYa2BsMh5yv7eQ",
  "key20": "5BQ2b7qQC2DJveDUnZts3Bobi3ndkz57vpAyLWYzqSfiDRt8vnM8C1XDAYBitgTCvh6iDrTjkB9eRdTNHQPrYbiE",
  "key21": "21hmMHkaxnvtJfkn3Xoo8vgvqT3BgGfon6MAHjsotdXi14cyLxwD68ukVnpHU427i995J8mwAjCNY7P6ofWY8YQJ",
  "key22": "4kowJmMiaXkctSngqAK32UL28L1TEPzHSebTUs7wdLTzhnQYY9hZPzhFcdJ7YA3Wf7Cyq5T8QMTd7hMXdD4FmJZs",
  "key23": "4uYcEAAivdj5iDL8SnmuCaaHHj3vgqsH3ZKYPiVtMN3knbctHyZnChsBtE43QgNzHTNSGNCrWKWxS5UNKqCSqPha",
  "key24": "45ESchBodkabM5Xe9C6vdpe7AhL9p2vwkRJuh7vA8chBdeqR6bM4xMELxS9LYxWnqFhmfxiDuTCJ8aBiG6FQc3b5",
  "key25": "63N2cj8jTTzoJxTue4cEFEX6hciCxWSmjQ74PM5XxdJY6ACQ2LSxKnRMmXA2NMjKR5XkzrYnmtoswrEguV6WwEYh",
  "key26": "5nBd3eaGwbYebY99f6oNcc79JQJwC4inwVjab8XSaDw6869CvZzE7cnw5y2eF9pb5E2LvegQqpkDiEXzm8riL6jG",
  "key27": "4PsWYAbWyS3zbVnK39FdW8dir5kmvQT1kHsTkULoGN7pBAf1JXBrEGms8NwMRAgSh7XgBt2obN5K6DeNGTHQ4eF1",
  "key28": "3VR7ryh6ukLApdqSYZRMLvkaogAfE2Wm2UGbFnwaXCaJREyHrnBemHMfP799iXGLdd65QWKUpc5aebt21cxWQqUV",
  "key29": "5Luk4ZZKMRfCF9ZNKLff6vFmNZTYP1b1pWbFoSYQgfG5qPqMEA3swUCNgfUAJyGFYmT1mZoANHNgFqMU6me3vbaC",
  "key30": "4RTUr5gxbRSxRTmr1GCPW3GMuRgsDThxFDADss3R71X5LKgq2DtpsGHMYaG7sJYMuE7ufjVoVFTtnwFQAJWkdv3W",
  "key31": "21hkonGKrYeD2jwP3XWXwQ5uUrSYSPpTi11Eaogc4jQ3487mFELwAAfC8WRvDfEqkG8wvteRvewutzzdeTq5Ydq6",
  "key32": "4wj8GaBxQrbMYEznNyA2K1uPrxy6MfkRYLB224jfvLmBxkQUzCGGsntPXvLqi7w5aQ4FErrTRGCx8ZnACVs4eZiS",
  "key33": "g6hgQmA7EkP7xBvu8Nu1zQzdnpNMWg5j5epujMhxeEt4z6GExqUvwZhxUTQQDwHn8JjP93QE3xnGSEkd584RzJD",
  "key34": "jtqPu3eztX7b2YpA8ZfWtMSaYGvu6Zh6W51AQuw6eNuQyfVzijiX1bSLwSRY4DwUPo4rg67xFxzHyGh8o75RAgA",
  "key35": "3vNaG7YduDCr152qFwdVYTLRry8cgk28ieNxsBiobLuwxZx2YxmWqyLxeX16W8uLEydDEetNZYMjhmNzucUeGxQP",
  "key36": "PB2FqP1zh9B9J6gBE6ouumFQixFpy9F6QgN83thMt6psbKMiZjPUdLbeANv1ZkBit4dVAwpnk8ErxatnbTxeARq"
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
