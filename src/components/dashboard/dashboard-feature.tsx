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
    "5ubos54n713LKLuEjdnL4Yy7vRv9imVxZ8e1vCuZDhqokvbjh8JmqbtKAanxzZnw16NMYTmkmEUR5TWXiYSQajcy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3jXViW6gTqdW3QtrHZRnPVowr8doypDPzdUtLz1xzfS6xaKRqtL8hmKF6fBk4AcMSBeJrHDDH2SyQLe9cS9NTHeV",
  "key1": "3p1U518Ky1tduiEJY4ko5zEyQPHGzERTMpRnoM2mPy8xwpu33cUcjs8oug8XGw1kWebaHkuqmbGMMcr4jHMFxroq",
  "key2": "4sEaAZzHyFT91h7otTpA9qLQyFcpQzSbbrQxE1AB6KwB4vhi2JudauZ9QbPirAGSDxaKAQw2Z8qZQ3Mfw5266j1G",
  "key3": "8g2pDGbFhxH1Ef6bN2P2ALvrHz3A8HyEs9ivGmZ5UUaHHtRvWMFz7gAWzdoDry25uZ6FGAWkkvzxUU2nGnW3aNN",
  "key4": "5E81LPimkZf5mVAQKRWDP3VNPEZyH1md6X9Sif2onKMQVLQdVkTfDrHBDdWXVBh69xBo1S1bJnaSS97En7atmJmQ",
  "key5": "5ApdXBmTPMdpcbV9KRVUFLTWnCsSJZKgXhhavD44Rr2WtquAnrFDH2qocJFAjU8DUyCtmCuMSkQViVJyThQXWe8F",
  "key6": "DdDE5FgoUEuimzj8cQPJjMLVc5VERkfx5hLyhe4TqLTzT8uhu13F34VPBRReVrbw2GeJthqtgtWmJmhJTvhhFw2",
  "key7": "3k7izWYZfD1vMsSWTK4KBof1n7AphPqjGHtZo4s14ZrgcH4WZEdVBjwySSSWdsqq7zBymQGCH74CNBGA1Raz29PD",
  "key8": "4F7ttANC5Aqyw6gM1J2dCcoQkmeFjM2eQSEDPgYG4YrU11C7F8HsnioSXHh33hvFKeYW493AFunR76QoqtTZ2YpX",
  "key9": "2CknpXfTbWnD2mosV2c5nvjsUarwsSVe5tTR3cnFFgW8AHmHPSPYaMi8mfX8Nt9ghXZXUNKoTjGUe3rvEMqC6W2U",
  "key10": "4UhH56uejUJYtMaZa9mwBsBAtxkCshnAQjsXsWsFLr3yGE7HyMyqGx1dq15qf2L4LeqMiWr2t2FCiZULsmbRFzyf",
  "key11": "3UJcEjSCek8PUBbiVWTz8Dazjir2zpw52ZMUEGFvTAgJGGL113yUuv9Qmvvk34MLrLP9Pb5jU4xkQnNLRFmYpE2K",
  "key12": "3rtc8nz4QDmuBik233MRJmzGL4ApiNQUuAmweri82syxSe4nQeWHCxM9qFsL5HBva5CxCvKovbDaUwuVwG3DPcUq",
  "key13": "4Jf2nVgeXuq5AMc3zGEkpBXCageXhw83o34SDnf1D3un7nCi53VFYN8TesaRWqULyY7NtrD2ymrJPaQzgqy8GNUR",
  "key14": "2Y88TzuVBvWaD9nhh9hWQtsaPvCBGssZQHEA9AQZDHaiXMTpGu9fQ6uEc97xEkKwtDLFFtLvYAhkuTkWpsqA6pW3",
  "key15": "5M35edDYtyAHbdTYxFMUgGB8GABcEocXDPtZnNJ29c5SdvGsSk938pBgN7geUoG9K6QMeayqivqaAMo2Ep3GdXje",
  "key16": "2jnW3TTcytfDzrHSAMJaxXauuZqt6ZhdKD78gc2j7tMf1rUjxbSKQDTjkzqi13wtBCYcQMEdiR1Fz76wKqT1Fo7K",
  "key17": "5KWYpsgRUfebhmiYRZGX1GjcvYGqyj7rCPMBSQKkumdQDWL2Mucbe6MwvrNeWwEFL1AyQMK3pJMZeRGbbagtHHzj",
  "key18": "2Y8K3RjzpYn8PGUbL1joSSwRTyFu1dXB1fdd6zxg7At4YxaXWuLZi7G2RZyyv89uVk5YuPfgGU3v414WEAPXj3WB",
  "key19": "hgbarMNvh6y2cUaMzi4gajxqiPiC33ZYFccvqZmcqYVqX1yZDr1reoV2W5cVVNSLhM1QmiaV7uwnm6LJcgSpZWf",
  "key20": "348kgRfkGPHtfYNV1Vtt735XRgrajVzZxvArBPP6GBS4ApZogaeoeH3LJnVaq6TQf8UcoCXJENbsr47edpGg81DX",
  "key21": "pN2CdTo83HhZ1HaKh8wEeC181WFm3wvx5TtgA9s3N2L26jz1bDaeD5cZmi3eyjz3TChko512E78m97uer1sjebd",
  "key22": "uZeXegWvrt7okra9TfSS5gihzdkXy4mbh4Txz8TAdaML2rmki2DpgYimtLqoMwoyZLqcGzzouMEe4n8Bm8Nrgr2",
  "key23": "5Wgosd4pGgMjEL5bprNYATeGNwsSgnJXHRA3GFEZcUWcd7XNXBuagVQyxjmRT6P3tqRTcSY3aKu8JiZvQitYHwEu",
  "key24": "4S8ZAXAc1fMwMM5uWqJ7nHHVCQ8SGKMPj7Rq5sbZND5ANa2f5SGUewJAYjKntJq1sBNPGt1ZMnjuBRT9N3Suzuj6",
  "key25": "3GtQKzDue6jRLW9ZXzvtAyx1bHWABEN3UQWyptbYzwuSGPeSrsE8CU1jMXGC4cmZXi17r7hd21hgbx1PJ2cwmTkV",
  "key26": "ZYVisp6fT7yjST4oyNRbjLrGjySYdDvKoeUx5LMzu5bAYj4VPt9mw8qJwzMHfnnK8EG4cekZomks6W6PWZ3M5bt",
  "key27": "2UYAV1Ry4tjLNRLtt5bAecnq5mhtVjkQchpMmSAHCU6HX9ERCtFLFoPfxBTW1kDgqYJRvusAh7c1sGiaQyRqH3S6",
  "key28": "6y9LYgFjuTqfCtH8Mi3ovPoVxT59ddVdx2K7UQjsouy5EL99KQ9ktJDjV2ECcaCJzcxxeqRWiYwapfP1Y8hKxBH",
  "key29": "2N2nW2avsBRs4yggbta9CZheLdtWPritmqwVxXesNEz2quwzhJHAeKXkd7KoB5hC15xp1UHV96ABRpKniF6yJrM3",
  "key30": "57gbZ1v5Ky6KjYmUyUym842UnU2umsdETpQszUrBJ6Zd5Gw36XDvdHDXerkyW6vJwHaxNxwmJr9chyDsq36ek9mG",
  "key31": "5kwUHEBGpz3VBEsDD1ayZ9iE7Xq6zKC2GgM9R1iYJMDefotgRS5pkMTyo4zHTUKgAaoHga1upkHq3z4buDwCaHdB",
  "key32": "4V4JusuQTCQuUNyZoM5pr1T6MYGXxxCHna1YuqKAtGGT3refWRfoYSpcpKv9uSqxArfoT3xKAWEEJhb5Xv98AHKe",
  "key33": "13JQyg5U2qnb8uYb7eu8Q5zMJMBQ8xN1mU9VpPe1efDE5XTiPf6tSavBPeQiAH8zBeMxuddhoUpQu1jExCZJdUx",
  "key34": "5CjTEWY6DEpugCVgmQwUniRAxyZJp3tMxxZEcezfGtGfDtQaCPqtYXdGXHKNrSUBzXfspxXTzfM23BX4ThNHYF8X",
  "key35": "4wA8aA9BhJmG22CSH4uQMRGx9Wm18urzxgQraGfipWBNscWCgXYfpAHZwpY7LxVNLBo5DR8YFSYNm2w3t7p6PJBW",
  "key36": "2i6hFM9YGKGedtvRxECuouGCHytPhVJ6Ez1RfFs7Z4echLDpcgna1mvANbtnmBGFdn7sguwjUWgm4jAueKdJdmco",
  "key37": "2X4FM8GuMhruhj8iggTktMjx5GVJoJuxWaXL6GcAp4TxjfYFR7JfXZcE4HrSNVRHeZxjHCxERzVRMxLUETWTcUMB"
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
