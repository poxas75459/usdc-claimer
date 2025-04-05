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
    "oZXEwXp2WLXsmQktZr934iHFmfctdHoabMVPZtATtqj58rJDhrcMGkBEREZ6WJnLDrfNAeb2LVibqW4jZppfi59"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "58nDpZ1gn3kBgFgKhhQUqFdXbBzWnLGaPTnecaURcMekqH2TcWazZmh18yVmL766j5mk1SpoJdp3yeoUhkVr2WXK",
  "key1": "4JY38ouiDb2DtqRwHBQ9v5EGwEYt1b72mrr48WxTUCW59iKroE3PPnWmurC2tBEMCcBdWnJxNhbpoMqZQeJeHYuc",
  "key2": "43Yadrt9Wb8aFuui268xAKFzxTgHTVz7imUpQQosx8AR8BVWQ2GzzGWRdnMAU2ELFar43CA4ynEvPUxj14ihwfqz",
  "key3": "qFWcaZqtacGG29Gjh2AVErsfHvRi23wTcGq6tP6tFuzy7FWF7BaUc26b1uu9EvyR5Y1JYbEFs4TLha4986rRQe9",
  "key4": "NiLR3fMykykTybts9jpdFb8Uxie2Hq1S6HeVnkkSXN8udweXdtEbpUV5wGTyqSi1phNsFSmgx6EuzVASzhK2EH6",
  "key5": "32oeasAQmfSZKr5TbZrBEjpyBgV7171Y6fSYrunz414BJaEvj546NSe9KcVytPAz9Vxrxfx6qNyjh27uW4sA6EtR",
  "key6": "4DUMjgK1DsKN16UEy1EDGDHXbmkyj4Pok6BNMZTHWU9fDHJZjyvP3aweUDsLEfagtiwG54rnmJx8HUdxfyLRiRfJ",
  "key7": "5197RQdbSgmg15hTzExjudbau44cR88DXgRyeM9d6q49BBdc7igNzRwMnfmoSsWynvDeqgzibyuAuT14xjLS6ptu",
  "key8": "2yMSyaJaEQ4WRw3ahozrdgQh3ATQzk2YY93UG6mWiMVBjfkEsAf87rPCMvdUDussm2xBADdpSvaqXgFCJr52nn4K",
  "key9": "3LmMNvuee9oWJFLviUBV8YxGP76gMWdYQijNbk8tiDUNUAqG28fGKRy1yeaSJoeq9E2bSGXAGi4HKZA2W13vTzC2",
  "key10": "54GebdtWyUZttKyAPdZhZMf5cGsuNGNMLQhm1hLWs6cxyc4k5uY6cbxWf8z4pbBXbL6p6oimLNsiQi3hzw2muVRs",
  "key11": "5Kgi2PWj57PRSkFdL7ht79z6e2Tk453UTo17mWFHZqR7APc5N7Ejrf9iQ7eVFRGj3qEoYFZWBz2QmFAT96rL4yE6",
  "key12": "2hKFizQfYJaxL2p9hiYFfJxmRgPjbQio99EQdvjrgGECKbTaDxTcJEiUqw4NvWKdKvSTzdVAyyc8XLQtBsEC4GXD",
  "key13": "r9H9462Mmp4Nyyy5pmjg8YMVUp5jE1zNgdV2DuM5YCC8Ca7Fpw3WUXLvSnpwG3SEsHXF2oEYoZm5un52CAaMnXS",
  "key14": "4SSunXSxREKsqN15T2CiLphbhdJuL7wk27EjMyAZNx2BRHDCw2kdeq634wwMhAX1UUojJjf5Wp28yYXNutP1Z65E",
  "key15": "YN6WSJBmagv2gt7pzYJAvCFmJ1zm3MXXVH574sZtppaJSkEAGdqvUyEqGzSqj4PDCJuPQTaHzEUpEF6ihyJ646r",
  "key16": "4QEYtN8qs7E2nWRs4BjTo6iJJCUh4Smge3R935kzdtDbB49A8rkksbeYCUH2P3uVv9ag9kWwrMUdkejSsbXbkVyu",
  "key17": "5ZAkwFKiZWFtF6KuVtwaUnyqVDJMTy3mLt6NzE1UWxViE4nS7hwbcfnPqLh1gebSu6ck5fgcwZKJrZYG3PC1oDd8",
  "key18": "5ai3yFm1vudwXy5mzzinTThL8GA3cqwH2bpoca4y8dCyLKR826V4ydhg2SmfpDmjLvwWFqveTHWbBvcWhtdjzAMH",
  "key19": "5gqFTvKusfKeW6Q8UrWjsm5LVMmBz5R3tXdr2nQDGmwpwN7KxP1FxxWB2irQewn5VsRXobZZj3JFwoJUySRg4etL",
  "key20": "4xCQYd9ikrmRK5H9neEMS8ictkEMuyV7qDrvXJs3SMpzHovVjyAJBRStcj5pXuwGuxy5XsWkmjMpvezUsfDih5u5",
  "key21": "577M3x6xgy5LMtwtMD3AYP3hzTVdj1U4tFH2ZQNVqRyFFLMEW9N71vUMW4BgU9dUSv2S5QFCVjLC8NAjUE2jajE",
  "key22": "2ax1JRUKUXBTo9FSydSEtb3BjB6d1oANADJ1y8TaHD4BrAo58uXJw43mffXeeaz9pQMPKxteSxufkPZ3o1BdEDvg",
  "key23": "7AhPmsRJeG4wwSj2iKHsLX4NuJWPFo6PdGPvFwxbMJ48NCdWG42c3sRPbZQ7kyWVdtcyJh3RVPyam5eoWiHCyhr",
  "key24": "5gLgBp9JLPisgpkWyso12rfXPLk34FLq4b4VnVwur8BsfbVBhko46pKgKJsZZnp2ZiBLY3KTzDbMhBqULRenZ5b7",
  "key25": "4Cafosn4EraZGeRwRmj7QB1nv7DDdv5U4gWZbGAXSh5TD4Z4vjgjyFuJj3cbF42fiADAKGbUTJbPQdgi38pPyc96",
  "key26": "2Jp4t95VpXn3U7hbvGyw4KA7qwETtsxqAsK7EHF7oFnPXMmbPgd6ripVa5X8iTy7Pw5Nea5knN5tQWB5mRS4BSk7",
  "key27": "49upTK1HivoJyb7AgJMmdmoWp48frBN52qyPnQeBgfvbwNteDwWdQXgyfTgdvGw2uwddRJa3p3BGiSBVtJjK95v7",
  "key28": "2Mfck1Ur3qBrqRmnSBwKH7hwax3SMJGLMbjHJnHocynkR2wHXAH9RPjdy1mavda5oPUfPDtHY1dQ9JeuQYwUgKxN",
  "key29": "5qdVanKCJMKDqXS3SHGAAKKyQnK6FjZAtqJcVC7vQWPyHkWCAHGi1famsLzPLZSeTsV57U8f7LfbaMsD8btASNSQ",
  "key30": "2SuXk6p7YiRMX8mAN9CbLUix9NC763XER5KB3r6HFVNe1tY2Xpz2cmjT2khzi9DZAYZTNfeykPBRLVukcg46oeGr",
  "key31": "3pZqEbnLA9A7KPxZbiRqdyZws2KM8DMHroff3dNK1Rwj1FZ9zwGUEtk9JGWbsGt1o9tw9a1GDK4DezemNAqTdjXQ",
  "key32": "39sKwgbkDy7HLaLCJyuhqYnx9bEGhtbi8sPWfXCQZ9ER2BwQJPRKxUREcd9UTnXuHKHXtoy1A8byyHnutpQKwGHp",
  "key33": "5fEvEQZ5jUeWVUQ934YwwN4dZFTbGhfqDA4mZHKWmcGeJVdAR6ZoVYdVku1AdN3A9nJB6qmZHTCxMFyKbUYWmWPT",
  "key34": "53t4Y4GRksWecVS2wCx8nvEvLUucQbAH4hDD8vwyWDMRv5TYpu9Vc8JeF8snxdSrcBATYJHbt2vQvBd8q8MFhfkp",
  "key35": "5j9tqPzU23TtvvHdA5ttLMcRx8ww9D7QpKnmSKB9h6cb2C4TUuLoPSMtdAp7Wcw27qUhTFhs6WauV89JrdrntQBW",
  "key36": "4xFpNDiW7zFygTZKfrvMQxseAhZdq65ehKPABSM91SG4yJfTi2nEzVtMkhAhVcsLxAB6dSmnb61vBL721hAyoed9",
  "key37": "4BLTZHCkRE3Na5xGzVh5zacN75nt6sw7kSbuSjNPGprdC2daJDNFHpHX8BYzgwg3tp46vSm8b8H1fkPccmnwf9bB"
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
