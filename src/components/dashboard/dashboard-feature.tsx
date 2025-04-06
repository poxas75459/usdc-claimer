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
    "3Cfh7MWqyypGgyytjmgKWCfoD3h4SgrPYMpWMCH7yRSvwxtwzUFJ57qpzBa3bW8LWHbNAZ1AfDQtoUZ4HJCYCqZG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5fBE6QaYHEeTNePsUYTD2aUfgvevGS4qoQ8nXhxW4P3S6fMyy68ZEw8XqQy9omtRhhXfxcDQH9VpSeYr9ckCrDgU",
  "key1": "GAwJeydgRfDBNyrxU3Pwtzp9gTjcm9f52ApkPfL8iQR9TejRqDXUc7k8VKDdFxcbdK6QUKzX8KjZRPSzmCA6SJu",
  "key2": "YDA565C3qGruQoDDSoxSxxPJT6ZnvmiVWUsrQ8dtqATkru4ZLGkfM9dLn4G99aTm3pFKnzYBPyon5FUsjFnkbs2",
  "key3": "4XwPa3pDfZBxAeLV52XgowFb3eFh3qP1oPNnPXwvAPfaUEZrRyT4bgHbh4cFk5ZNA8CA65KcXp49DuZJpA8AzV2D",
  "key4": "28vuYv1X3yExtMJkU4dPiQq3N4qKHkgLrX5YUREAenu5or2dgG8d4hvQ9FkhycU8qe1ukc23NVjfNtvTHQd4w2xz",
  "key5": "3uUR2hY8QyXsNnYYMqdJzFvXnWiCDsD19YkgCDXpwEMn9Uk4Vo4FRJAG5qjm1CV8gxTNfEQbxxYXbwpUhFS6tGfo",
  "key6": "2nngLwbcwnHYvjjPrS6XefcRvSsR8svfnVB1fMGDBnw8KwqHRgf7x2VYEVEz5H3xLJ6WgAgxPQCWAFhCJvf4Jsrt",
  "key7": "2KM8aoCKfmBe3LJ4GjB4az54CHc5VPTgbcdgtDpAWjfrHmFDP66hjNoB3cpZqNKkrywDYXFfRCnMNNivnor9jkEZ",
  "key8": "2U3NnzTwhU3FMk8yaPncoYidMtye3BxDrPmSbUGB1jDxriWn5KiUG47mdZ55RQ2kobuX5TRXBiC245zWo1CcUjUM",
  "key9": "g21S3DNDLe9rJjdvaKX7yqF5JVuuYSZyAxpChcabt4gB7EjzfdT6xvRTQLtjcXa6cVbWnQd9mpK9kTZTHebhU5y",
  "key10": "ibJFREJRRfkpoe59meGhPr1K92VkE2ChLdopoXUBFcoWre3usKhuNmtjCtPAsoJU6BcnzYcMGvGmv2vXSmu91sa",
  "key11": "5gKGTJwNPhUmU6ubppTqVKKTcXmPYWxdtKRxY2Hb4qucsDpc9uP8XX18fzTspzonnbEXKYXEgn9csDR4T16WF3DT",
  "key12": "36jfkaJXr7AyZY8eWgfXgDq6fQ1p4e2j6JSATB9MeRpZy9HNzfT8HGTM5XsnwUrTx3mMoYycBw8TD2wDd11owoFm",
  "key13": "3pSVR8EyknBYf3KXN2nCrm9SdDPnN89SWZTZhouvbH6nTCjRTV89uJVy7yUd21BhguGmzZvmwm1i14n4ZBkSimKK",
  "key14": "26LTUEopkSbLCfNL9XDL3KsJp16PsTPcfAddBmBjjGTPSkrZeW4d7yydQRQjjfr5fEQuzANKzR8AetiuPmHPYbdW",
  "key15": "g4FXhm7UCaNhK5RsWSVAu7Lisi777jrn6qe37iWDhZLyWU1zx8X48wwxwh5wbdkzRna7PeKeJhfh2Xx7eVgTYZ1",
  "key16": "3uz3QRhX168sZHNJYVoPjeuKwee8B1kyPSqi85JsAzVk7sqPU1RSovQ7QBLan9nh2JSfFgSve28ztSCQtq7LhpnA",
  "key17": "5n4iRZEVtbL2TZxybRwpxv5JHzowic3jQK6s1HLTW1DgJ4T8XwArbLCBwuQizUj1q3CdtvoWGhsTjuPVNMFFYxSM",
  "key18": "3nYdWH63HE49vctDyG6p9nEHHmJAPKuGbxWaFyFSbWNvNXHxMTXF2b9KMaxcS1bYZHVFkecxSmG2uDVMVK3CtykJ",
  "key19": "3z5opfTaP1Xt67VmxM7vJr1q3g1EgAW4tjkBsgeBNfeMv7ZZYXkxFXie5wAKvnsrVABzikfNEWDy7v6wMdhd179",
  "key20": "5BTardkkkmAhtGx1tCaJp8GJ1vNb8LDW3NaqqaJV9XvW5kgcxV636ozp4zAJeAjwUuYbZBF1xFooQsnEsYwgdVu8",
  "key21": "3hyMALy48SoZ8nTBoHxg39JNea6iD1V9ojDMzTHQrqfCruieCgVoAGCmkJVe6wkYHqxp81AficWJwNCcVACNVcWB",
  "key22": "5Lau4nCJsHwtpVe9w4LW8tXVXdmD7MsqJN8CmKG3qkXv7GCx9t57ZPbm6rpmDVmR5ZvvAAPSJ58vR7gvq6gudaRg",
  "key23": "4r5aZ6Yujkv4ETkUxJjZy9f1BHNStKbHkeoaj17hoGQmz9w2VztJrrj7Q2gsX6nYu7Dr3aWvFycBBKeoBtjiGuV1",
  "key24": "4tXR4ifEjFAKmHmrezLScPh2BQBWb8udVnjk7Uc5XCxaGgnm7wkzk4zLcFTrqqoSR6y9NUv4QVJ1rFrsxruMfgey",
  "key25": "4fBYyeUj9WaUJBWFR9doPsoc9pQVCvwVHjJi1qMSUrJZ2ZDxsfzhoL6GZC4DzeCqoewwoZsAPWvUqmBpwJaXAbg2",
  "key26": "4gpqbApJnGi7BcAXxadZSNQTG5di2M9uAZq3FYVeL6XXbRhSvfpsXftS2YNGBRfzj9tWAio4aU1J7Y7Aim9vLQeH",
  "key27": "3it11oe8LpFyR82xD6fCfNXT7B5VYxCXTLLVXygjLbyeFgQAn9vKFsg77BZHMTQnPS3GmeDQ5hr88qvhQmSoaBoV",
  "key28": "5BR5TvM2F8H18BQAFZuJWM2gs7CYzUDGSc3EU1srmGUw14BRK2ZQ6AUyodh1JKKhJYowRUfcyj8GxCXsuCRgLgdb",
  "key29": "CRqGKQtWx6uEtWEoMv5fsJiLoPRyk5JNGgdkhd29iDLUtwmonpkNUjSwwBqRVbFJ4w1bq4Ua7H6KMA4h9MDg76m",
  "key30": "PXsYAcv8bbZFG4op9utgbtXhukz4iEPAErGFazwmrHg5rFLqt93ZF15v4sfdabn6xQWcTMZj8KN2yrJtaMEsGQj",
  "key31": "27sbV2DPpXdP8FUj5nbGSF9EibF1MBRrshd12zVw1s4osBMPRXbsVT1vLDnyJ5pJFJmgmtuTrhB2c4hNuzesNLzM",
  "key32": "3PhoKTZB3SanZMbLLaYxLFpBSt44314zwZXsAzdSZDhDBHKU16vVcM3WAahHqMbAmPFg8ipqAc3GgpT1wMWSYtLu",
  "key33": "4vny4cTKRrtNXXsZquAB1ZB4ovQ2aK5v8mgzM46BF1fyP6Mb7nFhgsw1mWp8d2wxjHBwZbXx36BDL5tHg5hwqRat",
  "key34": "2Wg2QNZ8PyuwibrdtSQzQruPP2fWpb2DC6UPpfSP5powXonzkhxdcC9zFo9Sj3TecRPeaA9sq2Hhb5n9U1VgLDSE",
  "key35": "36nDAdVd2WshCHecvK8WGFti2MGGFriYAauPz8thfYGFpT6qpLEu74MgYUNFz1jPcg7oEoA77j7ckN8596XvHkYG",
  "key36": "2JAfr9xR3EjdkwzWmxzCXsEjkUb2HoejWjbTj4MTUCY5gkyeRBCroUzizs4FBDV1SsWJdhxR9YkJgBSgwP484v8D",
  "key37": "5j31hJeT3TqZsvmPjaQpkCnefkCAmfnU62D2bi8yzjDkSvHACpFTVDwSikMsA4Rhap9chRs8YTMDfghhAWo3HyGB",
  "key38": "2hXL4YmJH8RCzyERhkUemwroaW8JE6s1F9DyVMiKerrj7HkcGu7GB1DjcXoKxFqfr2fmuuWaFzAvKiC9cjEXfjdZ",
  "key39": "3UEdk6GEZbyBjLxEXEw7D7fAv5MZs6H1CfgZtnbowG2zzYes7kXnAFXbRubncSr2shzoX6cAHvhSFmSnwtq8rNaJ",
  "key40": "3AZWRozJPakHCj8WtFowsSWF2FPkSGyyvtBPkBtiyQEhkK76Xy6dGk8w8ZARiMJBSWjzKYQLvrczJDMpsufB2t2F",
  "key41": "2QmZtWDwavSUBiqVWSVcX9okZY1Wwbt62aZYtgcoHajeQ1hNXV8qZx5BZZAEyK7pau8kb8n6sdv2gggtcS7MgvFL",
  "key42": "4Hd8HseKe1Zuhizqp1KyfatWhA2V2b6e9B6NuCvQ62GSmQfk26aXR8rE6xwD91suLTimvHiaYQmBjq4Zz3Pvozga",
  "key43": "7YFP2uCAUQiCMKf6Srm9idPrhGbhXLvoSShuubhz55K16KoZw5xzc3CYgLf7pWsq4FSmDaXNUmKDfrDDCvnYNXF"
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
