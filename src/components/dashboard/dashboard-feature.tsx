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
    "5XNkhVnRRVKcvZYampVdLjkV4dyM1dWeBG12rXUMb5BDSWgWUy3paanE465CjWpdV3DZ5d2TcEp2mUpXBW6odZq9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3JcQhSaRDRVJAtGKr6R9LNoY3h7PhgoXWovoUn3QiPtM7Ra8g7ywisVzVE1gkWosVSqBPueixPrcm8i7tN3zoFaQ",
  "key1": "2t1ne52P8TyD3BAxpwArzKvbD87mci771EH9ASje3e6XBbgvp4d7PvfReHBoBuSGH5WCCHHbdcU8PUW3nd5p21Jo",
  "key2": "2w4ULn4AbaxfdXNQb9Vz8Ze6DYxYCnqjgxkWcrKdDzFqCwbgpgrgh43CTLsrkyPtxA5WgG4Y4VhJEmmhedExkz13",
  "key3": "36yV8wkvhTf4cFsgPGy22ULy6rAxETWjGZbjZLy6HCQN9zrdDzZtjxkmamLRdBPak8fCwd1coFH9kyWWxaTTCZid",
  "key4": "2myFJzfkHNoMZAtMziitFsm5MeBrrZtHSTrBYukESgGQBBomUs6vrkfQb5WEPTrjUD9LBJ3KArN89fA28EE1bm7p",
  "key5": "3xVWEcgNiAKwdh9Qw17Db2sK6xSZc4PmhZ5uCmneE4zFbXhkt4ihR3th4uwk71CMnmP8wJCGZspqDimcFgmAWyE6",
  "key6": "PrwfnpBmrUTPV8kNG7EBpYt7beCLEX2EYk9ndfJRMcnzyuoYhuYKrBhiDLnv7cjeabVG1KRfY2ftAeDXWimGBuh",
  "key7": "44kTTjLDm8VN73wq2eBNg9GnbL1sKbGu8XzsVdFWn8ywaAh2GEnrG79ND9jJVii9AJXbdz1Uqg9JoUZBcem7XyQ4",
  "key8": "4PVyqdsLU1C5gr6DTBpRqqQz4FV3kU23LVgCjmsZFpq6rye8oHvChjmxXLaReSoxsK5rLqhGun8V66UpEc4ruTdg",
  "key9": "52Uu4kgzjLHS4MhJEQYdwRvMhr9NVqBi7qLJmxhEfBVzGT7fSeMNjvyUEugukSMuJoimDtSMmJuyaPQ45Cqcehm1",
  "key10": "4y1zYtvsSSr6UQPwfPi69Cq3hcRwbbfJaunYJhSqjU6rNvmo4CfddVLwgKjrEYaY5hi86WMKBu72Qy1m94cLocST",
  "key11": "3rhcsWwBMp5xzMTGSYWKDJJUWP6mP4Ddovv4K3LWndVhTEy6NZ9KM7uLvBQe6qjHHiSz3V8bgwq868Zm66FcU2m4",
  "key12": "4hZCbj9XtF9BgW76n1sW2AmfDeXfA2qzo2MVQzFaPK58Wpv3Wk2me2aYJ2U32Yynr1Drag5dYrG8u59Q22UCfuts",
  "key13": "2jquMPtX1tYMPPDjhwedSteBPf8qoUocRinx3FGKM1KDCL9BmsimrUox9LmvMGk5jYBNF8gaywHcEU9UEwFCJaV2",
  "key14": "5Qx1D3t7GaAK8EETcfwMf3936LnhthZkGT66t51HDv2KSpaKwcsDswZu8fbkzooJZcTNkjjHjXsGK8MzTfTSeabv",
  "key15": "3jjxBGtTGebARTEkk9LHhMDvoRtAQXH9RxLwfRLJSnUuMBM8EQm4hbwp8PmAR1rAJdyFtstwsNiH1dm3gzJoc981",
  "key16": "5gGFrbjJCgUNQVAFBFpZDay8JjQ5ebBpejFB4g7sn3P77A5YBWFm4aDAJog7ibx7r7f7ZEnYpWnd4xTiTMR8ej29",
  "key17": "4mzrfV9tzyY1atJv5wz7DmL15fU8ac2tBCdC3i2vqJiUrFuQ1bihbX2753fZPeKEFDeCA5vw3CX9hjKWW8ow3aeZ",
  "key18": "3eWT9pW7FFnqXoqcbovxQsBiUiA1fREjW4g8qgG7MarTRevu1XPZ9oh4kP7DwrQxZGuNA4u1tVWJmCBrtk9H34rh",
  "key19": "2RHCJi3PfPtnpFB71HSibi4p8A5XFFV7Hhbk9ruDc5NsbuARBf5cJ1pEzKr3LYUvje83MRFNHug455Vg8pWDKE5L",
  "key20": "3yvsCsPRviS9WCwMcxf4upgPPoN3dsCkmwVcG7sh7JzGCxma5t21pCoVdAR6LBr5Qh2o4DZpMad3h9FNBtySGfdz",
  "key21": "5C2YhDQG2X3UxhcztU4RowqDZxy3YeqrX3jxjUBUroJk7xsTDZmSCiNSzguS1inYot7tRTn5uqxgQGdaC9x9T376",
  "key22": "2Ag9dHyZkm6RdtiUANrqKmwAJM3nTk8FAkWT5TpY1ChxhRR8fyTmyDMCKdxQ75J2Yvi5TX7gwwYAWev9pHk8XmRB",
  "key23": "4UDy96V1p1sa7ADVPyucTKpp4jZkW686wi51aXVfGUxuAQJRhBvJ76oqYmcaQ21LBXW4iYasXJEs24t15RwLRmKw",
  "key24": "34z5X9EP69UyJNt9KWi1n1r2j2RKseLZ6JVEkbcPcJX84CzY5ZbBwks3kbqBb7vDiqLemqrHSV4Unqb24QMfzTTu",
  "key25": "5rpnXPThfveV19xu6DzSKtkFGp1UFoWB3payeVAsVuPyt8mqjo5ijfTaLTsHFEWWdznwtXMXbaJgWqady1ziuYPJ",
  "key26": "4tts7ScpEhFGbhPKzaVwRTewJLXpmpFTSQdeazArAdxsENMk4QSrH9QcSvHpctCFZzQ4yuVky69juSkGCjrbRE9X",
  "key27": "5a8tcBvneWA9yd5DGJWt6k8iezX8gHCHzG3MK9qRd5bjmtg5LuHTCUUjGTscpL3mm7yr4AkewUrj8hgD3kvSWRWk",
  "key28": "4TQcXzT4cX8U1hshZdH9ELGxYxvJS6GWYxJUL4igjeskcRk62WD8SEaXWbwcNJQ3wBQ5BSQVocbuV4EXGpdzpxyS",
  "key29": "VNhZ4cwKkwVHdFUysLUb53mRzB8pmaFVTssXfbBhsjFccDeyttdsohY8b3kwv2xUAvrs9nqzP9A4WV2vSTJfVgV",
  "key30": "4HfLZeAvji7btiRwJjdaVHgkxXEEe7EXhk71LNmubHZMwq5f8FHq34w1caf3jTgyF4fYRKEjAqAcgpr3vufNJdxY",
  "key31": "5PkgcaYsXySdRcX4oktTvM5Wgd9Yg7MsnRm5CNK3m3UACqmnJVJPiDAd4itbf5g55s8Y92BQaPQrhMDhX175evFK",
  "key32": "eehdZ4RX1zPgCW6uGwHPxbLbNPpw8K5NJH5CqDDLKzMYSYfC7uhKknouTXLzatKEBuMwcJghw3ZYkUn1bFgBqBe",
  "key33": "4wFKiy4zjFQq2Ya4NwekWW1PQVK17aaHoejQ3wmZoJtYtRRsZrCyncXRmNsMcdX3rr3MvjbhwZELjT8FAig5BQAr",
  "key34": "2EMKYT93Z284C1S9cns7WDWnVbqLUef3VvUn7CBMwvZVD71hjucPkruswQmrMu6AmcnCU3Jax42ZAT2ATvo5pTfs",
  "key35": "2Z4XrYMk6xcnMEinWSV6FW7DS6UnyEQhoUTPBbc2UJnpqEF2rKK6sh2Gzzzk4FLqec3b8NCUzm3c1zWa66Nqz515"
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
