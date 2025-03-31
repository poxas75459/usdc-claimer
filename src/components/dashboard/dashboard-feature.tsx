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
    "4nRFhjXhBMdQwXPsiAMoFLnmHrfAzAdcFrPU5tMQ7kUtHqjB9kMBjP6pupBJXXbd6d74A5TUJNbuP5gsVSkGx7HZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5a25EbFAsFMJoqZ6Y1fKF9HR3tqRxNm5fhUveftdc8hiv5sCKKmd7h2yqAm1NMgdBKtdGEizX7EiVsTbtnVuowBU",
  "key1": "4VzzL8hHKkQ1NiMXDEhLH15XBD2LLbvde1U2gMecD7XriDyWazoysb3WVVwcLp17eoXVTamXmWwhxyqCUTX7uVaD",
  "key2": "3NCZJvpKjXExrsJDp4u2Us78Rgvw7NHk8CU9bdBUPub5SXciZT61DYQp1aY6q1zSaCfYwbb8iD9vRzarBos1Q37a",
  "key3": "3NbXJHuAYvduYcZX5hHMnzmcFpw3jdxa52XqugBCn8YMZwKWn3MKuHNaCKYBGfr7cRfubSmrViT5peDuE222Egt4",
  "key4": "45zgaP2gsh8kELcS5dChJfUu6TVtZt3WaECfLHwPhHwrYG1DyiFCDbxedSqtdEgQidfp4GiJNZhuyX2L3UkDxXA9",
  "key5": "21SoMBdb5MbNMJSwmDq5P8Fphine6Z2mBEqKzQoCb4Nnm7HPaWgMUSf7wHu536hAoLP98K1EhCLA1RoRPoEaxXDq",
  "key6": "5jdMyYfcJ6PsLKuYdmBCVWta6xsyoUBJTzEz5YBoWj6soiduviqFGPVSurvvTVr1b8ryzSm2yLSkJCLVEVBsrAax",
  "key7": "29tK62p6NRe4mS3BUZUaNHEAFHDUxafyxFLE7y1CDaTUFXBDB4RFHz2EGYpLoCT1QmwcSoyQN2EqXAQGTihDhC5N",
  "key8": "2Xs4krd2hQ63NncZ6sU9CLNgKerqeo8Mu7BdZ4tde6fUaaxugZCk9dWmScoG8YxEQMDAxrxouspRsuW91WCzu6bg",
  "key9": "cQEEsSXzemnpjcFFYEXRrS58Vp74i3QNVDszH1qeesYicx6LVEYnMs2zhjho6xC6BF9jBwbpFb7bou8NU51k8gk",
  "key10": "2KFJeTffCnFtzPTnvoZjGjoks1eZuMzwj8d5wwsiAb71fKXieknhXQkQgKAs1dHrGcVXPCoYNdg3oDxauM5U9dDJ",
  "key11": "4cnsRFEw5FmfHpNo4kaQCjcYUJJZuiHdh5zADKQdWT7jsGGGtzjAYRKZnMETxDmefg8cKETPy12b6E9FM4T8hSHZ",
  "key12": "K2jo4KRpPvo5k53aAArSG1YoufTs2Na5So9V9UZn4B6sLU7dCz2mFZL5sCDQDbFRNZRoRYjF4XB1g3YHK9oCofc",
  "key13": "2cdTbvnmjgaYs5wkxhhjpfxuhZWpGEkGUhKAfCStQ6fvLiqjAWY4H3TZetL4LejyYFhdkt2M7UVSp6cATxLFuQ6T",
  "key14": "4e8om6NUsgJTt6CgDZCm6oYauZWqixvfwsdPK6rNhaJ6jcZyydkkvUe9GmuM9sNvwx93bhS9vWiX8bifzLCE21cs",
  "key15": "3Z5wLwV1dXEvpoNavbG5buB1n2Qheuv9jXeRu5nxGCX1X9XuZvoArDhLwh53VCSKUaiVA8r16FqmFJg8kcXcXmre",
  "key16": "P94xwxFPDr2dDJjfApdHY38AfpnauPK1iwmDnJv3R6nNoCQDUbMn3oNVN1KZU7g7Q4jPuZqqQbB2yjqBWsG3tmh",
  "key17": "fEHrGBR3EiXgsaZpGqBhWDD4eDbWbHPY3UZna8ppVVDK4FuSe7aVYoMqHqufCdbbvgoGUQLmdJmS7GCRMqSnbzw",
  "key18": "nu7qtRoRH3hBvpzDxuBg1JpRui5UTgmRDYA7TKuVxFWvUHJmjbKxnRQ2U1EE8PFqPU4xAM9pv422BbamFS73DNa",
  "key19": "5g76eQyFhAcB34DMZEBebM83ev5Xm8ewYCF85y532wTkN7t8YT2c3MUyJmmwTeD3qf919dMCK9CPmAsC1y5EuQLY",
  "key20": "5WjMfuyR26X1LzFzJCAFdGVwWX8Jk1BjLro8Ri9Tq2iRFWhdwJtQg7yTUXJcAun4AFwBbwsneYcicubw6XzSZBxM",
  "key21": "3ujopNFmSy7BUgLEDWsL8mMHzuroT99fnTGFPSWcrUi7TXeehTpBe227ZqT51vSrRLWLqaQr6yssJHd7UoVJvbsQ",
  "key22": "3JN1nTRe6t1VKFuQopgvebSt1sL4eqvjpxtiPLro391kC1Hbq6FEbBPV2dUtTF25ZaZ1jUa4wBBHmV2DHNwo75Pk",
  "key23": "4NbHwmwY2Dx6YoJy2BBts5bnZWC1wm29SGkE7T8ctWjRomWCxosBTGaxXZPz6wSTwGk7wHwZdqxKTLa5eKnQLK2",
  "key24": "DQVxLzrTim4TKCuEtrrPWL5cotuY5MKav7c4ZYTBBGDxrDh3o5K2fzYcjMXci2Dr5tDVyqzf6xGfwMeZhNHPTAn",
  "key25": "35wa2ZjFtxWpBdCR1FVWGDcufmNNAotTVQVsSv5r6tFvn5FDNaQQdd6eaDC6B1X57KV5RM8bLBSLzMeUcskRT4sr",
  "key26": "56VyC26MftV21Sy99epwZgvCfLsohhYq5CMrJP5RAcJHhKUzLunnVhZ2KCwA6aqEaTnLHCUshp3cvYTr5nChC8MZ",
  "key27": "2p36qkVTtX6PVSnsoA5pF2eKAFCwoF3rLafVCSjab8BSEwXGQ3nbo1YwRhbQ7PNwvsmeGVVCGuBhyzSKkaFr3uaL",
  "key28": "5Gkvf65SBpdJkRLm2hRVCvkFD8wV1WvxAGf9JCQN3YdWVQH6xi95kUci4zxUgq2qFZ323fXyxs25NUzhMooNE5QA"
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
