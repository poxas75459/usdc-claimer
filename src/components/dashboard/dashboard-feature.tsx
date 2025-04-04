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
    "5WU9Y3YcFK4YMPgM9tMh5XNKw1VtE8nLUKqyjvrjrJhATE5w3LhYXx4RQ5TCeYXFzMvzaoXH9U9eiLkHYRj3yTgt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4qZxyRbtN2wuWdae6eiGraoFs5qgGQD3WN6Z3qy791byfKWmkCWqaYucypKHQGyw5ujZ4euFqX86qn2ZCXFW3BZL",
  "key1": "3NfaqNmWMFB1wwiQArFeiuodjmSq4KCVSyFANYrQUhYvZuXUhqKsrzBmAa1gunidoCCgn23gVgzNxbE2zHa7aRCy",
  "key2": "453funSBU4U8PuTtT18JXThC3otUUQoZDu6ecFEWUFEF3BnhM3BT7GetBhatGxVE6Qz7QvCndhLzcsGgcGqyktMk",
  "key3": "2ogeQfvSCMKfyj7JtakkYu13oY9Ff6WH85ANkq8fJffnhYSQTCDaF6FB8U26o7EWTs8XMG1jv8jQ1zqzzC5CGVMS",
  "key4": "54CcSBzAo7s3dGmrKoENQZKgycB698q8rDJM3CA32aRUZ3Wt2VSU3ZYCdVpicPZkpjbbnJcpmNiXgRc5kHXzRpF1",
  "key5": "5TwpVUiTrTabBGnqAikrrWbnMEyUNo4r1zJipVri13foodut7Q8eoFh6DsnjPYtaed8ZmKwjPdeRbq3NsFzva1Zu",
  "key6": "3NVNuxMyK1VJksSfBAbgLyxWGa3kQEZyHNMpyrpwriw1jLpg5kd3Tg6kzn6NesXgYTz9EDL7JzDjm7UB6cLRv21K",
  "key7": "2eRxufnH2B4hVVpaYFV45xfE7Q1YhQJWicuvNXEGTGPQGMnLPWzA1rcDnWKLgybC16nYK8ecDpVBrSQYMuJVCZmS",
  "key8": "5P6vE11QAmgYz5BDmt5DjyEEDwzEFSnu1qWZ4CYt9yitRodfpkddVFEUq7ZLVmQATS4TcZZLo1bn33iNtH4G36S2",
  "key9": "4iuRFFpKakrsriTjeRLgZWuhSgcQwUTLEyzZhnimTxA8QdztPiMarvXxRfRcQaEEMKgqmNQDpo1zQonNGeaQJ2iG",
  "key10": "FGGSEYA58z9EgMBn97NyVSBZDU7X2WH2kX2rmGZHZRHdwUhnaA45Gfgtoyowia3ac7EyB9ahtf8y86cyCzGR3a6",
  "key11": "45rArsFxQLRbRVMmDW5mZ6Hpci3ppmN9Hs1BdvvnupByV2QHnHpRJ7WBdsAa5LDRrZNe2McmE7TFycuNcrDfX8Rk",
  "key12": "2D58CnhcFNJT4ZtPx1Bd9FksqVsrKxMf9ehEj1PseBaNqGmZserCxSVwk5EUzYW2DPPWReDN5LTpqNp5SNLQyrqY",
  "key13": "5eMt6ZYM6aTzD7LAhYydXs6JGt8GTD5RTxwoc5xNvETn9QBEr67J4zZhQJtxtcPdrWHYQmKhDmUnJ4xGHMw8wMoZ",
  "key14": "2zn8zE8T7a7a37sNeifro4CmsKNvp7Y6FDmG1UhCNZqCJngyRHbRsFqC5mxVZTxQcLpXkSxHEjfSFCZm6aaHsZD7",
  "key15": "3vaSXmJgeZtdi8HneGjvc1CBLadFHu6ifoqY7vJLGrWYTpP5b6vuFCaaNEQwU5AJkA7vrf2hnJ2fe4pFWfuoR3RP",
  "key16": "tuumgvUCLKrNCPxW3cTLPcf7GAUrjXs3c7z7Tf5qknYUmopVdVLcMMaobhb6mqUfFJLzUjXAHu2LXuqwPmJJhk6",
  "key17": "2wxWyqhgge76ep5THWjdsXE3k46i8h89WiA11EDsxd7uSTqXWVKUTKcRvtwLKtdLAaFPJPu7NdvL5JcMEPUUc3dM",
  "key18": "3BQxHRp4W4G9XnkpMXCyhKgG7YNpT9E1c9xPdoGN5YZfmoSp9eCP3XNmwDqAufrfLTXm9rs6yGThWyM82oya8haJ",
  "key19": "2QTiE879nPwJEXiiLEwKPTFpiCuAH1LmVxLCMYBDs9eoDuyWLRHpz7AdAgubVmGNzpGg8iKhDjwTsGTGmgNLXaij",
  "key20": "2cjqgNFJd4Zz7SJ4bJEy1X7ziTuFm69PaaQn5o8tCsjn7hwKKf3PdaMiwPzqKYEdKhTPh1ALZeRsBiHSdmr3jgq2",
  "key21": "tRkBCNPWJffG33s3FJh3ybnwf74Agw9zzhSodVqCcyDmSuq9xutahWsfmX9GMYxYQCzpoWtDHZ8F3jJKm1VoRJk",
  "key22": "3DapG43WRGUtUoHyyW1j3ttwX7XE2qQbbpvY7m9BLXUm86Khg3VhrbRtiHAUhCDsUg75NGzbZKVNF4SYGDJrZdTo",
  "key23": "3SXCKJ42ZP2sjuf2dnV5uJkTPEV14JstEtbQWGE7DKuWbCE6C576FYTsqeyGrnbF2gdifUn8Tc99LZxwLdaPGM53",
  "key24": "3hBxwh7VwYDjFEWrnJ6B3FpNKD9zEdw3dCkSdhr8oLxuteFx5WcTU4c9iMLQFvjwsNwbtKczusi4zAWyXm2voPRM",
  "key25": "2BJ2JjVXSrgGSrb7qiT1EQnv1Z7xzzuRtBWRTdHCLRfSHpZK3jAz4bEnVTySf1RXCYNud6FdceVVeLZBpiv9DxL",
  "key26": "2wBukNrCoRuMhsfu3uMKe4Ty4rVAQU1fkMzekgu6VNxLvFJeWj5gufcK89bbmHdoZshXmPMHobUc9jvtEVdY3Ehi",
  "key27": "4Zc1xzALQypdbV61uMyrpc7aTMrDKXcxNw9HArtzjCWCynJfQe5sKaN2cVinxdRYnf8uVto3w9Cyt9416hHCKVFe",
  "key28": "2DmUkype9okYPTFoLvYkrxL5KCDrWMMMMKUj3TQUGmx69EM9rb6sq2tBeRJWqJZZkaLz8wEUgiPJaPFcJjWjakPw",
  "key29": "58xCGUTHw1iLosk9UnAAcHJZbTrFxmhYbwoXzYJvw2aK9xAbLQ8gVysCC6nod33fq9w3E1j2asdWhHq1eGXxFkhg",
  "key30": "4ABYDjroXUqeoiEXcGsJCPrRPcFJgfHBZvQKGm1x1JU68MQnSkoF39mzQHES8rdMuwtk18MvtEorL7L1SQjhyyYg",
  "key31": "5BMW9RccHnoVPJmFz2QUFBJEvSawYa3spM5bUqb5p7bnootYMRwc4r4h65gXY8BVZsf6gJBmM8KwBbQB4w2Xafgu",
  "key32": "32wa2nWn2nsga8s6w9AaxMh8vMDr9YA5kG1imFBzhbYnEMHynoQGSamVpbuzsRinNPohnCohqsDas6GmHMDsJb1Q",
  "key33": "3EgShotTpCGuPpBWHbDSjMbDAACHsUPSJ6Vu31bFd34TRNT7ywppmb4eRNLc1m5rqmwNyxh74FNrWtLFb6V6MNzu",
  "key34": "48zCiF8wWGapyc6nTA984tvenQxyjkSi7bttSVtcyhKVRbj9k5vxiMyjKq6nrWV5q3MBGsbVuGffmigjqtWhaP4z",
  "key35": "5KgAuqGdCikCmNhYnXyqvEGKeNoHKJ7qfvsUmF7P45CX3ncSv6C2yAqMMDdv3zraCKdSt9eSnbzkdxvkeX1XPNeF",
  "key36": "5RHUyooD2Tjn55Ht6fkwGJB5zeE8dB6fxVb8TwCWP8zBxcae2BSRLRvEAptYu1KuuQnB2ePJuHF9d8iCLjyhQ7LF",
  "key37": "5kqtdK9rDe3kudzRiAEbgL32VQEKsB1GG2UNRv9CV2nHsBg12pN6ap6kyjiyC6VfbxzgGn1sNJbFbNXYca1r8nAe",
  "key38": "2ygnAT4voSYReNAYbtbjdfCxPcQzeLsrrRHHpo5F6j7qDhJuYtE3DokWEsF5rZQDsKcVMdjnU2pnNJNGejbMAHtp",
  "key39": "D2oHndrq6QWr7WQpi35VbrzK1VKd7HwLEoknhUM5bvyG9MGBX7dyVHwmvmYMP6uchg5PteyDAQDGVWdeDNkJJJw",
  "key40": "44NwfPTVzK7FcxQMFut1Uoq4j2bRcaiezVPMp1pdCt6mLNTjdWvpHe8nW8MxsQbTqE64Ewi7H8ASu7dopf4ggzPf",
  "key41": "2J2BkwVD8xqALUL1PbSB5sKy765GXv9NzbCiomonE4MujFrU5VdduykgDryuU7jc1xpyp18NaZYHcx9yp66CEhHY",
  "key42": "33WDH5TYS3WyD5kwvro4xZV1KEX9Seqvj71F5UznB9CkgJeCbf3AYpA5NdcDBMGpSDMogdp1ZsFjYXgPZ5qTCJp7",
  "key43": "2u431e61zoN6UjbhiKBo3hx9VmZgLrPkHyQHm5w5pdsZnD6yNXHq5fKbsDorus2395AJFkyW1ckLmdxzEbAnnyCq",
  "key44": "4KH3socu1wtkuNmxSHjAfumDV4cggJnBKztohDMDvbMRnaKv4VWRJ171pQgahmiyrMpjnFzndNAFXZH2ybYyG4AG",
  "key45": "4AP4kYBbuxMusz6xRibzSZeyKEbFkwYqoxrJZk5cpWHstLQWaPzawJDyfcKeSsLsvZUjU9TRrqK6iGg2VnbD9NkC",
  "key46": "29Ko9ooFe2G5BsA91twmJ4PPH7BpzxMxqtC2VrwMnUvqv16rWmHZX3KmnJBpc29ZMNCznJkNjuiC23Htp4hXbwXg",
  "key47": "636wXSe5a97W2MkaFCYFaxt2ossfWDQ3kvupDKTYd9xUECfj37Pjaek3PaKYH6LT1LpzHZuwiMhrkURonk1mLrE1",
  "key48": "d3n9ATyeXSQHLEnk3fohjpULQGa66BQbqJFUFrZyv5kjKLKbJKByfLbHGtT84npp8XyXi98dsiREs3hnKNdpZM3"
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
