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
    "4tZwSVupzJXMVwNf9vDXPjCbAVmAc8v128WLkP17wjzQ6iLD8WdDk3xFYY4RZjdmxyCQ4MuEM3Ns11VgjdMzvnHj"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3hy3Lf9jQhNRZy1EgwcuyyKgFNBPLEH1aK7sNcqgZp4wi4LW3rWsX1QATV77naCcnFZ9RK6eCBvw5xZZ3TR1LK1N",
  "key1": "3GSMfA5oWMAdZjRJ9wxKnxMw75aSPgHF1yewTLsx31YvFLU75Qw3mzMcBvqYdjGYg68ZYCNe3HRvvuKxwCHaydN8",
  "key2": "2hKpZsEjU9RWtCeqNy7BydT89EZktkoYqagneRS2UQZi2UPjNCGHMRbt7Wwu7717ABvY7U4UzTRfjHVBEntm2ofK",
  "key3": "5hJVKP6tSEdrh74FLcw9RGuEPkVuMyZzCQbb5NYGSrfmgXxRn5xZnHUbnHLdotjiVC8HmJsHiBguJfsDTmiG2ACg",
  "key4": "5Q8WpkFkeiZd43eugay3id7GxJKiT7VAZxUpNwjJpHCZPFAVe71nTLwKHUtPEiayWwnihDjr9ivAg1bQVGdD7D8C",
  "key5": "57twrShebUug3fcipNgL1ED3Kz9MYhGqiYga5YiUUgEVLQdoWy4NgN4jQPWkcY7gtVD1njKXUBKNUKSiqwBx3t6W",
  "key6": "29E1wLcBwV1kHf1Fkao9BdWQMhWkvMJYuvykirb5daNKGzU6awYHczZHExXKYUY8eFPaQtRrCjiamwWw9wkbFsfn",
  "key7": "4b41zLCVm7Qd6B5paiFWotsV6JRuA5GMH9WzbVMWAZLgFSaiaL7sdVWGvKkyoyeSozkUdSMdJHUh6jxL17ym3swX",
  "key8": "2addqmgupZwpWexyMZSkNv4pZ8KRigcvLZhbHybKHq8x4jGywwpU4JDKtBGH8FFeh86ToDDiAbQoSVx5gQT47tby",
  "key9": "2uAFF6ZgvhSF8ymHB4Hd8ohFpUqBSWFePuieJWAdZUwncDZsNzfMdLLP2Z6J87Pne2hYUavSS4xyRGHfb3n7C6vL",
  "key10": "5RsFCQfDnT7r81kqEi9WatuPzak61gx6en8eMWsKq2xviR7BcUkzCLZSwD5T4KvtVMMdGZtdPpatw5gt4bPsUBNS",
  "key11": "2Fgg36FG2sMHAdHm4VZgbVrySagCgJ8eFCKpoBPYPn7ZcpYYEcnNzLtmHJNF16awRNMSjVDMaXufeqnhdptZsWhk",
  "key12": "GKaksioUfHLpcwiaFb9QGigCU6b7fkKmP3yQkPN84BinyEnyXtP7PeBfFrDFFQ8JFqmxzxupxTUnKBusGBKhWHn",
  "key13": "5H9VN9gwT3xyJUQGoQZZwg6iGbEGqrGs78YhweEVtdm9cpEXMnBwURD1yzx2z8duVKrYGb98UW7JrP3mowLjguEm",
  "key14": "EKBLbxDi1EcjES29TkFW6vYfVeFEUEtxXbAWb28FPomkaLmFjdeqeSKNVc37NLFLq7LeU388bMdybFE3gKx18vu",
  "key15": "5o9w75LXaTJ2kmxgP6xF6L7AyUj8L4iX96j84DQsDCHLSMk3p8ZC911AXaNZF9MvN3sjViLxEjeBtwqUr9mnKqm5",
  "key16": "4VP2eCdhoSh8YJJrFrMMgTopU9mWzfjU543Aa3K3pjc5DudJNFasJKTpW8z6D6KbCzMHQD3tE7QEo6hwucZwv5mw",
  "key17": "2GppSNmwGEew8sWDrxw2A5peC9brxAJkq3s8TWAZSeXdxAWgFJ8PXbFGxZ8czQEycDUcxJ3jPuZZmZRs82Uapy71",
  "key18": "4QoLuP58mu2Wg87xeLnjAbjwP27Meru1K8Q2d9Xqs4uoMYU4GjKX8PbxBo86nLXzCKNCAyDdpbZZ8bwfhzrKPEms",
  "key19": "4hPXvMipfzJC6fJSpK1GDrm8cRVwQqewuUf9FFHbRg7T2XRgufbAEpstJT5YvvdkkixN4seWJ3q9RDVojLCuXTaT",
  "key20": "2z6v3d2LuKwwCskNhgB55rqzr75JCzCz4ZdTZKqACztQMYmETwTEgdd1FEfCPKNyyr9d41pWpsjhcaceknHUAfgU",
  "key21": "B1ouz5ohi1eGHCzMpXqwfUhc6KoQgqYSomV97Ew7wLBrPuRbCstE2nphhrHomzdrgtR66beGk9aMecMmCBpKuBr",
  "key22": "63QES2xAtbisvXU6fruCcsoNx4FamPczMq7d3zE9abj5v1wJ2wZMXXafpmP7sSQWG8G7hBYecRUN73e9X6cqs1VX",
  "key23": "5BdEdDD2SiFGWwwva3SKPWhWKGwS1MzvF3WkrJHRhy8qEjZzFWMHgh9k3Aeimfo3yDwYyeXkuLtnwcRBmxz2pMJV",
  "key24": "R7RCRV6nbViMd312zbKTzR3McB8HAxL4zZuHkdXutsxqhFL1KoqeYM4dykUtrUrEBpMc8ji72BZgsjLLwDqYS3a",
  "key25": "4GPnPCoQGmvqR5xbMQJ8fRPaMofxwVEHCaQdQ47HbBSJxLSeA5ioSqvSYCz7eCBrjh7QwR95p8zSJBQMxbr7nPBF",
  "key26": "2PbFcQT3vJbnceXjDcBTNerSbtwnrvNxSpsVQFjJsMjHWwn6xRXb7sVWVBqRCVyjiBYp6RQhXwBtjiboLZyxcg9N",
  "key27": "2D4Z5R4B46ya4bVpuTqbP235jgAPbDqXCdgz6jW55bd6zskCAvQ5n4ghnpHm8uXyh8eXBVohGTNRDzyiPzYmAByk",
  "key28": "4PdvGMXRBn7JhCCD5SEh1MDVJr1Xgc2HwPRJ952syKcYQucbRoGkJf4Apo19EWgmPBmndhahhBSFSJM1nuSYKUDM",
  "key29": "2c4e7fhAAe6vbMTtJxVLmLTapNS8Lnt8KVRh2a8mqQg4YvxpUtLSJM5pfbedKEqMMsoii8spm4BzHJ6xLxJc41ep",
  "key30": "5edXNX3xjU2ptzjnEiS62fAyfYLXNJUZRUyz3DcNQ6PoNpNw4MfTwjjHWMyvtBTMDimkapJQ9fc3RbdCKuTSoN9k",
  "key31": "2Eup6htTAqboREmMawF7WMfEDUVWcb8S5SRd8ajDqwkJ4gD13aFHihVPK6nFYSryHwxD9BaR18v2Byvs8eYaNz93",
  "key32": "ye3kpF2nj5xtx2dWRx1Rjq1dYuCXK8FeicvFxMLYv9cD5nX5FziyfsDjwvW3DWMYC9UtRF3Mh3nkYgwKLE5LypB",
  "key33": "7mt9aaZ8DM6d9u2MndfV42P3xKnN5xjSMeDPJUfHU6uV7vTfQEm7PQZzKwB4iQ6e7nkQorzoGiin8pbLLACv3RH",
  "key34": "3G9ZJGRsgBJXkCp7iMk3AtaFsxopDfB4hKsrZpD2oyyDYBxXQEAPF9rwE1SpCbG3BPp4c29sdCBmjwNNrYoEbAx2",
  "key35": "3qd3C6x53TNxCUVVA4UnvWnGwzZ3yaqGzWEQEAxwtmAzUodiegC2AbpJLznJLYmcHLGZPKPB9KQfQbpyAKux3aL",
  "key36": "J5VXYtkkxBspPEq9JvhsmbydTQVHeYpK97WNfzBGHJcXARon38TzD56ZFtM6qyfAn2jjgud3K7KLiRuUb6QqHkB",
  "key37": "3oyY4hgJyLYd2bHyirf1Xzej5YhUfGshBYw2o8xQ66tz7rwjYUPHr7P3URFpTUBMFJJEo3914q3QMweEUC6dzSfF"
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
