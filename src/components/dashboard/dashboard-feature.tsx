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
    "4kXqkdfJTqVgPZ5i5F9Dp97zJ5hPfGrtLYBpi1ccyXM4Xb5g4cjmS64H6bRwGmZ9g8z5UimojbMuTSKvMh8zaTDK"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4dGMN4ribUoXZkYdkouxKuWbLLFWkDQJ28V3wS2faWext77RTStxPGg1BwQtViqjHaWtJ5NAT1TVdWDbsxjqo7Ww",
  "key1": "4u5X5fbdjoGTDWesFDqrzqmA6pYam2VY8SRdJk4weADga4hRTRC9NQgSnDFtsSaxWCQHSNN8w5s9cx8YMex2EASe",
  "key2": "4uotHWGUR7NFQQbvG7EbDmTmPnmVUQTy9uftMTXK8wGBWh42R6PhCmkrAr1HRozws4VPrc5KvJjwaqai9BLQuoya",
  "key3": "3eE9pY7XsmjQ4ptGyPAX5uRPLAAWmEyPfHv5hWM5RXXtsbob5Djt9RF6p4JuqutrnhGFX7AJRuxxbaW8v2CSZAz3",
  "key4": "4FXEUUwV2PPpKkVuM1jD5Uo27G37XBPcj2547HYZZCDHjoSWxbKZ9ZKgJd8TJ38mTVXHdVxXjS2jnu9xvQeRqMrh",
  "key5": "dqamLg8VAAZ8yJ3ZFvUo6v2sYfrsx3BSSpv3vJAUTBZdx5zfyMWjPDpm3y9zrPZC2SsaauBRj6Ao2UyPpE6A2wG",
  "key6": "4KkcTR6jgRZTJkcyXycEJBBV9n2qXCKHk4buXMoPVGfUouZsSH8amMFdN1s2sZQD574tCzawPuSDNc2h7X7t16Yk",
  "key7": "2U84iuLEmJ8y3MpCyL1FLf4Nd1VzHieQBtJKS39No4AyN5jhNjPoQEXSwNkZBwHGFeZeDzUb4aK4RqE3yVUPjBzE",
  "key8": "SBqEXu6kFZFj8Yo5ETevf291C7fyFdfvbJc5a3UkTK21wAJgeK8fyBKX2TXiwdNFc4XVcfjGkjwzVFGwS1Xitnk",
  "key9": "5G4bgUBU65Nsa9BhVEyZc8p9QLDpSobRE4vaF9tA8Bri7NksXrtGarx4tctmEueJjKaZAXEECNmqi8bmCY4z43Zw",
  "key10": "3VDqmYm3xRP5DgwzidvKRUbg1AHonzGR4mrjU8jKg6GF5VLUB54oA1TrrYFdUCCdzP2nrCnPLMqbd7SRUzaaGnBU",
  "key11": "5hz85aWzHqekmLG5w1qWgMtUmdBaMTQzX7PKYeQbLRXCifZx3MoAhjKQHrEzsP7wxvAdXnB4yxriNk72RpWJd3ri",
  "key12": "2Yz7koXWGFQoRzg7DMBgJAgvQn18EMaR9zme6BZ8BFgDNU3XjUdnSQhnPuT1t6YnAWqhCphiHjydRg7KkStzGbdg",
  "key13": "cobbFTtXMreZJwPcffWVWWAtwVujF5HctbGU5To35Dqnk2fBNFz5Np7y2djrcL8wnKW7sc9TGFu3WUsay3u8qW2",
  "key14": "3oqsiCVzBKbMWDCnWJPcBexE8wtnxi7webTdv8Sx5GSykQGP8q6UH4LYM5uBw8NnLhShmoj78Ab3WxQGJFAtDiGd",
  "key15": "KXCpcgcw3DusuzHwNuMNV3B88xETEjdMkJjyXvYVpntU6E6Gau5pPN6VFftvBr2QXCqpAWx22F98jWKgrxtaBJG",
  "key16": "3JpAiTzhFVuA3P5v7Hc9vVoaVTvWyYpfGcUiJq8VxY5HCB6XmHe4K9d3LQG9YS2X2tsfruh98agfGgCeK2pxZp8u",
  "key17": "39wmv9eb2Ds51DxS4QLiEmFn31td6GvdNNeSZfGbaXPaKvK7dgUah97VzhwSB5QuVAWHtm14j414ht4JdP1CtA8p",
  "key18": "5j4y3sP7RDuKTmUfZHaRroZEue4PBMa5mBauMyQf9RTu9tcYJncpk93AZ3HhPexBMcqNcgba5yK3GXw9aCCfGwFx",
  "key19": "3JkMqUkMbcQmcJa4Y5juFi67XjXozTTKkhuXWWcAyr6xCae4GFkRaSLgDQ6M6UNjwu3MAqP5gb92ZH6n1nZQGx2X",
  "key20": "5PJBHqSNFbsHYbBoDqqa7BVSBav7qoLeRLbBwLGzoqjXUDLTRzLFVxZo4JNbfGw63zgWUhkmYnSwgiM48SLkw4Ka",
  "key21": "3n5tsX5oJfosQiKfGsaxeUHHidnnkvQc3T5DRBpqCsAaUov5khtXY8bugb6X2wp4Qy8j7QHepQ35nEnn57hjWjg6",
  "key22": "2apfBiWNoqRNbfhxHHN6QzvNjGPBbJ2W7VE2EM566GZtA2T1zqN8eKqXC4WZQ9RUqWLf7tHkXUuCnmFDZnXZyVCS",
  "key23": "2LMiVAv4MP9kaWQ3gK4kd6ipCqZhqWRBKFowK5uEXAweTdbYf8Hi6eY2DKPdW6ovRnLpb54z9B54Tt7aka2KZ3nA",
  "key24": "2gQ2GXpEP8rfnSbrie836SKGSmdgKrAWiuMuP2eAHHhPmWqCoAiS5bfqQ4umFzYtxtFtKP1aJ9725cUXDh98F4WM",
  "key25": "2knwrvqaedRFKU4CxrJRyNgaxxC142ttk2nPf2Yy4SKcAsz4VuvZ3dSJveC8CkhFNh6ud3P9KE1xEV4F9jBopozy"
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
