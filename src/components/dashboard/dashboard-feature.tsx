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
    "4vYwVWjCKkZdymEpkorP3HxEde4PMWwKs9ARr1aCE6LhRb6fdFGtt1YDgakmUaTvjaCGb5w6EbSBzfWzSJqup6TR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "559XRcp7TgxdmQ34WTvXmDybphWo1JLriKWj7vg7oaw2GRmaTEYMP3BxKYfGrbeqy2pATLa5RBPVNB5ssMgGM5DV",
  "key1": "3E8z2HiKYHYiwE9fwh3ziBAaXWWL5jucW7pckfpDF3W8KXAmsLcavi3pTkSMKwhWjSn4HNMTDfP8KNaYqhu3Hy2s",
  "key2": "5JdSxHKMzt6hPsZhL6YGtZVptTxBVv5r3meQE8J84QtUQE3Vfs9puEfVj7UhP77KBhAk67n8xWaW4YcWsoASNvvA",
  "key3": "2Vu5r5imENXSjXSZJ9eKn7rFScuTMyUSukESv5Yr6zX34ovbgSf17dUTvhkj33Aqz2jbwyK2uEYRFu9KHL7CjBrR",
  "key4": "3nR7okWVigPeM6YeTkZkJGH3BCb5VBe9LFPeqPp9yBKoJRG4EDijott1S7N9PDJawEubsnFrDrSpnmYHVWyksbUj",
  "key5": "MuCMqw3B5sauYKAcWvRFVb4PwQwRUWJVZ2zvbNmkNTFpWZys3kbtF6vnaG4vJ88UPTDGCuEHGrkx6JUCt16XjrM",
  "key6": "4qMhQNLpA3zt115He5Kxnnoi7S1nc85yh1VDPp2tJy93myhRMypspkbi8PFE4X35ya7V1aeiGCzixYMpwFB9vLes",
  "key7": "MJivwvdLqU8PDFx6sm8ifoX7KbkMyUS4F1gfikwRPJL35YvdosPZfjGBXv3tqDoAsYQR9ejmbJzHxtwD4DiE9DJ",
  "key8": "psCBndvfLMuzzB8h7zQQKD767oL6dKpRQqJrFECidKuKupRfQLHVhB1qkLR8p2efJo42aKesbD5Pg25TqTnNFnW",
  "key9": "7UVaMjX5KHNU21EDPaHjG5fsgxFYCbUmyo9GS7cprUVpygM3SYxFE9UHg2JNvoSdmkjNo9m4E8RPaWwcgFVX2VJ",
  "key10": "5KBNY9S3vYPpqWmwMJpuE27fTyrdnrb8UXWoAtMdtwBtc8mgsCzzfasv1dTPnQDKrDw29yiHeWH2ETgJgg8ZxCP1",
  "key11": "z9Z7EYh6siGijjajQ9cwnwAM6GYVxq1dZSZ3rYTvGhgQzToV5URbUJUV1Leq1TfimNLhSeQhHLAKh7tkj3VUN8L",
  "key12": "392Un93Dt6wePQkLZm6MG4WD4CaNgXbHTsqpSrn8rXGbUu89CecJcMDS1pynJN4c9zXeHdE4XFe1oycNEwWDxJ41",
  "key13": "5SGJdzNQWhF8tXdh5zzeGZzdhCPPUTPSexJ3UeqPh5RHzqMSgU8U2auyXqCgjrwM3vywm6wCXp7kXgziUGHvGSzB",
  "key14": "5GeVuE3axGNKDdVDb82yernzR2KQomgDjYt3o1iHdr1yNr5ckJQiiSX8p8UWGwm32KdcHwFC6q7wVN25BTFnBet6",
  "key15": "62yPSZ7aPV8X93LWFZZzvpWnC8ykNXhpsrJrjLoVzSrFn137aFz2Yu4u93xmZYmjXeNSCLzgm33EmC9gBtKeu7dX",
  "key16": "96ETL7RzqoHJMZtAf73M92rBsbjcDYEsGpgrmRZVrgMdcttq1iTGgMifmtCVsS3VprUG4Nu8ZjHiYihUjS9PGU3",
  "key17": "39ngipd7DK8YyP9Hi3tnBcLARtD6bp5n5ZJxwLcGALvEt1TBkHzyuTq2JLA9DebyLAne3BHJjBs1Q5sCNNSadciV",
  "key18": "2uaXz3guZeDvYeNYiPs2fEgxxmqDBjRzUx3oCaPZHE5SNsHfkc1ooo5GZaSdj2ptsYjNh4SRkacBSE4HyE8xS1gL",
  "key19": "5G35qjriG8xwSa2HVPoc4VRpfenxzRX3Waw89ku8dTJDubGyTqEHPpPjz9uG2aMpcaTNos8qWoPyNuogvmuJkmXP",
  "key20": "4SgQsm5sjA31eze6Ykseh9iQU6w27eiRrFg1onHy9fWYy7fiv8pAZbrmbDT5pPPahkFynFNRqNV6sEf3xZcfwZwi",
  "key21": "4TKvn4RJK6mhxZE1P3n2221QLgyDLSNH2Kak7UYJ39d48ThDSoaZ6FyzMqpzAu58KKULVezoqgreiebqdHsghozw",
  "key22": "5RvXgX13YWDPScNRDgca4zwNHeeJAtPahp7cACU3YUi6wtKT4tTBH3GkAHBkjfh63RgGZQwDZkE8hZVBjdzmFsNj",
  "key23": "2cMwBovp4BhDbtxTzdYewPGL1eWMPdAcvZ8C6TUXmDFnkjiJEonYkcBVFarFcFmS7bF82A9SiX8YVBWBQBsSQpwF",
  "key24": "2u82EQ3xNwmZV62m6rtLzyQ5CBJcMiCouRCb8oH7eCQktSUeqtwnVRu6cQdXXVF2ChnEedWGzNwAQXLgKT5fEtbE",
  "key25": "33RcJRNVTrTi32G9F1T7LLsrwBsWxhXh1oGSHCDGaEMUWErtMwk4EzXmyVw5ii5LDc43kqqkmRGY7eQtmateoqsz",
  "key26": "3oDASyoLA4CroZ1sf9UnMnxrcMNJtWN8LMQk1FCfMHQ9FjyJe7gNvf1jqYUd6B4fFa9UzEc3ybwFe5iKUZV5reAu",
  "key27": "5h23xdhskPiw6kKFXgGGob4YWefpX7APsGBgAeeXS6uoZwPCQWUxxpY7rkfddZg6QZnsDUNLtJ386rpifbDykbov",
  "key28": "2ovC7BSpb5Ywggc6NHXJGsyakdCrQ9Q2HUj4JhK2mAJYadK5ydA2dxsksRrBXEuA3c8K45NYfatfQTa4qPa9AQoK",
  "key29": "3TSwyga5TNhxYFdF82aECw1RDdiA4kF17B1quGvcwxE5qarjRnLYAskgVvH6SByu5TVb6tnDtM9DfJDtc7e6Qy17",
  "key30": "53WaPcgYUMvteEmycNTtDmKH2HD9s5RkEjpHF5tLghmu5c25DbuwCRGQXLvEvw5Riz8x5Ucr3dTow6gawx99bX1D",
  "key31": "3sawDQSwjmUKLGkVVokiTVu7sTvcVb4ksJPEKj6r4o6aZCBRogxQVcfA6iBjqHp1uWeEHue6vuxgmrbLjx4uQUyj",
  "key32": "45U9zncEiQBkZKzFVt2kKCQKEA7tDiWWjrjyD7S3wkP93Z8XtWJQ8y91vxkHNivF8eFsEajRAHQod733kgotGitL"
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
