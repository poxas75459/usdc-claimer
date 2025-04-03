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
    "SsFkQZSxunR7tweJCerNXtmqHmeUw5GjkCrNwEBh64gprSPtwFXbNPLsPuKpaUkAJEovr9hVC9LN1yNcM1LzvAg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "BRg9cG84VYDijvxPLLhQ3WWA59DvJScK6zugPfFxdjH8u9cu6QwXXmTdMNzSvAdA4V5Eibb1Qfs1SZQD9bS5XyW",
  "key1": "5K5N9asdBCMSY7zBwGBXfi6h8XeLmYfdB95n83rG71x99cP48Nvgi2mAisBZCrsJFW5XwDa7PyHta75Q8DfuydDZ",
  "key2": "4M8y2pNtP5o1Dkqax3idV12i7A1oYzJgLjeBF4ravZ9cXZVfTq1Ex3pApM3B2ZJiBEUu1KuCqxfA1F5Mwceh5V8r",
  "key3": "4Vc3RBQcrQYjJRzJk4BrqKpYBmk6rPzKR6A4tvA9swted1rX2tNtdB55TfZf8Z6SfTRwWPNHPjTaEnC9J66HH9Gt",
  "key4": "3qAvQkxeRUgF8tHzfvSmupd3e5R4E3YuiqPZTbrwmdExSzHKWieP7VpKSR4p8zNwdcKcKaoDPeTBdDDuyoixVXeu",
  "key5": "S6CNSttgDLrZ3aW377RvrSy4FZgD3XNXLhm1YAV6Zte4mye1GqPKDwFA4KPgxfy33oTjUsKpmS5TDEeVBQBkpkP",
  "key6": "5RKzoyWh7m8bJs1Tx3LhzhT1hsBE2bRkBXYr6N9T9qH6jU2tQFqa6Qn9aMkiirRngQ3vYwsyFgRcVA8CBHBha4i2",
  "key7": "53eu89RCCg5CaHoeoCKj4LzVjoW4Bfxtk8bwtWgRzpLLqphx864sTZDdUrhfWEwHkZkBhGQcNwVPN5PD6vKw3Bzr",
  "key8": "2EASRc4PdRYjKZ5FZMmY3TTEj2NXe2vprokH8syZWfSFH34RCRSCYcx1mYJxhehg8fKVbNNfCdesBXJC9bXmHUBz",
  "key9": "2xWRdKRkx8L5AczXy9epUpysuYjRWSPx9jqGU4hB9E3KZqC9jYoHX43HXGQJrnqibcYyxqY74Mbrfw66zxc7hT6C",
  "key10": "42fQSPqiptnbiwddzbSfA3S3sZMsjafj7aQhvzHCYn362qWCDkDYM3JfTYwwenasc2qL1AfM764my1xBmYYGcJgX",
  "key11": "57gZQPCZcRpxjX3cC3BKF4J5cC5D3C5EfTw2M2cFARv1xUhNDkgNHoTciPzq3gH8hwsPi4KagQr5KANnCqKZrzxG",
  "key12": "32PhviJFgX3Y9tWeNULkWugP14VmCwVNMxKBHTKT6vJirJoNx9928heQe9Y7cnVQLntiy8XUEdYjrvUPDkpwYbpC",
  "key13": "5FoEm1zMixdNfGU3j1JnWNHpsRY4w47QF62bBA2SYoMTDHKwV5s8jb1YrA1HrhTwRKV5jajZJwrcnWTsNUFj73Z2",
  "key14": "GrzwpZeUJudYJ8KWEhPjC8KrcDpFQAz87D6xkbQf6aAaSsMUPz8kR3p72s1tniDze8f9Vd3Chmtx9J7CXzmLNeC",
  "key15": "4V1npdbGaTkArJToZrtEL3kfW9BdaCnJrezTRaE8npht2GznN393H5M9fCt5kYoVxiU2rz1smvhLMdd47VypyDAf",
  "key16": "5FMKqxZP5vde1joB7m4Ad5X8FSxG4YRdb6BthNVJfTt9UNautdrEQKJSR7fbotd3KS6F5fMpAk888emkrRyNaS2B",
  "key17": "3QUiGz8zR3Uj8fguJXQ8GXigMVB1C4HFexG5aXi1syPHZVWPFhXBkJwZEDDYhRnZjMwzeguXGPRwFFsBJkFcAbEM",
  "key18": "tyGGYHn5E2eLT5Qwmt1v1dDcy4Sv4ab7XUTLbXomrLew5RZM5cmubApWyuhKpqvHdEwbD1hsEdo7egEoQKwBn9N",
  "key19": "5YFif8VWdumBaKP9TT7V5fUUD9gYpNfjwtSMF2L2t2ys1ZR9x2yr2QE9Uxmi6xr7XT9MHE8k7m1xxXtL3uG5hcVy",
  "key20": "3okspLbMgeYu5frLXTBC7mN5QSTTFifgmDFh1G6YrbDQdKJwg78UxAA7jWFYun9WTGqF198wp9nx5M8gxVGUeiw1",
  "key21": "5RBbbnq1RGRFN9LzDYAsVu32ynqdpSgJv2tjSQxLXjuWnmPozBFmbGXzdyPBymthtqQet2FyDQTWyJVba4U7gCeE",
  "key22": "2yuB9QDdmbFYwmr9icPWVXtdinhRWpN5dsEdrst3ndreQnLRpusNhCRZy5uJo9YKybvx2TZGAJydQVWmorRDMdzX",
  "key23": "5F6XviDiFheso4s3kXVLuzBBFcHwxTPDJPr3rSJsRhkyJ2oS8tCtSF6e75yv9rLHRx9xFMLT32Kx81FWe31SqHok",
  "key24": "31RxfqWEMDnaJJ4KeUQL6dNxnBKpnNCmUvA74rKhNJKaomk2WFnWPZSkXt7zVw4SRJb5dj9VXyF4cvQEY8sh6tZu",
  "key25": "4FuutLvgM2FAoBMJQo8kyfYqefWDvHEkZ7ctu8S7Uqs6zpW6KFA999gBXd562Xo7oebUkmyB72yhG2qW9PQCEG98",
  "key26": "58623v6swQLmBWWBqU4gL3XbrQHimWp6djTp7QCKtrZD3RZW63y17emmaGQ1gwku5t1VJpkPttSXSu2zhHKYcd5j",
  "key27": "5vg4tuWmXqPDERcSNEGetdAnbQhseYumbPv39SDsFWJPGNACQZ9rpAoq2x7oi2aZYKf3kPL5jWoSrrBMetCpqkqX",
  "key28": "B9jnJsDqFrss6BBy5sVXHxjsiHGx3k4yJW5JUtoTLwHcsuBqsYSH17KJZSwY661JNT49LSY9TgRSHcNNnHBQMFt",
  "key29": "5E91fsGNAPsuD9kRQ5A9kpDTSwqdGenU9HuiTbg1FLxZe2UVVUsfYhRrn7sVuaFT5uXWgEwziUNFNNnY3f546q3A",
  "key30": "4dQ1emm1bLA8NcXvQJzYqTGRi4MJ8fnzPxrUGvhhtjaNU22u8nguQ9nMCGZW4cwrgKnjysEaBEBA8XQrLiWNVHb7",
  "key31": "3Tprm5osWuku7VD1hHzNHTA8KQvqxqyMLT9pdxH2fDckRmTbWwNz5Byrq48XchBfCLRzZHqNxvq91hcLam7TCZDA",
  "key32": "2EgiF6ts3YVH7erNtUdUiBp1bhazgRt1x3NERRUnqTzcU1ESkdUEox9FrhpPWxuFYkkEdPGaYMSHYQQyLRvGouJ",
  "key33": "2gB99Fypi1heAcfePy7pLDMPz7c2FDpA5GoyzPno9mttUwgQEDCrGbeQpzMByRdN5gYghF2SaPpYbrQvbiXmnPb2",
  "key34": "dZgCPeB4sRJWF297TKokNRKWus9yAu5e3DrJYvpJGJQFRYqxLdQmiht3DekSVkPM8hXxkGvw1g66wpbe5cSdiTU",
  "key35": "4mza5XVSNo78HVaq7FGY3EZv8ao7MirrAvk7fwKKM7RrhgprWJMcfHU2umDK98SUWVXHssDoe1cFbpmZyYoCMFVE",
  "key36": "5bgsSjJSkMk6RkPJswZBxmVzSSqruLA8XhWnL7GzVoo85x6rbnTJ9U9tpykRKRTpp3qa8XiEcQemvfJoEbBJPzk3"
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
