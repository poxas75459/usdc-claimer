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
    "4N8kwfBxDG7euUQH6mEwYBuH1SNcATLJ6icKPbsw2fEWTy1BRFZJEeFKyHXDNvhtFyCdRCuWoo8FXqLaHE6Vx3a"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2iC9sQRXKPDX3wNdYBp8ZEHLrbEp7ZNCmeXKLFfLrSBjn6m53T22E3yeftSdqWT9VdvU8bGhekoHR3YbrybX6Uvf",
  "key1": "4yVryaLxFcgv9PaFt34niimM4xRuguqZrvfBB4ESi49rzD6bRaQj4GNDKSLeDu9dRyH6XkNXeJePMwxggeoYQP6J",
  "key2": "4Ygy17gLo2TSd6ruAqDFHxTy9SFK6dSmxpmDZWkcGfduu5rzoCmoXi6NHx3rWjK6kZ4h6RsimHmFzhg3VUABbyA7",
  "key3": "4tGYvvnLDumWVzaxmQfH4AtDA7HM8iBzPrcf8c1FnXnKBnpx9Va6MTs173f16iw9NmuLCA4WEqkzKBqPCUAqhjQd",
  "key4": "z7NAzqZfLWnWTUQF6bnfRFDfQDMWVzTm9T3BfbKTAFkiMwh87rSTGAeSYCTLCi7r6RpTcgiXr9hibLwQj5muHhg",
  "key5": "2kVnJFapPaSdz2UE1KRSu46pT1NGP3ajmBTS2vw6f5vUfFzZjjeL3kgA7AF9VueK4XDDtUgZi2a7e1GuQ4fW7nAw",
  "key6": "3wQUWrekbFB1CTbiwLUMwpjheAh9jsnGysRuSRe16b7eBcTcDtQriWBtctd9BQmvfWL3Yy44HL33tQbWWtd6yewS",
  "key7": "2ZBgJfgVfoo4PJq1HDozg1hjFngmAFyzwxxmzgrybuPmoN2Uri9hYvrujwgakepVLpkNSauCSXJEfPpa8Td1G8mR",
  "key8": "5YBTDgbqA7AAs65srd6EGzmBmde3VrUx4Wnfcehpby1kashJRGqKwp5EmnikNEZXCPapox1KkR62AqsXMPrDB5TJ",
  "key9": "3P4biCjA7oDNTdJR3hz2Y1AQ6sAjdJH7H1uTaZFYBugyLnNvxbsGv5zBpgYu3dHYFZwGfyd1BR2tyhQexkH2zFxA",
  "key10": "3SYbsTLhLT3KDAnXtbgudU6CTwNzBvsZGcTZZn4yrheQDriHJaabCGwzdHM92t2rYHuEBoi48xMyxR8x4kCx2KEa",
  "key11": "DYxzngr31CLnjnULwemNfBPr4cZe16ThZrByhVMWpQ9W65iMF6wPK9NzDWYk6eyxbTYtAHrxgMBfTjws13ZzbVF",
  "key12": "5NaVMY9fNUPb6De6CgGMoYR8p1n4j1yRiWvwdkEgywwwDciQ5mhukmVD9b72RLs8VvMBg86J32DJqibwMaeTXwab",
  "key13": "2H33wrW7BhKrF11KGc391PW5LzRKdcA3HJD7Rfi3TLMGsjTPTToMtMt2kRfyfM15gnqCvickNwnE4bwN6JEStFM8",
  "key14": "4m78KEHQLz6feNuriTXm91Cdzusmf9zontiKzCwFd7CCzGfAVMVcbLHcqEU8Sp4WaSss4WMhtAP4ixpM1KUB9bxx",
  "key15": "2cExY1uw1RxvVDat1bw9xhgaCQFcj8WADwNRP5B8JmL8D3a2iFLrfKZscZYW5jLYZyXW35TEzJok9PKAUaK7jA83",
  "key16": "3gMfK5B1fvZk6SSnjG1o89T8apLxGr1pHC4xRDmAhgVuJ5LiMwcyAq7V2QmRwieSqAKvBCFALwW9fG2pLUn8Dx7s",
  "key17": "5cb6cdFxgKdpPKWNkNUeG7xqgSfKSsEH2eeuvYsETQTtaG2mBvUQoXqyriqM9xZcLqhRBLUp3pqhbfnBEVFC869j",
  "key18": "33dmc25UvrEXkJPPmRTy5edQxLTuucFd3mX7DJDFrRzCfow53RCrWZ8fJeN3Wa7d2xHyty5XfYny6amNsFSQPiLj",
  "key19": "5L7BmsNvowE134TrQHyd3zAQp49qV6TLkSgjsNVMsaA7jTHL61NuibJ8WnjSt5Bt9yzFeeZ4kkfAyHF4vHYdPtkd",
  "key20": "wEyQhkq1UFZubK8HH59cPgmcTPh2ZSdiqpvK95GZvY38UdzdGh3CKLNyZcsJjYHFBMeiPGCofwJijGtE6MXEdQs",
  "key21": "3oGr9xy8vg4xKhZiYhWfLLjYtzQRPgJr93BWqGQ5PqZYpeeFj43dGfrA4q7G9FFV5hD9Rh3sG1KByS2R86thA2hk",
  "key22": "2LCGzzVSsoZMMfoGMjHntYEn2DuugGquaArT8wUbjKJZG3rVwjnxUGc74gDzYk1W5jZxdFM2yxUgS2cu6omm6Fr7",
  "key23": "3CT8GFNPNt9LiizktZ6u2dKTCKC7YDAsNZ5JqNqBDD74tMcoZgXVE2mNYjnxCUQbyfUTcGsjB3mxh4T15Hh146rH",
  "key24": "j2yhDMnpNmaKXouCtNmcR6h2P6sVfxnAg9uURSruqkD8oyb6NKPVGd6uoV773wxaytupFy5xyMSv2smbo1ySKY9",
  "key25": "2Qy37EvvkY94VNr2tEVusGyWfXW69fmuTEmnWxFNPgdcnduZTV842sWnJEp5hjiMSRNGvjx3KoJLU4JjkYdBBidQ",
  "key26": "3VPZeVgBdQdhtA1xzBHMNqzx5CtvrC646CFSicGAsrsRTP9uxiGFxJ8zFTDSXacn19MdgRHsyv8din9zj4sR791T",
  "key27": "3zgAKqQA5Bxe4onUxbivMg98GS8ANBA97x7KGcPe5ikNaqNetwLAK9NmJ8JVy42Xv1PTGxBvBZxYuJf8sMhbUmks",
  "key28": "3jLMtvsVBQu2AtPRDxeq2g7kKykSSHE99NSgPk7urwCuFvdyVsLGTkuvhU8eum8x6gQ3Z3zZSwo6kpaZfBBCQ2gR",
  "key29": "3ArL1nfZeazS86NutupWD9PmxiNjGDGUTYVt9EMxNBpjVrsssMeCGjxUAjCWntquGEwooBhQq2jBLXkSmE2uG1KR",
  "key30": "MEqGtPjqFoA7HdGhphLA35i4D86rjSVknm3eAB2GGPoeLnjqUfes82kzAs89ijfu6jZcBfApPjEAMcFsMWofWm7",
  "key31": "bdrJtagLFbiZSn1KPMQ7oivZx5xS4xknJyYLht97TLG5jY8m78icxAj9nC9hTphq2YphqyYxL4rq3H1aGHxSYJa",
  "key32": "4R2n3VfHCmuffquxxjkrNtW54PbV8521D3zu2rSvTEHeqWpJmt4ChwMAtC7yhe6GgacTDVjeaYKyPzTJNWPC3rAR",
  "key33": "2GdZohuZHhVMv6QzhL3rN9UbUT3zmBtm4GN1HbiZ1mZ1kzQD4x9xERqCwZfeBQQrtfm6Tox9FcrnUz6Am6SwuBBb",
  "key34": "45tKEco4GBh9xd17eajcaoUN3CFr9L1cGA7yhroFqzwehcksmJyTG4UbY16iFThXzeCetVjDaJAsPnk7f5qDsLT",
  "key35": "5ARuV7ZtXgJB1wZorMR1opReHp6MvkS6LiZdPoWUp1PA4KhByL1LZttfoFdCdamKChxSECjrmNd4BnN55Grdqnda",
  "key36": "5MG4svH43CsX4JjJAhomaD3qrFeSRJ2in7JrDNtPyfTVuwVRr1hibtFhSFCmPx71ewHdZo6JmakuwL31G8dBzQEU",
  "key37": "3RPv4wsHTei1Z2916BhLzzJQcenn6HF22FSAVzHjYMMK7FcTg43rTz8fLM538RpZ4XAzEj2DYsRd7unvxiybNxTJ",
  "key38": "5o3357Jvs9voDVW1CgtMeXgBeqxwh4CWaPsMAHUsvXrZJrBu88Lfr1rYmASXLhuSBM7nqQEfFqA2GsMCJXC1mgjt",
  "key39": "5NYJtPdeBAvSrzzyXjtJD7BvXPaBZXyu1mphtYdtwpxxHFYG5drQFxS92rENvMThAw9jsJCmDfAUmgbDjD9To2Fy",
  "key40": "4hfrXaZrQGqpDWLGJLhWHnQbhKovZ6qgu9gFPbP4TkGM3mY7bvFwnQxsjaoznSmQw5aNKGWDfzYx5nsth1mdRT4X",
  "key41": "wixHRpv9xozBScvHo1YkjX5ambkKKdM836ykRgaJc9SeydK3q4PaoV2g9GYT9kBNnh8TZddLRjUhbSVG7nFs8Ei",
  "key42": "49TVBnPKuYWWTiU8emQTrK8qoTdXr5XHEyyPKdHdGGGTP5JShhdQLfriZqALzth9sMs7uw8jtSSXvLRoKrHrXfmK",
  "key43": "3wQGtd51eTBGqyNeiNpppfJJCGtG7DH1T4SoXwkxs7TYLAcNWR8iW2mz92pwMNL4PPndjj9VjLmhVewTTEZqBVhQ",
  "key44": "g4Yp8x1iepX9mvPy7KsrKCBeH49rVXTz4ghBQQWnjyv37aQBeGCRnNMg4bUjXYLuq8iWia5P2T67m1UVPxG9R3q",
  "key45": "2JhuWyDhxWucJNyzk1XtqgRmum45hb15FJWFZTFN8Y2Qm1KyMPcWDJ2y1qLck9V9wHbf35aFMwFzXBktoiDCGHN8",
  "key46": "2pMwnMUPdp2Ufh2KRoPqwYCtCKZn8cJnp5284mPiZXuLfJ95RmATX5ZmLmPeGbUzskWTpsJxanPBiG4kkDXUjo6M",
  "key47": "3DQL4YVGoj9XPXcUSknGdPAYiLxtKHCokW8wQ4G5bGeFSpKDSg6QmKPXxytLGGAZ45Y36hLeQLeec99VnT3snq5m",
  "key48": "3yvn8osbvnGvkbhp6TPZPmJ1SeXfappvryZAdigVxsCToGox1wKhCSFru8737R5GSXredRcs1prQzArsjZyJgpdg"
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
