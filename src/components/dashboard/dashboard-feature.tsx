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
    "3Ccrnd9KFfTrdrPQNquEcDzgawMf8PmM22pt176ipYdViJu6yWQ6FXNEeJVn7k8VVT3ZnY9MhbAPC1UfMVa6QK75"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "ah2G87opGX1zAHQsCZNdD7vBVaHWeNj3NGfTKZ4JoXcpWTW8pCtT2kom86mEdUpqk12FZVitBUaK4cPFuUsNVAn",
  "key1": "tY8KiYY48vo2YRvt2ubdgfratVPuXN2QHtKdMzskAc5tPansoTk5g7ofLZR4i9CxfNo4KtasGerchEanTedezve",
  "key2": "4U6BPHgjwP8WDPVy9CzDc9Bkrf8a6vxbhySea3tWTFxtvEGbwGPi5gPKvkoZfVGnjRzkHFxdnkhYzNDkwb4ePub2",
  "key3": "25swDBNNFBQw37TjksvDim2AKA3CkqvVdZGDKhUNtPFM8KvNcrjK9yFqCofyQ9PRi1BgW7Gp3osxPvsSQk8mk1rT",
  "key4": "Sc4r1Ya9pUtK11axmcqcji7J5tXwYp2C7Rf8sVvbXHB6FCXFs7sQ98LW8jQxzSvPtRczgHzCunRXquD5ndycRbk",
  "key5": "3GQt2NsdZTjqcnASBg89h6DPg4jMTow7MR16qkvRz7iEDbK7tEA3JJwAKdcxwSGUqFT2gbv6RVEYGrq6Do6wrPGH",
  "key6": "4uTveCYYdQgRNSQLdJbyvg54ta7RFYY5ovWh9qHdPEBbMR7A1NuxjMLLqXp99xn7LTD2YBc1JD5Xzqmq83UFr4jG",
  "key7": "2oU6CS5z7qUD1EVMooJXuCWSmgJmkQLo3fMCWP7iWH3vJcFiSsYbnSH7ZkziQeS5gAKurrvUsbUZewQsT2dXsSaU",
  "key8": "4drSE1STmE7S1CWLmvRB6YBNgvrGHTxnuSSTfmbZ69FSdwESTS1YEM1Zm3ZMf2v8atyEu1aMRJhWrH6C2eo5tWv4",
  "key9": "566udoMzddvF7ckJA2APgxKgWtCoQ6z72By92tE6A2nESKhzRATDaobTRhf38iq7opb4VQwNVcBZP1cwEH5aAWFT",
  "key10": "tsYTvb5GNfV2usnRCXKpvbcVg13oKicMwH1MuSfJu7xzk3GSyFYHydYVfZNkMPYtJhZNrXXgpirfmLn1rT6Wv8A",
  "key11": "3xbdBPLKKLpQg8oCcmhVuwhWYzNXpkYA8EW8Qt7v7ZgMFekwcmS3jL9DnXyCvjr7p1Vj8qbLW4bf1jkmnEJHe79D",
  "key12": "46rRQUAyQPgpYhLhwak9fHmFX7DLJxQr3KKoQoxoQZzPNed8Cy7RoDnXDLDCobWjnAp4gQRUAG1L9ncbANXAJc8G",
  "key13": "cvzZTC2ti6ogQvq3DKX6w32cEX92ENMjRJKx68ZSyMswXfzkMTLNbBrYZRZ93pWbzyJrNQ7z2LBWrbzDZb1KjgL",
  "key14": "62nPk7dnAZTdPEj3VkuKsTEXhMCDY4DGGHqppeiwPceidBFk7britwEdZbRDbZMZbPTCV2agrDtCecQ8xz5JcHsn",
  "key15": "4X4jpdJiDUqu5XCuKBPcKtSadKRF89nmh6ru8T7KgA5gxqHeTbaodjj5YPDVacgzaCXBvKUNgnseSRTQc9Rhx7vy",
  "key16": "46jLgv5sQwXAsavvFLwfxkTmvjgVW3sqt7pBZZDaaFJG9Vr2QJd9dC5LGXtTNQeBbExXvVxD3VNJWFZ9J3bKk1SM",
  "key17": "28jNCzjKvpyoduapLx2rfVXgNUA8fhsBryGGK1srby2wWFSQyY3sXrbF9eSDK9NDHmBgZjSNfwdHtkC4Zs7T6xga",
  "key18": "3yFsaxE9FKpHjyU5XzwBMieDc6k2YpNnN1JNDSi4skig2L86RzTr2671ojnmb97bpw5sK875fBhDDNXs6NEDad9y",
  "key19": "3u1Zp9vXajvhaTNSguB5jbXASmEnHFzALuRouqTnrgoZkDmzRNFXTHqw1i5eA6AEkPeyivNVL3bWwNbaCUtTM1DK",
  "key20": "3kYiokRaQosKkm3Bu3kpi8LAtWk1WmzToqR1uaRaSz2CADNiHkvB8eKC8LF4F9C3DSR2eRQJSnx1v65M1LMr5ykj",
  "key21": "3aKsnLXf7EFpjGU5H14F4D7HKZCLUE6HLeU9buz6xJeEjD1ghroDu1EmK8wk74hDubP2i6uWVdAAoqe326U1KKLS",
  "key22": "2FfPYbnNzmjSf7prQZWarmiqM7hZvfECZf6butuVcViYD9EzrE9eK9QJxtquzsGrDcCgigkxPrz4yL82Q4nyAWoR",
  "key23": "8Gbj3xWCNAUHHQf8GX2wVjz5YMooqDXypPFTrZBrvXPC8CBHJeM4vAGAV76nrF5yKdXsSqby4Vsq2jNwPUdnxSJ",
  "key24": "2zZ8f9cZNrpJPbEcQP9bBaHWpSqgk6YaRrNHg1gi9ovWNuue7ZJm8Q7nDEpvhrhagEdoBdBH2UWj5JzNEftWQXGQ",
  "key25": "42XDpk2KJeXyQD64x8QnPjAmjwjq4f9vzBcfmZdDLLDxJuc7f68Vs6N62QFpMUDY8pJv72oYknf8WeiGSVhAube1",
  "key26": "4boxvbNewiHFvUzarakgxLUJdxrZKy45c7FdbgVXnYSCErW1xVpcRdnXdKDjo7VAkCxLTJHh3qLNKPSmR2U9gsXW"
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
