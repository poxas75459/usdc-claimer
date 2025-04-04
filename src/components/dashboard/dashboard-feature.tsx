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
    "Ct9pFh7Qh8wKou7qXnXm6TdcALUG6mSK8UzMbz53H2cwEVkwtscLV8fLJbLcSUdpa8PUrKYinQYmAsyY3XmtpQd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Ps9LXhq9zshUqWM9DgbsQxFXBKDkyAjvvQr2iqWk8jBnXLMTCeVPsEfxuK91cZtiHCY2sY5TjqDJsrN7kyC3A6C",
  "key1": "3CqvNTQMV1bgAp1ca7nDYCj8rgqBXNdH2wLgCGJJxNMhkmMmR17umVu56EwbjJzipbumwVMreoGvakJyRQnuRpb6",
  "key2": "LxLFiM4hB36tbVgKQCGW3mt53e5XDjKFdH6d9XmziTw3F4UZEbVyTx2fRJuidn2pBKmvZVtcExqjabBFoa3zxBS",
  "key3": "5GTFggHvTS6x4eM23LZnp1tgJQiFQHm5qhfqAjmqdqUPpPifpTVkcu4G1WnaLvPF21Y793v9zGwqW16R432aW5Hy",
  "key4": "QZPMSFwd7N4tSGBqb9NTSMm4bvAd1ZUWyjYTK2HoD5YZA2gJwC2vBTzGRjGxMtYXgfnDePSnV67UV3m6aK6SLHt",
  "key5": "4RHwaqFf5aJeS9UZj6TiUyp1pnSyeyF7pU9jwGam8Uzd6kdmbyqDgWBNE9EZRAVLaFm3AFkNTJUCKu7Ka8Leea1v",
  "key6": "5qnURMrAWgZA2J9mxCrmVei8UPuLFnkr7c15w48RS2jKufXWBtc8BxMoGXMUk5s43j1qp2ERVnyZTtqC5GHUCCQf",
  "key7": "5DXnL87ZDpnzT9wWpG6pbEarP54CTgtFhkBjgu8opZt7SSXqWDChLtYH7s6yArvsNm1HemtaYhr94VJzLxVYMKiQ",
  "key8": "2m5JqnQTnPhysvhq77r2emSvkdeTiaBmzJXdhKtxceKfN82ayoVzopo9FPCbUfHpqMhwvAJfahwnzzdbuWoPu4e2",
  "key9": "2mEUxQpjhn1pmM73eiY6o6jEuVHhr5PjMiMzsT5rJ6y7NBGs52itRErQxcYKobf51PQcF9M1zQF6LqQzPfRws4Cn",
  "key10": "5Qe69XB3zzG3ga7W26fuUU68ijnsVyQBQnLDsdupA9SnQdcApKs5hzSkNJibmnGHRA6WWYCmftZL64gxjz3SN91W",
  "key11": "49J5BYaRaHcQ1FHaowHmhDprsMzNaiKUGxpCVdsWz2aFqzLCotbJLwEKTwa8fmGxYwnfemeoJnhGwRJy1R9XMHX7",
  "key12": "5f35ZXz24CqXXApM3xi8caBq96hYooCnYU4FseUDSxcFLG419CWPo37ioAUSbbrg8m8K7ykQwAymazfjAzSd8N36",
  "key13": "3aAZueKH2GgHPu3oR5r5abnrg88UW2Fy5oTMpPSRWD446tzHffDFUrYxdaqdCTgLye4QZStkDLPErfgw6K17ZAfz",
  "key14": "27h2kAMkNisrxzkWXSwhvuse8P8F8TU7mwAYfDVSST8v2b4tyy6dn5SPHMaEimLSPbS4TXFs6uscAP9HWhyADH4R",
  "key15": "38tegeWERm1ZhkTWLbDbhSz1rK1vXdd7yMFvEZc9m5y4tH4gVpVK5AKE5HyRp3Bb1KJF6jfD7HtdsJH9QzuTvweJ",
  "key16": "3cuPaLFFNryzQAbjsw74ssaVaBgNynBtLsXKaXBfHngnjLKBThdcag6XdUhfa9eZYkKkY52D1sb8AnFWvceYo7mn",
  "key17": "39A15Gunok2CA7DMVmprzbEWGr1a2u1A7kCyg9EuR3EGvaX9yxcDAwUzRnVuvUJfaeX7hDacrteoLpcQEjfXsyot",
  "key18": "syqN2PcbuVxy5mhn2JH2M5ZSHRWbfL1VvA44kNh4KaGiEZYcpkFUXEAU8HDHdRG58LBaMqgNgbWs5yDMXRb478s",
  "key19": "4fDuvGx9hXnVba6XWd4UwHWmqPhGJ8SJkUrWSKMrwYj8pzgmTagdjokGZh37wKPHwTRXFYNuQaHnvvsfzEBVjCob",
  "key20": "3fipJuAFWgATEBH96aYUdqANyamwHy7xm962TpTKYBdRbUo2LWtzRbHigq3JgeG7wtmTcAUsePFPNS7ZLTZzNgVQ",
  "key21": "25Qdjv56zgDM2LPThvSUDGytWDoDzviPkQY1XL1bB1qwf1k8BQVYmjaUfmFt9rx6H9xwKbfhAgmnVFViZJuYpeTi",
  "key22": "3j1Popt7kKegm9xPXCkCPP2LhF3y5Xt2QsgSjYcgvvw7B2rSPL6d6qrr3omChKxm4HrABTeGnx65gojtjiRY1mqN",
  "key23": "4FHJppzVAig3X9NX1JcpyV1VTcyXdHhv3AMLnvmH7UhCgrPNN9mpn6sYsvPsk3q6S4iDEP8wP8BwcnjzL4FckYTC",
  "key24": "4SKWpCFpsyQiGd4rURS4ANMzd5rJ6nGsZdWwJxHqrHm7SmDzqkX7jDVxkgggoqqZzk7qaPGMnRxH7XjGeUwhta3E",
  "key25": "39gK4PB2kV3aXF5t9yZeLk9xRG9GzPn3Z9Z96aqfam5LhGLvU42ddHPqpvZ7oTqkqcTQcBxBTLteH4MKXGuLAAKr",
  "key26": "4Dm8MRguH26zS7DWU56A4qectxqMVUxFEp6hTKXo1mC4ZYe8LYGAgB7NP4xur3tEaFWUZ98ZXE3VVNMCnAYbD9Qd",
  "key27": "UaEjrypn5YZk6gtjkkG6bjrmEZmKtqEe3q3EEPsxLbgawWTx8YrpwpcykTEFkfVsUwu4QdVwiGVxVh2M11KqySo",
  "key28": "nhyqhTLEnSvKrWbRSasMkypZqX7psWd6BzYL5kExEwfMJEFmo1TTRXn5Rufr6aSCe9XWZZyfnyE4Pps55WKtw7S",
  "key29": "52A8tbkwLPTzyVaA4wdtTSPAbDN2SRwQhv5dQbhyWUH9euuyjwf9pwkGDT3hbHk23Pu3qwPbkVT7JSv1djJDeWhT",
  "key30": "3vrqjsCgACVqpuJxYZYwPLoQCufg3w8ZcDNJkPfLiqcguUxjbJDt5iDCodwmw4Y8Amz1w7TvwnRv2NoUPjaiqXvP",
  "key31": "2HLfoKcRzBsDi318NzAn1un94BhZ32UdPYyAWA1kCHPUNo9vLSbaJPmNC1Ry4cbcdihrcZ8tXJ1zrcgsWr1wLCtg",
  "key32": "5RTNsPKMUzvo9y7nZKozHxoFTyEX3M48WnP1ry7yoK5sHACW82xegx6DMdnSi6AG15W18XpVPrLUWzx8xgPM5CSy",
  "key33": "2qkjGjMkmnevaCAncLrxneYSCHBXc6W5SNCxCnTPKFtygzcvVGaHoRpibrnd7hApV7wfrBoMA2NwDeTtN8q3BhHp",
  "key34": "39JuQzKzZ3YKJfLM6qhahgSb1zW4iyf225j8dCDYGzvgiyQktsgP9Wt3boEhMVd77SYZLtPbMCjYcXwGMqXVYYcn",
  "key35": "4StX4GJQ8kS4a3Vuv1AuSXdMqLAskae32tWQjsZsB6ECSF7ayvHwYyPAEVA7VkniYsnaeFLP7jMam7Ksd6aPJcaL",
  "key36": "4ncKKuBx8fBkwnn9r4BrQQAvXzA32XBp6YzxX2bBM5b9BZ73WEj3meHUhsknB4Uo2HV8FPu9kNaf3Ymom29M3tdt"
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
