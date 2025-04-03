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
    "3LbkVGWRjv29b6mY2ZwnnLb3Ko3ZPuwXPcouQ4kU8vqxr698Za4ERwoEo4eWwuq29xVvToLiXTDhsL1LBQRAcfmo"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mnJB3DFjUhMjdqcA3ceMVBtEaiLJGacn8kjxDMjm5E3Dwqt4bgBw1awjWm9KxWBf3ErYbW1P5cKJmr7neHTH3Wb",
  "key1": "3LERXVxkN4vygik6Qb41VCGFAXQqEviYEsj2CdyLgHiJE1tPrLUwVRSDWTLz3CTCrDUVA2xGBq2WBmxZyJJDh3bD",
  "key2": "5wc8qNSARzkQMgkhDFZc74xC7tvwC2rzARumikdnmFzKT1zgfoR9zqryX1fBeZSkXu5JdqnLiJ5iaNXGEhzocLuj",
  "key3": "3a9wpeoWApzgyd5Dv8HZaXAwH5sd5ZqAnqi9tZjMJivVcjZTsXnbJTvcrCdDw6ziHptCLjNWxuVwkguQNwxNYzWj",
  "key4": "5aYC5Ga96gKnj8gxU11dH6U7ZRsvjxWBRjfvKnrz1HCDnM733sRRK3yJC9drwe1k2bqkD9gmFeqgzJBJP2i1sG4y",
  "key5": "3Yx8jLU3Bwu3yHSFeZEJmDBJ7fQQaaeP7RJgSLXNdC8wFPREDPxnM36LFwBzNHd4vnNnyJzxbB6nKUvYQo3ew1T",
  "key6": "nsoh4yRBgbi3jN3GorR9s4htbPkYLZ7fnYKf9tVgu9v9e5xJr21icp5CodecAdAJn6W5LjCZejN4j1Uuxiwwyu9",
  "key7": "4eyMssEQwMHTT5z29LiueqYu3hb8A7BDWygsfQ3RwZTjbWb8fenoBV991u6s6SUUg8t81AWKcsUZ51DkKwTKwM4N",
  "key8": "M6VHPZQQBV8cs49EsE6VzX56j7KFF7Z2PTJsF215VgdpHnzyBD4bu396frjYt4S7Upcv3qd9Gi4uHPkdvxcazv7",
  "key9": "2sy19go9RpcmL9qGSd3kmaSQiKFPWuZNPJFB3kbYySCST1dj8fvDMwvZbiF1vGoBZ1qCWgXELRpu8F8W5D9ag2o6",
  "key10": "5kq81g2rKRkr5HUjNCCf5uqFS4WJ9EQrsPhcUozZA2vhvG85FvhsTpMoDEDRrjzTsoeZjg7SZsCQU6Er4maryGwW",
  "key11": "5uhjCW8n351WYDbWfmww5t3L9ugke1eThPVijBqUz3qX9zbVVFmv5hngUUpoqWmhpsnxBb9CBKs3nBXvpcYFByZG",
  "key12": "2n5oxCzeYhAYqomqBcMxtHed89F3frSbG6qLjWZ7JJBSWXFcTu9VTsPxx5rnjatYk4vWZ8teAEGyFq63LZWwnYoo",
  "key13": "4MhQgeEDpzhuZthgVnoFhCPrKjuBW7CpMtx6T4fBhA9bLqZWJTi7wL9hHg2kyFcukaXS3dqdugfopzPFqU7h18g7",
  "key14": "22pJpYkgLjyrJJBrR6tRcHKRqUrhnoMLGsDaBWqq8Rc2cnouSkUohkUB5RT4BkhYGMpuyPd3QtZK3JaS7N9zhpgR",
  "key15": "4T7KS1TutTbkrhGKdUcKgsdaxLaLQQLwxWWFv3EtM68eHrpape66FLixCZsFU2sAmcmXqNrc9bxAjR3aRKUx3aEw",
  "key16": "44SvrytsTMLkkEf8W5fdJNJRnJQ9AhUosppxYCB167XcgBoPvBsevx3AMZKQH74GXCoTcYGvHSDPfALSM28aBx8e",
  "key17": "82v2ar8MiKegQyrCeSAC7szZAE2LVj5irs9XPfKSqTTbRAA8Xe16xDxBcdpxihArM1Cx76ufMV6P3uihLvb9G82",
  "key18": "2trYRwpqgRgHY2edbt1z3iKPtSu2nCGk1ovW4bXcxH3cC65TKb7AS4UhUSh9PznJmwQZzbesnYoMg9XE9M2Exf8r",
  "key19": "pvBK6ZerbEUwaJRvqZAppMvd8CVFRqff78f4oLFKgDxh5BGp1LojNY1guvHsgr9QyHg7BufegZNxhf5bCuR9xPJ",
  "key20": "5gMFEUipiQuwjpMHyRBCUFRYaTNNw1TsGcbUXQ2EKbcuQqjZrLGvS3ZizJcA1S1vLCpgkuqdoQJj513YJHhcAEws",
  "key21": "WUurLaJjDkwu4XSSYPBEuDKUeWXTwEkmFEykshT42hxsEHDsysgxH8wuoE3Fyz7sqreZikaLVoQQ7aMpUygnFRg",
  "key22": "586dyaZHKixhmqvx5JMAb7QNsNpAu3wHcEQvr5xkLXeAQkCWrpHnM5Ld7KQeotHAAnRj4CCicJNiLmpqBADX1LY5",
  "key23": "3c94wpot6rK1ZzZYBxBVgVzmaHzaV8G45QzHQvCQpg6uNXtvuek7ZvDYzSA879bmz9qS6UHYBj5rVKoERp1c5roG",
  "key24": "4TnJKCGAuL6emVWzfwNG5oZzKTZExAVbchqNkEV59UkPtvCzKCFPf2oZqcxQydzcEEqHoj8uX6TjR57vLp5DvcRb",
  "key25": "EXWKrGaMvopFx6ARM9gcbWUnJpCSwYiAt5X1EfFkw7PBWwsTpJL4KxemtQyLybSoscDbJWKE1nSN7BTVCVCWSbw",
  "key26": "2nKj6uLmPTv3QCLuxfK9nYFGuXBTxehrHutRpfJeU8ke6cWHUKckjioMf65ho6CNo2YxTehMnY1xsdKCgc55h9rE",
  "key27": "sa59e5Z2NVHE9G2r5V4brEsPGhRkknS35QfoFWPQXkwcRzfJEDVyZnRYrqwgpixtjAFrPRgWzQoUkQFLjpT5fAc",
  "key28": "48JgxEnZL4sdKNNJzbU2tRoX3gKJtifYBZhZvgaZj3SV6CMFv2JWjc98F6PUkB1SeM3bMi5XpauWc9uSfNaaMBUg",
  "key29": "5MgQJuS3Q4pMPwKoRHgVvocShVorehsio1raQv6ybT1Fmdp6kUqSyNnPESbz8BwuNfuEY9mYPmjMZPR3x14GHTJp",
  "key30": "3foK39ey1FKVDs9eEfuxipPnVrjWaoKx9aNYrwbHUCqE1UiYNPPWdCxBE8vzC6oLqWvGjcRT528p6AzvLrRQPX6t",
  "key31": "5mfuwCMg6imRMjwW27Kh3NPPpe1mHHBvsFATHhPGqCF5iPeRHSFVQh69sU26MFEYWJTWSNduUHRTne1P4t9nfJK8",
  "key32": "4qscmEEDYRPJFtzUedCUu84Xr6D4aSXDfG2mPz2fwR3umXjiVssw7yLEibAj1rLjLtPpE7btWQ96SquWSPArCnWe",
  "key33": "5DdH51kxAMGm9KJCas968ii615qFEqyrMKxkoQV3Sc1JSy5R1cRNfXuKZFyKghU1SCGwLHP4S3YCpFLPi6AAHT3z",
  "key34": "27YgcDDo7cxnBH5Q8puKnKXDnfDUWpFRQTJufXwTnH4Ws1Bc6TChF4iyoUhwVm9JmGq9zkGKA4CST8CKaSxK2iKf",
  "key35": "358wB2pjiNg29wwwYmZ4SXwNoaAS6ammjfda1uMj8CsAW2fmCaiU5Cw7KbpiPjNCMEijcg7dkDNznRUY4kLkwYuF",
  "key36": "A24RzCuoEd8ARxpggXomr4RyRZ9VmgzPwXQpcAxZAaRRYKHB8EgqtnWEzbL1uR9BesPeAH4HmYaUTX9a9qRhGDA",
  "key37": "5UiVFjMweVy6bk9qYq7B7Sszz9ie1hKogs9UVNweioZNPNw2BNHLwvgJjc67jyWv7qStzAZqma6GxVErE2UHmgpn",
  "key38": "5pdkrRPHxGcXXe7fT3MfvVeJYBkWf8zKQ9ETNZAJmPGfu2whX1F7TvTaNG2aXsi9JE7bDQMsTVq9Zu9GdT4tCq7f"
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
