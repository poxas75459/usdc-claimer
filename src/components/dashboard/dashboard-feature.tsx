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
    "4LsyFcChNTSfUAf9P8xgcsvQxM48DHf7EsMphjEkxH1McjJYNjBi8Ew732gLjegkU8Nsb37DXfuVvTBQooysEW8M"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36wFUFFgjcdpatFc3WNEWQCfSVq2sxShsp39u9dzcie5fe9VnSxUBvXkyW2Nmv2unCozR47ZsJFbUurTHRwxFdXW",
  "key1": "22cEPagwRgLAP4u7RVAG7zvzHoJppVb8cAiXvHH8bN5jjPsREJCZt73RSCwavdMAMpFUEy46yWwEsyLpkid61Efu",
  "key2": "3z7WFqL69vWLp46hNvYBaYSYVj7swVHjFq5ykJveCM322UyjQLdf7HcZ5M16Zn49c1UHj7aHVpzgXXNjjJwpVjpJ",
  "key3": "HPyDMgeGVmUQir2HkVHbt89K1bSVFQa5HUVGQXc3fDXNfDxhvq152wfNGXNDvzuSF6n1UxM8QjMG8KZtv18jQdu",
  "key4": "5UtRJZ8u5GPpmxrup3aimECvoZEAgojEJTWLma555Hm8zuUr4fKNVVUHxurvP9D3jE7VCUZBZXYZpQhoWiTb6wQZ",
  "key5": "3w51KFneaYEBTYKFEr92zuT5gizs5shqDS8YY8w7mxg59BZbXxFyrVdmb7chjVySSDjTinDsxeRiz9hBT66SUPEW",
  "key6": "aQoosRKwfc4uhxbphuUv45abadZsYrt7Da6JxK8soMnS7j9gtEEtSduMrAQo2hUz45uPh8FH4WBMs3MhvfARHmh",
  "key7": "4D3SJpCggzM59KxyesP39Gj8WYg6RxEs1ci4ueY3xRNtwUM8aL7sGioL6TFNjUJ3hDB3K3ezx4kQCNGnctbs5oTg",
  "key8": "4sNxgUNdTn4RQfGmf5WDoQ6X54E4SLUH4SAQpQ8rP1kAGpjgS9VyWv85xrfYUpySeDyKLZAju9uoVW1q3sBe8M6u",
  "key9": "2ELbCTNCMvqEsUe8B7xRB8BDoXbCe3aBFjSasPD46BBi29FMNwSiifrZ9j3yHf4zugcWDzBtWtkkbfPn3dRVHbUV",
  "key10": "2n9EM5TgrR7t8DWW9Q1C2pztTPxZTG9yEQrRb2ZYupSwWS1K5nwtDxsCVgYmQB9kf7jBKEMm15fmG3Km3GeqjsEF",
  "key11": "36u5df4gkhceuoXHViY3ZKXCYrr2WxSQERqBUUA7EEi8q8NA4PxyC3xuwjsChcJD5tmpTALM9bpaMUqcHK46MZEz",
  "key12": "5VShEqS9azNKhVxLNbwvtoxj5PV1fP2vutebeTNTeQ3a2FLdn42tKT4ypu8HyTX5g5L4Jvd7jLFcA3xbkkD1EgAk",
  "key13": "46F2GZs9MiX7Bs1RnHkjdt2C6AkSVmyRwmZY6psyFSVzzYVo3PqAbiim18BqfL8PfyKPiqXi73i6HdGct53GRSyM",
  "key14": "2dFSC5piXztYeHgwUV3yHfxfTsqRe6D1u2CU73YoMpG266UdCxfQQNA9MtXQEwo5CSAQGK5jnhkVMjNzkQBHTt2C",
  "key15": "3e53cqiuNME9vFcrxRWYjKGPqpZ5wY8Vd462a5KDUHBPsSYUPs3xTvKJLPz5dVZrcuBVipPChxf5y3ioUW7JALPR",
  "key16": "3NUqfstfaUaSeLo1YPFWLNxB6Xsa6pxmkycYHzCJjWQVkH5BBfW3N4FBpGgxhuC7FZr7sp1PFakXQm17e1KPniTn",
  "key17": "3Ke4HQYdBU37YgDMAjWxEEL2F9ypcEaUy4tNicxfPWTvrCLNoyBFcj4FtnCSVyXjXsiXqqSKMXB8ZCbgLGUPPzMz",
  "key18": "5tmVzwi8zcLBKS6qFkBkQJ64wQRWSY9EEHMChyqjwUeb32q58aYEFLteS9SoKnFVvoxM5tFvb1NRzFVd4PoUdRF2",
  "key19": "4kZ7Xv867b1oAxPWbC5dHX7Pj2H78xJLR9ePNwYAvjDLsK5mtiGHQPhcFbZx7XkpqEivDexvoGENeCgNFbm9fqqW",
  "key20": "4qCzyUzng8Jdv15eF7g8hirPkHh4VkfqBR5xEPPCd6K1MeFF5e4MLJqmjdNXTYkbtU7TbPJU54CmdEfH92AfvzrW",
  "key21": "5CVKPa14Ph1zH4n8XBj78Bc6sDFMA3mgpN87PcpC8KTBdJ2xJGCmr14V8FJoagofMSS5n5Xw7KVRKpaeQzvZ17Mu",
  "key22": "57TnxZrgE2JK3XcEdN2fWscfnzVoR4dF5D9LxeswBxzYaiNhoUzFSJ7Ca6wLW7h2uS4azRmXhmPYeTqJEqN8xZyg",
  "key23": "34S7nLVETPVESG4J91MzJftJMHJE1jSEbsRrYgk5CGBTtWCxXpLcAHshvaEy7CM7jLawMq3o1QRNDPawfo9cd1ZH",
  "key24": "61e5o311Kq8CSvMeRE615fCjfvFV6UQEso5m41eG1tqCXKcZzCopCijwxonERDbsD5sQVMwrxreo83piphhwg6t4",
  "key25": "MDK6zn61szNUL4pSBtbkMrXsMiiGVLEbNU8kSGnZBXGbiRSLYn1frbt4juD5GXSj3hK4y1QAgX9C5AJovYtimnZ",
  "key26": "2ftg8gdjeXre2TDX3e9NMtywSr416cpVSUX3gTKzbP5yZ7QujUWb2ayG3eSsVXn6LNaY8z3F4XKQYe8aRLLvsHb1",
  "key27": "5DuS9fQKECiN6fH8dZuE99trh6cPNVxc9MrbU8GSAe2mJdtW4MMpvPbiGXYshKNhnJehzRExkVvZQBprCXse5Yb3"
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
