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
    "4QV58Jpt81QcHSVGfnz1wrdirgmD445QW8wfrfvdRMLkW8vgEq8Ud1bsKd6WayLGNyGWGM39vtfkkLQtaA3qwQpW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5L6bunbvBtRc5TZntNMFzVqn67Jr6k3h4Uo9SeSXfSbBScFR5qubhCSwmBzkZLsv6axbjwmKQ19MNwpSrHjnLGMV",
  "key1": "2wWSDynv8MvqFj884SkVGxps4pYi6aBo3VkMkttvp4zdziLkiK2G4eGL8PR5B4occ79xUg44ZfVsx926hjNMsDqY",
  "key2": "5zFcKhR5bJYmzr68kD63AoBAtHV8EUrboL1hxnab4NKm56Ph37NbCGTUBXchiMzm1kwxbvTQvjKRRVYRERoByrLN",
  "key3": "4df3DPPwqhdLmcEG3NPC1mQzVLg5pAfXEGF3Xbyh7aKYyn5cJqsT7UBZ8ZwftCpwqygD5gCmz74CG1W6ZWNrcpgN",
  "key4": "3QCAFJJTPu65GHPXWpakKMeqvzZBtbEpGQ7g14kWrz3CPVdNFdLrRf42S6YhRmyActL5R5CiTxdBfWe9onBVgnkq",
  "key5": "ohMfaMP7UhkX8zERHPkwFR8ZkP3hkJLtYJgRitkmrMByZYWpLc4AE5rmFQ1HeMgBzr3j5EoJNFcCV9jqUJmgVRx",
  "key6": "RAgeknA7bf21EDt5DBW9Kmvirzt9Ehr7p9udHQr2rxDy1e3V7VqGSMe8MP4mHhxFFBvP8BhbConwVmKbxbeFmgX",
  "key7": "3FVFaYJkRPQfr1yXLcZ1zDe13X1741zknSqPYR8Ac1CoQAqrcnfq45sY38oNeU7X95nJFSH9KFpanGQVfaz7YTqA",
  "key8": "2srJG411F3T4rWGhdGWScfT82LyUTCpu4nYQ7GKf2dgTVtXdkBiQBa4fL5WJUqHhUCghAESzHekyKwHamLjypZHR",
  "key9": "2FnxT8YixG6w9CEpRrQPsoFAZeDLdyACYX6tsgbaAbCoS3aMutpqsHXnGKokB5cFbZnHzgEwbJGBUHkecSRoZJjo",
  "key10": "4bnSWYZk6zA4RzkrsViS7CAZydBPTJFBMMFdp8odYZPPM5pGzjsup27i8XK9p84ymwWPEJyNvBhUdBEytjAT7Qft",
  "key11": "iCXZPP9n2PBeDLWPSnYE4kdqZu7HQu7gcYFUG3iVwdA6AWK7NJ5uNJg3GKa7Sf3qTTFv4X2U4GBjjk4WFBwu9m6",
  "key12": "361TptSn7DanmXCmZq2hZNGfTgv17yY4jEbai92eKEwWjhc639WGTHboM14HJs63EDHsFSsybUZV5vc2CcXCry7V",
  "key13": "jmMAddwiGyKd1biij3uvaLjNje1geW4oUxTbKqUxqZLAjokv2aFGsxchKaRQ3wyDPW7K5KzzHKhFAw3hfJxbUAa",
  "key14": "2Tvbycjs8Na2RMKCQFCuDpssApkVQtwCVyvVJGLK6dnnn1pam5rknejY9SnPjMW97ooWNYphWSYxyja6my7pN5bX",
  "key15": "3N1G1DxWPSBh5vuU8fkQutxugafXtb5vYdpDyXVBQkMZqidyABgqttLq9foLxwYaWcmQpok3XYMM1dymw3XmZAhf",
  "key16": "3AcuiCfAqtViGhfZLR6VHHjmMBAXARnRwMJs75cGbvAddt4Azc86hqYGxM7MAyr7hWXYoMKkM1Rm3EEvH92dUawF",
  "key17": "4RMz5CiXcj1JRTcZBh8rnJAevNHuxnHcECCtBR5eYm8iasgXJkRK6pk7yuYPpcMkJdo14BAouBhBWCD9XMWN1BSK",
  "key18": "4Dk2xy9Qze5xZQtvLQFTeJVarFyUYaTTE4VskvarL8QRyxcGW4VTqoATDhPFFJyCskYb97VBkZBUDh7NtuMpABLr",
  "key19": "5tmJUBsSQzCwqRXy1tyC6CLdmQRoqvSJwRL9ZtcA234f1PHs2uWc8QddEjb2GRqzqkixpuNagsGpdEgGWgEJ5zoA",
  "key20": "JwM5epvcsBCVJHUcxWpA2gz1dfAFbdcMfYgT6ATYmifLVKNqbrYPfCsJYNS17Ffexx72dbjbS4HbUH6k5w4EXa4",
  "key21": "4xsCuAxVDxjnYR77FrEPUxytoF5nd7hB2NXEX83Tt4gYXWgDpzP7oRCeNRKMpyMb3uC4QMxs6N5sVfV4krXQHk2R",
  "key22": "5VmSYsRnqfb72PFup7WKtnkC5zrMFQSCJvh5BtDauocitaZe3PSNM6pb5Q5QgFVT2xT8uf8URkBjC9Qw5G1UUrfC",
  "key23": "5SpJm7KqpFVyVQCecGBirf4GqXMxEiivUMYFYk1BXqGNbdVuUpDzB8qEWjhHD9Ux1rSgoAoWEgDpg1W8XchhY1Wf",
  "key24": "3f9caoGLo96aSy8AahEHZjUz1DKUyK26Wg5yG5rN1sd5Df17BhMaekpEVZ32KNzC6q3mQtyyN3mnYTV18XYjCD6c",
  "key25": "4PvSACFTEuDfHTm7sjj4WfnhyRgVEy4RDfkoNLjUU5cEQKhgL3Rv6b2ZWmSMtmcKFw6V9hKMCkh2KMNG38kLQfLy",
  "key26": "42V6hLa34SPzfH7DAMFGgn4SnzvMNgQxifXa4Qup3j5vc6879aK3gPhc7i1fmavxAFuQS2jnHfyhNidnb2fMYARN",
  "key27": "h6t2UhidgsS8NmwNuTYceqPCdy2Was1fg1Fcogz5MtcTwwRy43sEX5BRBoXarxQuDRinV4hzLE7xyHKTvPzAN6i",
  "key28": "5qBV6Ax8w8dKovsXNFgGrGwTt4E2ZyW5X2HwFGaMkGvL4QeMGxKyKDT2hVj4htukywC4YSKzB4eKbcLGpTzfMME9",
  "key29": "26NoidYPorX8C3HpJoo3FiLZeVyh6qy7yoFMkYsz6Z637fpNeuQh9T8nqRC7mUgFBHKTEJtxz1HvgjKLWUWpfnGk",
  "key30": "5oU7G33qomcqKGQrJh3vANH7uMgoSWgSxKA5LDwGL3d1k7pBxn3GuN5UugqchFiPpjtxvrP1m2hKPkA9ncJAeU5W",
  "key31": "2abusAmNVxvx6hXw9pYt2sjV7L4GfPczaW96gHZk2YrREm5aCCkBMVTQgkHQHy3iWA1BQfnYkBCX52pLdCzEsua4",
  "key32": "2sXnVdzoJuUVeMGGVXWU8rENJY9iouNqgWbGAHjmZCqmcwaHkHCq3zFzgmbTD8qULkJ787Eb86s5yh18DXwsXeqC",
  "key33": "3zVQD7MNt3hVezTyzC84p8B47Lm6qNUf6ZXt5VbSeJbdXNe61qzusNoPUzAPXRTUBC2shUtGMDaSPp69ixvL3GY5",
  "key34": "KVZiXyHQQuWVv5A2YrwNyYrTrnwPUq5yDFcxfkBypDuwhdDNgdxxW6GZwaQhY4ubydpfzuVAMYk4Q4AKN3qa7mn",
  "key35": "nxoYsWg5zhHjh4nh9yHey65d6STcuoyntFbA34W3Vt5x3vHhZKFfKzq5GnKywLMpqqaSxqGq7GG5uGZyrEQQBvH",
  "key36": "BasVjmS5ttFg6pgctpdJAxx3AeHVpdnraWQPJatAbUd3Gv7G6QS9zcWJ95SXp99XjdYCoF2dAGauztnBKJxvbhZ",
  "key37": "2uC1NWhGz9rqjqhf5MxLHLv8X4YKPbJpLwAqMu7UM5JTUcgF5qfoTsXAgyKF1uMiZt3p6mwGJLo5TnEitvEv9v3o",
  "key38": "4ezs3o2Kz3P6pLG5fFVWewX9ij9nPHKTENm7kD9HyVtRACeLTwho7Sif4GuxUAdB9Tub9KvTQXf8UffaeDWLFBna",
  "key39": "3oTSN9eFVd7hpCV5Z4NRizTQQGvTyuaWAkcq7nxDCnhootd9uURQ1ctTDVyFAWsAo6HN7uDbD14o8PWpF3j1cVG3",
  "key40": "4nJJr83rrbLSNTbDbWfZ6zhWLtFWQidyEue325Aq37KvaivXcrmp2PeXMRqHSLddTaZrck2kgnznLESXYQ5k1aYX",
  "key41": "5UsKPsRkBwXYPVTju4QiwNqUDGj9R27tz8nBhpTcvYJtM5SaLwUf5ZeYaWk4Rymk7LmFNC2BgU9dRxzqUoSdWm9U",
  "key42": "5u23JBScjxVNPwv2dgzvvgWuTBkYvmP7EwCpRPSfwbg8MQDjwTKRWNmUwDH91fqPPBSy8FW8PSz8LEsj24zRxgZf",
  "key43": "28Yp8z289NDpXejgwbVuqFexWURUhZYvRmbuLBfdA5v95hXsh5j1hYuSNSozJuS4xJzkdc94Yey373iBPEzDqhrm",
  "key44": "2yVFpuMGDU9LCpVUzHtuUAX2dt2MuTqAXhGGYh8X5QdaU7wYUGGe3EfJYznKvAB5LK1hQemeQANBxYM4YBKp8Et4",
  "key45": "269XikfiwFYHtWVY5rzYdjgB8TUzUFnZsgHMC7pKsR7He5ENqBttEMJEhmBzajZ1K2Ah9J8DJeBkvdo5L97BpqsG",
  "key46": "DQNVJo4BkvPSCuwSbChXdpo5h3mmiBUT1Y5qxd6vHaGcowfmkk91N6p1pqubGzqYsLbrXkad8VFdtt8p9dBxK2C",
  "key47": "3A91KVH9M9Msv6RuSrYhaixa77jtKqaDzi2k1699GPZZabFuuJVBHSpwvrXo3Gqs7NYYgTNiUgdFsdaPQ5dRo6J1",
  "key48": "4L4xwFA6MBjMEbuJCUK8fBoV8UqNu3aV61qVSniKJT9vAeyAa1LgryDtLhxpN6Ruc7EPUoAQzk2FcTLbFA7hFS2U"
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
