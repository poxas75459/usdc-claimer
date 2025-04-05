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
    "59Za8FigWyUbYHUcHTHV2aNwq9VoGyHDMxLJDnotq9QcapYY2TtpvPsj6N7Zu3RoeWbbckXYNc1dbu2Fu2Tg12nU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4vPFsSFc24MZ9w1w4XiBYNdbncPqfEx8Tc6kBmnK1cjr7svLEAKQb9dV9tc52vardwZcHZTiTaTY6S1jNroEMVZe",
  "key1": "m9jMnxd3msqhMDgazx4yc7Gixhi1oWveLF88ZVA9snQpjUnjH3nzMDXkazSPBkAEoktMD8MBLN4se8MfLT28CAK",
  "key2": "3XDMyKxsz6VxZGET1Ki3rPLpUnXjjyFNcKXXUENUrDTiifQSM1TcegTjmah86EcmHc2X4JqsZWrinyZvUrxtz4wh",
  "key3": "5YqbjW8bMQ9YtMbocz3B9NW4Pmy8k8QPDrLbxuLYiKvoZQYfHAzyZD1yNCRe5gj5H1nzU8TAJCNkrhrRkgmuWffu",
  "key4": "4pgFZkW4JdB8QP8Ug1uDn48Df2kkwWpieDNwSQnSmnvnFgipY12pqE2U6evHAjAvmz2giHVddE2u52SB6C5NCgqv",
  "key5": "57hLfAHUHT23xxPZhkJSwY7dnoWGXr3cauhPxW6mYvCyqJ9mTFZdMeP3fKHeqXPZZJUPYEMWgjY9Ct5PDjTE6eHy",
  "key6": "gEjeJ5kKDWAGgFWiQM4cgxqZ5wsNyh6uiMfNg7bTv3dwhh5GAbTTT7ptdskPEAeA4H4rLBx1Dy7oqL8HSePLs1Y",
  "key7": "5e1KBUgRY8bYSVXoebhzcfjMqJbjfSq9fAvhwLSfd7VzBcMi5A17vQV7oCnhYHDjS6e51VWZSHUrvfxLGGUnHLux",
  "key8": "38GGLVriTrTcd3gavtipgk2LqL16ff79AASFatFdXkELBXjcx24Z4r23DUDAH4gPMdTx9554i6bZD73XKg7KJCvg",
  "key9": "ogcShQMAnFdpzDMjuTZx4sMPyCKVpM3swh583AuRb4yb8eq8NmcGMddiSbpWR5BD7TqvgDnzhdRqjwHeDQJ548c",
  "key10": "5EKZ3Sz8goBUBDnh2sX1PxWK5Buk7iPVbZgLsLoi3QjzV6MozRjnZQKWwNYjnoxnt5fGJNZgvFkVL8T6Yu4fTgsx",
  "key11": "LBGmE9hB2koNXfbEfhdpeUFoFV5CC4H5WsaN8gh5GHc39is8VFvy8wycDDUXd7dKkQu9ovAizMHik7hf7t9bfW2",
  "key12": "3ggC7rDoUuqwyVu4QB9HbBiGJgxm6dbL7TX3GwvRqZaeF58BnQxJNvL3e7so35zWRjCHrrAEY7JGPYB6Gcw4rTzY",
  "key13": "RRyPVpNDJ9uSTV36e9mu5bNncFNm2BqgFJrkKu5q6XLsFGXxiV33B2v7TQfSGdER4N5xkFWQRbRUBupkbJa6XSZ",
  "key14": "3SV3tRzBeJNjThuMmJu3FeoDVBezN3NUDpzmnMpKaK1ngf8W1j9qHauUJ1ZQfobsfLsyHYGEw6r5euG9oqH1vYu3",
  "key15": "2d36iCYbZoditHqrVLpgsmjogEVmWTWa7cGaq7rQQVB1YMRhoUD5pXkTyEKSouyTjJMzHUnXDEjx1x9RkydQQmsq",
  "key16": "4UbKyvau9Remz9N6B9s6p7ipqXfi5Bbz7EEFZ73sQwtpB1zokygsEoXMBxyD3FsPeiBnKziPBjAaR2ZsLvfCVha5",
  "key17": "3j2aavB7N3pPxtLhdQqQhwmkYnajxirGufj8KtXCFqbNJZNmhUkBauUASBRbNMFYvhg5u9aJrpfc2nu5RcsyccCN",
  "key18": "4vh7gEML2jkmZsWp59HqSEiEF5PmXR1qtRZUSkapY1SHaesPbXQQXpxvvT5V6oAcJEFMyvE797HgdVJaJmPMiZo6",
  "key19": "5Q3e2X5zS6vushfUqETFKw67ctduZr298KyLU6LeLjMURsAiq5KQ3gayvNzd4vzkWtsMP7qyht4uSfjjVCyWh5Nw",
  "key20": "iJugvFxLFoE4ahSDSajvNE68RrfgfQiGVCZRykPnKYUDczsvTh4dpNstyKZ4MXvr9ZXSa5SVFDiBZ1kcABXseRb",
  "key21": "4Ybh3b3kXXMGtP7W1uF8s7F1PEANkoYyxvdFUkGL8eKmAoTo9VLaQCrwtRS52iN79LoXDxG5Cf29RspuHYAdLy77",
  "key22": "5qVmJhUdnLVTTzKf97tJEnxcY1GMvjsBZ8qDPZwr1PPtcnqg8wY8k9FT6nhRXdhk3wJWiwWqAUEXEUhPoWZHjdKi",
  "key23": "5agTiT2PqopB5nXYYDy1N516eLgZg3NfDqc8qXkenYCU2YW6sYHLhXKkp9MVPSjxWdoyUVnXH7gzUJUN8zfo9sqG",
  "key24": "2G34yMetGppENnVX5rjT7b49Y9W5WAhjHfaAyS5LLs25M9TjtSyHmHGDLjUvzqmvi1x5fnuegqLNXUxyE4TK3Nj6",
  "key25": "2QeB2dymmkdcGBpQmTRbtQTUANhgTB4RiBY8NgKsuDB4yUQRykag7SweCTSfCJa3RCU8UAgYvLDkHQTRUoSaZ6mG",
  "key26": "2PqKUgqdikWKCM2H2qMgou6YRHC7QPth6c3cfwpzmhsjWUwdEC3JTbGvAXa1u5QWck6B6hMiJH6arqVEQSvKLfxT",
  "key27": "48XY36NTuuZ2QwTwuYGbDqZof36Q4ndU15s3AP2iqLCRGQprATg8hhTJPvpifivKMqSpuX5Usxe8iLaZPDXVYiMn",
  "key28": "5veeqQgywuVm7s16kvXQfcccoKgMF9oUn8yBdNsrtgn3YiBr1p2hmzutFyBo1kSYbj967meV4jfFwFn2opdzmt5v",
  "key29": "4ZvBVRzpqki7dRuPREgUaWCTzNEKnZ732sa7B82RwrypukXBLdrNBqztQTCmrzicuochgkHcczoSuqYLv7fPV5QN",
  "key30": "3Apy28fAHYYKP7dp7AJ1wzY4UBsJDr8RLhLBEaEizgRYmGSYYBjJmnZ8zXp6rMRP2FudbeLSuNfqnSnCRPqbHmJa",
  "key31": "2GZxTJneYb4os4gE4EaHta6s1bEKyL7pgwozpa7FiA9NBynz8RtCvQwi4CHuLdmCcH9rYCpoX22QRLRgN5xqshmG",
  "key32": "4owHgvJ7GSFbPonbqsPKxqRwnUXYvP1sVW9Pxvb2rsPcmNwmHf6Va1yBMLfaVSU9cNmY1w91JNbaDbURNrAWaiuf",
  "key33": "3ym5aYgbrrYHgLhP7ajWRXRk48xyMRGDmBntEMzxNCtkm8ucXFk52Yz6Fwc6NrnK57XD9opHNgxxrGheACrou5yp",
  "key34": "5vb7sGL8rkCJhkKSrnuiXVdsCD71A4BTYgknVuBcgkMjrAnTMPhptTVKEtp5ryRKE812WJ52Gvemg2iXP6xVtbe1",
  "key35": "guusPcbFbvC4yrLtTe9iAhBUVFefcrwP1VTrQpiyMxGStdmvf9xxXPu3bTprKxgMoHPrdBtRji3yRcU1FHFtSBy",
  "key36": "VJybJgi9K53tAUwDHKAWRwBvSAJsrMNdq5i432dbYjwYyBVs58HPhA1Cm4FribS3tpGEaKZaHUZFfkRZd34pB5t",
  "key37": "21RezuwFduP3VLiZh4TrK2a6UdiBzrwznfXfzUPsjvc8VHWWJNnYPnwMCdbVxioqHQTchciUQH4cX1D6BeqPAJbq",
  "key38": "2JE1ctsFNQYnTmVaTY7FbbcjkohivQ2CkGNcZBE3giDkiMYr9DAhKqGVNkcmiUpA5iHzQcvNj81LsU46nv4b6Rg6",
  "key39": "2dde99rZXFHFpxhV8SPKTCA5tENFupDHb2NS1FzV9Mw8gK5cC7aBZj56yv55vdHSGP34bxmfSLNBumdZ9LoxkyzJ",
  "key40": "5gRKQypT35n6mqkHutuo4kqFovSWNiRYfKykr3kLzBsUJ3GgtN9QNKXSDbMiymnk5kfvZzEnVKGnWQosDtGG7XmB",
  "key41": "3BW9NmEVsJ9fNj2ti3aw77oZireaUW3QM2WMGi5TxDZqqdf2TaQWKFYytvsJqMYJoRVWgn1AUyvLpb5zpKVvgePC",
  "key42": "obaqVWUky2Mvyv11gqRFT36JWiANe2gVv36KesANzA3yyTJsQUPuXs6hWEq81nVAGyPESDuQzC2Fcsnr1bUmTr6",
  "key43": "2ra7FgWGSyjTFL6fu8Zd3vCYGStNZm55yXmYeT7qiSWMMTAhbVQqZLoRdPYg5wyigBv1XtLsgCVRJjHspbTbq5Dw",
  "key44": "qYawsQ3DnwJhTJCBcVxT2eg6JjA96cmwstuzCm15mU89KQArac6mFRA6y8GYY3Pz7BKj9ooFxtMUkwVwDRxGaxg",
  "key45": "21RnKskCDg7LFyZtdXWrbuAoM8gKPrZ6f25jf3TnAeeVXhuCiZbw3VytgVQiVQP3ux5xM9HseUTB7YiPFCFVDkEv",
  "key46": "hEBuShmhjPAVBFsH1x51PromWF3Qxb9ofvj7og16wyy7RvhdfJr4TjnhAvoJyedLKYt5BYmUkMd2kLRTP5Ech22",
  "key47": "4stdMXghTA1aeRomfZzui8bVES2rSpxDxhaA9RJjBMFKJENuaptQM458F4vZytc2nd74kCShDBAG7RND188FS8uw",
  "key48": "55Kcq3j3t5Zb9J1PiFdanq4CGkZXT83pppVMnDVwPJZecHc8CNeLxEmwfWau7mz9tAwibR2BXDFKVv5Rn4irCSgs"
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
