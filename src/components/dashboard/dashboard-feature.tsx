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
    "5Pbt5dU4SmM3vSMyheCd88EW1UFF8n8yeg4rLaA6jsmVuZt9CErkkF2kiGXsVHQnpmXtvBbqTAnMe9XEZTapFzwF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Gg6Z8JttNEUrHncs9NwwUPEiyePrsMKbfY9sNcagM6L6kAFknXexq96w3kKT6Xq9GbHb5um9TVkPAmU2NQeGER1",
  "key1": "4988NBkWr7ZtnZuevgGxEJj6vd9n9yAEqMJaf16yCzXnTT7kW1veNbzkTNUYbPL6yqBLgz564pbhG3BKkBmcKquY",
  "key2": "32g5DHNa39dnV55zbxFCQjntjvucj631iMtRDPaBWjRZynDC5cW1egGWdm61Ufak29xoZdA2osw8xUTLUM8a9Ju6",
  "key3": "bc1pf6abvtCXe3zPmaAHwzV7pEvGZyFoyWeRxA7Vr7mmBJL25re2vciqpXpofPkx34atkwvroWyzukpCX3H431q",
  "key4": "SL2mm8jL9Q6rhehzkf29kfakLNhxfd2pj6cXDsjZ3E2GqaHZV76biQgYdGNk9ogUwTajDx5ykwWgrve6Dh7vrtZ",
  "key5": "cX4EHYUWk4k9wqKRkiN9CX3SLjUxbzNctpf4UiTPGLDgbLoGAXzw23BmP75xEi6Fbyj1P8RpjEycWVdxSvR83Bh",
  "key6": "3LqJZ3a4GwKNvo4k8twzV5yyFDxYN46bs1PPRipkyELajUSZHtUZMMdePLioe444UAMGxDCrXUCTVtKTwomwyym9",
  "key7": "65WeUuAZPDWirKSQdJ7Rivhxgi76Re7vVmL7zGsHqM1kofHPpFJi6f68hM7TbzmWWzG8cZ9PFuxudYrsn7L12F7G",
  "key8": "5PhuUpFAzzBBCPCGmKsi5X7Qgbr3pKYnMfXkHuTMcPPrwbwteouQruPBcmEPkNUgvVN8RJMijCd7WjZGXMWJewB9",
  "key9": "474jcVfKxuPt9ybf3YTFX2rzdfbZs3Eo3gebyNGCbebJJiwHHSj8rt8bYQxEf749w9Qe82ZrP2hR1UocSeVp2M6K",
  "key10": "612uR71PGGUmyfnnhQNBQBJ8HePCzJJx9QxDry72X6C7uvNegkKoicCBjxEoEjBB1CrBZP8QtJDJahd95k2YrkpE",
  "key11": "3poSCx85GHuiiV9DRaeMZHr88dFx377UaVaEp2XJYMCCYkBAMwNK8kgZv7D43MWfKfCQ4iAyVWx2n6J4pcVwiV3q",
  "key12": "2XnCK2xHdmwPAqBLwh8ZiqywYYgXFAEJu51r4vxy3HtPZ2HZShk77t4JwbQNZBVeoWYf8f99nYuL3vnjyTiztXef",
  "key13": "h31NrHjWAecTCj4CWfPaE9GJitPA43j25851fF6GXiMv4a8bfrDU31hiToQo1g28NFRA6e1nYwudbhzNUxHUcBS",
  "key14": "4sPxdiUa84FhupLJGhvDFoppv91WzcHW1fMwkxmsHdxb8PFw9cFqWoGTHFezaMgNT53ENpZeSYgGftss3hXYeGvX",
  "key15": "5sBWiUaEFYkm39HopiWp3aYR5Mvy2EP9naQJTsUBFqmRoCMQxPS9L1RcWZB7Cvu1hYbKErzAgZVxKy4yFev7pqc8",
  "key16": "3t253v1yrQQEAUwwdCe2NuAq3RWdMBWAERxVwgQfvdFQvAjEuq4Vzonk4dvtx2HReS7XRB4cFC3i6RM24mc8s69d",
  "key17": "5a3mfGwKW89GUWvPKGYrDZajTPYioK6dwRF3v1p2b7jpXxWuNEyJjsR8Aze4QjG8RAUPsjaWEpL7xcBxyPJSCDCc",
  "key18": "3nuXdzSbJGwy9VTFQy12Pbnz8QbB6zSJbyYcXLkEj8ihwJwJnr56APCxEFeoQyRxg6WQVFeM3b88hLxYAJ1ufDbX",
  "key19": "5axMwP2g7K8pjps22nvNQGQw8VBb44W3jgfsUPgXeqR2Hwo2m8UscMjNMQhDdMghSWcoeGXVDYiHuPg56cmS72fh",
  "key20": "VLfSnoFzEdv9iM2PpurhcPE7FMUsdKVPBYPrtXKAesPmXQvJHokY5DfKj3ZBnYYG3D7RBTK5z2ZyEdHw1sMahFw",
  "key21": "5JfYS1Wc4aGxkTpgyp3jKBkxQzdhkhtXoa1ymryNyAn6uwy861HZztpBqX53w8qNf9CsfhxHArVRaXgTH6D9Wir7",
  "key22": "4KnJorZijkixUB9bVhxSDvw469ueVfF6xng5ZyNcdm8hVjRCxDGmw1mPjUQWt2bSWViRdvVJntdw4i9NbHmkZS3d",
  "key23": "4YRDdRnVMmgXT7PUDdRf4XVyjDX4E9Uf62H52qmzgkbG89bqgEZNrjZdANQ6Sc8LHYST2gzg6w4VgMkiKvWNCnvg",
  "key24": "Ni1VFcB7DWDDQTZrdY3yBb7wEh8ytFXq1bG3xLMVtX4WNqDzENnxfHFhHkD79gKMCitYggCP36SSC2UyXAEAuRj",
  "key25": "QupxMVz79ELeLp9XtXZk7RFkdAYJkU9oAEYYnBFrpqwfEZDb5ZGEdQgrHVaCykV48kTVmYVi53JyFqpVPqoc4zS",
  "key26": "5mT3ACswMS34py9TZVFTYABbk1gyjfJM5DD3mZ3n2Z5DMqgf3z8nJHjiNgDPjLcorJrigGSrkYQwLJZs5Yaz9DeV",
  "key27": "5HAsFjw3J5z5UwPtgUwjtAHCoyBqFaBR8GsxWhgZVV31TjN3WyxdK6enaZad41UDYTpJRyXZDfhX8CpYG2EGkkg2",
  "key28": "29tGoxefQHC9CdFLuQ67hkay1mfw4X4s8JGuwWdL6pUe4MJ6n5CWJVdzSyBapbVLhB4MvXBoSaRsRFAdMaqCz92k",
  "key29": "2GUvfhGT9n6XfDMjP1TiFQvvvS2QBQCiV28iCqNpPBL2zzJnRsKmwemG3ySCamezQnei5qNPzQTb5PaHR4wA7Xr3",
  "key30": "4ycZiBFkAP9EXS1P9p3YngX3f3DrLu4MYJZJUyTExntaGpVZg6uGdTaGur83PbKZhUmaJRwzi7Uc8Vg1vk5NDfGF",
  "key31": "5hadzwM1dadWT3boKWdj8QrHFnHZkA81pi2Tmymc5sLmEFHFY8QkFWr58BzsrdqqNg6Wt55nDCuYyzRFuyRtAGqY",
  "key32": "VQdwCN1vCAFnoQ24XKsYgndZZhgeExb9StbvX34L3WYAZ5YSDgAyqArUA3zhNjqqDFyxxTNrEZE9KfNJN9maxLe",
  "key33": "5A7vQHHAtC8aVoEJUDjKpvu8zDLu8qsCLd3bmtdKRZuhDkKTuMRysHyp46zhfqpmkQYAMPauQZHESB38JctxyPYe",
  "key34": "zSkcqL68GK2jvEut3aYGwQyWNo6M8F63Vt3R6o1rJS9uBiVVveqXtWEZChrS8LtpjNx2xay7er2bs93GJbwC5f3",
  "key35": "23qJmcNFa1Ho4wrgy8KVsH4p4fr5gwJcAvjNKSyqCmrxhpcoadzEm5aWeZusKaBHRKxpKnXQ6saCLrMoGKLdTE2a",
  "key36": "3iY8JZi21SBHjufHySzbEidD4xWmu1GaNiYTGaLSmr25TGHoMjMpRxyTo3k6tVCCZhsCPk6DnRUC7DWHohi62TxV",
  "key37": "65htPt6CkwoRbYiFFRTJxcZQJ8q7CpfcstSkz1ZTbLepxrrhJDPDxZeXjLFSBgAKMWyE8vbjQcjVrb3GicrKKvWg",
  "key38": "5yUsL4Y32rTU9Ei47LMxNgoJEL3sj8DZfDDKCGkzPdFC7j7NYmoARn2RCpGyS57XmgeT3MhVmw3pCACA125Vxr5H",
  "key39": "2ST8ENyNNUwVF6AcscNV6eL3kQ7ej76e2QcDS38damW9Qf5HyCxm9SziGetJqcDk1J347oTdEQwq2TuS1sBakdFS",
  "key40": "3trNWpEqh615gUQrQHeUpoekmzjBNhYV1ffDmpkxZT93c7kFBbLDfxWTHprFgnNLgNNQvP5tEqoAoicGWYAtYVAE",
  "key41": "2gfRRKnwA3LLmLk3dK43Eu3sxCEBKWF1BfzpnuJo6p9ZP2QHpnXwTJgFfebDS1xMWVvzRKdD94vx8fu6J8HnsngN",
  "key42": "3YZADFWiYhpEZd1Yu3stmucxf5b9TPxeKXtK99iWQkqLCLw2hrgVTiz6k2cwPe1bZQsrZDpPw2VPysg3vAEHf5pF",
  "key43": "5kPmbowrcm6kBSqkq3YHp88jnnW4fGZ5pP7G1rwFzUPxfzQFveeeMLr3qDZUadYFXbzvjFtbskEmq635wDnpiTY5",
  "key44": "5x5QLQ2Jv79u4zdUTFp6WwovM6YzcDYZrRDj48tp9LjBJPoHbFocg57PjpGcLwhCqZ8CGAPP4mJAg1D5B5Agbpu7",
  "key45": "5SWgL4LciTbL97zpop17HX75oZN6AuVYuzKSz2ckkNue86FTTEKzZ3rNjsLdLVdpt2L5SXSRWYEK9mtVKnAw3d9f",
  "key46": "ccHwBCHFy4R3HbawiHjsQ3m3ND6xh3XWShsV8ACMSawG5Z4ZDqZYmeTLkVPt7mNiyX3qThpdGAomhHqS9RJgAWz",
  "key47": "3FHDGT7zsPvjnXSPeqQmVtKLk1yrc3apHWJ5ED3s71Tw4k4CAgVNPsBEHEsyDRrKj35pHUDh3SmZe6H57NerWun7"
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
