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
    "3Fetyi21cH5H8XDb3gwrD8Xdv4CNaf3rkjkaLq39v96qSQ87akWJw4EWB7p1xosk2Cy423CcnPDsNWFHeTtKRYDX"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "61pGyN3oqpKNGwvMezhmTAzJbqK6wp5ihDpHYY4wkgvWekPo9ZKhrvXPEbZW41Cs8eNZMwZWPDpQmHkvgU7iLifz",
  "key1": "3FYsmYbEqR1WNNVfUTjPAhXmuJgtG9bdgPVw4dQs2JaTbSNUTpZRmYtR4Ty7cutBLEUp5FsD67wNL4GPgMjsTn2L",
  "key2": "33zumerEykWdP64Kh2p58xyKLihffUq1gqMohvAJS1hdp7jgEDU4hjJo4pTjPwudghFDU2Gn56yRr4zTeF8sHXDU",
  "key3": "5eNz5LaphtYqh4G7Ms1PAB1bNc3TujUdtKwrRxoLhZXCQXibTedkGYhibCnhh1pp6DJbXBUTzNd9ibJypWg7x6aY",
  "key4": "LuQ7tUudrLDuDpsQRcScLk14uVafkH2M8y2afcCtKTWSvQx3hJzykH7WCov3wBw7VzLFYK9UzbK8kAWmKuzxjdB",
  "key5": "nWhQ8wddVxar2PVNwKKwYNLu1GWxDqD5a7kUt8ixRJKh2WvaBX5c96K3pGsnriL69gk1bi9h3WSCDponJQGP12e",
  "key6": "4khj7FWCdrJHQ81nEmHuhV7ViE4XUiNd8okPxwJnktNsKvcdXzKU776gDBjvLcJYfU7DV1Kf5z8jvhtXfBReAEme",
  "key7": "3fRXyBmA4Z9ScwXr9JHHdfVdLprWmzPZywkY7GMEeFhEotQrtdK4c91bqKiEsr6d6pMHvXfMoUpuWRadGhvdX3Lg",
  "key8": "BswE3RXC3zpVY7r9wiEKkSxxCNmnJErnCYYhhK625bLK3v6k8JT8VEXQQbkRrATJ7qu8eVaWZvjSeioMVYK2LJv",
  "key9": "4hDKbBMsgFqKVQbhAyoNEDuBLGQMFQhRmQNqyUisD6yqst2FKfAKDd2c7mdUus1Fkwok9buPRUazBahkSP6MkGW1",
  "key10": "5tbbpyx9KbP3vzMRsGAXQ3DYhK2MruNoQZKyohtXmNer8i3hmNDBYLKCA7c2CcUNDFkr7UEuf2QEPNYwqxXVCWKf",
  "key11": "2oWTUhhMdGPhwFLTVLQDJjhixXp1TnsvcfHrh84GXhUja2LNFcmFn5Utfe6pucuWKce5E9oujYd4EF2iNTK9PUtA",
  "key12": "429rP2WBGC4DED6R1gK95iPuNVeKyaesNrTUyxMkp82jbq7WU53TxjgTVfju92tLwPdxMyWH7m9Nu9diiyUuAtuB",
  "key13": "Kxkh1ZjEdt8gtrnDD6gpzTJs9LcvXDdwNCT8W4Vw8iERAzjAw3XoihCiLVC834SC1PPtA5agqEiT9VkfCFvd67A",
  "key14": "2Ljj6bB1yrWeEegooivgH2N6XDeH8165BSRieiyumBiy2VFsdneHxZ97bRJacRBiK6Xap8LpCAYrB6zZKZAP7zuB",
  "key15": "5iY8RktnBwhknQHB2TrtrqBw9eJXwgB3KL4U7o9Qv7FDoXMevyesGSsbgobVtNBCou5YUxAFLbVe6mNkYvwdqdTQ",
  "key16": "66s6KADgYsRuhxZTKtEzxfZysvJ784qh7CVLygytJDfvCVkCtLCMvTvhhmWkwBPgfjUfgmWexoMARt9Mq7EkorZQ",
  "key17": "4hwnjTKCRnkVQEtQETMqWneHZymwzNaVP5xj6Z83DxPhDW2yyY2yz5fa5Q9WQVgsbU2JRPx3X2HA4aFRXUUg9na8",
  "key18": "5AFPMy1jo3igqnwE3hTtApFyR7edSyD3HHmFreKLCzSwVySLriirks4RwFBLNHA4XguvrVMXB46VGHFhrsg6rMnV",
  "key19": "2drN5WkUXBgWgjmenwbNfMK1G9kXbxGLqwpkUYSdZDK2DGw35LEWJmYJTZPJDk6GQUas4d3MAoQ6t43gS1oJ9bDo",
  "key20": "37DiXJy2bucTHrybv3xuvLxDv9fKSwx3tQETAms1zG3k9esWLc8C4g95Zx9W5LGEXbEkQxLy5GAFFEiMJzYEydPk",
  "key21": "4QUp3szJAJTxQCQLoJUKwM69opB81ngh2t99oRsbmNb9VfnQYMXAptZarhSBmWcFeP8vHN2NL795Rnnyq1wrzXtb",
  "key22": "43Nfm59WGB8Vt1WEM4SuEQ4HoMD3iwcVXTFK3ch3gYvnV8atx9nPan48vQXCGh6xjhrLye1iXAXg4WNARwuR8ARL",
  "key23": "4nqxCS2yGgLGARTn2FdvExmcdxPJY25zaLynw3b4NisQ6aGMNoFuwGTeRtS1QxVWtVXQbUFmM4cDQ2R3NesyTCx1",
  "key24": "5YxH6p6fCFtwCgqFpn8XrsTqgK6YuvLL5RD1phxozF2cZwaSnCyAkpHp45qC4vfKy1AmzPfNCVqboUbRJdcKx9jb",
  "key25": "2qQbc9irkKTzqbHfMgHH9kvemLXoCF2po5P436dSiXwYcwFxveqiAeTHNWhvwk9a5G64JbpFTEYaeah6XqRn9pzC",
  "key26": "4meBvGsDiTiTcazrRFK6bBq342bppG21XK1txXm6Yxda13ou8bsoWGF7EpPhjsPfh8K8pcpBdBnB4taiJutwX78Q",
  "key27": "3n6DJopyxBgKT4RCpo8uzeLuh5uTvXEJgnq28pNvxxPqUwCzCK5zB5Q7Pdxfz35XLwPm8PrRJfvdd4Uz2D1h19r7"
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
