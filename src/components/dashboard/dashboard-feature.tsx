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
    "5kRmJhCT5LWas5TV5buhyMNcjuD768YXGwcbqyRogSqjzR9teZe3ZWjeHo1kXPNmL3oxibzP3xwEvPQ8cP1oqx6G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7eCC7hkNTjMPromfTZv1sfrVa5cHj3iH4NQnzzTo9REmkSK5ZiVSanPNJyPbFasZt5tgw7FiTY98GfbBm9ePC7k",
  "key1": "4mAWPRSmSzQoWF7NKtYfGJM5HDtoH78WCaKEeusfuWV7K75hNyoVuvx8Asm41xDNNrtBfFDP5P1Hr6pUC5tvZivP",
  "key2": "3ZoWkHRvQggVUJX1EufXrFw3YwhpYfZPHCVB4ZPpQceaNoPqmjggj8GPW5aaUnKsc5vRQk6k4nasAP5j4XggmxBB",
  "key3": "25NV4UWy7ADHHZ9zobSWiRrS95Z5xitJhuYU8HQJrSKvvxSM5yyXaDLGcNc2rf23DerMrVfpmELMJUtba4Bffbb8",
  "key4": "3nwXgXTm91kQRxA3LeWEaKZ5cWHKgUzd7p3CVn5pSxsif96fk3gWrtPXDmnLkvEvPTz6aqNkQeRuRTPtMFHeARmC",
  "key5": "63tnjU9KkjRE8DnuYFKvxH3BgySNmzn32w6JNnX1HSqjKB9MgAgzYk7jgwcqn3gx43aXY86qwWCFyRpNGYHakqey",
  "key6": "srBYCeMcj1qLsBGrPsYWvWLPfWQAmsyyKdkWukQCSC1hE2f1d4TZKzRfLfM1Go9rFTGFuqXDgpK9aXUbcDVoqer",
  "key7": "31dC5pZRnyfHABRfmW2Y3mLtB5JUvMfLGg669UVRz2LQwmv9GMYHr6pNHMV2YLns6E97RxNiu5oQhRaySQY5BUK2",
  "key8": "5s9ZcfoJ7mKKcudxkkmxcdRSXGkWUTm9BRzbPJiq2djYo6XatZJt8stPGMtpQcf3H9sdJdaumgAUUBNVGp4J4zTz",
  "key9": "3CPbFTt3DeRCVpy3TBGJuJPD8u5KuD7FjEZSf22RX3vyurc53C23q2pnezQiANAvZTGeWBe35gqdcQv6QmNJS8vK",
  "key10": "2jR1UUDXvg1icibvbRpbxFgvnQsZTU6YYLhcQXGPvnq6xD3QwPRiYjdPDC5sJh1JPmoVemLUscngVVSBGuqQLPxE",
  "key11": "5N2Aod8uBXaDW9i3S6iw9CMxFL6XA8G3CD5VPbbaQgz6RdkZBnzu77sVMCWkiQBJ9fqkzyYEzru6vTfUBGL1Tn8n",
  "key12": "YcDyrD31FihS7LqBVNodW6pfB5mjcvz6Askng5yP4zqfK2FffLXuLyPT6UiNVZTrgeinyc7h6KstWJHFU5iWdHt",
  "key13": "4h76ps6DTnZ9c4V5J8HJsW3peJSmXsCLSTytG8Fv7hmH8prtez7hjr46f6HrNrBq7gx4TWNJkwfmmMqvtBQ39rd9",
  "key14": "65PXxUpMtfbgN3QrrrVtw1yEZJDvEmkATtEke38PvzxQHFqoNoCqmVVwiYhFHuoBYgX35vy1wUAeDr2wjcfogdN3",
  "key15": "46oR1EGe1G9HWQpkJJwZPmXYq9sGbqryk4q6QbopvjC3PEyP2kboD1tQdoLdfmp9RKTnXr2DnzPFe5Rkuye6aKSF",
  "key16": "3T6G8f7EUPVsibEPJ1c3ZBJeG6QEbKDVsPSFb81xgkCuafHDFRpEwDuBYgigP8v16CXuhXcg1b2pSJRt32LrD56g",
  "key17": "2fP5VNYpvmrsYD5mXi2689GRFD61oi7XUDpiVcdxtZc3ikvjiSESyk5XJ46HwLWBQaLwQWmVhEgt1AnBiifm4iX4",
  "key18": "3krorvmNLxrhx997r6USfbM6ZTekHwvc6ab77ihJFAPLioEhumoT5gCw2dA9pa5QELW1RujZ9i6ZbgivjgjpGQQ8",
  "key19": "5EzVvTUhr9AkRzvQmkawNjHb4NFY6yt6HWbKiVQdPRazVhGHqhhq8ZNDHhHfnyyw4BHunD6N7JQUqpwkCwMmtDPs",
  "key20": "6FwoqtNSoeex4DzG7Pvw8JPh5YZHv6MbNAwzz1z2Td7opWb8JHMkzEu7d1ffPxuLd1jr1BqsY8mXibSAqM1WTZ4",
  "key21": "5kmtahtFG8ByWQF7jgRFocEG67tgRJTtfXsR2V4GK1gyYficxv2rR4Wh55o3Uo3xENysJmeM9ZwZmBc3jfiUXWKV",
  "key22": "3yUz9DivYpojmUxcCABVB8Rq2GdT1JT8s2R26ida4oCDgte79KfEAVddm6tfJ8m4SZEnF6i5rseJDoLEcWXfjKys",
  "key23": "4X6ByCKCYU6GZYenntuZWqYXS7kDs6VYsWJaMWMwL7ej74Xgrn3f2QFYwey6z131soQfeNYfAxH4hx7cGyhA55KR",
  "key24": "5GFeUuysKD95pmbazK8XZkx7FVhtBYdgnzJVoDeMMZm1Zbce4F793nYqPdRtGsRn2saSt8p4G2y7DcxNJzkFUc2u"
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
