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
    "33EXSEchVPB4nvg8LGQxcMaAP7CaxbPjxVS2Cdp6vWtSgzStP4UzvZ3S4jJ7fKqaEVP1utKsfSNoDAq9UCtaZDuL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3S4Bwb3H3VvZUqh6zETeNUSzH5CCSQJ4wSnFgJ4RLkUcqFjHqKUKvsueZq17yrMKkL9r21KbbFcCoaWoZPHDpsWe",
  "key1": "5EVoiwV37kabDkifoiopVvJs4Wjt9wdrJTZSodauqTweNCXQWr1dwGtcduVTjPkw4J7WYrD9EN32c8RAgYBhnDJ3",
  "key2": "62Bvp3QJUyCk2Z2EVJq2tbaM2nY6vEn9xsoVFawYdyPSBUerG9QHS5yaiAqhMKsWxFauGP8NtWfVT31usYosuZCe",
  "key3": "2VWsDgYPr1U4WqXGLqWTMvbxrdWLA3gEjG1ctpJ1SWSTKomLQZWizDbLy9g2y1NCJisSJc9sZV8ecmT3z51iEYij",
  "key4": "63DZyUkNTqhY2XjMKE2BX297DmbxNyGr74GwFBfdzskEHSqUPgjqxMzxHWB9PshE3iN1q6nTy4NPnff3iCzN235t",
  "key5": "2X1LXLSoQSNG5egEq84YXL2nNN2HwW3EncnkVz64CjTkMoPVsPqSvhEJPg1TgmyuoMCpHNy3WZAqJKUJuyKoXBM6",
  "key6": "4PCjCCjRXfngBNGE16gJDUbZ6T6ACkvcdBc1Gsskx9EmVDehQy8koBvw6W3g7PLtBk5yDpvA4VYd4ZCovrRL3SLS",
  "key7": "2jjjVN2JPWgGioqmNLM8DzgQkGEJnZjJfaQskzMCQUzfUtpUDHgdzgwxfFRhxqRkH2b4zAHGNTSaiykQEGBGNrPN",
  "key8": "2LYdMkaB5Ue357neLY6decger62MSgb9sXjaVMsqBH7CfnLntRxuHZXEYr9kphYyaVoVPN4udB7bcS5veuM2iMBn",
  "key9": "3sgDZQrY5FWmQdY1eQz6HznGLbbe1uEMY9EMUMMALUxb4peA1VfweqatmEJ1nKacGHbywD6ub6Q3K3nETwEUj8H1",
  "key10": "67jVqXd9k6Dbx3hsosJjHEqfYfmFUrL82TyWQJzLNPAAjJfVxcu5wEnnnCkYtKhwGF5HpcSoAt12ZoiHCL6RuuTi",
  "key11": "2trTe5baQfc9PB1RBrEGWwnQYWJcXsbEZ3KMqV4rPyp8xFfK8vk8725YfxHaXj3JkuNoEbNGFC9Zbvy5P2aeCXUY",
  "key12": "1v2HKSXUTeoxpoEk1AJib4NgRVSL3fL8C6KJfNgSpTWbbK3ygffsMXu9PWPup9iLAgeZ43RDocy1rKpViyWmFGE",
  "key13": "UxhNmwGrsPDwbt2bxXYwivrWP1UNzY28ChjnAKv7qXDEJJha4gGKEb5JCimiisSs8WTuDfN8LNwQLRvJ8Dnfc6X",
  "key14": "2bS14JcYVjmEjQUHepijbK2Mpk9ABP1wDt9HocFHrYz9iQQ6uhYAjPAr1pAZeAvt9z9xSUKHSAzBz1eNAeA5cduB",
  "key15": "42vWuSVqNujjoZDpSNub1srATvsVPBRX1VCdLbXTQsucwyVcTmU9Do5kSncmW8qZ473RDD3NES5UkDKdT4NjF49Q",
  "key16": "53oVBjAncEvz27gjCPEDCYmLdFJfXhn1ZgMjodXxbRG5j6Z5RPUE2eBKWcwRb8gRzJH5f8ptiNMEZKqApY4SUysK",
  "key17": "5SWeXGJrWxWGU7nu5ezFozj81pCe2RdaWYesW3qj76yLdLpmd2Cvu4WCYtXCcGisEsFb6pfBixqwPRhKBkJ6wPm7",
  "key18": "4Xa2zQAEgNhJukUAvs133qu7GTnCRqUpUE7ajLxpMLpq8rbUVMoXE9A8YvjqXWSXzfAWdTJQqj81MfdLAU3YXZVu",
  "key19": "KZsgmXDWsMwNYyufPhQydiddMLqWCNYUp7N4FF89k8F2nEUY7qbwcuK4HWfsysZsxftHK7enKmZ35a46s5E7Ldi",
  "key20": "5t3PwgBfbJSbHsNxZfs5L81R7cMZohgFv8fySYqcTYoNh12F9jPXZeLecuot9r6FbNjRr7AsFW6R2U8tp6hpRQL9",
  "key21": "3zVYGh4R11VAhPztF2m5x6i5hcWDkb57ovLcei8Z9nPwQSxFqYaD3aSShYjtPuUiGNVTJ3xkRDJer74gviSJ7Mds",
  "key22": "3yCqKT5ALqWDztUjdeC3zgMDWBNeq45JySejydFDQznoDVK16nV8AnzCgfx4dEMbQd3jhADgYi2gYPCbuHQ3cxUP",
  "key23": "2r7x7AsScqdQJXJAN2RfdTwQ8u35PMUqQJ1kc9qmsSL6dP894SMjR3TFEv54rsfiruPp6atpdH4q9RZwAUWxoAzj",
  "key24": "5y3W6Dqheu5v7bk2KAzMSYi7eySkYu4UtcM4pqRmSUEnWt5JnpshUjFQK6YeyqH1A1RpCEAoNgN6k8zoRxHF61Vc",
  "key25": "4jhwV5RSFaiBwNaNjdNLAjAWLpjeVJ9YtQ3n1om8aVxzKyHrarswXsx5cPQvjsEgzaw2h8sXJcCYH5XMtsbQiE6b",
  "key26": "2NkDYdfUdHFJYEfXLdNTEcD54wTrFmRVY4xC3SEa4eHJ3BHVhBmXWuGoexwmGpkezXqZHSRF4pH6soozmNtmRWnB",
  "key27": "4RtGc3BziqDyZD7t9Qf8NatgpZ6yY2nF53DiANLJtjmNVGebW7T9Nqz6Ud1Av8nkTjJP9k9YM6hmz3VkgsbNyVd"
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
