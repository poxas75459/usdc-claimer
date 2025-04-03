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
    "LnsMngTxLqEin9TsHNnvdh1qJdtUv8YPYvmDYzqViC694QLuwxXNcZ9qU7eBNPPLczjK6fnwphsLLB47d5kHTCy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yq1qUFgAja9jE6LcDjigi5HcabhFez5ScnJLK69MBneaPMPq8c1qXKrtDLK38ENVjpM3QKBuWV4oyorXVMiQBeY",
  "key1": "R7zitSSGqwD8ZKwm1WhfM8ob2aGndt7V79bSqynoL3g7ia2nDkn7KNwJTQEXw7cvyP4vS5kmVFF3b8MrRuhQUKv",
  "key2": "hcLXGz7TsfL9hojdvirYkScMQM7yiW8fvAeiTgi6TM4EHNF1T1dt9BAcRnCU5xoThoMpmLgMcSB6P11W1bfGm7Y",
  "key3": "2MvmABMfPTz7RtL37mWtDuSVkB8JtDLiQBPgcggYbxs2QtUX9bVHdpiGDZJKmoFuSmyVijK6XDEXcLKSJ6LoAbdV",
  "key4": "4YmmpCc1fXzCBaqzQNEnMMFJqUksN3a9u7nSJhiffSctkMF5zsCZjn9ftKVArxarQTQHhJfL6b7iXS6sYfdPKCad",
  "key5": "ZjTBee33Kd6Srxt7Wy1ZHBHjYBj6KKZf8f2f8UJ4PG7TX2yWwKf3hdqZ157QaZy1ntvpZeLGumBdn2MxsxFFj7u",
  "key6": "52Q2X2QzD2q5Cm4k2Bowa9t1vbo8JUW8MjRyUBbTy5DTkf3rmX5LyfKV8SSXMCmre6a1ASmFsLKEiZh2Ld8oo2VM",
  "key7": "26x2Wzits6kXkTVqcTNLJ3pY8nNi2NPTSGoNBnNALDJKbCZDDsuFjSiLVhXvvHGKJYMNgJ5vR2FDNXGcSJNJ4QEh",
  "key8": "2cD9HYrMnNdvLQoGpeKEfAgwZ1M2bMKkYqMxBDDvUymca2ym5DFEEngLKikj3LBeUXhPdz5VBnAVbyZmdiBwSvst",
  "key9": "4AZXyLRrrhr5CiZYiXFvEhvc8QfBwdnk4w4HoRB3sMi2TTq95Z8PLu2m7TDPYHpkahx2XKqPAjHUUkvrMvEogkLu",
  "key10": "5XKXuT2NCqb1K69YYrfnydJb9Pa4f92Qup9tgppHf5SS6TNYz5GeJsCESLD8ychcgDA4dCTcvr5L14xHi37YYS6Y",
  "key11": "5jU5JmUkXrYLYqbViLzFaTyHSS1SidZHyAaX5grdtcYmxpT4gCj7HV3JSyiJdoSZk2Q7iCu2uqX8z3HeFs2dkTZC",
  "key12": "4oNf3tMBXNrnUQzBgodzjWVdF6vDUx5U6UXjii2fuNaCJhrMHR1KywiJnizaB2cmDvzFe94tCR6pRV6enxg6euMC",
  "key13": "3kNnfcrdeHw3PhaM6NPvHJZ9taffkDK6AsN3tmRmYxjRNX7nq1widHKNQ7Hz6Gsdt9X2JikMcXAKe8jVGBr923en",
  "key14": "RwM4HC8zjQMF2SyLBHutuHHnrehqHmAQFySjfMjH9REYf6Dk4YjxVEcm9YWDUhzwiWUGoNXrKFsUja5k7ZMKENP",
  "key15": "yBWaAvWvrdpBxvmzvH1yR3HXy62ARis3mXDBe4jU6tVe7rBme3dC6kDdFdZ1ofjqRtSTJ8Cn5wFZQnzHHKtx1TK",
  "key16": "T3zwF8mE677SzRpvQn2UUDnQreUjjTDawDwGK61ykiuUd94nyC8JoKJUVdHJX4yBVybAs3rtbfabH7dJekwMewf",
  "key17": "54Nf7PMpvwwpymTH6k7zHiuML3oGAHhFTHuv2WdULLQkUxParcEd3X93geeSft3LLAeWWtZN2anmKpHrCm83XLsn",
  "key18": "douMUqit5yfADrsQ1uBbQSURiRg2mvHqg3kYtkzF86ohyPrW521urUvHsuQw74G5UZXgRcc2n5SNg8UDdYaVgpj",
  "key19": "59du4SvqGr6c8G56qKrB7jysAEN2cGn6zGxLp1RFEYFXKSRnwyJAWUq2TjLVuG2v4jrQHapMtRv63DHG23dSyu4L",
  "key20": "XepLHzAJB1dxpwgmNEUYqyEgjMry7icAcKkFunBVVidjYSLE6f7Jvt5HbhM27HKVDU1gzMG2pNDzMgVjJ79ARos",
  "key21": "PTfyD7jmgybJQxUA3fnN7q7HoWjUag4Smr53yGC3nTA3nDXox26PUTiCVSbbVBwsEj9dJRa1FMvynCsFZjGxi4o",
  "key22": "ncitAeVnygowVUNjiYNSzrvSxHXbFKtRzvP5R9w1VZrj3j41VP1xEFTgrYBTmFxEVUy86JXAohKQfqhcLtiuHPb",
  "key23": "5ND4FxCFN2YoAWSXyQyWTKYyhA39Wm5PJ139gwC7Fnf3WPbtnw8uBVVqJpsiuiM45TeAQZcvSc4WM2o1gSrJhuZW",
  "key24": "3Wim2jZvyZQ2r23H1DecaFEWb7VfkdFRxrZxu43seTLqhEvbWHhs2h7SGDeYfRKtRvJnecySLPM6XvaFeCKoikuz",
  "key25": "4Cw5jDp4J369KpQRQs6RT62TWeEQFRzPfCWyKCeX5gQMJZeMXM7FXJVr5GezYQPXe8Ma4xieRpBGt926d1WmQGd7",
  "key26": "kgWmVNWyPePwXCFJ95y5oxvtLibAnncGCZEXjXbX37JCsW6bP7JnaEdAayrK1KA3pm5WtwyhBL1zqaCrwWevnyA"
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
