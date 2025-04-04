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
    "3Vq87zCgXEEEQWtHbMvVitfHx7dPomtGCbxTFtYYgEkE9uEqhaT45nq1A3tSgqpBPwfzJB5JeDM4PsaTpteoQ6PK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2wZyQLqMZGfGiAeQs7arZdf5oo5C3P2SfXnbYNv1h5nwTMQ8kxQ2awWBDUPpwTQQMBUQ1hqaUxccZSeYw7tWozoa",
  "key1": "ag9q9y7jpDYokyHKvKeryd8judBuSvKfUw4pbC76SGG3swWjSVS2oM4R3m1Us2HgUWrNAJs7ptfACDyyy3ZrC4k",
  "key2": "4M8PiGaUgL78v4tXiRVvsqUafviAabWhxXXQwgar7L55QNtKitbqF1HZEC2hav3xoj679QEKAAmKxsbkoGU8sunA",
  "key3": "aopaFuz1zpeQueSjmpxmZVrG8G6xx4g7GM9wmU1GF1dAEbpHmHQyYmNfeoma4fEL9yNJwuEEtUwG7UgUidTxSYp",
  "key4": "4NB5THhbufZdbFK64EXUPS9bxFQkktjc4MhTHpjHr6r4N7k1bPvxPXDyNTXcaghCZguW2oVKpffHFHKr4bpWzGUv",
  "key5": "43KKuwwjXZBJBMUW5ViPu8XFCeaY6WeWPi1hCsdqb65dTW77bSzMTNBB7sUzGFYf2Rkhh32grAh7kcoT3ysKpwDw",
  "key6": "3p9DPi3hcDMrFEGvNczto8AbYbtm3KDEdVMyZZHQH6ixXuUyqMSLNWKVeyHseeUvS9Wj76cZyScaYrBZ8Wn9W1nj",
  "key7": "5SKBpkVgZt3z2xfjUbFh2mNt88LwisCn1QdBy8cRLDAWBkzxWxzxFHRWDKwhMg17GjBeCKu9rAyta2FhgxePdY7F",
  "key8": "4imbPoKgSEopYfko7gD9Wc4SSfhue3J858yjDEhHKy2ECUT197bmZKHQYuV1h2WHXtRnKuj2RxFqr1MJZbKynYqJ",
  "key9": "2EWcFxZfuWPnuC6jjjz11Xk5LP7m77dEgMDX32SiuL3dXjKLx4kjGkiSGypxAbM9WygRUmJ1RJWi8GZMbmbkQi8M",
  "key10": "2SzucScbqTBnwsdXKWLAfHRxZpTDp5mV1o9JTFrY1FSL4fQrxnQBdGbgKfqr2yHCsuzV2y9Tw7QeSDuR9aBiCNvQ",
  "key11": "37EZSRWADSad8YpeHj7GswqBkxUXsAPDRf9VmR3oikbB3R569dEQBmzbw61fMdtLUAEnd4RhdpoVynmuS8Khy2VZ",
  "key12": "CHAxv4rGE6UbvR9XkAVsmTKtHnfuJPX16aGNCqHHM1QVFSU7LYB55xYCGAizYVACYJuF6nFyQqgh7GuuAAHYqFc",
  "key13": "3cR5QeTsDhdD2Ut22ykrkj8oKVCEYwEuhSqJsTbuG6QfpfwMBwWVDcaPcoby57fvLMK5GdoUyuRYZuaVk85MqCMK",
  "key14": "51WKw4wf28XhAB96Uo5tphNgRCeyrvDVth5KeupX8iFgdhmmvHbtez8SM9b2BRZZaQt5HY7aZEsbnZtMNNBcFMxY",
  "key15": "23sh6ZZDHWPH8SwUMjBi8jfewowQGNftXWhtvm1hufX5iLtVKY2xzaWrms5Fkv2QVLBNT8vd9V1NdbQbnJ329c14",
  "key16": "67Ho7GfA9psySoB9Pf6V7WG9tincWrjuT7FtjoqvyWw9dbrDg5cxuoHznJ6P21KoNL1U7aq8Y7q1VrkJALUnb8Kj",
  "key17": "55YRAUnA7GLc5F3wPaoMSXg31PRvaBcwq68QJvu4Pe67dmhqeiZadtdx8422CwQRQRfWCN8Cia1GYHGSuJkNnbRC",
  "key18": "57LHSSLffwSWUoEFxcFFHzkVQCH9EPJv2JhYHQyPSARjQ1Putx8SVBVn4kVeQWnEhp1atp3qTdAGi4Q27VvLKDXe",
  "key19": "2sYGLmefg3f7B4HhSobeHi5iBoJzTJPTtme1SKfkiexGXPQDyFnUBSdYPdq5uEM1yhCEHc5rRtSYzSkvgtp9YwPj",
  "key20": "29kDP2zAL7mpaW12zP1dU9tiyAo4EdYsSM4XwJn9Hn4TqFX78RzhY5ZGiSdXoXaYimf6aBQ7nX3h59ohs1gRZR8z",
  "key21": "3EiaPTd3qoAzLFfupTKr99LPDynFzn3fgoHijoQZ39GqpyuSqPzWWrLydXsa1Bbv8StVe8GTzXbJLTzq3hiNJgiH",
  "key22": "2MMtqDx6zSHRNuCj57XKCU9JvhTjcABBPNv51NNLVQamR8aSd447jc8EUqzbFDqfC1jHnhxws3eVFEAZByr1phEG",
  "key23": "2tYKTk5EezvECDXtjZWWdVmsqu28McrwWeQWcauniSS8vv4msyc7NKjBiwAUrxZ3AJyntuWGjgLF3489BMXVGzJa",
  "key24": "4LAaJmaazj4MWjn4EvxABK5sAdXVWPigFerbfGiERYGzYtfftca6RSbLX6eg3MEYQCiZHQR7nvuA7rYQC8iGanEk",
  "key25": "56YHzSoMmT6T4MpXXRUvDo7fT1n1z9Xvgi39pXqaqoC2qLTKsThFCMcp2fS4wtVajm9ikNqty1qyHN3ALSDnKdqT",
  "key26": "3FawLou78R6DbwaEDWSdMABQMT1XAPrdTvpyPktepJJ3kp5benPjMB8P7dAxzvkaWKY549VY3qwJHcTcbgvsxf8s",
  "key27": "45aAEpPu7Sv4ky7j31zDNKy1UzLqMCaRzYRn69BAipPetctMJDxwUyAwEHBzmh5EsNd71FcvhLuy9NeS7asq1C3i",
  "key28": "Gf8PvmTwi3Ej8erwVs6vqPc7JJXTvCYTn18nMc4cL4bYgnGqws8PEJuRnt14aRPD64idMBaMLqP8B33xLGkuuBe",
  "key29": "4V7JzPd35tsG3weqPYAJmdSFhNfkMJ6w4JsCPeJAX68VRRPuocfnwjz1meKj192rsLPGTmpJ8ybvNVE7dWhCdjyU",
  "key30": "2FWnRYLjpnyRT8bNUB1wgEqjxSFJydpZa4B2oh6Kfu1u9fAViZ6krxaeVqxyQe1mwmVczHjshJPcDCFuxGxAvWjh",
  "key31": "4J8WUfNxYsHwR3UpvRhFp6MejLEo4YKJx2L28e7BLL5gcKeRWYd5JXAeWokQ8D2jTmsp33r1Y6Rc8WP445ifqMsW",
  "key32": "2pCZLqG2J3obkvqSAtoukmrPZQoTxM67vyS9ieVRKRDjvj9NV2AwCsx9wFTcMTSxux8NEBmMBBqeM98h4bH3R6PY",
  "key33": "2eQRnbvfuc9ocgHKuR8yfMyyEff847KSMsKdzacWszcJ7gHdX5Af6y6aLgkfthZcHSUB1pmjSUVAQ2B7fGCmWFgk",
  "key34": "5JH4rqvCsPDpDNqPoQ4dvDmWe9osqS42VCtPapYFHDsCxFc1uYFTzYqh4AHPYmh7A1oWMs7Cwxt8pt23F7Mr8Yqi",
  "key35": "2nsEJar9SH9JGaxEhHTSHrFZQjfsvMdR3itUsoWvHp87UmBvmi2FMRwLabsMByA6ZhnJRSK8WHUdnwH8zU5ofzRZ",
  "key36": "RYMSHdaRKEDLDdEGfJypubTNeU5oEQpctfGUCADtc88MZjdndnUjQqJc1wFC4xpBfCvUbUkUkde7urQjb2F68Sm",
  "key37": "4v5PjDMo9GVguTLpVTpaueRvFuXD3BwLzrsUkpoDgtPdAFqKmp4RWihB2dESqGVZWD65UvkgTZrTQyqhaWnuW79B"
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
