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
    "Ep8WrcDuNVg2o1gSCCYmyy1auZwP2pX4rHE2vn1AeTqWu7p9bKRMEAjzdkCAzn277f8854js74p6WnBLqZyrj23"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5awdgmmQP3yswMai4uQ9puHNH6xmue4PYa5cpzgUKSw57kUCKmsiQJSLAJiqnwGydjsQFAiXMr83UP2NxLMUuydU",
  "key1": "5KLqcFiGsdLQLCKuE63dkBWi37L7mPMGcKoakm9QSAGKrn6yAYgVrue6b43YArFE4LRJhgHvY83bg4EKi3xHb5YG",
  "key2": "666GPJC2cKS24pYzaiVsuhvzzMATuDnkWmBgNZWS6Zgd56BxAtExtiwBPTFYHYeVmbFDETeArrA8vJ2NVnC3UFtg",
  "key3": "4MSfPSWokmDMLDSsLZajHvXrPCGWyDqFiaqqoBSRqvQjdXN8WUZqvkHdWS46dCPJZnnYhhD4uGwiYJ2t8vDN8CKZ",
  "key4": "2bpboTBwCvXnJ3UGdcDn42U2tiJAmCyoq83aL1KUHLfGTaiz5EK7of7XrjKrWGKef3PtBYKYiZ9nEPzJxZgZNJkS",
  "key5": "56mCuC6JMNtp3ZYSkfACDkUwDARGsNMyNd4E29dxAwa21nBQu3rm1xamyTG6zSHfkkWYRjKzvbQRCkvpF7jCeGud",
  "key6": "fs4LAYMm447qxUgARFZ4SiXJYdBH6JVNrNaywbCWJa8CoAewu4dPzsKynbYWEogL7McwG7rnX3daTwPUVS1oWew",
  "key7": "eN7sbsiGqRQGzmJF8oSZEgiN5LngXHLJmgQF1ggX3yb6xuV2w42Z8U64A1eUwxJrVseFt9DSUm4jbMurKZGToJx",
  "key8": "2ntieRPYRwHkT6AX9VqgHkaftkxJauencgt5aP63fzZ6v2vWby3fTtV8o4XiNYUdA2HQ2jCGd875GNV4Z14gwtY2",
  "key9": "33aAkmuGLnq23UaoYgH81GvG2DwF6yWjamxPqXAfbYosUishGBwBuRJTfByEivVH48PoKtGZZqaVLteiZJiWNU6E",
  "key10": "2B9NcSjtx44ruFQvdCFnTHxmTLNMe4crsAT8RaRgiCuiSL7xGRf7cPehC1SDZveva92BmrUVgDtqeQinhctc4hLf",
  "key11": "LsWCDmT9s2V6JqsBEdRhsJFz55i8SHmukmcGCttCgbSi1bFZKbaVGHdonsbpPE1weSDQ7TmWoTurkv3Gki6teXi",
  "key12": "5SGT2v4zFV3KVX1LNDpZhVjQvtA4yvnNvgVZnp4jK9mZKP5bYdGuKyELnvcx138z7uxkuv3kRa23C4YvDQzACDGw",
  "key13": "2iKX8XenJZVcQwbSoKStAGaNn1SSWcWNZnUzqKq5S6dqbhh8aVJsLuiyMZ4B4uv6R2WnR2RADHQkPQ5JZNU9kPzH",
  "key14": "47snrPPDXcnN5qhuL279veJ6NyCUzJPZwdY3hmZ5VXQAUMmUDQGQNvnmZT7hfUiAB2NMbCxjTCheKFhNfaVawBEN",
  "key15": "9YP5NGZpbyhhy366n7386oC7Cty9WuSS2jTEBjoffecZUubVDpdArB5PP6mNRwL53eVVeQpod51cijFAkgFdYb5",
  "key16": "3Vp3GGB24BWxxDXbWn1siZUzwsrKhLFfQgqbvfjqSbNoH48Xa99sL3Si2Sz8jTDksqdFf8YYEctNaeCEez1iKqQ9",
  "key17": "4Ub2yckJtobEoQQM888LTe67TgMg4W6sDA31CyYDARmuv4xxMDtQv2SYobeKozw9LFbNEtsy57Y7JRfHiaMDFwEg",
  "key18": "2qBoT6W1t6p1oJZ4jSzDU9JJnByqUvhoEgdHXtgYRPLuqcnrhXXyhmBMPL1MVur3rKy9tHcU5aTdNwXUjeNwtqZB",
  "key19": "2En2MxSf1EiX5eStyZy5dRpv5eLQDvonS9XzMQ14Niavh6Ec19os2wVBxe63PR8YWc14qTE324Sudi8eYCKZVmzK",
  "key20": "3nMqyPNDUPuY9TMXp81TJjYDsoa1GnLbUkRAAXisEP8Ejj1fpnTc6jVHZQXo3V1hrR3PAPxpMpg7A4qcLN49AW6h",
  "key21": "qSjkaZn3wiaVYN35DVnN3VweBbK7h2FgKxEXq6h7xHN4HyWCLxzUsoSig6RrcHK92Hm1bjQB6GihJpWFPjLMjtm",
  "key22": "4MysyzH4Rp3sMEiRQNp2rr3XH9eaSEyz7SbfcYi6vTppmNaxEgwHNJZgvvcEa4aXr56s84V3bDNuSxKhZgQn6ZzR",
  "key23": "3SGF1FouENtKqb9pUabghuNzWfz9f7WbiNPQzwrNpWQKXnH18nXcSR8VuRvjaM9nrioRJKpnomfZyyGfyB2XWYLH",
  "key24": "4uKznGNoRCY2Jqkg2D921sVHBd1YWd56ezGvsRezFvYqMKK4ivzdL9xGKFPYuT9Jx8boZwputcsh5zBBkshYuiRc",
  "key25": "3BGnzFoqcu6gYfSCaBSxSeSGptas1FcR8QeoSxa6tey285x1hASaLPc4NBoFAExLqMnZLAXrwLFJujuoB1SXjZgo",
  "key26": "UTS5STc3aXQtKwtjmCXY18NghH7f52i3DL1fb1pDinNzvXVRyueMcNgYes7RSwyP3hih86R4UKPW9h89vzPBwES",
  "key27": "4RCYdwUnw6aDY9sTEKqh63XZVinQ15Y2wzN3keecvBmBWHTcibsF5y4RaDKepsrJa86MHgTJv4orhUBkpf97qYyR",
  "key28": "27bZTyTJyk53v8vWDHqRB73ZrBuMu2BPb62n768m8eAi9ju7Lz3RyAonLrU73L4oefdayQgobMrDbjRwzAMt3uEK",
  "key29": "3AjPhMjfvTGtgCxEYyDgn75uDkhs1w2MGr6uFY7SwXLWbmgwhUDh1w5VehDMN2HpFKbuND3RyRCCEvBKhS3UCjNt",
  "key30": "2AUnjSMGthCbnVsUMndxJKQuNn3YBE18SQocgpY5Q2EB6eLhFu51KEb69H4JXYcWgCEh8a7gBM5w7BKSV6XQAeRE",
  "key31": "2s1iZJ43aD1opDnGECQ2WpoPgXKbk7Qzpb2U8kAmkicziKYjtr2u8x8LgZ9zmU74HhaG4oemvhJ9JPKyTzH5HGJn",
  "key32": "3mNNSH496jiijTLZhBhCzJhawzHVA5aYDgVn7YRuJW9cqboezsN8sRwNtXrp3LSfhuTYMvJFUZXqT1MPsXWRyLwZ",
  "key33": "NBxinxwzxWMzPKJsDE3d3DTebhFSporTyf6NZekjeBttpxgEnndHNPL5sDrVjrTeGkacpnbRj4VYbJT8BopqnQh",
  "key34": "4XsPTt8evfrxFEJzGdqfADVG3b8ZF3aHDaVJ2knkicMPh8GWRdMdKRqbNZFiVAbT9v7vBX1P6STte7jErkLv5tBx",
  "key35": "2EbQzQCbmTuagrBGSGCopDo3bRqKtAtjp3XtTpGs2JFHF9k1Y7x8XTcHsbW39PYF1UwMPc9gNkDYzT9i9cBCUa6X",
  "key36": "2Ws26P1PcR1T84n5nBoA1UYmnNykEdfjVaFcWGfXfotHU97gcne3WpWrR3zqwj23oR24omnHji1CHq8T3mSXqkBD"
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
