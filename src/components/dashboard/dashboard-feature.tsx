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
    "4X7hHur9raZhf2VZxL6NLzvDgskKsZkXVMZWxNqXbbaJdyCYhMBVPf1TLBujRrPGGTYG6idVZnPnAw2GwypxiWaU"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3Ekh1pGny7BkinecCd1RCgRBDRLc4eYZa7TNAvnFWr3mjCx2KMF687BbdJujmyWY7iQvkwLuBCrxeKKvK9rjZAW8",
  "key1": "2XfCC1VGtuMFnuC9mtierXzo2mXr71bHUqxzXBW1uULVqCMfDmXs4LFvRN3wZxSt9i1yFsC1pKwacAxZi1EzL3Uv",
  "key2": "4GaeggEXdbAqh2wX9iY5WoDs5PyFXz4b2SuujqE4QaC8Gb1czi4g4U7PUsDPPMFu1i7Fzjsiq1EQpb7Cf9Xah5QA",
  "key3": "5onEyiz81qky7HaV6RwkSMq4s5RRUZpZk3eq5Zd2uJjeG5wDsej65oMfXDBETqYKxNRdBaAzF5nqgH8KShMJ8oJn",
  "key4": "2QvwXKp8Ext8QdKgrGq9FQxGZPWmhdowoUbYnEbEKCehfyfjDP7e1mjQzajHSzUmJxtrHV6mgbg4mMmrhdtQ9WJt",
  "key5": "5czbQHY5F5qMyUUG1BvMU76zqgpum6KMK9kxsLZPE4oqjsQJuYesoiVWrdPKzAkYuFH36NJKxBrjU9uuKdYAFKYC",
  "key6": "3VwtBPsAJ4ewmKKL449kuUJrF36XPiasvkP4cuUJ36hga1KDGYemzJo4DyiWWEX2XhaG5Fu64FsozLucn16W2bfS",
  "key7": "5Pc5VsdeoSpTKGJ8t3TGdFGphTzbSDGD3TsWZTiHNdt4Ya2Kmp6FaCq3eB8FYsT4TBRb1vstrAFt3Mm7gsaHcqrn",
  "key8": "Fx6xbXpKCXCnq8wCCictmmk9pvu2hEg2CmciLnvbUmXUbMfWXwZ63r86Nz8EBuzKS1TcQ1Nv9WAaHLs8SoYmnug",
  "key9": "28M8EFcahk7pB9VV2JH5HNbSioN1nBMZRD3aY8S4YmXDeusfocWm7fJ9wowALrAn7rbgaB7QNG2ayCxUVW4KGv7D",
  "key10": "pGaKnJyScCMcgFvqiPLeZmUC6FEFGF3fiGkR487PBstgimp1HiZKRwzkn5pBAAW6eEcXSKtUYvEDbLmjfkGPCc7",
  "key11": "4m7J5mhXbQpDJk7YooqSEBfCC3derEQPrVSSdTQ9BSaWkMPocSJA2obCmCgGzaWdqVRNFSbPzMnzXkYmzo79w1FE",
  "key12": "55XCoTaEWM7mSnUAPSKWfE8oWxua3xNVexEURpHjvgt6HJ5XFD28dRV5FbP5wZAD8uoYxYstv3399ZfGVVaGgpiU",
  "key13": "3RQFVNJnYCXxtchrhhMSxYhqXnjQqVdFi4wcpU6ujYizB6YBPA9hi5QmSy7r7Cfegvb7Bne5W6tHryrvCtbQgUDx",
  "key14": "2K7z7fhTaAfd6WrVrLwysMuBra1e2QAe1EHBo9da2MHhQRQXsBM1BvizEB7Y4xJeeWmLRMp1v1vVzRrrfrybm3b7",
  "key15": "oDdGH9KiPgmaacFavmcNFFrGSzYGhxk2KUkMse879ti82qxEJrAQmffxfcWikbcNr7BAeQomWePdEgwkZBpjsX2",
  "key16": "3PfFtj4FgvQXRbnSSjQn8J9ztKjwgTjAcW7FBwPmY9fr6gY8caaGZHXNM3NnWuLh4ZB2dBmo8Xvp3KggQzDRsSvG",
  "key17": "ojuUBVVrSacr4s7ZQRCpgNsFUWT5y3rVkDwoEXG1NkX5xPv3CqfXaSEi1EP5hGjS5PE6fFPSUiNeqjEFX48fskm",
  "key18": "2EhTSHVzgByQY6NysoigtdRXthH8SfmdnY4LmR4YsUSaoX5cFLS3ifMae4Fhra6xXx5GpMvTr34DfRb1AxtKNMEB",
  "key19": "2Bmt1rbZbGD25Fc1qYng5RsytPMs6bFAkdCgKhvombuPt8x3cueq1DWTA6oQw6FAh1xcSAWoazBQQD5faLatbxoa",
  "key20": "kPRpMq5f1PQvNscN8JnfeaGkVWJ1vE5HBWU6ipG9SmPXKRSHSG1mmZds8sxz9fyKWdoXsQvmiimESYZAmedawcc",
  "key21": "56Nuvq59qCknBQMYFMNJEU6tfuiMoh4RFFwfaPaiBADYVbuXbEiZFc9yT1KRyBKqecFNwjY2vB2Q3TaeznC3QEFH",
  "key22": "2H4cHvWdTTWfPNxx2k49U6boLJvvJ2bX3AxNzyvV2qZ8qLCwH1HEmKCuP7i2H7QFmE2G272X9U2bZFygDwdZiX3N",
  "key23": "4vh5L5MxhuecHaMaCogFcaYxZCrmZansowFbad385XEDUrLpaJV1YGMJdqU6F8hBavujrgtVUShegkVBroiZXLeu",
  "key24": "4Cx8zEwk9ukwU84HT6LurZQ6czVidEzWoFJV3HXS4CxvcjqtE6fjntU6Wh4eFikhAcPhRdbdFDZoV4XyJ1wwicam",
  "key25": "HVCa4vLTjDSQqMmE5uYLffeJbv6FT4Ts3uc95X57qsbZKAtvdNNCf9kWx4WaUbD4om7PuX6Fe9vbMKvhPna2mmg",
  "key26": "5B32AXRVZCAByKQAZTnQTk3xe3YM2Q1iBBYHqHJyuMHEGZm1bMqs5ZNttyF3pc8KB1AqUCaNayVEY2mZyXFt7MhW",
  "key27": "5Xv7zTLTNdF8E85uD1yWMV1ajVTQctArGMuWXmSXN7QuiyWbutzuhF77bAR28d6X7zV55VWNPn6QCqHHKEAvbPJ4",
  "key28": "4Gxs8AwitTJ2J4adBKZMXmgaEMpfDYEDCUAHfgdU3AjQu9NqvhpLJTkhSfLgnYnSnMXQvuUpKWhZo5jRyeKLw2d9",
  "key29": "2AGwkurDvK5z3dv47p6MqhbdC8rvy1DRJV8xLW2dvgA1mnr9MXJ8VfBZcZWCzw3v9i9yjFXBpqaP7Bj4fGM78Eyu",
  "key30": "234uykYgwze8czXyYPHHF3bTzeMaEdkXMHQ8Gg7WuuZ8tUWQ2hZs9yPFHK15Wc4xQGZec6PSt32FaoWGdgDyUS46",
  "key31": "QWvhaPyZeTLLdeNATSb2NJZ56yq8QFD559NKQQp37RmzFm7RCkjNQbnHZGD82KxbvDenqhFbB65tsHpZfb8WmmP",
  "key32": "54TMGsZUSZBzAytBspnapVGHA7QQr23C2qf9SHgySrwHQBCcxt4jLTkpGrEyW3Bo4eZNjZMbv4RBwtecHbpswTEJ",
  "key33": "3MP4eWjzA2UA1AWNkHw78EMAsqqxZK6VgKcZhBTnffoRiJtfKtEEqUEphKRR5Mwekwc78PB9F15M4c49rdVaAN4",
  "key34": "3NPZAGbd7dAcph5b3gZbqFk72A6KGCpdctsPSRiQRaZG8MXExNKAznPkeCNT9qG1tn5tHqrWdk58FFa5sX1H8NNd",
  "key35": "4B3HZ1VyEcGzH81HjHnMdzb33qYggFzNqJ8PbBjVuyN1TFNfqhqB2TxAxupvkeHAoKwQgVth6HrkH4hk7v3ngJpV",
  "key36": "Yz5xALD8686BipimA8aG4nufj6UjMMGyhmK6RUgQ9PqyJd99qiAYcxT18K7QRX4mmJgyXo6AFA8F3CguKgpK2N8",
  "key37": "KuPqL6iQjZHveWxNsJE6PmrWu9GHKJ8jJUiB2pwXAF4LSLX9TL6e5NE3b25mPQVAAHVPu9t3dMpWWT99TfKv9EV",
  "key38": "2g6x82ipYWQuwZpRPQ8eBQmgLGpYrFuLvwQoXA8dQbAKJeH9AVscwr7ed3EiQDAgXSQKb7vfpQqwmLxikhNNBjKy",
  "key39": "29M43BT7f1f4Gnfi9Kq2XabA27yGs5DCnNdB7uVjodpetkCFqp7TPxVzJyHtSXF4AwXgTnRwa5Qb9M7gL3ViyByV"
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
