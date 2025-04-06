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
    "24YH94AZ1FpuMPsZBUGF7Rre5EgqmhKBLqBnuaJzhqyN2rCnfW1qXSvvUndDwytNkN6xxw37fptf4vvNhF6wPRL2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rzJpSp9TbkE4AqPqwJLvhyCtv2bb6dTXjEZys1C29Qf9PNshxLSuYPMFkC3hhtP3vVXR7DeSdoidSWnuvCwah9o",
  "key1": "3oj7pbtmZefZbT8C2jZU3EgTK6NFLZztVoUcRmNXaBYNbXrZq981DuYbwCTZy8druAn2DryJWLjCgRRimzXTB3jt",
  "key2": "3A7Vw2Hm2GfcwHn9CBGJcfHEb5GZ3VJWrtaADeDdGUMbruBjybWrcaaChWPQHN5idtrMkvwW182UkrUeojn1gfZi",
  "key3": "4KtPocANpGQ6vAJ1iF8KQ95dsNe9REdJZH4J5ggrrxRZzQELFVMEYkrakDNBJ9zwfyyhFMqeadpkGfd2Z3dncjtN",
  "key4": "zH8cy3teCd7x5jRQoVsmU2exLZq8NTYBUzsYSe4iRG6yBGaQRtP1t2erPXyjmBniceGmcf1bALg5CVfQewiETC2",
  "key5": "4uUL7idLCRncFPfvNA4GTK3uQzhvTs1crS8vkoBAnTQgnFTAAQXCadj8iGrma5xRxNQfqCuVinJ3kHvguCzpbtRQ",
  "key6": "2DFY6EdJpzVYWvFGCr4KkADYr9kqWgw81x8sxLqaw6FrRADgSLKjBrASxEK9JLGCmjU3ySUkzJgUnEMAyi8fPvgw",
  "key7": "eT9rkNXJUjbk1WG87z6cqCcwLgwdK55SGa1HsraCxvQqvxYTWkA9yafQvPxVpMMiZpwYdv2h6XecX74T4xkyDhp",
  "key8": "4SGyG9JXzn9BswnoqzPZdHCVQn1tC6jLfEjZJRENe74NZK9J8GTMWaBX6H1qvThw2mKWvSZXfueoivf1MVRJ76xM",
  "key9": "2EKsRUrrGud1s5in9SLgRSfAVCYW57cUMgerrcLcYc64cC4HiyZHftKo4H3VqEcjzyqBZAtZzHySDikrrLvDrhJt",
  "key10": "oBsSU8N8JpyDqrekGrpTxn8i13YVJQJUiZ12ZLZP32CShUqJ8s5WVYbN26DY2XsdcNKiE7sdBPgftbbagTZ72rT",
  "key11": "5w465rSjTw4gXSG5MxwyvZUMckuVoL1pHpthSgf9tC5qkdmELTCFtTWySzbB8Pu2vNVZMRGf2HB6PtHxNzKTQy78",
  "key12": "3w6t1WKGzt3TS3gCi3AWQsW6Y6B6a5dHkPvqe2SGNNgMTrwFN2TvQPU23eH15vHL853stZybQyRQY2fy6b7CTWEc",
  "key13": "1buGgkHxNaWCbR3xBuK2wcf5AEF2CYkjakx1jC1bdANgCV2PDWBHXyNZonWK8rM7sa4jBkRUUg9uWi3n5A1JXvP",
  "key14": "39G1YFXMvNovEjLaVLWYvqk89rcWd3K85EfaG7gViZNLzu5SEzbUYC7Xq7Za6kRr67Yc4UMnv9143E2bbiVyUg45",
  "key15": "54H1KZeDKovpZZ6ZerXHZarCzMhGWyq1rbYr7BtcDg2dmit5NYY4PMX8tTya9zZ89ZBzyDYc1p4soq8EhdLmJt4j",
  "key16": "4Z5dumCSLhWtHwU5YFWaFgifyWnWuLzLqnBgaYynKtq5LkViNF69oDDY3RTP8tvwDLcChrVignitwgYTWfNEM8f6",
  "key17": "4ctnm5zUVc94YaKP4YLuSox4uamcNbF1mFYEwrXZwGEKNZvHc6SaGnTmEZRZpaQyvJoRYnGFxzuYUASQ8AVBs21a",
  "key18": "2E1jFvMUVZpqCvkSfVoPVvEAsnUD3jM9yHJWNXW36ss22SL6KtJ7WrErrFPvAMCRuZG6pyfkjT7qBeTV2uRjyJtf",
  "key19": "4YC87PoH7LbFwdhxQkFRk4FcMXAWGdMcVZUH27UfncmyahrMDnEgSsEFsSmPSMuwchhhnYJu3hzKS8KCYw5RDSE4",
  "key20": "32gCSqF9URAm1UBtX9tofUXdoz33MCvy2G13rynHx6k9qubTbkxdhkPLAhigMMgPGRY3MjzxwFNXxVsY5TWGrqvC",
  "key21": "3uo9RfRguCCMm1ykBTkaGMivCRfm1K62XB5sZiRS4dQUGsrnMXL2AmgcuYTBV3yCiFvUCpXa5jitqG3NS9neEkr1",
  "key22": "5YNG2DVPYz7tNdb8cAsDAKu11RBtHQ69HCTvNp3qpum4dS7H3xAVqqGUKbGA9dRAGPHLn2mPXTwHJe5xWDW6R1Vk",
  "key23": "qT6VD7VWKQtPESK1P9ciivGmnogNiHesTeA6YXAW6DvvQUGka1puGbAgcLth9ivP7p7CWqcgchAPYoDmyjmQVGS",
  "key24": "32b7WMfnWVsPJRT8fZ4m66UG6bWN2JXA4eURL1ZzyNarKUZnc5MQM7j5FTH7y4LgWxSLgRn6ovyXXe5sUEPwLSnL",
  "key25": "4b3LvJZL5uN5icVM3Tb5sY5RQQpoikk5KjgDy4CRags8cx2KWkcnru6Bn5gUb1jELzKf2GqvWSmtNtkA6kjpo3pX",
  "key26": "4FUuybdeTXVfm1WFNkDnYWArps4nqYWyEkq7WYgdVhhvaoC2BkaUDZJpYDtDTiCgMzxPeRAQ3Kjd3hsxmoXDFZCJ",
  "key27": "4KrEbEGEEBUehJByTTtn1PiUTdh1LHyoKGUts2WkoN5RkyM1FQapo86WAswy3CFUbVvTXRC4uu3SFL4kpjuFY65P",
  "key28": "3Xjbu5VS57vi3N5sP4yPfTGthNj5p9dQ8o53cYuJE2ZH1oQv3UEhCmjjzhiVAU95Z6T9GMEcYL9WFqtYLq56ABos",
  "key29": "2CRUBsWBRB8NLWVPhofgjdUNCuiVm6spCNaTPUKCKeny648x1ieP8BJzjeo9QZETor5tzWiZQUBnJAdeuUd8WfGa",
  "key30": "3CabogEPxdY8gjMs1cBZYH73PptHs3aNfDS7eQskrNaRC5yM96jzmaVP2E5qu4gG56XSpLqv9Ntrx6CDTDNiDnfN",
  "key31": "49ZduSheKeu29A92AvGQgYA7TJkcoYDYeBs28MJnCD6f1TytnkdM1zvXnnbYy2yVXpDbXn8PmRAx5mP429atcwUg",
  "key32": "yqtMRgUJufqRhFJv4gpd8wWxsP2BfPjeJ6XW11FE95xHm3eZjLJFn9sSXL3rF7EZqMzrWaHaQnfmgnAr86DDcQz",
  "key33": "2xpBQC7oM8de8y7pG1zZPDPRh3eDFJy5G2BpCF8AgV5SXpvdQcBkRXPb1vXwTYCAVSDjqMbgFzGuHK7Z9JmSXm2X",
  "key34": "5XnQPpoDF3DQ1c849SwowztbLSVjLB1AZTnGCEdvXz5ok6XQ34XFsQ6ahqLZbyHvWAtPGHMYBcae4wQD4gL1EmGi",
  "key35": "45gRkj9prZ8uvvAPYkriQSEgvga1eznV7RwB4QhRYfQu2kJytotj3tykAHNf2zN3HPhwPUWiG1Q4pit11uAm62Ve",
  "key36": "WJsR1KNBz3mVC9CfqNN9e33MzSXYVR6MsskJj6Wv6eprRiWScnf6JApmjewop51TXTUyXthXYMJ2mnVDHU6V1yS",
  "key37": "2LYFThPrC9jGqqEB41bp5mdJHFFsqTQ5N1w85FG9p5zFVALwmQJuWmwXzSg5B2wZRwM641acFRVZXvCpEAasYE9y",
  "key38": "3MKS6ZNnTcT3a9GLCr8ZXRs3n54a8WG76DrNzcuJQqmpwbGXdSJwvRipEeDZWnhCjCeZ92GtAUkad3z5j7sA9r9c",
  "key39": "49TRHzyEhu2HT7Gv7NEEW6gqkvK6QjEZPgCt1CdzhHavhYDjagPU5mNfK3KLxxq6sLMUaum78FnfFdxbXZrGKupQ",
  "key40": "3rodxzHA2Y5Cj7ZqiFLoAASQX67enTWV82X9kP9Fphc2CPnDKTJ1f1acDHeEx8FCBX1ar5GNszgJL6sPSxJvGKKN",
  "key41": "3TKyKbmy3o7Uatw53Pk4hcNMyy2WUjV43ri8HaFDiC5iByxaDsPfo1zjFwk3ZzSg4HKa9q4ikFATKy817Ae8Wuih",
  "key42": "y4ZJbUpRFgkUGHTREBPuCYrcz7YYaHkWNkWRyAL7NHDopBjX5Dq3HwGyymqtJ89HcV8rGCyhKZgrGAiYHmkYwAr",
  "key43": "3BbQ2wZDgonkvqySR64dfQZLryzFmrM64rXxCi6wxSYupxiJVSbAhcZegJqJtEd1tiQrvC76uQgmA35i4y7MoVRF",
  "key44": "5Z7cCh88HK4uz3VVFMHsNLdfhbVnG4ad3quZ18t1CKiJF7mHeNnLHfAuXJnBisuMn5kKZZT4v68NhPiG1bZePH2S",
  "key45": "5mG8Kqg8HRbbAMZumzymhgMyt6DCdujt2fawjcmGVx9kMyyxDXsigBSp9cQSLFHeZ7ujPJfBeKh6by2jPutzsMbT",
  "key46": "31ZWdAnoBUMvY3Vve4PynUnxooBuoKjhnz8fa7zk1EJseJ475pTBRSBjrUiSrfLzsQAeWhdEnKyiP8N4yaWVS7bk",
  "key47": "3uGktWnrLK5xZLfrG43zVoXucc52S8gutBi7SyNE8uw7EiDFV9XG4rYN8x6TzD1uUPSUxVN7sJeVs4WUeQnqmkXd"
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
