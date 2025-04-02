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
    "2QZjfbzWaCns5B8bXhLTJMvzh8YdGPaQ1eE8DWx4YU11wogx17ibveNBkt5XzbcsHrBjBTEAAojJYYXtGSE1oMYz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5SU5TLKjFmUBuhteprchmikLqZtcbcW4fSoH3bcwYDM8kXvxSfAaUDtr5D14yULnjmpk5hZWnAzvpGbkXk37CWPM",
  "key1": "4bLJ3Xho5AbEhfbhf1oUrHHa928nWCbJaYv5VrkT9MRYETmmmcEyrSNKJN9Yk5cEtpakZWWqPqUSYjKcttnQFBi",
  "key2": "3ErB5cMv8WG43Y2gZJFR726QjDeVoYTnAYSso4WghH7z8VHyAFyZ8RmQWSvKrgDDixwoZZZb3DXwhWXvkTot5RKN",
  "key3": "2DMJPhq9MG4XtqHN8Lwn82xGCkMZ8UGFrCycPnVb5iHVjJkVc6Gy6DBiXJmSqUE9fJY6ibNrb4qHPucTFUR6NSVk",
  "key4": "3xoeXmxTYNLqfMxHT4zD34kAtXm26dgXzGymXKJtJCHUYvMFbafKaM2GBFaC3WLAwbQz56iHXLco1qgGvxzDDeQi",
  "key5": "2rvPGMEWCLFZWfqhnJp5HrkiyPnutitf7Kvv9T8ZbuNiZn4ecunHvjL86mP1Aj63FvgUvh5PVW6pWmhPM4o1rETx",
  "key6": "WqsqwoUNPockRvCMKiQdbQRa5GtCMZzvJJoKjAYJCCPrAVz1Y1s8BMCwjSQZqb8UVHx6KKn1C5jZNPWTGpmprkH",
  "key7": "49cV7h2vpLsWuf286iZFqwkGJ88r7DHfQVaye3mWx7739rgPJcGe3J7gtCGtqWMgg7PRSCxnTY93uJHVeUxnWBd7",
  "key8": "4aMTtka3c62TW7hjizh4XGiiNrUVDjrP1wzLEG9xqaAb8UpfN4C1jjXoAwYKg9GR86UoMJrNnYmeK6i91XLPKHhc",
  "key9": "3MPHVomcC3KzLAvE4nGcWy96ZvHsk4VMsPckTzNn8mrUJzNLK15x747G5e2mJWPsQHqL4CyphMQijVvVmnvUMXZQ",
  "key10": "4FYkJjgznK8iQX56t6Yu2DuaijAohN5VCvmzphUvfDQNybtT5FcrqW8e79pFXoxJPAW5QPmnYvQBfMJtAVPTmEa1",
  "key11": "5r984DxS4WTgXJwGD7wYYDaZZUDJYXgaRxQeSsmHVdNuDriEDfv41Z5XovZSMfWPEDyiBpvXegD7b8wmryW4bBcG",
  "key12": "3eXvjhcDL3aYggaAEhtPm9y5XRCeNaYHonBxX3B8QUPsXKBDgYrktEjvsjA5ajFbfkitbQwiSi7FPvfRVhwrRf8q",
  "key13": "3mwdHDFjxTrmNJQPh8H9PZUZbWuUcT4dpTtb2WybyB7TSETExUwLgd18uk2HgyVcM1ATCHcFHdKcobjH5eQteLJ",
  "key14": "4VQhmCgdKKL9STchPKs4n2qrL7m5GdfwL9imNaCSipSwXvTaJVrQNruEiC5cDRc8UANpoKUnXa1wJmBoAKWHZpb3",
  "key15": "4cx2T74HBP9hKyBwnweWLe5oucysjR9U2DRjNe5xUa6BXZiYEdNi8fYAqZ1HmA3ThtHECtTtSmbnBvKkkZKg3BjK",
  "key16": "4ZBupGxVZ3frDSCVfUeJCC6gfE8arhNvj9yFj7pWnAdiM6JNu6g6v5Fr5XEVBin6TUYwt5c3H6L2NESfNT82RmPn",
  "key17": "3xtzk8RWnPwf4xT6ywkiKPbPLDCp8Fy2tS64RXj8MWgnuZpyyMpsMMbsCLEZseczgJW3mRVnxaTPhkdbZKjQgn75",
  "key18": "554dHqvm2mmWdu49WkA8iFm2SfnDdjPyYhNzvhQ1EEUxRxFQYbj938qN1yJYhX6Ej3RvJf6BuHyCNPe6jgzzJEWP",
  "key19": "59Kq58g1UKauLnNLcoNyRrsHdiZ4Wz9J7SG5gxMWHHGwTwCpBDHTiKy8nQ2bB2tC9smQXLGTTGhhNN5cSTyGjaBC",
  "key20": "4Ev7p7SPbP1DbXL8rGfrQASSaQNqfz1sKN9oUk27Wsv2cvyNZeDVn2fwdms1tcXqpLqp26ZYWXoVmc9SfU5apdnc",
  "key21": "5Af2bjQNvDiyJQFc9jnsptckgpMyEScewyS8CaRwizQxeTJAwUSUWDRkJiughuDZmWrEz9KkuRQa9DVBySiiUUBc",
  "key22": "jX8cAvLC8RDcgHkmgLCM7pooBP672hiNwnDSyS61i23adeWN2rnZAoiq5emEM3fTLAyM9rt51c2ZyaDj58vn7Fh",
  "key23": "41BB3gbEpDRQGq3FHfLQrKHkoG31paekxWLaAFBCNh4bThFPi83no2Np6HmQqrgbf4gcmhsAZayP2AM4KRm6K27X",
  "key24": "5Uj2FCSC2WC8TAri989zHjsboaRfxMZ6Etf9NPXL7Vk3gj1X6MqEQPXFUyH47oQbyxkAcbC2ixAUERKkZmF6cwe",
  "key25": "fHTZBXLtnkb9QW8QtGkP39PmtK37TpwicdG9xXZxmnmqqh2Za22eeCf7oeGSK8WESTwuE61cWhJFiY8KkrQYrrS",
  "key26": "2p8gPbxTpjzBpm7WdgQmqDyYZVzMuWUFMcSesEYUZY1kH9pMHX6EU5XvQ4mxyfbdi3Q71LYD7Jv11RUns2UsYPiZ",
  "key27": "45ArtcKJfpSg2qL3FjHC6J8sm1WKg8ZPtEwP7QaiiLBhHk24roEPGpbo2tRo81ZYupJh8UEuRyRoJR8wt7iiCrQ9",
  "key28": "5H3kU6CrFwEge9ZV9sfUiFNXNQMcAKt6DAkgbHjQF827ASddvZrePrLSNLYMri2yZea5fff4zwfjuegqCHaJqrXE",
  "key29": "3479pqc6Z5uWFmYFQyK5STckg1fJn7qJ16oywxRgk25Yy8aSQwG4WvQMZEAFXkA6D9wGL4iA8p7u5xKXTdmE9Xc2",
  "key30": "3sk4AEk6dyrWgAgLyoWpddSsHPLuFvePusQPdxd7KVBdqmfhgheN4YAobQViKyQN38VcyKznWLXsPsvVQBaRAVEu",
  "key31": "29BtAhyVMHQX6MdxVTpL2RX9J7qHmi6wK3Pxa4DpAi89EXGcW6SdSTqCRztqKBxvGj9dbXtGQv54UnDmbgL3YFZ9",
  "key32": "4kiPnz1P1D2K162Y5KXY25UKqM4qeXooGP6fqLWJYQQ8w7A87rgAGbDZ6Jvp3sdt6DM8YScZkDooK54a2TZ4vWPn",
  "key33": "MQ6SHFuWxB1sjxyrmhoXZHKbdnNXf3thyykawG5K2a8Mh7UDgaXyLbWTU1QD6ddmBPZDXGQV4viCMmyndjrEjc3",
  "key34": "5UKrx1VLKiefBD5BRmScBeqwXYuNDcnYTYaerwhj1A7pmmSEA6VofGJH7ucSKYN7aA5jh77oLJg5QZjXmEAvwLc9",
  "key35": "58Nm6LV6tDyMazVn3Qcoq9w3ByVjYQzjeq9GgmVJtpuJVG7VZ1CNqynjmyXdpujbx8bQLnBMFztrwgN8ZZZe8MHx",
  "key36": "5eXYaoMWRQRkjdh1iL1WvpUiz5ArxB9FZPMH8tPSByDHLheBRGrvVPGp1Qb1Fa5SZwvahjdqQV2VLt4D4zmXJAjc",
  "key37": "49gyhTuiSxsSZGe27reB7dgp4CnWjRZBeYcjWBGTkBq1s6JuoiVkgDbAJtV3HyK84j5rnZCFCMfcZWsWGzvtMgVi",
  "key38": "3YrNHR2d1ayTrsvHYj3uNVdXpoArR52UShi65kNtDi7jxufZrYzvYNCoEWQqqxacqc7XtwkaQMreHawKLhvada4j",
  "key39": "5z4iLTQL2XFeWnoaSg6nk55LMYkEF6M7UKAqu5BFWHxLgmzphT4mc56DBRPoCyxTw7R45n2FK1Z4h1AcyLX52sHr",
  "key40": "2S4r9gGjaZZ3YVafvDHGcNCUH7ZGjzUrF5hQqgcyNpRchCf5TJVqVuMjRsBr8xPna47Ykyc1AenJTnErrbbsXsCw",
  "key41": "4oCThxp7p3ztkELc3e2DSRP8HfwmeK89zPorw371UKDXU78cyzRY1Ls61k5i5z4qpoVx8KWKw6HK6EScrvA7mMGv",
  "key42": "2qdz917qRuSreFyevQUAHnTEM1tD2HZH7HAiSPHKYpt1WKtZvQYoPM71Evvu7zYRNQfd5BmpGhgtq5yuxRpNJ97k",
  "key43": "4JndZUncdVnreD9mwc6B65d2UnLHKkZYKwe6DbVKrSciCcof9YSuyV5PSCQV5Sd5tRjasHF2ndTwz8QTQ1dGBcoV",
  "key44": "aHeB9rtmbPDkAJrdW7L6hR9cfX6bhr3WXJU9h8i316kvm2NdiLJfrXCXLTM3ejqtcEs3YLuz4tTq45VKFKpg69w"
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
