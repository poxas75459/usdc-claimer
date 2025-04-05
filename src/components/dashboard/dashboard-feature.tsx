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
    "5cBFY1BwnEhncSSswkZLnGRQ9iQeGtPWif7XYhSSYKMEuwWgdo3jLdxMnoZ4Rnvp1ikCv8GipDDVcutgmVCCVoJi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uupH47agjShtbg1EXsvwKj5T4peeHm14iyoTAL3kZso9sJahjULEtD5YBaUVrVWcHRAVvMqjBWtSNze49RYkF47",
  "key1": "5xntCJQK6Ma5JvgUFExrktw63UBBwUZbieTCUNQ8SEJYXgNzVsChLyrubVu8KrSceBrTNSkePeykBzZgdVKJgvt2",
  "key2": "yMtTXnHMUD7auMaU9ocndWSuZNPXxARTU8c5siGMxtDjUUCGUev65PMseWa2fmsxt4BeBfH4gggDYKed3HRQdcM",
  "key3": "5m7LDarW85F4AWxiv6Up5DzB2snHSRrdw62HvNUqnhwbjH1HDkcFtquq2PstAaTetXuK3iM2ziG2yZmnFAkZRvHf",
  "key4": "5LfBS1PaRLsKS2sGiLVDVkPwZLw2V5vQ4VHjsPu6HS86pkgCWzDTnScSXYroiogoqmM5MVBAx39v9pF2L4RuEXmq",
  "key5": "4gHT3wp1WL4mqQxbYVp9m4uEy1qAcVKJsqmBNKfuRnDRY9DVKYT61eyKbz7Cfq2dddrhKvNFk1jNeVWskaBqLxx1",
  "key6": "3P629rY8meC7fA1PnoSyouqBwK9yL3TKXGN22ZgJhL3YScgpsw3ohodvxf92kNdGncyN67HAeFGiD4Pb7GmXyPQA",
  "key7": "4ELNoiEiJaVFNQ9VdCb7fccmqamXxHPXviQxz5Jwo8iN73d9JL62yf7aeFcAXq25JGMLs2cPTHaSJYQszf8rvdkv",
  "key8": "5S6YxUK47Bdkx7XQXQEMdaoKjYLPQCNT7qCYAvy7WHfcsjsqJfcPNXr9bGNH9zbEsysu7QtpWwkAk66y8wCavFFU",
  "key9": "3yYgRsAUsKSv6xNBejWv3FKgeb2DvdJzgeYP5YDBf9PvWYbHieKYrgTvhmh4z6io8dCNQusBxf7zvBB4Y6MTKtNV",
  "key10": "4i4yUnQXRxJtW9Xrqz2NKWTuTq1SJSb25CgPR7ckmwC4tXg4ove8XbUD96N89h1qLnQa28AuVZXJTybGUBxt569U",
  "key11": "5zgPnKb664PUD6nnDEZsKo1xEUbXe3F1sE6o11keYfKVnmkMkp9dh6Y78mt6yQ2DVfNscA7taFDc6HHgqKr9byex",
  "key12": "GAxmttR5jUBxgAskuLUYgjFAVQUXdVt32Sc5vY6UPRAoRgQnzLbaKzYScnqHNmJ7aiCvsP2QNtyLBGHTJwxqhou",
  "key13": "3Rj1XQeQze6He6GRXngHeTrhJgF7tRrzBB3Vv2uASZeMsaP3NHxtiGdaZ1ZMbn6Ux18UsUCXANX7fAfm16Txvoho",
  "key14": "2dBBrzRU5zRNfooiXvidbeMzjs3NQSUakwhXudURHPMA3fXGbY5sdTUV3N9y6d1SE4hKAmXbSUjYZqYt2rxRj9ja",
  "key15": "AF1KNh7HZzbJnzJRv7TvgT5KSLL5LTiA3mw5JQjXTosKyop1ggzWGHKNDMnh8T1RwkCPTZCuDEnJ5zvpwANtwpY",
  "key16": "vJExLSXVg1WHzZjhis5BZjdjjy1mYzZ28JCJAc4HFDqEyJFWgNp7sUPnS5trRzPQ2N4ELKpfKjMydm72quZaAFK",
  "key17": "2XJLR55Pr4J7VCzEApFMH3Km6SpoL82byT12xhRfMxYYVyga63CKwE3cfyynM34eEtDYEcgsGexNFD7hRYRAVvqH",
  "key18": "23dXvxrSHXsZX3T5wYSm3mScAnsD8SwBBDg7zMSjPY2tTqnWpDoyoX1b6Cfr9NnGhGoEzJyat5NiGPSpEhMgXxAH",
  "key19": "5CH3yKrFMF1Up32m9cGVnbKxJd6xxgL1YwTuJvyt2QGqvLEQaK7vQejMRpR6NaMaq8mk5LchM54EEgSUwtXMgo4G",
  "key20": "2rJzxrGB5RGRygYH7cuPC6RPnD6H3eqn5XngK6EySMjBiouxp6h4XJWLH6bWp8QYXyKAoAikhfptFS6ELQ5XYVnu",
  "key21": "2BTUicANJpYznLzD4RAuKLhS4byBBXp3KBgETxk44uNV2pLyn4y7H23XUziU7LF3Lmdu6vxnkadcM5YKyuPBVyUm",
  "key22": "4dEGzKErZyeHYkRSxoFKs7TFaBNSFLLWfKpyagEk9yVmgXHLbx7kzW47WUhZDYXJTT3DmCGGNSV9FUXtVYEhdrQa",
  "key23": "3uEnrFrVKPJ7acTTM68c5yWXVUebJhj2iWXjEYXR9Lp971TisYa1NfE6oPhzZzP2zaz4P9NGQajsynjg52P47nx7",
  "key24": "TdQpnSLRNthzRyQEzuLfTwa8B44zMoS7dAvSmKnAUjPBb55dgQNVQCRKptpbQrc9aJpmVx8av9d27pGNJbXYgvC",
  "key25": "5fwEvnYT1jc7yxvvSMPSpURjHxgQFjZoteML78h7BQn6aTBSb7ghtiMsrZaCTrGufryVgewTRRT4JjcR6HQHyoWG",
  "key26": "3nHqFuCWdYJg2xeGmubbcSbXft9rUuoTMiEYZuHuqN8R4NViQ9ruLKkee2EZ3RoRZodATmZ2Mpgc6LCXjxucFMRB",
  "key27": "5wntiPYAjrjkRTZmqJfg8T2CEAqmMePdNaGyfNxD38nD27cuGFugkmi7E56KL58ubzPBjbaZFnj3HQwaPgsVqPXU",
  "key28": "5UmkxYygEeELobJkrxuZkmbPqWozcaRzYuMTosGwEC26qTivDL4uW8oh8NAPe34j3DciTbz7BkLhBHQhoWfH6kEF",
  "key29": "5Lhnp8P8ww6fJ8exwx1eEfz66hXu7pdKijqhaFPLXM1qBwqFwk71kmk9kDPUSM7CSpP1zdxPGLronNYkkDHLPo4w",
  "key30": "41ooP7MipsB4A9xSJ94duWR9tzX9m7CpbGX1yyct7q4jFD6SbtV4LqSKiy4K8VejgLkrGsbw6BGmVac19QoMrCu7",
  "key31": "2mA2vYQ4pa7cUFdhMZzxm3rsVYsivg1mPD55Y8NQLSMwZdnDNz8ELo2u51AAuLMHMb2nBwzdS4qkg9syAnjAH91u",
  "key32": "4BWmP2FQsy2ptoSgufh7DWPgGdAY12DLpxe8MxkjLSLwZpj4ZqCnm7muEn9JYafoLXxwPmpRZfEG9qVAxjhoMn5w",
  "key33": "4BUxKjeFzHK1pLukPMZMqesDWn5G3uLXNChqqtfdPA7qzmRC8qG52wp6o469Hqoizfv46NJY4eXCo2cF6fwwxy5x",
  "key34": "4gLhZU4fu7DPMGefidymFy7Zm5HDBLhTcV3ykVAoyBh6RFt9FdmUHziEh3yVs2UjxHEsx38DMVxis9QgyTDmpiWg",
  "key35": "2koiBSwfnGxxYV6yesMnMcLqLipvhWmHTguzFLpJXFREV5XjuVML9bdEDJXE1pRWZN2ekTUs6F3zEbmQSFmdRUUD",
  "key36": "3v6EKA4F9GmswhU7zjaAGPAmRVNuUaTJmScWYicD354Wqvx1EGvQ5abDfXzNJDDqsiY5im9PmT7sXFgQZJN9Ugmu"
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
