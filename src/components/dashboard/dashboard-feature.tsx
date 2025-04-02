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
    "2rXGBj3DpXergF3TB1huBE45qLMhkSgRyVVe1zkgcdFze9h6GnKhCkykun7g4tKNQVtqkPgFg6cqQVwRPJ47movq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "M5QeCbTs2ZFnfowb11Qa6w8uP4NoVt4FcHeQctmoZSQgUikNQQAsxjhm88bosKEtM62uHWQamxoLTe14kbTzZMN",
  "key1": "5acRNcLLGs1dXbJAtumWYynJUjQLKTm7T7wtwTbP2a2fUrGLH5oiHTDaz5ESKeoL6wEuwoQSrjPJ4X3xcoPdpEuM",
  "key2": "3oofu3TYYsUwjYFBeUGRL9BSUbWetCo4nxkDw1DXShvqhkrN8ywXA3nB3HbPGanCjY43s5K9xrAgDn52wM2Sy7gz",
  "key3": "2CrZcGxR8Nop3oMMRojZ6o5gGB8wgUaKY4r9EHyqFbrguTDzs1uK6eb3C8HVTcjE19RLCDxob8VaGsXLdg69SYLg",
  "key4": "5RDjfLXLtc8DsNGTMVc5mS36KFp7zwEEzw272Vr71hrCVZCWwyBBK8kbWJVY74L6gyQSALx4b8GaNMzZbDcuC9sF",
  "key5": "4rBpvs1aNtTirCgRJarJaVu7pXzcPFiJFPZYuoxgA9CCYR9cUwYZeNTUxznGsDbaJUN54Fe55jehxT4JxodLr5p4",
  "key6": "4dp6Pdp6BAt259HtQqoXkvo8hEPgu8bDjUHrbiFnCKmY7SFC87ZstvdV2h5k3krdRaXKsxvC3g9Q5zDbnkS4Zf9Z",
  "key7": "3DZtri1ZrZhpSyuVD2Q2aDJbwu4kMiX8KET2PCGaBLChrvtHdFzVUL3FPZqqD4omTJq8VkJVZWRUGnMMdNX5VsHz",
  "key8": "3nhQoA5QrB1DVHGmz5sTBZCK121vFtA63qduiz8rE1FDbnfsSBooXRiJHJnnCZeDxQqEudP8VixekMCZz52V7vMk",
  "key9": "5vGV5pT3DpjnyA1WWcpcxxFaDk5HtVMHnMAsPPzuKBmoQc3xFgM7MTDzrFLprVJahpptkEPNSvJw4Nawi7smYAQ3",
  "key10": "rxFkKJtiG5FxFHJGudCE6tm1C1NroBNYn3kLAnjTV2REjWSHRWnufPzah39afByQCUkfqENKPi9hmsQY9hCJSKh",
  "key11": "jkRv74L4WBSBGXhWRNqt8hoTFcBqyQxaSWo1evPQFeDyx2pQG6ZcVTMW97eDR54Y5EhFR1Hx4FqwRBLqtZasyjd",
  "key12": "ezZ8Atcjx7YBoRreFxui1U8nLKLxXFRHaM4r4wRm7sTB8PwGMdG2vNDmeYQP7c89qyBct3yFiphY9q9jYLVsFmu",
  "key13": "EzaP5ppij6sWruimAfnQj1Q49vAuuGRdyLs7TbgmNzkDLg2U2aXYDAF1u6eskKigG3tmwGFUk3wVJfSjV6HVSFV",
  "key14": "2Fgn5JxY1GYK3UqZF5PYEJKMxKzjopFwrWLyiTzr4FBqaHAcVi2g27mvSWRmNyG9eYPHff5hWftvo6MXJyjMWrzY",
  "key15": "3gAAQgnBdw6w5hooQEE181y2P4T1S3gsGdS6YX73rssvPwVw89yVZrxbyZQDgWCMYJhGkZuYqEAXZCVbcoYVfjYA",
  "key16": "2Rmh4gFRZjy5j5s9jXeA8swLtTN2SxS6URGKQ6pcqmpFJoeP9e6rZiQU6uUpMn5eue2tYLL3FTqgfFmiMZ943EBd",
  "key17": "63KdyU67UfYuqhdo73bhrEtoFFkxozYzqUpBbr2uLWft2SGQvNYkp12cG5AFUHA4RgkkFwKqu9mV6aeU8uTGKSDz",
  "key18": "5MXRCRFhvir4fQAXSsECfUbD92vaqLh5wgc3rjQ9z2Hkk7wfnA1oVfzUPKVo74UZp3rVM3rjicFzb34z9uZgSZCX",
  "key19": "3P5TgshTvwixvySA5vu67KMLB3WHbuJ24GGZfMWcUQLkUM7D5Qt1bhSikfzCpSa3baTZzDpySWJcRcNz5dvaYBNx",
  "key20": "4icQXZuahwM9rmUZ57TbbjiDTo76sqzgoeP6jWDeG5CD4PRJV7DX6skkqKR8Uf7M7YuVfWo2v62xuPTZF6Nib7bF",
  "key21": "fK7UbMEkScdKfkgaN2wpax4ayaU1B8xHF7wJJo4kZceWkh1davpAXcz2pkZb1kXJHkPYm69qTCVLJdi63EqKbAe",
  "key22": "394ESZpbW4FY35fxgBq4TCLricPMisnqjHWpBeWgAbo7CniLJXVs5LvGp1YUN4hvjNoW1ogKXXEJjLmDPYrX8T9z",
  "key23": "4JAVWkkoD4f8vDbbmLuUwbkS4DXR28TfnpeG7R42py4fmfcGYBJKxaEbENmbyhyGtjdyDXsnL6MrfSXLA7TG3vj8",
  "key24": "4ezBkgg7vEj7YzURgVrvDdQXnsLFGdcmuffasRxNEffNE44PpCSY8nwjbABYXMoGmknTqTaHLqem4sMN9gbQg2Zc",
  "key25": "5bhraLxwkZc6GvsucCxkovufgWTXPJX2nJJAy8cC1WYRHbSfLHbGS5yPP5uaAayF52A1UJToCG3v83GeaiQR7hVE",
  "key26": "5cc8anQMzUn3u4xJDBhzbM71AkV8ycxvHsoaHkCCdqbZ5CzLGxRPBR56zgNTDySiuKrSyVEaDSBnWi8umhW4efe5",
  "key27": "2sXEQ9MTJo49tiFfaDGUEJpnyox6MNRudBK9KvGcgY7BRQDqZX1bhXGtdZmALjxukuD6UWAMi1h4ZLoACNgFsWkG"
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
