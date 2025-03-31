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
    "FhkMFru9gT9TQFFmLkT66QoTWKwHQGMAzhreEYDk7kYkKo8VRU2M4fTvyAL861vomAStPdhS5k9PWXA3twzZJGF"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "rg9EMznz1XbVKobaDpgzRPRTB2RyFziFwFxxQ5uFrRxMvdSMQgCY96nRNDM7BwDWzLbnKZaD8hrPjsgtm8RuEa3",
  "key1": "2ZBe9XniFoVJiodcLVnZ5LibjSfrAjPPePz8iDa1X2MMtAb73D2VNASTaTPcP5wPc9MiP3ska7fhk4VbxvD7s1hC",
  "key2": "hLpRiS3QXAbQfTYSyDK3qjZKrRArBMooTkKoavhxAgBddgDYkhGnJpPGyPdXnbSfzibJRMhkJiRiyXooJNU7bYN",
  "key3": "3mf9Pu7cr7rxKRjNzMBjfzmrWxdgzqUkSu3inRq2rVYeWncj71Koa5buYHpKKXVdJw5cijWhGMdRcrmAGuN98hwW",
  "key4": "2cEJdcvJ4cyTM2rNT9skhKP4XsvSRMwb3QW7FQ14YaFx7a5D1fbSD25uTZHLR9fYJyusdVt3H4pfwwj6CJyWWVKw",
  "key5": "3XgyoxFCyibjb77AFtQA9DR2sVMb15SBkzQLS4gieu8BbumtWV5sXwiGMNDyLKP3SzsVUMSDpjbYWQPVuA6T7wxP",
  "key6": "3S2x7o2MvWhCdZdVH6WWE9kmKF7zJsHhoEi5vuVnFaSPzh3MuaCvzjbG3Ye4yF7eVK17kp5N8gjhMBJkFpGwY5Nu",
  "key7": "2whL2BALcm7qxLjLvyhHefyBZEC3TVTjHY3K2pg8A74ZhMsJjDjLSGEAqbJoiv7DPQdwEPKmAPUKmXQn7uKVgfwP",
  "key8": "5uHmcecaQjHMwf6LziXwpfgQYwknPdMhxFtMCNSUCR4FC4B6GeLBd8YqYhRJ7CZxj3vM295RPX65vfLUsvFztY5R",
  "key9": "4bMQh7aE595BqimKTZQQApC5nhd9PeZpujTMQ3KJLCiw5nAamBsJxXbUs4NSdN9JSR1A2yV5yupir5HBxAiKrniZ",
  "key10": "2U7aUdHSNrLrKaSu5TH8M2KkSmK7iKa1hs6x98LaFiQJSqEV9dRCrw6nqtieJzcrwwiMFLjnMnf2TMmp1F6Vhiow",
  "key11": "4zqWfWE3VNSAA6rGBrWVkLuKcY8cCFyP5Z3XV7WVU6UJPgz8gnPPdD5unbXqPFafZBUATUiZXo3mQnCYKtQZqeLn",
  "key12": "3pzeSeeXXiCEcsEKxWBnUwQXPK1s2c4baUXgr79oYwR8XthUahE71zyDS9tmnekDhJKHLbvz6N43x3Q4WDAzuhaQ",
  "key13": "BSAjPFekaMH8AKLRudpaApsHeFb3BYhbmB7rpXGpNfUDSV1uAwi5Fy4oLXm6qUCwn9eMLXA8fUud9G9U2aeCntC",
  "key14": "2PaQHiEr5bxyFZ758xSVZNjzWdYJ1FWyCH6hGLNE5vfsRcGeKvsT8Qepfc7biVPjtRgEsoPS99rX6nHYDQwopxfG",
  "key15": "37fToNKRgU67UX6zppV6a1ohuWbZYpuBv369SFbTkswnUzuNtQCBGrsNgnfvJPFx5PPe1BJcJY4odRVfudyqj6n",
  "key16": "5VUDrNZUnHHrvp6CDXpC8P2a5qgtdKLWgP9Ems2hjr7kDc9bCSNbcNBrhfazHjirfCP5YYf7PcDQkybFNVKB7WGr",
  "key17": "57im15jeMWZDPg3MGdCG7zC5jnojDNkmL5v462sXToeWk3XVhx7GeJKy3JMvBVJVonAuBbTihTyPhQoR6BeW4ySS",
  "key18": "3rzjbPTWWXZSP8zDtJFFjtVNksojAxQdQVT5j9t1qRKHpor7aMqR4VeF5RhaPPgRegPqkHPwMscXrBHmxTvbixyk",
  "key19": "rAzZnDg5U575hMwjx66jhUpRuWJMmtdtCSaaVpWtoDBa8mDwpCmdJZUih63p9HXJiDgsnffPNhtd9iK14pFv1ag",
  "key20": "4ARSAMB8CaAxRcSAwEkR3AqEP2TvezcVeqzq4ahPsU9qWLkP1fTjdUSYg8aeJq4A7YKEfFseHUGCMyWJTCGUkXmU",
  "key21": "4hHexUUPNeQ4FZvsiRVNzzsCWL23RXEY5aJmoDKNdukdPKsk2QbybfsW99L2jEwkV3xFqj2vMx8frDy1zj14Arew",
  "key22": "34Fn1CJVJ6XAikHUrtJEYsYTzXGxGQiJ2PtVuX2FF7Nar4mPxXPiG7gXJ5PZXEC2Q4qfWqTtbfTFTJ3eaoWUFenC",
  "key23": "Sa4LNYWkxiVDQnMrF9TcTeLN9o4NnoX6z66XLmEjbBxwTTajQE4uFT2KEDXuGKKpE3qMjKoUG1474k9XWq5dYtk",
  "key24": "PiJfCkBxtZvV6w8w4FdkhBaxiXjjKeS4F1ZshTADaoQs3LPfoH59NQUvFPzhDneWJ69k2VByHFbUFG7WKQjTGBD",
  "key25": "3svUALALPnVK3uY4cY77ZF8tiGzWHpbkTVawu5sUS4LZeGp5hPjsC61foceW7zhLSrzP7dpEfYRrSsc3bsGpPtbN",
  "key26": "63Gz1AnLrr8vH6z6fosotYZGLa7iEcgRgMtUz4m4jqedkt4AP5S28DoZMYC22LVzWdVZ8k72QWVmWJxf4xtaUyVF",
  "key27": "3cLyebwqjbqLSAXa8cbrRUtBrsQL3ttK5wyZUjAGbxSkqfZ5ju4jbfkqez6fFuNXsK89PzHqsYpERHfb3D1r9Lay",
  "key28": "rKSgUrK6Rv1t3PQFmFAyj4Mi1PfPXdLYyJxhmSncg1y8ZTf61bAS4rmBwyfYPmPeeMdYdabkQ8pQT1fkuGfKSHb",
  "key29": "5wVwEMXfJZxaMWeaY3xXQzxA2h486dtSRc1Yu51k153ryp3XSQDhYwrvzump3cJzHhnLuqPD27b8SjrHRUYL6zyr",
  "key30": "65bCeZA7K1X8WAzrbyqcvRTNrKtzFPVRxjMdVcAZyGtTKuT6rjF9gF4GneKJoSxZXU9DXmYiCqFfBmADgiWXnPc",
  "key31": "4TjN1WMb2mNtuZhD6FuNJsSCVf9Yt7CgB6FBUJzGR53gKKSjv7Mdoy88Xq96fH44DnMeWSJMsvVLyTRUQK9VBEt2",
  "key32": "2vMDV27uM8g84RksixkJaKL4n8UyEsf8goXGteEijj32P35pgMRR1JH94Apv7fNwKFWBorLYkxcx3embMUhSS9Jz"
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
