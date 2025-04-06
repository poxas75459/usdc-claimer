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
    "22xX8cvfyvX5jECXJx3mXK6YdUEUtd2A44zCSRLfnL3o57bBukDMiNQT4UJ7yQ2JjpamKU9G6xVpydKe5QeYz4YG"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4wbv8461RJBG8Tf3JwYksGYg7i73FwktsJSnnobQFgqqv5cRNb5w3Pb9SMR4pvpHB4kuUT155or8pGNBPFkCQwb9",
  "key1": "541iL93CwEem1cB2CEx4PBLArBnTb8ZiJP2U2rEvhsb5DJGT16NHXmaURRNwy8sh83NzUXdUAjwPecxyEZxNQYoY",
  "key2": "z8YDaA5tdR68ZqCKcrosw4nFXdk26mjqneapJg4c1HydeVerpNGEnauvQDsiEUiNPMsCtwrCjQt42arCqcW2nAP",
  "key3": "5rFNPna7bQU87MBV6UBwyr42ksSfoFk6qrDTJjfNrdBVdy93KUXC5cHUimZ9WfC1KGZPTMUnmPfsCaKvkL4yS6w5",
  "key4": "3ziyLztDoigbeyxQewih5b1uJdXraoz8Wj6KHmVSWtY4XB6EyhcRSfxwpLUzwjoWVRLtk4s6fMqVx26FbLaQrBuF",
  "key5": "3w2XBi3bvEc8Du3wqJ36i1FP59mvwBRqouvTyP3ndVPB9wssvc8drxoHYvUqySzU8bUjiE1LoPGGHK9MC6QkqdRX",
  "key6": "3C9qJEB8CYbcD9giRYzNWsDqWGxp9e8HjBavG7y7A2doUvVt3TRFv7C6VSHLYckbwMyNWt1o2TKRwsUgadizzqVu",
  "key7": "3quafdgFY3SPwz9rNPJhc1yv72nHEEaa7Y5x5stAULF1LZDwMqkkkwSJUJH26GgT2szfgA6RRuUCacsRYu2CntsB",
  "key8": "3b9Pr6XRCXEvYhwzU3gkTCFKVtRfQ8G2e6gKSDUZtMko8MyjuQrGUJ6sbSHYY3WX8vcLCQWbsm7XqSvqkjMWmtxf",
  "key9": "4BrHpgRRzdeKyY9JjXhFsHW7yYCVUjY42qxW7qDwiEMwqNu77YfprV5tiQq8qQnXC5wK7YfyyiUXZ9SaVHFpmd72",
  "key10": "ntvJLGEcXSDmrXJSVGS6NydkMEYdtRL3yuvQ32ZHy9akPgmde5ak42uFPpHUSWDUFaxpminkuLQx7P7t4a5BbL9",
  "key11": "5tgwNxrsC5NeLokssJ2kCqwUs5Zv1HSnigr4XjbX7hXkchKL123NmP5w7Po9AmGPCUeUcv5YHShZgvo9c95AZJA6",
  "key12": "24Y1BM7NBmG4L2SgNGzEbLWsS7B3Etcqow8vo6UazfTfG7tJVkP6UTwszWaz1k9pPd1eG4GStVXcJMsVoQhXgE1v",
  "key13": "22caE6yz6TybpSR9kbxNToGcmNF7eQruU3DNHtskn2VHTw8hWf6x8gG7qxW2HmiMcpVKYTriKTSKS8shZ8X7KQcU",
  "key14": "4B7MZYWasabZtF2sbX54nXvR79hKnTfYFDp4mWr5EqqiR2AZ2DrXYvwA82AyyzrV9Hgbx4MxvminzhhFbz8C93fw",
  "key15": "28bMFSe9RdFLXZ8BgB86MwdQdBppigEZJSW5cAA8qfiqrkmEv2fqEYiTEmB9TbVLd8YXWbC8h6W8TxRpjy15k2aA",
  "key16": "2Pkmv4Zfqj9XDzXCzNe7uB4dRi5bmM6y4pcYEJmrkEV7hp2VY9J8R4QZ289fny9dDsuCVRcuaMkgxjjb4owUsk25",
  "key17": "2SfkMihYfuS4vUJwJeV4NVHtrsQ5fBaNvAXQqcfKKLe21MdcC5wBKuEPguBpWU8ArH21ndy3mFD3Ap1C5NdK8oxN",
  "key18": "578rH4WADBP3Babcj5WvV3QsePczP6Js7Mg49BDnu7Nq94fS5heTmehLrorTbFFwpVqEKgmSuZ7q8HsxDphcUPR5",
  "key19": "5nUg8pDPYMicHSsACFTuLrW6JmVm1Dpqs8R5t5WYdyH1Tjn3SyAUa1PE2dVsrFDAx7CQ2tqAETijquB9yewEnfkX",
  "key20": "2TNHB5wi1EcDRaf7nNsT5TtK6LznFNzqAoBikEsTwa9szsP1FDNMG2VMhN1xYaqpLHS1KfSEnu7FitiFbVUEB4Zd",
  "key21": "423jcpGDjL5W4H6EFGPE5oE243BgjAdw5qECZojC7CphBPVzMq9aM1gSrJThdusgtDCgzmQJnxU65pQDr7uVkPtJ",
  "key22": "4ZSXE9cKRNkmhjy4hoNnEFy5sKNdtAneeFCPV2tm6dMSrfE8MHGJ1aJDkdPYMvKTobrQZjo7GuXnhukjGuqeeMTP",
  "key23": "2NpYHiF8WDvvAbdcdnPzzpw41UcMyMoVmNngxPjT937tMVDTS3CjkD2takzYEfjJKtJnUhGCfaxPKtnoKnHDRfgD",
  "key24": "3kDejEEL7NReMeCZATiNNkFMcncwdM9fz4A6Cx7PWdpNQuSSgkB4rVDer4Goiz14tehPpmoSosJKHyibKPBQjZAu",
  "key25": "5b5n5CTfuTCZKfrZ6MZBBjUpHfKSaTuus12SXsHaG583eP36EisYnJXQfgNLvBU1KP9FNbs1vonTZGY9iuG61zRU",
  "key26": "4VzKdrQLZb4t1jeqS6h23bC42nWwrpK5Mwi4Qx5CcvsBjRf7UwRYkHiQM7pDqwuihCYoGP4bZscRVw59TRMAPArk",
  "key27": "4RVE4hQSQ2zXa7LGFD59zj3BTWix2xrez8RbUAU2osHfRBR189qNYt2vocwQRpJYFiiTWC7722d69fvBfHMJyWFA",
  "key28": "3c5F6MA8bPhL2w63i9o9L8udq7R2hbpxMEuiDLy7fedbwM58m5TUH6ivi2jEmjnEN334QAc6igB7BVDyt1oiigMR",
  "key29": "5TBrBBcdkEC94GL2DK7rXnabcrk82FZukvmmf2daVmYSa6D4v2jWz6GDfcYZHWPFAzhy6Pc1GgmSNzYiJ4B8ypZS",
  "key30": "Lx4zEj2jgDJsh33V1X3hB6U84yMLLqNxx4WdehRm51acbpbWBoUaCHXrX3AAXExxCgSTC2A75XqiN3ntVEeLh8V",
  "key31": "2LzczdqzyMyEvXAH6rJPJknG8PRdPWkNssSw9wjFrJTe157aRYboeMcpU1b8MxSaR9yWW3YUazEzTByFR3VrwLbj",
  "key32": "4m4QmR9y54UVfh2HnpTL1U2LJDnJhqthfgUe52PiJV2vNE1HSYFBD3Q9HPcSaPJdiyDmXXES25YwEiJhQhb6KbnU"
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
