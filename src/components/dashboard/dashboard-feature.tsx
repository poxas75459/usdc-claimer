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
    "2vr4jqNeMeJJYGB1vkw3BbwgM1LmgWsj8bLnhQcSLdPCkqhcQCwiW5w17MLQpXdgbkcJYg4bNKJCJ7aTEwtqjyx7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jipZQfbrVj6x7LawNmGpzcGXasw8W5U42HdGrZNubfLtBnHrkG7sd2RZkUBNDzoewba4eDVSiuKMBMMvd81FE3Z",
  "key1": "3he7gCimfxxDBg2XYQfKoNwBsYGhvcG5uKFHa3nCu5RwMQFswxD9yPVTohBt12h7oDDLKUJX7m2doQfTwqWdY4eU",
  "key2": "2sZEJCHqdtxStcTp4SqEWBUhRZtjMemPYpfMfY5MHnJRhrsTiYn4cppeqWqWPWhwTDNRpvrbjqG4MWGkpHwh15rE",
  "key3": "4E5AzKze3yasBUPazEFKSteTaatgNh67Gd5otXjwJ8CffmLdeH7XiRzEJuuynvE5wu7DjP2KwjjHoXuv9UpH3LBi",
  "key4": "5C6dLpgNxDko8cmwHZYBT84A49oMU8xWYL4q2ytidiopQYCok5WkwxShSbsTgxGipWNxGYSi3yH8yeWnfubVro9i",
  "key5": "3XajxScZ8FZxeNFaMEy7puZn1PyW8Q25htr2d6ZbwGkeb5ZBgmUhccJD6A4s586LnWVQ9YWKJ1unu4TsLVGCaoHv",
  "key6": "5nAwmXkDMT8VXmBphcNdnoLZoo2TecuMhw5hU5Rm5nMnitWMqXL4dEiCRauYjmtXknsgmt9p6xUaMkWGBPHNH6Sm",
  "key7": "6WNmRhJFHvr3JGCf1ZCpwpMnCtF7sCJX21HugnGtuWzXdAvPsNX3meYszME5jTVgiLX79C5q7wjyaUbEgzmhjGE",
  "key8": "3NBbp6K4FFz4o4ommgCVAwvV2sWEgHU6uPYPmvWDufADY3VAMSK377RwiDBvhfLc2drghbkdbRJKTJe5DvSw2a8C",
  "key9": "eKK5A3GDZkjPsjNdYeapAnzEFMcfKLwJx4f4jKw2qDwMarZVYhkCHvvCGqJNg7wgXioxLSyiP96ftaHj1YCchj2",
  "key10": "2Q9Hof5gaa7o58aZMH7Adn1AWixk3ZBhshMUY9ExLeduHCNuVjDfXLSdFAAgpvmN9vSC2yd1ZbugsghwytQgSyrS",
  "key11": "3nNShMmMcRA7m39tf5xG7ziCU8AqCkCNehomLDv3V6QHTHtHUZNDkv1GuV3Q3pqzkJ8fZPdHgoWsKV9PnKq9QzR2",
  "key12": "2pWBNzcfszbfDRefg5AHzpYeJKNyCnEkutNRXXqdbqc7BCBJSPcB17JdafNE3cyZkmjRRT3b6q5tNdYwaKwtS7pV",
  "key13": "3ePdSExaS7zeM7hm7BorsFKkeuxBBK1zAuFG3JCbU8tK5gLwkwzH8xznJKPEJtELwgfwDZ9LnLA7F3uKRkSQzhdP",
  "key14": "55KBjEoNP9UeiJ4ouTbHp1T2b9YThGLP7q2kch4Reyb8idNmUFeVEpDTShNdNQkSPbKXMZaMpxNJx52uwAtviCFu",
  "key15": "UP5erLt6aevDUkq7ffRrARLpwrnRZEg6hXdHKJwcxcbouhNmvyn1gDUh3VWz3pEFfnHZu9mDzkGjRWNweJ3biNJ",
  "key16": "4dzEF1vbTJfZhVeYMHE5pV8cG5Wgs9dNg2M7bSh9JgVS7yjuUyKCri1ePwmPsDrBsVp2VfMjDMFteaYLmv4LDDvT",
  "key17": "3uzyH9aJbqYLgr8v7vqMHKhFnrfKfs5D4LboJvSiUeQyL1dEcvE8geJdeJVp8KGVV4jjEXyogxUE9TP6Fzcvzq6G",
  "key18": "3MEBc6kXYTYE5CFyL3HqfpyDTyhzBdF2UgzStzdDYRMN5nNKDVk83xVFpoPxH86N37HsxGhDch5MacCpm4KSgF8H",
  "key19": "4vs7its8nytq2RxUvdRzaPp7d3d6KbDU9om4sdAPmRXb1jxkcvGwCfjoPsFhpFLjRv58bBX46u8mgsyeqsGPLNWU",
  "key20": "28VYqfqGLhSyWEqJUp4eTtw3wVmsrXAFpxUSPb7h2k4FHkwhkmjR5s1rY2vZnffiddsJNSQVNyqdUPWuZax9znpF",
  "key21": "28SMuKHTXGFCCKggoin1VzAevc4GkEZ8wp5BwoQ4g9SCPbgPq1RFCvCFkGEC3QMNQYrt16rDQjHnB5XEVdD1rtyj",
  "key22": "2kZcEd4ssRpd7XmbakcXUBUkrymFDfyqonkNNbwMn9kThA9APvufiJpb2FjwqmF3k5ENJwMW8tf7F5UXcGZDveVu",
  "key23": "TtmvMKpUxhE4paawK279yvgwW9DkNjnfRmnSRVE6Uxd6egNkY6qfGPWdns1hnS6zkpgY66ZDNYCbfKohFhU5KR1",
  "key24": "itoLB13pKie7ZjUaaSESDWZxQn9srqzuypygBUjBDFEAR1ik4VseWHS2zY9oVFaVjB8ZEKCkvxyjcqHHvvUh5Wy",
  "key25": "2SPsZdu36JuwzVrUjZYtmGpKmmg4Hus2jrbdSBfPVqZhFbw576zDXFzLstZacnZyTcjdT3auLm6jxBjMtWU3ihXX",
  "key26": "3yVc4dqqAi4FnDCyqkj3xa2cs24yYaepPXHQP3y5EXCmQRfutPt3TyurjUWobquknmUAaom516FKxD8hRsqGHexZ",
  "key27": "2PptKTi6uQZWmNaJWUodkZhZR9A6Yeb1xudVJGWoB5tDsPTCjgWY5nisSqTjpYHjYmGuST6UPWKTKVzKnt4b3Uwi",
  "key28": "2BYPAgkiJsBxqPZWGm9A2hHgBx8cd1o5aYVd2maBbTmpDaR2BJmEPfswnuZqVHuGBAkfa28B2eXdxC4eycnPJ41d",
  "key29": "2M2UoF8JkUKXq5p2SJm43CaQzTCSfj4cBqHQfCLM5fJkahEz3XAq2odafbc93r9b2jMwof14SQcaKxSB3hpuV5FJ",
  "key30": "4YewaZDEJSD5nQXmyJYHoszzzBJ2FsjFvBeMPo5R3cXSKTXFEHKFmFUYXTuMmYpsPNW4dvW4n3BLDmP4PTFaaq8j",
  "key31": "5mBRdQBySccP5maK2rCjMfuQD3NdsSNLLDomytzba8c3YhZv38CMBo4sP4RFQFdhPhRPLfRVvCt4DaVwYupwELj7",
  "key32": "2oGpUQZfwXVvASDSYzhmsbqrdVajWBywBQjMuGGGyM4piLr1nseNBCvAvPvPPyGxxFGg6jde1NorTzfNWSJDEJr2",
  "key33": "3XyhngUM4JvEMnergWeDGUYo71eyvEAeTrzdpQsQNRjtSZKJ8WgxtD6ov9Hrx8TBNpGDHwb2suKCuEp1WFJTvncY",
  "key34": "63rZ2dY5D4Qgr8B69RK1iE9QvN1GASTdZgHaeQ9z24rBa3Ecmmvfh6q4bWocUH1rAiyrP9ZT7DaDdjqbkHN7Hdq6",
  "key35": "57SfCtdoLzPJ2q49V1RpvG1d8FW3dpLCKSTBdbw822Pq4Kdk4e45GdQsDVmqNS4wBwMCerQWFFhxi6EctSyRXW3n",
  "key36": "25ZZtPeU9bHS7z3vENRAypGfoo7qrWu9uReGX2Chc43vF4euM6W47Jy3ALwXKSn6asoyyNmPjwUkqZHJzCogVLNE",
  "key37": "fCxJx6fM4E2tiSsty5zNnCKdFm4DsspkjWUzLEwo4Xm9hoRhFJX7AKc6UuyrQXKqXHc3Piq2XKXbsw7e2ptZyv7",
  "key38": "43htbWbTwVKHa9CnThcKn2n3BGybpAr6v4FaHwd2K2Gj7Pk9fNbYB1CNTp18YezhsNpV5BMJuvbpNZg6U4YjJ8Mq",
  "key39": "5kibmUqvGrdNvpGdj9y8p55LPNzXbLHCKeU1KQL9LebPUPNhSuCLTCM51zjKwvKnxJVJfYNUSKc88rgCVMZyJjXt",
  "key40": "4YFtuc3x2qg3hTdN4Sgv3Fs58besn2FAbbkRfvkckbDnNTX8oHLE42yFcFojHYv1M7vXufsBZJgCUifkMZrrzLVd",
  "key41": "5RZaaVAsVrEyj79cV3nBbtTHqMUfSqdA3q1GtFNnboe6hK8DuSNqTHRuBiuKQEBuvTpgfU4zZErVpg4trgRbJJdj",
  "key42": "mBCJU6MUkZseYgL826PAP7hFRsycHd6skPtetjxjK1R9mgGSd1HFMdwSNyxhSVfBxxri3TEsEhbdutMFuEW41cj",
  "key43": "62fWDgmF27uo88ca7i3odtXTvUvJeWfUgYceCeKbwkA6DVUPPp4ToTsCmkPT7tq74B4vAymUe2JTZEDeNiWhv6Nw",
  "key44": "57QyCDVVns8JsWAkZaAz3EWXPJguNSptyGz9jemsaQ3SHLedGrcbEwu5TPhReRumWiZdCWNWMg19s4GgBrZ1JoDT",
  "key45": "28ggUYnLR8oG4fuBVoo77naFRA6XXb2vYTAkFDfeMGWcFHVyvkzWwuiSUfB1D18mhHUUbU6qirExJx1pC1R9TZcS",
  "key46": "49g9TLy7iGCtiX2LjG4x5BqY8wS8W8d52CKFRH6RPTo9e5Fb64hifCfzAoNALqgmVi5hVMQv3irLASyizHWVupt",
  "key47": "5AL9dUnHPKvsQsXNxjuxCucKU6Xf7iXtxe2yj8jDA8JoGs4Tc8W981TAPLyNaSwG8k4GVneXpnBRa2MSyJTZX3zj",
  "key48": "4FwUriYcTaRs3nLakHcbnzhmAoEbbmFoVjzDdfXGfTpzkXhxMn44T1MZKVCc6kfBZH2dcbv4HHVEDYkCLE7ugbh3"
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
