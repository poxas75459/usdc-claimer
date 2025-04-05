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
    "3mhzyNSdHTWSfyD9ZZRsJa5ByPict2vQj61MufPtCepUq3MmtGC8WtAKqexQ39cNhyz25L8AvjivKkxKZdYWBFHM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "42xQMxL7bM17CPhgGzkoAWJuZBq5vh9UCRnL2Ky2nRdy5SnLwYyvu14Xx2viMofgWEr9uhm4NHdspjpyv9Lpq7RW",
  "key1": "48kk8DyD9z1BGjsRxzMScw5fsE3VNZSm9skpRsjRu3dTLQLvkvRLBA933NtgibJ5R6oDzbDpSLFVJjyibNbWrEfA",
  "key2": "4Q7jx2hUqt7BsWGmpf7vAdLy6dQrLNRGmGgUu8pcH5nAGro9cPiKUeh5NzxNhRwnEvpL9HYhqgbVMDEtvc1YS3Fp",
  "key3": "6SMdDjmoJexq6QxqQKGAzmaRPaV2k1wnXW33Tb9o3QbsbGoyQQUz4MirxkDeEPVDHjCdnU4gsoJKdxbYdiDTeme",
  "key4": "NMKGiko3kn7jWFYXq2eYQJuJaSdPig1pageji8xMwGwHA4f4yN1qnRMmtGhVAapQ2Fuy1R5dHRMVtR9J6ort7cL",
  "key5": "7zgHKqgXiaGA3UXU5UQHWYznj8en8BJKnUWUCXcNeoBM3M8HVsKNaSFqKPnnc2mrSyLosX4Htqwc1ULUC6L1tBE",
  "key6": "5zU133vjrwA84N1Yi6hQqdm8GosHXTkQg4FQPyAVXutVpnSX4JBHsaTUPnKoDLuM1cJ8MYVp9GyFkGW4XjfcLxE7",
  "key7": "55GLdHMNSD5vP67zB4X8LoysxdvpcBfagXUyPghURbRadSGQQCsrzfHutt6w9odvvN4PpNmjjA7By7t7JSe6oh8u",
  "key8": "2qFG9hKX17rVqkkuAgj3jVWWE3njwbDAaJo83Buz9iAHZJBZ9gKRi2KM7pM9isksdrpqceSpvLze9upv7Xt5SitR",
  "key9": "632JBBLaRwgvq3EVZwgHjKnc1c6N63TFPJLFxZd3xocLHXS4Q9kEHbhuVb4ogigFwzRCHHR1CQuNwpPqk5uxuwR5",
  "key10": "2y2oZ7MGmMhAFQw4eyRExrmTyCtxP8HAQzngjuBuhr7ikHTpnxPYkN33Q54u3WyiVyDY3MT1oPRdpe64Xc4wdCMo",
  "key11": "5jxLUDs6HF5jTrKR7FKdLto4eWL7VbkeXvNJncbNno8cnqEdqArq7KqqkbMUuxVPFwBUcRftdEwGUuvrNAWx4ca7",
  "key12": "5EKyJwZEf9nFNJ53tmTmRq6f7pFDGDipr5HfggLJJJP78UhpiWLycA85FduVrBuMNnyH3vqC8vGetsFucMjXR5vy",
  "key13": "R8P856iohYURHi8kLiF8xjgw3r28Gzz7RKZS2kwZXyJ5z7usa3YTnZ1uCo5haw5LgE15qkaczuwX6hhtMEgfHBe",
  "key14": "dHJjh3eKx4m611L76ZUTRT4ZPSoRVvF3vcrL522eBSokU5uM2UhkDu43VVNvda9EP5dMY8MHXCycjgghnZRTRTW",
  "key15": "4ujKRKduqSPiEx7QXNZWmL2Yuk9NK31AE2V3Ln3t44TyuWBLXLgycRqJtLGKbjWimWg8es3FLRMnLGiAfXQJkzQP",
  "key16": "2R3QQzRxBeUr7qgbj1KDR8T6tKtg5vgF9ZKUuRHrGNfghBGv5FpWdSa3FdnQTyY6qEg7e8Qge3FoLNr3RU1Wekgs",
  "key17": "4p43WutUHk1TCZKpeLqR2bbzsxg5jZNBxQQbycDDtEZQyhdcU2gQrtuJvQNwHcRukQsMKqafDduHMJi6TPRFi1ok",
  "key18": "4R3eMkWgHDibR6kXBqBm7aPRxqB52XaRzAykTME1CCC4KCKLRgKcCm3BJxATNPAcsGKMrLajJLDzA2eVS1A8cskk",
  "key19": "5jRb9Yh5CNadtMAQRstvrjwksSHQFXH5N2dJiBSvuYxEeTFgAy61SAkcXksTcrkx6J4hrWyjc48KpFw2M9MjMe9s",
  "key20": "6oC5DHieYy36MeiQb3sEVCcivds6S5Gyn9ip6x4T7XqodDp8cVGnmjLDfpNXP9vuPGvVQC7ktwi8tdgUwVfTUr7",
  "key21": "5xqNek3WFcxhrnURwexxMJztZP3L4DFCYBaJrpJqJM4D3wTUXzm3hmY2YsimsRyzxkefqt8FF8YAw8ToBu4nf7iR",
  "key22": "64MBv31ZnX3hHAutwjTUdyz38Nik4mcVa9w435d8Sh98EhyMejFGare5zkQ4BW5TjQEcuiycNvn7mXpRT9icYbUe",
  "key23": "aTHkWoaDMikzHKw71VoEiQzSGECjhow6eRdv31cKQhQS5EFGattkgKi4MsapUkTvyrDeW2f9X2SLQ7nWhPvabPD",
  "key24": "KMVpSPoqvdS5Jv7S476w9vDD5X9At3JKrMiBrJRsur3JcYbvhpGLh9V3DeZSmbcg4shMLqXXcE9Cz1GdM7pVbpo",
  "key25": "5hg7GtBKemAAnphKvJopiP5WQeX9gEg6RCXKXhnUvXpAwV28Sx442dNrYyhSkk82gnArJDLU2XU2JRBapHH9vJtY",
  "key26": "4dAo4Pe6rvqan3ufsa52QnV9eBBR4D5jK7FfX5gXAWcVeqsx9tU8B5NpgoWjVeRWGsdbsUWPXhPofso1eR36VNRt",
  "key27": "4RP96wHHxV7r4YTm8WZvAZsrYsXV2E1v4GtoEvVAMnpvfVNjKzm7VttvL3Mjt1RDi457h9UBc5Xje91uRCn191vb",
  "key28": "2YY9911cq3DN8hjgQMHniQt26DXsMCLJiSFuUP86QK5ngyWEQBncE7jaXuwLCGYVok1KNVHgADgmeSfHyWr9K8tt",
  "key29": "xSJhs9BJLnjJ37RsGTWTZLKXrEu6vxoqiaujGhvZQG9BGNdX9AY9mAQwHiMBeMsdof3Gxs55ENK3BD9fanPmuAy",
  "key30": "48cR4KeGSaN3VnbqsfkW1Nkjbo4hBcwMsGsLX52S2ekHRtRgRZisFjeMchHv2D83LSQwxuFYWGdm1MSPn1WCETxW",
  "key31": "joTyhrACeYcZYeLBbeFyStj93N5pdCFFNjx8U3dsxYZPBCkqq5XXhxZApuaKyHN52huYnGJ9kXNi7zK8BAFLibP",
  "key32": "5Jyq4zxCaGPwC1PndL4trB68QT4kGoP4Xvu3R327DYVF9WHixVpMJtB5H5bUykhoXRoPfrdMtEzV1n9HcEVwXGcf",
  "key33": "62bxpNb7CnoXChAcvzQvCWFYMivCaSSULjV2wmTxMeCDWRehSiUiKGQ25CBSmvwo3NYAyBygHqoRtUAXuXtLAgVW"
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
