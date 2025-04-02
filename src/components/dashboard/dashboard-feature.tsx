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
    "JGZCf9xi8epdTiejWwmdceuCTCYEQBRa9BnDE1scaBE7mq2bv7VT4TPRVzWJ1Tg66SCqcKPAGZk6XBFU2BXQ5j8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Te3CwRAimpNnGZwJGgiQrnWshAN3efC9r4o5hkJ1fxKCquBuwUyNEYdwoa5ojm4SMuMGPQ7wZ7F6znB9HnDbZr2",
  "key1": "5RAaMQE7i1u8St7u4GtFwo4szux5HBJwhLVT3CCemQWWmbwsddY7AZ3bYzpfaCsxEwmWhAH7NZWaDDr3aYL6pwj",
  "key2": "4DV8fqRd722tZJtYBBESNP5FWY2jrUvD9os9Sdy8m7AzPeqMmFH2Krkqdc9MAHdA9L6vmfewUWgERqUFsXiCS6WV",
  "key3": "4aZJ6PLj4R6uK5cMqH5bX4tfWY5bXp5RGzPNT2w4oiAN24eVtn3zi5amHgELuitH9JaQHvUpJhNqGmABHZtBAUFz",
  "key4": "4mXYY5b9V9Ejv6fciYkECRDUWzigPW7q1wPf3syZisjNT5EkhH4Bfs7BTChgn21MFG5URjYa5e1EkM3BkapRS6Wi",
  "key5": "45rXUmBxf5ppRDnbbtjDDX2vFFMwWn9u19iUcbFSojPpbmk5MeEVpMinLUgRHhdfMu1WV3wd8deogP7vQFTqS79a",
  "key6": "2piA9GMwENwmq7rU8SV8o9ZA1tt9QH5pUeVxz8qfA7ymxE3Qx4L1HZcfYmw27VUC21iWcQUXYeDnXiquB4yc8Mhb",
  "key7": "5MVAYeLZap9rba6T33vq1vBVg4LF7pPTwQABMyQF9MVBKHjhdEQavMmD7PmNsERwVwwpK8o7TbPkxNVFe8GoUSaA",
  "key8": "3g67fv8izd3AuzZv3wE8P6bdFp1sHNhsikhKTZzBZreGrrpGr7KMAYpcMm8rqn7yVogWiShdd3WEMS68mRRFM4v3",
  "key9": "36q6kGyyXeeQRcJH68Dcur58qzL3LtFg1eFKQhXhzYrNYetRifTh1YkkaAgFr7bPNXt3XtZNbDQT8FX9Yrui9Y9M",
  "key10": "3myV13TDentvoyxxQWNC2Hb9wibdVDPTBs7z7UqsucVzDXF918qAShGTYKz2NjGLdx2qYtQtA7dFJ6zoxbFZ8Upc",
  "key11": "5e2tGYWUZe7qrciMHF2vRi7ZV8tbAUE9YnGy1EnUdurdyqwTTu9pK27dMF6HuAwioN7UMe6C7pUH9pVm6WUq1QeP",
  "key12": "3BL5G3e7yHFySkf4MJBYa8uSy6qFm8hmtbLkPd8DkJZNmMoizCa1Sn9p7mmPnxiPM5FGgW4iHg8ZS8U3iYxhfwMJ",
  "key13": "STpTeDHh4exEAjHdc9KMbfzxNPPoGXfGBdFVTrd4NnBcAB8Rveq2mckDkpB2wuWW7mNPDWBevA2xzmK1bSbaM9T",
  "key14": "4q4rnvGzr4nAv3BRnGbniLeFGoC1g9jpvPG1PLdxujPskd6PPvcnCvpeaY3HNVjQu9pPLr5yp5UuVWWwZaqnE3J6",
  "key15": "2bkwmrB57Mon13GrxdQ18kGznYzN7FiitYVCGpAgwpVakLYhj4HtARWYrd2xAokS8qx3pknDM8JRa9jX9uGPbiws",
  "key16": "4gzyYuQX51X2dkfcvRy1vepYvMGkCJT2PYxPPJevSVkqksALczgCU9hvmh7kRUzcWY8d4KgBsbt2DVoFRCvCwNEH",
  "key17": "4fd7YTxjDZkhUJjNXJHkYtWzGo5dt2ohJ3o47egkv4wpKgLnC3eQrCzz2napvEzfbtGgwBxAoW89fq42fZdwibDG",
  "key18": "3YDLqr1PmRDViH8LdWfBLx7ZNP4YEFK16oUve7BawTE3KEJZj9Zwcym8LfbH8WGKbDzGVU8vbJJ5dyVrtteqzBBP",
  "key19": "S1DVSfVAYVcu2rXpW1wJ5xpD7sfLtrcHCN3ij1JdY7i1T3gjb7qd1FueT3zVnXt8sMGpdnSFiSTw4Sx6a5xAVvv",
  "key20": "2ng9RspXHd5Uhm3EJ2Lrj3pQpgsYfAPzvxVBvbzhFHMehC7e1VBiV9WMDDezEPDb1sPvydoyyeX2ceqLEQphsJs8",
  "key21": "578k5t1fyZNJwaQ6GFvRMmcMwm5mELAdupJdUvcBFANucd9ckAVNxHQ6kHfPKgBPfk3eBsMq3g77MwtYRxFDn6Wa",
  "key22": "4VwKZHLr48j8NRPPCV3JXnSV3mQ7cUC8FrbDSYsiB8j3VvYFRSG6a55BoAPxeoYVX3P2MirdE9NuANktLhepcKZv",
  "key23": "5C8fPG9a7RVS4SYs6E6397SMMrh12zL1UoX6Mg94kzKAxUrykNm3Scmqi35swBfUdAXoUELmEZdpDGyppLh6dCgH",
  "key24": "4v8HQSw2FwFxa6rdBA2VUCaq7z7UoSohNaLL9N1oe88D9k3DdvtUgJdAT1bqSwETX8DXTfFYfV2PdxaS5QCoV4eu",
  "key25": "3SFiqfaoTTckVMmmgeQSDjokwDYKvKwMp6PLjjssrgdobpby1BtHxLiBXj9npCvgZ8rawANjwzBtU5EGTKZtjCmc",
  "key26": "5KesNXEhu31DvScXHUadWoKEqY9uNbXJMo1EkWDQEczxVb5Km8tQQrwRkQZbcxdiG2RG7JBgH42fPeJTAnGdQVnH",
  "key27": "2VUXUe2NoMw1HuFe6d6s1664bM7gxj5ePtFRTcAu2gdGxQgGn5Gg46n8JxSR8WxUzG4hTqeAGpk4VfD4oekrKZuV",
  "key28": "JCmp9EEpvfCqdcgxPjoFXAD6fyZp5eiFFqPdd5DRKX6KVcL1ECA4hyqwAdgDJMFL52jLjJ4RBedyPZQX6TdB42j",
  "key29": "2DpjbdsAEQmjsa82XmY1p1SNmQpkJo1j93rvVdXG8RQ38DFbSQ7xXDB8gqA3et1ap5oWW8tzDTVTmtku35x5KHiP",
  "key30": "3Zwi8o7ruJsryK5vVaYiLVdTTVyVr2FZiE5sUXKFs5g2ykYD9HhoBxBFBUvvtGFysrvzEXeQNxMbEMPKahYFduHs",
  "key31": "eWDdkwnD5GZ3L58YYSiwnCm6dPpAkbeRoQrMmGJ8WbmSxUhRkAaN6nVuwz6DVrPAja23RNVLSXrFHd2uGRMoKJ9",
  "key32": "CjdrXR8mn1SCFrbKd9qDG5uj3X3MSC71sT4oo4ox3GejEHf78jNuY3vugP86zc9iz4LCnYcMSqcgGMuymmrg4eu",
  "key33": "ZupVw4VWHef2Gyn1Uc7tdStJU1R7W7x3zZQd4n38RELngkQFhz9mDenBYWmzLKDzw1ZdDwuX6kEB9ZSLZ54fXMS",
  "key34": "279vjxmC7S2Av7AKmwCX1XUDm4tKz9wmDTzW4LGVqLmg57JfWXeUVN4CywwsTWUcxBnxFsy9RkRWfU68KbLq4aKx"
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
