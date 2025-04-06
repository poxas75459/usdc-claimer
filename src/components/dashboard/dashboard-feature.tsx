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
    "5n5fjW28QpGpQojvB6KRZcDTvwGETMs8fmqPj28zZr3BPSKjqTZNZStbJo2Jr89CCX3k7oneAVoY7gqFDCZqrx1A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3VKMbNsvU5KzgYW4qrV6yhzh8CV6tLWDeSfh5D3zBUmkFW1xGdjywxWg5aDTo3i6PQS6N6oP4FKe1dpWWzeX6GYQ",
  "key1": "5Yt1DP84pjyDPtgxgybeAvDzjE9WVvRiuMz8wtPAThDoavj1neFW65pjgXqJcu2kEuprQquESs8f68EoAKyDTZwt",
  "key2": "2NbNeskWPV56KjzYTLKs1JCtdHugf7DT1uQxh4uepDfY8fpKuCKEwUeffz2Fr9oZLkdRZbFdW9wV3T8qz1cHQXdo",
  "key3": "5XjaiRGNPoLwpnoavoEeEFEzUjAKNBKXrok2LQJybAbmEt4bcP83cgJHY3Ywon51PgtGZ9dSL6YrPXf2rG6HWWDi",
  "key4": "2HSsPUn3ipTPw3uBxSw2igGZgkabbRVyarLL4jGQgZDxUhbmVpafAj2rg8YLvEDkfdjioKjHWa3EShmMzuiKW7dC",
  "key5": "4vrhPLkiSSrfAfjZV9kGjPXdAL2JM6q2hUSYfmF7vqaUaWKgZxBseowXmeMu4v3xwPE5fRJmsmmrSRvD8BmySA5M",
  "key6": "3A266r9iPVB2LqDJvfVLGjrdDL8sGaxVro1m44g6KeyQKPsrUAwRJvug1D1NLweRGU5FDJz1Tc4qXu36SgkCnju4",
  "key7": "3aLwzPKg1tZy7h3XkqohjxuWBM1ncocDNYDbosjom58ZQFGDPGT76piJc3hc61TU6oeD6gRrZdQLJ8VQpMWN3eKd",
  "key8": "3HeexSiWxdFkQuatmGJXZexyDU4fLG8RozmKYsNuWsjr2Kzdkr61refAGftaurk64YPhHWUTZYs6UAhurSyTyAY3",
  "key9": "67LEHkNTQ9sYRNSuoffYjjrtVynjrnFGiNku7sbyyDXKVspEbP996dqtMhsmGbqA5mXsFGEGFuLLRcdtyXbA8Thm",
  "key10": "2T8Z5PdkkC5X7tFRj9X82yjpyzNmuAPd2Em4oaqYsNNKgF7GBTq7ekSVpALf8igaKCm4dfAoJcZHRFa5wEJVbMdW",
  "key11": "4XmrkFGJpkETRsdrkNk9gc9Tx7mUSjUCF5TLzm8tjCoYszHLaSubfKnXwq5V3aXwzLktk7eMaTABKHgdM9nQusw2",
  "key12": "NEX5xuaggUhgMq2ZmLeCkD5Qw7uyRJwVtUpZ4yEUG4jSKtDzzug58B9KwC6dAea8WanQVbvPHiwZZJx8GJMQENn",
  "key13": "vBCQBPWRo8HSgpnqdhkDibxLuR8PsxDSr68B2xhXSJS2gYo2CAeb6d9AE31NsxpdUnXz9wKqbAhNs2FcRbMESjJ",
  "key14": "3GwfSqU8CgQadakGNQFn8BibGJC87DYdCWTSn5mGy1FF9A4o1fMteKjTaryScXt1rFECziBSguuc1GcCjJQymtdY",
  "key15": "412rGNW6nJsFJPLGgv3HKaeMnoX8rXYapTa91E7LtJWsEeFYGqq9EhZXthnbQFjL1fkvroGJ9TSomY3epZHqZfx8",
  "key16": "3am2HCuc6pm7yw4V2nYFweNz3VNorAvdqUcrQnkMDzyX8H5oeqpwTQKpicpxnJWSUnZ7c88spgwBjQ6xcuHsgThp",
  "key17": "9DQJTDhm5ZCDrQ7NVtejcp4YmC8ELCWYvAAw7WBigpBXYfCuJCpBEtGpQKVpkRRtrXQaz8V39dbQQcq5o837nuF",
  "key18": "3jeiaV6gopLBtgRd3CmVfLa8pQzCDzkv914GwmTVQM17v2WkSYQj9jpZ4s8p8YzHDHMjUwZTJ2X2iDkoso4o8apb",
  "key19": "2pyiGzHNAQUL31oTW4y73z4bnVxrgdK8RnvaySmoAZaAj4ZWYRaUkxVZgtRmiiJgfxW5YtZBTcnpWdmk4tLbMKDo",
  "key20": "M21sZErSZGL4kZkjnd7jtoXoD54TtkFiA86AzB1Pa2ECArd4Sq6o7FYN8DcSCzjhxtnou1kJimX19eEKkdUox1W",
  "key21": "2yETog9y1PCv8uNLrobLPM6bdGDpGqHBxnVDn7JaWT6GQAENG97aNcFfqkweKexjmaEbvt6j3Q4XBzHvvchwyFD5",
  "key22": "3a1uCoSfg8taooHhhZcDWNVVrCogpF3Gzkeznerg9enkmZDD8WTcSNyfGAZiL5fGPacwgsxR8JGCXmH53utP8ej8",
  "key23": "2Mj2XZFtCpxgzMHRD1xi3s2DfLHNTWirxnSWTARu5TMjkhE422WFwycuXkHZZAFkJiQz4KajVCwPb8euxcPRspLM",
  "key24": "2JuxVdN5NWjpA5Nm5BTZBoFHdRZRhKUHMoi2WqfSHsGpe3VkvPULGKXcdBnqDyPnqJtPDa2PXULDfFmu9cqV7RPa",
  "key25": "65k2cLHj4kuTzd44NfQhPw8sAbVHVEWEhdc5CxiLjbSXnKJdCWPkRwNNHjRSf9zmBkruAaAKNngWLy85X5az5dUF",
  "key26": "2BsKcWuSNR4ev38CmXPFYRAc887z9X29oHsfAwZcx35zdM2f5eGRJXCnxEgw8b9z7vy1KF43qR1tFppZLL2BfSUM",
  "key27": "4bfUP3Fq5iMezMXHp4U1VfXc2KbDmh9utUC5dANSef2BxMJtBNcUThWCS5y9EBL1Rm6T4M2xDqHyV44dJMAufXTd",
  "key28": "5mCRUi6cEs7GBF24WsDRZ3JYMd85GFcXs2rrWKd2s63k1wEeuewBviF7NUCVa5ZLdVMVwwQD58fZsz4uLP5bm23g",
  "key29": "2tSM1H4z6pCw9hAjQEeMSxKiLwdJnLQf6isMwPmZJCvRqbL2C6Re1P8AjE4FWcRWoBz8akoDHbHnAmta3qQGSW4A",
  "key30": "2UkziSzr23UWvmkMJHgVYi4bXrnZfeEYsm2fzyKN7BUeP1MhQMHsJ7MG6w46SE8ARrEdtCNszLQ6UAcEPxBkKp5k",
  "key31": "37PzuYcQYvqjyLDsKroqjz3e9efcjB8NAjpewSdHCY3oLvUFK3oQY8WeqCWt26EQMuStfYvmwKkQf4YEgJobc5d3",
  "key32": "2DYqNUfxsX9N55wiw28hwcZiPksB2CiRXHJkyn8pGGYLmAJVHK9iD2PnEhBJJt4kictaDWFvDkCUZgvhH9Ud3hjV",
  "key33": "5Q7m6x7smz2Sjiad754fmA6XiPmbX8e78WLqZdXQncngz84UQdhE12YZz2eoSP3AsVKxP9gXYF8EnH5ywQ1RiZCe",
  "key34": "27gLg8uZBiyM4rNBq18SWogUAnC2wtVudoztcsK2Z2Mc46hjBh9bANY5234sE8TEG25i29SzV2YdBHJH3KkqBFSa",
  "key35": "4FoKktGJfGHs9jiC5SXnzwENpWZJXNzSjFqMfXVgkCapVTxPDSoH2a1XaMoQrUTKHhw7Y57Np7Mwb7A9RCcsLsF1",
  "key36": "BnebcMBJZ5G7ZEg3JGmsmFQ2qUKN3GHtStGmow7KpSr9V4sLVyYpGAtMmKpSCHBtcpHWJbBqfKPm1zxyoks1kbT",
  "key37": "3ddqZjtX3NwajQJJ99SC1NE6QjcLmNNWPUnGQtFAEQAh7xJQ5NzhdTTK1pBX9L5q6jrcg5gKK3FNkzkCzVB2Stn1",
  "key38": "5J21iEqxBd6owuZKWUoCMcLUNUHACYJyjSkmquXZvCwfh9jYKBifmTX4PuH2r2mr9kKEpLqc44fRzNmV5EW1XNXo",
  "key39": "5NsY2rPmQg8b5YHnz61ZkuuvAeyUTPJLwukm4d9rUtpVwc4rnkW2ES7XqCh9TE2mgzbKWu4JcKBCkio1BGR9wd5R",
  "key40": "5dz43SvpQALMcF3Q5sunWuR5eSurFkJzhT2Nzjoz6fa41Q6gcqKQsiYGPWm7DXv28vcMDocwLceGGW7KBo28yDbk"
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
