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
    "3HM1KMpsa3ReyW6qqokmtCQNdWE2NeTqgjXogteJgjv5s4jogZBCw7NTwoMCwHCT5eS9h8ruXLpx9Xxmtzv2aBEp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3uNgevWobZYTL7TMGLP1KHoPUS8Jk7H2DfkzST18fdF5YdArGtGiPAH7VckwCCmCrm2iSRfuKHKL9JMeCmv8tnk3",
  "key1": "T2PyuWaXZWXrEFjyEGmN5e6muMqHXD66RAyfhLLGrtkcJRM6h28N9sduhS4FNDYEtieUqbEENDKojP7XSbaZ2av",
  "key2": "5axY9QYRYVLAy9fA6oBvonAMr3BA1AVJTUmXwikoPiavigfckzUJJmDSQhu8pbZJZnh7bfBYZU6eNzvMjZS6wKEe",
  "key3": "2Ajp6HW8eD7sdtXEoRHDpQB2JXH3dsWVdR1CmuNk9YDjUCTF1kejaoHaTkwrfEh1LDrXsQQ2FgpbLEypJ8kHYkmU",
  "key4": "3yZieANoFvRNhUAwLJervBMgGC9nwQ1RmZRMhYqADo8kR62XRMyEWSjNZMCg5zbU8P5WEpLFLNRkmMYG7xZPj5tm",
  "key5": "4vNDLpRmaVnPbADyKYfrTkf8p13PdehiNVJQDMvti74RT1zggLxeqWx1EWJrFtrbbH2Xc1HQ3Untx26XN8YFo434",
  "key6": "2Z6uArvuX4PgaZ7znHnCkaVsYFxL2xguvN4C1pebwrgJYyS9WfEGp8Jfqboiyczq6rHToacRMMcYkvvqhz7nGFs9",
  "key7": "7NNbiJTUtvBzgWP8wpLQ5pcyDxW7qgg5kutAJxdoCQU9GnLoFCrtpGhdVa7bporqm13QU6qwpCvMKVk5FRseHo4",
  "key8": "5ahBrQd9sq37w3g1RDCtjfpGwMVVieXugo9Zo9p9ZLPX75qMQ6ovnzuwAq9PNEVgabDoj6vDjEdZH1wBPedqrddY",
  "key9": "RoBTcx5H2vPei3bB4USryfv7ZFyMJtUBgkKD7esG9qKAwGqVsReU47h8zEb3b9tcp6CPmvRjqhp6yLBcgXQv6kF",
  "key10": "4Xszxbho4DzcFD8rygRuDWszXtF6HJZikSZajpX8cMxkkMC8Bw3kNbt1ybHcMXA5SyjCTTsy7rJRWHwZg4NuZbrv",
  "key11": "3gsrerYdUZA2xbDuFCDS7jwpiChRAnGGKBVYpL1GEqvpRqBtYvC2sGBVL9V63W3WcLMyu1mdCMosjVc3SqYaowZx",
  "key12": "44xkRJvCKLRbkPx2L7a9X4WYMzLbJEiR59sUiUSXG6F45aMZ1to5v1g7hr9Cja1KQuh2UxgxMzropQmWX72unKfo",
  "key13": "QvW5vHjedbxQcQdyFCUPceExopUBbYRbdPLLpwvJY4JCgLctgbaq31zDF96Z1oC1m7MLNo1GHcXybszBmDMUC9x",
  "key14": "5WUJVaJrfWvxx5o5ux4KPSJAPmKLNMvH3zDsZhiCx1jziFknBRACyvm7fG5LbzQif6PRNFsqA9ZUDHAYvQqHFcuS",
  "key15": "4XGAm9eHZHKH3JhKaEbiG939pA5nM32zfum2pyA3z5LRoQyEUFXM6uauiCWTGHYjjX89UKC9Q2HHB6FbSuP6ks8d",
  "key16": "5KZXkyQFbPPiAE6E5Rx6pdiBx7t4KtgAu1P6oPaigVYRp2rfFhoiYGRvWf2BLqKHCbDrimu7ZTUnKobzAmCX4zAn",
  "key17": "5bDa9FX82m9TGSKh5o7u2c3EDBoNGZoziKfPp4tfsQv5x1gsMEj7TcdjEc88arbzBeKpQ4LHjWz6EGMHRBrW6yf",
  "key18": "2FzXPdtFnmTV7VSEAE4erCSP3ijDdPpZ5yVrrdnTDULWVLgwumgHfjGaBvFAkFQKXJUnZYZcgkruwsHkYtemfM74",
  "key19": "eMCUiVPEwsCZ8WpmsWjJRVDaF6SmZRiAi8g97j5iQa22hwQPdQtcUb3md3m4n9L3Rru7mj8DZAphnNC364o7yjK",
  "key20": "3j4Ushi79LDDJqWRVhGpThR4UY6H62fuKRvBZVqeiMvKJDAGdMdbdYebyKEYbfpbTBMuLPucw1tAVqyvwBMg5w7Z",
  "key21": "2hFA7EMPVgxJJQcqJqRM4E1Ccub6M4KgmiuwWovWBxL8LqZjeDiC2tXNqgbsLFDizoSumx1EMP2oYUmQQxZ7aTUu",
  "key22": "5V95x5GGeT1LVQd4ydo5v5JcVbgG3ZbJ2ZCSV3jq45fhpnTvSQFWX7BAqkHvdxwp8uP6dPGGKBAhXktx38Tdzker",
  "key23": "3Fquc4Ly6D1oB5kX4zxaZqFsydE5aBjLw3JY6tsM5z9unRx1WZimkarLQrc5jYjQ9u9wBExxqpscBMJQuNuu6isg",
  "key24": "3JXvbYNLmtuZgNW2b1cJeJU8Nt5BM4wwn8Q3rXDwG8wbk1ytbxQTqaue54ay38wSYt8uom8NFheWzDY1skQpZimX",
  "key25": "4qD7NsL6PY8vKhTctkhMHi1G1WbwiQttTyw4483ni4bk57JCaoGLCviS1Q3KzNRqgqAG3MNaC9CsdzKzx6gMNo99",
  "key26": "4c6nWdYRtEQh33c7L3vPYCbSM7MzhdQqBPjmZUn6RHiffkpnxevKLsxukCa3fzmG9rDrWE8riY2UPmuPzPUYtWpZ",
  "key27": "2wEGN8d1aTHDs7jVUEEafXdLSJB7KFHNQjdKNCD8VoypcA3KREKRcsgRutTN4efe4psrGaCHiSEy2SjgUrM6Jpgz",
  "key28": "4kK55S1Y75vTuFojCUkpri24KtESq66yXQBb8Lddup5qGWf2hqyqY2puePQFGGHz6Cc9B8NDsfSS6qCKoWKRJph2",
  "key29": "4X7ehQv46gU4ZqoJ8yuhxvjU3U9VsRrEPUJEiAKvwA5MxV5mfv11BGWEq6yAQaBEmBRkq3vM98oEd1wjGmUd5Kzf",
  "key30": "5uCoDzydVfem3RJtmM3NadrWAasZBd6XGr5cpcJZsQcZNM8963xM1tRD2yU7vs64Wi7ZGin9vRSjwsv13C7CEe8X",
  "key31": "5iCYNS1gv7WUZLkMeDP3WHrYo6rDUAirk2vfKa8S4MbyBe2KnNJotkZA9ZtDXx1NjDxqahDve32CHSKsKtL6uPi1",
  "key32": "m4E3JNY8FLnukoKkbvZj3oPhyNVFw8wDbNLubE6qHhGTLUfZ2S9DfGigK7QRMBG423VNmu3NKm2Hk7mrtGtVtTW",
  "key33": "2NYhpS1UyxPDk8SjgkiosvGkxzXJHuhi6f5xgdcmWvcBa4WgjmqaPt1d2ZesTARJBWW32UHN2hNYYB5GVh6wFeFq",
  "key34": "54LpC2w2LzyTktwsNYGoKuFysJLLMPjoyPQiF4xM9t6BQf3G2Ui59EYAaqyZcKEcXtyxeoawPoH7r9r9iJWV8Eh9",
  "key35": "3uL6roem6b9RERawDKnPun78ULbXMVoMReHxKAj5kPZxm8YwW11gtJkdvRnENz1b3VFZzkMTYJbRCPemZfbKAwrm",
  "key36": "2U3hYfRRuGNeQtFxzvBXvZJMKwV5UxThsTWmFqGjK5JPe9FtQ1fzfkKtQ8eBm8K2ehDnAcn13aM1DFE19GAsHpDj",
  "key37": "4LWqEjiKSfHpjKykQEBrhN8d5XJSAR5QNazFSzsczH5S9dVSnASMxojZ9DUsifN7bRiZcpu7HvJ7X2knHXC8YC79",
  "key38": "3HWKvaUUGRiDze5oZ1h5m9Wwt5MofR8qLDMEsc6yi4MihbBDSXWTtGQKKMUhTWZz4N2iQy2m9gqX6A5GZ1CN4ekw",
  "key39": "yCbtCirULrHXB6jpsdjsDc1rdwQCZZCvFJoM4j1kMjtFivS1zQ1Bi3Q4MGy1Ns98GHMP3oW5PWmnkrNkk7Vq9Sf",
  "key40": "4B1otEzPPUxSc3eueAp4PEBuRBfKhj2zT5tQRStPPdXHAo1Z424Nn27PX3h9f7zv17h7G7quqEhUZEyhiLGJLEiN",
  "key41": "2zgW2EnAEbDzYnWcYrsH3avCaKLJm8BSVygMvpwKbThtLjrL4rDkTu2oQrxFM6PEAwwUuoowuchc2YJiNkTciKTk",
  "key42": "646TLfhuVhvX1urS8SVR8FqXDADMiRVL32fk5p2BQ6i5JKseFigafdaWddTxfMYXWbJy7sDwyACR2LUc2pa9wSMV",
  "key43": "4MbFNotD9nxXenZnvrCyXoSvqS9LdyWgGfcA8KtbdYhvbbFRDt6BgYpTdqWnT4WbzyUzhSCE4CCHyxSijE1sxwZA",
  "key44": "4xTEESUeYRDZyUTAfLwRqLiXh9cwFSwRZAyC9QYKUmtwBH2W9UXiJfwXKmySTxJ1sWwrGbATyFGgHAkygLKnHmUY",
  "key45": "5S3rDzbftM8eqFqo8CPxmGNDKJzsjVwjxcSdRETEt78vJydDnQLixXJWkCB6Ktc6DBZqNtewRGS1R49zgChk97Rf",
  "key46": "3NHrw1ptwmyhzRTYu4b8FesJVY2TtVQyePVotCPM95wRTjtfA3j51HC7DT43C4RmsSQUeY91cMtZtDqEB2QUD1SY",
  "key47": "4PC56MGNszXXYqyZXQSKVLReminMCwCoMVnEStd6SKFdkmCqG3E6YbDYPfjNq5ZiDnHjeYfVUvro9qeMdRXVCKPu"
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
