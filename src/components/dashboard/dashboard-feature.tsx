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
    "5pzFQMF625fdUxGZ4y4SFvZSaGDDFyVSNB3iiQrCXcPUaMZUiJ51CaAAnNK5vaS685qBip57GAErJFJ9Q12j6FrZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3odJ3BnGXcHaLa4VPmm5CPdMkxHdZ9th3mbVkXUQr374pKujGgzuergfyUp25vLg7r6QSdnGdWNNyeihHXVXsHdG",
  "key1": "3fdH3zfgU5tTSHRMtyBwNZcnMbbuBnjdgHshS7s7C7MZHciLf8HCrQPaFVDMaYhpXASEwWEjCwRMDsp2rWjE5hLv",
  "key2": "5sed8D9n916Tu2zkfTSc2n2a76zh3G1uUemi72WrneZm87dn5YpzfEbeLB9NNVYHfxxrVqZYEu89B9WpiygXYJxN",
  "key3": "4vC8AKCB1ZrqeSFZgJckozJqwPpWJiYukxTZxSFJ3YjiYd5gEC2dVQ3aFVkwJKCHx7nbkYfBBt4LMK2VRxrr3G7L",
  "key4": "3QmgCp24eFNLumo3Eqe51bKN6KQh5UV2b56HFY2s1kjumZ9buYCnRMT1sGMizYS16ZxM2r7CMwt6s6B6TvTiWXg1",
  "key5": "2xHaeoLQUstpPkLCmvKypBspH8YR4aNwbMoGA16UGHEYi7rELyRZLqVupNiWFFcCivQe31QWsyaZ5auWEaxMX3xU",
  "key6": "2UKTXY1nt99oVXxmwuExFYfukx2nSKE43MVqmBpi7m8KzSEgua1gQ64ha4X8BqENUG21DDGCPwwsHHpJs1pw15kg",
  "key7": "3dAT5TSA1LdQKRi81QNH7mYDNUoxLePXY2pwaVBuV9yHDWMkdL3x7RM15V8esU7Xi7sz8iwy4MJJCQJAEr9w7m51",
  "key8": "M9oKUzFF25RwNfCQAfLHiXnpCdUX5DF2g1uUDhCWvbX6wE6oUZrsaRK315hjLjYoSNbuRzpWFbXLCReY2TvHNXX",
  "key9": "2jkC5s15BijQJvw8Do59BdNprizYU3zfpxmM9ptmkVzd9qFdj1wb2GgUKXG5qfmimwyUUF2Pa4n8NrJhpiv5vRYw",
  "key10": "4LXowrPrBRg6mSdzWfALAJqovGdtjhcLQe2bZ3gdohaDc8W86WSVeYR6GACKKDEadzwdCPzxN3vseak5p2FQ9Kbt",
  "key11": "2pLnQRnHM2rvZdYHLgfsXwVXM3AvxvkSd9tDUv5KcE4GWPeWBcHoksUK7k5rYUuUE7WCo2x4C4Y81XFhUQxRNAQD",
  "key12": "2CHtTj5zinJ6apsn6fZE3BnhZNGtxQudgVBK9K2wpyG5Zgd1FcBnH7xivoUnY4KtrvZz4Q9GTzjDibvurZRWD5Ta",
  "key13": "4vwtCA2uewfikqYfLGhbFB287FUDvUmXsAcmAkG4XtjK6V2WUuCZMrecfR4NzUpcHa8Kz8WSJgC6ocPuQBFvDxY7",
  "key14": "64YNYR8r3jMNQMP8S8itAc4jcZrAFyfVHnAysTjXss3ar1CtknmuD6Fi6BGe5RCW3rVL7QFrMPxoY451kVhBVLiz",
  "key15": "4rBGf8cTxGXCca1RguhZx6Bp13TDTcKUjHT2PUBaFP3QyCpGzrf8fwBQZJpbTnXCpfWDJj1xmPAX13zN8Pv5pQJa",
  "key16": "5VcwqQA7NftobJafH7z41Q9MdoFbFU4MLW5adCUPr5NkizxebzQZGShDTXQP45Jx9qK6TMD5LDFskH6iXREt3Mym",
  "key17": "5U57Mn9xFQVqYim21o7vLUR36ZW7r5GXr5zzbkvPjY79rR2Fbp6nm6RkdpwrjDhnWJGFMyhbweRhkdyxzEsXScK1",
  "key18": "WNYkTfNeGvFXsHS9fn9kuxZPztkb9VZwk9K15cUckPhDV4RZddRpubBbemYK5ShyDujQ87kVBMgKUvzoQ4sK6Zq",
  "key19": "17WFTEZbtnkde6VCWSweJY63rFSJy9DDNTNY8x8PybXTbQN8LDWFRT2WDJ5mshbMj7wyChpKHXbiNc7zDmiPjev",
  "key20": "3YG96FZMyZKJLQLSpDU5XpmHMbfm6dqPMcQ7nxo8j1j2hEeWQRrSCT72yAb8zBt3MD7kWxdXejZsJzp11b6GTtBx",
  "key21": "4A3wDqsCMAqo7FMszkcx9v2ac4MPKFGEhDNqm9ST6iDcPZy3RgGei7ZCLrHCcxgtvysmAdkfL8HfjE9vpxRSLUqw",
  "key22": "3kxgPqiZxfV9Fzijd2AtKtkUqyFrL6QmQU9oNrN436i6FvVRLwotPnKAyybSDj7xqbj8Yk189giSYbgQoHaFkGJb",
  "key23": "5YzWjCmzjFNzowcFMDN6B71h71tz7Bpqpq1BNy75wTAXovsTsBW17FjgLT3mKepTBvyWm4LF7w7tFz6UsYREu787",
  "key24": "44EEizqou8WM7E7Y5kKt644yUGDy7PaCyh3NmXMLq58qK7E75qvkc5kySDHBL8Vh1PkzmMqBXWRq1S6Y9frpGCTB",
  "key25": "6dRwZWU5mW4ppyieWjM9NEiRGvy7JKtjTwJuK3FEySt47H6pGTxJE99u4sBMNHtecBQDQKdwvgpQrZWtukXdtwk",
  "key26": "559vcs4vLpMPbRok1zZPXMkZWJEjF6qvHoytfKQQZzC1djHn4pSn36afRnxP5sMi6rxiWMdwMMjh1DVP82zPtbqk",
  "key27": "2GPnypCcRPVbHK3h77SowrJGP7xZC9BoaAdo78KFgjVu34tMh7hp7LuyhJPpzvzgH1nnzwcEB7y6hYT1QH7oiisW",
  "key28": "bpBH3bhATbG3ktXUs7wQhGPAKyLMcjmgKvLRFEPhyA1GDcs52cQfgqvvUhpiFpNn2s5ebGb2ZpVJcwki1LRN5b6",
  "key29": "Khvu49cdueZJHdDzNTuZJbJ41S5kJXM7fjt12WpbrcmP1dBVgaMMykfgPRqcgfzMXDuAkrjpa5FNLKu2TmrarCp",
  "key30": "32kg2P7wPC4Pp9P9rwu5nxn7wqb7NeBAN72Et8qcQgecLx6LcCT61uf3qEup2JpqXbz522QoWYn7RcJGAnCi1g4t",
  "key31": "4NYAmWPasS6egZcyuj6MVzbPDjZNqWWeo5oaYSqxw9Fv6zi4xTkUMMzuQ6Vgq3DJT3Nhi7D1j2X59ghtGzfRCTxR",
  "key32": "5qEmjtfhp1J9j3atJAJTr4LFHbwBfnMX54RUTmEcvCdnnCW2ERNZv2viCPPHFpQhjhnFKvs9A356JMxKeymaL9hQ",
  "key33": "CNUn3CEEjbHgyr6kjypLWSZCBS4XsTn39id3JaVxDUKRthAputmF5DPsCYkHjPTN74MSem16j8Kogj6ByyWRUon",
  "key34": "2KeEofJPpEpSSn8Mbv4UmcXamBWJNDxpXSVyca11BRYbMTVhJdWrSyyNGeiBqBLY2L3oEmvUEsfLnvfHCWkYZ2sS",
  "key35": "3CciC5YMT4DNPGnX9ggfQkm8NVQt2rikU57dKaYDF4LiLnP8SxE4dR9kJMrZxAQ32ePr1HYCSQeN5YSbrNYL9env",
  "key36": "5ADWuP1Dwr3RfXvfNenEBR2H4KeRZ8qnWt3jGem1AS6s4bfoiYpy3LbdT9R7v8W6UYiDw1rUCzzunFjGXa3AExjN",
  "key37": "3YnJXiDGGjD5z3pg7n2ArWD29URpGr4DfQzudw9vFNiRW8UNms4tYe9zA6HocTtJZJc19jxcHKjvPPJ2xaE5dUPa",
  "key38": "h1FtU89etAD8WiqW4PoPvzubuwbtTKDQ6B3mk8TzacPgUfDjVRxNUj7E87kMS92VEgLZ34fc8no5a2YBsU9nN7K",
  "key39": "4HbwXokn1eEceBx5FCBsfD2pmA3YQRbgkv7Jb3nmWMgYZgnpvCmr4k5iLBX5CsqeGipyJG5mxyoNtxzFeP7RMXui",
  "key40": "b2J91B1Q4nQkRG9LSdNiZQMN9CmTj1B4vi4FuLBkAoYCoQNutCSsz55ovBafJDMR4wSHKLmRCAqYLY98PBTgKsS",
  "key41": "5a3XG726n1Q46JV5F6ko2xBGXy672UtuimeqZ1sbZWv2vNTkUMMTkUkvMHJ1bzzf8MkM8cC5oksvH2eozS9donyV",
  "key42": "2uD2hApcHjodabNkXTj2QkeA6bpTt2n2Aa1VkVCFTE3gxVnAkXnAdRt3jVUgDWSEi9YYTijHUBaX316Y4wWzChw4",
  "key43": "4PptmCwt2MZGRRUuYm1rgfYpTMqQYkLJ2TPNbMh7bspE2URadgJznK3WRShCZwAjvnvHj8UX47BCL7L6wYonPy62",
  "key44": "D3EEM2cnnCSYAg3kFTbShWpG9xvp3ztXh4q51Xg7zDYqty4ZrZMr22uppW6N8Wa7UfBHt7BJ3MGAkbzV84XkySQ",
  "key45": "2mydZ6sYiM6hh4UavJLc2qpSu3ws3yDBBo78Y9nvvs72BPkfjuWWRjNSxpfQH8ig1KXJ4JrZn1CsezDAT4KdCdsH",
  "key46": "DiE5g6KvNdccAfzJebeswuR1JSaNwzU8rUWkJSDPRPNtqAfa7WeoyCXrMjZ3XbcqVuTuP5tYwy6ukoa9xvCN71J",
  "key47": "4xmZnGaLJaQv4aRM4CuGHeCR1pF8eUHPEGryVTeweuDWp7xPUCsV9vZREM1AgPC584P3R79zLi2xH24S9iWEYxNZ",
  "key48": "q39kmCUtsEx4UoqVnVo81mzPfPbYA1QCnKmon2JiaD9jUXrSS7AWQzR8Z1f4kix2BKNxXetAQS8AbWnP3tMHZMA"
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
