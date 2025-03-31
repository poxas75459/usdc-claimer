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
    "2T5vyVoMokVPawM4fqNkGkRdJsLmQxBjzsFkYefaP2vWavGn3JhzjBgtJbtvz6ssXP9p1eo3C47oyCM5qQ9aaYyn"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xAU1ao2MxVSew3uoeHyXYUPcdMXh32FxAzTSPKCYjqDmDxCq5ciQUzzfk1WUj8Gv9dttTYf9pRV9HwLr5FayiNN",
  "key1": "35wv4Yz3fJVd4BAHKTNkURya5qKLzVYRwWKEpVEEvHnNNqvzXQr8rsYdDBXVNgdet7nh7zmRLe4XJMbtajcghMcV",
  "key2": "TS12qgtUUBFR57SoKrAUwuiu4CT6iaGa3H8wtHkFtL65QZW1tFfSE96zH3DTx62bW1p9roenjE65vJqKwsSiD83",
  "key3": "2wk7iGHCWPfXAshXyMyEfprGpK7A2HHz6FUMWgfnhvZ6TatXq15BdSYPAfbTdnRA7TFbjSpvginnT7DeB6GfQNpb",
  "key4": "5yX6wjs62wSkFP4TFWK6k4hctxpcoKVu5gFB1H4FonfRPAoyHeiRFJoiC89ydzgQtdR7ipUosHrWF4ifd6FGMXeE",
  "key5": "4ChrjFeZmBq9mopbC6MoimgWLdawP2qA4kh2uFhx6W1yiUS4WBFie43JjdqC2MY9e1dR6xYpGuG1eQrCSPni6kJM",
  "key6": "2uZLWhvX5vkTQNsdZtLCvywcH2YqVoxmVRKAeCv4pkjSJUqErpKxw9R8rAETtiZyitPgcUBnVr7bQAF7Gdy7kS6Q",
  "key7": "5sxojXSXEe5xUt2bNwKryRgrBD8xcMuMdkAvaRaZe5Pufte7Fzm7HH8pLGHSa2JqutTLDzBNCT7gmGBeJPCNK4D4",
  "key8": "2MXgzLJDmMBei7GgtF1Tu8jp764A9e7t2gzJeVFU1anWKzrqUmQXYrCt4gHTDGwbsWZdePMzjGhb6GtuXXgMjmdn",
  "key9": "2dte2wHcpn8D66zwZaui2fcgQWfZ6UBY88zGc19pKHkrAkHNHHnQ2TiX49gayDDW5Bf8oj5inzk3PZxaQpUr7PZV",
  "key10": "4Q1KFq6fRdwhTyNivcg5ULCGYS3kipwk5HRndZDignCDwYmhdLsi54RTmzFerdmLsjz3xZANjtHFqsrgQ6n1ggWj",
  "key11": "4QiU6b9aDrgC4uWUMQt4pX33heKiBJBGmyAnP4xDJSg7PPXqvun9cfLZvr56karuuamKPkHQ1Ywd4XhPupKziyhe",
  "key12": "3fA6fXpRJDiUtGFJzRDP5RKWrzTAkBijbjxY9qtLZ1oooprXMfaz5opub5TGZn3NE5wg2FY5Po5RSWZPd6HBuKge",
  "key13": "43yAtJTD7VFERLaW44yiHGcxuJ3W8pB9vuoscQRWM5ijurmdDY6rTSFt6FaZPFUFqzUMvshLF437RCp3JxvjQA2g",
  "key14": "5KLoctcCHoue32K1sPeRtw2iHWzjNrBbDsKJ4v3H4QYoJStVHRvNuAQ25gdCTJVHkC36VWDVTWbfjdvc2RpDKktg",
  "key15": "2iS1oqbvUakq1ziij7GyBK76bqDaeEuWhYg7xsAvHrQzKLK8Jjv6HEAQZEc85wkdpCNhyxevqDLPJu4C3r4D2d9B",
  "key16": "3C1bzPMB832pTtAuKQt65np4oa48MbEvTFGFchUH1HYTGCBoMVbYyvpiZMiwvgTbHfFQr1EewsQNdshbg6EQaGa",
  "key17": "4qNvBPzSpH3N9Rf31C4hugDCKp4w9VZR1Px2MAqaYsakAHgrSU37pvRXN6vFjM3wapPojsNCnwJh2CwjwmNZbpqy",
  "key18": "49cfFYv3YNqmRf3chKGkRf6Sq6b2Jc8k56PUfXEzvLHX3X7GEqpvVqp6CZ2XEUoaGZcb21MZvUvboCrZQfnDiApJ",
  "key19": "3FzbRWj5hacNynBSyHYB8nYmCQ1arqRf1SJVkVCffBAdYXnE57r2GLL7wMSwrkMaTA9u5YBPJv4MbhQ67LqAAo7L",
  "key20": "yyKQ8BEBSM2KBUPq49j7gCgKArzjFkMJB7p9P8Uf5yqFmxQCSXar4kXNbEoWQdcs5shZaFJvUhtTceZEujfc7hd",
  "key21": "3aXRu1ZK6V4QkW5crR4NDusxa85k1kZJGhJFfp23KeL2Fc5VbmT3PzKWVmn68i3tiw6W2YiWVZGpxYvFA97yYrEW",
  "key22": "66r3JVy9hmW9hrv6zGAuewpFhNeX5RtLGdqccyWgXB57i2Ud3bRR4LF3NLLBsvsBwxUMEgqppMDLQmXb89D1TG8v",
  "key23": "61j12zA7Ef7Y2mksMH9recDRNgqWyxAABrradMUEPLQKEDauPa2KXt8gBuELdW5LYCUVqsbktGjKnamCyYotxaRf",
  "key24": "4j43PUEAA5GC5b4QUfcKdspXiQ5UbUAF5uU2WKZoKx6xxMMG6GZHBZyPgRUB5CULNR7JU8GvpecQrkWyNiqNR7h",
  "key25": "3HSvMSdweuaRnUaYq2roE4Ljays1h8Dz5r5o56cNyXfmLyb8igUoCPENVVLpJy7gT7RQtDVLA4ZQxDhe2MMheLh6",
  "key26": "4rPMvd6tkKYVAa9sZEaWjryshtQDFYh8jNWEbzv6PJPVZR161jNMnwjyioTSvtvr9A5wMVDKRuk8h35Qk6iuzc99",
  "key27": "2Th9mECFmGFceh6PPcLPzy3oaWwR616W5DDaXccZjrNrk1FEMWgysAjHGAojkFxWreGD8S8tWZhbZRKomz5jgKMp",
  "key28": "Qzp8wD42a5B3P17b6Ev4MjdN5HK35KfeAdXxxLXzjhubhJNkVsWF8YptopdKv3NPvrR3syjagUWyUgQcuN9D9dw",
  "key29": "5But8eGGufGP3TWGA6wqa4SMv1saCkHxRDXJSX1fZWyShtHF3XDCAkCBWXWbWn6e9KVUM7kbWmo38Zc4BeNWvnwF",
  "key30": "2NESmtxbzF3gHiHWCVa21cxcx2M4jqRU4MqVzxW4kbdLRn5dswaNptWf6dwTEfLo9srDsiBQtPbnhvBvcgcRXDUd",
  "key31": "3zVw7wV9W4KD75Y6wBwuDuCrCAFnAUaWe7ysPmE6u76fyXvmUVaJuYWPtDkeZ2U9aJFSPxc6sK1rAkZicCNmnfoJ",
  "key32": "2VnzSAoWiJ2hnXUSwbEsfuvD3BeAmZAZzqW1uBAwrDTCH52HZYePxgwdVgZdQDjgwKhYDjWoEJXobpuYyZN5wQy2",
  "key33": "2TNvZeqNR9LvjYKFQxES5ueBTeVtSpNSA8KbKQQyJ2KGyBpupoj1uBzARkGYjb7MuXy9bwLwR9fx6tKudPXQxtza",
  "key34": "3i3BdodRgr8dxzLPeYZ4LQwF8d93Kx5SqJjuA4c6JL6tYEbQENPHL17kRZ1VCXM5YBQaZ5CwcYKtEMLjiVsBkFUP",
  "key35": "5FifKXG4W8ZxexWyqtzRGCMivWxaBEPFpJM2HivoMXTNywEG1u8iCBS8YQmDv3adpGDABgkSnaoa3rq7CBNgNUo5",
  "key36": "22pFazjKV2cjjR3dZj7MhiNd64GxmeY5ovFqTWpuLggv4GXw8RB7t1y5o7dxppAQgXqnDXhrpRQkxcJkcBSsvXmT",
  "key37": "3S1DaTktTgyrre8ScGJ79Ut9UJkwrxv33Wb9EfgZxLpLCzusstC5NMwSrLtKmL9JrvuXBX1onhyrgt6PhhHVo74U",
  "key38": "2b7wYL1iETGunwZKyTGUYJ2j2Bn7AnPzEQyMBZKJvLQZ1zz3x5Q2gmNiT5Q758WVBBpzjk4BRnmD2WjWLmhmgs2a",
  "key39": "Tc8vR3cvQJFADLV4McHrSjNfLcZpbSMsNsUePweMirJ7iirQBV1ThDomkKuQgp13674pDmLzDrSGwAHyFneCeLR",
  "key40": "2h26Vdu896y87rQmqB7QxGCeUqmEnysyjLjxAWGfnHTuM9LFJj5hhWirYXPihdxXD9DswHJuGBXu1nWtLaWPtQE8",
  "key41": "5HNY6T1UB5tj2YvnYpSQaj9ZrDv692aooDHRF6kGDWRY2Jwhj9RMb8yx8Y6MAf7qScktESx3gvKfD6DXEWxia59s",
  "key42": "4gvT1UHWZiBahoBuX7XhreoqvUDjtsRZopjYK45ViFyXG8Z5oeSHvVyRKDG9sCMYTsFXa1bnhyEsjmfDhzRPeRbP",
  "key43": "6DbRW4GGL59oxaNZ9TiVEokSaBYXEdN72x1NBsLAkPKvjRZVoLKe2NAdwMFj2GCYgCZPCkWQXUgUm6XQtGzRgD9",
  "key44": "5PT2dmBwQUbv51HUAVYRbjaXA5BfFRS1x2hQb7aSeFtABtE7zCrxzNcEyr9Wd1we6PEDvteVsQ3BKmDrgwQd4KPt",
  "key45": "4PAnrJYprmkRGFTutVnBALWFfKqxocyauE42agbuQL86bMG7qTg311ci1X4JkMgto4JoxyWS3sfZYxFCxvpJNVQc",
  "key46": "23cAyhniVwCyDVnzhujrcFtLa6inkEw9cysmHBzweTBpqz2UwzDkgQfsnfuAj8XpG4vB5qPaKkMBwi4NsqBnMDcb",
  "key47": "3hpSWsCcg8VHiDFUzBgEKKt5mttN9dbzfVqUd44qHVBmpcyhWJSWdjufSskjcoqB4xBfSvGorcc11PA1d5ozv5mV"
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
