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
    "3FbbnaLQ3iDkSDvxdPwywNpEQA3HNAaPFDcCsw7k7QYp1uvvKvJ7zktBt3WxQyNGyQYgdfncN12nf8ri4gAvMEpR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xUioPraojKGZXcBY86Wp1bfxaeFNtVcNXM34zAGyKUNPccrwdY9CmyUV5TWzhRDbsjxtskdKCbjx4Qmbjs3AvsE",
  "key1": "tariZgn3tebYyPt4SzwCWvyY3t2zoJRbwJ5RRP6uvUePqpXsjDwiVAAxLJ8jnSNTK8er7oVbb8Jg2CiJ7NJc5oW",
  "key2": "2ALRzwTvXZ1NpvRQwkPim36kzNBtn3qcxLCRYZqYn2MiD5Md5RTpa43eHnZupWPunjgHVB2fgwaNCjadVLESduW7",
  "key3": "2J8gHUpDy7HDF63q1UGt5Vyeg13KpTitEMTdZtWCSxfUkNiWz9zXvK9We6mBJAwgoELvRDjrKL6pMfzHziRuu8Q2",
  "key4": "3xvdpJcW9mQ86Yue5Kzg1Su3bRiHkmZbEdseqzFLQMD9NicB3VPYJJLeyLoUAbX8WJAxHkx6hkBbUZRhPfT7yWSr",
  "key5": "2mBRZbfrPTvLi2CrGDtnuwdLwYX1ctizZjQ2nRewzDcwQXcFsaxUCMdCQbxtbEC2kUKyPPFie4nFXLvZzuu282we",
  "key6": "4FKQUquPgnc2BaA8vnk9FrCVbwL3tzv9ffA99RnwW5GU62RMwKnCSFo5ytomQngxxvihVYDqjgnxYhxYbKMLjoU1",
  "key7": "4gVLMtKBgmhZKr5Ez6f3yDmykMnQSZdjmXHQyQBRDoE9YgMoY3azfs1R9DDe9peHVh6M1oTHBguuKP3n4iBky2A1",
  "key8": "3uqmgiAzULQZtfc8LUdhyZLE8owJXQBgDDenLqQVk27mJBDr6B9osMaZDLpywx3XJH9uA2NpKgyUVVTv5Nz8a9sP",
  "key9": "AXzbUTiYrtw59byD28rkoHSjHbYjuLoNPrguT9D4Y4zakFqQvSV7atUXHvogSKSH2Azxg3JWHpc3rRQ1i469oRj",
  "key10": "2hD9z3DHqMHCyZ441D3zseFCtL2d1eQ5gsQE2eLoF5XLkuUZay8iqdyYKJSBsLT7D9CQyKdyL757zicqLP1QZNDt",
  "key11": "5YjQiFQkDNSaZXfTJ5LakKatigVdnt2fDM5u2cVgAauemwnkjiCYP3VxF1tmkBMP1WY4vUiMih92meCuFPkDRo4g",
  "key12": "4mSsBe3hpyvMJBLYev5moFaWiM2TP66MnanTD2opNmC1NJ8skKewAZJBVkQmApne1Y8brud8zLLV87SbpFXBFZru",
  "key13": "2TCY8wRcjiF8CDauLPU8YbzBXwViAVFs5AaxX8SzUkbNryD9gKW2K6QGGZDuc95tJbx9tht8r7gM31UTXQsNN8aE",
  "key14": "3fdweregCCEwPUCATarJKXvMU5AFQAAXHD186eXDDxGHBUwk3nfVxQH9LMvn3VJYqM1mGLE2cswKkP9P1Rz11ezp",
  "key15": "3xaQY2A5Quo4RSH6d5M1tPCioND2BrXq4Be7AsCjMnkW722gjHgYqckFYgdpURSAwbukcNCZdFeu6pvhsebPPJU8",
  "key16": "5EhfAaVEX7ANn7cGT4oENoNUKRwkwqTPSWiPUffS81kMA4JUxPDhSrAPdQsZTD4qd9qXbUBWGNobBcEgfk1K6zY5",
  "key17": "4eXtsfQr24r16paaxHeShVYFBhfzds8rCrxGAz5k8fZrnyzpz4TMgWjwbu9B2eSow6eZkyoaQHd71QgMMtJiA3EA",
  "key18": "gu25vkybZa5kq8JD3b3TEcjeRqEkyNBu8qVZr2avCRqSWdR66FxY3WNNVmyQCAG1sXEN5F55M5fBdLwg51avKJ7",
  "key19": "4wVDoYMhizZQyJgRLbvRbP9rNfAJy1LZxoysNb4BXRMXJZZPWwNT1sxhyhZW8wm9v6uw3wNLf1Y7h1Ty2R5arSdM",
  "key20": "5dzTR5UpTAzQeyiMHeWR8NyuwL15TWbbxdvFYwUKMrGpphp9B64tcdi1uUXWuVXooGAB35vNLEEdU9kmcwaCSbGh",
  "key21": "3zqQGi4jtnm2a1Sir9yxYpAJc2p4ht4VXizt4mM8ZF6KUCUzwkMkhfML9cY3Mnt4dagUzuwSPp6A1NLoz7J8vZWo",
  "key22": "5MkeGPBT8iiVGhJCXBjZW7MiU5eu64JvmBKXZSHMBFrTbcXZB1vExv5Yubx5drdHs7CBfwomTCUmVJzfQHmRCGk8",
  "key23": "DaWYAKzApYPYJSaAg15nhVg9nf3jsiTkBVJ5vGQKQ9bgC71a59MDAtQKWgGJbopN7Tqrn1hsv7d7CqmCqPYBMgs",
  "key24": "5jS9G36r771N6Uo2qUsPbD6vhyNiTiaC9g9RqxAkEKWC1mCWh2tXcooskgLUwj439y8k57ij1FmtfijgLXuQyi9a",
  "key25": "5GVmd8icQ9bE4KmqHMgzHb7rvsWzgY2nnYAaAkYPqjZxkLCipUX4F3tPhitLwLScnYXEYh67yKR2ixHWrbXWNFb6",
  "key26": "2EeukgHRERTbAJGYxuhLKfUwJpB2HrkrgS1spmbaxXbUdarwzRzYHqhXvqFNmQCaAFw7rMgHdSe3b9v9ThQDTLjm",
  "key27": "5VvXbwMP7bWpPgGuT19Pyjischeg6AofHJkoTfEhKV3NEcfgnE1bpYDvn4cEFYc6f3GMaQa6nKfd2ogtn2VVaLfj",
  "key28": "5HRjHB6fKsZT9qhn1kQumKJ13FVi7qdePaCWdWRmm5W11Avc3iNWvKNNZ4uoZPdFMqK13vg9dCaWoPG2brdeVEkN",
  "key29": "4pxLZjrbn7BxRmSjJSp532NM4xSQLvNzogPUaKa8GNJ7XiduqoEnZ8C3k51PtCrmhvsi6b1TmoLhtptTNoVbFsD2",
  "key30": "tqum6yF3NH44uaj1b6SVkCLj6ABEzj4LVLE7Vmwyvr5zEwNUmVqQgA8oK3JZpx2J28EaubJkwHKxwfX5eE9qTYc",
  "key31": "4akSBKM3ymSXh3pGxUdGiYSmNschSc4dTtnVC6A2bierzYgRgYYyJz7yavfioPZLNuX1EGrB7nGzMoKmJvvM2J6S",
  "key32": "3kihMkSx5UPrUBUzmazsRgybYcdiFzmzZo3LVSutCyERtuh8c9e9HadmypwJ3EaeztNq93sjGV3nME2p1cMJkvEB",
  "key33": "5Ui7nWpiMrDL3yQCPqkmCw6ZEE6M5UU3x23tYdWoUkp1bQs5rNdZwrZsBQmZ5aLEg9uStz4b4LGTwRar5FhGMDbu",
  "key34": "2WXYY8Ydgb7qaGdCcC51Sb2aJyVggAyjP2Gaacr5CVZyr8nFvAPcxfqk7tdYHMeGLrFf17SZh42dJK6UTjHt86e5"
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
