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
    "opPCU35XpqKpUyy8JFWgfnEGvKRWUgZ6BcfcbY72vJgeJNhLQZoqCJxXNAumtJtkS4ujpRcAeAkZAVWo9P9aNTw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33d8fUJW2k5sBd1QJ4vJPUNXy9E9snff2wqsjkCL6c654TWM2CfAoGuw8sDMHbfnfKrYLp2GuqwqvPbKXtRUz9k",
  "key1": "4DnmzicTmeZw8PazSxr9djCPGcaCEFVuNJCe7PMYqTgbf3hmgeYmUsU4cum2Tti4ppwsoTsYqJPGrGB9cDKjJqjo",
  "key2": "2xUgWXy71EJaL4GsAkwwgw5raW4YsKRvJz5U5Af6EpJ1fZT1Y9i5x3B4EJV5qQ1Sh2cqxNRGS2pPYnCoqvKHXEQs",
  "key3": "2EwycZUYN6zeNUDBEhjtrBoJ7GWdRK6caUmFzsGjjHgzwNJgEZ4MUjyStT3ktmarz7pBLMibiXRTT3gLG5mujbwy",
  "key4": "3FZv2zVThKsfQH1ANL3aAp4PqAsUhWtR1JgdJgfwvLzGqGPTJUecvCPcTF9ncV5XtwnQ2oy82Yo1v5E2se3ugwxq",
  "key5": "2bkLgz2bGiWjx1ANt1H5yJzLUistRUK3TFLFTuDf2LaC4Ct6ac4qoAYcVaDMcE4QUuh33146X99MbVm5aPSfQzvJ",
  "key6": "2aoZnY4q1r3ohTHUeeXhD56vftC2ZdoGqSgKyHohnhyQNZmxNT5wFgD7Mu6VKUogifgUCX8xUFPDfsDDSgA6k5mb",
  "key7": "64NEuWJ7z8CxWN61J2gJNDkBEcBAW1bcV1jHM7qRW2YqbBYBTQjDN7DSJkfxx7tmWp6skDb9XHgFSZhFyYtM4s5d",
  "key8": "65bc6pjuv2Uwgu8N6KimSkvC5697H58GgWuZYvMxhxdsYvHmNre6MrqESCU7WuMY3cL5hANmWM3vgdC7UcQQ6nCS",
  "key9": "2BbY4gnKCByYXozKmiPto33gysBkLMEvw5UifnGmRV3BaowbpmeSvr7CVwEUbbLdL8cqfA12kxZJZhvqrnbSxM7V",
  "key10": "2sjnQDudUoWSd2LZEZGPGMHz5yrxtoCDKTg8QdXWFq3LCeprTn8KAhNVGFuUyqpidDcuSFwRrfV2AzFpkAzidHjs",
  "key11": "5AG6bde2nrC7qhS8Fs6SRU8TaNjhSAZnxCEtqVqE1XcQiNSg6MnqZiAQ8j7pDNDM32EZ8CCCxzDoC2XCDwSk4H76",
  "key12": "FpxYzwGbLGPee5ZW8PXGvgzXxBBazAwzU2Qmso62GKosFmCAZsiU6VcRHgWZwvYbvsbqH36qkBG6RqrPHzkbKTW",
  "key13": "2f2ENtL9eS3wHiJ5v9Bq2zvsJyJ1MrvTbaZzFQy5QKRCztULNtMZ7xWurXeFdrHu8MGQEpqE7s2d3PXrBr5ao7Ls",
  "key14": "5HX53ZjaDGjF6fahXgSGGdriu7QEuCdpDVM8oSuuWfcYkcn8E9K1sC4YnDNDdhrVqb4HeJNgLzGpEQbm1PCC6bRc",
  "key15": "615KzNA5SUhwiE7FNG64vvZtQXakzpCpqPxa4YFCUeVA8ZU1eRzDZeCikE6zbDDznm9aGuqJFp47c7tjjoXc4yQ5",
  "key16": "3GJzA9j8AVz5bd6c38XwVyPRWwLZitUrmbjaaTjKrBoBYxgFVNm7MASZp8dkGvBMY3As6eBjg6PosL2eBcqKLbyG",
  "key17": "gPS29gmeAd6VjvuSJocJUjjnV7fs3nLADFunc17j6tenkufgh57UdsTfu9NLZzD4rEC3TCjea6G3xFoDUy3BR2K",
  "key18": "419RqKRZ8TbnRBUGhsgvsvMS5iG3SzshyuoC1WvUU3xviHbp9D4Ub7oc1PhdkjHLMSZKWCLL59ms2RWtRX3Np7Dj",
  "key19": "HEeJsiaTyRZ85vDV2rSwtzdGP6A1yBZdTjiLPPmWW1tk4fn1SEwT9eufj9HUE7T2A1AFx7y1QBQr2ooPvTF6Uy6",
  "key20": "5mWGZtsSMwpVefckW4U4x7VWbYDTXtYNPQ8DaMqFPqggurgHncWkBFjN3Q8UbbKZyUPhDtmQSUuJgmgauJE3zn81",
  "key21": "2y1JdXCAWYUi8dRZJfHMb1y1pPkn22RywBhpqJppoKwKeV4sDCoPU5JzMHMyL6G9b1WgDdZtJuhJdhVCSNx23xzz",
  "key22": "58FgTXZpRoBo7txdTbL3ykqVsF9QdGKLNcruHcKVZSVuJJJGBvYda88Yvj5czvfX8vhkE4GuhgqjhcmYJ46zgmuf",
  "key23": "5vx86ijPQe2up4JDspcsydz73nAE3HVJVyK4QEf1WCrpoPy45bdGfaqTX22FvvnGUgaBptpnt6bytQsHGxC5i1Q9",
  "key24": "2MhAKyHGPKe38DDs6nkJpsK63V4tEGFwaPenJpgSgzasx2Jqe1yPbakcRgnUjKpDyiBrqmVyi2EAnUEVPLtLbwNr",
  "key25": "5QmVuUz6vyo5zDf8kMkDdxkTQ1J7Ti445fDiBioTnPG53dhBmdwTt6m83KuJgQp1sRuqfRso21e7a6cen8Yydk3T",
  "key26": "W2B3LZ7WjgFd8V5kkZdhLs7Q87LXb7d1pPQsN5eEjMpRZ7UqcyzptVQb8AsJfFRqNChAKtX56vzu2qChdcX486E",
  "key27": "2APQ3zGu29jLiyXa9m3RCSGbX1q3hwxRtL5i9UywafWMRR5jujQDssnWd65Ryx8K7vVhSmNHZaXqXh2Yvcfr3DtZ",
  "key28": "35A9VpYx5VoR3qBLFQj6ed93zE2ZKyxaRzKBs4EJx2o8Br4BwzaTs2P1oqBuhwg1oN3SiQ7MeRhFDAp7rSzrXisD",
  "key29": "5ihA8wHG8frvLigLy8kJtENarEzpckBd4TH6F9YafZJgEuAaP3D5T6cecW2Pt6HMncFyeazBzU7vghhTH6NUZfz1",
  "key30": "63GLMFw7dzLrd14ix1sGeFL4Hk6SFv9jCVzvacmuhWxCMbB5TrR8Fn61VUqNfFE6BPkiPqJNBukfyoWRgjaV49v4",
  "key31": "2yApfi8pSAEXfPerKxoR8TqMqjjvztzk7A9BMbxnuidFDPjMmKKsfxUqsZzE8DSUW1E2UeRa8NtdbN9fyVyVCuAs",
  "key32": "2F7HVjRdF4nSZ1D7FWSUC6yEyZrRPLaGUi5rx5VvRVZSFpoS4Dt2ALPXue9XtkWg8nNibqwdTCynPrF8UkHE8mdr",
  "key33": "319eYiDA1efyqdqAi2JJepD1VdnZNEsyC2BYDPQpU8jB8XeCrHSzNsoAmvJWsMMBkHv44751q7BfofL6BUdp1r3E",
  "key34": "5YEkA4JNf5oWnMydm6ZeV8WE7FHsULGJsP3hH4ZoLZ7YhynxKjsYSAeCc2mM7QXDwpf3dgTq5kXw1jqYum1nXoa8",
  "key35": "QJLPKHFXEoWSPkEHnBYpbFMGj4KDQujiF6iAhGWGJCAYJGEA6LmGokKZk8rVqhQ5jAqrJvj49e7bkJSv77UoCak",
  "key36": "5RBM2QH4dN59KwWNStzWjsMzQbSsr8pePzMNKNj7xHyJxufy8kavxgJhKoikmePQQyKRVWwMyRxupjVQ5Pj3rfJP",
  "key37": "3zCWkwgCC7fFiVey68SZr8LMwWrgsHVX2cuQEMw36UjkEpZyM2zJyfWW7GWwHMJM8Fo7ZNbDTwxDfh2NzfHJdCD1",
  "key38": "32UsTVwanZ46BZTr8X4cBET2hyTMkkKCrqkfLbZkkKALCcKaXKBUADHJJbW4oPrRXK478ZQrMAyEM7xDYNiegEg8",
  "key39": "feExduGnrK1zuPsTJrvp1HLPR3VZjycJMQMCMNm1ryNCCJqd9mmW1T5PVS1nRehNpSoJMwjW2Ytnxmkc1B86rch",
  "key40": "4keGjvCUd4gJJwR3HwC54H7FDtCuSn6mM5tr6CHa8m89BuyXYSSbre9irtcnHvXpYL4Qf1mTBi843J8rn5gEgLMi",
  "key41": "3mh2aco4WfDgF7Qw3pVh3guQtQKm5NakqrL5EmaurUSSEmTxQynAuMz9CZjz7FASoXnsEybYYyTiDjrdVp2iRqkw",
  "key42": "435MmptVxr2ApuLzzzEwTWeKgUzdvSC5t9FQYxvV1UVubEjDAvWEu6ErDUpxUj9ejz3fMdoSjSL1UrsRntszWed9"
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
