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
    "67kAPgv3TGLmUZNC6hsDmv1xM1BgpsFgtf87Qqg6bzmZMdHQXmuLtDpWp9R2wxdCVa26mJyim4Mb8aYtfghCowpj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p2gFBZ32q4eC6w3iNJ2kKkJ9SfvnuMxmy2gghUKqyUaup8DUu4WkE3dBvveyyC3nspqq8JsoLVVTbRiUZYmiD4x",
  "key1": "5WaKDKYJLob4HrWj4aJCxD7ua7gNLwLEjvL6sZMSLvaMBa88znPmhVcGG6uqgo5jDy9VYw3ensBhW78d3r7J7EZU",
  "key2": "58t6iUauxTygEXtBxYH3wWDtZg9ngLKhY8DbNQLNpWvcCHt5FmnwQwto4QbbE1onyow6EAwtnkUTzqvyZ11qiU5U",
  "key3": "2cQN4WfNjncteBPHGB5k7wrtC3sQ72RTU3wvWjikcLcQFRJQJCAsj88ohpjbJ2VRSTWn8TmtdWpjPSvpyWUNvGqz",
  "key4": "2PvsBRhoiNHNWvJLAjgbmwdAPZpf8nsTXQ5r6dQfEk21N6z486cvrC7Tzfrb8gGwaJgCUWFoy5rywRTjU2Lq5eL7",
  "key5": "eeENy9uUxaxPUM4tMn9xGEYUErMLuFHLMJnnw8CNSEJ8tUeMuSJVRjzHSbFSovXA4BgarNwMGfViahxnyHcnGWT",
  "key6": "3uB2nVd87EHaFRGL21giPFB3Bstzf6CXHE66z2W4Qt2sZpLwiYSzQFgTLY1iQePUqhcybvwMpLYrzothos8QmkXV",
  "key7": "3VySycbdpxmX6X2gPWDEbyTYmVSo5GWUx8ahSEnQtK6WcmahLQR2vg7LxPGTHPKfEjeUeg2sJqoEa9iLWjvt4oSW",
  "key8": "qN1HMDN8nAfvQq27jvyBb8CKb6yTCsXJZJuhgYZRJgMK48ErCuqgiBksbcc7nRbn6uonyY2KxNSjDdL4B1JfVZH",
  "key9": "4HsbwzjqCHgcy4b7mWwTt36Fb3WiRu68e9oH4MJ6CN62vJg3xoLfrnAzqBEPQ1UK1AvRBiZM1bH39FQ8HquGMxF",
  "key10": "49mvoi4pYqBCjFjoWWyDcT4ZqobBEppqnp37Kw4GqMcbLYbCQ5GAFD2nBVk4No2gXfqm5VXFhcm5n6V6Dt6gHk3s",
  "key11": "4PizTabaaLKbcZZCxQzEtfh8fhvr6bB3cZCHzX7KYTLwTVfkXgJhvzmdXYZ2CQ6Uq5Fy3TqNQuniJymT1Zk7Zkur",
  "key12": "2CJu4dYbdAHjEQDr1Zz2RijJD49WMgGL9sqBNoiPiSZyCKcsvdXYdThtJBNSqT4YFX3dHNiD3sKRx1ti19NKHT3h",
  "key13": "4jm6CoYPckxL5DyFYsnMEiFctn8ziqUJgMuEFs3UkcjTApx6ot962QWDbPHNkyQDtGoGuAmfBaMRYuJfmYJaPr27",
  "key14": "4doPkA5PnMsq6nDbxjpPT9zFn4kKQsAGYmYXXdYQxvJnbpUUWFLHZC2figvQHqt7yTiStSPM3Bn2bz8QeCdwuH1h",
  "key15": "5CFRtsDD12rYAZqbMdZrGYbFbQLWG6YGTbwEUGcGRjvDNwCWu6czPeAAzHKXjLTnWTifntmxAJp2yYAcLP3tKArX",
  "key16": "5yZMordfcRztLYhtryb7fh7paiUqybZdokiJkqEQ1zpKFjQ3G9JNUquqdXjzbe86qAPcYHtxGQeDPEBHmjzy8U9U",
  "key17": "3A7DZu6oNeFFfNmqJ7jRbiwn7qePhVijM6x4jpZXufCR5aenDU4g75VJMXVjhEYFhhhb8h4fDKRbhX4HNziFYfCp",
  "key18": "4EnFmD1C1CFLMMAbBrVwRU8Bpn5ZL4pqcqUuyLpf6G49Yi7TF3jcnfePsHAxHBekQycGJqCT5sdQZ8hE5frKfsEA",
  "key19": "2tV8yNERGjpPeTH2netGS6JHf35LXDA44PEjqmp3AEzSD9BPy9FuSFuRPZv54xRPYZdopNjv6oQ3E59HARP89cQ7",
  "key20": "3aWrrk8upzNdHbJ1percgpBozZhbAagwJ7ffWCdtdRMDS1vgfcdzf6Q6UjE4ogRbR2ngU99zQhzvSy5QyYzWdwoA",
  "key21": "5bYivz8n3thXmiY1UWf6YcoZfaKHayznHkj7VqtVPfjnQkrqhGVd3WssaPGuQz5hZZiyTkVtunaivGByr8pzsceB",
  "key22": "61AK5ctXdv7cJ8ga6FUQ9USfTaFwShjxcLZ9mxzv6qdQQgp41qqFJJM91QHFcJoekoSYpEWDrFyTVoUBtZHhjqRS",
  "key23": "33RtLC2tmjxMkb416zEbGaedHgL1AQ8f6LEAtDBiKCiNLAGfvXctqhd1iuDW8XLSTvYQRM2Q41abeDekKKUMGveW",
  "key24": "2nKdArAz7DPzD8TJGey1x1c73jLLviQKs6Ss3vGT4Eqrsx24hTekoVq7D7qpSdrupRZG76SzymwkuRdqrBWepZDY",
  "key25": "VZmik2nPZnwJjprg7Rd6ktahrc1tKCW9qXFYaBB5jok3wSUKDso8yteD2TVB5WYwL3JUSYrpPr7N2mytHbNHCiD",
  "key26": "4eEeAVdhVYGjcEFDwkcLqTRyDfHgPCADFT9URXXZ9zvSjbLxDgfJ1aW2WfFTkhs7CZuLcPDo1hXNRvhHMcsnhxL2"
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
