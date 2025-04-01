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
    "4YWLMiwTKutsgFaUzCMt1oFC9KGVMyAXYzLZzxPMNYfzYyRBsWnTiX8DZutWZSYSaDf6FPFs4vcqLhZofdyCd8h8"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4oXu9HUUrwGnJARRtbW97jKC9bLgiHq5w15kiA9yYGWSHumHaW6AtyeGnYfAQ8wkX5hLfgcq9VAT7S2VDxiPK1EC",
  "key1": "4pnCdKFxzu1qgB1o6fh8ddqJFnSkhtZBPpxVfTZY9JerKHJKQKoXibgnv1Da5kxN4Jc41cn7XZtHbpFP8jh1Ttzn",
  "key2": "5kmtXv7w6mSt1pEeMfvUyD2BaDFw8NDqrAgmBB4eQjqjfoHyZTcWE14rchVqX2PcWd1naSnJYmpTnKqvvWaUcTX8",
  "key3": "3XxvSsx5zYEe7fZyADbsUQBhhcYFRb7L1JwENMghPkD39rJ4dRkuLqxDZitUWdmtJw3VhwHe52Rb1nFnc6pWAhHw",
  "key4": "ZunBbzj9N6paXdQ8u7APfNhxVAdwLGFwNiy5sq2VAfmiAdcS9ztWHVhwB6k52UPBXy66bq8RpBfcHJX1QHUfyeN",
  "key5": "3MUT48Dh4dDvCYPix1ho1QDPVBCQW8FsxsaNGtQP3BPUEPHQKK352FxvMWg8p2jwxP8zXriZeGKB8NX2Y3ZcGmzY",
  "key6": "5HtYHawqoV1abahfh638gsiA2wVtUavJU1YtBm5yMsQjibsgeNH3KFV2fRRLNMJzTNViwAjTkeXm7pJf6Tmrv19W",
  "key7": "4zPoppq8HK6JMWzLnLhgbpymmQ55bb7dmCg1GrGEmpFjJkyuEbUyWJwjLHa3NvtQfvR2oD3gntwXcWPtTSAS18ig",
  "key8": "3kt22u59NkwRF1JSckuDsGAwokYTutYwKmPvZNqB3oVjNJAYSif1CDFU5Nkwz8z8Y2LgpyFCpY8nNc2bsJFzKacX",
  "key9": "4iQokXXecAbGYDAiJR1BT5ivtU7etHXcWWSP5GEBAns4mbtwi1CaDJe5GewQiKBYnNM4DM6DxhmHfjajpHqBw2pm",
  "key10": "3R14HFDBy2yW9x8oivpmJtDwbkXevbMUYGick2xRxe7qBXMnBNSeHvQLszhae51sap696Lt2aE4wREk7DvTeW61U",
  "key11": "651qbGNcR9yyqt54nXpHTv2CN65EbJNsWhoL1QJSYjjHWcBLZjN7bUnfX21td1MAJXP7nz2CtLVKXcjSSRUWxrDT",
  "key12": "AxexAX7QrhfvHR4vbxNmnMtMeZCUAfbjxdn3CsGFAE7tdExAzsMB92heZxg3hub5L6ZpJzsu5LAy1CMQ8SC2o9h",
  "key13": "4VYr4yQDgTZgMxaAqaw9TK3X38JTuX7rrFEABA5VgbgTSyv8yrQ6Aide97bzJDvu34gBeZ9SVXfJUWS65H1iKBku",
  "key14": "3ZEtDkTE9NkR1vg92YVtkJaigfz6xbbq3Rvf5bz7LR6Z5SBnx82XJbHL5wnyVULHcdddwnS1fEcmdnjyLU6Y2NWh",
  "key15": "4bi11m9dLFSqA7sGV6FjkpipSR8dFmsUjVhrxyUZp3gfx8SvRP1PBqvQ1Go4s9P8EHDwcDbgZGM6uazu2njGLeAZ",
  "key16": "5sbWMqJdiykN7SEXXy2TEWvKX9Kv3JBbXzQndF7RFDXB45r2uJedb2qV4pBPdsLJkYBp9UkoSQ4Yus14NSj83vjR",
  "key17": "2jRKuwiGhhcMiBsuYFKw1pxZW5rF6BtHGPK1H2SLtBUhB2ViNcJBMbEcLpKNzyDdZijKJFdhxc1WaYMhNmbWgYXz",
  "key18": "37koohrZgwVKKoq6jDYYb5EbvRNxGrmqzx1VK9Nhh8nEi6nhKWjoXZUygfcmP8Es7dqafk9qussSuD7B9rzC3mBw",
  "key19": "F6DfRk7Aqykv8ASvFWiVt1NGH1fphXKKvksqRMfLbrudrtofF8ZQCDLHn9Sx7byGE81iYR76FzkQQBwuD12APrt",
  "key20": "4NEB5upfGnu49ndw2cohPx7vUWpw1E8FdFtFLYEFngjFuTF8BxG5X92MMjd1ofrEiQmd3npJJhPYGykbHv1He4Hk",
  "key21": "3d7RgyKVCtn9FqRmsH3S9PNmGVCdVnHodUGsYDjF2fWV3KKonQ7FMuHeLG69Sxa5R4mJGzaQmbf5nLA1Rx4NHea7",
  "key22": "4XWMQFNEtXHEH8qCrRC8BeWbzZ1utTRgvLiFJ2aqEYJcwpc9FDUtqbB8n6GXWtDsT2fCyaX9LCs87T2JqVGm5HUf",
  "key23": "hPoBMUFM8S6FHwJfXTq3qmAkcoYPoiKYvpgtGSP5tr8CruM9Ywg58VX38d8n6WS23GSrbFgrGZHD2QueD6j8mPj",
  "key24": "AMEHT1Npr7Qpqa6pGMo6wB5inY2Qtr1MC6QNgXx6VeNssVAXEkJn7qmML9WZhEdMjhQtBu4yAHut4Vp2VUGtbt2",
  "key25": "31hSU39Pht2EiuT2nKfcL43hQ7jiPBZdcPRjdmxNRhKUX7ucKMfDmyGUtxbTLhq3y1gyD4f9ViR8bLdLuCfFhT9i",
  "key26": "4MCTf8qQXHJrfDKvM8ZYoDC5itHLBad6eHScVJfeEKUJEn2imqu43LXpzzr9sxTLPNPd7ritCP8tRtXuFR1cWQk8",
  "key27": "oRfNPpfNFfuPD4tHpNQFC28oJhvYJSKt1aRtz1nz53W4APnuJdpFwajhx6ng89npp2Q3Yn68NPK9LkKVUGeoDmg",
  "key28": "4AuyEiZdWsKBRo7SgFchmmDauSRuP4ZqJZGwCr1mFe3Rn9Vfj1ia7d3puWfPx7361vqbvLJ7xHxDCr3bnDaS3oa",
  "key29": "4nMDJvWmQpp55Uk7uR9kHFEcE7ZS2zGosq7WW6FAVhTn2SDFNgbiPNXCZijNMyGJ2VLWDogoSt1zrR1sVyTD2w6A",
  "key30": "WSwcDEvC1ZzxgXD2tV7tp6zNUydbcJxDfyAUEmkhDsHc8sNREPpQxAwdBnZmPz9TUTqKNfvwtDbVUMuBwqUWZk6",
  "key31": "2VXdear6nqEZ7ooF3BBfaNNemoSB5cUjyjVnAkyzC3jqrxYvUZARPVUy3ftzvfX922b7RPNd2yYtiM2iK2WpkBBb",
  "key32": "2pVc954o1fFeDjth2L3KLxLQoCEQH4Sypfqu4NifFWLT7HoCV1ynGczFnZURvaW88df4XPFeNZDF5J9kQviUKugL",
  "key33": "5W9135LUVNRvewkKP5BkBDHF1YFXcvQwhxQBRvNYZ8weR8J68AActPup47At7HrDTREzXFt7qsQkKcB6rPMGsmt8",
  "key34": "4zB2HR8atQ1ZvTcTd8CKzu1W1EXZFPSfqREQWz7CyXMmRuU9TDRUyxCkXHK7s9Mu9UpwTLu6TfyfEpnCAaVDPuxz"
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
