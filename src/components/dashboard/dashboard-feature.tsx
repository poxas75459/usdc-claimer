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
    "33S5i3ngqckvGz4UKxsNp2cnQoVEtAnbvRzvtTJjYnrwB8QzSwNbYQNAfmk98YGGcaZB1r5XGwcxjxumY7zHayiu"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61eav6VRgB9Bo1QqAKwtMRmN4qTjgmJm92RxoGyJs2W2SUZ5QQ3nB4aKoutLzakKpQoj42kx7N8qRcwxrjzzzxrG",
  "key1": "3iarPs7brzVFf5ZdqEfWENooSan53HuH1yMDxEz7adGgwk1mL8FpzCU5qRgxPKPb5vw1a7gvo1f6L2So8fFTy3sg",
  "key2": "29qR6cXHNurK4QL9bhC4NcmnQayKN2umb3L634ezkYYJ2dJX72KT9qcLGMiGsGeHrk7kEsMxfXsf8zirRBS6sBrB",
  "key3": "51UUonQnAbuaZG9uYCwYs3TLuuttFmUwmfZVaq76rXFu2QwxzraoB7WBG9EZ9H18DygCJGRBemuJBn1fof3EpJcA",
  "key4": "4d8fHEHupcCon8EcE69pDLp4CvduKgSLmBNKEGVxxHRSuCvxyfV7JPVEydGk2MH5sqcSt3RAGA9q25wudD4daety",
  "key5": "2aBgUPBNtALcamUbRbcB4o5phC3aSTWEkiw4TW1Ywf9VBe7ogH1yhdm9dbZG8iDz4wib6v33hvvJgro9ejYdtAVk",
  "key6": "2Y6t2mw5xnYhoviEnV4KZ2TajmiSiVcX9XZhKeBx1T2mbAfysAEqXArVt1YkDqoe9TGzkfdE3rDG11vMqmF62VnX",
  "key7": "28UM4J1pcnZ48zBLVhvJfmQ8wgKd5FbCiA36mL951Npp6j8BBQnqx3pCLFHAhTZgwkTd1XCgSM8KGw4tqiJ2e2dX",
  "key8": "32XMzYtJspotUrX1qZZtgEXx5ATofSPtnGqcXG6qMHev23esse9EK8UemgxCQw1m4moEam1nkz7SceXkG2Bx93oD",
  "key9": "PjghvJdhZHYQ3dUiq7ECP3qDb6wKtEt2sF9atfb8sxPCZnfJN8N9XaaAqmTT7aYNPwRmL8P4EivBtVXqvm1CQ7m",
  "key10": "59ZcLqvyPNCx6fpgUPmruhLzLHpw46xcPtNiBMjtVBR4QBC5ymF4iBFuSexTRT9gM1VzNrDbnaAbXZrAkVCtKHoG",
  "key11": "QRecnhAyhhegGPeRoKfKYZUvK2NKJJyx8rHXvTw73sDmeDvPm8YoXCAv9C796pcGfdeP5Q873d6ge2hzWyh8ptc",
  "key12": "wdRdp8Ys37qF5SMsBuR5vKnttqrBmZet3aFq6H8fw7U2Y65332T89rYCLa49iw29JFDTeNyWm9NH3Xx4h2nWxeH",
  "key13": "4M8NadJ3Fe9JVdEnfKBpT3zNN57TGS5Lu76aefESfg5vq6XoyH96hd52tN3PHpZZAFZ8dq5FoQ3jupbYu2JxJTpN",
  "key14": "5WVEhD5sQLTeugGSkA1F5W2MG2KXrPjR5LhcnKEuw2WgPkisozTaEEUpNei3zUydCpB3qQMrpPvhDbHzBqo2SKGw",
  "key15": "2s57ccjxVeaw4SF7wfdn8v5L1FGcXggXXrYBpKjfCioJiD9VGywScK8xPqJo8JW8kNKgPcS8Njs42czUpQvqU8g5",
  "key16": "BoaWsv4FYrLSvgqJaeYzdegbaHVREEHM8ycPofY2NBUpGKMpnviEfY9H3tWYX2XHHknJLwNpJpz1dn3Fed3WKR2",
  "key17": "jofNcQF9VhpsWWJxdnQ2KzResSgaMfiUdLkcwf3YTQnwXTkwoPFn8LQFVNKztQt6ujNXDcApuAavjwjPSVWTavf",
  "key18": "5yDBdGfSQD8MV4VbnXXybr3kgxt6igWGiy6HvN1UgVjE3bX7yxQZVLMnaT3XmdxwvD54y4Lqaj8EVprM3ZPHj1Vj",
  "key19": "42nngLvgviRJ2EoE9p57Wj7KyDyZmcu5trGsUjJfKofwEbrSepVWVKzyU4qY3Py58mrkYv2hzc4GxNq3VEiUaspB",
  "key20": "4yeJgTuPNHXUBEUrDsft1BzUQGMcJ2fkj7z9rTDauJ6LSvxEBwuBQ2ZCS65tMPaVPPFZEHoU6EgZX66zod5ZqxiM",
  "key21": "3CKwq93hAW1TKTph2jXd35cbWuSHQB3ia8VqmqhRCCWMxdkt3DzkrwJ6nuEjikvmMwhj1C3qk3yLLQbTzrv9rVLg",
  "key22": "4ExT9aqwoBZqrp68BSqzi8sVTT9iNUqvgTipEzBEVpR7V7JHkQ7L4LMys5cd4oBTSW8dkSQ5mGj1ReLgLr7w5ueG",
  "key23": "3gAS59gBVBNz6JYRVJWKLQvToutxeWZsfBh4znYn1xSU8y7d4kekm518PLd6ryN2YvKXxwyyg95V9AuuURoYoFT7",
  "key24": "5vBmfWvKi417es9L33PyCT4zwxLrmqjkUasPhRmQkm1cqCYMe6v2BfhEHQfN9EF4sHXKvnz1CSZUzncFuLFQPWWn",
  "key25": "674gkrneWs5ceGCiRF5ZjFgYBspkaiRrNtabLZkCTNooMuChu14Js9MoFCPzAo6LeurZbGLxfZHUaKd7fQxXVKe7",
  "key26": "3Yx7kZK1ExL7LtcUcB42WpKkPxgZakcsZL1TtQsWj6yiXPKi15VF8jTmop98JnVnbem6yHEzQWSCxsrUTBKf3ASk"
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
