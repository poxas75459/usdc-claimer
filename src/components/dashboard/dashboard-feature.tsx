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
    "24G5xUvtLARGEoxEMuL1mxJJGt4NvfzPKpUg4KDYRnRuNJwvrmyEQhgNE1FMhAShyPj81nfn7oz3hHMtA2hP9eqc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3cozrFydbuzYdkhY1fiwbLPbBjijRuVTfEaDnz7ncXMA3iPgAApeVNYszAb6gNNy2WFE2GNVEJ1Zg3ovVA2v3oS9",
  "key1": "jt31anYxKz1tKpsoT49Djw5UgnrvFGxBkNDU9cNZjmkWCeX4NG1htpiuZc3izYXeEHgxyLefnXxmJSgdPACDcFp",
  "key2": "2iC2dF8dZq91ymHauS21mPkoZnW7oPmxvLsYxciqJoJLi4RogQjeJCguhBdnJh3xCBT5gzDepNLFF6p4jRcK8gZ2",
  "key3": "2k9AxkhSanWoGuAo1L9kCZDBPuRFkLzuSqwsVz6G3nfXSG8obDvrXj3ceJoD4Nud1koX5Y39eQh4hPKzZCJ5Q472",
  "key4": "2Cr2chZASxQH7CacfSAiwbdzT3zpA97gEjSZWDMN85jLSWFZjFyFSNFbfo6e8kmkJTpf1XDBpB2A5JKCicfL5Ltf",
  "key5": "6sABTHCo6Doi1shTKuEF9UoYXXF98XKVtGpdm26gYiyHtehYsith2L7SgEZjCWuEpSgUEyVEpbmMUjvimHX9oiG",
  "key6": "4VqN2pwQp8MvQXHG14YEzEomhJM6mKGeTJPp56uK2ceQLsZ4oLnTjeSoBqUxecVndcazT1jh7JcRX5C66A9fT3vb",
  "key7": "2UYnTLNQdJdoX876zDfWCZkwwL5p97zuYUkDaUXjFU7ofCehLVjHmf3djvsHTrDNFqq2YgkNQ8z5BZCZoNKHaoFs",
  "key8": "5Po1zmZayCFraN2qENyop364fk8Aqk6gTFByyNyae7j9yXb4z6UuAGnQ614qW7KMQ5pHTv5GM2sNgy6MehPVaPMC",
  "key9": "3eWANrbmHZuhMgEfxVmWa2K1HbMHukHyvzp8jBcoqXYpKamtp5h8oR1Zv3t7KdxZfZEoVgtfRp5rJhQvvuMavB4J",
  "key10": "LvdgGCo7M5WQ87i8g3jQgKaXgEdPQfx7oyPw4x74q19SSKzT25RaKYyWCvd9TTAZkgPXrjmfrdL49PMStD3Mb7T",
  "key11": "4xCvNSw42nSKi4hkPHVR2AHPZtkoZgysoPCe8LLodAZ7PeMMq6nehnWc4MrGFQeMQhfb4VSXyvtdygpHw8r5gHSH",
  "key12": "46rp7Hb7mx2od9KPLJEGjpFnFdWpXNYHfo7wwoxJwahifvJH2U5HB8U6xc2cAC2oBqmXqrki6kPLwqQkLu3Aos7L",
  "key13": "2W98ppR1KMYBy65HXA7PBdmDY4GznfVYXNdE8Jjm9kTwrdZoLojriBbq1Kmwzf2U3x4Ldiuk3oz2VXH5HnbEJ19a",
  "key14": "3jTf1Mo1Hi6kqYJSu9m55WRY5PQMxR2u8HRWnGeKjKzEdDervonyexTmfGW4Ltghq8CAM6JR8a58Nw8pk4NcYuGU",
  "key15": "5beDS4WZfPHtrKXsphZrB3Z7YAWJ7sC7TGrAiABXzwThf9d5tLTP4n5SYRh9xYWa4auNNqPLJPJ18HLiF8JeKeDy",
  "key16": "EC6fpDAeXuqV3qPF39jgZuMqCnRkaZrDDho8MKMq6fEWeJwJks4WywZpkfCKBJwTnYN3AKHDpavcuCtUDfME3SQ",
  "key17": "2onRgABFnygxjc8hUotg7QLc375c2169RsGQPxnLy3ojioTGQ4sbAB2nyBurdTynLU9aSuZ3aBVgBppZG26xaraD",
  "key18": "3FNAaJMAPJkd6RBWPFhJHgVRbt8zxmEx1YeqJs5FPAF2gbLvMcnVNkggfwT73CdufTbMgj2B8iR4UXjv2u9eSL9X",
  "key19": "3g8iWMgwonq8qJrSGkiXF9JHb39Bx3ecgQKPKwTgQ6ZRBBSBywXR9KTP9Qdd6fgQ8VTmrSj1tprDESqxHpZqnom5",
  "key20": "LNUN16z63Cymj46LuVL7TFvPvFQTHPRcaAdZ6Qte7k9duwLmzK4NJse3M71NEuPAhNePF3RJdQA15no1pAuRY8V",
  "key21": "jv1pDXttjYRhi8DdKCbY8RfraceouWXF1puYzSptobuUmJsp3ohFQyaLQsVrPhcQNqG6dC3b582aNCcLxZWXPzp",
  "key22": "5gQxvMkNgMaFguoFAqSgYtEeHn1AA8wsMxT9pV1yVFM2j57gXnaRoTnu1ZqYfr4vVcZRrh2Q7ueskZtJ34V6L2v3",
  "key23": "4wddgVqG5qN8avMqvFrHngKA9LHCcsV9eJYHRCLp29znKJvUGVPTpnSF5src1dFjWiQ5biJZNYk5RFB8UXKKPRu2",
  "key24": "21oCXdij4mxAdNG1bPJCQzKhkk8X6AekjMySve7DjfQvkzAHmXMZYtb8epnQgZt6jmK5GL3ADECPNVFCZv6cqE25",
  "key25": "hsQXAKHvPyMjmPenC65eXBQSS4R6cYftRMK7bzcfEBA9C5Wf2CMVY64H94z4619HrKWhUP7nA1GWYXfQfSpdDbY",
  "key26": "38dXWcvxP2qPbzn2qv7yWfvTHnVbQ7pNCGWWJYN84EPEf5nb8eAjAeggAukKHBE1SmCJShMQyZSbKfeNvTZzdwFp",
  "key27": "5HUWotJezf5jEipcAxp3huHGvvJe9chMCfqyEnA567aKkTFPGdCMTfyRBywqdMAVu2pD1YhdyK7vVtck9VdapF2D",
  "key28": "5V2gQLjPkHhhiRK3Avrq29zHenyJdKhYH7FpAWHyBm1vqRGx97M6XPjQN98YCVNC23tRV57SGQStaRWXKvV7hbRJ",
  "key29": "3oUZgUKw8kPwjefYZjgsMm2EMcEEvEpbqDcbk1KgvC6vexMSLLbmCNeucLYDjt3gzsXDjy1CfWPtGeMvRdnMvh2W",
  "key30": "2kCKVduL9oq68f38gjwtMHkuuCeQXtrhiWe4o4Krdc7cgfHSVDvTjDy8GCmge5nvLXm6nTU8HzHT9mQ3GB7HTyR1",
  "key31": "4FgWwrvu4eQhHQYio4UBR3ekJpQztd71SREf7QKY5Gnzgx7ZLy724jKZdywFNLZNKtJY3GLWpjrZ3kuVUCnijaLr",
  "key32": "62Sp7e2BWp8RXLENATJ7mjLmiTMQnSNNg4VxF89rn2eEX94Mb53pKNyFtfHQg6jFyTWJDQ7vuh9zK5a6uxqQoJAc",
  "key33": "4wN1vjWjKNQbxbhHBrx1unAJAGDs3nFPKoU8ndtG7R1PEVEQvyUGnARzyww6tN3ECAeMkuaABvTmmLK1FmqfVykR",
  "key34": "4QT97zs7LWje6AYwtwBbWKirRPcRzJs2PrwMagP5GomRqMth1jTQrFg6TStKtnwW1wP5FGd3J3iyzHWwwyhF98E2",
  "key35": "7VH3RcSfepxeZuKcDd5YoXrQ6CPBAqjttbM6jziCJArKKvLCBhfYR1qqhTTnEikg5iEK3QaPn4N2dBQuwkXhfNV",
  "key36": "2DLCyB9BjRaReo5RL8y2MkXHaXni8Cy4YjfqFDxJZqP7aJn6FJrdz2XpqgWNumq99Gt4FUB2Pb5exa1WCAR42yPs",
  "key37": "MVtMDhEuxePMjjegXGwy4SmRYMoBSDF3cxpVgGLqmgjkxY2vH2igpqZ6uvLWeTMWjioaEnuDzzgsA8uBzkxsgzB",
  "key38": "oBGwUXnZbBVDbs4Mm6tzT1dBNY58rNXUu4aqM9aZ7v6WiZMQaGCAx1CYY3PPmt7Xc7tV8LY4tuTj48jBUP9K1b8",
  "key39": "5dHS6fR3u58ZRY9BTGuyvEEwLhZZbVXi4V58jMvAYQyE9jxj3Pef9XCvUgjgdPKeoDKxzEj5yKQ9ED9H7Lf24ii5",
  "key40": "4BJgnPSx9MuSVWgo5fhxhbDR2984F414vSPFFjxva6T9fKE4wYSteXCZBUdmUbdsY9SUV7AW9nLzE2D6C1rBZUeB",
  "key41": "3Lf6mD19xbczm1WvMmrvVGmBzMz5UzgDr4655bv3akHe46QkrRzTyPwausoxS9QQaLfX3HhH2ShtRJDJWzjhMWMM",
  "key42": "wPr1jXx6dduS1bmGVeXgdiU3mVVUS57Mk5Xv4pCjjosSnbhuUmGHL5Dzy59niCkZzi6pvZbCtCWFaAEWQdsaTNw",
  "key43": "42UahZSZosWYozyVAbeEpQmEXXmT2mK2KZ8AnQBC6Lf7o2hvov6xbDCwZXHjcwCnw9R9PY5Q3PaqvLcNxRDhKSid"
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
