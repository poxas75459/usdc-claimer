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
    "5pCPXQxFzYp3KJbaiUgXLpttwcopK1EK4E1UwHF4NLgLnMkNG663zN5PMCGDiA7utW16HJHGbSXAdSGDRStWFRv1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4grvhKwAs7jtMgxJJYWfjNzFa7poFeX8SzLArJBsGkvGDGVdiJs7RkbFadJ1NG7Nwuew1JVsRoDqBTZnRR5Yod4k",
  "key1": "UrHHLmD8tCaZMZfDGzUayh2PTgvMaZ3z992D86A5ANsDkfESi4i4mFVBRZZxxqm92n14zZ5umc1DhLq1g4GDbsS",
  "key2": "3uaNw7x2S5x5gHtFC5hRYJgXyGomZGAXrqsWbBq7jYtfBiV4pTm2Lcw44uH7oSdNvyjLaRqRxsXUbQtBkmuu4qkT",
  "key3": "567nu4L6VQiDmVh9zr7hiC8JEMhBR2CUFULT1q53AtJqFs2Y1tZNRoUwVpVksqNpcjTn5Ayf4J8cuTV3Q4XiSmau",
  "key4": "4z5WgA8VRqVP5w91WCrngoKAExvE9JnYH3emozMDiPqSy3u3VDf1cnHR7FV6nPVy4JqpRED14wxoJvE48BXQa8td",
  "key5": "3SSfsoFmxzNn8eC9shjXfFDxYC79qqGV7ntv8oySubYN6Xgs2Dky33zKAJSW1LxbVihLM3Q9DoFWEPPwfcQJCSZR",
  "key6": "5vxDM7eBJXQuZsWC1pChPkcinxfXhE2Ett75taZTxZGQfpHZ4i5onbcpBw8GJCb4FGRfwm6UGdCob7LyPnF1hgEh",
  "key7": "21d2NfcBk42xFCBkdRSi6aTPoazsPckXRVtKm4JGqREdFvQ1FsYc2DkN3gBpfds2N3q3PAT5Kdqj7uDsAaJ6gjzq",
  "key8": "2Ci9LLZKigaxqf5F7yVRui46gui2yU5thkBFSGNw3nxSdKZKQzWYWjJjEG1jXwA2ABmBpx5FV9yxuNFoXxSRHvEg",
  "key9": "3RFwfMt1tA2UzgXHkzWLJN3cnzPjm2u3xCQUA7ou3MoKHdjXXWixVg3ewTLd9MJnjnwXGyQABeQyJiXevg9tdfkS",
  "key10": "NRVCQJanSFCtLJFFf1ibVSaYEyYEfk4S4HPbPKbz9rRGN1K31XAq4EVmryG4UXNjdqHBCN7BbD4RWbCK9HJ1QYa",
  "key11": "5WYkMgS6K1ZTibPH6yDDxK2BAF7jaocpsTMMT3f4U8vKe6wCjzkVBjujMBeNEUPPVFTrMuQCMwiLgzhdLFcfGWkK",
  "key12": "3uNRbmKFxH9bkJbGTZHycZXKa2FBPL9YgS22KQ5iRa2WJRJyvfMdoY4E1PY5Vcz8Ud3G2xUrPJB19LMiiGFxvyL",
  "key13": "Q1K93b4vQBZkijo1zhJRNay97XVdAPet4E2T1covY4VT1E5MayETbLLBUbEam38tuKzxijJdTWMxVmTXJzuniBN",
  "key14": "4PsUE6ujesauAyqzkaVQaZrDLJHcbX6Km876u69Y7FwdA3mDU3h537K4jCxsy387MQndWkHL3cRJ7WYUamBCkGRA",
  "key15": "4dWDAJCGVD8uZ4kzK2s9VVpdaeatm6oTH7M4zXtN656eHxPVZMfFxTYeYeNzGFQ5sxpe3opWL3UJozDxj7zDkre8",
  "key16": "2EeoyjpbC7Ymt7Fjg3L75MuT4LNBiHwyicidfkc2ZPWkmpMP9vsqBYZNce7xveg8yBBUTmUq8PBEDWifSHR34pHf",
  "key17": "2S9PSftFb4euvnLekXJ97DUV9G5uFi5L2VzjBgTf9whzeaChjTFXjeJFHUtEwgVZtHiKHqe4zxp1YJENfQXGCMiH",
  "key18": "5Qyg5Rrr5EAYG2MEVE4Yz6epzvUowzwyAdsrEWnKpr8mdHqhsfeJGVeLpSjb3vW9ZYfwKrqyyT47nkNabTyNtKvL",
  "key19": "36hQULNmce8NzbHQNab1EhokzAJnBpp2Ad4skYdmXnhZCSEEsi3xxVovfW4goWDqqjLTFRzagRsqbwPSAHX4VWpa",
  "key20": "4vaanZJ6Y6fbQJmgvBGB3N1UYdheGtNoRnxWnBnaSSc4cT7vGbFa18A1hybqoB7GTVrdeqkvwuafEPnpa2eRXB5Y",
  "key21": "5cWdySAELsVWzp8fqSWpQnRSZoGcx3f8StvAkWikzvYqRd21bFAdVwQYJZj3QK6G4bFiVUh9gyDp2ScBJrEoxNG6",
  "key22": "5a9udHwMh91iccipPHQkHtK6WU2wnjrVWTryxXRfn4zf1bSCvGtontWWNy4Dqii8JMHv8tkYynZ4q5QE5uYLa28t",
  "key23": "W1vJJbmKcNGHXnUUxPZQNsDdw35WYWEQtSFzFVDw5h3dXbx6UVPsD4RQeNrWsV3hoHRa3pJ5iqu5Cb3JgQX2drf",
  "key24": "3oa75K9E8RSwaEQ9XcMB4GofLmMwRN5uJ1bhF4dQ91b7GtvR14FscYmB2t8Q3bEUyoTSzVQeRJoCho7JVVWcvqhL",
  "key25": "5VxFgWvHhwkYUiq5S53LpuFH3D24mhiBeZMSucbih2op4CanH1uEw8Ty7HHQBvU8wxM5UcetJEhXFhDP7A7YBgVn",
  "key26": "A8knGL2n3zHcvb3WD81yjkF8zcHNgNhVNuqNQckMUPNTp1hdCyEHup6fP4CZTkxbv3CBz8zAZvU11HTfh8TN59y",
  "key27": "2pGP282BbqNLLRks4UnEnMVS4mqxqhUhG9w9oR9sAWmc95MtyHDc7ozQhMV57iqDyzvD34aeNjrJK3XySVArAW2i",
  "key28": "pjoCaspf1X5BSWaaceCJ5cwyMTXh5w55VvGHZGXrvFZBgPFhvSifQVQDkq59PSeLu9GJnZvu6QMtyfwVcvAzGVt",
  "key29": "3P4PF5dzWe3dEJSfFfx19F1mpXWKgUN3qSpFCirk51LRgiUReN6GAWJc8mRMGrdo7NrUBf4esieRqfsFDtkgasUD",
  "key30": "5F9r2g8d6y8914gf4KrYBUJDkqNy9bN2yqQpPDgBJUN6wy3jMMDPvfmXBVZjnXssoTRX1CFTB48m8MxLAuG13yUh",
  "key31": "62a8oGXMCY4BPjWunRH5yveKpQq8sxAEPr9xxQN2R8nHQwaKGjWkPfV75Fpi1N4a8G53RwqjQMeroD5tcch6yNdd"
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
