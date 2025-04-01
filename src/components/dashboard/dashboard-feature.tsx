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
    "2JWjokfRJCHyV3kahcvDBVFn2c9krSDCVatcSMLH55YquGTegw57BF8ZHceAHyXPyi18PvbcCc7wuJ3hQSxw2YKB"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "2yr6z3p3xXqmTn8jqyW4yeQRHo9L3AXGwzKWmFKagfavUKwxukoTSSeMGJym9UDixxWmJGkgZbPfDJnsVVKYpC6W",
  "key1": "J5tUREde8A5jjag3B8YWACj78Nc4cs1vbRGcUM3A39wX7Lwb8gUmcVwagU1tinDtEyfxLmBw1weLXpsia6g5Ld7",
  "key2": "63PhUAuR9hkSPpbjhJrFka7m63f3oMdFCezHt52rEKx8wRrvqQ7YpP1c8aD1p1JuJeiddThcB8UtSZ2MPgVAUs6w",
  "key3": "BchAvzP3421gpZDx3pTtCSdgYubpQEtEKg7tLnGrUi7Riu9wyaM7PZzpvsxQu5UHMNBh9BXoVkDZDmXe9or23Py",
  "key4": "SpdtarYmeN7tVuQ3GSutfS52Zd8W3YE5rG5EFJq5hZWNB3Li2wGQLs9Ey4gcwtVEeaN4rxcP7keFVs7vasi6gAt",
  "key5": "5RrDkcx3TZ8SV77RaCKEeoy11YrvcJd4hH1Hdw41SnfJQu1Rmr9TKxhSLcLNwGksnXXvXv2Ek5Ed3iNpZ1U8kHDA",
  "key6": "2588MF2s5t87ftgp911rz55vDfCnjiPRsdrJm6Psayzv6ACHMqDKbJsp7ziJPk1vD5oETGFw8FnUVvwRfyj3Mpiw",
  "key7": "3gixThg76eJNA9D454XDghfCPsD4pAjZ6uSQhEm9auL9u9QbNkuQhX9vq6fC5Df15Y3VZHjMBHTEkT8f65tggBft",
  "key8": "39yVTM62vVbYk3DJ72c7hh1Jgc1hSVscjEExQU3dqN5V2TVefXJwnack7Ux6DDSfdxQmh3uwX6mMYRqia3DvHuTQ",
  "key9": "j3VRa36yKxcJB3Pgu9ohqs7dHKT8tUY4JLzPs6DGs3n7TKda4VD43pfzZoHC1Z2u9iQjHt31aZib5H14egvqTmy",
  "key10": "4gUqEADkbFPbzQC1MtNwoqVzGGFTHFmLqzRQ3oQH9d4LADiy9z7ShbC5M4mwrJg5SxZDE2WU8GqPNNH1DXJFYrH8",
  "key11": "4VmvTN2iA22hntGYAbKG9kHdKsF6EVhZSKMzbpd41eiHFQMGi5qnAxkBT6smv6W36CmhvrRsLpVAUBNhkgYiqJqE",
  "key12": "2g5fJCLXGZczVfi5v6WUhwNmfFeY14t7f64i3LKp2V91Sg4zStEwzBVdTrtA1T2iSGYtpNNo6j7tpJTkiTiq3qbi",
  "key13": "38vMLmgVJ8CQobQXKTA5EqgoW7HMpoY3nGqKKp86kuQTj5XXaKk57jkJ9JBsqZP7zU5pUUwHEitz6r7fdCrTpi4a",
  "key14": "3wxXLrvk2qSeLJFDuZCnUhr14n1Q21QCysg3mNCyo6Jb8BF4R3zvz8GA9SMVE78MX5XGzBsUrUpyvbH4B2YebNA9",
  "key15": "2KsKxwZxuh9bJHvuPJHdTy5DmyEbu84dsJQXCPDHzoa2kB8yEYQwUFD8GsYGpyNcroa6o1ZqBsFwhaLcAjT9bv2C",
  "key16": "5HmxjYiC7v5gjFQ1aK36j4YAL65CYhmT3AoDcZn9QDqK9ygHn4b33oNa9PbMKWPxfNea4LFWQNireAdU578DDeJq",
  "key17": "o3AzNqdyvm2dTmhMAjLqo2gbhPEoADezEnnAFZxuf9jyF9wXy4E8QAga56uEjBX2Ura9KAad5UtieLMvGE5FC4q",
  "key18": "Wf2kNqRoBeSJZwaJp6jtrRaUWSPMzhjFkBefD5wEAjRFhyrn21KrirogpP4pZiyon491ZsSzUs2hR6gs6ZYfGPU",
  "key19": "3imLr9HxBYnpxrtedkHge7Qxso3suhBMoioztzLic1mZFimcuuVTQTVFh1FYYkDFSsDo25ZaTi6ZAnyN3BYuvbCz",
  "key20": "398WwAPCTSPN4WE6K3hxARutuTJEjUC7RKJ4Jp2vxc6DLcprZPoVMWQMmsqHzmVoukwDSmg6tZuWyAi2aGin1VHj",
  "key21": "4WTD3qjkR2QY3J2Hfpq8syZNqDJv5aNpHJXwBQ8nVBYC5bHgh93h8s3f4fk4h9UfMw6gzU9FpBwcvnLhkSc4ELFy",
  "key22": "4uiv3dp8CEtqVy9uBhhz7DbFmkeHhfbv8uiG1xHMuaQab97wKnrseEZo2UPCisNkYnLumVhTQ57r7LsVWzCaXV5n",
  "key23": "peGbE8yymAiNzMxSJGyC9G16EYrCNag5TExm3M6kyyTaYtX1VzRADaCt8X9TPPtEMAAfaABrQcncYYabyqWP5ZB",
  "key24": "27NZugbXuGgke5BFCpTVRScJxD6eEnH5RNE6ojPKTy4aTPaRTW87CSbHtCjLLKBxY6qbMXvuAzpUDSxtC2KhBdbc",
  "key25": "2r25wmEBcZi1gZ8Z6E9souZ67C5UfcJG16EQRWZciXdF54g6ibo8GRnVFcpjAQEh3L9pLFNc935YPbFZZ47WAXAj",
  "key26": "5c5NojonH9SWxo3wumhVPXzH6LXYofhWP8cbMJr9B84roydaSgHBDHcGRUDYT3jt8BL2GuN856imqMwUudCLLGw1",
  "key27": "euh9vvobV9ih9LZR1pTuij7snS5Jg58f8tEFEHFs3GQSwd9XynmTWa9sxCZ9xyexnyk9oeFxWqaPu6Gg8P89jUm",
  "key28": "3LR6HyDBj4HH87uE9zPM9vAhzq4ygHMskFN8iamtPrx4sFnKMqhXoLgXtubjNHJBFQWhudZrUJKf2rGNb6Q6qEYY"
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
