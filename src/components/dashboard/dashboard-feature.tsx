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
    "3Jt3ciTW8ZsRiZDaxXqF3HmRBdsTJHeuhmvMC6nAvjnGNY1iDvK9CVP8SbHgKh8ZEPk1efmvXv9rKRzjjGLoihMF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4CRrAvBcFY5GB2pzuK1h3v8WDdQP2prhzdquZGNkLkA3QSNn46dYsVdQAouLmeYPfDRmyd5tp4SjBYCBmSwuwESC",
  "key1": "3VVjofv3wGVDFMygnAhGDvW8kLH48PFP8bbUppdPZSUBz4mbh1QYWZCcgZerLXn3tyqDSBSLLfNBe6s5PMzsrFW4",
  "key2": "4KSdw98ACnmMMshDeDfMEhGvL1W2WmSufkZosHBcMCiUuUmp17bid2NxxqFNfDo7S57MFXTcDo4zMwSL3czeP6g2",
  "key3": "bHbszjjjqJEqaxxsBpUS3mAqHrfZBpZNpYnB66ydz9S9XsPF7KKpT4LGankiAf6H8cGDt5pstwUVi1PD6rBAuq8",
  "key4": "39STyYFzi83z8EbjAGxogERt3YatU3RpP8ztLoJPzrErwFmDpdUK3kgnwxCVxFoCqDk1Bgw6TNraBv2LmyBHs1bX",
  "key5": "eMBHU8J3R1uHdwzRtMtERETwBBjvNGDHHM7naXXhuNUbFfajKhbFuBw3R1Wip1rKhsBb1qDqQqtYNbHH1KL7Z9y",
  "key6": "2X8VWYoauoE19Wiq7TKfJDdNuQd6JC1Kf5t9qK6KRMGcJBR4pdPnizvczqCfrywSxpNmPScbbTpQAn2cPCnQVaSe",
  "key7": "2gY4dNGBWy7AH2HVpHEzcYozt2aA5WUxXFKRkVdahB7aQZj6PrmhLREyLDoz7aNW8sztBfkfJRoRtQdG24Dn75t",
  "key8": "44yA3kWQUcAXiqoSh7vhBWiF2eHMaXzJXqWLxd4hqcT7ry9fENB88xC2B9rPHxEZeQ3yhGbZMkjrYrVeJR9Sj63J",
  "key9": "2cQwEDgPV1QVVfoRnRxCYo6jH3KeJnapgPosGzm2wsNLYz9AxfXciFKQqoMgB8fWq3xXYLM55smAESEu6eCWGySG",
  "key10": "4r26rYBfqDV9t9VehzjTdGTLVpqY4NxsBqSjfeqjutG2VdFW3Wnxco1mziJozRpcS5Z4aDUChnp6Cf1juvoKmUwi",
  "key11": "H4DFuixPxMee2C3jdwW99gDhadxzFQkqRWVSxKBHebxE6TbfEG2qdPsydSqJYcNUYT2ejkeNeQ9GwYXnT4y1dmf",
  "key12": "2Bn6aNjTF1GayzG5pxbozoqZnsCvTR6C54sZTPC3Y7wjfuTDmoqinfbBfxheTZ5EPuWjoNB1Jcbdga5j71uaCcrA",
  "key13": "3ebt5bhyF2pT4i54g5efFm5fyaEGb9U6xUD9WbneciKAG1Z9iyrXuF2uMvMvrvjYpcgiD3oHZHcxxVE4ekocdW1i",
  "key14": "3s4brZfLsh8TMD36GDrkGQLU9PRYmz5yGq1qYowLH9pK4Lhe7hBgjy13LuQvo94HDZfHLZ3tbhp5hnYrv7Ru9mrN",
  "key15": "4zd9qJ5Q6enDTrBsPHYtsFzhNGrYc81NKwNAacxxfrKXKxrzUmUvgjhpLiQigtKefora8eBbo7EYzuNn6hvFpobu",
  "key16": "3FPABq8y8QnEjkPgdvruhDMDkpUnb5Qx88cF669TPYudssLZiBQAkz4SnCqzZDuqeE3kifuhWWhnqnqR2JR7d2zZ",
  "key17": "2tpwsBqbwwfrjWKwk2kzzBqCYLp4Ei2p6cr6LsKRqiC9c558SFzwwrcwSZSiwdtipWmkhsCT5sDon2uKTAWJewqz",
  "key18": "gg4774jhYXu3jthbRbNp5Rcaa1KAzLDvdGbzPcyXhszR2JXNChAd7LKiSE2rZurUKsJmSU5c24JSSyBcLo2BCkn",
  "key19": "5SHN1fFFD9rFG9xD9Y6QeRAcydkw7xTh21v7rmXssgFWVfJaTGqizVBHmUX85ae2AW85YSMUZxD3vR6WKNsQz2gB",
  "key20": "5xmNo3XZeociLijxgmFhMkTMzob1kkSVNBM1nb6tTUHsBPruM8rCbFHgy2jGdATiVyH8R3BXxS7Sr1DyaPbtPPpA",
  "key21": "3SUNs74if6XEsL9e9e5K9iRM4RiLhC7eZmGeH4wm15xZganbQUbQNXwkWb5K1RAMQDYJCMgmZM8aq6Wb6XJ9pmxj",
  "key22": "33QEspqETGri926dx1U2Yv91h6gcooJZzshG4rMx2uPtn3zvtzJcRdNmkwAe1FXauEFCHvx3gwB1sXwe3USNLWS",
  "key23": "3tFmiMvyF1vLLqejgawoXfFNDXULE72iZ4rDjaxcHZb3FYuYnPFRRhUvKmgEBXPXXnHgsrDB2oM5UUmdbv4PAdpS",
  "key24": "4wQdawfQfVVsKuvT7j85SvV29hnd6c8zVpMo76p34vfLVkzST6VzxHw4Vy2kdv8b5ns5ysnNWAgZt3wWE1TzAhqS",
  "key25": "5DiD3UgAB6H7waESvi5JfZnNEMbxtEarjyTMGJbqgC1dbNAXd3hZgxAeFZjYxsGSd2tmy481t2bUTj26BmEY7TfK",
  "key26": "3csaAGWhFqP3wwhh3gKfGZ55xx5kVWdN6hNMQUvkspvQR5wsDs397SJdA9NqTLpCyvCuaqUctsfgjwfqJxRLoJXh",
  "key27": "5AmAFb7en2VX1wUKLcm6j3CgVTfKsoGCxVhyLXHV1Z1z75zJuh8LGV9RAAenVDvF7QKuB1f8aUuA4P5wgJRFRfvT",
  "key28": "3T2iGz1AmQQRtDJPdXjRiUfB7N4VkeT4reZGJVqoNRV9tyA292qeev2iLqutFBMuLXv96U9PGgFcUY4WmeEqajjz",
  "key29": "2Z5dzLoTp8fSfz2eXfxEhmxmC3eimxTbPnbhbsHc7KCWCYSa5AVF9RJeC47RjTjsEcVTQ2CRpxY9Z1trtZSDb2TF",
  "key30": "3sWhYjAApJayH6GUvLuxDqNXMFK5y4bwPx2VAzJ987qZzG9kTHrzeBHjG6ninsZrMgEBgSN8UrMkFUw7opuJA2b",
  "key31": "76kVDDptrXum6EqFWMRgga45CcRRV4ptbi4L7ZDkv2NUtZgpAgNDiYRdSaCwmsGWGLiXzT3qy7GASWgq6Pps3is",
  "key32": "3bBwGWqoC2AKfruMFkHCut1XCiK8715YpMbuwsWF8UKXaq3KDFbRJarRXHonEAYWdG2bwmjqVqPe9i9mPteR5dsv",
  "key33": "5GTazQjQ5UJ6y3f61rr6KTCAwBY4QEQywkP4EZwQrdWRoXcHic2psMpn6G3FyckVQMuooK4mVTShPkCn95BQJRUe",
  "key34": "4vX3rdouE1YgozJUYgJ7TW1GazUbxQGBLJ45Qh7FGJzAxdJDbhHe642S6AWThCeipMESxtiF6Lo1kU7VJY4iDCe4",
  "key35": "4QKDakJsNs86Gc3PoH1jM31LkxYvusuXMpg1EbTkyzB1e225RryigFeB5en8iVLF6bmDTy8YFxDyhgTTQ9x7L1Kq",
  "key36": "2WiEAD4BvP7WkrPjtqeoZhGgJugAWqYyM8nRAFLBHeqMxGf7wPd99ydbdcFLDL3qZovuueKdGNf9ar71K8DVfZxU",
  "key37": "5JH2A78Wvt76ciaGGi36gcHWGCq5hkT9ZYwp1XoQUPYdG3BoUrLzsoJGLhL5Jwja1sUHqHRrNfgFCsg88ocEVmsv",
  "key38": "uFUmsKz5WJp8NkoFzaBPxDegccneVBK345XsxJfybTFuRxJ6Vzyos2xykRyAbeWXNKkCBVnhWzhEg1anNx9gUzg",
  "key39": "5ii4cLim8hbt5Au5neTHzZzJqjaJT4zSop3fV2AW4sALU5PRP2jUSRPwGGkMyX4R15E77kMkGMmY4L9u7SaWie92",
  "key40": "5CTBTDJJDVrzZaBJbWgqViEmiDUGfg8S54JuZ5Puj6Qmcwfd7rj1AhAseZzZG3LNQX8h4P5iA1RaQMqNRRh4kPu",
  "key41": "4kbtFnVN6nBv5iYLdxMC4DnwFPLM8aSRPPui1Drd3t22KDqKCAvyMHm2ScfNQm8GfF13Q6P7DzP1ebMHFaXnGyEw",
  "key42": "3f8UxSzFf5LnSRhj8FGZ6KkB7hpkJunnvzxJd6ry5jShcLQvLG3wdkNrnRs9TxaGrLdNRmJgZxVjyvaVCcbRDWQ1",
  "key43": "N8X6fwnwsEdbAr37U42aUN7FLoJHq8gbV6bepo54MVXtxrnFRzRhQ2WP4skMwUifiQvq3Zi4WRXMUoXLcTcmv4k",
  "key44": "5NrrD8ncsgjbBRUpi8UnyQzX4Jm57hGJJrEt1WwV1dwGwMEwwiguPmjNAM71HttssVsWWpBFCJZKQqn2VfnZVAKy"
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
