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
    "57Q5SHxkTcrpdn4GPy4wqZMRUbCQtUsYeDTWPTzUfyheF3Quri5mNiZUZmj4YMPsumPWrbZRxeDF9UfnCZhc78z5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ocjLy3bCejJh1zydzShE6R9inYBEd3GGSNoEr89jcnCmVLcCJPZQikkqMWCZVa8vmUX7pfsJXh6rWojsicy5W38",
  "key1": "3ztHEhsXVBwaqKCFdcyG9DmRcwrBxboNyWQvZVYNwsMNFZS4PRxvTAyPdj4Ttod9iSmp6a7FrabZhBQXr5vFGpxm",
  "key2": "2DTUJuDgLLMGBqvSUAr2rDby5jDmfTQNZ9y5utvxHuzgyMtgNqi85h4Yj8TqpEmKUZquoWPwnDMWbzeMYWYKe6B3",
  "key3": "5PkJVoLkn37icba3sJ1qaVVWAyy535LtNtCC9HJfRJadkaBokMnTsnTPnFj8ty8NSvxLsmz8gA2Sb2eBaED4E5W4",
  "key4": "2N3RDY8pkmJXfinVq7Xggn3cSjvuQdo1C9AySFv8mWkt6XH8oxpy6VFBgSyQxooxxKRe3BzXr6cYZ66gmoukvTnn",
  "key5": "36KwpFjCkDDWeRrjjHunTBgDK2j2Qok6hC8WSgVbn7o4wMLaxfGTfUjzGrDqTCHpMEY1zzMpPDpuioZd61dyktRQ",
  "key6": "5U1QyLtbABWQdmNBR4XpUBB4xnrZZq6GRSQWAMppTD32pNcycsqHYVZNEgez1FSWfkwKSvrB7XA3G6hrTvVQ1zcC",
  "key7": "4wWPYBimK9nEsGDd2zqWao3F9UtgrWsx5cGjZNFE3KFzFzERjMttLeU2KB3mEtM7UYzBZ5dAFChmc1XjcTbGmoqt",
  "key8": "qXkdFjKHJHhMXJRmpXkTVQMtuAwHsDhzny9yLWg2zC9Lg33uuGoZosfV5cnmN74YuCEJafthutgFUEHL6NgWbQH",
  "key9": "3jByCG6zbxTWYmWn2tXFdLwwVRSjz8isv6QDkG7B7JGxa11UmvLsBgkm1CKzWWqW6y7Fstx3TqGBELE9zt2uwKQ9",
  "key10": "4H81irGEXv2rpNqYU4pUjVrPGquoAm2yTEaeVSUUVfNPJzqhNhr6Xo9aekKVHjZz4nCcLDRUyXAw82a2yapdPnLC",
  "key11": "4Ney7sA5JPohe2LcWaU6ksjWtqsNkuQXM9sjWtjgBtQ1QY8Zz8M13EJrBtZqo994DMRXNLt9GMcURHWFzJnWeVZ7",
  "key12": "5VGTpjhv4g7kiGo8DD9vvT9PZKWmEDpUtN2AXDS2A4QurCRVuBsr48gkxk6rGjvEGJbRAUJHjAhjSz5Tj2SLU4xg",
  "key13": "4VwXAg2mfv49NBDGaaUbdkW9PSwpJRDz5n9PaqDgiEfTwD17Z3zGVVJEpQ8ZrVJ9XYAg9HXUgL6eYyW15boBXhMv",
  "key14": "4ifk7CDLi5gyMTVnuwyH1KUk8kh2Vy3yW7hK4zTP2BgXtG5bsDEKH1oh9dTwDtG3fREh8HvSz9rfKxUfJJsKZQoA",
  "key15": "5uLcn7zkR4Hqj4xTLWWPMDknfRqQkcinyr2MR8CK8N4ZdWAMkd7M3KeD1D3Tgai4UiRMmfw7j11ciL32ujuTpxVX",
  "key16": "5mHS434duhgtaLpWAgsgno6s7hXXyJgWjY6RzvJxFWqENHDZtTXPMYF8zCmUgc8FQWSNhpVN5kHo4CeZuVHLwpsb",
  "key17": "gvEdVgGjFqSMgwG73KYbfAaGAEkqDMXW8SXfWbYYe86k6b4z3sxhTzoHBwHXNrnFiCpBgKRq9F99Q2o7fYvU8yd",
  "key18": "vgJemAK7wEUecVPR3hrn3jum4xC7LAdrteHcenGDbqNbXAXrHNCcsH6tYb8vEra1x6Nbv46oEBrV6HDFSqLjMsb",
  "key19": "2DKLRLKnRVjKYXdhmroGVtBSGXSgsr97TifeLT3kGcwYTRzmWWf9ooF74ZgfybpbxLFCQLqURkniDetwarWoEqq7",
  "key20": "3ugh9CpqqYHQ2AnsniPjLKdNFtNNHkouWGcGFNH4kFZJGyWHXN1Lj6w1h4hi4WQrqpRHC3DoR1Y5vMjWCDB3Bj2M",
  "key21": "48G1vbCP8wt1TQQLUqvc5J9AcCF3VC6CHTtuXBTn4SQvLaJXUSLRV5bYeqsM9auKnyc6r3ku6HNAKqfBAb8gk7C7",
  "key22": "5k96pZfTLjR35tQ55LdX6nW4cU65tH2DRbfxJDazxq6tMSwPHggUZiuBkrwe7WEaDLZiyKyk6Jbbd35wbnzVa5wK",
  "key23": "4q3JJPEWHCeDtPZh6KaeaoFzRqKLJfW6EFmbWLEzq9Eg9ioDXmoNZgZbaPnj89FZbZcLosfDPZy6j7WwmZDh5CWR",
  "key24": "5TeoznSBSMBtGoiSwKweHvCkggijFPkToHSzpNn8hqdw41wRsfEEgEUmZ18fD2xrv6Pq9TwjJkUZMLo6H9XPPe5b",
  "key25": "3rPuhbm97gEnnuSRyA2oZsDbiMRuAzyM3EoEMgDP7dYyuCD5Tj851jjorEcQLWnemU6kKMf5M58rTHPGEMv78rjT",
  "key26": "349h1JSrGW88WtR9LJvQmXqNnXNxcoWKBMMBXhPe7bujzf8zbGM8WuN3PJeaiQRG92e23kc4499JMYAUGEMVybnH",
  "key27": "3S6UACgLgRmkApTPUGDeHvCpQnWNsVMAGR22rL7mzY418gB9QYPCSuUPJRYdtzGMtKaF2vGDL4eag282wJqVtwZ2",
  "key28": "2nD86nSkJHC4ATh6aPdgJdVmFUQCWJ8UVocT57jmJXRxSPb6zRac4UE2TjQY8e86Kc1rb86MvsFaJvbuDhgRLbub",
  "key29": "5bm358vv2oNgH8seG4XePQCmHVVZXJ9cBQJES6LCvr7vinPEGNV7Ao3MVNgA68Q7wktTTPEsqhYRMuUT9gPiQ2wG",
  "key30": "5t41tn53R9tbkFsaKfZEE1Fmzfn1iK71Pkv4keyTxNr44UMjxZjd6E8TeFuQ4uwe41zXGygMSCepm8ZtJLbaHTBH",
  "key31": "4Ps7P9ZTBFnxYkJ4bbTo8yQv5NdPVt8hGaaDEo4BVLusR5HAGsvWXJzwaCLVwzM1L1xb5GK1S4kH9xBQjP54KKeM",
  "key32": "2UFpxuuXL8c9YBWAEYADEJobqFhBYSGaKifTrvpLG8T629GnNV8VzfMbkTtV3VLaiQgfUxWNV49aUCQsAqYEmtsS",
  "key33": "3ZqwLpsvSxmk93ytE8R4oc9xEsyyMpyjSNQDwvJtCykRh3XSiFuubNqjM7hKrG99APdVtJPRmkPiCYRc66JkMhQA",
  "key34": "3DU9WAcyWnDbiBH5RbonDni7avVBUZuxBm2k7nm7C1Cg2Vunzs7gLCbhpLVyCmZCSkqyUNoR4L6GqPn9EiptdNPn"
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
