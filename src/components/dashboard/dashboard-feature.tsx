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
    "2NfTwSQSLAJiTcBUgZ1ggTpnakX5YynjP9TG18YWZ4RDXsZ41SHMBsSFVmUjqK1tYC2p3Yh57RWzzF98rDCMKhCA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ukaLARc4acsV5L32GmZrF34myifmiYPJtJMCYbEtkkbiYSP1DCqMvcK9q1s9Q1kHEcVW9qtSaP9jyzVeWigsJ4D",
  "key1": "5pyTkmdUJ3dXDe6FQNrsbsKdC9gkQqLgkeLC8fKBwc6i9pzMSFmcSKRaQcmGkskknbBYTUYG2312UVcrv9vkaPCR",
  "key2": "vYsVhiGp61CpkVDCkrkyUQnR9XvEuPuRCq6hNkCJg6JPNPH8hg4f49BFwomwcFK4hEo8BEvPm5DRqFffkb8K2yK",
  "key3": "645KBvMDAYWeZMvNuVsAES4QmDBrQbx1u2zFaka8p5N7qs5hjtm927Qd2EFWwPbwNUXTao3UsgEgJ1kxWBHMPMn1",
  "key4": "Fp8v2eCmG226c5P6fvgsSN9RL2ZkZM3tC68qufRrg5fGSbC5FWeSCFWGCqDGs73CWzHxbjeRdbTuU29Y32LCz1d",
  "key5": "3BbKYi6hugQTy5rcpAok3xLhUm1dfy9HWafZYV1Ect32MVRQ7VkUE1MusiBowEP7GQU4k3xTMSGmgmt5JWkxfdmH",
  "key6": "s4ekwaap7HLGFwdWyNTgGdc5UQa6YGg4jC6KJNtB9H7pgux6CtRfU9RMSAL3f4ipSMkD4ivpe9XEQybsX7RyFQE",
  "key7": "3ur7SB4PebHoGPc1WM2B9bJo4BL2mswBBT98zzsCq7kPwXoEGNHBsGUdHw4argP7Zryt2yYvtYBWKysgLucFHWyt",
  "key8": "2pNsUWwpmZuZrGX8nNpBTFskgzTPVXpxo9q1iavgP6WWdmfHSbfyxK9DTrUsy1QgeM3PiePfV99BHRRrDpqDUyMK",
  "key9": "3jH6NuKwqzWX7TncUEEyrkJgfsRXCfpwKsQ1z7hJffBMhcRRUsh2jwfyQW28kfmXB1db2t39hP9FiEPoJsC8WPcc",
  "key10": "ZXhSmvYyT5mcASmwBzdVb2fCUEhKnVGS6S8NGpFDgUnXHmAuz4L4xRCqQ7vwPpYJXcwyr2RLogt6KbtGXULfdKG",
  "key11": "3rCqbivNvaSwpZzZT4qH55k8Bat6PjA7Ljk6UALdsi7yZ5i9B57eVqqJcwZDL6oJyuWofqg5y4NRg5v1yEUMgbPe",
  "key12": "29gSZaaCw45oyQNF87ZVmZW5X2CbQPqsK4gBv9wtUyh6axBDDhg1Z1GSijPFWm7ddETTVR7e3krukGDBLBpkvjhG",
  "key13": "5L5YQLxzsRFu7RXRABwZW5DTL1dY5aEx6fxt83oSdj1oBi6VS1tmVoRsXRL6ehUkEPgUGMWqAQjP6kXBAfwdDyLt",
  "key14": "9shtqWA2x3jEfwgQrMMUxuNzfocjs467C2EjikdEi1dyqFVSp5wyb97hyzx6EFAH5Eh58ELo8XNbLshf7shvVpA",
  "key15": "2vMddvY5zHSFuUCuqzVf3E42kUV7iu7YHQ3VkM3n1XSAuwDF2ToEwJ8K1rcXRw5ET3YHoPMJaUXAHwVPwexsKstd",
  "key16": "3CMyXFLmSMCiwpzfE7AT9c4MYFM8opsQ4ppZbY48rHAzuvRLgWgfkCY3MoxYmDqbdDdjFmWsY87G9qfaF28482Mr",
  "key17": "3FBJDZFrhhepjTpeGRBitCwVjebocbfekNiLAtNEygjUr6YeaQvi8NMubKhZacTHvrz7xgS1wMoVneYRJRWJmc16",
  "key18": "49Wyk4Pgd25rzUDePYjhf4yLV5rndi7ujYKT94rgZs9ABpLbjz2frBRo6ZvtE94Px1SkxwS2g4kZ6JVNfpE1VtBf",
  "key19": "3qU9kCLVNn7yuTfvjfWqWDFX433ETMX8XFyAQT1yPJPrk59ocHvoX85HNDQK3o8qggQ5cQDDwBeMKiThFXZmEs84",
  "key20": "5KZmtEGJ8pKfsn4EzQReqdA3MEV9Lo4337eZhnHE14NidjA9GC1Q3aBTQPNQMkodvVaRQnAnry2WTi7d8aGgo4aY",
  "key21": "4TMLoVmwhkdAMX78jBn14a1wsV8ruWH5MLX2fd9bkq4jU4nCVUpRFrkTiXBarEaGVAhysU9HJ5xkWpSjmCaf39ZR",
  "key22": "2hV1gjbskEBh2dGf8y9amVWYMeJPtXc9KtewgBei36dmqYqy99Dwtb5rmPd3V8WziGf8qm2WbPqT8atmBRKiAA8Z",
  "key23": "53NrckYtau9zpphEqE6xstrD2GEemSgw9pWEZTkZUuGU84PRT9cD9oaUBZjMEUgRZ4GeJ7YgLD5V1MA6CkSDx91R",
  "key24": "51cr1QrCuuKJLq62mwtNJzhQqkgRiS2VJg1ywDhjjaxTEykSYJP2W4Jew4v6x85WFSCfqbJFJMcd5NdG1dK1zQXb",
  "key25": "3LaeNF4EvCVSvHfee3A8wrAA37vBpjDq3ZZJpGBFRMGm5eTisAVshsSJ4DJrqew6Ss3Ymfp1Rx3BgzzBi6jBzVak",
  "key26": "4XhUBpQxZRoA778WejyyhhcgKcDQfqpuXUx1RYkiSLH3fSBQABdtn67GF6rszk8gGF4YgGCfhqb5XCosUWoJFHo6",
  "key27": "5Gw7F2sMixZLw4XvBfP3zEiqLqsWn7jub5F4vKCEHPJym7sncy9R6kpLpKHSvwiGMSiDw47rFtSXT1cEiPkAw8k4",
  "key28": "2D75xtJmfMD3bnvEC6pRVm32yWV2Ys5PF8i8L6XYxuLFfRZzq2zCkNWsQBSYvpTZZ9aES2XM79KxMs37UubpHArr"
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
