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
    "2sYgLszfbD81ae6t8KhvF6rDx8CEAU17fXa3YRqJpjkiJy8jS6aGu1oJigErALkijTFjxbVRWEZv2zrWc8KZKpSB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2XtZUG8GikEN3L6g3LjiVcPb8vhFxZy2eXit9C5FjEQpMYPghfy42TCm6mVQvStVQjaHFSiHGUQcS7gpywwfSVtb",
  "key1": "2SJKk4V8y4s75WL6bNUGM4mfb5oJQDF5vUdVrZ4JvLE7pznQuWCgVzd514xrkneDjkdZ7yzUJzLVLvKZFCWKna7B",
  "key2": "4aD9bsNHWuyHM3QhmRMXpd6vMEEKdthfQejUEmTAZhHMPDnvguLzxmxJiafFB7oTzmqsKqztjnevn8XGyhsRGjQL",
  "key3": "5v4JwqSbLXtXzCixBAXJCQW1pnwmz5wQJJ3XhUhHDc2xwU2TuB6Hj68322iEyRgMaiXChWqocHrBcBNtGP3szB88",
  "key4": "214TADJiseBWqUyf26ybzv998BoJSUKSfBD8X88amtxE66WWUmBGJHMGMbKF2YEfNSG4V5orwXBoF6QVVK6uv5RT",
  "key5": "5gLDTLX2rd1JhSpvF2UNjZ1LY6ayFXfuBFgdFNHyGYPZr8767wnvMU7musiFn1XnxbQGfyYM8KtTragzj79nEPfq",
  "key6": "4CE3AxzV7rgX6h3auH4XNoxR3cfZofyJLjWQTs383umAF5yeLSd64fBU9kWPwDZiZoeW2thz5m5DkW3R1AHBZjse",
  "key7": "281P7WQeRdaqVRs4379GAPrLyPdPwv2SoZLtoPKiHvArEHL5mj9cMHq1EcNMRxDC9LAvScEFUWGJrfTnVfzv3L6k",
  "key8": "tK8EQBginx7DzxJyVJ8RUjnXTZLTkU49qGP5yYF3YZpPYZ3nyQytPBQu55nvUyQFZbhciDtSGKWkyx7Uoeg1LJi",
  "key9": "BEf31V7c57agpSCfEE96PLw6o6PS4LdMS1GwaVf3pHd9okHigP4Zm9gywUQv8sXDb2JmZe4JLqxVpgpWtdW29h6",
  "key10": "YZ4qUU21xZo8Egpk9WDiBnVb8ZQ1L3PWjqc5WnFXB78foxJbEQgZbY68SWTJq6fCN9QwpduBponWRPLbjswyamX",
  "key11": "5DjAHntRXftPPjqLAAuKR6jzeuU5qGU7zLNeBFvWAg2Pi72hPjTGTCnpk49W52UaCxNNpmNDnq6MTenw2pc2TWeM",
  "key12": "2nwdL7D3S5i9gjbRMENCbWtJAwUdcfS7qxuM8CSPFdzTdZB4SyEVRyAa8E6docDAY3qArbgoMfY9bfUY8UMoiyev",
  "key13": "4qSwYrfaYZbw2bQVPyJ9azYYMrjJnZpDGv3Gf1H37mrEYDqDAGRke58RhGjWRXEVMnfZdGxNFKSgSTTyu8NxHR8j",
  "key14": "2YMvmCpWrVBKE4LQeqUCD64zxiyNp6vUNqN59SLcmn6eqthNW6oc4rt9EjHFCUuhanfHgH6DRhxH2fvRs4ozH413",
  "key15": "4ooo2fzaiva8ZuFzFBV98dSD8wJ3pPphKRFUeVTSnopKf3Q41Th9pf6zmWXvLjB9DM1FHaRZrPAXTKchThvCbcUE",
  "key16": "VL6z2Vi1H3mMyo4HoiZpcaAA6HEWWbM9mDhjBapP4UMAxQZXbrZ69ffMLsAc7ZRW1riWoGzn3jtV2yfcaXVSR7U",
  "key17": "3uVKZS6umbwhpec16isfksLR5swsXTQtgt1kRXQutbf4LoSjTZW3Z1HeBBQeHRy8x4QxSf2aM9dSPRXcpwxzos6x",
  "key18": "2AbmZahBVHptGvnYSgxpKi8viwpv35AC6NtTSFHohmcEcziocAUY35sMf5GeVwx1oYcw8xY6Ji9BJHMnt77KAafg",
  "key19": "5vryamiow7X2VUznZkztv2Utr1WakznhxT7kNRcE2LMYkp577mQMCFjNfWkA3BVjBQAL1UbeqK9NdjYtfZ4bq9jg",
  "key20": "pA49XucUtg6mvQCXbk2yDrf5vYbU4T1TCMiTWgb2LvaW4FaBC9eCj6ssajfh1dN8RcJaPmKFRUZJfcEvgYJiMyU",
  "key21": "5Fdwp5BFnBHowsFeCNBTMHstDi2fqRt3nmq4T8JYqDT6PS8fwgYnCoN3pZiXHDU4TosYUPV3tSVvz1fBUAzvbPyu",
  "key22": "2W1kzEMCevfJ35H964cPk8MZLB9VJHREcdAfPcc85sEUH3q7dAMufzwcSXRF8NyUYShJoBosnncbfnVoLHR8mUSx",
  "key23": "bdAzR3uxP4GxTt5qfYsxBUnfJCbBqzrRo1bU4XQLVyXsgevn1fdBUXcKHvvwbRUHWxBZ7HmwRpB55xSCjL1yVcF",
  "key24": "3QeddCYu8yQn9b9qxp9HZzQi5nnLywnBzxVT28Mu5e2DVCGxG3qzpZDFFjNcpk3qC8ysT3tyvsh6dwQx17SefQjf",
  "key25": "2pXBNwKuA9c2CXtgypMaczFChpZyuFg2cQeJfZGguPv8zt7TSRt6f6JZAC9CAqjqs1MyqYU3H3VgWMYzgZVfWM9",
  "key26": "58kZRj3DLGNnHZNBCoSrTNsEY6NviAQnh8fjGKmoArzbys43XDX9yvUoexS76EsNfmE5L3mkb5uSZjHk3pw8Tjt9",
  "key27": "49FCTKrxozTXEtVGzJFBfGUjk6PzZF5MLv4h4mHviVynWE7Vamt7FxF81PYqxWKyyLjcLHurpUScTbZCf19mECZX",
  "key28": "3ytuQUyVrD6P6Gt94q4Vv5BxQ1QC5exGjRhWhHw3Romr5hMweAuEsrp8AkKAPGLdCyjuQvscXZL99NmWkrnYbU7P",
  "key29": "5eYQ6Qc5oJbCZ38Z1SAKESc7BdQJPhv5SHphfNAsbXFobjQcUxAmxXRQWnLYvTSVCg3MEcZRJfFwDbULCLyMaYYK",
  "key30": "nuvB3AdYsokLv48KPvaujmfS958cSNuZi8CEDZZCMxiEqXdwD4FMpDmWPwDoXRgB6YcSZdPe81Zckg9AdhsK95e",
  "key31": "5JJ1RT53nVGU4LSMRFK9CrMUEzhPgmZQJ4hGPjgFGYgEZFPs1Zojc8irAKsvxo12g43u4euLPerfVoBXmbUPqN1A",
  "key32": "5UemA8N5dB9LtixA5JEFVQkL6Y1BuhiFy1cpGekwsph8CFbSnD1jRiGxN3r51AnKomd9SgSsPAaqUrfRQUKk9gxX",
  "key33": "5A6frmvHGFkp4md5X9Rjzk1Zg3tiW6xj2L9Cw2Mdu3ECJuhc7yE1JxDKL4wpqiazkC1kcnTbVEqyiFK1PRtnPFZo",
  "key34": "5h1JTwYSeUnvFpd3zvGJNArUhZbnQ5btA1JV4QEMi5xNKzy49jzdpYKabKDCXgksupixm5fSivesA7FNyrcapdkY"
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
