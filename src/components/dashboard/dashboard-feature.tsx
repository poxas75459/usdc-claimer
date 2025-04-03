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
    "UbVaA4WH87UmXGatYL1NkutXSG2iVtM5Zd5NNZddewS2rChVRY52HwPmCbdcJhDPHTfmsreicRcZC3AZGzYzw56"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "64JAG7wPSGn44sBdWtxi4XJ2vDnmtdsNKBM7FVdTApjg4seFSFrcYegiSuiYAcBBp3DFYDxdjjS6ERWgpAKXGe9E",
  "key1": "D78KsFxDS2Q48YMPg5bJnNoSqKjaz7JhmfrwGJEGq1dfsQiXsJM3G5jc1x13dnAw39JDbEW6bnWjkG8UZiHfg9W",
  "key2": "5vkKrTwQmtAZ7WzTaAL84y31VasYZQTSh5LNr7bJZnzwwQ7MDZ6P3tUD2ThHpcFu55jKmvtbpaJZZkUB4CoMTKvc",
  "key3": "5Np9w7rdMiPhL7D24pkGNb9TT1u8ttaUsBm5LhESMTTSzrLBTW2XLDoTRetJhPVncy8BKXGxrAjEnFFECa3vU7QK",
  "key4": "4JtYm9UayrrVRQaxLLtgXQxzLgA87sGjfsmUPXbMqC2wMLo3PFxPWqc2FVwYjExeufNNoPCcozcEEYYLJkcgHsoG",
  "key5": "64GhcYcZmvRPSnCjUAspAzUXPvN454g6x5a5Yj5aPSDydnn5AtRDsECpLCE9SPrJPVDq1ZbrZChb62pXLRe4eV9e",
  "key6": "bENMSRYZAJ77zAxUz89RWJJkcVGmUsZvuURVQ9ejJTTtihDHg42kDF7zYB7uD8i1ZzbGh8oEPnAfLVdYvMn7zAG",
  "key7": "27tzBoC3adjMwp11zQcNc68cW6FdoVQtY1yzUCJ2xE57WhjLKhaHoitNp4GYFLPyvppHX6yFq4kTfYGGDj21qK83",
  "key8": "wg1aoG8kau8n9BPtRcZLZeyraXuyLvoKhna7G1PVJR89rX6aSS4AACYB5oXq9w5kgYdDgTqygrjBh9n9WsbteC1",
  "key9": "63Yj4wGsbeZnpCZroaUEfS45p9sRrVkvQPUpDsjsqrFaPXk3b1QTeSK7StBzEvDWGkoYkcdMSLqF3pvoxQKnCHHG",
  "key10": "2xuUp5NtAXfHxHZCUWvey6JthT4aC8koH6DfRefRMmec7DhtXZBk6CtiEsynYXcecUk81dYYGkCP6WR4UaUgvE4Z",
  "key11": "4HWzE6saDRM43qxTGMpukgTAEorfXR94ZwnCRfMP1mQLt15gDFG3aFcTre9XUZ57SMWh6YKxjNTjMNiEGXNSQ9JP",
  "key12": "44qzbgdPaXDKN8yEbbE8ErbV74vq9uQJkuFvAPhzeKF62pG3ic78iPsQ4RH6yvbFhpHiTPNwpBUk6TwbrUxvkgjB",
  "key13": "pcFEKrn3Yguiq8Wf1kkkDZ7tuF3iNXJtBUsnU8fGDTZptvmhEB6rYcGGBmrxFRV59xht4QbHg79TMx8pPJKrHKv",
  "key14": "3NUQXWfEtgGz5Y2BqGzU2BMsrYZJue3HziPf6m9uCKsEKcTxg1QQQaM8s2fexYL1nmkDWLLnmCM5vXC3zwjKSEYg",
  "key15": "6373sEEcX2yUVbjUDPrEfF77ZHq9enkb3pZwzHTzgfEn3XrdcL1418DMf5WDYE7JbA2MFDBMnyyZ98CTp6Cr9VYK",
  "key16": "2vd5bjRmWxrh4cJFrnkkeB15jvjW5rU18envtaQryx4Hx4cVQozD9UNyPL1DXPJtPRWm8jdLQS6fuK6WwWYEiscn",
  "key17": "22xvpEeoG2oYk9JcpfW4fJKprPQEqbnLdENoZaS8t7cr2RNrDgUrYwVJ5Qc7Hkxt6STUq6ydHWns73cB54giYcZn",
  "key18": "5XAScg2kwURQLUz8ScRL1pE19jYQnvKQsr9DFB4TtsmWvBw8dTDKQFsvhh4AuXoqAeYfag6FQQ25AjdeXY58q99e",
  "key19": "5eyin8k2nXUNeQuzCBCMaSNSNk4HG5vtcYKgstw7sGmo8DFCmVqxnKuJVhG3Ewr9oHfCwx4gd7nimY3k72x8gjAk",
  "key20": "5NSLmYBS2R4nF3onT1Jygp1VrLNRE5ZGuboEevxuv3SXEiMA8rEfrhcXKMR5VaKPyuPPMr7UeRcTrFM9587jvtDm",
  "key21": "3NZ6n65ASsDUCFGqZneLEZbqBPmEUr912LW4NewHfqyCbgWrtA5Q1mnCTZqqzrMbzWdsbwfN5C1FwcMsC9PmBWDm",
  "key22": "2qrp7T3pH2FJDgWS7tbfZjtXzB4AYzQkSTSYwSNFGeQtdV7yt9H1K39MMvtkPtQ8onGQkvvMiCJk8xeZGNVdoYXj",
  "key23": "QudjBGhwy3647Hp64tYaFegU7UdKM6BW58HBMrk9mgGusgy6yKumXJqKdaigoCimwuAcN9yvXRykYCCkUGJ8rT8",
  "key24": "5DBJ4KHTTTt3TyxvJGuNtEE71QGQsE9eVs3tjdtBtgxZGywQyBb5AqWPscHG8D61R9dGLPLW1h3Tv15aHhuqpBZN",
  "key25": "PmtZschkE1ecwinv5n3NfesAM322c95VHT33jiBq2pvM4BxZvGykYF46Voff47useTvXuoeDemVkT3vvib76srF",
  "key26": "5qw5Ltqi9KQ6fPXrEGjjxLDo8gkfX4rYaHWxbqJ3JmPXu9CcftjrajqtVzzBdr7y1XqxAwHB36P9xph3kKAJWHME",
  "key27": "3wu79NQA3kPTCcgYsbghiwN4cbeCWrKqBhNvonzj4Ff4pTbQ8EmXeaRgVrifbY23nU5YD3Fm2tH8tFvhUoMogoHy",
  "key28": "w5zozi7irZdiiea8ceb6B9M9u9c5giNpiSqtpQorD77AY6AwJt8H6RmWEaUw2AbPyBS94Lyh3HcjjmkzEASiCZv",
  "key29": "26cRfUYJrTb3qQhM9zGvT2Kw9vCHDXZqxVtmTBQA1NRmXUvajMwp4tfTSwTAkTTECbfwrt8eu5QuAKy8EVPnNEkL",
  "key30": "4FktCaHVKSxENuqt5UdZTe9UW8aRbbHxkVRiALWnN2xGZjU2F7koFobpiTAazX6pvekjhaz5cmejfmEZtBtGXMD3",
  "key31": "qVFvMbfWqCEVT5QPoi1YaGsEWKs3Wb2gis7TZTyfbz7Y7L2YJRcQSfQK4HouJqRmVnGT4wYnu3i5Le2utVucfCx",
  "key32": "8M7PC8bKrGnzk7MoFXCSaaPR5Y79AFg8DoQuA5vK7bTpovsothEWiDLtq97Rf5krGDSe5aTKLNovB2CHfSKZyK2",
  "key33": "42yGwVkSYm9KJY2vch1KQdArMuZuGGSMHFZWeisNUJmii6v8HCNoFmx56UaND7Z46PFoWj8qTbbYQ7CdYyKfdNjJ",
  "key34": "4Lsmefjz4SsZncapVA4goBdNKw447edKq8NNFvjeUZ1xf6duMvv7tMbfYYmz1wMXMce5GLR38turwvPLPvbRB9vZ",
  "key35": "4Lrx7rLKG6hsKeCdvYtgnTZ3wbSSRzAadajhtQBc4FsDYMBy6SeznjfofcZwm5pR6b7tbHDm5dtzpMBeWzsdoQHX"
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
