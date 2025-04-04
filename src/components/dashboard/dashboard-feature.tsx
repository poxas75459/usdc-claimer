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
    "2UWehSkqBD4CKp3jRp1PceuyufG25ijRq3fm1RaoJXgHjKiKnWT12MBGi3c61jPMnDirh7ggQ3ridk8JRKhUAUBk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "22yHTWBkdEdAzXqqZjxEi1X3HWxRpVkL9hRfLwu4rEDohForSJkG5hZMTTdK5csP2jpDk5H2oNPJquPT2rgnVEtB",
  "key1": "4xYeWSaCYQJeMEgrfzbLBQo89ta4FzrEDu7rZHYAzntFYb5DZ1ajMdGWuvqbeG3e52f4szJvBrS2P7z9dbEy9gBM",
  "key2": "4QWU89PcEYbxpX6qHStLEYZGfhcXixfvQkHRnyxNTCqkEmPKzQt9h6stfsu6LMtmD3zPpzRUyvCBtsJPD8hvj27S",
  "key3": "QLLTM2BBZjRamLwhHsLpc8SwGs64qQt3zRp1LkWRvcDEmPMxmPQ75UhZnvN6Fnpy5YajRUPiDMcderj6pfRFMp5",
  "key4": "4S4zPymGka7ZoiNSjNnJkUrJ6RPY6Z4U5GBnbSdxjHFZuNiydMN5CEf11Yfq8CBmyHCMZEJsE2wAP8rkhmE8TA6b",
  "key5": "oYaiQ3FRZMLrNF5BLXL6HqfE3VfH4VWWTK4R8oTReSv3T4fLWXZ71SaxDE4jMpcMZUUXNEPC65bwQfGx5QTvqxD",
  "key6": "THcQxRY3QyN1KGuug5bZMtdu98HMNVhiNt1Bve1ixv8CoHucn9VfqMBTrpz5tbmSrnj62PQFJKFAg3acaaSjq74",
  "key7": "5hxu8y4AeiQLvprJ8yWDdUoCS4cfjAr4qKP7JmhEfkrms4YJErEKuFe4yjgHVPsRftYiokE7Q5c8YZUREAp2YdoC",
  "key8": "5Gh9hPVfwM6TfnrFeCLuTnem8kga8NXgjVA6s98XWnft9rNMKEScoy8PacJKv6gpBTeBuR4n1Ta3aWur4xL6tUTz",
  "key9": "5HdMkiGV6N6bRz4nzDFmfez4k65qEpn5h8EPv4u6fSaivnLdtmz8Kduxqxp955Mt9pvVUPHA7d4t8sSNxUZXurYh",
  "key10": "36kPUX7ePBaCNBzhde7wwhhwJ5AibaZ7bjgXG7AAay8jHfRHMnckbCmKttuFLAmayxDNgTHmnSWHFezhGNndZh6b",
  "key11": "22ZznTq1JcMRTyK2CNb23tTEJNWQnp9NegnfzuaaWxDhr55R3tgEc1fx93C4sDL82JCHKHkWy8x1AQWMwFLpx834",
  "key12": "5vKk7bSp4gHi6uQwtpBGVv7pM2MHkfYeXdHH8iNCrajAqEpK5GNWc6AXWHuuH4rqnSmuNV2ARKgE8CkQwtTvuyu1",
  "key13": "4xt72ZJ7stD4tzK2KCEsnVCm6KCw1AZvjrvaVzPp1Hu2yEbZTbTgPNtRvAiKQFzYnkRSHEQE77SB9pEwejN3edFj",
  "key14": "e776iSUGLcj5D86nySRUxgBHCWHtjAXRHhTfE7mAJ92N8ceRN9zfbWYzpC8rCRfE4o7BTsJ8b5kjPuT8t1SeeCo",
  "key15": "4i1P3uZ4YtZwcaeN97wsRNiDKUSPWgT5RXRryvd3Hbff2V6npDvrfevrJy9VVp8f6b235HVzv8e9RXyMSas72YAa",
  "key16": "3m9SJhnsnajURwqF4WfwE4sYhMG41hpr9VNkTfcmK3kRdGwoUhs2rX985fr2pR1jMXNugNyvLtjCP4xrBcJxSknX",
  "key17": "SoVJNugzy6uYK6z9MHKeFrFSyN9net5qpNvAbbtFJFnqTqrKLLeDYB4pWoaxSyrT5NBqGKUSr7sfrjGtu3nnhTA",
  "key18": "2YYD4BmJcjRfDZHzey5WpoUjFXAikqfPRXQyMvhBcrV29SVedY7dgTAKHDH1LcxEvnYaJSSxZNUJyU97gprG53Sk",
  "key19": "5r5ft3jrif9Jc13u9xtRvxwdESn1pqSAnhB4onfUXWHru1N2UanWuX1hU2G8xQvTYxoEcWgchEddfv2DLX5nqXXD",
  "key20": "51VB86nCv8G59BNLfkSSwovDVmmNWHd3jXbhg61XkBAUAUcSBxMmbDGpL8K24ueLmudvUEFaf81nsbHRCmFdPyJm",
  "key21": "2spEcM8psxX1ihxkt7yBoVVY4ZBtpX1Sy24iyxw1qjFeiT8zSZ8FqD7UzBfXPcTEEw7ZCA8R3es4NxtJXaAF2rmc",
  "key22": "27qCYCDEWEmLqPmmLDxBXMydzVCADnej7h1G9g4yBD4LuCXmqZ1CHJjM7bPU1ZKhNx57Z2qL6DCdQSuCuYM6Q4Ee",
  "key23": "X5LMiJ4jMF4TKfs7uiHzVhJz1DWFyqzyRC27eSYgRk3pwC618ARqbhiWqJrAwsCN4LQHqsY6SMsZe2ryT4RQowN",
  "key24": "ZZLbBH5gi5E1Kro12yhmJYgjAjNWkmSLuJekSLC9mws1utDskJ6hzXq53XQ2NtuiEYUgaJbnAKPJ33vyhBGWU2Z",
  "key25": "tQ3nyZkfVHNyA17Ah5bWXi8sALPLy7X44DRsKSyhyvNp5g54zh4cvxvU7bH2p2pWix5Zc4apE7b4ChPiNFgbHSN",
  "key26": "2sBWDk57u3dLDgqrTDaF84axNaAPPFqG7LTGtqozDNtnqe564dMzk4uNQyoqBboJfaJLskDcJVNJfrZH8wieP3gr",
  "key27": "36JWaZ8Lo3vpWswdUGDGfxJ4ZMab3jg8s4rd1HSLrvnqVeCM5HMY4UbonyGVPvQ4Y3MYW4fSsf8kvit8qanyNhKj",
  "key28": "5dmvQp8fcU3WcRHmQWBffN1Srghj1w2JwPJYrjPLrebzS4cP2qciZRaNsoMHKW1kWzhafQRQQ3GJtAxNKVA5KRiM",
  "key29": "2VXZfaxhtfDwSJriH6QjzHsn9w5eD8xwyXC5GmZAVuUXvDbsmCF4jZx5KXtZS75ieuTK232pW2WnoEHnsvxuW9Qx"
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
