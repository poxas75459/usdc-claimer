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
    "4RFEsrZPmZs4ozqdW3kzMx1m9uCkMRAzRbqRmtC3ZRPwLqgCYpwpQsJLuMC2nDRjy9DDark9yjF1sZwjUGmwh3N6"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5HAXDQ1AETx5g1FVFPinqRkZcU2W5JnNM7fAEMzW71Qo9pFqdsoZmZf7gDFzohSCEtiQqTHBvSXTWahBDCT1HAhr",
  "key1": "QbsRv9xCg1my6sdvPbxkPanCvcWkj23JQSD6DYASGAYhQzTGmbBMVeubJtM9Wt3TRVf3WgNSr4kd1vps67S856N",
  "key2": "3BFe9yACFLRyYm8RwYyJzTg19DNJXtDCapg5Kxho334GxHUPEkHpqtcweP2x65K2sUh5E1JboiT7PLXbwrghXmtA",
  "key3": "2NPP29XCr6ybJ2Ge9nyv4E6BUk6DQoWDvBD6tbomVsq62MNiZ7hy7dCM98n8tuwsoD7nKU6vCt4os3SAKFkit5tK",
  "key4": "41dhWZWLhtfhUxqNFapJqVUgiA2GPsXj5crwSQunCB6NQPKZXc8YG4rzR2zMWbEMuu634xSkQck4Ve64CdzNwqxX",
  "key5": "3uQN6zEVxovLceADsh21Xov5nUq4fAe15ibhkzcJfuVzS1X6rgCBBhFfw8Lcg24AaMRRb1iWKXgjYnmyk1qncPvA",
  "key6": "3GKZxRLQJ6Jf8FeNY1QvfNN3JjZ9VZdmsr8SM7GvDjrvfuo7pozgaEdecH8H6jLwnLKQLUNcJJjAYwMDbSyTHrWa",
  "key7": "3rVVn85vuLfCtGVZhHXHFx6R9NxPBz5GgxLnZXYvhDstcVT7hricng8gg5kURcJ3LQHK4hkJw1dkgVeokU51DQYa",
  "key8": "2Xv4mEGjo8sjVfikGjBxcc4WJSPDAwYuxbFPVDC6ZybVQKMSeXK2uzRY2CrMRbYJgjdDzA3NW2GWooSwZ2HQz2bF",
  "key9": "2mDEFr4awtoFkmJoSpMb1HpsUFisx87QdzggNm94A7L9UxBsKyrK2M22AVoGDH764ChtMEJoJb69fFN9s4iHYyW1",
  "key10": "5ZRNQVtpoTeC6PnyQjazUNbUNxmb98KSiUBzT7ciZfyjaQrq8W7tyRdUJ8BZvNwdjUpZ72RR7sEvfRC6j6fXahFu",
  "key11": "2cAtQy89rWSD1RSKqLxPev8vxwoXCY4kVSN3MHNA3G3kiSWX4wmbdT9QgNbjUCwNrSPiXSGhME2JdyGWVNzkApiz",
  "key12": "bSdZhkTd2S5JWQyWB7VNbs3F2NGAD9FGrGn8e7FcdD9S4R4ggLY862Rc4XMV24z2fzBfTy8uceMronfDKTRVmYL",
  "key13": "32gikTmWqRmtkcJyJ8syixcU2XBShnxXkxeP9SEMMv1frEFFMYWwZshPsMYT8TNiegCGMQfWMfBoxxEFDsDRfsc4",
  "key14": "5UVzyb52d8K25xbN22w84cgtYcPgHeoafmZkdjSRroJnaGeSNGVkYzjyoThidU6i2rej2GyB8RPyqArUDrLwqyeu",
  "key15": "51oEPVNrathvz88Vk59Dvi9bVLUbQExbCCLyvoXgWQzPaKzBC9gd3P7bwkxshaTFsAVTrpVZqJXhVySyYG9rnwpe",
  "key16": "3Vk4yuGgUZnQjW4Uf8jab4Kid7mS3YTLUSaPGjVhu7rUhaz2H5U2awpULREfg6QMx9TborDtcMop3Gdt1nMD57BD",
  "key17": "5aEdrBwsSXQHUj7BKDd1RNN5LMj8e5bzbmiSbFM7EnJQLBp2W7foywSFirPisBfPBC5oJ2xiqcqzokjdqFDzy4pX",
  "key18": "sVWZmGr4iiKmskXJbvuB43rLyxgThvbPe9QQftjGVqtNn7JYNseVSkjk67xGwAZNBS6rxQEJEsyZHdbNzG7TEfA",
  "key19": "664cYk68Cym7Ea7X2xH28FHAJEKCqNDwnBMw13adgFTevhmdXaCENwUCw7s1zqYA9TtPNrFDZQc2YHncSQfKTJyE",
  "key20": "bY2V2NEvwMSjcKRLtvfzAE6Vt9NsxVquwQDfTadG2Jd8HXBHaaKxoLbvTLDmoNY2QfDqoZkT6wna5KQSK6Uw2dN",
  "key21": "2QoiDYYu3ywc3o1NyBJ6Bfz49ikb9REg855NWqdKTzkYR6goWbVx6Ao1RL4FHW8NwSwtdPeup8EUzvgM1MM8QyWt",
  "key22": "518AeQAYwSZ6pBRnwck7SD7ty9FWSK9oar1PDpdHS5k9hBHtPDDyuZcFF6k3EcFxmSmn5cSty2EBZ9V2dVB55113",
  "key23": "5aNKpg93gAgJsgPHBbtNv8SmqzcAMKLZxoVnknm7xQchgxof6Nnnfuin6nANL6g9BRGm7q631e2wKH1pSh1qxTnL",
  "key24": "3pVrLAdEYEzKLxCjvWtzhJZQv9hx2RjDsFuBfeWHoZVgeL5FVkcmBVNSMksDpGhowuQ4f1xsxRXMtEyndbVBfHDj",
  "key25": "2V44cL97UfewGANuWf5r3rNY8FBkGkoCUwUeuJkyW4wDfJgVzGdZ8YL6pUXfbhqabDwNKarJThrTpty6bNpfzpX5",
  "key26": "4JUNf6y24WnLHDRyvsy6gBNatLXS3GVdrk9mVU52RcycLy3wmJjrgKdX5zi2PPPKBFCDJZvHhEo84bFnx1Gx9dp6",
  "key27": "4nP47aVXarUSWQkNwriPZyEZQ5jh67cMYNGbXfWHHaAwiniKXG2dYAmRqxjqaJigUsaFQoe83aG2aUb7Tik5birR",
  "key28": "2uUdSEyTp7sF6dLXroqd62cZzb7WgaLXbkmrzcZM1cMYQ6Rq7WXkXWEp7TFYYpKk9F7Pqoj5FzRisgTtQiLGDmTz",
  "key29": "kZyzT49TLgVsAWmQmu758M9dfjGZ1CakKMQnmHtEDHHAkGVzRzfURk2R7oP6HNMtwN2EguXc46nXJgNguh5Zbm4",
  "key30": "HdQceHQ59FrAwDVepzP8oCaMn4i7TdB5QzVY9QbESEZv1C2xM7Wt3qJ9DsHvZRaQdwFTFFftZ18TXtdf3LC94jC",
  "key31": "2FX4ZJsUDJQe4r9eDZGAouiSZTPMWXhaLtm82jsKGhJD4v8z8XytVSwEYX1GiZd9aeWEtddvBqUy2nChqWVdSSgn",
  "key32": "P7xeCnynX2BjBtX2yb4jaVih5Zzh3JwC4hw5fKB1AHU7FPbb5aiJPJFyKonCJihfPoYyXDmA6YKKU1kfcFugrWZ",
  "key33": "5QpjdbB3Zv5TiGUdCYjWA42CxYeMmNJ3cj6YFB1iSMTsQqpNpTKATifrm4sb9GDnHFGMQRMvQMNRCpQo7H1JsLY6",
  "key34": "6GKGXqe8T7yHbLgk2zVGs93rZJJS78Md3BHPvDyZateXBV4tnPT4q59Pv7oFSctvXCpJHzuYozcnHbP4KuYXv7m",
  "key35": "32bgLpEqJuvAzM57oKL4KU6XAghFpbeiPEcQfWqgHaqLydhsLAu4x3xywcFcYnzxwo2hzFFcbKar2ma6XR4NqNvd",
  "key36": "3gBzaCFikH6uXKyvPQ9uyAVwUiDDqPoZVshxkpSDEfi2veihwP9eJhHtzvdp6xFEos99eXfaSoeyBtPH5pTbCsBR",
  "key37": "2Py1NN4C2yReaFAwWHTekNf9WtqvnApaWGeaBbUhNfKA82ZgyUAxftozzRtwxHujXD3bZAkSZiPEv3jYMVWwCWMq",
  "key38": "5P6d7kLAei47aWXcsGhZq7zhMKNJ2VEtoNAmbwjdiEVUQkrWk5zdaVkVCteXfSwiyKwKnYQG4jvcBPdkCrx4d5zd"
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
