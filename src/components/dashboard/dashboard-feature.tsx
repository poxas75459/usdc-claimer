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
    "5rWuXPZ5unXVukmoDQq4TRvt1nzZyymgBBppGyhGPkr1R4GA8EUzrec9CnBrjYB1c7a4QJGstu9vqrwjGsGYt7pH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "34PHYrTUgtMuyr9YGxamgRW1XXfiW4Y6jgMqfiTURpx7srPLfcVQB5YfESrcKiCf9jPoHkFyUWopx7qMAXgS4rFJ",
  "key1": "53E1Duq3sWVGDyJP8jC7Xaux5JtEwHtDcNHr7YKWLz4WmzwJUFrv1Yr77nWxwdqx4o3rzqrmTVdSnpes7i4mtnGM",
  "key2": "4uEHqHuL7Eu7WwmmU2i96S6UhHcWXw17pqc15h3azAxpSApy1VUqyhZzRinukZZtZbwkYLv8Nb812ryYf9Jyg6bm",
  "key3": "2x7MRCGjqj253Wbksd71qicVS9ExX4igUUDYhfRUvM6Lq5YJ8NbhteyMuVFBMs5cYtjwhAtP2yhm9LfQBqSyi5iW",
  "key4": "fcFn3WE3q6tiYjBLs55c7r7GiQPqoiRJBQWhPbNTrWb1JtKTyaom2bLguxzyBEYzvEJPcz2dHoxp4mwBdYZkCDN",
  "key5": "3ws5HDhbikDKohjeg3mGrP2cazAqGx8sFHe1Cqom7RowXhyKTRTN3zkJhHpFhar7fq2aV2oYoYjJvkwHudbE61kW",
  "key6": "i62pM1M2ZQHmmQQ4F7vPim8fdnHRnxq8dXvN2YPVMkBgk1DUtEGc79amWG8yTpjPsRpFy9CGbCdb9bMghk8vgmy",
  "key7": "2ZJom8Uh15DeZRxt89uTE2PoEKquFt4EUFDobjdf98dqUs9H2j7ZhEBRgXGznVt6ba1kqjQ49PanFBisA2em3bzm",
  "key8": "vVVer7DUfav11R2UmUdFUhFxAtCSZNQEvkTPAHQJWZ7gvbdtVDD6u4imjXdL681efDPvR1CRrzvWJm3hhsVGMB3",
  "key9": "56JGGZGhkvbjdk9xQJebgHoKu4scNce4Ruv4AeYtTodAzopgHS77b2e1gkScoE2KwR786ZqYYw5FWZzZFVwQWg7z",
  "key10": "uzZu3RSpAuBK7F8PNkULjcpNUTjEKTx1UwZJPzXC4aE48GQ7xzUaaUK7VctcjWvurzVx1gVGeNatnqRVybAXEGZ",
  "key11": "5AshvsXAugr5o3nDRCohnDhkteRmyWHH7XuDnrwZw3WLi1i96zgzyG1AfyNRAEtGMaNmfV8y1fAmaZTJ3siyZnU1",
  "key12": "3QtTRwC42UVvtGTpZKVmax1kP7Y67Yrm1kAst4raur8Btb8M69hUcx6ngrw6uaT9rTJbe1rMUHGVYvxXFN2bG4Bs",
  "key13": "2ZCtQd6yg9SJqWKutBU2EHmNvXBwKaTpBA3mDQDzHvYxXbTaE1PJyRgGW4epoRuYaGCWuBcmAATgrQ77RCsadkLS",
  "key14": "NA7mXRakHNJ9Rvvrd8TkFq5DyFzHdyCUafeDyXyzbjJEw646neeS3Rigm7q3YDV1tLFp28W1iFTScoC3HUbwnEV",
  "key15": "4HFct8gUbkWb9k5hVQH5UdSTZn6H9m7XevQEMu3pkoGrQHXJhyCUS1LfffkiYodYhFDiBDnnKTiEth6DmAntyHWM",
  "key16": "54hY2AoRHRfHjqLfRaYM9pgQgsezhYoDRfpUSorFStNYkt98nJWvMQ1i5wJ28XrdSTbBEq8sNZDQnDkyJNCCxr8N",
  "key17": "3JmonxPmYvQ3wA6kLBsnPxXVkGJskLhBnybAXDsKc4HtHMDvbmt7hm93wvyhFw3RaXh1aPCJMsMqaXpAapA3ahsR",
  "key18": "Fs5wrTPM9XoCWZLidVyUvKGV2YESdbb5dmXZ2JuYRX4JMVfpioX3k8aiwBGddrMk4o5CUKsZvv6vbgyZUsaU5Mw",
  "key19": "5pXAdHh5tLbmcvdYoAJfxkZuszkqxrLrJU7ZkLxkDbCyHAC2AD4KuppVknmwE1dp9XY8StLoHPRM4q538AvvpdGz",
  "key20": "4qRX6UDqST7ozVUaPNJJqxC5y5SbaDJTRX5xfRqb7BZX4YzXvxUb4yDWkGDHPKDkoC5Gem3x6aCmsp8QsY5BbX4Y",
  "key21": "2yzSTv82qP5UtTiWk2HS9CovfimimoyoHoK8KttTDN5Qr5urWqCq8dTJvMYhn12byPYTU91SZK3xWHVAmE5wsHJ4",
  "key22": "2mhzjJ9PHCAV9UTZH8Eg9faxQbjqAyYKfZc456SY5XfV3Qjjxxq2oFiE4LtPovZY7vuj7xnqmCFW3oyiDpJgn7KC",
  "key23": "5GNb2jDh9goudUwfmjkJfN24tFPf3nL3v5txR2b45KpLySNoZpSsHEVof4wwM8e4e2xoQ9ZPYS2zgpbZYA8M5ff4",
  "key24": "22h3q1QwqdJzKv2spTpWtGdvevh1moEZmEXa5aJ1nZVdsHELQgDXfXh3fr3WyNHeKCVzfoDeAv2WkcLdwr57zkCm",
  "key25": "2RjtrCZLwFHFj6gUcZPmFYNMYSv5b86htCfG8MDpnwA6wLLbTcLtnHia7SYJECitgSMTmFEZgfpQGg9Qc4naiLGY",
  "key26": "4AWn4TVEqsXPfTZ9FSVsjaKoNhD2pvGQttaSUhKRT5vgV5MNwwnLRXfoYFAEMwyxxh8TiYCmX37pWPNZN1Uyh3FW",
  "key27": "3M8TxCaoWhwJfabpxiLoMzri5gc5Z33zqiU7w2PpuNh4qeyCU11WWzJGFZ3dW12TMBC9UVyghZD2FdYAWJSCqWrP",
  "key28": "2a5niU4QPtidm9aWKskE6aiU1sRrE9ybyVX82hHUk1mUPgVwsWaE2jQkoeZzmKc4HoyDrF76DokWNxEUdkVUxz6",
  "key29": "5EQiQpaVzk5Snvr4vMi7yN1rS7CFotgCynBgdCT4qYnVVFN6hqMERkamZN424HWU9iru6G8REdjcSGYFiAjBrAGw",
  "key30": "5F1MSiWiE2KhjU7xcqphtjzbhxeSpkr9T7s36KRCv3StQVGCLKSSV46wcBunGm37LTMoqhxbcjHeVK9TWGjSW3yx",
  "key31": "5GxHDyyVjVPSU2zQTGGAFay1ZhkXnNDVzxgZBjqyrXJrdsga8ayzvz6pkExLezbMFUXLLNxtbDEZYDCd7s3WS6GF",
  "key32": "hY77HKHYdRQbS2WtzfTJvLrP6PwrAXtM4a4BsMQUpvQznm4xFgcH2sQ6J5j12Tx8WJvSEbFAdiVW56z6gj6iT3j",
  "key33": "5ug7FMXqKPaT2LdYnHLBNNmGt2xiDzdn2gj1mqG6yUbWeAVG3xfzLRe4sXVi5gEpQ7kaox2BLhjF4c528MaASaL7",
  "key34": "BKLdj9YFmR5zay5Yktw5rz9T9a4fgcPUmMGLhREs9FKZR4QcoyDfWFh9Ntt2CSukchnNkR8GPcjyrwQrvfvZUZx",
  "key35": "Gv1ZZ2kDoGjamBFhVZu2iffRQ44xRFbD26Er4aFrcwHkKYRjTzqv2yNbyhCJjt5K2z4egzstXkyDAqouBYJAvNX",
  "key36": "4BnXjVBHVBX6kPbChX9AWJihfhL38ZqHQeZ9LZKDHXnovm9YPSt9n9QLNjQmRGHb4CEmJrwa7jA5BH5eA2e5vJqW",
  "key37": "23PQChjmv8xX8DVRLNdrELkS5igypQbyzXRCj1Xz1ji4Ny934zXj8isRPq9pA7rNnwHavgJyuMDDU4ozAaUSorWo",
  "key38": "DnxzXKkfhzV4BbZkW6WCYGUVA25MaAjgwU1BKqfnVSUqwXXbWML5uGjx5JYm59h71UPr4EjFHKXZNUmYRGLa7j8",
  "key39": "2KjeBqkeEjEJdNgupq543PHhNAzHeP4kZ41NfMj6PWGSWgXT92kVKCkDdrC3tAMyt4DjVxrkmQ8Vv5xGh21vjDQj",
  "key40": "2SjcVGuyHMHKwqVzDExCZAErgkxtaMkUJZRZ1aM9B3sAr2uFESEiXRVmgewF8k9EPx2ZoLbffSokXMgrYnnMGSNC",
  "key41": "3PkLYQanC3PVE7auyt5Lb9T8Ppm2Bobtawhaty92Vpb8dhXsFNxrJ6bzbM1LyhM3W7coLwNsTfFkDKUJMg2haYue",
  "key42": "r3SxjA2Ufy26s9H4TyQdy5n1KVvNfzUpwohS6zhBbSrPhvuT75xUbJFqhvqkxZhB9u74pDcudU33LGt7DF7rsaj",
  "key43": "52bFrGBj2sMkr8pj2w5vaVCByEPhnDyMPFbzDSBCihBjBvou7YpkLw5p7QbBvEttgx7rMo4PSiCMs7pVG4x5FipJ",
  "key44": "5pbFCTiTGhjD1eaqJtLV3EMSEZPssz9kc8DPzpzwN7p2ZdhD8bbn6uagSBVwP61qyD2Uk31hxKheCMeDqb3jLnoq"
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
