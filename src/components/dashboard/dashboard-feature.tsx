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
    "3uYPUEBop3DHbAU7zZYjH9gf8MBMPkye4RdwXBTViCaishk4MmkHe3qstREkVCiz5CH4anGB7Mqwjin3DPY6UFCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A6mzDjWNEZs1Xok9QacCSgc7NuYV6T3YEDEvPLh53KznGmAmh9GwT4fniixjEC3VkUzeoAvsVCik1ZipjLcYvTr",
  "key1": "2rYCMEUsZaUiSBmg2TwHYQHrjskq2vWZU16NhySTieHXGUTAgbYqNQgMxRmA9e6VS2UfADdLV6TNu5BthP1wWmSE",
  "key2": "2kxmL18S31LVzqG7BfiTGRMWvf2YudiSMU94HS4LjaTmUFgLPsEH3hVZ5RmvLPuyQtV372ggeJxqZFfm5sju1YwB",
  "key3": "4Voj6Ge5uUWaxthFQbohVPNjUqGy9hsjBH7rh6bxdRQsUgz47SJrSAD82gGmDr5xvemCx99njYbJQt9XhWS334bU",
  "key4": "48wKwDLG5mEYSaxtN99sozuEWhsGEFV9iVs47xGNTrv1eJAofNdXuovkce8cisXcm7bUoJ5cSbGHjcJyNEmXqoY4",
  "key5": "3mi4kkp4tir7sjW8uuxTnP9HSKe9rDd3Y8LrY5FRgZtSgfCDo54PDRFsomUca65EgfU7SsCxWu9udx7qh2dFDuGg",
  "key6": "jkXNpXPE1F1eovJF2k8tkXKYiY2CUhWFT7B2okL3rKBbY6ViXWxxgV7AeydvbU7dsUFZ7312VNGgjHXHUncVG2T",
  "key7": "2bWXQjtQSQHxfLaBpxYorKfPQDJshyTTj21pfnyToBUAYKTDuiadRcvwCFJ5MHMzThWqSDav18kiJqWtr8PGrCge",
  "key8": "5FcvKPK9YZQKESvBM15xhWw7yYaQYAi2fNxd3q8MZaunKJbvjvJFJcNPXUC7oV3BgxTUJjcqBrgTpmB41w2TN6PU",
  "key9": "fkKjogBqogzqUzLCa8a1EDfhpm5HmB8F9GQhGRBzDfgh6dEKMMN49jaoec8YG3jcKd2sDQR4Gn9NnoBm1M3AHrn",
  "key10": "EQVubYfPxqR1u7k7u9Hip9yDPP94WKey4amWGLZYTjur42cy6i9SWYD2qkHYj32ckToSSpCVx9xysaxWiq1Pwtt",
  "key11": "36dBPWDhwdARDNTobw1a8kZU1Uyog2d2aBfgpGG1pgG4qqVvFSEvio3wu4sxaVGeWac9aXceHXKPW5q42NogCvx9",
  "key12": "41WPKm8CGRNFdNYFLckK8CQjvrmZqLm9UkXifjFeET785EutMTKLKzpRfwKCxvi7yAjDkATb5qRSdgMim392N26Q",
  "key13": "2msSAHLXihvtaX8tpTDFuTUAV7rLzMC5y1ZUKaTUyX2ezAuLAcr26o6QLrxxydwfg3tbRNmUv7vtxumhxQNAwAQH",
  "key14": "u2cwbeDexoxXhGPWu7oXB8L2s1xFLQkrhYReYjCcYvWzxUfNUXwdkcPEsMd3zbU4aAF2w7dq2VuAFjBCkmcLhtz",
  "key15": "628jaoQ9e3SGWdhAqBF37xWVnfbyfL7Kbd8x9RSBGvmk2CvDdbz6AqvxH6FzVDHv8bSdWtvvJDu2YtsLC7UTb3ZN",
  "key16": "5ZpFK7dxjM8V8oqUMzv3bJXPaLvk9vG8f4iL96bZQh1K2YQStWuo2E9X5SpTLx8CBrT7pLeY26Vg1Po3q62TUkrK",
  "key17": "2zbSsmPmQsd2B5Pw8CvkJb8XjKu3A3ygrPMG2ojNtJuXGuTFTP4Lw4hqDRAkk2QMLjUSbE7DPFbhjMzSQXUMXqLR",
  "key18": "2feb6TFMJmewfikoVw3q16AcjFgqyJi2shojXwaS4gANR7voVL2hzVnnyH6D9D2Yr1sU85uUVZCyTDvz312LM9ff",
  "key19": "54AnDCauDDJjQRmWKvdsSVmhQ7mzSjWUNvvBaE2CyQ9kMWc5zeNY4mPq9hH1vVDfx2KXS8dc5a9PPqDQ5WUrZMrY",
  "key20": "5aM45LaQzjXmpRYoz88gLAbSAG4zfvHBnnfM1bjfesYwZeJmrqXNfcmb633Jah32odoKpVkSVQwT682wBKHMuKDd",
  "key21": "5CiwBb7FD5JubXoQRJieCrmpqVi3j9iMe6c94qQvqr9FJ1UCkXjHLBLQgMKUzF5TVhHUbcZvdPZBfnez6bUya723",
  "key22": "fvcUpwCLBVZxyxWHLwRuNCDYY9c5fQkSBpwrdPAyt8tjW4QpgpJ3Nf4RNwxsnkokbv5JVS8o5gjKCVNgo9WPY3q",
  "key23": "4QUALtaQ6qCn3ebPaSWpWa4iuEx4nmEHz1uRfSrxnHhfuKEfVJFX111RVyDqqownejrFToaZpsXDAbAHfEd45KL6",
  "key24": "56WJLE7zH68VBA4d4tGhEQp8NFv8p6BMA6SQpCe61rwph8mhzhsxkcCDobXZtFtZbq2tyQQ6QASoVJXM2mzv9w3",
  "key25": "KpZzwUvzzynu8GcqS8RREhJ7sGHa81tVDdn59qefDzuXfPrnGpQfyrfT6xsptjth4RyKW5mP77vLV5EFSKbLBHX",
  "key26": "3a5MWeV7MUCUqA7w1U95fn3vhgjy1sgEuVZMJwRUkcZdfxHniupnWR2baMzvLw8Yc2EdTTssBXgxT85o3JWGMwfu",
  "key27": "65N2pCrUMGH6A7rE5P1LQgvqsdBaxu7H8x8FrsDmK9SHzPTFEeYdmWSVpmoFTJwfvK1cGywJkVCW4gG5uDhJPodp",
  "key28": "5LjxbaBhwGu7waaLLjiyoLtM5T45rGUMhBoBfSpJcGeApU8bSaiqystz9sXnQLTYfyZ2kDGbEShPtJpgW54HvCUt",
  "key29": "3iBFs4NPuHRmb62987cd8LWY3fSamw24qjaMPuj4zfLQrej4DhLjeRxxyU7JLEqGL24b9qA1c8Ewz2kCXfvzxWJk",
  "key30": "3C26GzUTFYCoH1TG32Bbb5wEdgZ6ZJkU4ckbCotF2Ur49q4Nx8hP6gaJxqVkjB6wgkbHKzEstEULgs9ka7MMSUF1",
  "key31": "4AFdcyDFkJfKpZqjq43Y8kepoLheZ5qAr7HYU8eEYhPSbseQdQrogfraGDgpbhibqRXxkukcPKn8uthQGUNTEdNE",
  "key32": "5zCFWCcivtaA29y3HN3uYWB8t3Sry6cTvvj8113As2PEqk8qUt2hnTnyBYqmdYcq1CgXZGbdaPykQzBqYGJg9Mjd",
  "key33": "4CE7KixApriR8r9GxQ6XBtEuxpnH6UZyKsCbhD3KBuvxd5bBPeJZNiZ7JRUM8JLzkKXcnHGBdzKMvcPiA5uty4f5",
  "key34": "2j2Mcdei3tC1grNtCD2GTSViRUitvjxygwtkuSngsN1ovynPu75KVZsfbwJsG1byGzCLmFuQVMUKKNenU1J38qh5",
  "key35": "3849oq49Qo6dX3L4tKyQ3KoUsAqWggYCjattYUN8KDaPbYjwezVzgcUKt4qhRipAn4YuPe56DH5NDU1F9tjdn8Yz",
  "key36": "3ioCJhxGLPQQNbGLME1W6Kn24dDaP2nZ6nF3fMNudqDqfgpmWbYmmvSW2wbUgn2Q9iUttjkaYZ6YkwmbSNXtFxaA",
  "key37": "3fHV5mRCh2aJsiE4PHwm4uje7bRrfBaCgat5cEPahhXSJrkfP9ynhzQuf4uBsNFVBMg2E8sCX1SS5WgrYxmrD4oo",
  "key38": "3Ms5vaQk3MvQxzWdZpUjQMVCa7XUPB796MLrSecqfsA28fw5ksrHZRjyPaDtKtkmGidfsoutUh8vfgXpWCPnNux6",
  "key39": "5Jc6NPx5KB5ZnLmxhMRvo3k5c7GWB3ePcx5TBW29kuLci5wPPtCMyFFz6YVzudVkUUpqkmpfxUiwgqxbBsDBHr8V",
  "key40": "FrGGk9pWx5ekaX1AyJM2JkSZfasJrWjjn2yhWDQPQirLMB9CnbSLUCwvbSJAPmG3cYLFTHesCKAD3mNMqNydVuN",
  "key41": "599q5M8jrdpa2wMAWigTQT9Yr55f7MnGr289WMzg3WLHxBYKCUbxMcWXyvYwkhhxy3F42eP9HMMVBFdMD54xNwwZ",
  "key42": "523dDWSDJVEv17RR5zcfRgMyxhocTatEfNj489BY8RqQjXLnoyVsG8kyYwsaJP68uarGHr2Y2iQBWD9pj9k1a3RT",
  "key43": "4rDXBxPSMGv4Miv76J3Tuk5Q8Uo3Pmt8GyFmN7Vv4TMJC9syc4UmeuzBTB7bDErrbJX53vqTd1Pe41i84ttQdE9",
  "key44": "4AmYkYVroWQRBho7PU4vf8B5QRYZsonSz1bJutAS9LvGSNQsyoSd59qtVarL2dTRWQjASSfGsKAqyxzdLZmEAWcT",
  "key45": "5F4YhqPa3iiDQS6srtN9Vexnthtpwpqr2zWEPEs2LgP4uMbrPBCko3Zi6BpynYWkCAkMZJWPex1TMdAjRtSKQgei",
  "key46": "4deabSzcZLKkdcJNfe2putuQyhUxXXDeMBwxa2uMn7iAmDL94Q95x9HtGjVDPgBaggnZAq4etz6CiNW1eyNggfB5",
  "key47": "2FNWP15Z7fKKhr1tysxcoUK2SY8xdyLggc77YK486gZSBr4E4Qz76XAsvL73gCCWeJzkruQcgR6CWQbXTqsi1nG",
  "key48": "32gjPfMJRyL2Rf9c2g2BzQR8eeduENMqc6Z6Co17rVMTJVRbStkJLq965sTwEW6JGmeipZ6THLgpwN5zU4uJFiSe"
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
