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
    "r6MHVZmHQ9jLBKhSsw9eAqNqLJ3KBU6o737B8EVwL95BvkKyikgAq5HgQE33aAvyFxZCZQp8Jc6WQSZZLPQz3Xx"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4cUGEXVMD6WVDQRuvMRxwDi1hi3RkEAfu4tPH4QLiqS9uCErxzvDSuzSeqxLnn4dF1Bq9n2TU1534XRMiBXwYNnp",
  "key1": "3aAzLvprfvKjqUqCga1A1wrdsCiGxJcsPLCqtLvihADRT4WRpEy7a9vs6XLJ7LR2XC5wuLswpQ61tScY4R2D1VpL",
  "key2": "3NK9JZ9oYgpYCj9P6kHM9rTP3vc483gjdp7YEfnzB7v6eJ2yjAYn8w5W5jpb6V8tQdXjAtRRWDJoprC7HojaamSa",
  "key3": "4RKrbKb5iQjgKPat8hashZL3oBLUC2mdWKjDJxrXSA9kznzEZYmUw8ZUZyM9br615P9w7bt9KYRkYede6HSBbf6j",
  "key4": "4zg4zGuFpSANVPjxMdqZ8nUsjfxDBQGfDCfEu6RpJEtisfwDArxwz9SK7ML9NFNqWQc92moVSHJrbwQ8aWd8EbSb",
  "key5": "3QjwEGiTQXQMPd2aFQa1An1ZXMhNEbo7VSQGmcuSVMop1BNdkxS4SQ3ruG3cDCF1xF3UePKPqYvCEyCkJ4hrTsGv",
  "key6": "4sXNA127nKVpSLpQqT7fN8qWAromWFQRHe3NqyJh9SNtfFJWQYwRR77ap6pRF4LqYeYsRPShZjPHun5pag9JEoqd",
  "key7": "3qRirwD42KDm3qo7HTYc32s2tWoLPm32y3QuX9tX26zBbLGEm8KPb4ZT89PAucGrjcPtHjKSYMcdWwVkGqNKZfcS",
  "key8": "4sUT4CdJhc5v8WEGFvxW4tBPuMbUzZFp694stYx9XPKzECwkh6iez18kCigreEDdnt5dLZ7LnVFndfYZzVnXBDmR",
  "key9": "4JxMrqELLtjaGYLRUGpeXFcbXtcrJpzaVrZ3Kz5BcAr2txQuzaC9f36HxLBdPbQT9D6nZTwHfMGb2RgFgu4hWM3",
  "key10": "31MSWHjhVi5XWfxAxHjVgLu7LJC6nJ6CXqYnVdHa1MrRPPGEz8XeGUxu8oqvKB7sJjV7nMpXaBs1MbpP7pcNArQD",
  "key11": "4yGjop7fMg1MU9DZ5dWEbQmp2ViA1iYpQaZ6mBMH7TYJ7FX14aMPmpSf6p3AjcQ2md74feanYPHricjREVCdFBSa",
  "key12": "47hajB91bpPAgj3LrdDZJ61b62sKPBKQo41Qnmp3TheY4JbXUTaEuA1jf6pD1Xu9frc5MEMvsNWPveh9uT7XAymi",
  "key13": "4XkSJShTdtMmecjgckUwq42K6i9GgopozTBjK1GDMpDFrJAUTReXUhpC8Vao1V4RRF4zPytfFThJxt6YioJoawSX",
  "key14": "oaofsD3tnHmnhqqWnfg7QozkxRLp3yZB1NRcdSKHy67cv7BHfKLGUZJ64MLkvjMeUsCUSMW95DnMVcqvcrHD7XU",
  "key15": "54KQjstNT7Am29A8FyJpiZztoVwFjrvaKqeNB8o6XVbAXYHtL3Yefv8uhREWULKZB98EkJpSSme2sizeMA2Kgsfa",
  "key16": "4VGLsGzTugDkkXUe7C4yVmFiKEnML6QiUsno9vtMD1Hqnjt49oWjwQxrBUatkJKAFeBeTGM11q2hLfj896t2vHp9",
  "key17": "EU7vVXvTXSAyAzonnq456kpCjBAZUaDdwTgojPb7GcTNk4agbWDVEk8xubFT9XTciKCeF9H5c8txZUvmhmBV254",
  "key18": "2xXzhys7rsz1o2Ua8ZCsEfaoxTasDfNs6eFVX5dTrhLzAkaWKJpnZ9NWiXswiYnLdNAGmvoFpBYNdq7ocsJ3cAmy",
  "key19": "3XRq3qAS1Z5Lc2vnAhiMXtHdAbPkg2BAQswg8BDyMqf1Aj2P8CM2QCXDKcCBWoJv2GmMqvwCEbtY1FWEMZyy8HeU",
  "key20": "2WfXpvQFtpnPyu2aGL4p4VG2Ue49okQqA8ucszM3r92TF5CDuLrc9yCJMEwpMqHVp8AnzHXd2wKwDiEjxphSoCpA",
  "key21": "4AAeNvGfAovCBFjVrj1bq71LdSnecU8PhApSqtz1mwbsYveRGgtRTSp9pzyrZ7vnpqKTRQiqCNGC89CL9LExi3dE",
  "key22": "5RVPVmEn49g3DzTCQE5Et9irVSEf9DAc1oviaf8CVYWqxtnSNZLjVD4SzE2d5dcfwWwEzCd2aAuo7djbbHRxxnYY",
  "key23": "2DVXe5bAFJC57aiSfxKSir7CD2JWG2WK3RZ31B1aqmrro4kddCBLxJ1h4grNnQHXvEoNVbvYhTGM7PTs18aDR6mA",
  "key24": "4d1F3mNcFbK1g9WAAvjQq4ZzkfS31PrvFEaY1SbsYeddy51XykidcCQQbuxk7gkFFRvKkXeDUnjG7SxE2tzU7XQT",
  "key25": "387xWi9kW1t4x6oTGE4SWgdpSHqUDXoma9iahhkwbtzQb1FxeKpqsPUABsDfdwJbnAaPmF65s6iR7vxP4uqCbDzk",
  "key26": "3dXtnHgUqASx4svybqWFsW2au5W3GQ6DX31NFvgEgWzSMYaAJjdJUGXE1CbfEAY3V9xye2TKFwpmCdt9FhL1XT8a",
  "key27": "QeWBYAqmYBJRGHi5bhP2Gf4iKSnsfRWnjsX4gRgDoEb4gbzQahAcRnDD6UqwDSa1BvbjX7Ns1dyvg78gkJsGvSp",
  "key28": "329pCGyD8d27XBW8yD68TwGtXa98HPjdzk4eNiMeVNYX34yPX6WMkWknBfiw5A2p9tkdPoH3Gasirjf9dfUFZqr",
  "key29": "A3LaZiuiuBF3L5V6YTg55ZaBnJHTJdgACVrdejhJjC8TKsjXUsM4A2oZ25Gsyc2kCXWE5vqKe8VZS3Ju2cAo8uJ",
  "key30": "4KLVbxow3rjav4GbKoMmhPmeYVBx8rby3iqh8QSySk73dZ8G9CoG3LzeB3bkFxypifu8Y2RayktEswxRRQSG6ht4",
  "key31": "65pidCm5j7kpZaQ7PTNCZ5853nxT8wsu4iA23w9WCSGkYbRBiNpcKctbeSQKhRpHEoJSbLb9KoxUiNLp8oPZVmJ6",
  "key32": "2kzPgKRvU9nxnmKxHjcZwpqvmwPmut1J6v4jmm2kuY4TFpuGGT5xQ7MXi8YwMpc51w4tGEdHdxgkeYz8LUGBmjwZ",
  "key33": "4vMAhFQV1fdKeLytcgxiLRSeuzeByM2zkXyCk8iWLRSAKQVGRB1Fw8DZaVLG8BFz8b1r9qbBKFy8vDYBrxNhtrpT",
  "key34": "fa2cpbikDHq4hcY1dM4ESHEMCTUc2B4DE53vhhjZxNwSPcfqtS6PNKDvoWwU7wUNQgWQfQifmLt9HjisrZ5KEcM",
  "key35": "3qHtZ8MMfRidxU4W4pnq1C82Bh7QC7MqCjPmKcm82vNP9vnsRgBaCe37BUKksrN1iFE49yEz9qdtSkpvd3k7tdFS"
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
