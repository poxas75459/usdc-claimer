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
    "2i1x3KQwspeg8HW69YbeijLhV9gzh1vUTYaGZdXbjb6pSiHsSAt2f9N9XvYnQSGVBYVvgCzxxsHQaUi9WzAcFKg4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nvNEsKYxgKSEAzfTGPG192SfPeVsnEwJ83aYVxZFc4zhniLeTqbamerJapfTnfeg1YXVViQkTg3VQoN51S1WfMe",
  "key1": "4bdesMuJqLfQWGAu7uANvG4WgRvx8wLZogwMu84XEePM4pAUHbuZdqpn2zXgxYdFsaR5e8MLJbFeaCDZ5gmipLtV",
  "key2": "3FWe1Fyyc2umnHrEGYyuHCQqo1MJp8h6rfKjprfcVgSDZvZtsYdGHR6Ero1tAg3jC4eqeujbf9CLJb9wT7N9Ky3K",
  "key3": "4m1M9YJyNnP2ga6ao8YP33Du8QqNcJHL8EVigbJZrAAeVcwpvpswwfTtZdoyHR5hKV45bT89DaHondizvPdXfAB",
  "key4": "5SU3QU8jfz69fDKhNQ3mtL6cjf7dWC6wYjDzJijC8Sn5MxFXhd1SVb5hnenjxAqZ6Z448oytRLjwQhCNUk8aHuBJ",
  "key5": "gAKPfbYgVhfGmQDxRv7RoQn6VZKgqxj9vuuPa5qUdfyxk42NFrPt3rh2YpbJ1tqbrgpiYQ53uA1sUEqt1LfpEFs",
  "key6": "51ZFaSVhvnyfXcWYHSBweU817SEH4LJfo3kLdUDSjZ5ShYPFd7iMJq1uEnRhqxNoB4Le5AFmX41UGw4tjGkaH1DN",
  "key7": "R4CH5NEADGg5KoGyYwpJaYVmQws6kJ62k2ZHySnyawGSsiqHzB8eHhG14KmoAVTTmXXjY7Z3yA14PT9ukGfivR2",
  "key8": "2iQvBBuqgVKx5QDQyZ2v2DnvLAaaSNiiD4vxcCZnAEZBorLPCkX2u82qRyGfZHxXjx8q7SjgyHt4ubmRa8cwzHSH",
  "key9": "kCKekLMbfss2d4HRumERCNrapJSU5QAJw1Bg1p63eB6DK6fFqyGuFqw7uMSikBNKup8aKnsxCYyRXTkDcCGd1Gb",
  "key10": "tC4LaYivPxqkv6WokqdEGPa7p3uAXs9KtDjF9v7AWnZ1jvhzcCB3JGjAs1h8BgcgvJTVEwVezbAJEtCGPWXcmJR",
  "key11": "9ieBNLrzSy8zhzEHcH17nZyy1wJxxwQowuPJaQXWj4EerUP7ngMtgj9xsNpy4a1ExPHcu1yjrn2cs7LRQ7pyDa8",
  "key12": "2bup5VndTzy452K1yanhV4591Couvc64oEkHfN83fK6WRgdDhyqWkVjUhEvmad4jPC7LUACH32qpnF79ym45Gvoo",
  "key13": "5zV6JGhq1B7i5A7dJDGXYT9YeKqxzXvppLYG1gQf2UzMQiQqkMPk4wsxL2rWZxWbF1XcT1cDtHRRYAyve7zc3SJu",
  "key14": "2YsSGN8Fj5nrSBUo2KdJD4y3XrvcN8jK9zD541gv68Su1gznvb3DG1e5pkWNUKSXTxL2NAyx6tHCknW9JDsDqWHA",
  "key15": "51dmLKCY1oCTAdrAqByf4gDJzWJ4oXJrBNh25matf6Vo2z3x4nf52CiQgk4LfAXbCNYuzeyiPHp74HtPBViMo1JE",
  "key16": "4HDsPEf2G2NidhJ1YhhY6ZLRd7dTmMmzrPnYNoPHzScAEaww7waibwUQRT1Ae4ZucNhCwUgwNkNTQUvbuGvLY2x6",
  "key17": "5tMPvCH9RKRWqnwaM6ByXDVqcjovpHRqpEn9knVQhu2ekzZBripkxsqFtXnu3f4kaHTL396bTALxbpvaC1w5k2r8",
  "key18": "3QVgXkDQwNTBzNCSckfX8F8WNwC2dQcUeopiNSGqNh5NMoDtUwgoyNp2iJ4v3Jk2eRFkuCcPL4V4MLmFjdcYxtTb",
  "key19": "5q1QG8rHq2CbKykcAxjZbGgtWvwD2jLcwqGueEcgq83Mx2tK3CzcULLVf8wK5ghbVapD87uohK6FnjCX6FPKNJK3",
  "key20": "4kf1keeivdr11G5L7euybLgXGqF6b2riNTzVKpwnvVPwVA4StjSxo56g4PGxribFx2pCnVXMZjBj7xRYMPrxCKSz",
  "key21": "cXqRL9V9RYzR7HwBajqQo5gBrhxwrvDxRsLz8Dd7WYWtzaYrz2QiRAUCsDvgT2exXLdytUgrkQE1dHF4BM3546J",
  "key22": "2wuikeu9qBNtDNY35pTnjewCUidi6ihJ5ArWQdt8PZyWJcATPQ4Xhk4xRFiji3uCwL8KYfNoLmkDBPTPtx2dvm1P",
  "key23": "3nEhpcC6jAw1uUzJxpvKHz38YFNxNh4xwtSxr3SywxxMRjiEem3CjN8PZXnNTFzT7tpEvZbqneMTDhrB2KXTD5Th",
  "key24": "2UgiZHszkpQyn9JUGQs7a9VpkmDaWzWehEpFgWqju2WKc4zuZuMPXiC9tRj1vzrb6zhC1DjNPhfWfBrCE1ae2mtw",
  "key25": "2K8PVB2rw4QMjUMYWPLEd8Axmnzirc6HjCguMRTEgcAwbMQh8QjjTQ1wZdXv6tXcP5faY4sKEnSJeW1w9ettX7v6",
  "key26": "2bcPmqCfX8HD3huDH2a3LP5AgzVXth232qQobDrKR9UrZymJucFgEvfejP7NDtbGMTN33ieTX5WaukTCnnwTiybF",
  "key27": "42TazjydUd7dB8jd4dnEyAbr1jQdHuKDuk6Wzqjyoy8An6xQj3uQ27wDW4L8XC4U81Us4vHu29ecSgm8nDMX2TK2",
  "key28": "4o2d6HXS4ivmzeZfMhGwjTqSiJ3wRJRPKfX7BwTQzS5unuvULyC9jbQPShkFzEMB2y1RhY53L9ic2vLuAU9FhHdX",
  "key29": "2naLpErDDUx8vKwp5jTGS1PsfwdMqmCr6TuvU9aWWKvZpiiQ4U67nDMrvEHS8ZsV4DagBzBJHDGD3GFQTVaQuZdf",
  "key30": "2ANrmS2J598e9Ss1CQK1zee5eR91AdiwKo2ikiJ1C5YdMs3rzCsPmZwE7VsikYUxixDBz1DEdubAyBzhSbPXn9Wa",
  "key31": "3hrDydeVg26WPBdqgsW4ndpY6iGyocEGgPJSDhMfVpoq6oVcuud2xSbDEhYHJ4DP8jnyRk8f11JcCPzZbYkBiRoU",
  "key32": "2ECFmRhzBouMsrfvQHSE1XwYGxLX5zxHEuJRUG119FK6qkYgC9MKQq5aQfYHKrySfebYgVGHvAg2jqtEho1bQoAU",
  "key33": "66rQJfoi5CVLgNTsKYygNCJwpbownMuDHSf4i5u3ywQhECd6ho2hPBzkQiK5pBqeHFTNjd6h66FVb6kcaqtF3Bg",
  "key34": "3PF1sZnCXRF7vXkjyGQDkEqFjvjQGXaMSU1aECFCegxLoY4gZmY8X7N4wGpnMCyDFHaG84eeKdZ2CB67EdVugBkk",
  "key35": "4sYkTvQmCVY9g6u2RAMZryKaU8s53fzerm3e8MoaFU5H5B1DFR8isQgiaRCJ6nKyVwgYZiTTPZrGr1udeK5mGiya",
  "key36": "2xtdjNR3avibo5s7278zHjhujGcnXjHvYZXP2J8UG6XevK95yFbk9qCTA11n8kQJXS1jqmK81iVAkfeHW4a24Uft",
  "key37": "EocxzURBxNXMzarbeu6RrfgY5UuC5kUbYEP9mVuDWmF2KJkgWRio1cy5gHGCj4Rd8CKPfKD6waz4HpiYQPdL1xQ",
  "key38": "3TL2hcEGS9WwmFv1HxjzLgvBJaGT1Yq5W2ESrTu5Grk4iJVQs9ob59gpjg6kuzJAhkay6TdBUN8Jc8Rk4PRFJkYb",
  "key39": "QNEQmbHUKk992gC7gCfyT3xopyxJpyvSqSZ4ME72zPdj2E2CmMDVokePV9nLhZCbCGKuEDGrn59Y1nGk4jxfk74"
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
