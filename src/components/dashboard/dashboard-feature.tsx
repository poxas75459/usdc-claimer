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
    "24txcZvf14GVhmjtcHvHxdMik2k6kTtYGwzpYeDS5oMXR19ZXC7sCZZWcLLoy7JrAUsB6F4w8G6jUxSKQp31tm9q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "oZ9FdWbByq3m54mnTemPvoT291SFaVNaySERUjbmcjfg8n9v2ne2nzCsy4WcbGAuKjrjEC1xnASk15YL7THDwRe",
  "key1": "4LnooMUyESkLnPgsNXNvR1SeMGAmi8rEUsaPopurQNvUeYNVT2TfmFAXyXukdApgjPtLBX75AQoVLgANyWXA53aa",
  "key2": "5Nze3rHLuZRirBhVC3xZr2WY2ZHNcbRzMWa2zuDVMqRQdAvQs84P5BEibpeTYbJXPtvn57Bm4CmR8Uaju2n15gpe",
  "key3": "2dKK6WR6um9bpJrCCK1zTEAciJdPcR8QCuQgrZkeoMzJusECJ6E5UZxKy1hmfki3EtCEpYcKfEyNhDtYEuWg5AXR",
  "key4": "3jPgSHvv1x6aKnLXV7VM3h6f9yP1c8xkcsS9aRTRQh354JbFreSJmFLdEQ5q3WhHrhfWonuEQyTJH9QM4Si6Xx6N",
  "key5": "27iStRQuy2bSunXbMyDbfwe4u9oNLiKZBxAjPsHnETSEqtr84Psoh4zzD3qyhZGwyUgSm8SSCNgJmE9Hb32arU1Y",
  "key6": "2BHL8q6TLfw2AqDzebcEv6h3H5u9D1xGUGj5hqAxEnq31eQ1hT2y13DDC2sDq3xW9VT5inKN81EE3wf3ZZVUNWct",
  "key7": "2rY2BKUv8wDjNiEdHJyqkD82puPae535iD3ocdx24JFmcyLAYE8Y4mm517WXyibaRzEGQFmvndst8UA3vLyqdaUS",
  "key8": "qNw6DFohJKY3qYgRFxNhCR6VfSfD2FneRRAPDUD2k4UjqWEgwAkmzRYu9xJrd1HMNAfb528CDYcsnx52xmvhCsL",
  "key9": "4wXtt6ppqBSdT8Jh9Wmx8PZY8TAYKhDBtrUQXJiHzp6GLb2bTfNyDVXf1pvgFpcTUCiM9KuAYCHsNQYd2Dzwik3a",
  "key10": "5EGdPW5NNtG4nENtHxcReeBHjsNM3GKruQZg9iswdkYWv6mHFeymrwHcEkH3fWbbJfpTDV37ndUPeuDkxVmYdTHn",
  "key11": "mvgZSaCatvRAW2Sd44xwPWNidfbeM9f2hk94ka7cQKM2k3nF6z7831xAwkz6J3d6DGjP3QwtstMN6mjXgKn6ew6",
  "key12": "2Pq2Gq8WhTG9rSeREHuACE9ZcFxJ6FVyeLXZ47AUUAsaig1GALEYQb8qELPzucqchmpEF3UEyZ2XYmauWP45wVd4",
  "key13": "jyexkyqXU8aYyJmRbqbKRZJmfUnLiK6S8VMBX7ZiK7Di3phnsYx23mVnGxxmHPabkZnkFwJCHcpVqvJ5krLKhgF",
  "key14": "3HfxByV6DvZcJ7CMMsNfS9KGhZJ4MwhycGqzWiwPN8xc9MkwzFKfWDKgpYDdAv7popf18fNQsUuRgJ7mkazkVSsV",
  "key15": "5tiCfaUEKMYftTTvosRTafBpsukFRRV42jG4fU2wiW87QB5iBtee1NSQqFiNsdxhjNhjFVMYPjMg4gJyxeTBUjEP",
  "key16": "3yDbq4NcjRaoT1iNX8VUn2xYM86EWVsVAbycYb42MVDJ7QASiBrJV5EHywPk4RLq6wTAwi6uQNHAG1xKvmKygTzp",
  "key17": "6MGvUJ54S654ytWi1bD2oLkyQE3yPDnJvGs7vrN1WtUwwxQphF8qgxdD9scE19eGiR81umNDecry4yT3dRkMfBJ",
  "key18": "yf3a6JnwXDNgPHYWuAPak1gk1KphMLHBkMM2QqHiQU5fvm2H15iUHmuVpCutEC7QGn7eJ4wJyzACJ2jbZDUT7Bt",
  "key19": "5ZnN3WAcwregyUNumvDyuWYg52UibaGJu1Lq53hUYJRoy6X8Z77tDz2vXEPNoqGqEFSmsKBYFswEdt3Szhnd11rV",
  "key20": "2Ureempkh9UNKkxERkEzEijiATPHnJUTGxxshzHnWz6d8wDqimWX2RFKVM9XazytGNFHYo3iXWZTziH3iHMYgQuK",
  "key21": "5aymx4dDvjXo1J6urnAcKFfFanTaAEGCFbf7moTqxXUufXfwHaiNsZnV9gLDBP8EXupZ2vtiKp9WzZyqjFMs4dnv",
  "key22": "4KNVe9x2DH7y11Mnoe1VZBNxCX3ecSUJoLFfskV7K9nTLDY8ddYPw6AredHgKPFmDHhCrysDziGEm1qVxCrmTwPr",
  "key23": "3uzED1Fq41QmhPcw9mdN484etKwk3MiATRQtePt8V3UBAqradzE7BA3STizYxN19qTGtBRS9PMQfkmYRJda1mqiu",
  "key24": "ffY5PjtwVsfLjuHDBYnVdg2doSsbjnVH1AJJfKeRbXNe79yFbuNyR4FGfBj7HJBME7kcmnsxQwEuQfZ2aXGdR7v",
  "key25": "64A7Jc5EYnHkTPhAeit4GViAEdCNpcgtyduv1bb1YqR9tYHxWdeTtWigYGDUPwa9mS6ZZ4dffD1RWRgDVBm1BNUU",
  "key26": "4eiLMVPz1DQrLk2WuHfc2AbMRupmC2hbn3Ns8f6sLzrU3jn8zAhGC3UtZqnKCJzhC7R4BwnSSnXGaHiGk24qds6d",
  "key27": "3ndPt4PFBpaQ8WBLBPDx4rqW5FUVWRt8tqmnuBQgAia5rzjRURvvuEc7zpuodDASVuTtc4QnCxkJs83N4RdSqtxD",
  "key28": "62tDtGDT3snuVdQR5WEVNW1zDwDNmKb5vbE6qE7PkPoDaLfc5UEXwLTvyZtMMpFTY9hscEktdHex6sULuXZKrM8j",
  "key29": "wFwmxKLorgCxBmiNgwGXT3fx1wmHPhk8X96Ey6gwamTsnWvcpCfv9nT5NqWmrn7p4u4JgxH7mUzzKLNfvFnmota",
  "key30": "2cwx6wwAUFawPeGjjw3phbnt9sJZ1AGWpU9rcafbcZiuSUELFxGDfLYZ9wmGQfaxLkV28XWnLgrfikWCesQG9vtz",
  "key31": "4KeGiYoNA5PwuSjSM2j98YhTLkYHhYqWSWf5r9r3ZGN1jyGvrgFBwakBQaaQsPVAohz9FGWujgSVSW9mFtJDeSNg",
  "key32": "4RxAmw8qKT9Ddz61vLfBVUmjKKzbGmyWH7UX7wCoNo434ruCiwgK6Tq3PFTw9LHKUexguFM67uESNNGfGfU4mf6E"
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
