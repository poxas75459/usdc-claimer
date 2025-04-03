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
    "ywyugToBXrd3217wGtUGgnUTwo9EmA14FwsNbBCwH32b7AzZQpmPDeyRPHFcyGxCov5pmrByDf9rHSxESz88rns"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5frm9E8GNzHadNgJBTYF93ssiLNnVsK7Nm43qH2TLw35xKh4gGjs23kwukJHM46wAJdjYmTv93rgoCYfxRaCeLjJ",
  "key1": "5ZQAXsUTUxCb9tJLTj2duWkJAUTtW7gPh9eW8m5BG28RgrktW3uMwiXPDkN1q4mCh85YmjK6gxJ9BpZixUCeUxSL",
  "key2": "5UVYzwb6xCG1WBqPXdjUTkV1gG49mV4EMDCTA5bKM7tavif4eB61C9wjduyUxYvg2MfQgtySH19wcBw7HdXCcx3V",
  "key3": "2tAuizrauFax4b3BGvv8SVM4Gf9xaQ3qW1tMMDYZLUeKqnWXAJrxdTaCQvnFeut1jdL8wUAFNi67kcjZGVeoDjA2",
  "key4": "4JfJR5aYm7htUaJZ4XLEf8EsW5L7zG7x4a7vVRs1GTKjdoMjmbf1xxWp5C29PdTM9wr713dPSfTtKHXcNcPJCiG9",
  "key5": "3Wo8oGztC1AA1tMGXEMaewWnye4Kq4B6k8akrm1yYCqWHcAVawwQeWLi9G2Tg7wYbcpuizVrC5gsjZLYmLaca5gE",
  "key6": "5J7gBKeaZbcjAQHxmyUwaqwfsXkAUpVj4fiuLj2ps8PjwpjFnJR3j7kr4UZk85cymjYeGUCTfBmV2VsHHJJKW76Q",
  "key7": "5VmtMLyXdjjpvcrwqbzFcRwA896hDfBRQSaKhtKZ8d59eNVNY3dyNdQFtarubytT6kW1xcTBAzr1eH4o23fB3pAa",
  "key8": "3SvPGErmp32GUTtLewfiw22ZWArbVNKHJBP9uGnaRX6kEq4U8rspsQrenkaqCGKk1M6RMNTLoe8szXJH1yDtbHtz",
  "key9": "31SNsWKoTiaeMv4MEAyMeb2ZJCrUbGUi6soMMxuSJRifGWaS8zBJMhvhWhcmjNyqyMQY5eaHWjixKjRRHajwLAQu",
  "key10": "Mcfqj5REf8Bx6ZtwCGCkvTqvpjCBSVSDh4Q8dxrr1xqJzFdf8XfDTkPLKppr9JRjMJgxDkUQWWviHXnLXk53TLD",
  "key11": "4X4ofs7mUUTqE6apjTiDKaXUV3DqHFGgEfDEiQjwRugTNkgroGGoFMJd4twsxWYYTKnix6vaiyLmqfqLk8G5Rktv",
  "key12": "4nUKpmhzMug4dnZzj2TFdcG4gSqqmUT4kPmeCWfRcZqLtbwMyhm7w1z3EYk6cyd8iqbPmNN6K6dnBGTJjFs4R9RT",
  "key13": "5xJBEeVzRHc8pRL74kSv5tMWYdzDNyNsc152U2zUJxMFLXJFQxU7zGEYZ29YJZjKAAEf5hGKD6cGUdajFvXfeANf",
  "key14": "2DHdkiQdAUoEZvJ2sD41fNJ1AipRqWvJXpY9sDRp2VuGgyFLwL5vi47h2WijmB9EqAzQn2LiSGJHCDFscjy6eiBG",
  "key15": "4ganVh15G8ATxuEgizmGBtT3sJ11utVKr7DgFSEP12Q463uPzPfThb3yQ3tFBohFEcN8pf2XLWMMfGVicbAwvF8R",
  "key16": "5TDHXsYjw7vrggBJNHF6LHGhY2HzvjaQyLPK78bcQ8SD2FAzhkZTjsPFHzmQsWgMgZCPLbdk8bJ9D85LjUFz7oy8",
  "key17": "2eFwq6Uh5vSYc4AuniRz2TZxKxMBJg3rw64cevTjgqcDxVPNvacsGZu5j8Jopng7nT98ddn1JCwHh9fm5yuZSBXa",
  "key18": "5x4PB6RE3fvMUG6HqhNCsNVYwKD9Q8dSozh8v8m13EPsWoQQMomZUysPLLYJqtNEhs5U7tnX5kL7c8Futn63SPcN",
  "key19": "5DXb8MHSZqaccRjTWgKVTfeZUhoVb6Thms2N1ehW1RtzBAoh228sjYT9cH9ZwXp6c1J1oSwftXjniEpebQQAFJhg",
  "key20": "2mzAGG9S76SCfesd3smoNjmhKHM7Hfrmy3QXF6kRyW8oaTosBkXpBp29QZDv7pKzsno626ZCtakHFdwyhp8LhkcH",
  "key21": "5o9oGkkE16GuW2PHUTtopAQMhkPoRrFYM43PAkznh2939HW3rpGLkmGjGtRRxQLziQ9Ygm9BW525UDVutxwxuGiz",
  "key22": "5MBRTfhA6ciWPMT4xnfrZ6Eq8DCrbigXFna1mhnuGuraUw4kJ1YU6445rXg3ECusi1K7pfj4mHcfW5aQzvHBiier",
  "key23": "2jmkK4J27kXwmYXNMugPhGiTy2g4dUtE7dLy9Sd9WbJhG285bkpuXd2nhZ7AWayJdTzpPzLgAwvamxBjNjxAib6n",
  "key24": "4sz9j62hcZtKUPdirvEeRB6HCSFtCmmKbmvu9LSm2D6gDk4ZznwRWkCHCj3ffnE8pHixzainNC3LaR4DoCAU95Lg",
  "key25": "4Rcu1vUWy9cvKLtVj899ZKwkEuxSoSgpk8Gkya6xhW8VpX3VmoSUCHSbc3nfjeN3Spxn6uFryuJz7zU1pKUz8kM2",
  "key26": "2g7ohVkVYQ5cDvoHtfc1kbBh7AynV82Umz2kGwhQR6HQwbksJE9oKQTAr64ZdJnJzDguNHfvQss4VLV7JnGFxnJ4",
  "key27": "c9hdSsFuZvAAwrRswNV4LaBRMEdwx8G3K9VfvxdoG4sEdrZTMrKvZDc1WJDacS6xXp2pECqwUi3L3K5Jnpn6WH9",
  "key28": "3nJwMMQbsn5yu9JVkEkq3eqzdSJ1duzZBWSNxZZm67RSJSY3jpwewbwpCYRAaXU7bJe5QT4r5faco5FFhJ4cjYrA",
  "key29": "3Vr2dFSAdLrt7dj8BJuXcQPqYtt3mioG3D8NiPF12ctax1MmoN9kLZyuSxojraEdnxVNf7jfFnZNXQBC6VqK376Q",
  "key30": "L33fERfpQvESwXWvvByrXKNjFVKEQdvHXkWvZf6xYjFSP5B6pWgE2G5i71C31SRPqGsrPq2muXKsjAcZcuj1G83",
  "key31": "eb61SWdZgoj4CpzfYgfk3uAxztPNxwatVtzSqxtQr595eaCWX9GosekijcXoWUZHR58ZAduXxBoM1h4MMDsYHyZ",
  "key32": "4VTn4aKikU7R1n5zabsQ1pW85ZjBveMjxibRQgPdRpKucQxo7ZGipm54CXV1JuHgLZgChqHSHb3YWEmdqV8DRfMS",
  "key33": "rjK9MmBZrjY3j3ee4NJt7E5vYNT3dENLgzsxeB54imivaupYTGHWW5mQ4f99CGApcfmv1UFSHi2UjVCip51fqbW",
  "key34": "48CvVGXDDt1n1niry2kdaM7UHcSpwhmYaY7yMYB8YJ5pDExEKVttu2mBDop7LeVSNPkDi29E5rHMck2AKKe47JF6",
  "key35": "5u6BhqV3fhYzdS4VNnHg597mtVTPuCjRYztpKj5AA5kkKs4HPGvp1sbyQExnrAGSmajHhwGKpNpGFe5gmUCJyzsF",
  "key36": "3yGr6cXdVTAhMNjSYZWTem6miAg1FZSmkRWtiUjzH7uYUddXeJLCZT9gq2xmvcBki3rxuNME9Mfp5rghuaiWzbAi",
  "key37": "62h3D7giNT991EU5nh9QwoCbptgUU9tQXzXgfAjPS8fTmTTBEv2S2SXkCaNxEKTUAJ5AVYpXCW8Sq53dh5rYqtEv",
  "key38": "28XQuDtmtsw4CeNQXTkt7ktPtKRaU4neqyqGbk951TCEKSKFggHqq5kgdGE8zHQbV5SBACQnBsngjBNLyqvwrE2Q",
  "key39": "3SHwZtURAAGcsdT762agRQJXkJsGm3hRFYQPA2fxrUH5FC7bZEvEGQr6hq2HcKqXWLBbJaJUmDMzRMhat88mwnky",
  "key40": "25FkmLYsRmEkgzo2xfikGTJwMRvcvKbnGUhJJPd5aMoeP3fpqyeRc29LjKBiRibCrMipX6qQk9LNGceeF9fXxHUh",
  "key41": "4z3Rv5LuHUJhutkf5EnVDQmmqmfaptsW4eqCXF4GG1yLNz8PDXMbttuUmZcTLEiXN2eAHD6cnqvHomTfti2z8vdz",
  "key42": "126k17gWGLPyS7DxZC4R3fRAZQVyoezGFEy9pbhzmDsdi46MMJmiwqZXPhGuDbHvcPoxnqvJejWp6eXjPQoavcgi"
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
