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
    "5DTh1AZxR5tqbkkRz9Mph9DVwfDfgXTwv5UFNnuFn1uXWLSPDDiwezLEPjZ4JJcUk1XPpQbE4HbRXPbPQjVi1DrF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wr1uxE5s2hKvp7KiLxaebAMBfAExjF75jgiccUENbowiBCH2Rj3i4vZxHMAQLPfjVjDdUZ4Q3Uv5tXMSxHMLvLo",
  "key1": "4kDe4KN4e2mxr1mTRtwsHyfXTHPD1BTJYqxd1DvM611mQiYr5TAT6UffSLhtq1aySu8EG6fcnVpQxRjo3J1m1Mwu",
  "key2": "3r9hX5n3q24owtcE2HwTAqHif7fWt37higBqcZsLwNZwyLTmmeLFMcwADMi4Uu7fE5HZy6hpQujUWf94A6FoZBAZ",
  "key3": "274Mmk6mWd7bgu4EkpNpkZMkebJoEW7zGZyXXeTAwH2nh7iabRmP1Tjg78oB6h4XY3FCM8SnCWDBsAPe2xKhZtQN",
  "key4": "xLa72ZL3NpwrsUx5SjGsBAuuzQU7RVG5kb5b81dVnmRuWny2TaMztcNuPKpMxoRxpzo7sFo2Ghz6f1it16xdSN4",
  "key5": "2CsjNkmjYLHr4JfRAni2vLHKTR3to5Z7UruSznohmfQaGizN42Mjq1TeRA1xvPrcFdnFBftuxqXE4TJspKtMraXn",
  "key6": "ZxWJ2uWceWW5q1W3ikNWFwKfj8MhvH239XgecUHpqg97RDQbUvqxwekTGz1DEfPRTm8zNVzpd63EhpkAGUnBRzC",
  "key7": "5iFUttaXcSHNM4es4f1q6uGhw85LHQEc2LV3EQv2a9KfEyahuDCnPgEYaAK5ZXDQ6DS4dBWmXcaq7w3SRVjQKU66",
  "key8": "BRiYZy5UbNX5PFByjbTGM99RVAb3JyvuSWzLTZbtjyWWUDKcbnZjvBjYAW8MyUkVyW2rCVYttKYXf1LSkH8sf95",
  "key9": "2K1dxm6YBrv8pyMHzSPdQeL4z9ySvds7YkUC95QtNvmG94buz43EH1EbHKBxCBbZnvNtEUEdEubESAQhCrm3DevR",
  "key10": "CcdyMLpTyeAUjVT7PGovmFCUZtGxLTC7ZagEtbCsgPa4K6QYcp19H3asenxk6ZQd93yXa34yqsM7LNLz1VxAtD1",
  "key11": "4LMpLx8xKxeaYyAQ1nRT4gMD79Aoih8v8rSaCd8HuF8obuPbuwdonh65CZWburbgucAMbMNN59subtdhzwJFRvMh",
  "key12": "5pSPpbMuGUFUvsiWLj3nYGCs9t9jJBU8YdHR1nuyG1Ha5pLtproiK9R6kxJ2v4kirYrdWqW1kHtdFPWPR2DSgqzP",
  "key13": "4DmrnVgK2r57gU92WnMtn3hz79Vuo7js3AtADivPioZhVZSv1nVwvAcTR4usXXprYYjULgQTaZ4mx6w4UtW4UP7V",
  "key14": "2An1eQ9HbnzPwg7EC3DnVcmiBqFTh5m2ktuKQtRQesGP9QScUeqkfHnjbpBLQ5R7JnomPj9DEZBwEHAcZFn3eHgW",
  "key15": "4GfYkpguWibBqo4qyYfrbfEk2TsKFDaDmGARqNpeFWdxbQggHrRhBWj15XNoCJUvHqNetvD9sNTgcn2pSpzVJTm6",
  "key16": "2LLrbft8BZ523Nsaa7EVD4GgQRkpktNcqiifGTXL4RacenjpoPSTKuJFby5DBzhfGyEtH8C96vEQ6HQ11bHLTfTu",
  "key17": "1auWZkgMShQEmttK3WD1TuFL2RDRdWwiKJgoEGS985wyc4LDC8urYe6xpMH7D9UzN6ph6ZTo69KWYNzXBvJRwKq",
  "key18": "2GFTAhddTGujAzs9t6Kz49kgcqfWifH8cVUdnbpxWAEJKSmzX7BTTa22g94TzAkyWgpFg4Wq9cKYUJTVZ1ocSey1",
  "key19": "5gsDAZ34j1iqLTVXsWYJRSzQGFCnPKSW6obvCUxmM3xzp4xnGnamdXnWKoCUTFMbTSKneFkU4dewW3sx7AbQnDrC",
  "key20": "647VfWNTEt6R4EkYstJAFu1kHidAkSFPiofd6qY9uXSJEjAswSBwfvppzRNqXDvJZnizUgMJuxW9D6k1hwdcHPQJ",
  "key21": "3D7geRRMBKUSX7QjsHRNhk9FbBjz2WpN1fUkBAYTASFi2qgioRjxM6ewNKzAHPtVryriqXDjrdhRXtvS7VYPD6Mo",
  "key22": "4EzhRDkaMwyukRSD8bBkTLHsvswW9ZsYNHdwXZp1atSxyJhasNEkhi9TfaE11vjZDbM6bSBubEoiyQksdAnMdWam",
  "key23": "4dnCGxLEgvgYDVL3c9Zg7xoUYBrGXjNjrSJtRSzDWB6VmAZDhj163TMsJ7jJEaHZ2JXpfPEdogpfAXuFymK9RoS",
  "key24": "3bBxdptk1b8s5L8Ds449jcr5BLTKiod4bq6hrPaRAi1HExNUiVDjZCNPM4qsMzdYwB6wYhEPVTaypPX2QZfcpfso",
  "key25": "FyUGqhAcWpsTzDxLRhhoFd3mRPZpfVb7fVkpgpy7unZc3q3m6SAfaMUwJwKwoAEazBdZPztqMhVtuhXPwGr6noP",
  "key26": "4QjZ1kqkUhDuzXFuRHVRSjTHVb7T9ZUQLRM5NPeEbFgri2iuVu2RWxgc6n7huctoqgagxeL2HY25pRu38WNYwZLB",
  "key27": "2m4s68fZUwaS2kUfnK75s6GFPiB6Fnv3fNa2L5pzpJCK2gTzCD5dy8Rkp5RUk3yzb3dr6RapgkcfKnAx3oessjy6",
  "key28": "5YFn7K3KxgxjRnuQiu1LPkwTY5Q4KTcSZe4J6XCZgrXxsVHdtC3sCKf4rXvqXEWsdgGcVs7nonhzAiHncCb18pJV",
  "key29": "5eiPFZ6QrELzQiEFkQY4yZZ8EM8PCorj9RjAbEUvm9CjDHHQm2sBevMV7doyntFMxKx62cWzBVea5jjQUNcSEAY9"
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
