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
    "5vBhFwQymL6Zg2mNh6XGTsqXEA19GVbt8vJs717xK51GpPvR84cCXNdGhSK7qNev3bhsGxir3M33zBXMdjvPDef6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zFirMEkTyGfJPShFNKB6vZNhgiqBuYuP8wmaL27RTcx7uyxjgR9WNa8csAbM5pjF4DdT3LMRawng7aRy3DvKGH7",
  "key1": "2g6qMpvS7dMDbVmRmdepzj2tqPJtpiRd5nCoeEeAipDsKb9PqpN6HT5MwrZnhsQMjUm699Xj9mnJkUwyvPyA8SWE",
  "key2": "2vtVaWm6ru1wDMMG5Fq3gU8ah794rdx7Sz18cAeDFuXKKnq8W4DpFf7b9o8bSL4HQhGB59RfMG9zYX48KQoJn7xL",
  "key3": "2Cu7WAxg7HbtnBoS6QKizFsYRQHbp4kzj8mFisEdBHqui7bNCTzXvXVWK4atrT6CUaewTmeqbU6d7bcw8sWexdMg",
  "key4": "45nv51hbALMcDFeaD2gYgdRGRVGBWHhmBv5hHFsQUEsnF3wExojgVwKLtmN4f5ALLrg9wR7tGe1bBHJMtccyLF5Z",
  "key5": "2TAidwq9jeuSR8BfnLvh3Yd62TjxkJt6YSiCe3yF4pDNX2La2oZ3rzK1eMeoWUc7mXBF5KxnMXEPqyXyskz9rsQB",
  "key6": "5jxzZ2m2tQLRz1EYP232TkKJjwNRU2TcEJEsM5fBhMUmy7MN5V1t1qAJfcrrTWX4JekAw6VbgzVZ1GnHawCUF21S",
  "key7": "3UKSqycbr9iCM32RFHnJ1TgRKwijypLvi1QBbCXxg5WGsChDNZtopjctVFhUgtcuCV7MX6ub1wNGadwVEwGbSfjc",
  "key8": "iTXm8HZX38sP1urUAUUdALCHrAVGmgEj5vcvmQGmZZRWw5CcgRaJB5ma8UReNUNSNpsqGo8cQxbbYxvLRGnmzkp",
  "key9": "BRXYxA9U2ritHGF3vNxW9PhWG7sThysfovnCa5NhPK3n3srwaCJMFuB5cuKoJa8n56sUB4KdLdhVeLfoJanNrtP",
  "key10": "4r5ELajbmxoFt5sqZ2ZYFyyyLLCT835kjUJmBFAT3KsKs8XUdG23D1cJiyxz1zjZ2gFuyMzXQ83ywzxnq1ctgzii",
  "key11": "2PjUhM791b3X56YJNUawTBoTFYehpk5rxg58XdDZEYcnbXaYENzfu5457e1VFJHywqY4ppLzo8Ez2DZ18eVqnW9L",
  "key12": "4smPVYQg4QBoDrKBZQbrfntVXEtADFXLbZANs9EPYHDDbEkUVGNpBnYr2UqdpQx48VAxZ4opFWk4TBom1mTbug61",
  "key13": "5sSNGdadB1AAPi3Lk5LtiKRDCbe5PS7XbFa8yeUEBHtYn1dbKyjPSFXzpXaR9RVpptqZWHq1JkYeZpsEt7rrZMDE",
  "key14": "4KZvai1jsVPmb8yjwfZPXmpcgPzus4vPkzV6wzWBhMZE7hR5TQh94ygBPaYUJRSVFN8NZUkv5RdY6Dtdef4A61Qk",
  "key15": "2MV32hYYdGUCf6goT5Fy5LDKqufGimmNs1TBqsTYmqwx6Wnu5Zw5sGC3v5URAyq3auJ3ewn5mPBwBGCtW4uHtf2Y",
  "key16": "2yNxzuaZ8N3pw6pZoP2b6U89u9NbaadDu24GZV3gLXFnvNaumyejfLkLc7fp43UNQqS1tSgrT3hVQctWg8mRD7wG",
  "key17": "2sZ14TRRbHx4mEoA4DTdopUqQRU8Sj3NZXtQBt7pxA3cyhZwzrdaZc1RUh6RsQz82UYNxeXM4h92TCsZHBZF53Sq",
  "key18": "52otMqTCkAqH13sTLPcPwCCJFP1F32F3LN6JxVcVXcaZGT9bGcNSzYZEkvGvYTrC7R2wBofeGh2bZ55BEmcKRRLn",
  "key19": "382wUdXfiGwrzGtrTSXx1RUs2BengCRoqzf26QXVBGc5wADkqhsUUkj6XJuZkJcDDYWpG5YcCC6ZVadvVqZpYb8e",
  "key20": "3dwWeSg4dwitPzRRhw4SdmZuEgFPpYtSV5vmac1wRqppX1mhNrRhGvBsyQ6pXUVRn2XVe5Ls5PPn8xCjbn4uNj2n",
  "key21": "2c8acNJ1VSCdGn3RL6Y3Lh8H7AqHLqJ5YnaJrJgEFyG1AnW6m5aUMH5WdLDBRhiLpMYZFD5C4kFLoB4vwRiXJ3mp",
  "key22": "NChT483M2DVX6QLmhDgWD6U127p9xRU4GpPYLEkfq7jESW3rBy1rH27z5pbZ8wwz4dQPc72gCLZYDKvk5FYZnrT",
  "key23": "4fZjkjjGzy4yR37CDNUqKuocPVLAMiMRnGrPEy6vauqhveMsWkYjPfn9uJXeDkNgxYnm1VCyKyv2QGBqJ3fpiGra",
  "key24": "4pZyTG1sVdMgYJhVtPV8XtHBsq6BGXr5ZnSiFWvXQcoXx67KBEV6mbpViPJL2EowAjGvqFza7DYrnEFey21Kwjgm",
  "key25": "3rHXZ2L4iwzzsL37s65g9qsP4johKSoyi4WBYV4jtwbJtgWtSXaezUWk2JeZRrJwo7o1K1NHKWzJBeWGMZQpCsNz",
  "key26": "5w8EE9JT3Zar7B6N7WFLhT5i6Zov7LPKZtWf5h9UF8TrPA9usvzXosLZoeuLa9tcpcoLYcZbyWbhLqPPq59yBvJa",
  "key27": "2hX6m8cWZ8LcywntxAWSsMrHrFqMKkEk6neNXebVtuH7ES9Jxk5nDLcuZ1BDWpJcFCKy9wNU3vTqao8vSg6hRDwc",
  "key28": "5XJfDyegajagSmnrqYaAEoQiTxWfydfzbYpYjaza9uwYAvxpkpHCrQ7YSvewgPw1oQVesKtRMg12H1BKxJhESoW3",
  "key29": "5MKdcWUZKNCGDyGduWjUyZvyxoPoxaecaw83Jm7mPMHrQDDnqoFtfZBVNYPU69RmSHyuug7R5h3hYRmcPiXNPzB4",
  "key30": "589X9VYqukVFmR3jd5DPpcGBzRjpisCN1wsLgc6RXnq6qCPCjVfEuMxHcT5x3caD98ZKzohmbBAb6TdQWVUnsuS5",
  "key31": "3Sdv4qeiKqh4zgoBaxEkM1VyZRNDac5TvR7jK7fxdf6Guu4E2YnhA4Fn8cxHX6o4188AEgMjJddAYj7jsoc1NvbX",
  "key32": "2LR4poYe4ikydqyouGer5EEbm2G5d6QLxsxPa65jPcuENuqCm2eRw2tBKems67fz9xHXWWt7cWMhR2DsY5nY9iDd",
  "key33": "2wNukq3eFLESJwBjyB2zg6p7q5eCExbVaP8wfd2RyzMyEGVPgT7K4QwvZgNrHebL9V6A8RDnosDp9UudAszLoTbV",
  "key34": "3E1WsB2uhXyNqJzKq4Arbnca8H2yxsLqQPcaY6y8YCNoFSWe6oUvKzYkdtvvr5vfhB18taufbEMRknwPvzq8Mg6K",
  "key35": "4R7yxY78oQxmfd1VRxjF9TmBRG7DAPXapR8ouu4jsh72hgtLDkJR3RrNTRYAuFoYaMocoedW9M1xYPFDncPjmeF8",
  "key36": "3K4eN8E7621CGZfw9r4328z1TwoyswrLHDYx6k1e1FQbJdMMKEtvBmwetPvn6KAupoRmt2wj6hTknaaEzQXriqta",
  "key37": "2UuvqYTd3D8fmDRFoQg16SyYqfWXpc5kZT878y6x3MfvhwCJDVaenm8wT7N7pUCDLKvjA6cBd8VY2XyTvj1sghZW",
  "key38": "2ozeLhbR7dMhYsZqLrQXPdHMoQue9QHqALiXpcPwjH76uGogRPaV6RP9s1Fk3oJVbREkokKaa1KebHyqbEzWzuEq",
  "key39": "4kVD6kL2WBW2ZwDyiZYi1sZS88rUx8aMPhRGGUSA2rFfaSvxUXSGBvWBjZWwRZGptHWemgU8ZBL8unJNSRryis8S",
  "key40": "32JTh74X53nhzL1VKcGtGmg55rRKnomCjcw1ifRAB4sAmqAvffVS3KkRrz1HFP34od3W5TEdTo1q5gDf7qt9fsZw",
  "key41": "wc4UEYCZWcDVCP4PxBdVrKWD9E5YWX42AJ5Z4Rtr26K6Rzhon7SVQhpQnTz45jcpN2BNWvtdk7FyLEkxV1vSk3X",
  "key42": "2kh8dVYnBUZuvSEhvNQQHiL6z2Cxw1SNrHmJYnMxCZBYgSueY9jK5FqSnAHM8uy3KaJTxnSangSJpVH5Fk4JMAbb",
  "key43": "4h3gSF7mozMq14dhxqkpso5wK17PUw1EsnvZ91NuQ46HETFZpU81SuazusMV33P1RrEnDcxTpZBDaQT5MDt1eWzR",
  "key44": "4qQW3j3vCspx47ZEx9PJ7Y43HU3WZ65YyVqj1wg9S99i5QMfbWP2xBxTzrocVmq7CCHgw7er597rhc54f4hit9Z5",
  "key45": "5tYXegDaUsRtULNmvCCLmNAJ7Jsfqm5dEmWy8Ukw2Qv27Z4vRbC6QUrVxsHkqahFYa997E3iory4jK1tSupXkPzY",
  "key46": "4wVa8TcXvYvVjqSunPaX9sfECQqyGMZa4wfiJxujS5XDth2PsSVDM5ScH2fBEAf4tu6m5BrAqKBzLyuGCG5TZ1Dg",
  "key47": "3bK6C3HnUxhRhBTGL3mKz3GCJmoVfaGEfCCF12cC1fYRUZ83bUfQTbfh3TX45qE8Nik3pj1rg38iNehtbg6Ubh5C"
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
