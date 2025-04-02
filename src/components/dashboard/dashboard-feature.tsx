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
    "5jpPPZqAYZ6BoveCVpbVewwPWQJSGnqavZ63J2v1hqXkm5SXJgYN1ov4jaknwrUufY7MmJcXfYo1vak7TVzLYcPm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3p5vYkL6k2ENXQPADdJp79hMbv5hfqtn7Rf1bESLi5vvUCcpomXR9nLN2qY38JTsZcAvKyGtHGdEzpmhHFenHtxu",
  "key1": "SnKjvWCnrRDYD6eVdeEHgCZBBEbYLzRdU8HPDRXsYiVm3S3iScFKRh2CnGw2QLKYg6EkkZDx8ttJgry1ssuiw74",
  "key2": "5evtUxr97Gk8K4AxFVfLJTxsrSm2RCqvy7j3nobaRFAG8xhqzmgoFjxyChJ1o7dGaF3WwjNdxTXZvBGaCiWibVjL",
  "key3": "kGh8vPxkdQSMouKvsXb6cEMq3DkKfsM8hBcagVyzJkBNGxtstnsUe1NmrwtS3tvkCCDyExpTjaaGuumfWH1ryjx",
  "key4": "T4CGwtCdRrUUMtCsUtHKCih7bYJABmKppADXG9DPGdFMvX18zTX2SCWER36tWo4fjo9bmqi6vfXJkcqWsJhwbqs",
  "key5": "2Xunyt8FxxXx3cF7UzqPQhQqJx5t47M8LWdf7Pp1R372U6QRMaMUwwmDoPcDFEMLirC11wy7dz2Va7MDrFyJrEeA",
  "key6": "EDqf6rb3fFCLekrjnaPJTmtEfCWeLc87VGDgB3xkyPATbLppgkfvX5JzFLvyFG4PSFCDGchPxTrXRTNF62ivXEP",
  "key7": "5wqnb3RtxAGbAqnZZgY1jemUKeessi5Zid1MaFmdAqFfsP8H4nNhAj71Z77z34nUWrrAzVNDeQwCKeHGvP1TzW3U",
  "key8": "4awj3RKwVSgXpfptMCDhfPxNseQXT7tCzihdcsKqZ6FRQL6cyUuZtBHnt2mUeXBMvHy7rUrDSE43VYDSZ1cCo698",
  "key9": "51BzA4rzUMmxzuMb9Tk5QyD9G781TdoeiZQFhrY6CxZi1qkGmooQsG2rZnkVwCLaA5dzjRA4cqvmc6qUZcy2tzAY",
  "key10": "2w8xGL9QV8zzhjrr9UgEiMq3KBnNxHR5A9ToX5ztLZt9rNrvFw9cDLbVhqz84ydjHAcQJBKSJJMfDykTUWeyhoRz",
  "key11": "4N9NQySi168Xcf2bcCJrYsjzChxpa8KJCXLFiVemERccSYFv6f9y4eguuRt4ve67ttgEzuSZjcLYrME8vcZRtFV1",
  "key12": "3qFVnQ2Vxe7k5WoWBC1qWGb9x9MF3wmsrzdDnRx2pVeY2Xr3dkeAsqptL5yf2ZASiijScRFKAE2wQPc5d8AqUC8X",
  "key13": "4z4X7WdPsC8nMDmXa3R3xXjiEu9hANpQDUY1T3GP2aewpZ2doQoy3yzFnN584EbtJMqg2X1WXqpvpTzvj4uUdXic",
  "key14": "aR8Sq9kSbYv2UagMwrDsX1eAfGSBjvBCaWbNysAZRToPjtPvhDgXLuaqTyvcugGziJcagdgD7MKeeCejRafbBLV",
  "key15": "217kCS46zjDmhTHjiNAyccJ8LSRimWf2Mj5p1yXgLS5TAEtq51MdkLrSTxxAeSHcioD8pSMiAkQnCEmds1Cv2UXq",
  "key16": "azyHm5StxcMSbftwPnWF5A1sr6CXuUQ8i5yXEufQsxRLutgqxrntyxXsR1dfePzpkyNq22pY22ZgP8cqhc7rujj",
  "key17": "5pPqFLtvonjPVFZ2NmMm6LQRzLeQFtcRVojU8sgY8dVKYG7WA1Sdff2SEFgmcb7uJijmEXsFjFMfXkoSXELh7Pee",
  "key18": "oxc8m3F4rrk3Ac5oiK5A1rvVybYHRngTzvQZRBvkmva8oGaRF4xrb4t3RhQN2YZawGZxG8m7nSovVT7ghUyWQvD",
  "key19": "4UwAzPw1EdRXt9Hh8FNE7d16WBLXk8LD3cKav2HX9Ld2MrHMB1z7qUhXnHBjicXYLPhpu4aKdw6Fef6uuiCWJRem",
  "key20": "4qXRWJZ6hG5CZWYASnM3ajVVtLzF9r3z5e5dNpxsRKUftaTvWs4KFjrmUpkwCWbtUegbNnRMRoocb9greqe6LThr",
  "key21": "2mWSJN77aLp9WrMk1buv5qTUxskdqcH7RgKnFc1HLftWJ6hUzz6jo6N7QLSdzr98itKnDogQ4u1Y2oqYvX9pMznb",
  "key22": "Q6312UiYJiPV2xwLeMLixCyyW6zkbRX4uo6EjsAEyeTcvx73YH8p9exiHX6wHZDmbF5sqMRrrkiMd7ZtDzryM3K",
  "key23": "2MEPPbsbLQvu82sW5hKPUCde5eVJdZEP7aF4f7hvs4RNFe8zSxzeYqbEjfdnFi7bGqnjw6NVsQnYmk8g8Lo3Ngi3",
  "key24": "2aruCfn4g1t5x5eWXqWKomxQk3FCdPYzfpGd6jtc8yUxXZTV4X6up921HcE1aEkgPnUKMMZURh3imMKKh4KDmjK6",
  "key25": "2tmKU9rSeYEk7gEAvmWt3FN1bw9UxXm71mxMR22VpMG77ymZn3v84F9ZgyeH3WSiPfwWBfbkj7VxHuA87JbDbhwS",
  "key26": "2ZTW3kZuZcLNHGEoxUYEKT92vjs7xm8G89Khr6UrxTQK4fGgcrYGHyUM7geVmbV61jgrVKuXGxrK8FtemBjWk9Ma",
  "key27": "mMZeBDdtrovaX3LJhSLAx6mmu2aoXg63Jpx6tjdr7wejEccGRcY5nfQxboHHNCUgGZ1MHrJT7wzTmmrBkyGFHUg",
  "key28": "37z2xWCP6TQdyHP7zTJtyprryBUMZVmRpafVZfuLFVJLA7Q6CjKNSdaA7xZfXJiRKa4A9hSwKrcnuf6gP3DyNuTz",
  "key29": "roCxSSphQwhYTiQ3MmboVyTD5xGQf6CYD6bU8NdErQZxavirSDMFzDimpATsuQB7NayaXVeUgr5cEoLh7zsMkUm",
  "key30": "3dZvQhgiAibrgnNYfhkZ6vZscYxufzZjVZEWPmsipc9ykELnvJNzP6PmGbVyf23FVLw3YDUTfKGPSHJXc8XbxoUM",
  "key31": "4LHSX1wVofcR7vp16znHk7wXm2x24eemBPW42uMQ9aa3mwdRwVGTrnbvQqVQz5tdzXtBCug8awB5kpoNAqWr2vMV",
  "key32": "66wh9grBbkBdyB4PPeWNtE1vV6betfzRQdxvLz9bMYtPTBhev63vrd5Fot7JCYY4BUFRgxgFVkhUDHE2FdAd96vq",
  "key33": "4LFS3CuAB3LiNqrfqoZUfAV4v2D7GHabCzesqEkwWursdkVRnCsaFP3xEL82omR7vHwDN3egdVmNwyzVe75dUWk6",
  "key34": "4qVNnVN3cLqUQSt4xsUBoW2zmpaD2wwv2eoroqjF3EdHmP1kMYk2pATDz5oeAmuEaEAJBPu7fxCphPqtYFdYpvNi",
  "key35": "5oSVatjhu1Axqb6m6W5UbuTHzhhV8d5jqif7xYHCCwWzYj38Wa6mADyMc8oTQN1WmXCfdGguJ3LwGpUBy7NZZvRq",
  "key36": "3QD4dXkruPNFtDxpbcrk13gh5rZsXb9VSNjTZyC775DU41RAD7kMDLrd9xA1V5C8goZJURhZkiY5NVGrhrvao3h1",
  "key37": "59x5YkQJLaVk1678UUrgvRXPo3Vg3bxyiaNiTXZNZWrQwhnYeBypERLZB5VR9HZXfHTEtKFfzqUVc3YJduSup6Bh",
  "key38": "265UVQqvF4uAid9gW9f3SmZt5ugaGtEz5fMNqpDfveQyNEJ1gfGbo3MYaXCjpax43JYxdkTb9qT5TZSoTDyJJ8AX",
  "key39": "5tkvxYjPxd13Qu3jrME6NsY1Z8USrU9KwKqMeX7rF9E8rrkc5VqwC9sjRCHH5qDLqnJMAFLRuLUURzsYrzCmz1UE",
  "key40": "3fGJ9j4pedoqmeZ32Au2nvFgcSiUbHDCctoA262RAgPNNfmcYrfJyDa4Ge3mVgCAvU4AAsNzpiUSBNYsLXo6jDST",
  "key41": "3yRnyB8gfRvKrAXGHc7yuTyUdZwHze18UguHvwQDTgpHwcqHwoB8oJGtduAG5PMv1yQvxNzNfr8CmkV3K55CkPNm",
  "key42": "3WZReCZsqaWqxAo9GZ611PK2yf81tphEVSGAPA9ZFmKHUCbe7UUaKbNyawXgHQLZRAoD91RmDM4yoc6ApbCJStue",
  "key43": "rfFJR5E2KTeQgv59CQang5S4Vtj2S5JD5WioboTUfdHKuvsPkuk7EVHAZc5Py5twt1nehjZVHuMYUNsRLaTtyDD",
  "key44": "47z3954MNs1ePwE7iPgFuLR9WBXr3TDQgFCqpyhxJJpgUurACtGfQcnQRi8Gs6XrchUNdBfUCca47Ut9TGh5oddr",
  "key45": "5uP9Sew4MxwxM2MJwQSAJ4NooCy3Bz1pfsmQHjjqSQVZ4Ab9Dgua4Axa5QcDWEzCMW3Kmd5UJgLPzoiFsq4eUDEu",
  "key46": "5aruobt854gxkgziGhNJWBrwA6QguLhYgHjKx9iH97XumpDeM1PP6e1GzJeu3Rn746ThTwFR9RbJeEU9skD43X3W",
  "key47": "3ikodr7tJJ3nBERMrHMtx4LdEHKtNKjdNs98GMhea6AZ85p713YzxEqKh6Vkwxs4mX5si7F6UadyfWTVKpudpAPc",
  "key48": "3otKhd1vhcTXsTpJ49uyJ4sHf41AhKLDAs4vTKGFJFAKNiev9ktg6pjJyAT8sCJT7wRBhCMnjhNCDRX5o2vBfAzc",
  "key49": "9t1EbgwsYzwKTwzEC12NVrr2hyRiuV8qPVugXadx898NGAMddcgHPzMANP46WZJUnfzuHQz1j9L15s3vagGkEZg"
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
