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
    "2HxEYYA8ooEu5dgUuyzbN2jjiNXCEknfwito4FUbLi6f2g6PfcDAVm1uDYehDYGGHxPpK2pC26vYxAombURuEjQ1"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "tV16YT4zPi5bGC6eB8KiAwSknVgkFRWa25aZyK23T76yyWzVu5PYzYwdgZrJS9mgi6ae1mQmcU772im7Y9Ev31n",
  "key1": "4hCwzZ2aa9DS1Es4DfdEsPncb2cRawGr8Pjp14DHyCMTnBE191JpSBTDMWokGjDT4u45uC2KdbrDjB8Nkivto1Vw",
  "key2": "2cv5Cp1Ayp3WFzpwAxaSdaHvZU5KmWTVpqi5PG287sPrYb6Tiy3GJ2VAUgrDWDo3zMkrnBVcrWjU3DAzDVo5qGjA",
  "key3": "35V1HFKExjtbc8ReTd5PseowBdprKikbMwpxD7oeNZvrqRK3ozvRmjAy2FTe3DXYy91dUoNrdWGD9f5SehczvMPG",
  "key4": "ZCQZcTQ43r3gkHahfneB9y1PzS685hYcBV5CP3ZJt5J4uMHeUuEtY7kc2fxZD8zujuBpAD85qnhWDnw2Ja6FtTy",
  "key5": "xeWquqqQYKdWFAPcuchJCnFWtLJ1fqK7aer1Vs4BfEkEsNpcxX5PMTb5AN9v9FEba4xzvMXdbDkiHYDqw7a8uUM",
  "key6": "HptwMDZzcGPvJoviPTt7wVEeTkV4E5CCW9r1SrXsKv8WWZAeoJyrqQY2kQrhxYiVAmyeHeRboi2Y8S2vzZDB3FQ",
  "key7": "43qF7XSNLFeeQbYPZQYC7utpQyTYCrXaq8nCRTHcnbcoMdM1kwnBztfGDqELmusd5zk6oKa8G9hX98gxi5Ftf4UA",
  "key8": "2MYicTY91skBtMes5Uaf5JM9sGwfCKgkff96T66achs91FYNuABeBSppYtKTqzhr7EjJ4GCeLgNSiVREpMnXujj3",
  "key9": "2UNdWkiixnaYY21MxN5NkKp4ciaKpc6M8EZzug8BX9Sshw1MP8bfi17FxSbtGxFjRmf8S23WRft2Hf59YhYu2NU",
  "key10": "5UDcR9TQPhPCusBhQ2TZ5TKRWpMY1UESsfkQFqKr4anniFKJMC2JFp5X3HrvKEAj7M2EBKMuXSypycwBQzmy58Zq",
  "key11": "4VbnCWUMiTwe1FpyiRXNWpuZuDEowAZtbSLq7gHbWMYmuvAPu9voYjN9NbpfbDnyGHJkCp9s2YsmFX4wQsYCcL6X",
  "key12": "4mwq41rSAm6YVkhMKg7FtEs8bo8PxQfnTRWzNBZXUW4PECkrK3xGv83W29xZ45NZfMBHkz7t6zvTvfkofFDjwT7X",
  "key13": "UEoHTBv9E5symVKcTj3vg1fYCT4CMf5zow2a1BAFVCyUCmAXf2YBNprTKWMoK31eqwpsWnEff3ZpPPReRtWTPLG",
  "key14": "5DuNXYbtg6QVt1oSVBDpL2i22uHX8ATZ6uhx5KpHREjrMTDVib6eBk8QBx3kARvdPAC1ZiH9T4g1rD4seq61HWjs",
  "key15": "fqTBc77wfJk5Dh41B1T8dWvXSQaZH4UqXucJBsr4TBruWrqfPQZA2Yw9HWK6aZ6PBp7ypeSRtwNMUodUrCHofkP",
  "key16": "32QTFnCnCfypjffKX32dLbqyoMb3h5w4dMoGFbvqgMjfhwSbcLuCyVR3Dg9Daz4VCuRChUtxnAP5pQ9Ykr36Qfep",
  "key17": "5gyDjYbHttm6xaTjiLpjWUJhhhLqfMDGrDrK2u8Do7B8FX13Ba5wxTVctATjgfKiRpuNoccEav1kGUphxsUsuyC",
  "key18": "48RwxzyAdyHvkiYN8nCXhj7E9r6oYAxHR7B8YVNr7kcsJE3Azx8Jc1iHoYbtTDZQhEWjW3q5WscsyQ83rGT2WX8V",
  "key19": "2mYvhHW6fSoqMYZBoT95EpPcqoeeHAbtgvKtbR15LLZkMPrUgJ7reHXJPqEgZgvgGs1v1g31gaqSrkGFhivQAi5h",
  "key20": "3PXhdvt5JuknjqH6MVtFjHhbfRHkTJdQR45kfpf3nt8ccdU8wGDj35cTiytrNn3XPBS6RwgeVHoe16mkmWFV3xM4",
  "key21": "tG5yVGeGqJbrv2VG65ZarYN9pELESZ2ZWbc5Y59dkpDY9dZjgLfdp71CV7iBoxj6dPyEcMxvDmq4odBaTKe7PqS",
  "key22": "2w9ZXvYHUFX5abUwDSCa2Tvdt25hpw7gq16UG37LushJgZdCut8wRGVaSweD3AyMPm8c3DJ28sihoaKWTa2wyttK",
  "key23": "47UneTZAmHiiAiR81MAmncrpXHpvbJSKg1sLu2rWF68QsTrdBveeJeV7Si5vDAeDCBfXUXwQKXkjFwoCpC8aeoDK",
  "key24": "2MUU7wHRMPoZid41St2cusK2uNoi7Tv41BwA4UhsFgzBheRZyaiZQBTaQP1VgxMbjJz1dBXxXdMgzsRsSvQGQjjn",
  "key25": "4Bq4r1EHX1n1EYw6CzTP5sYzzmrkWhc8rty3pFMmKf9E2DnMv8sZFit3WyopeS9YHhyVYGeRbwV41Y8gM2BxwoUE",
  "key26": "o5w6eCVJcdHkfhTkwMr6M4xwu1Vn3VuHuHdkmAMR32CbN1Tjyij18a1an5SayhMY2cmEJmaAaxGByJ7dcVzn4T9",
  "key27": "36iTmjutPqybeQeK4GB2Rb2H6rYNhvZDHuSjNTFQseqPEcw2wE94vQNQJ958vnjmmL1GpNQomrDESttRBAhoaDWG",
  "key28": "4mMk8nd4gaAgVYSGSikJgDntPTUaXAB94YpXSmtsy7H3ZmKmrUmUQFAAXHPDw2Ng3F4Qct6fgyVC1cE59tXhQ4qe",
  "key29": "32T67cU5RP6DhYsMz6f93owynZrGmTSEAJGnbrupZV6mmYqkkTPFMKNr6G19hgk9YhQtmAXdzjVbJGyguTcPebRm",
  "key30": "4uwkoeygR5D8Le8UJwanupMDMk4p85mfCMpUyRAkNPZK8CzZhPBfYAwVwnKHAG52raTk8bisDyEKahVedyqEsNze",
  "key31": "3JTWX31H6W25RNL3srHT3qEqerEHXccWmgqnehNg3PuPkD3JeptYr2BZw5S74k8kyprdqhq7gnmBpd6ykSpBeFCc",
  "key32": "64cq6MkVmgJAnKQMGCFjWRrhrZmmvRXKoSCMwBqXnVn1u7og2bmeQAgVWs8VfyCDiPHHyndcW65D72Y1HAKYVKxi",
  "key33": "24mn23sNCEeUoMN55r6cUtTLfZCsRHnLYxqrVk1qQaXLdwnYBksNGnzeeujTfN3iHz2wmijouNy89iGkH2h4cwyi",
  "key34": "4zkMYaTQU8p51SH1cFvSbDKiUYNsMaZmyfFCKGNyyyftGj5Jme8FDHtuxpRxM1ncwr9NN8nv8t128eURLfA4tSRr"
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
