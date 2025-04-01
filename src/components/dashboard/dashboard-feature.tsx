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
    "34vj2naTz7ncUfmSTN6ogBhLZLo7AuHodF8nwWWfxYequJan8chwEmd46N7rTRXJBs8onLU6xSbk2B4jGRuXaTQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2YgTFhEJDJ19ZuFDefsJ5kUyV3TY5FEnHFB2ezJ7NTMCdd1MWvmwghCYwkfLhQDP6VNVPN36U12STPrzw7KoH5TN",
  "key1": "juT9LTyvSGV9pDefYCpSBGeAxfSKJknuTW3RBTDLiGNA4hPoaz5vrAAcwbe9oxm5KdwCwXSLqo8HnP3FBY5VEgr",
  "key2": "3AYXwdEGssHudAsk1VCvnMnVtBVTcJmvhZTnkAVRHpU7zxffs2cNgSx9SmvYGxob7DMu96mif8GW4trzgghNZjNJ",
  "key3": "3khLyG1Y1XJtNhsde9g13eFHSL9LpstHqt7o4cnz2SDWEHR2sMiVTuadxd6QxU1SkUMDsi78EHX4uXWWBLUPG4SW",
  "key4": "VrUTW6FjWt8WaquGPQVvtGmmYCEgX14vQ5fe8wnGK6tFVWxXjprm1JVSd4sU74hJ5VvaqFYAoeZ4ekozCmKshC5",
  "key5": "2jAo9MP3zGHCzQ2en8PXxyB1oH7H1ZKZAkNbz5csDUMxUimH9a7SakvaprZhD5Px7kPatTgiRPR4N8A1cs5mKZTM",
  "key6": "2aLyDyBXNkNb2avyiiPi3Z34DTsisTGFHBckCwtF85pfJ8FE9T3Xxk6m9212oBXRaziccRLKC2ng693fKX11gJRE",
  "key7": "PBkozNWPeEJvy9AHTaJt1PZtf8fDXhE1rULTnRHi4gWDwVQagrnt5R3zDW1tDiPtcWQzBP1GLpuGJNQVqpwXiXi",
  "key8": "4fXxLrV9bSoomA9Kq5gSsiLvtV38QhhABj1pFQyqWMdZZ9uq2FphQQrqcQbuzkmoWmzF4WjcromgMq7SwyK2dhGc",
  "key9": "62sLwvkmffiQnPFzjFHfMzEp8Mabj6tgXNNVoQcmsezyxUYVW6NdeVsJAx2J6oL6XAeUXCR6DWSPA3JBuidEfG3",
  "key10": "5i9VxvDcenWgvPY6LfAcdgxCXEUZ8BLanKvuJjyEWs99ACjtkGz758xbyT4XC8LsjbGera16v9GhpMvYE3ih5GLZ",
  "key11": "FCYtPLGeKGXhyCCm9iaiEvLUM1t3kf8cxaoprPEtbEUkHr7uGoi55Q3zhaTJnXa8g7PZMQ55SUNstSuiCu5GHU6",
  "key12": "213q8L6sahxLpTYxP9UViA8pg6CqZrrKDGTxNHSB1Y6NiEBsTZdnNNk5QTMqX8wLoGiZRezADeBwZMRVfvCpPRbr",
  "key13": "4LqwYA1kwTvdhz6j3JppcXE7GhgGao4KaSvo23EC4iXc7CXaAsChLhvamL4kUq12SEZdsprLkYdFHvPjz8eYLnT7",
  "key14": "4eoNNynetSo1iB1CBcJRhR5UCpbnpKQXQDuizvN9czmcU3TGqwAha8aXTYwRB9LDtEAVKx7wdoTYtXoX3Zmdbu1u",
  "key15": "WgyVG3SV47gXdKMB3TY9YsP9i6tGSt9v4K9yUwTkL9JnoHfdhG4acrqjkqKNeZuhiekhbeVk5cuCHMUUJSmLtkh",
  "key16": "5mDuRydsUSyB1GGm8Q6wrjcQCsvxskZQwXBbr1zTM4WGSdSEuHh3y1DhcyoVTqpecDhixEDMb11cS31TVqWyYYko",
  "key17": "25oJbMpaheS7qYpTAaPtRmtEcbyWVeLsZwKfReL3MHH7hiAcDpsrYPth9ttk1GkdhdcHoHCNSwp8n4oUkG3Vejhw",
  "key18": "3JsaM4k9gDFsfEGgybvxMiajaAJo71PfLbPV8xwWQL4AQWWmSBqdbv4Xekuj8hdB2WAfDeiuqUFKzZA5trtg3V3b",
  "key19": "GhCrzsKiKxRC67VXFJUD52qThHxC2e2xpFr8hABwve9FpAJMcb7bqqazNKj4dt4f5d42d2sAKqk282o3k4MMqyT",
  "key20": "5QedxS4PZMBAYFYbPPLo4Gm8ybre3r21SEabDu1DBuLkf7MwbUzikPcZqXavGjo6aVgYL8hF8F9gvosZ7FUAuo8m",
  "key21": "21ztWHVGiRVnBJeDoyjBQjigBPqzfJEePYnJ2ibnG7aZeggdHPTyBqsJYGGr2F133Bhio7T9Ns7vU6QaQ5Svyoi6",
  "key22": "4HzsJ7ErzzZkTw9X5bzRz2L14pCLhMCPeebd5FU1iG5SkHsYJMXnEhd9pZRVQHSBUEb7pgCtpJXuwSbesGvgh4oH",
  "key23": "VezVG51dscvRffjzvko4keStP7xxsq4wChrpeaEbfjdSjR7ZhofpEXm4uoXgoWwmViUu4MZNrZETzDYY67ycLcn",
  "key24": "4z39NYD9jL3F8mviuCLAKPr2v3VDcWdPYJByNkppU5CEDpcfAkKT6TLjTBFjeE1EW6XtpNH6zUsC4SFTEaj4jx9v",
  "key25": "5cEGZWaRbRvo7tBPv9LqPjXnEwjo8C5T12eqw4GgNmKGGmfhZ2bvpekrag9cBPDx6FSTAx2v2xhbVcEupeu3coPX",
  "key26": "Jw2RWDGdhA59BKFS46Hxywm7gkF3KnhaVo8sWhWFc335vY8a6nTt27Qv5g9xjvGii5wUH97BRT6CxqoKsoWUCGR",
  "key27": "5BYAwr2qiu9knKuPAwc79urwffq21NcWzoU2sNbCs9XdwGQBhUinCi5zyiG75VUoAfZMwaUn1sQeHCLdGt2DpCzs",
  "key28": "34Tp8K91cPHxYMk6uf9grunkLsFZ5n36pAGkUu8Y4Q8pgGYR9jtLdNpipe6SXQJ9Zp6wFp4RrLmfP46mgE2uVyf4",
  "key29": "4BzP2bV9T1HQH3xfLojAcWKbAKnLzczQdF9DZncZJc4ZkQrjt8SZfbWqw2k7WqpNu7mu9nMN4q17hqpdFTGGjJP2",
  "key30": "pGtckQnxJ8ts54VoP9RHLP1LgqgbXuzFq23JBci9vWUcf8v2WFuVQTKEzhU6yghZW1dJvLcpn47mhh4F5Aa835F",
  "key31": "64KZVE9z8zY94cWTWqave3nP2Xj9kNbWK8x3p8ryJ5nBmuK2uvUsjGt5xzrcGpbRvGYHn2suLHcnNTbbSXeZv1nY",
  "key32": "22gUyjTpZW6mBqAiFtLzsBREHKQbZ25qfvCSKHfayjUk7aEQnfk5Q3j4CDpXmMBZHNjMyiLWfr5mGUjCtPo4eB4L",
  "key33": "5pCPKYRTcNakd3XHQboAt6FRJog6jCZg7RcaabVpQywTB378mvYXFMYuHSU5kkyUCBmBgAS3WdoSAdUj7VSWSD7n",
  "key34": "61Byrajug1TbKZjtv8Tb9PdbBZV18SrZGq8FcCyuAA62yYjfHQkvAs1xK3KnMBhKqfZKWwJZCXJQLNqGBYhaDLaG",
  "key35": "2ojgQg2cJ8i2srCq2ExC2jRrAFheBYzUU76zCtSKy4z2NcuvtcVYcEBco8d7mRGt8XiekiZaMpHcesuNg6H5jjTC",
  "key36": "gMJfCNafrGeG175Yv3VDfHUgzfZJ7YMZyby8NaZhvinthdYLCaxXfCKE6YAsewMVS6WRYmfrNkZgqiWJWfEbdd6",
  "key37": "4VcgvTvmEMaQ1D8RwL314FbdUAHjoMNqsHDE3UkVXMiyBCBBBtWtLDfxJHCFPX52NkqS8oHgBDq5SC6DCB1JMPHU",
  "key38": "3eXtganSFSHmusAtXMd3fVKNLTT5tr6McW2g1y9ntsFhgUmG4vKS81tgGGy7jbsXnYegJ9k5kafYknJhRypUQsow",
  "key39": "5QsUvqaLfjUKD1cyFgpkqMBMg7VAvMbEcLmrbUtE9mNmN6REjmrwEH79qfQkzCB89ex1UwBJ7KajeJae7VqLbf9",
  "key40": "27pDVrSmbwZTyQoH9HAD9jXrJrveuMmFxRFhhWc3cdnMZYcVyCgziUoP4sJKiDf36uRtNRTnYt26PUUrBNAgT72a",
  "key41": "2MJ2cgWmnXzaPZStkn72xzrN6pU49EfrrYno8k62HjUBq5awpSCe6jYUVZQ8duLcTFYPbV7u8rGGhFtjcCEjJrew",
  "key42": "5oxn6HgiMGWgz1xt2ZRz4y3knyQtQPQMGj79HFucn7RVT53qTbA9UfdDFhcD9AyuHh66nMgp3uPkkt8sEgWf7XpD",
  "key43": "4ZqyF43t5PjNuw2Q7o4scYKhXFrbqj4gbDyDACXqEfCrT1DT7Q3tjnt7cgVXJBt9KRTAdL3YWJneFMPjmuqyJooR",
  "key44": "JmgCSvbhDnU5kTjTz5m1SqpSCysyW9geZVi6ovQ84FwczW3HeKcmqbzCvSnFxY5Zgm8b4nNEDwywdhBxTdhLr2Q",
  "key45": "3XoPocrxKXkK8G8A93MkDMcKT7sjTgmHaFfNt19XzCMfPFavV3twaGqA6rXX7woxpvt98ECAg3U8eizWVZPu8EWC",
  "key46": "4ShkvuZm3CJZ9qx2uPF37teDc64Hp7mzuSumCFc9tC2GKYAH6x5PUKsf5sGy5xXGV4ZmdYCfPLMkiYwbnhh5a2WV",
  "key47": "48mguBJmFc1GqAe72VfrYHy1RtNWuTq9TrYSfNVkLDyVMDiAikjMNtggBgX3dVT7hpKc2LNDuWdL2ruaK9DEwuyN"
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
