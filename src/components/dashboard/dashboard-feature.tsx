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
    "56TkmkFaySZBp21fEatDDL6Awo8gLammG7Fk4wMzoHcvkPSHAtLm7MBagpSkWN3H3jSxqYVBHvYeWHCFe5KZnzQF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5AkyiGVV19ANjDsYn56r2Q9G2A3PXXpVySica59nGzwChdeULuvBTjFcbiNWKBJ85WzEQKd9frb5Q9uEczd9LhJn",
  "key1": "4NQ5svH3sgaJEFK5jWnx5bU2rJnbTZLydMBbzT5MXZLTPRjGn5DMK6LT9J1aL9yo5ucRMhe86iADuSncGyXqHvnv",
  "key2": "2kjcVR8ivPbnEfoUVQSVYshdVEcWZk1t4EfyJGrx2CySycKGYqTwswdx4ZXPqKDZ81aQZAzqGLHL7fmvLQHos995",
  "key3": "4gypDK1eZTwPxPEnfmbKrS3V2ciqDCw3jtnoxaocVPgppzfUsCtL29Bzya748mR4AzWJAuV1jt8XAW6TfEXTRygL",
  "key4": "bDWvZhGPytHztFjjUYmU4Q2UBjoaykXotf7XBkjFoXx4M6ozW9qD2FEFYjfAyQi2tWoPgowxs6rTdoeCKQre61Y",
  "key5": "Wy486iWy8BhLpUg8hBNwg43pdxAphwVSnMaxQonv5ZongRdsdmHMhDAEK7krXHZcqjmxrFurSwPV7MpPbCjh3iU",
  "key6": "EhmDDHqDssjSAagzCWD1d4htSV3VMbrWmPUYQkQ5Xa1arTrvkHs7MscyHA5Yis6SVH3b5qEdTDyhgaFV4bqTrEt",
  "key7": "28rKxiAT6HDZPxV7kWHW4hin4QnY82SFVKawf5Nu26rEhMd65eJ2Y65kgKXohzVtJudv8rvhVUmn5MMvQGX158wF",
  "key8": "iqxiWeo2mi5cUu1A4b5zdop4D9CmQDVB5NFFVHhu1hmG5u9SkHqjJJJTHn27jy4xKr3miWruieuFMoXDASV8CjJ",
  "key9": "fQe26AQHfwf6wUgZY5bBJUoGiZK8nLheWQwG4vRsc2RYmJtaRW1Wz6C3Nu2a13wqGijmreQY1SJUmWVWajqVR34",
  "key10": "5WrzsSm7uFzDcweMDo4C8ju97mDHe62Z2YUEWmy5ViDmV4f18FFiKKsj4JNEfsZEfzDJLLJVQ8D8WmYmD8KGtr6g",
  "key11": "5v482pjw1HJgDTMzHt4hCpJ7Zjf3GmxUVQv52WgohDtMknygF6Lh4HjUsDJaT21nWcV9bsyXJ1HPE4UNV2BkiVav",
  "key12": "3wY7crMbfAQHCwG7kLGNygHofSMcdBeebBRtwMUjVkG2Qa3DDiB8gMYMCXv8HHRjapmEG9uEt2meLyX64EoXyMRQ",
  "key13": "2Mx5ddgo4M49zCqc4iWKPzArJKZpjcnv43yhWHdFKAn93CMRbciqvZiqBVGduMoSuktVsEmcAWuuKoCdghFA565D",
  "key14": "55qx7fciUzAyPqdKJL8A6t2JnixPNtMNGubVqZXg2c6qCyn6BiJVh6AwWEg4T9Thf74MXkqBJ8YLoouse8VvoJkc",
  "key15": "5zMADZJ1swR8McjTJzGvEXbU8hBHpgS73PxWELzMJvtxjTwpTB8bCsdo3FaRydSXiVVWtaHNyhVPdt85E83uAWkk",
  "key16": "5SipFTAFigh68UjApY7kVHwfdJrfSZ6b3JkkEziaSkTc6PydV21tuC6UhRC9ApvC8HFaG2VRk3C6FdazoiBTC33Z",
  "key17": "3C5jfzrWrHDMtyBDKxHVbsU2QkteydSotx6XLjZjGRQndmaBRqsyCCmgFoKpGAJJArQn1uqEPuRTEBbnaJoo3aiM",
  "key18": "3fwhj4nwtyEVVxpHQQhgZ6NjJotAdv1qknp1wvXspEu1wqEBkwBCcaM6EfbTejYkXQq98SbnE3qvdP6mHXgwaJU",
  "key19": "5u5TQ9bpxsJVt3tV3abhJhqfjPhyjKwWvCZ3u9EoUfXBDeo8vu6g2Pzdb2ty26d6h5tA6NSmmep5dHshxkHTiM1m",
  "key20": "2umCBM1ZrRUBYdnnB9fofb5xkHKDwmEG4sRhcM53NpAoPWCHCLwKLsWYgGKqgETF75Fk4uAC6nMUzXasWJQfCasg",
  "key21": "5JFzziH9JMr1w5NNENoAjztnEUe6tKVCjfyhu2zJzDdBAK4BtR5h9kUBbiwMRZUYk6RKk8oRcb8etcvHm3YHqACf",
  "key22": "4zw4B7CkDFc1nJN7UTBBraxQMJukZF85Vvv6NLo9ai43qmSTUJYXhVoW448Mpr4SsM2zkW8eCgKQsq79FAKQucP6",
  "key23": "5F6RyTMJERFA6s8x5DwkeVBnTFL4EAfQvjSkMuZN6umsu99AdEn3drvoEMWJo76Y5KfCr5cfntVwfMUdwYXuwfd6",
  "key24": "5KQ9VMWUTTML1g1gci6yYTia8xjtCEAXMNmvftnzMgs665ZtYAfXSutZ3nGPdDta6RR68LCvpfAhYVdcGZfByibx",
  "key25": "5Bb9HPhrhCDJ9hAeP1Zpa6vevEXQP6Qg6mHbzwo7KZ17s4kjd4p25XMcnU2Z8uxcQioSo4z6SwUvp23UnopcPUFv",
  "key26": "4ciS4RYgEc4yLQYhG5BR4Pqk7QBE1hQAT2avdmy5r1WS9bXoTHE39u4QFUtkDiB6UX6UxRLbrMJpygNd8wf4DZ7n",
  "key27": "pZyj9jMDSoJ7FeHP4JNjNav82mzs1iuBTLSwcwV6THDLtqReLXE4zg1Pc8f8QiLAtgVv8dbpiKKj56HnHcstDAg",
  "key28": "GjiNjzGehiQJKZUiajXsa8mG1nynBjt69UgrJhrjr4gASPvhByFSWuvfWifbWkx7LYjLCLyhnoKVGdFoQ3zEPBb",
  "key29": "3wUDxhk8hjqPfQpVkwmLhUk7V9eAY4MX16SHAFCCgb85vbTwduvr9bPCgKhH1rPqQMvra4bjaSjAJAjWeeEFZzBS",
  "key30": "2qnn5ocFRJnkqPzBLWLThuwJX2kDMwq2u2t8Hu2bRysJZGNbq3dkSY7n7uDbPAJ9uveanfpR9XxCAt4pKbkq1xnS",
  "key31": "2ysf6S235zA3zknDWQohebgPgoAR6dvDw5fE5LHo4BbuVfdz6BaM4WqBP3vNdZnCHnyBEETjQ94LWRnP8oZf21tK",
  "key32": "5mv22xMWWbePX9WSE81Svvhd22Pn3RAYZoXUgUuGfUwM2b5V3pRsQbbn15fugcYYocb4cwmZzFfLYJ6iq6vSuHV2",
  "key33": "3rEwcYyp5rXR698hxDPtQ6DnDfRSREetz2DBcH4hUruhKWKd4R1uEVukFvpfc6NtZVrEzaTzVGi7PMQuQ9pM25bP",
  "key34": "5D2JdZeu1U8sdJkkEZaznsTNge4tEhV1kJEFrbxJ13Eg7XE7thSHeTkN6SaEkvkVkoRJ3KzvNbwLH16FRv81zDr3",
  "key35": "2vRXi5q8dqtaLxCwkmcXBDjv5Gij82uQ7Um9JzYrtBEAiZEPyGGduxKhqZudKntREiKZu2f5CTNRyyUzzYYCvQD2",
  "key36": "23Ey5i6BhWrbxHTL2mkUTTncZ5nF95TKL5R7MbBaAXYz6tyALtyNLvbasHoqsotmMe9zSGHxuoqxskzNY6denLqP"
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
