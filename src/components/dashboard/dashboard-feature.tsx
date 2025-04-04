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
    "BXLaSGchEkf5HbwgeATdXTorecR9gqbwt3RSbhLyxnxRi3MEiXu6G6A6XBeGJY2oSqgqDuP9627LKYcNcpciwND"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Wgb394MJVeAtBwcnTducbeQJGpoKeK5cR4ZCb3LPZT49b3ZnNA2XrUh3n3YWBmKqVaMZGiQ85aBQya9s54Cfyuk",
  "key1": "5uuynX2McnTtnYvaMpbwYoozFmAGZ5nEjEVHkNY9vSnQsyASAtoieEM6BA5McYAkpVeefcmx5BmmGX6UrpvsfkXi",
  "key2": "4H5p6ZQjXF6VDTpq2PcRPjRxvhNbQgHBAxLn22NQwTp4tbzg5bgHZ6DQZaSTpZNptDKopYYKo6mHWZe7F7JpCtts",
  "key3": "63G1ezpEfWdPzzzBFf9qL1NVLZhPXE21K5cX7ebip4vWf9UjeNhhJzkjVpoUkMmrGV6ybcbF57mB9fNrzW7bw7Kv",
  "key4": "4igstzoVexAapDNfKvhL8wZtnU14EGbpHiz39UbtGCwjYj7ysWMkgXo2gVaMAp3PMfb3y1hNLPgFXZm3FG7w21tx",
  "key5": "5thJQxQ9uCGVrZo4P3uadQc49jwifQpqMoMxrUipp3Jd6bgcfvxwu14CshZY1sKFbwmCoKazReZifYmKb6sF9Cm8",
  "key6": "3gXBpK9QFpYuwAh68UhLPDC6Arcoytf71tdG78ZgaR4NLTKXEQ4ViCszkRxuiwbKj7oUn5ztenvMbe5eTX27iVAf",
  "key7": "tM8n47GHr4o9V9aPEsC9WJ4wytXRMajNh9DyWobJtwLc8iAGsb48CdExMjrm43Mk8tXMK1ByroufC2g2va6UReb",
  "key8": "5wxQzQcASmf44yPADpT1NTxJQdSKDsceNtopkmyXDt4Vu9YPwjHwgaPKhiLVg646bMiqAxn8aSzUeUo4wwTduoRW",
  "key9": "2EobqgDGjBJXhwCyynRCSknHXJsoSjc9R3K1DXFQbVT2ZBfaDBgFacjmfJTDvkdJGsGP48C5k7qND1tMBiTu7znx",
  "key10": "4jMMzPZctjcatHKTRKbgckhRBfGV2k3TKghuXrqD3d3g6megcYqR4xzJMa1Xi7Nn1FRRNeiZdnwp1yHXs8AQzrVE",
  "key11": "4kGVY33b1vhCmedKXJp7U2HGD9NHZEBddTQg8tmFmE8SJCm4me1GEjHmUNrnjaZQtnAzv7MF9KZooeSxUsxfMjmr",
  "key12": "YmcHNnxRzZQh37xE7MbR7CqLAJpG8hGUYRZz88HtrCrrecQ7egBgoney8nbQWFfDPBgriG44ECUuWix7FgJDhC5",
  "key13": "3o7DJDwRxpjF3QbXbg6m83dpeda58FnsDtqAWSBDYFhvWY567xZsHoyKmEYnFFZzwQGDduk93GZNZUgHfauSEnDk",
  "key14": "59MzeLSFsS7Ln5LAWJKPeHPTEV821VSMrsJXB3ULm8g68ibTWMPiJSUudBTMSE2CkWoJYGft97WxMhxZXwb7Fq3s",
  "key15": "4s9SnvJTKWD84fzD8HTs3zA2g3mx5wNv3p6VcGbFVdMwGGnPd7MSCc2QUcbS4PV2Cam4r5waHNDs55kMBdVRgy3g",
  "key16": "67AYSzLGLpPN49nhEroUY3iiWah3vbs4A62s4siGLUdR9ps43HkGPV7aBmked2mmBWS6xdLVr8DLNvz2rkjHA2Ln",
  "key17": "3ZvqQVwJaEbRZsPx39sHab5BYTC4BaHr1c2i8VYaUBvh9rp7id6Rs6s2hJTKMNSGCfp3Fxr6XP7GNQFaxQvNseUL",
  "key18": "LDiXjq96SFsUj7Dzmqf4ytCCUysYpyoqZbZh9snw2LhwBPoZpbf6aNjt7USMEygbfKG57ook5Zqt2oDLE76xkKX",
  "key19": "3deRvABoaomm1wygs1xtp3mWS2Q36hRa8CkbJ1YDLs7BDtxx2eGZNC5U99ZK6bZzc3Tb6vqAyvuvtXXTQZSxPeS",
  "key20": "5JWxyueFXWmEVRBjAbfQU9soP7yXPwMBDfmFJXN8A4G39dJm6d41LC1zZMVsyVPVVgEVgtZfmhRK6R9TfZr6ZGKA",
  "key21": "s9jXh9HN4KvjSccUgs3NTRsc3BjQc9EvaEGMsKBuVnFWrHisCZyT2Bt3gHwh2xDVQhCPKnDYyYSE8KhjwJ6nfJq",
  "key22": "5bmbHUx6B9YTnMpJ6dCXvUDiB9ipuwvjuuXth7aEcLUSknUJ8XCbsgZo1VdGwtHo195WfzBtfqy1pWbgJ54tMEDR",
  "key23": "5wznFDeZ683hxjdKWfssZXBoaeB3QL5CdKdZxsVwNbSTkrkLgGCQxtYEFfvybr1PRYzLTtLQyrW8Qqvv6SyZzTHu",
  "key24": "5v8ZMJoxtASDjtwbUF7F6sVhQ1KFhFrq6JBDNMs6kfeJQg9Ya7ENxj9zaigbYCaCwmsBaZnGm3EvNe4mHp9RLTg6",
  "key25": "4wwN5oG7JBsbooL7E8RRyginBLnahbPKPaPddxW2ehqSjM3DAzNmLrZeixzPKG2iNfpnwakLbRS7EytP5QoWgWfw",
  "key26": "4s5xu6omGw98JpprCpsBMWnJdFJauxsfw3yT35EUwZb3qjEFdv1XAAx5Csqyd5DJbc2pNZYzHav4WEQtwfYzdno9",
  "key27": "2paEF1Z6nMNtjSUvkHxP4gu2CV9anStLxkfMHtfncszEtJrMztSuoeWTmPnK9eJ2uk9B5ZkXDi1KzouCEhtv5D8r",
  "key28": "62A21Nen2gB2vWdL9xmpjhw2oUkcETWeyUiJ5v3XEAomnh5f9dTY3wDyGF19XkbyiMY1CBJt3HqHBocWaxuGkxd8",
  "key29": "2aRTsqhaQ2xL73zy4FoWYxWqs3tqfqqm4CcCXQTqQGyfW28QBD3R2Yum5ojSNaRKuePoTEsUre92FY5mwwvgMjg7",
  "key30": "4QK5ehA1mPbpqJ6SzYhtGjUnFBpbz7CGLXHZoRcfYHapSfX3yDyjAPAbEfPy6d5Cpyna1mMEQjKpKYEH1PYCfXLF",
  "key31": "NmKpUALbkRMR9xMcAZDxCS6P9qbWjsiTNztkTPFeidsD1oh1jKs5Eak8ZLwKdBzvbo57eXzJcdN6mceXzLrnnAv",
  "key32": "4H8tneLysP1NJfr2zS9mzZaMoT5Tq6CdhM7YbSRNRqmYXB3VxfE13QCynkhKKPKVWjinasxqkC68gP9vbfXtJHdC",
  "key33": "4j243beQQDMk3eB7Gn1ka4g5UPCscA1NR5rm2KTbT2Lg6dEE8QsvdDh51mPQVJoTwtgUitoNtwFoyWHSaeQnVAT8",
  "key34": "4VFxqam5aB3V3pL4kgAETkQw3E9m6ebguLAgiZ25Jd3iR2E3rDUxunj1M2S5HNiC91kKtsSJREY4LTM9P7oxrFUx",
  "key35": "3G5C9TTVHFgD7gsJ5Ai4mctKdXNp63V9ThSU3tvjxjUXL8tpBEDSkDnXjd5WGupiSPf5VwWqvmyJbYJmq2FFJpy2",
  "key36": "2EMsGe5SHQLpN77xN8LURucAHWaszMEmgUmj1oYAPY7SijM7fMAPojPdkmY5EYxGBewXM1v9Syec8KhoomoHxw6E",
  "key37": "4xYJwziHFtV4jPH629SyKPuubBigCgmshHMMuSm45UaLQHk2bQeYUbXrS8W7v9a1PpExUntjSqSwVcwnEQGPjHyi",
  "key38": "LRa4wboNhQc4bahYr3LjE7zGK6ffAmazYtoEiQJ9dUjEgc6GKMxsXzJoLJ3FNZVn4yBgyG6yRTLaFtZxK1kEqZ1",
  "key39": "Z9KdJEjdf9Usv3u5nXbuTHh568nbiY4PinNPP2DaD9xQh9cALmS94MW631tZksYfmU5EbUeQND9EX4t3ko7THYy",
  "key40": "4DbHkPUDE2huW7o4VhBXDyzvVttWqeH5FgWh56SVrPdj2duHVvZWytwH964k5ivpC3sX4GaEPmqpoGLVVqJe5LAq"
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
