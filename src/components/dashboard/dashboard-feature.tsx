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
    "3E3mPqSDK2KN5K5sFKZ2kgigsyGUmWhfJdcroMgL96V2Xg2WsosZRYSG8b6psymRUpqY7ftH4sr9Cj4HDcqrSmqH"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "47paFkKPnrMhfKEvy3u9s5n4fdt7fS17ecKiBKj51srNb9a95wk5ZnCHwUbuscQ6EFEsWWbHDwYDQjovdMYvMeam",
  "key1": "2TB4nucMi1dMRchHY8hNBcY8ccr8tM7sCHFvRbfLMguY9Dvh6MRSBWprxCkZBZQ2jbmohNHTw4NHJ4jLRARVHA14",
  "key2": "kmLXCaofYqykx74gT8ysb9NxGZHPnciNzCmPD33xaK3Pg5XfLzcazEXDrg8gK816n6cheZQ1TgoTNzsNerbeDGE",
  "key3": "28jnr5BMq71wAwDeHUuBpu64Vcqj42R8duuHBziLKrmoaLYruxW1X6RcnR94n4ik4RzixEFiS1nCkbbwHiJ4xYB6",
  "key4": "3NnbaJV2vvzwFigdJFVtyCgkXnWeRAt9NDy6QgYeV1X9Pzg7KqcRtsCWxWxSZkedD494JRpR6j4FrJcWTdUkN9vS",
  "key5": "3exFiobJ8Ya6Mbw9GTAChNgvEvNNE584NgpMKCq1CEJL1nY2N8fs4PttV3ei2h9MB1w4JreAVpqYbujLCLztrvHJ",
  "key6": "3qaPGXEkrezsvaranMGDVfYMobHJHbfBfwEfEW8ygVZQHmfA31XVqyqLzmHA5qrvkQ6H665Ypar8ajSDHRu3t33J",
  "key7": "2wPCxwhgLuQfbfYBfhxZWmFSLdpbGcsrVYkuhMLgxs3nGT215s2RqWvX3wC5MmMwhe3D736QgnMBiqjYNpeUQLfS",
  "key8": "2dTcbKC8opo4W7pM38bvZZQokWjqefwrFoaNMQZEmbBrCzaU4bNnzf1QYVsJqYvchd5p7QnW85zmxjYRFSEsGSdQ",
  "key9": "ACPDdamF7i7onJirNY4U1WAbk4ruXKANSLyaT8wpTRY2JY2cDZv8BYs9y3SyyqzScMWxr4d6iW1sHnEcQsgPdTv",
  "key10": "2GBFPanRj793LXy6Mjnf7VgJfjJAjc4w6Bo78fCE783ZSydHQnq9noeDxapDRD6xoE3VtzCVez4m7oPKnGpTY241",
  "key11": "3nHvdoiyNRb2or5FtwdzmtMpBFZfYuRaZLg5Kdw5xJfynbn7y1DMU8Adi9NGSXqUF6ygfJipyyAYZ5wutpXfxjoo",
  "key12": "cAh8TxC6LpjtVaCKsHJrZptBfBT2awzvSSUnD2Tv9QaR6kpYpCEQX1QWALPpBwBjyLiQnJ157FVqKJAHJ5TuQk2",
  "key13": "2GgUdrtFfitJZYyTLTMFAMTTtuHs2YHLsF7dLhAyEkAQhC4CsH3xoQYXimXoQm6afKfAQyAvgoNiMMuyxcNWNHU6",
  "key14": "22K42Bkiq3mNAh2Egpn7G2bcAaXa56J2qGsPLKsQcaLaQmhjiBwpE6tHpvzvgTDyjgK3USa4MaNTMuZEFwb4HFkP",
  "key15": "4HUDWFrTpvHTq7wPGSBZZtqioo5zNc8G6hYLi7awz7iRf8bjZSXXYmPqFavD1WCBHBR2VEB9s7Q5dXAyzRG9B8NM",
  "key16": "22yoNdeEv1trBgtpFqiU6KMbHefDMNdtCMKCV7sVV19T95EEiESqH99a1BW4JqiiuWQ9kYZ7TXxAo2Fc929MFL4h",
  "key17": "3u9hZmmytksCj19o5fubH8y6fHn6mNt1sckU78f4SuNHdsZQhAn6nwg7VMgnBDQf6q4zZKQNuF82SmtHsD8LNgBb",
  "key18": "4g29BQ1GSsyFri2LaoXQYSuKHxthQAGCCtFutDz524XNsdKMshiE1yDPEUwEbDostetY6T9FznhywTMcee4cKLie",
  "key19": "5kXPQV4eVBv8Czjrh81NoZAJFjLcmXe4dGLkfo5HXqt9QHzY3DeoSTN9Qji2eNwChtPKJ2TQ9EgtgcLPu1PEcGEY",
  "key20": "5J69dhnQK8D6Ap4G64zxH63tVtSNHtAQ12Ghm8MNMotqGqQQduSoWeyR5pFc6BLi5B8BHukajURaKDPhuNV2XTTF",
  "key21": "3inJNZ7C28cHJKb5UMAUuunLgim832bnCEj55iTmUZBTwXwCyXVxL6MpydsDdj5Pg8BEGMbfsLQzehDMQNC9UUvA",
  "key22": "5U4UB3AXdw1kBTmsTQFimATex8fMULYZfvwFzW2LJCJK8M8UUzeBb66onwGxCijci6Kxb8ynf5zvJiM7PWRFfmgv",
  "key23": "3QiomRBtTtiVS2sNMELsZmyZPCy9Q5eQkE7Y95AEZhtVjVExNrRDJqpGGs6Nrp76xaLzq96DhoTvuWC7kcnyGMv6",
  "key24": "2VCjamJGunWh3ewRubcMMmndNfnEPP4yH99KDK92HNw2EuM2bY4jQjEQqmZDnS56sws3KF9fcTUD1KQSKTrA38h4",
  "key25": "4SCj1Us94VP1yN6idbpp1GupvApyrJNFxs4fsToFZPWHjVm1qUUiWf825M3pnGFxkS351mBAG7Gop2G7SAGKZHiZ",
  "key26": "54rAcsxwtxcdNrnh6sNA2RE9DSYVLMjJs84xwo34HQTmFjCRuKZ1AeA1E1m5ATvnMdwNQQkNhaiUcgnfUARnGmyt",
  "key27": "3m1XYvmDj7Hp4tEhC1SKdgdnNPLacxc4MDEN2jFJ5n4DnMz829NTkgzf5pf7MiMtzJ3Cpo2wDUYWbQEjKMwuHbeu",
  "key28": "5xWJLdZqewzr8nTCFxKr8y5yM8HeLApmyUiy1rJdA7wfoGrwnc31LMCkRSXdYpP5S9LRYGGhLRVux1BavXHdz5V4",
  "key29": "416WxK5w8RhjuMopZChJgn8GDsimFppgEjPxaZNnFtJ7ViFYte6WZnD46MQiEjxhFqHkuSBEh8vsNbhKHQyn6PY5",
  "key30": "4C5tPQW1puxTQVGzUqtagPP3E7qD7JaGN556ECTd3T2gPAnTsGaM7pZkqJxdbC1SzrXNXYhBvJxuSX8ngUjdcrdD",
  "key31": "5fT2taQbWsKWP4WjbFFnVANq1z3QBdvmPYus4cuCv1ZmbXejYg75XDBMFRk58E67W3jHuaSoi4dx4Vgqtd7PomhT",
  "key32": "5XworLhh7UbZYu78TnewetDK2WoAu3jWCebaDc8die6TxJHJwrKABU93vcEhsXQcaJ7MSExbrW724ACEpiRpqmat",
  "key33": "2tXU1zRka7bWnDS3w34eDM9RZBi9BpamYDNx5KcapBzCBbBBh55xgJw47tmZ2XrY9nZkfJzrg65v7PQFjy96vwz",
  "key34": "4dwpGz7jkgD4TnQVGVFkSw5jopWqow8sxPasNNDaQuKh9dtPBCvoYS2gLbHumyaiaSiLTSaEq3eZwoSaGgDCQocD",
  "key35": "3sqfKocRhK7BRfn1KRFXVWcosukQCedaBW2PugwDPFCmXhiRXUJ3d5poTCxd5wy921r7xUGz1inEutctVpHhTbap",
  "key36": "3XnTucCp7Az1z7zhqfub5YNGhKpmi8u76uDmLFaDtgsa18DdQ4ML5RZCEv14moAYajfRXtHUm5uxEFdY3AApLhKZ",
  "key37": "3rCUcRkSkZnx7K2xVPutA8FHEZsHdcXT6WktGm3YbHPqU6yN4dHWgYcRvPf37fJrxSLj8YDNFRRdkJ3kFDWccsef",
  "key38": "3StSsG4tENgfMTAaEPX3avf7W9BTCVRzRxgt3P84deesiWqAxAaqzVJyLg5dPctBYUnvfzvSEeuiPNo7C2aXUmuM",
  "key39": "5PckLZLWs5cdgC8FcTpaCvfkMhDgshvRTqpcMAjwj5AbrSC8fhiC41jVo6wetkHPzqaC9nX8UzcCJ7PwWLH9pf2V",
  "key40": "25cpLxrLysaKXT4mJuBaV6UsfR984wExEDJxy3daSkDACKT2i98SW6z88ENuYYiqLi5DX46ouG23xt1vLsBPBXiT"
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
