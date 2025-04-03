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
    "4JFEvpupFKfJTd4QYPsKZfbQkMiHxN7kTo54Yv8Rj1MNh46cNgKrYdyAd2z3etQJ3pvNvtW4nid7KkqRwBWjD5w7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4XYDsbLamm8gcXum1ybFUPfEU5h5RLkUgjWhY5Td4kt8ji1gpgPJrHcwUb8jwdQQchGcBeVmbDb2KMQyakDhGoHC",
  "key1": "3j4eZJKr7vuqQPMkDe1jzR6vo5jyJeGf85dW6je84kGwusVYUN72hkffSBZ9n6MDHDqHAaz6XtaGhyAVwGrkQr93",
  "key2": "2ozu6ytjZe5f5YiCpVPKm979Zzw9AGxUTRPghoR7W3opFDePc45EewUTEt3x6LqGSBM64S3jbVmWQCk8ys4AytgT",
  "key3": "3ewQqATpp4Y1qiFmhJq2zvtAn7wjfgiLgmhmRKRBhdBNZLhPo6UqCSSik5mSDuPdDJfL4evMsEpGC7rvrKqct6Hb",
  "key4": "2CC44Yd4ArYHAbgrEcnwhmUW6fvCNWpDKXLyxNS5oXAtM8zupjTaEbsxnb3YtpfJLjXo6uY8cGSkUzo7Q5hu9XbW",
  "key5": "223CKvWwZW6Y58qaZmtJ4EJL5JZnKj8HmsNVSNnisWuQyD6ArnP3Y4MEpzAHCZ7DC7TT97xnCfJBwWSVeYqjPVwF",
  "key6": "25xPzM4zXCgzge3pka2bTvD7ppbZXGRvK1gb2TatW8dhqKkrTgFJZGZJYZgSUbGAaLJH41g15tarkBxSggdWGwee",
  "key7": "5HDeWA1cMiBgEJPZjAri3xRF6eW6qYZ3cEBEozVfmHeKQmAbvzTx48wS8wjq5LmtDsyU6pkPgEcodipxmgdVWBMR",
  "key8": "55qs5Bv8JbNARiqpiZ27WD7KXVvdrwzgrSpo8PMzBhPpztHwPSEJpqXQQFPZH6dyCzDSFscFXupPVp7f5qPDb9CE",
  "key9": "FEyk6WuPm3dTWr9H1gC5i71fnmJMcJJKVZuN3m68kptqBXyvujp2fRW8nnG7VsKAMwxh4Zgu7H6YjNzTozobfyu",
  "key10": "ZWqmCgLgiZoHvfxpuJ6dzfUm6H2SdjRaXKpPYeT72e6XfQWJnsA2HBUfkzouPERp4WntZ2X4k6BSzPVQNjeG9Ri",
  "key11": "JWR9y6xpfwXGxtB8EHHm7z6e7jss7v84J5WrWFVaU4iujc2xiCHuJF3yGkw4Ty1MwSVo6K2V12CbcUHyfZUM2EF",
  "key12": "MN3jfbgwm9nqkbTwuTv8jgQqfMs6k4RACCPTUyJhircqh2ETFVNJ2ExHysR8CJSXfNzaKyL13K7MgB9VvFNzn7H",
  "key13": "5qvovbhri6RdKcJgyFF2tCmSfQK1JFEg3sqndfZuuwnqegEQUpdVUxhVgocavRY2sQgWnDatfbGqBziSkx5hUPU6",
  "key14": "F4eSsr5kTBXTU1bUh8KDbgVLmGLtZr1B9vGwH4eBPTm58w6NVW8RD8emgB569ZZ4xdLZFCbed5PyABA6EMkJuTD",
  "key15": "4mDoc76oq1B3heh9FRVVfPcQDe2Cy5VuYQc67fE3paXH8DgFVAU7Spm9m5VXKxaYBCCXMytyfJJMPtn5V57uMiiW",
  "key16": "26vrW6ydsEzWiFwBzkKdEUyynA1cchBNcKb8S5H8cx5tmLYTWqW133TmCZayUemsWmERsJnjkdNJ4JQxhS1xabMz",
  "key17": "4tdq8VHh3tdA9ReweczUk54gG6YVTo5nYybgEcZwq8rDAJQAeZFZRX22GVQniUmoBs3Sejgy8Et1QKarGzvnuU1b",
  "key18": "54BnwaA39wY9Ve1E8NRVxqPAze74xdoyicw4bEm1B8SYkR9fjEH7f68F9fA4DGK3TrRtvjp7rDhRRmXsL1RTGDdo",
  "key19": "3vs9rZ4YcTdFJQXxiKsmtTovmW58kDsn7Z2QN8Q6xF6LvjJALoWyNemu4QhVEHfvE5JGtpFGuxEWSho61nPEV7Ut",
  "key20": "sUik4f6Y3mNgmRGirUZsv1prwC1MmwLA818JwXi5mkdGjMF1Jq5Yygdsxc4HCHQPAoUwhMxEdBMJTebrKEXLTUC",
  "key21": "5As5SpWbXsxdSHKwJYx86myxtMXTj3W4iJEmAatNwcFeEtxmKggPfu7oPxQEo3NdGDtdF6A5JHbjNvUpUk3tHKdB",
  "key22": "4VNJ7iYWtPEVay44uA6279nLPuiMmVRKE8QXbR4VjAXZ6fdTTB3wptVwNVhTebWxu5uubUhHmf94NUarEXtju132",
  "key23": "5VY9CYiLe2ykzJda3we3ngxedS6FtY2BtdQwMjxx8ZKCwAM8EEKbK1XR3oZwrBPCqKyjmBttbrrnyJ9rit4T9o4q",
  "key24": "2zEZsjVZSrDjDHVHLFDXpuBBsaipG7tRVMqPPPhphTNaXzeoJLXtP4L2RcX2bbv3BARMNNkwjsnzdPgndpwesEqj",
  "key25": "2RM1cKi4yGVWrMRMMN1vB6MtwKZU3tJ4ArESQApz1pyW8dv7rtuiuN9ZVNTrKwkJTQ1v2T43XtskZeCLP32Fy9Cm",
  "key26": "uHCs7Nv2s1mwvegaVMtuMG39xn7CYgdRLc9HeNo2MeiuXpS4orvqJknfzu3NBSaqYw8ZGQo6P4LbFSeP7jaBfVq",
  "key27": "4SF2oxBSRAHFEhGw8d1JaDtz6hKPw7yW4gSgZ1R7zfxieNfoNxC7Qw7usgoz5BkSqNgJaGN54grHzCsqurYK4uiB",
  "key28": "2gg6RYeKbLkQ67UY5niFYZsqikkbAYqPxNydbhWXDrmTQMVPptaGyXsUVAXfNfb7xg1fSzktQqwM9uC8ZanJoEQ9",
  "key29": "2GuVVbncx5FDmKp2jaTo3mP4axrGwpgUnkYKQexcxLiLFyWBmCiRVVqfafkSAUThAoAz28jaGfUvEsWc1g4y17zv",
  "key30": "5sk3v21HnYdYDm1LEyBhEbupPVyaXcXUw3oHo8qeDLgo1redN5VJghPUTguKv3bAkZYoE633DjWtsRXpnACkKs7K",
  "key31": "4DW81UfnCDsMbn4yrXcbF6FHx737cTT1N3Xxob3TvFj3xx7oxgMRDWgBajsmwQUp1aJ5f7RNXSHn99onkiJgs8se",
  "key32": "Dmu6GVuEfa1rrCSs88cAexh8MecuF5ds44v216z7gqCZR2ZktMLvsLkrfLLstpgEbZwBTRrCtNy9eGUTxgVtKoG"
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
