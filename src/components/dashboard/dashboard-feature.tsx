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
    "5qVg83TGiZo28nnqg8vRRrUoxJVcVRRKmfrpHYmKXzfPgcCvhVH9bsMWwaQavox2M1daatiKwUY2T7wmFqf3ZGcB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "53gmCRru6Pu3KJRboQHW91cQ2k6L7vWaCAAh2xwTL2mWeV65LBsqmKsgkYNjhZ6sUdVCEAKMvZq9nn51B9UitMk7",
  "key1": "3obubJ6QoBF53P4SRBHLrHgqnPNGbpFBmy3PNMv2GzmJjk6KKwyCYPZ3NYhn2GEkW4YvUEUcr3Mq14vEsdgm2D3g",
  "key2": "47yiakWazJesJ14M2zDKMTpMWZEozrVyksztBz4PCoBrB9oxswdpPQCH4Pb5cL1xNFGUHdAz1g94YEdGcsFBFkRr",
  "key3": "5x1dNxAfFvbrnwrqs5DusySMfzKZMk53LDTuvfdsV7Fe1udSkEm2h4ybwQ29ChXEuwUu2XqiJ1LqjhSsZ46wunme",
  "key4": "43Ufzn8D1GArJ2dUJ66H6JMN88mvDf7vHMWXP4nwMyNjpZuVxEvwJzBf9NsKS9CEFUZ4XeQxfyqV83CvFr8Hg1dM",
  "key5": "5Z5dqpkJpGbmFL4kXFkiEKaCrw3pMuPwdS5KgHVFUoYgekfcLEUFaTDFgjdu2W13mC68dSq5G6HejAZ8jU9jGboV",
  "key6": "38x3SyDhLndiJ9jqCBiT1XM3QPT2UEWLTJKUHAikMDStEwsF6WY5FZkqHDBpcK2xxEbMnTW6RziGVkA4Qu44dNMK",
  "key7": "3D1SrLQ76gYgg8vARSq9hGnkoJfT5z8S6i1X9gom95U9uHQZqM3DzxADZLeF1EmakPk3TAJ9aufF8YyENu5hpjG9",
  "key8": "4M26HqNy9N3vxH6HacYCxAKmtTjAYhuTrsFW1u192NqzkWpg95mXaQffA652aWqZWsbEHjFN54y3Afnafp6iAZfo",
  "key9": "4fHH7g4sPJjMdQbWwiG7mXAXKWq9YQo5JMdSaw823efdPb4YDsF8ipYca2kkZSJNXqoXmhisyKqffwmZTvigTLvt",
  "key10": "4KZX8Xxk4fZ6JzZmD4VhNfi9pWkp5BJhN9KHW3SFbVx537VyQ263AgqEwuaqE37qr4BggP9qoSQ78Rp3mLvxHuN5",
  "key11": "5tZgUA4sxzhZG4e6k4RWBstfxHMzwnvpM4WFkMN2hKdpL3i59rUQdQZq7woCiP1mLgTiMpwHervmYxhDhu3Ya59U",
  "key12": "yDtgKnqhdW8CvGEvnohZppeUziDF5Xh3AswhnFwPGmWFrX8GfHwKhernA8bRmQgcB2yxWJoVcreCHJpNjhcyyAN",
  "key13": "3dVSuT16ZcMZBxpJy8XXTfbYd6o979fNpT1ZRWUQihjeX8GbLYsSSX2xmgJvyWafH8wfDVouBGP9uqThf8kfQtQ1",
  "key14": "4GnS3F8ed7AfsBdBx63b1darJ2hQa1rj64z9uvR5byX55XDCPJv2gpk7UUEuJYf6Jriqx7vCgnmVTPdjB9v31TbH",
  "key15": "qmoWMinkvUJmaQB7oBRKrLu48RSPY21Dum83PJfaDbKGtM1JbzBReQKVXLXzESWAJra8ADokVDGaJjjB3xMFdwS",
  "key16": "2SZuTE7WYGpfTxjixZc7nG2W3onsBmUKuVXsgXMtjU1SL5sLpfmBG2DRq1zf7MBV1CkWn1RNUPRKoPyvqBJ1SkQ4",
  "key17": "34sP18PD4jCRqzziyceFHiWSsSKxmg6TJtKBUWA7XWnqdZBeVzKg7ZrXV52R1TN92fvuBsQGX96r1BEy2uN3rWgV",
  "key18": "1giuTDLETbhFg1NjmFE34ihxP34c66oZUWV2eUykbad4GEMDkJa7rkXgRMh3D6NU96ZXr2RdzuYPJntfg7Yfz4s",
  "key19": "5kDusGMijWKZfdy9apLEHK8z2RNzyhq8CiUpkgN9Ldo9HAa5zHiYTWDCLMGYwdGAjEX2tvL4b6jTWz3nAwv3TFbi",
  "key20": "4CooGCSipiUJACrNzJHQ5Rw1b6rErm2qC76aFwgJtH9BxnF848Ymqf6c9LX45AWmGVxHrr4dGXN3KbFcUYS7aCz9",
  "key21": "36bzmiMVbgVb9bJGNVUZ75hTBUvt6wwTouRd9ET5qvaQcBkBXhjYFsg9NQSou5NVeNJQMxjTTYK7xqtYQkmVAYhs",
  "key22": "5edycgSLBt67jARxwnSBgqeoSk3wV1E4bVc7c2Uz1zPaWsW5k1QvoFjQrWTRgChaUZCgTRK3rB7PdKB5UAfkij1D",
  "key23": "4zBsJRHtJWYegcR1KKXc4cwwbK5sQD49YApwN3nyqfkJjKHL59GmSab7mwDFhzVmRiUdKWZ7FrDTLsxLqPCGDofj",
  "key24": "3eWa89RDgNti8ra6UUqMhcYJRS9M6cGpSBcDjkZQqUx8fndYx2vZYHaothwtt7rW7fx63D6rp3gffipsv58JjTA3",
  "key25": "56dgEQJwVhvPPKrDfyzQUWLWKx1Zaodpk4cH5JfH1oL5P92PusGoupxv5wp1gEkkaQGEvUuSpjtVXW8eZNEYPQ4i",
  "key26": "5aXTYF5mpQaUwSJinRkNJoGPVHd24dCDC1FVMkUdVGKcHALhRamTGS8haQwR17vMB7vdcUV6fjthBzkJqL4h6FeN",
  "key27": "3B46Yx4QFGSszmnaq7YjsWNeonkGkWLGcpW9phBrn72jynrwoNEi2E9JaFJuEGGukizPcqdqEcGGWjx2EKjwctrt",
  "key28": "4LWF7VBr4mZF6h6yjwHXKJ4dg7ayVKGYtWTayz2YMa6WWFXQo6a1GMAHTqMaehdAGGS5uv5Z5KLiGZCa2aep4DNo",
  "key29": "XRrcN8eXF5f3gk5Z3EYbBvJ8SjC6nXFhdnFH2EdE9imfpJDx13AMLzctQbxxzTGhqsV53aJxpfTr9WYwvABQFoE",
  "key30": "PoaVPfRyFv1LTJ2313CUbZqGagMKU7wCSzvbtcipY1u4LgAoujSQiqNgPa1xCdhNmmAkapu3xDERNwZM4cDhFdm",
  "key31": "Wn7CR2wfsXA8pDJ46ERySQRgkXp9ufcCVqdDEZpBkEUq6xRANBN13BUM1BGGVjMq7jG8mQfQWFmLtgshB6oK2fr",
  "key32": "Hw37oza8bsQn5Afmx4NBXspja9Z7cGkLN3cuuaPSJUMSoa9p269azuga3YJ5HuB1Azp3xv3kCBRnDiKaR8bB2i9",
  "key33": "52KjPFKehFaViN1T43hYSVHP8NpYUhtAdEUXUa6ps7KyZNknkqsg1n27gspEZNZ48Vv9gHdz8hGqZRqF8RxnCX3d",
  "key34": "4T1KiZHHnrMdBuCUDsvsxAqtJCwP9JHPDeJc26zgW7kDbHdySMXMGHH9GP1NbB9WsYeipZw89pVNS65hi36en13N",
  "key35": "5YctJxb2BBGPSE2SCWBr5KpnQXEEmYx2W1xoaqrxMUGT7DinYt7G9G8xtgmyTn5FzsEUhvqkNzvsbLLMaK99XJy8",
  "key36": "rak4dCz2VEPdYaQXiDRWju2HRGzGz7dFjrvaemNgqo8kq6cZsQMABmZD7v6kCx3LtNddZLCSQgKG6eGuAci8pR8"
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
