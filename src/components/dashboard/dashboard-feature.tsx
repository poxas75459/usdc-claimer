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
    "CPqtUgXYiLAkq7E48UNKC9cjysdro3xj17Ssrshbo2TESNN6ifsqE8JknaUy2Bjdyiq2ugwDaYxw3xBrmWEU68T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2C9TsNAhg63nQwLCZ2RYMRpEDKTCufHH383LjQK5y5Lmyogvh1DnMGpPKHBDLyj54Jye2JAYwXEV5CTFxtJ1mPL5",
  "key1": "2DUVJZjgt3fMGHEkmUa4U8T14x8qeD3vRHeVxHgCgWJSt55haNjxzb7hyNKZt9dHDMsR9okGKXYRGjqm2LWLcgqr",
  "key2": "5ya6FxeC7ncVnE6R5yQpduN7JuwArz15twkLuBymdKPAxuSLp6g8WkmfFT7DLpDFhsCfXybPXQUuW61piKKmLnD4",
  "key3": "qVFRK6FCruRJsdwpsMHZA34PeXF1McV33rLAX9Lxg75aQLbkbnL27ejMH7ppMFfDaehpEHMFg5dqgaNQmh21uHn",
  "key4": "5MGZ8RcceGRubuCmBTB1Ga4KCGj5WjBAMMP7UbztqSbK3WqPiPBef48ctzcEcbVbawr256Y7ewHER5GbPZdqiLqn",
  "key5": "2VqjdFHso3f2C8q7HSFNK64CcBSKbVkDzZv4tm4ZeuvyDRAkdpzgu9WrY4QGB97NXsTG2dZYWG6AUDso8p2vKoCN",
  "key6": "4ZsJgcVK6oneePX5BKgqVUQ4yoPQ9Swf7Uq7ao4xR3pGSwrqMqmbfKeHJbzMUKBMoAjTrMDSdadqPSe43XgG4oio",
  "key7": "4QcNU6kPGRNCJQWLYoFdHXxXt1cvzBsfdMvC7ayZ3LqkEkg4mcjtezRnNmpAeZ3hsYVR3d5L2Bwp4h2P2R6x5rmj",
  "key8": "5ido7z6Dp4zbQR8v2DpCdA6ocdTsoAxeizA8ewNoW2Dg1fSR6SAeBKX4CnZdLCmp8jteKxtr6qjU8vYMNJvNgddu",
  "key9": "H9AXVX1HGqN899gwMfGhqzUFXiYKUfup4gZTN4L1qp3YePkANYQQdmwzHSEekJjkoATk3eUtNBsgXJChdnmwvcC",
  "key10": "QYuXz5bYjHdfufMVMJYpzwjrvnFEzPi2rAW5X6Y5KiJRbxnVPdarmMp1yBmbZt6NJT5RFj1iuRZhSkP7XjmKE2n",
  "key11": "2Lpm3JwNCodjTg7FssayBCcMmA2wP8Mr1gWGYPtwGWg2QeDNqXCAgqxXHCWhxhRmC24QKzzb9C47nXugpZ732gv8",
  "key12": "4kY5zmDhMC6QkYa829YdG3YTgzCqg8mqmLKZ3FSEtwgJewoew4tXGoWvJv9AYmaKnfAHuMMvk2435Yy941oRsVxk",
  "key13": "5VERDL27drmM2ZNpjpd8AFQPitYWLdeLhay6GLLfgyVgekPBgTJCXwxyT3nqa832nEQX71xVwtvmDVVsgXxa8Lyw",
  "key14": "3fMyxBZq8ym56DLk74gTzTLX5o89d1zoXKiLDigJfStNzJb3cbtAv9vGiNXQKTjvoRiqrHVjDUVHsFZzTwgQSayF",
  "key15": "4zGcvmBeNR6F4rkeegRDgFo7SZggwQzp4WJpGf1qWHH9HqUvUCQkCeMXUzekHVzPazAvmw4yusmyzXrQ9YVofDkG",
  "key16": "48nKNZNGmQoCmDur6UKS3JJnJwKZLgNSWLPUnkxafsjyVwh5PXF1jMzC3W3mG1Q7Kc26cnSY96xBjA9E1AoXBYjm",
  "key17": "5T2PDW1JgvXPYzW7RkfwwzhAjPYLAvE6KFGndXeX4KFDmUXdRu5PpfKBJu1Bb2Ymmi7UPdCyCHJuoaYQSb7wd5u9",
  "key18": "2uhREsqCAzMPxXoiNVE48urqGSkBfDwn3eYGSYmGHgnSQqFZBUPAirSp3cSDk9HM8ypQUTwVfBk9X1Pzq4PsinG1",
  "key19": "2r8NSm4JtXbXUQhqqk1QWw3FEc4H8XRuxztxfivSdXzg6AC7Q96nKCbKjYsrTYa7NB2pkHJTLWtRiuySgZG6HC8H",
  "key20": "5EmyZXbZsdBRAHj8VwtbFeGurHTjFN4pm1fUEPuhaQrSBSTN7mf6PWzM2B5yhN88cxV8kQGX8rjxrCgY3TDK7VY4",
  "key21": "57E28QEc8YY5cwzz3n77LyJRpoJ2qZAhR2gyiFQYawYJdbepcDJXomqwvTy4CvN5TMJ1KyT6dFfa9vWKRCXywoXN",
  "key22": "Z5N3bmbnuqZuLfH5AjTokYNCFVbJLsEHP8dZGzjzcPmGQcJpknJpDSzvcm4yQmhA6RExAcwKenAsNm9hPj1uha7",
  "key23": "PP1pPfPiyj9LxQnoqnJwQCxZP5w7JJgqVDL4qSV4WApjx9ZYLFGCv6zKYy8wFG2pUmYPMbDbryYtfFUmp6HMFbb",
  "key24": "54PwjsPew4A5cxouTX4jZbp3PKKanMWQcNvbauY7xEGGMh5jFnVWd34dPXtDXAhX6gN9BsnH6M4CQwRgLDUtieaH",
  "key25": "4Ggpi5raZedVcQk5wCqTRuE7MAEor7NQKtp1QnZ5VXSWf7YxqKFxezcVsAbPEAz5CsnhuHnTVSwPeWbqYLLkL63A",
  "key26": "5yrFcHfiFpGFaTXvHkMqbZeNKDexUrEifoanC85wcpCLs14hXBfZxMv2X3cRXF3aPUJAX9tGvmfjjVumUTP8TMsy",
  "key27": "3MYiTHF35tnhB2DgeYojva67XHWsyXGdCt7KyySnQGxxKqqQKxsJzXDvj3t6iYvAkHh1pfCJ5YHrRaWCgbZ7fzwL",
  "key28": "5fxc8dUkoS7SwJbH5JhKPt3Rw2JNqnkRa7HA24Hxjn7JXzQzgU6WsU6E2yJkQXf3YeQDbypb8daR8SbwURJf4EgL",
  "key29": "24aAwPuJPfPxugBGSpiRpGHpkKGFtATDAPg2A4Qq8V2uc2Biubs9neNZVaqH26KbmeyGdK6RRro8uDTbtCW32t48",
  "key30": "5VDf5E3sGbropt5NNw4K83jEENhxjVr26ktGF89pb7nkPu3extRUEfA7Gvg7LLbqpgPJ9VkvGrusD1FvHm3gYiHX",
  "key31": "2ZXZvT4bhD7vg9wMVqndRa3dwj6qKx59kcpriaJAv3i3iaFJ2odUhdjgBkjiYNZLV9CFHf159jMP9FVSeo3RZT8C",
  "key32": "5A8667uLG5FKnu8TKhGANDXEHGNwUctAdJUsiPCTA15MyoqNDJRMyRRmhq5Z7yjG6FMxbNm2NACNsN3YdWwHo1eq",
  "key33": "5BPDkmX9fhLVEBjSEs7ex2Xrh7q782LNBxyWaTmRwGvqfjC3ik9HUFN3YfPAW8ZNJpyFy8MnPcu2e6SNpAek5DW7",
  "key34": "4rXk7ZKadoyu3zHKJRMtZp8NJLFNsntXeyWYg1gJDDf4qja4ZEit7qtWtqJYy3BTy4aJnovs1hdGuxRexoqW7CQc",
  "key35": "2CDD19UxXQPjzTWUfMTpat2PojQKpyWCvzRvHjBmhdhZu5iVaMUbpBqXUN9zUuGaWSH5Uq7bmxdcs5jAMqDLEf1q",
  "key36": "5DJhe1ELHfY432dCgSdaFfTtkjCnGrSdxJHpouRKgAgvWcMJ67oaSYLQ529u4oS7TjVpeJUEL4Vdni8n6eDNsKWm",
  "key37": "4Cc3PT1oApueXgNNeV8ApPcTj3E8yhyGmptWFqQeDNTFfWgCALBLNnbYLLgDrCfiVaQHUvvmKJNzTxKe6KvMJmRx",
  "key38": "65VnpEeShy4cktRCz7cj8j4T1wB5pKX6YtZzRWNRHDfz2t89C6FAsQgmqWM9oSc3jarBLtUBoeF18JnyoqFMJgtb",
  "key39": "zbbYWE9e4bE8zoeMZ5aZJt9N2NzBMANTdfhL5HYfhzerhzdeh2gYP7f44QcnCMdDfgAj5v8tmJpqJKxHte83a9R",
  "key40": "44fND7LUe2o4j3xKT3ScneHKkmGuN4w1BeFKpapqN4fdLZgVVdtAiGSPMUKyWwgnpyYwXgHwowdMLi4u3bzY9iPQ",
  "key41": "4WBoiyatqRFZzQ6zP1S9sCa3CMZijrciYqFArmD88KPSRH6jtQ3yDoPdJ72RMQNw4EXUDRuQGsDGJPoK7SdFb6v1",
  "key42": "5UQnLjuuJQptaDUuiPFkijUwZjqX5wk3nginJxHLqiSM5bueBvgpY1PrcoHWbMUyzjRwVR3dcfKb9npNQJE1DGVw"
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
