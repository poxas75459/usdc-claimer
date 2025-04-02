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
    "5jyKvxbyHxTy3jiJuNcroZuYp428gDXzTfGpVuEYvwZYL1ubUujm76sNHSg8EDtAY699JRSRhdD9xSpke1SSi393"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "7BWXi4BRsFE55zQ8KtdLewd3CA5LzkCAQg5kK8EouMeue6AUHsZfjBist2MNHtkwquWkU5F27tBmogu5XBDfYPf",
  "key1": "5BPzzVahecnaDS42rHrzzYmLrr6ymCiu5vUdiGUBzZQzuF8hsX2CY5x3wPyDUia5UU326FJkak1QyfR9eVTCNefz",
  "key2": "r39wjDCQQtXWZxG5j8R2krJKW945BE2kagumsa5p2ToqfsKwEE45WGGdEhVi1nXgYkDCVnMhwqMeo3FJxKDJw49",
  "key3": "21fZ8V3VXoHDhpT4jLAbrQQWyf3jQ2qoEjuq8i6A73tvgrTBoV2M2PLUYzg3KecViN2kc1Xc2Kvh7FZKo246fjZi",
  "key4": "4ffmQazB2fxWhV22Zy1ch1Ajy5kJTTnmnqZJjWzdCaffKGon3knrX9gXxKVGaaykptFbPjJFqqNYF37b4vCFqP1N",
  "key5": "2zf1myqqSSbB4zu37KCEwCvjLi3tFeLpUYoy8Emrke2oTKUbi9Z2V9VHgR87vBnWva29AgX61LuJ5gv2Y2Nz8P4G",
  "key6": "24CqYoYyxPSLnj3Yv5N9RqggEfxMnJHrLgDnBaAuX5HWGrAde5kb4pA76gqbgeff8Y8usd5pp5jnFb8NgFjpM6JA",
  "key7": "46WbLX5PCqgQaz3uAUJS7rFx8G2wDpmtDtTQfNjAkRnXUkJDbg5SV3q5NDSfNintWxW9jEovmRT93orqFjuzpNdL",
  "key8": "57QM7kvkTHcqm2xsHhJYbNDegKQDz5fAT1ybzNsYRHjH3fzY4weTPe8ckP4AdFzo5eNGiHpTfkF5V7fYWdJp2czP",
  "key9": "2aEXsP2MSJuR4GKybgEg6UY3rTb7Q1o1s15XndesmhdayWRe8nVrNgi2ZjEGsicr3c4BrJojyFT4Yx28v1gmGzax",
  "key10": "5SmacFos3h2aweSpy5fgVSRMYiLbXrDCy1E3hk915uzeyXRtizN6Xg8dM4vaYuDFkrBf829rR18ebHnPmqpFVCLa",
  "key11": "F38gtsCiebCGM7zod1sLHmKYMUrETHwpTP4qrq15be5kxpyWAu5tF3ueEgUezA3W6csuu5nWaE9muwZtvyZ7uXt",
  "key12": "m5XywoMifxpFMG3KhYkXRpSm774kBj6MT3A3MonvUn4zd77tP6HAW344nVht5RYNNRJdMquiMYU4dt5fM2YHfXe",
  "key13": "5n74WCzeLQSGCzvxEKksMaepDtAQ5TNyyeZ9fKaDY4f6PG7C8VXFgkHwymr3fT5eoUbwqYkoTgJq41tqectx86fx",
  "key14": "2ySXdtyXJ8hg6UcrpvnjgFenpp13teSYGGwHmZYHwQfLxedjvAyqratt9FhkDPfvZC6C2YBDdZmMMMEQ6Ly1dr9b",
  "key15": "rtCxiv1Ejf7sBa3QNtDLBAGsEyYZinmnSTw5xRpEkYQErSMPRAQvhRq7TfJ6Ei53gvRSMWuBrEsRtvVAc2xZfVd",
  "key16": "gAHttWuQbCWKYMx4uVQ61Kvh4enzoCJKWsvupuGPT84QaKnR2YoFifEnpstvxv8WDM5bn4PPjUzrTdKPimkQuqQ",
  "key17": "5dqTWkBVXuGqkuD5Zp1j5wcshvMpKeEcSD6Ag5xMJbXJDpHmhCk2niF2fMJTvQxG5qpFxF36BpEDoPHR6jqtqaqR",
  "key18": "2CajR8c8xGXaGNu1HBciamJZGrrvPUwEshSrazwGiXLXpwnethx6zhf6Tnrmq85QAH4Tc1aSo6GFJikJ47TAbiVz",
  "key19": "meeHd1wFa3qmGrc5QK6NLopJftgXgpDbbB71RPdZ3MbanQntgRkeJmNi22KkWQoqzRwozKWsWxcMxFfjSJcPNmN",
  "key20": "4iHHccktLjE7rLhMhkX639u9EMKj1cSdru75tPFfAgRVosV8UrQ7EsLXsUc3jeUf1UYLutUYd3G5qxUmrchpvqGE",
  "key21": "4zwr67iEcMZuRMxo646nMWVWWYsk6RQFjREJ6MFeKSRzyREVy7uqdh8c174LLHvqUXTFLgoxaJ62m8iRWSmR45Ag",
  "key22": "3ZqKmYzAdJn9jwxn9ucj7NQfzB1mYiM4VT2irG4N8JNanijE67VNMAZAGaeK6q8afu4VVw1XD3hoLXpJwmrwrTVL",
  "key23": "3uHScCZvCKpYNe5ThTACBBac1meGSrvCHs8rLhbyWkevejF7UQZ3qC3oSFsQq95g5EHozhtXQaECkkLJSsv7kYfE",
  "key24": "5hunVSUj1wD9neW9xGjTSTzmnBJFWbPMCoRMSopaQuHAgiSKVLBL1eTiGBd63pwMMWB6ceziJffPWb6REgH9c9vQ",
  "key25": "3WpPZUZ74wsG4szR9MN5sTwoqtMQr4RdkmLLFpHJ9otG99B9n4yAGjwU2sCBBhfqZV2VVfnmvfWVytDAyhA99hpS",
  "key26": "UqQFWPzu4dtvDtQuUWWW68qxQgLu46o7CpkDBHoXoXav3XTtZjy4vq9NQC296UDUJHgqiaDrZTWv92vsmAKmsbB",
  "key27": "2ShN6Qacvk2ZJydvAKrKS6Fv9boutuFT22fWRoJuGbPVkwp5qptpW2KkNWMJFg2aQDsSXXgJqk6QQZzkg2U2wxtd"
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
