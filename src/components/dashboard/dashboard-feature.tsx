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
    "h7at8Ub4fb3rHtwR1KeX5Wru7KLuqx8iMN72uwgSXLRh2pn8hF4XMa4rsYbNxN2jddfjPqTaHyptN5Pqzxp7wGd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5cyWzyxmk3Yo7dnAL8Gda4qdkXu9MRSmFYUVxuxtEQT4kWe4vhZRVjMQagBCwQqqpuws3fvrqf4LpZ1kRQTKYnxm",
  "key1": "5ToPprnaCqLyXuzo1MgfCikNRrS2QZG8SJxdZk6S7vLrBWkkKSPFu62wTGnY3twRbbwcuHv9iwBYFN1xnfcF8jAc",
  "key2": "4QfTvmToeqki4wJCWdMdCicSsrhPHyMR4jDNNhM3CkQKim6P5nZsLrFpNGwNX5SC8J6TxMmo1oAcnDB6MJ6D3YSN",
  "key3": "5VBEALL58UoNF7gcUmYvGexrx1bdo1JYYAQwmVZ6QxFoDJrUFuhn4avrNJsMZNG6zXc65CTXPBn4RMQVGtPe5zhf",
  "key4": "5Jkx1a2eAd81a6P6EF2YxQ6sgdbgdTArNRFrBZBw8JUPjLBn5GVWVpGmMLG5bn8TLGSD32JxZgtMEeaRusVuDrt8",
  "key5": "YrpwyQDKG2izzxX93kDjRBU3qoXcXjdgCeKRRb4noYYQtiNhonyVjB4ZV6wA5tUCt2YFddTPCBakP5ae7FtzxzB",
  "key6": "5jkbwB2LH19x29MZ6FZ8ocVxJaEmUpSLpBkUbHrqESYTbLK8dv6LwrsWntgHFF458kGFeSWZnUkriZXLkuNMDGXu",
  "key7": "5AEo1dj3kdk4e6kZg2QAZCKoLTJC9teXeBgAHjAoKpQ6d8k1KpEr8wByXzFUAcHmGPw1Bu1hWx3mH65q2UbC5xko",
  "key8": "2BxVm1W4SfbMpFJaKBGMYDWGcMjkm5sqxtXMgNLQiCwgi1aJDB1G5QgcViqDVDP14cyoUs2MXFLwy8on4x1qgYZf",
  "key9": "3LkAk2XsdtGG6UKydxm2yMPLUEvgpjXvt8xWgtksPdwMgThntuYtnXxNSZNgwjzavxZeGGpmoBj1UAA4L8yAWD5Y",
  "key10": "4PhfyLzicYQp29Mhz2nitCeHD683owDftyZH2poyh4Gs2rupbKFs3Exc82sEtEpjtB8DWaXZ21LaGhCKD2Wx2KUL",
  "key11": "37g4jrYwKNdyDnArEfdN4xRmfXxfcVg74nPAWGeC49dK6zP9XnFiNmMnvHCfgBQMj7YNscYRLXWd8EuTtTQAsy5b",
  "key12": "5PEQK21MazkTVeX4Fe6mNyhpexqc2JMH3ZXt23NyvV3DeVxkQoXChspnno3hwkXpQ48eWy3UveGbniHrc6yDpBc1",
  "key13": "VkQtxqNYVnExvHHczy9sh261cu1VUCwyG3vXQpc2JH8McVUxuiDtCepXhmEusLdsRSU8GwNqcsM9zu4jX22DQCs",
  "key14": "46BaQUYdvawdBTor6phVvWaab5GiHdwbUru9f8PDsqDx3XtXv5hMCVSAEPFTwfVPi2Gcuqe5fvu1eQfMmcrBUCq",
  "key15": "5rHC1k6rFmfTtqZjLUqPwCBvSTg8nfnZBC6ugvJ96hJmA9T9VcaS5gnRwdTE8KBJ8TazeTTTjFzt3ynSB3AarfMn",
  "key16": "3CnhyARrYt1rAEqJXKqMNQJUakKC3xQJnFUVUMuwkcxZFFXj2aWwCvSNs4XjqSRZhG3f72AMUAs2eMHJ6ysk5zEu",
  "key17": "3T5H3Z1FfzP8igWxRpi5DKfvZrR14PSgMqSwHe1xZtRhrgBLdvvgAyBaZijdizT2bg2aAfVcouQEbt6wSzBp6HGy",
  "key18": "5rU5t8EXX8iTgxiqcVPVe1eJzJEkThny8X46crgZk8cR1GevhqEwjM2aCxv8tywchRnEgWVYmkMSWUr6Giovbdo4",
  "key19": "4NittLEaQRRcefqTFSVQCqY89CnVtEggztzytBLuAjfNZnAFFrUS4zSvzaGEpsyUvsnqnSjsPFC5UG4MiAydqfUm",
  "key20": "3wutvyZHmnecBHcy2EXAJet67wN1ZnqTRxgkFLeMv62boYJKPKULX1qjZdohGKVdEekc5knqnTV7MLUg8NCkN4Tz",
  "key21": "4SPL4nPKwf8FRqSZ7cKTUCEuyGpdby2ZE5yjB4VGpZbaVXzDJmP1bfLhBzmSoLRLca8W3ZwjUy8HPYMN4kETryqQ",
  "key22": "3qeBW6wM2VBhGRytJGt1M2WXYy2adLnHQKUbtdq2L8tAVdgniTkP7YNAes9voGBgXyKJxHsVsBw5iDmd1KVe85ap",
  "key23": "zAaZw6ZD1ti524HyeDRaWm7FWJwtyZmELy2iLDoTzqq9i6hbV1hdgLXRhWNUYM2fg2wVdiWWNYtsv2WAJEAHyuT",
  "key24": "238cTzFc99N3jkQ3toS1eDJy56bEh1cmHRiMPRzf8D9xRjcZWo52r9iQKNs3tugMTH8ZwE1fodR57VbK81kRcoNr",
  "key25": "3N5CdpTBvZptX66VaVdZN5Cw5EcGjkHxsvDYxAerMYueoD4dbFGbveip5GxjFtTpDwNcgKqNU948q7DxZjq2FE6y",
  "key26": "Ug5QjwkSbP7zxHxpUQgBjKx9pT4h1FByiFruRCSzfMygRBymxkpGdJPXdVhkJLrZ9yMdJ7ntdoLRT1Ng9VSG8zF",
  "key27": "5vQWLyT7ejHVxjN7RhMtyB6xRzW6MvmQU1h4aC9n7N56FHuBKb496P4cCxVPGfcp5fzg4cQW6TMKD1D4cimFZ7Mk",
  "key28": "3geMMaDbbXfMNXy6p9kgMD9zZgFYv1Dh9w8FmmMnmmzMKMtWmhiRG1TNg8uL2pPmtryf4zQQEBqwVw7uimybUQJ4",
  "key29": "2DcCgpMz15jZ9JoMJT7eBQuTMFweHREJaFsK82hnEvcSQv9WS42dm89RyeWrKUr7nb8oM6y9kb4A7pr2tsuCnBpD",
  "key30": "4PS57Q2Eeg7kgo9whb5Zq9b2syP1L9V9CxiJ52mha4jkMjxM1QyXhikzJ9f6WvAKdevrWuty3agv7PohRbwMsdRz",
  "key31": "4X6ox3erhBMisLfZij7N7R72fnRZbzQKK8UYPUcw6kTNUFUp31qzNYunTAKfobsB3hEA7yUYLHdQm645qkuYXEk5",
  "key32": "5f71sMmW2x92icCFurYbGUWYcVyCnAcdBGrGsUUbkmfuNsi7HC8FcoTUcXqmwteDJbtBHne4WCQ1NQzAMYg2GXT5",
  "key33": "523PKvDCvub7M1m2LTks2rGr7Y72BJN28XVTv3mbnE5gpnBQD9SNUHFhfvZT3UGibBoSzEwYTp1VM8V63jkGMN72",
  "key34": "3moHNmQZAt27E1PkNeyCEVD4ogiGQakkxueXPC6EAJmWSAhPP1vykBjYYQzgwZPmKNLQSNrbT7bKCoMpugb7eFzY",
  "key35": "3aLDstkhUrA43NWWqbh1MBWckPjTD7QLE9FWbeuZfYeQzyWjFqmz1wJq57PGZDt8bmwi1cUyrVMimiVrHU2cyGPG",
  "key36": "4anbTeMmyPpkbTTLHhfZpafmrW6oxYjuw4Pt6vauzWNCR7djBF1872gqy8drmKzoMubYNSjQeYQtBJWC4PmGhSXW"
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
