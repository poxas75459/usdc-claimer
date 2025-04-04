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
    "2NMMcoNCaeieesKfDSA8xVBvzAvqfdJj6TDFxs9p63XA99UxB71unGpsQCoLxYFZbfhnmd55kw1NdwjVmn1UJmM7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29smxKxTYKdyprmXnZwLwri6LFF2FL7F9YYqDeEL7ee1RhLqPcJvo38P94sDzXxc6uV6eaMCxS3RLtLaPXw7Hoxt",
  "key1": "2sT3WRgQA9er7MGnDWKGmdwfyYK8TnxPMbFfbexSujrLSoXCwhgnvZfegyyQhBc7RZdHR4FdffD6zwd17ypxuMYh",
  "key2": "3iDpneCyTEnYoi5bo52F8Hs8eAGrVEGTBYLbpirUSX4NL8t3MZEgstRvvBA37RUXDDw4TpJHeaeE5TSXn1Ju7mLJ",
  "key3": "4FSmptRu1MN8eGPN2vjGU7gqWHmFZ1GRykqiFbFoSaDXaf6TTUdwyTPCHs9rU2wNiMCCx5ucxHmKcSr1UhSn1dGC",
  "key4": "4GJUxKUsiBRLoUQpNVhcGgTa1b4KxJbbeQ48xfG4aF2uJgqXy42see9QSgEEpDty6MQoaEVnbkNHoCC3L1bsMZ7R",
  "key5": "4A5XR1c3FMV8Ax5uzhLtD9koU6oTAsLC9tFL6x1tthez9umyRz6ZB2amZHUEeVH14EDspKDiTk2Dp6cZSpEXMj2F",
  "key6": "4AEa7FiFnpBbTp4tcvyGuD15jfmrrhbknnNuiHXTiKDPAGRkTPcC5nLs5rUBC9Evg6Yu2eqEfTdau3h2MEsaEwXE",
  "key7": "84h4tQqQezqUdeP46griR8Ji3XwcpjPa58kNGmeaKydm1JPNM2NXTazUrNdFBXxvsxvXgASicmxnjjhDCEFH76C",
  "key8": "5fQGzmMpmcrvHsf28a3xrdv5skfWt8A5FiooYrrQWPSptcFyzGjCeqpaN77TGM6ZipHpzigjGNuEq4oEHc6xZnWm",
  "key9": "5ZHf9UbmqQZHcqE2uhmmrGeDJambyGHVnEsYk1Cfvs2iCXjhcTWpubn6FQi1oCMSnUB2rTtSoNYj3TLwEXtG6XxY",
  "key10": "3GFNAdbjYfnLBZLHJ2Cvpvd1FaUgndHE94RG6hzSiz4eQbct7XXDPD2dX1rgJQr8WMDQ93XBEucXpgws69v5B7FE",
  "key11": "2R5naPP9N4WDUWtMe9E2x4mrMuYtnebUhknETraNaUA8afCem9A2KYM21Mke1F8xX93ujJh8dbHpPEEfTwcW3mxN",
  "key12": "4xNhorwaVShdiRr5F9cjtq3HTYz6tvMVdbofwkg5UTfZCNrwQhTCuPJqm9hZQVRvppgcfoVv2VJnJcmuFX9fiHty",
  "key13": "2dxNNiaZZ3c8VG898ZEupCJr281LFDxRzRBXMgNnELBqGCgfPmu7BsBf59gjd2ZQfaPdiz3NgPATzwt2N12cm1xC",
  "key14": "5xDMmYkzs1usjWFf8bJx8DWu1myYZexs5baZ5CYSqYdAZEjqtxUjAvAJw1haxq7F5sz6DhxGaSNkgfvzhwmj4ftT",
  "key15": "5k1j41bGYcovfC4EfWn6VVggMcJufmJwghBBwgFNuC5HnJXitFry5HoRV4G2eaBU7Utxc2gFmjaQuSa4orh12s3z",
  "key16": "57JeepHSL6jjFGS4a63LnHK8sx9hU2y1mhuUecSvNkvpDSK7YSdDGCUjxFvFjvFUbuWoMaa1AEmEGGGYh14kEU99",
  "key17": "44bBKCDopqDqiBN5kjnj2PwMQBjDM551DLtZJJwQ34ZFPNwVnpnBcgC2xbrgj3PdnAcMZTCgkq1Ujv3BiD9tnykD",
  "key18": "3cyh43RmQ7x7956ruScWvTtd6RiACgMjpY8CLgb6R75DZZ98swwx6hpoBJjzS4WANM3L3DKscpCUntXJLUjY9r2b",
  "key19": "3K4y3UE2McBy6wA597GZZMF2gc6bMiXaa4TnvuCF4fDAxQAUiLbupQR3WtRvYCCHsgo4NgvegMEkpqhcCQ15M6G5",
  "key20": "HR9JSiS7PwgB6Z1UhweNhCVT7wEcCMZ9LwbB2CFwSvME64A7g7yMwhE4ZRjPqjLz4G84v7qqPr7sEhAMnvGuXBC",
  "key21": "899xNNPoFSsgNH6qtocfZKVoNCrzpRtrPHstx9yt1wAKji2g7AnkMSF16WMKJCB73W3F25ppwRgbEpR4tjBrhZb",
  "key22": "3fNHYs6i4th5tyWAkL11EpoU2we5QtYhgeJjZ4ds89h4uWiiQqXsvdCs35SYfjuzrWQSg7i7iMdoMkMCdoJF6cGT",
  "key23": "2VJsGro4B2oHTgdZAj6bosUWkDY8cEVfWkrVvZp1n35wEhNTRB4LBR735jLiMyJkKkfHqiVa8e1mwf2PwpZfGDQo",
  "key24": "5PfQeEB8jNwZz271AAqUDJDWpSj3Fz2q3ugDDYJnaSUYD8PXuj1ceFCxfDEoh7amdFN3sukMFhetwNuQ1JvpNx55",
  "key25": "Z7PJZHmG2mUt5M5Nw1mucPfjCVK2NQiP5bHd6sJ1AARtgQDSJ4HPxin2WpvNazk5HMU8ToUk3hafxeeGpkQbmAg",
  "key26": "3tauvhNBQn4e4UMFXWdQgX3VDj8dSPZu3ZWz236PKMjG91taZDreEcuZNpc6ZuPfamuugJV3GSwUFd5JLeMyWcxN",
  "key27": "CtkoX7o47NxzdBkzLawCjjF7rv3h8otyy2uWvLUoZ4YbGBYo3dk4YGTSUda9SW85PHqq8kBHvxDhW6mq2ZJCdx5",
  "key28": "33zFUd3FSqiUkMZhNnj4nsqmTjF27aqtaPgdg3bXmDG2fR2KJXnoLW7pmrfqmt3U7w3rEqPCCfu9Tagxkey9mcW6",
  "key29": "21VdtKmrP1n336dBCWvwbvdwupknafWzDVuuYkV5ywupgRMHashjMkTKWGVMaNzxhtmqdcNpJctajkyJtx886Hdt",
  "key30": "5ezm6VWbyH6K5XnBpjeTfFyZz6Yt65njzXUDWUfAzEApocywY86dNzg7GauCEnJAMah6JbX47ChD5JbTo1gHX4z3",
  "key31": "fYihn2tCUrkRYscYfyWukJQ5QMvjDpsCRYEADHx6Kp31sbj89G5bFryyEPop9ZRMbhJ3txWu2EsYYkSzmqQbbo4",
  "key32": "42eK8p3fQQucAA37sxaa7GY1HzmxLBQnQ5GVNRPN8MxnmDvFdjhXyPDjTJywZp3uxnNw7mmcAmKtfNifiqGv7GeJ",
  "key33": "29eGZutsXFxTVhKHvnSGZWFLd1foj3QJcciLen6VhQymXAJdXqaYk7b5QscF2vez11jfksciEAN32Hu9SNz6baQk",
  "key34": "5H1iCxYAD52tXRCmjMo8cEePzWq2Ea7mF5xWH3GNH1hkU6HpDw7EZRji3GpZXpFFuzTU7Kp8DqFzFzhgq2BQwVjD",
  "key35": "2gN6ELW2rbppfLYzofzHyqbkkcczMF2KT8EusDuELQuy7whXk1tvCBrK5TBkoj8foNcfkVxvGCa6jeAb9zPn6ose",
  "key36": "4A56yXTNFSsd6WRLvGLQHZrMYNfeAZ8AEsEBND2wHHATg6YyCjcMCMwsYye55yLeGBwxbJ8yEn2jwTzgwKujrxRs",
  "key37": "nywWfFi4WTDAduEjqGBwhqy3opfAUezBaWDGWhbAtYntzbfDvSAn4eBxZpQ4Gws5Fu3iSESggs2uYhqwPRCKK7Q",
  "key38": "5SaYn3EEB6EmDETDKo5ndUqfTdVuvRceVMcLtXQaFcKz4zkj5cudhwNYtJzq8tL252za8zi37f1xmDaGrQUMJqnZ",
  "key39": "4iquwoA9bwcfgpuagG75cw4h1PJ2RXEJofm3qF73wh53sD8jLiKbg9RUWvCmKv6edjpDoTGtSC8bM9mNMwyDkxsf",
  "key40": "5r3u8twozAWQARQeL3qzpMcDvEQybdTFGpnbDD6t7nRrxe7WyvsacVfrSP5h99ESp1Pi2UbKtTtR3GyNAXZ1C8ZU",
  "key41": "5it1iGgbP9sVo1SyKbzANaYjLUy8LFbJsLwhCAChNy9TxsF2MhJa4gjkb7rtVWXFA9tUZ6brNtJYv3KZ6NVvNJhJ",
  "key42": "666Tn4Eb1T3u4hQhAohP1TU9EpopDaoEdgxvFZ89roJ8mcsgiKFKVtrRcPyubdsvR5FU6MVFLxBvQHf2kQ93k7yq"
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
