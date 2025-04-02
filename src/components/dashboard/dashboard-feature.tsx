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
    "5SAAJjgZ8HTmrLSmXywDrFK9vNJwxTVANwjfBKAPupS1mxzJw3f7rW4SHP2BtwjiyCDNkqLavrrd1uPP5kEvkpr8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3aeLR9JH5SdQqKoFBU9K1oVDtTCtLMW4nJZEJ4P2ZagCcTZstRB7yHLgxX3Qe1LfjkXYA4YDbxQQ3FFEQ6puVZMV",
  "key1": "2abQtfaaTUZ7nFDE2MB912KvFFjGV3UT9n9KTyuLvTpeEsRuCRcbwhimJV8bgpq9ZDbDwVupktj8MsLkcCVkYqUH",
  "key2": "wMViAJHSrMTAYJq6wfCWxGWRFPX9TVBi2WryKXzZG8GEFUSKNeGGJFjmqiyvJdDEc7WTDouVDbpLcWKmi26DN7q",
  "key3": "2rsCHEzPvzSXZgU8yuEYtQZiM9PZki1aTg49U1m9FyV37dW8czXJ8M5hPQzxnoMbmeYzHq3YQtwSP5VC8fcDZsyA",
  "key4": "3h6ZmfWg2CV9WQVqQspovJg1UwzWk8niKKPEURFgYY4pMzDK5YZNyUdqTs3qqvzSVL1RAGV4FRUZ4oafMV2S2sqh",
  "key5": "4oUCiFTfX8bUQGp7LgJLe55M3KxCzhtNjToywLd2hWfU4tw6rvvFLwqjKToRg2khcWSXPdbcWxngaPcdkMVkG5Ve",
  "key6": "JcWY5ECVYrzEGC2D4VKLfY3Y4eHnTnCg5D4euX65iBvHYitBZhvvNiaLH1nLHjvLgtrJSuMG12Cjo99CTEfnrgb",
  "key7": "2MH2CHXKLaiJ1RLrUDdD8kqxNE6KMmXyMTrRefc3z5SdFmN1t9Tth89cBoDqShC7ooe3Qiri6TAy1ZwvGkKSWNEX",
  "key8": "3AhRoQEQtz39d8Ubce5SQkGjGnkGUL8btUCpMAHxvSjbEm73CKnVtB63tVqdVNCY9yKQZr4KbvNqafLb4CMs2B34",
  "key9": "S2RyenoEDvF53ta74LJNA9Wt4wFk64THoxABA5v7ZovLyobuDuWo4kaHJK8A3SuKopwNGgLKxNGEB4yg3kqmegM",
  "key10": "2pn7ctKsswmLZY944LTpWnEirsWtpqidAUTkKxfre2iEAdGJhycN9qpRho8mZCkp4rfNwAsfowJg6qgMCzcc9sQr",
  "key11": "2NCzJxcYE4ujZgVjpGsm4yyEE64fJFfwprCB4dyMknX1dVTrtmDGfz7ywfkEj5YCTdYissQdULpUEtxVBVdQQREX",
  "key12": "5KgnAe7iBEpfQxiJYycWtTMFsLK1ggHTUTriMuVxyJcTR6zTs8VBWUH3dtbk14HvBJyiKu5uizkwWANn5wD7yrus",
  "key13": "5i26MTi31GCy8oAqGhnpQmbGCt7T7QZebQDxbtxavqNR8BrGD48hbREpzm7rLbBA14PyJ2bQH8W1ADZmVgK1jQrL",
  "key14": "4iFTuwN2Ug2F7VSnuPp9CmonG95ZCZp1jcSaY4o34BvBRRqTm2MyKB4g7gv9dVFFgCxVhy3xnFuyrM5n17fD7JaW",
  "key15": "4WdcG4H2DdxyLwNLfJyS6kDsBaesSv8tgeadF1K9zzFfmHxDJxgFp72LN2CNNUVmdDQXR8Fx1vFgcXd64cbYniCW",
  "key16": "NvcA5nNdybFQYAf5pgeZf6x1CLm5p8GgwKNoosEzdR77KF2xPHGWp3VVi5Zs4bnB4xntHWTYwU3FksKpqweVuZ2",
  "key17": "31SSkVwrUkJBBKTFN58ZaeDxkjaBXmX98TCqNbwAhzFVUaRHsQY3q6uCjK6HWUxVQhSuCY5VYyKAZHoqcZPwJtXg",
  "key18": "2WQPbGSqwHueHQZoGRqy381LyLycgHQMrMLPLYZ2PrURDTt2cKH7GXVZLfpoopYETuNz6TeHTD9axhSiKU5DB5rJ",
  "key19": "43dYM9eUBCDEYyG83PsrXW57et55jvm2dAzDoYKTGQnEdxPvFzFKPrEHZwC6WVCSePBSzVxTEEUwLkM6t7JXYacs",
  "key20": "288gyYncPxJAa5ViFce9RX3T6a4iHoPoXSNcsVtPtRhKeBJFhUr8qQjtqiDTigPtezvhkEVSR7zX8tuZAsBPuSz8",
  "key21": "36kMWGuLH5N1HFrFx6X6QB7ZRwe4uVshsMBA6ZtCkLLT7kDczUanRpxcEFsbitAjxtFe13bRNuM5MwRRwTzgxz52",
  "key22": "2BazCbsPsEhMYApTJRMg2ZfEvitcpeX2sBPnjFWCahJPS3VXFhUZQYnou2cQQbvdaxqLXnZra7by21BGMNgHtXAK",
  "key23": "2zLuux27c7j1HA3chkcdxFoqizYGhqV7bnwwgii2dfqC6mtMN7U3yCqV68cEQEZQKzQrVGh251UnzZvkHkkSniDZ",
  "key24": "AQgMWFXQrWRxEwNcdVAzCRwKb6Vqt8EYCvKSb1nYNPArtor7eizwBdnFgSVhx6nWx9aG6NQSUMDkGoZKAUdCCgt",
  "key25": "3ZpKw2vMKLXiTpiLFUGioXuZbnQduWHCarE3XFTcZmg1znqAuAR21TBUrnDzUtUmqU2my8cA2M2CfdpAqyPjfBhZ",
  "key26": "2egdMD5Kz114cKZdmGMFLmBKpmbaJdgiGQAJ7GMSf1R5qjtFYnxeXv1Su1dEih3mwCgkhk4XW4zf3wvVdR1WpVT7",
  "key27": "5CD3pm5FXDdHSkxVig8rDoRFNUwADVAUxWzzoQ3KHgYsQJUN43N8RCX84TaT6UUBL7F5LXZqvZ9BJJuFMLRp5zcT",
  "key28": "2hTqNY8xHJS9tPsNvj4mb1wpcmPQWmiQWFU4SGYmHZCrneNomQvGQuJTrBxW8ErpXbaCMzutjbr7NeCaih1vx5kx",
  "key29": "3etyJaNVLBzqWUXZLW6BBYb4DVF25VE6U85vuqK1mwkUxKGVbkLAUJQmdi1pYrzmXzFTA5iiMfYgp7rsAXG5Qhg2",
  "key30": "2qnM78kYbi4WqP6QedkyyvHCMdoEPHvFUSAidYZTMkSYiAY5wrG5gDhKcsnetjGVUXP9XxuiQc2cDqihvCCK998y",
  "key31": "5NRGjhdsoKwZ9VeGpegXZ5Lxffb3KT7PXuRmMv1N4vnYnTmdzPQfwtL8bbjbz5yJs9MUBK9CmCtKikEGRCHBHCZu",
  "key32": "JLahBkWhLeDSM2XS2LNDmDyaM5YthWsLukQ6AxF3hbp47WLbFyeFJLm1v23sV6h5m5eH8gbjvjMmsQzZbR6qpkk",
  "key33": "5zTLWT5FQpLToaCLgHc6XGmXxmrAz6UCeSkwrEa1RL3N84HSMSu3gExtC3juLxpfvrgZmjUatuk22DZbw11Jg1x6",
  "key34": "2S9cQYErULkfc7GATpRYdUFcowH7cpVUYYMoujZcYkBK4ii7WE5JRVGR9GMDdFPtt3TxEQGxpydSGupz5AiVUZ9w",
  "key35": "5c2mUPct8tR4Peqgdw1CA9hwH64Gpu84ybJ34Wi1N3JJbk7g1jcBJeKD2Ru4uxoCvSd2FQi6xfKwZZPaoVssAw6w"
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
