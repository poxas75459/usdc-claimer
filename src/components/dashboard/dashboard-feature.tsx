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
    "QpbzwPzh8FgWCa4eA3jMBBFZyDNQGanEshnFVWkTXfhRgyR9X2YDmQA6C2qMktpdLpUnQMCeQ65anB7Tmqg9Vu2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LTpgwY1u9kWeo6GqwWa8CnVjZL9qVkYEdaE3Vc4ydKYECq9SFFo5KP2D2uuuGJmsP5PvD2kc4Y2DVpZVd93mGht",
  "key1": "2pXJQeAnwxHkHzq8AY35axKWQ8XEiBPs8hqWJVF3AvCFs3EB8enEmfu27kqJ4659j1inzjvQte9uWzbntGxe4yhg",
  "key2": "BAep1uNUUYqfGsyC22SsccbN7Hz2mbRCZRbfe9S9MV8VnT6h1hx2qaUT9c8wDj8vS7D1XnbwoY5evJBacD7XYub",
  "key3": "5Ssrkjw5Bpzc9zBRjNBEvQTKBNgZSDdw2GmzewZmVVTMKPZqdTkiB44bDEVKTFzD3HfdpUMtv7wEQ1h6o7cMHay7",
  "key4": "WgTV9971PoqMd8Mkpw2do5uQqEQRq1VGvHdujF94HGH2VzrZeJxpCe8SaT344tLzMcb1hLnqH9xtfo4XovnJnVr",
  "key5": "27FFvdcaNaBoJ9tSHjMJgXShFtFRDg7kHc3EoRCrL9k7cckHssHmxRmKVRM3XtDRq98ZznK8RRZwxvXEP3nnxsDb",
  "key6": "27Fu7ccwWj9pVhuNdx3x7YVLVWM32bB1Kv2vW4CXpwCe2NBWz3f12jwAqH8MaoXYQkDXzcQRY2do3nHRpNQQ5sdi",
  "key7": "5fMgCCFXejTarC5CGpGAdZx13qKoc3sT3dkFY9y9dRCKM3jwjvnkYMd7vya733S7XxjdPFEDbsrn933MdDjwHaYC",
  "key8": "p3Gfay1hta8jzmabxWvSDMDjxpNJTUE18tbJvpbvicWsz65Busc9qZBg8co5td9Ykr2nc9pDZYGzUD1G5t2Xcab",
  "key9": "3nDSnmcqryUg2WsXmJCQkCPMDBMd5gnZzN4fz4KCTb2ay4e5jaZDfnrMJowNeuEp9LRRC9wmUPYKtcKfzJucv5yP",
  "key10": "DgeXrnww4hy9LGmvUJSzpEwoDC8NsJa41mBiMYYMSNVMesziNwAFAysJgG4Lnqbj7WwZqwLJxGCLwPPUrNhagvq",
  "key11": "3h5spWqzY57QLMv1Ym7wiD6XTNQEP5yvnfAnLJXkBmBmFopSZ6ePze9idRW5GyPNfDbMaJR18FZTg4AK3AiSsgdm",
  "key12": "4eZS1q9SAefDiSobvA8uJWsZ8eyu1u87vSb36mwJbGSVtZwjTfngdLXBNvVhBuPBYZuTRVUp2RNrm5S5RDZNAK1Q",
  "key13": "41E2RkarUD24kUV4bLAEtfoptGz4szTS5eJwv4utHBHgYv8pkYsXHW9Xoc8iWrHsc9KuKgycm3ZpFSHNATgRj33Q",
  "key14": "2MSxX5y3ZTwnHgMX9k48mQequAsdfUqDn89iotkNFSZJqQ9w6VgbAkwgtPEKVxvzeUNh3urGYgs14nFN5hjS1ESd",
  "key15": "4itptK8ej5hR59qQbcmkUfdMaXuuNG4oQKFEmenWF6TnkSrtVsV9aU7VBmWaZHFzk1NLSWjH5kA2aUq9dusZuSTG",
  "key16": "2KbyTWh4qt6MhDnckSmVSkQUyycDYtcyFUE7VoL6KXdfLA2f919E7PLnS3Hy9M76MZFoGh9ZPKkY7XWRvhDiuQmK",
  "key17": "4XCAPn2mc7nbTLnu7hcGqr3UrkDubi6NZNDDmyKhW1A3JZUdDps2wRmwwbeCtm9xM6VXXsPCg2TbxbZARPQC6LTk",
  "key18": "4sVfkRhucinPE2him4Mkns6b3n5NajjucB3E3E4Mz2rz9x7p4tXTsPz3aHPXvxNroSRip3icCCqRQhjdg1vpoguZ",
  "key19": "EeCrgVGWErDQojpfb3of5FwVs6Ros6j1njg17yEHSRi3SzybNKFikaKtyX8Trbh7nWMRtiJjUFWeovWRpkKJC5A",
  "key20": "4WKjZnnk2L1BGFemn9Kw6ga9hCAMgjeiYojxAS8f45ByGhuQ6xS3UYXAyXB35NiS548WaJ1J51wo7YXxKi2VZeSe",
  "key21": "2Jaq8zCaZsaDwapKq424SXL5mt9e7e5ZPX8SPAdp5ZNkKiTbLWEvxTYc4xqTRrBcHY6m9QZxdsoXR6BQsmv1SvT4",
  "key22": "k97ppMS4kTZFuX7eotBYD3ZAdHTV4MsaQtMpaTFpkc6RvDddSfTdKUpJz6vrHcTNQgUhYMpJ4VRV5RDtNPhQzBh",
  "key23": "Kbw42BRgymkPKKxD5kEqE1F1C2VPFKGjPxUQvU5a2ovzThtUsXcHW95AYLdCtFWGkLPJXioMuiPS3QBgGc58Z7K",
  "key24": "2uxKAYEPzCwQ16MSmhVDQgQppKSFt3azySHt3zJm2Bc3ib5p3Ku8Ck5grJFyi6jdirZgqkcYuzRhbmiG85WunxyB",
  "key25": "tTD7FhDYRMZzgAXRV6hChBXVrC9sMZrLhFu7DPiPtanzigJA7ehvUMSBNVJGPhP7RsqEPcpoEQE2pTdAnDXSQdw",
  "key26": "3qvsPfjM6RWGXus69cH4PpTvifyk6bKHqBEuYQe4nGmA89wQJ2B964x8WUEmUrjZQwJpDtR9Rh2hgPsrErRSMRkY",
  "key27": "5EKxrsjQEiDpdiznKtsAeoetu16NL3ERcaHsBxuC3u3qqZXKbqU5CwTwFGJSr2xgoCm6GYEYwsjKybZgzso9Z3EH",
  "key28": "8mAh4EETJhums1oVMDuWG1UbPdhD5EbhGptqn9psYcPoXQAioEBj19Ak5bKZBu7UBYHBwrT4T11Hps39RtfB5T4",
  "key29": "247LwHjkPVAEsCHLsfUXnaN3V4GeayBkCqXcv8wqgDQHU4oUtpypMiMEjApGC7cRqyeg2Yfy9E13bvKGWRQ6Qymv",
  "key30": "4mR9V4sdiRnDtpEFEwNxBS4NVAvRQ92YWfZfmhbaBet9PCfbuAtWRXQ7mVrmUG1K8M1rf77kPH87EcYjA5jYc5rM",
  "key31": "4EXw3Te73gnbvfwQUqSocWHJYKcwhhGYUzKukBeqCoGZKLpvDBgJ8BsbGrYjGhQpqqbUBCdbTQbuRKzkB9nrpJDc",
  "key32": "Ka2SoXKuoM1UA8iRD9SmNVEnquHEfsLQcwCRP6FGyC2em7sMDv1Sy91Kw284koQKLR4ctYYVGCNZHDkBFgA2cqZ",
  "key33": "5R8jTkyVj1w4Z6JtYTswx339P4SFUTdhgizea4i6Rqrscdye9yNmpY3UNwdMiZ9TR8uRygbwmYi8tHbw6hU2Vds9",
  "key34": "5ZcScYot5m9U8m3QMK8Q91GxnoFV5PZ7UzddZikAZCeXsGCXpSqWyZ7GCi948AL1r4iEV1ZHDQZjPDomgnyq34j5",
  "key35": "efsGEava6zCVaDVtCQsoLmAtNsSWuDupZdCNHDPXEiymJQEBNxRkRGwcLYpaAs3jpJ6VwiJHgxA3aSG8ircTRVL",
  "key36": "UHVhQUTcRb41aYndkuKMwqpTgU6kTeSq4Kn5Gk8hSjZqs7Gbn3utYWEcxkTLqiahZF7QK6ioSecbpK4rANmC4wt",
  "key37": "4ABa48WU7cvF9y2GyC1DQV8mTxv72mY79FcAy3cJYHV7bVM4sbGiE25v2AGUfaCkisER94fXXUovs7LcU1syNQc1",
  "key38": "3WLDVhQEx8nD6wD8oMqyXAkSthA3wzzC8jpey39tvz5Pe1uzWPhyksK51DeqTpyB62iafsnRvHKC2sxpmwzf22n9",
  "key39": "2xEZJ4C9gvM27x96G5KoUdsCE9paKZcF47C7pteRibHwQB9TL6XootUTkXqoei4g5LBxzDvTYCUVucF5g6y9Fnw8",
  "key40": "5ryUehVk5Mbf4aiZFmewQnK4An2v2hkjBYNzjXcsSic2eLV77mv1JqCn4n14uCDpM5m8mvFT47pW9MC5b2vSP1kS",
  "key41": "2bTnfXyxHFjfQjAXmBemhC9Aon4tTp7SQFPLFg6QUapbEpTABgpthuMfZNnED8ZkXXddvYFoiSAHhkHnz9oybyR5"
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
