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
    "5f9tv1EmcnpcBW3MiSShHZT1hMG5T4TY8RbsYA4Z7iADkiyqcFXApgiw3ayCfM9N7knxvfY561muFSXh5qERjow3"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "65wVSFhT7oAHapynj9UZzyruasSRzNKTYcCT9tGBhPqVMyy4j1hPcFDhy3mqVnoDyWCjAzxrwS5wPunG3LH6PLYu",
  "key1": "3jkydUdLHLozCVZCdLTatcnzCQxfKHG8DQ87KYhqzTWeK9RmVyHS7c1KW4xr6KVMAderUcvKh19Favoa5qjGtt3F",
  "key2": "3yBdGcWigczRxoL8cvf6ha8x9JmQfv5G1hjC2bzQogKyc9Dma53KELMQTkPH6bisU18AgaPwoYcSa9AYLoZxoBC6",
  "key3": "5YBk2e6Qs8kNxNPkcqy4ruCnqMsQnCsJEnZFVNvPVyeyVL5WmAM4v5We7tYkqNkj1waJQvcLdDLPrzoYqw3SvUAC",
  "key4": "2cYjZdRRKebnzPQqpc9Wu3v2ZkSVTvfmGC1Q6Q38xpZLpn7XgaS5jjJbfxqc7PDA2zX5jr3jcxR5fuoLZmHvy2bF",
  "key5": "3S2wbe4Nwp5TWxhTaVhjK7LbMx9hS1dnZGn9yTPNgj3MecsCy8KQXvMtsvH9HvbkgtgAQVvP8GY8Bj8n9YLs2Hbz",
  "key6": "BSUuvEvuCo7yReSk2Rc49Hft9xPFTfMUQdeUoCEpT2vCzq1QhA2AsHBP4xoPKMfmvpCCZFBS5BQaYircT4R7Ub6",
  "key7": "2oatp6QLJ5XLUmaHtgLd8NQ2gkiw3L1wB4QjNXZYW1aqSj33baucNgn7Z1Gtko6zQZxfX5bdqQAaUJW9yNSbrtyd",
  "key8": "5w6QmoGoxXxpUAUJjDwsExfRpMNEKRp1CkA58jG7HFayaeAieFb3afDCSZaC4neHAWDuV1qxwxJ2ztKxyGkUUuwF",
  "key9": "4oCfTKVGokmV5QdZMhfXegKpH3FaHXrYKKJ1SoeajcFdZYrGtUvPAV1MVSvWEdTQeqHafoDRobBXFH4ofmizb256",
  "key10": "3Hhyc9HHg5WqHmmN3SkFfr21kzMqvMkvGrobTWxPpkaWvMa8Uyz38zdPvb5gKZmZr4AHbzFQvszeGRCHWRcdB57j",
  "key11": "25quSK4aB7ifL69wxumq1buxDmiv1UmjQVDak1xGhoLJCQDcTqJpz1PfkeD7XNHbgMkB765ttds3cAZR4D6h7QZ4",
  "key12": "p9eEBizBuaAAcjuuJafABsHwNrGSr91ySqfwg59qBySfHDoZmbC5WYqqSiJxQTXx3pS3ZKJ7VBx2Lt2u71UuZmq",
  "key13": "4vVV6ttpo3wJxFAWL7SbQ3oGdRXFpK4y1kiv19vARyQG5yj3iff79zUgHirUnEXXWW7Wu7TQY8RTNWRouS5Ncshj",
  "key14": "65GfYQyhdb6xJk9FxQV39461tr2bV8aq1wwbc4Q3HnrzcEavmLYPPTEzeTmSSdGB7H1WyvziZQzKRXLz2oq5Prp6",
  "key15": "2JazqWgSpoKnrit2xwWqeKjUN5DgPcq5LNEuMH3R52a5Dx2redDDSCqCbX6EUYHtedEVxmhsUxfCBdYo33jQXkn6",
  "key16": "55z2TrNhyPdneCsW5EgbvYzTDrtHyNy9irjwhVAqC7LvS4e1vYjJky4oWx963SYbgVYDJAjAEYDv61PUEV4TjcFT",
  "key17": "48kGb9MicBwtbsLARzyt7XXQTWeAKpeabqgu1DqSayM7DLbyBYsERT8utqh6radkTz5MG1hrg4BbJXAPSc5ANqer",
  "key18": "3d4X52XLyWeDq6fccEdGPNFEfrU8i7mjmT6gf3BE8RwuAg6cwAQgUi3en6xfoJJGXHe3ZQqt4Zh3yZ9zpYwEcCJC",
  "key19": "2cBNnJPXikN73cX1dzDL6v792ys4D3CF2nQYpZ6mKfnGEXRAR8G7hDvugAEerhYDFZL7ViXnjyFNNjUr5RvUBDY4",
  "key20": "jE8ongnmNE7nU9FDYfwdEjLqYcaKTgHFCExTDctaaPDMmUJ4aCiR5aBxjeexv1gC6Eza2cX2BAXBLFZ4t6EzANZ",
  "key21": "4tWSx3gxmrBRMJFgeFg1WJXsLTgQMab1QTLU7zRTHHqnN7oLzVRedqq6tbomQoAtd9K5m56KNxMBZfN5NK5qXH9q",
  "key22": "54MzWBqddRFGvquvJwUME9jX1h919216Su4kh8TB94d23msh3YoutjXRMU5XMoTVmCfP2DdNUTPijRsE1bgwCY4g",
  "key23": "2kzoSfms5jZpDwRWUkUtNEiFe8xaUU3QVNvUtPvuEH8CB7GtPABqB1qDNbGAd7xs1NB4mJX5XVuQ2EugjLHrtv9r",
  "key24": "5i8nEFqThgcR99ohW3uWWo7txoUYj7fCLNJj3b9gWZBHTm8D3LV5erzdLCarMfCZAFPQ1dHUw1e29q4eXCZroUup",
  "key25": "aoXtBHhjVH6HZy41dUedZCPAfRSaR2Q8oiiygkEovMaH7rRrntwZRvum4NmkqybB55n39AFPP7fHEMiE2rhcmcf",
  "key26": "3p5c3dvYmXAW55EZ3Sctd5bTfAtHNEyAripbJ7kSEAJLUgwdJnQ7QW5AQF9y5VVY5TRaQ6vsPzMcZenv3uRqunQ2",
  "key27": "31LtoJf9XFQ2nNoqjfLc71QSueCTUcEzz4BzSBEhy4ZmBXn9xsVa52LWvUmLRkZroFypeJ1xhtL7jnZgavzoJbF1",
  "key28": "4ntMsuZJgygJzffEGjLN75vDqsmmCr5krbPTH6CNP4xjXLy1EdRKKLik76i6yGp4CiR9Lg22UCvkjSVDhn4ekf9c",
  "key29": "4H8ZD9mWgxcvP1K5CDBXNmnRtHYTCXrEUKhx5ua9VtFA5WrQDoL3A2TRxQy4LWst9uTGAzJpHFMXMb1PVvmPrHmt",
  "key30": "44sEfNL4vGcgn6DRtDoJ37FNd4M8S6if8BoBivTKFSGEd7ZtBscgKfDeXsaGnaMnnjGaY7v5tEMv7CwLqV4Su9Nn",
  "key31": "UA34kToxmzUwfAHBXAQcPsvstn3efsnR7c3F4MAuCft3FVhKtEBH3Hx6PNUGxibXvmnja1XvrU4axFnfFWoxwyn",
  "key32": "3yvnQHwEfjUEuxoW6L15GQjUgdQn1kub3FdZ3fGKEPNFwZfC23rUD2RGRLsURGRmLn7UDCKpzxkUQvJUfuHms4qK",
  "key33": "2doQitHGST2vyxvNEvBHgGRXPXAgtyzeyiVpniF9ChJoRmKZg69KkgEdckG5FFkd28og5PUmM7eKYi6AX5b87RLe",
  "key34": "367YoyNxiHv4b171KfyF7B9cZFcpPj4HmAkj7uPL13p2AfmtCtJXGACpRPxuRM1tbpE5JZBtoMRpVTgYRQQj5DXY",
  "key35": "ycGtF7hCfSt7eXTLJnb1xqpRUnLxghgVKaLSa9rJjgHBGkvN6r493tWPwuDsGEPVvj1Y8RiD6rmCbMDhA8iinU1",
  "key36": "3v4qTx7foF6U11Nw1cFBgy6L5TZkDZ8Zh25K144CN7rfHTshG9bxvt5KMEfHaAndFazV6CQ7iCcVLwQvRUCZhEQw",
  "key37": "4g84WKxR3MKVjX7oatqDJGSRAYHoYm5ubAKKmjZAXEWu2WFyQC8ekpahaNkdEzsf2fU17daxYfD9c7FMxso43R52"
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
