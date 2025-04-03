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
    "4acyNguuLKEFtvuekdyyoQDdn2AQLAr94nRonqt5RCdPVtv71y5zh3mqPaiVLA3KQmDq2JF5vgBHUQYEEWUgEB8T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56VFqg279escuk82GbiNb7QoFvp7Bf2Rk6ERADvaf8LPBwdboGugDt1XNdbkG3JTqzbkCLWfCfpaTo86bmZPn1Lt",
  "key1": "rhx41Q1Ryc6H13BpR2ix73cgPFAWktCN9VPRpHKCZbYwJCxs6N8iWzmJY985WeQqn3mMEtz7mYWpFWtJk6uSmx1",
  "key2": "46ChWTBmiorJFC9ysA3EXzMw7WpoEMqw5BKNFbbNs2CmREwQaUJu2MXu87YSnaFz1LT1UNpAvbRAed78bCXBDSzV",
  "key3": "5rd8egeWXRTMsnwysXsrH5M6Vy7JmcPyrGSVd4g7vxc5punRQUC7Fdu18JRyMijrCkhfJZubf6qmWGrhYqor9vPq",
  "key4": "5xt8K1PTk5JZsdWRiPVX9i36xvdcfb5XcqUFUZL5Cue2hrcHtKKVA31FkwcdGv6rQzMfXURQQAnVeiHqHqCy7Y1f",
  "key5": "3Fx6oTEbX2ZdKE1UbFaJLSEFs9mVhjnYuBstyxtmGH7dRU7DxT7UNQbueYNvuhTWcuAnbnUqP7dMGgVVCrFQm9NS",
  "key6": "2f8bzrUuwEtsHLsxJczEmBoM9dJirWM6WYerQYeN4ZvRGy54Qw8pwoS7VSqZKtWJHd2VYftZAYKPtLy4sPMSqCRW",
  "key7": "32FgsGLCZSTj85GqW4oY3rXwCeNTw8uXGqPw2pBdcGGNbhyEJgvMh4Kwopq5pyGvie9Pf8NJ25gDDNhM6NXeJrTw",
  "key8": "5BiGnSxWRnXFgeYnzRP7uwCM7E4nsShhcU5gyHZs9j8UEkgGV61xWnBxWypnFfsz6pWghixLFpQcB5WPdTyLZUS2",
  "key9": "4sbYQzo6nyaxZSAV8Ven6dkKapSjvxUYjeTkpbSMkyfBmdRLri7DVGV9A1PXigY5H4cEB7a8U4w2yitnAoScqmJg",
  "key10": "4wnPhhFe8tZKk2uGo77oDL84nFfuHcuEX68FWnWKudf8h6kJbe1ND25fdynVW5aXRwSFuaymAfm71EnHQSGjx6ES",
  "key11": "2rVLwpwJ6EDVsxAgyLfgNJr5Xgo2mriALuKQS8Y5NBWbWJ8LVMbTi9NQJT6KFCYGXG8WTZxQZsg5cSgnFJ599gsB",
  "key12": "5YSjnU38AW5W7uvSUfqb6xm4JSC813RSEoSUDn659JXRNd3EXxWJ1cRJbevE97GVz6NZgEsRanLhQUgvi1PGTDKf",
  "key13": "1yDbieEYjDbHNE3XDFh7nKjt9Hd9YjRoYqQwpEtEF9nkpLhkZPyq5bt3TfSF92Vg3BPL5WB3YcAyZCDfrg38hJF",
  "key14": "25MAmUUV1PCEurAMoxNXA1RKjZvCnCWd9DtGwrLJ7fueqevkotXPwnfu1RnZFomUqgWkpTthfyKbmiknQGS1Swam",
  "key15": "5hUaRDb1WNWjAxU4hxK2zoXxatw9YKnDzsjQMYGGPR3bugcgXt6AYTyhFQHzWY28VpZpXWJjwYNQzJtU8MD9EdXo",
  "key16": "2r39eJ4Ufq9Vx23tLM1GuVzEZxCX5kSMo2aXYUowoZAR9xUa7eaV8b7kmHYKH9xQATx5hHH7xXsmP2yHArFZwqDK",
  "key17": "5KDJbBiSEoBPKvE7mbVUby1n5yAofafcgTM1yusQiqgLMRaYFxst1EXjaPKUZneDFGNBpmxnSkJ4pbZm8UsaeVkC",
  "key18": "5RNXbjwdXQ5zv7PykYQX12V676EEcocxBLh7bzkzgRyDAmSqGjmAWKEsXRSvULSV4MAntn9QLLVY4mV3XkHrQTqj",
  "key19": "jaCPt5enDekDXGo1L9idHAiQK6ChFNWf2CCz289vs2aRJ6eW7JDP4gWrSFQZYqoyfPfo9zqXSue5NH2AfvvJB9b",
  "key20": "5UnSTQspUfTpy3ESJ1betL7SqitMbb1PEmjJo6tEetKxrVhSantyXmCRPgxbYgze7f6RkgBocWqax2o5M33mVyHj",
  "key21": "KU6YirrqQiPeStLSNG8WYLj6J3n8MiFBQL5giTwMCaFpC447k4sKhrvsx5ZSh7RjiayZvoBXyqFaDgemUKbf12v",
  "key22": "5EvQA9VPjXp152TsWxKHphHfygHrAeUk2pcz2UvkjLp56oqzvmfkxj96ZjrPikbzNkysawPKvmuqP8huupajjk1R",
  "key23": "KhA2F9WRbRAt1MjiYSkruVtGwLh7kGUZ54jb2d6HSAbMVP4hyAw1LoULfPAzEeKcci5Et7EABWbVRLxbZEEkFQX",
  "key24": "5z9SZRo7EAouimbsmefhTVdhgb4nnifcdnZWCuD4cRgUWgvZg5C4htiY8zd5e2MyNC6dFbnWBDACXZHp1Fo8KoCa",
  "key25": "276es4b5Fm1JBmjjfAtjoQ5GGNi3QgAvWQ3hzKdex8rpK6ngVJaqJgYmYQUw8Bcic3jpdBeqJt2EcgYYdZgzBtSi",
  "key26": "5LvHvv8Wdy5Zwy2F6cZqWVAyuza5CG4343x3j7qCfyxrCfprae348omo4yVzvSpE6uQpKYwSs7sWnDTpgL5qqW71"
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
