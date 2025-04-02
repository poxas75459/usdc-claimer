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
    "3UN16HXnWpPQsg77fbtRUhRWJT91Dke1fx7iDt2QGJHDkmoxaWiqAwU2yv6nKgcLDyEMgt4ff3gBZfQQyZaNJiwS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2kDe1oGZrgQsMaUdF2j4vnmqYgz6VdCsqansBSdB3py3HzTajVR2XMxx6XhUTceg6uL7ukrNvyC1cUbdY7tBg6tV",
  "key1": "3ajepq8fpohQgzdFkeb6mqghi9cmGoTKkRgoJmQJGLhRnGp4TuSo69jN2Aq62ZgPgacvZaEVXCJcAvYCn6A6jPcq",
  "key2": "3x8k5H8rC2RPGcjAN25uM7M57W8JBoPLXNRxZMknr1BknVdkZoRao3iSXnHDc2og7nKktm7cdQ6mYxodmZTxDHsf",
  "key3": "4eQHBVxpaUJkgX3XaHrKiqWhjeS9VUD8XYdomCyAACTCZeTxRLXgeP1sRXz1fPSvdTDSmEUGuEJnm56ZEQRiJaRF",
  "key4": "39mRh31Y4Ecq54KktiQJcm8t4uUg99qZHE2GBnAn8L5VySE5XoZSDgSqrS6pKrytGr5YYuTsHrBCKULrYHJU5x7g",
  "key5": "2XBEBpGYpHUteEyQsrATCdTFvzQZWWNBThjmmKLfxvG2wG6ZZWUagvUxw5Mwn7b4KoUNzVnsNg2W1KiJ4YnVP7PS",
  "key6": "B6oQuCc39F66tLG17jQsLNewLv78YnjAtnnDYbaSyiRBnuFvvsBU1t3Fo1AsMDFUPVGX1B4ybbpoSQ6ZsLNw4CZ",
  "key7": "JxsJHCScyu2nKaD8AGGX2r5RMz9Vnd8jZPckSoYwPL1hTDCXcJhZzTTHswH4MpvZ6jVrV9uWpDSTagiViN7zLLT",
  "key8": "7dJ9JPiKgP19b2Fb4hpjvheJEpRKJBhexQP9PdPv7Ebubk2PpM4MzbNjXSDXVkr3mTz4uz7yLqhdtTjNPmBy6N6",
  "key9": "2YqAXrxqBe2sFdScXYXMX87MW8HPRn8BTkh5rPvGPyyJVGtETtgktsAHw2jt62of8dXtKqT8zbmkDTrPvZv4fiXP",
  "key10": "45qrKfCdJ3t8jmexjgZe3GyZrQxztMMxNA3u5BTQJJiciLLW6GcAASXGdKWMivwbKy49e65rfb1nRMw6EEkMt7RW",
  "key11": "5Vt7BpyJ1HnJzkywPm58wx6L25tRhbGRKVnT1HXHs4u5F8fW5B16mH2f5w1r6tLJjqHito8hfUR2KCbGtKJGErMj",
  "key12": "mRsdk3q4TAzZYYfUMf8cRA2FHB2QJ3Ev8inQt9bYYg8UdYPm95RkmhBW5hEvYD9im1VQGg1wBYpK3U1GMm3xr59",
  "key13": "39E6QJyT1XfomwWYbLjUL4XKHD8bWpDZrXDXec8Pfq5iAhgjT2Jmn1RmqohcjXBKAXh5fQBJ5NfBADvvBnDZXzf5",
  "key14": "2FFvKe3b8EKiMZ49BR8rTgVBzbLqi2rjShv1KDTTxQ5knQTxEBXnrY2jTnJc8HYmV2DjmAwwqBKn1vz7AXrfqety",
  "key15": "3pw5K2aV921fsi7qk1CKGZrrjAmX8QQTUykuAstxuCymbU7SbSrTRxvGUZKx385BFejR1tsoSgrVjnmv32EyVkTm",
  "key16": "3ReSDBr836CKjBXJAuqiKUbH95Grsr9QhCox8PGkLFdcQD52MeT8HW1E2m5XVBushtTnzHrD7r8DkgjvYLGGNt75",
  "key17": "5gmzPRJiqyjWPy2RKQoxuw9rMTJd7f4XUq1rg8WDxzxkhk7WLf8fBvfVFU8DYet3rfbFAk638HzKXGUkeDFtgmrv",
  "key18": "21kGZp5kj9YNqxe2Ao7AFfvBBW78FVNub4HAX5j9YwaUqtAQNuUhA5d7psXiLBGHwZK9h9HoszB4fycru1jwgJ4a",
  "key19": "59mwgw7m4JuHBp68EpfDy5egYN77GU496b9hkTrFstcqFKicDjg85CfgHTX9nirNAc9BAk19oaLCSkwzhMfxEzi3",
  "key20": "4qHMJcBtJfiDuxDVXp73DhdMdAwHYvpT7rAZohfLspfXHbBNg963oJrVebSM3cAjz5JYDtJdfHZmVXW4dznYDzSG",
  "key21": "3dsLfyP9KjFZfzDENHkAs3yaZLmarsT7ZW1dsmtdyh4TfR7ChddUkHKTgWQH4eqhrt6zpBS8Vi4EE7yG28GZmU6g",
  "key22": "2GjRh3qfn8hWCxSsBvJK3pXVjrCrmb5GVnZpQQbKXfbWFfno9AisjL4WFN9NE4YPbuanCBN4XpUvLGxdrBqtXwiD",
  "key23": "3ppVmb5kB1cfFExkV6p7GEnYNyj2FAbjtHBVCtDno8nBDS9oNDGGjLHhGC5zadWkpBhRic8Nf5u59BSKkkG4QvSm",
  "key24": "3dYE2yHfC9uvjHzM6HJjLvDgTPFBSfLftYbUbUCQYM7Bqa8Dha54M4cKdKbteAQa4EKjfiNYVRqyKMQ6X8GPJqiD",
  "key25": "3nPz4R5NJycJppiUtZuZQzBqLaMHBxvmC3ZidKuPKG2ytTHMo2HJ425K7FxEKLpRs3YxuX7kFYpoRc8msRt4Bzh1",
  "key26": "3y9LjZDdGe9Qj3BGJtnkQm73U6LrteYh3ZMAKdVETt9p2V79JNLKX7EgJke8T2UQWXSNcpAAhsh1MRxubn19Jchh",
  "key27": "JpN4eezYaaWwqeRuhrgxgV56zD79vpy2DCJHCi5N9HfV3EYNxDmd86WvoMX2KQAL2RarSL9Vvm8Z7UBPK3vpBBc",
  "key28": "21MFGSfLA2RtXjnrPnfRAVjuaS4tZhSUTtZW8TNJSKtUwm3QQtoFxbHsRaa8JjRydKoFYWPMGEwrh4sXRRWTuwm3",
  "key29": "2m1HSwpxgkUocJinp5a2cvrGXBWd7LzHyQvLKfXBRK5ppP853fm3Sn9A4P3ujFn6LzYSdY6sopr5AxQPD6Gy6VsH",
  "key30": "2cktVwg3kZezCffkGkXX3mFZWmbtZyhtz2ahxejZtpuacu8j81Ygrs1cujALdRetvGptukhqaCBx39zQjsMUAjRZ",
  "key31": "3DENeUmdetSMShuTHDUMNhLnwk57DzknMpxs6Y7Lm57ETzhokLMiTDeYKVpu1xKFGhtYPJMRP2ifnXmvz4kkrfti",
  "key32": "47in4GAW4QjY8nLrLyzRfz41AEVvqFPRknbvjSD3HgVcnhg3PhMWL9kQDQZvU8H3CsF95rHndcorGefpT1G12k2r"
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
