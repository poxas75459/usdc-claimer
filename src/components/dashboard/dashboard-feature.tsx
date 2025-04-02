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
    "mjhvUKyEsEZBs9p4aRb8tpFp1Gtg5UxNqTD2GkMufFDP72dkWb9jkGyH2gSWgyaGgbnuRHKdx7BWfqqKHfHX7x9"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XQda9sirMaawpXfhbqtq3Q152Brh3BNC13gmjrU6LHsxMdb8SX7FMHrFDpMWJ3hLhoU83Y8dnkjCEM65cCJMWWP",
  "key1": "quAi3ZeiUhMW963JHcvMkpkgnqMhw64D5D3hVWiUGVwqeNBaJbZTwmQUv2JoRSur1EwhCgPCfEvNJt5RjbdiQXU",
  "key2": "3g1fx3cSSFqySVJTdEuGULYrvt6wVZaTKBFqFdgq1aPuBCSAqCqWDpkJFLYeGCRHw7K1EzF5RVMainwNfvwPtoCi",
  "key3": "3oXVN39rTRhCRPJVDkjnwaH84xjcxvYZXdf9rWWmFWEqX3WjsSnAhd5iLK9PRCAzCrnkERLf5cCyquQfmtkoAL4c",
  "key4": "3mRGq7pUL8UdVgxEvAfHfhFfyDDJDBgPPbXFacLqsJ4i481urckZuLLYwgR9cXvHdDktCAGkSHRs4tB6KRQn48Qa",
  "key5": "4djQ8bBProxVxbRjRmaD3WTYtr77cYFsD5KH9Q3aKdv1tfwgsjy3WnN4NAkQncTcSFsgTg2viHnDSBtCtQtrfbPc",
  "key6": "4eZ7VNupyBAdM5j7YJwsZemNYMuzVFuGqQiqG8NzMrFoF8KEKTG4LVdYkuED4pMo1yc8taZaJPTCGGsDjKSpooLM",
  "key7": "2EnT39mt9dPxS8UHJAJARTap7itNd6RA9NwxwbCyobMwAoiU7w6eBV14A5WZ56PKGjC1BZYPvNussh7R3SQggvw3",
  "key8": "n1Nx6f3ZuehzG72aaTkkgTByjH6xEtE4p2tqjA6xierSWjF6wkpFS77LDn4YydV5T8rKHBxSeVZX8HsZEHBTXMi",
  "key9": "4PkE811YLb9ax4qP96KfdFyxhkLshndh5LmY5Drpw97tnmvN6usVnfYXoHYFAxAXD1Z5bBiTxkcw8QYNKU8uUVkD",
  "key10": "5mG8rD4xQUP9sEsv5K23yHmGmRMrzvssk5d3u7rCvNa3sUJYdbm9d4eibt49irB5QTtb17dWTguzNrRn97Ha3Dx9",
  "key11": "4JmFbUSxtbaag4t1CzVKhXgtxcLbb9SjVovbUdTGWTUdmHWrPtqjetKKvPCc7iTRWE7yEsnV8mFmMbMkmZ1CC291",
  "key12": "3Q1VhSPPMrR9h4RqcRxPJAtFQwCMC5Qn8gVbGprojy9bRrx1AZWBkdwpKNk31iN7Xz4mhp2Fs9StVjyQ6ZimQSVL",
  "key13": "2e1LpzoS3L6ZWf5wNxiFJ6mKW6FTrc7htN2BuQrH1bvWqxzacujMHu45rZSbGF1vzvaXjsUbHuYzAvd7W5o4ZaSy",
  "key14": "2c3NS44udv9sU8t6CiKsUQd87GfagQpPnoCFs5te4q7xpf6jKoHNYWnXsBN6oEL2LCQ5vgg3nUtFEUVCVmKJmWWs",
  "key15": "4zTDmhDRYJxtpz3hbiJncoeTJ7KNJiaf7Q9GLptfVwbDz6nVQPyuAssz1AhtPYPnXxd2qbym13J3ucFuvAArCb1h",
  "key16": "4Zi6YrQ9CVwzPAEd9w93SGox2zHuoPLNZVJs9feUepJy4jQnTmCqNdiNhY7PCZmWSfZk7tFK6ZeUZjrD44V9hvke",
  "key17": "Jb4YrYxuZRyYHnvEFLiPjgagWbPTUccHxBbGNCFfZ8wVsJFX4suFwe8SoSo4c4THFfJAmQBP2WtNdE1941hgfZV",
  "key18": "3FVmGnmh9LiYFfmFBPkf1r5SB2vqC9EKNehJv6qRxmPTKs4ufNVZDergkYNnq4h6MFjApw5Lv8BZZ3s531rQ8kMR",
  "key19": "2pqYC93x78AxREpvieH6NBdBeeN74d25UDUetZNcy5pJPPRd69NSdF7fgMASeomrR7k8CW1BfvDC8eCpjaspyqRX",
  "key20": "2giNYML5xzmgN1TDMhm3gV7eygDgDx15gVbN6ZNBBLB3MFbXfU3AhS2prBoGVci9HF1CbUuaRiFK2PsGnVWyouT7",
  "key21": "3RnQmHfdqJjoXdfrXob8qt7R7GqDNQj9stWU7FDvVWWdAASHHRkmfTtg5f5PngxnUcdt2vLXcCS5vFo8aoC7ZW3h",
  "key22": "2bvRkqUb1KHN225BzJJUEaAwUAfnBhNb9TiCf9QJdcxkKEpn4muDzni2kpQ51qqnmZHAftdFFZ9WcKZdcZpm3qzW",
  "key23": "2PqP96PJexUobKGzSaXx44C23Up98c2z2qdhJVENKzUtdVNW9HUwPfXKo1KoPTkkfrowJLpE4Lspp8P1QEUXrt2F",
  "key24": "2rhw7bDGi9FMBQHEpQvDzPVTTjvL3A8KsJFsruPhx3E9QeVW6WQNruB16eFCqeRMpzgxK2UVwSLLTfqT7y9iF8Tz",
  "key25": "3ox1VQ9hyXJnpJzXRFWWZMqXdVNrw2tkCoJFz2vVf3qUQtxT5Yr3wuGGENoTCyycTq7TGKUHSABXTPzhFZefcnek",
  "key26": "64GKTGeQwp8M81cbamt2XH7poyXf3SnoGiaMvN5Nhzs15ePA4goDp8evxqr7Xrjt98hod8mVQY7wgFHJvS3bb2fG",
  "key27": "2aGoBdmHaaKd7ksDRPf9VeMddTaiXFfeVYFX5Jam1FRZMC6CwBs7WCud3j611vxAdmvxoPNqfpPEhxSZVyd8omye",
  "key28": "5HENSW8EQUmNu4tZ9rGAdFPUDFbNYPSuzBDK15nXtXYkRja12Px8sdJNPJNyfXFby5KvTyFAsEKEhdpypfMpoFsR",
  "key29": "mX6AH25X29gYxRn5WorA4AeyoYjxLZTowcgWohvx3Vq9qokx3JgaopMAwSjVv7j43ncZXsYTJGM5BNRGVBBfcK4",
  "key30": "4eqbzbQps5tKH4ckPuyNyjPBfwfJw7g2XAXbPZ5cBqF5M3ahy6vsFrt8yKCCg6ocZCy68eFnDPyiNsyzkBHFrRC1",
  "key31": "3KTJ2B3sem7wRS5iNBRT7bn9ZXtxxcnTYWwPae2fDMRsbcX4zK6X8UTMmEQfKwAL3nxnmBRBt2o1wVCZzKrnm6X9",
  "key32": "9qFEw2MWXkkkys994U3Mk7s4Ecr4pp3yH88MAi2Urn4crD3rdhLX6hEx3rAuESPSCJB3Nyy8HADMGPosLGsTbR3",
  "key33": "GzF7JRn8AJiqmJaPTe26CPHXYFtAovrfsQw3S8HWYRdFZYmdsrFVJ35xkz3C9K8iMFAq4soLLydD1XfdqdftszN",
  "key34": "5eKryDuJHXktP8Y1UiwGGEW1FBK5t8Z1Hk4G5PwkED6GRgB1MNHZgXfyoas9f34QjvfuxuxBo2PLCwUMb4W9Tnom",
  "key35": "5bw4txUx2e7gzjvVVYwBVNTstYrcJdcxY2g5FJyBdXww7DEVTTxWuy15YrmKZhvTWqqL3W3eZfnUpj9J66xFpSiZ",
  "key36": "5YoUC8pnW23vicPTdfATFXpeS24sfmfoB2UgPehnzibozcshPNpzVSLp5t4z3PoBBGFzoz38JNTg7tQpmMXLcEoj",
  "key37": "4YWtwyUYw6Gj5YAheSw5THTCxCZ2ynz1j9jhKXKpAou61GKV8dtKwJDBSJnqGhcVr1t9zp6QESb31YvaqScAz82U",
  "key38": "2QEUanq8AnFuqmbrxCofjNiM75eFQLgWqX4PKDJB9Cek3JBTXLEZiuuWq1rmXhCCaqJ8Jr1dZBbzG5m34wgZMgXH",
  "key39": "4oDFVa2SrUhnB76xDSdP5hcXph9XRDJKbDgYL8CidYEUwiWmdnufCJPNzqtDo3qJVUXggRX3TLqnaqLGvu28ygxJ",
  "key40": "23CnPaZbz721C3pRzJLokyLx9kvooF1TfwGzTSvewGxor6gYFCswdZBiNxZaSxXLCX1ah7SDHvvxgj3s565XsixJ",
  "key41": "3PxXBCPqfZ3RPoVPhnGgToadUkfaCyGjGMtK9qKg5zJLdaAXgPpFwWzN2DuVK4McdjXegYXVHuobHy38dzzJ3oqQ",
  "key42": "3FbTyU3GjCuv8HUK6yH644mgdtcEUEYvy4fFNdRNjT52Jq6SFiihTxotUjFNG5C5W8hAwgLYN6SnhGC2oPUKTkqP",
  "key43": "5BvPH1fEbHKd7EvodsC52JFcfqSNpqs8saLrUna9mV13C9Pa1DWFbemhBeUMXcSZsUPeczS9TzGtKwTPmy8fwNjb",
  "key44": "3mXKoJjBU64v1A165iRGFtLGKzAXGZt4jKmYFPZY3wGtrM9D8J2UHLL2oTeTcsyganJZ3aCbMTRSn4XJNbnw3ps1",
  "key45": "2yctYWP7o3PixzswBva5pr2xfUNjshQid5n3h7Kpmk7SMr8m4HLMg2CciQqkh6v4M6TPPPYgqisyJRZ39v1fDdMK",
  "key46": "3GynNDmV7VeJLsxQywJBBRecsaYRnTHxkZZihzZ28fTSy3drUx5or9S27PY832uxXfpzeTV1b7EisLDTTY6mMTHk",
  "key47": "4xKtsBaZwDFhveTSzWo7MHi8qdgLZSwX3dBPqwTFnrESwRvPzfMysc8ytU8bge3Gy4T5UvoVCpe1FSLj841x4cX9",
  "key48": "5cJG8vvmDftEqsnAt57BepKYnX8ZEUCpG2Srfev3a6QEijEbYXxoQxxko3UxttcDeHpDfSYnoBgT9J835ckboRqb",
  "key49": "4tgbrRyJL6uNL45Faxsuuk5CnU2AumeitJHS8bLJmXzJXXRP7VGbc6JSDni6ou37WBrf8aMKif3DQ3Urcr9maoas"
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
