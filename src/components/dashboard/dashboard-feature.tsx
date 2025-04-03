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
    "CPJjvRUR6GH33PReaoXqBoWHvyJaipzmHMV9t59fiqkbDPYUeqKJPq9Ubp7P1vAGku9ov4ebsqHTWt34WWYrhjX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "49TTYu1DEZbaSQ6Pz1mYhcyRZqyBjcgMpnQLmoxsh2Z8g2ESyxJyPtBmsWmAg9iZvdu4ub9wcWEMPyf9dY6NnViJ",
  "key1": "3gU5aY5a5mJn5VfetYt7G58ntahMafcLzf1qG1yjwYdpf7i7qyazPB5LMBEBthbt2kd3bh84hZ3B1GTrPdALLdYy",
  "key2": "2tPL5icNpTJMTxX3mWHVHPAgmnKhNBaLME7qwfomXM8KTm2t42exM1LFLq88BDE9GZR9ahptWVoCY6Ft4Wm6H4QY",
  "key3": "4KbiaBvVCXJXUN7soGqp29o2wZaxWYAMa6Vzpm8Q7bTY2oYTh5oiasYarQE7PRkVGkFkZcsH9xWpp89WCQhq1Gpk",
  "key4": "5cB6Hme3dgMyQCcT3d2NcbPTshgWypoXxdQTpnWN699ZCsowuTwfbduCSjtgKJe1zL7VwTz9k943yzvQWJXRYLXj",
  "key5": "3okJCLbSMG9ZaWGEksBtoTW387dv55HaudbJwcvhbECSGPVBcM88CASw6W2TMAjm29wHr7L2pi84kGBfYqbm5eVD",
  "key6": "4Nhm5rYp1hHHhzJFFRH12ihRdWJBuW9xa4uH17GzJ3SArrNJ81aaVF7NVUXMHWPVC5V9219hGfdzxRcmrQNHCwx9",
  "key7": "py26AWCan2GTV3ztwxQrEkL2sTZsdTG6XtHqb3SrrTRFFdXihPh7ce3xbstr7jEqH1d9Tc8swdWjRkbpKhxSTuQ",
  "key8": "48ffQ4VUMCxSK53ySanLUdBcxgnntzR49FRNoftcm7QFHpQT981EjeXD5dyug3qNwSqMRe2mXDtTHsY5FUoLrU1L",
  "key9": "5CnzDoBwtsz4g4PFiUsaDDrHCh86TEvN7m1FccNt5Z9bw8sAif59CYMy8X4L5u8irLmWn4ANtFLtYh28TdXivTT8",
  "key10": "66vWD3PVT83GsxSDXHrNo5kEkXjTwhtXPCH7rB81Z3Zyy1xHPzuyv3C921BwaSdndJ1tkeqLdbgRsXrS2ZR9UsRA",
  "key11": "3LyJgFWRSonX2Ajv2BYHXyHhNyP5WaHMWLcZit5LP8BUTRT8jshCDaDfkXmS5b4yCGrynSbquGiyXjbVVnKorWa7",
  "key12": "2m3vFNXaF4vGY8CbFRGJvbKQ2p7RTS98rSxJMUAnTKApW9mNFJ85L6mKzmdL1NybVDsNhw9pzpB8y3GV9XgV1xhz",
  "key13": "7RLwn1jHqxW2uR25nThgDsashoHyfVLc2UUdaQqzQnynWkq8M6WLTpoTBv1LrRE6kB5tbeSmhx6bbASWMHaubg6",
  "key14": "qJfcbb85sdBoE6DvTPJG7HPzTGQiaWTrATVdhc9tFYr4XcsX5NBJjdEP5AFz3WHmjJiHbL88cFnMMCe39o9b35g",
  "key15": "5WNffSGdH3yZ48ZDy8b26aTQCMCwfqaEsdp5qd87NhhTgne91CWUAFKFY9S72y7GZngnYHYxvPQusbenouoDHy2j",
  "key16": "3HegUP8cGPhoxAaYz5fmWzegYgUZH8fhpxuyzcTUqBgo5GpYJTMAmwqr8GzTRd9MkCcVUTDoNazjVQkjLQZtQayy",
  "key17": "3zKmY2m1SPE5vYShcfn7YPLzHmJRmhqs7f6XC4turr3twnp7Hwk2NBR34ihV2VyUMu6B1ZchcCpeSsejgVx4w22b",
  "key18": "9vteZukRQoogceBDYjQ1ED7oH5KZmztEyfBFfZEByGbgMexhtWwA77sEPiesryPFGpy8vLejo7JsNUb8dJRoXap",
  "key19": "4JuBiguP6kH8yMSNnVji2F9CMMVYAbb5BC7m8eRfSBcWXbzEixMBjJS86Y41xEZZcqk7HYbiTPJfvH3xHrmZAKgc",
  "key20": "31q1n7wZFU45NDWPUkqDwPGqJPBSMfmA5z7MoKWXXTd23BR1TLR43LaV1SFvGRFrpDTcyEZ1783EZcUp7RjH5YiD",
  "key21": "62CnVRopBmKTsg44t7Gfv9Xa4mvFhuJaoUsavWp1boTcyQQ3cPtiebS3Bg6GvBX6EWb7cKzQxX83CCzA4tGN6jzo",
  "key22": "5tRi5WzDmdejxVL2kW5EpeQVBXDF4RYJ1NyTwLDDtXr7tYkuC8GYUVzcpdijdr89aQmWvh2eXFTXognpdkTVctub",
  "key23": "5FhutSNN4Tr9srKXY3QRMhx9CeXqTZj8p2oZHUb8cjjhuUynJngwSnigT6zFa9FjznSxZqiKJbfbSqC6pnbJxUX5",
  "key24": "5GY98KCXi7K5fShrALcfqHZdUb8cxiqj5VtdCNyXapqPE6mgJL7i4A7v3YNeLxxzXk8mDAv8Xb9kShqpefFXi4Fs",
  "key25": "uuN3zmLMfLcS5rDZmQh7noCRoqZmF2K3WQRTibh5mKGKyXvhnCABdqaFifM7ABsDqJEhZf9PjGjiRo4kb3xcrVx",
  "key26": "56ejp6CenBuDFryWGDGXVzrDPNzWXi5oh5nfaKQxfC23TnRK5D2NHt1SQgCNhAfJCrM6EEf6rdyKJ6dto8YUSEPS",
  "key27": "39d1vccxVPicn8BeNJpsscAPjKVnpqm5kqn2483dJhKnbSUESY18CetoK3zLBVAxzZiU4tqJQUBxNfPz4uC8aU2N",
  "key28": "J6mvz52BG8tzygLXoUGRhJB2QFrkJ2re8GhQUnq524UXFzpAHZCYCfjqTPACFzirpQ7mU8fVLGjwHea4cARYUZf",
  "key29": "5ZqHbGbjAyDXt5h5aVhGLtzSspfk3H9hvnBuFNwQJ6aBaiBZYp5QKAJayE9BG7eyg2cExmJc8oLn5rtzpxEoMvSb",
  "key30": "5Gt1qozKU48GgdLReM4ETSVfaRXVoXLGVnAdZWKFaGKciPLtLgSrkt89WYCSJmEJW8M92wsfTGfatULeeBvPckHu",
  "key31": "4R6jhPZqHcBR7NZ9fhKABRgmKXrMedTHxcNr7tYtekceWGzeAss5n8pE4KCdqe7mt6SgoQoSAd6QautTaLdJGNFo",
  "key32": "2xqARVirYKnTq46rssh3BjZ6SvxHt3xgstpTh7MmSfFA75TKib7DzQXp7HTE5EdfGg3QV4rs65JsWzneFhREugZe",
  "key33": "3SV76BjsxsViYvGTGXPEUs2j2EURKazDaCAUcPtRyy66iSUJ85uevTnqb3Df2EmGSTB7nHS59YkkbrC6VkGnrYqH",
  "key34": "2BZ1F7kcgnPBLiDdrVWoP4xcoo6TDgvm3dwRwJUe6mv1a8zsHdy5tYsdu2sH5KRWndFU6LCWfHq2JLW2n5eTtFas",
  "key35": "26muYhMg6qbjoAz7bhBLJ784cHbuu8FwirXH6noFcAKtvf2qqdSk74vXS3buWFiRMxfR6yDSJdd5GLDwTPVSSqCu"
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
