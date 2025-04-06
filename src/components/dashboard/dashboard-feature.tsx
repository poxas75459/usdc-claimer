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
    "66PzfZ7VfWZJTRsb7waxer38ZzGzDRqAcXAoAW4jxiVAKqDnBcpBXpq6oXY8WJpgaUy94VV8cHf1XAc2e2B4RGAL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "bYAfJC9aBtCk6PbaXSCFEdfM4tJrBm44QZ53mpY63GFZAMEVrEhJdgDF2B934F4KmAvCo8ATLewDS6NSuxZ9JH3",
  "key1": "2GipZJvAoK1cg2UWKvrhJK7E439WTFDxHWx6KxSku9UvKAAxzuhw8HNH91T7ADS7GGnqPNX2yEdUCFuJfppMKFk",
  "key2": "awLaWaprb3s3PDnygyxKhRp235CZwe9jfJ5bAAfbCbQcw9aih9xNbF7jCewYvuNrYcpgXueHBrCbqEGs9MvaFSv",
  "key3": "5JkgqnkyHYKHa4EG7ZhxJ24xtRRsDvXxgM6TfQ8mZn6QeCAwfe9RkvR7mLiWZnUN2E4Pek2YjqY6ytrZcWrFDuNi",
  "key4": "5DtxdH5JymeE9NZN8UjCCAXKje4YNnSeAyb2aeVNL7iUJwjPtJEeD3spckmmpcdXQJHqkNFuNQQwnBa5bex3oyxv",
  "key5": "4XtL5uWSt6S7hKK9rrrwGccy5GuLNmqLbu5ctKuT6vgiBkkQfePwXBdnRuAdyWHb5j4oKPhWuAeaRvWZWWRxqyVr",
  "key6": "29yDTPeD7YiFdMmudHR3GpM3P1VAfwXrNMoMvrCdsenkpYXYqGnzKWJjiqvPebcvcraKcd6bL1zTeD7i9ZHob1g2",
  "key7": "2tHDUJFzDxeSa1X7PwYXgAYp6gxxmNDXxQeP6X4vVTGQBe1qgAYYat7AftNVaokX93RJkxsWAzcfFuQ42QY5y41g",
  "key8": "5fYQEB3h9uvqPSjNCorASymfchAdMKeFFS8V9FwNcBFMC9U5PZN2tKwsoiUkLfELe23iH3tFRp38GbUTdLHvhpBB",
  "key9": "4YVmZohKRqApeGbzaTj6tKWp6yzhYovSQBhz72HpaSFwVMR87asd24LQTexvd4VfYBBUfajbdrHTmNzPgpshSdLL",
  "key10": "17RhDS2p3Pj9aKmnFiH32vsR4zDhaDEVGUrxqDT1MSYgdH8CXdHqr4XCcbyzEz4qq4CCXFQDQgRsjvFVq4VqEa5",
  "key11": "vAdntRZLhUJi6doAzfsxyFznqzTs7N8U9D775CbzeKYLegLU9AzFxwjY5xC3sGVWUk81NpdA5ScAZe4im5QVTE5",
  "key12": "3QQSgAPrZ2i79GoqoBpCFSyJFsCe9iSmnHr32vU9s7wX1HsY9ijxsL9xERhJX6rmMtHK2H3BuGDTZ7BCZWDWLZ51",
  "key13": "4hahtthiKKzx6Pyp1zpgtJ4fqC3q522WBtpDDigRcKnDCMmSiAMhrp5GkWzoWBiBZrteA3ttA1KcC1Es684tJaUZ",
  "key14": "37pqqvX6cwGdZS4AaxTjL5ckhPH6tQ9yr5ph52EUjjCmXErMrSUJ6UnBxeF2ZFAgZdU6abRFPemrAPrh5Uz6abkK",
  "key15": "hizHmGo4TAqXAvJKPaZp9znSsrVCGQymfCNUnooRsrGXyvvZMaLQRtuwu5j3WqNwXhresDbHVatajn4WdoMCtGY",
  "key16": "2KJVDaR943XBsFN93yyrTS63bwa3Ytk62BRtAQ6Uf3Sb8ASebaDVR5juL9GjNfLpvsX46y3DNhFkHboQdgx4BXFj",
  "key17": "44SYUY1dQg2Ua3GrGRxaSjCFpAzEgDxXSsABH5rwBPFA5wapPvt6LXNwHiDN3L4LVmd4WNhdfJ88wQUTsf46p4go",
  "key18": "5nKfPTSgdcf7ENdbK3sSPezLXKKbLQpUySVhoAZfW4aEGrNL59xBBQkcHGMgrTe5qz9BVDmJmvsRh6EuSsxcewLS",
  "key19": "5x65x5TNDFNyRzjgVbDx4RstSsLM9UeqfxyVt4YALWRco2Qt6zqTtdZWvMQwDpHajnR2S3EEF93PHgTehKdF88RP",
  "key20": "3n7nVsa3SgQ7scxSzBPNSC5ui5FS9AUBubqKSapYvuWNdEXThVQ7Hpvpmj4Sy8nfPd8irkPQ6rFESoYraHpFoH8Z",
  "key21": "umn3ba2uHJdHtYsf5vRhyMDG9oBdSfHQmpBbDe4PupJJoR7fxoa5UbMfyfU2K2Lb8V7KtUDAqduQuHEPDRV8nXV",
  "key22": "3F4sjDNuWrP7Gkwwij7973eqBqk3Bo6tnC5x1GPkQb4RVjC2vvVrrRBBWaEmYLG966Who55DN2btueDrqTtQ2apu",
  "key23": "W3vvzJgyN967PxkprKqxHHvLGrZzmmEJbZLhTVwr5rSSTKAdByPhHiapWmbKqteSuzsj7xcVdtcqEvsZnCx6L89",
  "key24": "Spky5pzcnaSAVMyKqKXZQvdCBQGLkN2Vovx3bQvbuXwCYrVg79q43aWh8AFnioF4dtZXYirjHCSrume6VLPY9RH",
  "key25": "5dC96qWEPtThpzpgV8sueNabfEpqbkUwPRpqG64SLLHkYTFEsWmbuxDJGZtBpSoF6JAHNQyidKUcoXxdKKHh88nZ",
  "key26": "5wVVQcxmjtmRGXfb4Y8YznnhBXD1r29K5WoaohBWuXe21DHBMkNdaRJ1VHuN3EDtFVmwL8vpDaheXidDYsEMojP4",
  "key27": "52QFYoftoKbovvKA4KB6tVrxYUfjsifCX3GFkKW4i7yFFost3jcCQrxvvi5n72CxteWJXJMvPBK5CScJfuAD972Q",
  "key28": "3UUwgWSf6kJgkuXQA4ntWrecDSEPuf6PF1SUcth9ZaGvVj9u2NQJGv3tbCXsKFKVFTRjrgiiFbp5cLC2iewjwSdZ",
  "key29": "34yBz8Y4zLFk8E6abk7dsWKCkwHCSrGS2kBjvDyE9a13Hfy1WWL9XebPhTcGrz8QAkt49unbXLzADhhSfpyHffTx",
  "key30": "3FqYQg7Pwf7Y5mxssTE89NJzp7HSMQvRfoVnV5qZRKr8ZYUEqbfmeCWGWnSfDqVmWjWUscCc2yyr68Pw9WEaYJ96",
  "key31": "5ipcHxrWYLR5peiPbRgY54SQNDLt68WCqthyqhE1naVZA55A6YbzsuaqYvfeh6UGE41vhtFY1Wc6LKGTM2uowvAK",
  "key32": "5spdU9Pfjtg6HphCtLmKGLdWDDJCRMnejDyes9kH4uwLapoWhTPLih3cdZ3atXeWxpxgN3Ay8DhmoZFgSNWaSTVp"
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
