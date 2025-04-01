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
    "4anSsQPkTmeqXu3WhC8Dyh88auNuoeG3U2KwAbmXN5uVjNLTWfN1h12kRHgVqdz92kB8MMFd1Va8wSeccrEEhMvJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zHghsRcN8AEgdrQUv1NR6RBL5m5pDspkyy7dsztWN1LqQrLJLxJJS8LgM8fr7FEcLEdG6WteU6KDZFgQb4jADd2",
  "key1": "8SU4tFs6x7FvcrxbZ9Lwde8TKDnDCLzYqbmkzdhuvFf4p1Tx8mWSV4doGFEwNHwchUmVRG2n3yKQHcW5VbHDc8C",
  "key2": "2fJC1QYerx2BbAhxEC6XCqbrsrMMV6fHMyijwDvUhTfNL9z3Hqd6ayHvsSKWDFLj5ubaLq3vTmZBCibFLVPXFLHc",
  "key3": "yn4HLHeDf9VjTBHncj7PZUPZxzRBRBA3cVn9VESGCX6jSQiZqjXwcbMWZdEUmrbaFfD9n9PAuxeSosCWGyavE9s",
  "key4": "3NP2PTy3JirvqTn4Cn58c25ZQTtrQsdLr4eRAaM1crSrGBH4Y8FG1DVRbKzexXfTbRXcKvEzdPYdjFDFKyE1pXBc",
  "key5": "4qdjov5ubZokgSfZLGtG6N68Dq7sKHURrabgVoduDfuJjvyhrXqDoMtH9aaPA2Jhsf1dt4KLGGZaz7CSa2x73nQ7",
  "key6": "3DTEw4Fjf2LwFbxeeyHzSfBp72z1taWdwiL4QGWKq5kzGYGfvifv3zN6Q2CWhoGo7UE4fZCpNAGgwge8SkkDbKkt",
  "key7": "5RhY8bWw47YZhm9Wa7t9kxi1jcrc6oqdPvEhCVKyV6NbLgjHQ3S9nLQgbxQ6eHzsepENMof2qPWnetibdipfEKmt",
  "key8": "2szLMUbQid4t1NTk4xRp4LKcV3Cv12YNo6SMVMTiEtmFc1KLXC4jdWEQHpVXCexuAP9btEssSvp1gA3HiVK8fksu",
  "key9": "3EKHhB8SHfRLjepnxhvt8vbZMvBDSxuUohbGUEaXMfgY5rmuMeTbuDJhZV3AEaqtQGG9YaYnPSp8wyQqSDfdcMX",
  "key10": "5Tr96xMe5ZZPs8LDMqkTbk6UPJBna5BphowNKwsPFTT2tGSdri7XVN5S9sB7gBKBZaE5DxgdttUUXPd1fRZUNqFo",
  "key11": "58J1oEfZSQivBFGNKLqBvmmFov1aLSaVUry2V1T2Eqr1J8uv7kccth9uNn9XqogNA3Qkg1PafimGBubTaYk2hWq8",
  "key12": "3wtafFmjpSu4j1pcyytf2eV3E2QQYmJzBbyp7oax5upB6UiBcpZuW9wBMga7aUhWt74mibiwmeUyMrgtciqDmyyE",
  "key13": "5gr5452XF8nzPSRFrBua1wX6jPF7yKWUfhKjZBD46fwjqtc3LhCKP7tg2N8KQLCMSPZASBhWEJZcY9nAY75DK3Dp",
  "key14": "kWcRiz6AMc7bEd2mhjYnptcvykAcYC4Zq3zDHfLDZrst7cGBznQvMkKidvWQippAW8kWAb7Pbu1CiLsPY6FDL5M",
  "key15": "4P862Am73xYWvnC3spLns8PPuPDp4amvc5o4UmJT2imP5LyvfTxyqVCD2e1MkKPCJ1NTHUA4CVFCXSdFGcUbtwKf",
  "key16": "4ENNeyHdHFWSBT4KtybwdQHrCUzkeDu6vpy8vMSyqBtERC72qanbMrTV68NEtP4yuNm4GgWiAbp1FBH3kanq14st",
  "key17": "52MprWAUzsMWgJgz7TPFZHvckbnpjrP8J9845d8h5UNG893KbbvkGXCmmomDXfxGF3nxAxpKibKhX3nfhB5CnaAh",
  "key18": "4zZMng1acLA8i7xbyC5cNV5DdrBDzjzqhmwGoQ6xNYhCXBKnQEw46JarVDEBcodxEZTypSCyJsimHehiEVHCnk5F",
  "key19": "4gZH3wP49QTAWMMLoTvew8NwhFvhFQMNrbbVvAV1NmtyaaaKMovwyPPxR2f3pGQoUBVpa36H1s6LaKve59wFRRL5",
  "key20": "3KDx67CseJhHQ6eLk7BY68dDBs8sfciWYz3GT7PbbeBvqScjej8yHUmja8Rm1xHwCqjavLFMjWgm1RSr4QzDNv8S",
  "key21": "449K4E5CcduF7AvEDHtdmmkX2yN9RrScarPJLjx5emDwkpz1LVkno86thDhsYwjqcJka97M1snFXpZWzYjJYzaZy",
  "key22": "5epwL7MvZuVTpLm3ScdR8uvNJyEpd75xc8MeJ9JuiQPoaNYSH6VeULQbjCu6Qquj4JjZcX1j2YrKgBQLzFe2rGtf",
  "key23": "4qb9SyrFabXsagjfXAYhxbLyiF8mTJeAdNYa5sVhz2MDHrgrMvjFGY6mvg8jfCsXFkGe9JeFZ1nrkPvnJWdutJeW",
  "key24": "4xLejAy5KNc4i1KKS5z5RfroJbDYbFC4UM3463Zh4QkD4rB8GoBfs69pR3kE2vwFD6q59osPicc4o17FR91DWei4",
  "key25": "5hovP1xgmjg4PdnMfzrAjFZHjyGUDuPR8V2VNsELDv72eqGqpFCtCEyj6FHAXwmGLNdty7boTrZPdQ1aYpwy8j5y",
  "key26": "4tWqsTydqLcCqktRyp4Sa8Bd9AnQYU1rREo25cfDxCSaBfY5bV6k7sgayrJh974gg7RopEeXi9GTx1CmFWWhEZhC",
  "key27": "2ozEF1KnT8vpTEUyr8DYfM1CMkgSGQJnzWYce8ApgxXSZoTTTmMQog6PhrzJcNpeETWodVNBUVAXtQ4F4Wgfm1Rf",
  "key28": "5AqahvMekkNG1n8ahwnqGkzECuFsRa5rucBjzzMkhZ5mpSAFeZTpPAKqmXuQiFBD8vZMawMnFZbzJqXS46H7BgkW"
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
