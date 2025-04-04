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
    "27MJaBGGmhUd24w69Vb5vBYkMH81BdVhDDxDi6r7Em3VCAcQ1M4Pd5UH4vhTmzEAm5Y6682Lm43PRLN4qwT2o89D"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4yJMQxzodBgVhTVgJCy8hk1UHj13Y9cPnPgrnqfc7kt1iHNz6Yf8nveUfwVtk7CdLmTTm8AKFBmbsN3ViRGzHLRu",
  "key1": "5LsybxXn1bbZLe9C871jMBAQKYqhe8FeMuW1qMA1Uc3svUmJqnfzTBbVWiPV9YmfiqwRXMLW3kGKW9w2YfgEwhct",
  "key2": "2LtTdkD49VnU6NXWp9FS7g5iYZDEb3oMVuDMJYvFTzVkK3Whsg26EWvTe8RD77JrixX7HuPtoQbAFACnHQcf8Grw",
  "key3": "LGSj2jMA5zf8y6KXao2gvFK4Sm3uDKW9BR9Upauc3TgD9nxf1JNb3ScFsskTeEsXkePRsZWZgfTWk4dkkCwpfj4",
  "key4": "5f7Uyik6SSsGnX2Ye7qeaDcjv5ErgNwdKNtXfkuXdSmtFCk17VYb1x9XF39KBvCbDAhsxLTgnb52kj7CoSMzcjGq",
  "key5": "usddLGHZjDzihXBGhcYMYxNNLPVQXS3U71bikiKd6Sainx8y4zV5TjN8u1VfM3wEVfe9qHB4M9fJBnCL1yZEDoz",
  "key6": "4hs9YPZRpaWL9xvj3qHVYE4MkfYUJA7aAE2mgA2vcwoFD1HJ29ZXf4ACSHJptTj1QTV5TQTD8xBXmVjr8PdWy8XG",
  "key7": "49gnMFEnXVe9pXFKK2Ekb5Wpyx7iuy5U5N7jP7ycQdNRMjNQNASYyTXtNSPnotMQf97qkinJ7HA7RwLawKiJgg7i",
  "key8": "4BRahkRgHGJ4VXPzj5eKC8buXKx8iNNfoyFM2YsVjDRzS85zwSFFDvLuoBecyvPZ7t6LSQYk2N6tvwfWj59ps4W5",
  "key9": "ftAnm2EFgb1KdGNLkMy4GUWjxBdwk7f5Fk3hK46KgPA3FYJv1YNKhHaYZ1r7SAUUwc8cgUrtzJa8WaZPtcwm7UV",
  "key10": "UGYa964BNum3ScyCZa8rPPXYkHBjcTh8G1Eamy92VhJ5oaiMScbV6EXVneFSgsyPas5GjW6UpkxLJFu7uj1agrs",
  "key11": "3bsHdvXGy12nM3ZHbgC9mJnSdpTVg7LoTPLePV9cXKsefmHXEm7p6xtEwv8g13XNbnGTRr77EtenCbrwSFnMfqNr",
  "key12": "K7wq7NapQe2YznMeniqK7QCF1vrimtxBtd8L4ZDTG376V2YbMgpZWdCtJfqY8CF2xvGdXuQPDGCdq9duFxuD4io",
  "key13": "2kUCfBjFf3LVBhu3W6om35NWUrA2b4eRA7ZKRiAP7jXUsQky3Gy1sqpiUr2d489LwTAXsPXFAQZyM9Kx6kM9r9ar",
  "key14": "3ENDkQq1LcmYLqv9JQged2DjY12PX18GGgwghN8yjLsiLMTeKDPhdYxpcor9HKj1ZoYBnWXZKxoqUcjRXd7E6gwc",
  "key15": "D4AJMi71UmwexMH2rH4nQXivpdMoRLbbj23qfCpzDu2UG1AueyBxPXTwtgb99LLrn7R1zkjxCzzYn3AqxY273XB",
  "key16": "rtd4pmyfNB9dbXKffeyLanVGLSCNXmoDm8ErdeicV9pvbvExmiefVPXm3qssdufVWyMwzx6Dapo15DUKaApB1nS",
  "key17": "4RN7vYqNhCc2iT52d1YVpKL6EmuMGYiKyRn1XiMQHcHu5wgh9GdnsBFL4Fxf8VYxVbLyi8bQuj7pEv8C7nCgRS1d",
  "key18": "3Hj7onjNgn7W5Ga9sEZP99bcyHoZGjnrzo2krT6Dc9ZAo1CKN5DKV7fWR7qcP1E7o8N8ugAzFtR8vHiJkNEYMesT",
  "key19": "2pHLuYL2dP86bDqENmvEayaDt2DwigsD46p17HfwnVxjNQ7wizcPT88GgC26fznsx7n67kzjBvmvbwJfvX3NzcsJ",
  "key20": "624nZJQFvK2tchPfJA3oAAiv9d4WSkw37pqUpHURMMWtKogkhkEitMjhytwq2GHbTXhyzVeuMY2uYgoiU5wqiR2K",
  "key21": "3cdptnv1KGpSYJ2kBHjjs8JKG17gNnwm67tztidD8RNQX6KoVfP1hpcazTABLvXpDyXPUPreafZ2vz4Pa9WxB1WY",
  "key22": "MaLcKv2vXVhywviDs6SN4L2Kb5Qha2fQmjJtrdyAEgxmcDrh4GxMwNeuajJ76om4X3TzUY2MhGj2A9ccUToYKfu",
  "key23": "5nP9nxf7Xnuzh2nw1ziJRAJBBHKvwb3dbvARR2gseNn6DVFkLbSeti3NtMU9EaPyhTuhRi3FTnTGsLpYiXeS2KPP",
  "key24": "3esQwCLobzGJcShVtBuvrPiVgzTyGb6u3U5CAppRSrLSAFCFHCwyrUFd94YDWM2cBnsJiUWEjQpdzxDMBU1JHZiW",
  "key25": "52h8WsiwVsV124xtuhSKRi8v6m2tCcLCcx6DsU8nYhhLzCRzeTMxynUMqx9RBXUgfBkgvWk9SmoNvrP2QwVaYEKA",
  "key26": "3rpGE958ieb4YL5P1cEKgVhynZTDtiXMa7nqMX5DHmv7iCAvvFgL9cYsgVsGNoPSyJVApCfCkSh23x8cGhukcVz3",
  "key27": "3jKSvE4tB1DJMYQp2W1TKzBxYB3VLRUrESdSs1PsdDVPGDmfPLi6iex5fCvE6HsN3jhpZNBZatjQW8KCFxGsnkt9",
  "key28": "4Z6ayqReP8YxchwMDZ4KrszyWxNgwk3vBHyecwrU7UcA5dhTER7UkxDne3CyGZUB3nfxbGyt9KjTLGCTrpZfHKA6",
  "key29": "38FToZCtHZytbGwRGGXikfRdXBMCdSuLEX1Kc3p6V4Zg3TwbvxLsKvcuqa39z59VtG6TP3ScGN71N9ptajKizPA4",
  "key30": "2qm2Xm6a5uEKdHv3hbNFvG65EkJbtkDoPgruFDb64PrDod3fJyZ2seV94JFFqDRxbKtS7oeqDJYDiNar1o4KvCaP",
  "key31": "5HGvbrkcwWP5v5eAx3Pv2RvuX7X4nzNh3v8fu9qYQw48zL1NPxj6hub7bE1YsvNRGiE4hcSJQyVtGsXZiRRoAmtU",
  "key32": "WyTm21JDh8unybjL83AoLv4SKRqQp3WarciTAPsf1ieAvCEMyjTmnjhcuwbntwqJXkEgN3vMQjrqh68zmN4ieMW",
  "key33": "2MJ7Jq9B1VytyFjf4tTD63cnarRqUo8akeq3C389pbntKtCpT4TQFezAtfDvK7PvUW1MRDYFziGXnPaQSw331kr3",
  "key34": "4uGDuZCudaXRnDYrngqrJKysRWP1ahrFsBJQrAwpPMuHWLHurKkhqYEYUaTgz2GcBknFHYR2s5AMYyr7rNzpx1aQ",
  "key35": "5BD9KsaCEBbH7evNaervPo1XgVrfWNwMxii6sfsAMU8W6hBpKD56rtD2gVk42w1nfpjVNz21vpyr5hqYKg8zm3zy",
  "key36": "NyN5c86oor9oi4poqjhahZQM7hi5VEPd3Zyz4ykH4Y36A9qUHftBGYNdhjsbuQNuoBJnkFnAuse5e4he2FCx6C3",
  "key37": "63ae6saQq1tu1sE8gzAfrMzALx3MzuX44WKPdCcDKSDaWeSvWLmbBxXSZqgGbzzDqDbBoce9a1vWLosVQPLUbo6G"
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
