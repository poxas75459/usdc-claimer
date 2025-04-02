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
    "2GJemwCmSBawm2afbVjeAQymjCyLMy7QyG6rganGJRbariY6fnvguLdAMLMGqTYDD2zLAv5gtfK4vjzUzvLaQwLH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5zbg2zKsdRxAV7Z3RniJj92L7MGihVAQjFJ2q6iX2gFHyesXpqLYiHKsfMdmv8X6Bzstzu9Bw3FaVar4eG9NEZBq",
  "key1": "LtcyTCNTVKDNUBgEM3a6djDMo1AuunJhGwbrTYfsFdTYLjBHXX7KWmYoQbHZbpZ2nAxXwVufyokjjrGQygb4QWe",
  "key2": "pHWJ36vEQCUR4vC9tFAVRp19ymhNkkXFeFpZCLpM76gD3ffXBGW3LEsSrGf6y7mSLzhPZAYxW3jyXiVTwB1hou8",
  "key3": "4yHbtTUmeuFthmu3iFDfRFC5hBr7xtADanQSUERVqUuxqyRs3NkSmb72btVHQTddR5BDT1CD5NKm3y33mCNtmPVY",
  "key4": "284FfMUZ92pn2oH6pXaNdTLyy2LXnx8fPS1Rfod85aXU5Pf1QxvWAQou9xPjFLM69zsDRfxbLMv5z98VfBWwvVMK",
  "key5": "43cGihJJCKvcRxE5tcYwJ7kLNiw7D3TT6PSa9fHbnpQ5bgQRubuR9wSdocrbkRvEDc7Wbt2MGeaMN7cMZJ136Ao4",
  "key6": "cjNxnMieu7KW4pcQX59DUZE9TgstH3n4KXDB1HFRjVEjavHuTKHaxqE8HjkTDbKzphK78QUKpFGsCcZQ6hzF4fo",
  "key7": "AVT74yPA1FZhJ76ZDyVNczBC9Ne2YkhWXPKW1BnjHT2tVV3KUFPzK8dSvh6Zon6jCrFGzVKGBZ9Qwe3YvNgpvKh",
  "key8": "3vZvT22iEobj6fj8ErZBaHMgdEeT1Hf3u7rjo7WztcAE7oekqKTuKb6tdd1DErXRVCPrD1zPGKxkosdSjm4rdaxB",
  "key9": "3NzKsG8N5uoMvd4RVk9K8TK116YHqwbPdhxU15GpagTdjBCVHGuTzNoUxXUTLK9Bj8hPUgH37WL2JKFY5T5VpCb6",
  "key10": "2YFkbyfjjJzoSXWWUfEQt7Kd39Dw9qrffQrjHq3dVwfYQnuuaKLN4VQWNHikuoiuyybVRegxNiJHDVyVxG1yPUkz",
  "key11": "2bYJpUHsDFpjyHpFAa3GFQNRBiv2GTkiaCvP3i4UGVsNQaF5nhLRobFeTNiLpgXJ5VewVdWP4myXtknhPZnj1weB",
  "key12": "4xMtj3dVCHMhwkghsZAgKnC1Y3znNNT4sxzCv1ac3LU7njW5Zuzc3kS6CAveybU2UAcEyewP3X1FpACsGNjddQ3P",
  "key13": "4Vbnckdhiw8U5PjjsZHrnsmLsdLeYRnmcBjX79bse5jitVCG7qXidKcJAf3sWeLo54iYunfhA6rxeoBoC2gj7Tch",
  "key14": "555SCmVd8ugHNSZVjBQ6xgX9xRMkcarxtpvVjvpZrsF6ByXUj7MvxbpWcwVqtfjRtyWTeDoj7eEJgWt7ZUY6FBJv",
  "key15": "53W19zxTn67d9uZ5q12VCBnVb7QD6CG3rYySx3zXu6vdem1otVsPtQh39SDCpn5UkdQ9YZkfqT2QGP7YaYgcTDQp",
  "key16": "3LJZovb6YWaLNvKHqeqkuCTqa8sCEbQoSVyDn67FjGnPZ5dVwULw6eAVQhXreq7My78rxk96r7VxQofu74Ufn4fT",
  "key17": "4DrmtLkzYncb9povwztGdsEZLCCRENXZ1WKFhNDvGqHBq2TPAB9FaMZiT51Nd6dd2SVyn5MWCiM8f1pEPcyWQT2t",
  "key18": "qEasidGsnQhE2aCvaLv3S4YcWhiLWngiaLZK1irZAAskgHsFihPCCQYtg1qwRdN2S7u1j39wCNXwy5VFsNVJ1R5",
  "key19": "2wpRJCpgXQCPLu2xfCtFsqLkXDQCqnpr2mRopHPqzDCc6xngQHdUYRjEYcK3SHkgDqcYi1yaKgwmL54mHxMRwQLp",
  "key20": "4394tbGY4vGFcga4NuJGn1jq9WCfTargXCbjoSgCwBsxQZtPPvwvuuwD4y7QJ2xy1EEwhjeo2TmfncimDTnpYgng",
  "key21": "vhksqbMpTdkQTNCgH15VZJNWyuS1G59V2h21bYAkmADheXv62DxoSNnK68be8UWPYT9kdEaDpE9kJgoSU9af8iq",
  "key22": "4z94F2FoX9EkPiLGS4o2NML3s3WNpSApCdzWoXeZbhqzAcuVaeuh5KioyJEeDHAwzjEgqWRKr7VwU1QCyvNtUF3J",
  "key23": "4hCZ7idCVod7K4n74pkqbrRmpxTZa5k1sGQ5Cxg3rA8Bh3px5vKGdRyJ2f8sK8aGHDGb64cSP91GX5FdHfn2XPqH",
  "key24": "5PjjWxbDNjXU1B1SzaZ5n6F1WTH2fFp168CS9jdq4G6E1MLxD9647TWR7w15SV98fLMiscKRWqtFATYz7FV9G2yj",
  "key25": "2hWiVUPmD8zJFyzDGkPdtHKEQFwhxXcCdpzHpCtvBvDuiXHwSjbnbtBsfEdrxKzkJApFQnYDm6Tun1gbLAhAz5FE",
  "key26": "4nCZ8pFbhyiU2uyU1BT38uuYjUQ8iwbyPth3HVaqvPwMXSPqrn98Uc7g878gTLHjZ9QUTSkMcdzeiSGWY4DBwxsG",
  "key27": "2qocbcsfM7fZF7aYo133sJohp2a5JoMehZRymb2eK4wu57naBUeaRHGmAt5UGd3Ee15Cu7cTxSSkNseeV287rkBH",
  "key28": "5RX27CzT322Zqyqog6Hu3bVRWD47npzRZEGZK8io5aMuw86SgpYqwhhuVBaSoqm2SxF4wFr9595nt91tqsUcJera",
  "key29": "41GCCgez4QxfbVYXfG4g7mPetJ3mWsxbceRjtK9BMjeRHkW3fHozN1H4h46BmQEjxmCUgn2R3DUpHxJ1VpCYN3jY",
  "key30": "3SGW7r2jquacuodDpSER1s3bbsBWx5vFekHowuwA1yRnRFvDB2R6a8sNrqZoyuDXbC7kcmhY4FGh5kxL7XMkttnr",
  "key31": "52LukemmsdXtFLPA8eemZYF1V1eL8jApijHrf3ksqYiEhzG2QpV4WRkE5xeEvQ8usiUaXLPxgainwerHuZga9Fj7",
  "key32": "2CX1D6s7URxhs5pa668nXmHaBHbpq8hnAdd9FqGiGXoVC1r5d3UwPkYMJsNkDyMoHYbFM7qq8N5C4mPdiiJrcFMc",
  "key33": "kXHbThKjmnXuNrYfAMoeNtBpRLdgcvYcvc3Qhv2M6QnXLmFMcrjGLLfovENkg9BAKzyQpaqjsbhDLLwjaqrWA2P",
  "key34": "54ZQCqNfJJ3tD8MqMEYoppQNmXdsN4GvjEwJ3HReeAYJbgmNiZ2jZBu1mx8PN5k2phhS53xFZD8iEZeedQ7rxERU",
  "key35": "4Se1sohHh4toQGoJ6FTNsrtZZYPtHrdhreStFpMXa8ws9HhLtV4o7WuCS5rKyVCbhGptBerk5Ri5c5RZkRUx9gDb"
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
