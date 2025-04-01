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
    "4csh4amCvzrd5D3uEm4oXoC79yrVqpxikdyjPkoPmoCn1x1annTn5jdzJmWPKQh6aaE2Yv8aC3J4Jt8Ap93Tnvz3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2M1JXNjCq46SQsKWw4DeDGTvJGku8N8NUrhFLR2g6tZbwQg9iNu5NPWqn6qbMNjvKwkvZtGW7JeYCLbY3H9oWQZc",
  "key1": "4d7Bgkc1h5GrJZr8sURJZr4Ev3QUT2cEqchnQQ3L3E4c8VRNAFTBVqUTscXgb36f6ELZQUqsEHQVCp2FpiAvbT1n",
  "key2": "5rZu5RGYbYKoyerjcBPmZTdQtjRodogjEENrvXTb1H7FYjNe9ENJZJFjE2c6gA21DAKhAqwrESukf3hzQHnudm58",
  "key3": "45xpWHnkWMkWFFf3jccoaKk6qfn6PYx6fEZ9UJpCqPsSdxkSvYZnASnhGVU5tCmtEqgk7ND6oK472PscX2nGGTFT",
  "key4": "47xTffTS59ytaG71AaThZvaivCdMsdmU4gvbN81HEvGGyfgmjGSjRzeRZGY4hu1fLWqwV5PuCCiQPLY8J8GmCuoT",
  "key5": "wH86qfmMv7B5xZ9gPFq355zbKdewp4EEQdZGz7SkbpNnrWNmXxrW5c7YHML8QNTWMXtvqsH68Vts2CdfCcpcQKR",
  "key6": "4fskJSn3ZJFswDuxqkLKRkwmgG6BBfuqhQAQA7RrptdF7jZBz8UZw2qjkHH7dpM5H1MofQVkMZJBGs86rBJy39Fv",
  "key7": "2jsDMbc2KhE1dqkmpyEU1DAVP9hq7WwnbS9FvJgBFKqYKhwxW4rEfgySzxCHsToruLYM93fJdUFz8LDV84pzCMhK",
  "key8": "i6rtFoT2qcXZYWZTipVfz9UDDrFQoGyh1Yj66V1itxqJbTrUtsGd4sR7XXdBfbKbDPZuaMCCNTRCeB3yPP4PgNi",
  "key9": "31qQdQ2xZwhQdJL5YenndLiAJimLf5G4hGkR5nT1atEWi2K9bgCEoSor62rN1QkiBG327xoXESfaX4W9vTkN44Mz",
  "key10": "4gFPmmxFmuSAfCyy6uPSdsHCC8CTjumsrn96WU5tB6eGKtrkW3t7ShDgtiASALpR8fPPHBWRRGGzQcsoAzF35L9Y",
  "key11": "Z5HSstF99vZem8Dg5V52RK1d9JJcEwugYd6CXvuynB5wV52oPok9Q6JKZmt6TxwvsfETJVS2FmFm5JApd33qJVW",
  "key12": "3xJxFTpoUUbxdMCARNMtzfJTrgXqG76WWiyfeCPW1vWVdLwgtidcM1gwTcC5boy5eQCfz9J6Xeup7xGqbMwNr2sq",
  "key13": "241rK9H9Gh7DRbw2iU8xcs4a4j1D1gSSXJtAQTjHB38Giymnp5MhMW6i63hV6pt3t64fQjBbQsbHe7JfXYsdKJuk",
  "key14": "35wSzKRdAqVAezdW6yTLWXomthFszWCWomQHUQTQVwCSbvia7jeUk795f1YxujXUFiDzpZgUT87QoZ8kqtSXcT29",
  "key15": "3C6YBJg5s2XuBHtxi1cA1YKZX4tx61qJ8MZkWBkez7QeUdbMcz9d7nabgHE1zFuWmagyMAu6V6ZubqRNGtYW9cgS",
  "key16": "3Xq9E9kPWaMaJbG8krGTuFqR4FuRARsRFo2FTuz1aVJsJZAv1pKze66bkYbtKKtHCYQAbhKLVwPe8fVmM4pfEEGN",
  "key17": "4LHwPAaC9mqmEJNMpogpf6EEk3KCQcP2UmFF6ZdAucCtpxbWHDURfkCE2JEjAHQkjNdNa1HuxXkD5SxVP2va7wQZ",
  "key18": "62x7JZt3jsPqhSHbpb7zSz4jog3M6HB81rWjjK4AGnYbgovVKCbYAHVxzkrkoyCtSpmfCqo6zP25HV6rRhfSrVHy",
  "key19": "3KgdbgQzVkP5acRscAYXckdMB6UM9qjkiUmFy8Mvw6AigL4W3BG9KktFAQPTzxWErAEGxX1uvPdda9cNGxBvc8an",
  "key20": "2JLizyFS1z3RtHw8Th9gWgmtAmCH7k5uwZFcWzsfLFrvYcWMzC8VewyhxiVuJhNpLy67ML8S9g1Jm6LEkyMi93MG",
  "key21": "5a8J4gJknGV8rvM8FUv3UAcgzupnC5iHXc6UbQzGNs8eKM4UsNWzPDwg7gwWJc1TLqvQYYV6u8RfuyjzDA71mB7x",
  "key22": "4YgQGJUN5iX3dvGkSVRoAuxA3p9XzjqXv8z3kGNkMW5wGywFW1h9FqzPQ61Q1wZxY8Cfn5KZnp3NhNKVbnefSDk9",
  "key23": "3JEExJsh3p3kDZP85E6Memhhs2Thckjxjvtk3U1nU6rp2EDTkKutkj9W4nziFBY13cAQhM4rCj8ipnCkhpu41fVu",
  "key24": "48fJaRbNxNygLNBYzvEC6d3aCpwFF2aTmXmqXSEwwrtJDJRRUwexUGvKcojk3kTfSNQgSEwPRzink27FFzciPL5z",
  "key25": "2fBXA7um2Kk9v3KqQVstYMJDYYPxHCRAv342fkj4eFJP2sUDSeT6unf3adtN2g1ZtergkTuCbAmbu3Nbab9XUbsD",
  "key26": "5s5MKrj4rGvAEfQBqjBJHv5K2fcMGW92vvNSwvphUfqu5ZVd4Leen4HXv4H3pznA1VpZEgaAMMu4KkmTLnT2298r",
  "key27": "4kuHVUYdZn9YcFpo9ja34dgy2gTyE4zKB4n4goREsooygHM1tWjatL6cyHSp2ieFcpRpTd4LMNU1HhaoCDDaRyL3",
  "key28": "4EFv87gBgCMiddYpZj415WA2dvzHj2sJj9wcaVoofUTxM5SUW7ZQzsH926GjuyMY7UkohPUu2wZCsY1uhtuu75D8",
  "key29": "U7xM72WFfubL1JFBHCszPKphWJKigzsDSoudMwNW3fWiPqYWdyw2K9N9rQKnApAisCh3fgNMhmg7e6SK19jk8kZ",
  "key30": "56w12tU5Yfzd9NtV6ogHSTzVhyunvAkb7hoZgxKWs98DM6DrhcvQy41Y9GTVPZovEPhpu58Q5KmWA7g1SqEp99c3",
  "key31": "3NGrcY4mnTRrKyyZ4evAGEqXPNEexJsaNbn6mK2GAcWW2kciWqaunMBE1Uih57Y4Ggb6rM1uzKC8QDjVC77mN4D4",
  "key32": "Jq5BP2FXRqKZUtfik7Dgw88tw6trs69CwuXUztyuUz8rkKbhSf4JSyi53gbjmKMvWT9nESA3hZdQmq1525VkvcW"
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
