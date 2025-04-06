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
    "5oRB1xjENraajZ2hrwTRJi4GbZRPH1zbEgD6WDghvfK9azV3nKLohDoxEh31xG2k1HaG8hbAdG6ek5hCNwGiVG4f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42FC2bKVT9Y59aXFb8PFbussgLBbSXTfv8B5CxTvySJYtZwkio43t8qsurAwnQpSjLRgcJoLgeC8AxcMu31qHxeC",
  "key1": "2qcMXSRQCoC4pmxxRjiWyQVcBN5YJGGGZCHFWcczthEB2nDGpu5P3fzaZ9kyNAfm1BLA8CTWNmZE69hqCPdiM4YX",
  "key2": "3Z3KDynPXdSev5qXJ6Z4Lc8eV9W7Bn2RVMwfi2UVdafC2MLfyP9kqz6ZtzS1RCjjTyZRdUS1F4EtrAhxQPyHqjtB",
  "key3": "3jF7Cdjmu2fdDoGmxgcFnV8ZZ25Cnuu5bFHEKZdkFsmiz31SzJXTMu2LpuUqTrzJ5sW6y38SsWD49eeY6ovxgRN7",
  "key4": "3P5xwN25CHNSH8iSKVXjdzhPMup1p7KhnMbVe7V2cMKrBTJtThGyfprt8F72nVfzERvNqhL7gVKppRBR7Fz8kGz2",
  "key5": "3AwF4dPTtsPJ8st8heWY5a25zyUKv7Wfvtvf9i4hpqEFB3wWQJDPxvRS2whUAL7Uf2dw8ay478bmUSqDam1G9ToP",
  "key6": "5WcDAS6WTy5oVCLxFfhN1zjngZazrnYW2UfWTNhRkCRt26n62vokHXkK74EWak6a2Amnr9sTqC2NSaPC389cHkkT",
  "key7": "57iFdFV9kP4PmVaBYsM6RkHJABETRgxGAiG74YHPJxmocM1Q96QDWybfVud5EjQtZj5Dw1QzMdDFmEMjMLHqqGPj",
  "key8": "65uUFUXtzTu6j33uT6LPjNUqhrxxo8hTNfDAwyZ46sp66ypC7Topec31cfxLvqkYC5JF6oNPkfuVY39vrKeb6SxX",
  "key9": "4dia7ePjVPz7SoCcQ72fNRZTePJoyXqBpypaXUCCngPS6MDBGAjDhsQARWwotVUUW4tGmXHfxSNojQ3qPgAW5Us9",
  "key10": "5wKog5nDwAvq7X15dkDgnzyXS21WrdPhVbByt4H8XLvpmgjfZgybkw2SoysKVVGoWDoU49PxB9m7gYSt6AgjhXDe",
  "key11": "3isvL6rhcuPBNjAEnf1ZhixSWcazNAApzMmYjHhDF6HEgFRGpp9dj2RQ1m5TZYc9ma62zXidypALgEU12H4vMHF3",
  "key12": "2iejtnJhxAj7Y9XHzFFaqn5ptgKhRr26NGy7CQ32cvq1UhoTXFPDY2ac1yEjrSvh8dHYDzrSfaXRjawkVidm95ka",
  "key13": "2xgr2C8MTGZGjpNXd4vFzHgMQgEZLGd5CKZQ7ceqkhcK6acWydsTNDPkeZybXmppSgRJCieJLqf1Q8LoZidpVDHg",
  "key14": "48aTmez3wzHZeBYiVsnJrxPm6iUvDUvDoP6RFqHtC6FfjDDap6pTkzT9bN4Vqvvum1BELCK1D1zn15WTCawmTWmA",
  "key15": "2DrxnZphRbHsiesrjRpiFD6PmNbdo6P5b7nGh53Fd95UzJvk969Gz96rPs2E43TDaJ5bJAbTuLCLhAPzrpS6uZ9H",
  "key16": "5oSgDQ1cSNu8CSTYZ9AjRKAjF7U886tjMAPo4j8a5VvTdfSH2TVgcC2BxMjt6bPcoGMvaGc36UdQ78e7H7HgbcYf",
  "key17": "23xoqJheS94K8zfpZmrfiadSb7WmpepKFSL7XD17cW26dkRBYprqFeMtmf5dhFXhrAFLyN7SSmBxQ6YSDFqjSxBf",
  "key18": "3f7uwGAkRho9zsLWtaC9dBEDig6mC6RvxhgA3nsWQYusCNAj3eFojXw7Se7Xz36BM2Ftgu79MWUoiqTPj6hQeRyb",
  "key19": "xiZTFgA5yhu7rgDm4pDXBfTXVW9it9LmrJeXiWn2LGFNXomHsLH52QUJpZYqiwYibFoxacfgrrfGBuFEAyrrAGg",
  "key20": "3grddnnC4VZkuvPZovhUqi5sf23pBwqCG1aC3TaTbV7QyWXgEVijsfzEAg6T5t8pgmgAj9UfHaSnW4j9nbwqnX5m",
  "key21": "578uQexbdNeUgjXbuzFrVZUdk8HuqF6pE8wErqeMccqphveyFe3nVVmfebWz1XBKKFakAHfnLtN8etzm24F3CSsd",
  "key22": "okxmoLGBtUYVbhBFakokSnAhCTLTndecHZqrh8ioqPz3Sumu3Tv5oVrYWpkJKQ9dVHR34PgLZ3mPd2YYiDohFY8",
  "key23": "4BZq2GkZyh4Nuh3KZsfifvSFZJvidAzuUr8aiQ67kX7cKk8HcASAtTtVXzRLQFyAnKJkzELj5dL2S7PQay6m4j7g",
  "key24": "3aZuLr97Kbh1GS4Tjj8qmcbxZRBj5Ua1bLua7NPVVKR7j1fujrJDJpcm9EWqGcLeqZJe36EQVae7Cnybde8pwkuG",
  "key25": "5t3LdbHh2z6cSQBabCiQhV5nmCvq86V92bFu8jhgPY81UwQz1RmtJWA3tF8ju3kWvVBdFFMNeYrtkUnpxKfWXVbG",
  "key26": "tFXAYtPNfJvJ2MqBBRNzdHDHWUyw7FRc7u5a8vARcW9GS9kuXnvNnKA18cjLPQbosq3oc8EiUN3Yf7S2tEv6vbK",
  "key27": "5tWiBjsKXrFrNYCtT8u9WR7C7eKPsTzna7Ya73vUEBZYGb4SB5yGCfQDWh7rG1MxkULdBpA4zXnwyMDoaaeFfu4L",
  "key28": "mJJFJwAXVJ9mGu1og2dWkS5dGjfnogYf3p3FUGkaBud2ADM2ibgkmYs9NL46j372XynYT47PRBytibUSYqVMApw",
  "key29": "uASNotjbqUoUPP8KutCLdeugB81uhnZ9FgYqAEiXtwkgNWY5tJUYiFnqNocAEWRTWNr8dQvudP9uh84EqKG7JFh",
  "key30": "3cgT2p3BAm62Hgef4zmQdujJn69gpFnursV6nBtqk9iEFNiXyasBhQXVb3p1g5yXRCBfMfddG2fWJJgbcCQLYnMf",
  "key31": "65fQe5U56FFBKDuVRQF4wVv31DLu9sxuVo4HEohsWANGLXo5o2mTfzwedngSR8LwoWoGAMmoepBi7SumqHDzSZJx",
  "key32": "23eUbDhPjTWjPPYUgdZdF95SPRpGNZes3CCfJrsJSgNWgqoGWus2b4vriisFiXtpCHnjBYzvcPuHTvLkwbJ9upuW",
  "key33": "fbLWPuRpJcaLwvcXowjA1yyw3iimr2vMTzcZMokyi25tNmpDVdUNYM5utfnGRkzkBTrNJqcYZDyXtFpFBWwv9AE",
  "key34": "3r2Nh3jfKB8FBhrz2SLg66kxHL586AuKgewRi4xt7NAc8jVHBVEjyetnommHyFbPeZqdZu9cSPruaqkE1KNQhFZN",
  "key35": "4mVUvuuuwxi6m9fqZtvR12cjkq7bgyH7QSFHjh9JmYCunhSSU3v4EvhbevWHaKMEnJuHA8uWt4xsmwmtBPhU2uKm",
  "key36": "2hNdNhxnzKn4DRUdRc6NNP3wjmSB44Lfm1bWMfXuHprQYPXsZHrodXcYNKvJVkDETz3w57k5mAHQhZ3dmPqUs4rW",
  "key37": "57kFXbnrGQVJkqX4Qkk2BgMofFLzgM2YkpZSK3teJUy8LokuyoVtqV3D7pF3v5ez42kXHFgkodWsfcqWMKnNfA8w",
  "key38": "5AYAsLJU5SHWgG2szsKqNHsnKByBuiYqPVrhUuVateDm6cUQXoF93xpHzMTbvxHtJQUQ5kUmaARdcfx5nzqUX9mZ",
  "key39": "4e1xbP9M4PGFyX3Cjb9fD5uR12E9VihRncLgW8hUXRCazczJHEjBbaePZjsEvKAA9yWJj3Jan8ru4eGwvzPyTi4r",
  "key40": "HFMdu8hjLe9M75CBbQKNX3hcg84YJ45fjjHqhbJSqvidgLPoef3ADrMFtC8SRCR8YXzymKsByxSKSYACZtSmUFk",
  "key41": "2QHvmCuKkEm6GCgAiaYKG2tcfbDURhvYzxioCP28cWgktMUeNNEGukUKnKzmT5hwkXdaSe2BksRMw4Qgpr3TSyY7",
  "key42": "57soL5AkgaZQzpbxqPc2ZD464T56CFF1spWQiniARTsKo5d2Jb4Lb4g5W3jgStQJ8DZMJhwuf4PMpfwFipEzibdb",
  "key43": "3F8g8xW2tfdYMboLMPq1m3MudRo48r1Bc5PhRL1RynciNmpa32H1BTEbZwtyBCiW17b1wCftdsgQyepKrsmdwByE",
  "key44": "5eWdL8Mx6sLGd4vSb5RkupKVnRoF5cbMcsMk5beDuKTyrnqpv7uHv85DdfoGbRZfWVXxowzZxAkbn65DC9aMrswE"
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
