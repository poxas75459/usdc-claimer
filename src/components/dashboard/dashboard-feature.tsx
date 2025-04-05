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
    "4HhE6LrzUwARLqVDpUoL5897SLXd9v4qjPLuHLxxbthVRp4EDpoVKLFXTbGxyNBHkmjKo45hh1bFn8YooETqPv3x"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mxbbQ2iqaFfwdacyZkcMgur6XECsZKtkXJPpeg91aMzBnEenc4JZKEAjjLJqwqCs2LC5u2iCD9QtRe9j8aPaQGp",
  "key1": "4oeNVspeZd9oJFgwEynPQfZ2v8GMR6FptSvjSsVtoLGXkqbwLiiyX4AEEA9czQDhY9jQQmpzr8b1zp3BuSWq8VMQ",
  "key2": "56EK7SEiq2RxTKTaFZNq5eSva4hHCezaTu5cFMwe8CBNBRZwyeqg68JLxAx4htT1DEUNVcWdY519vWWNKBgUmKAf",
  "key3": "3FU2MXxtBe6pHq85yC9sZCoE9NJABApSm3ybDwkf5UmhMfb5dgPnsP9qchJDuoL61cdf9rU4LJDrCqt25jsmThji",
  "key4": "5TXTYDtiQwhwFTjcUkmP5wWbAvjXUMSPZVnpcjPYyP1VcnUmzpm1FLQNSLBHjsaja63xmp8Ey4kNuvknumDxrTJ3",
  "key5": "3DzDpfGbMhtEE6saLhYL4E9UGBScQshETC23wYGFfoNhdNZ3fECjzeXa5W5aWmqYuLkMZTAd3rB1ChgFFwmpqfUT",
  "key6": "3uHE1tYg5umyhkDQiE3oJs1KGhJmwvPSk8S79dTjKjJwabMCM2TjcoKtCbrA1MsCEJz7Sgb56xmovgHqbCmFRCs1",
  "key7": "5Fne6qZ27xY2a7ZZNd576z5UCBz3tViVDGj6LfKsTVmu3dtKEs4JhYg1wX5HQ5FMyHqy17wp4WpiWnaqBbw9f6uw",
  "key8": "644x9QkfFr7SwMcnt19yFJwmMeDrvD5T2jAiWFkeMEomGaKX22rsbXstHXR3Cxrko21Wd65Xgc58hi7Vneh4x7W6",
  "key9": "3LfxJ8T8qrLHqhXo3J5zwjyo1rxAWtJYGzvtGuhBpCD6qX3dLxYVZUmmvbKrJ6EpWSvWun9sDvEhwhV7ShcJTgTe",
  "key10": "4Lzxj7y6qwHarMUxLj1ZYoTyy6hZiwNjY2QmJFrNbMjmUKz87ur8T5VfX1UJTHNE1D6FsErFJKwKEJXPRzSJ2Vpq",
  "key11": "3cSxHMJJQSccwQorAJNcdJcxtbwgnBbZEUYiLdtjUtdWLCtDCXQYi3QEKpgGSw2uWQ2shMzM8sngXD6fKkZ6fb55",
  "key12": "pcn9Yukz6ZPJLdwrhrgdXXSvyKppxhVtFdoLvrxofFCe3qDzevJvxubbDxv6YnRZRdfjfgb8KwqNUCDhxrmr3sc",
  "key13": "2Bd4aBapcixeeP2GvxHWiqurzJTyaJchDsRBPHjc1P3sywNnaPC1dxBdNxbueQr1pTkBkrRxYS4XKBFbuWWDjjz4",
  "key14": "Z4FGg2otMJbBeMKss46VfKRiFc7owadhj4CV1xAL91HmHXx8zGb2ngBaGeLBNpzecgMVus6uhW7aDHtLx6rLZCb",
  "key15": "3ivMAcxF9PpTJKNFddqjrVBq69D5ppggZQ9se2ABX68hUp6g7xheLmxkBpTbz4q2MkoRA4YcLdW5XJcWrhpqYdp9",
  "key16": "2DfBrNatitEp1Nx6e4c2NtojezSDZQTSRRLqcdgHYiaGgBM2QySFH4ZZbJCAMLcivmCg3qvzsaVL8XAvywKJHEwf",
  "key17": "2NjoCVhREgqT3w9c3cYh5S4q9arQg5V1xiiuCJ4Gqa7o4j2ifFV5rvWx5P3rXumFShGa931RzKoUsu3jHvZBHkwB",
  "key18": "315ESEqPVmZkt41s5thr3eEf5iCue9jwgpQYSkUiv3s9yG8sBWgWU8avP54y7FyoVtHzCrfnrXiJggBsNvm65pSy",
  "key19": "4ri7xNtbPrhiBY99hDYHNvQ7D26yNucu2bnewEnjF2yXekSAAP7AGkrz5nSv2XiR7vcRYS2kGA23x6uB1aqQZ9DE",
  "key20": "5RRiL4Yua23V3BDmM96A6xSZ3XXU344iaHqxN8WvtkTMGnk1of6Lo62rB1L8XuCpwSCsDUg8tVvXr69J5Aktiqyg",
  "key21": "2AdvrukMFynCF62tgRTybD95frkN4HV5u74BfEKhXHADAQ9MrMBjCFCATbznDjWG9zxrpCWPT9b1jtmQLw7ci3qc",
  "key22": "4JNrf3s6bGCK7mqr7FZqm16ERxvYgJJW5xYrNLiAWKWTGkNHQLro7DQGPJToqqszVKoKD6FnqRZ98E7QhtTMXPxn",
  "key23": "3Epyf1Q5kiDbU42gAAQSrwUmzm3P2cSe92787kRtWwEjxucV6zw1pLU6BkYxtcP5uouFr1tFVmGk8ziDgj2iPZMr",
  "key24": "4wfAkuKwuU4rsH3QqnPoAcx5XRtbc1hfu2Js44XqSroxjUdT97R53Pb1pDAyVSdg4vrzMyYJg9P89mcvpvzoWbG7",
  "key25": "3S9VUrJLLjwaSAAExE1tCgP32JvrZ6KykzFFsHsM36zQW5PJb2nG7VNGSSwnGfNHfcd1EeazUTB7txXPxy6QdWiP",
  "key26": "4vfq3Py8GLMg7e1jYSagbmEZ5tDXi1Aq9fj9RWZbpZuGd7dL3wxRBP6c54Qq8K461oXHHvD6guK5SiUdvdUifzPT",
  "key27": "4LjmaLsXsBc1GCnGtQy1dftwfbQdqiYZbKsriHc6hF7RAv2QiXG7vqmTwjm3Vhpt14FPuepuvTEo9DDMe3oFryuG",
  "key28": "5c8QSqSZwrjQbe6JcRjxBjA3V4W79WRyoypoexwTByQXGfi2rUsjFugKB12o1Wq1tV465fkE6TZ5dKTZa8BQjVrh"
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
