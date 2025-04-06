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
    "4QufyMUH4Co1GN9FBokUsPEeCukj9CUb87S1BVwaZMM6cMmN7UWJrihd8DDSZgA1BVrUij5nNejNQmGLB4amNyEX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "QKHm3v1A3tFmd9nVKBTvuKQiU1k9oj4hNRKC3copDLnGMaxMsXfgGymhWV7sJPrGkAzasN8ES6XELFyae2jEugB",
  "key1": "3YToAm6mYGjx3Q4QgdVP7jYskPifJuQbHKGwYhgZkEnv3PeqYSVeuXz5ZBcyKsW2QnWc5UMdMbEDdgNsrS6HjUHy",
  "key2": "5pkQnFnUE5Nx7Hj3YTqHZjuEonLGwsP2qa2vQESaPnRk7LVMdmjtQoEvVFfz1FYdLbwBgaaRdfr7AmnnVrHCuiw",
  "key3": "h6e7DUe7ZiCRJjEcDdVhfM7VK2mzcp89vfgQ9oc7jDHT37K4nYgdxQ4BBhUNH3dwKmyCc7XHnr3cSB4w4sENmjh",
  "key4": "4b1LNQfV8QWzPeM6S8ytPhfUgB9AfGE7Uf9AL1ueH1VP8yQJyF24xwGevw34bXKCCEvSfKk8dAvV4b1YHRLM5ZaP",
  "key5": "5CniC9uLqg4FTLtqXWFL2JVhiDoLYf5zVCrteha4B4dEx9MdpLi99mKvXUHKCieZpAFf2EW834egBoyBcNorSnUE",
  "key6": "34CR6tGgodxGgC57u7fhaV1Uuc5XK2RJn8i4xA9dhoiZwpizzf1du853NxU9iNQZHXaHKga8a4YCTUX1wjUPszLZ",
  "key7": "3qcosLdETgFXWHDhHkRLM7X1xFbVPUJXuupCPdMp657qMnduFYr2LiLJF8kMuYMjgZEEbRZBgz3DhMVk6BbQpDDx",
  "key8": "dggx3dBTsP5R9FiRMCzQ7U9fhGkDygSA1n4E4ek8BXNsirzmBkBCRxFr4YF91Ug8167NPcMbYAbX4N3VrhJ7VKj",
  "key9": "3sf9ngzJkpadfmcDguCSJiPdBwT87LKGmw3yvftZpwuJP2yiBrZyoWnDKc3Vk2ZxvFTQkveeCCeZV8YPGoKDkuNq",
  "key10": "3FrobSFtuaV6foYXLzPYbbBPTbHsCts8ULyXRuEQt4sFcB88EWaFonpx9xDhh2favtC5V83fXt7rLCXLFXbKgM5p",
  "key11": "572XRKin91rHdLFtkPEgyVmNwFkpMFmNwVoZBMVyRP7RfqUXXfSVnpsnkn5YarZXhiFe7zEKKgBRsvNoDZoeULCT",
  "key12": "3wofhbvYjxdVydviN4SJnY6QfT4NBDC8bFuagwc3vTLckaUUh32wSW37huARMGX1BsSrLzhveqECQzZ8TXPYwS9q",
  "key13": "5iLirqzpx6xoFGDyQ2KTrrjkEoSw3onmTiZ2ntmKX7z65xeC3jdPXZUbmdyL2Fb6CjKDx3x6UPQ6oviTgew2YptJ",
  "key14": "2F2g8FBYMj12CcBNiFztQPxaKbvbnM1nuYwXhtAwYU3qHE1s6SckETjmYEKDWLvA9ptUuhGpXXzqUDK1MtaGsnaA",
  "key15": "doyCFHTF6NC4jJaV5Gzc99QVk6LctZs6Jz7jwdpDcLnWouMDTcHctcrHSTzD5QTnuA2ASAWRt7Heqjb5Uhb1sJy",
  "key16": "5PTsksNUXeGmX5uvsme5FC3JkP2Df6Q4DdyDfhcApiz3bxchE5T4qsYXJ6mdSzTBuQoSCqhHnt82tKjLBjfFkU78",
  "key17": "FpVULdqgnkbqnAj8pDkYExQx6bCwt5Se1qz38vvmV3g2fNx4MRueo2Sg5X32ndxz9ypbASfbwMAivaXqDsPWJwJ",
  "key18": "3FPSj75znx8LYCDTzZXXFKRrt5He1NkctixoLzvdQRycRZk1nYUgyH9mKg9FgTpVmtFKJT8RKM2yJdCtJVi17dhc",
  "key19": "KcM8FuSdz6mFfyJAHUVdJ1qmxaGnWCN2dfBtGtMFgLTkRLoUH4zMw4N9WuAmS86RDHxMeXGMv2ndbDv4gqtZDoY",
  "key20": "dZs8GHfP51xp1gtHS16SjvguRCipLb27EWVV1rqk5xCJH1wLt8dhfLG3UUHoKg4QGAaRar9YgZXJVp4nSi9oSrV",
  "key21": "5NhdP1anfxgwYpDmEvGLz5H59MpT9D4EK3BvVh9cLiLGJkn1Z9XaiGfD3XqRpojwRebLdSwpt3HoeUo4kuYtmnQp",
  "key22": "37fKtnSf8QYY6hQD3JHnysdEQojVNhGFqpeKtiRs69admWZof3GbSb2qMzyn7mq9ARqX9HDcg73ybWtxNqevD1zX",
  "key23": "2jxmTeRuTjoLPaHhbo2hegwNEUH1gfjqzR3NvXUZ1cQQzRr7i4JY36yRyXwZP58zN2pEg7mzPqE84p5m5SWeKeTf",
  "key24": "5jXkgL4HkitXJuUXYDw49fqrcNXF11YBhpxtRC7aQZJnWkKUC8GNSjpDLZgAArg3jfocrP6ZMJwPNj2eizjoyZRS",
  "key25": "3SNL8wiFQmvpy4XFLB5WBGjshJmUX1rYrimtDmG2kjSxWick8HEWDjVf14VPjmkERtJhQhdBszhz1T1EBb43puk1",
  "key26": "4yDpbT4Ue3eUR8ePnTA5MKnD8Ckk7Jr2Ubm1EKAuLpQ76RKhjpvri6osoVWvMFh5Qq6M5Y75MQ2ZkawdVY6KiJVE",
  "key27": "5qxLpzLDqoDVcix1fhjaQMZT1Jmwr7cTuyqwc3fCsafDekpRCzyvBQzGxtpnfeNHSkmx3T9a4YgLGoBySuNF29fQ",
  "key28": "4BvyeEJfDb75Hz2Lc4VEqLXzf3oLcVprzA8WNYtojeaK4dpY9qRAJVHkWmpCx9VeB2tJy8iNfEjf1QSZb5MPdpLk",
  "key29": "2jCyn6jUKN2NzAxtjDFKceRX22CMFzLyxt1gR7h8CLWym19enos3oQkNKeDAuXKC2THdY5Vj984JTgiKr3gUgW6t",
  "key30": "3V1CR5xkMoeNx9EpY2V4ty8jgUWAbynAAhpjNWRZeLeYf9U2GswVwpdWeRtZ7ddfeN77d4YJrB2WKWQVkT5KbytY",
  "key31": "5C3V1DThVKj46D1HAi7xmJ97z7H31v3zF9UqzD3FaGqnHmHKiEZNZpnFmtHGG6rjNR4FJR3shSunthWKvPzVxPe",
  "key32": "5CvAPTn3oVDc9uZziRyGS98gpNbGAVeJv8U54spSwuPNfLHp9DrYT3eir3acJ894FQPsUKNdZ68VAPKuKHJkewVA",
  "key33": "39egdNoPj7Ga68m3qkriCZC1R4bJWFYdzqjgi9FLGLtdQk6EEB9QyWXDa53Bt4xfwL9D5fq91uBkmjrGaSUaS7ic",
  "key34": "5xkfZE6hptR2HoJTbL7EmLGfnfLn2AM9PTUUfxKbhVZTbrEXB3xL4RB53mzNcn7gCxdT5xAUrv88s6MvWUxqBThb",
  "key35": "5pm2YJtew3dpgd1Uu5tpcw4woipSA4e6yAKzVYpAnV9HRx55eHA6CZVq8TGYEXbeZVcPookjSfFqa5DPu6kfJTT3",
  "key36": "3o8iWGyJ39jyCT27GjJX23zXnPpwTU75EHkYbDzCV7iiTnyvYX4nafMNtugZNLw4mNbgWekj7UzzMQpVdEfNHvSs",
  "key37": "5fxiWtFEFKxShHmscnwuBcDDe86H3YrFHDRFyt6jMWXnt6KFJBngjdaxdDg7yoUBeVQAdbGqfUeUx7te3GNVbBPE",
  "key38": "3wKZaWjQQYn9v6zgUUFwK6ybgwh5fNjY5xNxNje1FzYMziJ582Q3gHap9tUc9LvgBoX87QtYk814YRzii7ojvf6m",
  "key39": "4mHFMDFtY9yLZzzqMw6hkbJZFx8KhBURSBbTgm8b1hAPNCHZeoWb4Mi4XJyFtZFzC85YwNrNpxheugtCSmreyVZf",
  "key40": "tamGT58KxkG7gbxPeXd3Kft41xoVVeckkYPEbHR9ZUVf4qYzPQd28RHskWbqyqjBSj6fA3otmh68Ls7da3SHDnA",
  "key41": "2QB4gdSFWBqBMkaRWuJRF8hHWkkgFnHwUL7sgfnmfEbCzDqcx2oR6avdq7HbZwFwf8Ns7wXsAqSeeVsCnJHmNrF7",
  "key42": "5gCoZHG45UaJS2xFhNemWX8UJexAmjCh6A7idbhW9H7q9Aj4VznPsW9RQrhjSSHptHLfrP5ZE23VmBJYcgs9s9Jp",
  "key43": "5kdSbLa65kcpSKa1K1GamgWWGxxhGRWups38txgEGCrij1B5Hm41Gsq19Fs4tjc6vVzgQ43QWUQ1pefdZXAYkbeF",
  "key44": "4hH3DSYn4vw6xbWMmErJPmfKmioadtLZrSoCsUHfUvTkVd7qTVcN7dGbGFZVf913hsX3sSPJMcQKak4m1AZQPcLP",
  "key45": "4tiLnHre9K1dQdpqSK7Gz1Mct5Tr2pNJWShARvSefuX2JbQKnETL3FZLXedBFrMXYR9B9M7W1LH7agVRbAmbL1o8",
  "key46": "5WUXEv5FjVHJiwXiyPVULJhYQSxEUGb2qKRUrhCrLNeviyxgkrb82cREvyA3cyvgPFp1hJR9N5v3QvarpL5gtFZC"
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
