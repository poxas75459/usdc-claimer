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
    "3uZXTqF9WFGtUBoZFRyx8tBMiRjmxeqLLcDw7dEvfEncqQg2wgRoJTzrw8eikRRp4AiWH84H8YJM3uLh2QpYVAij"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2REK1QX8TzG7h4gq8aCbfgTx5hSPvjcREcgCqAF8Lt9xAMDyK7Gw5ZxJBAXsewdrR57XBWNWKmpPWxwRzfo4thCD",
  "key1": "5kpVTY8GQSeFXECjve4b7jrQ9nrwzFYXED7Tvc2ki2ZY7vZbke2cDeYH618riBD3ggiigK71Mrhrh7zQFK6EFE4N",
  "key2": "MUEMVjGqVzwrUQcJSf9apaFBv5Cxg7SsaMGdBYxs1zUj4p1974ZfWo87VqysjBc7mSqHioTfKjvewqvtHMDyTbk",
  "key3": "31sXQGaU46vmfeH8CyTK17pihekiMj5VxQTgYMM2N1BkwzM7ST2HJJxgJpNok18BZdqVKi33muctWYFL3GhwuyP6",
  "key4": "43CbkKjCbNaU2EnZ8LSJY4M4g9ug6qcbAzGyHCqERYXeUaaqVmqD97EDnRooRRirvdEnigTYYzcvrWhTioXtaMMv",
  "key5": "5NtrWPxM8bVqqxyzRxWwjRNFit7ivoKj8HmtnUnNKbQTH5RJhzc2qS3EBMb2hCNPUFhBByj977mS2sGWeNWaST8V",
  "key6": "5tm3gVHUGF1PK9vsTu61fy6WHPCVN1DirH8mqddXHcLPWu9PvgsUTiHjnZRKEDWLpR9yU4h7uNxVB4voVTRCPpC5",
  "key7": "6feufZY2q6V986qA27Z1UmbnG7VvVpqbkR48KRSmG92L5J21xLqoB8nneg7SkKiYeJ4cGUTGbe4reHyQGTH4Uam",
  "key8": "43kEJR4XPXJ1HfYh4aKbxLmsPAJbjxk7f8Zdkp2eDdVCsXAZbWTAT8h9YgmYTrQrV8xekXhc7YiTByNceN6HdxV6",
  "key9": "qKKuv32Pqm6AA9W58s9WEWhv7nSS8hCk9irQUbGt93jnyegdAMqwgaq45yGtNmF8XcC9dwnPcHFGLGXuBxD9pEJ",
  "key10": "2EGTh9a1E7XwGHMqk1kMeV3gdh6BocdaLnEA5uPfnbzLZ5L4Cg3qpQBNr6jBt7LiwLgzDK2UasPaiYhzSS3t114z",
  "key11": "3ziFvgVz8rx3R5YFwoTqaXCRw7CYRf9te5yxEFJwNtsLe4MynK3gmgBErFxua7gcgwpAT2yP3VXhHHWkt9axbZ7B",
  "key12": "5Yi9R8a2zvbiWLmkAeJqNnLEaG8htDnp2drGSUN3vfzEfFKr1AF9fEijXBvwgQGFPnR6fUd1xG8RJNtsBLEfG9UB",
  "key13": "2Fr8vMeXwR4DtF51JHFaeksTqEYzH3AsB569QeU4SbpPkigFzmixCncb2TEUeTaM4TTeMrhqxiNo8z4m3uaY2aST",
  "key14": "2UAzzNdKHCi3pHu53jCuZXoKVWKk8YxVSyYqNVMKyjDjRPGjuaKXfgaW4stRoeRtncrnVE1wbafyJkRzzYmnHaUX",
  "key15": "xzd44unsTcdA9vsFsC5s8iyAiienxsZuSm5iur7VgNzroajRqwFdjjMt51h9LQ3T2CnUK9hi4KgV7uSokpZL9BX",
  "key16": "2ToVUbLotno9hqAoM91aJB8xvnSA6r79fZPcnNW79bueKzfXQNUEdroD2GjCoi74XsssY1zgabbmdrtvuXMUZBLd",
  "key17": "5nq47i3nXaEto3WnpWNEEpgreG6fERkBatBVLMneWK9UZEe88D6hrXJhBLn2wdWrY81SBaRpSanqoEkLo3ZkGc4E",
  "key18": "5e1xnhiysT3vyqn4sMX7nZfj3LdnNtvCmBt3QvTyG2MT3Mt3xUDVTM7qWxCD67boCkVw7XRw7rzvFhQ2AD692EWX",
  "key19": "2DHWudVcP3pJQcvHWGWHYatvxZCxaQ8SD9fuoCGyVWYtj9YCsr7zsg9dERjDbRaWdWG5DXjFkeoeyouhmjZdAy6D",
  "key20": "9ab1cenmWKYJ4M7tEBV47XvCXAiyJ1XPVzhuD5QF8pqgitbQDoSUqtLGnH2XApp7JeYs9DUzyKfMvXLmbeQqgAS",
  "key21": "ztdmX3JvQR1EAMvCDDRzxzme9PiZiDibNrSpMMS1CVrfDt1i9nj3vS343A9efZvhGe8bhZXoB7eqvuLZEV85bAH",
  "key22": "56NZo2KaNzQuRGfkht6eDX4nx2kxvbtJHG9rY1HbmrFbCf7SsX3DWCf1cdcRUPuLnMKowunMNxQDd8zBqJWbYobP",
  "key23": "5KovvxZLsmeYEjU6pJHpgNnbcQXcLp9VFtqwSNYg9ceFsyePyPWapA8rnYm9Npf9D9742ZeXY8ZKiKtHUcsJJaWT",
  "key24": "5FW3iNSvjCpiLbauN5iQiXV3wyxyzNfhYaosJUew8wrLfCyA8PQhwAcJN9yZq4DbNH8kmSFn5XPHKCm6wTGhXc1",
  "key25": "Xzy3NsUV2sSPWzQ38oTGbGp8UvibHE4hdJ8xMoErwkbxavaDLymgoGK72PEJXopnCK57o3P2yR7UQ2FqtyUMpWN",
  "key26": "2t8b1QGJw2BNbYkGcCGGkR7dw4gt7zLxPdxa57qUvfy29SWZoAZSQPyHGQpnGgsg26RuyZLZQf289UnwopfYVkP7",
  "key27": "2123CHB2XVmjBtbp98gPqw9d27PedhZUEJdiwWHbKhf81qTEum6SrkVALMzVZLD93VWBLsSJmRMg7pjzNVJv2Q2F",
  "key28": "3KxHS9BWS5S3rMgUx9QoW5Et5L4fS69khjtxRrUpsEPeKuXbnZgtAVdbHf81h8eyf9VPZj91ixLTs8EGYsiq5tr9",
  "key29": "2u998zd1eRyPbt6UTRgnBwRUanCBHjrrAkSSQ9ZcQNTmdaHdHsMzBwYKaaoYrHS3hwd9NBDwuge3SUeWcwF462k1",
  "key30": "3D6NfSDEqcnNhj7zwrwYh56mCTfMkkVNx7bXwDFUytLfvnMAfuUmHCSen4KieaosENcFzjpVwsLUzkeA1DzMF6Yv",
  "key31": "5KVc2abF6yta741HSKo1U8jyjk5HSSWEV1aYzLxrQkex3bRtwB7N7VnK9LpoYTb3Gxe79iu7BKk8KthkxxaC8RpM",
  "key32": "3qeYvquo9U9ZndXb4Fg6WU3BxkCX4yb7umuRHL2zrc1eu8XRsGGAcuLoo3u3TVEKfVif6rDT2zAbEJJ8HqVuaY6B",
  "key33": "F1tYyJfnadkWyqWYag1y6nf53bB9PRfiNv1Hrv1J857C4fNm96dvApZRA6mY8ibXKmBCyk6KRfjGKZTwTkWqfMN",
  "key34": "9SaQ3UeYiEYj3Y6jXhgmKxvHSKHeXT9txMbWCRqCBPiTtNvGxAqRkrD2HvofBsNBUH7wxFaivGJA1BGuF2SLQkw",
  "key35": "21FvSqtcBnN5pHAKNZXmbP2t4u3qhJT3DwhHZ9wHetwJLwqZNjRzv35wHJbGGnyEg5hxSui2E6ZVVf45eNLvrzaZ",
  "key36": "KDxkPua1aJEr61nPs9e1r5RFX1HgiqL6XRbqWmPaV3mkPXjdXQS5HcdbrKG8kuSrurFfC8KCM94MCjwXNyX2St9",
  "key37": "3MQhLXisUTZDvH5j1MaGSEphY36PgsVfRtMWKNL8SHKojzGGn9n326Z8qQh7J3Q5twywGs1duMmP4pHQPujquN5F",
  "key38": "fYwaMZBsMMBRsmxi9PQhGb1c8cbTAjaFDX4bZe3VnxSxvjJLmjWeFC9wjU6PKv7E7MWUyKYh6x2MDmjLmiWfva2",
  "key39": "4v9wRVuCw2gdPNvpF9rxMpM9ULSKKifo1ND5QVMxgDbyAreJ2TqzY8c8iXYjGipGEpy9EkNpVuNjuxGfSmZMNkCY",
  "key40": "5WasjmF5R8QnC92ypCnJZmaL3wtmWYPzUFDm73ibUJC1m5Wj43u869cV2oECCCpjsd4YUCFwnGwJR5onfNtZkARS",
  "key41": "2o1eG2UKMeTv7YnV44Mir5VANPy2ud4DNiXHFfbZmizzRzqs9jKBPBy2SXtr2GYXh4PUSou18ye1MNSXMZcZo4JD",
  "key42": "33A88B6u15uKookwtuJNB4zCHE9ZhBRib5DupPtohXx7ubQKGo1yUgUu7BkWF5aHmccWhHWSoCushnb8qcnFLfXs",
  "key43": "5eKJWY8SXwQYR62qTVvv1a46NBsuJLoPDUa5b2nNCKrvpEvoQ6knyTuTexmxW9S3aiFU4kdtG1LQyb8XTQnrdho8",
  "key44": "1nUXfvMMwLQ6bsis35eLYj4iNuY7pEXbvXWMb3i88xayTF4aVt6G4gffrMXU4ZMe9fxEdzex2XFjshq2kysoobq"
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
