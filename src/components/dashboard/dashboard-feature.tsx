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
    "4NNmDqFRVZctRcvFM1w42LF79RqKia92HycmiDjzdmwSmVwt9Fnv1Rvs7EG7N13UQHfqYJGcQeKoruXSkBFy2YW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2dp13imsDsWmWevX7uKrcQF1cTKbzsSVmtTt7uTPZWL73hQoPegDKVFKWB7kSjHrX6CnCpv2vDiFQ9MQSN2bx8Sa",
  "key1": "4bbDXU6hm8pQ7kTEFGrxFQUhzHEWDTHKz7suUP7uYQrZRXYzMXN87cBEm3wRn2of1CBBPckK5W7KsinPgWRnkFow",
  "key2": "5dbUtX7L49VBFGXziX4XYHPrroHDYniTni5Zm6jpMu9meRM91MZr9THuRyyvASWXVCipNYfG6UXkM8Y5Jt3nvAgC",
  "key3": "64oiWysEYEQozQLCwT8Ue3hZ8EKj5ahkeZ3qY87bhXfCZVxnFqAqtyG8NRpMKxaKxrGtysmc1Hes5hB7wBGgrUPK",
  "key4": "3mYjoH8drYYfDZvSFqx6WQhM9a1kdKnEtSMSd7VsjwgQhH14JMtDkb5xe5T2T4DiXVekQrMRGq9U1N75cdQFbdSE",
  "key5": "37q4ZrBkSV4utZoAoGF7gsAh7yTMgQmY1RS9xv66vppUzUcULUJUXnH3jHjjGtvB2ckErTioNPzfVAzXdZ3f9q9v",
  "key6": "2g6ALn3Wc4KZjZm5ru2JevrwTU7yW5nMErKZXuJo7SsZCUEPJWzQ54Fids99hUiWfaE5NkzWQhB5qQvpkZhp8zNk",
  "key7": "2PJQQfV7TZdnvSAGFzyvdPD2EFSdFhPAxXW7z3D1vMKjxUrPF12LPypy7EthFEg6msiKjB8GNHeBjjHgEaHVrnNU",
  "key8": "2zww1cJSgVjtSwctuTgMTam2equhTrvjYvrp66EQxCpH2Sg73VicNGGe1XY7NauFxPKaxCd7gbZRnbDsD3jNSr5D",
  "key9": "51XyoHbHM4yWsvU1CR2zrCkvi6FgHaJqSFqUKZvduvLMzsV6bVUQXnKaRRAixXznQBMsmpHpNabCu7t6bv5s7DRr",
  "key10": "2hyMHrWyoaKeCvzXYJNe8gfbt3zkKd6VeVECAaoBh7CvqL8ewUhJSMK45gvu1g54jXvXs6nNSDCZd95spVYXw3WT",
  "key11": "5Pr76oEfjD3i9NJ7ZNP6Aj17FHHsu59T4GpMXBLc9MacVQnsMucrQHJHDgPVLK5G49c1CfvGg64JENwT7ToWNims",
  "key12": "4jUKQStMEwxTxfeKCV28sHtzHN39yh2c5C7Fgbdi5KeRvfZymbRJyjgBTceMoe39ctj7jp9biA3eKFd5ZruCRQhH",
  "key13": "2ajG8fC7XHJU62Kx4bGNbJpq4VGkRHdmEuGM9zhvwM19aVadHWRhYoqcsQ7BKqcVgdfZ9EwN1JkzZjgMkPfTBFzv",
  "key14": "3vqXqDWds2UVAQ3P2uDPU7NKqooDbt684P4LvR2konpQdNDzzxwj1LkSePhhXRqtd4wdBNykKx7pR1V2L97CEERf",
  "key15": "2jF8uZ5LPadQz7KsojWYhhryaSHJokwKhx5Dmc5aFiizKZxn7w5yzSt3jP1dVwDb4Y9wpT5znACkXpoLEdggwnvk",
  "key16": "2qqANo6rKKstbcGwWUDDZvtxuQnti4dvC2P887yMVZyfA5B4pRC9krpuxPDq4nea47rNmYdLNbjvCzfvsLU23Sm1",
  "key17": "5Sp7rpv3utBXknnWUdhQ8CFPahCNQUxfL6tSgk9hAv6CiurACHDgcjW671Z5vnTLkvhPodZJ4w9qvPYQqJhXQKKg",
  "key18": "4mcCoyd9YkSVZiCyVqwQZegL5pmeEw4bbsn3H9rAJzvLstw4cXmdJ5Ty4qFAEogfHsz23Av5tf6Zmq8L9ks7uhVy",
  "key19": "5LxG58mmrtFecvjxAR83ZuhVqLdkieHYdv6MMi5rn8RtXR5kLdqbG7BLRMb1YPKU1wGNnpppYQd9jJuqJmLa7994",
  "key20": "24mn9govHJGiP5hsk84QBQQk8mkrRBwkDZqJrmWj7SG9bCsrxKSk5Q9rB4hyC3dMZDjby73ZUMHSufxJugi5mnUx",
  "key21": "2kb4Y6hEkTeSzwmGKsHtAhGahVZGgoVABCbXC7i5tHekYyozp1zjJyRGSkjqdQz1CqmF79QbrKmJYcx2cmTtQ3ZG",
  "key22": "3bit99pj1r6GMRzeY2zGv84RK18yFiYtnZe1XKdt44Yqq9CNLx6CvUGepcSJ658HHsspn2UsrkobqjmFuPBK2RaB",
  "key23": "65TwQHGJ8eZRxsFpEwZwkWxY4B73FqcFEH9DDfN1uMgvCK8eoRnuaHmqmMiJb8TL3egQWaS1n5UsdSUt5sv6tYrL",
  "key24": "5RMxSe7M8MTA4PevPqq8tinvjqvXMzsem1dByXBGfKX3JERYMS2xUTp8dQ31iRphmqkVA382Y7a5JoKMh8oas74g",
  "key25": "3zuNKfgi1TvDQWdvCKQfggYkEKA2EhyiTBLrdSu896QtF6cmHA6RgmHU8y6fvr3qDpoWbWeVW9GsF4vEwJ8sMUkd",
  "key26": "4h7hf5UTucnhnvCBeXZbVrpoesj9WyrSRyeoZjjR4sF2uPaFNsX89KJMBuUPwgHG7YKT9fzUSWuRjveFY7SW7dW5",
  "key27": "4B3osTDBEPEwoposTKQFYRTMnLRg7MMQ9iykTGfXq7Dphe46qcdJcDPxeeKAqdRbdhMsYdwr5UyNuwNPPe4X5WWE",
  "key28": "49bH311jWfEPr3QUUPf2pjvx2VhoZ3Y6EjXfvMXbozqsQ3fPUeaDFom5V79aR24dmxT32Db7VvQrkHijQLqmTuCQ",
  "key29": "2ZzJGfzWGu8Wrep9hSeZhivwwaSLAex6bR6cKFe9MeBykctdUsbsZPjvk3ZakAESw5J5aDy3gNasRvze5NiETB6",
  "key30": "4KRE8M6nLj9sz9QmUJGzjqspgtmdxp9gponG4kz9anJUgZsjaXJCSyRfnD5LwQsgZSr8FfFt4KEABHQT72mLxq31",
  "key31": "gSUPWVYBSFsDrzLWMvqbKw6UdBKRWb9myuQxryLeUgpdnPADYBoNe8EmFvKGYeaqqwACEpcyK4KeCmA1JqQCKpp",
  "key32": "62coFnv4rf1PromSLWpaqejqzQNTbhbtVAmmRtHTnU297jJmjpmnyZxVFjBTtMuEtqiHDRcWi3E4TsmQM9aRqeoS",
  "key33": "MAxzYiKKY7kwXMFVfYqfBgQw22AGfTaiH2jk9RtnruB1NbpmZTamWRtd4F6XeguSTWVGQWiwB8kwLsAHyqJRgEV",
  "key34": "3r5qrcAeedGqGYAWDc3684eXDdivHZnhsxVjSVnzLVJTEQGbzzv2dG5bKH5whtswWgw6maTDguBfwKUPSftaZ432",
  "key35": "5Bh8eoXYHmhoU7BVc8Ga3skjDv5kTaEzR6igrbH5dp5to1QdRhHB3sJSQKWuj2o34Rc8iP5iMhu7xTmicJ3QX4bE",
  "key36": "2iomEou132su6ekY4B4tmzfqaJiibgGsiRC3oCBZQB4UHKWPZGa42BatuT3iz3qSW9vFnAVRp9vtoG8PF9G3j2ZQ",
  "key37": "3DwQVmPNNZZ8qHsLummGB5Gxk2uYhx5Yuwz6HRoZxG2RwkMYV4T4FVteNJBex5dSX93gWerm1C1pFZPdrG5kRVsB",
  "key38": "2QSooYPgQKHD9Brdx1K2rDzjX2cLTs9w1nxNBUxCBETQp8Mo7TpNevG61q6ftYVbAMiZNbKpws8FQhxmyhaXGVD4",
  "key39": "41i8ic21kBWtYLwFRL9rzA1jGW8kzdA2GscVcYNmHFNLFGxqzFzuVW39a6e66JafsRCArfh2vG95LVSD7JShQBtL",
  "key40": "5VUejMHnezAwvZKcW3CgHXmLtYmt181n9RgwXk87rjGRL8bvZGph68LeVcH3SShosQ1u1aA4PquKX9HLdxEkSLnE",
  "key41": "5eAXr5SZrpj5sjdsPMBs4xYHrPUWbN1TxvRkuRCzXPtuFuvkoZhijR5ghLLqfzz3B1C1xzv1MTu3jAWkyS5qkWhe",
  "key42": "4ZtbqKhzLta8seL2ak6vucV7jXYt6cXAK3FsHq5z2eqCK4ewvNUfU4bW2rTUhh5yQ9H5yUrDs7S3GbXctJZKd6rs",
  "key43": "4RHatsJJcoC4Us5Dbp17TZKjejdu6i5WhPxxGRYPtvNCmneFZ4xYZJCAvwYomQoXuxfYGStqcXWuNbjpQ7caYRKW",
  "key44": "5GiuCCeg2CNATThxAHoJY5DAvWSaAMJoX7hnyyYoeYxoXACCoQwRPmWG6wKFQKsqQytpgC1P2YATRyyDkLbM4Sz8",
  "key45": "1mYWQ2uSXC7Fzbm4euAA9gcwGH9ufJusvVT3ohPRa4LFdCpP4Gegj83dxkMm5p3D4zHFKGvMEEaCfZ3wEJfch4i",
  "key46": "B8AHYqyoecCvg51r61S4PXptKaquaGq3VdjAKg6Zf976APBGEMkZfod8rp7A3AuxJzyA83BUR8KPUyLEmWwfGub",
  "key47": "35fz6V9biviUBV7kVzTNnf77xJyCNf3aAKCkzDJNBzytGyfr18ybUvj2UczpXwDuhvDwFHxZzgPYvomaNp5TiMQE",
  "key48": "492TkMM9JzbPkNocKHkrtjkob6aposj4Br5r56tRQM6qLnKFFbadKpvQiJgobHDfvRHAWuW1kaq6pmqsSx1japNU",
  "key49": "aiE6S2HoovDEEkJTNdQiRE1s458CSM61SG6nHtxJBGD5HiAcG1Emx4UX96sQDYEibPWPreh8rw2Vs76tFDr2SHR"
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
