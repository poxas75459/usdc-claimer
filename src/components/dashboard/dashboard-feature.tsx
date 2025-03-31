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
    "2ncHUfeDj9HKAhBP18MGXUnqBwV7zXFQrQLbdLZnY6xgvxvxsCCGCME6W4F67PtatK7gx8mu3cSEAPKYQCZD9bb4"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ANEZgRUt4mvGUjGkWkoPNGYdeJRmNfeWhJHbTGeHGzZz9jCfY6dcoRW7RUVHRCM5fzDpqJyCsMt5nG8ArD8eAkD",
  "key1": "3PTa7n4c2awvZqgRfvCjCiB676iK3iX9qvNSUnaiZfERvs6MwHEciirn7fuxrCcXT8enEjBj6QNEfA28dMnENQdq",
  "key2": "5QCgjUdVXtjqkfgt6wfMtwT53y1uCCbamrywdVmbEfELQdSUmQJE3SPM8uaeePituCXf82eqFQEmZvGBgBgcXko8",
  "key3": "5HQmRUMtihjh5sn7gPLEuoc9UBQHWwhtgNJNiWxUJxPUBsEhhydUQjXVDGQeMC6drBChinJSbWgy96QMEZtaAoAP",
  "key4": "5RQpvh83bKy8y19pufjS71DPjhc54GfvmXs58oZhptjxgMnzFy1vXHcuaEvmUvW5B82KBmbLGXaFHnvX3PbGYx2b",
  "key5": "3yvSYJhJXu9yNF5GQEgYHimLm2yA6y6GyZL9Ro8X4mPAbfC2ANzLQQzgDMq1ckd7nvWvffLzCzrRVfB6EEnUG5jh",
  "key6": "4Yk4cFJQim85728BcYCjmgVgMhWZrpZpaBkB2BFEL9PBeLKw4JJdzd94w4hEt2FRzYRxDTEWUiH38eYVjfTntLYF",
  "key7": "5R9UemtnVhRn1YNXsQiQuj7qreC7KFnJdifmv2gc6TikLSoEoHPoBncXaVR6ARGJzL48dmKeyb5WovbLNFzJMDHe",
  "key8": "5Ese9jFR5F1cYV7nJ1DucbPeyPxz75EhxpmA3heiKJf9imrXBziGqVhURnmAYLdQJcxiWmnE7jMmnceDtXCjpUBw",
  "key9": "EwkccxYsEF9g7bffm1uWrnDjbHMVKFqATQcytJrtqzNfftTGrKHMjL57py4C5LiTdsJKiSZc2ue9Rm6x5Ks2LQe",
  "key10": "2P7iwbjEq5sgXt235LiMrNyr82qa78hc7irwKZrCL36cvFQGEj8UH4GRP6E7g9TEJRzcCRHK1sv8uWFzY1FgiTaD",
  "key11": "4r4vXzxWMm2sgN5AZAzdaiiAmpqrAR9b5e9FiwzgTdYChs9nWWDKctmZdytg8TouWHJx8LRECSprFMZMDVzoKD1c",
  "key12": "29QPK96SVrpsnZTP5SdyawSguDkX8bTJKHNrqe45GGX2z96zFk6AZGFJypBHkgZEUtK1GDeB5Gv87xXWGPCCTGkd",
  "key13": "ry4eRWKHP1J3dWVGcQsD6XcLXrGaxiDHSap8qEH3aJAJJrVdDe5G8DQbcuhZTHcPXEd45WB7y2k7zRJyg9YEaBF",
  "key14": "3BH6nCgQ5xLV2AtRoCYU1ry26x1CU67YhefRgAuQQd5nZvzWaD2P9pmQ6csoGHia8DVCkg99U6ACngrxU9MTYdLH",
  "key15": "4ScMeEYg3adb3QGdS2jPFfw4npa9N7i4Quep42Vaw7Z1AZ7HjGtXMzEd3pFFjZySsrg1WzJoJ8RJ2xdy35Z7CuUd",
  "key16": "njHhvqftemNbRjHN2FoNydWKN1i2SRZHofQta41EJJ4YqYaWTEkwcW3Luhvw7qfiUPwZtxqM2HRfBZQjAvxP2sm",
  "key17": "3ySw297xkzePKxJNrmw1Bh87gs27wqZUBGN6mpDcvGUcyoMjLuZxmS7Kz6ptheR9YvECFp8RtXPh58u8wfiyCKyi",
  "key18": "5VWYWrUekRtJz4HBQrWtMpjuE1VTNpz6gF9Mw1J5Fe5h7LEu6KhVphAMxYmjvPQAvzMZzXMwkNDWKxytP2nmTBGF",
  "key19": "5Xcv5SoKiPrfb4KQzsJ5QiJuf7aovCPb4QMAcrkQyjJSuQ7h8h7idgbUCqK1wPXKMGbvo12tpP7wEcVWcsEWyTbm",
  "key20": "4bdWmvsG8qrDoWURxnHZDzQywFnGwAhgsX1BTggbkWqowHBHZpPGjSin5eRZpgzmid8j9TTBqjkw4sQ9emvi5bWA",
  "key21": "31hCWwEeuu44yE4rqSPUeyaUHHUkPwu6qEtTbXYbwEVo91opaB9Uuw2H1DjdtehsntPVmKAq8AoXS1QcBvFYneyF",
  "key22": "2UAc9fTAUV24SQxyxGKnRaUsQenRMBgtxkwJ4sobt2hKRTHA5wTupwWWSfrgdPMs58XEPt3QJJAKgwPg6YhRfBP6",
  "key23": "4a3Y5UPPT1oU7DM8rQpAsT4D7RBXysWiLNNNT4FZ2BGyuK3cRxNKu3CfkzUWkwChFfCD981mcDuZZwYCk7i8Qfw9",
  "key24": "3AgxkmUK8t7aQJFcCwXTaRsXHBXVWwcpq381ajNmgBNgpVktKHRokPwVDMRjELdfcq5t42vDPZqNJTqQe4bEr1sN",
  "key25": "4TwvtG9ihUpfFfYKhTuaCRLmw9xZ42ztNEUdsX2hWTi96UhRh5kqVB7JpwvpcJMf4QcCg549D7UM7JCLfh5o5fbR"
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
