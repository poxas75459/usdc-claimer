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
    "2FFYvRVvviGSrzPNZkmfWTw9a3j1uSVHiFH5PtxK594Jh5ZzHNe875oTUemHMxhCMtmyEjeC8Cw1wgCHBeEWJCoJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JmX3v7kqKk6ECPxvhhbzGgBDJwS7uGQxGtax6pfRxCYoyHj8Z9CihbPHxiJrusfRyezMSAUnd9uGJnZ3NbFvttX",
  "key1": "En8xMwnDZgmZtCfiMysCJWX57pcNKiCqtQhvFQrU1eo2atzZWCcb1QtL1RCNgsR5JiSy7rtoBsLhnciSd45wA2i",
  "key2": "3wRnoF7wBrM1Gh7XwJRxN9U8hoWNHeAwRs9ba58BrZuxXtiQJHioWCoTbowX2muRGPduagq3LcCMMT58MTaWdcuz",
  "key3": "3GHS8ywA17ar7Pmx6MnRrDVXrGH9crEnLYXPCNwn3Q9KVF25jqbTWTD7ohHKa6Mi3b35Cyrc8rST2PV5THNneDCd",
  "key4": "3xomhmNnyGiUQgiPw5r4mW2xqmgVVwmCJGMXwEbk5k7pJqsdMVF5HtDW8YriDVBexBFgNsfL2mQLAx9BVXmjZadR",
  "key5": "5ZX6emoif7TXMwSsZLiz8xYzMct2QQeuzPKtYMfC8iozm9mpy6iwmJb51Z4tTg2XD6FAdppMCBJ4mL48r2ZZapMb",
  "key6": "2VTtWeCRPqjbQMb9iHT7cLcfNNqBSepd6e32mSfeNPsJQGQWZLHLbXqVnvL1R8gQFsCtBTLBKRSRpzibx5txjnKm",
  "key7": "3QGjx31fLZ8UTeufWDmhhdJrvAkKSdtXK4YB8cm6Yq58kz93fgAHjPBiKVi6Nihk7sZcG2CUcofAjnLxq6Bo4dbh",
  "key8": "4MCe5yjVFkxe7v4SpwZgmfNAmmowJz6TQGuMLxRqo3LPmtocMXH7BJJaDd6c89hMpB5DBDEVrVpKK9r3HHvqkGZ6",
  "key9": "3DFhpQQeZY8zpTQuGh8UhyJ9cpmuCCwCkN9dqGeGSqmvXT5j1Su5X6st1xiYqjoybWgEky76fHMTiVax55Mdmrcy",
  "key10": "5nMP6kjN7FZT5yhVn61Pd56NqVVcJnzChorN3gEAayrfNbhW5QKqGuv3ofWK3XZyMxJ5rgqjCtG8b1NxJakbVHLr",
  "key11": "219heRJv2LfFWFUvpC9b6WwnS9sVRzxsHVerVyv8rxEoS7FuTbc5srfj1CwpNGRX1dTM3zHLHhVKCuM7CwDv4SLo",
  "key12": "5KvYo1PZ5WUStAoqeBz8ezVPPMb2cTT7uqvoK7zp5wXA3sQEtc43Mj84yzuuVh2HaQFw5VrWsyNRDyZ84QKsQeVk",
  "key13": "41AwCbzBLPukgbvDeFTuue66rYyyqy5yi47539hrzwY5aJHrLwFTi4fxiE5c4ELxsPQPPZBLVRnsUWNTXUm3xs2y",
  "key14": "44Ev7ReNPVoq7TSths4FQsDz46abNSrffop4sm3SdrvEJiEYMDnh7j5saiE4rgigguRF5qYgMoQVxB7mR83m88eu",
  "key15": "RGYMJrtvvUWJ4XKruDACZEYXeNp4q3fNCYGd3Wyp3ceptkXTRfozMWRrBkrwSvAXHCimdDf6YzH5fo24A4M2eAX",
  "key16": "3LhHek2xdhZQiFQMBh75svuC8gbMMYLf7wPFgZdTryENgPWy1WZujT4V2xHq2UVxWkBxv5EUi4Dc4Hjv3HnjiVBA",
  "key17": "3JHGpwCuFkPX5tKzRY7mLQzr1evuUtQXqqnugDW4vb8HvaEBXB3SwFtqpsERDiLjDaLYp4LpPLVZPYgBC86rwEar",
  "key18": "59GKrcQ81xQEkWKyjT9XbwsFRBewE3qUNHi5X7WXYyA9DSAfYZgCzXGkrQG411Atu5oj7pQxY6SsMN4q2Uk9wT8x",
  "key19": "2fk44XEQ1Y265ztgGBNXG6Goc4YDW8h9dtRp3NkBzJ6CZ3NzYkGnnC5PUigkigQoduBDJmVWrxtmLfGin1BnpcXn",
  "key20": "2yGpqxyKfLk5CvS1moXRT2krE2emPxN9gfXxK7jbCWM4nDqujkNaQPVPgDfRoEdS2RXCUv4QJSrFWUZCPGAdSG2J",
  "key21": "5Jku6QryQZ2opFDsLGc2KP6W8rVxDG9Zuex1w4kDdj8TRSMjc5PknzsY1ZYyFxxVC5UXBMxuW9Cc7MxUXzN9jbJE",
  "key22": "3A5xQn3wNwgGzQB1P3d4vsU6fL1XBt7Tw8QB9wpsmnVm4H2mWzKR1ZWMZGHBFnMSa9dAQhoWCpWHgjMFbNjGzGmi",
  "key23": "2zH7rhPAuSzARY7jxRyTQNYCqmBAcgEPPV7aojq1GRiEQuwm6c1oqhZ5cvKmJc7BFk2FTE9fo1K3LSQXrdvMskNQ",
  "key24": "5bULpFdGq2aR1ZhL8dysHxncRVJ9Ysx7uRKCeGTw93pWek4YdXV5xeuS5Cq2QGf18hRz7gjt47bUchZYbJZ8wy8z",
  "key25": "3RKy2yRoLrydTprjxxZhkA2aFfPtMgQiZK3ZxHTwWrhdmDUVRr111Za5Zw1WChHnvCmJeq2EQHFXP2DgVFEJggHc",
  "key26": "wGrajHk7hTvRB1VZ9r1GF6ok8i3wvYgSf6FPMjEkYrWcuUT4iQVsat7mZp1Wzfprp94sU86UD3SRxBV8jmPnt2w",
  "key27": "2ArmoJsXYXqA1P42SyjcZMm3MjJ2EeUtLN3449K665hpYsYrB5P3WtfXBrAdzLrThdiFJju78L2yS2C6aNyVqjBK",
  "key28": "59hTeEkDpkKbxVvGcvmBHepuwwYDhDxpWHR6JNtshTf4PvVYv3CTBUgpsMdZrJ2Eqh3TousjcwjU8KCKQ3jqYbj2",
  "key29": "4aQ9tHssdG81cPp7vycuozHQ9PPWd4a1V9GMejkTjTrc25jrZ5NfZ2XzVFp3NNarat19D7K9CERfofFHYbt9MS5G",
  "key30": "4THLnDcqKHLNvXLu9xrqEmhV6scSgtsrCPT8N9NQ5B9nLZNpsDFbdhia68pKdbKeNuFCnVvdUo5u3QskaAmgRhFr",
  "key31": "5g1v2EpNxvdiLEF6PrZPVtzkPzbBA54XjrdFXAt5rJjTt3geRvTo7km3zQ6PgZDQHozhfZhqnmm7BQWTqLw5Nic7",
  "key32": "5ycH2LFpQEjhsxqo6UKcAXXAJvKJKEjDrnUui2AqG137rvojNgSdf6wuYpqw5JSQuj9KnLPHJ6LDnzeuF8cGvYfM",
  "key33": "4JMoQToWHTHqvZaRj4eaXvckU6ks5UqRLoY8JksCcCbd8N7Zho5JzeERJh12eZpXsiZKNa7GWatpwKuo1oMxfiZU"
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
