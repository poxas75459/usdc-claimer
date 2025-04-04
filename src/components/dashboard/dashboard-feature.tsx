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
    "5aLdP9p4jjwBXDvQxMZhPg7R3hM4exBHq6T5TDib2XdhkoM7FjRo7bKfxLD1KZ9VVeheaDwrjzk9nxmX8n3LpiMY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "LZYq2nY856yHaqt6V685VKP8FKt9asjBCA3UWc2zNJtqcAmCRwreboY9D5KmHpMKsBbGe9XhaJhSHXtqLWdrV3G",
  "key1": "2QR4SFBKKNFQScni4D31hFU4GR7xsmNd6MXb2Q61JJ2E9rdcD11Ysx5ykpaeBVXY9K8RZqZSBwLpi7SJcV7C3bqK",
  "key2": "3uyhqNnuKuukkzUuRW8XM1oZ9fK6G2L9WNfzT4apKKwWaJmarFDcMmisBsiCtc4Xb2GdaRdTbEVfUC6Zysu3upaw",
  "key3": "66UZ1w2jMPfeF7rqc6kLx6a3bSDucehzDEj8XNfUoDbZ4s1hVdAvYTEMAwTY73W6k5u7GLDpratwi2ay49jAuJGk",
  "key4": "8DrPMM2Hbp61sjyX7sJp9zGbtaaosBtKaBwm3VgkNHgrqyvq41zXVCwjgjipVrkx2aAfRuc4fkcmhwLgrJhdU2B",
  "key5": "2yT79JvajfYTV9mH5T1EzyQYSQCBTn1qj3we4DSkmajkNarKPC2kJnNGqGf8CRR69nQfhc9QcjtJidL4aqittanN",
  "key6": "39URXSmzPqyjLXggkhuFJdDtmZoWHd7AhZbCEApoUjv6441FRJ6KwwAzF4x1XkdKbfn51KVgf88MXaC7fDVrLnn4",
  "key7": "3FSPUCrZBf1U3eEBaGY3ebezUN6yLZ4BvsyuRRzdf1pBcifKeX51XNdtNW1ftnwZRPGyJEvBwiR2pjyszvWY8eKZ",
  "key8": "54fTcvGJSALEADXLrrTkEzD66UWUwpBtDKZWyF6Zj61d8kuNZcFTLf6TaAQ85pvxLZhd12Sruy3wwJ84FwtqKa5F",
  "key9": "27Mc6UFkCd27UUff3d52AGhTVeWUTCqP3tcqag36XatTP3GtDSzoWJkYk1XUaWPQGYACsXimEzvMxf9z583qcJUS",
  "key10": "33NwaAsZb7WMcSJJEzmqWhhnNwuTY9zmfqZNantq5Ma3RmMaFfFPpTgUyGikrFE6HtusLsqcEfPPqTvuzGQpfS8a",
  "key11": "4o7J3Khkt9hTWXEpabKeThWiDbE83Z7v2QcXPKzAu9hQBUGuqojckgCjLtQCEqgAJDAmbtRExfX2fMW8N6MioNeW",
  "key12": "ANZiHjXqFQAEYBm4jEMoGjWoQfb2DiyFiLnUe78nztWzQaQy1VGGNdWDQX7rZJhJfQdaZbrz7CxWYyWi6Hw2Ghz",
  "key13": "5Ctwm71yoaf2DXjQQEXFA7uqxVE1t79WhwzFRUiHV9VBJ8Dxd8cX37bRGtwEUxCePtQyoZuDBfUMY9FqTYvGecJ3",
  "key14": "5Y5mrF8GYqg8ejSES8wHH9tFJUR4hxXMxyCWx8BSCfoDZqVbcAXdZSR49n9TCitt3eXewhtH1v79Ki8kinU5oSjg",
  "key15": "5Dxb8FuQ3h9JaskEKogDbvUa8zUUTMji2G8vXUVqFFe4uigrhccDsJrVLWgZJeigLaQKgZh95zD4FwCkb8k7r7gP",
  "key16": "5SXizLcUMk5sdgNft2wVT8h8cSs3WgCRBC2S7dddjpM9RWTyAKXsq2y5qYiB3w2WzuD84yZVZ2tqKcrv14d3gAXr",
  "key17": "bao4LLkPpCBPx71GKKjTo7Mu9q6HNSnDsQPGWSkUKr3WbtKsCLJNQMzDhsCu5pL1gmdT1W2effPvsdir33veb1x",
  "key18": "32dhA8gf8jWS6xLBicSRyn9Rb6KNkHzqQcaFD1QdyD4DdpNiv2ZaJm2zqdM5A7kjuUu1uPn7hL737fpszDLYTH8z",
  "key19": "xHFEx7rkauU2KhBKbNc2fkCSukQHthk9dQs32T7tSAPdL3gPDWynPgFa2BG13yGE1LWnUsT3WVAFsLxmJtySwyB",
  "key20": "4xnWLWfFr1V5BTLqcawNZ62uunTsQdvyxzH2ebYLT5uFuKrnNXPVAdcscdqBiD2K48ujyNqveJ1wnAPzE4V8oJiC",
  "key21": "4YU3G7ErB2icMZAeGgYzZiDgwn1iSqPBL7hNavey7bSrDB11zhGwHEBcrrDd2bSXgeSracNWHVihi2JMS7cUhUCP",
  "key22": "4wvZx8LANecaG3dCUtMaF6WvsTtphJ7eQmXfuXk6VSRSvpE5B4gXfpVujhNK33iEQ7Za1MWt6AgFYG5rkiEY6efn",
  "key23": "7e9xbuiufz3xaVCa8pVfmcAGCt3HRSt9tvt9r1QMwigXawnk7SFv3AH1iPqwUtDeSdmhGwkTY5bmaWdrPkpc8Tp",
  "key24": "2y5UMwc731c4HoFn6dCgo68Ue5PKnGQxbtm1P9MVXvnda2bpipD3MLnstPM5MGrBAxPJsxSiV9bvbmbGGQD838rz",
  "key25": "2KnyuTSoQsGVZjJisaB5akyDe8Q4LQyaArWFesxBRFraRFH5gPHT3AscDnbX3KrWqVw51w126XQ5AK89PvA1Fyd7",
  "key26": "2ho4K9EYEKp519j9ZpuNDZ9r9zTST5mDzSUKTH1pjGubgu834JdbX3apc4VyQTBTdNtpnufvYbqoN7jH8S48eGrv",
  "key27": "5ocPNWGwNdcdrFpC39fhZcd45X7r3pXvpy1L7N3EkTYHXKi5VCsKASNLE3GhQrgK281XMZFifSGZkrf6sKjArwoS",
  "key28": "3jxLHgmV1nuL2Ydg26xdj5gvGjY926tgst63oygr6N1Z5vaaf631WtxUmiihA85wvLS9AV1kBKFuFJpBXbudYJSg",
  "key29": "3h7xNgofhz2FUpzeG9KdXTLAYC2jLTNbwN56W2moAgw8ZKJB4KmecQk9WjcpeM6JcjAUnxKZmQqP1pdrgstek1YT",
  "key30": "2asSzhsZiwxVBkhe6L7GJKNaVSULbftghwYZuVghevTde9SR32BRJsH6Ka3T8P4D2dhJmMk2TAMSoDpeKzeCQhhM",
  "key31": "5p1EcMmYQ9LtrqqHYnJiPa7reHmrsdJQQYB8Wnfwx73LzpKPsrSGYMVZEvXy29hAfazYPZivPXCf3mMY6hesdtiM",
  "key32": "2d3PueWnxvUSPR22FuiYKtfvimCJPuYSSV8QDg8xdwQ1PSHgSATKWqJVfzU6B7x1dn3PBsZjZxAedcWj6y6a44xC",
  "key33": "5NGQbUCUbysC3Mygr194Vodv9Gisu1C7hiBwni9FVswwYvQcMj7f4wPAcbrYczFU6pGQNfNBWTZGtmWGigSERZKz",
  "key34": "2j6ouFKuD2rZpuFf8Nr9H1ViZobs1Dug91J5CV676e7bPHe5m3bH2HjdtnevuVNRMvfNxUfkLXH42rG4QQWm9AWr",
  "key35": "4nHGvqQtT3EXrQYSxdp439TZ5CpGaxMDRXhxbSZDqDh9mDokzXKoWeTBCTE2mViWmHfzNhu8rS6w9GbnSEskuBJ1",
  "key36": "NBEnafELE3NvahtkMuB1kKMiAM3HVQveZbiHNU3P6Ea79DGo5CLrHptMuFsZirB9YsmikUAxmSVNVfeVwFJ2Tua",
  "key37": "4TQhPnKEUMrukzCytTtEMFkeK8WCVo6tqCi7UEsFK1wHt8kAHuiYUdL1r7sy6oSLsisZhLtQ1xRjfi7zgoPZHp8w",
  "key38": "oKsphAVscmM2QRGa3tx3ZWxkn8fSEKzDg5Uz6UihzSgSfQcyaUineU4K9FdLw848krDJCoFVJp92ttc6KsfNVD7",
  "key39": "2WaqaRrEfQDDdtoAUw6aPc8cu968QrxR5wxWdNRPrkGLw3fSbftLtJZoLntJqCvPtvNo8GUAYbnNPkhwNnJ4uy2p",
  "key40": "3vZvEskDveWntmr6e8jqponb1iKr4tcoQfACBRf9RQGMKj3Y1T7XuaTjJoWzjG2khsvFr748yXMFfwn2x3gSBuFf",
  "key41": "5b6ty28j4ZZqENamJcNRoQtvuQamydhLmr4Ddy2BMhncHQa9WjhsrTWjPrjWXcTobVgeBmXRqkaWNdCwBF7ctmwe",
  "key42": "oXRF85wfKFb5c98FGkYaBnCWRpRTdGxuwXyLSTSxFETkSqrd5xJcbKLeE9qALxxR5rXryWQDnFB6pf2TTpHSxN8",
  "key43": "39AUNzig5ba7jVh7LnvSUbdAsVbAVQyX4KkvjB35RDsTYyHgYpaEFdmJUTSCMmxQHkpxNHfbsbnsMfoRU4ktJUnB",
  "key44": "2HJSEQAkd7P7swrCohGi4yVEdwNRMEpE4M3E9T5nRPm7uy2vMYiYMP8UeWvHzpcAd5WNvqqtyP3kbR9SVbRAMv31",
  "key45": "3VwfZ6LeeKXtHwghRrxGtRWAugUuVT2BkKQgg911fpf5EfYqmVbJa987fZXGz32xEBBEyVk7gjYbP4xcd828aZbF",
  "key46": "3AJtDnFkXF1VZ5EPiYm9uqFnfUvhZCzuwfLLQERt7jDKb4nesKDW4Lod22Xh2esEdxfqfLTGvS4CoXbYNFBP8V7X",
  "key47": "M8smGCck6mB1QhYKkrcxbRxYwd3xAb7SRr6yyXkMN7x1W2sRq3kx9SZ6k6JRhBuBTtjWznDvrkXkVarjKnBfNCh",
  "key48": "ppypfhhyUkF2pNBBhsgsbseHptGx9T95UrkNRx3m5hYEcWGTgXVGoNtmXXXkMfH9EomdXL2RaydmT5fAAzoS33C",
  "key49": "3xwtdWUDbZ8Rfq4nKXPHcVqk6eUsjnEW6CtwnzWGAW2TZTJfnPLhmwCHm8UkFMiC47kdAHmaXLVHAT4Y68JkHa78"
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
