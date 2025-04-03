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
    "4FWMW1gGUqSJwBJL7u748bdQFSkD8Q5KeXxMaN8Y8PwSXGSSvR58CNzNVsFRi43MWDDgXAxXvKuZZEUPE9CfoqKe"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jDnvhztizujMNpESnWqFnnhRtJ13yjeMqMaNv2Hy6QKaPUCXAna6UX2x1SXd83NKrSt1dYsf2kiGvBWkBybR6ka",
  "key1": "43SbSzdkB9U1afg69hvG1bV86UbtNFUoJerTZxzhWakvPa6UiH39jyaDUx46ha1mYT1yZENVmNA2PMK1MGoZihmE",
  "key2": "DjHzmJGPx1tHBtRPSWGjWmRqrsmmdK6wyN8r5CR7j3y1HQGttC2KJwLvdPnJ1TtaMbSLx8WKhK1ZbVeRMynDwst",
  "key3": "4HotB2pHgSAvdXy7bQwCpvj7D3XViidAgvnkYGqbuCzt5wXqinoTjoSUWNh671YD8fwbN4FUZxEh3r52VTf2hsj8",
  "key4": "4rAqpuR5pn9FUWAindVdJ1PeXthmbFHm5syNv5L9zBU64DMyMksteB8G71jioNvWax8hUHFtLP65uVhD7qRhTHJ5",
  "key5": "3W3aMh91fSaGYtpPv1osF3X3d1uikbYKumvsLwhWW8wpP766WiAcsKgjcxiDEjZUaXHvhHkraMjHuah7f5KKRiu3",
  "key6": "48FaU6WdvBWcYTzSYartcmZnjdMNJrRUnbEoDXmfYVfk3rB16x4ATT82tjjfmVNaC4TXLUxjhPNeEnChGptmbPTk",
  "key7": "295xio49UQ9M9r3gix52xMm5uavnrBHCMcBAVENhZpWpF5YULee6jtfVPQKPWk6VGYJsXgAcBeW94yDy2fzBt3Xn",
  "key8": "5bhgg2VKm65jppJjdwbM7K7bnkXeLWqKJFzccX5fqCd4PmGYibY82jPRv7akPD3B2WVbErga2kaqujPAHVppS3Qr",
  "key9": "4mBPNt6dYr2NTbAbXQnxsoZm3bvRtbUasKaRDzmxsgnzmvKMs4uw8tJ29vFdafwzior1E48xcWWDCqvP3hwHxb9x",
  "key10": "1RxR2zNFvmobUGhYnToYkVLy5xm3oeiunJzadGieyScxk2vnMnifQDvZmURYKNFBdSoWTQTMvP2XJp3grpwVbzD",
  "key11": "5ZcAKkrXtvzKhRBHtUHuYTNwppJnKYwUahagJAaCzzVkFHjHyEtVznZMdJ2335SRPUCWZ6jieuZzMiuo41dhknzu",
  "key12": "5wGvCez8VQ75Qz6rYXtfCdzPA1zpVsR4LMR3fJENEqQnj3VxEPKVdvmg59ZvHck452Fddhzj2Ce1k9muLQkor9fk",
  "key13": "3u9TBSBNy2RbqzBooWvX6F9vsjY2zaWB5v6Z4YYEJ3aU9pY32SccVqCrHKRmG5DYNq9enuVwMBQYTNqzKkfSZ7Xt",
  "key14": "2q9YvTPtmwbYYctXZyepbgtWZt6GTEMh9wzFEPqXU44os62jVHDdnbFEwFNw5kYJsjxs7rg6mjKFaLwdcHYGF3qi",
  "key15": "TpXSA1Avr5kV75QqSrRKkydrdxALQuKYsEhPaUH3L2yHJ3mdW8sfEFmeB2yKzcpra6LYFD7hTsMrZvbCepkTMQD",
  "key16": "ZEHDNKuczr3G8jnSLqwSTajxY4HJqeYRwdXLgy3Crts1D5siqwz4m7b43Dgc4h9rsWGNpMP6o7RGtuZJgMSUkVT",
  "key17": "3uGZ81FD13MhhaBWDHr1hdYMSd5Hj28gtFcC7rKsUwo2MKJ2n61C1ho88t2qAojZyLcVjUGxxr8UsyzHTGfSkQ8Y",
  "key18": "3PeetRVbyyBFTDsLPZnpznUwgvsnmVdwkWhkjvBy7XD9c4ApadKfPQRjjf3HELv6JiXbKSeZesACaAqEPZgUhAbg",
  "key19": "rUHPR3wpU7aPiw1BtJ24VZYUnVVP2mWbaSZFmuRCNUt7xxJgPMJ9AxjG7nT4pqm3LpH4VL5XgVAJAicFmP5zxND",
  "key20": "2ZqeqTKBW46izA2BnD8bSgMgpBSSoDhy7nhGFkRNWcQVuZt8s8ZUoYW1xrLtdhyf44K8jWzAa4rcBcTPTPzihE78",
  "key21": "2qLppove3xUgA648yorhtk8ZEAQG25wdSHReB6cwiucHo8575562ndE7Uxt2kJo61zHkbfpCSKNrQdnnCP45DtXi",
  "key22": "3niR7aSxRC4AxMVjLYyfbxTwui1wDv5E6e2D1pU5H9SKWFfuSvTgiSCu2JYAbyi9UojTiMa2AnniVgp7zidSjAMY",
  "key23": "482HCuGWuEw1wJRqqomZHZVBzHG1NgyxsnkJume6QW4DAmFicNmBu4WRPu2YAKQWqStSkAgsC5RrpyYwujo5MDbv",
  "key24": "55pGcYEkwQZQn738iTporjKL6KsgndLM6GUkKtjcPEKCdsTyUcfaGQmQRejXwiMTiSkMzsxCTdHwcNk3VTZ44wHv",
  "key25": "4HNCzWgos7PHjZFgQHXkqQZSkUttoTZVcM6Lr1YmVXVJX9ZvTd5GFPsETyd1s9tuu2A9h8y2esbuMZmD2FPxNza",
  "key26": "2d5L1aCaMT2ADdyHKJSve57xmTpBJ2Hr7GV41JjYupdHEqY8oVu9V1j6T2j7bEnebaM92jP6vu4caCPPsp6RLWTr",
  "key27": "uJus2Q2eb9FfD8RZE8R2DvTh5byhE8gcn5mJTePcnGWMCe5pb6SgFLABFzBZWiDBhDyHyGAZVmZpirMBDEBsAnp",
  "key28": "5di2B2KeQP2UnQnBoEAcu3QHha2NyNhQaLrhjGJ5t4sFLvuEsaiv4H4Qh3QeLmYCgAHeFEUuKFNYRECihzzzztkU",
  "key29": "5FpBi1NJmFB9XH2oXqoi3pSRN3w2ycsnMJkaDFWcPGakT3Kp973q3iQmxmXWSnk9859kefoBjixw4zed2M1cD7n5",
  "key30": "3Y9LoasMnyiyWm9pUt2VxhNJq94NWCwNeosJdmXXXsyrMX6y22wpvq8s47q9VRP8hPBNBKdmr89cEnyWU1VTob6z",
  "key31": "2rnBUbnLaN32Wx8JieVbyp1J71F1sWe42fr1gbvpNSidVgNdSWjTAQRjfRNP4HBnjvgKAUMnGzGAaQuDdB3i587J",
  "key32": "5VVqb43bRkL8qGGicwwtJGgae7KBytpgP6J6MVwTGNSPUrdPyWbhwWNfxMivfzRTNMDvcg6owPDLFBDfW4hMuvtm",
  "key33": "3eiwS17GEV7uQCzyaPLSk6yigH6hsxaECedd5no9xKM1vyq1ogYnpK2gBM58LAVmhP6nBnED5oumpPEDbRf35gRf",
  "key34": "6CUwWzWifM2ekMCQeM7BRCfuzsZ7J1ypt6YJbvgA8qxgwnZe21HpepV9XDXY9i2jm2PeFWvSxbMdRHtq7zVYRYF",
  "key35": "Sd8F6YYYdLdtzYEwaeQ7Gc6Kz1u7t91b3aNTzp1M5FjmSRBcpcK4v5E6pMrHR7qnhK6ndMjT7s93Vb7RB8HCVzQ",
  "key36": "4ERen5hs5i1TaBonvFGXeHyaswwcAb9uDvVs7sjgqFwkP5QXvmdXNbt9h6B2M75A5wmFXGazYekY7zjxuK3b5g9U",
  "key37": "3zWYuDqzRGLFpSeMtAhpKoq3kHArssZmVaNMWFy5KAt8z926rL2kGY6sYcitDUQefTydBDfwYPsdA1daS72K64ow",
  "key38": "3PS2rH3MSR8X6s1hKj22CrHLkNVC4xBtRbezumt4A28pZcDRepmo1RA1o5e8T3YinN9yhVZE6akyh8uy5w3HKUQ8",
  "key39": "3w4rbZDm9BkWe3HWdeAM7Td3i1qbswVicorubK8maDPUBm6hb5LcQtvqQfpVxZLdCHZtE3k85ZWkj9TcaJsCLUMg",
  "key40": "3e7WneZFKqQTsnhVMPv47duAYvGHkLCZBvRuPeYGe3NWQUpkY2iA53xiZS8XrbKTFCD7jsaaMSkqPeRq7dinPntA",
  "key41": "eVfzKCMqGzvwfLx6XUk3H5WZsCNPJz9ZL46Ed7r2NxYdQK4z6bB2Q2HpE39F84VqySjdd2LTPz4XJdzHvrS1pBQ",
  "key42": "3AACkaobqy1wCUUeZWRzjqGfGh7foWguvTX7YQNJTKxZFSqYwLCNLcQEvZgZbTpw32YrWMnAVStb1v6eZLXEXiRm",
  "key43": "5tNcQBeP9MLQbw9mLMfgb4zveojZRy7W4uLC13e6JhTfdU5Mc5X7Ddf9HMA4Ru3d4PHK313qZHikWBVTdMqM823i",
  "key44": "3QeDY9435JFiUGAuoJ2C1XXzrK6ZVmct3wH2Jd7rdMjQN85cmZJoFHqaqCPABnnvJ2Sjqg6bivzBTbuQFMDoY4q6",
  "key45": "2sskzoQpH8FU56nhR4HfDEhFaQLfmJFDvgZs9VaUMPVZDq5co8VPUijvbqg4ZRwP97kjCYbYMn8pStPZhkJqGozU",
  "key46": "5DWs9YZMpGkooSf2hgKJYxn8yNEhA4wCe8oX4RWbEjN56vBRcik2RyufqzUKbQeB9hTBLdPDk3y6Rf8pcsJ3ahZu"
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
