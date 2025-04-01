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
    "4xCZw8TMmj1ZKV1YRphtnj79DaEkzR8Pii9mKkRjQJCuEDgWwoNMj7352S9CZLLtCY6XAjXC7v9zGKRhKHjAEVWb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2p5dxTJ61xHB1FShyivrM4pTTueWXi9s9mkcg8UxajFbc4m4KJnVrvrPhX7rZ71XKQYAEvU6ruw4kWweEYQLVayQ",
  "key1": "5as42MWE7ubnAwgA95YsKryYtT1PdpGbx7PsbMYcEVsApEgsi3vnpAQo1rTHk8vr8KzLVCjskMYnHCe8PFNaii5d",
  "key2": "3pkS5of7P9d3NZs9PmEts6JFSLdDrvVA7vJj3YJ76h4BRiwAtjccj3onh67xgMXvrboAf2GhPoAAze3FMmFL36Bn",
  "key3": "5cu1SsHzQEPaU8ebveaakG927iiQ122Su43UFxgsCzq1sSKo8wzAsnKjS55co7NUVxVcCgmY9TtUarkZafMXvGxd",
  "key4": "3L8Ym8Tog79v6MffSpfGJ4Uu1wzhdKC5qfH8x1sCWFxnvnwMkfWwp18JppHMt4AE8qRCAKbqivNEGtRGYHqdm82K",
  "key5": "Ke2MKg9draAxwSz7rtCQcz9zGAeaZ3vKRXWZLjaR2WiFURcEqgRduCWpCuC6WKHetZpR3Fe5iYuQKRGk4thPiiy",
  "key6": "3dHPFjWEUty1RHAMzpY3EETjMGknN5QaJuGRmfvs9YoUJbS9YBewPomsEFSYrXCCR5siDj5Yb6UpsEQhj2bjnTa5",
  "key7": "tejVkpxQmZCeENy5QhPj6AKoBueYvgq5S3b3EwDm7t8ZfwSsNkng4bZmCZCsRY2gcT1kw8sdsHz1dKwL9eFhqey",
  "key8": "85en92x5B8FcbejeaFSR2k9RteFAnXwpGbmdGrTiK3gw6iRDxLjTAnPKyijJKmtUksyfbYpyAenbhTL52iKs2Lq",
  "key9": "HcYTZL5TLWcKdqH4mN5DKzGxi4VdgbrYPeBGeFP6BdGJEpGjapu4k6kt3WDe8P2nipFWivqEATzCcQNSK8N417L",
  "key10": "TGbVV4qMcr9aXjcNiN88gc91c4kntJnmdbzUfGoGkp1ZmebLwhWU27XkNQPaqRKEXkq3F8Uy9Z9spnLehUFrbub",
  "key11": "2NvhajegiSC84XAdc1srdRVF2dzTGm2X4czt3xLPLfKPiwLPYchzomj28oUrKCrGSvrwNM7ckzmspxLdaz8QWGCb",
  "key12": "3pJVNTc2DPoZMbtzbnDEcpp9oym8z2Q1SnFs78rSVGWfgrRQQRR63zriwyvWkwqjNQkgYKkaKdbbBvNfc2EvUNMh",
  "key13": "4t3TqvJnq6bUfpRJ7aN4GaiFEbUtFRQc9Y9mR9627JmUDAjp2NJawXsBmpatroP8E9M8qepAkkAcutbqj7XCoPgL",
  "key14": "4EoBaC4N4zEpfnpn7JzitfDrGwZdD8WEei83rkwyJSDYndXzqweHKQxfTGDz51ERJX4LnrrdHwYVFeJo6T4x1jMj",
  "key15": "3Y2xihSLdRH9eg2waCrhRnVFbGDExkNftqsMiT7FQsKawfC365jdhSzVEoc89QT5o6griGo8ysCdBVakkZfYwXg2",
  "key16": "2Qqh4u3MT5RUFAb86oTQsL1MhC37rynq4hijTwH7PqXD89Hy98rRCwdWszaN5m5kQ8WxJo7Hm8AN17DEDwfS3V1i",
  "key17": "5SW6dPdGUEWiyboWArj9Kx6X6jteQLkGFjzb4CJ3MXfdpYDcbWVaVdyyKWXZd4t8X17f38jGhDK2wct53kp9mfmR",
  "key18": "3FSkwsHa5HoFWwCQf7Vw78bVB3QWkD4X9xZBXQZAeEDxUfqw5MuPqu6GF1vxgoCQtw3wrAQXVmG5x2G3iNX5GwqH",
  "key19": "8AFVSVjLWABa6PBatRsteQrojVurEafjeDs8f9f12HX4beqMe91bNqSyT7tTSrR1CGoDd1T9RhLw92qtrUKRgX2",
  "key20": "6kA39dpCVYegTbeEeiRChZXw1xRNze7dyWZeU5LDexo6fPQ7PZ5xbEMzQYhaJksPxyuEcAX3Mn7S3kLn7gvaQn8",
  "key21": "2gD1nzGFpTSrH5L9c5NwDvviJEsJ2ht7XXY5PacFrNi211HX2DAa4on8ugFfZjr78fbsdE6FKBCPT7SHHV8CuTRr",
  "key22": "2swasWm5PwxWTEREVywXHpT1uwAe9Xrk6rWHUYXcTPPgEnGfVShLaNFw31odUZWYrowh1ad6Ba5Ba2YzginuwZid",
  "key23": "RR6eafd1ds86Q73zhypBfJoQKvAkdF1Y2gTift6hGptu7Kotq6rywtZnzro9ByDqrU9Ro4HxmisBEm2SBv33Zuv",
  "key24": "63eqHWBHwkc5escoWbzYPARZVrGgrAzeJJnRTEzjLoHSRH2tmh5DdhoGVrHKTHYvc4B5JMSfXbmQt2VqsnEdTBWs",
  "key25": "4rZLPFEwqjEKzEz7HQBwhm4vsqiiYspJhRdrmPjNTszCzZkX6jh8xR6L9wzpRU4sm9p1DsLAVyGqAVjGbc1BqPHb",
  "key26": "5do5DqrQCTAAhHQbiyRXo1iSay6CirZLCzgmnz1ehxwucBGCaqCFLAW9ZR9vWPUNStM2FLKsCzdQCiwXgdVhZPhe",
  "key27": "3ireA2wJp2HrokYzvL5SF87eExF6d9q27qdkrTYrw4DLmxyzfyNjyDvgvASZNx88zBY1Vj1PAPGBoN1Zep8FXVGm",
  "key28": "5W9ocoRm28VWCg1BmMxY6YHqPiuQqQkXRaGN367ootZkvG8hGUMfNWun49wWazHCrM8fMFe1hVGZ1DT9Hk3Cv79e"
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
