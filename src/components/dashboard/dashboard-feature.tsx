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
    "31qiTX5zks5xZTLH8byVZvHX69LeARaenbXegF8YmfcPYgsgebzmpzhdeKCi6boazEsg1JQitfhQp3EZm4hbQXbm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ELbAkASxSBfe4V6aqeFxLxGP8mHr4DpawqcPH2jqfeaNidw3Av8P745PyeQSxYLDhmLpYGKJq2gQEUfWCanxbTM",
  "key1": "mozZZjzbERm89eb1GewW316MQSVjvD57nzZj59t9e2nXEjUDfuhPdSBLzEQXbvmr2g9jxUanX6muzHCoXRqUnUb",
  "key2": "4YdrExgXqpzUswytEuV2k5K8teFG9JfKATrEiSJQy5JbGZRGouyRrhuNyRoWx6wWRjVXjGzyJ5vmivFmuN5jP2Mt",
  "key3": "3yETGrGzp3xzrk8gUmznsmuwXJeX7x1FB6LvqiqJZJyYHAzVP8emPoe5isVscvHuvFeZVVV25y1BMV68Go16wJFn",
  "key4": "2Gcn7ZkUJVvNDgRkoxpUXs8CzFHh9FqEcCngMFQjDdYHKMLhaUFakbApn3mhSg79jwx2W15t8DQ5DSAHv2wUpS6i",
  "key5": "4E4wEwuZ7ZxLsHiT5q3RDF6y4MaU3nYNSuFejmcDCHtqZqinAGjd4nDNRm6oCc1wjX968WR66MTTxYAr6vEUYjm2",
  "key6": "3DmdvVbN7AYkE142LqoY9EFKhZdbwfUHgTGYq3SrjLGVW6nyLKNF9KetZUQga4u8wz2sbpe38KS9EoBuAwMq7f5V",
  "key7": "5na1oqmbhnx6ncbj3Zy9Za1CTw8qoSLpezRAPTzjsCbnXZEQz7VE6GmiQpz7FCrM38h2QuQkN4YHhzxhZeBSG24M",
  "key8": "3nK46aGWX8YghTgqFU7zFzXQHNKu2oUaTXjsyDwP45SHukXZTjaZASJQeUKjf7ngktz48a9XN81eoqYufjpiMH94",
  "key9": "5CxR3uBLR5qkVFVF5VcRp2gHaY1NLJvpqz7ayXfLcWJRzkKeLaAEezbRXmLZNrHepBC2Kf4RsDfLEgMohPqxGot6",
  "key10": "5ZirMPoPWYnPaqB2jt2pxVaDBqxf1Qj5ppB8RS75pp9a8oBU6GwCjTV6mMGpi7tbMwedKYA5nEworv5RW3GxSF1f",
  "key11": "4kdvH7sYX2JRV1i7fGzAwjAqEji6edff41QnpFtjr9z4W62fgHMNpG2TnqLcBY5wzMLUELwYGfkfPkJeGpmaxCJa",
  "key12": "4ntXnNh3mVvaSK8kDVvVTAQ4NGcrbfdipExUgHRgv7CUWcvfwETpU8wmPSSBrXRndh3jVEgD7cpZa9Q1faYVipTz",
  "key13": "3mKocHceHrptN6hAHghf4x4wgbK3wETN4eaQVuYL6Qiz3WEk1vhNwMx2HJy6hS1dPGMiPsjTt1rtCKV6Yb1Bnoa8",
  "key14": "2PrPBLRBAFU8cUrWBYcLs8sZszpkfcqPLdJaE3V1U8B7ZMrdDYdtnShy9XnjRvLzQzVX7f92h8AzpjLkU1j5gNVM",
  "key15": "67hvKKSCCaEr1ZCJRht4JyzRhcTo3j7VA5TFZq9Qtxf8cyhXSueYHqih94ydfDqHiTJJrwvHwqjKbdmTYVN5X8xh",
  "key16": "4pqjyswTVehD1g5vyX9BgLEiZ1DLCGB93VNKAGDtHPo5joMngfLRhCAFYKofmUiVdnrxyi9dbscYnV9SrWbKZ58t",
  "key17": "2fhkypgsVuAnqehPFJ1NS8qAtaAX8EAYQVaa2B6j9e73r158F49CSFWApBy6ZoyewJB6oAgudMhFvTNkmFt12r4t",
  "key18": "56jGn3Wm26oA1WjsWeNiZeaDaEpo6rE24CxbMAMQ9yCKSbFv2F6JXLFw9Yrm5EsYENSskcrzarqjMvn4Y1CyscRy",
  "key19": "3jhMRgXBbwCz8u3iWjeP2ihQKcRCPkRY2Yc3N6iSFT9ort8nfRD4HMryxqEsgPoEPJwJBefe8d1P8f9Fc98KAvLq",
  "key20": "3CbWqCd9FMdQXeJr4vLEdHUYW3ZmP4Jz7sy2K4A1RuejqUeW5BuGkERqkU24cnuhs9PPGYwifpdjGTc63povBN6x",
  "key21": "5ArCyQVitN71yQPAQFseFUUjyqhLztR3tZyPJzsJzT9ethmHP2vNMQKVLr7jvNQJ1SEwHXNhweFwq2bVDV5Gvf6A",
  "key22": "3BucvTCoDnvJNjsz4CvjUVS6WPeiwq6xdH15dHG4ipDmYTJWMBeme9CafGz8v5hZVtQozw4g59rKSkC1HxHHmCB3",
  "key23": "4eYP6FzyZxkBZCypdyEFv2unDKctKaTbMmYVKaHGLbK876sx9viyAsvo3Hs3r2b2rgQPvxWmgGw2HptNpepHDxeQ",
  "key24": "4tsGEZYahcbA3VhFGC72XN4cvo317Q6F8FyZ79Cpvb18mtu8CqEmdCjDPK1sQxCDXv61KhKx2deGpjoVozKx3oaV",
  "key25": "3vBLqyCXFTVQamcR9sDoCeFsunNTuJPyqXmCuthmtEgSEHdoovBNg3W6wKeFLfYeAHwwerWzV3qMMemMhxUGq9sE",
  "key26": "3dDVtYXhhehCqDDKRTXVFiAocrk8LdFZyGHpYHg8aBLmm7UcQfHWH2Y9d8KA3DhmCbJdrEv4y17L2jsp1gPBbGZA",
  "key27": "3CB93WwyTJk3SQbYKBgsDnBsHU23QWtmUtwRRx24Dj2FitEFdSPEkavW8MW8z9n3p7cbAUBR6xZ5M9XiS4UfLrtG",
  "key28": "2qGrUaNmLuCFmvaH5FdJzuaDK2dS4qf3wdEteA6BuM9qFnPk8Do4sKfak1bSpbbaxKzwN3DxxTPUTmoZw8iQHJpS",
  "key29": "4KYZMGfiQ4EyqzkLTWMx5wjKdq8LBuE3WGEUDDkgC1LSfGyi9fcB98eb3RXb7GdNQUq2vkxmcMWk2xTgHffSGfwJ",
  "key30": "5VQ3S4dmWr4zUjfEFTxWCmCtLTz7TjgvJSJyKGiGesdAQiLBkSAHAwhsUM9pyo1Ym3NC8hLwFTMuoaKCVqTQ3F4S",
  "key31": "3HEC6XqoD8M5hJfwCiXE9xyrx5pW5aiRtB2j5r6YsCq81EwJq4toYBozhhcUpLkefb5iu26BjnRJNv2Rk7RCafej",
  "key32": "2urLkPCMFETaBV5PcMpBaXZ8bq1wPK9Ns2U3M1avVLF5qpLFDX8SVnNFHAqi8166qx45YFrCTazPo1abYjz3Wue6",
  "key33": "bEdzbT7CNKuS1VFaRDKrRjbyQEeWrR1K9GDq4PDufZDH3DBTsWdJ8AryMDaMuVZUexwWUfQryWjqTs7HXVGJuHg"
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
