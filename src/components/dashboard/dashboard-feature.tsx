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
    "3FUFV1Q7ndy2Lr6njKs6p8s2M3mkE7JciHHYbx67KfDxQZpszMDWhHQViegPCfka6VSf5U3qtFpYG1mtX2c4KKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2N4NqF66jQXBTAXb4ZJHVcGtJr6GxScFzGgDrgsmPUUDyjP9GDGvRHLTue1PkzgUE1w7nRURNSv2FT3qegsnBiLS",
  "key1": "4qPMiDahr3hRXExMmbSkmnqTLijdoMDpu9b9333xra4YDp5WngaadEoHFpdQ7EbBzHwpLYJSkGZN181iNRPVoePX",
  "key2": "31USa4RRQP3pKjEKokPmMtwE6JSRRrBa9WLo5XgqwyUxciEqoPSMaNvzdfhKQXbJHT2MpHHTkwDq6XCtCug7vEbk",
  "key3": "657YVqqLZaNcnvRFwUNUvj9tXa26a23ymmDGgg4TeF16UVZd3PssNntvuE9kAjqbzFu1fKZF6o2nNPi4n8vyjHBX",
  "key4": "4fcx5FkLCxfUFCtdzCVzQUb4VeuVADoR5E3vX5DbeDiyAMWXx5YLU26gv7aVVEKHSaqaXweHXU4x43WdmZWQw1se",
  "key5": "9a3QZkqx5QpLCe8rpdjLTVidKYSiN9Knaw6LmywqXbXs2smjFPQhezXDWEhzvpYF3fqKnFR1Nk3pD4m7TAirbLm",
  "key6": "5ZxbFcCxcMgV75FJaMzTBzn7LnTa1ipvKB1FvuwVwKeYYBCdY1M9X9DyxgGujzve43barGYBkcPRDUurWFmFYLEy",
  "key7": "4USJ7sA6tKyLUKN9bC2xTaQXEpwQyDbUZPQMemegYCaHRR2gEx5mgiS6L25YAf7zEwEwy4oypVkwRknsWDN8XYVm",
  "key8": "33UGbMBY6dasySmygRMmVTuoC1WutwQGZY5Ef5APewWtF9nRZbCxyFWxoMphszJ7Zw2gxcaT66aNVAwkwF3GuWtM",
  "key9": "4Hsoj9Uqvx8z1zqaVormmvvYawfqSfLTjfEyvFUUhFQ5xz66ARvQ8M48tpk5FTADZn6sfn1RTfRRsp3EdnTGCx8M",
  "key10": "2vxNHP1gS93FkRjyXw1avGRgjJDY6vnY9uw1F4cvBWic4JfvQv3wV2X6hU6qLxQVUWDHNckQS9V5PPQFvLJH8Jgh",
  "key11": "4BB7kebhf6hQC1g9tEC5XfGSw74NwETaiYbxeB59psDqfj7pzx5WmC3eb1wCbhmxDGgZQT72d751vxhtt1sCY6CF",
  "key12": "2vMF73PZmhSoUB97Cm9WKFvLTe5Yn5S5pfA65mmPnD8DTDDVs5cdFkyUuGmRn3L7JLgEZ5SLwxMt8EPXxMRQ158x",
  "key13": "4pK3d77z19YnzzALQ5F7ZFe2qc6wyfy69QC9GYbWj1Fb3U9fhZdyzo2NenVDJyHaTCD4oprWjwGgAV1DwHMNn2Ez",
  "key14": "61XqPAhvhp2JGotoniieEreRjVsAvmeBUPSqRBoNJrS52euZpPXXoAets2RawQfUTUd2ssWC3DoM8AwVD7PswyRL",
  "key15": "46yC4D5eDEmVLtRobpVRqBW3Rvo6xbhcUB7hJedebt2X35LfLLQkYDrAgEckpk3QADXNmoeEJPVWnEnYLJ2r5Axf",
  "key16": "6XT7gLhiuS4uoDAXFMjPxis2DGKH37fZcAgoHryMqYZgzxu45VH8trJBeSjD8Eam5rMToU4GJGpvLWxbKSG4gmF",
  "key17": "yLqtFhqMgR2SCuvZKPx2XXx4W9MiDFDcjXWmtcwWwVDgU7UkPg2inmfs5D4vS5kxrsTjtjKmiqQgoPQJgNHL8zL",
  "key18": "bRnEC79RzaJ3UnqBN93URj1XmTyYAHnLjg3Gw6mzF1a65PAyvBiURqzbig21tVXTnBXyncb2pZHWctUL8o3DrDf",
  "key19": "iQkDtzoSg1cQ6mpc4xSmUhqWyrR3P69ucqUhcVat11qRCXTAYY8dfCGMa9RbBz7WZf2dbKCFsK8f5c3hzTnudbn",
  "key20": "2r5YGDRiubNSyUKsv4ZqbnEd59CCoKCyvYQ4M19Nk1pZxS59tKZe2sQC8QhY4QKVgYAaxwL1sgdJJQ5LSBSJDfTm",
  "key21": "kAjb1gZSdkb26CJuVPTCEzBKXaQCJEtg7dEGGfDYwJqhHVZ1yLuQrgwgxc7Buk6DZWotqg178Dte4xUhLuG9bAG",
  "key22": "2SRYuHTbqxYsEHvPWy7eFKQCPsnSdL8X12Zj6adEjiw4BUdH8xJUnKYTXBxpjc1ZT2gJobEGrhaSGBn7SiR5cKbx",
  "key23": "6dhYVWwnTaFm6gGKNp66SmeQ6pbypt7oZMxCda642K5ye3vNNmYv8LSk4Jg4tBv1WEHscLJUXXR4Ezju6jQLEz6",
  "key24": "3cMthUcHDU2HX6cmFLwG3nB1rjBiy494a8rpqf3XvUTW9dPgLxVP35LTHWmpLExqR3zsbmbJyfFLW75wkGZgeLYn",
  "key25": "3ddoBD3pYkzjHCKGFEjyif9XLKyMkojTFehWhwckrVb4sbnzZzUFKCrhbY7mhymKrmCiswBuHUhuBryskRk9dZK4",
  "key26": "2pRKSvQCsWXFg5gPrTK7Lf63MtqkhEGzPqxgwRzgVBJmup2A7ymRCg3pVuudTAohCj3ZRiYLR1mYXSu9Yns98Di2",
  "key27": "dKKKMAPPNoxnMzf81ikCEthDntE54FJr6CW9WZE7rhZFoqKFaQ7pAn5PPeTogAMACYrGyf1fFcxV8RWk2Lpzgzd",
  "key28": "4ULc6QZP3UmNSqVWejvi8Br8F1oNdYubmMdYLEQjpz2wrf9F3k9oFh9YiWPKU5QVcRHUMJfczhPQiVcvZn2q6eGX"
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
