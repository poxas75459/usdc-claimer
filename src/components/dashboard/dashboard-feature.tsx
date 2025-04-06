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
    "53jSYDWBJFBXWoVrCpiVkKXzrHuxP6jNUMViDiK4E1Bqa7arZqFvmaZgXnknhDm43M2p3ySXYstGF4qHsjWBDVLd"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "dGPemhehwraxLy3XHqjouNw84i8BRGFSKk4yDeqpLQ8UC6kbTcsi5fxxBgPcM8a2AH8BEVhVHQ44L73iDgQKFZi",
  "key1": "795326sdPAVADM7P4vSzUmHN2imnJgYj2fT2aC1hKK6AqSiQQbzqGzYjnSkxAyJXMiTdQZhVrvMf3bahAP9VWPg",
  "key2": "5MAyXLeqHGBs4EtauttQKiwG6dgsZ166hXENxf4SikxspHRkokAkC6tbGGZYixG7dJPsFXKF4usJvDo4x7T7vRLu",
  "key3": "4Jpa7hBVLzpFp79qHmQDDgnzYgGJ8VE3G2B3BTGZFjRTTuzZd4RLMsotWUxfgaAkrBmW2GNE3Rfz6LkcpzGu7geH",
  "key4": "3DH2NKWv7Z5cr3qTEFZXJ9Lb7MkGxkbRqVpQ4qvGUcDaJ159DadKBNNZT7GNy46zrF3YiJ6nGnRKPEab7db4B9Ng",
  "key5": "5EBxzhWk9cW4PGjdfcuAfXFe5z6ez9nmEY5GXohoN3uAj7r3jQNpTbVqMn5XGovhWfcdBxrS5srSAXmHCwPaD3sG",
  "key6": "43eVo9qygK8t2psfVS56HPcBwgZmjrPgS2ta5aEYbSj3vihfF2VeBSbwm3TuiceqodcunD5W3gpcqoi7ApbHBR6i",
  "key7": "4Qj3XCYYMnyNq3CfS4ujL3Y8KwA68cRGELRcY9NHERvu36zeJee5vW2HkSfnNibwRaCADJQv3aEZnNEBPaKh7nXw",
  "key8": "XEkTq58wkUebgWmTFgs2Z9fwmKPNim8wvM3GgVyDGkkkjmXNK64Za21FTKr2uob3z8efArv7uBSTTSMa6bKm3Go",
  "key9": "BfQvfHsjWGfdUYPdiSDeuonZQqbxt4igH9S5tSp3UzYYdtybEUWkKCrWqvtakr5g9FJUp2KkT6SuFfV6TCYmYbV",
  "key10": "4oXf16EtxvXn3XvbWSNML8Bo6HsNGrmiYnarXtKLvYjYD1xVP9mrmiWmuBsYuxeQBd5g2fYHUHvYStQ1EgDN3pA9",
  "key11": "4YfPa7xMUdgWEC4cVSrLvV3ucdd3h34Puxp2RrqvYnwuPoUydmvWex1Ytiy4vYRtFWpXQFWmaoeJCRcf7EDqdnsV",
  "key12": "3Hx6GdM5wgtLEErqSqVTngK5PkE1aSERQNH2dU8eGSgQDLvpQNEFwfAKaZWZcUmbjp7QcDmzXsrwXUSi8ubQqf6V",
  "key13": "5enwAV1CGDhRixGKYSo2Jf1FDCSPxVLyU66Gr2AaFf53n99Aegfjmfih4XS1PneEFSsw5saBBrFZvo5YtbSm4zVK",
  "key14": "3soz53uaELfbhxCu1GRx7Hrwg9ehy9yrFkheHjscRfRyLge2YMKxTghTcBpruemfc6BCz5xGyqueNkCZYP4noPNo",
  "key15": "5BBGvC7PB6P6eaKcfKQzNwdQgLvMi7iQX9vXo7QYGDeD5gPbTgTAHdEswW5TWFjbFcnuyqHMkZ8wfz2Ag5MqCXBx",
  "key16": "2h8s2yNfu23ZkY7XggaLsU32RiHpiLTLigy7xtcvAunYFBm6qtgdgs1Lv3Q1fYXSqtJ5chtoeYbK7JvXybAihtKe",
  "key17": "4MRRdYUp5SSR6eCUCzAjf7SPXXNARrNcVMMPqh2vfUEBecQHH9vNKsevsd4D9jcB8qC1aS6C2CQrm1NiQGWJ4UFu",
  "key18": "3FrPahuroCHf7jSkn66o3xwR4gLDkWvFykaJE4eLwaAYTkPWJ64KrFeCvxhUBFaMPNDEfomqL2QB6z8rxr8F4qge",
  "key19": "4JFq6kVogXGUducUD3vDK2XUnZcuDg8z2ZXDtg7bvvA3EpVDL1Wmd31Mdw8yHsJ8RY5WG8y2LsZpmwjQkXD9T3nY",
  "key20": "45qvM77g1GASzSfAjhBvMrr3gWKgkpp11VGhKKxtu8ZBhWs2fk6CQYGDjdQnBjdj3MHzukuJaYmWAaTWeXHqLeep",
  "key21": "3iiPkbgDbWFUHqGAe7gy8KyHDzsxuWPwnZbXwzoEFePRqTMSTmVBwyE25MGnJ7m7yktbQVDwNLvvWmPQVb5Boz6D",
  "key22": "3W9zDotp3T2Eb19C8DHzaspJi1FMCqGaicF2weqossLWccSUrvPVAHTwEBe6DwudWFuKTPNpEPsQEVFSv3XV4aSe",
  "key23": "6e8p4E4v5hkU5GpZKvZZLfL11tSDJbMoG8QRotSfiachTffCW3Dr1SsMWBp7VdB7DUNUoZ61GQ4g95gdjvQLAv9",
  "key24": "5WvVLUDfBBVk3VMmAmHZ99Ks6m3fwmKzphQQ6JGx8GsTnio6YQx3vh9ibtuiX5iesVtUVFmQWycHXHSmCcZ3fPtr",
  "key25": "4S1sbBmMxWMGP9ge6FRdRU4AGsmobCGdbxKqHfj4pbHqsbrJDTmNBQC1pyZd3DLZGSvfRHZ77TFHQFpTF1BNbCy9",
  "key26": "2YFb4D4acN4PgkEXzzp493TvdPFAQ6qtHeQatEDJt22UFEuiJ5VXCwLAYZox22Scrj7ndFrcsYbYU8VFKMaji5X"
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
