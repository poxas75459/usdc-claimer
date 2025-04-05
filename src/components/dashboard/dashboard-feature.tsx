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
    "2CULpkMGonY4oUNBFxGavrat8b9UMfBQYqDsb5u9Bi4sukHKoMWud88S6LZ9xUzPUgLyR5t1Luj8nuztbnBrRir6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "54zQ4M1mekBB5pu9GXVoyWqfRXnTC2RQKkRpNkN879ucEDhiSNUR5o1bR6HzADzoQqE2ajYaPYbTQgZxkvHhobkA",
  "key1": "4MfmzZjBmSweYhyZZjXPCVJRDWzfJhidnWyUF5H7ZQyY34kykNRUKWCqJQzvC5nbioGhP1TDJ8fNeFE2g31t13Dn",
  "key2": "2TYDFbSUzzc99DpoQrsYMwoJtjZZV4kk6BLBabHkrnVwKFgP4Zaq6HXD3XUhcotciH92W1HBnNtUJaMrgyqxGTzs",
  "key3": "5eJYPH1FH5EUnBbsst5TdYC8aU5BsLnnLDGqMGPxMR3E8LHFw9rZojyRamxqUmVYnEGq2rbxiQ5VvukGnZARRwEz",
  "key4": "DRJP2PmjULNDH4nmGPxRteRH6DKg7feQYP2ovMUSxFRgVhSrXMvrmJJefMHSXnTB6AU4H5zNKYXmYfLP4SAmbRN",
  "key5": "5mF2W7YHTd3WX5yF6zGgsB4vmWTYyusrFk6jYDV2MPpWy2paYWHGjcHr525vXMS45nE9z8BP6fSaYsFRzZZSvuri",
  "key6": "4ZEH3B3Y64GZXMDTe9tBsUUyFNit4nDb9bYCJRYQ4qmdfhKUye9aERKsCCTeyeyhrBHxZhkWPYBjfPM8R4mrichE",
  "key7": "HeAEo2y6iJZpChvsfCXegrZEkkFmJXGySqLAwSUAZkZgmD15JyWw2RNRtbtasYmumUR2HWTn1zJy7u7KedvsAU8",
  "key8": "3gYA56Qicped52a7hyuHMpRnwavHKAGXryJN6BkoqaV7FrvAs5djjb8s584yucPcVFV86xGsYkeSPSa6MEkgdJNc",
  "key9": "3ygMaXJ2K8yHmrThWJrFYNmLis642sj7QPXXdnKERaKRidsBXHimsqSqm1BdxKe9LBXN1HPj5Fu8f4DgSy2wWkdu",
  "key10": "2wyZnbRKTLzLSz1e4y4rRUNvtEoQnvit5f34yC72ctW3DagVXfVZE7gwtkJh2LiG5u9Y9vdsVH7eqmsGpPLbyBSn",
  "key11": "8Ryc3gAu6r4PBtL67MBdRMWyeCVjT8sZJPVF49rPZcBDQR9m8YsVG55snKp8EA1AWVQk9eDWYS6hqLLsBmYzVxB",
  "key12": "3uvWhpvxkoQnqA4zWE31rXyiGbXv3dVebzwbiuu6mGnwafDKcxBQTrur9SvKUxXpmqyrYf3SV344mcHJneJTCcSM",
  "key13": "32jwDvoXXpd6wH5Fmz8eEbJfmL6zRDQzWN71vZTFRAT26pZC3yKpL3bMTy5z3RLVC5Xs4Dc4Py7TQd7UD9qKNbNt",
  "key14": "1jJCRVLc2RtZs7dZ1yiKTNaBbfFaVGwyLxcgDXrKZRwhy8rAPXvVuj3dBUVZdVukHds2SabQS8wPncWZnou92mB",
  "key15": "2zg8uYxSCFSFQYKoQT9PNaU261HDMLKshZ1uZ1HAFaumWWBpwbdJ9QsdqLhbCUVR8u1hyuZ5cjPabWPhTBRsXLj8",
  "key16": "3N66n1CXPJEiYqLLSLoQpDLj7Qoww4cfiWcfwnCzNK42Cjr5i2L2bWuv5HMos9jJedF2qpquNX1WcYGxK2YfHHjD",
  "key17": "4BkE9uVqgzZNkdXmMVFxHpXKGJPm6JExur7ScEJ9tpzNDm4mLtddnmqtSW382ZNDZAe7WRQCpEdUREYDCkJ3vgoP",
  "key18": "P4fpgWdtXJhADWqJHzcxVoMpvHvU9x5SAbcNrXHjh2X2pBLkqqvEpQse8LSoQdqsa3PTXZKRMKwHx72DtJGRSZw",
  "key19": "31VGQssLykVGF9EPg7S8ybmJGQiRYSkVE4tX34uzxDabH2T1U9ovor8bLHPRWSEuHJSb4mm7weRfDsLqvRFyuEPD",
  "key20": "2Ayh6DQkMEJyCaLKP6eJQyc5f4ko9EWMMgiCac6Hb2NUegpLW6smKUqwgr3MXeCsKZwktuVJFXDGCYcAwbe2o3HH",
  "key21": "5aPisYPYqcfojRDDidyyrWXD7MwuNF9oH5f37cb9cjhLCmEcyTxnfcpCMCSzZ8FG9dKujb4TY2XEnESdJg2ia3oE",
  "key22": "3CujPBMUTrGkbqJG3a6VHCoQJi4vj2jgMiazhuMAmnW8K5KxREAAXG9nebwxNtk9NLPT2FRfRQJG6cFcNGZ4PPei",
  "key23": "5u1VLDPSnzMBj2EM8N67yj4KctuW6DYNZzjkjX3UUpD3ZU5wTvtPyuuZ9w4WRTWZoWGEBVRwkhJroSzpacdJHkzq",
  "key24": "2bTc6SxusdP3zrNnrXF1kqc3fksB2PoKnQTQ9z4bxLFkoBnMJpiKoYNq2UK89wNBKmPNa8hsrZXiXkEc83JkoQ5s",
  "key25": "ydK1FQ5zjn8MvtFD3m38m8NrNCndQVakytLCt9uFUR7uTd6iJ1dSVmd9sEFhQ6BBf35ZwLC1undpFPQ9aBx27Rv",
  "key26": "3y3CwewfCmh6wDnSxRafs8QeDFSiQveD2dWYQ738771SE7fB2oDUcekFhTUq9M2AD7hADWP3hovwshyXbAoAcHRJ",
  "key27": "3Gt5vjc9LAbRH3YTUzsYhvK76GBcZXFkxwtQPrE2GaqX1rb4KuZGGRSKVvMWo2tdzJpGwYHJHwr52UZqJjfKrC7C",
  "key28": "HsRywjPoMV4UXDysdQvnLLarse6pVhc5DhuTMCtmnU4d1EFiMjyrVZwfsPWy6PMMAemyVf3dYsQGfYgpKfhqqwd",
  "key29": "2gaRjuwYiqjHYa4pATSh8DfbdzR5sseULbkR7jovc23dM1R4DHMvPKwHzoWGWqVx9NgWbrnzQVrxVm9df4BgVkuc",
  "key30": "3QbXpBAE7fX8PP7ZUJMNYCkM8dtkAsCTL3tRyyKMEDDBcJZ3gmXB1aSfY6rQs2UP43aCE5fqfdQd5w2p3QU84mPL",
  "key31": "aTho6eMj8Cbxs16eqn7knMhFZcAxJi3ah7dAMM1dHrkpUf9kbwqdQ3nfJqG4Y5mJpk9cnUYFkF6huTFBoGefPWN",
  "key32": "31nkw1khsc472Wkz4QfNnctHtBqmUXqfaRJy1UVJQczTVp52YZtYhxk7iEYrwxp8d3cY3XcFp4jBuZJWuzb4hj1b",
  "key33": "4cdEVBMtBwiBXFbCqr3aRbnYebYSN8SxucwnFbkXfXFxxzqvA2TfQmGv83NCpurDZCQgNFtLWAmzKxBo1hNojzHg",
  "key34": "3voNn9mScMBgM2bhyfL8tY46zvDSZ1kxocFeCpJVCvMWirHNHAFpDUboPBGWWLFz9JEUU7hYtATNnVNkbQSdkER6",
  "key35": "34FguEZdhy7i94sXtZFhrTD1RBc5cz3WsxHFYA1QLCKLsnvB3KazDmp5A1inDiquCWNXnKnjesU39zxqxJ2HJ7b1"
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
