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
    "JwNmAgHQLsWz7fjtrQUvUZyFY1dephNPLBrnf7N3qKNYrRTd2UhsxonC6RYV3bJNx3nSUwDYxDwGJ8wkvrp2tTs"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2WABrBgJb6nxTesRWSnmBGpHpGVyjXEQ41YoxdpNP48vaeo6hDkQUVatQQLUhiped9LGTQQgCSevTvMYtQxGDBYu",
  "key1": "3Ra6k8VUf8su73haTh14QEJxPKd1CjJpyFzamSv26dKXjAN2Y9khBXg7kp87MNxYrb3uhVokGEVuq2Vy4mUXk9tx",
  "key2": "3gbz44ntaB8QwtrUUdev211HZibFEUpBgfsbic9tYbj5P6DQxCG45hmveSLJtzzsQfPPwhG6KdKgXy6JQQChU3W5",
  "key3": "2A9LHwBADEjBUe3fX7gUXS8vLVTnZSJjSyG9DQSR4nSvScjHXVbkErAEa8MY34Se4yK3bMndWoAFUxUHhozt1TCQ",
  "key4": "SEF74N47HtTgN6H18EGVGYuy2AzGv4vWAX8tuv2818daZF7FYCpNPKFhBr1o6Dj3uvZLs5yJUjaPb5r4A4U3A1q",
  "key5": "3KwzS5KzRMzkVRykzyRxUPLQu8YU697VAiC6ndutWoob9TDzovogSnCC6tYMPW3xy1gMTLVhGr7qRDGc83xFSrfe",
  "key6": "5oJs4tFSyg9CEW5Ygr989M1fCdGuT58faZ5n9AviX8bMAQ5Mx6mVyaPt37aSBa35n6qc1Zu5VK3cTrg1gF82J3xf",
  "key7": "4TqXGLRkoWkdncFkRWwB16sYrAzHsijymBjJm8NeT8EwU9mJB5ZkP1AVLLsN4Xwp46jCGjLeYJ8aC3VxHRM5UaKX",
  "key8": "3pfZGXzeVx6DwwRFCzGy2QizfBeBeXw1DGLQ9S1z6Xma6TJgcBapbgj2rydTbpqYBbPx3P3HQULkgAB9zEMJsPqv",
  "key9": "4E4xfcJ5mebtdzgP8hC7XPd8QuqwYF8JE3abQXZomMnQtgjSge4CAZoguKJ23RST8jM8pdG79ukdMSjtdKEkFPGG",
  "key10": "58izAkpdAP6L3QbGnTw5sYuarPCc2ZmaowsH3tSDvQowkGXeEDsoFc3cQPPbhxq7CYqCSByDoZgamUKXyYPLAz7a",
  "key11": "4yKnqosQ4Jcw9QBCWyEJKysGDNEN65jaFqvxGWbc4PoqEywYaQMimK1ntZmq2TSdcx5zZJ6FDpd1vtbCFPeDrz6m",
  "key12": "4arY6bF8vpinZPCNzmvhs8k3UueTLyfeHSnNm2Jfppr9DPK9SJrgSFiUwqXGSU4D9SYFmRowN7vvBKEqL7qQLT73",
  "key13": "2XUqVi211KfRBzBuwJPyaRVRNYddsCKSA1v6z25LEroC4zJvau882LXnFoynFWpiGKoHVEiK3CqV6g1KJkmjWSrK",
  "key14": "2N2J1M6HQHm1MbCpmagsY7iCZKMLGrBU3H36s31zwfVkSxMd6wzs4uLoJpcGFmZbHkTfN3mJ1X17oNuGSAybwSLy",
  "key15": "FPppAJmML2ZeDmgzzgKAcGRN98Hw7cYHcKhaW45Km7SP2J68GTN93d6Mja42Gf3tNK8TSy9YXWPJVYxAcYoEKAq",
  "key16": "3R5MbHCagJb8p8QqeiSgdmf9L6ftxE2QeDdQ2r53WuQMBvvXGBbYRhGFXhJKYhsrruKXdZPgZKfJrfieYyRwHqrH",
  "key17": "4xbp9gRKzxCAgGbQJUtWhVj3EYED2hXwKzooXwvr8MFJz7pUpGLTU2wHTUqtuhgKNXAWMKqbPoTtPEBALDw2vtFK",
  "key18": "3tw82m85rWCapxMoECHGQTJ1Tj5JbJBBL1dM67mPCTcZFDn4fxohxous5LY5YgghHzU7SPaJJSDeiCB3UxJ8Q8gR",
  "key19": "57ZrU2qKkGQSTRwjNxRpd8K3DFcv5XbJv53BF2SDBPKs7jKaBsnAN1zGyK9BLTwURfLaGCUnkLXRtQiFQXA1vf56",
  "key20": "5yQDbSY6VZStoow9PFMZiy6rXHM4ubev1qQxZ5w9MCjqwTYiF9dyacC9SfZ4cqwgqxdCHVJDPjnykFRZSTbXp9BV",
  "key21": "x4Kkkn5DMx27RuWtxoApMUsDgHMWdm4yaMtGiE9ZtTsH3AaY2rYHRndVf7yf5FLLx932F5zMMZCfTizRwmUYgdK",
  "key22": "5SYsCcveXEGSbeft25SXX8vsqVzyuV8Mm5Q8677JgiBSRduYdvXRB3JMQJjJNXBMKf9vv8sHwKieTxZzxTLP95Vy",
  "key23": "5poQMaEoqf3nVmtMYfTxvV8EpPW9UrW8LjeKK8hM9Q6cXUUNNrsFpajKWGx5vmwjdpkFfMShSmgSoqsWZTcprQFu",
  "key24": "wcTEsQL4bCbrTRg5SAFBR8VFGvy9mo3xtysTeL8UAAL22RwQRbhvyPYnzLuhkLMqK2roiDKjLk42WuDTN2MmJT3",
  "key25": "5HrxTTVNA1J8MtvTqYvDz4dKdczjP2gbn21bmw8eThzNhnCqs4qUi8nnmAcEGJ47BgRvJR5Xgip9FL6ZYqu6ThZZ",
  "key26": "pTF5unwUAhLBYd6m1YANMbtueyxFCKxKgxP5zDeSp1gzeeXpyqgZUj6T4Rx9ZGxzHLGePK88tvuaznUAdthGWLH",
  "key27": "3p1k3vEpdjfTgmsYgApWfc8R9Z5xHk2HVewRJz61DqgLcWBySPC9H7Q4wNLpXVN2J5stSM519vnydb7x2XGntjNq",
  "key28": "fpKcTptwu5dmAR7qjqcxkmTq1taycmJyFJeUVCgJh67CWCeqt8BdFUgd7wnA76wGuT11UUzUeqisgnzybL9bm3s",
  "key29": "47HMFPBEZKUcSTbeP6Sx9M5SZnY6QCRjHUhzkAoZzP3jvzmYymhPjnKPYM8rgQvUxqxwbnfsgcfc6d4A6iQsXKpU",
  "key30": "YRSqVJo18t7P6eAebpaiJpwVyHe5gcLSYRvRZCUPsr9kyJqahygCuTybyEQo3KoUagS9xsfgqkq3kj7FiQaDJug",
  "key31": "4TtRPFESouBPqZGpx4TfPuQt3rpFABQfvLCBaRLXCb395U9gw8TuHesTje5XEtmmJ3RbvJwq8ttUka4T5F4womXx",
  "key32": "3ayPamShbJ71UWDrbawoyWJzz6uKbew4rRYV7fMFQQhVYk2qPt24AbNKshB7FKjPpxLaGz3ZxqXi9XMhBDUHXb9i",
  "key33": "NSt6A33UV39EnP2G1GaXiFARPPkA528z8h9bs9atGYQKEFGrjjFfSdncWzBsHhq6T7ut9DtigK4CgMAudstiYG6",
  "key34": "52quuxvDbhvstWkhAPxHDJmqQc2MKG4gExNHQNJevAMTfWwdbH6xTGi82HdXnLbTLKAKBzMxne56cNc9nWg4ybPF",
  "key35": "4EJksbRsx9PZmjLKEntapass5RqS3DHNZCtAn3LJeNRFLGpsJ2guTVGSxKNLVcpUbAWaV3jqwWgKE3QapqFLRERN",
  "key36": "3LA4sZTaCvVqRgqMx7LphH8qm9TNVmtWk9bPJnHNd3W3HKkZw1cAXmCfQeuVjHZ7MgQ8g7zQxy9BQH3evRy5GRpG",
  "key37": "25kprcmH6JTWTamQDCYdSZUksG5HaUzpeTLQ1Z52sDMSiUqqxcba3SMS9Tw44fZyCdcNHXLE3N9EKQ7kaBp2BWuj",
  "key38": "NLiZukHpvuosWA2MYHR2EB9B9hMsUZmdBGUcKbGkjFwsdciGjrVAJ18pzVY1nNajvFzoz6GiNh9MaJqQivTAVQf",
  "key39": "3srtn7mYUA2a6fnXrTAQ6Z1QPf8mUbRcEYTCvXdjWtNFjKa7UP9mboxHtrj7RnvYz58fQb9Fiiccj2xMX9GHnRjb",
  "key40": "3BUHLS5wRygXM8wBJavfKMQhQhLNSP1oJn5r8rA3PpK6JEMVDwxAFFG8nVhL2nmkrTexgmZH16XBJNgJ57efnp3Y",
  "key41": "5ovrwDpg5mg6WHejetwbVRfzLGWqty9PL9PM8pZREaPtNJ7jCzCwpuSqcjbdZ9qP3Lpm9Xiyjj54dkoZR9zfzDG7"
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
