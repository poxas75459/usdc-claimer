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
    "BAveQedy9HUSDWDgE7ZcakT6ngwkDcPUEHNufqfavyQky5rDboNAbsdfQ1JwfSQmKgV8LZYJyHfYKGiwJZ2X79S"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QGxH3jUXkM5CmSihukhNnTK33QrUYvmj9oZjnmu1eCuWsh81V9wC2seJxvwRT9iW7F9rcLsw2s3QsNeP4Hw6pWk",
  "key1": "Zj1MU3ALcPS2mkQsFiTPYqGoCzHSjdf4m2N8mvgdtbAu63tRuyfJqjKAYAqemnURT43PuNjdq99XgzgtEgFPXcN",
  "key2": "21QgmM6gJwZgHBWhcL3kbwoFMNgxp5C5mZuyBWvdea7rEotskAHx3byN1R1u1v256iqDoXAbGLy5VtiV5QUVvJyJ",
  "key3": "FAdiV9zo2z75v7Qrm7kNiPx2NL4yU6zKx8f9ij25SYhfPqSNUZwpLkh1WdXA2gNPqCHm7Kx6qR1zn3YkAhMuCLv",
  "key4": "57XXT8KQVSfhSzNDTSCvNJvN7SsPWZor63U7zBZGTrDQYAohKDFgggWG1NSNQTL6brSp5EpvFsynVi1P2bDUwrRB",
  "key5": "3eKMcGAuS4GEhTwqn1aqw6ofhBjcBLn1bz2E4DKu8MtPnDYfVyyww6vPRB7rcvVrkPUZxxE2tz9kxGWkxQZkrebb",
  "key6": "2kTiMSYkNDGgqh9JSNF2eQchSZNwJgk4LyFSnBoirRnnSDUtNAwqN3w5n6hyQ35vBQjAaMAQopWHAQQD9FotjKKY",
  "key7": "DbacwFvXxrCrJ4hp4Qqwzr6wdG51r9tjt68Wze291B8fhFspMJKQHprD5rACkafLxKvDfDZnAUXLS8r1Kj8ZZAc",
  "key8": "2ke8zNbjH5mMz7drU9yRPhJ78mAg1YKyo2yUs13Q1PZJ3X2irPERxj8TwBQNobk8unUS51Hp4zBdEBvBcHH6sWRy",
  "key9": "3L3UHcRdWHpNYBo1n3yWy3UgWeyVGXP2MMK5xt5qd2owbGScNFrsPeeErq7a9mpToZVsj2kuq1rRtt45sbZDiQi1",
  "key10": "ZLapLfzcRPw4yx7BddS3EowNjHr4s2wvs2c19DwDdSFuUZSEccYfVKXLu3oSXewXCxPAXTSmhFPn3uoP6VGBVK1",
  "key11": "5TuwzZ8YhmZCCgPwMfZkD9x21EsJkgCpybRAeAN1Do7VEfJrPaQvZZ7r2QvrHor2JWfCE8ZX2c92fD4Cd4KRXEk7",
  "key12": "oWmGoxh76U8wtm23cPYTN7jUueiLmTad9YnsVaFF2Dbzn44kNwwBd2dEN8qda5JFAZkGEj9uHQRwW5uFxS1P86u",
  "key13": "5N5SF2hotuSXhcsdPi8b16nwXeboi8R3mP7YbgdoYpgRbpg6ocjpBd2wn9TVWrs4tgfqkwxJig8MQZZw3Z5HwXRk",
  "key14": "uqo25Yd427tDUPT8nz4eTGMLm4z6DaLd1LWQpzmkdwbpWQHhKNwsw2My6W4WCgNmK2D5oQXSb3mhig1qiPkfX5Z",
  "key15": "3XPwHRj2cNxr73c56yNrjRFu8ndmGS281rNhVUMA6q5vbepwAgQzYuHMUsvbGHSycNferi8gPFfz8PHyJdLJjPcD",
  "key16": "2qEaeg5N2xFof13WjAxanUBZT8Ld6SP1dCrit9U7dytfZrhAEX6oxyKH4g6NSw83EmcmfyyWPNBBo3iwBX8To7h6",
  "key17": "4aJyBFMLnig18XK85yPsLZZgEgV9PDddnbMui6iaeyss58rtsh2JpkLPi8TjVs6pCyCoHjWPi5n3NiRvaaqDUjF8",
  "key18": "2B2jUvHrmWAEG5R4ZDEXmKYh95BxmEmSAHAMTm5rf742rKZdnUBHAzzMENpwyKT8SX381KFT86ej7XzSqZ5shjW8",
  "key19": "kCAVT2oCVjvmXC9cvknK4W7uT38VGe658rRfdpVqMKT3SWQxMCXSwieDuRxriovGJFYY9P5synQsBrGQsWbwYLn",
  "key20": "NegxGLsZJtzzk9fmC7zQQRjjiGaD9nvn4L92n9TgmffK7jzd1Y4SWdgQwnz4AJhHnNsKLSSFUwnMuk2UxjiLom2",
  "key21": "58DiT2h4qWD56RzSRfG3eGBUQUjNgpXaQQCVQLogXUw8oyX9sAJVArDgbcGfFf3Xw733Hc37AqAkkRFJgjNaaBUY",
  "key22": "2PCUYcatwMpk3fVodyfR8shMPSfNJVkSXV1kaaT1qHjRTAeAUv2a7TGw6zp1znzhfjX2YeNq5i8sVAKVvJVekaP1",
  "key23": "2MFdT6EaQE7uxR1vy2N7oXHu6D2N6RhQKdMVcpqv6PBYLJa3arregm4u5vZqHzX7J1SoZebMPpjjUnxYXL4ze9Rh",
  "key24": "rVY76MN6F7FfJPaerxpjGo69ZVZ1vAuCCdTA75m6knjSi3oe8xrGh5vtsaspV1ZgQGjjCQ5YafFiB3M4gVpKDNG",
  "key25": "3jXdSVoTKk3RuMmP3KLPWnBnoq2f4DW8utMNCroqk5fkKJwLq3WiMDt2sKWg2pBQ3bmdkHim7BP5jJKyT7q7BbtM"
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
