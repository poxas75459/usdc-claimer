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
    "41JzKhFDP7KdWRLCJPNPSfzdjGoJRLXxcP6MBVzcBcVNcBDyS2MAhLHK8RZJkLguwDPRpusXf9BUrYr63aKPRJGD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5aXnySMjb3924QVdGqidJe1sbA6gFhB4kbnfTkxPwdDiCG7VETAyT6Aadh1MrxG6p8KgQ4UhnNnh4Mda7sqzAEmG",
  "key1": "46GWNdp7MD4hpG2cSQ6Cv5DzggnHHMYVeGH3QHbJnS9iwGRJqC3Qp95ne46kj8yhtogidjdkPuQPHZoty6MspUXA",
  "key2": "3fSkjGabamHBddwdHyBho4bGec1vbMi8WEHE6nABETW167K7hsi8G3LngiMvz1NY1euWEm6GFh7LjbER3TUEEpok",
  "key3": "2xhxgybJad6VL1rNBhaHUHavJhz8dFtjSJYYFqeeWbn4sJuqDZNJBr9if9Q23bssVrrPTj7LYNjMan8HYHXBRfVV",
  "key4": "2v5iEndWz56BFjRwXVLNoXGW7ewmAkfDgBsZubWVgGRgZCSU53sFYnyvFzRkgCd8zJLjpJFSks21XXUebpoVSiXJ",
  "key5": "572mzSMC4vm1YU4aycitbV2Vd6s2rXyUCySMh1J5f1mXugs9N2wNtAZrRvivzuzoeTtEsSh95reNZ31Fez5NWnc5",
  "key6": "5oUqk91gR3hN4fvfsfC7g9rR77ajR7RFy7NCBNUv9Qz46bULXq66JGY5vTnKtdamxqqfYJeYaKga3GbJrsCHYfsC",
  "key7": "41HFjK7V1VsTVdMuhdvqZ96EwQecfPNiDUJdftx89fzZYGdaiqs5x6JAb8pV64XD8VMWTDz6ecgjErrjmaranefm",
  "key8": "55ebvBZ5HhwKeX28k9evFZcmFbQbMPSoU2Kyj3wEugaKwnNiW7MmeT7SdQwBhrN7AGLQkfs2iG4KJHxQQ3SvKz2y",
  "key9": "uDhyXQcpDL2SaddeSNM3wTFrJKJxWE2QM2nhh5nn5V4X7dYtt637fL9tGj3yZvTH7apbGRtoiDXnMnbdaHYHa6r",
  "key10": "3Rh5oFv5iLW54dpumLE7ayeTcQ7uAGKfCuz3MzgJvLStFuPv3C72SmrJ76SHnBKHYt1FAzrwcFAgLL1Nf79YCje8",
  "key11": "4zAskrv2vAEsx7s9E5ybepBHL6xhKqiw8oYYNkWGrWhw6XCjsK4piz3jw9NdVRHAYUUYrjMrZbRf9VfWaXdEtXn4",
  "key12": "5z7KjV7EYotkedSrzEJyw6te1rxtouQJXjPZFG8HPJ2PWqkzH4wTB3EQ2rX7fDtZ23SFajGiyCoVuxdmDPC7etUV",
  "key13": "4CwqfnHRDA6gYfBCcyLDuPxycH144Xm1w8vVGsQzWd1KBrZTGQSwncAZnfzKeFfWqbqDeyJKFhUKs5gwvv2QuGcU",
  "key14": "2TKYSQU5J4BV1jcWUX4ozJWBpRKjQGUaYiPScNKUYaSAB6xgRaaLX21cQoN64zQ4D3dU5TQLPCQhbKz6dqizfYdW",
  "key15": "4LBcVoYobt76qjESCrW4WvXt2gHTocqikZpVWcunX1C1HrtmXgFjCwz8Rjcwc7LD97pN7gXab3PPkCXQZfu2ERjh",
  "key16": "pWfhP8tYFERF4Hs1DTn4PmdAHDwoeGUjHZP9aetPnJADHBxwthub3Gp1YEu4KmhHZVd2eN1gZZQ56FkhaL8sRni",
  "key17": "HvFegpDANk7K6qbwD9LKyueoMHPisQRhw9zZZSMAgXHvJeK5QCod5TzLr8whksC42FBupyAXSQPYRq1JdYmHdAr",
  "key18": "2KpSNs82TnYHxPe3QzfHGJetVnRWJYz8DGaniXJxptLL9aQKtLrbRgL5PDYbQN6fkRb6LVRGX2EiG7ixRZ4VApvZ",
  "key19": "5DMaH4DwEk4CMgnemr7ABf5C5NcgbjH2mWNppfSGQ2KHkHDx9dsTKPdbtscSsq2ZRsq8L95jVeAQP6uNdq6AVCqQ",
  "key20": "33Ni2i6opaLtDJuHMvCaaW6MiaLmu9Beii1MMY2eCmbSDUTUX1TLthe8ATNrACjupeZC6Na4Yu1EmPncPmMMobgb",
  "key21": "5tkaPgBsMnQGDAEckKmZAp29yzbA5f1dsuoH2dBqkcWhHXJuH8xqawPrWffYY5PFkQ9kjn7mRfdyUYm3jMXDp5jU",
  "key22": "2bChAvrkaWtM7AHgFk81YNriGUhGPJYLAvjYEnCj1unYwFMRpXzqtQNbRNaRgPnnhdeNGyzC9ALygvdzbdaLsKnF",
  "key23": "mDnZLLbDMLVew2MhMx4LeNseHvUjRGoSgays2oRBNd2v3z2ZRzC6nd8PmrPjXrWzYtuSpgamgZzMsx6mPixXZzF",
  "key24": "36AfmFEddoUm9oZLtYFxu8oRCKasjJXULZEdFKLmuFuwoSNrNVXzvRMjrTXeX6BJ6Si4MypeUYauf3u1VXEE4e4F",
  "key25": "56sv8NX1auEq8LUQFYccU2vHtdcvuQiTgj7YJdedwXKk7MyrBXKArDNBt1Q8M3bVkLmNSu2gPntt3GBRrwSkHq9X",
  "key26": "3TbGhJ9ucFCXiH28VTSy1BjLadDCvjxr81GVfV4LCHj6BvQ5coWPrYQksV6PUiipbGi2mHgSgVnwnKYkn5wB2jvy",
  "key27": "5V7jPddJGsS2c8CkzWDa29rgmNpEbD7WrMZCsyvfkZAqEfpxUuTmNMLm5icmaYEYQJoHGQMbtFZZtEzRMKCd1gbK",
  "key28": "35FqUmMdqTGpVYi1FW317PHyBy6TEedBYN6W1HnohsL2nwv1UBcKkRkKow3Fd98T5uohjawJEJa25zHjK6kHp5Ue",
  "key29": "5L1fNeBXfRTHA8RXjN2eA4wGtYdN92N1kVDmBTUM3uyrqDrkJth616RsJ5EPop5HnFPbuTZhLLf6BAMDPVPZFB56",
  "key30": "41XF3u5RbEnt3oN4PcDb1c1Nn9BkkzpmBf9om478gwAcweAbaDAMTt1kjt7beGUTc3aCxMP3HXYeBWHypzbcBWxk",
  "key31": "2wuqMp5oNRHCAHkru8dPVtA877ZhpL9zB73wJaeULvZ4pwFt5zyBAeRsfEurbaesNtMppUtt9caz7eEGAYDtXyyh",
  "key32": "4D6uydhionYLcAG6SXXXUczKyVHN8GUpSVLhzdjVmdXfeYPn3VEQ7nYZQGSgN6iJ42NJiH4nH4yFCA1YJsenJS2b",
  "key33": "4nPaQMycbkfu2G3GkSGnBrbHRQGoaTDaDC4YWcXUQ4PEotoSgcj4ve7bFyquJv4SDpK92Da2wNi1D9rg4ebzhPC5",
  "key34": "3UkMZ7KRFbwigwpD7iCmJucxszbrmYYfMpAyL3gJgqaU8xbZWiX5M6RR75DAihVrcd9VP6rs3agEP9Vpy1zrfbAP"
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
