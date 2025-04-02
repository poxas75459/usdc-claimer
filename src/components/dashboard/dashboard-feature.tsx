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
    "5gbdRXXsCb8YAiJfi7QsasSkMgoADGWdddDnxuDNUEVFDc2pnKp7QeKr7ZEYi7f8JhYhokF6i578fWFWXVjUE75k"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5U5fj7MRSDc2cJnfuj8o9rdgHxNs9yhhER9oxgq8S7VTaacG3mS48adfnYGsAv2t25hWz6jyZ4pmVEJxAWbsVkVC",
  "key1": "TUet19PvMEuvVYwRNC21GohTZNYfaCBCbndpDYStrRE4LE1nCoY7S2KCqifE8pTknJ8zM2Lmp4zQL3iTmf4pDAk",
  "key2": "4cs1jTUrqkbrTK1Ew8VeeY79PoaZDRDaVtVmDDdWMax69L4t3CBuiGAVn7aBJW7Fib8iFunKsiJy5W8Q87hhaFgx",
  "key3": "65KEtEeLB5ne4oiioyboKPivCoeGALkWEBi3BTiULWarh547KH4z7TcXp3Qoh3ntbfRVTFJ441VQx5kyNZDa5cdU",
  "key4": "23NusorYZdYuF2sBZps1n1FiCqJVkxa8znzqm6DTt33rmLSutLtt8QJrqxvz3NHiD95dZrRh59wi7XUNjXqBkgWo",
  "key5": "3pYmuW5YGAtmwa49Mqa6jG5FGXfujSK6RD8CcgiZ9cj6ChSexvDcifBgsJhBq6HginmhJWh2RA1BAxpL8F11gu1M",
  "key6": "2q3vnPgzR92KXCMs5GmyxsGCZihoJVMDrL7P1rtQM9MsgAoArm8Fr17ADKKUHsrJbmsBd28v8i1FrFQg8ExuRifx",
  "key7": "5oifYGQ4dAUp469NvW6Sv8BS33gidu62X32TH4AZQuVgrwpRPCE44s9VNaFADnaBKcfWJ6rovWxBEsRekXSzyj9M",
  "key8": "5a6ihMxYGhcDYGuxxpyy9PtsRCu7dQJnkKAGRBH3Q5X49a3Ks4ZXAWXc2sskiNqT2HhkywmNDE7aqCWEmNeA2XSv",
  "key9": "2MSe3wP4i5HibYoSfkjvRh6t6GRD6qWVfavVm6RCi78ecgMVPAGzEgSaAYeiZNT53Ez8EPGw89SPbo1WLAq7FSKZ",
  "key10": "2sVHPSPD3xTZjztGBimxEtK6wf1pztDAc6YNQcT4wus3MxpnNmkNH75g1rqFEPQRNBviykCrtVeAdmCcnbu8kym3",
  "key11": "46H6MwU9XyA2MxM3SnfJSZQaMaMwRtnmecYVZpw3sUS3NgvxsJy9HYVJRTzeSGyBwkiZvAnuQ26G7npDvtMMXLAY",
  "key12": "4z2AV3FtpR9DdmxDqZvxNDQo9fBdiGbM84ZQuCiJWHVrrYurQLoduUj8obojzk1VFKaemUiod46SneBA7WyCZ1eC",
  "key13": "2NSuHKEUbBW4xP8D2KAWxNp6b5XuhQkq5BT9T5Y3ekeHkxzZUFaQh6oPVHGUhSejiM6u5AMbXs3U57a8u6oWHzSm",
  "key14": "4PbWHDLznazNdpPUYrfg9HqMVC3dg6iEP6qf1d51UCU3sv3ZdSeg4Byq18nLKaiMpuxqBFxhKyRANTUyz23DE4MG",
  "key15": "iEpQ7Gre96A4bvhKNMGv3NSNbLGJnRQiR7Gd2U6TjyvKo4cWzUeExjLWKWNsKKU1f1mhpYHsLQxwZ5MNgaF353s",
  "key16": "839d9vh1WWy3LmUEZEokJ89L71SRk52PjbF5dxdVyhKbimFkbgvhMmxXLHGTSWRsTA3kDwwmQHK9h1FFZjG7Xjk",
  "key17": "2hWycrbJnhFkP66k8MvTNM9q1cKFEVFe69skrEUVH844h4C3H9r6rzAhVS2GEQ3e7xmzxDJ1DdAncfUcDKpA2qxM",
  "key18": "2ZrJks7g1FwqTyncjn1h669Bwy7UGu1XpLxmLf1sPsndtJZhoko7xfYFySWRMCNfjeSeTZp255f22vPKfLWY9Fkf",
  "key19": "4knZdeRiizSxSoFCgm57hjoPoDJNgYvhWw5pd3p4D8ZFubEAC96oUawJEeFVrhuYwKCMmwQMDEBS6VRtWY6j7V7h",
  "key20": "2qbNEvwJxFRX4s181dtJh6NeeWgb1bJTXcY8dJtSLG2m4DcKU66Z1zawsFDR7RSmWiq75JBasks4H3gMb761ZKL4",
  "key21": "5miYdKAxbNqm4uGoNBTaN4WUYat83YhRD5TjyTxgMrtpXjLSgbeW3wRS8kPf1k52duqmc6sayUACaB89CvBmBeEQ",
  "key22": "41ETyGeuyuH2SzpRsuvmukBimVX68ZvqAax887csVnS9ZF5eXnDuVN5fC5CwNdrQicBQnwFgCwJGh5SKUSKrYjA8",
  "key23": "YvEaNFuFhBJqGhtPKcc4SYLHcYDNH21tC12QQCGgGpAiC952fW6f2BdA5qB2cB2Hvz5HdVTstnGZ15pT31oiVxk",
  "key24": "3hjT93k1Fj5oVc7itvVhAYYDugDetCqV5q1MFhKSDZFdo55iKGZ7aNiGmDUx3nk7BLcZYYDax9yJwiwxwBSv7vqy",
  "key25": "23RzAuTNzdgkChC9rNcZm5HQ35ShuMp5nAN7tUQSKZsytw4R5aWoTykUJW1cnL4wbw1zzFFLj9qk4DfdvhcN51ZU",
  "key26": "eXCXDSHedFR5d11mgPWot7q8dbqNN7d4eu1XKMRBm38j7xahiiNHPCQB82DuQ6j4D7SQjwLUS1ZqVwiN7ShX8xn",
  "key27": "2jFthhEoyZ8KxRCjjjc5hQMUVPP6GMvv6otBcVL1M2zmdGMvnUP3qbLQNyBz4zxvqX5Jqc6BzHyvrY6NDNpWk9vk"
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
