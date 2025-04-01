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
    "3adWsGGW9FM3qjYpdzeHyxJ2a7PxNCsj8PJCLueGUPcu8nxukZQbiQ5diEQQh1pj1Nw2F3oJkzHDHhyGC6F87cE7"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "593vrqFYciK6QRBEkwfv3DUxwQoKs7TxDQCsf2PY8jEYUAkp42PZFkQUqeNzc9fvxeCAsuG3KRfKm5auMx7qaRSw",
  "key1": "47WzQxjZb8YocTmJi1uAAtXPhsAhFx3bgoGCVtHgq8QspWTaFE2nVKJXbT2yVMc2vqVhSbxPFm7u8etEadMqJwc9",
  "key2": "3Laor8vFEVniP7rVdXhMCUPnRDUMt1BvxJLSEKX8Jbp2RNVTWFBvnKHjkhXGcGKWpgbTBzetAmker5zSik62RpBy",
  "key3": "4JBX1oEztEq6c98V7nQ4LqHswYfTcJuGsBN5ZajLH6KX8obk3mhAZ819DWBJ8VGXiUcnnLbqTCQcbzHBRzEtgTR7",
  "key4": "3j56G7xSg6LqjaizVMFRpj7XHiTCmM74mpK44F3apiALxPzSo3Q2duiAkhtr1eUdsJdLYTwsE5otpKyaMrWBCmDF",
  "key5": "3oMrMJkiZCGomBAAoNci4x3ZCAnJ1X8KeSeFTDcjnGy146cxo8T5K8Bi3zkHn44uVaaJ4FV2vyFSrQiEdFJPRmAx",
  "key6": "2A9D5NVpapBx6Thn3rDNjQZW1tFU6XmFv9tFP7m99wX2XRAqr87Mi776QBQzxgS2MQ2pVXiE5pftDRReMZenQArp",
  "key7": "5CJHxynfu5BvMHAH6AVNoGhxSjqZvRsM6iGMJefeKkR5KTypxmhi4AC4NwaQx3SmYHdb7SAQJvP11j91VaBdx44r",
  "key8": "546E8bYAYzP8y1rPQ6rHMipEqhqQP23tswVh7PJMxBzQemgHBt6JjKn1Kq1E6SvfDcACu7oAjCFBsuNzbhF2Vpac",
  "key9": "2bxDgBCPPWz8J7vk7tzRJVCyvUcG1fwf45VQ9DDReHRFQS5Gh74CsCnSEHUr2RgYsuUvgagMTbxxUbQZ1jRZGui",
  "key10": "UmN1XjzdoGvnhGpNbEWfbMmxmdQT7s4G5YnjdUKd6f5X3DzZ3USPsUgYWKpydPGcXgtRPXRNHRYqWMaBV3FThwg",
  "key11": "LPC14X4XmCKEBwWQ1mucvXtHoVSMX66dUyyT5HBpck5icGpYHmNPkpsFvLf2AbQUQkec3xR3kDCPt9k3nTy3ayK",
  "key12": "5aAb2PEUVk1VWG8MCigFYZutmQtQGEpHFE2FcQPj9d62G7NrAp6p7FBBjGThpJjdpaehxxJGkyJMd859nnr8vzwG",
  "key13": "5FSAyWiH8CgVk2oUsgTJuZ9AdT7AusKZXNyE7rD267Y8kJBebDa9qCos4xDXFiY2XWGj1fsLwAPMdqE5KeSLv98y",
  "key14": "3nv3NYVgK6Xki64QRiqArJSFL7kuvM6Jq6hW2apLghTvM22gWqneoiLe1eZqSjvjiVNCgQd8Re4dzzLFonCyhffM",
  "key15": "5DTyXoGHA3dg8rKTJd3w93WHtTz6bozTQBHwMp3GABJCnvpiHfUxSXsCHSxJzCfiAGaRqvpACj2HRQVwkhuDqKbK",
  "key16": "2PweoeGmG9HVQdoxjv9qf3FdTHd9FaCaFZyPEYmGJCsBGpSmw1Vn7rHhZHGrENhLRPpXcmP6Em1BKsPwnfW1yME3",
  "key17": "4eNzviRBryvx9guBFxn1U8KegN8oLCAKrMMJVRXCPSguJCyhomVLo65vgJMG9ypoAnDyD7XTXWUKRtQbSSNH7gpm",
  "key18": "VrNhKjPuGdTJA6eVg6Tyq9oLEM7ago88Lp3roQ4VdUPKLvco3mN17PSNZYrQC76R7Zb9Cz7QbUSqXcHgT8NiFHH",
  "key19": "5Dvz27uwnqT9iyVJQHx4kaANE1jaEwb9V9YUWCEpYpgXb2iYscwXr2Ld6UDJYSKNRqg7BxdfGFCuiww8PcAQDeZa",
  "key20": "3REyBcAYQZTM81fgf56aKLiMfqFAvJK1i9CECYEzcFLy5W5CBLm3JtjWEL1ivSeUkYhzpz51AnTqqpaJqNsABLjZ",
  "key21": "4DjcMqqUYrHobe2XVfaaCTYAbndXN9pfHQCu3juwgnTiC7mEFtT9VCwxyre69cHbkGat3LTLgJ1bKVJVzZ4eoLdR",
  "key22": "4XRnk7NLAh8oVGcs6CM87vviHQiZXnZyPonPL5EzQsRXu1a271xU3yvFDK2ze2nafvUCSVuxmDBeH7zTBmyzcap1",
  "key23": "46pkhafX3E6gWFCdW6M9Mn7Sazd26ywQkdyQFPSDzLGzirZmsVX4QUFqwBPg7HShfQ8s9QyE8K2hp1nzHvTU981K",
  "key24": "46YLzwQuFFK49f9KkuGTTzwZjZvDCSqdNkMYS42budNCYUwtPbkJ8pUPXtcPbwGE8tsE2ishwkWYNidTnzDetBR8",
  "key25": "54oAohzXcWSTTybXhB3D8wxS59d7iUarv2c6ZbN8qf7HonASJVnyo3AAxkdWoxjYYS5H8L8n8qV634TJyRvkZ48B",
  "key26": "5LgEW6uc72CwV69ZGLvJ5nWSFhUujGJWGY5ZxAj6GwQPcxWcgixaBNdvWp5XSC3rMpoa6u1p7QDH1jPfL6zAFi8Q",
  "key27": "2RWtriTYiCoq4NSVZj4DmiybDEiy3LzsrqdPNLrEZEruWZVVCdY4WCnToNinNDAbHGmGQ2mMQtSwCrRQKRTswcVS",
  "key28": "3nPtDpgYWr2FGR36ujJPRb16W8nvvhh8wBKVtpTef5KyxKqrVb1pdW9sWNj1gU9xTDctDxULoXsPHSY1bnuuLr3U",
  "key29": "i9RroFVra3CrTeUoCAGide5kVjjZy29XEb5HWLntCFkpCQ51p9rTWqWdQzKHEKLQb1E84BWfh28bnvjFEsprQTG",
  "key30": "2FXttqjwpJDWFwcvvcxZW14PQ1vBSbbJSwaTqbSBpDXRqE8Rzvi8EMgqvsbeRBBwmXNb5xemN5XSSmRNXg8ibAXm",
  "key31": "2Lf61iTBg7B1reLwi9BnmByDS2XgPsvWro3QzmNPZKGREcEmr5bUAoGqgEQ7JQXFEH4tLSWYNmtQX1D9QHSpGt9Z",
  "key32": "3SvCNeW97v4dJmMwzD6BAHj2RGxnjGpWbxkUtDovXVSFiJK7755LaRrbht6KfnX1tWuEpUu5EBsqaxMUBDX7KcpC",
  "key33": "2Fw9UB6FhnTupmmYCFDxzdZcgGhPWxv4AsEw9GR6sthJhmBq8Lyn5aZZKkDEAwkdsBbwykrucGE9w8rzsh5YbYBw",
  "key34": "4UvZQ78QWFZK2tMcabKE7nBHC4Bk61eMrBbx56nPoF73NurFz6NWacMa33D122ZGnfs9ZLEERCdhPXJh256FGh2A",
  "key35": "2eH9Lj66hTPhW3hmEikv661swQ1Z954DjyqPVtWTL9Jg7F9pxdEfnxHjRvoEeEgF5uvcDmZBRKqt2ZGMHPhHCVJL",
  "key36": "2VKkCxXqtcUtQ8AKVfekcaLW7zkkP4Eu1FQRpgcHSZ7myZcotHywy5F7xaJ4Ye8tUdp3zH1AYmkuq29B2iU6iER4",
  "key37": "5t7amRH8UYEoeiMJuvecP8HMFAZYNJsDSv3AZdP23DxUcpBVutbCw5epPhoMkoXGkD2h6brrQKY7S4H4uf9Npk5a",
  "key38": "2woFexDvwPu3bKynC19cftTL9dHyREqfpemYLPg8cWHfV377e9YG8beDbzTwc1YW23fsa1sndTSprT5SUV7uRrQ3",
  "key39": "q9hvg1jvSwWLuE4dj6NmQijwTKYvNMmpUXDiYARi8qeepwigTVDcjvJK6k7DSt6dZ1doDwUyBi7DbVQs8NozGsw",
  "key40": "5RfMm88XToF81z81ikLeUqwa1jYA7QUwp3moJaRys29L3Dy1pbRcZdkNhi2xL9BjmSQ2upiiXo7vg7EKemAaHFYj",
  "key41": "mpTuZLHAVobw4uy9zsfnVHyL45uEQrJN8SySkj5dVfLjLeXpFDUkZswX7rU4SfSRSBQvaRM4hoxrF9uU88iVPsh",
  "key42": "537m943ZofqaQVTdf6SAtAQS4zK28ye9t2gRnamKNqvCMQ7JxMUfyYwwM8w5Y1dR9DfiVQVsFSWs6idtmFLXyueW"
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
