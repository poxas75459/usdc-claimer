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
    "MtKm73gEc1eQZYsnXBmfMTrx9vkuUPcWRDyKi1TACmUJLTRXcpsyhHNwYr6JWeNGZtW7MtbZrB2K1mqgxPHhxXg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4nSrKYQFDgpCxJfGz2zJbQwk3HGjSj5M49PtaUPSkiS1cyrh3Mf8XEd3X1wwxKDVkS1iodYfx68w1eFbS83kG8UE",
  "key1": "4EqNqakyDEG5uZzxDdyC489EAmovmZXKA2azF7UFe3XaogKzAmM2GRuDha4bmiVqbNef8BPvp1y3JERjaynb1tzB",
  "key2": "3QFVzTfR4rdJCjTHNV3Z9XQ4hn4FepHPePr3b6HizRDzTdAv7bCh8bYHAfFo6C9yiJGsEio8esSbMw6mwMwG2tke",
  "key3": "5Dv5vjCTfo8nk9rapxPSM2ErACe4Cgjd7BGkwpfBH8KY2xTmFm8NtgTh9uzhNp73vtXPLtLDkBQ19acsHUXsuDxD",
  "key4": "24yttfyi4As9ktsmKNuMgi42robjZsjQnuZGWjFEMvsmwwhC9GYaKB73isGPvVyqTRdqJyKk44bTwYUu3ai3tdh1",
  "key5": "65kztaycv9aUvfgQmj1zRfYEs8FWd3jo96fDHpdpPDTwEWxbwJhYrxYscpsRhpTPtFbtkLNbd2rLiyg94XZd1NxS",
  "key6": "4JRGmjhoyzYFqheSwtVWmwFRt2JJfPGj51vJKhYj7XLLAZ94R2VCpAwvEAT7G5bRNQYVqKYVjoJ2qMLcyMWYBmAU",
  "key7": "444vARJk1qexS4eEDy3wk6BdQ1FqVDLMYejrfEHTo9fAtKFEsmKBuWfkNVkQxFdXAGNFrCkbZt3UgGBsHShNgWMX",
  "key8": "xZCRbJmuXRkA7CB2YzdqHZe9NpSd2S68WFL4uALzm1TzNRLzzzgUTmqE9f2H9BT7XbMzLtpDtjhbtiyjrATDDUq",
  "key9": "Vcd6GjEagx2Do7hV3tuUw1RrARGe96Yju8L89T57JhkHR2xcaNgbj5yE6UPddqawqF39cpc6eCwdUupCEUZruRt",
  "key10": "53CxwVJSCBpJyC9T8DxJMEMmLXyJyFgh64EsZWG2uKAYg3neWEs2tpYP5zBEDnqA4xAn2ed514gMebisyURVRcDX",
  "key11": "pBitU7dE6m1XrQDPXsvvjF9EFf8bkrMRWamjW1epLQemTsYJY5LrgtUy4TLVs3Mz1guj8CX2uCntTK72r3si66x",
  "key12": "5MPQnFVc92d9tm7rprKGbxTxu1hdtgLLwjfc3nE5MqoRq5rs1qnn76s1TAJZ4Jybktx34fBvskxQXSc5poXVfSEp",
  "key13": "4Sd1ruGwMsXqCT59aT582AprWuAu6z2JRzkmTZxCanvrXyJC3yeCBKWXncM5ECga1Ywk7c28k3qiqfFen85T9VuR",
  "key14": "2iTXwV27ugVvEHxn4TWRp7cX6BqXTU95Lm1x2B8176KbnLGUJYqWHnFaSJ8ifCDSgsTREhuci1d8eeNR8iDew6L7",
  "key15": "5ZzJbtQQRuZuKi5meTyyrKRojjaVik6NUGekkjZPAwQSR63vDPZVcVnja1CNwak8PCdgGT71q98oG6WEdxXj4sxV",
  "key16": "fSkKQQXUdccsUppPB1paoYC4rmUe2qjV1Vd7hHQwmpxm5AZGqS1pifzdu5fP1VNiwKuTHq82zJcxMTpAwd68hSA",
  "key17": "31eQfoFGHT3vRMvPFyRyr2m4MiZXv6AnXbEHrZXo4apYun7itV94NJYkaEKZ9wc3dfsiVTiEBPJxx6wYai2J1rgi",
  "key18": "265mBjbQqSbZ8CJawXt8hqFeYiQfLwwEkJHGrfwTwyWHcuCpRv3CgGPUy5pnc6RwGo5x4DsLnSvsxRtuZshKC9Qm",
  "key19": "3P8g5U2x4FBCP9iNGgVvRRnSTU9mSoBczmpARcG9Ck7vuLzpEPuZZowcjNm2iCFJ9KxYsaVkihsCtzxQC4X79zyZ",
  "key20": "4iFpFiUsqooUVzxFPvuFBNbN78zx2eg8hrbdG5kXWcvfTemP8v7Y9AopyiuUXV7Q1XGNiEcFzDH37cEN3ka7fX6h",
  "key21": "4Z5277qgK3BqoEVBMTkHijAhZuDyF8rPLudbmufxx5x6xXJWBSNCAo1FWRSye3idrDWa3s4TPewYyEgWvrNCKN3X",
  "key22": "2iWzp1vRMivvPR94fgHxXpHXq5GTNB3d1eoVwg23Dq9KbMQn3NzNALZqVK2vkNg5mmVuvq2oj1ShUGLnc5he4WN1",
  "key23": "4mavok6uv6hqeuWTV8PFhuqtGwroPioMKDh9xPW5J6v2fKkVPN6WMXFLGsLkSKi3cnkwNVVvBCCvdbDaUFzmhKfS",
  "key24": "4cxCkc4EJRWdXvuo3Khh8X6oc8vbhE6du8XCGBeRuaJBGNwcRyknx35Dnouh7ELjeeqEqTXGdfPzKGQdxu7KprTt",
  "key25": "78u6yPi7JRJHzBQEHt8dVP1fm5jsCd9THizGE8mTsb8cFXahjwTTtr9grbxz9qzUBbqWeMeK4eriCbA7iZC1WqA",
  "key26": "5jTcB1o4AtG4W9rSVKK34e65HVicaW3PvBYVy6qoEUq88iRYpK77NbJPVYfxwuQT1FbjqgCiKJ132v8HmVfJBzH3",
  "key27": "jEvx1AjyVdrnu9wsAMWz7EKekjbLuYbqmzwKZUvcKB3Z5B3Ktgkf3BgSbSSqyEwqFGZdXHig7Fz48hptiixKfVF",
  "key28": "4Qowr1dopFD34MZ9vTKii5o1pPnhP1oXwsQnzNKYUMzPsFMUT86YSWAjuBAieXH6tqvj6zoKrcdGToPakq317394",
  "key29": "4GjiHW4Z5Tfkp8EmcbYDqMXLPp2PDSABaYSBD7BCJWPJbDAzxLtnFqLLm6NnikGRE7w7Bz4GJzr2aghHwdsKjnR2",
  "key30": "2upZCvb526XYH56xpUSayWLiqHj8HatNZ3qj3azG4w8yFJZ5hxanGdFUSV2hGfJpjMm43mu4LuFiBpx1psSi8dVo",
  "key31": "3MyiHPH5dYfw7Ecs5kSv5mZd4kyaYftZz5zU6Tr2BUwZpvXHRFpQFp1PXWXhA7KrTh4CwkQvmVzG88NCoBrYRCXR",
  "key32": "5dXwz1ML18YwtB9cRj5ibnzcFfrnjUvRuZCQGqEZfZxpkQ4asRD9mK2nZ6Mfnt8ccRZTduidUwSC9zfrvGRJpGAK",
  "key33": "3kQ8boQVKiQrXhtpxsQweoXHo4n5XLtEhLSBdBDrNdovGNmNMJEKqZxg6MneZhYKzsyWfFMpGTVEiNoHKAxdrByP",
  "key34": "3b3AKD4FizrwFKoDUckSvhoZm9T8zBEWACxf1Y8ksrjwGfFb9Y771WCfFBkVsGdNs84kXQSDLdMpyPZS6k8h32B1",
  "key35": "3umZMbVt9jEx1J41gTDisgMHio2Nk8c14z2C3Bt7H1AxQzABCyEVhScirsd8fz87omrkkTeACbcPBRLme3Jk8DYK",
  "key36": "3V2pzCPNexJ8T7mjXDpVRDMvfrS7Ye1xKGzeaVKSGNQMAjR2n5jT9cCoZD4oQ4sMaprcYozdQi2oJXnMM3axPsvS",
  "key37": "ncPekWhLq5tr44jqgwm4yTfvxPS611CouiVsvjrLJk3ZqK3wTZpqhD3BuF5ijKooW8fdJbW3v5pwtCnBPQVpHyy",
  "key38": "5X1kD8CsYMvVPnexrrmv2Q4JK4jXSf4q4Bj7S2m2iK9zUXGZ3mVmhFwW84PhZZoWx2Sduv9FxEUVmLtbRMCZH5Pd",
  "key39": "21TsS4FSeoB2HjfJRPryU2zmPy13k9EFFCkdAQ53L7fYsU4eNszstTRBpv2hyveYiex3KBHF5JXvSJrfQKqeTz9e",
  "key40": "5VeChyFR6YGfyQcET1jP7mi4nhSpZbxpoMJ5opPkgY6VHyXbgxd9ydAhvaHGuDPEAhFtatPdXjzP2rfHfPLK2VMG"
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
