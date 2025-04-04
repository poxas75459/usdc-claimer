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
    "5bNoop3dUMwg1nUTCzPPYgSEN1bR6aWfwNauRaXFYBP1abuZ3vBPDLALiNwwfdnLgR4AMS3wd1xsic1nZU3FWYNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4MnAzQZ7PBZuR1Yav4cMQcNyrmARR2HtFxfM9B8UVtVWRCsfneNC2GhdVyTrk5ndWZttqLUQEuZ23Ff3vVFHeZhx",
  "key1": "3BhrHjqqV1ducijemjeetKab5GKohW2K6MJqUApCwM6zgCcKzjNRg8yyHwve9g7TKVVhun7WvtLgnwYLih8Q93wm",
  "key2": "49Mc8CY9RrCsB6P2YtDdYXLGSeprqpQVEB25qVi3jnNwt3dcfnUPU6M4Q9ukYUt63Kbu197h7DFsmRbF3qJUCsHs",
  "key3": "2fjBJQthWfVZ5yxupmzpxVedCAUsReXpL2EQaez1fhggeBoZYpxSnYz5BSyKV7tzVqYWxTzA5hGEiT7pHsDKQzQE",
  "key4": "5Wd4baXJwYkoAa65oziQJhKPWTUnuZ5XiPnggYSTtyCTunRpgwZ4JcMLfB8poJXjY4FNxNWdoU1kytJqf2zBTFBM",
  "key5": "2bYy8EU5znaNjCFGTssw1QNZone3wLEXY4SiNvWhcVSwMFpgQnomUEKpaa1fVGPfHhJn7yXLVXYKHQgM3oMQhSRy",
  "key6": "4TNL2MXXiCmhkBdZinqJhKsChzH7fpx7ePibuu5GFS2a2sHjdDAFx2xyh8a1Nhny5HnxiFp7CZB3Di3jXQY6zDnh",
  "key7": "6BaTFKcVSxXwouW69whiRAcyjCaCH1qYkGu7bGy1butSeriJQbSp5LxCojtsox8A3pEMvb13b2Kwsrg2zUg75CL",
  "key8": "4UQC6icBXhVTLaPvDyYCMZpR9mfwhQWoDYeXQXTNbaURXkMvV8tDXNZFBtnxpo7UEbZcWt7nAjC8JNLzkt7m6Y1G",
  "key9": "4Ms32hPFtFt8dJALJahMhMdNfhzLFgaqvbjE9gVBF9pi6XocReTCMyiEwWh5YJcyuL8D2CM2f4RsbmYDgoz1Ldz6",
  "key10": "2rHo6kLB3fFMhCe4DRCpzBX5JVAX3xu94xEsexaFhezdHYHBi9oSPddTzmwYJYuJfDZbGtv6Ptbhtr2dmecwgPC7",
  "key11": "PPw3L1r9Zv8Sdqe81Sekfq7oYm5osD98NLRkYjB8vXxCaXKSsBEeJDdw3XvNsAoSVcS7fPsU4iBrQn7Nyt3Vwg9",
  "key12": "xLRKhm517uYA8oAbVZ6aPRxSyDo2rGHBhsMuxYRbcLTuoiZUaCymGKeCxD7XUkdmkxS5GszkbmGX52XVj5MfRTB",
  "key13": "5nRjJmLHxmra7M4aS4R5i3irpweubPf7sAHrF6UgiXaD4C8sVJP6HTzUQ7TL76bshkoQ4MdfhAEfTigJh9RDcbJy",
  "key14": "uTpdaRxFcA1tCX4e4uyKN6DzLimoMgTCKip7J4Bw6Dqe1ZQVps1Jx4EeopYnVkhBZZKMTqZCBYf71epmMGcieNR",
  "key15": "57ACwXgosp9e3LV8YvdFhFH5YB9xQgTQBdwTx85SdPibX8gjrVDnyFrSud5PYUQNx3x9Ad1FubA4RSZAFisi9h5u",
  "key16": "mvdHToJeepWW8SaHys7qk5KUm3F8DvVvmBnzsoNHigroqHJjRE6B6QKX2hxbpvpMN4TYnuKYZPaShYYsXZmq1Qn",
  "key17": "2J25qNzBzwGDTB3nnZLao5DRMxSstatJqE2UsdVFD6M1eqzT4X98AtzPd1Ki5CsXqR22GDXF3Cu7wKbw8W44VqyB",
  "key18": "5De29xuWCCfy9B9ygqNnf3mxFG747NUP2Vb8TpCYvM6jVG8CQYw4dswkKbWhSpmWA9vR2h5227yX7yK5N55wvs23",
  "key19": "qBvvPQv4WcY6YwVSbJ6er3NXZDNyeDcJjvBw7WCdEjtyX1XHtvjARxwvLrmiiwf1wN2kk9TdKWCqKEiZ32ihsNb",
  "key20": "5WB8rxLzvaqo3QPDUdM8NgAvE9fabbpK5PqtdzBtCmJKuAMP97j35up48RWAoRjLmAxnaQrmUAZnJxw16LxsSmfE",
  "key21": "3bRFHYGVzAvBDULMBcwNPw6vM55RGFaJpsGLSDxDJanJa6erxhWpj5X7A9AeJneGumAL8jpNKJs6TGbxJkaJvsax",
  "key22": "4NjFbvSy6qfws7c5aNuGKrQcQAzcH7gUyU8xKzVwr9GdD8rbgawYXeuLdGLfBSuMpUq5SLh9TYvFvaWGXTehiRNd",
  "key23": "4qFwqD3bNGmxfvVmQpjFrq14zyBFgQmrEHvxnmEGpJCSH4ho3Yf1FKnPE3KK9RsA9XrwwBuNk7r48jMpS1EwYqh6",
  "key24": "5m57rpsntowmWMdGUKigjrACuLcpHgmjDoTi4ZMpQCSFDfJwLHvPUA6UMEGC9kCVxzwyeKWz11C1vA1AAnjiCUy7",
  "key25": "4DyAXZouRfroGww2R6mrYWN4yDU7jGaGNoPZbRLAXbVPhtE6kRK3WkV1EeAwJY8rEt7QTPQuLL9igZdBGbxCGeak",
  "key26": "3f9R1pcyEbnybCwv1UrgJccKtTHhrqUVdziMBXEPbgMKU4XV34aEwx6ydXAaAirEaFK2JAPBVNMwKmdPLVQSdtAR",
  "key27": "VyQoT3519VFk58KyoKMo1rNNygUUyS3igkHyWMyjMxmM6v7a8JhKkjgoQd1HLq2GaW83awvbgxCW8sBBUG6ox69",
  "key28": "4AK9nfbgb6GpMv7y4HAbqPaYhpMrjcdenBmwKcZDb6ax8VDcrhGqq6aRaZsc3fAmZBLKN6RJKr72jKsAbqJn2RAP",
  "key29": "4u78uyRmRJJy7LxzWYtr7LJdAo7NwEuYEXM6tbmeuqR9jUaVQ2aHfD6P7NJHXQBFmvGJqcLPZr9Uk5zrGGbuegtF",
  "key30": "5FZFtNDjvM2em6eskvS7iL6GKk9WadNv6Taqd9stvwmE337rw4o6KE6c7Ht1xEUBXcFoAcqYYHUZ3wWr8HM9eMzX",
  "key31": "Ji38SKJ39MqcJBhZWSTgjLVdM2ycGJL1bvxNazCfiqSTgcFFhkVNpA4mkbeRNDvtr8yMmehKk5EapkTWpKN8665"
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
