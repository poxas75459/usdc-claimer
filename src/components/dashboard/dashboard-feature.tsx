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
    "3Gdk3kPMCJRmjo5XakuEZ553B99Lup4e8U1uze3r4MXV4EebXSinuUghVK9y1hAeUcRGDM4hsLY3PSCECCtJ5CjW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "sDHCrFLhgqELZz7W4P291Lax1qKmHztCcLGiJMjpwpWwpFosDMnRycHgqJnyEUhKYndcbuSy3dZx2myco9GyPJR",
  "key1": "1hHyTRgiBWyrmGtyQKVBa8SsnexH2iEr4AEmoUifn6YJNK2jrVvwZpvgUxCiPDYC6R5YXGuUK6MCfGceXU4jPSS",
  "key2": "5HY168w94C6hwNZTsw21KEeRjHtzVum75FfEYjjdCU5sisLbuPgbH2FHTDvCQas64DgaRCexVuyA38cAB3XXDThg",
  "key3": "4R4dtxKFvysBXubB89ZHuF9ZPwcEMVt9myYZxvHCe92e58JC1aauGcEHQNPdMBSSgkmd7MN4Yzwf8Soc3upnEpeA",
  "key4": "3N7KU3TQ65aLNg7nj71UdaSbjwH4NDKr8HW5Q48wBGMsPk48L5kJ3S8YCN5Uw5eiWjJeqLYCNGCajLqoX2Zo7zkS",
  "key5": "2LmPMm7dxHiQzDms2d1wr1sHLNecnMtwdYEEpG3T2z9NEQKpXBvW4qH38F28WbPnZuMLZMdcQ78WSPjdnZoQhEnk",
  "key6": "3DkC1a9dyAJBSAdxePHEHrowdKgUWRW4CNkAi2xSa199qHozSpqxEh5mvMpCPmp9zK7SDM6WugR4oj1ZFoAMyTGQ",
  "key7": "2LvM53MUYDqEYg3AAYDZESTQw6TkVFXxedUnXA7mCvXdsBqEzByEmBMiPvaiuKtWDsD4xxCzZKrNN8W6e4C6mNwb",
  "key8": "4M78vKB1sm8ogvdccvbZDuPdnabKAzcr7G6imnSowbRBYB6QeeW51hZ4Xjar6AAnfWbu1VVmtyDHTTPzE7a7RenU",
  "key9": "3UothWCPBYTxKL7r74GWPipo7A2rFWzTYxpfq5gvbf5F8sfueiFzsTqVU3v2pZhE7DTnTmn356d7uLx2siog7PXv",
  "key10": "2XTsaeLzZ2kMyKmrhdwsZLxxJXnbMG8SZpRoDMBAqYqvEe25to3dRvNgWj8YX2Zs7fE1v3ArawpDMs13mXh5dzC5",
  "key11": "4sz4oqgjyBVdiv34UcNMNQS8spfkdmg2ocRbJJsGaYxasqgC7B58mXL7VYE7Syf7ufqQqUsChsMFYcYFmcC2NPvp",
  "key12": "5WJo5JAseMGVQUZBu7GogrckKrRnSWGJzg796CHustKCZykx4jR8EBNutTzcvkn5bRsXwjfUTZhcVKNCuf2yGAVn",
  "key13": "Yp46VyM5F5XeZDUTAUQJEHVXw2YJ5vEQHfc4nFB9XedFoW7tFyraP9uQk2LXKEoSiMtLJpV2iT6pAwsxGt2Mvby",
  "key14": "5ouBKFoGmECjCTAkKZCtfAhfUCW2RiKDKdU7iEm2vE2SLoP3ikEVtjruuNV8tKBTAJWzuTKTdKvvnD3h5sQ7nq2G",
  "key15": "4omHd4pvJHDxZdAYULLKPA51U26uVwor815En5n6zLy1wuqP4UiqBFQanUdwkzTHRRtLkyiQQZP5VAThs86pVYVC",
  "key16": "5duNkTMNU7bDMsrvtZKM1KYrk75opC7jj3yteMyernkJAetirzVtn81yP4wPXSDRA235qGr3Zbo4wBMWVB8gA3M9",
  "key17": "5iGmPtyAuoppJNCMqQVDATyhBWccUQH6sN8Ui6KN7eNxfDKZh9ZGaM47Ge8oHYk5JfPYruyamf248xtvm3rNburu",
  "key18": "28Doha2hJeBvdkGqT8pDAVjtM1oGELLPXSCcA8nemkf9xXrNTVgi5crtNhYyKg2PnyuFNNR7dkGG48vVCrbjUav8",
  "key19": "4Ux9bafxHYd1W4zy2Jk4FmHj7oARfYWQfkCFgAU1wf1kKBpDpotfuyyxeVuUCVKHer5AB1uBzor5GhRwS7pqpkJa",
  "key20": "67mwA6BFLSvxb1wZtoyG5xCnxdUmS1iKSRKHKhVMwsV7M5BA71dJZgFKCBgB75cGMZXikU559kHdiD4KduobAgXh",
  "key21": "41aFDXqNrdB7BhJsUh2iTpyCNwDyNxhkVrqDmCqYdkkWBAcNA1Wpbz7H4qy7aC9wbARsG8RmqpoBS82dTqdSvRXz",
  "key22": "3ifjd55WqyJbfa4Fx3BqoHk91s27bs6tjwbPSAqKs9Xx1TySM6WeHRz6MLKAnWcupRFPwDXLfmp2UikVBo6PFtem",
  "key23": "4yeFgHoNd2e7vaQz86gwBPe1bM3YBve3kjsSwTwG15nEDV42X16nnsJZyndF8QajpUhLTvmT2ozQxkb4FBHvgdqk",
  "key24": "2D4oyg41WyaQo7ciLZUvYgnCmhSN34U7FYHtpr5qg66Vh2X4Krv9hJNKL4qQaXtXWzpxsPx1LFZJwtZQZDPhnA8g",
  "key25": "1DX1trCEGZtNZ2Z9ZNyemiYha4fSWrGtT4b5eMtbSiaMTyuAnB9DmZk5RnV9vLfJ9pbNhgc834jABoED2fjRwNj",
  "key26": "5TSw4XyEmtRi8gPSUCadxSdzPvBLiLAi9wNXNW6UyEXAavpRmr7xfoy5poztyVUZtggSZ9guypWCKA9Dp35NVdxZ",
  "key27": "2VpEUvYMKWHPYvUGiwLTY4cJFfNnL1kyeJxfxGnyAgH1dx4d4YAPWev977gHY6NUhxnnP59CZh6skktrdq7xgKHL",
  "key28": "2LfCAQFBDfqqCpn8Emnn77R5LLnuWtVfaDTxzcUH5yAe1prdh5uA8fK1PcYckUsmS4mKTstHDnLjBtiU9qk2PsKG",
  "key29": "2rCv45hT5t5ChKDVh7nHcLMQXcFZZcgL5RHSgj5vCFJj2WFaE12Cj8CncfaPZtyh79QN5KoSBprUcD9c1otQjYbi",
  "key30": "4m5v6RtKYfTqVrMiFYshB39agR7PEqQxAUTNsruNTtt84iih2p9RyWVwmR3pXu4uJN7nNAWPdq2GroRP4fEJPpHK",
  "key31": "3nziWXgKiKui6gS2WPUMrE52tPsGKtXfheD3HHZ6cPFrhJLVQGt79zLzUa9QU5a9jn47Xqt1mbW2EWsMyQvGVCe3"
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
