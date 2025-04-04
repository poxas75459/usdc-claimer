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
    "3wUYzDXH5zLY6Bfx9Qu6HUZMMMd7f6B7dASrBaECvdzXdQBGeTXGmv3xA42b8m4uvYtrgcytuvRkSq5Saj3yJAUz"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4hHy72R1NDs6XKj1syfSxhhUeyg374Wh52iyapd1RoqoXssKtvyibiqKeRzYMB8CDkAiN1NXtpg9vF7QNJ3vdFWY",
  "key1": "3SunsAqqHVRDYg58KdeXEzQy9VGJHUMbHgAqJLobQQdnyuvRcfeuh1XVUFzd9dtG1KaYRFtJd4nqSHwTbqi3P4YN",
  "key2": "a3VkzXqhjCySJWUK8eAsbRp4yhDGasiEwdc4ovGRuDuCor96sQFjU3swtRhGvgRouNQFdQJhAARr33ctVuTzvfN",
  "key3": "2gVx1YxYhLgTDymbXXnhzDfoAeQcEJ6kz8s41GG3aPRhevjTPsz1a82h8P8or7iSCarxcA5pr1fHyLojXNKXC5P2",
  "key4": "4Zvq1xv3zTjwBG3bpaJEp97MDnCFBAviwo36TGj48rLqd8i5AdzeGxPAPJzmZZ2AYX48u2NcuqS5Kgoe8qmc9NNz",
  "key5": "5J14RTToVWEFnhyvQJoLriwBcDcA4tDQzyxg2JASH6EMRbD8GeQUrteiWoNUAH4cdSzWFQT4EsjmSNmK4UoH2Hv8",
  "key6": "5BNTxypMs7NpW8NHWapXeLsaXjS4iR6pn5xy819ibFWeGU4soaPVoUk6CM5BYHyUG8EY9GLox8VmuV4ginNw6U4S",
  "key7": "7GLYd854BEhydzwgSoGEuFdFydFxNgn3VVQjMwyrYm6SXDnqjvREphLHTMhAD3Jg6ZZGtDvMXfZP8S9CUEoAV7m",
  "key8": "5RxytH1JVRDcyTqhuVovZRnsJ9FmNaPByQjqTVDBHKHdVAvFTetxPmL2vfjyF1yntLcozy2p4sSJ3EFh8Egf1Ghk",
  "key9": "24rv8Hg51tQm3LjuSGGFYpN4mXpB8JCDAPLar7hF96oMQTGeUHDz7tuWpxJfFh3YF3wSmGtNa2KF88TRc1Rwu7qJ",
  "key10": "52eSLbmq4AWKLkQrDZUp4QKtMhSGJEVefrBaZXnZAuk3C9xbrSNqBqrrQBqUXAzu6taGZvvn1rD7qg2JgcChdNr6",
  "key11": "3AvnEcAXoaPdrybz6ocdAuRejXBR4Zies651uAxLF2Lc9oZGEjFoLAmuFVbUjcFqFCrMuKpGNMzv69Mij2DbPMjs",
  "key12": "WmnY9C9rvYcLdysHX9G42Y89WR4pr4DvQsX9fFz5qgycow6dcRVBWSXuTm6vV5n5VnV3TkXoi1dwqQC41QnA846",
  "key13": "5KYHcap615MbkRUWXbPUHohXnKTeq6My61S4jQAdMME1cEG6DS8awi7oc5JcT6Rpi7pojJs6WkW8N2MccspkPogf",
  "key14": "4McFmxHuikHnm6A9VhCTbv2ktoAzzvjZeoALn6oPDf9uDDHYBquYn38ienT9oSx6wuRviAjcsB4KJf9Z92FKBNFs",
  "key15": "2rVcgK1aYQUqKHcLebY4k4N9d7mi7iYUR4o19FtfsX3sdV2iiWfFj6s4oB3Trtpcx8Rdgn19mvNmaVmvhQ4cBH71",
  "key16": "5ZwAUMBQj2nXw5Yhp2BD8vzuP7eXofHvxep2NGiEnDfZCEJqmfqkpy6WvSNZ95RxwNoEuE4tZoTfiCD1wq7ccpJQ",
  "key17": "2WL3VLN9aXJgU5VctHiLPwHmSur5jkhybYsqziHo9ifoboYBkhMgkAEZ3WvMARNB6wPbspMFsWZEE7CnoEo8pwE",
  "key18": "5ksJZLv1yQLh3bbJMugW74ddWewefoBopxkw51jnF7aLn7R77i1xYvJZobJYMfJCBRuuBx3VPp9NSCcxnpxvN9mX",
  "key19": "3BEwRyPJWCn4R1193UV8hEf9GT1hD5ANnAsgNY9urNdZWzPGkDyED8gFPL3k518NrEDfeZG6MsfNjdySSCxzgANR",
  "key20": "3dA8ZhCK1LC3HfUpmx6kcWQMNqVoLTsHgvMM66HSpYKByHsgYpCJ69cBMnMwn3YZqSawjAJ1bAGqYfMUtuSxFArY",
  "key21": "9R4YDCoZ6iqfGG2X1yLjbMVyXyTYsyc8ZHCSyRc1fRZSu5ybY3v5mPJG25rbDtzKKKqRXwh4okndkrGLo7ZgzeS",
  "key22": "5M1aHRRnzudiKexxLmGgKmktvFv7JRs1Z7GbeJ8K8pbEjhqBUy2SetLxvreWxYi4bzrW4Hv7cky962PxW4puCB5x",
  "key23": "3WwTSmjS6XcRaajqCjgFUeyxbYsuTqVzYfgccFNWoA3MgHTPjMbbHni5GTiKWsm6x67uWWRndGVnxTTNerGbrcmT",
  "key24": "4AXeF3VwSvqhgCpjVFEbsGMKKD1wpnsXHHBKfVjdQm1faHtkdAgXadkMbhZFop5bKMvwCVQiQrGZZ95jpWDSnHjB",
  "key25": "2v8sqL7Nt92gLd9U3be6xdHfdwujjQurSjRfe4ij9bygz3wM7tP3GB7maAx6MoDbE31LwTcQ3VxeNew6HsaEm2mn",
  "key26": "61BYGJP4B8PdJEZESmxRcYUYoYyTULxQQETZPFWJzqB1eAdVHek9CFsVyXdQSzpQung6px44kfMuCt9AqRXsv5uB",
  "key27": "3msoZgs1RZcsRSoBBgTLRs5AJxt85YbRRyUPygS5mLZYSroAFVX8A1ZPHfK7NQd19m782FgPrYpavDPkBDQEAFKj",
  "key28": "kTXYoh8LUR8z84wNZukWRh8cpGY15ZJuFQQxL8C3R8ez6GbLQGeFDy1r4WuZbeuxup8ChTRaemQo48sdPMP4H6z",
  "key29": "5HioqwZT5DEU9VNVwAC11Cfbzdqba5QmezssuyFcv16LjRSVP8piJVvQJ3H9R8dvE9cSWWFPYCpej3vWr6Sy23te",
  "key30": "4B93Lzx4mDsQSUkdofhTqy34TLHuuuSDMcGS4AfnXf39PRJbbkSPJSypCGQyUt6knnVHCdx2iaV6Nq4R1o95BuHQ",
  "key31": "2EsA9UxsS3nKLMLyr65AL7ezCXknHFJKJzxn8PBagMXRcEozaw7hYExaP9EG6PdK5rSpeFaxzEJw9zrAWBwFtEg2",
  "key32": "66a9fT54jAFh7XuFBHCsgoUKVvMguuh91GRcFWm12qZhZeHvc4UqKxVRfVh7ZQJBPhqPExUfY25ezA6CHLcsmdqq",
  "key33": "4mSywJbwWZgJLJnYr15ccodXjYWqQVWJ8hpiEGujYgin7C8Z6oipDBegusLigGDfpcNGxCp7VLMz6CKWsGGRK6Rq",
  "key34": "5geXyvXxjk2BgG5Kka3yvbpFHoT5cD9tQySw9tc6GzCfKE6YYWKdkRHbad6HfY9MhXyH7HKGKsZyFyJLR3VJYcqR",
  "key35": "2VfsVALvi2o9nzeDGzZhJW7kofd52miHfGQKampNsRW2FZmhCEa9T9ksL1HJjz3dSVuwYMuF4ut9wyJEiGCjuX3t",
  "key36": "24u3RqPCpn8fD7CU2zNgxH5ziWQeSRvdV9QVnxB2UWeB7cFskYSQzvH4rTHSz4QjiWgNfnwESniTvKduZSk9kdj5",
  "key37": "t8SmcA7p68THVD4YbQgPZmaCXHtFwU4XRQPgRUGQLguC3Rvqx1YJRwfVKzvPg1WtzPngDGuCG6MyC246BtW1RFX",
  "key38": "4K3VHskQdSxT8iNLtdqejtN29cTgLqAiAmWgPFzww7xxMw3abTLsJ7kpnnr6cNEMzbRkWdi6YJqHgV4g7QhoW6RX",
  "key39": "27NfgUNJXQwktUEhnoB6ui7sdu72g37yqJec1wagfgGy8SSdzjsNWg4gGtn5UZ3Z2RhzZrvifke6P4cRYkoNXSHY",
  "key40": "CpSU2kh2xqa5LoFnSjggafw4rc3Dkc9C6YAd3mnXPU5t54teJcBJgxNDhhYAsJbhPoD4hhyWAGgESzikjXsjq3A",
  "key41": "W3tbWiS8KYLpVzMCoqRg9E5rAWiGvh8h7pXaCUbaT6EPtYLZkW7ntwKBnDrx278X9jW769zY3HNpAjsCYQc1XNa",
  "key42": "BiYDeY8Qe9Q5GJxF7s2fzjSfU4HUe3x2Wj8y3bhygcWZbomrHskym69mUFGcNFDTGa9VMiEG8uXBnzewYs3dj2G",
  "key43": "3U8CUgmh25FWu1vcNe1hx2JhbcDP23HhLieRb8gsnrt2d9XP5gAf5Y6KrsDbJR69LRmZ45pqNQiqkiTuYTbdwMim",
  "key44": "5mY8sZ9JuP1pdfmfce8sNDJWSAQLmxzSTre4ArKwHXa6davXVzX9LfXLpxcyswPkhLXPVmMLMoQekG36gbwxPUL5",
  "key45": "wLquco6E2N95TzKDZFy7ijyNAQ3rMHkz3JNck4bjTVfhDAezeEyquYJ2eq2WzdybWtuz6faqix9hSChMe85DXtg",
  "key46": "5nz374yydbQ2KjaeUWiGzjJaVU8GGZBGc5qSj6MmvPyFXafgSrQY5kzqi9MtuaewfGSNU1YX27uDW2rgSU9jxChG",
  "key47": "5spkS8YDarD6tw1uWLXjTQmrvFhwbnVtxau87guDzud66gnBUacGHDkB9ZRcZEknHwWPYo5VWsC3RXcQUJ7kP8PJ",
  "key48": "4XKzgZTpbcAZMsAXLRDi2aeHtWR2gy4668o5w45gRijuGS9wVz6xVE1262QNwjk7HYht147sxFoLpQFsTJw8eF58"
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
