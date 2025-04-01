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
    "5xkxgwg9asZ5oUEvR6xNRQ4dTJqrVniQZ2P5A9QGUrrMepTorxujrFQJHDbyszyTbwf4VssGNZ7ZHmeESJGpURDj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5XUpjLwLbTnDwUvU56LgsD1K83h9gN4QaGE5jebijKc9meJuFYpxU4w2bUy5DwyiM7B3X7Dds1fUjnosBhNhxcnN",
  "key1": "2yZ8DuyCw9ERDEqTchLtMcSfwmwV1uHUwwdF3GHWmEpgNyzcxigm96vsx35Ze4HXX2GEz94hVkYhNCKZd2G4gGzs",
  "key2": "435mA9mnmcDn3DHvvv3UUnMJARyMX9kZn9gKY6ZK7XXtSWA8JyzkCu6MFrC484RBnuuuDfwLCs57nF3cDxKWWrQK",
  "key3": "2btPw88VFyAp2VZFbcr6BGGs1XSTrJ4rhQTzZEX9U6p5MwBYDDzUvXfKBgnEarBZqkiMMhycz6KRPTYxPN4EoVpk",
  "key4": "GARNGfAKbQrJiBuHqF1D94T7nAfBULaYvtrgdDhZDxiWu29jrNjDPYx9UgYhuyJm5uoxqAFFREeQN8hoi8BxpBP",
  "key5": "3qJhDZuQuLsyuFinnkkAhMCuPkWpJtcuD5gdqHfSpkTRuiAZbfijizsKBhtbBAtaHk8fctd6erGV11GmY2WR8Dzb",
  "key6": "2jSkSwiqRDVzjfqU8KYDdHauptpV6pgQ9q28Jv4j96F1b9ZGVCU1LXXnmaoKquiYobZjJV7D2LZfHjD7PQ2hssmN",
  "key7": "4adFmynHxEJvc433oSmPc3zbgiNiAtRkRcEfts1NgvmnFuMGsuUigP8XPj3TfLM9eQmdfRgo9PcUb4UuQFC5dHUT",
  "key8": "5nVwuJwk2xdpdAvvgha2G7WrTrizttN9amxHLfe8bQvon4steEXdwaiSEmfWyvPY9aAhUyY81zQSmLQ9MMcLPCYS",
  "key9": "3HgJmMXSRygKZeb433hXtUsGTSWAJkJmXG7JknUFDNzEaN8jGx3WuyjUrZAFn4RYb8Zphdwj9fT2Zs5Sw5eQWLnN",
  "key10": "2JjktTvG4pNrXoFAUGZfxtFWSpGS4KS8EcjABdZRUYLAvhLnozjuJqpbt4NPcw78HPqbuYPZX9nHMCcrNfnyimSy",
  "key11": "27YdzJZqLG7ac1zJww9ksxtgwN3BdCPvDBuRCQrbzJSgzEDRjqwZe8fvHfrWV98YYvTBwJYQCxbFkwiNFG76kqgm",
  "key12": "KQomJbBcEy2a8yHtnvdcvUTNqrT8dqXdzZqaEy5NvcoLbe1otjBQ9Ub2F3Tgf4yPkL1LCPNjjRYe4zRUPd5WxrH",
  "key13": "4oKhFqsDFc2QBFzhax3otDeqyypPzbGRMAHMuZoEjZbiE4CHyDb5S6SX3o1cx2UYqs6wbRTG5BxtLdWSPhEpJQ5u",
  "key14": "4zRjV3WqBiaWs26hvdCQqv8xu8doYQWC6wGGTAtQXWxy3kVxqjH6srTgqzHiFsdFGYCpfSL5ra6p5PStLW38KhW",
  "key15": "33eHzEduTze5xnSqziKqPHQSudiK13xM6LnPhgtaWKpHrKXP3QSxMuPNFQiibq87ezV7vLDMN7onBTcZC2PvcQwA",
  "key16": "2s5FQPss8XxueDoU4goHewnX3QFfQLmMq584fTymTEAJcrEmBRYPZUBBJj6cPWcfSG38YYZaaLNnDg9MVQHprZgR",
  "key17": "2Vsm6QRv2iQTg2zWqcfPCs6KLshVApt7Kf9QSHZ1KDx76gXFP2cv2rukzqbUj1CbJo1Zimrq41VjQyTjamaHWJkP",
  "key18": "5TcWvszqUC2egUkrc5UFL9YZ8dTw1986UmD6Tc51dAnBtsaznKrLK5RaoEqvhmqfoaNhhrAd6T6sgWcCPxurGmA6",
  "key19": "2x4jctHmTETedTbp4k7atVVUYCDgx1BGhya5pLst8xzjJTR8mcuCyrJz8iKJcEsPFfnNya5C1KoSmdmYbaNWtvHq",
  "key20": "3BhM6Z3kJrzfBTHC3PtY8vcCshQf9BknoSsSWbq351LJgvQdJyk1GU5oLcXPzWGgqysNyaZ1QPBj39GiXB7tYfhB",
  "key21": "4W5TSVhcxwbhYhBoDgAyaj8CBaZbbJNpYjkxUp9qFjeewYoC8okDjYtiNmHUZak9Kfjr1ytw7dYyApA1h6t7rTws",
  "key22": "2JQpX3Yy7V61ZDspaHY8B6NGAAHv9u46DYfxXq7HaBdPjDur3URgzLhuLKYoTgwnZvDKPKugrKJCd6r5bXb3ujFn",
  "key23": "4AonnjPydnbPDFxQG9T32xFfwCpeXqUAS3CtosHydtQSjSZYsuqh33jXuZuE2fdmzaXT8VjeTkVRVhCPSjoJRSG",
  "key24": "5KSFenAnh2b2bR5socj86C9QyaiL5cf8FgRr33izJBniv8QUj32tHHiuyn3Q2gN14G5gwChWRv5A7EUSZwepMGAE",
  "key25": "5DGejA5vX6PtJFk4uy9uoicqvcaeNRDHvMrV2BTJ9tZdQFZZ4NfEnjGAjBW9s7JS7159RuRwcWURXwoEuXG3gwDL",
  "key26": "662mZWn82MBY5rkrWGJFr8nNqE9E1RWQDg2WfywbvjydPomKS2L1V5beqCZWuwQcz6EAhn4k4EFRe9Mij1Jw8H8w",
  "key27": "5NYbvqeCnYETMDqtyDFzvkw7D4ZCVf8Yc5u2c3Yyc8MdD8XkLdKSWNifSUKvGbmoi1mVzcvtgZ8U5MvHYFMqNEHT",
  "key28": "hdpUDfPD9n7kr4VfCMo1wzZRgj7pHnaTv7E6jHvp8zZTaN8Ym6DGT26Lc9HM9ccpWN6qr6w71uEL4wD5RoR8Msc",
  "key29": "yGyuzmkftE9dYgkfmWoeyjcdyj5bJ1ysmfraqk8Hb4JmbMckquS7C1uW2QwExovLqJcp3tTwyDjvRBFpgVSynkq",
  "key30": "2CUAx3pWw3cCzRUnmJH4vU6ogYPqxvTZLR8BvTyNKYUdSkiCEZQXGPY8NhqKoAaHXYFX5Fv3Ziyhmb6NkzRLFLe4",
  "key31": "3tQrwb8CYSBHnU2RZvykmnHgJbtyDm5vt3vJ4EwDzBj7tdvhNAnS8DVgTiG7wd6Q3vAgovA4744JrPS9NyPX3GRb",
  "key32": "2ejnTDi9uAAKKASA8B1pxAW1DrWKNPicAMdHfjRackV8S5zCmg8aiZP2dcbGKV3iTeDpiRvNRGtx8ZPRjzu27R8X",
  "key33": "5FsZQv7JEedA6KoD8cQRpPie3mmrdpskvX1niNyGKzjoNTwEis8GFrLV7SL7N1gt6ahcyZ3zvoFdFEhoDyfsaBs1",
  "key34": "4wzPAccK24UYiymYxbTFpSrfjWLFL4P38Z5Uk9vtKESwmCKVYAJUkELpmBDhyDdbftLW5Z8D2F7kJ1tNWi75RgQ9",
  "key35": "5EZJ4qiKTjac5Rq2Mdo7yacaqUK81Hj4m4fE2qRAQaahGXfSZQRt5DiAKqVkgXLp2795peoqPv4vxqadE5KjXEMG",
  "key36": "4aSBvw5eNyktoJ957uuqnmuBEveN4C2CFfAsKLgCFtEHLTRDgmTxjsRHq8xgLGMSridCD3b9vA3ew4kiPEsfwbRQ",
  "key37": "4LcrnXQcEX8ttfGm7wsxDFsoaLvSg2pbxYtYVNLSsV8ibxnVEs22ZDJCF9Ets3scdNgNNavAJNnvtWXum5kA8Kzf"
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
