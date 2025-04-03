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
    "4qafAmFYYvNEUiVMsEsJ8k5YqHRGX9fxpkLHEKKnm8gLjNLrkn4wuRr8HHENUDA6kuW9HXCpBTeMRrNzkC8bvW2T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rAvfhb3N96UqDuNQurV8vFHDoifdb8DDYGTxuK5PkhHMLAveqyid2fb8pzaFhcwVvkbig2xbdeQkAn3fTPotmRx",
  "key1": "3Zy1nGgBQ3ireF5Wy2aCEyHsNDWi4nBy3SCQUBgQLWSvqnQpjcNu2hSiFdBjvets6PNMj3YH7wJ1hiSVqMKNc6YC",
  "key2": "2fBG5HdsVHSkq2ZkddM1jyRSfq6bypj8oQnneWJymoy5AzPDha5GnK2t8LQHbchdLPvAvxKQ9UjFSHVv2vPjWnew",
  "key3": "5do3xcT4sBESfYMfoDASstX4CkoX2q8zKjPPxZAWXQzA77b2ka67LF9SHeuhMtPrn59yjitxfXTjrLXkgfwa3ySh",
  "key4": "2EbQJ7yUzqY3q3WtQhv6ZSSwMPEXqBzy872f9TWozaGF1kmkSdsEFWKU4ad6K3ZRkHHyTEMYJx1BEaABiJqKVVYi",
  "key5": "S3AFuV9pyYgSMBVyfDj8kZsjhz7JhiwJUyQSxGBBxhvYSsumy7VRBM9iY96aVYX57LSHTviM1kGmr26uTiCWcuD",
  "key6": "5J5rB6EBgd2pjTrGgx72ApcZQCajUFAct6zXsyCHLta2tP2D9TmqeUUcWQZyGU1MCywrh4xjSXwhEzp9SQJ2hu7v",
  "key7": "c2XDqRSiF1tSRgam59jfJfcJ2HeVqvMTtC6FdW44VuAbHYnDjWc421bgzLTSnmYjCdFZmiVri9mh9Yoc7Kf4v5o",
  "key8": "2LviapMYWZwQR5NrgB72jevuAmBFUSe87LTACWQugzzYtH72LgNChTwFLFD1e9Y3UsJHaidtgqAXS1mnSVC2Ggis",
  "key9": "61uWDTH4nvLsNaHbuoGQmh5zvmr9R1fSoj5U7PTfLfgRFTnWvxGxw2DcLQK1aJ43vftv4vMZMT5tf93aeZnasdhi",
  "key10": "fjaY9H4ZiZmkYfj2Fr55NkVTBHW8sBuEZDhS2Y8kjEhdvy3kyrChL6jZ4V8sB6syYFoohsmzpqJqEKkc1gNvSg3",
  "key11": "5w3mPbCURhKxAFKYKAXs2P5Gy4BStY97XyL4stz1DEX9mDech4CPFfy1dmdLhmDHHq4ieHvT5cRsS5x61ozqLfZT",
  "key12": "GcdFoVUrhSVoMW1dgXsUV3S23XYH1sBud8QNfyTtwFtobw18UBjQhT772qeEYMgBboQSoQbVZz7cLhAA8BfaN1g",
  "key13": "S6xt78hQ6V8bWKJXKdC8gGqVcFQfgyNVu9QHq3MqR45ZRphMhS1DCRWXNqagz4STj5731YJsU5VxeQ1grDd3TFB",
  "key14": "2buk8yGSAGVJWYKDgHnsgJGDdVourSX1r6McG7AgcNr4G5Jn3tNAcGzfGiSft3AA2TMqmt74EXAmX2DBLDH7Nqpp",
  "key15": "5jGXYSgPVp8YmXwHTaDNjs53cXZMvFQSz8e4cyabkoAnMkTW2edTu6jU7YPLs5SJPyFsZ5LnX7T3nrNx6r4mPS4e",
  "key16": "2tEwFkZLBohwEwA3xtGo1GfGQybSpcHgDgeRu4Fde8e6TcUjuEGmXCDPsF15gMyZ5FF68L6yx3dv7i6JUPAmZDXC",
  "key17": "3odYeFBFyRRvikH3yjNBQpAx8KdX58zgFew2WbfncT3CQhZc4uty6CmAFaVoL2qbcGDArv51yimYdvRkd4puKrhG",
  "key18": "sSrTZUoMz6pczGb5SmUrzVwUiCojy8UZKHnrr7fRAsjNRoHKL4d54eMCEKFajKQhoN258UJnupj5bhKczy3kzds",
  "key19": "2VwqrnVwYhk1k8f8ZUpuJxRQ8BoR9jbpBmQKDsJjHcQKwjAdgmSjDZsRCL2Xn5tmbFkKhqL1pBt34QeZDg9sJT9b",
  "key20": "5dNw7pywTCfFN52Z7VQ9RMShdrXyWZSv71E4Ztqy6EC9Q29Ko6GDxb8TA3oZTCXMcCYzuPPjqWbgpDbWy836qhRU",
  "key21": "ndw1sQoQcP1WY1WjjGoYgHxuVVvUY7niQXDcwjqpCEpfbkjv5jsyiQAMHfN1zXh9ybceKUdyFu5FkUTsj3vHKa6",
  "key22": "5KqQWgrArtJp83WMQGCRE69GuR3G5J712zkkWNmW75ECywsvUr736hZXi4qycM4PoTa4qtZhXWf1BUdhgXpqRyt6",
  "key23": "4ccVExTpNfw5UT2FTJjDZbDnkjFDvo6GqWMsi3ZqJvToM5r1tD5E653FEydpoxooZcDQZ79TuwRhUgwnCANeZtNd",
  "key24": "5J7Jp36yPUNEeGNWWcRAroxMiarqsVhub715aSQ8w3mtAnXjxhMtxMChnR4nt5wUtMxVcuyLvFXTcjc6pYjpAGdP",
  "key25": "2KCmHVfnMXCWXLZUVjqFqVxbk97ukuF7q9ReD8DRs85LwnzR4F8V1AVdHMAsJwwaMdcPK29LNMAD3L4ZVPjzbRXh",
  "key26": "Gv1sfTgYBeeJ61LxEfYWinwEi2imjDYhMqBr32mRyKx915pGUqRVGAXRfHSmYdRcbZcySePFpbzBf7rUq98gtTu",
  "key27": "LmmviJ44PBguBMN1vzLnwxaq5PXo3tQqzUXYDJXTiJCdBadUvqPNygBr8pPx3tuYYgHKqGbKEajJsvTdt9kyWWk",
  "key28": "5hZaGvWwYqU5qVrjtMcQ931JLjRdX7tqoQEuJvELQQq3pHnhbxniXDvCQybV2Zf41v8wE45N7rTZbCcqzmVYAUYf",
  "key29": "UXNJ1bFtQb3Ky3NS8wo4D5ktSMWYJtJ632ZmAGy2oDwyT3XovQG84U9saLUcDx5XKQzVEcZ1p71i2K1dPcEmRoY",
  "key30": "21jawih4ZB8ZXEPoEcze1EVRB3H6H6QV3C3SXyQ6PFkVw1x6paX1L4sawtEmwyhHsWtS8L1RvxSoc3rifefNGECQ",
  "key31": "2BxrrkpfYrikDZXRVLZyD31G7DTvJKJkbiw6Nr7kLsddhvLmWgYnhtrrSR5FX4oTaMY9E7k7ArC2ihcEHUMvtesL",
  "key32": "5RTvcDWxXNQS6PomKbSFo39gVCMRjyk8AuS1zFXjRsHxBap8VKAFKjrx9zdKWKtp4S7ioELfoKjBMp5NzEKDSvEu",
  "key33": "smNMjcctEsX6aHcQNNrgfGhQkLbp6SXZyhoMbe21BAgT97XfRjsG7fTKUTv89qYCWJNawR4LhVDwbcoG4YeCQaN",
  "key34": "5MdRM39o4o9fBM9BJV9FtaezuGJHxhMXjNUCoYnG8JzFKUdug5cGz547X5xGJGeEwC6obA3Fj9KS8WXy2rZF3GBV",
  "key35": "2KbzvR8Ee8jLbKi2JbRGyCxga2zgKp31jRhQE4ha6T7ExvQ3LFevZG8fVCjrSz2cJBfTwc8mcBYXcuWTC79ftwU"
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
