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
    "5vapCFmzB5YFv6HqAV6KHCKokXEnJhqG6We36QVmtjVsXXsVCAQ7MPgxupFBTCNLnGMxVuvGvymm5YbqGbmtFD6Q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RnFTASVq6iD6Hf7pYxCmcFFsfwXJPCcwtShVwYU8AxQqQvmTzBZAPZe5FFXva2TeNFD8vhnVN2svcbgqgshWCuf",
  "key1": "MApAS9REiCs1qrw4YiAzcEAh7HkkDHdyXsRRwzBTmwPwy2si8Eb1NjC7PbgCvhAZZXw3azSwdSHvGYQgtp5EPVB",
  "key2": "3EystpLYF2U8Bp19L2AbHwTWWFJEdiixMRcHCDZsetS7JrgozqvGWpXQ8w7HKwXnj2MtgPHHbhPyEoMtsibZWYg4",
  "key3": "2MnJoddLennASPADEisgzETSgTBc4FVZrWtpr1aNWZiVdvu9MRPesbw2uutCoVpTontdi4UDVmcieEn2aNJeYifq",
  "key4": "5u88ERw5dZ4UhTuPS16ENjHHCSdNydHdaZfsKeanRsxUCBqKsuruawXRrraeNHsVyiNd78fBNL93MyFpfQy9bPVL",
  "key5": "zLVSFxdWUPCwLSSHZBD8McdQmhHSM1jUQLSC4WwPv8SPVHJrDU8prUD3eVcn2rkgY97mXVZmmjwVqwXsKq5ctTf",
  "key6": "4PDibVfJFvWoGaNRvBvA2f7hdoucxWLAzhb249Y8dUWa8aiXAvXw3mTimXEAKxL1JfXPauirMKuh4AvbhR7xa27e",
  "key7": "5mE1xssBA3KZL2LN29wGBwhqX7BZ7wMmd5FDcxMT2C8iZxqEUPV9xZUuy7bUCYgqq3XP1KE3d1T4coNJSbXbTVxg",
  "key8": "45TUCXgxMG7aAKW1v5F9kfpfP1Di5ijAp8ucndTjbhMhg5tJxcGR7X8JTYWXRSDQQU37iu6oXWxJfG7vsvHEYLDQ",
  "key9": "vNhQmMKyWofAqMefqjDenccCA31XYtZnEKDSN6adKcfLZehUSokJxHm8RJ3c8ovvCCJi9qFhs8w96s8eVTEJWxa",
  "key10": "2oMJGd2Gn2moV5vbtJLKckve6pkkjRXfFVAHUmPMmpnRk3PWPbZz3PLLC5BbELnE3vR2ZYvkE46m9GgkWR5SqHuy",
  "key11": "36TWKBUffzGukfGctsyvsLaWGnS6avktY6wEtLRYk77amzXFMuiFf4YitXkeSrdRqmFPA7S2LTQN8TuYY6BopkC",
  "key12": "3tqNPXFWRgyK8YPMHHpHrPqtrvYzpxo55zB557ifhd8M7ZPCMrezw3hw7WMoZzNFj4RNAtwSD8neScEiHKx7D1zc",
  "key13": "4kSnkY2j2aUPkPypZcampL9AV5nSkXfCCHUEBuJbcMWL5snNtWoskn9WGPFoduMhdWT2EpgzpYB5QEyhNmWVSXH6",
  "key14": "4iXwZTT2ag77rsSgHjMTCwSyKLrRChfaaKfdsJqwax3kYot2w5Y1T26Y1Avg7q3JZJBgBxj1sc8aNmmLBf1e28CS",
  "key15": "4SyXADnaCVfWZRFpM5n2NTjFyzX2zJ52sW1KnKYQ3vqwEhYJ1ZATf25QcD8vnxsD2ARyf8YeUNXXfy8uJuFu1oTH",
  "key16": "4vVky3AYSjKz71FBoxBAkNVodKXq6Ewp49xgW2QrF9fC76XJE5ihkhiZsExXYjXBRGghynDLQqGziCEPTUwLkV8q",
  "key17": "4Mqjk28iVbw7gZLb1UCFayK14mzteBLJTQk9HfhCLAxWECW4nfYBCNuxhYd8ajr1824c56dHLitzEn23UvaU6HH4",
  "key18": "5VVnGtkbCtYHaFWLTEqLGnM7wKfRhqX362uxK5LQ878Zd3oAd85QHxCKkiYVFkZ9Ypuf1p4DC6N2aygKhQjQRiSJ",
  "key19": "3rcER21XHjBzQGATh79iMHt5TnLa5kpAoGMPzCYbBALwmfcvpG3dG6XhZ1KmWVCtPe57h6tMfZHU2EyD3jyTByk7",
  "key20": "k6QGZ9RLyZbQ8XzR4mGJtCbDVj6TpCPfTsAM36dSNR6s7wxHvUv1RkthXgPwsosuSzTR5mPKArHRqCcsPawM6Wx",
  "key21": "4Hv6Gp5mR5rg31tpgrGrpfp1EfQYLpnh6KN59vBuLYRaAEunP4PNivaCpbmbJGPYWJx2TTgKT1ssZ6aVC7ieFyE3",
  "key22": "44b3LrzdHX3DJSPpvdKhVSMtj3x4hqTPzoryxFG1Rm6CpL9zBhWYUJwsDi9ArECcW1i2DewdQn3mwifDTwbM6CBR",
  "key23": "33wxHn65HkHJf8aJ9kWfFyHEe5mxJ2GAECEtyMN8uQyTZH64X7hDLgh2ahZwfKPGSpP9Lqtf8fDXv9BpnDpzGmxZ",
  "key24": "5e4v6u5Vbz2fr6dvXTQBx2PJ4YBbvxnPtHEdTYD1LU66dMgTu93iK4PkuTCnf87HPenFPM29bp2d959kPQaa5222",
  "key25": "5dcp6WXCMsumMMd9mrV4R78us4w5eF1USgZt9iyc3AF5NRzz9L82QAkTmcL5gAMcNSm3Uvp68wbdBciz5YsAc8EK",
  "key26": "4KeLkSm3sfXFccfnoxEd4AfZ9bc2nTsEjE5DkmwKGyncqKLGVanyautsLRWCd2CGU4ShKpH4hyQLxSqRgYxbHLou",
  "key27": "4dyBZKbiwZ6j4gdqkZDUP9BxehbuVrBp3tjU3GK3ve2F2zVaxKJPYZRFXDmpdYU9STK1WWg4MTkcV3REzABfd2d2",
  "key28": "31rxHeM8ve5iy6emDBzABM9dRNsJqosk7ecPk3vXa675V3BEX98MrsU1EodsjMnQs7q9vDddv1c6sUZoEgrHqLmF",
  "key29": "T2iaQt4txE2dy8J2FJTAiTivtg3QVE3bnPhuYjvXbmemsRc4vktxsgVdAzhtAXdF5QytizMni9iFgCwZae2UP5n",
  "key30": "4KYNs5F93hzNf7VQLUR5RVNnEAQtxF1hu7prAmcJYqdoLLSAtjPY1423v4Q8FVt9NL6yog7qceHVAPuCzY1Dvy79",
  "key31": "4UVti4hZoXYMafvuq3cdvZqDgeYJ1F47tF6fsRBbP9yQqNFrJNZXrYZ4k3gYyyEkfKm3YYiQUBMtCzJKN9BREdoe",
  "key32": "4AD9QrC9Re42TSUj6kDioZJiEma3YAbQwTtfcNq8BYzSQkCC3jVCN6K4RPFf4HUhEk6LkCuUpf4nnYMNe4noua1R",
  "key33": "4RQWE9F1FazX1kHZhpi9JPQnfo356mEGCRUBozWwePgJLKAURsPj1sRGwQJrMXJ5geTQB9R6rmKnXrZjFoez5qTp",
  "key34": "5gk19fn3XF67z8eQbfMYtxBrsG3Y9VUVuuxVDVFvJhuEHUpqbxMfQTNUJdh4Yrtzd53geuCornEwC1rt1vaj3B1n",
  "key35": "3UiQfCRGSM1tqkPN1v9zf9xestBumFha9rmJ17cHU4HXrnri7EZ5VigArbsrPDA4QsJAGbg9yU5Z3uNYjG12691a",
  "key36": "4K7vJ2EzyKwN5XxVXt53BGVJvSfbz1yin4JK7CMD1C8rbJMC4ie98qB3ZZZxmCUpvyAoBdPddxxivCJtPi3t79cf",
  "key37": "4LB2aKwNaVksJaYeJfn6prdNgCerYsfksnmkhLUPNWBR8r92doHVfJRXgeKK53tAHRqog5ri7NbWtW9ukNdDpFHA",
  "key38": "2kZH3U7QHhHPXeg3sqDqnK5eeqxPd71xjUv944ukrWmPpHn3hWwrctMPYxRJE7ZAvWBk3ZBWUznQP57V8AjTNo6X",
  "key39": "5QdbPnyGnJmX9jSx9zMcamqAQdCbjuwqa3TBUDV9x3gnQ5We9zRsUPebAt2H2wJ6Nwt3tNRMQFkHZquPgqtiaqUx",
  "key40": "3x6Bh7rspqswWghuZEn2nTp9R6gGBvz2TDbTqmpZJHqPtLG1GXer9GRiMRiYRvY647on1cT63DNFhLFq2FykoYsA",
  "key41": "2rZ3aL3PgFCBuJTdVPGdVJt6nz8hqsFE5Z5VXyRVj7nF4uHiCGvZTDe17ga13QVU4WGNCSmCsCtHBn4i8CbVuHKP"
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
