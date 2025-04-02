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
    "4svWEyiNnBNPoXwDREudNmfu7fmcReL9kYcT72DYq7k2scX9vyr6SqqUghyu8fq7hgp2fRi3siHsZstsE2os3N5P"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4krwET4LGcuQr8YtvMHBP1BLttWr4Une9SEshptWywABRRWNSVq36jRExYmaxESWd99a22yc3gc2dbPpxL1PpEvU",
  "key1": "8zd8evWVpKMweBmwzasCdDrDQJtunDys3wCz4bHGTxnW96smwvtQQbLAxmNxuABAj1xZhUNTqRozp4Dz1d3bns8",
  "key2": "3nAtZbP3dKMtjmpZD8GCXXmaWrTHV9sbDnz287EZEXgoREeo1C8Bxa5PejQ1YB9s8ktUCzhZ1RZmCGW94VBfhCfs",
  "key3": "5tZZz31eTFxJZzyuH2afi8H3EGhEYy35p9DR9rU6NRrmud7ZrNP46bk3U7xH13nKQZF4SWAVnJEntQooSaezmTLW",
  "key4": "48uEyD4zfWmZETrAxF5133KUfU43W1FfhthmQi4wKZornhW7YusT1qa5Mxay4iZrKq1Vqrq8a6N1kHX9Htx88Fex",
  "key5": "4AZpZVs9gHtQ16Ch9vzY7E4L4hRCn6XavCxg3qLxKA5PVhmGjpKmPkdttRvu3ixaZ8Cw9RycVU3W9gKkrwiu9V4q",
  "key6": "4RyKrFx8mKAFPHKcaKByYVb1QVGBYSPNq6WDn3jFeCai9mWyMfobZtqqC9QmdWKQcprhyA2Z8ECKXYWutyveNpTc",
  "key7": "4eSsHiWFT9a5XD9XWxHJWRiswKv1QCGroEhncEnv2ndb9P7g2H41wFP2zQvpMj3n1GANSFH4viK2psK4FL527eBj",
  "key8": "54tCtXFWnvVnDUZJ3bnntwMLVJK1TsRJyrDMn611AUxgEiVK1Jvt4KqNsqQ3oxw9gTAT5bzdH7C4kdU5VCo4wErP",
  "key9": "JYXFDEwWXUb8ZkBrn24S7mE67JWy2FMjBNBmRCdckkYVvFPpJjftio96RSJtGh3qj88TVw3fK23o7x87UNdpB1J",
  "key10": "5fhbtwGkcYcM5XcuNNoN4ZxsLLs2CQC1HD8GkjMGrijXfc214A5Y8zPYswUf8s9EZDXFwKfG9MgAmB4uhAPyWqX3",
  "key11": "4vD9RdyGsk7xyLozYwCymuKMCJ5Shba4s8DL3232HfNJWCirzhFcUB34x9ZJhsf4CpY5FrGdn64gpTSJWRAtQj5a",
  "key12": "2k9jzKMbAAqEAc1wnXU7UnNqYjvN2ygaZKdZLAU13E5t49TkbhG53su6gYPPv6CJkWvP3ZAdAotGGU9nMgbqByUJ",
  "key13": "2cDSxBcvNiYYEVE3tu324WsKppXTTzbWkMJQmHvjjuNL7aqabgn1BHBR2JVsWuhWQwQwcKNCATx2D2oMjr3FuJGY",
  "key14": "ghgRcerYvMUZiQBHdwkyjq9sS2pSJHSNVjkvn1RtJjyt97K4XjDssrZ6FPasXbYSdETNxcd3YfuoZMLd3MFZKBJ",
  "key15": "4TKzNJRPQQZAnHGoSRQZjxyGjMF1kqD1YvD25ZxTDdLCEM5wsLfFkF47rJgeJi5f6XdUgoXx2QETWFmKUsdGtrte",
  "key16": "3aXQy9uwYWtV12NaAY95Thg11wbUWhsKrhzFTzcKdJwpiF5q8UZquG8VVUQepinTEEttc6an7JP9x8dgNimWNyH3",
  "key17": "4n5dSSt8Dgrnf5VQmZpj5mgvQr2dV9ho4CmW4rAMzybH6VPWpUyrubT3cApbQG8unCUwSXrVTxYpvDZoWpdq39T3",
  "key18": "2AhKMpUghtK9qBdtviSw6RQqhLwp55roCEsECTDFs3nEAhZe6LTpB3VDGFc8YKkFTPpu26F4Amwy58wRhkEXKpHG",
  "key19": "5VBpde2XJKMHYzLrruGkG1mFpLE5sqXPyF1bw3oxGhogTHazKjE4EcYLGSUpvn742JTUKeNu7ijQ3R2LZcM1QPn",
  "key20": "61VGXNTYRJt2MAKCcgPg7mMNZkULriMnEnNwowiCuftLZeo1qpZQoDhA4G3eSxYb1sjByg7qGi978DeoL2Bg4nni",
  "key21": "Ei3zTscevAixaBqyDgoQYGLiEqPE7rh9uDahhHFYgGn5pyyeWn6bvzvQFk17VHvxEk3NJiFFnRYkxmE8MHuknWH",
  "key22": "3Kgbco2zSgZkGACUaUZru2Hi3ntL9LJnGBnP8717wWNgy7rvSmMBA8GrQbYF3pdqTY9qjHVFH9UT7Rs4hci8ZW2c",
  "key23": "3oBsfycxSfBUvSk1yWs1WrCYGgjw8xp4s174r7nFD8TJZGUbqgUQWWeuQ5t6MwK3vmEALUkgygizXnXDsfCviirV",
  "key24": "32jNrt28WaKgSeD7ne4QsWQeVSgcZTT7Q5rYF11Pa5iNjQdxycogMGKWGqiwXXCFmm9hZkbx6dwa2ws9ThPXxNFk",
  "key25": "5ke7Sus3cov8iazrJB2GEwdnsNnd9qg3uTUGnB6LaGvL57RReU7UG4as8Ehcfni2CKVD2FeTngJkFUCkJoFJS5eX",
  "key26": "5GubJu7aCVX2Tyqy47EoioU5yW3vDRPLsmxvSpcqogUtjkPeMpP2MaqPYR9meYHzXsyHJ38Fs74tNNHJH8T8XEH6",
  "key27": "264rEH8zKneauAsYUU3cz9pFLm8iDXFRat5xB4cncyRekkowbp1MoVW4D7PcPHpDsfwZs6tkVyvMQdpjeXzrjkzh",
  "key28": "5byixdgJaVUZN5wPshAEvy79NcjMdQsZJBCpyq8fV3hkt6tGMoXRm1cr9NCP3UtzFHNjDaTRavgPPN1FfLv6sgji",
  "key29": "47UpmCtnj6xnaUvLYcVt81T6t5nuhdMkGptMBL9BAA3qpG8LqpqcXd3h2UfbtoGQ1B3KyGsT94FqNudXbKN4jD4n",
  "key30": "2W5KokuhLGUQcswtm4sMeXGsNRs6xLq3JzTiGBtAk8D919stEuhsYQNFmaEfRa8JXcQzY1ixmwnjtcnxjvqXxV52",
  "key31": "3yJ9PzAKJtgD2vxHbxejZZkvLkEJtVzEVoLMEzCDgERL1gXRj8vgGNxEzFh7VZefkgv5yv1DX3Er6RSK2B3YkaEc",
  "key32": "QnQwAJz41zEdakML2A47CPVqPBvMxexbAEhgZiHTn2uRNps7NJwTYaaCFtV3PARYiB9WB1dxJvmVy9Bj7ZninND",
  "key33": "36UL3nuHKbUpuWdxppCYoXS7gbY3GpPj2SjDxxn2HYZfVNS5GZAJQtzpaDwXVgtmR65FecACQa8WdxHMfx5VJqow",
  "key34": "51HhXzuRhbaMYa7bDk6cZhcigRvsAMwmKqDgHarbk3HFDriHjwr4fmcuUGGeDy7AJAVeLSVwfK8cAXXGyyVL1eiq",
  "key35": "4M5K1pAC5aCqdg9yN1f2rDHq2h7yRE7QoAZrxJiW79xTcqVrfoTB1qVPKJY7JJKK5AcEcvVmHqyLKZgexPKznbdv",
  "key36": "2t35WonwTTZywmEkzS8WAQcfdUrV2CYoWDu8qcn5XufHHaXVjsjFTZnb7fweianDxCzZrVz8QRC2T3Aq9iHYPqr5",
  "key37": "2D57EEcPfxf9165TfkqNk8uTNL6TWZYAgGn1YcR8H8oZBq13FMVTf2jvGWjVfWgBMFGkoXNsJhvy32775Z3XHqXy"
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
