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
    "57zRspaYf85ZDvri5voDM9pxNBDUVaiHfHuRAcLAEmtu6ux9h8hhdST8MEoaBH6Sdw3Fz7wNurqJFDhWcVy67ef8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5D3pS9AjYmGmQDfhDYgnK44aohVRMeoCuef9r9h72QwkmPEdJ6oRaJ3wmG46a9y2ycCUXn4yKJwyTMw8eccYNsxP",
  "key1": "vrtDHkN8hQ6d3xcEdYmM91xXZ6VHggcu2UrRANLbpjCLXa5JGwcL3BdsVNWpxjyqG3zkma4SnGVM2Yc8HJW1C12",
  "key2": "hHu2b8kRnb6WyKFysG5XGzCQEvR6MfXp2X5dFzXJSqVJTdr9kbpWt5cDG4aGm8NhkZq6df3qjduxn99T2jQFWao",
  "key3": "5p2xqXJBn2f59HXg2YBWscm32k5YzrjfoKciaGBn2X5bnKuW637wGQXU5AkWV4faqnAsx6NPqB93nancBMT5WFfi",
  "key4": "3AwFUQ5at2785c55LgkwL2eXRSo3LymuxbWHa7tyKp5T2Fqh6JBVLu7NGN56rcohfRVEEbksF6t735ZPAE22d7o1",
  "key5": "4XCAEM28Mdav6J4wKbFkRusCkaa6VVDHUJYRhjnsZweqckJetqsniB5otYayx8k46aVFFiAMsAdKX9TdxR65JSAn",
  "key6": "4FH5QEePxxLBkK1TcjLDs8QHS1Y3fvcKjWskRorUzkuZZZVHvSwfwovEMvNPSHGxq3D8uiao3Z5xv6iPZGhToNVk",
  "key7": "nBRAR34Z5ZZcpGs27zE1Nn4TVdqbYg1NDetgQBPejFt9dJNBZS6mwunu5HANmMqZnzEPabJpRnJoywf9Ukjg2aw",
  "key8": "4spa2THA8Mn8YDo223uhSuFko4nzKLvzKnKdDxQQ7op9GF6r25fjPepkcWf4o7JjGFaQ61uc6n2FVxt19ZMuEsBx",
  "key9": "4rqD8AAPfZWPvnNL8wmPLxAsk3kcCL313W4We9ELMzA28UkKWHRGCR6piJ2MP5R6uZnE28CmsyjBNHSHxydxuqao",
  "key10": "3wTaquLjQp4D44Ju3DNQ98Yy4ehsspS3ViqxGJZuU7wmddzsHpxtBMQEP194u42FwD17AfqQynoNTJWWUPRHtTKb",
  "key11": "5C3sabwZ6Veph3SXShcuBkmJ5dEVKp11EfS52esjFYiGuXrqnQEbVaJri9Bsa6sDvZTS8UoMCwbqaf9foDRaG4TR",
  "key12": "3gEmQ4CnptmYzsjLUoetCuryVyxLzWxLfhWCU7YTSiJfsswgCLpj6QnbXEuCPSyhe2ThPzxrv5seEo86RR2tFnpj",
  "key13": "5NZwHEKpStfwakityz2mT28YGu81knkFRyMw8E1sMQCcoW38QZnhTtgYofm6SSm43mS82aicxZc2qvWvDEKusnux",
  "key14": "YmoEmpBJLFpbAUEq2Ehhan2LeQrcSnVLdkDW761QaAyYNcDYEj7fRTxRgDmAAS4hHAPJAQpZPuMFgdgVNwt9dGz",
  "key15": "55cxUAzmLHgcHobC2p1WQaaM3xeBYbdEGjcgm28r3RCAJgoVs7KafiTt92L8L4QsPt4qDwJbxsJJiAaoXGXoPCEb",
  "key16": "3U7zgrQUjiSeHwVWtgxpnHxfGkxcdaALbcgNdWennu31J7y89vj6xzRKjKUvnSDixBFUKQ1FaZvAJWCpMYmKkiSw",
  "key17": "4BGxh3FKi49UnuSjP6UXQn9BjLTJdqhHAnmBEVUMtWZJhTNM3XJSTeEAzJYGY8G9eNdLsSTaaNTY4DKewaUsxt7j",
  "key18": "2DQNjeCrBEZTbydepcTx8YVnppQ6h58WUuPsgmsoLvN31MuWbg5Uo4Hukyz2C8m8JeA1JQnuQoqkMzRFa4pYLFPd",
  "key19": "4Tk1XAq6kgFVxtYvd2dDb4t727QBccYM9HeLNLDVqWa24zEavWW6SdHCn9TicNzAom9hv1bZcyiaiCWdkq3BWE2f",
  "key20": "43BJEesBy1U8zRz6BamFYzjAbsieboqj6cnCLAY2EcQXS85kmuKC9Tzhv9HBQ1WX5hZgcpkEfQmKGCvtgCfdjyqv",
  "key21": "3XPk1mUwcVHtadKwA8bavghdnxZHyyE3YWteA6vjL2kubTpCCJV6BxzNb4Qw5NhqgQ64qfmugo8XtdvA4w6p5X6o",
  "key22": "38um112ZzzNJSMtt4FNeXBZ8CRrjtiX9sotR1VUSgYZ9Z4ixXLqUfsK5J41Y27TeR54stwVySVFiGemzM1gVpfK6",
  "key23": "3peRPfvmjTB2Z5sCyyKCJWGD4duoPmudd1K2qmBXwX76javuw17ow8zo6LCLpu8eSbrKa3pFHt1JnKME9hpH2y65",
  "key24": "5F1AW3u5BxjQdZjAKMSEAMQJWCQLUCPepqfEtt2R6EaaFN62Qc6thLdYZ5zdDUtbYNv2cNwxL4TtiRcgtrGnSzgw",
  "key25": "26wgmyMFcYq2cVxdngHM46ivDRAtcKWp11ksCNzoVK8wcjgnMn6SgixMMmmNokhR3E25dtFcCCpXgLMFTS4aiNZH",
  "key26": "5XQBjGQNvuvcFtbjoPq3noybhUVewKjeYJRsjrmc7SBX5hdaFUskFwHYhLr7WjyfCa9eosoyQTw8Sho5v4Tn7XAS",
  "key27": "5mMu7QFuLMfoPH2NdKjvYQsTA8rDGbLP7xCRnBr7X411mQCFGih9F5nMDuWq4JScwyWE2kjCpXG4FZnYZso5VAJy",
  "key28": "49m8kxy6dekMmtfgXxBAnUzJayePLaridFqgf5vyM2BasnaEzJZ4gE561L6cLjxUcdcCTZxuVA6sZMMUFfRNDtr7",
  "key29": "524u7qXRXigUeo9DL4KnLpEtSVZ9pRqJoVnQcJkAmaNyGSzXpKSYe2SavcuXF1D4wWCZxfMYMEWN5fVVrhawzJfM",
  "key30": "4Y5WJimdzUQh42HJBVGTYdLd5AuDiyhBVLq74aNUVHZMKwm8TtVSoN97MwA2MRnf3gcopsGcdLeBFUQHneYN5QGP",
  "key31": "GRYjdvNY4vDkg9gjhK2DhMp7isaDbnXRtTbJBd2X8Hdwjh8pGLpRqfcBgB98QspNtcTjeRo7GuCzUW9MG16mUGM"
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
