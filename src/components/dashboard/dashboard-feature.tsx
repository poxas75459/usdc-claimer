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
    "2CUzEKGYdGB7aB96dD3YE7G7zqpk4QmX4QoLsVX8xRZm6uWSdjipYhu3CwfXq2TCDgviZFmp5LsRbzrFNm3oRczW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2cXHhAJGPH9dEunJocEYfmvjhjWp5sLBpJWbLrouNu7gLpE4ZX2WcAmeWTsF2K2WmUrS7U6jyg9rYvzznfPL3uCc",
  "key1": "2K3gyBXFt4kiE92PPLu9rB4uPkn91nyAM3kQpnMc3m16cbZGttBbPxr36ifCbzNHHYW9QqnVwbpqX6gbHQg2dPSK",
  "key2": "5SKQC1H8LGbDCFzgPRu9gQxV5voHESbSpAcqEVV6mi2UHosbGVqaBv6j5cz52oVARHkgJThk32tuHJM72pbVMxci",
  "key3": "5rZ5yUXhQkX8vSoStaK6UXx6TuQLUGMVLxPskhaayLQATwtHjorFudYiruEkp7kQtEFPt6kg1eAsKZ4qmkrxzM5m",
  "key4": "fCXYfVZEcU3QhsaSCSEbpsDWHbReeq2pNBK9cGD9fhQoYU5Bjo6oavt68ouPvkdY5cPW11aPi61gQFqoJPwkj8Q",
  "key5": "ToMB7GeL76iLTFa9gLBboaXZDmV1GLDEih6bqQSvyfPFjksM9QvZktMy32E5E7LTHZQZPVQzQcaqEkvUL1D6omg",
  "key6": "2U7nMDD8y5a5pjHfMeduVYAyX9CqjwFoLvAjS2AmHCnxeFgBh8bD1Paoasv3TfFrNcfd6eWg1icREUc2Wh2WHUfj",
  "key7": "3ofr1diNfugjfZhAmPWDTNzQVmFEHt8Ev9CZ9zVPDsUSUhwUSG5sQ3w8rppbEWTNfuvHpnuZttiEaymLzP1QyXYU",
  "key8": "5gdWwpKUhje8yvTGWYWBYQaEfwCNwxUMhus2grMBCuyrTfP7sXX9s2p1axj99fT8FcoqJbL3MC55QQDajTyAJJ8W",
  "key9": "3ERJaDVNEvePzANq1avsML5LCk7kaikXCCamGJK9ZhucGszRmTi2DFaGcjDLGAcmPKhyUc4WmrM6mMAvmdrmuuqm",
  "key10": "4UTJSvBK4GJbh7isWhi8ZYyeoZXzw2x1vjA1tzGdLFVtgwDdenHbXVi2AhubfMTyGEDDxXZGMcDzD3CSbcMtmTwP",
  "key11": "35v2mDrUQiVyn8ii3nfwMnGPmN29XN4932snU7nZFWCfeV1vt99WosLDrghJnupeNE4qsCxcaR4eJ8ncr2S8n6uN",
  "key12": "33DfMaSV1qdSQaFHMuMXaJCiwjvfMDdSWJbTvMFFjMTAcgvqb7yfQrF32Tw8Bf7n6uLov8MVA6KQ7kxj8umg7qHJ",
  "key13": "5gL34yUBAJJ63hh6kEnPqT4AATSA2voMevjeutgwpKKZYKYbPwhX7NPaiU37iKUHfQA44C5QScSvi9mRiaZ4i9eT",
  "key14": "5tR3bqVKSAn8K7N3BWtR1UaUQD7zdDqSnCSo8xp8AWghoxycwTJEJExfSJs28ZmES9UMRRVDu6dTfGygfA7xNoYw",
  "key15": "PPsxtBrPm3eoikgkBtVTxK9zoL158tbyvkgk3MZMCzYWpHFr2QgUFXe1iackXCazEG8ckzFPG6QLQbPzsQkNKkE",
  "key16": "3Z3NgjPeDEhiDrd8JveyNaVL4oM1sr987ubV1N77Jqciq19CqQwcpJRmhMDmHXp7C3mk7Q85qrYFCN77imeL9ZCJ",
  "key17": "3WSQTwxmcnr7h2yfAwkMGJJ2t42Zu4YtBUtKWEwqLetDbcwpba99fPMGKVTG66gcuzRqEwqWbn2fzChpA73gHC1c",
  "key18": "3Lv6tcS4UsAL4UgS26oG91qT3cyZiary9uSqeBNn6XduLBUbWTH3NFtcV57hjXWR21i1b3qyXWUVoZbqah5Qx7mw",
  "key19": "h4qWxxz1QCAMQJvJ6QHC7LGobDmB6h7VkHtb6tGZVj8hFnmfK1GfN5fAXPL2NQAGvZUWxi4j5F7NrGYz9LhwpTH",
  "key20": "5SZCzztVaDDk1xMy18nqPN9jDSkRG5hNwGhRVMSdUndJF4QqFHLHSkEsHdc5e5NexcomJA4DkmKMS9BT2wHEbwE7",
  "key21": "59WfETGc5qePPEMfSoyhhWVPAiVxueQhNfwUCG9qqXy2w5iPXJQMa5mPzFE2FCNUzhNwWkHfdPwo15TU4urLeaTG",
  "key22": "3v2Z67oPrqCDLd3rWz4D9JJ9weQ7ts3u8oY4jFhysGM6GacVnAkSnQTEQov73Pp34DM4dDep2BgpMRyso3oxJeFY",
  "key23": "4CjsNWKMthXDWdxY1zMhiR5aDPrxkeMoEcKv8hXWPJqEHKPWsdgzd56nayYZgiY6dH47ckPdENAqsetAH9tX8wh7",
  "key24": "27pdnC4kLJAzDxp9VrppiZ6BJKohaYq9JoPxnCyQ9DGLNdAydHTcaks37tP9UtuWN8E9oZcJ1QzncNAJ4gs5N1UE",
  "key25": "43demwznu9tsLW9RkS7t7ctfAZaWfkmPQSqiS93En9amHo4ss8WEDwBNEJ2ByaCRny5vvb1eHDrRbMsShFKDtrsW",
  "key26": "5SJCxWQUm62zuwhYiywsDr2TtLGvkzcJZ5ZVyqLLZ2HBrbhLbvECaMKBMo2LDXGCrBpbd6ReaoZwL5Ve9AThkYCp",
  "key27": "3BnqLRxG9QvWEA2eBS1k992vU8LCzhhoQBzXWk2qrskRroj4HU4MCzj1UUcSSFTEdKvXv2TWdL5xrxpFY6PC2he3",
  "key28": "5phhkYJe3YcptwJftVFh2s4822kQcFXVj2HHSkR94Kbrx9HWQjK4u283EQ1jPAUx27SJfmtkH4wzzMjYjpjaGNbZ",
  "key29": "3g92m3Tq6UWVSJrff1znHpaiQryiruYPbn5n6mcV67wwJZJFeqnMxbWANiN8E5F99LwAeEtd24QoZciSKvMVEBuy",
  "key30": "3dK19hNh133ZGu1oxa1FCP4WB1FcBxbuHiAZhcvry4QdNUS7JJN6YLpg6KDNYZ1wxeYRiFFEW8Q9yuhQ2bZQuB8D",
  "key31": "3odub8jSij9sAnvcrCttKjbKdGWPdcRJ3zYg7HYNH8QwHtuk8NC8FD9UfFpbH2k4jmxPQszJCk2jckcRgPP6iysJ",
  "key32": "9CNNWmkn5KeSYNTRrzjnUH4t2i4h9ZoZBuwryxxAJg3KULAywr1maiA33iYQ34nXkTHd9DXgtHWawGJPWFCBvbp",
  "key33": "GBjkLdYr8cbs4qixRV4L1w34Uao9djxCV46uVACJmPRmUc66Rfwp4Ep7BR5f9rAZ1cTgKsf8VCmYXMA59d5p8dq",
  "key34": "4X7myS5SXpbkSpzYJZF8eZT92CNfDPPumDH4Bz2M6Ab8h6TeGNZ5BhmvQ7UfFLH6zAB84SWEeBoChNgKCU9xNQzf",
  "key35": "58PUpifWtMgzc3hLxvbpYqTZfUJGBxBf7gCkfEH75aEHPXwhxKgsayHCwsKUmezxhgHfLT61wU1U5XPNMKp8ZaGz",
  "key36": "38PdZbK5xZ6Bcp5GDgSoLMvJJSpM4qau5SSVz5bgT8RDx3ZjApWswH9gKMAFcC5h2YXAZKEm2MG3PV6jeYSHTntd",
  "key37": "9GRqGEuCQBdk65TZwVGUFkjSJ3UfPYrUancx2fntzVruG4AwMHnYn9tLNghmD3bYa6J2dxNRg8u84xrKtFGaFYE"
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
