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
    "5TEciAySFAQNoCXjss5SfLEwRJhjgzGxnHPQtMSQGzqujva9DpqCmdD7xWygBi24Agu2Y5S7SvbdTLwLvWVidB3w"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZgFQdiWuzPJi6MXqU89sKEpqsu5e9LfcB6NpTxffE2wo1XyhFdFEqkHn74YkbEjJYHELe1iJPzre8VrgBWv7NJL",
  "key1": "3MHcjbyzYdNA59w79w6eWtiMRwotJ7eCmvq9pbDAHJZWJgMWkMTqRjqxGbZG9F66wjrriPT5EFL3kri4xRNwjLJd",
  "key2": "3zac72SeUeH2ynLL5yA3xjPh6xs35dkGZ5f6T58KrDEkJe6Dibj5178a8Sv1pvgHtGp3yKdwhiN5MBXK7ewab65W",
  "key3": "5D2WCrvADrGczicTQi2UvbgDsAZrPBZHtWMfEs2CvpgTGAQCumHmGD523EuVRsC4vmjZjGsDXre1Jg2oGcLi4ssw",
  "key4": "ng3cLH7Ee7h7KWKkrzxtU1HXkMXCJkEjPpkovnW2hd7j8sWbRDphzohuSwVY4nAXjnt5fyjVwDk51ubjBdzkxab",
  "key5": "5TXMwXAsz8reiCNevGXj5jbw2KmUtUz1hXLFuicbJmKHhoZrGoQ5qwSv6mcXBw79CdJ69XxvKuokKoobHzr3HEXG",
  "key6": "6eD3JYMNVg8wumgRb3jRTm2Efrp22y1ANCzyNYUbiP8XmMhF72GEoanGCvrwfxweAQHZKUdkTtpyKk4R15jqtzP",
  "key7": "hByiWSw5ZxqyupoDaUctZ2bwmyA6Cb5ki2c7qV4pishNj8GdbqjopoKDefz97wScEi2UTJHKd8JKyoiySRq67xV",
  "key8": "3kqXgnhwrBPqXXy1R6L2epiSWphtyzN6tMoqsuH2uKibD4VjqyAmb3FFhMppmCB1CMKPpzDLeaYbXKak1XRa7hUJ",
  "key9": "5S9k9wDEr9fx7cSDGKNgswvkpbDSFJxwysLchxgozCdiBtsxQpxXc2wqVyBab1XVCw2rj8n3hmQWuKefHwZCCq2J",
  "key10": "3DfkDuxmhULjTSjjdHcjSyw2T3peP5XhtzQSzPJZXAu4uamKNTTCex3ar2ryLPu4zdoFEodsfrvPakmUung2cDx5",
  "key11": "32dCHdtxBsTDjsveHc8pnhRJdi196AiNNHWeL9WgamjXtfcnaMpdfhrvRTGbn2S7ubp2whGUjvn6xp5z5Btts5BR",
  "key12": "444CSsuadVgGE9UjRsnc4VpK7VGiPTzgx87r7kMg1DXkJaaWbWyc4n2A3NMaPEnxj79Ga4diSnw4Rnsvrq3i5PXB",
  "key13": "U9DPDwKnsAeBnLDMWT2cNR158oAzgekXGja4rCuCcATkr2tkwdv7gCySsBbQ1DycVDn3ZXktjmzLBxx52wCNNMq",
  "key14": "3k8A5jo4mDjdDKbS3DPAGRVHEoyRg9WpbKxdVVGdXpRrm9u9oWkuaGCjiMpFBncinmHbGjrU9LZbuqLoTLPWtXEK",
  "key15": "3eMpNRamGRtXFaZT4YZLuVksu9nM4616aTmtv2mNZVfM9nwEdoy3s9ciuWcBVozZzpqayxeuEJ376JsPqvmXut14",
  "key16": "53rmqUu6AArTZenRA2fuXqtLSWDjHzTyig3KzANccZarmoCNuLjH1GFF6tbPz1dD5F82cG4FJ2njdGNWptyFBLb8",
  "key17": "V6ssvbZGPeQqmcjUBGBqH7iqoNdJ4wxXvTMDcKLEKQo3Pow7FH26FdUmhPLTyRHWeGNXNewTA5ZsmubBiuGW2jp",
  "key18": "4kX3NzQBvkfwyzY4D8XQaawKXbVUqKS4vZXEBXSmcmxsneuGU1bXsotfWe49LfQoU4joTBVHYje11FpWMu1cBjKt",
  "key19": "2ZECLrzD5Ydd5ExLW4h6CFB7hhsX7G1mVSh8n7rHFiRViiSchoMjdMhZL5StTkdq28JsKBTkXrNJQzHLefvJpfZV",
  "key20": "5h44MGA6FW1q3uLWL9PXDRJf3DBfMCdEvHUYiSXb5hqyd6nUSaFZH7To5a2TjEFQQBcgFoXh7w6yYDFdNBpSeFCp",
  "key21": "ujCzq8peUS6P9fbzG4JBusbJqwoYCr7G14FQXySFuPc8MiTsyAogN8LvpB5DFnQCqGYL1J7y1JycsdXGoV1sWV9",
  "key22": "2ibQA2vsUfSNjaD8UW2xZ9aQ7ExwzVidXPkdaAXCHQZrbvgY5St9TR61cBkTjhay4quSPzAATSUW34GBxgBcgPfe",
  "key23": "2BetEKVWu35W9ahCmruZ2pmBcSKwRzFNosk41RfiNanrqa8RiyaSVH5qx4dt9BADibeZFS2AF3tfnuJCxAk5jk95",
  "key24": "L9cMrx574tNYi5HLvajYZyqqbBmWrCNcewe1wnCfnnbNBuA43cHiMdFifu8bPKoudSBq8UwtybR2cNawLzwVMCa",
  "key25": "5rYW5jQWwtwvGKfYPe6iSa8hM5DTEt2ozeKuZz4NSinfpswDm7USnxvgJb9RvdAr5DD7m2vqzagw7AjfyLvodUqU",
  "key26": "4v6SpeiJCnQXoY1k3CzPdxUFJyqn2bnW6NkgSaDHDrW9TLhB6Arc2vpgZ5GVm1d1zjdEvozZHncVPxhoTrzipYMk",
  "key27": "2odDAQM8cbRmyYeqe1JgRgVhcikmFidEnFDTgJ5xqnJfXW9pk1MC5FCQpceJm8LPUReaWmw4RcwsYMxLxAF9czA6",
  "key28": "2ckuemL7MR5hgTbsMTh8diwy7XZUQM9PMZ8vsLGQFwvv4ZhFsx15SBgYum7XWsT6KEEAux14naEiL9GKqyjRQmWe",
  "key29": "3ztkTKEhKwgx1nQ6MsZEKatunmXNeBkCwRPLg6fQ3jE1V3SimPLRn3wbfFnJnVW4NyhckHppy9DZWUMvJnP6fTmU",
  "key30": "372Rw4gTm6AUL8Pio4FPt1UvGhuhQ3xNLruepkDSwY6W7Q98qw7gSGN4dLFZnHtNEi5ypjDhKdgpxSwqbRVoZjZy",
  "key31": "5CejEaPivxdTJBMkEks1j7esSvckZQ7qAEqX8iHg753nm3reGamBSPyD47aquihU65WKo1fF7gGvFcGM4FiLkRGA",
  "key32": "5TstXP6TjJKqCREVN23PSyhZgKEWjv67zfS9w5epz817q9yZux5qFKQAUrQBpNibLGytdjuvsyr2JuuSLTca3JRq",
  "key33": "3dwLmD6JNgoikBDJjN6zRdvUPvc9CYK95aBQ2zDakdnbpUQikoZSTEtke1Ygu24cewkE5ydCk3UmTwQsRudSMyhC",
  "key34": "5ahRQeMbeGQS2zy7zvFgAGXfEmzWhVLuMU7PSin4UeLrRVGQx9Dtwn8LerygGBuEhYHMtyhsrskN9ksMN6KTs3do",
  "key35": "5rUsP9169djFs23Mc5WU6cyt2oLqtpPpadQU6hsERtdBGuGNJqt1WdpYcs5peFDL2h5Y27dV1bn2tfWFQ47rCRDb",
  "key36": "4jM4iktV3Z1k8vX4tRS2ap4GZoP7rk87zwppcFoKvcgJH4icLr6ZoUKqGV35mwPedtoehNCYdLqNMuLUT89DSxs6",
  "key37": "T44kHi3KZiEF4kNWDJmXQBi97Zwr61df9odvRY778bvDRSnoRX7a6a5v4Dw4B972H2xjXbWvK6TNVi5tPvkT1tc",
  "key38": "5eM1UgkCTNfewrBnxNdj4PgL8K8BAE7sCWziwBYCuuZumwT7xSu22eirrrnW8WcaR5JjQC6hMMLzX9cAeL54ukVS",
  "key39": "4Edqe9Emy4VvzV5hhJX5TQSmburpTb2Tv6K4Q4UyubUofwqAA2mxr5oX7uedxmrTtVB9GrT71CwdP6r83rpmhxR8",
  "key40": "5vYF7UCXfgwAuHkT4i3JeVN3BebRZt69515ZEpqcgHyHesn9Gcyhd8QD5ZDd4tfZsdNsjSGP2D1pyv8NCG3i1zp2",
  "key41": "3Ni2eqR3V6KnJexPyuTxtdMZPhyLq6jEKv8urfXBZjJjViq4Ei2MiscVYGLnhinU1gfUzqXF82Wz9BV7aSjs5fJ8",
  "key42": "rL5S52oP4pYVwMoKa8iStYkqqN9hMkoFySzGQcyFJN59Cf1uQ7U4iWqG2LKF7uKx6EvMUGT53jLg1XpNdWeFiiU",
  "key43": "2dGWdN71YFEAxEzXKMsqntk3uSHKdmBSovv5zryMVR2TG4nPXdw5PmWcqMaYQ3cFcvbQKqtDYMKczX1MbfvKtrj2",
  "key44": "5Hpz8czAfZazrwi1pLVcoh51mHhiahGoaLqFfRT332WPiwqyqkzzSwRModgr8LJjJ9vwYycUDdbJZNiss5t71oMK",
  "key45": "4GrVAu9zgoE4SS9S8gAQfVZxXahV65RSZXBXBMowpbNVAduTPAoR6FiTEvSc3ULKtnAbCH21ZsuEt7e1d49pkzpT"
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
