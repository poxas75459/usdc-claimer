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
    "Yd5VddTSjqBsR4HJFJUnpHEspXqVyVV4QVKneCjQdwLuPbPMMxMRoD1own8VsZTTGHRw5M5EiRQLgXjxhSrviyp"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3kyZqVEQv2kijRf2evzAkdLeqMrQKGaEVGYqG2DF9yKwk2HDxRyUGyWfAYFEFm1aysinRDHgz7jizhfV9gGrgxbc",
  "key1": "4TLbcHdSw9VcwBh5GPrnNq2tKB6Ta1R6UUiva5FtCCfAWZiGAYAgcP7h5PeT55CP5ctSDyxvjH12SGT3GyhuKSrX",
  "key2": "2QSfxy56yWMQ2aJ33Z9QsXrgbtiHAjgDDyBpvqnVZ63kqTXR25E587XHNvCFNNQ5X8P4ghLDU1kztGrrh8QAnJPz",
  "key3": "5VZuUnfpCep4jg7SvCH3pTeMrFDA7fLBuZKArqawYJ2UMnM9NkPG2A7RWPzzieJhe9EKJcZUWfQuzZ1Yrwi3iDEu",
  "key4": "2nJJMGfk2nbyjW3prEAkqvtjqXTYuUsQkGXbtXqUa2So4kPdbM7mcpbgbnxcTqBw1Nb4zuNS4LDnAfb4KQ8knQGD",
  "key5": "29ChgdGuPShH5AKC8rUaoWvPjv8orBf5mU2JYu1AmuBgt8N68JAxkH2nWAcnDwn4oPeKKgieKnS8yKaiqbAXtX4t",
  "key6": "3GALMnBkYnJNLUR87oCDEoKkgEq1sv1sWzCcAV9vFkWgunF7ZBq7v6C8uZtLuHfdzfEjRata4xznguVgPLts6Lti",
  "key7": "ceY4LdLkXoYr4h3huZLQf7njKTKm2uPbV21hKABiKtgMDsTKtmpTPHXKRYqaJLAY5BKD7KNEJUdkoDyiUueeY9N",
  "key8": "5VKwYSVDPpuTLhv1g7oMhqwqfJASPf9sMFvhWjnLHB8ZcsyQr1mAS94ACBJt4FBEEbzvwhRqgsQCDxi6UWtkg7Hk",
  "key9": "1CXW8dwSAVwdQPpoRLFXrYzq2HSi6r3Q2mA47wuV3wQnkTqD73eTSaySUimLx42k3pMZwwWowWagy7Fpx54feDh",
  "key10": "RkuaAcx5oAxxdgrin4shdiRSqcAnuPTQGeDRp1tnPi5eV2Z7kp5WD87kdzW1Tq7kXJhjjnKga5LLpmN2C14d8sV",
  "key11": "2hUB7mwWY7yw8b5WLLNpASzEfyiay5qNfi9XKvBorJwZDsEp5DhFZJsDpmq5vCEp1LBKnrYJWY9uPGckovfsXjCZ",
  "key12": "2FyGxt44Ssd6AqSp8x2L4Ju3u4aiG1S9okbpyFtHHhuJ2yd72L8oTHaeeLFdYaUzm83GZsESQy9qErfSskaysYXG",
  "key13": "KDvQRip2rB5wvfFixPVa5KpMPwzBiFFEgphKN9goPXjavRvjr5qwoc8Pw8gwSomRqgiiwryZT6JmjX4gsEeX1A4",
  "key14": "3udJzTRgF4L2YZ7KUyyBmZ4P5DbqZ7ohfkKGaXEykSJrw6L7WZYbXs86fC3t8mtsZV1KgU84M4rxfFU3pp7pSex2",
  "key15": "2FYFhjswyfhPuVabPBepCTzAFXJVJTAY6mciy2Pd3BevqXMJ5sKDVAoAwJeBTrPaq7sF6atzxJrD51x4xkPsmFHk",
  "key16": "3xyGzSFTq9wYCdC2pt7NsjFdX8DZQhKxTB46cr5nRkzNKQDjJeiS5Z6633ttxCFrxSzmQ7TfL8sF8btvyU8t3634",
  "key17": "4YqBjkFcyYyyhefBDHhi1Xb2FeF7ho2bJfFuCNR49innhGQmihiFDEeF8GekAQ413fBXMBxccjppMqTrak2WvEVi",
  "key18": "2FDCs2wXAJimotQNE7YPaGRhGcUiWZkYMvytm6h2adM4UsuRSjZXrze7bXEjHgVrhWm2dEtWe3Y1yvqt19kAbSR4",
  "key19": "2NXtTUnPmqGEAf3nEQJwpqqHpg6derSezptUZnB86rZctu9j4s8uiLCdmcxcrytTAqHMP2nL74w9Xcpw6J1XGEyR",
  "key20": "35pxTAMaP4QwbX48Fw6HEjs9A6q4erQMJC2mdW4FMMR17csnth8ZMPb31U6K7rwo2UkHzWfF9wztxkyBhXMK286p",
  "key21": "2VqkPzoDkpoWkLFnAAipL2X54cHSCMAdPHGzz3U1nFxMN9tqq98cLw7EFeGTqW7uiZXLMgRpYhxK5uuX7VFEdrpB",
  "key22": "4YZA3wUQY2Hh85CMPpGjD2pZ3yTGYBuEodzSVPN69q7iSuqitWYgmrfvcduxtaMtmiGBmcxUkePR5DgM6Wec7PS",
  "key23": "36Wprn36JCVQthMwYJE1KbrCXNBtC4Ziq2crCpd6Yk2yNZ78siEQaDCyH68tAwiN7eKhpqU7NyoLnmYQgkNPp2Wn",
  "key24": "5wtwgE5npymjs2jk6atUtgRCn1VTiSVXQBiZyD1V2eta2tM4jsJATW2G5Ad3w1d5UquaLGWqpZDqBghs6ZcaoakL",
  "key25": "2Ry7aTMEhEcATwtTPN6UnbFLtJEQfuuuhRzG69X3LhMVkECDtTgi7D14sdDGHzixSk716WvFZrngiKkRAG1UeDNp"
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
