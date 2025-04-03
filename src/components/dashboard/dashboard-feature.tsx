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
    "2e1fptBCWQXk1epUr7t6kBE9bfPw1XratJXUNLsw7YRiTF7xCu783b2huyMFxTjZfqBhCgujgA5dBmXPymvg9ArV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "4ABW4KUnaSGXcoEUjUdofi3anXhMpyKFJ9UVUuGeyNkUYEM2g8HUvTE9UGAynXMX8ARkD4DSQn3PXuqMqUdy9pEj",
  "key1": "4aoPPp24CreMBX2j7qv58EhnjKdQuNepiuapcSyDFDHAtX6rY9BQ9ntnUSyqDAavcywHhwdvDJEw9B7gNu3R6ibH",
  "key2": "5beAtTJezTUntqr5GtgmmHGgPcMC7GwF3fDLBQjpysTKYjR9aXRP6urQPFwht47fU4m21kaxH7CAR3k9Ko8h3goP",
  "key3": "27XK3aAqri7jv8SR7VE4tno1g3JWe91aUf15XP6aJoKSSFeEYePa4sbQeno1CKUooHj1y37yzvqwPVjupEg7qDPQ",
  "key4": "5aj7VXkUBDpfoH1uRRDGX5QMiM1GQcroRfW85Vm53eNnZCFKAAtEHjhNTwpyzrwWnVXzsCAXv3DwFQwund6pAywu",
  "key5": "3xTrmr2C4f1TjAb2j5SMWqjJcSCAdR28AJJCQTJCA7iM9jK8AyiZGTPsffzpSZ6UqzFCurzWoqs77t2h3weL7zUt",
  "key6": "2987AJUuRV4m5BvLSSbF398Gm4QRpvSfbfAJpW2SQZ6g9ke896SjPuYyWJDVKmNd9WUiSox5po5hhQhHUqqv5LZC",
  "key7": "LPKDZCW5iVprDuojWSWeLjwRLEUPpAh4KqFqhdQErP4Qe2CtLwBfM54kAB5vsQnJStzwPEPQymwpfpVt22QyRLi",
  "key8": "3yWH9b2pzMmtTX67GA6PG8c2r2rxsE6LCxBwy44yRfUET9s3JtYhcAxBGKbY75TEV687rFZeQ348R3bQaftkT1cF",
  "key9": "57GqdYV8T3Bo6LDH5pcP9Dq5jmLPZ1ahYShAYsXMVsTAVVgJmD4bsGDFKegd4VjGKS2t4mymqnVJGFb9xch51nxJ",
  "key10": "3BHrdBN4UcwdSXZecv24SPdRHt16894jTmJqsVhc4MG7jWhnff2YzttquqtR4JLLCq6sPpqjBSjNoNNb9NXd9qFa",
  "key11": "5ar7ZeaJTKFod1zB1dqqAg4GeXmGzK92fPshwpRr4hb33fVELvyFDRuWZxSswLGYbinK9vV4MAto3furbhcE1LBu",
  "key12": "kq7EtFmegwwp1dEwjZpdPNotEG76HtFRaCBSCGirjSRiygputBv3NG9WEEkusUy9SXbiyDnDrDkCWKk341Hj5sb",
  "key13": "c9sGxXJqnvaK7LGRQXcv5daWo2CpQkJjhrBSFvcaFgXXPwC2xi65LRkh7FJD9jgeWCCLVpTJSpkSm27SBK1dpMp",
  "key14": "5ma7Cacr5Sdtaa7EgAXGNPzTrgcC1a9jC3J6DD5RmrFEAeSLfJu8osy3RxhzhaEEEhvefAKuoV2vDAvawrJ1Bbf1",
  "key15": "3JsjoSAWjdLX8pzYfLpXqA4gH4wkT8DZnbMpr6TnF1wBG7hqUGdUU4aej81Gj6EMA17bZabhHVhPWUMLpoFU4YCd",
  "key16": "3yS4AatZjhjSdSLpzSKBnFUphgjv8tAmYhwjRcDx6xmjLeU29oRLUTZFPFgKufMmaez7KoVEFFwyoSKe39QM26dr",
  "key17": "4gVKvSeDHnfxUdouTsC9ri6LvSY4cFfQ6R3wziDAu3o45Jve8U6bKjzWSfkTs1vehLWXcfUfkNtSj4UMFy7UiVco",
  "key18": "ECxz2JbqnnY7jencxwz2AXL4stJcXCnE7p738sGYg8cHNSDejcA5NgZUYArFfLmzZn26SPhxdc8vJGWbhkbQL69",
  "key19": "2jtwh8xTeq8343QZ1FgFnX7FL5wmxkq3JzU883FBqrALXTwSCNKRW8mtKVvA5HDwJKyfwB7wPN8PmUjn147LAcdo",
  "key20": "ZEqgC9mRiPpqEn2LEcdnsA3ZLe6gd9dU499gU3dzJKdrpfrvmzBBQfSAgcf5mtdE11GBXbWmmbKKT3PxaYCwzwB",
  "key21": "5Bf3joeSkezBkB4KUKXWcnfw5BdH9qzm1EzEkvCsd1GGDFgxu6QFVmKDyoBaUFaNrrzFRsszT7vMDUQ4EjYzkGDG",
  "key22": "34F7iedDDbcNsX38Jbp9ubCGbMvA9c4ow39ShqxyqESsUUiV6v2ACudLB7Q8m44YwS2xKPXWuyDR8h8UMC4PxLEH",
  "key23": "2FPGmFUHUNUsr1z1raUafTaKvHdUamGoij3RSoAc4g9AHHyGjWaTFYkX4AgNwyVwcCRtRfQyrapyWrUf4oGoAza2",
  "key24": "2vurri4rEHFyQSph1iquL6ow8sbijeFkB7D4duChf7HUoKXtgeCQW28NP1VUuFXxAg6gMeiZ7ZnqFhaoWuh26n54",
  "key25": "3qN1k4ckavvaMKFRzPdfVzZR8KbBQoUMmKMWo4Za3bgjtCQfGmRFcyBPTeRiRwnJn1MdAHVVk23u4etMCvRHo8YY",
  "key26": "4eYDsnZuiJ4VvvRZUTF4MqXScdKZFkPU7SDp3NLC27EgAkE8hoFRHoLYK6EDyRzbYMmtePezeAezxowzqpXGSw3Q",
  "key27": "5KSGh9ZJAkgzYTR4VQqx8rGyZMFSzEUaaVPm9hLSh2uGhPvSsD4tNBesg73Y3AydbSR3udGFuyiis7MUjG936yB1",
  "key28": "4urNixs5kxdNpuHVGQgqWZmaX4x66jAMbQ8qf34USMYb2ak9x2A6q3YQQAF9wkhSYfc82Vo1gaUQGRkowvka6xrh",
  "key29": "5VhkcGfa6YThZEqEFqjk9rPyc6RJfDTHdP7M8wq1tPtbP2apTSqUPYuP8ZGVdpUp3hM8Sdtt19HmFQ2wimSvaSkQ",
  "key30": "4ht3hTv8yxVU8wC6AFonQcFhfYxhgnz2FMp1Qf4FWmmR5G4dC6a2jLokrhWRJKHvX8EKP6vCn86nGaxxDx4Bm7Uo",
  "key31": "3xDemL4QZzbqQYxE16NbfgDtQ2SwGncLPXr7PzTt96TsexHm6rPtmgpBe4zrCXk6RdA1PuEo4qUsurLWQJfqa5SB",
  "key32": "3D3hY1CBwYamh5usTU28jGgWiCzffVZJC3rkEVCJqNsvKm8SNRKHWDf3meyx1QVdYkWmqQ4i8cwLyFAzk9BWPLP",
  "key33": "3f1d9nUb4mNZ7WD6dx6p8SYGsyZo7eVEqF8v5HZWZnmCuvcsuwmysQpPbumce3foFx6SpefQ2rszsXqffNCMySUH",
  "key34": "XjLPfQswewHLXcxnkbssUshscwuqYHN24ua8oLoFTbCdyacBHE8FCvZRXiTkpsfxCsrfX7joxJpSPu55LkuNZhh",
  "key35": "2N1JaeG6VrpdKwBJLRDubMudD1C2CBKHeeaVtZRWQdo3yaAZhZh8pXfd83gKuRxdihjVsturthA9mvAL5WokcfDD",
  "key36": "4bteyNErxQsKqtrnhbyvRY2vhz8CPQd7PbmK1gmdtz1Twzg1JsFFTvZgVX2XDqaWEz7863vT1Rm5vjHo7cMnYzf",
  "key37": "5STdrKXzB6tS6bZDFBse1pFr6n3r4K5jWPSzou8u621X3Mk6VPs4ttZjoXbJew5R2AhqWNdduHAM1c84D529erB9",
  "key38": "mPSXpKCSVt6nKHJRD4ciHdcWbdDyS2FXsN53BiQWREsHsyY9DGepQcngqMTRv2jvHpq7w81BTWP11BkC1FdtXDU",
  "key39": "57KPKnRY3kVkofyut91XfF3ecbZnoMff9DpwQZkJwREq7psBMKMzCkBwvyxWsVHmNbSts61w6yPggx6dSaijJwfc",
  "key40": "3KcoBRK24sJdnKjt17FmwkasXHykc6eoa1rQkDacw6cgQWaPzuKRCWV7uq78weqkR26GR4YNN9kp5iVacgtyAuzM",
  "key41": "5SLyKQGHBZhgBqRok5jT8XXL6o1zb68i3BKMGh5Q1eXyQF569NaJj1EbXGFAHjKFxMvqhqC38to4cKhGiPxkGZrV"
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
