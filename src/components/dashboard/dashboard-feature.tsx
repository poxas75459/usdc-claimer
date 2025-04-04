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
    "2UhQDEe5FPU2dCNfUmmPA2vKDKY3JcAPZvcUbeKtN4oKT4N1f17eRVMfDKnhRfSbXvfSGePPnVpz3JPvuusBnKP9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "23ZJuzT1SRTLywVL9owDAvLDfnPPJjLqD7Sgbd8ZuEacbkadPkz4FK4LwL4LUFE884BGpPoAMix38AAQCqMnoFCy",
  "key1": "5KhyM9Da2kf64thDhZkK1uRNkxtrgj1MHLKKyV3qE17D3ybWSrAt7orPDNGaiVYVVWFdxBq2h89WgPLn9BcWp4kt",
  "key2": "5XDmQQXtfxAes6j7qtmdK5tixdhk3mdoRphurwwbkCfknMeQrUtgA3DeRzbUDpN4nhyGCEoK6PvWYMMXKZrzA2sJ",
  "key3": "5uBpgj9LUXvz2kF413RUBy4S22L73trHJjbjrkHBVAWeMk85KTxpkwVcS6ygonP114yD3LANxKYNWivufh3wSXMh",
  "key4": "xfNA7PeHgn4Tgxp4rckk1YrieZPyuHunbP2wKbyrC1JW5PdpqGPmUj8t66qkoWHiqGjeESNjgYjmuB96dWXpVAC",
  "key5": "4EtMB87eCnBQzQyqaB4c7kBMUfieU8wVy7XuoJjq94aKyNrx2QqwVMaEgTTjCAXASMD6gK7tRrxnRCbrSy1UJQT8",
  "key6": "3e7ST7bfUFBKFtLrAdDMTDWJD7B9YDsGLdchxRo1SzH2Jj8HNP7rxvA1XbsgwsappPkiWFM4gRzXNfVXnBtiaVPf",
  "key7": "3tb4Xix4fZ89dCjmjv5KdLYTTMUm82wEs3E1kdpn6XHFWQJTYfmp9HSbkhf8352XtN1d5sjwARasMEnPmi65ibD9",
  "key8": "3C2x5i3mMV364vw4Y874kuU6y5YAWBHygRPcxVrFxyKv7CNmeGd3F4GdxmnC1SRubNTZE6Y5vWVHS583QxDjmxhN",
  "key9": "41W5UhhghyfFfBj2WGVchdcn6CXCFYcY7m7yxRj4tu6a9Jm4i4iUo6rhc4tRr8gMwgAP7uKcybAPbdcHj23CYMwq",
  "key10": "53ZkYZc98Js33vdUVGyNcHRpzoewZG3XfrNL1Ytk1rhWdrvtaEk85MfeZ6y1FbHm52RR7eRXY4JDAkQNjMqMHvnQ",
  "key11": "4ZXtRw7ukMjfRp8cNbmfQFeebzE7kgiL5UoupHFmh9dtx5SV4AwNmqnJ6e7sZipNh7XDMzkRsFHDRyyFBfjFsJDN",
  "key12": "51uLi1RuWPjx6atcfXaQUswyxUHbihp1F5pTDFdxqQz69GXM38qw2viW2UxVD6qa51yJqEFJ41tnyeZfB8dq53Zd",
  "key13": "4PyookfNXXZXuHU5dvBwcgdv7BL1mBvpd9vj7M4XFW5JvS7E4VeDnMV9zSUKv7RxYKJgayzNLUqQNR2BkRo78Csd",
  "key14": "5SoyAcf9GsQoqC2goXFWcaRrRoCyUyNPS4UUwLf9dQNxp9qSvAbPvvowAWgWov25Q7S8sxMUTpANo1aUHoBQf2PE",
  "key15": "ZCtXFxEMSKxeRcKKvSZtc2HsPNqgcHXqMskaBZUtvsXrMQWdaThFuMqc2C2C6K92vppYfwGWs6rb1grUtuWf1Db",
  "key16": "2YfTBQnBTMrzh3JGmmwyiXcApFArixEQqAm8qnNPxfjEnaxa8NmcH6jT1M2vQec31j4oThoHvWs6j5BQzH1PneRu",
  "key17": "2sZdThYh2XptDwGPPmVjy7ipiRg5Mgv3NGhZrQDph6zfTTHsKq9Pr9VfRxkjvZYeuBKFWsXRPEvQRQjpvxXDgRGp",
  "key18": "5FhkDBz4nkgJpvqdEKKqnzpyStuMQC37bkA8s3ZTMB5djwimm5Hjywya2mZEsnh4RDFbX8USjzWxXghtdJTsEQrj",
  "key19": "g77urekmijqMTwicjXPBwHR14KCFuWctFDwazc7tBPmkMAU2q3sLNtFR9A9Ffv3DiXjnDJGp1NpyEtkW8cgfpyo",
  "key20": "3DnLaQ6R8SVQJa8Ve5ALNENa2MoFVs7iwSxTkE9xdZkngJqrpXNcovHsc99Yb2ktLkZd9YUjtfwLhGJHjjMAwNUU",
  "key21": "iEFefL9R5RMcQApxVUUr7Hak23aMJhN1SoMxSde3EFwzyXv1hQ3MNxqDwSbAbDqiDPmW88xBS9qw3LG5dTbsaWh",
  "key22": "2T4Wv32rU7BEfiE4EL5P2uqHbqwTpr48DpNxCUCxEiMFgbCshBVAprduLB6mJ6Mkumr3cLXnyZqEWVBcTy7tETk9",
  "key23": "2Ys5CFFj6ZfayNg8wya9ecft62NGgV8X1i2FmVqUAfrv51rSbqqfAq3bXGZfYngkQmYxPWaamWLPVCHBbywaojVW",
  "key24": "ByphX1gfULaX6bLD8BgRyBKyxNFbi6bhAe9RQHgTRRCW3c1CKTgwo8AQgi5Kx5wyWg3UuGY5LchTBqos7z4qfg1",
  "key25": "Vw3gi73Aw1F1gFaEacyQNbeEZGNqSjmcwc182shNkLYiPaz2VkWvWCq23SJn1pXWU7FE88DFFKNExRUZt1gKxAt",
  "key26": "352XLTT6n6z23dnXa5jXAgnmRUnTAA4S9uJQzsdVVDKnUEv1axr74sjTGiJz16Fg46rRSdZZDwfxPKKLRMP15NET",
  "key27": "5RiuakLcdMMELRAsHpEpaZXiu4g99ZsTRdCgzw24hpQD5Cw26Uepeeniv1L9foUTG6NYkdrxmiXUyi7tFVgSzQx4",
  "key28": "4DT87MwUSDFfNTkCzjqBnUqm7vBCcMmpiF8nc4gh4zcQZo6tqFmFWEr2dnbhWcg4d42NLEQVq1NCE572n6P4FEoG",
  "key29": "2gAJ3S8akraEHkfA2mXD5KLA7UV2DyxtGnd9t3bouZHXYQB5reUXHMtLS8jxsn7SSFzyK8w3LGePTif9awLwmhg8",
  "key30": "3p1VojdTdmgaQoVzJA5DouqmaQvky6mSwt2ssVUbMbA62irM18TzbENrPa65rkTE2bTf9y7ZEJSBeD6Nt8yiKMmN",
  "key31": "4uUx56tqeRzvSGhk6RpoR9GTsn28hX5nkZktTARZYZfoFosVdujqBpdsYL7HzX8yEFJntRwavk4VKmHbEJmNBJ39",
  "key32": "55J4EyiV6WVpGwAQTQxEUX2i5q4ypmbwxeywFYVvYmEVWx9NByjcoYRK445fUukg9xH3Nm3Kph1YwGc1zQZAjez",
  "key33": "hwEQpaCxnEcDnm8pY79ZSjvbxed3VubzJrY9xEkajRyfAgcEmHzVEZfKGvbSEWYM2qnzsE3jYaYMfQccnGtSQNW",
  "key34": "3gmK4mxoQpfaBdoshkXnokYybXybfd61awQgbe1cMLEd9kix8UK7PVAE3VaEYszmD9yfkpv2YgDEoxAkg6szBYB2",
  "key35": "5VeUVTKFkWdAuebxVaDpgUk6WTZHVmAumBmR3FrBYrwJ3c5bZ5kF4V1WPwCfijsaduEsQTc822sSYNiSkB2SNGQV",
  "key36": "53Sp4rEphnHu1dW9SqUMyHXka7eWAoCcqFqdTJs9cTKqnsDQprKpFAkhPqNuUR9rSfp2cxqVbY3gfv8eGEJVNWow",
  "key37": "4VCHQhcbjVpXj4N5Ft1YNikhmgyvGoti7kTfhkpxvCM7j1h7zaVLHbb2nWJAQUAQcuqN1MB1KV7eRoEQUHkyuMW4",
  "key38": "2u49X38rhTmZJxEB4UbXcUkz2jcTZmgaeTLHubWNx4VYzewnAUMwwBYxaZgih3kDgXYdPnsoiXHCYkeFS7KzCv6s"
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
