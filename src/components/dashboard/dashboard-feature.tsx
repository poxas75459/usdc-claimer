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
    "5mh5fx3cXUHLFTnDU9WPR66duZhA64vbtgFtyNp9WN6rzWNshyrD5wFL35ebURFdUHrF4bjm1VKAHus9ju9Eqbo7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ZFL9ftdUTgNRgaV4yvDbr5mwuSmkcXzpgKPJLwyu9ZZFXC3sbVyKcgU5T2iXMMXBPeECkKu3Ej8i3x5v7RqmL5x",
  "key1": "5UNHDVx9432URtJ3c4Jok6KdHY8cYhYtM6LLUAHWmYN7drVF846JkddtZoMie4TmvhBtWfHhnWbmdXzQYuXpFtQX",
  "key2": "83gqD7jLWX4kqMf6hoWnPaLVgMfJMtLgAyzsCyS2iWBSvv5BAvV5m3LQxaZxKcpkTZ5oL6MbgGiateyrm1zFoWs",
  "key3": "5TUjHGkHEy831Y6ncCSSN14mJwpmuVbUQoZsEzGowfN1G5FFYsXDt3i8cBMsvBMruBPCTkFemcCx69JxUGGYmh2S",
  "key4": "3QR3zbLtKUfm8iNZ9krZExqZRWb988NuL7MCQ646vy7im2iDXfj1ZYE1j2chVLUiyZ92BPDYdXvUvL7N9HWuTAKV",
  "key5": "5HRbCDjPLJB3NT7kTaxK2jAQDVJ7GFzVtNvuCWX4A5sG8oH2bGFN2mjVoYkiCUvscYzwYoJXQQGZHqUdcpxkWFCV",
  "key6": "2gDfnw3FsG5AV4V9pj8LzuXVJipP12H1qBnyP1fnGFwkPsBk1NxxPvfm6KR7cCWTYAeYJu1Tv2c7bwrzczhqjmZc",
  "key7": "KqC7WprznYunBSX3mkHzdPtFx4bkZg17YniPu2XZ6dHBtbYAaGGs7zm41Z6Khr3xANG9dBqL5bwfA4jAenumnTT",
  "key8": "Ytv82Q9ecNp6U8EvjQ5hFmnQ9dyPxPPAr1mUtXqFknU9yPWaN1M9mDCX756LSNdy1HidHJaMGhtUk52knCpMEJn",
  "key9": "4LjXzguToTk9oNLiRNGabA8sNNvqPkzQXb2sQG7hV9cAmL3YzRC48SgNDCmB5Le4j8Chk6bFNK6MM8CR23NwWAz4",
  "key10": "oYVQSitpaXQG3nQH9jYs3fu6Wnxj6prChMj1guyzhL3RNTHGWG32gLFHhPyazZE8EsPGmNwkhJTvwHvr34m88vV",
  "key11": "4Lu26y2YZT4uq5J9y55w8cWCaXJQyotQdvveqw4ih6PmyKnaWjH1sBQprHsqQxp7zfy8kaR6R9W38GTacJF659Ue",
  "key12": "66wshy3TzpQJ2KB2tuPrUt1cfwvFi8vY2R9aD2ucrVYGdstih8JUtmoYEa2B2zrf1CUoBy1ZCEGy2PSRXVtbQbEh",
  "key13": "3qyAHK87ovgcSgBt8DYwmoRZmR1Di3eBEo24vAYJC927J7QmLsvPeEhRokWeXr89RQV1wrJWcEp3SwU5zt6LMnog",
  "key14": "GQmFcZ7GbdGYwxHVFcFFULyjJScrh4DY9Njn76PYJHh9ArEQPgkFC3v6UfuLfmuUzXErKjBCuCzcDGi9iArCgqT",
  "key15": "52qpsVYTEL186WN3x1P1LEpZ6kRtKeCvddVyKgZ1YDGBAQcHCsgSrirLTDD6BMBCpwkpUZQnsREH23qMpktJqwRM",
  "key16": "4o5pJhyCxJAarrba6eAemQPBKazghmcvcaRM5tiWDbenAgYsuNDNWfsGd3xjdkzANqtTtaFLzXNyZmVg23JVn6ri",
  "key17": "WCEdXgWdkQjvSEEjQpKkzrUdCPEgwDhLZiYH1pA2aKAZALQ2rFukZD1U4DZX1izeLmru8zc93Mqqb8dYNNw6EDa",
  "key18": "V4kqGX44Poyweq5M8ToAyt12gz2nbDCRjx2phEAqSpPy4nQ6wsAnKcoAudRngSE3Gg9nxkWWRdKuwmXmuJ4JA4z",
  "key19": "4jqc1uArq3yb6x9a6W7kBxvdVTGzPUcZCs3vD6ACRCsY7DVheBRSYWYJC6Vx3SZi33LpbQU7rPWibHL6o6Ee5gtD",
  "key20": "2WyQXLj4AdDabQGDFdVerPpc5hZXbZ5TEL1xhLEmJkjT2gKtYKtysPEhxKmwRiLmVDKk2qmpjqWrw8Qea9qBZowb",
  "key21": "3NzbpvguwkvLVp9Z6VMWsBaWaStaTfdc862C3gmE1i7U7iWfhn7MKFfbx83ZvtHEzCgRVJhmb7f4iNPUYYFaSbqc",
  "key22": "2cDKqS5af2MhSbuDQ5sBi1BoMecP1gpezRsC6uMGE2p8AQxZdLstN4Dvqv7V1XeJgnuLXgH22xCHsi6c3Q5Qqpmb",
  "key23": "3p9Yt21zqJvh4tqa5LziMM8b7iVQ9J5g48RydWQVehsrEZBpVDdXpszxqZfsjzoAPJaqi5Skyj32jus5Wj64BCQG",
  "key24": "2xg6FUdqJtRHyaiP9gjekb6JLqE3R3XWSHDCNjYvcA73NQuMRSzWP4x61GuMwB3ysVeG7oDeekeH1Kk8qNShN6De",
  "key25": "4UdcCnoFA3SxfCoRcN9SmoAS194iCjiY1VvmX7Zg37G89dwzJ5QNgqqcncuF4SvHS43jipQzroBCWQgMBcD2XGDL",
  "key26": "3knrg2a4sxmEVUwVpHFTAWq1YiBNpL1XjbfNstjtKtUs8ZoxBDubxJ7jQEma4zuR4UkNWJ9C7KsLA31cC2qX4X2s",
  "key27": "5y4gRhNKFRMK7kyaX9zQx6cYzQbmxHL2k8cmhGjnAsP3uv97vUxdukgydQVtCGuMwmysf8GNnQoVQMwsu62Uf2Ma",
  "key28": "5ejFdq6DqPWfENvZowAh74eBWfzFLnaXTwVQPmdkNtnCzXrH688DtJkwf46d2SQDcRK3GxRujYQbLiJuXmogN9ig",
  "key29": "3SmbmQGRSdj3gJaubcor7dCRAe3iti1E5hV5mBH1879BZBnp3o5EBywgNKCACAGdmYjYrme4xhTCeYvQt9BEgAMi",
  "key30": "2rnBdVR3SjRZZ97CY2CH4dLKoYtMAdf9Ae8z5tiAUkZ4d24pTvE6bP4BKTAyBZsw7mkqNX9AdEao6YjDcV6NLnTi",
  "key31": "3DdvXGvKYtWFBz3muFc1569L54nLeU7x64BEK7Jhv1PsZsLtvEGCpq5xZ4nvuBqBfhQVpvzubuDaJpmXRAQxcB2K",
  "key32": "3qwB5j8mRNUadvagiENfD447JkxTCUFhP96jwsLs6WSVQKe2UEPvKPdn4njfpHrBMeErfF1dSZ9MX2YoDDvG2ruC",
  "key33": "2kmgj74GgkMdXBAPjpBT5vHQT6Xbm58vhqerV7nNeYD7krqUo8KeWj6VwVF11jjhKdBV9B7ZkqBEkNR3Cuat56Fu",
  "key34": "3X1Cbz5X33Gem7fJKXNxd7ns4e9uf6mbJ4GWJZYvZ5HBd53ZSL3BJkN9yUU5wxrv4JpBJka9CeqYwg2qiRpSK7Lz",
  "key35": "3K9YRQebeJVyL7ASpPpEgsxcrNAMyuLqcZ3m6q9Hptnen6ANFSpmFKvGk4SkbCHifqu1P9PNEDECypHGij9MGkTA",
  "key36": "3LuYFndSRQRv99oD1eSYyVsDY48j35g9oj7nAi6gsudTrNgQAG8kQZpGRtx8Sz6pPq9PcPw2rpLy1izCCnR9RZwg",
  "key37": "3rpWbiwtHBHxDMF9ZQ8Sv9Gpabdcn7riT1huc16DfkeFgmMXtfHeBWAnJakKmhmyiZsKcz4q4LWLStxTpHCc8Uu8",
  "key38": "5DPuwgi9UJ8zHSg9bKcVbGgrdnjevEeGf69zuqd4LoRmxtKzUDmbLwgZxJK8Kzd1inbxvUpd4umPUTuzsrAi4u9T",
  "key39": "gDV4mEBdZYKvigEbJZALs7HptAyAvadcY2r57WBhneBJstDTKUQ8CfTvDoK1U4Xn2Nn1UPvPMA4mgwVCtdibuEX",
  "key40": "2YKCMW1ffQgER7TXSbSyCREvQgu4fRTuDCvdjGB9tzTFvAMyd5uqVGZgxvc9YzhfEzrBtJ2z47oAxGKv8FDY2qPd",
  "key41": "3CmVH6bGS4dMPdBJaMed8aBts3WeDMgzvDbwnqNo9yXJA3GWeakeM479Zg9VHW7HpEvLEKK5rjUGbjS2WfmFUoLv",
  "key42": "245jzSr1YxC9PoSbajhQmxpyNZq8waACLPeUMR8gS1oLZ4yJVnLFPEKDA9NK5FH2bFa7MzfC1oG1z9awq2X8eEeU",
  "key43": "3Tp8kwqmXPbCkkhFJXzcixBRUKmscSmiDjgE2cdEXo18sw3zmMwL6gLybUvm9uQfZoD5nyNt9KtE4Z1W6d2cuGvD",
  "key44": "5J8uMVaehNHnEnQSADGSfmLEyEp7vLQRHfpAiYjjyhdGUetwgP1GpEjcMET4trUZynJQaEizkQkPhZHatMHh1Hv2",
  "key45": "54TwfoMyUPMLivvFoEKqDDsBA1K1RTzoWH4Juo9PdHKB8SB6fsoP5gUL61H6W8N5mVPD1TNjGUQE7TPZfMj7atRq",
  "key46": "kMmaorjrh74GJn4LYzEdNsy28oXvTtJWzEwooAzUsGKmG86kSNMHU7iJphVqnqw5jb9wipBXbAXKqFQKpY3QEFr",
  "key47": "4UuJwZX3xvzGJVoayLoDLy2P8EpKai7FU5baUw9ELpZnVT5zKbU6tQUVJoHGaQk3yDkZmqR1xurJLcz5yrTSnYZT",
  "key48": "2qpEMKH5CYMJCbdvtVkD9rBmQVamoxjsMGAezGXnahYFsZ4nVs64x75Ez9uqbLq7iH1rsza4wBXQwvQ9GsQRbUoC"
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
