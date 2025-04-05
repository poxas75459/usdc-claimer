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
    "3jkrTbjb18PcjAgaWyNXJTb5VpgSXT75xNkaHM74CjiVGqLospXERCzvacfgokZSzTGjhurxh5e6qghSGQCmhA78"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SAwHPBk8UnpjKC1bsqu8V4xv5bHJfjjUQN9VM7EHTJxRGFPBuvsDAdjKoBq885DJNvoyFFfQL2ySD6hvBQSoAUU",
  "key1": "51cU8oYBNBvtz9HknWAkBgppjcqiwTmre2kP8u4j5ALZLr5HdYHjCKcaecCvBSEyqbkrodt34ncYDmmmEinA6sJe",
  "key2": "66nLXs98uAU5QWA5pPmLGvPuk8R5feXtDK9SfuFcqMwzVF1euM5qNDggfDoXrLG5mvx9s8Eb4XvisNeTMdaRf6xZ",
  "key3": "4dvzU11w9D2YTvxT5VXRTPEDhaBTUmsofPeSZWVMWqAoQsR3GPvqPrM46FeGz71QJhNfYGcegbvWXLVv6Ag355L6",
  "key4": "38hN3AGAGKpfw4YDXjZM2f4b2mZJoQmqjpjTWQrzUquQR2ZntyN43PqcUwPSKk3X9e4M3zWN7mFVjwW4HnDQWsJY",
  "key5": "5YuhBSZa7bvcMhwykyg4wPomrVd7p6MWGJrrHCRWasi8XWoGiD7D7qn8jYMD7M6fk6QN641G9db45fSbrSDYCXYF",
  "key6": "rLL6feTWtFb5kwg9YtLPxMbDPJ437L4YM2Ch1uwWGmwc9AhA4G2op5jycokDhJW6AkbH26E3RwASJRXnLqjQB8n",
  "key7": "4bHgNfseR6twGjH2epRH5zHVLTwxTgWPbpQbX48TaBS9XJ7ub5XbHhKNdMiGAg8C2cy3KdGpF1BvqmEUxZ2W59xB",
  "key8": "3AAv4Eg92X6De9bTmwAsVLTqwPEPcdWorXR8Nn5qARu12WFodpozMJjJk2gU9wESRNtzYyVRrPFiCAk1AFzrxS3s",
  "key9": "2z4r2L1ZAVnwfjZkBZhWa5ExnWM2osTuzi5HLkYN2AMZdVb7kMZm9mXLLEM2brBPVH8aRTikhZ29SuH8DwVNnLUx",
  "key10": "Rn4gbXYnJtdb5DuSRTVp6H31D7AwLjYH8WkZTBdFpr6dEb9XovMtSdo6m6hGDapM3C3VoDqiYDkB5qyHB7Tqq9n",
  "key11": "65BvWz6MLmonzzBtKQCnFqEmB2KT95yWCLTov4wWnTRrX4sxxon9rM2HgFFLSsQunDCJHsVgo5urYNHggzRSA9K6",
  "key12": "34GBpQd7GmXPNCcwRBm8TJmQ8hL6TaUpVihLJKdsDiHjW4JyWdqfmNAgYef88Ze7JzJaGL5GWBAzaUgAUHBVAeUW",
  "key13": "X4uSMMS6K8WpnoUFv7qY4xKVfScURYLvq9xK4LoPAoDXxNQAM61NdufJiYHpiRSr3JBcqVNQgPkGypTTVcBP19t",
  "key14": "y9GTauxd6n9NagNEgnSLBcQcoNHjgtfWfL4EKLd1QVk8tDzq9GiWciYMNzBBCQbk8DeGbqiys5zMcWXSpVuvEUY",
  "key15": "4XeYznvU9Kwbhjbr3jjukHwcEcmgQGdCK2PxDbFB35QxDzG9QdszYKH2iPencwYPY5wAb61Ws7b83yMkArdQz9zU",
  "key16": "8qJjcjwFCjq6iTsCMFzH8vecxY9LfZDzgZ51KdBpAWfuHhXRBiggUHQYvbPfdWQ5oJgVMZ5PZrb4fz7DtUi5FRk",
  "key17": "66Wn8REj7pkC6UpSasRMx8itmomyZP2HC5cx4TKBtsTUmNaRovmMKtPdwj1e6CQLgrjCuuBqMSf2zMrJhT1YGBnS",
  "key18": "48zbqbWQZBrpF414j94zPBGTnaMaDBo6dsU6W4nSecpwCXHUXxqsAx6XJcPtuEkfR4goEFyD5QXa6Ug9cuqkv1mZ",
  "key19": "3TQc9PshTnwVh8rWAEV6moMC9swm19LtxfQvLF1byhzxLWK7Ay9QM9SVGJTGQ3NpGgKCQkLoSTyFrkNcMPMVGKZ",
  "key20": "3tYWrE6DZ3fqHHWqsGowSsXGhFsJ1HDxuAfPqWyvouPGBxKD5J4xeLKHvNkVULHR6K646iRD4y1Hvnjw1AKPyeLP",
  "key21": "3mU2mnPwpwxvKhPzXpfSsnSkeR8vzCkYmPXG5PYFxwFkL2GrNVStn8SrMF6pdi2T8bU32MMe3ktf6fcEs87z8XB8",
  "key22": "5bL7RFSnPwXGKu28yhTwLzbcXtBiKvQgktGJ2j4NHBK9KzuTRHYTDb9vKyfFxSVU6ipypuRaotqiJRdpC8zoj6fY",
  "key23": "vpuHhfcV6pCpuhHA1qdXcdoKzopWvuWhaajxdY7fSVZZgrRHUDA3ndhnEYhsfFdy1EwxqUNipUkXZXoAEYg8FmV",
  "key24": "3xPFZrGoN3nDnWd2Yjyqia9GXXSc2ehWGVABd7TDQXoLJujxjFKDUmBRmv94cJrtU2Yt6pckppbAftzoAmQLs1wM",
  "key25": "4UksV2NbKjcnpkJXm88wbfZWkk6vmsvmaf52VriDjxuEbRWJRB2bDVVdMJumqfCNq2TCNgpUcmVqanbuSvGS3CHE",
  "key26": "dRQzGepyCtSAM7JUsS8iEJiJCHFVsUa75DnbnatnW6RM5BuKVkTKdsYTaDgC7uo8om6sqScT7uckDCYVugLjSs7",
  "key27": "5Z6acK1C92Qv9fAWyWcAcFiw5amv6DkipqieRnjWapZuTWMa8LzcdT58z9p1jXeVowjEb8dBovN9sQ7J4DhtLsnQ",
  "key28": "3dDFuQnJCsj2DpHGkgHUBKnFzMywdJFqRHzuBTJ5e6jMc6z9SfaE5LpN1tycbCoH3azAxhvN8BxvHNkTQF3UvXuV",
  "key29": "Nb1ehesWxR6b8dD5drvPYJdT6xkkdF32NDLc5BEq3rzk3xA6Z7GsveguBA6nssP7pvrUsoVmhbuhvGVQWRSpsfk",
  "key30": "3BeL6NBxud5rCMo3KLqpZ8KbMavS6hkgZVac7NUpZZnPAbjaJRmMQoQrSSHWodry5zWWmEXT5fb2D7P3oxJmQTQ1",
  "key31": "3oCZJad4B5v78fzVv6Er6np5MXnpAorvoqCATVWASFpQjqquFfBmoxQhnxqrgQ4BSUpuU7WGtJzz1N85C5URoKXp",
  "key32": "2u6tGLFcczAdyqNiMjyf3kT1cCWApw9wvtUHQRWHQMw2UWQmARmUBRtJ2Ni7b5m3bQgni2GLeKqBhQSnbFKEvWpV",
  "key33": "Hxc9fLe8uTpxAfD1GMiB1dgmByJv2xrFZs339xHZYAsGqvJvDWGyXXFPfd7ubRyBpsui2rYebyWBr98r1SBhH2k",
  "key34": "pUVk5EXGmxHue7evkD4xHgnzSg7Lp6Rn3AvP9wZVmjBz2FzTMS4a9NXhMGuq1ogmyCCM9G5YanReTK1YXB6fZ7A",
  "key35": "4ZPSKqV36jmGSs38rSLcKjS2eD84bcPpJ1pz4oH9g7swPNvhMDXKErLoVNeTyZf9hPw1XiMHr1PtBPAkcWGSimzq",
  "key36": "44cCgzXjH3z4jtpBBewi9Jv7RHyTaG9rYcPkKwGkWhzAyNjUVjFyWUrGDbPYmNmwBrm5EhMZZhkJDpPXBN2iPYjj",
  "key37": "3cmcMf8d81CTV1xbobhc7CePbsKZYpavxsaY7LwQJBdNfZmFhrukmAPFe7FRcRLpnkRgXHwek4isLxgCbiArAhCT"
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
