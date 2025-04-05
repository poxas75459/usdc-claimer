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
    "FdTuAXZD5oGYd5CP49EJQ6GDZgpJ8xACUUxQQ1rd6B26FquV6xcb62zA6DecKyPTx5iSaQupr4vU4oikzpVoUPu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2CCRLo56TQ4fbzm4WQYARCW89WWR6pkDnnisWx3RdhGjGD4NX4nv4uVHeqM9TdqzN5zkvjc6yF1ciBinBMuTYQzG",
  "key1": "3ayevXohHL9A2Qm6DCe6TJkgYd84U8r9wtUXEqfjAQa88i9RAjvuiX5EB7AUXePQksaik6WV57HQzeYRqM9cyhYN",
  "key2": "42cG5yXYkhG4DMTN4yPmMKMUuAUjUXAu6U18AQCyaQiVUQiyHDnc1tifszRSBq67vQMiRHPTfvQx6rm8KZmUX5Uy",
  "key3": "WQNDcWxS5jzqDRW1PRj6BacnHyr9mayBttzvMm9Yz1jPJjJ4Hrracqg9e3ZnrqkES5NA6qNPWcAofEaEMmfyqWG",
  "key4": "CupTohVrF9CmrrSdSpt41mWmXAAuKvn6cEKubH2AwsNPUq4xAFF2ittzXnCibPmg3mEKVCLkcRdz3siDAwyjLkn",
  "key5": "2vFUYQ2wdg6vxqyXjDVeiB6cEM4P4EgJkMJKK3tSgZvUe6KCosCzPrDJY2sP7eoqrdEamKz2oB2TSwj1oB61zahG",
  "key6": "5aR5rkADUSS1yPsAiaodAZHUaCBQDpBUPQtqBi5Y9pbXdcZyvRVDNU7oDMgGqGZE58wuyAS9ZcHCA6yibNNJwV4D",
  "key7": "2URRL4shcReh2XadzXMnVUDLTw6DFv5a1YDFxpN1hBTwzaFcq6q9h1GaNwYsrZim7uQY2xeqhzk6jE4m1XTjkESP",
  "key8": "5kvA8kzdUjHBGF5xHMhUhigPdkd4F2WXZvTig7VHDB3z57owN5cPXG6W8nBodP8tFSRANR3F9kcgpfY1DGsNiddu",
  "key9": "2eF9BY1FEcsBjAMoeSX2ARzkByGcqsiByqbVstYjy6pafpd5JfeciSKPj5ncSrH9oxgeRrbAxKVMeXVX11EZpFgZ",
  "key10": "2nTzdXvvp42juKauSWNPYMq4t1vP9nh3KLvp1Jmwk2kV7tbUSHmc59S9g8E6shEsScJow9yU9wJtNy8TZXk5gm5H",
  "key11": "D4b9S8b2TLyzauDhf9CbcnoHQf8newhuFDHgTswyGRugNPNYWjYLvT4BhsSKM2As2pejhCmNnMXs5J9uuyDgzQT",
  "key12": "wKjUvw1nM4HfzNNgmn83yxFt84DnEvh9UbvfvLYwqpmPri31UZdwhNUW7yU8Uu5yXitNc9sRt4i3SiNFmTEmPif",
  "key13": "4aKiPTtTY8eQzJhW7FE4bJvQSkxYD5mkwh5EoHh2fqzgKNjDQRRZopYxwqtkngPYiTiLiQSLkDxNsJxwLbTSqnHK",
  "key14": "3B2BtGEdguFm26FojYosg3sxoiCd49Q9TGuqjPJGkSrwKRENH9YHVfDJXNnaC4kvFnS84apX7V44HEZ6uG3Pzedz",
  "key15": "3pZ53UUDfNycCoQtH1GXZLMDevNduxu27UK1FYNT66qDoV15K3X1DHoUTawQZTu8vyUKXBEZvUMMhjxhZRYHnprb",
  "key16": "5ZtJTCbvEFmr5Q7Rysdkn86vv1LLnapRnztxSKiNb9CjK5yeHS58H7MQfpQWm4TpN3hG2ndXsUsWJJ2XA7AfPPci",
  "key17": "4Pp452qYiWq6GC3kgAVamQQAERU84r8XCczukFsPxjs3ZRHsHP4TH7SA3zfpbh8VrJTp8CMTFUKUQjTV6L7mysTf",
  "key18": "3Tdic6Z1iLBWbFEYWvLZZyNRtQ4VkAsKvrVoZRDEA5JWd7M8udx4JeiMd7wGxLoomQjXdFc6aZ8XMcUsvaGCSZWZ",
  "key19": "5NfGJd82iSdxZPHPyNYEioNUT6cSWM6JZDs96s3PCcZ2FbpuCwTz6TaGGRKjhbNkNtD9RMJDS1dBkTL5Ta5TeoUn",
  "key20": "5WcAWWVrRx4AKsa5BQeXALGSExQ3nQ5EEocSgYsxDbU737g9gXo76k7P9axFLX31y3F43rcz1ks8d1Szg2sqDkYn",
  "key21": "5kfwam5o8BCVNn6ToXKziUitayCBA8RREP3fbaFz3t67mSH48kxXQ6gwxAnKX84LhDPtJNSnM8SyjmjtwJjMvjk2",
  "key22": "38ejVLQ14HsbC1pShXKEdP4ij3SijWiQybLgGzToyKKETrbDgnuQdEmzR6gY59SmMCPV2icKYNKLbWPGAMQ4mTVr",
  "key23": "j4w9M2xGyzeEZfaPqVFMpsGrTXLSUxKsx3kUExf7WKFJtfsPyynKPwZjavciGhJczh1dfWVH653PqFBjxJAqFLD",
  "key24": "4F6MKNRcHaDEzLvpTxE6hwjBxm7BKSthfGegbB5FQoq9wMWpyhb2maKg5pk76Xy4MuozkW8FuCAG58JG71is21BE",
  "key25": "64uEPifMn3SrW85WDRfQ2PtRzKrJWiMitekwrveNPwbXN767wb5HSETUVYwqGT51ibiyWRyixUzeGyAAoiMDnhwR",
  "key26": "5D1DHm4ZqDwaSzQi47kvxPZRe2tcskqNVRCNGKcmGusk97ft2B5PpSZGGGmCCYb8u8xTpmj9QmZJfyV2f5oBUNNb",
  "key27": "41fWRWjNhxJ8E5oKrXBjsXt6tojmUiWJzNVVQnADTyFmm1LjCmwBfwTnm2ejNaKRd3J7hWyV45xPUdmEsUZKij5Z",
  "key28": "3XgL4YRiu6s6XzF9Mtj2K3NaCdn1tyH3CASWxsQMXgwh8HjyrPQRNrFZBPo7h7JwTGGiziyz5eMLMAKP4vv9U2fK",
  "key29": "4n7YSJbsK2QsrNWM11pQ5xr2uq52ZjjeY59REgUfX3qwFqR7bfm5rjJz3TknDvdevRLzobkkAarSMdy88VZyCN1i",
  "key30": "2ooDDyzGa4wryLT9aqjBw461VTjxYA2pDGUW4gBunrfDDZoX4WmZfdsPQqfCBvtQhbFtLBNHWJnKgHxJYcje4Vpv",
  "key31": "2Mg3k4MHrFK8tC6JQ5oRoS1CdcVmGGQkVbcBwK46oCvePx7AQ2qv8iPPPFfixCXJ7VABeE2EWM6Mqcg2dgxS7znH",
  "key32": "4ucp6Bpqk6kkZrYDMTV1G4gQmktLGHtbvw8GPduKMKub8kvf1yCzZMRuxiiCiaeazMkphREZu6jRbe9d7i6fbHsx",
  "key33": "yRSgCnjs7KoGerHCDTh5MyZyaQn8x4oE76Twte3UNUkSJD9pHXgodUSiSxUrgyGvmLV2XBi9wNWjdV9aT3DoKFB",
  "key34": "22gir42jVCTWJY6bGv9aLvsRBrFGM295c32UraUYT5r9qwHLUz37QYhfEi9RdxWkbMDnSWFuYUP68vGumRPD3Gvm",
  "key35": "31sbDP7Js3qN1g4BKELCxTrWtXsxPNncon1Br1ZFhfA36jhdQWXkSgvPRbfUqwjRRhvEv55WXKeDYQRgwiWWNFJu",
  "key36": "5TUiJSAvoTnf6FLoe9CTYjPQ3YPaUC41qAdwV9XM84u4j7biynnfkVrF1qFPy8PofSNCXVxaFH7X3sGoQ4q7RT8K",
  "key37": "4fiZwK4ZYYT5iEuoi6ctDnQc1QHr2hn6kprSmDCD51kLfj8vis5Y29NYsSaLJ8SDD3rhsZ3x5zqQaBQq7Bng2AAL",
  "key38": "4QSD34tZNSXQAFWuijC4zVD4imMDkdCwFWkkd1NcySbJr3uLLPDpLZoau2vaKsVrRBSsEL8pX4cTvgFrzawNConE",
  "key39": "34rwyPaA84Z1bXvtGxNaGZGSRdWoykE33PENWWvMnK5i93EeZaKuUuM36b6z6T6siqBPhiEU7fCsxc2pcPq5vTfv",
  "key40": "5vwSkAtB16Aa9MbBbg2s66Fzt4HJKcV9N6nbRJAgpBwN1ooqjHMxQoceLSzBxW6QK4YZ6CW1fv2LJRkgqioeeyDn",
  "key41": "2hcV1hMDskVqkqiL9yyEczRLLUhJj9wzPGJsGDVFrZaz4wNQBC5wVMHq2T2AhWcqkwnEFhMhfTdZV2jVeSJ2QXRh"
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
