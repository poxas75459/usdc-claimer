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
    "4nebLsoRgHLvSrYvHLZbXw2NrhSx4JSRYfNFSAjoroPAYphM1uhjxQXHXNnusQVzE35ME7rZeYVPV3ahvypSwYuQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nEM516c5umbyacTXtFY5L5y62WFs2iqL6a94JM8Fuz3adriZAio8nKEao5HdsvM6a4ACRvDQuPbP2Kybt8b1b8H",
  "key1": "56NAyqKMLDtwfuZ3x3QZxh7g7FGhk48Zdau6NDYCMxV4qtYsothiXwHQJYkBMor1tAR3f2vc8An25Jcy3npSkJEG",
  "key2": "eBhSRimw1fH1eaKjpv75CveSXyYuB2QMTv7ekT2cFArUfa5YEs3DbA4j2ryfsKTxGSE6B9CJ3BzRLFPD3paGHTD",
  "key3": "4zgw7Q7QkkPngq8isfqyNJ6uSkz6aWw3A2F7o9753T2w7Q7WxhYcFzrBrrDPWN28WGcDZmdLcudKZ6mfQLdchE7s",
  "key4": "2asbeDbqQiHbXMdTy92CVS2GtoGuNY7bDLg1DzinrF3QdfqNy1fbawsm8ZfV79sBnDGj3dfyjJv5g2xHwTvttiaV",
  "key5": "UExecHg5u1C63eLgTquuuBRPNcrhfV6nrTu9QT7Hym6idWdREmWr8pGXiWegaaAzq3PB9tFa5bXeBhuoUr1tr3p",
  "key6": "63Xh7mR2SJ7Yrhj3ijEox4cgBs8ko9hSfEFncSjxS7XGBPZFEoCmzZNehJYPt2V5hvZ2xCGhb8sNnyoahH5xDr8Z",
  "key7": "5hekNaQ3L9j2m768aJeofJ6ahYebL9s8AJh2pvq4RNi94NgLvwLgBC1KmxvaVN8uRm6gaMcJHpaiNm3kAGJqcbR5",
  "key8": "45oosmhGU4gai3AcBDHWuERNZBMiae6JW7CgMAoDWchMqzL6MNtQZrrTHqfhLH33HKdQhHEtJaxx8pDBDeAVT1iN",
  "key9": "2ces9LgwxKfNAdzgE469MFUc3yXk6iLAqK4tcQA26QSuWdwLGF6deD5nCkyqRCbVPWb9dX5b8SbxjfVegV4wjSm8",
  "key10": "2MjM8iDT3ZoLmppps2gj6tPu3coYt76hWAsFQUr4r7hSJJNAbSKXumg7NF44SKv4kEGJLzURyeMRCRhWDMgetKRC",
  "key11": "3F6foiFnMq4XXUPLLwUFmK6ymnL9obRnfp69TaT3AhKs4iMKdkcCNp5W3aetj8P1mB31L1VeBiyYyn817sM6Vydk",
  "key12": "3JwcsyrRGauxD9swfCwJZi3K3FnH1nwzKbeqyZY2bzYVTDin4wRvxUrGYMkoeL25SqWYNMiWXHTQAYo1Ra4vP5XS",
  "key13": "5CKaZwfiYN2wcZHwnDeSZnj2x4K1YDZ9cmHJVyxTL1EY7EcWKGN6xN6XjemFQgvDG5Bhqb3DUFfEkCi9DzjYmH37",
  "key14": "5WujQN5GXbmHqPvWqoxpinodHsJQYPTEaL1VvNME6uZz6m2Z61d1VxyX93j8VxExATuS4Fmki2YAqiAwKVz2d4Kx",
  "key15": "7kyBJkTMaCu985VNwjMmzg2nH4Xyi5NFfep6ckxgJbodH4CAEJ5xL69EEjW25bqtFHwBWWbNStqnoQE88VZii6o",
  "key16": "5dNg981WMa1ut6fLN4HPy9pQcEMG7dFB272Y739BbiZ3KyQyzRuBYuCY5GZBgd9DmsTMRTc5yyHothFmsFUaXbH4",
  "key17": "2ghbDgDb3kqafN8TvfdTWfCx92KP74ALFcYVsDGWM5Aac2niukFftGF9CKrCY1d1Hg6xAVvf8hBMEMZMp25XHGYw",
  "key18": "47ZQjdyK9TqYXVX5faGbojRrXz1WwAfL89DrvEphUsMMvQPPk6fTRVm1eCfuLzxMGkrnJuhT1xXWwoDt6gud7jtF",
  "key19": "4AweWSQX9QittWbhPTRxR5yJWQQDtAKdrHP4U9ntegRUjkdW8EuaomyBXfWJML5oJBNMerUUUQZU2SVv7GTmfg78",
  "key20": "2DxRrw4YJUnVifyaVNbCiyYuTNkx2dipdfMFPQZaekr9ahWdEB5ZordxSzm7dRiraKes3BvHTi67r9LgCuPHdhfK",
  "key21": "4FxxG2yakiP8sFN85Av2urVLLfxxtq2T7jhFbhcqJ6dzQH53qF9yiAFiySCZD2yRV2gW17TQp6LdyDRiDwp2pTBm",
  "key22": "2wgQsD5ebD94vcU3u8BjkZdvWirgLRnJqcikBZf7GxLRRi1cUb8KhnQ2oHQQ8x7xggEQGkjMv4PGeFgeb3RL9LB1",
  "key23": "nm9cmqirzowvbTMuDuSq2LcEsVcmePx1PaDBG8UYdnQtvLUFdrZtYLsqFCqGrqWGuHYYZ49W8RF3RXE1Hm3vVKE",
  "key24": "3RzrjWpA7QDDMTs63cLosWGGECgiqhn3SkD4wdq4hKudgpRTqfH5gbmuoq1De7GYLYn1bKfEFXqT1FVUEUHvipfu",
  "key25": "2vtkCYyWsqvKkj6AiH3AcLbrLyfS74q25f2UJGiTdTmE2n4Xae8NqwFTktJkJti9HSPiENqUmhkn59KMQ9Ew48ps",
  "key26": "3jumsc8ugc8ZpsdvdBJf5XDRxot2waU7uj4swhrwjy5FbuDNWe6uq4BgimRFXu7eZVF63TC6juLLvUx9qtaGUwJ",
  "key27": "5E4RBng67gWs1u4r99M9UYGDkgb3B5siCVzj9mKFCP9KpwR3byzCKQ254ToXTtFHkSfoL8yfd3BrPai7pif1GLnn",
  "key28": "4grnbdKf9Nc4mp56dJRoeKfGmEZErhN2ChbYvJi3iqghXMiaqUm3Ppro9VfhWZXrxvMKMWrVDwpe3UgDq3qagHQn",
  "key29": "4KFzYPkFayvZtwGCoWwR4oenynVjff749KRHXnEGA2xsrhFkWFpjeaVQkHvUdRerEEgp2LYf3JPfwpi5LG16cEFG",
  "key30": "42FXUTFagkpkCzYL51dMBxuyMmCWL49ivfrP3STMSJ3uUzGsEX7cX6pcL9uy1akkrw3ycQtWtbRNgsToVCUGnFEQ",
  "key31": "2Yrnwd7rfYhTBhSueJ6VdgqB3NXPBtxQC1MthXEq3czJHJZ9FCXE26mrbABnmz6Wu15qPYoZduZsxB6jsGqRzoZo",
  "key32": "3qRLpKzXkzNGwECQW3fDMYkTtrtkAwVhyGzPTz57mXVfBBDnXKJ85r1x8qn2Qpv3TyNsX9igjYpDvQEnDdf4ZmEU",
  "key33": "ftCeGwwDHNe8r3Xzt4R8zsenoX5Ue9c7wZmeigYLLduGD8KShvrrPJxfxyMmuX5CADD5wvbEQ69zwhHBVLh1dhB",
  "key34": "4fJAL2n9AWFWqYaHb4NYomksYyQYADRMrJNoLB37J6gjNuQgSgKQadYtKhVees2GtWaFz9UWLgFkqnUiNLuHyFep",
  "key35": "4So5ZLUq4DjLnY3nSCUP3zmRVqsRFmbfBVjtRCyaiaRiqkAWqcW7npBVisGBXWYi1VaKMifNYpS5s1WP6HsgZfRU",
  "key36": "42z1jdpet2ire9vyFJ1P3mxxAxUuMPKuHPU7eDeQkLtFq2NQUE4Bogor3KyoKgjz7wB2U3HM3PhgCPNRkhJ3s5oP",
  "key37": "wWDQA1ebf4oRboiqZQr4nbcLvmTqW4D3LTMdj1xhrvuindHqrtbmvavTz1nsLkBwbFsugyGM4fn3PQ6tcxUMEuh",
  "key38": "N2CU9kP4GebFY1iackyVdwnKvbWQgw6BUUs88iE3TC8PFmnjtva31vQkPx6mfRbB7aYVmkgDGz6B8C8ZpdNMWXm",
  "key39": "dVGvoRxVKnXLXhmzZLZQNaQsYSGxV8vpKwMdKWzr6xmUifURvgMAtQbgFitVstvWa8BsGAqfsQN6ZsLrYcbZYwD",
  "key40": "3MdYN5Gx2FWkSguav6q3SW7MREZ8hdrh4VGX4P6VjmDnrMAguKfhTQV3sDu4UPiAZ4uB361Ewa4oCYfCKNkCYdGb"
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
