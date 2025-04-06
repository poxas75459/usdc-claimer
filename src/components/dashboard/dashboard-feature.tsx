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
    "2JV7RticwUzuLGdo7q2FzxXaNUfrcHjefXs6dwK9mAAJBGYCKs1qwh1aBv235DC9BgououuZbeeuY7yo8WjQj4aE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2d7ApNr12bBxuoHwQEPEqkgLCZLB9wyhkZScEsnM9nPX9WVyBXGLun2mGU73JLsTEyFBx9dRwKu7G5rhWANMx7FH",
  "key1": "3EqWsQCewkvf9SrDGKGaEoVcsTBajQCGmF14GnvVjLKBgFGkC2n6NLZDzHTEhFH5yoheND4iDTepUwZ77CjT4umJ",
  "key2": "4XW6YYvzf8o2ZG73HUYSK3UYLcQLnngQifRNpCNU8Lw73zShh31N4KrGyjiVBYhVXhr76AXGg4E7DRYuZqixUnH9",
  "key3": "bTpCNqi6yh16R1UKw7GdxHwXccM1PQBvtgr28BFFcr8yuiUnRfZiUJLuv33a8ykc7FCjZx8uggHU6gVoFg1Jyby",
  "key4": "3JKTCnggWSCZ2LzKnHQZHevZGyjw6qci6nvd5pWGhjMTwikXKVQoxVpsohFQKbbxt9oEPWZtbYAF72U2XijP7idy",
  "key5": "s7VWGPTZUiSRsdF6Hi4CCLEu4gbidUnWVfWPkULPqsMJGRB5GxGMiR7TD1sopTDLPC445FY9jTiS4EcX7odCgiq",
  "key6": "Yi85qmxKWCXyhUVSzw6jaPSV6w2VoKZtXhdYabrpZdbWgKv4mnJ8oBRpd35kq54awvv3yTgTJTPh8x52KW3jxsG",
  "key7": "5bzRbdu8b85Cy57LnZZg5MB7etGnBAq6hzqjQAWahkga8h75xrGRxUpunBkD3KLEYw3WCrzAn8BVCHcJ7bUQH8SC",
  "key8": "3etMVEinchYngJZYjScYsvjxortPT94fkBFFginApkGk1dVBe8bXMf7fPs5TR9gdQz4i2cQAZ3X2MqoYMJ4jfW7w",
  "key9": "5i8asSZ89w2mSTFnFqqqW6QyQaLuzMHwCjhT56Ybhkq2199sCA6VDCk26qAtW6ozqsgFTq5BY3ZP97EZg59wg2nB",
  "key10": "4B8spNJoCwsAJL9BNHYuRXoN8gkSR1gdhVZeGReV4upj4Wu9hVLorpqjjigHbz7P6Z6a8TrzN3EKFw9jk8hJqx6c",
  "key11": "4o32RJ9gPrRMdMKPGeK1XAq764o5cfzLBhEFj8PjNe3AW2G7CpEXZQQ489jrfT8jdFMzYk8CUkDMqCYBG4cmXi9R",
  "key12": "2FPz5ngA3w7wydeHUwUp1qFp4qzmLhWStvNJi76AwGSibWMPdEnZjLsvvTfSWMs2iNNqQynPKnx1z1BtsLsh9m79",
  "key13": "2ckK95fc2a5BCZKewUrMr6AmPmrbpbigXhpvuyoMmoYPnCt7d1rh7kGmK6LWZx2t3qCrKv8sP1KTDz9CUGuoN4Ax",
  "key14": "2Vym78UjMtciL3PTCygJgPdXpn7uTQuE9ZETx1SaAAkSsLgWebQLDbozx77JoW1zsGWqkX3W7YUgPmQ338qtPRcG",
  "key15": "4L6qxN3UuCB6NnfMyqrYo8UpM8AiZCHFKzuN6F7BTrAwV5B2P1bZShU2P2kUBAUkvhaPQV74TYBmFxMJAtEroQpp",
  "key16": "5qB2RLRQb2o3CkGf8Yx352qrkeRH9GLMcLgBqLEuBGZsac8ZPCYQsBM4BeAtNiFUzwqjgdCm4RCYAjptEH4ERizJ",
  "key17": "3iu49X1hhpbC44kf6H9yanJ8w5HuJPAp27tEErQ9UcXtz94e7CskC7ysWZaoGyi7i1bXNBqHeB8qZQv8z1V3e4ed",
  "key18": "2m3hGXLNW5AbdEbG2nGYbF7AP4D2R1Z1StwsWWAhKJq7c8ksPcyvedS2AmfGNQ7a5mArQcHDwmBKHPmec8HNkgWH",
  "key19": "3VTa2rrM7tyMdQhBxjxCAUmHNjJJBJn2TRDUo8jUwxQ5DgYrDUithjTqXq6bmq8rsjbXpKLaScXt7GDpRJ6t3QHG",
  "key20": "3fdmtEtK43fCRf2aakATpYz7yFsE1nNQKWdSQuQCLUrVTYJUfUB2YaZffxZAKPpyWyW47Zimwq8G7LFVy6cDuRAv",
  "key21": "cghUaqWhb9unN7cxr7g5DpLbqEALnjvtqdMoiqtLJHpeYpPdZN4CwP5NsT1bsuEYnoRVQR3AX4HsVVvgU9DZeRh",
  "key22": "432eE8ti6iM3tsidU8MG8wEbxrvaAm5j4nQeH2Cxa6E57YCsbzPVUAHdkfPSNMeq1eT3RXwTGeRas3i5TL6V7vPu",
  "key23": "3HoAgqvW8opu5TKPGg1kp2iUAX6Vby29mUzX6rC2nTQn79LZ8TnuvWBbsegRJyTWm9rrogC2JUhcPYLF4iWpaYPf",
  "key24": "5vzRWz41BcQuNq47aGT1TCJ9NGZXqgvvZv44yNFgPBRYUjcdDLaMuZtzRUfLCZFFK4njKWbszydzn9piWPypiUs7",
  "key25": "5HzEDSJSTVGpFdogkNa5pKzANLdPGAy6bejHULJceAqFaHT2dxNMbuFDqexRRK999BLHqvqpjpBpv1YAp4jnyHNu",
  "key26": "38UkQjMjJofNtwWjyZGud3KZhJtNieXxaiPzF5kEg8K2u4W1kv6Kpfse5zrkgX9ede4kA9qk7xBNWY4nD46XHrQH",
  "key27": "2LjYf2cWEDXzt3ZPjPcP1zqrYvpWFvDfhfmqUtZDBpU67m4iLnQQt9W34PAVC8WwyBprTUNAHSBdQxpTLaJsJeCc"
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
