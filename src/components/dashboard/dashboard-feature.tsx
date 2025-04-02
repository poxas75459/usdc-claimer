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
    "4o8jXNrPuUAZ3oPu8RZNckTkaBZDdtViKnSBDvFRTXSYPDZZjbqqNHY2SrNUkFMXsFVBgV7Pw9qWMfsbx3G77sgb"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4A16Q2Tntw2eNZvgh6TXzQFcLsByyr2c8hf2D7NwWoYtgwk5MioT1H9KjKQSZ4LXqYjDHeAwNtd1htVauYniQemF",
  "key1": "4fN44XvkGtuXQaWBfprm1reXKfUcmRBha1Mz2vM56WVHgBMLb9VX8mwiaAKvbKP668msiKjaSFacQAwd43kPTF8y",
  "key2": "2a9gKkjiWFyRhpBgaU5oUzi44EewPBjahe789A7uktszkbPcACXq5LN6gESZ3qWvW2LjJFvtgPwv87tx3g9UcFsR",
  "key3": "5Gychpuw9jpYhgqFVQbtszqVXbuRFbXf3ii1G94vFHpAPY7yeiK5dZCv5erXst9Zufdbm4Xxs5n37P2eBvD3aKJz",
  "key4": "XAmSMTViUgUWzoxiZMBhaCL7BH1WjiVrx6JmJziUo5Xvn4n9So3dXryhWdAS24s2hzcra1j1DzwpeuZo3J6Uvaq",
  "key5": "3bnM3Y2Knu1Yy1iyW23rXLBisG2TZAq6PhVbPxWroE9L31yQccx6uoyhHMoYaGqusBH3jjs34jHZPi49Efsw5aqd",
  "key6": "2aPQQu72iaJ4aGAGwDiALcgnAZfSWbWb1dRpLEMMBLmfFFj82qup5ktzBv78bTLHYUeAMNcXmUCKLjnorxxHE6RQ",
  "key7": "xcZgpjZkMgqJ2E9ZFwzok6QijxLBFRQE8dBeAuPR7ejwmJe6DjE8sgKsbSfSA7CDDp32dhX8LvyAcC2XvgvdsqT",
  "key8": "NGQvcsXBgZ92oZ6vb3QhY3H2Vyoci6DvEbNa9671atKjDDXcfXW6vpZscZN62vdGpCE6rQghCpyMxcBJUshv8Ei",
  "key9": "y5AS8PPHnmSAQGQMuSsS76v4XwGcq638RkoZsVX7Pfhog6iNLWkRUTnycuJC4e6n48dHP22UCbgeaZL3khADFz8",
  "key10": "2oHwedr3FUFtJTTafvv16kKBcCxDzuNKCWZu1KnrV3dVHUSfqXHB3K1yffiWaG6N7VaA8fa6RKBnabPXB9XD49FE",
  "key11": "4tBneJMRzgZjr1Jxax5G1PMeYgs1Ud8V99Yw9FSXPrHDxfdcfUMKkJ8eYijhRBsW4YD4Z281CJwQwwd8YKiDXQKw",
  "key12": "aZQjcSF7VxyxLUYouR4U5VBo73c2B85xFcMoHTmMzCZkGAdo1fyEUZC8fzJRnCpds2cNqV2yapsfcBC31qiTMgt",
  "key13": "4R3qiW317XyAECG7dU3dVYJPEovq2k1cU8TzdrQHFDK4bG59bDYMtuY3bdQkDWiQiczxYyKFpVLVWR7jXSckgSYo",
  "key14": "27nNeZzPj3M3hzCFXRGJH9g3cp6beFN9MCnJBBFn4TEgFDq5akwERSef9AKmKA58Wpo8HDrqN8aFidb2faQHH6r3",
  "key15": "572sYv4CrG95QhVQtFYjRwgz8MwFK5vLdqVTiwQwQ3fmTnhtQbJCzntsPdpg7dpexoUKr9PuKA2Ek5h5RsdTqx7Q",
  "key16": "5MEWhjiLSx1UKXjnaBaP5xWuNccxF2vBd6PM5d32K3WTawELEv3RzkMYF5xi489zudy96RfGSbqLCgj2EE4Tp2vw",
  "key17": "3KVTwPUxEbf6e6sBdvYCCx48qjqaSkfYjpGxx6eX8c8yVGY5mwG9v8CLnHUTSFXKry8viJNA3YNETzu5aMJ5yBWt",
  "key18": "2aQJ9bDdm718pRugodoM5YekWhT6yvBY3u6mf5rNVeqgWGWN4N3tWZmqkuBTyxsV8t2jWUh55E1sHmp9UyGwdnpJ",
  "key19": "C7E2Dnt11dDyZtfnrs87MYLpL5BuSFbf7Vs2WRZBaD7h6eWpgi4K8xvD9qhASukMuKdqerCFGxyuYxS1p59XK7x",
  "key20": "ppvSB2GWXhqz5dF7C3S1vpkQ3vHQRJfFfLrA7Jr8KXNaWBG3SEUUv66puKjC2tGu38f5XmgCy41BPQCWrgdtKjB",
  "key21": "5iLWt9avbVeqF4dm5RF1LNXxi7oKKCcQLKEWN8ieedrbc7UJy5BvxiZ6m6axLkprGyQxFLkjBEW6ZGgeoQ4jJYab",
  "key22": "3c2n9KDq16KLMTPepDY5qQQV3ZEnfzWS7svsR4iDUkt6trGFTaoC9wFY9XLT229Nrz8oZk7aKZdkWvHmpCDruVeW",
  "key23": "44DX8x8TFj1HecMCZJZyCkwAN1VrbaaHWLifZcqHJHs9tVRA3pD5JZ882iePM44bAcHfRZ3S2rdqVR26bpyZspnB",
  "key24": "46tsSnzrWAMvoAZFk29KzAp2gWnC1cqc6H6FP1juUdHHpnxnpuSTbrVZhBbsswWemPY54a4BT1cGPo8RmJK4UTMa",
  "key25": "VhE9bDoj8DBYb8iWo5m6DpYVZb5xYL7UZSn5NdumwcGXnrsjmsBkCmngtKtfA1pw5ZwTpELZY7FXjtoVq9onyuB",
  "key26": "4itAGCeWkJgLBDqAN9DTK8wrxx24UvKmbqs5au9ounHYSwjMe1DjCBjinuGtQnvGdZ5g8hLCD5kRcfZdxDqv7xDg",
  "key27": "3AWVYoXPt3iccHy7NyHnSQ2Ew8HAjEzQ2bG7WZATgZYy6A28gcfM2kVxMt7DjLf3ei67x5p2RYgpv6pACA566vFh",
  "key28": "jdgZompE8RMJ7dB32YdvmZb3BN7ikQHtgKc3cMg5DYf9NxxSQnnHgrZyiy7xh7U5SQwrgEVeUNzk8Gm2ZMhdVBX",
  "key29": "4tmyPZCame3pRQ37TGGzTF9Bu4FCnL2chm3RYAZtCB1KuryNzsWF2JuxhjTNic42itVXQguYGkBHArVdoY2S3ZQV",
  "key30": "4DgGMH1iEdNEwHbMtr5oxVd7HkdyEmENVyhtLSdeDa9V3tzCnC7aW8cz9PQ47CCMgvEYTQcx1PfNA3KP72joTxNr"
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
