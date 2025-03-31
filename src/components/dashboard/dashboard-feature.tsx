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
    "2F1dJUc8CiYJPYy577b7YbxY3s7DU48P9nLHJDSXmH5uZrnPdEJPJ8JbL5JpnG2KsernmG7S3KRh16NXgShnqUW1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VwCftQZNzgY7mH9pqcfykgff3Z5cfotdzE9Khd1i96pvyNAyp83F168PhbRuGomr1RJ5BgY8yDJGozzpinsxmYB",
  "key1": "4DQakTFNkstHLhudzSpUFvZ9hHtUkzEaeBG9iyJWNHZELvGseSCHwUG9TKurgCgEHo3eC1TqA11Pzf8hpXBtpJEg",
  "key2": "4ePC9Kw3JR7QZuCtifnpFUCnyQMgMnssoDEMjBpAdaUNr6xgjyCXi8CsDVhJdedXBWnt3LJkv9BCRtM2FM5tkfZC",
  "key3": "5kG3B9GRUbXXtqzU4d4NUZ41qVu7WTYYfW3rDoAqHW9vSErC2J64Epevq7YvhyLSwHmMkPZVReSJ1LpG7DPB7y8P",
  "key4": "VUFtQvaFNciYKwxU5ESCYFVrCQckyo9vcg82NBJNXPhmtU8sNXycKev4vFdfkS4qc9bCcLfpoaJ6TxMudozoYdY",
  "key5": "CoXRzuows1HGsbyUNJgUXKHReAWjwUtYGkR9aqmwcmcTS3yEguuH6VHUKdRmvtuhNisKeNroXGg59byVqhpWhgK",
  "key6": "2QisLkgEGeTcVqhP3WLGJwnct5tRUQaBHdX7mfQWdhG18uYhVaun3Cxb3hENMjsBJXh2JkYSY355N5nKDRX9scDf",
  "key7": "4Jt39tSSPUVX2jSjjttHu3ZCDAw4sQuKVftXQi9ExGeB1MyYx5Rdp6pyTVJzuE4WGXJvrTnQ9HxLmnHJj1EWFEPM",
  "key8": "5GuTAfkgzqktHEnaWAuHxVyQi9hnfcG7kbY6ZXvqmxjXUQrHNieB4c9uisxxpzizjaj5Z1WmnpdgEnmkaGn2856o",
  "key9": "5o7aHhApbQYt47tRRn5MLAqcfXzGYggfZtRcTXQh6aByFZAY74UB2LrEdn9ewMEWw8GrmSgzFQNn9emRXDJjSZQ9",
  "key10": "om4jAeMg4qJjGCgQf2s1cChBMx2a6dTZojki5DXG4m51kw4gFyRwozn5S4Ai7g4iPK5jg9nB9eRfYgcpn5tfB7b",
  "key11": "4STBo5BZW4KbZigdZvvmEBHvJ7UfFS8ti6wRMZpUj7Qz2oHazoYekdCFy9XVdT7KMH8pYKGvjjL6BnospXzcXpAM",
  "key12": "4qd6hSsUHt85mUBNZcnqnR3gJ1wQhfMarXapFwU8LmLKQ5Xe3cgyHJSoDrntAQuTnz8UVSCQdWbiF27h8ERffAt9",
  "key13": "5pxivApRdQG6od1p47vcwDbcSAFyW9TdH4R2GSB1XR6H6dSnq8gL9Z3nJ21pKrQ4wLhkkZZRqwYfhkY8ghLiV6Cd",
  "key14": "2ng34yHmv4T8xax1uZ1j5o97X72Y3WgPMSVuSTZqchXSudTqUXKi3KLhJQBBA2MVSbSWqN2nacmS6dUYMLopKgb5",
  "key15": "5SpxQinVhZ564uvt9NtfAkPwTKyCvuugdbbebmM3GppV3EuPsqGysFgXieZgYTkCL8ZdtgXyVVcFVjvvWXs2LEBn",
  "key16": "3o8rZHaHQsbgZUcWoYdMv3uBovW7hgokdkDxeynwBVCmCbwaSEkdydU2GSvPr6814VnNXTid88duagfg6yUFMKJv",
  "key17": "2N9CEj28qyJSubJDahhmE7eRaY1KT21nnaXQSsyUTABDCFghS2PcoWdjJ7chPnBiCBKESyGs6P5QGLmGJGHWS62Z",
  "key18": "CHDYPzyoroHmsGRtk5jSRuxnptyDia3G4Pip3asurEg4ReDagtsmLE2vvytqYEY9uLVP1GbfAew1vhUzTiL9AEq",
  "key19": "5e6ncDdwUhkow1A7apS4BNzfdGSwmFoEeF7KVXVkymQX2GBMkd3iPjPLobLNZtJSwH572KDnFSU2NZf8YMDhkiM6",
  "key20": "2aLCG2muJi6PQamwBsSskm8VseLKbfrgfD39d3fLVToxBovQAfoKySgsVeQbEFvgdQ3BLGumZAUzvEfcArpeBG56",
  "key21": "5s1JyutHDgP138H5tWa15tj4NtdtCfuzrLWejr5rgMczUApxMs6sgaWK7gAjdxjBTgxEUNcaE237jHK7iRAiHyg3",
  "key22": "2SpV6EAF5TrkyX9CBgM55fNzbex19BCzojUyZdBEEYy6xVTESBFo9NRuHVxN5dXt3R7WRVbddT1RuLaWJxpPuMah",
  "key23": "56fp5jBVovfdfVmG262dZy1mEknETb3FZ4Z93zcrqoZw6atsTUEFnHDNp9r23H7o7XQ7Mr9exn6FGdTuHxhMbhTK",
  "key24": "5zKaVUwRoPm4CiBNcc2M98tgJzT7f1nMDAu77BWQkmaJd81arWfcrmuAFMuD5fzUnv7q1ixC4ZG4WQSArGWp2972",
  "key25": "4WrVMqcuHGDTtCEdcMHxqbynpVviAoSy6QBb6brSYLJSr5gi7MvyLhk41KSkcaoLyGXFwY7sqVjriPJSYEvB95bU",
  "key26": "2RhAX72GnA8KGfUChcKQSg4dcRMae6aAMqVKRq84E9Ycp4zKg9AvaKKTrT6aHLaG5ndv3BvJH7aC3pobNoHdt5Fe",
  "key27": "2enL82z1LrhTF5iGCwuBV9jzePuHLoEkdhMQ1cNtw2n26nqK8k51FWypVa8miSbzW8E7XP35a4f65HGJZyVM8EAq",
  "key28": "9xqpqQud7qCZtPrsocNJFnAF66GsnSUsAB7nBLz3xD12gxqAih8QdC5oS8vo7AK7E9Er5wrtjhy3QnVnkDkJQvv",
  "key29": "yDWeSnftx5hCCGRRmKkS3UVnVNXjP1xx2HZGkBDnqSQLu82AW9VeBsTRWASU2aEJ5sFxQR8HJSr5Rp61sPUhGZN",
  "key30": "2S8FebGTNfU5osin8dwDGphCnskoEkk73VgWzF1NGytMgR8fdZuWMnhnFo8JuNnzNUfz2DRSy1uzcsLJzwD9hDxZ",
  "key31": "Z9UmX1qi7nRwVVSXbwLznmmvUeep5rn2dojrF7YCJN5S8UcUh8zesVtv1sY3JnPb1u5wMF7PCVgA9J7fxfoVK5t",
  "key32": "4TBAq4K1U8GuG25fcdp4TyQxRCpuHdiZjDDTn9CwhExFYuoWA2HKdvhkwKGikiMb9Tpz1WbSYBcSmcJehmV1v5h6",
  "key33": "3MJv7bYM5pbrF4MzjzPurpNrciZrcvjGNT1TZpmakLQjvFGTj1z81EuCspG1X2WnFgsroBAbvxUmB3FpuGKZFhhf",
  "key34": "54zyEeKFB2PkHPQtWfRxVUcPihBKxc1rB7WUeMctju2YGZrJnXWHPGfmEAa1zKuoY3UStczJ7wB3TLnUvdpU1XuA",
  "key35": "56tLRUKFavxbbPsiDaNSfAicz2zASba4WmFVoAKaLR5y8dJitgBgzqWDWwDUFvRzzLCcPCpk35xx34yRz9XTbnt"
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
