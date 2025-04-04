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
    "46Eag22QH8WYTpuhUwmkm5hmjZqRpCNPCVsovSy8ZVopE47Q9bbfVs1Ug9bdgSrjeTVYhnV3ebPhukyKvATPcWAm"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "29HMXVDULRCBupMPgtD6DVTmfeu2HjeUpcTQSy17rQxjmLcRsdPdz2YTgG2nT4Zwqu3gdMtjk8rR9pZik8bFFHec",
  "key1": "4CBB4UZYuJ2reFn84EZ4Fpj3XfcSpjc7nfVspkYTgKw4R21oiZP5K8RHAXdDTUjVNTQWvGJzhzBGrxBNL1oc1z6q",
  "key2": "39jbZqWEh961nSRyfHCbwvQNks6Sj6Q3jJdbne5geVfC5Y7Q24tdryQ9NrbhadSfghYVKwhbnJkKQBEi6k9e6jbc",
  "key3": "3NnFTYoMmsNMxGmbq7uQSqUSof2GLjX6kEUfy7KYsbdyax56hctHPh7DRxqBTRwFqVRVWuagfkEpys3s9UdYX8Tt",
  "key4": "4yqzqzbboQs9wK1nxZz52CuEBSR9f4zhdiC6kQ6XNKzC1ikixXYYXtVEzG8P7AmVJGX5MheUZ8VGFUn3ck2wHyS4",
  "key5": "3M4mgny5jQKdJuXRqi4gzqDtGJJe3PkNJWPfGgiWowyehofVJoBz8EVzCuSpsdj7zeP698HoS7gxPvktoTuqbZEZ",
  "key6": "639LmfSJNnQ93XeyeDewtMqDBAQkAHg5iY6t2bA8BL87PetZ4wYs8JqpRNynQFSEFmdHhEnPiqMtzfgBeqf4fsT7",
  "key7": "DmAxoMYJv9JXBP2CxDMhYxBc3usZfMMqrKQ9oCRgfExtXiQcs27S1NNyjea98pM1RYfujQuc1CrmSyGsxdfgt6v",
  "key8": "4jYNA6JJTDbgsT3666MSgFZ4Aib17DoLGBZHqRo7HQgPVRyYK95nTg3AAtjCyeqqmTRY6kHEJ1bR6pzRpJnF5vrq",
  "key9": "4HibBBnARY2PUH5cEc2APa1MmhZkRRErCNan4A7dViho9ocamEV37hxA8FbRtibSk4kFpWL17WqHey7C9AQgkU4H",
  "key10": "5NVgKCRvJwhqSxHL71ZGBqzsBR2w8Rkwdo4HroXeTzhNTtDmRTfC66fyzEi8W8GqYUQJvtNQxa1isZR4ds67pre1",
  "key11": "65UJQ9VAD3CBoNTdgYZcfDjsCDXyAC1q75KxhuEy92z8zqs1hdKKkPKNDC7Zb67JsVnQrGfCeycREAFvmF7TDBhF",
  "key12": "2EA75i4LXQv7eufb4X3wHMtKsYwfFcVhJqcbpuQR8qxgYnBx8NMZvQhoPUq3potPR6QtJyjaedoq1uirwKFJ1kPz",
  "key13": "4JoDoeG58sUKs1WYyZbrUFntAQzwmpUW2FPvKLd4kZSSNN2tpRevFX3X3SbYNB6u8jdUe46RWanKo9hxNUFJYo3",
  "key14": "KARGc5z7Ko4SXgQGq2tAT3212aHfSXdoMnu9Q4YwjwTJLzZQpuLcpVQGnCpijK2xS8oCvAsXMqQPcT2dpSftg99",
  "key15": "5X2o53SkdZdhJMP8zcT8V1QjzoqSamutp5VoDUca89N2A1gexNUEkvGqsEMfrWphiD3ukHd1dF5ktGk3VBouFcJv",
  "key16": "23UbubpeRFQCXnPXvEpCFC3qcXADV9TcNFExBViMyvCZa9tzjU7rp9eXcCkpfd4rpqrWGTX6RE7kvd3kYX1qg6WU",
  "key17": "2DCURU5orFmLoCbD4eNDZZRp78eXPwDwVcmAy4HhsHKBEuj4b8J26yGdx3wxWjkxYo1YqNF5Vrxo9pkSb1HuRHZg",
  "key18": "hMo7mzeVJ1r7y93oV1zXxVrXphgNdahFUrBi42Gt6Nwuy5QZivxyeB3tHzx5ZurJMa4LS4FAHxWJ6AnaMsmystu",
  "key19": "3Jw93cKqsQEL9RfiHiyZLfvDFKLxgZ8YRnbk9DS1X5exqswPUsueLRvABgwPvaxFx9UpDnthGLLjfwGRVu8UA4a1",
  "key20": "jUK3i8Sj3dRhRi3uJ6QE2vypV7shhJiFRFCkd6Z2EWGDpxNi4hpuHj4aVSsUuHfkChy873HwgUjuH1SRuLWjLDq",
  "key21": "4hFiGVG3zpdVJPcarsQ9vynyMPNcBx7JwgEQbJvqCSEBNq73HrkwWvz43YvW3Reqv4hMRvM1tkj9dasbEBBkkURs",
  "key22": "2AdqqKpNaD5pQadviD25RhUHaYqv1ZhuirQo5FV1coZGhVkxA2HEijJWJfPNXPeuYAi2FLKaWZJngjxcK5wNFLrN",
  "key23": "3VH9Cb8oXSweUbpbP97kCngVhwie93YUbqkaZmDUgpaephxWkyw15fi9j8NjAAZVyK8KrYzP95XobVj2TxwnKRAH",
  "key24": "4ytTexEqfqJqgEqP6LNY3qx9nZcAFRzwPxnZgFt8Nm7kqCemA9SrPxecU6h6bDaHzRuiARbWuTpC6crcCK98z8pG",
  "key25": "Sst5Ax95JjFXw8p66GjYt55DZQThAjrnWGqr8o2sxtRoy2f2zhxC3NtBgRsoxjvSe2K2AZDHFB2JMojPXNyTYUi",
  "key26": "3HY7ZGwacEBnHCs44xuFrKBtrMdDz6BxxMHeh6g2M479by6bP2UASgfUtFKCbvcf62trt64pQeH15yLaVLBTtVVf",
  "key27": "2V4c6sKeHv834FvaywVPppQowm63Ekb5fk3kXPf8PhSCcUxoRVw1F2L9az1ZU4QdjNN2sXkCKmgcVvWFjL1jga35",
  "key28": "56SuR1yqrh88hX8XdKHqFaCS31LR14gA549yPmBrsRVBYbnuXyEQU1gN7mwimNfucPjRacqqLpUkV3TDoPTcQ7U9",
  "key29": "39jRmUwhAP8MBTMmtD9EapWogM7hq4VsFS8EcfPec1zzpCbT7CdWpbceGYpG9Q27HUv396PZ9B7vfvggsygKcpbp"
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
