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
    "5cpt23fhh4pdKL6mKqd7bnt1dGsXQdGpQpJNYhWj9PEQsMv4LcQkkxFV7beR2LAeQZEnquJpPg6NFUMDGCnZuuM2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3czM7YrnTpMcG8Pk1uf7kWvvWA8K3JGVfhMUKETBNAgomqQQxaXseVoesYjSsahwhRWCxnPs3Q4t8j2tFnZVLn6E",
  "key1": "5VvwhpSwpk9ph6RKrvrnovnYVCRXBhaYGMFiqWqLdPhtjZ4RrwTLWPwGZfVrDR449xwCgPeu1NG48Ebz2eqCDAQJ",
  "key2": "2vr5G6WURVGZyYaiQrjvCP1oTLoF7PL1DifdgSN6qdVTjfVj55n9JF2KyikPYDuiXPSpQHLtGNCCJEmBsP1GWKDV",
  "key3": "3oCjo5LeU5UeUCCsrCjZy5ovqBM9x3xvB1cS92Ezk4WQmeVZhMaToy146YRD3D6FQDq5CvU86CNezZHLoVWe5zz4",
  "key4": "26PM5CqZ9SGhgvTxpe7qSgG5wAMjeSuRZESRhdu3Sf24MvQRZtqQArQctwCZ8vb4XhRyb2jNYWenv17DcZG8bGgy",
  "key5": "5RJGGBk329juJfXqa1VKAVgZERq82n6HsBvgC38q8UVf7K8FFJxuAeTBAeyf56pDJyTjtAL4nf8HCje7iNjnaNmw",
  "key6": "EBkgt7A2H2xvsyV5DrvU9S25ECTVEaK7DhP5skVijj92pAXyPfjMBSC2VbJQMiKPg3dQc6JvxWbLB6iAer7yRMK",
  "key7": "4BLsYQkLkSVWgvBkwuyTUgSBnofTy3buH2pqHrwfC8xDNkAkFX6yLrFpCrfME6PETdpCkqu3KkbBLcdoMNSnpQXy",
  "key8": "2x4qi4xW3RutksfM6NqdeckBX7xDPJfpnUYouxmTxtxFj5SEBWP8swpb9QMF79kECED4J2aA6sux53A4wzy8XX1G",
  "key9": "5jvfgYwttQHGu6DtSpP948V8YomBEvPSjT39NDh9Qtd3D12d1BVm3MJSDah5otozKTGHPA7Z1uNwnKUF1JbEjTtk",
  "key10": "Be1AEmSV9k4FNbmTDpnSNLeQMko9j5JDnx3TcqcyXt1jBkWnEHPt8ToLV1KxuEYqhszsXceRZ7dtnALv9YxhdGA",
  "key11": "5wLWXG7SFd1XaqC6jP66CJhvbTZBjkfjm24JBKWWHHGwfi2w1R8VJJhNBzXxcxVhrDYxUeMeViUibyWs727DamSw",
  "key12": "4F3f7kL86CdGbbHGienkwyY11pCK18dCAdrS27kJEG2FshTghr3qYWi7Pf8XFHff5ofXLSJtdLVpcSQWbHSNyApn",
  "key13": "4PQ3p8Eqfnc1e1mbBargKALtJEN3YkvNALov2cqUkAb6kcfrYZp9D3MnwuP86KVCxvKCUCQmLL6UUcvyckZyEHJG",
  "key14": "3zmCb1mJJEEDmSM4Z2KYuZBj8jURWYqn9ah7YcEL9bQoYqbg711eSeqBtz1UAobghZfzmG3ZHmsAnVcfuNkTjydz",
  "key15": "4nLw9eJbY76dikRWL3W4SR3HEcuywmxVaNoujzK3PsmSP1LifwzwF7N3pS89Ys8HjHv78ULLn8cehR8eN29Zn8Ya",
  "key16": "5TvRAoph8cKBbrpx5JwuqypQx8pcmxBxffeFPDcKeB7v5nh1Zx9h95pVKqkAKntn5VDz1tDkyS5fbrbxXPNidR4A",
  "key17": "5wZzPdpfEqrfDTpgCSC45qWYNgoa1fBxgrr11Vnud1onjJAreMj6R35D3MaN72QQk9zN9zVVxijLhn9dmPMvdHry",
  "key18": "XPs9FfZvhMrTZU7sdUJRsEuMrbBz9B6xs3qJTBNyaVQYko6wtrMrPHwviSufLCiL18YuMiAvhzcEGfifkyDZ5b1",
  "key19": "5naPF6j8iUuUiTHXSjuk67JyenkSmKHsaKvHVu83P1b2jiraX8JxjywgfghiQDnbSZcgq6LobzdvwsdDP94msiXP",
  "key20": "2m7gijFVX6VGPP1oyEsQVwUpU8bxABr6poXdGTHXxZqY8vvs7xPeJJshg34Z1Z7jr1g1s3E8mQTwFXxtZS2VmAkS",
  "key21": "2m8MMR6jVZD3Qm4waws36G9d3THkaEKmp6dXGqsXb5LgkEJzLNCXQTcVFVyTFNuS2dGjwpwKBjZA4WzZcUyAmQLR",
  "key22": "2dmf843KwjWqTyDoPuyPqBX6XU7QbZYCbLLJn1jzdZjbRTD9aNiPFi3v4Di8uanY2k5Tp5k6ofx2rGtNdd2iR8Sa",
  "key23": "52HJTLBxFJZkatTdgNwa1Bmr8W3UdZDczBYwe2ubuf9ruUBRZVCTJsRT4VYezxns3em4bVzoQnZtLZNQZ1MC8USk",
  "key24": "4GB8J3JSu44Ay8QxpdWdEZTmN9BCETF93Fd93HdvkDHrircqo5RaGzFYVmKjv97Eu76h7yDEvC3ePKAUZYJ4xLZJ",
  "key25": "5hFpo7diH3MBQVbuEqyxhPfY2z8eaNbR7WhchftBxBdjF2HCaaytXQPuNKcUPitTsxMs4i3roQ1pDpiBmzGu6scE",
  "key26": "EzA6n8FihkASPkKHMipqyTKwHPogZcd3ubGkbju12qqo7MmxGfJtHK5PrJ3LRWZa6CMs8b3BtH7kDJk2zfNkt1x",
  "key27": "3zyggkbtm2Rps6JwxtYcy3H2GTFp8UyT3GHmmQffFtgxiKeqwqzLR3QVtgyLHzfxyvayHz7wgj9yZWhbUjUgW8rv",
  "key28": "58MVhyShpnGqLFkD4jsFQdjPfvz8eMFogswN2fwitESUwzQGuwdDJD4SBzHPaPtF2XG4Wof4K8MBbB5fEuCzax1J",
  "key29": "31vLbyG4f2a5qMiQfR2RKVdsqLRrwvw9VNydVTdCxvnk9tUyWfwtgAU5oK5B5qEkBZLEFemz9YcRxWXM2KuQ6APS",
  "key30": "b4Codv7JzY1q9sbn1ssdKLBM64BRFVNkPt8PWMGhGdFrEJ4XqRymoTR1jBFaeV31ofdENykkTDAksymoq7GQMuw",
  "key31": "5buCvax4N3sJueDGE72JKBzZB48WDJqD2buZz7HFKaZJx36o91YV6oaSosZ8Gaiq9WBY6Go71rbr61bYnvzkSQ9X",
  "key32": "xzeer6BLHYnn1R3ma8aJCNKQdkNR54G6mt8SfPGQ6UB73zgG6oJ48QLktz86UB4y4Do5mVhotMnzkR9HtrRwUs2"
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
