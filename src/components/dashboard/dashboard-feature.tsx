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
    "5r7hcWHjTq5egP8j2CtjUxnZFDAsTJfrCFVqkpQANzMfR6RfSXoXgu1L5japr6C71PegZGTVhvAY6qc5c4Sf9Keu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4BKutGw6xbKUsR5kky1kzbmbbEgFrxpsL5VgATdtN9wTRZVw5UeDFahLNA2XgqRMzDA4T28MNga465A3sQ22enoX",
  "key1": "BF69LwUkfQA8P3Gdpc3MWaQ7zZdTQAtwhiqP1kzpD9boVsKSwvL7NvC3EnkPdsaYbP3HKQ8Mo5FN12y5PboUabn",
  "key2": "5Msa3QK7ZoUiSCfBoNwpJRpqwoAoSnJe1vq8mcR8KUP9eZAgtxBtZ214CGwZhuyQC7JitiEGFvEBDLcFj8CrKaaK",
  "key3": "67gYBD1oz7MFnurjZkhMe4s9jAPSzhPedBx36rJR41o846Bt6QpjsRwjgjqLH8mbKiXfb18Wa1NF4GT8Fjjd3GtB",
  "key4": "4VizXRHfa8VF58baJaQhAitkmdGNhf9AtADZ1P3P9aLCx2FcNH2r4dcPweEs8MH6xZheX3AsoGYZ63PEK3AKHktF",
  "key5": "3dsVjFiRz3jZVwZku7xnbnrC6YputMyUuX7Jc7YWS53taF3n9p65tBqkRNrXcmqNU1QoCHGktmCMjGG6hKfNtJGp",
  "key6": "GUVcyBwo7qyApmCfeqbcFr6vd7uyk4BPW5dXp3GpdRBc5FN7pQjMtPnHAZNakAXcp92EA7Pj6pez7a1D5mo3R3T",
  "key7": "3rVrb68mG54XFjtxAKQ6dsFLqcbHWXhPCWq8Lq9WZdhyBtww2TYdXCX4R4A2Jn2bJxK4wfYihLRcr6BYZ1t5GGkD",
  "key8": "2w1jTNP8M2mWVZnM6AThdKXjBzivLxXh188nhSCLibSiyuHNbrgytSfCdiz7tWycZrUSjCsa84T5qpzFTShRa5vL",
  "key9": "3yeRxU2J6St1tZfBQFK8hmmG2njAQtQA5YKWr9XnfgcM3vCJbSmKctrLbrdAZsvNTWLYjd4DnxDnx2a72URp2gU5",
  "key10": "fwGy85V4ZDGKTSssGgHxfbmcureFvp3JgUYy8cbdvyWTT2oDGAb3e38B7WW13JREw46qJhp5TD1o3XBDKv5kb14",
  "key11": "KijYqf1U9HYwchubZq21oQLBbMqhjVMHVEJYb9bS1u5mDZYFAhc1mg2Kt2udqvyYLqSEPBznDVZY7KqBhnAWYqz",
  "key12": "wWZn2U2RTHThbvij3VBJcZq2jGpni3MwNT3HRyFPgvRyd466fZTAHy1kspY7gDhMZ81mBkkH2BvYJnfois3z82C",
  "key13": "2maAB2qvV6uifZuHHYAohgiVFkVL3kwKPsbCQ35AiU9Gj1Bo9dSg85AKUHaBs3nkKEcR1ZRWvPTfUGDsQe2Ji6yG",
  "key14": "2sMqWbYYusxr3jjeGswectZoS4W3Ej6aNBAyUJJBGGu3xumG4zpD9N37VXJJofZKoLUwBoH7wx8RjQtnces9LL6X",
  "key15": "2qYGz78BUfxrpWaSn9ja3AdGypz63v6Roke9fpycW4ewcNFrNiBfJiS117pJbLCEu6SHanpNHsi1DKrU4VEpDFfj",
  "key16": "48PZc7Y7ZNhxqpodjtcF2cHRM43LNBM4s4zVT5hScWvtwiRppnjW2RXaa5NbHgWbjf7kNTqGsmgRwVXZyGY6XV7B",
  "key17": "4Q8TNNj1i7wpS4LdtxekG56HX7hXWuNQhzbvzixAU5swU6fbHKtzgtU3Hr8bT7ozKTio1X9eLxRn3eJwSaSkfNPh",
  "key18": "24QJXMkAwgMTmWcqsqB46Hb8ZhjB2wNur95EdxRKzcRhHKux1ubzg9sqP9BZjXBUKKq3zNbZxUna4Ht87LbbyLVT",
  "key19": "3U9upgVjbafM8MGn5obupHiZYbVAawibKbyecEdHo1tGvYREBBtVrYBbWShRYvqzFhoGetTEE1yKoy4dg9VgeN6m",
  "key20": "2psYDAWqANTvxTjyRCLVRxsUS4pKcogpnB5NgzGEva3B5RFHZGJHpbqwcjJtg8EUnaZYvd49nzXDKZkACezdwsmi",
  "key21": "23VZMn5yusp4W2ejgmKVdfZApKiMsM4h7nVEQgxp2ZZHzCD91inCW2tfsMzbdoaFQmWJRSsTMpcwJok9R19kN2mJ",
  "key22": "4m5zUhN6t5hKvpwdQvN5NcyDit7mMzNqBXQRhPJjdEbcbFXgq2MezgeeRbRJMzVDLW2GzKDqFeSMb2NeUheqh5S7",
  "key23": "4raUb7f6gYdfffyf6ntV3o7mSnA71T2Ax8wHDZrRay7rWWLSXcuAGoKdqD29Fk1EmUEnfGYb7ovFdKP186tHvM4D",
  "key24": "5qw1jzNEEYUX6X8eEhaimCpyeP3sUPxuMjXkZBLw2Bow9yEHxWQu3o6HiFY4TrF78wToWjjMJJgpbLRBXSmb3JKc",
  "key25": "5S1Ajp4BomUnrBqbMz3Uqf4fRLW8KJh7JDL3wHVYD3XGyTKr4epWbc1KfZQgUHcw91bZdZoj6YqYh1FxaRSQAPsw",
  "key26": "2PEAgMX6bXajaEWsRuAZh6AjGTFaorYPmFQsbzKk6MHtZeivn7wr1NehXUm1juxPYk7mAeCT1EZir1VK2mFj1MDi",
  "key27": "5jucwYvVi39nDew8c18EqHhDL7eJvHM5biwuhBAWQT6B8JSF4ijS1sUfXNPZtJwtvArBEoMS7M3YEgSgsGobfP85",
  "key28": "3tGtuSG1C8hSMAZU9arASJpQNj9XhDQXuip2Fnhj9UT7px7v52C6enPqG5aAAHvaUuowaQHLZQY5JedLtU6wzagf",
  "key29": "AzPMDXbrYCrDMiabNjRDTqFKAx5HsAp6QwfAnDn8URhSZ1SiRAqC7rgVkD1eYPsj1vwfCGKac9MwCAcVuCv6LZq",
  "key30": "56pz8prj1kCeYzFPvtTsY2xR64m2nFeec7TsATjrsVAPx6dbZDh1LHb5N2Gjyts9XtWuMFWw8Zg7L2xeyBzW9VQc",
  "key31": "4YVzcWsmwRezBymRU22aN3pN4NqX3Yd5f7cxkWy44PCjJ9trHv8RcRoS3KQ8Sf3mRNT4jVyFbhDFoPVLZ7yqHEeM",
  "key32": "333qoMBbmXVNG1fqLFneSZsEtU878z3f3Y7GQJn58quNik1kP2F8SpfgSFXcN7DLGXGCPEj6jvSP7DMQ9eoHZnLv",
  "key33": "DQdTF9U9q6LsHiDQzsqAXNNuCENWUoFmX6TDKpH41wTNA8AkAiq2YMUHmUnTshLe8r5nP548KNCZG8riF2A2XzA",
  "key34": "2gX3QtHKn4T7k4WUJsWAN8PkMKgrSKRCinfAxV4PBqjduWkEpjL9jnGefWovPHFgiUispogVFhqMCc3GypwzcFBx",
  "key35": "4vy98qWYvTPFvoM1pHFndDd4aUqpF6WtsUmsmdHSmHSghZdZLSfBUUTUGHkpauDX7eKbS3WcQtvsb2oFE6xJpRUo",
  "key36": "4DjbpkXCQyGEKwtMo33jZDGLcfL2ackjkLbUTd9qCd6uyDqC4tRz7QyDnT5e5XxU9yckQF3WKeQWeCJaAwxRPchJ",
  "key37": "5rNgbQ2VfkUYYrCxZFFPqzCUYJS91t8WRHuGNpXNYqfWfsCyPCajeQen4GNjiopvYJpMsv9zAzC8L2HwJAZ7h8Z",
  "key38": "2j3D4JXtTqbCJJ4riWuPaFtdejtytvMvDmLDh2YERKmhAcdXNASM1aFSLjDfBV22LHB4WyA4d7AoYm21Drqa2u7x",
  "key39": "2t6DNqbFQNhNTT6MbQ2eXimMVZYMDRXMj5Eq5eJJLxPmtGQYHFjGyyX3MeoESEZHwYVQFh7XogiwYYaHWNAese41",
  "key40": "4p7cgcWid8z6QMXorQXNmQRFPrzAbQud8C9Ebu2rtFCbhmYfTbAEqXdiEFWgTeENAquVRuoYdjWzwfD5Y7igxsPH",
  "key41": "4YhrqZYQYWNoFdDFEXacYBuhjXFLAoLph8HGQXwhwJDQHzvtCwRmLmfgyNbRJN3YJx8wiiytHbqABr5cT6tcuVsU",
  "key42": "5JvAX9ft4qb86uqA6BVQk1EyXQsHrCkwrPNopWdYByUewG2eLFZLUFaBCw5QRVgmtj6vyU4n6w63sat8Kk88RdYa",
  "key43": "4KDyUbwtdweoQpmDvzbbzYffjW4qTNc52KVpVGwoGMZfEitHrzHGiDZYZdBToPV5hYfBebCg3BwnNQEnCni6jjSY",
  "key44": "2pvZ4kyP11r2qaqWAeX7zBevowhJt4sBU5xZRwrH3kp4DL91Fwx3WzELpj5CEQs6uYaKeaKSD8sdk3gPvbUFBpnE",
  "key45": "5ugXSdSLeXwA2uQ62Y4h85YP8AYUWeSb3YGy3ujkSrjpq7eWHaW21pnAnm89JyNs155ubACsTH2NatG8iE1mLMA3",
  "key46": "2fdiyxmXWpRCokqcpfnxBhZDZVw69FQNPoV4hhzqirJunWuP6FXZsoRWiUUP5HmsF52HhPk9ieWCJRqYcRJJKiF9",
  "key47": "kxMySnP1FzivuTgTDrH8v9sTVdYDk69J7Q5vPY3enEitVQDJvsR2tbXi7V8iLECWmWj9TTjipbC5h3yZ3LsM3iq",
  "key48": "5AnKGGa3YnD1g5hmyPSvoLaVY6SfHWedL9QZCRTmGdViq1qM4JsLZuGwExkiFPKC1wxpPgANxQWMvLva5e9jThJ5",
  "key49": "4Xj8pmN4bvqoDfUersvC7wKrwf7Df7MHeH1tU781aYDePANknjqwUj7hRmSmGgMKEoVe1frLhy9125JAQ798ArAy"
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
