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
    "33LCz8fBzozhRyRBfA3Es8bxa5LgTBszkhmavQ2FjuqNBeMgBgPk8MNGKxYHntpxceCHBWvCn9fGz9h3YN2gGyet"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fnp5zGjQAxStTJAp3C6UaNoRh9HWZYmPVKjodibvJXNxrWX4WuUMZ3QTDfCqcXZzdWGXHmeuCxsRzJjPJMXKNBe",
  "key1": "23RaBS8VJWqGMkM9buocwnwwbqKfbRsysXeWDL8bjnTM5JKBRekZnrqMzzhemiicS3VfpM4vv6XFscY4Fc7R69Wo",
  "key2": "4X6aNWm5mK84c8Sa5aNdg4mxy8idZAqRVUaCGyHWDMPByQkmVbHHcfgMSvFrbKMcfvgt7JyVXXvV6ozvZE3HYeyW",
  "key3": "3xmpUbYqFXaAULD8ovv4erhtJ9yyDW8AEz2LvxsHGEzvFfeYRGi9Zecqtx4DRucq3nGNwCCKnYSxKQiW77R5YW58",
  "key4": "5RdjAYQdCo6WKkRY66qnjjAM3mTE6yQqvkejVLKHRUXNckbeEJpJDyNndZ6YrU5SoJmv6ybpC6fLjYocQ6T9wi8S",
  "key5": "3HFi93fTURzDYXKk37pMx2XHdQM9ommM47mhzX8UH7FmqbmVophjdoRqinBuScnBme3ez5Bf76SbZA9UsVTAo5N",
  "key6": "5SoZeS39JgASHq5sebutp6euG6PSz8H67RxauKUiCHpJoWhChF1A48Vn4xvKCipF5FTBScbfqEWjmx9vGJmUv9JS",
  "key7": "5zg5ReCGNahmF83PYLuq3dYriWByghLYY8LPYg6QPPAbJSGGHgarPsXXNCvkM9SLcDamS77FNCS86g3RKHPYJSBA",
  "key8": "4ZudZ5QBPdChixcjZNLLCuGUSUJW1ex7j6Wm4vMusePbyuM2eH4toYodxpPiqNtH7MrJCQeZfRd1c7wic3PV4uwp",
  "key9": "3uqL41XnbmobBj2AHAC8WgwbbLpygw4qj5AyVTqQr41NW6PYSCCQZhNTXQwnigcoZsqNwCCdJw9h7px1fsHqyY1w",
  "key10": "31Li3VzFjAV4A3iLRjCbJdcpKcB82ypqWQRmSGEK8szB4y6hwbTRcNTxETt8HaWA16qruVG12sVMHkxf6pUfUXa7",
  "key11": "2docJoKChrFhnhXdiH6JmhZo5A1vvxFeJ2bYBNEzRC43jpVgkwzuLheAvu6MwYuTaPnZDGBjnjHFfiXUiqAPbG6e",
  "key12": "3cBafmj8DJAmTr7QGEby57c3MtdKqf9CmqdC8xmjCwUvXgpGKJtx3So8H2bFPZuXssCyMfgdevCpLqka5n1HE8dL",
  "key13": "XWGj9vPP4LUHoMySf8y1sQ38wyoJ5q77kBjgqF4JpV3oGfYSa68NUA6wGBwbjX2gXDFsFGCqFpjSJYvCddgbHpB",
  "key14": "4m8grfceDxjEhPUVfxDSb942Bng95WsFUJ6sQj8sqqGKSSevY5fJVnyzCCGvowcs4xPxJEGH7q2GpuAg1FA9ZGy3",
  "key15": "5eAXaP8ystX7tLyvR6NbbpYoJS9GGYuKzJn74fqWXcVjtRjMfEjPPXex6chTTzdDoMqECDW9CYxMG3o74X8GKbSc",
  "key16": "2GwwDbFvrN3F5pR22JNTs8GB4AySkuo4fAoTTPJ2hjruuEqTSkCLdsQLdtdEGno5EHzkL1i9ceepFQUN9BvB1tte",
  "key17": "3ssExc7qSLBTWYNGziQfMhY6mTV3Unnq378jhfFKXXM9rLRk3zvbMasQinpQYGA1xTPHkAxVGppAb2m4JDxQfQZ",
  "key18": "nfCJwU689BZcUGfHjDVCkcAXVoETtSP2UJzUdaMifqaDHSVdhUPoEpYvsGJEyAP3kv6uvodgiTN4mh8MvoVEcAB",
  "key19": "q3CcLtc1iwdGsQeiu5auerG2cj7W11V67nnkgYyr6scP9Zi2jq14LrGknX6cC5xJEvpi3wuEczWgUq9gsgAVpeA",
  "key20": "5qZqeigv2UemFFJYPXbNE8mCaW3bLZn7JBx9QV5tCLF94SDPWEFGBiTR1EgC33xNRae6TTrWWikfkRBiZbZpHPeq",
  "key21": "3LajKjZ6kTMAdc5a3vA2iy8Xx9puTUVJCQd8FWYhK3KgSNU6cLbmWXGeXum72erDMBK5DfS44EG5eoJU8jbjSY9D",
  "key22": "2HRp3cJDhWTA8HjnVw3qGZrcJAkdTQKbaSufG76eM7zYwVXU8z4G1eS4icExA4qvPuX7gvee61ZZmkdGy5ixPvoT",
  "key23": "9gGLvAaan1yGrdiHXdnhZ6sTrQeHSr7HGdnfxbSRNrRySuiGwPacfhcRnAiDtS8tYJpZS5VtYo8SpViENDXerYW",
  "key24": "2X9Mf6tPq3pXeHjfp1dwTo6SoMXjCmm1vC4okSqfxEc8g1mcBhQguE27UMDuVneDnZ5vXjgwUC916yHjTsiaQxwk",
  "key25": "VxxsXrv1Jq8Nux95qW6VHdSrVCPQEirUFnBTHcxWLYzxBV2HvwmgSsv9NzX3251SdxDVYPrcsQtnXm7Ab2BeCt1",
  "key26": "DcQNxnEpAuoW719YWzoQfTR9dm3BbCy1qdRmyRKd43d97RN45KK7xnJwwc2Z4Qc2iY2dcgWzjtbnWhx9Hqr9eDz",
  "key27": "5m2Fp71wuaYgZQGrQ3e6WSCEiRe9zAKKkVmgvsb7UPtA1VXpWeEsFZUMmMvkivzhrx9mLChsFNYr4zVCkJjWN5P8",
  "key28": "54LTNg7A3CUoSznkU6Cgfwqom9Hog898EBH6dyXbYqxfYcyasSFNAhB9k24gbjJKnLdQgpnNTVXt2u9aUbAh8EYx",
  "key29": "ynRWaifgtpkX8qgtNqsgPg3ugEEcyeWMafwY6NnX9qLppWuVRYppcTkUvgWWrFHEnsS9WDjPJTRza9fDaYKtYsQ",
  "key30": "5QeKhEgeJ7eRZ2HZurJLuA8GeCacaVszVdshonxGGazFDJRiRttBDpsHcQ3ugMTyQ4RjFesmkLcy9i9wpwjerfTj",
  "key31": "FirF4k1Lq8TMYUYo2cKAg1TfJVMfibeWa36uPjwLLw16kFUAzVnkDSPHk6kJXsYLgh9gKtr9B54WUff6ufcZ5cb",
  "key32": "5euwGTstxuragtJ4C69reZXWaYVhsvSMn2UxvEwkJyxxb197fbrDRCj5Mrf33BU397heDHCw5byomHTWns7kJABi"
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
