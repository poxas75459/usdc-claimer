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
    "62StTbd26PMbaRUfin9kHzV6DwR669xWb9JZW5GgYehiCmuz8B3WG2FbpRFhoGPeVGQLusFMoixdSKszK7uzoRhW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3zkKBjiKzTdDo5sK17ZzkfCwYWHy51mWHTPHwM6nKFyj3MSQRoyLQ3XTr5cqrJiwpxGR1u3eiYQxMHJKP5TnWmpG",
  "key1": "zUR2gnSnTehgjwrerAkq4mEZWQs1QPvXTgkxpfhxEsB28dyoSshR6BiemgnhQMtmohaHoHPbq8omX3cs2m852Gm",
  "key2": "4MAyX6ioSEypjm34S5Ub6237EXx4djSfnoP8FUb3R5dZQgetwiGcQ1NSAmj2AajpkzYSJcvS5PWNKpZjkFCvu5h6",
  "key3": "eboAHyU9ZmAoikjLgLYUYWjwirgeSrcingB6Dm8yGyABHkdRapTtUYH8MWmmEj8sBoJ9SyRYdQ2xumq9WgvgWnr",
  "key4": "5MjDgkdF6G1WdCBgRJT7HBzvN8fVHQAwDwyVPiQo7J5X7cGRUM6djFhhiXKr343RHWBfoKxRk4MoZiaidMz5WNjp",
  "key5": "34zv9DfzKddtFXAqu1H5PCDfL5nveLJntVoWXovszmi7ugKArr2fwWSXf6fxb4rmXyUbWQJuVoLSYEABuG6MWVj8",
  "key6": "6ATry2ubjcXooabBioCw9T53YwCWx33SgEGQZzXhs4DTxjXeEDPCmNhcoYCwK6wuob7ceP1SpHXuatGLSiVuWt5",
  "key7": "2a41B8SqUUY1g1WM3X9Q76aUgmYrmycoRdU5fShXDVm9QKNBVx87XfvpfU5GS1Dcd9gyAjHRTYhj2HN2Enc6ebR3",
  "key8": "2UmoQjuhXR3gXrxTRDj4uErxhuMWz1quZLZAvxehcYLuDGiJwagDUm4uE2ZNr3adCo3D4KAKprX8nLcUeCXHxYSJ",
  "key9": "5QBY8j81XTc9UAJswTWNvCHp6P9xPubP1XauzJZSYbKpn4n8Dc49TXYmh1yQaD4zvioGDPaZbgJ6hXWivMGvWqG3",
  "key10": "64HZ1abVvpyoWvKSNEXasUoraufxbiMhNk4kEm8LmzE4xnovifS8NY8vcNJ9oFRzLsvcrPtce2LdBbsjSV8B3Ysr",
  "key11": "3Doe5Ra6ExF1BmvZd71YQRuG9Uoa3neRRDH6D7pHtz3pBe7Fh5FMWfB21hXKY4AAM6QntkpgEmBjUW5ygcjDMTvY",
  "key12": "2cbkfWz3kScSh6ut5DASykJUPU9Zr7ZnKFMRVBgxnRH21ecU2XSDeygyPmUdBcwkAK8yYjnZ6nbBNGfps76szkMz",
  "key13": "3Gh5QvycqBLYVuZjXC42T9W6mekcDurbvFh1a7ALgXHhGWC5q7arMTgJ4dCpsTe9RPvEpyPyPzsCWTSJKUmPzTYT",
  "key14": "2DboWQCcoawhWE9NQTXdbMskhp1348WqrFU2RT3ZzuHJ2zAuaM5VYLWboGFx5HhmWhVNMKsAcaRqPtVGCMBTPU6v",
  "key15": "2BUv32XpFURfNwYd92eHyz1Z1YvButUPHz7MAGsxmuadgkPxvjnN6W7eXEEh5mjSTcfkT15zDRzQMUZ6LRZckuW5",
  "key16": "3JbaZaPPS8otwo1JZ9V2gsEovPY7aJcBUnpimgScoc6PfDajwkD4pSp3eebPK8Ri4z5FaaPQVqo3o3kHma7dmEJm",
  "key17": "en8P9yGohSuQNp1aUqSebw1orJFaLtVhdmqQUL1otPaoC24LxpgWizkJvd9oreZ741xpt6654Gsvr8HyS5GNmLj",
  "key18": "5D8apKudVTK9V8bU1pHskE3Cr37w9wiRGqfe6jwWspgPCPyBLnGiVnDXTzHhaqZqiHMx3ybMSpC3XzSZWZX7MjDo",
  "key19": "3MNq8gV3vmqnYSnPyDbhbgMuM9qG9d34nN1HGU1nUW9hMj22fjtqPes8rqaDcv2bb3jspoKJwzPkmvLaEhN87bKF",
  "key20": "4xzsMCoD9YKZjyYR7wCFK87vRuDi6spHPerTvzVeSr6bRJcgrtKAdbmidPNRNKS9Zv24VFDrZn6NJDyoiGUyVC4e",
  "key21": "5Z9pWWgdCMBLVJWSvWbCP15HCjkVPJrGr1mq9GmRnpFHd8LGqpz2rUns48jgw6M9LHgw6NfSFyKT1ifPryXeoAbF",
  "key22": "3eAQiJkZYfhKtauBVUjLqWpii7ANkmkfs9quiLSmvev3PXCcr62FaTfg3zttNmHsjT1xRwH3A875GZb9HtP3eR56",
  "key23": "33eHp8dBmtePFqqx8XjJBBuaHrMeQbsvWp8bJKpSMyvWYCbZf6ZbhuDbCh3q33x1zNmkcJJbfxNPgo4fC8EqyaX8",
  "key24": "2Ugg2iHAhvitYc717tmRDfLnmPhbcE1i9dyCZsE8fK2zxLsADCnLGKurYa7CYxySqfu42ZmKSoTBjbxnyjkY1CXC",
  "key25": "5LMZni8FThyhRFtNHJ4JX8W7dgQ1rcK4nMvy2gtjUnpm1q1ywef4U7H8k7PUZtBsc5bq4nMvbmqqLpiBfacWzswC",
  "key26": "5cLXbygvMQhyJiZDFtD3PBqz3niNt1JddiBswmWNiaXMptq8oJ1dCcadpkEwaTUQq7jNwhsA1h9yGkGthXq7jA7S",
  "key27": "3hdkeX3UTjWYdn4YvbJSrgqStoq9SooFZLsrZUXFwzEx6sXPZfeEcb4uaLCDUzoNKo3HyVekou5feYFe5kTFcU7i",
  "key28": "FcjpBVZTQfYsTcJ2TWeubSPBu491kmLTcX8pTgTEHXPHfFiqYVEHCqB16Z21YZEiBpPdFWpy1iNJZb8vbNXDwTS"
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
