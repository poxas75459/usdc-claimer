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
    "2nd7XDmmtubu37zaCHUhckkpXsXGu8DuM2bhGKchixdqLzbGuPMEjfCcERpnKMdqw6ApdqPTLcLpaPw9PDbY94Ru"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JExNHTv7gecFwjG1mcYo9myJMFeirjJKdzHfo52L5GyXtk4mMQDDB6LKetvwB2x6ZBuFkGQ1nkDc1dz8Pd3Fqqc",
  "key1": "3gUSg61QNDEkDA2ZziyrxcKDEdaoL3R3JRpVmM1qVMjsHsn3ptnpgxbsw4KTqePxCTdPzUqdTh3iN843m4W69Bog",
  "key2": "5CbB3o1pSLYP6rCDsqfrYY738bXhSQ2EumgmQbvKNBQ8AbC9hDLHLj1Zd78HkP6tm5c3m5uozzq8AJi4sDLJTwqJ",
  "key3": "4pEGdBduTnwGM18EamksocCLPyqSjfyUqRZggrMP6n1Mtx6iZCGCkU3Y5wnW9KBiU2q4aZKMif33uvn8ZRYLA6Tz",
  "key4": "38A728sHF7RhDf4fSo5uAbXPMp8e1FUYcScEr9Fd146rydNJwkKkowCsVbgPJamBXBmzkeA1NK843jBpWjCpNv7A",
  "key5": "5TVKwZCkapY6wQ6U3AKCibr2MRKevh7XhzXb4H8fDHhAXZH9cVZ2QqUudNPd94GqART7b1PuSebomLa2oy6uUR6c",
  "key6": "4rpBpuK9b6GzBom7yFuuwYfUUXpXc98z869QMWCjB3uvbzju6grWZyVkbEp6vKjLjhX9N3i8mbncYvgv1gi53rTS",
  "key7": "3sPrb7JNGbS3aUM1336V4ACC8pDYyPJs2ZKZrjPuB5Q3i6bKUNY7FPDPq4xcS9e6pZuLpHXfb66RCzBvWqTMSwwb",
  "key8": "e2sHj6UPhohantqZvQ2UqV299gHehNa3LEztcWLyHMFiGQZLPeWvL1dZeBoRwX8mPtZ898qTvLosT3KFBSdN5Ag",
  "key9": "3ZsJea6LLPcodPqFTdXkMP3jhtBQiLdezaLS1yxHES3Z2ggHdoHXfQfrXsEAcrZX6t9vvkARUpXWo3EuDr3dMT4C",
  "key10": "4RXwFqUFVDZ4GzLgNMuVd49EhVaGJpmvVWQh3S1koCDjWA19Fjb9vQyZvnDR1pHPt91gPXkkvvWrwSjgRcmBoQbs",
  "key11": "3YEkdr5bQpBC9jST5W98SWv2UPQryL1UudUqypL6mf5M8FtbksbPZPuiRWWNzeizg4RqtX1fh6bVDSVVQHR8pX7q",
  "key12": "4LmBvGeCr2R9p72Cmawhf7T2ZwsSsYJkSDXoEHpRWtNTMaREmWM1r7pJzxHeqxKPYLuAh65iUEA1x7mQMuhDLwX3",
  "key13": "21sgBHLZztmgYmSXNtNZEX8HXnoJAhfLpJgdEPTqj4XZb6AzqjH2BrVi1o9nss3zWgJSM2zntg1iAhB82QUBayNH",
  "key14": "4reVkY5Pv2TCbjK82VvFrCj2igE27Xi6WksjWKE4d1MEMhGtNKXew4m4CVY9bLdnVehcCd1y8nqS7CnxNxRiJuRZ",
  "key15": "4zeXKjyBTr3vQqJtjFxAVujBUnaHLkrr5jJgPVxD2gY8uN9aAP3x3zRhRLFHxsi97x7PN7DvhfkgG9ze2EjpCGCY",
  "key16": "45mzKqxaG7MK3YQYqHF6Q2jX2u7cWt3ypg2tXV9uSM5zackQjeQTPsqaioA21w4XJ4pAF32PBP5KPFgKd2RpLByG",
  "key17": "35j6dpFXP3zzdGb64G8pyJSASduRTX4ncagnkLwZ6u4bn6XktjFQbdvbiNRg5VeaURkTakwhLyB5k5qhob6sPsQ1",
  "key18": "VuJuD2YurUNkXZcRN5JNmpvTwJXYnw13tAhThZkUa5CScg28AmUhu3fM84H8GrTnortYH8E3CtNuvTTXZ6H9P7q",
  "key19": "4zgDU1Sy6GVFexh5PSdM64MzqTyX2yweNUTeCSLiTbLdJp455p4bqzD6RvzqTydtsYwyauCQfAnnFY9YDDE4VFKL",
  "key20": "XVfSMjcbGUkV22HtgBpAY2gvjNFBoKz83dYXHUEPRgg4XmpaLxJXRLbxmsDhtLDEXut4XwSHqaM8T3BQGDbJs1f",
  "key21": "5tpq3gqf5GkhMsLtSaGFMi42RUpSY6qW1aKbhuneVNyAhigafRBZu9zwJAckuCWH55qsrrQXro89dBCLbTUrboi3",
  "key22": "2f5sadKU266sqUBveZqCK1x1zVp86N32WCFAVt5rvmYWyidzEceSh7et2G5W79nxvCqfn5SCWe6Ss4pyNzVARovF",
  "key23": "4MN8ACQirJ4DpZSZAepj4P49UpAKSZAhGq1c65pX22xZAXyrDNQNdiX4efNdm4ToPnmAGD5uPv6AcYCoqjxPfnzx",
  "key24": "3fvddtZBqvEvtRLqx6zqKdQHgY4QdcBZTsYM3Qg82Ejo4adq6XrDjCdhS4GXyY9SjBnyRKN29RQKCUNdXh7j3gPz",
  "key25": "5qD1LgaAxYQgnEfKgt27BX2DuE37NkD5gSGKbDBtZStg9N6vqDWJC95ZGRgt7Pa6BAY88eACTU6ZBwj3E5QNwyXo",
  "key26": "4ugrLAZY5SeniBrkXLiMDCbyos18Xj8cJuqjE4P5CoyzTpNmzwHh77JLhvj8rdvSmEJHpHK2gfUSmTBz9ZAAD1q7",
  "key27": "42to98SCg5YcvSGDDxk8P6g1DLBUyafweKtCqs3ZBmKSE7k3KxSByWwHWdGEbwQUY91k3DCKe93WBxY6PZxGkzuw",
  "key28": "4dnwi14ragqxtPnuaVHLtni3fX9MZr9dNUD6NhUZkTafYxV5W7zZahXhugfnfDePBJNX7CijtQKJsL96Jcuovwty",
  "key29": "5ysii9Kyg8qL1vU37tSZQA9PNy5tovpNCuNFF8ABypBmAUXJEBN2YqkyhGDp8k5MYWs3BMfEQHwfzrMGntC1MUnN",
  "key30": "3x6JghPsf5sNAKtAFh5vm7YDCoKLVfKppJa25WK7395cg5tS7V1fNLyU4MiPHVhQQFkiVvGEq6ZCRPEAdtAXd4bV",
  "key31": "mGLibeQ9ZTMf8ZZjo1PPdyUGR3wVG1xW7jTauWhX7X3asj1iMGr5xRVSxihF5u9bz4ETHZE422jbDGh3BpSEcB8",
  "key32": "LBTdiFsN1L63uDDeuV82HHXPvzrKYhPmgKGByhUyXrmu94ay7Gm7HfLAH6YroSXbVAHuM8BbBPszWM1gmj3aksP",
  "key33": "231SKEdHahWvrJnFPnvq9eTwsdTHAeYdgGSq9H159FWV2sSpFK7ErVxqQoj9JBd5UgWgwRK1oM6dkPqoh5t7faiK",
  "key34": "45hp8d4bnxKKo66BKdFuBbEgHrNnnKzSMmctcyyayFKCDDfSzdACtWR7oiKcousu6HdknrEQaspJGodejdSSZk7K",
  "key35": "38WYxGL5WASaDwNEuEYtJNowkmkrCrrUNZujxSdjqNN6bmJQgaFddH39BmNvQzBXR8xw5oCb21f8AgqB4BFRgjcV",
  "key36": "27CkdjLiF5T5b8B6R4hpC39HGVkxGGhiT9Ek8uVGEuhNcBwQrMYU7EVCxGrciiFneiE92bGQihoHKVGdXuKoEfxB",
  "key37": "5tuBmDrf1NjGFmoKfEniXCNPZeRDX21hsjMWredco1AkygAkp4uMG4xp7NMGqzSvG971Whhmdv5m3QC8vLTX6k3B"
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
