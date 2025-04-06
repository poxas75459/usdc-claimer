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
    "CEzs2ULHZ1E6MMWCec2XFyWed4ipL2HxPZSLnTrNV96TQ8fjqrqUsvw79PK5A6LyfSncgLgp2KbYUShXh2JLJFm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xNRrCd9D381qyjiLUfpg7rjgQe4mUTtep8YAB63axkuWMfBiaCNtL3yFDLycB4Pw64DxmsdSe7pe8ErFt7EQTi",
  "key1": "Fevi2QSP7h7xeEMy8A2BihcmaE3uydKbkkjazDZx1y9gCTe1q7T2QmfybfyqsSK4owbjsoP42Jdfb9RMkTLDgsA",
  "key2": "57hFfFdPwPT9BUYQVenp9B1yL4DcY8ow3XJCV4CiScgnLF8b6zfNZDyuh9b25uGBjoUKvBcDZCC1pjzwtuH1tTug",
  "key3": "3znTR2CQzQRoLMpRZaNnQ6wbFzLHt16kiodCRk3L58JXwHHR8pr9vFpvKC8MMEN9GuDmTiMe5JmNVrHkNi4gA6pi",
  "key4": "3RiciTJKqhaPVu9GT7WR1yAT2N5MMeBawYSsKMpwZZFbZkk9TA5VPcaDHdSv1S6mJodGyH352Q3gvezP7Do9PcuA",
  "key5": "2QrG38zYtW3zvL34yJSHLYrDMBVF2gzEm4Cgz1YdZueXfgw9Gi2SvhtetkUpDecT6xrf1gzrXRpdzgMV4n96yGwm",
  "key6": "3gi66PGwA8drAnXci1XT3BnUQk3HKLnV4qKBcpJ95itAzijzHF1hhsokjY6yuEG8aArXVxwLUqejeawHtGH45Suq",
  "key7": "5YCPqodBL9r3szzgTRbhFctL6yLPT1gwXeRCT5Qz9ez8z8LHoA5xoq64uyudYvGWZrpKfsEv52KLJ1jnsAfiXiJG",
  "key8": "57biXgNZ6nyx6QbRuvjdQKD18WUWe342mwp23U6QoV9W1jHrN8QALGTJBnmLCYVqs65iibg7H4VFWzjh5vnctsBn",
  "key9": "2ZFkGJUsnyyRjx1nhrGQwigt3MsZCpfkH7dvDwAeEfgRdTPdT5ExMLWvbN3u39fTsdNaLwpGANdCKwFE8E3WL1M3",
  "key10": "oLCtY7HGdM3imjM9mjV3uRzRu5FV95pNmKWXk1UhsLdkmcd8ucMaQ7Qoa9EabPFLNSqK9TWHyCjcm8R9iDVt1jR",
  "key11": "66ZLRtsJgd575Hupxvt7oUwVnW9iTuWqXUWmY85VfJYFyzhevJPvmpD558n1PUxB6SYRf5BwrJmMojJsuqJEx6g6",
  "key12": "2XddNbWu2sc8g31zY3Ykfn7p4yqcwNSAjQM4dHmU4qzy4YSrhZP57HT3XdVgthdZdCLUtuRd5RxbqLeDgvdsyt1f",
  "key13": "324vb9UxaFJ5NP7iVzyHF8Kg73MqCBXy6AsqY35kSRRgBwXCKoytJWJ3gRU5RUtMXzTBoCg9pPeeGhNK2XvJM2wg",
  "key14": "3ugB6Mhy6DJb37o5u52c444YmNmHZ33NiwNxVhyzkWaR5VRtCnrUr94QKwTBayVaX7cQL1nMirisFPfZBuNtWWJc",
  "key15": "4VasRq18C359FHxB5pZ9v677PqFwQfFCm2uJKXWxYFsmrc6hUUZ63oa5hrxVCK6tT3KGeJ2o7eGvLyEm5MdQc1n8",
  "key16": "2ms4a4chY72ENEdbq364ahwVoWEaH5bm7qLTNXEnp6rfoTy2ChTiDbVFkyshXgaB8FJGKUgZ24SWLPf2RmPhngxs",
  "key17": "5FqSDwJBFjZQLSTEubxm7G1DPVp3S3VRSSZifDzJ76j6Q1vb5GrD3CQuLSbjeC1JeJ6WtHZ2RPEXVyJTSamV3ce6",
  "key18": "3Xxi45NCszK6DHttuFiLMuDrD51GW5ayXxVUevF2orw1xKMcCx1z7ovtMHRTaXyGFHPHh6mhcRfDX5iw5JxQf1oW",
  "key19": "61jeuDGCcqCKHUo5knTq9eXuf4N1cYmREz9BaErs49McQRHDf1PFFWamkXopPgfnhJw9vydSuWeuw66Frzjw7fRW",
  "key20": "2r75ufJJDq5QpCqr5mgP2gyYexLVb88hhsrvQHq4Efe5Er1PFkdCPsKHBycxZqpTdvGg5J5qrsEz563XK2E1KUgr",
  "key21": "2REtPdTznmDW7fkTLbM8LqsHscoL1jGWjPidPFt3VR3TwEk8EZPETNzoEX25rfFJaj7dy2FNWY3wXfdSrogPpdVA",
  "key22": "5XDihjfBnTsQ2qsbSdmpSKG4kXYBvJWbC5J9NtnKHMQEt4m57GWcFsVUQ7LaDDw1ihoE2Mt53rKXNQVmxK6BPPQ5",
  "key23": "51iWfsCFXqTvVHbDUnwkAe39pqvc2B52Z5XZYHdfWfdnLc6ov4KpiYZGGHwGCjVtjJQbX8Vm5ZjrbnYveLGsiBiS",
  "key24": "q1xHH4fhZgbWvvkT1sKpiyfWfqNU74a3bgE9C1NmcdhD389EfJFrgKRmaMzt1WFUMY3sg9H8SnTVvkg4picoVGW",
  "key25": "eqbFveJdR4VUKs96pVJsVJh9rxzos1hzgNFfsLPJuM9bnPeLygQUdYrU4PnzCsoW6KwKfbkigqeTgmiMaDtebuB",
  "key26": "2eS6z8ir6Up6Utuyz8GTtc9UbQnZUAMDNg5GgtZkg69FMMywZ18LpEjWqmX5hMBsQXQSATi88fi2mECoAxy9sXEw",
  "key27": "3JuzgY5cqSWxcYuM8u5GKjEhLU4nxQTxPLC6rFQHSSdfRUAs6vqEQqEVU6Egc7aeBNtzCq7wfFk8AfgfojiyJu2R",
  "key28": "3Wu37t3XFaZghYJPtu1aoqRtNuKgxvspeKxNHJ7yiPVQBu2LR7D8YfKy2YmrYFYsMV8Qn1Z7fB4ar9gCjoUoXhJc",
  "key29": "5PAcXGkDYz3KmwuNp7g2NwpapwmzdYTjWnC9LdSu6iV1iJEEgBvCWq71sS6p6DD2GRxUJJhhX5EnecJ4KcYNr6bL",
  "key30": "2Sda2WVyaHtqGxj97EKQyrxEeRwXgBp4DoyrTXJi2KGXFjUY3L6yXtGSDUrdDEfRAycf8pbPK8iLrBoBT6CLh5Ws",
  "key31": "5PkjACyaJkaAHY6oE8PvbMSLnWFQN848HpougTJ9XZa6W54yVjT8jRpZfasbSJUtSJEDkSr2VPje6aet6UdcKoww",
  "key32": "3eeywz93tsoaS1phBUWWLaZUKGvwtu5CWPPbRKYPz8UU4vZRj85ZRF8SRzr6vXo5y9qk2o8yTwc9NQFT6B4wCzWV",
  "key33": "48GFdLxjbETtAQTPSJT6PkXteg3w7zytuhggVkghwwtqNaNfA3n7FosJpZ9ommMgjtWk6DETRPiost728Ei41Jqj",
  "key34": "4c6fTA6wWVEYCY3276qEKNbCAJuH6kh9s64BmHKAJgewpWCyWLEKrTL4qVnw5joufcmuHiQCQQxPgCs5cHGvdMs",
  "key35": "5r2oKLqgTa3Z4fxyZSNUiwwijd2vrSw1cNAN5Ln67qLE1RT2xVheFXquBY7CU8DjP4K565ohWPZoTe3m13AiRE2u",
  "key36": "Fed1hHr29oDxxdWJu1mcQdsjHZRWd6yYK542ByXGKj9sYsHy2wUB2PunSVVLGr3bLiW79D3xDJfsbMTf4tBKYyt",
  "key37": "45kY6K64j87PcnrSy8YsyWwXyXXKCHBmXSWpienz8CjwgPwJLmf5aAkZm3ptZMJ42KLjNMYjD5QZqzdqTRiN3ZyD",
  "key38": "4WSJWjkAmX5c6QQ6j3U7m1dmaUYkU4A1AKoatGoUvLkCC1p9k1X77UPrEmGxFycPkySm4a7FUvz1Mekbq8EBxY5f",
  "key39": "4SnvmtHk9gqFbVCk7sMny1qqSix7MQqJdXYBncyQZoGCmSjXSEA1og3oUx783o22Xh5CEJ8SQGTbgPhXn9z5ULZq",
  "key40": "4NuVTLG7ek516T8FJ19jTndjHZSBier7wWAwG7Muvy5MpoCbbxFfbbzi8qxPMPc5p79HVAfWxAe86AgRLx9WE2uQ",
  "key41": "2T3CfTDmLxQnm13k973KaDgHdbRz1J2XfvkmGfcM4zHUu8dqCVKZEND4F6KwKyUHouuznLabMaMCNvCfaZpoNp3y",
  "key42": "5wTzTSYQa3b9xHh2nkUAySG7otpXkoqptZ8sNJpDBUVyHu7pqCGR84DXrS3rkuhcUs3yWbec9EFFZ7LEo6WJAszE",
  "key43": "4igsVeN1FfygxGX4pkgetb48sqbGQtDdnsP9BGWSd3YBMy877Btw3K4yGzR71zeGLUezZfRQES3tQFN5Cy4pugP8"
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
