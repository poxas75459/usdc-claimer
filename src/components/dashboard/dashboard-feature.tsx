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
    "4hnqB9TdqWzAS2AVDAXW3MzTENTPEuXfsWb5KioeNRS2TjpWSua9nHHEBTfQk1MXMGkTNpsx9VUSQnYB6Fbh2m6c"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JQWyfukwMQiFuDHtrxqUwr6YbhibViSRiJQ1hnapHkKasuHfzpqdZDNa6z6wfdUw9mJLfasiTkHNyr7fTpMMmWV",
  "key1": "3jksgxdKZ5YKetWU7uBeDqFEWDCqVPbDR5cVqbaY1DcdBK6vpgLBvKYkvQjPdbwx5bWzsWH7tq21c1R1A1BbCzWF",
  "key2": "6y4oQaS2yQZmvyU1iGMZDDjqozGnum3rthhKJa2mub85SB3jeGU5Qq6MCtHRzTMzePUizz63BuAfF86uQXQDMr5",
  "key3": "21Nq4N9LhtmNoZxhqh14sDNwVpmm3LC7ES7WYnqgskrth6tCmhpH11nPfBRAR4b4jMtEGGoTegPgEx1RWMLJDLZF",
  "key4": "5Bms9MJUaCjunWkoY3jKQks2cgVkXVb5UTnPnHEJQAUHNhwo4eotKQ5v2Bk8pMGQr5wJmCgmMxtUu1ipVLGJv4g4",
  "key5": "4ERwp5ZsUaAApbq136mMqoiJB6FYc6GLbXJWeqA4PhaMDzxm9x1KzsphRUMfbJoyRV6hjDMwR9QCGMn9Z5vtHUyg",
  "key6": "47EPTcUS3Ea15snvZrtAmn9rpiYxHB8QWHKFRm397Lvzz3G43peuukfhKENWkbidY5hLwAyAcantNNU2gj58KWyc",
  "key7": "2s1HNwm5iogCkZU3d68KnzcmoNrvA54gMNa97Jt4jnVVLWEwTMNXBwjjDxhpn4e2wymZDbZxR4uB9ZFaS6RPWMtr",
  "key8": "F2bc12CxPFvkTJ16Eo6jTG6d1KtKWmqARj4B8S7SLDKAtKUb1n3hgg8Uoii6nU98wEZneiVpQfMixjTBjwfUAmd",
  "key9": "3JoeiqmLCvNW1DzfDSoTVfZ2VnisigfwapU93J8ikaqa5NUkT27fZaPLVX2iRiKqXGeU7SCRQ9ovhkCP1ggxeYVr",
  "key10": "2DkR4GkPgeZbcmijjhW8BLRz9u7ky9U7EKSwkPyBDCycrBmDixK58cavfjC5QrNC2m5kkCHS1PN6R7cGvZoEchu1",
  "key11": "5RWNvNQLzX1yjPYA7cnSythTgceLtSVbEp1XfuaFqozbVY29CtGbvEr69vf7JuSRM5vvN84eHWCVrihbfRxWTBcp",
  "key12": "5ZmJXBVg95UdRXNjqNDLMeStGHQ8wztoW2ETYC3LYrGiXHrYPQoRYsnJHatwXiaFxfAe8saDNAgignCzjUG4LDwQ",
  "key13": "3u2iHJTtWUEnXpULqAkSioGjYfAU3qsPe3pQcKhxyYU6L9kBPpyNGVYfmZCdP9Jn9oNYiUVJ5PayNN8dg64bTbhv",
  "key14": "2Y6RCSHvkbfNWXLhCvQLwMAYpZtkXrXHYaL4w2mfQtSWDzP1eWB6nAzNxNAqLE1gdKXzKMZh3D4rnqygtcbdDbYb",
  "key15": "4Megf8odKwGBe9WQmcTgivKv3RCQ3qK36qGcUYwYgTsbNgdZ4TwGAVLgby8BtcwgGSB7AZh96bQtV31Ac4FtBgPC",
  "key16": "61i3mZZMuNgNH8hmzw6H5QrhrtEBxGVyb2U5E9BTERe1yxhwjHvg2urDUqZhpniaoK5UETVi57fRPDSS8muNMPKs",
  "key17": "5sg8RAn5WCiiFz3z9fiWmqEbS8cR3Fg7c5Em9K9ZTXJ9TEFmaFgHTbGN6J5bvvadwW5itrPkuSwiuugH41Wbakhf",
  "key18": "55S3ixpgziVa4yjqrM5W7dzJVZG9vNNnELBkhtuPyoXcZBZ5yVC5gjtB1iMVZCoLvSXnVeLGyJiC12iDBAeiRgjJ",
  "key19": "5793goCM6N43TMHUw8KNrsKtZ8KmjW4v2nfT6rdfczAreAjzztCrb4UzqUmgzmtTfJ5fxN5ikxuFVMwMjuhkJTVr",
  "key20": "3LJFUBJ2B5MwRiEtiUumQoa33BQGUxiQbWa4UiHRu25SsG4Qm7KKyakh2mLLFTKxjXnNjZfdMeXmTGsEvyRo8VYP",
  "key21": "3nCZtdTKR33v4RTgcpGWhUPNHvkKXHp8PCmxnidkVzkTXGEGkx45G6rnRn8eRVL2nYXAuzNwtPEZupheTmafGoLW",
  "key22": "3t7JSM43oxUdfzdFJ7psuxDuxMKQRjbnXmUA44vRdjw12Us6KUHzhnx1Rik4z9RM3PU9SrC1ZNhHWgnqGBnS1VsV",
  "key23": "55ZBoAqExaL56VmZ9XzNrsq6pRjU2Pks2mVaw8kXTRPgXP4MfBMcns9jARGYGY22hx4YASFT1DEkuRNwch8uo7mc",
  "key24": "53781j8vfkkNqnL1UVRuY7smXanKNfLTfQFcwT9RPtoZfDqEiArWhYFTyz59x68HfTQ4FBuoHj4JdNS5wGHaME7R",
  "key25": "4oCtu34pyFGMSAVZw1rwzv8aiGJtXzxVheuKXdRBJWiQqzfbRE6uihAKtQieDT6WrvyAkzrBE1xzMVnB25mwu8i1",
  "key26": "5g9mAhBKo2eLULzvjSWLsVvUShmAyjsWsJc9z79ER5j53UTP399i2hgKKV9PgmePm5ixAxkQXQAAjTNKCngxooKP",
  "key27": "5aQzrgdJG1ckdfpVaZAKwfFP7CdYCqsDpT5BKoXf6NMC8YWVoDbKQt2fkKcYBeaFmgFRSSY2LuSYgmfuYpYf2x9q",
  "key28": "3vtpzHRkdGk56MAxjpVz6ZzPgC7nraruZot1w75tjxDad3JimnYzZxebDK2wZDMNqhQQhGygCRwpnibjfKFVydZV",
  "key29": "3MMvaHVDoGYMcyKRKKQzKqebBCvNUM9rpHA24aiN2MAKSEmLthiTQjBhjYE5YwrGmsTdxbvGGkxUWqUMNBnqKF9f",
  "key30": "5ngr7ZodrizVcivXVovo5LNXwQRso3x4ni57kucwKMoxGmsqbXAUDFh3uo52ib7jkXnomycgK2tcoUj5i51i1gMR",
  "key31": "25iLRNP2oxA6u4nyzptnNt4rnuRu6fr79C4CtsSroBc98foqCoc7xQni3RnEcAPUAs6Qj2B21HXPRLYNDEwtyWdS",
  "key32": "44mA5YGsYVPbKuiHrabRe6JgDDdNfhrXdq8QGM4KPnGp3gG2xAdPNEnu7bnwEY9MN5n8WBSiLkXfmir95CdudJyv",
  "key33": "66DrHZ4EPnSwHRbYeE6c96cBMxhEUaC4mT4UiEzrjm8kvDpLPnFeizPynv6qUmrweM4QFKVs9hDDrXJBBsuovjkw",
  "key34": "5benvVRDpj4RkyTWV1xAgPrzQzm5i244LZEp3Z93oVfRosidUhbTg9TDeubf7j93w6WrJuwQFRZmJTVkeZgp7KB6",
  "key35": "4tavmJ9JCbUaPTZr2YFASS6Yvis9WbL9yxWJUnZwouSoZ5SQTYKt2bEVR8nFE3zXksgjbDTFQTN2tJ36qmamkoLu"
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
