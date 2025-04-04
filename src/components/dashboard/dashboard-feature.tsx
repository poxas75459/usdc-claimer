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
    "2BSvgo6M21XNZtczZxQvN9kHWMArfuRRQGdkNCcCzub23gv3odA7eEMmM2cNBhd2ivj8fXxyEyws4ttwJKeCor5G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5kMoFuGXN7HR9DMXZr8neveZrLfEFn1K1WxHpTpfoie5fv7Gk4639rvgLdQwAA8dXbPzsfqrB1BBFUQQZsrC5KSR",
  "key1": "5ryRgm93FjrgWprUPMLmr64CFc2LZVjdK8nKGfG7nZBPYLY5daKsk89YRvSGrvAB9Exj2vCUq66mvVrYyRqSffek",
  "key2": "5VbbGuJNnshswR6YT8XLc2Gqq1SKxzY9ZCkXngYn6zuM1arpMXmLxmAi5CEkPLVQaikKkhVyG3ETrr3L4VWCFhqh",
  "key3": "4RuYHQmBbT6uQSFrESTZhE4nJsbvAuDnAvxwTnktaNaPJcuSWS8pZXdD2W6mLk3mzEKB71h626sija8hW7yJXY4z",
  "key4": "9fYKrXd1BJPf84HhoExkU8aGTbp6VYDkR7HVxDZMhNy3qkxutsMGt4sqMfUkc49a4bJowb5i22GLhjqniBso7VA",
  "key5": "5vUputPft1Xhgof98gq2EZ7QUFhKHjHpf8bvbKrBvstTg9WB7NJTt3hyNaCANhpQK9nXL9h3VLwyN5M8ZiaAghr8",
  "key6": "aEsLBQ5j4eSBLSMTbGqdZD9JGxVKbBJLmkJSbGhHaeLxDYmnVRKLhSgqb85qsmCKHhNysg8PPjNXJYUuMRUj8gZ",
  "key7": "UT9G2GFkEuzuTxjhuA8YHKe6aWb5HpMzLuTyJBS5E1uxnLNyiZmtzpL7QgX8kba2kDdLXZyKYGGW7uVHRswyZ3F",
  "key8": "3T7ziDHsVJTVFZ8vcPTbKSvwQsxo9ki5k9LSrN5gFu6cNJe1owi62agnCrjujF7g47zfnD1LgsrV3fknrn1xVz1a",
  "key9": "3V3H9zBSSDmtoQKD2CBwLRDDcuu86f5UDPsYRpcCNAzMRLmBdSKRGH78ZZHGrLUVBDPgQ6beMeHthV5G9N5Cthku",
  "key10": "5gBQzjxaYtuK8JRumoEWUYd3nUWv2ke1DKhKp7qnaNAqbbxJHR35FLCgQapBuFPGVSgdMoZv8arj84WDXhKypT6H",
  "key11": "5tTZYJfJtmGJFZX7ra15d9hrXL9PKP7jtvMUkLrqbohVSyqq1dWJwEszfVAih7WCXAzPfKo87uU56V8EsAUEWvZy",
  "key12": "3cd9JcL5NEaNDv6fCbktsd4xUd23QQfXJvTS9WJ6NcVaaqsGk2PPtthyFHzdP5fwvfqNxscgbsJjzFuEiSjaaRAt",
  "key13": "5BkQRDHUCA8MEu5VXtytCYt2D66NwYb8FQ5F3FcTq1CAMdd1WJ6adzHVw9w8mzcGPSbdVSAENJfuzunrjGcsnhrR",
  "key14": "pAbRjRt57feF4uAikYWUEon8cqMc1winuDPL2gPbVWXwtn5MtQjpSnSRgkvqN1yJ732ejzCT9ut5ydYVxDGNLup",
  "key15": "5PFCyo43oc5oCssMYZrTgWR8qA98PUz83X9NVDuVpBZgUihaKN7ma15zbDMJTuPo6pNKhYHnUf96G96cnN3RsJdG",
  "key16": "3L3eGQZhoyZZerKD4D9AFiRMi9mNTZAMaftzJdxPMagyCYvvHnHmYB1hsY1YvwZTndGeFFZTTq5a7az3JtaFF4ys",
  "key17": "4GfXVAjF2QDosxhZvBYE65sW4hpE3Ldu4AstF9kkuSCVWS9V8AzSo5bLnDWYnUZXpuWUJsXcdggWnaumfgHjAGye",
  "key18": "5yxSRkBEFw3s1vbQTbQ4tHtRY9vHDFGifDSxXwTro2e8FFTWamJdfSNajac1NBBM9Q4ccWqRvUbwDEvTNoQTCued",
  "key19": "2oKN5KYUYn1xzM2YQxxnfguju6mRetXD3ZUmjP3BFBM9YYTwaq1Mnb14XptrKQLUuZsFPGDqXJqq5vjWJhoLCpSE",
  "key20": "4rgvpeHSH2T8xK8NoPDZLimN6RCS93oUUGepvQZRGJj73QW8QizG4C61cWDbMxfGoTVBJEPpxfLdZkDnLKxTQqCr",
  "key21": "5HKN8VhU7ENSuKwMhVnkKWuiQhu2gCTSzeXVGSMcWa9LsxDkEiyK4UDbRzCd6Kj5B4VS9eg9Ra4zWJQ8wd6zeB4U",
  "key22": "129hB9yqcvjcm2Vm3sGunj8KKq5bEw71RB6p55wLQ5Jt45uHG1msoXLQ5WomdEar7KaD7wtcLtSsh7MoA6EYcJLY",
  "key23": "42y15brqsi1KHQWVMBWD5TkXNAFAKYSuJXGpt5C515mbjZJQTTtM8zZ6ee8SSTa5F5Aijy38c6VX9nRkhctFR5Pc",
  "key24": "tqarThc2rkgG3ogHyNuezs8CMwPaVEMrizzDRKNGa25zi7vFN8DSGp8vtLA2Y47j1LVB8ashGyTDfRzcQq9KgGg",
  "key25": "5UV36EFwUTsPgyfxpPGr3W26XEdLtTNNEtpiJfdR6BSbjQWCEZBLgP6fhm2e5ip2hkUuB5qpWe6ZnhkH3732SUXn",
  "key26": "2qWQ4qtTTD4ND8QJ2FntSSEMmQaTW2GTz1UkVeNPdQdwNDEqP52Wy79b9CuyeXk9V8Y1g8aNL9chafgHmuBC2tZ6",
  "key27": "4ksoNpdBv8HRNaZj6qUDQou2diMPSh3E11fQFkzPwtHmGhU13pdMVyy3TN7v69PitW2Q2mMwJxMHHm2Aw3mmtSRw"
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
