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
    "U6DpKKs2fqG2Vc9Xg82p4j7NRUM42DZPgcXzMpmV6AwKQXL3attuBAEySNbZ7Lo4BxQA9gcqQ4bd2RniYsofJur"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4PKagQAfK2vTdpoSDfqZCcnoLsfMYstvhDMzBNpX3PMgREDnCQNr9gsa96HjmMz92cti1SyK4ZzSJMAp2fv5tcDc",
  "key1": "5hoxcWBma92YRcRTaBEjgw36jGTtcLagKiR3xKBYZEF17ku3A8Qv2dHT6M124YUw5MRBbmGhJ3aZeu1YdQq133Pa",
  "key2": "3wbBUmwomRvAtbtZSvaczSBqpZAHdtvCUedsZSnTnUy8An5yqNXkQxFnhuyRNSjKxeXkP7p2aG4NGQBbWCRVuL3u",
  "key3": "4v2fcitHuMtNy87c2V2BncaUtbMC2uDiFP5KXdjcGvKBuKzyzunYgPPk9QsNbwNKpFwyfgarbXeEoUqcnUAHWTEk",
  "key4": "2KxDQnwuyzt1XLxdnhvKfeDoMCqBaVRFJaVzEdZVrNgqHGJifT5U6AW97dMuMv47enE7j7nUr8N2aa9zmq392AfK",
  "key5": "4HUvuUrBRA8wo7K49qZGsDhupGKGQMJ8fPygQZKUypL9828Dw8zez33VHSuD6RqjPNUAEvb4kho34rWvTdskQdnn",
  "key6": "4t8ucNQznzD3AdfjCMXg5eyQeM658ghBxrFrU8MMkECrfr82ZKjzRsYvkMsavf4ksVr9ChwjXy3uRumPDkdFtA8M",
  "key7": "2rd2enWr7h4SYKvNQhRqz3DoZYuohjAAHksuT7rLWdF7Kr3Ji8t27LXceVEvMhX3uGpV6zjFJ6VZPsihN5viGj4Z",
  "key8": "KP9zChnPJVbXHujqdTwd8BNSzUFddVYjnSHPuRDenhNMxJRELgAa6DwRBmKTb5kkHchm7yf4CNLabr8GomS4ren",
  "key9": "4svQWmQ1CSnqefC5NBbbfUrA1NTrtB6VUjRa9GwKtaXBSDZX5qeZhFU5QHHNxsPhuo6Q4Aq1hmoUiMny9LiDhZy6",
  "key10": "U1VuZpVcBcuU71Wrm8FDgJ66KeVD7RocenykqC3ehCcChZTWMtb5A2VmoEtSJDe1nqYVLZ7wTBR6AyjERFL1hv4",
  "key11": "4jZftqbCdtp4s1RShdDxMfdFPWghWKZewuUrZovbKDoJsgUgSd3Sw4VUyW8Xa7zENEmsBymHE2gwZzJn4apUyTEq",
  "key12": "n3WGuVDHT5ejYDVthBWbs2xWWuvLJWiKHMAASfygkrUhXEHDqrdn7p1FxEQcLXPaesU9dGDuUm8DYFmJXsk2wTT",
  "key13": "2f1hqwaY77od65Gc3yqMjgprQQG7QjMUQKSVzN5hwrxCFyYj4CKRecnX5ow2TEg1k36wpS1sWrkNn8SYUnL4jY2J",
  "key14": "5VjDfzoTe1WNxXJ93euhFEQdioycYAuNFvrNJ8h1XvTNSWZaPZKLGGrzba9r6dqso922CeE58hEuFhHxZfuj68uU",
  "key15": "5DkF34BDcjHKt14fqz5Ew9jEjo1CxsiFZS3RE4BUwEBZR5RYPvfEcYonrKmvnypnNo6LS1D7pTBcyz7VBx8MNBDG",
  "key16": "5WKki8QqrCnNFWCcksDqV66t7fRnYX5M2ypMF6T5GzhCRGPLjaVRy2geqwh51scWc3h5CyCkQ3mP7CPu8kbd6Bjc",
  "key17": "5ZhUUHivBqZ6DRuiagYg8ZWJfNhuUK1eSnQTyy1uAGpM3ybFcNExuN47brmePUBAkrMnTdPnoPe6sxVS93ymBqsS",
  "key18": "4abQ1nJ8DU13vsJjUoYXbjFw32UHCuTLLiszkKKPvwibmGXWswnHZ7PGvw2Kth33JokCg1CMgQMb31JkGS6YPtqB",
  "key19": "2uZxM7Wdp2sSYPgzjTXTvEMLriugAAGzBR5ff3dhS4eda6g3W9SimRr1GXQPYsJ4wbFV3yZ6iJvkMr7ez74DQQUY",
  "key20": "4SxQ2hCQpQYQsfUchLsNLk4n8WPs3996jjKG4SZdjyz8LRdCSrN2UNmpbNGiivRu8pQo5FK4NpQHWsTPfKQ7CdLt",
  "key21": "4pPPt5iahRMNvb7L9mSW9d78R2SuZm2HbBdxuihrptjoEdtUrhvH1xAz7yRpbGAQDpyDRDuXafEgamDqnR8sPZRH",
  "key22": "4jqTsTCCooxSMxVYz2e1xDtMZ46ibrMFLswhBK9TX9fkHMsXvaGUK64DJK7SFomSwzwhmueeiJsUFvxnNgYye3j2",
  "key23": "57fxL222D5a58DKd1vk85xsp52TSfCg6j3rAp7FUCuUidmpJLTYf8k4ugqARXeqLWN148WLpShs6no28nqQ7onEe",
  "key24": "3R3zUxe1g3STKhrc4JMbZ2gyKKQMadDCAd6CEdUo4eNv9fmsEnA9ojsPyMyRLeY63wU34FcW7iF9dU8o4ZTV2T7G",
  "key25": "4heRpxjnrBN21aDLHvr8knZN599pTeg1bCzBVsSPynNGr9uAezc345h136JywacrjebPJAYLL4F8j6WRN68yPNkS",
  "key26": "2t3TRMYtKM1HrC4SYwYYfaNSMtcgUQDYsb5kezVATDh1iqrR3cadkH5RgANHmtbRvGHdUXjPp7i1xzXAwomxAtF6",
  "key27": "2xUToGvGdsZtHN5kqaEDhgK8XXFgAWetpiiWBE9N1kkRzWZF2NNCbkWXnSd334u86JhRGRdRihGRs2Y8duoPpWj9",
  "key28": "2KZjv8EHrGi9ag17mSJ39CAiDeknDhijPVscVunRBZkSrcyXtqgz8XGWLi4g36K35we86HHg4gHDWr7VWDfbUNks",
  "key29": "4At6DBYbBtY8yupvsVsqnG3KQvuNAhkozc4TsFM9SPjfFgpYmk84BYXCdLEWwUtFpajWsSAhCSuAQV9FFhEpMynL",
  "key30": "2kBPyFgMi88nkLN5o7einF9x4r7UvLBBKdEg2b1YW4cGYQxG4vG1H7xNkpngbPa9qBR5JhEkcQToAPdMa498UfjB",
  "key31": "5UQjJ7ihYm9dQA4aH5wswsPbeyZnh5W6b3tr2PV4iuRuhiHrZnDewyUzGAfQeV7pHo9jmFRvBS4YYYWB3gTk6H26",
  "key32": "2tvfYoKm4dXDCkKMvx2Pcv7peQgg9oatE2NLAnB1TuNU7aF5KTSjGeKJU6n1BaRomWCzEiYzdpXZRMYVcfQeEJku",
  "key33": "21r4Cbtfnbj2QxPAHEJ1SQdCeTtYmVcGJ2oMGnfnS8vHN6BYn8vwvBsza8nvszuQW4xNDQGhVrL5hHjaax8zyBtR",
  "key34": "2yhdJnnYkwapC2Q5L7mdgByZwNqvLf59srM1H7tg1u9hQ7v4s6RBVyLL5M4L5t4Q56EYvzc76D7c9dfAwoTKBCcB",
  "key35": "29PsqSCbJU4WHAsNMxDL3JjGjq5SXEadMN8n2DyaXgaUmazkJh5nJmWPeNBXFDKAaV2MEWv4odLAiY5SkShvrnUd",
  "key36": "2FZate46qCm4GhfiEs6M3BGXsAjqS3stmpj9wohYbiTZaGayU7y1pZiBegYsTxW4tLVyum4TdvH445HKHmTnu41m",
  "key37": "58uNZ92vX9jxKjXrbQbRowT1pgoz7k5rkbu2J3akT5nesEEmFFhqiBQqfrM5q2pTCpyYZ79Hf82DzZDpRs6nWMMb",
  "key38": "5wmZVhhW4v1PSX398ocJX458BPvUjk1NjM4mZDKWG6R4KTMs45ej3aWEQq4pWbnPdRRqwAjvm3xZbuLdKeCtyavc",
  "key39": "2p6yEr8nWWcwJAgM83XpfRPKqfE9ZkQCDV3WS1cLiVpCVcz91X1vt4EqsFwMzqkVLQ1V6DcW67gAApptdwaCsQwi",
  "key40": "5vfES7PfzBKrsewNuq6ZRnaypXZEkDZ4uC8CDXnfqzcE7PKG3iSFA4eLQApxKX6LbU6FEL5GJVjGPxFQJSNDcH82",
  "key41": "31nRoe9YtWhJHypzbf3tBcsr3nk4hAjqUD46GcXJPLCZJe6eH6F7VuSsJpVP7ug7YfVh9RWcE8ahHXbr4Wep99xk",
  "key42": "5WU4QaM7zJcWLyxRj41k3o7M8yk1DAa3LcSwnuCpkFa1iHw22qkEaBoHqpoyuX2LTKaDH5ZF2Kw8yDqu9i9kcKL",
  "key43": "35UwYcNq8bZUsuKqtaiADKQBc2d9Vv8Y3Nyn41qvbPpSw5aAWzVWywiNN3asWRpGYvgy1yXCcvGNmY5Ykr9X6V3T",
  "key44": "4btBj5LhS58rY6yfe9wXCycbAnm66QxVkZPyTo5Ue36Rmhau4pzo6PDaV8zUE18n6vbdHCKAHZuNAfafG6wQoDC5",
  "key45": "3Enf7pJJbXQrjC4j1Bt47WD8C28juRGzZ9gib8GAshjp3viGfkb7KGx1NJER3at4wXna42xEbfAHBHNiJvGbnv1S",
  "key46": "4PocPaHrVEsSx43LWHCG2gKbJ36oFrkvGyqToKn8G5kQZcZEzXjEDSdyNUPhgwcAHYYobFghK9kExnEpBqmFdzxM",
  "key47": "3iMRmgoo1AbMS7sa1zFyAWnbYsThY79ebAULE5qik2M72EoQYPtDq413xuvA6GxgSET1rNZanhFu1QykxmJLWJZf",
  "key48": "3nFXF4NimEcgzukzYsn6q9dnvzdcyiYVzqzLNjuUzeRh6zPh4xkrPdaY4Rcyk3qzYTg11vGx7hdEG53G5JDXkBBp",
  "key49": "2utz2XR894zHdLZ8XFHEsKGu6qkw1ZR9e8s9wkqJPjkBoSqAu8ekqDv3dn1ran6GhWi7h5qH8DqcGpEgGwcFR7SH"
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
