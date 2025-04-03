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
    "2EDXHasW398wit8hVWEqG39WCUHLeueTnbA5TcuV2oVhQfiYLheDyN3s3YCZdiQAqwzWoAzHwD9Lf8CvJQftF5Ng"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rtJ2AMaeLhujhjzoqxYaHD3aLQFWzLUZBD9ZA7ogqV8SQ665X8N4F1GVHktZ8FsREorWGq53jJuVTqGrRt4PcUN",
  "key1": "TifcMyMhHJD1i168bGq83XqXS2Ab4eiszNL4WeHZtjsBL6VpRgsE5sa4ged3NYC14ZbwJz63byiUuAX8FqpMWjG",
  "key2": "38TjmRdAx8LDXSZSFU1vNkZDQTKjKegJxJNXxb9F6oYNygXfejSCxjT8LuXndmnubqq1Xp5KfTp2mFnPzWKoBRTf",
  "key3": "4gZbFeqJ4yyTji1d8dKQnn3VUPz9iBgAdqzVSYxMnYRaBJUgrh6Q3ozrA8b2xDTLUsgxqEKXGfMTqU9ibdsA92pc",
  "key4": "2kg4yxXDJPf5puUNEk5SycRCERjp2PjUHxm12REEMJ9UvJUCxtgJyjyVZ9offPvQ1hfPxsE8TE84kvoQyf5JL2NV",
  "key5": "j2Q6z2wtrcemA6BP9847fnW1v2hrRHWSS2NGWDUSWJetLwhngw1BXBK7Pwws7wNsQZ9SAvpY9DeG1ZsjF9z9Xdw",
  "key6": "5UppHBrVpCGNxcaW9sqE5iVk7FAK9gGQNZjRWaxmCvkgXyA45Vg8F8SYaE5hPTMv5itucBEacQidf26NkU8hjrwH",
  "key7": "5riY4xqapF48pX9uygLwoPhFXWMjbgyZMEV6i1KzuA2Y5iLyBpv86fYxpw6b3opKYBmDW35ZnNwm5b3KVYzcx7ps",
  "key8": "3ePkyN8JtWhk12sbo1MkEMRPwDMJjNfMwNWLLi2rzZiZZULHugzg8vFsLumkjtmb1ePdiAW3vX1Vbq6cYaMjVhSp",
  "key9": "5g4iBAFoVYdZ6xiNGRpPaF24EB4DWN4hrDCfRYGYNVA9ag3zogyR3RqhiZdGYqipbb3d8vc5xZjTJGRbrzvtVNbH",
  "key10": "2yV4TWQyydFCERFUhENEAmGS5T2r9MVTSy3a3YPkuhfG8hN49wDL9se9tN6kXosJHeAgUzEW39RqzRB9Hwat5CN4",
  "key11": "nLAL1gyrMEa86auVaGtvUur5Rf3xeaCv2Rr9KhdvRRMmjb4x8NX87Mabnbk3oxUPfv3p7kHfnaQ5GFkW6eZMsA3",
  "key12": "2skyY4PVNzYLCyqs7dWzaVLTmVoRDnjeotaQawsZyoYztTx4gAX7Hfani5V3f8Y5dJgWABUf6Az3cpF99Ho9UrSj",
  "key13": "5Jqby7zxXWGTXvPQdejbc3msvvQXtnkUFfFUWkpLMZG5mKruf6RrbCXj3oxPrrq7UsrqFEW1avAP29eZXTGimMxo",
  "key14": "415dy9iFVmJYMw5Dc8Ci8z5wAoYWAPxTj6LzuwGQeo7vBCCUu3XYzeX4GRaMN21LRe1pgi2qf2spuvZFM7Gr7ZkZ",
  "key15": "iTLPyUiFrP8vVG4rfcb3pPvfYZneQE13Ew6VcNbpVAJ2YDmJPjSVSJv1aSzZkMkzHr3xeDBgacgRpHLtJY2Mcbf",
  "key16": "kgWbjCY9GGMEwU4mLbyqXRH7tguy8mAntbR6ic6sXrnVkD2sB1gBoLqxWXSVYfBWmkbNJ3ExvT49Bgd3bB4WZnq",
  "key17": "2hkCENVBDjtQndn2JeuWeRrZtzh9pmyioMdLEmX3xtB35mzHJB2f777UykWjcdFPKYVyyPgwuBiDg13in7WCkTFC",
  "key18": "3qQFM1RHH6D9mk9Was7bV2DKN4XjQfyQrTSZVs8Nx6pE3H8GTbmejsypzZJjHwuX36qJ8MhZWSddGEBf2oYJrhEi",
  "key19": "vaPDPjQemLk16gFWdoSsvtYNCqpaESFhw1hphznWbro2C9NYz6WiaRB2nwno93k8ATWfQQuuHN7RqcLLPQqm59A",
  "key20": "t5hHdd9wZEBj9AqU4VW5Mvo2hTmtDUieHX4TZxNVFmTBzgkdEMhui1SVpUdTPDgUPajpenCUX53JFvH9stcoc7i",
  "key21": "3PudkynBAN6e5Nbnqn7PpPymEj9tvCKYCyjkw1K7Tdh51Bd7xNoyjDz1DX4RfnWxUdEKdzrZhw3SUXansENj83KG",
  "key22": "3xuxKeQhh838iZHwudRyhgk5tr2zRb6VSt5zUy1bS4vPgDyi69CAXMYDDizvZ2JQzQxAQ7WwCZTSrtc9HqZmyMz7",
  "key23": "2vzXWDyAbxKN26z2CVpg1EM361ZKQKUN3et4dt7y7EcZ4hd5iYM8gVSJ8BVfAdLhZajrAHUQWD7ZyobNLDoFgMKk",
  "key24": "9oZZrGdnRZq433CcwCJzLsXovg9JYtFM5xhQXJnrRYHc4QAtmE4eFLSQCFN1QN3f6dQRPYiA3BeN2AH6GCcUyGJ",
  "key25": "UGPMWGnaUAJTvg88XYHdWf5KGYP2y73UDMXWjv6RUVJg6tKGNwHNHBu2XGHcCc764Aiw8h2caqwxGz6WGqLCopn",
  "key26": "3BmYZE8oBVMo6GgUSDnkBzSc5NhQTymD2gsR7XN6TEXDr6KVG9Rikup4fW2rniusH2Ma3RGB37pSRdqnV7Z7Cwzw",
  "key27": "3uYmywxKFsBQLEAkvmssUdq8EhkEdQdVZiptwfnJfr7oAZpUWxo9UstVj2nfAQyqpfZZiqaMzkKhLhHGQgKcQC3Y",
  "key28": "2YqECtqPtp25cDJRnV72uynnqeZp4KY2LuK9hRynt16zopDLgY9XrQXUF4hBzL3MMFVSk2vB9hbguiNbGitjsskN",
  "key29": "6QGq2NxpjAeDzdbVCssXRD2cV9LdZgwUZUbs1fBmhPir1onh8rAQ5J5tZk8R5xeBbQfR69BaEPKjq45GsQEhn5c",
  "key30": "2iBxkVMcPBUgnhKCwJjtvw3ShfJ5hj5qtt59tbyjV9ZRz92eKFtcHJG8MzieqWQnbsf9iJruEPmXEPL8Unz62bNc",
  "key31": "3msQPTMjt2UqJuPNkrdRjqtVxGKhRC2q7dVAnUWde1YZHPHjnsevPYd5qq7JPheZdJnD8eoA3zq9Ncuj3VmHudcV",
  "key32": "4rcdFB7r7JC5nA4GnAyDPcFptfESemMdY2tD9cEjnAkfDyPffo592r68RzJxdfdFHC2rKRgriSjLGmq1tz2TVuYv",
  "key33": "59ozuuTykpmnW9EAUeZMnipASDY995iQKPQBXbHBtb31ozEqGogRFn7JTtgCsCX2aVUQtpq4CTfW155xJrQyiP8s",
  "key34": "5GuVrK6992kPoV9PhGp4aj8xhJHJQ6TkDWEwRE9UEkpgyu2LsCeuBs4qaeWhbCoZ2ECzPPUiqBW6HFcoFzemtmU2",
  "key35": "2NtDDSsXz55TvNqQfpG69YfWXfYTsSzv6BCX7duKeg6ePkVPHi2cEqMKPG2ayAakmwEeJRRimKRmW9PGVvowRTmH",
  "key36": "D1vcMoj6Ep4Nie97xkGCKwRUfW3UoXZWgLwTKJb1M7dpW4v3yQrmHzGbnBxuPXTKZeQCYxZoQXfAETCzpGZfbJW",
  "key37": "29KXvi5QGCMmc3GH2obkbYbcrs7HFTP5Z1qVj9rMksZd86xFJb6UjAJqTYzjwEmStcMhrvTv58bCeHooQmd5WNMn",
  "key38": "4YoNKVy1VCpioFgZ9QV3Cyx4ESAJoAhduY63iFfm7Rghx72DAoG4qciDio1MbegTuLqGUAqqy9SePJwBRpRXkrFB"
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
