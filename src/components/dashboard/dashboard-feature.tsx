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
    "4pZXWaASC8RoXiVYWTjBoxKLmxmGfQFyMbnhmKf55QwXhrjF9uvfEtGTn74LtGkTDfcrgcTFtYrUD6kxyE7vHfig"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5N5382S16XahYrkPHJmDcga9qV9HW9aY1trnJknBFENLHHmNU1bRQ7PqFPcM2d45XH1aenSfZHTxRgSLfn23fmzH",
  "key1": "4vvHKSJqD5rbdVAMeuS9kezQeyP5Qg9T8gqo6kFneoUbeM3QHCtWbTov6cc6JEXuXejBx2f3GMGdAPtpDvsEfwU5",
  "key2": "499c5UKjrbUmeH82UTdYGCuwbNiW6NgKkCvUqCZEGbtdmRvoEnekCsGY5Aj2kdaArqLbHL2TksJqcopxJbKxdC5o",
  "key3": "5ZwKH9ERxNUqeaVeV8UynAGgWrmmjtYob49zxko68Nis1uKykAYVZYd7MdsBjAhpgAVryNkLKJ2ybiB7bPKHaA6Y",
  "key4": "2pVzBwoAu1KDdCxokcknoPiuTW4UCvTisy7GsMrFS3GTCjWHwmCDeVNoNQLixYfkqHPsn19ZwULihhzvTBxkRacD",
  "key5": "38cRXiULhWiFGq3j7BtE4U83aabRGffazKbuBy2CiTUoqsvt2H6nMpVxGvEMXdm7Hf1FBVctD1FuuWeh3ybV9o3M",
  "key6": "5g5173DjcBTiQoAxQvb1MYUCkiM5FiBATKRiSTErW2RmZGVboBWj3uLdAPyvvFdSdtFs14Zkcv3HxyXKRqMtj61q",
  "key7": "bxmfo9PBP1hjGzYog6b3CrWDtHcTZT1XrjEPy6Eeig4H5ykeQ1pRqsjVAbdKk97JajCgeWQyLv56PFdKGVmYbSX",
  "key8": "PJV7mfZM3KRPLqNE1wVzxEkWmBtCDu6AMp3LYvi6UQE6ha5RiRzBCWVEcpWpjvAbuHbF5oADgRrETiQkzUiXX2n",
  "key9": "jTJDtmzqUmZMUm18TvdZ8PJGrjEgSBTsfXDmiicVWCb8ZiU4PUNL5SL1obLNfcLiU2iminnvXdodU9xETRueZGu",
  "key10": "57DJ1nNH2bCVgoXVArcpCCuHHachqB4dPbo4dqsnVXuwZHpegdjzFSNcF6k3vUEoBTTLRGqyWGXD792zuXTvukiB",
  "key11": "4z3HEjsHqR812FikAVR5qK1Y3pZ5Asji8ir1c7ixd9F8SJxNv4k2X528CqcbBYs91BoXbxcweff359Kbk2fWCuhx",
  "key12": "5WewwwveQdZcEzXCrLCNu4JbUSX5y55f5k4nHhM2FeoiRokNumv8xT2czqUuWf3WeixkAJQzUFjFMDzcZFY4rBfA",
  "key13": "uFbXMgrLr2sBtpDsqeTVi8gV7ywT3BSkwxtGjSS2jsgU83T5hut3M8hLWoDzh7bkKTabAS1MyahaeMxQDiDSsGW",
  "key14": "3JRe26ZKYmR5zeHpo1EC7xEvg4DcwJcVuMMzAYbRFALQaC42GEFUhAPKNrzGkWtkeqZM9PGMxke9ShpGaUfQhofW",
  "key15": "2CYwVXCVm3hociksWkAtKMGnPAryT1V1jqsD6EHhQ82fcTh8CiPYn2MUZmxivdMK3YqoqpQREQ1ZhobjxDDMxyvo",
  "key16": "2wqSgmEZRBRBBycVEfGSa2pxJqiWqUt8aePtPwwbsLZiYe5CszUN9P3bp3EAqLdfg9NdKU5uCE1itEkGPMkgY8cL",
  "key17": "SbYQszf5dv7HpTkBb3hB9NDiTsxVKkEyhJ94LHMP4UHGAEyfcv1anxwE6effAQMtnFEWFjFhjfWfxbNdmaCwgMq",
  "key18": "sfkjpKuu6kiz5ViaHi12RNcyZkuEZHh41BqAfMUwAm3jqxxARV4JebAPU4SEgUdz4UXfdefNUCk8dZ5oysDnRks",
  "key19": "4wEx9rMNJrQXrtaWkiBJrQS3ZnJ72vBX6zha1yjzXANpE6ZmJYSZ63a2DfHnvqQeuaXg87m9H5ws6itu4AjzojYf",
  "key20": "pQHvJvNXBWH61bFdvcneXXzWKLKwX4FimQMvzmxzP5Ufy8Lk1MLdCBjE4Akr9UJCKHWG3C8gw7E83eRsoWxZPaZ",
  "key21": "5zhMykSF4G1nczJuy8ZpbhxbvzFaYDfJR3mEDWuTtbE3xojUEEdrUTuVmQc4AB58RThyQ7Bqvg87PmUCtBaF9LJ7",
  "key22": "KokmQXwxPD39FWwejqjAhnXaP8dHs416AybWWbPGTiLCPjebRPn6Prkjcu5BapiUoQsp2zsG1HEUc5R5bhtKUUS",
  "key23": "5L93MwDrAh7iP92UD1yn4SWZ7xMeJBHZ21CR5ovrkwq6tnPCxvR49E6Yp29hYD6z9ZsU8bNmcGeFgLGYayk7iZQJ",
  "key24": "2VpddQ41i3kq8nk423UTUPN12fGPd47cVybeTJCNauxdAqHPomTcX1utYp3BmxqCDtQz6u7t36KaYiwUiVgaFyGp",
  "key25": "4r4EFyoC7VbqYbGmYE4N1y8q8EYABcLsBH2LCFfzHyFgwo8TxWZWawtiKYKQhoCLmKUnwrkYxbZSYR7YrEXNnHq2",
  "key26": "8eFPkwL8pJ9e5xZqZWgMbihRx5diiDhFZfW8WwagvSTrakvjZyyCACDei2pxVMTPifJKfiWkkdv2zYZuyCP3vTb",
  "key27": "MnCaWXjgBYuYRkauDHbiQzzPao1p1hjFK4jUWvmrdDTtyvR9dXu2h9BTnytVh49hYU4DnEa4bf4mtDHScagV9Nd",
  "key28": "2Dh4jW5tkbToDEGQPBXwYdCXSutc6bvSR6YL4LhPoN2DXu4Tdqc5ir5zHPheZXm1tftHVgra6nLbECNpMCbKrben",
  "key29": "49Fobrv11e3DJqcvXSYW3xQbQ6Myors9xSBTVE4NgrGZTZjNjbipDEMzpKawh9AdSxoJpwpa6pVXhVVpehZvD5cK",
  "key30": "2hysDRdCF2oMpdttoRJnTNc7cxvJw4ePAa53REeqdjoMTEJNFpfhVwvd2CHu57zs8r3hZ616w47kQV1njiaZTD7E",
  "key31": "4oFGT1qMb8rWEq6nirPAkqUxeZeGrAtDpdPzFhyUfbBEBvyYkvx1ZCaoVokvsHp7NumLzixkwYXYrL1kgfZz7Cpw",
  "key32": "AafBgGnnGWr2dAFNEYFjpNdLnXN1UiwjWhb3yFQgpzwTGMXsAtLRoAK9QGVp8X6ddB7bZ3DaEEA5o8pwJBXmdwF",
  "key33": "SVDweMoRYSRUpBoos4vwegygxwpM74kkRMSDVvo2eudekbxfRpzRjCmGss1cF4tNzHeiwUG8q5wnP5PwwMYYHkd",
  "key34": "Xpqr5ozDbNLqLccZ9bMiimNsUie4CgmLQRKYBZ3Z9avDdEpJHVuyFYiHzmNLKLpB1QGTpugPB1TrGeaD9oxSgXa",
  "key35": "3YvjkKoijQFTmVP2ZPwfzwTkVgLUpEgmdqLADyWJ9LaT7RcnzBc6kkttchYtqgJvxFzi2Uhf6WW1B2faD1y75f3X",
  "key36": "56EHDRZMVyxWrgjJPtmTCjRRaA3w1D4taKhm7CKhAHr9oAPGn8R1acSzVf2WqDJjuZcNSXBm8e6jSWfPHQ7AFCPf",
  "key37": "4viGGSSw4Wo13Z6a5NjfgvSW9vuJPmQfytT2FoQvmhEcx9HVcTkyGyHPKr9NLRRRsVzmoYzK1aCzBKbrvnnfowTa",
  "key38": "5WCb44qEf7uxHforLg8A1xr6bfDdeMWJuds5uLCJi23WLEj5pHnRZZZcDnBxCJTaQ1woqtNfCrY12Ph7MC4dU6an"
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
