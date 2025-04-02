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
    "3bjL8HyMPgrrAkUd1J2WFdYvvchSiKduThJ2YHESuPV1vAPgzfcBXSxQCokmuFuDpXttQzvUcN6jz24CYSwQUb7g"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5xonRpFN1caHLDt7ZyY44FwWiQ1VLd2HoJLmAAhrFTVNXEQBV46JJDxbmtrZZNmGzgPmdAx4R7GrFAwxCH4v9wbd",
  "key1": "3Tm81aSANvXTSVBiu9FvVmrtPExYyUfT2nwWCB2AxZZEGXfbvhsJfqUjTU3nwpjK1eepA8JZYZZGDMKyjZcHd77W",
  "key2": "2DCuDzA2bsXKboWZpf68m39oCXb3BFGN625PxeziQkFpXb3HhaPyvdio6cDu48AA3FP1FcvGeoXgs6KQATduWFUa",
  "key3": "5ApGvkyczo7xb1fkUXPWdTEqQRgw5dTyY7sP5TsD68E9ryhHTX23VevSxCM4rhmxiT8y9z3YSnHhPc436BBSJ3E3",
  "key4": "4ANvu5ZAgzsLxELj2UKdRPrsFhYv7qWG2hMhpj4r3prEgY5NrycRW2LUVCTFaTHzPeNHYY9gBRQ8qgdtAJ58pZQc",
  "key5": "62ify6fzpjfEY7L9zRC4rxvyvZvEyRDyXGwGiDm3oaLFSDmPrPJG6mqbWJMwnZ9JseDynJvkq8ntAGAj7BgXbQet",
  "key6": "56T592AwHj2BBMNoiRzqfTyWZZnJk8FxpQk3mNdv98w24VDy7mF5ZRJ93KHqREiFKP4hSXHT5z4b3KW1BQL1qiuT",
  "key7": "Qjfat8WmDgeHd18MwZywqcNAq1MyLyZ9PnDNSRZKqQQgk2fER6pSiM4YmCFdpQuKizcSARNACc7F9hj5TX9PNoT",
  "key8": "54aMEER7bQThaAsFtpH3wMM78t6TfDbS3uyMKRXhjWekK4ejdgx4YPYrKa5LVGb9feMEjwYN1zHoXTARfcdnHea8",
  "key9": "4bxR6gpouPeMgbQTc3g4R6r8eoPHCHoqyNSPLGEvW9BVo7kXRAV3c172TbXn4yijYj1PqKe89NA5i8PtsqetKiy8",
  "key10": "5D4zhZkzL6nFLfPy9jPWgMyYFQGV4nMyVPjRQKpU4unL8kkniNkLjREEwyZXDRPxEEefkVcchDa89Yycsa5FYf2L",
  "key11": "4mgkwtz3Y65EWSCj5yStVtGR451HjBxTj6JVY43gpzemMVTNvXtkEF2xq1nMsnwW5mM6CzWeX5znfFSESeiS2M1c",
  "key12": "3np3ahNHdAJa6HLF4VpmEnEzB6JSzTVuTTXc51ZRaBPUEGbGSnPnJKLVXH3SMwAzrFcuf7UDFWj43Xky23mXZ7vE",
  "key13": "594ZjiSon7aRUSK3R7imrZu12YwxV8oQXtX8w3ZGXuGT4t7yjhDq5JLJhKNzKpMvreofLye1ZFszj9bkqfZsBiNs",
  "key14": "5f8EGmnRQap4FR2ZQ8VM2VnGDsaEZrViLPExd692xT1SVvifsDVQpHrfXnXQxsz9zfrAZYqWVQoB1Ty5zu2F6amo",
  "key15": "3G2qDomyNNKqKjkVNoW1CUJUhPCW2vKBZ8b1KyDepjEPyp9huonH3H6E9JD7unH15cZV9tmpgFMv1NtCLBVgR7rC",
  "key16": "25CPd8ehpFeRtRzER2nKRooUtFx8TttWdHUTp4tvaJmwrgEpGX2EEkvHLm9iGB83G1LXKw1SAruHfSS5cCnkGDwp",
  "key17": "3omShL4EnAKStrRaojTpjTSj1XtEXFyMy612rKeqU3ramgpZRuU5jP1qbmGtrmMsYEcN6NyfwinR6eVUJdQtL2gx",
  "key18": "2nzeFGMqpYdwgRuLyw76P13g137qtUXXC1Ce7Ey5wVofuZUBj7n4Z7LCnvs7VEZGZeQCyeKpxd1fa5nNkpfRsBjj",
  "key19": "25rCpr9s9fMbYqeAKmZ63vujjHJroDRzJ6B9PQrdSb6ozyYmuA9mtC3EqHeuj3WeD6kNqMgZL4W4heMb15HG7ZnM",
  "key20": "4LVAbY59SX11drDqtSrqF5XQwyH6txfWVi7dt69Uh6yWNw8CqgVWxHg5b1QwJFSKWr54kUQdyrBNy4KqxE7V1DRS",
  "key21": "5nRjsUuCMAeWW5rz8uAWZvF5DguFhsH3dRsfYDvu6fkWL4VLZBZMTCbVnhKGkDMvY1Ahm5gzaKb4T4ciheyBkdCc",
  "key22": "2udnQoF98udq3wSxzUVMz4a6Zbg2rjSbGuMdQuc8EkJ7KYg7teRXrcJ37kv69MLJNPaznZUUqk1BMLAvYVQAKDHM",
  "key23": "62reNty3YixNaKBdhzpguNeAGyFK21EEX8bngWunQJ9XrLVmtH96km8EPfydgsUQrM8JsD8UcWiKZh4dYA1AaqRy",
  "key24": "jczhuMGcJ6YLW6hoUBpCwftPDgcGMfDtFneSFfqy7etcFDMsD2uBGbEWS9amCvpEqGoXQm2U92jBXHE2HvLNWtR",
  "key25": "5VSdzqyUecBHGwTt1UipohbFgshz1FY26XG2KAZNsYhnRN1eVkWuc9ME9RGuZKEibE6XRwTv89j2xwLLsyCFVPEw",
  "key26": "3cj59qXp6VuT2rEVTNtA2ywCJg2fj8i7p1GHuYrjnXAguAzVJU8f7j4m6UWnX1a3xpME5rJB9EM1xEpqwC9LVazf",
  "key27": "BZiz5oBfNbAm61VTsMABACJQCPZsF8WxL5n6AuTx5GdhjCKwQ6qHVwZ4amAapWVnNe7p9nWGcFJCPtPmTNDo6KR",
  "key28": "2nuqBbxiXA8aV5B17j6JSWS7QhPr1mQxrEurB6TY6BKSS33kxDc8EVATcHUSgyEMxmqPscjuDgymUnUD6iEbHRf",
  "key29": "4VVYgheTcrEdj64FgBHoH44412zeHVLXDqfT97s6Zs2wabGXn2UAjubkqqm5nwcVgfLTUihW5sNb4PnddpJM3G2S",
  "key30": "5m2UVpVWxeYTxkfN9jF4rJdFHkri5DBtSxkfWF4pzYVDWgVFjJvTsjswcirxK3W9aBFto21BA1n1mYQ2dVZMXC3x",
  "key31": "3MZv6TP92TMzGG4D536eC4YkMY2DkD3uW8QQbLdmuz3wBPNDUJ8U69c6rf3ibddEzog1qoNuTuxWLtDb4Cmp9Wmd"
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
