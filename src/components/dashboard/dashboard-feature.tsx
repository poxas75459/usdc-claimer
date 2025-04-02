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
    "5CZu7ff8rViETW298K5J5cC3tyfSxLo3j5gakqfB6iQbarTg1SYQyHcLapn6pdjKAnP4WAxoczQiftTNkqbuKkRb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "hofNUrahx22K77K8Lg7PYqyLDVyvFKUqMzLaETih2nFJ6dnYLYJ5RXhv1fAzpxLWnhGj59k1zLVYRBA6XE9Suwd",
  "key1": "8QqffLkHhSEwaUZLUFGMDz3AXXkSsirND2fhL5mfNAJEgk1LbkXs8tBvxUMSaSvA82fZw8mYhJKphovUWUuJmoP",
  "key2": "4ZU2CXRnAMGFxfYv4A4qReLrAQaKi1HXxYEN71YUDkSmUG5DPBZytnW6opBFFUn2eea7APXWWdnpyPDjqzpy8H9T",
  "key3": "mvxuoRYYCUdffdKf8GCW8Ey61NXVjYUkCux9w1ohHzAMipPbz35X51TMLCMqkYExa3GHgwCqHBA4XdCs9aQU7KT",
  "key4": "25GwRdKPXhmMVVRUCwaEjk5ocYWNWWGnk1VEqspAJjuDiu6QDsn2ymUtoyzb5rVwdW99L8Ru4zheq7dX27uCGdmy",
  "key5": "4ouoXBowoT6vfGKhrivJXPs14xg6f1fbAEEVxvTCN4L9pT48wgLw7B6psmvykXou5diGPuJTCvFqKmyEEpeYfWuo",
  "key6": "2YyeVEPJp8XHB9F7MCayej2o2BbCTnckG1AkSH6mHLif3999p433SvYBaA7ydAAW4vaakYLkzNS6YCXbUnT2WpLq",
  "key7": "UL6EcL8V3j4EmRNMc4dR27pZs4xjruyBK1RvbwxcePX5xt3kX7AXxWTYJkRuChapdoRcZ64CMkZbS7ugwfYGzDs",
  "key8": "55TuHUgWrVjEDwAGZ2pnRh1UVXdJJ7RZkLtozZCGj7kwTFQ17k4PK53SefTvQk5zPWTRYbfGkNujxQZofPuNS3d9",
  "key9": "2PXnSHCVyBiqt2Es7Ver3joBHecGzeTSheSeQM8H6rV7ktKbtwFNjVYoX2EmognPnmiYA8L9Erb5enMT5uiUZBWY",
  "key10": "2wmZDFbg7uU5EWxsNH4vszVLyLcxCukP7a3RntZG826CH1jhVrAd8eSrbiga6Cdrby9NHwvwH1yujSfBFoTUQp15",
  "key11": "4WgsvxGXG6HyZtt9RJg8BqMrxfUD3iKUYvLQHqoqsJv6ZN9wy1sxt5dkmBD3PvzCtuZeAkLZJEA8Gf8fbW46hBQA",
  "key12": "kVu9hTraKcGCRRbxApsa9jWXmwJYZpsBPprowr5DhYb7kwbWuarEg9GaYzxE8DfwGa7jRVCknN4nDjumTnd8JEg",
  "key13": "5BQHKrDn27SxvpzaE7aZu6kv7UfZzRDwcosjTjRP5LVYoHMw33SDqjYweXpWJkr7bRNFQamFtb5PLRBMmSHNbHg5",
  "key14": "mHtbYE72AaFDyMh8WrUcHpTZkCjT4hgMYQJpBAvYhfk999GGj3fvJo3Q9F9v4hm2zGRnVfpo2fhYMrgRCBHmkex",
  "key15": "5JbXg6aXsWHaYEAN97v4a3TMbnkD7zUrderpjdpMANAyDiMRdwYGokxi4Gnd3GArH56u8BHwPtffcYpjDPZnVcpU",
  "key16": "5KpSPXvFg8LgxjSeAmZFA1WeJc4XHVTu2SHCePDgNquMXPfGXcdjjtrxoP6CL3CcCYW8Vw5yWcS9EJkPaZbGixEC",
  "key17": "65DWtcicdZ2gMRKPChmjhAboyczVh8dU784en8cMCAJb4A1uVvAeCpsmNkkqtbc4RmBpWr5KkEgRUW6q9n3GML1Y",
  "key18": "43CPDY2bLTKX9BXmrwT6YgNtFK8HS2rFdM6feYQkFN85CbWt9aZqgHncULcgcGv8xUzjEQw9WyN2JbRM6PhLBDdz",
  "key19": "2sphX4PwEHnAskBDdqnWB6uX4NrQP7yVLHuYE9N7n6Z8G4r98KuBmT5SgDCbATztZfAf8aGhZuqHf2S4JrhxTWWr",
  "key20": "3479zmGwRvYHtbXCMztzqH2dKX1NUgQP59ZFaDRtqMt6N8f6HtGCCX2RtvJ2AXCZvwjxFJXiRXrnRao7ykBLmsGf",
  "key21": "5jH2Bsv52Y6D4a47ZBFK5EthywuB77jjUBkxUwTL6CKDgYvTZ28cPguEbE4X4RgpLDXfJobsqmrNs2EHPE53ykxz",
  "key22": "3AmfLEHKVGqhQeNZ6nFimEoYrdhcwE3PEc3P1DjkXmGqpcwykEa2qd65SMF7hCecHThNa9yxYi8UBXsGztJ6PX5A",
  "key23": "2JoPqKjxFFNX96pKMJnfBwvaczZxRyfCS6brUbFXEoTKzECGZxAbsYKdc2AzJx6nZVUyig562hE3553gje66yvgk",
  "key24": "4ghqXuJa1tLCJcQ48Gd6oA55xkecY62zSipGu3jdskAcZkXh2XhepKKM5CjMpKztSyLsagb2mshKrDzEgPCprWZ4",
  "key25": "3Pq1p78M4SFcU7nUi7SvbFbiPHXJEKS4LFT5mD1mArnTeB7STQ4FVmKVKk4J1yPgds8QHgNY66StqERCbjh6wR62",
  "key26": "2p6bTXs72yLojkGsPhm2pBuQjGvQnqqaZUvyunEpcigT6zA5A8B3avpyrZ5cKQrPLXXbKX5swi7UUK6qvByiWf5R",
  "key27": "4VMxRbKwhhSo9wwtBLydcTU72FGRVKXd2mrDQvm5jLAbvrWsweLQSuQoFcSZnW8ZY3v6qXDEazs8mGc6GdxuXXCz",
  "key28": "2Zz1dLaCLYeDJHtM2GgyA5P16UyxeTEx1Smj2kVZcy5wF4SAh5PgH7ow4BoeFyL9HjEzxhxNpfL93tb8f3iFDCt4",
  "key29": "4GxTzWYgRfwWoEfqao9JFcePLQqXACHPHSWUDsGgEDbxR7nw65GJ5Hddc9A65hnp7dyfZ3ENjiyM23ZBkZtN7MHv",
  "key30": "2P7CL4amS2G3UXBUpx3e7vB7PyaXXwxxkwqC6y1Dx8871Q4zy94YbFutjzyWG38EQF7fpqLnYvJmcov9Y9cKkJDs",
  "key31": "5R73k6UdrYRAcu5U9Fzp1o6qR4FyLcgf579uckgYcdPqe9pmpXk2Db8KjLQ4CyDA3VgJCihbVxJogKX4i2McRUnz",
  "key32": "5hBvZj9CdcemtChJuwrCzV9pYA6bbJfVbMyXN4KXb5d2EhzqK2U2Kx3JPWAo7cHXT21KyRpZQ4KYGPSH1wpWJGmC",
  "key33": "5djNk57yCUVMsS1dKvsRZBUB5UbmeBdiHHshyybqshmD1quc2e8SqRiLFBTnoY5xeYCoTwNGtDLLih6gjbH9WfWu",
  "key34": "2eMQjPjbewrmTjTaRv3waeuNC3hMs4Dann5iULRsLhvUNqxFqhjJBvU7iX6FVDpWBHGDHcAFaVMawDxY7BwMS9xj",
  "key35": "HRG7XcXd6f8FbyAGwqZmVw57ninra5Kj2fqnnS2eskaeXt29KrCm5tXmoAnnDwj9rMhgZuewdeAZ9dxyYw8Seuh",
  "key36": "2M3Zd1JLrD5oiMpoSjxRjsju7ezdVpNb8vxDBhvMAwCcyUt77jwC5j9PCvuvZNg1NVdf5431UrardgdRM6MNfsJm",
  "key37": "5Pa2BDFAnX63Ue2fmeXt6LtuHPFzY29W76koEbEpZhEZfivoYk27ZibSom7z1UCREtv48zTt85ADkVZJuBAHU4xL",
  "key38": "5kpdgtURw7aAwg8EMYY6LjY62D8u4K1Hsrv9cjwfQakDpdj1yeqj7ZxY7eXm3FZTjzHcKuSx3C5Ref5rPfa54VtS",
  "key39": "6ABnfs6TxwaihtvuuHrQnZ6at84dgrsgSaf8pcdLDL6iHnvw7zTYHofMjxygGuycnMW3zc49PBa6vbNnxFDF1ak",
  "key40": "3bc2wnXBitKRS5cMsmGn9sEBHvKYx6ovAYdoXQRoW1FAGuBrbD7SjxVAzLR8HN3cP5z4ek9ZaQ1fujSsRA6iXQih",
  "key41": "3kxteDR4xTLjfbmEhGUS5uErAsyzHnonHx375D9LAMrqP6aRwjEzNfEmj5YdPMkkZk1jRj4dPo8DuBVVe8EDVPJG"
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
