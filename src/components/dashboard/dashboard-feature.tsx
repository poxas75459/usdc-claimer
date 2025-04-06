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
    "4MWE728mmHM1khfYqsH2RXCwUZmP1eCY2nwcWTxJHWi5q7t32PVMHo4b1kvQdVeZAQbpHotddUyXjJtdVBiXGgbY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "32gYehqrLTVoVEGBudzzUz9i4xkKQo8h2ZR3dRvVhdtmGMq8b1P2vGK7WKXcT2Kpabh3vyTpA4GkEJoqQ1nzkyEA",
  "key1": "4U5gNT2k7Nsz7pQUP5ks8QVK3tNrYgQc5iMa3N3oKR5i5c4aHrNndKRJCitXt5SmfFvbxsfifmtUEcdCY6sK4rs4",
  "key2": "EgigqPAdTM6WSSeCSJSSBL9kbiP5d2VRzd6DxpvqroVtEYihEnhFqAJXoMnKME49eptvdkBiB68y7sRjojhWAmg",
  "key3": "8dnYrMQNRxBKDHUxtpfzVQVGkFTfuzxcStyryUbuq23KUKs2rengcae8JH6L6qqGb55MzddptFJy5ox1N8DEZfk",
  "key4": "48v7htraGtC8NiLno1DzVyJth8L5HLgVBymjapBzQ18iPq7kab2j1aWMz3hQedrNVXmvvnbkMhSudaCJV6fwHWXs",
  "key5": "23mmy4PgoeqR5Uyzc9k8CvQbkhezDHDsncqXJiYp8PSXgHjCa3phPQZPu7m9G1wVGYagYMN11ziskWyahh7tHpBD",
  "key6": "4VbD6JBu7pE9edkdgU8CRjgvz1HVBLGVpMBQaetCqQu2DjQPAdBW2rxpRt9DTjFDddiJf6XpVGpkoGYUxAduDomN",
  "key7": "Md9NWhkjKemxN7jyKYZBR4c6wTz63PgrVRMjiWpCct6DLjLf3LktJSAwXd3sgJgeMcTnKahiudiN1GM9b6jaGxj",
  "key8": "4g7MkDrMfqMzL7UQbzq9vzXMF4wR5J3bYBWiyMBoWdVPFxUrwrCxaeoiWkJjhQEJwDQQNBpnp2trurX7fM3bXy6u",
  "key9": "4RQcvzmgoXFaV2YxYP4cMcadTo2k7kpwijfjrsQDHZJcJURcvgyvwFDH7H3Hwn42aXw5couoJVJN6nUPVHA22rix",
  "key10": "3f5TUB8gPRDccLtLaNaHodH4BTq2gmZ8BaJnHy6226Wt8gEMpqhVzie22yKtH28XvB3t31GNp9vowZUvJmH3SHxv",
  "key11": "34bg2Z1hJBpjmi5iJVKD5Mn5ebyGshUfbo5akTpbeUoXaWHeUcFgdzRjYwFgxAZGmbtSnGJxAV9Yfcm7RC9H1LU6",
  "key12": "2CHsRvXBLPLT3d6r73wPdqLPzD8qhx6kcGxVS8zmJnuRtddgDyoDk3o8ZjVgoHDknL5WnksqnAPYCcv1sF2HmAkz",
  "key13": "4pzw4TrrZmcQ1Bo3HSMX2Lx3GpRrKQFs5eyTrBbr3XWZQBJs9YmCfdzAihiYze3NK4QJzEknkMTeNjRjpN7QzPjd",
  "key14": "4zjdeP15jFNQKhcD9o4XHURoVKHDNwkBVCtFP9acfwoLe2Ex6ZiKz9o5KKM3ui2XuraK9o6tcexhE2KCv4RFAQCr",
  "key15": "4vkx4VzkPju4FJrEdiVcaiiq4BViwNwWQ3T4sPBu77ApUgaYDD3Ajofu61ziWDMWXUMKyTqGd6jWpv54L1i4uPBs",
  "key16": "44ZDdUo7HGL1PhDEr8NGf1qmc3hYcxN9GZW4yX1fjeS841bQN338GVf4cKSLsJUnTynqxQUuvxtrZwVYh9vDpS7w",
  "key17": "3BbWobf7r1dQYCEwPYku2xGBoRApg8skneZ3pgfyCgNeaprP2yKCEX7Wr53A6ikfQFn4GZa118AABLv9wca6VECb",
  "key18": "fqHkTHeR2hZLJ63NLte4V7H1JCMU2RjStAXC6v7BJuDfQsXLVasTVxALkV9MVeJpoP43wsHve55BfgUdMUQjCuH",
  "key19": "3U6bTQbHS81MUGLjuYipJKyP295mGetWztW3ceYoFRDnaBzDSWJoxqubg4Rk9Eh1tw2bm8KNk2B8bN44oHpRYhpK",
  "key20": "ukuX1tqnpTaPxR2nkSAmtDVDdN84dA2NHZLCFTc7LpJUxUtPbYrJdzdZ7tzjvWQHgQRrLTUNK9GgNYKo7rtCUKd",
  "key21": "2pboYGnw2B9zqVCYQAfFSXLotw7isPWFcDWiCqMRgpXyUZqGyNkDyJiZ8h9BPiMxaZUW73CLzCUrpKSu6H7eaYDp",
  "key22": "2QhMn98Gcoq7VeJvSBJgYWoZMnxvzNE24LbnA8NHoPxJtygnrgmMGrjQksjS7prR4ePRZZoFsro4o5EtRFQwQQ26",
  "key23": "wpMr3WdBDMbjqLu3uwtA1zVvRe9wvzPt3qkabaBKNpZJAiSPD2bkLqdEhbHPp8suyVUZ6PGa1rp3j3rQ6PBYHL6",
  "key24": "QP3PXgnpQt84oTkNcKbujV2dYMysKu54bNhUVoK68PTccJyevoDCmK54gCyufY9L5BKaoADuSSWM9v4HuJmxijo",
  "key25": "37vFMh3A4mkh3KFSSeyP8qJPpT9BeioERJNYatdUeLAv5j24hrWbHHh2B4DBkxPpwQDAyLAv8p42jQ8P75SyR11T",
  "key26": "keJTFUjfxt3V9dh2TZXorRHMCz13nHLmiqutoFsZn5w5T6hGyaDivruWYxZRShzy2ZybSvTLqVFBGe9UM34tyQ2",
  "key27": "W5DG5c5M9c7GLJebfMdLSJwgvUowHqJBP2jyrva1xxDeGCH5n3u28cuQ2VrVDV6VB482EUxHYmJwtMrME2b9BVm"
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
