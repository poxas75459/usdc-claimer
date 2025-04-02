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
    "2Gk7tpqCLmYyLvhhVzios9swbbFZ8S6KT7nAsH4ZmhSf6FQvQEsXREJd79Lsooa683Ky31XsjsowyRNyeaA9qYim"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CL5jwqMZJinTzyRJBYqscLH47ry3GodngVz64dEkhrx7NLNdgEPwJQ2hZWR4PwC6y98ZxckX5xV1vCZgdENbmKi",
  "key1": "3L7jYss7Y7pyssA3SVdtVDkJRxyLHwQ5DJePiYRAYdvoNPQ4cUr6NvumcqdeXxhoQzJLicwbYv4PZmU3CNbTkrHg",
  "key2": "3pxmxt65SoQZ2Y231d53nL7DBUFRHVdbB4YRCmaGXVSQZ2s6HZGowhDG9Zon9PagjVhiJbP8K5DiWRAdHUZmDYN9",
  "key3": "5yGVagN4ahzhNJEWL55fSkyuRzg2esANA1cwZw74mkc3N6dvXeg6Xh82DBh3NV5E6zUG142BwchafiEW5EwEQuqa",
  "key4": "25C8Ap646SmSwmjJJttj4ywWZwZvVAPpeo1Xc92e9pm9AmLscKbD9FxRHVGYpzktorTNZmgEtJYdWbCF2ic4mjf1",
  "key5": "3ZfAR1ra191T44Awpehnuvoatc9BWAbMCofux8beFi5pZVJUUjUDV4vFv3WZvKYoTNDo2v38G7CBufjmRTFPnnMn",
  "key6": "4Q1apYiSu8NLGeNyQb3ojp4BUAceuSTMu3qBRpDrYd2dfJ4qZqs4kk1ZwDkVBegEnvAxgD36E7SgHv6rGF5Mr372",
  "key7": "5xtySibXUEfsZoZvjwGAtCg7e8kdBZ6S1xTGEbWESF3rsXxVQKqxweMbEd1vbGXQ2hQbz875Z8pbcGsqtM2swP4h",
  "key8": "4kweZv1eT9UTvYPwwFfzU6hHZqc3MeuhC9xG2FymRkhTAfNq5LWUKEkwcYj4FfrQZV36UhWJ6QyAhurbktWs1xgX",
  "key9": "41zKiXRFxAoGhRoNMMwtMcYARzazohLjJ8Lij8feVMChnnDXobNwtT1zBstxT1vX4y7pBBgkQxkFZW2nVYqtdKdu",
  "key10": "MU6BTpWunwuVkSbVVj1z1gBrEBDrZ3wwjuSgdeUf97UB9GkJowo5GvRprZt4MydugWrRQadEMcxmYwsAnYpdjLw",
  "key11": "5GeMYZbcHUfudVPagzkHBfhDvQ999JDGXCDuzbwPWPE9yz94o3hWDFDzw9eT2szjRbVxwHj39rB8tHtFCnLUHkLN",
  "key12": "4ax4sKj3zJAWVYiUVJ89D6wV8tCMpV8RE1LsoWBqV4rJVyzPRzsmWJvyDgPBBzvqy7jVUc47T3GuifBARMSV9FJM",
  "key13": "6PqPEQGvu4NF4F5cRsdsnKwqwCVwfn6NHBZMS1UeV8QDE6FpSMH6tEowcPW6yZTjK5qmMzSbVZhq9TTWuB6UStM",
  "key14": "4RMGpy9j3et4VzSt8JRBjP1bR3S77NtReLTkGpEFfa6sc5wxtRyHBTpgujb7rd4Muh1XpdEsAAx9zSYT36Wk74Wq",
  "key15": "2P8ZF6K4C4NwqPaog5m7FP3Xpb23A5whXXReKZGKKVKR1phh3cG5HjFdqTSBzFkx9mGaUXYn86jWYTJxRmBByKX",
  "key16": "37EcTNYbXv5yX7mpspxgVts4p2JWvEupBYyntQtipFCfVXNK1e3SYZvvarEUKKe7eErRTFEbcTfN2DdNt4b4FYeq",
  "key17": "4MKH94ipyHYZHybbhR8dkcttvJv7nrdoFDikHWUe9WRQLHmrs8DRu8bLRRrHrKjkNNPnhyzvDawiXYTvsHn9NCD7",
  "key18": "5V8MZtXFbjiZdU2cjPfHBL9QqSkg7ZekiDy4bHCJeo6n8gwbXD2KnRHbZefHqMScG58pCvhEqBdMhiqzbDMMFeaN",
  "key19": "2Hz5ZGcBJoPSewtv3JdKY9ev7Gm2166kYLFdFP66vvZJjTSQZgScWvyqaZZVrEKbDPFQgvuBu3GMv6T6LaxGrZBr",
  "key20": "4ABV9GnFgJqPRwuQr2WJ3P2XaZGuoLLm1bN2dTkE8C6aXR9NERcFECr7Z5WLPhRH4oLvmv6UpvUXnPpTEdrdgxsV",
  "key21": "rb7XRhhaqznbKgRPdQhH1VnQUadcNes33pP1n5XyGTUc5gYgfC5fjUFkky3LgoxCtxkuWHYHMvohPNXbUzvsZU8",
  "key22": "3CDdCtXHNmmJRo6j8U73o4MnuzpFedym4kauRfsVaFPX7Z5keLaLSj3DgtbzuB2jWztN5SoUZkwhYLnv5se8qu76",
  "key23": "bJ8Lfkhj7sWFtUmjtXyE8Y47XjoWzSJCqsSiZ6JjqGzetu3DkkABaYiH6JXULwSeXM194G8xBrgP12yxriw5nJA",
  "key24": "173nFzbgdeDAkjgQK5LZANpNxRQT4sZ2pKnFLhP93Sy8x8jcKWyCWimos6RZKyVdymy2NLAEkFsbJsXth4HFr6o",
  "key25": "2fTt5jyutxiZ7nVfCwr1NvY9Z2yzuVxDZoYDzPmyWcG5bfU1ZGeKA4rGErKFZB7hh5ydQTpXwg5BQXXJGb5G9Emg",
  "key26": "53FYGTwAcdSfgPW7MAQ6z98GUyX7TS6z6jznivuu4Q7LmiGvBkrRiXguz9uvYXH3N5hep2AM4yYcf9f1AwHNxGnb",
  "key27": "23BAW5vRJ72H3dtGYB3KjktQx9X4q8dyyh6XufvCSHmApturLcYcKu1hmuMjJqCPzHwYT4JcorCbm8pwkABmWyj5",
  "key28": "5VCQtAq6NWcST4rzpUnnGviQZFCbdn18gazPBETLmcERndATxKVqPLhwZPNee3eAs3ScWiV8FZhYMnDfZyixNvkM",
  "key29": "3mtsXRgdjYvSzD17Bg5KxWKiMnX2GWC2oNcq6ZxaSgZrWpA5HLCTEfouD9nvL3Sj24nyYHrtBGQouFBYGEnas4EC",
  "key30": "27JS6Vnmd3bnd72ptbxxq4aBD8Xh9uv5hakVTyPnqUGBppmQUiknNpjW7tshXYbwG8LDQGNWSoFSDgaST18aTb9H",
  "key31": "4J5BjKHVzytXU5uaX64v6SuZ49prND86TG5XgxVdD8oe39TXmyidCHqfRMWibs4fuLHtaxKUMhRex9WSxFws8aXR",
  "key32": "3xAqdY9dCQjRavpYUquAjkhBzdvfyuam4jQHdeLznUha1zYmSZhFvEeQrRicjuJe87Q28BEbitiUac3cKMDDxczn",
  "key33": "Hs7F2HuTVbhqwHDVdN697FuN6nJQhH1sRrk4cfNQV54hmG5Vg85NuqXXocbMv3xyqrXhkzdxEDTVh4HyQPFd5V3",
  "key34": "FRSzwMEqDK2nj6MTK4qQ5qirMLWR9c11TRaDGAHruy8gFgsJYMv9AmESzs2XfTPBkdCWWPiTxPaDkdB36Rnnxqu",
  "key35": "2fvKtkRU9pEQ6tpWYD7Ygc5dvtq2ZDkYq9mAYMDG7QsZa8FFKN1oPvnmfhyLFUccu2KpjP4Vw2xokLfnYCo76PjF"
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
