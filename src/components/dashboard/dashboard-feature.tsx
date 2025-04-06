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
    "4Gh5LRibwhL8DBS6HrTeus2X5ExPL3qfwYyma1S269nMAP8jWFFufscBsLVTwrU1cTVcE7eN5x8AtmCa27bmmmTV"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "67RqvCQBiatdfXyptTR5PLXGfJ71K1uYAYPVwwLsmTC17nCdoYMMWQwrtbaDEqtYKBQCZFgQr53MfpmHSmRimKpt",
  "key1": "4VghE9VsaWLFdM8xekanGH4iRjh9NDg3nGYcaxuVEyyjGjSpxVYu464bgydoaZ5z1Z1uuM6XGoprR8ebSkFBYqH8",
  "key2": "44H6xBhGHBWuvUQt6FEoTLUxPftapAoPRsesyh9wn6Ri6a3RXkB6NMQ8NhWvb2K1R32uma31ZintRbNsBDvDrV3o",
  "key3": "65A8oehJF7atTa2dWHk9BuuoUuL29nccT6SowabpDHqx6c13eWgvCmpPjk53sujtxwdzoE7zKGP2rU6LCN3zBiJg",
  "key4": "3yV4uWVBRnfJL8ypTjTA83BPcw81HiHsBJxRK1iTvVVhAFntWd7xQZ4nfrtsTmokn2cscFXrNvJSpPwuUsgsXYfL",
  "key5": "5FyTUpr7gon9rgn1VoK18BXHSZYE61PPMcgqUfcNQVRy9sLkb5HDKjEbjvGJa5L8L77DJUyVhftKG4DeY9F4UvzH",
  "key6": "5UzF1vg643hLDxcVqWeXrrQdJ9unm1FYbyT8c9YrqwAa3a4TBge1pTP5JLxRDHM2yoR7gmqrVapSHj8Rdn1uP1b3",
  "key7": "4xBoYSCawj3A62M5v32oQWLWViKumeG5zXNuJuvEhr6FRnhjqk1N6aKcZxiwvfRxfDZva6ogoLniVCB7HKvp2MS5",
  "key8": "5cjALhW4ZAzXGg6pC5TYyesDSuG87AVukH9W28Xby1i44EWQyqjRS5SmWecT9hZ6gUDBfSAHpJZw2JAraEnAg17Z",
  "key9": "vT7i5g4bc41xcLVFhfRPmUwKLDF3uJwxJu2aEGSqZwViC9SRfqWZsuJe5opuVjttRC3qAD7vWq6L7dPeoEDZhxq",
  "key10": "2Jbay9TQoQa1FsEBMK4b76acQcf3T7jkh4ofmceq88qqPVWrYBfJ3WS1wnZaEPxKBKvjgr8RS8GpPqS5XozPqPM",
  "key11": "4ELBBsnC65wQ2PgaboJyjSRrmrLZdyEVWyPaqspysirHD4HvpXraz1GYbbVFmkjQwnNV4NR7rkiGeRN5kxDJ3E5i",
  "key12": "222v7gzC1xPrUo5SeW8J8J6a8pqkgz54MJonyYt2AjQ5YLkriMcZryZQiG9gZTiTXhHkMJCoQowRnwi28Yp5kHvh",
  "key13": "2Hin8CvQZe3zdkxvPDbugB94PSSxfqndVk918S3JwedRvEwuPdCuRumaM5vhfJHHRz14MbKry5xxJWbe7AvXb8Lz",
  "key14": "tds5teJRmLxoaq4ETgBxPq634BeL3ez8uWB8g1GtpxFFwaV4RswVimP9ALgRLXEpnbuh4Bp7CS22J2TqecWyTjH",
  "key15": "3UUGDVzCiAUEisXc61SG92tANkh4ZuTpx4xnSXxT9ysN2QPZhxL4C1xvDbZQYpzXdbVKC8GVL2qxmdZuQ8WaMT1g",
  "key16": "DQmVamuBGXLGuCW28tiSWbBxeatBy42WmNyyDTvJPrQkngU3VVSijYVupwHT3v1RyEuxuiXsFzZoE8TaUqTioHw",
  "key17": "34Fvdb6mJRJEPoz6P5Kf6CsAmEZFQadsr8msL6TeiQtSN1r2jYrc2GeSc6aR9FmnCGxjQzr78cMo8NpQ7Z4AjrN",
  "key18": "2xLgLhVKjWEzgLvXRudjFJXMwTFeSvbo1zUKDpHLyepRSNZWhX7Fd5bhvC53iRQWz8DK5U4Rwh4GenXAsY74oXjg",
  "key19": "3V3vwo5krHVQKRGar43dDTjAbdSuGTCTAuhuBoekyQHi4mg1WzCYFucjcZiY5douAGWnDsQT2P8JqDjADxfR6i33",
  "key20": "2nMW9iWpvfUEF7T8HQbbFqwyhcUR89NqF7YcLMRwWUZ8FHHcUoc85eodJNjmwBoVBi5nPL5LCAD3bTfnisMSJ8hy",
  "key21": "3jW45NbNtfnJ9Z2rgJ4nPXGDj7udenarJZTE3PBsiSBTUJS5VJ5uwFU2s6JaJGeQnbv2mhW2jMi2rpAtfJm2Af7C",
  "key22": "5ze6xLRirQqvUsRtLcAg8HcNNKrRAXjwzRXdEoXkziWv6HLYT8Z7wgzAQnBAfqKbEJD5viNE3j3HXxQwmsh8hmdf",
  "key23": "3G4svdhUQrwgryvb1jJ34NaaFKS25TJAU1ePZYWojJACUAZ9cSd2kLjF14KVXBhm78PgfK1sUkoNWF9NfbkNJNuf",
  "key24": "3paii2HPhA9aBkiHpmCWnaYcVJkx1tKKRuS6vjh4yU3oy5ZdRjkyQmbUGjVB2xSyfSx9NG2CSG1KDD3u7QKLx3oS",
  "key25": "3xWg7LqrRHFiU1cmbwapfj4WtueKY8U7kBJ6w4HnrpNFVq3EeG6eKQRVi4nM1D2dEgbLVRjZxQdFgrk4UaEF5HeF",
  "key26": "45zpGxwhZ8nZ6eyadFvdnvYtwra5RqPMVioLHCB6y2hATpjnRBZ9p1927CBsjX9kTGrV7xkeufdGvd67X4QvQH9t",
  "key27": "4WQKEQTwFSGohUFQH4ZFcP2T9BYY3BWxHnUQ8b1Cr1ukisajC3kSjU7o5hm8twmpyTXewMCuW4bPHJYgQcyK8Yyo",
  "key28": "5WwpkfTSb2Aa9PACiusb7B6hXJVnkU9N6uPsuzhu1e13Lj2oedSkudzce7r9h8om2TgMSxbBvoiaC8Ljg5XHXePL",
  "key29": "5cnY7xgBB8YgKW5nKZKwF3KU4whytB6wQi9dYhVUjQ3gPdXqgxJhi2sQsHNokKFJgGiCECCszwPf81M5UiPrVYA4",
  "key30": "4ZEUz8DLq7yK1ar4rw2nhuGTugQZqxJP3gMbnCZEwowV9fpF5BEP2Y6F1uuRFhiEzgzQnPdSEmBV9TtU56R5Q6ty",
  "key31": "WF9jWk7SGJp2PSVcXnGnpiPre2t1271Et7LZNe9rV3TnLaeYjnRQJ4RfpkAUuBxvT5bWEa2gi5cGAjUy2Vj1ABg",
  "key32": "5Wq78UaoDQbMUx6NPJWA88idewWpCSgRfzQCzfRuMNRdqqtvcNhg1QHFb3n7YCxhUz4yiHwDSdQPH3hcYjBe5sqi",
  "key33": "49Q9idQNMBwHQ1prcukCQAt3nKGYPJtEyRparjwKmYVS1rEdHVzGziXXYKWMWe34AAqKMDD2R24CzcGXyejaL7TA",
  "key34": "4dXmqBNAJNC1oJFDbbVcEwVYcqh1qLwsBVvND9ypnLJqDAJN6aP5xa8G5UbBPerBGQuKMr4Rwg95cULEzxmZf3ea",
  "key35": "5WsCQjN8RGjHa9DVU3E4rHLh1fwRpMAqBFYBCDE6A6rJefsQNjZcZFpUste9u9Hbh4Xmu6YCKjtuuyGFAgviRBoz"
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
