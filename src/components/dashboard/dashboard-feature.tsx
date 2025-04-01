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
    "4bebrghDUkTehy31eMEe8FmUfEmQan2YngiUurB8mWLizJXrDxRE3nRc8o5kDzryhKARvQRTnFB9yzyDevBGKGRj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AkWSKBENXRQJGesimwZyMPDW6mrzbiqgjFLJvkzQi1ttCrNJkFLKUCuvo47GQtTnD82Cwc5RMU6xwPiNfXbEY8W",
  "key1": "3HbBK89T7SmNQAKCWTm9eaQoxzYbvutQX8EtnLRLFyzds2a2sUVWTTNskX1UUiN3F6SQLo855aNvND23GLxQobc",
  "key2": "3FuXsM6Tmfr9Wdh77kUGcB6bEx3MHzqK734eD8uwReKRWP4VVjFfyusSywQDw9H7XWfzzXNCrxuiVNvi5svy9tfr",
  "key3": "63bygPzx7Ym5syWeRLp3MaKeQRDwJGbGJnnKevojht5QuVBWZuGbhC46G465HycMJjBGRGubfwU3SyH14LSJYEJ5",
  "key4": "3NeWzPkFwVEtgp4CHPEKJ865nqGMZVo26sLbjuSawiMfdTXeQZDMvVujbpKR1tZTC5ZpUifvzpEgHEyx5oPsfTFd",
  "key5": "21hyiqDQxLJ3ZLdx6PuVBD9Gb3CPV6SRgB8Jn4hPPXmXW5zXEUrQWXp8Ji2ebcWk5f3hbgiSyzFknfU92pviCm2U",
  "key6": "3oTFnq5mcJ3eXkRUT9De1gZJhepPrWMX3Q3MtzLtrt5eh6JcukAam1Gr5nXWS9JsJgG7BKT3vjP7FPLANhpRHUxE",
  "key7": "2wpEimKjqGn9WTvzgWrn6ysdJZYqH5LqSVW53kYsiVg4Ak91y4fqhXBgLkPUqCxFJE9SyqudtMQqvrBvzW1W7N1r",
  "key8": "4JQCkumUmjht9eeYq3NtG1CtteyJMSwvd4uC81o9Yd3iTnVKzBGszMvKG2P5WVxXcCFytcKZPkeM6YexQMEAMSgX",
  "key9": "4CfBibZWT85YDVeBf4twqyfsUgMCSAAWRrwZguDZZnUs8smsbNk6xLyQR1CV8win82VY2ZRdtrjPMvwhqgBQtF21",
  "key10": "4as1VJsmpXU8TpFtd88UhTG2M79MWhGJeR2uC921WkhoZZ4DMT9x2wjJTvzR4Nt2TFEej8Qw6Hoi5GwwLyMGo4x7",
  "key11": "4cEJKTwQtgmXyqwCCqY6XfwTfAkEUhHw8eNRogmk8znsEJrWxH23BoC1KueTtQPYWDTz4SLRTCmSwChRNXBVNbmn",
  "key12": "4AELXvdLSGo6N8UFwLG1bnP8EBhg4aqKVCutbr6PCQqfp6DjVLZtY2ASZEDfSXRyDPMfunCwJLQfWkuUtBcNnk99",
  "key13": "5G4ed3RTqRviC2d8YkrfkBuTmtUCgnN47q8bvADp5qbcVfWNvN2dE7eZiZZNKfSH5dpxDSz6xEMh8Cb4MNRRE3EU",
  "key14": "2wwiSjVXXtLTb84ZMfnaGbgvhrE7MkGdbQCViQVBBEwq8uoJLNExGVvRCLAXCy3jt1TvTJXPraVEsZh2LQ42VPsC",
  "key15": "cSzE44Mot9CRsyimj8F5MZp6STWkBybWMe6rSEjbeiPQwtUWfnGorrqRNqQFBTYDBZsdio6YaYXWwG8EPH1Zi6w",
  "key16": "2NhGEX5tDs3yLZPvPKvkhzkfSgH8tDheAsBxid8SCoYzruQCqjVZSbf7dTEyCPCQFAxLKCpLqA78sEUraTe1JuV2",
  "key17": "5oN2nJf2sekQZFQFjMzvvCugxy35FnSAPGPF1x3uivzWQRSBE9UCxcWwy2PqneTavoozkLmdaVSaQWV9uVUdrhTN",
  "key18": "45dTSGiRQ1P1FeNn596Ks3FiMSMnJJbASGzByX4mTu5QDY9R6bMadR59uj1bC1phGyFRxkJhPMcvRBLoiCJ2p2Fh",
  "key19": "7FqmAqdQfpkwa5BFxT7cTMNsWpA31WAVDewyKZVHQxAjUi14jUeP3q4e47EF5Qk5BYgLjwkWAEBuowLS5MKVtPd",
  "key20": "4fYAmXY2JbiKPimMSKLKuw3N18ZMvq5Uiq2Jvx2wbJ3R1RUycK5PYTddDJk72HSKBdtkWuhESD8AAZ6GEHyoj72s",
  "key21": "5dwz97xYNn7d83E8ZSVCXKFg2b7HsDq2TH5QRsbduJQ8djd1A5h5SaQFoEsE3zaDVmpDDC61w8MXkUq28UZv3W4r",
  "key22": "4EghaqAkKm4vLpWXYuui26HFwcQSZTnYKFFo42X3k1BkmintwukhbroFpagb51963689oDcvaayEwoo45TTKYw6D",
  "key23": "4d8vf5CEB3ucXAh1at3cLcSxBxchWCiv6BpgXBCPxd9UhcxDTkJQ7xkTsbUYyr4sVkVDMc5LHfPChRYWU9uKNAVa",
  "key24": "5Gf5ntVcFL91FQ4yy1JojoJbFm5riL3KZBhMUfMhqB2gweuanbPHzdUDET5ouMtCjRw1Uut8WgXRYxxYXarKShqk",
  "key25": "5rh1pWU56uC66ieYgxJJsGt7AYGpgHF8ywunmdF6Fvm59gYNZhdQvQ8ctChQ9CRJf2a5iGSU8H5449KyUXvjhUhn",
  "key26": "2dKjGHrFCoV5pjoV7TTgD5ftsjQA5ZGcr3PaPwSQS3tVU23J8GSVnsPX24T1QxZDb19JkoJrAxRfHQ1HXescXvkG",
  "key27": "5z3oLj1XoZ1JpFYEyQu6A2xkHyv8sNXm6WSx2Ntt7doW5F8te9w1QXKwYJWoN2dqA1XtMvfd9bii7nzZVXQj6UT9",
  "key28": "4kesXdPfi7ev62YnZbkgB1EinpFvxLVwKKyvh4s1JeLgq7BSut3MdXmYxufoQ8fBiSTJwGdcJJz7SzcxZtBAHE54",
  "key29": "3XrTJ7UW7GNRB8sNVPFyMFVR63ubvr955cTq3si4y3bHEgVwZBVHvRuSW9zyt9aP1boT8MVtqgTjMDW55MdJ9nzA",
  "key30": "3QDzkRCdNAMUn8KJ6fSpef5PqgVxkXxs5XSvBtXbuMmGNbJcJ2DsmuzZm4Lz7CTqGFcBpARFdNWzKWyPfqh5WGnB",
  "key31": "2DMNLoPLesakGGYwfZ3aoETfQ9LV1TvJzVgUroMEeSDdLvWA7a9hobCQBaEeSZzNVQ8gatvejCs3S1e7rVBGxeFN",
  "key32": "5NopLQQHnKR9E8m5tjTJrPxV8PiDwSiCiWRihZb8xKTCZvKwGQHCjXef7sgsYFJuJhz1hUxqe5LG6VjR6w6VcBzn",
  "key33": "34ov5absWevno5ZPjHN1oq7qJWV5RqHFKgnFNBu7MrQxx2MK3BehogpejFBZVNnWjHwJ5AzMiSyc3rB23MtHTQSt",
  "key34": "36MkH3NQP6aLKoV2JL7jpneTbibifPUPHsAsTDPpj4g7frWdYLZjT6Jf2ouqoKEiBSusWMD4B1GhRU7rAgiV9uov",
  "key35": "4zji9hAQchtTRd82QnXG6fu6uUpX4qWstPx2S9cAD2XwxMg49hbbDQFvpkMzJwCWjehmCD1Mq66Mi5WczU9Tw8Yi",
  "key36": "4awNinyzevqQ2MWJMhyfKkL4Pbsk7Mb1Jwf3B8Y8nPYZhrj6uAwgGc8rCLGen65D4ndRygkSbJ7pfYwmjksPnZHZ",
  "key37": "3h3VHY5KjCZcnyBJEEfuXurKmzAdJXKEAddL1EB2gaPMnhZVh6wXBduWZFwDUrPagC7tviwJ2MWQavNnmPCswVW6",
  "key38": "21sJPKZ9R8cDHc8usdgLLkbE3xHsfYSkF4ntiLkpfEMKRMDXpFt6bhebyuxZPehC9XqBjW5NPuhUFATREkhc8NmD",
  "key39": "HvEoA3yj5WfoKPqZnKrFqp9z5Rvqbb85TTBCqDdBBhQTSHw8QmyFZcvM96cspJ1bRnU9pd68GnA71g8qfuDXmah"
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
