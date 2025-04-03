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
    "66SfbfvvhD5ax3rft1VNNH5Q7SxYDkJjNqy6TBLbjTPWYhwHgA46aUDJhePffJXbkemhjiREmXD7EgVueeHyUt7A"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Fs4DsegtiYyoSVYq5kNCRHp5gLThqCpm9pbsrruCdtiPXj5YcUBJPDii8EcY5wB5XF2hrjGjDKN74hxdKtT1UNj",
  "key1": "4PSaXshfiABokuWR6xmgJpBDuPJ7wHzaApqvhbi2fQx9dywvFQNpW9SDxzeF6aV7mSTEVh4ZFbip6mdfYovKbBBA",
  "key2": "5Mm4vPrkC31s3ksBVMLfxfwU4AxKF8ADPsJwpVBsvE7i3ER9g7yHJjBPDwjzQkSW3jjvWsUGPE7iFQjqpb1FEHR4",
  "key3": "23HbHpszmyprs9wZVxnHXDSDgaLBpXS8yVYRUTVuHgYF3t8e4BwkvMzkcsNEUQa6ZDZXWP6fyLiW55vcb2WoXynx",
  "key4": "4W5Wjyc6p15rEHSwZLw5gTFpGTmCG8ZKThPPW1426nExxotQGavAP6R53swAk8yYHDMgoq2ESsHWWFgHK39iwP7z",
  "key5": "7tcnqL1ufb9DvpEgmB9RM6LHwKGP6Rt5fVMckTkpLAncsTug4xUpfMkPEWrQ14ZaLEm9eAD3NLanzZwoYckDjkX",
  "key6": "2PyZFrKfKJHDdrGPPBPHYhJHZJTvuD3frt9px3foBsr9TAgTTUw3QXMHTyLec4nmTBaCeN8RfDTWkFuy3XzJTkEq",
  "key7": "43UJ2AjSZzFU2NVmLwpxaESsksMox4uLV9SWsSBv8uDDbHRMeb92Q6gHHhQwBqD2RMdfSJ965CL4ctHrdomGaLR3",
  "key8": "2TAKrSrpHFe8RTK81V2eNrWs6TcqJSwRtPCS3wE8wB2QH3m5ModmdYFx3P2pBDkYGbeNmjSRTYsw8jWBSR68r7Sq",
  "key9": "3cobHXj6ihBWszuUq7k3jkH1GERoqHsKcSDcZb7CfaHeGRk7vE5vyeaCKL9kbkm6QxgEag919t7smc6PaZEi1u3R",
  "key10": "2QJx32bqrSqDxjaerLZRa5S25Wrgb2nzFXjLeZYpHGgnxahaXBWF1LjNviCBc5J5LzbN2Ag6ywXPjQ1LHT9MkF7K",
  "key11": "dFADufbj6YFdEtZd6NFSqyQDXkEmZPRV1wyEQN5cautz9RqNXXWGb4HBQMUSabiLFD2rnR9EveDvPk71ZH1YRTc",
  "key12": "5TnDrmcTRhrsFQLFGaoT2v6Unzfbqp7fBynVxeWcB2DVbjfV4Ahhkr6etR4mwJzqn55261EtQAH5nePGnxHBVFyr",
  "key13": "33mxYxFo7sjqG6HWxtL6jvziaKZwNVVHoSa1rM13qpUZEa9pkVXj4ZANj3X5wEZsfGeDhNPUAfrRfLjF8H35Z5rS",
  "key14": "M4FmqUugTcgoYtPFYVm38aA5XUN3BujmE82Vhfarnw8DVZaiACf9sChLBMS7E11phVkmcuWnGih4CbfwSjDctnR",
  "key15": "4JsPKcFS8HV7nHBiqK8AvDChBHHNPtCcq1pFvFhUmEEVcnAkdbSSncFEU9c4NVHMb3CPQBTbQ9B6EPxmLY6mtS3r",
  "key16": "4BVn9pPa8oBxgiRftMnh7JXc55gHESgYUM6MnjRzRNvUg7qG584MXA9GuBvABMZbmmxAQjzEUUGE1Wj3nJ3o9fcQ",
  "key17": "3Jr77fvcXgcxVDm2x7edMrHMyvSCAgUZZvGivVqcDB6aXw5UrAYSaFbGPXd1CAJV7fCT6qSLzt4w1JRhiTV714aJ",
  "key18": "tMEuSTyNUmoiwnmdLWFHECEJGDdV4Gvb8C4SJsQG4bcoAfx76sp6svmD2T6nhnze88WX5wUX7DVcqRWjde55TXV",
  "key19": "2haEwjTdjEH2Bf1kgXhU5xRQ7zUjPpZn4k9hge1mS2TnVrey4zucKWxbyRJYQU5BTmcghZCsm95jWBsRt4ZQUF3A",
  "key20": "2oGLCfny6kL1TXYJMSzHpR2r6QFcQp7qk6P2Rcg7H2yP5Aw5LvSbefXYP8Yscf8r5xnTaaKPKFsudrQu4ik6DAcE",
  "key21": "23jCxpYKmUxe6xHEW8KLE1EeA4oUsNdd8L3Gapmskyy8ZXhV4k1CDjieHyeZmfZBoEUsrQJmQfjo2ecDTyxHMr9Q",
  "key22": "5uuufMkLNuqVfTBBzNwZnjXp8LEqhAshCWYoKT7U9CzenUsjvzQbcjNY7Hgu92QrPNun155ViRXRnMp9ASGpRG6w",
  "key23": "3XaK4UvJSedMeDcA6iDXkRui8PFxYqP3jSWAAyAt8RF4Ft72mWhMiy1RUX8ry7ogxXzv6f5v7Jkh3ydmEdjZp87Y",
  "key24": "mbZsqPAQy1nSsyumvVndxVdUvbGpk1S7YB2DVUScvPZ1yqarPWK5pt55UjREWTkXVmnYLFppofbzKqSWsJHr16Y",
  "key25": "292e47PkZkG3dbpaJsgSTsPuYkMVcEELz2a1cZ6xssvCCwZQAsTp7DqKHrkfLbKMbECdZ2V7hxa4dtwjmXk8JGmU",
  "key26": "5JC3p7MxTWFZqPRaFVaLtv59TwdJSTaQYWSFB1TNzfovvg8dBWhxfFeAJQxkhpEPeZCR1dVNnZaDfTCqC8mx3WZa",
  "key27": "2piotvMYU2pfdmSUz81n9HvYukonPote35gLXFwWtSnGY5AL9K1xy3GHoHqkxrxZRoPwf5TFGypnBKkq8w1mnzLe",
  "key28": "NyRr51j2R5JZ2HZ4zJHHwd97Zqur2MXMftqr3UXxhMVhfx7pbnCnFfU31THkubHFSJhaD9UeaA4normhF3aGww2",
  "key29": "4z5GpUEaFBeXyfEKJ9ehcXbqFi7LWG2UnuTANijfaSEnSqiH7MbyB2UXe7G2RvLJo7M6SQgF5K5nDEVhgxTEiYzc",
  "key30": "3YsNpb2Nhf5zySKNmgb1r4tMiZwA3wyGGBNVPAac6CtR2gZzbbB6aXq69Xeg1Z57AVN49Yjb1uembcw78Q6DXghJ",
  "key31": "4GB6nxzcoantvSteDWwU5Jf65wvWxTmFg9FWHNqDUZgydzDHXcMHpmR9rhFMq1nbEjstTmuApc2ktCb3XQntCuJZ",
  "key32": "3fnjzT1iK4Vg6quPpqdnXUvQxow2uDxdHE4vJ211AtEtrS9xG3bdQz5Q46yJNHwP7B8tE8HqkXLhRy8rzEqvEc42",
  "key33": "3QKBX7ih3CxAcmTJBHT6Hw7zTME3BWM7gJ1gS2RVzkUAhnXvopWFu72A9FoVqQ8z5bMdAfRJHcAeZjBBNwRRFLWk",
  "key34": "25j9Nx7x653UxhB3XHkfwKZBFzNUnHcTkgxDvLTLPAtWtNjm25CLpBHdh5ZKWf6iWfY8UeHEoXwhQLjfkYw2B9eu",
  "key35": "hCaUPFYdfQfFN2c6rz7a6fwPEJYtC4j31yAAY7EjfsErZYgo8fv5VAo3UmuPjQnE1kvf49NqYngDkhVXqyt4GMy",
  "key36": "5NubWq5EEkBBQx5NzJL6tHEWYKA2d1m4AX5voD3Gezphx3SFmN3SxCumPcRbT2n7nUjUFRfagcWyaZw6LhVo6Fke",
  "key37": "38rWxWMj7sWopqGFkRzbypHGC9FvtcACW58JMMYXgcDmCuAZPjJTxjKD9W28nGSHxtuhPSEo2ePwu8NUnrafto6m",
  "key38": "4ZuX4FKosjk38QkbjjDNxkBgCRvPsRwuCGvQnB74pqSSyHWREQXYxtzUu3pjzQSEe5eKinVrWx1AML4DSDEZFfiZ",
  "key39": "aFxAu4CzkfaPrf7o7hfsYz8gFPytGuua5mj9fnDqFofKHBwLDaRHotmbhoXWkLkKywhvvMm29tB1xKv29pmCwek",
  "key40": "DoTwdrW4wPoKoPcj44sPbDmyT428BRmJefxfFfj3EdY7eAsywq2iNZPyVCooAN5BuZW2kcpiypxJf3KY4hBrqkh",
  "key41": "4xRuzhmPcTqFmzGm385y84G2iZc2Z9evFASt8euXiT5hSd7ax8sax2drpyQjBfMQ7CdiMBvX1445pdv6bmdWNEEc",
  "key42": "46P5XyCHDNLeDkH3tRPJmwZzEydw1J6L7EFNnPGxyMP2BeAX7sw2DcXgHpSJBgDFBPFUmhxvfL7C2PXWKDGMUgPt",
  "key43": "3MJhxhmSY1zSwxJnquYtzV5Uu3ijistfiT4VjE9dobuNbchzk2oL85CZVnjmEeCwvwU9ZDMwPXRwjgCozhdY3joV",
  "key44": "5mjConovjgcJxSqAVjxJJpxHJgn5BdKr5veLXnKYNg1y4kEHbesZA15TGGWHrsvWCgjqHRS5M2q1ipEeYrr2uZP9",
  "key45": "aaZW7oLKDbjQCgZG7sEVRCW571aUzjxr6wNgnhZPTFe2uboQqNLVTmpFQYeMmizjXdZ5PYw9sks4bwSMPccbF7Y",
  "key46": "rmWWpT7ZS2jenejTdX2q9w1HWcQxyFyM4D1yNZBTwuiVg6ayrXrVkETnGxmB3JRuWbEGtFzGoGCibHEec4if6QJ",
  "key47": "62ttpC5HRUW25FMfaEDETyXEstNWy6qQu1zRmM2oJuZbXEweXP5ChKkYu8ggTKyM5p2iVuADV6KVketskBiF2U8x",
  "key48": "QumjZEusiYHNsH8vHZSrgsiYBUYUVQjzHxBx3tZXhsZwkNyXttR1QPKJt3vf53sJxjWCbXetgD6yvrjYvhjrFhm",
  "key49": "5yS88qARJt2oQahzFbi9nkuc3NhyQMbRuRUFquxftEzGT4JSD9c2aiPRXgNvXGiXdSDRP8JP1fC8mZByiGsKWJGJ"
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
