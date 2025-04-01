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
    "4rrmFaxqyY614pq4ixL453QSx8rspwoKmpzzXzKutzdadrsM19jK3ntAit3GCwnfeCae7wDzTJcGv6ZYwKr7JAjb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3UEmoThvyRTc73tmo6NpzNLWVbAa28ns4YP4YDDnznqLmR8n42CGL2PV5TJ9Zk8pX79yZqKxyPkAwE9n1seBQsWx",
  "key1": "3TfXZ8jiTMridsXTNcyVLCvDZg9DV3hS4pd5thquM3F1xC1sCaa4bGE6hm1DHaVH99Uux5mwe1pwb4W18qprqXY3",
  "key2": "2uBHGSjQNrSEXzYo97D77R1JkJKcZMsWTBDgAdyXXLD9xH6MPJUSyU5SWu9xxtzaRaFD1ku4iVMR4sQ8aJtdsN9N",
  "key3": "5EMDW3CeEjxNfkMmFhhHXnka7ij5m784PitkqFThirfBMvwztKr8xYueFA1R8Jfh4yM7MD8h2bkjiSzT47xgxPGN",
  "key4": "5ydrUQfzvC537Q67AKBjFMsY7BH4AD2GH92RJTYZgpXP2u7MYgSarH3UZRC9TvYCMwW2kHrH1gWiMKZF6jUoP3dj",
  "key5": "qoBDDcn7ez3AxqPDsh7CXwKewdhrTse7mk11jTmjz9T2UsztQD7rqp67vEqjzRLZzw8EJcb7GFtThsqetZV3NiA",
  "key6": "2BfquLzxKpsmKrCmaUiqbkm2VQw1d8YkCfPaY6KMquGcKU63Ua4HYux8HYTqR74S3xE58LqGFvZh33eFv8nYway3",
  "key7": "5uJBAb21NXTsHL8vSJhSiRrPXuN6TAbUv4maNmCaM2NLVXMHmMzSt9c14s57gurXBeiuRnofbUkgtJoggw21JfJV",
  "key8": "2huyXHomhVtkqPRgfbtPWQD5R2uVgmYYT9zbTPdxRaTSPb9ipraixCdFeVaNuUx2no1rUrDPEfaCJHj5Zy4pwby1",
  "key9": "3EFhDDR4dAXaXx7LHVBdnCJJrbQwm4cYjBUmxNe3pupbr49s7JSSqePX9uAXtF6wHeShq2Er4dx5gDRUc2Dc4ccY",
  "key10": "3YSZvJpERsJi2RtY8cFXXd1MKHMWJRhPRHiW8rxEDwrXMcnDeQ19otkdCt64565FzY5ExfgG5hC2vnrWR8hijfBb",
  "key11": "21ZeaqhowgymAm9NUB7x8atumpHByajooRrHXsZ3LYRdsWji5PYYL8SrVc2RkyaKuFNDZCAFQKcQHLYQCXxJuyub",
  "key12": "4Gtf77a7SPZts2cJY4s6MceJ6KPXQ9miw94g6sBSBxuK3AdoifECfNGd9JSEGSuQcwi7N63KyZDp4TpfZjuxTVFk",
  "key13": "4bFa6JBT2jfKXwkyjFDa43GUZzdtcj2UaT3BX6PaeMTFad8SfPjxuSnGZ8RDZRiDC19wPP6gvburiXZgfwzJ5FyV",
  "key14": "4gcys2SXpeTDtmZGKJatUrB56hkwXckqHxB3w9yBF5QjzxTzSiHfq2q7nCNUmYGEB8z3bf3xGHyoHmZw93RhC3A5",
  "key15": "2YqrH1MoNnGybYKwHoskKMpAZAnrBt75TC1kiJ17TAjuzrgfmx1ACtg33WZY1KBhCQcicBcXgqUquPGC6z2FW9Wz",
  "key16": "5h5LTDHd4KfsWQpdbL7BU8CotAJzRtWZRX6Ea95YihX9a9i5xspjyqAsdDPSZiKVCrpqSWJvLnyrA1Kyt1XwGsP4",
  "key17": "tjsShTaT1nYYPP31BVB1WLTFxYXCgDsWETdnP1cheDxaHGi63xKYdPqdCVwAFcD3E3LhmajzPMnQEzNcSD7HXnK",
  "key18": "5iYCyvNNrT9Xabi2LzUvSNvhj1i7RJ3gMUvhQ8CjNjg8a5hqC7F78ZxGjvMRe7RFKVHtNe3n6bLuGbKWv5Mwaikq",
  "key19": "26tLUBQadGEjtrZSW63YGcX8rJD3XtdiqVZLdSR1zD6RxKEp9baVFrJVPDNBvJ1z3L4qBEwNqmav75UNfncnTT7L",
  "key20": "63nH3jS7t5BiBkqbvtaQYao1QmqscfwNA1Ao7U87CkZHTMvBJuNEn4hjSXauQ3M34GGGrHCEmojGZLaa8jJgsafV",
  "key21": "2jgP2xZ1MiN7YUToj1kaLcsqjbyzf8qfbitHjfjeHpHrXbvpvG4rTErqkhcC1JdLDYyjHbkB8LJ97RhpE6q4vf6c",
  "key22": "5obQTyxTsnp3fAJzoGtNcSadZ1hyWYY3d5rMZqoEzBh9xn6g93xQrqzA4NKw24AWnVz8Pfh9VHHxy8WxcxrJ1D86",
  "key23": "4NtWUktZbAn9SYtqXNneuLf52WEZ8wiXuoxhH9jQ4HGSY5d4GthVScQsabVojP2a2yzALf7jMkgMscmBjU2AEZK8",
  "key24": "4YBybqa1ZEQZwggVqNaJBZrp2Eff4PHaHXTjvvMmf9d4KBYvUWXyD9exPSynsPPA8TPBjsCKWD2o9m17GBVEWMGe",
  "key25": "2iUrGvjCvPWr1wSadtE7WFjWBwp6CWeWp3Qsjfq2CzwC4mBpB2YoucQq6zEzAP4YKXyeDRpFzzRU4KoeSaZGeb5V",
  "key26": "3WkJ1jdjR657mHSsWGJ7yCcfMTwtHqYti17w6ofVbxzqTPSGZNJxpQZCtq3oeZpmedsZkhbwKEAsLx1V4iCnto6D",
  "key27": "2ZEjH1AoC5G2BN3ifopZ6v9NhictvNDnD3g77pUiRsRqxsWbg45EvpSsjMoo6JydQkau8wK4hBeCfeTFTv5fehp9",
  "key28": "5Xh7Bg5V61PxyT6smXZYfFKVivx46dj3GTsUNaHj7Y6Gb7bmUAmBq3HFievS4soDko4LTJVqEa7o5m31ATPf4rnc",
  "key29": "2nNwNiHpnkrPcdQdoTC4WqPssXRqYuUrKUupTWpNWzoKSAsaPceBm4bpcAUqHsGqrvEtdND1smLvqsFAYd9hVDUg",
  "key30": "biG4zrL7RCg6UZ5XpKQWiUb3SWrf7MHhvuwotbvCJU6RQWRDuVgz2XxSMLacnKWchfPR6NQecZSHv75PpUCV7wz",
  "key31": "3AFtWCj1wMtKMUXB6oK16iavxrVEFtFKMAuMbbx5yRVziFbVKy444DW6Vv6de4cQxsZrRNXmmDLc5aFVnyWbBD31",
  "key32": "2BxGdGsgPVpE5wQvQGbcecSP2y4BJjogXA7hjSV8ExDMpYSK91taU1Q5GZjneZp8im7nkD9LHJd1UzPTxDdCQT1D",
  "key33": "tvsVbKok9xS6joPpusncry6K3StCcT4D5PL6xYzwRuTdQo5DZMVEcnoDxb73SLSNAPo7rmfnEaaxcj3y4i3iKr3",
  "key34": "5H6PPyUQ8sWusKYZZuyd6brtdoJEEAigY7UPZ3GRQznPk2fUbFtG6iFfyJNmNrX92bAYeBxyw3HFXJa9Th2ekVjt",
  "key35": "2zMzk5KL4riVc5AGLmi9MxkP5x3NQ2y8p75C93aNTymBqxxmMmwz42sZyWynrjPYVjQmypRTexsrvg5b5YgrW5Y6",
  "key36": "4eAF6a7bLQ6gZkQLTz3bH1Jdk46H1C8cgXrfa9rgBcAEExsdTGRf8K3TC8J25miwontd58fdhubCwpekKpX95Cky",
  "key37": "3xUzdC5iGTmeAvYiReEqsXVu2H6iVfBg4vr86k9JaRjbx6KsvZbjHBc9BTLxYSVaWXJphVqEWnCCM6NeLJfEyJSQ",
  "key38": "MGYrMEtY56y2faZMw6nRmE37Uxi5iS97kYxwnm9a9Vbv7PBxYyJmPQfVjpRNCb9xR3sEsPpweANDJ6xCV47vYVA",
  "key39": "5v1CqCFpeiiVRHKwKfLZpknhe3vZT7SRHVdAkt2bnBnFbp4MFs9skhdxq1ZGjLiN56HyQZXdDDjbLxQSTREjKBWZ",
  "key40": "6zjMRGwoPHt2MKMkiVshtf8Xjf5xpieppW3KrG95GKpzbnYCmYPsqxoRCyjgHTXeGAo2md5g4GS4HEjxRJyUNry",
  "key41": "4JXnsAwRoUakQuNeaKecQNe1cMRCDhnJNyWMHhRvVaTWx8ERNaS4FA9D8ayZQnVMcdrsuxeLZfEKuSGcBcLg2QP1"
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
