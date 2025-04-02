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
    "2pADv8YuMJ8uq6tEsnGPwNE3vp3mQPsoWjYZTsydVFTCAKsknPGBkFG7Wh6dxFfMriCrpy9aCDtjaVeD5VVvhFXa"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5sMYGctt6MmAhDq1fNaVLUxThiuNYm9Li5x4PYNTGNUp6vcSfunT69dSDTKs21doJApE7poGwHnbznFjgmizgNEN",
  "key1": "5gd4ir4krUNkcUcnEvBDzZSTjRez8bNSefrdHscCxL9eceZBQ3iNwH4sHEskNuh9hj3GmgAcJWrjyNMtBU9CTEsP",
  "key2": "5qGYB3GVVDn1Ng1mAdNnguWh89JMGgqzSmDTQJwEsn24FsZZ3CkafeyT69B2FccZCAfHGkuyg3DToxssKkBqGyo9",
  "key3": "2V9bm3yz9ZW7FNGjWxex5FtzFgj94sLFjLX84kVruFDuhaaHPQJwkjXUBqTPpTtas2gMUZvSTcKpCnQRphwJd3r",
  "key4": "2QT2JPhdtrtbGEge1HqAWS3sLFMyNfrZsD5g9emMVpKuBGDrfyzRBXxbvSnH4p5fbSXVUD41dLgZWh5tmUSA9q7K",
  "key5": "5bnGTR5YbMN7D4ePint5x6FS4qz7Yt53TEvynmBFmwjC8Rmc7SZd8SSTdA7mZ8HFA3ANUBu7bBFXFuwt15i1DGx3",
  "key6": "5wBKbGCsoywPZL2FxuasnhgcM5GAoaWxvfaGNsG4cCvp23787STv5GrqEwogFSa1kyymdy2AMBWeoMGbxwLmUXwn",
  "key7": "3S1VUzgAgt5GcRzY624fsvyDMHG4PoZLSwo8kUcuahTC8q7zxAJsmSon7gKF585qzFvx818DYYuVysxXP6sp9n6s",
  "key8": "4djWjqrty72LEv9tAojU5SHJihQh9KiUGo6e5x8Ry976mz69w5thgLfPb1ji5fRitRfFsBHqsFfeQtUVC2714szL",
  "key9": "3dZmCfh6zZ1S5r9m9AyZiLGZVAeTP7MiHY88reYXQuNVsCcmUBhmQ6Ffg6YuhwfcQD2tgzcE8YCwmsx28whX7qTf",
  "key10": "2wcktxyhCBiU1g8v855tF1tAUxUbdmmCVMTq7D8dkr4qb5wjJoajH1ehrriVMrne6WHorqN6bAZpD6FDWmdsfB56",
  "key11": "2aCNejsatULuiWbxCP3ZGJdd6mvDfs4Nwrpbf2k4fyx7qLsX9qzS5fUhuHf3i5WH5nk1ai4SKawr8gUjNE85byWF",
  "key12": "Ldb75LF35scuwNAGcLRA2FkHJM1amHtLVsZvxEwzjp3p9nCXBLgZxtinMmt2fAW6YpB3Qo6UYUVMjc8jbRoP6JX",
  "key13": "4Qdo2at1CAuCoFwoYaHLsMYAcY2udeL7cCyKydxJxEp36b8coKwD2wJPRx3V7z2mEsWoTzptZf5kjdY5WnvYGqQg",
  "key14": "3hxDBydA5fQhyj9jVEpAkcgQaPgsPKYps2rNRycXmtumnupTyXGgZtdHiVS6pv2hGxVctee4cmfDS3orVNTCwAuo",
  "key15": "4JhKtQoBPUFNmje8VLzqAt8XoMaXB2zXDMu3CERTuQZXQMYe1SLLvomEGWicP37GGFCggsosYNnXySWwHERYXZkL",
  "key16": "4Tj682q8zwrcGeRMmckow1TRYVeRKtcqTDNVt8bdSZxVfByJ19Vku7xeoDn3xLQSKmQt1GBDmNwjs83VQybBXdZ8",
  "key17": "GjhoE3nFzgJ1w532njBMg2u3thKvXNARix6rGTvSJCkNuCgtzMdE2zctRge9o5zqYYYLnwHxZJway3hsnriKsgX",
  "key18": "354X4h5sxaWZ2wVFFVfgYmw5smKjp39iQRksHM9wiK4NMwtkRehqxCrQZ2WK6kUMMwrujmLqLepw4caZFpnofAN3",
  "key19": "3NpPX2SwtAGf9JeFLkd3SVk8R6UaiPNSzVWU94VaxDhemDjzNhQ5SLAe5aHCNQctB6vS57Yawzt2ihTFpQCTfDmm",
  "key20": "4c9cBKE7CUqYq8Ez4Ly4gFUDBaXb4UPGTQNb6uQZwwAW3ducHupjMcUEcJdsHtyhvAj63LTiGYJ4u3mMpDKhaFx5",
  "key21": "3z7PoHhbAmvaiemNrGrqgbqWrvZhQ91iJJKNyPzg4KXfojTBNd4gtropdSjSR7pzuSADvoZdQgrheSuRi2KignZ8",
  "key22": "3tQxGRf3UMXCSF3dZ31RJBioEoMH4xgnq65BE48QN4RmHzjgqFgHitBMgMQYgG8XWX4PJFqwZbMut67yZknEUu8u",
  "key23": "XTisbqu9cfi2xzGT6Qa3M4SLMcFp5v3MbV7Pygv1SMuCfeY36snfQUgAdHuFtrv7XuJFkNCKFTZYR6527DLG6q9",
  "key24": "311hVUZucsmouRrtG24RYTgDxschfc5hePewzU13rVsjTnLgnVD1s5k14BASGpHuZMHrDDUHEtREVthLNfgjwART",
  "key25": "fmwRShmS7PMv426D8p434bt9ZyoKMLG2XjSw6JYJD7caB9zBkhykxDHJVxTfEu4L4GkExUyK9yRxATDiQ5oDZkf",
  "key26": "41Zw4Nx32YuqpefPeRyEbWVrPoW21SHnwAyDQZ8rNk3SaqmvDdpvUkX153LEGHJGsb8uaWAKm4KS1pAy21HU9aUf",
  "key27": "5hxLDfKGKTQfRoxDTpR1WDZT2EspBESai2zZ3M9uiwSoGra6sGrAbzNQZ3JjrM5hjzGpAveRuioCA9C2QmN2k72P",
  "key28": "53rG8PzjJ9HkPsTmQGz1phzUL85xtL5bd9pLNyfpqe8b2YSpmX9C9PqpLZJaLEqqmbP2Pf7bTFqmZmvKM4Zz5wk",
  "key29": "55BXdF86hemysj9Gzn6uNDjPbUyQoJMz7zzKKbeJXoqFvjqwXZHRpcnuq1LWmRYEG3ecJAQhSq9URUFnTgFehyxp",
  "key30": "48YBSmdVv9CyUmvqCWF2NFMhTLxyePYfSQ2T395dKUoXNWKhv1Wr8NVzh76eby4XFo5haGsumQ5XsYHkd9iJMqJ7",
  "key31": "5Ni9Vwyvq5UuG4ym36e5F5oWhDPWPZgF4AJj36ubgMoXgfKPRCtDATb69Q3ZCSSx9UtjfMubhmcq4nhqS1thgeKt",
  "key32": "4VmsdkyxGDup8qZLZtAcoQrkhhBjFTjUSYstfXHKok5MYnCb4GaNUM18vVuCpRs3HbCQj4o6AwpvH3ajJR3MURpb",
  "key33": "4f9exjsQtJbP4EoyrGGD5dMpzTwxsJxvbNAAqnn7FmsvG9yLqdC1iSBEUMdTbSGq53hRyVYqVrPEXwxWmqX5Be5q",
  "key34": "5hoGDFBGN4MaTgu4a4ddiRbiN6XuJeKCL1gpV4t4qmJ5UryNjuB7Fg5P8xgPNhed7Lo5so2L8HKhcuDjoA4UMP9F",
  "key35": "2Pqq9m4jVX3J2FbAZbgqvNKwGXYLTSP73B4x8absNWpPu4343HLjboL74fWCJiKMxyJGs1Q19orhPTp4cRzXHqLX",
  "key36": "5xMKHDmzyybPHkoMXUwbXWZ1v9uaLJXXZ6YxSUxbheiqf3TQ5KkxEA3z8u5LAymByqRURszgWt1iGogsSeT2L9af",
  "key37": "4qKZxtph54hyVYKYvLb8tApm7CcKzjzrDDDZs4119Z1ZH3y5ohVZvUKzUrbwvmpWJCTQXk6wwUeHaybRdUs7AxRP",
  "key38": "4Ea1qEsV5ytkwp5z9kYbwJSBNd8XLtdarryR2c2swWpBJXrfBd1E7bMRSxTDgUe2dMHHAvfmWKWB1by4MK7GXhMn",
  "key39": "2wDwhwgnr7YA1pajfeRsJzogdsTstb8Z3tLsAeZKrozfJwjFRfoa57Bit9GM6nTLySykGW7GfpG6563MrXDLJmCY"
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
