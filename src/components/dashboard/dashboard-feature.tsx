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
    "4X7sMfrjYd3nhbmhtdcvBodQuVsqmWFa22CntTjWpeq7ogQj27QXPrWo5nYmtb871FK3yg7yPeEEwiT11qHe7PD5"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4X3XQZbsig4BV3AN45jwjkM7gKuZyVz3jbEPsFQwKHDeBhWJPAmpxyxja4mQyQxYMyxqi8QJ1bWMChkKTR7XHtyq",
  "key1": "5AjTDeE3ZZS6kiXYMds2KghqM1x8xVoqccDxj5mFLAJFgLcBkQpJFowgceBGijAg7WrFv2KfLEExZCJrSkjYTcyr",
  "key2": "2zByxJjwatquxv5zbG1s6pP1AhywJDxVwgjukhZgfgZJb426x8StNWBg4k3dWE193guwP8ZoqyDcXNnQLHuuev51",
  "key3": "3RfBA1FpPAQ6Lf8XcAhrnfLxgbJPRPxV2orwKEZq9Tf7ZLxFCsLLdXs784sBzW1gtoDMLJumpjuiBsmkoF73ZKFA",
  "key4": "3jhVUeXdF1sBJ5iWNoXw9MvHKpE1CuEXsiyR5qm7ocfmCpmLoTgMyudsczYi8sfeVh6QkihG66NqtX6RAdKDZaLm",
  "key5": "4CMyv4fjEVLyZJWbxeP6nV4XWsdG6f49SMBtMtbDoLjCnp4MRvWLZepBfbPWJ8ELAN6h6nHYfEthwUm63Hxp5Pii",
  "key6": "5fqbAbm2yaFn3vwrpuN3jMsK1iB977cpsBmdFM1GrLHhiSswGUVt8GcyLVf7mDrdi8C5hUhzh23xiu1o99pKs6st",
  "key7": "47QVz9MCZ7P6egURWKkV3DiJGuSgGifbHDLofH2zjSgdZngDCd5Gfu4UuFtWLHHGNTWEDj89koJ3QSJXQr8sMDnw",
  "key8": "AKmNhSntRFMtVSSiwVsHv8KcA15qiirU6BifRUDDy3GiKBr7tbD8AvxiTuPHoQqFAwUfG2S23Q6BVmFWF5FxnFZ",
  "key9": "2vxMXjfD8NsLdrGx6gsu3LyfTCfBncsuK7RGhPoj5EVCd2F7sXwftKDrd2mrQCPnVqf3rQc7aj9toJ5dkjd9kN8E",
  "key10": "3ngyLBqZS8Nu7gYrQQ7LuhfTzWzsjV4ZFDHiKfets4eRNu76eJBrAFjQ2yrExnqep1AHV1ruikVJn9JmkAQGythN",
  "key11": "2MoM2JoJ9iwdz8rT5rZBcgyMWFRpHzCrcf4MHkYGKH1C7KAn725xeMNMLkCfGnQPv2ZeGfH55YLXsQ84NiaFdNJ6",
  "key12": "61SHM6NdGnmYjfLmTxWbDzYZCuZrpn1n31B2gs1SsCHautP5c2tEfw8Q7fRorSYdqHf6yLjbXTJNoBHEqEfK7Qe1",
  "key13": "2z5ZtYmFEwoBGKHYHPksn3QJnaYNqMwdfPQccoSkwJy21BFcrFsAVd7f15SHzds7Na2SGBjHcYRVw8peXiQ153J7",
  "key14": "2q7qZQKyJrkgBgwyYymeAodxtWFKeCAKHB3vqhTEsK4LSt7PX3qE3LbkehU81xJZZCzs46Nwvr6sLKBdQowNi5AC",
  "key15": "5gk7UG5mbemzXi9NWTfBz8tb7ro4XhMqnK2zVcYYKdnASDxp3HtpacQvUVEMYbsvXo1zh8orFoL39bAAfrnNpVTZ",
  "key16": "4Jg9Eoz9nwK6hkNsDRVknb92WD25ETUuNoxdGmLZnrdiu4HfHPkRYMiYc32RApmZYDasjCTDaLuc3XbMnb552aLf",
  "key17": "4Z2JsHX8yzK7dE7eF2aRdSd2d2yVim5CK2wnY8LqQWgaWWkSgxpa4zktEQq2srKG4mNnYvTeq9E6zCd5VtfZNzBV",
  "key18": "2ei5P5F3vcf68bPEb3TRepKdttKSWacrNQECpnfs7FE4EjoMxK7rbaa5MzUrUiyCGymvYb589VxLMAFmmAPxkFa2",
  "key19": "3RGTio16SiHjTdj54fQmVBESGzc9pAkPnJEdce21Ki6eZiEgytt1s4Cf28G7EyaMA9bDTkMap9NeQirwhfATbKNX",
  "key20": "5voBxqQ1fX3zB6TZnozvpt6MQ2ZxNcG3MxfZHGWPQBAHxKhP8LmBXATKkJ6ELST1Q1dN9X92QzEsJDUT4touPMKd",
  "key21": "2xxtUwmBnX3wRD4Es5ZQZYzi7LWKqSXf1ZjcFYpRZtr5yJ87Ve6w78g2YddDiBFmtUrvZPPUuWTiSAWhhuBCQ1th",
  "key22": "UgsSssXwoqoBSwFWVnk9AceRBbgApWxPYxeVbXKgDY2BJHNHAoaHomD4szRnKni22UbijUEArMvHZybXvv1WPKR",
  "key23": "5WPRY3ssZVej4rUpte4qcYPNhsiTb6ukbkTaTDGxXYiADgrRJ7ivPLgs5j8HibDZTYM9SspnMi9jrTeCQVCDxPQT",
  "key24": "2mhdSdJXE187zyBpCQpqCf8nQMtiKBewufHqL6HFom4x4CVhcojXeyxuJf7Ze6DXRq9BzvqGHGebr9vfPLS6yYs4",
  "key25": "5nNiaTvT6m28KDbEnEKwtFwiDsyP2oFVFuT2xWDF9XEUnBApV87JNsuX6LE2Z8C1mFTBWYZ1ruDksZuTveUJor2s",
  "key26": "5pk4HgBurYPtDE5gQkZ2qyvt28EZsfivMdwUKWtwJnFAKf3F2f864RBqmEfX9UR1UrgikZPdW3hAboG9ZnxbcHut",
  "key27": "2B5CFnbZWo5qHyCE2GTQmCKKtHKWvMZDttzRxcoXLyFZh6ibGxLy5DardbpR6mmyhCkHkbTNJ9UCLAtnXe2eD5X6",
  "key28": "3akvbVhLgAjzsacCVvMaKGE2qTNskoNvP1A4KHQZXmsVVesZBQnie6Go8GgUVWapgHhzPwb7pyXZzQJbiAFnDb7f",
  "key29": "3o7d5W5y1sUb1yjQ9QyihB23JnUsFFJptV11rHVLbt1axvYnwSMybBydKijWh4aFEtVBzf4GmocCfpcZ3QAcD6wh",
  "key30": "5V7iWaJcoSG9eD4pwVBgHmk9MNRCeMqdsaBsWhu3XKmSq5ZZQLkjgu8sA9rtYyaN1h4yUVA3WXLfXEVoJTw7NssD"
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
