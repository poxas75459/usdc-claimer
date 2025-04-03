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
    "aVuKmP5pY3LfeLbg1pYNYtguThdRXg7PXw9ux45BTGsv5RzHFaRdvEy88aeKHYGEunknifcBoMr2DCL5DVvNepn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67rGK9rv3iPCkXmKek5WDKsLfuN9M2c2KCrNPZ5zmt8A7Hms4vB7T1TYgHDRnACpZm67MM45yFXiTusTaAvPEDEn",
  "key1": "4wWXgnUzUuNMX6cJTQd2heSqQbVqHi3jd6BdCakUDkysuYX2ky4wHRvjC7537Nanke6EuKVSFdEvj1fyTvADjD7H",
  "key2": "5hRvmg85KyNE3noncGBpHQDoV3DtGikmE8SHT9jhSzNiHhqzzZYncHQPHbNKzLnmeCETo3Z6UzEZ6xw6pXe8USJb",
  "key3": "r1RdS7bF4A7WHxCE18LzryuMcJpwL9tayaBwWUSNbaX8Ko2n6xLtUhRNqZMVbL1rKrHi8PaxU8hTp8iKBjb111o",
  "key4": "3sMfg7haDUPoPPpKoKe96ejmQJmKnNvKFuAWsYqwbZwu8aVh7qua7ByA8TTHf3WyxsWVc2JiKASHAWn6KrRBfhM3",
  "key5": "4t1uQC5JvXGLWSjBTr4LfxeqfGVY6iFCeNdisRPLj1kBu3h2VBofrYUsRyZ1wHKJemo7DFxYtBsRWvKGWTyQY2ZV",
  "key6": "3mwLHjRvQz34BoLonU9ZEtfe9SvenAhURPCBZKMBSEvdxXCv3jV3xWCD6xjPsB3Wukpbqd5T7LZhz9Y7biuA9hmd",
  "key7": "4baeSLbPfA172zFkrJKJacTSTUAnxN2hNzaEtH1MUaxLFcTNU63wKPXLDYHsmw5LP4xv9wUPzSyn6wCBvi3jicRH",
  "key8": "4HsaGsc87sDvfRXgv82BQfWWy2eoEMT363bvA9857XmfUcrjvvu4AS8CidJzBqhDeEDQ68WyCyLtqrWB26JTCiDt",
  "key9": "4NauPDkBL8rPxeyuSwANfYDYJmDXJJhLusbRycLefimDbcPmyUHDz8nBnqVjTWyo4hqsvDkgukSrodntHsFHbifS",
  "key10": "594As2nqE95cc2HKeQpPwGgmq1F1jtoUsT7j6JWSDcyRd26d1KrkzCcZzkKNR6fn4Mg4hqcE95kNMBYj1p3Ysqqg",
  "key11": "3MdbmhePhyTSuxVUJLRXe9DTda8mofUZaD5MudcJwZzrMXe9p8sMcezHR9VtTSGKMbPcwN39XxyEA1naVL3bJmd6",
  "key12": "2tfiabkQN15AxJVKFjLwFBzfnT5bhGZ8Z9rRen2GaGTRhm93DKpBou52gaBiywYnafLSZLAEpDXhD3hbZsriLxTc",
  "key13": "tzUrJXzDXSMn1bfgBZc6LKqMK22HGXxD3hw9NGkbwRdUSSRzUAuvt6KGNYL2fa3LXoPThXaJxcSfQipNBg5ARV8",
  "key14": "R1A3Qr43o56RE5mJDbwoQRLUn2EBhd8m8nVe1LXepJBSJo8X1Drjqm9hYuVFakuvXveJyQxXZfwmZou7CXt2GAY",
  "key15": "cdssJ3yYJfDNznx1yotrDhFCToJEznXZK29JXyExbCEo1cnqfqHq4c3DcbcppaQwipWQk4HbTydmeG22AahW7bZ",
  "key16": "x9Mni9sf5vGBu4dsG1C8KS2Nw4sb3yyNqBVtpahJq5eqScjTiWwbAubnS9x7socYXAAsj4yS7CF7vmvGxHRzBh1",
  "key17": "3G5vtbDffurbs2hDkqCUQyzBPkV2WyByDyaYxbWGomfH5Z4URW2pPv5z8NCPcB7yjWQD6NZ1vkcMdAg8TPWiggzR",
  "key18": "2iG1SETMMJwEaHmq9KVAUJx5Rey8PBrWWWZSJ7pY3aak9gHUThH7nBGqmSwuAxfyafig7nqUJ6Zk1j8m6ktWR2kg",
  "key19": "xuzJC3LurSNqNopZkmPdDHDSbg5yxFCRfqXmgsZcYLbXiRmdS3gTm2ad8Phpu3SAshwdz1PrPjLpAsPmdmcPrje",
  "key20": "DghTNp2tFBjcoHUS7fPhDARwZctKYk3PJFASXTgru1EEN1bgUqviHDbrNq43AX8UMfcSzLyWNsFBm8V2wp4dkrx",
  "key21": "219Gz4ebXqu6hSRHdHDtr1NC2fKXcSp4kHXKVTSNJAd2xKmFLhvXsXfBGFwHXeW37T8JaLen44QyjP2PkraWXXHV",
  "key22": "2tE7XFs13juuKaj4HFR3VoYhguBV9in5SZpXfnKMUw4sdPKTEKy3yB1By73cqfwbJDYnfJ2uQWkNLSmiWpCCTZgK",
  "key23": "362s3rjwCQuvJUUX6UNoauMXiYrnDgDdB5f19hzGZzsBrJqiP1H2FBMshazGagbceTY3cth26AezdUWw9B6FiXgF",
  "key24": "5n2AkbMBACQzkHxCc99ofSVdM11xaDHhqBNFQ9LTTrBCbi1mf8wKkN8fkFbqzBS1LySyEmCXjmsF4v84cTHkDeRc",
  "key25": "5Vk3cR79BtCvdsViDF3MqYeEUBG7za8qcc1CTgZqwsshQ4LBdj9V6zyNNMcsrryMfBgci8aLSiWNgxM3ohDxzbGr",
  "key26": "5CYVpJYwKHgGsH25nfs9gRCxH3GtzWGpYg9fgWHw87m17R9ACdXVp4kNeBxSTe6W7LWPBjXC7NE3xgXQb7NFURJb",
  "key27": "3t4uAJRrxC3aZAnh5P12oqCtjPiVeyvMtKm9sdpvcUc5jaaXCXgBGgJEPQznEfFkAuwXncHSEa1E9DZjF4Ydeqxn",
  "key28": "4tGhUZgafutcUk3aTPCsVnpay9NufKNy6NjgaHwxjsWF5M9WDiZSeTPczsi93vXqrTzGKu6VNnmDSyfAgVSK2jCN",
  "key29": "3wkYFNKf6TogPw5GEjzbsQQrqjmsNpnX8kCJGyAh9A2YXC6uCCqE8dnfXZ6Sr2msMDoiC5Ktdm4P5ZmQ2DhufYqD",
  "key30": "nxUQvymTYGPTFeUS4L49JegefKJhkVniqSiSLkDTrwoAwDD8zQpghr6ayeJxbxiBxqFYXbghkqw8MjKPbUWhTji",
  "key31": "2SLrPLmb9fJzWBF7sPK5LgUWp7vCzb29pbbzvbyQ7nt7jEz2M77P6edZkdoHV6rGMrwhFigo7obm3MWmtqc7UWvw",
  "key32": "5NyvRKHk2tr32S39czaADGu976Kq3nSpM4f77cuEeRzmZctciQoitE2VfnfBUCtXENakNPxRSic1w9uReKSvngLR",
  "key33": "2LgjhQJgDx5YdVJrT98sLs8omVwv2ZXnaK4E26MckAJadoXofR3dRGWyU6PjE3Np8S7sfPU3uTvTfbR4cZ4dDJ2g",
  "key34": "5CUyei7G8tQJ91ru2fLkJUXwSc2VUHcMr6Gog1jquXZT13mcVdhEZQUvH93PNKvtycm7LtDsht788mPUyht5ULcH",
  "key35": "5s4cqCBjMWL4NCGYTbpLg2khHm5qXKvJHC2cRSQk6kydiEk9tAxosxzYqVBdEvJA2pWgbFauKzGU2ky6rR9U2Nm1",
  "key36": "362vmKik2aQRd5raxzZWoSDKie9ygHNcFbyhgJCnQAxXN1TBf14f8PiLuuyefuwYmz1KBWKdMkeVseF6rF1UrMzE",
  "key37": "Wn3RfWvNKjkvunonvWYqoWoP4eND7GEFVpWpDXv8Si162o6WbYpDUsjSkj2aszQQoF8P4KbVunngaL4hWzHVJVH",
  "key38": "48RrirTwh6gFgqM84xvi8v2iY2cvUJTM1myAGoa5uuRKuhLb7SQ3nGD2GXfnGeNUaMvqasiUv7KSgXZtGhhDMjBC",
  "key39": "64SAbkC8nbT8YdCtn5dvVE6fAvwKH3BjNrSav7eTqVQDHfPC1tmG1wtHNzFciYV6VYuMRWkhomebB9v9NfmBcLyz",
  "key40": "wdvFgQJfvSMgXMGJwpwqZcP2VbodrH4UqcqfgbF2i6Mt7f7vjnLzCr4cL5eHpN1p4WKW2XoEcZ7oisj1m7WASJk"
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
