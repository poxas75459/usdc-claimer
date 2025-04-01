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
    "k9KLxjxhNR5WRvwKzcEwihxEBrpBe8ZHxSpWnM1io7A5Gs7ue6eiRrgGLx38ZkE3wMui5uPkiXkuheKfC1oUd2K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Nf1A3zTEsmbKu5EQ4pgnHGB1JVQUZZuTBRYFGKaPFkqy2AyaidXDPCdxfZWnV7i1tT8GczKCNjd5WGTX2TXX8Ev",
  "key1": "5F2GCm7FYfMXi3qWjUpP6qMZzLfw8mxTw9qMGTEfX2X8ewvMbtrT9YxrZXJ8dQn53WuXthKG92nQd7zPkoXsE2cN",
  "key2": "v9P76D4XRA5QDactFY5NXp1AMxTLggAzs1bw2pg7XU8ps7mLUyKwTB9UUcQPXLAutwzU8mL8daJS4MEuxaZ1eNN",
  "key3": "3WJusf5kR5ktkoNRxS9bG5mSaejZx6xhZ6NHNmTt39r9E4LcyP7WahBhfHY4iKzaSpVHUMiX5EkUyUAzzZmWboW4",
  "key4": "5d3gHjBV8hkEFzJ8pCjjR1B83bbDHuNGXNbAdvRTufhbVH1pWiX85RsjhAEdQiV9X5B7oFtYAByoQ891PWeAMsqZ",
  "key5": "3oH1UVd9sTzye32fbf8zBGtiNAyfwAHp21Xb8XuDj5AW5MvXujTmxUkBfBEAVVCPMErpLQv4yN1HHDAFhtPYBXRK",
  "key6": "5rvk2RsCnR4SQogwtmnN3CXB8rBJEXKzU1fXzHi4fsXu8326388ZEXiHhdvzPsHNgRsWwRaKBcz8aZgxPYxezZmQ",
  "key7": "4wJsy4UH9MAb9wutiywNrJhLYH1xBpDdNQ5g8s1PZxSVnCPEjTVp2SRrEzBKonVLFTCpQ37LnxZayfxzRSySJvXn",
  "key8": "35RLoUi7xT7nzjwN92GuHbkA9ZQ8MkTHbhJPU8rmSz7Ep6K8oMq98jBz6jUVeJN2VLQw27kVcfC2SgtrhELF7gkC",
  "key9": "4B4btjJoZFK7Z2tiZwFHJM777CAtViZwJkCD2qDLJQPjbzzTHhGw3y2bwmmQGUjjxt6keSb2WPUrtU25ryk5q4EN",
  "key10": "4tBAkozgymZcL8Re2LEVx8JN3Rzi3HP5P6V8B9YmwtDHZ3WkuQh7P2kU6jLm398BmBAn5Qa4jV3Ezc3mAvn2QSXd",
  "key11": "4vgumheJdmwyi82Jp6qdafvfDn1K7HGTwc6worQ3ZLBfpaZ4UnTawVnuxk3pp4Qarh32XH9FiVhWo8ZanEfr53C8",
  "key12": "3TYTc31rcJJnqmis9M325WssKSV3Arzait87HYDkmKHn2jMSQ7mzPgMa53JNZpEhtW2kp3DkSYa4YPPTfJzQao9b",
  "key13": "4rWPZJgdeg2z3yeA6YQMd1fDV4zML4dFWHrf3sgiDe1MLsRGC64RhtyecKj2QidJ7eVrgPgFhiszA4dbQcr9HANL",
  "key14": "2foYWaJDUnakR27geuQDhCrjy9L1XrSW4v3AVKd83JfGNvPFVU5TGaqwgMM3iE6gU1WuX14KcaAnJveiCK1e7saC",
  "key15": "3WuDGBpaZm6eXn5mmLHZ4eU7wwairowfZzN2k3ZQaaG2Ds1QaQ8mET3CcAVjwWnoGeo3fuZwhmA5SWEV1eAdqgB9",
  "key16": "3JU6iVZiSLEDedcKrZBDfBF5sXuhLYUVqgNJfCwp4ixpRfUsZMyYQVh49c8XixvcoqrMEEzxmZwyrahwQJgSvDYu",
  "key17": "3TkQM4RXtRnBFPK3M79cYAjwfk4ZsvabEAkmer7m4eTGLC2ceLCGt7ppnerWqQWUbhSqAGbTNPJUoV7t58fSjdqZ",
  "key18": "4tY9Ri4VoLxSFFYBd9XEcXmrjSCS8eFFrdbQdHekUa3wiRsstFvbcXgCdiu8iXVTnjMYf8Y5C14Mxya7ZPZPj2iK",
  "key19": "V4MigZDwPMa1XSvBRf4pRphoNh4jCRhmBstg3Lt3bLp77ZqSP84eDPYFE6mjUZZxynjZKYF8gt2JMpE62PvxRon",
  "key20": "5brFeJE8YKZWGH5bVFvapTWsfx7mirCEVQq7i27WTU2BqhY2bUMYLtHUERMD5vPzjVWajA6ngtN95uKqJB1GDtbN",
  "key21": "3rEkpqSNo95XffAifoS3XoP3123S7qc7fqeYFZ3wWdBU5zyrfR3GfFSvUUt6m6EShLkncqtHek9jUgCnxtdVx2sk",
  "key22": "5qPV69LJXKYK48Y7B32wvyccyKt7r9PSBbu7iNVTqxAv4o4hQkESC6dV9Sv4cBthti26aoYqj5HXseWM8XKTzbpy",
  "key23": "5kqwqgYk2dsvYbYkavsaho6kMPeAqqsRPJBqjC9xyeAmCYKh4FWmRcE8XmMvMBon12jRAVnXGEHH53TNNNenPvMF",
  "key24": "5rHM5wRJVe6YWZyCjUTGedWghvySDR1yFUW4biyi7fqegWTGwavnoEmfJ3brE7N8oiauFZHv5jSr9yL3aDB1vofW",
  "key25": "5XaiECHfDjxaa7xNWhs6TwAqi8d6DNaVJHXZnFm7x2Sn8fNhHP63TgbnfwDhv3dNgBKj48n6r2vKY9BRTitktc9S",
  "key26": "67LsVsmUPgmHvA2TGTTLeMyndr8W2EtcfY2EZRcn42t9T9eHQ7pgMqQD24SZnGescSyxQAEQCuZbZ2UjZCqbhE86",
  "key27": "3gSbMRzrXLjuMHDPz2Q8vpPG3nc1PTtqS4Tjbzqtz1XamLVS7PGnTpKoBZKDXcCdSsPgNCbiBhxj7Mo1fGB5Cahc",
  "key28": "3KvEMtQFK3WMb9kDHfKGRq87S2CjhiJx8uKAcrwPEoyjsvMLTvweKPAeMhnSD8882yiwhADjSTVHownYvjtQYCA5",
  "key29": "3Eb32Ss81REFSydf9fQEoZ1Ad1oqhgqBi9qX6iktVhjNaUDjsM66DMN3LJZe5VL27TXbenfBNdi48DPJxNZ2j3QV",
  "key30": "B7Ly9ffqmSe9K53ThjU2YAGeMYvvtkrMQ7zqvez23bihURzWEdRh1WxNSBxYyGctuc6cxGRAP3SkMnJcxzpaS9T",
  "key31": "4p2JFEYvpHtrz5ac66EGizzkLCXnHwwoe41hpAYnX72UkkJQYRc3Z8akvzYXWCeC1JNHMN22ksdXVRsNmoax3noy",
  "key32": "Tza1oupUTb1ZxFcPu7tNAqofVWd2sZmieUUMv95qNFnmxsgUxuhQ5Dr9rE5An9Uh9ihinHPo9BXZjsrHRprP8bu",
  "key33": "EKbBe95fuJnHuqEfsRrK33EYR4uCkbvxgqCXhh6jv8JDTePSycb1ZdY7GRwXcDHiVn2AJiKTek76e5xJVyT9Sve",
  "key34": "mZyPZ91ipJtnxcMR2YvHgJJRuPGUwveHbT8QVnN6YWeNzhH15wEgZjmitnZfLeLPU2CsnWYdPFhjyAib4FQvodV",
  "key35": "4PstngQ16g3La95tdn2dgqJVmQQDgmAtKcHQzkDLRoY5nVp9wKecuwPse4UhuhTQeXVhMvD6iLJnMmskhPM5LMTK",
  "key36": "4e9HeDhuwZqJ53VAk2Ku9PCa5scUVCDC5z7XGfzSErBwbrZ3UDohdxufWwWtRU4W635btahVvLoLBjQrBAjnXmrr",
  "key37": "3xQx6bzzfChZYeVeq6Rgv2McUp2GtgQf9VY2ML1FDsB8McFMe7bc43YToERq1yBaNjKbdfpFkMFgF5pVBMz7tyjB",
  "key38": "3r4AQ83v5a9UbaYeUMy8PR3X9TCBhshEKZAUPzctBhHRG7ExRsfN6wAA6Af9HjY5HciPvS7x1ReWFoN5W8LGVbvf",
  "key39": "4a18zRXuGbC4W16kqT15oc4oy4rerP7TTj9fmfhkDc4Y4MCz34puPYxUzxFaAZqZQxqE3S2SjJZon9adwzkRmi2v",
  "key40": "5qvPhkKind8V4jdfqXEccLguN61Hxa8dXSyASD7cQZrainTGTZvSZmbhcvFgXQa5PSovB3pqL1d5njfTqyhML87A"
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
