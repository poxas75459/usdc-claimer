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
    "4MvUS4yXYi43dRp9549CVcvL4JT8Cbu1U4iSsumUrweHc557PpgasQUqD5mtAYw9FgBmTNY6dSpB1g3kETk4pZzu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kw57D7iWHJvYqgo9iP2LY76e7Qi7cHgjAh6fUYLCxqnxpYxwBr4zKdjYXMAXHUDYK5aYmb6X81wLbiSyDPkLXcf",
  "key1": "449vSFUMVeBbiDtcB9jsdLySQ65Nj4oEGcDH4J8DXCosqrtuNjfwm8RsNNaNEomSGLU9bfJwSsDztMoV63EgGKXA",
  "key2": "3ayV4ebYLJbS5zSyW4s7wRiXa3QYWLxDBtTgAAEFa4mrH2Gvx84KKKmrGiGzGNHNZuVfd1yVjbxFNZpGPFa6LyP5",
  "key3": "xdrSspv9satyqrUpr4QAESU5EutGhoKTxK3Q7sxnfPdLwtoQ7dDUzJJBdGh4uVuLrsLMTCBpXS1X4KkJbyfRt5z",
  "key4": "GDJCNTEGpQE4MyZSLtsCQ3yiYdtuvztqbdsc7y7QAr4pxWgHpRb5C8tvBeJKi9YmbArHeVgcpNKhcTztTYcmVG5",
  "key5": "2cycThyvVf7cH3vNWLGzeE4Cf11cKvMz2PvAi2C1vfMawzisHCb8VRyYoGHwx7dxyuZik5ZYQkS43uqQ96rYRuuG",
  "key6": "32wXNjbsVqXtdHqotqTr81zHgXBE1Y7Gmt8L4MfD2pDWwmrMeUREP6EPrMUToyqEr7sinvb1vkfTTP3trYPZGTKc",
  "key7": "2fsHoE1Y3ZNWfv1J1zZ4mQnpnidjU2KndLqAJT9UmZpcrLL7Gw9wykC6nVxAGcDc6b1Ka377akaev3GZMjHkXNok",
  "key8": "4rxgebfEqkYkb2hJRgLZsids8Lvh9iFNMymfxS2anGBbVWdQVFigePLh9fKS1RionswSHFJVn35KXBVLQJxf7v2j",
  "key9": "NmFEpm9wV3TbEQ26Ckiq34SnRwdnCc7yRvgnxsrGpG3XVUMHkasDSAaHB6DczDKvq9LAax5soVMQN5yy4KNptAd",
  "key10": "3GBUqQt9mgarNJqiaNWaiko8CpjCGpUx2LF749kag94VTKg3p5wE84UasH1oDkKkQMkt4eLZxrRLvrwnhMrqjtp9",
  "key11": "2TVRgrAdgByoVTDaz4bzvGrmcyPHo5nT8CLeVXgBv8YFpkqVUiCmW1P9iwQhn11UYymrem58aFdxG6Pyy2DzXhN3",
  "key12": "2toH3tMZ9HF9D21pK2MVpKJhkdutA9vyuYwSJbfXsfNSBg2UNjFkaxtsyRyaLDdg7HDHS2nGznrq9YVx2MYGfEP8",
  "key13": "2JrrGguGMpkVk48TapTX3tPd6y14v8XmexFTQQ4RXBBq6tdDTnEX9ProVVLmx4WTR3JMetXmoDoTutgnBzpq7LzE",
  "key14": "58RWxQazdFLcH6LPMXiUQXGpcGraX8YpysBtwX1MBtf3XaV144Wx2NZHjU8Zc9Ezbwsh2VAAdGKYBmNaBKJDEMen",
  "key15": "3QNiAnTvYe4RykaYQGByuLmy7F89gAB4BCvu6eQ3cFRWwVitZ5UnhcBCdFET1Um5ACSu2vBpK2upjMJ3qvWDkoNB",
  "key16": "5bnsCt5tTfbiVWgepoHhdg61GftzQygNVa723FbeeiATT1y29DHpYZW31F9r8RC1zHxVGg7EiAYUSCNoRJVstw6Y",
  "key17": "3mwPFnQ6mGDgNb5DymY8GGsCHUvQA3jXweEycbgDvZuVscNLHWLTmXGofqsiojSDgHzKZ1ipPwYHcFSgU69jUtTM",
  "key18": "66iCsgL9VSkkSo4Xk8hhJSKYxnxRzoqCvtPcToZw2g8qN2yqNx2snMwxDsH5LRAxFRJPupncX6rNzFq5Ln3EUbME",
  "key19": "46neRZz58k6M1utxQtxCgpoxNpRa5KBuHnVdr3sNmKuutCDpAKZM38WXBa2hLtbz3KGV6wAf9jq3k3NVvK9JFQrq",
  "key20": "5ijvx3tj8gNZybUTcGxq8SSGrx4GV2T51Kk5LxNuXZHTjVMmAxco5jgzfYeSQXiQqTEq2eZZZcLg7UpDyc74ydJS",
  "key21": "2oyAsWwC7zK6jGQxKK5mmewAuyLvygBPi6JoEk21ooQHGjQoLktvirnqxkSxbiUWYAnhx5uzesTiVi4SH3Di9EEc",
  "key22": "31KtZ2iUEUtzERM4rDAZn3w55EJuvS3cHXTWFLwtojgt94nbsBMq22KJLKAjRUArBtFPAoBY28zhC12fvKBa6mEw",
  "key23": "TFPDGXCBsQ7waU65eoC5JRwrpni3X2XUtnCbwHHFFy7VJTzL6MZtuh5Z7hts7fPSnFvH6HdKNV8HeBWYNzsoQHR",
  "key24": "EQQ1cdYc8kyyZDnwCJLseD3Yh9vV58WckPN7th5xhkS5Y7tnsAT1mD1uHEXsN7DHtz6daaN9PtTtRfgD382t4Mt",
  "key25": "39MGAafzCen4VnPe2AyMa5VVPHGNsn416H89e3wDswiLVar3UuRPr12Q6UrQmmPWGqRonm45mBfeYxmTAHNVdtdq",
  "key26": "3w2SyaixEYYu8T1EdsivRHT2w3tmxtVxVjry5pWJTdc98CufsPUQUFTrG4GBRqqntQFgYAjCkrtgT9ww776wXb3h",
  "key27": "5schfYuL136XrsdRSWoKZzqxNsBbxq4ZaXRufnTVYWTSM6DKF82BMMyjCfAUZyyTYMnoRBHK1rQaKH8BCq9ijypV",
  "key28": "4CCBGwpgkmmbeggkhhF3x6Zk5KSXrpvaANzGJo2mvopsHGHB2heBKvWXZofWjCoadHhdbp1BVRqxM7Wts9ryEA9",
  "key29": "rHYuhBo3baeenCxATNyzXqLcdvFM5FQxPmCMpAqrorB4finWcPhZy65Ef59dWcwpgKc3XcR1wYwgroqEon948oX",
  "key30": "srV7dM5geJxC4UpfA33sjUGqS1DWwtpdcmrsMpBFkGWMBrtxc5UmgKXXB4Gkfd9eD9xGsCkGLgxEhTu7JCGBqwY",
  "key31": "5hppmx7KqyJHoiMKmEWCpQFws9A4KWMgzbWzyv3ykmXi7VpL1YD7PrdJaCDXKfXBwpMxLwsYqxNXbPZtuXQqjS3H",
  "key32": "3P2ztTYnTo49Pk7o9UQxWUuzZVvibmGTW87GPqBq637LHk4MkUnCMBG6DP953JnnnsdrJUtQYgGk7BiYUJruoLXU",
  "key33": "4upCjiskgo3U2SagEXubNs1FoMRX41LMS7ycQxsd9Yw75RUkZWQDQGvy2hmSxhdFt7FkW7gEwk7F49SDCEQ4YstL",
  "key34": "62u5rVvnJAt2TwnFBPiBvPsumvijjhyNMWdNzTp8zDWkQrQpYRYgkqFmsKxyo81FrQLFheJfSfAg3XNtyqgFTagG",
  "key35": "3893iG7wHJRpoeJVjvKZzU41ofUFoLWghqns2pDgBUwgdXc2nXSrhgZZ8DYKAscKm3hkg2fXk3o2CzzW6731kzTG",
  "key36": "5hfbaGR6rVecqvGtiLW7Y9BmvEfjLtiWrRXSk8bZokWga5iuJztYKBBLC2aRevUHq4NvnbLoj71okcstCwJowzCR",
  "key37": "2j1m7Ku5JS9fooW6Jksz3aaXFuTR4S1Ze5wyPuHxaatBNbAys3Uby3vGHnQWQp54JZfoDE7hX2dcPKHpMnKVZBAZ",
  "key38": "3X9ua3EvNqxVy6SzPcsXxwVEaDkMU5vnm9zCQQrTYMB5wMV9RfXFc13USKnr9V6FVX4vYedXbxBdhNZjKe5B5GS3",
  "key39": "5d2TzvQ1Prg7orLvvoYwQfmiR5xeuxPrDqxHE8tCFMeLkkYB4jVc9ZxDEzxnDv5KBeN4wgZKBj6wMQEZQKPadfMt",
  "key40": "auhGNGTqdXcGX7KP5VXDpi6t3LE6Geb7PMTPFRnrNcwYw7b6bvs2kMPYLaDoKGvKyBXbhpmxN8Q4jKnNbdXrarK",
  "key41": "4DZBNH7sU6yzwVWYmfM8oJiK2bt12cKCGjSDVTjwed6CQuwQuHoYGYs7HDG7m11RJEdVB63PJSWd5KDU1zsbwxbP",
  "key42": "mbKVoPZKhc14e9ivY6QDuJtfJYAsaV4EH2ZTgRb35JdSDF9Auww1xSsChUtAaNnugESEB5xRVe8TJHdVDPB5oxd",
  "key43": "SeJ2hYxz5gq3gnPd27cVJ4Kfu6BbqvqZgXMiDnHVen9yprkhJS6TZTqACmeMsBRw5uBqZkhu6Z3FwpWmTmZzPCx",
  "key44": "5UVUXXWbgqhYPFxkKuv6twRRV7xJ7LpJw7qxqhEf87YHQbzrPsbV8Yh3XdhjGwBk4m1bLXyEzhYCMj9Pz6wPR8Fi",
  "key45": "6zZUxGMV49w5eNMg9g9NdENVz3eD1XXR9zpkkAMwXUEYiPbxEn8VtJd6mQA79xC3pAJmPinptdmKQjUWeNj8ayS",
  "key46": "cN8ensZSd7xN9mf5ic7kjnJUgu197FRVDhHxNWEevxjymQwq4nRdH3HfAqinaJ1V9H7n4Wd8GesChiw9ZCxWV16",
  "key47": "4N7qWiMBdSau93KT3mfTCjmeb1vFi16kqsBjiXQ4mPtDd1BWhyRwtFqJ5s8vFseMkjAaLHByS6qxhBcPLmx3gmG5",
  "key48": "3BYmW6JC3xL8dLuAK4tEuCQq6goUz4UacKswX68MQN8UdtnnfwJST6zDhfyBVgHMDpFd6zqAPUJuS58yNrrQg7LU",
  "key49": "3wWExY9vnhnPg2y9fXaccQumHGVHqCcUvn4KoFHJH3ws5yzcEfNoCMUFhsFii3bcPuTcFBQpxYacmZaJCquvr74R"
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
