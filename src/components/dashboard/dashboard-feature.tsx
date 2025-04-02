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
    "ydykX5XXbZdpQ73iQD7JtqS2KEgvTCEEgBYECmbWsqUvESfQ7B41YNHupLvnN2o4XJEtaWkDMoxMUyFp8RV3qeg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4V7mpKZ5JjDGAzoyUBMJ6RRK6Hu77s1LTXzSMh5nhFL1HJM5r5UkUiyRQ275KrJ4XytaQYG5EsxnymyPuLceWD9r",
  "key1": "2e414yZ2VJJGRuzX8aSwtSrh3yf3VwaJJzryz2gLja5oUmpEA3RUMrrx46ukMDGxoBpgvgng6do7M6U9d199gmk6",
  "key2": "25EH2ChzBpZXRKmQj1KqRmUTY53D6Sfom42oH35aKHwFTAgY5mdmx43wRMZjuCTsC96h9EAZteyQqAAinsbjQJ9L",
  "key3": "32XAMb2rYhjdqzqSEz8VGyx3HgMJeSKnnfF5VHVXV8d11m9DZXV4CwKQ5oCQDj3KaYxH8BUzuCbvm1c4AmcwMywo",
  "key4": "4CNqGg1VMBPn2Homy6yByk5xAGZPoBTgzt9U3DurcxyP4xYmdxvk79GLrBThEpLQt9D2hwVGtvtsWdg8UrTtF8h1",
  "key5": "41UtCnF1ixJTsoQY6HVcKKTuo9xSCVNcmTGes5SW2txbtkWfMkJeNTz8codc32LAmKakKzFqe9tbRjRY1goGhAgW",
  "key6": "iTVUUFFbh8RACPmUeLQfzMw8qm2zMgpcCyLh9994jdcJvPMYdBY1ZKy5zBrknskG1MCa115ituy22LQhJWuB3oe",
  "key7": "5a6EkKH112emAcyUgRmbwvveeXzy7KW1Hxg7WxH5Zz3zwNfcS47qCZMoyjiLHJZZA8JmmkiVvYGTkVHsnTzkrGPj",
  "key8": "2kHHKQs85EkmLNbFvF9192KXaBS3vQtrcyBi2Xn1JM5zBpyFUhrY8N2vQZG4mt59GnJJx9aTswkrT36soh8EpxCF",
  "key9": "5qiZt25dGKLECLvaUG44SugZ5T7aH4TpzfRpYZ5TbjAD9gJNvDza5oQeKtSxQbqdg9d19nJTNnagahBRHkSLFdck",
  "key10": "5cj3o5FZxrTJKvxtHf92LvVH2CkK4igLzzZbZtVi9sN5HpPSFmeZoWW2Yebuzh8FvwZnNPvdCRZsMmJCDoKPZB1V",
  "key11": "2L9ZNCaUGJiwCqEzw1Ln6Qh4VN8rk1nW1a8qgtx8Jy2H81ixUzXZNYror2E2Lop6Jm7A7Q5LumRoAc8BHhtgMSFQ",
  "key12": "2NEpwUVzwxAtiNEomTjuyYVrzkST6xVGQX9RbRxn3VbjEn66ktYH2i6tbwaWCteCnGcGQ3cgFP925REqBf1MCh3H",
  "key13": "MHK4qbLriFWid4iLKPEQjELAyNphpYjkBCT6ZUbTdzKR9EwavbzaAMArG5N2sb5mDHEDhVJG3PEYEKS3iTDyDou",
  "key14": "7Z8KiaAzGvytH3CepWXW5gsvn39wCAbDqcZBY1QKVRXW6uLEsdFC6DYFKZJKFvgYvRQ5VM8Q2vjs6He3Rp1Q2sj",
  "key15": "8QmiiYLmjvZStR1AYFvFPgWjRQ8tQJfzx6ZBXDb5CD3QDnsTHVK7MDajVPf15gmKFvF9PfLkGVrQyQMoRkwafrp",
  "key16": "67fNwb6HUY11ZJdYBw3j8NHZt2iYiF2t6cy8DrVLyGovHD3dNRgsidtWTiLCUC4okyQs2CubLusjAVr5vPc4GiDd",
  "key17": "39Wy1usMTY4KqxGL8eojM8UtrGUKCPfRyL5dRGc2NEA4vgxUCsmFt25mwPtjZTHevKXJBk3VKVHr98DvJs564dUs",
  "key18": "4zem2HQqDdpcZXiHTbcXySLsntrvM17vXKNz9C8vrMoBYVe2MawpifPjX5CkzuzBednNeArhS9REVENVpDgs9FNa",
  "key19": "24488tZHM1uxx74U5jL1vxLfu5wMJbDSE9XeRAu3csJzsEfGRdDLxmWQbawTHjJZmAWV3FHy5utc5Cg9BFRdUgvK",
  "key20": "3AkMzXEwEdusnjEQHV8YF1pTY7F3eKeCcKJnpiBdBtSHJ7G8S4paxtLj4jBnLV1Cvf78pnxvgPuDABf7zW1Gzfgs",
  "key21": "4XX5jTYVYLs46GGAVobLvJyaGwaAiUF1afzSwMEZcccUu28JtjfRVh5SHc4wVXFv1cjHhRb69VDmsc8jSd3FChzj",
  "key22": "44RsAWKBMiQBn9oW4mH8WttpXPBrtQDKxe4yNB7xqF7mwfjKARWS7tp8ZMz61uUSoW5HViGhr843tqCYp8XyWc6z",
  "key23": "KtWa3b4wtP87nbdg15hLBxvauN5UqsxSTcT2T9Ec1z4B1oFuD9wuzcKj8rXkSgx3QSv9SHRTXhzSEmEnyW4xid2",
  "key24": "2RNHCfVvW6FEZnNWZwCVpU9qXX2BNH2N8MCZCaBtY8WptRv5WgG79LChXrKDrpM5233Kua8TKFJmk4Q3JwQ3VxbG",
  "key25": "2ZZgYMnphbSChDJ3Qb4GmaZCVPx9nQkKJ6SHVtS9sptfeL9wejt3gyCEUKMpdZmMMPWNq5hMXTBvVaLUvZvz48XQ",
  "key26": "4sCSnyWBfw1tgvBybXbQuXF6zbN2Z5smUcg4CURyzKRTdw8Hm5EUBFHBcJbEAUfATKswzm3pxq2QHMyDLbr34cbg",
  "key27": "3iPwk9WkBD8pcMsVq2WdATgHjGFwqSPVdWtCHcTqN5H3VRkmjsRy9mgX4zMeX2njpRFEnMna6bYZ9xKDaFS3boga",
  "key28": "2qeDHCdwV68vK3G5RDkvt6wcHc5kFCxRWBTqjAMGugjD3zNSwNoacjbjMfo4aqStDg9ZbreSSxd3LdBaau9SWs6o",
  "key29": "59EjdLxrbZtMfNKFf5xitoMiMVDqN2xncZbyUfZc9renHPjCG4VdcyVUa9oActyRdHU1CPu6HfDwrzjq4HLdV33P",
  "key30": "2yhtwDCwWYiRWApQNGYkndugNvzPGZjdeJgnxGTPv2RvpNJDJkiDH4QgY5SCxuJeEHtvn8LjXsPRYgF28ccGr6Hx",
  "key31": "2KQ1ekx529adGqWaGybQGUcVJLBk5Xd9SRUN7ATWVmCQF1FdMDL5ixHR8RQfsDAAaGNHnGXmbAknPYoz8CDUhP3",
  "key32": "3s6jJav7e6XGzyqmiCA2q9JJqPCDm19AitaNaNgJMYyG3sUAcqkrrWQATPpCvwQfsBNySiUqgacLGAU57xgx1ZZq",
  "key33": "41c3Mng7H1W5v2fJw61oo9BdWFdzZt8GJHFpJhpMPoXoUhtwU3u9yd15WKR4mw54pTWHcc5obQZnB84zMw77Z9Rb",
  "key34": "zmtcz6PR8V7H1t7Yrvxx2Txw9wt6NiiDUNvSqkRntNYcNZfzcAb5ySyccwHJ9r8QvhibPEQ2RRt7u6xv3dFB1EL",
  "key35": "Lngty4FQcyTBx68doJhDKF9dRZpb9vGzXX6Q7vcnb4JmyqKe1KMxKVphjNdN83gF7Hu1V9hSt97Uw81oAAktZov",
  "key36": "zE7gHLjMsgnfBpdBR45VVtd1iZXmDKT7eJHXbLY3yMBEFsTJUGFxDk2LoToyoJQh5JoXKkFgBff5SunqBz8jp51",
  "key37": "GxNAjNU5ZkgsfjimHnERhybrtTDo94LKEDmzuRpLBqSFUBvKuVK2hh94Lq4wn6heoEBLuXdRkgxq83kZxs1Ur1d",
  "key38": "36mELnNfdnenakuvjTBnGby9WHkgxsd25Vgmcy6H4RevKxaEuXv4h5SeWLKRr7JxPtpi1e4bZJwbYuonPZLMztby",
  "key39": "3rygDzLVzwoHu1eaj33qRYrFg8iDz9LtmhKJiNH4LrNEBEpFeBdBQbh5HFqxrLqaL4rmVJLyQ3q8csdk78x7oRtB",
  "key40": "4jNBxxkw4hCPXm51vbXfyMdR2gR5mhDQRf963SBpM3mVdTc966Y1ZRLLVJTJCgqmuvMMdwaKYvV187GmNTxKyAQF",
  "key41": "26uy16qZUsDDVP39kkvE6zGR7Cwu3H1wqqbQBGcaLAQyqFQ5EDjecwpNoQ5YYG7CqHhsyLzGVbySrGbE1QsRtakW",
  "key42": "3hXtrW1pUL4zEHctRVTSQv9dGns5s2j3DPFTK9h6CGkm1tLLyYemkW7BJUb3aSvNM4NrwDgGKpv1ouxcvuXzwpo9",
  "key43": "5Gea16oaZAyh7PmQfyCCUWQbnYLkQZ1LkwwtAdirZa5CWfY3JcqnHXGz31djceVMRdFdmdTYjaFi8CNVCTMgq1WJ",
  "key44": "2tRzxVDeBXNFaX5iVFYNxcZYsjKqpnKp6shY7yi8i93QDtVLfUhuvZWAQ49Px5Xp4bdtYm7JyecQdUktEPPgog5W"
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
