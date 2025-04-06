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
    "3jBEwqHFsNiVRwSvzsCJD8knxD19LCSpAAvBLWbmP41JnMsow8iUw3d7CqjxvoEcHvYXDVTwwfeTgLFfUCM6GnFJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52wEY9kzm13XAeaoVbY1saYriSGCrX1cDmEDNK3NiY8FPZuivEbREF5tFnxNDv2c3rFhRf5ZPdbZxhbGqLCQE95j",
  "key1": "5FTarM8NinJGdYKmz5Vx6v3rnv8pQHokpLU5gsLwKZKTueNsipdiCQwsjTW12gDrz8weMTVgdh4XtmAFPdxzuhmr",
  "key2": "5o18rr4e5C7Y8JnsiryaTCqYs2KvxJphZdPh5ZyyZQaDofHQUMYtgpjjs588pCLeTmsH7xnAFhCT4yR2yM613oz9",
  "key3": "4ETqDcmAaA3zFKdJB77T8Wh3KkK6bJ2F2wfm7qXP9zanmXrewoKNc5eNdzmDZSHEH8ccLF5Qj216ee6pg6tvs6yE",
  "key4": "63ZkRhnbY5UXVQhioFjAbA1jukJE85KW5EfZUrViUU7MrqeoxoLUHy9LGb8o4CAzhcPb64nZxFc8KUWDdwoP3HX7",
  "key5": "2RxnEaEdiEeNTMoanSpduHSk51j7VwapcCL1EckHvnXt1Uc9rmmFyzcTtu1pJqsmxpNBAarhVMnqqAHKEiSeKvXE",
  "key6": "sdbXzq3FeBvv7yEYUPGyHmuDX3jZipWrDcdsPna9PzV7kCCCy1iEUQc8tHWoYj2b8RDke8cdNF6x9XUqRBabPqG",
  "key7": "5ei4iwQY7qAKnKa6KZsJqCeVNAaemFNPnDmHAN7WDeVN79tyYfhLshvKhjk2qXYbGXMTgYbsJnDMaaizwjgLsQrr",
  "key8": "22vTHZ7aLjuzkQB52BixDdr74rrTnU3vTpss2mpnXFPuf76majeayLNhPFmhsubZo6jN7zj747iu8aUXFGvQhp2M",
  "key9": "4to28bheR2DMyhMacDEMhdpVsqFh8NmougaL6rrSaZY1sbycBWYxWGfBYWk1eeWpAemofN3Yt3qRw21vpALPHeWX",
  "key10": "4MWCFwxMbMC5bvpB3ZWVWvvsJupTgRrQzwkuds2QEQwUSurcgjgv3zo7hkRVDBzToVpqCQrTBA8RpBvVZgZXtEoV",
  "key11": "2HDKjRsPXeZXYTHya4N3SSyBaDPkv3Pz2akEM5JJYd3n4HvmPXtXfYnVBpTHHdZM4xM91TEDjLkCsBFnnix9GrBd",
  "key12": "hJeKW43RbFpGNPNzv9sFPuyxBPRJW1yBU4ZxgPU7LeYFTtB6ZqzKKe3mg3hEXfJBVgSrr6iwPej5LrsPoD2y7yj",
  "key13": "2PgkVs11FXGsUSx8GVN1gsNH5pSVF45evSEgfoPaV1sCCpPHUw7sKLZH6yzyJBm1TPbbSGsEBe9GmMSaLLQi1nXs",
  "key14": "2Ed4RXesfCHqRUt2ngd8hVjRzE8wmL9rAbQ4YZfRWuaSXRGoM7MipfUp6BLAHwJ3XqE3YQepbi83UyhSASVCqnXK",
  "key15": "679aA1A7M8SohBTPfjkgpfDhX6H663BrRi1Z7qymuPVJRnzs3XJ287uJC9JYX5dPYbCuiDjVCakmdhVmHj1Mik1U",
  "key16": "uEiQDHudAUZvfjJRP2GVm9ZpVWE6PrTu8Vjycr5DBqTs6tLJVPRjQzjbhC1ozgH1YEf4oXvwFQJMGQtzagp3opT",
  "key17": "4goCn2vi5euwfGDGD5B4KiXiUcpz9fMBA5UM5wiysXP4uVMJCUZpnUciMrunMpddK4fj6sPfbWPaNvSH9WN2a1L7",
  "key18": "5bubdRm592Gbtxh3UxJpjQZszHPkwQnafiRHFb8zEotR3YXK8peysqvCVWZK5N14NVhEquHV1Rzby7ojF3kw1rap",
  "key19": "2boCu6xvEkeSx38wc5AcBK1fYBfgg6kT1khMLnRpem2JwybCegCuREc92rUpipiajAf2FTuvdBehrzP8pmufGNYi",
  "key20": "5nFbHNbPmVK2h8BKsenWmUnqicoxhCRDaf5hNF8aqHjoatp2SUJaP44gwXoWSohtUbRkbYMnUgooa4kCujYYkwzD",
  "key21": "35GfLUZKX1f5Z2BfA4Z72VzcwdSvcyYKsqbjuTnmPFF15p8pebCisiNkerpb99ZHFSKPtu8hQHPx9grMZD3PgUAb",
  "key22": "4PKfM4AoU23KnpbQg4XCRA8u9EEQQ5UePqZxWAw4cRfHzA5xQdGAUdS4DdEeK77UeJKcpqrPcMeozcwXKJfNu6i7",
  "key23": "2BpTjFjMzsKyxyZ8CiNcMSBUEqpUd5eWBHdDUaLB6YkJ2P243WCxAXLDKu1UE9eD6oDqqM7fGqK1sKYXBygtJQ8B",
  "key24": "27sbSmTRkv8AaA6nsEbW2Hz1jDECUmZZepjWgfQ5xS5h4Y1W6zEuWJ2JSEBBKJMeSKr37sjUjuEeiviAKebrrzHR",
  "key25": "3GXUTGWdKHLydGFMvjuGb4oQ7vYmRWzMuVKzB9hTfciZrxnboXkD5oBwMmb7j7wRioDLnicp5TqUJUAtPjpTe9GN",
  "key26": "3yqkK9kPk3eA3eR6wSmt3EPZBpLBDi6BvPNPDZ26GuzjgPn9hAd8sh3XiRqpH15AgLhyVP67UEtsXMf5ki49qow2",
  "key27": "3FhPtk3efXqUDo6AjGBr4nNK5sSvhG5GnMSRJdAK4HqvsVrNV4jEiQvkGfppRSMxNmP2kc8RdgD4CzJvKPqnd11S",
  "key28": "2hCJQKgDvTN8gkGjSxvy68oDiFCJtcw8YACkoiTdshWW4os3uEWPMKSzTbYrHU4XxB9EPZyzpQo7ysNsX1paN8PQ",
  "key29": "2tsZBq97TdjEcbdaSE8LmnBRp6piZ16fp3yvvAtQk3JRagtZikDDPnbhYKeT6WHMksiomdjHkjS9CZkwdFdtNqMg",
  "key30": "5JnCmJegWV7AaTPBA6ikbnLqunyAZBenBTQ1QrwA4MNa2gY1rJu2Fygxgs43jHH8ZVCk576kxGC4W4mz3dGargqH",
  "key31": "4cSTPbeUXLnQEh8qkHWDHnsh5NFHpSm6tMps8XEz3ECcqs3Yv9dZXvJUFqpyyD4mMBrfiPD1oGkA13FC2dFvWZsJ",
  "key32": "2BSVFWy1qJjKbqeeAbCemkKEpJoXZbXzFC8qNSrQtrrzpZY4mTHapPPhkiVBrh1UKgKNq7YT3Xws1oAaW9q57jfT",
  "key33": "2USFncx3ddfBGfW57jwwjskW8M1EQcS1b2ejCtXMRKirBTxfUM21MFjtGLjnYnCwiSbeRB31sjWwDwsLHuyJbJDJ",
  "key34": "3CEykARkkvicE4C296vqV8qjqLu6tD8X7hjjQkxNQMPbkGwaVKHX6Mh4Q2oBDYVbuKJGnDtPPPzjD7eppCFJUMjd",
  "key35": "2nYaE7kZbiNXYM8pLbRSuNZsaz9qNHWKauhpn4utzNbYLXs8rK9qiYMkQRVuvuHSviL9Jk2UTCiRrc4XKVy6h5xn"
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
