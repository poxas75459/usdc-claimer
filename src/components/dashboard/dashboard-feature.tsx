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
    "N9iiHU5G7UAaBtkKAbZ6FTbNT1keKE4cVjYB15z3YqC4Q8ARqEZYt4QJ5raxmXUf9Qmg5VXHoWnyxN2tMQzBZZr"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3X6BK31DuU6r8yYkXVNj9ahMyNeys5dusz8Eh63mmZGcXDXPVf1dqytn4eJYLAvLAhneBFoDhn9rgmyvtoUHchM",
  "key1": "5QkFEbXsfSqxfemPtGCWP4S2y9dzj5EdG2hfoegkqaSywA1fnwNsAtESx1PUsx16SoQwPpksvREk1SCoJJVUqSy2",
  "key2": "3SrvrrVgVy3HWEB9zJFVwxXQtAKmPRekUUKPxU87Nja3g9WiztP13Ho11WPMfAVG47pMgDDQvERNMT51m5mtwLKZ",
  "key3": "29SKc2WGiH94yrRCLvo7WhxBCWKLPuxasjoLA7CAZqsGF7RhuwTBvXNDTH6NEMtersfFiaUCRK9f5YgaLSR9PQTa",
  "key4": "3nns9UgmfQenWcgwo7d5hoTkq4XAtyWZ4MqzhpnEozaTWyfA7D1Fqjycpxx9EFkJ3jhWBoq6MAFtDrPbafd8HRsP",
  "key5": "49sPXmsmdti81cc4oBMCN872gCCv77YcDh7FKHWVBJQGJPeZFn2n6Vd1paPJUpGsUw4FCTwkSjSyBk4uwURWGqAn",
  "key6": "fkKgsYnUNZTYAhBRXh2jhmV4tUbKGEoABevpUJAkCdzKHaVf3nCH6SKxb8axHyw51w55QaL9yvrmgEKSRrob6hW",
  "key7": "33Y8TwYbv2qtX2AmB7fZyGXzhu6PiaVPgD7TPoN4NBqowaTKbAy5merSCh68Zp5mWyZnKzXXhC5pa83HGWKBJRzD",
  "key8": "3tGCfHQgchqhakx8HN8ZpDULypWA9GUPtKVjGHSUuNoWNvtY9GmqA6kg1YR22hrz16Kr88EC2BNPE5G8smtr2sM2",
  "key9": "3qacp2qoRLpVTDNZBSHYGQWC1nSSWRbqgiSC8zJ768m2VgpnUXRkNZ72rYejpWvKuVhkFcwANwLxSvTYSQoU45ik",
  "key10": "39i21qToZ7dxc6v45jBUfxqnMwc3CAxWVdXixwMWLUcpLZHGWUN2bcBdPtEvurtQaADCG8CsJWVXAejxPsrJtuJG",
  "key11": "22LpNFufKAVQtcVycmTBoDByTS8gLDdhPQaGQ8DnrTFCe1Zb9BpTSG3nXz9v8JLPdLoKz1DeCDPAWd2xuEGN9T2P",
  "key12": "DWnrWcpuBFBkmCXf8DbXWQTq57cEHcrwcs8XeogycRTxstCUU4TPLrqdXhXqrQrcdc7yhuKEtmDwGT6T9c58TDM",
  "key13": "YQX3ehajRo3qUGiv49uMgTdt6yW9SesjFaDZYAw8Ff6zufSqRkW9SdvTt24S5F5fZfbdPtVfKXsrJ4CX86UYuJf",
  "key14": "21XGQ1WyKqJEZZLHiW9nbVNRD8gGrrG3LmjB7DQxjhcAJAYhaLtXJmn5nNE3K1UadinXSrcDRnnfc8ajMNHivYyB",
  "key15": "5Gyr2JRfoNG7JRyFfXaUoDn1keySKTETKRzatvoHMVkxNGC2S8Gb64HD6sKDsiCsfeY4XZJcHttQZ8qyyrVTZghT",
  "key16": "2KCV2csgex56k68HMWrm1udSTRK1V8uRdnHDxb5xuyxue4jE7ZPB1ryguPaSDsF2D3WooDXB2njoKUGpB9cmhB1W",
  "key17": "4UR4jUCvKK79YCCiSfCBiAYSEb4hRjbB3AuFkQ67DNsCbLHpBaUPoVwEhxPXDMwsyq8RjG89v5TsDTouHupPb59P",
  "key18": "5vTDc4L3LtMreCUJeu4qeuXN2CarnGwp1HDvvFCHrzB2QV2akc6YMUQPwLvK85kYgTA9fkaSJbh13M8tQSjjgJTa",
  "key19": "3A8L8ug2BDWHzBwvKHfgumqURHYzr8prBmypA33DZv5menvc8759xMz7MPxThfy8cts47GS45eSoHBeKPkeUN7gu",
  "key20": "3r5MkAYAtnQpeGzizW4JnbomepkL9YdNx4Hejq2Df2UDpW53b4A8mD4oEsPMzUY52ceunUja9mCZ6gzg16y7LNEM",
  "key21": "CWTZaxDbRKgstJpBikD2cRPGfw2TxFQN6PRAGEfq4pCnqsSqKdoEwqRUHyNMisarMnRuFweNcxYYTgVbNZ2ErJr",
  "key22": "2zcb3GUMHYhvedY6WZ4gJvPCQg1bSrF1MudzwnSFBwMtackQ8WcB4rnxAi1gX15PppPTTDwwYpVFtJGYz8V9xCZv",
  "key23": "3ZQ8gxYCdjtTBi3m2X3XwHaTLfAUE5GVH9SgK4hz4TDqN3dHJqJPeC2uQHYXPJgebsADs6qjrzSpijvFw7Fh3VFR",
  "key24": "57SuBPLx5urD39zN3XiY2cDJUsuxUPKqQy2vrUrRUZ7pV3sVQZdB5LwXVCEqfuyCNojU3F1yiyz3Fo5LSZLLsKB3",
  "key25": "2d9SmUG9rgxD528DkRTiBqyaG7JLxZ5VcSSGtuwKxuUojZNpHJTNr1Md2J2BJtAWadGAZgnvkZixpkYJVTKA7DiB",
  "key26": "BZkBXbzHqXRCA9kqLjiBA2wJGhGmGq1CXQuQobda4PzufvqZoh869XG5RzY87F4zpJqTuc5YuwxXnDg7hVzupeL",
  "key27": "4oiLjcLshtkhTWM6aBrtBA6wogtZZeU8GiTCfrDm9PnoXzMvANQv2Ze3gbLegvXMQ9z4rW3H5VCAdT6Nf5fZnoZ5",
  "key28": "3XuobCeELVtUnuT2oPFs7a5X5iZ9LQNhMxyqv4Ccv7mQ4wYGPFz8tV8RBbyUp8KfEj5tZcLUQXi3QSujhkANHdi4",
  "key29": "3PWB2RRC65vECoPttyGgp1rKjCcQQyko1zotdKrNsJdTxfJGt2WwtCnLFWHDzWxie8q851MYaBGbZhCeuPqeXb6S"
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
