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
    "49pi5QMtLEVc7ho6jfxUWSHsz3nMeCPEYoYEcp3QNMuLyNsD8zCc6gpACyLUsojnujbFDpZLHnLu8xVH1UMbzCRL"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "38LNr5esynp1vKUWoUE8mM5MiygSK5vcaPLUvwWMdwi8e4uVDX6FvWieYQCPeVKed8wiccdSZvNpu5rVpzsq78AS",
  "key1": "3zzWGPVWTgjTrY9VdvDjGEEPKTnAMjsr9b9sa7bBhLdEdHu33ycdjvM2gpBhihJsgkYkxihQSA2KNUCW9YiVvLmG",
  "key2": "2dxav7am4to9ryiRo7gfXrpWvt8fuBv7tqFAnsJopVfJfV427kvTNPGLUZjxQdLbWvCQHifr4kbUs8fHA6P8LwMy",
  "key3": "Y1wTFEww44jssn9cDye1MPRL5XNZ79XrojjSfY2tHBkgkbcMzFBfVbstBNKypq9nNKfAP27orYZ7vQ28RCBQQP5",
  "key4": "5X7XTr7yQQDScrUTXwxvLYJo6R5T66MDZJ9F5dRvJQJNvP5obKbZ1brLkAxjRMr8TGt4RCiUN9THRwy7wagQPRhM",
  "key5": "2QDgjy2XEYwPa89XodcgvzvfHahxStJa1oerBncLwA2kVjGitkbe1B8Yh4Trh1Kn7VkGaQ6DMuR4Y4R4fCcLxb4B",
  "key6": "34RTJLjFhvySVDLNucj4xdTiipvDWaiVKbs7QUmDkSgbKZWo8ryzSNuRAHG81hnxerZhGpkzUDNh65KxciJruxxn",
  "key7": "2Q1agxf67uWyeGtx9GDBZQ1TP25dNL3XDVwm8AzCKivtUFUGeWJsggYbDYfVQCgSog3EwBy2K9ZHZohQep2mmsF8",
  "key8": "a53WyU5hUv3UtZosk15C5j2zfAgJUP9VTLX6eCFgmsuQgun9GJpTRacMsQDd96b38NnbwsH15wP9SHdiwR8tCTi",
  "key9": "3dYHQGTT5WjG4Lh3ETNfXwNVR9rKisTAWVnFZ4obe46haaS7jRTZJbjSb9KnHfAsTNTVrBAse8EBhrjBZZ2QcJGQ",
  "key10": "42qxTgCwXMYgcXSaisA1wA7sUFesm8VxJpWxStxB4XZYpufJBWTNuKrk6Bm6QaCCMZRCWJuCrwh7uAsAxRNp1X5b",
  "key11": "282GTQhTuDFbHZYJ9VbuuGJiUpoNLUNoiE2FyPDJHwi1NfffU1gXkWar41gx6bBCJNeNkvjspF4rA3CuEaGovH7B",
  "key12": "4Jts6MpCVtbN8yDXAYMjuruEJH74Qq4ijSQF8na5LaqVa44DXejBsNXYKXt4CoWfE9gJiAWxp1C6j4cXvhD29ive",
  "key13": "38mb1Fc3rppT318BGmdE74ztCP17NWRMkDhYFCo2X9RtVnngPrTpS5UPgLGAEqUR82s6E7kGMsqtFUiwGhjkqWbw",
  "key14": "49dswyDdzjR4ggHRVdnQ5rKxTyczW7C5nrvGhdgukhbYUiTRFYyAPE2iiS3qBex5SrdZojSFTXiFeaXutvE9EHAQ",
  "key15": "4iUtd18LHan5f9yRDZcZ7QXSzn2tyucXhNAxcJoox4NRZoqcs5Cxe3zKaD7gETNdKSHvqMLi3XD6QBFjH18X6i2j",
  "key16": "331pQkTYHccaWZY42RCu5SxLbDzxYSvvMV2ofe6EWYmfR3QuiBTju9j1YmmYorDKvXWmqAH6q8Aky8QDjBHCvdvw",
  "key17": "VFuDdXZUSLZF4SJkZebetWoiq7YxNMw31WeGmZTyjRB7SfRVjNKPJSrUfuHmxzpoBdHr578vhdYTtLgoiR66oAM",
  "key18": "2iJo6tNVvhxohuAGe4bGY4Lc9E15dd8sR6hxkwyst7mnhnwv4RZmyuxezp9zJf7NTAy2by8khwEww4hcW6hr5Z7d",
  "key19": "4fMiQWriZikAbUsNB1SKnn4Apza4GBEnXfAXR7EM69G3g66Gji16Jnow5N65Fao4Tc3TnoLnEFyEy4uDBbWUhybo",
  "key20": "29XqrzAmUwi7L2X42jdqDFAWU2KJfFWmm7vr7S13nDxMu5tYGTwe75wSnvbHodgVHHC7DnFaVuHhCwXgU5FrPgwK",
  "key21": "24KnRWvybFsqYKrKQxSxYuTRC8EKBMLgQmBQoyoce5RwVrJcTtky92Luf8bKF5Tbn6hTgBd27JZ9AxDVB8DLA8Zu",
  "key22": "4LtZgJmbcQs8dxfbp1GJRaQ5LGSmrzTrtuDabX3sST7rk4strzDT8CqEzrYkyNFb7cUQenj32W2XPepM5HVnRToe",
  "key23": "3SPfUxjKTqdxgP4skGjpRMFKAkbrFM8YpRX3GUrwGtDbVteQ6wzkw9cbYRjAw43eWDkZNZFiPNXa8BDS6WkezbTy",
  "key24": "53pzisME34XXuCAu9cf4JjAMFyFqWUgSTWVLVy1FZfMBAwyaZ8FDZD4nmUAbQaDrkc49AkGfJf1fi2pzKsrKABzx",
  "key25": "2aRGUMGFwGw74P4Ejn3Npjsg8j4ajX1PvTVpA4qmUteXrYe9EhXV8GsnfohU9nxTyUiJ5hTB6JVHtGxKKpaRu35t",
  "key26": "3zwSL6db8kntvAFoem9qoAytj1ufZCbVSVMLgtsTeCkLMWHJTZ4tB2pHuRXYyR92d1J3kUwXzhovxqdWHNcneQFJ",
  "key27": "4vz2Hy5DH5QvWX9wCR6tdE1NPhbWWt8nCtNCFLNXD1cEH5CejatPHAi2WxpUmC13duoy3YSuntqmAz2w3H6GkyUr",
  "key28": "4vs445TmxAGa4Xu4GHksCvaVb8Eh1M3gKjhF2GNPmnP7nvetkR3ZiNXYat6vNcfBFAvei1qg59dsRUmcqaaLigkR",
  "key29": "31a9VeEBce2qVkiCwXbXzZXT7e9Vft7AGF7hCx1zabQrXnHy9J5KroxFpCxrsLe2HTvcwTGq8KLi2nRy4rVH2krR",
  "key30": "46SxuhHxUB4VjbEXertdjBYMFK9MhKfuWNdrj2faJR5JnzgGNjAWjXfJpCH4PnLmSwmFVXssnZPERQ4xcwn11LyN",
  "key31": "8mp315td71gyGydGMQB6Rkb7C9AqUxhZJk1f9s3opcM8NsuyeNjJ2gHyQoPhkDygqRWDEmhwXAwTBTMnWdZrLAT",
  "key32": "xBWT2XBRssayZ5dYLUTLDcE5X7TWwUzYUMCcWpMfKrVD8xH4XLgFrFyFvErMuJhmcuDP68WZskv28UAGbxyMzfp",
  "key33": "48WUZAoQkbxHSe5Hrbi4X5TFqJgi26WCXKMTQmQPSkVuDVwFhXrmkwDZeR6tsQkxAWqXmthP7vgJKExMa7bJsrUQ",
  "key34": "2kT9hAcXMySXbZ7apvbtjTSyEJsuNzxvUyfpijSwqM3CawQGHEyz62s5kMWhWdVXZnGxcrq9w4Nvw8b6mT9cHHnC",
  "key35": "56phBw95JzygNrhs1E3sYcPVsy69BpXfTY6aDdpPGxAPzXoWi63q6B5m1v1iBTF4Agfcf2AVXK9M7C23d7A6EGN3",
  "key36": "8sVeWsen7jxaRKVn1CTLc2PSZ2YneNWPhuWma97uboWcdpwQtVKJvR6pvdda5PVBU7MzEWwXd13rbmft5Yewrfb",
  "key37": "3BgFetVmxxHCyKNNBhh36EvDsAs5NhQjApmXecg8xfLMZjanSeZvf6iAaBF3j2X9zUH2L6L8zf9bD6xb7pUxBpuL",
  "key38": "4uoYRFkgT85ivStAkhodm1BQCqd5vFeAymQghHSmtbcas3g6Lm2EYPe94V66gvFF5AqczfpBbi6JF3aDRjWMLa4U"
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
