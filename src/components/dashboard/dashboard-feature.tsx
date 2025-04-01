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
    "31u733guapLr1D1rpnx5LKEf8FXJjX7U2SunrJgwhoHejUQUkqbuoLC7m3zXzcySHRSXcMTvoAz6mwfPtjK475jg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "wCfL6FK5mwkArVYsPXo2qmc9C8t7ncJ47Gpd9x3thxoLMQz8qyYDp6jthcuiLzWAY6JjFVxZNZ811njMzaJify8",
  "key1": "3yLxpgECcGtgnuhF49BAXfrHfMUaY3pYHZNnspaVBFf7XS4HHDGcAvTmT8yfKsbuq8zhZG7VPNMTK7ewEoMufuHF",
  "key2": "5n1DvwwSe7qKgKysCzN49w179yV1PLD6oa3Tth8cRmq3HcY6eEawXad56Un7V6Sj8bgeCRw6xo47wqnzQP4JwRqw",
  "key3": "2jFD1CB68qUSAAGgahCEp9QKnfbvDv1oPvzL2WoWePP4gRtUVbtmmo5XdyzkPfxc7imengFCsNnhFPo6pE3YLPsh",
  "key4": "4SN4EvdHfX2mfxjKgGVXkHPykFpAUrg7mhfx3BJeJSepKEMapyJdFjxxrDuHo586efSgf83WxZYCfR7Cy9yVXzTz",
  "key5": "4Rnb2wivbPx5YGPtUb3m2t15bRLFfteBR31VLHhFKGsvDqStPykmAoJ8Hqs2N9bpPW3xewM613CLByjkZiUVUV9",
  "key6": "mCYY6rcHwMg2aiaBkeCoZzCHt6Wixp1zHFTpzDGw3E125WcrJ8ZmRRNgqnXbcyJLseAt3H8zN5QeLFjkAK9zMWu",
  "key7": "3amGHxLJdr5TxEfHenGYW6jB7edHbCWgPKnSeG2q8C1k7VjDiTWTSaUzhJZYZ3rXR96aPLp7mfx4TNS6PW68mTEV",
  "key8": "5Qtr9DmmVrxEWmz9tvJXp5buoAYHuVbJepdJXBzov2LEXt2LKYt137ZMmyfAgkYR22KtT6SLgw2PmUSsueciBkkR",
  "key9": "4qcDC4349jWcGQfaGWsjSdHHzVpDC77dB6c4omhjHE3EydAHhgzz58wZb6uGimZJoABNYAtkCmitexAKSQusmP8f",
  "key10": "3NL3LP7SpPrN1tHenGa7hisnvGTof3r3HHKNBafhH7WsJKHEmjf7wd5n8GHoHbyPZbnb9suP2sMzUgTdjxdVPfF5",
  "key11": "5bJPi65P7UWnLaPhx4iJCpT5sQqtyDcMyJrar82rXA9AdPfreNYXRs5jGEjusqsYUXKAHCbr8cQXPDR6DecP3PjE",
  "key12": "2tZ2BufkeKrLjwqvxmh2AgFWwsy3pr5dGw6Vj3XEiMz5Unqf23EGedvp17mChNV59FKuSiemF4Coc6oP9Lo7K4z4",
  "key13": "4vLzJfZmCgSQuoLfcxZe3mCAKqL8Vs9Ars3yGZpHrdyLMTFQh3sZB88BFtKttmATd37hqsQDrWpHp9aBfSJGxCCj",
  "key14": "3RRaAyrR6eMfbeVBLAfpSoC9q8hpQR5X1kq4TDas82LttfWSWAySj4qGmGXCdViFuCHSfS2aRyRE11GjCseGDy7G",
  "key15": "4PU7Lvs9uZcsPoe5WyGSwvdapJfvCnKSbpMBPPetNs1xfJT4GUWfNNBkeuASvEBg1o66MrqCgsYeuiRkVp7XaUEe",
  "key16": "4mWmxYMxCCYKiBDDGmYEXtJpvWg99gv8zoBTrkCwr9PFtqbDVjA1kEY3YgqXUTHyJNYHkWXFQiSRJqV57sFughfN",
  "key17": "4t7yqBN8EDjVBBFTYhwxJuNzW3g2xdwYq6N9cY9CxjxWpeXJFXtUnAQVTxWjySdGsn6m9sNn4eHqu12AiaRvK8x8",
  "key18": "B32GiCiEH2BCXEA3R7e1YQvCRLp3WJ1c5dJNRf8khvWLALhTxtUvf9qf9mEc8k3td3u5bMaEjpRQhLoWUYfVuKe",
  "key19": "5L31oJhsPkyK2HgNdv8VkVn5bSRYMFMZ3wBpge4jfFuVuPeYqQmp69RAhrc2YXwJbzgrCTuSRhGyGCZFhYYHmfAy",
  "key20": "4cJVwQAgFhcDyDEvoUP5DhFuv3LqmKPfiQ61ZR1ynKHMEcXV17mS3YFHWSoLE7Tgb6c8bPiZawJX844HUKdwMS3q",
  "key21": "5p4oRtCpoAW7Cr1Ck5eyW1974nen39KZQzMudJJR3gL62y2DF3qrb4KqFohi8Lvj4kZrykKE2ED3uJU6VbH4aziT",
  "key22": "4FAcSo6FjafKZ2Q44Fab8AuS8joEP2ELKrvKcJGESs8mux5bZEAmvnA221gbq7DS2PRn22hRgjYpdZmMaZEkjkQ2",
  "key23": "2f58f3QM7bJaqfTfy8sPqnb43sXthfb8YDZ7W4zVGxRacSrrZvNCZCUyZ4oKmF8rK5QtVsQuLsJwHh5cXpPeAutD",
  "key24": "CqRtHZ2wqj2qttSFpnzD8SGCZYVVUaVfJ4Vi729My8ErQtz48yoFV3Z2ZZFz8KTnhAUVq56SA4UDxNBv9dYAwaW",
  "key25": "pEbj6faRja1uUKeBZ5yzmLA17KwGtgLKvZUB3kJ5zxZFQCkUHawJY5Yj5yFFFyEfBL3z4yhzCG1sgScS1Yz3iQX",
  "key26": "3wanpHEum5tfnt8DeEW6Y3tppi92zhsDPUPFJmLJynxLEHfSeBvKKoJvBhzND1nqcC6QJxv3utHyAu6gZTtjsV5",
  "key27": "5VU1ttxDJPGiqSULBYhAzj3DPuHjYdjkSDHZgz9W4t8wcCxoy5uBrWL11KiCw4grEqjnU3gLTE1ToQ4GxCPsu69L",
  "key28": "2CfMWPHregVoXW4v9GmfdVJi7sZAGJzgvCB89dDeDbC62vWDjytB12TGvCuF6YZVwurRoJyN3x2YniQ5vD8e17nr",
  "key29": "3uEuhoSWP4KuPufUnZ3D1Hh321WzTscYJFMHmPa5SwCHRQHiqHj6XvL6meLoakP9DatdvN6ayoWJbzuW88DC9dtw",
  "key30": "ANHUzT5HA5gk3Myngxcf3Tm7x9DeJjXhQMxnzM8Cu6XXaGuWU49ubqSZP9EQk1yvs5rBcNghJq2q84rJm6fx2mT",
  "key31": "4AJ6G9rb8WrR2JmJaRZocbD1vPYdJhKFZ4mSGmiWmSwJxVXYdHDGcXTvswtXbZaERkgH6PzLnra9M62PLYcjsU2F",
  "key32": "MDs9QnCaRDfQmVqhfsnszLD642LrPThaAEwEVo6kB9fbZRc7aVgYirWGaNSj5fCjtJeEuiiyNsxfwkL3383Mynd",
  "key33": "2qeUX9o2VpVL7BAZYaRC6AhvhitVRHrEtKYMZMquAtsSUaogKzdZWt4Kkezn7pJJkMWXpUJmb8PA9NKs6xSp9Knq",
  "key34": "3ebQWziAN2iWE8E4oZkUJghwuQFosU72sDk1TyFcZwKj2yh87tDNjfjnPasWQDUk1nCDQCSYMFSKXiwZSPfP27Xz",
  "key35": "5yeBCHrurVkymD3bBuSCA62VFwwfy9qahQVS964dLyYv4652gBNnd5afnwR4nNTytkBxc8d7jZX49X35uKFwrWHN",
  "key36": "4W9bcS2epCezVYzXUs4NZpxiLV8PF1iALZnbnkhs9JgrgZ5CYWUNpyCTq4LuE5cYut2CYrss9tL47hqNrD8sAtEZ",
  "key37": "4WsLSshnJ8tdxbZfF4BqWwp9ZJWKWvKTXyJkCv99BE32CjKWEmQEZPJftTfY1HtJkqK7jvwC5p43chcQzAAjuB45",
  "key38": "nvMR4Yk348CLbDwYruGPw1ECLNHA76Nqq4QHqyEkndMj9VSTY4r16QeDqnSHViqXLj6ffVibiaBRJ4owvQsa7p1"
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
