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
    "4SsnT78ZjGboWCH2tuckQtC95RVsJ5CB2ynPwchxoJuoc85LGd81emiFmRrVfLmvgk6VsYmPztrVJH1DgoF6bGQq"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "517cNQ5kZUG9Hei32AZpEPcRNgjfufXPusLXcMuAeP9zU8iofYKgpgc6oyPjBWWKihBPH8sr9MjG7V1KqP2pQZVG",
  "key1": "5y5ZkymxHTRBN6icw4JwswY8KYRNbDcoPe4P6W1XYVKGX3QC2JLtjooz26xMaG4aX3pP3M5Zj3wVgruA3HSgF1k",
  "key2": "qPFHz1xFaSCeJC83DCJ5L4Qn5UXLiUQeBuQ81zg3EXJXEK693eLP2qfi3PzMXkgaeqDGrhZJd1MrHjssj3ouu2m",
  "key3": "3QDDkZ1rLDx2Xu1UCB232dkyNg8gf8aa8yUwe37HcnsTFntHCujPBX5P84wZLrAGKFgUJxi9c8RxvRAumB7p8g3K",
  "key4": "5MPVp6BDJb2DyBkDyhBCDF4eUi7croJcg4BK7fQWsWGoeD7QVfh3qdYsT3i7Yqe18WiNidMgqFNRgsLZFeepFDYd",
  "key5": "2RVwUZj5dK8JVSpf3GEpuEpf1eBhwbEmNNDwyqJ8hE3wPvgNGPrdbkVfnZj9RbwxJtVNXvntPME28LupL1KQtRKE",
  "key6": "2bzm9QViRuJwwB2A39UiogPeeaRQLj7YaxnZrXw8qgDtWoid3hg367J5bjmy5LegwczzZYkLP6MPoiNCo6grk3z6",
  "key7": "T2rjJMxTsJGmzvqzza3NSthLogUf7jAC75dceGjw8bkDvoZA3WnzsyBKsNb25zLWbGwJJfyD9gLuFGrH3FXWTVZ",
  "key8": "3JLWCbkFtkrp9FmzNBvW4SfdcRJ1rPBCQYjDtFVvtjtHSNBKRALDZx717fv9fhLjkeSXJb8kV88CTbiYKtfbgudV",
  "key9": "5MW5UhbDrZLpisM4niasPwDYToY2AZEdrCT7zM7dhXQTz8A7xkYTyMBtJjjsDY2LSgmt5EQ6exxb8eNqoZjsPAny",
  "key10": "5BXTTicjBZA1tJMnuMCcu9hqCeqTpQ8qqEEdhNMrb4wj7646mmRjz3PCLg4fjcgcthR3xdhfU2cupHmnij2561sD",
  "key11": "2VkoP5c5uzB3mNQb3ArSkjFaGKGsXGwscatyh8JmybH8gWDJchWv8NUnqksMMi7UxdCxFTyjdX6G6jDJAo81T1Wr",
  "key12": "34p9jFoVhW8zYqjvsqPEB6ANHRgd6GL5wivoRpuffH9B5wrM3i3KVsvQGPYC8RJHbCmZ3cdRUFoisvZSTzT5jzsV",
  "key13": "44TbP3V434ivhdRav5N7aGUUHCJjoEnM11ajkgVWw2bWt8VxQS8umfBB6L7EYLWhMqqm6URD1EANbth96ZHRLx7w",
  "key14": "4Ei9g3xjVdPiSxjgPKmuJZ62i3WLYDxZEATmPQwev61Hy2hW7ZKzVptkJpavzwF5jw47dJbAnbw9YWbeFsXCMuwi",
  "key15": "4jxtS58zrkwYjswJXARVZTgsXY6gpwZ4VCPyyXRRErecPvBTKaXJaUT9oiByxfgSzbdpC9t2aiU2AFLR7gDDFNT6",
  "key16": "qjJXjUMiFFS6WiLkJM8bMw3DCuwPX1N9LEeqyWrzPjknLzzSDLMiTTHyvRgnSu7LZxMwVrFbbu81T4H5d1RxiP5",
  "key17": "2S6b8HAzwGXjzipqkv6oJWhdJKsbWUdDsWcce9SGSeoAXBdCBF573Jb5W7zuyv1tUsowr86eygFSYVL2EcbiLxXG",
  "key18": "5dsA2ukmvffB8AbRfcJ3QdEDXfFYD2qHSMZrAkSGhigUbvbudZHHZke4gYrjidhofnQLu57LjKijiD9VGHW3sKxB",
  "key19": "gYYmrtsz6ruJ9fnxavZFu5dpPYiS3Quwg6Bz77UPZ8hwnFxHy77LRhmQNwUW4gDgWGUzGoCcSEVmam85mWQxo3V",
  "key20": "v2ySSeQeDkiq8oCgK7ziFmHFEWPxv2kE1YuSVcSmkGJp91TvMP6CzaD1KDgyXQtp2CyYq3oonjjDHAyFd77ch6j",
  "key21": "42KRGJh1TU3D5T1ZKvzFG6vNDSvDPnNKujMC2WxoVq2pH28hVkKThpuzBAWY5ZewUzqfKXPN8DN18kVFbFeZKV4b",
  "key22": "4LpyxjiRJpjW7pL9CLRfmRqb9Ho9aW6pzAWyz4wnRUVprNK2GVgHq4d2jyDsN6oQtyDzbBhvrWodzUV6Ejb6iUU",
  "key23": "3WwJBQLXyL1QfHKj5VEn2DwEEBsHuq6tyVcZtxicjN1R2wLQwFvR5yJpFSchwRJLa2v6HUs9ZVvbCeX6eED2hTwL",
  "key24": "3HrSJcuGTBFuskNyM7BHRZEGzJBL5GkwX7dLPn9SHMxJ7aM6HV6Eauwsz9Xo5Y1hgooKbg4TPvg6Xw957tWTZSK5",
  "key25": "2JhscjFRGUtffR78DFFqCuJ4xPixxEak4pDP89uksvkKN3beAheCfY1DjMJ7eQAbPu3m1kLS6vEXgEJVoAd87Rkt",
  "key26": "3dBwzqvmLwPhsuzixgwdddGftCTBPe2vSFfR2sXJFpRxkRK2BQSrKZihmeTXER1rtxXWkr1tff7GC2kZanMnRtfw",
  "key27": "ZNomQhTXhGU8qry8MwivGGL1qVP6v7ZYD7BnmDAieYi7LW73K4fHkic9ianTUHV38vzdtrUMfhuB2v5wtfWGJbb",
  "key28": "52b2y5tYVm77ucxhpfmYAGcxiqeJ8LJ9adVzZBtkRZXzA3aDPuZH3kezmtGFfxDFXmL9K68pAnU3mu7bzo8nZ3xR",
  "key29": "3BVHdTjVi7L7DGsAcQggZsnF7krM5uV28fnnt7x1emvPLVARVuZbvyFNqBc4hge3a1VqvnZUS7JAe2ahkj9UkNKx"
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
