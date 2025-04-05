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
    "4yDrrNrxA1Mo2p77W63crLjGMkahQgURxsGq6dyufvXoqurSTQCMS9xn9iPUWC5ZDwamw9o8mBYXsPHy3t8MLNQR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5oxXmD8eUTHzykxT3uSpVooSrbbbnyezCB7WCfWjrT1zpgWfzLSn7W92uatAi7XiKMSyUJxKynpAnhbo7AcAQgXy",
  "key1": "5nrvZEgLPjDQ3W4o2reLD2fxJDYxKS6WEh7g8yfpZeLNmzMUQPsQzEGoZym3a9u8JRSNKJUGqeDp1Q6fNkFHHGEC",
  "key2": "5ctdW9XC8resA85eAKxSoMbzx7iaiFrgjdYhQXC3yzL2e8vmMynSWsprhowDSXKJ3pzkkjurFCYqyE39fWGMgjyw",
  "key3": "3Fw8fFmpXVtP2JApfSR57qYHTTJyoe1MaxXHp2HU59q64mPwjsJv2ixWx875tFXWA1anriExk8nVZ4bcrtLScUut",
  "key4": "PzDZbzXVYGZGEqTbh1AibCA5pbZkQxTfgppXZpYMYnGBh67fPWgoVtv2ykpCngS5Wcm5jHWUb1RoCizusV4eM17",
  "key5": "5zXpDARmSapjUbSF5SA4Cv2bLvdqt5wT4FdqZTwvtrmy6Ys6p9wkJRLG6ur5MizSbWv3fFNn86VydjkH2m47vR4J",
  "key6": "2cULSg1zewowykz3nMK385MLzvHqvC5rWfk7L9XnYS7rgzRnkAKpuzfmBLqKwDt1J12rBdbZV4KTA8Kio7mHK5eX",
  "key7": "3tCFBVXyXpFj7aLmSAgTcZaZd78d9n6FE9XoRKYhUbpX2mZBrJYMWyzKCuyeNEEn53f2ddDfQpJxXWywKwVhyZbW",
  "key8": "2kBgWZwViNPgFuQo4dSm3QykLZAxkZ2MkfRuAHC5wFRR7uA6qd5DxjdNkQyE8spWnygqh8Xyw1MXNSJhco9xCgz3",
  "key9": "4jgjcGdnAPFfNibkHhFgw2drHZDTMdtEzgPED2Gr6Aoe2JhfF4i4KqGiEbKZHirHdgS9vRZFG79TVioYNTf7ef6G",
  "key10": "2SHbK4nMiPekQoD4y2XVic5BDRT6drToXVK6CDj9Un3vHPgKMu7cth7uMbMJUVhTfzJZJLjHQRobNtsFWdtZLGGW",
  "key11": "2ewub7y51MN2j1tCx4eNeaL6x8TBen8v8qPQejbi1bgyaCVe6vNF21BBygDkjyUDDPdRtZrK1xFWfEeW1zMXnfue",
  "key12": "nA8WHokfMR4NPwkUA4Yp8RgMakPnSgzPABHxq4VdsWdYtaHdU3qzdy67vVqo8NSxnMDHQxMxrFHayiTff6GtsXz",
  "key13": "2STnQqJjvdJxjoyqFJAoK9WceU7jQbLWtF3YEwn54C5ho3ZAPjZYH2PNh2vYBMZD5TwmrzibXX7ntyxAAQDVf6id",
  "key14": "YYKWwXFh6fxPz2pj7GJygmYSpvuY5v8X48Aro1ASd6AVC3RB6ntG5PNb9mFUWk1N3iwx8aPUBuRFVtSWbUL9pTx",
  "key15": "NgDWcdygHM1UUvQmzgwLTPkqWtZG3z76PsL1gPZMm2KYz6AuNeVWgmWqUACdCktyUWaFWiyjZaLPiRVb6X3h6xE",
  "key16": "2xqHAUzy3WRxoUzsCKw2D9WC7ARfCMaErw4rKYFegnSf3TrZyqKG9ngxVvPguJAreNiXbpJJA4wF3aB4JLxhehbB",
  "key17": "5mFxxhLmpqwskm3Xk1u8bnDHtqArTtWPxCu8r3zc93oDubc2f1hQTo5WSFqMxBKa2jva9aXdAgP3mEcCGysJVoPS",
  "key18": "3a7tT3rSd95nCsSeFQw7fUHTwwdrk9Z7q89ZrhWLhGhscaQYZfspXZuG3wneMZKzmxGTXmqkYSg9d7NoWoxfNHU9",
  "key19": "5KM3WBdatwZ91ZHgp4rk6E2WDxMeCcdzy8hLG6HciJe8wM4SUKM8S4XbRzGfX3upbMfaWZ1XGrMZEHrmkbjQgU7D",
  "key20": "2J4jVf6nFpYYyfVj2UWCwXptb3wPLheyoYDHFZ3YcDeZz1v2TRjtuBZJv99X3UTxVj41LBbTULyT2E7nHNtPM9zb",
  "key21": "4ACjtgXc6Ya6pZZzSz6672K5S8YKosuN1SWweqzGtko94w2nTNnZYiPsW7yFFVEVrL9wropaLFm64fikq5rwbY2E",
  "key22": "VjN1FMt6tyTqpbZZDtd9NJRq5bGnbsDShWTXrxhVMQqvdJLdwioa8MGUh5VEjsL13K5vCnqzXp3YvW7EC33Y31L",
  "key23": "TBtNgyxQkNNPeW7am7rwBwN11L7cbRjpC6zndF5qrTgFEtu6DALwJ71ffgVYJYebYrTuaCV6K7EfYGUrkt6fk13",
  "key24": "5DURsAbCTw7oT9zYU3qNqwbJMsJQPkRmrEKJTdpY1a4ap4RZNJGwjyUnVLGqaAHBVohVqRPyuqTKnrgEtpusJa7P",
  "key25": "9sVzLQHXALREHiyCM31qjDcKJXFPdc6DeemzCEx4uWPhUhdVBjcN46UqP9Uw5GojYeNuEmybbxfrMcidBf3HA1H",
  "key26": "54j5tb7zYVKVsc322XyjeyQy3vpN2zM8mY939LZ6JMvWjVBPnK6xfqQTqP8NGknHk2qV1iEpekiPdhQaxazgJ9hr",
  "key27": "4srM1zEbsjf5S3FeAmBfsWpT1ZRJ5SE5JGSs6sKYghiHtHMur2DzXPf7m6ubURr8gkioSiAhUHgydyDyJnAns66q",
  "key28": "3wU61tUs6mQGVhyyMsvfFndxbjFf9TjvAjnWn8AQgjM21k2Xpfs5Jy4jcoo36GgJh8C3tMAZP5Myin93udRLuRMN",
  "key29": "dWENd3ejM4aaC5r68mgu1yEEcA4HRMrAbccJSzrNjCYkQEP6Po59Fj3G2vqSZhM9YzwLvzFgPGa3Af6xdC35Ghp",
  "key30": "2VXK2Seu7GLSk2tbLQ55yqy5VsDzDZEW6DJ6QiVtJXPRWT5HXH9UKb11M2tB2DKBbzg8W4VyLdUiije3A6TVQErs"
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
