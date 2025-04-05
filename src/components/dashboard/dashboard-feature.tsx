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
    "uGizaubB3EyTXS78Wqvzrn6guAc1FsLewHMJt2FSPBavTjx12PEBkmKvSj1c4CWuJuYe4Xm24L5zAGa5px25wmE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VhdYZF2nfHeaK7zfRwKgKzy5GAoTTB2JoaE1SLBKufZpsLvverkv3364gLCU7rUam3CKJCWc5iSh5ZHAuAdR1r1",
  "key1": "43aH67enWRDxgd43aR4rHJgiyCZ2mYcgEjPhvbhditgCQvpCy73ieVqcLZybk2Noi1KJQnSeiLFL3tDkAwVxpfeX",
  "key2": "2cauEBCmAP1BUg6Db5zSDRcRdYojLGZbRr5oRGXq4maEicyacMsPZx62icnfVxAzE8qHdVqg6jo73sS2vh3VKR4g",
  "key3": "3J6Sc1knNF9fQEVCDyjq45Ba9iw4Xr9ZsSkhcoXT2nHvRdcWiTW8bFMHFz6hK3MMkjwwvbSz8qpmPEhFXXKAaX2N",
  "key4": "3ptdDZCEjSaJwfGvzA2zZNAuosbqcpyTaXR8csCeDnxWB9pjU1NJQ5RdwVXXqWr23AKUx6czxq8edPkgEJVpugya",
  "key5": "3zwhzj8wrUa18xzQQzLkx6Z5ZYsWnpBM8uULeodSinhcXsuEuSVtVBSiVJYG1xEsTsTtxWwkXQof6YPQdQESPmH1",
  "key6": "4iLDcz4B2FBkmw4p7em9wDaLsfSWpuRezq7mFLJtGvbWqqYQRhpNiHt1gjsxBmJA35BkMTWrHbrUAgvAHiEEWnu7",
  "key7": "2fiY78yrTKoL3bwEjp19cEDB9Q5zMxKBDyhHFgkZFThmx442NcgDq8eij44E2Zh4FrcL31MzQpmWKTrKc1uFWdrX",
  "key8": "3NLBQUjUy72yRaTtUkeaRFEV1Cx5SbNgStjUGCXDpPHtUy8ChxtUsGzLikfxvHW5Dt24XveRY5Tp1eWKhC9JmcwP",
  "key9": "3wSbyaaCVMR3yZkZNHtyL4zzkAWhniSSd49Htp3jXCnV9EbHWJv3Jr8aKorsUvqLi1pEZSC7FdPWwTWzz44y6u3h",
  "key10": "ZTjtL8q3vdcfDSy5KUXHMDasvf7JD9TcEZZdvGuLa6p3Dk3j2N9sG4WRDQXaVBswAzLa8xGx9At2mgBKSgqLyEQ",
  "key11": "2yVnX2r3VmHX4ppvhgExjHVq83NNx9kbzNeTRUuTB3ikv9TKKXwNreV4dZ5gnCMJbmadN4HaLcQvMDSjUtY733Yz",
  "key12": "yx8vjfibiXYXKpzKUgFUfSWNJ2W9Vx4ZJN9DxJUEef5ych5LtyrZ4UAVJtUkExLGEF6ZPfFstqQD4Bs8W7piNWV",
  "key13": "4aYrwTymJdoS2ZMG72dVVYgefe6yEL1jPk4ToGiBL4KiySh9cCPmduk5dYS76ZAcbpSoboEFPNRSDgiAcSusfvzB",
  "key14": "3v7AsKsKh4BpQ7fiPL2x5SEQxfsLupQywowxQh3f1HxubcjVFvVUrueg6bMaTje7C1epnG6GqTkruzbt1MFTacfJ",
  "key15": "3Mrff9GnxgKWYeeKHC36HvyMRJQeGzfXdrRnwgXyerYAmq6pHjRJZ5u91GUnYSTbGR6nHfN7L5vNsSyLiHYYymS8",
  "key16": "2J8KLjhSS7DyGvXCJVbKoHWcCrLyhF8eXh9ucYF2TQCwJgj7n5QTD4NSm48BcgzF3WNSta5UhzyBVmfwLFUJYvaL",
  "key17": "2hyFXZQrF9BJmWfUPQvpLGSEHQ3QwrWkTQWXhUJtfuqjapN9SMSZPdYtyn8hsFim1qsdSQ3GhnxeJge8SvydwnGA",
  "key18": "4qyQWXjmysATrEsmkwX9XDJv4zA2LBR41hjZ8a7thTeoURM5FSPS1KJpWvXffjjLBMG5hfb9QAxvfm1HLyXAbj56",
  "key19": "24WDacgjT715YbZBXaDPBL7eGGVwZTSsMBCPQgAktQaAm6i7rXv6uDLgHsBBi4gbqvC8gzc7z3CfCSK5DvZs6ZVC",
  "key20": "5j6q8hLQsfgmiqgjC6LHyrKJ32CwWHE3YpLHKh6Nb234E4EVPXyPBgYehQW4kRiaCznCuRuvEnsC1TUusgk3cH9s",
  "key21": "kJ1KL2yA7tp6HzkotB94TZGAVZAdmfbyjyTuu1PeMEvVEGREbV8Q5Z6fsa8DnqfTv93AFRKjV2RMcq7FzqUzkxN",
  "key22": "1XTQa5Lu9UZfpTHKhUR2AA3uvnoHu5o9rWB4wwMFFxf7DkKiEumAKP77N8umZbsFC4deSF4ZgyUi1VRdFX1Ar9p",
  "key23": "5EVEe4nxwm4vbPShCZKmoCZ1b47WsM8Kz54UiBSAGuvwkepMgM8PnAat2GrNvnAFMA5Fe4gMUL8E1FkRNEkiyfkJ",
  "key24": "5JEFGUg6ie8jCGCpUj7nkEkNuX5jE8FNeGK8HkqF5GQ7kwzZZgeHctGmj2p6L1Nt3mpgVGp8kYxuiNXRrEAYv2A1",
  "key25": "mCWPu872SyqRGDJdU3J2Rztw48JZnzbSuPqeb2H7oWaEBt3nzGNPhURTMm47L6TUYbnAk4tJqHgD6dCi9g2c543",
  "key26": "5GcEK75NWMRMrmXdE9hQJ87iAx9oiPB4fB2Eiv6r2abF9XvxjrFJpE8pWHDEMMCvz8bQdGtwEGLJjoo6PFDQPenX",
  "key27": "64ujvJTXDyvrPrmjhGEzi5TqGH7FMZwUVtT5y9b2jUSZdWe8U41Z9iGmGTB8b4LJ2VrzbhEagSgMFnkHprr5SuEQ",
  "key28": "5A5vsNdkANWYBV9vRSdnbNsa59LJYhapJg4oM7APwrWgAXBCwudnuiMcgDaFskTR2SBdTZifsdiiSxA2zQcUt7k6",
  "key29": "2ZsPo7GbPhrhQ4cAmkukUZDmotsYEdoNJNyBK4Ccjn1E7rf8frLdDn8TmHH74a67mZLbpBSnBVWBh8TyewtMjZ3u",
  "key30": "US5aonzpU1noAn6b3fUxmLTNuJurZ8NqwFntSZ8aWFCyCu1o5Z8CoN6oPSBjHZC5SLYdDzqAs4w8rfaeJDd8Wq1",
  "key31": "43jTekxo5PuYGBhHQhWSaaRLvSVv9m69zNPZfYtVaao22vLHvyo5coc2WqHrCMqUxtmNLNztkfXntDYJoqqqiLJi",
  "key32": "5Eiyau6A2Hfh3UkXoRPTCua8GsKZpWrbhZfnU36xeCba2HB461sPCNDHRpQBU9bWKogeJuJSfbZS6Dhx8KSuLrnG",
  "key33": "5kWZ5ix4pT5pLdLBspp3fZD1JnMMNx4574Ano8X1Nm5mfVA4WF78Usv5QkF5kmmBmk1ruZ7VziiY2sLuhygX4MNs",
  "key34": "4BuWBLPtVZhRXqfGe1AegT86fFPEzYhTKWDro9XAmr4G8YQoHVXe6qT6AhT8TbfzYfaPfM9rwhkBaif1BuAc9rmY",
  "key35": "ZC1myPQQHAa4r3zkN71zvt5orAERVSgRYuGDpCpV94aGDbNe1JnimYjDUgMidqQNobgqLDEDXbZKKp8iq5WsvXh",
  "key36": "Exyh8CN28jJFpxBVeoffG4DpJS5AkRQYJzUKVktLT5uZeeaGU88auYamJm11BoW8y7JNmCR5Db6S4STEDXcMNe8",
  "key37": "gT7GpXvL51f4RF7m4Lu7AyXCqTnMTo5n6G7W9VBme4b6gCrhk46FMQuQgwqxFRkB9ddXF7y6QzsdLXeVdFdApW3",
  "key38": "2GWiwmjbgdEqH1bwhBztU32W2wgCbjpYhBVvvqdJ8WP4zY5aRY3kdsivU1k5D88diqaT9DShSUKZ8dbBWX4UJk6U",
  "key39": "EKjdg67ehAXtWHdmUzrD7FrE78J6f14zg8XUnpZHYaNkRxxpovupYdvfDugjmtL2AnsedrgPTS1Fi4ub5jFJuHh",
  "key40": "eoPbE2FCdAobwnJP7vJFgkpqpT4JRG8W7qS2vHskxmHEL5j8WR8XE4jooeHsQUGU34Z7ooGfoaKGzNjHsSEhMVs",
  "key41": "Jj5SVn2UkqM4ExuNdhRiLYcKoh5YxXjezK1rGYdxWQsxauoWpvFwqB3fSMd9riAdnPTvgg6aXTpPsjSPfP1dAk6",
  "key42": "24dhNZqpCS9W8TgEdvCzHe6b6FjRwSL8S86561Vooq1WsPTnc266dX2cDXZF3eTijnZP2NZNae4HDR8rUyPMWC7k",
  "key43": "3B1sba6rG2kJNn4w3LKdLYpz5VbQTMHn4BsrC83ddEZ8V5wAFSS1wk8ktLc8Q6KPJuFSgdHfunmJUMJF1G8Tkhaj",
  "key44": "2n6a4xbEfYR89wGVdbVgnBi2zofwy2wAN7wD7YE3p9TFsV1HNqn6upSNgpYLHJ6WMBt3rRnRTP2RK4aR76rEtrDs",
  "key45": "5NbDpr1LtGrzfv6dqxGBsd4z3EBvePQA1nEUiJqVAPSxe48mx23DdM92EAQ15A6gzDN5uJ8vMQyJ2SpuwEmEDedL",
  "key46": "HjMwoF5cKMRiq3adPLBS9c2vozGSTKGDGPhNDT5aCrd11EBytDdaJDsaHgeYJnYxnJRBY6Myr7qke79nPEWxSnJ",
  "key47": "5BB3Et6oqyh4y4GT1aJ3utNa4qRCRLXYe2PwCdUmthuXjny8Zcdt355fJU4rrGfhfJhQb4Zhm857H2dPsDijGWqr",
  "key48": "5rdjPaG5XPHLUWfb6futh64DvJWXeUvQD2WxSecp1MwGgkR5A6pZKwaMHsK7YzRYc2NRPAbihBoyTB9raRxFHJNK"
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
