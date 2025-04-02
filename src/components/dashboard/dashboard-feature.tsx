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
    "4jwWPk5BJcemX4eCvNivqqtQxSkXLAv9LqPMvpZGkbBSEp22JbTaK9zotw9RMTniVc82CB34wZGCfzz3vDVnesUA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tArWXSdJkRg6TSz5fkGcg2URrcwThnwg12pqn3adKNwPQLSntg9mDKKrTsb8to7YEJFR2goYgBbPT5sxZo68Rk2",
  "key1": "fBzkZq41xRjYMU3izZK3FXoFVzuLEsKvaxTXd4ZNAJaEdY2sDiCnqRNJzY7ifXFRyJA4YcVtyGAgracyn9p9rPo",
  "key2": "4UfkWsgfE4fSDLw4txN6PbT8FDkRNpTBJ8EXetFM8uVCfnem2vMpHpfWtPeZEqzi6oxg9xTVXvfHti7dg2eXd8Wi",
  "key3": "65a3VCTXdQmD5CcZZYZzt2tfJusEha6ykfwZzxpBXoiAS9KvK39rn214L9SVrKdsWzUWe7Yaug6NXDyiLKGFrjjF",
  "key4": "59nftLP1g7RLBK6iNE26F91DxgTLAiMihuLvSyCTacL1fY3VTwqNDms9XAc1ZuyrmKNnUNxaax3cCc1u3L5gfJH9",
  "key5": "3ZknhgCXnmabBoQhK1X9cnb5V37jR6EgoYoYPQCCjBngMj2vXyKZQL7Loo8AELQpLDuQWUMrfwJooJaLHtnKxPry",
  "key6": "RB6ndGU3sNAtFoSWaiW1trmGyQmaKvpnzZaty1XtFpsJ2JhRPfjk4KbjxD7gtpz8bSUkFiYQvbdxxqjzob5Mebg",
  "key7": "4mp6HTBa6khDvmgGjtEEaUsDVntuXquKGuTWPE9UyBwPd2VzKiJcdHakDu9F3erp4zA3cbeL3oYG82jD4C48NXzu",
  "key8": "wV1RFbkzY6fV9bNihVhVJqXHfyt3vaL1MujSe4SMbjuKsQwTR9ZuhnPcEMR3r6Mg8y9FXx1Lx3jY7PC6pJ21owv",
  "key9": "33CGQiD4sXbbmT64Z9VkBrDzwczRGqUrJgq8LMdM5BFXjAf5UqtDpXFBXGPLYLU9BRDarnTH3KbkDCsMwr8XWgR1",
  "key10": "47upstEK6v94PFWF2URWB3HzHmApKxrhcs8SYKE7NXm2pQwkLSZ4b4pubNqyNaTuTtjLWiZLh2scSJurLpeGUe2c",
  "key11": "DULNiA9ohF3fdPHssjHCnoXoewiU2MzHoD954GK2qSnyMYQw2KBT1ZqQ8yPbgYBD2iSHDM13hvY1ujHUr1cZ7FS",
  "key12": "31fL5e5W3WXtaJj2GT5XbDmPpxyT1AagipQCMTu79zT3STu3yKAyYqaXpNThZoZT2UK6HqppeotyHHB41x11cm8k",
  "key13": "5s6tbwWg8KZjVpCGU8XdsEyQ1FbpWGJqE8R6ith5NVBYbSfZuctoU2r4npv4mLabNmAvAGgjGB1UtxHyhThTED2v",
  "key14": "2BmmBvyuzQZjBRS4Q9TCd2sYcgDFjwP4MysLE6Z3QwYjQXbaRFpXYBNxdNz5XkpeVYSSShoFR8qqNdUA776q8v9J",
  "key15": "4RMAzwFnxZLmTuBJnRUs35x8uvgyUf1uskrGMdutgwkUvihVdAGskb4JXY3333Qv1kztbK9BAuqR4DVEasEbz7Kj",
  "key16": "51GdZM26XdPKmqZsdRipKwJxz3PtKq5N6W2gDRCnej6VPE5pgieAXVapYAr7HjsZFRtMiK75eXsVv1XgrjNHTRaq",
  "key17": "4YUqWCqikQdqhvpjJDJMKuTqywyUnpJ3xf3DQG5SUUajeL9dSc9Q1uiW1CCexJ5ozEd7SZfjjD5V5JFhSnGvDTvB",
  "key18": "QefesKw6Lme8KcrhqntoD6xqepLzpo4vJ7jVr92HiAs1bMBEnmYaEEMDZq9x1JM1g3VVwP9qMmNn8cdMsQ8TbBc",
  "key19": "58ekjt16xEARmWNaNspiZPxj9GwUuMu9efvCTNZPz4wvCUHQTJ3GHUDPveeG7fEnAjyXfpqbzZiV5qXdV6ZaVYnp",
  "key20": "5yrwg61ZWwLRF7vcA5erZrzfDZueh2CY26n7UuA8YHTR5PJVrK4zy1hWVMAqU2bnHLiqE7zkr8DXwqTVjLQRjptN",
  "key21": "2q3KAKgF5P7M44RJ3G6yNY2K2hk9TL3WqqbwgYqkkZdfMcwFWC1go8xrx9mbrvzthd43RPUQ2NrHzHVok42Mciii",
  "key22": "2cSZCme4AeGjGuBvjP5wcqHw2xjDmnEDf9DMYg5rSRaUT4VVBhcwP4eFeVKC2Gzx2SXo6eRYXwwkmJCwVhSv1VQX",
  "key23": "2ZDJLXv3iiiLCKRJbRQMnp8tHLy8mZTXcmSMkPZe2JY2Xt9eAm4wcG8QqCxAGh8pKrZaEhxrdbJCaAKJCKgn3joK",
  "key24": "UFcLVyY26tbV1psWeUGafCCiB7zMX1bMXjbvgiALttXJ9UiQ2cihDZNu8YzzSjMBYaHjhRedThkQypGkKqoNiVR",
  "key25": "2YbR1wo1eT9VtUFooAFZ8ftHB9yiBTot5SzqWyGe1ByDxkR4v6sruhP7hq9MBiV1YHKF7NYXBUDPGQXEavAoXxT3",
  "key26": "4JcvmxAe9tVXE3MMEPFb4cBrL73SJqME8uk5KdZV7kTJx3g5w8et9n5pG9qJRkv8P9byUmVAXfJnnTfbqgS6mRDv",
  "key27": "2wWqkgDM6KcSMvizZG6SYcnRGYLwBnPeMX4WQA6MH7tEk56r7WL72UvhBdMNwhaJhGPPajC1TrBMbmAXJv334GF8",
  "key28": "4d9nGTsVRvti1cYds8zhNwhwZKuaZmZQvGBoy8bmJyL4513evMWWMNo84WsRBp6LcrauHtNVTUf9zTjRLCRRKSSj",
  "key29": "54BV51fVCtcNDQN8XUtThbYoQT2DLyNZGEsSN2f3g8FLsyMjqJMmzrCwNVmrtMWbPEtjgbmmZFQtRCCzQF3d5yPR",
  "key30": "5wFh4MhyQRs23QBDyHu1kkZFmNY3xMkw1KWbZFZvLiYvCDV4RvJGPPGRn2bDifhNCM5ZhFPq6H6BzeCLRWv7vEfZ",
  "key31": "3fyaVMxAFwpTzKf3Jwawz52VJ1xJEjvebZ3UfN3HN8R9xk3zb2xDR5cnq6dGo3wL9afijkpiuhfDuiL3yPT19p3B",
  "key32": "2jMxYcBYJAdWQWPemLJbi1TAugPyfiyNQaCP1SjYcJE7ZBVursqNAL2FKumF35FxmLhR26tVmBs5u3cs3e24fgUf",
  "key33": "4NcZxjLmWkhJyt2b57XWZ4ootA3NoQ3LNortvRaGepZTNp3okDV9nKWbC8jY6NCQUG4BDxkhy3sVwXXvimeg7xgn",
  "key34": "bhM1kYifFvmDwzXmyd5XCndoRqVQVCPwSAbP1xD71nWJFTxfvPSECkDoaGKjBqrhVp4JeVJryoRyo34aSbhwPvt",
  "key35": "3Y9j24K89djkL7rSd7s1479VGqEVbgP6fNqE9bqAEfoRWV3UaaZNt8qjPawbRtnorXNLmPiqdzFdWMQwvyc4s8ew",
  "key36": "3MvZK2ttpJSX26VRznio11p4n4sUrpnmVyFojqkM5Qhr8YX3nuDJcDM2ddHTRjPmn3RaBhcXFEna2d1ty1cc6Z4w"
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
