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
    "4ZsPQ437fRpKfVkQZCZnySBjwArMoMG4hj55rs5jvD47sZbMmepGrFA1h7XFTbcRDCeUDSWEVmfSQQUNRpDQ5vvg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4Wxuwr78zkXyMvhGGBufz4ag4DYqci9toQ3gZomnGeQrxgVbNdGoa2xMMKWhAUTct164tXfznuy8E6krdRxYX41B",
  "key1": "537KQJiGJZM5VJ4Hv4Ti84wT7yn8EmzpDApPAbMzjYRzWGZAMtskrZ1RxJaNgW8L6wimu1LyEiaxGydxebnM6kR6",
  "key2": "4FCgaJ9iFFUqwYm6aViNwsioZYA93EHhNBf4eY5HXjRw1AhvWteme99jfW3XyEcyGmgEbhdLgZDVDuhYxQdEnSZe",
  "key3": "5fGct17LHVac48uCnmsCHvLT7EvKYVANir1DRTc6H1k1tVoz8cii7ST6Ezh92E9UE2zdL41F7DdfCYCZGb7ghAqw",
  "key4": "471DSULfQJFLehJVTGwKqw2GUPkLrPMQDVvCbW5SnQFqSCfcg6bLJhWZPGtgBKUBAXhoBBnNdp47kzqGoCqh9P4X",
  "key5": "2XoXCkvMWjusgHqozMgZZU8zi5xzaaPE7U2H24y16hggYnBwotkbgRNv9VkdYPkfhyGF3a1zT6h5DfgecjSjJvtk",
  "key6": "C4kG3ZcLW76wMxWvQkkDoPEkzf6EboMqGRe4sZn6Heq21NMjSMZWSeiYuuyHWubgCg4wfqfuD6tJKrxT7bbZ88T",
  "key7": "5G48A8phU2HN9A4kPnAQdVDXUBtWsWekdQyp3UG93EoDFWPJboHdGx74Vph8acdsyiamdtwaz1mPwhH5k8nX2wCW",
  "key8": "4TiLdYpUhzrAwtxUDoyFe3JaRbbadWFhK5XpGQAaK88D4AmNzHHYim6ccSGSsXP1b74UWUphVDRtfTJtsv9B6eYc",
  "key9": "2bWYSyzFJRQ9fpGMTEHxenHgsLMJYHb4eJ69zfzLr4dDuBhKNTrtAs3JZRY7LuLEwR73FsDWHGhVK8LAetbp7kH5",
  "key10": "2RMchoefLfvBgm5XfJTgD8vFNav8t4dbWkTeRqmLk2SyLBdMY61EPMp6X3gvhkzqLh85sscDiDieiUv79ZUd4Qt1",
  "key11": "pWXajL5VLaHmw5ormRLcRzaESQjCkMrSnynaqKTkTC9XfayVzBewk8vEArkmi1xKkpforNFms9oUjzaUXBj4dLX",
  "key12": "3sSSWfVN4T3sKBypvTFiKPU3Rs6osqsRWyxB4sL3Txg1RocMJZxtEmUY8rdtjfCsAV8b6UvxhC5pLsqSJrJ16x2d",
  "key13": "4X7ov6Ype9XDbyoPa9VwqEizmos715QyCUjYGHy5zMNMSZiV1H1YRSUnAqK6EDR2XFNvozC9s2KxcacuV1Y7H53M",
  "key14": "q2nH8pkXu9Ns82XmH6zandX2DZx1tYNDfEeLDLx6m2WqDn2smWR3oN275HcVRTRn8M92T2JtVJMzwmyG11KMv5n",
  "key15": "5Ea9t9miacSWPz7r9B7yunwuPWU88tEG2F7mEPKx9jxjETm7gY3rutGdAyY6QskbJDozWT8LH2m87gBCSJT4N48S",
  "key16": "4NHyFd4iJ4ib2Z6Y7CzTUHrqchYDhcdkvhjZTRZxmJKPkFUWRhcfdJqcTnuQsUJgRXXc1avuXABxfkdgQi919u6e",
  "key17": "5DnNNHGWPxBMjWBmUq6hKxn4sfZE2mcdpPwZePt5QkUXFDWE6v1h88W8bRE1MYmpXxRkAwsS4s8pq1iSW7YYEJ9X",
  "key18": "39Bvb4wgMquC4zmT94nGvnXLEWmAA2yUqq4zm36bwhrm3Nnf2Ud1urJT8h6J3ugS4nEa1aHEjZS7b87NXdqKnvaQ",
  "key19": "3R8kh4EWZijB8YuxmyJ6aw6sinFmThrMoDMrKDa5st1nMrLojzfxz64u6YTKrHLbjqYTW49kheXSEV7QqZgYoMnX",
  "key20": "27LkS5FiQUv4PiND7XfYEKcNedcnGntewbCuEa5ja74YYV1wpSriimeHRPj3nHc1qw529ojTpWAgsSYbyhFXqLBk",
  "key21": "2CBsWupaKScbfA15GXzDBdr1MPDUVfdjsmAXbLUnrhEfTokekBEYbBiBzviE38CzfhbwifzmXBQJXXv2TWrYkLZW",
  "key22": "2euFstRi1V5cFgso9YgNrFPKeeghVb713RbK62XtXzDhhPh3saMqSHiqGUxfucro72azQU27cL1R5UMEhvkw24Xs",
  "key23": "5wEXUW4W67YddaT6EsKGRruZqArdRhWJhgVHzRhBLADX2ncV1QJUhfzKHC17LCFWh3f5yWpQriEqRE9aXRUNHkX7",
  "key24": "5i3oV9v3ZhHvvmi8nx5FBU5zijxVUbqqapSNWPzdko2r7L5XXereV4wVRu2ZnZ3qBvxcQBaP5xXyPqVsgwbAWUW5",
  "key25": "4rcmJhVFHFsB7GZpH3caTzH2y83ZaDSEQhkvcV7z8RrcV6gB8ksVhxTATPpXxkJRsXxLgVrzNHuVZLNvduoWUC6R",
  "key26": "XrQTyK21jXdbZtPyLLGjDNkHxLir92FoWpsy4eRKWLyzNQc4mvt57GRLLcRu2NZv5hybX39nDDfuDY63WFKbGdT",
  "key27": "2TKg7vURLAFjRKrqKEjk5DiuKpwpY8qTEJgNXt89NdYyMKhifeVXsQJg2r6gAZhyARaFmgycVuXTKZ6fK8RT9Pik",
  "key28": "5hwTWY1ejuAeW7pnCfabE8rnnqwi5GHoL2XU3pVxiLHn68biYb5EC28gTVvUoPtDNYk5X4QL2h6x2JDLWGzKW9Nf",
  "key29": "67kaki2DXof2KEVCmdvHqsPcGH6AnVjdawdfEKjZ2a8LRWcntszzoCij5Cg5N3CfeiGwXrYRx9PGDGkMcR6phNxW",
  "key30": "2nWxxpZy1PxG96c8szS6nRAwkSjFGiYievJgP5uLczD2dLDCiii3vgSARsCWttfdVRKoxKCu9teqNa5EVkR8fE4B",
  "key31": "iBEA8cS5pXwQBWeSBnSz4HXX67uL1eTsuw52yZfGmxJ7eJ3CtAJhvx7SzckP2oyeUGJTQBF2sKvUGeercdduwpS",
  "key32": "2raebX7cf4sNVQWoX6jv1of9HimMoSw4bCciwv1Wb5xUkiC7TARpXeMaZPbAjD6hFbEoAfZ7u6SaGo9f4t9ZxSfG",
  "key33": "57zxDgkoUrTQ7qVKJJX4ioUg3w2nzMqmnF2RrxcysoVhNE9EbU4FnzWhbCVHGG2q87U1PZahywvMjyd9aMwC6P3f",
  "key34": "62JY6Y5cyuSnxfsuqS6b81QTAho2mXQiGURhGLFMfhbQ5mqfocua9meB3UMsoDch6DSX4NVTPPiopVKBcPS1LXgK",
  "key35": "4GRX7UYYAKQLcPMoSE34UhP55TMHAaMQcTysY9z1EM3Hc3CYaJNnJFJ5A2B1ujneauf8ioo9xbkFwL77XYPoyQdw",
  "key36": "4drCFvVtiAyT6oKhYNptNZVvHNxYqEgqMfRCYwa8m5uapKUsezDvwJD234Q1S3s6bvweVJQ4EVeyA6kGdEhBsufj"
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
