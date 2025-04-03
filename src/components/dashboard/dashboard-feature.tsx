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
    "4cXmVsFSah3r17pkYBEroYBTuAwJ3Sc5qX6DFCSiSv2sAkjQw952N7s87ENuZdcmr3xNXhvxfzwi4iB8S7adrhb2"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4o3hkRKCx8CLWMTVBjZEG7o57sLYzyDDXcmkMFXCbDvxteBjrdeMetLNWWGqB5vDVH9wta9W7HiY8nNiJrTMK4uf",
  "key1": "q6L4vdyWoskAygwLzUCVGBgQT5WqyCXR814hJx9Wh4KSHebrv7fzKyZMGUNwLNJ2RjJ7Rzdu5WiNnAtPE9DdC3C",
  "key2": "3AfEpmERmZqAXHQsYoMkJNhzEs6LdQZF6Z2L5TTZX1tqLcXDNemgVSkTstMFds97Jo1ZBob2d2BCtY8X73azxdk6",
  "key3": "64nGQbxnZZ9uzfnss2z7rb9T2Td82G3W47E3yQyTxrAocYna98TZJRVACTUwXb66qYyiBe3emH1rtDJKKLszVgDq",
  "key4": "2CfEKwZ8iD125hhpaRmuoGQcCssuJTUWTcH47PDCpeyoj5ZQ84EmKMwPVA5Kp4Cev3uDGJfzNBLEmtS5DSPP4BMp",
  "key5": "4oVJGas3uFZGD43Jd3e5oocg1QA8pQ5vXHTGGiazJDmLmVZaDHUK79EtdGUd7N1YEJXG4JH5EDxNmqx4XJDbTFAm",
  "key6": "4fTCc5ty2udWCvrwPbyEJXjykgDKhG1tViMVAVgRTq4SBBVaELoiQcjhMkK2nNTNeSa7gvmymcpGq3iGPHRWgFDK",
  "key7": "5Y6WA9w8XDqmJHxDLKG6tVGY1pN4XnWTYCUMz556aq22T9ni9BwzJjQDywwtAGkoXjTe6AxoWPegacjYzcaHdVgw",
  "key8": "3Cw1oMRt9iowpMryvW5vtz5cwn7sA2DqHksYBQBGcvanyJE7jDowKd1htUeJBrwwvU6Wzm3vpBw71LRUop1rqopK",
  "key9": "qTAwB78PdezqWCu7PkspPR445fDp7sBHvxQbCEb2tUGr2b7w5ZbS6ZdZPk9YwNbogTbkNKBK6DivuQfgTYKQgAD",
  "key10": "4Lcy55GN1T8bkcSSMECsrZAcm2M57KURadRK9vYy3gtVXwihNRbyQB3yNcFrX2b3UwfaWyLGU5PxYB2fGuePX3jL",
  "key11": "4dexwSqFZtevhFnjCX6dWL6ZfvMCQMctCe5dB2eC4x7u5tA8DLknocVe2a1F8eb2qwn9vnwhetTTB8W4yq5WAQ4q",
  "key12": "4AGHEPkzZdVDUo5RbLzCxWJyEag2fLiUg2e5iWiwszHsgCcTAjc8fsbPERkFstrntaNmALyfDBmBdd27D3UUMpWU",
  "key13": "47C6B1r93nWREEknsoiM5WNDgvLJZUtXE2Rqy5E81c5vAvotprjiqrJjq6MWYd3fRpM887QRCZqqrFniTRAotzR7",
  "key14": "442sDsJ3EnjSswxcgH3bvvTv7sFWQTiFB3tbazZJ2mviVBjD3ukBG7hsvURF5QQnnuo5bNU8Sq7nXdkgpd8gXLtt",
  "key15": "25V37t183GbCAprQKhDizetPzetevw2HRdp2Dd9Y8sap8Gxykg2n6rakoi8oogAfdhQbhuZdZaHnpHPfZh7mv8JD",
  "key16": "2VF924aXd41Npa9ZaGHE7bjdyRuayMKoGXfLznqyGgEouHqEmrePZjsrUcKPuXXMYADHEhsVcV9UpHUJvjX8XYap",
  "key17": "4XQ7MoAbJmWpHUmVD7HGzZYdjkdLsDmD1h9XbnAM2EhXocF6kRrPsPekUvheXeuEij9cef19XWhEHnQU7UAadMQx",
  "key18": "4kzuUk2Vy4XNn2JskjMkAareyP98Q9gCE7fgxXmXg2hnPmzfyN2idW6Enxcgfv8rJKU1gpQg4G64615GCRPGnZWu",
  "key19": "5sLtfVX2iCHtZbXRFHr1eyCaxu5aaYuVHqnvwaBZq4dQYwR4uD5w3guY4kUDPi7CSJeuQLCm4fCJ5ymhG5RVVb41",
  "key20": "Fm4Y1RDRX84EHjxT69iEURRMegf455YRDvE5jsgJcANE1ZmbBzR24b8w6hsPfPyz772ey7LrBk3Xzgho3Xp4t5L",
  "key21": "x3WCBb67My3SqNMsrsS9sn9EggYKrmKx35QP71sc7uwgv6YsPYyg2zPd6pAGBjrkmMwV2FmVHoQ13Y2vFed72gm",
  "key22": "3TiB4kAsa7hijdFifT4gzZEy8yHV1CKjNu2t7UK3mzNTbNGy4eKTBykzYJ26SizS5KQCSdiDjCR1ucNnPsPZ6ero",
  "key23": "2y5tLstasrxXwhaRxMtFYqtDJ2geTWjAyeAum8eEkNifzw8b698gWo63SxQzFSJZHNEqHj2HdFwryMst7G7MgWpX",
  "key24": "2epG1RKMpuCPC9GY3D5CbvU4PDheeYRiVwT4s9mSnxYkvAXuKSWpJtG7JXqtshJb5VBFPrSuBWak81cs4xD2aknn",
  "key25": "5yNb7xBhZXM4r7eduhcuu47Bhmr3mbutwATBKRUmiC74M3GJ3Mo6J4LNJv9a1YGjfKNWmM67TFBjBuDybEEBdVVP",
  "key26": "2FJ2UeLdQscPooXtomtE1uiDi8QD8n6qF1sDtcVxvSmWHtFhwJNDPsj5byZ2KzY1f1ahqRx2Ki9Vrf3v3QgW9z3U",
  "key27": "52MtQSk5RAuTzV5Aec4zfteQh6J4aHfpriDqoQZk2bNHMQgduX4UXDeMA7zPA62cAdniuXyASjGVS2oKdAMVMNwX",
  "key28": "5MY47o4tQfuRcPgNW2YakmbMP2VKn8yhEMErjSnbwWhKU3EVgVtP5EKhPKAee442hW8pTonxNdEBnvhdPYTCLK2i",
  "key29": "4fADhbz8G1pUa79XGhnECLuSkjRBKWarxuzMMwsuJqmpxrXk3qsYFSM6rRrTCGhpVpZaxHhnKXdUKHdHT2fSynGN",
  "key30": "5LZPFdAub8AjqgUf9VrgsEx391YuVAnjRNHDJRtqpcQUfxPFo1FuD86wqrCacKDAxEh8oxtCSaSZTV7pL9Fg4p2",
  "key31": "5xXDP42FcLzZoQ65tNxf3yA9fzWymhAJmpiGZ4wu1uhQtCdHdZCYM378AcGAn2CL3yYnALUYy4oHK4MMFEc9ZMbj",
  "key32": "3vjnugE5cVybgqrqsbZP72boBNoCZnsS1LeQzKaFoqRUXKhw7BEVAUtHrW1JiYCCtiV9yhtNNco4JSyKPwoJrgWw",
  "key33": "qayR5VFS4Z8r6qmrj6mSPm159c38pQo4NVt6vyxGq9bJhFQwZhwxbuUQz5NWU6rq4bkrnYdBNUF1xykaBZEToFx"
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
