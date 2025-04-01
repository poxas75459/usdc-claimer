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
    "3HeuCPoLTRHnqGkLnPV8zwJyw2EDcMV78R2t6noBMtx7H3PHvywe7d3QR5mc36JrJcKc7TYSp41QaFaxvnRDHCwV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EkGBL488RZk81cafBLP6c9Nd2C2wCSJM9XSpG8d9uPWUNst9CWRkpJRSVQ3a7D8Teyv4U5RWq6FH1Voh3ekWNbA",
  "key1": "5eRw37W2woPJKije8PXY2sPx7GV6dSnenRX5LDn4Tf7zkHtXfTc9KFkJYo9XKjWDoAMDjcgUhb8gj8UbZjR7A2Y9",
  "key2": "4CA1JWoz7eMssa6dgz7sNBbKK4waQDWU2yQcM6mHgFcYqmTeZgKE4t9EWWmbHqfnfnbWQmzMgk5EmK5YGahxsdsJ",
  "key3": "Vv9gMjkwfc4mW4roQ2XNy6QuhxG8veucPXqsL9psiHcNxs18fS156mLhgGiaX8PMfx7qwoqArizzPB15zwuuQQ1",
  "key4": "3rSEFw41U6VHapWA95pvhijezFzny2GwgfxvGtGNkpFe7o893tKyjNgY36GbA1yo47WVyMwb7d41tzcdU8c6Ys2f",
  "key5": "4tuAVuaAWEDZmS1tE6hdxBrgCh5sx1c9AM8NfYG45zf3QhHP74WC2HrQH3kbBCBpU8JszdUNPzzs7gvx8rdtyx9V",
  "key6": "67BHVmErP15qgMN8BQfakBE6GooJt4xSaNtMuRp6JQdwngJBEuEC9KbeNC1MRfPp6puRbYcHY8XM5UonydhtetLd",
  "key7": "583WryKGQv7iF6iM9hZMbmR53DLKjWCwQZBoseZrcw3khaNdjQ6BC2kGH344Qzg4EJ8MTz1c4vgzSLks8oKxvywT",
  "key8": "StGHq1RGuJ4F32bJBdPy8Qfh4TeZ4xTb8X5LxtCeCYLp7B4qTzcc3cyzMqb7uj1NjDCrhYTqvULgS3jqDQrcdyh",
  "key9": "4okUyU48bv8AzoKt5xbitqBUqEuctypCdYpEfta9GFuqqok5wMvb3xtHPcEZiKxShytrksfBNSxAzoGQ29Rq3haV",
  "key10": "2aehUUT6ahRm2yawa81MNw5td11pE2yDBwviP9oD5p1j77owxEiu5GTXrrmiu8vLT5R1ZpsYZtKbGQJTgDq7BA32",
  "key11": "TKUs97mnw6vBTcU3ssZC2ByaYC2kBAwPmR6UDHV3Bw5TtQiSB9KbshqYzVMKvDXUFimSvy8m8KMRwM8TNuVuEVv",
  "key12": "4DRLqNsxVzZuxTbEjfRs8V9yqs6HHfpwy2DuiYEx2vQdTeBockf2ETSJqWRX3HGP1NmMWhGhHWgAuL6gfgFpLgbW",
  "key13": "5nf6ybWBcvimuHrF92WGwJpZd2iix5FtKR6iCEs5pWnd5MgtEGihhXxuSz5c1WhRa8bqKkWqpGLLpFfkehvu3881",
  "key14": "6qnXM1kHaCGK9w4CXMDaj1a5mDLcztQDkg8n5kGkHNjZApmqfKVNqijmC5foEAB251qv7mwVYzwwcnU9xdbpiPg",
  "key15": "4Q5K44wbDD3tzrPXBsURpamcbBGU2uXmRr9JTGqDtYhAMiUVi3E1THB6qu6FJaPPaxL8Q2QYFrXaKMGyw9cLSNru",
  "key16": "9rsmEAjGbF2i7ZMxcSFXWKKFaoovgr3MXpkYcJQo3asnJ7Aq7wsND85rLYS53WrDvTANUDyb9bsFLvzgo1X5mU2",
  "key17": "5WGwYQzFUWBRqwNb6wNPoeht6nSB4cTXeat5hZ4UbeKLwt56YeWYav21nVucE8sL8Y3PKu51edXsPdahhGzZVktf",
  "key18": "4hN3t4uAQTZ3kRkN8L7V96uozN9LsQPpzukgsGjTzeBidL1cGDxDkxggkEtswLq14a8p7E3QA5FZ29bVwxBLseEn",
  "key19": "57npHhzkXpBvZGr2LEfAm1W53BioWrxb4xanz5HDU7DTvZ8yGoUtAcW8jjmFYn4owCsie6NrHgA7StDoKE21srsd",
  "key20": "9rKBb9tqr4nCNi9NdbPK31Tc6o2xZtna2Q3NJW6TRPrgNgxHizE7DVMkUAzCx4cDyPUUcSKCtgVpkCjZB854oRt",
  "key21": "4pKD1GYSBUA3dfqXpNCPsQUorT5Mk9mvqGXGgN2qEGoogP1zBvddCDrBGnMwoPYzdaj3ks8CJEf5LaiMpSsH5Ltd",
  "key22": "5ZZeR1Ws6cx5dR1Pm8chKVQaFovvsoAZnGw3bJqaiyHUbUSy6Ackv5GtcNPz6Vr3ALqhrmjaUNQ8XEjPe2WkT25B",
  "key23": "2t6xpqVNoajapCdZidrp9eAj2eJ5UDyxXApQWpmTXRwHAFR9r2Bh3FNgdXG4ynHYSavYPwt1Yb6hFUEfUz4Um6z4",
  "key24": "4sKxCXiFQnrFsuqmmJsrdkSCf73gmxzdoptvVvDbWeGcJ4tdpxqNhkh16hRpDdq6STiqkHYw7Ee7iT9HidvbVk3c",
  "key25": "3xff2k8CUJCYrvD3QjDp2msprzQ3qy4VkCaQVqKhfjPsabPXuTGwYz6ETXEg2UgqfhaH8jjSA8hjuXY5MAK9dBoV",
  "key26": "DbGzbxTozLA5hKba9yi7JVsN4qWaYqbtAQBkyPJkkxEXMV6kPdsT7FKqcsTbwa3qocumAt9grSMeUhW4LWkT4K7",
  "key27": "623VuvdEtZ55K8dMffwMbbt4kW1jkG3D8oRr99XBQpZao5Aqz8bQkG6y6s6TJdqr79PN5HJjU1xyXbrR8Gjo3r6s",
  "key28": "32CdJbJwZDG2ELJFMh79eXSxgxVjC2A3tD21i5tuBNTR32UKbV6z722zMRSUjPBC9EQBwVR34wjmgen6NKZ7KHMn",
  "key29": "4WaAJ3p4yifbZQsTxKiseCePqJGFRVeTdAWdorf1c3mgbN4po2Y2NfvSDQnaceRr1KjuKy8y3vdZz8DuwqpZwRuk",
  "key30": "46k8Gdg5agPgdd8NMxpBMqzLcpK7bpxHwEmnhe9kUm7fFmtrikcbxpTcfqtyoaCsSbp8oYxnAxWEyuVcG319jKs1",
  "key31": "3DVYxFgAaiNU6fP325A2Uo8jGKruZPDVymkrPLcgR79h2vBuZ2K2cDpcQZBFXSTMrEsCUVyzUdR61NEKxgS6DEke",
  "key32": "433gjTtrrkp73yv9j8ZCn9WHDNcGsFnh9NcquCQpvxjBtQE1GqvUXbFrMNgHbu26yF3VDXbivsomxUiQqaxAj3tp",
  "key33": "5u5xf5zp4Jf8MEwwa2Qojc5WuRu3ArLCqQKDhsb21jjjW252DyFRmfsytpNc71cmPMEmjc7a2JqeYG28ZHamjTQn",
  "key34": "2axuAa7vDpAKbRCS7U4jVA9oYFctSgkgM34GxcngkUUq5yqrrMRgFpkqRa7m7r9bahcrHuhyKwNUZz7bWmJzzURw",
  "key35": "sATE52zJCgYzz6mHjfdhTtHWB6g9X58eV8iGQovGWcny7V5RDNXTBdukJwuMD9peKSyThwirGSFYCvbLgGupbTn",
  "key36": "55Ut1gX52ntbeXbaPNEsRbLnWgJh236RvXZ3rpasa68WKfkiizNF799jUiDugyBFTfJdQZNUjTUq8S5RM1bVUAVW",
  "key37": "3XeYYXfQGhqTPajxp57chibz1AdFccKaYbabtAJmqbJ5sVxhtbcXaZfkBVQDmK4D2defw2eszvEwpzxzqTDLv1Sw",
  "key38": "4MWvnoTGCNzec8auDDbtTCMAokKQMp9YMzdbRYwbY75npmgnxC6RTyt2kVYaFsLvZs7MRCaHqBCLvwREjSdQCvtX",
  "key39": "5QtRWakPCX4YcuUzkDyPQPBpfTSwbNNi6AzcwEKhv8YVwQwJ8Ew6nGcusycAkWT2XgrnsawKNmtuKbZqD9dsbKht",
  "key40": "2jeitgNSgt6rtPUaDj6Ft5ijQcZWsXqMGcJjCUvzdC3ZoveKKkmsXsbCVqKPe22U4MvfTvw4AkTBeiJLQmEaQLAM",
  "key41": "2rWix7S8kvr9eLytfH1JTT1hSx46CefpjFSsC78vL6WLJSLXkLKgehPtTcNPAUU7HGbkV7HGvxVqPF4xy87JS92S",
  "key42": "i1Z3VB6Nf6Apf8kbKdWaVABcFPyjGH54ybaUUFYWEd3R3pxSrYogkN2LwhMrtJv8mJswxLWu7Ap66mPKbnSriUp",
  "key43": "5N5LevRRuzgGEJZisHQ7mJ87iRxbco3quH8kEvDLuFNFcntgTzQhdgekgNsJAoH6C836iztzScVKF2KoQUTTB27f",
  "key44": "4Pjkuai6pSWCkXFmMstNtnxJdzKdkT1sah9wBgjU3XZ2iRzUDnUpY8Kd8eS9WUocXzFz1qVCQHgZyRr1gUnokpJg",
  "key45": "2dtbdPfL9e9npQS1PwbKcAD8MZiDVY35F4kgH61XeECtBUBh3DfkKEh7RNnxvSFZgLRiEGg7BX4Vo3Kua3Ttquid",
  "key46": "36gC8617xSHoTrzxcyDB2oEjGvDT9iS8PcJjpvTBm2GdVPMYMmcX3QyD5R5cyN5azroRftzp71WUNcxHx48ov3LB",
  "key47": "dpqWBwfYjiuhDfg8SHFAbXazDRqYEUabrCSQEZZzZb3RDeuaW6ADmNP6aUtQ2kLpPYJ5Jfnnwx6bqcBf1kdPYHQ",
  "key48": "AnkQxohLwHxtPpyZUzY7etKAL9bgrMwwhrwjXqJWXpuqBXQVgwqbXpdNiDpdYCmLZXWm6Sfwmb28UZgh35DVA9z",
  "key49": "4H1V2AiuhFtsu1Sjh5EkGFEd6sZSZ2bqjjjJgRrMsfYGqYbqf4Jb4mwtn4jn7hWgMnsNVQFyMXdTLD8Nx3ZSQ5j8"
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
