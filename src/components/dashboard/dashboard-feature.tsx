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
    "4aR6fWA7ePNdCZmht89iASRptZWDGXDF7UQVd9RsWxmTCXgCqJ4dM7ZBuK1mij2GosQ6oktZuabCa7jPR6xAnU7Z"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3xPnrLrcjxkFk83oWLrhBPUVct2a6bGAQFhvjguJpSdoVGn18xvTeerRuBEEDYZmn8gLxGN3TMivLVctTmofrVuA",
  "key1": "5rbt9aznkJ9ShWTrAK1YJp3jnuqJRCo3gm2G8nB3Uq7PcLkha4hw9W2Gd2N96U33eEhtpU3tzvoxR5zkdRJydG5K",
  "key2": "4N8qK5j317QyMTs53GTne2Fc6TD7xFreJefMs3yc3ttQV8wBWiy8hSVnnqsZ8RARYgah2uH1YenYyw2fN29Ay2kE",
  "key3": "5o9qNxWzHFsQUF9GdCVc5AitPc7qUivZdDLU8KxDdXNTSY3DYRg6uBz1fvEHsT1ZjNELyqzvhraztccmbouDDsE3",
  "key4": "2RxLwwqHfZr5tyuYrRPeAXn9DyqDkGeofPuJyM4tqPxVDMoyU263sdGcSR5CX1WJJVW3hxoVkuxbYpSYnDEPP1fV",
  "key5": "3vo8YQnB7cyryy9d1evSrj7BHwPZ2iSH2oHcmJNDCVnvDXeW3F4yfS5FDQGi7nLYoLtAW2csagWnf7z2AoSrcDus",
  "key6": "2JfV8F92MJsj7pjcy5ksre85jpqtzgVxbYQyrTX5cViuFN3Wzt2jwkMXoZSWfZdrBh5fN7A4s5onc6KX6hfjYZHC",
  "key7": "2LhMt9Jp8XR6bDoEAi4FiMZcq3TVTkZd5KL6xpB8NGLi9ftrFXXr2bHJK8QyTonVM8fXxPHJYcTFqM1obDR6AWkh",
  "key8": "4Kuu46b8cKC1bMoskRTpZjNnJugWTfqFocf1hHbP7MaBsBJ5vTb4hT9vpNo6wMvL6HW6ifRhTTYrhmqBKfG2yCVW",
  "key9": "5NMohMNzCuteGMRq17ebhiBZMoPscQc3XY8kAofc6CWgcpZxAw8Mrb4RQW6DEcXRgh9VWqLJARSRW2EJxsFX68Sq",
  "key10": "5CSaGh8kVJ4GtrYBRJn1Bhvsu5QtA8LBspddHq5NihtEw88e6FjFRnSSZ8DfjfAXifM1XQ1qY658Vx3KfPRQbVbe",
  "key11": "46ZtPefx25tSwrqwWnjRZwzsKCLke1Wqr69E1wcBQ6fP5CDKYiKbWezTbJNtt6MGxgerPJasqp1cwN6PKC7LL2oN",
  "key12": "3z3yABWA3Y9t1iWeetFhoxdaSfZuJQQNWSZ1PFMGxbsnWQBSfoWAM6rYLRRJsujYFGzSKY65fBv8qhsrnbEcnFJW",
  "key13": "5CcuiXVvY1kHPZnu3vWu2WpUPCz3dSo1oB53dsEAt7BP4bF22N45X7y5wMMPr713HctfwVkgbDLVQurvyBWkaRbz",
  "key14": "5zo6DX55KCaiS2MKgNkBtToodPpcxYY3Hy6uXL7p8fJH8JP4xgsiK5ofZJn8xZnfz7hC8mGpcYDNSFAbtSAEVVSC",
  "key15": "5xWM4rELLLGCUhWySks2ds1s3ToqpJh2UkzdDyQ2SDSLDCPut8eSRGxPAuQGUKARbpp6QBTsmn3sbKcRvTmCTHey",
  "key16": "4oEEcwu668QcU2yC3eY9fb84kDSTo4PfBPoz1WN5afMASoAjhzrZznm6xqkncVSfLrijDxJkfKNBunicFXuar5ot",
  "key17": "TzzwQwhinkBdvxjehERar8Ksgk5GMT4DLR9Bef5P1yrNGAHjJTwAEqrRgj1crnMqZAHB74HTKcWzXoQkNV52ahn",
  "key18": "2WEF75PtcW9gxK1kswnnQSczWLsguNAc1V8WYiJYzzSmxuS8Fs592Moj8e9eJWCJ3jDkdt1m4WXs9JTGX4ThGJ1x",
  "key19": "4WHGLDcB5v6uikEKnq2mMrzjW76zt4Cm6VUiP3tj7XLDt5PU77mGeniM7PUNiqnT221XDgEqLDQHokURN4Ksi4e3",
  "key20": "r17dro5EiqSTTi8rZunfi5Ypw24mKqJgBaAbetBheskoPYxm3rRseVWZN57mFtevXCzLm6DfuVpT8H4eNNLJoqe",
  "key21": "5jrx9BYWuhR9PfQQnYMosvjEaJCPUJMo4Bba6nqBxgYNWaxpNbzXDUP7DLKBPM63Xr9KPHqvhis1CaWv8nSTmYnU",
  "key22": "4jXno1KbeuAKZSU6vBepSYrRqrp51sMb5RBgmSRyMDTdkz66H8TzmimUf7wbWLMQjzyNALDaw1Bg96Wk8QUpQZGB",
  "key23": "3nDwQpDYmLcRxizTFjxud69GLiodmaexNZ3G1iMbe5AV5jHn5fusNKCXPrf9nyBFroV2Jarphs3nv2abvNqyS7cc",
  "key24": "5G2S6hGNo7766EMvideBss5TAbt6oUt4tcYNeff5Zkbvjqv6pxXmxs5WVxej4tf4HM7KsuytjHdrH7aDXiGSdfcX",
  "key25": "4pipsewKez7BGG6SNupDMZQMT295F1ETLz6NUZwBWdSQbJk2fjWZgCxBmTjrneWbWnecTgAW1T1iq6eKaKzSQgLa",
  "key26": "3fHkSYicPcAAvqv4NZNqFK6jcuufttJ12FEydBjyb1TqXCfTfZjQ76GwU5FCFfzox7RyRchfG5BnNdiYcnWowofz",
  "key27": "SrUmfGX9EkbWcfn9QkwfB9cL64w5NPAokVMUxzkiSH44vwTqSR7HX1XGmYDWxKw56myJdNCAFDwWVvsExNXZsDT",
  "key28": "5cJGuay6QNXSnBEJs8s3eLJis4QW22H6wDDJob9o8bkrtDZeUM4aMd61L28UJVpKE3Q1gGvPoU3vxBaNRvq5DTeT",
  "key29": "Bcu33Bs4iA3KR48qRMuTAJdsHUUuwguXRne29qxik6pXe3ShvRi3Sp1AyKWfMfa6qtr2GQHVZBkbTeUQDeSsSKZ",
  "key30": "3kGfsSAbSJRr7JqwY9hyBYWjB5V265H4oMiddA8PhMHT9uWYBaiLVCs5mihbjJtFjQRqBpVQD9d69QDkHYRGCv9T",
  "key31": "4aArCGCTUawFHieRN1igZzT8AxHZQuz4VVd2vc2b5PwuXQAndm1GvyAiiCR5f4btC6DuP7uW9QtNbhrMvx4YkGtD",
  "key32": "244KdbSNPHNLtynT3yJZGhcPf32G9BSJqhsaqELQrKMhMZ81YTKWWHmtS4bJ3p2sNbSrinJHdHrAyYrpsGwYp1pW",
  "key33": "37rkwqrEdNnxywvmZtmfkQ8r7KzZg7uxLucB2vRGHuTGRMsfoCoGPEveVvpvpqaZD8AfiB1CTft8HBVcJE5iqrzd",
  "key34": "2UNozBYt1GnqgEMCdhS4PXXdCVDxKbS91nKzqiQaqKRw3jTgdadyt3fXHFqAMvgKjkYSn9XTeRooPiw6KRqFFZDQ",
  "key35": "3QWogY41XM4QtxTEKUVABk2VPJot8RefEXfjg6CpZanmoH25rX855P5oNGt3su2KxhnY5uNiGHVE83rY5WghrdTC",
  "key36": "2bdPckHCQThdBS6SaqGg6zPPgUEYVvuTFBhBi78JZyW9noGhQK4NtsCd5vWvxadJdarSBwvYZVTstCTvWAC619kY",
  "key37": "2MeFJPoW1vhyqvPAxxFVdkbPAhMe5ktpNQHPnJfNTzcDviAiQaLfb7NNMvCGtMAvnhYhnvZ9N8duEt1wxPU69wfY",
  "key38": "4LzSHQWpmMwKWKmfn6QQd5Tt6rAqNxbokpaa76jDMX6U3f6zN1eEKrXsd2SaKdCKfuQURWxHfFxwzLwWwhUJWLqv"
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
