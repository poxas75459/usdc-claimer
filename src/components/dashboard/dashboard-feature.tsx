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
    "8CTh29G74M6bdTtquB33r1osxHA4gb5ZGLD8oYJZBqH7efpeNf2CiPtSzxf5sbXRgTVJ3c2zs18oSHqKRrMz5K9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PwY3YCNyxDtvyQ9sjKnoimocbDnbNfRNJhK6pMbCiNwaYpZJDkHqdL72qXUjWLJW3Bec3qxHs8CUtDBM7ywNp9D",
  "key1": "5LrkVHQq1EB32aNRF47D5nzHmzUzYEJxvp38PHBr9yMRXyxbZuJDAZsEtriz2tWse2zkWtCEDxftKwbE4bA6hLYa",
  "key2": "3a2RYriyxFuwt9bZbk6PEa1hbkRQevZKJ24dzLPfY1BSuU6hTfQ1mh2bN3dUdcHfWQcJsAoFPeUsr8XmwPP8Ljxq",
  "key3": "126KxKTiX5Jw3LLFUo8ejeDH9vtS4758RuAcg2PQpQZijDpXxKDq3U99T46dTChSRgV6in6eMWkVLBYNff9RLAxq",
  "key4": "Xsr4f7REsLu6PTcp2dzc24XRbXhWHFwyYhND7qnjxM29tpdoW6tsnTR1NvWCTT27gN3yyWNeySSqpD4v96EQyH7",
  "key5": "5MC2X2MMFiuygVhPX8YELreJMLu4u1YG1UDyADhUGEdPwwUfEV2MeBybD5yWovxQhPoCFancNHvzKWwUxGaSEjEZ",
  "key6": "2aCNvQ7jMBHvvaqDZbu91iJjb8PyzN29HvVskWKAgkyERHgdF5TBwUPUcDZM4gV5wKvbXzCemyVQEsV7HKwLPpBk",
  "key7": "35hMsH6Y5BWmciLhfMbcP4ipoUJjeJBBkjRAFWNNabq4NFkKU8zTHLXLuL8KevMKhpzrinsnt2zQsAbwWYQdPnQg",
  "key8": "37JJSNqNewo7q1NN86iejdMaxBGp9Gp1nneb6RoUEpXzutJSt6ozyvp7XmUwYbbzjq9URmU5xFUKMjYQQASiChrm",
  "key9": "32zMWPgXsWoUaAhJQ42A933GVK7X3CZyDGB8khnveFzgZH2Nkq7mvhRY4T5mCGh3PcYy3f2UmhLdKyXUQoxFade5",
  "key10": "g7suuvbZN2fL7gJ5sWkLPYjTwWuoFUTcGAo17yXW4seaiA9rgcMzLdRYh1j96kFAgLvd2Uu9PBHiW74xvZaZBiH",
  "key11": "7oLcdwMh1U8expSb41S93W6zCivpQtcKr1HrohtWfaccPkcKeAuWa2EeCkiyRzKpufgzxVLFB4SiJeuNXQZRbGj",
  "key12": "4XFNVPvu5TEbXmfgMMnWaCBd37C2wniJUcPtCuZif1bnhApJZb8TzcD4mE6NXgTAnk4EdHwC5LVSRV5WecyPREEw",
  "key13": "2AzX1FuhzXYaYbmf7nSvQ9K6AtMQ8RDauz8byQqPqG9T1DTQCUTgHR4zXrbHy6ZcChF3i2NqtnLZfE4xBZerRNAQ",
  "key14": "wnAuJe4VAc8bntcAS5WkPPjWG6e3vkcuM6quCS61a4hAMTdx9w5p8z5wgR8b9V2VMsuoG4TyYVupCdn5k8Gj9So",
  "key15": "4xZbUnAgYrQXbBzVtxv6XrKtFR5x4nPh2mhbAy4xswEpRZJ6TEV9ktTtDaxem3C9RzXq4qKnb8pPi3EREDgEgzCu",
  "key16": "5QseTacnVbnCNZwhZXEaQ6xsJapyUNMDwdPKgnBMVkvz2gJ4PiDM9pRoSD5Ur5DT9pRo4n8SH5P6Fd2yCFiPcE3b",
  "key17": "3LZfLLRTbjRgezD6qmHSm1WAi6AGFu5UgksKo6XHwcUq7RNDJmfLyut4JLY9ZpjbeQVxATFgnmA3ycuuHtwBmwSF",
  "key18": "4dorUzS4eeD36FBsuU4RwwpWWrNxn6KZH6wctr5Pdh5r7fBp9YoJ8hjFE3jv798j4VNkvJTysUbc2piDWxbFVSRK",
  "key19": "4uMKbPFPWtRfNBa9PwLQpi3eKRRHRC4s2TbTD2G9vhTRS16yKQ6bzcFhmJPUutb2Nbp95ciiotcQ3o2dyRtwNzdx",
  "key20": "246VRiNcVkBCRe47srAtqboMg4sLAA33afjENqMgfGbCGh27RzyXkUg7ujtAzXRQtiBjyw6sS85jRYGt9zeaWvTQ",
  "key21": "26BY6BhAo1uwcmDV6q6XUVBHDSwxdeXqVmvowHSCNmvF8sqqahz7cBW1TVq4Eg6YmmycucjHFsrZRU4BZY2AXQms",
  "key22": "39UwrHkZnzuRd17M9XzM6sJP9J3imV77xvAPWuX2AmYWn7rMHRuwj89UGM55RTH3GY2ARH2vCPNNVxbQJDTYWnxq",
  "key23": "4XbsgcxmdvTtqB8s62u8JL1E9bKP16hfzqiDXG1wFtjNxLQ4VTspsKZnTwjNZ6ij69BJKSGdFFatPBQSw9eGpyYF",
  "key24": "5acmcxsgqJ8cZs8cuau2inF8aQBE7CS1MLi4o1B6mQkEUWnfHfZj5EoSyPwZysTpfnZK3DDy2xvW3S4BePoeo36x"
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
