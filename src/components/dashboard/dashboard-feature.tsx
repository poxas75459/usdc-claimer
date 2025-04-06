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
    "5b97A5d1vmT7W1qauSMwTN84uWAs3aytvgcWtukKRN9aFbjeVtMWAuAPzSNCkgq3YZw9JRwNroCN1HKRutSqYvxi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XQvSfQ3vv6viwuKUWsHfQYvmPrgwFFcX83ZmerV9KwCP5ndgNw3eBi3rAMzQWUX5VdreDRt6X5uuaVj69C3UocS",
  "key1": "5s9vWs1b8d27G9B2GQ7LUvnLHEXcr5e6TKR8ZFbntr6hv66MiidJBceV2ibwH6L2JiTe1Hyo4Wt8syWbXyoxdekZ",
  "key2": "5VXBAbmcA4DTz8jqr6b7NwPXdqshzzWBShA8nF5T8sPcWHGA8R9GRFRAzjeijWRb8A3EcAmqegqx6qb2PwJEvzvf",
  "key3": "NBTtPLnHV3voz9kPuUe59ApDwhUTEni6EMhuNGCBbqSQKaj8c8T8VbLzUHXgK28ExbWvQh2eruwbiV1hms5kWNZ",
  "key4": "5n76QFwH8LBhiXYuqUca7LB12JfFEpYtP64zQQyEtE3xTANzgZqe98uRZvbhutHgMqc8RWbnYUY627THiXAGq1WF",
  "key5": "5inqsmHy9GzGDVVdRJmMD3mSApWo2q85JAM1icSKXD8cc3kxNuErsLAJk65SDZTNUhkFcRzUQgxXwNdBwzWWaYPu",
  "key6": "Ysfbq7FtaTUvBdnJ22VPq4J7NVCQrFmit9GaFf4uni6agaYr2m6mjqF24hSxPwcWQBCdEcwjsQx47qs9PpDtZUv",
  "key7": "2MiN6AYNMZnyow84HJjdS8UW3GX6PJ5RhN96GngH2GfCmnXXjfngrgGCzQNxpWKKxmH41CU5HXwHc7R7G5StSqdh",
  "key8": "33xyMzoU4Vw6XCiEkHpX378xUg5jVSTGm9ZSQF94gFsXo8LWhiyDA3kVVKSVaePpUX3gumbJYuTnSjnwDgfAZxXt",
  "key9": "2aiREtXaxhgAgf73xAopLB594VaGuLX6Ltd5adaUA1J9cjKHYFku2GR1vBBZ6jVmsX87kMXT7s7UvK4uQ4ZYArpt",
  "key10": "i5NKpeZxyfmnAGi3Ud63ghyk7cug7R2PM3ShS9yJMak5putnGGfTY6RmajFivccMZfPPDXTBLxVhF5ntafGKukr",
  "key11": "24eR3BYeV93sdujAcbFGiVQTbYF8k3QQLeGZ8zG8fcB9JWCyizTSp4eSwQmSC8W4Vzh5z22mzzCw8PNydHjZw5DJ",
  "key12": "22zHyh8FRM4JSgijUf6aPoxijKSEzPbCfb2tr3qbmqW2MxmYkxw4RNnxnNDmx4gpV4jWfvNJjDRwVDX16XFBLYdJ",
  "key13": "413Zc798tsU8YVQRCsVKo9Xveqmbm1k8fntz6wwFKHJ9PA5116xrWvQ4fL2Ctc2RAGeb99yKytTLYjjCxEEu3UVN",
  "key14": "iBikuJAUzoEHCpvkf9QQ2f5mKXRDKiTaZML3JNbXozt5rHdKKYRuov2Rp8WojL2u8brWisqnTddy3cZd3vQQuPA",
  "key15": "2weVpPTMCwb3VAQpoYprjpNFxHdKa8t3ZZFbqwyXxaWWtS4Z4MvzFRcmm1wRdfGAFMwWb4b5XN5Qq8zVqixwTAgm",
  "key16": "3uyCyg3aTgEJ9X1JGp7AU8tKj88CR1kqLj4Tqae9VxmcegHPsTtpP1HZsN7uU5cNWaGpry29wUgLM8mWZa1k2MBW",
  "key17": "YJwBKhZD55wQWVMTisXAZatUUy83qMec6Vg6vncnh2L4m31R7UhsZckfijJbe2onjP1iuGH85zqmtv6cp4KS4AU",
  "key18": "2BXnYp1PGEohuQAtHTByZg4rnkhireFfNkSWT5GKvAH4KT3LyyeyZyjePjpwqVL4BZcnfh8cmhVZPyGD7FJWLMPD",
  "key19": "gywH97ru1NjwSey2ZVUKwT62eFWTKyTeTWnXkAAuNzMj9o7h56z9XXTPH7jUAGTz6m4UXLYvBTt6VcoLwSGtbwQ",
  "key20": "2j9NpooH8m5h6SsKymrFJy7HyJDA5c6o9uHxxuBWdZRZfkuJ2hyrWizbu8QKpdzLnNctfaEnR6Acj3iSQSw4s4ZT",
  "key21": "3wMw333UzhUXzuBndLk622MUYfH2LJdqhPisXdoHakrCJYKWAyW9MAVDSkNxc2oTgAiEPhTSybrawSYe3zqA3f3a",
  "key22": "62fQU7RD8pPZhejeJMh5o3ojoz5kPqUZtwyxnmZZeyasSSLnkmeZyD31oSdi5fGNfunCuqELRz2NE2ZpVzTrQPPC",
  "key23": "4P2kDSSK1nu4kGHPAk2ubbQfFbx4VV31TxSzAAyN81kXJcwautkf3wFGHTuXx1PGEQNYFQo6B6ePNYuTjPgeJK7x",
  "key24": "35dP8v4d6V1pbV4sBJJScrKM1rNVPejgSdrPmgZS1WcqV78oCseMLGdtkRU83WuCecDYoFemNQn34GPjSBxnWAUJ",
  "key25": "2QVtqravxUjx2Li1UtmCtFGSxUgWwo6d7KPtKUWvGwpXKZu18At21dhmqgChiHm3tDZREL6ZEB7LMK9WWuZrpvDB",
  "key26": "2ftgPse3WsTHpSY9ZTZvGz57NxQnQPNeVdsFkvmiD2kggiJaHmVQNfq53821fQ5XDNZvmD9ML6wA6c4Uufyyxutn",
  "key27": "57NGFPVJxVr28kjnpEmDHyFW33EY7e6rvwuBq2rJP5cxtMh7DucNMKeKVLSZvz7KvEhVoQPUGMaJrTBADruoro1x"
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
