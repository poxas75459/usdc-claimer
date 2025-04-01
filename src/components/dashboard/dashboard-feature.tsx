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
    "3rt6TW53VHUTrLM6prNc2rLdsCsmK3U5oumtTeYkcJMW4jzUTBQPb4e4nMDpJ4vGfk2wcrcuiQGAtkVg8bmX78TY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "55ViREWEVXkEjWJeJhGH7CipezoFqSeauEfZeV8LsWjvKVc79m5DdZtubtaMo96xsNZ8xXAcbtazwJiVKBaUYhEB",
  "key1": "5ngHCCisGiek6YhjnMcoeA4GeWAKoGKFqTFY9tNuGADxNR9LJW8DLwuhA5Ea1S64YXvWYWbniV48YiV4XaF857Xy",
  "key2": "V1dP7jYzsvn3zNdQHL4ukdhGSyjhu7ra5TCwYGmibA7L1JR6zg3mJKxNjnTwEPuUizXzEy7ShwcudoFsfFsnrnx",
  "key3": "2aZDnG8CyzaPbFAzwxPRQ8iVw2TtPtWn3FaAMb9HV6srFyrHrG6xySD7cET8ge5yByMPaSpKikvHNXCcQKGq81Uc",
  "key4": "NSCFqmgctsBw7vCf36NTxzr7MHbDG42BA9sPtUfZZyjApdE2pCfTg7oAsDLZjcY64we495eUxHFacaCseGt1A8M",
  "key5": "ifbtLxhftqcNndPfj9DPzCnq8QoWRA18WGYnHKGgSiUC35BBGyiYXQeK7Lvt9QVEzAQwzL2SuF6mHivknMhC53g",
  "key6": "kPHh1ho4Z3JxfATPVqYY3ucmykZV9LCmtngZVDwWHax8SLqJCPKwBW7N49GYL2tLmq164HgNWQo1Dynxh5CnURu",
  "key7": "4WHDXkDNHWBVHo3i1bRtbt2ii5PdTrWYEqot1j71wCRmFXc26ZTiaqSrGnuRcXiK5XYUeYsjFoZQKSmTqKnpNLED",
  "key8": "53qSpmmP3bwcmry6fgcEQLaD5noejFfHPbax64BoHYhQpXgTYc6QGy8M79D7t9Gu2TcJPrfRwJoqwVWEkEFXguwz",
  "key9": "121JHLuHkhjzW2KSGJPQF6E5NWUbmJyjY8goVBdXo4FYDFBZxdnWBgs1sGFEsDfdUWwXAKFvZ66TW47W3YsXQotG",
  "key10": "YKra2riAG1kJCXrshF9ndaD8xkUZg45LJnjaRFdcniJyv1UHFZTWAs3kixw2j2R6rjKAAyrsdUMZfi7XAAHqkYi",
  "key11": "NXkwCou24n91enWPYgnofJN2vZApNHdt71EPsFMYTyxvgTCW3t8HfK4xiksCurjzV4yET2izadhRrQFTUkw8Hhj",
  "key12": "35YtCskZqkKYQQuhf1Yn6fBYpMDJ3ucKwDQWL59QpdaKkfdg2tWBBYrZvqrb5L8pvnzPm9o5YuJY3SSfbVXFbQJS",
  "key13": "FEcq5bQnvXmWzvtuZhZBUwCMbaTWumv8JwxGqzdX9acYJgGq6PA6j6GRAbJUEpfZAeqoGPDF1ChqbLTwHrTMf1u",
  "key14": "4feWGrP8o7gcmJYnUfMQmF3i7M4KH2pHctNK3wLesJrETuHfUTEBEYJQQ8rfc9a74mWunygLdgYBSXuhSSQNEcqA",
  "key15": "rsiLUL6cnBvqFXHuLbF6jriRHWH2MAdUtUonE2ESAj6WUbwUhcapiM9FGxdpNuUMLUEF4WY8m55YWe9D9h1ot48",
  "key16": "3KtGQYuqAXkyZMZzwEQaoLr3e7i3cH36xxF79bAtUHw7xTdNxH5EFRLpMcwHRfWyw9USk4984KM4AFFbABFrFYcG",
  "key17": "4Arjd74NRWpfKDCQi1xLVk1ZRDhgLiTnNbcqiXv1jsy4bDUrE3S7FPJbZwNNVe7BZaESnr3LS5PfwYCscwUFmXz",
  "key18": "4niL2ata5Nfj99ghn6xWpN3xeFZLefAPsoeQhok6zqjC4jTWLxCJ1hc5qn8MTxex5yjWUy1HD7JBCgbEq3qhV3Eg",
  "key19": "66XsdSZrz2VPqitvs7QNvXtAN8VWJCGjDFQT5tznzaV61txiNK9sbGXUWEFWvN3jfE7YrnEJeSzFWeGD1hg3zqx4",
  "key20": "4XwNWYLPV1kqMtrPkuTyVWXmFP1NVhJwvfXcPhpntpqANkFLNNAUujfoFGymwHRuiuPrG1AqNKcKkajc7TSAzhQH",
  "key21": "4SkeFpaheiNdoNEdVquHgS5MH6kp2PK9gUTDUNVWYza3cu2xr7rkCJKU8m8J9kVYoinPzswEwihb8pStsvfC5zSw",
  "key22": "WuEfAduGArMHdCp1Xj1CCKdmbF4vFnFJw7JrNJRmMhwaBbryXNif4px3StUHqSACXQB1DG1WtwNCfGsj5BqGvFk",
  "key23": "2Jc9G9FeqWxP67uNTYSygwA4sd55yR3vM1tReEESjyq4jBPbWu376vMaHYu14RpmyPxfwhmya9W5MUGJhFLu1v6h",
  "key24": "ggsqQ8mXVzC9fKA1tZn9HArJfkdmQvGCboqJfbRMfjwG6WB87ziGWEAEa9mXaQ3CXS4Bhwi3sTeAMQkHbT3joMC",
  "key25": "4VsEMRv1DShMLnHqqG99KEdnxjoaCWRNCrtBkZdBCTFveW9nqYcGyBqpT45QWg6LipmkGncda1aq3cPMYWADcw9t",
  "key26": "3FpQftaR8VkYBLT4CUbPDFeugStnV3z5BqDnmEe32Rkk475g52r31HBKkidh4s22CDLcg3D6m4rXFKLea6UXVyhE",
  "key27": "5NAr2CbWGJZbgG2TV3YeNVs93ZjL1696wQN7x9cp3cJ7dzQdwixV4urVsbNMYnnAuGbmGdZjY85Ccp655NWMcmec",
  "key28": "jbPSMJkY4eyTs6nrV7cyXkCcRgZT9Mm5K4P1LhCnFfvW1GJAU5pjQX8kWKP1j5MVSDvxoZTuteRMWRx1yEw3eZ8",
  "key29": "4g36gLd3qNk6pR6g7AMP61kkqnzg8zGdepht284JBhRGwh3dnsecEmjjfikQycBDPTYxb5eB2jzxGRCvV1EpwAuT",
  "key30": "2Dj72TeEAcYGGvAuVEbYgBFtEUM112zDDaPfn7X89ERKELU5BcLVhgQg6JsAph5oBcqjxgxYgdnFYDFxFuL9UCzD",
  "key31": "4E3pqke5YwHHMifwXvtoKRtx5gq4bCAYHFZXZ4DiYn1ovEySNEWeTEvwtNKGT8gNws9o3KCP5qR6vMvBbCfcw5q",
  "key32": "5teztCtAMVzASp4McTnjQ4LKRNzA1AXGWDcXTes6y343Cmyqw12K9cwbUA2iM46NEus2xfa4WgjkvG3G4DX847LU",
  "key33": "5UQ75mWvKNTTyTyQLv3VSrS6MQN6BoBygdah3QnhPYXKVzuu6c5e9dsun9348BnCevz6WCDxF8dmghEWQbbvibZi",
  "key34": "2LQqbkxyjJhDZfKwhrE4R6ZgoCEzdWfdcivWPkF4j2v8vwBkcf9XXAkbbyj827RJnK9b7qFNJdUKGwUXcioDwNmK",
  "key35": "Lr4YxeX67b6TiVC5nFsJ2rLfDVtEquiXarboNF3KH9xhk6cc5nPftxW5ssQUjjVAt5zLuxUrB7zwKFsH6WvkGdA",
  "key36": "3uytk5D8u2avipnRk1PGwx9dhFNDa3FSZ454p4xWRJy5rBd1rLfq5MWokx32uumdxaUkfDD56DWMEzXE82xGBGwk",
  "key37": "4FEYXhBy9e3ZUdm4JRRcpfDSmDWEa4CPtVcNNxgddRKEfpYPfc1ZuUWEancX6H464d6TBzNpviHCDu2V6qb7Hx9Q",
  "key38": "4gwnkhskVGiTHjy23YGpbBAHw351K1AK2J3QLUzuCS7WSx7EJbYnNhjyvV8Sj1m3Pj6FB9arWcEnsyvaTpDRuvtU",
  "key39": "5mJ7pcfk2eeVcgsGUqAntoe7z39W4ewnaX8whpZP5U7AKDTrR9H4hjkMeRg5JR4GNyvZVbyQN2ipnYM7eWfoq5bu",
  "key40": "5HB1AMhVc4yLqw8ouDG3sgNMTrV6Y3kspGwqCfMjrduNUbVa4QMTpBZ1VUUo3wPixWSJy44CSRgar5JVztBxxFGH",
  "key41": "RVLeDUQHPNvKvaD6SRhLmwAhzDNhV1CxvSSXpwEVfprFhpFUFinyJBDkDCYPXo2PvvkLVdr7VAcoi351Zza4duB",
  "key42": "ibZQzWgbZhFVmuGEA2nidB8KNTBegCm6QTaDnwSCuaFocZwmTUcTE9FQt2YZPPL9MADG71UVtSB4eqYmN112KZu",
  "key43": "4BErxe1uVq3QcfBac8C1VVe2rSA2QKSLm3rXDNrSN1rnDM1JvdUxhyPz8hUQ19M9WGGN2gGieMdyifkPCwbuogC7"
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
