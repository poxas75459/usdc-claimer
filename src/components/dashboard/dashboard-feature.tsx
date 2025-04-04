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
    "2fbgcQyBBxjuEpE7RQNpTnFz7eCYZajqaBH1RGwB8LcX8MGWbY6YJkwHrrMQ4GHT9rp6jS2F63wyGKKHDKKrTzay"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4goFio2hWx57vFsBxeq8TsSXgU2w9PeoMQ5cAuXcwkcenaZ8sy5naPjMpAfuGjPfbociGzZdoiY5qynYhLyYeXek",
  "key1": "WT98wdrCAN4SnsSjr2vQ13NCq5Pdbc2xTuWP7o18P4u1gCfEw5wP8RT2YyHRmeApC7Ru6AefKcxjpqo3Gx6mHyN",
  "key2": "2bGGFdnyyqj7pZDfnzUXwG8iRWDN761PgW1wyeMtTR2XeB1rUyQ7aDMdUin7YjJGk2LUoijgnhoueqQzZxDA2KKq",
  "key3": "2bzKyGLMJQbmQC8qfoTfKUasZFw8uogvLZ1Xye95c7qeuzUs6HtCsQWVKD7zvPxM4Zyvso2g8m1vsyjgJ9rFpsS",
  "key4": "CWG6Dn9jMPtavn8eVHnCfLbEeTsRvigJNRxSFC1Mt8zR1i79433RS6thJX4GqY3VDkJcz39nog8ebc6h72PpQBU",
  "key5": "3SxoBexVzrGTgbwUWdMBQ95bPHD7kSrA6hkMWrD7jSGESnoCvPe5HeSxfLVsug1tTozHFQBwPuc5wKuPYdTA4a8y",
  "key6": "4b7gwA9xHC5GXkEX8bjAqqpbxZ8khrZmcLU6AJMetr2yJvxaZHEWorH8E8BN2bfxDcZgHv34FMaWf449v1K8mz73",
  "key7": "67Cm8231jmtEZMbpRdptQ9TnUowwzPtutjgWVXPoyoyxyZFpt9oz1jPnHV1dw3Lng1MJVmQBpnanysVLn4ewocp9",
  "key8": "4Mf3qkQ6YzuKQMwqg5wa4fKv3ugUcvw1xZF7K1T5rZKezdKswHcRbP3ZufgrCYZR8RZW9cz96g9ASoyrsejfvQDq",
  "key9": "2veSiTEt8XEUmAkoZ5pgYVT3vuAtCY12bB5xK3QK5XTUZjBTX16TpJUpRuUd85NZ8K7t83nzm9rtreGHWHxKyNAi",
  "key10": "32Ljg2YvVnSF3zTw9edW4zWj3xui7thXZbUgbNUfu37UYyeYWD8oqWpQjJczPLdK2JKhizjjpwcZuuYeirgsBsBA",
  "key11": "5R2A2RDnGRZmKKqwc4AkafC4zRXihxyZsSu7tbsaNZXweTx9QR1iGmW3um6oAxoCiQNa392E3rQLHL1uPeG7JDDx",
  "key12": "3bkLWqpcvXs4AjZPf7n5vHH8APkRLp3HehJyTsJpoNtUxcWbrQZDQjiVjnpGhFggbDubbnm2huTEcByYRDgshj6p",
  "key13": "SfhEUs9x6CuAky1N81jiFxyUPLSmSMVAHqzM3b3FTjrMrpd7wriG2W8z7u5rLzpukUHPdUmdVeoQEJx4vEnL5nr",
  "key14": "3qhckoXHw8BUk96CWVSNzyo9ehPeBvwBL9pHfaE9k1y9sK6E4dL4pk5WM6ytNsPGpMA6ndiqg4yM6XUzt9WCtQ26",
  "key15": "HrfvkDyVTqeezBXje3ahpoW7tCz4ivQhL2SP9tKYHLUeWb3uZfV3tW2ehsogEss285kHEHwuVqwV26A1yUQUX1r",
  "key16": "3nmVfZXiurSJgHjuKZ2D7SZ3R3VedyFZyCUf5EDH8C6PJuKGLVHPWXYwKQTCQw8rXLRLQddav4biyAHGnyXQyQAE",
  "key17": "2hyaHyagdr41hENVxKB4JVgjT9DyF124H2EPQurLqWbB6FHzpENELfiu7GXgh64ZU8EK5kThAQ1JorXpsydyG56Q",
  "key18": "3sbqTkLLQdCKrcuqQEvNowHEfNmtHTbGy6H7YNj5za44bsuxGUiWWPHp8WGG9BszXLudcWhEuVuPtficXMpc6BAv",
  "key19": "2gzEY91iBBAdZ6uPPHR7HQTFSS1Pm8PPbVyBXQiufYXYpAtGuJAQKqeSxaWfHAkjN9cTspAYGogsw9q38GskeQZ5",
  "key20": "2MPamJiLpibY8kzmjNv3mUvSs48RVn9VH8rgjRTVgtNLP4jDZVFBN8FnMtqVFmHoiuuVUUgkD9tWhbsBNUV77KWc",
  "key21": "2q63fgidkyPNrxDLYVq9mLFsQSgQWjXU8JHDTg8a85rKBK3zDNtyCuvosr25fhT5JeUaxtAbcRThM9s7FaCJvx3n",
  "key22": "icAyQTRxenb2tQJFqGkKwMrcFsc3EzuXtzGi34wxED4SX817UTiqdeW86LdqwJL9FZ2TPuyJHmWyV6FycbB7pp5",
  "key23": "PNE4FSkTVWmDM3NMChbgm7Kdnz9gD4bZZ3kUDE3cnfXXTaY6dK3p7jdscRc29BzHZEhPE4UUF1QjbyLWo4CKqUW",
  "key24": "3wEPgY553bhTXPHrMJqwMjusgo3GNp1kZdGV2PrcKaikXfYRFinKPf7bNPWvzqf9w3VPiULz9WAFhCEHhw9GmMUW",
  "key25": "4kNCNc33XNqmK3CjStzzkeYEapqeeTVnSE2Zg3XKVdhHNpkXECdpnv7YgtFueJDap8xWLb9tJU39EBTRpJfYBXjZ",
  "key26": "3CAu16vg8Do4ewS77zr5h84hFYba5k43wioZG3sKCVwQctcCzbQAENeBHQynfxGhVCMVjjKhiUg3htkGc9RYW3Bj",
  "key27": "2M3WBU42quie65qqzdeBtgWaM5T5DjbwvoDPgRHPLLDyDXuoePcpigoWH7rR5Tm7vPivBiASwjAs62U6sdnoGZxK",
  "key28": "46FuNrXn8GUqf2ASvDeFuALtqZQcVrrKjbMiA5LLc321wV9bZihyLk9wfazsyyArDB6iHf61xcae7H1oEEyYNt4J",
  "key29": "2vEX7buN6XY2s5EPuPrKGPyGqXJ28aJC6kLE2hpQNeCxrMe6QuCps3HhJjcMBhJ78QjecMi8FqSbk5dJRtRprnsW",
  "key30": "2H4yyYgMoZkjW3oP9fmDBHCCHPqDAYWJZQyD3HnW1hHPkTKiAPr5KCNPMjcp3gkpcFBcpGL1dYwNXhh86z2M5Gyo",
  "key31": "31Tgh3gr4k7zqNjzr6KBtZwLkHJzRBVnHRRQfnfqpZjFbtwWDGfvvJMBAJd2BPyiph2EMNQvyGE3eJxPpytZCacw",
  "key32": "4i2X572bRf7z7tihUBpfYGqbm2UCayMnKtDFMGvMT354djQuxXyHM3MeBaZ9x2VYdk6KbvubyB2HzoQE8pHwrjg",
  "key33": "2fyvS79pFTBVpuRzjzBrMvKqpMdtujxipsj7MNLJfWyy88HTPsHE2bTs1qYwUZJPbXqv1JH8LAo88khcq3jjHcSV",
  "key34": "5Y82JBwS5ds8cuW6XS6KEkBwKoNvEdejDPBgmhgVJR1i1chPj9HGcQhqHrE7k9PCc1hh76rsBxuM9D4RrpRrRmCj",
  "key35": "3PAtiXNnCmtFmorfvQL9q3sWUSno78tFXSJW3hgkdWAvAFmmiUUsbmhY642C64bENCzzM7pADo1zmfpFYkP3bjmw",
  "key36": "3MEqqJkGdsjVDWeyYWhdWTcxaHfDqMtGYpWrGG78KmcWZAx7QtbTv1r3pJKNrR7Zk6b7Q8HFCc1umeqJavaHQEzK",
  "key37": "39zpD1PZJyw8dSK4mEYCBGdMGxiYpyLT4UvNyUcc5DBatCMbesTN179kmzf1T2J65UPU1BVpA2mGnuiXoD1n2AY8",
  "key38": "56kPKoEeRTi8KbcQs52xZAM6ygNpDi36TkCUXeACSKZevwnCxidwCVZXqcnub9oEoNtvUdU9Zj9QMAgwvngELxzM",
  "key39": "VBteKiikQ1dK4B2v3sZJ6dYyGXHWLvN9sdF1mL4rMTDpztXYfD1kVbkVuHzxWyQPyp4Rhf4tC2jQNHybx4q78pG",
  "key40": "Ls2rbvQLZTonHHQBFcwaHLHzrQB8BCqoTpMfeP5xVn6RaYpPNSUvf126xm7wDhHXeZTEifDEUK7xtro8DjWJFQD",
  "key41": "53FBhmw19g3P6CPt716qBfrSGWJZxAkpPRkkMGPFYY9GJgXh6DpGJt8Ptsej5Qg2McWQpLi2o2FzXUsztnmt7qPD",
  "key42": "5WKy7tJcBRGfNmUVMjFUbAGvoFPNB8BJoaZ7p7L8sFnpg3ejfcatRi4XfDRymJtuuBzUcPf52QZBXJHjHaPqL7hD",
  "key43": "5xB4cSeYjPXYWpj7GTdTmf8QbjZxo9MnAX8fGvqJWJGJJLAcpMdtjPAJXUgCdicVcRpTB91oH7uDeQxYpGdFeRRw",
  "key44": "4ousn9qeHmpavNC9sQpkL8i9QWwDpzEDgjPrymj2RKgAA8TWK9dEHs7N7VHpiLMmKgRPF7AH1sG7F3MrWi41R1Mv",
  "key45": "3Fd9PfeecREPAZTV9Q5uXXcAwWj4r463y2827Y2UbJB5aAhQUPXAweZTkudbQApZGMS4PkcwZS6TL75SxdbLcwu1",
  "key46": "4LaMGAyfbS2EPLJypchgT9ZWngQ54wXE1PFbdPctokAB3NrjnBu6QR6FUHaS2N2wj1PExtVsAGXUH7QdcYpg5SDt",
  "key47": "NRY1PRvT2nKsdpftF4CDBaDF7pzvaZcUZrMnpnkAAKapqBK5zrMo2NwkUjezKSXo5cSDk7vSEVpfFTPHv6wu4sX",
  "key48": "2bAzjc97PdyfbjnFsCL7DcbrYnEAuFpbtJm5gV5YCGjd1sRzJdc46AmwdSx8kyEjjoGHJzkSRyKzWPvh1ds3U4to",
  "key49": "4LAAHReajocn6x2Bwa3C1egagwQX8AkuoBDdDbY1KjfyUZ3VGCmAUbhaaLn2sBfE6zEVQT4TkjA5rkr1qXi6scrU"
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
