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
    "3k91G4extivYPbU7Ua9H6R5DJeURavDezePkGEBvoGXbQU5a5gyo9ysfoUiKVth5a9oBVBTe4ufsNwmxaLYtxVTA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "46EZ8u6p8t1TkVj29ecTa4GngdkH1ojJnBJVRMyENxBvkMV7TzrrxpVVM73XSeNSFpyTnqzAnft71p7r2K9PrPSo",
  "key1": "2yLzhKtNUS24uNWyMActbHQGD91Ez2UbcqFqzfaUUvXa7jVFQKNaAnTQtc8uKweDieV9s2aSDG9gd6XFFw4eu8Db",
  "key2": "5sygG9n4dyKdzc8r1V5uuDs4xfDw864JxMC6RLfafy3dL1E3DAEquvH1LxYAT39MC4drLxPMVba2tyGrW1w6uiJy",
  "key3": "31Wco6fTGfsvrzj82cm4so2RAdGUSsp8wYgqeixMysT1CdQNyDmPpQqpmwscA6JBmKekKqxHQG4iiFJYAj6yjcik",
  "key4": "pSzN8a8uobz8hUNv3AmXJj2ouWwL26Q2yfd6bNr7umZugn2SvLCwNM9Ab4pHJYBa2ASZjzXJHTZiyWWcC8Wbjoo",
  "key5": "2MwaAX7hvoj8TCYcvAyoXhyAMzANKv4UhqpGSQAzQwjsHnFG1p1dUxJHgRUUqhM867oS6Lf9JNzH6aVEs7Z2tppF",
  "key6": "2NEQDpyRL6LL3DtUajzHTXLuVisdNV4iz2ywhrxVSKqWA1g5AycEWPuJ5yZqRqDJLaeo3XzVQUPwW3nVP2NhkRb3",
  "key7": "jCC8wF1n39acp22AxTFyfxf5FxQhqLp2AKYgKu3Wn7XLbNAfoQMiNnvdbRYcYM5qvggzkEXVTu2Qu3RvXZ2nCh9",
  "key8": "eP1cStTiVqkx1eo97GhFTjh3zNqUy7etrJyZbxgHJ9f5VkXqpzTBsCDmqxqXjHFyE96Bxgi6GFSkztHH1BJT6eF",
  "key9": "tTpkiNAjwQJkeG7FSTFLgkUvrac54Y4uKoSRJzSiXvin8CvJnDiSi3Ge546cCcjMC2HMxSDvURnyZcUSV2RK3yw",
  "key10": "52o5qbLy3UPkgtENyHN91yfoHeLgoBBG3Gb4QddQwr1jTeWTTjJjbHGrEMZJff7dT3XPd28qzJ7Yr6xDkfS8rAQT",
  "key11": "5bSyzxVnC5GhJ1HSuKfJ7tGku3bCsqckBdfSkGRxxbKaL6EMNiF7BZNM1z6PJ9aY6yjszubFo11gMinNLSSsXD9V",
  "key12": "4XedrJNydPYTKS3WW2qxZPrT42poTQ5acw6GHzkQbsBSD13kk8bwtEry7cHpxVHkvUWs6FMK71TMZDy6qLvRB3FQ",
  "key13": "49LAYFxbj55qwknQXBqenCd8Qqw3eKwTqty55tRyYzzd9ozHfGB9VbHu3DfJviXvjBPyL5FnKSYsPshTmDjeeGJm",
  "key14": "4b2rH7zXgRHYg6xd7YabUhJSmMC5UBtS3FLxw9kziFrhtbQGg3vV4vJhtfdKVXTZz7aBTwUpCXXsBjkHXqGbLJ51",
  "key15": "63NvAMu4Phx8YrVNxSpMeAcWm38KzaaTmjxmtw3gp9pVAqLZ2WmWFerejpDgfnS15qBDEazYTpco9MimdxN8zJDV",
  "key16": "jWxhzAnsYUm6pWaLQDAP7FZXGdKQjovBGNpQ1aYiK5XtCwBckrLQqXowVJ6eRQ2putaJZhP361iop8Z3jVBw1jL",
  "key17": "5foyga7mN9QZCJBsKPfErsnSDkH7i8gXdPz7K5PUWPR7ifCjjFWQ1hfNNC1kyNR5cLEWz1pzfjg5tdF5A9mD1W1p",
  "key18": "5fAhJthK8RWAkjykFZk8arxg4Kk9pPL6ei5kFnxydLoLi3adJrEJFihMnGmNTQYxARFV9BXsZvjvLF7A4kakFWPE",
  "key19": "2pUFTatn7jLF8imiwjUQpamtyprq5rTp5DB47WXiHiGPExbKcWYWdo1YhQuiaFaLncxCLdpiA9qyxL9o3et3E8fz",
  "key20": "3hAtgeY9sfuQWG9ZHVLDZVaL3Ae8gQ9jo12r715HietuTVMJmVMi99hQw3WpEgc26jAgk1SqAwhr1KjyoLe6ggaG",
  "key21": "DTSFaKJ3G2raCjk8Ty1BwRKn96VcTv1AduhpYiAc1nV6rtzLFju4ydUuRecjngkGde48FxC6Dc9BDhcDLsTpCaR",
  "key22": "4SZjjnfbHJUQakXT28bPvb9VcVvYbLkdFVsXz7w4x7BLyfZvEWrf9q8oaMTLJ3ibTAfMRzXMKE7fFKU29Q9RDd9y",
  "key23": "b1FS4piviM6h8sNXuqzYLxQ6aQPZeKpP3MpYc1abWrzWCjzS9WQjXNWfSh3QMVhYs6kfwdJYTcqvJye74XgU4tD",
  "key24": "4fbR8xvX7aQKwoAxQJJSd8frmqQ7jVG6cowCt8yEP7avsAqonbqWD67EcNQBD1U22HXUmLjYRpDYmqykjLTCTFcG",
  "key25": "2R3iaaygQPbg2xJf9EuRVo7mrQBuB1VSe3ArniBf36k4CCpTzsaCbE9Ve4XDLPTf5VFMgvyapeTQm4eDNagh9LZu",
  "key26": "ZjwYaW1YsPCSEubFFG8Jo9xXYaUC7nveBFY2gSRL3t683CudLtdSCMJUcnVoWwT3XWMxCBNFb9r2Hhx4k7D3etU",
  "key27": "52nTN6HkdBh4BxkZPNMaLUwHeSA4WHZ58rRstZFe97ZMnp1m1Wn2gcePehS6bKoonf26rGgoWG4XFf3P53BpNSYb",
  "key28": "5x4WngvNpMq77PssXbMVcrjAmd1EGeZBczzNjuj6tzDvxd45qCYm5xhBQ7nPBVDwTXnWo3pCJHHc1t8kHhNtbvQG",
  "key29": "KMeSG3GxgmJDuzAQHVqZfXzByiZqYfHp7kwVcAbYSZwHq25iCHbotUAZk5WH4WTk3Bx6r3dT4Kk3pv5B1iHTYKh",
  "key30": "4ivvf4UKpat6So7RxtdgBYaRYvDnsbqbVY2D4eCEZbHtF7ePMi6uskaUi7FT7EFpofnmi3rW2aynJftcBKabpiYU",
  "key31": "yzRqmsxehEKqCxr8AiqRmW2rQUUkWH9D4u24T7H9KhkuPJyjJvScZZNGuFysu9JiaAvYUEGsScC1iMoeF5pw2BU",
  "key32": "4z5taUA3TfKtnBy2W1YiZugcRffsgcLSTqfQXBPAVboewQwDDRtotyKpYntzxjbATL4GK4a7zHt88QX38i3Dd7zg",
  "key33": "5jfzE7sMMajjhMjsJNMKxH3pmxq7tjEFFvGKUwxuN4yygfCZhM6SxvnPRW5ZMsrP1diad4yhy7e237tPZcSNLUht",
  "key34": "QfvQbKpSoRxd3wZFdsmvFxC4JXnx7ZdCw9uAaSH2C9YDTqr7UrNDVXhY1mZfMaXECG7a34BhepLUGi2NLzPmCiK",
  "key35": "5BgsBSg33SCXTXgRfZeDx1fKxTef7Hh8Yddq2ke3TWb4cfsdgSpwXVaXDKnYHSMfUPKry6vuSq3MscL2ipZaZ9Hj"
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
