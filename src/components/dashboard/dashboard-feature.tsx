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
    "3yqRK437WCXzJARS1PE1yCjnJ9KXKziRFwC3Dd4CQhF2dsLD8HV4tMCPvvtrCStqsBxLR8cp3cbdjo1oSrEYcAEF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2j1vYA3aZQurYbdZtg3kJkJeedRHC1upFi4r9HpPkHQzPmGDxtJKW4zyNFDFCyYBrrvmxPrbicadqj1FqUsU3gT3",
  "key1": "3CguXphZxbMKy6n9G9gqTJT7ECw836SphudTTbCDo3o4q1WNyCA3bBUpRWiMukGXery1HFFeQmX1V9WDNLr4GpBA",
  "key2": "7zjhWzRaNAV6MjMyd6jGNr3tHU9TPwF6Gjeh7fUheWkbSvmKCZom2gbEKhFhvMT34BwV13i6mp4ZtuZpFw6hNY3",
  "key3": "3sCNrUvMEWnL5Putv5WZVWfjWwDgwMom2Raq8d4364nuxsZQwm8BAY8QHdpnEskBsoWHD1a7K2AyBHqx1sn9tRgK",
  "key4": "2THH2dh1TFm5XTLRwUEfBVSbZXc8j4dWED1B4qY6RBPGnvJTwzp5TtBbSNS21MZD8XbfHXBZKDuwNAfyY4MhgUjH",
  "key5": "4pvzmXGHHK5fze1btKUVrauS1NEZzufAxjbagw4xFhyWx1a8L7KHUFvpsDtm8HZRbnz6N1isLxH23dfZhMkbYvum",
  "key6": "3UMgTpZSgWLYUsB2zzTA8qhiAKsdybCnUN1x8RmLo6kc37vpUu6KbT7WjsxD57FvfzgE6TqQy5RSRRHweqhrwQ5x",
  "key7": "X2ZCZocxBCkBs8dnTtM2pDdVzoMJLfV8eegRetRTJyyG9oD1fSFReD7yyeZuNB7vmYjhKnqZygnXPCkzxdBhCuo",
  "key8": "7wzmHY8Sco99mh87J81Z24jE8JWeP4yg7WA4Qhq3cBmRBpENcusESZz2WwA3zYcncwU3tZMcKFNikvhBc8aNiUw",
  "key9": "2dwFujWK7nXQ3BwubU2D2kWVDf27DCaTf8xQE1Jvz94dU4fbcejkyrmwNpwyfRqSBzbKJjGSorPrYyKX5LzWNhSz",
  "key10": "2p4tuJ24QnqbUqd1XcRFHa9KxwsKZWqezH4p9hhC6DgBPFjdSiPK5innzwAJqAfZqQ9VigKcK3QuASbhmd4UHytr",
  "key11": "2a3NCYdQcR2XF1qZRFpGsZQhUn9vFDzhdEK25itWXFp6CB1b5Qs4oVMj4rDUxfCuQppDevo9vtWW9bxAg8ZRoDmt",
  "key12": "5HVGDnBbkBDS1UkRscWzCRTspTkpnS8j3Zs4iMURzXr1jhCYzbjdAGCZBvPNHH4pwxQu8dnVZivobxYksTsmhUb7",
  "key13": "2zcuzXuJNyNqv82r9PwSaCumBjajnNp6VRW59mPj5H6fZLWeWNikWrojFZV2QeqLgF5ViCS5hdCGqMp5uFKcY6N8",
  "key14": "4UThQwoUpas3mwCviC5pxZaZsPRCxPezsNgYLHBEmnNDHLmJP23Q9XmanAAj7oyGJzCy3LSFmCsQbWnZAE1r3Ahg",
  "key15": "3Fq4eHUkr6vW8Myn25xsT2mkUVLGk7ERkKi5oa9cortc31X9HBdVTWVoTbof1o8ae7hrJro28xKJb6iJZPxnCad",
  "key16": "2pfybQBu1d5ETVxoEQZduy73nsd9ZqS7WxSTp78aZoEFaBpAffGRjmfod1siV93mXtqTozYSfzY6uHDhuUwZxNit",
  "key17": "2xMZ3zqartuz2v8Zh12wA85VXM2LQA32GZrLVgw5ricgRHfzHM2Uh2yAeQfDXpVF2EJ5U1dY3W22FZ9J4ek6hhft",
  "key18": "2KKDNBsHwVXJKh1tsLePiposZj7tMWQyDgcLFkVHu188N5JwuCdkrLoJh5AwQxAEXCtY21QjKyE9Me26nDxgSrSH",
  "key19": "3r4WeY6wgv6f5aQBJHpRUMqw9fz3B7efBPaznZZWDnPb9bLRDT22bnJszsEUczDaUPTXZy9r6SbegyQzBAWR3vJu",
  "key20": "5RyGvgwyiZCdeLRiM8ZSX5tvuvgVjofxYuQBzTViVqeTN43jpDLazUVG6uhMAqUX2pTadF35kZaZiQ64JkFzS9CD",
  "key21": "yLpXhcTn98gC1qS3bbav3QZkg3sskxHBY6gHdCfGJEt4c4UEywrBSbiJvAmUdTY78WdWR7L8dDYhh9nQDtJh8nn",
  "key22": "5P4b2boeLQtCm2JkWREngQr4NjLuD6T2PSKBoSfDHLi77tkR9bSdLri7jLd3sTYUUJkMhEfU2xwCqTPxFHQoYWRV",
  "key23": "5Mm357VCV8ebxRuBGeVDm9mdQHGsJm5rGF86aiSphhJetxpq33cCbvpjwVdiXht3PnHiZhi2ovJ3kqF8HWWRQwi3",
  "key24": "61Eg5tyYsF5WwxK22uMvQMeMMdv4YDmTerL4CABYTKkBAK6e94PfNQx8Z2L91gxU5tvfg4zZqaDGkqz4b4Sknf3n",
  "key25": "2hS2gbmyaKSdiwkVzwRAQEZaS1MZ6u9D2ha8pHoAnLUNByzfRwCEZ7iwFqboaetBxRXBeWdBPzTxYGnkWpWtdWNm",
  "key26": "2x3o4y4eqt1Gdx543zH7VRRjky3jL5nVByjZX4KQReej3DPYDXe8bybr1LuRgPnVtF7UecmwdPDjmxZVeqpqapdv",
  "key27": "5pEPK5tW9SQiqPaENGEPApYzDjMPcX8YvLgbrLntPc3JjkRNBGhKYw9fgDB23WhjdJyr8ZY2chebB1jsz5Gg7sK9"
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
