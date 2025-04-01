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
    "5SDFhEASkKo6deGpVc7VNi1zPB1WPSdDRvVCVjzUXLfn1SRBDV7Lpaeuy5yakxRD8K8r287CWyQzoCopoRsDqvRi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2nSS2dohwKe8obi5eU9TL6aUKrHtAAdMxGfFtLmuLFhg31QkyT7fRRW4v4j6LEbu5Z7frkVBTzGBPjk4pXR8iCfA",
  "key1": "4sGy5NxsoKJzuJRitydHEKqPhE1KGX2eW99QW8WNNg9GGZzeCBt7pBgo4T3PPDU64Hy1mzwkPEpfaxjrAqged8LL",
  "key2": "5r4VybYppqswYhzXKqqCHw4Wmc7oyCPqSgJchPKbx8Vjh4GzKRdEQA39q9qC8DkrobenWv6ofJufyNmboZ8ejJnA",
  "key3": "2w5wEKqDzjk1QE6Q6FK3rFFyTCRGSg8dUAUyksCS8zA3FkNx1R5s9H5AXX2kss22N9BdPAwU7D4Yc6ELzrNdaVTT",
  "key4": "3MbfL3v4VjnYEQcyHC9svQseKh5T1eqoUTjJncQX8VCfanuay7B36kVVbS1izexDD6uDB6Lm9GLBmYRxZ7XAG366",
  "key5": "4Dhx17vLfHXLXymBNY3X9sdbuGFyhacj1TU7i7FWZ2XZurhVd1sgZAH4xQAAKVAvk8we76fYTy1LDkJyZPsaekZN",
  "key6": "4yzfvqEUyhdcjxzitaHdcsKiYfZ7hsHTicHSfE8CRn9WUnD5rTKBMcdq5kzjrhwuvqjsmXe35u7ejyNTFPtpxhMQ",
  "key7": "4EegFVoJbv3CQ5xoDHCXNHX1R2eJYqiGxRUNitq4sTJx3mJ6cMfs5N7xBipQrXFULiv3hQ4y9tLV8S82k8HoqA2E",
  "key8": "mpWEMVN8matJnNBbPXuVRJisxHe6GdiZqdV1onsNDRbKycskWzStEuUmKxC37CTJidEoUyfaigwyxWQcYFxJf45",
  "key9": "2SdP3YCSkzGDu8USEMCqyUAGuekBckc9r6ggZ9aDpM87YFSxqebffvga8guyKw47goF7CiV4VYvJihduEngT8QEv",
  "key10": "LkS9EfpjDCjQZzV2fS4uPnv3MFAxnpV88SASYoLck9vr2pKQHAi6XciYK26igtm6CLtks5UJce95jEpZLVGgRWt",
  "key11": "VB8roUpeZeE64iGStuk8vKuKbwWEfr9Ty9TLoTvVC2VF52QK3JS8dJNkfAM6EVhrE6Nw5LPv1ZAZjta47N6Xdzb",
  "key12": "3a2XixKLzawMZZAzWAwkoaUr4ucH3G5DN1TXZg8x6TM4Q7BcWX9h8QKGxtJ4Phgm3XxQpdbotSpjoK3pPtXbovGi",
  "key13": "4SyTkNswCRXxj43u6Nei3sb7g67XwrNrvcbQBFcofktYJU7C2LJbLzQ7yhBvJFfxfuBNsJK1w7zmHMGaLZLTLAdf",
  "key14": "2qip25CJfFfzqfPSK1Xs7EDK4S4bfZ35aY5bgAPWTZZbhiZF3Z1JBoSST3TfKuNmJEmEX7ePQmJx3TgQVhoEnUm1",
  "key15": "67Q7RjycgmEQFo9pvH14o37XS3Dp7W3tdtLeq4PRHAMJeDEV4zZcEfpDaQ7ra2Pmb2XuwHA2VxeCkXJ69iQi8kiT",
  "key16": "4kx2En6eJ8vhrwUxtQTjCyi7MaY1HM7yYM5pRFeT8pM4KLwrATVmbxGpubBD1oUSLBu2gNA8avEamkZjSCx4MNZY",
  "key17": "5oE534P6KH866aA8nVuPjBVpvuzfuhP4yoADimDgvCRBwjkFC6euhPauqHRPwnEXJX7kWdE3SiJ6U47S99DPJty2",
  "key18": "4AABSi8yt4M9joyUxYDrQCuYwHsTNbh3AuMdqjLR2iJfxqeQ91bxxraSLHFYX7oDLpBq4pXfXBYmwrm3S3HbQ1aE",
  "key19": "2gANnzHBhkJr6QXnoDwSkFuVBJm6f5gMjNF5rm62KoSoA9SjC8ic5p6fNxq5Yeh298QXXUCQDSya9a3eCJL5MN9f",
  "key20": "iJDMcTAT1gbzSpet4TGMRnoZQFAuvVPQdUpnEtuZQkNw74X7iMSyRQXKaCGV4xme4pg52XfGoamNwg7w3KJ7Bek",
  "key21": "By5PDbDH1NvjBosgnD3NMHJAK8urhZDK4KNBWdmJ2DCpFnVB9nsnEcGYvoLUJvPwF4apgQDUKWX9JYBK387Lysj",
  "key22": "3MBqx9TdaQ2z1wBg3nFD8XZu4RX7t8zTPwgKCesrax58voCEbf91D9zKCQX7ujJPK9JzxmSawnFFPuGcgWds3WzU",
  "key23": "5q6dVdzHjUXGriAasSftHrrLxGMtK9sfC2QKSpBjPF9FTDeqJKjiBZTi8au6CqkJw34Cne8gzcbSLvTxBiciDv2B",
  "key24": "3DgzXWWVqv2E7EqijhFCfWJM7XQf7A5y6qkSjFah27sCBSpWNdm6d33gmjXLHa7mWQJW52TorP7xtpHkLvAMLg3Q",
  "key25": "5hjL1iRiRxqjpkGFKTriUsW9o1EcdoEmRXj6z3hjAy9zWoUnWB5brJgTNRfXcLfvRspZBzNEWX4T4jhseVmLA1ev",
  "key26": "25SF2v5x7YzmEsQJCMotaAV6FjVGSNif4GvaAgycuznTyTd1jYcjaq1zuPy3rWPKzsoAJG8aBCk9ie7kVn1X9Fqs",
  "key27": "jR9pGhVACiuebR5Z1qnPhA6sjtq7GdkewuD8upuNosHWzPHZF7kNwZaEZptgMXR2K5Qx1TMjECHg48qqx5LmicP",
  "key28": "649D2ZGApXancJgf2MtGG7cNmHQLKT1ku4jxVtTRhw1bHtfwbgeaE3a298XPYBhH1sejVSswJrtLjv11pDAyyAVx",
  "key29": "FbrKqtHUP2JqMTJYiByWRqJBdRZirKxhxZVNYvs2zviEYNozuC5GyzEWGfKyVLo6pGHKGABLHzY7x7y9n7Mj732",
  "key30": "3tUWToSReYTVzgQDYKQaMmBcVCjeeSuGajc8R5TMLkRL6QMbUAN7YcD1SxJQ8mwEbk7jH8MjyhYV3iMy39zLdeyY",
  "key31": "3dxDBMSdWsV31irzCku5mD2M8tYsnVJ12Mwf3kdE83upU6Zy7t4ps1tY4AGeHLaxHwjWLEeHsqGK2o3YS8yzaMh9",
  "key32": "SVMBcVpVgX6mcZQgKmzmZZDUzTDedca7FtiwXSn8GjxtwMRThk1DcfNQFKagComKKmBfKy242XDb1EgQjPCAhpT",
  "key33": "4wezLcx4Php3vLh2vJaUy8oxbnDPGdCggmkziyMds9DPZGRXwuGZDb1vWT83zQ9Cf92KVhSXtRnkVstAABEvn7BE",
  "key34": "4VE2rCwpUaQiqmpuk34ynNWWv5ZkCyKtJeNwdYYiaajjY1gTjcf8bLPsbXi1AiajmHYTZNot5ux5Y8e8XKieoR4j",
  "key35": "2eLKv8j7NtegJi8gtWpQLRPGM2xLd1gMQjPXVVC8CF96mJLwVwANN5xSm1Ay7FKsn7aVLgHi4ZJUQeXaqiLhNd6E",
  "key36": "2zSCxeH4iUXaur71AYEHCnMhjkTtFgu5Dx48iL68V7D6wsbLR2xZpLudZF7QDAuAkgLEFSnpZHKSJj9tH54asxSi",
  "key37": "aVadtPoHUhvH22qa8tfWJC2FpoeSUqj64G18LNeoGx3JJdDBwdmdCJ55FFzVQe2QxtgJGwufaWCen5Ma3veqqrm",
  "key38": "21hHsGwAMAkT2oSrMzHP84gAo9P1VYX9Lp6CVRekKaCrx6cgPdvEVumURBY1hDDD3Kjo2Gb9B5uooqsGEGfKwDTF",
  "key39": "ToMHV7Lg443CWiupCALxjyYmkCLZNfTViSByTLRQLX22x6AGJoRfDgLzhEyWppPVus5cGZ1Kut7b59TY5c3qSFy",
  "key40": "61oUHvixNx4DF24pzUug7hovUbPJS7BYW83wNhyqRGJMc5j8yAx39ujPysVavsjyECaMyx1WHb6r5WWM7bQ1SGCZ",
  "key41": "4RmKhcbX2jQXJxFByXwQmNdsqsAuz82Bket882W1bmp5VY17qzKdXBZopGp1xpP3ZtnwSXhBjky2NsmUJbQWC66V"
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
