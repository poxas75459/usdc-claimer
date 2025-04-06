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
    "5bAD8V2wUkmuY16J34tuW4UmKgiP57r67HErKahZv6MDiHiud1nqz4mR5yGE3cDQKUMSv5nfkBwJeQjVAiAFWUa5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Ed5ScXsa38WPycahQh25LCACLLEpoym31zJy3QUPg9sQ9M2JeyBq2uzZcwTECLRA9rqg2e9e6nmSbAxHo7nKp2U",
  "key1": "46hjnFPqZXA1bn1Mbp8cNQzJdeN6Eva94yqwczansBjYpMJjvFmWXDQoBN23EofThmGmiwAGNxLPANnzfYL46wr9",
  "key2": "mjPbsHGbaLrXMn57tBWZgr4QFTZGaRUMrYL4G245e6vgFmY4wyFDxMt85ZRT9M97Xc821b2HhAv6zDrYfPoWdks",
  "key3": "51CfZPxyjAf6BzDUKrqePQiojWpgZzBsk2mn2bHaQW1JgNgDHFUjm9CqmNWgUPXimfis7PA5mtQgT8gVeXY2WeZy",
  "key4": "2KSEqDFkUwmtZwSR9pcWZrZzU7RkpJ3KwZER9xcH38QNQDLYDY3xFkRBqRzeNJxyjW3sZDYmsdRgBqoPXfHFe8FQ",
  "key5": "5b1iSjQdzUywc7R3z9H1u7xNn1gwZwPUDPN2yx3hrzg4tEsenpPKgZ7hnfNe2uFX1byQk9uUkAGHX82wdLjskVZj",
  "key6": "3fk9KsFfCLH9sETNzmiS5ppJj9dnb7HpCumeob3MN7AGQoGw2uyWqz4kAo9PCjsGTYRmje7tVUsUomJD18CSpvxL",
  "key7": "4bchdVWiLGT5FgPgP99QJpEnhdGaQmXtK3ugHHWSZ9prafu2DbpDw2wffvvZk4z9fyi12TtEwtPPb5VrD3TLZaV6",
  "key8": "22M6Tf3VCwpV8NPAocjwW246TFCkUCg73Dk82PUAFabKGFy1vxcExuWWa6Lfe8CQri9No3F7TGF4DZ3WQFLTKC88",
  "key9": "zSuwWkwAGiEh568iBaKGZrNo5k6YeeJ82RrtDT85UGDivBKs8MCZ2QAewaZDsndtF3m19u89haAQbm5Vn4tEEtL",
  "key10": "4S7F3roeA2c27uxezs4W5Lsxerhir34Zz4msfcAqKhsk5Y3A18qiNxwUBkXQtmdHgcRTfKrTSmU6ZWCVogoXYiBP",
  "key11": "faoBZzoLqDj6cSgS2cRNxxvstSv8YckB5vW72mVyY73QpKDEdpfkMJWQ2dPtciDkE1NV4hy65BHE9Jamu4v6mQU",
  "key12": "3arfJspsH14uCSzqVdHEbKVPs4EanEM3gYorCpngjRH6Zvm5AT5gm64rGGtkPyESxZjYAuhkBAo1xzKLWaGQjj1c",
  "key13": "2Nk6WqcTLvDdZbtLv2U6dxmaQf3HE3M5pYc3bGvKdDYADm1ct4UqAegCBkc6cR65pb1mzVs3qwY6oUMaXBzCkZps",
  "key14": "DCQDLa84yNf52xYcjpBXaCvA8wg3dvCuoLpvBsnPqxu5tntv9UFYqjaN1X5r5cWTU2ThQPH8DUZP2eUGKx82ydu",
  "key15": "3wNfXUBkdLqCgXZkkaMnCVcJxkw6Xpd7cNsSExeQoUUURTLT6C8fk74R1LDCwPpGfzoBCbyGzr9V7kPQ8kBBF9cZ",
  "key16": "3fFiYg4gFhLRUvyvWJkye4aaR2kUNvctSon1fXfJpUPkYE5LswFnRekD99dkR9XvSXXwcS9rhertFG1xq52y2xkn",
  "key17": "2WShSzTe3nGFQQRdbazC8GAkybujZnetq8hZZ9dhh9QUd4e6wqUNf8678Zhcr5dkkmt4ZR1MpTqSVBUJSp2Xv3X6",
  "key18": "5sSsFH5RUig3ywADwyLbLCnygoSamThSUHEKHVywvKtWqRzB9NWY5MRYKKtutoLvfkveS3mxRv8SEeXJvPZF8a3t",
  "key19": "5utwVY9Aq4vYbLYPfw4m2aqxGFv5k5N3aXeN7kw1t1fazMjdfbAXQwuyuP6wDxZSMTA7itaRvsKR4MseoVpkD2AG",
  "key20": "38sCct9CPYHYeDdVL7EyHcDZwbFL6GkWnQJmh5XPhNCAnYv8fta8q93ZqAUMGS1zXYJWmChMHrekNYpDfyvBQYz3",
  "key21": "4PYWF479ZYCELa5NYaCifGsFwk5TJY3e21TJzSaXnK3UpDoD2ZNYnP1bhfQER21c2jA2BTU1WF1xvQBusqzGXK6T",
  "key22": "5T8UUqBuPmJc9ppX8qUabs4JkV3hsxWCm9C2xwco2WjcW9eKXsK3jxM2UiK2SSGZYx316MKGbN8BMbcTmgjB2BnU",
  "key23": "393Qsz32Wm4gJ8Jt2FUEH2jNadUdWMMKWU152BcwubGxGqVXYyiWKppS4fZoKjiJSjfAogNB8KFAqovvrwzD247N",
  "key24": "oSD8JqKeMfNZvDZMigGf2j58pGqPJnXfeZcbqVimZjYeqoUjVxhPrjbDFervC6x2K1DP9DRX1BG4UGveUDM6bJU"
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
