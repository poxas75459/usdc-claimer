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
    "3Axh7sAUcq6JN9t2uaPFmNHBeFPiJpwT6Z2Nd8dEmWxSh12WWmRhxCZjnaeUJ8gBQKQqSGWCbRZ4NCHj58n9rVTh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jdegvPDmMNB4GgwjLiN5iw2LvF9uGNbHQTYKGCncMwkWCGQ4iH4XUq9igwTDyUn5dZEBfYsBPeBfchRFnTQiNXm",
  "key1": "4NdqejQ5KopQG6V7SkDXJHrH4E5jo93qeQCYRosTmeTeW94YGsZrqY8NkbQcWeqbdsDiMQqenNNsc1xUdB93s1V9",
  "key2": "2y5nkdTtoZRbsMBHpeWPCsgcMBsUdQvLYoxPtmws4iSSggY1JvAeaSNgm2EpQxbhGxMWdN8M71KRYifPwehnsBir",
  "key3": "4tze2DmPDAR991H6AVdJinWZPANbsoyhw7Lq5KWEQVVDedUAbhu4dTtJhK3qnvcDsqEzTyX3NseeBJeC6A2kAnCy",
  "key4": "TTnQY5Ro4e43EGnuC6wNC4D8RocQCTi3oQcEcZgRrt9Pizb2PArXqARhPsMvH63ft9b3TM1byQ3tjSHJNWBi6cP",
  "key5": "3onda4NtBVX9wpKeSqsfnoxKedzazJofbbRRLLPrZtnMTzcYv4UHAZqv6ssfJm7CJbKw8ugizfFRuFCYNLBJ8KfV",
  "key6": "Nr6G4C9bkCKvczbbLr9T8sD7WtLE1arjbzTUFFnxb3q54Nnao5p5u5ZCXwPM6ZN4N4K1ojREhz489hbvki1ECkX",
  "key7": "5Y8BKwK6RuBML1z3kdgiXQeyCqfMRXUDwjzh9AAYRiiw1JCTjF2kRh4mnVQj4CG4i2JttT99gbxS4T47AUrTBvnT",
  "key8": "4bF3KjgT6swjCfB26Kusw3U3FptNKD7A2SbHLmvpzFn4sD7H82j6LbfuFbVMmkMd9mdF8gJiJjMkWzVKPwdEkAwB",
  "key9": "midF2vWvrUi7pgTcaDMNaA2rrUTwjTUXeap8JtC4Jha2FVvT9epHXhoNYVWsGpaVf66FpWtwyLSduabofKWu76m",
  "key10": "3rTkCMCnqmzpgoK2EJmG5ho6Kay3T5FGNhUwuzPSuPXuXGYHtuHMmokENkjk4s1PCCJRRaGjixcZda46hLpVLE8V",
  "key11": "3b5xQLTjrxca8ouApQZEiqXy7PFThm7XZhACFg6Pbn4UWJ5XNK1fm9JctVZzTPLWDUsvghUrUEQiCaqjxA9osot",
  "key12": "4AXwya4gfoYaZRNGh2e8AiiqNPgsQ6VKxSDsx1PMXmaZD73xKhQfD8kvTdipfqVMU9VQJ1kLSLcPqniKJfyu4uQk",
  "key13": "67B8mUcR8HXiES5HVguig8hdshVHJuoT78UfPiSCGVTe8tuzLwQ4J9jGdp7tuxFXW3dc1dXw9NBPBhgDBaocw3pP",
  "key14": "5gdR7VecKMRsecbteEfBeqPpDvLQy7LZWHU8ZG3ScUL9696Eq5PjzzCu4guRCwVTyqbeHQZkihXRt9dMfsNffTg",
  "key15": "3j13G71UxXw4qZicXjfznaNEyFN5hGMXj9hfoFsjYba86ZZnXfBC54Kzv9dp1goY1uNLSEZY4MPk9XdGHoYvAUa6",
  "key16": "4GeAb9rzxBE9HgTBW2eVxAxmrNfkQfA7Roq4gbC2oGpjc3A3cmntVYKumHrXhrxgfeHkv3hh95h44HyzqgmqBaYD",
  "key17": "Hw4X5Ed5FRVyQmkNdCnjQ2wzspQBPtczQxwuW4xwwb7RdTgnvEJvn6ERmzBB5QBwMHTiAenPapDyibY5hurWVSP",
  "key18": "66gRzVpuqyQmywzaUCbUe8znd7b1J2UKcBERK7arpeUprcfcB1a5SGX16Ze8yvDPZKTwHKABVxbjEBfgzAeF5wNG",
  "key19": "53txgF8oSXWaFudrNFkVy9nfJx2kfrjQChvFvcWhCL7K9aFx6ihREUmUSU6qm7huuZvXq5ZWEFaJQRfVvj5VPT7p",
  "key20": "2w3n2mtjXfXTWzqbB24jb1Yb6N6Zea4kVR7GLpFZEi2BjnsCWoP4qohKpPJxVy4qs6zMQ5Um6LLQuq2A47ZSS78e",
  "key21": "3GPrDpMMd6MjNvFsZ1SVD3BafwZcy59FoSvsXexfCrn7DuzFWLwuSCncvZe2FgMxSK28pJkMRYJp1Go8r2rdp3Cp",
  "key22": "2y2rrHAbQpBmnEsokjnVJiVF6nMjATsySf2f9p4kVKTR1qM7R9oehLFqaazB8xJYC9DANFA2bFriHvoNEyUzq2F2",
  "key23": "3eGd9zLngZMeYwbwZyWnLxai2UduUJywCfAWkRwMN5Wj2ACn9ZRvuuAatKCN8GmzUcj8te7cHrQJW6aYNqXsTvLe",
  "key24": "3Lc27dn5ApoUUGRKHrbqeHnXxDpEp4ZvAx8AzZKXqbKD1gr6QYR7uKNtFzCyA2SkuEhQUvdbvZtc514GS7cQsTRq",
  "key25": "5ejtyMFjDM9r68xzdkCAUjMZHE7XRwKZLpvwceoqbL2BZRec7zbhLotRHQFNWTt9W9RbnpcZXtgUmvXb3PsTHi4d",
  "key26": "YY7Xx32B8HXhNPUozFrB3HJAavE6GxmUi3A4fHJLQ1yu3mGKn9AMFXk3g3zyfE6JJNyQ4PhDdyyfMXrVag3YZ73",
  "key27": "5tGNLGtTgnaaiLCzcrG8KZ94XpLzawvkTxiqjR1K5g3NuCMdjCD6FYdTMWLiTCSRwdkS59PmCniz9vbwZGzMQdPw",
  "key28": "3o8n6CjJJ7c1ssL2SoRyBpRQPwcRQS8BVN2REuWyAgs6TUWDHgiPqTzgCZQLLYttoP4sfmgyZELv4Lk1J8AqmjgY",
  "key29": "53iRHQ4tS6cZd2MswwgmBA9znVo9XtFJF4zNVLXVDNawGCe55WYaeZY9QAoj4oNjQDFsbwQjnTqr1TuWgFLVdUDJ",
  "key30": "2sbczC42RVzSMfu7xvdtTFjioqPLk5LWBPoKeX1dU16fqor8VxPrViofqM6nEcurZ7iqEB2XGoPBfZnPA4Y4yWEk",
  "key31": "2qqmhusmonaqePvHVtRSiXHgfnmKMCwUNm6t68V1TyLGdq1H5trgHf9oUid3XyrDisHpVMLicAyT3vhBzVrrRvJN",
  "key32": "48r9mewq1xno1yEEi8tmjFBoQXmyES5FiSpLivSbw3uivU8TZwvLRRu4h8S1G1VQP7ty4KL3ST2FMMcHQ9agoXpN",
  "key33": "3AVndHHENHNxgSsDZRTaCfmrG1e4JqcoDtyKB13fF24HFXKZjF3oKPnnYJ9opJM84FhQ3uYdNueFAhS1CFnYeAir",
  "key34": "5oR5RcVHSaYh8SQtqKGhUS6K5MSz6EWAtrRbPw2qZgmmEkSPDuGc4VnQdZHhaC7pv6zsyPQxdBWK7HEDShqUvknq",
  "key35": "5tjV6FKmBi9iihheQnhs4Ev5EHDAT2FXE4NfPzngmeoY5UUJz21SmWzqPXFtm7mrXYgp1BCtsTQ3BYNPoF49J9cW"
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
