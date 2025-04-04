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
    "3iiyuNMLEhiES1rPUNxBk7oD6Vvk4Yd399jcvj8Lt2tiLWQiu1kcx5t7q1EeX8HJzYrurzWazuUZfSCcVm4jr3Ga"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4rtK9C1HiRtyMTzQM3hKdCDeJNmYKfM58tzofFB7A8e3ZdBSi7hY6VvrZ8j29CQ8rQTUgrUek9apdeEMFxYRALdf",
  "key1": "5JNUfqGrAafER5NgJ93M1D9nJXF1eMAbNPkTKEwHyAA5rZ1whhzeogbs271e8TCfHvrnqGiELkTyME7nJXDLz9pe",
  "key2": "4QfcFsaPt3GAGQDC1KCrURh26qbB4X9BnZ9mxyfrB5ibKKwsj5EYaQ4HP52Xn3gmbWpdiYGgycU7uvs5mcPCZkH",
  "key3": "61moRYWLC9zYzUCo4NBpSgzkoWnFcQggRfXcxsCWFWehxqgTWEWpkxn53a142R2HJ2fHYTiGFpXdcV5Ku58wWHgy",
  "key4": "3jQEtr255CRsmz3cgrKPoeV5hRSGmKR9hVZovVH7pwuMJeaN13jGb6M3gHhxT449uUuXgW2xMjajPk1ioCX7U5Ub",
  "key5": "BKfRvwMnyVfYiDAMAAPcLrFbSCVJJmzs6eGT5APX1qzBer3ajrArCmpmpkVBapFJGn6jEuK9S6MZoAwUjyqknLR",
  "key6": "2t8X2171Mznji8rpo5wud1PPME6ceyLvGeHbdUhvBcoJ5JqPkbM4sDMcW7JKyuyFLFeXc5X1o4krgsQViYqMHWLm",
  "key7": "3W4gsJTmZgD9accm3JUzZoLHH81Eb4B4xiQUp7vvabBRybFWm2pMmFDyQRPWLZFCgcTbxbp2dRtgMULoAhTU2TaM",
  "key8": "vqz9kF6GSxLrVsPYdC1FUPviXd5PSNbFVbuqgwxHNWdN3H9oJGLSioZE4BhihTvLt34NbNaws9wkMhLEZYRcNza",
  "key9": "88JHuNAYWxZGhYQLtWSBjLU2iRqnuLhZPidc6PABBRgga6DWyJhCm7JxVeYHMiXpgUeBZ43QfQhgaYoUke9TQkf",
  "key10": "3VBtEW7YymWP4Z6CE86CdxUY6R9zuDFuMeT5Rz8sBL3fhZcqtKhDXStDPVnDiDJBvwQwhUr4AGi6vKHBXas23JyX",
  "key11": "4XAZ36KPiSS6MSdHPQeQqdraXZUeaMVeknp9xHMC7rhMX8fScwVz63Mig61zJN6sGyTHS49Gbub5r242ritVfiGN",
  "key12": "5Y5oScca7JMcKYzumjA6i2M4fQodFnPAy87yncgVW3nLVPriFrhdm7umATKA1Ne24D5xY6XN4ZjzUzEhLfJBqVXC",
  "key13": "3xgrT91bPtk22dtDctHKZwPSuMadhWueou44F4JEzpL7cjfjTieXoLPNj3zrY36WubSkzBXkjjgEvsR8H93TNC1F",
  "key14": "48fVLhu3B1ZDMDUx1yjuKeK6p32RxKJFLthmgFq9GhfhcYhDBXzYr3qa3BkMVeam7JNEmjYRRF3gksiN8YkCrDH4",
  "key15": "46PreMYZaZfPJxKbjNqF7FWgE1A13UKdUTyihYDWibtXRNjtXaJ2ikZpi3yWY3gDgDJ11VieHkHswJhbsCzZ6cQt",
  "key16": "W5rtKJsNLAeRNtdiEZDxJaEfZQoA2faMVMkFkxkdCBXnEUAPsskivjH2MHBD5zmoeiyJUrcanngcLrXR2dX1fAt",
  "key17": "5ryaBi93dVYvTWJaYTycNCH3H3hCpGYxJ6Ac3hspTbEh6ricNsaJqddbtax1BXMyNwbpFEn9ZqQh96YmPLXM6beu",
  "key18": "3j8BjkNeHaoxv7E9Nzpa1HF6oP6EQotf5Dr9YA75aeUSieYEUVezqL9Rm1P7mDG1UwbcFXiyVNsSv1QmRpzayvb8",
  "key19": "3NjGZw8bKLLqhyu2bzWj1NS78X5sTLfXRM6XSshpU95XMHujY72ZNjkXi12kCZd6rk9fAYxmyuuBJNcAamVS3PGY",
  "key20": "2UgLVHAeeo36Db9JasDSuZSGjfaX5sAsBzpnqqL7fwzSVRkgyfxhodmBatTYNhjq3x37XjJukSzvZNP138FfcWuq",
  "key21": "31RnBHuPDgL1786kbJHPSFikjKq3GSSTEe4Luv4RQJMfrWXtJpxwb4csn6u4HkxHmu8rpngneVDuDZHXZ8m23Tse",
  "key22": "36wPKJ2G4t6SY3TDkbnxqVh6tr7PbJ1batfWUzgnCR21dCaN4PQoLPQSCmgKxomNnD2aNb5d3Sir35TMhnVg6LW3",
  "key23": "VcTfWw1zr1qtjW5vJtYL8oF1PK5YS3z6Tu2V6CgawTBghNt2nvfKLvJRcnxPALfATSYQApXEozpHph2sjCsJhzL",
  "key24": "2SSZc9GmMGndME1bmsTGftiDGqAApf2tBeHy1LTCfR43iSecSa7eAkii64RuGZ4c6cCLtjny59K3vRexoLcp9xfG",
  "key25": "3Y93y7VHoCk6n9qQcRycjkGkg8iT3CWGX4954gr6Pai9ERknsU6jTBr94Q5datr6QrDKEHsGcYzJKVF3FZwnnTLv",
  "key26": "zAJwqfZ9CSTjw7pbyq37hupHcPWHEBXB4kZeUyGeavs6DHoqTqJSsLk3Ds7RUqQLtdGVMWX4d6V8YyJzeEZ63pS",
  "key27": "2SVjZhsjdds5cPNgZcj2Sw887z5ZHPLq6hFfDDrLDA7HqvRdgqBpvF1kYRmg4Kr4RuDkDEQ9vops1FHPpdxtciLW",
  "key28": "3n6GNVYLLyfFKtdsBqeHdUc9M8dn9RLtCRtrAurvjAHNWJAjjkmpMevcMEg978Tfc9UPDXp2RV3QCUHCuH8gv8eV",
  "key29": "29jUpYXvhup3dyeCgg5tenRzw7XDwNoUjKhx2T9sM9ZXJWgxsshWL6FenyDHwkV8dygH7fkCn6hno1YiSLWBjo3U",
  "key30": "mm12rYuYHPc7Ek8LuSsxFTbXLBGj3sncvXRygSyHt9UPfTh7wyumpWzumiYNuhtbKNBhM2cb2k99TM8Z34AGyxG",
  "key31": "2GC1iFHwfc2PrYXTN4i5QWQywNQaBZS9qjEggbAjKNfvMaQ7zzpaWTqcnaeWN8kLuenL9zQiEn9azcf8Miv4nMU7",
  "key32": "4bDb8DBwTc6qGEVWS3kDJc85VUB5VSnxcuC9nt9C1epoj6wE6ydZyEUJ4vZBdiTFbeQuKkTjDi6kMigakgQ2gMk8",
  "key33": "5EJ7PNvBCkjtQq1kN4rnX1Bt8CRbWZaFkN5NJKXCVZMWyg4ngikzBKYpLiu2C1Ayd3dtrWDtLwTHRAHkWfEbsPrF",
  "key34": "62qAXwJnKngxnvP9zXRSLZJ77pmvztMgqPyNxKoDEcQ96pn2Cck3rFHXTWgY5kGemZqVuqSxTSVHvzXu8KhP6dBo",
  "key35": "25zKejC87tyctN8zWQ6XzQFgCxpqTN5WpWmKysqaSEtYCQ1CGPNXwkhS1kXbusQybVWEXFbgAuFnxqFbioDuRvQF",
  "key36": "htmED1ryDcxYyXyTvp3iy7fP1QtFwSujnzXjB2bUiS7dqJ84ykaKJjckgnjs3NQZYQjSpTCTnGbHVSvhz4y5J2j",
  "key37": "3zDeFsBspaxwHWofYKvzwirjDxJA9DeTMoY1NuPKAYD1vZVMYwJpygQgjMy8t4Pro6BKQ8KSv9mF7ssu8EyvdkKC",
  "key38": "jkhVSXkZXgdZdrmV2zH5yLbqnFNY9BnuLfNhLGEVGuXSb3HSJv3zr9tDCFAKsfeSjxQ2bsUjfbLe52mhhsT4sSi",
  "key39": "3vZrPhbqQJsyzpd5WQ19EqTLuBwg3TCGrPSpeJikerhHVLBfv2auqX8jdKvFkAHLP5wtWWn8ERvZGcP3K7DZvzeL",
  "key40": "etYh2aYJAoJPrTLEDZTzQAKHSp6eh2Yd4ARKZGmgvnbfbj5RrWWmdvqp2mz1dG5XzK75GuFBPSoAoUvdhsHpxER"
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
