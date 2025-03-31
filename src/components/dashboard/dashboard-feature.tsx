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
    "5epkYu6BSUAjZaN6c7KrR3N3AYwBqbsCVYDoY9XBEMHBVyQ9eJH44Tqxs29aQ2dZ6h3aTNW1VvXr4yCH8NsEvoC2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5UVW5drDXpxA8dvvP9qLJH27EVDBrYzMnHR1ZvYn5Fm3GbmhLP8BkwqaQbkLK6xCetqDSCpiC8nW6Vu2ru8JR1nG",
  "key1": "2PmFkXdsAz8zU8foRHjZLmtgH3EeBUndvHJRqEkUwfpRd97dE2ah5eiEk8RZL7oSVCtKsjMhqaw4kfhKv5Qh7G3F",
  "key2": "5oR3DxM8VzwZVftR7eLF39UUcEgDzn7qkqar1qYmeVWBfRQTpRwqKJkjjaFgBX2NEekkxA7r1kFUtyHrKayZsNJC",
  "key3": "5duyLjsc7mSrBGckLspXC4kmzyBJkmCTtqDs3JadQYxkVatRu8xBiv3FxiCXcDcoAgy9LPHrh3ggpvozmd9XjgKV",
  "key4": "2MFUWNnHVEGK9y1ackHD2s7Ppg96RqNUoZNm41dewvh9247FV1dXTdVxNZy4xAsbJZzQi85PXFy1MgwecDNXxBMD",
  "key5": "4kg7TAAddaLEfov7zQ416JK9Tzu9UyyDcqZog2EqPKH1tQVpQFXcL3D3LYNUdgZCtTvdoYx3Q8ntaiaA4iQVSR2M",
  "key6": "5h2YhYnRkRtezxQgDeQjSpvGNk8VMGSUHsmygHRhUWvqBUY9cmAB2BdJRKg3DwpDqmse7axXzGkaVQzx1AXAWtVN",
  "key7": "3VczcBtbT6JF9csN1kwgJWuRmWsc4J1HPsYU4fGgWRz2KJf9xGqcCdh8HUc1XfiB916umS2f57qmoRhSvkQ24fnu",
  "key8": "5zM61LLnznjZW9tEMm6oijAod2vxFsiFeM8nMBzomLxpAU7nbbachzUc9EJ8CaevUNNvHmyzSgnDv7YaV7WGJEsa",
  "key9": "2Zn7nnJswYTXBHy4GL4JEymrK1LQoZicrehEuKmSFKoW9SFMpKaHS4kY7DKG7RcgshHwvtiV3e8RhCtpy6tqbgm7",
  "key10": "229UVDVoQEgT5NdUrs1ELY7HcojGuRx93iPwNvTSNwFG2HPnYz3ioNoP7nkWNCvWizXmzTDPWWEGCCB4AG8tiJLH",
  "key11": "ggxMFtu1cuDBaV7WJCMJ4YAwS9Ko7XkHKVmmiefDVjzAhCqoAk8b294U7ab9g4mhqntVr7p27yLv6A8r5dLBW24",
  "key12": "2aF5j6DxhaL2vRDXhqyDtBq553r8RQKij1vXfqXxD1XXUrt94eFXiyDrVpME4FrbFpGnbAdgE8YatTHZgoZVX9hV",
  "key13": "2r4pGBr4bFWncBbE9kfBQ7SkVxyxiJvs21HELG4wguWVPzdFLcRg8GrUaSxVaSoPcbjkZHgNEjiWg3jo5mVWj56G",
  "key14": "ryvQukCDJt6W7aQcwfTfzBxqaknSztbiSJN57KxPGqhfNuLSzACCuhq6MiVYofrWHhVtgLKFHw8mhHRUtW3WCb6",
  "key15": "2spHFzkzibVqA4TNv6caKAZ7cpz6DX9t6DR74kxKN7Tn4TU1VSoD5fPKLtToMEmB3LgPbfSK8pDe3FqzAwwEuewJ",
  "key16": "4C1gs9gW3xr86ne8bpey5f6tbPAUtjHSzFiNJqqQiit3v6Rq1kzkE7hkD95U4rSwt4G3Qz73k8mdCvK6Fy4fmcyL",
  "key17": "5jj6d97SASuGbBXjJoVsnmVFafXXAHvPJXcTt3s1x2rix51dC3sTbL6JZXR645bDhQbzTVrSyyD13CzPGByow3s1",
  "key18": "5nTsknKScu4xVV4dFPi9Pwxbpe9TpSDesgapDoZmvNM2F7eRxUUPUBXCAqU3wTaMSX5nhwhZ7tUjZiL78Ekq8y4S",
  "key19": "m7e7zVd6ZHpAi95V24QYrz3bgsjtuvYHN131gzkzQXugo7pkLUo7PhAmJA3odcJUdQUVns3SvUvayFxcXGmVCuC",
  "key20": "65qrnPH9vQG6Rp5Mx8F6rMX4uho6y3QrxnzmxPd6tKJKegBkyY7on5vhW4tfE8e2f2BLUEg7cF7qnMEQ3L4MVsi1",
  "key21": "cfvo89hsUfqd2E7JCuVy2UoMBTMyNZ9pVagiooXcR5x3CwDwFLfsoE9WRMWYnU5QRqbzBAjYW6CuKcuSM38fy3X",
  "key22": "645vwX7ZaMZSt1qjKdX2oHUoF3gFxR5xFVNam1knzksji14rHnTraJwkHHWzpwiuZK2mF2SocBpzdaucqTzjkfpv",
  "key23": "opigqCW4A5ZyQ3STy2SNwJzDtWokPkf3KQ5CK1SUH4DxUHQLpS1ruWG5UxPq6wh4G638L7Ja8o31sQkC8nZFrn1",
  "key24": "4NbaWnbr4CvmSZhr9AJqTH3hS7qUC9vxFCspBj1ZLtXSWjipXzyCWnNZztkjoqbxCUKRNx35kGDbYmVMJmVF4gg1",
  "key25": "42fAepzWxPdMssWLddHMYTDfwAnPG7xfZbQQkDbnBGWPeMeGzv2MNBAK62ESB5XAZMKz33k2rvkhpbxp7vpVuaZz",
  "key26": "3ZXedfocR1cBKYgpw8s2Ubn1gq3xXRw26MKENmMw2vuHE5T2FebcZjsDuLMeJmGHQmgpmUxHGmtdTtfJNo29bRbT",
  "key27": "tZZMTbc1ApZxdnB9FXYF41YCyED4HfqDNbENz1HvrVy1CdJ26cbupph6jxb4BmwKkh4fRQwqtLutRW5raEK2XER",
  "key28": "8Kp46u4xgF22aMfuUP3psPLRXy3htuCVfu2Uunzf9w8xCKvhVE3PjL8qJtEQ3Xu7PwwySNpf3ZcXD8E3qeK3r22",
  "key29": "4r5DRkWJW6jwucyNpz85FzW2bjtA94QG9xNBT63EgMSw6vSuaDZJZrUUVfXQQ5snMdGa7tWkjj4fVGBXgC5uxh9p",
  "key30": "a2MYQT5Tv1SkoZidDy1JBbuz9ubXAZPiPJck7VDY8SEQCvgjBHsqenWaXWvdvgBZ2L4bq1cTchM85oSobmPqsCv",
  "key31": "2vzyqXx1Z7UqNCLWvogPGVY2WRgyouJhB2JCTf4xaHJHvNKfKa28DinsTavm2MhK2MwzkcZa3hQqbAYbK1GPP2xG",
  "key32": "4cCnRkrBSZaCr59TyKuw3U8jrxZfSvuuh7rvC2JXpDxFJJRRQtM1yfzD4SCvVMSLK2KMfBxJqYHTdbfQb4HdT2xE",
  "key33": "2fQG7WgDuq8mkr35c4cVMtpasX9mUJNodf4MLDF1Xh8UvN2FXYJjYb4c7cDtURsEVvWHMqC6q2Gvgn8UudDWsZiX",
  "key34": "446t56FNLMEMoRRrXmrRg9kMwZoEVL44YcrC557UCMqBkRTsGykFCHpF97i6jihE213VSAdWKpvT1CAUbKf4Wi45",
  "key35": "5G1FFG79TzxyXEeVUd258L3ScSmG5wjfw8XmtQSkULkWk8gG4ubNf7B3dpdMFwY1jt6tFCE5zoFmCsurb1m5eaGS",
  "key36": "4w7K2CJhVFd6hvc3K1cuRmG9SYmzcv4Ys4RUfkiYsVaFNssAMt6zGWSrgF1jpZvU1tWFKQ9rq1nduEJD6XYr4VJx",
  "key37": "2QieMWhwgRUVFdHGx2CShMDap5jGb6XSf2g2dqrARJ3dDDwYT4vNKTpVFrtbRzpyMmavH9NDWMprS4jwFbVCujqL",
  "key38": "4AZ5HgQQ6BzGy8vdLtgTxBvRyzLY9ZpKvyKR1hsv7n6qfsABsXdxXydD6xhTUv4H6vsJAs2UdqDH1KpzDYfJaxd7",
  "key39": "2bQ3ztJGkT2Mn7QYtkdFxdnRDXG4CisCbLjg7mzMeyfhRT5UxKq15yMptQ6KVP8kyYqzuLRGpydZCcSztxmDL9Dk",
  "key40": "3AWesvTszeaeL2VweJCvik8hEQnzyUxDr7ftJh1Fg4Ux1j9UFsvse24ogGMxYPY1Wh8hEDMDX6ZFDJ1Mxbh2fa7h",
  "key41": "vbM1RP5sP4Lz7L3nDSskSzAUFwPqhNr5PSm7GNPEzxuYEzA43tawhz9Swh1irGgq7oxnEA3L4nXbsJnsLYxrEtq",
  "key42": "58VhDzrDRKBUcovF7ti8t8SybDPN1DY53QWecAkkNBvog6x6LrFZ9KvCbNkSYKrLqpKkgvXAcUCFQJEPV3zBjFnM",
  "key43": "5tQhe6P2CLT3G24L4f3AWgV6UBB6LHA8CQC2xpbmEeaH62qeARgnr4Zp2jKhiWqmvMVwppaFKk79K79MrPiLw8hH",
  "key44": "42X3qCsp3oFfV6wmrWoFfEEedtzbjSnAyptSvtqJyoHXxRA5fVhLxJTZPLrPmDNLyVzpZbxckw7CpEdTBjiAg31w",
  "key45": "4uPC87rXjZ2sTHZ9sff4p9qsaekHaogHvX6dtCA6Hzg8gkdysa9gyHoZ58CCCHHBko3tYeAAXBhwaC32m9C8Q5Qy",
  "key46": "2bmpKmqamp6o1BiZGTctxgNwNjp17cxFzZKnrLQSDCpAk9J4cSADXweBu4cAPCdYJg5njQAYTXTjHqTU72Ybr2fg",
  "key47": "5XZsRKysVTzUPMoMVURNDXVJwJGhtFrPDPNtDZCeyzwsmZhpkhRAMq4ektBxBTJd7JxeAY7hni1H9GmK9Q8wh2Pv",
  "key48": "5tSbUvAe3WSU62TtX8wfStbRsvzQeB8C8Y5VwcHcV4ocxoSzUJhPr699DWCM8KGezdERGdE2FgBSR734p1qW2vms"
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
