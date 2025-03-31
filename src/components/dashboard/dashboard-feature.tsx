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
    "crgSrMspBB3teCnW8yJz6FJEUunWNmVfdPbfoE1Z1pH3DgYC2kgqH8Qc4mNyzerpQbwt6FCNHPL7AS8S3YCDEsy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ZfqQcpJtxbSVTvvmAugPZtqDSaVX2ZkPtM7k6TDzQCD4xfjf9V4iV3S1qAFCpuz8EptoPTzcLC4cNbDmezXBRL7",
  "key1": "4ZdpwZ7L3b22LGiKCnHcRULt4xA1QYxgGoDtzJJwrnzkmpvEZf4EWvWNe98TYkuSU7fUtKwKAk4Vv8AQQbdde9x5",
  "key2": "nFKdpePBKmzn6hRuYUVocdsmAorGvdzYqZ7PrLssPW7dgnjp58nEuH49scPHx44B8mkuL7KwdgBHzyc38xpAHVZ",
  "key3": "3wocPs3fBbiSVvD9YjVqiSfVFxjExaMShPwPqnNUa3aWHanA6owjG1XuCyuNTsLis1NtWxdgnfVR34koTzNpz2hT",
  "key4": "mjc1wVAcWvGnQuaEDjcYnyU8cZ5X8THPq7GfbnHPhqs5ahPy7ot2XRVMsHJn8Nq93HjRLiiR1Fd6H4ZQt1E3wCk",
  "key5": "3AuuurxrrfFXauS6DVFudsGSBUeiqvwfqqHUTKEs9EtdrxXL7ri66WjyqzWZNUAsxRynb9v1ZYbBdf96FdauaChZ",
  "key6": "4A71Nuxwos74yfxyQj2krb6yUfEARp4qRmPi3ADkWwQBWVDc3vXFmTWfE3BvAREtmcXcVYEuLH1UJ6PLnWMZSEdb",
  "key7": "4bitmWA41ZHcevs9qywvWQAf34KjgsyYjSEg3TmPQNTBWcsTpyNFKFTYThwKQJdwz9ehjhRENLcvpBZV4JVSQk9t",
  "key8": "4c6dFx77M1WEzShFw5uk5ixzLQ93m53UYCbohERSQVPforQfjw9Q3m7wk2vtr9xKRHZXuuNd3tofPGUQDqr7mxPC",
  "key9": "Fi7jEFRFn4z3iUeLxLpzwLJ49Ka4diMSJF2Jr5hwHNQSfpMseXDTMeLXJ1GA2yrBLP9YLUWdgdUKdwLfc8KbHbf",
  "key10": "3RiCUAYjkDAyn1Mx3jTvd5VsrKhRmQFHGxS6yDRH9tLSLKchmSx8pUehV6VRcEsWEgbTUbyKwB1cBq958vyHkmdk",
  "key11": "4i87h7hQzVmTcYkm3PJCfqfyGprMK2dEj8Hh63rWaKnzxyzos9aTgjx5bpZyQ6Uq4Asv6X9x4YeuS8UWgPC5wpUG",
  "key12": "3u3mshi8661uPvDEW2J7BCrUdPvuTipj5ZuXWNweLTW3QZpHv3eb2cTjpfhAPW6qXtDs3hxcHr78MAczrNSbEUMP",
  "key13": "2h5tNh819N8KwAAwqGJPufi8KCt9TjVkVkpJHGhisfvtyfRdksCq59N986ruJgrGwWVPi7Jx22sSDMrc6fURxG9k",
  "key14": "341xievQyC29qRrdJ7WSj2BMJpsmj79oAEpuP3ZVhSJYo3v3X9vq1HA8pPDTCfGmNRTAF3awgUboFWnsDvbVvpnN",
  "key15": "4WMTr2Hi9NUa44MvLDLdKsxZiVYWFSKDsT5VVUuVgmZsj4EJUis1YCWhvxRfmR8yJHoKyd2h4UdSaiDmFCefnov4",
  "key16": "3gqSzH3ep9GB8ZW8od2zKhSCT45wfS6ASqN9HfQLDv1M5DNezrK5dDUmN13HHQCuTQkQhdu4rQi5PZczdCDsRSBR",
  "key17": "PGffk3yczNaNQ7vovd4jh4R8RHARNJ8BKRe61vZxEYTAvbjLTA7C2VZuhHJx8Eg1nKjd7vT8nW7cDBSPcxD6wHJ",
  "key18": "3hTXHqGedDLRL3c6DzMKkw8HTCU6TJ6oYqZeBUWa1Tt771FXyVmZdyH9LMrHmqC84gpMahzCmYHV4rcgKHR2MUMs",
  "key19": "4B6s4rJZEsioX5YaV8hoqU4AxdHL1qw3W2KB8AAyAwDbfm2BeypjoT99jth2JCA854NK8jk2Ukjhgm5znav4B9iZ",
  "key20": "TZwd1WjcMm8NkWmVn8uzZ3fNbkAW8Z9BDknZCn6YKXQQ2HRr41Z2fna8SKB4Ntg6iWncDSVbCNxb8AD2udWRobA",
  "key21": "2y2ybBSin5KmxZUPhkpnAWk16ZKs3pFdeMCE1ZwLeC4AB69WPQK5tgkvso5bz3r7WHNyfdtEZ8eY8o1ibNeFAEce",
  "key22": "4LisVXY9qtAdxaiGSTEyzdvzbjraV7vusd3Amz2LYAnmSb9hm8vJnZDJeXzAqh7jaGkg5pzMVeCLL5totrRP1pNF",
  "key23": "4wTamVHEdjPeck5fsUXsspfwUA8EXVM8mgkLnym2XwCWeH2AUVpFN6moemAQyfh8HJQL8bwDmWy88Tmzts2gUe6C",
  "key24": "uxMfqbYsUjrcGNqMdWBmymbjhWnzcX1Rn3FYrqeSDep9a1i4ndXDZDGZStNpwL9jaDFMk81U9gUA3KVkRzP7Pmr",
  "key25": "66WiqZBcJPx8QAye8qGV6tUztKcVPRDGkTcWBBXWqQhZXYmZ148FtevWjnsrR223vzbQusK53HqcxJpcCgR8gmeo",
  "key26": "eFp26pi1dZpbZs6ghQBoyJ8z4uc7oMysFCYkj7CgsV4LkcHq1skseKLX8fH7YmLwqiwimGCnauViKGXCkTHgrgQ",
  "key27": "3stB4w5xeXHepB6Do1jLw4MjHqXHwaafNvgwNYwtXd687CQMT8ys4CVVZfTvhr65LLjBrbZsCfRccsTsCWKsSuAt",
  "key28": "53GUKHQPv3qiVemnzL7Nx7kDbxAQjdVAtAaeX2e4wbPCq8vMRaXAdKnmsg2oG5AQRk4skktX4KvakbA4fKDMMoHx",
  "key29": "5CRrDs3MSTokiQfidm1nRJjhVNoEC7vek6cJnvzLp7i7SXsgSwYfsQkHmj7GwdZRugNAcpQawKc8DVRwkAUzUdxJ",
  "key30": "padTvTbZrXir1pgNnkP8WfcVWUshwQsXjqzsV9CNVqrgGnRHfjusHdPq5NBFQgKF287g4TPVsVToQcH8EvmkN4y",
  "key31": "679avtAxkuNHtRM1ypcfzg33DoKkG9nr8dyXMY4CTfVbd6hDWDjgHmrrsb7DmhacgWegBZugaFZU9YQaFtcevqqm",
  "key32": "GXxxtcz7WQ4tz6d8STxXBqvBKaQGTScst4eEYauRd5P2Z4k4ciDtH217DsoDNgFkg9cGTHs8UiTLvzpsMbgBExs",
  "key33": "5s9rSj9g4AXFVheZuM1ThS2ci8rryUPCEhPUBXpatVjz6Hk2vamJuCgYSP2xDu6rho2gMdabmokJykN2b92HoDe1",
  "key34": "2QhaHFn1cJs4L36AgTw7ohktzGg5ageKeet63WtSYgm5vgd7b4suWvHWSmSYKLAZvG7dVcjLpoBLQpJwSsWpkGqi",
  "key35": "NA2xUqdQepxnn9amGamyyUwPZmQ6Sc97MiHEFnrVeof2VwzxSb589CEcV36yKbYio93t5w1kGnspLttL4H3F3nm",
  "key36": "2PzrTZrAfdKEHczqptMX2eMoxetfFMTobcwxwEriQFuSArj7MPYeKt6fqykrfvUD6cM1tREQw3UoC1r95T1wrUys",
  "key37": "3iFXkL8BBZ5TkCkka1eojdc4wby4fEx6qWu34nN5AqH7S1iTqo98VzyhQCt45yxfHbANTYAxyDx2Vut14B7QU7m6",
  "key38": "3eyYHm94sTXn5dpuqfA1nUbrJuzVC6ewPCy4L9DzaCSjNuvapv1fwe2tP4aYwmSQaYqtpLLo76BQ9FsnwLZzeqxh",
  "key39": "4skcLKNrpxySDxtcitF6b4HsyX47priQSC3GyfUiYVcyzTa5xn9dScE8uwQKqjN1zdH5rubgxsvPsJhUprxKi8tb"
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
