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
    "MGBucvbCtKHf5368hD9TWzE3JodEAMcHspGbHQ2PgyDVQkAActXPEgyrLBvwaa6MPy8tRW54RRVJgBoY6Zt1Ekd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5ZHz3TgzKh5nhPehZQGorWEjRrCcNHHouWyqZ1m3zwqLdNe62ZJm9kkQFbbcPexAreTqw2hJChGH4mnWNddAnvhA",
  "key1": "2AhvDN45V9NJygeZykP6hunbxuDfeZv4JEuRHffa9ddoHJMfHvXQFo2dKwRrUjPvCMQr1zWiQHNsYC419gkCaJPk",
  "key2": "3yHG3Mv5ajfUDsWM4LR7LseKVkvFbsM5aFPyJo7G9KrejHDzY6EsntmqTevw8FH5QsMwAKNn6TQk2XUwpQCev5wg",
  "key3": "3fZttpCzn32bkS6DaUpRTaPjXVUpQiyEW9SWzWNbPWQRuFwPUn3T9AxKNohifEcn37aWYWpibeVm47y6qpahz6r8",
  "key4": "3dXgpreTTmzqksjhJ83B8HqkgnVMophTfbHM7kFFMwpmrwrX1xq23ejBMgTrvH25UXSi45UjSgRfHBLREQJLh7Zx",
  "key5": "46k7jGkgFzsnQkov3j4mLYeA2sz9vgYWJCLjebp8tT32uQEJnzdsve2EdPypZv8vWdUawyL1ZKpNSrBvM5wExZka",
  "key6": "5upz6pMDGrj2CUAukagBrdb1HvQR9cQioCsXhCLFr6oCyMqf3Q6eQypwrhNQ23fgpaHabd6LvwZVWJUvRg3Mub14",
  "key7": "2Gyzhzav3PbVf3hae7zi7V2ujkdigqqtNWXNZFLWPeRyY6c2WVthPcVZ5QLWgb4NDYvva66EHPWbjkVDb3fdGCJs",
  "key8": "2DbeaJGuyKv78Cqvgu8FopKmTqZndYZyaE5xsyqkfydiTr49LMRek4ZJLbiJ4kxY27hha11NeWHziiGpjaG7gBZA",
  "key9": "5sk5Q21CoAFszMFuuPniEhz9zNESAvs8DcKZ9UZfLqnWxUwPi1iC7cMFCwNnuaoJ9kbDZfWetND2YD4uihk5EDNC",
  "key10": "38kEZWwohpxhLN8i2sFjJcnpE8guNxTiC3NUjdJwrweyAPQXLpAn41XGiNfeEx5NoQbBNfLUT2nwUxh5xgErs4Jv",
  "key11": "3r54kdKVJf9ermQca5DQnQSx5A51yeEx7t5p1DpaV1A7smSRehQncAbFAbu4h3cNJeutSihWi38gRNrBrhZvzZgv",
  "key12": "5ekLt6gC4tyBSkiP6qEWBVj35NbUPcKxizVPB2TVoWkH2q91N4ysnN8nHwYSs7iGMw2muJKmJXqJ3n15LBik6ZUs",
  "key13": "4TUCmfQ6hMJqp26H6nm9b8ZtJYNcydSyYd5gzrxgGZHxZH4woYm1XQSPGkpfncH8mR8PLMpeHLJTttw386wgNywF",
  "key14": "4SV33XcDGfkSG2g68LarCSVNid2RbRhnyFMx6nz6c6RLt4y6B6a3BE6KW3GfrFkuDbjH6wytm46pLHpnCd1nqeN9",
  "key15": "3WihsPaosTab9sxMcLEptEvgSy4X2XXz99sAsSYziscETZeALoxbauSbawJozCoEssFb2wnXB4kRCDzhicja49c7",
  "key16": "4yqX9fJuWrVhLanHrQ1wUGZTrMx3QGPCkS5qMeFnMZoqAFqMN8ffTmwhDocqvUqWGiKNRToJdSdt445fHHC8pB6j",
  "key17": "5hAav2DGgb4DxCZ43ASoPsXCCkoPJvnjFoMDZLbo2osBY1UkdJLPnmsG9P4F7yVcpNSYhN6ikVrrxbu31MvdaT5Z",
  "key18": "EUgjDxYrwj124DvfUJ26v8f8TMJrTerEeZfE2MZv2oFWFTJ4LJe6mjNJ2CyZTq1gKjrss7L9ZmsA1ah9Bwrs89m",
  "key19": "4JbD17T4YfT3xF57oCaes86Ffed2oeSuTPUJCqMGXpiKHbRarq6fTdWZ5mo6PZZ6TKeG8fgPUGg33DCrWvKuWc47",
  "key20": "2tEGRXg12mrtUywyjaxKPtGoQwysB2sQKwWbgD63qBUqFQKPnc92hBe4tR9sDNdti3TvMiMFTNeQarcHgbn3LpFy",
  "key21": "5WowyLo7q6zZnQwWf41TJbmdBbF5NJ3YypEkXs4eP7eiQbRDLwMrtXmveJWXKtmzwx4yUmE9fspr2bKCPuzvzGzR",
  "key22": "3zbtHfLDdAHJh91tURoDCaAeU4X2YkV9qe9fUAPViCnPA2gugjKURsVYrfMZtAaBWxA7mrsXWK9EbWGJwQVPebcW",
  "key23": "5wt4FyVVB2Q9wsyVMXEubi76UhhuXeGf94wNnVpUQ519ZYC2siDWT2DtH1FMm3Xae7o9yt1YMCbGjTsnrN7RETDK",
  "key24": "sh9ENG9KkNVaJbdMaouyGeQvr32LJnuHM8pdjcFsZKysii7KKK3V7cuFAX2g26uzYZ2ux93nXwJdCq5ypoe1uXr",
  "key25": "nZjVC1LCW6qcm64irW52DvWWyevLBxTHLuW9WjKoWQ7UPYVotaz5zo6T4thZLqxbMoA3FbNKqEcR8F4eLqFaJtc",
  "key26": "5jbXZvCFVmSspahZ1eSHYvrUF9XugEiNUMGd8RRCAJfBoKoebPeDDPZXJNS3p5kW87VbN2ALEuV9uoydGDpVEiDM",
  "key27": "35BS4xYpdBThEHnxP8WQKMWQcXDCwhfCP8dmKi5jStjkjKRKkLhvfkYwdk76QKpWrsPfSKNeG1xTLCYMrEwReJuJ",
  "key28": "2TQ1xTeCtQs9WmLK956JNj8HXpoVbmgDy3Gpv2Gv2S43aPduxC9tAntyrnkgkNhMnhAZXzPnpt9eUq1kjkudAk6G",
  "key29": "4RPn4ME1exb9AnhvbRNL7Fos7xMjPt9nyGf3todWd1asQnW3ufeAhWkVyHJ63B6X5MRZ6BgyNa5FwmjiFAEmQbZg",
  "key30": "4avwLqLWctBMKfSg5fwEB4deXheQgoMvgpuhJ34grsj1bXXSSN1BHmudbpo5V3gNCkRkdt1L7kFY1VFpeqZLAJWC",
  "key31": "3aFkD4fA4z5pKEjLxxYAifNSASvyCF9q5k9eo8r3xRotamk5fM77kgUiVcta5GVYoSHnSNx52UNcgEPCyZeusbTo"
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
