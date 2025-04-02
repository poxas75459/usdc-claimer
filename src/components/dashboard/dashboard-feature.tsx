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
    "oWHhToQAukgUcaEMaTkALv31kwPBpyJ2GhSyvhAbXixB1SdnECXYtnd2VnNjEQL3ifbNzowsziHHZxBLc89HVRU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3T7EQKUKbBgn3aiZGEY8uTDsPbhXtKPCpUVh1JHPG8hw3NSFoEd86xp4D98TMk397evu4CUknuQ4tYTEFTEhfCA3",
  "key1": "J8n746acK2L6dQLTc5Fh7QPUDgf7urRm4Z1FaGMf1dym4AKmgMGVeendXXm6Ev5yQgcFs2tFBsTdA8iEL2d7Kq4",
  "key2": "4R3R3Er1v4BB4QWnUNPCiWexhwVTkuwh7zpBX9occedgFrz2V8Gwb9ocP3PsQQiYu6zHQKiSo9xHEGYT2SD1mzQk",
  "key3": "4QWptgiNGYtrVkAyYbubaZ3LJwPZ6cxtzCK6tg2C5mvvQ9UkhizofeXrfuNVaFumgoLboxuUvxY5nzp4vs5ag6sv",
  "key4": "2Bq6DhAqRjYck3izYJBcYtM1SmLwLGbrrkpJssiVrFeMwWnss974GPj6gVkwiEuwqqfHN6NUmXYht3pzr6a9TUgg",
  "key5": "4LVs27HtMux4eyTNuRtqvfE3sJ6aeCRMMZW1NuWMBwvpRgiMCNDvugkS5VWZoxu732Tr7F6dVcVbgCY5bTvpq8ag",
  "key6": "3wneCiZfCeubDRRkbKGFvmHu21yaX1nKDpXFcUYSMEYTJE1uyNX4XUssNVj8Us6xnriLPbGTD27q3JFa3N2Ue2R",
  "key7": "5nby97xWRfV8rVtxE5jfZkX6eEbMiQewtXtL9qCp7c92e6a6t7V1fEJNbxopmJUgMBaokZrMJ7bksmtA65F8viQ8",
  "key8": "2TGwZD4Smtmfr9BnbZjiEPcJT579KWFK5bURW6iifssQdVsZxFB2hkie19tgMFxfkBXvvigoDUMvuLdXWThPGSRF",
  "key9": "2a2eiKriWnNFjocHxxbMYXWs7EJhgLD3rkAw79NGGXYmFu7fTbdPZyRmMLmMSXMRkCAe6FLeC48bZX3VQxAaonnJ",
  "key10": "5KNxX1PRSF36FTbRGBJwfjJkSatjmut81b4MSGiRMdc8M3FoWMKd3kefXQTDS5xCScfzo7Xm9FHBUo95iKHUYfcx",
  "key11": "3SPzwgrGFrniV8F7ufQNqeDuzYm8PmGknmNLLPdU55v9mwkiNrYA8AF34pioKVs81fECP79ntd3MCGaUU8uxwbpN",
  "key12": "4ehnMuyZ7NqPyqfhmeTBeZDjd29psRFy6XGpQqQ9vDdSZsgSYx75V66viUk62aX9Awsj74XJgqLBxMhjYayn5YG",
  "key13": "4xMf8JTsob4o7Q8LgDxaanFMAMfjGZ9b7jCfhhENEGtyoCWKXjZTgPBmjZCuPZUJEaDD1u9LwBzL4p2d3Gq8XUZs",
  "key14": "674mhgzGkDewgTNGB9fYaYfdVBYZoTdozTxeCT21ysNQ4xL3ReTjK3mNdjaxXKFgrUARrbXnN7PNcFnmBFbQg3hu",
  "key15": "3dkXwwbPR98EhNPjFDwBY15xFRyJH7cYuTqvPxWYQ3mTkbMb6SCmyMB78pGv2qgM5WSz9MeW9dPAi1odjAYBCdCR",
  "key16": "5nVLVXW6YxBoSr6SRHjkEAJUowCH6AS4goGcHFwevcywuQ6GAX3L8Wkv7TUJ6Qc5aw9wR7wq249GoiueuAVnt99y",
  "key17": "23MvGm4HFVZw44TmaU4drUge1khUZPSZebVyBwP8bgaVmwc1eM4oKNGxXpEXjuN6SCXfD9hmZ6vFJ6Dw58LeB9a1",
  "key18": "4uVTctywC3KvMnJicZrpNftYDprCWWo71epZCWq4igY4rFaGeVWGF1oLeXEFRZvcteVisb3FR5wB3MRedvPyFi3U",
  "key19": "iT6UQnoFKtxmHV8zjBjP6RZ1XYF2eSHFigxQxX7CveVAPJtttoyibgvRYe9U2oJb771xaeL3VSZoCVGmghBb46K",
  "key20": "3cPtBBNE76XauFK1jrDmmvpwJCcNBnDmcCf7E8qAzeuWvYsxCVi2MyzZRttiaTSFc1iex9orxbMDmug9X663qNqj",
  "key21": "3tWkqp5zrrMzCJLqUHckQ74Gugq3FhC7twZsq8HXPj7AEVrHW75HxGmJoJnViawCpJR9K9Uonyd1Bchxf9m4Ro2u",
  "key22": "4YBhDEiVNNvjgzdXjiuuiPn5F5jFpzRJA3Y5c5aGvM35g4AKBgW2mJsvRsfpxssVoUiDjpXA16qFGGXno947qEvv",
  "key23": "61NVSaLEGGpVSsmiWkJoj3CEBHtFZ1Ta7o4nKB2tFCgsv76Fterq99aALqrYsPAJdsVRKGbHZ9tfsibwMGoRwBpA",
  "key24": "4urSDsx4Zv22mxXH3zQ9WrWZ1iiR7yekYAqEQFnf29gkZvq1D49JqUQzquZDWqaYeLa4CXfx4Noy4EvVL7AXa269",
  "key25": "63ViGkabpXK5pACK3hJehw3X38UT2a88u4P7GUUQo8JSgR1iZz1pUp886D4Rh9Bci5qTNxj4Dks4z3DbSzvErf2e",
  "key26": "SNRMKezfBhAAzbAVcsSv1S8PP9phCgLYAgHoUQn6fiLBfYt1fiUWpmLAGswcF3WBq6CeVXDKXSfjdqD41aVRqvX",
  "key27": "62KzmF9WkskFMFMf2tAM5Eu9LY1qFnmiJFNbipaYxsuaWNqdMTeeB6assywZJFvwH59m8RchK7kFkxkGguzFXWjG",
  "key28": "ZPYqDBDDWiCDKeaWnocfd2gP4n2EB2xqq6PZuCUhqaoPPZjwZBMYTxaqzTaCctuehLxsbkL9qSYdvbs3Zg5oBMm",
  "key29": "2dgWR7TEa8mXSDZG8BvSBPZ42fS2HNFsczqm575LEhs4kyacHSFP8Uh2iD7BARgCxxts7Gv6jtBzBHjJg6K9qpZj",
  "key30": "31ipNNo1cFibopX3gdJyuB4aqajGdtKRQweEpsq4UgLMtJSrs9Avh8mHCFDD1i6Dn2D3saBTwqPaZDX9YAJemkV2",
  "key31": "d9oomGwhbkqpMzn6TtHGhBBJv3LcwBFzoeZ2NZBD3Xhw9rrVPh6N8Se945TWLAG6fFE7Piovaj4hcpzi2GhnNxQ",
  "key32": "24AV14sQjmqTnSwhFXs99nuRDXyPDcVvy3mqSTaDjfthxeBYodhX73gjmKFarMQ7qcHWhTqYebhfkA1b6nGaquK3",
  "key33": "3zttu6BueqN7v1tTRubjgf4e9jBQtzNsvbmt3CCF1MuLVrfe3AnvxpyBenWDZTGckdvPVVZ9XzU2e7pSq66CnQt7",
  "key34": "8uV2iuUugXWh9XqmcYRvCCTNYJ9QiFBdaMLZExKCDvseeeVgxhwDGiR65J6pSdu2QmsES5huvNRKzucA7fhoD91",
  "key35": "5QfMKik8SuMH4CMTUxB86moGNxfvScofLJk4aXuZBXLhafaitgGTBRXHSfzsGRX7pT4xZzN1wpuhcX3VCjz4UB28",
  "key36": "2DGncxDLXKLVXBoqazYyfPeCd42owQEGM3rFvN2wMB43VA34DCxNCYb8TAGZuCAW4nrLfEWDtV2F5N1yvpTvmdUo"
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
