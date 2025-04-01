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
    "363HakdbQKN4N8wPh9k9aNSYFZbH2jjnnFvo2kjna6MVL1u52RMAEMxxmDkBQvMEvQ9m5cxtmedLHTXnSxcuJHYr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3AW3F4iyBTAj7X67dJ4x6mQp7X4rUQnYQBNPaY8J3iavdsCVSz8iosZ9EqQjNDc6ShB281c9rU4tSDZQT6hNBfio",
  "key1": "5eXJC5RRQfZsPzJbaFiWVix5iuZ1RCSnf1Eqe19zAPphHu2FccN6zcwaWwiyNZsYkup7f9owr8RbeY5gH3xw5jvt",
  "key2": "47aD1fYV8ejMHuXc3akp6P6a7NQn2d8o1GeDih3enRDVDEmv2tFMMcdKYJNGZrPo5Ycjrjve94ygv3Mkae8CMPFw",
  "key3": "dJgEjp2EcWLvJbRUMQuGpaAP6R2KhZSaws2jiZSMGZ2ThHeRXbNNAmMaMjPyaHxqmqetWuqzJZgYouLD5BHPYcK",
  "key4": "3oBaMcjx4HEQ35VYmwwNRLPFMSbHq5AqWEHJycpbWhyiicXtcSMjUr5opy1owc4i5XmBeAVzBAboeMUSTsPxqVfg",
  "key5": "3FdiV6M56DohSou2wijPVYHbomUTzadiLxaxynx39GiLw1fNKDfhym8Pp9wqUx3zRxxcLcQ9J4YaxtRWEbyxFtGe",
  "key6": "ng1kGyJvbH87Cx6cGMFyGpzCPyPT9FMjUCMptTLf2FmisHS6VaYe7JRAVmVMJxZmc8moZ9rdsafPsUTtLXBoMgi",
  "key7": "32osmqpLooSK67GBGMSrbbHaHWNHWigt8smMRmm6qyH8Fufk4dMGDia1DwPg3e53qJCptumN732Y6idsya5CKZDq",
  "key8": "2oCmLmrY5CrdKA4j4QQv77R5Vx4i7AnQxpgWePve3zayRmHXggE48z1T3Kuj6Lsa2GxsQwHz9D6pWA1caArTb2xL",
  "key9": "mhUdZK1tJJCwJfTWpn7e1qNR8e4bSgCLLM1iJaWfgZujYhufsmZroEX7V5rB5y696XWrcjjwi3n9HUVzCri33dc",
  "key10": "3RBCf2LS1duaxQpmodDNBtNeKBGVXd1fUh47qsWcFUfdEHxrDjWQHNp1MtnGY2EmfQChi6KhAbmfJE7KdKuR9Kh8",
  "key11": "2tB3dyQGWVTWd6kMhfWtnr83PVB9Zn34GQCf24zuJg26VHr4tX8aZv3gF3A8NuHdPcsb5j7uRNCjHEiJcAro2qYr",
  "key12": "3K78q7rCfEyxD4pKPywLAhcY3nw51om6bSUsNypaNEq6CG3fi9o1956Mg1rjGtUZ8joHUM2qaUSJHKhA9S2PxPo4",
  "key13": "4oyatSbccTwD2r9hfUwLzVKbJ5XiLt2tzbVHtRU3KzzWAaGTo7rvn1rVqwZ8myExG4etfQPn9ucRYcHNUy2KPSTK",
  "key14": "Fb15Jg457McNvsNCa8TUAscMHZkpJVkAa7EAPXGHqPhXTHJvQSHwuXQmsTwq7rK1Wnfh18fsVmeSZDCpda86KUx",
  "key15": "5ZMzSuBtAyaFGyAYjk1pygobx14iEx7GURgPwh5gxrKhC13TC3HQXtN2GtE5Na831EhH5wbv8S66qJjrTDHT7WsD",
  "key16": "3r5GgN5Nt6vTx35ThTNZszAc9jxMyLEjvhuM2pThVT7eCbNxbNc6obsCJ5FarBpypbu6tFxW4rBYnENhjqdeBAkY",
  "key17": "5kRyLANRxRSc94ezKFQhEL6S7d3mjLUL9Fb5q71yJkyTzC7hHQXvRXF3hsh13ZxTcstQjKFBgc6NK5KE1m3xGYMP",
  "key18": "4eQVKRD8d2CsPiixJmL71NCKpyAn95MfQDaZZjADc8uNLtXHgK6iTZDHz8wzseiEqGdDYG2H1PCEWxVhyv9mCaJm",
  "key19": "oMF99sSFNvqqVU8biBXPPaXxb22KwRJnPwC7U2sZtKCoZ9xbAg4xf7AFz7R2oMjmMhAB92QQEQZugvVPWyNsHxf",
  "key20": "3jPnAwKJ7JPiHTVySjXQnTw3HwieXccZZXn5UpiMYoaf88grXwpXBG6XN4QzhojXi8tNwT5XkXiiCFedsz5Y75e9",
  "key21": "65y7ARBCxq6ZXLn97h8ofVkMFKSiU5viNSF7w8qTgKBtnZbVLYNNzAHUzevtJaLrS7D7j7tBa4SsroQ4dX5i6Qm7",
  "key22": "3jsGFKj1GRndNKGT57au3stwYNUbDSPHYVoP7viM6fz2fsk7hERMKhnYSfHpUKGY7wTukPHGijF2x8KdCqc64Ue9",
  "key23": "4gyYCoyRcyVsEmzUVuNMp9wSZBh5D34JH7sjvD3X3vFu6e2CEods5ZpnjaYM6BPisnupne8ZVhSSrGe2x5GknbAy",
  "key24": "2Y3KUa8o3UfWVfeUyQeXuemwBPBidB7NpuQNnJjBJVA1oaZ8FLzdzs4KTikF2vRG4LivhZvby5XjYE2kB2ksfTjJ",
  "key25": "4uEHBSsCBi8iXGryWofHSskJsYbYhjceucryPhNhv4Nm78ktHnJU1KHoZkXPBf3wk3oQHAnnuHu4tBEdjbRSpkKu",
  "key26": "2SzMq6A3XxQAu6JdQwaEJsT6CEsG5VEMGWoB2ttVLTftoY8UpDKtcGh42P9JChh1qGBKJbA1LVRuBEQoMP3NJkzt",
  "key27": "3HrH6FCVoMbt8AVT2wHXgiQMaSzf4o3xyFzDsD9VnHg1ksAW4iSziLjUae3o3nzUpA519fvE7MG1K1DCYySLmUiR",
  "key28": "45ZpFsn4qoqv76QLYBtnJCA7XQeK3515gAHXEfibquDUAvv8BtmhWHkKoNxhMXJBbLALUFzp7Q69nZnNz5Pa6rRJ",
  "key29": "2JbYnN7RPjmkS3fJcmqkgdPqbppbRu9ujgGuiuNYLaWEvRubuTaqCWoQaQxJEVVhgKkQ4uCjRBpm6C6TGso8Gzvw",
  "key30": "FSSmNBM4D5mEMM2GreGk4xYwjbw78XgvisKJka4yiXEVyVBWrhtLAAarfvnjfZNSCLtz7aviymngXetLfU8X9gv",
  "key31": "upSsp4XRCR75hN3LoP3zSJ3bf5ietVz1bvyp2zCKtDXhozSzKGvtn7ZTCkwDSfp1X45cstUX12mCjJak5yJ828o",
  "key32": "5n8ZnCpzRRZu6RKzmEHEUqe9USM7mFbJv1QzSmBD6aTWyymUcaAucy1igWxT1KLMcECTPNuERThKra2dCQSa1j9D",
  "key33": "52cBPWXDcetcfcBuuiJSSKTWuSWUVrd7t4hJEGFBSRTwn17ZADSc4TBUZ9yziiun15PJDZ7YGawpTZt5wTqiTy44",
  "key34": "3GRbbNKVHhHSmmt5MY7H9Bd8pSHr2sHCty84b7ryX17XC1Dtu7ijpdVCEtH4mvJ3fZDL9pbHNoGoJb86fjpAW92a",
  "key35": "2r3vi24BvwMNTW8HCzT2owcJXDAdnYjwrsSxTtzTQmjR7aQKfDjveRuogikjrTC8GBrL34qHdg1hmh85vgjnLGKC",
  "key36": "3fijnauMgWvgLyCHmydLVakpngXvjfms8GW2SeGePp6cSJc7LuYJcYyaSt2aZaKmzivreP5Zsc7TLXxvBdu8G2wb",
  "key37": "516wTjg43yozBHrjnL3GbbvjK51YtMRdvrs9JqQtrpwpEyV7MLXEL6K3fcXZT8CMTofY7bbtnXTtXRTKC7P9zyqs",
  "key38": "GuGquFj3Xe5sMkDfjSxnoigwYmwbHW4jUr9xgy9uDmiv7ZAbRATdsk53FRKNSeQPRxjKnGJ6ZcFqP2zrtBX9d6d",
  "key39": "5Cc4K6mGWZdpYKQQpjkWgxBiHRYQni1rhS1ZrkFkMYMPBUa88Mc59BRkCJnWEr1Fdsmgqz3hx9ZpngV4sTbqzu91",
  "key40": "495PNRVD7HD5Pfu71qDUfvYc78Fz2aEVbMbtqAJv43KCsB5PDaeUkT53o6SMNV9RWPJUgzvGSFaDWyhsiTqm178m",
  "key41": "5mrb4wb7gHW7Bia3WRsW8GKQeCSjrv3AvTMVGEZNbP7SSK6zgByMmeueYwn5Yb7mnCoZbPAgykg1uSM7EJCsa1Sd"
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
