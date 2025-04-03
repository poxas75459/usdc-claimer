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
    "5Eo6r2izd3aze3vHsNwuGy3zR9yNnTmdDZ1kXPABXvCFhM7YEhcR6XTXxnLrD9ND6vhiXhvbBmWsEAtLvNSPDUcW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Xc52iM3iR29HCGaRP9L7aKNhUFiXatu5UeNMBS7u17P1RbZ8uiyvD2RTG3PQyn4duGR88DX5JH2ioi4HjBGt7Xr",
  "key1": "3QqwZXFmEK9sTr1yA4SKaRzfR7CF967rrwEk1NQ4JwaxU1wtoYMjZdDSLxficoXzFZWUSzokfo4xvaAYYr6MHFWy",
  "key2": "3j2UKaNtZusJHVU7DHLvyzmvbYPsTtCgrvzeUrPDWGins7RTWszLMin14n6YSAsPm4BdxrSLCCJDEETJvTG9mkuW",
  "key3": "28111vvVuTzpYjc9xFxxMt8dqHP9aCMsNh7XkCYJh8MthijsEinTbr46xSVtPoyYgMpYQSmTPvf64vQNp2bZ45Rs",
  "key4": "2iCAXAZYyo2fRXpch4EuBDMc3rVzeX3dNasbvt9M5u75QEZLkhhGsLM61Loeagv26DCmM5nA3xyUf4K92PZAHXRL",
  "key5": "2B3JsvbrgXczxK6t7XEFn2gCy8hyf3f7AvRQoQf24pxyxBTpd6nSNS2hN4gzqtdBfUUkkRwLZ3Q7vkaa1pvyYNWW",
  "key6": "33eWvxBqytpsuTKfuXRu2JC8MU2fvvTADpPWvQqQPgejHpNUpD4xiH6VvsjeWjxvQjeC9WPiVYFWk6ArJr1Qg4sT",
  "key7": "4sMXbomZuf3S4w4Y3UARKRXPAWA8WbmTkSmDQxa4RHyXBouubAxitNFh21QWwTDTpcu23pzHBXx49tmbWxP3z7q2",
  "key8": "4W8FJJABVKo2oKUATYGtucVPGwv77S1TNgdKYGSQ62AN3JVhWHdiktyXZGv1RZ2sgChi9a5FnUorbKctV3AoHVMk",
  "key9": "Ubo9PaQhH21jYNHhD6RmKKYWG5suAzY4F44jPYzwGZcNMLP4v8ccNoUZD52mnPV7aFCX4Sq94RM8cLzzJbP1HNS",
  "key10": "5E1ZyZhypBGY8Sa3N2hehVMEjXZeEAnYLauFKr4VEuMtTjwWjJP4bZHM8zPAkmdKY7FVhhXJBqDr35KQ8cXbdHiL",
  "key11": "4sT5228ZkcQ42bHkip52Ygw2gED6RQFUsWZPU3xk3psHv97bN9NR1oJjZocG1Q1EhyptJpAThes1gPhzqSE1AWSM",
  "key12": "5s5eZpZRsYp1T8ao5QKbpEVpZ9GJnNHkT5LoK8d6pi9BTk45miLVPr4foaPj3ocVM8P4smxWtiVVjwTyN3RnTnB6",
  "key13": "vSZ88tnzWbCoR2dEEGfohXsDv7mhkLEGPJWj66UGDzxEjsEbM4JWTgaAxYhq76AmuVdAob4RNrR93bcWKu6q2sF",
  "key14": "5VTN5fGM58dXB4K4UKFuDotaTPJ5PjYqGRQLtimbvXrD7pBEiURYv5sbhJoQ6ifzRoAfuUyxVL4jUhtdskktHmfk",
  "key15": "4UTK7JjqLbvqTptoVTAqjooiV4orsYsB3TixDraxKuxw1pv6yPwH994VLHN97MHfo2ZiZP1WofDtkGBoEdF4cktn",
  "key16": "GC532AHc3udCYEr8GxXBwGEUG1qjigWRrL4WAxK2ZYCECUqfTrUjcPbNkYk4vZoJqkazhaLiiD4KG2o3iT1BJbK",
  "key17": "buavcW2f4iQ2u8oqiKtTA6wb3PHEtAtjKTxcbGcZgrJ1iEEd8xbDkpxueABsc39KLXYmEi7mY2nT2rU2x3zfE5u",
  "key18": "3uYnR82HMq68U5GhmWzxcu7CBe5Aj3cuvt8HkLMuZqxEQGaqwWhs1oL7JJyRV6ijy6XiJ4seHu6C71MNhqtEytTC",
  "key19": "5CUa2tSfBYLeffapZBtUdAj8r6osG1azBjCvCHeq8WCK3SZXfQugfRvMnA17WaeeCKS9fHSWSNozf84CUZjADgF2",
  "key20": "37be6xvMgVssqFbidw6asaKVqDi3b4URca14VqCbgJPgpwrXHXWNQdwY3GJXBNLhPsT4KS6XWkVf3KtzvvEb3BEm",
  "key21": "dTiz9CEJXjFJtrzS7p9a8BrB4m2LznpzyTYALEZtKRGEWJ6fEAgHQ7YDyGWqMuMVJ4QzjcLXEKzSr1hRGJWaiJW",
  "key22": "4gEgu7qPHPdqLCs1sH5d2YxXBeUzSCutY2jEfKwY83upJmWkASJvzBzUnVGTMk9bLHF2jyvB3yzySQuBoeqh4hnv",
  "key23": "5mLrqoGM9aXvRHUSQ4XQXURea7dRfgHqjwLhQeVyRhtTLqhPLGqdbgFC7BCo1oMTTaTWuBgGRFjxRzrGcMC7dZtA",
  "key24": "65VBT5CfyqufU8CkoCWmKX5SLV19HF1fzEF2Zv5fQ3iYQexQyCZWE4rg2i38mRKa52V1eyS8dY2seZYcznwmFkP2",
  "key25": "4bsaQrmn5RLbUAcojnNyi6MSTFn394centvbYbQajST8CqXLFYF6p1A44aGHP1AjK5QVBeEaV5z53ZiL5NksJPMo",
  "key26": "3PC6CLfY38Hx7nYuTovnJV25fmbmS1h8vJvL8pZPBB1RgmcuduDh8rPbz1aqtvLxLZSSKf9EGq3rr9keC7e3XE2V",
  "key27": "2Rn9wijdkvSsdupXD2qRJ7oaYvxCRgMiaoMksJKjLbKcx44eL7e9R9UBvF7jb7jNzyFjGLS8C14LqbcYUsEB422W",
  "key28": "2wTAJC9h65CCXpD7Hu6xzhppPqHAKpAtwTxBP2yZu7y3w6wVUWuHrDzv4gN5dvaWUeXqeoKXQkZSZg7S6u6XjkRc",
  "key29": "57HipctHuLKnhPmQ1hjnPhzcjFjQWnFt5Sa2nw1s6f1P84X64sZ9QeFXeiRjHXmdENEryjuq4AriR9MCGsYLEScW",
  "key30": "pQVM981NhwrHGDUabrzzGWFnLFfwq9PUmLTiGhgU1twy7Lb1BnXNQYLYmcy2YC8fVpTFViSJwFF9eWqmCzgMfnT",
  "key31": "3bLuEwVaqqFh1kPhhKnVQSdXnmoWsAXHVBH2vRTtY2v8U55k9PqdV6vbqicviH7XtVK6vofoRUEa5kEFFLuTyJXK",
  "key32": "5117TdMMf1KD8zjs23CQV8WPsAhPekbJJNXsCV7553Fs9Qxu6PJRUFSJyXxY2cYVyuEbC5TeF92QCq4teoBrfD7b",
  "key33": "XF7f8A4DyYoEFeMCr3HCtXJfum29ewWceQS1qdLogLscRRy7WoD8ZaHGjxjihJCsYfi32B7YuZMMZLoyHSjb8sA",
  "key34": "4SXbT1AjdiZ34z6JwCBuotEdqCxdMRf1VMgZWYBySmeTZwdom1DrA4efKm2ZT85w8mD3iX165HdQSDGMm5b6cq97",
  "key35": "5fKVfhCDpewbXpzUvJBt193NsYoeLbpfb9cKmF2hpmE5VTpqrKfTYG72scnnwq2bUVWNbwD7rpDwgzJv2ye9pCYb",
  "key36": "5RLTTDHqdQHZDYS1KoJiiZDvS25CKipRrGYcBSE5HoRmbrsvodizN8fLG4MQjdMHFPmeM2qjWr44D6UDWqZqR9AX",
  "key37": "2NQEdceD9gTwZo8LWCb4M7pPbFQz9nL5JRLu63yJgum1wCrBtqyovAGyHP7UpR7Rfswq6GkGJeR9taem43ZuH4pA",
  "key38": "5ArNvpyXp48XnJSc5rjP8Qd3qdBybJePfoeJXsuVGW9fpybfkyWhwt11xShxBE7VwerRvfz51DQTLfj3fUWpfRfN",
  "key39": "RBoRKM7pnykeW795ArcizwTkyXhxzALmc4651HkVAESLfKBZLAFMb67Hyto1tspv6Ykv3SazuBfY8XTEWz65sB9",
  "key40": "2bkzq89SCW9HwyVr5zvHLw4Xfum7dEcePhosyik5higyMT2Q9e4SGAFrvzhaV1S8jJmY7d6HbJkzd42Xszi36Y1s",
  "key41": "3PAv1eHYByqsndTeRrgDALNeWhtKDUfBzGNRMwK2gikuwWxzFZGErssKCfAwFdgLChzzwrW55WiUMESdiLAHrUWC",
  "key42": "4uPeqxxQ7ZW7BdC4tmkErGRiFihFHJvCZ2iszv7kFobv6GKWpbZcVFca6uamomcRasPmPJSFLSc2Xjjy55hWgwMK",
  "key43": "2ZJFxLW2wYQjk614N8worKyYNKJXN4o8UwEjoc6naxhNgFvDXSooc75GKws1ksneYFF456KgywENz28ZCLw1VN2Y",
  "key44": "3z13f6Ekg86ezE9bLvxCCGV1CouPYYBh3bYqJYXHti8ND4MS8tii7ap5cUJMFQbXm6W7xZ6HAyBz2j6Ffj65XNeg",
  "key45": "ZoddwngEC3WiBZhhwoDpNaBW7ai14Lsu8w8P1Nt5LaJkLdD7SiSVjkjgCaQHbjd98jaBpQcT3nwcq3ifBEbU3EM",
  "key46": "5RsbQLqhwchTZGRyJRq67iwNWqppAEVk6sLShVWkPP4kfc91CRdneQ78GmyA5wkQDvnP8KewyCkoNyNWzzKSGpyn"
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
