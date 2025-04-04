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
    "593fsMeaazAi3su15m6yhsbSytiyvrJ96EuF37vzAaP8AzXGrB4xsKgfgB4Ak8oVQTRSRADou8WPGieEHMDNU5Ja"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3NqjCWRMrijYcaGqawZJNbJbPmqLXmUJMED5iboyvp32N92e6dTMmd5cjpyh8keA28zaxphsCHbQFUuXYnxndcjW",
  "key1": "4JVNSb2nNWwVfdTuRdaesdQsmydMY9vKbGx9eEeP5n8bwXjJkeDtMXRT3HSRniY22oFKnE3byiguyRQQNkctJK1D",
  "key2": "3UvjjqPb8Ch4HWUNk5a2Pd6tQoseRwXWw33BBxufJ8LgReUGtMuS2h4y4XPq73KQgC7rCFqBXwJYprwXXymwqUr9",
  "key3": "3f8HQpq7jj2vKpDvNyib8edciFAypAFpv11sLJNzkb82ryApzx2ptSszyUYfy2QW4UR8SHVtbAqLowQieNHnkCsr",
  "key4": "5oGVZFMobsviBt5LhwkHUz43UQepHTDQouuPxEjccyo2gkk6GxzmMGHz7VjmZghMivTexvvxAaWWGjxymfmu1YN",
  "key5": "BT8rJUM871SDH898DBVnj7DSC2t7ipYRWcoeeYRmUE4ckKAtYkgTTqDKZN3eEmXd3tyWDH9Eixw9oxeVrBaKemL",
  "key6": "3Hu24GYLq59BtskHywub1kd9d4wknkpNH8sajm47fPZYezMdqyLdpVUXxFjeHdHusrRLd34hi4RMGyhMQBE4KbNa",
  "key7": "ighpd9kqJyX5M3fHXdnGucVVEMTVBErTVn4AEoP6PC9PrU17USdg6Pmg9BJwqC5E3PmkpervGwA88YFfTHo4u6s",
  "key8": "3KRQii9MBtk6fJn9yihnSVBETJnmpvdZo7hJ7cjhLPedA14QwcqUpakcSYGz7tevvRnjtKgRPK9VJLKTTExQNiAb",
  "key9": "5pACQ75XVy5wkMb3YxVF2cNEFGKfiGXkhDgv18G8PfxpHLry9GdSrEtKnRBP2NqbXpve3v2Ut9F894uWJsiZwiUu",
  "key10": "2WdC2veSJTR9VykDyjnRk9Z8thcsgN5eyMa2Hw7fwvyZ49EdZzkf7HFkx4qjhCJNwzsBH2zK7XUPHMbzdoWVZ8b8",
  "key11": "5c3qMPizwo3Y2YCUXJDf4NvsXPi8TqnZAS9r1yUYFEWXPodJpU6gcJLtQF8wTAHGDdVBQWAZsqM1f5vfA5tqPQ9b",
  "key12": "62yFpqiUqvRVaWy4m1fJsU8wZozKFnRHwrrg8bMt1sUFw2JwueAUrjGnNJx3fNVAE7MwAKQsSC5oztz98PEo4hke",
  "key13": "4KkWH92wkh8WDFRjiHUDsA2VJqJmK4DE5MbS8Zn51uztvccA5BFdWANR8dvw1wCXxVkTReGKigesJ1X48th8otus",
  "key14": "2HKHAj7v7gJwcS5JFmjzM1KpKdxYjaBFTD2gZmpC1iJncQhZ3UQFcs6ktp7tFYz6Hs5aT4reKzm7K2RhnsmraXbG",
  "key15": "3U94it9JUEZx3xjR2nVPCaYqi8quwBf98pN8sgYcKQSgiZmQL2WD1PCSvxFbU89hWbA82Z2caQNQKLruXgMs474U",
  "key16": "JcTJj3EZFkNt2jULF9qzgFKMq1UJcdJkgD3oX3qKfvnoc2nN9NHnkViiotByaf2ahpRMB6awYx7hyHYDFqJkCAt",
  "key17": "3d3DTW8sXZcMCG94yLDUDYMjUDAKx7izXiK2c5LtbGqUnWRipsToxFGLCGsGzw1esaC4ZLz2e9wUA6pPG8npEfjD",
  "key18": "5KRxuELEYvop6to3TQh6eX5D5QmtVLivXL67Nvv87iWmUiMaoFYZB13Wee6DtX8V8BjFA3AtGoTnRkCGvgNmqH31",
  "key19": "4ig6SHbHPGTFJHQreeLsyFEu96sHGG9WvonP5NEyZzcxjuYDBqCr3fjWkACXBiAD1qgkGY7tdfNbY7u1DkCmMmQr",
  "key20": "2jyUb3swrCezTEh9YbWkuYhbWrrVLXbfzYkp4irJN9Ktgt4GPbDPQv8HxzUfonv9deTAoCsXNgk2Nq6FjTTLynW",
  "key21": "5VxFQzia1T5dtrMfogiXQhee18d93nFnS9byMTq2qRP9wjiPeeTTwaEG9DrwGoqxt8o4ZFgQDd863GNzCqAXaSeZ",
  "key22": "3PTY3cnct2gT3Huyuepsn3gPrEXxN8ovCbU3czkoJ8GtHEtKGCD7aksBRDyJgkJY8zqy6GbDQ2dp73mHvLNUJLhB",
  "key23": "3QkH8ucwsyGUUv8NSBYVvbDXvU1RhQpNRFhbgk5BfzsdAQMzxN5MEGvJpRbq79f5P1gAq66JjywvWoiJPEQDdM8i",
  "key24": "4oSGU5G6m7DfzmAgFc4pEtWZbFhZrbcoEja8iXqKA7sYSRkxBzozGF7UZoDZGkuiDNK5KMw3TxhDcjUb8A2kHgvP",
  "key25": "5w1kqJihKNZVtRykDY5vjKSZEeY2JGgmTsZMqu6gqC4hs9pmQb7T235n6kH9kjFpjoPv8GB7Kyr78bJhw1juF5kk",
  "key26": "3r56mtUtmqz6fP71NHxUdohYgQDVJdc5jqpFqgTsRJ8vUJg88v8gXrN2YCHhDHZFbVjYybASF7jYQYGfDQhHigEj",
  "key27": "43Z37cckyBWVrtYAM4SRWxMmjwMKVYHpqcL4AnrKJdr2D1mkAjdmGgAUYrnxArLjuSdCsiFzhUGRNxLwrWkiFpYC",
  "key28": "HEvnd5Ccw7KMvdGWLcyCKYW2ejnvEpBZB3hxsNAKBXP18e2FGftEFQHFfaT1Pm8bUQYPyUvhFFu5ek4nbt2c7kQ",
  "key29": "2soPiJjcKvhwHZz4aHostEqW1BWs9NdwyMzjgKdFk1BcXj5D6jX9ex2gCvAXtnpaxRACmEWQWhdmccn2BzLE8Abq",
  "key30": "3Xm98jLW4jvUEgLJWv2rU5AtEas1tuD67t4VQysjUfVexFbmpvPVkkXGstr4WrHuWeHhqqHiTVLVMGj9VNk1zZec",
  "key31": "3xpcQooX4K82nU9JXniA4tbc4QYaqtTiQ3FGEG1v6iRVp9ri5GtiZdTwZnZq8nhYYJrDv6kM3DbVNeyg2hgB6wNB",
  "key32": "5ihPyZzg2F7bK9HVb3VGMShCxnGZq9uAv7irKHQhH9qo1RX9tLF2W2hr8peRUCXxbJ1Yw9ZdmEnF7EodjAYzqw7a",
  "key33": "61koXeWczVm2qV9HNb7Q6Ei2C9u3EbgTBUho81BEvev6jg5GXHkvvgUwSEBwv8Zi8VGR8WqrwhTyYgUbSn8RosVH",
  "key34": "2Ydco9rLRv4TdFgaTZ45ydXXHHHJ8tooja4fhyvhhtBBt8bBEnadmV4LwJYJp3c3CATi6mUch5wx7sjrMTgMfKEQ",
  "key35": "5n3eYbdEzbmtMjyYzYng23wex3rZQpaxBYd9f7uT8LeXQz4YH7SPPMNmZwtgVVQeUYEJCYgwaHL5BzLem9WbGxmL",
  "key36": "296mzUmh1xt5Yx8RRrL5YaM9AxAd7tyqxfasxifesprbz4Xr1JdEqfLLseLMmp6UtnDPziGv39QFfBxRi1jNnKWV",
  "key37": "4kw2zFyiHY6xmkAeL9HmepQosYLQKHCrpz2yYjraDFCWjP6q6q6JD3EtYe1vonws7LWKAcKEKX6qxsH6WxQSwZTx",
  "key38": "3quR8yrbknbMQ8B6NCzJNWYYVbFDpSUq9oqh7X6pJTykPxF16C4CHLYEySTBq99p6mXTvHBsHVKg5gegNd51trSV",
  "key39": "tue7Q2cEHWHKZ97iGafJAwad4gJga3BkhgNzbmQf81Xqh8of1JKugnZqonneqMkpD3EAKqiiGpEt8j71mrCRmeg",
  "key40": "NQ7x5MZR3ibWMb4eSeCFkoLzx4RQubRFogYRe65wpfTroX9cVGrgxKWTd9q2VtqzYsEW2VWt2C3oKtcJijqwhU5",
  "key41": "3t57EjrapCkfqDNP4Ea8jvrXQUPGYy9hmjsDJvCm9MZpsVGqTmRwy9U7mJBHo4PqG1jLbZGsjB5kmT7RT221MHSp",
  "key42": "4KPr8i5Cn49Sg7irUwqT3mh4UViXhK8pQZpoUHXZhM7TMgbgT4boS9uu5MMuRAf9AC67QJAtydkB8ez4SvvYMzXM",
  "key43": "EQTcm2taCaFFDAtTwHW76bPSrELyFUBKNT8R5p8rdQ5KZacKBv4ty93vthkUWvsnbNL1ciGBvXNrSuLcWFWDi92",
  "key44": "2oitgXd6VU5DmChid6JqQzJf3Zpf1cf5rprnJG5sVosgCmGDQJ58h6dL4PwewG1oxHKZpUVV3eg6XbA3m6A7UPVu",
  "key45": "Xzt4xEL92kkr8fypBnFv7Ge98WiuNGHBWZC8JikK9LtFBTpLWL84pJqFH8z5JGSdMe3jNRLgALQpbryqowF2Hwp",
  "key46": "bfqFr7HKwc5iWvEeeNV5hZ9UCtBY9DXL4UG3tdhD3RsYqApEhWNGsQ1skaSpWfMWJo7XKHxmNmXGgKpzKGfHYnt",
  "key47": "n9J1aB6QjoombJehMVET8juvQ5UdWmHf8gJByeKkFYqgTm8CnS9SMS3LwUGhRrqxw5CJghnzroaVMvpK4NuZdT9",
  "key48": "5SAskjAkzL6fR8tUdJe52fiwnpPP3SEyDZQafFrMtHg5pcHBNmh2av92JwbThzQbQZ6fMxpabDkKzuTEhPpPhmuy",
  "key49": "2AfDdnBfEuQ87mxzAeaZdetreqoHH1W8axXpp8NwprWLC4f7QyKaAMT3GWivXg6iWSVavSmN2Xweuj5tEbMC1npk"
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
