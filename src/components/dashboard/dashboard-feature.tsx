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
    "46oCEiiiGta2JUo9B118wavwiZKtQ5CAiUd2VkZAPaZ9n93RyCBBjtxBP1tTce2WCpyV96J6bsVz7WFGtuVGz1B7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dJJgao5mPgLvaaG2bfjXhjbwuorPjirWJfCWTAFw47zW8D44vyvqPZ39MHYXwau1VEhV8Ukupx15xkREHigNRCX",
  "key1": "CFgReojSp5niAotSt1w6GcKncs3PrSf5JqMbiAdBwP2tYqGe7yRqnEfukARCQ6vwFtcDtHUW7pm3MmZ3DdLVbu5",
  "key2": "3cdASFmsBKKWp3xCpUtuVeUERGYmRR71p5U1oH3HjzbtyMR6LKb1q8VuSKK2byEGpo4a3kAZakk9LH5tyZ4aBgwt",
  "key3": "4TPnjzNyE14A6wvJ4vUNGj2eWMCEKUEVMgYNaoVfjR7K8hGSxp1fBP8qfwmg2ckpz8gjo6EJfjPYcB8a9ceV2aci",
  "key4": "49D6aXDHH3nj1LqYn9fYVtVWnPvxBH31isyHejV4EYxgjkVMzN8xp9yiJRmdgTwHhpCECAET6zRX1uMeotBLfo5U",
  "key5": "3uK8s22ERx1BPRdeZwoSJ1w419CkRkz8Kt6Z8EAD5Q97wuUS8nFQYnKWMzgigQqHxEBdtczi4wAouzRDdFHziLei",
  "key6": "46UDWZq3yXrQsbnfZMe8jhRu1qFp7CmJ84sqmRywHHyggkBmmg3EMoeGoM8gEZEpxDdRuLmzMYXoXPzPvzqe87V",
  "key7": "4LTKJtDLQHBn4xE6rcaG84DyECcTRPtrzjWf6DRBcnfkvmKSqb9Q7eeELUugxuTWzR4yw1PgL5WEfUfd8U7WgDhe",
  "key8": "3vTX8yGmrwio39HdVWYhXnWSeFS4kdXV1DeUR9rQbRL1AyiHdmfmRKpGa9Ro1FZxubkXuiveXK393skSiw1Nb15",
  "key9": "3MSwNpvUPYUWBjEV7okgWLGvD9Mso7h5t41iYCV2XHWqvqmaDrF1jPhV5GbPXJVsDqHwnamoSMhdhDGS826ThxBS",
  "key10": "2CugbptUM8onSmGqZMV9rVbh328XmHFo5AKnNDX1HjtWDkyWvF5GHRv4yub6VfsMcEJ9PtT7UX8WNNRHL2dEa3tZ",
  "key11": "2KKeyEWAykhHA2qFJuFbvatRMAkSgGYbS5puYRjEG9bBty6WsVQHZgG1Jt1MoABs8yddY6Dc8TZDftMp131kyDkd",
  "key12": "4to3YkAjpYdDDFawBhRiu6MBCgKfrRNopg5Abn58AxcNZhnBhE5eovnBDs5BNRRwqbkZEXBGKJ4Y7Zj7vVQoGybt",
  "key13": "wMx2QouQg9YquM9R8PkhjaNZZJd6UgspwJNzeHqqVV2sS69LyXkbr7M97J7buUU3GqTPqizwjDgjVioAafNF7hk",
  "key14": "4xg3cDjCbq5EBegZc3H6zu9UHcNiaz4Ju9KjbuLb6WmjQSafZPPmQ3reqRq5yCxRu3xEv7exjwXcs1aTnA3fxTCq",
  "key15": "Mi2eF3DiBXFSEnyDX2GSvwFvNTokBcdHiDhYhdsWyQvFHnKTc8QCAK2FiFQ5o8fyeZCpZCcBCz74ECWDxpAa1jq",
  "key16": "oM9aEU5f7adZJfTYubJo2EG6hZLr1wbzuCK1kT8XXFrXCeP35J6KDfpmC6iKsmp24aSdg12uNhLWPUrEq5Qad7F",
  "key17": "3s4pnjTiG6zejcDPJgP9hJbjmXCfPPursn9Nx7GvxLFH8DgftSGMegUgekve9RWcw29JUPwtg5gnf31br2WXVZcE",
  "key18": "ZyTPkNaobxn9Fu6esgKhSfjbVCYBY7DvC4BSyyWTE4xS7SvSb8Y5pfa4sgi4jwHMUU3mq3pJzj5ksYCwinisxRk",
  "key19": "4sTxhijiBxgXr8Cup1fJm3gTcAQ3gDq2qANuVVk5Lt43ngCeDKUE77hwBJim6D9nHmFqctiGHRDQ3za85BdHtKS7",
  "key20": "29sBHGy1YhxKse4kbA5WGaYSD27j4wAd2hqmznnpe62x5KH6e5qNhmA8ffvXKPq8SyJWaYpq4UkrAmo762qEcti1",
  "key21": "5u5tQ9JQKzm1YwzN5QLyr3nAhvgz7TXD1G9pnMefoZpmtVDCXpTGkpshnC4kUDTECUcPDyD1yCP7ZNpSXczpv5R9",
  "key22": "4GxAi1Kwtes6Wbo5SXmgW5TradBAztKSJXAtMNUq8u8icWQDzraieXtqdUZVuXLDgzcXobpV6iD419uGDRc49noA",
  "key23": "3KuBbFkB46dS4dAJVsnnKznqk4PNk85KCgJgysZXFj5DippswRfBEyetXXAegZADg544K5zRoYgzG5J6GsHJWZPL",
  "key24": "vFkLagnDwEbxuxw9euxkqMcTW6d6yvnLu1a9Hsae311jZnuC3d45mNo3Gejtep7VifnVhm9onYF7GhLpXbwC7to",
  "key25": "2LexDSJQHbZxm9gWaBWjV5Xxf6cfhRajvkYSrNd5KSStcgSpgHTiBGf1BgfRR9yBQgeJ31tTnLbxvWd3q8AVfCxw",
  "key26": "6CsoiGW4WKb3fXXP6EqzAtTgSHsxTYhgCSSd6ukGA1o3hsctFEa7TmMhtJKSkVErFxii6kvt7LS4uKb32wYpU2m",
  "key27": "44jsgcveW1ZQxNm95Qcjw7pZibWFWK92BjTmr9WHuE9qziEC56t613GnXybDz9dyrTsaSMc6DmUzT4QmP5JSAApV",
  "key28": "2k55qmgquBLmkHcULAX969vzwB9DXuwRNkZMMaCPdLgMGaEbG8AzAmfXnTTydWa8VTRMVKLsYuvRbLDfEKebVrzo",
  "key29": "4p9joFQrDMUrUcZqp8pjtJPF9EComoT5AZUPaxU6fcReFsFrYQ9M1iY5K9etUFhLfbqoWfkLvs3cwFVra62aq2gU",
  "key30": "5A6MEwwdR4kTVeWowb8QVKdwnizXYHw7F6oK6XoDSF4yKBCSmsHQvyvGTA5tPxrqcJiiyNyuDzCRmr1phxn647RN",
  "key31": "3YZbJEfUaDuoQgPHu8hjGGZSLhLQ5dpE2hSgrUYFgeG8bwCZVDHze7MNDtx8rGNBXU5cXVcnWugdQhm5DQcSLcBB",
  "key32": "4UsgA2DwTRquqHgSopk1PFBBqRhqrddNvkxowmp9sg5ZYaJP9ptgzgupoUqeDbZKPYWu8hgCDPRtdd9HaG8ViYj2",
  "key33": "3xctai4S4Cpnw4dE6H2s3hQgWmnMzBjUjbHN2WMuTC4KwoEJKzug4hWHWCXSwQGcerkGCKMPVdiUsf4QvPq2hTCu",
  "key34": "5LtPF61oyN2HEh5BzeLNEicda4id3kQ6T6bh1jJtxDw9PLYiHThTqsDan64HWVcF5BhmnqdHkmKX6eLCbziwkQFR",
  "key35": "2pK9EM7PL3DdoaCSuSzgAMvxiuACBfEijZ7TG7BPUNRoXHKbULVtAwqAi6fHe4uv21Me7qHJdpV94LYCEBrW14r2",
  "key36": "5NX2AqzL1boaYUSKvKzLiRneENM5F3owtTwHAyAa63Zzwetsmf5gCmJsMkhNzxNMYWNv9fHzdvas2D5Ppqy7UGhR",
  "key37": "3t8MS7gdPRBbVxQrwQv6uNkigyLB1zorx1nGzfcwzMamKpwBtiWjwnBAsexs9GWUBBqru4yT39ViKgbVD5f1opU2",
  "key38": "cEpc1xiGcEJ5zsC5fVkxcDpPz3jyjro1WELbokmCs4sd8zsBKthPFRg5L9f8wn6hryScZKbpV6UUTGi9iZ3ZB7K",
  "key39": "2tydbZyP2mXwhbKn76EUx1t7bcfeT7opSx98regxcTddYFhHJ4R1v3J74h9Lk53AW47aVkS7Y1GU1Gxww9wioEgm",
  "key40": "4BRoMNK46JvH8PybyRHHZQXTsqt8gybFA3YBtsAHvZTtrQsA9BcCtBFRvcy1vsTFJD2nM2KNYBcqr4W2Wzm8usAF",
  "key41": "3XCsSFiNyaYEAzQu4tNZ2WZyB2ojxo9WLcnPE8CCvYi2tpomZCWxNUe4p91Sr5S7smzfzDE1pFfefb8c5QWcgHPL",
  "key42": "5omw41PHnaFHTvykyiuXgvKj3xwY2EjGnEQecmH5Q1zpbnUM5JBANP1mDBDs9f1HQUA5hXcAQPr5HWwSxwqPEeMU",
  "key43": "21kdZ8U2AkgG8ErwjHBuZeuHtA3b6xzw6MuFpY4J2dNrke77N2BKNefDAwX11U42o3gWaQa8MSeurxCrbr9Nw7Tz",
  "key44": "5LcUmVKrwkXxMr74vFfLG9Yj4udt9SvCyZ5283kkyiMTWKZnJu8iPKpckzrcqNfuTW25gC4Liyq5DfJvbP6LcAz3",
  "key45": "5mWdhv1ySgnumoeq8raMRwUdAwp6K7zTiymSA9xV7TbZb3x7V8SVF4rjxeM6jGJ7Tytna4RazGdy7KiRogSCcgcW",
  "key46": "4gW3rqaVLUXqSYChMAvuhLaoU9KiL373VjwbHKoytBWq6j7YKwTWrAGjWKGoCKE3hUdEMbuVAT3g9VozBZyWjmXS",
  "key47": "5DBmjs6QJX8dmU7u75Ynivk77jdN6cYG2Wz6YFCw39Dww36UCTnLEr2e9G8yrhoYnLkNTEKGtZ4jNuTg9hNMvGg6",
  "key48": "3gSxyFPfSjkxdpP3c2TYuduzGrpCJkw9kMqqsRNv5RjXM1t7TEFPH47SKNc5kfNQ4NWmKqzeYj9NqVjkMSkQ1RTP"
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
