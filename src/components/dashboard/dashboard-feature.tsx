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
    "5sjRtHrSBdAHbZYJhDmDN16MXB4Pf6SRpmTmnQ1cwS7eMnpZnkT4CvWHcPcUzHBCifiJGG64gjTdMJneh8SygiHh"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "T33DeLp4cBDp9jE8QJBU37FnhvdYpVR9EHtcFs9jY6h62iYytiYRzoSFLNxYUTrgfPM1LBvKAsbag29YLucZF3H",
  "key1": "4wVgm5g9PSdrtMU5vuv931zK9xfwSAptPPBKhBqHjodVgFsPRhyup5Xdf6irC7jq4hWHTbsaFqPucFvnivB8XnaT",
  "key2": "2kLKHhUWFQdbohaD3ZKmihogYhtDNbchmyw9qi2iE6YX1DLzTShSTsEhJyDr93tCcmNJ36yhBi9XniRscJyiLD1C",
  "key3": "5BqCC8nArDNDb5KQFzEC3zitYZWgmX8A2Q2ZdZMazESfX8g3nfZkjZNeAnauDQp1nBmz1fzzXZBpx8J8GWrW1mW5",
  "key4": "5mD23Y4UXRGwBuSZxBrnytfmqAGfUcgVKfmfXowoav9RPLyHSY4tMx2n5AbagyEjYZTBhGFyvYLrX36BezC7gnzk",
  "key5": "UM2qMcu6HySBpn2uLnaVCW1BQHg5cEyBPVcLkgh7UHYU1n5fRnzDqV9rQdj3wfh57rhzBzUdykTCauzXmZ4AWqM",
  "key6": "52jsw6E1KSinFbx2RCo21L6HqjcNHL93JWEPFGA3yrdoquegE2JFpzmS6qv2y6TC3Nz88gqnQafBUinwo19pNNtr",
  "key7": "5GYga3zE1o4LisPUdwxpx6r1eNkycqzBFv1bUrBkBBsngHDb9H6pygUWCkGngRySE6cjaw2aDHwfid4n97Avk3b6",
  "key8": "4RRdnNEqX5nN691QSdT4Deq9csuNBwYDGkWZGDLWvU1wNYqonAYKdYXFqbP7x6jX6dXJmxvb4JaoGjKQLkK71uPt",
  "key9": "5ty1WQheBHkErw7ubQ2u4RXkBtULE5SwcJf5xdADdaniiYAVAqdm3LZ9MW9n1oKrQPZ3Ps8jhNiRA7qtVycyFoUV",
  "key10": "5HTWa8hL6Ct7PqXicWiSpBXPRhdhKLqFtFekkTHWMXssZQ5TWAoKr6QyrgNNCZTXy2DHcRb1Mj8PcDRikCHK2zXw",
  "key11": "2i4vmexUG9JQsE1xzFiW8GpzJhM5s5LpXafk3Zb896BxLmS3oThBcRaWTwxyWMiDTcqLAsuVZeBNuRjHnVChHPxL",
  "key12": "Nvci4nshGjyYUkKu1b6h7zG6Xkk4CUPkDvSh3zvCAgarG6jUvoEDFBTBnhnLyPiokuVt7vvrdsVbiJ8Qhxupe8q",
  "key13": "4ZzsZ4MKG4s3cwS8euJMetEePWST7RKXZeofG3uscaMzLaPD9xRXgD9rkm7Mth52texsU9QyXkMqkii3t8gRmGxd",
  "key14": "4dxGfDUtAFQcRfynCmsNLufE5bDnyv36YhBsJP2bjrvPwCt5fmcU9unfX4BVCyEXpJZ1Lfp6HKhBiiyTT8VFPBBJ",
  "key15": "3iyvAChiDYse31Vzg8pshML8gCEhqjWEdEsEFkQi16cchTBYP459k96XiNypAkujisqRJSdzWt72D9sYAD7WapPv",
  "key16": "5sSrD3Qax11jRm4zGCWJXgfKpbKpbdHV6bBxBqbJitxU6n94jDegXaoLtrsWA2iqAPhgj6xihcBUJpvNjVWX47xW",
  "key17": "2SNAPd7kwttdCi4dzJbjkYZDM93HGCDrjxPhdqrvmM7z2AXry8yFJaEstfWe8fjTmZX1kUQ992xJSZRNdfGUQYcd",
  "key18": "4MhwHRciMTrxzG4gvqKrNcBhqF2rryUMp4oH3EzWvNsSj4SaHeD4zEV3N3mf2veeEnmEcw3JGQarufhfzTam6VoC",
  "key19": "34iU1xt79W6ngrLtxTyegLmLZMn4ksJfWjTyHj8HxXaNFcYC7DiduX5LaB9XEqGXQ7fpa15YKunT2cy3ZC9DPm32",
  "key20": "4hUNJRJobQgnCrezHJ1Cj8Bqz7cE2GkiY93uRAkuvtEj7STGxFcJoYZPvwTCbGo8A27VUxF2dRRzHCWcYD6Li6w4",
  "key21": "2YTsU45AJDPf8CGmh4fbZyVKT1RAREsRmmyUd8hGUwACEPpv1Qymaoj2FFbRbZeYcYLU5icMcKkQ7i2RCFtWzLdq",
  "key22": "4yxfWt2PPgStru9CfRdZ5djpnnEcCri8XPyWdvWZTG3R652SafVfUPEmaVBqwq3ecLetPZFuztStNp672XH5aa9T",
  "key23": "Uppt8AJdQGAqgc1j3e8gyBnfbedi2WWKYVNVLMZCquXkJqTqCBiAQfk4tTH19SZrA8KrCVghtjCC2kut7CbvEyo",
  "key24": "52CC8DycgocXhnu3qqULZhm4ECs19BirzEGv2DbrcnrmBHPVDLvNnCTQ12YNLMThLma5FBGL5iv9Aa8NNJ7x3ZgL",
  "key25": "3oKRwCnZ5wie9GpipJADoGsvMuqzsKJ7FCMqdQJW1ir4oxo3kUqPhe5CDYHbhHseEnQ3c6UQtGrbngukK8PHFgEt",
  "key26": "54dg6s3GyTo7HorNcVBS6QG44cCdsaafbeLkVLFMcjLBUgufdhYG4vJfmbSt1Bgqzr6MJn6iReKfq6YUB2rE4yLB",
  "key27": "4wDgyxhwmqDst2Vbn8nC8Dy8kEL8wF1crksy6JLxgbh5VgCC7Kp9JEY6G3hojJQ6q43uDzaiUFgia1iLcZiCZ6tA",
  "key28": "4k5Bsu7kxJs47bLJAPwPFV9PfiPyV6AMW82RtXCuZSR69HFrXJejDpWv8YKHJsf9v8oAAP3LBTqVm1sbFaV9ETT2",
  "key29": "4QLN3xunnPcn3LL6phfrWdsas9dvQNHMf8sM4usn4DjgirodPkfAnhka9WzpM8UXk2TLxFu1niC5KkDLo9DBmSD1",
  "key30": "JK9X2x5n77z4Dgs5f2TSmZtvs3TsCfv2qZyUAYaCrCRtfavEAYVCGvDWyNmP28iHzP9fQ8Ps7V1fcyeX3zC1X3L",
  "key31": "3wUBQZEsUh7ZoDM8tFaYgH66SLLQ5vQU1yUEh2bRK5CJ5xD25MZBc6bTa5EqXHeX6Qmh5hyraJJHdoSrmkjKmiFP",
  "key32": "3kYPhh6bvBtfCWop2g8gKnrTSmschoMpVFZQij9QNr4KFPonGqMhnRFts3t4amfbhkp1VeqwvhK2AnQPaPZE37uN",
  "key33": "rY1BGq4QREPSbpgBXGuk875jJY45Hn6uts6iyy91py2BE8KUroNUvdQ4YGHR827g341miaUCVWhAj2QRsR1K7n9",
  "key34": "3NizxbV1mKkHm3CmYyxQ6zMjuBvys37LVos4cXYsSX7fdhSGmDt7onq8zLSL31RHBxufUTsSEvvZAM6vojTTmBZ7"
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
