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
    "2u1v6c4rHD2ctKfNPjjQLYtdR6kGKdPM43d8FTm1CSgyNW7rd6CgqEhDr2jg5vsKTUDVBbTHtNgJ7ByxpvbnVWfK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "vehvqgsD2snUxVvLquQQ64Wob4HGy7RvG2BBzzSZsgoUtx232Vyw4zuBrXxZrDmU3MrfRPB7cRq9NJSDPdd6hXi",
  "key1": "2D1f3SSeSwS1zX9E6uZzgQG1N5kxJ2pFiPion7UQAyzMJT9yDLWTRMjMVVvsB8xGweTEhauVAKK6uu8mNWwpxaku",
  "key2": "4gQdLC4tBmBiwrAetjiAX9KLKzqNC3c5ggvsazQs3QEz1Mo9w8z13mAFQKsxqr65HcjbARXTj3HRnAp9Km3DN4yU",
  "key3": "3PMwZPsqykvJUxbhSFchqjF6PedSjCZmv9fcf8C1kLC279HXYwqUBmyRByfDHeEzoAT8q2RaojrXjRx1Q24Po4HN",
  "key4": "5pLuapg3aMzvkzde2ngV6ALQb5dMWKJLdDhHLXprpJuTScJpihUYNxxcHBtbUohX9RvodNgq7vnPz4taEWKixGCr",
  "key5": "3MxMwAbz6S5D8kEoUFNfzFAaVj7Pobb2CEZ1GGQ8j97RFNpPGd11eyuoASYeCKj7jrSM3VCbqbN8HAp8ygXDkL97",
  "key6": "63wfQ43hm3kKLD1NhYBqUm8gRqNJY1az2c5fn64b4aZy9ux8taLY2gQXti4dELdH7RZsh4Nu6qBVCTgf5pvaoPUq",
  "key7": "2mzR8zfgMTAHowQKBxBfCVNjdDUF86wNAsY5AWtVKhRDL7GUHRz2hpYAVNuxJXv6iC74NJ6XyynpByCyg2V2iJA9",
  "key8": "2BA95EYFes4nJ4hcmMycFdFF4TvS7jwY4WX1gsYS2XNX8A61fVMGmrYtZQ3w4iL55FDxBP2bG9zcY5r68zu2GU2m",
  "key9": "2kfcurVMKCn65xKTsF5eQAP3bGhPV1rxJsUaqHZPY7kFCC7mnBjEnGEUHaboQwgTnrLLLjQ9XdKtYK8V8w9kVKr7",
  "key10": "4rc5FzoU6ZXG2soYMEJCKzZcc3M2KDEKRiGNVmmzZrQi9btEbE3KF6QDwKzDPAzNpLVc4yvUDS4kxa2Xxqx8vh3R",
  "key11": "ckFcpz7oaGb4w7B6udiRAgzU1w93yUD2u5SPH2yDU6rEWcPBPGscxMW6Uwu1x6xDwGoMHzy3yWT2SUqKF4twxEC",
  "key12": "2StchB7cMcv6REytrqo2GoUXx9wpVoL9JN7VUPtxkBh9W62A17VX156vKxnvo3nfcMSqYKjZz8cvuL5FeunNXGD",
  "key13": "3uFed47f2BSfajc9qRDq2h5G6xWcMSSYJi96Pz5gJen5kWapQqSXux5Q5T1jt1YnwhQodYEu86wT6F53GrXrChuA",
  "key14": "T6Sv7rGP77gbPbGDhEMGVSu4NznNyrBQArmmrq6ZfnkjMsymTzFhHuaW8rLgVhP7hvLTB5ridtwAv3Ecf58pC6h",
  "key15": "3X751QoeHfg1NPy8Bsjpw9gHNPacJsCaEBaVWckT41QvU14V8EXDpB8d3rYN6fWzbRwvNgCeYZtQqZh2zhA2Grm1",
  "key16": "2oKZvEheSSs1LgRJTnhfirgLfiH9xAmrxBkDHeVv5RKeq8qywpKWn3RBt75nhFWYBUmg8Kho8DvYRgCBFdCbK3yG",
  "key17": "2taYEPNabcexnp1ph8XTLF9GDjgGxBHwH7t5WEUA8XhrdJ4E1WYPf1LjjkouJ3hP24JQ9PQEjxvayJnNnEDJbp2t",
  "key18": "5B5uTF6eLrSbLFfSu645upQkFnAcCHjNf8Zd53z3BFfkUmSdwsZVs8TBhhs2Gtz1RM3mm8oRRG1xWrPvorKQjHCg",
  "key19": "GbqUjbkZ7HmoQwzRZNPuSc2RqhRe4QaYV7spNyuB97pKjPzWYCoY7vq73RJLvciH2jRdoaabifqQjRw6T8oA3ny",
  "key20": "3zxn4gDwWj8No5EVL6s2CTHvHNoniE7ifrajoSkfxks6K6iv3URUBG9TceBYK5gzHfgbArw2NTLTk24ihytKkcFo",
  "key21": "3cA9DPsiCterY46sAXuvW3kv5L83DA3Eq5CL3m8XoLtjw4H2fp3dBz8w6LW94axejybwfWAkT4xwRyrJACedLaYv",
  "key22": "4GWMRgBfLgknTUQinhDhy29QnkAn1Cke6mwf4N8nFt4GQ7xVZz3mjmNuyDAXfy1Mg8bA3BobHubP6u2uTMAceHYK",
  "key23": "4FnRwtJaDxbwGXNznt3XLCu6tZ8nceEUCh8vTkah8AJ3jMW2WKxmZmQQH8gcW8osJSegN9VPdogvyfMurmJrMS9G",
  "key24": "49YdUmE8f8E7RLAFEUKDXqmwQogmEjR9jMrmn4gGpbJoFt9JbExMJuGKeimtwaSqjaEMdQ2KSEEXcyy39VyRyfGw",
  "key25": "2LU21qb299nX2brHXS6qR3wkqGze14GqK2aw7HHHqgWsHaui1AccMFhZxmvKpRtJ2Q2pkJGHdp3bW1WfBjwMWJLq",
  "key26": "2qWBkjyd7jTth5sAB6S4VzPWsNcKvWw2AcmCWGvosWcVQzUdoAJNWXmYvxmvzEMSDEPzoJ5SFf9M9oXQDS4mvdiT",
  "key27": "3WXcjNLjkQWj2BVLB8cK7m1qNURmtcJ31bscg4p9i8J5zTm85Y7QQxH2oxcBZaa1i19ywEVzCbnagyNF6YpoBSMa",
  "key28": "3jDtZwBvZaAVuPPrLbVyAU9PQ5zb6LDZMXTGUpteP9njqHwHQSS5BVYCHoyES8MmcP9Dqe8NApsZbsHhCbfuQRjL",
  "key29": "4APpXDxnbyfSLDJ5mj5YM8xGdv5fx4PQbz4C8WuC4KP7vQApUzWr4CAvTSa6k2eotRU9zkXajLdN3gKZSxwswofs",
  "key30": "3YaTXUiMtQWbawkoHQozGyVhaRrNznHgzLJAZrM7dDJd9TnzwPKsR5EfxUPbjQndKLmzZPhggCjpqBG699JiPTNs",
  "key31": "3GzAnTqyWNjmSuXF2YBYb25Houyy2G4syxXzje1UoGL2rrbJuX1WrH5eh8ZAUffRhN2hybLtQbm6Bcrz81nDocHg",
  "key32": "2H6mHCvrZRJWgNrHkLPofcK8hrLeiB4a61nLHhCecAyrUj5P7TXEYjN9byMUZRqbafND3WsxnTnJvMdBxS6N6Gwk",
  "key33": "3zv99fJG8kaHnzDGGZb6rUJXuEUgLjye7BPprWf2kjhmtuGabGgcdXFRj75wdhUUbnCYbknz4RzE8qhT1p4xUasm",
  "key34": "34hNis9XV9r47gmZt4fzf35pfwmCBJFNjFjg6kwNpMpeKrZKAD9j9K1H4JFv8LEAnprw3AgQXP6xPAPUwRaM7oEa",
  "key35": "39cg3R8iG4deemNKnn4U7UPUwREV77ojtTkV8iW67juC5prjoKfmQVo2eRUWKhhDjzJtcAKLRUpGHeE9zuyDP4Mz",
  "key36": "36UCeK8MojgWoMn1F92CiTwprxc1JipyyQzXnN9DuwceBGrvS2iRZpqFbq3rAsQihAH1dtULySzpZvMZAU5YEfyo",
  "key37": "5J5jWVrMNwGWUTjjx3oUWpzGJpzygGjDZwR69razi6L6khrqr3aHYdtG1hDW1TnjTregWGTQKawMGCU3wKCa1UMr",
  "key38": "33ZQ67fLiBh8pPkCdJ4G5WAxXuxJep8oPGbyStC7qw6oDstbEhaRCay425t31ZKGALHEJ1Yiq2G7ugun9nT48zV",
  "key39": "4Sj2muGXmi18TKu6BW9a6y1wVZHnAJgWiiNDoqLJUFhKcpQ4P1ifDbFRpciymL7YMvw1mmnrNtZkRRHTTNnK9ddS",
  "key40": "4eTu43vikaq2xBbvSr9LjAwpSKDUSMg37HqPLUs6cxcKucBLejNDhDkNRrJrySuNTeoLvNGkHKDcWKjASX4ZfRVw",
  "key41": "2MKGPTD9ciNH3DFwbrTbT1i6zZ3FCTafj64G3QRC7nYVen9dysnMaCa5m9ShgZiALiZryCGKj6nuz7g9dqdpGqW9",
  "key42": "5VeVaDP5QkuXXc13EHzRWykWEehmgcey9EG6g6vjCnAHoFsy91itoQx4DpgWfUqbArgwrJJumRjHiWTwwubrtoeS",
  "key43": "4cQ5cLbYE7Gvb9r6AQEepETDjP6fi6NRzNw4k25hUcnJq2bWeLuohebcybuYk6nvRWDncT5XHrdN9cTeUo3ycnB4",
  "key44": "5F2QovTeKFe9pC3UUoSc7nBhQpAUUMhDZBbfmnjb47Y9YPv9XyV2kHGRpbmxAneiFqzzrKAHXqTpWcmZdNzL7bks",
  "key45": "5PrE19HXa7AhHunMVSdAVpFTtY2bdNNS8SDhmmRUuUcKxyRuuAH2UJ91dXUDLvmTBchre62GNRDvjYXAMVMH8yWs",
  "key46": "5SqfSCa9PhsAnQZgabCPCDpNWzqyPa2BZGLhGgAgqLV2Y7WkraiPN5zF3AFpoN2uKVND5ks2uKG7JbHH5y8PhdvU",
  "key47": "2V3nA4JNnqy4jjALLDzVP4t8m51cuzfqyEULJeKaat2Vg7RBVkXSZAVAfcDCfw5EUGcRtn2ct3ChmkPMXY29mRfx"
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
