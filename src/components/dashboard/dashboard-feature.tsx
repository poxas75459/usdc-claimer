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
    "fSLyZzyzfF8p5egPMHRFGBGbTSVXkkHzJxtgGaSUNnCnr4VYsQJQbS27R9LSiyCV67zq6xWssqLYVjyCGVZMEfz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SzqYmqGz6whkZghhWPj1DcwBzkSMAX7Ypaqp76zeKdSwRYjTMYuJGiHaLD4KS9m9PeX3LAbqfwt8VAJvxAqqGNh",
  "key1": "5HtAikbWSLVPThxUA3mVtGZTYGB1ZRrQER15gxjt1yUe6rkys6rwvM37QaZrPp7mTSyjyjrhVHUKB5Zojp4ZWkDr",
  "key2": "5PqSvGxLG61k4MQU5WDR88Jew7muefyB3q4irkuPJg7uKzKURsxEoCpLobTYb4hpvLfm8Skm1NQDDRSggcT32HJu",
  "key3": "YVpjuEzZwp29fXRrZSu7X26KeVv48BZq4KBnisj2NSY5KCJhPoBdPKUGM6so2JAdDJhnnxkmfLhWqLMR3PMS8Dm",
  "key4": "4Yeigqq9rDbiqSq1qLUhD6qfyitbFJhryS1pgqJFsLdWXBraFwei81nc9mp3PvZLPLwPRRWoi7q9rDkvGkTC4Fy7",
  "key5": "2cmRXwxsxRxCjgxGhgiUNrfKKHA74fYdKtoGYexSzw4tP6TgXmhorzwXbn9KtRbdWK1eGFz4Rc4UrAjQ41dqZgwm",
  "key6": "Umq5Rbd9jV3XVa8ZGytqRgvnEPS9WvVgRi3bogAshSWYvmFx1RZaPiryPCZ6ABCFwvD3vbTvDaydCg7dJBNNaC5",
  "key7": "4Sgf6SDFi1XAFNnWMAwuVdyCREaM5Agp9YXoJN63qhqdN67Ma9tHMNBveS8EYswUjb3M4MGLu3VMMDcbhQ3V2nKm",
  "key8": "4ddsjucpDcGMZHajvtgZGQJJ41d5hZDWrULEztyEizVeQRzU5Ajz9AUSUhphbHSYmJuqSKqgfVuyR6Vf3WfN2agx",
  "key9": "3pf9V3sXb78Ugut6DQsAf6KPACeJAnCuvpUwEfJ3AMoGVmZUnb3ocC2VEqHPf4H2JpQZVdsvGfkowN7tnFxuz2ce",
  "key10": "2pYaXf9fzXzpTdpsSenVK6xZ61i7wyGbcvELAr2jE5Wqk8K4YRhE9wzGBdHQq1TxPU4KHaDrtSMzQxcZktL9PgJc",
  "key11": "4zwaXVYmfRhXCT1iv2Jr54ptHRCYATaVf339eCTNft1uMzpTD2BeFCTPJvHwVE4a1otsJsZWWaSTYpUWLDx9iUhj",
  "key12": "28ik5bfrrfHFduwudPhjG6XWFHjL9LCaQj9Vzpe4Dn1JkALTmt3sSVMp94ko9UMkHdRnU6dLALcpQbP2MGY2snqX",
  "key13": "2GiLiu6UrUaswPh6iq6zgrNEGkzTbrEDxiHBD4WJGZDM3kqHNiKTuog8vmXV9KJCLMwkVJR6ThLaL5Brwrifgv8t",
  "key14": "4hnh5vG5LpRreP6Cq29wm7Qv9p1hCFt5m1sHyrQqdnv6nwpv7YBsPVv66jUPqDi3eiDFS37voVS4rc4cdZaSX1jr",
  "key15": "4DkMrSZNwiN9ATjcBgL2XvE3Mhom6SSSB1wRawoHZeQKamWac37yqAM2Qx8BjHpu4sFYSz1UNRzreL6xNTiwo4E1",
  "key16": "2jAAnJV99zhJ9ens852hGGL4UHg2WFLj9WMCAN3zsqdX5BoCeT1rRy1CLYQAsdytg835aq94HMNBNWU5PHBh5NaJ",
  "key17": "5wjrXdYUYPAvhuMFLBRiCgWSjf6bjdfkUDLe5JPvJ1jvCvn24VGhHZEhdmCvd86k67PrBvWHnvQon7Si3wfDh3eF",
  "key18": "3NhA56JL9voxQTkjCfrXuXu53kbyADTdUkwJW6cGi9HLCgWBeZfat59eeXuK8QY3raAzU8vd4fHypxpWY2R5hRxy",
  "key19": "Ra9EzxF1S59jWkkHEhQyfsu7ECVFZoirWUct8rfvpcCDTpD7FzFuVyzLLNMWr9G5pC8gLjKUqN6SVowN9zwCLkx",
  "key20": "A1tq1HoAFkJoCgtt7YnChPNSfzUgJgwE5bnjj7KKKY1qar2mNFifDb8PJccb9GdP1euf5EfobKqtEg6bMXvF15z",
  "key21": "4TjKXWYpLsZB5t8vmT6WKcyZMDBdQG5b4WnWxJTBm9XWCsxukyjkJUodoudRgvCGvz1WFwRfhxcBX1cAGEFrkMb5",
  "key22": "4gyxRQ3GDHidsjFiNK4AbjGNBg2sGMth8km2S4mUBP3VoRCchbVyH6gA5x3j8SUfBHXHSoAVWym4fRidmrJEgkj7",
  "key23": "2cNWqbf61vw8cUC5kLKpPmYgT6fkPTc5gRjKGDw38QyaZqmjyiYF7M948s2Z3wpYikYu3jygW2QLDL1wGVMtJoUG",
  "key24": "54s3f1fFRK6sLFJbqsLKPQKdimYPK83d3vmd8yRMEKyGzuGJxVyNNgM4nGMtLd7sDfeJ2Z69u56P4vPDwdh9Rb73",
  "key25": "3DDLf1NoKnbYKf2F8HTuKKgjJTaUMQ7u26qoda8jR1zzN5y12zPsoi41zwAF8TA3CzHaQU6i3127Q5p89k9nfMme",
  "key26": "2g88EQY5png2f8ZJ5gZQCv3A8m38kYSHfD5dN41uWn9iUkxmrV51vvrhtdZirpE93MyA1Ke2PSFXxejLpByU8vFB",
  "key27": "2a2GtSmUK2VJwQynB75MXVVriSaRB5pPgAeJCP5U6d2gVpEkDReU29mD4c4GLGUNuj1c4hd1Up5VMCP3Y8yyAd9b",
  "key28": "qbbK9orkt4ies1u8UYM83WegDrnc5WwBzAipsfLF5LfZgSuL7a1Mhm6TFnsDVcx8AMvdyfx6e26xkRsF5XR5ckR",
  "key29": "3uvAY72UfqJSwxZLgYFd3Cd5w7jjMgHjzoHeYH4nTwVHb527aVv5Ymkeu6nG5eno6BT3hgecgTzYZLnNpr57RVKg",
  "key30": "5jXcSbBjJMwokWwBau8Fi5WzCRg4fajGbkT9xePFRhcLB17E6JZQLUaRwQeygjNxFYe8ttXnWcNmmGt27ooQrQxM",
  "key31": "2AcVgsmFJXEz7dJDZxZTPTbV8iAj8KvocmGJyXYUMFG6AqJupbcUX1atV3vsSW6VcgT1G1EMQVLhjHBUtUFWdPAH",
  "key32": "4Vm1h99tkfwzDQoZHJp9hVJu3Yy9tppK7a5PdG8W1Xq72hq26p3tnavwXDfYC6JBfMpJH6T14U8BE2AvgNmoYV2W",
  "key33": "qifHiVuEpVGdqaqHq1fkofRy2PGv5ZFPdzjMSdbciKSj9K3VPCLzjWiKcVMLhJBLYhAzMzjwctZZvxr4Cqe9ZZg",
  "key34": "53BmcEfqFRMK9ijGHSDcFHrhib8LdtwifAP5ErnSh3aaDdETBEhjGj4C98AqQdGbVJTCrG37hPm4zFGCyCeRCn9f",
  "key35": "47nVPwZ2rvwLmvRzYZ71CJFHcSiL2Frj7HJudQLz5CccerTZq7irV2dgWuJ9QS5XRD8QqAUC22Wsv8cm9tLQQgaZ"
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
