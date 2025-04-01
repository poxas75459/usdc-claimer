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
    "5gjsbT71AmiTVAKMG9aab72GDYaYuuV9xVnwmYKKj7XPbFfvNHYBjsNu2VmZN3ZSB3NDgMUkNmrDSg5GWXx4fQcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "44yxe9Ca3zFizaXNUhAv7apJiXXYDqX39gLxSyMQLcVK6WYj7LAh94m4Ztv2wkomR2HJa1Gg5Fwzfwuaodx8hXHz",
  "key1": "37peiZWeino6MMPSBdqwTwPqnkMzp9aq46RWRJWFiCGt6J1JSdgTtNX8EQsxbozHTbx2sZam17drCQ7a6GeaExnC",
  "key2": "4oYDWZ2V5Y1dDiesVQhRMann9f9cSBpBna8z6tifw3Bxg3yxQhAwnwfYjcCynpFqbw1UftwxC83wthkDnxMikusf",
  "key3": "5oPpgdia7ZEZbmVti6nbUKVNpv8pN69y5RXWAw7PCKGhrajHmKUPhXxnMt4Z4Fix3LvXdhhnu4wMPkcTjjxNkdwa",
  "key4": "hdNVH7VrfNq1Hnz5uTMZuLLgmBAvmGzXhFVwgmHXm4MnqRBb4Joh3im1LHXPkH7a2cCbjeq2Zowe4rxcCX3J23J",
  "key5": "3fAQGEwq6BcJ6yqjJGszrGmFHXtf1qwKqCjUPX6nRgp16RR3wv3DZmbWsPHCqYmjXCUUzXpCtoDJhGq49quspBX6",
  "key6": "2EzFF6rV5z67vUzV1PrX5Tyn6uJc1PRWhEna43UTtMVTBkG7ZrtR9D8ugVpHmVaYB9ypmTjmXCEod2ir1rRJXNdZ",
  "key7": "2R9tLoqQL87xUFk93AUP6iHx7NAivnqJqQ767Duc2n27Y2jTLBaXZ1PSyBg8SXfPgSnkXqxmC9ptZ6RiVHv9VZji",
  "key8": "51Z5mU6uvCfMWKhGcBRGsxQ32AYZrmLnbVXDN9wgPoXQnm17fUv7PqVrHgTC9C5pdk1reu4xsjMcgSzhKueAz3r8",
  "key9": "4X59VcTZx8UPXSVXK6GNQ8D2Gi6hohvxdzzwcVMWrNxRFzag6bziJZzDgS9AvExxrVwUgqZF3GPxMq17mNecL4Lv",
  "key10": "YHKirFjX1YUgQMQWG4FEPwiZiRr538kpSfkn74NuJ7WENtRVgDVFoQ6s2jCdusN3EB4zr395jPgEKHP6v99cPKG",
  "key11": "4XdXwkQmfK3b8LyFAV3c7pFfRfhmoJRSjxmxuBBhMu8dZbJ65YRvaWZqFroKpEFBJS9FBcyqPEuqKmLG9W6c9o5o",
  "key12": "LtTCJ6jTgczupvjZCH2ornFSNcLTfRumr24VbRq7i2DzhFE4E5UCbBCrcvbzVnCbPq4qhjBDcshthAdPQoyxwBx",
  "key13": "4neemtrxdiZvWeBqpL1EdcNA6bfNZRXYSoChdDUgb8rp8wRxcfdjB8Y4TdLLQFGyMfrePNHmK9XcbpcBaTR1MG7R",
  "key14": "64y9yuaurjsniVXMjqzwG5FUtGYf3WrzZpXoRExicjWAdSUpg2qti8N4eP5GwGq2pXep9WcEwudTKkw7AaTfof2A",
  "key15": "wJbFYxytPqpD2bAEgCExfYFLJPUdT1RYefiyPSfKjtst9rvpbuSx743fSuwSPLE4R5Jscn6zznZVuaXF9nmgCeV",
  "key16": "2jHnQdmHLamasibieQEmcb2Y1CiRqqGD9XrEhttbrCCYFEQzxxW1NxZfuPUWaM1jhYLmnxgLqg1MYAQJDcCYmHQS",
  "key17": "2DtXRDURDnNUzMVvqnR9JHxfWTJZsfNzuJvouqQhN5n1vzvS5UDFEdjGwTNXoJQsYrA2rnDHq1yC4APNdABhr3xb",
  "key18": "4KPsSC2LHSuc1VDhVa3QWP5oDSq9qMcUGV9tfPJUCBMoiRDoPcxCsRYdSt7Xw4hMngABP3zXhS2afiHx21NwscYv",
  "key19": "2g2wd6EKhstHcTBrLxSMEjep7hfNCtkEKz5UNpm4Jvg1UHQR6SCfwgZL6P12yL5udrzqyhkcVeSjFfQCtKg3AJ4c",
  "key20": "bzffz1pwq1zXFczwDWWQ3ynsyaqsyyHL9UwfrwPd3iXBafydsFSFR77SzQpzXAw5Xve5S4MH7y1HyKXrDf4HEww",
  "key21": "3CJqtxefk2ZcHkzPnMxG7JjhQYDSXqpMmmDXUDEZLa1WQ7RnBNybvsHB354jk69bsq6YNmegv6ABn2z3kVNnJzQu",
  "key22": "NtQtQA947pRhADgZNzQKtctc3ThYYtWTe2Hb4Q4Vyk4bu8u9RhLi7FjZ6ySx5yoZETTJcJEeUsne3BsPHMdGoCb",
  "key23": "NYZEq3sFN6t64pGGA2iBJqb3A9jpaZkVsJVjFwqysR4Eh5pWfVYJVNgGpTyecvjW7zJMoYCSsrotanez98eNg9W",
  "key24": "4NApqnfyU3Hes3jdE9UZEn7vbP3wPzfHNRxn5Jotc5WdxgAAvnfCZH4P3PBG2265kghDy5SLFjq4QQYmFYoKu2yC",
  "key25": "5WT4CHAaJq8Wfk4cANGLGaNVEHL7NzxBXbbbHW4aZruepxPVWWZVJiXQGeKy5R7ZKX64ivZYVTG7Zy8s5chT1EXM",
  "key26": "J7yNv3exWvmXDZLhpMRo1PTxtL9wrqcerCxYuhdgs4Dut7gbgP9Sfen6ESegHwECzkQz59cohYUXNkW7mPm7VQE",
  "key27": "4Qspo56YRkDE9hGnLSpPK8UHPZAqcZMHXRj2vdNpmXCYHYhGNPkxs1NLDbjUwUkpPn4vB1HdUp2FUmpLKmNHJaQP",
  "key28": "3Fjr4Uqov5mU27cqwc9JXjbj7Ywxfm4HghfrNTk4nhNqKqXhCMV59rXNrzaDQCNCrJJhc4owX3fwp3ZGTuJ8QdFN",
  "key29": "5DcueuS6q2k2gyNYRh6RQJzpa7hB1CtbNHtqpmHs9U1aNrhLCbLzhPdDt2noyHn9zAATssWNpLPtzVwfS49WKYes",
  "key30": "62hctC5LzzigPzk5pvGexQtsf17jjY3e4ExPwyKAubCoR6CzfA2iLJY1bXHi7jrSFSqNL4K5duokCji9dmSbC2PK",
  "key31": "5sQRxBCJZXecKYxY8ZnEm1huJyY3Jm7uSpNkcNDZYrUmd4m4kHdHozE9YJXeAg6i5C5N8iKSmqPaqQsbgiNdbbCD",
  "key32": "e82UjexB3JGUYUCZ6BduyR6E65tc77y116nwyd4MsuxpxoHGveWYfMriGPMeT9B9uoADexgN743XrinR226eDei",
  "key33": "3Ec6k2X9SYd2mxKnaLpsvJjp52yWY5Be5nKiozqX9giKZSV9W32dg87dJ543pvNSoCqG8TYU3eKoYNDseTNKE1ez",
  "key34": "3s9JXobn9aCDFs5fDe5mh3niD1FQcXutLN2SRtrWb9YaVCdjnNVKwNMVwce9QQaTFeGR76CXduEppkkNA25EJdf",
  "key35": "2SZ9b9LQCobpAgu3gKngFBLm3HnUnt8qXcgw8X9aaSpYebh9fwCtt9BA4ppnv4A4Mmdgt64w9f9mjNXWGypPMKUX",
  "key36": "4ji1bprpingWBV8uknrFJ8tQnW1eCWmNYvxRymaVRoqnZChCmkjNgXrEKQouhEzxevkFRoruaZJNiMaSibKEb5Rf",
  "key37": "3zUex59L43nb2kDajtiP1nRMoCn5Y5LjerfBj5BV4xupmZEf9kHX3XvPYFUJYeCJayxDhjmAK5gycP46BMkk6CKm",
  "key38": "26NUatJPzsM8yvKCLv3XGFJje3gK7hJHoxpbfSDUZeKLotMRzhWMf5ZoyoKN6Mnwp9eLjkZactjeHcp5hX9fJ8Ag",
  "key39": "48uakt8CUbRGaYQJpKGy1WkLZoQmn4yXZdamwnDf4m9JtsGLV24kQR9zLhQvuLTAd7TbrAmskecGy1cqrhSvmbEM",
  "key40": "4eGc631cpxakS2CkAycoWngzKRVQuisk8hnbUtNqf1KXzZC91jfeqYRq8QvLMimSgpA6er1Dv7W2fge24KsJ5XPx",
  "key41": "4YhfLxLj2pnvGABXt9n6yqjv7UnMC87erYf9jaC5MpQeSBWMJUwMnLKGeNSc6ahR2VVCcYmRSJ211YcjTJAbaoWU",
  "key42": "2gee8YKxgcsfJfnqvFSm1AxnSh2YN21SQaipa3dKcnWZXfHH2b8yfLF4iRv1QbH98tu4x9t1Ez21U5R5c8STNEgj",
  "key43": "3b5ndSJo2qeQQ59qoh2u1pvuJkmNHyngUc6xnYf6WDEH29qxHFf2ecusq38Qkb76eEuYjRRu7rKj3rhoCgFKvkC"
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
