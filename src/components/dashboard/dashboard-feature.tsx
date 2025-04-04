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
    "3z7mQLaVPrA79Nth4cm5c67EezcazoPQ6mh9PUpuxNJJnKCrnVM3XSEQbmrkujJZ4AXjru24VBhgMXHqo3mUDkoL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Q9WQnZ1eVX1eUuG9etbsoZ2x3EucqWGW1U1MSzjcWZDpHrhHBim9h873V7tdteQwFNNqJFHksibCcH9hZH7uN6f",
  "key1": "2oxLrqk6B4hwfV7wbukMoHWrnSmmgGwXrympbaGqnTCyMpVUq2bVZeX5jPNvZ7hRK962MBryDFh9DUTbdokJN8S",
  "key2": "5EE4AwFwtEfYBjcozwPBGm4FYYvp6GVpQ5ZFLVH51EnmBnq86KRVLuKxfggFN19FXLrbJz2Ej7NkTYF3NSHwKPgE",
  "key3": "nhS2LZSUtPT6D8PcRPuMfPPvCEPTSEZiTCdGKQZZS8a3F7aBLHcsFtu4AjRc1gEVAgL9vU33qv4Xa1JyHXHWb8F",
  "key4": "4HMMPWFJb6Nu8a7XYyjvM9LLqiWpeaAmTM5nGVJKErZrDjEM5VJcry8PY2xjrm73uQvfTmckE3TqPPK4WagP1eao",
  "key5": "35vSG89PdeUxmv1STyXJMST5wKT5MVoDfFdcL7n1vQjD6X9GA9zDWexZzsyjHNdCNffZv3tVGj41BNaHDZiD4HfC",
  "key6": "2bZSBTbr3BoP4CoxGNwXRoMLNxaRDufGcDR1GUSKnyfj4t57FAwxKMPok5GjEgu2o6XePu32DNiC7zayCrgg4TUh",
  "key7": "ZENnuCubwETDEP1AZxQ8gMZgA1RTU9dZZp3PqMi7du3xaKqXExH6i7yRHQ9a2ZVCEpRXwUfidFCmVQSe8tsqGBn",
  "key8": "3wXvGU57bhyanDzDh3fMTs2DTCwQP9eQHj3SgUj5bf3Ck57JBjwngvNqtxzcGVxES4tJETC4pieLsS5GiLLLATfs",
  "key9": "myn56AauwwDz93RszReMqLurMcLkZBA5cRxvY8CjmLcQrpR7HEDR8wXq6GRZZ2g1fMDGdcy6V3iK6cm3J5HyAHB",
  "key10": "UZagpLTPYe1nfHyFFzg8rZopXnn58tYZSKdyvKzuVaKp4fNRLcK6gPxRRqvp85rZoHX2TZkga6cPhgWFJf1LEuk",
  "key11": "4qGyMEUrcvb42hdFHboUKmXQbPSpBE8hno9egizLW1DJygSgBuoEaG4ukLeqeq17oWshz7GDfLEzZJkrZE9h9uRA",
  "key12": "2ARgk61pTCdKbxmLfGPgYHC5L1ZfomjoyraEJiHAKyJwBR49NpTCsCwySH2cPifcHiJmHg7AX5v7o7YHZAXLvFBr",
  "key13": "2Jv6USxnCA87ELYzpPKtzuokatj7xVhokLf2fXxuXTUNDaSUFQc1GMcc1rnGWsXcZNe2cVtRmrcGnEzJCknBt4Zg",
  "key14": "4fyb9XdJqUFP8UCB126Q4MQX1wGkvfsaViEoB5BU4VNfPpu2KvWVvTEsDRtj5x3yjHbapAHQasRD2RjWDo44oLJU",
  "key15": "26dNBVZFzFDc1gVKeXRH5h59aNpeyKR22w2J6bajhMD1SiruY8sRtUDSJMvp4hK3ESgmcJzkhEckRkNpB65EjFEY",
  "key16": "2u6EK6LcgUDecmtNgYKRTvsxEgrzG1nF51x4svgsxYzSwWCAFdMjqUuPoRbTPhBtxsx9FNzpyGM89scFgLCgamrN",
  "key17": "4f79WPzWnrT5UmnTQDkMrgUEwsFnJX8T4aShcZRSoKjYpGsVAcqCv7ETPheZhJy2XyqR5BgckXFCHc6NaHbHB3kQ",
  "key18": "4GRXoU2K6vfCAsHHBXFQzCWw431VpHxyHEGgvfimDdRhh11bz4q29PMN7rJMzEwyrn6uHRo7H9r23HFToCgVUKYh",
  "key19": "5jr1idBJ4izKrXTSasyZVbfmuBE7N2xepAH8mrQXtMSEgcQGE1BEkZPMtfLT7PsZM1D2qx32Upjy9gr9FXPw4dZs",
  "key20": "2hGpESLDhLT2pZpyYTRbh7umWcARRHUSkVVGVKAYz3WsMabdZnzxxg3noWApe626mr6oqD6UFZxUzi8TNMk7qujR",
  "key21": "4Dizqd5UoH7MZFDRrrpGjjVCGEj7wakfQ2vNm3mhtARPLNsS7E7PHDYaTu37531Tj72Tpk2Jo54sM15W49HfqwsK",
  "key22": "UR4UPrfVoGpAyyHt9LZMbWhbHvqusiCS8cj6fJvCFwcpGDAgtdNvwYF9oU3vUnmCrCSezKDTyY6H2QabPQ45inH",
  "key23": "2vRwpbPXekN5vYBpzZnF7E7AoB7CwMqvi2hZ4e7isYsXebB5MaVHzCBPhd8rrXW8ncVkUspYUxjC6arsXVbcyjzL",
  "key24": "Xe9bSFqNbfhPTXL8uGG1sjTvjksG5QFkGteL1bTMYNEYAYtBh8DWxyZrTmPAsZQcnJKtX95yShDoyKSsTkusaXy",
  "key25": "4g4VhCHTPN4p5EijQqCRA3BnqUBj3JWhteRLjLKUUxUyjth9WTEMiFpG2cVk7g3Aa78FDpeXZFirtzqUqMZjRtkj"
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
