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
    "4tkZPRuQYjnLJM41rdX6kCTGKHNxayR8ewx5qUpKm4F8q8qpn8qdzRjRKmxyGz2qWYzuWnV7wqgGVfP68jMGq7KD"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "VUm28ELaARnUEZD7DnZn2wZ7jBCz7TdbnBfWd4aZ62G1QQdfQVsy9uriBU9RscCNX6oJsGQ7uaStfekSWfhgg97",
  "key1": "64gkbth57k68q8r8XUCDyYmxenPDi84LrBqJVWGc5WoHkUCuqD5HS36239c6C8M3S5piuYP6FvHjAjYc2PrsQd3D",
  "key2": "3qyAzm6FiaSKkxKg62RgNNrjLVekNqMygucg89uFs1tfo6wSA8KkKbZrVNVLW5FjfsMWCJAXXXyhtjyJ3vw7YAmv",
  "key3": "5JNBPmGFhSnx6W9mh99cMCY9pBtxYWBzDXQ1SNzsPAK7UNtLET62NRFaoqokrJfpPQkSk7dTpCEApSARUySFkcxU",
  "key4": "phq7Veef4q9BVodhu3b6rJrBfZ3Sg3iJJYjZx3Dhd5j4pu4mra9Jqu2ckxh3sASLwMUEttHeo3PHZ2GMpXMwWfn",
  "key5": "2Ni1qqqTAph6T92x4mvZgTnNEqCSRD8M2MARDaJfaZRTcftiYpcivMJt2wzfkZSwq33dyWYcVuwVdMqDnCMqKp2L",
  "key6": "2f2bHYJGmyjJePmNKtvCDsBwDxprkduD3BD3DfwLVY4oC4zaG7rqbUS11aFcguLpkMxAP6MZdM6AVpP1GXWWTRUL",
  "key7": "3ZdRq1A1gazDR29Bcxxhr28K2cVKWP4rGrpZPQqbG6ERx5jgWr6nfme7EnTs5ynQFqBwspKSUT5U8nzRnLLL95VU",
  "key8": "5iZi1YEU9u49bMnAuYmjcFpBBjbHQC62Le8f3sLGLR5appTuKx5QqsdYfcVdsNQQ6xXrwcW9WH22GXVbLgMyi383",
  "key9": "3E9juYyv1qTA5TEyCukJTSSasSe2hxo3XRN6TEKHPvADs9cJQu68NMihjDMuVXLo3quQj6dT2p3fD28MaNogLAii",
  "key10": "3aPU4PrUJetZ78s5M9pmdBPuLq9LZg1YQQ8jeWYZNn3S6fMbeSAREdsdMKYYswFDchhNnF7SzzQEbrfFCXBeWNzQ",
  "key11": "AyJKBn7J4X744ZMEaSPwcHadCPdtQ3J5dnZAzo1PkNyibRafK7sth3n1uJH1SrMC2S3KJB1QtgvsWtpUNKB2mZN",
  "key12": "4ELzRKnPsPMShMwG9CB9znQ88B8kNoZnwZXBnTdJ5HA7YPPqwsBG7TmdFTBXyfWWWygAvcT7eP77ioWgcBiRxw3o",
  "key13": "2yu9eZdF8GPDTLpd7r65qD1iEK1iUxKyKUvbHyvvCz5Y1wjWAv4pdHUe1EVHdJAdMLDWFvxNGGyey8qazxrR5SAy",
  "key14": "3n7skoCJb3CkitLspJctjXPyR2CmfHdg7jangafYXupNGw3Nq6hGcpvC9xSEnpibY5DE2GBgYJxD2RWk8uhceCwz",
  "key15": "GNiKgor5vutANrdhw1uG3o4Hetod1EPMfnQBo5dS6UXdisnbG3smp9sdHsHCQmx4EjptiECEnBATjvxpfzrrh2L",
  "key16": "4g4acEwfkaTq3qpzFUG6GY3fS7ihDhET3ZwEgYG37kVwztPyrMb7sQQcHdYQ4r1VyFVNLg1jUC1283QugFybhyNY",
  "key17": "3jFttHWtWKGKPHuRCPDq95RSRoYR2j8zA9SporWyBLeAwh1gXZoL568EAgr8e7DPCPPbGtPPxTTCtk56EcVVtyDs",
  "key18": "hjK2hiANNC26Mk72zVZNAxwDK6AzYanvtcsSBpRJZAua3WubQhdZfbEHndtZxDX5nxJTS1sr6Dp4n9EsKqW7mpc",
  "key19": "4vh5QesnF75F8Qq8x7pwro7SibsBrPz3Y31biE4mz2fw87AP8uFGW59jDSa487vK37L3EQaK4Y1MrihiS9fLPzVM",
  "key20": "2fC7erd6LxVUWkhBQvFMuNUZV5PBWunXMPumokbFujoEUJahRcsStvoaSksHZFSZnshimXAxWBzFdHhitEorsHew",
  "key21": "2GSQBNsT3jPFySrpiQoxGjcseCJeVkkrPaJFCiD6f2nXcWs4vUgWeyjAR1xNwJiLUDiMfb341Dhhre1QEHM4pQrQ",
  "key22": "5afneVw5nPFggRGq2DcsvJ5KsXKScKUwvg7vtnFDjoFLT5KgE73vtN3HECdD1Y6vrSQGALvMAcFJztmasugp9HNj",
  "key23": "xG8o1teJPAXVtERLhBfWMwpDqhQSYXhhvJR3UzM8bUKbop6sUFc3yP9G24WMDVWpGSwRjRQDaMLNeYBgkWcqL8T",
  "key24": "3thaVsLV66KiXmikJWwh2hoZTqQSgKUDDs7C44e8L9WS7GMTZHZ1BjtqGfo1m5QTxDqVd5rZsHqXoQnrM4J6Vomd",
  "key25": "3vdhHwcnWzHmygGmCVYxmGsAWxGm6ZK6iJHpMgivcjejxjPc5nVWkERSGsa38zk1XZjeZNtjCow2DBLfy2Xi4PCc",
  "key26": "3LRoNHs8mKP8J62VBsd3abmzdHRVnT348YahMEZBiH4DBAHh8BKUaAtCqgFANjxAA1bgt2FVw1FRRkVEwefAMwA4",
  "key27": "2MiD9Sbg6ZqUcsr3v6r9vHyJBqJUBzn4hrEgwGDBt1orvcT6fKKc4cL5bTUX46FAsHC32rrQuEDfyvV9vpuzLYE6",
  "key28": "4XXA8RXTAKF9P8VQmgFtq2H2bkCobtbkwFscZ6LYiGmYyu9BVuGJr6h2u61dqmtixiBVuxoHazt32b8jyRhV4JK",
  "key29": "2pYmZCAhjAKNG6vKXjVVnoqm6EvFz7MxeP7YqpCsbQosP7ZRuUSqcVLGcxk4fR3pJr9a1syBpaAbRkAmntiDAC6L",
  "key30": "53uRxCMhCvFPywrVdpX8uVKqMzm2oJZx9vZ6rK958k5B12AczDYN1XY2RusYmToGRtLYTxyXRFoNEXdJusocAyHh",
  "key31": "5Kip6irdHwmiifFbEAT3N8cX4ou8hPccdLukztDHYovUhjsnVKTuZYHJPKDhcPuyaRRK13dv9Sv3VLNrzSNuuCWn",
  "key32": "L6BB51dkWTKWbkT7TctMLnxCPVjsxukcSd8CByZQmFxVPgFCADEiiie5fi63x6hhH9YkpD7ciFEj9ZYuzSTpFha",
  "key33": "2G672SK8mhtE7fgRaerZ8kE7H9kdzWxMB7DYans7aAT5uZYEywsmH2ps6ijrJVP9QwufppKGmwWKWTusnPHGNyYf",
  "key34": "2jE1Wfu7x1ppoo5vB2w3ACTS3nEoHuf8UEGKHu9H9989c2gj1xQ2oYehzjoLeNURbW9Aa9mzATQBgFATdBw18g7y",
  "key35": "2dHYtUkvAxbdDyBhkSYgtAkY7T9BN7GUEs65JG5h785kw8CDi6LU42yEJHr1cbDnLYgqqYKTHyZN7iX2ts8VAajH",
  "key36": "4KfQf89stwDxdgF8dB7GvKnyrPdo6eCtpuuaSkCFE1gupX6a3KxAS51y7PiPhaUVA9saSW4rW2dmeMLz99Jqv2mU",
  "key37": "25PFSWdkqkRPn98Ag8ktoRbNikpEgdNKmAWuk7VEifSuJH83TSi9VjW7KnnimXLPxuUJFmYQCYfVXrzicES9M9sr",
  "key38": "5n7Dc6PZ6RYFoDAfNgTcQeFqgtR4L9CG9ukThAFmzPbh41T4Ra4MDkvoiyQRwuFS4K4SbDhpeWpNkfS2hLeAU5T8",
  "key39": "5atZY23EkqbdQef3RurL1vRnbvi3keGH6nec3DigFcjRKv4g4fS1dBGd1Gx9744gpqMzwxPbPQwM7eV44th27xQa",
  "key40": "5MoT7Bh7mhiMCgV11zMvm3RSy2sfLTJv9E2R5Pq6cnA3B1o9ervatCgqzcB1vA1heoACasHRisHLM4EaHLLSUWQo",
  "key41": "YKMxhsTWYV3RafzSB36yQmqUyFAWUxt6osPVUeBkMx5Vpy5eGPx4TsU3ncTC7iSZnFLkaHU8cYztSTerDzhMLT9"
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
