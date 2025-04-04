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
    "3U3ZvGhErhkJbmGEJzgcZxyZCf7qhL97om66Unw2moaDDqEwfdhx1uww5dKSGLQJuQTwv8AhFEediQskxA3yvt5J"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4fqQZ6wSCvyJqvGAdu4qdnX32qwU5LwsT4V39SCgzPhVtedYvJLbraMsY5qwside6qoMehLND1U4ZCqdoxLx2RGj",
  "key1": "4AdAEaiAr7f5FrnE4vK5S7oiVkfxL3yPB6LjxGK4mdxP3muTkUzCrfoD5KX59GDZWfZUaBiPx6XRgK7ihpHxJryK",
  "key2": "5W4Zq8n6JSynqHScfsDsoxUHKTZ9gZFnkeqppiqxFWxB2XUvTEDPacz41ajnPg9TikhdwveJu6qJZuQpavn7brPb",
  "key3": "3a74CJKtfrtFwBA4H6G1nTzXW9jcPbWwyvKqCfs2jLccmPbGU4kbXLJqoF74wbzFZt6f6CU7rfvbNtHjDLbBT8Xt",
  "key4": "k7ztig2SzyGq8GZjXd74oZn594tcMwogPe9BrLvKYWLhNsmQu8ZZkDvK1gh2VF9GZScVxD6tZE3Bc9dU39sHLEu",
  "key5": "2Wykh6gZjujwXtK9vmpd19H6qTFyrF8dH8yjna7NKWba9eMF2C8AjmMXbSvbLbEDCyz8gQZzVxND32jeuhQd7dEu",
  "key6": "2ffrJD64k99kySVpChSdTDk9QYcUzFVL9s9xqESnutWLY97sAazr6JcZonAhAztZoPMSBMwpJfJ2DtyT32ppFyyK",
  "key7": "3RAHHWT3ya2yAdK9DxAmHH7HRYfY9i7RmuCjAXbQoGCZv5YuAvAjXUzhXNzjsBPWD6UseJorAA7Fb1Xk3M37BVWk",
  "key8": "4LVYtwjEPmpurd2K54sUiWaU5NZru32CSnNK6FtmMUcYMTN2vj5f9EZqiy1f8gDr5pXs1aMZtB71ZUFozPRTSws4",
  "key9": "515fF5URshmZBuFrMtdS8cituPFx8QmNZFGkirsep61Qk56CeXBmfVDMwnixEUZMdK2H4pwuccNzmCNLj5nZLbd9",
  "key10": "2npuxHgv8sbRhgMWSosTm1JxaUbKnbhXo3iJ6Uw9yp8V3PuGurzHTBbBqNh2YWKxCgNSaDyR23N9r7FC4DYGEA3a",
  "key11": "2vvUW49kGYb7ZAXbVpq8fR5ArmRgjjFttZ2NC9fvJ51HYWBXH7RNiiJDTRQoBQjzZzwqXwTiQhwsBPF12qtgCkQG",
  "key12": "4tGBBmsj74WZqAU2maVfn1Xeu5Y8Wjh6FUEey3CSqs32K1jJckDPjxUzWtBGYcd2qK6x83nTqR8W4T1C5HQrGqBC",
  "key13": "4nUc6MspsvFEiWRgLkwfeNzGdzDM5RDVdv7pnDFpsnp92Cbyug8HZw5Pkody7nzAfKrJ2FVA274ZJiDt94WkG7Sg",
  "key14": "4Ft8jNNE6QCRmCZhXCST1FqUnHus2mhW75pMFKvrZvNBGoLk7F7w5afjW3P98TcVfL59BfzwtbhYWuNpBinSBCAu",
  "key15": "2LU48YokYwdrM2c7cpFKR9oziThzaXRFdHSLZkUcLWfKANR9ocXtsgMToNSEdFHqbvLfWUR4FXcK4zRgD8TPn4dF",
  "key16": "5LmjCJYc5mGqT7ZVDXEFuFnuPUGs3n8Dqd6tqTZc1vMY2bF2mHdooTQHWP7o74EudtC21KTrcWfooXyymMsNkL7j",
  "key17": "4nyzMJHd5pCqRKkCPPkFZmVr8jcqUVQ4QhAeteMjVtfaexmJaSPBDXvAicp38BMfc8oE9sVLgaSwSzMuhXTYanXF",
  "key18": "4H8472XfRJWwLKCsBSZqma72rTx7CXok2soPPMPykmp6RzkyhFDjusFzLPoXuXXW4q4GKUeugckyzgP4W1vrh9wT",
  "key19": "66N2dx1maZxy9ozQPNDcfR17HvH9mvVysdUDS1D85AMfGeqQJ2FQP4ko6hCnWdMz1nbpqKRS3ucUNJCCk5WWcAdj",
  "key20": "67QPfXN82BvJer6VR1HT7KKdsMzVazykzFB2ncAUfiuvZFTdeWBP9rXCvUc1aN7XNoiperrTSHFZo2jCU6dGUkU",
  "key21": "jqngr89nLJkwfQZHW9tmUHS1ECrbTZoFEih1LAAvuoL2qZju2YPJizmac7KmBWZvZUanj4r4c6TXLKE67dYzmRF",
  "key22": "3yy3m75xgdBcEMtd6Rzv476pRNjo6zMQtKw4GgXz7W5KX6SPp3693sGsfhmRuTuRRZreumz7rs4ncB77oPn5E8hb",
  "key23": "4c62poUUUMzuXvGRuKPZ1j8z5gnFCkCAjdNGEBHb6iSSSxCwb5DRGzLAzQYGEdhKAq5Y5tu14ZbpbytQ6HzjYjMg",
  "key24": "4oGXFjZe7ZnWXEAPEwTeKpLrQNQ965C4Vxn1MGkse1FzNfMGRBb7i7qSqo7EcR27TBS8AFsw4d6mEDfcCc8bDfz4",
  "key25": "5znoTJGzEmD1pTRnX2e1WtyZzidBgk2scsBvmqFMtx6beqPNPc4hNFJZ8JhUz9tFGZpA6D27xcetNLEbV4NfhGN7",
  "key26": "31CHERDQGznxomSrHvVHb3yvuFptE1Y3q1uXe44EESds9x8g2zh9Qf4WHh55poerJ9VGU8NMDPKVWDr8EJ5Rs3Eq",
  "key27": "ZYzBD6Q34BdQEbgsGaiHx9pvvkJxNtbVdMd4bH7GGZahe7erB8RrfHtVhVAgcsFezgtpXc2yE6uUXYAmrjyrVyK"
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
