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
    "5FGdVtEZMLjkU9KLhxmeTEAjoq43YkVCniEwrHDXNQAucviB9P37NrSNW9Uz54zqmfjtNGgJaEdfY1DY4F2feQg8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "5tzghx89NTVyiJ1gvhAb2GaUGuviPeZYApxqnCMTa9K8GkMbXgeGWK4B2nnizRENtGj44JVCureja7piFWukb4g2",
  "key1": "5FKoG1gMRKpkvzYwtNmnCABkjAuc2qWyPYNWxQCXE8Zp8nfnMYouc81TKx63htWf7phK7jj3FtWfHpfGtnWvYW4J",
  "key2": "oF1vgPmPPHv6RNbY9r36umi2yvgCEdrL9JD7FfxdPgiD6FNCRBYHPqV4iiPLqoup122WXJgeE9sThutNzztPUd4",
  "key3": "5xAezFEj3HVoHapYVwRzQ9XgDGutyE9zcuDYg3EqPMKZHqkFvAuLiBbxQWH4MJz5ULD4SYmUMuNyhK64y4pNEnFS",
  "key4": "3zsJYXFFTDP7Jnr6TttdZPVeghfmPyknSDNmRnmccEJGdGwJCZkrKgPs613PxddrSEPCsHTfMDajTnKtvkZLLZHi",
  "key5": "2B2n7EWtzqSjCR6e1Tuu2th1HVDqHuKCfSvzYDYrkGRivD58i22LYkof2BPPCH5TdqFVQMCGPTxD8dcQV6pbhN59",
  "key6": "NWEHgV5e1BTn5qyPx1vUL7iByTUunvNUZA4Sa8d5Ko4mDUnQDPAN8ieV1nBk2aybUo67odTPGFpLEvbeUMW3Hdz",
  "key7": "NhGUMiceFtozsuVikZh9xnqsCWMJsPWnMKjrDq6J36Ba3yCBuhkZnTmHEBHoKnrW8AfauQgqiE5R2S3GnxXX9Dz",
  "key8": "2YizD1fRcMK4dBndKTc7so4TrU5mss5sM6v8NrgphYKYHWewa4FQaFnYt6RL7LTjDyjAjdEcWcKAsPFD7hfhKRa3",
  "key9": "55BpbkkUgdHGDvfAybnTPaMEkpA5MHc7xBJ9zhvaKagGqanqJnbtjnCzGx5c5Hcj43rBBjTeYALTXrd9toPPKRas",
  "key10": "5BHTFjsav9vzNCRfRaH6rk5o32R4jd78YhtCE6ckH7hkqLFRFE3kMTrwhhGMKS57isTgx4Tofx8NTubcm3aPqS9Q",
  "key11": "3fDTN3oio9C88oe96sr5RQFf6Gceu5JgpNZ6wiLoU2MW4LpMKNUvHxpyCGyb29heDpBW5y5cuzzZFAsdnLQuo5TU",
  "key12": "5YPj3HpivXfcBLwJcm5jaXUk2UCsNifZmiTjkWMtMbnDgXuTzQXjWUn4oxQ7kh8S2JAWKtxv1NvjhbTGxwzq7oQK",
  "key13": "5pD1Zr6Gv9rCkmpNNBZW66g7uEguU3ncdiQZhKgAmNPZVWRuM4iVZyUXfdKW7mqURi5bRsWUe3jTgHjXUFdjpVTQ",
  "key14": "2cghFVRtRm5kV2cyVRQDhMC5BKUJc1GDbBSkDZEKK9zb9VMebWSYtfiT7gm9BkeXNcbSKLGPdtgCvXmutv1ZyLWA",
  "key15": "4jt3iAwgx9iBVtcp6hGDt7BUBz5ySGVkB8smuw9TZgCqppQtoLoF8GNVqpchnERxUkbJStVisdpNjjxaWB6Btfy7",
  "key16": "62eV1ZQXNFBSoZTjZUGd264xv6dv1HdamZxGnRhxvaDQ6by3Z4uA6JaTn4p7YiQzzCLG5E3MAWmFMNzeg43bm5d1",
  "key17": "5tBd6N3aZZpTqG2NosCaWJGX6kCN1HEgCH53F9LuvT95Y6fec4demsnA8yHGHCNQuiWC36fTdL18y38fpu2tPRQY",
  "key18": "1gqcb9tE3LTofoxhhrELARW8xHCqELph4ABZ6DxPXgmNUvnp3Jy7zeT3LjhcduohLsdDoEJKt8UKYU5VgS9oq5w",
  "key19": "48bFgJZGg393c1MdreMWSgeDAfRiZHqLZG5EBY7rtykzFLbv7mWzTYeMh7LF6agzGmtrvr5R9FfVthhCUU2mkBK8",
  "key20": "2CcBBiaBYypc9UCy2v2MchP8KjNSucizVWx3KKEmaXBByoQ8x5tUfFSV4vyPdGajjkgjovuRX1vKnkkQo2vAoq7o",
  "key21": "2FQSRwXnAsgjQz83r3rezcrwhXeYMDV5bkDNsLZ1Tn6DGPYAE7QYNYaXWJfT96SEfDB1Db5MzVRhniVJASF8C5tm",
  "key22": "L3DSSHPNjfv57Qf5crGA4gpXZTiyoTh2nfnLphRT4nRXgJWJJ4JrfabtkXvSzq5S47yV86r6cZYyh9HgzMGqoTK",
  "key23": "4WdVszDarFNsuPYEXCrfZpX4YwaFd45YvSoTgrFZ5ccffmYY3jAi9Ug76ZUgptwEtzop2exPRavWo6imwqV3Gy3E",
  "key24": "22Ja3wuiCZcfRt7heRmsjevEoHWagZhskx8emFqryUwx5r4BTU6M5WidzyomkPULLjiSf4Q22rTUGCsKDLaz61Es",
  "key25": "3xDsnQTJyqe4oiPwgbtvgnNDW5jQmDpykL7GJdwXwe9pJ3BxmFEAN7CtQq3wBKGoVY14KKWFiyRwfka4gAtaqtds",
  "key26": "3SKASbHXAfH9Cdi92RUpYTN9dgoT15hwNyu8zMtW9oUA552S8VwCXzUy27yXuxAyY3bproywfhGMHgjK1KetwbDR",
  "key27": "3uGdkGrSdqJPcKQkY6Ng4tQ7X4yefAjPDy9uEFJ1qpEYrLvrBAjZux8voxekNVmYiVkrpyrHfMbc6nNWBnGxPNnu",
  "key28": "akgLQNv9RFT34gAZUPKPyLtoYwHBCZYVU33Acvv3j2KfBVJM1yKKMbb5K8btpr7FEXsS9goQaX5uSnweE5UhEqt",
  "key29": "3u7bYRtcYgVVXq7v6G2pKJGY4oJyrLV3uSVTJG1rHAHu3QHkKR8R999WbZ7skT4j6QYMds4kJw1fGGsXyw8awX6i",
  "key30": "wv6udvNacpAfLyYCwa67sLKuHxV8GcuBpL6meduan27USdcmYxEKLTaDno1Z7QGwFhtUgo9Zh1ATCZQ3SdgLagW",
  "key31": "3r2QgKLKTTjFZHuTzbdRY9KxNdKweVgaoPrJFNKvVPeB2Sx7sbyxEYJNPQKK18gXpPxNwtGsfUiESLvZT4ry5gG2",
  "key32": "3xBRSxKUQoEyaoWN5Zh6tVZVyHwigSv8NUuhAx37oamtKDh545xMa7vnVEBpv7m6JHrP3Hvjq7sbmjt4hz4KZeFN",
  "key33": "38DbXddcGALFJJKNHWkUXZUZENhYVsk2nWFn61hWkFcpWGhUvrdSgfXDHn8y4Kdq3BRd6gsmbWEUqUoXmC8XhVet"
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
