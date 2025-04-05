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
    "2PW7ZZPJb4kxx9RWU2gWmv742FY9A7mBD4dR6YeNVwz8VTEEomzoNDzcJEGBcwnidZUWGPGg7gpyPE6bsqcnm1Fz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5FiwC1EjPTZmdturyScigXhKmps2Y1rdC6KnefBwZSKF2bzT1PMDHafHh48a94vhDSuxisBAfbaKPPG7GUJA2YS1",
  "key1": "3ZjZLyxmbHBzirPNXsEstQwPxTrzoeC3ecEU2W3eNLBEpghihkGrsuRVbqeKxSTC6rBNMW2172eDYqigr9J4fHWm",
  "key2": "4DzWif36ibdLeBhmumirWsE2LJTTmWSEbhFB8pWiWSEX4ASqB2s5nkmgD9NqGJhS8kRczZFHyH2qLSoMY1Fz4iqe",
  "key3": "5iNJWWFxDJxCBGNH8BezhjFVtZ9bK9FDR5MQ5naouEJU6uD55BK5LWYskY8kPph8MrkGstSFUqPLzVXYhmkPbn7r",
  "key4": "2Dy4Px7P5xnWqeMqW4ChDLLq2kcHupkE1jCUuYwnBoy9rSheVTtaT3VPH32T1eabmixmo2eQxL5C1a5QRw7mwbig",
  "key5": "59FsQBRnuGfRE1b1UYxNQG1aYg93TLx7AfdJqNHMqnb3J5J43zfty7vUwRs2eC2h4oSswjVQKPWJ7AfbpiCr87hx",
  "key6": "X9ZduRpVxS4JXfswezeFFv3YyMD73W1JfzugdpTmrmDnmfLamAXYq3BSPPu6kXHs2FU628AK8Y96gL8HWEPtcME",
  "key7": "3K1nh1hiS5BiLxf516FQRctjSgkcTh34UWYgKefNx7YhnYFVvd8ZMiu6z96Djpr5J8etUbUjrkRNRnWzPYsRyWLW",
  "key8": "PiUsvktRYetCesBbbou7w95dwwCASpj8Qsd2hDgWQX6CxnmWrN4JPJGwHLmUfj6MM2j6UWgtNFRVNX7ByqmcU1H",
  "key9": "3AejiF7YQPYzBGHH4tEBrAocwDqRBwYxxKDdQnSG9hJJRu5qUKbhPKaVucFKPkpqs3Spz9H1Ezk8bRLnVC96u9xR",
  "key10": "3o3LY3k2HYdDr68KEeKbP3QVuuE4mLt71RrL57Je1ZHGyzT3rj6ZNA74oDK1iGwPfToUQo24pZPnuRAyabmxhWC5",
  "key11": "4khSy4YUnTvQ2NJu9HnzEs7dCDzhdVCRQ8iRedFkZDyJ9NdzndhutB8RoguiU4aXoBL3sZ2xnzFo1S9A2XzrPedi",
  "key12": "2Z9kcoUngwj9M5yj4nXBcaZkCyASzq86npFCVE4CJAXb6uvkdKqvr9evfJdy17foRTymALtSsQqCFYX8ZRHDjXP3",
  "key13": "F9uGDKLrj1oowTwUDR21udGJK83EsyTNR7tRbUQvTLWBKuZo8SHADAWWsXPmLXntWXyC6iFTjYctD6QRNtnMs78",
  "key14": "4yYQ3Xfm3WtDbaydLm9tK96pxVaVHczxgvYosWP87k3XbmpCGsetUrY4Vpa1Li87jppLcHVVEJ1GMeVj2BXVm8pn",
  "key15": "3PNiKEJmBXHPbKxJ7bz9DYeDx554hEr2PDxhikYGDohCwsVj3wvxCNLtZHMgrgmTCCLBEbWm9bxxV78qtw5yp7QJ",
  "key16": "4RkhrXust2Ms2MQYijapago24Tq3Bgd1Ya79wh3D747u9dxRVTpM6bQjvfjbmHWyxR7TUvDXNBLqEm5rtqjzo5Kn",
  "key17": "5zvozJtxsXivNEM2JzxUUk7GHC42DVuyUwK6oYcYE5euCPzN5jB3hvm1fprKPfAmzBgJfr495o9ebMq7DuQLS7DA",
  "key18": "3y6NbTLnvQxV56SWGkAYUk5FAmYeYCGXrdJoCSno6xnDcSmJV4AfdbfjVrzjQX3EXGU2MQ2guChVn66N4zfC4LEX",
  "key19": "23nT9BmkRJDi8tSPtJFob2aKupT5N89C4YUUezqTjLyJ6KP7Ak9p1CER6Qi5u7heuDUHH6ZtHTgW3SEmyEukmjwx",
  "key20": "5qK24Gvni2K5fRvjQM3YgogtVammEcbGuZKTrEhkdGGcJ6ArYkKJygkRiagB4L7wEAjKentdTSCTNVeCxTcyV92a",
  "key21": "3jUviLH3D6Bavjt8dHS2UoU6pWdcXAdjut6T71mc93YdVpK4QyHcEbPxfVGKGfVMSqxXr7JDMs5FRPKouVBcA2SP",
  "key22": "4awBvBxMmX4a4smxFKpDBvzjWetUj6pLfbJovgD9DSxfirHZVTHdi3XoF7ZVjQpLLbQwwWtYDty6DQUi48d3xCc4",
  "key23": "4ioFbge9TabLEuxJ1GUvTrbHJ5JCdhBchVdowuoHMj5qqBV1nCjjDzoQQrRViPui9AvhQuE16MfxBf894TCNrCLp",
  "key24": "2zBGhzboLXPeogzUdUqMveiUCUm5Keb5ReSBZoQz6TzEVSTzEDbD8Guzvbaw8DaUm9ZC1k7gXtakCaqhw1rBwCqn",
  "key25": "46DKZLR4vhLAS4NotZh2hkHEoiTPbnmJCrgEzp5op7yBFLm8jZuLqR38jP8RBtsLaMfvzdLQrizb2RgyaSc1eQPS",
  "key26": "5GTGgGdHupG984f6vS3D6PwGRcwkceFgsYnNza9EKd6YuC8opjY9997Vp6Dwd3ZPyCvTXexSZ5h19tRPuA6nRe4X",
  "key27": "4pj8XccN2GSRmECT5xeijur7HQ5UoZhxbRhkzHTSutyhkHUzeVKPrqGiphAT6zggyBV3JdnueL4eLsXtQVWKZCyc",
  "key28": "5qeH7eMQWDpTWBtxDUwYKFgipktJpX6mxhQmiuUEHmPHMRPsX8c6LVtHjpJwoRmEmokjhTL3Yqm9rvosW1a7EvhF",
  "key29": "4zQgTENa5PXgnpJ8Yy8rMWRziWYBjd4eTDkGkeGuuaqLnVdGxQgS9Krtv5b7kU4C1Jak4dihZed3mkst4vSwFSbN",
  "key30": "Crm2s6ZjgixSZmyzu2Xh8tyo7pM2mD1R1obrCV3HWxw41L1QnJGZYdEbVorcaxkJcuGKkaSj6XJ82Avbqn1zSWN",
  "key31": "5nXTf1GrpioV8T4Ub3zuCKrLYj7P3F3jSuQtUZ6QvyKikWmyAf9q8px8986WRwgijzcnf5t7oL7692cUjza4spFH",
  "key32": "29376nhxKdDbwP4oG2TWRxVxNdjccNFVr4unoqdk3hNxUcLLrX6p38CPLknmEacYJudBZ9YWSQvGuKoFRQXgedSX",
  "key33": "4Ar3Z2LtWYQNs9G5XL57bBgDXKoLmdwTrEN6ajQNan87BwV2vAH5cCyRW23RzeLZnwAqDz7Wi81SmsqDtoJCJuYc",
  "key34": "2nNtRsqsYpHRKV63dW4VkJr3ACPVdgmqfb8zszmB6Aovsqu8oSuXbaa2SrqoanCgQutC7Ec27Te5pTQCMbKA6Na2"
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
