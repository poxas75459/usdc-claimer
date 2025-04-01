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
    "4BN27KoKP5xomzRp2m58QjFYqnwG3oZCnMLYztwfJFPmHdgREnvLphDNu2A3YEuii2GurT8reWPMgq2NkBb1fGTc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3qWRsBSqE6rfxtn2LzByxcNYNuttcD6hKVsvqEoJKvFJHM9VMfLypzcD1tvB5vXEzfekmxpY5rue1mSp91hFGLwm",
  "key1": "PknazdGVNc3tzbFGRQgjLRBDmpm3eZmt4GiJp2jRg4kewLXHndSLkBTHup7TpbMzcyYuhDhZb8CYQiXJAz78R4j",
  "key2": "3ghJSWLWFAaSkuaBdajYHtSXSRPawWdNBDZXNvaq9i4m962dwdkcBn2sZeTfVxDCUgtGkv2CnYV4QTuDHip8BCsK",
  "key3": "4UyrBQunYM1CFh6XzCA4rpYbCzKhebFzHU1Gyd6GJnWt2zTn4dXvdcUrbuameyWknuc54zkDPY9ewim4dALUomUD",
  "key4": "2kHYRGPyuPhUtpy2vY5yeD6KqcUbNmFYxE3gC98v9oXmZ2h4rJLTGqmHXcyLXJxZdHRkANqvx4RfQKnXWi8QzWKt",
  "key5": "28JV5CfGRqd9xMDncj5xsgtH2xiGchNAfyqYrGeK5JMqRUqBymYFqAcktkHLKaXPA9KYB23qWLB9FJxbqaXec77p",
  "key6": "3nVUnPzozAeQcW2n4H85jpCoLjJ69BvdD4eUjtmhCuBpkeB5nppF1YmjfDkRzV2tdyHPYMHTnLZGskE7AaywB9g8",
  "key7": "3s8PgRuFYCvm3tbeeQig4EdZnVpM5c7sFLiFoHagu22LSKw6zjH7n9y5w3kuNYmddWGdPbFcG1UJ6nt3w2ctXiiH",
  "key8": "epguoFefB4CpXb5ai74QN8pePNhc9TBFMnpNPjjcqZYpswQ1XDQELu52yYKXNcxC5SpJkPnrKTGxLFwUzQciXMu",
  "key9": "55wPcscMfwfkFLWNm1xoXwKw2CVC5Ww3Jy19uoSukznMrJnV8zCkJdxRhJ4XyKcgYwME3AEsd5YkS79yuPkLBit4",
  "key10": "4ozFbFRQP9gKwg7c1Pg7YJUA9UAsUGqst5yUmHztfJdYeeuen5gg3ypar8hQ7B6X2s5WpbhYbyT3WjK36f3PQ183",
  "key11": "5TXXByUiSLi9mBe5aXsFtFXDwkdpdtmviXK9K13q6ggSARSaBAKo3whBUuAdu8hNLF7t2S12s4nETN3AhxAeNLW1",
  "key12": "47EVpBUeBvuHttY8A7xCHo7kMZmB7BWMqfgfyb6HdH7CJ89Ke2gehXSSRp5HTpgaAeEatSR8VkQFgsBmybtoGbhw",
  "key13": "4UPtYhGVujdMW5pGR7E4Zc6WUNRwbV254EZ8aGg9661PsGjC8HYL2RF8FUKYFxQMvD7ABpsW2VEamAgyoLYyaMoX",
  "key14": "4WugbTnjeEoAd6Z6w4K7PEjBC7eSAFGMJWEBdVsgpmBzkWs5Zu1Raorh6domEjHyCmj5VEGF3AAtNgBwbwFPiioL",
  "key15": "e5N31baxtRVm1jxt4YVpRXvcKTLj4aAkW3zWMvXE4weJNdQLBFndcd6zfuRiqEvL3Cye9tSL8A7E79oeg2jHnAs",
  "key16": "5DUJdW6BPBp3NpAJDjr1zt9ip9jUC28ToGUnJfvk9hx72FiNYpy8WTBuFrjETq69tzJ8pDYJyxwoKzRdCGCiSubf",
  "key17": "39uh6WCEfSJ4H2WVkoyuoMrxhkApMunpybHGSiM5BMkWUEPFZotFiy5fg2sNY29TawwEzthyvyNqJsdMrYyCCJ1U",
  "key18": "3oG322MkkSfTzoCfD2Srhqg7g5Td8eCuFfmhy3YRnchL6rHtcQykWVecL6Fm6FmprLikPSxJE62TP9nR2SbXdH5v",
  "key19": "XCQVndr2G2v65KhbGgYWkFYAdKx5n7BKchzYaoXPv3WYzGGvuL1UPtoS3FsQ5Yfhteh6TR6GMd6NztHBoXjWS8A",
  "key20": "28dKCxMzNC5Lm8nNFQE2bZtwKaXGysbT17kAzAxaa3KL7ixqJKTEXy7FhbRacpcYJppmiMWeHQXEFoj8qLptsQvJ",
  "key21": "3wGX6fU5giEXZKATqiy24p9J5WyWQHnbRUGB1zpqTBzAWRQ5phhTsWWt2tGhq7LEBdmS7Z9oyA51wgnWmPAv7PFS",
  "key22": "5oJRXygGga5b8uwTUQdrh1Argn4bmwykf7nVnUHPtBcjrpstLw15sTahpKXg3TFuRwBimH4H1vkejYmjUWJPt864",
  "key23": "3LZuepf8wWXdAWXSxqAqKjVQd1cfaQp2WPC7FQL5vbuSXycVyGryAFMx7K81X98j8gJS9Pd9c9HsoCMKztzbVC5v",
  "key24": "3TAjPBChFj6pHvKFqViRSPR4LKDTyAmVU1LWQGUxDjTbhQFP5f5h8jkTjo8ryESwntY2t2giNwzY3w5mUHyt3tvm",
  "key25": "3cdRh4Rp9jH2Mk4q2XDSyC56xUV7TsNnjvWM3iemN5pw3Na11YurE97ToPDcPyRhwMUvr1bnT4V1h4Mxh8k6NznT",
  "key26": "4mAatTzzSAQi9BWcXV4qQJscakeBAkhk3Z1EX2uPqijRzU9Bqo3GjgzVR9ocr1aeZy6nt73JxV82Uy4E2XtmNjhh",
  "key27": "21vQicMjssaL8BfPkDYJscX8KX2EasgQ8zsK7aUgbJBBdkDDNsfVX7t9gNctefQLqnDubZmDeFR2dGErqyTqYDqd",
  "key28": "2LtiUF3AiWjGcf41kAckwnqQwXmosQjhfpCLuheGTJdD4qURN3D584bGqnDvZCZ2eVKL6WgHdHWVo6fA5bMwPuPC",
  "key29": "2CHdRvddMxdB6RKwW72mvzLqomXiMYBbkS52LrvtjWTFKDsnC5Vji2sDFvkmnczUJGotTgwh2sMvL2fzEuuT3kbZ",
  "key30": "cxL6sZQ84tKqYfpkRDtAyE5qwRYFTCDx68pyyNos4x2DfeUa4gXMZzDNYkuoSTUJanwnB4tt72KtSHTikZJoJEU",
  "key31": "4me2MLj4t1fa2RgcsAfRffwqC6kzvrqhMS2pkeoBVPYJCg37DhtBzSsBR9wQW7uEuy5Gvk6q9mHQPh66kzYdcUrA",
  "key32": "3dFyynb8qr3hAzWwCzkK2yRBHhDD31DD9L7XjbiqHmekdRVAu6BxPwwdTxMDZtppdPWF5iinRuuSXNGg7wU2vGn4",
  "key33": "4Zz74hozvgksH9fHx2CecEihNspdVyRcPM7xERj2vGwtP4RBvWBch2DBzzmep4t3W35UbTPF13QCfs5dVwWSL5C9",
  "key34": "yyiBRRmFNSp9acTf6ynA1uvu5rQXsurFLjKc4acaQLeBfmoZzKSNHxG189TqoJYj73DfWMk439xayKd3qX6tx5v",
  "key35": "2W3UXWHQyzap3QmQRpoarhUedo3YmhFgxFoeBWwEZ7SUFapTDhY2RSeR54WMM5HxanzDo6TXpHsTuUdXAogrDYRa",
  "key36": "42QyZjn2D66mPstJqtLMm7fazCoJoTftCAGUEnsvxK72eGRan2b2ukAoLni8dqJLRpr5SkXaoSRDQ6KwHKDg94Ex",
  "key37": "2iC7XsrLVDAFv1myQCBWSb2JkMjrUXnGoqJtpv688SXTVt7MUMcz6JffomCEQKXYpjEvd2XRdw7PAKS7Hrrcuw5Z",
  "key38": "R9eDWHS9C3VzVF2xoBbU18fzn7Mf5byLWxFpH9GDvk28V1WVGLTgdUnMz2XqKsMiuaLcfHNtu2rrzW8rjLdHPXd",
  "key39": "3345yv2BrgHykidtqNdLmwfpgySvAVJ6UL9392LMUN8kbyHj2iSZKPAwFGqgrRRwnoTnF1P5y7MP3MQo7AHpkZ2W",
  "key40": "5cjGgipJ2EpMJuvAe2GU35WE7CTsQRoy7APCiXySUoUaz613QKd9V5ArYZGTBG9PNquht7f2o7xqbCe6n47AL73g",
  "key41": "5LyYVGidxpCo8wx5zAPMwUGZn5eBvCNJPYncvV5cdtPHeUomLvnrYnSpys6oobxabH83NLULNApt7p8LJeqA8SUS",
  "key42": "2ts1CMPJp1D84JTQ1Mu9gCzTsBe2UDdCWjHXDNJ7XuCVwvH5EL2kWgnWzwepdNV3FZK28Jf3PLFLWxPVrynspuHh",
  "key43": "a7A6gMpXTtU9Ubri7BmaRh3qT2XGUUimwoT8P8BaodGsGaDTUVMx5cKytgStEnegUxcDAriWQN9zSz6ZKTmWCvz"
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
