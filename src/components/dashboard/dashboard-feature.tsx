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
    "4KqcKCvgHH6cyncF94ASdU2VudvNYucTPVeXf9Hxhb2vJqa14pKf71XMdqRDZ8MWFbUhjNfWLZfwRFRcH2VZzvWh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "TCU1K1whpXDaTJFdTLQFqtGzAvjRRRs6Rh1KnW3wTE3ZVnmQ4gkUvTrkoYJxFruJcymwYGaJ2emxkiHr44dGJR9",
  "key1": "VizxKeMxqR6vAxC8RcnzNiP4x51CgvMN95QKV1mcKDX4CNGMEY4xocJW8e6KTW3S1WEWvwpZssEdsZnNJuJYmuS",
  "key2": "n2mgJJZK6U65Svxt5M2fxDAujJVxyEn2KMkAajo72Bu54eqfA5SKAZxCVyGdpo4rsKzzNJCf4QEe1pBt9a1ZM2r",
  "key3": "5gAZEK75Q3gBVWoWMaS7WDJFZmSwR7sfUkY6tC79kckuxAwWH7Qmqv95VShrtpcEggQFSUWc8u6WwsZgf91R9yhJ",
  "key4": "wjsy1JBHAqea1YNbYJStw4MRFm9zPcT5KX8PqRrq6RHbuk6XrbEg8eJkvSVahBYF9BbSxyJG73jHuXkrUXpCG5H",
  "key5": "5ta1oMLA1zCQKehqvScc6aVjt3xwDCxnmDznnBwfxsJ4LUejVoZtYdT4T7ikVrXN8F4kC5VZzktDznJx2QnPbfmX",
  "key6": "26bc2wmRjsHonvAMosXHj94Zj7YWz9U9CU4vxB5T8ia1XSc5FfBpaji39CfYoq2WuiJA2H9C56CLgmCHfmgA9hin",
  "key7": "98kPrWxWfu8tK57JbmxXNS2Ya3k1uMAGGu9FHWfMTjbK7RLkrAAGvaGCVfwAbvBNmsH4erKrwux9gADHpEvJ1ia",
  "key8": "62HUfpGG61x6KiTeH7iWGtRPN7ki1HUVnrCVyW9B2G3kbx1uCVPvPkZzduUSqEvobNh8KHKnSJApXE1uAkmxroFk",
  "key9": "2NvxB6RrZ8MmMpSyHmVNVA7bavBW6uNavYbXKR9SGDrK65GTtfu29oYATZPKqbxH8nBAvgttXRDqpgcdgt1dqp4",
  "key10": "45uxTt73cFBFfwAN3NUSrDpJmp9oGsEMNEqEmJ8VqY1NLTGPEw2ni9EHJ8AU9E4ckomGdzMhg9uKMR3HDRYj1E9v",
  "key11": "3GXQ8R4Ztre9TF8CDYqZfozcUXAo2Eax1CrWaiAYQ3D3WDmXt4utCWFRqoMKyG6NJPxyupjtf3gHtm6bY9BJysoF",
  "key12": "2kiXrR3htUoUMnfMER3496gKb9hvJh3yrARw9oGAEE3SWvTV8riyKvg89uzLQirHSWvTrDoDz32quZd24hWUrj4T",
  "key13": "2DvCxXqyqyDzJEE5b7PNvVVJLtkxfZwwraS7Mh6A9VgP2twYb7iKDmTUj4xxYYkZa6T6B7pHMHUt1bMPjkFYaXx5",
  "key14": "5KrwHWJpxCgDGGVRPySQrTQYmX9nfSgu9SLGPs5Wx9xBaWjKZWda8FfW8xhnq9QdnDbuFb4PCs6qC9M8MiZHrMWQ",
  "key15": "fSLtvaCG2yKRd4esvdzb3CRPnn4etrhFYBpcpEAFBA89BNXksLMd2GspANdpuvRPTmH7r5HoQidPabWD91Rqgb1",
  "key16": "2W7a7DxVKybPECAqoCmNyveTdQH5Uut4dctXJFCmZP1n3ND7vdmwPcUqSnHqdmpowE8gaJXKNeWaUVb6hTmx9DH3",
  "key17": "47Lp6LmK1wuAw5n24qhP97nWLEU5hvjcodJPEXBvKbxcnNEmcspUS9Hed9jkuNyUYtaHnEeEW1yW3JaakcEiiNSc",
  "key18": "4Cv3kq7zrDKEpRDoAY7vhQjKAKkSjRfbQdtfnxWYDY92n9nmx61EskeLvBvgPizSUJonbyyJau34MNaZkNWF25wz",
  "key19": "4P6kvNSdhSpiQ1m6sLL9L6DheQU17Boqhv43pi41oc9L5uKtg7m8rXkp9gcuCxx1B2dniSGVmx6k7TTNfmQuxMhU",
  "key20": "2dANr9wNSg1zVJYABkC5XfkGuhctQ13Y3yvJCxTRTegaX7UHYFfr2JvCG3XRX9Ck5bigL4FfMyQJsj3J1YAGQNmu",
  "key21": "4p66UcabJEAHz6QBJMX4AYPT3LTfA9nj3GrztxzybLoscm2yV1hUuTVpqHipR1huzNRQYeLqpwru71Yh3hJGgQzR",
  "key22": "3N741ENQQh3M33xxBFPNjqj7WUFX1q2AnmHAJsyfVUkvSTFRZL9YTXbtSZ9R8pVvUJ4FKGXv9SnzYuQ7LwpDWDfA",
  "key23": "4Cm8VLW2b5PxBQ5moUYzLJyjjvaY3HYZwMy4eefUJ1akjnxd2DPUyBKAJp3fXy8oULRGpoQB3hveZycUSnj3bNY5",
  "key24": "47UH9eT2aLndAxZUd7yrv21bPiABX3Ffn4G4cPmavrBnArkXcZ5Wz59NJ39iQL7hYE9jvX4KDKKYtpax7TVLJ6Y4",
  "key25": "4nXsffB7gXgsVqXvyCqVdUWNp58xQHtqMiU4DkxBD942XKKJV5KFh4BEai22WQghaSieM1TVQw9vkcYq5BuAk84G",
  "key26": "AUo4XgkiHRaDByBTAgH2CducxJU9SnjGmAi7Dh4UdbXPqnSFaqBz5tyUPswYrw7Y7Gy3tc1t1dey21MQrgHMitH",
  "key27": "3n66hkAewNK4MFARdWrK8n7eL1pwfaoRPMwATDpVjC7bfbE3eoSrHLCnBVTEyeV4KrTeHugyha4y4zRq6gY3ukQd",
  "key28": "5a6s3T2TtMTHbaVp18BMgMuv7mZ9JojbumMc9yTd4xcG4duWPX6667KQa5Gds57dpz47xNzp8fBsEzbAQm49hdP8",
  "key29": "5VqdqhfzJx4795MkVbenXpx5ibqDu3zfGu5QXyiEYukJAuGkj4WH7G9w6t55wpPKNtsYMcN9rwQpeHs1ZAaEBBjk",
  "key30": "5rTZuzo8DXKuSBgbKgBjVfrUiEqk1XxTbbFewaNUp9Jmh7nmexDHfQrgZS7RzUJGuBrHoasCnmtAu77zruX85F6B",
  "key31": "4ALdo17dc8k4G8RR6XLxzp6HoUUS4yrtAq6MehqEy792zQ4D39vyoKDbpudnjirG1ETZSAHGfS7GEgtRcr3UegXv",
  "key32": "5UeFUS4ynENrZgfSrK9pXQWQB3BWHmSKogNVehK6rWTqwAJ3KqQHroRtzKkNYVPpYp18xD1xFkvV8Vuxts6WvGB4",
  "key33": "3wRPJtUuaBDysFG6iFivcjQPDzgSg1GJHN2ALnxvQuxC8NYxPgQ7PGcGjq3sSgY9UbHFWFFGDq5c7BVQo4JsoWgy",
  "key34": "33EXL8uRdbKTjNTjcz4ccFn8SWY2mkmJqPwcnCBCUtVrP2n4ykxB23z6DV8PYzXf8ATeLkpr5EhJcP8ZKHVocv4A",
  "key35": "v9kFFNZEFdYZEKvC1kvgFrshNq8aADQZTAvAmo5dRQwoiLN84o6ZVFHjSrfJGe2deuHM9ppSHj9e7kRdR5HAFV6",
  "key36": "4SBXoWreBMdoo4Yzx6sLCBbDsW4ER6uBXVT7wMGudMeny3yzuzYjgZb17FHLhBdsJJCm9H9jE7CZW2yBpcG2wBQf",
  "key37": "ibEC1V1vLNUZAuywaPaP6zbBMEynH2yvkeWncjw7FrtqSsBy3d7X7gisRSgjPbMVeLDw9aYwpBHczxrGsU3mWJQ",
  "key38": "3FLjLheRSQQr7WjUkpMAaiQxMoUcMkn1sisyQpysgTiWDD4x6Z6jqJKtwThoVCvmgMdRyXCpm1ddLioZqJtuzupm",
  "key39": "54YrMRWBLk26MnDMSyn4geFeqxEqzScr4bKQ4YWxjdKs18MHETNhht8g7M3aZNeU858LqTFshcHptMjELUkSddyQ",
  "key40": "3Ac1JmoC8Msb2vwi3zZJ3Lr1vLzRmPGB6g3ccNYxgcqa9PY65biBDwjXGFtY6hp3qw5KH697nkeTR5sTaHwJtmyY",
  "key41": "2VXg6iASg8ZoiHVN9e28DhH3YCFdp1mYqRJ1kF6HXXwaa23K6gCycRrvwWJ3EnFayiYwPBa5kTX9X3FD91boqqmE",
  "key42": "2ZKZxhv2hqCGpnwePtEny8cA1Zin5eiubHnpY5qNxzy3caSHtUPz4wZNpZWfYWVDPugWC1u84sCzPWDPMDaXAE77",
  "key43": "3cCgETXwhKBFDNr35g1jmVLDBasmNW3gLbD85YQ5z2SkAXZfKGzEeoGy6yQbBPz5Pp6MdmAQQjKn79UYZhbwExH3",
  "key44": "4o8tA8F3Noxg4QWQrP6LYXXt8RyzThz73Qpn3SjJz1HNHSvMea6Ay9i9Nt7TpeyVpoxkR6sKxZNYfCUUyLZ8d8s2",
  "key45": "2tqZy3KdByortzExH3b7ys1NUfpV4ATYcLZMKV7bjnQSQSQNP4jqskzcU4THrQTSdYG2t2WArkPccqEnxmbLyZU",
  "key46": "2oTwpfXBvhDJFnt6BUfSFjw1tAvHunfyx1Sxc7ik8f4SgqMbPgoPHXKSvdB7zLZ1qngVUcuSGtTKeHb6jcEZGd5j",
  "key47": "3NCfNKkggNyx4wsCswgpSPPtu4vL6MZidD95zZRLVXcURPdWbv11Xx1JVWCqwvzqoAnLX6ZiEDsmUVvTkZepBSqV"
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
