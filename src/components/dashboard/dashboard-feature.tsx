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
    "2uzy5T9dzjGL1GGodwdaVoCHL1hDPjPa5ZekMThx2fVU1XoY53tFx1KkGJB6TkoSDKBYLnMgr95KX1L7wax6hYty"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7Jw11B6fBS5yJ2Sav5mEeqqCHuPByZnYG4GnCDfWfSigtVWHjxLk5SSGWZhNKBfDDrNGHmX9fkUc6ceRVE9kKh4",
  "key1": "4WHfziCPPZj6jhsJU7BEmzNznYoCzoQoqbWVoGR7LDgq95EhuHSVKXgncaLF1FX3STU6yZ3Qi4v3gPZHQ3XL6yu7",
  "key2": "4dPN8dqewBbeDUWhqbFyQUgjiBPSsFSqJCBhDGX52UaYosrriaaWW6WtDmpUPaLF8GK6Y8eHF7WYJK1Grs9vKXG6",
  "key3": "4zr1HaMKQnuESCkbWCLwuMywR8vYGKGK4m9gctuUuNfMDNkgT5ZiwwWpA7M2bAz2qaJvL67Tbxttzx4j1Cgwx7Dn",
  "key4": "2qNiA4FPCGXE2Wg2cvGTaF8bcfG3AvZnqhMs3cGe1WF7i6dFB1vzfiyPc94Grf1D5KYpFQazjxuFuojEGZkU7QLh",
  "key5": "2i3xrogxDLHWePothy3FQXd8arMeNxHwgj7V7hY2ox4jM9mdioSi2Euc2PB4r5Ss8yVxYdzch2QqPcMPuvt3VE6P",
  "key6": "4dKURYNCjPRsKE6PMm4G1yxcCMvBmJBLi6mgjAtz5DQmGR3QJt7TbWNXmWGag16b7CjoGCX89AfMrYTtCDLZjkNJ",
  "key7": "4pWz3iCVoFqoibjSmq3ZcxtjGxuJEmpJdfUqErDprXEBAdWJnfWcY9N9CYrMz57Lqj4aZ8hpSBU2jYQb2oTArVaB",
  "key8": "4YMqCKJwrQDR5MjwTJqksh9zxwXt7CEFMkKrEZQz1gYAxJFDgCCsAqibLJ8UPfmiriiPTmBZnS9FkriqsoeoBRSv",
  "key9": "3aBMr4TmZa1ZGmykUSwZbD59STC4aajs6F95z1tS18A5Dvih6CaVfRgHA4czXS1nuDShm3w4t3bnMFtmxAWe5fjN",
  "key10": "22eZiaPd53tcfXvSVuzgES3iGhqrVEN5obokAq1kmewWod6AzXLXARH528BWNFBc8q4BgPuqmN8mtRstQWgVLxKq",
  "key11": "4wCrL6rHER6nfbScWcWSNadAgvvSFtEXAwyXwtmQSRENDfDbnNu8dPzqPqQBQDqiM5irX5ijkiJHwUjPua9vT1YE",
  "key12": "4Rvq5thsdkcML65xywLE93ZbuyoXvRwvm4qYeBwszGtRDcpizJFhHL1cTtshP53qTnx3WtWRjkq8PJ9S8Q5wf23F",
  "key13": "MAZuqRHWooYPxCivq2pkCkFvvoofFdvvGe17L6fXmnAdisKtw5fhRpTmrbfRcjDw7msAdvLVnsRsmCzM9HJLA8b",
  "key14": "3Z81BNk4omekX3QE7f7AHZFt7dir869hwVEH9KY5ncZFPHmkM1vQ2TFbW6WjYUJHDXvpPyWWCDa8f9S4ashXp8AR",
  "key15": "2LkmjGWTutt7Q6siC8C872D1oLdFfQmokhqp6gpntvjX2qK9CpNvjSpFeHvEsNkkWdgSxYfsTVvRqxzLLhZGZa6S",
  "key16": "2tmGb8MVFfLtUuWrASQSFuFpwBpAmS1QSua24o49P8tX2XkNpcznMRQ7GgdKEsYNnpktzqKb8edTcztUo9UUVqZS",
  "key17": "VSH9su2qCuoy2ramrnWmBaMm42cmiVWP9MZjCYzxguKjNf9rDYurjdQeGoGYHbBsugJUVXEsqqgVE3KaZvpFcNS",
  "key18": "57Kbd9vs8CAiweztGyEQjeFUHiK6YCa4gWdpe9VaDvLDRGdTPRbkSmvcfEQeNX469V4P85DZgTZs26WBYKr2jS8X",
  "key19": "4YSi8ttDvcb12hpdUm1Mf3ChwU6TcosZWkvNbAyea4PZZk9VB4vm4GGVgdRJ64HkrQgi14QSHUtz7NS7SyCFahTx",
  "key20": "EN3HMb9dwJFjBev3LxKUavohSA2EpxH43qE6rsVPeLyLbqUAUTP6y6qkTFafK26dBWK3Zs4L1icF4uxYfcuv5vu",
  "key21": "2AGN76cwzMKZaMApNhKRqkiaATS3vu2FsNf8petKs2pDUTEFTGKMqtd3pbLMqicTxhKccjYmVkmZ61vwnzbQx4Ww",
  "key22": "36ogGBCsxxejgNAZNtMHMMMFb3kNGhBsP1fPgsg74Rhvf6V5ZJwB1njGLQ5PAC9TY6X1L2Ds9J8wDA2eWYrbeZWi",
  "key23": "2UUUFytMPaYMfEo8dagaRWV6mkfAyRgUadLRR6CmWXUh3mQE7v1qbSVPv9n7N12mhZYvJ9Rr3RSGQM7AYfEzeDLB",
  "key24": "3JoH3ZVp7Wn7RTNEnDhmwYgyxGwTJ2nwgdFAZdaTh67PFnqgfqAjgYM9RCKe8axmeYwffs5tmgqprH19G259quyJ",
  "key25": "5vJamYNv2djwztCy2PcV5ecyZV4nPz3yFnuJmvJjAWZ48pShvzuTiZH7AJ3pKbaBh3BrZ2fSpBMCAxGi5JhkT5hK",
  "key26": "5gTwYmT58eirHoFxcepHQuqcVSYeq71SSu5RGSXsuS7L75UzrjksdCiYpSzAzFb8UsGraJffrRFpoK6ptYkwq5Uy",
  "key27": "25WB65cFseaduyfbXrLkDGJ8tM3dwv2AYBtkCRgRGueCVPMWQdiM9DVzfXYhcHGT9ip4YTsWXAoWHfaHUArLAWJu",
  "key28": "3SWh4MRyoi7FphntCzsG5mbWLSeP9xJN5tnHBKDXU8oWASL1HYvhZwrujsSZ5eg1HFzsrrGqYKVUZBXLoyVtdTj3",
  "key29": "5Rd9qNSnC2wTvKFiQfWXFYAnYXK7BvRTUDaBYte76KQwpgjrbKcgSFa926YBeRg2fyDimKTWwjjfJKMYvkUzS2nC",
  "key30": "4d6Cc1xMPo7yyjHMZPz83kyKtoFk9JjKQCXcD7psx6poNFTQYhfoHfVRqA9b5hGMc2gqE17ahewYDvYJ76kho9r8",
  "key31": "jQ2kUE4LUBxCoYa1kbK8fA5fUZQgMN1bpB57SUzbtHsfhjeEqoEWQATduxAogu2SqmSbMwR3i8gfYqmTgDLfphe",
  "key32": "kEjKgBFrZC5oYSb6BTdcaeiZCxNeRfBp7vpi27AAkeGWRKzudFCuLjGGBAPEPx7ZbkYfdQXi2d4XuTXXwVBas9t",
  "key33": "tWQoRNpV7zk7cXyur8T7ptoTGhkYQ1JYiDZfhprZ5CeY2dwM2rferBW1pYpQDEirBaFy4dxYkNPZu4Vb6SRzUHg",
  "key34": "2dxv2t1MUGS33pVduqBLHYByPebWDmXVGuA65yf7dVxWNsFZCHMmNSpbowo6VYH8W5WK11R4vCUSNNHKHSvyoT91",
  "key35": "554HUvJTuMrDLiKW79Xex8F5QEiyJwZPVvHYRmumwsPeYfiD6hKXyZkjE8Yxm4HWTo4sFJoiD6yUy9AVwweQmM8o",
  "key36": "5CmrduFaKtm4TJziJGvxq74gaeyt61CfTbJBp7Stxm3zgLVfrRDDLvaNcxxEYkbMbGGAtHsg9bLePVLXj2Q2sXLQ",
  "key37": "5hFvrMtgULjKjLD81HEDkPfvHkiERk4M21oCNjrEYjaCqHSrbBLs23KJf6yXNRcYg5KWdXSMc5DYmCFiv7uCPb41",
  "key38": "3BL2CBwRuLZJDT19Zip9fxdwHE3Xe3L8fdgMFxXfdsPXovW1VM4aYZ2JVDH8uvgSGdccVuTrjxv1C78hrUK1V4Lp",
  "key39": "2E82uqCynFFqMHZk6JbWMC2pamRuboViroUrdz3bNxcBt6NwCbFMZ7VVfzBYtkKkxtC635ZjiiqUUgPWpgevCwWJ",
  "key40": "2QkfCA5FrSQ6EKGa9nQ7NKZd2eCxuMDpAQwgyerZ6o1ifvBMknadDVJKifJtfikzJAwxPQQecyEBNdcdYJi5GBY7",
  "key41": "3eqhcppzSMdarsWp8kFbWmCQTmTiUF3K8fEb2iazaaUrA9VmVKyN4sUXrbXx8rHscKKyg1doYaTtKR6JxCFRMcZt",
  "key42": "Wdi5YGxJZuQmyfNYiscp7tPct1L7GsqFQE8Uvi7CNM5HUhGfdj7XHkfPrDXQiW2L7u7QRDnRcbzWPzriQTDQ41a",
  "key43": "4EDzx7HpwTZ8KW6NjAvdnXkqaCfkZkV5maoRmCV2GeUmTa7hYn9s4RaByvnNzti7d4fmMjvCoHix6voDFpbLCmTT",
  "key44": "5knvBzsRcrEdp4ExA2bWTSuF9oxSLCwCvu6ED7Q6BTt3jSpcjS5BxwJhVU42FVLsy7dj8NLD5FnRzLhzKCYQBXHm",
  "key45": "5ZPzSzQRkZDq7ZTFi4jiSknVbbuHRnjZaE2prqYGXDgDZZYLTDNVegCdiC9wXeJRvZwkXvUAWz2qijUvewPM7sSs",
  "key46": "21xruMHRR2mi4jxweRuJZzxHvA2VmESSAvsABRT7kHTWDCo1obxWcpiAoH2DBBFgozgRa5zJJ6EwStX7xN8dSUzM",
  "key47": "VPLMVLcUKCStd4JUUpHry8E81oRCsykKqoWrc3Ns5MH3symtFnVoMWjnKoshWMRZVdqnQx45z72akF458WJ9wDS",
  "key48": "4Qi7Jn5KEwbeLCn1FfNQq1aJgV8EoZGAnnE5BHVa4UNj69xoXex6hb2iGwrY9dbnBHmu1adnsJy7wJEPNfhyENpW",
  "key49": "3gVcK9f9657mTDkJKFBaYqvVSJTfS61uL2JUDGeeVT45sUUWkCJWQiRAggaiVps8Ei5VuLCfaqMeKhGe8ryGkmhr"
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
