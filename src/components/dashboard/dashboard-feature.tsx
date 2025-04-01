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
    "3vPyQssW5BryVR1zNdmy676uEmcvaNLCk26MtRb6KxfapDzcwLfyk8y7hVu8WWSUXmfKSBS3vWv9abNPQLrQBCeV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2y3N1iX96q8xaiRgzGkKDsxbDyYLpVPCT3boRxaqesKS6x4JSXZv94mc1FUE2KtzteFcVSXKQeH3t6D1Eni5wM6z",
  "key1": "4PrnbrK9hmKEEFYJAD2i5D2K6J73WT6Gzfp6wdjScDre4ZXR4VvA6SYuS3Krhx4k3wtNeoRsq84955aYXWNrNouC",
  "key2": "34GX3WaGDSoDqU2rgHidQcHYSous1vbKNqx3mgC3PfPsedMCLgVumNuUZQoAM8G5QxDpUdMhoT9RQsaTDq4AMZCL",
  "key3": "5vQguw1CHPEtokGhiMhyd3avjmRa78WRRioC9MAqrYMaMyQtvxmAUn3BYzeZnSbX39ac7eXYb7fAiXKj6Qisxox9",
  "key4": "4UizKWsMDEYQaQv87LkrQYHhRin798ESrrpHNCNWYA2LCefGopHcTiSzKpypt4jMfUCnx5my6iP5Tnxj3WiY8n8k",
  "key5": "42B7iXeRCxLSX4y98q6vpdiBP7TrFbQBEgTehi7AxoW4fAxN1tueY2XP3bkDu6wjSDRsMfnAwiaJTkrUHNzgSp9j",
  "key6": "3swXgbff5xGPUic3GAs5kaiopGwrhtymb65L7WLYBcswvg198xLNa5tu6vo1XgDNRQ5Xj8i441BVUNzqVcHtzdmS",
  "key7": "63Luug3krdQKzYzDuqvxfjehTLRMyjvtjSVKB2Agyhe1Fkukd8HY15oXVuWpdvumy9htRtkpgrXAbbrsNQbHkPWh",
  "key8": "4qns28xobKNFJDR6MmQVL3cHy4WJ8Yv1vwXgh2MyvLzhGGKAw2iWdgabb1Kt8x9T8n2rhFiR638UDbrRazzAk6BN",
  "key9": "2XgCHHA3EK7rJL5BKTD6NF9C8ayvcfAzGMDh4KMVxQgZefZZAUGM9NS4Gd2Ym58QcXermd1QQ7aCT2MwrAbrePSr",
  "key10": "3MkzhkBtybR9GUsuWCxFgbZQE49DfR4gX4aPqdu8F7KueJeCKCnDD9pYrZvkdsSPAVE3MYtefyGiHeymCJgPjmb",
  "key11": "NJfBE1zZawkuYgfTmRtp4sK2XRD2HTLQzF7CmrjMcmXncVadYm33oZCuMdteUUkF9DKVjpgF9WNnzSTzkv9Fxtf",
  "key12": "2R2qY9rxq5EJ3oxbgmRSTCJDJqWQsnEcURZqrgGYGxGva3KMcbLgr97QALSG5tTNFJC26CwTMyq9KMXXEarGwadB",
  "key13": "5uksEiYCbzaXiETB2tFspLfRaSt4urKqWgw4BaTGJyW4k7GdVEDXMkm5PJQk1MqXZGVDKDfhPxzSEz2zLshDzdkS",
  "key14": "RUwqBK3qLfL9A5pP9YTiYTbsssUhXNoh1JuPEsZjKKTTKuswwcB8iYyTfEXTCoHzsuTvNvZUTh3tmtT9P7WRiFr",
  "key15": "3rJK5kNy2uArygPCKDPawTQgmzTERXunCtLGrwoFphPWTbUwDcLNSCWZUNoJAXT14xz2Tivjz7jrPRhuQK86Ce2o",
  "key16": "2iMJ1GHfQk3NC77kWxvogx6ijxEfWwozKaUnB44agFwXAT7UHNvwdpdgaWVj4Vqt3JxiMcCQS9Bwd8aEURLrhJLi",
  "key17": "6151FYCHHPtULojAgRUNFKozfhRYbARDvkWpxbtgFJyiHNoFCjAR3dFJHvrrczbatp8s2NTQJxuy78xbPijrQq1s",
  "key18": "2pBVQULCSMnRHALS9z2H2jkhGhXWaBbipJrHT78yBDgWyZx49keP8b3h1Sq3AvidJi3QYhb6Dart6isf2ree2vgL",
  "key19": "2AUVuyk7Q5Eq2SvULv8aEA79AL1NxCuaYdivQq3q58TYK726vbFoxxhfdjdxwM8fwgbdqch4hjCxhhvNkYHbMmeA",
  "key20": "2xCGcZdw5Xa1YKWPK2PnKjUqTnFGCiFhG8nq5JS5PtPSy1Z95GSr41kvkkTu5BbL3byr2gt86Yx1UrbtyPNadsWt",
  "key21": "5g1bL1cHdNJafYe3gLRQ9QP6xyapwSh4qxtsfLSkoYxrVCERQmiPf2qmX1ZBsWEgdRECx7YUqrgMUKwye5SkuQUo",
  "key22": "37AyH1D8cmvk1F5W1kAnsys5nijC9fiFccx8v4bHD8jTRyNNtg5YaDBmXCzUv6ZNMX3a49gXUqn1pfpGoesxk1wc",
  "key23": "3SZMnihX2nEYZAPiUnvPwEPB7BGbL95KiTNyt26LghbZX48BmLKzNtUtxrxUsbCvotFBSJJKg3jDTnYFmeRZm7as",
  "key24": "5eANnUb9zBwq1jLtyWd3cFBfD6Zh3gpwpJyw5giHP7DP1x9NYrznvdpWHTRyNRcK1VUfWe9Ho2RbnFdzGjEV5HEc",
  "key25": "5iU9jv5RnzJf9ZGPd56eS2Ydz7RYNu4rsGwtQ9A5YGMZTuEQCAGra2Lv2RAo1SysxHX87gaGY4nyNiSuMVtpuCnE",
  "key26": "5itJeExAJsGDm67pKnexxiNsLPwhD65BZ4oBWdwbmfs5FxAo1EZdm5J96s1uABoWXuPJ9mj31zWE4YDXUocKw34V",
  "key27": "58zYzXW6DbeMQhPwnRd2CViNVW4PQcE3wKtg9zmPVoRbcfdjQyhD3uV9oNAyzA8fQNShCTNa7eyy9hpG8652ZHki",
  "key28": "52aHhNhbuGhS7CV9Cs3Gt3SufQoSGQ9SoLNUF1L52G8NkPF5R1u89Fm1h7syRdyfRxfuNfm4SjqLCgmPiwxmw4d4",
  "key29": "5NQqgwvTVT6MVkLVGyD7srkjtSqAhQ1sjdKW8u2p4djiYB1PWHQZFha9DwnqksbW18AnaUJfPk6AspJa3Ui6m277",
  "key30": "qZwRdMmpwDH4zyA5tRNVXjvCm4wgxhnkFSnkR7KNqcbJSxBXT9Mg5uMykPNozDjhQMGr7DGh7yQQB1LSHs2JHhj",
  "key31": "3zD2rZARgdvWiqTsCbeupT5f8xHBndseLid4PruapUu1LDVeVnM9xsugYty1xiVnxSd5Xu2g4yp3AH7oggAs7AD5"
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
