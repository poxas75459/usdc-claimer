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
    "55nTsat82siiAfBKmCEZSKZaJvBLAYgxG6P3R9FtGCrmpvesFwmtSaNwF5RzMgPMoGjTeggu3aabKcXWZq6dCqag"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5nmQusn8jCzt9oMZe4wDaTQGpmpEbVukyj6DRqYetAKR178KuFS41x7rKsecBJLvFg85f93mVv72dXRNs26F7ySH",
  "key1": "2hvGxw6TeUNVSvTBTUxEHymRogafBUqGb8o86nde4T5m95GyeLyDsqineNS4XvRaQAj7nYPQQNdzyqK3QgKWCsrw",
  "key2": "5QF2Stxmxvn5ZT1z757vAG9ChiSj1Z4G4LCoQsey4YWufZapECkj88uHYDwnpzBz88qBWhpMkXCFVqsGrc1Lp3AJ",
  "key3": "5g5a2HMwUU97ULGhxJmLhFpQ3UhGo8EysDnxRNLm3RjJ2DSTfWtqoFBdhYNNVjRSXti87814MdoF7ndaXoyMp2By",
  "key4": "3FPcps6eaudk1uQDReGk6wkgsDSXBy5rhqiTLfK5QGh1WRqzVAii1e51hY9nZwy6u243AEBeMQYVcWFE3WmNCuS9",
  "key5": "4w5EYBVhf5eRQKEBqj4iD27yPtfzy2GhrYvV6YPVRZG22EDiWcwrPCC6gByweAEJuTAKxPPhh9n6kH1CUMwMcZZk",
  "key6": "4GSQzqXoVHWDb1DmFLazR2Y3ZDSTYRHawoXnns5Vj1rBUbWadT8g3gc4GgCKBJSEd6KrvBTaJJs9MFStM46K656X",
  "key7": "2tzs5ujniYwNMVU9MUYRwum1mxvv48uQusTg4FJKePqYEGtRKij4tEmVto17MRhbpbYNMUhwjqH4U5uxAgtkejsg",
  "key8": "QV8wvncGpnAYN7QpKFvEpSP36obbF2HGRrcAvPbdwieAquM6DAG8UNhFXnJEDZv5iJ5QstKnXb32VyrqnZPw3Uq",
  "key9": "21CcwBkuPzVT5WoqskbtHeCjNFAdV1x3oHthF46uq4Bu4eUYkev49p7qVsV41kALxjyh2rFFbFKwf8ijz6X1aiL7",
  "key10": "2vp9eiHtUx3BcctujcQ5NCyvPf1M9wMHaKuUhRdcLcXLDLhs3yf2sq5mgSecQNTyhGubxa2pdwZxho7F42EuB1Pi",
  "key11": "65EuCoNmYUm5U2bU6ifuK7EnbzXSCc94r6B4gGAKAZnY5BHkdzVUDoxMsBJqVQEarhLRCWX88VUZNTiPjHkK6T9G",
  "key12": "53rr82ZVYRxqzRmhBc13ebMJVtft4Mo5svo1FuYX5JNsLxbNqkV4sukpShHAV3QM8zsKpkdckm17taennfPa964B",
  "key13": "4MSFpo5NjxNPXnRbpxXuBztLetvDwjaWu41Vxu39a11cBCrkeZ9vxFYCUPMJ5B5pNi62P6Fcu8PgVpiLaM7NHoo",
  "key14": "3BmgWTWoLzN2SSLMXpFwUrVwoWpWiRG5Efemxo2m5Lg5UiKrf5c3hM8YwTwcXim6oKBWzs46pBbWj3Rk8NMXAvzZ",
  "key15": "2yawvUUuj7NHRJj5DXMFpkGuXVcPfSKxTN75T43GGq77CcLSxD6KCd8ES7dfsKz3s3VSmMoXZhiLpSDAJ5p8gzci",
  "key16": "2yuZacVhj9BjyVReBhk9vqDCsoRoEJ8csnVw4mhFAmF567rBy97ms3d2tKHRuVebwQxYZ24x6VNACcumh8dr1SCw",
  "key17": "2p3E2jGx5ch6VsYNCS7mNE3pbeysJTWPBFUbXUvERTW2tckM4neDGEhuUBFg43DigZqE1wUErUmTuqWz9r3gGE7K",
  "key18": "3hLSQkFTiJ8xjKc3tKP7NL95W6zk3rFACG18gxWzoVAbWox9hfK33Xs61T11gsdUS7N1LayrUm6ZbAR4KReH6gMz",
  "key19": "4iCeu8zmveUvgB1QjcMiEhsiYgMsKSPmKSSHV6gNLfu5gTfvAeraF2Fx9qaWo69XQLfkNQPZY1HXwxmL3QXigfRf",
  "key20": "2SYiu64tHtmyJwHT4jzDFQ33nPTsiAHL4oFqPjmg9ezkvMZUsf6UXzFizts6svKYyMdEXeT5H5gqrEhubeiaxt1T",
  "key21": "5hiCqjaFopKoHssvhrCk5Ao5Vf8K6PkcQeYvxdEYDcgwm713LjMfHWfUvY6jv4ctWKdJz1ytKjwx4mniGzXwwSJG",
  "key22": "2WggWbmaEQgte7ADZjpFH1wwcPCLrdZ3FEE9U3h6LmvidFWwSr9ZDsdHgkEyfNKERzF3DGMFxqKiZ7KGx9Ziu1AA",
  "key23": "4TqhB33garsUe4GqDTv79W6GYWEY1kGvk5H5BQJY4VFVcpd5WXDdGD7ojUGovx15NDLdfVbCByEktsCZ6m7opqji",
  "key24": "dGgAMHSUHUMRTutA9CeCASnfbtLN22DfrAUVv3feADdkAXoFaPg2niiQ181aMC1kHog4n6hBwCBibte8hoHZbGD",
  "key25": "2aACK2am5EY8PLjCvhMpQvYQ6D5TLdMNvkneTvyDrkx6UHBM1NM6SFVpt8DnJgNwCg556X59yDkqB2ACtgY6G6dy",
  "key26": "5enPZ1LfzLqRjzD8J5Pa3C6FuahAKmKNWBrhwZ4PbCVBWZ9cg6DhE64t8Nb2YQnZS7TjtWjmz6o2CpcWYZaZrYGj",
  "key27": "3RfJoy46hqci7mujcaFqJew1qqSqS2pv6KvG14cfRBLavCcBhrieRhCoN76q5DYXRhjrxKQ7xXGLHE5FktjXowgJ",
  "key28": "2iM5rrUUhNWEDmSeDhrTRd6ioutc4JTgNX4DkXWzJFrbFn1q41xViqwyskEQo4ctPRH4mDrYQZFGex2e4Sp9yNEg",
  "key29": "4buBFoprm4FaKW9G6MnibjRNLBuLdRRF93b81ZLvqWXynrKCGqiavnKjQe2Ya9TAQSjJsp7KsmdGUkqgpx6ZreMW",
  "key30": "2YyWmFJh8mUQRrBxdJ1KsgJ46SWw8xx9jpxGV2YwcfZ5mXaPRvHaMerQ7RRTYzB29d6ZKzr6fPbV9Gdw8Nd2hbWW",
  "key31": "2bMzu9Qx2KTPKV37uEtkZ8g1kcSoezx3QzrdowN6ma4va2oEahzWEtWYFJQztVvn8V22aj1qHyJjap4hwycBAMH8",
  "key32": "fLnnAzgwYYVxPNbsE7RDXG8nonvyQfyaQVSWN45tuRU7iAUYtJee95fz7UQvbLCdMa8sT4ZaKRpE6t7xc47e3y4",
  "key33": "65bbjzFH43BMDQbkT6EFPgWceFVfKFQRds82pa3RusCGxfnazRhxfwuc1Ast4KZSkkw447siXy9bTDh1aJrCKJQL",
  "key34": "2FXQeWFz4NM2AiJN8aotCDn2CeXwYAJad5DFUW8xp3zp1L5yQACU7ekv7pEvSK94mjsEyWw4gj2vRxmaqKqXp9dx",
  "key35": "4XezbtGDuG3CibUvTJpwnXJ5juQhfDPhZyHb9zSB7G1UM4pKB9WaXLgg4P8z3T8AAr1mAzXA3ywBaqiPYgCeUv9S",
  "key36": "2eUNtsSeS2GqDJtHWvxFw9ev4phKCYMXkEopqBpCFgr5F5L74igs5YpV9S8N3TJpJBivtkZ4JjRAFUNKdRDAAsoy",
  "key37": "5QpZLK5yc88p1duX5xJ63qrpv8wmP5XTNvEQBLtQ1pZQkJ77xkGmYFBJGGP2DbdDzZttn6j4f2472PqbheotoknT",
  "key38": "2okRqTtbbGDeTi4H8LdfN4mMhPFKDyvCKAbnNdyy4jC5E1ZC9juEafX6Vt6BKC7S6ckHpLpj2i49mMRe2cZKjaz",
  "key39": "4cdWZGL6j69jFe2Ua2moRpAwj9BeLeDeLWUS7NLShj9nDXLSAbcRCvzP5y9dfqa2dUGfoNUux63BpfL9z9tjJVHs",
  "key40": "5HGayYj8VZ9KuifjC9w2LaNBMtZsakvFs4k6bvW45H1PtfG7qEnto1Z1hNJCq8f7a2gXW5nPvxTJaSJgYpNxmgHJ"
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
