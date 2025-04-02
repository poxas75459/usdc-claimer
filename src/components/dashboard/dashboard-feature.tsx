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
    "55ZpcSdddFzs5UeSeSwCSnxMBLSANweD1W4pmivkoCKhUMo96jSYraypRYydFDr4w3WmuqyiaoTBAhqjZCL93BQQ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JpUh5WsX2jqC6gxbc7fyKgDSeizb2Nfq6dv2UEcQVJLGqnwYNMbrJHHUYeD5YnJ2zNovvhzjEmb5qiS5j3F36dD",
  "key1": "5oWnCiSL9kJi7QWenfKezMP2PizbBoMvMEcynfn2dbJguYiDG9cgTow7YhhT78YE173yuDi8TXsTc4vQbWW2BtSH",
  "key2": "4eBhYvJXhVkawCnwNddGtF7BkjGWF3UEPRxTr2rLzeSBGcVCtagXeR9t2of7WtstWCogufdDtayi9nhYNC9Kwr8Y",
  "key3": "4QTP2ULW51joyoXu1ZCoKASZTmHxNdjdaPgubnzCqRMQeT2JWT2PF3XdJ6e8gZ2b3sE8TdPgCv9C5eZxsxtZCYuF",
  "key4": "2i8cLSonavS85uJ4Q6d3RuUW4gmG6BJ95ezgddcifHJb8YJfdZweEAqrmPm67ft2YBJQ4SdUB4LLvnob5MpazbGm",
  "key5": "4Z2LHovdpNUBiNV5GFSF3f3vvtx47ppF6ycqwJCuZVCcZo17TLRFUaVgzVdBA8RbUsr8pPS6k9BAaevrycvg5QyH",
  "key6": "3ZM8JtmtvfrpnKLsp833jae2WeNrRRxRCyZmPAzUN5DSgjHcL4D1GTEQpgs1YZKU7q3N2sojSVLVefYmfZe8vLTq",
  "key7": "2gUVNoKjYVmgKscA8CRvhoYUypxz187CoXbdnG1s4ozRZyLhxmSDMW75GDNk4iNC2TNqALt4bGD5a6bb1cEw4hai",
  "key8": "65AK3yHXP44A5mRqkGJ7SWSrkBAWmRDxSBajkamWdZFo7cBTb4qod2yJTFKJQfUmokbqnTEQAhmLZikfHSPkPeYH",
  "key9": "5nZgcLnZzk9nPoE9LPJx2dvv9NgU9QKNcj86KUW1BAXbiwAXCHUsEgT1cdkeoSoYo4L8w9h6bEAPWLNHBzXzaLah",
  "key10": "3r14R6jar92uxqKa1TrtMCbu211M8WSZ72p18aqZ2fAWxUb3mVjTXUahPQJcQsiQDDAtxuvPah4LZnWsrw9EeCTn",
  "key11": "FMabKjYXXou6FN7Dtafho5jLf3vmKQxtL6aAoLHxGH2norbsTZ9b7rjSW7fvmsyMkThxGACyNuiUXyJPriD33fB",
  "key12": "2hiDGTdiWCs1rmjX2qmEgwrwN64GJv5GWEKukjq5j3pAhVVK3mMAskDiH2zhmSaEH3hf63qYKZ7sVAe2g522G9eL",
  "key13": "4YSXMoKE83Bsaa5N3xMT29nMvduE1o98LyXQeSbTneRCTqDao6U1stzaD6bcNyyNSqQzar3X5DgUNL1zRHhdCKAG",
  "key14": "3hZUG4urfdGKwvcKfxG8d838r29Er17b5qMYUUTkgxpS9uab7UC6BE6jhA8s6pSBD4GW75gH6V6A2HzkCD61BUti",
  "key15": "2MGL8uVkpnxeprPcQkKJiZB5GKtHACkqDUiaTfNgmPyBdqweTPtbdWT61EcshBxVqhxX6pE9FgTBUoXpsiLDEVJg",
  "key16": "2miNf2PGV9mmrALpYq4VxnV2bsBTYhUj62WuEvWvyMqpXnCPrZTu2YLg4XHp94PpFjgrqq43vusESaLLNGh13B4V",
  "key17": "2tBM9iwa8hvXxE9tHpN9UQpngTuh7EhMeswwPUJtdYEqGvgSufPH1rY22XVXBynqomyGeyTn3Trf9nyHVS5FEWkb",
  "key18": "2ymn8UzjQcDNfdMrBg7xG6PWWQy3dNiAkQbcokHUX6ss2E1YEUmLA5MVXm3Yx9djY836VVqH9uQndec6dby7qcSo",
  "key19": "LTfZeamcv7YQuzVQ4wobA9e6t2d1ZfpkZNQQYnRBWGVdB1JWmixPPhABqn4ACJZetSmVS7qz8rGXkGGbU593gb2",
  "key20": "3gCCAh1eUGEUNas1QM5JsEYGs2wo8MLEcmPMPMgQohrq3Zwm2tvLdcsk9Wfpr7oMbwtRfrDcBUkbTFyJXDAN6RaM",
  "key21": "2XwTxnJap9pfDnrHQPsL6NkQLcMtUt336AyYVZdJKUs6nY2QCyoApiYDvhzRTsC7nnkvgXsdzupHxpcKrksPLXRQ",
  "key22": "hJocBZsPhWM6G3Uf8tZ2bqGEibpXPGsufzo3ShvmJ3VrW86MZw4UShv4rzUANPu7idze26DKTye8TcyydwucUhV",
  "key23": "4goBcG2uB2B19Ei3AQxZVZQbkbb8pGsjYzpysC5RsNQgs4t2seu3vub9bGk2md1wcfWbHYworr3TDT9NsirUppZw",
  "key24": "273CotjCXqXuQCpfcWHhxJnCVGhqvHpMjezrD2QpvGU7H8eiCm9EwAhfQLymeViHqW7MjiFSKhkQ3Nopb6mWzqbs",
  "key25": "3cxWJY1R37WG4U4g9vth9Kac6utk27MHLZXajJLwtR3G8rNuZy5hhXexpUEAniWAxboMG8CBTRXSnpwVRswMFSr7",
  "key26": "5qJXnuQVSqRey6d3znpefdpbLGwsRJfC6Ft8muRupKgZaWLVXb7VHMc4PRLGVsJot2vZYV4gLMATxWzdUzCDeuVw",
  "key27": "3Ky28P4e5JfJeNDU2tr5FgtBi6fRKUmMqam8BsMfj8Yoe2UEqBswZ1JJp7Mzs8c5M5zdzPc9noCbywnjrXD2RzN5",
  "key28": "autMtV8uPFwu6JmrY651nFfTc8oh1z8m4FSopS24Kh54Xn89Vbjh336ZUNAubQNLHk3yt41aTeUy4Se4LVuLaDy",
  "key29": "5krych4fYYnYzekBu9fiucYF8AX9ZqAmPD1DzVMq6x2jGac7MFggAGvTLVYi5jsGC73qk2bZvgmKjVxkAC5qjiMw",
  "key30": "3dfNK7cYaMo4WWrcE2F9hukiSX5ELowt4NnoTy3SbbsmWyYCo2LeBSg6kSEJ5A6gXMiNd2mMcfvztuvqM3myBfKh",
  "key31": "2esuUG7nx7H67TWg48Fiihqu2ppZBVQz8js5fapGRpdZfhVK21kn7V1bSZgvN9Q2XEFgncDg68a12FME3HxkADU7",
  "key32": "2xcno5BazFtU9bzefpHEdfsYGi45R1uisUQdAokuzT37Qh6wgSBkwCdToidE3UXax6Gf7FJK9kursGRqwhvsSpaB",
  "key33": "47DdMq3R3LFPehAoBXAZhSkhoaopRRGSz5JXLFSHdUYSvNF2XjqfU2XbqcWRRjBC79mQaNkWNCsMHKZm8GSxUbRU",
  "key34": "4jJT8ZjxHKZLkvhh5Rh5g9NuNkycZQVd99BsTWCGBFeVzcpDe9tkFc1d83254mKHc7JzfiV7adH6sogi1E4pEyK7",
  "key35": "naTkYxT66RJuxHBSCDvzvFpmuFMFJocTzEvUe4kkFdmtsyU9Xrq8RMXjs5nM6qFmNnYtetSrBF5GgJSceYGjjpy",
  "key36": "5dpuRTzeNpuCi8wtiFfUwVLp1EqrcnHoqoZ9pg3yRF3Ma4oxTuwzAz2w8FisixiBZ5NbPD1S8SWjyUzrM8mUa2ki",
  "key37": "35sd2jKiHH4tEZz5sSNj4fW1xraJmRf4wRrqUbQ4sdFCcWSa1pgD9XWwWWBtWHCM71czKQhwMi2CJTDmwDbyF4HZ",
  "key38": "5hE6fcQvNzUFh6RwFszWTpCfdCrr7u7a8Ln6sF4PoEtqBmMBAXo68cauMoFoW6WZAb8miymtNyX4uXrVZx5LNB1K",
  "key39": "3pQQ21XDncyWGTwV7PfvNP4K7rj8uLcTCoLtQR4KfLuaMkR1B5VPNrhofK7KHdgqKPCoGNDJcpbomi5XKtEkL2u2",
  "key40": "VZhyFaaPFnQrVrYLAx68LB7LqnAvRZEtQfBazWD1vLUQDNYztHcu4BcAGYJw1aG6rPoiWX7kBUqWTXHUTZmssfh"
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
