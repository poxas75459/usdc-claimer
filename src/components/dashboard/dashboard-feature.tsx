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
    "2ZKEP3KAZcnw3dGp38fcpq6rQsciBcroQmCx5DKq4JYW79pkn35GsRytsVLKmaB9xxU8jcoj53nYjHScL9TjPxPV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Kf1Wbjuz9PVAjfY5n2MWEudK6nt7Czf4Er3HeKdqFbXFbKBfqBjS5CFs1UE4s2gohHQNDFXqExkmU6GWAC4AYNC",
  "key1": "2gfnueJAmU8Znu7EPRUpjBbDaFwNweeMVJww3kGgpmkXpvnTL92i8MgurVzNcaSCJtAUsLZBHGTqhTe6AwwWQaX6",
  "key2": "5d3zqfdLHbXjB8k5N5dfyAcsWJdrTBPeS91kVib3Hu5dHZH7MXzA95ZX1Quhvc3xax2MDvbP2kkPWBmN2BXik3Nh",
  "key3": "2qojTK5gNKhzA3HTS8VmDh9yjCNhDb9sd9kvKoXhnEQtwotQKuyTPP51eJDXVSp59D2m2YYsdS1QDAzfEF2NwsT9",
  "key4": "36A6vUmwX7NjJaSNoXyfGbVw74riFEPGeEnsw7kT36NRzv1XE9MN7anjBwzxXwKCDX1vHkC9FmnBFoBqg5BwskSA",
  "key5": "4QczfCVfC4KW4NGv4GMHboa65YsRyKJH1W4xhBUWQ8suZV3gtqMRvVhGcybmkRvbqi3u6MgJvCrrAWfedrsba89T",
  "key6": "5SbFXtbcDACXpvUzoJA2Ju7YRhoBnGa6EMnA9ks7bUozYoieqB5UrjoJZ8RvjcEk33Lwu3LKHKz9qxC5mWFg9MJL",
  "key7": "ozkPvb1m63voVzWNBxWNABUxxbgEMzFKHjzjAbyoNdddDbwjCDy74iz2jW2XbEwT8wgXmJkMQySJ8iPE3x6KCNR",
  "key8": "5UdMgmm6WDWqDuPFXLZAdwZYcytdLcqWzyMBbpYzivaBCKuooavKpKFsfPW3TnhD9LgG6ne4yZttXLpfWz4mAMQK",
  "key9": "Jy4udknsMQ8ZWFVTcjss9wrqJwsJoktDzdPoxJ1XU9A74iY7doAs5ffGaWPG7KdL2kPZzBPAievVeRsYGaPEYVa",
  "key10": "62uZfm4MPDmr9JWzSBVMwn6VfuQB6CNDR1fau7L9vCb1yeBvqpgmuUkKDw6WpRdij1LwriuSeUxNYDE6Nes51miX",
  "key11": "3Ugh7mLhcnLqcTXtFUNAmxRGFe4EMTAeC3NBsLnTzBEmhXHfZcVZdW3WcnmEyqEfezForkyKv6A2HBTETiuXp2e4",
  "key12": "4JGTX4BW8pDUaVw8jPQU2LmF8KH1ARKVUVegkdXdiuC8WPdp9dZAxaecS77xprMYNuYcYoLWv8YXdqBLymKTXP7V",
  "key13": "hpRiKKUT7W2rEZjbVVbBnuXjomEKH84rRxz2pa5kHZGZv3cHee3KPJAMfYSGpdWrdYpjkMq84TrzCm52dTUAAa9",
  "key14": "4X5PPoVYuPaoHEJEa1CGZq3dhga4LVN24Wpg3MTui2N2KNvtXUi6MwsytcaWEHAH3G6hB9hJoptLc5Rf7QioyMpR",
  "key15": "4ZkG4uxznZxGQhzFwyesLcugUQZsotiVVN5AhxydJmSfh6yEWPwk6m8nQv5BZeMBhmE5aBm3FANAieCBjLc8hL6h",
  "key16": "4FssgAPUdN4or5hAjGyLrkE8uCWAFMfDX3Sfn5TrR3TxugAsoRyZp1Cp1WDiwqaWMwFnMQ7Bm5F9u1HW8jZ8XJry",
  "key17": "3ey3RVniBLBRejy2p3gSQsvFLknNYSbzQ7FGbKYzBqYPaerp4N2SGAbR2XpekEK36jmpRCqtAuuEYV23NNmSo4t4",
  "key18": "5dNRE6UeMuVTWu8Gj3UVF5MeXunUUQyfwbp2X5pHXGjij7xCvKT6k12x4DnqwCB6TEU9NvtK6wBvWycjbBaYR855",
  "key19": "4YyybqvaAcuoobAtYhTZD63KqhXCkDPJwrGu3UkTerFRi2UtQnhVZfMrUAuhDbx5FE1MCRaT3oNTzovv1Cjq1PW7",
  "key20": "2mDfXzd8CxMfmHDTE5mu9XcRysVUYM8mUgdZC8FjEGpT1FHE4YtHHUSBSVAhnRWqqF16P7ZGrMWCfHY7yChb5Hb8",
  "key21": "3TpPxGcz5B3U9k1yNs86VHzrGKJ6LSi3YUhyrTfuJHq7DUJsBgMBTijeopdv8TbyEetVkyN3BqVbUAWpPftuSu6W",
  "key22": "4tNwpvUMWL1MjHb11kLfzXuQaktLTkKgr7iG7HKrWkXZfrPyYWv45NhiWNQTk6rjJ2t1TinBsPprhBfj7GHHNDjb",
  "key23": "47sKCgEfuDVaBikgLX6QrxDVWRATFAFYMudJ8isSGfV6DKXt4HJXndVHrRfyh6A69htV3voii2LWsEGA6wPTwYRo",
  "key24": "5KkoFL7Kfs1xJhY5JKLxQiKm1LGr8Xqvhpxi6Z78NfwKHXJna5TEMUdKUPxhjtZoqXmX7Kcp1c5AoNTqwAFE4nJG",
  "key25": "3QaRcaE2RM3sf67s5kcbGW2W1d3jM4skVRvpynuewFYzW6wUVdUZGpk5WkE9vVvYw7qNpx2KQBs9gaXrsy2VhZje",
  "key26": "ACQCMkVKz7xMycLBDjAbeEFPjn7MKKW1m7jMmygH1pxKme9W8aBwgJ7mjogwcmNm4HKvu6XFbrnR63AjoyaCQqe",
  "key27": "52WkZMXscmSWzw9VmTCrnjn4wxEvz7A4HNcxZ3GqnaFbGr4RYfgC9Dz8DWscyFSzpPj2fJHAF3FtPxWTZVQWu3bn",
  "key28": "4CXVcvwJ8Aty5oQaNk5zQcyFCVNtfvk1L9amPT8SF2Z9tkeQNZomZMXGp2KaYWs1XgGTNFRxMDQmp5mEKvWmSYCJ",
  "key29": "2ZHxHPBxHM8aG4QxQw4g5cXZPq5qTmJeVkpGWZoTCb6xnYQdfUpXXGUSj6YNMD6451kJCDp2YtEyUA9SudquXNdu",
  "key30": "5wh6TUnM72kNtTJrD9wjReQdu2LKHRxPnXXBbPiPmfX4F2gvRy6UEuJQvgYfHEb3doZPcLWfV5yGbddaBCmnNckY",
  "key31": "5cMfm9Y1UUS76ALmoMNcPCGEGiYeh69vDykoqACLx7ribaARZ958m4bs3ZpLL8fgMTYPYQL2iRafR3zqCBVzAmbo",
  "key32": "27QtwtsUc4VyxPHtSvbbt41RZDiBRk7jPHsd5paf3ncKzTQSJFrRtoACZ8vyXZPrCN9bGPMpxacpu5JB5KkiJA8d",
  "key33": "X8Q6m88w1EEqaG9qcSRhKhYaLEHFbjoGEFMY3GRMh2cSgownYbfNRax5HE3Szq9eHSeCaftT7t1HWtxPsDAdsHQ",
  "key34": "55yVR1qwRnyHCx8h1tq5zKnwPxBV3Xf7sRq2tdszAurEu6k9t2wWFQCEYtNYVvzo3siD37HtVJGhafZMiSjASiuk",
  "key35": "ruXwzyuVcoeiskRP2LiFtfGP2eL5MwBeizuGGvcsWXE4by8ZTFq3dLZc9c1HpwTnvDmY4RNvjoSMP26EZTGaHQQ",
  "key36": "2tEnejiEq6LRShYFAetjV3gzHwyqbvtyb7jdDggqmxfLLqPc3ysFQKN2PD2jwZ1may12Br9wJfmdgNfad1ix3JZa",
  "key37": "42qg2YQ8L523Z2a2UoaufgoR9Ah9TuERTV41j7emGJTcQqVyVh8JYuhnvgz6rwk12chVAa6eimsbbUtJU6fLSDkF",
  "key38": "64o5DApXcCfuN4nfALtyS88EMERAc6LkJbb7XvnoqyoJ2PNHueSh6wJrmTvXhXzQngJnGaHNPRAPRu1dGqrFMU2f",
  "key39": "2HXbK4gyu1P1QtsSLQrmaxxCRGPJK8tohPX6oMLyKYhKuFx8TzeGRenHzP7VFLMzydmkffs4R16tondVuMdFU8nP",
  "key40": "6719XHp96BRtDDYaxWudq5QWgizFq9tLsHvPAYLFaHZq7nFsbyKxYqufu3FLPh1tDqhW3QTtt1ha89AC45w16kjr"
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
