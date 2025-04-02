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
    "2ZWg5rxdq6LCxUHWhXCYHvsnsmAbGVUw8FiuWbypwCyXGRJx99H56vth7pjCAUGfTsZHqLZ4Hf57ArhHw745DRin"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hD9628JsgbSLkDhtmKDLoVujtPWV9Y8NzZ2MfLnWyjk4ic4BAgsxz6KYCmGcdCZm4MDSUYLMuF5WoQ7mD56QgMY",
  "key1": "3W1ZzoSHkd8Bpm3ezTvtzB1o4BDvBAvKTWcCxLyQuEwWSWsL6WbNphoWB4LsuqrGJdSk8BC4GUNRioN4mvAdn8YX",
  "key2": "3v13WKEikRdPfhFuVSVakwitcxJAeGwB3N1iUXi9YMNgBzG7YzMoRMSSfmWikZjvQYxnGmgmuJBvBciH7TYjT68N",
  "key3": "5ScAx3fULBMnHsWbzvPe8Qke4MFgK3TyQvpgUCRBY5YokdyUCYNFPznqAGfCE6Da9fs8rAQqAfjeEx6x7JPeZ6Ty",
  "key4": "2d3nbHYVc8CLAHSesdbK4oHwdEaRkdHFac3CYg81BKNB3CHyUQL7HVD32eZ4w7yQN4WP3jx2XjPLZnwPaPjGCnCy",
  "key5": "2mBhfKGosSouuqEwCYYAVFfGki24pqhTpv7FuKg2sy8875h1M9dWGZVq1aTCvkpzBEkw7tx7b9LZeM111hRDKVH4",
  "key6": "93tSZbmBY6qUd2xqYLDnZ3iNvjMXkDenrUhtaQWpn1XA4okM1ABfCQZqKeJz615qURxnSgpK7dgdX1YMLvK8c7B",
  "key7": "5mpTJMTT5bxJFmqetHsS3EiKorLugbXuDCbESxoR3m5rFTMoAvKgrJ4zoMbNtsQXYKJr84qi1Bk7upc8xa21LSNc",
  "key8": "5cK4FbU3EUpoHKobeHMjXfKWo2AmN9sfJY2TBMhQCAsjgx6Vtr38yu2WsGK7bxzs3cRctGUYLoAFpN3m8J5sjtnf",
  "key9": "2MYALWTtmZwKFC7HAbmUSYqe1YimyEeu2CykvTsnYLmk6BqhZV8KbrkXhtqZLixuz5QocfCdpZxSc8VD7ZHE5BGe",
  "key10": "3Eq3mjYY9HSk2xhN9sG5LnzLMu9AC3icihR4yzEn2zUNX3y4PkkNH2tG4wDcjj34B2tTPwk7S1pfiTNUUy5AMKXX",
  "key11": "1qa6G1xZoeSaNQBAMdoWdrf9eJbGTEQfjDEPhjEZ8eyB2hBJCghkrQ8qUK2oqV6Avpm5uyaJhRD8VSqRWC1UhQU",
  "key12": "2fbktrTmk6Dcfz46pKp2P2kCjLBkCKoCAc9ngLQoeiBf4x76HcDBvoHPxZqxmxjwbBnsqtE8RQSdtp7g5JuUhmWU",
  "key13": "2E4NSBDMFk5xbQ7tQNgXapG2XqYxcVpfS7Nn18KEKJKhcBswEupkiWB8pVKy9xGxBFNXaWu29WFBmGSyTEqs9vFW",
  "key14": "2QUNoRT7KdWGLtALEnHX9EUKF7CsPfLxBgz2gDg6UttFXkGDQznq2izkXuwY6tcGYHSjcpxvTihF5fyRbTTJtez3",
  "key15": "2XLnaF1Cke4NysnTqWcMDsNj4W8CS9NQetJDZ2Gxie6RLZce85Bo15KY2PF3f3zrUxSH6jkYakP9BnKYCJbXMh51",
  "key16": "3PpD8UgfGqGLCtu7ehjB5RSkghE3vQvXR51XWJdyDwcf5433SRCuQFAXW7PdP83gJrDnFqoBNDk2EUESQqaYqGZo",
  "key17": "3b23fc2nsfS5TsMAiUsavZ5cDxSPuUTAqsjbUs35yEcT6tPwXSPiemyukiWMAj1VGLUxk8tz6pPBz2gNyHnndBKs",
  "key18": "2PJQR9drQ7kDhe16gYuvKTiMQYETYC77Qrxx83HsCdx5xK5LPzLbjUgHwYE93ruZSAELHvJAEufe8xsRtzTYQRSu",
  "key19": "3aAh76CRKFGrqmw2bRVLkfxG6tH1iVBCr9LpZhDU2GC8kReAhKNAunxaRBH7eCoyM2fLLarkaTFJBsJi3W1BiGnn",
  "key20": "5S41Sn8Tg54nRdGEaJvdiyeP2921X1MBUUPfarqWfSV7UEkufv94EZmQHRP5EuyPdao661fYxHjsY37VzgK7wcvJ",
  "key21": "4Pa8Joj3jZWeqDwEzQEqZvzJmraeGyaJrcP14Qzx5cks3MkLSEBmm3Jan391HcbU7j4fYsyUhW7VHWWoej7xyxzn",
  "key22": "52z5bgYK4URhJS4M32KboamCCBbgVapiwBgwEA3df9fCKwxDii4W5VyJPZq2b4c8WwXvPhoWpVfbsoho1JPxSgh9",
  "key23": "5mGNdzdWjhDF5jSZBA1qu2phnLKvVmzgUM3ShuyJjKCTNcAdfRTK71AADbe3m4jhKTjNAddqxvUVqdjFF67CUhjG",
  "key24": "4AoU2E9aqbnkZmeKzdTGwhGyKLjYHU2994G7bjijCPDxbyN9oR1A9Nov9WioMmu4UBPQRXBjVzBqinYmnu25cd2H",
  "key25": "cvfkzVr1k6Bu2HmPZGt9VGbAhgp7zyFZ5W6DVjyQr1AdkpbhB8qzYgM4xv1zD13AAhxv1g89zgdMW1GnHum2Qhh",
  "key26": "4mrEugpGGvgKyE7NunUUUYU4L3ynFPYwvKyi5KCZHjggjYmBsX8cwuwnW2c8Xnyz6yasvfdE2RxCmbTRhU7yRxtX",
  "key27": "MgsMpkC1obAuwbDqS4kM1acDNkbR69Z2praavkbfkDdZ74jnpAeAj5yFEZw7AcBdPwt56UCZwDGoGA6T3Xe75WV",
  "key28": "EnwniagGSNQs7ERPPBdo4yrtAwPWJZWMGxKYp6qkvKu6qKRDX8xJyMj8XGNnr21D5Rxf2HEvBdjDqVLUemSQh8p",
  "key29": "3PaLpVdqVvjHuNnChHBPFWXW1n2xEE2h5sEhSKtVSmuR37wgKx9TRPPCNpASDmxFfFoRnA97wgLE2pd6YukRNTXh",
  "key30": "5mbpMGm6MbL9ZFij7UBd3Z9S6L3827TRwfjgVeoFkSNrdimDTNjpe7HgohL32GHw1daB3f9VLLDqV1PnnaYPZyxM",
  "key31": "4p75qqyoJZUC568LTd6NmY8sJHFkTrXDsvo9sM6Pvsm6AVC1iSdw92FpkMLVaw9DP9vpYY4s5f8kupXWuNUU54A6",
  "key32": "2SdXNivnjNWUcwcEZnk9BUkGVXPSKX92j2jHxY5LFD8kupsh4kHTT1RHAf5Qn1f4yQBQ9RRvTghJdN46GpoQtqn4",
  "key33": "4FaqrKkcBLrQqm5auUKjM1CtCN5iGjpiVGyHuxFJqrK1ahRwLy8xFZmiDv1rYaZNX2JFoGPsT9pk523jYH8MDCCm",
  "key34": "3Z3aLq31nQQbGwk8X7hXoY4zheJa3qpyC8Q934auZX4RbGLipFfSakBPLxonJdvAwyrjhxW6P2K6VbpzsdR2R9za",
  "key35": "3XzmWu19iwXJauVpvcMwmMBAt3eKC6k9KJWsS55X7duvCTpxJtFD8Zrgrw3duECEGm8K1sNHLv3eJLxDacpwQomT",
  "key36": "38jxcrRz8uRPjjUeYu6pgPY2j11wAMbNcbmksUxAcc8oM9fbvtCVTZ53nSeKCq5Qxmt1T6xtYN6qBwRgxmDWkyue",
  "key37": "5QFrvdMBhKQV5GWwJx1u6D31fBWwd9o35UqAsXvYTFWX4yjD5ndUf4n4mEivMvoDcm1yHcTpvGQntT19EdC9oi9K",
  "key38": "mt5XBxMh43VEYJofzcETkMcyE81oAjvi5iHZaWiiJKcrzDn1S77GwakCncQ5BiCm5Cm4h4tP4PbnaKdSWcNp6Cr",
  "key39": "59nmWKaKcagJqqvzxXKwKn2PBcNJxeRvXqrCRB7u6t7aFxrUf29RH2ES1Bj9uwEiahwBPzx8EocxsUBx2JL3i8PA",
  "key40": "3VyviFTRpStWJ9EwyFgtAneL5ZQK9SgX4bzDm56gUTaCPo4xKP8C3rwLXj3Lo1Y38JHKfujZbm6DZaByLUbBSZgi",
  "key41": "5Tn9RAysBUTsGQ9porQx9aEJ1oxwzEMtqemCqj93aFMBq3kN5rV9LYESCFVhffEzx4zxViUpoty5ijH9vnr7X1zL",
  "key42": "2vjtRZQEsBHEgVMTHjnf5TVnqyZmzDC46WBfGLTxsagCfP72stN4pnbLazqucoAcPac2MmDyqCRF6YLHA2nJnpBT",
  "key43": "49BxthwX6QxFfJQGVhnuwwfbwUFHnN4DkSgiEQq4SFFksDUiKWy76cDYKuSD8joisTu36DPe8WzNe1GVSCsMmaS",
  "key44": "3XqTvjWLTB8Sfiu5Zw2KUbc248ByctXrMXGPTZHorKjE6hYtrfaj5QmkyP8gv3ohyyim6DogPnh5Rx7WoFiJ7kHx",
  "key45": "5nYfRvEiGsgerU9R6wmV6X785Xenv5wpYMSp4Kz39NTkB73mCWwiZm6cBMaw83QkmdDCLkQnt8NZCQcLQxwxtN7o",
  "key46": "2iKoXi7fsrB68PozKHTAHHZ9ef3ZEwnasXXXdGQcyKBmc6sSdDAdgE6ExQDTDNsuy2Vcrhqv2W9V58rnrCQJSJwA",
  "key47": "3uWhVTiuiSq9Z24hDFJ6wPM8an8ZXCCmG7FMqdUKa2AzMLRk8oCQugcjbKGhrNpjDUcc7FAHHv4xrPcbRgsz6REc",
  "key48": "4dScETDU3uG3fEveP1py7SX38BntGd1ecjktx2LQoFSdiAVjocMsDUS2ShqhnCM7AgrVfiQ9fTPSsdwgCQC5E6vy"
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
