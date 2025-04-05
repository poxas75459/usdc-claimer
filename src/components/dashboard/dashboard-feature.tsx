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
    "2wTveHf9sQ5f8wVfQ2EkbfLcy9TPFJ11VpmxEqagVv2DxchpcdeUJKSEJqw1rSknJNVJR5tks95ac2SwGB2byX39"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22m4amkSvPBKxUnkrTV7YMbgbQSuPQMcQKd2z2ByA34FY5ybuRFTuj1K9YFR8TdP5t4vZdYnjXcWus23URkhpLzt",
  "key1": "5zcuxPwZSCqm2U7BBWtsHmhGM4i3JDD8RCktPvWAyMJbMHDHK9z2DZGbkqN8AvcAbdfv1cEHwva5wuK4F8kpiFwE",
  "key2": "kumnNfxXRoYmgWnBoExU3fQE8fekkuG2hutusvibZak9UJewG6a4gNUvP35XUvX6oyiNYtkz3TDzRL3ysmaKFHE",
  "key3": "4zmpPNTEguzYpbw4jGC4mVzB3ry3xnBCNVfKncWNbawTkReEpozJueksegqeS5dJgiP514tNZvXGrK44dkxn5x21",
  "key4": "5XhEoKmRnHCiXQgAN4mBFUy1mbyZNEk4RKbi7vDjxyAugqhr9eF9GCbR622bJbXnju4L18zoRSd1wJEmzTXByShE",
  "key5": "3KQYXqMYw34jp8Y1wcAAxQeYWc2opDjJ7WfGRa8SgTBAMAMiM6cVeN7KnQHZcAXaf4WijwsPrHxPYDGwX5PpaEQz",
  "key6": "4rtfqKf5kS9ysFmuG8REv1ZcEepQroZ69Qvjo1gMeur7z37BUnsAW4f7p68XzeKykUNuVgsehgNExcp5KTysRbHG",
  "key7": "5wFESabGQ2gZsUGUjorApjhdfwuFKgVHw2B66Yy7TdcwBU69VfkGXoVusexmXCRY8Gp9Az4eZrsxaSqPgGZQgyD8",
  "key8": "2fBUhRA5ZqtWEvkK6sofjw1nb2atiSrrz63mPq1T5fEa1HPpwSF8t56c1aB38beLPBNm1DHy3vNwFwr54NUTtJXj",
  "key9": "PmXiS4A1Ezns1to8Jk6R9sjoes2iv6RJmhiFdjgwG9mvazdbUFMP85x2KVX3fbvtg6jU9ZZAtS4ijunCBk8zKPx",
  "key10": "2ZXGPspfonXtdRU9HFwwjt1wfrVmq7PqwzdVZwhmad2B9NrJ1VPBTpxViTs1ktRY7GpVunLT8FWBofr2mWVAr2qE",
  "key11": "3ePjrPMz61GPd8tWUzFGrdUJbHuNTebm5YY6MqnHyqxEjVteuPJDZMouJH3mhuax3KXkXbyjttrdx69oqaWGB7rT",
  "key12": "SPz7fWawVoDbEkdNjb4p2w2ihgFa4H72WCE8H8kLqdVgA2fyZrsFZPYZ2a5fiFJr7QRE3vzZ9hZhhDPA7qv2zSA",
  "key13": "3bXANhBCk3LA4WmNj5KtNzWJ9hYZcC31tJHiomXYmrzKwd8QmSgTwooV44eCXoDzgeLuw5X6gdgQBnpFuMigJ9DL",
  "key14": "2TzQ7eks8q4fbKjJVpJqMiLNKqAYwbWsFFcCxZ4Ay6H3V2seebPh2X1NmH1DMBZXHfqwfrHq59rnUe5sSmveMDE8",
  "key15": "59Ch6mpiUs6kcwP4grPdHXK67gwV4UNrGbg1fDAJPgRy5iCmDWhZhyQzMb4JrGwTMGw8YuzH9pRGqRH8c8tm5qcF",
  "key16": "2UjmLr9piDx1pe1bcHccJxxv4EuehYKABEamudVh926G62t6trLcZx7c9BErrMt38AKpqdVy7AE6wqjgVajrZNKJ",
  "key17": "5JpqUg1wEytzPjN3oFNDMoxCokv6rhMhC2jEVPhq4xYJ1GAFkXfmg8GM2hck69hiiHU54barYSeAYRBmSLFhErgz",
  "key18": "57SbnEgbujzpJGVbkAuieSVUaAv8nR7cjS1a98L1sUTKyHCcZwSBvSzHeLdRLQhqddRqyNiGRVWvZvmZ1V5RAJpe",
  "key19": "5o6ySh3r1Vi6hVCSX3eWUDmppX8phkZRUw5r84Qki5sGvFQ5EZhdg8Chx8uFeYJ4NWRRcKQchaZh9eMbo3pSp9Bb",
  "key20": "4YpZqZgwPATi3dp7nihmCfGxkmu95pTvHvBszZnMnaoymZocyyFoKCo9aJrYCGgYSSjYP1qCvZPTEeLQfGPZLP5K",
  "key21": "1sEkRvj8bYZk95TcC23da3HtAqmVs4Xr3jwFPPSnmVS6TFWUjoN1DA52vKkywfK75EEz6ZmifUf931uYojJbgAY",
  "key22": "2edhAzFUWvGMFz9wQrgPbZrfWnZH87dgUAvUS7LWRrt8LgZhfYpTvtSALDpit5d5aefdR5ydVxjdSLshBRzLGii5",
  "key23": "2UctnHqmk5mwXXWid9hy6tAdcnBkjN6oqxasZMQzrbg5YN2az4YbBombBCX4C1Guwn4t9QF1y9vXpUtW4XK6rzmA",
  "key24": "isNqQvrtMexthLGzzoTJMHKPKm9T9sXy3SGinKwc24sPZQSbqsZeW2C5irZCwCnkZt2Brzheu52BPDTk5GC5geC",
  "key25": "4HxP8QPTUYnhTLQEZRVmEnbpWWUqTiF8Af81DpD5B9rowrowVAhqPnRzkt89HDyuDPjrPvREAedjmWZneUXooAnz",
  "key26": "5kbKRpTLvtL6pocq1U9Z4qWDbDG2a313JFYtNhF7SPgiVaFgGS54PCsZf36CSyHetjMbZxLvJwXmFjqxmiK3qmxk",
  "key27": "2LuBeKksQ8vELgD28o5a32Vgmhc7pWHWsBKB1aTG3JQMnuLKUu2yRbbHXPaCKnBJKE53iwgy6RANpVSjpykhgJSw",
  "key28": "2SHCnFciKYKtdw5CXY5YAmnR8kHsd6XRiXzTg1dA6d1xxeLaAztKcSAdkF2dEpUEF1uvZ7UmS31zKN2XPyPsWfoc",
  "key29": "5pUbQmb97YdHKAyABdgVptdnypRQwqscB5zfjXjhbgEkY6ysaMkx3fs9VhD6LCgPGPXNb67KhsNLcjmnK1K6ihMm",
  "key30": "2bRfAgoUnCVDWH2q7d171zcidSjeDYskvMCcyHyfankFMTzB6X1pefs4HP3vjVvKJBuYbb2mPnvebjTuytRQhQam",
  "key31": "j3ZPEGXqJGtbxUNoeSFwRqvj2GvHpQEmgYfNySAs68BtX2kLZfuxAzNK4AH7xwYVnCutbPE5ysDsXCkXjgEH1Bh",
  "key32": "9jKfoo5xagdPdwW2CS9VMbsif3vDCaddUyup22e4nSLxiCYQ4qpuNBbQ6aY9QBx3WMqi9iwT4pc5whYvTyCbTSs",
  "key33": "3TcDY8KthWAsKXAvyeWSzjW9TVFeb4FjEYijY9LWiwijob3ELAG3ULWpjE9zLNq2swa2URmYjbbWaGKqVxaEFwMz",
  "key34": "5m26wVikRUDKJ66R98GGLFw736SHC9EPfqdX7EJJuURwU5Lo7eyUpi4NYycbzZJ6wa9xraAS9B6op4XRiHBD1QDD",
  "key35": "5JsjS2Pc19RDSJDEqGFQEULDpzpfhv8342GiBojJZ5HXaBrbT3DfXpZuoRiHMJ2psDVxcooLhXvgYZSt4ckQdrr4",
  "key36": "3tMzvknmVP1jNVijKW4y9P5Mv3nrxRtZX7K8khWmhYsbzgGV8psFxKMfFvwwZyFsGikyDEv1xGKHZe1MMorsFxWt",
  "key37": "65TX9erszVcd5jkW4rjyBx2FZ2Wb888woNPWs5ecJoTWCEpJzjFUgP9FcSebEG4jm6d6x3YqLvrmJiKMgvBqZvLG",
  "key38": "5PgenjZ84tPKbZNYSiu8instJUm8NrRj1aJmLho1gNcD8z682VZz5UBmVwwvoJr5A8pHYJcmTN7ZRmsvmXiVgRSt",
  "key39": "5b71tLthv8h7ixS74A8K5wAK8noMe7148wfKAowcAhFdPuSZ6dGCU4wdBpDD2w3nzU5fVCzpXFoxk1ZaQJYM9xrm",
  "key40": "3KciZp5jUC7YKLkmBZP4aXpWvPeqw1B5jiYnNdmpLep1TztiGL14d9kjVa9z2hgADXSvLZCYwiDRV4NbnWhygknZ",
  "key41": "5ZuTLeaFVgLU321AcCmqatTt1N88tVVzGjweaZsjwN4mEZud6xtcH6ekSNhK6A5U3jS8qQHFcT38ShRgvaLNf8cJ",
  "key42": "2i2HbgCeKn4MkgwVNJ9foZ6pCrFkTNGWT5VwV2wuVPhHZpXuSvQ6ScR5ZRrpFy65Lra2qsw9UiGf6dWXbSyDbCM9",
  "key43": "3VHM8A3CXshMHfacfxskZT8T2N12mvmfJzapdRChgphJcwrY7wrMYPSU74nQjHx56gUgxzA1kgEV6R24iqPobcoJ",
  "key44": "45iSoaQaY8sR5DHseyUKX5Kdfe4Xba82K5f6DwTYXQewUggR9ZmY93CbeSAAz3Zt2V6WuhxLHuNfopDqs26uJkM9",
  "key45": "4DdGezGXaMgknxBfDwZXN1PLPntFVTt8JHNvUc1cAAVvMmseYFWoohBPbhdoBD4DdbMsuLEv7tzkr9aY7s61xuZR"
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
