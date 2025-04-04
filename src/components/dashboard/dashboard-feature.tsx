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
    "3yUUHgk5i1T5pytdj1WgcsbB8Dcg3ozD77xuZ8W48uRjBw3gxAUccDdQzJd6K3mjMgcuKZyhDycvr55fmFLrXAxY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Q8mhJMythsn87KwyeY2Xo2EenGHgVHWRGUPCnhS7xtfiFVpF4c4u5623QH8p8214PXSGFf5wu6aXxUiYzyXxzmR",
  "key1": "5MmmixPLiX6ptx2Cb71nTrEUNgSUSukZAMZybJfLy6na3d4NX1u6dXR9aCmdVNkFiS4pgMX9t2m9TyxvyJH7anC9",
  "key2": "64vMFSR4Sp9HcZRN5L4Paq8tvFe6WzdJxLiwp4pKd2hkBAb74ruCfB3YWDJVyt1hXqiCyvfdEtxc8sHPMsygPz9L",
  "key3": "oQfezeEZjyHsi56SLLnmVcKay5jutxcQ88JgYeNShFwXE5w5irZgmEE2scec6cQXBhrmp2P9W3JgjKQWxg6FRhv",
  "key4": "2UYZXjG4hKiNcFpvUNqGAYAmiNZUUjUbij58KoyAe5i9ZKigZKeAUweYT91YvqTaxMNkBk4Eix2JVgtnDX12aQrR",
  "key5": "9g8HvqmK7CLwV5BH1NYMpJb5aZfp9ZZUPwY9EQiGWuMXApBdfhjyLjur5afTSMz4NhzagR3vB4Q7m3nBTRYpvPk",
  "key6": "29SJSVgAqRANpXVEA7jpLSZanz9Z2TuQq6721AyYxigYsU9bygaH6tYPnDo2cAaemW8Q92mPmg5tfWiuNui98sGr",
  "key7": "2x6pLNfrCxPbYrbRmQDjqAYxsrRntXGUqTDStPhMzg2HiNCMM4nPoNkVjRDn42Y7p5qqa9WPt9YXLogc9t6chvWN",
  "key8": "5hnMKQ4a9yjrdZSrX2UZZiQYBrNBpLKWWvhJNKnxVGXeYCv58N3ZvSXupRj3sDeDFaft1UXJTAQikUuZMxUvpAoR",
  "key9": "6CqcFfUmxu6S3juzwnhHcM5oNdD1vvH1gnozt98seuypVAt58EozwoFCiBKFHTXu3EToL3n93hp5H5wEAomke9X",
  "key10": "4e7Pxw5xhQfmVfuZWh6kpmTagDNjsVMWqTUThwZ3wuAQnRpUNZM4QVAAA7PWCxxJRC6ZyX9VGwD9Ye2xVgPyHfsJ",
  "key11": "5WfA2w5N28yRi86RFgHNhXoAnn5vFKkB9REm4gv1KZUFjFjunaoU8f1ZmMqyVNVYwfUfVa7mGLnVGdH99spc9ScL",
  "key12": "3bFQcF4BuGQVaKubudgGEy36uCxLSBYk6t7w6LVq1BZYjFhSk8EivTeEnA9rGtUJRm85UMf7A3yv3FQcDYXwuUVF",
  "key13": "4uTEtZyeAztrgf35qd8KrkuNgPUkMyroT4yf9YL99DkkQ2xuT6fUCitDM81p2SVr1dyY9rUhQ1his66xJGdWWXnx",
  "key14": "2suTxbTwBrSUb3s5aGZEmqnC2icVqg4c1kjdCcZkaAsyQgUJ4KiPTxUvZsMYe2H4an9SwpDJGXwuoUwCNZpAL5tc",
  "key15": "23P8C8emwWjoDBbcBkVF5ezVf9oc48rpyw7axMgHZHY75Lrvk1BpYS78vzJ2S5Qn248Q7H6NyPRsvesvXEex5vzk",
  "key16": "3jcxbvogr8Lt1HMGMmjKy5EzN9RgzWqcPMctMUjkf6cJr9ZEh2XG99bJB7UEr3nZZpekYUCWLoYn7yhFHG8uU2NM",
  "key17": "5DLSfnwQB3KPNQGcCbE4Z7b4PctKoDQwcBuFB1o9FC1mRAbdXDY4Vqr5hxMoPh3kRH81NctiHTYM9gxQprapuaMT",
  "key18": "2Uo1p4vj6k1bQWhtaUwWsSe17pwTkiKFnYjyxEhertEGB5wLDteAggs85uztesBE4qTxFQ3RQLomq8v8ZMNPqZAq",
  "key19": "4YPYyUYuY3ff1jh8nHU5DgjD2BmSZTLghMXSuZjGADSyNrH96r2VmHqUHwpc8B5fwcmwkk62SR81nuLAqkaZemFS",
  "key20": "3bLLFxA21ssgq25Gnpj5GjaAdN7Qy6fqfSWD99BJVWqfgNaFmA8etELCGxGQzGXMrGeTufNbrMFuTR9whWgx5pbT",
  "key21": "Zm1hJwhjrooSKxLeKWTBBccTnzmvyyc9kdFG1MfCRGnpc5o598XZSM5zTExeQxtzgHCSSUYCJLermJjxLYpN7Pw",
  "key22": "3oEUFwcgUAEvB7BfBqM5djQwddJpdM64cjtYwHiBLjf7WpwejmQZjQq9gqK1Vn7ki8y9UCyCa8itzx3tPCeyYs4R",
  "key23": "4zYmzjzmuMwPgG7F6jATJRtrHCq4LBexZ2hT2rVN9hBaS9D8y9xmctdNhmMtT1sAaE1jKkz1rqrtTnPdXKW1WSdW",
  "key24": "3j7NRsayTU3mjqUy5zqfTVicCJPJdrgzQpYryz1r9pucJfEARA31CfaGVzhzn4hQhtft2BEuXuejfgYasTappN4Y",
  "key25": "538Tpr4vEb3EvmeRwRSeMcUNyxmDfkR4q6kgPDnxN1YZTMHZGtTkZJD5V19411yYfsorLvqKZ6iP4e65D7HpVjFU"
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
