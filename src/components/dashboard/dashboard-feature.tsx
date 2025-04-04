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
    "dE2imLZvpeqNbKMkg4NzotZ377FRMGkvHeJkTv7at442i9EicMKQBtMfRRBTXiJnhp6WpsbbbCRRYcd7hs75T4b"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WLXrJjarcJrmCk29F1d7DaAtsLE94FJvB7XtFXDh1boRYrEwWTh4vPEXvjRD7QTSsh6gDiToG6PWHeu2HxS7VCm",
  "key1": "35TbKz9Jd6u7598RZAGNngXuDMuSgApsjTjXDXpygKTJyVViPL9Ko2RtgevZi9CBoB3pfKVWeiKXgmrRMVVCgLv",
  "key2": "rGstaBsLQay6gFP4xXshqeeFPRsdnPbLqCpcseeHb5vGv8616pskiYkCTZHXPpterdUaKLpS3fi6YgMN6czojAa",
  "key3": "2N3Y3Sa3RF3F9eMVmhatyA1UMfktNbArXrVvKAj8NK8fU9EikbGMLyT65Y89nj5bGfpGpEQADnfRHxZueCEoMD1z",
  "key4": "4SUnp31BaqA8cHKzmESVQosjpAgDbdSvZXfrCvjbzLaFWyqHxrbBsRY4kDeXuqCLtQHEsKDsRhVaoUnd1GDHNTFz",
  "key5": "5FkT6tVnq3XSm6EGuvRXV2oiGoAfUY3nrP1K99obzBPFsQy7jAsaemeug3H8znk3eRnJeYJuTqihrL7uiY9MTeLT",
  "key6": "2qDirafJGUU2YP6Bdkbqkcze6cFdbHj7KSEk7DtWSULLcAM7KAZchf9ZLgmeVaa9X1HN726yqwfgDe9vVstvNShC",
  "key7": "2hSpmKjuEgREg5cZx7hU5fnT6R2vAxA1tmQzQAmRmbCYZqRtTDebCorbi4zP7RHFWq3ERxbr7XJcY2pAGsZ46AtF",
  "key8": "43vX35yFFSvkYSN84S1vyNXEBwdYYvyzqS1VH6GB4PLRan8Jz1smfmgdskVvPbiU4y1F3tfmeWhk5N8SRXMmKVyC",
  "key9": "54GJjaEWFqLi6X8eYD2ckUXmFogQxKkUyCNzRAV7kdk6nEQA6eX7MhqCW1e975ryZJdz9ejhMaNgwtzCmKcjifs6",
  "key10": "PSLBk1shMjxYXijb6j5U1p5DkGW3m61ZWBYiMKeZfZWVKTeSttVbSvT1SsKwi3FQuNhUxeu4RvDyjLQXNKqudLW",
  "key11": "2BUKDunkHK3GRuYMMhB3e4X4VZPuQJfPhJxk7Dds8ZzFUmxLXGxM34QkkFLoM4hvhUKrdbXJGN2s4tkE4G5ce1zc",
  "key12": "2RvdGHV4ezr8VtVHzCBR2urto8mSDowNT7gSQ9ayEDm49Q5EXkHhZ4sEWthxXNb1WxyRnuoLvyZautsMiDHDHbn1",
  "key13": "T8q2fcYjRD6FQMzEoFLRDnuCJWCfsSgq53VBxXdP3jfYengJzrbDyFnx68LqwAQL2TtGABUrE7tYwh5VxXNgMJ5",
  "key14": "3g8m9aoAJ8s9C84kQTqsRVnWpucSVnKLHKHVP1EewZhiscZ626HDW7GsxgaFw5GkKp1TzjKVcqqox1mLQV9ZGZsC",
  "key15": "upJ8L3HUjZSZKMsWAv7xd1u9gZA7Gmn8UyeLUEKhNapphJqf8Znz8dyZwPriXmN96W8gUHwwj4s87neXsUPVFf5",
  "key16": "Zw3T9KLdF6jErp4Jx8eJJ5c8LkqeK95N6pkxJhjLwHEdhYFKytdYWt7SL2FGrbuxNHCsRETHRgs6QgKUCoqxTYU",
  "key17": "EWjDpqWKvEAYVJxTv1LSMaEeqdUDknQqdYQwxb3sL4FKcx2CxZDzmhydU18Pcusb8uNZVRkvTJm2UGvwrLQfEnP",
  "key18": "5s1P7zsToo3HhtQEf7nuEkqfabQ9vu3Vuri1aJd8zFrn1UewGA9xqcHtx2TiQsX8QEHGUCQmFQuhu8zYyWsZvFGR",
  "key19": "qT4hE7UX9TbPP2uuHiyLKiS1dHbrYXzzfjr5LYywJraaxQ4F5E8r8Fzhod2ja2Ejy9fCpPNFuV5aM4vwvBZh4tq",
  "key20": "2DxrE6YbnxBgbD1goaYfsurBq87DL1bqu1HKsR4dXst76jMFxeEBCZEkYwPgfijine9m3joCudtWhVDsKLeZ7wtd",
  "key21": "4c29TKYjbE7tWc8kow5egUT8wkwJdCp7KFFcGL4VevTzbkBBQ35Q2VS3EAvss4iKJgq1SUbueL8uDq1TyfzT7Eiy",
  "key22": "5wJYPs5cy9EWjv3KNSpMDzRcsqfkmbozEwaFs6nmoW87qk9xDLmcdAAFPVjxvBBinnRE6wVQCvJeAWH4Mu4wukJH",
  "key23": "4rNuRWYvUwAWhLDsGgsoTZw6gxAxzuamowmGfS2GsLG8mesMLePgd2coJjcz5KFXa9757o5fJk9KBnJXm1eF3FcR",
  "key24": "5xPeHr5WtwZhAoF23tci4paDcBcp9LipuV3va5tJHg2uJqHRbpz2eiSmPuTYwAgjx77AwgCDvfB1Ck9C8U1Mtppu",
  "key25": "2nCaeKHHsAzNB1X9iW2Tz5t2zwe2CjwgEcH3CQD9XPzumaYtoS6f2hRDdh1qeveqo42B44K3UsxUGYF28JPx6w8b",
  "key26": "5bcbyfUuEEJNhD9DR2YoeoFEPNoCG4X6FT8BPiikAQ9eWfGQGLzsD6V5StKr2F82Ez2qGBYhD1vYrjCZgyyQVbmR",
  "key27": "uHtoxzs169NkEXJ1RbixeEvK2DHcKD4SAut4pbmxmhuzFQnohRpzowHhJX2ecWwEDTKRJwhRumnxnHTeqE3JTa7",
  "key28": "yDgPDB1vTzGtkcF2i2WYvxngxG88mBNhzX8XjRPKS31VdQC2XMmxVcPC7S4zzKHSoCoEhj5oaCCjvPBuiu8SAwW",
  "key29": "3pdWvmb5VfAKBKVmjBiqKeZ8uHUCfLWjoJUfAXsveyrqGZudUTZM4Z9NZxHNaA9F8JS1CaAGPyHNchP4KEMUeAtJ",
  "key30": "3TwhX3zDJ7YL8CejUaZ5Dws79CgT68q5SPnHjeLG28koji6tytuz9gstpD3qV2ULAGPJaFiSQJ4LpVtbjNGnWwYJ",
  "key31": "3AWD395yBuf8UTeCuDongyXZ96BU2YiVn5gJeiLQvJETe1YPcDE8bnRqHNFNZQmTwJGPTiwvM6GtLUU2BXYcwwja",
  "key32": "7AGTanxrgv8a2YCSmS8po7io3RcRQeyg65CYaW1fFvqXYJiQDNcKJeRB6kfcWuAGMsw3FdJkCZF2NYf2zZSKJSB",
  "key33": "5RnQQaRYU19faxaiXGgSRM9KxKFQM5NbViX5ySV94RTE65yTytJNn7LSTKiSqunnSXPG47L82P49YFRJto8kiA8K",
  "key34": "3KqgPzmja7BENMemGQXPbL6Td63HJmDSfU7YQ2SJFaLmWxpa2kc5ccCUiLPRkMtDcCR3DGNZKgCjrgzyWdM7eCob",
  "key35": "5SJF3cD1m7fCizP7bvuhxsRhHueoSHb8boRXirymNGi4SwUp7efJNBYnBjfGggBy1ybSwfJK34Y2vFHW1WkCuUef",
  "key36": "5Vy6jDsbB5r2jUvubLhW49C6rgE3pTRTdqRmmq6LJAvP52mV8gMsp9fUMpe2bARZzj1KfrJB8YW7hxiy578BXiC2",
  "key37": "3kZHfaGW9jMUUVJprJU9K2ErFzyd2GCoG9MFFB8wC8wsYz99F8ERPdXCXqvrzEAYS4PcEmMamD4wsnHCvJiVCVB2",
  "key38": "2a6447RLLq8Fs45VpyfQ5ULYnbLnB598XkzumQzDSHUDwSZLUwzqKyNgyTTrAh5goMjUnFX1UbEqfHmo1YRNVSxX",
  "key39": "4BDKBDJWtLYkX6avRXuEhb5n2mMJ4C3RzTs3qoBW61rDkREHme1tYk5YaN6AXL5D1KsB9J6NEnnK5t8jAgn3W8go"
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
