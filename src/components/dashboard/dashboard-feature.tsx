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
    "5ZePB5zvGhwdAT4dBNVonvjm9uN75qsuqR1JVBkjiU99QGsUy1wuy8g6VtX43cJBERo4VguuTqUNbNNNug7zDJ53"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dwgNkM1eWZKyZJEYqc6w7Ec8seVuvaEo93PARBpMFhUFvTibU6SvULdKGRKf9oVwmasLpQMx8393F6V6U34ADAN",
  "key1": "93CzSFca3ZevyYAf5BnPyXtdA3sQvrsB1knJP9KpjwkpjaPZDsBT5NN8rcaLkDvLfwxtj3kq2Umi35ZtWbhYi9T",
  "key2": "3f7QEqmdYoNacjLsvNnbmACEx6DeUg2XFF6Xmdkkm81YhjXRrM9iFxAeKWf4kuaHdW3ih5efWUrTcsoPzrfGZ4ff",
  "key3": "64nSpKJ356fZJiMq1Tp9gxS4oyMxvBXXZzn14NwX4asx97JsqwZD1Ln9x99EzHQUysxeLKz8T8gvUfSuHb2UYiBU",
  "key4": "pVGnAEw5ktthsqdy8VG4i22T88YNQZwqMTPfZr343bW54oNpKXyZxq6ZyMT7CzYwANDREa9CnBBFWRj77VjJrnP",
  "key5": "8ePTNPGhMTZeyZqbF9C33RkDkFxiXuD2cTnoPdyxW4ztvGpzEQkQeyhbBZtNVrgxHFtLkMBejFrAFUeDfX9ynoB",
  "key6": "4XESK4DvDewkzRJDPsd2dQgsMntz3XH842LTaBvSsHhm2DgX2vXoE7agnmC9VUZPXEQcbWRp4opZH6DzF4ozCYgS",
  "key7": "3tyX2WykM2VLREPyahCaswYt8yhXFWkqgP5m7UWniTrFr3raXnBWm1bLRSNiBCgiDsXjzdUJ1sPCV7NoLvfhiU9j",
  "key8": "SX4TxSW7cAXt1USyytPbcpNQZxPKAc71m9GrAnzqqgxmiv2hL2Qvg8g1wzG7vthqwKncqqNK7wXU9oSxo7AnDfi",
  "key9": "WkEXjv5RtGGgzkdvYgotkGez7nBwhP4mhm5uqWEo1jFmakfz46bMh3W8dMdz17betTvfCrGqF8Es1YDHWA1rHSk",
  "key10": "wyb29UAjvCWrPPJFyCy4dXpwPpRsX65xBzfecQjgt3Q6DHhjbQdRyVi9cJKHtgfCeMTeiXVWGz9BV7W1st4e7Ef",
  "key11": "4LfPcENizrRAMWGpsTGM9q12FBhstv66D44rZGKRg2sksm4A8NXQHFLEY7z7zXyKANVboEVJuRQ45GaKjvaQ37qz",
  "key12": "4yFKXzSKDTmJrwwMTvhCZXFdPcLqfmYjyhQcEZPVe78BziD97TwaZ6V9FBdWoN9XtMw4MMAizkreiZTzGAhzXuRF",
  "key13": "4MTzNpXN1ZM8GXhHCjL5C64ojGkyVsjWUuLmctFrfAHtWKx29pBvNbxeUsAjjVrNKHX3b8FjkRKDEoKhP1iQ9NUU",
  "key14": "3iwfow7UYuGq7ono5znAFTyoag27Ur9CeZSFuS2YEs7TARw398GeyEtExap6xF4R8iKdPC2Qf7P1a5Eh1YxBqX5",
  "key15": "a3cNFkt2KRqNL7FnKfSUJfdU7Zgyxas5pDU5gZkh7sqxKprXn6Pw9ipGgc66wuzVmUEDsPARatFAXE7XXXDDrNg",
  "key16": "3BehyqxE7vJYJHSJJEDfpkpAinVKS5vsqz1vwehYusfM1zwmiQwPRBUQHGsuUa52gnJfjNVZFQmsJK9gsVFBrSG3",
  "key17": "4KsyQdHwG48vvV2rDeg8DJspMXJ47aBEyWairSDCD75gqNUtD4zhZ49Xejtfqqa8Hx6v5sUeHCY6sD3oPn8GMEQV",
  "key18": "3eNKMEegX8Ey4XA3mk8ZqmjuPBXHZUfUahsZmESobj9mvMBLhPri2D2w3KVEUzYzBD7J27gvu8i5UfKricGLjN5",
  "key19": "kqrWKbFrSxrXTFDKuFWuV9CTShBdzTAa1FwQqHFHYsd4PDEr1NrkifSKAgnBUNLRn8ZHt2G6gokQWALheAbWdMD",
  "key20": "3UcPcv33fNcTH8ZWdTty24xDKmgHWWK9nna3rKc15wWjroQshTmsxRjPzPsWK5aeGunZDhpdarGhit9cT6WUGCDt",
  "key21": "3vWDfrDw3Th28An5dXWsoYffESaw9BuD8bhbu3AiGfocdnZRiSnxooarh61LnftVR8pbQ5TXt89DTp59wZEhe5Vo",
  "key22": "4m8FiS5jrsGP32hcGuU3Ba2UAJSdC1cSyRcDR8RX2XG3vXMZocbfqJvLRFMvwzn6FeXDeBPHsPH94dyi8941CDoj",
  "key23": "2E1Yeyf1SWAxWjcU9G5FPjzu43HJoKaCKUQwTexAn4fCPESfGBGQ7qEb1FMEksEbXwk4KoQRYiHir6K8g8yN1Hhs",
  "key24": "9M2hrFTKQQUz58eCs2B2EUTEbCwcVFLYKAbezcacwtAi75bDjA1TRiZEF98rKnAk7FGuB21X6wq47QBxMtmJZiC",
  "key25": "38X9HX9sN7WmxcaTwHKrmgdEuDSPvWU5BhbZavbyCcLoyJdFnnmKFbDDgdWg1DE598YJUGkTza9S7GTGiWrMLtfu",
  "key26": "5gj56eZJzHHRFbYpgp1mHAJjXc424trsbvLRu7kKS6UCwG357u4szdu2we7W779wCKaLjLNWvzPoN5V4jiCuC4sK",
  "key27": "3uB1nZs2G3m7EsJ2xexwJTin1g1JWvaXN1dp8FB11GA3djhj4Ng6yK7J1t5SsdAVGquLgMXfoAnvVLbmYzFDVrDC",
  "key28": "2Ex2Qcb1MBgYAPSNCntGyRBXrGULUR5yfhL5uie37kuoqoPLpNFLQWGjYukA1Da9rn9zeA1eoLc7DCSrH8sLsn9c",
  "key29": "4YUeQCUEm3b6DRCgXWHhWdzBJp8q4kEdJ5ruLmoL3fpu1nMFxodjban9UT4gBvvZv3xyeCmykoEAcGfieFZXg4vZ",
  "key30": "3FgvveoQyMZiuuy3BUMQujcW4rMLHQcZzBzpUjLJ9dcgRmXW42jUiVwMYxYaGTHCeqm3JJMztNTexsxitQydtPNP",
  "key31": "3NokLcK5z6UmaNWLhjbotXerAqiHtst3LNUFcnkURD6CR7De6pw5QfYoDLZJk45HyjDHBMfJDDmb49ydGm352ztx",
  "key32": "5JFfaCdN1ymtYwmuuXvh1xSgx5zMEhtkrEvkMX93MUpvaygCT4Pn7SausS2SWkiLrFiHQ6LYkNSSuvcLDkFqoP6Q",
  "key33": "4Mkby39hUihbgXiibtL3hQzxSJpyCqZ2vy9GnvmwdQmamYwsM6sghkTUTkybTMJR3rdmcciDTtLeqgz8ocGaiPho",
  "key34": "3EgF2tmw9yCiPhy7wpRHeoQVJBKbAX8qT4g7jPtvWiarWjRfnNyqZtFZkmh1eo8K6WGu9ZoJVQNAqMGRU31iNwb6",
  "key35": "2jpfRom4iYeiTZBbyCYphqwneYwTdgMDA2pVUYEJaeRvqGBcyCH8k3TGei9EWAKMe89gFb4fmQfUCj9mcfupjzgB",
  "key36": "4isUy7snFg3YSrM6yyUW4wE62PDFRqectSAjA3xQgGJ2NF7dxqzMo6JVYEpFqs5nPR3g5u66PLQM7e9NhuvB2FPW",
  "key37": "2tc77CamscXaDDNnaBrbqcqjBqj1CwA5svymXsDpxsM54TG7Gi6QVgB3kFygnT2RiofRPAgXJU3BrJnzLaVeKob5",
  "key38": "UpL5nyaHnJM1HvQmGMXdfR8yBUrMaMEfPJ1oPAxHRCgGGDmTTrnoqgH4SZ81CB6uJpUHtg9hZLDJNSHNA2LYC6s",
  "key39": "3ak7dW6L4NCVv5DRdWCd9VjfXiGnY7Dod8yY9XsPvnWMsAQP22kH2C3755HVMXLxz5HnRUMLPRwmHDor1qd1kVgt",
  "key40": "5c3HfMTJiEvEuDwyLrZnSsKc7xXwpW2MwzwT4eoi3U4bG3q2CBJ95jArTA1hW8UpFcfaamPALZQXgU7LezXBQyy2",
  "key41": "2Syrg6xwXjzp16CD8gjSf9eFuCDTEN7tkPdb8q8rCYAYdCYA7JGMQn7aNeZCn1REM9WgJBNeux7YDH32L2Pd9jbD",
  "key42": "4zqytg8y6ShUnfSUn4eYAVcNcsfv7zC6E1hhcNnq8j9JMcBEFxQxUKcKz2tgR1QRwFmGtody6ocVHz7vzjtkRs32",
  "key43": "2g4WZGc7fv1UApW8V1FxBEHEg3mSaNahQM3AQEAZzWKVNvownbphHcANtMGAT3EbuwtscB736vgXo1rz1DEsqpk1",
  "key44": "RHvNfSUSnrwKs9dZTokwZ7Rney3JFZDZ1bNmxU8tnJAawvEkRwcKivY4jrK4UdJoHogkj2cksLkEZZPkj8rKFQv",
  "key45": "5LPF6z4SZ6YmgbXyACFf1gGGAMUbC2tWpe2YnU1TNnwxuHUHRPoJ2Wn7FYQHHFiN3ygebCgHxtKS6bpQHcDe7A5g",
  "key46": "255BXFBoczR4VCmWYywZz5QjqZar86NgLXGoQRQPnDxcwg9u9deTcKZ1qBs3N26F1fe2zMvm6XFtCBB9xvKMck5m",
  "key47": "5DfLnLkVcwn9hC2VgJ49mCsSfi1nDTaZTozXHhR9UaNsiWAymY9D3CrynQJ1NWEUCfqsSm7D5MEKfnt2K2cuVgm2",
  "key48": "3evSfHVvCzgpiwQh3VwQCCbKQ2pjmffoHKikM5vG5FjjPvrp4qDb4wGeCr4mrqWRpYeiqn118gbMFJdRAidppCXL",
  "key49": "YZYNdVrZzTseontA6WxdA43jUkwwruLguEbytp3gF21mG6vNjku6m9fUbySbfBYg2qnJdrub6KfMMcYo68gB94e"
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
