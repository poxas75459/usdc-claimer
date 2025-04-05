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
    "5iUMkTN9ZD6caa3qZr9aKqGGbXV6NFcWA8QRHAqih53X9WC4rvWRGr7s6nJ4uZZN2zLcFWHhjZ3audiSQ4CNUZoc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3L7yHT3eKR4ZaVDsR1oC1DEF2xQDdgTLkxXi7hcdsHoxdVxoSVYC2Jgbyxz5rzVaygAZdSTMexM5v3JrSKFpwd2X",
  "key1": "H3189i5jYXvpABo1uB4jHmgnbNABXAZR6uLpCrRHM5PyjBm4UFcmDkPYdkVGycCqC4w4Pqs5upnJdGLkC3aPMBo",
  "key2": "1Ayzc9Er9xnGSw6qBmPacg1baA1M4nsGfNH7gc54N4UoK2QhLY6YmpJkj7z7N3rUpJFFVmViv8dogwa33bV8dtt",
  "key3": "RNHtjq3U5NEG8wX7n8CttTdUvPAbAizYhysRe2xjTbMbmyMBUHdRdjfHGhYURweiWHQCEqgnvMGd3oWF5Fr4LsH",
  "key4": "3x3raZk6b7XJZwqZMvjNpjL1hbAWkkLNEBmGnLqDsmiLNB8USioUoQ3tnh6EYzJnnauu9S13eyyaYxjyU1XydYHe",
  "key5": "2kQ7divRcaJyzxTWmDGwF2XvpnVZJ4v8AKiLP3ghgDghwXLTG4spnTfPoH6c3JUEB14gbuVE37X43rFGC6wXTgMV",
  "key6": "4zwJZbkEatkzVQDR2vt3CCiDjSByiJ1GLsQQaNSXpzPwzGDSk4tbJvT6YZTDa4QEFDA4B4oD2Ztzvr3NUcrnYMhd",
  "key7": "2mSvdJdYUgpTdSQ7NU3fs6RLDBYyEqVaSQhjZSqatno9KmA76gpzLTRaoMLxdyEQM38ShRHoKaezWJDC7NMrfbQR",
  "key8": "51r8YBUrCciLZy2ymGfyUaV3iMPMPag4LsYLw9Z4hu9dQyz3XpY86FD2CBwPBouXZHLeNqw8TFVNeqr1JLsgb3V7",
  "key9": "3Y8ib7MkuM89BeZykjg6M4RhU4FNhSTGJaZwpnw3hvvS1UV7MEVFnBetcBAoJa722KKuaaP4ofsvByFFNexhR6Jn",
  "key10": "4aYE4AaT2fsUaxGF9mU2vEpJuZoQCunQfmfrgnnWpwhP5tqh1rLDW615fxXNavBKLAFjZSodHdvaeUgv3eZRWg7",
  "key11": "4fHiy7gMPUdyTzwy1JfEnuQgsYoqSbCgMCqmbSdjn2TrC41i76JvTGvPG7437b7Hhuj6jSwDnWGJipSrtFV1fesm",
  "key12": "bVib32ZP47VD6DzzAKyQa6FadXjTgPZMo725yX2QLcR6D2HKCzmXFcy7AFbUjDqP5NHxe4t9NKydCDWfBXfusFR",
  "key13": "2oRfHnzSm4QPYCPfGyyUpQpKFd6BqhS5LepX3DsCcf3GTuTpn2yn8zPfYQmeSbG46PZJDeqTNnjx3N48sQXARBFW",
  "key14": "4D6haac823SqHYqF3M62oKKXkWmWEDtotDCJ5wZ9KMq9VKU1Q323KATX5jqfD9k26HeTns6Z3KWVcRT8SKa2Qgh6",
  "key15": "3D1rs4JZYXQdfeYJQfjYV8YbqoMj1avMg1gzXXw8xZfbVZoiorWNmHRpHoaow6sRpPExVXBRQ5ZaMTGX38dRcohx",
  "key16": "5ZWTJukhoXxTN5FFkJR5Xri6pEtMqJASALpcCpgVZtadwze91YC1sqM27AjRxv98w3vyae4LzQbtv1PwScNuewvA",
  "key17": "3AHhZWjKrHJzEzB8cDSseURYhsdA9TrAjcgpewf24WTpci16urqxpXxWQSkb3XcJApBctMPf2E6ATSrAJkRG8rHq",
  "key18": "3dPnz22Qw5v6B8k4Bx5ZH9UcZ9dJivCTfHybfhxVDy22VrdV6XEfLx4fAN9gxVhAuhkUGo3tppwPHmkT8pFpX2vw",
  "key19": "4YJuYGXGbVT2RYi5FxDRwTiFgaxTWJ17h4k9X1gZraW6YB1Qq6sWT4XtunJAoDr5ZWmEEwNpFWyJx4Fhfnpuu6Ff",
  "key20": "25BPASKPwzNWjbqWt7facn4Bxq8wVFHw4PReY8W9u6Wk6SJ62pGa2myxBmYKgEXZoNXt9fbQd8mfec3c4d4HeHLr",
  "key21": "2tV5UtGkVfs9k2FYAbkoE671kHQckSXhVhW21zx94oXCQshAqTd7DeqJifkUHkbhV4JsyhhRy7gW1S2PrydT2to8",
  "key22": "jazEGvhhZymFU1a9mrFuKcud8GVktwoNDXrz7b4U2iLzjMwywkA8YLnEJofPfAyLCAzi33uZuwbcRc1ovZuaQbt",
  "key23": "hJpM9XX9EgQR4AvZcL4tShLwg9JChxVrUVmMewnbY4J5D5kYwWAoircDW1quBdSbX2zYZUYbAA9kc3jerC1aKEz",
  "key24": "kszGFv2bRAXtTAgmrJa66mjMsv3BeUen2kFn9jkBjMQyFafGHWbPWDfggsvtamaXAgxcKVpR9uS1DST3tcC75f2",
  "key25": "5g9WVa34fWoNSQdKXVPKdBFSWAvib5RnnJVDqyheEnVrbpM9XzsHMK7YX58ZW49r9XUwiJZhKiXAkfjq6kthr4qE",
  "key26": "3b8k1ijbPkG7YKcV1xzbL3HENrdGk2LTnz5kZbTvK3pZbWNH3nBNS8ayHGPevCh15apFUaxPeNdUwdCZzeDfCxRj",
  "key27": "2ePkvtdNF1zdaji3GcNzALsLN11bhZKDJSaPCHfKsgaMMFonooavYnYhbYKsbSWsxoAEuh6URmQ1uttmhTmfJZRA",
  "key28": "3itJ4fQhws5fYmzWmhbexq8vRw13h9DkXSVfsAeQbiUjznzLMRTnFiY9bbQaTJM6xUnkyT17G9aFSHSzRUy6GMuF",
  "key29": "22ak65RbtoQwdSFaSC2sza6FrNNWQTm7iJGSA18xHCjWWjKbkg7kUVdgzHBeA7FwzUXGAbPN39HnNkr3Zqwqv73o",
  "key30": "3boPa3bTQuo4HjiwJLLdMGARG2aAnZGYVKdfmzwhtPLxrcteH1PPAui53YYRGXSAcofqNa3p7R246aEt7XTMn9y4",
  "key31": "3ZZKVZ5pp5ETeqsAst35sZQa5rZofQGDWaZ4qPcoQWb2mEXFdYBfynP4T6u8eRiX5Wj1KDDJVo9m24T5Jy5VGJtH",
  "key32": "2bmyLxpKj91dm9NNGaAWX5RXheg5k1FUoBSAaSFQTcuLKAkuxezFyHRQyeXRy61BnMduzfBNBre9Aqvqa5QLtEjm",
  "key33": "34MYGFhLxXiEDy41aKsy4x71aYt49q99rVNphmSoGaQGUz3o5YT5Ae4HzaRSJGRhJ5rAe6na74C8BjMxNTuYwESL"
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
