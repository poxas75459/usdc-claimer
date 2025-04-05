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
    "3eMVg9dqU24tE9v13Z6XzxsQxjZnaz4JFsQvzXy8BtCdHiHKxeZQbxsKCpPzqwV2MYpTT9JP3k5B6MQxZDvPcycH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3FTGsYYjqDTcfJvVs2KLsPbkqCsbNa2iKJ5xavyd1QjbeY1gbFVJ7hutuXQSQyRwDoyP291nrT37wFECEqC6JLQm",
  "key1": "qKfuLsfYSuTjyhs9sGDRKMCAxr6NLxPZFNfR3Qn1zTPzCrzhoBCXGoxRuku7QtYsA19RZYaqagrYCmb2bxudU9K",
  "key2": "2aPKfruxag3YUm4NhACFuTgaerzVMYLfg3ARHFUnA6b61Dcmx78z8nd5eS5AC3fsL2MQVS78B3jh1b3KpjbNWbjM",
  "key3": "5vJEdSE73gDA3qbdBoJeWJFuD41jZAiM5S2UjFSLTVR997Bh7Mpq5Aa1E7wGVC2bQT182wJUmaLpfxevy68i5dPv",
  "key4": "4792Ggy6hCT9sb9ebb7r1vbV7pkmQuKSL4iyyoorfB4gbca2sY81QpCav75qKRDni5DksKw5mfw8gTyi7gqoVDSp",
  "key5": "bqEUHWTE4jetgfgvDNdUQKSYgP3WHPy4bp4YxrBp5fkwmoJCaPFxaPcot8md13YavjBuGhyeTrNb7JXwMg6DXSB",
  "key6": "4PTWWbMBZhxScQo7HSo7UWGuEAhKTGDoi8iUozCWtfr8jMsy2UP5UY161jTnXuTgN5VpWVxLUfoxdCqmHrRNxo13",
  "key7": "4dgTmtnNdmkYuRZ87nbP7XiNyfEfowTkb1EGvzNhNtY83pLQvodHmk5fskQEwBGtJSJWie6SZQ5fSU2uRxPUL6NU",
  "key8": "2oF9BcXY3GW4jeUWM2AWAKSWm4QD8XrpP8fmDuwHAQpgNvRQtDtKKd4aDheYr2p6LJgzjd5TGMgFtm3CJSLrX57r",
  "key9": "XHKh1AyUHJn1YmiXCjrPU5kQhXSJyprCb3GNy1v9BviHrbTbhRs1txcKkkR1fkKBQ3DQWQyrU4yifqinaJNFTkV",
  "key10": "2Z2qdRBrz11tmkWqwXUY826izg7btHym2qNRvmo39DeqFgWKLTi4USeRBaMFguAafTKLEzPL6xhPX2sFLFMDey33",
  "key11": "YFZncM3yGRuGj4DdeuorgDzYYyiF1hWCUrfpPWvCA3r66E3HoWohEUDbCQ9ZNGB4k6LtWeRzFmFYdW2XU16oa7e",
  "key12": "4yF6ZawKTxShtaDumbzB27bWZzssvB5QEUEqcm4My3oEZ1bHJ4nCkidq53Wfpsf6VWrntP4sTohj2BmDS8CHT9Bz",
  "key13": "2KPXyYFVNrR1Mvdtta34RGFx7Vb8rwaWwmV8uWLWW6mACXNdNbu9hxeiaSEv79kF8SMfYPB59VbBAYKSiErY9Gib",
  "key14": "55fbhL24YQ1JnorzpaF73BfX2GdzeuLVqimhnKBL7ycz2ziAhfe4x2FP858n4s1xq3HooC2MtwHSm7XYqeLJ8HvQ",
  "key15": "2ndrDwrMzPFhRpCATJReh7JXy8Km8KPrJrwe9EphhtCrqapDsmQy4tmHXAaEhDsHg1CFzXnnVpaihPypCGrqW4mS",
  "key16": "4aGgBJirsgD6pJUdwwH4Z43MGfH2EC5gdPUDwGrJmUWULDxSVR5SrkJpna8zUnr2F7GguRvtVKkCzfU3ivUEuE9d",
  "key17": "2vRsc2zF268vLZRDkdMvGz1FtWexyT6t87gKRuQ8iQBLVePhDpnzz32nKX6fwMjSJ18e6FyN6QL1RrB1pzvfDS8c",
  "key18": "5VTVLpdxbHKHbmYt1dvVsaJx1oyJz4SHSTYqSpRWYDv1BVoXPS2x3S93ZeCH7xyBDt9wP5LRXzgauPS8oLrgxR5k",
  "key19": "35b4Kv2GZNZftGp6uVhis4XZQo1nUFLaYzGX53NzGsP5vdoKw2YG5UhZ6e3fqiQj1ZAiAjaCGhNsDQ145LcXej5L",
  "key20": "3mpfHFUpn6B78t69aCfjziNDdTPj9Dvjzq7Heb9pJhAmLvRvSy9ih2k6qgV2jPGNrmgQn5ANaXeQ6hdVshb1rwqh",
  "key21": "5rzjYwBdbNKNCE1DxrrQJm6PHhqN4AD1ZAxq965pSEkNyybxL28J5Zj1iDv3BSNqsrG8QqhKCFcNA2h4e3j1pj65",
  "key22": "5s6cjhMUSHiUepsMZ4x4KSQD7mSHTzmP7RB6W8gomti9sft6fBbRBGQsoxdgNhAWZAtgmSHVVS1LXwrdTC5FWbGK",
  "key23": "2d66fufrC5Em6q5ceMJD1etqbZM2ta1hd3G4HKyuD5iw3Mft3VkBn1AMAAEH1fhzmsiNzgvFMotjxZQwctfAkYd1",
  "key24": "2eQUtyE3NQ5LLZ9u6Kcmrmzks92HbPXYYt34mmnvAb9yt1o5DfysZ5AeMLa32RwpXGFZPzQTB5oYoiDRjJumUnBG",
  "key25": "84qECqiu9RQ2nbyvk9tG9ifaoq3KYv9yEQXMURe8ZvVXxMnCxhPTjmyz6U4gyJKMYMaFNiM5MLKTu85xAY6NeMK",
  "key26": "61s2J5QTQA1TQSNamv5LEscbn1AcQeGvYvkbsDX6JraRVJ2tsnuR7iRMVx1a1z4XawKEoSyEJTFj3WP9YG2NZwDW",
  "key27": "23sDWTKxdYCCi3jtvKHR2sX6Y8hEZ5Uap6e66RrLRAnSkW2WT3hodnVii7v5tQLAArpCENWZiEmhUfB4o8DE1h7J",
  "key28": "4deBiQuZx6Kivu9om2yMdVK2kqVTaHwQdhYfzLHVgc27uzPsLVv1GR5EchdY4Wn9dwAdSsJ2kEiM2K6CHVswLcd7",
  "key29": "4U8D6tcH2Hy9FKtuVaEh4VAjd91TpSuU2x5ciiB93CFEitWmcnU5EJaMo8uQThWQKoyTC9EUtp9E9NfntWpvhn1W",
  "key30": "VJ11SZMSdScsokXke18mg1pbpntHyGFjGKDsWjaM6CdFVm1TbuDbD79bmZZaUzBzBA9JpvBWwqriUPpX93Kj6Rw"
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
