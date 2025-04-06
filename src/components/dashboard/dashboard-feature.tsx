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
    "2XHWi1iHdTatuZT7WZ3SnxajAUgsrEShWKHbF7F55bZ5YSyFsmxsV2GnLr6fYPsr7xoekoajzeSfAYdUQhU2qGFA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "41r95uEw85JACzMtrJKp4SVgiLAub51vkJ6gkzqoSx1n6hCZVVVLVojLm5Gen9Rb6VHXEBL3nHeVbetMine1StJn",
  "key1": "2NdCpzpdgWe1Sin34mY19zd748LGtXBiyUAQHuPxtZYjbyBGeaqwXWHQBEdNQScBvXngkRT3ERCgnhG3MtjDrJiz",
  "key2": "32hwi3T4NrUJEKS2gr33nKuNGvRb1NEW3XnfCm63cCrcxcrueXjnSUMbmB45wDCAjs91g8pATMhqdFwstfEMkm1e",
  "key3": "3Hfb1AbGMvmak47Xsgum34k3JU2d3R4wjrvUarBD9qHt5nzPj8jvzTKk5SDThPRJ8xviPpLXEJk2Eor1V1oeFaEk",
  "key4": "YqmN1z1jW1VMm2LUQXzzeVs6eYkpmNPzdeY7E6h1ytKfF3CK2A4EMVmEnYbRtp8iLrM2hmZYwaQvBSMzQeBCw66",
  "key5": "4BEa9w99MMGDLMEhh3R5ecv3V48b1JykAfheDyRKmBwpg1iMhrUGFZ1ZefjktALuUw8wF9M9YGiPGvGp5rhb3juK",
  "key6": "5gFeHAZDAtyxYiiZjXH6diCb3rqKyD4L9U6axsP4nPnrZkghwKp6o5kQYBvGZdkqXJLq9rzN7ikZ7ZCmQHkTNGtR",
  "key7": "4dvmQTiySHJQLKRd6tyndU7zpdCFwbBS7ksyHGgcfHNzyb2G4avtV2CQLNbijGV2Mn8BCd1KYCoJsfvWTz1PXkrC",
  "key8": "zQx7ncKdnZfTihpxpCXv4cJLnNDqLE1mVm9MPNE5Sz9rxTcRJttkogr52wyYBz3GaciD9zdLigA7eP6xc1XDEk7",
  "key9": "3rdVZqfSuHuApHA89GyBaQKY3c76SC8mhwQD82F11WNRPpFxWQicH4oyHkJcrzsM9nk1rqMT8srYcHDN5WR75nLJ",
  "key10": "4uBtLxvXKn5C859F76EEjEE2G6h6iVcTfHRieXNL4Ya3HY6XEmpw8WEEm5EvuDm6fbnwmaKWBVaEvybx5XHdvsLp",
  "key11": "473HvffbP7bY1M3qGhyBcFLv5fTfdc4DzHo3FnA94b5GyR87VcA2nipYE4ugnY97KYkkoEKVio1kPcrcru1Q93e",
  "key12": "4wbLxLMUBhrKWvgt6JfPsrdqSAhRZUBPRcSNGwjxG3C2QoFKRYQ3y9VNErmhL5Z5H6weBsi4sLKTFbdWds2Y84Qq",
  "key13": "3tJBPCBDi4i9jshithtN95Wu79TqEv8MuDU513v5wBqVJoXfjcBzC5Mr8dmY5hkPWyUYqoP9Yq7ZJTrEv9RwQGRj",
  "key14": "3FwQRsE6khy48cmzjvXz5jC8W8SKfU5xEL4t35vr2rnDmVpdgP9tzfw8eic8QsiG5KyPCbDyF4ZmHgFyUxEQY5uE",
  "key15": "2adpfz9dg4xE4PmS5gLjUTCAZ8LkLQTqUXRqTBAJK7GFa78m138hM6khbqfzVrBKGP5NN6HSz7kPJFhL49dGY5JJ",
  "key16": "3oytEdUcz2rz8cbSprwUngFdzQFFfbPA2igafc4KhUSYEPEoD1cSFSZaVu9XjoQecUiuG3gu63ikCnzhNGRoYCjK",
  "key17": "5Ni12k7xrNiYbnx6GDVxQMnn5PiiTsQAkNvZdo43tvmvJ2P5A2x7irQbuaykPfmkcMSCU8xShy9J9PiLPqpVo5ve",
  "key18": "2L6RvyDoBzGp5SCyMRVnswPKXpZzijEhazYXHQLLU2sodYpycu9mqFidgcMxmbMq7Ske61BK17jHFGkZ46u92TMT",
  "key19": "jANQc7TdPduLMhUGaFivEAQUX7t49ZHttUmbSouJxyE5N6zP7BiX6mp35vNuNJRod9FbNtnk1Q15XbFaNEduQJf",
  "key20": "5oKtknC6YtaFDop4qLsssj5GJGWwt3YUyfBnttUwPkPEYPNRaUcm2NtMPrvhA4AV1h5AvCw7srsn4M3S4nm61z8n",
  "key21": "5za5y92Q4beABDVk6qaf9Lz86QF1HwNAGSJmZk4MFXG1JdVWCqxbP8r4a8dwtqBCPF36FWZZQQ9kMB3NU1ZDK5K3",
  "key22": "2p6tATAnNeWrWvmyjVYhTqAxSpcXGdBDP4JrbCM9uaGJeHnq3dPyZjnZcoV4SdhSiscXUHdQmGXHtLDRDEqu5Wah",
  "key23": "2U1WmKY1SdhoEQN66U3DdnrJGLXYhfVtdtKrpaXai8FNdL1gMiHCp2ntyFKqhaH1eH56kMCkijEYhgkeTH3xLkpC",
  "key24": "36DDHFhGEq2wQPd4kktWnhQRGoAfGbhvGQAiZPYffLiQfgHEdZwBaYMJMHgHPaBLzzY7YD9HaAAMhjfNaXkCTckr",
  "key25": "3hrh1uK6ykGsuFJNyhd6nxPg2A3aN7B7ApoNJSrPZnGLXd3vaTDsofbjdQwqBTwpWeAgdTG9DQdbyqiCQxJP95U6",
  "key26": "4cvZjvzbiMWokYr2XGg6L8yhpkAUCj7yNbhfmPL9ye7U83muAvKGQecVv1ZxmcWHorJq8fUgZL65XGujnLHzMuSi",
  "key27": "4G7BBTqfvChSzL2yqP8FRKu18gXhgDg1SXmq6xyGLwCRtScvNDzPRgvWgT6hEHysoVaVfNmsx1GR4BrU5tDBzK7h",
  "key28": "4zbJDYLiPjv47Lb4DTu3MhCKeBAWfLFoSg7REPT1NQJ3z136E9gtWE4R5bz74sSh8WMfr7L4hsNzfk5A9LjrnQVu",
  "key29": "xHuFra2Jrf4S3BSsfysPuAB7A7JzJgnkr4zjTcNcwzfLADStkMnBSfueAQn7AVu8ZtEL8XVcKDgNpEGCZZubJgb",
  "key30": "4ek5fS9eJyNi2LUYG4sZJLUypfuCzw6b2WxTpp4jesLqeMNP9vDpChsYrv4EyNXrundeTkVBZRsfyccYFUVachCi",
  "key31": "w1YiBZQo3Q9qA1u1TgM3N2NJ3Tr23C3zJE5HGrW3NWNZtm2NVaBww5oZh533n855J9vbuNCmHQc2nerbU9tyceZ"
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
