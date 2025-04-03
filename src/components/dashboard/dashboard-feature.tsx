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
    "2HAQLGhivRy5kXRWaihD7ktECj61eq7n41syb83q3ZK5oVLuDuEe4ZSgrDJHDkuuNLC1tUZY8mcKt8cuHenHz1Eg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2qGRTu7BqEnJzhmf3tcb2BQ3qbUysxeNqHzvBwhik7iRtCaPpJv3afwtKHBGRTySg3f3SfSaA2txNUNwTjBnY57m",
  "key1": "4akVJCQsCWZJUyo76MbF7KvonCRba2Wbs6MRgmwXTp8wVPi7JtejniEesUU8PRL9w37BgdsWwzMn13V8Jk6MBsCW",
  "key2": "57DjkZyXp3JqPNjna4n1to3keAcdkTQMKQKFYLsBFjPV92a5FjCihfJPSsuxpzmT3eFqYqh91UDf5GZNL5D33rEZ",
  "key3": "3eqUazn9ybzKtAsYAEvUCfxfTUFa9nNVoawqAwH8ypSbuvC8NAr3cq4L14auQNQ5EZFqPeL4qysoDqxiCNifarwD",
  "key4": "mgjAWm5Vwt2Su5xex58SJsYwocgFz3EFPz38vV7nCUAuN3yUeHFNY7mNxLybKaEuVYwafQUsFwWvJGb1roSZLFe",
  "key5": "5TfrwvBpntyrKj1iZtqB3ryvwvkhhEEsjqKHhaBt7bQvzwC81kaMEh44DdHm6tTUUsjQWTZqG238Wm7bC2afxgn9",
  "key6": "3Nn6RBygAePco1HECLeKJaEWBAmzRJVYynedmTuP1Vvu1Ra5xzS8v5gXUaMrAxCnXGMYrCGBiuJwMNXFAXFCiFd5",
  "key7": "3TnQA6ebMxx2e3A539c6rQrBaJCByRBz1wGUyzkWfmDsgwHaKHZTo9ABjJLCMBcayE4561sBKgUvnscYR3zQw7Dy",
  "key8": "2FWBMfcPFrSMsVUhdSFqhXqJ9qLt7fme7ExvDjeCdVvWwMdh6VYVQDeXWajbczZuLvQm84ZHhg7rTKA963nx6qyk",
  "key9": "2sBVnW6Qra7uXLgjTdNLdagr2SSfVGhwU7VCFZSoGeVmZAX74LYsf6YnX7padBjcYtjdcYGaYpmfdT6W8qPaseNK",
  "key10": "4HPjeLxmTQLdKKNVvcBf55j9nWGjPZBs56BY7uB8EUB3ye4nV9VxJzzans9AwHg5zoj9ZbxMcFxZV979QHf6EaSz",
  "key11": "KKWPRAukHmvNKSyXHVwQ34u4ZaXTyJHBj7w9ks6MpbCJU54op1CVFjKf1DJtXZL737NghKEw3YmSfHNPt7cefFg",
  "key12": "4n5Sr8kBvXqSgcJ4SngSzQuyFbWYu9MLSB86FbkPRrVFeHPme3yNDeEzkwz9LYQrng1awAiPwtxHpzdv4zDn4deX",
  "key13": "3hKixQNCwgtPXKbCPRJsh47gGoLoi6qRgAJ273a6qmPxd5j6a5ekVbi7iPZRwjERmK9JC4teoynuG8YA55tX3Kio",
  "key14": "3T7MGTYB6i9kCYxkCUjK9Nh2EiWDrse91tpXQdGgPSKRNu6HEhrLFxtQvkKwRq3q2g36MVJBfTBbwYAgAbCd86ZN",
  "key15": "4ZCEkdchHmvYZxABBuBq2baWk28yMdUN4k37k3635R2uoUjmcmF3A6uwe7dNNKvf5xbuJn2VPpt3kTib1Jkrik1Q",
  "key16": "QFczP9LKQR33EfvtrfmCg9SFaqpgBYzeJTg7a1Evn3WEfYKm67qUPJwHrXPknon7VQFU2oTYfsnxoP9dZ6eXz6F",
  "key17": "4up3x7bX1p3XwQTdmPBxvjrp6BENMyK3zpPumCnpvLWxhdvjphmrMtfuTbv3jBFdRqS1s7Gp3bZg8uctYpReK8GM",
  "key18": "GzmTRVUA58kB5fB1dUKCRaoVkcZqDkGVTkmrbtkRQEwzaYNaGdNhEHkUqAoAirHFfFs7aVj1mJ4azgfnNzgR3ZY",
  "key19": "2cK3QtB14eAmiFpkmrzGDD7JpDqJixsBG9czYQ5BwsNw9x7NPwfPfZCVJArcbJLGRriJFwSjoxyLWxkXwnKKg1zY",
  "key20": "3AuXbJNe9S7kwjfW4Kjh6g4kWecx5rMRrH2HREDz37W4cPRJbcsGCkePsgzBPNJxSBhhiPbxzq1jPKve9C3DRbC7",
  "key21": "3bChjtFrSnLoXeJWgud2RcKBu5G3PpmMrJJr967Gt3fpQTvzhEJs47ksM3W1LXY3Z3DUTGhpvCq9jE4bASaTBuag",
  "key22": "4dtg1s6Dky7anYDwQvbnksL81mdgQsd2fEBDKybaDJRrnxKXwTbEVDavLGX5cYxa756QqeZ2EMSZbtbHyQG9sMVf",
  "key23": "3weKKCVTombVt2ZYemBDxaM5nP624JriHd8FKWBMTqxBAqFBfvfJWgSRM4buqojw3jDS5S7QjfwraVEEY7ybhd5e",
  "key24": "36WFKdYXK22PhbaCTXRnTDkHZLcAVZnHZEik2nTj6WgGxnbWbcm1h5Y3XFckfJ3ACywvoNVgtRvR1TDRxC4wuoP5",
  "key25": "2ZVbN1aVVKWNZyUxVai9tQhBREre6Xu7CNLdYdtVsuPH7NhprP45u5n78fG2fN84DX3NjX47HiAkptNiZzU7WDvG",
  "key26": "3yrzPF8E8kL3RopQxsA7QcskcQFeeGrBxCCjxE3C35CaqRm9zLvyGRiBBsjmmmoGNArJA8SQi9riB7aTJaJpNqvZ",
  "key27": "s7Xu99whmMiriD8iWPbqDrDxpehMEGYsbLQDjuXvdqVwSfXNUSkUFHmngrPfDLHSoYaWTPaQbZaxkfYtyJZUeDN",
  "key28": "5FhhoV6vHyiwwMwnSLagQ5Qk2ktnuWYcXuc7ep2K6MBX6dVooGpskK2fAkMiiB82ot8Ke3tp6VphCeETMcYf3QYs",
  "key29": "3i41rWHmSawUn2QVXfKZHwQShT3kTp3WKoaqVDNXNvwsQLsdGaPbeF7nxQT8HaKNdiWAqfPokTWV9wPdCzetnEdw",
  "key30": "47L7YtVNT4otCsrNpcS7tCGjdFi9JXEcvatWBg8RJpXeYZzctNWAuiJ6VEKN2BxMER1zRU4gb2M2LQuES9EqXm1E",
  "key31": "2SNLyDZx6kRbPkNFSng7wJiZ7rLxHhb3xCMV3CsjQa6PmhrxYTKLvo88Tmyf9vB44sDKpjHUAvYnRU5KA1ijZJ17",
  "key32": "2j6JP3ryPD93W8sa2MYhxjPqLsH9j8XyTL8Xk9URraURwTfWgAhcTDkuZx3XsuBbRaAsAngTZ8JxSeMq6HhtcTi6",
  "key33": "5ZaUyJFrDiJYPLQCjQu1nP9bAVGUUNDcSoPRUc4ajLq2kP7jq8ufdsg3YinCQpJnivb2vNTqmjKJuinWN6uzsB45",
  "key34": "4WQTkQTEa3d2ziCVj2AbvDQKKeiPxJn11E8cY2eJem6fhaRi5BEVzQKLy5nRkEaRo2sqBhiV35VUpqMTSJjimKAQ",
  "key35": "28KJHmbvK4usSJabPA9p5sehvhsKaM89oJ5wLA7TtkiascaBkAfwccx2WgFn2bLpmbSfPhbJpopDH7WN6Ugo7Pw8",
  "key36": "287bSduEJWjtRq6RDG23RHbdPK2smR8BPrxbrHBpnu4JeMxWj8LTtCdq1uXeoymLjWXdpWLEGmT9bcGeSPswa9xv",
  "key37": "29zqGzHvryfAEFsUi1MYvwXrPJu6cKmGQ9hY3F3WbNLx23zhh2LMV1149zGXfs8FtDJXe9GByWJozk24ALnRfdMh",
  "key38": "3V7PjpWcpbdeU9tAbF85y5NMzsUyFeidvbbtgawJCdeDh2w7gQSunrPwHNvem52ZWiu3kQxyYLvjmK7ZYXcvKbj6",
  "key39": "3RJoemuWsic2fuQ8qSjqbfgRpohfQsmqoY1Uaqb7A2GhGYDXYVp7zA3MGXaQ9KnKQmCNt4HguHZYaNJekFiaqXmX",
  "key40": "349nbwqpoJeVcayzJ27dJ42ric2c2N2WSYG7EyyJp3W3DFr5Ssf5H46RjCGtsfPBJuxukTo4ARbLP2vUMP3acWdv",
  "key41": "29dhFW66UhLDMBZr12XJfNhLUdz16eYCWj4VKAgy3Tt9o8Fxs6RbAm37n3BfQ6NiVzGbUJM9EMrY59RbWMkQWjeF",
  "key42": "4yLH5tEavCuG89XWvXddEGjbp8Cu36kyMM14Kmw6BziTSozvviN1VTVrDfsVZjnA1ppsVhjAhZh3kAaWJyWKjKYs",
  "key43": "Dtp3z6PHiMzV44ZxB7SNSLkW8FAVMNE1KGJuKooW1SLxBS8HQ3tspcL6tAf9LL2DpK9bdsdg4o6oRkENqeriPt3",
  "key44": "4PcmcWhPmrHBSLTKRzjZNVkGEyhioVXx6Keg3gtAdLd256VV3ktfiDgNNYg9QL2cQ1qFnyqWuxDK6Pb8Ld6jvDGK"
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
