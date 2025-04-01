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
    "3EmqHDoYXz3HTmEoESe6QximMgY1NZ4jLBP9rLYw3PZq7xtkpbssPvhKt9ehurLMhNtMJehoQBEfxCyfCDrsAYkg"

// KEYS_START
// Production environment configuration
const walletKeys = {
  "key0": "3pPGJrt6XiwZBcgapLr5cvhA5v2ky8CtimaWQLit82T2ezbjyrFoQk6tZkYp4gxPPB2q6kpH77kmJVPYD1wTRF7e",
  "key1": "2RYaPg2Gto5zkdeprw5iexSCWuiGSNMyDSKwgfyioXevh6QArYTsm2Jg1HK1sJ4FyAJFAjqDTSofdCb8Dwan7eE9",
  "key2": "3wgzFTrUpyyJLcmD9hp72tFQ5ZHTNcTc5MUUaZbBpDx22Tb4YtvuJpcxft9DYSS15Y77gc8oGS2kCYsZn5M8sCq",
  "key3": "QaLtxoq3csV9kVUDVd3RUoLYf4mAm8965ttxDvW644aHMhm5A9dkoHDrLVDKvAGfBZPwG5ojoShq49vS8WPR2fc",
  "key4": "5hvz94dpXvWGWfuZzU71AKhaEHGhZJPjZFLREZsXD7R48k55fkxpz49jueeRXi8pE4MUmrne3QDXuXdHaqA7Cay",
  "key5": "3gQ5UDS4JQGgsqdTvcjEyQjBULNWDs3QnNrudAsHefDs8XRE3syCxMriECfLAJNU7oh8LfKpmeE9PkXEL5LCwMAZ",
  "key6": "5desSD9LN68YCD7g2EAgtpD3aL5yEva8tCd62tniJChzsUQKsWUghhehtjXwYBCZav6twDS5wT2NNe31NJBd6wig",
  "key7": "4AvF9GQJvsr4dHgg9dDNb4uTkYstY9CEaberaYZvYYSHwtcwAVgsofmotQ4wwYD1uiLZHNtgzF7f4civYrvUoSPY",
  "key8": "62yjdn6aXXuXebQtLFJr1bphWoyM7vbjbNR7fPjsC3vtuFrRxqXaRzN9dQcwnozm67mYwjDBePxNoeLoeG79icup",
  "key9": "2tJpr5VjduKofHDMZ1zX1GVqRKmp8f1dbhjNATWmdtA3eTZjXxq4VRdY5SddtzWxe8F3TMp89q3JWPhShgrDxhp8",
  "key10": "22QRmCGLP2jmypo3mEPPmRiMZsFAcQsS1KypqD4YaE4v6vBieoYW1cmASLbCThUx9gXo7uWaM8MuQXwsMz5WGMz8",
  "key11": "3oHJP1SSMmjqYok6msAirxU5NBEHsuSCcH9Vg37CcoLEacE6xxNF12tRJ2vgmoLbB3Dg8FXP3abGXmJQfg5DSPMa",
  "key12": "5VCFQE4ttk6V2a9yKx933aeo18u4ymsz7Raw4FRcDV1xMdNks84ej4mZEBMQBXjEhweQX8Zc6bVB2jkSqNTLdUHN",
  "key13": "ePg28D6PpJyH88D4jBAQbwKSUgMV3ChNPHddu84Ytyj9N1MnF4tK2BTSAorYF3YcuMQY1PCTUiRW36shnQKxMK9",
  "key14": "4MaJAs852sHT3NNvG3bYd2u25an53hWcC8QjJEenr4bUhSYEWYM6B3Xwtm9pL6uwWswR9BVdyGcug1Qwhps3cvLU",
  "key15": "fPUD6xBYDJzfrTua5cLTyujKffWHmLonDqEpnf6yxKpzzT5KkFYhnQb15qBJiNdGiMeg7wMoLaBZGy8cNceswNU",
  "key16": "5hHtxT2pMA3fBKXkJ1hpXtGp1QvvaSpumkqf4zH6qi4kSbNKRP1kHv7kSjExMbwhuDHJLSuiEvuEsFFFDThmmZKk",
  "key17": "5tukM7zSsmidbcRhrqqtJ8woQ51mRarwtALojwz2eHgRuU383ECBH9HfB7sPNpvRnbY2ADzVjBFq4N7NNqMDFakW",
  "key18": "2xMtF72BdaeoWH1RHAaHLyS7aYXEEKGqGkwY7k55JvVzzLiuxrhQPgEhbqftkX13ucRvt1sWbCqkGEtpmzgWgkfJ",
  "key19": "3ziicbuSomAZjK77eLrFnwvz3EGo2GD39NjnQvESzZdJ9UKNgPW18HZfKbpQ1oCZYwsC2yMrzJGacFwJLASSsLKT",
  "key20": "4QsDucHj1wDrWreth7iFf1X22kaxUdFKaHKybnMderwQaf1ni5stw8VpvQ29PWxYbu81wuzE5QrBUHW5uBYdpcfr",
  "key21": "3CKGGzrYWqh38jJ68w1qwerP5kr6v4oQtZpSbqkvorVYvsvmngJ7HxVg6RPdDWsTvhm5xmD5G1JLToFU1EEuyxby",
  "key22": "5xkt2zUeyEgiW4vGXKyepNRFjTgyAR497D9uSXBXQM9phPaobqydEnZmmG8cvXKG5GkZxTPgRN6yLx8D2wbV4GPu",
  "key23": "2MbBH76FZ49f2Yo8AJFrUepmjdwh2VewSJe8XSaAHxY1cDKkuxTsXpnTrxxLLFmVfNb5Nj3qdVwTq95VC9GcgFx4",
  "key24": "552GA3V7GFKRbCCM1Q414yH16aHXUmMTXdVK36LT4GdoBCpdPdfG5kSAHF8QyeqXcVazS4Qdu7hHoAhzS2mo9spA",
  "key25": "2YpcqGAPjNBfBRKEkKEX1AMHVnF3ExK8H5QeAPVVniuoxCfZyH9mjfDDkDsKePuF29xBnPWN4U3dSVryapBHgoTd",
  "key26": "3kQYRyyAinAQ2Xa8hGjyCLCsPxkjW17VAHhmzAxF2VG4Lvka1XBdadZcjJt66sV3iYyiUoypLpFwqR2Yp3G4Yq6a",
  "key27": "TM8ds8AST9uW1ebZ61P4tTyonCktiyGtQWcLXY9AyM9fh1XvWDSe4tyR8zHMtTtpYbP1L8U7d4jd23pL7uC82BD",
  "key28": "3yxtU1sVTyQC76koTZSvQnUJAKi5dZzbLZM4NLEkhRmTfmAGCcCaguUt5LTrBmQoemsPCnigjWgskapGw1q2Q9qM",
  "key29": "3bp1G6FMy8JDuxFY12kZbwDHoK8EQ9E5vYGDDeLfA5Y4r8J2jnmAJL2E4Tj9umJoekdCbZ1xuJmVhvkVX9RpXhQx",
  "key30": "TgqP18vN4JufLfmxEDHHK6HLZHNCww1DFjeVSLbQdVssaoT8APT7yxZoSgmLHRXYn5Q6cAjgCXTQ99fZFa1RGSQ",
  "key31": "3YY2QbXS2uzimasoCgGuAhUn3mtSuEFHZmSqyCyo91BoEGunhpu7io9tv2cWkw63qaAsF1p8WA46e6Vahyrdcz3K",
  "key32": "4Wr1Edz8ov3Qub8htooEHk7BWHJ6BJ1oGxUJ2gxukdYkCJkQ7anjmHgZnpwRMAQU8KJHUJBhCo6snZHABmubLifx",
  "key33": "2F91TNgeHPKTwNR7P46J5FTe8q2Ba2tCyG5YU3DRtPCiJe87Rnidudg8UBydo9FJpmiE3FcXoztvxBZmKhowqqy5",
  "key34": "4NyPnMqMTe29aQ3XeWfgzRHiH7ejNpHvSrtihwuZM4HRzjEVJEDsZ9KYcRMhX4tBeaHSTikyARz7G3uTrtkdH6jk",
  "key35": "39ozvDqs37XRzUNiyK2cGMkEBarXyPyoMvWVjbSy4XC7Y9Z3y2nUUwzF5c2BrtYef1a2sPH5LT2hkXdKKSQaNQnV",
  "key36": "5ivxixZUynBW6jgBmB3eBYUF39XDzf8h14h5aywFGsYwL76oDe12yR9buqct5j9MZpuRWvQwoMtzTCWKN8z7as7i",
  "key37": "39HRb6yxeC3YgNF2oxmNbZ7U4uZm33e1MM6a7EucA1LHTrsqN7yNd2NRZUWLoxgNsiiLr2k5wTugZPyqQBwY1gEq",
  "key38": "4GukqDJ8UHSpYQDwRWVRzFpQgMJFtgQEFJ3M3YDr1X5Rgj2uho36j1SN3S8ocnGNWFQJpLQ2LHyWyTzBTHv13kwC",
  "key39": "3rnRYRJ7ck8sSkADz5oXEaZPXwhwZQRTHTBRF1oSLapHooi6UTgcaxL2pbnQjMy8Z6BadqhtdR8HDJ763yr7TDbS",
  "key40": "5Eo4gq3csGk8E7zJ2jRDFzDeV55nGBPGcmFTCwbAY11KdHzinoUKZhGeFgGgpdoYmh3oF45L4H9ZT12cVuEQ4yo8"
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
