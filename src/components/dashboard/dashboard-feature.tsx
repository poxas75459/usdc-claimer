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
    "4S3o5CU55JfXtLRzztsk8LEgibTeaoqKnT2aVhnm5ikiYQJzw3hSGLC1iaNmFyQpbqejzHUDrYgafVjLRRrvYveJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5rnS2FYJ8WpzZqvdAAXioHY9vHjwo6QnGG5iHvJQ3bgv5qYwCoNG7SpWxA8MQupCG2jo5c1XgbygG6vbgaENWbv1",
  "key1": "3r9yPeREF67sy56Yj27Gddx1jMVuQ88xc66JJqbWPCVC7Ge3azDqvujrxMFt1hmFDp2uNdFWpNtVZHu7AHJUoxT2",
  "key2": "22tfR5eFmGXQyXr3Y9pHVLuiNPaUrzEbqpomhajfSGKiD1x4PPhDchE7zVDMjy2zPAAexP421R2MsdoAyxjjXCMQ",
  "key3": "5JRLNH2bjvzrsDdYfzfRcFZjeT5ky9swrUGiXUiqcy5r5JRWH1YMZkhepPmWBDzYjQY43bG6QrrL4ZXct8r46G99",
  "key4": "GgqE7zynGYWt1avS7twJ5ZEiLvbdcr36UPAvTDZJpSyqCV1vi6szftwsKREWVtwyiuLUX9w9dMHYaFiX95p5W7X",
  "key5": "2QBe9vCsekXAdpgeX7LwjY8p8ciHSd4tiKgjpdTiV7HAqjKhU8hWVJ1s8w9vo6X3zrXw2z2jzB6Nwg5KJi9tWRdf",
  "key6": "5HnhgMPYHF1hwXPFNs5FisMgWGkqscwWndmS9uEA1VM4ydsUgxyAsZes8gGtGNDw4KFMNv6jF7UqZT3R32oTgxoj",
  "key7": "4EwUESEDsBmcaM1du1nhLYKFHGZ59UPS6YHzM8xE6it7b2uxn57SZ8ghDV1iZGcwcJKSiAUybDq7QfqgsXGcqNDG",
  "key8": "4Sp7pouTbXq73RTeYCvR8oSNrJRSBdtBoFCuDrbmsAciQjXmuUejTY5ezCo1sYGME3LMuZtG7WAnUQAXUs3SnwzY",
  "key9": "3CRSsVBEYaTqV6Wc95zKcofbwfEoebYhpWwabaGxTn2AWpJCWbPPX7kAZUshURvqvEj75wdUa3ZRWFG4Jgb11WKx",
  "key10": "24SiJGZYviU8EN47oaRX9UnWzyaxk2Dro7H4Bs2Bg7JzHhrDFteEPR8mukLGoZ9qhu5kFFbfmtUQYrocEZUj6B2j",
  "key11": "3yKMDnWdbZ1wc4bhZVfXkxRndTt83kibb8uVojQBWUHdJFQkUtLfAratmDXZ9amU7SkVTUhMxdx8S3jGLV3FcjPr",
  "key12": "21YBW74116df8g32dHVnTEz2TSX5mT2V2QgtCWYyJ9m3jegscL2j123uQzLEPmen5AQMAL1jvDeoYyBQGLe2PBwA",
  "key13": "3NcGPF6kUJkLLt18VbqUGxzrZwc6Fc2SWTd2D3ESmyGs2BZcbZx65DFaqT59PHSjSr9tbrpruzFcC9AuN7deCUbU",
  "key14": "28p9oqb7GdfLcWczYUGcwVNtkyWFRaeoD89Ckkvg4XDnNoFk73YqdhM1d2ic8tS1iQN5tTaTKdGZwRLh8U5widN3",
  "key15": "2GSRioGYw1ZmzToiHTNpdvJCkiUJiDze5Qn2ftiEoVBWaEXwbZ4yWc5ak9Gb53w4nVouP9t76Wttc8rmD5WmU6W1",
  "key16": "4mvPUm6Z58q2PKnY7VNvVesUV6r619VqQckqBMNVz4zC72UUtRzFAdHckPXiVz6JEFhSgwDmVzsWQzFbKBeTf9e8",
  "key17": "2peZ4K5hsk4zfufYm3aVTnT37QTGEVNBJxT7q8rnVPY6UrH1vWET4yba5QNATsxLJRmpystQhU5LwYV44oMe56dD",
  "key18": "4dEkHjEEfgv8GJWjs6xRmk2ccgZf9UtffV8p1NT48dhkV9Mm6yjE5946C4QcDNEaCaVSYhYEWhTPMueiAWi3zU8u",
  "key19": "4VAhBrBCnwJ6uLeYGFpzc5NQQnft7ewPEEQQMHmMeg8jDL5SHjeNe3zhEkGUs9YoHeD1RLe2s1jkXP2QzTFEe2fn",
  "key20": "2vQRTaEoRegnWuBu9e6aC1YLduAMPmGdC6Zw1uyeedK5kdqTaMheA3P4Dt1NBujHufo9urxYDLKC671Yr4Wow4Dn",
  "key21": "4XpWWMZfXJVsVkWLhnrVScyrgvN1cwD3GRmavBoVAbYnFAZrCT2aACK6f7L4qr6jK4xCurydgrttbYfrVrukaARJ",
  "key22": "2P564oJ8kdttXJEpNPvt8Spc4MGEpJf7jukRRmKh9fQofJteaRmJ9fogtKCkty1zGToWpibzFdbjS7wR2k6tMt1Q",
  "key23": "2WYqhZDkN7mVVy4uaT6mHGZCg9c1SwcTbWEx93g6kiJYKkdSwSrsbjvZc1bhw1RMdmNdNFWBJPP9v5x9Bv3suey2",
  "key24": "2SsmnQUjFUCEyA7h6PuRKRa3wKAUB1cxGBpHH3LiE6iLAYmSZRcDUhFvQYtQhJvw9Qo9HgPGtEtez9esF7eLfrVc",
  "key25": "3qYThwTYjLk7ivhyTShQMDzk1aAS1md5xihfZ1g4LgoJvspy5ST9GYyAubZRx475o6Le2rJby8FxMEkn93qv5kdi"
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
