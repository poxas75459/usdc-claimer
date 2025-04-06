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
    "QJPUN77e11bFZZEtKR6mcwEdoLXqgMdMzQPcuYPKeu9ZR3aMJTcVMfmhVr7RVicabCjRPBz2Rctq7xdG2CatsMA"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3RugrhyMz4ZueorZ3ijHx1j3L6qFExHcftY1EgKrUVTR86JGsPyFMqVhoLduLmKy5bs2PtbSPeM8LrDKDmTR87fe",
  "key1": "2nP4WpJcGR1WUy8eqYpXc1s23baZyfBtwW6pMNNmAzDJGKWiwmhR25VWYQHvBtqzoPo9UfS1BscUDgkjvdP2qend",
  "key2": "36HWrrk5YGW64hGcdPB8Bc87rdFJPaxhF8jUSPibyriKyNCrmjvVQM1iJyo3XXW7hdFLekmUMBiCKn1TrmTWWSEc",
  "key3": "384MuQuZRPKT8o91KHVwWHpfmaf1tUXAz5db2bk2E1bVU2oN4GC3vwCnUNayfnCJztWyuoR85JK7XLREAM6fG59p",
  "key4": "5EvUThPVf7gGpKG4hxTiV6yaNhaULEugxHGRBCfA92b9Tz2wG3jThecnyMJGzHNUajLZhcE6ECtA7rx1KNoLFLMW",
  "key5": "4GitC9tgYgBMPTRvbA44a8A2Ssih79RULwxHUYooWjCTkR1bVqYKY77HKNeZNYeqYaje4Ko9CQi4Xpv1W1nLtJ9s",
  "key6": "3fRZiuA4z73iDKu2t4hkWTYPCkXH5ACh5DNzp5pRJgM3yssiyF2BMsTKVxipcTbxjLfeGTHxmSZBzUP6rcH23ce1",
  "key7": "tB8hmBc6e8eScexyhpCVWGbdh1euYLcyE89oAJy979Yezfrmh8V6HSCAsNV5P3cdeEu4TnzkAEGynoeQvAmLGvd",
  "key8": "36u7MBoymxMPJ76jn8ZC6Bz4LHbSBf772Lwuk2GXyzYFbp2VtzwS5TFQGBUiJaCMHbQox938uZSKrkYHWhnxwHEu",
  "key9": "5KBezYqbS3WXoTBVjqZMp7iuWKKApk3QCjhwms5bn55BmfJ4VyjNv12sbuDZooAo3nLNj72hiFA2pV5HwSjUQ76A",
  "key10": "3q4JnXhQ5CB7keZEsqNx6XpxRoBEyGrGk8qDAxkytohgNRMYQWd8zqTRykr5v6yHKqMigdr6fQ5rTFR78NVHNazY",
  "key11": "5Dm86krBnog2X3MBGqsanSkrBSubU3CPmXt9MSw6AXRzmJeZ95J9B6oDLFhwLp8fzR2LX61TSruGNLTsqXVL6LUv",
  "key12": "2hwvAceK3mcRocn2cwe7Ncny5x1ms9aB4GThAPGa1mWufLHYqL5KnXTtJWaDbXW1R6WDgHEboQTq5sz6poaLPM7m",
  "key13": "3U4zvzJ2aCDrDdiQsB3R1Y2CsZ8wnjbrNzDs8RUoEXfPKgsAnnv7FzkDFYXLg2VbkL1ov5kvL2YhKugBr3MEJBKV",
  "key14": "4Te87yLpR646ARiqdLhhRAnq1w134FmGjpHm5CxtF7KbMrU6UHwSfVVTrNfSzeVKhaMFbix2cDF4tcXzvm895V2S",
  "key15": "4hRsczWQ1Ujb9GChyV1E6d64FJc5hEzBkQru94spApuonGT29D2KagfAuAsFAZjy2tKTJ9haZq5StfkTshGmis5X",
  "key16": "3ifYi9eyRTGREN8QweSbtXVhxL24kLMWUAZZsjhs2MWEPGKnR3ofYNRRDF4HTh89MwSh6YxErU9Fe8MrzY6SX5nw",
  "key17": "5Tzv7zhdawiQuY7th34vuSMeaztpQmuwYkHeZwoods32GgvCyQ7Qikimh2d27qD9FyqYURe7bCDYyJcHbsBEmxSJ",
  "key18": "2UVKB333XtcR56xdReDVrvd7kHNK1XcAfbTv3Xu8RnaurXca4j5XadvP3TSLiqjn4T8Kqycg6dG79eyzptRjBfi3",
  "key19": "3KSav7GB528pTsRYT9RaSznMABmmTsXMZQv55HUhAC4EzW6tP9b1UEtXqCNdq3UiUEpdfze5dKZcRZbMHP2VWxQa",
  "key20": "4sgW4WNyBMpRHbmqZT4vp8JbGGKDGtZpsP49PtczrVfioCQNahttcTkomQrDyhX7rvLXFnuyzmA5mVRS1zuaoprd",
  "key21": "4uNkUXNkpdiG58AsqjKMC6uAC1JuwYScadBSFiFKpwFTn4XgW3C8Ljh3T17Ud6v4Y6uPf2zurz38xXEaPxhqK9yy",
  "key22": "5YGjEC9uVKYtWKbjg4NQmhz73ZvxjAGvkk1dHADYKhpNLdYgsXWZiixzMNiMFTAt29E7BA4jZ8Xpoz42HRViyX3C",
  "key23": "55HhirbgsdV9L8cU2DAx7f3GG6hUGjLr2zcgook21zBuhHjq6KRejDgcNivnNtuEkccEfxZi2XZV7dEyq8iDR88f",
  "key24": "5AqABG2e4pu2MemYBSqY3jHhQH4DDbvjuDSQti7gRDZG8bRjGJruVeiNfEtXBFMQbUjSwh3xyW6Ao1hbSCCCtxFw",
  "key25": "aNDJ4o5zub895dG8mQp6DbFNKuuGrHqkQ6XKnxA4UHZaB5XBbps75EEdzFDkW8ssR77LmE4Yb1ZeWjkw3FVBMfY",
  "key26": "7Q4jZnHG8qW5JMfo8FBj6aC6geNNaXhwA72Rcz4vSaBfbAy2HYVYr8DH12hnfoTyzWiJLe4BDf3a15QsBoh7CkN"
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
