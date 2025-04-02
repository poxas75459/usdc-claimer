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
    "3ALhioa5jpySaZRnKMoUwufECFxsgaMY5uGvigQzatbmuA2WNQpi3bjXkxrUF2tMnLTwXCbbn2yW2QL2aiNpSxyY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5mLTurbphQmxmQDMqmfAbTtxMhbrimPNTD7N7SxmHYrni8theq3fZsLnYw9vNxEJEVU93Sqy2At5vTNy5biaJQPW",
  "key1": "4fFTK2woryyhJthTk2zjKEn6z3JG5vvZL3hgrrg63C6isjjSiEyrJpJN5Hf8fjkjMLNTdVGU2fJ9aegRutKjc7uY",
  "key2": "4rCFo8RzAVvzGcm88Rfx8id94uAC4E7FWZrHGEixEnbVjcKPXr9KcwRu7cdUmpdxf31TvRy6QpxX98YUBocHHk5Y",
  "key3": "22by8wt936kXrp1CPr8wFbkbLMyZZpC7UQsfXFiZxorrmypttEJodpHEGF2dKpAiApUmY68nAij2Lumg2MyJPowL",
  "key4": "4ty3VBxsCrj14gd9edGqLUiCsQb1rvc1R5sAiLbqk9ASDQRk26HoiPoxnWEDpHkvhJ9UekjLSwbcEGQVyeKuT4Qr",
  "key5": "25upBbtvjjuiPrUQNzRvAMaigNqbYVgVuE4RE2bQW6jJuPvaDRKSAr6dXvfSQoThB5Njq5LN5eBV8mP3Hu2MGZ7c",
  "key6": "WCbqRfErmGNZNSk2UuxnpYQ9nSK4nWf3ZxjoKczcnAHTvbDNsLWhbaTgE6oMkuUWLeVoqpsJDDbi7Nac28x17c3",
  "key7": "2bkFKgi3WbaqKKhcb92WvyfC9FGvL13pQf5T37N1x79y43nSSVNiWif5soDmSWpngvs9vk453WDanUwsLEtdLmMQ",
  "key8": "4TwT5VREKTxCTwdBcEzdkE1SdVRN2sorF6kqKAkGEK6Kek58xTXtggL61hM7BBtFdaDTNgZxkU2ieLMTBMsiQ5Pu",
  "key9": "2JEc3o69wYDKkPvmfcjKPkTFj33NtrboKEcjixtyhA1KgqLg7fpcBNtcP3JyAQoJG75L7MABDWCSCN9493Mp7uSK",
  "key10": "4WYHELZse7AUTRRSZmVoxw4Cex3RxrYRcJdzk5MxdBc3aA1nV6LDd4fkdm1hxs1LgLBG7N1Kf6KpcfFDhw9pMKrw",
  "key11": "2YdtQ9wSeRk8pL769teUZpLTXxrKzZMpJSTFsLvzGYJdBY8wUhGhqJFX5WiaHEhm4mgLxpxXhNJJwjfnQYERAbLP",
  "key12": "5ur8bqv9evs4gJBDjP3bpVHKzR9yUB6eWAjYBfiCA2SY9NZUZ4vf8pkBdcWJksrGoMfAR7XEaqvTDvKR2iSGioy1",
  "key13": "2zverRHYds28EiHGKddpioTinHFarHkYhATV6VV4QMbNJeZ8FhqhCmNW5wUxYuhLpHk4sjGa3is8y3iUXYaJjcYk",
  "key14": "y7KtQYS6BhMWym973zTNPNeNmNAsZUhSMbTg2eF7iRCHXhLT6WFskRuufnu5tTQGnr76ayhDuSddJRSVgEEcioi",
  "key15": "4jZ2eFo12ryqppH9oPM1S2dH1ShodmxwwLGz4i1xq6EdrxpNmghGEnF7grmGwGXvuMZEsTEoVtsVpwLBmzZVHCu8",
  "key16": "4XFKoiyqH2zMzUxEXMJraALMAGZLFjSJandxxDCkfjSEvPVuqDpPCmBmVm2yw7UkJfJgR6rocDkJjDQSsBfFKzmK",
  "key17": "54rugvmvYTTkAnW1g1XCthrLM2qTqmUTTX2CECEqcrnNazMZQq3NctD42WjcWZAbKK9gZLkz6quhWngA4n3DMmdb",
  "key18": "64yAMD9991L2NiirwW1qzS6A1YSc4pU1XHA9wXMbKt2SDVhHsa933vGgzn3UXdarHqFh4dEjSZXSc6gxdZuFxf87",
  "key19": "4LDnroW6K7mU58V9VXcbyRBmx6i98CwpyAnWJU31xEiysq4UGtu1NRgssex5Ycc9otLnYhNiry9d6ZxyVDqvH7WP",
  "key20": "3fWSxrbxcVigtTKZjzPj1abtVG4NrR4G4t3HGSXABTpRkW7eq2CT3yBcmcRNVTv7SXkeVdwStWL81GsqmQYtUFev",
  "key21": "2MDg8tsyBewsJWSUGcPKDv7ZdwstqFDAv3aar9XYnVT2JCw2U1scMegszWyL2Ej4Y5knGy2nLsEapAfMjubi6NZq",
  "key22": "3MFPeKPwp6NbH3RdrQ9baM3p1UdTgdSP3QG1b59AetmMpFaQ3kxiPTJN5fJg8pW4aMfDRL2HZBMa3etKwuC66Vxy",
  "key23": "5nTjwUyTNmsLAoqzDxpNYvCUjUQmnLgUtZ3rceywYf7CDcJgbKV7kDs1Rcr73Zr6gpSguHaNSeJkhu9pXpsq1qrz",
  "key24": "4e5TsJbsrAWJ4TqZYWSEWhPveZPn3vH9bsbnpwzLpnC3RiAA4BnDQtLwWtHBsvMCqoNnnEad4JFNeXeKAHNyLaxs",
  "key25": "47d5YYLzmJTK6efmRxaacsnCAyUDe1m5pe78qLs7r8Tq2LAxJFwz5TG7Zc7unJvPXCoLqq5dQKePV9pKiNTTkVYB",
  "key26": "3eMUscCKR9wMbmeHigKjpqaPZSiCcE13oE5239TNfvEMLXK6whtVvShV3HDvSRgd6wWYiLxn5xshX9vSi4cJza6M",
  "key27": "2zL7VGh1Qdqq7c3z545f7spwWjdkKUWA4ZAMuQa2cBYSqd2rkAqRZWTeKSk3s8NwTXgaHqfMGXnwXA3eBRdHv2Yp",
  "key28": "3wyJTijP2MB2AZXKV3KwjE8WRyqgATF1ymc4xMWrZ6K8gAH1ggG3H5oMBjQjy8dDVZYaoWE2jtWYoV6sVhuy97uJ",
  "key29": "5kqqqPGeQdnwHSSxNUbVP38uZNw1npJVM8WhwUB2Sk3ZsNbH7eSo6NmUkxqW71RWUh45N21zqzxhs1EmbhQc3o4t",
  "key30": "sB3bGAhDSiyc3rRA3RY6Bjqo5PsxYYLAynWSF4phXxCAnydGZipHCJKE87T41tfjYWyHueBruQWWTjJMXxKP9GT",
  "key31": "4yw4VHWvpmj3hhJS4FnW8CEiTcWZLRimDbu11wzdY9wSQzw57sbQr7tnYxCUY6MZdfq7pbhd6Z1ep7NfApE74VDk",
  "key32": "4DkgPuPc3aBxacVapMZDbxkvkDhvSDxiZH2CaJ9KwBfDSnSB2cLZpNVzZa2ff3znKp9fhbMn88TR3CSuQHhoMkRv",
  "key33": "56EeRrpu3q4cSPcFPbgF7WxJHtAuF5wxuxV4VmgUqEToddiBUeSZetPJAE3mSThwS2LWa4vigAShnyWWSZvcjqr1",
  "key34": "2LKTL6i6wgJkZQnDURKYGF23UbBFbnxnnn8f48DMX93dW4cCHKFuk19cccdrU5PvprycPEeJZ5pXp5cZhPsMtcuX",
  "key35": "5LuHTK4wUNLdtCkVmoLFQV5kJCUYmKnRQ1BawAnHSBVoLgSZLvpLzRrMH9PgQzYEyyzJyxBE1bQMQArPXUzfHq4c",
  "key36": "4kZ1kEZDKL4H31MHwpwGqn3Mt7qKXjV4wMK7RbbjQnQAYkGCGyK6am6YqNULXqhPgRAmkxzvp9Zh9hcp97JLVMwH",
  "key37": "26CBDHTTohFRnAXZ2ozLpGmQisHAnKKktfVq6WBY2yuqUcpSrXEvZbQqwiedLrmGT2nkvktrMweHpJi9ymqgWExq",
  "key38": "4zftzN8af4XjFE1UJDYQQc9AdFBYe7XekK12nW9Z9SzfytuzejBRHqckdSzSMBbyxoeA2yJW1DapRDJTcPDhf8qz",
  "key39": "coLAAWx1zT2ynkAKVVdyovDfWipMMTkaNmiSRE8cqi4VqMRjJToVrSVBjuk2bm72ajMedUMsEC5qruYLdRnUQAq",
  "key40": "w6fT1ssDKWUUoqijEwB9LQHE76m3CyYrVZeqYxvDUsa9CNKtWvZhvmiMp3SWuMaCpw7RR1vUPmQkquPNpqHxeVa",
  "key41": "3yoTFgLfie7U9D4X9yHdPTvvsCwUFgf7ZfdkK3NJXUQNUSkifhqfRPZ3Re4tuRx58GFpGyU5NgZ87hRp6vEgPZq7"
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
