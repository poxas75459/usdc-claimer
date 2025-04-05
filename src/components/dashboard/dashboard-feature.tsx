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
    "4V5MN22G3Fim3D44DzvYAyEdLTB3qXR4ggWUDkXd3LoJD6EMYoreU8XPMAPKhXs8sGkjsYA8GvNod4f6x6p5wMrG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2KooxgAinfiXNPodVKoRZcCc8CU1ygnVAzRsoFQj38eTzavcxwXG5VZ258bgj4Yv27EugFcJyX5GX9ft6q9vQ1qU",
  "key1": "3bbAMpnUiCxGZSk9B7tzvM9LAsNcFaafgQn9vJ9ayxx5rxDVzjZ8bWmamd99dcU5hp377UDB31cBGLBVPfYaZBRe",
  "key2": "vMsBxZDxxJGhUZ8fU6sJ72Ydtyiyum79orJEzKkWmdH1W1w5ya9Ha7ur7DjTTjG8aa5whZr4C6rzpauJ5wWeBvX",
  "key3": "3mAq45jmmj1YAYeHmG6F99d235ouBA79eBq2vtxMXxdQ5AnnDKjiuES6V2RcawaxYuCYdUU9dTREo9Xsbqy8Sk6w",
  "key4": "4gWupV7R5pSW3csw5XqFRM3xeu1xgLXMgz6vWmci8XPAhF6yBEwKzVsRKUfJvnCYbyPQpBagFn8LGmCU4uoiMgqo",
  "key5": "3hmYYwiFErgmZKLmUa8YaTbxCkMgte5V1xwrv3VwDArA9bYBvR3Rxt7rdJ4Lptgk1JYxyoijf1ZdpU5CfSPGp7X1",
  "key6": "4oKEckpepysiK9TZHANsqhB2HSPMS4t9mqhCiUWhxwWCgJhhPC4X4MYmKvo2DZCNKW436YvACKsdVwyeXhcMy8NB",
  "key7": "27KBR2sTbvxiUCUt7vtfu3rFkeffD2c6ALAvZxr5Q3BiVunhm7GTm7DySAYbQZtMXSmP5azg7xRKdesa4SwRPMXd",
  "key8": "5pKE96uDrE6XH1td1BaocmB1YYfDxsbXsF2YBdB5yGTNVvzpAVUutXwv9KLsh3DnjXbA7TUuzyhTJLYxdbDXrzqW",
  "key9": "4fxXspLZynLUHAFACaFHZHYsbwpXJJdeW8hBxHjfUuobEc6Ggz8wbBSMgM7afi4gy97sSYk9qjtDXfBq3PuzhTKR",
  "key10": "X167CcuSrMUfgNYX8TzEqzRm66KZUbe2YfMADkiSuKhSgY1ULxcvdPNytARVUGshxeyT9i9bHXS1F745Mk3PVqU",
  "key11": "49bzAvbp26LgJYW3taxqpHNVd1182H7DsVvLR2iHyQntTtofuLrKQ3dsT9TxuW3TCYTxSYH5qGsnV3N9HorcafAs",
  "key12": "2TW9JVR3fHaZudqbqEVrmsBPhYsmMeKVnPCFxaZVMCPPVRzXrwG9p3nLJ37GE7vFFVtyBdSQczeSP8SkfX4ZYsfx",
  "key13": "5hBBGghYgkUL6Kx7DS8GStdAzCm9P7oKpKVc2eYUxmNWVmYZmbjjXn6JaP189jRQUCymXawRmKLN4Qn4xfgrK17b",
  "key14": "2FWmB4WKFVs6VRkgmXXLvtSsETq1MudCxbkyZ8hRUxCZb2JjzT7XH9PfoqgWojFqfZ8WSH3jnubNak2FvRdCQJjg",
  "key15": "2MVjoNs6rEhwEFxaoWLqorFiHvjv8gVhgjyr3KfjhFyc1TvuLiecvwh4aDaL9usTzoLWD4Vk8iAZETMF1VngXZqS",
  "key16": "4iXJZDrRmvaN8fk1YUpyaASQZTBGJAtTzkpTc3oVfujsYvJgeLMuUFLgonZUApZas94qhww6Y8K2wDAagq2aihrZ",
  "key17": "4bV4QqUm1qLkvKvSWXNL3RAPL2EoYjtVhyG3qXvKo8JPU4CcZfgovLkXUrrtzQwAjyoR1EvEfkksdhmrW9XmRXKM",
  "key18": "r1HAa5B3vwTJGgXyMN96yBh7xfYdZF28HZ9J8ndzWzADZ5BtAPkrHnGmJTtQUkyuSZaU2XomaBGq5Mw8GcNnx5m",
  "key19": "U6d1Bpj63AbihR9WsGTCayTrskqrhr5cWk74jcDLgRv92zAQaqARwCiENmChU5pwtXLQUsoUyKuhzaYJgAAU9CK",
  "key20": "J1kpLQvmS5URAWQ7f33z9sCEJMBDmwSaU8SYaMKZT1FoDNTPrAWzzgLH5Req67X7fMQ8d1qchYR5WmL8aFpmnN5",
  "key21": "3jiZFkSHuTPWceZMqhQsqY25YNHtpPqyoEYhshLwnJBEvpH5pZK1vbwEWtrKQs99D6ZhqzQeiYxif174DP3dnB8z",
  "key22": "2YuVzVTjpAnyT7k91s4x45D35Dg4QsdeaBroM4hPEt8wqmQ2ndN4nczHUmcEocXMKxa9kYBfsqYaDqPHTD4SLQSF",
  "key23": "n67Ty4UJdDw5gEb4VNgBJGSUwNSZ6tuU7BCdPJpfXSZZZbWU69xhgDZyWr9i4ha41VUEnhPxw1BcvA1aSgNQEy3",
  "key24": "4G8ejoV8pWa8zKPxLBu1XdTPYUiydfeuuVknEBs18kznG3FL1vRULnXyjoUMLhTKUdfQB3hn4WbmxTp9Gh1kMMUH",
  "key25": "5KCnNPxk7bpP34ur6jCcNFRpBQxBdbG9p6G5DHWhxASXtTDbs6VTB9a6poqFfyCqXq1VTLnCCVEZSotkgFTQyK1X",
  "key26": "33Kwg75B4iAargHXYerkF2KSRARdBkNswbWsSowTfq6mSXurRdnVE6D1nmaG8WudDCVtTVu5r3pbacAXdBartPGk",
  "key27": "2azB1BPfr9UBcKacmRuJCo6dEZLEnTXiuf2ZPYTYN7MKVD5QrPKYuiHa54yuik5iu2RBLzSjGA3pcE58wRZdKuVv",
  "key28": "6HxdoG2AwCGMsfteUEoKXpaEa4SjojQ2nhKY7ZfCgvmXJ4aN1rKeuGWew5ASyBbmcrnPzrtZ1fqt49MnGPeTdcQ",
  "key29": "36FUKimhUsSv6Ep5FmkUsQirXmpNCgPCRvZu2VmzEWU5ByJsuyS3bCHduQSJ3C3kgqybGCvmASCVScNFC1Gbia3g",
  "key30": "5qC3Z8jVSMZLa4DwLQbSp59SEgiCnXn6CGFEFUZaVauBb1NgHLC17QQjciSjHiKxvPbRgXwrwBKiMzuEkbHY8mQe",
  "key31": "5YNKdi5HxSEfFSEiV4pPZWEfuHsFTgoP1SbxT9xg3in2179eJaivBhebSgQXB5eWdFbtvDRYYJStG1seUiXLYzQ1",
  "key32": "RmLUZTB9pcD6WkmSFmx6u7DTnP8p25Hv3mL5rzsLpH8YDnmzGnumdcSNGScCvnvEc9Y5XCP2gt7B6NfyKJrpNqj",
  "key33": "oPdmePAZP7SJ2CMnrRmkLFMej1KbePJKLu2FYqvBLLUQJCgioAFfr6bqMUPBuymN5orsEbUDoxHsUbf4W5J9nSS",
  "key34": "65qy9QqcmpejbT7wMNE8gfsMB3JjEmr5uQoWuR7bYq56sV9gDstuPYSN3d7AhLJn9kkdrHySL6kGbXmM6ERZE4XU",
  "key35": "WB2yr2XAZfPBZ6QXa319mUJ2a3TAaqo6csWCGizmrkTC7P8L26BYpGYY1zjAUw2norp1mwnhYRHajDyf8iAazud",
  "key36": "3sFZgo4Ff11WtJKpnEC66NW8Y5JT2nWWgNYzuJsp2eq5ruRJKF8by8KfqXYmeApkncgD8VdFXcBWPnLESgxpVwqZ",
  "key37": "2715mt65rpiKsW1RQvdPwiSysc4sy6m3wEwEqTvRmJUsKErngbGYVrYLzPs5yhtGCaKMM53Y2JD8R6QesB1kq3XJ",
  "key38": "3TzoKyuQG2dyuwwv59J3ru8uWGcZbo8dc62xzWq3Rf2GBtNsC9pQEsiqSbav3UEoUg6hjyUbp6zC7TK8ujq4jAFf",
  "key39": "3MaNPu9jDk3wZGKPt6BSCmNFiZj6MtNfu2UDtvZMaiwDu4BefRhsMa9QKJGyVq3m4uuM4hedqLNYo9SGkT2NjMu8",
  "key40": "3AR75ua5LSGTDEzxUccBivsdBezxqXgbk9GC8uek5ViuvKBJJzikNvtNNSHc3WQWmPzj9dWYRehBPdJWRUfx76G1",
  "key41": "mvohudFF42yyhFQAXmvBVvKBg8tJZ7W3rYRqhQ2e3PRTUWP9VAt8aP5JkLXdn3HtRLavZxaF2212HSZc1mLqXVc",
  "key42": "38aUafvqWpPWzAog4XyWEockka4MttES35oHvpxDzroJFpARdKBwoMfNoP1zyWwf4BoisyNv3rcqkgr4uTm1mKBy",
  "key43": "317d18xFWvgKPCAqr7MLmPNVeU5585rvMtqSNngWi19gYHNYJHM5wkca41sR5wjiPjsACJ7uEr7mjaH771S8GDWd",
  "key44": "3YikwER5kBwjL6Phiqtjd3XKNbP4KmkWoAAXCpeeX5eWQXxN1yxJh44btUqYSnQoSAo5UG6jxaw2TSHQAKpBLfMQ"
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
