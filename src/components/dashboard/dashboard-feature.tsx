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
    "4Jh5XkiUnmdBMkZiVP2rjmJEihVXTjEneVq9hE1abLbCKZnJwc3AfdzCWGH8E1rMEv5U4EiPrvYJQoogpTn2nHU2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D65Pwwzao2yV9cKH3zgaKEJx242vcVosSsXtWCdvma2ESaVy8hmZ8EC9To1MVbZL11s2bzUwY4TanfYNonCCqGd",
  "key1": "2XptqZuiXuvCebhog2FkTW4U3aqG76vb3nsSGpZvzFYog6XfGE1bKXzne2rdrRtreNYrPytLV3dpnAegEzjqtrHA",
  "key2": "4HF3jBp8FbFxgDPSuXeb48KC9wWP8eGbgFW1YzxhJkRYBH2DFx2FtJfs853a9MRbAekaVwtPJX34iUC8faJ3XY9W",
  "key3": "2pfsMDY43X1rM3EfaTPRaathPEa7WNHJpUeuk7czpKTH2T4pfcBRCxxDyqDeZ86TkxBHWkGQafk4ctyF3bQX2qub",
  "key4": "2ocDMExqX3wUv43726mih9tmSRzAhmcnZFf78edA71g9zrWbNf9wmqkeZfqv4KGMHbMLJDuVc5Lr8bL5YxPkDbp",
  "key5": "3Bt7zUuR3V4NHanwDaLxRv1mUJMSV3SfNAov2mq5YjxGBho5t84iT2bMvxG2mNRaJgE2MTZvtewhFeCHSHvYDLC1",
  "key6": "46o8HYJiAGdPwukVLtzMen2D6Jv79D98vr6rgQQUq5iAC51VNdqQvAiso4Zfzsmf3t4N2YnL7kewSG2XjC8mjcSj",
  "key7": "3LCbUngHunVrxEBhdGjBRf4wpcAyhqaFkjA3jnznZuA2M8kn6fnWyRxei9y9mZphrRJq6NJqwvaFEZ1zurW4Kc4S",
  "key8": "3ipwUoA7jHSu6qkQ1HscQR68sdGakhSdXn8uzZT4cSXugktq4iFboGdVnPnmcK6Ae9hrZB72zNeNm68c6vaErEdL",
  "key9": "5SrHEfN2QEJu5SYrokmqEYQgAS6F7BBUiNXmetSh9AJ5PDvo7wT9AQCHrMJWgx1YhdtdnZQKVRzGEQt7QUThpizF",
  "key10": "37VRkAnqXxZJuEhPdEDauDwAsbb1sgytvGurNrkMKioxDkYBErzR5oW9e7GvfAnCNXXFLdUvnJ38DTWkwXbbLSjt",
  "key11": "2FxgPqsRVy4epJP7xDctQ8KVmnmAxhanpDdA1SYebw4H5tCSjUBCMYVufzMiMWBVjBsM7dDkLprxirSSKd377Z3J",
  "key12": "22W5FG4JYPfdQzhLGDAQg1eFGfxLkfgdxpFFdSo48tTUw24AaPnN1PAyVf6HGgSufBjBmyPAyNvhTB5mzasJz4o5",
  "key13": "225D4sPLcb5AjD6mhKi3jrx7PC4VDdmG6HwSF5RDQ22YHzU7KXQmbCtxUr6SncHkQiqdx9yGBNBjxG61FmaWSs4n",
  "key14": "34gxeH1bYoMz5sDEum6gAs4WvRcYCMUHWThhnXZqC4oMRxNnq3843QVq6GtCQ9wx2sXBn626MiSL4Ukh7dNwNy2p",
  "key15": "3T5xFtx7ryQGaU4mTMW5oT1MBj6TQagCNwgnTYRxYB3t51mJo6rpMQHFATskgiGw7A3hC8hiLkW8PSGKe9dUdYPz",
  "key16": "62v4Z4eKcBzLpAptfFFNGRP8nEKF9so8U1FH5qmiurGc6ymtttgXMF8PtH7FZ22QkaoW5CixYBfcb13yCnAziJLc",
  "key17": "54Fq5sWQCgQtRhnBEnQuPgsuqHdgqWQsaEFgUPAubA4QrW8ME4CjYUgfVVVsgAHX8R6B9EUc2pUnhnt1aT7mNJfE",
  "key18": "4Cp58fwvskLJwTjuQ8dHGtui8zSyyQNmTT993mVqbsFYVTeFfeWbbJJ16Lb567RTefnQpaywwRicH6JEvdCs6L7F",
  "key19": "3R4ztZzjMtdCtKSVvzLbk1BS7TRComK8z22PcXz7ESzNosMPGnRgEaoKSLeydB2capexVsoq47g1yTAfQiBsTtWe",
  "key20": "2hKvVgvEDyqpbLn4NHhQasjKULf1jkxVQxuxaneej4CnwkMjcWBXeu8QGnrBnCMbDgL3KTeqJnnHei5oVdECzasV",
  "key21": "4yxTS6yvSdpjBZCkQKpd2D7VXEf6JkFYYTSpVxuuF2iy5k1AzAYTEyTuNgodMVrRMeaBcRbzeaLiJ2hTCaYphAr9",
  "key22": "36QFf4DeBcyV8whfEB3kmQJ53S5tHxxQKd3VVwRsipdewoLz26PPjepweAVrqFTe5e96ZHF9H9Qj652PmT13DtXR",
  "key23": "4KZkjQTubQTryJUL3oKVUWZVNrM47Tr7GDCwhByhqff9C4m8AbkdzvpMLSdUnJnYcneSKfWmpwP5KoqMnC8ks5hR",
  "key24": "4zZmjgUfc4ubUoY7AhfsfXigMm2WZP3MLusf2Tp4QW1xiQs9qcwaSjHEoh5nTLvrcXpdQu6me1wEt3RmZTxh7uMz",
  "key25": "2KBzfC3vs34QwAHhbJ8ExMSCLQcWGss3Cj3JtbNeUqd3bFxN4NPr7sJMWi7XWdXSPK2e7xaNwhW58DDPerLYFbkF",
  "key26": "6456vtiCPYFAhHWHSwFyqLwmw99ktQbfm8fk4LTxjY4EKpcDM9Y9DhdQwvCUbSQNawEGSsMg3A4PagWyiLRWKGXj",
  "key27": "ULLHDCZzHhi4nkDu44h5MtkhJCSVM299Npavcy2VpiQvFD5Q15MBtgXJTTNLpZRtA2Te5FgUcEpgFVkUyejbcEw",
  "key28": "21MCcV8rduAWBjesy4nveGyiBLcuHuvTCCq8SNWkbsXPL1QyPphTdGkZ6M48j55VBgUKoDtLKS5HoWysAZrrd2Sh",
  "key29": "36STwWd61JDfU7JSaZ2pNgMQ6Hw6HXwVaF1Q5W7X6Md34PAy4WSNCmRkV3SDi5yybCqXKKTeiZZky5eghUtRwKPP",
  "key30": "5iPfu6m7XaAefSnqi8juukJY6FR5f8mPVJPzcHuKhHLdksiSNMogNvKz1yNXcGm4C7XNhuoyRUqaD4kzEr3meqyf",
  "key31": "3pXggYg8K56hkkQbTq5FWtSAZY8LvWU99tSjZVFmLRDk2xe1BudBDK3bCXnfspiSU3Gqu1kUeAX3pyjgW6zxThAz",
  "key32": "PbZPzKrmXpxCCEejgbAB6mYNM5RkAfM945xpMWLQVXdRkZb2JkHkCHN1mN9tQqXLqWr9XAHHMVbFimRyD4dtJ69",
  "key33": "25XxrgZqMqbvAK2UzBaxfX5XdgSvBx3mEgvkHkmFc4afNfhSSQBH13RtZa5WnGG5zi576NsQMNo7RsbxSQGkHoe1",
  "key34": "HqEwmNDHdETgDwCsKHrdoXkU87q3gQKdbsj7ELQp7ge1se66YCCKf7pimtQht9teoBv6gszKS14cVrjszadcNUk",
  "key35": "5DkDWRihxrfev6GjK3ThwUHv3HVZ5rejNa6ZpHrh9d5VJ6E2FJutTKecgacDBoBxHMUaFGbuLMCTXRTwms7ptCPG"
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
