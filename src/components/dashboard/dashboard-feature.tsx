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
    "4eAtyMo2R3NaoNWgvaWx8M8o3KPADDiZdaHvxwX6He4kB6h8Pc1k9S2a4VJBx72M6CEdJgAC1ufsLfu5J9KzUoQJ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "xJoLLRKH2gcS8jHtt1gq3iDKtpLYz9mEQF34HEoPmiiBRiYfDHoiBSGCSfCEGeeyFcjbV7vEExPnhJ2JPEwLKjh",
  "key1": "4wNXbcEg5Z3L6HaqRmQTbPqr91WMX1DfhRQwUXuHr13zCFDJV5dZvD5q8JqMDyhKQ4fVZEST8anbEdSze9bSTnGg",
  "key2": "3fAKqjo9dos43t8reHxEjt51GVHxCXwFmjpaHxDf2viyHxUPDvu2CUbX92PmhVxdGwWZnuc3emsEzDCgBAM8a9QP",
  "key3": "J3Mq2CoMxdr4uBRUKokkriewd77jCoGknTF2LbQidNr7q9beWkeq9jaG9kosB9PKV6DTVyjtyYr2sbY8FrHkcCv",
  "key4": "ipmVfLmpekQfLzQGARHjFFwaUVWW99kcM8E1Pea3pycBdkkN7ncjNTdEQz7BHjNFrL26eWJgQ6iszUt3NyQkvCV",
  "key5": "2FdD3P9jaJYtUzsm9Q1NnkCJSyAh8ukHxTR1LbmF789J4Rgh9opfjkHoa7DyFJnSdEpyX1AFHSiHdkXobiq3ooLh",
  "key6": "4XrBWhd2sfrTo6JqzgZkpKbBAGP9gGgyzkLL5uJFUcEnKcCLnbQ8SKjNsBjR1td8eGZKZBMjUaN1Q1PfW8AzBXzB",
  "key7": "2V6QkVjuAzHni5N5zsyaKc4hhywZJpAMS4LLRdYpUUvcXkMbn1E3jzBUDqaMjZKNPzQ2xCebxBUSNWVEB7vWZZw3",
  "key8": "2FDAjWNMUne5kGY2X53wS8uYtXYWBLCQoh6bijg38aQwKgi81oYFxg8x7hA4GSa2UnT68UTkoD3Dewd6DXdYB1ns",
  "key9": "33cbRURgcKtFYLd98pVxzDBNdJBqTY57WRZgGp3sGbWPVEZtVncY5mYh9mn7D7fExdWoqngZEMoR8BJqnnHN2KqQ",
  "key10": "3NsyktZgZsVCeeBSQXhN3HM1MvjsaiHXZUh98q7agDQGzg8bRZqs5ZXU6UZw33bQVj7sWXHR8kpeASmiUSwrAbYN",
  "key11": "29UDLEq6Z92W3vTXGWjqDARgqe9AdFT1trMtJCLPzvNdor9X5TX3djkQTgvsEUBPutEZQp6aFQaop6Uf2oDtmS4Z",
  "key12": "2FQ5F6yCGkfYDM4mSFEQuQEMvMLi2q8kPKiuAoctbFabbqqSAMXY5YKXUBPELwhQxc4qRH6RMkxZRFwivdGAxjyE",
  "key13": "31v1itpJhR4bebT4TLcXHRCfryFviJU2UCFQ9Wxne8S4bFcwiKoZUV53NJpscrAgk36x71Ymzq8iyrksZA9FZukX",
  "key14": "3qnLYLMdLQVTQg7nZzJgPxgqN6cKAwyrPyeE5pCcQCQ9Aqkm1rsMr62bAFJgY5CMKgDKuxLHEVp3H2YRZmfe4qX2",
  "key15": "46QLoKeoWWijP4f4Ta9AiiRUmrUAdd4mDU9rUHzXJUaJWkZxhD1oyQo7gi8JH3bG6XsdngvNzVgutwtkm5kX14hz",
  "key16": "SJUip2SvRXp8hc4P45BfuHAtVDGcTbwvm49zwZii7VCmk241T9x3RyUqocFfGLRmoofjLRqVaDZaX2yeojSSd6i",
  "key17": "4shLZEawbsdGmXhnVWNeam4viVWvCQa192Hz7AKb62uTsJDBG6BkzpYZBMnKncmaZUqydD6KPCA5zLa47fGgwuyE",
  "key18": "2Z3qjrZmcb2QS5Qcn3gWduLCREzHafrAig1NTuEsbkj2uUCxDpcSLZwGk2YaVX7Zm7qQ5zn6UKRXpsaSes989rEh",
  "key19": "63XsGWAdAWeXYn9C6peskW5psDTHz4F3Wt9hggQC9vWrmrWbX1EY51YnAMDP1tUzTRFMwcmvbw9AmGWLpNDUpRpZ",
  "key20": "3GBY9beyphyqNtNhfWBtFARQYCFbEcUaUFPHHjoFzZNBv3sauhy3pkN6XxkWMFDw1wW2ZFrjovKgDP9V1NjbiHB1",
  "key21": "rn46va1wPEt1kp1YXRWaxnqnsMP4BmpuZZQbPDthJhCNnNgaVf7EA7gB6aEuzBHMG1V1fFxeoK2J3Vom5bmZRbN",
  "key22": "yJdEYc3owfbCztiXoVX9GKgfEsexUm6BExJUMHFHqdWzHK87k7WGtpjzqtpEmgVvHRwgxmKpwA32Xc9zqXhpUPj",
  "key23": "4EVg2GHZKKAwnEwWscuEnoQoHRtik5uGshbzHQp9Dr69BgMmnLzuMyNEzfzHh3y3p4CA1Sd8oeiKU14sHyeVyM7M",
  "key24": "2pdMCopaxvrBHmiKHqBneRr1BJFmNNtA5UiSvSuQQgmSk2VCVdrCzBWJHKV1H8e2axLywEqUjnmyRnZTXS3n55gQ",
  "key25": "4JrrrXySL8dzUJaxY98tPFrmQUwKRyd2hxf2eFaGBAt3SpX6q3A7BCUdKoxYfv2JJr6n6AAb8f2BHktW5MHGsryj",
  "key26": "2hoggX62i8ZgRc57UCzczSm1gSW2US3qrc2YrPtA75YeKjenSHJo6zvrCmz9innZFpeqgQhCjHwnBi89dXSvfJcX",
  "key27": "4uFtfbokE6zpD9foWEcPXu3epfHay79DjqLz6xpf7puaoAWDKQnAKJZqkDoxVnvCGjZuvN5qZJfwaj3G9YSv2aYA",
  "key28": "3vCQCuqNyx4E9HeishZXB9wzWxLamsaW599SUTPhAduBAN77Y9mofi5RmTDcwLUjHWyt1tmACZj5pTYy6wJEBxrL",
  "key29": "2hgMcaDw3o8pgnbNcvL2dWbkDQynJ7vHwkr12K9XTs4mSj129d6hZSXtQXifVNrsw1xUXyv6EYHvrfC1rRK72S73",
  "key30": "qzNyi8iGqh7DdSoAUwWDU1jhjCWdPxRPife5Gu23qDHfGhbgHcbwcXdfrU9hf5pwUJ3q2k3ZkbxMyK3pn9Ak5NK",
  "key31": "2iPF3mpZKuGLYvQr3CRYGmJpPX72Tu1QVWctBQEpGtZu7y2WKPBbnsnpQX5B6JgRrWDvgzkFNQEMcMomTPJSvTYV",
  "key32": "3Y8MBLEX7ifGekhxCcwYgep9cvD7yyZEjFjmS2axuSMtRgEzSW8a2L6EKrZoVvxhC3LENkeucKmdhKShGyBd7M9d",
  "key33": "2quHYMYuvnu8sPuffiVRVfnh1XpU9dmRjuCAQZL1y5hfB5wdM7jzQ7DyPhUE53DtTnPRW2AK2p77Q6LVhWFUhh8u",
  "key34": "2fpanMrq5PLMf7cujxwhGqPkE3cyg3EhH21VwTxF8MkgCSfBf5pp9bkkmPHy4RNPci91AivVxXohKBQx5dqhCQjY",
  "key35": "4wYiaUmzP2AueTPQWbs9Y62T41TGfXfP2nrJMAh8y5wsue9JqdiE8yC8J3D22p6AMj8UyLQ9cmfLf2ApE8LYSbZ3",
  "key36": "47imyusZ6BYvP92P84WSx7f7Q31VRzSFuFQFNTdKpPBk2eX8Yfe9owEQXxR7S92D6ykLptQawXTuA5CGRrLVxSu9",
  "key37": "3yP4DwCUH1GwRQqn8bLSE5z3JDUbd8RrdqjK49eNmsyA8WTQ4nnL7PM1XtVqttqPTcAoSgJQXWN7mjJniwvMj5JQ",
  "key38": "229Pz5LpjRUtN5urUh9P9LSqM63rXn5Tso7dgCjSeBxW1Szd2dYsRzSH5oqjNpCuG5tEhBu76FdV7anUi9LQnXX8",
  "key39": "3HkhnLyrzHf9WEb1eu5TVfTiXD66YygMv3SFwaBUrarq3ogUhH5De4VcGXT56KP4CFKmHg3WoqdprAeZV8QJKH6a",
  "key40": "4ER4TvVbb79xx39n2oa63JMbXHLrZDdiiwwiWvwprHZ5jmdedwmKhMKyfsXiB7znfeq6WuFVsB2w4d8hE74BjUbb",
  "key41": "5vSoja7iDLTJnW3PoAekm4wKMKSL5mJV9g9zJYDprgRLqdUka7dtiqA6Keh3QJxHeFrb1cBiQ5ckTL8sR87K5nKv",
  "key42": "5t6PffrrNTBxeB6WanaUCJDFM5wNWAnBf9Wbj5ByymzTqzb4jaSfJgYMbz3JLX478D1GUWVNVFJxhpM6mYGSDLRs",
  "key43": "bhWoiCFoPxjYzwUxAze1nXqGeD8FNJSxNcZEKV3M6Jui8Wapi2PUSwZSGshKmv4o6GBUcqh4ZzXENw2tKW3dyhX",
  "key44": "fTtRtacUVPgyFhy1AhfuKbjavazG2DsXN2uPJS5o7shKa38c7kDJrcm4VXdrZmtVas9FxPVRrNcekaeUk1sjGPW",
  "key45": "3DvdMoQKGWDofuVVahKhHxY7NsEjrXqwANTU4ciZPeXPhiQrewv2wTPzED6wHaa7YtkVxSxDhSMTMndXRXf2oFfE"
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
