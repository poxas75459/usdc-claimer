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
    "3kPDRErJUYfzFN36xGod3WPifA3aJMHyLPRRPj9LVTTmjBupRnS1rr35BugSsFvySQeJTtEuFggLnTZTybc78BMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2DUTCroFc3f2g2zrTdfRxSTJTVy1W7Xx2FAAPKYrRh1sk2Bwe45VB6iovpQwQ9MK3Jh94B4sbG79ZCNY3RnvF47y",
  "key1": "5ZJKM7X3ewg41h3nVdSnzrUXnYeQX68EVuA8V4AVSjQdAnuzeAgzzqvM8Vc8YDYS8LBfeJfqhyJpWLYbuQZMeQ5m",
  "key2": "oU1b24d9BrQGAR9KcVp9E6sDJnVn1Sjdh5fz7VoSfddoEWf7qKyuWjDf5nfbDpruTAqQ8ivn7RXoxXja8SGj1iF",
  "key3": "5PovmTZJ6hBr9HuwGjiCTV1mETF925MhMFC3YWneyKh9s57qSNpXz9BJaMxgfFQa6sZgMPyfWYfXvDPMDNGb9kMv",
  "key4": "3Er4mpem3yJtjj4sy6m9X4GQC5Wy1581ryefnAG1rrAzcaJn3riBC4CtCJusb8duKgadkMjbz2SHsc95Vo3STX98",
  "key5": "36wQXrLfWb78XkY4bH7qbDmdpkTHyN1JuauVTZe1dn1xd7NFH8rsjtKxXsx2S5LJzRehMQwqPhPDgr8runVNuVwD",
  "key6": "Wda9jkHxUU4hqmPKL3k28kjUitfDq59tDa59riRErt3oHLyfhjs2nnvwsFJ3pMdpFmiyWNnC3ZWqqSYHas9m538",
  "key7": "579HEYGjHa1Cfc8oKjMUhHrEKx9LNwx4r79Y2MD3R2wLxsk67z5mexnXPCcenkKYiyrGBWGcxqCnkPFmoFBNu9TY",
  "key8": "5KGByctnKrHtBh7bnfUu3NhDijJKFMDM6P8kVNMqKZ2XGdoQzPaNPnQnqdr86GetyRzDLpj8eihFgZZjangfsU1F",
  "key9": "4LiWbJexGyza7wtWoLz1zLv5ztmm7F2pM2zrzEkePLFk25qUAXx2fatmg3gAFfCzWDjvDNAGwUegYzn5c4Nftaxt",
  "key10": "XP3DdzDMfKbS6k9Fc2NcZ41KFVvzhDruUb6o2ed3bey213GqkC6C6KawmziTjmrLZPvbe7Kj6SGc4STQPVxdjwF",
  "key11": "2HkqzZ26JCEoFJ3iKBBjdXY24WhtrkezV8vtgNPu8WijnQS4DA1MxMD3s7nKSTHWfNxzuEnkQ5TZuLuuCxPTJciA",
  "key12": "3D4ExwUbn9gJp2yCNQPc2YkVZxxFEQHGt6arQHkXthL4LM6YXPjSq9Dmtmkge8Y9m1XkHrg2z8HkYfm3ZLzMyDBF",
  "key13": "5V8qcLXE6mbjnKaFZyjuDxjyWb94ouNPM4ut4eBNoZJdKKBaXTobgXoc1EFm71Bo7KjwycdwSCJG4WCAESdtyXRf",
  "key14": "2YHd95rd1AAuCY3nSvdQkSMsXyq5jmv43bBfDcNUFXLbn7jsN9mjWVZhVsP7Mb3zwUQA1yNXZDtBWDYMHYQUZgAN",
  "key15": "8r9ZTdb2EK14qMJ2L69brE9vpNq22Hk5SNxrBRoWKzjdRAQZMtf8AKytiKLBrusdmNd9zBdMLhx3ztfwoLeKuyJ",
  "key16": "2HxxrURZn7Q9tHp7rF3VgiD8w1327AtpEuiECe5fRG3eubLPyx1iQhj5bhPRy6M6pAqSYwWjUvSp3XcjQaTpXXSQ",
  "key17": "4e7UfJxrDFSiArcCGoU4tnkX5kjXUQsCTFPoHqbbvUd7NpQ7X3UTnqNVRHyvTS1CcPxs7was9aurFFKxiZxviugd",
  "key18": "5YoNRX1MnVzrqrPnQCUwamB9oXYNNbK2vQGSDekZmMykuWS1DiebjKLTHP3dcCDV48X9MFp1QtfQYrSPSipdGSLm",
  "key19": "4a5Uiv6udcenZ29GsFv7HDGMUtzak5KGhraW7PYG6poKpN3zLmR4YgsMhKK6THgjivyUr6yRTwdvTAkQ1q6vSXNv",
  "key20": "2MEDXgZNG5HuBNiF56bRqguPzyiAbEtV68eGMUuQMQxo5VJFB5Gx581VxLoAk2nvFct15usMyngQqa35Cyj4rpWq",
  "key21": "SSxitaVHHX8ruLCwxuXrLtiAm3Ww412wndtLeCDuyMZer4X2sKUti9UPjXBoctSykV6F6Wde9NNqDeEe7RiXykP",
  "key22": "4P3xWGeRv2uJddcMeywzv5gFvzXZgQhvLM1K9jxTaHGu2aDDCfc3AesuvUywUwf9fs3VQ9w6g22yzcaTe9e14mUo",
  "key23": "5aE2NkAGSBSdwdjcNewJGuetE8ctHoDYW8kLtRZgRvxxWrsfnhcoAgB689EG8XUGmprfxBB41S9Mc5LNnVqgmxM6",
  "key24": "4dorszybQLdyRCpdz3aSw426bGcB1CpXRA1rzPDKUSoqA1ZxcwwXV7wAKWSWuc9YsV6pJVfy3nGd6GdeKvTsspQR",
  "key25": "5Q7fhDtEaBG2taHvCJ3DwWyPMq5WNHDBZ5wzJoXgLoejJv1LGVEekun5p4t28YbyD7EprPkP665UAiVqDGGfptAM"
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
