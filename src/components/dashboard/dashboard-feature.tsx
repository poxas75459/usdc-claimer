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
    "3tkyzcjv3Aa3wTMqDo6vQY2pvqqNxjnGXv512C1yXHAmmfjGmaABqYp9WMKuXTpCrcbfKw69B2uDv9EHJb8dnEFG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fzsKCER5XyJaCieGhWY1HbTUq1J8zN4ALB775A3GNEFR9676tufdbBLDbfEohZ183kyVZRHC3h8WKm6q9nZCxy1",
  "key1": "5p66mcaGSYHZVykG7o7MWsvfRsrBHkiDEXQvTu9Hmx4EudsZPNkXeycWktV6wHm7WGeH48V8CfATEBmZPHjV9xax",
  "key2": "2UNctg6KD3tFXDwhhbP52Pt8FUcVgr7soxn8aqeB6Pw1N6h6F2z1WVcGjXnEJ95dwvi9Vw6oFvm1yD4uukrYsFPe",
  "key3": "mJ8hdo4QhgGvLoEt66CDgQQidPrnVsErxtiq3Xn8uhUmbpe5YmXQ7tVzoy6dgV6CxydD1hEC26czKwZByivMLhZ",
  "key4": "4AKqU14LuCFkKMetVWtGUfGXuFqfVW581Sf964HpDBVzC6eEnPRZYgTv1XN18LKdKRzroa5xamEkjyREkFsKTLNM",
  "key5": "5VxpepeThtwwHBa1EKBxqAEZg4Hdng1UmgM6RNbxojUzcpScfXCr5rDxKdf3THzLVFPxEnaMzb9UC2yuBBPNBG3o",
  "key6": "3zPXKm13jM32TbxaaBTtdAvsYvUv3gbbWJs34dT4UVUD5EfhM3qhUNbfSHYhxeUBRzuG67duDfAUw7dTkQV2PZfc",
  "key7": "55kMbt7RdE5FDVU65GFEu7rnomUd3wRu9g6XSjYmwpANZe2WbbzCkYoEcnVDgcPyJ41BQFGkgSo6aoeHudPpjCNM",
  "key8": "EjMZhU29dH23oKmRJrNCdfDb3eTWNXKqGepBXTTg29ZHbsPES7uSh7xUhdG11VEgViCi2gCmwp4aQ8EMLjsxLVh",
  "key9": "5eqPmzTTbo1KzWTkbidHQSaeDH7BeBbd2GgVWeYXjYriBMT15hQZLxp2cpeX7NXVfyoWRw9kabmYgzLReweQP7wv",
  "key10": "Aeq79DPtCggK1LYrLY8Ln2YJGPMMznRG5R5aadQnXGXT4EXHqRjXxnJXNzf4avs6jFQBZc2NYSC1zovg12STEY8",
  "key11": "2a5KZee98Hi8jkEBU3KZRiir8zir66kq5hDNb8w95j5w25CnZFyMfhDh4JvpZXWiyVJfAimek6BFzj82rc8tDyX3",
  "key12": "5b3uLwNDH2xvFguiJsuwbcWCgLQ4R5v5TatCi8EPR733G6yyseT67qBD59EjgqL7wUiMMrXX1WkCWiU6tPgQsRgt",
  "key13": "4reFSriPfXtWvugZshjHC9LSZey4RG8Uvs7dCpMAvHa4WLzeNayx9k16fS91SUF7sSTXfr5exE59C4q88hZFJYps",
  "key14": "5BuSdG8zHnkR5L8Hhg151yXXqDh8cviqM7PJYx2MpdCPqH81D3aZnsX1R23Ji4U2aZdYGBd57RyY8Q2HS4Q8gZWG",
  "key15": "cGu4uo7dTMsF4jehL3ycVnHFwpTxoRumH5eZWvWbCQ9h5jasQcVBfxnS73AuP2cz3CDpcZ4V5LMfTDhcbtT1uzZ",
  "key16": "5jZj62ishCk3aRxb3nK1Er8M7qGjiFSJ6UBVpV7tzeh66oMXT34GNLia8BULdL9EUJgixoXtmPExoZtxUP7K8nPN",
  "key17": "2hvhNj95jqgjKcYCjHeMnLjJP3AnGEbU2KJovg4tK1NtLt8njhedEf5swcTVKrrni9CLybtassj1cvJkHH3duJ5j",
  "key18": "51uVMA6RinQsZR1jw7PDJ7FbDXRZAyMp3oTzcAoVBFK2dMCVb1ApZdnjCtvuefkNFDnrg9HPqKcJpThYBU3ZRjkk",
  "key19": "4ERJmXGFjNqvjezq7QRev59UphDpXxKtZ5UE592M9tjo3D6Jw1zxT3t5y8B9SzobHHGg82rhpXsfE7Aq9UPZvwgm",
  "key20": "3q6AS92FPPDiPXXPaNTLq5kq5DEZz2tEjMdnbH3YF2D3HQMjKHFHTQJPCKgkY76ckh7mQSrEiVvGd5B6HWNKjKnu",
  "key21": "3EyihqzUiwZQ9RRjSVkU67Hqod84rPD4RHZubYLvqFToWS9pmqiGNjoNp54hgwMDARB6Fg115n5yaU7bGhnAXQbj",
  "key22": "5mKoEdQAVg3JyyduWWgPsbkHapk8knWKbE4V5aF3qxtYHcQLBKLtYHTVkSV1ywBUEJ81GHyjN5hK1qAR3WP8KHr5",
  "key23": "2UyZnrWjuFmi2JNanM6v6eHrRYMza1s34UBqERUkTuAMJJrS1PZaciYLMz1grsUUNKxbzALmcotx1uJeiJwgnTrB",
  "key24": "EkgmN296ccqTNgVmPctxihCj8adceUjMk4NRYcw9amzrEqC5wBYfYGkQC81QF4m63dfg3LEHNaUbJZ7QruKCHoq",
  "key25": "4kCkziPFCS8vXLtiazMQAkKE6gq6dFXjBxu8rb7FzUTzr8eY6eDzHRVMdTMHjzieh78oroQ4xnu4mHeeLgqrpaho",
  "key26": "5bVHSdLaf85V4kbaHW5qo4oHk4f4GXSGZFWqFgkizMvNtdowcyo1QJ68QtDHg3y5bsutijfckhznUUW9v2MhCe9R",
  "key27": "5EFCjMv5cvjtVRXdTa2AzYZZBdyJ6XLtA51qhMi8yuQCqYkuvX9MZRMU1M7UnfHfiwM7q1bPBeSEkCqgCmQpr59Z",
  "key28": "3J55YRtZWUfx8KbySwoapwZEx5wMtCJWV4wjgdFckKxbLUjrqpa8y1oCBUDKWkhuJA5oEvLYw2JBjihYvhQnuH2S",
  "key29": "sEdktdyoPsgBcEx3NaYJ9DuwQMr9QeJCWhLeErNfNzzqjVsXD9Pi5XgxPnQzbmfVbRWB6XTyTvHFqhexRSRn8un",
  "key30": "2sU5bUUrsyi78goKTzbf9gQtG5JczkT9qc6H1As6Rm3HkRVSyqtp4kojvQjSLdPmfa5uQG4ph8DmwVZ8sFgLUwuw",
  "key31": "3PG4Bjdww3rEhmunScZkL5Zru64uAg2cKvca7MJqrNVqt82eypBCcXFXZGYsmGUeJRN4wUpSYeuYqxHNG3jDMUYo",
  "key32": "4LdeFLtsgfZCbeB5gRA5Puxz8ucFXXPBktZngwbj4uWAuhzeDmhxKttoo9nb9yfYM8sngAR5UKGqstvxSGfrixL8",
  "key33": "3mC71VrEBoC8gdixgAgHD2Fm9psytbvMsssCjBQ54nT6vs94fYaCDt4E5GMQAvGxRBPrz5xTKqWukACG5jexybD9",
  "key34": "bYBFqxrMYoyngyr2MZ3YZ4pU5aRTGZ5YKqrrYQQZEXzZMLNEzPpdjStMTeHUm6RGwtKfdfFf8mtc4e4pcX7YvSE",
  "key35": "2iAvMrQt1VdMmoLVfoG8FWP7o7tpSB8yu8WjgSekt1SXEXNy1CtiUpPKjfxLJT34g61QBp4deQ72bnWf4oWBT41T",
  "key36": "2EcXfR3cjeQumALhWdtUUfY4KszVMjYaQ45XvEoHA62nQjiaXbVcfjZf9EyYQ1PWunHAtb55XuEc1zPeFi3ohGEZ",
  "key37": "5pzqQ5fZRPtuT7ZqWrpwDoMfrQr3CdiBkSizsuCsmqr5U6bqVg4uBDbKzRnpGNr7iJU1utTzPt4P3xPCBPdFsrq3",
  "key38": "3C4P82rxm4TR3xbD12dghm6z6CfjL4BsaUqnK6qXbkHx2PTiUVyBiq14sTZuAbNdCUKG9ufMFidFnYeK2yFV94Ei",
  "key39": "5UzxKNDuCYYVYLJUpEC8zdnqbrwdeTV8vJmctBMHabY96p4Z3QJadyYkqGtwhe5myLpPodu6iHzpVEfHzmLbVC7C",
  "key40": "3vzW3feYLmjweQFEw8FcsdXFUw2qvhphFk8N32LGKsype3aE7jKW1VnoZikS8y7mWjevKTBs6Xo38GhFtZbqvpL9",
  "key41": "5wthQEQKYoXLWrZd5ZwSmCYDGa947d8tb4iubuDhWpfgWjUKuZPmiV7CVL3pxFXPxVmhwsX8GmPs5jTiYbqHWTc7",
  "key42": "3XXrEYUPLePX3JpmPXY3KkHxMSQZEwNBrcWLvtRvd1r6QbMDC9iKEyeLY8XRLgRFjEoeaXiHggg6vUMYbJ6tYscn"
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
