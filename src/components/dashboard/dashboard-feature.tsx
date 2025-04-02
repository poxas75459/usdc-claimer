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
    "3c9rdegRhQ49bGtKXnEjcGHBLPzSitFri2ZPdgDXNHv4C6DKk9tQTqj6mgP4KNcgV73LZKAwwFMnFfhMG69UiZWk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47PhTkoj421h83oyotQnX6sW4mWvjHnnFohEJgT9PBWmnRZcaLSNnwTNx6Zbi7TrDWHrghKCmV3x4NHFEZYQvumZ",
  "key1": "3MEKbskRTikUMgxuVDd84snezCS2aCx97MPZffnYqDYRzM347hMrWX1GLHS35vbkA7AhbvQgrYWQe58h2VjRWRbK",
  "key2": "DZr7FbwzmUN3LUmxkHtR6pfwhmTiSkNemnU2Za4wFXh3yPvTzqpFEbgNmDADrjLt41qJDovmQViSqP4MddYrzpa",
  "key3": "4EWBq6FTWvJfKuDusTLuehgA1JVdPdPXG1keQCTYt76HenCtjpuJSzMTcLMsrmyXPiztLPpfpsbF3iKqznTZs39j",
  "key4": "4xDnj5jrCPi17RN6BeB2F2JoFa1qkRKWrR8oGDPZLxTtXFmdwkQXwwGMVAUQVpvauW93axkjefZma8G5UJYKgsyT",
  "key5": "5TzRYAF9ZwepNXEVrwMYbyrLBnW8ojxWc2W4L93oMVA35zcZ6sX4SU4rKmZh3Gzmjstq84tXhN5QZ38P87HhqawU",
  "key6": "2p32TqHymQpqSU9wy7MobZQShnz2NPWBARmLQRcKPUqGkZp3DtGVwtrq3zBwmdvYifEA7JnJ8ZRkEgbNpuzj4r7p",
  "key7": "5AyV43kFWSQHhYKygLKWpDsRrFidgxwDuqzjFx3ucoAEy6CQDDaxdCph3JgsmxWzxbGogc2LxrvhZocdB4awEHse",
  "key8": "4Hc4e8iPSatKCKgQ442kTHHSe7dHquaiGRVyzAtRhdgjDriCPpHWcnpFC2hCVLATZmMAHbk6JHGf9NnRTSyaauyp",
  "key9": "3Z8VruChPrmzuawj2uYa8YicAa2b6qFreky547BEw2r9uSEi72QyfGc9Scb252xtD6yX3zqcYEacQiDTGSGjYuPA",
  "key10": "5enUrQkHd1UmkDJJbi44zv6gbc9WqNKctVXHgfimyjCijzYtdL7CPV96kg4VxaNw7SfEiH6RS4x6j4goSGzeTRQi",
  "key11": "54fax1R5s1uXqftVB1xmUHnb76WSGKM9Tdt9QMj7w9ox6t3db7yP1kM9HRdwnD2c7Y7i1UJY2Ek94wWNbW8dXhDC",
  "key12": "chJc1r1jgwCuXLHGKgHUf2yLT7CL4PHup9FkEsHZyRGdQSkgDCfp8eGrVWW8G4tBdHNsgnoGFT3vqft3r6yWxD7",
  "key13": "DbBfjtpcBSbP7qgGuoocdC43UiWn89759CZK4ApCWJSnRyr8mRK8rjbu1rK9L8WT6mhQQ3QfDKq3LoiSWR1d87V",
  "key14": "5CVE8BmZJATwkm7Ab8U5h9UJsbG2o7zfRrcLmCYNy5U1W67dkYX5EpetM7WtRoGSnLoYFSwkB9NrwRJ4bZmbY1fD",
  "key15": "49vW8XfCCHNaGSx73bkN4urNTZLFRBPChYqpsfp5yNQ8uCbSDkdrQAwfxS1GVmbyQgooCoawRqHC1ZR424oBygzo",
  "key16": "AYGLxK66VLMU8v9FUXQUfkyavsotQjSiv1VPt9ph7kds7dK3fGjd6Vvg9u5nqiae8BF7sHxbTxZngAtALQe66nM",
  "key17": "3Fa85CtnMEatBesN3ZHE3p3BCGkZH6EeKYTCMT5k3m5WfqdmSMxrdK2iPy2PiR38aUV7tfTmRkVsbodysczyKZSj",
  "key18": "3vPG3xstA9EnknG8Sr8dWRLpH9Nhec4buEDS2CB5MjLSEyovKGY2j1gWsQiBPxtuHtDVbNTYjVTSxHBGbc4k6Uva",
  "key19": "3vBPorDBKC6tEe168D4VLp5YcaEVcxcd7GhKyCihjo9RUUkdcsUvQT1YjGYhFjPp9igDr46Lgrt39wN56ze7gq8M",
  "key20": "44EsjbqfRPQ5ocBz31a7XRXFfmwqiN2dCHCD5AWpdoGBY1y1RGoVWwjgCAmA2vmDK3k2BkhP4aW5Ytw6Ayq2Prq",
  "key21": "4FPw15C5aTgpoRx9DyTBpufxcn5rrUqQEhRbpsd7yDZFJKYk7wtwDqbTuC3WFALMCzzrm5a5xU4y49PHbqmrAC1h",
  "key22": "JbArg47zQQcwdjD2iJqSUKVL9nmezuCAecagnFx4z64sHaUBKrm9Cne3aaSimnhNxMsJ6RKqApELdgFngscYg8c",
  "key23": "4d5KuRujfrfKWFyR8tpo99fQMDgwj64xnoMkaYi8Zqiefeqgh8EfXLnLoRwPZtgbdmnFja95EMkzzpbYL32XukFm",
  "key24": "2Fdpo7ombYHozy9M7b5buky9QzWLLiTT1H4hw2Aaaqv1g97fuAc85ru6iMdhq5DoswmW4eYc1dvahGH31iGNchpX",
  "key25": "539MyaUL6PnPFqKc8aDAbZR2bjkSNa5zPzt9ohFKR1qCFFyNtj4TnDyCoLy5RX5mgAzgB98f5uPJbuC8WinpgHMv",
  "key26": "47qzfK6SuXYSLHquGJotmJir9RHCBMK3FBARrpwfLckCeb7V8C9syfJY7ji4cRbFDfZmHpkaZZsR4DT5WrNs1ach",
  "key27": "5yys97ym49ruwHqhu1mfQfgvFYoUNdZ9MdWuzjsaE4G85zzpdCVEGkPDiAJEouNhFvzsvXX2XaPWRfj7HnN5xPmN",
  "key28": "4TPpFUUNXnombUqeP88epG3Whu2NzJqJiMihb158eoJDBudNXZSK2GYGteBtRMdCL26iD7WKge8zguDNRMNHPYV5",
  "key29": "XxcHw5ZC8upeLLFegwH8hhSSdkxgkPnNMJJceHBCoDYnta7pp17SA4tawhvX1tUbfzvyqjxdg3PAbMpwS9jQGSW",
  "key30": "RN2jzqYdb9kaPe8nfEX4gFUWTtkVpVREK94FBP198mXymedcjTPUKy4pv612dF37a1cA2E3xrirb4mvpDVkhFNE",
  "key31": "2PWQXfK75KJAtGnj1qUhnC45SHe89yPZUMpiB9w326AQWB7LZyeQfchEiWQoAHpnLWDZ76AqBpbuZpptqfvLjteM",
  "key32": "5EhR1GPKzy9P8PDjtCD2ovk4jS7jXA499qZUqppwAjE9gNdbU6KJNg4xZAV6KaEU8N9dN7KPD7RaFizp64nxL6ab",
  "key33": "29k8JPCAGiyo5c3vWBqGSNHq2wEKs5ezkd2KJXk6MEZnLG6CpUWFbPbWTwqs4XPoeaXKQUTFn5XZXCyqvVaKoPsj",
  "key34": "5omZRceAJtRXF9PDJUriN88QCJS8EMZE4pVWqiKbKPxdTx4DMkemh2bNQh2JjdTQx3zfX3UsyseEgeA6oCTZgVST",
  "key35": "5mL1amftrYTUqmF7AGGdp6rXHkGH4RvTNBxEx7CpNtYhyQD3a16oQSk4AjvPYqceVCVXqDvJGnYWoXCpmW56CgEk"
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
