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
    "3sGeFeZKwSfi25Mzg3au8v74zq5g7dKQazcAPTT2GZGUQ6vssgVoqgSt2FQA91gukwTqe2DbN7SxRWyD6UhmsVHi"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5c3mawBwwubUfR159mHk95yzAz4PfhzSysatwFpa2bgzJVHnbjWk9Dbw8LG3AMLwBSHH9E43ikPRTFehTpdXrLhU",
  "key1": "5w6LshkyBo5V1M9EAmtLpD6fNUPZXCUNArxwzH2GggeBaTLWTVGjfCudBy4PPdVDEpGnbgd4oR89VswxVBTohe6f",
  "key2": "67KNhUhPGUVRdT7oiEcmLCPd76BZxnSg3nPNXNDWHKE2orxWQFK9D2vDXGvFF5C5DSzvRL4kpBoC7RN9fNxgASXv",
  "key3": "2FNkMCFQzfZrfU6e9CAZ38JjaAtMY6FSAsBhWN6hKCbsEibSXaoBwHcjmXGSBiH4avCv48pFqPQdprAawTf9nmP7",
  "key4": "FeADydiLAh4JKraP78NqmW66DfUnPQJrzP4Yiw2NymiWKQjfU91SnkRFpRr6iQa6mK8hbd1d7RE1zPtec7cRRiL",
  "key5": "8vxYtsMJhkMquNpa5fvBeHpoFCG7Sr3FtRQxL8TJJ7R8hbgzgZ6MsX8jUNeFSKHVTDHVrqbW6cAMMsnkERX2kmh",
  "key6": "31vdQhi5GGJJWZHjVejoiybPerQCDe3MLzabD8buz4nMY5vT9wHtA8GDePfbfu26Vd9D248i8EaMETJz5QFvkzUj",
  "key7": "HLmHw79RTrEv7LTpshwTmwQZc7kUKxpQcdTFAogpDPx2pfP4sowvDSqXT4xycoUHMnLNRZGHKP2yP4HcyjFZEvw",
  "key8": "5pMHrc7gLdSdq8imqdE4iWitYxYbbkgv8N3kTZMXCSagsXYBXgJNe88hGqJY3t6ytH2cK7KC4tqfrXiqSXkBbYKA",
  "key9": "5X25q2NDxkWbxABYEFKkn8MNLxEdiKRXGVfpRfcxqubRySNRZMANw6CYBvzYkfUttaDeadnWrGQHZcSHdYXvbayk",
  "key10": "zppHoqapRHfMzXCzqwiVDoyiA3VXsgQMB9CZBgNCk1hkbuBEzrzz6LkpAJfMLMR3H6Bzs5S6fYUJFuWdQfMHxuE",
  "key11": "4usNxfgxzodNs5yJUc2kKtfZrZjJvjen4HT943xx6ErYQTKKwH7ScToqccL2DCX6aCCyucXUbYao1ERbDP1fXkew",
  "key12": "3ZPkNaht4wsBamy8ykaYt9ow5ZpZSph1btUH8c1jmcAu7oadYhoYNdNfyD8qh3gSgGDQnm5to75uUVKjWQW86Wv4",
  "key13": "5qczWcrw29rsb3JsgxiXxV6sg5B961eNMLyHLkGuXvZMB7yZx7myytnAA6gDjeLyTPxxXpD7FEUfLKJgW15GMdLM",
  "key14": "8rLPq8M1obGrYq1PdEWxL8n1E6zjN9vcUzRApEKLaFTNQBRqF8yxusADzg77DtJNZYLLHxMDn8Xi3pPcwKK7gaW",
  "key15": "5jSGqhuEJwnXFjfPyYC8fNuepKpdrCk4QuaYbxqMavZrtoK97giomAMKZ4EXxAwQdR28VPDUKVoXZYKKnuME8ZA9",
  "key16": "2q4KTY4876BTipQhLiLUVyT8K19YnPWj3E7W84twDrzV7oCr2uruw9Uw4idRfZTCXXVYzuNQBs35YKYpuCrf8fWH",
  "key17": "5QVwRWdDWKbaNLNaxCvAJd1R1Zv9E6AxfkW4Cb8Vvf4WTNMvfc4SRj1QFHx6EeYyR54H2aiBACHeYu2uE6scMmLH",
  "key18": "2rRFZ8imtfocLMdjEvC7s3uxfdsh3BVRaLLapiCaREqACjZvvjW1fKJnS7mFP2djYpPJm4kgWrMhZJxsytox2CuM",
  "key19": "vM7ri8tQBRmwZeYazdf815QUaK9eH59pELVARNFuHQEgMXt2nr92iHdhQ7tfsWUU3bx8WyjdAJGAz35QzY8EuFP",
  "key20": "4AFRzqCK2oYKKnLW9NgoUwhFtVMJhV6H77W5Cqm2p6FGpqNaB9FawBgVxLAhuL22MkMws1T4kvrmzFciRHz36Zck",
  "key21": "5uiZxXgfk8RaitUM1WdcDy2NfRoSK2zCPsea65HExEmT6QBEfo4tL1txfcKwMhRPFbianUPpP49oS1EnoDxVAuws",
  "key22": "23Pi1viL1ACupd6UAwoPJU9wpZTK3fjJ8DsJnMz5cNRkYo7vjv6S1jhYHsXd9n4kwforUc6YXYDokC142LygKGP8",
  "key23": "3H1wP4bpvTKkWbmD4s1FJQnzMKjtyvTpMKfjccQHydpz4ne8ZZGEsDmdSjEBdE5yy3ZChio56u2UDJoyULTL7K3H",
  "key24": "Bt4xGLRn5dN44RevqHLgyaLju4VosTPeTaTrPdHTtKamCDZ2DcMtnwRxC2J29iqpLPEDhp8wqrQubgVwEC8miiW",
  "key25": "4aHNSaTkjeJcgcatJP9dA4cxNsLAg67rGT3tk4nqjvmaG8veiuh6kKmdYKT6muUtdCsxeCDGBdbRuJ9dPhYUyAQ9",
  "key26": "4z2EyAVGvgYiL55ooPbDio9xiSALQ6mUvsrCrAL9ShLeDXRhPs5vwqfmT7csdzhSmwz3oXdWAEJnMUApx2UtEm1B",
  "key27": "55B9YtHjWASiJACuo9Xp1uZb26ydrtTcnX14PifNEurk9NDMSckQmoQhBPEPGR9dCfdtvegJPeNWNSk8EpHEG5Qf",
  "key28": "xv9pTyQTRf1R2B6tmsJ69RQcTbnkcL3d9oaoNHqnnEozmiDLCfs3NziK7UuGwMYZhf1JUkaAfdAo8ELpp8eT4tB",
  "key29": "5r9iQxm1EBQqM4BAoBiSFQBBruc9pTTagpo2dzT8M4wz9mHGJmUT4a1dndqytDWNigRXp3i1iitufzue4cTutMVa",
  "key30": "5DBRZJRyXV5APXh4V1FcCNMPksm1cSv6A6sWctfFFuoQXvDybcyb5otbhvALeEYtR3VzDyAscZhJBe5WjWM8Cth1",
  "key31": "3NHrkLT3Ww8CJNeBMZ6Q7S6TnHgNW4SR2GarrBB5ZQX2jtDGqFf1z5wuibZmBWLDpPEhDWvSJ1ZD4gKYJV9Sd5Jt",
  "key32": "JnaTQ1swFC8V7hZY4kHhNMWJS6PchXhLZBskeVzLmXJy3f88ptypc8P85pMPiPa11nitSxwUJJs1QfBRFaFDpf9",
  "key33": "3YBttfJTC1yZw8wyTvCJJZi4sa397U4U36TtTPVGABHXCbkm4ZhgaBcDWVhj67TUBTo7EJUDQdeS1z2SEdfbXTry",
  "key34": "2c6Dvqnc6k4W8rYuijFCS3kgGioH1j5FxYDqoKYdCkHPgY4Nbpaz9vuJoQLbDiDHpmHHgmneeNdWSZmd6qFzVsuq",
  "key35": "5TccaJTFRid887SaVxqaYyFYAUKYkgxjxh1D4hHsLfFuNwBczEyufdaheZvUFbBP813tQ26JMJ44hi3JN2NgYbJW",
  "key36": "4tYbZcoeR9FD5zGStsYivvjimnW1ogBBumwyHLZGqFzoAqFLtNW6gkPNy8oZaHWyx3aDdxE5d3xXZbhyH4aouohi",
  "key37": "2s4cZFbh7vy1XAXh7M1jSYedrQLXvmAsW6LE3mePyFYizKHAb8SeeFat1sZ7oDUd5mvY2FX4sLNoFnyP3ewAnj53",
  "key38": "25Yg3zRwPqiVuHejewPshVfrq6rQ8ncN8NjetixHGUSEWQ6hz8FfyWCtKFAdbhs2rShgKVpcuJ2wXghcqo4CdwYC",
  "key39": "FApxDSLNbbZ1Taq9JH1AQSrorUXVDXa22mv4GBbhHNFjKTF436XE7yLe8x7qpPgytgLs5jhEejzqiLN2MZjT1K5",
  "key40": "2g7VANPtZhWs7TzV6yihJ2iSa98viPR3XH7PTxa4QkL2zsw8kBSo4phA7PEDHbZFSAXmW3WvVTwoTrGNneV1qftU",
  "key41": "5Xzk4QUKG3XuXJ2XDQVgo5Q2pXSmSe21uJdqtJrJSrh5A7KPYxKsi6KS9NY8fRZ7fEU4GdjSWug74ZMZwAn8Fxo7",
  "key42": "2aAeCiN5KvfxYQT8d4rhN45JWSEbMkSYXsed4ZBJBUb4e6ufqkApLQTpqg2ayvy7uJcvK8BjfgsJPK9Ss9bMfK71"
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
