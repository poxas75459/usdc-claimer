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
    "3KWjHiwaSuZsSgwMXLDYg8SYvkigNvBSgrfEjd6rEQhxBv7M7R2RZVgG1ynazWckCnAth5egAbu8tYTs6Qo6rZKc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xHWEhSLhgdcSZ6J35DzsujioiQtSPjpuQUvjD5bEpfKGzAQvvKbpQocjP9g4XTd6PVwUkxhjYgXvV95srboq7g5",
  "key1": "45FLyTindknz4JJJpxe13GKx7r8u44Q1q8Vft26KP54HzZ4Ypf2owdo3oSWdwqfjJCXADkUUhEM5tgxTZxumvFCg",
  "key2": "5QEvP6MzyNbPGNeW1xv54gUooE4tDcnhJGyTh4AvJBdbQJwYhPJkAELTis3gowWyvtB7LN4jiHeAe8yn3xiRQ9xH",
  "key3": "2AtpHV5X1bvVBkg9ENy6qMw2XAr6kvepxZLaRSgMJJ6CdEWWQzwVgfWdbceR6P4EPahgXMCRjTe5bvbEifzmvVG9",
  "key4": "8uiJKVbFL2Mdvm5PvWPNfTW8AkmYUSTb3v6e9Hm1wQK6XBQU43VbryduaUBnHBfW2Yxxfjv8vbzEgpSe3dXqdEM",
  "key5": "48yAMVD4SocnMgvPinBJ8PJ1YPw9WXGjohyQpnvEWqH8S7EB5LKfFTknbAaW84kQp8cP4vpYmoywCGbA7w1wbryc",
  "key6": "yWTidKBEbzTA2TgvqUaMbHWuGsYYijcyW3LZse4HqrZsiVU4HjpjJyhJgtLEsYreGFV4jmJKPgvW9WNhd9uLJ7Y",
  "key7": "3i5TJDeejHVtgeuGRgbmKZTC1EBvTdg9nBeFW337a7JZThnpFAf6WLmF5jn39nLWYqSuq2R4G7dDsJWSJBZ6yjYY",
  "key8": "2XxGcJH6dB7VupBb1Vv5NKuYunr3PZCNEVnChnfMTgAWBANsznXTsV21qwno4nxHCX1ckxX4HbU79rthNRbiaUMj",
  "key9": "55aUXFYZfdxQ4i7yKqsMNzM9YyADnAkPbyztBYRi4zkf2wpxTyytw6RQWHidArKvo8PHyB9cXg4cgvMYMCTuq8Bz",
  "key10": "2aT5BSA5t4K5ubQMrzLVKcLxphRNetgchAwBoo17bLtcwWNZ6gqJD91jTszNeKYuVTf9DwFsiFwdAAHPajaVjRso",
  "key11": "5HE3Bq7XMrY8ETpNQ4NXgjwHjLTiAHdvWjobgge8QLxWAqn2r7b9XWerxfXN2RFZKNyUckLp6LZDzRQZL1CBrBrX",
  "key12": "3mk96D1PVBdnMebYThCLftkL9gihbgk8x1gmLUUYk1iyjcNjos1GP15GRF1YtKvEvQWshs9RuNHgSHgx8CqZsv3V",
  "key13": "65hcrCXMEQhw9pToaVZnfVEzW1X9yo8JMkR1mugWRtEHnn43WfRu5J2434Fmvn8TMJwdgSkKsYqvA7FQXiWBZPyq",
  "key14": "4yqe1tfM36dxdokbuHH1P6LZiuH4osnB2MniNoVTb1ty3bqarmzkSTNUkML1vEAERY82x9b5g4SVkYqNnNtmyuzf",
  "key15": "2VNmLRBXBoV3yco3Fnv2BM8Hb3zXWHMQQ417xmoghgbacZqf92Fisbxrt2kPxmttchFG9z8FzNMLPJ2FyzJm5jdg",
  "key16": "3gBrKzypC8EPKqj2TcF3dtmCBkCzoiJXYncs8v4qKr2R1MqzmYrekSdjdmuDoAbjMuV1bvrJTdctJaTsPwVWN933",
  "key17": "5U3g2UA4cXvG8dB3w2ENw67n3fMeAd9dcfab1PX9wY3S287Y6qxj3RqTr4X8m4jMPCjRavxQKS2gpcJ9nnExdE9C",
  "key18": "4wbcEvdqXdkLNGFmXeSbZAVvEMm3YxKbDwMe6SMsyQYMzNuQyxYLU31KizbECj4aTNNgztXTTWAsG3D9pke4CuXa",
  "key19": "3Y8gamsbBgyJ6T3ne1NeBjoyo4C8HqbH6ctcjNH8UqkqP7eUbXvpcugnfJ2EZCf7hMTCacQJgVWEbzzk7bggq1N9",
  "key20": "5bfhxmqm71Ez7nhfai5ra8NjkfXrY5o1XJdqVWB2wMCCN6KdBvgoG3oqGnoocyTqbR6guDnroQ2cetARnHhUiRix",
  "key21": "4Ho6CBicsR7g3sWvn3753wgRMuzkY6sDkc3cV9BMEBUwNLEKsLyq2fqoLS61o8CjNHPkDTifs5SvA57WfNh4TGnS",
  "key22": "5AW3ByFLLfw5ykdBE14iiSPxnKqb9CRzeqYQ8PLMebzj9ZyZ1RMnPXXjL57dfCBShD2zwCu9JmLDnzZT33zNpZnJ",
  "key23": "5tQghoNonrDvAhxR2At7XF2BgTD5nwMSo8VFMFcUn1jEjamLBUFFncSFgxzzk6Fak1FY62kYrHnvt5SUcCFjoJqr",
  "key24": "5EwCTsidST5frgk5TT49GQQQaMuoLjRviJGgm2TqBQqUU9qm4ne5Utm1fEoqcGvqFrp1qcmSi98pXjKCASP5QZ15",
  "key25": "5zThUzjeZ9zok65NmVqHqT2wMKFxDNHXi9ESf367M29ajwkrtnAYB32sut8DGq6TpFtHJTFqk4H8nwuKTkpnNxRD",
  "key26": "3jufBwn3MfvYF22rPB4WEnhaU3M2N86Xr41CWJG9nD44bRfZKjmYUgdoHbnkuVVq7AVy1tDxTzwBWeTMnszqiH2S",
  "key27": "4nNmtETmyFQSh4SenxkiLjBjk7ae89u5FLSibH3mVuk6qQ4wBv5jjNVhCjhpfKHjcnCg2a4jTwt4UUi3LAnno7Km",
  "key28": "4qs5UpeJ9tBX796F9Fm3g4sSoo3QLr5TxtCkatCp93YbBna2WvqdVx69zQKjh7SWqXgEcq2AJTAY2gJkh7CBo7fL",
  "key29": "2cHZiUDk7qMRH4GgKPF8Dmsh51ydqYtF53EWrzXbxvwqUM8TvnuBKyaKF2Tm5AWVocSkxtwS12PK1BrocKVgi5oT",
  "key30": "5Tx2HWfg2mGtN1DyHh1Nrd5rJMXCrAxishpwUiXmMGqinAduwmZPJyhgABFppJ4jt5yamLikXoQRemkRQHTYGRDV",
  "key31": "28rz38h9f8zEX4TnpVoRDKe6kLFdmWDaE2cyTSr5ZF5UHZReTxzDDzLWSGpMz6NrYijazUwYLiGL9hpay26652zM",
  "key32": "3DoZtExwVxCdewTgnGEnfq7h6uBRnMATYjNgBjCtrPVuWkPHAL41GU15Qbt1tg5vbCKptCYmJoFPH7NLbHdQRDYL",
  "key33": "3jHmreRS1ezVscemys4ALd6USV3FPMpdS8GFv7V3QALy5v98PyatK1wzwnNXYHhYqQcKqszuthnDT6JVNxSzeDza",
  "key34": "3dCnDQE8raUjChtym2qa8m81T2WZiRRX4MHamQ9L2YMZwZRwxuZiGL3amzQN9awWU9ze3u6F25KrpZsfhHhJg3ot",
  "key35": "3Lri51h6wxTsPh8334bQ7m8WnJWaFWjeQygtKCmcDyypxi59xiJ7BEzqam19PtoCse8M5r3VCsNvMAjYT1H1vsCp",
  "key36": "5V5Wu54Q78BqueDWktsHXCmdLR4pFU5g6o3MY7tqA7eTR1jfsR7WifyWTzguq9t22DhsiM1eE9NPhutPv1wuqnNK",
  "key37": "PmJfSncnE2WiwaEeHBEhardL1yiqRdroNFreSHuPH1S4ihU74s4G8byu6u3cCdVvDGmpvmwjLqatk63pj7pqxHx",
  "key38": "3qmTWTiuAmLow9YhbpaQxVyLwWAKCjd2Fd79kMsQhTDFFDJfEDNLkTjqzVVnvaRYr2D1UdVWk9cZBjqHNaPFWADT",
  "key39": "49E8xfmtETWtZ5QuRhmWxwaFdkoPda8LEePpUZSLipz7jxixd86TJR5yrxb42nakSM3gxhMsKWUEBvcHPuCB1ghR",
  "key40": "2iGkraNds4obJhQ12TpCpUyjEWE6qsVfusUWpRjFMJPs3obY2E4eQZFQ2CWx2LJ59h9iLKBGZ6q7638nihbaQ1Ww",
  "key41": "fnLT9NDsyX3Zi1Yxvu9PrmwEdB8EbsbSvZ1KqpkYebMKzujydeSc4ZbNMbwj9j4kCkW8UkLYSKFiUfAmdjfUwCz",
  "key42": "3ydpmEimfqDRNFgENbapSLDNVCHESqh7Y87RNMd3ZguiALR984MVfrvtNn5urW2Dbrq8eQ2aM8QSapgUz7cmhhVQ",
  "key43": "2EFMZAg1buy4c5sTKBuz5kDtR2vzAubrY5zKZ3NP2R4c7SxTAc98ZxNHcyLhaLo6b34w3nphwPLZYpaxWnAqm4sU",
  "key44": "58FtnizYgASP5zjWdCn7v6zYppJqiqRzM1uVj1mSXU977HoCnh2LTZkcTyg33TFY7XHv3SivZBgoyBxaiN5Y7Mic"
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
