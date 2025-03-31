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
    "28SGkuiQXArSJXMK1R2wp5N9U5KTru6sXrKAcw3HAEZHePPu3g3UPYHycCXBMJWYcZALvpWW794zgErfC49b4xr2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Adp3APBB6CvUERMXwWaWPu3beUz9cfuyMbo1cHkgsrtfrw458LC5Voc3kXuwcuEMhGJCWagt5jdaefrYj8AhsQm",
  "key1": "3N1XGPerqMGBy2owvhzvYq1ySp8sguY4fR5K2qD3xCJtCTN8cQKTUDaFLvZG1fz2C58WakTpyJvnRt9RcKn3LFVU",
  "key2": "3HoyXMPmxMk3WMdqkHZKBt1HPCNcMHo3Xnd66QZM5KU59uFHMXcPgtF4n5YBYb9zncGFKfau698yXcLPAefYSUyq",
  "key3": "2CNr5F3kXHRw4A2TiSAzaa9xBGqzvfneUfMQu1tYR9f5U8ADaSfkbXWA7YeMX1wUU9e68pnYYJKidwWLGftJVDU",
  "key4": "5SGJV3cupg5QYM9PWuCJG4DNmqjoZW1Nc5zSBFHHY1Kx1VS8PWDL6fs6HridmXHEmst1NMVSXR8mdPBXdoCntb11",
  "key5": "4bfXfZi9Gyw3skqCzMTLaYYUBmpkWU7qcgL3fxGMAKVvaBpKecL8eP8NFVPsrPmNq9ZpcqZAnonhYHxhSLRw5g3f",
  "key6": "5diQrBmDZHBgUAP1Cnw7jEeKJ78N37x7cL2DSw94WXU1ZzKHdLP9iEpLiSX9q6jbog798EYkSwfVdgGrcSugA6zn",
  "key7": "3qzkgpSE5HRPBWeGyD6cq9TZNXaa4q8UpNDeJTpWXcDKcHnXDLgTThecY9786vu3dqBn6RjDErDotJETuBiwH3qg",
  "key8": "5EK5itGG91fPVRz4s9jmAKLA3ECRtbFbHtdM541rYZP3f4M1cEWPf9iziDy1WC1XbLJ7RVfAexm3aTRSK1qBMjHy",
  "key9": "67D6soeJceMUJA31NFpA2ywQfQvbPDQKvmF5Puy77ETiDWQMPd4tHTtEfBtd9ddFKFb2asuzdCw8N7EJDBYRCgam",
  "key10": "zXRPv9Ts51UG4mW6ddUUZfJRbQarr1fLsWxyDoRntN7gVWE9pkoCs4ZVgNAPuiYtxtbks14Skwg3FEzUEKNEWqy",
  "key11": "ftn19Rnu2n1pCMocS8ABxVhUYa1KqpardZuie4D8zx744u1dxL3v8g8fd9TcVPmpJSVMJQDYjXFJA3AyHnoq5dK",
  "key12": "uUcDhbCLNykk9MtF5TKtfYaZ6a5A6iebK9Ns5yUdMNqM62d6zFXWsjC78E47yzE8HzBafX72tLtJjT18g8EGWTq",
  "key13": "5zst4ShwrHi6bmfKZZkUpb5AUPKRoQbq1M71UMZEsRjHSS8XjyoFr4d38m6yULf9ybMkohq1SVaPBTgftEeNxdrg",
  "key14": "4JJfiVmnKEr9rxHtCa7FHhyDBQK4BMKvisErCp3ivjHqZ2dvAem7u6L7JRHpHDZ78Xpyt6xqGVBJp4npxsaSZghX",
  "key15": "2rFZCCsrdMWhiRgQja8eRni4oP8EJmFri3SkywMvokDDhch2diaJaQVk3mjcUC56FGZDuMETccVaxP8eS54q8WwL",
  "key16": "3hB46yPaJpGez3Rfbugo5yTSaHzKHvfSK9TRPbe5KRVnx9bcBKVapbMR4Q75TxscUbUPdLyk1jELzyUPthSA5Crz",
  "key17": "S5BqmrdLV3RvxsSDstDALqetx1HQiB3W9W7N5u5ekH7233ZuJCh6apqsgy3SrSCNSFkQkwuujGTsmYwcG7WGpCR",
  "key18": "32vtdjCoiLwrT29yr7jmeot51nCGkQ3WoG1iZN7vGvRHMzUmaszPRBS9ooVXWnLb6SW7jzpvZTCPsp5bjCZ5Ls5Z",
  "key19": "3jFHjA8WwCfP3MLvpkxU87q5WHoa5QbsuqDsS1qFurr1QtTR481C29DznJpiStRXSwRue6F4Yq16zJBQUSfeVtn2",
  "key20": "3bMccNGGoizhGggMZ9UjdYk4qPn2NAGrVDcWfqiwrsYrmWF3JZMFNyTxd1qnKUBfYCd5UngM7Q9CxbnexRN7q94k",
  "key21": "5FVgYfg5tAE7uqweWphB59CrE3J38BN9vs7adSoNoeXRVcmBVxWKWrTiceanVPxzS2UH1eaPKofvccgMvpahiudt",
  "key22": "4mLY7MB978ZGvs2kD5RZwnjLTAcQSTRUKwodM3aqX1by6Mjv4F1U3j7EL8aodh3Rta2YnrDX7X6ZUhqmBTa3iaqe",
  "key23": "i9qyh4zQF7Qkrwgmz7EZjWAJnRtqZsFwBJv9sJJ8Ua2YGHrDXJ7w6f7aJvLKUG67U2uQXaNaxLe2DGSeno3ZGJb",
  "key24": "3QTKL6Uh3tVV8FgwqRxoNTZAMDwDJLSzcB4AjKEA5NuPghQijcdbp8JRBnNWek5o7EQH4rmurg5HiYV98cQhe613",
  "key25": "4ppwZtXnqJrZ3FFdgVCniH3HfvvhKKHTcX2AhM3mvtfZeMtyCuztNRLFAy3sofAPq8zUcthpkmzg3ytUGJQS3s6g",
  "key26": "4e9LsMcheztvSWKgn9h4vhiCnZuBfJuy38iTigsZgUmybdufkfo5gsYF3oZ589cLJvuzKqNL21KgGsCfeKvHQR63",
  "key27": "2q7NeSH88D4mytqAgpYosLzE1z7sbcEs6CQuDjPoBSjpEfdZAbFzmVukA2JoL1apPHkAM6EHLLQPTMjyZ7XmZoEB",
  "key28": "4eKwP7us2zgs855hDvbg9ougDMgMgpgfCTj4GgTXD8BMJ5zb1Hmc5ppABSzLUUi384fqtq7kHhFu6rgsr7MGQGEQ",
  "key29": "3eSdg3EPMFN1cqWJ6Ao7a5A8vAp3aNoY1G1WAyrsNhY6uzKzbMDmCinkFuLU9vX3cnBdcjURBmTedQAp4dmi8HJF",
  "key30": "RNTyf9EJgNUj2d7HrpLTmEp8Lcd218aEqpCAY78urm7q2U7uKqLj2QRwjF5Fyaj8k7sKhmx1NDC7kAYDvU3y4EH",
  "key31": "36naJNwQreMddkefrDMtRhd5pbaVeuDYzyaVsdnnrJFSJrnR1SJWhUye9dronsMJ1Ntv9btWWFV3T5kPCbomRzWv",
  "key32": "6z3q95JAksaKU2VF1LaxQPXEUvhaYimvjxbDeubU9FgDNVp7dyhYkrygHia2GLmQUpe35dmTQvcnUsffVZcnAcX",
  "key33": "4GK3KSCePKNuurAxHYAbXfQBWc6bGh1TEc8FG7BXAKkNK1Rmpv8cu1zt1j45QSmdEvLq6UXJTjduVyM5y995TdNY",
  "key34": "3kFU5AvBtL7vzQUt1wiXHVo4eSzgZ11qkEyzDLS6hsEhB8mC8gSCxoDd5pULpDJCMbJwcQUA6pxHCDxdTLdD7QBz",
  "key35": "2yAw5W94gZnG1YuZ2yuR1x3zJYyauvkfvWY3HNug6G93vGc5RXgurGeKq2X9G98xhqro1moxr9y5uq5rEQ42pu2Z",
  "key36": "cDyJMcnpmaGBhisEPMsA2NXZRoqDqK7PyYTaKethYM6L5Y9ZaTccyQKpVH6h3QvgfNGkd3Y47RTuyCTzu8aWTMn",
  "key37": "4v5wmNWT2yCiimDkyx3VKvgvXqHnsVG7uWfqR1ca3kwyiuuHvmasRnRpC5nCBZ2quz5rzcqNe3qg3GbnQvgf3zcg",
  "key38": "2PNdEEZfCRiWeQTvCrwQzYZaDBDE6tPjg7qik74NK5YThvhiAb7QLomYUhHz4zTx7zRH3UB8Di3Q7g7XY9Sfojaq",
  "key39": "3QYqPeH4WCTfuAxF2595LkMhimeokBSEwGMs6rLpcbhwoxxy7ByXkU8QyFWrVRmxnqAWoh83Hwn7JVoajZAdWEfW",
  "key40": "42U83BAMjXcbsLzB5L8xt2naZWA913ZRJnZCsSsvDr39y3GarfgP3wezAYCWKZpX42GncHoJ9cS4cAwQUiUfdy4C",
  "key41": "jHEyCvGjxZQZ74ZSBDuqDWpjCU37JFpWD4rH3vQKzfqRHb9KwzpKvkJVVwD1F4fyfrZixcC3ZAbCbJJ743YdKwJ",
  "key42": "4mYZgjzvJTQgX5ANZufQFwjmrYRgqcpz64gM4WjCCgGsZKafMPcbNRnqY9JsWwGnqWdrfZxH4gb2hn89JQihKXU",
  "key43": "3AVRy7oXknCrWKcXca8HMHQz1ELb8dkceofDh3WQPaG54Eerqrm7RReC4WvLh4tvWFwjS3SJAvjAZLGH5Yf3ihJV",
  "key44": "53iCTyi8MNPuaWkWeiznKPCGRJJoPG4Lu98iweWMo3ZEEbt6uYYGAvZ1su1f8oobq64GDtBsH2FoH19ZYXXNkLVg",
  "key45": "Ebk8VgJbiaTUeyv5fG4igTGy6ZTYPttrWxwcwSe5khEyKSertMhy6LwNPXcRfUaxY8AifNuDSraZo7AJiEZr2Tr",
  "key46": "5A77SYduXh4nU9Se2JsnsamugAEQzTgDNuyyTQApVQg4hzfLLijeCmN59UjgknuB4mb94SLqhcqcZgPG8Jm7T2Ur"
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
