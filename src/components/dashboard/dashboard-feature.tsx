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
    "5S9yR3Nmza1jzipQeo6s8PJKq9DTZRc4sEMQH947ueyLHFtDMBSXGiw2zh1wH3MV6wamdXShVpJbEew2k23iXaux"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "Sd86fivGxV94K9fZAoGPCGVtCASrnfKtr5tCAdVqKGZYbcgBEY5diMCVQvrtxn29AHt32ink7WeHcok9d6idYcX",
  "key1": "65yubKGfHJUBNdZZJzGY4oVC8BRAoNKsnrpDsRrMCdzCrLMxhJcHmbHDs5F3ZMUGv3SPT5jKDNf6pfomux5WrZda",
  "key2": "2w263EQtCBVwoPuuoQyyX3s2FdkYdB88KS2F3y757adDTtNFSGAmyw5hPWxyt6fPa7CmRmFjiJkW1X4qShcY5TUL",
  "key3": "4ZkwUrWGtCmEYErvqiUn3rAeHWouWrojf3Ht5tavngXpqRxe3KgUzzqsJiQcdX9cGhg195pA8pxzebXGWj133Jow",
  "key4": "5S5a2kzMEFrQ5tsPDhupTB1QGL184hBiCqj2kqzN4mnZHbR9wP2jL99CwgZXcszUpGNxHJX2MPsafpAyjpJiMEpD",
  "key5": "54RwLDWw2wUK1VNtHCuQTiNyAeK2F6etXhKSzoUv27wsibxKfi7FKuyNjnEfrfBrvf8e65iTmDxU5DEp4cKdLM5V",
  "key6": "2pFYYwjLGamAodsfZPsjCA32QN2K9AAXuKAjcno65mAdupgq1Avf6GDNfzpUZCjLb5p6LfBbyi9Sz3ir5C6UAa1D",
  "key7": "36xojMP1vNrMLr4grTyGMfC4r3tDfVYaXFHgjKyDzhmrxV4AH2oMRSWpk7t53K83XhdgEbkm8WEZ39wr4H5JRyny",
  "key8": "2V51ax3zXkD8FVsuHsjafiUdNAT1QfhJmiK2x152V3d6BiMxxnyNEbfPAmuE1m1mDiqVoU4uZwpnVp4dGN8cuZhC",
  "key9": "4uB5osXEsdUaxTg6YY5KqKyLuwuhJn6ggxmsGA5CbfcW66bCwaTEhgyEQt8MrMJxNCtRLHmZ3g1ShKqiLRRCUw9F",
  "key10": "4xHD7DsPjzwDs2ditLdHByr6TZzeU1qaFoJVd29Z3TqAVVcgCk12D1JCBS1JpmaFqyVZzXsSA4U4VougHZzkRBgz",
  "key11": "5ya1L7a95rwDfcwdaKWWAouTYrRdzXgL6t8MoQskV9BP9rjo3Wm1Q5cT1irbiGH1StNnd7uv29aWjostSsv38N1W",
  "key12": "2nj2K7oujNum22WWDB3BSZPuMHppGPfWprTb865sK9knh6DxfVGaCuMRg6L1JZ36CY87NBUZfZdgbs6uouTzhHqq",
  "key13": "4Z3RzxFEZRicq6C6M4yQ3dvRZcWGin89JhAroHKWE4woWfH8SwugWnA81ycqA1Az2yKeA6Xhq8dXSTFqkbeJjzA3",
  "key14": "3MXpwCRTfcPVcGMvkdgKEWf7n98tmYZXNxqgB7D22b7YihzaJNNSCnPCCTLhzz64rND9iGdbMHkwebz1dMaqtzfx",
  "key15": "4LUcnT4DQ8AF2g9AeSN9qg3kgAbkWuJwGLGT5nUcjHAXwRZ12m6rAZvCmbZ2S2kGGjHUrwYQixk14qEECuDeyXX1",
  "key16": "5dpUiHxBsSG9JRFjV8yhoU8EE4u3RYizxV7abgXCfSsji1UHav6BcPsSH7Nu388TvFWT84CDqfxNjZzfZheCyrUP",
  "key17": "3tdtkXnPBxgi6gQSyieqVx1YwmEtm6D4EhXHTF3RhFSJekKhN46pkriSgMGNcLEYQyzxV4in2W9Z1KXr258XqBon",
  "key18": "CPmZKr4JBkoUfBXsohije4g1cnAs4ukGRpdav3bjBZgLfiFns7w1kzDEjwfcvj91nmwUDd5bQhdEhCgniBQbEWU",
  "key19": "3HrjN5o1oxHYxjn3jdHAQe2ezzFgXjH3p1cq4ApdZephSyFoFWVB1Xu4nbdqzLJMCHmsN9rg47WyS1nKdUoAFerv",
  "key20": "4MVVjCs7MeZSNRTqcTTsoigqbE56a9d6mxx3fdHQtqntDZfUh8hjsYJdk3Wg1HEHwzDtwgxfpaiLj1E2ttn5TJCT",
  "key21": "5GUTnuX5GHKKrQj7oxQBpwXMweGmDYxyxcVaUio5rC7D6kuTLStAJAi1Sg9aBSexL99GXKgJ7sTqKGTR3ZoDqfjy",
  "key22": "4Hx3T9fmAKYukmg5e26of7q1ZRTmgxgARNqSn6H1tvcdfULyrtq2kHxspwhPDPGGsnggpr6Efn7xoXJ7F1TpkzKi",
  "key23": "3VUoaXp6V6jqyW5oFhdwvPf6fBCshdMeSdKGHt8ZGrhNkcFyFGscevza3i38dHi3YexzqPTvtQtiXSzKLghDhxND",
  "key24": "Qe1frm5P7tApeEQN8nn5YuTgmBqePCtJjz6Yw424ZbRA4afrSj3wbzwi9BLHkFMiFxfXJPFCFJi4zvwC7xrTgte",
  "key25": "3CYFjLNsbgeogqCwE922zpvzacrTcnekY6d7pyqHjQk3jxMVaz37Mz33MGdwRVaXSR7EWyNVLJRU4LdhHr2nVh9S",
  "key26": "3MqKv3Qwr5meJ2QjsMPYm8YvDaDaLW4mhTssSruTSxWY8u3fyfD4PExpgcXznuzX6ta25qAmRSG7uUXG7vF7D1nY",
  "key27": "EmKk2p7wAPMdmEgqX2g71omxBRQ4LUdBvqXH2v6kqn9nDCQakRXqZPgU9F36Kaoc6r52G9yFH3nYDs9Dj2Uitmk",
  "key28": "JAAySV435zW92ipUkjMv9BRZR2mfAo5s8nJuCcTrQnLf3Z6qK2Q9CX4kmEFcG6NodcwhrvGXGKC43UXsdzV4dDd",
  "key29": "r5b5yC9ciCqsLvdv8GSx4gp2azxEidfmuS3m9RbuepeaWmektYhQJTaNVvip7fu67aFT6KLU7vuQvJA2aozFZ68",
  "key30": "59Skg12JNADxXaSqwYKtGNhFq9GCJyv1233gNbkyGPNLSFpuy7kS2VB6Fb2QJsAs9XKXFa8pH5zTYJ7Jx19nKdUM",
  "key31": "4eWxCLZBPcYFtYDYp6mrr3xCX6JUF4PbpMnCDBBQPXgEfnHYS4CSJmqZFbD5QBdCWsEFWg1Cgr28PFLFndgRRyb2",
  "key32": "4vHChns5isteC1Zy4RwjUzdMz3JkTvRXJxosLy3pPHwfAchVXSn4pbeiquZ2HwWMErUnyGjANwnwTCsQxK1AM4KZ",
  "key33": "4fJ8iSxm817XWrLcnfnexEFyyckphXkk1xj3HKxtViZ83wMVYKrfiT1PDdCLqUdzhRQwd7oqr138WVY4LCfXVu14",
  "key34": "2bjkjyVrwoScM85kv1bV7t8kABYCCV2KRGHesjR3kKGqHxwmV3RzVe9zExKBXLVjuCVGwDqjSKvkF2JoDiKRN3Dn",
  "key35": "3Uk2g5mtcQRTLCcDfRMVJPHBh4aA1hiSnKVC2ueLs4GgaV59aocUv7uibyvnhE88mk5RXL9SJhoW3bixqC9r4PqC",
  "key36": "2wXbmCGHo8mnWFFiFgXX6ieQ2e5F7hq8pcMHEEtxRQ7PFxCpUcZvgBZCkLvBVDRGNrMLAn5Xaz6rEk55CrdGdGZe",
  "key37": "43e8hqA1vu9B4isAZAHWsAyRLmLUpS3UxxQcU4G52jPoGoGecbZ62cseV63LwSKwxCvo8wULHVHrxCMqyAarNZt8",
  "key38": "2TqTpJDJMtGSWoz7PWNnZ96PNroNQH4BbmtvMogsszxmxomDozujJNGgvwADqBHtrGyM7R9viLaT2hUwiuF8isn3",
  "key39": "4pUL2P1nWJx2fJmAzV2ZhFKpG7jhowtCM2MQpE6dh9918kM9rBBCaYC8hYzcqRaoBBv5SGkMqniieEMEpjLTVxTa",
  "key40": "4keWs3ab1mKC1jfRseqHWeM3HhAF5UqGYFb5nHtWSeRzS9nZ52ypFmg4kgTvLvYBzRwNzx322s778WAzxDUXHqv4"
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
