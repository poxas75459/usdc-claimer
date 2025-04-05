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
    "3EzSMAkHuJQYL1PLi8jeyEr82BPbx8EVio6DpvktsRFcA19UNjrHhb1enR3x3p5Pi5zqsEdCSgRfFmZAtL9QuXiR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3H4mBwSxXBnQg39BMcJ7dKbiiuGrfkyH8bqMPwS1VPmrkppaX28XENb4v9DPSowKYLZZWatJ9qTkvUojVpheVjFr",
  "key1": "2gkwiG7hZrJuq8mmKC2on33wWCUKMEuQ6xD7oPo9bMjzgW2yS8cE2ecEjmJxy6nrFAKQLtHgt6HJowKDsWZpegCU",
  "key2": "21RJBjYnKHa6Q7nnNF8yVhBkBrbyfoi7pyS11Q9ceJCt8JBq2s3Y6VpswPrkeNKWkEVGuuXzaM1DiYAYN75M6xHN",
  "key3": "3wsxL58QTVSi3VTM273G4Y22ggVoHWcLwigPb1HqXfqgxEYXYBoACWyHfFGWG45to4rrfk8LGFi9it3jMzH6g4dM",
  "key4": "3cLWjGzcm6uA71AZR4R1dyaFRD39UG9VBxQs3hsixhovDUxGU6gPwzonvXVQFwexB4zwjmRf1Bbb4GDJVBvUxbhC",
  "key5": "2kBdzafDg31GtJG9m6PgBXtYDB6wgpgnDmgWAUabXfFd4PUgvvGgyDqu6TCrUfoSSoBeVewUdVC281AzQJCtu3Nj",
  "key6": "FsdfQjL1AkK9tkQ1rQ2PqbTq85LFkZpSd7o1RnwACcuQoHpWEY7L5x8XhhhVyDhNDFvhwmry9UYCTt6zqFSutcE",
  "key7": "G8WLFskpxds1tHoGAMcvHrU2xfSgtDQvjPVWgH8QBRv1V2b1swt3vtScC9gzMznWB6PCeoDyar4DatnUZvB8V5s",
  "key8": "TacfB84jvCCDojLUze1JFASeT5WwGC5tg1otEAJre2TkvDPcTgKWfUoRHuE3nvSq5UHkMt6h2G5ByRaQoR4Qaxv",
  "key9": "2SGt3hw2SYTPfAnvn8tWwVgo1gqJFo2RMTSh1ZVopFfeDfuui6cavM48WhdzXMocq4g9qkWtFVhdkoUGJjtYADng",
  "key10": "62yGj4HhMkQgRQtNEsW9Jst7UgY7mmTpyxFdRpw6azhDdxKwEWq9VF6PHmHRYTrSUSboFd8PbZ9pPoxKcAFVeY77",
  "key11": "5nyTDwC3RZmoxwsJ5TPJiGrq7SxCW7tfrqUpZLJYprKVVMA9ESXJpAAU4mrwHkT1CvroZ1y72hqznahymWgkikFb",
  "key12": "2BhAYTvgxfjuAj8d9FqRfkGRwWZ6AfUJL2LSiBksRQVJtQEEJwFPFkNzCETNNaM2TjYowgtS7mTM44qzi3yfMZWX",
  "key13": "4V25UV7DhbnTeLvqQiZWFqF7C4X2S1qL3QtuEckG1Jghno3e2CGBuVjsDie67qJEaRYWjQy1PV8DCNE6VKkFvtwN",
  "key14": "3G5FyEYRwZrxQpU4R6cNgUKQMs3RbLGiogzj2HU58wrgMnFRsKxvorm7wKYuupXeZLamTcF1x9mfShgiVhCoRTsg",
  "key15": "t7GDCoUfeAfCjxe55XrNBhv3ntcuggt1sB1VZDsasRsk37VgdZAxBmbXhrx1dzNDsEt9M2vQ64pQWmKf4VmWXFw",
  "key16": "4NiEhPWWQrjRhvKfuaqkqXdAVo9EizdiRM3Tb6Ct9AkVqqSVnq86GBxs7Rpc4YrRLBKLt5x1uC8Pega1dq6MUmC7",
  "key17": "5QykaWTBBn1EbUfCLYpe7MAERfpTMX9rmZho1KeZdhcUHrGj81HCysUe9BsPTC7mQsa22i26zU4m6U1vLht4PrFn",
  "key18": "5Sz25UEfc8rVtF85ySvekxx9bSpk3XjfRWr3LExV7EKYk5oWod62eL9Q9iN7MGXxEDcpMf38ScJQCtnjSBWmnfMe",
  "key19": "5b95sHnJYfMniyas7GeFJ6VWdavg3Dd8x5W9FBWN9mCT2TUe4sQmJNqeaVd15Hg5MHNRd2yAJqriWjEkkyMk2P3K",
  "key20": "wT8yT4PfnLCUQEqSwSVPSYFfVN2uostPuxDzx77gDJ6JoaadjEy7H12vDsUGB7R9GRLh56bTYBbhDts2hvD6Hjq",
  "key21": "2fPgXjmTYyv3rnW85yGaXd9fQpR2DhpSZQxtN9tuFzzot3KYFJm89WivRD7cV45uf4H3jjthcNkXGq6FZz5YZeyq",
  "key22": "3WRqju8dsgWnqiZywUBsKcZBsAq3x6LWcqKuKvcxz5pHDGMtBgSuM6a3LRqdNw8bS6oVkwmAUs9niTw2PEZevPUA",
  "key23": "5ThXz31JmQjtim36L7Y6N4nRVGK7QKntsWjbjKzjzj6KniryGjrsB9n8zFU7tTmXp3QRSjf4Bth2iFF5xdEQezSj",
  "key24": "2xfEe3fTiVGBkVeAEuo7rnreR86CCnF3yMdWJ8ivj3ZZJieKAn4Ff2FW4H2FyMGpSPtruoWDGuySpN5GZvnZLhuu",
  "key25": "5zBtno35LiWaXY86uW44vRBgGU8UL9ZxsRsSFvQnhtVRSgWdBUvBGb5PNEyEWnSsWYUCz8ckkm3pWo5vz2unesf3",
  "key26": "3NJgGqq1vb4yVDJ7kt2bA9FHdZVQSkSNjyJnwQPjxPT6MeCdBmstgoH9tm1qxs69Lx4fq49gfELbfRuWfogNymhy",
  "key27": "49B9VehcP8FG9Z29rhWh5KPnCcAViTAwSi1mqKZHeNeoKpP4TdBVCkPjZUpBHbuHbAGffDGKd3PjFxQzaBWG4Rjf",
  "key28": "2nbtxGUP3ZxQ16mzoyCUZgNXKPGvowcqTghK4o96DfNo27LnyaED2RMpdjKcMH3RkvmAa2buS7hBniVXRmSGH14j",
  "key29": "5iHfwKvRUxDoJ9koyyLnCgScfFjhcYtYYt4nYEXj8Edb4wNYPchNHprRxdHV6WRV6WqJQvMV99YN6ModJTEUGE2J",
  "key30": "tVLeH1yps11YxHSkmg33zZmZoUXu9JKqPji7L4GyRHC3rCsrPudXJHceX6p2Nh9NGk5wBkoKgEypAw59SMzLNTp",
  "key31": "3GaKJ8XqbQ9rwYXGAzuXkPJ5DUr162Pb3gCA18saoxyiX83oLpoKMLSwW3Dodv4L7Ys8D2JhGpqTNyttsWyFConp",
  "key32": "3Puxr1FDHbPNFQWNE4LwsNc1BBa6WgmMwky5kbHL9pPQE6gDZEHe8juNULUS7B7P4eLDXLAF2gqV1x8VDeZTKwZ3",
  "key33": "3MSwByARV7EmU88yFHiyzPgz3z1qTuNyqRqNDsvb2GkX9jeC6TcAZZwyLvUcSntz4io4zNwkpjboipKmPC6LJxCN",
  "key34": "5X8BFa5hMQ3VAMn3yT5fb8BW7t2HP1UTTTFfeR2oagH2KqepPVJ69gq4sTpf2163HKzdts8wryXaYxYWCPgu71U1"
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
