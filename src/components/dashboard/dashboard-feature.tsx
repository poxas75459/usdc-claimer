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
    "5Mj1yASpjkuW1CpdZnmc86vkwWUi8dESwh58v1nDx76m1QbJRFTR3FtiLk7jqD87cfoxP7q7qcrRcsvgbbdSureM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4bCxpNpFiFdsGHzW8w7cEii4PeyWQ8Y6RkdjzBt7sWAyEHm1AaT6gUpDCX6N6virBHPKEbGpTTQLCpyBrX5vx8TE",
  "key1": "4bHj6yr49qX91VkPWaRDXvLhdPNxJqSMAKQcegoKonqCjLaKNbXWb8Y7aMaPV2yuLeJGwaLbJiY9z7vntuWYMT99",
  "key2": "4ieAJ6oPraVjiFiNTXxudGEJosEMvrScpVw6fEfwmRo4QRePLs9U3DAHhbDppipUmg9RVWGnt5N3LuXqDEzG5y4u",
  "key3": "3QHdrrzFk7t4oo45JQM91CWhzvrZEHjQAh8SoFfw12oxRbannRpCYMasG1rnqqXb8EWmKjs3ZQumq2XmjMATGn8p",
  "key4": "2MLj4PriwpMdati7wHKpJLy7zkcT4Aqd3dW8ZPwZWyXbCxRfUabdpt5smYPrWVHaBC3166C2Sc5e3UiFtLvX4i4v",
  "key5": "2Ju8L9FyVH2WPy8UP9ZrQKPSaLb2ETDqor3dNxH6fkWmsh4v83hZDhxbSG3WD6YirhWqACMCaXwUiTfu3Wm2djEG",
  "key6": "2ZRU36z232VCkjxZCBzG5XqZfu3QyhajTxQD7yDX5HbdnaPVCPc3sBZCpXPDtHABXYgrzmvYg6ZFXpCTNUgCu3Hz",
  "key7": "XmWYotL2mbZTaTnBeBHzLFXifDeXgRLrPCf8SaFADBr4gmLeLaRSBgFevWBaHTabesuyWK2FjMd76y8a6NxC55g",
  "key8": "3BFg6sRXPG2dB2uNVRoqYjKSNUTXZ59vSgomW9E5QDJDpMSuxeirsGToRWeRDVPAyE6UjWkt1bwkxLjEEwh39gvf",
  "key9": "45SjQATCya5w165D6sj5X4KeBriShreroWT1RzCpoMw3kUogziQoZnVM6WVTRhxU5nsjc3XHCgrhdRmxEyRmroeT",
  "key10": "5DsGpcHvYPciaodpyPW2Ykbae4bU1y9H6RBcsXhDfgJFRJWHkNNd4ToCnvHHqrHXoXoA4hDT11cw8UtW4FbNUMgT",
  "key11": "5EQFxsctECJp7J4MqT51jZdHfp4QjuGmc7WLpE2bxeY81ye8Xb3baxy369YZsaX1dNWpdYfbB8J6qfSBy1ntcVRH",
  "key12": "3PmyRdruBrxmYLq4HDExQgNHWhpss86h6KQUivKyGohYg38bykGPeXLGHzNzZFEa3tfkRuEMHHyXYKfxVYeSqCT3",
  "key13": "dG2i872uQnwqMVprTQdjAQWAs5bmvmKAaB5F6qZF4Za2ftyY4mdW3HgrCmZpTqx19daC2qW5Ba8X4nUpAgXyCVT",
  "key14": "2QrrbWBKZVvbKwq3mGBe55aHoV4sDjf7uTiDBW3HkUWceAJDWpDT78iQk3TLFwR4TwtC5dryBBWLKJW6uiS9aHPr",
  "key15": "mCXcL84U3ZMbvPTwkPPEuJXQx5Bi75Tpw3HC54AP8xWUHAxUhZ9fPp1zuvKwdKxfJPgW9TVZtyp7ujKUPmksKKU",
  "key16": "4Ee9Y3ppoNwbe5WzYhbXUx9StFNs6P3fYcEMY1sCGZJ2Ee7jDargfKyFkECy8eGd3SMHbAd5GN3rgMftrbr9XZYb",
  "key17": "4PoE1qvTUemLyMk4P1HBCbRAGik7xwNhV9eDwQwneYB4oj2gXRBLUifau9V4KQHdJrc9LbUCigoX21zPRQPHmouU",
  "key18": "jaE623jeopB6a5rsQpJt79TVCDPW2QPdchWkbJWGnotwyJXMpjwwq7YRe8mvuCbk6RoHraxxttQC8ceyNVPRA7m",
  "key19": "5aqaAVBEnr9a3o8TPDbGiAjbVHitz9PiuoMjAhfmMb5sCKULEDiiAJRszfsuPq7nf5C62ZfAERvsKpTmWDLPLfXb",
  "key20": "6TP7m82G9Pn3KvZbzZghkRvxZgUK5N7sNUCiHQXxbFWaTxCRxtHtr4cmY92oiFA2ForMdoYe42ufJEbChBjiNtj",
  "key21": "33a1AetbAeM1qVGBa5ALLPA2EqmtmmmFKGH79VQoNJ8LBxCM92Aa9Tdf7vfPZYMDtjdcdFr9cJmmock2owgpfoHb",
  "key22": "4MSeGidsf5Fj1qXKVeCpmbAgUKuaDVU6SxH2fVaJvtsavbAyZcv1m3XFBMAZbHf3ZSCe4uePEX65kfbRBTPWa9kV",
  "key23": "4fFnxKkMZv2cFquokj2Tak7Qo13uVqb9ZvxbVpwY1esLgd8AybAhJRuTyf2apSh2ETENYsU3Sj5SsqsWvFmcU4k5",
  "key24": "TZ1Gv4cV55RWVRWeEqZv23PQywuFzjw4FmeDCVCieEVv73bYKDgke9rWHHxKotkpVhjjqXg3PHNasSzZQpcfdJC",
  "key25": "3PBCSdNMSzapij3D8abKV8jP5RzVgeVEDym35haRac2oiKVaqVs4iJmcxFXAyqRGM2cvXto5bZNVmZDPcfj4FKXR",
  "key26": "3MHJCuPo8AFDHq69Pi9J5TCVouBudbJvUAM6d2cZ7kC1S3Lrxd4GT9wkpNDpUrTSuxtxuKgXQEbsPJgCQX2xE5Tr",
  "key27": "QxGguE2XLZNYLU1eFWWxXWrvAgnhbUkhm9AdUY8cy2ieg2h6iHAAFhVRha2oaXReNC9kj5RYiMh4Whc2GzWYEEv",
  "key28": "3b7W5ptCcpH9tXd6FbvK8ESbvquFLDw1AX4vtuCXhvcWYyRpwVMDPfGYC527ADun1yo2FRw6NrJmNL1Q9wg5NfAU",
  "key29": "2MrbCmFPYzj9Cz62s3KueWjc7VMVgFTH2EKSNZQNSXUZodW2JLH5bzAq9VTmhDfPBwJy3KQfZVTjREEnGnWVfb1A",
  "key30": "4BA47evdcTiiQ5v27bGaUFXchRVVrNBKY55TUwusvGJ1V2uaRx9SgHce7D7oCV6QcNYWuL2MVpcUTM6VUcn6bHQ3",
  "key31": "2unqq78zNyJt4FAQ5aRm8wy4cKRssUktNpUaVKiGb5ZL1FP9pwYjyNDsA55pDxNhhzdBVMkNuixg4kRST9fNspqZ"
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
