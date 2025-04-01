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
    "511D9KH7cz5djRMbgRhQ7eCv9xGsGYKtpbFxbzkzY8w1p28XvfwbjLipKGvRTShX3oRq1jCfhMtgR6CV5SMZpEg6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5JYgA5r9XYVcuysVJHV3WS9mB3UB6SMy43zxshnWCTJ4rFRFCMbehsUqxRyhiu1GcBAs99sh5yjQYGzvCjyz7DZh",
  "key1": "6apfSAETrZ7JbCkz4WUaXwXrvohGmRWwzDwzAcaPSqskmCCCitUqH3BdbxosyYhGCMngbLpBYjX2CzLNuyYFFwY",
  "key2": "2GC2MdhGw6ZBGykkps47U3TBMK52wuWjbp2egSdRGR2BvpR9CwmFQ3mnq1vnNhn8dKdqE2ZxmtZFUg38YiWwnnmg",
  "key3": "5EE1arJRKMHwBFGhw5jMx1RmciibgTJiPC8zPs6bbPFk9eh2edz9ZZPx5kHqZg3VuuDBt1277ASQ35VHsP4oXgZx",
  "key4": "SCMf1MdzdJBHcMsgTVHq2SGYyjVez1T5mMXUbrrQvsBv2Uhfc9sVntShY7k6aR6kQQxm2YP7nsgJdVJ7wQrpwNV",
  "key5": "2r5jGrBLDEzdNjHHf22LnGkx5uWwwDXGygmbDar7bpotXBWLauVwAv4pj9UJWvTemziSWfwpBpdU26sceSfRpdqf",
  "key6": "3hmgem6TNrmLUb2bFTcwSDfu2T3BnpDtsE1AjMF3fJ6SmTqwMv7M5zxG54ZuKG3aBFQFTRX3eNj9jyDVHPNgR2zS",
  "key7": "FsiUw4iPNBzKsCi62KMU8gQWUQ8geD873K993tQMoQbmUJsHk4VfkkDYyapWbR3baRHuHYBu2B7zxeHSiZcTqn2",
  "key8": "en7rCQUaoDftYLwwzmUirdRHzKWcHYAQ417YBEqexKckfUZkNXDHWUVdbt4tpr75kZNc3k7WsueoLS7WYzzdaau",
  "key9": "6n5SmdWtAwYY7x8VQvuUFQ9tikUWd3y9dz75K5jfjTRTGDHfxo2QsDy3xX9CTo3iSS4guedTHb2PVXKtPiF9eJo",
  "key10": "3kBn9uEYha2RCn32s9rzr4c5LgL4SSYdizt6wUQAtFKEAQNNLHiem9XELgKyd8UWDpPx1UVSG8fjS1xooMW9pDdZ",
  "key11": "tQ3VivuQKk5YzcLTWXmirF8wxEMXRAWqmAhhiMhTRQMeEwCKPB7PXWE5SF5EHm5C4LvqiKRtKvp7HRUTbMSrSYp",
  "key12": "3TpnxjH2azzJCSKubP7HTuVRnUXyHDNqSVDBVL7X4JfHuq2DiuAYdorGbdHP1UyhCoF6gwXbTppmLiEWyiCen34o",
  "key13": "5dLfxQa6iFcjWKiyjt3YpwNzxWcTHN2SYMrppr1F4bhRWNVLeyZMczbiUGLD6ssWvMD3cP8sZqe2r3bKdj5mCxfg",
  "key14": "3J9EThrByaj6J2rNRtvJEmghK9qFTUtNZZ6v2aH6w4MSe9QeWpog4b1sioaC2EG4N5r1JSqjckysKR9ZgFriVsBD",
  "key15": "37NC39xoT2DS7A4HEMkodaJgbtftmu7QuAcjEaPN1RtmVgi2gHrhmWybDN3Az2uJSkAQAvy2WSpvgh2hHW2tLQnj",
  "key16": "Fnt2nbvCGAtmDdLHCRGKTTcwSXoWSxkdQEMdD6WGPURBuiiNVzXo9KX7DJ8wBhVH3pxzYb9AC5nMAZL8w9R7gzo",
  "key17": "2SiN3gzSBZmHM3sG9U2nvCPY8jr4LK4p1xfftxwYL9eMz1iQdf29Mcnj68BRV8z4gb58TYZuCsNVQJgBrz36JDF3",
  "key18": "3pMLoqaqxJJLDJWAN3H2eRwfKobRgQjJcJoUg5EnFEqVcGuBUqd97g5uEsL7buprxXP3totu1N4Q6RKDD94Q3j7R",
  "key19": "dkkLMDf2R5zWLiJBzDRyNHrxzxYarxV5R7xsHBQNbPRR7TVTaYENVPJ3UR4rH3vD14KpWAsHwit9btwYeh9AL33",
  "key20": "hB1xjvpesrVmubcqjAqfniNbK8zc3xqW3eNF8jEuRrf7GHE9J7G1rsJp8VRS2QahqTYMdN3KUJZD3dMgYr1mGe9",
  "key21": "5dfU9yE5rtwgkgXJZthPeYdBVz1yvoZfqeo1uGabuSd5GPHuMGarKojaNDBC19Q9Z6Y6ci925Uy7nJavXnZbzxyn",
  "key22": "k2xySnz3UuKTW2SyjqeqNFDwNTfXQ73b8iPChbAddqt5NUSnVC4vSys2tsY4RbhVP2DwMCQhNySM5D9VPXXSPfj",
  "key23": "253iqkKuoZXxyuURWH7a6tAoXT4gjmnGkis8ANUNUC6FUPn3L9UE5vcQn5PbRNEPczYmUviKDFcwiMo6czJUdAuW",
  "key24": "4jiSTXntiVG31745xpB1bcm9dsqapj6bWR36N72Myw5oMDYe456w87kKQvN2TtwwLwHHMcsddSKiausg9wWjZH91",
  "key25": "36jz6x868kNBqXwieYynCAY9GjrTgT7s6z1CkN1bSjHKcxRB2mxMjTBQbummG7U7pTseGUjZVbW4RMBaMjoU2WFx",
  "key26": "3aenyDmXq14hTvLC3rJUiX1Wpzu4yvxwLtxrrYtnp1c1E39Pv2FDcC8CFhzTmghJ9UMy8mBrVz4ehKzsdY4zWA1G",
  "key27": "3M5pdQhasYn2pJ5uRFSnD1buf8VLSw2Jf5FokrVoDketKiF2fVxm7kBvDo1LkibYS8fArg7jyFyWB62bNKov1uPZ",
  "key28": "5fTq1wvJ5e8wTcJfc7E4FW2hTwAxutNfA3qjipGcUXruTJCky1BBfQRggrk6CKCZjXhLEwmvkXqH4pdqF2jEZFPt",
  "key29": "3YpY2ohQSDEi1qvj5aQQcb6x8r8xDc3yLxXYVP47rh27e5U1GHsyPwnf6ztgSqu9vKD7ir8dbALLikp78wFwv6LU",
  "key30": "2mS3cFqfYsu3Zu6rrPrcUDTat7wTR6xxrc7xtorxV7rE2xQDUbbVkY9qC6Zhd1AE4qqCkVVeSM4y1UvWwQNdWLFK",
  "key31": "2PTgkGuvo5Eqo6ifB5CfFxjXGiyFUasewcEKZLTUeNBgLzoe1W9siXcnK2Rw243byYzaLMbMPi9K5DR8Ae2n9wLe",
  "key32": "2bF1w9JmSF1STR2jZxrWgi9H5qGDNCe9V7Vc5BN21LSuhbHrM6JYNS91bhRpU5Mv3DcQFFLFQ6BbHMZF3DaqmfHG",
  "key33": "T59BjwUjFmbGceYmiBsXfC7fZ6dzYkvKtrp2ooFQPk85zJeFwaQFjfg6Q3aSrzU2qewaRdzNb8fnbXjVGR48tmG",
  "key34": "S2jrY8y4P2uqJ1MvEdiBqyFQoGS71f1Spz7AT7QjLWS7NLjwRaDmqRZCAV9FsvGeW7TsGKxY4D86M8pUkE29H4q",
  "key35": "4GxVubD5b6HxcSA1u1xpu5WqJKy8nsh9jYEysQrxUKe8Qw3TsA13cqmisQoRT4MLf9djWf291UijvQDVqKk9S2oy",
  "key36": "2mWJvCdALDXF5ia766iidJdkArqHDkKHGPzS6qMUdVeyFSYAe1rCJqgdbFxpkz4uHXW1RAqubn5wLuPcZ71cdzwb",
  "key37": "ZjpED8r21yxiMAwHR1GuQ5mf8QY9VzG3u5tZ6takMAAdzyq1Vbohjw7YTqsae9P771vf16PuY7kuze67KuWKnjD"
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
