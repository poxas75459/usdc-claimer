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
    "34rQ4GiXubjDammqD58WqefvuPafEcNNdxUpAGyuHaexQBZ8R1oP2uK9Wtda5zce4eS3byqYiAUbjwELJDjTvMHQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "1DDLLz5PTfv9N97kzYoCKaYawkE1DhZxxSApUNNEze1iM62XSc5Eifh76BkSNgGrhGk4SSiU9mZC3JTYahsoza2",
  "key1": "vf6HgXKUjzZdtDtD4FJ81KQ1hBvevt6tLvHC58b9F9Cb1oRvx6SPAPjp8jBgmjyG7AmGbUPHk3SHL1s1SREN3i9",
  "key2": "5N2gRqfnt8XBDuyubrf1zJiqp5GkfQkfMiMy8AyUZwerb1xLBJSfRUsZTz2xpkdWfYEroUcZ68JFmfZpSYocvp5u",
  "key3": "53r5WyKuxsJjtmBLsbGFzZ2D95xBR5AnRbt3EEsyhPQJBHCFNW42gB3x2E9j9iNL5ypxmPrC5E2HuVfQSgw365rK",
  "key4": "4ZPfxcHK1P9ZXJBYRRk8VcBFEAuVGQzm1w4ymesJGGZWgN8jNtami5MK8RDV9xoscPJd6zkFK3VsWvrxgKs3rCBc",
  "key5": "2pGYtcybptWxZ2yxhyBp9gp61xaVx5jiVaFBdpnZddX8y3wTRXmxpTeLTPPqQutciqi7TNtVyJWgAKYpYAP6rAwE",
  "key6": "4dWW8xZ15ABB5N7i89CewXVZvJvmG33tuB8TT2oDiyWvLADZx3vmdpptkQsQzE3GwPUWeRAFNaSnB9FYQHxtAJ2S",
  "key7": "2sZpa2x3HsebBKZiFDtpvSv6GGbbDiDkf6KaMxbwBZg9L6VqpQfcNH3RQKtcumZFEn9Tk4FpVzzT7XQRtsjYC2CR",
  "key8": "2T2P8tKyFjTqRBo4VfNxrMv5BYnmDQcmybS7VWh3YKfhpFf346TtrBMNXEdswscVFscYBCjiDRy3kksyc2dgAsNZ",
  "key9": "3G36cAVsvctdcXRBP5kozPfuuUpDsjMDPL9rpb3qGLe9HBNyQ3TU8gBZqPFGmRY6XCa74ESEMcxFAWdwHqteycmG",
  "key10": "3xBePHcNcRfyzmmkK9ycgQvMh67zH4LUATSTuitRxnETZ1RxMJH59jSHi25ALrnhrhmp2GszwtvDJVSLFarayDtW",
  "key11": "4zxn9NzfY74XvfWDXwnDXi6tG9w3wwwoohvM2tGpSwxNxRoC8ajVr17PVdxUUFQhjHxaJoZ9hPCeWkYmfPgUc7Fp",
  "key12": "2Y8KrnTdWrQdsQSGvs8Qq7ygKQiW5AyRqpFJC279EJyP1x3N9Mf98cCsJruFk65tjdbdVu4vXe54L4GWPaX8LaDp",
  "key13": "qrhULoQDwUrmmFcHW2awUfepWX3PScSreWkw1NHgAELcEa4hc2D6jBCSdQbSGatjS9VGEmHfoeLvMzZDVvjYB3g",
  "key14": "4g6w5s76TD97C8q41bTqDpmTa6Xtzwi2kk5ZRVXGbNHQgCYLABsb2zpTDmXoWeC1MonUbGNjToTDTqdhTUA1GV9C",
  "key15": "2C8M37vRzRwx761Ee8aU3X3pHgQK2NEgRnkTCtz1emHTge2nJFznt2QsBiLPPcNDiRmtkL59XcPNzEMB3AQe6hsu",
  "key16": "9yo5GjiuN9zg5H3QMM7vFPSxeSJup36JPxbWdMsVhudejDxpAiJ3jm95AHn4nTjBB2yxov1dQaXZr9X8T9mELux",
  "key17": "3kbE16fc7Z52iJAGU2YKeNKXzeQrfmzKrzYhc2B1ERxg51kuja5zwUGQHHXEGK5X8Jcu6ED81RxU77T2U3GtF1qp",
  "key18": "oFm8kY4fBMp7KrzF7fj5Wetnx1qHzwMX8LzkUKq8A31UasLKkdQ3Qz75cJbenF5xi8Tnhqh9vz5N9wPX152XW7w",
  "key19": "AcDNvxsUewGNwaKmD86UMZGBiJKrVyH9j2gN8WgeEk2qWa9MF41VD78vhUnSvExxqwgVAuciv4xHpjY24gj3kHh",
  "key20": "2vKWFTskStBvYsFsZKyGtxx862UdtAADAfFodA7PmXR5CpPRibGVAzYZDCEg8b2C135iQvEFRBDR3gW19h7YS27p",
  "key21": "4JuhkkHSnYqrEv8ppmpYRBwXDhFrfg7kVd9wgwXyxWKx23Ua66rHQ3BkdgQ82AS7dUuDzK6fjrGURtdMDrCeRhuT",
  "key22": "2oCkYgK5Db2qxnivS6DR3KEdmajrEoUdJkFDwtyD9gGyCqxtfNyZGFf5m4AYswwgqMq7ajm9bk9TFux6d1qpN37y",
  "key23": "b6djCoxutiW3gHgRFhVPY3jALjXU3deb2aLXzfdvvR1fntPDQy2C67RA5tBbebYt71HMBLPQGerB29WokjETm7i",
  "key24": "43mH7nPopu8mngMY4WH7bLGtGc9DmxhozNBQsyprJMo4iZoGvfRJGUi1iReVb83sZvoBUEWFhFs9yfG8rA2sanMq",
  "key25": "562vhpPb165Cs6Hy7dZtYcXSB4BySyb9yXy6nVj9sSN7qnQR98RbMFYtqKd76w251LgoDqKz5uQcu24qDhtG7MGs",
  "key26": "2gZZBYWXMmq5HC7wRR5dhxsEekWKrFQ2Wpy2CaTqTPtmiZyfT2gzqy8v32J4PJxfwJ4pZXZmkPbUxFFHHZLUj7Rs",
  "key27": "2jimq44isr2AH93kLsYBmJtHyRXyjaWS8AELmW5kst2FVRz4qQcBhjJshYFGa3XxPKcaszKbBgjf82gcYx5e94mX",
  "key28": "4oeufYQhbyNFG3bi4TnbiAASeN1vo9nnDvXUc9SNEgWJqPofFftAX4kAa6XR1mKwQffVe7PHEJHeozufPXXDAXLM",
  "key29": "5MmSTyRdMeXA1XMuZr3B7SBcdNxDaf5aUVhLeJV8RFLys2bEswHCHePyEEEGvttqeicCLuqLaQ61gt7YjSzwJZKy",
  "key30": "5fb9HCcaeBSFcCtNCErKQxzzZ7GHeCAoKzsL6mJBSGiRiqnLZ2priv2eHMCNg2pnU4hhfVuG9DdnRcA8RWRoGc6S",
  "key31": "bzdUuvoH4y4dzS3sNE2GfKjhAPXD7VtGTBAKSHQ7v1Lqi29pjJ8UowMPsAXxA9u27Tg4eoyrkkN7h4FET3vWUak",
  "key32": "Kq8sSy8gdvEAbQM9YxMGJq6QLoepbEcHwgaEwWDJEorFzSGuhmHthMS7gQDTzNEDEZthp1NMiNfZb2Pt3ik8fLs",
  "key33": "5quf72u5nQ7qQHzQMK9bHktKynkw7dVHSKu94kzdAZbGWwdkmtZTLa6xpXXFa3ZV4AYTuPHmJSF2zKKrUBENNHou",
  "key34": "BRceA4an21aDUcW5gpxiNBV9bkYwfF56iWSYRmX4Hi951GZuqGtmxy5TSSYRB877hv1Lc4eksYPddRSQhZnLPJN",
  "key35": "4a9qPisFZ9uta7dd4idgZ3MWVSFRGAZ7N9kzaiAzZWZsin8TsKYeD7jqYFiHebmxtaMxeDnPZLoBiA51ppDX1pqh",
  "key36": "5hygMFusWCmZ5TELPvL3x3oSQm2UHrSSQ6SuTHhqsLqa7cAjkPifC8CAi3GLVwKWHccUWkiFP4qLfRfCzGW8L3Zm",
  "key37": "5WEuecQMhi9Gu2i9o3nLvFoMDt5jdGzntHk9CL6jPbJ7vP4kQY49uCHyji2rVMqafpgArpny6a2PEvUhfieofGMM",
  "key38": "4QNc5KAw37UwyNj3NuarjRJ2UD79gstHNUyVJUrccsAr3PEcLVDqhEmyMaoqZcACzBAoECmP1o9S8h2edB3yEpmS",
  "key39": "5WpyXNCn8WnRE7u5xTSER5gGcPrU7mPWizRWyKg9mDxs51xE5V1ee62D5KEjmWXzccfvigrGN6x2kpkMcHKkGYez",
  "key40": "66to8jvmy2saWXbVLaQFctKS8m4tDdxkVW6EdMcRVNpPQ9oYXchCnsuFDC6QPiAGMQ2Awxz69XExHyNHVgn1gVFX"
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
