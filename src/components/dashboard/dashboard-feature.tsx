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
    "253PfKV1BDo9TamV1ax67kJyXhuVqGY2GhxbpoUhNmZLYqe3mkWGqb2oUdpYMnTo8cEVH66eEZovZUAhzVAbLBxm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65FjxMug4Q6rRzjSshkpGpuj8mWCvVPxBYvwKZPTi1bMqPGHUiyFYuqCvBoRjari6PMwS9vbCSXFEyb52bhC8N57",
  "key1": "4bQ7hC16HVkNyVz1W2PewU62BXwjKyxg6Um8ZQnwmHmEPpy3FRxdm51xGTLtnF9DJNErEDY2PA6UMf5yYkQecfCT",
  "key2": "5jn2aairhB6s8fmGJ8ca7eJR9zYfztccfwxnbNAmW54FVhKF1NAjpbkXgYqHjaQit2deJP2rpJrCfg2w48U4UreA",
  "key3": "Ko4zCjccWHiBaoXoVCH92CW5a4ykpbgozC1PUxAEpr79BKarHb1eZ6gnkBHrDkEFC7887o7mxxjbLsB29YWuNzu",
  "key4": "B3tUqQydUHuveh1cC3TYUTL3kdZLrm8VBN1qkqZCTYQgEk6qsEM2WWAaCEfyumNoYfM39SsZvHJibRCguATejtE",
  "key5": "5zB4QuvfTZkoNrbgWByXwM4TSrDw44tCMmzLHbHd5whUYWsnZWTUovheBu5FLEoML3Avy38tcreDWEWBJ79Aqxm1",
  "key6": "WPcZ5LGV577NTZLG1w4D9W6zhCc8GAzjTRNDXE1jeV93AKTy9q3eQCngrH2BMU3irPCyeaiYHmp5yHBjutNUL5E",
  "key7": "hHkb3CMYzHwqbX59KWA9KhDuFLbgSbHvasoAAkKvG4gQftRM6SnkfXUgAnauc5RgshE1Bxqm6FyvpwCLfLSqrUB",
  "key8": "5tjWfm7dWWQa8XzmFpDTn1gJeH4m75MhB3UPPqj9YKoVWvkNhmp1kCVM8YTNt5Sz89Aq5CLYPF3zAM6XDdVzCjXo",
  "key9": "4HJv82WB3chw5hUwrCTFxUsmsnH6SdtdbsmAbVpVew6NCgh9hrHans2Qvq8xvLfHFRPf118NDLV5ic1Q429JTgFC",
  "key10": "5PCxJ154LsWYxzP2rhzy3rdc8rL7K7E5qeW25xJefPXHj5deGv7zWz1PxyRnnKV7XmJM4fsqXU5wDRQjTDhvmf1P",
  "key11": "2uZpn2H1F1pLEVMxagwES5HXk2XNDki8GpgczeX6CtQAU9gPRV9Zyk7kEjbHQcAFh8VE5VFLpXTYpPpRLXNJt1gR",
  "key12": "55XMKxgW5T24DEXZfAzWNybtRM8sNpdXNtVJT2ZPRWxDCitfFs9GhyvBKURAqZQ5g3B92tXNZpmfHawwKdokrTEc",
  "key13": "DaupqK8Lk8AqoQ9QaxXqwyw7w36rUbTJEfu4evy4QgWvQQRh6kt1tu65TTuSLkEX8TaZVEz8B8MPZCBZcFTL5QT",
  "key14": "GNTeQMCiJfWoxioPvsG34xHWwL9bhLCibAuTwyKrDmvddhZbenNzQEquuG7NTDkkPbQFtVDFWcgAHabTWmPopML",
  "key15": "4ju8xvdSyHxyBBzDfzvXjSyt1fog6qZG74RHnm8gGba9QfygDzrBe8vAHipEVDtLsDjSAGVTxk91PktM5bYFMYDi",
  "key16": "5wzM7ks4i1QY9CJCx6KLL7pHdTxQPDwmdRrzMQ9cmVGUXhjwvQEshCUBDicw8nUg5NW394edSxQp61zmrFebKdD6",
  "key17": "2x4q96xr3s2LrNd2rxkGTz1JK37ya3DvoRuvpV2GmndxyRt9b9BSc5Q78j3jiPLjUAkfh3KdeUzVAjPh716EAeUG",
  "key18": "7jmWbnhWNNPPB4Uv1fTpPW3aqYSJviVgPe9fUq45DVj72zXKTHpMGuqY1SWihDRZZbweDN2LMwdJqM9YkhsGW5i",
  "key19": "5F2mMMb4G8v8EzipSesu4uqM1Zh8RQqn6urQ7b4jtWSAjwwkGGSuzkRehrGT6T9suR16KJ6EDw7ZQPuQCrWHtQN2",
  "key20": "t8GVJXUvGrY36RnK5TvAzWZCJrPd3sCT36yfeRnREKHdz7YWoFhR5o2WqmmA6QnmdfizphHNHrzJKuJBbebVDo3",
  "key21": "4EKwLbwjEjgy9uYMRKnFSEZmjhkrH1DzQeronQx2qwwkPG9TASDqSiS4DcKL4ohtUvQWZRDhvMJB2WYSYWi6Y76M",
  "key22": "5cMs15udekHesEPwDNNb9TsfKtMWdw7veXzWwYgUKPUgj3w4kxp3vJNYpYPToLfyeygZxi2D7oJSzhqUno3sRC5L",
  "key23": "3v1VJP4CK6BjQHKnYNs5D3XzuWMszRFtJ3GE6AGVJsTV5ER83bRvhSEscoiQcwfe3JZUWcr3p8NoenVwx9ausHc5",
  "key24": "4NWAzc8jx4ovcC1iD6YY8dRyPGaLpdZDYn4SSVcK2XqMLWSmN1cTsv9PzDwrR9tC48PvqWYxPhsinxgnHg18joPK",
  "key25": "2QQbM52spN582hrAEBzpoo25zx8CthEVcAJqthaD42NLmmdSSePy1g1TLeRUevU6kEo2tvMzaDKvuajuNMMrfPr1",
  "key26": "4CmXjfgT2hcEr1oauxJAKF5bwuz3GXSGWsrbGZx8pEfW9n8JxM15N4MNP1WTLRvcNz84TDyYkgWfzF2thyaVNyvm",
  "key27": "4vVH5m1cChLeoUfnzsHCvzzDMSZhsoe3G3XAvyz22RF5pcgdgxKou91qt6TrqAyERpb8ww2cfLGNNHd3z7YABdnb",
  "key28": "2H7LHeUUnotBbP355HmJAoR9Kc7N2cbQLTjVuGuBbNkfSMFcDgmK2dZtB3LSJhzaCRG9jxBJhHxa7tQp4RKgnm6B",
  "key29": "2JCWcdCascqdkrQpdWtynTbAndqEdc4VHbVVUcmXxWvUZQmYjnUzc8Y6jnwoL4gBitKQuUnJS9XNXMpqy7wrjRHT",
  "key30": "2GwQjXzcGHw2cpWuLogUFEgdDumEs2z26ZGVk856LkpKp5WYCmFhTGmnqNn4T5TURg6TpJ5QamtWFFcxTgGqR9s2",
  "key31": "2tqRzyAjBJKG8LyPGoqd34BLzERF9SFjUUdwnespgGbnL3Hz7q86XEhexpz5Z94hELFLKdpvZgQBqYGidhAtsUCt",
  "key32": "5i2yvRMndAJoSCQo8AxRD8xX4PipXwWF3VfetV1GWrt2iq4B5TUbD2zKUaJZ6ywCERQcp2q6yP6zmSuRNbs6apzc",
  "key33": "BVJi37VhNbf9YeYbehkZGCnCgSiuQ3Cqi47ntHg1P1UTsphMbDfD5KedTvtnFPZMpJAiXqfJkixD8F6PQjGYCxw",
  "key34": "vTRiRx4cNzwuB68eAWF63bccBijNpZ8FwALPteG36C594ze754ajMp15B4MFPqZGbxVUehxdq7PY1TZEmv9rjRe",
  "key35": "2S1fvqisYdLtubmXmu5YXtYu1YTAefg9RK8BM7zEmidfLvcJ39z8F3poogHi53UYa8UTY6xbgHRDtqDLNDJ9Jf6g",
  "key36": "qF8kHQD2k2dmD9SXnVsr7vyPT1kjkQsC4VLWNJk4Q8tkifqBxBHFxPKqrisno9WLjWg5BTbKV7nEKhCUYkesMrU",
  "key37": "2gwnQrC5Y1oae6nWVNB6eeggiV6mtG6aVFB2FpKQTuV7uAey2QmARm8peLAyNVE3EXnsT4Va3Re4Xp7dzDrdKnJx",
  "key38": "4j6v2rxws2ioQKrvSHMRMV5VjMNN6r6nXiKWAxDXRnW3g7nhSVyS9zbLaH5K7FwDyKRi8YWYFuBzHm4wBuat4Aea",
  "key39": "5T9FSQs8UUxtC9eRVvEuM1HtxmSnRdNCXeRqPiiQuoXjZXoFSxG4AprTUtpcqCX8DpTK3V9o11Y9Tb7Pqn2bLdw8",
  "key40": "329UjqYD8pSV3dcnae2PWFt59ad6SmrjuyXN9hcmhPxoJuHWHE9e4jejKbdeUi573SLsCMaciF8Zg2JsDvUivZwW",
  "key41": "5fo5dbwsaKD7bR4csfLWAXGbQSDTeHMZ4Gi1jUkLz8peLfvqJYdWayLtQ8GJ1yKDBf4dC5pPLXESYD1MvQtuNJ3"
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
