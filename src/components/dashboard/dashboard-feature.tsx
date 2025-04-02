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
    "4USP7RmQnCk9J7TMVVk2kyQYhuw8vrMSfTXeHMEfQqF7fr1aDd9XsZ4rtXTMJRjN4i6w1sGotpqYMDTefCGb6bgZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2EbYTxr3caxsFkwGdxqWyUykzNHKNZtaHBZ66C1w9pPy5Yk2oEknx46hyUipax6pCTscEBJhFEcaMMZzCAo6sixy",
  "key1": "4J7hTwKcYAMrEVdqs3HrYFcpCW9271ukGgR7wZbT3rEUGAbGVMJF4MiKqkMH5Rcxv6RPrUSwHa9HbJ7GzYMfa2G9",
  "key2": "4E4X6zkNwEqncF8ANZXmbPEM8ZLzbfTLsBniFmVq1pLy8rRzBZ62Jtz7C5Bkgjg1yG5UAXChnehGvumcFM3erFjc",
  "key3": "66UMPZCp45ew1YCyqzhGqwSxqCCeMAx45BXJh8b9r6TR79bvybQ6XwUHbjmtCVgvt3C5GT1SHo4EqZKjHE4LhWPF",
  "key4": "4U6XP5rwTNYAhE5cdbQ5KkUpLh9yHPaDwmhtD8VmDNKeeNmzCGmzehDviPYDY4Uznbusoys6SgxcwYJKAhSKmhbV",
  "key5": "2aYAs4iE3SU79KuUivjRBqWaWRMRZpYNx48DHSRnu9qHRt9rb2SWtK8RbB1uEfhiU5QxNMaZLzNYekYMYTR1E1FC",
  "key6": "4orpKmM5xmh2KRL8jJsVSxKSDEmGNLedU4drE5rtfURmrs4sKQJDsdNpW1bGa79cYbdAt2cWAZCUJg4exkEaoQ6R",
  "key7": "5myXHKJYwpzo3SY9t7ur4ytgAn9ZKJWARnCL4d7Bmmn4TWBZteuV2HsvywAr6VXRPg19eYdxnKZYYyc2r4poGb65",
  "key8": "5Xx1ALQ4SRHnyyNonoixtqrCKRgMcYY5ikx8eyb4rVK4paX7USB28vxjYLYRy7AjRUxtYysgoZpBgvouNw2Rbf8c",
  "key9": "5QtWiQQHaPPrtRXwMqywY172iJBq93FBNhqKJJdqbck2KU8Zci8fotRtGLWm8vKKMotHW6hCp8uqBmq8otrwrVCR",
  "key10": "3uPAhcTw5bEKuci1ze4qESbpqfct5HNbEzZ3p3tcsEejSXXF5dLLyENro9qHHzoUXmzuakE6Yg96H4XCuuikq1bh",
  "key11": "ryMoxg9wB4wiEXUKqkdLLUChuifpDX4gSVsdWidNaQY3d5RrTKiepxy51aRksYn87ZycTd2CFrA7yESnXksSrE7",
  "key12": "2GjKqKJQGk8MNr43xGajvtWsfgLkgrBm9vJVi4JkRX7YkXJY4PnCfh2rcyPbXWuZDkoRpeYCuaES23YoMYxZkYKM",
  "key13": "2ams4B78CwZHd8NDUDfEsaT5zwEXo5wWnZN7txcQkpNjnBQagmLyokrQH2MX5WJYwB1cTeqUp5xNs4fy5ewHYizR",
  "key14": "4Ua3R6JVMpf4jGYzPNXw2Gc2kiDF3WooSTfPs9jExFHpfvx6yZ8TuNWPCQ527L5UujxZ7Ld2tEEedQp43BX9hWja",
  "key15": "5Lu4o2WqMb77L4C7oHRfTD5zzNDJMy9KFt5dFwqAyQuf3J724HgXWKCYN6eSCSyUH88KF598eUpHr6r3EYeXCKZR",
  "key16": "35bmr7KHk5WU7zYtRfkyVuCeUS8sqtLLAjV7cdNxAAinYSy1xYpwr8NNrPQin2wHaThxTe8uqBsB5C9F5wy2inTi",
  "key17": "63349FBo5FtbYQVJJvgzSnusU2i6PD8Z1NHCzXrvzttDHKZkfZNTkN6jDgDtUAe6iwHkJG14nxnojvkwsHAmjkT2",
  "key18": "2akR2T21T6rwAGH2gNbN2uZ4MMUREDm7KFXbZBcE3xeWEXQitk6nHv76Tk1NCo5x4HVYHKbCvmWHhLMusLK8ujtr",
  "key19": "5gsGiXbmJwhxDHGGyGx5p2iYp1Sm2Sr8LqDMLesxhFvkJXWfBMMgcbXPThdweFbzhqG84fg6WVsfYtWTwYcaNHeo",
  "key20": "27KmZVgyTPAF39gvwqhBtFt7Rnn352b9fJZtFoRfNedvXui2BkEhnn8jnAobEPpTCRCRf44moaa16UDkNMBq2dft",
  "key21": "4M9xcFgTHQQBCvwDnYybD6Sjdi16ijiaEm85jkREHJASxcGUBAY8CPnzxNBb3GmUDLeoKHLUBR5WCLvpVpQEsdic",
  "key22": "2PWu1qskEwu8iHmhYbYGoGqw7zktcLpycdTJzctQZ3towbgtBLxspmS5XeLseJDS81mZehdQn8FVnFQZXGd9Hqks",
  "key23": "56UTAMnsN6RJooUTWkU23rZqtGgeJbwG3mcFdkaXp4RvkUfTeejro1BqDusN8jF7TksvDVBxkKUqsm8ZZQo5Qte2",
  "key24": "2qZbRSgJ952BG1miuMkDonp2TYZNUcTUpt5MzQxsxiH7secQaHprwFvzFi7JGpw5PmQYAFt5BQmTBsoYCQmSMPiL",
  "key25": "4TM8qFCYDX4Ae55c7es9QwKD7tyNy23JYLqmkeQzafh6Loy292rhm2K6PNFNjLbqZXxYP5G1AFDBGypM4WGy5NBW",
  "key26": "2kXdjSWeKH1hN3bsZptsmXPJ9QZ9QUmuwSZ38QAzNLEKVdGBD83mk19G8RsU5pudKz8hVRKUeVEWQawaTePPjjRk",
  "key27": "2GE8dhhzbSANRfwWed9KT9NrT6mhaDAY5MWX4brdbTEW4FeHNKpZuVo6KRy8p3tFk4mPZYmSreTFfnhwztSx5QNo",
  "key28": "2dS57G5Kcmc27pSp3zMu4gsob5ai26zjqQoLrfwHG6CYT3gxn1bT7fPh1vk9wbzxtdUXzkNckrvv1tP78N2rrJSk",
  "key29": "64ajuBXKpxUyXo9ZzuoZQu6oXkKUDfdzqDEXQPpZfmtkU5VM8B2AoPKkiAmX3tFsPVorv7Bkfem4KHD39mK7CkMh",
  "key30": "33iYDL9tfubtJypW6ohmTSigX13Yfso554iqby21tEGyuCFFkbEoRZmp9wYKAgYD7hqy6B2TjFtf5HtsuypDMwtL",
  "key31": "5DEGRBzEMkt35Yhk5Fjz7n5nb49aab3f6bGK8i9NF6aPBDD6A3GpxrtSFzs1pR2gEm2DHP3Xz9gDP3UQwA4iGZvT",
  "key32": "4HnbPA6HopJZfpSQjQjSoT4MCFUjkNRfWLUDNimt4SH826Fd9d6hKeUuprxz4avaevgFsKfrGAzigZFyhA8g8npW",
  "key33": "4hceeSQ39DbXCssKVUZQyzNodoP7ZRknzpgUPspjWHWFgipnWbxT3iHxBRhb2n4pYAKcvc2bHNC8Vvzzdw7qLGVN",
  "key34": "2H5EXgsXpmYEGcWJhyq8abgninMsLpFB1sR7mWPfxf9rGMChWVHaPDNYDgyv29XXXUS2vJgD1bPk1g9hvAG5jBHX",
  "key35": "3KfcCRZEWwfh71U2qmapKwdUkgKAjXCs2xhxzUHdhuctx7ccMuZzppvCKbQbWEYxSpS1EHJbKPyjWKUED8qzE3yC",
  "key36": "5pbEHZssmCFs22hmk12md7Tep8AfbABXfXUjCgKwuai7G2EtqzVqZnkRLrWxanZpLvmHnshKEuUSu94xNi3G1kV6",
  "key37": "4pNPPVBwP6prfE6jxc4FbEAJ2ni8pWntpTvxoNXFpomCQ779GcQ6GftmTcuAxhUaHoe8vSw8Du8KKUAn6noF6XkA",
  "key38": "4d4vs4fHB5qVSzP9HpsXnNMSiD9cz91AhvQrKWYBTGcpSTRKDspre4AmR2TKS47WPcRaZpij6hELHCxi6rdN84bV",
  "key39": "5mLozGFJ9vUzamgmrNYhFqG47hYz4XwQRnyV3hSzzRtN5A87iy95zzQpc7mtddNVJmZaPcBTKojuhzuZg3ceqPPd",
  "key40": "4BSDZ6KxLzmd6MpTuh1oz4wRp7NacF2Jhnn9pM5P4ikJDPkYURwx9RRBnxBHdewV4Rrf77jMahZ61gn5am1FJJGj",
  "key41": "2kTsUPfgnBAscS3QzpdUX2YMUwFc8p96RDqWb7e9qobyDAaZFukaw6oLzS1zU8yrVCG2uitKiyJA1Qouc4WqCzvs",
  "key42": "54fjWRr8jQ5nE8AxZmACKbaSaXrZHjeoknusn3zL6ZKZ8X9fageNe2ExVTsXEUYQ2sscGoxkynmGMcG2uN21f5M1"
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
