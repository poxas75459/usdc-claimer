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
    "5xpSHqHTHbkjjjpb5t2Ypk7UhMovwyiNSqdGyHkcnd6XPKhXG71VS1LawCzbzvcyLAEo4NY2NgxMW1cL6vv9h62T"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "fRCGXeCaXJsShoJG8wgH5VC2K57Nbbp5Q4PRsdRjM3mT17oEfbXJDyDjAhRV8WUEBQ794Bwqno2SEPcdZFAdEHY",
  "key1": "21PUKAsbKQ3CJRLHjBzNTGByTxN1prUBPsmASiZj2WS4h66m9jjCvdAVSAD8Zki5DjMox3qjWVqSeAJRKWtXNRAj",
  "key2": "53aSQN2qVphJ2mDFVrHMk6UkJ4TFLuLNRWjwG1JKcwE5q7KWD8ogt5bQoHkoFregBhppiHdGqibo6ZH5rBrSzrnb",
  "key3": "5YUQTuAt6cfKutwCaHgjT54Yae4ToQ6xRqwjMVTqrNUpKSPhEQQtasdA4zRHwTJr5uDFiALVfjnga1qVdkEbsck2",
  "key4": "QPsNstnARmWmpoQJ9KdRjVfgP4TCzUEELCgtS411LbD6YZ9xHwtqnLbQvsDfLwehwCtc7AW4fsdwZ3gJ17VcBaV",
  "key5": "LxLzzZDGXuotsr5P5DJQPvjAFcg3UiZe8fvkKAhmkVjfU8DWpqdc1mf7z5GSp8ZgioP9bpn6n3UjN7cwYc3Qkop",
  "key6": "38JsTFzkibnu2V4kVGyB4nJNAw17XV2WPMmqSS7ReCMS6bMMtpNNQuWuCupihngPpoNbirSHNWK8Aom89s3Wqrzn",
  "key7": "4oPnYgCmPgG1R86rSjBBx7cuaPVQJWwEndCRMDeC9WgHnzHB1h5gcwnQyehegnwVbxCJ8pwvizrrWMQhZmEuyceC",
  "key8": "4cjgNYdhnnBB5YmZgLwAkFmA6uBYf2bXongn8Xw5cwiio9DfAcZ7iajwJWYx9YmPt7aFGPpGVGuuUqmSW9KNTp1",
  "key9": "3rA16ZYtw78snB9WMABSZYZGuHGpGRrMtdaym6N13dXEmoYgkBpmd4XvwgD4xcZDy5tQcNJk1Q39scrPe8P8txn4",
  "key10": "TTynEvEyrtQMFnEhQFks3SHL9z89cALNTHMtpK8bRrRHyhcswCFQsv8kDioZTeejx9CLzZWH6EDzQk4fTKutw7G",
  "key11": "t6FQtDicKXU7geaNFhJNgKFPPxgFov6fKh7LhmAsPjML5hJrpHYoh2g6GWRP8EtFjrUjmzz2fn5w6CvYXaEMcwM",
  "key12": "53eX6RuQS1kaui4af9jhWRBEsUeDZkzvz4KUmHcrPGtF9DQh1NkHJyV3JY3XGVfhJ3NtV1g5kkfAPs5HP82xNu4G",
  "key13": "3vavCxgPCtSzvzRjqc9f2TcsZ7YkVBfjA7oXfGH7RTQMYWLQd6AeSk96LzzqfF48RLcvPtbs1i9AmV2NEhGokqLg",
  "key14": "3YS9EaMhjMAaaZdTMGyYeFagTbtWcr3T8NfKB3TjgoBNejuiwc4YMQZnMJRHJXZeeRNgzGNm7qa8bK852wFapVG5",
  "key15": "2yQGmXtpojVLszHreWy9fb4sbZwwN21H3hBmUKUCqZPdn7eDah7ym8vxwdLisKqwjNHTFKPYFHxG5hbEkPa8jHE8",
  "key16": "3LLxJZf3xXyXaNTVkrC5Zucoz9PrHyg82AydckTd3KB2RrMZrN4vyPNa1Z2DWY5Rboz4npvq1xrAj6fD4beCrxy",
  "key17": "5knbByuPoXmSBGZRnkzpc7jumQQHV1XSRr2EThbEFCQvGcvwUNEMpZu59m98QxM5aFL3Ef2Ez21tJBw4sWP4BfSb",
  "key18": "SbApqWKZVwXAapfcoDmrRbLVyuKLuPPdSx5VH691UhuHcAnRBv7jBpfE6g2uVdjHYrgXcjDVpLYppupfX8CW7kY",
  "key19": "3cv3XwNAjGbqcey5cSiAD6YbJFXgfGhy2CsGsyXbo1DH1xgS8jwe8fHAULJUd51ywXKRxPH5GfCPCfYWhugjRuaH",
  "key20": "4A828U5HQMvX7JseXboTz78jZkNbHvXELwzwr9sr8xzmR7vLWgsG9VPChVtquccHJTTcNKPHa9D7MWQMdoTGJC2P",
  "key21": "MDzBfcFVFRk8HvXyH7EPWS7Dwbcmxu5HGETDgLJWFWfnWGvZMt8Fwdpg7YQsZfLjJHUMCQrj2XeAHveQTWqo1wJ",
  "key22": "4eVAKXekbamCKnSn3u4U4rtz2xVsgJB9uvmVdULxZTHgFVCWBQy8g9yV7ENmfGRHSgsY5ZjxHQtNwTofLN5KYq51",
  "key23": "4ncZqKzvXKfSu6cj9Hna9nH5mzVYXgt4RnCaKMQeBMYwfwpfja3SbFBZ7qabWJ6wjSVzgpzHPuVzx6ggouJYn4aL",
  "key24": "3GyfspAYE3Aa4JBx9LzQMy3rufR7DsKoKrGC9o2drsDGMRHP4YqQUpVYu26b5PrdybqdfDV5C711RAFc36iHU4Ab",
  "key25": "kpgxKoJHXRgGNPuhQ7asvJJjESp6mdBGw82tRwT3BMAqAZf6rweosiyLEerLp1Nn5fUjFC4qV4vug95V5iWWapy",
  "key26": "5uwg8ztYyqH9Gy4ZwH3MAwoaW1HBGZjkBVJH1dZkio4W7eE4Vc9U2sC612Nr4vRf2qeRgDJ9xZtKDPvAj2udZp2C",
  "key27": "5ePiicuRJh1iBMem8aJAFNSwNLfkQRWFuCe2FmyyVZ1f2PxEZjLbSvPNc8PiVLchP8LXmbXV9bcPZmcQbdFaauQm",
  "key28": "3MPvLTvEH51gC5cJkLxMBz3CKRFt5pXZZonon6haZneeMGiRMwYt6gfer1R8RkNMrjQ6sikpCdkeP8SFxiLDP9uJ",
  "key29": "32C1xETZvNZjiAxhHVdSeWsay9QdyeUUoyRkpYhUjpEUEwsYmajvwD6HcStA82viut7X3Lpm1PNCnv6Uc5ntvSkr",
  "key30": "38o4haaMacGYC7g36UUX7qijXjbgZuNKQJswR81GgqmsdSZswfsvGcBcxA5LZwFiKYPbf6WYzT91abBtARioAh9v",
  "key31": "HjTWugV1gZtnxLhVRB4R8Kk1XPKuRwY2CDPwDjXSrKm9QRVBaTQBGyUHM9KGLM2KqHYU3jnvx7fdLwr7SPWEzUm",
  "key32": "326NaQLvHCzd17RnGCDZ2Pv11U96YsDmeaX1G32ytBC9Y4eQhmJDeVeNzehQbpcAp5akbxzTs5QoVmFX8GVMfgeu"
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
