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
    "3UJE7QCTMMRti149EU12TQVhUsizSmtQir1zgzEWjmfoA82Gv9VVmy3Njv8eB9CVR9WnSbH25ru9ST2oaeyNEpXp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "28Quj7WL4UarL56M2QQkwKsK2wbahnQ7oT2xuYK2rGyzZxcfGsk35bhN6onrNPoar6GHNCHMLGebnnmvZUGYxdVq",
  "key1": "ce687p5BisV6RcLYcrfkXHZQyjikBBkA9ibWshWGMRW6oce6nRmfNznXPspejbZis4TWqBUGKZxALhpLSfKLhRW",
  "key2": "2RXdkSxXK4t5nZ6mkgtVL1mwbfzZSFGV6BkUovGszaST6aH2VairCzz15TZbH3vJ6VjSHTf8gTjWiYJAwdGEcbzo",
  "key3": "LkMnhEiEg7ZxeVUtXpmqCHK8aqpASaXYSoLLBoftoyEoHwZrwBvAhJE6sycL5Pfh9ZHaCakVnKaRyGTLsT88LeP",
  "key4": "4pEwBxgJQyF6HomB87PLKfKWrdtPHLq9oeRiBPZu9jpzwvdxEqAzvtt9srVVUvvAQg3xj6RuD8wqLo7HXDhgThBe",
  "key5": "24x1Pbfsxg4JDdYUx6EcLK4RcqBVAgPruD33cB64Po7LvFoHHbVDKPokC1sP2tvULSN2RVF3FjNxRXPLzPQNA1YW",
  "key6": "5V37wddXe2xj4Ubj7tSVQYGPVuG1exC2UDEJejev2Bw9sfdcGajpBWbSonU22TV8vGBAetw6KKnKCzS8XurShgZt",
  "key7": "5nNmsbFTMZaUb6BzkxQH7N4Tpx6UvHmDqMz46eenRbAzx9iuLRxGuKLrd2nmZygUVb3gGxGbmgJNRASRPdNFBS9",
  "key8": "5LH431Zi5hffA6fneRtMwnY3SyRcgCmAmPVpZbHJMMTFkVkPDi9fF3sbuGtkf6dZczCMe3v6qicDPK7T8sqrk5gH",
  "key9": "RHdiEqyLHyRqzKQyMPfnGLQbPwaB9PEPenhPHTxQA1NvTiWYVzSE1g8xfaAo9B5oxoctZgcNDN7Fqv5ZeBpxoGk",
  "key10": "2WPW78mpsX1BNt24M2gVAFHArQFto7ggRMXiS25ZshHMnzLjsiELgoN7ZoLGakL6qz6WKgSm6vQxz5H2o74mpbG5",
  "key11": "2LoitXjA1RJE7xnZA66VhcofW3d5jAeC5wHzo1UmkZ7itU7cEWVkxhy7dRHdKa5QydArb984n4aeF2v6PDg3dtd6",
  "key12": "Rn5TGWzfNuNY2YXLmAxWWdCfoo5DPM5NFYU8Cab3gbp1Ud3dxiZvAGow7bnfxwZK1L1KSLPJib1Tj2RzzLsmtbn",
  "key13": "33wf1e522ymFwuAS3323ZdGT9kRx4kmEUsph8a84q5tAGziheY6pec6FARsVQqLEaSw2GBBRJJrAZNrHQETRjHDP",
  "key14": "3urDpajN27KhLF4fu4FFdRwM86ZD8Xq6V4k28GucCQDV3TyDjncAYCiLinEXgG72R1CB63AWWdYfVtknp18uiukn",
  "key15": "jXmjuMT1QLd45ZZZTPtEufiGQQdCVMmwWwQ6yZ8JF4S5mdbrxDcTtMQBMvs3ekdDvLkW8KHBVdFYJhyiEKEfiTV",
  "key16": "4z94z5HpMqx6xnB88hmzgRf9fuPsz26jPDA5QVTpN681vdgqw1uobvxZMVH79c4qey4H5hZME3mmT371E7PxqbiB",
  "key17": "2Tow5CUNJGDND1v2cR6aiM2PTQA4scfpmBfC4XLdkhWTWE6fLQ2dv4W7cxiwMXSUHGCE78UiCaLvyHx2x8grbpYR",
  "key18": "2Ngo7JhELohGyGEM5DdFTZ9oWDUEsYx3gobhUtowwiR1WTsTSBfbnX8vrBLjjNtTLhj5TaDjEp8UMqDasotMbmC1",
  "key19": "JKtwD9mfuX59n9AJF7degtm39kVYru6saFjqTtxzptWUny5TqosPnjbEqj6osrzPH8XksqXeUPQr7QYqAXXSW6q",
  "key20": "fL39T6boj8KCbjkBwEeW4DcbxU7dbT3MYCxsTvD1zm6JWug8P7prduPdeaoj7Xm1kfGqnVXG3TsQLSN7cyAuQmx",
  "key21": "2t6PbqaTngsYuCXP3wvUvZreLAsd8ZMV1S4i4R6tCPehx3WbYM77bEQVMhYAu3bhyEbz4WbYiCEnk68iL1uJ6QYH",
  "key22": "NrT2USxZMPRH7PpLz5JyFvPRNoJPUCh5XxpK46zAKFrJyTZhGRt3cE1rV3FSW1zT3uEBuv8XUFaFYEq8JdNcZWV",
  "key23": "5j8JGodHaiMR3cqh4msJJn8CadPAwQKwSVrjPDKQWhCDP4P3wMpCzVPNbyB7isrecnPCpaPWZdJMejLMFLEUFJES",
  "key24": "oUNZ9fgGAF3vRqmgwDVfy3ZLfzLEBZjn5Nhnj9FQyJfECUb6F1QtMke12WXv3RvYE9nci6xg69HDWhvFX5Aq4Tm",
  "key25": "31wUvwC6YEXCYETu1rwYtpLUH9eGJtftJHf5Ytf9BGw9kNSRiEWxLnSQGZDxy2dUiUqVUtFsU51VFrJFY44MQyB8",
  "key26": "xbwDRBVWsnm8A2YbsSM1Zb9b4bpUT58UnR9TQDwboCDWt1PZBmBARHKkyuMFom2WQPyJdktkJZmF6d5f7xgrafT",
  "key27": "2mk4LMMR7fsvxjMDv4oBykzkSNdiw1h9G31LubJo8fKCYUqsF2KrYdeNporuGbe3JDF8CmUBMRQimFqwgdTTb5h1",
  "key28": "2o48yARe1hCC9ye67YfvuhzS9mKpeJ2RNc6oFH1WpXoZNEYxH57TRyEFFPB32cyi5iLohDjYiNRAVugtHASpDpZ9",
  "key29": "474KLrfFCJTrc6SKZh7AqmAmeBgiGipEfaveRxNVmLu7ctHH2SM2f5Lbzucdp8tKRkvPf89AxDnNkZY8MYghxxYx"
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
