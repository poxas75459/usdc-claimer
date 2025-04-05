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
    "DjYSnCkXL5KKmVoNc8uniVRyqBbBPC5iybx48MsFVVKYoL2dmSnSwMjihT45QkEvPxHULFWPpUjRVctqtngDvjp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5r9z6p3Ze4U86gjETiuyvmGnrY1bo8cMRo9qadwnf6hD2qghuRwf8aTzTSHbKt9jJVmEwL6FFwxCLMe67Xntkw1t",
  "key1": "hggiEv9BovWmTqahTncLSpLS6Y3DHmMyhhkY3gL4LN7pik47Jt3Fn9ZJDGfJqBKcDochNJ3yCKw6Zc5id472juh",
  "key2": "4u6EDjbYBpm5j4tiFuu9pVwEAr6Uv1XoCnJXmN1grgWcgZz8Kwiyp2hcz1ymdjUtEGnsVJ7v6xDrhZoqtDH2v3Bq",
  "key3": "3hKaupNhAwx4MJ2nASJanvB9ctrEvQKHhJq6N5iDyK1KTajo33ps8uZUQD5NGHN8Hraivf9gZhUHh5oKDXTFCEB8",
  "key4": "fC9SfGtRhtZHZgmi2cU2mqZUuutZz4uc31d7dNeQCiFMLtXCqABTdqrxe3vTfMFR3sU6eDAVFnLy8T6HSDfXDp5",
  "key5": "5vsb5rdD27yMP9sd4hMQRJD5d9R3x1zNoxnmdMePsoPh6DLuiEUj35nU1fgvuhC2dfVZMPqdHZXQvtvEyapz5hgX",
  "key6": "31awS12pChJXTohrRZSHLjbq86AUdwjdqWCTt2Premhvi9MZnqRLZVspzMuURAMHBij5DmeDrgARuu5PVm8KvKCi",
  "key7": "5ZFQiEb1LR5CgE1Mj9pze3ozRrjXFp9fSiVWLtn45Voyqadk4tD1L5HNt7SZqDe8ex36uVKvP6HLAJHdZdB54HEA",
  "key8": "5JLeUMyTtoNvko1Wku5JQzyCgfJuVFCr3nx2FPEtxKLg97YF2o7Bf1yQMv29RzawgH94s4A49QJYyUfFrmawhrCf",
  "key9": "45iMRqToFsxrfS9zi12ceuede38NRgoUoXbwg95xbTWTmVCEjaiMbWdM4TFvbkiVmqpwDydRJdDvXbwrgkwxha2T",
  "key10": "5kZXrckcPpS9GzTLooxv2DBEJ44yPogAP5NNHtwtnx6g6KyEmJ49UJjrFMieJmeKna3XmXDNiLBs7x1vpKFv2tGo",
  "key11": "2THiG4LYE1Mszv4nhjh6uefyfPoSkz6tAbpYW2x98hSa9BGvDUt33a8wVJ3R8EPSw1C3ToBDJuZweaxx6FVVjVaY",
  "key12": "3tRiFVngxRtvcrdQfeposD2tixkP12WPjDCiHxn3p7hWXLP3nd7bmPZVPx2yHWZZsi3TwU4K5mHGEcW9LYZHLttd",
  "key13": "qGqeU4nEQAC48STA5SDcLEoXDwttFwwht988V1JVvfjZKdSHM9aTtRfMVW8iWgWsvuGEprf4KZqvU4Z29PTngna",
  "key14": "4BVgrorCv1p7agMQwL58DyBAZ7Xn91FKRbFCZYAHjhypz3rKh5Dj4NKXPZtbaLACSV4mFbhM3Jn6noMzuAFNcjDN",
  "key15": "65b7TqjppkRRSxbn51fHiWe4QHrtDJKNJP29S4QAtokGNY3PezAKc68a3w8m7drquzGDcZFc3twpiLG1XURHfwwf",
  "key16": "4b2r5eeejwgEVoEubEs9rKMga9VcdsJSJCqcHAqttAwb97zt9J16CwMdKUvShJsDFxqUiK9F9jDnX7mB3tyFNRGm",
  "key17": "2SdXsTpZinsheaZcy2xC2VMbhiP41qX9nx75oJGxS6Tg3huEGmjXEnP5xNfWxuYTK8eC9PDqAw8ayKJecNjwdqGR",
  "key18": "jFJEFqnCFJoM21gZG8yXj7RV5ruJdQ8onKKBdSZWSdC93h3XqiAqQu6Lv1XWur1RbxBzfKn3RmCMh2a3ryBZW9N",
  "key19": "55Je2raUG42McXc8pQqy2NP3MPBCtwmWmu6vJUyBLMsudFk7udjX6QT8d6MU1Rd22byyLhuC83c9oxPXA7JS7g1Q",
  "key20": "4JWXbvZpm4vkHN6wnDQtEiFuVdXTgb49Dxw3X76dM9Tebphb3xVeUCL42F1dD1BJb8KddTzzmMKRq49inqkKnLQy",
  "key21": "sd91SYHFgsnbrej4aEmiztEdsR8YgKHihwR8Jtu7Fssx1F4xvXtR8Mef9QH5i7YL7EmNnnvcy2vt2F5zLY1SThQ",
  "key22": "5jQ3Shawrr1xHyAK9ZgdGQujCdN5xX9eVe41n41azeiFFb2nYe33Y8Nqjpf3WCevDi8CbYhDKeJGAUyR4sn38CRG",
  "key23": "4sh3hvZG1Bsrwyzo2V2ig9aQ7ur4ZZTBB8m5ZfTey6YzNHV24sdGTb5ybprcg7iSb4qi9NgT2pzSHq2BiA5CXX5W",
  "key24": "67mTnBRDgxjbzwoVJfrQNYxSJwjkagVknNYnc1B6eezUZrRLTsMPnek4U6EkVuSknAA7VcRCc9qZiUByujvQAtDp",
  "key25": "45P6dB2ApH4xzegesCioLGh2hMkX9oT7JeWjZ1SwCPdxjmkxoUg9vZfJHfeNYBsxfCBm9aMxrH7UejEhMjyPqyXv",
  "key26": "2eMyiXj74vqU9fHcGJnFpyGrfCvyKXWEyAnkVMkZq3EtRTAXaNnNYebfVZLRfCQmhbapM3r6qfma8NyJEPkPSDkE",
  "key27": "5k7dGCavh2ohhvNSWSCzyap15umGpNAV2yW5bP5QiWFnaf8p5AzYg1UovPhp8guVmGv5UipoYvDmH7hVWgPJQ4Ae",
  "key28": "2CE4MGZPVdUZ8TafREgeRnyTYYt7gjg3LpGXnFY67SkWBkTsfoC98vYgNPNAvu13LwwaQgvwSYM8fmrNMJ5dAFNm",
  "key29": "2YMLTqWckb3Hy1cdSrupib9sS2pYDfgdf8wd9WJzSyk2faKRfpoB7XjCjmACsmjRWEzWyT7yVf7Hd86szMs5Vm2Y",
  "key30": "tmuDPNmNmNfid383LDb8jY6xmLzVXFrYEFbkynU2AFSRYu3vkcXKhdtQodRU4CzYkx8JHCxxTEgNJGam8KUSDMC",
  "key31": "3BQKMYeBvRvCsVkcVqT3386ehSoDvsuqWYadwHvWwRtPjuZw6RMqPT3C5YQjJKdYsg94MUN6CzM3QQCwULcx3St7",
  "key32": "FMCe1zPsfuxHKCMVi41ZEwZedXzPFuspTtLGvqcdh6wYDo5Zpva1nf1QPL1d7CYsrQ4vEGjubnAoBxDtFwysws6",
  "key33": "4rNNfitUR9ZCD5YVzNXnMo3oEGMDdptehKSVYdau7UwnFooHft5EDQRm3RG4AqhkUaDe9MXJ3MTuMnc5Y9hP9nv7",
  "key34": "21RaTQGadocuMoQPqtkye3pyUKA9tWcM1E98hin6b9fVsUTsMEPzWHit2USE11eFWh2euiCK3AuCTuGc8EMiB52o",
  "key35": "r9XwSFHTBxkRxfkQPLxLxS7PiyBmL1iyyWwQdswuADqH6sX78v23KVb7F1QGTCHs7Ei4tb5KZ5bk2exo237BvAW",
  "key36": "2SWi7V7YhuZWBPqP8C5SyYyXjztojAojEyGNfqvH9evH6XeL7G9FpWEuYiuGoCBNzVAv3RzRMNrMFEm3cRNRS9wm",
  "key37": "3MKpL7kLEt2iipNdKmn2dYUS2hfpqJC8MwNw658gta13iSf7AStK9Zy77i65yWQyR6EAGUuUFiQc25LBsc2Dayk4",
  "key38": "5LKQz2iTh96x1A2q5qRVWEuf263RmRepg2tgr1n71Lp2Toebzbo8DJhnwDobXhuhhxPB3go5B9Ds1WpTFeREVZRF",
  "key39": "NzUUeqSiUzBWzaoMo9ckHqcZhLQZFdzE1ppxbnvu9MfiYJtu7fb1xGsbKQucNZ8N7hbMH37uArMfEz4kDLR1PnN",
  "key40": "4TfgfacSKPquBMRyTa2aTeT36Gqxey2Saj7xGC1oz1FSECQpdzbxzQUScCekrrFp2fGDnzCS7mShoSqNYuJdtMJE",
  "key41": "3q4G5aQqMQoM8WBDG8PXxznn1LvtZfrfYTCjxkn2gansmaHXh4hYw7J7qtHcJWtF1uwF9QnLjyzFDqZvJi7FLxcS",
  "key42": "3TkLHvhjsZRpa5gNaDvGvGLRQHxMCC2Re5EQvWAUg7XszhWoEdUek9UKfiG8NZ8bQzetKisYDJMQc6u1HVGptsGS"
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
