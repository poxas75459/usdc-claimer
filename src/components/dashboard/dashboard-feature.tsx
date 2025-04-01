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
    "N8gTW9kwbKPDKrPR7TcogQqkzPycaU7FruEk2Aot2td5APUtG4Wzwne7nGGe4FKdiL3kBF4iDk4TLHynWcaXPX9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fT4EvEfCp7q2sYXvEcfF6W5Wmyj1iJotwDqRg3d4bj7C8iD5gja1A3zFBk68xojcj9HeQcvHuibnA83RSXHgDoY",
  "key1": "4toV6nvZNEVbtQBRSaLL8iwFih4KihsGCXujgqmA6UpHXTY6ZE1v5R5cQCui8s632GFQV4MiN2SvyPFGkcTVBNkG",
  "key2": "2yuQLk5UEG8wQdeKTEBqPzGpx5ssKryKdxHo7JqCHLXkWv7U3d1rWC7G9SC32PshXEhW5WixiAyZFwfgpjQDuXTF",
  "key3": "4SSsy8NxZhYT2k2x6vgFxNJyJgQSFj8SEn7aeQYDC5zY31KBPNqJwzJHAkkZA7bMdTCf7xrE3xd6stUxFTTmro57",
  "key4": "hs1BPiHy7SmwkgGFSvDyTsYNWsUj2Y4Mys5vaWkSiVB6SCjXhYEEwM9nWvpP7pxdfMkqK1tpGqbwiFdxvSqTZMH",
  "key5": "2E6pEf1JFWWtUqgDJdAT5UKnTCTBRQ3jgahvNwyiT1rgHGgeSPBkyZZDPP7ZMNj8qy7W2cjqXpiepNH8JZYh3cEv",
  "key6": "4vJtQMSx2kKquuCUqZvdLinaEiUybUzbrGrv8TMNfSXsLyZSQFrggUzkwb4Piiy94cufgHRVPSAK7EE3A2JonuEW",
  "key7": "3Ajsqyg8JzXPYE6V8a1KV84Es3CjGKApVNzUWd1SGGiYuSkzqeCsQr3YgfFy1sP2dJ1VW7bHNT6uk61ceudEDSec",
  "key8": "28fpACT6Z9RosJWBWyEGe7jP5amGofsh4gkRnn6atULKuQET3mQtVb3PeMa8WyZqtUVFAUB4dkpw4Qkx1w4uYYiQ",
  "key9": "4YivKdQ6MKbDCgY47rY83bNTAUzptffpaxFf8P2hdAEPGxUFC1M5i81CGcSx7hXv55RetLGsn1s4ipVDqDKkbvFT",
  "key10": "PQXSqGbZhNjKJ2qWrBDbP87zT1yXGMhFawVrw6mWGXnDCiBFNhP5aziQMvbECkmeyVAWFdPp4LombEhj9jo43iT",
  "key11": "5nQo19CCepSDBHutr6ZTbix6FH1TerahsyNMmRRUWCPNhYpJtYuBZMEYE8RK7qcp7hByzQ1APMcQHwF5JG6ZjSUi",
  "key12": "38osyhpjXng7kuyTVF6o9UWBUPYZH8eLZaUAXdi3gKycUV91vU1xBqV61qhYRRgfRdRjcTgM2ep2ZmyVrbXXWzWq",
  "key13": "3Pgga1Jg567SqHmvnECMNaUYsHA4fwHkmaDrk8BPMcQtqZZapfsCRg2cm6T4Rrc39t27ekUNyZ63NHGCbmU2ybDz",
  "key14": "4VzC5BWrczVXJK36oY4nsnKShrbX2nVugELyFZVw3WM73L2xJxu562UuE7hVdSXNGnarWWGkukVYLvpAHLNGoCng",
  "key15": "6hsFzxcfDdWHafgc32kiZbzY1CMcCxG1H2TYuLX3MLzP6VChv53zfgiJCjho7ydoRrjDsXm73o949wMHV7MMdLm",
  "key16": "LUR9sa6ehgg7V2xidY3rr3RYy8xN7K8gKK27PozytpLwNwVcYf3HZGqTtdgEZ7eK7R5wKDGYMkXxTESdM6fcbEA",
  "key17": "2rd7uNGqHrBBpHZUSwzESLBgE512bgxynUgX4FcNfarPnEHfyt72N8A2arnfGLEBEt9bbT5YYEbMTCFV8ygfpunS",
  "key18": "22qPRLGmLzcimh2skpbyPetj4amwEbj11BTALZqQT1VCF8w12BhFvmynS4iceaAadBXqUhsh9koNhndd3eaKq9vj",
  "key19": "5g3CRTUARKJ2DHuKKzQzHPqMhuv5oMpK4KnPgG4eQEC7fU63wcG3dZDy6K1H6Ku2FfPUvTyDhEDrX3inUcgRTHoE",
  "key20": "w7twYaEyABMfohhNkxdEX8ipS2PvJzewxbgDS3hs6y7FyGGnqfYbE4u9vPyf3mS4UED2GcECCYaA8vKpxH95dyQ",
  "key21": "2yiyW6PLnM9kfvtGPUtoCDidiu2rMC7hwUoSZjTfuGbQU12DWuYh5SKWpb6srDBLDZ6U9jrdtLoL5DPUPxFLM5Sm",
  "key22": "2bDt8p13GDUGyRxTPu8mREWsJzLA5wF6Uy9z81zkHZmVzVHCuBoGr9pNEBnwTUUMFxDMie2yMNFBfKt93JdKHa71",
  "key23": "4BvpRCQc3kwGz844xp9tHPWpp9VSokTRAd8dcvW7nrHRDyf5csFsiCXfKYZXoJD9zfPFyfn4ohUuSEuzZnoQGtQL",
  "key24": "4zUHgBeqLip2kEhARQcUp1MEXFqFe9nGDcyiPeV9CEUA7ajuHnhn8vysxDDA3T76CX6sbyGxm7BYz9BoREWyStAA",
  "key25": "b3eS7USzQz6uK1ahkVMXTmJdf7HUKgjbNEmgqNsMoRevWDyomdu5JQAg8xLSgK34diq258SFmxreZVmNP6Dnh65",
  "key26": "3RnTCKh1mJcQTj17eMs4QiGMCojDvGDBAANz7L8ba5dam1pJwWa29AakEKd3NxErsrgavfAdfrrpxyjQ8s72dixC",
  "key27": "4hW2gh56zAUreqhJ2z1wBHRDSBaDx6jsitNgG1JjvgLRLHVe9VasasNtrhV24PQxGrxeJwMgzURwU9DGMZsFR4gN",
  "key28": "5w5QxCNUwQBbWb46LCoMQw1DktwUMVqP5HsS5pWE8hGfcKecJguoza6ZsfMo9NWTWixoCewaiyVD5PruTSBG4iyg",
  "key29": "2vQWrBvVAMCM3qsvkpTRbqBw8L8wbucfZgRbWJ6qnEtbR81d9tJnEDZvnYgUfw3aTEk7LMu8NH3E5zYiSALXgrSi",
  "key30": "5W6jkH5pyibrwgagXmJzVwYMxu13mumVezSPGNpN58LvoioJJoXGKnPEFzYGpykZ1YMgYtWR3uBM7Mey4MLDLrw7",
  "key31": "46P5CwoYYa6C6iyTe7hN3cetEy2yyC236RKZRpK4zqjc6RGhpDhkacSB3so6r9aVNtMdYtYk8CqxZm7Qwyb8cf2N",
  "key32": "4GZwi13zxUY3k8NJrUA4t842MXc7AgqEHCt2mhjh5UJHR7dWE8B6PC3rodH7GsN18P2qAwWEtCwwDdxoyxSjSW23",
  "key33": "2W8ehc31A4vBiyrNLrraDFGy1gPPKxQxLV7hgkAguepjhq6mY7qX9vr3EB9s2CrAntb12BupFhVCr5pZrnmio1CB",
  "key34": "2JGbTDknaDuUq29DhGsmviEMJggKJHh4ujvmkUojNgCb2UCJLoZHvmBPsuY4KAir2jbR3JjBDJ4NGM3xprwHjojZ",
  "key35": "5V41wtYMf7nEc47TnKpuBuPbdE6By4oUHt9YRpwzw5BYMBXUpUo9heo43dzbEVB9D1MBCVdSpLGKo3pE51qCeoC8",
  "key36": "3CHRboLJaNPe4MnQDyMyveFmtXCke6gepgkUEHcm16fTSsixoJNxwC379ydSEKL4wPjyoUZyHpVrN6L1viLAhAyU",
  "key37": "5WTg7A6Xbn1fXnFzDdgcK83FojMj2ivWibEQym8PTDZRbZfY2ypTT4WiLjwda1NsAzKM5J6Yf9PJbsjAAixAQ7Y5",
  "key38": "Cef3NQDFWQgbZmQ83ccheGXXXdg76Q1q3qnw1YeeYWHV5c4V9tARnWPNwLK5afpkjikixELXiPFUaCveKhiLcb8",
  "key39": "46XUM51FZGWn6HVdJo9dJKJuZXDsG1z7uGMXTJdmTbYvDd9MwwPo8r6gLvJcLAJVfCGpLHoHJpdsnhjy71Bn5PJh",
  "key40": "38hsn3e1XejJfp2efrkHX99RWTHrX73HfjJFJg5VdLQ7zaFbNmhDftW4Gcm76vm9Vd5xWgEtdjWJC8t84PH4iihF",
  "key41": "5pAsNfqFBW1w1B33giNwwrW7tSeKr27sDrWujyk42Pq9owiJC2RB7xr8fg3rYR6cFTYi9K2hCdA3w946JC8L2LRA",
  "key42": "5FQDnQkfL9akYUPAEhQ5GAxeEHDTVrMurzA7NLyk1cfHChMe7M8JWBVmKpzLDj1E5dx6ECe41mhzL5Nicf9CmkSw",
  "key43": "5inm6njauUyPQMLDoiTmwnpAYZdk46R6hCQjf2z78TeHev8udUco5iWZF9hWfi2UYCGY5gfvQeMN3nfN7fvrkHnQ",
  "key44": "4HjLMXhpmneg2muPDjKb5pVpMFBhpGGFKDRxGfGCZ8CtmMib8USGR81Mp8RSxmsP6uxmVdQxxjuGdTMLaz92zovf",
  "key45": "5sLj2mZgg7SeZ6pNTXzt5M79sZo9GxhfJ2Hd9V8YZNqYshkwuVCM62d9MVHrCcddTcGvmTPkzwNW46qYMCktGPB2"
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
