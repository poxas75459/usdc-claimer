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
    "4Df4jzcZqL2TLaLTZzBAoFLAEgjvmgyiGkN625z33bDmKMQLnpG7vwDGYU935J6spP6CcpK333vzFTmQhVqMafGM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4LPjCKguDvnz4xHuVU9TzaWbnYJEpWpmXTC3166XseD16FP56VcxJdyWf2hER2fPAfCrRtJZwAS7cnFEZ2X77P2J",
  "key1": "4miTkxCcBkYAxNmxwseDXPboWvYX72nHYrGWGaJvSkdi6P8DyZLYjN7Lk44PuxErZJ6G4J5jrLcwzE3D2wjTwCWW",
  "key2": "5sT5prh1zr2FhCrPkdtS84t9qTUmS6KP4iNZyu4SMTyPrNsMi9gDEdHUZCnBDSqf7gbkRvEBwLBhLFtw78vNy1Xj",
  "key3": "3Ho4aGN3VWFgWtw25m8NArjSgdZiErgZAY4qTLucUzo5wMa8uYrYKcVMiqQFpxebVLw2VjrLpeRsE8oWttX1SYoP",
  "key4": "2YLMFCVqFg5WuvGFvuoSaUcFi7BCcXYBaDHCofWfxv9Cc8E2AqYrDokcFsSVb7TrRrKYyMgmNFexEwR5M2s7bkMJ",
  "key5": "377TfsQQJfSVtCJBogcTBDgWsTc36BuBV911FF6auzYSG2bCsSEi6R9E4kNxqapN65w7yZrYXoTayyrqYot7HnPz",
  "key6": "3PiLeZNN8rVGQhnk6kZypHGYShQ2RM9jxiEqLaRmSFwVHiZBEjYm5Z7JD1ejqCJA4mNHRr1c8iNCWycy1WLcALQr",
  "key7": "47LeFZtoeJaQKtrdAm53eAT47qSpuvXEbWzGsZYSNVnTznfzRcx7QT7sEYNPGL6AE9cxexcp6snYgEdignuKKJXb",
  "key8": "x8oRXacCEPXJWmgfVfC629k6jpJqG1eGkQ1PK8we9sYRZBwEFjYLLa8DqEmir9XGKDUMSHhCBTzBbk6CsSg8qAj",
  "key9": "Gzaw7jq3zcaJSeQ24YdA16MdKUtHjFQFoQPD5vscEcgiUH3NMNqCzPtdqbJ5mqSaw3xYGqEzCYS2hdzcZwkdZDs",
  "key10": "2nk16Xoik1PQ3yw2DibV1uzwAEGtAHe7cWNnCfVTf8HXGioHnLzGmYn7A978SaLBwqiwMhRP4eRmdrixg1byFCAS",
  "key11": "3jfykLZXNyLRW6JPePcMAuhJ4aDHD2Y3ZkF9i9iGuuL9ovmGuhC4CXYLNpyJQMfbWGUmkeo8rZeShQstG7NQDhXB",
  "key12": "2qqaEnA1R768BWYfoDQWn3NF8t6xGGPSdnzGygmuHKsZDJYY8p3KvMFtdy4Q1UW9DHmbR7nwGahe4XHTMNBZubKZ",
  "key13": "2sEdSavpqask39t1asKMvBaKjFK3bZ1Fh6GJk52yoMVHMJwaLRXHNbHytGMZCCAcq4cgTxXAjPisDbAv9hi1qRph",
  "key14": "48gHjsHH7RFH2HY7gyfWXCamcUBTB65hkPP6GcnSAJkbVqgb5ATwJKpNTpYfDqCDiXSga77VVAsnJ8PV9zS5Kkaz",
  "key15": "3AWU24N7rgNMDDXds1yhfbpWD1eYtmmgYbD8MQmESq2tnTgN68q3PEZGr9udS5tAmj49grUFJokg2cZvNjqfc8rV",
  "key16": "5oMi67G7fbjxcktU2bYj8mgDjshmtn9MdoNjktt8c9JjtYASECKVeQUZgLQ5hsDDUZTtdBnqkmxUG726CpVzwfXR",
  "key17": "56aenguzqB6gLgSrK8rHBHWYjxxEdqkKfd9AdjWKxfLL6UWDeqcnrBMCtnrWLT4k9qyQ59RWs1bsuXJNRVdhFq98",
  "key18": "2nkjJo4U5bkZ6q1yZFkmDfqURdizNco1xwcqxTHj975Q7FE8Sym8bxFo6XwYpyQ2MPjUWB1ZNykP13FGKu5M1uLD",
  "key19": "4of1TW4jrqXkRkGD4woSHHSyxEn1DRB9njJr7iBeYbbS3vf6cc2ZcK8JHz71VTmmERyJyXfR9e7P5fad1gbFocjm",
  "key20": "4MFczQdFW3nuoH8JfGPptqmSswjjaHnjsZedWnLt9rTV2SGLXMe9vtbg6afFKeHxh91RtKSDmNiy41iYTaovSGw2",
  "key21": "3moafiBaapuATDkkKpbdXncmST7AW5ReRgQjcp8W6zY1nzsZbH8aZ6s9TepvFWYwTN65ZhJwfcsFCXuqPfEqdtHn",
  "key22": "2ojn3EkTsvtRdQyy2N52yp81cPi4SQxefPzETbCkeejQLA7ct9rvJNL7wrEmhwfFNYA5A6fuooqfTsZdy1sRG8kH",
  "key23": "bkmsWHZ4T5PkXcSrBxwbVUzJGiQnjyeFjgTYZo4TnWJcg324WhcvaygdL6CV7LDKxvShG2NgxeXVD8HCTCqhEVh",
  "key24": "3p26RX9dZVhiab1h2rue21xEBTPDruGGJspYkp85J9zJuCRwvvyDpY6uoLuGcKqUof3iiht2aASQF9wUn6hTaRNX",
  "key25": "2H79tD8Cf8dCxrTuf1Ct5gSwjm4War41eAHb9mPKL8EUzBcnrzZ35myTu6yDMYNhR3ZENy4mpwEpB59nFqgyTbay",
  "key26": "3WeKbp17ehMj4bPJ3jK23LHNhYYCLt3tPX725phL6szHS1epRAycJsosE7yNYvbv9kyhPspTJ54BaVCdk1RsrNa9",
  "key27": "3ozJ8qq4pdS82ebNjQKL8ShGiUzT2hJQJa2MTaV6zZWXQbNKFepLtFeERRoyXKNKrros7xBYSqj7CeEucRBHGdSG",
  "key28": "3Zjnzm4wHHF9zdoH7M4FGLdY51JEqKgZKG8sJNKzuJC2kjJhHxXBpsXWWdpgLn8ZTg2UdBynU1ahCDQHwrVeBLzd",
  "key29": "58iLM9DJxMqmaMk2C3X9Vb1yHr2avvc8a8HCxXQohuC2tpXFdygMhj5T3DgvF4DzFeXEi3YhHL1h2EqojZ5yZyMT",
  "key30": "24kXogi4QPXyMDyyZM8Y1Kdeit4CNoMtj8oHq7BDt5Zhgqb1f8YrGjMepKUVJcUkCHfUVETFyA9cBYCeUcdxykEJ",
  "key31": "2v6UwEAc7hLQBrAV9fH8gWQNWN7FAzqkKZz4izthdZ1ayZkUGwcZGnw7StmUPuNrwA2py7Avr2Ja4PQ8fWggS32S",
  "key32": "FdgMuzM3S9G1EpcUhkAubki8BKFG1bu7fgavk2brpwCDccsBwSBGR8mAy2DiYCFbYRxoSvQKypaCFWMtjVn1ZVn",
  "key33": "2TmyCq4m3wQqE5WDR8H2FHbTUJm99sHBRBehLvBEkinmsJ5FQDNYNFcLaf9g1NUCkmxbce19ao8nmWVAoVpxpVi3",
  "key34": "JA4iWrdpLPHZrSie5pXE1pJeHzivRCe8VgqGaWHdSmnumAKbtuk31WaJjYP2m67i5ufhcyzmgoto3huuxwPYiws",
  "key35": "5p8boiNNaYeXbDYccLTaxcAFza71zCaRsmDnWffTvNzLqADczhw31ATtm3vNwXZM59mk1KZmVgToeM61Q4a3Gw2r",
  "key36": "2wZRoRrHXSdHckSjLugQPPttfcZ399ioULKtAQoEHu7dvnxGrosXVSQbKwCPoovwBoRvX5LEyveuNLkoWk7XomA",
  "key37": "Z5viiFKs5HiTGj2ociJQxRdtsZ7i1rQPDs1WwWWFFzgKwB98HtGB8cV28exp3KU171U4Q7nyHwvcDfVCd6JMPPf",
  "key38": "546J7PvQa7ZNT98uXWVU85G7NoUWWmfg8w5Jy5PJqQMCxwenHRWVmLXvdcVeviP1zgbAYpYHzh3yRBsNFuHgi479",
  "key39": "4pJHGcid7gN4Mcs34s6ALcJNrCW7ckxcbAo9rDerzuRxH8rkBLDZg82FaiXpHf6sSNKdFUs548rjCSFCMATTSXJV"
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
