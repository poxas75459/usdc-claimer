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
    "5Gi3jEc4evK2T9eQLcqWJHod89MoN5enxc1pPZGvUd7SRWzWo2A5ptXcRvxbwJw863ZWiUdUdyU6C1ALyr5U6pyk"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3nwCMLJFja2UfpwmckMmYViENdEKUtwFjJzzqdENdpNXLrwysXF7uKY4VLwPmYw8P5Kp7D3vmGGFQ2K7TwBaJfPN",
  "key1": "5HgVyxTJqekxxasYuJiZJ48uVmZFn5wd3NMfbDPGK8zHAf5kxTTahhXhaT1FXkkaFRrQea2WCjDPcNEfqNYNVkXL",
  "key2": "U3b9wUr635mbaajW71zMueUC9JxeynKzNNB8ycehRFaSv2iC54a45qZzUpyQiW8GKrppWpRjf3FpSHoG19RLiyT",
  "key3": "urWDM9kmS9tPJGKf41R7vptzCSunXfH97se9w8vCdrNDoqjkVEz1q3vnjfe9d77QHt6W5wkXYb7uvKUYKcf9ytB",
  "key4": "5NFS5GJ6Tan25SxdL2NnNAmsya6NZWRJaR7e9yLU2WcYb6EA3VeE5GYyfg2efdyQj9FtAdXeZemSLStvq9X86QqY",
  "key5": "5fC9BH3NN1yeqBGNuprJUfxMdQsg49LWpgQe6eGmmi93BcLJrifP5u6VaMTtAKwNRAWHAos2uCwK91qrYUgvxT1t",
  "key6": "48VhL8szRBgscKUcVUMRJcBAJDRL6YkUuq8FYSsfh977VpEDnBTS1BaMRwbgaBLFN3buh8MjmKLACiKbWQqBTP6i",
  "key7": "2uGMSwVCo17rY9xHrFWaf81cdEAZPPY3Jw1FC3Pga1Sg2JX8G1jNLKrqFBxYMzXt7eHeWY9AXqaisgBEqRjkUFdA",
  "key8": "2PjcnzVpP76oYDnfc6Dm6vL9MKm5Lpce2TNkLWRX2wt4yqFvzGGPQftSpjTn9cYa2L6cVkvsZ5PrNpH24YVZ8RyM",
  "key9": "CyqVvmD25F7dC1zXgkyLKmSwQwAtWJRtaJdPNrUDjBh2L8cfHFTmB4Muu34TpomE8dtCKa7XMWRCEcDuACdEgA2",
  "key10": "49oKRpZJaRfwaHcvYAf3Bc6GMvCGRVfgV6915WttW8PVH5HiDKs9jdT3AbMiA8hSRytsrrf4UX8t65p8HbSuDWTY",
  "key11": "3eH2eABf1L3VNNyJBCRozTcCYNoUwijapB8UBoqQA5K72KbLbnNdDW1GdgSiAgZ9MS6Q61mEbfUFuBrFXKQWmExn",
  "key12": "bxq82b1YQ2Vi9885MJBghqMFDCj6sbf8xUBL7rnBKMKoSA1XU7pk3gHFqbKYwoFa9UqBzau9qhEevCKSmZPjtvT",
  "key13": "2apP6PLHJC2Z2fkwLxEeKkuazYSzwYbrUiYoWqpeA3hxw477apjPsKJhgm8w4VHNmW24HKgjokTMuzGW4fViAKmq",
  "key14": "2jxh6kxAnYXYcc5deVTaD6fBJ2kvZrAydSHBPDw6Dbi53m57b5LnY3gbRUTs99FxXtJGnxupwMhQWXUKxjd7gEMP",
  "key15": "5Vv8qbNPCkqTktLTNc9nm8y2S8Jdmc6GTEGfa3ZjzzLQjdNW4RH1gNbRaLgpSRnnMU4fWfxdyXfirKDQZwxKKEg2",
  "key16": "3yzuJFKyVYTSYgrXbRmK7YGfKXLZL3RRtsXgPk13Hr7wdmPty54QeXp928bbHanQAHj4BL7qaCC9ARGmq5djyb4H",
  "key17": "3525XDqSwvyT4CD8BknJ7mDXitkCByChjNzFaqNW9DnPVWuK21R3jaSDFbk3EMRj1pg3ZKT46U7uqRRcbwHv7qjY",
  "key18": "5xBiWyxfRwTd7KByLgs2uMthKajYEHi3hegioo2LhCM7sVtDvjgNLHiWvM9462GLKuYxRpGfU67Qc9tma8ECHumq",
  "key19": "5oG98XyrPGaULW3DG5d81XdVDWM42GkGjQeG5wANJyhVvD2AZXYn1g1BAtPrj2XN5q6oWGJVuSdyAwHFzzaqd5rD",
  "key20": "2UMYmMwmbVyqUdqr78355wNAHYQRkiGPTDjks1pnFFZVYhFXuMrx85hqKeeFRa219YuBQCLwJBCdr7X9iwp53xMd",
  "key21": "49W5U9VaSuHfeBEBVQdRXPG5n8nsi7gX3nNoCFkNJMjE71KMisToidJsQxRzyBYK2Rt9uUEFHETtiznmHnUfE8x8",
  "key22": "5MfvHJT9sjF3LyXSQjqdi5sKXwRpDr3eKm5KYV5NswGXbV8ni7ZMjo2XSJfGZj89oBds6WMdU6m4Chj6DZeoVSaj",
  "key23": "o274m1DDLKeEZ5cysJg2qgB4aHDnLZsXdByDj8JAnyv8aPP41zzTu3DyGuJUdXhMpL3pu1ntXjDwYKDe9LuUXEW",
  "key24": "2m5GxWZ7783ozPxE4EoLZMkvEGQ1hxxMiqaQRjGNKxcFczZLntiPQpkKrWwx3qHCN7ZD7Cvx5vMGgYjFUZGhLVeu",
  "key25": "4dAcyoyTxGeSbm2YhQCvekgPXBFKYp1x9p1KWagbpeHqULPqYiiRLPYU1Kmo9aDvugeX6gUR1BULEoFxGr1M4pei",
  "key26": "4eMUeMfXA87Y9qNhG3mbucq9yk9z7W1tX7y9RcEArukBBtz3iyAjo613yndYBiEebWdkLai5F64UqEyri6fiExBP",
  "key27": "SzFZW1vEtDxYanmoDmJnfth4vWstEtXAysxPyqRXab87x2Mg9mEnS6dsYu2HJ2mEapguSvjoCBH8JCF4DBWcbPS",
  "key28": "5kKesaCSLsNJyJaeK4P91umXSMpkkjSiWJKMnQqfmgzaYFvjcXTJKo9DM6BkxLRNwVtscJH2cmX5Tp3mu68KmfpS",
  "key29": "4G5P9qQCYCV6V8q7JbttibczTQcyu1xHqcweG2ieib2KrvED8oJqrT9jFvjwApgWh9pZbVPoxyiw56fzoxM2QoY1",
  "key30": "Bahehfs5BJymEaqKyVb83FLpZ7ryZBA4bwB2wtMV7WzzcaUQdg6bx3G41xLo5wXJd35ejLEQBGT9S2BFeK9mxcT",
  "key31": "4NzJpCn4EDrEB9xKAdrCq3y6bzjNCqgGHksiCcUtB38qkwZMwX3JN5j986hfCrzEj7ttPY9XyYSnk8yyWSb4hBL",
  "key32": "3D5o8DVUwFK7RmstBs8rmYaHrPd8kK8bmnV2A1GWDRgHUKTy3GDMSSXmo9wpKcpWhCWVTyPmEqvWqM1gKGGFEe7K",
  "key33": "37UNFUhKX71qWqdWcfxS5kQejJk5u82DE5u5SQ2Jwskd9n5TqFZpHtUjY7nPXNg4ucUiFNpGxVPndEaDazEkNgUr",
  "key34": "57ewuALZP5TxFgRQZPhXqq1TKYT5FbqPZ45hGc7LsdmgiDTCRhMsNjL8kdTK8XSNH5acRA25jbwBSCs2866PnNkZ",
  "key35": "qeNhuQxrDUNmhZ5AXtA8QepLcRKPeuaFc2UWdHauFPjz3zsykuafzpLRTw4E6yLmXiGfxaQiZwAsci2th5LiMTg",
  "key36": "2cYdBTDhwSJ873AMVzm3hWzxcB1sZ1aJE1UK9aeAi37U3v8FwCnvyJ1jCUzdgujMAfPW9ESouEBMHJdz6jJHrQi9",
  "key37": "4goUsgUzBrSqQth1ipwjjYRNgDmAUKDB9ZJHKrCUR9Du2Bp4ujtcKo4gchYwjEiKk4HRCoZZcaRTeAGGYjXdWQUp",
  "key38": "CMpQeZAuVPh3gDaionJXf8Xj1xacTr2qHjEYBjYQWACKY4RcrFRNKYCm8mn6QMUfJJm3r8HguRvwMRRcvRtxeA8",
  "key39": "65w5jNkrxhxFQqzQQLy8R9HPyMp5T3y5TQ6wRsL5qtcT3nTtiRkGJCMffQ6y634f38J4phLvZddSP4cHMrobowXA"
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
