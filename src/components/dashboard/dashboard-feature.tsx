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
    "4AiXKXvsggJ5qPvpstnT1MHnb2q9qXreSDHYptLwG61yRQt3Fz5oJS2j2LCSnLgpFe3sx1TVAK5dvCWU9gVoeXRW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "56EhrbzLhZGSyC2tDdjwGTBc9ku5YmdMSw3biXLcsWydH81Nu8aFp5NHa8aCYrTf5UY7aKG2gNoYwceRr3Z4GGPj",
  "key1": "cSo9bgoxDz7qFNR8zuvYUfyinkbTVszzUkgViUFPAcNhg1UN3AFW3kCKMkKpqrRxgwjToBDAm9DVpZqTWqeppmA",
  "key2": "geStMEmTCXZJCyAC7T6AfwRjr9yXPdrfWipB34UqfayMFtjq4pWPdR8j3wckys6DeSjTKMdT8BCznjwc7WyuyXG",
  "key3": "W8k35pNnZZvF9temNsKDf8HtxUwtt7TpsXzbnb8opB2LQNpNhFZTZ7oHM6vKLCpB1oLmnsCPpuAaFvf3GAsuneT",
  "key4": "NUhtpm6BUUc6SaoyS619QkmGDTAps77arWFEGLUVFhkNtpQ1yyV9x3RSyA7ybtjDJ2PqUsnSYGLHrLQejbxPHQS",
  "key5": "yXKfeHT14cvqKLgmt8r4KRY4c62dBVtKXvAZCN868qmXxDtMT5KE9TdWCLD7DoNyHQ6P1Z87awZKNBR2CqSANqx",
  "key6": "QPkyfqbvJC2N7rGmieMGmGXzPc21GEBnzSCXN6ewp2cVioEQsBq4vvYeJGoxXFJ6Ss7JxPDEvA6RKVCt9Zm3zrk",
  "key7": "VFnHSKAVRzUAhpmgFtnC9BMkyUDgUbzYCc45KCq2CprbCujUeMT7Rq92hbNo8HYQMaoYHdLzLH8pJ6Fd4S46p63",
  "key8": "4x2J9EtXwqgA3ywif42NvtpANaZF1iJk7tQ1xLf6TrrfueS4n1AHgGJPWJE34AgEGvcp74eBvzjMJkpvnpUr93tZ",
  "key9": "2Sp33HoD4z3HuqN3nSx1Y1s7X1ytZzoxcbFDkiCLu51CiCotG6jSsVGAQU8ky7KWsgFVyDvLoLo24QSjEnfqfce",
  "key10": "5EUr49F8jV5zMmDJVkBANBASW7oySf32mfLYni31EjjaQCguZsjiazausu6tKGjPLDdwVaTueUugKdLRo4vdWSiU",
  "key11": "5k9Jn3QCkhcJQq8kU6UEKhUjT7yJY92K2YSEfRc6as6RGmRmRJMezZvD38dTbRAU6U3EqgVh65EH1qtJECnrnTsH",
  "key12": "4WcNstLW1CGhhTCqyjApiXHwccY8NZ35gsyuxXFWhCMn54SuziCA5XaRbpSBHbvF93cz6xvcmoPAVVLxajoFpEYq",
  "key13": "43xYNiLDdavK79fFMTQtGgXENecxH46KHVNBQ1uvPuRhgrTgpw1nuHa8nSkJJ1ikmYybhQuQGLR2xpKq4Sn77EJp",
  "key14": "4syfME2SLcxAPTrDFHRary5em2QNRLCinbBKfsFMYn6FLfChoP521uDUEXgE2N8bi66adeHp2FRZWBYNVBMRDo32",
  "key15": "4WDSdAVGSFp6uNai9dvupUvjC7KGbuSzCXwh2DPronJTLYnijsNDBf8HoNu7WfteJ5R5ijZt6wxSpdCRJ8KZnfSa",
  "key16": "4Ye4RQsbGigHtZdtiW7kas75oe94VU12nd5uMfnprpY4q6rWkdZ1KDjfShjamD8RJyNDjPDpLKnSnkbDUNy68mWp",
  "key17": "3Keib7tszMn49A4FuFmdACn7MXkq6QetEZfujXeQJkF3YB4reCPgBH9nQjJCBs4rfkq1Q2dauLQi8jrkPujRCGUE",
  "key18": "3aqWEeiQyqem9dpMPbrJwr7J2FENBC2xwZKvwAGDDXKNoZ9u6kicJT7aYrhHZAdi6oUoLBkBrwa8h5RmQAmmr8dQ",
  "key19": "4Lrjghvee5CwrXegZvmckDj5LPezfyq3g81v95DtvifsQgVZamLY1HKgpeeFvGtrbXoXyhJ6uTEDdPVsGFhzSxXj",
  "key20": "4z5jHsd6mHbTTVHgp2tquTmjjMhMLhnd3QjTDM1FEdFETBEnpTtYNzo47YFV2883VNnKMMH5DRvgBpFNNDw7um9E",
  "key21": "56NtYjLQ7WG87mS9Rfk9hsPWiBmcz4pZRAgjFtZzi5eZZDQSKEmUAeDGZnXNabfAzz59GuDLeYgdRDZdoXfbSMAn",
  "key22": "2u5HUbTMuYaFZWhvzjdvTix4UeEWR8zkcm5TipTFGoctVDLLC2iVzkNYftmbDStB5jCkkr79Joj2gC75YqKCV2rj",
  "key23": "2nEQ6WFcJWuZRP3yGh8a6sEAyeXQoTrmfTy3eQgvFHYZKJW6CGEQ6VrpDQkmZNPwa75i6GD4rajEuxvgjgv28uEm",
  "key24": "4heJ6r3cHcqo36o5wibu7bWANT9NKKfvKdDqmpVYXQWV2pCkCQnucT4M6ei7cCnGxxcQC9ccoVm5FpQk3GqeoiYq",
  "key25": "akJRqA9Z5RYKCdfD1JvpoyAeMMxbsz2SkUFrSxgai8knFSaiNu9XineLm8XWW1TyF5YCF348ALQasMLkjQjYCxZ",
  "key26": "dR2MAW3cRTQcFANdHDWemPF1YjoobLCs3X5TBF2EFZFCpvLg8tVnqCm9Ts2Sgn2E3whhvM4DpRbEG5YW6heg8Ab",
  "key27": "46Lg1qfiZXnXV9aYB2TsGixTybz3TQSrm6nyPSQd3f4mhGjRMYFPpsn4sAFBjJsAX1Wr85sFwxqrKFaRzh3fcVey",
  "key28": "2rdY5WndNAogvzhzF5GVFT5tfd5nNAnFSAg4cd57PkAjhFsg6wKjt1JEVPLZ4Yo7WBMmp7ortcLZu4RH6nCMCFXU",
  "key29": "LbXcg4ULF1YrgBSo67HuGyZLZKQaBCDBVCzL43SZPZzjyivr9Vz1H4KHYEHEeYvhzASuSqA6SUW6zPzhWVernLH",
  "key30": "2QdZRvRERoDR1dUJb63TVyvpDTzzdLyc6EoyDWxQ1NdPpRgpWAMqMw4C8EoC8eqgQxLMPjjS7XLdihhZmRxbT5qv",
  "key31": "2oQ831LSQbLbWfgq2N8PDwRcr75myKvXkfNnFk4gMm9zcxJUXqmDrYtKcGfwT3N78zDrMSPf3H9UEdgYyxEVryua",
  "key32": "Ezud1yHZAdifqVeGERKzHGSCgGFwZinXgTHJ1n9Aq6WVTqq1oPTDQqfLnDtdBzAwn3f7ANpgea4cbzusqkLtoqK",
  "key33": "5gHehffXykdubXDohMdtkHXh5W8PQ5sorgRz1QmJ8U3RijYEsX9TjhqNgBeDsu6BcdFw3brV6PFXpxUwE34J99Bs",
  "key34": "2gy6cJE9LftTLLaJnAcpojxbQkqAy4o2MeHtnP1kaVztkgXev7hc1JChJewUVPEdWWgSEr2tso5Y86fs2nqvwc6X",
  "key35": "4SZGepAPyFUtNm83i8x2qiPc1YSgAu5HHcfzfGEC8aqkEc7VToQZdYXVn3CDrY52pLAfNghGv33j1wAVfWSfsr9f"
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
