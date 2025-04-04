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
    "21ebW3e5BcbWp3Zd1zMDfdniwtwKttW7gKSyZyfYUU5sA8DRN6j1mo8mkZ5kXfdwmcwhnWTmY6Ws81ssozF3AQqP"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JFUGnLjK4VULpWvjn6UHPN6QYJSvW3vhLDSoEcK2AVnqHc9RwVkAm8dbuZwZ9g1ajpnu7hN5Y9VSX4LBqjUkXQg",
  "key1": "4erwTxkWJySzVtnAfX4SvMrYzg7DfM93YWQvPxtKbKKPV1H5igUmn24cuEG6R79LZzJogsv7zfMczyBmpZmn3K98",
  "key2": "bqgE26QUdYsnYGznxZcyEW64egzfLFM4wtBB9H47rS2vdtDueNGABerbsbbi9DqSsjPoRXVxrpqTfXGeck8dbDd",
  "key3": "ML6twgovj5rnnRfcLtwuj6Z3KxWiQJ6RgMUP694X2vNqusFE5xBVB9RRtrHQuEz5JN5ECJF4rDS1EZVqQipAoLB",
  "key4": "y1M6BRhH86CHpUwieiCysbv1cEHjRMSmfj5dVTq6EP8wSNpWVgNMjAVyeAdMq9py9cVDavg3k3fg3qC4qn4zzYD",
  "key5": "iDYNjBdZBkQzAasdn83bahkH7CYdCP8UTQ2aUFBF6fYq1jYkTNHLNVgtgVRfABg2tnEQz5AHRfmTWV4jjknUisp",
  "key6": "3BoBLcyEWC6fGdVVpMNEYbaEgxGHnMmACu3kZkBMAnY7qaeNMhMzAy5vvQG5QvozDYMLhmY597eNet5tjm5Bmrgq",
  "key7": "47V1AxaHgXEW9BFmWt6M9e4Tud3x5NPw1y8C1NwCKJHVDRzFcc95hK5iw3C7XwsjR6m6ZBr4oyLWAtfmCAPTGjbC",
  "key8": "3MqVfNiW7on9Kp4WdsfEVfofFP3vD9CG3Ecy7FZ7NnFTD9pUy2YhnVCcWhq8nKPoCpsMJHLRnDtg9RaMbPgVSike",
  "key9": "541i5fL7qcaAXq1abN2Thq8tBSmGAFULsP4p29AYP6Q5fVy8GtyUXS9odxcX8CTSDcH1yraKuuCesGsNeKkAynDq",
  "key10": "4nt94Foc1TqA2TZnPkwxVfpTRb5U5tWQpYPXqRdL6FwTkRidHZbtTEGpihfVFtkd7gmV7J3o6468eHmaHhdBc7Tr",
  "key11": "3tz5H3RjWvXZdYAr6jFYnNEFbbcxWGkLcF5vsPkoDrCirLjTVbi6pmgrygsKiHKBSoP7pF8w4kPSaAV34QotxSYN",
  "key12": "2YmGVB7jeLf2pE51GoYymck5tghrxBGiLHGJ26RhmbFhu2cM1wMtRM3DsCw1oRAuFGwNKHexYcevF61wBRocY2H8",
  "key13": "3RPZAhN3JaYiaZgqt5WhLMdAGnKk6gk9xJ4jPxLckFPVUkC8GHtLo5yPKDyyKxSuamT9PgRmchzq4f4ucNEsTzy5",
  "key14": "5GnBQD7GbMEKAptHEjssKTqD29yJXHffcRo2xj1MFLeSpPeALRYqiczdBUooTsTJmPL2mBo5JXygJFwT6EKx9ERU",
  "key15": "2s8DZEa9CjAXodBuB2msSdS7AWwNJq2MyNZRCxpP6mW5GZWTWRGPyzZfHfQk26fwBUMcaaGC2FrJ8cvVKkQg79qS",
  "key16": "YaQvr7XrqDD9p62BdKp7Lsn6apENU8a6cwdkc5TaX2xRJM8553g5WATP15eYF7bBrM4UkK9HnXiKwcKJLapZAba",
  "key17": "4j3ToURWKzLzKpbKoDss6xwE9qekZBscKe6ydv2HUdK9yrwNMJobK8cz61yYe8LJ87JaJReGTZAYGyTQvTHANMNi",
  "key18": "4Dh4mfDetAQReJqhsAprg8gNgHhcJZ8XDhgz47TPpXcaXgw2dgv6A6w2vDhQp1yWGcMDrrZ8yvSbsdfS5Vb7uk1L",
  "key19": "23dUL1yQ3JS64qg47NQH5iL4rdtxA67mgAX3nnckyQ41Pd7JYVyB1Cr1wQuyphrzmwqeZm1J6qstuxya86RhQoDJ",
  "key20": "57WaiwmGwEEDiAU4FCqyjkqkJMBVxYw2QctcsRTZdgM353izxMD1ZZbdshZwJXdqUS4wpijXEB2WHw9hHxy1xWgU",
  "key21": "41hxjSch9e7A9vvaR4Yefsxmsg4PEFvi7njiqnXvkeLHE2KQGDsztQLyvcappALqJtTEReyJxg7sYVvzaVfsvDv8",
  "key22": "4jknvsWnVcjbcyBVx37NFz17dkwYDdAjRRuo8Rdd2P4BYdsK4f7iAVKjSu2YyaQZzX1Yx9ub5mtWVwcoJc3nBtis",
  "key23": "2wCueZMcsKeQ22Q2YAc8oHUfFsVuRovQbvkQW4jsEJEot1aWtuy9CKvJiZvguv7FS8UbVom9QhwXfx5acC8et2KU",
  "key24": "7PvH34p4h7aGerNxKMRp9hzspjNhpfTGqZAfk8v1xUQwUsRoCtGdX8pJNs2XHx9mV2XKb3LAGBiZ95Z5nvK2qL1",
  "key25": "1hP2zoGDvKhGdEZt4cupHjxr7FjExqGZmyEMN4rHsygAigkYGx4Nw4QVnbsvD9G7vQas3nNGb8sMvTMaTgwN4kW",
  "key26": "34cUNnedmnnahbCLjbbVpm8Dod7rJWjoiZasiNChX5Z136BX3csCddyovXY2n4FUWAndyZMsbgJWrGCfcv3G44R6",
  "key27": "bBbu6wTpKzxLvGCPgn4WaKAmzakXiXrdQKfEcKJZzCYvZkLDsFhwAdvzKcvTvDjbzJiXWwaysaaXcWg1cBZmttq",
  "key28": "4qmNorfPWyvgZbeMoCUGKRmW2qrgYt1rhW6A1znthzq96XtHM18ZHo6ArcoCK5aYvtndLUumVR9v2pNb5E6Gwn8s",
  "key29": "4WLqM3fqdwACiit3f5Xf7XrJ6qUQnjJGEgUgPcYi2NYCuuy7Jg3jgpRSfc8HkTP2fgaMoXNW6b77vmCqSExtGLRV",
  "key30": "2vfV75bUqnA9uRZmsVrtrXytPcAJryckdcE2616zXeiW5FA7VGPicjA4BSQJwZpzSiPo61uawGjTivsefyDbwLMg",
  "key31": "4UxZp9N4rF2KYkkC63NtxftsJkUg7k41FZfxL96LXr49Hy6bX9nYEGpRp896H2d9Soy98tRodHwtQjubXibxxSNW",
  "key32": "3YPxypfNNTk1ipADwoT1CsFjfgqQw2tayGGg6BGuGRxcXE5gxqG2WSZbbaaois2CQmmY2MWFZUo3QNnBScYyPRS8",
  "key33": "21YMQhTENRnMJPzLUKduWhJ83Kyk1LRF22CfBGf7pQXXzL4N7TVobnvAaYqTscoqrPymQW75ihsiR73YHZpGaFPP",
  "key34": "4BohHkho4tmivxaV8LJ8RAV1KJsxUjqFnTNc5KNrYCtbgrsuj9a5tb35fnDCtvQ3f5zJZ7DNQ42HsH8M3ZY3avrg",
  "key35": "2q9UDF2RMXp3mHBBPZmkURrqHXqQkyzTzN4gveg3zrWKVZsW1UFTK1eEPuhbvwaCETihqPWnKw6mumi7Xfe4hkME",
  "key36": "2WHbsGtRMuD3se11Z4ZgV7ntYgeNv5YjUzXaycjL6txmpCpNBLWCwcVvBjUkK7kMSkKrMYDbnPSBss5AbtY28Efk",
  "key37": "2RpL7Eve6NHprANWue9nAV5QW4959YgNHjbovXN4mbwdA6VEYaoSLRuH6foyKVyxvczShcg1pXz2UgQ2gF6m17HH",
  "key38": "TWXcEVM5bj4RvE8Re9WBU8TmR7Mio8kKfWJgLyvae59bg3W82FmxPxTGRWhbvDSPky2Hd5sdhFFsqvEdkzAfjec",
  "key39": "5aVpMQ8q7Eic6TgpwYyUieYS1xkuEb2CzoJJ5vFYqj5x5NaGwct9gcAyyWfvboHzTHdrY2hE12LSMiHWLthEnMTV",
  "key40": "4spaQ8xxpCLw3YEpMSWeA8Pmdzyr1EtVzd3rJjUqsQZvrXoXcHXYaZsmkYjshTiSVGHnFNNUSAhhpj1mQeMuKefs",
  "key41": "5GgfvR8WdcSukcxWFZ3RSaurBg2GLbhW3SMGPWhBsXz9vHjmDqxijHjuz7zKS1nhoEpHvemdeDa6VJxpBbYsJHpn",
  "key42": "ywvsebxB2kARmUwGWRDHuNmNWUzVzzeeKxuq3UpBHx4tHTqN2HQujCfqqvWxBHZoyJA4n2AR3YYn2vQpGKWxNoo",
  "key43": "F7UTLUe19KjoXJg2qd9cuCN4Z1C8SrnKJmgE5P736BpUHQEFDJCH31ShwF5YhtsNFrdNGMQscD3K5SEZJKQPYZr",
  "key44": "5GP93ouT4sb915i9M33L2chJZp8zNHfH83qVxEu57qaorCgoDN1k53BoEsK7PHbgdgSYGf9yDHG1LpeGKLwwW3fX",
  "key45": "4DMPHRnGYWHC9TGoRe5QeWBeZZoMFovFCQH9Za6gbrR67CZebmoPmnna8eK7SamvpEQ6xWWdDncxpntTdyZLLgo1"
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
