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
    "C6q5ZPy9AJuUVHWSwyzQdJc6SWgThQvvZvjnLJ4P39DCUTk5ky48FbpJJepctdLPcwazxnAgzWiyr1UEKfmY41M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53KginiMbrzWBaLYBQ9HMf139xjjG8XMtcc85gnpSBACUjRA9GqfJPMdJEUmoGjwv26WSMHNDY6GGWtv1YyxuPRB",
  "key1": "2cABYP1JPG4MLeNXwtLY63hMBzXbtvsRNyn5KsYyuBqn6TkYPRCJVy2iHbNsBdSw3tduZxjwRhgHcVXzi6FPAhJM",
  "key2": "55Rw6v7FWckdjdhkajccoRbNT79nPpvafrtqPy1q1hUbNEYU764qgVuTaQnSDp728oDwMKn2kvZQej58CCNsHt1P",
  "key3": "rB1fyafCabXu6qAqtbxChjFviSZhtAe5Pi3gS2C7noNm5FAK2N8hiR1NSgWFeeCVVH4EX5mctnBm36vEZ2XrBAP",
  "key4": "2SqvUEQhxyUyuBzbuEJS7FTP5f4Srucmtc6wPbfH3dwq8hZL3wVBxi7J5xXuaHtUNshU4vGUwD1DP4pPmZHNP77W",
  "key5": "3VbUtiEpezGmpfa4DPnTCRe6SHvSjNMBsS1cXxNBF4RoshPQn61kRPav7mHFxnk8abiZCW2oSjF1cVxRSUjLHZ8F",
  "key6": "25tsTsmJfH3MGMemRTizYRR1yAnPQG9VdAjTUNY37HBFUC6vTven2uJJsSbnQPiv9uQqeYusWcvYBbKseoJMDxaC",
  "key7": "kz7mgdFtuJXwcT4bp5KN3y8EGAU2nHddiTTVKc4uPupmzs89Gz9d6JUTptt8EdPwhFDiemMfGM9ePXCQkGD969n",
  "key8": "2wyY26FjLxyZLENYgmWZaJZA4BtLWz8Z6jaf6MkS9ki3aEQXDp4BnBE9sj6kXawesPdcEHPDPSHHG9PN7NWgLLYd",
  "key9": "3pCgZk7JAtXCas4caM64wuDRUeeT7Yk5wdN9bYBR21jjAcKFLoTYQqXRZ2L54oDy3ig68CgEhhYXSZrbJubMLGdc",
  "key10": "4qygYfKRf23xzTRWyPgQ13suD45TtXg2W1vnT9njugnBVxtUg1pKQYYvAezAjX7TQQs1C6eQTq2ne9sSfrA4MdiG",
  "key11": "5iCVD6hzMFqCJao3vKVbymAWYqf6PLdmpJujMGNe7SPQjxBMatSKWA4mrnRGJFiNQpjeoLUsxzGZMDV1VfW5porN",
  "key12": "2crT6KugtLJkAYmhUtfzrwD4GfVWiQuGV4ECGNCwwXUiTBYFKdJfYpQyhxq3XdTzN5iCFoNGasaHgxJYngy4DW3c",
  "key13": "4bTD1V8EA2kcaPH89ek4XxoqySGufFx2TGLJjUYbtbiGeG6Hbkcr7Kp3RSV725MqnNefLxb5KQzLuRriq5dpAkdw",
  "key14": "R813TxFC98zX4cNN9hnocMUMqPvhDok2G4WXVbh4LNxanpofTJpACvTAFccGcL9bKF8pYHg5mL2SZGYQVianfSp",
  "key15": "4EMuVT8JRAqsdTXPKg12F2JvWXVEDjyDg5BQpfFeztuefXnksbYrrNrU8Sk4bYuaByVVR9VTXyuGUEnsHocTQyt2",
  "key16": "z2Xw1Fu8T69C5SPfG1qs4uRCC9JfjdnYmjKUa5UUixhx8d1n4ixq23q8PAzLCGNQhCj4h4LBLnSrCM557kfbYgH",
  "key17": "2scVJEqcpzknRp1nCNCEyLB3fKrnpbwiDG7N9YE5AvYqQE6afu7RPujWrBq4NoJD6tM6Att7wEvQQPg7v91jrEq9",
  "key18": "smLkgsAn5mdP8xVyT5zHdf1J22si3GaiD3QKpT9BWkdg3kiwuZi8ib4aLhLXvuRZHxe34Lepa3fhAAKgxTGtfr8",
  "key19": "jDFUmqNgKBhACu49wJ6jkCSeyLUs8jFwAa1SH7KRHKZ9J5SPATg39BVFNKgZ77AuTFWBndeUi2DhTi1ct4tQwuE",
  "key20": "56gvNfzCfJWgphFsUEyFxooq4UhQ8Q1cT4JEdrik6UuzLbCmnuaHq6h2Fky3KEjmaGxEXw4kziVNgxqjD3tmKgXC",
  "key21": "3f2QrisBJvTMPXVx7TBwdCQMTauYrZuUH2qvHVUVZrviRpQWiiuYt5yKRmbJ7Abpg5MihhVmJCefgU68oY8mJRT2",
  "key22": "2HM4qqFHFwSe9UnJTzmX1jziRNn3SRSZPhuPZBRpGECzhDmXmiz1XhNgAWNEfMq5FNefFAmav2R3HYZgykhuvDqj",
  "key23": "2eJz9Zoh8VYHj4o23Bt2zaMYTDnZaHrZAFH7aLo1Ze3J6vX58w1pwA7ZwToBKoyDehXYoV84oAzHmZAHPz26w5YQ",
  "key24": "2PHFAvoEiSfzFLiFbwWpWF34CfZ4EN6XVPfnaLEGP3UriPZG3ZAngCz7NyhujdppwJHfJ9YPLMKjSz7k7Qv4rBKz",
  "key25": "3HkjrV3F2jpwQqaYn2t9yk7YUqqxgY9A2uNuvxqaSq8vZj6ap9PJrxr7ZtAGvN7K9DgF2VqPcYpAtVMYUFNCkXyQ",
  "key26": "5RKMePMKgcQpKBqmhJzYdF4YsWH2fxgNk2ZQrE5JcoAh2bVpfEm8NfyyGq7sqrbi8x8BxaGPwME1bY4zHYviELKe",
  "key27": "4QbtMcY3UpJzpz5DBZzSU1BnrtYKv6KH9wMBKScSornYNys7ZzPaRXxbHoNPtTwuJ2Ju7io8DgN3EKbbzftcpnsT",
  "key28": "BKG3oJLFJbK7SLtnDnhfoFgEaKzcYF6X42uT2eyTu4u2edB5prgphVnGLasDYsWrthg4zHgxkKeG8iCLBykaFLa",
  "key29": "2esbfrX3TJYXVaBQ7TBEEEnekq8euiZxPv1oTTVUgZ1LxJ7yazYa67GXhfzytvRmzPr9KKXCnRxeapVNhv4brW7H",
  "key30": "FABH8Gisd1rjT25dBNAabonNdkBuwMKXJximw7PZisSCF7pRFJ34pG35MsoWLiFUSc2q6wM4jWqohWhHb4yVj9r",
  "key31": "ecPoBpkCveQk7UzpBZoDt2WNthUKGaSwFRSXqWh3k3AJJCCxXBTjQJV6du9wF1bpYRnPT3FAyaNbp7MkahXZ7Ha",
  "key32": "5Ky2gHEN67yiWiMi63Hki3PA9JrvU78eGsMnaeF7b7obNbzsYJ2h4EfZ254ZG3icWPtdTKnTAfK3MKvJ87H99h9G",
  "key33": "1sshH9rQrQirpHqojetVza69w6BiYKhEJG96PAA2iUbUM6CRcSt1auaWUKxpGS3KAMMoSNWxrddryfPHPwM7UW3",
  "key34": "5sR4Gn3B9AyyrDoeaBneiyYRyTCniAN4aMatjkeBkiVsp74dG1a2mht4uGxUWPBAUvUY1YHNB1HHnBytDGWZsGXL",
  "key35": "dLh5TSgsZMDKR29RK3VRVi43JUfJKX3CJuDdesBLgXh33zhbCRQyjKevyx6wCKBPkGEaVz9PpQMynkf8gT61XF8",
  "key36": "2atZ6Fq1xfudepXS5V4ptnUpdWUCNbGeMXPvbUyJrJUvYqjtaj8SBbLypz517h4GmX721kn2wrc2ZwfGHyjDzZWX",
  "key37": "25DFSj9Rd1tBGDNbjodsqyZ5GBLDGBHkLnThGdVwXJYjPXn2UjX7rckVQTuVoaHs8SCJEMuLwNa6CvEqhuzcoMdG",
  "key38": "54sSzsUZzgeDTRN7YeP4dhHPhBxm2bFuo8p6Ydy9LBenZ6dDLYSv2h2dVPRPMMTXPXqB11FjuVAyWq8MBRkVPaX4",
  "key39": "3vtyeBVzRLXobucsUmq4KPjL6cz6rkJYbU89ZRP6w9ijwe5w77XGiJmWMZdM9FKHwacTLw5J8yFpL9Lxzf36HJ6a",
  "key40": "3t6DXLebfwWcVbySgZyUAnoQmCW1P8FYckvpFWUeMNiwCY5khL2FbTh1TxKEEyr2gQH55EV6mRkmRQ7o7HK3WtYh",
  "key41": "2L782ygqv4cRKfpyh6UGaFsb5n5yveym8MLDw3DU1Yt45xf3sp2yZjmyzvm1dB3ZDztxHZs2qaYmz9S2924hgv9f",
  "key42": "2KdCxyxytrd2rsZfRk2ViYh9CG8we6Sa1tS3HVcZgvLRVCFPFQbkCwdsWXLTvbirYsTZ9BWKvn3fcVXM4zZbs2wP",
  "key43": "ygVLeQrLEDsLXqskX7UNXZNKMKCdCxQYkV1rSg47bmJNuCgVuo7mhVttTQoU1yRQFVNcN8VJPSkTf34iGWxo3yC",
  "key44": "56sX61umJfePWK8gguRYkAs7GhN7L79CPoWvDePNrBKtaFo6u6cpMo8msn9p4g6qz5kGfGH8CDZ1z9cXhJyMmZEz"
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
