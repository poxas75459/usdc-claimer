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
    "aNTuwEcwUs7LrgTBCR71PXiTd6mzLSDKcTmBGjLRcnF8Lfd9eT9U9VgtyWoKHLwUUPfJ3A8NxoomRJudCn2GoeN"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jUgQEsPive85rFmY5zjRdC8qaTTMHYo9EML9HWYHWsijn7BnaM8oqhBrUzKCFuFxztrpFDwBxWKuoJvBEGEXD7Q",
  "key1": "2z6JhniZXs6dy58vLevLm3Rb45ceAja77jxcZJ8JD6WsyhaF8yb51r1HuaTHPFqspeYxR4MUJ6nMCoNkK4DVPQVa",
  "key2": "3YHf4DN1J2rDttb6iAjdXAcCJzeuxbnxeJMMWtcHmA2q3pB1kYrFP6qeu592CsZysFhEQnTCwpFdS8Pboh2jug23",
  "key3": "5Bs86MA3gP7p5NidzmcuJEXxMqwUAWRNC3hU8pAVbYZapvA4SjnxPQCCHRrbiG8N1TghepNPnVQu7TNhwQFwEQbH",
  "key4": "3yXC4xPPPoU9iNLKxugfFD5L5Sromqwd26DLZaKWBYyqvx33PK5jmxHcWxd1qWawBwxxySTiJ9oHZi2agPdgBKxH",
  "key5": "2p41FdkKxUw3K4VwdNno4Vd9Y3f4DdA8yz6mVvnhLcj3b5E4PpDc5kMpe6aCWSqDnGUjdrkJe4zK9rCFUbwWLgDf",
  "key6": "2CmTPq39zTqUoAU52kYLPQBKEfL6952C3EtUiMwECacpUWo6PLAL19Lfy9jDqWfBbXXMhJA9dqVwGf76eFGi6zZz",
  "key7": "2NKGmDjNyXTvTynP8e3M226HHBKuXQ1FZ93Rv3tXFZGrPe3MCdaaHHSSxz6yB2w2g9rXkZVD2HPdZieTQ8Fndp6z",
  "key8": "4opZkZCVRdqfoNmZNvuSWMEk6Df885eFzVkrcDBQkzzP7yjQEq3PxKfgJKKo4vP9jekkSmDDcu4wPBVTtVxXisHD",
  "key9": "3qLihyhaTH8kk7MbzvNjktEv77Psh1tWmbfhcCFzXRZLoJthho4F4LucZ1TXdbAcc52PBQwBepPnaD1SD9PAMJgP",
  "key10": "T5C9wtLAt8AYC8gEDB8eWLPoPYLdGWYLVovGpueiErqmuqsegrqXMc2pSLeXq85Go7xx6P8izP6EW8TKaK8FaDy",
  "key11": "57kUh34qr43mZNDuan1AyRre7qztCDj8GpJpzuBtTLtVKUnfTqowVnCNMhf82CBXG7kgx6R9mm7jVVzN6rXz9Cow",
  "key12": "2iR9h9kJzmGbewhKmxzv3RgUwQ2NBpa78rsZhrJkMMieNfLewKwu3KvXVU6fSphYtmFcXLtEsMLANyaRmUVCEynD",
  "key13": "3riMTCxN2Gj9CEbkgfZ6PMagDdKi16UCx4E5g6zgin5PJYUH9HiJyZLmVGLM9gt9w44XJax7jMH75dbKHzDUWh5i",
  "key14": "2mgEh9HC4NGRaunS2H2FtCj13LACLkFhVkSCsAsgi5yaXDJ9feLSUQt5SEwUPtQwirFfJrw3iMBfzhvrc2egPrQa",
  "key15": "4LfiSi6X8DadVAR7PTD94UH3bcY2A9jjs4aWoHUfUCfmDCRPrdEi8MxgymNJKUkt2yBhAHiVK3WTg6Kfe7Yptsny",
  "key16": "2bZk4tG2KnNo7hAsUgkdsJr1fjf1FiF7BpK2NPiUC754RjYou7NNi9obugQwAwsNsLRs9bMUKQEb6KEbHyhyiPHp",
  "key17": "3XowVphezcERHyeuwdVegvBBRmFt53GG7SCnGUHTB8EtYhzBDawDSZ8HVwXewUTFg54GTgFZCXqLX3QnnXE4Xc8x",
  "key18": "27Qkv9yM1JqnxB8g7qX8txS4aVQ5xAmXxBLmGiynhJN4hPnSJLvVRtA3ZsaXpuANYtpKi2KgvEXhSWxQ889PZbjA",
  "key19": "2XYCPrdDjCaz9L4WRXGGow48U5nrdZHPoPaUtirUog44HDhCucmwYjPG7raYajh75VEjgFzXAHevDPgkBTZTgJZx",
  "key20": "uBTUQT88dFeDe3V3EC4JHXShCn5LyFPoQvTfTahs3AvdgN8FGhTbvTuJvWgQTLXroTHN8Pk4J3WdkesV41kUPRb",
  "key21": "nBfkAV8McQdWgJbVwycGaACnMZJ4Buy333TVNThqKCUugoUgxERipkysjxRCugHLoXf71Gz7P78muovUn2v1wDK",
  "key22": "cs3YBqQfHkjXDbF1of7ueS26DGbuQFEQjpLMiAmTs2eb56NuUAkJQRjsEJwcngy24izAFFACf7nvtZJ3iV5okhk",
  "key23": "4ZXNm6gmTZjtAYNVdgRQ83QEbs2SYbEY3JYgv889pJuzVfxrtXRPEhE8t1WdcYyF44WiDJEmwNpY9d5FuTc9cg6X",
  "key24": "DfLUokriDDZxqXogCPHYhQQSg6SL2tALsunSHkKVwccSiA3n1HqdAMDRBUku9kjNDw3KEda5wDZXBzoGGM9unrZ",
  "key25": "5w6UMN9KoDQEYWzJ3eQY9bMCysBJkQ81yHMbA1i5yyaB3D1PaVy71sKAZgP64Z342XpXr97XyMiRTZ9nqLg8fLms",
  "key26": "4xzA8A4z4gNTXFCJohedwCpRP9fFQDB6RRmAhe9SJ8miUv3oADS947VzKfKG5cCBnXc2f9rJ7kyz2nsWTno1vQz8",
  "key27": "3yBwzB1i3LT4Rrq8pPQsu9KpqYefebVkjsaPkQKvzvz8dbjw6QPNLk4L1uM1UAd58jutyeMT4xdRCWjUCgj3LnT2",
  "key28": "36Zf3YvHVL3DvVhVfdhZ4DkgtUCjWNsfkv7WQ35imWji1mKVAtqiRTZCLo9n6778yFrBf5SmEoFff6qvcuGd2NSm",
  "key29": "3MAbBbPHKQdYYyDzp63Bcg39XXybTVNzVoH7B3ndn6LcoNedgYjgKK77gW868MQWJsVvF9Jb54YdiUPR8621pMt3",
  "key30": "45Ky5ic9ANPARA6BLLooAWMNTHDc5wuuoXgHMu3gKNYdmKuGipsVnzEqayuyKiqXupvyobrCDAsEojbtaYdh2ArT",
  "key31": "3J3J7iiCB6zgBdyZc5A43VdhznPRRMEUkYjxnvTio9PYcHK2tXCdombbHXcJv3aoemJGRjWepn1dBzFmYKYG7xg8",
  "key32": "2AuUMrwc52dYqYoznpeMdcNiQ8kMQvvG5eLqt1GJgUgtmdvzTTNMfu3VvrZFbgrkQ6dcf9VtP8Sa6dZjh1PE9Xf8",
  "key33": "4fP5MmDtjcS7LAZkwmJfg4uNnMCqGxjSbQB1wY7ZzSBb79JiwcSUVo8bsjCkoEty2BBuBQkrQEVWrH2GbdeYF36V"
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
