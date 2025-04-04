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
    "3BH3ur3JAQPSKMQSGEHDDFNp9v3QqANFJsqxjxZ1t1J7ZwsRAwKJjJvxE2jFHCaGX7N5oXkn2d54TkdCfn3PjaXR"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RocYZocSxbKDXN4zcxDPBh92sL7fSGWh8537fvgh7fbhdUZEZYVGDRg5DLs5D5SNDmoHLWspxWrYrA9H5buhk2d",
  "key1": "3p634ybBYojZjYQ4FNypgJ2eFNXYbNSkfg9rvgaAAAau69G8zt5qrFBKAoNEFM7RQQC6ETY77es4p29j7ASEEPwJ",
  "key2": "64KYfikTLeYxPa9CzL38jK17eYm4ajU8VASmMtHLDFoZfHxYDSHeh18Nip94wJUBFAqWpdN17TixZRsxSXANL1m8",
  "key3": "2U1KHNTYi8HGZXVX3SFs2eLep4wQ4wMYY1VTxsgEohSswqLKtCmrXDUSMwQVUh9djpWLHM8VL6TEHX36X3GKm51Q",
  "key4": "5Mi8FFtb3ioxTfkak3qvNkvHwf279pjsRYpj5G27pepnYCJk5CzQFakSyWVSGcgfqKbeRg1CU2fnXjxJxKypdAFG",
  "key5": "34FbKXz3MjxSDrRnSwefknQGSgavurW67Cofaz82bStydeVPyjCAcgk8pe61H1A22LBFR758bJpUkGJ5Xw1dXL2Q",
  "key6": "63xMAJQCBfKTb22zBeM2FMZxKqhXJQfk4kuYp6ymv2QPKBkGz5N4HVgXwFgm68dqdGREHiQEnRWtsKDxaWG3dxBw",
  "key7": "3hKSZKcGc3cvLmKJ1QKgLhsXUDkSGXaeC5uqyV2BBhttg69K9GWYj3CeyXGaLaTimyDH9PCAew9odZuNyeFZVvcA",
  "key8": "bJZUvpxGyDLdEjPzQdn2rSpxhqG5sBHTR7uo5HiR2352cB7adYP5SaE4z9829HxZwE8unuLtDfNmAWjpRXgKQaf",
  "key9": "3D111JLtTwojAEEVjubwgAhdYfJADiyJqjXgeDfpG1TqujvfX24cy5EWNEfhWhpDdQcu2CNis6ozfgEjGw1hLDee",
  "key10": "3mYbL9WyRk9rAhQdSVbEVhsJbHpupM2LNNkTeh4HGLebyQk6KiCWy1QAJ7T6x3rdiXpBvhG9z3QYxmBR27hyXuCJ",
  "key11": "3Cxc5vjXcQbzE2XmK4siUBxhRb4hkEhgfdfV4JbV8fQGhrdmbkZ3WbEvNuPhM9np2X3PqhAGftt5NinAwHor4Jdy",
  "key12": "51WQkAa2okmzcJNrNHmtdQyhRsVWsnkxtGNd2RzhQhTtHhMEUt9RjvWnoBxcPig7oYXzyjwy8JEwv2VK2mXo2Fyz",
  "key13": "5fAW1U8uB3nsgLv6uQb3oohghcqbHubjpS8Gb83kZL61VgdsrhvH5MQn26SHQSBkPpB7AA8adgCkLqKL2WFaAbxR",
  "key14": "hhi4ZXWDKzQMGNeciCzvhNbA45UQxqN6VWdzwdmRjX8BzyfFLVmk7AvEo4nBv2LjcV1YnVqWn47vPr7nSLN3Xcw",
  "key15": "29U7GXS9X1JySnNCi5M8uxbjS5YBicjpE8yJGWRCKEs241MMamtUDDpe73fEpADgnurKDZBXj6xfxw7aSWrzy797",
  "key16": "GXC13gfJcj17qYReB3f3Y8F8UHbFWiPGTFFdmCDxNLTavrqcET8ugDemJf8NzsZTR1dRdwaTyRFyyAnZjMJF8mv",
  "key17": "2jvyK1kPr97JC2KSrcDE55mozCijWQZcdfpQBXCS3Ev2Q4qryhvb8xwgKRWfwPPjo7a5VHoUmHuPBc77w9BQ6Rik",
  "key18": "4CvVhzGAv2d1sctMkVFtFkagBiL6qD1v67kfcQBLRJzkHDGqE6ACBLKTVn5AZW69dtDDWF7jqTQXUkqWWsAtLW9s",
  "key19": "38wna5hzXoKfyoug8Bxsct5DMZFF5XkLKDAUeSVTWXfELL3FCQ5sDsYGkh8GrTvtQYPrAiWRodUBAVwc1gf4TNbj",
  "key20": "4D18BE1fdiWa2kot6yMxBHzY3Zhm2tb82aezDVREere3hHaBamjhr5zyTv9MNqW1ftsXJqWnL7K3KPvfaECbQmpy",
  "key21": "3nsMKspWmYCxo4xwXEdXNifzcsnmxe2KP9HsgxeSi6YXxMGnUPJisJUGyPuGA3XcR8NAx9Vm4WWX7tngmWk8m4jh",
  "key22": "41xvJS6nxAHuV9DxhoTv73BjXXdwG3tCZ97S5AjC5WN8kikikw8e3ziNHd3fVo7QCoGNAuwgAquos5bdATRxezmQ",
  "key23": "2bYSb2CJ7pb2xZ6oPXoF4QaiqR6BD3sPsTqRFm3169D2TjVhVhRYgzrcJWQdWFzMyh2WQYUZyf8Hq68R9LfWrXEA",
  "key24": "n7Jm3h1rPDcWZosK6e7TtTyuwwz9uH1xJNsxeWgHqUhQqpVpXtkHWdLwghLGUWSbpmDHvgsCoXux3AWakZvupmD",
  "key25": "5FGhzt9DHoguj7o5M3PH2tRgFM1PCZsbBwWCM5MkBcziNxtPbzgJaGXeieAJCmmKQr31Jq28k758bwZvXXgsQkC6",
  "key26": "JSr5PGqTPRXMAaUL3hAS94tcKzXnUxJ9xgxRrdPXGeEdkc5zVLVG91XMa2EEv3ZMgP4F9UZwkQt2nRjiPPtUxBL",
  "key27": "3JjWKo9pz5KjWrZz64ZhrKumFo5MNy881BYBvnEKcvQJGkpmm8oBYfKkpFzqKA3aVBDHjzkevNJL1pSyNeEeqPhQ",
  "key28": "4sag7uDmaNA2Wrsuw23Fra58yfmCnr9G6te37oFDDP53FpGRRaDuAUpp5GZPs9dRQrdKWPrEKELFvfZwP7gNoGqd"
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
