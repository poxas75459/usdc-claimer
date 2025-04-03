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
    "3t3wxbQefosJqxXjRbqVVmsJL7PhhK4jxWv5ptX6Jjqzb2S26Bdb5SEX1qFYPKgCCE9c1NM7xzx2sdEHEYLwupEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2h9k5QTQN74DHPwX3RysYoZA3BAC16qNpZZt3CG2hGHRy63wPXtjXYeS8bK1pKQFePw6g6apeMnGtFdzzkBgqxNS",
  "key1": "2yzDYSkGgTyjmxsgzoJ3qWBzGkXy7ddKYR4rMU6rBvkuCBXLbfj2BNDFh5dPXWzhmmWz4JeyvJXN77qfCRyq1C3u",
  "key2": "HdXGAkReHfHZwum6kvoo8gPjeNX772TiNryy99Z1L8pRpbVVLmumRZP1fPQX4Kmp2eYhdRoxawhoJFia8f1HmPM",
  "key3": "4EKkaB75bSa37U32c4m8CcwV3BnkCNZqa9UCEfNFDPchmH4enPUAnHNbBtMHLfAkLy9dzDQCjKBmKbFkdsH5Y3aJ",
  "key4": "3PC6yvGCXqnYPkDE8Y9sTAtHvc2EnpcgvxZk2Z7Eq7Biv8YttdDRsMiH5X7znhiFPu8Q1A8qtaBjsTRZuvxpWBtA",
  "key5": "4bp8QKcWtVd2RBADAntUL5aUhcjUL8FY8bVNtZBDCzb4FwuJATJhDiZgVwmdabsnidrFaK5wDDwrCywDnT8HT93T",
  "key6": "3dSJaExZQEzVtirUC75aUXTCkfKxFSeFRpmNYk1t5fHrV9N9aJw2t4K74LcchqAXCEN4PszjzsYDofXfPx5mkm5K",
  "key7": "pzwULYvo6jGCEjRK2rDH2vPbeAuKq9VXeUagz5zb9p7LS7LfMsmmTEDjHFbJF8t9EYiKgNcZjfmbFhCS7PnH3do",
  "key8": "5c21xERUXYY4EFfawG3XDLKSkJ2eTsNxrajf5MTfatoNKCrUexp29ZPm23dvVdpr2SJYPFC6s3qUpJr1BbBVXhRB",
  "key9": "3or9aVGtauCzggeGreaCJGuNHBRiYAbn9p5HN9wqURJWBLvQbcRvTKHLbHNmc8VLHsnHKVcwjY6AzhAU3yAH8kSF",
  "key10": "2JEAGLYKZDfDt5o8kxRynrziqd6HK1JL4VvJUA6iGmtPNDrbXn8e3LeAjY9ix1dVHvPMxY3A7dtHiQm7hL7bFtVU",
  "key11": "22GLMfR5tB1Cey49qe4ZMTSx9t9NivTPGcKGtW78EE5sruUk2A2eRUvFSQztQb5fkz4SBVTNqUwxSNwZ5egwczGH",
  "key12": "BoLuV9ryaFDiRhetx56ZeG7C96M45ExmDoG6aV2kjoCpVVjNcCr1yteeDzVbAmMS2675pVWRYDkBVaWjJAmAfkc",
  "key13": "24QeDQkNoxgs8fVkoADeSqahrtT4osHFtzwFBy87a1aHP4VcexpHkDCWBcD6fvKueHzXNtSLxtZZLVMyxvavqfFG",
  "key14": "2tPrDqHNnV3J26DPLn7vMK3SzmUW2kZUKeCmW5CTd7zfnQbwWcFxf5hvryWNZMjvfkbm4TeyjvW4a5wV4zurapqj",
  "key15": "5d6BZRmXpMHDVdeA7XqqxfSr4YpT12Tcmxfw4kxMTZdKaN4r1vjKFezeuJJr9tiSJLLkHzfsGpNcpn6vbMsSq1p8",
  "key16": "Shmk42bNsvWTMr4i5YoJ53SiP25CrWP6h6qTCZrMsGHBz5Qp4nRrsEkJpN7ZcpJUsSCidg7d1u8CiSwBHNKwk5i",
  "key17": "5sQUVPhDuk2cU656CSYGGtSXtjpisVBMys2EViRr6HxHvFzkbikDMnwg4N6rAkEBc4TquVvdzDENS3dJYCFcHUgn",
  "key18": "4U8cKaLMtXuCVkzhVag5t5zch7dRZEGMw9UJnT7PifbGfjznYEsWJmjFtyGMkqydeVsC2CUHLpscJZKx3WsGj43x",
  "key19": "2Q8CEjG91dGWEF3o639Fa9ZS4kjPioTVrMLadxLFyJ6inePgZCjQnhgTpLmziF1UW4XV8mCTMmrEBp4Hy5CpWEDw",
  "key20": "3Y1L8wv1hR8XBRawU7mQXJ9ZJ4Nd73786w2UNzZxFkYLBkEtxvhcPdfobVexjh2dM3tJnF7RhTq91XtFpwxGKAXi",
  "key21": "44g7KUmadJasG3961q8pJibBqBhnDLNjjppcbVWCQkJoiSUJPLW3H6jvNonTMGHW2Fs7oiHck67ESNR7jsL5FpW3",
  "key22": "3zPDwbN1duGZBE3Xrdt3QPcEW7PW9ceAb3ff3nLduBTaZVNLhqXRMJnUcEkNRTdSWKjJA6ovpEViwZVHkpZuij9p",
  "key23": "4QsLkEpwE7pcwAxCYw3rpKkXFSqCkWo71A7gKCrSxwGLZ96C4H6CAYZ7wpCGwS68n3a8V59nMRYb2FSWM5YpcTVF",
  "key24": "49YBnLYxpx8MSTCGeUSe254K5k9Yr294xKZwTgzbpibCvq64DWL36WFg3B6eLX8XZSEdgcFZ8uoPbw4fTHEo37W6",
  "key25": "5iJkxX1azmTw5vSMRk2RcjK3gjzCvTG7oWx3XTtHDXo4Jf72PUpZaosscyAT9N23rXW8VjiLYxKtUx3tBJwDP9W7"
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
