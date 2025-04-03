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
    "5PNmouz5WktQah8qTYPxvBRtdg1P39LwxqVbdmS7aiBic9gCJS8sAU5bAMLU1pgaNfgTxbamgJRDMtsSbbKMUAv"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4jev9sR5DdQxie9wuG3JKeTSfVyVfGL9maeXCC6GYMc2MZXX2StNmhHTUyW43tnF488capti8Q7C2xvSGdWGs23r",
  "key1": "2e5ntsjFN4Ym8kjMfDsZFj17VVzULbAXDPNHdxrBY6JShaXUZ3bnxJGZ98EHPSz3XiBdyU1eJ5hu9cWUhxQeo4a6",
  "key2": "4Edb8yS7dtuVdKCWVHqW8oBR8qqed2zdhhqEB7BJpYPF4nxoCKGeuP6P3xubqF4f88hU1u8utk4Gv26cHvGvZrgu",
  "key3": "2rFGaJEuUDnNRvp1H29dqhKTjvK34JEkFzRRFiXhCopJmVAjiTGG3UvWq8VQGEqYALnXR3t85vZJo6WiZ5r1pRi4",
  "key4": "5TJTshs8pU29SxUqhCRTPU1i1XMKRBwKE1tmVcX9bQdSiuSjZepn4Ju6SQFE6ViJ81c5Q2UHjktS9Pz1onuGotBo",
  "key5": "2SrKx3EyS7tSkFRLcenDAyEgs4MHRcuDaN2EmcB6yRYQFiMiQwVMa8CajJY6mD5KDoGP2UMnHWx18d7cAM39KfRx",
  "key6": "2BTxcEPXwvdoigCBCLBEg856MejxjoZdJgzKRDRdmhzKBqW2J7WERTMGaAo81EHP7EKPgKsqRsnEMAsk2QBNxxv3",
  "key7": "66JFi4QN4nwPXBGBNheM6KhCkrkEPbmH172W9rVSBCxKQXQZE2Fx2j1vTcizsVJ6Nx7t7BujBBPRxvppog7Unurp",
  "key8": "2GXdcpgSEa52xg2Fmm7ZtrXSDxEbX1Dm2qgXufScWQwprYZEWdfHRw26WvTy5XuBME21p1RCAcjehifyWu7VzmRK",
  "key9": "JEGYytCWC4bm6m5Le1dRMNs6XGVnCH4tEmHzsWTz8Dy96Sq5m6uNQ23igBkSUB73WaRhKDCmPw7tEopkpjLfU4w",
  "key10": "2NHpjRm2tnRAKgJSffWxjnfjmvgvMDghQDN3xyRKiVcDMBnPyuAqL6i9w34AYdWe3keWTN4daT1JTBS264Qa6gmp",
  "key11": "67d9M9vfdtCq9aJ8GwvjUoBCoEkb6BRqHuqa9BfCp3LraeeJwTJyRzHHvBWidSCjy2q5sEouwvjjRUj8QtqpJXxY",
  "key12": "33xLoHqD5gCUkzysZdWN6dpfhTYjQA4EDU4yoe4SB992nrqq3VADSieeErGTjCmDj5QrGBdqssXLRoJz6H2FJYGd",
  "key13": "5FTkNLZPXojJbZe54HDq3moCUhPwWcGoW5WAePXdKyPkgMcdqxHhnKp2Smi65hZ5j3yRNxaLCnNLqZL3yJUC6HQz",
  "key14": "4u54MhEQTVKiwWezEvgBu1Pj5xxSejH55EnHZ3D21tGXFWqPoy2WWePgjnKPqAQDvDUqrn722yhRdp4TZq75psY8",
  "key15": "3MHmW6s8EbrGxKgUtVYxspa5nKpTSxn82EqYuYyV1zmrBRWKYQRgsroco4DP4yy5qD6L6wEteJC49GedvhsZX3SR",
  "key16": "4KvAkKqLtiHjN2LLebAC3iTtrC8FAk1BzWLatMqKe6avmUUtmF4HW7Gg59NU22ViVaKhH2XGFj82gTFCuRHTzRfC",
  "key17": "4ca53Gsk36CZWPJgbox5kLMppKdmjMPSVr5RtRKKyo68bFNFAjub2GxZTeknASH7wUSiM944wFurSnK1kxZtndQN",
  "key18": "5AQoFdqaqNvjRX82eogHVoqJQuTd5hH6poy3WsCuydGnQHY3FpU4NbEeCbrC9BEWrAVZCTv1G8JSaK9WQzUUS5W",
  "key19": "5bSCPYT6Lb2ib5MLpq979c8PNjdgenJRZAaaVEEToZ3RrvMGviZAXChrF5GAFwHqM75LKurxgHcqQuAaGXtQXbRB",
  "key20": "3tu146QCdjj2qsSDmGJgN3cSp5kPmk6i9zCGxh1LRd2JfTjsfvpNCHZutdknqT6Mc6rk2WtW3tBuQEJdZuirLtMG",
  "key21": "4Cko32QEpZn9LuDizRWXcyBbQDQgeGA7sQC4LcUHNxHc7nCNcgnvansz1vMLfe9ZNHRHc3DAN1HsoTX5unWa28hK",
  "key22": "4KPPN2ttE6mf7uFDZJYCBPYP9oAoB8FcFZd4JnpEnQzzCMBspKeK9X57Z8mJdJFd1r5BxLy7qD7Hz3xE5AX3nBkR",
  "key23": "f3kkeQpaEYwcxgMh4nGCw59MSLJH7AHTAin5DuaAULD6mE5x7rsxLZpQMp1gw52mrunw29dKVBGvCFiMx81CmdZ",
  "key24": "5BAsU8GHPoopr9DcEM8UdEAcizvUVGewNoSxKQHsBoKdf82XrnikMnCcAGcmNm5gHRu9fvD5nmV8p6ivEVVhGkYF",
  "key25": "2kgCr42XRJn9yz8z2j49SMAkCEz4htD55bqFn8S11r1xTDntsyCcvkgNjssFPpxKNiDSzbuiTBqs21Dt23cYWsSM",
  "key26": "5k4oPfX3qnPrTENwUYWpF4eDnRGyuvJcEhK7RqEK28iaFZk6hzsf2bFH7E11aLtUz1dDue37xksJ3ZsaBz7rwCn1",
  "key27": "2NbZJUtR2jnTEHHJZVS3QtCuJ4AF64RCJQ5YNvtSz76T6acmna8KxvZsBbwgPYtkV1777N8v2maKFokkabnxFXS3",
  "key28": "5sXQRaDTAjaNEhakvuQRSRpi6zRjFHH143c6QtwXnRBBMpUokHkkvnFuttWNrkWohrbY7KmxGoad5nnEGwyVERnj",
  "key29": "43ue6eHPYKLBwrwBhuEnGRd1oJ4BaC7YccG5oLj61Lh4VywVAxhwAgVCeL9WZPcYTRk71i4yo7mvVupAL8yCe8Dv",
  "key30": "2FgxRCALHJfq7Nh4ZyUyRAxATCfPokijkwPZbi9rf1FwAFLRW8eLeYCMWpJkKGHvFfG56T27P8JMBWczyvKoCGhP"
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
