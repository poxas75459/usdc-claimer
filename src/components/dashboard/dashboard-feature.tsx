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
    "47SSNCdkrt2BEQrjCbaRshFxdmUiDq39pazPVLvCuGqLjNzJrC7Uxf3nEuj7wEge9eM64FD4or1D7i8iS8oGZSEE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZmpdgDK3zm3PYYFLfLsJzrxJtoyabMB3CugzxppxVjizSeuoQQUzUkjAwT7QV5enZhrexBoEp6ZeUav4g4qaN1U",
  "key1": "285HzgSPfn2EzCGhp3Bq1Q3da5xMArBP98rDfXvQ7G2DLaMnX3Y6AFTsvE2Y8cdJmGcGRkPsz5Uomf5UoWRwkN4y",
  "key2": "2Y4Xvi6yYY9yjWAnhFbiz9TEV2189F8YVqGjkTXxAgbqpynxVyLywsoE4RuYhLEPXvSNLUjHBQhh6GCV9dx5vGUZ",
  "key3": "3eA5eWA1ckjJAyorjnokHWvDy1FSf3LZB64R2vaKGQErMWuAcNGkrd6tpJAhBC4qpya3ndQ4byZJfphAULYTJUSh",
  "key4": "4fLcvPcLaYSALf7v8f91t8CwGM234ye7U3GBGdUZpdoeFEznB2WBWVhsvqsaCcKGD88nTktivLnP7prutc6CATxa",
  "key5": "2G8aZUBi8pmUzozUxSyUQMAb81qcrMHMzU1SrgiEH7e8gNndPwk8wYa3V4nhdPfWzvmKFcUhTtAxv8BL9UBiNMZJ",
  "key6": "4SYQGgCitYqBbn3agTGN7YJo9EQhxnnrW93chT8WEAMCJ8KKwGhpD4Z68HYYfRbMthRfmik4ZT4EeryKReLDBtW7",
  "key7": "2pEG5wRZHE1LqRK2E3SgPPaxSv1AfcmLtFsZJC5TkUYFfWmVvZnmzYwwk3ownAyhXkv5p6bPeopHJ5EmaL6vowqF",
  "key8": "5R1UNGUxZsupNZQcKNwYKoPiuEyGToKPJpriDjf9JRJxoY1ALrBPPs7dvh3juQaBsFB7ZQTBwy6jVj5LAs9Mc8Qn",
  "key9": "5RChb7DHnXGnXKVaF98Jvxjdpc8jPuqU1WTj7nD3cQ3t49RG1sDPNR6p2ko4UVkWEj41bBdQ5pgsZfYoMKdcc1QV",
  "key10": "4RUgaGWP63yywYC2r9UEaVVbHt3GrdguJTKbPM279GvdXsmDwmnBUeD1V1YnvEtbwdzoUAST8ywvmC41mnhxLFnm",
  "key11": "HY4JNtAobG2SmRgB8NMmAriVTPzGGqXxwbTXNuBZTXzvqeaCKu468tzaDAzjrSZ6vGj8Lkh2SBoJ1qk6EGT5FSR",
  "key12": "qxY56sdFLUoTCCY9G2F3aMG1ivrQxTf9gxY5AQAq145nxVW89M1G2zbrKaNTzqKKYVE9SWXCmWtGqmkYzj3t7Tv",
  "key13": "2ubaZ6e6o5iKvNTFApgrw9xEif5b6AbRGN1D9akmpxPc7bZgghUST4BVoQuWEzFy3H8iGPKAgzVyFhoqoXw1xmpM",
  "key14": "3y2P4DdPpgb7SuDtVup8w85EnejYxyv33nBqusQguURF69j4E18ANrVdYmwQejDENehE1PCj26FJr2SgPKbxdxYg",
  "key15": "m9MLgBxQxxk6aVt6gZ2AmMYRXXcy14kgFeTqwxF7Lo4LVFgWPkuo2eBq3wWwi2gzAaMnZwjy8kM9Dtuhb3WrZUr",
  "key16": "3udDgwBbMoMHDSQyJPZCTCFenrAvyz13FV1m8AJjFvjvX1M4xpiM9oEwvFGfSEejQisrthcqYifoW5CZkgcTHRuG",
  "key17": "gKfHZ1QEBxmheMjRccTkhkaUyEuj8TRjvmgirG5idXvAJqDkyMaJVgBExijo2cxsEds1sX5CtKrFC6so64UVJLH",
  "key18": "2bfJJHQYSeUiXqUTjdRTH5CmUJDPxqsgzFJKiq51rQw9iy5csMU2QYTrXX4SqJnxoR5NR1oMU97XoLpxnYqDaNsM",
  "key19": "25Jt5e933FkhSrZ4bXSQpDAN5auvhaeRtBvXQCorH7FyWtorQmfaU9mkfNY2LCBFgNM7dGoXchnsXWsrTFZCACED",
  "key20": "4TCtBPk7k5dJJ3UQkcTr5UtRsFvNBMFP5rfbpCupGv8aefch7ScoMVZ523a5aoCP29AoAwSodSFSx874uRMXTV5c",
  "key21": "3Xr7vjkNwzDJ1w1xWX9hE6s5Utmt4aF2scckS6hLxDfXcyqE5xbaZxPyarY92B7Zd4vgkEsAo7mSrqSPZ8NgQLLx",
  "key22": "4NabsyrSgqZxCbuK3mTiU2pAa5dMi9hZ5NfXFEwpmansH3qDHw5UC5MQxbn3ruiPH2bLa2a7HtQ2UqXZNVZCt9jY",
  "key23": "5TrF3nepfo3GotJumG6sEGTKFBMCRdD6KomMxskB42hfwTqXkmP3MkTqPmuEppP48w2S2f3Kg2PVmk63JdtXDcwb",
  "key24": "27Sjv7eV6hTjdYEFyb58vrRVuuXK64zERVMJWE8eRuH2HgViPBmCq4ij27A55zVB17zMSYwp1MHxRjZKhJ385Leg",
  "key25": "3P9hZAoZyfBwpbCsAcGncy7BPfea6NWhRkdbZyjqHh8C3UDGFkRmqFwywAMrwZg14KhGQPcDnfxskR2WbvRGErVN",
  "key26": "5KrcCrCc8RC2RGsDCX1iWwi6cthKivJMhD3Fp9ME1QyH5kEwyPkBT2k3CX8CWvskQRJh2SpT9YBrzAeD5emu4d16",
  "key27": "5vwfGgXUZ5geHAgRByK4kaGdQDHacT3KvSj8nRcofFghVvjxYQ36v8UkQjXDBnyhf9tMkmmEakd1C5uGJMRRhNef",
  "key28": "5hCQmWqgPXmLiSAjbKjAyTMMwiT1pKMHiJvkg6USsePWsJK8TR3239sAApCyv9hAC2zkvfquktsmxtmnoqA7Vtua",
  "key29": "5EP5TQdsR7k9TPwgBqpXEzfMjUGDmS3e85niwWFofUVnjkFNszFGAFziZBVWr98QAPxvhAMxn2u6B8NFLA9Vu7Vw",
  "key30": "xBRUmKdWsKhSDfLCqWziukNN2um1CTwYApQosKY4cfgTpBviTvR4JbWVZqFdmt2tUtb9sWzQMSUkzBYSDchQgsw",
  "key31": "26oSWs6VV4EXxVQJTSxDyf3zMrE9AtthEhxPsxb68kfz8ABte11j74ouCFSBRVDXNCrMkN5ndnvqfaHo59UKXUM5",
  "key32": "4v6uabASdSXR1zi2WVVNadcUJfsJKFZnPzz5ZnCTTSYqfkWeqwCT8JrFySwG9ko7duiU3LQC8C4AWtKSRMBujege",
  "key33": "2uK7jkj5J8KdPBKFeZ4k2knubmfjpi4wUPzZE5ueLmHJiVHrAwjmvStrbfEyLtQE5dV57ByQnJmQzQ9aW8WqtRxD",
  "key34": "4Z97m4Hzn1pERKpyBRsJBt4zyiFQcg6BKTnmTtxAFcqpk7NfLEavyWx8mo23Kb6NsWTGQFfMMnCTvHWgQSEYq2oM",
  "key35": "4m7oua9m5T9CaHhrtfAsPPcx7LEFEGaXv3khdTDcnPdMMoP8z37wqiAAobHcHGUca3TxqpBvbzPUmbccfAMqWhLa",
  "key36": "5sPeEnEu5PcwVfRivJY4X8tUDg2JHXa2AcFgWt82szirMhePhqiwDS9gL2NV3eThRsQ47QejtJ4EzsVXuqLbBkix",
  "key37": "5oc472mu1xW1dcEdL2VzMSqNhPwH6Ktfi6iMiiX49RnQBnwnnecr6zp6N22RprQjv9QYJ95hYJUdKz4RBj556NDp",
  "key38": "5t1kbL3sEu38ocx2AQfXCanj1XKTh8qqErJfpaJLi49KxEi5HWLXkebrnHzBfPebtZV4F5axMPGhnhbuyvBVibWg",
  "key39": "2ZWCvQNpfZNCRtCXAQPM7nuozaYYkB4ngFwuHTjtHXW7GVMqQHgLmyNwzFxQUhCutYqiNfQMfxZSXoQJxYG8ZR7q",
  "key40": "2eJtt2w1fnoS1GaWntki1mhVZAKTjbP97iC7KvNECszayPhZjL6MRiYhXi55oZUDKEXqhBKdrnL2Jn3YkWabav7d"
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
