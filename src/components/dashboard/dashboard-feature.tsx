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
    "2K6362urPT97AAzW436wh5KZc2oiwUwk2kepKSq4vZXwgY6FhJaCDgdcRPYBqKiQu2K6bSx2EhLrpcACjNy7kQBW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32CMkeDfQxfvc9oCbGdXttM3RXdcVXZvSxATzZT4rzdw37kThfVhN8FgEE3DpvA5vupkJusQXvgPTEoZdU1qzSWG",
  "key1": "5cRBDKTkaKSYg5Bq4rT2QUZEbd8dLDUd4khEmW3msW5woRP4N8LBZUQfs4p2bPVAYBhYRMp7A4gHMWeexezaFM7Y",
  "key2": "3wQ7Emx2Tk4eUzGE32MtncyPStUiMDhoTSuVxSnmamzwQ8JCmDrsgrLTKsgNYdv79uvVMT4Epy97vYMBa591v5oU",
  "key3": "4yriSJqiPKWrtc9pZ4kZtucc2mbLZtJZ2L9Q6p6ttbCZVrgN8cpXVi1H1cJGyRCLJDdPpbWrHKjCrNWaRA5DetdN",
  "key4": "2gk6Y4euR968Kjfbesprpurzto4RbdkG7xtuqVa6nw119ik5jcJL2sS8KpGsh8Juvp6hyK2AeKXtys6nAT5SZByn",
  "key5": "9NC81ZpewN1MFAWqsKF5dynycMkpXQJkCnMCEALTjfAG2HPA8s642YoufqexiRDoodpaTs8ZNNzF2Z7bEdJc8zg",
  "key6": "5mfYgYyP1gLLgvBj9ys1JPgULtjW2C973rBFysinaapkwxhGxt8q1wqGJvtRPr5HpYSaJUvBxGdNaLhwx7kRVFGR",
  "key7": "34oXZmBfekGhYKzWgaqtxpyT3Hv8dEi1hp8b5nuPtTFVyPHXAZhFVkNU7x7LoP52PceUXi2oQkTkQvMT8JQH6rF5",
  "key8": "5LArwHhv2V85cK3bEj6nEQcPyTomy7L1RGPa7TmDst6aFYNqN1f1cMTVCeys8Ys6s3CU3BbautJNrkQ7dCjENaR3",
  "key9": "DwLy9zHuxzfy2UNcTcE1LAHkhAu7PaitnRpih5msxjsJv3Zd66m3cDVeHj4sVLCPK2PH3KDycra46hYVzNNQRkq",
  "key10": "5R1uKHc3b56grfnFhTshkvTL9k4SHNenpN3idnYZHhXydYyBvGxLLyEVvp1WBe8QpgKJrNDiQuQpz3jH7AJcx7wa",
  "key11": "55cdMGo6jUPCPpppXBKSrhFgnYe4jKArSCYNhs2aK8USG4KAMwFpcWFxYvFwb4eTbHWN643dkRZ4M6TjEddwYShs",
  "key12": "3R4RHn9ZUwPmYX4fhrRenLESABumnXsp6c8aoSyRC43uoMuoN1jGLzcgpzcSfHgJR8tcWUHJ9aWAu9wDCjDQBRP2",
  "key13": "33FprtNLxvqkyuC3Hnjxqs2mP8JT1MRC1FBuL3fqP15gGw5W8nsfv3QfEHjqAe6Rs5Gb5cxKdnG9Q5BwXNAiLXHz",
  "key14": "28PbgYbzXbmHsnkNjkYb2mxJDz8uXhWvEUCirzioRkAxZjuNY1fyaWZ5A1iB6ZG1T3AxvoRVgvgzxSJ3TS6tWUjd",
  "key15": "4HKbi8sg1NVCGtkggYnjEM5Qz7cHGcefwoKn2adrydKZrDFyEtdbXuvoK4wWUxjfz3zT79EUHnfrnbdFQDHgsy8x",
  "key16": "4i88TmRd5a3k47j8AjFppbv1doBbxEi8yHuxKVrKWdFiuPMtbS73yu4ct2rf3jnjpAxyVhHfdh2q9634oXfDUjGS",
  "key17": "3SecNAx7t8Dyzk7q75k3tDPqcuG1478rviLrfup6EJTzYj9TinDfxy1fmfCzyPcFuzBUDHw7G5q9HzPiFixxvmUn",
  "key18": "59uBjqTDPebUTvTXbLQG3tGSJBXdR9Q3hHxsMc2zu8AuZf8J1MeXqwPoYEMLMCS8mUNQ82YfLuEm2gU4kjczE2fc",
  "key19": "4HznzF1UkesicCGdNRLUAB3rFsEkSXCVoAgrX14QEyk9rRDuxntnQoMKPNu2PV16oTFFWu2YmvMmfUmQA2tNYaei",
  "key20": "5k6FjzNVurYrxJzLduW9Zqv6QutZLHjKggEbhmU1NjZugExn4BZuRhb6QsnkZLtPKfk7sCWyCW6zDstNSf2TKxbP",
  "key21": "2M5ZyAS3vbGZAHjM4mpkrx9bPJPvnguNg3AcK6kEiq1Njj7abgeTUKoAq8otjPeMtypY96SnVd8KpkzSaF2WSV5g",
  "key22": "3sgCK9qdM64HrjHarwjRkZJKeCXpZNAvoTj2GuF98qr6cxBKbyLSAxPxXxAj7Hzv5hg7PGHd3gqCwWUkGbAQigiw",
  "key23": "3tpC4eZGY4aD3eRypqR5dk6YEhxaFGt2WqZEwmKG43KWDQL8tpKu8BzrqmfFwHs73TjZjZ2WfmB3mePqyhfbwVmj",
  "key24": "4BhNf9wmcmggdHEuyn2V4ykKDArxjSJWw2egg6iposPCtZCYxA2HEPVnuRfJw6iifDyqWisHRuWRBHNrHqNsiP5s",
  "key25": "2evC9QbhCYHG2bn6LHsymSC3AkVSsJjjJnG6ivrhemH23rxCAaB6X7TmvQ1QdCd6UJcoPzXW7tVUp5QgAkhzQop5",
  "key26": "AdiRohAsWsSPsdrBYtGDzfLBrAzWchuU4p24SGUgTAccqcGr5kTmBmDC9P2x58fCRHPCZvMg9ytJ6HV2sQDsGTA",
  "key27": "2uoUA4tPjrRJ6TtpAh1EJtgQNC6xDmZJPXvh73LfcL2voWmu1ukWHBvSg4NTfYosgmneiz8oTUaSqdCzqudbAiM8",
  "key28": "2eyZQ33ZFeMwGUpsapnJC5dYBSyAs7qE2nYcQU1fkAW6cayqvABC7MiLjqBNHAnhHZ1BdyBhsZ6Xuw9TvZFqGbAr",
  "key29": "2K1yBYzkQYqv9DQ39iwzdf6ipKHNT1UmLaXcSySyqK2Nk4ZJ3mGoMuAtv7uYkiCFHDLvPrAQerJjcw1U51WQXnrR",
  "key30": "2c3MoCYJ1zxSTaadEnDuYCA7VjKHeajEa8fwqNgBYH3BmX8csSjZKnLVfduCVeDBRuu61QV1DfWCsscnydz3EXD1",
  "key31": "2g9Bt2h8o7USNowLrSyLpg85AT8Xhc8KkVp4Tvv8hwCGbeetT9evucjN9VUrnTkjCqPwLRxkuo4wFNztApvoRNNX",
  "key32": "4ghx3szkXghxQpvRpryC8vkdSZ6Pz4ZcgqKW1xbXLX3cT7btViuXJ9B7vysQHFo9sr3eLEUaPwGLxjMM47BJwafy",
  "key33": "3gqgU7GwoZyQm31g36Eid2TuMSVChzNDzqzsXAfAu14r9Dj8kKzEU1gS7FXLap82L72bqc1mPh87moFj6qLZKLdp",
  "key34": "67TN3cm4Jd4aKqyLqnQJRoCqS6x1kb8rfp6XdaCbT35m8bBj4mHM9QHPjp8j5DEC9EFAoqCdqZENjmLrzT9kYiZA",
  "key35": "4y9NTJ18buqYPUkWrKRtpSZDSj67oMb3AbzCMy5UjDEy26HY7H1tFJBucpHTWMX4wa7vBH3PQGxRpmQrRZoPKZTZ",
  "key36": "5vk5AQw1xVioczM7tnr7CQGQTqWyPk1dXBj4igDdsCURNK3zFNDj5pTEnYjrFUunMK7UtuLCMEkthLxXuK933Nu5",
  "key37": "41fcGoXzXmartTKZ6kp1V7YJMwRbzY7JY2MHFcXWR3u8pGXv6oZU7WCWM5PuBPbCBLvbw5Lnq7HmUFTFEjRu8fUZ",
  "key38": "VP6zsUSNhrKE7d146hb8v8t4zik1GSV8369doixff4wLUA1hweQjj5H6f6Xct1Tm9TYyuLmVLcDrVfKAAVja1xv"
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
