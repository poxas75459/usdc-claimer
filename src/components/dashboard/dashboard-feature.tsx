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
    "7RJHrH5jJebVddPbps2T7mK8SqbWrKtKh4GjFmY7mbktvJrHAQJ8gvVNMRabV5eRKYwJpLQjUStaX3XRTQDVxnK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4QX7A21vRDDFWeWNZ1wHMGDxT4k4kiRaPtSk4fbiFxkcdmywaR1ra3Y4ZjtcWJ4cejBSaUZQ2adbksE6XXz5i8fU",
  "key1": "gUhysYYMoGcRLC6oSdC7Vc8n2wHh5u27ik9yQdmPNqpkvMGAtEvT8itBKUdQuWaBsaTR1rDZQmCGYBMVogW4AJf",
  "key2": "WaaBUmgvn51Lyd4vdcYGwc3KcMwfZmcD4ju2LW1To6FNaRJ2xYjZRaB9nTEuEjEYMz8j2VBzEH5PrdZYRarujHb",
  "key3": "2ffRCFhNscH6BPCgGA1DuviUyE6C1zPrWdzjLFbEwXnXoUsYrH273e546sL3uVC1asTNiYsorEa2jntydTYraPzz",
  "key4": "5vYXhqumDZXfrV9t2SbkiGXGguSQJkFfqAuuXu88W9yac3KNTmN7oKHn53phQoMS6m39NWjQd3cxjXKYD3eYjFbP",
  "key5": "5KahGk1J3DybgBiETqntgYYBZ8zS2kZvWSzwxKW8eTYP4kpLomG56AapxquuFHFXcToKwobZaN8R1ZrMqqhL9tba",
  "key6": "4dAC3jxbf4R7o3H5wgDXJRhPAjAucr9FoKfE87PHYQzVxaGzeY9B4pxnSez4CUyhqEP61FTUuQEX7gvs1bXoDDFv",
  "key7": "5thNDmLAMzJNmGQ5nBbpUrQ8dtGWdJ1iqZBd2pXHbDjNqggwj6uK3gFNpfDzzKhvhuRdiby8ioUKzL2rC7324C1n",
  "key8": "3krB5i3wvg1ufuuBEwWqhNg5kPz1mezC2dzh1T1f5HpRiD5xkNSyXdAnEePuHEtWPoFwgSrTp9MYRwAsiuzCtbiA",
  "key9": "4JESHyxP3e3b54DnbtfjfFTksPwwZzAuQQy9WFVX7qcphiSdv2JXtyhYrNV7Wj1ChvGZf5mBJjtRE66qLzvdbWun",
  "key10": "5g3p5iGjFeYiLWx2mvgVuQTdnqcmQ1rGMxM2rvvqGWGkvwWcWYbLssWay1XJ3u3KtKJxHB5E73qBcRsqTCPXaLQB",
  "key11": "pfUYbXZaMG4fb5KYTkqfDqC6z9ReTmeYr8KQEKzYFDeaCQ2xyVd1NJf1F9C9BstthAmvYdNtXG2wyqG9nyYRYAe",
  "key12": "533GWJquQ1vTGLUeMATtW7RkggcsWPoA7hgs9aG4PFY3SxizUmNu2DCDfZLZfnqu5HBKVxqixwD2SFwiF85a72tj",
  "key13": "2fYF4YF8QpjovTTz78kpm8WKWA8mZPwkNcYKpsYvQaVs72TsACX2JeR9WnYHRCkrvuR9uWoufJDKM4necFncGeUA",
  "key14": "3b7miyEmBPWV4ht6Vi2mbcER7uHhDsmfVzVrmjERFuv6YJhJmf2yfurL9Gmy9m13CzLFAgsfZhbLjiiLye93fDHd",
  "key15": "3gKf1ZsEhZ8TjV5QqAv3evJp4c3pPiWoobNiUusbX3DaTmYK2yNVzLEmnpzE23BbzEWuHLs8difCaxmxp6nzUf7c",
  "key16": "21SYrfSxELMRGBzgPHPDRsG2193UDhG33NQSgNeJUKJsfDVrCponkoKNMPwYZi7nWePr6gMLwmDegMvBQR5oW96n",
  "key17": "3FiGkZkbmnJVsbv8wbJ6EzBs1rH4MyTzouaU2EQb9Xksjm7gm6H5sAV2GVFDN5ARpqEX8qyboCqF9xuBpxoZ4cda",
  "key18": "5UoTJyviCFeMY1uPGywoV7W4qJLuD6ZyemBT8B7Tz6hH2CcmAnMfCDR7AitAPThaFoRdv5rjksfCVEmiJgEsxzNw",
  "key19": "2kR9D4F58ZkTmBgpmHHJCvEM5ukxVeA3pELQvtFV73KDocqSHKp3UCqcRECrEHpxGBkpt9bFdJWF9bYQfaiHnH8m",
  "key20": "2nP5MyM8TK1yWdU5PK8m6RJA1WYqeUvCg86v4AzEs5G6cyF7cLncLMYR7vP697yWeE4Cd8KTbFNCAk6DCuhY8sCy",
  "key21": "5w8rXNsGw5ULYjP7FCBhQVKZf7c2booY8dYrzZGJj5Dyk7tHrtTxvFXdStQVdxLTNJ9vddwt86HWKmtPc9LZ8uve",
  "key22": "3mimiTnF3h9zMM5wnTUDpApsSxdH1iyBLkEALaFvp1ED7up5ffDHtWWjx86j3HHi47ezFujuBwNX5euMAhZWUtEj",
  "key23": "5ktJXEcFs2DhsJ72rhjVyDmoKRxHsGeGue1eSckSeBVELRUYAAQzMAQZ68TFBUHG9UjWzrKA15HoMZGkmMHV3DuW",
  "key24": "2YB8C29G2UALmdH5bRQ2VhzDmsQYShzaYis3C8Cs1NXXByJMJNVYaTb8HN62MzRfvvgyKYLYPW5QyxJcqDrnHb6D",
  "key25": "4b3V2KFuEkzbwWYgLKRL99dTKwihaTS2DoX3WmWD8Hfyx2xWQxXGi1ojzBG5xHgzmzAyCtkZ3WWFSLqhtjKPrzVJ",
  "key26": "5JwAac7TearvSHYe8JC6xBmD7vm8Y5yAK4hdGA6S9siBB5CfRYsfE53KV3HamTAmjrGhtQKKaHoRRFpNE3HgvYyH",
  "key27": "5Y7dDgvYf3vi3Xos8eSjR6525diSJYAEpMQ8U2ad62A4Y5YSmNiPfN4qhm5yMXQAxr41K4zR8bXvASe9W6WfMEaJ",
  "key28": "5WSe3qRJALqdgDhHFHGsbo8B2X58vuqHe7DvfvGxK21R3xefh6j6UsYEHHH3iXSjmrTuiNnP8ekv2vw8hck8bqiM",
  "key29": "5KtKvKUX2Xdrz7gXaD7oDqW3aptCPnnq4XJLZZ1PghDd9RWWZ43ghcbVBobXzQiVhZMCpV62mgfgcCRAcDBVmgsw",
  "key30": "2c5jzCxe2jQWE85DUos9N1Ux7j7NiKJnKN3B5JimCyotvLVVBrNyXyBtyk2vDAyZ1e2gJcQWGdockzvZiew3174s",
  "key31": "3z7SnkSMPbj9vVqaBgpsrGpoiAvQA3fKuz2PfvNzcu6WkBAxDdAfurfPRrEZ887yQy3cNFWKgzZ7LZtdyrZTvCXL",
  "key32": "5EwuH3fqBXUpjwykbHhkJzGqogzxfCaY9W5kZbBGGdzLWt3GePuSf4NqGveA7Gg39KdAbo4DJ7vpQ3dCVaYa7QW7",
  "key33": "2rutUzhiq1itD5CKbm7fgnfaLThhkwWGGE27xxC58XyU4tvakuUN3PLiE8tcdo6BgxUiUGBLyQoJoGN1f4jniUq7",
  "key34": "7GTfYXcEzNEU9o3Y9qN8Yo6LLaDqj9z7C4AyeFP7JHunzuFJVYMsyLKik8cw3M4utH6a4tF8QNzHREoFrW66T8L",
  "key35": "4mtTY68Ve21hgQzxJg1Xs97FKqY7xDS9qeBHN4Eaay9rvpnG6aknPefsN5HYSvL41ZFfHdLb5FgHni9LmMr7E1Ns",
  "key36": "LmSz1XvUSRrsU4iqb8jEc6aGhQJq53QJzri85XGrKDCoLV2rguo9Rj7PvsWeZ5SLrAy3tvAiiduXtqEUrH4miQR",
  "key37": "3UpSEBs8BAFom76NZdo73oBVopYBsqspbzCvYYhNfhszgcaNqtQWiRNs4FensXAC4mZcPDtUrCabnvMomhMQPk1Z",
  "key38": "6DCq64uLb2uR9FBSppmQabrcQVjCVtPzdUSgdpC8rASP4Q9bZacjtkQDW76d8dkBHY77Fovefqqroi4TVgdpnFm",
  "key39": "3pDen9zLNbBbskrJfz3Fd1TfMZaxBMtoPuLShBMJLq2K9F8xP2unAGe8dUy6xGLFHjQW3Vvpwc3GtPei6z4UKGjr",
  "key40": "5dA8yBUicn8j8xdtWrxtFueWhYjwMJhLtHZLGTywcYRVMVVwzamj2sFhcgCwCdJCcxwdbF8unTiyMcf8uMko8kSX",
  "key41": "4Y2s4v1yeqgYWS3ySg5AZ5inygwstouRXRrZ2szNL9m4egpAVeFibqZTwfxTM3kuCGHpUWWi6QQSH1LxKH4AxkgJ",
  "key42": "5yVrUxrz8sYYEwak3Dcv5WPnbqXyuMLHAej9Rp45YK7a5sPmoisCHxtQ3TqA6ecYu8QLxaV9BR9XDgefzJfqKkHv",
  "key43": "44zeWnGAXvWBmqSZSb33CSeQqXZmNUikyvqJ82WWSpmpWhPJ1SVERKUQYfT3jptrr3sFgxu9gqL4yjSN4VrbzZSE",
  "key44": "3vG3u7oKDo2jhrnYR6fsBEK1VRhY7zfoFaY27xSwAFnogpG2jUSx2hGx6eQo4MKspjFJGLM9ULPWRPEKbo9kzgDo",
  "key45": "3XiSyfT48eqrTU6zJTs2K2jzv57pLpo9zYbzeGRLna82NU4rpV1jtxKg4FK85KAmd3UXsotsWwY84jDPXUv6ZH4k"
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
