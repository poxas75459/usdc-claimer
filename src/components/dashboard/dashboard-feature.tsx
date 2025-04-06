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
    "2KegAY1F61oxj7ePSqCjxn6w4pcTvGb8YkgW6HMvXhVxXmfj3riVEF3cFE5ehmKfbYPPy5rcyEJxE7DkMdR27cRy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "8X4joz7xxLFprCQTt7pE6yxsaRRW6b5Kt8vDCUDcohBZJKzXMKvUURQuytK69veiP7uraXsDcNTRZhqqmnRZPVD",
  "key1": "3rmWmS6yBKNHhK6cKbxsgb9uEXfEy1L7i6FWEXv1YGdczDrF19bewumQKo7SvgmM5ezQZTk7fkWwCGLDWx8Hc3Nr",
  "key2": "35KygiuitSfunVToyXNCZmvQhnWFovXvJ6HxjFe72rpFoKmW6YyBqbnSVs45pkBhCaGKuSy4mrGxAtauUpUUPHyX",
  "key3": "3DidLGZKKA4R16RBXKv1yeB4cVce63KJGnmKNZ4Vd4pxp7DymdWQ2PgMvyEU3FwhM6zMGvGdyC7mNYrye2TGScU8",
  "key4": "FGYUyep7oWH88u5ZTqdDnhD7sdZh19SBpSj9PM6tMwH6AhLu94SH9DMHg2ckJSd56rqAFqJJYmvh6NmKzGkvF4g",
  "key5": "3GdH2ngtQdoaSBAAHLuRjyu9rzCyBnYPqGgv9JCQJsxZWtCjDfwZFDGt5iiFPXUzEwYv24GkELJF1SJ6wsjNg2GD",
  "key6": "wbXRyRC8cvwkja5wo3PqsJyAQaEawEEPSrkcmSrqMSokpSbrBnzcNnuhbk9qtkP5mcgh9xtKjwB2XCrkWiFJNSy",
  "key7": "2NZq9Y5R7NgVz96Ma2duTx5BFFHNBpK5X3RfZigrWM9L3t8NVqj8jpz429FFm2J4Le7pWFJKRdqFBDuAsqtxehRs",
  "key8": "3k7xuTA4FM7bYWvvHAXaHx1y5LhG5cucJMBPBhx32raTYkkvmLfbduUAYZMvfPCzknonJA9dEYUS8GWGZnVx5xwj",
  "key9": "2aKL8PVTytDiXsDj96GQspTHDB5Prta1BDUBPczdayFjJuGY8L18ZhyUXutt6iy8228LahKwEepmaqhpGNBdWNtb",
  "key10": "29n2vkidcF2SS77aRS5wP8aFmJhWjn2684nDYkf3JfLBrv1QRwQ4uuLoZi1KHuwkMtHSconRzdAepLWGgTXdR8ph",
  "key11": "4oVC8nW79QC9djLHY8EMGRJfLiY4NCeiAuTrJLNttemCHV8EeFQrHmSmEiw2Y9VM1sk4b1uxPxCpH4aGDB5ty8xw",
  "key12": "3pLwtcs5Zo4kNCbkarEM5FenXhotx6c2BxmSwVkUvdknXRmusaKCvWuP9JspcZckPU9nod1yUDjjwJz3MKHC7ooL",
  "key13": "2cE6jHHjj2xMRqmWYvw62zWzrJbMbaY2L1tg7upXYb9Qgyk31YFFWgePdjgPzs77nZh25bKdoW6MSW9yQKPFoQBT",
  "key14": "5StTxtTcDuupYu7sFokZYRVXYYG4NjbnQYaBgv5UwxTA1YBnNLnBKSyEM7pnT11BMhq5ntxFvesZ6fbohvXgJV7f",
  "key15": "3azNfainAALwhvYDNgswi2JUPCe3NvGR7xvNZftW8L2amgTRiZvYYSfaPDpKfJrv11SkRCJYt7D3DKpbqymhc7EH",
  "key16": "5pL9uCjQmkyQ1svindhpA2qK88no3RqJDq3dXo6HAswP688sxuBCNCuMnQS4Eb2ssYGMyCHeBCyEKquzFJcF9rT5",
  "key17": "66QKzcwUZFoZ79cXAVCHTUgjP2n4uVzuTTuspCTrKyzUuhVNWcj1kJLnc32RAtHE6jiFpgMxsebyk3ZVpUMe1Vci",
  "key18": "Nm77Q9EwMwJrhc6fSXXNP6LsxKS5mUFwYHVVGojbuwHncYSK9d7keNhCkBSBZgCAzRvtXCVY1FauLc8TDFCUiBC",
  "key19": "5tegcefrx1bDofm9A8oKGyzwDHyo56hAi8Us391urkCgvVTZBupxQCtjFRRh8fnnN9Kndjazv3bD6nRsTdUjUNf7",
  "key20": "3cx2ungFM5K7kLtmQTk3rPeKXbobmJRBTsVFHK7LHHaChyySThY3kkR9mEeskiLKr9nJLdY6EHtZuCuayyYTw6G1",
  "key21": "3dGNsFtnCpCVew5PbpQcW4pkaHNRPzy7wnuRbBVh12zmTeeQBXdwHUxEF9nAFmzhGZbarbBUceYS88h6ZwJorBZt",
  "key22": "3AbrFvgcKdwnKFwUZExfjufJgDMcDMz9zpXRL7eZUuzfnhP9TeHk1mcsnSv5JwNthbhzVFsSS7zjqSo2WUYDkmZH",
  "key23": "2a7gVsxRgoddm2Hk6mtQ4YV1iof1pu13VDv3SZWTd2TjPtncBQttcyQDfTrVuZz1TVqRUZ6t5Jc8R4RWfaPsDdCr",
  "key24": "2GmWwTHoAc8nJFFweBedue1VdCHJmk5YmF4Ssx7W6BUWYMwMxpScAi2iHt6FFBRY88wBcPJhQ5ZNuf4DCySsRatt"
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
