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
    "4cFuKmVnwcU7Jin2DNMMU76kcz9SHs6GLLYVemAs1aN3139jfyCgygoixS3fG43sTbymKU5V4j91u48VjTxULnWY"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "RLwgVS2G2DomJfTvGF9CbW5eJFyZNTxYB6toWUsJmybQDnu13zNUhcyEZ7DBzzssreygRbeqHUQSrXZHfNg12Fh",
  "key1": "3wCi1DWQJXCSpwq7W1mj1S19yeMK6LsoocbWLsP4wrEUPrVYYpzRMCCLkaEQ7E4F8v9zPtP5vnFQqK4EvPGVEUfo",
  "key2": "5tC8PYrtsFogDDw2SofNSPSLcqU9DssuQVZYqdVBTzrR15s1CoHTAUnf2ShNTeXH2TUmoEPXahBMWkYtTXiVYhrT",
  "key3": "5sESxaPZ1gngD2F2KnB9S9mdufiZbNJsZQCYyTeSSs5CifE8SwbtSEa8Y7PqnFhSzTZTnV9HdPMV2KEfujhR9i35",
  "key4": "3zKwHLSdpasC3wK2yze53d7NoUrFKarbPat5DQojZXCW2jpmxWjCkJhNAtAmLQgpgc36bfis518vwKgEqATRTK8a",
  "key5": "25fwV78D5fdzVi2Zn6MvRYAZQcRt36WsD8S4zEiAK9NLct5ZhT5qCD87eeCppwo62N71PkM8BDSmRfN9x6vUeke8",
  "key6": "36xZ1LrKiMjk8RK7USctSqVWxFWU1e8wtHHjjEKM17exYxFzSzg1bnTiBbCYXXpwc1Z196kU3g3iJz2t2SLpwvCo",
  "key7": "5jkGwg6VmJTF2sSvFWfRXxW5yvaG7BxAwq8Vjd5m62dDyZ4JnuNd4MpoBf8b1Gw98yJxQBnbeovrdX8KDj8DJarm",
  "key8": "8b2VsqCBDcN5xiHFDJHu1H678MiX1izgsz578mMGJT43YQYzeXeHSzp96ShfJiQMd5PFH1gUTy3M8oZ7DcYqfjt",
  "key9": "2qP5fHYv5xNJjjRxPj1aZsyjwusjk4SQ3Khnb5oMcTTuwNPRZFcBXYLKPjxg32TKKuTt1AciS2zQUkQ7kaKkJ5JG",
  "key10": "2V5fCmy6iNc2BuT1ZR48TLwPpeiRkUhC4tGKjaPhxbPa8fy2vXHoYr8jMg9MfHUmA8m2CQrRDJdLfFCR5w3q8wSN",
  "key11": "2VvirPVWMyR4daZxGSbU98hzfFwpGAqeHihqKPWmhSbHU1DAGepDT2Po9FRCoffPdnXEQLU2kijfNykTZTHEWpdd",
  "key12": "4T4VQ2QQGUDyVzwG1Mw1ef7gQVTYJZ4Gsx5Vmf4Fre8ngYKBPcBVa9k3XJvs9FgCmcCikWfqrw9eG257uyUo9Cos",
  "key13": "3dn47Z4JPfa573GJqYv8rhF77dzZMGTJqZPiaAF1PoszZWBGXKFDaJ96XgMPubqXki64gGzi1XEn2mbHrycyGTWu",
  "key14": "66YNZnrKHZrsJtLCtRWLVrvCtWruwsJet4Xx8uiFctwKaAnhy17uiFXk9k1vgKoHRNxbJv2Rua75GLLzeYXYqpv4",
  "key15": "d5ga9YC2Q777re16rRZkPimta4ZyFM74EqZtFGp32HNpERyf8c1kmziUkNZ3S6q93BZE8gX8L1REbetNc7s1FEM",
  "key16": "2QAd4b5UJsy2ovcrhMosD1Nu9ojPBVTtBB8CZH3FMJvXBwBgGsSHEE1Xusg5TNNs2PYYenNqcdUJ485DQyPkQvfK",
  "key17": "26nRb6BFhCHQhPvigQwCk8e1kKonuQhcKtRveEnrWXKEC2XvMTR21jER6oEK6x7wpozjKresxKL3TCcnVgZbTQKg",
  "key18": "4ALVUxGw5aRy2WB74ZyAza6DGYMKzzXnLHrfvecRZpRM7CtCFoZnpjWVAY13BsF1xGTMG8M3cyaMzE6nJK7oJBia",
  "key19": "2QiwJ1ywjuCXXu38yieit27cfukAYmXHaJAHWgBojLN6YSGfscesUWtQESMsqZ9tt4up7Mf3sGGdRG6KERDXGoy5",
  "key20": "5GpjrNmiDbjepmXvXsVcqALG6KTb3zDQDeeeeUQeMzVFchcL6grkTU2JTpDcSowedUJq6EYebxesHfJBaMtzXVGJ",
  "key21": "4NvHX9XVuRtTshq5jN7oVH1gtJX4h1yxbK1BRAjKopAUoTjhRsYKS7MSXdfdpRPZnjZ62BwtkjFcLEq1LvEc6gMt",
  "key22": "5auLpzHnvRFaDsxd9JyXaPmx6Yv5pUvtW741Z2HjbddU63NbSUmG2JWnRs7QtDkyXVj7wu8azNTp6kt9AkDRURd5",
  "key23": "2Mwr5ey9k9YBqMmzPFT8UugnBSEm1vp6uqHFKHsJhxpyH6nNfS8Jctt8aqQR3Et8jZMgX4cvwk3uLRPbXmsnGmf5",
  "key24": "NGXQzquESWG2kA38GN3dP1wp39P8oP5tvGzLLHcByecSCLLykx9Tn5ei24Ch6uBuPB1iFaoGuNmP6FimJnjKBXP",
  "key25": "2JuSA9pqdQXf4oNTQj9KuikBsBC5jSa9AkzPGCSDTBccMBRsFnVwCjdADNByQNRHWW5AofqKMtfU6Kw9LrqLH7sk",
  "key26": "2kStR3enyft2yStJvHrpw9RaRzawv3PgeR6DFAXsDr42Pjn3y57LiozFRpTsRrtcryaZuUWHsm8ghS1YL3EoMD6Z",
  "key27": "5uwLDrA9qPs77LpKY2G1vYDUw3anZhQfXWUAvnPbMiBj2tcR1JKQ4SxAXnrmx8zgeevGmCy7jaPyvyoqZ82AcmVJ",
  "key28": "58VAgBnosMKJBADzTo6wNtz5YDXRxUAFGYF8jrhAGAHcTdoFdGMEQ5hynhPe4i9onyuo53d7nNNa2Xzh4AiMxXnN",
  "key29": "2zkpiwyUY3tWoEtnZ8Cs5YzbQK9k5Jy7Me4nqxgcPETygVWUADV6B7AQpLfUDyL66NGSiWX3U1HL8K7zTUhZ4KN3",
  "key30": "4ei977Esi4qBSJ8YKk9K8SmjhWPX7preSEacMzhGxk3Lp5KjQ3byp9XgYphmdwE6ZCU6m9XDpMrVkkjFGV5vKSaj",
  "key31": "nM6qSSaR4EbSo5LqwmixrtLDGw1Wwvy9rTGcXYxxsucuJR9sgrhLkN4gRYgbQ64xUryMfvYEASkmvUDLy3FwDgL",
  "key32": "4hGj5ga2FVMHWzvcF4fg3ECjFYX4xQacDY1sBaMsBHPmzqTnetn6PAawQ69NS9RkL4VKmLm5mUjuwun52M9BjZHm",
  "key33": "4i6XQLMBwHSN2Sktbkdh5em5sZeX6i24mEfzRuoyKC6Kc6oEmApUU1CkHVGeyXpfboQ4cCPzWg3GruEahiEjBrN2"
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
