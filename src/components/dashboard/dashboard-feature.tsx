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
    "2Sq77N7eUaGVQkRVDt5TZ47EMFBf6UnhFs85fkmzGQfhQK642x7arEyDpmf4zD3ZKi1FDpLQZeBhVP2qvVosPfyi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2rycCixPMvAqnetws71mvEv1rNRQWbZGzdPsmzdq8sMt5RtA9xKCDBbevz4wwJ8RtWNhJ6zd1seuKqLANpRuQmob",
  "key1": "47pTunzQXetxmRGRX67TVRWPN5YxSkxSc32DWe1NtcmhKr3yst2P9BjsivbmLBK7PUmEsvTakbtfBhYJswuVMfsy",
  "key2": "KqaaJxgrm3FYUfL2LRLBwnUKruQVyDZF5shathcjy8t4dTJhbhLt6fr9jFc8aHG5W1wevcue5Linf6ZYJS3AmA1",
  "key3": "2cBMjrs2L4eR3cXtCrfgsMFHRZPWB5bfZXSQGiiFLfRRXhhbi8Ap2RkBWnqRYYtwPXtxUmCDZngLMUsaeQXFUpoY",
  "key4": "34JRhzaEEt3ZZMTbVPwh5GGPVkrwEwL6itoBtguPR2hXPbT9xs6FeK3ZsVfQmz1rdY21UihDpDnocb4inK98NPDr",
  "key5": "2DJpVHZW9yxbcbs2hm2NXCgeiBrNoAqo9sxaY3MGU3J4dVu6pQVU8RwYbYbsxwKdLo58FejhXTy2tsiGJ8tuyMnz",
  "key6": "aYUwdwyizo1TwKYWsZWtoupvfzQa6iJ4exR59Qjhb64teMcoJKSeooRhpp7Ypmnrm6L3i9G9PWtN8kdkWVuL6cK",
  "key7": "2wY22oXaJS6ZHP7HUQw9ogMa4EBEBWMGx5ywp8GrGFq53EHg8VsUGkdTC6ziu47qymSiFQAho4HaRBXGSzBUkuuA",
  "key8": "2gh2MJ2mbJAEQYnRPGJALCpNoL84PEAiibLehmQxLUZxrEAdecnQAKj2xCo2CPLn9u1BU83X9dE97nC41crPe2DM",
  "key9": "2wom6KtjW1KKYwKQLMgTX95qBnFK3x5mM1ddngnUxLZzTPm8B6oiyC5Sw6YLxACFE6nA4ma7ouHuvK5PknCFnpVE",
  "key10": "2d58mf1cJDuZ7P7vjQV9hqQN4cdXJtTvS2hvS3wPEppep58T6nrWyM3ckqWsRsKAN54wDamJq2jMqnWK9DqpAZ9k",
  "key11": "5nzwYhtLy3XG87MuEc6KNST9fWXhadW3E3Ra5P8kqT93emS44cxCAAp1BkbUUJWeDYhAAe7FwRRKJjSLY7y7yVCo",
  "key12": "3xLvzzmRqQdzUNeP35BnLyLbP55WTcfFxtDDb5k6TMCk31s6xvVfqsnoHJeVHCHooLrji3Jre9kB49VN3B3cbWVT",
  "key13": "618gQpr2cLSvKGbvZ1HFZnsP62idVXkdKrnJhQRaK89g4nrCYihaRGfmAupzWhPnSipUFedRUtU3WFhHz8urGRSp",
  "key14": "JCymhGcsudaMw8wAKFwicyUL6m5LKwoiBqDCmjYiLHyMYfgKWz6rBxcGFRAzVVBUXUcbsQvAk5BCAyianMk7eGB",
  "key15": "4HfgUG9nnZtr2UdMP9f9u3rHuS5dhhXw8hXEsuXCCW1N5EzxYBdgXpnyDnTq8zAJsnyeT7axNxLWV4UHfJ9ZNiwo",
  "key16": "2aSGmUNgmgipAipktWtCmsFTB6RyAZWQMT4tMkg1BsjG9hUvR2uygLi1MLq5ZxVp8k4ULCRcwqXFHfc3CybbM9gN",
  "key17": "RdXz7sc3sf8UCki2cv9yf3PdiPFF55DkThJ6g9ffuHGem1C2X4GC8DJcPoSkg71B8Ws2bghdXaxj5PFCiH6AB6J",
  "key18": "48HBfRMWbPZjSJcHLoitffidSDgKamsetbWCtWqtbAfHTJMNJDFcYAqWvahu7L2veZof3vZbTAixkyJbAnN96NV3",
  "key19": "5n7myvbT5Qi7AXQ2kLmzfK3WyYLHLEcQSBGEfHmfeCUCLc5n8N64kdG5277KU12UqLDU289LGGxcUv6Zxn22WeUb",
  "key20": "2sCRAxbVwxzf1FeG6hdxZtMz5DyoV2tPgD2uxqYG9PoxDurQvWzdcFxEmn57CUiccvZ9LVvRnTktB9JdSfgrs9WT",
  "key21": "3Z2ToLcpf7GEFhZa2K5y9Z2XDchyjjqrMLJUd4RKRndBxZrZ48q4ehxLSPae55GLuQmkoAMcDYULgyZgMHfhWhfG",
  "key22": "5Abiixs4v8gmnA5BTADtUHYuQtfKV29jnCUGTi8XMaia7TSo8DJRGd8YRG6GTs1tMUG3XCGufVj9Wq2WFQZJoft3",
  "key23": "4vUyygsiLgtcYvPkuFCJu6hiLeAmJppjWDJNyQPYdTZV5B6SkwDMC7dHGFrVVsuJHoCZ5DaS8kfkwDX32uFqzSGj",
  "key24": "2Kt1aY1SqQjNAeB8ghw5AKKzkV4Lq58rfz4WzyUsRJN9oERNjk62uYkxST1HVkvQjBxA4tG4NaNen5C7HGEXUibX",
  "key25": "2d6W35eMTCanVx4qZ5QE7paLvsyMFGyhGf6HVwik9ZmTNqks2Lx3gSG9CCQn3RNSdewjXVhAR2Z1J57BzU1mow18",
  "key26": "5QbKMjHh7Da3AezBL3XUyCecZaEqxmjUobQ1xqnydtCyfLQrMvPKtBb26MwKFtE3hBGYh89315He91Jqf66e8rwC",
  "key27": "4ZbQuooHNhw5GZSUS4sXu9ckizgzRmUqtC1A79WywYSRctHNkQfWJHQgSuUBXbyknX7URuhYVX5uYWPujGziULSH",
  "key28": "5NMssygvSJm874gMbnMy4X1isX8vzNb7J4gHL1G4Mk3Hxd3bdp5H2Zm7vkPmqTAhqmtGwwRSoLFFhqV7fo2Y38KA",
  "key29": "4jGRequqLmAicBwMULYcUQiZ4sqkepjXw7e9HqWbRhQm8B3gf4MnkAsK5wsxpx8u3tH6YQj89Fia3D2DYg7C8MrE",
  "key30": "bLHQN4W77YpAPbYxPCqWDcDgNTEMZGYm7vh2CSfHHsa4ecq8fSNwWyJtRuUUJGdBw3PR83Y9nrRahULC99RXwiA",
  "key31": "3qfo7Gff5WMVRZBrLhBcj629NdnNxwd6x1GzcS3Rm1B89SYsyfPZavDGUs3zkJ2Kod5iZtTPCLC2sCq9CCybgmBh",
  "key32": "5in4wwEGz3qd3rGZPi2aLARVSPwskrrGsMxoiCgg45qdoXZ3ZWeVVCFJNgqd9xVKAWJFQNE2VNtnDuntyw3gMMn6",
  "key33": "36YnXBFpLAea9Ly8zFum2XRUMDnf59fgtddCHmxKxgwLfhWrZyK8kPzQz1NqTG8iS21QCxi5LZRQmmsgB1XAAqrk",
  "key34": "3URxct6f2NdXYYsZ1YZAj7eiDNWFDnas4Xwm8fqv8SmYcq52urjCniZM2t3irpvVrPHXEYjjoinNCYiWeMVCV64x",
  "key35": "5sqPRyxqM8kq9v9fsXSNMFJrQCUeDCivYLvgxy3t5vc35WnPEVnYwk9p2E5i4d5ECnJ8niegwmmxRbd53JYK4HW9",
  "key36": "5bww2jHH2vK6bRY4CpLSpWq5tsChPNr9tft1Lr3BbFa6FZeUkrhxKyzC2uGTq3epPTSXsgtWJbp7saa2J5hfkHi3",
  "key37": "5u6hf5zmVWGhoLfFoXRPjnU2op1d2ERfTsZ3YmN5ZV9AMfjr5pksWhrPdXS7iQ3jDQ8SaetbqWascFrEJ5CPxkiB",
  "key38": "ro8mhaNGiNmJVacWcfprd8LbQebmVB9qdNv4cuEXqPNNxHUWRrueZEU8akZTx8gZ1AmgnVL8myL5pUoP6t1xWgQ",
  "key39": "52CX5nm9UPD3QPZTyh5m6xbPup1sypSF7kbnBWN4M9ALe9VGCUF6N6d5yC3NajqMCCiXNar34uaW4ANXA5MWTPWW",
  "key40": "3sVtKaDPtCPL1SdGM9mCcLn32g7VEUwN4sYwTEpPgTC87p9FsdhLpfWE1aHUiXQhGheLvkPZt6ZxYNgzfX13haAk",
  "key41": "2TesagRuDuygrrhuuHgva49h3ZF374DB4iH4mjdQAkXHWaxkS3ziWaExzByhHwQ9T3uLrsukDNH6XJD1EimkZmxh",
  "key42": "2v9xKtTVXwheHwemzC2crtN377A268wE6X2XSFac1tPGznyk9i7jrbXyxYKo5NUNo9XYEcFL9JQMK4ZcNjC66iP6",
  "key43": "43a9i6fVUXHjARxKQvWBG3aELe5uMXN4gptiiDJaFrZPVUGz64Zzg96ZGhVAXb7uFDNb1AhWjXHZUZu9usMCNQbv",
  "key44": "5AYtEfiipKb3reb3vnnaoH8kjLwXZ7DtrJWNnstBvN16iN3Hvg9BwPC2F9LLfYfKLhb8yKCUUmBhCpZ2ECQoZBCK",
  "key45": "2TcSaYD4KZBaWVrBdm4fqX7rGnz8knPqacauW2TdXqKqKAkuWkQfU6RGAyQHRosFacDUDaEiZY1r45Sw9L6CQuSf",
  "key46": "4e5YNVfbp29REiAL45rZu95xkSmWk7WHYDaQvKMPFP7gacw4TFxQUKxjvYJXsbFFLdya6J61oci19Qw2Z5oVFRTG",
  "key47": "43Nd8dFYRby3gMD2po2LhbJVQ1yVDWv6iNARfCFRy3uqAeqkRzbazfFvceP3UfCojQ4yNW6rMpEEG2vXgL4TQfjE",
  "key48": "2FcgAReGTBnCmDXUR6MfjtmxW1LiTEWKTA8dd7CHoP559C2RgPW8fjbHB1KiBavDSb1JMeTf8KWbiNU4XYt4SDxz"
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
