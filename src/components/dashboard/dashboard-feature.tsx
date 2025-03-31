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
    "QA2SHqnPWzEYomrzbgW8FEMZVGf3gMGbs7ksbf3RAaaHgJcKKNetVdAcrN5mrCuvjuiDJSptM7sTsSFYn9wCjKg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4mRsDZ3ypTUXmf7JtQ96pYHNhXhqmw71Ago9vzAyMXHHu4UTCkpXuBuo8q5QHh9hJC2Em1Kij7MKay3hriMznHAm",
  "key1": "48HLU5aYEJR1Hbv99Hm8RKbnwsZnfSwM96m4PcfDfM7kzK6rUP689hGiEwpvw4kEogY8yKNyxDuVqY1WMDbwgEDu",
  "key2": "DUD8naaVafE2LeAsFt73YNkYQYuXKKYBVQVSRyrr6ra7pYGv1jybRQW7HGYqWGAGibhbDY2qam5qEDymyCTWjfB",
  "key3": "KMbJsuUR1wLpxRPcZk5EkhsoKp7eSBNNEv89Tpm3XvxxBsRXGbU5TznZcUhyiZDGgw6yErbPpgeDGKXKsJpn45e",
  "key4": "5hu8BXGnjfpP14tgEJr6Pk6B2DFpHC7qG3rqrkqWDLzDcTMPoBJnkYxMTUEwSANizQmVPKZfNs7qVQqDx8UPwkWC",
  "key5": "4nJgZ2cd761Mr4sydgWfNxudr6LwNCRp9SRCkK4J3dvbSC6zHqbQMbC1SQ3t9Azom6wJPqWtRogQMZJgkMh8GCir",
  "key6": "4bnMH8g94hsAR87BxrFjUSdUGfH739bb96bk7B9NjWj6eSxRLMVQZn9oA6zmLsMLXw2pTx4YRMoB72HiS3sZyNZ6",
  "key7": "5DuqVQ87ZrBYHAXoTWTwqgHNb8Nmsh14qZYovgAxZDyNGpnDRE9ntUN1YjPE1Vnre9pzraBmFcGQ9nccaazdQMo5",
  "key8": "38zsgMxn6WxE8X4erJE9M52WgXvaTEZTrxZ71T4wS41dfGvveYTbBagUZ3iHfzDvV98pFjgwCJK3gMvPqKmEcZzv",
  "key9": "5aHYtYDRSa24FLCANBmn3RMxcr8zP5abtYiGEqJpzuNNhCSaPRgJZSKMKaLU7ngNVRnX6kzM29AtcXKNtRmnecas",
  "key10": "jNEWsPEMfZkKtSuqk3XgMQqou7fabXyiHFJDknLuDYYAfG7z9nTF3cFLpwYQ9bN6q8WjZg2991ieCtXM1pQG2hp",
  "key11": "4Ecuj2cNfo9V8fZwqvAVCYpLaVYsXVepK6km2rS22mhtntRB84Zc6vPeGJ8JgwkMSBai6Erhzsfmi8iTfz7NywXE",
  "key12": "5pVo7TgA5bkUCxYbWCkDVVuyHzcax5Yg9M4QTNpi9Pzowz4xLxdAETdMhjYrsc1Bb5MGViBqrjQha3LVfs69j5vU",
  "key13": "48dV8sEQJmaFt1MYuSnyRYeiCcU4y4BoUhM1k8zPMbuh9sbzsn3FetKsLrs8kUiwyoDuuWyjd8d9yvp1CUr1wUL7",
  "key14": "5qZjhnhYsAqinHJDrAQCUksSiCEJpQhiQdD2Wk4hdsqjnkqVwmR3gttQfu1kvtNy3N2mMgETmrdFpbHqzCfnuAZp",
  "key15": "4YjMeqHotoDwQmKQqojFBR4S2m5MkjdPUNNEK2ywsNDkfX77WoyKXxiYvYTTBcqTurisduDVaib1Hfp89LYbk44a",
  "key16": "5YixyDDps8XCeh5RHvVt9rHp643Tu8qoniknsBP8GmnfbLxq93Fr2pZZaUom8xx3E3M1eDthMDyKaYc8hWxL2CKF",
  "key17": "3gYrvhu3PoM9wD5SNumAJQ3z8MbivXa9YEXQNCDj5g8UYFRprBtbMgSNti1ZThtG19yhDKmsdWRn3MTMEYPT4DkY",
  "key18": "38ByaY2vxEnDbQSroXTbdoNACXz9BWTKFrqQhwEF6QutP6pQhaz5LcaGAEbRwbwtCm6AZFF5FuEF2a1ff4394Ca7",
  "key19": "2atpFbQF1GgcoCP2mNZkcS1FwTZBzbiaKiMk3hbX5VbNw44a6t78kdrEo3diTDbBRBnTzy8jyVfKQSo3jvUfF3VX",
  "key20": "4ZuTvPnuaikAhM76cjUGBZKVdqTp9kxakdRoNZw9rZYNBPQFLwnnAGoghn7k8MWffSBfCjMwNqWBbgocsKVTrezm",
  "key21": "4FQFDaTM1ocCTp6WqEs68MySHFFE9Vu8Vdp1ShrZ6RrTE69bcPhBzzz7WTkaGS2Gk86jpyrLBiHWxqXe9HL7n86K",
  "key22": "KwLKxsYQY4tvBprkVP2eHJjPiPeyuiPBVqggQu7ejr5CBwbv9g43iBcahyuaEvhQmvJrfWkDgExtSZPp2Rkhz1k",
  "key23": "563Y3W6Xny21WejTHSiQ3qae8pTHktt655pU3z11E4Y3LRFAW6Pxvg3qcdKuYHets5Tjq7bpQKaHqe86mEd2YHEh",
  "key24": "3H83hNCrjJK2UzVPCa1nUgEJtTtD1F9Ryi6K9bcMHQKGFdJ7u4T8dCbW9RURZhL2wjjJEeNsjKCgfXSUu2S8LEER",
  "key25": "2UC7D8VBNwf6Nn9SzuwTt2CJY8TffUPuCjR9Jd6MuJyvq364hSX7RcdGFpgsCn6SEfqALtHkXxbudVRdKTEDfsC9",
  "key26": "3FGRG3iqV9TA3A584zJZGzAAH2XWcwXY4hXQgAJAf2chehyPfh79Y9nyTZQMsnfVZZpSmJq1AfBkrnHNjJrjCFg2",
  "key27": "59xW2fga8umAQDWo8VxoadFzBen66wBCXXDyTjuSc3BCjqtuKSmbGaBMCiRfQ7R8TJDonCwikqsvMJAkwqRUHYf6",
  "key28": "2D4XmQN9rcsL5DvkkeFYNrhVGgJig29toSBJnHpbNnnroTd6S4WjEMLJARztf9fesN81fiAE7GR2FXpeZtST7tST",
  "key29": "5EBYzRDN83iP9pee5u9HYrVnwzYfmpVLhqWJkWTtoFYAKe7d9bPEtKxxyZHvuRgsPPCLJf9Zd2xm6ed6mhoaf7cb",
  "key30": "UW3YD4qGbQQUvgYXM8ur5csd993w4CDYu2Aa3EySb1z2jufFYzCP5BUFLcNF77vFJkkfoAds12e81UtqqBDDwPq",
  "key31": "PzpaoFCb5m5RRU6QVN439LcjZmaob7VsmpJQMn82QGtESvfg33n8SD5xgt7Q6r8zH6fRAiEwDxALHZTqDsRtwPj"
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
