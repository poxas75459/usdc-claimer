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
    "W81QJfL1z5iRQtrBbRy7p7RNEsYsEzJjrQSR6mLaop8S1eUTTeNr61iqFm7bRbn2W5zToVFCwYbGD23e5ygs7ZW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4NjQCW5zsiGjAnDJTRFqiRf1HkAfmZPP1htR96y3WQzUr254DzEEEaavLqexYCsqJ93QebRkZXzn1F8sowB2fTdJ",
  "key1": "n3Bk4yEgyToyfGoDMUD6gz2QXt5P49tJokVKnzubunQJDweBsjgYvD8YPgkVsXZXKFeRn8nHPMsJe7b9w6aRCXd",
  "key2": "2BRa42RBfnvKtELn9YRqdig7skCp3rVcdh7HPFAPHGdAX6taG8Qi6Pa6jNtQC7y4hWF88osNaMcBUzm5FMv8wpye",
  "key3": "2vEvQyaaWifYraq6vAkzMkuZascGoh93w9P4wddWs7NGp9EzGbkGPDrbfbAB2Kv4L7CNKNrqKQFJfjEA3goa9ndM",
  "key4": "2xweQ7SBa2kAXRyat6WnWPbKrEArKtpZABxVTPqkEvFefcrUXqG7HRe4vGzDcqsbwHw2n9WKur5XHsSgqZXTUAnD",
  "key5": "Hsqpcifq9nzGhprBnBRwkYnAcTqbYMA3vTEiX9dCh452sDEwhFPMbJsRBT3cGQAVbac1Av4BTQYzQ5AiMqwBt7w",
  "key6": "2xqxcNRmDz7JYKpRUK36qxjdW86XbCUh7agdQn99vqxtPzmv787rwu2a8LNmT7MWpCeTXZh7bBszH74bUQFmfdtQ",
  "key7": "3XU8cg433z81nQZsKsbkkS3ZYnRedk92Tj3HyF61i485bcTp5YUcAmSnbEnpdgaCbssWZZeAMPmxF3Gpn2dZgfem",
  "key8": "5Gfa469Xvhaf1aSoxmMvErLByxUuUoaV13b56xrfSeavaqMrgszf9PhDhdd4ARK6oGoUKfV6SZdbaitVnt2S9jw9",
  "key9": "3ew1vGcRqiQeRR34TSkbwEVJqkG8vYXs8DagFRr7HruK6cDuhUxEENhw87w6ZdVKGWDs3wssbAUsxeXUNh16E1Ff",
  "key10": "PVCurVykGCGp6ZN55vGDxpWnxTiz9UkJSgK3dT4Q1pZeik7eZm6yVPrJNXnVaTHdyMqV2EqbGHQLSEKCGXbZtmf",
  "key11": "ZWtSdLeZETuAaiKEXL26d5pYe9TZTX2MUNmpdFdrFHMmvemCcru9faUHXMGam1wgqNo5bCe6KPpwqWS8DFcAvrB",
  "key12": "5mbtFQWLGR8y23CSwJkkv3r28eTEKjbqk1cNGpq3mNWZyqV6k9ecLJTG3NzeU3mHNdZAKFmh7nTwaz9fnSgiXuMS",
  "key13": "GiqWHCDoHJYrFwnk43pSxLVLtCzxcfCHPPnXiX8oEFjhu1fRwBNH3hh7G5nKtaRFqeTtGmrAeZZfwnbKDw28tvt",
  "key14": "2enXD1a2g9ugZcMYVKq7N8KH2pQo3Rt2ye3mbhrNEDUUgYKTFjyn1zhUUeJm3x14W6UfjRW3GnsxmzV1XuzPgQdc",
  "key15": "4JDd5ZUePUYjkocyrAtMvVyKKLMoycyc8ZVx5oDMQ61hg9SpB6XAi9piFXtJjUfVw6e419UJg8Ev7DuocSsxQB37",
  "key16": "66zssnbdqfGMG9JvKv2ZUfACLyiPBzAmNWnqNtYNJu1UAFpXSuZuNARhuWWjxj8nLrjX8rsh95qCB9F2rrXQwRUE",
  "key17": "4jooXWKhEEa5tkL8AXuGu6bzhj8z7FjnbnRdB47pj37G7FgY9mN3H8BLAQaBfN4C385BBt9LncotHpuUnwrZotip",
  "key18": "3ppjRFw7NmNnPo6vv82ZssqRnvay7CpU7BeUbbHJfkNFvf8ap8nXDXVKtFphQqQkM54MSJMwvGfJbm5CCw159KfT",
  "key19": "2RJmbo7XPR1LEFPsuRrJSHi2WfBHkDo6oFUH1qncAvQxTDpPJLP1eWSqvZWxPe2yaBnSgBoisW259EGsrDQyznSD",
  "key20": "5Nebtyv5VfgA3kwU3FJM2NCJNuciUkBTw1RhSzdFYpU2McPFsM3xwWaZEKCyyLMUc57r9w9x5AKQKMnUtxavZuCZ",
  "key21": "4WP9iBWtiGL2jXrZBgrukqSfTHkBJjtyesTUe1YpLLuNGZPdH8Nxg4FEwpXYwSaJNEBZU7R2PhHXi3JnTeWY5F5W",
  "key22": "4QwqQW7moTnDLwckE6C7R3dtqk91cq3nsntfKqNSafaPozVsH2ty8uzGAvMHwA1rC1oBSr5vAQ7KmfeerbvodzYA",
  "key23": "5qcAsuchbQSDDbZsAGuV9LtVkVd9p4y3WX5RWFGSkfNqRmeHTDsSaSuPFAfagP4rM2iKUG7sKc56RCYPiG7aQJ2v",
  "key24": "3a8ZdKA2jNbRySJX96zbWHYQHLAPwYi2cXTQnYantj9XAL4jxBsLSCBAnBDSUK6ykHD9VpVH1Pv38gZptsLsXYm9",
  "key25": "3rbnrEVyb5qQVqgWsxgMuhiqy78ky4xJPMq7xeDZ4uGcPFoXkzQVuBbx1PB8VhLJGa7CUi62kdCsUxF71CkXuULU",
  "key26": "2ukTF2Hidnh8NmunQn8Lv7YJMamCJAmcYHvxpxiN9r4gdwQyLifaHn6EATDNBGDJux1CHZYDNBTXZfzvJG6EGTCz",
  "key27": "FREa9w3mfcTVDx88RUfit9cPJVQ8GFmJ3VrzyxRJgzfDWbKmz3rATc1P6DSYw1epo92DQKTSr32dvBfYGy4H3fQ"
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
