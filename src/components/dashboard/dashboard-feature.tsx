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
    "5ZEgFn3ZHL1S1Sci5crbUzLGPt2ynUSUMAxeyJAf5PkSSuKSXDNDzWvgjAsQLbgQcfpfuaBRkLyVhy7MZJPSYtoC"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QdTSfVkWNxRgdT7Fo26rZXjDe5buC1LX2BawxUKybBQRY7bWHsJvnCrFdNwGUyFVXCkDVvMzfR1g4WDMP2BsbW4",
  "key1": "4Wy2e3MMmcs1urP66PJNMatbbp7LGp31QCukVzT29wCyBRdGZzDjo2WEW9Ckc6KkrRibms7sv7igaCUmWgXqfNEr",
  "key2": "313R6u6WDAbWfR3Ua1uCuygQnzfJoh2hmpqfqVcHhrXPpk2mrJ35wga3gtcfvapvuDWt6eejqsYvtPXh3hLdEULW",
  "key3": "37puuyym2gFittHVFyf9U3vNz3Ej9G6LxnS9dfRwxoDWLCjkV3oC7FUmoH7XGg5rLd8hjUZDCJ23LGNBXhMR37kT",
  "key4": "2C375DePpUR1n8oWxgwmEFzjwXfPwk3NTnxKDmaTwoHvT8ohidKbJDd4pdZkxrKSSWuipHPATjm9z7VBQrQG4G9n",
  "key5": "2WfvCNb9qWCLpoPzmUL2vVDimodMsu4pWgUiaMNYoVf1nnDYhowNznx27bSC4FuMbTmQVsRvxUdBvZ6TQV9XSPus",
  "key6": "3iMqSqcxjYu88P39yp6m5B8gKnkgg5xyoBFUY7rNWnkQLoSu64UAKxT1xnGYFQTNijAJtugGzv3Q92HungFXS7wY",
  "key7": "rDCxjiKjh3EhyCs1sNNri2ZWwx1ESezUVA1HYpKE4LUBtRthPAfF67TJxFUNjDv1MDKaxQeKZHKhvac3owPr2Zf",
  "key8": "46ubxPNg63EpkPne9oD6Cn3hwoykpht4csa6sAayT4o3DmuX7u4rso7BMH8cRn26Tmrp1AenzGAsunpbGoR3igeG",
  "key9": "4e83gYyMrGDLBkCrZfV8WPh6GNtL7zgY2rp5z8v1XC9iN4aTEz93rciYGSrYq7KA1mPr6SMHQ8kXDNSiHy3ryEnA",
  "key10": "4A7NpJR6raDJ2E98LyHEbm62zRZ9DN4B5vGC5C1Vk1kVxoQiLbSud6VyfwdHeZxafs1B5YxxAdqnNxKyMab94ZV",
  "key11": "2GTH4mfckm7LrnXDr4yNy1q83NGWmDnAL4hVLZ1Vn8geRCrrYd6a9UJEuDUQB29rakYZMRkPtcqGYPfMkaDHiwSK",
  "key12": "E6wQAkSW45xuXzybm58NQ7uRGPGsMDYqwqhXReH5BLbHndEdV7zpwjKiHRG5Y4zYRXyn9RDqmJ9hsEWSEEEBq8T",
  "key13": "xnKvNDu3qay41C4Z8eHozxChmdKKJemkvihRMrQpYGZGVes4RWZSdwkdfpef4bKVofrUGqA8SouBdCHcX6wDze9",
  "key14": "2p4E9JnWhRMg7RaV1BTLkefCdBhgp4f6npK4JE39SqHpiFsjNPK9uNqGTNktvimu3KvyMAK49A8ZkNDBsBYqBvV",
  "key15": "2CnFXPQ8i4Ui83YPQVVrGui5Yq9fp8FZC3t2DXmn33ZeCC6RxjznGQrQKvwaRT3Dt2JvPh3xcjh2yhoWUiAKPvZG",
  "key16": "2SRxpSr7JXFDwuvr7wZCS9E3NLxsXGPq7MFauaGimC6BzATRd9KsCPqQdiVZmAnMdWVZ5EcbePU1pn4f74GaoCU5",
  "key17": "62TiaiNbLEsMnDA89UKxEqRRcRekiBn3ApBDbUCxjy88AGBUSyie8CycYGSEkQyv5Lo6wkWmdtTtUZvsbiT1TcNz",
  "key18": "5THuAejrXW5PdEjVmdfD8yZFP7Fkns5MUkbMUv7nFiNRa5rNx42W8ZUWSFZ7uV2eZRhJrrSy11GSXuMQTBNMV7qg",
  "key19": "3Ysst8PMe9JLPmEjucAmA5J4hYmHZmxn4su383oiTtxzMTDkXPwiGVtA8imssm6xwfKVBTNFkrAoNjDux3tmv5M6",
  "key20": "TrNDgW9vs3XMzHPV2jRn2tuqD7RPFNkYHBgaXJZUdgXyX3wyWrVWKBtPRqSpjTmNcEDJ7ZxDgwAUTnsD6vXoZbc",
  "key21": "EvXdujfGnCvJ87aYuuKHyLSL8xciWAXA665axY8nzgw1zk2QdMQhpcZS6H2DyK3vVVsBToDo8Lxexkp41ip9KPs",
  "key22": "5guowgxk7wpemBYBhA3uvVB9tTABrGYuCJLDycWTSFcVWgGorDzj2PCuGXa1G5GtHNjrJJBABQXAzTc64N1yaN7w",
  "key23": "5Pua3VbuhbmRoWmqjpSXSkm2e1EBwuHNTn69rVUrN16PQ4HUNWvAcD4dKGREPUwj9b2PwnQZf9Dyf3MvbR52YQKw",
  "key24": "4MNui3X5FoawccUL2ZhRyT3tRMd65AysUTesade9TgswdG8MbjSeBLVXwUSW7wnZkCbLhwP8qggLSZS2KmkQEow9",
  "key25": "5xqXsVav75U7HkPvarxRMqGCD5dqHBq7vSxuj3jA3bJWR7xi3TCNvy2LyLoM1sbEbKb7YMDnPLFecDDoCAuTm4wy",
  "key26": "z7daeYoGahjkcsL4ToevQwr1JMoU8dfvaWEgpi5i4X8N9L3zxbuKhjRwYHQdbsEizfmgnUByxjswsYtgrzD1rce",
  "key27": "368QUnFDg4uF87HedfXr5Y8VtMXmCcLqxoY5wJdqy2SvfwAmsHBy1jZLuwBssHLDrgXnHHNiZCKo38UKDUKySDz7",
  "key28": "4Z5jyFD6wtDTpXqRuapWtPx3WVjiPt5Gsfj2TEBWinaZryZj7bmreXX74Y26zfpz5LhuRKnPuwudxdgorqvcqsdc",
  "key29": "3fR3mmhB3U8RbUCNo783FYPA8uFzsBd6Yi8ihhJgRPcjwBG5V5pudYfWYziP9pDPqPJ6yjQfXwendVGR5WC6JzGa",
  "key30": "4vnSdggB1eCtFfGMqcEhe1xqEmNHxva9MhKbNBzVyLL41xVv1BN5pb5QpEwcsNv2DUqjRpmwbLo3Xq9PfzuBQoKp",
  "key31": "4L73wGjmchEyGjpXtuWat814cESuY6mEwSk5VfjBF6fGm49BNe2kLJD2rNTNJ6ams94sF5XtqFQnQqSN1ied3qsd",
  "key32": "5nycRVVNqeiyCvQ4HV4nWJMmC8N4NbewZXZh6MaV4F6hDbmghRN3bEaU8b9JkkMvjV4ZSbfLF8MYp4Dst96ZUUVT",
  "key33": "mnp5MnwFvK3kiVmxd166aVjoE2iPeAQ45tzWLZMgip3Y4JV2e5Vr4d3zZvdkQbP4TuMkDz1K3fWoYT9Kcb4zxew",
  "key34": "2KYMTtNWXi6Myva3LavVBUHsm82FZH3KVxXTf4CAy2Qbrjth94CzGsEhmRgveD3EAMpC8A6ofoTPJMZ2chSYRba3",
  "key35": "5vm7zYdDQJyHpgm5Si897Nqn4VjXEWmfxBQzTizWRjmDRQSJqt4HQSEsyM4VA5s9ntCZXdW9ZiSzZH6Wk2Z96VKM",
  "key36": "SSqGnd1nvexWt9sax4rowfYkXGwE7eqEH1khLi5L1EjcskLCJi16G2u9AtFJX2UCRbZAJa2eXiWadorz4sNNJGE",
  "key37": "5ysdovunsGCVpWhWhBs28TsQyLcFvHVavCHCC9iV9TinEQPjx1RL1WHeFEUN69Gr8R57ENVqbGLbzxyo8kgLTj2x",
  "key38": "3UzB7Bzi4dLSai2R3hVKmjeopeWs5TxFY5iocvLYh5BbMTZNrRkupJPrncY2muwK81Brb25iDb2twij3WnHktASe",
  "key39": "5JNU33zqzpxs4A2okBdZ7BjN66Lv1L2BtvsiEJsoiKeaCGukdiKQCLVVbJBuqEkJT2xdLE9VNgyZxbR9b6g7jFZX",
  "key40": "2ZUe3C9mwyx31s4pHGJSxwqF52ERvm7ZDKbEYKBoz1Gmubugg8mju3R4naGKdQgZEekGCtdoaFnqUvJh5uvoPe7U",
  "key41": "4A5RD73UKRieCHd4sYnbScgYmU25wMXoJ4QoWuW3vE1B4VoeGz54EHH4poEfU5443KEFc6yNWbtASY3jFsAECHbx"
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
