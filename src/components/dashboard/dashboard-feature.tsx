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
    "44J1bpJKY8idjyotPMV3M8asm14jypcW6nh1cmVGYy45uqbzkLEfHrugyVHhZGZc1QsPbdvpwqdmoHwzPrQtR3AE"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gNs3eFoGVMSYz4tjwKmMbi2v9qz631GKuGc4aqZ3cxjz4LdoAmwJ1gsAomZbjoa3Joc5834AgjqcN5hDWHY2f5d",
  "key1": "4sq8JDfi5ycJqmCuNPX5CGmS1AYhUbQQD5tUwLEDYDqMZMrau6pibvB8LPkyXkmggdiwUsezvmyy1phM8R2QyZEQ",
  "key2": "48g3kUuSF2AfuA1sUmzw8ur789C8U17S395zopMTAMomCEsyBe2ZZZpd9t6jcU76m982sfTF9Kc2kypWVNvmTwgs",
  "key3": "zYFLxpwswDkCm1s19QwBpgVBFSmfsiLeb9f2MbuNjb8EKbnkMDQou894PK1LpAjeA5GjJ22u5whxXhA8b8zTJtZ",
  "key4": "GccDdmJ2GRtXQkLtMiPwq2aybajCB7smFSUVhSxwNjxj6jNSyeSUrzPi54HR2UD3fBgvCfA8cWXo1M3Ffxy7E3Z",
  "key5": "Xt53CqaxW7kiaX87cEtW991F2qD6p3b269uVburxNcPejp284nFsxX28rs7gqkBZBiSU5HgwYT2KHigj67FDqtF",
  "key6": "GaNpKnzeLEoaCJPafFLzESqErCBxKeEj8nbxcsrUxrXH4n8PqodYZiBsxTv8guo5SFu7g1WUzrZCohAaeY2YdQi",
  "key7": "3pSXaKmRrLPA5awecVm9ViQ6DTMSMrZSQSS7USQKJr1oZY1EnuuRYN8P71sSj1VyqwzRs8WPyxsCvtrd33sXs6EW",
  "key8": "2oAUvYVB4G5z9mumBq54LWpkyMAsX8Zhhrez8beaCZin7HQ1b7QtZJrhEP1abgDy4uFjbeFLBccMv48AXyaGE35i",
  "key9": "2UM8Ggp4asFSahUBHpR4q3HW6BnKf7UBDVcwLVywvAcRugYMYUDiEkNganyPp6jqbMQcFsZih852TTTX2zhpXj1F",
  "key10": "3Evzc5tWntcbHeGU5UTj2aZujVYRBf8yg76LDaX36WA4HLAHw7UdsvFZUkyEY7v9TxHGv3d1i6bbK113UWj8dV8u",
  "key11": "4PqZSS47mHgyyJQyateLRa75GNzbLxnGmyYfmTHiw2c8FN8LAxQFMHLXXjWMTgVqX6NXT9DDqYfvYT8eEeFL1r8t",
  "key12": "2a26VRSgufag4dkWsNBb9kJvQraCbsYexHJFV4uSPVNq8WSCACfxf8izfuWCeVi524a4CHxmi6v2cWBjTmM1HCsT",
  "key13": "54Lk6ESTDP65rVAnKf2F1kWTvhBLXg6GRS78RquxbBGMAh88J5tXXdP539q1jii7Yc7QTzZPXJfiZJMyuu2BetXU",
  "key14": "5723LEXDMVV7t8EeTGVUL4yfLHfBUVnA1LM7LR2fpwSJsVZSVZu5xHZhUJoPvbgDK1ske16wL5oquWhe5NhyVJNN",
  "key15": "3DcJAfLAtFLsgpXFr4h2Ly1kW2ZMh2rXZs413dcTYFCFesyhNvvP7pCEKMi3k66ixxAhZM23VWREaeHpc1YiyhP",
  "key16": "2mkLxCNnn4sfh3ukzsBTELgXefCcEmoRbCLdU3jNaCZrTh62nDe7bXctdAi4TkCJ5hRQnrzruNT53yCVr2e8k4Fa",
  "key17": "4YvY9Hxbs4PcuKCViY6zPT1w4bh6FyPv11vDXbTyLhQexAVrMKDpPfRcMzU1CMUgjeSK1ZWruizs8tubBmryoz4c",
  "key18": "25hoyjGeD2k7tPTToNJwvqpeJ5JLwvYrUbtAEr6HD6MavCj8hnZiGeRNpfcweXYaLrNfXDMxefS56CpCy3dhQTFn",
  "key19": "5hwrB5DA4fDbWQJo22XiaMHTiJM8DFm2TVne4UEV3fshb3A3PNAFyciY2FmgbKKVwF5JrcPNt5wo5D41Ju2PejFw",
  "key20": "28q6t5CdmaRiXSU9pvPkKuwpSw4u1b39yYEaSpGZ8ykc6T3PZqoH6ZPoc9X8JUyQWUHQ5GSPZxR16FrZyYT18HtF",
  "key21": "3Y9pLqoTxSQPpaUEyhry83zRK1J9ah1Zsxa8KaTLBw5eQ8vVHPQs6CiFVMjeMfAwVtrJutPwCHcCHPFWAx1dyNLb",
  "key22": "2raeJ3SGbxZfuCXfD1qGjAKf19fZ1v7yEP42pEWEU1hJJ3yzNjo6tfPWPAVzRQhAGwLPZNYHCeJvGhu6Eyw3xCKC",
  "key23": "5TyNoUgvVWQSmZo1t9NyPjaKrj3hm2wXgcQ397ZgvTa1X7oqeTfATvFNf5nnv44LKQ6puQjGSh5GBWV6Nbvd885f",
  "key24": "4LBD4avpjaCssZHVFNgB3sRUs4m2Nonmo2P8a57rd56cubyZiYF2YXpf52UoxQJcmFNF8zKm9UtnvrtKQ4w5dKRf",
  "key25": "ApCnx59km3UY7BySmb8UG3q7Fx21cqd5xT1tiQKkYaZ9AGgAdAHHaMk6xZZmw6WZsw2gdHfSCEcLSMVbDW5n65t",
  "key26": "3z5mLhmpyCBSRtnVdYm2dx8kHr4XJnXpXtTdymq8Ph3HKNoGXGbqsHHiUGgw6edskvphrXdB8JhNpFkVf8xa9KRA",
  "key27": "7yY6sfaLMJJrmNF2HTXYMDaP3b8KaFaeuZSxDaULCT38EqUZygJRh7F6VkmDPBvZE7zhkHuDkdXVdYqoVikqwH8",
  "key28": "3gUxHqUvMPtHTxBnbGxau3dtDV7NYs8KtwH269N2d198GT9V5pRAprxgiuXgeCCo6ZE9xirZ1JcWm9reTwA7fieu",
  "key29": "643N8QDyMQ7wDoxVxScvNhNKWT2PVUVqWBVb9z3ERC78mYWwBmW9gGkuHBLPVR6DDJ34EdpZ7hQJUjGRzt5EQeYT",
  "key30": "3ejxbtaaF2EoV289dMrXgYzS2Er4R9ttmTEenaFqMBXDKYE1W2WDx3LBeZmvXBeyqBJm5jUBrhbCpkkvJNmFsMBY",
  "key31": "3WZ2Bc4J7UedtbyeAKDD5or59Hcteue4jbjWenxrSUykDsgNTgwqobT4zDSbRQVbjxqq6UxhTQkoyJvRyZLEsYNf",
  "key32": "3G3X3LDBKdhw8oWh6hQAxN4rjQCV2iDqGxKb5VjxtUBcezK6mscKNe2T6JSTHSVyaG7Kofq9SVBATEp4SdCjgidy",
  "key33": "4Y5zt7bgep3VF1KpUmyYUyo397GTUPfysXLUB1y3rBJLuQdut1adeQZsGsBKXA9JKaZ5LZ2fBP1g7s4MUndqWjoF",
  "key34": "U1KXYYax6VoD9gJi9heJfGB1LoFFStMrRKDGeWw5sKqPqc1jAEFurKoKwWvqvU4J19Ef5aNuGocMuH4qQSMMATN",
  "key35": "4NVxQman2LXYrjVPga8KCWXRbDQusaRpWS7d36DLL8nieJzGX5vnztQcnvoUBZrwe1N2H1cxQTJVuhCse2WG82Kw",
  "key36": "2ATdsc4JrueJ6zFGTnVuNiZwnumndPDbFCqaWSWr8kQSeVeR8x5tWi9ZhbPgJ5uAzeHR677TDCHAnJDgGQAiMDMp",
  "key37": "3R5Foxf5sZ8kdYMeY6rzmFDur47sbfRn3AexRfV7Fk2GDhLZZnfC4KC5FsWuKjAD6FsZWJPJYaSzETLoZ7saSQz",
  "key38": "5hUWnrb2rgqibjtRXtXincwRzWrFDujuQJrDHgKrmsfbzbH8g1FDqA2v6yNr7YcoakYxsxBUni4sQ5iQWZ7GppQJ",
  "key39": "4BKtMxUdb5TUwjK1jjTsBfzcZ7X8W1Y8aFkbuCKeuYoye6jfaJvmswNuGXo2skQEW8QzUGxMhYGjNM8wcgRSd6zg",
  "key40": "4qqB3HoEQDkSekpGqtKdGd6DPFjkh7mCtDafRoaENMqe8hyiEgd9BhpZ5cRRGrRjFRvuzGqEA2hytUYYBArHkhbA",
  "key41": "5oha4KpZYJKh7opsuBDC837kAiuHhbsRFkW1jPkbZ6GbGR5WFVSEKZfUAsqrVjy83iiWYegTkDmAcmVd2pQq99K8",
  "key42": "2mDGvMwnH7jCPvUtGQuyGZHTo5Lc1hbkJfiNRFMzKJ11F1Tw9aRE6LE1JDQJ1ERtjhQCUz3TFyhZ7tVVKQhxwppN",
  "key43": "gCcWt5mMTv2E4MYUvecKPknEEVtExpLsQakjf87wQcv9vW6PK1jKARiVuroMVz1sw1FZvANhvppZQe6uuJBDUGY",
  "key44": "2ZieKy1uyb95xhCQRekbGtxReAbE22SjDt3mkQp3pWH8gWRHHnhyQEmoRHjN34gUGDonNJC3k1ruZKwPMSqqajNQ",
  "key45": "2nCLSM8kPooxQapC6PVQKXJL4avtw9SqzG62BLQPDY9FVbfhPhetT5sbnsJKwntH9raQLvpPF4VxdzyWg68AaKXo"
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
