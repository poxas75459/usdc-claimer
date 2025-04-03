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
    "3zYvvEeLSjr2pNprdStY5yWsD1fgxioDJHDB4JzbPSbyojW3RsqdkSSazY1EsHnYQdrEcx562rQP4ensxFwwiWwt"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Hb6UCPjwDhuwV9y5ma4zWFN4VqgJkxfHSbzDnSLkadw6VPTkWff6JanHj1QuWyYCDhLCLxo6KkVXVsieY4iWVJt",
  "key1": "49dV7qoBHUxWRaM1fCBYGMRDtt2im2A75Gwvqe2gCjpF21tTpN7xts4Rmmz7wyTfzQUdvoVRyE8PSQzw3rTkHKgh",
  "key2": "2ypw8STQ3BJqduRJkZe6N28ZUNp4sgUKQWJztFTwaTJEu88nJCAERedZeDRbpAyc4Rc8wYNpGpKG7Cr3bUQF3Sqq",
  "key3": "5twdeiTX6MgNrM2Tz1risaAXpiGVPEFjdgFpjfxyCvQ42gmTJsorngzT9atuUZGiiN84PaWmEvxQWeVtkgnynZyC",
  "key4": "3XNmgHwYruNq8CDgAk1mfm3jvB2T9njLy1MC1hHFMMP9GX165nr2nF9LZush41gFfyTKppQ14pFnwFDtURu3PVLc",
  "key5": "2jq4PKLujkLyvJ98TpsLVybhcyrToDd94ESXDr4o8axsR2h5hGwxFSPXRyRNDD19UHE4dzdbq9sGVH5HhH8YR6ed",
  "key6": "3SEG3d5wQ3WiDeQhScnX2U3CK1r9Q4zaa5J1G6e1j5Y6rBeNo7uYfpG44DwBkfhaXnvRR6D6oYApjAAJVUBGPik4",
  "key7": "zcrQayr1RjjiZS9YsJjDpjLN5R19BERuMc1BMwzr1cP7LwhXD5iDwZrM1ZaixQREiHdgMGvyx3UHaG6KSKAEW1x",
  "key8": "2D1W8wwc3h8Goi6oSPe2MCtWDuLsX8sZnd1rqeaegVxUoQxh6esPJJpiqrYRts94bkq62ATi4FfxyejJsLAEdFAg",
  "key9": "2zSiEMp2bLKVpNEAy3o8J9omxAJZLNYpkwYnFZ9NXaYbj8suRRHQR3okLBFtptKhz52L5UK6c4kqLaodsnXTKL9Q",
  "key10": "5Ru9yv61GuH3sogvfvrHRHDoUSCpC4ATg5bsHW6vEb9UDt4gWvppinpfQeAsgiwoSWQYDH755Wz4PaR4oTSARTzM",
  "key11": "4HtqyX7ZWu2rEWHa7tqfpdym6tToSV43g1f7A7RNEqP9btaXZZWU4P33eryScimgsYmYzKBkrTTB244vw1FA9azJ",
  "key12": "3cf49fd3u81mSkomQokiSAyPTzEqTe2FSkR6zzxcXa87Xu8YJvq7PxPzW7mTvCio6MPiBGHX5v598yMwwhr4FSRk",
  "key13": "tdk4NuCwu8cGXLqHpsAUfytfV1Vdg3WdbAPcXUpLE9oRE6TFv6NKj3kGyYUtk12jDc3eMCfPTE399bLffEZFMLo",
  "key14": "52jY4uoDz81UT6FqZ1z4fPxaKtPHPDM8KPCdHpxWxjevE5XPngzcxgCSzaAoLVn3PRXdqrFN78kfjrwo6qsvGNr7",
  "key15": "2STR7td31PHnyDMFrokBzNunX3iUxGvtCMW6yCDj3xhNZaNwZSWZ6yMQENnT3NcX3x8vxkNEWdjhFsiDeMEr9fV5",
  "key16": "4iQPgWmfP53HtZyXpH9QrEjCKbZyg3BDsAVuQ9Zz9ZHU8S2m5ncqpNu6a3MxWkkQ8BSMha6vhQUZnotx9k3NbhwE",
  "key17": "5jUHproFVKkw4hCwd8T4tKJJAJ2PboRfnzNuHcjv2mVS6iXb1RCZYSsaDBCFpcyoweKqCtNmKf2ahnuGwiJ9znYS",
  "key18": "5CukRGLPhvAXvcT7z1VsBPaMpk38RmFzptF99BZEEYcHGhQ1WkKh8fvgNytQaeYWTPCddTSGZMLV2WGswSrjCdpN",
  "key19": "3G2bfVb7UJNvNzGo1xUt69SijSPmX3MsfNabLi3fpo6jTvgYca5L44mJyEjuPAtz4QvH6FR7CUW9yrDEkkmVZ2bG",
  "key20": "2Q4oUsyyV8Fz8xXzeNaZP6aVdSMyDNMkzLmvnBtzjaNm8Zf7pm7Dtd9XfF7UMoUhHyp3RNpoDuuzfMkRzppzhzm",
  "key21": "4w6d3iDn33frRfarYSUuMqAGKJE964ohSmri9VE91atkgBiv5ZHnzrSx8tJQpJTEKwquZxTaJMDtSC2WteaK7cC2",
  "key22": "4AmSyUoYim4BeMBv2qEN6aud94HNRBypwc78PGFuerriyuatY5xamJwuhShvTcQvAAiFF4ecXkq5ZhwEM4WniDoQ",
  "key23": "2U4PjNJraAeB3Mper9A3ZNMigC8eBKBnvVYEx6XiqjjGXCzqKzTaUX9r1dDwPyW46XbFWRttnz7FkSVRMJZLTgve",
  "key24": "5Mxd2q6YAX5KJbnYwPPya5SXBNP6fw8KoqVeeEBjhSKYDPPH49GkMeepcxgRsiNZrtkPyP3KDMHa7z8JkmPT5GuP",
  "key25": "2HyXeSp9Yv9ubrUXZdoT154ZDEr4kNLeqDHTNY1N5hrpy1LNnjuVDAyQPMzJDywN4qQBJiquPu6LU2oiCBGyLbBi",
  "key26": "4bZekbRjPUkH8ZXiFpTBVTYXou13EvApS55ugeh7A77ZMKR3KSb7AzvqmkqjJAzZhdcGKeNZCe7H1mW6CBfAh1ND",
  "key27": "SHLbJvR5MC9P1UxTC6x81gQW218TvNkDbykBeh1Sq5QKGGP3maQw3Pf6R8qSvj4jVqBSPDZfvc74qmLPxF8EE2H",
  "key28": "5KLjdeZ8KuhVaopH69dNKWRA88w5etfVTzDGmRiuKjx4NvyyR6Pa2LynRx5J7oQyasY37Y7pVUyoBieVw3GPQJM5",
  "key29": "NyoZfQjdCSK8sP6kTFP6hTLAHjmgvg9UTDBuJWexiFdkjHqo5Q41FFax2c3oJBuiidQaGEXSZDWfYgLKJzZvLHe"
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
