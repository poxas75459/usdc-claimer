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
    "6Z8uu9fWA2H6oidT131rnjSrb6TWufRG9qaV86RMBAPiHZSP7YG4gVq6j2e5QDZ167FuemZgg1LgDBx9zNVmqeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "25Gq7iYYyZM1qn3896s2EwdkyR37PfoWcDcTykSiWSsNXR4NeUdyrwWvGFiLi6NQ3gGv19rwVS7DFF8RaPEDjQWT",
  "key1": "3D5heT1bkgP2ET7ouxcZwLpGRHunxE2tfGodkhTMwrZ3L9PbhTK6BGPitFU4PXH9R2Wjy9MNci29cCDK8odf5cvK",
  "key2": "3aQRbGZfqr6oBtWM3ZkCerLDtTz49XoSE5PsiAFv9hQNGj9r99p3SjQ6AMTgTxc9xy5iRENGLkhGktAv9iMcdg2P",
  "key3": "22pJzzAqRVrSYvSjtpKeSXJLjoQGwwGr4vKseW1pbjFhorRMAkzq51SN2MrZayAVQZisGgeh8rR79uH7JLXppoN9",
  "key4": "2abzAFzknvEJVyAfe1bLUgoonr19x37XmYqm8veFDxVwxbJC9tRrHWmFPJHdJQ97oVjao858tXVB2wmfzRASbt2Q",
  "key5": "S1airWwwYzBJ7SPZdWwyHesP8KkbFSBiwt7wkfUR2SfcVq8HXvVrbNdm8aVYVtmS5htnQVgHbMaJxU4arTFu2Y1",
  "key6": "2yN2XUEh3g6AhvPmq8akyxd5oDwj8ZtmQV1FEFnYgBhHyULzvA96kvuiAHwGPeiJETDZer4hSHPedd67hfMbgPx1",
  "key7": "47WXMVPzuTVnHSMpH3vKUsngHLbiH9sfry8vnrBbACsnNBh9SRUeeFV9uMwNHqqe4QzbmXRZBA3X6ffmo31AEHmF",
  "key8": "3AVKDUBf1FLSWihBJDJiguCGa9wcauLM8wsZn6WpCFedjbUCgCDqMcCmRRRBDquWd3aGmX4ELpFyvG6ht3hm76eH",
  "key9": "4tKsaMYZsWDvx2XsARpvNmmTd61PE4D3F9XhFC1kHYMrD2rHKnqE8zt1Hu3iJrQ7n7fvM6fmJi1SnquSjndetqSq",
  "key10": "Nvo4kGtVs5fSDS4n18VV73CYf8egUzKUNGf8ajuXfn5HUPJQy7xcZoiPNjNQZLCXL79sQ2cSSWFuctnWotYPYdE",
  "key11": "er7VVpFytu7pxvJscUr3UA2UifcDma9ghaw31Xug4G2foibt8Ce75immFWURdGEwCHhCEkmHZXN8Nj5Pu79CXPz",
  "key12": "4Fjb9ebXRR8u7ZJdbRvmUGndJk4kAxKKzo2u35hpuyLxdfH7fqnCva1ri2iHHbVfw2ktVkEyx3xGj2xNcY8tFaEt",
  "key13": "4dVoJACmJyMd6taQ1DrdTbrz4aaNgmVTKfT1ggW6VjB2mF1n98aBEoMC2eKno5XKEVoMjUMNB8eLoCVgaAk7VN62",
  "key14": "3hQqNYuvBeXN2r4pLZr1XAcpLq5GKqVae1tNuuhMZsWeD8nmURipXM9G1sNqW3oraGXiLnbFaw2gWzXdmquRWhPp",
  "key15": "nXwZUn21tZJ1KXSY82poNrAmpMqWYMPaznqkenVWBNqZQBT3CnTtaPncMDXTGn1MqGHuCD8jGepSWtv6Vi1Gv5p",
  "key16": "5MTwjoxfX7NK2FRYrNxtCGJLoQp6SCGGLv3apYc8ZKbJEj3E24uYUpS93WcCmCBCFCnpemix72yDHw6cRMXD1Zpk",
  "key17": "5t6dxZfV6jdtLEMteYX1oXb56djWoZ8TggoqsuXRpchqcNz4Zd84DccV2J2bpQk5b3WMGrviRBkCy7FsrFnn87zd",
  "key18": "51jqmbCdkQXjyfLA4aBrug4azT6rvg5DBWiW7QAQJApuvsNDsm9XBFGxj46rVExarjjFYwxZ1WUrRRbnjLcRSAZn",
  "key19": "3AGmsBKLL9cZu6qAFEtyLjj9deQW4X9TPdqRsktJYaMvbMGe95HavHsrMn3fjivNKMxLYabUTdJ6dXpTRNCNHPV8",
  "key20": "n9x2UWfZBim2oatwpZRhU9WbTwzjGZEKZiwPvNZrejgnvQDLaShAa275Ltf52kHAy7GCeLh6j7kgNZQNU5f6mhu",
  "key21": "4tFquva2XNkt4m8g3NEUMRpv3GHEEk8sqVvhoddTVXtrFVRo6RDRgtxWCwPzhtBNVzhMGwVUNbErzay1MzmFte4c",
  "key22": "3AvWZD5QGdZrYpKXnFmtTZpuSWdd8yWqBKWk4ay59tmR5L5QDBEU39LomauQecMp6xKxhSZWUCjBi7a3NiVHmeph",
  "key23": "5yMUSTKQ19iHt39eWy7sLfF3qkgzFofja2Q3m54fT6XRKY7pnhNbEU1NXnSrm6Xd8x5H678Vgw53HUCwBZj5gWo5",
  "key24": "4We3ySAwWh4riJvGNeLgJ9mnkgZbRUykepsrGmbMXGvYxGDavxjYRZVmiU6PzrBoREHU3qaxLVaoAqkThE8Paw73",
  "key25": "21M7LPFLcxTZ7gMDf6UB2ervtoyp2QYE2r4AJfWKHSprdzg6khJuj8rMu1SENwT9RaFaHXWZLuCUvNsSQDr4SWCZ",
  "key26": "P2gjQYUsuvHncsSAZ5t6SJREC6wrjQiHHk7UrPSiZShr7cJhb9R6nzejmghszBhw7zJqqR6ziqNWyABHLMWMgWR",
  "key27": "37gafkPogYEP8h9uZYGNWmJNx7enDjCxNfDkXZKpT8KhUzkMHKAtvS2zGmnmtt3Rsha4APzwMYCWvjcVnSFWDNE5",
  "key28": "4WMNNwB9AYvRGRRskUxnYFXdmZEbXRp6GEszsWvB34B6e24xYji4BwUNiqBEQUkLw1YZbbMVM97dvHqskK6BsVXc",
  "key29": "5gEnCMRXdB484awu11FmijsTH8gqehEvrCc9atTeUH1Gvc3bEtx3dyFfpsyuFTEPkrXFEpKCDdDQx3s5jNRZeXk",
  "key30": "2KN2njBE76EtcZxLnYbuXJzXVnr8YXF8koxKG8cmto5mC4CiUhs3VMTjHXxhAbWGzziW4Fa6iqjCH8roc4DAGbLL",
  "key31": "4anhB3XLzkTv8bTvjmNLMLT1U61tosLhitjmFyeP5pc4q6Vb5nGCUMQs5D9vMv2r3jVobZuPsboEsvMM9eMpXxWm",
  "key32": "34tMpWUQ1pzz1aoUpgUyyq8j4Qg1ijGTxpVps2UH9Ef2ZWCLLWHgJvjpCAfELkjpUKRFv1xCXbw6id7EThStwGzw",
  "key33": "vcXjpDtWRXP1qjZ5taz1HfGmPT9rNZALNZrAuZPK6xbrezTgYJAQmq7XnjGpaKHRHBaUG5pxB3XcdmNXvkNnUcS",
  "key34": "4Mn6u2Mxo94T29NUs7X63DhDYStkddUfDRtPrNZUBXRGwKrDtkUtMT4S91B9cryinhLFTX78dWArF86MhrP11CNd",
  "key35": "3va3RaimbFXsfSwcMm6nM4etDEdntQcWpELvGaECdhjcbwGBUXYfMiYsERp1nC8teR8dFrchbFaQtkvYPGFxTeiR",
  "key36": "61P6J6MVFYRMkYgGmmwVSpvnSpR8GxSsS4WJNMMdn6T5zaeiBai69fGymfj22F1DtRRxwEeC81qy9PUFb3oeoLTG",
  "key37": "5rrpMKXdNzVABH6HHy5KcefndR9AJtpoyHq1KNn6ioSUVyRvZXwVdzHBqzfHipFDpUeSWtK8t9ARZvkbWK7U3vHW",
  "key38": "5ZVWMTH348wCxDdnTZDDDEmTKme54fUeaRXMvRo1zXEjppAmdm5Apbuho8MXSAPPYecDaoEWLbX7d7UE3w7wMdg5",
  "key39": "5TE2JLcwnUstQwhu5jTe9QGSCyXJN9yLBtP9GsxZnqqgXMQnePS6FyJFDqhd7zEFgai2M1F1d61gZ11u5YudHRec"
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
