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
    "24Ho1eUwow4QxEahYAufKW2ebqreHsMNQwRYdyFumBhD12zgBh5F3AW456jUdzGKRznXcGUEnaRz2N6KKwXsePCm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "nHYcsmTHLY7mLvtEatjTcNQtuqCU8TKgHRYq44RkUnkdRUJAEiU6SGgYYZEbBaiEAQV6SQq7XJJL2zK3LhBPVWp",
  "key1": "2QSy7WQHRjrgEq5xyw1i66dpS6iRoXXvmXxWsNXM8af1mtvN5R7x9pAiCmDd5qddH5fmfrqjmZiJAdoYrafG4QB2",
  "key2": "W3BNbnuNuPNtnPbLecmMozv5sykCSNPkMVRRXdLkadAkDE5B8mXEaFZCBwWZK37owQgoLW2LHDVF8gwoTuntskU",
  "key3": "2uyFSgsrV4BJfFTF14MF7BNDzUvfHJnFnDCamSc5mxEVX5A4eSgX82sekxD5Z3qGEhykB9T1cW7uguUvs4v9a9p9",
  "key4": "5fEEmXVGbCQjRazVd66FjwEJQPXKAU7AgGMAubLF6MRrWmeTD4auu6dT51hBMJBbhe6oqs5tKeKWoKegAWEJH9c9",
  "key5": "4tWGUZEjZK9sxM6MafAXRrFRZohEY9992HR2Nsrdp6FX15bSgXGPWLvxTspFoJr9MqQbid1oYmEXak3hzqGfjCDV",
  "key6": "2L34ue99e8QYKmcEd1oZZvxG4NfDs6VmD6yaqm6xctRdZ8eQ1eS6rAvKWYeG9r4uJifaFyP2dAQfS1HhnyqvQoZ4",
  "key7": "3wSpQExdzow4xUFF3Juw8bzJ2oqHsDWJ4Dvx4ud13cuHXhVzpsntXugbrTK8nRTgYzvKH7YsToAcsA3AU32dg3Bv",
  "key8": "4FnRKd2YivaNv6eRBtmzK3aU8NM7xhKr2zeLishHgurwi8kRB6FULLbXr2uCBxxn8XeDGr3aAHZUBXjheDcU1QfR",
  "key9": "2NmG4qUoM5SkvTX914KMPzeghFUGWD4HcFHQeZq1q4QLFT3h71B2mcaWzShhsbm8zt5dJEcEezekJwaAJseAHbDy",
  "key10": "3qhxGSm9sjSjs8gVpbpigt77KGnToCDR9kRb5WSGgSGQFLKNmFYkTpA5ph2BZDQURspP8nJmfMnZ3Cr5S8TUtiAq",
  "key11": "4THzwYADdRWgjhpSVWW5sks6jx4B9Cqqwo6BZwwjxoSfDarrA1VmAsCqZLTcdpdYB9ttfhXj4pV3fS4ebyRzfYew",
  "key12": "2bSjvJ1tFgt56iVerRDbkY81FoCGdnMU9jBP41RK2Am3CP2Mu4MJQgTnEcmSjJ5VT4LmQRyasGeWsxfLBSf4T4J",
  "key13": "W6ANpsABTaRVoQQYWN29Ra5rVXtg84sNEiPAY54nLvrvzWeCJ2xpNFd6DRXmw21QZjWKUfQZ98iZLzL25hb3svY",
  "key14": "4VgxTz4N9FxeMGLCzxWvEtaMVpWetEEht65bZwVaQYQgEi2gUNSmuGtWwHPKv8m7xByeGTh1d2s4CeTaNbAC97pj",
  "key15": "2DmqHTq19dLtrKHUjRLKTwsNAmyJ1WX2GTYxubewJp9psuDVUVKCfbykSqrqavhG8zA7JmmZjnHqN9L7A4RvHTgw",
  "key16": "2g3XsgK6aEcb5U9uSSVu6TphtukE5KGVYw51o4Yr8QosUTK4zSzzBGMacD8xgwATko4NSjHEMuVPpgz9v6suBLP4",
  "key17": "nBrM9B7R6BLBZAR4dyphhF4CPNfaiMGnbK3DuDULMH2YsYNF2FU9AeE65tcE9vnJ4qPvFNTnADypFFcg2zupAmq",
  "key18": "UnJfp1EHQcjD9jhbEHFJhpBQa6GKRKJ3zfqLgZ1tsVQptaVLhwu6F1cgYg9KkV7gsa7RYFqQ7NHJXF6BUZ88Sbb",
  "key19": "3sy3jM2DHwhL55hBkwfLhmGf2wz8iuLV9dUhwtoixGQJMVwHH9sczH5oC5tNa1UW86BDsohb2W8FHicAKKMTCtG3",
  "key20": "5QZXeWD3uyRGk5H2CXm54zEkfcQu94yiS28i78MA7o1MscefVDG7aXG5kzsLptCHjFe5WebeoYG8fbG5G2V1jWdk",
  "key21": "5otqY2u8YPB9ipy3H4qAQp8UhBb5k65DGJPoXUWfRHSPHKgL9RR95mZat8zUyTp2K39pztdbVb9Kk68yhKFJeTtP",
  "key22": "4njan5krLzZDDAZMP46zkKh7k4enuiiW6cdBrmC6WVQ3FVuEKK7oMnXx9A48MYSpabTiZmStA1cGBjtUujqegaSA",
  "key23": "TEk7TdfcCVbV8VbkLvNGmjW451Ku2t2uGHvxYZVXZYmjGmqCtYX6DVmN3ymJjPJxB8VVXPZPSeYmbrzpjry5pM4",
  "key24": "2VDx72jUZtJApihLbe74vyRk9WjKBR6k22e5cUFtkvqAMNcx57anm73FHARgffV6hGgpHv6rBEHWuVZ3CUH4eATK",
  "key25": "5s5uzecDpaWzJWFDvLK6nF9snWYsPqiDe8NdGaupWnk8MEfDuea5FiFSmnwmU2A9wyWHeryrZ3X4Z2SBVapoapVk",
  "key26": "4FMNXANdaAJDenBGpj4sYneDHcbYZxK3xiC5N3BZVcDF5ubL4ncqWjpyoi6pdSN67pPUg2j1pAZUG8LCKvQETYnW",
  "key27": "4bbccFrB1ECJpBywBR4sU7KX9wt5EJfac6fkgpioucYbxbKyuk8HtcX7uWkTQQLeKTaJTEwJ6MUrDvmpZy3sf8bT"
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
