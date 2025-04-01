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
    "5BQrff9gxg7igYLz3unecEL2BevrDQGve4kXKeryAwB158iSk75NRMACsmuSrBUTXJScC9RG5MnXNv4vrgxMnTpp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2Zo7rsy6vSfRDL6riWJHEqCFC4VPrUgJyHGkHBfQxmdsP2FQBBLo2QZXS8sEsYAvnyPKghQLCtKcMR5d81NuLUeW",
  "key1": "5X7CL2R2PcZ1c2NtYZzGSJg34Z8sp8dLcAVEbamTbJz8MBehxTQjH4ZsuskTn5qsWNnaQLTvybPWMWgMj3KJpi2R",
  "key2": "2PCGmj6SM8yrtnAbGKXV77c4NMexxA1DWmKh7b6voBfWY2d7R2q7BpCT72Do7tcLFJumQaQybUnedwwAhUqAmM2w",
  "key3": "5wcBcsUTAonKKutHavYxzfNWJsr9RazMsCwesfgF1hrGDsb3vfz8x8uNFE5gNeZJDKFQdmcLAue4dz6AX5jLLgRA",
  "key4": "4NNvCRrzjHFEi4JKPzq5axgrCAiPVRXnx9bRY4qRU4gzEMYbSCbp1efCmSwSjrfstTfTFesxt4ufR1J3v25zT45o",
  "key5": "4qi6zFrn7kSTqvrzYRr5gw8bh75LRmK2H6cFbpmsQCtT4Fjj98KsoAut1L96xKK3WrFHn7stneuvqzcNzNL5Fbrj",
  "key6": "4bdAeoAoQSt9scuRDJu5M3rQ9hcj5cB1zF5QjqJVPdBAY2yYX9UToV8ujT2JeBvNAgTLf7AUw2WczAzA4tJqLHE3",
  "key7": "WFZ3HBNEnijRY9uwD7NYy4paN841vkzmkbTDCc5oEd1koyUKrJxGGuVQ8uhbScEQaSGbAEJsKBPhYKwsbTxtEF8",
  "key8": "3PazT7WExWty9j6YYSaftTKzcYV3EUAEnL35u9q7eabxBL3tGeRW2a7qPPcDuWSNx3LTnT5sbF7joqggnTsQuES8",
  "key9": "45rPjnosdhSDdVBbWWWz3KRnpcnWXbQMifSN7qdu2V8L7HReW6Apqdx7LNDPdtGs6MuxAHmLpsKh23UCencMDxwB",
  "key10": "21NgWrP76CyygNHWfi83wBaEMDabEnqLSjppZBu63MEy4XLZshmiEfFaRpjkPCeXNBkYZrHujZBXhZQvyRTPw1KZ",
  "key11": "4pasrpnn4AW7Wzb4bFMqGxJ7bxM5uVjRGtpUmYk2Vatk1e4mAZn3Ce9VZG78WtFjihr4urFaoafkcVPJEzKr78k6",
  "key12": "4cYn3YNu6ZvDh4ayrWHyqYsw2r978oVeFJg7d3JHFK1YjDRJE6ufGRyB9CXD2UGHL5c6DYXcxEDMJTC2cZaw9PgR",
  "key13": "5PhR3AbetodTKHiiWtRHqJ4hEfjmQC6u9vNZR1wbuAxi4kEn6G1jWNsFLqxYrZP4ERQYzB95NDcUhTb8rCaAP7S3",
  "key14": "GwKixz3BqC9AM2GLN4u5zSMqHzrXhRm1zy8WrJdveLfFNiQ3wERsWVx8TRrFxK3cMAce54AZ4tjkFmfjEpk6j9p",
  "key15": "29QG7yxf5zvoTFAdwGrAGV7xBko4Z99HT7bevSqZa2cC19CKmSdTer5kcvzLVCGdXvBL9pJhn8cGewZr8MgVfBtz",
  "key16": "56M4A2J5M75BGsKA168z9fVfAGuFAQ8tmBeZoZinqk8NB1wbZbqJnuXdpPDEsKi21JR3F9VcCKzxWdPpfMc8TKGx",
  "key17": "41AmjSpx7mBQ6QcU6XxMUmursPKthABGpF8ZSsgoQbzuYxD5ZzXajZvmPFPU3YHsR5tXCzMrJ7giNLQuVnn8qnrc",
  "key18": "3nT9qcXNdToaKTzdMKbm1hA9yxgLfxUQve8q12crvfCFc43hYX4BNirWwjt67mH2dpdy43TGwnDARNnTyuwW7Aix",
  "key19": "43dGP9N7Wdb6N7dmSMTk2tZYqSkm2DWZtGFdZVxkC3yuJ3xB2hCaiWKDAeFB8ovTBBg7pAUENYY3k9FCiNjo4bGa",
  "key20": "1eRA1chRWKWvpGWBVudEFeXjgMpePoRa28C18vuZcJeVgqfmTmCWcpmhnAKMLpZu2iGrK11uMKStmde6vAUtRR",
  "key21": "5DgxAwUy5ZuzWseiuZUJa7JkMuabtqeP5ijJG93BVn475vrnqKSxUcPwXQjyq7cQhGSQbQxMS1Ynzt8uQ1CMYHBZ",
  "key22": "4yAnzG2PkPg1zbpgMfaLCk2SsdwRojPrmZft7Sxa9JGbA3wVxcHrQxWyPLVtdVAFJbJXiWShz1jfGMao8QeyEa5f",
  "key23": "3B1U8Dhu43VVAkbdTksNCRrRptc8sUotSiqP7Dok1inLJAuQb28j1JjmGsMCWQRr4y4CqEbbfv9URd4AVeyK7YYy",
  "key24": "582YHcEGs2QjjDWYyuy6U29Du9hFvSAnBvJCF5ZBwWAAgT2weTecauro2chwk3CkwAJ8ZQgY7KSJhe95E35RpCka",
  "key25": "4hN52Mm1qLj4aqTMdG3ErcVGqav1pGM4S5Y9zoNz97zsvxhmtEGtxZxviXafxsvkbXD9i1Ki9KvfEoU1hpR8A2qg",
  "key26": "353JXsztghGwo4QJF4TnrL8DBYH6hDV7d7wgbzyCsSuYFuPBf9vMGyFcseHbS5AmC4iNHbV58sjYBTfVDtgqxA8V",
  "key27": "3UBHiBpUta2bDBRGYmc4hBvHonbELTMg8WfWdgGYiuwxAsasPy6yS4EM7EJcXjY1y2pVv4zhaesEbmu59xmRHzUv",
  "key28": "5PfUXhtTDKsnoGJNcfNzbsAMfMASmoKzHu3HA9hsJGg4DwQeFyeRAp4vGPNUt62MZPAfnSiNW2uLBgH5ymuipz18",
  "key29": "4SuXAhpXVNcn8ruokepKciRuMZTmTegMQ6mbRtwgxZ3QT7YmdBgyDWkmz8d34BrKmRVChmpZnagGbNdQ9ZpY97Dy"
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
