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
    "4uBunPo579P57BbQPy3JBepFDoRqDUH15HqsRw9HhdWRmQUw2BrjaC3kM5M8GW4aCkuYt7YB14LRG5sRy7U6wNk2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p3CDEhdbcQz9gxVD2bC2fXZRQhK2tN1N97K2quLrx7z7uYit8Ti9o7R1Zs7ZEp5d43yofPhueSawamKDDdFuCGj",
  "key1": "5sxnZx5N3D3BJgVE4g82baZqdxw1M4fFBMjPtSLye7Y7Yd6YCn33jVk6S1e4hYJx73oZf5m7UHcbpaGBsN1Umuc4",
  "key2": "2zvwz4nw87VJo6MCq9kKcYA1MhkKSHxStctQ8nxkzcKTAvBri1EYQp1DmdcrQ6JcdjQFcVUDLhBJPAB5uDoT3b1X",
  "key3": "5mvQiq6qeWV1GtmP7TS7JPbQtB5fs5i5CAgPfoQGWbFxyUThdDa3GoxRSfNiDdTHVfBnBBjM6nNzZAaAFWPTKDJa",
  "key4": "37BJGxCqdqfnApHjbe5HKUYV3RGpv5cZxXpHSStTEwepW1LnHxHao5jVx7MbvszKnrAr4bMMs5kvNLjauevSp1rj",
  "key5": "5VBZrqrWQ1qdrXw82vyKsrx61rvWEpYQiq1q2TdbUiJTV18FzmFREbg9Z6TVzEbh8x7WFbG4GAxCGHHMQzAUoXKC",
  "key6": "4j6aacWZpW4DemhqYC4BcTXD66EtUDaqhBXGoKaK75bupCgAY8WrSHcfs5WR2wNVsDs44T13Mei9ZjJ2j9pw44f9",
  "key7": "531YHu88rzTJhm64CJGSMMm4krtavcK8crwRriVqXdfjewgYLtRWyVjNU7dv4FSSLF9U6MEXdzZXBotsVfhiDTqr",
  "key8": "3ytMR917HtV7EcPVn7pGRaXFVSgMQKd6oT2hDy8aNt4vya26fqTEjAZzHWryjap9km2ctFmUm2vRB4hVEcvfMeeX",
  "key9": "3oy6mWfsUiqmc23hRq4i1U6Mk5ueXwDzvvaqpWSY4LBE4zCp7zC43KG8Vm5HTWXrREa8yMtiN13MVRjJn9oSNrTu",
  "key10": "56dELe9zr23HmVcKcVWUMWsZhE96GofHJd7KpoCENQkKLhx4U4S6CwmqxAgZLQJ2JMvVsbNELd33BWkAoZfpNx4C",
  "key11": "WSe183fMsiTt3gns3NifJGem1Vzubv35iTNvUaTb2FgqweygkDdEgyipJj2QSSQ6ADRdTLs7iqe8tyagddNsYir",
  "key12": "52AMZXep29U7DmktaLzNnAnUXwn8BTKyMJ4M3XghAGNTkAP8sgRZGU6CScmTXYibLoYeeZmJPfcYb8Br9U2uAf2D",
  "key13": "5SDipetmZobWJi3GLQvZkCqsA24GPV55jJJmhxMh3M3mxiyaJ31PNGMLecdFR4Xx9Dd4KhZt5A7unuPgWnk4LESL",
  "key14": "4drtxhsebTDSTh3W7DcNnY5Txc7vfHB9ewQpaWwpSBKneC8vPcXtKUXoWUmoPvdXyo4vzUmionmUU5BLVpHcrQHX",
  "key15": "5V62RP86EZdP4batsPTRW5ukycvNNs2xKsWrjjZRsA2RQFTSeY9vqqgduJM3rEYvagU1BXuYvw64WqAHnyttKz1j",
  "key16": "5wfwR8fAEaJ5vQ1TknwzyULLDcaJ3ZXocTQ82SCUNWt5RTngEJb1eyiS2qmB3Q6VHfGttjMFgStSWKzKmFNX8Acg",
  "key17": "mU36GjqeYKec3jWGFcGGxckfuxhk4zYonm7RDm4M4PVw37UczHm8PtgrAdFRx8Gw24JmRPjhJRVL1RnABdc7Usx",
  "key18": "sEKjshnVF6SCNLdxd9tQAbKdvGTbJvt9kVt4rU11wUgoeyzsTy2QsGYfVje8U2xJ8HwKptiJbognAXxWeHkFMR4",
  "key19": "63kgZgFbMVhNyeHSrjCCyWgXDmhJkZxH4PiapR2R2MgbAoanDTGK1PVjJNTBM1YSyQCPkycU37BJrx4gP3HT5wia",
  "key20": "4qNEHbCfeNQ5tDnc23v3VXHYzwTEN36o1eQsFainPj2HWhbzqX4ZksSznQrhbGWDg7bXjTiKjQGXjWD1wPgWCT9Y",
  "key21": "58C65VLPLJ9R5UA1N1b7TpW1HyikT5pnbcSRbrLofQqh7gYAt1AbNVQaxCasHzmXwKeGQrHhTrwMvd7apysMkusL",
  "key22": "54o4xEyQZBoawS2WjuTsZRzZBkhKSb79ZMdPwmNzDv5fG36TPE8TpBh4au1Gq2Qx2225DVDvFrmy5XCxkmqppaiX",
  "key23": "5HHAJyfadRYWA5AiF9Kar3jHDUkUNWH8BXnbBoDybcBV759deWJaWCQqapEr8RLsgAYDSLRq9wavvXRoXxCEx2H3",
  "key24": "515ZuPbVDZ9Xu2BnAunw377yPESJ3sXzNNcqfERJdK2BrfqHPNCWsYe8j8Hp9pkmDM13rVBHWwx4ydXoe3xBhTZF",
  "key25": "2ZzwuHFfRm2t7MUmErZJ9PS543rpbCo5UuGYcVqa3V1nLvyiKX6zvthHZUhvEXQ32hFj3BPcMMZyZQuUMjoJftdR",
  "key26": "yno3zqEucpaJ3aW8GFypD2J2CSTFss5uCySn3n8Ni2zAxJq7pzyiuLziDGp6ApK8esJnB4zac3wVAD8rizDKTiF",
  "key27": "4p5uVeLfJdK25dFfAEWwtR6o17EnMVrfsDKwtFJLj1VSRR67f3kvyWQ4dEhvPxyqK893tALkvypSXgakaWezJAdG",
  "key28": "3TFevcDkY4RgkSyGy6aFG44mbLAmckDHipNB7tEbLqRAjLSwsA2JDUY5GHp86jMR288q6S7RCW8KVK5SCndtHHsW",
  "key29": "4qJejLC1CtzaDMNdP9P4aiEpW1gUGXqVPucXHXfkZjeiLvhejhmmz3N6FZ638pRudQm4RKpsYj3hmLdzDtqbZfVT",
  "key30": "2FH72t4CtZd3F8tmPBePc3i35AeUC1oknq2dRqukUUWW2aJBK9eqL7czPfTqMRRcYPnrukfSzBh1TDaL4ricqL5D"
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
