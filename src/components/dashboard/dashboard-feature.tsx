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
    "dieaHFsZWF2oTdpPKrfnWmZVornpJv2BKeGmW4BwnNkG884bWuAvNuVCPb8UcM29fBfUecmc6aL1SBHQBddYnQc"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "59VmWhMZ2RkpGW2Ah1EtjqPGjiTLmCpYufJDrBquiJpeiZtkyXkQpw4Fph9iF4syHbxFAa6xfNGWBMyeX5yFeNtZ",
  "key1": "66MaE8qqVqWouhKySd69g6DdhDxLYAvtZwDrhG6RAqDm4fvPvcjtjsSrWEcGsmUNeKfsNri8UUyGxHrK6g73fdmL",
  "key2": "54YWKPkZn67WPfCbY2bA5ohJ2aNtBmUughJDubXztPiGg6ohi2caqaDve4nFnRUF3toQUQivioCbZpviBaVBbVTA",
  "key3": "4N4JfZcMVRgBCphWxkcf8CFNbboqbgZLHtih7hTiXrmbHeieE4RN1BmrR3bNyK9UUV1HXWfE97n1Q9vQ1Drw3vAM",
  "key4": "2boJLV9ZuxPpWBrJDnDoaSAzX9K8viFX8Qg4rtiYJ67q2WcEWBBGQXHvy6a2saJeDuWDRRdjPXEPJQ77DhJbW53E",
  "key5": "5jW6JyX9qMbTn3EoHvh1i97vLmz44pnkxvPngvvDhBE91DtP8kCxrYFfeQaaF26LjMypy84bQAsT4eU4mCKt54u9",
  "key6": "375jTj287umhYWBXJACwGshZBLrNPLCtTVyqtbsjWxL93CeokYUDXJUKT6gwQMWii9wbURmbVLxVVbEQ46VzdwrQ",
  "key7": "55TMRy9A2cTT52bvCTjrUV2WuEAfkv586RbAvVtL43XEXjS1YSizLFjc8sa6njeg9Jfq8HDb512AJ211UVFRnJyG",
  "key8": "25KLja8wrZVXpLNuJAs8Ht2PDWFj14886HVu5JFFfhwtjAT1N8b1G7mMEzs62wRM7qg9kN78DyuX85agh6GAki1u",
  "key9": "3CpsaXCdiH6EJmkSkwNSHcsiVqS3s58svheZ8mVLJYSstum9pzPzWFwMq8AM1dwtBToGj1FbfgTgm8XLSD7JG8GW",
  "key10": "5gVgDNRdpqgAdvCxE4hMyGvQEnxdytBLoSrzgqVfXktZsWHAdH3frJNVewHzKzgkLTBdjL83XxQokte1QTn8BaAv",
  "key11": "2aD7FMzVojQZSAKd9kS9D2aYXNNPYXipqrfd4jNssEjwZbRqQBgjsx31qYmJC7GDoyDzCycBFS9aFJR9nbxGFgfV",
  "key12": "2jj4vgHhbMLFYB33ajtNVsruvGAJBGWYU6jBWqJb6QPAeTvThQsYnLcdUd45igzBQWn3WbU37n65ikZKy7QbkP28",
  "key13": "4cUEhS8HkeG9AcHMQumMp92C1hQ9tsQaygU8f6YwjdBZP515xJPWAi9ibnLqGpGRaRZJaVEvf8jbT1sCyY1qSXwH",
  "key14": "4h7yinnwYkAftkGLb5usFq87G7KnR9VVkUNZ36ZgAKi23SwxgURKECN5me4EWezD9nSiuWmtbdRGxWhM4vunPhPm",
  "key15": "KnFa9K5RU9mcfdnMvJT4Z6KquA8hz81EY7XdWkDMixvBqTRovv7MuqaR21giQn1yE6ZL7ib3F7wWN3wESotAe6w",
  "key16": "2BxWysjk9yXHrzwWSFY57yrYwoaUFogj2QRPLTgUeDzq5DBC6iEHsq8kuGCrMRtG1vNcTTJuQ7tqjxLxkPHYdiJZ",
  "key17": "4zDfKLYGGid5PwHbMbVLSZeTtFLRKWSUQSNTeaNNrnPrEKAtmbroKLkVhi7WorWMkxYekKoKoL2NfEgvtgJereic",
  "key18": "5hAuqLX2VKEcdC8EBUKn6K1Dn34zuot8m1ufabAUhjLpY1wfD8neTRfTCVRKNvVVbRUBUddLKsQDQ376kRXBwxyr",
  "key19": "hqXz3FeEKLaSWXgyLiNBdxb5bmXtZy7YZy8wioz1feDeFHEA68nH3iYdPZpydykmVicNd398ucrnkpVEAfxGGi8",
  "key20": "5D7X45rwNws2ZTwkcyh3kL111VCaTUdDnyWYZ2QdXwRQSzirfL9pf2fBj7rTSgu7k9J5GCWvN4mpYQyt32V1ex55",
  "key21": "4MMS7bsm1htv3wi3MC1N36qVWrs5WsNBRdBR2RjjcR9NpVNwDKe9y2meeaKYgK57Lq6W3Hcci1vjwpgz7PKrciv6",
  "key22": "4HRTB6C33micqAvbyqyZawof9txMU3zh3HMeKGpM3k4ZmnXmhkcEQtqamJ3UScVAKGtBE2Fi85zP28q66fY3jJdc",
  "key23": "whcDdEuekxypsWTSP4trKMB44AWVkKXPr2QDtjmKPrhg2veB871UFQTcAXY43ejgtgddyC98A2QX3Krxnk6RMRj",
  "key24": "5t2W82cFfdJQ8LXCVGdUTuwZSVD4YeLu4VX8PPT5xPr2GEqsxwzakB17XXsCFqDQduA3k2qgirFzr6YfptWSJdZR",
  "key25": "FqbPE4D8idR7MzAve2pDQDisZAybo2XY1Dd5kRyEQAfzQC83zwA9TuztXX5s1qmLqtM3Rc2AS1WtA7FLN2RM4j8",
  "key26": "5b9od7vPCA2rVzw5W3yQqP7kQx1ZCVHT98HRZmeDqVyfu1jMb3NBL5FgM6DEiwwnN5Hk3V18SA6MVy17ubjLujvx",
  "key27": "28mKKKL7SXq1aez6FSUFcztNi19TVTpruTqRvaZV8dNGvWgoQNmP2rSiVLbFYLnubsQDrZR3G8iThiGAmjRzbcxC",
  "key28": "4QAi37BRY1WcoNZm3QaHBY1WJhRCkTqCik4hWF1cc2WAFWz6rp8Atjzh1utrQHzoJgRe69sPyjNN4Tqgng4xkVE8",
  "key29": "4Beum9PYF3yskFQzLR4kJgiA5Zxu45HzfaQczR1sfALzqjs3Z7H47Z1nCfLaW3xGCLaJGtgiMQDjsrtkEJGcYGXt",
  "key30": "3ybCGp5FMaLtUKjcc9U4H8d6kQDoyqjr4ZzN9TNUt95AA9X8eSMqvB2GPtW2bwujQK5DtQrbKaC5f2J7poGcDSu3",
  "key31": "3zykNuCEGNaYJo2ccaqLrLgXFAUSne5dWs4Lc3cs9c2WBgFacdVphPrr87G1u8Vt7JEzFXvndSvcjzvRYffQo4tL",
  "key32": "3Me1kqQ6PUR6LDMd2X4DD5FfECAZeupCzgpdw9ScMJUUh2rfqCQai8bHTuxS4yGkGY667ySxfWKisaNYncU6csgc",
  "key33": "2YwctGJBxpGNxGeMiExkNRbC9PRYZdRPG7vzmbeCiySy6Moq4WBr9sTSxnbzaduLPfDWaJFKUVw6ESbbC6YyDnWX",
  "key34": "5b6mBhWBANhPAWEpYD1DdBnsuzjqpchTri4EzXtjUCZL8u9CcurjndFT8MGq8C4Nj3XJb8ezooLBJFBhPr51T13N",
  "key35": "5kwcDzj2SC6DxjZ2ww8uxJzwkYBeENPWE2WaFrfMMCcGsrU7fmavjKHNmAsepfVRKcqgokxRTL31kXvknG5jmf2M",
  "key36": "5AJ3eaYG2M1pnfNfxaX83ZwTFrekhuBP4GRYQKNakA5m7zhwxXnVRiwutgBXgDC3wQpkYmBWu2B4u8qmycpDLrxT"
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
