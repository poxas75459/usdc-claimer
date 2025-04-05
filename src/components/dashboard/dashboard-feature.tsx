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
    "2JyMC8LEzfaDKTRsZQRRhXWeNzL5bmDRjf3DJQ8uC6hyp2uGzyaYT8cSq8rKzJedcQrfYsPSnkqNVBk1jBrhYTBx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "257aE6m8nVpuuZbjgyMANHEfqTR8KctvvrhQLdwDxH4q4VYNMuLJf8jDqJnsLvEMBRnEQuB8ovBCkmyGq5SX9vxM",
  "key1": "2c1JkDi8RPH6zwH7YRBFE2DYdGtxtiS9pHkrLJYPEG8M5r6vBUuPc2kYeU1U5huyNK5tdqp6izAZXVphwdDSUYEg",
  "key2": "5wod9G71XQTtfGWLP8ne8ypqWoFhAZ9h5waD9NbhwwcnqrnpnZqFdahBrCrPZb935ewKRdjmkgmEga4hAQnsx4JK",
  "key3": "4mFtRj7bRdnbhuAStYE3Tf1U8MFvfQN31exezmLtrpyim4AX1MWk2AJhhAatesqFF2RFc2wczBPpsMc4M7395ixm",
  "key4": "268FCGVKEMVuWjForXA6S7r8yUTk86QBbt3babFVVwirm8KYXAwEuzXeER9tyqd2TcFEbPu8EboChcDSNX1dv8Kv",
  "key5": "4EJTVgyVsRqDDQUbek3pCUF8jpi7khzxJpdtnxezr7ed3zHnBicc9j1XGcQTJKm2dqiD3VuCupQjP6cryUiudqQM",
  "key6": "5xPEdTkibdFV3L5Bwhk85yEfyiNNqr7MRb7C3axg3dC3QJSBpnbAncDdFkSgykrpKU4dTtTkEQPDEsbgLG2uo4KC",
  "key7": "3y3hoSPp8Bv6YHJAVVQqPmJSR6LyzewYE6GBMYStKH1kXes5f4eF5GKfs2zEHgJErfVDSkCsJB6q479rkPgLVj5L",
  "key8": "3ar9zzU2W3i8YEg3RAGyahtM9tZ6xA3rTQjnr5HhusWDzqJnQeNNT6YwhcoeWnoX9mh1VWsgSrCXEMu7hUs76c75",
  "key9": "5cgds6pAkLJUs8cZvnbRnRJAAyaZj5DoBU5xGzApUkzQNKQmnjoJGawn98KNeocpRpCZ2NbYyaApNRD11gSoEHSv",
  "key10": "5hfEynXEreEDNbgZx8D85e8wLqnq4xkH4brbUNyznK7E5LYg6kvJ4yrZeoRrnKkRy3qnDdrgyph9hP1dmuj5hHPD",
  "key11": "373isF8hs82YSsZzc7p2AGvHcZHtCRxKLkn3Xng9rLFCWskbUXx8yWRXEv14bZM5dV3ve6fsrtitykLHkuT89eAy",
  "key12": "rq829LsoNhM87W15eeT6QEYakftRX5nPpojdGDByUtjBi148wawLWK2Ghy2y5DtWbbqSHGVUR8uCBYxVzFdytuA",
  "key13": "62EuHtPHrG9SFvGJCEi66c8CVyXrKtxtuUoLJCbTDcJRhVZH9PJg1UzaZMJ1WxVh7rDC8sRF4L9o8xe2k1e7purG",
  "key14": "3cBQPCqeEKpnzXtLa9hmmNdYsDo8EgY6v7nsqUdb5xX47nCTf4FDntYtXY7CfaJDhfTALPTq55bL6UsArjmdHKkr",
  "key15": "2U4noZCbrVE1oXcBYgBv4wmd2epQbCs6uiL7sdXNdpWm6FmQMXQjNj6BZma1MEigsxL7TeCccwWs8A8XiukUZWP7",
  "key16": "3Y4s43J2CWmL9SwdjLDiiyAryUP9YQhx1to9qeTApSwCPkipQuowZrAdJxAfiQY31PYAuqxdkXHUwikGwxpwPtwV",
  "key17": "5TY1dWNzcKn4GeNBxiX5C3KyFejrGWqguAdEZoJ7BSzJhtq6DVVV2niKHByg1Q2PXoxRNEJ6frw5nDExB5WiJW4t",
  "key18": "5c1GpZf7CB8pAHnx5eboENaRTz79zYmmuWhNLj9Da5cfgkG4YZiZB9Rh7E1ZSuTjpairZ9kufxPgq9K19F3w7SS2",
  "key19": "65uNVxh2CXnvou5BKV5DA82F4zUhZ31pgZ3F81csgUs3sMhAkysa5WJpppZ15HakTi38ipP1sN3Nfe6aJ6qhagZR",
  "key20": "fKn6pZ8BmFTEgxohWCAPEujnBTSyFxmYaDzkeUZ8F9gRxU68cEwJXPHxPq191C91FNShZqH1PwkzDh92NDLdGrX",
  "key21": "65H6YEVbAHkfYSt2hFdRHXs6SP1q5KsBKauyduWAJXea1D97PyVXWUAD8SYiyJ7AFstW4G9cwCJCmFws33ZtSZAy",
  "key22": "3ABY6uSTPPYnfatsHjQWZhYEs3d4ZPMMiS99A9PgJzAmsMsyzeA7KtKwRj6oJ1ZRBunMRHNwgow36JPm3j6UDJ2p",
  "key23": "3VsGQ2PQhCv3rVTiWgiA7vvdLKnvNxPzuv5Xf7QvA9EjYQHmkBatzrZfDh1M7QBmJAEspQ3zGaK9u1JuorpctcGN",
  "key24": "5VqXarG2HGjcXDZmmV9zxaUsycKYbpDjmFiyRQVVjfs5TLmtSKoJKNnFyzFoU5kDPSFQH2MTT1so9FkfgCpHRyS2",
  "key25": "4UyYibxmZUQnPBvph3cciXwXXagFk1wj6GfMLqRLC7bXzKnXUpn3gYG1uJ99cs4W7F1JCGg7wXozsdSPcX8vHfaj",
  "key26": "gxetAzwC6VX1XjKWSCLfEV6spDeyntrSGBnSSRHWWcU4nZeWAYFBRoW7KKbWZj29NCX7TtmYLY24niJsatUy7oK",
  "key27": "2iQYm63fXc84CPhTYnWCXLDsgcQpCivT5KrF3hjh2P6vUUgFhrVXLFWdrhogD6QGU78DnKf3SKfzQm5ikJBY5izo",
  "key28": "3rn9ah95DK9ji8w2yijQ9L6DqunQB2u9GSc4ECnQamiZqbhHxuxou99eg9vNkWAqPcSKtaetE8poZzgc2DV3FXsb",
  "key29": "4wsZQojZ5bJJpvagLmMECYbrqUSK1DVYNQKGERxYUpS6v1zBvWE1x3ehd5Emz5wAYHxzhMGwQxbLnSLKpJBgFDde",
  "key30": "2RzUeXavcYmPV2By8eMZ6kSxjkqxqo57nDHAE3APCXn7sTNTWjUj3oLhBZ1TvgMhzqCzUSr5EQ3LrxcHniaSeNzy",
  "key31": "2FnUm92dEYtJfHkymwczkUED3cPvqiL6K1FSVntHtKvtry3SyscS9KhstkRiinLbQe2zL9E5QkvzmySz7qT2PX2U",
  "key32": "2gBCatbQCKX49jVXyU4hHgFQXUEN2tpQbYzQgHNRT3GH7gG9UWcmP6Uc9VaDwLwrpxqAWo8KQuW242XYiAgpbA6S",
  "key33": "jEUD4YGq6Hnsb37aY6e6vwCaV2dDzNztg82BmULiKdkQaytFcQbzd8tbcWkxz3Qc8XRt1Rkv1pBhdfsjfoWjzNo",
  "key34": "Htu8CAufpzHwPTac8X3hhZmvrwwW36BRgjyoHXYHVckr7qnUgHSDjNHBynEt5Tp46S2GPq8SUQPHCW4vaFWLp8Y",
  "key35": "44TTDb46Y7xEhuGpsiVGZ9LGH25LGhz54W4hAinLugptCu9kZw8YaEcWeC5BH2zBgoTux6ovKMKfXLJQ5ywTiBHK",
  "key36": "5aGoudcJ7ijtmQ9k3VdzXXpUyznRYozT49uxzizgw1RCABUqLUGhen5arvghjvQbGwMngJn9GHr6hBMmVBEZeNwd",
  "key37": "5iMEMkNCCSbUnqudgzgPguUAKF8DC1A7k8fvizEX1NdFoVGBjASq4MsW2WiRvuQT7UkE1yPkGL584yGWUWDSQCfr",
  "key38": "3zTDbCx6knJ6z6b2zkDhm444iHyUAfNyKcWZGS4StUQdryXQnVV3JJ9Y1267dzP6UuDdMjcj7ijaSrtrBfhmmaZp",
  "key39": "3jvCqDe4mh58VzE1dv2dEGECeTkvVaWhMSmAV2Zjtp9RMcS3QW9BmFeoUrk3s3HRVtufpL8q9pgeiB9burJpZ52W",
  "key40": "5HEm7CQbtNXWeFs7sXtgQXZ8nP6se6Fq7M8CeNqzVMKDZUHz8K4eL5kdtDGavvrEwNv6SEXMCVqmfsf84Yh4sNuy",
  "key41": "4KUD8MpYwte78eKGkHk25vdG18wGBFGLopWTAA4uDGBCoeQWrF6zpnYtpGY2DPJBtKvyR247wp5bPYQ2ZbBwutW7",
  "key42": "5ad2uhKg7hiPKPrjCjSCtPH5iq8Atc3h7J3nuf16xNSg5L6xRHn3Jpb1mytQxkyrJHX9PkxZ9YZStt1YYCF8mGTm",
  "key43": "2ppPEkRYgt5kithFtT3EFTc66jZczDyj9EqoQX1iawqrJFfKjer3ykkSkDsuJocFdhX9GWi75ZEqsL2u4eZrhtJ2",
  "key44": "54hWYSFVD1qAV3NyWiKknt8LgbRNr7VtwDG44Ep8wuwKWWqHb1oabzvn1FcdTD7ZFSNJu7jnQ3x6JS46VvZc25Gd"
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
