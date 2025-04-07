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
    "5yJ1PWTxtDHJKLva1rNASHJ7RvM2VTTfDexsj3PUotcs6bqK7bWWeEdHgX36yUAknLh3H45E8dJ8NkNUk6Q4KK1G"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ocqFPcrdpQNZCyn5UJMPeKREdGvmuxXRQpdqNYh8RJGC9vqmyekqj1AGqtMiLyUuuWn5AN2CDLM6QNKmwDHTLrP",
  "key1": "4prBpzz6jL6EfYXDwKzxajbTp2qqH3j98Lqb77cU8Ye8jYXqFJnDSDhGK2D57YJBFC9UW29fnhV1sphT3oBAGP6Z",
  "key2": "63LP1JGNhhNzBZyfVTwpVwQ8krmeVuLgTHEbugcRGU4BhoWFgpxtFW5wV7smTbcCAexAUPtXtjKePbnrXmbdtZML",
  "key3": "yN5fXkJ2rk3jLVZgDwCnUR3ZwjjpFgAWcupCbhAVKBLh3fFLaXC9QLgmkjtYUrmgtpCPAtU44YcY3h7i8pgoUSS",
  "key4": "5nv4i5rjtEG5LgNgQh8qszoP18qkFxaS5QPbUNgweJ38YcTDXpz6QEdKTjT3NGZgtKCC1HavAQC7UV7FqQufBFt3",
  "key5": "uUpvvgVwnK5habqqHgAZgQZLZAenWA9R6SmvCsBBzAs4hZDk4a894u5jct6iQapHhbuQPGcuwSuyFnq2fZP8foN",
  "key6": "3kHvczcqBXfgmeV3dNA7u55DME9rszjQ4tm8BeRngFCywXeDHAwLftaoBjRMEximcTpHdnk9AUxBFq9Jitp265oS",
  "key7": "3vRtLHXSCVHt4uMxXKA5Z2HhDPTyQTrVSMynRP5V2RmBz1Fw2qVdCXVV49TKd3PRGNVUFxsS8gN56z2V1xTM1U1a",
  "key8": "4AGA5iro4uBgbzNP6SaKUGfrsdPnoejYHgf92GVmUiHFZHhohqZEAGM12frr6bkWLwUvCfqWuv2MwELQrfBoepMb",
  "key9": "3g6JMD4oynSQuBtYc3eWGadWSeaFUq59MMdj9KcWhdA86z1p8CMZSyhyEdwKoBiwPjJhHdAzNEg7Tboi1cYqEutX",
  "key10": "3NY9uvKM9gKpEKq5iExSKGM6J1sHeJDHiZBGi34DU317nj9cPa1Rr6r8uupRY29NKJQhLzzhnkn57vniLQrJnuWT",
  "key11": "3u3zhK7zwM5W1wLQ7AsE5A3UtCqpHySzxYxW6hn3cXq2iUMo8BSDidCJMKL8RZE4ujhVdrXmq9DcHzE6udPsxkjH",
  "key12": "4JD1WbNs2MUrrwZGnxSx36gcQXHhLcDso2LBBFJyxfDN8oP74EaiNrp6ZYB3Ws734TrP16r8Y9h2e9oSgxeyrrYE",
  "key13": "3K1ezneoHcXmcqGm51Z8Y839tx3TAPuUcZxuH41xjrd4LqHQ9Yi4gU2XhUMBs5efgSAa5Wd9JkVsAMxwkME8NgAD",
  "key14": "4k8h1bP1VnRBG2vXgwXKRjH6rUyDyKP9xtf4s8v4UHELyzj5ukJ9AYgXKvRazkv1D3Ada9aSP8MttzHM6XcrJ3hS",
  "key15": "2duVM74nV1eDxajXD91KjBJtEMHKCN7Y9riXta6PW9R8SKvu1zYSj5NcGr3RYrtFdH9Tq4zDJwx8r962joZpfA68",
  "key16": "55r3mgkovv4XeHwuCJDcrrL8ycRYBBmsoBd2PvBunKccj7mrxk6YibgPRV1zDq4nxodJPfVq71puK5No2y8m1ncm",
  "key17": "5rHwgzREg3BQvJp6U9TXvTvmckLrR85e1PpEYffdDemVWh2ZAqnFxQTDuJZSqiiKoKoVvStJx9wNAYU2QFHMsAXU",
  "key18": "2piEf4hWqfuyj6TfwhpiwX6jx7FVS4rDMjDc1YWHLPYxCsfYFVqNpAFEop9PcGTNsLCpt2eMoqwTMBu2ni6jRwTR",
  "key19": "4JXCmR2tGzjidsf9LUZcysr1RU26z4un6qGRnwBQSNSJAZHqTxkZC69j2Cnibg4x45WygCjaF8g7qtYMPVeb4ARL",
  "key20": "3QEcNodiVgM3rCLGUStaTMhNd5tcQ1NZ4Sj41gZPi3vyTTeK66de8whL1kVkqUpwgjkPjdav6QVKBbtbxmsFv7aM",
  "key21": "47XaMwvoV4sPVMn2bjZfUGwYstns8fhzuYEySTjxo4MqY35e873PixuLynn3Efco4hLgFJyfkU1FvZT5dkKPMyyT",
  "key22": "2M3XFq5LmHNYFYd42ntj6KMf5CEzJvKCySzrAW3S6Z6T5sMY9z2292RcYunpTRSp5ZHiRsvrxwMTUbW4r9G61oy3",
  "key23": "52jWkkfS2C4HBsF4cEmkRKvZQfdDicaSvv6fDakgKaKCZ5Vh9rQ2qsrM3QQmG32Ssa1m13HiYmYTcfxrhtqV7An8",
  "key24": "5ceMMusbamWh2TKj4DRnKgWZnPPcTEToZvXYyyS4Lu8RRiR4Q6R1YM52EWbDwydjXN9MVsUFUsV9trNiiQJ14wCN",
  "key25": "3UgHzg87VPNQd1oaFHxMWabnE2Ns3p3CSAB5XJAzVxEKRUm1HpwLnVGssKGNpxHTe7z3nUGBLRf8ck5fvMk9N4G2",
  "key26": "3KBGC14gci3AnN2GRtcdZDyoKuhBnCYAqgQVoPR312y6EzdHn31C23cUpv7wSRNBDajfaWmHXKHZn4DDw2tuoAG1",
  "key27": "52bTC9wcnMvrpzNjEpX7XTkEqMMzc4DAGtoDtA95KCrpziCHdWDbpHNXiGUwcKfWMTVTHAsASFToyoSTMEP5jJcK",
  "key28": "4ys2K6Dc5xtY9aRqs1ttLuSPkdLBrivuNsTYi6S5ZYrJkm1RUVcTJahXX6GdZxAcKyUHPMQ5EvmzwqLNN53K6x5R",
  "key29": "3huZ2VouoDidFbqE6EDcgrTivPMwfeJipsEyXskzVNn6LxE4ZMHFH94uuMvsKYVcjtxQFDfxPfRE9yJQTXJF5cNH",
  "key30": "4YhBEoiGfKzsh5LrvRbBXdyaZnRWaAkv5B5qva8ibsGS44FDhwKafUQKWmFiZfwpWErzz6HoLWhYNGNqV9ZmuWC3",
  "key31": "5YdRyXw2uaVDd5gMYEJ8eWqRXwPh1LDMBuft4xgVnNycVZo6kzKdaNALkrin9AvvoqyGJLMwRXAh6xvdNqHz2d5Q",
  "key32": "5MWoLjCqU1y7uyNBVzXmRdLVaZVg4kHpm22wYTeK4qK5aJgc48dtMRAMFdkxqk47eYj4yXjSYN6avwEFUDBovYxb",
  "key33": "2FwAaJrcztEsBZw1Q85ZNmUi3X6heLFi4MB5fB3ArPheFpjmzwYsYsoWaaBjKYNkKbCTQ1ACcKhg9PDsP4MUzAu9",
  "key34": "2bfSP8XApQ4MH13Bm8FMKbWc2a5tSWens1Vq2grVGVs45mBBXpxz3TjytXPMTpgNgjHaMqkL2cAKH6LRAjR2Name",
  "key35": "35M3Y1Va7RQzr5R8r4Hh7vAqK3VzovjH6YqJ62UoXhQxSTpNEhhNqXJBqxcmBT7SsJzwr3DKtihRRc2dd12xi3YZ",
  "key36": "44bk1GuZL2xZzjqHdgkGaBcBigrGYVA12TB5NnEZbXuyV4ND2CDBNNTnXCuskfQroqPe6n3UGCJcKN3y9VFy6mKQ",
  "key37": "4euQJEYhJy25SDDGUkCjUHf6dXCLhwM4ZS9cnX8b9iWiazvbekyPbrDjcfG4BLz1n98TfoC192gdGzAq6P11X9sQ",
  "key38": "2DGKKcWGF4Fz8McSd8cN4KkGpoCThoW3LNF9RQQL4Sk9AZpQ8NKajdi8gELnKnJsxgnKpiqphGRos6erHdBNZQGN",
  "key39": "2rDzT8GK21HedqPeFMrURp85RNahFaQo9HD72rVUwR2NQcPSQYAsHjftdw5SsJnL2NqZq8KiNfdGZ4u3abbevKNU",
  "key40": "5inikuoNfkaJ93yPEU5B67pCxi35aZFphVSKVH2ThQ84BQzKEpwzkd2ibTW6yTEBS8L4rhguvcttFoLKoWxRwTXc",
  "key41": "5THuc7auF5EKqzwNbDEphbEiPGYcKY3Fo9GRHDkuy82jduPSB2FJBE5j51eUHAuWwsDAj1vgMRQMwomjaSMkwAgA"
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
