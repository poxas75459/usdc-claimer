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
    "4noygNeZVz37eWJQcpSi6kzNSFebqeDzsCwZx2NKjdKFCWZ8Zc1iA9xWddKXSr7K9JxhNgWEs94PZBokkmDnjDhw"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5NsLaYoufZrt85pzu4RzFv6rjLzggdB4yU6L1TYvAsbTukDUJZyivsScDg6CbSHEVcH3p5c6Cw4TtEVsw5EwaH6K",
  "key1": "4ykt4MsR81SkVpyjdYC7Gb9JCDbMXNZwaV1wHWS8HsSJ2sA5vvUz1oee5DqxVQVYczoCne8EJeeGJbYc4CGhswwr",
  "key2": "gz56bgg2T47uGPnkVRYATvr4SRUcsT2siaKaNf5zEqEtxf2WCcqvrc3KgQcFCyFNGipNHEkQvtCFA4yvxffPeue",
  "key3": "2Kneap3HNQBVKN5fQLDQyYy76PbQGq71hTVYRSh6QrMufCc94EidM6zkuzB9tcnDF2QbhG8EqzfHNjAuxFrefsgU",
  "key4": "5f8tgVUC49dp6bXN4TfCUpGkGmdn1EuPFkitZaeK9TdhvWfe9rJedyWx6XkzRPACaLRrp3jJLvzxFoTmCEgf2984",
  "key5": "38qZc3cQQt5Q7LnVL7Y4MLqoUQPPy8GAfw6izFQf63MeJ1AyU5VP1Wrp9AhMZ234EsmYXwFdqz3LL47qPSGZa8pY",
  "key6": "kXRygScBi61krAccuVtbwkJ8sgrRhf4BaKTE2TFhXM5aPE91x4usQ4YNQkBGjTkzFeeeRRHfN9vZ1UXqA6ZaGm5",
  "key7": "5fEm5NACgh69HefZSKmbnkts6eG25Am1xjL4G8WcWBz2FHSe5fAsVmdiNFb84Ri2FgJ9cBoqa3g8KBFaZZn1A3Ay",
  "key8": "55GAMPx4Eyhj7zagyRyAU6AaQ5QzkAuKF34mgog9SA3uJh73Wrp7GqTWgy5CfiWYn8MFwzBB7jzE7Q8QLHg7fkAA",
  "key9": "3t4YNtauMdpmZBZZqiSpxWby2DQA7wh7Sk4uzPY7La1jJReGS4ie4yowDi33JXv5DVLLymyGbYnugX79xmH7sTza",
  "key10": "3X4nKrnUEKgauitafKBqDB9cyJyP4rYHNp8237mWs8n9vFJjTqVhrnsgsDanaGvARa2Jtht44ijfg4tB2CKektkf",
  "key11": "2tBYG9RZ6H7bSD8ewm82HuABup2AzSa1hq9LpM1tQVNef47UseLmdMc8yPiAsC9EUoCENAJuM3Ek2FCkfJX7d5of",
  "key12": "51tRTPfc4bNjxzsng7Cz7XN9ZT3k9PwJRVx7jSVAhXX5i57zrQKq5pNrb2bbGFqDCWPAUSjWJdBdKer1RKnovzug",
  "key13": "2mFmLBsQezGLD2JMgpf8HHsTf2TkTgfoGPsJJnMgzisbW2BpTrTVVDaPzJJSyko5hnTfaAqTLVWvd3UG9kjjXdzw",
  "key14": "23evQqbXDEAQdHBoRCpWjWAreHBT3bsNBDnvUKNQgw3LBvUyJeySHdFMi8tkex8ispCuGfeWL4BcsrXSywHSa7VY",
  "key15": "262zMCHB3oizow1y8m5FPK9rF4ySXCq7tHjFNZdRvEAvHvgMvGeefPiGt4vwXmD2cmKYn3Zb5CY6mhWeKXYPMo46",
  "key16": "2iu5AQSwhoTXeHYFwkGq9z6pgk1cpGjfcDUerVzvQ6JwGYRzHptK23gH5BYXCKJGo2eBxniDcycPiJhTF2b9oJD4",
  "key17": "37NgTvpjd6GdK95bTCRJt4dyMagvxd7pib3vEFYWCojnw7KypLxh33ukMZMgZptiic7XhiDPxuSWY1zBBY9gZiSV",
  "key18": "5RBZa2CBQwqKBx6miJ2zWcRyXQaL5hsDbeXTfNgjx1468JePHVPbcwqJmxGYgBVujHoxwDigwypDRJ89WbmKECFw",
  "key19": "2y7jGaP3SZ47gKtoc4SPShX8UoqZ7Kag3p2w2ux8PTLeeZByMwQAPUdn4t2HDQ84PSdSGgjEvJoYWAJN3g1s1L4U",
  "key20": "3Eroe68npL5pwEFiJJgebjbnGBciza1mFuz8HaCALH7T3LHARBT9tQP8CJqKaEu8W788ASopW9itayGHu1Zx5kbc",
  "key21": "2Se9Rx19cuJ7umPjzu7dcRxxQwntDuaRdexXyASYapNtBfZBEkCgLrK37a4Z2gpgiVUaw6xoAdyMZ7u2ZM96QDmx",
  "key22": "25TyaecQdDGMTqKuLVBY2hujSvgpdJTpY1u1744Lb4DadfMcU2e2Xyh39Hat5VdoeEBJksAwxNJhtxjof5w6v6gC",
  "key23": "2tLGSJ4xLQ3TuB8MditBfQGaibdz3vqaCpZfhg4y2Y5nKZPBKMZnuKmaYGNci9kjhTte5BVhSky2XbuhvZjZzebK",
  "key24": "3DBfmniECcqWitc9XXu5FiA2TwyFmESrApnoxZ9Ys19MoUrk1ZgrxJLrEaxqNjLDsGCZNFFfGee9Dx9HtHe3CJDq",
  "key25": "4kur4RG56x3Xp6r7sACV9fPnpeafxtAqxGTq7jv8kRKPFaSJF1tYkMLB6TcCH2LZsfziJekfRNzgpvUFajnNXBA",
  "key26": "E4JwRFLNLKhWnfncH2PCZxihJfEYsEu9Ff3iG1mQsVoXi5whfEtjkZ6DHzCMxw3zZEdeRkRcd7uskDDVG3aL4cT",
  "key27": "4Xy48y7ZAX1LE7AH6qpD2XxXvr5rLvB51tQgPv7EdhmYRVobNoaaCtqJLANeCdFvqwRDxv3Xxw3s9HMufPVPMDLG",
  "key28": "4HH2VkuvFUzQjjQARwa2QkSz2A5PyUWDLz57ji748PVbfyNrfxeWpcjJoVGtC4c8Q11TP6hvBMZ2B9wNyp6zPG2o",
  "key29": "5cmfm3BBprMQJqSxwgDqRc6WBfyvxw2FxQRjMdD1PGzhbHNqgRuJSWvrJNhaVsfhw1zFm3ne99pYKcD43ZXhrFtM",
  "key30": "3AwPhfyPmehj2TwWrLzDBJfvB6kqsZuy2eUst1XuR2BgKzLTyC4eBjTzXFGWxUSKvVEJAWosn1oFJ59MHM1s9uMu",
  "key31": "35F9oMbH6fBuvA98TcbXFWGRBRz8GxrCQre7mDon4437jHfF8MERXUtka2RfHN2whT3Ahx87sH22e8NFhGt7H7tt",
  "key32": "3GiaXpJ4r1hzPoN27vYYK2xaJv4116gVHy7GPrRqVF61QaBbtzQZzDzCm2kWvHU4eR3mnopceyf3zSEqgBBDjDud",
  "key33": "4ZXkAB3x9uYza2Fcmgi12RaziPWc9zK3QtNU3gcLviSNC7s4QSFGb2EXjd219vzRhmUoLnwr7nPgQ3HXFbXKiBUe",
  "key34": "3gUwWsWRqHri8uC4bEPkTeDXyRfWSMcA1Ry6rZpWzWtTJzVEQSH29TzP9rwEq4aezdQ4Ryrps5R51wKcCc6713Up",
  "key35": "3bSgiDQX5wnyVuLSVsXV6SEJ3dCoLDS6ByYED1D93FncGSudPKQFM5XVMRysAFkWs6NAonABKyu6XmrZ6LnWRtVY",
  "key36": "5j9Cpuhod9xCnnmpuMfcvorsAvEqfigX1LJcqdLGi3asRC6asFKYNJA8PXcwx7LbKKFXcmzQc5ukPoraz8TXcRnK"
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
