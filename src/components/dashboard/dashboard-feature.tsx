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
    "2RUGC8kF3gaABNgQuNaavzju9ki4jzFdgMprzpgDB15RGRm3Vuhg3NMPhVr9i4Ppr82FstxZRegAKpKY5KXtif88"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3tLBgCUPrxU56pmRX5JvNDkzVkzhzsR9J4YN5VbayQGCqfMG4uXw9TfWZedEiphxif149Ls5FKwSwM4uvMTG1hKY",
  "key1": "2HxK9SB1X8ZaMeXCmgLDVH7mcG3Mmo45fGUc67BxsizyLkPQ3qGcw3KtF2afk2VDVpoqG9jsb9S9Y3mN2WEM6Nio",
  "key2": "5vWjxaYepWxpLG6X9TPWamSpnwFuXVGKPh9r7f6chQHmzGmpCDaKp2C6mGa4k9KK9SDrgXYJddvnufrJMipuXd3",
  "key3": "5pqneQX3XotRGQKzCDq5jbX2NL26bNds3KkRhqpdJYGk3CzfLjMFa3GAxSvQSsh2SLntZ8DJybfiaxnR6UX21wYx",
  "key4": "4WfX1HGHkqibTeL3E9ESD7iGkJHR6e5PyjMg9YeujXP5cERfGYi91StpyL59ECJU17WwNKYrkDaAi81vjHzjdkVn",
  "key5": "2rt1wScGNmrSLkwLg4Q5k34KWxxMBNxAZsHrVZSTQ8EeSgttB5xoYYkXafyDvB7y1Dj1kjnAkESV2Hkxa87heFtV",
  "key6": "39cGftsVF5L26wd4Jc3NJ4wnx4tuqEWJ8ERytgw7cHugzn6ECUT9te9mD6CyCZBNAj9DdX5jE8TthTA9bm1fTTjx",
  "key7": "3RgFgPG52zWDGdYVxdNMBBFKRcjp6A3xo4kxCjgdDByUhvToqw66MyEn8LTkRdwftimQX16UJcnGAhGXqWe1kfSP",
  "key8": "2iTwizbnCVvsSC5xyRUkcUE4JnUcyZWN7QmLPUrJRt14m7Rb8dzPdXEqriYndRirheE9wm8syNPUMH8v4xx6rYbN",
  "key9": "5hL1phDNYtVNr7Rj8P3nqSNQmHNXmk2EiVUQ3zps3T7W7oGVUbbKcQCF5yTVJcLzUsSREVpZ4L3v1NQbdi2gUaZp",
  "key10": "51kV6vTBLkfrbzb5SUgPYV3ZSYhUpL9TxLNEbMVZaTqL1FNphgYvfjAd8riiyZ3NkUF9wbTqVZ4weQ4chcGdUtNb",
  "key11": "3Ug8HNz77GLiPaCB99wzLaktR2QAPpK6TUsuwqH3XRgyHFA7VxCgZ7Qjw8HzQxwNpLVS5jd9Y4h8HLARawz7WXRU",
  "key12": "23FkoZhXCRbmeeLtv1JAJJsij2NwKHswz2oKG2qkfR8N4p3v5ohr78ybMZ3s1SNGgM9Y1g4drnjXqS2pymnH5KJP",
  "key13": "41vZgNiq3CwEZsSynfgJZyc7DCsebDvXTcQNvzdHy25C7qQ3mRHXwgWqjqskUXGUt8TsSyXrMdh1Kg9xUJLqwiSH",
  "key14": "44bLJXAGjXVyt2XKa4P7Tc2AxT5keiEGFwRTrX8ZnKmwZg2moCXaBEHdcFAkRzeqxo1m1fRtBsMcjBzQmy5WLo8U",
  "key15": "xmh8PgPgYNzvGxyW8Ks8RsKuMw2saTp9XPjJBjDAWp58bHUykrenPnFGWdP3BBYzm5jzD9oSSTpD8Q8eXeUmc6y",
  "key16": "5YGTUjjXLx7rWz1goP4deB7wDi8EE2boVcShPPVBTe18Rh9KGNgZYKGDSNE75FiiiVpRCgn4mpu6P6cmajwvNc4F",
  "key17": "4KUaRS3oaBPeinvm3cumEK63dqzBkUFeyxU1aP3H2oLiNcjDfJfc9GMpsLYHoiWbLVWkqanQBYAG8DAA7disYJ3e",
  "key18": "Ukt2Fkqy5YtZCZFtVKdsdueYCywdAVMs4WErs4VmvrypSpXAK4ZRZ8Y6nxAfCLgrTpTpQdPkNdWpzTDzmnFoLXP",
  "key19": "4sPkedKcxmAadw8em7S2cuNHk9x1oziCkNA1ZYBfSsntAW1Se5A2FmLab87e9wLFzeJmTBSn2oAskSoLiSsJrarP",
  "key20": "3skaysZFiXYzLnSQnhzqdrkEq9HAcVXdeT3a8pMZQZ6qb7VNobzF5H8hL21bbM7tVDJrGCr55AcA45uhjWpqTXj9",
  "key21": "2XP4EuEjo7gU7Dd9HRmYAaaeVRyrzCVXNwVE9hLB3Wf3xVB5dWZUmz84AfSS7VG6E8AuVhHfz6JAcEPfuhPAm34r",
  "key22": "2p8X8B2F2kkkeAgSTxDc6tLy2yHvQFQ5xR5FiKBmcbmHxuSYggJCJNKorehCjMWYuAP8mwp831mZJ7LJbQaYbXnU",
  "key23": "2Ef6aLzes5L2peB3S9gSkTMmShpY5KokDuYmT1Zw28CYRB2jGrHhrGLRRpCD7mGLenyod6XCd9oHg94rmLYEyitm",
  "key24": "QuC9f2MkwBVM6hkCVNMZn5UwUV9dWCe6qE3imLwtVNtLUEM8cRUc7qNsgeDjy7aBouAMidEEmS8oASvb7aSDtbv",
  "key25": "2AVchTCHPcKaDgo43JDM7BkQ4TZJ66g6oW1CNkCz235GQMGvMGvSauLDnxMnLqqM8ZKx9YM3o84XvcjtYwCgaB4R",
  "key26": "4mtEscAKJvmSTeeFxE3bFFavBVCn61xbYTHXDHeMedPawV9dra9SfD5JSQwDhUwj2Rx8wgyTaKRPv9A9en1SAyf4",
  "key27": "NfDdS6DiRFem4MTEVcd5weaCpCQoqdCc8RCjWepRz4B9wY7xvHwWeeX7i1mShJzrkoHj4p8axBTpTdqdKz546Ra",
  "key28": "4HDjEQqG5L47VAs6FvbEZHj2Sj38UfqzvkCSdFeD13rUSVwnmZGZ6GkptJ6ej9ErjS3JSmdbC66JYB4negXF2k4W"
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
