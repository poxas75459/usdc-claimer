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
    "24QYUTD1bRhWbP7mMv5p4e3yFrEFhLF4i7X6sBDAmKujERPZuLEJgwNK4eRURGM31T9H8oy1X92XqEeispaa8N3i"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5LY1Kpgvk78HQKCFAXWXLhLd7DQfP8CCXUQLTkx8LYBbGVc62YnUkY3doPniTBwd8SzxdmXbvCcLwRKkuow6NABS",
  "key1": "cu4vDiydHjmcUFkzegtJtPht68d71hpjkk6htB3JcbpGCK1rQhACjkozmXWUpn4Ubg6v74ZuEXSmW7iUytki9UB",
  "key2": "2WdRFMEcCbE4wHcL2Motp7suQygx4jCJQRubmAFLLZm2YYfNQb2TNDAdox7r7Ua9EmpEWsC37eDmQMQq8oz9uXyK",
  "key3": "4CcLb9cAQZKXwk5o5Y2rh7dTdUhBSeen1EVV2qvyqRYM1HqmLmvm4dVuGccrnKaBdcPdfCNQLCaXJ9zHH3rqNAZM",
  "key4": "AvnJK4crGp9e2Fqy57Gozv5g4XxHQzC3WPjCAFYWLSfqYqopX31DiJ9XN1HNpjnHRtA1Nkv1e1kJN3jSou6SRMy",
  "key5": "47e1RwwdbfEDeegALXjcTgtxqGAfHbTizESiY8SbYruVCJpmSnr7bVzSiskmB6wJvHbQagXo1Qacv3wvLTTMAzvv",
  "key6": "EDmRMryEDQcvrv8oNFTEb9yAkbv3u8XywWZmkK3mkrw2XeckqBJ1YskSZUWW6v2CM8iHuWmXVTJsQ2wMCZNYxf7",
  "key7": "3TRrcQ4u63iHs6XQpjgN1RgvnQaFivdnB4nQLkX1YeSZ8iPZ1gkeaLkJbV9TT58wUjthLLGbFi6x2D4CsuJdpMfD",
  "key8": "5pTyeixjKjafS394CGnG2dCSKGGc5yBcqvr17btnV5j4omgFirz5ivVkQy22AjQXTESZWNMPCufMfWi5nbmZX9TF",
  "key9": "4RrmHUuDUATeZzq8wyFBoJRMH83YgAdi9ARfWD4XwmW7bKzo1mRjcj2PUQn6eFBVkVaJ2QBUGtSWTSvLmcnMckpv",
  "key10": "4N7i4nJXkuZLCA36rcxi8WUEJPGNykWHCPQYRPyNGvFjiLn7KLEb9Ypz6RFHQgDwExtmdDkCv3gbj2gU94ke4a1n",
  "key11": "2vD3NLrWVrZNtX89pxr4WxQmbtDqRpTmkkQbGEtytLcx3iM93ZLEdUM2U31RD83npnxeJUd7ezoi2ytZN1p39dcZ",
  "key12": "6mrhWnCJD77M2DzrL9GcoHH6D4w72vaWQE6P3n8MU4DLmkzPZpbhBNCvH34nChQsLuTpEj1YJn9S53pQ9WTjs2e",
  "key13": "2nudPivLAkCSRMEvF913ZExGVNfV1mKoWPtZMDUMyhdTikmiEA9mJuD1MyTJJWa2BA7Kdpj5oGGBc8jzbiYKhEMb",
  "key14": "xadUeaxGXNhKS76e5dnpkkJ9R2Hg4ABNXH2r88MMoE8ac5ciXb5L9RCrjHDWCN3BBtzjWp8PhFJ62cUEawcmpcz",
  "key15": "3HuynxDCVDyYNec5SfMDTd3f8b1vYhc5n9nT9kLbeJFEK4sEeuRftmBuq7HzTRCFe4dHi5W9b3C6KrL63ZQS88xZ",
  "key16": "3ugbqFijPa7sk7fUFqPoQEXKJdy14x2ERYfprX2E1TZBzCgUv97hfUm6pcY3b84jdw5uAeLoVTZmVX9oUFfWJben",
  "key17": "54XKT4mjNiZBeRJbnSCXA5AiU56Wiv52LSZK6vpp8WK2wbAKpJib61YojNBZczebNCuPFrVra6jqziEWw7yCcEsN",
  "key18": "VnLcRdj2J9BDCZRBwTBbhsea5LYkk2P5TJUP7KkySQia6WKZGWdoZzQQo2DznhQAdRSVeWUwbUpcfFqt6MZyMHe",
  "key19": "GP7xKpiPE8rdNGoaF37SHE2bEqGyvZ6mUXZQFMbwH8eRx9NgJ71qm1NWfV9zW3ndPinMf6XBRsmdRQm9JyQ3ugs",
  "key20": "4ViTXMDXPBtXfQ4VyCnpgZNJHkpSjcqS3bEs8iNwmazwBhYHoqPNJhDXFDK84J6ehR2puFaumw61SZHgridTp5cJ",
  "key21": "5yTZtX9MnxLR8cLX1duuDUjKsbPKoer9WFdzYcvJb3nrzwYfi34zfvJ19LWVngSfRmEWnmx4kDWT5cAa5vy1FFG4",
  "key22": "4JBoowptsykquURk9qSWE8J5atw1KFjxzdLLaN5Bcn75tiQFUfVWxD16Feevq3oVaScForFwjhPyRUfyG4Hz6v81",
  "key23": "2ASRwAXwPtkiyoTEwmHDU7HKVM32mXV8MTEhXRvhqsNRdrJLPvAzsd7NCGraSQ3NtWA1JJbuY4gnfJXaMeac3mLD",
  "key24": "61KgdLQqNPw9wakQ4upKAGjZdi9MjcQigk1JvK45an9ybpGK7i5uynHUoCoMz4yDMmDunKp5RAYUoU7xxFbBT6Rx",
  "key25": "5itVdJDX5dr9GhsXpLSgmHNe8uXnsNWRtZ136Q7cQu93uY4wn28MgwiuqvogX32eZQpELxv6j3Xq2iSjJRjP8sDN",
  "key26": "2JovPAgLKa6Bp5UnXZFVze2np6XieQ6YL9G7eZT9cbt54Ln1Fw8UdxC6cb69rWmJ8mWhzLFfVEXi96QaPTbscQ28",
  "key27": "4aGVANgET1VZhakvYgQug2rKA7De1F8b9425NtANDyc1oacpfb2WUBCbaCfqJ281EXLAPjFkmWYxLcNA2fy321qF"
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
