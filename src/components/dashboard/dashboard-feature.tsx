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
    "yrobhtK5ZTniTrGryh4t7sJaLLRDJgCLVYqWeyoKkrFkrja5FBtFADx8o7muynAneFNeaRZp3PqSZcaN5pfR9na"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3HmQdjumVkEHPrx3wnMa4DPg6micUzhEPfX8Z5vzgrN4FTPtfVwjU9cvrpzZgKDmzqRXDx2SkrHqF11c2DpMTFQh",
  "key1": "qTU1SyQoUExwfy5kNgevXmBjNrmJHXCKDcBkvPn9kn1n4F4L1BkJV4jhRrKg1TNwENLTo7rt5qzE1omSvk1hLcd",
  "key2": "3vnTBNzSKuyqfA8cdCag98n92o8eb3efU67BCFHT4XF1KdEmWsGRTKMBiCkHqrsdD4RSf9cDEg5pQymTnvm2wAzB",
  "key3": "28K4Vyg3ofSC7mQG2o4CSAVNtFe6ZevY4gNR2VZXTBH287J7A6dDxPWp5WXqpQ86oSgX67YLeCu1JgY8HFusUCTG",
  "key4": "3hRYivSnHCfKav7K9zu51Y3XFhVx56GZRg5an5h3DF94Bg8mJi5NjZun5u2Csd6G8n7bkrdGfWjMBK45SxsFvXpM",
  "key5": "2EbpySsfQmXQEEt6smg5uQukFqQqtfqco6WcuXDgaD5ENpzouHGdB68rPqnGX4jUudTtwJbjGr5xKRL9aRJBCodc",
  "key6": "tDggJqMx55xtJ9HXNkFm93ZC9t6w8pjJyZxapqb9gk4URAnSxPjJBdabtnFxQpLYiu6usS4mcUt6BTUY9Akfe4n",
  "key7": "P8f48gND1vFXZ7gMbfhnFtJuUSCzXMWMTM6WkfcbTqQmdJyhEZs2nqZ8f8GQeD9hU9rbn2dbFerN7MGK7EFMYMU",
  "key8": "V3GvXsx5HF9Fjv4yx9txeAtpZgE7q7txFuMYjtPv8rVmddT3qAWMbCDV6VVc6q1etZaj3zJogTaeV1Ro8HzTa2w",
  "key9": "3LAiR9crFWSBouHxKxYKmtAJMYiikKB1ptYxthKRfo41Dox3ruXHt9Ha8Sqi7MS8BdSrBbZevizxvWXN3qWhP1jF",
  "key10": "2ztb2RrvjKpExbgZWDFA6m4jbiSy8EyXAW3736qCuLja8Z7V9w6bXPgV3RZvaoKEKam8ppct324kroHgFSdmEiTQ",
  "key11": "57SdxgkjBu6ZaBSvbQQ5YjKuT1S2dXJLtxM7E4EFuFxpQwTigsJfrYAKi3MPSbnhfcopjqrpf2WuRCsjwLBcvBKD",
  "key12": "4Vq1YSSUptr1sh2a3vKZFkZMebx6zuXnQqsUNLG9BMLCGCx5uAFQpzV8XXVkiBkrgp6Rx67DCckBzP7ZMeBEqwDo",
  "key13": "5ZbrLMyxnzjU2HuokC7DTJUoVG9aTui1Bdb2PXFuDRJ3DK2zoNvqmYYtDTJ8CwU5vUD55pB8VjHQcWKK1nsFhH6i",
  "key14": "2Qo7FGg6zPvorkJscETpJpJdYZzZ5dhNTgKZ4AGAydGDJw1uyEJciLdz2zjgS83mcS2zD6Nm9t3QE3awXVtxdSBw",
  "key15": "5XRRUYL3fN5LywfGWTikitbbJqCtc6KVxwP7GTupB4utgCXkxnMxQiuTADae8jQ4JBQj5Sfn7KuSLZHwtFz7GoET",
  "key16": "TrLUqwjZvHgZMXmoNZAFFrrxMNPUjSQAUHKvjQvYE85KwTxfodnNPkrtjTfQyanfFo327S35k2VT7u5fKhBLUbq",
  "key17": "51AZtthk81jpR7gsRMitqbnzzzxgAe9jeYbfvcRYAUPrnYZQrfkHvUA17W9Ajqt9KQh2ye7io3tEUSakmk624oJp",
  "key18": "4zy9w1gLL2Y5K72nV48bNuCYrDQrdbMjyi4FEzDeLExhHSajazxCYhd6PJjNeK13oHJyxrd4y4ms2uge38tzXEQM",
  "key19": "456Weig9MHqfkP4PDpofK2iFZxuPFRTVM7u4UcCp8thYnUJ2DwDK4djApVzMrt7yMEP7hmsDP6MQksHTPuaarnF8",
  "key20": "3r4EV2G6ShBkNsGUTfdu7KbuP3ukrX8rwcV3o6rJkWvixiU1U1MSX6KWQVvyummHPjqCwMLsSjQvWPYkDYEpeXBj",
  "key21": "2QSFMhiUCdT6aJoxr19RGn2BVozTFpAY4fhAQUiKmm6oGKuKL8gpHUkfRYQrV1pLXse6SA1fiYrPLS2WhmyXAUBh",
  "key22": "2KT2FvPtdLUMR1bmddNrk84CZdLwdF2siEg42QdSJqzsVVyRzjNnrtSVdMukoLJfh4Niw4N9ReztWxgF7j5N2TgZ",
  "key23": "oB7Q7ZKrRA4bc8RRouewJSbpZhQdczkbELVQVVVnesSDGWZmVtzjy48rqiWQjg3LoA46hC86qu8ZR2Xx6Vwm8if",
  "key24": "5YNuqPnkkJBL1AwMBAqHyr3rmhz2uB7zMbhowfADWbYQPgm17F7NimGW1hLVXV1rRdEV6RGYipkYV6iCWBRAH4BE",
  "key25": "5kjXjC6FSCQe7paQSuFW5sLTF4H7GbeVSduXx96dQnpqPdHwEpeZt84YZfRAyUJ4kAnz4TjgWBPMTt8pxveguCTR",
  "key26": "2MT3JcgcDzN548gVJ54iPWaVobqu8CJnYWsQGMcKr2EeoaTsBrFxGchgzbPE272R6RNNAQF9kNqJUqs4aJBMhUne",
  "key27": "2FtPYdTkf4idUkuTBhGs6PjB7VCZyo4iBRWvvEoXW7uwHfiorgJy1Uprpb6iRmfcoqTEuWsHJBua3vk5PTkTSJLx",
  "key28": "42qK3vkE6W9H7gCdXAnErb2u5PBj9TR85oV6Urgjx8KcKMHiJ16FrE8CqeXYsQMsk6jiN33CYTqpLniL2M1TFrZh",
  "key29": "3dGYfs2SCkRqExhaPWGHUgbVAahmpmbJxFP6zZn6gfn8Tmv8UfsaaQT1bCxZcynv16PLyK7EzvRwJmavnLmArffJ",
  "key30": "24TwboNMN2iqP2B97hNckteRCpv1uN73otLh38dMYC5CK5GmWG7oe9c1cSyQsC5oTZHxtU2kAtaTd5w2c9ST4DKk",
  "key31": "4AgWfKnPUAQikcdfjs1JSxS7KjzSmDPm8mzjQLJDxmq1RSc8Awu25LSSG8RFcJ8SQ1f5vBfUQz3QG8Nhgv8TENfd",
  "key32": "Lf1us1mo4M61zYN4PkVa7w2EurcR3z7geovYc8NcZdgB9NFsrAw98wnD8qayX6tYb984EhSDWPzKsMx6qmpZMBU",
  "key33": "2TbUnipa29NN79D7gaoWkuyjC24eo273VX7Bm8Hd7sLPzPFq89uLqod6pLqBL9KqoeebiSZBAmUncSpmTj2nuvL9",
  "key34": "2BAagAWFiCm5skh53oZ2UXXmuT83zx213xqdvUNYX7prW3WHHGaD76HdhG7oD9SDEb1qQsDt4F2q3cjMeoPyQZT7"
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
