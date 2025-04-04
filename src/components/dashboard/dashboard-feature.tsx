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
    "4hRv3gqJKxoD62HEZ9beWMWRKqtKhGa9xk8z81aTE6vesbKjw6b8XmfdqSt5FzqD8uMJTP6ziinTvQcsMdvdvemF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "WeBoDQbxP48E9yJyvjXsNfeipT61mVpUirnKPkMxVXhMXrWTKRyTFAhWEq7HV11v6LiJPpra67WayxqNND1ATfU",
  "key1": "2wGfm1kQXbpTgJHXMeuYR6iQGAr3A1vef5jorKSM5umnRZvRcTeNdkfJtFjHd3h1qq7QFLEmmzCCpRCqnpJUeiZc",
  "key2": "2ZpBwPNqkmHyPAAX7yZEEpQ9axsRc1pBBUY5U54GzLNP2eUQVpM8tkRbojmecRfntuFcNKx5ffKpBcHqHfAvx3Y",
  "key3": "5ELtscFBqWrUwygFwDHYYfczcGDnZTVYpAV5L1HX1qF8v2VnhexvtFLERt8Xa4vCndHM7rjKNrRqV4cTXHsF5DLU",
  "key4": "tMQMwLZ7zHqLw8eSY4VuWUD48KFncJz5momTceYKfTiT34jvJkWADetz1nWJkN5NEW9hDSXwMcZ6R3n6oawnBcs",
  "key5": "4S8jDXUcTrw9U2syUsSuWvrKx6XRPDpPAUUApFuXYXzDrrfxQ2gQfAP1VgxY8gKQeLuSDUMQ66QFcv61N3LeNVEe",
  "key6": "N4UmomPGJ8crjShD2EWjvuKSgL6xy2tf5uaeHZMLsCumAmfXdXicooNSEG74xPH7oR5aSiaxsLVaztQkb37Y4iw",
  "key7": "LobJo5QJ8jWbocT4bb23STPEKir2jsbXTLR9zf6F89JhvbCMxJCSKuo9pc24H3mnVDESk2XYPrK27Uq9AxKdJWx",
  "key8": "34mJvwNf62hyGztALLA3nCwCgLZnHzPLLRQv414MXTMt8KCRVJVLESVwXZ98giETj4VNp4a8BgYiPriUqy91j4Zt",
  "key9": "3qzEi1Ntat5LvohtN6t6MZK4da2gokK7DezLqgaHdgXTqHRi6UvAtXBntPKAYxPMr7rtLnEPA6ncduf45MEWVnkg",
  "key10": "22mcvz9aPFDMwFe3EtCHoiezP28FfueF6MtGo9yq7y5CZgdMdRw8U8eaCKr3R6p67dtr2eVQE3TZoweLh3w2KppF",
  "key11": "36vmjiPF2pyhGVM88CEXuLRBq6YAKUyaESSMnQsHmyyH8dHedmCWTx5GWJHeEuQRxkJmxQKx2EGG19bsgrprGJg3",
  "key12": "Krc56PqGdCYDt8RfonPgAdLSG9XQUCUMUC1toTCAPb8g3yNFwE7QSogV45YNNuK45UqyXJYkUtBc6vrUeAEtM9x",
  "key13": "2R8VuEYm1WAt6j9k6dorTdd7RqHA1XVNZHVAd4GGYMmnj5TCsCM1XsNbyA82zgkj1MFcx1TmxtwwWQgVUJKWr2X5",
  "key14": "4MSgsAWiTdJ87qZqqsEspC92bmwiM7x3WdkNsYq9euZaVtoKmyCyQ5EGw5JrtubpHv4GWnCNUGPsjBSJMXbdXjT6",
  "key15": "626WWtqocgfCuNQnf5pK8m4gUKJFjUn2x7AxcGYQsuhSfAYPQwitDDvoRPxJjojKjweux4cgGz1EvP9vdydXL6MT",
  "key16": "3BFA4NQMn25378dXzpuTY7TanzCQfggQCQunsA3gNnAE48UgdvUvzTQVW185xn3RnSuDLYpqQPUhkkxhLwq3YVgd",
  "key17": "2i3W9UMKMgxSTB884CeKsLi5EvQD8a5ivLH1z4U8jRZ28gKPmtiDEpjGZWemDjCVs9TC9F3EcJiuHw5S63o7Y22b",
  "key18": "2EF5FbCYeMwLgdsZdqoUHweabkcFVFoC6xzHGtmbN99hjZ89ximKbWgzV5sxASv5TefDug56EAYLRSjqNgd1KUaH",
  "key19": "55jcjhDzfmcKHsYjfpMawuAXE67gHSAtcMhNKT3wrUMSwbeAhUZeZNJjbgb98tm5LWa2KNawqxHAfEV9hD5NJGKK",
  "key20": "uMDrVcdoyEHyutLNiNagG4Lf2RVD3LYiGVgBhkewrApfGrZ236pVk1frwcmdxf2TsheN5znZemswTmBB8HL3ykh",
  "key21": "XdpvEt4KWzXXLJKyVDybMPJWqQk3Le5EsgQwv1CMSEvuPatxh51fBbLLdvPEY8CVtpxU45KRB1xAFDBAXKAGizp",
  "key22": "WPEEhA47fvuFMg7wGKm4NVQKLTK12ptkJzCqW6ouq7ypEDZC7W8caoJnhrjeMwq9N1CB1QcstgkUDJAmRQkbCNE",
  "key23": "M9XpWVqn9UU87uQbZKBMPSMHTehU5RmMPtU4fnzPUu3YM167v1ZwQ2fmHKz26npGBDRYvKZZAyCQZQUcQpi2nt3",
  "key24": "44WCANDDdDCUx2ozeXEeUFd35TJaw69VejavBraHsXmiAwJVshk7rmAU8vmmyvck7SVUNB6WjWjMp31Qi2yVX339",
  "key25": "4JxcbWGFhwLSTJCX9qf1V4R2f5mg7mv1jUKbrPojacavjpF6LfNx3bc5EZMTZTxT92D1cCTLA35XVRxYohfRgaMP",
  "key26": "5SSXydnffRrwgjAEY2cGY6AetUcjCWWEpzhz497SiX7x98BcyrsKYEfabYWd5bnTBwMojVshpp6qJq85y61FrUAv",
  "key27": "5Er3cDyu6bAhqG13FF3wmhngaKKtrFnuy2QxrZqNwwPZ1e2sGayc76vBw9BZtrJgZhK76tFCD3YeNpUSLpHFko8D",
  "key28": "2v7myV9XwUY4WW3cfjcx7zZUCh8NxSADocTH9Jer6Hsb91Zx1oXZK2XWYp9nkzm4ECjBoLsDUKGgMwviCz7k6fEi",
  "key29": "GBpQLPHXPezeZdqK6BVz9xoo3eKuDNRr2jfYAxsQ9Sj5ooqz5TyDiTC21smaZMpyfzJs8Ljno6q3so2LSoz7XwF",
  "key30": "47KXVRtiWDvRxmYyBheKPGbJnrtLVu9TBCka6whZNaYJBejH7jGV66mjKVkjzgZsRWqPwi5EGcAVdLQqpKHx8g14",
  "key31": "4Zqwp7T7ZYbpUKymrFe7W617uyoDKqhfmYJCSz6gSJ2V9vHAeTdPcjUibnGeWCynRhiT2Xi424t89gxTuswiDr9J",
  "key32": "tsFDnKJjzQKjesxqeVVyJLU6mjmdi8sJvvQTw7rcj3BdPSjcaibtVKRGSbMo4KtR1K43Lebrxz3vShbqqi4bT8r",
  "key33": "rnuUfodQcVVq2QeiVnLqFu4w5sPGoDmjcBC7D6rtVAKFJLrZ72VKGcCmtE6v6z9rw4x1dTUjM1q3fcNax3yW6dX",
  "key34": "5eJ8AZ5ENtPaS7dkxkAd8xCwbbfqP7mo7TVF9qh3nnto6Q27bQrpX4XbMsRp4sJoZPiC15XQNeXyd8Ud8YwR7FuS",
  "key35": "qcE6A38b3qqv23G2U95hqaGsa989QvkVcoTzBvAbJEzHMKHuDihQsavD4sjG2eQxmnqwJKWD3LmtwFu3gR3JWrB",
  "key36": "2AXUgEcVPJZ7AwRaFccoKc2pntxsygSuFzS1LFQhTqU83tjXBCJiNzhmzVfoexCe5GvMRJC99hQnNdMpkauz14CS",
  "key37": "5CAvFkVtQv175rfyZm2QYguKtwYi9HDmTMWGfZ1VkGGaBf5owzvtLHwngyxUozzbc3r8JJetYurcTRQ5QaPQMvo7",
  "key38": "3uT5RMoVFhQz3aBGzGxKx5EukyZ6HsFK9zHzvKjiAxX6DyCnhCsW4VN2ZXRtvX8ACzFAX2KyeujVa2yA1W3SVBQB",
  "key39": "428iTmcYHpvf1n2DGroDCLNTiSFf6Gk3ekofAQwB6fhRM3a6ozNhh5JgcUEfrdJPYKTnE4JRRDbAZbePDBYaCeaG",
  "key40": "4jVm1UdfUb9SeNBFzxotDGGy32EV39BeoouofqR1SmWD6wd7guXdQetT5jaxUXYMQ3tcndUTgcfb9zjkWsu7UCT2",
  "key41": "B5zYSunFSMzmp2fg7d5SVCggoLKH2x4SmGE2WNmGLo2D3fzyFpQVjfF4jLrpitbeugDHnEWYqg4J78STu8pbLCv",
  "key42": "yzp52UYcgVgDDGTb84yMYk39K5g61R7YVegcjuupxaRrUqGdNAYvEwD1fGysLTqVLLXAG92XQRQsBhKRkRnNDQs"
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
