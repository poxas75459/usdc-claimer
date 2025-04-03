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
    "mVvHRCroeTeVKufSSWokRNkawjagXfk6j1tvZZS8ivUStAgBWrANQvbmFRp6DTYbGBMezqwrrRodcBvNKEFb2R7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5VcphikGkLTWY5tDmN5fsKh2v6mM4QViLNJq8gw7WuNgGQcjTb2EDFFoPLx5smBt5XNdwAhe23Nb5aH6GSXWG5Zv",
  "key1": "4cdZJNXqFmJr8FFKFL5kTXuppdrfNPYcEGg63Zpnx4uxrUbW3B7DKFKtZBFJ4STffUCddF3cXHFLmt1RDiYC29go",
  "key2": "3JbmDVnvuEUkMqa3ZBBdJgLMkpCHE96BXkYYx2zLEH2W8dsaSTnUN21U4eVddWBWDspBEr9wHKE48SNjLggw2Cci",
  "key3": "5dk17kxbJmskX4GPCDSZ3RCRoS4uxMZbDwUfJTGsTfPJGpDUKzamJLh8j244sw5wxrwNvENFtfhrHXedHLk4YhXe",
  "key4": "GEX42kHJ4GUgmf4ct71Lb61zJU69Jm8LZhQfEvaSqS76SkRLvPqeSAeiCdnoiHV1sWDR1kZUupW7TWJTiRXBbsc",
  "key5": "3PTXRcWj7GktfbADHo7XDQwt7d5Kx95dXU443B69491zKCvMVTi3gDipiENG34JQU7z9xk47PNs65QpdnvMr8aPh",
  "key6": "3YGMhJNAyWYrFeSQWD4Sgp4ejyMjQ6RaEYPVaZXcBjAcZLnn6Z8cz9g9TVjasn2Nyy7q992DpbPW3n83BustRo6K",
  "key7": "uWNFZK5QbVpTkt1XWiMkLDeotfdFk4CAEqjAqJmAnyAaY4BGWVZGzBpqzVGAU6vFvqpeaqFZTHcSbLSHg8s596A",
  "key8": "3dtm6hMCQo5wMv6fYD8Hp7ThFfefXcy2fcRJruzY521PJQtjuFZ3Nu7YTFw26VMC2zxuzreYY4vFUSX6udLyESoM",
  "key9": "2EMh6yC6YVDKShaCy3oavE2tcV7smFpEpR3nJgMZnDdCvjBRBA4CokW1Xqdi6dHAZFJZLHGk5zoQoRBfgRFtX1iK",
  "key10": "5dGYZmQbj7fkMk44iuhaDZxzsrymurgXmBP5KudchAxb4mfw8WopwZJ6tv6vwmz4anpVZmKc3a5Yb84gEYieDqLR",
  "key11": "2q1CrWmwYbnLn3AypZsA2fURHjQKXsaAJMuJnD1efztU8TPG9J3HWefaBGc2VDHwPPPXLjUKHAPD35ADGTaSks2f",
  "key12": "3zmwFe7MSVpwE2vkhMaNE6vB4Kp8p9tm6fzaVHsjJSosE1Nu7FKG9S6Mtq8UiGxvbRnnDoeQnkogJQL1rS5Ykgx1",
  "key13": "2jDu9Q2q6aoNoJpVbKveScG1k7p3hTBjKfJ6DD41BQcPtf43h6u1GbfBuV9V1bgzhM9h3adPWy743HjuYyGjiRGc",
  "key14": "ELd4aCpAVS9w8FC1dJ1UW9YmLCmtztuHrHdPSuj6Hrg2D9Yqwj1yAzhdzFQQmTZhnmDVWPRRfUfsDbgyfaQeuJD",
  "key15": "3d1qscT2Pb6XZDTvgKsDAAyS49Lpx2TJpSr1EZyoXtcVWARsJhJYGoaXGXwyu5oFttE46qqpeNos2P9mexi8UtDA",
  "key16": "qYudAPB2ntHPH7eX1xN8Xg7RPmA2oDH5tirjo3kfTpLeiQQTZbyv9YixAJfWoWKDzomMpNyYrxbu2auh2iDfepP",
  "key17": "oEkhZKJtVSWHcFUQwGrZJJLH3gWQJcazAVt1J7AuzBGWwvnRUCy5eEjftBm7Zpd7AMucXVBP9uyRpmPh5w77zyq",
  "key18": "2xTjYdRRNnDQp2iEQmscAGswkgCo3aNho8WDQrm2MGt1fHG5JggoTpEhfMkLZvRjJEHXbZNQXcs1CiKNvMbEGc86",
  "key19": "55J7bMBKVHhxF7TLswzXkNQM3ZZRtXqP2qs5siqBX9T2LfRv4NCJPNpixGi9NKe57FCkQBRgEWzeVHTEAzkmZUMb",
  "key20": "Fg8TAp9JeukfkDg3ArySN2E5UqczuMSBheFTjqi9ovGoJVty86gQwNP9ZnVKw5uSdv4qCm2egauHmxJn5XQ3HPK",
  "key21": "4mQ2zXwMsdZyu1GpbQrgK4M1PWPXdJY2pmwTS4ELB1edDCdYrT3Qr2vt7YtiJqkbqP3YkKBy6TEaZUfGWSGqPyB",
  "key22": "46yt7TAqoPv3TW68qrZ91NiohVQF63sU22UYLgxiomzedsuqSm4LTWzNArqB7mZAKnGWYSWYBK8UWZUuwQTh4VX3",
  "key23": "3GcnMvnJuJncsXPfcEzkZKXrqSsPEmZKLXWUiLPwTXBHSRqZVp3bogmeDpnaRoZVsdqEETz8svyYWdrrDmnqE4yi",
  "key24": "2ZYPVLcGrcsH8mMVHUkwd5EXc8UoFHMuuSFtoPDPGaRvC2KVXt9VqA4VPMKW2fsRS6Hi2khU5H3ms3h57XR1d18G",
  "key25": "3Am8mPKmUoMaLrwDnNqATHS85RySbt6yUJczYMfcRzS3WhTHXTydDnBwdC4ZsBi2FZXjP5sQ4UKsSCH1G8E8xgo4",
  "key26": "4MGXhrmjVpPPvhVFmYRKKMJZFzFJdaUpRHPLDyqGk2U4VkNjk57n56csE8tGyt9TbDPXMb1NCbeujCXK5Sidw7u8",
  "key27": "32HHhbePdjL7TDK2pZRb2rirzozufjd7jDDa2Afrr5hN6sdYmGQEjLAmpfEBZaop8wb25uyxp9x3CdF5VATn8ubp",
  "key28": "3o7RGRpwvxCZ64fCtQoR7hXYxyoW9Y8Fq86CED7oeX7j6wiB4mMRWZX5KjDr1zWVbLmQ8ZT3g3YoYNeantHMpBrM",
  "key29": "3ZdT8iW44ae4pc48wd5VRm23XBpybf2MQuhoWpUHYdhCf4X1DSdKGLP4iTSvPhEwWVy52BxqHRSnGc9N4qVKCEc1",
  "key30": "Q5Wmzrtt8N8jNviiYV5xQfQswPK4YzGnBU4N7YcCu7WBFgU8SVPjDYDyRaDLhWd4MErEUX5vLBi4SDL1NVdcEF6",
  "key31": "47dPTXnPKT9Soof29P4ux8j2HMwvtrmH37SfhKn1GbKyGk3N4QPPXGqD6Lka545hJmo7GpTVCWNZkCZrfpobaQzP",
  "key32": "3sWAHVLzZJQ55vG1d8HHtydXBybMKFDA49LXkeL1TsTMXDGJre9yt7MdjZm5ZyTjzVrdiaZfXJ98yiQwpXBWWJam",
  "key33": "gcP3U1aBQktNqdWjNsojgqLGMVgHJRTZep3JDQNDtmui22gTy84CTFqunASW94QpXbsf2LxQsHTfYYHA4Qehujg",
  "key34": "5UZapfbnqAWW2rG9ZjLBa1URfAHHiWMerNomf5bPZQZmtWRj8W7AEtRfBayF3CFzsVyR8B3kUgjU6adL9X7inwMx",
  "key35": "49xHinSBhzXHCgzC2Mj6rxLgsvfniGQjiRBBnjxafdx3QJMHRQVeSi1Rq7uXq3ByjY52gemLCAqRaFW7DiGm5zTx",
  "key36": "5E8RjZbgg1rPAhMqB4JgHciR9gmn7PNZcnDNipTMGpNbgt1o3t5DusoqpACrJLzEqJ58wAGbYpArbdFWdihniai1"
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
