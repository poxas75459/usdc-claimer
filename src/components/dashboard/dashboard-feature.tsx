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
    "28Dina4tMVKQjcNU7iEq2KiYqDBZQJASA32uMXL9bkxMDYhrkzdGEYqL3d7nir5h9TYhdn895hcTmR42F7DwZpPA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3PPa4QU5VrQHKnQamgXnaaJQkQetzH7kaTX5ySB281xezGTwDe3sXWhdzicXN1e5upCBo7X77PsPPMMu4YheSxyN",
  "key1": "4tg2PbS4mS49qnruRW5byXLoBJhxPHZJagLYDiGonGEgX39zotBc7SV17EuDtrbh1nNHzNJP2TXU3pN68Ciwt8Yd",
  "key2": "2RdGpCEtrFiuDQDXNMWPd3D8ZFQXYpTKcqFzgmdMd2VPRfcKiMuEhkkVaNHQhSwkf3BDcLHfeUn7csf4P5NTX9kN",
  "key3": "4ppqTAKGumDtESSKnbrRmKs1adpBJzqfhKQM7PzCHN9RZbUctcKaWqsxdnYPXzGvrs5RbLRMCyrU2NHdNv6tg4yk",
  "key4": "3yDFioyAcBTiociGvomSgbMQzt3PYju2TD1VGp7SHoH8cdG4yboZQKvFm35yYeaXd8kmfXtwiZFLNN7pVSHm7w8q",
  "key5": "5srggxd3S8mcqspBmLDSxf6qm72K5ogYq2yb7o22pqyyV6rsDhs9NEFU2MeWVhr1ZvjGgbXh8Y2BziHRyhH8PKgY",
  "key6": "5JMqnxgVjB5FvfBZbaRyLk433861xu382HJ4iP6nT57tqU5cTy5UuoVN2fjgVBGp3n3HFxDz3tAvbHHPWsN66iYd",
  "key7": "4cPyjfTMeoyFKtuYBQ3kutKyokS7Hpe8JihKdRb8mRdc9ZjXvFFxRY4H3zkDqqNa4KPLXbX3rHRRQjcyAWgUBAXD",
  "key8": "4c5HvTW5U99adkHYQ3e1fGAcik3AYSGkPC3WsSuk2r5KqwUNQ792iRq7bqjLBishbSu5cUWk8j32r8TgVBWE27ue",
  "key9": "31RG9AqXhWjMZTZbj9Z6zZYMNMDWQu4QLPmexQEHnnMHqo7cbAWHnJQHFLnikjP8NYjEj6kYAHtECJQbi5NGZosK",
  "key10": "4A7qL2jP9NeV8GcDhC2CENUXGouA7b6zghkA4vnvm2BNMMjBuzrVPEtZvC3TbahGzji464E19oKCMqnbwdFrncCM",
  "key11": "2euhXJeag7EiU2pu1EPKjEP79hEd4WNWkmGuk9nHs13HKmzDELZqZpkBPqd41U75VaC29LrP46CN94zApy8yDj9K",
  "key12": "4SFirGksxXtUByjuFMU4Jo7GNPBxuvkTMKjdboA3JxkvG5DQk3x8L3m4AB6m2QAEPdP7Nigg2aAFeDFB4wGHkgBx",
  "key13": "4BybgwmE7WR6HtWe3JdmQ9buodG1YiasWhyR8M7BjxYWNZdZnFUwgcRtogU2L7DDyDjxzKaVWFqxZx6Wa9kraTj7",
  "key14": "2Xs6Qp23HgjLkDbD2UTGjHRHSB8rxndp5kKFQo6s7gK1pxSLbkwAdZqF7fpLCwrUCzpyZhKvVDUe4uHRTpJqn4aa",
  "key15": "ArXWbP75eGtJFEaLGqyb4FuMHL3WLTZypgf9UXKozKS8CNxKxT48QxVzCC4bFLR1LXdi3uzF5Mbs3fmyEVitGKw",
  "key16": "TkTRDAuHTcT76nUGUSKFcrNmmAnZ1pfSPZSzLFonwp9GFeFLMFyVQ2xorXxdLHxo19TQtJ8ucivgmgPVtdpFW58",
  "key17": "3o1xjnZbHu6EoquDx7XHMxLJanSVzDdJX8V8i3jiiomTMw68wuPJg25cPNxtHrCxbQqp8WBWosGWqNgQRQ3Vd4Fy",
  "key18": "kq4jnZwjEtEtr9mUYQC6pc35FdLS4jmQ9cTqsiZzt26UfFWVWk1SyRsjZssQ3cbVKaM9uJvUzLGcZcRprcSGYnt",
  "key19": "4qLyK4KHo9UmcgdbXKNSBieR6xXGhuLz9ozgDfAmCbKZPcQ3a4yKMj5vyPH5Z887SsZEmECGW4voMHb4aRXbnjop",
  "key20": "5Bq5Xvx29wfQSXYCwqJqT58N2KhJ2C8nE67tkEHHAC23xuAAWwFnJrAjxTanjV6HijgVkGUKzumqW8znToRpELES",
  "key21": "2hBtMe6dpDmae7yPsiJMaMugoUqWTum1quFqCdzNQQNXHKR7n6GWGCQasaqnwrAwzeXUM6CM7fWQJyUMR2BjkYvP",
  "key22": "4EJqtjkSi6kMDwXrZQ41w6ncpn3RkHHJ6GCw1TgjEZcctgN3MJp8hcgbS9bUWYcsFVjrDVNyNP9iN9F9R3QGZX3W",
  "key23": "2PHqpXU5YaJDKQLFaYKEmjkPRC9A5SLLHE2Gj48mhCGKUh9vE7pBiyQ19AMcrgtw6Zev1Ty2TQsPBXufWeQJzyhg",
  "key24": "5MBrXrvNgNbfkJBuKPCUD6htHyKPAQx6wfajeZbU9pHkvJwy15ajPMAGCe8ibkHHEr1vrmE5eM4q4VsJRfxV5LHK",
  "key25": "4QubeZ2JiZ8rtMy9Tc4skkZWtBrptL6U5qaNCNjGL7Fv7AjFM58owWjcqBShQgbGUUN4iDtT8pdQ8LAyN1Kq2kc7",
  "key26": "49Q9LjhkNYTCz7bLRsen8475qdFrxP6ynLzjFjRxeYUHyfp93BaotXQKUg4mg1DjRnwco4y4di8CzasByaaoMQ6m",
  "key27": "2fweNJfZmoU1VV9RVx878z5KQ3wYZ154937FThLz5MMMNzJVvzkm2DTA575wAV8Wo1mgDJAtesoEYHtE39jTL3DN",
  "key28": "2dZiTnV4oBDcDfV2RzgE2KkBWZc2DcL9D6usuNRZ4kqJwCKcg8UDm5VWF9BTYm7vUkwqeuYFRm1wmVdRioNn6gnF",
  "key29": "TYM8ERs8JWbVD4WpGBsU7F64SdJsqdjFG2XuJX4Qn1JfU9gMEyxUt6dp35uNro1TaJV4BBbMPa4wSFQRH3bmos4",
  "key30": "3gwFxjy1568eS9ouB5iYRKG8r4bN65EPcFdmMaq3Ep2wEJrD9s9FJMYicz94BrDqu3GKnidHtfCCCAATD44xehpB",
  "key31": "PmUUMN4f9uGfrMRXzsvUvZaCSbwJD3m9hRvmC3DPErpVTwnv8Kf3GRKJ11VuGapThhFr4o4BMBNi2MifM3ygnTj",
  "key32": "3iNXMiGim6fwrfcm3veZqNY1TQeZ8dCxR5WTQYiyGq4BW7dECD84kmVFmpxZGjjUMaNBLJtfvc68sxNPVYNL6own",
  "key33": "5Ds2aQz8HG8R69XBzEkuPTwrGf5aYEk2w943sVWCra7Kt1vKJXjLrs592umU5NfesyubuvZvEipv3znZdFkXhGaG",
  "key34": "5VRnNXeXoVtDD2uLs7nbTw7F7nDpFCsL2552ib8xtYDyC4jY1wTF9CJLfHF4E4EeNwUM75McTwcpmiCi9tYL97dB",
  "key35": "3CYnSdvMQvXgSeD8oX7vbYsTwB1w29L8xJ2kiLnyHA9z45g7PkQDKry1LLRdvH9FHNamfNVqiJ9UGCh5Rzj7XwFk",
  "key36": "2KtCqxQm7g5fQUFcERDbMSsdEcQdcoALKtpGJHyydFc2FGYjLH5ghQj5RxUvGH84sz6vdcWvVtnDkRtmG5kBBEdx",
  "key37": "5PCewzF4gt4XhRdfKvjb7uK5mi6pmGrVkS6WH8ohp42Fp3ij8ecEZ75cUwbUZKgS56m8eTRkAxpJZmPBSz9ZDqAv",
  "key38": "zcYuRuvtJ1hjK8V6h1ZSNcQyWYTmumqAUUAeqNAgsT5QVgkqQhebLvB8AbvPiwnDbTTNdmyZxKkoFT4KsedMxsK",
  "key39": "hGG2aUekDECueWwF2E2MVoZ8ZzAnqYXwrmj4TaBJrjdsxLw9sUpijgTsf94bdBx41yprhRiYjnn5hWajfhc9YBo",
  "key40": "EWg2eeHNJAdHUShtBrWDsFCzXDp3P4FXaVVAJqRq8PGNwuvf5Ktgt3dvFM3K62iNSB1xBsHDKuLdCgeeN6tHp6M",
  "key41": "5EGt1s1Gsgygt7N7jcdES1EkJA4fMkn4ATEHUBaQfSAtvgF4SbZEVN1kW7Tg1xkcByr9FBABbQeC8TN2KpHB1mWy",
  "key42": "tzu7UquyWSmmdwRFQ1eGUXypAsBjDMeE3pDkGGJM6nmq9g82FAPJYY6noJCyjDuA3ha1Pv4H4Z7ukRbc18UyZwY",
  "key43": "3qBenqCKovUx9zHBkiSymYEo5tCXgJtrhkAXNmbLcaEUBMgn7cwSqarnHAKkfbRTCUUQm7kr6w1zX3rVmCigQMx1",
  "key44": "3tjqgWRSDzZAHY3FdxeYES712SA8N15tweB4qZ97HPytTJAoUxXnT8apWyzRktotEExfi6Mw5SD6W9Y76zj9cQa3",
  "key45": "2NY6eFy9k4Ga3Lknpijq2QyWk4Q3i9rs6EZqAJbsRxS79NmsZ2VNMa5fY4TGmp7TKBHFrsHQyiRDXJAiahSGLun8"
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
