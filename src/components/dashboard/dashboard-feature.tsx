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
    "PbqHfSp29U1Fzk5GzZNofFjiKD7VsWXxQevr7Crmf2qC1wBfkwb6mjCt7oFkKQRDvnaAZVYdDULzbogJygWPNM8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5Y8ATcipVZDWRgVeWxwqvx728ooqizgoX5fyrTCMGUE5kdM3ALjtxFvkoya2UR6pScLcWtPCYNSDyZyHNRzWrCdC",
  "key1": "2GdaS9VGbcbQQUNUMtyX1NYT8JFWpAGkxLKeab7ZNnkq3bVwWyTh6hD5x5hergdaDwgLUmQVYHbcuaGMSx1nKGka",
  "key2": "5Zn3FDhbpawoJg28t6s3cu9PcbWgkBeeWJmsbpv1RQt2jiciPzYqZVD8DbTdBDGNnVheQNsFzSYDqfnJXn3bzQZq",
  "key3": "3dLpneYsXSMwd2zt6UEacccfsF5RnegnM8sssQcog92f7wnmxRVP4J2RdmVLgT4cHBRZyYutUGc2JzXx6cnvRqx7",
  "key4": "4GXfUMGka1NtMHnUU3jKNeQYkVFAo2j1MBDU6Ljyd5RrEmS2FhpoC5ZZmyzX8bdmCPDCTosuZwiGa7NLYp7VrPGw",
  "key5": "4C65ePZfC8XAjUpibh5QvKLEFS5sndK8URmiBv9ZBYTGoRg1eS9ERcPBWp99LdfZPchK7RWTwxwpe5cfiXxNpC7o",
  "key6": "3T112eyrfYFWkEgNPjN8pfeMeqPfk5RxSGDikZVQHSRDb8gkzBG3JSAXN2dxxuYmZQMXh2rK2V1MBcwBiXRcKo4E",
  "key7": "5GFNcn36WZ4uBK7txhFtFkkcB1pYEWYNVNAH32Ckw9Jf9thpjvPkh8kqvMf5nMNMofoAWCQ6ofxUVzaBLkRuPiJ9",
  "key8": "RATJuSVopq4MRUnh7WjdQLEpNGe1KedZFmMsbsbxwDhSEMox8wnRfaYpsjpHHR4zghkZKTsQDDrZWhN79P1JUuj",
  "key9": "3iyX4jQLRAZdSMu3DunwTh5BmFYmpidZxJarpXFCabqDkASwgjU2RM7RQAiZQLaK9hDf9iVZsBy7bwuj9rkJvHm4",
  "key10": "2Xm8QNA9pF72tLUibGYvaaQLQJif9CpUqNZZ8iZtMxUb2wQyt41Np5zEqL4aE4t7hNEe8EeRG69nf35fZgtaq3Dc",
  "key11": "2V2tDGsh4E2UjKj4couGYzrxgQ68UfQHAvGizhxRYhXeJTZXQRKHm2WNYyXR36XyFyqeGY146QGbZo6MjuUZ3aZ",
  "key12": "4teBpfigQvPXAAUPecU1DJnnbirhBkajA2ESVoS1XdkzpBp884N2Xt9oasnzqgb5v4gcf8fPgWUdXoECsFwigYPo",
  "key13": "2zsvJ4wBC5c563ehoC7dyAGo1gucAddS7K6oDTajKf1318oHoFj4YE7a6dh29wf81df4J53R2QxWADMzirn489Zh",
  "key14": "4CsaRYNCLngzqAb2SJwTrWgKucD6xP1ur3iySPXjNXAdhngCzMkroQobS9zebb9UHp7VPYf6muud3a6oDMbTGVDA",
  "key15": "5cxrLdT9qdKDf9kCpN1kCFQTR7QjZmPaR1VEvLSdnsvxjoDzUuiWeKnJzxRvBxJMnfC84QDFXrKG28wui3k4Shnd",
  "key16": "35PB16hUthPV61GEcnJnMyipXdxNxxr5N4dX2EH5uea6QuChttXf8PMML2oUHutbqHejac4wx3j3Fs3ZTgLMLqwZ",
  "key17": "38URS9iYpq5YMbT5QYtvaC5VNSNdbfUSZFb16Y1SDcLC2z47oz8nYh7GRDwWb93Q9wKYmboNgJMnY2BcD9MshM6H",
  "key18": "4UicrArsrkjM9w3QDEsJ8YR1GCNBoWTsijg91fPxsxqwGbqYB8wgFLfAt4b4hN5Bzo7pmuKNnkETdGPs16Aqntxp",
  "key19": "5qgMGCSGxCbvFQB2aPmvZy8FZ1F7x2c1AxLDDprFCELZVcJYGeYgfHENEgf6ynTN6rH5DwAidUnq24wcbuVkqtZA",
  "key20": "4LggAPnFxdu55kxosRS6Cz3y36srJEkqqXg6aCZJq7R2wfEc8M6QAPijvE4MeGXJLndzPkeVX75hAnm6QYkYfcdU",
  "key21": "4SSSMTncJ8VEwgcA4VBLEkMPDctvwjBMmwJJXTnk2FQsZApZhAAq8uFQaFVbV4zR4PEcrhPEsJWpuMnaxn6zwwYB",
  "key22": "2gSKHEnNSC7wDdtqcUzJvHXse5TjZ1FcAwDGRmAvw4SZPZSoFERz6PUX1N4Ppz8gG1AEs2WFcr9jJCXaRbT9mGfv",
  "key23": "4EyNfKoPQpDZd4wVb73LKpdaURLuNZ42PXNPJZNd5kTwYqAwB2ubectHvZMyLCN8MWsA15A4NYFnktzgUyD2yyrG",
  "key24": "LG97osFLHTqukXFTt2hhJJrECmfKz7sF5JKb86C7d8S6fwXttMtKEEjSzTPZ98eMgQEiEemWyXDZ3DmW1mLBEaM",
  "key25": "AecmBeH1Uvd7uJWg18BMddHpCrtM1qQ42cvvGvzz81csJuc67qEADaHV3LfckiNpvvxuyfQiyYZ4rnraXPNbydG",
  "key26": "4CXb3QbBkoH9S97W7iYLrPPYJWaM7fnZHoV53AWb92fB2fRtyoadZvkBSMWob3uXLSD2ChNAD5k3iPdv6wqRgnvz",
  "key27": "66haTBtSRX4dLzuMZumUXMZqA4USnNANSC5hP5ta33Mk4WVgpt8C2E8EMFTvW2iABEqC8cHVGR5DGoYAju7ib78r",
  "key28": "3sCWReJKzbqQaLAEUM1sveDFYFd1QNSvLQYR284ABKiVpYEyKJDKNPqpMceUrvDGM451fn5Ce1FTEDpQ6BL58Wmq",
  "key29": "55piFAi9FFxoaKCN8drSH596dmWVZv6SYdb8dXNFBkUAEx4i4pNJsg5gyb5H8xSesBsDGvKKKmVe5D3JUJYDKDuX",
  "key30": "2h2qJKRTeReptvx8VYNbKJGYDKVYnWsf6Hh92VpQXwuejigimT5dy2ERF6r9z7X2orApxAoXkMsVSru8sgaNfwHV",
  "key31": "3w7CTyn8bFevmLdxJYBRcGgAnMDYF1XLnnkAZ1SgFcfjCX4jmX7UThpic2V3rEQRsvX3jZEJsNtVkPt6oP2QTVRW",
  "key32": "2Etc3LntqpTaGXDruoa31ULxq1p4omHYT1VXERR1o49fJVToRzEGhaPcxtLmUR4aj24cjRhA3yFdWBazEHRw6Fm1",
  "key33": "4NFayGPvckD7ZFnUeVuKF5W1yLZJnsz4CawM6dtHHpZeqLy1ZYZe1yxGAjJDqBnipvNnj9RSVTb2NUJMPUTAL2BU",
  "key34": "45hWpwJuo9y69CawWy68XYUxxh1NZCwLyfLnuVtKZBTzsEazhTt6ENhwg4Mi1eGRBnLYSE8ndc6k98Nd6K2ytXVP",
  "key35": "5s13TrFvu8TziqftKk4SXWrCxcwHFpkQatvGSMfC2g8DSDZGQqYUJrQKK2qEoFEkckd2ChHkyZfvM9nz1ohfSbtP",
  "key36": "W9SiAHbfWRpvC5vZ6CTgENTDnGyDjrnBBtU8PubBdzAuA8JQguS2mm1R95hfWH1Y9LZ5zztPgfUeKtf6yUKypoQ"
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
