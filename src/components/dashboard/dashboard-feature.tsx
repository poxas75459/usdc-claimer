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
    "3Y1pywVacckpxJCFSr2BfTsmc3koKvp9jRcx6Ln27KwPPJFez4eDdt6X8m1QNCriBhokCMPCosxtEyFwJpjKAzBq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ov3LnECg8YLae6wsWzyd6kqDENBN4BngW5X7V7fhFQzDwiVw5mwKo54x9Eev426GSPaT1z72PAof9tinEMFGVeR",
  "key1": "3a6PxYeLoW7m1sH9BSgcFhVUrgQRmxSrR44uoyZjTQrmdjr1XqP63aw7EfTJqX9VFNMauYhmTegy495z5Yec966F",
  "key2": "KEDFEXXGiqte1rejJ2WMFBYfAcXjD6hcBgH6ZVeZa6Ar7mddKjTrhfHQQQfDvPTG4oAwiHAVS5VGcEVCuCyDgSy",
  "key3": "io61PPcaLSS7RXn9nEsdXyY2HEchbKLbSb7EsYnAkeL5wiX4iG1hbJC3E3BJNEXYx4QnUWgr2eq828Cgm65CyZH",
  "key4": "33iy5VYat1iGb4RFHR2wbS6MnjmmHyK8kMSqaTevVfDwsiuNArtUT3svRqbLUUR85bcyCdXZAtYhCcXDBJaQW2N7",
  "key5": "NFW5vDxzWWVY6VAyZ3S9EbJ9tKXoTEiZFMRtZTEu3Mi7fA6t1tLDUwsecnjxLBLKUf9jx4hF9wZD9mbKZnVaV7t",
  "key6": "3qhQh3qnQkex8m1LcoJvy92DqvfJf696Jhxj6GVXvcAdEj8VmH6mUtH8pkccgAsLw2FTNNWfeqGRRzA9BPeiZ8f1",
  "key7": "dPjvgSxRG2puqvp1zmg8RGG5cE3g97enmxud6s2pfFCpwWbFm2y2qmaPVFCMSefTMEGvh97jfSRTeTXLqsJJGH4",
  "key8": "5UypNG8uvPPEHNAtX3yZkHL1RuD2kq2cEhbASPjLUn6Ddfh7ZqoZwBhCGL6kET5YyHHPPPrrSwoouHPrtAsyX2KM",
  "key9": "7VFeHQoBEZMofYP14VFtJT9e3czGkqPLgkMEMuTYQZvm3Ng3iHJXzQ85yuW3qYfr94ZxLxwAa6fzxxyQsxdoJVa",
  "key10": "NRJd64yXuDz3NGXnzYkFkiLac1pvXN2MydWg1FE2XdvRL739pkuVsX1PYzF5YALcdcDi8qot1ZWgYJ5XdyW7aTz",
  "key11": "3zyUTWXQq6tQQJxBFyKTzzTYuz9RDvHrP5vJtQB9VTJSqKSFyRM6GSr4w2x5pwGM9y1CimuLvyAUVGCoLswXiknX",
  "key12": "3zN1jHaQUcpVixYELNiX69ycGUhQ8DjzMMdzx7RCXgF7FdoK52hNAiKMLTTuEanNzU5B1oLi8orbsSohCHxdFTmY",
  "key13": "2NLuZsTkJq2wBUJaHkKFhM81yWS7ZS9usYvB7pJijGfs9wYYAcJb9nkkF1F3EveZAr4Q1ci79xiaanPdnutusdGx",
  "key14": "58dpKuCRgi5YuCfLLGqtYtwqK2HZb3uR4gXG8y1Bv1SMfBktASRPg18oAvFb6z6UNcdXkFMM1XRQf9FVio71EHKo",
  "key15": "3Bp2YmK2phFiNFE4nvtowyg3GZ8AtQQkPNBfVenDnoL5iRYgkQ68jEVYgLt2GjsP1A9fTSvw8cMUTr6dwgRpoCmM",
  "key16": "5yrsMR9JwbhEEzmKjBa74dqJ1tydo2yePgr7D1mzMrAbzrRmGaXuxPY2EVpeKqkurwZNsixtKmq4RcbfoPRmywZG",
  "key17": "5b2oCk69HrSViPkwo7DHtVqMhkuMU5z6g1UxztC4HWMNQXy96EGK9P1mEBhwYtvF8uVAthLRjy5QXnYrKriPHmc",
  "key18": "4nv9wbEZhKGausV6Dj3tJKAAWhDx48Qn1aZv4iYBquVytcfzYvhi2C5sMVtNhfu9bWDqZUKpsoHJyPPj4FJE9fsb",
  "key19": "5MHqW9C5RasDg8LABb7GnjgDkSYwEMdZKNMVGbTd5pztwKy9ZZHuz7CRVzTqWgvRUGHnFEaaBAtXLXNqt8gDkqhB",
  "key20": "4yWNAqnY3EpWGd99XugHCzvwEvgQjytpBVeqFMpjsswj5mM5JuVyMkTsqKPnSG5nMLDJPjNXTPdtf9ZhvR645c8c",
  "key21": "2y5y6eAXLBMDLsiJakuo6AjhvARtXdo4hPBFkGrJ3rTC3RA7zRnpfZDtNSbbvc54pM8jjBMrVTG9YomvC9enyHrf",
  "key22": "2fvcM4o7YZM836K3xDyeRj64rtzHe7m8z4q3Rqkz6Fzzs8RSN1ez3KTYVVxFTBPmhmLPtxAQPMTzh3cecJz7K4o8",
  "key23": "2JMjbyy7XASYB4R9UDgCkAvkmud1RbpLffrrHdsK6dRFx9cWUZ2BPEKR74NLsQAxZ1o34oXaCA9jSJvusSDgSDKb",
  "key24": "2VgHEAGDB9ErZuTaqv1YEPAz4uzReuXKpyAF6eG49SEXo6bk5a8R21hX4EMbb2wzkPoJPk93kyZ1mo5KPPL6YaWd",
  "key25": "5HuZi3S3sKgvoCnD2wQKijfJkfm2bJXEh6dPd1goYqJkzyv1uAYmUrxbcYqgNw5sa5ZKV26MwsWBPCZxajpjpzWo",
  "key26": "eR4rLZh5ATg4VUCZn9ZUaNxizi69gB9Niyf6pJ48VCcc4XT8LHUzMKeyuD1qNy2jTZswwoqnQ9821wipS386cKP",
  "key27": "zcDALe9YyUiPT9ARuviemhBN3YnixLGzmgXYMJZ8oS2yzVK3cUpVk3m5jy5zswdbtaF3YUMBrrythYzpen39rbd",
  "key28": "3hGAZ3zbB1cc3SUhmwzo3dtjMZbzWbGxoMu6JiFsv1iZizyDSkERS9xTxuaFH5EkBYeypo9cZSSsvakmVfE68zMn",
  "key29": "4JnPhvo1uNZBedZv4g1rjTGFxcBhfzCqbAAMCbZqWoeyWQjZmXXJtRYV5y7PyvbDrtAZ34yy6DH2iCvzGTocspFa",
  "key30": "2ahM5gGWdYEPqofZSjW7bge1gCMD1DTbss2rEx552KAqPTTXd5LmfS3Cv38qb4GXwjMYyp9FWy9yHFhths9RZaBN",
  "key31": "4vcNzZNWmLpxairoGKwocqXtEnqpx7jkrH9HT9V3hBok5jMuRRQMyJ2dKg2HNuY4DBBC85YS4wdtAXvVbUbaWPX9",
  "key32": "4dshqmv3emAgcWtHnnJJ7PZD8RpCxcx8kHpWnDQNXApekGFa1k6EgehfCtf9wLhqX4TVWs6283son6bGwncFGiPi",
  "key33": "26hvYwHk45PDmdbYQupHpsKKoBMyQV6fyeWfxBqWNiduQB464XhW7MD1TS25nntPwJp17BKne88ijWxbEBWH3Dqe",
  "key34": "3igbqfvyVZbWDF8ziv4FeNGd25kWK5qETSJ5U5LYVaYTBHPRuw4FqKLy2cvGhWuWXsjfsdSvpaZYiYYn2HYGEaWp",
  "key35": "518D1W3cZZFF5Db6mGht47EWvoKf2shX5wmACRkqQzPmtvGJvVRcDTEbvguAzwRJgDGr8K9y3mCBeBEa8iqL4bEa",
  "key36": "2pa8g9ND5Cqp6KELL6JLRqir5JQVBLUxXEYvUYgcNNoPKeBc1nQJry6WrzWJJaiwzE9LdyXeHJAvZkkHqwHQunYQ",
  "key37": "5EZKfV83s9GVRLH6DDZghQfJDR9aFCAwkJ1JjSMWUXtzwRYnApQN2byk7eLxzhGZZ3vFMPjrabHCHXZgbafkuw6f",
  "key38": "fsjon4bpBMjs4PMXA1FMPPwemHFymyZkfR2iCDXrpKrcc5M6zJha1xVUPZwtea4NYp2tasPQFvBGxzdrbfVoiBr",
  "key39": "LTe9R7fWVRDYRyuhuQyWj9zh7rGi85LfGbxGcsvCBNdjTRYHH2CyWgKschr3KWzcHb3JC5e5ADeojmSqskcvMLu",
  "key40": "5zpXJK98DTJH4K2sd5afRwqnut9v98XQaeboy13oXoBqriWLuSeqkvAW5amNpACWMJNFaipm2HyQR6S7t3mGie37",
  "key41": "29YPFLPyogjMco4rD7QcW5v7sgPgXzwY8oTA796pbHYThQkE4mPBwQAM935wJwYX8pGNWSqJbdwaSYZybVWMZUq8"
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
