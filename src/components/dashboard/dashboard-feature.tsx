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
    "5accYJpVjzTWGYzwTGnEXtCK3Dw87b1G6DeGZyQu2xdQK7YiSqqhNC1nfQE4o2PiU8mVWKjyJQSDkqpNH4C9KZXf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EUfouZyoi5GopAQ61dadr11HYMqJP3bDLVWswNoXW2WAC7cyWNwcSDG49peyV2kMqccbva4RivDXryNKAgsp5rT",
  "key1": "4nMjjs8aiVcmGqrXYZDUvV8LcYAXX3aHQUwFEKP4ubAfaeb8zcv947ELNrCzpbPrBY5Y7mTrSRN5zSE8DaQdL379",
  "key2": "3nCSn43Cuh1XnxTPyPLaLGP55RxuRLsowSQgLHsWx3VmCVhqTsBhw63TUP8FfmmoBU4exJxM7jVaFw1gvipuE47p",
  "key3": "653L3eKKf96P4iEbUdWf6exJXNuUxKJfMNx6DMLFaXjoFsMLky6vDJ55qP1c6GWZ392VmsM654K5kBmgH4M6ooV9",
  "key4": "4v7qNwwyjGj34YwH1FK36ufggvAyuK5uXr7ajyttmZg9rb5SWqPpH7g6EgfWoPvDUaSz844TnmC8HY23ww2yCxQv",
  "key5": "2HGUdM6JeuCoUxJJx5j3nvBnN4s6zaN6Sp7AP5Hpc7hkrnt6PnF1QSbbp6GNrNgpRSSnbhyfA8Lx1e62uvEm1Qcv",
  "key6": "3UxDDrHWkWGK3brJp1WsPd42nURhKPn5XBMzZJNWpjNMqgKUhrac4WqRKWmUeAempMcn5iToYFkqLVjD16nvcvMz",
  "key7": "2LPGPd3P8QpNzZJ6QFLuBuhqdC5uFs35hEam5WHKyUaBnC9AgNheu8fnYrwEsveyxvFQVwiZSoGZKk3MmzheCAxz",
  "key8": "oqvNW6pck2DXAHJPcDiUQDcUJ1batZNFBuge38bkiJvyr1GUFGoPAnowKr73pgwVwrCQ5E1zTQW1WTXQhmiJNRf",
  "key9": "2X1gptnejSmCNnhnbBJc8hwo26jjvuuRnhoDah6oEmJtknX7GAUM7dFit9CDLNE44C1yGYKxLxSf49b2ibXr2Gxg",
  "key10": "5K3uwGsDBZrbZK478VxLMkfNbFD5oPTtqLXDcao3oUqzCDXH7vEdd5Uo8ZAwDL5R9P32tveEnVaYV4XBCryE4oUa",
  "key11": "3mPSoCEdxzwMqiyLzvR7jBq3RyFBNeVYDegs4AtEdCGK9dNE3cyazmhLm7VEQTocdXzfDjWJ7M9oYT99CPZjXzrF",
  "key12": "26YsX2kGs8mMcGVpazEPfZ3HygG18cMoqQMQCcJtaUTwXQNK8g2myvhk1aUcfPjFqBExNavNnhAQ1zMhttfS7u2A",
  "key13": "2fvy7xYtqQhvjcAfkf88bXXZnrBu6rczqoeVNumSCz6WF2t7TXTmW5Yd46v1h2LjfeZoHX8f6ssTCJuFRtzMGHXE",
  "key14": "yhQBW1qEEejJGFybmmDewsAC9jC3Le2oCDX47D5RzVnWZxRiN68wuCwsJHpSUTeNZWkWguoNMgSjXLVGgjCrvaK",
  "key15": "3AJDkcZ2zqQaEx2jB1jxWMr1thWcopLjmAFQarijGFrDcHH94WYuvBujKLMbkWYUQnA2zb2H5J1fNGohtibbGWJZ",
  "key16": "3rPwaK8VLr1ML3FCTHgQAsjBhtvAwH5HP6qZrxQrbQfV6eqqRNYrwpjNQ8kUw5MeYpQ6hCdpReS3Tcasj3AwACh5",
  "key17": "3voPrkC9ZCPycaaotCnmWDJKVKByVXjTxmkcC6ZpVPJ5Ymr5ztN1KZevUhHjEvEvv5QcUBb7RTzPw1NU1Aq1F8gy",
  "key18": "5NSu57hisuQprJ7vbqfQPe2evnWE49juaDdaWr6qm7x1SjPyajjUt92HaqouKQ6odUfB7PVRbqjkx2HxYVeAKTb2",
  "key19": "5VSX3JhUGsxw4qj19CY6Jh3w5kw4aUNpdMP5xizZdx8rMzP1z8hMEsJcvHMcPEsHvRfoWztwfmZihe1odBfBBhme",
  "key20": "5RrobYvsF7DqfcAna5Aks2QPxa4v2oWGqTo13DwpgBxBboWMxBPu5LmqPNqinuuuiJBUXWD6mMgj9ZESLYPM5kkt",
  "key21": "2EnfzUTN2SZwVeJxtYgjhzUGeAX6XigHUovsxnnKqzw4jkzZqA8xcM9hmCFCvhLvYVjmamrSQDrCyJZCY9oJtAUV",
  "key22": "4Rm7yk6C7ZfnvdeErcPsTTE6QP7fEitNmwFRSS44qjbaKqso4upwHaLL5dnjBpuos4JbMuYiMj2MLLXsqGKn5gDU",
  "key23": "643VLQWJ2if3JVUBufLqgCcqfKcFgofi7gRjWq5fDtPFtRNzgXPaPY8k4CshvCPrrsD5dmQqnYjwDNXr5XjqWVqv",
  "key24": "4ePook9uWpf67jLLcQVraez4PKDJjznetW3n8fvDNBmryDjELajavNFNFGQiye7YnnT1jx2X2VUDUUUnswaXqz4J",
  "key25": "637Nefk3QWz2TbKSxU3xMpnvunRg3k65jmZRuwwYKG9raQtjRjDcMmfebR4C4T5M3cDnE2fEMzHd2YMztsonnGnC",
  "key26": "5EzVraCkqVgfYCqt5pv5NHSCMSjg2SGWgv2nW1UzdhYz5oRRTPd3PE8nN3yFGC7SyvxDPV1KeegXtgZsmDUnjvQ",
  "key27": "4X7b4AFmvY7JVXshy3rckB9aDArPVZF711KCVKTHexYapYtLJ61xT6KPe3YaWVH39GvdWdDTT5wGEYBikpmbD4W3"
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
