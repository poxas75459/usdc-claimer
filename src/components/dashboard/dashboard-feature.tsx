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
    "4vWKb6C5zgmJ5ou6kcXYSFDMmUsBiJN8CpzQk5tSTPchTjDoQNV5w6VmD8jFSXiBkCztiAWtdinf1SxVLw12pXwK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PCnkkMnxN3ULTTrb4qhneKhY238t8ZCVs53SH2zyrf7QY3fYJ6CSGvuaFwriWjiPcKjs7vNbBZVe2PT9nKFF76J",
  "key1": "24mMKeCNVBt1q8JRr8ypQKWzGChgCmDw9Qyn13uAV4hq5yhYRc3jXGLzerqMSu8Giy43d2dBJktZaEqqZeqkdZDj",
  "key2": "3AVH7cLTLayccTqaqJA5kQbfDYgX8qksXN7ooYwft8yr3he8rN6LBJj8UKhJrabfanhKiSWW9D1aKezRwjmaLXdG",
  "key3": "2bW3FjrAdZ7L6RJdxG3ER6Tj61upVsQWzG8zNSjkhpvTFLF4Rzi86D7FrYRTA89aJ2zr5FsRAEzMzRRb1F4btAaV",
  "key4": "j1ZKkTUyALRMkhgMPG4tc3FZzYoajXqjcT5HkYvtbk3aoNEsgEzv2EvQDWAvkp5r6qzvfEaD2nfuaYQqx7pmY1B",
  "key5": "2NtxJouRwAXAwDdQqZ3e3SX6b51ySqBnckY4y46hR3KwieUvCHTgPkUWK2kqxq3dMXVwe2zzqT5GxGSvkma8JSQK",
  "key6": "3F3Xuy8WtnLe26cxzoLw6WCporWu4f2vVAH3dGTRogcqAPfr8BBEMZhWbJMCwNQ85QUpvu5X4PQT5vEn76QRtTdu",
  "key7": "4hzRdQ6C528u3Xji8KeYimCN6GiEcyev1HVowQcwPiC8ggkX7CBSLnQL3kv9fhZbi5ZgimWzFVz5fngXWvoH5q2z",
  "key8": "2yxtCsN57z7vS4NKNkAAr442ZxcS4HLY5x9rQA7hoemfSPtsEsSyXALxZxHtu5ENvdN4xgSLxH4Go7AMXJ1hTjy8",
  "key9": "qxKP7H3DX1GuQaWkjNULocpY6Dyg7Woa8Dq5RtwKuAcxqQwz6T94SuQphbaa5CTfegtPT6P7tseEaJYHuZ1HD9w",
  "key10": "5khM1MtSjL6NiVxwKNRQscRb7d6ujmKxRdvoM5cUQ6H7aCeBqE4xPPWa2FE5QqjHUkJuygk8RQacsyshRY62pyH",
  "key11": "i6d5SP5k6g7tUKH7X2nJmQK6MGBeTu4DiUd7FdhZKXThGL77mryRDVDpeHBckMLggoanuNx5f75meVy6qcYJGiL",
  "key12": "4EEQRPazdpbmGDKFYfEpXVD4GYMKt7HtxWeCF9a1qXeuf4pyb8pomyUm5nvTugVshSG2QAgG8uvvWgrNa8YUrFog",
  "key13": "3sNiNdM8TknoPGcZ4FDLVfKq6cmT3ETf2DN74gdootgY9XVmGQgPAAEtsMaezGExWKFpcQuN3XiYZGEsyfgNpiaJ",
  "key14": "3RRRW6gNrscQFE8Lc9Zvt9pRRJJKbB664P74RGhT1dMRQeXGodcY5LvZcbhzoDaCzS2x9nrxrRamJr6sPQ8Wvcor",
  "key15": "5nDhz6gupVA4YZJrvPT2XmKKSsUsu7dTYiidj2p3D9wbYYJ1UoFiCDEunWAjtrfKf4Gb8ar9DsRdwJNZVbiKGtHK",
  "key16": "4w7xjfwHVLbJb72pWdGHunRPDdyAxEN7nirnZYY9kSquzutCvcB4WUy99oZYUcRwG9YD9HeJhXe2jBH1UpLw9JG7",
  "key17": "3h1ynys2wFWgXyxtKjWBMQD8JLWJuQkSbgDkXJopUQJy5FM7zb7FdWCgRGqmTcn25v7QA2rvgpD3JUX7nhd3fgho",
  "key18": "4G1mHeLR4PhqL3jksAQXQSAjH8zUXuoHsNgwnbnSmkrgeh3x8HhEU4cKq1no9Qq1adaYvp6JdiYXQM59Dvv15m8G",
  "key19": "Z3v2u3MJpFMxgr2bLgNVxDVouxoyWueBvBBCBG6AfuHQEWRQ564Pb7X8snEKDP5UKTycG4rdMWxW5LZX9unpGms",
  "key20": "5XVGANEafVxBP62fSEwCohBsJBe5m9PKVBbUWGNnJqrBn7sFPthn4HN6cEyAm2FNGw16MsB1oyJW99yVorvVNmUJ",
  "key21": "5pmEnpogwki9d2zAPmaxcT51F6faFuHJ4Fv27ehZJJDsebjHLAe4umzScoYvw6aY9NLuuGVDXVhVBQU1rqEVxXHH",
  "key22": "7e9QFEFbAqxaLQ9LDtJsZKxW893iKKs2wM1GnvtyNGGUD5QEiYW1Q1Wu6BpRogbNiYsqYVp5HH4dFyEuS3SfTLn",
  "key23": "5SAF3cSx6Jz1tm94DV6xFvqwMqAsPsTb68WkFR5WLYt3LPYvssRfhwG6KXosH5UAeKER3Qv3jbGT9Uk9oA51YJqS",
  "key24": "G8eVQ19zcwn6vuGvQdUwA3mctEhzrbueqZWraarPTGyC9p1UEtkWQV8Qv2syQiY4CsGSjjNHqrq39uH8HkfF9Ai",
  "key25": "2mzhCLojCbwatSaUqxtXJpzcwMqKouuG8eso1SuFnSHWLX9MNkaiAk5LktQiJsY5h5WzfLAkctwmzdmUkgtMUbDv",
  "key26": "k2pRbzeMTQ9eEjXQX23iHwsX4MxJXiZuTvtsRTmCmUUutGHMNWwJbCVcWCXonVF6uPakt8emQY5ugP2nhZ74Bkx",
  "key27": "2vKR5Jvvozx9KVhTn9pZ7XbwuktRf99jQVhii5eFDssvqvbCyBh9QHHXeeWLQm2zkqkWSsceg78uGgqfFN6dtz8k",
  "key28": "3AkjsVP4SSXmnnKehZiWMPwTkd6nbNBekJgNQHCf24J3Ss8XzwUjgARNx7BxXRJrnVribsXfg7SLfCQGyNa9QYcH",
  "key29": "vKnPUuhjSAEH4YHEsX91nk6WhbqzhHbiYoNqqJxQbMa6UNNUMvs7k6y8ubWoCkzLRbcx1w8g1TMKmrDJXyBwxxH",
  "key30": "3XBCvKMauBXSFZqm6FrSShhb8czGDoNFoUFf7WF3vsXJUiQsjiHXc7Ae5ckMfBaosnrtWLHrzTJN1P74mR61wgNL",
  "key31": "4A7zPCiK6MyEynV4T4NXbSwhynYvhwLfb2wyuQfF69rqqEXX1rTtmZ411oLfMDWnV59GbDXHf5oGpCKLHrvKxCms",
  "key32": "v1MJoaH29Mf2SUt79zxTAm8iRhhsCnrdJfsqffWAwVUj6e52GwQEyGHRpVt2N82Vxvo2w7FQANmLNCSABqL31LK",
  "key33": "s7YKwTQ859FnCBCkqj9SuYf9MNt7ZXTyYdvCdSNMUeTa1mZDvwqK5GEcNeNb42om3G24HU9wurwUuFTK6Mne4F5",
  "key34": "4pqjyRsg9Np9GYu6vzrgVcrUHs1QM557WqG3KD1u2WkiaGfAENrwJxSYVvdZaVyZuYHZD4BiAGZN4kTKoHBFNXr2",
  "key35": "fywcmpC8PZgT9o2eocG6GzPjizG558Cohw2ASabwnd4KsNjsoRpTDN82MhQmJvDzMnkN2q92mBj16CHawJeyFW1",
  "key36": "5aMqdstqMxLbbS7T6Mp2mV9nxdmbckTpJh4ZTqrNCfDaWy6TA5E84Nc6LVskpHTCpAkYnnyMkGer8Uyqa4hCcxy4",
  "key37": "3BQAQqPh2JYWtTEuVjXWk7wrgSevnPfDh42nHCyaQDvrKzJgwVEBoYfsz8QVac1LbYNfyE8uqmDN41ioKHPKp8xv",
  "key38": "29w2aHYgbgW7gSNcJm5dQnpex7ZrB6g63EJHzgNiKKMaAt7WtzwRWVCirixta6XfNxZnKUmKZhDQAiRrsTLjQ5VD",
  "key39": "5PqnRvFgs5KkdvBqDTCuNhKSgf4XMKXmuPikmepn7hZ4pS7HquCs3RvgXQaqSVyGs5UEsMoiRmL36GhmUSAYysLB",
  "key40": "54BLxp887dNdZDdZwiXh1RP4Y8xPxeeMqct6zZ3RhtbRJMSXrn4WE3XqfC7gBiUJcJDRAVCCBxcAkMjENrPqKDTa",
  "key41": "2yJ4S1suwMhUQDnPLJREKcDtVTZvbyZ3wUKH4uM1uEfsqQKu39jiUeA6VncUoV9XWTgTmrgKhqznHVUs6g7kqggj",
  "key42": "2FnrGGrxhsrJAUYeGa53RQKr7WhoK8fJRaPj3bToEqDdvwAQTGyDVGmq5WZNTZ37P15jcMcZCctafYg6gUQ24uLC",
  "key43": "jhMgVsjazGHp7Emx7pxSWpGeP1XZVo2MbAtFgEodDPAsJt9dbs4FaNDYk8MMRstFukLsTdaji39zo6Y3nkUPPVu",
  "key44": "5dsTBDFbsV8qStKcEAdpy2Jyt6TWgHgHT35p9gtCJxXz7gU1ECsSWXMijityseGmfTZGEHC1Hwxa1EBpYH5HxX8H",
  "key45": "25Ria86Nzu3Q4YpvFvuz74uzB2hjas4xdNH5oi2cvznUaPdiC4Ugovp7Y55Gs4hCc11R4RYb3XNQ9JnR9PzX2Mgz",
  "key46": "2aVQKgZpxwQMMHqQ8ZjhsyyDyan8rBzZtZtbdspk2iqce2g6hRXzzBL9VcfZeMGGros9tv1zgPdhN1ZMq3ogRp58",
  "key47": "4fnCpJ4MXJVpGxAARqLFELvcvXjMSePkYYgpB5nuG9sJSpjdiXicxu9X9XGXuScJYfehXPq2gV6DAiCH5EQNDuAV",
  "key48": "24oxu2eBBfMuYdWJrn7F8mRR4C6XQR8JgtmF8zz42J1wBnZsW1re3fsTgj4CBdLa68p8YzS3RxfSeBbeGEEWzEqK"
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
