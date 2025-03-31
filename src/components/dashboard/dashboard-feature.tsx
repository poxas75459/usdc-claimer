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
    "4zrHm2YJhs4TKGqhfFbAPj6YpC4VSWp9A9S2XfbYp29VTF1pmqefBFFKcQ1FmdHomusoz1HTL5L5qEsj24z9kG6H"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "541iNREudagzmzkVq5kHt3Rz5exyRGYUiiAqhAZxXRBCNvfdUwz6cR7rZ7R8PSRdmjtZou2pecRnC3x8KHtkeytY",
  "key1": "5BeRnyD2WginqY6SmETf3sQrG1ouDGB9cbDgDxbeGjXP2BFpXtKZpGqj979gGCz12MyYgsfGSasQYcwQ6QUBTLj4",
  "key2": "3ya8AUy49Ss9xqoUUk3Q3CQsgr9p97RzavLGV6wwemRxbBhnFPgkyPdTsqaPKKr53A4UG7CSXCebqh425MM9W1ou",
  "key3": "2dgP34ADBNmec4E2nZLJSEBR8kY6g4QLM4VRSRdNx8trDmk4xrJpeGjoaJPU8p52e44X6gDmwQer37gWBGwCerKN",
  "key4": "LecPicR4wXtQupYEyMJ4RQqtTeAa2NCpkCyyjtjXoX9iVFARAog4t87rhoHSRV48CnXP7y1gzLoK1hV9xHeudLP",
  "key5": "3qACiGhATD96eMtzXD2RVWo8mJV5u5mSDLnBmbdvmrJiuUZXPJukWaJtv5pXPkeca9XGJuUM5mUudREjzqqUfRP1",
  "key6": "4qKfEwrJmeEqdBp7pKT4FoNNwxYVNaWNNsKqSCsSoRKGqYkGbUFWyV6JKj8SxGqH3SWNqDc27wv2QphNLSbBN8CZ",
  "key7": "KCvohpMSvrzBFGnHYCXPkGT15EzmgyNPn5g8wv6oGYJm71Bp5nX3iuSS1Bou4oFgMXhgrZ7cybvKdFmahGVaYxX",
  "key8": "3ZwxchBuDqDc3626Kfx3dwq5kYNk9Rv1faQodEpCEUA8DXfagMmcrtacsYzuh3LPkvsACLSUWGVAsyK2t3qmzEVm",
  "key9": "2upARNK3N3Q8d2DRAAFvkVZy5XnKS5R8P9eWi7RdXdoaXRP1LNmVwRMBnLorz4g98m4Kg18m6hCqXCvkFskwzRnC",
  "key10": "QQgrPvefofoFwwnkbK6Aaso6FrGzKDZ3eyGtg4oCjuWCATdz1e5w8MX3mEsFLhZ8sxLMV7WaajN22ppmcWChHmB",
  "key11": "5JXZrg5jXvRE16FaSEDwWjTLM7CXHeu1zaDKbJePZonpba7E5kzCWU48Gs2kLA6bsepFXVNcwoSZu6aSw2Gde1jr",
  "key12": "4eyrTzFqzdPvzrceFowiVnq2RpGskHx3nvc4E17AfiqCa6n8Tsd8gDe377igFPNzaDaqszP9PAwZ5k8oUrZ4A8G5",
  "key13": "3sgtL5k7ArZKafMAzi1G7gc7gWYRkM3twnUZW9Sm8tZXDZYvRFdBcVgwctz1Bs1ahbb8Np4oZhVTzLGhLSzaXbFy",
  "key14": "2rbjiPd9qCU5VpKW4uqriJaBiLVMksXSFdh4DxRKsCutpixkrRfnKGViUYmq4wyGNBmvBqujN34zt7dvsmpUtGgK",
  "key15": "5D3GbVzzwKo7ib4NbdBfH6WhzZ4hGARpDhjy5EP48hD2RJ9iWXaVMKrugKYB2H8j5VieP3wp2QghQ3P4mysrNeZX",
  "key16": "5TSVVDAiaD1D16MQVVwAn9xXVcv8bG6ggSUmWvJ4qtXkPRKcFPuwUkRg1cEzM8fhebvHqUVVMnQPzEgw1f2qmEvd",
  "key17": "5MAUFEeH1SojwYgy4RjNQdB9n8UUtKsZ45wasXqMaYtKNatFhgpJnoQZrbL8TcHrgkbgDK1qpGxT5GDxqo5GoZ3X",
  "key18": "5bBXjtPdJyVFqo3wMM1ivdecFv4o77L6da7YnFzKac44kKA5WRZX65noThunKCxbkusYHwzo7crQgUoyiNL1RNd9",
  "key19": "2brfLEiE1qJzypkJ4ZGTY7fHmFtoHyi9wjZijkaEbLwEJPF7tmS2Qn5JUjYxkfC27jbSE7n8dxSxGW3Ev7BN6T8H",
  "key20": "t5eh3FBVrnFRf5jincVAjZDURUo3ZnBBq7JadjxXsvn5FAj7dyWX6Ls5t2UtUHauPMxG3oAfpAh7MEdQ4rKdLMz",
  "key21": "4ZBrZGAKyakUu2yTaSXpspGke19nrnQvirFKzjEaN8FeFRmFzYyChPNJSozDu8FWgt1GoC3kUUs1VcesKGpUw2E6",
  "key22": "2cJse81VxHUBSr6LKJjncfHKdiXTwHr5EvRaB2AN2pyeYhjrNjEMoynNgqbRq5krDfivc7fqYb37dpSPA2fLQhQV",
  "key23": "DUFM2G2kVs2gFFa96wnc9cqLkEMxXfaEhwQzZ7WfDG4L5kVeYgGqdvRE7WAc7ksPw6MU7iXKRPJyBisYNB5pAaG",
  "key24": "4sfq9jUZhrNaV5AjtrKLYSEzRS7TQRR7gAESihhr3btoCeqstUJFSnKS33db3HjPR5ayrzt8ubazVBzxXYYNswq8",
  "key25": "3U2oxQ5pDg6fu7541f35oDWmT11zenCf8JK8hAx5fhcpGqcy5gqcCysxQeoQ8gMCNGvuPn3i5sSPmHi2ZX8xFNPP",
  "key26": "5TKjtm9zvtqTppQQWiV8oXQCQovmfWVE3qJ4bAsVwZodtjKSuUvvebyp4iWSqnyyEMEpm5FASSN3t8rNcbDuR2Lv",
  "key27": "aBu38Ffa5WeDwvR6uMwUJQqvj413tWFUti9FrHvVJApZ95aw28eUqf4Wc8ZddM1TZ7SMrm5jHDBq6c1Yp6ARRhn",
  "key28": "45xCimb5QrSfDeiPFr6WncWVcNU3vycjSLSP1bjdskWeK8v6ZC1B8gPfmqWJ4jMXfhs9ZDoXzWRKTmBhL7237dSG",
  "key29": "4RA8DcpT8iUKmm6RFLLREx2Gt38QQtr25QyA5KVEdgFzjHs8pjBwemZSPZyMYYsniAAJdfYhR3hBGcXH4zS74d3d",
  "key30": "2SWd5RTGDkj8AjFPbipCYBQc9XnhSaEDNa26yTwajvU7xsHYxkpadsyn1yZL6vXB7TSmTZE7cUYzY4LCfkLvM53f",
  "key31": "4WASq6eSQVsaRYnkBrtkbt5pyYonpjos2WupcYYCnhneTVVAwPrbAqvZYewQLKVmQyE4AnoF1n5Jm5vjYWkgvrSm",
  "key32": "2GrE7LLfg9jmA3zrmJ1CXNXPxVxJKyNGZczeHiMsLbS9nwXxpgUDmrquaAjrjQLRTsP3CX8pgSW8Y36VgLC9abu1",
  "key33": "4ihNb6cfgk7Bc4yEXnUZo2YpRhkypzANULLK7L3JG9ZQnFWYFnD59eT3QxHXvvMNpqKPq2AWnvYPkvLSg1yaz7ZN",
  "key34": "3g2jTpYr2EP4DZRAypTedPzXkD7Tn2wRotUjrUdR4heZmL9UwznYfFyzFoveP6ubPsmjChMniMDXrzjyN5tHLMv5",
  "key35": "3McKYfEhEsKxEtNFW2JEEeS43YsgnGV4vCqC3jcrE5yc3YvgGMQpcvQm8PJYNYNLfWAaTHUpKQCsUCpCkcr9dhKd"
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
