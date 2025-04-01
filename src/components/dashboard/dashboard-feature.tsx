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
    "5rMhTvPWbqccvxPFHa4wvzpD1ChHYQ7oZBDXCkTzgMAZm1o1rwaA5sEyXEtTTE7YfcdmtMBiWeaafU1x7TyankDW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5GPXigoS6Q6aC6ELwmA43RiugF6p4x3EEk2eT9S4oZWyJg7opPWKsBpYZ61Mqmk61153W5zp2ULmnHtpsZrUYFyB",
  "key1": "3qZCzSJG1HYbFQTdRXLcWdHEuoJFYRFCJwYLXWfMRkw9Uyor743j4zMQ2AXnnn4FYh4bTb9Hja28XhmMf2vUTYv1",
  "key2": "4wseN4oeraoYEWmzvyy4Wx8TDbdiSzKHYofzMco52spM4ACYJLNAPTfrYEbRNQFmudybn74eydXyuknUsK3dgnaZ",
  "key3": "27h4MgzZhVKd786Da5N16k8AtgbdygqSnEgv8stuCsoJFAXw7QMnLJba4QqmeTvqevsoMrv6YVrzUYhWjoQwqqSD",
  "key4": "5Bg8VDtZ2mRrCWjiGoazJiTDjq9tuWCFN7JDGGHKXX2urgi1RtrSKYPscKd9ugvYfazprZb3gnhV3gXVuqtcsV1b",
  "key5": "3HTGhBz7H246DDhSeZbPPbU5C5Y88mpiWC4eNonhFWeBRB4C6c255ghLuERAjtoaZJ1TTtR8Tw2QFEvnvPBiiF5k",
  "key6": "5vKTVQXpssdvrCZhX5DPP1wrAPsWctrkdxpkffjJcrZoDhtVxxy4MgHTVXYxPJLHQBd2HjzaPUgjVuvuTyHvCS6m",
  "key7": "2mM6Zss8QnndWqF6ayatoCVD2evXGze8V29SR8qabuQwcfHfDdMtNosLYJvBLXVNZBFTLKqWtBf7m9PqZLhwz3qG",
  "key8": "xvhShNcZiVbgNYfuLFvwrxgDYNZi7Zt3idcY5fgbXq5wgk9WWY375naQVFX6XcW7zsEsTybUuBfDmWbPbD3Bcpv",
  "key9": "4dzvHCDwqcXboM4ffR7JF3Vz6suzTsPoYpwc4ch8Ta7f7ncsLFjJHyD8AnzRgtFUmEjripLycmSz9DTWy3KqETto",
  "key10": "3ScxwpSLfq3Dt9cb5iZaWed3NNE79XddfAC7SaTr8G9BfogJq5pkd1XbXYnmPFcNJFieHMiheJZmecMgFbiw32JB",
  "key11": "2a9MjWdGAoK956TegNTCwPdmXJtCRKtGUnpJGXKUHH7ZLQpFAnN4MAqzZBKCcFDi7UXrmKyK366gLa6rSXiVm7ne",
  "key12": "2oNJksCRpmfaBX8R9Sd4tHJZ7BmoEfKeqLqX67pME9TEJivTYtKkVFKnrZNAiZPfhQAH1dc7TwvUPzzhbKp4xF9A",
  "key13": "2SRjKSQEXT6Tp8ixZ28SLyT42XZ9uLpCaaSZxjTmjE6ys4w2jnmaSotWeBFXSVHBmxuMM2uvP2sBYq2tWnr4pKhF",
  "key14": "5BsHBftU6HoWjvKCqujtfDz7vXVi8SFNu3j9d4gc1UbyHz76H8KuDhKPhh8r8BkM8KvjEXowRkasAsr2EzJndRTx",
  "key15": "4SxF6P1rg1CQQeaqjKvFRVvJLPoJP5KdjKPuy6XHqxfNdT2mAHRSNz2Vcjv8vFYiVQYzboACjZpH4MLmZ3aN4fXz",
  "key16": "3RDrKn4AkMEBvGbjERQ4cEufaM3mRpkb2WEUfPQhmRU4HymU8dQQN6Q89T2nFSaFfxjQXR6ob66Co2uKdBnDSNXJ",
  "key17": "3BduTs5NntKkYjghXpdrjuNmzWapw4wSW3yDMqDNcxFoJUzpHUfuic1Ufcund4E4VqQVjeLkhWWurBqXHpgv1Pmp",
  "key18": "2SJTGduYBV19JCeHoCUAreMZbqHLrnoLKrLqTZDyArCwfLJXZkxnNqVHNcRMJvp4iPkkMd1aBpZa6UWGGzbudTsE",
  "key19": "5k73mv9Qc7vLNqx1WCJ2Bf97r6szrz4LoXSjN2PAj4czt5rQP1G6T3PthmRTBjMv4z2KD1YMtdbN94R2ghWT6pM6",
  "key20": "3hj31uWouoMKz2Zbk3MWfCo8TUkax1oPgJ5ar8uA2hMMx3iYtpfrw6joUACxW53sRxKDd9kXSX1tsZb57KSnBeTG",
  "key21": "2a4C7JWJuuYGsp29UBm4GfSYxUfPqEGimSXQnSENMRqpFarGeYYTujtDGr1PA9Yx2C4UiQ2QiTZtVMxn1qPKs9jJ",
  "key22": "2tSAEQGbW3ZTuy1CbWWKvZgTL4CLoe9AHYiAgrawK6WYfnsVg97eFkhsqJ1M2FmpCtFvbfsvue549f6ZnZo3jZiy",
  "key23": "54rCG3bqrsXTEZT187Y1BvVgWw7fNyyPDVrFEbtEVNSB23v37BriphmG6vXtiChE8WsASmaNrd4zdjJu3AvkJBq",
  "key24": "4aYduPCLYUzceLiAZvDhk3yXBRKCKdzhCWdYcXBXpERVqC2bweVBpztXK7MJYR4f59tdJ8vGwzKgegudYhdYrmDB",
  "key25": "5smoYEghza5jXtVfasPgzUW1CaCg9axXTZWSXon7i1N6w3MaVZjz5w9hGRGyFVc7ersEJt6wcNoqcHEBeGc66MZf"
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
