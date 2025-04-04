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
    "bymWQv91ff76DNQ3eKMVpR7U2ooCdBgxJgEGTZKZ1CaJcqGUaEp1iUnR5wXcKo1MMdut5RpfMbAd5ufZF7zfpPT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5yrrT4FzcF99TctZ6WKojucvxgmdK8yZo26bta37r15U7DDKfiBZXt8iagaRjZRwJqRLditHebFnBWZZvxf8Nzig",
  "key1": "2o8ip1CyUTbYbHbqvmB54W1Ga7jJV2LYPei1tgWsoSbibDmxPDtTaw9KZa6ne7J3hiTE6tDv4Wz6aaPTtTYqHW1x",
  "key2": "5kgJTiZT3Dzz9gdJT1Zm8avZVrC9TrVoiGtJj4FWCnnYodpGsXpvgMwHnpWyaFVudCfLmrtC2x9wvBX66dixMwJZ",
  "key3": "5Mm4AauphMHPUv2knBCWJWRZjBnjw1k1e2EjAQu81KN47rrFthiyT4L8vuMhqpj1yxaF4CGxFTT3mabpupvAYFi4",
  "key4": "3TxPx8226Dw7m8tDq6TuTkoMjaWrW7UuDUjs3brLZfcBfpHXkjYeZ7qvGjZ2Eeu62tZaVVn4fUPZVB3J2ChNhtgD",
  "key5": "5iU2Lkr9msAmm6ujmKBzgwZJne5xD5nV2358kFkiszX3N74Vu14dEZNRyGXRUQ18N3Gv38JJkzgrpLc4ws2M91Zb",
  "key6": "jtSJDgqYXeg2WMmdyUeQ4GVjaMag2U4MJHisAQEQFTvwKU8igT6CeyRkyKcNznQAAWiP5MDanTvuyhFn8ptBkms",
  "key7": "3dLgpoGfstNVQmxYhmFhRrnHNDGjZ9LShappYwXTm2PFp2foJTWjvtL6K7jWPcH6h366k3cpThwhVqSMd3kVHm7k",
  "key8": "4yg7DTbPu9d4V72rhR59Wfet53BkCh2pRnQQfkwcrQmoAMa6SgUmo7V1nrTK7Xtip5bsppTozEY973st7VdLecUT",
  "key9": "5FFdTfoDPr3AXRMCp68LRcGpnomZc3SrybmqFKCLnRUx4Rcn8NyL78SdJstwDLnX9soxFGHDpbZpMvLehG3UmDHz",
  "key10": "4DXpQ1dv3QRuyELNevipqcdxjq6NrUUbsFcpA8cSuhoR2J1WDZDB35NJmFYxeAGSeninTk4H1CfmPK5fagfhn3CV",
  "key11": "56m6cTUcvCBRCfUY8P2s3gFsx3zrmsfHw6B6ofpABs8uVJKe25XJcFodvXRqzevhb3FvT6wo1Dm6ApmruNSfvATZ",
  "key12": "5HZW2aQ8bH72PqGNPn44NZuHwo44qZBKAhAk2Ms5bSuGtDHXwiuKUz19JGFC9p1FLMiV32PKjAosyBdkyJayWSQa",
  "key13": "4gJ1Rq5jC2mNFJh5LxPbYdf1Rf4bTc9YiMSo6BuiYMP35qzYQreWLfQM1JHUwQgut4AaAKqTye8AJpaZh8yu6SeH",
  "key14": "3nH5BFWsMUeAPdumuZiyDFnFBPxCTNiAErpnGiEMvuA8TwpxUnMDrdMi9JPyrv3NAKVQRFLTRoSNEPh78FGGUCTR",
  "key15": "4M3kBEiABnDiL6mjgVCkXgberWdjegek9kb4NasSmHN63oShRbYyEq9p9iweTHVoPEaQFhVzgCUEfz7KCH1gieMb",
  "key16": "4aqCbdazzqyju7FSV2qgBfUeFuWSXFTMkHCEv4JN27GazsVBP1mMjg9nqiiPSPh6VAc8AD4ECtytzRQrZNvzh4as",
  "key17": "2w1Kxej3tmZ6dBcCMD15foPSPRsQ223zV4bqSz4eXkM2NwkunUDdsg8pVNoh3JYj9jRhTpdno9Yo91FkWVj4bN5o",
  "key18": "2xSBQGGQ5cofToMzrSZ83TqbsNxQCGeUZSmQ2PQ1JUuCJL4TxSWergvJuCJ3sJGuc5iEfdjTqZmbxw9167zsauBU",
  "key19": "3zLnZ4WcKAS13jqfPGgPa3YpotDxd21hqwoKg57du526YXwcN9642sQ6wnCQYipdQ9HUxiLEtKVZmbtvpEZCySrm",
  "key20": "21jJ8rr4eDLLf3z83vuTnJCr9RLGvpEGFqawmdHv8bXFjcw8ETcAYokFbNzqb34kQ92oMVDHbWU6TnpzHmpQdUFn",
  "key21": "4K4DEFqUdf7RK7Q4sXuVSDi3BTSL7GE5TYvQdBGc9kHMEAsPCG2E1xcfqodv1QVPh3St1yx8fLUmT8du3v1s1fKb",
  "key22": "5n95PYzU2DUvN4t1Z3a2SJQntJ14fGz7RwErTcmsVPkWU19PMu86L8u8J4xHpK7tpC1mowc45kXz1W1otDjoa7YE",
  "key23": "5u8UTof7bTcoxGWdpqVxHEaG6ZKs2ihnoj8MpMuqXsDRVfRj3zRL4uEdYcDmSBhhNh4XdFNqeUnpWKr5LXJLe7rE",
  "key24": "4gWsxGFNtjTgogMyrDXc4yQB1kMnAi4bbEghgv4HwwFwNp9hXLqmfLLpQBEg7Cn9Ypm1dPASzZYoyJ77U93FFDtD",
  "key25": "5uwEENnFGdrh5Hmjr6aPTEw1C9onsmmAc7DQm7hd3Rr2vym5iyyhUZ4dBn3e6Jo8uuX5sitQzZwiLaPLjDaw5YNF",
  "key26": "37bKVLiMex7cdLXMruGqBNmwj3xxMgjShnEEuw7mFhFWxiLshxEWKyKqnqfw7tUzvtFKMwcGUsGVxz3RE1hHXhVo",
  "key27": "4BxqfqtFumeaoxkkTYnrRERnwxN8vaKGgckZ2Q2TEd72dNMx2rQKhLc8afL7Fao9B7waDFpnSETFotraunhFtp1V",
  "key28": "5WE3k1KqJar4SqSSvfnobLP8uYCF3TeYdoowBEjAPb27eaHKDd6YfUHPPS3KwS1PSSTMN1k8i8idSeSr2KBgAGNf",
  "key29": "53yfRYxGTBR9AZPYgZUNHUFBhKEdiGq7bM85QTGJXG2FbmVxQVnSAhNRhCuSnd86MXr3wLhySpDrBVjaNc8rXanM",
  "key30": "5oqcNKJxKwLiWLLaLKhyPsxumha8xd2njyESKUoVruiw4VXrh2TNAq15B3QWydZg9bKgnSzY8qYSSoHrByyjdnoe",
  "key31": "2CJu1yqbSqeLGh5yFVZLL6c6iyrm6U4htb5APQJMaMccFpuP2fuZXTAY9KCfwRuD6Gnvdy7fvPX9NcwBncLyeEQi",
  "key32": "4T2wMRbABg7K4RcXuAizaWuMnVMm78bCvumF7bYYMwLiyWjYPHXwVz9NnvCEZSWJayDbieUfozcGG38DB3KsQB7W",
  "key33": "2GWEsk3AYqGzceW62g6HqGaKva34yJaKoJsnnJnut5skp3jamHGqADpAZ1mD39iGdfPPSLkAQBD8t6xQejMVKcbE",
  "key34": "4T3M3U6nHv4aKKpjCzDYocUEja7MWiGYwyuGVMCbqEWcLxCHj3Y6yCGytCAMuFNXo6kdMLP3zz2qAe5xo494eCGJ",
  "key35": "524JepcS12oFu6gQoXr46dmPmxVt8jmd36yeiCmtm3Sq2XgWuWaP8EZZbkJXEebTseowexVL4wHbgkJXgp2VMTGH",
  "key36": "582gWfrkMSUyLQrMDFm9SBHzRng8v531ebJWnP7fBjFZvrjZcD8BgUTabuDvrhyVHLDohJigGdgPMVnY1fhqkyic",
  "key37": "4381XG67ugGJQSqUhnS4hbRpueDEiYt49sWxx38Mu1uj2TdwTyKCiyibCHabYRPvtLZKd34JyZ5xpPjuX9phnSFo",
  "key38": "462E6do3MpVULLgV3Q3cnhYN9xQHqrg4rhdYooji4wUAgNML89k2bvCmRdxP7n4RUMr3RDkq1NhnmqdntSHLQ1GZ",
  "key39": "63JoYA113D7MpRv94FVtfiaR45ke4YqHUVnkWHtfXdEPcAKbXjZDi6d2wKv3eR9wegMdptC7cT5DZGmu1qd3mNEx",
  "key40": "5C7dd4fbhG6EDy3ddw93RKNFj7AJ1WKpxBk4f6GYXoAmmeAXDEaB23Z9ye5CUktenDCMBFTya6wmfwm3V8pqDAbi",
  "key41": "V9ASXQEXvknNmtaFsVy8eR7i5MfwA48VzvBZVm75xkKXz4c49vpjmwBTiLJ3zYUEiffdqqvpqWq7hajfnMrBeTZ",
  "key42": "4yAbqrW4JyzkEb3rbUKxv97935hGReAaDxnYRp8E1Xm8hoWWMr2FrmGfsbDZdnDQat4BvcvbniCttF4d6seA9kAt",
  "key43": "uPjXz3usHWt89xPfp9Tx4S6G7WaX9FFyxXcerWCSCHktroAjr2nvzukNAHbQirpUzAv3Y1am3LW8qVAv38xirio",
  "key44": "273KfYxA2KuDdW656JmHYGSbkKxaFeGjfQjPX5qEDXAZ7gfA5hymKr7MGekWJGGfwj747EU2my7iKbpxpRvunkqZ",
  "key45": "RVgryqr5LbfGUd6D9kuePyzuKu1uhjaAeMZroc3LdHn25fgjErEQ91jWcucBTQt9vJkRiCaftaqUwg943ihdsH6",
  "key46": "3pJDnSs49ihzicRzsk1ZxBpvetZryQj6z4Q6DXdFzSdm3pS67ME6kZumJoWfs6LmKCwTLvV7RUydaBwNxxosU8fG",
  "key47": "4fxJgXrS9AcdHgpZQpDiRLyUrE7erfhJYvb7vJZx7fuAaGbVjbojWc1FdSbCWH4wmLgShAqLYJNFtoz6M7hMfQwZ",
  "key48": "2qCtWtTXGApALoyQ4LFJSRvtg1N7kKTUaFdRR3M6thFFDnkwCWZjfXpFba9XBYmkuJ2k2VYTDumL7FCLaM9ksB51"
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
