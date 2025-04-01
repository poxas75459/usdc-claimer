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
    "5DE713HcJimw3v3ttZkaP5jrhDBban1YdvnXDDBvbmieVnTaUPEJ4Y2P2xypFNwhHhcK6tX52KV183nydhrK5VL6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4WjTRYoXgrvjVoqpLjxDfhVbL1cWvgsLS8sdiEMTHnL6rZHDxhKmoNPe4trBE8KQzk9du7pCH2E8zgDkrDng3t1y",
  "key1": "4xScdGEmLRvd7fAmdfjVdwxu5SwbkCL8w7PCFgZpwP1kncwxLK2jofu3TFZr92sFzde37KZgdqsFoGv6bd4mxLTX",
  "key2": "5FtfQ3seSwJfAxc7SNfiGkJamMmxFYfKJkoVC3Y9sA1Cuj9yLNMjvejnFXrsLScpKMN6YqDb6EmfPvg8voARJHFx",
  "key3": "ru3CoUYV9tJCCaqgwWsR2gYRfFZs693eVAWxkv4kW1JXMELQD8TRB2R3N8FM9uJnTD2J7cvSFDgc2VP4RZpBuux",
  "key4": "5urNjXsGYZjZ1wG78oAtBG2jqWxGV7Y8bV6bHh6zqqrrTxzvD74r9N7FWDCYeJ6kV1vCF3HdJpKc7Z3gjjUZAn4h",
  "key5": "5ZpSRRZZiaeivak5AYik36qbpXeNokFFpaj6MURVUZiNhPvqe5t1ZZzacDSFcNeobe7XyUnZJq3PYT4RqpfsMk2D",
  "key6": "fmZdTx4vL9SMX8HQHe2wTvU5a22cvYKVwfuPTwUJQp8H41da3AE1Tw44nvouGP3zuxpn7QuPizghCUQ366FNhTP",
  "key7": "5dAazqRbyWFcd59uxYYb5S7mdNQVzgLNfLhhtcD2WSUsWvPxd1cQtPj2e2y4zBQLHbVb7hDrvLPKYFt15DYRnzLQ",
  "key8": "Cd57PJTyrRAtFjgfjZJuhC57RWmDENE838x9eruWxbpawxWsdgPEsC1JfvzmiFmWgX4d3LH8K5EthnuwWJZViiY",
  "key9": "224zLmYaLX6hiWgKpuAH3oAkzXttSuYHuHg6b7GQC6PicCmsewwUaZeh5rgocwUMKFDNiokNJM9rN1mf5oqdApYs",
  "key10": "4Y93ZrvxBBjzUMruToYRLF78KJJFyxMpgbbtWy8xbWaonkbEWZxm9T6TsnGeiknHQXKT1Ufd8R9obWrK4E87VXd3",
  "key11": "4aGcs8FMUmtueoJVRhQAvtT3PXVwdrab6FtD9kZV66ooikSiBTBf2qvfS192oEk9saKiEv5YDoo6sh8AFGmPoxMj",
  "key12": "nS48sna37enAEZ9bxtvBuWEMDHH2ZmRkZ2M7FUGHTiGA3Z2g2a4HUeu46Yu2H9yUJs7Zgsv8aZsWaCqm2sipvTk",
  "key13": "fbdspBH3o5Zrd3nBBxUTo8Tdyustkihg9XByciSws5rSDrnnJrYFUVTrEhtcxrcbNxhH7CUXpvUyKDhd4Ga19Ns",
  "key14": "4UoH3PXEEU9N1nDrH7XHASZn86KpzZbytA9hpm2BhmYGZ1dADfvzcWBavPYZ4cPYDsbxjKdmyTWWWS6SqLU2HjtV",
  "key15": "41s568KgGS4jHiD8vSDasnqviSmqsfFqbzYLJUjt5e3xm8L7FU8Ka7unf3AvZZ1zpQe7AuWN8UDhAWb56krspRno",
  "key16": "bvApsdrto8MyBEgyDU93Xa1FSxCceAPAUZPtzm7HnNzJqaw5eCA6RSW65Sm63Z632v6HmgepPpQgKbm2i31noTe",
  "key17": "5DkqZt5dac2SikwZtLeo5L765MkkrGbGJeLjPQbY8PecF983XQN6LUs1MhgSYp6RRJkEjQyRyNf5DTDbfieTjkcU",
  "key18": "5a7331dWr6fG6AWvBqyfW7Caih72kytmSW9TXju6dvyggNmEsL7Rxzx58n6SjU1wPASbbXx4Z1XkhaHZepY6RYv7",
  "key19": "33WgU96Am7sqzyMML964iMHxuY3d1bWu5yZfUxyvFzctsnL7Vnsc9twmNTxFaEnoUKdaEd9uP4RHtVPBenYFvHoZ",
  "key20": "3uneRyQHqXdHg3VrEjLxB4ewd7yEvy7tNYCYb8pJSbR1FBbo7gfHYo4CHC5XqWWsSxdUvo5VVnewHR3rHcs56xvd",
  "key21": "4eHSPWdYksaydaCmBVqEQVKVmK7JNb1EoA9KQQ1XReUbFVXmpprGez8FKfULNwSvycnXM8fZokvByoS2So1pYcNN",
  "key22": "2cAYHXLAYiPi1r92NAR1ULUBLfMALDZ5C47TENWgqed2p9uHnjkZSALn4VvvwWM3dVsZ8KdCo6rzyvujenbcsuTP",
  "key23": "5j5gcAVrF5VW542MXa3mGjktQ7VCijqbvdodcyH2eB7X7mR6jTCr5aCoPs4hiooyENknRwkPkDwjZUeN2VSdDk21",
  "key24": "2aePprogqpg1Wj8Tw1xvXtHHw967h2TeKY55zjHuRdJPWx7m7SAhUxviTMp8Karw3AQFCRprKw8pKEjcesoNUKBR",
  "key25": "vZZaGdd4pNge27ByTpzYqZrWThDt22WKx55AnGaoywozQqV1kk3B8HAPkGcKvsYnhMgZxwQ9KmzEVG6rLKmEucr",
  "key26": "51aq92BoJ1EaszteBTNQqZZ7HTbW8CekRe8owXqaQgU65B5swdaoA3CZAEvPipCr77H2n89dEt3G2aPKfPfnFopW",
  "key27": "5ocvedu9jx39Z6VVe5RJgv5kgzWD1WZRo9qxXGw9r6o3gQkq74Er8GNKjJyptKDdAtddPTzAE18FDZDqLv7FxHgT",
  "key28": "2jCt6Zj7yxyooMf5Zor7GhSRw3a12EVj3SgMQvtN4189a2xE1juSntfKbeAGEvqK1dFtBjsb1dvLdP3oPNP69qP5",
  "key29": "5vXmCYPMoW26LGrE8bzWT6X3M9kTHaZiHE5f1obter6kxx9BLbKm84U67iZ1MSF1ceVsXQrZWFCNJe6EoBFmh4Xd",
  "key30": "4w8fK6pCuWZdyUJB3L9hKxtUKUqZhVPLGeXFDKsRL9RLK4et6zKN39zuqi7PdXCzGVsgbMg1NHkMWNUJTynFQVv3",
  "key31": "Yyqkn5K95qaKtTtKxEcQ4PpsYCZWA6PqD3iMNeDmwQ4c5gG8NWkkYuoFWmN7ihsDH6TYhnKRH8vGWJukZDfMiZw",
  "key32": "4KMxwFh25HZJXPBvQDZBH8SA7w3Ze5yioMqZbTFjwNSnRDAtt1VuRLBVfo8if5RkEPNuxZDG2ZMFqRY4iNGekr9J",
  "key33": "2kgytG56d4318oyZyKnCSWHqs6HTxajmXWRW91YSgEU9VKCi2GimpDUaDUqJvnxMb5VaRo4mfcKMWgbNY6P8Lvm2",
  "key34": "2GEtW4rEPQExuEjh1KWRzejSfqqYhmXJgyVN8pfq5Y4TAAR5PUV9wS7XZHMHCEXpniB2EeCbRDQ7dJZtjAEEchNK",
  "key35": "59AhWrpGuxjsqRZ6HkNbDso2kiP39WEaioPRZrimSZMQDHESXxkiPiAkDzK2mZDMbwcAWVbfk1YyEDPnBzxVUxto",
  "key36": "5yVmCLxGjXVECCDwAWXECp1uvMKY2KCRkjiaagS7f4ia3m7vardj2rkK6t7JWkucNhpwDXiBA6QsGnRLfzv2KZQs",
  "key37": "5CfKgoqigEX8hbocRXAzU7xte7nt9MjDqvQiPNVrYc33ZPRUL2KoSYNQKZ6YKfeT6f4MYt3freYyTPSVkQ63Cxs4",
  "key38": "ggdTbKrCj3vB6pfh7VTm3QnYonQ37mLtbQqiHvQmsfYDHck7Gpcz5K6pXzZMMFeoLPEJwSrHwT2ZLcEJrzNijom",
  "key39": "4RryNKa7S4QFouYTYTskqB3kdGes7PXxAwQThReV4GEys38ZyJJPWTEMhuFQaWaeBvRDCPw3eeeNyuwE65afdZLN"
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
