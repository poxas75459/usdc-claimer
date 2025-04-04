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
    "wjhpL9XY4m5qx2kQG1CQabGFSY5sidzxHHVRFTSWzVeyoFB4hjNurskVzCBdQjx1FrAUWrXLpccmd2ZkbiD7guq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "51CpmZuagdrkvD5hEW1h22ssCE7PCesPMZn4NcSbXLiXinBQKN6vj8AutyhzvD2FK8cRjH3mo6ruPM29ohi3qg4G",
  "key1": "2Dr2yj3bn5zQjSM3JsGZeKyK1nhSZezG3acWzifpiMxn19EWBFhfGKD7D7meN4JvEovzBeY7E5pf87U29o2sqZf2",
  "key2": "58zwJwe7HepBBmjLuqNHz7voztM2rwoEy3tuxD5CNVCo1u2LH58fiR4Cq4xyiwkcpXZS2ZDwyeKie32WM2kV3J65",
  "key3": "419eh6df8sRcUAuwcweGMaEUqFViBRUKKZtYLxniFnqe5reKAfPK2LombJqzJ9bLCedtrkGKzE6EBfVRyeufdP53",
  "key4": "xMuk2BjWpSXsG4oYUiFqptCLzQcDoVdGggz23PvfZ2vdZMpJyaaNq8rWVbh5ZwWW4o2rUbR6xwLNd7HDkq4E6Mq",
  "key5": "66LA3CZ7f9nEY5uFc9ZoteRdNyjwARv4SdhDVTuhn8RJGdwkVAA8StKqJyFUb1gv56rgu52WEFdwViGduftSyC1r",
  "key6": "2gPmzarqtgDYtG3k3ww8xSaaLoH8UjsBFn8UGrX5HckMRi3Bh38qhfeCBcGyb5DSajzb2JhGLnNzhQJbqnHtd4bi",
  "key7": "3ZJUnFPoc3L64mJhBSBRbJezrRzUFtWUjRoMTNL8EUb4ZvNZurAiaC4zGZ7WBwv6zAfwNbWrEEsZz3fGVbzkMJ61",
  "key8": "4AxbQU44xwxab5U4f2GQfst9rqtJsD9vmJZwMh7suvoN6miH7RDDbbyXZAbEvkvdBGdDBzsWERcvQCfnxq3pXJUc",
  "key9": "4P2SQ9Kp2UgyiqLm9P5zWn18ZXhuHkJqWNtiQM3KGCYqkYrdgFdamonrt46BPRKwUyA3buPDYMML5ggTXzPbZBkv",
  "key10": "2tURv5soPLsMRbrhvXTBUY66zu5Us5r37vYkRSuQUonpq9YH2QipUyJjvGEhRn9xhNfhYEDuu4Wxm6vWxTxfBigk",
  "key11": "4DzSw2AZFUwfDsYmARcWuMGBetLtbfhcoAGcND1Cf673JzkLouU645UymQ3Zw92mGTzWLzJMTsDY3khBQKyszQBC",
  "key12": "5fJ76tmmyAn2Q44hKdZNScVFTnXP8MWXJ3qjjtRnJvHG4HjZA2S6hSzMsGzMfqDtgNrkiERVfbqqNxx3Jk6JcAk8",
  "key13": "Y6xnKn14YCyA7PvS3ze2YzbXxLhzF1L3CeA15RXDwADG9CP9SB1j3LhP7TQCP5Va1z1bWnosyLw8xyxpN49w1uh",
  "key14": "3vT9VkZYErjM3jTma3xSrUyi97eGZhkddWmYem7v4yfTzcFPoGqwrrW63YULL2GeYunWoTkZV7J1C9914kYJFLRX",
  "key15": "5pVra3jHxThBeDfzjRPQad1GeVLe6STFyzc3XXrcBuw3bmgXAT8mDyb21X5KbWLETWP99biv4QhYL6fEyoY62jBu",
  "key16": "4Aw2wBR3RHHzvTado2aGuLx9JK3J6kYQhA4rBUUVgy3JakhBh5A2kh3VR7YLytYtAw1cTMhw1YVKJgeepfUp7YaS",
  "key17": "629xmowGp5vNMgAuLVScZuv1DhreucWUgt5MceYwuKpmuD3pavs2TSWnX8DeJRipGBjR5HF6chyAZvh3kgiqF3fD",
  "key18": "4Tn7Xwh8CwmAf3C8dkmMenBiw9EMQPLfxrkJR94yDxDy32awCDA3XoWvKpyRzi8W2ecmibobLkHSdrNY3cmKqoD8",
  "key19": "3q7WYYQNXm789ioc6BxZeUJzvrgDfWmVpi3zphAGCNpCimt8wm4dALA4DNUjAR2K4VX6TL6uzNQwk3YEooGSC79U",
  "key20": "w5w3i9xYznqUYnmjkXMBzw2xsXKe5bnkZKY5oAntoXoetj1oNV79n4sNz3ukcej7NvieZZ99YSgHimyhV1UdzN2",
  "key21": "3xbYHMqe9mkfyzPM2YuqY1KbwtLRoWU2AB7ngQ4jnExn6WfzfZS1rMNZQLAxF1URVohhKWGfDbrdCJe3dN2WxV8r",
  "key22": "nwSjkuh8tnBa1urPwgiAQ83saALyFVQueFXj3JbuMEr7JqA882W6TZ619h5Q4ExLb6MxCiHJdD7scmikZTEMLij",
  "key23": "4rztybuC4SqvxWjnJeYVP3Sx8ZEgEoqFRnFyVzirCZUUr8cGfKe7E1jYhhP8UgcG5PEJz4yDHRJ4HGzciBfdmqVC",
  "key24": "Um94uh1aQoD5KeArt9ShJtJBbvXv9dVsdARPRu4t6UEditc31xxk2EQv5MYZAL9gztc2ULyk7s5xFszKCK98AHQ",
  "key25": "5CCrdZXoVEvsB8duinepMvdu2h2Zimif22Ma4PU47DryeGTmudSi3K9VfVXsstZMMozujq7SVZCa8DweRC1ANQDi",
  "key26": "4ViK38pfxPJ7H38tMUqH2wLS13F93jmKTTSuBjM8B2xvFkkKBwx4BGRkEWPWBqYadHhBAdKsHnNpqM6WkMuKvmrp",
  "key27": "5yb3jBBeeerKUZfYi1kMVHp8iXbR4voj994MUkZZZvV8GTW5NDnfmvXQiUwovs8Y4vNrAT9ep5eN9tmN3kezeXqF"
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
