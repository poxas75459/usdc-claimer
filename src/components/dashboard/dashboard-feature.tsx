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
    "44VUZPz9jzPayHr4AYnjcKmkgerjXfg8ePSJ1R6ATEkTQTrvdTvq5mpoTutzi2DWNWEbutdMh7E97xjBhUaRBv1f"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4JwNFT9KvtDMWEohXqeEJ76AaLJcreEhG2pXrGQPMnBRJ9iThjL71AuujA4EyPtdJAwk7dcDensPC9dQJqHTjtuq",
  "key1": "2zPShwqvq7QDCgcuWCWecVGcHKT4YsLbiyVczCNbeTsFfe7VidwwcBGyzmtCVhspaSFdwi86qDcRbfHF4qsVJn3N",
  "key2": "4bs6qMFsZhcTsycHShcqgEJG7YKUqBjbRxJV2RwrrqRiTvv6YbTbs6f6T9b6uSqLjXLU5d7AJbV2Eip9BVURZKw4",
  "key3": "2hCrKRufsfNMGrJvwUjmgaaxuBqWJfaYXWhDQRb5SvXpiMRoske7Hd5MRnGkvRJfufkQYg9ufZrpLiiPLkrkvr5S",
  "key4": "4QoFRpe5QKmxztXvnnCjFrcS7hVaKHKC3BiGPmoiWxjtf1P7sYioKXeDoB1UyLXfNNq4Hv4Tn5yFGZb9DtSLK6Sz",
  "key5": "5VGnA6f4nK25AqyUhYsaAKVFrKPhCgRJvuQDYntNgAvMEEfuGChg8KuAhAZ8cZLjprm1HpPpjSGe5kDG7W3Ss5NE",
  "key6": "3E8syEXWUVYLwrU2NToWr85uaodneDegzjsWUPMLk4RdcGTrttzSeezLa9Fjv8d3984ewSq1WtCrPEcfZtVjdV9E",
  "key7": "3NffA7jGx1xhf7Bwskx5Cp5miW2XTkK4sy8v65BBBxuntmZfVre4WN1rL5THe6Liqr8RpJrGDQiPUPajc5r2sADL",
  "key8": "zgCD7Co5sFuoTRySUDRWzJo8dUqyEUenmKjqNb8EYq2RDptHtsNmr7WoposSBZJurHo9fzkvshzwZAJ4YPt3hFN",
  "key9": "59TL3FLHdF1L4fXiudk5SE256ktQhJanCUHmPz9v9DNJKeDbxRGfrHhWstf8twm6NnPm7rFs8GRWBqnGZoAqZr7z",
  "key10": "4D8Cwp7foEPn8oBKpsHXfvGf5VoNE5NWKr29FVczEYfwrT1P9shcosrwFQhFP3ChSz9Rjrs4WsYzisj87qcc7pXK",
  "key11": "491y1agJmkvnbBR6mdFVabiUjXZwu5ECf9XZpF5oF4FkxpjqiMUTcrCBu4mTqDfpEdsE7MfQK2VM8bxBk1Gd7j88",
  "key12": "24X6jgH9gWPjEzVYaQGwYkkbVnVBXf79n1uKAZYi95SUtYucUDQrxVqKFGqzydPiQjhUCp9a8T5xdeJA7d9dHenf",
  "key13": "AFrvJZPbwRsZvmq3neV1pLMdDrfH1gq4nWYxcnyemNLJDHiS8SZf57QQ3ikN6ZvxTndkENjKqgtYqRZ4ukHrjCU",
  "key14": "4LH6LPVPYUGxJF7Y7cjvARfcbtjQ6iSJKmHgXtXF8okAWB4oBRSF6f2j5ftWkcBB9Mce1kmpReyuADgZyETRf3qE",
  "key15": "2FxnmDkkUNzwegjMSPxzPG75pPGjD45H25CquqEBBwrHJvFsEhvSMGwii46wJPFwS3HscigmJ54YiWxvsJxk9fB1",
  "key16": "2BeQp9E4dGeow1JZenDnVrro1aMHXTGRigUsvfTz2BefxrN1DtTdUes9mtRBQr9XjUY196VkegqwbLNRYbBgUuSX",
  "key17": "5W2KGHe9DE4No8JRjrix636W7vedX3R5GY6Gyk51m6bVRBUMw7ydhoUU59ojrFu8tzyFTyJDeb4waAWvVb3ScpuZ",
  "key18": "5PpHe95AZvg89ECddzXjr9irf6xkFseL9fjTLCph44rJYnYB6WMaaSvwXEvwb6zSF8SDXaFppxc8t3HLGHLtHtSH",
  "key19": "K1whBvQm6TvDyMfWJs5jyKiHyyJvGzTTH8wRSDBdd9NoTbhSyyF9BZk72867RgUTJv8quib6C159b6c1KrriL1Y",
  "key20": "5NAKJB4SV299Q5PM5EoyxEUB6ki3gG9jKGd3LW73b76HDppd6UU4aA2A368LdEdhgJNHHuNQstLVVRT9ouACudgF",
  "key21": "rcLSv6FkHxC9Esiw4LVu9o1A9Y83MS2EgmRmXwgHN8kLfaU2RfoKqeKfWk6SFTQX5mFn3Kk4ic5fiuamznZFxfb",
  "key22": "3FHMr3fAPaHm57die8td2hgMGeAZXe7nVMeRTDBh6PzLqg4g8JC2vRFLjLvpMZfJniGK3Ex9EHd7pEpaBcqxmLiV",
  "key23": "5PssBWWAAq3Z1MwWU5Lora6VTmdwaFJR44wbJi7BReY7EfSZZSUy1mqzbKZzS14kpBRN4iQnymL8hMjmsxftJVny",
  "key24": "qf8heLYL1XTUY47AtEbVZpbyKEzhh2kf8Bumgike93F2PCZp1JMsa5Yb6m7rLzWL7oiKowygDtZTJaXyTgV5Z5S",
  "key25": "JJmukL2b6mZKdGvLg5FwD42zTu17AGYktdbuxEpq95ngtssJVF13yFtsgegbVw7U2TCtaiiM4PGZknZrZ6BW5Cd",
  "key26": "2XGuA6L5PVcYWB87D6WWexXGvg9oUovdr6KwKWDyP915WBXJbQFKnn9XwobMzL29jGhxajXbKzKmFBSauFkoZZ1j",
  "key27": "2DQatoTFkCcvW7B94rfUELWPrsRk5Y8aQAjmemZKMDWjTrMrugXKQ5NA6oWapSsGJ4Mb6JYRfWJpKUQkZAz88sYf",
  "key28": "5JLg2AhsJkgjd7Gt82XrLLrNZmPY9k2i76U4DTkXwVs3N5311kSziqtJCZWX1W7F6aHD5s3sKhbDGYFGGzHHsJQF",
  "key29": "42j4hErdw1C9S7cRip7zgjYa3iSc5k3CmEEsizbJzMt1RguzJUM4NkUkGQKWvE3Ap9inc8Y8TSTDkB46hyBWzdCS",
  "key30": "2sM8jj6B3aZyMLmZ7hBT35L99q9zq3kwwpAQNZ5NYsLtQVtFYMcJdVUnnXFbdgJfdEkUqNb9B9fVTTqADZmm5bWG",
  "key31": "3X5oVL6dscc6ra9baJ4JG6QU3QMhxMsqWfgaaQjSfrWdYd646V3KiRSZNXPAk3YSTyGTnihgvqwZKingtQqA5iho",
  "key32": "3DLpwAS1vPWtug5dMgSwJbagMLSgcBkkfQg8DqwnfekTKGKRN7vCgWDZWuxS7p8vunk92Ft3XV3p7zj9DCW8w6Ko",
  "key33": "1p25c5mcyLjApnKXbziSeVuaRgBibZ9KkkZ2yrN5Y46dwKivEqRfwztuyN7sSs8taVnMizQEvc9abBEBZNwLNdL",
  "key34": "2UyRULeSdDWNfGMihUmaTVu1S7LuQDZ2fi97mktwLjaSqTBFXTrdLai1yDvFmhP3VbZLQe2QK98ZSozjqwbEZCr2",
  "key35": "iV3J4TwrLFPgFSoNqsgDZPfVTFz2vtik3DA1N3XTrN1M8yigGjTrJHXpfR1BBVkzWDk3PNFLycjo7t5s5s4YXFi",
  "key36": "5GiCaLdfZsMLgHLdCmhEmzmrZCUejdRxB6eSyAnVsgP2fspdVTXmanTpEQE9Rom4HGnGLUwj4kTP85kF54iH48rt"
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
