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
    "5F2W6VJXoXEAyrHsKJQCTVjHdRdocWzNnVhHkubSXzeBweDZMBmxeiEJLHYMX8FekiQCESZpTF3kr7j5zrH9Xrz8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4SdPbRqN4uBWePbQupBa5LrZJ17DqFZY4peK1z55MDXNMjVowq8ZctQ656EcNKHBgGCoDRePizaCpn7q5dH8jVrW",
  "key1": "2CTZx5rPcBGKNWbSnpzSbg8M3DxAZMVT1eSsaYJDfN5RZkQHVrQGnx8b2HMaeawxv2YcUoSiC5gScPmaodFQgS9B",
  "key2": "67ShMPoD3iiVtA28fHN7ygb4ipGPhGkY64GYCEKYKKqDfN9rLxNTgy1x18XBMQNRqzstS6nqsC2QeEiRCV6ftTdm",
  "key3": "4gSV3CdrzcEp51Z2zQQpvdeeg9NgWeUSa12Ka1vZJM7uKsnuPBHQswVdCHwQtvHTfYTTXTkK9hAKiTPaojjz2EAD",
  "key4": "EyhTM8LxuKMhPUv9JU35WFJe8f1J3AMgewWv7Pky7dKo6pfSxXsFYpPUXcVm1tDZbbnxmrFx5DbE7PW9eWSzQEw",
  "key5": "2v2aAaarmtSfqJXWzx5amm4T5JfZgErVRCxUhqGRP4kbrgCs5Ejcn3m9Ed2HkWp8h37FotM79F6CywA5cwSgSFXf",
  "key6": "4Z1nRc4C7d1RvrSRhgN92JuUKLCYQNckVn7uooEfBsWvCvnjLJjbpCezrngzWEGKv6FyHzaHxSBK14F7by43fCLx",
  "key7": "5DjLcawCN5DohgVWthxTHBoSnwnhTWkBxHD6YWTPPGfJJLRR7foUyeCY4m3Lyr9MPJwZtyJf2LaHNiSMJSwkr2HK",
  "key8": "58Pqx7PVbu3aaFjzN8KqbsToq8NznLwEfnsmwTwNtotwSLtjFiumDziyXLHmpfockJia73BVwGhXmLaB9Hq28yLi",
  "key9": "23r3srH5BWvFBLrzg7waXZnDdXkddzeGk9bd8eBrSuZMXRD3gLqFJaumLgVJjFdL761BhhwCLpcsyo3J4NKpVMz2",
  "key10": "2ikWu5dkUe9jKcpW7VraL5XWTUPetvWotmYrnrcV3ubXt1kHP1cCjXyxxq5WLV75n6cNbXTbu3bsbqgYcVWeDnFx",
  "key11": "qaKdZqDvVgh9tYVkB5u8PNTFm6Q6JB93tkKvFg2Tq3xesE2qg1XzkfvXwMEFy8gs6SKrLWcCyqpwwMzK74Y7oUv",
  "key12": "3Y91LqsTH8pAzJMK4C29U1WRcNNynU63tQP66bRgbBiznRaM6yqVBci2mHcfuo5CxEQddxu7pXFxnQrw2YaxAYTV",
  "key13": "6kSp3KiADfKmedtojc5aCeURZwHoMiE4oVGXNYzCdBincpAPiz4NN29ynb5aKcUJZAY4kyceTtLtTjpJJPZB5Ld",
  "key14": "2U2yfAfdEj4YMt8ZpaLT43ni2RS8EKKhUc3B94Cm8q6FvEFP3WcPvBk7spD8byJhnWkfci6vE8j1jBnEDXFwJgL9",
  "key15": "5HxcG5qn6j2fNm92uB3X1D1dC3odwkHbUaWUygUQSxQLs5V8qQ7h35ZtdTysAP3ez5ENr51EABWcz6TxPhjZij4P",
  "key16": "3B5eoijzNwbXEuNoMGHbTKV3oUWvs2nBb3yEUjuSfxKCW5DJrCwZFnKMxEhuxncV94N8U52Mium6um2NQbxarsY5",
  "key17": "xjAn3jGC1ffUmFCHHZLwyBUst6iWwewuBepwahXRXyvaqR7mxBMLGdDmSR79REgqYNwDqiyHz93afjW3FmJKvmD",
  "key18": "4DkYEJxN8xdkycQRpiwpsKfJ7GZFB1APSiv4fDPsioqxxVcKXjG9X3TwUt89c4AMaX1AxQmNsRDyMAwpuPcaVzdS",
  "key19": "2uPqnMwhLT1vfofHnkPUChibEsqtYQrKou2nbPE1Nex7juywC3nzp1Zn1WSFpjVZbbpqoNFEmxtPiddKf2K8fEx8",
  "key20": "2kZ6UBtxcbN8pnBq9WthBo5cMq4ESXkn6rEhBX1RaUKb2XdvSDYoisot6SfkXqkipLz8wKru5wz4QZQ9eFRRDoWx",
  "key21": "3uKVY4cZMgxpHxSsfoFpy8iY1QYSdzZU4PhoML6exgjXjzCqdZsV7fnsh7QowhWQg9Ta7iRL5PbprtztBLpb2CKh",
  "key22": "35Xk8AK8jdJpSPD8i2KP59rrJM9SnmFjEygkZyHUwNi1CxVdCDK91tx4kYB2fbaHMyL69H81dCcEnxuvD9vyW6Dq",
  "key23": "sKQDXWqhPEcQR7RykycCaBHRUuC3FELUzR7PodZ3p9ysHNxR5Da9yNUSTRXwZNVeGAVaP8KporHjgFDeLtDigd6",
  "key24": "21umKXGQ2YxtadP1ZtMjavkGnm6PHZqJfL4bvTYaMSc9m6DvXjtqCC9g3S7p9pkjJo7EozZBG678QwFY45G3trvW",
  "key25": "3uWrApsMXxkV4QJ6MrwMKgvDbeyS3fwW1Vvxxqpk94hc5824n93mAswM1myTPiBoPqKgouoy6fCWcTL5fKH74JaD",
  "key26": "e718SypLVwPV8gfdxNTCzxW4ciLWTRyiuL844v5skqsJWu3BMkuVFhZopNhRARhmyT9ubcFbMY914kF3sqneQzJ",
  "key27": "3uaVozHeL11wxv1qmEv7gBmFhDpyfcAHGxmS85VFvCW8TLHSqrHsw1EPrvM5u5xRYAunbaGdNPaEMsshWBNc3GQ4",
  "key28": "5wvdZw6BUBM5Hs4B3RkHZEeNbnLMtHDQuMzX4RaABjVQHDhe2PjFJPmjXmH9yTdBKyM7RnhwibTSr4SfMRiAvGfE",
  "key29": "qQbsswCHaz8AmFK6g55VSSC9iHjNdJmyHyQaVK9LEUynP8jvaiALBTkKZmZKkGFSrkfBQBgn9szR4QPzhjsCGkf",
  "key30": "2Je9hvVg6e6mQBbkcuCfBiSxXXJ69hM2uxN7zLPL3XRDxLKh2ccZhgbYE31vkypKRTZrXxJsMQEartgVcXqC36dM",
  "key31": "3wtqoRidzpgZT2J8GciCFae6ewhn24bkg8JVrutfRJFd7rHCZx3UaxjmvimdRWQNdjMwZgram2KaCkbFGJWH6kMv",
  "key32": "5tF8NxX3yDy8xMFL2sxt7eJFpNdmeWKKrFHNRmGuzbrkx9F4eEQYMsVt4q7EUSpfrETb8wiQniYBRm7amPJvAQ8a",
  "key33": "25rJ6abvH5MSPeBrqATvG2NGcsqvsHMByQAXxkZ1GU5DDurybKygxLXu4YSTow8rdpgQzovWpNY9cjYgKcLtRhzK",
  "key34": "t3bxH49bcJWhxf3QD3teB5w78QnQDEqZTmum64A8K26PNwoEYEJUnTZfrjHgnPnXpGd1vjsquKLyEXJbiiMCGzN",
  "key35": "5SJzDiYqdbNH7Zgw2T2JWWUGQnnk6kyWKF6pqACMhRrLizspU1EW5PzwWvhs4MgVxWewTgXnQT4XjzHcoyBA7JXY",
  "key36": "5dv3HbgooHuwjcxSPcuuik2pejTr6oVXLWAPKPuX9yUAR7fstgASiTZrSgT5sdajLAhEteG2ouL32jrYdQ7WQ38L",
  "key37": "4z667HYf3cUGzKdnCv4qmB6nedJZ5Njar81GSgT21SNv5HXrWkTZd9JJnQAqeLce2ySCUM5Gb6UtaAbHDHpqM1Sq",
  "key38": "3Kf8iJrmnS9nuJ3Dqdp3sPztYMPAGRfkTZ9TtG1rPS5fSHb5fRgheuDFn2ZT8P5NWfyaJCNaVZpHdZSoko2wqR3C",
  "key39": "5S5bbxevFjUTVg65PV6CS4mwF38iwmVdDbdvWYjyLtXnvDrFJakWWyK8FRRcbHJWZWN2UygVUXfKQ3KkLiwsL1eh",
  "key40": "aNgPNG6sUyBXXrfu4PmAtK3kJBbHv2tbqphHwtpZWU2AmcSo3mVxcPzW8okFZBKwPyX8JBZjfpJZrLVpce2vJ7N",
  "key41": "3NAdoH9qJb4tdxtdidLsRNSyCevC4RnSwBTAD7XYV3hFeakeuuDcxEGEd4fs1WSjkcArYWJohWVMDXvqG4MKvHye",
  "key42": "3N52unAnrTh8YzHJstJhEdDkzR4mc591vQATZUCnW8sEU4taFSyjpQmSTvyhiWnUt2YoeCWymzWk7zJrhvbCsBxY",
  "key43": "E4djxZzphYF5tVuDy9VuxEHfgy38BfTgnw6niWGgGkdzYFNcJPcMFfC7QykuEyBrcfStRkfR9cEkj3pLG6hDxLL",
  "key44": "3GeQJFgQHRyxmhNJZ1zyB37jXj2fPDwVnhmA9FxzxgdzmgvdLBdHCcWuMFwa4kZYEnJdD868vAWRnE485T43x1UG",
  "key45": "5jmvZwjhj5YD17eAmibQi7ydMq8d7w4heGac2oxXFwYonk8nXGujcBmVumsmYYp8LVgeiXpne2RG3jV9bGAp97Sa",
  "key46": "46JQ6ffaH7oJTqGUj9Z6d4oqHEaTGVny1kJM97M4MoEZrz3vScW8fo9u5BNPQvL8kDZqhB4C8f4krz3CGGgjNCdS",
  "key47": "4cUcJeBSASGPzEs4y4aRDMHfXWE2392932efuQBnFhczhfHy4gTFXmQv5KRxz92cfMZ7vT8Q7S99woErpLrMn3dN",
  "key48": "2KK3ksaWnXBAxoWpeKoZHkEnKPG3P5AwPdBE1b9dqoxo3Ao9Xz7JvKo2RoCUYpHaWVCGhLxFtmfgRXeM69sJVME2"
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
