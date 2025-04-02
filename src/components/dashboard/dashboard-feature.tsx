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
    "3oLJtKwJJfDnNj3toXg52UXX5xSxuMtkjJspoNEY6ZuqFpSwVfQNnDCXeGxaeLuQURtmeaXfSKB2Xmf2ggtbuLrK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "33XWKhjxZsUXNHEXDp2XqtBqcK2PVYZKyqVrcfNCRWz9k9hFe4wQUtyzrDKUoJQfBAfv3W3Ni1fTAZssUow2YyMj",
  "key1": "2AdaGsaCTcCGxCQSYMa7CeESJF2fz1gwxmdvCfb5AGJkJGEbDaeKmSrWM6ev7Cck2yWaNUujvMA5WQ5zhQQycGHa",
  "key2": "3c5rg43bb96KSMQHiL9R9Ne98yd55yvG6vT4C6CJVhGUrguM54mRbPUfs7xeu2R4cjSpf4BjQEjwECCb6PUNQwBM",
  "key3": "qpn4PtyXTn6Y34EujHhGJh8XgHGPNN6CUBy1BiACdPWb2kmh6W6hBtu9xT9dawNj3EcD5aFcQBFee24Y28SBDQH",
  "key4": "MfsVApydexzipLSRKdCiDCYEMCdqy4XMEUmYUXga7JzsLSZzWEQSFHzVbcCQcmo9Ub8fkCntcbb3yxUCJhSgrsg",
  "key5": "E8mVSjxKAoiESX4ahnZfHAUirwK6CUEqumKdPhne3toiDtk7S9ZfM4VpGQ3bdtH52dNimUZnYn7hXqrrzJ374z5",
  "key6": "Npog8i24JsC5YpkP1rzVhtnMJ9N7XLtiVL9bp3ugMbX1Dojk7Tm4rTGY3qevo5zuYn9UxgcUzmRxkPqDbHDi5sv",
  "key7": "5X4KLv3s2uJUnXhcS6pM8BvbyY4px9DuuFo9hoAd2exN2Wp834WqPtwq8DTiVpvFW6mG72ihvo1APsTixgULjFJk",
  "key8": "3h4sS2xkEgbW3QjJiSjPhyian6n81PZ1LjwWqEwvxh6gRpJRJ5xGK7KMqjjvEvqV1Kc3beN9tuZqsvRcaxB8t95t",
  "key9": "rYXwo4gds2kPnZ8JSTmyC3dQVmFdH2Xs49WFj2XSF1qSttAwVdd4WhqLo8XjJqacuJuQhEEsJ6uU6zFyFeazkEG",
  "key10": "4HTDSrdov6uHw9K7kKAJoRCNYRs9bTuTNMdsRC5rhcfJVKbbhPziuGrppuZjkXNML6V8rZAhMHbtRUHk9EJMg2AM",
  "key11": "4kpqaDdB92GFc9uJHX1iLGmiQUB9xoTDLE1nFET6BfokLLNBkWT5evCdRT96C4tUinaPJCmzR1b8E8oV88DkP2LL",
  "key12": "531X9ixNdGuS1hFaZ34fMToeVLgWXgkemZWwRgzcS836yusTN6TBW8ndTb9uNchokbZso7tGHgzpV7geF6p8vktX",
  "key13": "4f5vaZu4jKB67Wn11GVZaAoGrEjSe69LUh2cJYtqrN1GXhScyCdrT4nVP2vVd1JKxKJmHTDmAynGhauachXcnmCM",
  "key14": "23eZ5Q9PMSWVV1pCoKzheXK8D5j4p2jeQFVL6oMiL2s2hWGzq81jswDunjzdqn9BaKdrvgJKmY7gZL7wADNa4Hd8",
  "key15": "ZpVqYU6nCSw1jwMVqztJzw7cNkkLQC6THPcmeN1nATVxo72TSpds4zi3fDPUTGYQgfCyvFtdkfZ784AmpcjuAWG",
  "key16": "NFbmyPFcdn88LGPZWqV8Rh2d1hFC3RiQ4Sf6AauBLBgGyVuSwHD3JaqpbfNYKkCExLy2ty9P3DwWwmA8o2bHLmX",
  "key17": "5YzbqiTErhguDziXB6o3tuWuUknLS7s8iXAzGfwT1Gw7q3t222qKeyeKMUrwCo1y1Y6m88PVui6VKfD32gHwi4nq",
  "key18": "sgNdRCQYKbbRgRDd1Kiv6BhMkwV4h4JQ8QVHynMujfiQA3VCgen5HAWUVwoFr1x1kSBCa5GdF8mBRN3jWJJCtsq",
  "key19": "2UayVg8J84YLK8Ynyp91QACBSGhDCnKs1Xqyiyp9BZjMYcWWDrK5eQXeaQWQeQLofx5Fc3AnnAf4hZZ8LzHRwiFG",
  "key20": "SzbDuxvYHjKkuXgrDBynNust8eRQPaYNZSTas6UgSfYxiCwuNReYBpNrJ6frWYmco8Z3CmfHxejEE24Kr5JH4aN",
  "key21": "62WhENFoPYm3f4HUijVhoyHef8KFRew5YRt2u9sZzrtWRrZeNoaTVo4Yr3oHrEg2rqfesXyA2Jp52gnEa3aKJpJu",
  "key22": "cx7zgyipgGAAKzNz48UJPEjm8RzHWz61Y2oHYyb1E5PgehFrwLwr32h5PB2xSiHaugmtUvkXjLLJjHrwojTQ6eh",
  "key23": "2fqLN2QGcXgxdzf7QAprNKtQimhX8w5GwHTRmzC9Rg4httH8DjSeAJuhQQUy1XgPuFsgMLT4PkFFntuE3r5jSh8V",
  "key24": "47fA4JXZM6Nk5aqmebPfEzuqmEC5FDAH9Jiqh7Pj8vNJb9qKxRBys6QtGkN3X9zHea9T6XMJCT15xni376an6Sss",
  "key25": "eJK33vsL2w7zeVfWST81Z2491piszY28Ty37ZEmBUFgr7jkvw2hkw2ijZqyXQsDsey3ZabaMpxXnetd1vgnPYwh",
  "key26": "5xqmkjZPCWtjXaRmcVaVWtDPrM9bZmPEZUvqcVr4NFYLNHufNk12ikxEoGoPZ6oafBL2Quqq288g2hgPtE78KTY7",
  "key27": "2rcMq1P7TJnPcRZF99HX6vRonHjSNfyc7ECoJvtGaqbVvHzjRFVd8bfD5JqTbtbCV8RJYZb3ZLYamvfZxQX1En9a",
  "key28": "4AAhPuUkogwYwdWYyUB6FQ1FKpdDEH5hmRANqe5kain9YVLUrqgWhd2ZtVxtRanQ5bMSnd11F4HHXaCusdcwHtWu",
  "key29": "2FSKAARSMeaFpiYo5qaYZgfyCVZNBDurbsVgtbbxPoriuDZcX7qFEHcGJWzCpyMAV6N35DPUdscmad8TGFFauiYF",
  "key30": "4iVyt9yYEAuqTiLxrSpJz7PJKv76SmWmNkYL4cp9t8TBRxxkghHErR5WN8vX5yznn9cFpKS99vgMpEFPujEeEicc",
  "key31": "2SRM467aUm7Cif1tSUWCVhRKYzJGgZ6haw4EwUJRuJrcE8xa87bmW7gnfm5B9ngWdZgELPY8BaJp5QJ6zseJu76W",
  "key32": "PUiXyTVsBxp2XpjgFWN5dn2JM5Dv4EbmxbU1YVbSb9rm9Ym3CUVWhfstyZRcV2jhRV2Dy1HaJ3MRP9W1tQ5zkSs",
  "key33": "2p5pofaBK7gPic2Qu1Wwqo4kCP6sNWNn4RaERFvEkGPjC6QWkTFKogo1LKaQnMixzBqwQReYuNit57oSf8tGCnrm",
  "key34": "4yrGGhErHZw1Q2yNxPVsU4qEB5PSGgmd3kKrz6gw9XxzZB19YxiinqQsZnidvaykEZo6iBFt8kas2uNk5EECkoV6",
  "key35": "2S8uevt5LsdvVXFKcHg2XBs8dRXVXmuxtwuobXW24zXngndwZ7X5m2Fkke1wNFVvnGVp5ABMpmygx1xMnrRc1dSe",
  "key36": "39dXGie96M8E5jRVVPQfCVjCBMdUWx7P34aZVL3YzGcy5C7e7Es1r7CwoLurUnGSk8Ys5eszyXjKxKFYMBcA9X8F",
  "key37": "3tmsfwx3vkRUTBksqJKuH9qYg6vrBBgx3Sqn9dxb63Tz2RVECC2FSbx1NKRmc6RdH7Erd61iyzy7TnZz3hCxHs1k",
  "key38": "eSMJ2SbFFYo2KHs8srT3VXyN32sq2FAst7C7DjbVyHET48LPLkpHLCnWmfXomvd1qNxdLVjN3KJipkCdzdxXxS6",
  "key39": "4wiL3BnjHJDZFi2hPmZ6yEAGSRcGmUAwfYXtFu2L7HqL6p3R74NW5VY4AgsokbD8TXTXcV6Kf6VQMxmWC8mAHgA1",
  "key40": "2X1WU7qiEW6EhQofrHvNfbuiEPgeCb9EyLRQE38svRpiTVbSS2KX7FVotWswgXYuDgNyGtFfj2TSNowxDUpF9GXg",
  "key41": "3wXNswXjqfQrxemY12USmS1gs48tTnUqDYsffUh8xfGZiFzQ9kpEZZw5EdoqA1W4MGmDeRKC7X6LEtgwLXF241vv"
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
