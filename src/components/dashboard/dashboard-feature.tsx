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
    "WqGagbAYb1uFmSHazKTKdacH3iXwCQy9oRbegFbHtZ7DLugbQnkpxmTuPi4TMJZuZRJaEo92GZvyxJ5jCzvJqCg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UL5wpgz2i1yobjA5crn98KnLUqTAqyCbjToE97PaQK66wD9ziWpVt9zvK2KsUbuQULUH6GptCZGnFKeoNZD8ACG",
  "key1": "45grwbnwwz4YkWp7ofbXuEQmeps54ur2KVwir21At7c4rJ6Ju4dsCcb3PUNWN3Bs3RqcAJZUtYf2s91NyqZbks1x",
  "key2": "5rofmoxC9Y14Levr1TjQHRQM9zc8bGkddXjda2FH6tsK3ywwQKHo3whLHMoxpi1hLX4RoVdHPXrGpmXKZW22njDi",
  "key3": "67CNcN537uJnAtXMGPSzUa8XBCAdQcNQReiTqM3jFmV9XVSu7LXNjKi6LxnaxgiD2LHFHTVA2CdNLPkg1t8dghbr",
  "key4": "55FsFD171tmao5bDyEXuUcg3hoBRtnetokohVba8pZdvhVNf8a8wwirfdeBuH6zmaF2SfmQoeAXeX2eMaJmk2avC",
  "key5": "2CwvS9qCzWQVU23VsikuuCwVpQyGkHETMG8SLQ4eo6PRuNtxLzvyH88LopT1nHLdqDfNhT3HeCQbALZfvc54ZwbS",
  "key6": "4ny8bhuZm3grMqtyjFWmc1EcqNvZsju4ubaHqAofMdhUYVYRWsY9DM2ecXZKyGuyjBMccesFSXpQUNZFMXdyUH9f",
  "key7": "2KEzGJN1rLps6d3qqsWMhf5SXxRpadW28qoiLxUivoS2bSo2sJg2gqgQ2Jgjb1yxCKJvRifzDJPJV6pPsgxeYNvx",
  "key8": "49JKwS3wpCEoACeXsPj48q7QHKEY8gX16BMXjxJevYYwMMSHS3836Lu6HezUUiWM8jVAWRSUPt8ujPno45SWh64p",
  "key9": "4zfmF6dU5xhvozAZxTfecTuH87azKoPVmug5YxMtKKeW3Rc3M1hi8MoPEdYBTHeP2eBJJHNEJ4QfqHWhjJRz9x1L",
  "key10": "3ohKaa9gPgX9GydbGWaQMpFvMjKt4hpaE2SsssNxCAzPQEshs4iHfmVAdnVqVuHfVxZFQxnyb83TYbJncqxcuKLA",
  "key11": "5dyg9LTnkKPq4DSbWiZiaJyPgd8zUs2xiMjvjttZCthcbh8zzSj3K3Zis8reHz9Dg63f49EQp6LdVNeRv7QADDhP",
  "key12": "2jN5jSN3A3hiKMxeMFbC72LZZxC1obtqJdpEv511p9xwLEUGt5yS4sFV7iZHWvk5k5V3xmHe5kF1Lb1bM5GM98UR",
  "key13": "4mRVUSb6rZnbM2BY46J6d6EQFfemMSWkM6w4muCYhJ535JpZznQ2KuiWyAvZbE3MWU79oUYT7MwrcQHkWGko87Nf",
  "key14": "3WBBP2UMg6ixvwhDK2dJBdzUmBLiEb8NNkjTVxz3hptsQCg5vweuZQRHJLtYK7RD188RmY4Ci4rPpTZHjhzdaRRH",
  "key15": "4gRtg4npAHJLSAD9uv9WrpwLgdaUQKDXbVCeRJNQb6LGsBxdjrnB2QTaKurxwcaPiw9FqwUfDu6QYQx96kc4oP13",
  "key16": "WmPPeZiAKN4X36foa8eDHph4NCf9tiJddEFh5ZWyLqeNxmGBdiNZ9ykGFTWQUwWKUgnqLe5NSJBnPMKmCHMbhC4",
  "key17": "5bCfYjjxmeRfohNahorQTzcXyyRESRFVgUBVQpNev7enerGpG7CmJKt7f8jY2yfdkLsbnvDGKZVRpJopAXa1Cham",
  "key18": "XF5TudqnhC2RLXoaaG6dLPesFFXmzqWvoJQAWeGPDjRMhSG3jWeqbb4ACnoYYnBCtLSLRUbJp3nh1o7WR67dbBN",
  "key19": "5RCPgPmVUBUGCuHytRo2MgEbXAwqdbAdh5Mzi82bL4WxNg7Dso77GV1xiN4evdpdkjknUWpNGiZYBirAC6xJ6z1M",
  "key20": "5xmQxSDXgeR6GiCpUYkJ8DvMHsYWdnjg19ixZJNHjMPncbp8sHGHqBg8UUFAzSR5EjrUUz1EbxbeJrKD9w9nxLzB",
  "key21": "MNPF2feeGW9MGzRo7kdj9GQBMq5CYQ4FZT6Hw7WbgJzmUkbSUiQnL3cVmG7SBH4kaDzfjZgTAfZ81yU9f1RSXkr",
  "key22": "jtJQBL3Uoc5cbn9GcZKpoYehwR8xxwcvJY1ccAcRPDhnBYF6aA4SQK8X5tyNELLxqBjT6YSfJPUo1bL1j33KFRG",
  "key23": "2SfmSdDmnFSkgA2W8yLfj4X4SCu9L36erLWCqVmKQvsrxwjxykodnwf5UXDNRPr6T8oDrr52rPqr1kPDnitCaMsD",
  "key24": "5WUx7Cb4DcMWLuJ4a2KYuJfNMxCZ7qJXP1bNLBoBjp2sVYEjvknuRfwFVVSSSPogFWM92TisLjdUh9EPZZyqLRia",
  "key25": "67iA9FRokMEfUzxUscmoHddwqAJ2Nm3zCrz45FmUu6Ji7ta4tZNhZNpYoTWSc3mfeuJ7q9kqKC6bAz3AaN31a1JS",
  "key26": "5vEN3fx2fTwknMBRyv1CXkTsYYHUBZytcbc2eYmMmoaEchdLW442zXF1Yi8eaM2un6qpAyQUWXKsVMYEBDVz4Gi9",
  "key27": "2LtSzEUuN5skLckFpKoiaU7bcaeSms96M983eojMtg62QfXpitHmLgZjZhyed9zQ5zRDx2k77JnQdWswKmETi2LP",
  "key28": "3qPv63hrchLhUW1GGD7qdvvjXtheWPmfT4UL1xbNMKQWTXBxs9xkJrTDTodyaHYUH8e2zQzGbJ8qoifgeiJ51Hyj",
  "key29": "hPLNskVgoV64uLibAmc9TLiNsjECktchEkP3xGRwm9qL2eoEsDhpF6fYD32PyNqQeZYvYdiRhYvj3rtugh35ydv",
  "key30": "4QRsRbsdhYYaUxExgQXfuhgZLhpCq9C1bapEtbKpf9C8oUS3U2kk4pVXwAL84C4iFsq67KivczzendrnjsRE32Lw",
  "key31": "3G8VopzSKAzngrXL3aXLsJCfiD7b74tkjPMPP81KEnUNjoUd8tUwLwZ1aGSWP7cSrShLwnkDHQqS6xV9XUSU1bai",
  "key32": "4AugZNxZyjebh8mcS4cs1mEhHCcmU96pAjNGczJum6BCXtYpYW7ZQrxPHwdFj5Nv2pJDpXJtPN1DPXMh1Ewii4fg",
  "key33": "4Fs27PS4AeEB8snja5sAnjzm8kE44PqYci9fesQ4pHtzCy9zRU9fXUFpUU4JXHh89tAqvgLBZLCbc7MEDPPgHNvt",
  "key34": "uDxKySyrbSfXjmxhhAijqBcBecVJEbF4hCeYejeNQg4gFmjSjY27sudUhUf23iFm32R7Dgj6seTQzRGa6jTSybF",
  "key35": "5r9c9uLpJ7wGV4x52baaPaZhgCLLqaMVoEvmSTSoByoY44EieF4B3GPMBhxnzdQ4ewP16bubJbz4X2mDjm1Yjj4f",
  "key36": "4HsmV7eRr7YvL2Rndve5BfiZZoSMjJmcvn2wXzQwZLmcqgRAbh4a69rw3cjYYYzEoGaxxfTrPRhkm7oxMNvYnzC7",
  "key37": "4D3oufEigu8j2gZkxm35GgoSHhmcAmoqzS2dTrq7ty9MGuHcebgH6LjthGkardtNCxeVtvmM8GTnkEnjsNe2CNWy",
  "key38": "2yKVcqhPEb6BbV4vssUTu1bMt81GSTms6CfcXCDmBMcaJnqtzyTQykXx1LNc1qq7ohtqJxrGsm6KYmdmVCfAhGig",
  "key39": "5Yi8q6weHhEmPBkehYDW2U6csQ93R4ntUEfCcLd1K6ASiRrvTd3E34g1PWRo72TCfJQ4s2EAZxS8oHbHyhmA7bXj",
  "key40": "2GH1qt37MN8cyk5GeU69A4GLfxPR86D3oqRRW2c9JFs19ZEJeXGVNDXuUon5w6M9jg1dd79XExNG4XwJzvUXdqEN",
  "key41": "cSCpEzHJw8MWYvWDHTppPuwTBMkuYW89YSzyAkWJGkmRrGvRByi9TEvXKaS1CzoyhxG7t3U2kmMFmwmy3LwmTUF"
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
