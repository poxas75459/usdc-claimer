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
    "2C41V8xbpwNYKsZF9a3dqeFLEydPXRkTw8iWeknJ6CPbKJMLQ6UUM9i3FG9TN2H8hNEAuTw8N5vuEiAiZPoyAnUS"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2xiq477258y4Jrjhxjtaip3wYnmSrgdAtU9bnvwo9KDrm6dUMXk2o2k19ZcuQbvaefgefMbyoscieYihdmggnKf5",
  "key1": "4EKRkMS4nEDYdenxUusQDvbpMqLECyhre4y7KHtzzGkdFE1tqdsTnka66YdkgBv2mJJzekezhWs8WhWK6FSHCN2Z",
  "key2": "2d87qab6d1e6WxXMP1bLo3xjuNaMRcAfNNMLT6vHCY1wsbmi9iaDSA1DnHVSJeGLruZvi3oHsAcEnDi3ba6TGUWf",
  "key3": "5aitr6NPDiY3Vo2JAcW7tyAWEuQWq1ADhUfMPn2LmtFWSQU3kWqLhQL8oAWmscHBCLAMK4eTba9XqyDXN4Fad33U",
  "key4": "3oXwSgBi3dnZHcNNhoVHNxHst6iEvh7rLwYqmBvh3VK4sqq2dxZTGMLiCnDMGefAJuHYB1EjkbFT68xMoHyrZFj3",
  "key5": "2aevA4r2hzpyC1RnjqoyMb5WTBKycmoTxATeqqo3wH6h9p87DrCE1X92kMy7nQXW1mDRMZjawhT18WFu1n6YSdNM",
  "key6": "67GVNMTCRLfrkG5VBGRb9XCxcyyzG2Qf3jzAXZ28wm1vCFkya3yjxFBLqtxfRmkKrjaezETgfnywhzSnxgjzAjBF",
  "key7": "HQne8HZQDMSq6gJVpDFYGzk9FM7XhpYdZ5d1ggB9LHofcAzoQARsoevci7NM1yKUbapq7dsYHbFLfbcEjD7MdcS",
  "key8": "5yLcBV39N3v67dUAo5T3rSaBLiBGi31U5SDfFVossha5YonVCBdCeiVWUTVqbtW3fooeNugc1Kpa3baPnayngg1y",
  "key9": "azY3MoLgusznuQnFckyFj7tYqZT9772LLSCCqcFVYJ1aWyLFKBXNKWVq8KXAnRsXPjniUoWySf8YTV6o5tkPRdo",
  "key10": "2KoZU53twNRPaQdr1c67AxduwApdd3JbhVDDR4ekHNdw5gWSzvKeEfRZtf6ugY3NXuh2b2oVojmRSyA4Van8v6s1",
  "key11": "65NWuvveMrzoV3VTomQ39BcvsmdktuRrJSAUduma4SEMoct3zACBM8cZqqoFXabDpR2AbCqxhgYQk6K8Srktjiz5",
  "key12": "5MzVfvXQka738reLJRifJM9ipne3yXjaQoxgL8rJDCx4149DRXXJDwtoi77of9VTTxDWNCyGdUXUPZ5RAScePZRp",
  "key13": "5qefz1J2nFwVFn14oM1FxuFsoMegN4ibrLSBby2Z8Jxs62qiPZFfCgz93p97GigrTzF2hA37mnWZfRXnpjPsX5uU",
  "key14": "4AyfNRkkg4cHmB62bDLieraeNyKaeNkF1JFikdxZVB7xbBt2fjAaN91DMou88tKi1tZ8gAgHFmz7SPZ2MUcEWLGc",
  "key15": "qNq7Xq4Xe88JgEBBt5v7YACfJYyezNvu1Qhu4uYF7dKELnunvgqFzRPPaJ1LjNafS3xuKP581QkypwpWLFwWA86",
  "key16": "3u1geSyQ3egz3YbiPgHqCXQkiZDNwKk8BwQF6ncefkRXMdxM2rqknqLJMdV3U3n5QmC37oKgMJinzAMZqaGgYBbB",
  "key17": "JsF4dTJHiPAaqNgDvV1pP5uoD7rYjkgrRCR1fBve1WAhNT9468Vnkoid9WAwdrSK9RsVr8y6yb3Ji15nVXb3iC6",
  "key18": "3YGnpU9zmu9v1sfFEVptZ1p9twE6ibqeQ6HvvRzADm1tHAF6KH3XekpRoiRMU6pgRCAYJ6GPEhSUhsWLxXZr35BX",
  "key19": "3YDRmUEtdPTpL5QMN4p96Q3a5S7zApKhJ2EwF2M42rWXfRat6PRK2ToyKyk6wRL2zLkbQ9QB5vXYKDaYFuNWZq3j",
  "key20": "SiY1w7iuTF6AH258117tJGfUYfuAVZq4LUwSfTiEmrmgRdGfQet3eWYCKUwinE7XVyo5YZFqXxHV74wMBEzZzpv",
  "key21": "4Cvz3dSW17XQAjLCeVkcjCTS7GAi6Uf5e2qHMDYpNAbX6sMk6gg12ziA59x5Jc67ojH3Her1GGi1ghgoKCoGiX9Z",
  "key22": "2BHcFoQM2zn3NwpbfzfeHY6Yz95qGNNXS5xaggNrRdD4duPcBYake5S2hbiNQ63TBz1YJUMR6pnRbgC33UtY2Rzb",
  "key23": "62vdjWSf58XJE19NY1VN7cBgfE2P1TgVdX7BY6xw1uLuQJvkoS5jS6SVwZtUmV4XfJxNySukkEWJWQ6pzbFdxBES",
  "key24": "4K7z6v1HcmhAvV4hQP2Ynoo2bWCdW2UHqdTbjYMr1btFeQXfjyu2gAVfJMA2hg2es9jWErWsKCnHN3fBoE94DMcE",
  "key25": "3fnfGCAPTxGBgHBa4JBJBVdVKkFGMz5eY3ca2ovhLzZZ8Ag3Ar5TWmGeJwQP2jS2LqvfDbjep1Q7Vje9LiiURQCq",
  "key26": "t6JC3vcFREHaneYYGyJePx6Y8QiKBzh3xYkiz3WZLfjwkFSbjYvsMFjsem8VYhTxfvnteo34csdNCmQumiajpEp",
  "key27": "55YP1F54h49ow8DhKH392RRLXjokZUY8QayAAzZihjQqLVy9ba2KPzSxvnsugRXZxbhWg7B6oRfk12EVP5GwQmT4",
  "key28": "3w4bvFg8HC1CmpMGm9M6wpgGqa22sZGUPSgwkUg9AwucbaYfBwyTHEvKE3vNbjQDpV2GrVJqxMH2qCeKUApCamDB",
  "key29": "23FLW9ahFA4Bpqh6R2TyokDFTRkZomDyk7iUd9MeCoqpVS6aoM6zmcQpuZkMDuiqZL64JSKa8TWFqXUCkM7ggFBw",
  "key30": "48Th5dN4xi7hcJbYpJuPHFBtk5kRYAus8PsyrQyKhCdS8Td36tc3h5LR4uFCWJDE6LHY5kmUjLVWN6QfnwcZzzZ7",
  "key31": "3xNT1uknBLEk5XpdwPvHds28ghoSLseZnYcqdAcva7k72468ANpicjcCNVYRd9JBYoTRjpGBm5B75S9imPbqEUKW",
  "key32": "54dXt8hjfq4KNkT89TeJ2msN6ZN2f3kbuUQaZXkLDJ723w6ffKxZdatB7PLPL4kFJwfNjQoXZgSsi2TXBiwUNwbx",
  "key33": "3KXGCL9TBMMJv8qR7QwBBc8iHPWJ4rgkdG1LSBiBNhURBepeWuurdKhtPhqtCgReBpXtYPhGJSropT3B4VQ45bqA",
  "key34": "2z8xgQ2SQqajo6asR9wSYEBXN1BETbXthomFPuQoEgQtjZYm8Z6JBafNH4Z9YxZgxWhNSszq5WVqoJJxVBJCvUAF",
  "key35": "3wcBXbE6TBq61WGK6CGmvgtFLuXeEdaWtCU7oYrm5K3UKstjGu9Aegv2LUD2wDWXVs8XxW4iR6XVEdEVkLJwY3xv",
  "key36": "3uwnDbqJ4G733xfoUzcXwRer1yLuRnHAeDtGPrG7WtjqdWY3HjQXkVN88SvMcEhVHPTwM5md35RapnZp1bfrvvdo",
  "key37": "2M9NrTJQC2XkU1Fezj1m8SiUZQ4dTCXyJaE4qZrcuEEj3xtMRmU7feKenDQ5srYVtcth7XbDRAL467tDdvNqrh5D",
  "key38": "29vfkUnpwP4EPyMpDDj4raYKRwnRtmkCJD77adaBL3GowLPBhq7HobCuxTowdmCVnL3dvNbKqA2sDxNzfAUnm4Jx",
  "key39": "38a4nq4wkN8dBhMxoNmex4sqU3P7q8QyuEMx5JZBLk6L71vKtjKzbgT2KvdJg2NQVWkXDhDdmUMBxmbiA6uThuoW",
  "key40": "2F6UxZND2ABzj4UWq4fJDMEVyzRma6qVjB7NKgM3EPaFTyQRuM7PP7xf4hrx3i9rzA3TZY5JgUD2iBAt9j75MMwv",
  "key41": "4ueC5JtLpxUUdWfShCh9rcuSkdZjKwDYqUS8JhRTCoy5hjiRoSkVK88RG6vn6qUBJtzTiuzuEKEBVsbPFD9vgb7x",
  "key42": "59DDp9kMwi2LXm9RE1kL4DxJcspYwCnRsBjfcBvDHwj6MN4Fumti34WR4HJ6HvGms7RzsEdWRikqisyjhiPBut24",
  "key43": "4KRePGkjMganoG16mjARZhmcRUDw6DBW7pa5EUo339TdwD8kGiqVHb4esybeqdydfEnk7x7LSkPVccPbcJmjrvmU",
  "key44": "5X7dmh5GMYSdjZFEoQURPdkJ3tMabx69TiuV4M8vMdTAHFmqdAfmGxMnZzE2q1cVL2bTBVVBh5hkPu8C4vWe2dWT",
  "key45": "S5d7Fhu4bW3vz71R3DAgUmwNtcT3nu54AWJZhoKGjTBCtkNnSKxPmRqvpptYDkecq8ZVxzzU7FxiHRzd4EhqQfj",
  "key46": "kF4Ui7uNCnhBeEdM1YGmKxhEjtM7NZxLVYAeK632H5Nf9HAxr3kcp9wXCnQb96EZxTGRjtYquVjTWfuvLKB9Qic",
  "key47": "3AWmFTz3WDwQ7yXLppAibw9kiGqqqoExLdKuKW5Q67zxQZkYY9FBx1HSRM3DKDp91cveYMDbxn87LDocsko4e2Zx",
  "key48": "3RLjDaefoEVCiUAES4MbkvNMfNiBAS92sg9sSaMKsVbGoRmPDxYxDAuXaXbysetZyomxUJS3qgzq7MLH87osb5bD",
  "key49": "3JS7BNbW6rV2kEFYoAG5KcHMwxXrKcSdraPJnptve2XjJtj24bEUV2xWaUXBaQ7HDB9qRX4Q2QMpfQE8WV66nr22"
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
