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
    "PzZgW8ZQ54ohs2AgrvW1E4FRjrJxKVvn2tWq9rPM5eEoBaPYkXHocJWpxmie8kPXGEA9jPUmR6Uza4rQAMHwYTv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ZwCfYUqA3SwpDuCEdSqcy17zjMbZj88iiv648GXCTsSzohWKwY76MeVK5pfdJorCPv787n44HXjsHY2U2Tn6i7Q",
  "key1": "oki1aCTCt1NwfbK1qoYH32qx6kjmfsceA8rCekRznKi4DoBjpHoD8jhb7HkU9URUF6zYphg4YQ1Xt9LxAQbo1ap",
  "key2": "2P1x6iseRZmwKb5YxivCXmLuctC3zzvLQq8vzcherBZCEEH9g9A8Vs5GCfra2CBJ4x1gBGtpuWbyyA6GnnJ1bkq2",
  "key3": "oaVnLDHWYcJhCPHHVP2LiwGfqgVWbGy8uepZkKqH8WEukJ482KPuGMpuFe6Szi3AbFDdP5BWtFEhBjhc2tBaN5W",
  "key4": "56CPPa5qhGWsTS1eX4trX6w9bXBwTKGhySNPLetftqgHb9gE19pqoT7uS6Kgq6oM5473s3ckwRPdDcSwdMFTNNfd",
  "key5": "3NynPed8fKWp7BABBuPdDKXRsUExbmDf6EHEmk7Yi74oivkSzyuQnoNoBmDHMyeTKaKTxTSstDmsEQpFehU6PQKc",
  "key6": "24cwTgouw8NkEBCVPMmLEzasXwW9usXb8rbnJeREazcePBVnBRzdhxDpWkdrFQ7irwu88h8Tg7ZXUYJZNFkS2fpr",
  "key7": "xz1Ep96Vv1k3ncFCg9f56ts6PzmFDWLbJw1z1tLrirHamTnCVGfF3Cf9ocEBaRrB8BVRWGxmA8qwnaBgsx5n3MK",
  "key8": "oV1Z79P98UCeUqC1gsKm4QQ5aUYHNhUZYNYjSukHKjrycDtWxGdeVQFepgajTxyL8XFcPb8PuWk9tPQr2AAHDis",
  "key9": "3sxUBq19kQCJU5NRVqBYRbgrwWjoq8Wh5jcSvMgSjBjbS2Gafquute4MQRczkURAzbgFaac4YFa4jxGkpUMV98Ec",
  "key10": "3Y4GMZ6z7eCrfqzaas5YYrsuZGvxQeyUvV94BydZ8dZb1AMtJAn5Xird8GpxNUqug4jM6dz3JZEyfMWhZwBPsGkC",
  "key11": "5XwMuxLyTBTwGYQ6v4ScpsdsqT4CBru73j8akrA4vdDWfnQ6fuPyNKSJ327uRnWEyKofnWahbb2c5aV6A1mX9erE",
  "key12": "B4gmvCjn6zRDcU3sBqqM47znNNosEGw53GPZU1ZRQ6F6bS4wV1KjeRxkkBhawTQ1Ju6SAcKais9YBC7HbVCHJP3",
  "key13": "yFwC9QUGLJnR8i8YAMDV8bDP8pgTXqgfmYxPcZepvXioGGvYRPUxvdmXwZ8S3RM5EtMkwE3pTqVMisaTh6Gt5PB",
  "key14": "43C6Pxf17zZLmMZY8Cas6As46tnaNgAEfHpKhuQqBZzbSqFVrXt3Z5cenfgyA4pWdE4kJx5JNnP8sX4TchvznBru",
  "key15": "JCg9bqDVnvNp8YyexQBz9Em6aucFB9FwDZ96nLSudEH4azuWMjL8pi3JuyQ78KnwpkJFp4n246w367qMtaHpGd9",
  "key16": "4TUfaAZUJVnB23QesJ5qW2Cy1VsteGkc2FSw16ZAAEjFx4JQ4xNyiSzcTi6BDSVBaq8dxPPRgH5TXaatfphM4psk",
  "key17": "4ZVj3sYZndY3guvXPqwV4fPgn9YUjRygAyN9pCe5BWPcSe1kaEme5b3WGZhrA28th1SVzFTCMNHwQNwnNdem2tBK",
  "key18": "4MDEQtREg82hC8z3FDiafEM5TM3joD84CXsjz4oSZ7sYNnGN4oggTTFqNAeah3VDr6PuQ3bxFLHwQuuNwsMvuiEj",
  "key19": "3sWw3SLYaCsJ39jgErLfyxegDkbrqZNc9GgYH9nDy9TFF2WEutBuuChwAaRRoaES53AtBvUoXjcFz5spYL1aw686",
  "key20": "2uSyQBHabJsXWyo24d6ywhKoXnDiShr18SyV75PNkENdmZ21CzHBUUKzimMAyb4FXTb6Nir3cjb8wvFHDnUqBbtG",
  "key21": "2ciFpDh14thab8zK3qpg9RUELMuy8iBkvCLqsJvjHwWVy6fqeMi5nqd1fwAVsY91oBNUaeR1eBkRLvL5z8NDkVYL",
  "key22": "2RGw95ChyrWHnU77frP9ToEFcCVZhbNFQjoeLzzSMXvEJEQ4LivjNUeAVKWuf49jbjCuN9zRpqhbCQzXA57xKQFw",
  "key23": "29unyk1KeZvSKFMLv1VzxKQEmavPcadfXs84Hpw7GoUAFsia2jMYSWie4cnB9NaUzzCAV3dW2szNhueErFoLJoe1",
  "key24": "57N7PUsa7vJ2byZfDUKiPXeD9PP4qUMs9n5WhzLaswaeUQmtmBZcpZcVJCiCgTC2rtWxsa1RQpaQaTGk58y3YCe5",
  "key25": "3zYb4nrkRkDhXfAtwaAAJHHpAHRR7jpHPuHfjuHyLkEP6rrhowbcpyzMcNuxJgwbi6BeXqgUJrbBLYAK4DfWWLMj",
  "key26": "29VFTdA5mxQi3AKxhkEKLTFDdrGdMNsnX4VRNVLSaLNDF7fF7vcw5bSQ882eerXdt8E318duHYN1Dj8Gjy6CenfB",
  "key27": "5Gr5FRi2Q6YtJFYGtDt8AWhuDDhsE4s7zizda4hgv4grMbDUjJQghthdKUoCkpXgczvymqVmZm7oTDDmGgVuE8oW",
  "key28": "2HnhDDKHBw9oJxbCsLdDXfmtDjXd6Ve2KQHEbY77WWCLcVLSV3mr1M81yKn1efY6AT35wr3XbSeR1xTdq9E3K5vJ",
  "key29": "3ie2KmdWnrWNh1NNuLw1EsY7cAr18wE1KF3AUQmYGgBHsqsEY9rC9mgU7YJ4zT86J1TznwKdV2dmZsHyo4aTpsZZ",
  "key30": "mAKY9WKaHaXxJ5u5FcePc31UVpk4QVtcvcaLGPkVtF24LLKk9pxUjfqjLKDfVrWH76rg4aybpCe1QXHEj8o4Vn9",
  "key31": "3xVi7ZDRzQQNC84FxEnBfcqQXAaf1fLmJ1h8Losp9Z2owAf7xUVZJN757eBcSh5F945NAW37vQw3z1KbaBe9kFtW",
  "key32": "4rQoRVa2zds3dmBCpywdQVqYW8F39eRNATxiHEzLKMQbCVRDG5YgVX8wK3Lg9vNaTJAVBzwqXpdwkDruWMozV3ix",
  "key33": "KGfVLEp1ZWerMb1Au51tGi575cLhHDEJrF9oiKF65j4v5E8zfPbKnW5mQdufrNBevM4wDtgie8s1NDAmfvJz4tj",
  "key34": "2F3uCBWCWbKeSgwF9MBnmdxVPwVXVWeQ4Wa9JjTRjfXjoWtngdKjjCqnk5AJYMqFpkufRFE3wF7qTpuFXk5g4hno",
  "key35": "5P1yC79zUAPgnaj9boq6f5LdMPVMPEn8b2Hyk56LBZPDoBM7zsk1yWh8bSP7bmiy1nQBMcxkMKwSUkDfuUZDBQ3n",
  "key36": "2eVsiRVTrNT7ukVV379opeCG8Yr5a7YdvvP2XL4eaEjC95PBQteRq5pr6jpwdcJRw3FufgdntegqAv7QpeRibYZ2",
  "key37": "2jiCac4A2vcihdqd1ppRU224xe8eqcZymAW8HnZFtKsCHYcXkVjp98EkLYBiwoxdCnHqp4KUXc9RZeWtwHRvN4Ci",
  "key38": "5ACMi3aLHycVFQ9KAMCwmubewJXJ4iATwDuBfrfiDHG7DQbXatbXUabQRJdzasMmSWsUtBqfLB643FE8AGUiLL3y",
  "key39": "5H1ZXtBdX9oSeW4Fn9t8WrW1iUU28wdmv4FZxieExzfpQBk1cVTKqvbEjpShc7q6Gghqe2a5USRm8YoqanVQVdTb",
  "key40": "2hWW5WwiStwSJaXvQ95HxszLRcqHHCXbF35XttHJByXsBktQqCVEz44Sdfx7pgbZp2mm9Ktcq9gXvhtWYNjaLBxS"
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
