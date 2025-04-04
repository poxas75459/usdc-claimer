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
    "5LYNgpBJrynmwS2FGR2iBNTFdy7LcwQ8KxznBxKjGjYqPeHcRpKbsP1mSRN1J8tf9b28KqhXy9JqqQzUSiRzgjNM"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4HbXXVEiVtug2St5dFSeByzq4GF35K2AaspqZsNUXKcL1AXWh57xZZfr82y2ZH7TwkKRktxyFtVRwfjcwQCJjn2Z",
  "key1": "4VTEuBQte5n3j3mddRt94gkS1kYrArzVhwuS6ArqHbnbmHX1frApvbKYXbjJDCLG88qARjaZMQsiEm7ME46AnAyq",
  "key2": "5ouTr5B33x9pZVd7iWqyF4dGNSmGfscJ78DJ3T2Ef6mfutTMvvivrGq3rjW3m8KPS67zk9ijhf6rfhe9ALj2RhyZ",
  "key3": "2LVJjzWRXCzWKhu6vZJQfCWu1tLWdGHLadmnNnTk7CMASW9Bmfr8HEyeEfT2y9yz5S54CLaU73MAmcKRj2mxASSX",
  "key4": "G399APdDVGPGQSQBUxbcmHmtQ6UseF6gRZaJTEXAz5GkwvaHzv3US9zgLQ2EBNXyk55gCSna16rMYn84EGVSPdE",
  "key5": "2Er5Dn5UgHxGSUyGnaGPWgKnkPEMbjGhAAHxbAiytDJyhNJU8vGnQjg9MQctKgABWTvXcamWrcLRncvyQGJamnXG",
  "key6": "46wUeEqP8hFnTcpUFFBRAu4o8v92tSxAabjiPSYDnksoB4fzZHJF5WANjdqhEKPvLS6Gwm7v15ouTWdDxdFWyKyH",
  "key7": "BU7wU7inyTCYgfdzD3tkiVooWbBrSzSpCjdu9miGd9ykdeXsXGx9WEjDmSWQKu8Y3nEBfXQCYjb9EoQZuya4A9m",
  "key8": "3fS9P7yR96qxN8QUj7NRJ4p1hjXC4GwFYz2u4FmWEDgqbhQoTvjBdDZfSPY6YeKxGdp2waXr9kL5bPydx6Ccn9X3",
  "key9": "Dk2BAJEzWpn4x6sPVgjJyarE7Z5GCaAEkGoTBHequMMuCn6U2r3uYnfpGgazref5xFG6jWGobUSr7k2V94BQaz5",
  "key10": "51Gg4TTNRX6e4xv82nXVvPwUzquDG88mgbH2bjt2PZPJBdqgeVFYUpinUvQvx8Jah96jAkiFg5V1LCc44dNXzwQh",
  "key11": "4uiH8iffbkoVyVAtp1cB51WfRnp3Uc1TwaWPjedrkTTrr6G5Vb4gbUpkpQQfqgDiMdEsjAme9zZkVPLGSzRxMCey",
  "key12": "ZLAjfhx5k9McqQev2ZY3VeGheENv6aDB4s4dQRfZ8qvaDoRooMwq4ybsTEJAKNRQbFMj3JL3tX2u4oe1sshVkLi",
  "key13": "4WmKNjUyX2DcsKnqceen8hsbEvCmFgidzQVox4GyaxNdA48H8MgxDLCtaWt8D9wPYkTVvQjN1RUjc2oUwqq15F6A",
  "key14": "3jMNd2ptEqjR3gaKXxi6LEjFGy8er9fG9Y9xUpywG9XaHRCycwjq2RpnB1HdaJ2oWi5YzoeBXffstg4NS2owZKZ5",
  "key15": "3ozBbYa7P5cbos3WBJVVatZwBiD2r2352YDtaz2fCNfu4Ac9WB9RZH77V74tc9a68uhK78Sq2Hj63vQdUXHk7L8q",
  "key16": "66qZJar9Fn8aTTc4t24s8paZR8CS2xmFHiG8pMPKvnjRkE736GZHJ4AkEWVerRieDJRGFrxDFSxFEPWJw4kBv62J",
  "key17": "47NDXqGbgdQqyhfnEfs6ShSNhEkm4MKcAiBUuJLFbqys5rqLJ1RKkCeJ9rVWZDXiUM32ihX8MVbJDFBSiPZ5skFm",
  "key18": "4jj1LqMiDhUMjkWJWYTyC14m1SrQHZMLaF8RGEvFtz2PWB7frzBS7uWNNZwpQAAHjtEomJPCX8EEiqq2tCUG8Pv2",
  "key19": "UZBShammKeb1go2PHRWGoPKTG9ukkMcjSMXBujc6RSCtPSofnMHgHhHBpAT8qASN7NovbSsKx42xtkf3RQjWgUo",
  "key20": "3aynWERmg28SJHWYKRXgkQCGktDhemohJEBbfqA7SNxR6JKDwojvqU8Pj8JQBDu4jYVN9h4BvirFkFSG9XnoPeDB",
  "key21": "wC4QuYuYcGPPirFquaGLaNJuaxHYvrWdCbZHYhZQ6kDfCFpTXmeQBu5KXnLSHHd3MUEx58dyvKqrNbScLywb939",
  "key22": "hYsZ2aggu31WPMuU2KGkhWgTefnv22KugNUJj1rikJegqWAJbUpucixsAMKwvee5zJcVq1rqYYwB84iwrQLTKpF",
  "key23": "3AjhCSeb9wvcsJSWU4SEi2bMDTMzr5tbke67zdEDA7A771nw8UAu5q1oimcQgtMvy7Xax9rZ6BNjmD4wsB6ghCRk",
  "key24": "4EGbJDYimiUHTQGohBCyuZEiTwiNLM11SneGHDU93PHjtFKzXFwtt1B14k3nA7fgLrmarZSELLpmeTFDp2ZbKV1L",
  "key25": "aHaea6sME4FF5zKYFp1Sg8LXmNP4KaJy1639vjJDVLNZvwpJeGAqs9cciSMijdXCA41iGg9hBGvs8NcsWKGZeCC",
  "key26": "3McVXYASfskV3VDtikuKZ3sYnLZQRR1W4fZwnMPgEVaDBsAoes4KaqHHJtTnJBJYxQYy3bNGia8jbdN89yjvwKnf",
  "key27": "5yWWs3PT1bL6TyLV5NS2MRX15s9fzfNkfoZnavgcyeC934kVbbWBWVm2wyxi1uQgyue25RUi4DDwPRDGCoXxy7GW",
  "key28": "3aB9F8CBHkC27mGjF5MtdrFZzM49Y1ozK78h6h9X6fKyjUkPwjvkhfx9Pjw1ACfSZDyaRLtR2nrqAvxczSA5Sufv",
  "key29": "mnfuWu44HvgNRE1kwxZUVBwsT8oJaYUrJhoatYhwJtAgLQh83sBhTTCbkz3njJwyzAxsdCMihdbYQMk8U7UBgVu",
  "key30": "5yWswcbpo3JzvGFkS71f9T9VLYXvMRJqadkjV2uj4B9D9zPXYtHaEW58W6eirmhGmB5sHdqgz8trnJ18Z9v1EaCX",
  "key31": "639R3CkNkzCWm15CsTv9gimUwJu7M4cEa6BwkPfbwuRpxbmM3hN7btuYHxALMqGX9Tdz9Q7e8Pmm13262q5hqzqG",
  "key32": "2QrR9hrEdqjiJR4SyzktzbCHrmmhg1Bcg9b97M8mRQA8ZkMpXw25THN8NXyvkzAi9uiB11dh46oMbM2rd4FcDggs",
  "key33": "3ZwjxYQLiHmpwtiYdczyvJX9mN8mWnSNjFBzxwc2XsFpuWGHYwaS68ZPpdSruwvdwZ965fT8MxrbYvnFkKjzbD4H",
  "key34": "CMkJyLWnNm6RzAZWw8xx5t9JfBgGSSrzP6JMrrnKypqh2V4aHfYCtV2CsH5CKhCBnjBUiU6wDYaAkhk5HB4yPKt",
  "key35": "2pm7am2WnU22PCLhGKajJyiRSQDGRTJq2XQU3WRSabKuJH1AH7YGgXKA8V1Ybs7cCtiE83VHyi4fcsUb9Vp5m5aQ",
  "key36": "3E6LsunCtYEoNoU7kESw16V2sXHhvideDYRJKgrirU4y7jWAahztX4BDai5ccf3TR57RhsXSavohgfqpb8eHXMmo",
  "key37": "29h6i3hQbURMnRCvnSw6wqQufFYKztCweLtjiX5c59iKDHwwEzDZRH2YkWAAAuQmnuk2uHBUoPpvA3KfyJCnzZTj",
  "key38": "4Xhjnno7YsFdZ7Wcj4WUzuhbg6xQUqzMEBfZQpD4myQKuFSX2jjEfPwNgEz2sXr4UHU1cevzsQYKPwgiYcswQ5sR",
  "key39": "4fcX7ogC3jG1KS98qReYVpRYdeuj1nTUJyUXCzGsZjPCSJzWtLgNnbJZWQDgdXDYpdcmpHfp8DnJzyDMf1RC9pbJ",
  "key40": "61MJbTVkZMvcFKdu13dkWKdinUzS41ga1bDYaE1CNkLwphyEu3qgGCeoG58xf1xcqg9AKNk7KPWtYn4fCNMGFoKX",
  "key41": "2jwqHc9ZRAm6fdPnodryDSJ3mncf1hqxtRi7fwsFkmGruC9E4yc4wBoAnjk6owy5MgoKwXayvycb3QyFchGT6678",
  "key42": "5uqksCQEqesYy1bg6tqCsuH9r6Fzw2R37pABgHENweg5wuNHhhcc6R49qbCPYH2GFHf65W1UpR8VCKBpddGbKKDB",
  "key43": "3MP4htWPmSorHHQXQcF5Hqchwu7shtE9QzTXsAyjW6Y7Jj63x2i4w9ikVk6aGUoyvmZsUd69Fg7gcr3XHgMN595V",
  "key44": "3qBXFyADfhGKidCzJXPFhb81VRz5MvK49CRGDGDJXn4GVterpL8rHoCq7v14MemANgL5js79wcHikp4V2P2iVByM"
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
