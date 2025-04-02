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
    "2z1nFUYvcDEeT7KB4mrpvzWsaL9qRLCQPVwabndZUfdVyqdjMwEteoRTU73of5UN328S5isGUdfts6NqR5kPPzf6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "9YqAwH57q43JkkTmrvBeDLFCCHVgkg2fAKjqfgk5tjtQyC2SsqKdBu8Udpay5s82QseFk47218g3iQZGcPdhDxR",
  "key1": "5QBFU89xuvik9Cmj1kpPaPhXtnHiQMR3H41bmzQW2ZENKBn65TETXzskjAptZobttdMnk1sgENawEfw7HCW39KyF",
  "key2": "2LYgQGYERr7txVWcVXe4E3RRQ3VrnW8J7tGCxa47wbWMzuFgpo6VkBbDwMJyHKsdFMbbrFFTBN7ootMyLSymt8oi",
  "key3": "4NUuYwWrreZon3TgPXTVnazYbx81uKFvhraTdMuqcnJjTC834NjJahZpVkHtHZ7a6dkir95qWGZYZUFwTdXa8F3r",
  "key4": "5QfmDxgWEbm5s5qAMNAUxA7feQuVLbC3p4R8WxacV6ge7H3CdBhj9ANZTx7vhfU4nN2ZEREejSNE1Y3fqHCzbs7C",
  "key5": "5mkU7y8HpZXRpeB4rNpW5ovzXTZ6U7nACuByQKA8gjCKoeZVgUzenauz4A5FgF2RypmKmTSW8JCw6hGXta3yLr8P",
  "key6": "MZaR4143QpUQNjvtk5uP5S2xexUvwa6SiyXqP1ypQvogVi2F1NKtae8Gw29fUT5W4kvZND56THvkfZ2vnJtsqe3",
  "key7": "5WpNHiK6ZwaVipQ7mxvyprHq6129mWhdQApXVzyytRTM5uYHUd8cQ8uMU3Bgk1CtBgtNQciDQutSuJ5YA1kr4Af6",
  "key8": "3SRpD1E78DAdCctstqowceGe7NS5fKLnsV92fHT5FXgFf6YKwHrMRqMUjw7YiKD33ynLYUE7i7i1M2RiNdRh5Z2t",
  "key9": "4y3UWX7WfF6A1z18mV1Xyt3gABjxpVJzELHNtzf8DJnw7vtU3HLXZPP73rcd7AoJmHhtEgBfFUZ1qRMipmoZPCYd",
  "key10": "5dtEroAhw3ytvoEtseJJmk2ZfKGTPyhnd7ZhH3ChU5GF8QYWjxJpsGo14bzZaXnsTNBSFkaGv7ZG3uMzD4BB45qg",
  "key11": "4Z1DsSEzR8Yx8QepJPL56f1HsjkAa2QQdMD4PpxuPtrHhBUVEkwgtREN8oiQLSwy9gGPTi1LygndWYNRfVk5G8Rd",
  "key12": "5JTh7A3Y8inMnBjy6pjNd8b3DEUwpdwnf7EkbzbVvFL1T3D5ipfum8qyyorZRyDK3XWwgiGKYWV33EnpbCLc99b9",
  "key13": "KzXr3oN4KEJUFLcHnofkDtkRjv2KHWHTut5ihgmMY2FEcj2gEFWZVijkxemYXwcobRmcKgbPuGaBuTQmoQhXLNm",
  "key14": "56423zDGFSTQSgzaQcwshqRbPe4dBkzVmP2KWKuZuUT85u7itrEbJtnu1KDEhaRJXS16FCCpqaBXnTrCL2XG4XUa",
  "key15": "2R5tMPGKZaVqgtuWGHDvH5JajX9HJ8R7Ks6AnZxALZkBehVhQkCjrFrgZV1DWqoEfjqsGe2BrJvtMfJnKfToCY17",
  "key16": "5xueXpALga52wpGBCxNpywoqEcTJ4D5RvqTgNGZz68eQ7zogDJqR5wP4wNHYW8hv5uhRWPPaUwgcvvKJggw6VEEN",
  "key17": "JnycXtsohpciipYFnJibKtAK3W1NiA87QWut6Fiwyuqhe7smCWfEiUN6NPdMU7jT8v8ahiYFvxRfT7Z8MjmFwET",
  "key18": "4qoaoLkvFjSHcnWTkVTe1sixo5eZYfBFB8Bg7fqoTohQJwZUPZFaVCpJCf6gjpoFMVjzyU878aKfkXsyN3KrwLCQ",
  "key19": "bm7iVoqNnMqZods2jwtiJLB4DafDkPjb1uu4KHurQNALqepwUzCJwCkjDFZQQ1vw9ApEYZeaoQfEav97c3zwzTE",
  "key20": "4NGTTenv7AtSumwRXMLocsgNV77hDp1YswiHP9y9AroWBTHTKBXjXvUHi6VudMqnFw4xwiFVDPb1Yc5oCq6WFCYx",
  "key21": "4B639bYUVTRBkZG5SLgYaSnF9ose2v5Re7ucMp3qmhcdXVWiU8bZJYUpdkuA6xwoRxXrwxZFtPKMp47M7q2jCo2J",
  "key22": "3DQAmce7Uo9foLjf7mvqKEqFLrxP3fTtjp2XFfeQN7KNvBj2ZPwVBJgN78iRzapMqE9V2TetLNW4FtGt5a4GspPe",
  "key23": "3vcvxJcWFEc93xb58B41Kn9kRCrnctTunafKTda53uJQLAZQSupjeNTSXXgBHWzU4WdtS1NSEpo5nfzNaqXnDtk1",
  "key24": "3njc4TZwR6s11qSQMCd2MU8ZApStmgPzYjjHxe6PdzbWtbzAqnVWGcNpzSXuU2v1qxsavtDBFwHAFomU9fobNtLQ",
  "key25": "4mPoypFWLovyM2YEsjrR7KAEsj94YHCYGj8sepByEMbRWmVSHErdkUi71UAeqmQTjEpJ1iDKLJULtcCdsrqVqWo6",
  "key26": "5yCfTNfCwpnXHo7ycTEpum5S5aunfm5nL8fDKBFndzYERWXg6fgw5NHCuv7fK5oZBdGGXvfMSVyLGfq5TL4BAcmD",
  "key27": "4aD7Zhjwodw4YBmeNJ8a8K1XeP5xa7GK998paWv2xU1WSx5ZcrJMJfqQeyrBbWPRK5NdRv7EkBD8QanWRZS5eb1z",
  "key28": "4eAkSDFv1tyrfHPM7oVdR2A8ZpHpMU96PHgA1UREie6Yi53jwjiqZUu6cjzXWGFdXHwvSCVQnF2GndP5BFuUVsh2"
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
