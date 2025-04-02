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
    "6jGEZwGwtn956EbGn7hLF7iA5YgJJYsMpvMkquG2VuPZXA1MTYjh4WLwg7yA7UbvD1nUiDAdU7WPLZzGnPuXikm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oisdpc5Sm2HkLPr6t27QrjhoAYVoaobAEYs9sHc8q391Nt79kWk2ncm8RfVDASRk4tZR9kEEdK88VHdNQjBf4og",
  "key1": "5F5eDebSZdn546jK9ZUvcy4N6gqdr7jp2wAYjik98jYyoskHXyxEpG7xDWtRrivt9n6Yxz6BdbAx9Jyh1ishyNGP",
  "key2": "fjj6xSVYJTfZLwP9reXrLn4jwhHzHfpRiZPqW64d2D92X6r726sZBh4Anx5kKL8M5am35Syc47PCVjjB9Q6Gmjm",
  "key3": "2zEJesqx4xmbikdbHpYZSot9uSLD2GsSmumLCZCUYMNUwscFXstQmhhm7Xyf1NA9U6v2kLeyb4gwBDjf2wHskLXQ",
  "key4": "4c43SUvgpCj9m3vLTRF6NKexoBtFgv8AaV54aAF7hL79vLKcGCP2tfctUYDDuCD3v8GDE3aMbhLkRuwMyNzJZRbt",
  "key5": "5nzmJaTBZqSjtC51PKsx3Esomz57jYt4D651MSJvWEV1ZAnzNktUEipBtEF75WJjy227DREVWrrGvr6WTrNnpSZo",
  "key6": "2XpiZuDKuePRNpQqhWpXF5Hh1SvNEtHZrBkVMW2Etuy7DLLCRSm56GnMzUkEdw9zy9pQr8dfcGpMFMkPrL2vxb1J",
  "key7": "5yLYZdtCDj4zRXbrQ8NQJtnnUdfpeTR4dHQHg8c5bZtpYTdyGT9zFwNHXhS4ZyBrxgoEYN8gCCrKB4QawCMKfAPd",
  "key8": "38Qpb6kkTQRkQZaP3fY8DbgLRe19UHbZzvujF1A7jbsACbwqLLB2RwNsTuaudzDMd7kx8rJEosu4eQhf7SJYi79T",
  "key9": "3LNKjQ8MZb2gyadHNA71LsQi96usVUaduKDzaJQrEcn9N95MLEKGewe5ZU1c4FiGuUCAPjoZkt2yK74P4DLbGUnc",
  "key10": "5NQj5pyj4jKux7cG2ptqaxxnxB6pCsTLi4bR8i8N5Fg5SvcwgNTURQbuV9pZo3gAaoQstnosJkpGpvouSvMenSCN",
  "key11": "2RdFbjcEStAr2BRJrVHjXSHYJyGsSgiqPY43WEjWBovtNNrUqgxWd7vUi6VJ3FYXPBGGEAn5L8VgzZiQswkM7Z2x",
  "key12": "46GJZjjTMP7WhtrZ7th9XixeYqKxkzzFRtgnHSFs5kv8hX2EGM6Jriac9n7ZbxvaW4mEixy65CxAyPjgTD6ueEr7",
  "key13": "zCVar6wAcT6VCBkYjsmArTaJjyeRQWhwvkX6wEtQF2arDTwTCQNjSgNUwdUutrJQRYP47FzDoxHWVUSerATpi69",
  "key14": "5An1rg5j1waVNJfPVZcGP2RUKQcSUTdhxFA3FfJPDViVtrqZfwk18hYBMrJrAQmEXDaruzGGDHzBStctZ1T5rFc1",
  "key15": "4euaxfn8AZ8appysSvj9bcZ2i62zCHXwUvpbkhTS46bfByd7VWtTxr6ZfHUrEHFzyHjgykt1an3xHWCAVj5EcJGD",
  "key16": "5VaEqZL9dLp2pc8kfRWYkiQrtjvcwEt7BTwPsudqYmEJuX6UDkReS7iozaG9gmpRUaQ7FfMydpM8EeMZfwK2fvjG",
  "key17": "2bt3vzcGBoLWFZPwY7fWt5BpetTges5dPpUcK4Amc7BbPr3YvriWG5brY3SCxEbwhjac2PDYzYEw3v3CkxwMT7J2",
  "key18": "3bg5LG13HpcY8vwZiiVy4zpBoqyaWtgV2y3bfa2njgpbEuKjgPfgBVKjXLVxgkcvHkQuS4JFXkxN6YySMjNgJvBG",
  "key19": "4zJXXJNCbyV3BhyJNm64iTiit9bzfbD5iiLJWbkg2PpTNJYk9TtTtAKpsYpX3CXbUk3r41QEDRfma3bspKoeuTgN",
  "key20": "2w2Wyzxo8nCmQSDf5kS1kyMdtdvzfopNDmscnuxWDorm7jPCi6NW1nnbMjTssxC8fveWUGhigTUzW7N74EyEqcR6",
  "key21": "3up3PpBd6yt1V9oNHB7sTR9sR1VKN7iyMZHfGZAZfRxjnexgvuMPsDLT8tNRvhD5r2fQzJKJZwiFo11nwKK2cr9g",
  "key22": "4YfM9SeSSHKRHcW3k9gmVszWy4NVAFBRfBsVGaUm6eognDRYQPc5cHjQToASbWSZuVVPd51u8jUtDo7rXnnX2E1m",
  "key23": "3Eaf1JucMo7PFvppRn2hNdVAdyaKoVxPKWYSQ5cb2dUqcCx2P6YzbRgzZZ86XP8vJEWyhC7JztxcNFx4m5kaUviQ",
  "key24": "doA4P9gEz8byfF9zdGrwvuCyJfKTwh3tbyajjit5TNZwbhouf29g899qyCncgDUhjqoJe4XdqnQTBU8vC5ndubd",
  "key25": "5GU6S7BtFxM5L1jS1fvwDwjyb9UwXhh1BLtAYtWek94iviXBQSfPLvDgmkFmR4eRQevcKtEQamQPqnZYn7Sicrus",
  "key26": "b9cfgPUTajWYC24qzGPjPFt5HxfiHKXhZwvANudEtdG7ZXGkVfEG8BKGLkfvSigXsAdZYsnn1ema4bsmQA7oRVP",
  "key27": "2ZYL9jFJsiNvLjrxgbWUBsV5S6Xwu1UJREMnxocJwNyFxpizYLQsDhHJ7wdLHLxt7FdeQoLraNKt45cn1KnGGRVo",
  "key28": "Bgburuj3YzZ1sSPvSjdSonW438Tdx2DPaxZro1D7rZhB1J9k8ty5Fe93o57Uyzci92rvtrqNK1QQE1cEGhxvAwE",
  "key29": "4up8BmRkW5c8ANd282UAu5SyTb1RLh292ufXxVeTPbLVB9G48HrbkRBxqwd2JARd9cTCnUSMFFedzuwT85SZ4mXU",
  "key30": "3uNz2HY1NUYDj5Ux1P5TpsSGGCy17sYKcuJB2cKAXz2wGh5qsqCznSyDdu4qJQA8tsWmYFEUr9AHfF6NCDhgvpFC",
  "key31": "64gQbbmeqHwLQsrK1ZZ3H2HdHw1yfdVGMcVjiGUcBZAYDT4HEhwgawDGYJSqSmes2v1Sv7EWA7mk6BWwhGattBSt",
  "key32": "3tnRjybvv1j7N53c3CQoZ7HvCFHxbtY2a9TV1Wmyogu5sNqpVwzUn5F2bbgeJ2kq5kpjZ4VTsY3HtuWva9kqXcQD",
  "key33": "3gGvua5L4K3iU6GLoQFS1uZ8uxKe7RVZAD8DXLJjkcx1z9NXvTF4yjCaySfDafCuZDJKTVVuq5vaMDyDB4HYzE9g",
  "key34": "3dVuTAUeNjjszVKQdhZGrr3vP8xMgH1Guyt31o3Hffq3xMuHZB5nh2Rp6azjzUhbX1M4Z9Mc1gqR9ggoJ44sFPaG",
  "key35": "2Dsz29WWmpNAcYuTVHLANS3ym2YuCr7nAqk24z8QmdoQELm2b8zUvxSbxWVNEHsmKLszS5cYonHaqfQmHixH7tsa",
  "key36": "YzDHpXySVVEL8fMXyETr5DRhqYouVsV56V3U2p3JX9gqnE8dMKs6vzgbY6UGCdiVasupgjxaY3UhCkd9wVbnXg6",
  "key37": "5Jdc231AuZVMmUJ75asCCanQG8gAGdKUN4457zeNCsoSze454uoxzoqF8ta4cpNDDM8kdzzAbgVHexZbyTispjh9",
  "key38": "2pBHSdnp21mXBpHazG9W77jDwSWkYdev3eeHEAmsDk97XMWoCnCZ6jn3oLvya3DGa2uRFUQa61VALzBkiZF9NKUk",
  "key39": "NSDtUFtayWG8FV5pKfbVavKt7qHdi5attLBsX4DunsBhvQi8ienSp67otbjv8A3tYxacAFYmicwnGxBwnHjzZGt",
  "key40": "2gzzREjdm5rdCSjLRyDthWyFzmRwLQVjVsZkLYAqsaNH6YWaJG8rLD7YCJPY7Ee8Hk84srymcJFVHwL5u1K3z1Jx",
  "key41": "4C1iSph6SAMhBe8Xf5bCGhpp9oLVsaSPjBuU6Bg3iQhubAnoAcF57QkLU1CYSkZcLrnpRLCFqhQzR8RUPbhYsSbP",
  "key42": "2budt8vNCHj6iDBUGSenUfnyH4MYwq1yMBzsbye78b97V87vAtfkxCheC8BsEuYvFjjKs6XNuAiijV49fVPFZn9R",
  "key43": "EDttaRKRGES51zuoEHdrGvGm7uqFc6vXesSZb6JFLeUZHYSvfBW2fyyuSSmNyZmDyQ3dTVSnQvRRFiSgiFiwuNJ",
  "key44": "4n9TCd9drxqV66pr3sDvaJ8SN5egodcVz93SJp6ECftwFbjykrxMUhCweqi1MtwMqWtUwYpe63RxHTtwM9GMHeZp",
  "key45": "4fqUwE2eAobSc9aU3jEK8FdcsmJZtsiuZPArxd1jCsh7vANfS89KP458CoiQ2Vkkq9gXqfMgwThvsh1aZ8MHRofA",
  "key46": "fET4gh9GkgAuhdjoHDqaF9e3Bx2xWaWBMq4au3qxorH8SwEV7LxGH2yfB6Hr9o3sLwcwFm5oamfsuNafTHtuLKq",
  "key47": "3W2927tMo232EMueV8TNt4GkVAvmmUbhGMKcsTegguY7mGhRbEcHpMB4f2y3UmDrkS42oY1XHJrMVmvxfnbXnLbE",
  "key48": "2ngrYqbCRMm1Wv6oXX2Ar9x3pCmZtphvq7EbnRFbpKXycqK9FKdXDVB6Sq3Vt7gTBDKKamxonDzKpQtdAe2dQuVY"
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
