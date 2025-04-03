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
    "5Q3H82vbZdMsLQNHDzPhp9iSFV1UC86qncc2MueGfZHr6xhFM6H3sN8zeEhPEHSbwv9qiQcAd26HXSwX2Ushh51f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "6JCoh3cBEisJMrQARukTcSCTTPVbZMJznWTzwHRbyjNYonbHKpCwV1A9tW9hQodCrLb3Kh7z4C6NX94RXmjGBg5",
  "key1": "4ef4HAV9eWTEtDW6WtrgahKCJncoAojPhfN3ZXt4Ei6R3dnKXLzwNLyQk1S4WgNgFZAfeQPDs4TVxN5GhLNuVadn",
  "key2": "mRjQPaDVVTXNAfq5a7PLZVavMFeEgdx5foHQ9za1D2WPiJnkMjtweu1Lg1QEfPPtdfy6KmwjLQNxgjUNYmwwUQ7",
  "key3": "ogRdU7UwEgjbvrkkZSmgX9wLSGCbTqZYTBUMMwHJVGQMxf75KNpTCjoFuiKoTmoynx98JzWBdnPCcxmnj1kLCNv",
  "key4": "62fyUsFHxm8jmahJTxFnNan7ofwLPyNTKqjXLH9suCXaaFZxqxpJNQMdpK9uRbpxph7MU424sjRE6Eo74Q6m5xDd",
  "key5": "5tysciam6vXqnRbZr93xC4BVDFGxdkhKofEFZ2CzvoDXfrbFfth2DPfYmwBmtauEeWbgHAXy7qfqRKunmYqnP1gw",
  "key6": "29o5L1kKDZFkcrrGek69VkW7cCqcpGKaoDSPE7XVUKh65CHSYcykMyNVywMtNFi9gr7hNwTaYvi3vDXNQ7Ry2s2i",
  "key7": "2ina1EcUcHrui5DTa6YC5uHyMgYVbSzfcZ2g34eb4zJiZNqrHppSYd6QzvLHqESzWz4TCacQkQNoevnLVFaG2z75",
  "key8": "33TgyzmS3zcPbWm3PvaqncrUr3udKvzfQ1T9ViFZWsWw5aBTQ6cR3jDxM39nhaUtF9CEC4HYvWNGMi9TeFgra7dJ",
  "key9": "4qWsGYYNyn8iTAxpmsPGrNV5jKAKiUJ1kxoFnXvf4KQeEG89F8Z2CLjizfEKyBRivA1tQ11H4nah4uSDcTrRbnv4",
  "key10": "2LgsCFfCJT6QMgMH9TJiGpTR6BKV6EbeQwasmU5MMvHUV9cK4zvJdjTu8Z78X9Bs5rNhXdqCT979QuWXiXHYmULv",
  "key11": "2SCY6cd4bdmgfNEWgsKt2uDk6XGwY1iWLjx9jsqVCEMurCd58rkwPFD5rUkoitYW7NteMdRJdoUdizXLQ43VH657",
  "key12": "DuEqCw7R2bNhbmU3oVEWSzN5DSQpG8XAPFDLxZTYhBzVCYbT7iEqPVYxX9BBJJq1bfcN1M7czZXqv2eQJQa5r3Y",
  "key13": "52nBmxY5VHB6uXyugipoCesypXbHFQBDLyvUN8Hdwes7p9KaGydjazf4nbCfib2D5A74cHsj4D3rCAoUDCkCKogG",
  "key14": "6278hLqYxTjhN2Znsds82B8P8mSE3zFDXG7jCkAdq46G6ttWCWogCzAGE9aacu7j3Yzj5szG4gcDpzh52iaW8Bn7",
  "key15": "4mACx5g5sqNj6eWtqHNNQVbSWpCEK2zrCVtxbjsAQ8V52R4remKVBQznpfsGuugeyYywRvcFjYMeGfGxaetS4kXT",
  "key16": "fQKaPkktqAdVV5vUEtCNbJ3UpUJGGrqf9DmuedQiugNUPDAteBrYqWupo2XQRpZga7XiXMwY1k5frsL2hrmfkPd",
  "key17": "3a1CaRjUG7dmu7Zbt416R1vH3eK41fVwrTCx5YE9fpoPF145mAgorCuBJDsjkcpz1czffDp2Y4VSNmMN5AKqpwGW",
  "key18": "3tFe7u6A5Rqnzm9AbNtqdVSyB96Gz7ezSMNbeJTH7ie22pu42iTaSyUAmTaj7AQp6TDNpsFFgbHBDVX75dN35yRW",
  "key19": "533DjajdWVaHxwo3wWTGGwKpvfMXzxy9HDXxq35gihFG7VgybZ2muXtt7HNuf7u3B5hEoTrmNRhNCizMBggd4Pbm",
  "key20": "4od4BJGYMiw7fDctvjbGWXCouTC9ob6TcqboXGz2fZM7FN2GW9m39SQ448GwVMj4c5on2h7vJMiNCkNLdqJo2MEY",
  "key21": "Hn7Fo4LM55q27ofnUtb5LNMyWxzzB9P4iNiEbifLrNeB6WwxvoZ5bqtKKswzeUo2GCc7f5QQbfxuMBNEc4xFbHD",
  "key22": "5m2P67hQeKjR8Sict8dkscRLE2AA8FYCtZ4u5jtWG5FkKPCy4E6u5ct9y8JLUB4Dj9aAKJAq1zMxYAg966biZ7py",
  "key23": "WUM3waHGzYdnTMdGDH1pYsuyfknrrG44divELnu2QYTyqvEArm9VeBmA2YAKjySTfAzmvWTpEJVYiVkkhjJrsFp",
  "key24": "4vAVYLqC9bXYuY9n2CgAVKZyiDVWuJDtiyjUXvj9BFeY59r3dVpCCc38HfDmF5YSXC5fxnNT4Crfw2ChtrX9Pkc7",
  "key25": "4QVwENb4U32FVx3YZE9LsSgsyafFWKzfWEZA5RDdgkm6UxnWtUowGDbdQ7BujMQbcVy3DF9bSkZGEUJhnjYJchUP",
  "key26": "3oRmGZ2mSeFBhqLMx2EwU5dKcKVqBHedBVDhBencCzGQwNgRMsTtaEMP2bQPRQ4HxqTgWzvWAgHCkN5Q38oWAXWR",
  "key27": "2aJJ1HB5Kzp14j6kAeZPV6HmoDEhzjGxZpVGWgz6ecNCkCupddswc4hRrbEktzeDYij7cv8YvNoQxxT6FjYK6Y7F",
  "key28": "jELN6DhNi3fGmjpfjXYjAh8p1bRXKage9sHSmUcmfbJBjHZ4MifMV4uZ8siUn53FG1mjYM2SrdEXJ6A5ordueJz",
  "key29": "M7RVdEbAENgYYARrt36vKb1U6oi7FCx89gaCmMvtr9JYEtD5oHkbmeT36Qy36AYiHyQtzM3gv6PbgkmGAUoDLbf",
  "key30": "2Ri6af5LJtPEX6qLcHqyuJoUFfZAxVEwfPBPUfpmgJkL8bz86Jfiryt4musj7nJYvTfAyMXiDgJKK82UMNS7qCZJ",
  "key31": "59vvw3pQ3r9HzokjVpTVzRH7Memosrb86Db8ceG7tDJgSvuwQZJphH6SuADnTzStBjYcJMUTB3r6hjHQqPmkhwTy",
  "key32": "3EM9ThdaCrU5VFKeuCJNQmqhJvtsJdcXAXrTKj78ZTjehhSvZ15RVpQafCfS3VtSdYyVetC3wvhRQ1oYobyR6Qn4",
  "key33": "66xbCPBXkctUy9drkbXpufZYbHZuzfQBG8fXhBirbhvvs1ryP2WfBL6tNqoqRwcF2uA4ZfMahpWoPFGf1PjjRLyj",
  "key34": "4ZZ2TJsDJvRQxUYKT9SsDmwb7zcpbBzMJ6GE681fc3bzxm3BEbZB3CvKBhAUuyvXHC2QFaCe5nRA8DyK55yW7vQz"
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
