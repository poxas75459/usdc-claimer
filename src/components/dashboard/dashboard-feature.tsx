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
    "5MK8Ekjfgod9h6BcuQ3xGqzckZPgweAbWGfUhVZLmHaV93uPhguLywGVKfMEMwLn8eL3jpQZqzRfdCgnNgu7d9MK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3bFoN9ME6fscHJYazmi71rMmNSKBSJBmfuKnfk4AA3JnNJN68FM8G2wrQYqgCsrffnHdUxh5EZfAaWTfjQh6AdbR",
  "key1": "5tZt2RxYjyBwN3MnMpMTKnj2CkPApkm2WxZtz4qka596d4VHWEByQZSfLyWXTUS8J6KD1apZ6asidrthuK5dn6Nj",
  "key2": "56W5k3ZWkHfYscirVX9gydiswf8c6XAt4MSm6AtoXKp4SrP72S4asLjE5HtKJmc9GbLz4NQLNqqwwdADMBJdei7G",
  "key3": "46GwS2ADGT3zppa7ZKZCKtTazx657sDV35is572egiS3eYu8RckpmjdVv6uLT4yaquQDAZoc78hpd58GWM4TZfEW",
  "key4": "3zfH3eSEbgqcnkAH8oq3aADBrQcFJATV8pZ9dtHZL8LcbALse8anxgKETAmoTrvMzijqjLMPMXn2NVfo82Qy2eoz",
  "key5": "23n3dj2Y6eoA2AKYF8K8X2tsMnn3MfHkwMzL89bYuj1jj9nGrY2eQpqLy63BWkNGQerEzzGDZNALL5L4ETMMn1aW",
  "key6": "2B6dNC98ydnTdKfxFJVF4QoSNLVE4MTJjsFVBx4e6WifcNNvFdnuCCeLndCt7hxdL9kTXst8wGLCgAr3TJwo3GU4",
  "key7": "vFhJ1W6rUpagc3BFaeNBSkhYs65CD76MPzFXTJSto2hQPGFGkM6S3CmFQzVKgXadk6VJ5NWshhQ6RA9gtQhGC1g",
  "key8": "PXsW8E1bYGJvibjYKta5rv2QMrHWRCGRtffmM6LAUcibmXcuRr4dWHqMQrVqPWMAXk782wHFbtQeUkHVrVNMC8a",
  "key9": "3V8opKePR7grqDwq5AW6rYbTFmWrUxrVbGarZKVyN7wFBbhBspN594eXMNvy3bsJAgmHoFfzDNfLugvEXFBRaJMX",
  "key10": "w6L3hDyCaQw8NniBh4UcuamFxfSEVznNyorpLKf5yySPjG1m56XpVQMfU3zL48pPesGRCH9QFWz3r3LfGHzLZzk",
  "key11": "4wvBX6awzZnnPjnc9EnziP2jz9XTN71E92zQXPWda47PXQjtLmQhc7HRepU5xAVH3v4MN373m7jkAmKF1W6CD8qw",
  "key12": "3UhExeEomMVnZB5HTmx9yXzyQDgQuydEa4ovuUoUaWLB2nGC8T1bzh59dMaTvfJXpfNDru35TXXPM42iTy3ZjyCD",
  "key13": "VvZ7sFvVqMCPz9TfFP7dogYypyA6Fq1S2XNYXbv6Lbmke2KKyffJafRaqytieF1UooDJBrtkc9VLpjGRfG6Pgux",
  "key14": "3gSpERpLJ2WbWmniBixrhH13bgnTS4TzbdkNtFJwSiD4djQAkP7K8H3YDaAxVawMnV2T9y8U9KUNbMjmt4UHFEFa",
  "key15": "5tpM8Cimb4dQqaZ2LSwtvASy3ho5VxaHeTmhmp4Lby3inotPfGkWbMBhbXiQ7PvMsCDB1Zz2wqD6rexsYaorgxLu",
  "key16": "5tQzzmCpsCNbPiJJwhDJyz4BSpJEdRKMtAitghCp3cj4MYnyHEAC6tp3xf2MvkszKJvfvhKKXPjGtfg97xM7x6FT",
  "key17": "4BwkLFxn6j4mPRGyjH7ugRxsjZYivSAbjHveyBjjWUNp8ejUujChoq2GFcCM2xUTi3wAWxsEu3Y8t5udKvo52oPh",
  "key18": "466QYn4K9JWyXfJVMCnqdVMEatADk3A24A21kGstbFyXGALDgjGbz3e4Q46YQXsEgtpT2CJdkS8GG5eZvnRXsbih",
  "key19": "5dE3pvP9cp9P4tQBmZacT97K6xjJRJcnTBmDjzpHWYSyDe9qa3kBnmqisNqzyP5rna4w8US47xWqwGT4t1NR8WhQ",
  "key20": "2h8dZ9vt96Ay5ejrVd699P8GETKN5zidaZYwwdvzVaHYuqHxEnwGSenKrtxXDzAQfiwUEXE8nXYngMnR6JJSdyAd",
  "key21": "dR3Ke8p7u7Bf3uDVRSB5MMvxJUXmH7tvS2TPjJKjAqqCr84W5qfuKrhdZ2o3aeSpDJdpPW7H7ho8kNZYfX9xRdt",
  "key22": "5u9FgWqauuY5xZtbBRjfQmfosmjSSS39JPhBdaZQTdRNQkUczKrEpngDG94gQ49L8u3p4hBzYjtGsAa94yztih9",
  "key23": "34ahDRASpajH8MBatFcMJxKEJRsQ6JZDnR7sGjWRtf9XGyJgcrnpbdfQpKaLF5rftnmuhjFBqvTihgdqVgLpRnqk",
  "key24": "572KFB3Z7Tgj8he8Uv7D3cvoBXQ94hLgTsP6EYGQYYn5k3dq4Ltri2ZAQYgvdLQPvExtiRhRaVkTwEHQK4fE8hJ7",
  "key25": "5MxEpptGwa33LaU1x3U9knXxzeGuam1FDDrufnFyFZQgWc4HtP4Ee9NarVExiLvyw2ebpgU2Pnca4tYuTKCUTQtR",
  "key26": "4WemJquVz2APUWv45an7kd9xrRr89NVKLhx49cs5fk9RPfrtkLRWH1VmaPb2vvf3BtdCFKduCmf56bLziK5rSdHj",
  "key27": "2C6HL2iwE8HDtup8uUsYaJQ7AxX3Crpc5pwrvCwTCi5YBBXfT8KFqFsMxfXrz386woUw2TJ7G1Rrrqc5DQ7MCCz1",
  "key28": "BMHuSZDSpTMrxFgjKhVhhc7F2sBNox2goRx8KWYYWqo9BsnAwrWohQ8fZ9eMEKnHNDAGqx4ohmDP7ncEG8FaisU",
  "key29": "3N5uXvQpGaV5ip7f9VVTzgD13nrejr7XTcrBiwtPWEcL1dfdR83KaJCmbWQjcN8zQbcFJGwbEiSgtLPMYHKamjEE",
  "key30": "43CLTAXTWr8kxFCQbdUirLStbfv8Q4U3ReRW8e1ikA2PTpvLUEC1kwvfPi3hYq7j3A9VGjHdVA6ZN5E4FaNDPBvr",
  "key31": "3S4xNxFRVfXg5mGciZX1tgNLDaEdx2H8yY8pkoMvNnZ7JJnbBgPmFQMXnzqQjZ9B9qdwiouov9BYsgsbBnHvEcyd",
  "key32": "2g3mCGa7oh1oYp2LHmaySnyhaa1FxzQWPk1pXs8zJnEPuTVT9XYAcMffwAkstraUa8f2VapgEpnePiPYXE6qqC8c",
  "key33": "2hTonNN8GWojwQpnEX9SuJdwuGNNt293SZxRwPtE3hNcecJiGdx7GsiPYXepbwE87VJr9eEZSBYaYEHnfMtnXHTr",
  "key34": "ow8ua7ToYYu1QaQRs1yDV9cJwRCFPJSZJp5dr1KG6Ne9ArKbz5ZqGXiumKqJJ8uNNx7qMyyCkmSXhhutoaFuAXv",
  "key35": "6DXNSMDFq2Ls95nuSfMHqWeLWTYX8JhKAfoBaGdN5AnYk7LtawVPzsJJv49R1McezLEY4sgmgKRzFtBzskRKLiG",
  "key36": "2yxfUsY8bqEitboeGqVSzftWD6GbBNvdEXK4B5zzFQuDWhEN5WmQB1tVWnTJmp82oAEMyE7B799nRHHEeYq64RRU",
  "key37": "4qrT1KbDGpNe67PhB7bkdJRJqJWdhEYFfLsMXjRT6hWZdqGHKfTsAiNg68nUgmRYQUtv6vMo7ZjxBmpnNMcQedyW",
  "key38": "5WvGN3evVdpPMuur5idF3WzYoJwdvDjQtzs4fZX2SuLLznaBNuA4MNTHREc6JxRRJ4xu6EdfkzUNSGCTSLfkgJoo",
  "key39": "5u8bVovDWtBEz76jW4QzzjUrpEo6C98eJ21N2iAvtMKjT1RhRv2etB4nkcBB5tPa2L8Xq4QQaozW9QdpeEpTi7iU",
  "key40": "4KnrGRPNmkCUxR4E5hbC3eea8GeS8apHragj4Mo26gkC4myqvUdVF7QePrsLwtXgbe9wM9FzL6SxTX7MPau7yNhN",
  "key41": "26DH6PfagCz5DUXh2HHEkYPfG3fykMqxP7ajSFtXWqYyNfupKdTkw2QAVbyRnRxNj4FvXy7DvgFoPXE54iMcLaEP",
  "key42": "2Sy7PSEwcszJnvBoFDaF7vxYYaeagofMRdfjnu5aMwBye6XsQN4t5emAwNJCTJMWCwsCBjTQT3worwg2ggobD6tX",
  "key43": "3fxioaNjdMHgFCjMHdnGTRcEJgB1wM39FLmoBnJmXBy3BDaS2DvFoaKeUR9HBRfGK8DZLY9ZY6k4Smd2heMfeZ77",
  "key44": "21pSTiyFV1a6mAwqP3V4h2uWUh2nos1yUh6tJk1ePpEDjuvcZvvq3gFUmxEmz7Kz4kgNS3UrhBbWtxAj6vogFoH2"
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
