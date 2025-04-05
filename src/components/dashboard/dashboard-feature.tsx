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
    "WcxkCoESn9ejqAE9jvCjSw7LUWcjeqk7ATKRHjh7i3WySVa6NpdqCPJnxFjefRLc9zbjuQTsJrQxLqVNmRyWvhe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2QPRnbCppCBVxybbDBS5ut2tUwB2Jjz9E4DSheJHkVuagg3NVnPytvkiYbmBZjzVmHB78ypvArBRQPXU2Ncbo48D",
  "key1": "5Fy9Sj84sLiKmWiz9kBSAjcGdGP5fC8osb76ooDiRTWGu7WD4ww6xBZHivAt5SxmwZKX6nCMmzj9uhEcbWNoq7NM",
  "key2": "PKG42Y4XohUVgQ9yW9AbS191QqjnPzxDpWHJfNk7pbUpkxnd2rynkGhd8ky7yF4wX19Pkaj6pDwk1Yx1zwybEcc",
  "key3": "29JYpktEmGTx6TSpCHqwdTzuB3xCotkwa83G6YeqWmoDbyc2w4piHfURDu51mTSt8is46ZcLUY4HA87EshhmkiJY",
  "key4": "47FLG4Vu9v6Ydx2ZALmMCKk94PLJ19W7Qyy9c6f13LGQcvVGrrBHrvAJKkG3aTW1wsxrc2DYrb4djDQdpB2Ksv6i",
  "key5": "JUe6tN3gcbYbwcMNnH1bVBQh1FoHeS4zvLN6RRA42tFBSEsxBv8uLXcR8VTBaej4LuorMiFDSt6UDTDSbGoBXN4",
  "key6": "66ksfyUCuYCbMAhQNgJSVLJQKTzFr3rwWpL6zNYMNhxGhLMHTsc7n82sX48kNAuxquMWU4WnUt6jNfFEAMQsuLqe",
  "key7": "2yxhguitfGccNqTNPzozKcuiSRnnWWhTaZh4Vpxg6Q3g58xSc3nQdDPum4AfsgvpKQn5nBK3yPRGPisoZhwf92qm",
  "key8": "3Jvyg2QgiiDfJUiFJvfaf7Ypa94ch9WZ3j3Ui2ay1Caxy16bYg6DVaAadyVdo8j7m5enSiUiHpj9M9NFDzxhhrmD",
  "key9": "4igS3kXPe2bwKFKt95obCfTjgrJRdmjjBD5rt6C6WTd7DAW5ZWEf3BP8spk6CCnep8NA7wkyo2gFooZ9ocbhCfzm",
  "key10": "3SVsvpnePfZFHx9cUb29zwQvGHTAhubQEx6g7K1TKDNaFcmCb2ZZzF7Rg1XobJ3jdmTwRxrx9PNMvcmY99xwTo9L",
  "key11": "mmSnNz5yx9D4QseJCztuP4Q8Z2abiRGHa7kW8RM9jeVxJ1JbtdSVw5PiC7vaCt8M1UVkS6mSoxBetMWvu9iuU6d",
  "key12": "5k8rgRuxFS6Da6k2dujBan6MmAkM5arLnC4uFDPBLcFGpP8cQ6HnNhMwCyzayeQ74tVzMh9Fr9ew4oz61piHWpDZ",
  "key13": "4cuinW2FktvrDcSemAxGWa1uVzynayL7MMku8oxJXsGD3koQx8HzuttfDXd2m8ANAW7Nf1429ugZ6Aem6BLC2i3o",
  "key14": "2wGE2BxMQjSfxGqNVkTAZ9Nmu8KKdadBbnSFipHQPJVXMix6mzAiVNdXXV3LpnZ1wjmwnqhjGPkjUaV3U2nxdSgn",
  "key15": "2jFz8ZocpT632ngiAV7UvVUEkaeb12m5kYJwqLt7arNaWfQP9rvoRj2Sh6kkGmMbgbpmyNGVfq4EYuosFsTAjJnq",
  "key16": "dtMHTEan3ek86rejEDp7ax4kZvEDkB16fETBiWfCWsZKKohgqm7kFeUN27MVyciGFecVjocpEbzjc4NMuJY8YkN",
  "key17": "3chQy2kioS9M4nnnk2QpotbtkcKFG9yTQgGDPPURqCihbEfRG9eDGBZNDFMNK5tf9sePeVUm2LRC3naHb4AQu3zZ",
  "key18": "5R2VjgYLK3rofuUGhnHk3BLKMV3BLB1MYPASeRyCZLZAekx5x5UwsDFLXHLNapQo1Lea1Kc1YVCJ4THNr4E3nDdb",
  "key19": "J7Xjo624XHratHNNFTELBkKh78NwfsWvQETAEXBB3npcxjx4UfG3H8TBpx6Cz4dagj8YGY1HEqCnTr5AM1heUse",
  "key20": "5NMC7Q8mCMvG9NQs7vdLCQt7iDRLJJvZNgvCFMDbb6NzRJxLCSCDNGDjJDa8qG4Q9fvr5UMVGfwfcdKVxxb99cQk",
  "key21": "5uXgo2uYX5YGcGTH21B4BE2REfxqrZuRj4U1rb4NNQdwKTse2VhjFe8GcrJxNGEi4bZipS8hVTmrcRfFtWmeB5BE",
  "key22": "47PzKyoxzAJk59TkL1pyr3seApetYRLjfSx4euBw4Y6T5CFHBBtoqTasWWWxHAwizxJX7wKcoCGJZfokA9Y8v3sA",
  "key23": "5wp8C9nvMfh22LMv5kYPGbKonT5hLJJxo7Cwe9spTxVq69sTmdQYHwjcF797PBUYbXcqihqFEteg1nuh8cr66Tma",
  "key24": "2JDk4NFqp9iXmJX7Hr8urWAFRk5E6KzLgag1AaZofDqhBBVgw6hM7LvxoDsFzX8essvjvh9BraKfLuyQwrEGt8QJ",
  "key25": "3XpBsB72q2AA7QjU3C7YH4f2uGPodgmjWcNSn8y8ATEJC9gAExkXY6QkYD3nSG18fKiebGAkZU5DofoNM4nXQ7n2",
  "key26": "4389LE2EMsJpBxfASu7DLHGv4cCdAYnBcwXC8objR2DaYpq8tX6mFiTRbsJkQCuJF24ekt16morLjcPAJpjmJVYz",
  "key27": "5hy24x2VsggjNQkcPY6gEHD1Gc84QTYFm8sxGPGjvs4MsjJ4McnAQ7jXbTVZ6PHwBzjyzYDg8t4vaQ3ieuDbk2TT",
  "key28": "517DpXVYhBtaWR3UEYPZCTmpPK2jxHuep5ZfsaY6Edm6XSmHPvKhJorKXWUTMzH4Rp8oKCqvXCyLWHhkW9wqhRu8",
  "key29": "5NppD9qWrfWMoaBiCCPmUDSruupopFrFWLYYz2n8LDXRs29sgPqMvN9PoEuUrD3MkTvqhvoZx8etQMeQkzr5SEh4",
  "key30": "JvH1xJtypuvCixzWkiidDzj7AgzWe8LNd4WyPkXswovpSvKV4pqVdtCAXNUUkM8nBUYKbGnmJ5w1u67reu5v3fU",
  "key31": "4ekxHAKVfUCEioajfHJ96dCszE9JT47yxfVifdYMuErdU75NVbVmARQ7sMqF3ktrYGGctq6ZqyBYQjEFrRWNqL1v",
  "key32": "3U1eGQAbWWSNft1z5Tsq1Pb3k1NJwDdT9WuapsUG5CPCeaPJNimwTRm57Mkz9X3CXHCxbNeowMoRwDTV3VsFMdz7",
  "key33": "22diTioUUUeHN5Z7y8PwpSwydP5zivLqExpZJ23d65xpHxfpBj3fwYRnnV5V5UmffErnt6nZtnYcEgA7Gm7gnpwy",
  "key34": "3qV5DJiBo9M3Lm2NzpWdUanBZyFxhtUhHcQwgenbmmh6mH4XWGTdnExhYwLYHNkA5jvX6z9owE6iXd8xgpXzmeqR",
  "key35": "9HRqnvvrGCjDK9kcU7nNGUQxPX3ao7bUWnYjFcV9zPALMv94YBiQcmDYvJoJNRDXW4Hm3gMNFG2TqNP51S87854",
  "key36": "5HEGYf2xZXCm6RmVDDxvufUu2rgVwazbHukVqcMNPfvoP9yjSXTGp8tWpBQ6TRNK6irf4sZAKBdqA16dYLRS5G1j",
  "key37": "MXfDRozkdo3GgEvWY2ZxVBM44B2ocQgPm2DBKneGH5Kn3LynNiiYuKJEU6FZsfJH6R1czVTv7NqNQbv6Btv3Mg3",
  "key38": "4v2QKwh2SjUHv6FTLzzmixbFtZ1giDgzU3sXQUvKqwQ77CxGNBWoG4cpmDEuv66JyADsq7CpTn9nrj5LE4JZs95E",
  "key39": "62XpS3Ap5z6y1JznqXEzWpm1jSSN2MhydC8ywG3yE3aBiTWz7KxMStVVu58zsJsev4MhNqYthenaeUHbGNxDPdwk",
  "key40": "Es9n4VqpDjKwq3F5Cp7Tgs9L1TjPqfxedm55Nnap5MBzGXGUaj6deJdnM4h4bQundDb2Z28pxtSUF9j23Ah6Tu4",
  "key41": "2m2FdqSVo14uKDAJH6FyhSEUxoyNwknNPW4qdur1D8dFx7jvrJUfsVuXBwzmB4ccKLmdP6gGvjvaLhJW8RrVeFZD",
  "key42": "2iavrDbxdL4ZNfKfci5sGysQstEXHDkFRdX72t9RrrL4qMUcPNNGqfAf48462L1ZnvHuXfYsVoeYPsnb6YaqQ2px",
  "key43": "5R3DgZ6j62BA6RC3mnnZrXTUnXJWzcmgMU8e2vakECq5bys7J3LYxsB3SGLJftkkCWSPTwCSrUgtUDJjhC25mEur",
  "key44": "QiJydW4P3fonP6ac42Up5MvmCWcV2gsZwa9d95Mm5jbRxCbkURXMH7JStrpvRTC5WF75KUedU1e6X4ZvhcfwD4f",
  "key45": "2zzyWqsjeNKzk4WATQab3TMN6pXheW6uUsX19mjqjWBmyN4Eap4rhe9y2P2vCRqEuc2cCvEQ8VFTYyv3bDQZbVzX",
  "key46": "42HCXc5KeeGHQYDt48ZsrJYWhoP8rpkTwNnqTivHdv1dg359UgmvdA6Twq69jE8RktbY8aDKjwyMBDvcLw7vU5Pd"
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
