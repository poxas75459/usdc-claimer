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
    "5FRb9wrkhV71WL1LvtRrDaWMvgkX5rqryLAt959uYk3Mcon87oTe26p2P7FdxEYMaGj5cMoPWc2GLDXxSC1mbuQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4seNrP6ihE3N9E1VmXnJmq7pz3oejJNhNjMBJjub27pDU6MWosdxHqeKkX1RDKBDtU3mdQ5Amh1vLuzQt3kCqvVG",
  "key1": "4HP7nrztBsBVwJNh62T4R6CsjMAAmrtocFFmihV92pU9qCKC4Rd9RC6rDbV3yj2x3rzZ7RkAB5paPpQhpTj41kTb",
  "key2": "yCzTtvAEA5XUktpwNqR5jwtJzge8Sh7v3kf95NjZU8aj7AgivDBCKbdCes4QzTf2jxLMWYejiDgG3yTeLLvjmtG",
  "key3": "2JoMKJ1MLJn5DDJivfabkKf7hFKDU9e3UXLpg6jpYMma8gGNVG9nCnpeA3dcs7dqAeCy7oe3T7M35bEtYv2JepRP",
  "key4": "4qHQapyMmEmantTVg9TzYxgSwsWynKtkiLnuiBp2a2nxLbicuRekYbdN1P9xYpSS3EGLueosR6XagoKPXvyWRZJ8",
  "key5": "4dAihQfFnj1UkcXUDQ2BtaLcPod7gd5Tn3rsTsTu77kyEKi3Ho6GNmscpp3sdqCr42x27qv7rGW6CqjLieSvjYPg",
  "key6": "3abFvjnig7QP7doUYwYcoMKJ9omRSFAWTMALPHSuVM7LpoKeUx7mHpZbi1K2NiFn6XPcVA6wfBzD4Fd77gTTEgme",
  "key7": "3MkhNpBrNxnp3Gq8kXEmDmSWA8AePQpdUUgWC3dQm5cVSqfNre2DdyozzBidrQY67xsN9J12brYrXVoP798gYbr7",
  "key8": "3HKezaQ4Gjs9JVpMmeSM6c1Aj2HBAbprZavZry19Hn7kXfUGzZLrE8QGUZzN616ox6aEcBM5hs9ApEtperrUwZgf",
  "key9": "4bvNHvNqECnrLpkq6mPavrEcUzY1m7vjB5CM3qvJJBFrr97ffnNFaT8mvXkZ3Mubisp98yuAaQPpXQJq7Mm2Ryct",
  "key10": "zcDXJfKiPXc65B3y6nx6dpuUJEJKfFqEFeT5quXMDvDpJ4cUErxVtNoEkiYuJaqd87KJENHh7cXBwwbeALkDsHA",
  "key11": "L46q3kEkfvaxdq891kT7sekcZET1HD4Hkkm9VzLtQ8QcqukNJjRrv8XdtUXZDoogeAA5CS9wfz9JJZpjCSR2Khd",
  "key12": "uHMTWdH77AxNrTb2y7EHtm9pduyy6Wwip2WaHvLtL1qi3xj2Uq6uft8BE4YQGVqczLLiUxDJqnCmUV8bjkxQLSJ",
  "key13": "4G5NnPFiafEFWpjKa5fEutHBTmh3KFaiXZc5ii3tGN7vrj7JagmveEjY75vq1YAyid3zCMjBzsB8ir2FfcG1TSqH",
  "key14": "5ezoPi4qvLq43YqcURWnsDbbfeSpck2XARnc5zwuciuvCb3MZnctDNkMonjz4nvstcz7jcV4fDbGpkzySxh3sYam",
  "key15": "5v9G76oig7QUEgUGMZjnsRTytmek3F65uE2q8gZiMoEuqd1nY7WmD5BcLhY945pXEWRYn1NbpJPWyyyr3QG78dwv",
  "key16": "4BibiaKoLtV4niCkT1jUacLE6rHUF5xrsBPqT6RC7Key7aG7b3v2G9ekwySXLjziFk62hzJ1wC8jGoXrwhtsPMiK",
  "key17": "1xyW6g2m8zobMLj9cdJyqcFeCRWhSQwBW29H6ZZVm2QHoZJKRFugbjdwfn1XeavBF8isr48D2nFfjCrgPShmnsS",
  "key18": "3wbVV1inEjd78QuFr5nkeuypa24YsMHinomHyv8qXmRUQknaDkmzWq9jcP4dXzeWrfgDrcpTUo18FUvqqdMSp2qn",
  "key19": "33ro18TTLbTM6VJPxYZDSViL46vWs4SDp2Z3aaH63ZXsK3tJvg3uSwYkayndqEZLBRP8X7i5TNcqz8MnTrEicMXw",
  "key20": "MVdPnyz3v8HLDkUVso5kBhBaSbwsc8qt8s4Z4fCjT64GnYsMu5AmFxwEbxdNCBaqqKMJdQSQttZafwu1HwskbWm",
  "key21": "3excbt7qz5sPqHSuQbXxzy3hyYJqJVMWCRqPWgxYJJ6EE7DucBJnxLwAFibjkyAQb5LNJq6Vhci8syMqd1RDcfYq",
  "key22": "27vRAgsZDs73wRbadn9c2txPnV6qNhtdneTD6EE2k1xfQi6fNZqkHfgjw1gYB7TpDV6U27uK1tXiTFhgB6A1GpEA",
  "key23": "3rpjx3MnU4qs1w5Sz6ZTP5MRGGTpGAoGPtHwbusSW7iGHH4K7skBiB1VwBeHVCN4WvMcU8RtNq5pg2bMFBPrcB81",
  "key24": "56hWUBUZu5mtrdU9MNhN2qaE2oX2ysthD1r8sWHrzBoEtSKtJcjUqy9Pz2M9TZKfmTRd9nw5U6dbf8BHaew2mho9",
  "key25": "3BxEGsgkrTzDbKBNh4RKEXtQsotvxyR3bzLbXAhnRjeU6bGkX3Uy8u5TLqW6wVAdFJDWMFoSoUDhmVTRRKTFPLXp",
  "key26": "3r4LbNYbXrK4qupqh9sonKGictGNrpDdBfMnMxShwNikJMv15URp3m3xEmqRE2CUC65oojFMeBo3yz2o853tGWs5",
  "key27": "4MBGJnypcRSkwivtGfVpgtNjkT6MpwWfyDQx6VXK8h3qeFbFeorxC5jEEDB4z4sGbpByNoTYvkm1LYL3ZCkAaLmu",
  "key28": "5jjgUoFwerN9jgbCBw5EJxFnbEnc74A57LtuuYjrciZo6kazCH6yjco5iiHPqwHcsnCztdLQtmeywxZszb1x3FUj",
  "key29": "37W9nep4hgngHc2fksqTsbVimVDTjDq6k5xLNgr24TpUEX9J8sySkTGYnT6S5f8hjj24srP5kdK7QV7yi3cms7FW",
  "key30": "4zUJno5qU6n1fNhDWqRUHLL42iBAP4YGpZzctxD2M2CKNYhcax2adnxD5oUbepBiYSoJje9rzhhQZST25spq6F7j",
  "key31": "3J3qa2cR24NJ4mZx7qAX7M1gVMMpUhCQLpH1URRztU9Uk4v4LnurzYJfePsKpnK8i1STrFJoV2iWnNcJndpDuFJ",
  "key32": "49ip4NeDDFJdGxehCaWBfagBEoAPg7mX574WQiUpzaH99EymmUdmhuAdZwRcNpQQxBfY5kgHwgTD5dtt9hdcdYAv"
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
