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
    "5DyhnJxhkuYMZKcTz8rf8JHAJgDk4yY5aB9w68YJLXds6LzZvGc5wQbnLu9FLEyishdydALU2yejcXgCpLsaJiQj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5s4mga9hVkwPbyFf27Dv3iA8XHW9bi7SWaV8uB9KNUr1J7FtNTrD9p2MEWEKtnCRofEF6EEgHAnxCuYjh6WgctHQ",
  "key1": "45XPNgNwRZmiozBexXweCH7noXPSzCbotCigggMtELsgVVp5JwtBgy9yVVCGzp35ZoGZaPyFHPa4kuYWqzAXh62n",
  "key2": "NmZG14BnJYiCLKJWiovSeWxJtae2LrWMXu7GoU5ny47jGH1U72MLH3oC49Svd3YxErZgXhPr5g7mJiKSANErKXn",
  "key3": "2GWZnciJWBqfGfyUY1xeT5mVzuuquBv9ST6aqsBEZ6oS8cBMR137upai4XCtGF63ZESaiqayZPH56ongUFQ7Fo5t",
  "key4": "48rWsAeo2DS9LMkjBGdDzL7yvCncyvUwQqH36cMVUYWyk7oRCA9sWtYAsgEZGNYDbNtfFQ8BeyWzuaFU4kPQPWuc",
  "key5": "4X5SHgbEt9dSQKnE2XbXK3qNZ3AoKDkRdTxw9apMfyTEthR5kWVWEWJj388GF3Kr7ggcvqShCgmpyfy54LF4xA2x",
  "key6": "4vC1p37EtBa6PYbp46yGcbb9cv2NwXtDN4JshoVWCfpHzdXxDazXXLaU3vgwYV65Hd1FvibQepiUXicL6ciGHuMe",
  "key7": "2BECEMVfQscZtyDexcEHtMYyUG9h2bPK3LoZ8KzbqRvXzYVY3aNd4S4GPEa9ZwtPyM9f3hHYVwLpwN21WKYhGVgD",
  "key8": "5ntA8EE6rE1r4f9a2QaQfECj35oe6MibRLQfNDc8ELMmRjqDiNAq5zes5EVQq8jRXv6RUpraqnaszT9xiWug25Qc",
  "key9": "3Nt65fJTsvuFb25ZhPuiTt5yt9DBBGMYMA3a1fThgsH5v94MVg19n8HQqVMG3nc6xbaEmZfjG4SVF5uskVf4JaA6",
  "key10": "ocfEY8rvtpq1HFg18eCZVKAsxuQByT5EzZWbYRhQSSvbkYXASkWogfDwYbdbYCDnnN4ta3a6darPibGfajZJt3E",
  "key11": "SP7GYywiFC1EFihEFuivUXNSet6FqUVPbdaFc2NbpUZEaMcUwe2GHHSnSYghS78z2ZddGnp5tHaVgt53WonVt4k",
  "key12": "4CtNjtSkzKbLeRjRkpQaaLNrmj7EvQpa477fhvoSTruPDZCK6ZkBnPqouizAvTSx9Uii6nizP3Tyng8rDqALFm2t",
  "key13": "5Vq1YhgVqxoZAmH8sWRE5Dtydpphay85aVuyBXqDmvM7gA2kiHhmNuh156wCZ4vugXZxzQVqjceshCmF817k3FjD",
  "key14": "3svga21CLKFtASJjsFxcQqfUUU3jKi3wNxc7spRA15fZoHk2zxHxKMC43UQ7GmMtZiM5d3TJXv8eFE7DwCfaWGsj",
  "key15": "55iocVUejP5xQiwmEhY5Z63TPb27Y3wNNPZeUvaoUNAN25dV2MmjAugWgUd1Z3hqq51HpTzXi4B5DmurcUVaoR7W",
  "key16": "5Zh9ni7HAv2CFiH7mgZUbpAMVo31q8conjBwhpoiWUokVCXQMoU9TECFHUbYpbVE4uxtqCeNUh5wegfnLCBeKpmJ",
  "key17": "sfELfLTqjEDCfRCJ8QgyHW7iChUM9388PcBEA8FeC9XJkTfzJGoyjBfszDwFiHFgRausZAexhm8vGYjfY9sEcgE",
  "key18": "4rK7Yfo2rgbedfJkuj6mcrso2b9i3DVZSG4Sk3kxkwfxLHTvPczTy4NytXSku5tajvKpGgPn1bx8u9B4PDtXhkLp",
  "key19": "3eWKKCmCYQkADBrVT49xRERt852aWe68dpMAnwevQ736rNeqMqbbHc1EeJvF8dNfJb3rzcW8v3C4rXiTdHC5oMFY",
  "key20": "5zNi5MC6V6Bf1UnASrGvdshPzKoMkkXVJTH1njrTdWDxjojhcH2LBKkpCGtELLFsivTwy5Hwtw7pkpYpTQgrQRSH",
  "key21": "45jsjQuZc3KzPPWJTYWFnjhQ5vR5ptsVNVc9fYouUdbptf1LmDKKYsqPYpDea766JY9YsbrKGg3jA439hJdudiFr",
  "key22": "ue2rQL9wGQmMbmnmVgMfevTkrbGPfbc5WKpZivrJYQc9v8Q1AjSv3bbdy6izmVFmaSJTe1Qrk4MJwx3X5saqout",
  "key23": "3eMGHhPbvYpfWzChTKNGjiJi7BkET5KiLQcqE5BDLobJDBR4ZSEadj7yFeWwf56AnvgmDQhPynYjau8xhP1DHNii",
  "key24": "mbc7EGq4Bp3kRiZCdm13zcjgLrJ6p9YGNxDfvPYnynQLnaahW2TnWUbddxTt3FAevw7CjKfjbFQ18woroQAT8zZ",
  "key25": "5Y857sZ5FfaQsULbJdFsC2g9MeLqfugByRq7gvAUYH881Q9PdmrYDGoEAK5NR5vBNVGN487hDpwpxQDCNVwM1rxF",
  "key26": "3fkTFGvpNShMeTKkwAdCNU82ZteS36rWXJKQWNcGsERbkBVQbSw9iM7xVqLF4rBDDjxUsqGJ8Kv9yWzL64ZjJLoq",
  "key27": "2NQbQoF9CcnLs9fVBsNf3XYJeAshts4LaYSTwFoM7KTwBCufookD3N6xXAPqCwRc9DUZ2mkoBRGNUjo5h5Z7rJKK",
  "key28": "2h9PYqgNwsE1ZDsTD19pKL3oGZWfMUBCvfB7NV7mvBGhyKuGTLHU9mfeu2ZzRdtmqbKCoABgFhxb3Y9D14aoJuq4"
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
