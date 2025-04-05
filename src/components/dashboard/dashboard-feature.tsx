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
    "rJhpPvPaBAYshJtqmSvAQR6PP1HN978kJ67JxTgPot6SKumQq3WaftJg7sMVvQShCDmWsqR6JxLAujs9PrT4GMp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "iUDfp81AKXHoyVLHLDtoEJitjcnpinaWxNs46Xt6TssSaKKs7FjsebWr2xTENAvSQvkVqtUVxHGyQBjxEKXEZvJ",
  "key1": "5mDLXMwewmsu9FAkSFoH8UG1ATXqzyUQAd7hQ8X3HzVeNsHaNox7W6tbCv9pb7n9z4ZBdeouBqrvcRtK84s1Cjrx",
  "key2": "631o9SLBfd6rFpngy5N6eqZm2vwaUAtjEMW4skLQqPTu3gzkj6Qm6CC2z3iuDtDHRBgRMG9mwjg3pe8ZVATqq8PV",
  "key3": "5wJEpH1hQFM1NwEpp2eVLGFKbQ8w2MnWrNA1HgoSqieyfaR1jPmK2desiwdXMm7TsCyR16pK4o1oXj39kXFggB2p",
  "key4": "d536FfhJdT9DaDRpG7QrXSGeK7ZAubwqYQwf589eraitT3pfkxww2oCaEpxjd9bAsXVpLRFVGu89TxXHqrhMbFu",
  "key5": "25f3HkKLDfxfU8izEHxetAZLPLCSTLRpaXCMEcRCics4CCa51K9zmh8cP2sNoFsGtYGahK3H9T6vxzmQGc8wK3Uy",
  "key6": "67mdi6NmB1YSTa8An8atzqUe6uYUi9DqK3wxBzbsd55bQhg9Z82dUstS6UjkjP8YPZWxq7wcNqu8HNmaUK1EpHGH",
  "key7": "4EgVVQh7sQUZ8RNg6V6ihAzLVKpVqdugcPg3p5f7f26ttQGH29DR5iP9sXqL1nKofH8HxU5fM2MdMP3UaNhCtxmW",
  "key8": "35Tv9xjB8kG5LTfa1osLzXfp4wdzeJxY7NroRRX8BAFJ6NDE1SPvdH3KLTs5V1tfRYBPSsSCam32zRSYXSqf2PZZ",
  "key9": "BvAY6B6ykgRKTuS5d9Y9496E9TKSCiw7hME9JiMAT2bFo9TPMnzbc7cR6WVsWfrjqqDMNUHCiGZUyB6o71neqdF",
  "key10": "2c657suAXgztMgejUGPKpDaFfu5aAni48e59AMVXaH2gcDswr3SEoVJmvLUBPAkYCgxyaMCWtfYRfNnkeTV6NbqH",
  "key11": "4GvW6YBWNWzk6gtLBqyw5uhF2PY8pbP8pJQUDiWz55uh5EKXwCLTRFiWDbxQgp9Qb2LHdSP893g6bfffCC7owVit",
  "key12": "5jcrG9NUBWUR5NpTLBDjX7FXKGd59t4Ybfn7RjJXXfoK5t1CL1fbXLJfAng9cNbvNXfEg5yaDfLyB3cW6qP1dnAx",
  "key13": "3twE7CFAZoi69kkHQ183n1Gt8MmfA9y5m9LKioHjE4ucjj8nXtobCbE39cDNDLvwYQZHdgKErJRCmiCmy7nPfh6L",
  "key14": "2DUaUk4Rctxe7gHYCodRtXUAP2msRquXCQDbbLWH6Zo2KzGVistEw3QWnd65eCBYMV819QEXQDZPY6VDP7mzeYNK",
  "key15": "2AFJihVWu1nkShKDqmcHeMTgBVmQn33EBsjtW5GXUh5rurcKxGxFd4mMESQnVJHVPdQqk2jxjsYFBbgFFRKEHnxa",
  "key16": "5sPQCnG9kggzVk5E3jreVt62v91rB5Mjx8PKQ3XyE4LCPBy5vziZbCgpwZDXK5ibPRieiiYACXemjUW8yTCpWPiV",
  "key17": "5tSMERxZNH6yFamQmgV4E54HLiDNvy3fx3FKbGL559aATw5hmiqu9dLmLmkBjoDoXv8DRV6r7AWtnVPr9HqQJE9T",
  "key18": "4FoToTgw8513xkKrojhKUjE5tAkSGVB3nMEtVC6WuNXG9EhzGX1B3MaRSQp6EYBgU74YeT52VKR4HPuJX78NVnxy",
  "key19": "5z14UQDhfvvwt9phMDfmE4gUNyNvuFq2oDhkEzMAetgL3dGFAL9g47fL7tAaPA6Gp56m6kbkfe4sU8N1Kcj5Xtm2",
  "key20": "4jFFXrt8rBfa6151UhUepo559WjhrAsRM5VnjCRsukp8yxSTJ3czaS26Hr2YtKhEuFE3DWFSERfnxUnXyzouHbAm",
  "key21": "4FJbqHEBx13sB11aFxUsxuPudYzZuPunnxM7d2EYoELynqkP2DGjT4AEvhUYWKJub3TqNsz8LGKpvFru6URfEPLY",
  "key22": "31qy7PKguu8xYZ9sKLQfNZKB6J3XA2PazeQYZNXmHRQwfxb3qnSPGZ7ACK4i3WSiAshcY3s9iPKo33Krpvoohgqi",
  "key23": "5T3ESg6kGBqdKobhy4S7pguhmidvoQr5gc78QyxNnkJ3rUXy6TCSJCrKXSLYPNw7MPraxhg7FDFJwfjyGTonm7T3",
  "key24": "j2Rj41kShg3ZAPPcjkjgLCeRhU7KBbW26NXdG7Bv4ktUaTurybQSxsFAocYiX3PRxpznv4QnR5WnKuvCFUjNErH",
  "key25": "679eNHK2mM2Dio34jkR6Dihq86itb7KYGArpGY3ZrFscDg3BdehfSvUJSqDpnVtp96tpHqmY9jow32NyEgvmoxVd",
  "key26": "B3ZVidYcB3TZSDQtAM2ZNt2sHmQWP1zVRwUue5GboCRpsVgvGqjE38eLPZWiUFQRaXn1omy49b5DQRAHM1yMt5B",
  "key27": "2i1PbVXybfgr1Fv6f9wcUxjokWHgreqznsVkDVdzaEkD7FhfBr2epkqdfnCDn5gbfpCFxpYcFkkV4C8ecEiEL4Az",
  "key28": "3enGh9qYmQisdbtc8UsuVu4r7hFEp91JukXi4wQ4RtzmZAXXamyPbxbrfGsJPVySZpojPsTNjGFHiwW6SSAhtqpx",
  "key29": "4aj9JyLVFEgn8bx3nLBeGqcxFFxRK5NjRejWhgvUwN2eV5XTKnZ22Z4sMSwScztErikS564D1qn6pfHW3mZdnfch",
  "key30": "TrfvPV2QQ4R5xYV7jD9iMJYg3wJH5ZGF1SBgcGAzrHZaaWV3wKRoerHPBeuYGrD95YfJne5dsfKCSkukuymxpcG",
  "key31": "4MCjcdbAVkgtXijMiGhWmvbmZy5ujAw6eew4c2bZVx1pEKKPmTXJEf7yuhDztVLLfF6ChQYKgvMU69vJDPq4gf5g",
  "key32": "49zkuLKdhENaDZ5wsygTBHcLnX27rTuZ58hneFPzTeNDte4FdY4BhP42RXuYuN39tVJmPBekZNqibs3AZUU6Bon6",
  "key33": "626hwH5UMEkzSt3v8Kr3Gx7zkfCPdL4PgRYJYs797tFNuvpw3T7w3Hbn4M6GjNC66T67SU6itB39SU71BvDGSie7",
  "key34": "4VsCBM1Zxntib64YVSJS5LfYX9ei4JXiKP2R6LZj9EYCvYF1eNdZYzDccVbNFZZKrj6zmcwgUJAqtf7HqKpveLbW",
  "key35": "4EKM4r7CTRxF6vyghDFYYr7SQqjwgjujB8xWUKed7xZDATRLgRg1weycx3y3QT4BfkZJVyVcYSQ6uK6tGygbWCzC",
  "key36": "2S6XkfpKgSfwQLtutVcykNbT6Jr7oVsEVXkCGTJCfNYFzAp2esMig8A8sU6CcPwNK2gyCFofvAmhbgkVDoDzYfLi",
  "key37": "5uDC6CtQqvY7ZXycYMtztqP3cjJysfwtxDPQ7PoNg5MySwRiPPadJmJNnd1k3pU69uw8HvZKYrtN1sLx8maPR7EA",
  "key38": "2wa74nyxTCAqE6vzDnbeGobrEhqT7zSQA4zoyxLHnuo6gKYdrzCT44ULeVBgKsF8SYr8sBGh28WBoU3Z4QGaUTzJ",
  "key39": "5m41rqyPhouTF4LveXVWb2Uh9dUKS2LWR8BqGu7nPu4zD8jFrJHKcSwoQ3fR76BaRSrN86EoBRSBTfDVwuAXX1MG"
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
