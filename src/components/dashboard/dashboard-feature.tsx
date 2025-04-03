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
    "2bDP2Uyo8GrrEJKLkUnA5AZsnfdPecs2v5hW54ZbUizMBVXhM3BpwnUZNrKWS8Asb8ckQABDc9qwnpiw48dy1ycH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "66LKgejfG5oJt6pH6zZWRuDRuCQEfsX8Ry51R7bXTvrKx6dgryRpCqQgqN6KFPc94wBEMRDm8yr8WbSvs94WZcmB",
  "key1": "2svJcMhKxzo2z5vsi5SoyhC4ZLQixMqisd9GwAqcJqBbP6Cw8cpF3EBPmV4EMGbJRDHp8YD9PcNXUKQDp3uZcuLV",
  "key2": "5MoBG1PbLdxE7pGm8GebVPTNRLtst2q3AsoP61uA81jeHtbBGXcvuHdusNcg5GQ19pgGfZZnNi3e4zFRUf8SRNyu",
  "key3": "PsBQrkKRcBEwUei1gv7xnhoE2vKpMUSVUqH5zqeE7ddX8mL51cEKcETnLnHBrjLHowW3PMDNMFoBdPC2jdKnsmC",
  "key4": "exFYPi6z9fgsPU33X43ACfTo58fCbWguymMUVTGJhZrRLNPoz45Ah1xw4AfZbf8zQ8vatZeubgDQrCZJoigBxYc",
  "key5": "57TaWsmTrKZ6bhoowoRMgXNYbyCdvuD1AHz4Ar1ukktPGwrbsNoMnb8hh8oq1LVRfY8cH16vs4uaSw2WXtsJfiDs",
  "key6": "NmeNJK6LAjdwGsNNpgBXb224DYaHhw2VxxuUaJ8Y63cNnPQzrL2QnZ2tWq4ABC3bBGUGc7iZr7riW1Vke8vjhf2",
  "key7": "62jF9q8Deaq77eKWt7UpzVdK4CmPvcwHJjQDDoVy4sHxAaR8que98CtvSck7YjzDXG6SMZchYV45ex9cVpz81bEq",
  "key8": "3Ecx2LaG3kpUdV4BditW8kya5XvhsMdWWu7NrjMuygdNGmgrVh7tVeR8uQuAjGWSy6CezNrARzyqE3C5suhzaoFh",
  "key9": "2feQaJ6oBknobPCwShh5To3mKWFbwz4dMeZ3FXrT47qGL3LvkD2NezA2LGCP7mQ6R3V5FohQGJaWnEvpBsQmPxrG",
  "key10": "5FeJmFDGbjpEvJ8zZGCSUUvxSmAhwyGGrQqodDK7VsaDqLDTP98TJoxBWhvUHc5emnpq4sku3MMXzdR6QPf8Tc8Y",
  "key11": "4qLoUoDfUHwFEJwAz1XoxKUSNUUrLszX7ZMvrkoSNzPcrbpAAvPxFHdUpryydtguv1BYRpXEz617St8FzZ9MfJVT",
  "key12": "2W3FZ9si4ZRXDGqmbNtn6tYXXpJKAwY5d39P9Bs5Q8ZpqjMxBgtdmGdP8KyPtHZq7Gq5KTPNg5DnvKT8awHe8sZG",
  "key13": "NYoeQGocrAVbxgQwE4sJo9vps1QT28CvNzMrXvicvqNjUzPkjQMhTsaJHmSNzgECBUftA68T8xfvMZ9V677sDdy",
  "key14": "4RHpnMu3Hqvr1oBRWmoMzNZqu3qCVSMXZ5zpQndQaMM74pQQvj6Dq9yG6Krvd9f4vYfurABT3rKyH3ovyei9HTdd",
  "key15": "33EXQMJ9Y6JmQNPXWXxX4UnXnT1M7gzME3zrGgQGP74Tcc9ujvWJ319gGvNMz11VufCuc8GCBtCnpBWExqhBKdRz",
  "key16": "4oRed3jVP1afaB6NdJPcbNEUg3SXhFSmmEs3S3241B3ELaLk5gLkuR4kvg4TB71pjf2QuYnaqtjsx1P9bJ6x7tSZ",
  "key17": "4AN6GdoChN3w1LKEHCMcVMNPx6Uhz9K6T9RycMvHSvyeuxsTw3HehzxznxRv8shCrRTHCEGMhGJQCms4FFpzNqwe",
  "key18": "4Z3Atf5qLrJm7iSmxDrc1VtUU285qzNk9v3TTrmxQreKu4kaw9A9m7gBrQ5cciaNx4L1Ef6vMRuU91deYZiVFUEK",
  "key19": "48uyfcXnBTDLWG364Q9ZT4dzdagWydriMUQ5woiyUadZoLpf17vGGWaePrEEL4s2HM1rrsbJVVMusJwSmHuyYi1v",
  "key20": "2nHqYsEi6Eb4dQu9eSb6JbHhuPfpuBoBQrjqFy2A8dTeH3Dd3fLHVBquDkxryG9XjxgFK7CsvV9G5TNQJXNwq2Hc",
  "key21": "48qa8RzBqCrtkcryLL2kb5bPLz9LEL18wbWL5Ex1SCQDhQTvVyppQjruSdU2HvqK5HraZtZjKhXWCT1EFT3q3fdg",
  "key22": "2WkJD5BkN74Fxr4fH7yhm5ZBKK7tYebrCm8eyWopiTbTfVcfD6w8TQmsXKgpqtectBw2WXY88wHUpq8zw63GaTxB",
  "key23": "58nXiY1oXjh4ytfFVk8cbnCUu6wqWbKEV1yCcCj18PmHTf7aHG2ki8YCUwat4PtwRq8Rfi6ae21Nc5TokSDdTFic",
  "key24": "3H6Qp6fmkK2KSUrF2o977BJxqUaFHtBKdvaZxtMqm1dvMY7nZPPHY7eDAgYZbu29oKU44pZAAD9qEwqjVrHHM73d",
  "key25": "3wxTERqp8YkK2P3RrzHzNTf7qQrqRMAJfjPcUz66ACEc39fx1cbjxxa66pf2NZUZHzntCkyGQ2LALvjpbWr6opRt",
  "key26": "FiGLHxm3WuAU76vWkixTh1WeRSrLoSX4H2KNFjuTp6DU4kjeTEhQ6Pp4sqvPHjVX45vBMa4BB9RkhX5aEXXEUSh",
  "key27": "2zG2bXMjak4LiPV2CHtR6gQpANSPaThUvwWMo8A8miszvqvMF6YDJKUKUNa99U8Ng8mti1qEmTyoXVCyz2Ji6b32",
  "key28": "32CtaefLSkWWwD2bA6NKwzaG8f1gkKAzkcasgBvF89v3eJJA4dJSubc4iVFrjrEYpDpRgYZCQDgRcg1PvvLtz8ne",
  "key29": "5bBM1U1XeuUJEmyQbmBg1e55rgLgv7F6TmR135pL3GddMq47o3cCGodgENh2LujtVonbhBaMan1ugz1hergpewvx",
  "key30": "5b3nxBebx3TACeRisdLxFps6L5H23BYtV5kzKKtmkN15cBMYBbmDZX9bXLp6SefmPtNQCkWWTLidmgQFANGMe8kd",
  "key31": "5gHmmjvedg4bXQjcb9E7E3oC98bUyTDgwMDCeBSDCpBib15tDcQMW4z9ioqUPUrhQL5eFfpxP8vJBf3NGp3UDeSv",
  "key32": "5HXZ9CUYsa39sFgnLB5zYD4hoq8AxaDCL5j3wkg4zvLUFQN9cbLvs5wJk6hy4MnbCJ1FjDxumoGR5Qw3f1kdxSCR",
  "key33": "2GLk8KvfXSDd6sz1AaJeiv7fahj5iXdpKWB1wqKJd9TrN9obCpk1KTfv3QHkdDZ5sLdf5vr3qxng6ePMQDDARTPz",
  "key34": "2rNEXWLt7ZgQsQes13GXvxUUFx4w6jiMKLnbMr8BJMhZSLVksgt7nahM83tHDmufewMmqYzwYwKY2wZUR2Drx9yo",
  "key35": "U2jWQZdGcfFsGhRjhSNawZy57T8CvJb51mFb13ekqAHPawRu7XTXPvrPGLm8cEgaaB6Vy8ftsbvytCdhw3kJsZv",
  "key36": "2Es4ZVck15oMpuq1szqqxjnSLFfCe9Ysz8Htz7PMMhSGrTmoWZ8j64BLhXjUiNnkeoYYWXR29UBs8JytprvoYCLN"
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
