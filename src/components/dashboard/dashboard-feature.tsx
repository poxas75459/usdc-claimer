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
    "8Em59W6ex88EgJUj5ThH3p34EFdh8ogPE8u7rBZFaZetFsCdSBL1MLNPUjSG8T2UY5B8Si6rK2L245T29UbSt9g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4UvVxMXYoyfnQa82Sjr8x6V62jkbSDPjqowD61AMpUpXBYRntoFr2GBoKr8UQwjvLaoGQPwumkFBcdqoodG6pxsA",
  "key1": "4Jpbctydb7L7jryHrryuqXkRw8Jk6h356LZEE4oJzpA1ueZ5kGejvRkmjifSJnWZgErJvcR1o7m11kQ6BhAQGsGk",
  "key2": "2KWBbKDanXqaowT234wShJyVrCVu9Sn5t7sFffVfmGGYAGaEmchs5byvs1hEtAVKZN9cndAwsQgkPT8SG6dD9LZB",
  "key3": "3kt9SKBPskLgEexEXSJSAa23zC2Bd4nrnrFkFTAf7MtvwbbGhDboJp8cfAVeEPHrLEDQaXHYhJAv4FaEDzhb4QVk",
  "key4": "2sZU7ytAg3Jx4q1m4wkxo9cHCJkATUzSCwPCsNza3jE2LUXhD37Ln9pukaud4uV9XWtJrmnt2wz2Ey9mpdB8cJ3f",
  "key5": "5scqPrPwdP9Mo8mYvwB7ZE9eeNJyhnWhn1F2in4fHmUSrtFnFo6jFgWHbiDnWCNjx6rBhy71Bro9mkezq5icynqE",
  "key6": "5JAgz96uvhrYiuP3gXX1Wm8jjsCcBoUAm5ZHbGJXehA3kUwM8q4f3XhBMWj97YKpZNq8o7Qm98PvMz2f6cB2YjNn",
  "key7": "3zuDnmtj6P2bMGhc6YJaMvg4XjUWP9T2K83X5WWQPTbAPsigecnz6HBtkHSMUkay1dbm9v6jukuGRGbABp2JQjoB",
  "key8": "MH7S25Cyq4doDA6gpZNLhbdeiMD8GxfiTSKkhvWPHq92Cf31XXCjjbDbnau7Q98wDKSZ2PtFdJQC17hr3MS8dkK",
  "key9": "2KPdpTWVf5HiWdoLZz2oQ12bLq5Bav14QsYB76e4dAEcaBfUe14KuWYSkAWYgZyH9bTMoyRb3YnseJZKmmwQwMXA",
  "key10": "eDmsSR3Y5mvXmVw2vds6E6Ecc1P1MyBTzaK6h928FGiG9tbi2xuYmUywS7TU5VpWkK9UYQBVGU5NxdUz3aApEXg",
  "key11": "4WSfdXkmg8QXUvU99Cr7BbLvFFs2MN2Ek8pE68kCcoF82yLKCCjD1GZAgsVZWvEQoec9t9D1DypF9Uknt1h7dpUg",
  "key12": "455W6x4Q4vyUUBcpYHoMngVWGuAFkBu4GaQ3LzQvgYqV1FsxU3yJ9yr26ftTD7hVfEhbxJH4XX5eUvoXaQdprPY9",
  "key13": "4bunK4H1tbEVVit9E55krtwfYfJomgeBNkcGk4SK1TMJUjy7dkumq7sr1kDBBWu4LqvNLvBHzvDKZqVdcjBKtKaj",
  "key14": "5GDVah85xSoueqUsVCtrdWZVAvGgyZGZqWfA2NgMuo8fQmn5c1qGnEuL8HJdUmuPK9ij53p62JQrTcKvwEsM9zx5",
  "key15": "3VWYz54YHEncKFNhXRhRJcRDyDBZ6T6bcdQrV7gtNZKoh5qSMzw1S8WrY7jCZFmCLTLUKaT5YWzqG51HifohqzfR",
  "key16": "2po66rLuUZUCCKbfgmKT2osUS11Q5yVtPJZs57m63tHTFV6ZKnQiPHR4CXZtpCAiw6iXoJuyMaRmEWC4UNmj7rbu",
  "key17": "5MewmhtMFHXuPeovpWH5jV5KofahULDvqvidjnUf8ZbWQp3fGGQTkRfw6S7Dd9ACH65XD2X7yEXPA79UdjpK7629",
  "key18": "2vQ524rjs1GonYq32hqDTw3fxkSXXZaLiW9nUXNW6Td3uRB2xg3r3dUN3BiyjDAuRPc7bGUBjJWpAHGNbecw4pRX",
  "key19": "38Meyn875EvyC9ciout5wq4iPsmEtwfmWAQXBiRidg8FMnC8EY7DPn1BdC7KTzP5SpNvwtGuVCNhe3EoxXxHACyE",
  "key20": "4h459iar8YXVayFBwtCKNjJ1VPjYx1nBiJbvxwnPZ8FdB4BbaPvsqmJDwFPCf3KdqL27xQGMg6T9htNPKkkRVBAB",
  "key21": "5df5X3XhPq7AsGx68sQtSvbCeNDCjHfa5yenkTvsBN8XFjj8rR2jnqNLrajbG1bD37Xmo85D7pFH3NeNg2Eghw5s",
  "key22": "3jPpVWkroZu3QHX2ZgSpx5Ewuq8Qa1VXpKtamZdGm3taeCC3sCqkzHvN914Tyo1TfN8Ro46qh54LfhMEWqikszAw",
  "key23": "3rmPPgFxGxefF6BNoHUbzaYmtFtd7qqqhHqDqN6Ravm2YJTsaWcJpXbGkTSjAUTjyCCTu2puK8gCU172bsQ6Bgfe",
  "key24": "5rFUqC7hP5FWNZgPpis2NGriiyZrpQ6wPDXFC6bevzGSkJ2KwxDByWhuoYSqnzLkZEp2cHpchNZEVR7nh5aZoquj",
  "key25": "53mhJjSbHMRS4bLckxMSXBh2eeu3UAd7Haw836gVY4X21jFAQwEro7qfgj46h74xohpR4vkFYTU94XHshZWs65yf",
  "key26": "YtKDBxMewzTkZCWvDRp1un39Vkm6s3oW6VNkfwSDUmJX28fuvAgsYNsi6ZbAmVhgLzrxfxY9S82sZqkhX3Q6GSc",
  "key27": "3ZmwA6ErCtJ6vESacHoqaLSER4f7jbc2yM3m2TQhre6MWADA7WbXbZCQk9ynpcSriKDQwvLFsPKr4Qbvgw3qHL9b",
  "key28": "3hJUKhC2mcumuUgrBzHsKbgJaLL5pCdFNPARXWuH7QQfdfLGQZC6t5DjWrDnzLcBoNTdE65wqWAhMVMfLd87Yfh9",
  "key29": "aVNatimUydfHcshEc6Mend1n4xbkU5ENvyawXqnFCzR3sf52dJaUuzxgCb1cvVyCSakENF5PQ46ykZ78SonFZ84",
  "key30": "TwCNCDCHooChiZhyGuNE6ygSa7xeHGVxbQU939C4RBRK4EkvMygUw3mzG5AEpcLGmePmd9o1kgdtez43gu42fey",
  "key31": "2DUsgAGbq2SrQR3jbZ9Z3C8y1cgE1svQcEA7r7FYvkKH8cu3gUEYkYfvKp4SgbaEWfp1qHqW9nNQbi6B3RtBs8YW",
  "key32": "LbmHKEuy1NdznVpUB1eaa5RiL9q6DGsm9WjNDYeMJWq3gwRPErxXeNC6xjwLDjribrxzTgFCRhKywqEHZAwddxU",
  "key33": "48okLTQ7BMQxWvrSd2YYTC1PZMScAZiw3fxV16oD4Kee3NVuAGVhTREErUidWPvYvvT1wcwX3U4AHYfpHrgDz4W1",
  "key34": "3LTFFtykWPh4KZYwfwD8VThifomf12tQhTZYwdBeMeyzFLdJrCwq7emRCV8h8g53uBxpi7RKKrX8NRwVLL6v6Xg7",
  "key35": "24oRHknxBfz4S8pbdWHYjrkiMpHMCXcpcMj3Jsv3r1FDX24ZgjLD2zxyC1U6GxXsd5XJDAJQhVFH9ogmXoMb9NXt",
  "key36": "3yYR4KQkGncRxqgTsDtzLGjSQtoEyi3qb87nLY94Mkikid5BbS8oM19xejSY4psTSwCEL4bjvR28hM9gdow4A7Eg",
  "key37": "4UPXymrEebpkUJyEAFK59Ko64ewRYEugtSr121Cqjo9xZKuiRfdtCGTgbVx47pJm7s5XAJt8VtFaYMosx2gPQaN5",
  "key38": "4fpwdFndhhZqARjVEUsDkUqEpNWHere3Cjq2V6ySYbNWuzTNhFBCqeCLupAButKw1kkNeNAmKxqQc6ZrJvJ1SC36",
  "key39": "5or9HX8tHmNjWj1JSr2jH1VDmKZukMjdvZWoqXgSFbQyL5heQxYFtPbzkVyLsdKZq7TEmCjdSrzoCgfhvJ7h7bRs",
  "key40": "25Nww8pgMcFFgQidvdinhWtJvCcJTRMmcswbL82KfsjFsn19Yr5nWsCXbQ2mnNR9dEVDZNZNa5hBpmjYWxENTS5S",
  "key41": "4UpfFAdYDJAF1MvonXT2XaD1VNAPvSUoyUKuPW3Luw1Jf2psiW3GedCSzhkkcCTA1MYBnf2URThbGwZzmtRwY9wr",
  "key42": "6iJ4yKFWzBteJNASsVqLrB1JSJ2seFVgC78DK1nQS65HCvtq9BAZZF8bVs7tY3hh78DPtqxHg2NeUfmdPPEk65A",
  "key43": "3y98htMRBFKn2Mci4hwTumeyULokdvwrkRVcTLRzobTAHVb6thMmvH8jhGbYctouaQjQHm4vyLP9Gzcb1EoJzyve",
  "key44": "66NAwz1YcVBfpfQwi2cKWLdCqJyTa5F2nha61K6WMSo4K2fzFwXQ6JCHLqABB4mrC8r34ocEZ3QBRgH9WohPqAzo"
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
