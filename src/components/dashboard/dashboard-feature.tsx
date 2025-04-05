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
    "47vFZdK5GeKqm8qSnM8ZBeKm9r7jK3CYaw6e6aLxson5uVvUtTNxtHYSU7NbPo8nC2iv957bdvKqKzBLXjN5udKy"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3ucD6JjaaEVw6SSUWtgcJQGMpKR8nMJ1LhCXhMAnYL2aU4wLgPmowb9zJM5NxRtSPyu3DP6vY8foTxkUAdSQraWp",
  "key1": "3NcS674bkvku6f71p9YPm5p3pkUjNX1Wgb8fomEUNVMim3pqA9QejFqnU9nJZMyVxSUqqxXvBjm4geA52C4e4YQR",
  "key2": "3iEKnJpkRDHEFjfqSxK9LuSN2ak3s62dHL5UZd4n7vRHAbctWaixJ66uQiADVqEaF7RDxNEnjSKdXn2b5UGqfenu",
  "key3": "3H1n556dfALkiuMjzF65hpUMxLRMXmQFbakrtubrGsAfpDv49ApjoHCnvG8Qx6pLLdvmyasKyo5sGnPw9a99fAwJ",
  "key4": "ujYVRKQQKTExZmTE3hWTKaoruUeujrzTFfbbTBqW7oo7EW64TukPUt39ALKkV3crDzdgHLMgR1XcAJuxjFF26BL",
  "key5": "qdSesca23pLNEdJQexRTCSnLNENJpYp6YU4e2qHbusw8fjujxXsrvysLZoiVDQs2xrsVPhPc4gyUhscTft5LcoW",
  "key6": "2opiNpLFTRFo8hWpcjn4W8x1uCRomgEs4gZuZZGULkmjfTsCDnsHQhwk56oAZMQnJCDodUU4tMS3BEgzTa2gANYN",
  "key7": "4rLjikMUV12QYcm3eCZ2zQph93kgvnprEAxvvwZgGeBvMver2oQBzox3BuQc4FkXDsK5PmKjcTL5wxBVHgHBkGZQ",
  "key8": "2SJSqPUwJNQyGEToRr4DshHZGD3r51RVpZ3FswJDa4VwqfzmbjZzkshXAsPd7HfcasztYxgdLHq2K3MAotaZgfZ2",
  "key9": "2tTc6NLtpg96mGcmo9hVZeBNggi5VaHk4PQZEDzEnzBHZdWMSmDiZ2hZGZmbVBRdfPW5sVrKCMHX9NyKBFKsTY19",
  "key10": "xG4uLyLVsS1ezRBrdZBNiDN4Aa4yUVFW9xJ2bMT1ZFP667r8pVkot6Fi5J411dE7FrCAQxb7YRtkrm3tqorE2ov",
  "key11": "L6qWdGWNoPY61Km4gH7Gz4BuSpNA3xuFNx8szRgAqymB6u5FM6E66zCMr1BYCDP8ZWxGVcsbi8RotgLwievHWZU",
  "key12": "2eP4Uxgc3jjuHfY45Mx1oCTeyVgC6ri7HCyuM3XMgcxVP85JWZPvVMLL48ZZxXqSnnDPsbnTwZJUWkM58kEX3EyQ",
  "key13": "5syxpfoKvcvKngsez5whuT6nPFP4owjPxZaFD3GvYZEycTDvnRcnYt11vqHUm8uHqz2sVzAbhWYFwMRxrd3ewoRk",
  "key14": "kMEubqeP6FE5o4WSFGkLjkuWzXs6M1SEFRdKrsUJBxx11dL9YmRYwRqmFoNu3BBA1igCgAqmDQxyJXSZwygnm6K",
  "key15": "3o9dpcTvpD8WnCnesrXRNtPXvyKwusSFpLcPY2e5b8matZFEtyqDtd5pNBaSPG4cqGoJsUmu17ZCjXsUECXvUkPX",
  "key16": "5svfkzx1U49m6en3nVBxT4JaBuVXZLTWKDCPcYbWSn4Pj8jzPcX6S5EaMzNBCaQJHUD4f3G99L6iuGjWWLyjDFHY",
  "key17": "3ii4pyoSrNDcFm1J3uAyu5MAgwvhAJuLSswnCost58SVcJ4Z1jUT9W6bTKeLhhDqHhpqY4Kx8ce82tcCBGZg5Jqn",
  "key18": "GBWVYR64jErDBm38LkXHLaUdZy6erJ1u6KTccHsorRmD9M4grMZ2fsfotzaeeBnES2TvAqqhtq5LCRhLPvMAUK5",
  "key19": "3PWUbYJkVBCxhKtExzMpUNUM4SykUpc4dbNtcmq1VzVDtxfopdT3BEuH4UFqQqYWUsuJYfAwAt4ZwiMP2N3dL38N",
  "key20": "2ZLQHg6xvhEYNHR1Zo9aS4vVFwjFj8zMJ5y2ddZNVPHQ9sqXLGqfiWLVvN5g5gdJh5eVtwLHND79GCYKtJjxiTSf",
  "key21": "59ezHy97tuJ68ynhu6T3u5QWm89Rwmce4A63DoPa3Gqhd6Lhfzch2TNpENMvyVHxzbM46AhvKr5SYwxf94MW666c",
  "key22": "2mjPjopvfsCDfRoiMejx8WQPdy2qnPkg93Q76yHN6X9civnaTcKku27Z8xenfVy3fmmKgRxqsQD6huPuEmpRyLE6",
  "key23": "3PiPqhjRFvF5X9NgCszP6qqGT341AmSiAQUyhtLvE6zTuhbJDJN1vwxh4YUMQvNWw4ikraa3uctnUvE639YfoKNw",
  "key24": "4yatCmVTo3hAW1PXKFUUpFH1mnZhQakuHSuscND2145HnR8LnrSVBTDcqgqvPt2SBXafB1R1YuSdLp4fVmP5HZqt",
  "key25": "2JQtLjHXvaki4RQz3njTw5ncqzp1XTDyNEMfrJi3xWeZTmneDp76ccsuq1o1AYtG1Utf7Qk7WMnDYDv6x8o4i1yQ",
  "key26": "qiX1WxtQYH1tTZ6EPd1DyygnuE53PvUm3tBWwqUrb6GisDNeUnVKzuRjpnbRis5JH7jFtFzxpPiq8ArWRaiJoy3",
  "key27": "2FeM6WLAx3RBXa7ApVppHGGvhNk9RjJPVETWYDuaXmJKucaYFRRaD9WMgiKxF1zrk9XV4gyRwjdgjcf4cAh8GQcS",
  "key28": "52iq6HdpeapLkNcjTKE5zau6tpMR3f61Uxf2bBi721eic3UWU2oDhmBrr2kB7rh47cohvYcRdu5qFbn34Z2k2Lpz",
  "key29": "kJqggJJ8U6tvFjuPDE7PDoUUgXWkhNDDBZJpSbJAeFsyMTcpcEUxAwWzoR5MehDXjZrQwxy1tbjUD9kNzZMCFte"
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
