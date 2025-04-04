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
    "67KFMFdFA7UdjRZGJ3a4nBVwQiQCR1FfAJct5YuCk9WbHq7VQyNPhdxxZmudZqNwC6CWP59CPVF2714CVaCm2uxx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "epjVEi3BqRPhFwM1ZsR1QyY6xqPWVcg3243Si4cXG5kvCeC1iiqpQu42JKu3KENACvXeyndCazqtS3UDNnG7irK",
  "key1": "4Pj2Lnfr1CrMkDH54ehijX74B8oVHp7ga6M35n9J6SFyKTMwwp7hMW5KjufCTXhoeoTbwqnhopDGHZpK9EivZhtD",
  "key2": "4EiL81ARcmLh7e4fxBLDCSKeRNENCcNfJ4RMvWMiQLGumZDHGHCkEaV7E3AkRkT8P33wkoh5L7LfT6Q83wmehm6C",
  "key3": "56UqvJQZ7skzBV2rwrw28eaQEioNDBzrLakMg8uFHKXFycWW2QmfKpqkWwsj89rfiJDzNFtC3qgzJmZRwR6UFMU7",
  "key4": "5WNUhdNH8bVifcuDzMMQ2hT23T22LRbG2BbdQcGosgqF2E8vtjmUwWdSjHi1SGMWYmn7Aa2cQyz361Yach6RjJ8q",
  "key5": "rgUruxHxAVNTzdN9DybBGGDAGEvj9K3uhm1YQWCQSmFiHbxosRiK8dufaA9jTEYiUFyxPf72xvE5TZpzTy45UUS",
  "key6": "2m42B2jqE91GAHNg8GooL5Y9Z848xjeUCH8KUaAWLjAEmRXCN4AvynM56VzLDyvC5YCYf7pJqxdV1ADkeuRmPB6j",
  "key7": "44X7p6xWx6hBw24Xjtxpoi1tVCapsLi9cLCSSwEvAMfrxqciFxbYRtuKob4YwUvgtbimAtdQ2ru2ARA8Cco4EZ8L",
  "key8": "st25aSRrEfGn4rWkuHCNRFyBhBV8H2cGvAezahj5zTUjxdtnNzowHthSf2MtA4kfAAz8eDJSzx5qbYyn2KtGQ1f",
  "key9": "3fdgKCVY3DTY2ryceKyYm12RTSACuvhwTJ2ZnfmCd7U24NYRcd5qxXbisS2bWTtH5VPNQBw6tbMBXTwc6hbqecj6",
  "key10": "5sYvyBR9dVk7acvJsWvxKR8Qm1CBD7ShUsisMzc68PwJqw6CPCTuAW6wSae6c9c78kFd5jXiy3vLBeRUF6SRtDJg",
  "key11": "29Q4RyPHi9UYmYaAEpFZRbqNBEnfbGRaijGu6hJcznMhhPV62eWoqi5A1xSDrqV4Pe45dyzZcBvLghSKAEJZJEWV",
  "key12": "4UHZ51D3GAkQ8hUzhdWRBKZs9kDdoZ837fL4rQ7eUNpeH6g9irmz8R3JqsDxHyK2wEPrDzMZeSNkHbSVNq4EE1zj",
  "key13": "3mqXp79Et6aswb96rrmn19VWRdW2w5Qr8JZXRkGQvo9DskoSMiVDapGHTi8QASeTYzNaAyTgv6bY8JDwvdbQou7r",
  "key14": "5Jk6DVVe71cSvGCpsWQm3wToba9ScJoZiXUhmYTfYyJmMQL2ckgoRAQmWLnANJvjV9rFRsQYPAeA74GubuenpAGV",
  "key15": "49EDAapPCRpvhPyAfpKPREpBq5myS9543c2vLkyLLTQiMdHu4ZGKiRwW828x8LJMts67E8ExvpVQFVJCeTQpd6Yo",
  "key16": "EYGfrDX3h6Tp76w4EDS71a4AAPyF9XSojZXcD5vuFWd97zEn3rTHMzCB9DpKg18tmfevN5EE63dZfM9WXEg9VFg",
  "key17": "4uxAEsV2NJ3nNdA8TcxTBbZLox8FBxcJU3KXnTjcPV8egDWjk93xRJLrAFpneU8Bm5reQPnX6HhAEuu7z8Z3v3Pg",
  "key18": "bgkZrjwbzNiMrthKaQKhzsqJbuG1wDf5f1qTyr1ZJobfk2c8WZ3moakWWdKzBkDrpwSnUzAV4Rb4zDHnvvrBMp6",
  "key19": "4pB5PrnWhP3K8JRpsMVqdLdtSGrUUcFN8PNSMd5i3h6SypC9vojuJPUhwdRmHFbVnXWwWMfV9g9MJRgkgvZjH5DX",
  "key20": "4F6SNe9GHMsmmxfhBNLZy8g5cpj8aAmWvGCGYqijEmgg9zX6TyPasJf4jf57RSDmrfEo4nPF4FhCUqYfezGiyqtk",
  "key21": "4hjxRSgLXRCSYLDq6198E4x1TnKXFDqdiSwEUcCBTGXtomUitRVMHJbWwcpY71BrptVsVFg9pYTZGyZHkQzF9Lzd",
  "key22": "35Yediu2ZitYip4gXJgRME8nkAo6ojaoWf1yEuexW1YRCpwyYdeAEVEYuvR9h9X1XxVX3mtg6zsRwmntpNXtqX8f",
  "key23": "43nimjTZrGydjtPCpmDA4Pn7ho1M6TS1NUtwg1ukzpgquufAw5ibKUmySBiKhJiZTkC8HMNK4jmMAMpMWvgxB13r",
  "key24": "42johpjXAKTZoo7maHftkWXv5HKv3AnrQBxu5Avzekcq9CuyPFm82BCQZyZN2AdbeZWkXfacdZYw2dpVHhwd4ieb",
  "key25": "s2bY4FuV4eLTj3E8oPEGiE5AuAooKD5nAvV1Y9tiBntUavWpt4bTGof18mazgJaYD1LMBoc3h2pCz2nM3vQwevr",
  "key26": "4j7Zu6D2R5A63vCh3rk3mXbhhfhjNYt53HU55VRijLt4QGwfBg7J9P1LquVftZHoPFGJJgJBVasT82Es3AuY9h4q",
  "key27": "4u15h9ubgsrPP44pihNeLZoUtfnNEak82g3cQkGCVo2QWEocN1AZ9bUWWfi8RDARmD1Lj4bSxRFEfNZvk1me2Fk6",
  "key28": "3FzNontoQBLLsWNGyBdrCvWi3GsisUnd42jGo1xBZFaMhcfUhKPKKumJUxQDPgNHgQRZiEvjguzBYXw715YXT3vi",
  "key29": "v2pWxbgNSD6JbDSfKQYu9TLeSAVanFaNz14N3HhZfgUxz4TAs9AY72zwb37x5fJExiqn4pQ9ownDSTVdRzK2p6v",
  "key30": "5wYe5FAaWyan8i3YDgrRWfUhPyLvd8FtovHQGCThPCZUVDxVrfuv22MkacGbHyufTsRtWiz2eSifKBseB2ZzgS7S",
  "key31": "3d5KykLk4i2Y5NANYoMtYvTdSjWdKQfcTCxhBsErPKE1uWGF6TmjTHfEcV7iUhxt1gm7prfBXEtQd6UKSTHqGXGg",
  "key32": "3efm1rKakA6oN8GpxtkVfQaCQnD21h5jKFR2fu6NkgCWGFXCeN6ogvVxYLaM6ZD5FYdahRw1deWTxiJXAASXEtVv",
  "key33": "UfYn4bS5F3PbxHBJCpg1PnJTeFmAS28LcizrL32EsFqkkAosCtaMx6aEt4MBarG55umiVCJ3mwQ3RK7ke8kSLP7",
  "key34": "21PTNpzZpwgNcTdjfERAi8kiYsdTWzgdrLbzGC5XL2JFn9kg1urojARpr3XFUiakoP7nh9pTtMvAuSyFGH9XUhBm",
  "key35": "5rDwoaSBwvGVjgb3hVbYuGHE7YysC3chAof2RvC1J1vPyi38cbdG74nJ79pbWAdTodjA4iYPRZMs9eg3L7LCQ33B",
  "key36": "5LDQRuUemCcxcu4xDtgerN7curQyFcq1VMDsMhEjstPHpjG6BjgMCyWK4v6Vv3kopnJxUdsi8M2fUcVyhsRqrsE5",
  "key37": "urJZu9ruE8wMoSase6Vf9hw9mFCpyLJEwh72BB52XyNSk7rStL4qzfk6P8KytCpw22UGtrmCR3F4tRdkeqeeqzt"
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
