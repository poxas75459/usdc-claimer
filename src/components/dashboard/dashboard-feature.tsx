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
    "48LL9GS89qJSUKMptrC976XDQbg8SmCwG73mfxxsLnSMpVih6rGtkh3tFsCXnb2ocNhgqZUBj8kGt48QDnMA85aw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2FbVzXqPPMaKmm3Vk16BkXLrT9oMvq65hLoxJTCT1jrkuQ2QH51ToRSrk8hMoRhEZiuWiz2GjBuCFpA5Sb3Dms5e",
  "key1": "2LEmc78vgpTbEcANEEStaXroWgnGBvS32u7QJmCmUcLgbZnFcHeckJEdoJThVRfqUBD6pRuRiCgYuEQPwY2uRjMr",
  "key2": "5AuevZ6M7QQhJp3Q1G51CtEZun4WQxKP9tj52hWopWXyxL9iR21VVaTMRzEhGkELmUrJAtKccWSmmZqxUZwquAKZ",
  "key3": "ZeAouo8pEnEDkrDPggCQU6YB3Wn9c8kNUvVXc8jfVFSgQ3tVCgj76aKKGzETCcDGU5PWZrAhjMYMQt5JHg4nSk8",
  "key4": "5fQLM5ZQEjJispvXEi5PMNGrS4va6UyK5S44QmTWpoabuiSXRjmkhecNBeBN25omesiATM2Ed9tP8PhmSKmXvrr5",
  "key5": "2bKVkcaN73DLKUEkd37r3DnsPssYPRvnidBfeRKrh1oKCHujrNAFSxQcTsfGV8GEaVwVvWTPvMNrMZniDtUL9MMg",
  "key6": "5wnVoASqayiDdrTinQewBrJQiV7sqGc4w9vK6FJqTpfsKx8yk2tH9ounPG8MfgJsBRG53GEQ1Cbik3K5v7EjuxM2",
  "key7": "4TBf5ELpdkRZjfTEZRwdEkQKzjd4XFpg2dkbifkJAZRW8F9duGBEGjD8b9aZRRDr3WQmNzJfNncGcZnF3S212MEJ",
  "key8": "2gfKhi18sp52xhNgZfg4kz3XdjyzgwMqSTLUSaeLd92peZztQwZupGP7gCv5H6T2WzTRMzpgzgqZ3sBqruJ2ccTa",
  "key9": "5Nx6kcpqAxcmJGJjgL9YhhbRC3LyDvRU9qofsnMndJhAnk7ktBXFHUCnNDsMkD1SeDCvCrRVHW5aP1vfUNnEH7rq",
  "key10": "2rbhKbwpvKS66fn3Z8bjwd1U1YtUUiK6xp2HFETkbbpxDJfRUto1T5cimCeNhff35yAzckN5DYmZnsDafzKFvY5C",
  "key11": "4J1gxUkYrpRSLhaGfFnQagSnEBexCsEsyARFLCgtpdAY7ntLGWfkVWazznFXcxYr8NzrPaiBwDmGKTZ5P1iGB75B",
  "key12": "5kfDvuGTcqJfcebBH5dwmLeSqqy5MQN4QG2iLx7kBuWHXo7JBwKn2vgL3Kvbm9Qc1ZMBzG4HoTFPv4LsLNmtwbd4",
  "key13": "4jWcz65SUB3EGvtENWZZuTkxWirBJZ7JhrSXoz2ihPinjRVSuNXAFKoVUfJVmwxntMtijJ9mEMnkUxisaax23MkC",
  "key14": "mYvWdoE4ZRTfCk9fQBP8fjAjyyN6ENsuhVE7Rysb4Kc64N6XHWWDdpFdZbxvzbgfvcLiG2611SZ9hVshb9gxcVZ",
  "key15": "5LBCENULyjst9corvKQ44xbysnratFajQhTkJVJVcxxySvtGVCA385VDNinvyUXiyvwA6KrUfWY3FGSNjUrxJ3bH",
  "key16": "2D5aYbQenydZmyrzejHcbAsNM1A7f2FRQLv3aJMXyMFq8vWV6yRzfJvU1sEtT479vJwj325XN3X9qKCSf5tPbteu",
  "key17": "3rKpLeM1mck91jQhSJLQ1CdHAhPp3Q8WsM63eB874vooksarpB7siBNXK7z1z1C5abByQgZ93crDwbM6sRm7Jn5y",
  "key18": "482bDffS9xchih1oV53jj5UZj222sVaVF53qUdUf92sTWuvunAudSfbwLFLjjE4fpABZn1FYjFJHeEchZY44AEMN",
  "key19": "o22fQ2RBu7vKfagPSLtVJtTR6MaLbTDNhATtJx1T7RTbo8SsbcHBW64dz7ZznorJ5RKRrtsQ56PxwXXwG5DqYdA",
  "key20": "4bLjMT57rVY2vc2eSzMNSt1C2hEKtqsUx55HwaMzM7xWXuY5sTVQGasgiiRJ5sD22avx6q5TTND5sk8qqWxEQoyK",
  "key21": "2KiYiJsAy55BstP1aEy7HpReQHVdRY32mqGsx6zauarF7XT4iJz1bxVzdaQZ5ZwCdYSuKkwBQcJ6xGFDKwJxm6nx",
  "key22": "5gidy5Ud79TrrvopZefJw4rE6dmFbzp2VjDTKCUn7ii5pxBDzmBZxnCwJQJPc51AT3pVcvy3BdotMQ1BMbqsjDpb",
  "key23": "3SMxmHBgVGN9guECcqnyqPuacoGKgef32ECyTjpKTd1GDVNncyn5QKLFRRDrDss8bKsdHTQCxxDfqHdBxUW9gQ2H",
  "key24": "3DCYs4KsJMovPM2VFaCA34NQpQsgSrApnHqVims9DiNj6exkHK13JZ8MpSUM8u9HQaZiRF4Rxf2vER97R8j9FNhQ",
  "key25": "5Z6NXxReUbph9kgCJoNVQj35WoYxsZXgVF9UKZBWQnofHHwzRmDm2nJVme6bWnZ5A6GYa8egHyNJNptDB1qgRajq",
  "key26": "by6wTmxyFGLvMjYqbR4ihhFRd9qLCqyswcg7vxaJC1W56A37wLvBsbiznHp8k9Gduj8tut8tdJNgoBMpfLB9fpT",
  "key27": "29wZ7zFqPptg3uaZAiyiESjpL6JUmpji4c52gcXheuf8Q4G8aFbNheVjWBThqe7htb5iZ9u9J1C9xVaQSNLsoH5b",
  "key28": "4NhAkhFVqonMbZEGJnrzzAZZm6q5bX7H88kbMv8mFWXas94FpPmgY9v14GQnVEdWLyZY8M8bT7zULLEUHgNHHUge",
  "key29": "2CEG4ukwjYghaRKs76YfWia5FVu181sk67XjEYtPJzrmKj1A8QCo3TuJf2ZnszukBe69P8gTPFy6u7UtmSD4YR81",
  "key30": "4bmeLiCCbhWfnnewcT1w1xakYpnrtJhiMA2TNsAemCHnixn6zyVEw5EYuwsTV1NytazvbkYmMTffdNouvXMtnzKJ",
  "key31": "255bZy47HxVNidefrC2D4GXPUFVkf3mPMjWwtNkdbcKQjyNHkLB2Vn4m6dsbnvjs3jNPLnAYcrjpPkgfgJ1uXEqK",
  "key32": "5aMxcYAv31P6GjFnqquyVSaxcGfougMD1ygfKyzgET6epsPumMAEqC5SCw6KdATeahnr8NrafrwFo9igrgzrZRGv",
  "key33": "39yXxragj9EfD5kTBajGmUfaG1QRuutciQBmMbMgivVJuGraLUBofYdEaGfSEsRojF2Ck9m3u2fwm9PeDcPgas1D",
  "key34": "5KJEABg5QPzie71fDbD4m9Z7nsMF36DQBhWQBGnFRfKfVkbBkPMC6dQ9ZHiePWUPu7MM7eLT47K6zNScasnFn7dV",
  "key35": "4ehrne7wwUkvKzyrepy8c8Z8hGt4Mvmf7L95935hXMr62x7HFzZBvne1QEvTsH1PFiGm837HWnfV9HmNHUM7XtFJ",
  "key36": "2Cu5rNPSNF8jnDYDsnqi6wfRQVgkZNzMfMGEuj8PSuXkrCn1nmfSo4QbJqxpRox16gHEZf4PCL1RHz4Ltk6ZHsPB",
  "key37": "2LKspfptV4tLDjKAx3LfweYjXPfMhEbTKSNZjVtMnW1TpL7ZJW8SoPjosg4hGtnkAYi9oEo47NsmDQTzwCsRK5ms"
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
