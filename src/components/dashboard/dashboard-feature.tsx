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
    "5BcygzjzMkNzsuPerrLgpFNZ67HHDpN5qoXu8wBDDW1m22wR98wtKbHL2SuybnPAALZ41H9hDn2JWui42RZSoNRt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5485YS5sGYAYmPSqSbiAa1ZkGNC2Q5XUD3QndmQHUWTHWoXQVwe3rvxbfBYhoXG39udRU13FGQKbqWHSD8jWjaGu",
  "key1": "CA1TLAHHhJPdRMDNHL9XoWowkyU8jNYRpXEqSJPMvtudHhxYRKD4CyYkboGbK46ccaxowPHmBCE5VwVQaS47U1j",
  "key2": "5uMADfSR46Eo4RTLbz1yLdVH1yZG4G4CX1dYjYxhKu1YSR8cXVtwi1rphtYP19Wd3GTTjDfR2ZepRzjoQGEEodjN",
  "key3": "XJvbHpmkKXZxjneWARfpnu3KJQBfJovWnC3wMKieoD1Q5dnSLAwrBobDzMjhu3vNqHXMXmTFDLGJPx9UgWiUzXR",
  "key4": "3NDWrdAuuWawZha4x9TTVQRWfmqiUj8mbAVdqPj9wK7LtL9rrbrSPTFaMk7MuGwxzxKjcjWTHzP8s13vnf5qqgoA",
  "key5": "365DxoD7gPwa5WUApaYWBhMcNeqpRBA5Wu4G3BbRdVdmgH9W6MQzLGZ2LUPdhjkn65u6umRUjTL6sJTzhZG3FmXX",
  "key6": "39JEoB8pKXWWd245xt6asBE15x9xaq9YvMkxwYkHG9c616kw2bCzUCfrMYQx9qgVzcMWDrvCrWkj3qTcnz99FAxo",
  "key7": "2bgCoSrf3VjTFKiiR9beukoJPdQ9aKeQyupPaftEE65rtJ8APHVDgyJv4PhxYT3BtNdyEhFDzQY5nBZd1AtjKPt7",
  "key8": "9SPYcMNr13Ycm8N4bHAnEoiDkYMEpqmKEzrBhgCgD8omejhkCwFfxPJwtVbjRjqbWfmFU8zqE83EM5E7XwJQ2tK",
  "key9": "rdahcgkLSaPwn9SxkvY4UA566Ax9HdyMCNpmBXUY9KnYRcWWuQpMPwUU1rjzzFrH3uy8PAkrCecPYRL1t1TfKNr",
  "key10": "pGERSHDg5PTcwhUWCEuqemkufpPEPyvA7DwtsYi7PfiEcDXPuJ4ye3dC97tDq4iPPfBRCzaZiK515pTEhLRh296",
  "key11": "3wxfLhwWeGrbTCshbJ8KFKWpXxWzY1Q3CPkUSGCcRnVYfRTCwnyrrtXiRP7w1MXkXhiYZX6LsUqzUq8qoWGETpcJ",
  "key12": "23mx5qWHAuhpT3ziqzMhHVZnrYCuNuYieDL4UNjPtA9XgUSrEFNXoafShTLxjsTgyB8Z4xa8TQhWw5cXevEWPudJ",
  "key13": "4hjuxn7bJ1c777jGywW2ooCZNJpXTVdEmtuNt1V35QfAcgVut4Gggq4Zc8jEgTZ45kM599H7Vqfm4A91VuymmCEt",
  "key14": "3U4KwEeikCVHP5ztpAM7YF3WW8K84GPkLaa4xeMasdGZqWTJVDsVbZfZXBLBdZM5d1TJhoXvN4csGVrcnuq5jQvR",
  "key15": "4LJHgSpwQjxw95UDciPEoQJR2HhRJKQxK1WAw576XQArwvEyvkWmjuHLjnUqu997d4xNaRE9cFmzshpYikLEq9d",
  "key16": "3MKQjnbxb5jRS1JdHbSRtZZpx1ZKb6BsWw5vby5fjSXJuuGtWHBo3iiEAQzyGZcFPM3CzndhSnrnLWdPwdwuMPxz",
  "key17": "YYkga4uCXXKbtMSFDsLyDsKBHdyWRqFKtEtxQYk5D2o4NL4C3nkLXREffHN7jDQNAXckYL1p6DSXqydVZUznkzE",
  "key18": "4NBtUEg4uDRSUJ8KgxwXLfoqeXhfmVYsnLwryRuUZLcC4xz7Vxgf8J378ZEUT57GvNnyJx9N4uFyxRhwC9hCMaZD",
  "key19": "4z4et9CVbyoiC6UHJbMBJzw2zNkHUCX8iW4chH24mDvLEJCgZbd5Q49QXxgASnLAC2FrbBMv3tRuHHniXq9B7GWn",
  "key20": "2V48pqtKXzZ9UtshbP8NizrkBdVSQ4w9xhUQRbYvXzhc4KwVangpm2C5JtxRW8NqG3ZstFe9KsSjTpiND2wyvux8",
  "key21": "3bUJQjEuy85JwJTrrx2EzWA3r9ncVqbBabFG99sjJhntKCPHrrjRVeV6qJkiZbh4uhngkLQWYPvSvgSQEDyHkHY",
  "key22": "2JKir8wD2L8WwmCXbTyWyy8iuTcW85h99LiVpTPRU7HwZMU8r9kTCjmuM5NhFn4cp3C3Uz3eNV1gtFfhU4Kx7ZFD",
  "key23": "RTL4o8PuHZTLN1ic5iy8eP5gTp9n7PzQbcwwGvPoE5gKxaHh4WDdTsmwMEKvbWeGA1Wb9uCBxzNQqyKhAgZo1rJ",
  "key24": "2mqXvW3nsnR1PqswCsU9nvU23Sa9rQVMFHZrRJaohJkWH167MZgbhif44izMPDAkBJ9wTYvJovkxXWvYrPQ9yPmn",
  "key25": "4rDJcW4LtQjZdnC27hQ45FErGyDyPpEKo6AkA4M3XaaPWczETeseDBDbV1VPRCLr2dDDSzN6baha8gzDmFviFqYi",
  "key26": "58WhePTiqnJug4wyH8d8Ueu8PQE2xvEVxzPwYaJJT6aVWWnG9JPnczx6G4F83U7Ct26JXi59hhkA3Svufbd68iPb",
  "key27": "5HnFLRHW7o8DRFWaeC63dt75W3o7NaUjNzbshow1pticfg5yBfsCF5NsNDLDvApCfirzCzu5WnrMxsPXa5CnaWMW",
  "key28": "eoF9N8NzY32UxiEC6mxMtnwitfj5VUF1urrGwL8JU9X5VpTLSFrCfCRVt6YdMXggK2d6nQE7499KWMCZS4QiHpP"
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
