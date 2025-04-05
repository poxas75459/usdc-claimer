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
    "4NQKSDJGi55WLATTHe25CQk1XCSsyUxpDKDKZEfugYTnAShBifq4NJyMUtDvvL1G7ALwsFRVgDmUovBeUKc525hw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2J9kiByuLfpikwKjefBc3FUNh256XWUccDZvoQ6a8z2FN1fG5s4qawthR63oU8XxPs4YHvMsSmL8LZ1bTrYhNTca",
  "key1": "59VbFCSuonmWtjrzzE2seMjwsoqScCi812ewWpzSPwWuVg61D5ugpvuvW2Nr1XFG7YSYQ6whN4nskqHVqjJFQb7h",
  "key2": "3NAGqhJ3JdosrRKA6o4bgtgFVMsJoXSaedsG5AceZZNdpgJAbx1zz7ZLTmQr8oCHnVasCGmuEPHkUW2CJmt1HWUL",
  "key3": "3LGoutyTL4z3hch7bKAxvEjfbHcKH3rsQqo4jEh5AwFbVmX5RXvyDgFd8M9yDEuCrFRTvK23ZiDwiPqG7HRvY5Tq",
  "key4": "5dwib83265x21SPQHvRz4s72nPmzQbvUuRAwUoJbMXAKbVfp2FqBPsVAmUgxaJHYcoSX8KGGYgERmHL3saV99eWW",
  "key5": "4MRUBNnQzFanUvibi5d6cdeLrj1EPmV6vaJ7wcYJz5DmiQrrG5LJ5xzF2fELb5BdWygMq6VGw6zCqPfQL6nxYgfW",
  "key6": "32cKqUBkJknDDcaSu3jjpDdfGokqDWAc6NF3dvzaCuZTvfEvRSH2s7NZcjP4dp3hkB81vyVfTMkYztKrZdonuP6f",
  "key7": "3sXYcoKThNdUhCJAh3PE22r849JDYT8NcLS8agr13tphQhpjuGVoq3aHV4j9UYoG3bz3gPU3T3wncDzEZzuswQQ5",
  "key8": "3X6B45ZFDgiWAR2p8XdXd6bCDqqSayDzXcJDp36rJSEefEjELCK778mNjWuh2rp67Jgig2mp41jkiJvwSEEFfgv3",
  "key9": "4sGj1J9YU5AK57dyD2D9SVqbfyqUz7p3dsQTaiW3YqVnWkq5SFhHhyrZ97PFq3Pd6PiECaKGqvUqZJQcaTrB2RZY",
  "key10": "2pZk5qfcLWKckrDQxYzTq6kdPGVen5xm9KGPjNx2ZxW3iQgoTX4Sq9URb1VwV7DHRfVwpaiCdZg9vsAhcVqEAyeX",
  "key11": "3aYVd3Lkg9FkFJSnJxRfLYSLyC7uCWhh5A7T7je8SkocF6hEcphxvwGwQtTrzsyLhFKgXJ4uqmPXy8udphQ3S3t9",
  "key12": "3mdWAbXM8Y2Kr7kxxypv3mDSvJF5UiDyeKQXYsBUFb6tj8wVTM4m9889QSwqN6MTihQT1NT5CaTBdbUQHzpFUrD5",
  "key13": "2RohMpHDHNjaN3pfqe4Xu63DiqvUaGWsYJ2cc6vfbr4jFSVxwetB89ZoVmD3byJQVjdrNcxGp5evG8GhMgvMEPxi",
  "key14": "3FGHM324VosfJC7LFgQX9vdEC1G6dR6rbnNyaa8Yn3FPP59FyAjUaEieZPj9sBDD99L7cgoU26gsRJuwqdgQ2uMp",
  "key15": "2A1aKBa6JFZX5W3WGioZxZ525hNvgncmuPqYXYSxs5gLzBacjVwxrePSFpsVGCV7fBHWfKBHB4CUNGmFctChPcKR",
  "key16": "2H6DWpzYri4AAuGsvB96j9pX4QjYBLHB4c9QrSkWL5cvhhgm9BFBkNKyPHKNF8JJTNUBNPGnGuX6hQCwBtXLxkjG",
  "key17": "3jH7mUxGAfsreWMR13hWtA7kM2v5inW6Lsz3qEGv6qTZRHVMwnpf7zzUsSkJTumXzqAVMj9zH1RtAhkngdJ8dHfB",
  "key18": "2wipBHBrVeLfYSAhnWs6FA5k5Adi446hE2uTzdFZnPjnBGqgk8gFQoYUkgk8M7aGF6fqp8JSPPH9Npi2uqu8cmVT",
  "key19": "2c9Nifs5DG8CQ7yCuqXqvLYXqdGXP3iyofGL1MeA9nPWMYb1GE9rdL74Vj1y4YBPKCYZF8np2kdrdNFyUcrKPXWG",
  "key20": "2v7nNWEYfJ2DvTXZVt9BCveH6fvPGFStMAXZ9h3utgxn6hGKNLkBscJmmNc1qJDTXmAmec23UbYbH6Q8Crp2riFx",
  "key21": "3WHcANPiagaHwdP1mxTFKB6W21gDWNYKe1vinNr3d7VY7jrBHQHrr8UUJsSPUNvjczJAwtLfkpeCUzpHwZ7ySmgH",
  "key22": "XbfdCmhhoVMN9K1QCGmbc7KgCU9Fq6UVNA357XE5L3QWDT9ssxJfqNMcbTvGGsLvo6zbH1t3LNwBw953k2QucrE",
  "key23": "54K68WdKVPBheyurQRcbq3gxWRMh1wSiGwqqGjKmmkgZFtk2sE7ADcd69Fwu91P2SUAHaGV6329TLreLAjLcLQCR",
  "key24": "2goFCc35tzJoQPSvdjN1yEL7Bk2TGQ7wSd6vTUKzHPj3MDpVTGReCb1HFUZDC77ofhv5zCDgdCVbXMiouypuqwz3",
  "key25": "oMk7DUd59Xq1uBrmHynFbAUF7GWPf217P5V2Ly7s4EE7smtyYetPQtmDrsjZY7cSh3TZRQ62xm5eSPAvKBXrRQ9",
  "key26": "wqnizPhbfRRjMAcWSP8vJFeRk6qzdGDaGg3zpYfgBkFHtrAModzmsoyF5SeBJHMUcujEa2zmN8arDpt5DkciCpr",
  "key27": "2Co4LaKrjAm7dRcc4GSMT2eYUMG8N9Y1UHjcmCLBmj9H2REd1ggSo76M84RpjZqd4Fzh4UpRd7JQJZL1AmLQCr7R",
  "key28": "2kwYLHh81YjMFzmuA2ave9bqHWywQ9u8vx37ob82JnZtEc7z4UnZrM3iZ6p7Kry1RbUtvkFq5PDmVbvbmJXJEXv9",
  "key29": "2H8FVsXawHZ3DwPXfb36JXqPXYjx6rwxrLPov6vUy5aMxAiBmULHtCzTReP43aTogUrERUB9u6CxTqnA6XfK2XNU",
  "key30": "2CrqM6dYdL3YZMCHvaSGQoNMKLbFug3j5ScfatHKDoFzaChWhfxT3Us78WCdAGL3fd5ceRaEC8u5JtDKfWhtpZR6",
  "key31": "572qrN1PCC5zwtT1cJAU6AmtcCiYVMcSFL7Z6ArBj8xVcDoozz1d84omDkdSuab1avSENVWn93u6Qb2WDKBqNePT",
  "key32": "acRP1FJLGLZSKCVAJLV8SsjmXN8MT5BnUqUeStRu13oBthZHT9z7YwWwLFFei3qUH5W2awxwmmvMWpmfhyqzPSC",
  "key33": "4DCvULeapHxvfQrkHEGeYfadGPyr5Mzwrp3LHrdtAfR2pzg6hA7sxHrWLekBRiyBMJKgVAm6RTn9GaJutvyzQYkp",
  "key34": "494RA3VEKDP2f3oEFb4cqhUXym1aq39ytym1bTR3bgzx6QGBFvKndteTzSdnhh4r78cxU5brF4PmhZwEkEMQL1kL",
  "key35": "YbkgVP8TzyxKYEQQVubg3JBN4d9i59ad117nKWGSGU2rWQeVo2CCppqFsw9sfhcC3Kno7TRUbbYpjE9mBLuww2L",
  "key36": "2J4WKnXRTZLrCy3jtVMz8UpFaeNG9tcEZahj7BYmDfjBrdRrdEGK3H6c14Da8qwtZNAXwrQEPbbcss3jCowvW9Fh",
  "key37": "4xMmJvjyWwdtvt4r398RtsZiygSAerDRuAaYnUksB9PvGPdyqJbc83sMirMraikTqfqWWJugot2vPxg8NFNGXtp9",
  "key38": "66KavXHf7d34FMMZQz68Tfc8kUaSXpK5CZK9Cwo4rKjKStbDTF6N39UfzhASUoeTRESc4kFnANMceyLg5SgXaq7S",
  "key39": "rHMTjvosNZEoaJroFnkJA2Qm5XzLqYykt5sQZYjubGDcSqYLXvH63GJWf7gPiaGgr2AnRcGuY2gmwyxFiaDFBX3",
  "key40": "GHUjD3Ky9YXwB31QQp5eh7vZmcjZE7q4YQNiH5CB6guBkS418rtoZdM1PtkD1hpiBjpH7rQgp8m3LswikwokUuc",
  "key41": "2YZjTteZbZRHMQuN4a13TxwvfpBF6GhcSzLucVUYD4yWP4hau7W2RJruDyNm3x6Be6xMQnuuGdcGGZ3N4YVRJ8NX",
  "key42": "2NEssiqxDMmKLkiDrJmaX7mmQvP7cUp6dk2oNVCLodCKWKnrEVWGh6D8uiJ2n3udeNvvcDsPv2wimuweRMJJCz61",
  "key43": "5ggtwM3iN5rkdGVfudBcUoZ85RX2QewPhBQ2UaYiSXB312UJovFpXmeRWyPJZdqC4GHs6bb9a5vMjThjpF5FxhRQ",
  "key44": "46hTQtTf37RyygYK42HAk4u21z9TBEoB6wsLzrGw99rzvm4VzUtpmQaTMrTzmCfT15LR7vpeMuddAzpfT4aXTs3c",
  "key45": "X3AyCvQDZDZDrh1Xzky5XxGTs2eNzgEHAMMWEXmRAziMBvzxAUm1WnB3qMz9cqbzuVi3Zh2dvaURYqqxnX6Xgur",
  "key46": "2kMkFy7DGupwncJAy4Q5wstZxzieJWZfNRvNq3ZBtsrwqicKrj2gtVTrGEkNjm86ZhfidJUz6p5zc3WXBYGAgHRz",
  "key47": "3xxLN2TyVYKScfPrhrNFXHNG79hWt4vPnzp31W1pdaBfxPh5ACeoUiSrG9EgoBmfTPmgPGk2ovfU1mdL7XCCyd12"
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
