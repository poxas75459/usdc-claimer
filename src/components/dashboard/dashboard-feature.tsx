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
    "uQNYjY6K3hkW66zVNrBoYghKT4VocJkSpdHgKBRYD9rvsNzFP9FaFCzALvTfWUtnQKHxECGGwmJ3fW3k2sSXDtz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "atdMPJU8h4J3Zyrx6TU4PhV8EDq79ppp8wVWEfwPHYLMY6yyMPVqtroNLVyFcFjpEoqqdUodxurneBxmmaRGB3u",
  "key1": "67j7oJNG4fiEACASbNHWcP2BnpKje9bS6y9kf3egmXUfwgtX8b6ovUQXh8PZieuAkG7szjFKLedfv6JaUUUtGPTa",
  "key2": "3RNdHsbRX3RCdH5H8x85jZ4xUSVAh1oK2hgBi7WgwA1qHM6xM5bW6ArNyvhK8SeCCGjLpAJmfbT9kybau12S7rWf",
  "key3": "4NWXxCXjoDGuhZo8XUnu4Fi8GrDmxY2yoBxYCULaVzjwqcpbhFe6AQogugNqo6JCL8ooCzLomy5TH4BTUtD6ypFd",
  "key4": "178pyKL5Go1LUz5unqnJumt6tb13FSaRRpp3jzTZjww3SThNeJ1GjaEwfhJNp1Tah1DmJu2FBKQ6upK9HbjT1Km",
  "key5": "53L42tyPCetM1VUtE5hP2fsqD8cCVHqRPyThr22kC925cU9omZh2uLeVXss8P4W8LA5TQ3SDK77q1QGua2XxLBUp",
  "key6": "3kqnkobemtSoz3Hz5NJee3ztxd3FhN7dgTnNTzvYzdyGLPXiyxnVv98KR11iwySdTty8SUCwVNfTH7rmkYLPcqcV",
  "key7": "2SKrvzGcuncMQormGW64DkQvhuUeqHFM5TAdLw2T2zK5o1NcNfKq64Ws3DG1rEb7bwRnToME372aMKKGwzzvj5qM",
  "key8": "3cmEC9Z3AJcGpVkVfhgxkPyTgBGoiJ5Mb6pRmdrBrCnLYsvYfzNPWqiD7LpUUMTRSMXwviftgDHggRo9gZSEui5V",
  "key9": "65nPQ2r3kFWyR4gHfaNXMZEXeoznu1zLMwr4fDr7iZSJ93wL1w6Tta3zgRaF6k9Q6XwjXdmjpkLDHrV2zj9Fpnqd",
  "key10": "4G3UUBUok9FCgbB9CkNU7JwQaoJxZm25tnv2owju4XsY3GyUn9arJaWzV9HLKcC9wxiQTjBod2mHTB7b6fyiiobo",
  "key11": "h4Ao7su2cNimhD6aPRu1PiXYmVzKrdGSeowR2ctG9xhxzTSKU35CCS8L9rrCdCWfSmkgDvnkRHdkRbQTJf6fVLJ",
  "key12": "5cw689JNxc7y4GB7pNCCSWLZrwTT9wfhXyNK1VRAKG3wiTk2PPzrP4tgRK61EARu2nuWqqtY4fd6pLixcVgVxKWo",
  "key13": "2DukhT8MuHgJ5BZkYPvZe6bpEMrBJGE8CLGNMJ56TryFFmscSbUausLSf48mnwUfAkSJ64ggqhrVsvzRWg12iJr1",
  "key14": "4S85CxAz45ppasC1uFN5RZYKSXMdjZyU9VszcgLghqjz9tUBpENjacpVwbQMrjU5rL28fvwSFMn1JZVdH3x9UXDT",
  "key15": "4gvvdfd3iZewAQNTj1bZEjfkqquojvx7srHeQrULpMUxgdgrxqydRvfmdzgHrdPkNDHF1Wr9UdxBBsGvruuNnGkH",
  "key16": "3YukHcwvubytR34VBT9FmSo5Dysk5GqqepAwjGG55R3Diqjo58LkXqGK7jJ3nwGyLcXt3MT27Ba1m3sEadsq5A5T",
  "key17": "32Eu1JrwNQqp366ewwTmCpLViZ4oLjjSgsBCZHHSjDyfjYg8crx7YKihckBaXreLQwYBuPGWB3DwvwqDek6558mK",
  "key18": "21gr2ocrotqw63Atzia7bYAxrdP15UCsrhDiSkr2CXZKAEXYpYjgPVwdB1DBdqYdPYn17RMbRiD1WKwZGQckoN1U",
  "key19": "2Hai7H1yVamkNXWmqTENAKAG7tspNeLWtFjt64t6HD2gZsGHYtQ18Mw8nj9UGxaSHonwCBYwJ5uNqNJ1yE3ZTth6",
  "key20": "51ZB58T92D7a6ed5XJQ57QRm3sp4wcLGatBU39GTd495TekEZ61GWNtMnPbwYbgbaZFCgFVZTPHvJyQZHDS9LbXd",
  "key21": "2z2eP2iSME7TKvJGSShfKM8dC1pdksyy1j2bY7vtt5dwX98QF5u9zCzyRg9YaQSC5q8A1JCjmSBfg783AqTnJV7E",
  "key22": "jFjBfivkatJ5U15ZNbbEHPCfQfqM86vaiLxRjZYZTcU5mE1YsV93KRAbdjutioGHTVGXnq3sPkwDhUgis64z1U7",
  "key23": "31kj5Z3yrNcFFqAa9arWdo4pMYQ76SqdDckcSc4tayJo6JYet9wX8qYryx7ZjAAedY2Fevdyhc3UbBggR7go4kVA",
  "key24": "3hG5iq8crTaXviNQA3nZXQ3Z242GtjeHEbAdC3K2mokBjNE9pBXVQ5uXFrdF2PFYuFr7CA3LqhYz8hbGbBHWaCPK",
  "key25": "2BS9qq9dY1DircKW62k7btWiuUD5C76KtNKUJq9tq5M6cGzHc9PLuowJCPQ4MXdwuHZmYkRFhWbXh7nFSnuBQ4Yf",
  "key26": "58UBKhKMjKUpic1d4N5zMDSSfVsj9dksrbP9bbFY1cNBLkp3DMkRczoPGokmePzSJyQTdf3xCbdTCyrpu6z5yroF",
  "key27": "4tDWoYJsbC8SNKKV88vDfgcW43dP2k6BeF7zGKvTD1Wacmc563rn82U1bi9EyatdZe1S2pnZ9fhnmMzM2T5ojZuE",
  "key28": "2i7ebLgANSWoaYTLUMo3T6FiKHXjMHyL6NfatNoAG8eMhG5M8Qo4hXVJudVU3WP9dpYKKqULuQy28JDyrPuZRXA",
  "key29": "2ZHnz3HGf6ssumz2zgWpaxbp3HbCi1ioPVN53JUGZyoP6G9dVEUA3ypenrVBeznpdxSFGCgFc31BvmisaLbBFLzZ",
  "key30": "5iBYEqCL4mmV9vaSQ4GyFqzvGbPV8zpyySy9tdgXC7KwPCBeQ3TNExQUutC7WCve66ZcQK6Nt1ZExGPFAh4J56iM",
  "key31": "5h6V8S7sh5eMY3CajYk4Do5QDLjwVod2ctSkdpFxq8qtgsSkVr81Y5Cbxva6TW6uyeFVjGbsQyZnN7KgqNe2kdD1",
  "key32": "4tRQgxeCWznBp4MPLYv9UG2DCJ4VHHQyVhDgVuuP1CF5u9r9C4rErJVNbHF6zpQdoopEhJBJEHuTZ1e3qNeioLjp",
  "key33": "3T83Wkq4LfKsbd44zd4JXWPErTXZp6S64zzTHLKwXCn9TueJRrPRDMqkP7QGFVu134SHmrAwb1mWdmWpy48eNvXB",
  "key34": "2K2apEoG1JXvhS4AUXLH3s4A5QFKkasLvvKQDdQnPB83sMYxQvGoBj14xGeNKoqMUwfur5wGmC6wRDu1FaRagaM8",
  "key35": "3UYo3HAFBYVXnts7ESf2QnT8DZVKXvZcFbz5FyP8BiVh7it1Qr1smunkmpeveLr54FhExv1YtRv7tjeXiKd4WWxz",
  "key36": "2VkXUgozjFucppEfWtTMGPU49sZCTuz6xgG8VfqdE94QGTJsWi6tY2rnUuY3oJjQpUYL5ecdNpRZ21xzXi4qyGuJ"
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
