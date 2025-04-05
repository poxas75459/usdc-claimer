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
    "EqHzjEghRD1xkySXaNf56A4qWnSLj6rTLfPpQCKV2eYx2t3wjk4pUc6BxaTzPvdukpEWkhsLCdSRGeLojozoFsu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "gZTbU7QRUG1pyqPDggMT2B7MUnHuGchdwMQkteieWnQXsKtfnJLUqdfg6QrVpM2PoXyZ53vAuksQ31aEkUdV3wt",
  "key1": "4zH5PAtGx5rixfwppXkfbVwiPGKSTJNwA7RwnEpyi7haWKD1cpoByrgnKQ7iuhdUkig6QtdCq9MPsdss9wy8FyGd",
  "key2": "5fsDPmxDZivsCYRLZfYgoca5EN2x6ViPdjSgpfzHCGWAPxYezRKWLsP5y6j6og35dw4D1EEdygUkh3HRwQsfi5FH",
  "key3": "JKHioXPanAXGmxnc1yxHJ2YGWD2BQ2PKFE4LLqzswNpLHhid9S17rHx8nb7bn6D9rr3NceDk2amEjMw6PpLxy8P",
  "key4": "4ggBiA5UQZWQmfdi3GdYTmd8nWHKhhASG5ba9AvdcCFw1FGuVPHqS75Weru54nkCYimLGiKBQ1FRBDJPRdEuzgFY",
  "key5": "4xQkJpBRRnKWaKGS62c9ocQGMcNYJyPZczuGpBNArF4ShPxSR1taEWDDMzbQyxxpPGHikLijmzmpFoXHijd4YSjw",
  "key6": "3wRCmYH92rwEsqvsqy7463xZBpkPsMD8cLqoo5HVJWLsjeqsEsY1cnEP5uvCktDMu9Sg3mCjkmz1u9ZRQufVxPv8",
  "key7": "bjvB9dUP27Voo2K5oTRuNwjqoQGLqZYPfCdFDrb4BN9u9kbk2r3jVDxYwtXUWgCURZpFJnHJi4pww6sDA3dqNi6",
  "key8": "4qNpqp2zdh2qwaKtncU2aGxvvV9KQveE8hxeYg83hsUqS72ESTupiF3MJwJBaE3ZYcZ7GGNUYgje2Z4TnpwMQY69",
  "key9": "57bXwXdByZ7Sa39nnpU1fFcuZWDWbaGMEd7hPmHds3uDEN19yazSLm9CMZeaxkKe5deHLME7QkkfMqwnK6fnx7bQ",
  "key10": "2HmWcWcTAqEhHV1mKUNkHxyQN829sLToQTYuuCUej9d45rBvxDSndhuRcaCbTHevHHPaj6eoyfqSzmb41NLNRL5N",
  "key11": "2jgfSTzXqgzgMSt4BJENYPNCNiYjKXo4VH4XrWKh7W1H2LvrHGT123PFJ7NZfBGMSYZfDtGt9yHwZ5XeoBxAAm6w",
  "key12": "3YsEAitkiM1rFAG5vpMxzQJVGkQ8X81rZYM2YrVtf48E91USuCeFfM45amsS6zWcLe7xdfNuSUnhjJeYuWX3vZVK",
  "key13": "29oN5T7o3dpNeqwsfU5xytG1PBQZVzNE3e9bmEqMSjJaNg9dG9W6wxJYG1rX9xcdR1CNh1e3m1vjHyPS3PP6XG2c",
  "key14": "4cKUvWwHWntrjyRP4FkNfkJmhJSUaYWMoX9jFyatQuYWxF7jiZPVbvVG9VVpDiaumW3X2JfEYcBkTxLJcTkCAdzv",
  "key15": "51JDnBhBXRnK6sSHNw5LE2uXvNiYvu9zt2WzYvMDBifukyd69JMWWRUUGMvvKfkCYv3C6mvqzziN6rFzchytW4tg",
  "key16": "5YJStCEyBSNtYbadRTTD6HKZ4EHzc2M5Lz5K1ZUiqvc8YS9e5jvH8bG3SdTiEqMy6FhdA2eTZP3yy48Rx323z9dt",
  "key17": "4J4KH63mcpj377QppsRjXLts1qfrkKtRfrF2HLHndvY8fZLD5x5ZgWQ2NhBr8uEsRJnBxcbi6J23rTwxUz7FZRLy",
  "key18": "382F4kAHJLjg7s5SwPnmMuqCpeMayHgaW6JkUSf3nhSEg5tGgtZRcnnqp34QAWqtf73KuLNLhhemJ6d3Cu19rJzj",
  "key19": "5wwGrqaCeZbmTkmmWQhDuvAE4SoJFnMRfcEkeyarY4FG5CH5Kcokb1aF41jZZyk75SEesfM2CQqb6JEMjDGqMV8V",
  "key20": "2zAjJoRHa5NbwLFcuje9gLAn6jKCk3RBzZdFDfBETDoSTYAdvymkWUUCocuQJkauPvQDy3WcnfPHfEeFitbxrwwC",
  "key21": "326tt52pC2L7CsRhQ1a6czTgp52ZndtcBxyhyX6PNZMe2WttExr38S5nDFGGwSY1UVDMkXYix3nwKFSWwskwsP65",
  "key22": "5Goqr1gxb4ZzwiYRkSNSTv3h86Xg7QkF5J8e8C83ZzfTxFY96s2pYo8uH7dLzdzj6VTG4Bg3vFNgvzKT1CD4ABNe",
  "key23": "5RT5P1wufJGLsYZsSHgiyvjcgM5sKrzsVDXKyuMCntkqxKbbjCaiopU6rZq2YxGNobbMURuCiWWReuMb5NGP7weQ",
  "key24": "5wd5AtTakzPbx5suSjFmGAPKDN4tRmC1zWQrTotntjmk2e18zuj5rtthjSwsYQp5hULJ9sgr3kaY6vSGwkvJYgNK",
  "key25": "XiUQ3brtvT7V1rJBLTUrvwNT9BjyeYCdSQ4zcZnfKEC4CMbECC7QrYkjUgkHaVbBoRSboU8F3P2Th5D8XjswgHX",
  "key26": "XDK6PqhTbMGmDJmZQRkGMZZbfTSTfH8pUkjSTpyfwDBVktQ9eofPmMZ6XAjMn91YdCVddRGyHjv6jiiWuTiMyjW",
  "key27": "2FVJ54SbaD7v6xWCkhwmN2FQkJrb2JAuUCHkCqx3ZgT68HVTqryY1s6KZafgBrNFWXDy9rcQPsvr6fYisqjgVtFS"
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
