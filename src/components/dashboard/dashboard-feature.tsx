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
    "3qZ5tyF3RS5maGNSnjED3LKiqjz2UatAMASF1PUMyBjFvKdswonYSdKaZ57UCGGMN8GLX4gjs54zFbqC8BPzjg4K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33BpUdZKTQLZnzr8AHiWiC8doKv7Vxns4oBbgeVi33u3WrJ3iZi1fgUuchw5tLwrBiH1Mujzf7aSRAUBXrfzBBEJ",
  "key1": "3wEKjAH6KTk37BBgZrPRzDDuU2BbhCeRcYAKSEBjCR9PCwgx6PYTjpms2QC5Sxy4YnPsBHUYsiCAtoPuuMf2yFpV",
  "key2": "3Ptrhs4sjVk4w2zgDdphjvk1Ky2VrAAen3dN1HGW529kNG3hCd3g9ZVLSsPgWcsjVnYDCx9vPFmP235e7CVXcLbW",
  "key3": "3k9baJ33PDzDhqTcZZvXJH9WKa28AZk7a4sbVcEG9hqkr7KsHHdaykWe982isQ94mJuGQHfxELuCLiBB9nJyZkUH",
  "key4": "4Btk2g46KeWhQUjoYiwSicP4yQhb1X78fETGHyGeq65yamT3ZsdHVhqsgmrKkJ72ELRKqwFeRgzs7zweBXB4AqRj",
  "key5": "4Vi3ozokaMqq8uB97zyGfZFkMz5cuqdJHdHMNZqK9cMcuPsKkk48sQ1nYVZiew6jcRF6Ry7YYFyeb1UxCGBzB5Rs",
  "key6": "2P6y7hCptSvDvAEWG4gqFy435u3XyNF25PWa28nbbjbKUYLP9EUSnmNEA67aeETU8D39LMq5nT6cCWTFfLx8vuxY",
  "key7": "5PVQ82CQz5V9dS3uwVfUQzry54Sfn8aGK5u318g4oYR1DbbzPQURwpZ7a96DkXhbjZxbR3GWsrZnMXSBU1AqfXeu",
  "key8": "4fu4xZNYUhkMCowzsgCo6RYhnXNsDVkxbAAxniM3fioo76kt2yZPX9uMA8qE9ozLi2BjEHKyeK92pFhw7pTLG33n",
  "key9": "48a59YpahSXTBUUY8WESee27GFroSEKNqUiofuPVLYwAQfM2zJNS8UNcsFQnx5h7YvBSAWhHUHsQhLPnxmPXF3cU",
  "key10": "u8PhQkk6UkMUj8nzy2PEseGcT9BewLF3AwhwuhWqUiTiVdVSsuBazSCNoS9kV8ba3YX1h7Ppz7KHGU6pNaGXh9w",
  "key11": "5JonDJCjF9QPHZfi9bJwrs7di6gt1nvkY4YB8QqCzXA2wwWDHzYzpeFky4PN63bb9Kdquo61CPkuNGgp9Mbdvixd",
  "key12": "4xMBn1b1DbSzNUAJFVouxn7DQzAxLh2NadAazEFon853RNXfDyJnaawSJJ9setUKqxFnz2pmRAg9NggMb7tSRyjf",
  "key13": "v244UKhmr8V3Uvpj1rNhtyuzqXjXNSKVCmJFPsRVo16jKDo282CiQNxaAEqpK7r7aKntLLHBqjgzFG6AMnPgNVy",
  "key14": "3PWxg4Mo7uks88X7DVmYf7sUu3yjTC3HMXiJxZxC6amNsZpnH7BEZry8yiKWZiTUNEA1qBZwvMjmiX3nAaNFnAs3",
  "key15": "4aRose5VoRN89U7ZVzcXtAxgTEiaTSG7MgevFetMeHgfFKd98iedLmvCw5uiFZwT19TwoYJhtsM8zxniS3bpGBPn",
  "key16": "2qTxyYYC1kzy6RHtZJTf9Z2DqFg56AozqgNqxjX6MXqMXCcB3DLjpyVMidMdJfKjpy1uVsCBtU2jMQ3wC6F8nN9G",
  "key17": "NmwAMnxyNTxWvTWjPYbJo1B156DFR6dSzYX925wunRp4fxi8E53P7QJaAcn5GZ2GyUxkSABNDdUNyTehSKxAYc2",
  "key18": "2DdaKRVvuefkVLCdmBz6KqnceDqckvCc9UsVbMy9vwDWg196YCV8eGEmovdKKuRZb13KjdNG1zTqUYquUsD4Fzfd",
  "key19": "e66mTMXYpbRqR7t7fYRDiFvAdQHAHtpQGUp7oNsEcWr244JFbYpu1j86TkkMAL4LeQMtuzfV4q6T7cn85ZsUWPj",
  "key20": "6543e2UyzR5KjoZQcGB2upCBBihDCePxfMDKE3x3XgwotjtJQacgdrZagmNceJtDhgw9WdzUA1RwjEQ4VxPnoTk6",
  "key21": "4HeZSuLWNBGytA1WSNzooV3eiGmNp2xQve35nhiQTKUZ8zjLiZ4x6LNZ89UFABVeiqrBsjV5fNP7wKotJtt9vSNT",
  "key22": "3M3HLRbrnxzi2wf1nAUVNQRp6qqSYPtDHWEpZZK1sPvHLcV5YhVtaEjLRjvTQH9v5F9kT7BXNYJP9jsL4noeNuCn",
  "key23": "3LFLbmmnaY35Cwv9uVM5XdBFth2yqkYiPmC5Nn619xKfW6STfN1AZ8F8HJN765AXkvqXccAqYxs5eTJ39xuD2cZe",
  "key24": "2FUmKDKKFZ5YKKJZx3rqV2neQDT3ifNiPNDnPtiv5CsjxhS4yqnaxj7HXRZFBKsKFrKwkPNuspksQ373Z3gEj2jB",
  "key25": "59AgwRpaUhEhHQ1Fay4UAMKWgenzhJoBX6D4DscT9CLPFWsa7hQcV4FLVBVfkq3RVNZrLYXrDs2Lj3Y1u43j2zQD",
  "key26": "dPzeXtCbGTzuxkPrkYT975rSYvXbMCF9ReRE92zXnTSRXNaQyRsMSHuGyVt3DZs2YCco9UU95X3j6YU8B3ds8tQ",
  "key27": "5agBZ4WSsjZc8DXk1ptsBn85eT7CcDP7F7JRD5j5g9GNyDpfdz7G6QZpb5d4MaU3rH8MTb7dyA6dVkJaWv1Grggt",
  "key28": "RqbFDHi9VdAosry47Gn6PDt82zeE3aEgYqTfRKewHaVvZcjXC3SKD3rBgAf9rnD3XP453ncyvjyjuz3kxu7Hee8",
  "key29": "435dyZrJD3TLGG1b4uU5CT2yLB7B4acsdnyFbf4CqFsaHPJCrEkXBbVw9qcNrJFVDnzjfcQ2JApKd9Sid6eh8CyD",
  "key30": "38aYi9ejkRBjvMMRbNkRf97XRYAzLPNbYHVMjwSV1dm4gh3K3dL2ctThzC9k5NqA2zFXMEDpfv7KNBKnmpwfVMc3",
  "key31": "5RQcurtea4Umrc5eXUGsThXMmu24feoN6sjF5foCK5Xeu6c1VagBAngka4Kgehen7CN5qKqvstCPEAquvEscTX97",
  "key32": "3fxfSJtpunXB75GSyhjChNGuDQ1AaYvmdwZc6HHBXCU6DpuETUC9pRHhtRWVosq4Pp4MEJzbCTASJXsmwDzk72hr",
  "key33": "3Uz9D4knz682byNUTQpqyF1NLdn1qcja98KxfQaxVcEVziWod2XU9pKSaKrQCQDK2KSYr8XaBCjdiPwMwaWSECBA",
  "key34": "VTtyX37J5iTWvWANzkUcKzituAzzxKQ1uho28SzZX5777jVBBPzS3u7VS7F53tLaZcwUtHufUZppLG5X16f2iyg",
  "key35": "4TM1sMpcrvaQQsmjDsmqkTgUFq1dueCKk6mQ2ooHtiuD845mDXAGFEtbkmkEYHtn64G7ciJPUk3UjAy2TSCQrCiU",
  "key36": "3zVsaDT4zeZRj9yxjXrwFm1HB3A5rp1PXtccByaPo9nnQwHbNxJaMNQw3aYUcA9JVqCqtURvWinxMPJvnwRLVCpU",
  "key37": "2NZdmK2bKBLSnRracXfRxXY1oZq92zvHrZ7srFuMuqzLMNwvqmaXMaaKuCqYTGmJ9JcjkTPSQm6su2Sd7RjXtt27",
  "key38": "2rd8hd2QVdkRuTFSh1TPmiTrVKz9scpEAAkidpxrQYNh9DvMbrEy9UgFdjgwYYwr45zrWWmzCst1SjojWb2EFfVb",
  "key39": "5i3aZUqMwQKkin5ifWsnCRij1qQhi9y2VgTni1J83Ldd62mrh95Ro2xuYAN6iaGFfRQKKmt4jvD1aGmVQfNet55Y",
  "key40": "2bTVjfR4gcWucXt42DxhxQzH8ZJJbWxcDF3E3UqpZCc23DLyau4ouTfpYSkH53NDyn1XVNxCtaDdfw3EwSeSFieB",
  "key41": "5etKn2K4AgZ4xcsKHZcrGoTirqqbVfgftevQ1MBXbUDbmZKaop5LbSaNvzJLCUchkS4tCoqXHtbZNnTRw6oN4a6m"
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
