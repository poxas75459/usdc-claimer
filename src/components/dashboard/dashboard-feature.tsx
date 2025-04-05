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
    "5CYoi8z2ksQA29Hx2RkgEMbbd2hrJE1N285VXwJhoDqaxnee1Mox2hkkUyZoyh3KRihhs1DzkHUgcrWEQLTVJZWM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4gM2Tijd3yNPsrocmSkjs7q6TkT8GjWGeDZZJx5juG8UybpejxqY1TSgUwcr4KgZwc4FFq8qBSLGz4pFrMdyVjyH",
  "key1": "3d6zPWXdjdXfCBoGUzSUt4GW465tFM3Y6Kb1ap97tgtzcMahmZyLJJ5ybVtfTD8kvnBoZM4ihcxKVevqxvfNLHeE",
  "key2": "LVPGbQwjGTkhizH2Cn4yt325X5W9Xkfs7QZuVeC8fpVM7gF8XsTfWZqMzoDtaxmtg5pJKCzHaWuWNr8SzJeEVEn",
  "key3": "5EzhaKArsXqq87RXLoor3eo7VRpPmGwtV3gcQjx3KKT2uCmXvTkqDRoBxzbJv99GKZMAYQGC8L6ZgGJRb97m3QUB",
  "key4": "3mtTCus7oFiBRCdwiBzsLJWVyBfj9FA5nQQZGysbBzfsXGwrr8t6DbF5YXVeqMo7dYu11HytbaudZU2SUgXxy8Lv",
  "key5": "5HLA2uu2QMkmjkSUKKtmQPqn5fCWKGbYPZynSATqsktMV9GbQxtnEc5n3KGpM2iNcPaopAebtn9BN7cWrbM4Ufn7",
  "key6": "2STB9L9pEk79uZMMQjFZPP3xsx1a7gtHk6BoKUoXi35FcJjcPMH45cg23vHhMumCwVZegqJ3fjCnQ8vq5MQz99us",
  "key7": "2CM7RWXJF86YWHwEGyMt4w793WwLDzsKvKr3LaFTwzJkYfvWH3RGzCQcetGkSm161WknGj8tm9zyK4wcJmcwx9E",
  "key8": "L7C3n1zHC8rgX4a5YGSNAvFAr1Ryhh9Fn57USZ7ChggoQxFWMNxCYTPt2xwfaszZb6o6k8o4zKwqcDNa5S6zqHD",
  "key9": "5noyyNEbfxrKasrD7h4XGKoVxX4vFMB3LxfMNjmuPzhiXruCL68tUd3uJAtaS4qgSDL1zNiFAPWigqBjaHMXXxib",
  "key10": "4EtFr72jqTygEUcWtXdyjCqWAs1p4MAcwKMCLLcHXXMZKbb9VfQ2ZtmFFYm8cEgGvVmGtmZgFhzmhE7rjTvm45Jn",
  "key11": "wxQcghzaMEcgDJR9Efe6h4PGoG8WRm91nYjtpY5uhdadPk5Bao8jB55FCuPc4DXTLLTF5U42khVHpJFTSr5sTdv",
  "key12": "2oLMaaTTDDn3YHMnvM9sETwWuZf4sgjo8Vr35g6EvVwZ6BvgYRDuCaaa9jkCnQXMzJwdd4H8FRB9t9ZRcUmUzjDE",
  "key13": "4wrqnyV9hkKQxrvprkcdfB9Er5HQYSZVc74Ls5jhcrWCQoWgkXdB5bjLX4CERRgBzRGxeVASBFXKHX18V69siAgZ",
  "key14": "oiHKFTCM95xMezzMnfhXzfyCoBDBECvYaFXBcGzmnAZemeZJcQyLoY3SBbcmAzoe4xTNNAQxJQgWHT8SEjccFqx",
  "key15": "UBvHVwXZNAJ7wKF3e6YQcmY8uJ56XstCny1NSQkKtxKiLgjF7fTqa7f5ijVgPvdUaDMJwwTmsdkbYzwcgSMEoTe",
  "key16": "3fvJmfPVFGHx7WF1ZwEgJVP1Grmz1zmLw7oeGKktbizAtFrw4G9bS3S3TMT45LVBZmRo8nForstEMobxXVkhBZfz",
  "key17": "2WWQPcreTgsS2Hccx7E6bcpzAZBWCtLnQeDDSjTpJxzgFzapuBzenct4aFNiRqMfeJgnUds9GuTT7uPGFqwu3qWb",
  "key18": "56tbQU1fS286kTyVgFzCytwZgTqksJyyK2npe7Z1oA85oLUV8QuZzCKugUCjMPnoWuKZJTrmcpuy3ppJ48krMJQv",
  "key19": "2zxicECMmwUQKz5z2z1sfgY8H6R8T4QBicCSaLUacAtmBGsUWMu1zrFHoEfhiVJh81LYvr2wzazrRN4W34gVEYv5",
  "key20": "22kLRNMTkoSWycWpHTi5TL41zfCssP9bWDpQTzAR1XtYMPewLnsV8takUZe52vEQLWPXQxLGKXS5mMPsepZwJ6mr",
  "key21": "5EUum5L24ax96dTR667ftRkmZedkjwe8scPqnfvqUxPjXkhz5xuBU1XwkfDwPCP8LDYXCKk7FggA1PLNuXh7sK1r",
  "key22": "2mWvNKnVduGckMRmGSsyeeYRQ4VwBxdJVpo3YaCp4wJPNGXn5rq7LjspSBDKJF4yPKdee8SZ1qMn7NCfcpZFdbk7",
  "key23": "286HsZfuhkiV2c5uy6U5CWTVjhiJbSKCpdYxids7mDjosD6GoecdZm3jPk3VaAzAHqG5Hmq6wYKoZvomuhLpsign",
  "key24": "3vjGEWZNNMTtbkdKBfq5yHJdRHJjxgAJtM3iQvwev1sLQEZHWMbTBaqJuE4P4rWrGGmG34BX8sx7Vr6AvVvYFxbw"
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
