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
    "38DpkYuc4H64vbZB7LssmMYbCDSqoEX7b3vKNmDyM1HTS2uiVDnso4ztertz5EN2fKnbGdQNxyFn932idTxKFKGe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Y23bKjPoCU1f8PSK82fdoQNzrpQDbtPZt8RJoeSHquJxzBACuSciAzBo6kGRSqajv7sUBvTHL4VgAwaz7PhbLUA",
  "key1": "3jD2THd4rVxG2bwF8mFBHraYvdSGqkDJsotFtQwKvjWdUdv9Q8gquSJm9iRGwX73fgHjMnbGbGB197d9y4UdN5v4",
  "key2": "7gv2wDqAHGA8YPEovvN6SJTLgYHwwmU5gmNk7p5nk56GA7J4nGVfeCYtuAwwuDgG5PpQySx1oZqn594EeiEHNJP",
  "key3": "4ByrmEuKseTcSE5dyPxQfdGJ5qXiQ4auNQkEWnZ6v3yd9P8A9389KyPcAY83J2rNrdtMsmEd1Ex6TQuzcHk1rGAo",
  "key4": "46udQjetvTbkvFqxJFgqZ2eur2jGfFQ8kKKaB2kTvTXXh6adnvfCfMGWnKAMCoZ1HE7vUDysfaKuxfBJgntwa8F",
  "key5": "4Ey9WZBZL46KHwnxU8JmVuVcEQUZ4Ke61h8wQLpongAyZd7c7RXS15L96zYURptv15bEc58BdeGLzsMUXLeipqWx",
  "key6": "5JEKEaa7vKYJRcf98asd2NJqNs5ZxcXmUcJSAZxa74VNqTfPKoZiwEUQY33xrvui9SEMTGpbitTbR8pdFjWEefxj",
  "key7": "3gCT4brJcs9MXtNBAoqVkEt7kZH64uvr7VUbYyDsV7Tc8JNBG7hgsNPEWhEKQJz88oS5qP6SWafwCTM3V522VvNq",
  "key8": "42GxXX6ZWFmozMpdpb3Kqmtd33ASMFDVJVUZyK9Vxj3DmSAntXGzvJoc98WQ132oJwKBDeR7cpEFs2c4V4wf2WbE",
  "key9": "3QJBVqCWh5w2SJZKNxgbeTx6fveUA68aEqf4tnXX9TsM7GsDVtHsnManGfJZvXprK4whVnAhNwmzMDxtqss65zvu",
  "key10": "455mtyvidABGHpR1hCjP9HQ7N5Bj2jDfd4eNHH6E8fSScm232rVCGGe5Qfo4rYMU3JNbgH6QpbfS9472S7NahxSN",
  "key11": "35JwXeskBV4Embjx7Wc2XrqqkhB6PceQyhr2L3USPpgiEwgH9zYJgi64ndAq1vkbhu9qmx8JNnxbE8FnkExsyjBF",
  "key12": "5V1MBmZWZohoqBK8G17QhBygcK26djKwHz5wBvavpPEd1Sc2GLq9QhcMEAqeYvKNoiAfb2uC7hTZpEDoiSPj1B9K",
  "key13": "4DkZanA39K7djJJaUKouAu2hVhSBAXdceub5h9e4GWqQfdrnaxmorBVCKqSx28sB4qYFFVzc2PSrdGbzddXqDKHR",
  "key14": "4NCVrJJkMBBuVDaiSJ8esTuH4anoZnaXS69kcUPVoYDwCKjCV8Gy1WnyZC6w43Hq96bKnNSrXkgYydDXRkbad5bg",
  "key15": "2DizZd5qajqb5AMR1n5EhKD686xvoyCMZTx394QqYG6yQfrTEAUxNfsti5Zrr9XJXzV7AR9yqXDj74zszs2L5b8N",
  "key16": "3HcGjhsKcbgzVCD6K2d35Xj4FZU5qtGA2Gu8CDGYonWVsteEsX2FY3kWNndCvNhMDpj6FfUxWQeLXPzs7uU2PsKZ",
  "key17": "e8qRqES5oqWhwWQhGupwz3RT4suVmprYMVMYmhXbbE4Ah4dDgqJ5i2ShGptjJRTPqLHAtBZk8LyrUD6UM2tvxhv",
  "key18": "2KYuwZJRF4sth8ggjLZ2c4dP5qKmtJqHjdF1ra2XvUfspjE1Qtu6wXwJfJGMWch3nwLhC5o8gHm4tBpZCDbDJwPC",
  "key19": "5HSC67WGhNw9T5nt4iok2wrWvo1z56aY37MoEyVCE4jK4DVP9cPdE7xzzrYEa5b4BniuTgncWce4ktGedbZ7Rs5U",
  "key20": "4rXuageus6dJuh5feVpizEokyidaoYAAt5aW4wCpvegbkUi2KsbD781vUFLauwCgY8MPbXiKHSBuhQfszPHDT2Qt",
  "key21": "kWgA6VwpwdLee8auPQHKNdmzV1zt5DMjG3niNBVftvB4BCbh6FrH6dXiBwbvfjKtkNEFNjeacZEbLF8NbVa9GZk",
  "key22": "4GUQafWvdgPkVKoCR2UtNYDiMid413sEpHPKgNva146ruBhUgpNkNViE7cSgRztN1M5P6Vim2j5Ehishk1KczTt8",
  "key23": "2RjfuZrsvcGJPE9rZ2kNxTgc7bfu5uZkSY3dkY1BJT8QbRzemuMZ2mCi769FGh6hYBUwkB7Jcpcq4BzeHpPyqFqN",
  "key24": "5EhpSMbif3ZMVnZo8dmaGrjVeimSXFaeHbEjMwamHGDWxzW8KLvsTG1hQUqGQkFPERn2hC3jDShnWgEw53Grx53",
  "key25": "963giHv5bo4qaniLkfC8if3YmsEybLcXh8gMWcrqkdEKH8vmJz5Ak3DV7tPnTjVtWJZ7vwNbtadDYzMtJe5iURB",
  "key26": "3kzLM6vnFHDDKFq9xcE1AJMzQfN2P5psYaK2A8aktpXckmBvBA6mKz8YjSbLYpuuyXcuhHbsQoZU8HeGujPJXofn",
  "key27": "4Briy6uiZ55j983JWcvqPRa6TjWcxsMWYegTgTMR1FWW2orAUCMUToDP6fZSw4CLyNfzwv2ywdt4QF7Qzi7mmBvp",
  "key28": "3QWeJZYaXgAxQHFoJYE5t6Jg93iHD9dP8u3mJAm61RVNg9h2LvycLLhLAsFuoFxD4k6hZQ5wPYz8f7ZeE9q5X2UC",
  "key29": "5Y7ZghQZxcZotRWDncnmkTmZfP2GwuKWwqmSLAc4XJCfBmfFXwogs2NpdYfXctttmy5MqKzvTS4YpKDZyxSqojsB"
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
