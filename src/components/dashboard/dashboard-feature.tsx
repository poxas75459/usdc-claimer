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
    "4A7cFBVHCGgc9u9vBQXgxcx4ZDfFyAMEE8KHQLR5zBwaxjPxjWSN9eDwWLCJW4APKkcmZyMiAhyZHEbrkuJ4pq33"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3vSrJgkFFNSfGV6bL5A7sHxraJ3TTUgA7b2dG67ia8DptXhYvRmnVCfe8Byw6ssZX14E2fDqYBXdZyjx2tyaG4LN",
  "key1": "5awvybGgeWuqUK31V3DLVqauYbGddss59yp1kD6V19bFVNnQVUpPUnaM7XtkQsPUj4cYXuS5xALqfNEdKFrTvyAS",
  "key2": "tTBRLexYD1pxkmnidtbTNDXtWshNb2fi8yPShPdeHNFtLmvKEhJKJcz1Hvp12BrAhwke8AMvwPvv3ny2aP97dc9",
  "key3": "5X6ZQqRHrJWQL5iyDLGjam7AH38fjmH34eVRt2GjXKrXpVkCQxfyWJAZvf37Sp6NA6MXMwSWxtJTc2M4AnxKACJk",
  "key4": "2eCTacw7BgeFvYLrQ6qTgjQzfafcvgKTJYEiQZwcAGCqu3HJwrLRW2nYLJ3yAX4iuz1Qk2e7xNhAX7TEqbKvRMoa",
  "key5": "o1EuaHnbVHQ34DmynJLwPowZD27gqnGqSaAhDMxArhWQmGLUJ9RE75cgEndqebjY5vA3gnPPyLymq96fkFAAE3J",
  "key6": "3qQ3Q7YozaU3mgkCdkcdMWMzNv8T3ZmhFsV99kv7yhTYs5qnpHQtEFDPvvv3QRJwFk6AXse89NS1ub4qMAJJFj9f",
  "key7": "3NwyvQSrwGCHur1aJbB1nwAMwaF8iC4taE1nmqUpvUxMFCVmk9uAvEsomSP5mbMK987ZHX8qL5seSNyjjf5VV8t2",
  "key8": "3EM496uLQhZJA2a58viQTLkJS2LViPscNhJVkqZ7LD4BTNUp12eAgZgCNMdMgoFuFa1NoGzn8pavMRfHRo8MCV7x",
  "key9": "67dXB589DpP2pUQruBzExfP8t4TVoQmcb9fktwBtDsT5du1mtEFrHq8v1rRKaaMJvgP81RG9ZHHRjEuTcC26P6gh",
  "key10": "5uvisAARxtMt1hfezAWTajLe9V5u3XXjuYHGpKL2ydGRczdctfzD2RZTYha4ajYryiyApoz8714Vjb12stUDM3uj",
  "key11": "3uXq7KH3KyU7MSo9yVzPmaxRq8v7QmRhd2FReNC47bpiBHM96bXzASpAyLrETVJTjDHpjjjFGd1FgcfVCry8XwvV",
  "key12": "3UuXPBZtpBKeggLYproSmPRRJ4ACeeVRpPWWK6DdXbLKmV5SfBU4XUdvMmETSc2BWzjSzHif9FMTyDSMB2gTYHWG",
  "key13": "29eDS2m1E7H6krESjmNyC29oP9t1LKbWXufZNknhz3yRzEB7FVwyKDj7UWhxTUfnMLTkxJLcQK1HrjZv6DsBQx86",
  "key14": "3LBFSQSSopWMuXphwZyzV8jbNeb3ceLjbHWhoVkRjWqsSBTYGMwWbZxY9Lb9DGXG15JBUmVTqiQ9Qpuohvzpjf3d",
  "key15": "3wSm4gyeEB35LPUWxfRLYKSs9yakmgsicNFmUhgJbyJWbMYGFVBE9WwD42r5dcbZxnp3nk68tpwH16ckK2NCffb8",
  "key16": "623uLt8vk5sJbsPFW1zE6zVYTvG5SZKcuPciHqCyTn7FJ5KdBZYBYhJhHxJsF8LfijSSdCxtawHcB5xjudAuZitk",
  "key17": "35wT14WTVxYbz88WqEdLVoDhhgbHtWV83Mwsp7gzSZ34Fx1SGhaFvrb49KzZyayCHiNsJKx7hrgXVvkrTAb1W6Xs",
  "key18": "3XCd3k87rCMC9XdN78CeFCsueTfuLdvENsfCnD3GWpemruFGBnqrvqSUcNA2PuYUNSojNE9jmvez4R5WMUX3JqHy",
  "key19": "47j41vDaZt7fWDtn6JmTSddX2nBke1ZAesKWTxBwqSMfcoAydChgrgkEJhew4DcpQUbMJuykwuUV4LYpnMNc5qHh",
  "key20": "3vm1wctNPggKogcVESUPJVtMkZeJyNaiW3qqhSRX9XSXCWqJcLX2AYbrisafnjG1vkS3LH5C7jdLmLtdURG36Utd",
  "key21": "2z8pa53TuQ9wuogE6hoGGymADoEgvpKni9TxZFWWrB3C5vH5vzmuK1Hy5j2BHdeXkk9ZMGnsFYFz7aUNeM5dDvS2",
  "key22": "5HUANzwAqEgFsBq5roLnYqq54DZmCSvkr22G1VkTfe4puw1v8jpgyxgGKsGAD1xz6L2CAKYCxq1sEMUVXW2JdaFH",
  "key23": "56WRmMWqKJRYaPF6J8XCcS4EEzWD3aTK1ATkwAvC95eJF36ejgKZGgA58v3LAzqqJ25AX61Lf5KviEMMQsasECFZ",
  "key24": "6FfDHrKGXXXj6D5S8N9WHybt3CJ5HqU9jjieFwJY3eNTJnXKj85iAxm2fKXG6M7iVbXtQ4zWzg1fdZaBFnSbKLT",
  "key25": "2cruPK2muH46UZWNASkHD7VCqc47SBYegSHCaHw74AxucZmsLdbcmK5bEKTsqDVVia2GRvrqvC9d7ZXT6SUQDdpH",
  "key26": "3htHhvcBzizdGjURo8jPQ9AnSLDPREP1nNBN4s5sPHWBUYYDrrMYiXqdMPqLEjwDgvZ2hhRCYZH2MRmmZ2JRydRf",
  "key27": "FWHAXtD6juksDrbqrkW381EprB3LoSgfqLjcy9hHKznNRKLxBwWZ1JQzaBU23d5JqyvNm45WcDJ52rFhGKKcBSA",
  "key28": "4avhRH8EXJFQcKpNr9h1b3rqCKhU7cyQRV3YyHmDcvSx3fTjfjgvfHN6KN65p9sFWzabHzFGVV2MecEmkoMhCDEm",
  "key29": "5hWyGdCjmRusTMptHgptmDjvu3c8V59Qeh1Lw11xdNvoVjG1Nz9a3wuBKB4pq2z7ye2Q3XnvHomWDBXvc5TVMF6w",
  "key30": "3rUFji2A1PgAKRJjRbE5VYcZhY8tDy9ZTkf6b617y6LV7Bnjij4d97EVVMBs1xxrfGyGcvsmEJ8etEm4D2upgKUA",
  "key31": "4kskEMEBFmwzDfHsqr35mVsXR1bi8t52hRb3L61MRDrzVAxphGbEPyiCBHpwMWZAAo7mrFcyKi4n7wNcoiZPJaRH",
  "key32": "WeWeAybRHH8rFc7Uz8tEwsgVn6GCgzEUSyjBcuAEBxHR7ALp4Mg3MMdgAVMbe4qtPSF7xfETrVcfjwQvkDFkqZj",
  "key33": "5JbB1wMiw1zPpLD5Ro5YsWBcesbSpaT9jDCa92qGN98rMbVqMomnTzK64p7kQsDk2dXCeYBpP1u3bLBmpvQ6PCAZ",
  "key34": "oSnGJ91k52yJdfRNZHQdAcWPG32Vq6dxNDMeeq9Sq1BEQ5p1xfbtRuLkAdvLbSbTuh4NXjgMh5NPL3kZBa8NMk1",
  "key35": "21m8B9aN23VibvW53RLcbDqeSKA2sq7THsBwPQLpRNVvtnDTss2wAm1hgVr1EnNUeLrBhjNEzaUcAbwPdY9wzjVE"
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
