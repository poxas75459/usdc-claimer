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
    "3kn6PhB2zCazSehCKvuEpSZYSgc3918p9n1yPtBW24Rhag3Yh7RW2N4QSdiMTMdpUmURxmpRZNGAuwnwXi4oS1QD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3mRgety2UKZYKD9XrhsZUesEEKCLNtdRcL4yN5iLkT1yuUYhSoaudMjdDruuvYDVzK2ZHZiLURX9iUsK717iM7Yu",
  "key1": "3jGGBqHC4y5DsScEzsW5rKSRnv3azF1hybZg3ViyuaRkfU1GDBGQVLe5t6zX7vdKm1V3m5wbSLpCoEzAyYFaa16A",
  "key2": "61QUoXU7tUFkJwYMpCCdUE4Ja9nt2eKtAJcvfhab41FARxBP16rS8zygXYCcRT6X5HdyE5fBMhKkBBKBYksVjyWD",
  "key3": "5yZ2B1ALAPqZYy3adX37eb6mbK8aLDG1n29z6TQr9DzJKi71mu5kzfKzVgma3o99QYwRmcLmvnV6tXgNva7vb8RQ",
  "key4": "4dHUExqaAAKA9njtv2PUKcmWrkxZG54G2MPoGgL4C7YQrnprJHW1QQ3fDZ5XByMLPMBus75kp1cg8XTFcAwwx1Kx",
  "key5": "3YgVAZuTwXnLERwmNqdtQSQnVSofJr46G3wFUVzKLtsVCnJkgGXnUyiL86c7WaQsGXGYWZFRzg4irsdFaEmbqoT2",
  "key6": "4nBKNUeVK83LKkweBjLdxQzxGEVTLA75XGyHfJc7eeKaTiMSCgEQ6mupXfYcQVq2HXHTdWJ6UEtKH7DujqfW1BwZ",
  "key7": "4VXRU8MYWYi6RBnbZ7VMmo1gMisTTLjs3R3S1pp4S9B4DJRkrq6gnhU3FYsBJQjZA71gE4d5cm7x3mJV9xUmt95N",
  "key8": "39ezzipo4oz6K9FbV6fv8MX6hWSkXFRBhhFT17r7D9txuAPGScnio4p56hZKhR6HxZVqasbohTQ8P4NPuKUVz5UA",
  "key9": "Nn2pS6Fc3o7dLqVi3m8wpCrvWujB9fJkujL8D2rn3F1M3DqfJYG96WvVtR3tW3q4NByGCbLRta1BH3KT6pVRxKs",
  "key10": "28WVehkjZh8GmHv9t9N8sN3vgJNFoMrLFMkWy3pnU2gjLPvRr615qZaeNnynCdGDMHoQoePnAVbiqkVE8vqi4ctQ",
  "key11": "4CeNLMg6atyEeYzip3AMTFScnKxbafyaXETdCGeUEywwmMvc8u6tUmThizbFaPoKauuYFKubSd3WM2h2NyniRrhW",
  "key12": "5yLzE2fWJQ7gEYj8nR9qULZiNGucqFCnwRxaGp4Mf2d2Jeiocjo1HQYZyBhdyAjDGrUEoV9p6KGwiSXU4Sh6syLX",
  "key13": "2CxzpeTCXS8FBWiGereiUpagdRPaRne4BUdnm1xbVvUh9rJRDUerRWeALyuBLvMKjn2vTdqrjPRjavHnAqgAYBhN",
  "key14": "2Fs32HTdyzcS5JH15Zw7vv6H8WMg7qPJF9jaSfyuav9A7sipSsf3LgVoJK8bpBKwq4rpHXxXtXexWzjxkKjsMMb1",
  "key15": "21xXY2v8pWyxAaa4Six4n27vpP1PuAh9k9RQ9wneDeMojpcDciKFpNRu2fz7Vbyqcg8MtFcwbwNACMexRwg7qZAY",
  "key16": "3fs8BeQutZCbH2pRAGP64dEkEvfCu6SB26ZgZdpmowHtKegW3KwT9NCGbuidtZxW8e579NNpMeer7NRG92N1ciPq",
  "key17": "2v5g4xwLFycYHzpSNMKQmtDH3tWVtbsQwwd4sS7TA2KfWfVcTmqXCvuNAcp1H4i2oMr6q9uo5ui49iLRcAinRgJ1",
  "key18": "2Mqa4W3yVbXNg2nNunzwijv2L82gw9ZKNMRZqSQCiPxW6ZrWyfKKGmSVP9srStbgsJTMRGuY3TZrDxUC3wtg47m6",
  "key19": "3nXhhwtpZwgSGEmHjjTwKpBxnCWJBuvpC7RLX8gi5pVZ1KSgHREEPfYbUp6oEUkFzPvQRof8JYcW7KBsHnKLFfRe",
  "key20": "64NkzokPB9WgkVKGozQBDRys1HnZjDmYSQ3noeV1g3znRPhQnjRkhdTtwBpjUfte2iXbmiJkN1AzFy2j4VfwvjyV",
  "key21": "64Tf8XEhwbC1LxcGEUEj7TaFQMx9XrTCD6eqNBcrLydGewCdgxKfFqThqaLQkHMCEG5Zx5sy3pKEbgWyECGjLaFX",
  "key22": "3QNhXue7xige6YH6x4NWZS5QQj7aWGZLVt7SU32T5cK9LMPbBBoL7VtuAHnQ8Wt4TFxX36PuM436H38ea1a7Ms1M",
  "key23": "64CzDg6rvtn91R5rjB3TX2qYfbQRSikckoxe5CazxXucGqShft6Tu71S71xbKbEVtAiufSBKM8x22KYjksbF34zm",
  "key24": "2VZQyMnqx98sTzR83owfKgdUNX1GchXzDKrcPrvpbzGsjCx5qa31WtaHWqy3mVtjh9k1XWakQi2FdLoSJ5wcMDnf"
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
