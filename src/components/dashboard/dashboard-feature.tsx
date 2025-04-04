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
    "3n7utHGtyQLY2nWS25Fqys2QrtSunxbzHVsqXurPhyQrgSuWchtYjAjSTgBhcM7tVqNHkjdTg29g9zAvCK4Dcyo5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JFeXhCAAbo7S9Eestq5A82QsqSmGoneWQXArEU1TJ3ySbsoLz6HbDc9Cfrc1fwE2nnw9Fu2nsLKdLvssgiPhRpo",
  "key1": "4npgCLU3QU1A7QNjDaany66VBvLLPiCmo7UFvcD7mfRcJ6UcpMn76NG6aRsB5W7VUZFfwo5g2oFrZeSM7oP9tNCN",
  "key2": "243AVnj9GBKZQiPF95RqYLUEmVWsUsBGXRCkBC3G6WdFBMUMezyiZc8XC2eDyoTcdGA1HvfYDkpVdxKxpjUeJD42",
  "key3": "4pC5yR5uuCtQbs4863akQmVAosuYrFTJTdsEDzFnFiq2QMjVJQXWuY64mShxZBKYaUZ6USEmvb4W4eGtji5QhpLM",
  "key4": "5M7JdS92f1LzSFDtpZ9rqR3mWBTryqRRMj3yVMBG7zshPJsMKcthtXpRNtXVbJjyeJdwfWHBWXtCbCbsifCAM8jL",
  "key5": "5JpXwghdUURvDVRBj2PYSV8hwUeLUuiomh6abrT2oNv7qu4ab8ZEv1pmdYTNEpy19NCy2GxZR1wjqq8pnPZ6RHnh",
  "key6": "5z6Ghgs8Cmo17KQrbnDyc2QMYiywz4hBB2fUwR1W33A1ntBTGB7btUFXAxRkbF32HVUCgpUe6HgsYswbxyUPaKbN",
  "key7": "3r2CQA6pEHWxhtoGn832scKLsgmL96gXMY9byffLNESrs5rqFdPiLzA3qGTyNGu2Y3zxfgHGqpFNUqzk9hYqiR5N",
  "key8": "2dpVifnXDTDzc7c5wNd7k5A1RZwHPA1r6DDUHuRijagEFwsyRhV6M17PpVe9MCGjLuc3eQrTCWDTZNQbhLFkN1a8",
  "key9": "4ELCGw7vv4MVV6PNZNs3Chf7BxZWVaFBSTQV2MGaFDKaLYKDKt3JwJWroStQdjNWKedym1ADshoy6DAQxgrumkCK",
  "key10": "2pf8oisjGSKcwW9rgTYQEJGtQpDZFeRgq61WfpF7AhSayKx2e6WBTRw8KMHCqAU9Um4KLmzPCBzFy1M8QffatVCY",
  "key11": "53h6g3uq4VgPnaAHaBFGcHdwXGcniyhezC1s4ootwpfXTQsdZ4c6zenycjeriV6wy4QjfQwGAzo6xXPBTNapo977",
  "key12": "2uw4kYEbx86hJHcnCYrAEv3x8B6YRnTSnok6Y4ApmiRYGyhNivBtWi2y6dKmPLHqLQVpHhatU3BaRJHVeDdLemAv",
  "key13": "5eTv9SgyZjUhrtNzY7kqtq3JLserfFEkpVKAzswfJ6xbn4472P8t1Xg4yuuKxkZmwARQUzW2Fnx5Gv2HGzFJsaRu",
  "key14": "3ZEK9ZEPQqZZJ7N1sLu26JPLh2EzsrqUddhTU2NJPBvRDWJkJuacgrjvT5vBiUk5Lt3ynkR5Sn36H4YbtRp8yQGA",
  "key15": "3ak9vFX1xjjNVHi5pJ9wKfk2JN1mhG5u7a46QVgbQCYgyMTm6bNrDDMb9CAAyM1uBV5fXg5mX2dtDyUUP9kUtYk9",
  "key16": "3SNy38oxt9xu5i1RKS5kZ3w9LSkhTQiDn1dgsrB1pkgd51MNFnZ4jqYv6P5EMJGRpqxJrSBZnL2fr3cvrWqy5Mmt",
  "key17": "nhjRdr2Ryt54p1pmHhSFeuaxPbnUh3dk5euHkKwfYix3tyuYTx1ZW9KjH4qhXPBF2Db1qnDmho4HFtpb8ACL91S",
  "key18": "33Kcyyc3G67JF5KjtdxtvPyqa6uimiUThU7qy5eGjcUcCo8WNoxTD56xA5dTuE7tCY8LBzeccVyZCZgXjrDFzD3e",
  "key19": "EzFHGUXjWAL6cJDdVTgPi2NekcWvBeHpuFWDVEmr7tEhZ8EZKSUAnZLYhw1q645qxBhPEo5ZdEuVMRYmd9cpWcX",
  "key20": "4butog5et6JXYXeTMBaVCyqUjUaHSsFrRvtbwRe7XuTBqmzqyan7gHwsqLP7rQNSFAhis5jHuApaFYaZv93dT9Rj",
  "key21": "5uExFaS1i3CmdW4NP1H8eu35z1mxF33Kq6tbqhk7ydzEBv3K1hob28dDy3uVKdGb9FYDhWKfMqLgKteUbBRbXDgi",
  "key22": "r9nx8yCihbJGjDfM77KJGAehjFsMDBdwxKW1tPHA4spWteuXBwrFndhh64qt7Z46rNUjGSVz7zh8MRU9BhGjyfP",
  "key23": "2Muf1mZCTBj7mRmJphAfAN5uYXboZ6Ymz6rizxY4xiPYBaqne5QV9ELVCuZ73shxpzjdwjajQjaco1pSo2a8AbUn",
  "key24": "2zDBxamfJrBdNx9JEnZev2dYLziTnWQWbdRmyAhzsJXcfaKtVqz8KqdPpC4brYinEuYXYg4UPNpkK5BGjqoTMAXS",
  "key25": "4r4ihA1yFPL9CrYU3bJbEXcdCeKjCWDR45hoFhBN7oPgG3C5mJk9rvSwRWfdrcPXKXaj4xVg7D2M9p1ETAGcM1qf",
  "key26": "32Bvtg1kkJ7GFxCftpzyLHTjbmEJdr6kCStM6gt5zLyzp8VboBzdJkpUMLdsdJc2veoVpU1ySmLPAvDK2xqcs2xh",
  "key27": "4VfnkyYwVpWw45csqv4dhP3KXqJrZaEfWP32mPtghEuS1cdWcyvCHZ4FY6Vn1VEwRxFKkXrDjHfibYTghAPNwLmR",
  "key28": "4AjnqyHyTAiqp2KgxTFCEijcP7CCKMNPrYDuXhopRoXrRJro6r1tigsskGT4gZAbjYu7bqq5ap1CaezgEn93kzJ7",
  "key29": "UhUrgU1jbHEkVAbVrfNstMJC6edQqv23Mg5iR5Gee99fmJYZUJTjtqJYdV411tcztq3DjHSQCNTbGiWFg5SFR4R",
  "key30": "5ayvcre7SMHpvo8EfSgFjfNLKPPYt5k59G4F7nonxa5SnMP9WXq9SM3k9fbx7FT2xeAvkxbfcCBn7NdJQLfxMZkV",
  "key31": "2AMwg7P5ZgpVkwTzUMHWxNLafmoopo4zLb52sApTtNor9Tpy6PLD6gZcpdGtcY8M2kCdHRfFxJg3ebndUG3SuJ6g",
  "key32": "2BaTGTG2CPLjcaZ14uhS5qT2EjrJwKuDC1vQwEEeWcZ4EaU9ZgYJR9NyiAHT9oVCSEvHuegWvTPpcXcXRgkKLGbn",
  "key33": "2BKs1tcPMx2beQRKCgCtxi1i3RRFKEKadVyiin5Q5WKMmgnS1N8kyrHDv5At8nXyWXtofoXjgHnxWbyhTZk9vitD",
  "key34": "bMmBRFJFKVuAhWys7WLB9NuPbt2T2vJ3sA2a46bFv37M53yAzixaTNizxswkSXbsYkqjc2xxMYoHanSzf9qJ3pJ",
  "key35": "Yxw3AqKF2Det4jXGRRH7pM8t9YPK8iihsAVGBXdCg2x4qTaNZPtNyipbt2UjXZdKXm7kosAWtjjSXEPY6E8rmeq",
  "key36": "3DHtuWJxD5f1qmbDjXnko3eBFVRWKpn4VFUicaATdaR5BiHFSWxosJEfDb8d2wNWfZwN9rfcMi2NDjWfHUsNKDKM",
  "key37": "kPaQ8aXWsjtpAcPb9YVJyJQfyLCMTUpPAh3ZEbiVJXsgEB2ZsyXbW13XcySQr9KhCZrGAHsUn2fjEiGJZQsu6Uj",
  "key38": "3ZhFeAQhpTrMNghX9fpKLQsP88bNiUKGrFjjf8KFqfGvaeTaANdLPjqeTmxxFg49r1qXpFtcZNyjMp2CEGPqiXY9",
  "key39": "4tM6jm46PPDg96KcHAnvHdum2yzYRM5F8M2gYdyijLVVzUUoor9TNDe9kohDec8UJ6ZiUXoeKudJbGEnU3zDV1yr",
  "key40": "41fhUQAC2SL6vKDQdssVPH2AwPK3ph9otRYADjYKCoixtzr66LidtmSkRHDx6czQErFgk8bjXzjKhK5TvMtaujU",
  "key41": "5xuvv1fc2oQzj56hg9cTYqkxkW37oavoCSTiMTHLajjqxtT7XEkKittnkFug9CXbMHPELbaDmH2MnzbsF2vx92Fs",
  "key42": "4pFPY4FTu36Q2PjWiqDBgX5Pp8kwnjC2Dxubpv6USLDbq2NGzZ6sAHa9aBDNh9Ei3CsGwSghA9ocaYQPjB8nCTTr",
  "key43": "XLhdGKCdjcULr4uCukYa2hXm7tAM49LkEfYAT1P4stSJ1GuhkYBmHJMzgvDskomVm4reQSnXw9s36pAnpvc1iQp"
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
