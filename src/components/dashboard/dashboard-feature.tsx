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
    "3V2BpMfxcKSNEEAqaHUCU4VmB2oMHR44z94kE7KsSGBYPhCiKG4t1bGM8eWXM5TgakQF4uUmP2SefTYwBbLfVuz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29bt2Up8MdQpmzjmBKsVKqeE6bscNteHr2ubXZk3aryjH9qDSttjkSZvWJoPYQdSVZ9oaZ5614LRp6GkzuWy5pzx",
  "key1": "2pAvtSrCGv1cFN58h9M5MV9wzHLtfHZcqaa2z4LrRRDgWv7dn3CupTgJuUT1kZMpsuhF5vmgYqQfYxuNDzWxDc4f",
  "key2": "4qwsADNtdU7jEpRNfrHFGp4j29P6QNbWUddBYRrXRvZDKNLboWF3zqaokbdrfFsXmNzwLirM5irBsDPTfYRJbpXm",
  "key3": "pEgvxZHx5F95FkPDwn1kJ5L3CMvwrbMgdB6yCL9o1o2EWd1nq3Q2yreTq3q2RVydDYEK7f9pi3AzRLPR6s5X19s",
  "key4": "veoBiU9ziB9YB7meqnNwj54smJNjkZxdBFm4SVfmXawymFEBmtzaz8TXznwTUDL5HfexEerzydwjS3W6mi8hx22",
  "key5": "5G2N8KQi23WQCzudWKvCtxJobfPY9nr3EbBS1jx9RBb25ZACS27fLBPB6d98F9LLN8i93eWCph8QaDftTNSa6i2i",
  "key6": "5AitAahWF3qzB7MfeHQ9SgXrcKf4Qz3sSTAr7z3fs47Q1S8xyKTm8NzhLWJhPp5sjxCaeHNSjFWwa3PQRF99NBJy",
  "key7": "5QkGsd71XwDAHMCGy1gVi7SSh3JjSyJz9Mza6iTvXDTBBnowEq2Bm8BXLQawWiC5GnPTFmKuMpeW2tXsQwkC8F7g",
  "key8": "5Ya2Lmz2579EEgD3qK3es3T2Lz9mvvjp8rwYi7qBcFw9WSaXiXu3ruduHqK6PAWSo3bzQ8i3qVR8NR7UsbxRpyNm",
  "key9": "3esQQ4qJS7wKs7rDzTtk3Yu6km4qMSioEw8EpFSXLR9Pw6KSgLNZWXdsCDJd3U4znvnnajysoaeAKvXZk6LUPAL1",
  "key10": "5szLudof1Nwst3mbsEUd1VghX4rAwVgkHHhPfP1xAHhE9CsQZzTEThMsqSXXsvXM3J8AvtcfwPm65m5YtQ8NnLYE",
  "key11": "cJnQmTfiff3mBAv1air7EgaMJpjrwHWTUzXkicaUeGLtnk18e3GkgUsy8DjfLAKW3C9F3ZhRA7m56BmwBRC3ryE",
  "key12": "4bJpEJQH3GCV5Qp27oBwU3Rz4uqLuKLiXFcze72zxLSiBUGztZFvD2irj2BmQMNzswrnzUqM75YUkX4tgH56EaRd",
  "key13": "5vX8QfVnswMUyDpFk9SPbRjzhdeNytVCTigYjzbDoJzRCvuDurzkCaWDjkvvAtqK3daqyNZbQoMcVsRHtWU6hE1Z",
  "key14": "5QqrbMQqMFVyHhA81kKQskRFpFCE7vkGAQAKFn44Kj3HPvHuA9g3UhCWfNWuAy8toUSzTG8aPdhJKjsP2fvAYFug",
  "key15": "5GjVBUsnAXfqFPVqt6bxvZaWwp6Qp1c3wRgryCHuftBCjZL6vpFCUNpBhQrwzaxuQ4XnEtkQQ84rHMeudycrjYbw",
  "key16": "2v6mY9u3dnCWJCSFCaaDXHJUVWNTZsTbX12bA2igr4WTja21T7KoKUqbxtGgyDzgtmSNhAmZAYHUkUfLvLDZojFu",
  "key17": "2jMgZkahLTXJ9vXA483octTR9aBQPzMRA9av5Yndo5oxBGzH3SiiJHkz59EfnuCu7XLkXVApMADCD7C7xdmttddk",
  "key18": "2vgotBeibR8FU1843UCtymSg1QFqCiJTwHkNM5WcrPnaXKukpFLYnaDjQZbUpnQTrKa2fVafq1K1Y1dV7zHwwVbd",
  "key19": "2Ntf7a5z95fA8weLUvtjtbQzojFP69sbvhedgrNFSYYtuR5nMkkiEG4VvFNtUV4iiMqCzXC4qVFVBsGwNeToQG6i",
  "key20": "2gaxmhHW2iZ6rpe4YzqoQwCRdpuh8ipigYaifXMHzU9T9HhFqiFg9fUck1zg4EqjAJQSZtpfMgybXTijEynt2JYm",
  "key21": "4Jqy86Jkmd4uMvKin3B5sCvu7U5q2UzSzhn4RuAEB92pumJqsthpJghmX7oPJaANFqdqPv2stbn79NoQbMkdVq9X",
  "key22": "4JpwBUTwGsyrDmj95d7fjoLg5n1kiPiZ6efvpiKHaeP4S6y564YSt1jGoHKwuUGivudTQJAoqmWhyzdBxRvJwkqg",
  "key23": "5y3Pz1VBBPb5EXgFK48XhLF1fnJ8Zvk1oJyTEnpeyuz3VPkH5u7sNLxo3wUvednK21PQ9sF5TDxK84aeDCpMUjuA",
  "key24": "2iaeDGVV1uJHoYTozTqrL76jvDvR6zs7gsFe67NSwEJyyftqCfRAMk2vLcRm77MK9FugDoZW36SqP54x6fdNTV2f",
  "key25": "59xDeesvmVqWYeGp7rTjQNJo3Mf8NgJxMyoECRn3GPyBar83zTBYXUCcLbH1T3AFU7mqCp7kCTt2E7EMNNnAvoKR",
  "key26": "3snqn1hXKFauR4YJ9hTyetTk53KsPChgrhQv3GkZjCCwwwHqxG9XAhNjdzUMqu5XwKPbMuezSh4975oJ75iwoshj",
  "key27": "2YVb2T1aFjsz1tTWmV9b2G3GjonmfxTVqrVs2MPmiBmM8L3MSsxa7qGUoHJ3Fqy897VpoaKzFLMnm9ZCgP5uFDYn",
  "key28": "4WcjPpriCEnizdTzvQVvCLkKUYpU62MizQr7dBKhiGDPhGxNd93PNcVbq3UajDGgiP8RsSe1q8ZZxSqXSAePQo1Q",
  "key29": "4x2MSjEKyBSQb5pyCm62Qa1aXpEia7qTWW88TbTfxjjXwhmUACKgqC1jKdKTukEAMDHgLbwkFEvhEfGHRTXGtsWZ",
  "key30": "btUVFzPbLJwamVbXkwFWeZNc2NzWQBboSvFJJeG8asMydJjUVydGjxvWect6RLXvsZGhFeVqVMb2dRuf8fRbpnP",
  "key31": "3yQiDmAwJ5d2f97qFaT7QKTvWN1jc8DnMrG1VuLzBzCEcNdivhwjfcaf2bK8fLPM2GbivKDuiYvwVP2WJEVsmQ5E",
  "key32": "4TMSue3QLaHNCFYG3Fh2t1pBasxpew52UXxP1h1nCaGm6C95XSw6SdsL4wmBvvRQPgx8KYY6KgJZ914et6Ajh4GM",
  "key33": "3Gjj9QfSP4TfkWEuuZBQdXcsFkVh42SaK596KAcwSxfCXY9v4ThWYdcMpzVrEBQKTHUz7FtSWMr6BUEg7tiBZN9C"
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
