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
    "2muUccYGBnGhmn5ViUcpsCkZWpA41QLu4fusfAP2j1hqAYFWMQyBhFABpiKYQuSwzgkj7Q7KYYqw5cwVT3jcnhbZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5CeuUoCdq7ErqFUhKou3VfKoSAZ6jFey8tsYJszUJHGkKVKbrR8qi58Mq4dmcbcy4Xatwpm4S75PCm4AM7LRevZG",
  "key1": "5NLayLNrpVAcoiti4ENAoghusQr9QrjGG3pwSC1zGt1ivXZyij9QaXswxmmyzxRMRWVPaPxkCgPqJjJs96FTXthv",
  "key2": "JiEt49GxWwju88EiPuRnFeLpi9WQWmTCZZutX8yF323B3138CQXKibjXEhei1bRsTmbmLcRQxwnh4hyRRv4EBfm",
  "key3": "9tgmxk5X3rvVVJfwJWmF3vUqYKejxSVE6Y6tf1qEaXipawjA99GHpahVJ6w5Ew4EAcfiBLJbPfw4aGyuEaXhzZV",
  "key4": "4q1driogoPHFVQsgjgcGSQeMy8R9g5WUiyoT2YqBFyPiBUDeZA87vaGEpBmuENT7hDnD6Wiq1ewsxzHCt8hVAYXn",
  "key5": "kYLQSr4ZA1q7btKDM9hjoRzmHyuv2bJFkBL6sLvTuEcZ8qE9wwXVovc7KnE9MNNT6sX2sMFsL2ELup6erxwRbLT",
  "key6": "5juXA17MdK7fum9koFTQsBrfmywTs49Spr4wpDAgJDS9zsuSXmcGRyr2N1snoYodYVQMgZc4uHa2Aym4KJLapkv4",
  "key7": "6vNztHcuMaw3CvbtxSfM8kYR63SCfb3zN8QYFJNWDcggzcJNYHjY6mZ7uy22ygeFt1vueX2H1hF7oRkRWps6Qcm",
  "key8": "3rWnjkuSRVyXuoFdm4LYrSkpRJ5xRFSmHTQpfpm363nmF2r9eAUP7TYKcmT5ZobZ5F81yxiqwzRNcSXE3LYT6ZV3",
  "key9": "3hVvrgEYjPWBAmu9i695z5PjZX11maSPSB3yf1zsiCwWSr6ubfZDJGC67ciaLYnvpi4TGXtupAwuWbDbJmf8uSFF",
  "key10": "49y4ceqDc7FKQRaLbjwdDNtsxnZmGhDn7FAdjKWUE3XFTB7ghWf6v4cdMptPYvr9tM5k3y99Q7JWtq34JoDer5mu",
  "key11": "547VujTXgXiNV7oBN9UGSQmp4RTCAqDZRoqtHE9ynRrq8p5GPQpZmyinb3pyzeUfkn3FtNrP3upR8WiFbT6VkkPv",
  "key12": "4oLDQVVCdNYiU5fXEkdqn5Vh6vXkkU1dijLbmHhjah87frME2A6fdjkD37Hf5ZPvNqRVU2FFQ8sWpP93JYk9vDpK",
  "key13": "3UYvaAp77sVnGfk8EJ4Z4gDKjgNbd4n2Du4stQ36VYWdKMwtrRnbJtGxK6idAhUc1yeQty7jXqfDYFEoLYEzNV9W",
  "key14": "5JvjwXGH1eYndLRGyoWuRhPsaXtph9GGJPP5Wi5Evrx9Hp255tTt9fzPqCi4MrhU2hpULsRqPsGQ99AL1uoQVoZ6",
  "key15": "3B8KzDUKx5uirLX5j4LHM1f4TWCccvfAFsvBAnMUaQga2CJLDseXqsoSyyPeCxiXxwsDo5RqYfoRngDnswmTae8o",
  "key16": "MSz5BHV5DGcqGJ3koYXdLTDKjRGMUfPf9RybXV27S1WY4U367UWUpcDBqnhPQVUPtu7CwkhHp1jPJCg8WkET7oS",
  "key17": "2SbUeAgUmCpMCugvZNCRUGvsbvWUZRCXbYqHfeTkywEQuy3r36Ju5bjuazbvrTJbeREve6oJNZwocKLZePETenTN",
  "key18": "4TxxyignySxwbJaVe5MwecMdqDgYoNNNHVUv6YDRstXqB4jpEed4mqhWPraapAwGYiSPjGw5GPQPpW1he45bdVHo",
  "key19": "5wgzxzgQmbvJJzTvmFEZSacaECeg72n1ZrRBo7LGB74SvBfYStG3MvVe34zaMNqqP8fMJnyvEzgsvskZRAJ9KmLA",
  "key20": "3TVTL9HjHVcGanveU4vjqEmH1WkDyfQbtKE2SBAfcyVdXDmskg95yUpz61aAFQaS4Es4JyLwyVAmmB9qpDSbeYrC",
  "key21": "4XxPqtkbas7heAgi7o48e9wPDeaMS8RXNzvgA2yJFnxjgHjkXfaL5cacQpe5cxdfNeMqw7cAeXGec4Jr46uGfKXo",
  "key22": "27H578qkMN9UDrTf3C7c7mcS7NdvGQUJUwsabZskvHgRh1V12cMwuYrbsgBk7JRN4z3zNpztnceTqQRN7Ue8DXqm",
  "key23": "3vWfJhQF3MCcVE8y7y42TuMs7sEbu9C54AS7dwBzASaQkSNyzqD8Lmhz2HRcM8ZZ61qEWsHizsqWV8suQtv7hN6b",
  "key24": "4c93atuR6gQLhoMvfri4D8zbsK8SdLbnKxuD4KvsxEkQCSNdhYPYvp3NXfTbsgTH8Mi5xa2MdRQ2dKKrBdVAeEXF",
  "key25": "3MqYzTb9T5X75vNGkDsvQzvarbkDwrnysqUg5TFh8dySSqjt9hUfQ7NANvKWsLKbaiZZbTKP3LwPVBGUH5drW7bB",
  "key26": "3on48nagPs3oJ9w6Em6MtpJFa6YcWqRV1BFSvf1VNsuSdazKUestPSaeBU98FCqivQZ7mW8BqRW6kJSA7PYUE8ef",
  "key27": "LDCmHjWtBorAdXHY2vgdYzaDahe1Z76tDMcPzdF8orrozH2YwM6iCJdstdjGjGJaM5JdASaVXwpC2AGjHdSVsdU",
  "key28": "4SR4V7yJnUZHRid2ju3zzjXc2XbdePzyzpuehWvhrsp7Xkt72cdCB15fwoFzfFvh5KWimDouV932WZZ8Q6VHJafe",
  "key29": "35tvG2eaT8EwMc4s9MP9XCoFWJUhkorVEmJbf3UDKHYCCvpJ8b9ddgC98kUoxxTcbUBrunf18SPYxghwKa2bY8VV",
  "key30": "4F4sMjmQJYsGiQ2kxCxCDd8H2XV8L5zbpHjJ84KYEyZnvLftAppctJ6qGWjMyK8Ag8mqebcgLUpSGrh9BoigJ4mW",
  "key31": "5yBqtvMyvnE2YiZq1q2uy9zBBU91AyFHR61PoHbFtjkACrJHsGJfdKPEyP5ko73eVL37QV5hP6HEuswzMsXnHrHE",
  "key32": "61SGh1TsGm1EENh9bJGSGjoBUTWQ2Eiy6W1yXi44tUtfPN3ssqUB7rxg92W2Rupmj9YzDVq1z41Ag7vPqPvfFDZw",
  "key33": "3vYokLU4R6jrV2o2piQgke7tYP7taSZrnDRyfVoeJmNbGsTSfaeAxyzPejx8vgmwzrzioVjqKXVc9doTZRWYZu5o",
  "key34": "wskGueYAUMtD6tBTqE9U12YFCNoNyVeN4dRdjxrXNtu4ogz2zvE4npgmme31JxH28m2QXTuZvbEwS9wrnDKDW7C",
  "key35": "33g81b38Hw5ateCXiFLLTeNsxrS8rLqq7gAYocM12aRcWGX4WoetxppRQeKRS8coFGP2uf2xXwBKiJweyK3DrMwA"
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
