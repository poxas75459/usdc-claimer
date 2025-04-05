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
    "5xAtMxTzZuKtQQJ3znihrSbRoeGHB4v3TPb2RB8NDsidnuRshGf72fiUXhxez44tbsCibHTiYWdGBLswMBDqL2HU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "355WmepHfcjEHXcjTHZBsTTHibWk5acrLCHonNGxPNAEjpmgWu5zGLJrEtX1DshHBSydCq3Qt8GZZe98kPimnZc3",
  "key1": "wwraqfuiv57GbdkeZLDfxraJ6xNMScFU1bWq5a7skcomieHP9MnjrhmmeQfiy2CxJsD82PEKwFv4NkBAuek8BNm",
  "key2": "eLb7eScxuaW9XXhsjsSGArGg4aQsYmcSHG55SbD9Wcn8N4Gr429rWs3GDrRe4cKmJ9PG4NDqBa49Z7xr4EqqDvh",
  "key3": "GVTBGEFEXMCkoR6V2QNDDhtaSbc57v9B9nGA5jLEsPCouR5kgyKwtngvGhvDyB8KSvfbpenPn4tUB4aHi2X5fAc",
  "key4": "2sL48mdH2roxirE2tvJ2eeUtJBZ8XrTZN32zxWxwabxpiy4ytjE5Py8Nu6FwxcdcVLasJVxv9GjU56M1giXLqpXC",
  "key5": "VVj7yeR6yNdan4s63VqKiy5VwvMyFy7DVEDCtJ3bs1bCHKWsFVU12ThUgN7mYLLpjCxZ2DDY1zHP4EutnnFVD2B",
  "key6": "4VrcDTVV82dThGEeTeEThgcudd3edYJfUJSYG5VAbGXRtBjLNyGuiPNrVAu5P9k1vq2ZiVZkVMRHHqmP9eQVyJXi",
  "key7": "Jre1PkESNrd9LxbcXGwutQ9jBtj4mQ7xafPtoyzD3KcZKrMtmJHuY9goEqxb5fKUPNmUAvRgu5FzRnPoKxijAV1",
  "key8": "3FTmEo2gE726JFkdRxLEJEKCmkrBL2tUyVLqSJaRpPKWiUqx8P6PQJyTd5MpAPsXMfzarGAQeKrYsTARR5PEeo34",
  "key9": "4WFp6aXPc54BVm2Em9P3sHUAKdX9bHqRtv13FDAdLa63cVQx1cVbAN9T1a7rjLDnm8Gax455Ja6ueVcmDdeSckfK",
  "key10": "39dKykrK714UF9MwdDxQdNgTw3CPdYGxxrkjESi2S2aS7knHXE2S5j8E8gYgx2GtnPnXKziERLESVNLzxejWG7sk",
  "key11": "2kdVpoyRTC3S7UpjxFDddHVuL1jQv3FcAsmKJSo18Yhn5ZTDGFvNrKcnE4fN7KuMZjt3drkimgWVUZ6gCSV4vBL3",
  "key12": "5eNA3g1MLuCVJmSJyW3GRGZ51hFY3UxK2b5Fawanrj7d2hxvXma5WDaCShKWJZ4AUbXfFNm33tQjvfyDAeFnG4QA",
  "key13": "234LnrVUeSJvhyTRVdMi9M7KrtLh8rVD2N97e68TEGbFQ1Tn77Hoz1xe96N4d324SeyV2pXGXiUmVZdWSQ28qptu",
  "key14": "4QgtBjpMLSsQ5bHCqfVQT7xJ2CuSr4fRKLEJ36umq2P1u14UtJAiedy2t2ZKB5BnxxKsv2Pq8S6uW5a5aDPPhc8g",
  "key15": "ybjwBTRSUa6hg4oPVCB6iYEEFFyfCKiJVJyXuRbwTpwUFeALxB4ssVmBdWSDHw7n7BE6VG7ja55YwnVUkhYBgE2",
  "key16": "wTVprXfV9DjGjj5sSuVRYfxhn5Jfxd2zKipR3EuotbRtSv8VS6XK6d1SZr7zqYaY6eHEFixDa3V8iFHWgsT9dkF",
  "key17": "5t5QNAgqEAA2NcKFUE9DcC1DFbhUZaUbxThR8rYt9ndTcy7TgcM91P5c3HHcHJb9zCTCf4WHpRripQZds7LQEi4x",
  "key18": "NkKzAQg62FqBRz8nxPswTZfpZ7hhmEiePPgfeQFcbxVYWrrm9Un4GctiGttQkDEWcHeQJxNzo6pZb6NsbjbMBoJ",
  "key19": "AmhzVNFE4KqFMUYngMrwcvjWghinCiHTAFi641AXCV4pZkjNfDNc9pnVVUxUFKKTJsg2fvXaTT3QhLiqvyLnaNJ",
  "key20": "unEzFDpS7YcfjdKm17AZA4wbwCJ5uze94J7o9uWtaisC56KdyhhvBewkpJSd3qLddqatpz69h5ipjVoAkwkYftB",
  "key21": "GEe51Md2BvkjoUBiysmAJUwLyGeG42r2JPzAn9FTWvVCJ9LJNYX6nbbZMFYMNWi2v5ggWDynfStEHVGG7V53hqw",
  "key22": "22gJxkJ3AR94Bqq26kL3e1gb1AsN79hdEcGAZ4TRHW4xbpL1yP7e3B5kNSbvBoqsgLC99X46H5mCfroqk2bH1UtR",
  "key23": "5yjbincm42V2HT9YENxTGp22C5uw2e2grCz4a9eZV4rKR8oGL6czQ3bqBZav3fksk91wvhbG3H6Waicdh7rfSZDr",
  "key24": "5MDbsuorBKPB6YTtbo69Bg8GN38B4wZUqyWoZn26i7ijUhvAduFXXFkteGndNLipiLDbupLdMpTXmMXoEeu67E5B",
  "key25": "5iJ11MV8JJo9eeBR9JW2LzhSrUhJsjeXgtivVSt4b4HJ5K22Z1rBGZ9VV9nnevY4uSvnAfd5gJTsqk9Myre4b3ew",
  "key26": "3RUvoZcJL7jKn9La62ADbzcG4YWZAfcFbFbnP3cPugbYDX1w1FD271KT71fKu9nbWsVNiEvsLcn2he8YXGBktZM",
  "key27": "vw5eqqn2XGqsz7aSyCXTGVrxdeYXyN13QrBVMewcVaytXE27JGLQXqZUyUkjthSW2GTXKjEz5QeaoSQ5GiRtMbd",
  "key28": "3GGbQfaK46CY6XVVrTPj5KasrGm5BpwCYFPzszFQdXKVBMy8QnVxFVYMBVyEtPCowQXm3Bsofx4rXk3VBJ7Edt8T",
  "key29": "L1gHJYBtLhLcDg1cGiX4nWuLMuLwf4tdJJoxf7LR8zEbZtKnx6ZRGJHGV1N3pBpm1XrPFRKWzyG5F1xGbvyT8XL",
  "key30": "5bMN7mVvJFT1eRX6JjZE8yaWnvUBuEvEP63VSAwCw2hcRQpY4JdUHSsHBnMeSmfcuCxqJzFuyooZ9nmQNv6s4ygn",
  "key31": "5gSDirGWHtHeHpZ7SXb4BZCKx7i5PbykhRjzdQWf2Q2xwLoNc4wkH5snEMDjmYwk4TxeMSGayy62CenTHhRaBAEf",
  "key32": "pdg6XDpxzroC75TZczC1mbivTzs5jnsYnv9yuVoxDNtzhjHTMe5UiMGdN9D1WbFMhwao9T4Q3TpQNu5VLEVJeNy",
  "key33": "3LAb2e4EEYUnXgSuRsFhF6c36VDaaS9rirknHZhFBkfdBkPPW4F1Gd1Wo6rKgjAGMQdNXH3psGfcCh14eg6Xdc6k",
  "key34": "r4hnGdZqwkcf4TPwsRhDwShA4qjX44XsEXSarWzQm9htCqPvr9XA4A5XxNUPVxymMXmhJBtsfnL33D16mh64iRn",
  "key35": "341EPTRY2DJ3fEXHf6LcMqTf6UbRftaduCLSyVGNWxMDaSuQ36aMudGMriKeKWsUdQQBjkcHmefKeCHf2TrYVeUh",
  "key36": "5Yb5xM2epWxifQhC4NkU9c5M4YVeSkRXPaj4m1n3sge8bHuay6EoeXNR2JWbEXvQBmnaxQZmoLKnj1YEHwdDs3gc",
  "key37": "3znjat5xw6Y2jBWqwnyEnfZCLRtvi2JM5UWRcKjNhdrFPDcrxJzU4pZ1UFE616azyguEewDRWvZ54VcBRHJ3xHDw",
  "key38": "2hp2ToWCHE8L1eeAqEQPQEHnFX6QTjEyiMxS9wAvhVuw8UHWBFY3H6bwxRW6GZR5GPGx6ZWuq1vaHRJiUfTKXKCS",
  "key39": "4taP5Cj5s242QpXXoeXm1rvsCZG7CvYZhMhtQgHkZXfe5bqujsHMxfP7W6FZ293Mca4Qahgp6CVLRv84nfDz5Teh",
  "key40": "4Du5xysTaYgD1wbfSLc6dqzMnXQ6vcoELigY6vcghmR4XWqaVfqZrgkRprNEizxbNq5kZoeFPZ1knM4LCLL8irBj",
  "key41": "39NR5y683ZJAHP4qdP7H8bNWrD7aJNGdfY4e5HGmfMSu11py398WSDEq9MLYEioBLigNSoqXkmmb779Dc5hQ756q",
  "key42": "3ND9jP4C56FcXcMmAzTKMfU7n5aUJ2CQYijWDK62ZjzerXuKvci9GftKm1WG311GWB4W7EF3eq2R8K6ZqiFRY8yG",
  "key43": "3ECM9M2XcGT7kLX6GLMfiZ8zqX3XiVXsKBHVDqLf81hvugT5UEYMrm8bVWoh7HQpoCrZvD1DVDSwHMw5U1kupRvA",
  "key44": "5agcuLJLShP8uX1F8tcJcfADm9vQ6AfdBvStwhLN8CRqtkiiPXQKvpFnEyRQPi5P9uMhcp34pR6gN2hnw9R8Y8cg",
  "key45": "2dxcMgwQiH8icE1w5qrSKSPup7UzheG4UeZoJPW77uAMfeHPntUtCSgMDtbTTNMqF7Zce3e5AP375pkfJBbF59TQ",
  "key46": "5weCLZy1aaMXLcyoCjiN8kdBxUHfRgPhPzC37sDdCFp7zQaXhJXvsKmKy4HpbY9WSb77nCaSUCqmRDwGWEo9eYcK",
  "key47": "3nu5oAxbzan8Bqg46Qi9NMVDGfhdTThUPsRx38fkMay8KLH1cjLLUgTURdqmctM5GHtiHokTLuRxsciKcuayaoKY"
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
