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
    "4kg7U7cueK3aZ6GMtqVnfYc7sy2eVoG19MEAAvnJZpLokZZjEE1gbuvNnhrQhqwa3tLL5uRufp1h9TyfZLYwtCCu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5DC6tbyMDyxZMbWEq7mdkFuWT4BBxfAmkt7x6K2nfMnY538RitX18G2tZmxfEqodC3vLXmQn1EvSRFRUxmpW3wcK",
  "key1": "3NjQ2uRHA8skx7gnB5Z76HZdrV5Lsz4st7g38JM6WGwTX3PPMfjtzUY2qzmxQRUv6stQbdCaXxxRVBCwoB7raVY4",
  "key2": "2XTS78MSyVKMLH6G7KEVmJdZPsTpxrUnpfV6UxKNbJMMWfLBv7pBUPnFFabKKSaNCV193YT3srDnQX6JQtjksDm8",
  "key3": "3R8YFv2yanFFRcogZVfJrdKokhMeWAttGSigU4PeQaNej5BAMDJKrbKd19cWBBBMxXaRrCfphB3R3wiJqieDX4dh",
  "key4": "4zgApDxbhfJNchNJ4V4VwRzreXR3NVbYLqjXBNEoim5U18CE6yra81w9FWvKbL3AJpjNxh5y6WzwgixvKZncXAk5",
  "key5": "5EZEWcejMDF3DbdCMR2hRRH8GHYBX6cPw2dLgpSMmXnj9ZDkckY9NSp9Hkv2YxZEVj1QRgLXbsPKp2MA4GNxCfjg",
  "key6": "2LAuk3EzBrQyU3vnY6YwkUyFUQnvYkHHqsL2rchi8JcJChpkcXuTUZfx3YPaAeo8PhELCx1acrqqVtpJ3AXVZRe8",
  "key7": "3YJeL4a7NhiSnxwkvPHLgwwWpmNQ6FVkA8us41BgfhwWfZ9VUvY2HVJQJZ8Wiza219Vciqx4qfK3xKoBPaQU513K",
  "key8": "39nNuqw41sZsGffb7vfGyRE4DH1KEEhtHtLbQjziX8gFbwEWPJ7JDM4AAcLje8PPmCqSS21JVo7ddyZHmRupQZPP",
  "key9": "3B1rjn1VLnFQ7sZweiBpUdaQuBqLVMqUak4sEaTFHpwk1RnsZQBtbFddp7qwC782dHpd24EZHstmDycUjBSmrDVC",
  "key10": "53DMAdiV6aHyFUj8ZUa6L464ofGDPKGBvizKBAAFE2qBtvMv1y68samboHde7hoMLKvna4v2coFijkvwMMQwZgnp",
  "key11": "7nA9QwMUpV3XXrRvkP1xN1C1NyXT3SMzpY5VbTUT4YHM3u2ms6DVjLvSwiXpqJg7x3AtWVosVospxXawhc6VVRx",
  "key12": "icx5q5QMtC6soSJyeXU8P5gkzsNNfrpCPYQBJHNjN4ssP4ay5xy7igKtuQjSJBUNrCWdWfc5ypz3pUdCwM3fZTY",
  "key13": "2LL2PzjqW3d21fyxwJekARzqfm9iGEMdr5rsfPPtZMDnSiBe75HwEW6gJGhZ7Y8LuPcPBNCesEfLuvQioW5cQbSE",
  "key14": "3qKX29hiJMJ57sJJqHE8V88sFLJVVuvgrV23ige4CaWqaFwVPP2c8EvJzTRhob8SzvQ7UqkYCXii8iG5iThMjuSe",
  "key15": "er2T43oWZS7BeLm1VfhPaRzGJVsCiGVGN2wG6WSRBGXkBoFYpAUuUYgj9yfNJMUGUc8V4hnpPEJMMCEcBpbP2sM",
  "key16": "31MY54kasq8vLP7cVzpzNZQaXoqnWekijZ97nPvxpfh2qykKdgRjnBFPn2FxAbm6SYboYk7NzhSNuAfPfbbBShk7",
  "key17": "3TNDeMDiQkA886kfWron97mgJ3jNeXKqc7UmRdo8jcmwoTbPwdNHxxodr1PujuY7iNsQwyD11JqFLHdQTcPYfX3t",
  "key18": "3sporB9FHKU4bj7GyxG2svzLqekcbX3VZgMfPWXxSUk9HsntWsa14x9ZqJ4KD38uLXQDkH95DivZFFoo9rjt2qvs",
  "key19": "3RxLn1HXnc3jnLqjc4WpA7aTbT8iEwkGGqgo7pJmd1TnJcARKXVESbhxiSX2FjXVJphkR4iAT34aTgQjeDdbd5EZ",
  "key20": "5DCCAPYR5tfpCxQTy5oCjQ1guh8gGGErF2JhEJ9M6ALuPcqk2j6HbqK9LW9ZryMB6GiWtFupsxEEHa1FYnGVeJoB",
  "key21": "3zJktPovJyWfCkkiJR9R8Ki1Qc9bmMiLJrp6FyzeyrY53QsoJXt4sWXyTXyc1NWB5tmxb3P4VHZ7uyEh9neTW1uR",
  "key22": "5xnjZQWPGHWPfqC8RGZ1Mag4pUsVpofmQBfmXfjz5AamHt1qKVDFiyXTdSRCDDT55Ce1opGpT4ZHdQ7JG71jYGXD",
  "key23": "4dQ89cyqYUoftRkRRzbBhz9i4p5uGWPm6MqKhnnmYysrU7BYu3PkrZHFLoQtKayEXcHBcux88jgEVoe6sdMbsknz",
  "key24": "g7CSbkyXR7qYimCC15Sb7ksiu2etWiHzwGQXk6kWF4aaM41g7TZyG8wqtVHaEdQSLtJy7LboVS6HpGW4aqAoTrg",
  "key25": "5iLBsFydJwyzMMv45rVvuTPVC6v8bVi2s8EjBbr4vupqAM2NVMpqSR9wQHt1w7dpg6KT9hBHW3xawYLbQacVAc5b",
  "key26": "5PNkFwEoGLyqERKFANErW6FofCpMWkmhuCdTcxptL5fQhNVT5WJLK64z3aFrzeiUu2uLSBSDFE8fK8wA5azKBNXj",
  "key27": "5QsTZLKhfNcnCRqTzb8vz3knsaiTiuGxMmx5fqPGHGGTvzhQQs2r1n7D7rakJfZNomwmLDJ1LXWyqVLDgcuAn5tb",
  "key28": "2rW9GaHHiiMhTdCRw4Ry56sUdTbsbpNsxVc2SeDZNYttdjD7dVRa4VLv5DDNkNSLprm3YqN6dnUQy2a6ZJMFEbwf",
  "key29": "2kkBNuW3bAg15jLtU1YtzuKA4586ME1gHg6ZW7Mmq3rpRgsDskvy3rnBe5ACodRvT7BWQPZkGG4nbUgod68BtrMW",
  "key30": "4bCXwuh6shujGTPrGjp6iMPjTDszXgb3fEraBQ7YtxLKwNG8uP6n3zWaFZJcjcjcsB92CSdA4WPLNVnPPF6LHPuF",
  "key31": "3mAK5GctyoQAEr16CRxWnkXfNw1iT253NbuLN56pbLM8zCtaahEUeZEk7TpTkMHyy1brxiH5EWjHLX7Ax2tpDjGj",
  "key32": "XsCXttB3C7joGDCP6d3YCMJpD6SwzX7PqCtxxqk3Qam4aGci6s5V1N3xfSyvmCvjZA941qCat34LBXBmNC1enN6",
  "key33": "4mtxNggcy8w4a5xanRtvQweF3Q54a8dRtFG3SLgEBTpRsHyvF9utLgw49wYEKSGSLmwxz5J3Rd36RbWbVB7Nr7ct",
  "key34": "SkbHyhVo1g5phiEEdRWtZSRKb3LWJSTcWtocyTVgiPpaYKhzZkhsNapjC8hcDc6EsQpjG62spMjfgVZvCNR9FMM",
  "key35": "5a1sPLeaXz984b4i9oLPmfsNfimzhmrAq178Ys1eMb4THRoBVGfschmy1ZHqyKix8yhLUHxZsU87RnEJTWtZNJGu",
  "key36": "5LcsYmNgbZ2CkyhfoXsJvtvfgytytaik8jtcauCFXgGHrvqyWi8V8rSuX4CceVcQjqWNBycvPXaZvT6AV7uyNQCH",
  "key37": "5bQekgnWxUD1GbsHtiKzg3aVx4DoeKPY23cxxeTLYoyQSwcXhiNxmM3AAb8hGyfYtKNdrqB4QsvoQafMhKkpGiLA",
  "key38": "8f4Tb5FXu46diAQ6yXbnRrQcWgJp8vK3F1VF3eWngXFxD8DsqjtYkzdzGTsKVxSbKrct3h29N9TgxvzZ7iFxrCU",
  "key39": "BwaJiNYPsiZe7Q9Qajg9PWisGpXHSmteUrU4oyHAjBJ79pBrrc2R33UsgwMTmaTJnnUqhtiEftBaP2CxDdU1UiQ",
  "key40": "34J6GkFdPESVsX9gfai7dpxXfoA595kUovNZefuRuTnAZA4WgSZRdLCa9qCtb9nZ4dfPQiQdCfn2EVDVeK1tp3pb",
  "key41": "2Kbxp93spE6zD1TxSPiUuZx58aHvnZCVWzf6irXB95swN59EK6fD3A2X6tnkskbWMAiVXbmAz5ZT8j3bXnrU23CR"
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
