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
    "jH3ZD5jkgxZyJ73u4GcPsJqeDuM4kLWGcSaXeH9vLaUWCPfj1hg9e2AkFfX9iArX3rqPP7Es7gyTXCax2XbiAmU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "52QGBnL1tJPkm2hAwoW1GqmEC86c5EYvrGZZ7JohM5evvpYtVAnGL3u1BaT4tvfG9xFcNFwKswEwj9HjYWWpWirK",
  "key1": "2iBhryLcLMPg2wNd6e11DZcFWeqigNnoJLWD9ArMJNpj7jQhWFZFEXAqEg45novZ6iuxwrQo7pbZZHBuPG7XPeBc",
  "key2": "5c92cWFh4hjMgpw76cS4nv2NgQC48ZBfXA5PaTja41HNzGxBFiqJpmbDDNnVg1eWWE1mtDEp5xezFEGjdpnfe79w",
  "key3": "oDS42jq96MXfrzLs8uXqBGh64p6BsYs6TnS94TwAcKSeKpefQYeUmY6exswabkHJUkrFqWEmu1YdnWzCji53sQL",
  "key4": "2sonP2qRiXNE6oxsNCdUGrvXr8jsffNGE94L8nEckMZE6JuWbM5CkMJd51duh15QW47CUinnTLeEP9E9o5EGCJAp",
  "key5": "5VGkDJNWXTdVDDLcLg7koMqnoj3SGfYAsAwBzrn8dwkxpXz6LBhMbenNMtSvancBd8aLVh9ky5oHVBXiVnJTEDSs",
  "key6": "2mM1R9CC1zMKGciUu23isnSVerCWvzMuj94isCfuVyphGqVmz8f1PsYX6XCGaTvt9HaM3GoxbgMzTuTUafHhEBu5",
  "key7": "5F1FfXANzVUjFN1jRqTSVrRXuFKggoAbdbA6jTEaL7CvrnRLVUFiJL1zqwCJzXJQYxaCV4rRGMzvdS4TFWZErPdm",
  "key8": "4ya5YfJES7Lw7kCDNfDMMUdBUv9KPgKq8FcJz9sZyKzBc9nMjGJXmZbs2TVbzazzuK9xKxhMfVKnNYu9o9qhfAiJ",
  "key9": "3BskTaK3XWfnToFERuoDRXHStHuo9NdMB4jJYiTykjYngGhfUhDQCAnqGdZbKrzjHp4xRGLDHFeaH3XCGxQDB5dp",
  "key10": "4pnEYwfHVmc5BQyjpHEF5cdjDwYtWEaJE8qM3KaDUiXVLsu7NactS527K3WUECi7Y5i5nuy6yjyu6yLdxf44QTyo",
  "key11": "4F8z7zU7pizE1mkvLZnw3VFWZEXLCnvRuWqimskwW7nMXpr6jfbbntqvLZL7ZET3pYxR9NXAAGBRQFdrmnRouDTa",
  "key12": "PV8s3dohcbrofNq6rFmCy6y7m6q1EhLjpWLLJCvKmjjSBteG5kKeKP8ujgBHFQojxVXEZypb53Lt5RZ7vxS6JGh",
  "key13": "5dDCLeRvx8ATutsqDXkHiRjBA1JMA5efBmU2c8FoB6wLFR28DWBEgTuRkwMs8LXBLNcJ5mnuBBEjA5XUPiozLVCJ",
  "key14": "3xQUjuU8KPNTwkYUCi3oUNxuXKewPgdx6UWLrrojJ2hRiFkoKoUKXS2aE6fjeMkHRoAq9CLbZ7CGg2ZTN2AVvGNs",
  "key15": "46jCHx2gNyE6fbCKp452ZHx1qhq4M7kbchxWmZba4eUrjvgexri4J2TxJJ9Ht7XhcdmPhnAhTRkPQxZ2NsthpAte",
  "key16": "rjQt6KoTqStjKUUhpPJTYg16vDmyWqLV8PQbTTmF5TQGsiyCnD4y6J5gPiYZPFVnMRfk2CZTvb4WfBPmkeoK1Rh",
  "key17": "PBinjjaCBGsuQZG3AGBFnTBgELYZRgzSQ2ofyGANxWwRTrAgysbViPGwDnWRjvxQHLHuwG9XS39Qen1r4h8dRAK",
  "key18": "2NQC8RfbVqHyeudX8NWMVpZexeyFQhg1sV8Ed2jdisP9fTLNkz2zBbwNdxdT3GroL5X1PkePme8QKpGJX5wJdFAq",
  "key19": "2Ru3RHbX6YLgZZQAChGsak5TAptHxkyDSypTXrN9ZqUNQSqqr8awHFUpjQmznYb2goAMoSiJLyUfRdgNAE5xzaNr",
  "key20": "4jVW3MwwpD7NzADwfg66Bi8TxRGNTBFVcDF4nDwgLSNwSqiWyveX3Rbo4CkCmm2YbU2aV7DP8hWN6zcunqCDbqXt",
  "key21": "3DjFmDZ69TH26tj3Jxpir97vFudNWEeSSHGd3oDM6EBYsUCqwYQXK8NZLJRh364BjUXqH7M5dT7A6CZAM8MNcC2Y",
  "key22": "GEr7m8RQHY2AFRXX7Tq9hZZnkTsAQyTpd7ErRCJSqb8dmFgJ59abKgqWVYtZSBncimXcGMQjxfuH9WoZVkir6th",
  "key23": "x4BHCnG8iZFd4dUAWWiNndPZL11omkETQbkG3N82bQ2vK5b395ZzH3HMz3o5fADc4YEn16rE2iYVpzZpqRf1mmY",
  "key24": "2hnMkxMJvtGgWQsZHEoUqWuqDUyKJ6ZNi197TqUa9ux9596tKJJAbqZCJiUypsPHNhrBhF15kEDk3DFx6HW7nNPf",
  "key25": "2NeqxX2AUcRixxvsptPQqpRgMYtofYpmQfYvQLbkANTZF6gWkVFJ8nGm7Em7oBbzVBuFPSr42sGAv4p4tagb8ry2",
  "key26": "5AgwurRkXU5tRUxxHWefd6tw2HsjSnEgN6MknVQXBM4abmgRD29sYWZeXTwV8EV362iovJD3JgWnPh1k94HkB152",
  "key27": "5HuvtjxMUTA4bDrGzu8d817p11qVn72cUgaJPUVzFX4BjLEDaWrkp5SPqq6ZRj3gS1X4CEkcUJREdrd9btGE7rDq",
  "key28": "hVh76LBnJYyRaXcKPJTF1WxnKBcjtHzDopvRX8GgSrr9hTjDTrhQPqMdzRihiFi9hEtporwxWAMePcfh7uRTeGX",
  "key29": "Daz6D9WjWoaSFfhtuvBXv7nBUhdj6Uhysc6DJAjRrnCX7F2dkhbdNQwmBKrFJqcgGd4XwbfxaKS8U45Vor1tChG",
  "key30": "3gpJRmyFXDipr1NtjfBmgjEs32YWSVZFuYG3KBjreToT7yTF4ePaqTXUVwSULf5tcgJp5zKwek6ug1ML2Nnq8QRp",
  "key31": "37dbBMWsNnKBYgJHGhpkNh18YXwarFZxEQNgAc8Wa6sqfUfxJWr6FBRTHwEy3B1SUXdSJ1beAogbYkNSzG9qBfxj",
  "key32": "AomENRwuJ8jSTnaDEXZy6CgipC3HnqduDPj5th1uKCob2cM18YAi79dBTPiSdZ1ZvYkNUFxSdDYuxYf7y88wfjQ",
  "key33": "3mYr4eDhRSSYAHdfoTCGjnMM7Mro6pAnJcaqkU3xs81iYCt1ikEcz1QBqgpXbA4nXXtB33HQ3dJVtcU9jSo6TTd2",
  "key34": "43UZHNTgfEw2MoH8WrzsXsZvbyKYcZyoozmhbLSqykf83hJuszk8ag3Z7BsQPLg2KEPVNDCveqP8AWU6BvFRRM13",
  "key35": "2stkbA4JfWgHweUgmuAeWvVb5gb54xkkyK9FB9rrZA3dS8X74xpkTJ7K9LjkKUbtbQyu3m7QqMh2of68tHFGMAKG",
  "key36": "4i8DWCUzcxrJwa5wR5AAMKAzsvURun9ADW5sY8fMWXuNjRTyjra2cZVfFHzSTKMtnn7umQ2pytAPupbbxkCHfwJa",
  "key37": "65QVNEG9uBRf7WYWGJiZ7snAAQnW6Z5YCixs74tvop6MNNJxZhhbQdntzX4D1e1pjQEsduXV2sn74pKpaMR2DYsN",
  "key38": "rsHXwgBUgYdqhQzgtxMo3A6RrPmXKZcuoTmna8o5SFbumNdWsttM3trZB8RaH6Hj4geajgp1hzw1dsBteLjT5uq",
  "key39": "3GV3cuhnZJX7yHdAreRVtjkNs2viekF2Bm6zjqe445YRsGkGZjSgapgZ1g1UcwmccdzJLLZefPr27nPbiq3osUmD",
  "key40": "DEYqtyWG9ut1XxmuERqzx6mpPHFw3k1PTG5isWwTakPXxqeb2Fcn78yJnEhK5uMk6nXHjhFng8FoNeBiMABB2jk",
  "key41": "5qdnJeCF6RkCtrzHeztfyg8MJgwuz1BUmUyF4KAaLh1Jzi6xJ7irUZ8RAsmmkGePsKHPtSdJ8jvf9Wb1J94qy1Qm",
  "key42": "r3RNqEujMCJ71hLdM8spsRxwovQRxvsdhK45spbAPGC9VYTZFFx6Dfnoet9xGhHo4RsECmuj8yA1FFjzMpqsEA4",
  "key43": "5vWxqArmFjoBXVQ2TVhy7uXkUmBaFNuWRee3Z8HKZmsSvWpSYXSLSmLw1xm2ioyKotCT8NoVoaAsoEk6kpLp2m2Q",
  "key44": "126WYVHSbzjhFZsCeGF5adDFkKkhtceVedHwdjLt95BTYkE3ETJysiiyScMUgCijNbxBHJi3TKSqFDyyhufAfGFN"
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
