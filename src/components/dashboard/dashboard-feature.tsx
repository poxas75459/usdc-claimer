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
    "od7wJwhmYcuEJ8vVBRF3dKH2sHj7c89hewxzQRoe56hmnfMFLWbpkv4uMWV5R8npTUdQRywqHrt9U6thmTAy6yS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4EbMFNeP73Yn2mmGnW4suJYbJxGLShc5YoSwkGApmCcb62wXV92CL8rGYXMVgWRbcUxQN6mZoH8FQvH4B8zPvpSf",
  "key1": "Qc9dwrXVKsK7q9b4q5sxaTSgNiBM6vQTnXXuRWcmbKjYtwVWc2JVEuf3P3cfMwz3gqABiqzTSs7fQQsWYsT4tTY",
  "key2": "cUbgGJ7826oxsHaLoexUnY2kTF3TFEnBeeNkruZntDsZjR2D8wDTPZiGT6TwMsxM4vbUFNf1NoD6JrWxTqKsKtz",
  "key3": "3dQYEf6LoVZ5ZuKaaDRgFQwPpgFvoLHczb7zsLqxQNWakWrzize8sjuFUHNGUS3WR2oSzgpm5d5FrnK8rQo4UhSQ",
  "key4": "4WLtYa5FEPCsSAtf8dBoTv9mXARJzNeqdGdxqaDERWWkmXF1mXyCGRi7L4DvWSqcPyvaLcspWFmK9QYmGq3VSMqC",
  "key5": "RDstGCTdxhduk1QzMqd5VbQJ5VYhwfuY2gw1kDVgP1kzTdcqPzgEjc5grFsULDnfZvdVjLGeVXqAPjqKLG2ejGs",
  "key6": "498mc8rh7V4L1aoQ2SUxhZg9tJtAXYeKBp31aGofZ8Vu3nYQcriHaCVPFM6iU5zDHLwLWky8GEAGmadc1rn7aATy",
  "key7": "3akDMHcrwuskdFKhKvzt265uJ6uJvCgEipYM5JsMNiDwCmmrpeCt7gyNsTuFBML77Sr4s7K3mDuVmGRdGdyAS8rz",
  "key8": "2FW1TvEqXEmow8tcgkDUvzWUWzZYBMPiuTFeT1KniHsbFZJMWJcjQeZZBJpqkJJvSftTShBmY6D6LwtaLmvx1nht",
  "key9": "4E69PxfT3pj882gUxSByDrAV6dSrpuoUjci8Evrp3mnyGb1y4hsaGjcn4zhGqqu7bvG8FhPHwcWKz5uYhGdkTqrC",
  "key10": "2uP77Zp8V6jKNYD4tFLfn29k6887XNg96gpZ7qeUXUiuj8DeU3wJz715R6aFP3qcAq55dwM7TCT5Gf8AXS1ApNuX",
  "key11": "3xVRkCpgpdeXGTKqtk6woE3Q18khAu3a8C9KpxhircGz9bwMxpTv77YLKUFQMHbFezpDUSLBWQwYdWqwJo59bDBR",
  "key12": "5CvzxiRPiHguZfHmy3btLPUdtYUxJUHodhGHbsRPVLuuAz1EvJYaLVpd1Wyb16HiTmr6GYG98DNV5xPzigWKJbgA",
  "key13": "AbeGRaxwhTQWcUTnhiK1LHuCba843WZh3NEfx3jKSneEg22RS29pyJ67kePFF4zUjCSn2YeHowpo3Az2NESu9i7",
  "key14": "3H2t6jo5J9twkXVJQcjqUkYXvHWLV3Gnd3pXHQp14PMGjZpGpyqBqpaigJjUTQARag37y4JqhQuH5izcHoVqXFxM",
  "key15": "52ZnukXZvp1VT8JxEsp1nhkj7U6RxLZmDXiEAy1aY7DxkzdF8Md5i3U6iVaLw5foNyevk9uyqkhJpeVFrJwE2xAn",
  "key16": "AyEwscFqgLQC5CmTD5ggFEy5qCkYQw7pNNFHByzoVLTAWmthtUjNjGDEcpFq51VSm7e6d2YhDd4gwv2RBD54ENj",
  "key17": "3uPPUPcbEmQEbYBhT3JjfQw2ERFSLxWyEDB5FwhY73EbSeXtW6tzctdgp4aL6p528mihuV7hXXs3YKjZh7SuMD5z",
  "key18": "5CzAuPYJx7wKEBCXWH1V9ZbYQuKmz1ig11io8G7VLYikP38RUvvhCJznt3YjSDjjBXsoD1XLMKZ6ebpEmrPvdPqX",
  "key19": "wzBxyCsLbZScKWA4oeLpigbdFnnaowiDQKB7SEz3FQVdXgNpyFMbNt1da4ecKuJsncPVyXbiPmLB9zX6mh75DCW",
  "key20": "22h6Hwj1Gsj6iLPveM7w99CX1kPuQNuFzFtgk7isLZPLz18ipQJRzpzWAxeve7kHVF2tztYYzshibKUhHABR283m",
  "key21": "5Cmy8DX7thX4dUrDDgH9RtpoCFqqVFqNGBpVmf678VssUuANFWT5UUKHWxfjgWhiqAcBkHedUrXZcqRFL6BYTmZc",
  "key22": "42uMv2gLsQX1RkzH1CTRjGQwgYwmwmpaWJqJ1wsrMRyS18KVpt3TBdj4pUSSrCvgQGPBPYPyumvJrdq42J4RN9Bt",
  "key23": "4ixqoMTXSwG8veaUx1o5BWebX459Rz1AgkPS299PUKF92W22PG7csgSVmbFziE1jYGrMquVtFDyZMcdpF4x5UeQj",
  "key24": "5J2CuTLr6jNdsSiDs3hPv5KP3vbaXmGXccR5HfimZGEy7HRS3CL7eCZ8dZtv16wx8CKLuVE8pzTbbkpwa23bRNQX",
  "key25": "5NEk7rdmVKo3jsHsJEM5Y83YGHDALGMHcbTEC3ZmXDKgTBkvhj9WZnu7wCnjWtWEukwj7ZLovWVaZgN1Tu5iDaxo",
  "key26": "3uDAr5KBsrcoLSPgt3oZot3CNx1bMhbBUoPPmAHJaGdua6Logisq815wtVZaWpWxFKD2LkHnnt5vbyUTRDVjrFMM",
  "key27": "ng7GTexTQkzNwQKHZrVWR8sXNN2TdCVfu7L9w3w2xQ9zoaRCqdyYPb9MRMJc1dmBzE1Ty8A2Fqq2jHXGfnRQSSh",
  "key28": "3dzp6B66oJcWFn3BYhMQJy4USUk6NrFfPckazFutb9AHoNEMj2gMU3ibu3UdVHqwD7fyyPh5Qe5QArkf5NEGZoix",
  "key29": "mEPDdEwdbYf8bE76jTDpCnQpsTJHNrKqfzMUJ6avQ8Scw78uBmfGnsgpTkHsgTuBFDYdBmHGA7d5RYCCkQf2oGe",
  "key30": "2n4JugonFFAzTYnQFgK92WwU3PENEBo6G7mrCATQB8CXUVJZE7k7sry2sLjgoK8tWrHnRjYwaikemaEaDZqetz2Z",
  "key31": "VzVQr5idvTPewXJmYtL2ECmLcKNE5SrswcbPUeEUFb1JTbt9bx4VfxaX8YHeWGpVp4Z2dePF2i4TJ4yHJ7TJ1Sw",
  "key32": "fsQQvB6So2BGTU3fm5pi3iymUDxqrgSaz3W3F8da8qbY4PVuQmGbMGeHbem5mgXR7Dee81LQp3iUB5LLa1MKzKi",
  "key33": "22MR32Phsv3KTX9xiH8dgN2Ler8HyZ9BxHrERcX6x2RnMNSfFnJGvm9gF7Z4ctZ3UfpQJooBvb1PZZng6whML54V",
  "key34": "3o4YnGzmsfbuawwhGCxnffz6EQEsTRkrmMdGVvKwRZWurw8fwRCgqeS2kq4A352upGeyck6fK1dmqhJTD5YnVogo",
  "key35": "65MK9bZYG3q9y4UFEJUNJ7vpm5Lse1Q6zKNfC4rMN8BsX616Se33KBT5S2L98w6UjMNix7ygVV4UqJjKJNs1ayzS",
  "key36": "47qufYsXDXbeXairsrc93KSdzAbNDepPHqWSYT8wYQjmUzf73XxSy6QzsgDdTdQfpf9ErdacmQizVfWD5aeyBD8A",
  "key37": "3RJHXVkf7R1zn9SkuhhXsV6KqVepPqJaCVSt8CEW9xG2ZKzgFhmV6tYiNQehwMfF2PQQ1GmnMa58VBGz8ngLaQzw",
  "key38": "4f1gieQneM6BhxPTgQNmZaMPcwJdDfwfwq43wxQX2A3cRcVBhdS1eYxh1wsanwayKd1oazcXNqTKNXAFN1BmDye2",
  "key39": "TZeoPmmsGTx2ZP3tsnmh8TwtDmMwPa14CMiE3zHXktciuod9UfAnVyCNizyvcppFx4wCK7U8LjYEmHVidEA1aMV",
  "key40": "3d3XcNY3KhoPNv7Tu8SYot9drq84qL1xgW8gXvFhK7CnxYxDUZWXx9TXiBMeiyKVAQMuanFm9wYne9jECpkpa4JM",
  "key41": "5yx7aKNwquXfEkUkKUNgn465HwjLN1g9WxaMRt8WtkqbWZYVQJvmH5mHMfPP2ecSLJvUJqSZN291if7tRPnitLYW"
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
