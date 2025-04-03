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
    "4mTvo6LXsAsYxVDJMz74zrbQpUfGcFvYLYcTtSpKkqdMU8vdjRQMz41YD2zMta61knHfnzxbMJcAdAq2baz8qUT3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xtmiCYFnKpJL9BLxgqSvJK9FByW7vh2zDVnLQV3S5NTb5fYFTLfRJXNEScFpCXPwNhKAMnLb5GGVns8yqfbLPev",
  "key1": "2owjzBA48hs6yUuovKczgGJVFQAvrWbZrVBvBdMFVVPWWYiwPyERP5mU1WH3j6tXco4G9RfCryeK9eSF2sS8PhjF",
  "key2": "2e3u1v6MVniqUA43ZvN3riU4wCXGBVv8NsHYrp47jptAM7LaqeZTiHVaBn7SvXeZfjYhR9RFPzsk2vGGurNSB7LF",
  "key3": "9dCPDr3nevBe32Y3ykBB9CJuZtBS3Twj6y55AZmrpxtXKs3ji5BnZm28ZrazZh6e9UdC5hjHbJ2LsdXqhNqE1Qm",
  "key4": "5uJw8YUfzf4CQQyE8UnZTrrqEexRxe29AoZywNgSaT6iv83tCUhpYVg2HB9NJQd97GLFRRt5WGk7zndrj2HLLg2Q",
  "key5": "56pT1sREt2YtbLkL8FCtJRUmUSi23ZQfpfA9kznVkbJi83N56F8w5AatQLipJQVsSdRonoRwHcKLejiZuAUQvWbZ",
  "key6": "4yMjaDQ1GHNHxcGPwYuEDdzRKUS3hvhprG244fYbHTZc3koE8mpGaNWzbGRE6xXQ49gAvTjUC6xuVRn6yCJ5yzd4",
  "key7": "4bM8SWN5sZRVZPkZP7TZeiYtCJPAsLcFt1r8dxWBzvaygD4uCxBgEo71E3JerX7cmncSjLMjRJUscyVZKPoH2qym",
  "key8": "5RgL965uCVFy4A18hjRzSLBUBsBzeNbzDxAN53MEL6z3SARGUQUHiBzrrPHVfKJaXtmTQ6y3Ham6qGYQRWoZVS3t",
  "key9": "eRWKxY7ceCx4o3khYe3u5ZWkKykbTg7Ny4ne3WnE3XLeHHu7daoWoovgwSxkEWb8X5uMJFSbTQHc8JVPrAikxSM",
  "key10": "5na7e21d7PZQvvK7zKUgT78cB3E8XpUF3Z1PrbWaxFkGWCxLCwMHvhv92eSqftrTqPWtmNqXCmmGE3RMw3XSHPXM",
  "key11": "4BM9MmdshMvjwPtPkrzM5kpaWv1N5d6TBSgRYYqJ6oUkx2Yp8wCYZkKr2sPLeDg8BpFLBAcMUd694iG3VWuZ9Kk",
  "key12": "3PHsebiKDgeM62Mn8Vk4v9ZDUVtEukgQtMcbPdJjrZdZmFkhhYNDJmDoht6WES7uLvBoNdEYgjwGtuqpxxpoPStA",
  "key13": "8TggHAYmZTudncpmhhtkh2rvZyvsYmZff9dYpzBZaKss3TywVrK6NRbbJ1eUWyBzxWSjh53qSXQaz5REo5CDn3M",
  "key14": "aZDWNaTr5J3WHzVk8NxqLqikXh7SgJs2qJaoSYwKk3aMdv6CSr74bJ45xHxpLTLnm6mpGoLMgMP6KGw18U3GWtW",
  "key15": "42X48jcCDwbpf3wpukN82v9T5nkqypc7CEPPL3vngup7tkrZxXLsHpRTwkaRVT3ievAGPWwEvbwUWBzWARRVK4CV",
  "key16": "2vYCTnTXPL2FxFnNag5ZXtPDYuwNmgMHaQn12JRouJPuTDGVjaZt3uKq4L9ejbCg1pY63aFsYinSMEGLq8wLDAVt",
  "key17": "3THdh1cGLoXPSyZSjcAiQXvaWn81s5Biz1aooQ2M9Vjf47hwe9w9zDN7Vq9W5PPWMhLFGq8FV48ZJeQyhZKqueZX",
  "key18": "3KfYnjqtbce39xeoKFnrtPuRKh3xC9kKUehtRtyUUfQfEh1vKe7QGCkK2HAjh213U4wQL3zNLSM3gHWL2oa6Bbk9",
  "key19": "9XKjo9c182R6YxhCxJerZNsYk5kDGC79FPV3yo8tQea1kwDEokukD1xCzv4y7kWUCfee9uYsLE72KbmSgnFcKLC",
  "key20": "FkB1bM8yqqxB4C8hXkxN49XYeaiQTztKjL8RQe5Lhzdmazxanjrn6dFuTw3LkJpmcmv3odGUuDHX6bs2NWHKLpr",
  "key21": "33a6gpzhCnGHyR2Z2sGn4BR7KEz6V3p1DLXoEpjLh6KbqTQYUpnVeYK9vYQ1iTVyGtVL8H1jmpaw7f61boMARsRY",
  "key22": "AaN96tA2SuLKVnsF44Vq27sTVVMEpapMdDuvptBsAd5dYfYX3At6hTH59rzQy4QHy44h1Kyf9pyBdPDfPaCbw4g",
  "key23": "y6dJUPVZ6mb7DcsCYMriwap8NBfXi79eAnqAb3uz7Zvh7TaacRCyJwTou6wJRtUcuJ3L7U6oinsvj31YxqBLcJi",
  "key24": "572amnqfNAYmvasaaPxFSzbDB1GaiCFkmER5Ymp3atNqiSyBHxNoZrPZtDDxgD2mdYspNvhJucQbSLdpvncLxeCi",
  "key25": "5ry8YEQHw86VGoNUmSnNQKSps2Y2k6rDDbLEiCjSYGrMS8MFvUCuCrx83QtPQe5YgX2JPkQAUGjSN7QnC5NYF2XK",
  "key26": "2bp7gAmeAzvsQKUiLJtZGTrJ77yy16BXLACxHZHpnmLz41uy4L4zQPcw6v18xetR3o6Y1a9FMmu2o9juk8aQYbBS",
  "key27": "5JDftnUXRDYqikoKTSte4oGa6mZQACjJFgMLNcAvKML9qi4JTg7nZyNpekvp9kXP7VQf1WqRpfYiyjmRqT5xe5XE",
  "key28": "4vF1B2jnP4deCp861dvWH692wLdTDakPGHA6Vw7zzkya4cgefE1QqYaiedXQ75TQaZRjSqNawhhju4n9iu3S58nV",
  "key29": "3y9yANmbeG9GjvqazRDT1BhABnChc1q1CGp3M146qrd9xmoTsBqNjLsQ3CrJaGyYKoXZtDkktZ6XEZQ8AVJeHBWY",
  "key30": "5ozcm2PbDHgzgFnmLEhR7zsoswoDMwSYAEgjD6GtCGdJr76MwP62uwCzBWVyWQdUHy9oP2sPrCLAtAyTgco9o1cs",
  "key31": "24s5k91J7URshVW9oJQMLb2MqCgGEFo79r8y2K77XHnXry1asyGi3iGUttD29kLNaqV7iBGvEeHKnq649wAyHnh7",
  "key32": "4QdGxVVAyRP6GeUs1CZ7HddFCQy4V7EYShB9U8QboJpHHmTHMk9ph5UCKeR3Xv7VyYArDna3nigEeEZsRyyi7YeH",
  "key33": "32AwwoA3SRUWzBRgjmXRHAtYZigUqnZ6covpHmPgWPEbVLBXWjpvwziVeDeyGoBYCoH5bk6dkUEfRDzk7LuRpkqh",
  "key34": "2mqoNtzx8ANf2EcRjiVNkbjNGNtcze8n2CJaCecc9Rsx8hSyeqR1v1qLTafM9zsJqESXbvUhg2VmH7w7YrRejG7q",
  "key35": "3CbFLkvrFGqatSzxUq2PKes31KstC7YaV4PCgkhmJu7atdDhEsfFUh4ngMDYVavxcqoEw9oA6H1n4X1oen47V4zG",
  "key36": "29Jz8mYoD1fa9RWCpD6dTAgirjTWyR7v3HTimyZRnG7ToRnBCSTgdtDF9qhjC1iasUe6mDdNZbHUT1npjCgqpPJP",
  "key37": "2fYGgeHs7YYStTsDsuv7pWTvxm41E4mYYoCw8H1GH3x443H4gXfTWSP4V8civwB7vWx7thyZK4RT2se6uDsMTHPH",
  "key38": "3i6Dy93TUeBsCTWWG3UUsJdQYhqHuXLqhJujwaRU5mgHPAo7kocpdSkQJ2xHmhgDtTFCYnDELJBEPCUZ59k4idE8",
  "key39": "WSq49eQfKAPRNc3csZx3L71vGCp1cVPcMa6rANA8K9DpvegixSFSjbhi8a4qc75XiK4uXr4oxm4ZxMKFwZK29r4",
  "key40": "5v8wjMgpeMrTXqoaa99wnHzgsLKvAzD6XqmHJ6Fb2JF9oi5rvZXEBRScKQtJnrQNfk2mCkpQKTtRukFEXpeHkUuW",
  "key41": "2gaUKTM7EJJnnJQBUjvpVeExfiq2Fh5yMJPY589AJGUZ2G6jX5REKjWuxMt1Xs42AieukETLxWu93gpCPopV8goB",
  "key42": "4qbtCc1Ei8XciytnhxXvjM7NQeFvPFUdvz4NhwGGP27edp4wruHsa5YsfahfKSktbitZrDHqsRQPUxFNaiJs7tNy",
  "key43": "3bMrtT8Ed2yP8BtuL7FcEJ7GHFbySDLYYCcKRJDUYnEDy484TJVCB8pWsVWxnqiLvaEUxsWDVve1coJd7vgF1K2w",
  "key44": "2Nba9sXYZ6h6aakqF94fqKR3y4kYkKsbepTdCovQ16ATjJZmUJ9t8azTYS94dfTSS3ufzBNaFbwS7pQH63f5VF9X",
  "key45": "3e5V18ZrGEXyVUeghKqhYXfV1PQdQTzUqBQUmLRrtCkKJsbV72qeaCi479xDYX5QJz6P52jS96k59JQNTbHU7XyZ",
  "key46": "2DRcTE5aJYKXV6eCHMGP2fkvP199NFPp6X7M6MpxErh8QiHHUTcEeXYAdj119Z5DxvRmwfXEFfB7KYSP5Bt54EzW",
  "key47": "5tAcU71bqK5ZaAyELwddUURTKdAQEjqyVnHhrRAUFM1rn8yYp6B5roD6DNZYZgs63VWkGjy1b91z8oXpbKaB6CaN",
  "key48": "VTHL6gkDhE1X4kC77TKpJ24WYRC6rzKNDpkrJ62nU5yeMPa3BntDsJ9Cx2Dxjg9Apdh2UZTt1YVyxM3NJYzpXqT"
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
