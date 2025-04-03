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
    "2vmxk6MmS12iAbZ1namhRmDF8xshtgSsurdcrZcdiEJKBr5cVprVJxNB51LZ86Vz9LGUpegZg52Wwyqzfs7rgvCz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BhVRyFLUwjZSZV627H2YgzSX2H8L2U9ohCr91XPG9xTDkqjDLJo8o2CRhj89Rgve7WvkzKDm4s2aFu7GpgeFUCN",
  "key1": "5pVHJhWgeggshQTGAik11dvihP5XgN6Kj3sA1c493dy75ickJ1e1wP4coNJ744AVH2JDQcNCFZCxgz7jRDS99Wg5",
  "key2": "yVRsaHaaB2Z354Vy2hp23Pm8yGD4BMJSek1TAakq179NwtFYrQbCtEXwVtFm4brW78QNzVTPqnZjyWcfDEc6VF1",
  "key3": "uPFGnfneBCQ1VBn6sgKrrtofXVPVYTzb44ebLren9x6hJt7Z1aJMBYgr7ptBkyQVB5ab42rtMDwkUV9HJF9Rdxq",
  "key4": "3cwRQw9atP8qC2HP4cu8qFwEePJ2Qg7bCEU5Quj3Jmt3wu4CHHNZWrmYDAq7h1SUUqQgqXzww7WSkzgRzjZa1o7a",
  "key5": "N4TuSfBE2b9QhoZmRkoVZk78uFpX9LG16KFjgHM28RtLtJa6mdAcypMD5JAingLsF519GzvTYAKP1bpDooDmYo7",
  "key6": "4Tn9PuSz74rjQ9NCqDxraxGC4bNNReDqru3VQG6XWKoHXpdzajmi2Lu2xXBUzkr9UvTXwHTNWBkLxV7m3zLwaUkY",
  "key7": "5iZoMLfBmwsNpMQipB1fWx7JbxnmKwtjRooaZkNckb3z6MKNTQ6edTthEdsH8i3yREFRVk795qQYNuCkLNiSuKs1",
  "key8": "52QUynm7ssB5fYiygmdfBhud9cyY3TTkcbkYtsYJ9W9itSArTA9PGx5nbH7gy4KXCMqDQxB74LAHiGwS2dP8aab3",
  "key9": "63SMvA346YxYBTbzqtntkJkQ6TcXcKFiiq4R1Jx6vtJjooyWP94r94f2DNrjabeiYRW1uh8o8wGSGVnyKo7deEHM",
  "key10": "2g2nQifuvhpqvQnfyyw4joC6iBAeziHxsLRrUFhd2oug3nXsEbakbKAYVw3yPx2AutvbHcm2bTFXFsDQXQecNHmu",
  "key11": "34DVVZNyhRKwkq1Fvw6cTN9RUo5S2JDNF6CbQFWhxi9mJT4FStc8A7h9jeSC2s31pHEcH7EDkGUkubvoxZwZXEBc",
  "key12": "2J4VQ2g6tdSujs8nwPyCCeTbBg4oQiVrdM6UpBmSt7ReD1RD7YFCq4sMSYtri7aZAXFtK5eqN63wH9odpTSkRbv1",
  "key13": "64EsjL5PcjjudUfaoowUmtULgRcRs2TxaFM9tSWdU2ZaEB7r7niDBoPDbDhqXhRGmDY85BP6eU6SyGAXrRdfDgc4",
  "key14": "auYyo7ULpsnpNGANdZAtdMfNdkMmmLhXS6YJcTXD1K7ecZREzsaL1XESRCyJt8UknhcMpQY2nwtRoQM6jMBn89U",
  "key15": "4WqXXMxrtMhF3TEBk6NdjczLqZpnVJW9nHbUihBmijj59uZfy8rJVH5KQm4wfYtt7ZwyHf3nfwt642cD6ovpYWR6",
  "key16": "3zquCaErN42nZuN3Amgxhi4ti6yhdFRyHYecHc6W2vuT5MYtrYmEG6sNXoiYRQF8nn9wk67t7nr7Z4pqxEvq5jCV",
  "key17": "3zepQNeaYd59w7vjmcPPiEKDRAwgfFyMsnHLWQLKWou8Jfv85v4BjTZZ6ZupFciwtJpQPzv3qghrr2JzdE4jhysf",
  "key18": "3rJ3Qoy5ScDJG4mwWMLtGGBTNvuDh7DK83u3tDxWVN2hjhXD9QLGaVdCosWKJUEXDNnH2C4p8SQnsdtazXZnnVt8",
  "key19": "4hgDEKYRcLjj1B7PHJYPCFrwovgzGCDUgRmZZCk3jE4iUCkxM5wCnRVHn1JTMWUDZfzKBtcvHxbmGHVqUQuhT3y6",
  "key20": "3Jny9PzYpQ2r2V2mpWqX4o2KvYUGVnqTNXdazBSuSZe3rtuBsgwmDjx1fcsSn2yAdZm4s7E4qrdKH9fEKeDXSwBY",
  "key21": "42fYfmNo3cUepkq5DGokUgCgPW6R6hrBg5uNsBVuFkcErx5w9dMRw8vgqhDBFjaBb65ZSKtm6MKPWW3Y5gUUXBpg",
  "key22": "4HbVehP3t4Hc6iQzYAic36jZBnwS8YDG4PGLRAsM9sGQiKFstKHhys17wreggbwxnxevVU85VrmaHEx1t4Znneu8",
  "key23": "3BXDcfsNiiRuBfS6HBDCD1WVwwnSTSsb84KsogJCkFFCpZcGq4oiuaLdD86geBn6dPpkALWU4GvQwnqSJ2HWqPXS",
  "key24": "5LpFjAJWzpwrewXqNUmK5o944hygEW6buxzHAkhLcfHELBdvrM6rNDfic4T9jGVjWcfmX8WDK5wcsbL5mELjg8zc",
  "key25": "47m2SmAiXhQ5fexU7hi7btc1EhDDK6eLZADr2nrNh6fj7XuocHgEQMub3wxSr3QX6XwAwsW4CHHrVbA9LbWAi5Ht",
  "key26": "32ZywYbsMzaxv8bnLs5myctkFNY2Q3bDirqhAYmRwN1nbuhNKrAqtUkBkz3iife6btm96QAwumVt7SqR1W2sYfAQ",
  "key27": "2DW3ZBKrr9JPrQ6W46iMDzocDAoDXNc3cfmtL856o43gAwUNG2XQMXmxZg8eanw1aGG9iKJo2ZXESfaqHagHyTw2",
  "key28": "ujWN93qMYzfHCogB2WjFTuh7ELCrZ5BFxKD6cA9mM9AkPdsGw12gJLg2wWDLb4EkC4rLxtjhd6UA53SUo4yUUUe",
  "key29": "52Mc1ih5NiLA4VtQDdvK4r11LHydsQfjUZGXoA443oKjZ21kZGhmF7n8SZ5GiM37vz9NXpWF8aUGo66QfZNSQj3D",
  "key30": "QJvmtA9KDKrTwgY8r2Pf4mmTx4rXHqaPV763N5F91mFTvtycPQSB7gfm6g9HeD2w2yRZavApmaMQ8s2EEiwsXyn",
  "key31": "5YQUmbaxFin1WHFpSbse24J1DDB6XCtsN5bfFJxXEQUkDbcL9hYULmsDNzNazYSvjbF1H9BVn1oFkbD7HygQNb2m",
  "key32": "3gqF6Uw6Z3mzVqq6upJyhq6sHHyrQBYXjHGc4oHTa3zYuAsZsVvcoQegAzpCnnhx1w2wi3rCMM1Dc4i15yzRsSj4",
  "key33": "3fwt94Wb4BLnLMoHk8PNzrFrJ7YEhP2vFZrqdaqLP8MvojczZye7Vit4Vim4AVs9c3qYZ2XTrM4K5Krab6sVvxg7"
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
