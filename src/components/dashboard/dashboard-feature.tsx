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
    "3hot6XQK3o5jd1RciKw26kgMqmu1f9EbN5icDE9TBigf3hAK4jQdKZtVmU1AcKLetxBHDNUJ3N6xSu3p3MK9efqf"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7DNHkNEfpzmohWxfZednk6aFrjgWmPQU2Spp5Nn4tUh6uLXNZR4iGyNsLKdTf1o7bFnfvQKTpabQ41y2JJCC7pD",
  "key1": "5Gz736hPFmxjWByTpg9ptMRd1b975ZYRJfyWgVh83DJ8JaAyUhx4uS49trhJQfHez4N1KRXxb5GAMgTNjSui4HWm",
  "key2": "qxuH3o8Fkht4Jrt5bR2kzWaY3gyVSZ2i9ayjUKMwfYoj89zNtHprZp8N5StydwxLSXQiitKJB2117MuT635zfLy",
  "key3": "3DQ7fdKofNAMncEPi1DNdnBi6iA5zvNKuN8ZyopFcqGecCjHu4Lu7v6gxEqUoV9AmXdBgUXS7g9GEmGzHCQ9bE3g",
  "key4": "3XRS2dfosi962iDKgnnzstaJ5fMDg3REiHEEbuDrgGA8pALvbzHbbnz1qkZ5AsV7zddaDhqRrVJqwFjApxqVU8Yv",
  "key5": "3QoZ8Ygvg4LWPVnuDazuAoqjs9c4bV7BV7QYZ6mJjsAzHi938yLUwhWBkJoD4tFPAvYixLBxTvu1KzygaV2mfKtM",
  "key6": "3TFsev2N3LWn8wbzM4E6Kd9prkjUU77iEcxSUBwJT2CT6L6CFYoht8h1g6sTyZZ2R3upHz33GVS3L1AbUJgkz3Qr",
  "key7": "vDtAm3CeYMs8mGmb5Zv2BRJfHTJY2z5i6Mp3LzZNtYvUsWKsvtipf5tg4asLwhJmGS1mgxRtWsE6ULu4VwTZWtQ",
  "key8": "2Qyvn7wMB4kek36kuN6A45TTfjBcZeDpUgwMLqJJnrLXnCuy4FtiV4Mk6YotP93CLuTTwwo4xtURpbPJte3odmhW",
  "key9": "5K7vdZGvzPNSwdaCS6iHdnVZsUEH4Ctf6BDmnaHsvafWffxs2Zg193hbKtDnLDYA6Xmf5Pw5D2XGiRgd5mAYPJ4p",
  "key10": "4w1LkeKH31pwv96Q4yBYz6DPXRP5SUKdTRQZ9ZtCeYfpXgduMmspLhR1cKMBs368hK8BXFpQ8zgjxpXm8US6AxoF",
  "key11": "4i4JCzinPi6GthaMSYpUoFPD7uM3tBmfHWWoK6R2SevHxCLF2Ljc5Wj8qxsbZkMDbWeaYgf7zfATmUz6hy2R9MVj",
  "key12": "4FziVLsBiYkipPaTZeCftPc9nzEXvPHJPBdyTGhDyFw6vK472kT86Ynkhwrw9aCuibPoD22GSGtn5oqZkaeTui2y",
  "key13": "spaJeJT6pRm8ntKSNUXZ51NxZSNv3C1SgTw4nY9aRzJJDNXxUgbwee3DPHwCpGcxzmR9qYiSSjqhrPx55EoCRpj",
  "key14": "3cSTidCxyJYbERtbXwRUXR2fKuYuK86T7GGDkt3ZgqB456MdUMQ617Yrqm4DfHPbTsTbbcMzaKWGwAgXA95GBgyY",
  "key15": "4qyRwSMPtbQ3m5mBpEhgfSfrhhKMTsqVTBx6ASUZi8faeLp4Qbd5CA9rdLzhaaWMsc8cVpvHMUAidwQvLgADR4fU",
  "key16": "4hBa4p3Gy2UkyGsgp4xDWmehu5Ao7kBGKw4ho4gSGAXnbst6k3Fa6jkpekp5CgPmfoPAgxCzhaqtUDiLDxoeaeQv",
  "key17": "4LoQgvXnzaZAntrcDbpXU7ETDzaUgLwtcERbJVKv7shtVfFkKweaVQx7EswiMaKMQ8FgMZBj6N9HSuT1VbEZWe2q",
  "key18": "2pH5ZZwrTfWA263t3YMsva182xBXW3kWHLF6PZpUXfpMrpw1ZX5b3L1kFcTAqonJuvBoBimucTY6cgppLZqdMZHE",
  "key19": "2Bt4R3c42VKUt35XaaukBb266EfSfD8waa9dvuSugzGmGgtFp4bXV47LpUUYzLuFQcu5kAfhsEePt1rHZuwRnHkq",
  "key20": "3my7tYo9dGcoXnM7xK2gxxJx9FxF1E4yvUm6Cku8BWbBsnn1raHfYgzQ2ZEx9ZJ9aQfJuwdzBKLAGAcybrX8AYnt",
  "key21": "3D6errAaiETSzLtRBwpb4xZonnk7iBGaqSWE4sh1E6N26Hq334Jj1bLaJKFdEJqM7yYxx3HKNNmqa6PFeBbyEWqU",
  "key22": "645AmRgz467Gs1ZXWLXsSN6kSBVGgnPPFbDsRV6vHkt8NHCEKKCvKkeZ93vm4TvKjEJv65oDuLcENgab4gi5qzM1",
  "key23": "1z63kPnSvfNrzDXbdVjCyRS1VWoGn9NvWUNhdeQSYJWb1D8mFv85xvyipfap8CmqRUQQyDg7gqkvep8quUdE36R",
  "key24": "5dZ2goZxaS2kQy3j8KRgCgEmwc3d3koRanwAyvRoMuYKgGiWMqzzWDgxCRv2Tzct7RGPuNh1XFDAYM74ecWcHG9Q"
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
