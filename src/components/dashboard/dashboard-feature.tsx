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
    "5i7H8UcX3VkbS74D2LDeNyiKK3gASq23ZGxuDLebXvcCH1NBWDGLzoanw9fNq4VZ6s1JdjUdW4d4xwEwMemc61Fu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TK8sTA4G6t2SB2usFVFR6qjCqnibiqBY6XrbS8VZVTSdnjc1q6pV3fn2F9HNMnhzK13thLsE4CRemqiu8JjA4bR",
  "key1": "3WYpMgsWw3EU4iQSZjJiwgNABUpENYc4gYAktVsRUgX1kjbaSu5owBRfpy4QkkjzkwzaujgAsgXAQQJXJ4eJhRde",
  "key2": "59qmkboBys9EEnj1LbJeZdGorzqzVRtHeX9kE8pCsGR2iiHgNMir2sww16RDbeUqtqdhaojXVwFnmvsH7CxPfy8V",
  "key3": "5f63NbPHZ7dcwnbq2z1tWEeWAz2gUMCmJz2zmY6Ji5aGjmJQb6xmhDApDz8caYGNpGW45whPcxWESBBCxtMfhvh2",
  "key4": "25yn8nTKGpqFA1GhLkozbFSVZSR2Ksx8KNGojxM16bbLTUmGyyDx6EMWwc7FLYbbUKuP4YYfVrpP8nf2pf6Sa4H7",
  "key5": "51mxT5zc25GPBa3UEgsrMJCcmeP1LUveSUSA79PLwGLawrYPEJEdgUw6HZcRwHnCA6mKNP1sq5Uc9LCgnmEnWhou",
  "key6": "4gD42qt2FBra1jbampyXjArJUM9rGtRcxCKSNEfdXh2Henc7fuhmqke7XHzcHAEm8CfC1Gpcb837btVYSdAC1Wxf",
  "key7": "2ig1sGq923Xotrcxku4Y9byTVNEYH5pijBdLHj3xzLH1a5wmYT8PHQWxY3k5SwZMY9maupNUMTZFbamz49EU7kaB",
  "key8": "64aYwcZxTeUrtUkGWvRhCwYtZtafJwF9bsU958TG1YNnRqdq6osSoFnokhBv7i3VZoR7qDJMMtQ4xdCyf5y64wak",
  "key9": "4aMdRhDLgCLPQoEi9sbEXoztHFEJaCtX7jiTFqJCqGUjnE3C2Yc4VjMah2VoDKK7eiwjRmjyx73eDyuig431p6Pm",
  "key10": "B2xSBb5xsLfMhAWcJsDkUtMxm96EZvexoKHBWAohW4WkmCXm1o5dDpZ4Zybpg7CJp2equd8LNSsm36hgDQdTCVs",
  "key11": "4JqPohG2Bi8RCx9bSNz5hpYp9KCjxDkUsAYgGsuvMqfHkWqUDfu5bd6qxePX9KQ7wq1hEYQPTbPpogJjB4GZei53",
  "key12": "2C7Ydsj6Ct2S2tj4dL4xbkeCUiHvDFVexzBgqRKGNprhgBSV6E6bLCbS6VTv96JqrYU6NYU4d1VpdDLS4o4czzr1",
  "key13": "3TTg1MnNH9CzmLtYe7mDhjp9JLGTxtxSgYJCbFm5vTBsGxUKtgmPLUZiRgTNPXXf9zW3BsXVArazn3pDsGnKVjYn",
  "key14": "FjDAFhRroDPCbsXAVRCU4p9SPgX2PRZzLkLRqepBGdhqP3AsMtEdyJaW8vk5duhLw2mopwdfLA5Bf1i5pc5D9wC",
  "key15": "23sWvwsjvEEbgm8FbPXQmQ2YQ7WKUfseqRM4NicNdS7wjEZFGuNbexF8UfgCpbFzu1yUBMQctyD58Vdxa2yt4kXp",
  "key16": "2yJeANYrnNCFPztfdyLHpWqWpqKHjeBzh18nhNV9W3DtvSxKtnhvjphatZuTM5w226UpB2euRSTHpdbVK6buUiAb",
  "key17": "5xkVAsfstqPv9n3cZHWypLKfzhoiAa51GQr3A5AbCt2W3v8rT6ggepLk2u1QHbn4Jr7VDYU54QbzToCDw7abdFUS",
  "key18": "2Lrbzxz9At3oXVwkR2VfxCq8jdfrGTDiNjZkoriexPYd7uj33m6wcaVA8ZQA725zRGVfmtRsj5y7qXwhpashPE3u",
  "key19": "2fmE8YjsWv8kLTrZVuoitX842hDRwaFKohFXSsLsy3nQ7kZZN7h9ndgiF5e9ruYDPNnN2T3YGQpAbUxsPagT9zeq",
  "key20": "zym949dxeCpiVhJWCHq3J1kcfyvLp3TwJSYNiUY45Lbq3Y9d9AjUoatskr6eLGgVrpAVwadnyhMjGoCb1yqufEg",
  "key21": "21jFpNsuXW98oX916ePXfy1j8TirDhQuScnpVi9CndsBaEiPeCtDmSCeddHvkCZasaXqHQMPRusdBjExY6he9M1B",
  "key22": "4HyDdLtQAhb52NnyFZhj9xJRh8v9P3QupYpWxi6mizp5DzQ7SBF6ZpFr8KGCqgRCWsyBHkgwxZeoc6LuFMYwaSh4",
  "key23": "5XLjYEDYJNfA1bhvWKLPgV2QncQu55wQpJNUpUKAKn4Yk7fUay5JoYrTDLAJceAvZyGSq51AHFt1vi2ZoiRinRMz",
  "key24": "JXfnoCGXGXCn3yd96tEWvU4kNnxkXQvqgaCvWG6aJgnuw6YRA2xEBcuGkYJqGDaevnLZ6QZZjQDpxRxuToq32xS",
  "key25": "5BaHuXjFWJRwdbvA6prwuPiyurrqtPJYZgMT3ER4kY3g6SvBsbXqpiok2HDXtenDWk3CirdDWmTnEbqQcbDvnrEQ",
  "key26": "65dqJQsT3fX79St3vnoNrsaRsM7y2Es6QWWZdLJpkuuJXZduagQfDXPRKfjuGe5nKyXwmffamx82NbD1uH8RQBjv",
  "key27": "3c7q84BM1WXSkxiPMMiJdnqBA2f4fzk7xiabmJSK19oisiwxFQHgqfqcNyFzgq2ZmvYJCe3ZjyhMA6bEXpMynfPp",
  "key28": "YnBV1YmfTzqLCqFFZYv5eXCqELeH1MfSW6uvQDFYdmUWMQfga3FWGqGEBh92ShFaZ3RNqHzCsCvdhGLJwjWoQSo",
  "key29": "61Vp6srmQaTL4goomCbXh7oQmSAt65SNXzhMN7Vc6uJuhRon8HqC915vBvM5ziBFJ9YvqVr9fFatg2edqSvwzfsd",
  "key30": "4oXZTcNabQsPYE9nk1fattRZcPCk8QKE6wvMMpTcN9W23BfgevrcsN9Yvk1vdoF8XbbC31ahLREbMwWzorhvFRTq",
  "key31": "5ojq7j2TUeGvUwT6h7LTawFn92ccRbMvir9nknDSNp7HPrGFytPJXPJwT7C7u6yAdvZTAiCnDm7REdgW9Ph5aPZr",
  "key32": "58Hs93TGDpTmHQmQf2oDNAnPSWsMcnwnCKZLzCM3w6EHxKXqLUHWPmKHTgQJrwLFuuqp7FgoEzTZ59uMKZLmdK43",
  "key33": "47Aq57UR3sRrfJ4h3ZmaAeq8Gczb7c7qfUrtXd7rkD8jMKTS8FJyHbHbn41Td3JRXLm5mQzNmBJSdiBDLkB3mLvV",
  "key34": "2T4y82A8oVecEBDqTgTWnz8dDo1mmQowMGUtmVftVnPcPMcqCJHSgsayqCFnz7wAFz6MyFkKu5DtKMeMVLi53aG7",
  "key35": "3c7A41DPX5HbiMNvVB88fW4LF9SY6EqSF6zYk2ZYEgKq1jyz1fpX3v4Fgm5fqwPJu6xeQ5g5ZGbbTUGXvMJTzR1T",
  "key36": "5hYADCYZegRYkzvUWuiraCgnUMipVgB67tLRsSPFEby7d88xsrAVX1oPESmzsptWvprsUqAuCYsuwyYP5dh4NRSV",
  "key37": "5pXJNGdQE9NNhDk3B4t6X3JVUd9o7Es9HnXeGKpBZoWsA4tHkTwQa7tSAGS1m29We3X9CUJjx8zSeuxT2bzwRdpb",
  "key38": "2WWUis6uVUSd3jqByMa6M6WfDEuKcSwzjN9g1ipgqdkvSZsd7tT1hNBXMi3Zc11jGpqTZhdzpfUxwqFSAMn3M3w3"
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
