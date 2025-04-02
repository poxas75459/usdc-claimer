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
    "3UKs2rwdMQ3garKEKqGAZiPVvekxg24ua97KEUVvaBY5zLx3BxEo5VT8shA5AYLGzzhN3Qij66GChwf8xCsmdb63"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HvmiSivMZq4E8ooRRZS2qRV3i8aj6J4zEuTiAToWetVBajdZkJHw2zNhetMrNdMsoBsx2gNBs5QRb9Xspv3KSzs",
  "key1": "5UQ1eYUHkLmsbT5e6ZewFeE8ekg3G2HSD54XS3pQUZ8t2Fk1EXtEscUU7Q4DbNs89AkTUHXFEq3d8zrNuw47jTt9",
  "key2": "3hFLyAcr1ggfGPfcqEAMUMEk8o5YY7CZ1Gm1o92VMu3uShdekeQrSBeDv7qK1V1JJaZX8xNwUnuY8Zs7MtfcrThy",
  "key3": "2gwh7FVP2PevXvSGZU74AHAHWsxUzxKzHcx1ikJwJBbfohLJA3WpwHo2kzZdWo3c9Kxx8XEGiHizUtGPkz63sAJn",
  "key4": "4uucrDMZZ1CBnUahzUSrR6r4BPfx7QL3F41rVHwWzX8cV9e8jAtwc2iPCnSDqKydx2YWivKPqrq2qdajb8P9mqGq",
  "key5": "5w7eGAa2XWJdUMnYVYj42Hm6dRfpDpZPnKha8GN7jSKN6J9ijip7WSo1t7VCTXWqjC2j827KcVEEFPBn9iSxuZCR",
  "key6": "5ybwJx9hs3vfbknQbXgnyw5qsb5s8SW7QFdwFjrwQEef1BvQkYAe66T5yKs3eBsQhcGJHKdzeJGVoqX9AKeYkEGU",
  "key7": "XvNqaJhWpSyJEPjvzNhVkeE8K3KcW9fVJRuiuvc84CZFL32satd81fmnsoqsfpLsevmKGvfbm7TfP1R4gQur4Xr",
  "key8": "cJSSDk6tCpVSe1zEY7a1eRVCyrqmwmwNcB1LYAEX8ihgNZvdhCfDpjJbagRA4KDf9viS7hN1zFyM8BiwPxBB2Rk",
  "key9": "Hqcst64S5EvoWhoysyS1hzXTurXspGwobYuUctuYejvEK46Mn5MMv8v6KKA3ZJ3qYeadqgWJuyXLS88SAfTK81v",
  "key10": "5Y8Reqhrmnj3ydMg82FCELyafTRcWvSVHuB89Sm8Lhk8aCHhGLsjsuTSZ7qkGx3T57jSqd6qfcAkLs77GyDD8hJF",
  "key11": "4xJDrHUsyUf7bwXqiCQmsPL6m8QfqKfYxjVgfiaLqx3cJJBcG2zdzRoTbQs4DzZvWeB6Z1sXe9845s27sGaTRs3x",
  "key12": "3pn3C12hETdd6orZWkfMUa1LvjjLxdmv3dcGqvyrmFjkQeBENZDG7tzv4Hxc3FoyR7bPyjwKYMQqE9zHNt9xktP",
  "key13": "2CEi5vpLXNZiZcLvF3FJKcLxvigh9UHH9rhWfRp2N29TsYMaP1xEwdpE4UbMnAYQSTnidZwe6s7GWRVr4pWC1kRG",
  "key14": "2XcYsbm5Hu3EjWMMemWfwwT7KfznuyvMUA2C6tT7zGbDv1GmJpqEqAZpMrkxzcVx1kRDVgyVFcQHetCJ1rKp1Dxd",
  "key15": "3AN6wtwNgBwEqJYd4M7m2i6jSRijf7scYiHomyUHYWFWFmiSVdRkc4evknrhUMaFYKg2BFCgFaoYx9crz3vwChhQ",
  "key16": "333cr3Q7JDupb99Rdzj96poDtzJ7vUZqEmHbnHDp2UrnXVa5GpR5HQBi4uJEYKrtbG2fF9k5KThrM7mdaFrHNDso",
  "key17": "5sWhmnAEgAkpGTnWdhm4a6zGhL5vqhT7hwLAncrVcBXPPFGzRzhf47SaF4UfnXqF8DmT5v4knDgh14FkNRx2BgDA",
  "key18": "27De7ZFdSZ8X4VLYdoiF2dB2fCU3E7Runen7oUcXx5xgmHjN5PHnNyAdkNVoRy6VzuMEsANhFpai478qfbBi9Afb",
  "key19": "3BuUuhmiNe7pUjvWLECLUGrhh1r9dhK68r6bQWT8SS75nbYCRFdGfFGBbE4sRfrZvN6N7kvZqazmbiJob8iUREMK",
  "key20": "5WQ93AQJ5GVoozG2NYpZDBP2MYoXvNJmWKArNxmz9PpzsCkN6dvDJcQ1T194U4rywai1pxTDLhBWvQoEefFXNzsR",
  "key21": "2MDAHr4bpwj5BHVPfJrQvFfihPYLEfRAXvdxwTcwCApALDm8nmKYnfwQzaymetUYPR859CfVX5JyYvHB9b1Q8uXu",
  "key22": "4b34vfKor7aSygLwk9WkUaGcDqyxS4TpAcKGMEYhctCp45FgisSbEqJSX9VPCo8xoAe6R2ixnwtoP1zXDWU6xorZ",
  "key23": "65osTKxqXTWbnE7YBvpwPJMxepMoz8jDUbkfWpBtsumvTXDoittdiL9V2g7vCNHCF2BE8GxaTvy5Fg4UXS4jbtEc",
  "key24": "2wX796QLoLXiUvNoqFZZDFKAqtUQfH7rt32n6sG383purvyee6WGysLyJkbMerRxTsUCGJ5YxJJzHQpvoSG1ev3k",
  "key25": "MhczxavqB6wTr14DiN3poWGtFuFVXKvMX66Tb35KxMVi8eCxoR1iVbTxaALh6NqzMbf3b3XP28u1arc6UMyYfhc",
  "key26": "5R4ZUBu9bx6ATaaKN82vA3n2NTCxL5ihrTTMCAn8BHGZnf2o4ZJqjkxpd2ibXNwHPL9znXY8Wz9q8xc4LWQ1C8ei",
  "key27": "59jvF9t1wF8bwvSMtAwUAheBuWn5CEJ52ky56mtXoGhVyUMPR1tGLzyJTav4uzWrQsNEN4WnQWQ6pfWMZvHjt9o",
  "key28": "3Ub1YTT6wEcZGAFZnGcF2qGAfMLdcPAYZfTyAxTCjtELEQ8utDstAcEB74cjja83idyDXoFPsbwe6SSXjB6XaqB1",
  "key29": "5ZF5Ekz7VsgD1QpBknNZMCXNJV9H4ALhLGNTuGiGetUee5F35DCWokYbASafsU1tVybbj6GJAtZL2BMpDu6cxJpK",
  "key30": "vTmopzJquttV88VKcM2CdJtPv8om7jRaMLEMrYzRppxGVLoNCoVTb5DbwQzM3RJchTz1tXuXPn8aiSR4C9PERwf",
  "key31": "2etT2q3qfwBfgogafiMdR9SXZLWK6NFT4T8Hq7D3jCYDMt2fJyVhN7Q5D81eoH5cvoAEM4pUPNzkMk6GcutRq9YW",
  "key32": "nFmdbQ6ZFw2UiYMU6XehtjvWTN6jRxThS7D5HPVEjJN5hAUWc68p5qsoF9aG2rZn5gDxybSyyKMjUgDHUqf3EyQ",
  "key33": "ZTvQPKZ7qY6G4y7SEciew6a3dJo51vP9pgL4qUCCMtwaGNErqtzdV6DrgQ5LjkiPiVPaQnAvJqLbxfjpxr9PxLs",
  "key34": "5EHSXSpWeyJdfKDULcauDiojCUBpYbjramstfUXF1BqKGwnfXngUxThBhzX8rCVHEZhfbdfajK4s4L4nTVVGnz4W",
  "key35": "4e2RaBe7375RhfULpTEXyW9NuUGqE5W5vxymJ1yig99oXt1YJDMZttzK5mwFjY6sXfqbMBJYk4o4MXA8FdoSXpgx",
  "key36": "VmPNUwmCUF2DwkuxEYMALixYMYvyQwUav1CeG99KXBXVd5JUfdCHyGuXtMPLELM75ZGtrBPecw6D8aJYGiN8Zx6",
  "key37": "66kDBfL6XhTxM7TCnrgasXUVk1dTsUVY1kE2Fjd6FWkxJeGUzWi8jvbPCgQYoXVi1ThVpfJ9CyUd58LZTajAD3GJ",
  "key38": "5KzQRLW6suhARe298RU3EKz18aaoLJ9Xv7jKMNKN1TF2D1PCKq7UEqciocpz4PAvzxdRo9Ai3E969tT1ib4ymjja",
  "key39": "5Gt2FpVVMyqQb8R95QHecGJThWKjPA3DxNHUEYcxRwQbhzK1iynT99SpQQe7qs147cFFsBLi2ceiLis6KPMyk9ST"
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
