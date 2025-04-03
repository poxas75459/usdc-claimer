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
    "5srz5noKUXxqRRq71eWx9jHxJnr9XZoDHfYAzmyrw23stDCwYfQUqYuisoNTTXDeP5Bczoo9LLUgF82VcngkADch"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nCYeaGxCV9biBjVCh6GEjqwkPa796AJwcVsV9cSbqcLiqqnRrxXdPxsWff2cZRqdxWzDoZWmSsVMp4N9hreJubr",
  "key1": "3r7rQLYvN73GyNpb9nx12pGAB6xU9nHXwGTGMbPGHtSxqSjfn2JEorytcC6zvQKUE7NyvNNUUBsW9hGEAjG5Sgpu",
  "key2": "5HzFe77gBVVv8iNKMoNfcAaN5Y2fFWquE9sgYVNQZrtykGko9sMhSrr3nDocwaYfj6nhzK71LmMfxqxiKnyxwP21",
  "key3": "3amZj56w9Hzjx4T1444dWDtjVKHawU6vVSqKSLhy6KSebCigk3viMUgES6RqgyHs1xG2jiw3q4ZYA3noW8nomyit",
  "key4": "51XNLuTwbQDGz96cka91fKwaKYdwASpYsQ7trnbsi8fpc1bA8s2MWZW5kUsSdVraJkjat1wtYbdLEg2xCoHzenQe",
  "key5": "yrf7CAK5UK2ZwSHvyKkeBrtAccfjxrHYjjF5o5ssKJdE61LLQWYLKmBK46QiqWA5kJCbtkq4FkSHMSKkdfTeH67",
  "key6": "56oDW51puarwfQxr2VCjjnspMRKvAwpSUJ5vK246gFkHLu2AyLpja8S4XQzs7JmVpz1bwd3QtuTCwe6GtAWCgbd6",
  "key7": "5x5NGocB1zv3ZhJasJhRPVZjzpchtbMxwh6tiTqoiaoK6HrE9Dt3Dv2JFeHhh8hxABVYozzBCM5ptbNF9DpXHXWW",
  "key8": "2SpyQnZNrCRYKtABSEUcQb6UYWSXWFKHpnohfaYztaaRgkXdkVCTd71jibem1SfXv9tEdjgMsu5oPgLfrxQTjYPJ",
  "key9": "4s1saX35sPzTfvFmhHkJGPEPMPeHtb4bd47Bd6N1cMBS5upn2hxHbhTqttmFLqBJsA2e87KR6QmCLDoo4cwqzrh8",
  "key10": "zn6aLhtq7JkxdYjvgaa4CEXHUuCecgtHseTP64AwNe4QdUayrAeLNFvedgJJNazL9Z7JjRM6hnxowNJP2aE2B2E",
  "key11": "539mwgfQmfJQiirdMbmQVuYiFUeNFbSCqXLEkTKnbALGuzbn3mT4sVdt5DJgQNr6Rg79wTbZ88pPG9Q8Nw1kTmYt",
  "key12": "dQzggE1qHB7j6XVDwytnzDqSB4D9EV7WHydzxMffbGYJSX7LThrJizHTHg2uKYsz4qezq7HGGsP7KfuimuuSzEn",
  "key13": "3EypX9bwEgrgc5cwuv4R2fP4GGJ6rnYAYuzSNNS6C6JGBVBstDYFjqCysr5aKFEkGcJKR7trdHba9UMMtrsXTwEz",
  "key14": "5ZKd8RaYcDxJ5DPGdawxcDUJDHC3HK655zMoUf52qWGH1D84sAjqrZaz11FvDdimGgNFG4cPxqZDBCVhMZLk8j8M",
  "key15": "3FhGQKhuWhDTRihVoz1ZCaf2NMwDM9QqZBNdua4iW524Q3DM2s5Jcy3dUbmKqzeiTj5zfvikrX5Q8KkCZUvYn8nF",
  "key16": "3aAjnqg4ZBDV344LE1aRyXMrTH1ULPUsn4MqCtftSSnR6JggQXtdM3NmHh4KkL8PpyL1ed3MvXtP7zV3B5qHkdcu",
  "key17": "2khiDh4HjSojZ2deW3ikaWd2t7vUCjfjuWuz4aydHZ4qHnwyAE4dwyReAewS1HoBRouD66XXPm2t5d43FhcF99bh",
  "key18": "3GREZL5aNH3BRjCyppJZLe8V7TiYk7BZsdkavBYzJB5aNBhL9t1s9VQ34kuFXXDPyb3H2xKLcobQM8hRQcTqLnXh",
  "key19": "3SutMfVQE9LcLh5zZceeqpBJqSD7digTXDJzVL9TxgBAiuGjygEfTkGGzXKV1bdvC8r4J8yqeQV2cBtvWhrCU4PA",
  "key20": "4zhEHL2o5qcFyQVgx3qEBscXyiyCXjfUobrvxmq1m98hUEH1ygKU3d99o5rixvvcmjPT2VYP3jZiBP1rXChsVmwo",
  "key21": "aHbHexdcpXoP1VBwp9t7Z9zAPuNhiV1jUbQiS5waJ1CPM2F2hhgVaP5LNFVtDW8pm5cui8Mcc67phrM495cbNP9",
  "key22": "4qVLTRTeJW6vQQ6y9eoGiQiioNyM6QJbuDar9fq1A5fLshHJ5ENussFpPKKzFbuCRP3pvdgNpWqWEYZzdEQX3rRD",
  "key23": "4huB163m2xPwNCoD9kSSRZxcxLu2bGPrF3AaURjnrSYpKSPuzQYqbDiMQ53gxWUxZN1Ye4xdVwGVJGNk9hGL7Jd8",
  "key24": "4WNaWnASqHPi5D9SkprfkAWBt3iX1pDfkKopiXNLpj5auKG76BgwJJGFcNXnRADNJWuPR3vJUB8uemsBnDwgvebh",
  "key25": "3CKHHzNJGc6ACxr9n4FsQRXrT2kjqEddjPVsQa7CDNEgcVnZ642Ss4ciYknE1hCCD5BT5YxhSzMgbfZBhxm4GAmg",
  "key26": "5r6ARsvzdDKeuTWVpx8ojSGPW5VbwvdGz4ZpDFqxTTqgDwbQADTUjk4gBRkzYki76W5ELjJbz3dUoqNET7mqwRfY",
  "key27": "3Z5ow2WFYixiBkZDDCD5PXkx4uz5jMGTESwXFLE8DHVkffJYPuqkdJzLGwoXCQuMtsb1cq6pTTH1478MiGh1o1pZ",
  "key28": "49V8j9eY78oj4m9JuZCBaHtWrkdzBRTFR8xijT7cGukX58ZhtvNHNgH6XHUtv8HUYstddodjhgxNHN7JMHztV7CC",
  "key29": "2z4mFkvFpSWLxA9qQytmhx8eGJ82b2R7cBH5Y1edZP6wQsRWeYpwi8HFJG1CBqWMC4NXi4K7kHuU21pMveT9DsLV",
  "key30": "PMh96KBetjHDVuYSwwrF3Y8wHGr7FoBY3vhnW6qYZmfP7bmgsakoLJe8i8ipZybfLxV2YZtgJ1bxrTQtYyLqwWK",
  "key31": "2JiB95J2HsWDzfgshqbtyeCVNK7Sfb1BUN9irJsu88AhxgRhwfW1NaztGjebVc6hwGjwhf8RMTxRRJsoTzcC4Q5n",
  "key32": "3fYMrjj42bhYb7jtWVScVaFLVv8nhFdTzjFtjuGHVEfEZqtpkw39eCdufavU1NQytinhyDTCNJoH4JrH2Ccv4iAS",
  "key33": "4CE7XExmD6F5cMbAeGiSmyTwDz9t9CCNAJwhNrVWaXpCWf2YjPhHsqEZUDBicVGnSeMYVpdqU25dFdW3cEbaBuiS"
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
