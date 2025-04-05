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
    "5YnNBtuod6UUAJtJtmqFbETvxLB6mTGpQue6Dxw2LoRPTUkD69DBVmmak5bErGZGriBpn9QLvZDRz14xJ4td5wwT"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67p1RNPo2ZPV8j763FHyYpy17QDe4uCF3QCj7hJM7njJ9ea73DpUMcSXF225JBRfvoFApevimZKio5CgXxE6aZDY",
  "key1": "FujE9mnifWzdCUvLQ2Sk1KBgBY1Vp1vBCxZgpJbsKQjkWkx7fZ4BzkZxXvg7ZEQm2GXrH7CMu688gU6AfZ4BNq9",
  "key2": "7kcmiJVX6PnhhRrMB63G61tDFHn1G2kFkrSkCFD3oA516mWkJj7Ne5JZ2meMdvocB2LGhGi8Q19MyGyRbYLutmU",
  "key3": "5pvHWy2Mn1RrjpmZg2DrGZwAV9PayqdEUh9zJtPG24eqGWDYVwjSeXtDMBMRYHWpfz3eQWsnu2eCm7gncxHcJwdv",
  "key4": "4DysV1D6Q9BMVw6Bqyqu4mnLdWicCVd96jUKw3roJwyhvKScyai3hpTJuvek1gzrNZSnVjwS9Zbvbw4KLg7oEeTG",
  "key5": "NLAomG9fv9gAakoMwDem8DLA2SS5ExNTyUjcq82xkFNASMUS4SjArhDe9sSVN7tNhkfGUZeUg8DGQkxA3fAAtGV",
  "key6": "3Ps31tQKzQMxS8wdcfTtP2To31y8D7HSWzkMaKaTh87gvG2MzoV8LfSnpEdHi4mFmbz76274BjfqPg7qphWeSWnJ",
  "key7": "2R1iuXBZNR8WQ13zZ6uhkgaWrHSvrekZ2NF18ohr27HSCZaPGXNTNrRh9aLGEueiCiLWZBNPvh5tv2xjKF7QV6U",
  "key8": "5EaqPp9R1nXfy5g5FGLkPoyMFJ7474FMhUmBfDrAxMProXHgxWzFH5wPqbpYX5qZhM4BjFKceXX7ciwbThAb4k9m",
  "key9": "4WvHzH1czH3Y4E6gdDfhr9vxDDx5SQkkvAbN4KFAABqfpuUwJydkKJ6psSUoPyCZdRTFE1uaWux4fFn9s2RnhdJn",
  "key10": "5SVEwcMrBLPWyAp2y1z8QyEtTEqZyHdvJebrUCDnURbu6nTjK5PzTjn9Ui834w9JF64mqjJ3Vt3yFnHsG2XoCB9q",
  "key11": "5C5t7uHfznvQJYuBzZS1KvqLeZyPdVFUAfdA5S2N4kAyds83vn39Tja18BdDA4F27kic4ZixJyeRZoy5Y2Pc1yxQ",
  "key12": "39MMdsib1b7AHUdXLBLEJHewwtEt3n2CLe6pzXANHnndMTY4ktDtk9B7eS2u7CguMgeH7KU1SdP4B21PiyXdv3Z",
  "key13": "5uZhWR3DhNUBsyrT2UW6u27UaQcUsbm6Ypg95vC2JSFPttLdoEquTKnvsHUtUCV9jFiX8SEyXjuz4pBVfBdpGV34",
  "key14": "5bUDLCsSBWt64WXwNonXeR4ZvLXvmfeS14A9Uj7BRLxeQfGqLgQvo5ShFYBmHnQCGm7c84KyDAKg3oPXDxc6uNbK",
  "key15": "66BmivFt7rXXVF8qo7zGuzKDG1DCThYwpFF2SCzjLHxpLThWQNd75KYPmfmADh2oeLJhjwE72R9D3ctPr5chqaYj",
  "key16": "5o47xbXRBQfVF9FkE2AfP35CabwH9Nz8JaJ2WXrPSF8HN2RHtiJHiWUfs9Y2AFEyhJeiCtpcK28BDJYLe6j8uKug",
  "key17": "FspbasD3w6DoFoyCvCju69ZMpTq5bxQRtxqQxBp3rmiXU3WQHWBqKEPcmyRqcwdc3iSWiSfWPDFRjS1PCnByVmb",
  "key18": "3gjKVsHiF86YLQcSLVvMwurJyA6qPEFHv9yp7x2tnYZ7Cq51zg7mquDRTGyfu5XznyPNaRAr5jrVdrWnG1VFQFmK",
  "key19": "4UTeHPLhQqgh6EbjPdgdHSzEkmGGAZHMtJ2q5zWkco7uJ6wqhU9VzMPAvbufpjPt82M7d3bici4dCNicDVJqEkXD",
  "key20": "58htGLmJX1iAwPQyEdGvu3B83qGVA5vdpsmE7rU2ENpnAbLuGU8YmJGjEGUvRTNap3mPrzGuhTqBK4L999Z11sUa",
  "key21": "4xfswoJNjttyyixPmPAX9Y2ZPvUGpGYYhEbKTFZxG6KcMT8JgdMYJM5sqfB8PqbrtLLsHG2icdm69punJjvLkh8J",
  "key22": "5SMaN2QquUJGhvEg197EoHACh1A44EzhLvoaAHfaUAXs5RP74FKhYvCoK41g28oq9BvhU7jd2CRoV4BS4zWH1TXW",
  "key23": "2Vj1Qf5stEobcNncJRzFrTobkqUujF3dJnsSUsRu6YRZUb9PS4fHGGFAzXmSnuzwWhqAMea6nHiaSWNN5H6LcpW3",
  "key24": "K96VqSznjP9cnXeqnKZQF4kQyB9XcATNvEawn4aivqDebLFqiTR7bkBf66iee6aWowXUV6Yq527KMa2eDNBWMuN",
  "key25": "66YNGhz4JozSq4oXhBcpf5fLeC7YmzQ1BiW9kt2a4AbKUTTqszivLWRV9pwaD8qiFwSJ6tmvN8GzFDWn3ov9uEt3",
  "key26": "4DzSAhprZkt9Cjxk95csa7YN7cQn7n3vjKQ9yg1A7AQkaShPM97epwuHWSc48QToDrTySTvjNitWjEN8vDvVvTm8",
  "key27": "4pBKZbkBZw671BTWHXQ98Zmnuu1HJLYcArphKtUifxetoKxRF8a7dc4nRHqWsXwcYhd4ynYzvKLKQ49CxmsbyF5J",
  "key28": "bkWYp7jgPW95Nb8kNZ9vAHBxGLyttzS1AGq6NFxegWMTTuPMiB2uNXX2W4pKU9CUMJdGMdDWoS1nyPBXkQNorqJ",
  "key29": "3QUqwR2nQFGizQN4sdvU4r3nGMndsge5K77v426o5RrhFMuaqwDLUBrPBQfQLGdNUUB2vb3vMZ1URG6P6dc6pjnp",
  "key30": "4L2RftqN6h72vfLmncRWoP6GnP5u386dd4XZL6YZXAWDFY4gnFCtySzAkuLdhx8MtiUmqfVzy4uAbBUBMx7MFT1h",
  "key31": "46w6CgG9xWiDbj22ppA8o7PN3oYw25aWjVpZwxoy5jM9352kMqGyb2ieqYpEUNMM9Ytomn9nSJZqvFGLRDbASu3J"
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
