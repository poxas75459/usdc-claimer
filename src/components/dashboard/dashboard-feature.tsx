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
    "4Gt3at3LEr7jUwnRu8UkPsEmhxUMG68DxxXA6j5k1YsVh98J6F7ngA3jT2Gkkiuga8DJ4czdAEVu7CKCKdr5Bfhb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ibEvmRTMY9q2HivtR1jDA61qYG44gkL5d94L9CSaNhR6CeqZF6Z78PcMCgE2Agvcfi7TvTZCaeFSW9Gh193zcCf",
  "key1": "5ytjzLV5zEnwbaoDuVH6KinjcVzCCcrNgNj85TLwU8zE3HvLwDHD9mz2a2qoYfi4fMmdwiEbcZDBskaX2jp5AGUL",
  "key2": "2hyxkQZq2hdLyotouvpdw1hhULwHzhx2zNGM9zMkmyvboCYnyDjoitkJwA9hXZuSf94rkTKKp9Cs5tat9LfisZX",
  "key3": "3TwBZdgpVrnv4ss3e6btVSJkkejfX19tkfhRcNM8iDtpn8jmgDvo4NSxj8MCkxkqjxUp6QdxY1Pdn6QArWXQQ4hb",
  "key4": "39gmCeS2vMhRv4khU4ewmV8SiLJNefmkA4VzcNURgQdCXqufLptRe5iaMbahJmW3u4vjGcq2K6ZPUctsnfSSR8Sj",
  "key5": "3oRPrRA7FNGYhVQik8zShri1MZBUKq1Z76ivcpMCBY88Da4NHwYh99EJsk1iU5hEeUAJWUgedpgZ8DziL79FUSom",
  "key6": "2XHAKrfJXU3o5fZx5r5pNuy5WvKxiSB1q6ReJ4LbfSygmna7RLkxMzXZtmqAbyy9NuEFLnYd22stN3HFsbCp45es",
  "key7": "2ZA4w4PzwXA2SUWANBu42v8eKM5CsdxYWS3X43xu52wbCmeDMBV2cQ4zASs6rAmRqk7MPTSTj984YbqzHhym3Ces",
  "key8": "56UfD2AzuUj14U5CyQYm5ECHpHPVFT7iUvXHNRFZEHV8qWxDTzX2mhTH2hj4tWPvkzRsedUmwmejBizdjiKuiD2y",
  "key9": "AK9kHUMhZjZWYARLMbwm2nTgLT7uKnT1Dn1RiuZbkYtpAdikVj3EmPGxS1kM4w8PwcR91A5JtGbVoeE2MEUd1vm",
  "key10": "2HEwLEbWFQaR7Epm8vBpA4Z6zBPDUhAVAJcfejayCpT2oUfTrSZEWbP5RNWwPnxLxTHn3Gk1mSamRVXfja1yGTn",
  "key11": "43SiS4QqTEwRVW9qAHPousM4LpMF2j1D2xjZ66aoDntx5oqaVJDSuXSCBMRgyRb6M4gdGWJJiscaAdpmU1KRMRXu",
  "key12": "5aSvjzngn8CvoZrD3PrG1VUGt879nQjdmU2mP6m4fUGS2PdyjZ89vnn4HDgYWjCVLKVuQUtjKsss8k7CE15UTes",
  "key13": "Da8LLAH86LwEpHZMGnBdpKgSiP5Mhy1go7ScQGongQq9ZH3zDJLBuaevHqQWovKNBxDCkk6jMTm4oqJUKfC7bnm",
  "key14": "5cxQwsJPTqZj1bjWkEadcukmsqAzz4frUsFReE8P16NfRsfhqgWDhWnpSpGKtHq9CMmwbLzHt7jWtdxDupTBFU68",
  "key15": "xLShmEvwuXgnYqM9781JNMw2N82ZeTAZPYGAJH3Bh2iVsbnzPtYTvS21GBbDyrBQFcGMoT2KtBUCzaCNfczdcor",
  "key16": "2ytK58ikSQtbHP64uYFm1troxugaKdGo9qUbhAsgRDubfBPTaNdRktjWFHNrhHTHnev86KrScxagVTGSc8thGF5H",
  "key17": "B2MFr3AMCr22J9xoc2mev8nSVJdkwVR2NR69pQtmpyjmbSDGuyCd93hRqV5xKACmxTbNcpdbYLbLtRcqM8gTXLw",
  "key18": "4svx2TathCKcEAE3PvquFSG8XkZ4A4GAH6NZTou4z2pPvYGCuYPMz584i7iF4KUdESZ2RomLyA87q1kR4kcADvmK",
  "key19": "2sNC4TZSwicqxiaUVQ3qX3BcqRUe8Y94tHvvPaNerKhqsfN2m4WXLRxRKoJk2oRwqPPgYWFJosaCFcinnHgRQP8u",
  "key20": "3tb67ZacyPbz76eLPq8zwdaH5MXPaTuysbpRGVium7WdWqw7JTZnerUKkb88YwxWhQf5DMbfEs7MFNLAkB4TXYmF",
  "key21": "5PkUuaJjYRvDFhVEJjC772afiSxeLT4ty63MVMxebarAwuDu6WVgQqMh1uR7bCSSQak9PfFpGRKgR6M8HUN8QRRf",
  "key22": "tCwxyyoa5a5sUJk26oT3LnhwzTAtXNa8LRxA4LbypRigykKNNfJUsedZi7Wxq2VZ9RR97NzZwQy5kuRuHz2zdjS",
  "key23": "5RVx8CExsdXAM6xr4TKhcAVcvBcnomQQMtAh88omhs4BnfHJqpMsPpwWwyzNeDVeDAzrmau4UaVWHdsjbxfvehVx",
  "key24": "YBN8dCQbU5E9GprZ3sKMuDLZQ6ptEedMo4dxrXhZdvu242FkUytj6EFCVecS39b8WkUBjHjkmiL6NjVE4ysEpTv",
  "key25": "2x4XiWpTuF2n6uCDchnzNM5LfBvPytqvoyF6WvHhsUNg2E1YcQRvanF3styCa4DZ3M7nipNSDxyUfRZovC2wK84x",
  "key26": "4urXK865wsWvuSGWcSuxYQbcFFjFUstw1BsX4Vv3wZoQ2qcxhgtKNYT18PZkc9HCBjq1czqLRhszkMYQTTEZF999",
  "key27": "4iktHwaS2jCuYmTD2FsbvzBVKZ9hbhG6bub86YQ37LuYdk9z1diMG1Ch6AjxkjXDdDofg3AYei7B7VWAjXTWijEt",
  "key28": "3SbLVxE2W2h66SbKk8hC3L7K8PaMozP6YaMq7jWhHHHZ1etzH4NCAMCnheiiTNn3i3F3gb7neexJYcS5rUMx7B6t"
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
