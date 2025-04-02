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
    "3SfGZ4n7rPgJzVaSra4B9cEFFTM2vg3QHeJFjECQHVPTpvWSz8rXG2ASe2NLg9NMtNrXyVBFHtXsCzvGxhxWDJ2q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9pdwj92dYeLGXxkpKeFfdEL1PsJ29RNKefsVHkdZC4M4Dntwwtp8HddJxyJdd5TTSK4rX5JaongpsXBvgFHBHy1",
  "key1": "5SYvePk15Fvx62cdfovLc9kCSKVNUFyL1evmGzwYH3i5a3wEqYgucehdpzpNmvKtyrjy4p93JCt4z1d5ieQFN71p",
  "key2": "3bT4Ejdwd7iUWKVDhxtF1yoskKZMWCZUxE3WUZX6REnMuyfq2SGJPmk6t5jaQT31FyLFEMVpLWeQaAvYPrWGwH98",
  "key3": "5T7B4NCtBNUosZi4oi82iGEd3Yt8f4CU9gh9rgXBXw3zFVgR9yFFkw6911zB95q6h9QPnfsnd6CwBTASAsnSttKn",
  "key4": "qmwgzUtcxcaYHQrh4fNNh72SGMYbGF51P4m74rm9QngshAEbZAan9rQCjKXr5AUhDkRjDGopSoeyCUMVRe8xDz1",
  "key5": "juZZWbyoZ5pMGAPJYa2DFX73N5HBQkhkUr7duYAFe8M5ky7Xq1RAcPqbC3WZQ2buq3SpX2wkKEU2443eg6HNKjP",
  "key6": "4gxmYNc2HRVPMV3kiqbWeN6kGr191sn8TqioSdsbqYmh88FDoYU1YbFYEBBLbTJhKWTw2U2o12Jv1HHJEeM9hUua",
  "key7": "hWLREX8GPB3JXXB63uzWi5Tc3wFFfK4wWAe5Nvxv3311G3KE1ZnXiH8jqKf6rHGzTSVhM1Qr1KAJJgdi9jaYAAA",
  "key8": "4T5WtvGVt9HxX5CtZE9Rnru9SdkQr2XHta6Kd9EaS8HFqaBzU1m8jZ2bR4AhL5SeEotna6uudLwHJfzAjmCPU1Jb",
  "key9": "39qkULPp6f5a76YvXcvWhiRcxip4UzV5i3z1KUbqZSZpGxytQJsJAnPaRvD2Ukd2eC1JSfTxXf1aBECABLp82jna",
  "key10": "3JkC14QWnKv2S4Wz5vA4owQUYFg5UkusWyBZGUy6BtztdrHD4aLYmUAqmgTEeZMj9frRJ2AxNugj7QCfoFCJ5wKQ",
  "key11": "3JwwiBrUS55sGivPnzvYxYS8p8CdHfWvW8qJ5NeNWLLxRw74fvQx8fA1SfTB69RjjfdLgTC16yhyTgCxoUy32H7Q",
  "key12": "tTNxgDmw76q27Bd34YN325ExvGayS2iAXD2gEbRVF6oyFVVxEXmFExBaTD1ZfJPLFWN88J9a9RqWax6xHaoxd6q",
  "key13": "M8LargTCV8Y4Vcp1SonVY1WmdQFW9mhYNbXygPwbsukmJcFJ2Trm176yTt6kQ4jW9cSxkhdRQgikXLUZsj9b9NG",
  "key14": "3EpDwTUPwDhDwaM34qd5958QkwJbUbKzyix815R8hygjjWQo1TmhKJq7w9cKjuuuhusTYaQbbDD5qwDLzD3KEVGS",
  "key15": "4Vm89EE23JUYNBaSFvAozP8yfam1fzYf5PwWAJxYUJNYAmhjfoHNK6kUg3uR5s1MhpmJMzD5ny4XF8kFJAr3r3Ly",
  "key16": "2b3B6xW5Zctw3A8gEBGExcfQkUEkM62GpBmQLncdM9TrwKZVmuoNHs4ieP5MDFYnm2U4kku1rkfjubssJ15w9AJJ",
  "key17": "Ain9NdbAamvCdzx1zdGDbFgHy7v1hEUM65r27pFs3wTP86iEes75ZW9ErxdPo7Cw88cQ1YDnerwQwvP4jazTXAZ",
  "key18": "5tkHbcyGmLACjTKxjQ5MugxEt2Kxip84wod3CuL5NoNrjGbiR4kFxQKuZ31nS3NdfQbnfhffYGyC2WT3rfVaaBAU",
  "key19": "4TN1BH19cyGVv89Cya6kaTmJKEQwePo4kYGVBuQoYpfrRTVeW3v5ZWh9suBT8Gxgj5LZftDvUKbsZUwHWvRjtTV6",
  "key20": "5Ax8VjHakGffJUAF6kDkiKBT65tbYvRDKjPeqGg6HJs8d25ETNeErjEMKDbDMY9b7kwapQdtFVQegFAJXarBHEWC",
  "key21": "3e9uJo48VwTmsj5YkAhPScKWG3AFPfMsaYvs1BDUfZ45PL9EfB9YDgJ71yaUJ2dU831PsBFFtXd23iMTe7dWPj5V",
  "key22": "2dRBqAPnbuLYTGbTsVw3ecAegaGg6S1K5hG6x66jL411jcuhymLctxirh3sqXh9SqSSnT88ZRFEtmwrJh1SnVGAH",
  "key23": "3etZv6MCv5bAo79en8Y8voKjhY2eJMJDxc2EN1EUBT93mZpNXXm7VHbkNmTcSabM7p5GqXBVQegQWsvR18rvrJEZ",
  "key24": "3EWnFbGHHgZRJwRmxWJxyZV552hpKewgkLy3ZQMqDVjfdDrDBSsJZRC6FEQNUPgfonSWBi4CXRwrpEzi8ZECxkHV",
  "key25": "4tqqDNCZFknRjjXXgWXj41ArTtJzgQ5X33E5YNbQxn5E3ndA71f4XeEegWgAofHekz5KGmaNum9DcDEFx9d9cixp",
  "key26": "5Zyda6uZPX7PugkQ97jR5JUZXgW5eezb13ReUh4ia5NMjL8SzKWz2Dv6yjRLxrUsMwvA5AdzmPo8gYix4GNUFjys",
  "key27": "2MQF5EJKBVJZHzkLwUvL6XhujQLpQMPiRx2qjncuH23LN1QtjhyWBtFqdDi8JFZ7uAcDamFwLVht5464MH1d3B7Z",
  "key28": "5vchm7B9Q6jcF7jQDUAiqFs7X1bDYRyc7kHUhQN2HeDngc6T57WMuyk73iWPFHRr4ED5tK6xssgLyeBLA4yHYAdT",
  "key29": "5jmsUipe8MME7zURMRb7ghVAcN1f3hUfqHoa4iP2z9Y9r4zSmC7A42cYsSFx7fK2DnNsenu7uxqEbfBtsp5Q872j"
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
