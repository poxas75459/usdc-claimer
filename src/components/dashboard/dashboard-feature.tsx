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
    "4ZEPJKuPiEJ8ePMzUWkq6z2gA39hCadbvCPN1pWm425TxWsJbPCenVK7JAzhzqqeJtuKtCkUDDMG3nsH39AirnHW"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "XT1Ces9J6mw1Ys83rFGjvAfVYbWvGYfMJz99FujefHnPtbLPBrjJBs8MSkwr4wUe1pSM9KjrdMobmusW3pUsX2W",
  "key1": "AJT1EY41xcqJ5MKK1H1ZMw8ookfUXoe6nEzSGzgiygfDxB8YTe4VGJu2gBoeYzSTDRxxiNHRirWMqekqnfwmUvw",
  "key2": "4dtuUcfnZbJDQPbzvaZMQyCrCTxXgswJeXxPnhfGjcmpsiXCH7sLVCLr4ujwGEj8zkGUukVaVvYLUq2tiYPiCNDL",
  "key3": "5q8QF9QkiS9LNTLTKsq8hwGfv1qX24VF7qgQ7fFZ74zAVxtH9jrQTSf7z9zFofpbVC9Ni5fAXmrpvPtH8HUMQRSa",
  "key4": "TQ6bsoNjQo5ypJ2pTt4sjZa9roGtgtt9gTvkrhjH4oo1h76oQsfTHiAgjnuH9VHGFhzSqij4bGv9TFMUyowGXWi",
  "key5": "4iyDo75dX41LVGJMhBaZb62A1meu2BtDZ268BqvjQT8FJg4WU1bGbZixrgHG1P5hahqtTvZ56ckMrVLLXCYfN4uD",
  "key6": "4yRH1KF1skq3oACPaJcMrJNGEfhudEiBeMkCYRnHaDp7SzxfbiTMw26jQfcXCqoFzPbB8aF4LHy9LgzoYiinBFcY",
  "key7": "35BzXGMX1p65bKar18jTV9HVdGYMm1F8aEr34Ucdrppfm5hMDw7uifaxusAC6d2QXrVyK6yu4hhqGHQUt2b4T5Wk",
  "key8": "Pu9nmkq7FvJ6TbFCt12mod57Vpa1MK5LEZJLWMuQQGbJVzNqbT22ZcgesbomyvzBwgdqoRrMXJUjPVotLct1rqg",
  "key9": "5KZyy93gMF67njxdEoQsRTvseR9aA4CBpmVysPzkpdtdGM6z4gMNxJ16ntVBcwoQ8KJBMTyaFdFH88dp3fJcVe12",
  "key10": "3BSBqznBnKj7oHDwfK65QfuFPuz9Bu1cExxkoLfrzdUwS4mNbTVRrAKw5ngUUKFUV8CDEM3RVm2evmzzft893MQk",
  "key11": "4d8NV6QGaM1TK4m4sXZuzF9LFP5Gkk9X8FWLHib7PGQSP4LUpVSza77dXYTqGeMfdUWi291hVHZ57gpDqzB5dexD",
  "key12": "3gwcYMF8M9mKcumuiL5oNxKx2RZaLYV3c2bEQsBXqDPJBCiPTir4JENm84HssdGf5uCgTskMDu2QeEZexERQcbQA",
  "key13": "3PFr7VmwuaCT2CZ4yNTauKNavqUFahtzGZ3yAHW9QgBBAtteEuGB714aE8QDmT9qZnRgauCUaCsGYfqx92jDkYeH",
  "key14": "2yz3Qz7rchN5xysVJ1kSB68rioRz73HHstXhKUihW5CZuj97aCboiK38MTjmqfs8SFGrzrPxShPPGP32jhWuX9J9",
  "key15": "pz1PvfWfCTNvCT3b1zWbbU2RDKyt9kM9MJSMiEjjaum6T9MRUgTEc36ADys6ABAbRAr389JDez7RcEVszmGbQmv",
  "key16": "2cdYv3iQrVqN8JsuY8oHGi21S1jt7MRtEH7cZibjjujNgRpkPB8vy4KNbgtisdbu69tRckFPMB3VPfmTtPpMdBdh",
  "key17": "6WEB52sYAKauVJyy8cMRu77QJzut5PUX95VQzBQDm6kKBPTGU2ombBWo7LEERrXK6s8vXaMyxkz8W8PDRfpEAAi",
  "key18": "5eVQGpZ7mW8USCTDcC2eEWFfYJzifhXSMVheAy3uBCG5NmaGQgSF3gjDKc92rmv7oWc6AmyVkQzU9iBcMgrd7YYY",
  "key19": "58HPRe1KUogoQ37PMyDqYF1msTfgaAfzjnV2h7k6Utfwtd6zVUhprSEt3e9MBWoCbWHNLeQKtDzW3Zu1Q6tfnVCv",
  "key20": "4wbqBs3v92ToetPvbxPnjrnz9Z2HHFYcGweLb5HkAiT8CWASj7QqV4SsmkhBLHjWhcbhcUM7dYMfUkxjfoKNxMeP",
  "key21": "ZBQ6estEx2GZpWyHha5hGETQSk3YWS4H6B4vQgYNEhkpsju9G4p1wZrY7idNH5iL6K24Yvj4u3z7uiCuwDwUJMj",
  "key22": "2PJ4AfWpTiHHfF7MWLVnic5k6g7nrEZsnHjKQVg5d12dSNjY8RDy4tLkVeD4xeVFoQ89AKbm6R82rPFMgpMUudwk",
  "key23": "2cCC2WvnKu8jZCyJpjjaKGwwZWvAv8Vi6YYW8SFtRiNrJUjCbZKqzhXirz1AKah3MvECmzD4rVK5TAyq7LyQEwDj",
  "key24": "49VJkiqPu1uYxnQMgQr5QkQgnzZsJ8Nft3FyDKzCA8WQ38qL8yq6wfMxzbLGf2687kdKLUrCB4qB4dk9Ad1ZX56V",
  "key25": "5iZ9yD2QoouU5kps6zqTAjnTcLb8xEgccWxTqTk77tL2NUucpvNdhiLAguuGfdAWEiai4knTvQ65sPR6PuT4ViS3",
  "key26": "4hZc1UcWqDxwRuwWaE7JZ5r3eiCY51SZxDtndAReYA42BzkVcX37jfjMvn8zx6S8vzqnbM6SQEftd39k4gVU1twe",
  "key27": "2mYEPUHitR8iVnrs2v9TYU8VbapZWegDpjkptVhNVhe7FaRkJksFe2btNdc8U8sbAm9U5u2iYoww9CZiaiAh4cyw",
  "key28": "43bxqjR92abidDe4JqkKAV8K7DZ7qsUUQvpwhUwzfwBw5wGUK7FVdFyHQAmBudyvjn6QWG2q6Mt3jAMABRcZmJBW",
  "key29": "2oG91VRTbefQ3SeKrZ4yr4L3sUmtLJKKinPNHehcKVmyGN9RHb3X81GViN22S8uDTqztGiVvqUHRmj6J4wrRywCh",
  "key30": "48i6tnb3nB1X9jq6bgkM94TrCW2dWDC6p187ApnCcDC5HQMX2xvasKEizyvBx9iSBKmeBZajgJMQu4Ym43dkR4TS",
  "key31": "2zpu47Fh6PCEz63zNGpzLP7Y7Md5KzQjSa4XCYM2FAbJLzyxUUTsHbY4D9UGyLR6PofM2oRhNPpQPdszKBwtHLQU",
  "key32": "3qbTfbht1jj4U4xiwRGW4s8Qy6WaSygeiSTCYSAn5erhPeb7B4LywQYhXnn65PqZKB1ZfCD1us8XePW4qySVowSz",
  "key33": "3NZYB8xSLkrrfAXXaDm7v6dYKj7rtzjJPQFKkPKrHokoqEjpcnoinxKLBpWGvLFgQ27H5Whh9XZ9KXYdyrw58LiX",
  "key34": "mNLEG3s83pLM29JdpmWDuVuJixuCyGSb9p7H2jBdpiD4Hj4Moo1d8RYPtrRCYJxPRPAyCHm8F3P2GBsdkihAyNy",
  "key35": "2K9QFJfinfiwSkqYP78jX37fLZyXSfd37EiawxkF13AJ8tRmoPyhsktKbAZrYHcTx4CTRyNxjxVxxr7B9UXe4z66",
  "key36": "4XhEDd76eieuxFH3TstnZFPn6PZ71dMKZwVdzdFBmoBKfLgF3CNbvnU2cG8dYRN7sHRaxwfiRSDBx9MBLNTajbwQ",
  "key37": "2mFDk6eEtR9Pwr3pfsPaGtbSToyGdfwX8yRMxEboDVA9RhruCUE2LKhFqyAZss1fVLVbWuNCaLm8t21rjRB2eVcC",
  "key38": "3gy3kxwmBTyzD9u1qANnT7BBMGtCE6tPrWeqmXpRg7WeQXpziU8jw5Us2aYg39PYkMqLsYKgAtSDm6SjzfG5wgFT",
  "key39": "48m35Cg1aLDBxu67A9JbP8gn7gx2nHobPk6nt749tusFkujgPNrNgoSeQcMNngkuRLYZoBgYunatycpqXpdFfmj4",
  "key40": "2SFeGPv9pXrDLSfRE7uKHe84LyeXoJ5SFuXJqc5JEDJDDvRof2BMLKkUBmAY5DB7EJUddXBzZfzDCsCysRLV2ioQ",
  "key41": "5a4BkjztXMQzBher92SxrcLXYNgqTGGyyUsizFUAQxyyLFhqoJ1CmmNihqz7yHJMwVsBeZ5smMRj4gEiSN9Yo44q",
  "key42": "5qWZiCLRnU3wMS1A3oKW155TNxUbeKFr8JXCAz7r7QUsfdENq5ZQCnmAzixuDmc7N2yXzx2U7R1Z2b5CBcPgNpya",
  "key43": "5XjE4DnCyn7ADWX43m7xTExXntMQqYr1UhLogbCe69g7SPNPPDxP2NCFUpJJQJtuJhNYSCKfdMyCLMFVHHp9Cjo2",
  "key44": "5CfytDsThFrX1FYt1CgA1eC6kEf3rRRAPbxtfMntT9erncoPTXcp8myY3rqVUHXrS3XuS7FLjTXvcRMhcnevhefn",
  "key45": "4k1Fi592M7FennNmZ9RJqzzfpJRJAQCtHPq1gLwpoXCHYrc2xY1MzbmaVctF5KiosPoPVac8fsmhSbQB5pxkVLbZ"
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
