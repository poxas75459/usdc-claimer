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
    "qBQnok9NBWgVpE4cxa7PigbJE63id98QHsoF9sKx4P2962pAPd5HJDg1YeFi8iqwb6nVdg2ULVYRpNyMGmZB823"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4uBBu4y1DKMT3wUDfwTMGUZNgPvCtta4PudKRhY6vefZfyxcxx5egzXsKw74qoxjHTiUWtXkdg74LMhqknyxw7kE",
  "key1": "2DnkkgezU155XRfKsuD9rPhRHsA9Ax4VSZwABKnG4Sm5Cz1xNaHTi87i7VhRJLqS7MuQmYmw9mtGUGQnvxeGTzFU",
  "key2": "21L7DRVC8LXzsgxPxWLpz9WHJRMZ3gFrdnh5oJRSZHGu12fZjVbmJSBspfJUHYYYQGi9TMGwnXrDM4aBd3riLQ5F",
  "key3": "VPVkKFfPmeQbnJYfeHNFSQvgwz3tbw1maFhVtpUebMzJieWMDWjAoSJUDMqrAn8urTLeViKrvrs6esjST3Y2SE1",
  "key4": "5w2GvozxAg1Naxz1TmGt6fVdxib49ywq8FEWEEfRPWqqVy89WGbRM3rQZemZVA23uKfAieaQDPT3oVsD8Sjo4bf",
  "key5": "26ovitxd59oGFcpCziVUccMtL43P69itF5MoQBa8ed8EYkyv8y1TuYGfGM33fR8XmBapTPp5D2aYkZ2tDGXivvrw",
  "key6": "4P8DNY67snBHvSdAJ25yNrkjDXz7KDLJbQJU7GzXb2o2HHCEjFvvbhy2UgdBrCfWycvnCgfVgzbm9k4ZvqV22YwC",
  "key7": "ebDMTCgo1qhVs31HmBLjLq1qshTEtJtfa642DGMtSXWkBE8fM8W4WMPAtFn2VBRs4JsuJXFarmC1ukQtN6FoqBD",
  "key8": "2PgCJHbFtkaiNqdsxRCmg2pnDgZPT5bNdVT7tnGi1U3o8dNAjNSieYs3DtfDwQC19GCmWDu5vinagJA3Nx5zeoph",
  "key9": "2DdRSBnuao16gXoxtoZ3WMzV8NL8SimnwTdeKckeSrDF4dq9xJqwhv6EUVHsZQiWekFwSPX9s1iuH4wKwMMMbo2g",
  "key10": "1kGZnhwyo3wAR8XwxUS4tEvyGDb9F2TS75jY25rRykeJoBzkQrPTjkWg7yqNZBN5eck3pFxBrhsyTzHNqY44Ku3",
  "key11": "8Eobm8eYxQnwjarmYYdUrhFAboT4X9bsftXgau1GZKMmvgoznefdDhWnfvrBxFhnkLmhouAW68eqpjY1aTzwin1",
  "key12": "3pZvX4idXe4XL9av9Xifz3y4ZQiUtefWd5HY4XPaMzr1vQPwKSP9dbKNhDzuH14L5Pg8XPecSTizrYjdG4FJiY7x",
  "key13": "2k991xqg3WD5pKHhuVQNuYQDxMXj5nNCkVMSyyuGsYWLEeQTS6PC49deJz3kdTEc2QgVZNuSggnaRsRR1xE5RTs8",
  "key14": "5dL4WvDRSSMrDDHRrK7qdDw2fsgGX6paw1dgMwjPPEZFMZkn6xadMJjGfN76C8G5YwNN2uKLHdFKHCpoF3DXbK5q",
  "key15": "2mVVTWSiykvoMqUdnno9H8R69dyRVyk65Hm3368bBKTAZ3ztcczDrnUwauPNGR64UsTHgUzfuQtv1J4k8B7WN9js",
  "key16": "63ePMrnqVndDGyJ8E9qH7yECnSpEPvk52jiuvvxvbS9Joigi8AvRLDaxwXYXANGTT9eAuKZQi6wP18YJNaXGbUaZ",
  "key17": "3EsySRH3T7Djbu36d9F2WjFW5QwfPXKbCLgDk4tRQoHwNdYkr3wS5YAPW5xU2wr8xzzjTWGGd4ya5cBK9GZT3c35",
  "key18": "4bsHgP3Zp9D6q9ejo1RA7JdG1L791DgKQoDbSjQ1LYT35HyXhABxVJySbjTbT3836RXN9cf8YBoXEPQ2oxQZjnHb",
  "key19": "2XUmyfqhQcXqvkLajRbhkF2yHpT1ZvkC51kSE6VNmrTnpYbsC69tLoLDUx97TEBcnBsayACA5H3YhCXDkdGFykcC",
  "key20": "2qzLDxnGPN2LkVgW1TMaF4cPVy1TPAuXWUPvJALA99A33MDbWiBdKYjAri2vAzBUyqfjWfPSNrWhDKPSU5NMcRwL",
  "key21": "2EwxAhcKwdd73QMYdna5mUEF9iHFFXq3DJwXCn4GXczqqdxFvSwscQr9bMxR8jmDmPBYMzVrSrytZVCBYC3a2Xuh",
  "key22": "3CG89B53ftmKVaJ4qp84bV7uUvq6eXjbjWE9PTXiM69PSjbzbvjQYn8B9xy6R4DRfLfvkZdEwwBYb4F9oWUntfWh",
  "key23": "4YqXiFXpZiJQtUJjbTHcQCKkpNAGTVk4Nagj9PDWuGkFemLeNq8H1hkoiyTxaD9rDRMMYxK2Fa98v1HpmWubPPTY",
  "key24": "3nHJv17siLcaRbJeCok57xYZvh8GE6HLgRQ3FZAtPCqaffnuhuPiZVWsNkjBQ9kiJ1h5xqgkYAac7KbKW8NM31xv",
  "key25": "55BAMq1L1czNPY8LGN26WDMboEwtmMU1yfn9RhykD66FsoT46XNrvGE6ZHcy7cWBnMUNEPP67TqLvKamhLJa7wZJ",
  "key26": "dmKemyczxFid9WduCwBLvw3ncyE6dkgDfoyyreg2jrVihK5FJDB8w9CUZzoH2DcdmW9jJmJrQbEtrPEqc1CSmbD",
  "key27": "4X1U5cdj6whgFAbdGD6hPCdBkXk3pR6SA52jMsvtohEvmrfH92v126HneB1CtKjqimNWLTHexgJnZGqoqbLZ82HA",
  "key28": "hEa8MNZLNhaUVkYzZFC8iJ7KLG8Mg6xvTQnseQp6qQXe83ZdshyDcfAFJaVVy6gpqpGUiKrq9oKBmHdBVqPFuMH",
  "key29": "2BMVhwyH2J1DmLrpxeEyw8H7Pss5D2zj9Vw2shEyVLXLScFUbvwgyFZBCHQ7JjrCoorbSTp6mHnDVnfA8E6prJHR",
  "key30": "7FpHta89UyPsCkUtpws94D2nFrMxLuNNyxxMU6HNMyS45FdpV8HMkNPaZqmYgNiAif8przXsc45uA5Z5VjfR95S",
  "key31": "bUnzUaYwLQCkJNMbFJyoydXSZTKBVEyDzZjMfyeUnnjx1uQoaZaGo7XEZZPUdZorQAEnypSxQruXtMQSSMktkBX",
  "key32": "2CEHR9eFrLJSoJYEFJSWng6hsVLtv25vep6bZDP33p4ebtsYLPT4GV68Psy3HnMC3LVwDferm8piqSWJZQd96gWd",
  "key33": "WXm9PMF76aP6aNpjPityy8DqEyWBLatXUccmWbBvrxkuaUXSpa5LMoZQpajtV3EXKwCC2dBTURVvyMReHt4girf",
  "key34": "z4YxfjKfXJNKEaSe8jDU9QXRfXVp8QFC752ie6qG6X2rN55gREc6SfT1i4izdRQ37rxFEpSNdCPBT6pRgjGxa3y",
  "key35": "ZqzVuiHBvXc4QtLo9Mud1MF7dDHs7J2GVizakNYvi7Abpf3AJcsqWJVXEVCpeytQTX2MqwaiBxqLPbT3PqMk4pW",
  "key36": "KT9zQ3idEkGLBqPtmCX8cMVA7hrYNUKncQTVbwjNWDuRdHmFhvKGkaHf5njfrtpHkn6dpDaVZSf9cYXWwv3Y2S8",
  "key37": "5LoThGQotauTCRg9Ad8Ccb2JPHxVcTLC8CcN5DnULUexydtrDKQevxUXFMSHacfS8Ac5pTwYJcXvPhp3NaknCY4C",
  "key38": "3wTX81xaSZZ5ZAMQjRVbihUzoHGeuHqFa5YndhP2teXKvRBQ2vgxxpSHoDJzNUZHLKrF8GpVHjtrKGhjYUDWMrQA"
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
