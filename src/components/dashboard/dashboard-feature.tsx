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
    "4id1NYkBcS7xbUbENrE259kuAUX5DSewFaAbSt71ZBwm7Q9WSuYNN5cRPxW2zHBJmWDRj5P8hyBdxzgPFpuqjkpZ"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "36QB3XaduR1DyMBBpAFzPV3WUdpijsG5anrvZvASnqQQvsyXbRzC3YftYHf2nADh62JnWbj5zrG8kjvzJikvGHNq",
  "key1": "2AhEKaYV7gCAGcVLuMTa9E4ZENYRcdbgRxobiVrQkk7RMkySELVzgPM6mkMjC2Tui7759EkyMWSzyGgq6kXL7tRs",
  "key2": "5k7dt9EBtUKshGLGcdcdfvLmgdK9aFaL3zuE87pFh4q6YiPhNiaRW1KqgbakXaAVXGSF5K5jMRTtCUMGyLcsAexS",
  "key3": "62PVZYW8wKeWnzqGmfpkGnAhfGN1CRvx94TrBeCw2fKuuyxCbsgRiHkrHiZ76SEo18oUfFjT9ZCYknb8XaWDNq5d",
  "key4": "vzdYFq7r5mkFzLApVT3uwDkj13en3QufqzatWm3MuQKrMfGt623fVemMi39NFKQJpj8QYXddNPn1wdKe1kUSKZP",
  "key5": "2YPtHBWPz2U2BLoyE8mRLjueb9daYsoq8SkVZC5VvrkERvUcm45GcBrMNqSGCw16uFiKdLgeRCZ9hCUt4Xz914SY",
  "key6": "biBXYbguHPUq7Gijyk9o95MFsrYxPMm5U8wzUydkGuLBCB8q5AwbPYGUnDhCNgpapURWMTs7zE7L89LugkuQoh8",
  "key7": "JTcMDrg1H2FvT74ux9b6QAuQZnv8bLkTMrmX9W3ePRVPtvTfm7VU47PLUh4jAMntAPh6XkvaRm5cRTfhiyP5QRf",
  "key8": "4V7briXwPjCvS8ChyGTQJR1VJREfPntZm5nyx73cTNUsCgvaBWAi2ehyzoXw37423DMzhoToo8SZSLpq9m3xod8f",
  "key9": "56Ehi2AM7VTRSXMPnJ13ZLRouD2adtpovjaSgK7R2jtJY5mnZSEFmim5qUAZe8LtcxxAKBbzaM9cdAm8YqQ3iVhH",
  "key10": "5AKhWw1E9vsTAzxB2ymfqsvnHRNiSVCRq5A4YLzdna1MKqCowVJikwjmdsyNDJtZMwzxxeP2Ds8gfeowEcTnHu9Z",
  "key11": "6naXZgwyAK5feU9v4eFLdEkj4BeNUgfA8KoXystcdzcw32WG1z6C9qjgXjFeRhonCR9idbJJgfHWjTGWYZRqgdp",
  "key12": "5pPBGLqz9vR5K7a9cvW4rGbRGctRxsg2UQ8gSjRMbVmoAoNbPq26ofJrS45tyfUuxSJ1Jaa6edBnSEVeKjVhFCNS",
  "key13": "5ryM8PYtnPXeGRTk6Hb4AbS94FPjPSauwoCHtvofG2W1vsFtgZ4SDsNMdtgVGPpBuphkunP5HjFAqaF44ctarEX6",
  "key14": "2Dt8LMp4sxkhex5Lm6sX4c1D5wMMuc3n5i4pvijPvkiMGMwCshLKPM4UBwYMKeDSrQQKsycQ3c393Qe3We2ZMnXT",
  "key15": "bMcgpmNT63C3773qrmFjjYCFDFiiWphWb5QeEn3ca92poJfmJwdJnaE2hth2xTxtjm7Rjc8SsUxMCuV9i5HakaK",
  "key16": "iv63aY8EBgbWaW85oPFaRQp3eQVfDNVuSwH5Rh6zQfDQ6CZH8Upa1rKbZUZtXPf2odHAE8H2ctRxM4Hn4WP6egC",
  "key17": "4uG2fhnwz2RX19LJNny4BrLPAjKPYwdv4PQh2gW2LdpNNg3GRfkLA8doyj1Uayj3o6GnGrrC2rB1YQnE1Bf3QoLZ",
  "key18": "4ruE4B8UFpKB21jYooWFQ7HCjPc92BBTjUjj6SJ4Pv3usYx7xEPQv9Va4eqsHBfx8JFUeFhhXyvS9TJ4n6YiqyCK",
  "key19": "3ZbaY1RWCViVkqt6wiVedN4yozHcZcSE7WFh5fSRNjLpoDeWutQdEQdKcKJmNfzzq49i2LzwUDbG5iDttsv7HgZV",
  "key20": "Cb1AYfAWGjVHdShYXR2uQgTwdcrtF1jVApMsk7C8trZespg6hwWPu57m97ANd46g4LnZx4a1W8UhVBRTQmUp6Bp",
  "key21": "5j5ZnDugUbfpHRDGSFpvuiTkppnxgKAaMVtdDbooLoMHyJ2JanMohC2vmyvzjbYWhrvbhj9yPyUZE7BchyPcxKLM",
  "key22": "14yBrBJpiBiFiU7yj1PxReCT1p9rWkCeGzwvEd7qGeBHSbLM29SWTgWdeSFKi9fkFNM8LRQsvtZUBL4PQ2sdSJn",
  "key23": "5qTxte4R8Sw6M2nWKYo69iWUuFdm8wnJmiQ6fQyAEcVcJDBs9XzWu8FE6jV2ZMCPVjJGUs85G1QTLLPW9s3iajcA",
  "key24": "3CaZxc9t6Bu2qvCqviHgDKZqXN9keM5vmygncxRdhck44didG4M9sRgnhyYXQ9beZCvkR3syFRkqZvDGhoktGPeH",
  "key25": "4Q3qxm1Z3eYCdMyDF93Caor5KymW6h86ZjWA1jz5ELBzAn3s4uWq1HUufLJsobbFqEKXaM999DVxNKgTkKYGU7sT",
  "key26": "3ivVy3JLBW2AyTW6dh1fCr3VMUxv9hGmKq36ZxiQzGpkc6wpWrr959kXr3WYr3QxK4yHfS8RE4LiA9V5JeZLSHvm",
  "key27": "2TVBuYa6cgofAcBhAYLQ7LsZ5JQGYJh3GUTn3fYNPbkguRzCa4r4cY16byeZcc4PyxAETfcqhLjxZhN9AN3aA3dy",
  "key28": "41G2RyPpHQcimkpGh3pSAgdcub7tsjAYQ11NVtaYUtUAbQx1fq6QBuB5To6AYyA7hcnwnvWZjPjHnPaypqmKD8Mo",
  "key29": "5v94mzPRm1YKHie3ZLL1CmLUBEQBTRLmppWiUrmWjj7rT4DpTDzg5bFPmhWmJic1FSvKgoiubG1hZwiWSuYaPLC5",
  "key30": "4BgBPiR8ZHW4vorP9tHc3Pu2DMnjVEKnEdEiGAXL7gJ3qdsDg3DRW1N2uhkXx7T3VbsisN1F6scnEnkJr8Jhd5bM",
  "key31": "2bgTzRxBw51owZPncEpsEEocAQ82koWvSVWd1qn2djmkAmmamut8SUQaWMdUhYTtbseVgg1ZvnLvS4ocsxwtYws8",
  "key32": "2G7ED78h3TzUESF147NvwoT7Po9rg8WZ6maWFSNVatpRGYrH48BvjW1fPkABRgyiQeZhfFcT9CxNAcrZ5tUfAA53",
  "key33": "52ZkesfGiEpFuFmwwpY2faQgZRL7n2vRPnaT176QzC227e4qmxwjYwpur9rAs7weM5T5GN2bJMU4nwJxFfLJD5xs",
  "key34": "65mkaZHechBj5uXG5jzMYDZ3XsqaHps8xQuDrn5uUQkXjWxK1JH8N5nAhe4ugGLDhDqz2exyN5ptU6PXipzG3L3j",
  "key35": "2nmicThQMhPRaXUWN1Bi7EnvWvCcXRx9YRFpbGkucg7Gvo2bDGVQeptA3by3ASzk9eZguf4DWfoPCMaNtUzQjkUM",
  "key36": "JmSzFPTR2nCiqBpZpqE2spGoEEv1FYYmwTuFyNvsWyKKWiJEX4Vr3PszdcUCUqFYS11Mdk5HNJYfyJZxQHshAnU",
  "key37": "27wudKjseheJZvhYwXWKQ5uMtasJtcjgPzSrob5DHSGngf2Ptc7rRAekdBaAMFqGgP1Ctcdq7reUdcXfNYHGySaU",
  "key38": "4jqZxcW3PPCpS6hqW3PYzBjchBs6GmASJhYFyj42DRsgKJgiTNhzxcssxpFHzZ9UDvFCvJDS1jcFKPsuquJKLYV6",
  "key39": "3Lv7Ny2nVXr1zRW5MeyzGM9iUoNhuXSv5rUajeNXKiuKPJMHTXoTFhMmT2Sm2CDZKcYdM1FXzANjXVzW59ZKLtY"
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
