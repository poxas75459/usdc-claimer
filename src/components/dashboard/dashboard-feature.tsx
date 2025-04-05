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
    "2eM53wwybjhksrwKH6EVfv3PPPiQhLyckEGiYKCw5pvbXkbQ2stRwKoDTRoL4RFa34oMorhjEHhwpCvsfQrqQz8K"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2zZwxbCQNrA9nUbPzb94qenFdCrwGcT1A4dwDpGbqx42BLK2ojLagGcbQDiTY5unB9ga7U1WtAGQCrkfCDa8sZXp",
  "key1": "51j54G98cWRTxJB5JXyMDfTuXeNLVMdygHNs2EZJ1NDzEFqMTG3bEa7kyFnMiZVZqtMeYKu3jzeiupg8PhMkTVRe",
  "key2": "4zC3KgfYT4nr5XtMFhuNHfTso7uvE7rX8dL1GJdUidkyL74dJgKyd7i7zEGKm1s4tRe7CXQU7mWgEitfGD9AsTAy",
  "key3": "4i7ZXRZvr943tifnbsYGrenthcAVqbMUYrASW6Xsea5p7o78h35uUo9sir6rzZguSwYZfMs5gme5rhuRZ5akVE59",
  "key4": "45F3fRAXX7qcGwFiGJGzLgxG8ujaxUZZCWdTfdDwG3FsHFWsZrV3NSjtofQWpzJRjdmyrAPWGnx2YJuAmNiJzj37",
  "key5": "5rzVzMtxJsE9sF75yckHGVficUaDoJhUmLJhJDrnve6ZSKb5UDuDsKvnrCjhgfvzujrmLrkXUzrKWsh6wqb2cHJj",
  "key6": "aPAbeWcJqa2ZbwFtJCBiEBajD69ihyJF5yJPJ9XJf5hMC6hZZ5HbmvV62P96YeytcDDqskewjgvdexfzRBSRBFy",
  "key7": "5qWQQDU4EVFfeNeuam2sg8aGWnfYnhEaGzyrxH4Sy5g3xKkfweWAD7y2ac1YfPaq3EaSAsaMfm6iDxuVCjQQQW96",
  "key8": "3J37qDzafkodyBSYabpfs88RULQnqpotjvEkHNQtT52va5tssba74ZMmTd38XTZuC9ndL1RBmEmYcxuZQZchACdx",
  "key9": "3n8tK2Wd2ykPE6wytxu1BcpbjSgFmdKB1CLuk7E6r58w7fUWyYjQ65JCmvYufzhTUt5tgGoKUtd4GkXKqypPwbjR",
  "key10": "2oQ4vBbyngSFGibjXbVGUtjo6THRbEN4GszsRkgoL3RD8P3zemUGJf425bK1km1DEmf2s3n37tStj4LQbNBSUzfR",
  "key11": "292H7F6VZtbgLT7ugQEoT4FbJ4DBpmfcazSoxRpbWR71zpiWi4znVmKfwfdFjHizEyQhhKZytTa99XXi57791xqj",
  "key12": "A3b3Q2SyhChwFPzWwz9bRa9DSL53Erbkvp6fDXGygEZCbwPgBVsfYrpLyQHtDn7qHhMydVMmJbT6BL371kCyCEH",
  "key13": "35ifSMHEXwmCYrwWmMSbkeUxmARaKSNWnGafWxUUhHoyhBuuoqmPdeYa9s9X6byBRQtSVmcyAV5ArZCW1atcAsU7",
  "key14": "2eaMuqvenEMDzb6XBTDijxsPcsDQkC1cknhgUftSXvk88c9iF32pBJMMf4VmEwK2y57a8TR8hWgXDohQZPaUJs8r",
  "key15": "j3gDwtqXFLXMDnCGiNmfF28zY762SX5HRsjZ3WFMrn6UN1BCDAXU8vzVVEuF8BgWkE4Zncu3JyPQmBsCnjRRSqd",
  "key16": "3ZmDWjNZnLFhezyyQZxqti2MMrYg8tkbGjCJi5ijUgLKST9FNY3zconsspbpxhHrutgKAE6CiYMT3cQzAn4J93hB",
  "key17": "5nz6WrqVP4DEHoyR5gQV9nMBDa1xAU9pZngysEsDcoaUjUCH2qKYXBcaBEQ8EHbQ3zrMUJg3cc4m8HY4XEvfLjCR",
  "key18": "4RpePaBnu12yNpqCyThVnUyKa3onNCtcxnYkkwFx7uxxhjauCiGu1vh9naN2VyDnA5DbSSxdbc8Q1zsF6MeWa9Nc",
  "key19": "vWrYZ9EwMnVnKK7aRtFVtpKbn7Tqsd3LyU7HZGojkKUZm2vypeNcPPmc5svMcsBDPSayfpZ7SmfepJPrc1Ua5ou",
  "key20": "2JGEJSPPDtorK2ef7eWaWzP39izWEHzUeJcf2bwrWyJWVUEFBjrbRK3dct7JVQxGyKdqrP4A9Lh8P1M8h6EReiWt",
  "key21": "4e3J5D5os8RMbJxzqav3vyvcZiL8FgixuupGvxPPzgHXXSd5Vuz1Yd9DC7HSGXk2UQTMkkEmKAjHto1dvdQFyv2o",
  "key22": "3kjp2fzcyomWsqtb3yUjXoushFzqQ83vwuL3QaaXLfi6t3EQJpFHy8QLjwpXAihtmbbMLvMwLBeczUqi6RoVkaay",
  "key23": "52cUMqRtaXAMUgQWxsbKbzbW93xXPcsx7zpsPmKQsWvvtoiKYJsU9RYTyGeFYLip3BMkBYYhBFqp1L3s7Pz6sqtn",
  "key24": "CRjmPguNVqRsNtrBd2NiYmiyjcUXYHUMCMkK7gBoQzEc3iTUn9jnHyLG7GSU5YqTci7edej7tqR6n63doW4jQpy",
  "key25": "3nQx1oNwSM6nPSySBvKzJTuHyWzMfuiQng1KxboFFVD3gXV6Uzhy53i6aARvVUGNBg31CVp9yASyc4gxDBvJ5TvQ",
  "key26": "4fXsE5jbXeKjPQK82w2eVhinjfRNSRYcnMgaN9AvsFqbmQRjTJ74siBKBn46PCdq6cfKonf4b48FPZDDcx3jE3Pn",
  "key27": "2uuKDoqSzr2kpMgLZHn5RwvH6wJP4DcSykmcwvzqoBVVz5m5SwtUn5xdhFDL9oVCa5BiCbkzRnvSosrt195K7D61",
  "key28": "5iL1ka3eoXj9uvwpBm9LW1bhhYnHiMCL8AjWSr8TnDxrYsABBSHbjdnRjWM5aC5e9UHMX6GWwHeuA6TcXzU1nXAG",
  "key29": "sYLAiPntLitBhsWagijhp5YFJf6VcbMsRrps6rPjMWGgoeWenCvdt78j82a5Be6aq5oYmdBFMQxbgkmRsAArkLj",
  "key30": "2cVKSWGdJyBfsxJn4qjvHfXSp6aMgVVuzH1of9oqc1Cmy3H9aKAeFxmoKpVqNUUWKtyYUXhJFySTk15DYBA4NYzG",
  "key31": "53a7RZVEuDr6Tfdq5qpdizFjvvVPxtD5Ysp8tk6uCxjqDDragWGT69tu7gSkdwurLag69axd2oHUWBNhZ8yYAz4A",
  "key32": "48aBcJZMbDs6HCnsYWqEwqV9CfFpNV4jFksnotQ1yaYZTUY4NaJVA6cVFWRm33m3c4yHdR3fKwT2VHDkmo5EcKuq",
  "key33": "4y13THhKYey6jr8pH5HeWA7nf2mDSeXBEQzt3n7mNZ1YiufvZ1gtLeMufXTb4P5xzfBeMbQvwZavUakTjPZr6pTk",
  "key34": "Gudu2oe4xnhkL7qY6wCV64ikR885521nmDssTaJH1GD2tVwPt5VF4nfXLToThsPT7LTi5tKdrNH9uRA8VeAv7Vc",
  "key35": "4UBJTj5CQrxzHXcC7QYqmo7ve7xixTHycyjmsKqGeh2bcntzHJ6DgoRYP4aGS5ZwNC9DJhdJSNsdDvgHxJXS9DdL",
  "key36": "Q7h8GiHWEKia2zRMd1gZWoJm1TfP9h4ZD1gWiBSxVjMU7QmpSBKciGJD6NdCsdRHcYG5Bc8oiGZzvUELxhwx3SB",
  "key37": "4CUKYbRFYEfFwWY9NLzirqvYCYYpZLUXjawFLmS3p3Z3s6CKfdqHLLh3HEMWopA23aNS56WkXz8N7oEvunqZp1Wj",
  "key38": "4PNK1sTV35uQGyNWapvAXpRdJyUESnpEknfX5k1EqX5Jo8WpkpBGAb5DJuNdux9Mzsm2xbNWxo1E7QwJ368116X6",
  "key39": "4ZGCKEPKMt3bWbNLVovdZ1WrWEDuwUT4i5Avt9G7otdoCxcrHfbW6E6f3uuzi6XTqxhvRqj2txCxkvzETTPFYjKj",
  "key40": "5QDYseAL4NxpArqmPEkxF7u2bnxCysN6zWS5UmF1fq6Mq2igrYj5EYnCf4RPzsxZd9s9dshdGdGrHaQrpiHkp75A",
  "key41": "2RhrFg3sL5jkvDqzTwsMgWg6juu69p35HKUKrdTheiXpvLfTdpk7fFN5GXErrS2ZvfCaFPGzvzccimRxGi4ZBKSA",
  "key42": "2NM7DKwLCAXiprr8kdrmhrtwsCDT3BHWd6dLdBqVefa1ZS3yNc4rthUx6PjukZpUTU1B9y7HDUeeYGQ3amaMjeDC",
  "key43": "2G7aZBopGCd5bw82u26Jb5jz7pWbT45XRHwrpMpDCEJQzTwfPCiFS5Ruo88VpYeF2nc2Caqk7Ta8FKiS9EBtLKPo",
  "key44": "33XCVQVz9uP3mfnWy5Kh9zc37RTwmUC8UHJp4J5YfHgxtJ3g5fTb5zYaSPWpRSZyVvowajAkB1VFSyEtweBHMmkd",
  "key45": "2TgKmJiXaNc7KKE6HMDtLfiH25yVmor3i75vtdDd6CPzZGF3mXS9wMD9SgJwCgu4rpd1zRGQFGqhhp9fjXvH1cCw",
  "key46": "3T4PkqUdkqPdwXEa3DrDhPDUDkexfkMbBQrNmGYNjio1TxNZrv2S2cfyadHiTgc29fdz9AMgQKRFsvwbpx8uPoVK"
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
