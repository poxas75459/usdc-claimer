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
    "4qRqivZFoqqC5w5tfXYEU2XjGrSdjo2XWPG6J3AqhB7t5bCqgt25onda4S9NtDYQPggRdN2azVLagmXbri9uZFo4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2a9utLhRhqYWAAoCdDWjDriM2vgJ8oGiY2eALyTgimeAxwuabM4nxxUQDhgi7d5g5id9XR8VyJ7cB3SheBDm2Ygs",
  "key1": "2v7t2P8Eg1W5Cq7KaurLJNqrTccwAymVzbmnUzNFNSWWHmgp2qeyYw1GY4hMq4bFsUQiQhXJxR4AyU53j1mXp4gY",
  "key2": "NV3itEfdCZt1SnQuuAuWFp21Fz59CBerzCatMjDVyPDYoSFKwSjbp3yD4Gtxo2w7WKB7vdugQYq3tmftpW4Aidk",
  "key3": "3xs3Yk3EuVqFVWDYWoXbA3HKzsEgMqyWAMupCtvLFnGYsw5vXPBUV4qvJ3yXKaipdazgQd3oDJrPG4tnVPnNezCM",
  "key4": "3ndSakn6VciDGcKnWsekq3S9Uyit7JchpCWbHxRKqfsem7Ai6tv4BcTnP6hqn71YyRj2R4rgkS7jW6ba1ZygNFJc",
  "key5": "2S4WFxzwbfbyaAxeuoNhsqYFC5DZHPwFpSZ7rmcPbxbejEvFHUqfKvyqzuwLY5vf284Qaimc7GZ6Hj5Ee69LimTo",
  "key6": "5zsYpNeN1zKTaPHHCfeVjcBJMv8HBypLEf2Mx5CcNvcwEqFnZ71GdQgy4L6jPcNN6QmBU3cBaJ2KB6v9QXMvjXTa",
  "key7": "5LE5QFL1818bLA2wZaCmaiL2GAhYUQ3rFXwm1CX9fVbkX2kL96HEQwHJXbnDnfbaih36CDjCpsFLD54d5KxJgpxM",
  "key8": "wVWRfG4xeKdfQ9M7ote1f887osPnCJdVfHHhqZrBmpdpiuhgfUjS4x3bDoSMfSscYj45JJmjhr33MWScJnWY3EM",
  "key9": "5Tc4jM8ZzbbHejoqAwGPfRiu9LzVrS5Qw2AaWEWeZqrNgYUyqwmZbVgh54kRMAfKzFyhbAyJ4bu5i3GNoaZf3yxq",
  "key10": "zVbrN13fvo3XNgpPV4orie3YNxQ7cTZwRucqK71QGpHPiyBZJcEtewdibaottB6zGCaBxXpZCwTKvKk9U3Kv5YJ",
  "key11": "49LYJ5nT1doq4KSH1xymws8XbqJKhargJc81kJen24j8Fuo6LFWv7AcBCPG1GNfEb8Vvo1o6Me179beorLWctik2",
  "key12": "2VkvXW6fTqmDexJ6d7gHyqdU8nuWSYVZyNgzBeLE5F5b5gvXRDBfPdfe6AHzB8CMdW1Z6KZqAPQgNNLNTkMdVYjS",
  "key13": "5h4PjvPXpZazkU2TYfAobMTgrjDkLFTDSx7fFUpXBVHNaLvQGjfBgufHW4cf1ZDc3revkjKmKJAuScCkb7rWfeWv",
  "key14": "4CY7Td6YmUsK19KN8WkYskADU5HTrZEpvCBnz2Ksjw3ddhooeKc1cg4foifjZ6nsdXpVb5f7SWd1en4wFQpfuKbM",
  "key15": "Ur6psXvjAD7ZhqRaRuXqKvXm3dQjy4amtWJKhEu1rQGSvA3ozE48T4YmQTifW2SAf5GwfTZWN9Fjdqw529VET9d",
  "key16": "4s2b8U94LRWmwT9LG6FMBXnV2hqY64nSEZEqTsptBmzvLb6t4h5roU9u3AjQU2gm5RAtMjTcjR1f26SBNBznPZzi",
  "key17": "5keXrqyPh4zNVsYFooTrMT86RKEfNVeExGWgtJJ8gkt9vS81Rhy2HAoaj6XV3UrmJmzFcTUu3Lsbxz5bgauS4Dsg",
  "key18": "3FD6pR51gjdUbowH1KuXFcAZuXqMXe2mjajdRcyxdWjpj1SXDTnBVeLepBmfaMihLXg5Ni5tA5ez24VJ7xs4QPHp",
  "key19": "2fgy45UFtuNG2krkkrpBZ2VuMS3V3sGnMR15PwxGBPbpqdhN9wJfdC8xbD7hQTwPyh5bT8iWydJ8p47KTuTLKHiJ",
  "key20": "3KnoVJEQ7sv1y15SqPN4AFQ8oxyi6aXNPBR2cp4SjNVjPe1D8vSTMs2NkDikU496mMkBNBxBpWfTpFLMdGgWzcR6",
  "key21": "5wXi4uL8yJtqc6W1SZAif8iGw2yVmBfWXVHYRybesWpAMvXMCS6BxmH9ogcRc6JUk1V2Y5ZFMxR4cWu8pBYtTHhU",
  "key22": "3r2DmqUm1KWYVE3o4xu5zT21NdDKk6gYnGSfKbxBuywCn95GNUqWttK4oHVwLTRguAjS4rRkvixGKhTvW5aWPsWH",
  "key23": "2xgB8m4C18wuBB3oaHeDiBKubzb6Rvcf2Di971ssurEbJJ8nbGGCNMGMKzq8LhRKaMwRyoagX3CXdfnokpWFMtTt",
  "key24": "5kTJskCbTAaQUtgDJVr6c91gbiXr6H2egpstQ24e9Y1ziMzRUsbQdMya5GM4yU3C8uCDx9TUQ5dd1V5tra1i2aKs",
  "key25": "5NTXV5b33qXXTPvq7XtXAPcQB6uXw5KXVAuV2Z5YnhM6wpDYTHLb3ecJTajB8meLFHKsB3fSM6TtgXNaWWGN14pv",
  "key26": "3ih7zFMh3sQxsVXnaa2c1aT6t4p7x1QcSdSfYgT8FW5FXQGjcSB5yVLuLzGnZBxG8Q6ZDYRGmvQjnbvLiiueXTA4",
  "key27": "5EaH8JDriiPsMayZLLZMteCfsJELDqGGu7MTDDMVUP636aigWK2HQvacpJ7XMe91bsoYgmRafD2cnM8nfSK8A2A2",
  "key28": "3TetnZcsLDLvy5VCATdNLE4peqwjXpkMdH7tjnvVr4AwXaB3NueTW9dLu2TtBW7EamQ5PQDnBYwFh2fmu19ZBhLE",
  "key29": "2zkeFokAihk8jB1zFNrdAJBc5aAkggx7UetatD478MquBvd8CynhtPsz3eJegvMxD3L2CQyv5anyZNQbyAmK7Gbb",
  "key30": "62Rzi22NU6zKgJzcznw3eR3wzHjGNG9hcbXM9CRPLyZ2kLAxvKtaD6CMyFmMGS7QVnCdN56sw2F1La9xpRz1Yv1g",
  "key31": "5Uksnuai7FdfAphpktyCHDGSkPSpt4LziiEj1eMvnej872PwLFQkumLKedsj2JPMvzPiTN1EY91FxnLHcgzNtHVC",
  "key32": "pt27TqhrZsuhzCCZyynFFP9Dd7t3Y23TSVpxfAyMjSy14MyEr8XzjA5sbPM8A2v4Ud79dSzrB3583dEFMCWDDix",
  "key33": "NGBriXY5NCBrS3uJgtA8dS9KMBAxsd77eBcAjheMkH5qhMChL5ebYDTjqqTrAk55AZFhQWLkJVQU3yzMMeTxjkX",
  "key34": "5jPRCVvrLqNWN4pQuLGqizDfEHBEGD8SxwT2SxioATPiyoTmSKhK6L2u4riwT69cN13topoXJx5JrPwY88NLbu64",
  "key35": "4Q1nVmS3Hn6vfydCAXE2DEBaExZpyCmXjjPKyL3qrTeTKgJYCpH5EpLKHmUPfFQ5PRR6BsgJRuk7Rmovxru578g3",
  "key36": "3bZjcaoujkUD6oVPb4v6jqgb4eJNo6tuB17ih8H7DVdC84dzMF9HSEnTYhNAJKbXE79sFeH5pcQBohCUC8Ncveqt",
  "key37": "2L5MoQ83jKVbMKiXgT3EfTRJPg47MVJMt6ezhsLker7EELuWxtJw7V9v7SfQAxqM4BFHsFQFJsuaXt9KeDxss9iu",
  "key38": "4egdLadUa1FfHR6p2rj1imKT6Sdy8mxQ9CuLVi7GbcpvcuQtD3UvA4qpmRUCnQZdPjA2i2rZAP4LX8uHWcDhMTuV"
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
