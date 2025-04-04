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
    "5wrtfWpgEaVc7uYheoBEi1xu28VVRArtFU8nrVJYYKV3M55xWrcBArTymSrMiS8wjoyRUdQSy6pJDbm8ufTrw9z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "YEfCNBT8JKKPepeZiPintmgPaeYbDpwsc6tNwayMzkMe8xodKdzoSCYLvYF8MDnLbt65Pot1bQa7zryeDfSBfDj",
  "key1": "4azvVvjC6Df9n72QxvApgSZLBHvz3hojUQRVdY4jHQ9qsiE6ZvgGfcfK4JQAKeNEHAB9VpPxsn6nUpQwVoHr8oC1",
  "key2": "2FDNHBdgrsAn1E3tymod5kCb9GxeTqTe6mtvc4bmuvja5JMx2BfBus6AsyJScWTY58YmC2YBv4wM4JKS6vfXW6z9",
  "key3": "4GTWF5eziBw54EP1VgeyhRJBht4TyNNmt6wfb3G6Y4JxgxAvBy5RJeRDAMtrGqQBP8e6qw9DNTu9R1E8FqE5E3yE",
  "key4": "55Kcf7p4ZDvRWGcPjN2nKZgVFJX5vtBQubfLF2Ptg51Us1WYK24ZvviYNctN5bJWc7FWzh7fegbXnU6YuYEy7ABg",
  "key5": "5KU22WpFQcjkmHRQqVCXvi1NN1TkgT4FEa6N4tL45979obkakXThpQ9NurnozCaJK2hjtqd6SDZ2aavPBcs74QDT",
  "key6": "3KfyPHVXy52KHfVheteGoULsdVufYDmNxeJthVBVJyHCQhj29QvKA7BkoPZSZw8hbRZi5PdooJTM2ZCWCD6FRRK9",
  "key7": "5jShx9nwW268GJm1M5Kdko1KVcqXbBEkWaJNKatQQRXsbaNvvMP9FtbTnRo72cN6KthV1M2JGmwMZunpnRz9fJtF",
  "key8": "4AeEEqTMvsr2tjmA9MCyEzBJSW87jttQZWnik9cRevof3Lvd5taFwdGQ3QYAebmVyFK3u8XRmfyF7eMs9CxY29hV",
  "key9": "2ZxBEbWngxzN9pkJnvFk7s14KxMWTrwM4uJcrjYtKo5u1iT2A4MsetSKEuBr6GDhDCRZErfk7kehEGb6o8HFAnWc",
  "key10": "3vdth5iQeN9pLkCrLJWHTQGVwKZbLvNuhoMhaN82pXJApV5V8ojfhhBXsG2WeNnMdfv6wBvNvuZpsfH8ZZFqj46z",
  "key11": "5ExjjneUWai5RS8FRnVnC2ZdRVzdZGgiDzvsfHYPLP7UFxkDbwPdmU4NXBX7sHsbtwVXByQtpDYc3tSjiPxdpTBQ",
  "key12": "3Bw7bv1X2ge3zTrMy2oeyPjxQSzbsotNvabkiEkSxBp5xAxMLqmpL2W9vpgbazfnb4i9m9tk3SgpT3J7NQ8WJ41h",
  "key13": "2gcyMK8PSbo4T3qvZ79kJSqHEAyPnXHLXQnsq74KbBxc1TMP6pjc8wVfj3GvVQB9Jm8F7mErnCrVHi6jJ1beZk38",
  "key14": "5YBfc51wQUEStqAtGXtU1QmxhVxK218CxmTtJJobwmZSGp7jiUPTg8sS2bYZpwgG2bjtiJ8ZfqwQdn7TU1942mVt",
  "key15": "3kVYPBRXMamkjx58yVeoCcN9coL7mXjmMdrEBceixNQi6FXU3sXDQSESRD8rTBBRGy6WT2ZaSEKMyzFjoK3sNcgA",
  "key16": "3U1xMNpc4s3RaKwtEFgDRuNPw475DJnRfcaDWDBqqYMn7Pb8jdwQYsayHG5chVveP38iwRUyh14MSVNLibYMc5rM",
  "key17": "3V4SjJRvJRutKstafbEcuEveox9tH8dBVPv3AjjEjzxgB9D39RPKz1uj17LowtWgNA93P7B5BKhH5n5eiYphddVR",
  "key18": "2Ym2JoJZLPvDMwxmpEB2snPrGNTaqC4LJnL8J7yzBo7nB3iKJncHyJ4VPNrTi2XbaaxmboP5WxXCwEXrh9e2euWY",
  "key19": "59VGEU5AHd8XZqCViQjHSqrwhsrZTgoHr8d87DTzy4Zroai5nZAsXKHu26BN8x5iA4McidSi34mEJS1uy6Yu8AhB",
  "key20": "3vsmjvTBGdRz6gn5j4xR3RD5S91xJTSpkzT3x8YubBVqjfyJGyAADVXSeggUPi5jJyFMUvqZPqwzeWGs927TzMye",
  "key21": "3LELYGLV2PLWPVz7ADpDqJfGGWjW4r2XvjhrvMF4PKW1pgDbjXy3ynjrD7xBT1PthTPyXWdJF4riCzYu85YkpKmq",
  "key22": "4rrDAhvm345mhMHiysXhJtnqJT2vNNZDi5aBre8yEwUJRmk1jFhJ8zWrzwG7vmU46Ri8sia47PZMrkasY2pP84eF",
  "key23": "3ZHgzQQzkC1PFCYdp6X2hyiusEzK7SQ3v5aPR1QxdC7cWF5sobsvow5fvQaHpDxZ6fBLqgdp5hgNFTYbJF8Tgzfr",
  "key24": "LRDM4yEypyPRKRJzEkvjjkHzTFRLZy1whsb7cyjfmbP9G7nq7wFmh4HiueKxpz13iTNzNLwHGzJoJBnZ8AASuoJ",
  "key25": "3BUVisVM4LKCunTxoJEeZgcFPQzZEhEy92UqDMNK52ZWGgiUbz5upAP9qYc2BicPVGB9TQDkZAeUiCzjmNGkkPCo",
  "key26": "54jwYbZsqME93X7Vkfd9QMHo5j4YrfurXdbvHaNaKVJy7kmDg5beTG6NxbdEKAewBvsKSUk4NQPMsvxYkg64HXRP",
  "key27": "5gJghuPv7rggSMStnA66q4ouP6gvBBXEvMCi9ehnTaEpvV4tUS6n2gE2fGcdbg1zSyicPcMRyLPMQZmbm3LhVNCp",
  "key28": "5XPcmCzik7TymVXVqK4npxiQB1E9MaiPCGDD7HoKG1YJ1h6q4K8im7UwbpGHndP65x9zNBSazkk8L7ejtMjnwFyJ",
  "key29": "58VhNVwZMgrnurWs22yh26WviY7Py8Cfe9Bki1MhgiBaguJ3bUgEyVkJwesT8raoKEVMENnW5t3UDuW5LD3PkLi4",
  "key30": "3rJuKf6pYpFX86SAc94UQKgLhSoViKWBrjLXD1DN47K2htqoHjsFe33E2zp9ob8MGPLxq21zqWmxiDAk42VVnrGG",
  "key31": "3Xg8o6VdNG6kJ5i82CMjYcfJw1qCGFC1GX54CwS6ybSzjqpnA34xVi4G4V1oCY2Tsmdh1BfNAjocNdpLWH1gX7eX",
  "key32": "21T2k8qwBGTtJmXo31PyWnk6NDHV5MDEfpcDLnfCBeGnmaJBsTCw7LBcVWMuoN9pUG9NHX5kv39bCt42DYX5uBoF",
  "key33": "4BT7P3ZHnMMw1CzcAxUpCvekxdor2wMnpUcgT5MrXTB16ggHAy1S5isBH2ksGLU57LVeS8a1n7stYhNwRmiN9CQv",
  "key34": "4WArU28ve3YQbwY6SHbuQHkXTdmu7n6jVuQQEHWszq34sfqKFwKFETZ2EFYhewvsSreDUQeuDq39PKj6tahDZ9PV",
  "key35": "3N6Pc3mR7vcfSJfw6Ywu6ZKddLdxZEnCzrb4vh42rvwB5ASMQkjV9MDaDbMekG6q1o92zkS8vvP92ViG7iKUZG6a",
  "key36": "29KpQnLJGj6rHmFHhUzBzf6i9LFG2iz9rWDiHsRWazRmJsuK4vuGyQ2X1WxQLAe9tkbHAL48unk7nz8ZEQrBNFp2",
  "key37": "4W5PuDcju4wWvWUaXVbmzb5GdeAyDcSUAJw3GfvvA3DW7YJwEpFDYUjhxRzFhaGkLFvgaFpdgzGT6sZmM3qmeziH",
  "key38": "63MJWEqtkf1wWdzhCbethKYaRoJhBnyGirjCNPLUnvyL88Nue5PJrZ8YMiszyNFch85fgkNYF1NkSfTRjvpo7YFa",
  "key39": "55YdKJYjijYUq5wQ4ydJN6mozK33xQGfDx9HD5D5Lp8iqN9irnV8VGqTi2ssBuXwL9hYWgtHsgai6stsMsyTg3CV",
  "key40": "4vMLgf1s27WSJoS3dQBa5WD2ZqZkDx7H5bVnmRSHAK5rBK6ihAjtSrQAYUa8RVoGfGoJsdmN5tqigXQwWdmKy8wp"
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
