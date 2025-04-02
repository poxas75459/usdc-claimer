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
    "SHc8xjb65fxdyYDFZQnfoJWg2Rjwzu8KWfc2z6RRiPj7vSgq6tAkRSdNfd433P6yp19wizSTZ2MDDUytYRcoN7q"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2ZdYqFVdT7sgfrRP5Zy6Hudvo1Y8CEKHKDcDUqAxiB7aqUzX7uyYAn3WAzB7tGMPLBF8XnrPfQnAyLiSdt3a5Qap",
  "key1": "59B32raAX3RbTyFCxdj5Z9aWA1wEsZgMV6Am34TwpHvCHFarYjCH5CKZTQqDLuuEqs4jq4NTgGd1b5NwJMeE5v7j",
  "key2": "3URKh5msBswpo8MFoTGSbNkF6zGFRFJwvKWSJ2vP6b5BZaM5mkjvEZxNMTiuy6qrvmXEVuRNu3xVwTPjmfp1ihmn",
  "key3": "rtdFkViHAmJZMnJeeaK4eSNSZBrY7UrdF7mBABHoCcd3MeFKtfhWNVKcUJu3qZDFiJJmwiitdZuR6AeQuqNHFqG",
  "key4": "5TJRxY6fABK3tEf1ypfwKzKaYPao3uwWMQUSaaHAsUFbt58t6PPpQFFGUJpYWf55YEjAWU7S8NuSw53nQss7n5oZ",
  "key5": "3tKyfbKabYoiakjJDc2UHwPUyEpvoStmt9mXndT7hV8xNs7aHsQ4yPHjoN9pVqoBgv98YNJiNyjKXaadLpJtRm9t",
  "key6": "2wmDePCqYsnJ89yz1zmn4Fu68eg8tHgT7FxRRYErcPDLTJScztdCvs5JZw62QWTQNELW8AFsXhk3nAn6NnxAd3d8",
  "key7": "5ewWxmbdBhNb6B4sjfC1WAeZRnn5pC4fp2JTFESqiT6cWR91NLA8jxwXMKWGmpsottKKzLRRce7FwZ59z8dgAFsQ",
  "key8": "26S1JqtWrvTUnkd9Q5y7JcyGHaiXE9EdJKeRf2AxyxbWuo2dApU4Lh2ckPDCQkXPWhzZU7vwqisdCxD96q7Y8PXB",
  "key9": "24HtYwiWa5ywrdxJ5mtFDAgT5zf2DnmTnrHbrPHJim11CE7rDLA148EXwAU94ycTNqSJqf9MG1YZ5yqQNriSYW19",
  "key10": "4QxcaB8bQx1HcYWx4T4Mspo9pf3ptzLF7jfe3tZRgUbQR76xuGyQVP5ZooCxuv67DX6NzCqoteq13qookwq65ybU",
  "key11": "5tC2zs5eZSRWNxVzSbnMqGxDn8vbWMGNfDnWZzdMzKnybdPq5qWWbtw1ppvdKUqabDx5jE3e4RteQDwvfo7nwCM7",
  "key12": "cZct7AfpuiYWk6LBx9zgjpxGisePoi4LM57T7tJGCzv7VhXLVxA6Uzk9FNr2dDT5aTP2h7oHhKyPfyck59jpPyc",
  "key13": "2ANJkF77zKdjrMSDTnKjnCzvNa7r1Q539Vh6pwxG3pCJH45NpZQrG5HM2oDjcUKZHbSbxJfUfdEvWcEVNKZxhq9P",
  "key14": "2gnCR6dGn8MWMKvxqTFpNq2LEsu88F8Exp8BMP6hYJBP9EcNY2d7ievVGmP9NSjWV7sj6LdX5dFH2Mc4NttJQVew",
  "key15": "44YtxRJ2YQ5mU7iqsNHC74qWWR9ii7W3kVgP1ASkJF9fpTarA3QoMi2xuqoeCjfUeUpxGYunE7uWiEfz2U941kF5",
  "key16": "eaXMABqkHsqPRM9xfgUyg4pAWT1DBkGBq83SK2fLM6SFXUtYihFMSncckNqRrw6wUjvNPGQEQn81AUzPP4nGnee",
  "key17": "jLFk9qmXUJktosRMVUJ7bVQBqTeXvh176A2MmGGYthj95VsLeC7ADb1DwH5v3BJcVG3mfaoFgpbE6ftdinZDNhP",
  "key18": "2D4odez7bjNfBVBtsNxBAXPBt63BcdL5pcTJhuMAwNjoSWDE77oqko6K7d21a6epYcdfwh2DqNWkApA7TfFwnKFn",
  "key19": "dzNTgfKmEtZQdhnMpcASuw7TeMroJ1KpPTF7RY6jefPevL23aZN2BkEgs17Hyo4chrRza4qK2fgMY1KGeXB2Jr1",
  "key20": "2sSwjw6cFg1bggJH9VAXDnGLaFyduPDqgp4XHrUE5dLjehqUJMKyYcxjYow6ZL2TeHjY1qvm7NWMMmZje1Rwv2p5",
  "key21": "9q64Lqz8L9vZ8tgyF3fmrf73zuMcy5r5kVDgFoWUjtAWLHwa7wAZ9Q6997sn9tXy9Mq1koViAwTYBiNnmW8sYUp",
  "key22": "3mqWtYTCaa5g3DuVfJuuDcstHGZcXTSGUjF2TWV2bKror4ZYZTcVVuvvDuKKzmSCJJbMAFEHt3dKFRuekHeeCAt1",
  "key23": "4P3sYkHqMqM9SamoK1iz4ykdC6xuVBENCkWrJGRSAWQh5Shwr9BoEovANezePqctXaVoraDF58tojZy2QfPCrU7d",
  "key24": "45qWM1DVgcfSWsj11UpK5Rt2jHwH8CvEm5w6btXw81WF7ij8HcehSNuLBHPr1Ad3xRB5y1sMesx4u8JcGPixrQN6",
  "key25": "27xVVbjXGuoDrDRRb7Fns4Pnj93rUYhPMas3un7eBvi3c8DQR6GyPw7EEgA1gmrQFG5V6i9E3fbDfCVUAzVrHDvW",
  "key26": "2knh9xB15dQowqLraRhmnpMX7QF11sitszS57DHeXNRpbYyphTVGwcTfPdCu93Ti5HApHJ7N5CDZKqmkoAKQTFxw",
  "key27": "64rGCuZhgyxEHtQZdjEBVFzqQmDvsDzu5outx6L6YidyWJsHi9AAHn57CijpxUMUAZTSkms4bxonyZ4dMcBpMoHF",
  "key28": "2Y57W7uCNXKUHNr6kMzwQhAQm2Noi7QQGpm57Ss6msoZop9eR1gtPqACkmgqMzkpgXivWs1xC4tkhQWiCrCNosNc",
  "key29": "2kW5hQcH9rjduEN4PMgH33YhtWWH9TiiT7CfMbpMjqQGGQBPZhgU75waQBLCaof8nFsZ9m6EK8zn3UZL54xnfVW3",
  "key30": "25mnCBA1BU2RjPavexQP8ALnv2hXHNmMyPJvsrMLUva7ege2n7PbcTpZdd7owPe4wEejcLPVFvRhFS1F61iShQ6V",
  "key31": "2pU9nfGHven4Aa2r8LXXK7XPYcfVRip2YNi5i4zRduWQMiuhX9xP9sAani1n5TGR8P5iTfVMiTAb7QKtqZvsTWHJ",
  "key32": "cg3d44bb2dVJtcKULxZ6D7dLHVriiY2ecMk2ByAfxKt63168jSGxVoWsa4XZCsW56xd8ZaSZFweqJhadCvuHg2s"
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
