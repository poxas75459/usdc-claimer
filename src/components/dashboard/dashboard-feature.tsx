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
    "3bNdPkaDH2m9dZrxySW3kDgBdja8jHGu7gTuTjHDpviHVE8AW5zmzW9vS3ZQEBw3bDcAF8YcqZN6zSKLGWX75hiS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xJREomj2ND9MT6YLEHHognQSfg1FkSeik8LW5Za5tDfsYwUmDvxGRSMZsxMkQ2Ynccpuhv42irGTvo9JpFJAZcU",
  "key1": "3kFp2Ap9etAnrLTnzLbZbkCykU5DjEXHrK9Q83yTWjzGvoQo5rgQzHoNJRi4TrsB1bWff7w2o7XuxXXbswafq4xa",
  "key2": "wsSLp14BHETpXdWAACv4wywBGgfYhU6pC9EtXk3htoPZM2GJVhPMuvJ1Z9s1xrAwoYA8obyWwev1XPaBsbV5HkR",
  "key3": "L51nvoCWb6p98NTy6dM5siornAeapsxskEPJA3QkuuiumX4MAWvN6FVgNsqzyJtB4s4SZzFWmZCmcM6xcYu7gMQ",
  "key4": "3Y5DQir47fasDxUUgCJBefDGuyzN7pzWbnjafejdQGRjde8uHcSwbR6CJPrNc88z7LYXrV9WDoPGRcb6QhMc9mst",
  "key5": "2TsAG1nD82rNAgj7acVfzbBPieRWM9XnLZGL5p9x6ysz9n1v7eUhYJSyeHHPbTbp8LxQJ5tnixYEZoMQ6bDwZPrR",
  "key6": "4YFwGNK5RHsq7QLLTBeF3QwihLXodz3Kv31W5Wdtf8bYrijca13LuJqsJRVL6sGBzfxxboGk8PHx2ReETxsbFhRJ",
  "key7": "63o42ZyhvmC6s4HEaZZ6Fs2zT7ycAiZsyNwXCDkHHVHbzHzddZDTYv3p84sZouZAdJbj31KDSqEHr57a9488Saek",
  "key8": "4LDhkdygXbofERRV7hKj5VR9cNSUmEpig636uHHP6E7nAHtWuTD8wzzk9bvCqAEjHUGxhgePeSZRMXzyL7gCAih1",
  "key9": "5Z3W3ghVnbUtpRBAJ7PVTWnfgRaAp8GevcCSptoVfK1ABLA2dGzu7VYYnTRuUGiLb149VtWWVZoSVTywYGVn9eho",
  "key10": "4ND3YziVMM1j9L6xryBohQddyBxyKFCKLL9vAKfsTW5M278d2AveFCjXTxHWoV14Xj2253Vce1iTQnCvha3wujuk",
  "key11": "2KSrxVve17JDWewpXAoKToRvcv8wGhNhtfHDcXiRE81LgVNLpCEmXzsoWrPZ7JaXUEcXUxdQLh4KQvCfcmvW7pJH",
  "key12": "5HzM4ahBiSQ5JcGzUTPSFGJnk5ARcWeH2pkEy3oCF95uofERiQkBWR1J4dvEArvJCuyKHcXM9dymeCHa4qqJpgqm",
  "key13": "26gFnPBjYEBwxVq1uotq3SFcAgKRSLAeBQRgJsRAcTtArcJAwGCfZ6rHLfrhNDojtG5MD1z2zXg42yW4C8NPGrkL",
  "key14": "3PrksTdAHL1Z9CFpYhwrpNEy7BjHW1ssBaFFFhX2byE6zpTZqYbNAN62nSsZkQyjkbkbuta9eupwhpTeN8uZamHz",
  "key15": "43DjBmHUwY6cy7qCcTf3Vs3w2WESTgChb9vAemapauiPf9zpQT2ZcDoC67eXjCZ6NogzHigumJhQLcJBjvxxeg95",
  "key16": "5SSLemubNXrEtksL47WqPozZ6A1QgSQZ15W3NQKenHMHVogkjpamTbt8L4fye4GLskorjgaHQxpPZwYSB5sbuARh",
  "key17": "4aDEXAzpko9XaUgq9xeK8DtTvriAH4UhfJud2kBv8h8tZmrfxqVkv323L6mpx8k9xhhjXfNWBjrJZmsSYstwyRnH",
  "key18": "4d2iVrWPbYp8NUzABWiqXtoZ6XXf27gWCdEcDtayyNZjXkMvX678qimnJFcSsvC1FYsrhoPvoSHzEt3vQiwpxwfE",
  "key19": "3WPfRLTuQNtTnRdV4cXKKzMYEYqtqGGbQWRPykMrfn3gyy2cCdrEoq8fm1Sx55LJkDvPdXqX8b8ZwEUtiF8vAT8",
  "key20": "kR3ihxEhmaiSt4qdbP91zABJiZHY5Sg76pYiCWcjhr5Ub1Qz1JgHDqXr8iUXNSEKaSb9MhzGD3TjEfJTHPkpkBf",
  "key21": "61zbx9kuKh7jYpYTNvoYFnKpnctpadxj4uEBp5xSVGNzjYHCXYe7mRMiQ3CEMVy3iuE9PF49fVM9LTVJ4MFUYmgd",
  "key22": "hTk11tW6hU9VDEmRFyr3Yy9UfKnjkKqkiMdujPTTYGjiGKB3efLyhNpgB2AS5FjBaALWbFyzjzJwFqkpA93dTKo",
  "key23": "w1Rbcp22tjATAWutUtGAHf1Vn8ocXM9QbrrZ1SQDETVRe2C7duYwabsubA3h5yCcLQtCpbTy8vv8iYiok1ACgpF",
  "key24": "47b5CVaodJ8jy8NUX2TudxSMuNohAXxecUBqgUhUSsMfV1ztNCi2nVQtqGQHS9Dt3HUa12DMwzyRFYNwMuLXpRqX",
  "key25": "5hQ9tpyGENZfdsy2dnWST8FQQJX2rVi6ztL82a1FVUZ84B4TgfZn8keZyhHLmxL5e7Hb84MaGGXX94VN6QQt9aJJ",
  "key26": "5cDDMjchm7GjnMgDE56owXeaAodXKtk4SwxSPwo2HAuxKeNmxECdBciztXB3qpPRL47wKCFB7eDvaG72sgWKf7Jn",
  "key27": "3BSCP25pdr7dvjER3iscMPzR5Zos6vToezYokTKwBJ44K1qsNnrqeFFdFKVGWVymiTnJBx36McqoqcDnAHLDtyma",
  "key28": "5jXq5bo8mr89LQEcmoB5sPqsYAVer9QXyygTPtxhSMrRW7K3wd5dELFuqGJZ3ME9ikTBDLPqCG8mRoKpyu3wna2w",
  "key29": "XH3bE2xsHZSsgdqQus3vKwtpwzkf1tZckdMwbQqudvwsxxgXPZomSMQbVcxnrsQbVJwvXWshEpvjeH9ZMGErn7R",
  "key30": "4gg6xm9mvZBiHgShxkPcK774qV1ynjNrYqaKWJnfb7ZLBd3HQJJKCHVrU3y8LJ6De3q97cxLFU3JYoSX6mzTaDtU",
  "key31": "3SxSEddrDLhw9Bs7hR2xbZdCznYeargFAUsxTMzZWKcfcdnc2ygHGb78h9DddaeLuu4pPji8x1Z2JUJVfhy7dAwS",
  "key32": "3zP89bkD9kXSYrZqMgcmg5cUTyacBFjwVwRJ7PW9jfNbaguPH85py4PN81nPtH8Vqe3bKXPscbdFKGX5AjSs4NNK",
  "key33": "2JdDt4FnF4NLh4MpFPM6YwDv6TUYXjyAhszFtxq9xw7FA2r4q43kKujeCXig94VCSYpSk7c5V3P8xcXDmWM3dy7g",
  "key34": "2uYrT8pQvF8866A4e3G6NNfpK78xTi9MmQXpiwaKNnhv3dMLzybiYjXBPHrbbownU9gosJ79rRydK6JtkoK32Ebu",
  "key35": "2FwxsFp35XiHq4MNUFBj13YMAmHmEPfSiCMFojeGUGBcehruCXAbKrLyu89pznshc7HtTZ791YAua6QY31TTqskF",
  "key36": "5ieihrW5ZNdr3mGwLp3CQtMSyXRUJp3LoYiQTTiGKnPJNVmsbfGahSWUztfB29Y6hPhvzsnwB7V6siFZKPduLMtr",
  "key37": "5sVg9ocEhJTpTWYHY4mRsy6dg9gGmbC8ad998oWUivESAZoh68FomostH2PcqVsVGtk75GTuhLnFXS6k9zXAfx4T",
  "key38": "mx1nM5jNieqvY45Rn5MTrxLTCw9ZBZdbNNJEgJpw49FEsyAJQCd53Vn66YYC6fNZfUmX6LmU5X6w1oEVmK2YceA",
  "key39": "57TEQQkXK1YLd8KoBDJFySipqC9JvsbCNCsCYykMopDJ13v5m4renoY5s2zWasqf84YaK52XJRTig462gY9M8Ksc",
  "key40": "2HxPsZnk1cVMBg2qnaTMsvxUYNR9QYNuScjWyFcG3KsELQNWnLgRv39bs3FsbrD5Sa5WAZ7uwrYq6MCAQj8jWkbx",
  "key41": "3XQ6ZnTABDnHtLsBJV1fbzLGbSvQB2pkqexrsCVHsCqoUeLkfz1YAL5ef4Zb2U54f6YHcuPfe7hc6fyycEL8JWiy"
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
