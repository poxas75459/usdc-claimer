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
    "YmhUDC6GPtN5wdfjrz7mv7R5jZAzDXmjLodkR9dAJNqnYHjYcn4AaWSB2AKvn4E5345pXbQd1pxS6UsCvXqnN9Y"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HyZYeAGKfDBYs87LeLym7a1oH6um9nDFRwdcPvKVJxsAoMoGV6Fju6dViPD4LpKXeKZL5yrv487eeeNBxiAaXPL",
  "key1": "46BpYMioFYWxJFRvT8Sfsp7L7WH1Nt1T49S8tQaptoL8ncSgRL3SGf6JsJodEZPncnHQXGxFrzUchX9fY2A1bVep",
  "key2": "23D9KBskYXoA5KWh6xhyfyBhjvdijcpncWjWKJKbfYW5WjCFN62KEBhCfE659LcGaD6sq685WMCmpLXziMV6xXvw",
  "key3": "2fbbAQ6KA8FAYxBw9MQAZcH3WL7GEA14TshwZCpYdJ2YTgJK5eXUaqZUKNfFhWJ9KTdyko4WHd7FaV1iKRYJJvgN",
  "key4": "65H4m2yRpyDzoHckjGkE7938hE812QQyVqfHqV257ra1TLxmatE79C6LGxBfFKbtKhmVBXu9HGZ1TdqHnzGT7ZhG",
  "key5": "35b69S6iDCjxWY3FQshHEWVSVk6iBQJFDoSvUGS4N3pWzD7D5e8kXRUfwMrzxuDyb3325Ja4JFqVjcnxRnT3ekQs",
  "key6": "NLFMKxCxKqz84qonLDPgHsLCDWw4kLJD23aWPJGEwyvSSfTwACLhgTDzwZxXQ9EUFSkZFAmz3FzjAdHHqNyXTeg",
  "key7": "3SW49aDxKRCNtkmdSTHmSJ4pQC5wWf8hWGb5SXCYzu6aYimqwtsJawBuDkTAWXn2RaDAsjTx6gLvk4mXXExdQUN1",
  "key8": "61bUh1kZE52HBpj6V7JbowTfJsELGWq9ndpYvtAQMqxTPpZpJNRJWxtV82CzmyQAGP8diDj2pd9HeU4GNzKsF6qT",
  "key9": "eZRveEtyyfsnhHc8zMmwKdVtbQEbNK9wjwVrKcXdYnaCDfdPHGYBn78HnEZNYu6UkjmKKhGN7UTq58Uu6YgUprG",
  "key10": "ursxBmJDGQoyr5y1qdfp3ptfVp2FFXo6j8NKu7VWGN22ESxnqcggMe2d7qbmN4aRfH1HcPMhDtJacifpjZk7hVH",
  "key11": "4X4EtmKF1j1ueGZgHE63ogRMksFgVDpdLqriR7H4MFcvt2uyA2dKzenToLVn33QrChJBceutFYDT8QwwW1iFdNDr",
  "key12": "LA2D4izJFBuu3QZm3hPcUQPuo8vd3hcbuAr2uN8Bz1QMy6rK3XNZaf1BopHKP7B9tRBuVbymqawTnKma1kE4nTD",
  "key13": "4TDFg1cFxZQtMnP16J5fWYLbFGADKWPwA26kY73Pv5DB8Wk1prFrJ8dr9eHh2sYdQqQVQEXmkCY8eoSnJmVqehYq",
  "key14": "3jDJXHmqTZ4VJuGdyNLo2S8CUEzjE3KQYsZiJBgXrs3NZMuQvnUjQKMBieFfcfkceiYGJubb48Vp13bYHFT7uY9A",
  "key15": "58g8gHigZQgqhDcfCtewDB4p5aAGfDxAPksyvngXZVnxMn8tgFiuEzVPLeSJU19nhM5EjX237SHGTCx2A19Gcn2v",
  "key16": "4daC1tkm7UDzXv6ypFni6PKoVmzvsYHVwHbbzMwxgtzYJfixB355BGsFPD4yficQCrqyy1kvqEemd7fe2kwfP3gF",
  "key17": "36VhJikgZpwuywNtXceRJjhAqSh2B9NMFXt3E28tymj1s8HjprtRXqcioW3c5Mn86gZbjQfgTtr2p3JbNWhPaEbn",
  "key18": "5Yu5pu4HA6eiZdaBLdAm2SRm6tU77T9T7a1xdJJen3VWRPHWtS18j8SqPhVFuUpxA2m9JuWf8mhwXxPpgGTxN7yX",
  "key19": "5yT9mj1z48VgLiPaCvccRBDUm5XRkKkumDT19kvweQUJNoz2LRowXCfvnHTYpj7eS1Sa5TwcQ643yHAMJCCUcdNy",
  "key20": "4uc7LoDvFTj4ZxufDjJbU1ABwk5ppAJHGqyS5hAZMxt8MCkbkjP3UU5XCuxGof1Bk51rKZbtupq7NxjbAG6uEvWz",
  "key21": "281KciqiYBDUqZyH5U35epaUN75UTZDnAqvGHUPuV1EefjaEAE48rj3uJy5Jbfm6Cxa1speUk6iJovbrBxHbLQbZ",
  "key22": "3egXkagnBV2Kr3Q2jyDKLmdPu5weabqCMkHSdRbuCNEacBgKtdvAK9oFeiENtq9yHa327bWARFXeAvNmUrXF82HX",
  "key23": "5mN1dfRqfifw2FteXJqwBAc4QsAP3bT3nzBh1euXMTJgNgnEH3F3cmTC1sA5MELavtgdAJCUjdpVkxGHTNyXnikT",
  "key24": "2uoi7vHhhUUiuHSbFKBzUoHQsVeEXBDzLUxD1X1L1aczz36B4MW7PxeCwHToJvueUGVxyJt1TBzxYcvRTQrAYfr4",
  "key25": "5q8dYg73HCaJ5whBAizWdvhZ1xUkRrzbaPjT3Z6VQggU89QBKvs3ASFZ3aiQ6sPuV7PXS2d7mjzQG6LdLWR9Dccp",
  "key26": "3MRDPQWb19XAgJksaw1C9AnJpVquYEXM8mA9k8dvtoQAaejGPzbK3qGT5PkaTucBb2Smv7mVwtiRgnE8qattEcYz",
  "key27": "656fK5bsByek8qjS8UNkvCFfbcHFL5rRDKDpTLTkde5YB2WtxCKURLwaKHjLgs7XzoqSvzKfX3w2bEVrxiqruS3s",
  "key28": "Nu6h6KnjxAzm5L6dTUfhfbDhn5uyYU3REnmqhhB2C7ZLTUhvQJxZX9aGkXBqt9yduBMrN3qXsdr4QmzdBxytuRo",
  "key29": "3DffsPwQjhuSRdN3S5iirkTi84KK4mqZ2UiSCV766UvuXkdNQuUwcD6dkH31jj57PmcPDqKMY2GSLMCwLGJdfJfv",
  "key30": "5d5jdJY5qFmntDH6vxuMPTHMWfusbK5jFsB45hZ1FKQUDFjpdzx1YdL11RTaYGkd63Bv2oxmujRHoUQu8tFRQWhc",
  "key31": "9Z1VgF3jsbyqxfvm8RP3Z5TpebL9rNaRCf9pVBye54jnGci2YjnbCr83xy5TbMN6tS4hUHRsRmP7SkDecCr4X8h",
  "key32": "5xxaAnU4FoqQiEAbwZXRMb2DeUHUycD6CunAxo7o3WsWdmwSCMQJu8wZUnF8ShkNCrzgbYGSMMNs3L5RUbY3Y5ny",
  "key33": "29QqS6mXmf3fn6HLGNeqxMexHqqpBMLrxYJbNzRigtrbiLTSm151aDJN8wuYmQgQ3ytnXdS88cnbPVUZPQ47LaVu",
  "key34": "2Nt9tAPM4SqoEPndTr4TToLFAFYStYLQBzjMqAoBfaRvcaSHKSuGDPLJELo9gSff2iMDcb5EsMaqAco23nVYGzSL",
  "key35": "22Hqvm6WAGjbYML7EKtawYQ5z7fArbBSB8ZhQGxYYweJMpZ3c3WFHkSSC9PSJmkhMbUdCZwQg7fzCkpEU3ShGMha"
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
