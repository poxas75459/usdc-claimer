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
    "3JouHfUxkAwbPiNXaJrrhsNauLM1hjQfVwkPXoJTVeEMruhF2bMmFnWmJMqBt2bnwdRibs4ATCsG89X7tMxv7oix"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5YNXhpjHvgKkAaCcn67yZvZSayAESnBviJ8AYc8ckXj4tGi8vbXCK1AmAVVkbJfG9gxQsfyHsairjtRfYmGGBJjo",
  "key1": "2awSeyWz2Ube6TjDZyCeauwDZTLTiNF5YjYnKpis1QfDiaytaoHBFYD6qNnd3qcTotm7Jq5oWcosv3mZqCbErqLN",
  "key2": "Uw6rhkNZ52LeDt82DVLXUWKTg7omKdFmVGKEGCz8k8dEujWfH3s7tdX9nLwkRH1z4wdcVTzQvuMLssEhymVdz64",
  "key3": "5mjcnxHfcrrfJPUMuigwX7UTjPrH3bVkwFhw9HdU87h9FSdfVxCy1UWrVhJpYc5Eanmi1rzPco6rzbiLztZQq65R",
  "key4": "4nEX8ojox1XgDWZ9GMX4CXsLcZSCGN5j9FYwvpo5E6BjKwdL7o4UZqSxTmpxfpLTgZg79uxv9Nf2G97x1ZF1Q4MJ",
  "key5": "wa1ztiXzuwtBeLYUxsNwWeZAxk4gDGkWVqkdxHe5uuZpqEGiJ4F2RwnwQ8MC58Tun2WNj8Y6csTRy3CuoWNoz2s",
  "key6": "mAm7cfy79qRN7u8VY1PFQu92j4qPqBH6Ya9XtfcJuQMKvGv7VAfV5XV7o5iBMMW3yPhDAakd5Ug9xfHDQjU6b64",
  "key7": "2znaEymLcf29Qp64uaCFNrhs89N3RMDEgEh97igKbZGk835brs1RyKPw4bzV2cw2VckymUsgtFBrjHFP9wkVdyu7",
  "key8": "4CQutmwv9TMJxMPFjrSZ78ZzqDf4dAcuyjxtowQFd1yr2ASJGYmsYiyx53EHYUXvhcqoEdfaoyGQDLZhN8nkLXmE",
  "key9": "61bxkmtZRjsRYDL7uJWr4bNuALQckigR1F845azZKu6B6Mc2qXDDhx3iVDnQSUA1Rtdf2NpTdAoJueeyGMZDCxNm",
  "key10": "5S1nbF8wUV6NQcfm3xJhiH89Whb2BG4u3wSr2FxPhPKcFLCDyfcENDEGkZX6PWWFo3N1mohFG4ZTSpkj8bKnivHM",
  "key11": "2e7DCoHf1pZm1A8RwKQnFMcJRvC3qkCYRtTCNZKnZ3vZD4avTTXdRt8mVRUA2FrtYqzWrp1cbo9xsZyH2TX4egDY",
  "key12": "3sP9UnuN3xh4Ng1oEKE6R4cRhrsej1sSNHNao2aNKiQa81h465hUVgtfWKMsv83FZHVJtB87z8hUamosMHbcgaJ6",
  "key13": "2XpPPjPGWeRvzrKyDgovMg1FnTzCxFs6Ex1gWs9NWf2f9RaFGzUyoUFwzZsWwsAjfhwALL18ssYZkDkomAMESnQ6",
  "key14": "2ijUoRoDHDtnTNiwYhEusnxF1VgDck4aN6GbgtKZspkKV1qEDgidggy8FGUd9imLumBuN2mL2LDZ8GmpKzPuKsdK",
  "key15": "5DJjBYiJNdTvpu13PtGBFsfbENTGR84DDr5viaJD9Z2c6FCug7PdaPhvg2vXymZ9NYvGJNRnnZhDJe7hjs5jwQAb",
  "key16": "2t7cLgmVhezV6rqSYszMzvnQdTjqYEM1Hgvv57S2qGcmrVizv5tvHLNcDBE6HANPSYjQFyLG7kP7EDwmLrWfXNo",
  "key17": "2rxx6dLUJQkkNDgRdfyxs2Vgf4jHC3JfTdNkRJS1CTCst92yXBBJvjDkcymdfq5uGoAKBf5aTAAuqfLHyfzud6wM",
  "key18": "3oKGZAwnHLv3PCCeunDtk8pSB2aMCJtEemGMcQEWXcs6Q4aGZEWN4JVaNGZCVomJrdrswnakzsZPzATBPbssdrd1",
  "key19": "z8TmTA5QaRd6pjwSRKGk1veWHCPTHA7vrEPdpfwNRQDkwUmqvizwTv7BSnqz1oNmL3LC3xxiX3n45tdjuoymdWu",
  "key20": "4P5L7aGVCjGhvyS3X3in6xPWbRmapNZ2McwYwBnxoArSmnEupmjVZF3GmGnzUrYiWrhm97eEYL4BSFdJ3BRK2iiq",
  "key21": "4sVnr6DH9sEA8FTxe2NFdj6xYENgnxUi3fVBGYN9jkHDv1uSavFFWdtWS2BP6xFCrYyAzi6kAEDwSxXb7ZdZGMS1",
  "key22": "4kY7y3YkDxcaDegtPquPav5JBJqDE3pREorhLtyn7yawLbDZpc4PkeZ7LreDEqT45woMNfdbMcgtkwbANaVtgDf1",
  "key23": "43xb4EoFxkR15r2J2Ly7ZSPxkKby8SgsfhcMqQaNDEAXBa9WEM5xGCgG65vfy76PZgqFrWvkcFtD9pjLtbydbj4g",
  "key24": "5wcXg6wcRzi9YzmmekSrM4nVaeqinhJMyuYRfyRomGTD7QLiBHFw86gUQhkdh7W9tNC21FmfpcYfQvxi3Qckpq3R",
  "key25": "5sXm6VmMsAUb7LWeBNtWFtmmTXUEu2iXkKmDzAWSsfNh6pXHxgsPDCAHVdyFmQEKzdu16UuDYnoHQUuTULdqby5L",
  "key26": "n9u9XvzSymE1rsKUbUqVXE6MwVtP1AirgT3hDBJL13UaA6zyZVF17X4ea1Po5Nnwua3kS7GhtG7BjW7y4CcEgMg"
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
