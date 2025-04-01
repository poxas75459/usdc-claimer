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
    "61d1NM8GfzRFFh2qbwTMZyytKAU5BXzjjjfGB7GUQVEErYpKKx6npXqaQiBJ7yFgtkfux2JeCHkbYipnquHubbgg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5bGjej5c4h4dYg46dvixxGD2mCKi149d56Dr2YCQ2RjUr9GLTVt8TYYpJE73qFgYGoR8Z9dmMrtxPnpJMaZZTwti",
  "key1": "35Cxs52dhByF7WkxT1TWp2RTjVsPLUbSZbTGm62RYsLnfpMgbNUrFK3Tsu5czAeTRzoYHoYfPLZve8UFXEF2daCZ",
  "key2": "3uqWmPZVxPafsityBztiMVbhDzQHeUMGocxFnJt2ckrmpyhb5HCa2KwLkNhcvrdAgfAVuufyZDsvCQdLsSnx7997",
  "key3": "5pN4Fou6truWiRYMUmPhWxm4HMgfUqqPtABhvayTu1SyRdh67Zy7ZSfYXzEhvHMpnsRnMwuDSE9ywq9Joc6Y8pbW",
  "key4": "5XmWtYB4mxA27tZqAUCF6aCzrfTNFVh8H1QtwPwm3FEc8HL1vmgDCKRz94ieoMLLrzeCz5rBstWCAECN8Vqe5JpB",
  "key5": "3uN3cpG1Hre6Q8vrhcijBkLMJY4Vu4Hcjso6m46QbWmTLahMZJcXuVAtjjZ5QQ3dgZZBXtpPiZv2meLuNH8efJaW",
  "key6": "5QZp3f5g1ps3jgySfd4RPfgdg3HtTxxmpq6f1fREMGo815St9YfGTP9fP8Ygr4hfnCL5BKbvNAEc31NtYihrErj",
  "key7": "5NTWMi9myEkgFzfdueY2p33AKq8RfVjyQQHnugjLfyDSNKYqe3D6XwX5HC19cJEmGfYQ4MeqEMRHvnDCBfpkZSKs",
  "key8": "tpx4mwA5iuj381nVxFVk3KaL6vyJUkCS6zqePTvGj12sJxXRotMsbv3jhTotDr1SxbhgoK4LD4TDYxAkTh38vFW",
  "key9": "Pgp9LTLNmPDkEdCkQxXiPic7qVSNmuZLFRhL2h2zk4u4sKegkZKHZ8kWytdYoct4isp631LENzznGKM2uKykSNu",
  "key10": "2Zw5niict5enyBAwjrWkXCy8ms3A67P59cNcFhHfifLbdG1yPVM6X7tPxCKr9TyupTxEvPv2yPiN6TcXikYaSEST",
  "key11": "Rf6ZAAu4YqXhEQfDJ45WNGUbXTybMWScZEmX78wd4bSDP6a5Zx1YMZHbmw8aFbQEinmhPajGcnvzBwUBdmCvLxA",
  "key12": "pGqsieh1jeWKjFohJvmtyDjus8SZmoY5yxFXVBApmJ9WMPkHQvihbBmBHn9Rvt9LnJQB23ZwEJ6kpRKh3CVgZUt",
  "key13": "4DbdPJpJv41NHPo1GqP5DjcNBbhBRwr5TS7VezBSkWJrMZ3vcrzgsAh72qv2mNVKFvgxffemDJgnWShwZWnzuRgS",
  "key14": "4dPBfLRb1gExqg3TauMZBa89zV4s9VsYaKGaYg9wjFTyeMNGexz8HTFpyJwN3edzNHjDoHSugJEMA5ZuuitHKz9J",
  "key15": "676NsXQaRj6MgHkKYQPZHWTPgdkvmV3Rc8wVgaX6MUcwoHu82HUfEwsUnMc53Zv4PuCYrviHVNstDRvP9S53yDbF",
  "key16": "4StG4GUZ8aHF5HaKyGJJgJNLqAwTyBfKZGQpkS47mddmuprnCcHZbAvihKpzCik2UXzjBKTzXTNoQLDZEaMsq981",
  "key17": "2nk9efNi7CxQ9y82xsdjty9iTwdNwQD39r7JxKGqwc6vrNgbZ1MBwQFKE7kUVppwSLPfeBgpDLBeq91syMVHuQ2d",
  "key18": "2w2QaReUXn6gowqHZweK4Mh1fBkukh1pX9PLJ2xrPkQdDLUyMjCcrm66jK7u9Yuya2t6jmgotVqfdGE1DMS7LpU1",
  "key19": "5fhT9QX5SpCEJgaBJ8UfabU3a5iZ6o2UQj6TrH5LoU5royVZbXpcxv1ymb6NA54nDLYuEK2uDAvaw44LCGg4WkbJ",
  "key20": "5phLX1uk94aR9WPFGJ8vp6zsNBTKNohtnwooVEnvEQoa5duQPvSbjqdarnQFkchkPTQtLHrYgaN78Q1rNQM8T3Mr",
  "key21": "3n9o8yFz3CoYQhAUyfvmusDsrrsZxAri9obT2fXuFVmHVt8Ujwvxr1CFXqa3kyLqiJ1bHFtgPLNzNMqDesnQL3ML",
  "key22": "565pPiUAaNB3VExfMrN9ZLxLtDC5i8uh18qSmiri1Hg4ttu7JpVF5CCCc3GaQhy2ibDs76Z3baLwXdAHoxTGix24",
  "key23": "2UUqNGeCBq47iaxt6qKnhanpm1wbh9PGANrBcGNczxc7GTiNiAy1bQUZo1A5z75haBHtWTDvSDtDACwgQnn1tGN2",
  "key24": "4QYzd1TGb8mb2b94mAvm1obys4WP4npZT8UXgPhyxfW9fRH2CYwonbssf6FRzDAghdTis9j2jeDDPhuZebQ9ok33",
  "key25": "5DVqyFch5CUNAGY3QWvZHFQAEBuPcTbc4ejBDkPJvmz9qSgwismZ8FARKoHHikdqeRBZuYnMC1Na9NvTk5QDfJZ4",
  "key26": "2PYC6KHNpcGijSQZDmbCVqgWEw5TaPMPQntcxbehf7LQXcNCSHaxH1Y1HJqizimDH2EbcxxQNEJD8BNfWPNFYMRx",
  "key27": "3FtMi3io8nVzwHRwi3uFPr5PVMkKVUB3UFpEfCmgACYYF9icPw7SSpRLiJe4zDoJZayd52SUShzYz7q1sfbWJLQe",
  "key28": "4eQzBwkszQkVAH7LxtGK8A7JA45R2oYq9deWPYfzwF3eu6rCQ1tPSye5GkzWnk4gqGhrTkPm13QCdeQCRBNmxDV7",
  "key29": "4omXHF7BRBhRAQ4aigeca8bNTBQbBqiwVrSLP8VTia7SsUYM5uFT7abWqNTNgZ6SJE62Dtc71E5FxRKY9fnPXwTs",
  "key30": "3ccdn9V2aDN5rbnwnLkwbry7a4fHGhgbJ66k4jnAHtLofNF7MYwD9Ks7nMiPqx2CYtKUjxd2EgUjjLPWWXf5119z",
  "key31": "32PHe5VJ5VDcMwcdkAPsYsXhn1LU7YQ9fDJNyfJ268rgnfS4KEhAjCpWyhxeVyh2Ex8bQDgxvndsDshBgQAEthvt",
  "key32": "2roo917vc7H55JAwoCTu7jBZASyJDXQXQtjqpfs8L5MupT4wcQKn9N4LeexPRXPFKzzPaB7w7f2BxaPU8Rpd7ap3",
  "key33": "3pNcjg2vDoHY5JZ7rB2X7ekZdH2ApizYgUHxjvBjvFRAATkUz2KZhF2yKgqkEXfoufQkNKCGYiVavk2hUZ2a4Dzz",
  "key34": "2zjQevxaFatYTq59e4Bmso48ZjYAg4JG17oaRokxkMztHj2JfAuScZ67HsZ9xNkBWJmaueEwD1wPTsrByiQ1XcYE",
  "key35": "4Xi6KgkTXkHKCT6Ap3s4SZgnexmEGXMjQmxAv2keDxFx1pwoi2RQ93uSykW6UTywGFyrwjqvrdM7zHs26pJkMrAc",
  "key36": "33xjP141XERuN6pvjzLHiVGVn1M8J8b8qvbYTbSu9Vm7mKCN724yifxDqrbZnMMhVGnmUpgSfzGNJGiL3eLiruEB",
  "key37": "4yQLEfPhXVHVAzwgz9y2QpWHgkvhaiv9327fiFxV4mt1pfoJz2TCxbh3Cn82ibCnVKWxWPhjTetjQrM2RJsbvJFu",
  "key38": "5Nbq8G4DSGWGRQ6swGo1N1QozGsVHNbTNAnLaADaWWPDyrDSVEoWSBpF6hihmyZPBX16LvLCm1g5mo9v9TWBzuZG",
  "key39": "3DfUTcNwZRBqSxvZjsqPjbtxHasHmGU2ekJHEHUFcsxcMWHkNtoFHM2S7xrsk2ufCz98N3txrEGM8G3Cfnt5QgxY",
  "key40": "5izSe2B2SigCrJDSttcPJ5rvWsqS9Sr5HmFs8XErBgyx1D3dNbAxuz2gwre8Jpqnho8qapeZah3p3kX7GwmEm5zp",
  "key41": "4U2xqUWZtc45tW9D2KFQbjgYmSBvjUiFa11TgvCzcdwT9Rd6FiUTomaWPD6vCLk1qraMCQCV3fU6GfXxsocCZGwR",
  "key42": "5Y9ZHaNfVj43FgbBdXBtBpRSpjAHrTrSPXLeS9aG97ReYLXEheQCauJLZV5u5sAeCpjMXsRehBR5LmHkUuDgcoQL",
  "key43": "64kSeZsxiBvBdtNJaaNAT3bGz2jcQXWnYpbFhzZNj18BRM8ytc4Qi7EXqCUaMKY83oAXvcch2GcM4Zbws1LcUTjd",
  "key44": "2Nu3gTd1S1u9wBQgA9jdgjwMyKPtUh2nruncgbQqGQ55krMQcAjQu6QXRQit7xkKQ4HWAvCu3BM38DA9h58SwRWd"
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
